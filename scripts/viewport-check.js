/**
 * Viewport check.
 *
 * Loads the built site in headless Chrome through the DevTools protocol and
 * measures it at real device sizes. The home page must fit one screen exactly;
 * every route must expose the theme toggle.
 *
 *     npm run build
 *     npx serve -s build -l 4173      # in another terminal
 *     node scripts/viewport-check.js
 *     PREVIEW_URL=http://127.0.0.1:3000 node scripts/viewport-check.js   # dev server
 *
 * Set PARTS=1 to print the measured height of each block on the home page.
 */
const { spawn } = require("child_process");
const fs = require("fs");
const http = require("http");
const path = require("path");

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    process.env.LOCALAPPDATA &&
      path.join(process.env.LOCALAPPDATA, "Google\\Chrome\\Application\\chrome.exe"),
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].filter(Boolean);

  return candidates.find((candidate) => fs.existsSync(candidate));
}

const CHROME = findChrome();
const PORT = Number(process.env.CDP_PORT || 9222);
const URL_BASE = process.env.PREVIEW_URL || "http://127.0.0.1:4173";

const viewports = [
  { name: "iPhone SE 375x667", width: 375, height: 667, dsf: 2 },
  { name: "Pixel 7 412x915", width: 412, height: 915, dsf: 2.6 },
  { name: "iPhone 14 Pro 393x852", width: 393, height: 852, dsf: 3 },
  { name: "Laptop 1280x720", width: 1280, height: 720, dsf: 1 },
  { name: "Desktop 1440x900", width: 1440, height: 900, dsf: 1 },
  { name: "Wide 1920x1080", width: 1920, height: 1080, dsf: 1 },
];

const routes = ["/", "/expertise", "/experience", "/projects", "/articles", "/reading", "/contact"];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function getJson(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(body));
          } catch (error) {
            reject(error);
          }
        });
      })
      .on("error", reject);
  });
}

async function waitForChrome() {
  for (let i = 0; i < 60; i += 1) {
    try {
      return await getJson(`http://127.0.0.1:${PORT}/json/version`);
    } catch {
      await sleep(250);
    }
  }
  throw new Error("Chrome did not expose the debugging endpoint");
}

(async () => {
  if (!CHROME) {
    console.error("No Chrome or Edge binary found. Set CHROME_PATH to point at one.");
    process.exit(1);
  }

  const userDataDir = path.join(process.env.TEMP || ".", `dsh-chrome-${Date.now()}`);
  const chrome = spawn(
    CHROME,
    [
      "--headless=new",
      `--remote-debugging-port=${PORT}`,
      `--user-data-dir=${userDataDir}`,
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-extensions",
      "--disable-gpu",
      "about:blank",
    ],
    { stdio: "ignore" },
  );

  try {
    const version = await waitForChrome();
    const ws = new WebSocket(version.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    let id = 0;
    const pending = new Map();
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.id && pending.has(message.id)) {
        const { resolve, reject } = pending.get(message.id);
        pending.delete(message.id);
        if (message.error) reject(new Error(JSON.stringify(message.error)));
        else resolve(message.result);
      }
    };

    const send = (method, params = {}, sessionId) =>
      new Promise((resolve, reject) => {
        id += 1;
        pending.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params, sessionId }));
      });

    const { targetId } = await send("Target.createTarget", { url: "about:blank" });
    const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
    await send("Page.enable", {}, sessionId);
    await send("Runtime.enable", {}, sessionId);

    const rows = [];
    const problems = [];

    for (const viewport of viewports) {
      await send(
        "Emulation.setDeviceMetricsOverride",
        {
          width: viewport.width,
          height: viewport.height,
          deviceScaleFactor: viewport.dsf,
          mobile: viewport.width < 900,
        },
        sessionId,
      );

      for (const route of routes) {
        await send("Page.navigate", { url: URL_BASE + route }, sessionId);
        await sleep(700);

        const { result } = await send(
          "Runtime.evaluate",
          {
            expression: `(() => {
              const de = document.documentElement;
              const toggle = document.querySelector('.theme-toggle');
              const rect = (sel) => {
                const el = document.querySelector(sel);
                if (!el) return null;
                const r = el.getBoundingClientRect();
                return { top: Math.round(r.top), h: Math.round(r.height), w: Math.round(r.width), left: Math.round(r.left), right: Math.round(r.right) };
              };
              const copy = document.querySelector('.stage__copy');
              const shot = document.querySelector('.stage__portrait');
              let columns = null;
              if (copy && shot) {
                const a = copy.getBoundingClientRect();
                const b = shot.getBoundingClientRect();
                columns = {
                  copyRight: Math.round(a.right),
                  photoLeft: Math.round(b.left),
                  photoRight: Math.round(b.right),
                  gutter: Math.round(b.left - a.right),
                  verticalOffset: Math.round((b.top + b.height / 2) - (a.top + a.height / 2)),
                  pageRightGap: Math.round(document.querySelector('.stage__grid').getBoundingClientRect().right - b.right),
                };
              }
              return JSON.stringify({
                scrollHeight: de.scrollHeight,
                clientHeight: de.clientHeight,
                theme: de.dataset.theme || '(unset)',
                hasToggle: !!toggle,
                columns,
                clipped: (() => {
                  const main = document.querySelector('.shell__main--stage');
                  if (!main) return null;
                  return main.scrollHeight - main.clientHeight;
                })(),
                parts: {
                  header: rect('.site-header'),
                  stage: rect('.stage'),
                  grid: rect('.stage__grid'),
                  portrait: rect('.stage__portrait'),
                  copy: rect('.stage__copy'),
                  eyebrow: rect('.eyebrow'),
                  title: rect('.stage__title'),
                  summary: rect('.stage__summary'),
                  links: rect('.stage__links'),
                  actions: rect('.stage__actions'),
                  foot: rect('.stage__foot'),
                  footer: rect('.site-footer'),
                },
              });
            })()`,
            returnByValue: true,
          },
          sessionId,
        );

        const data = JSON.parse(result.value);
        const overflows = data.scrollHeight - viewport.height;
        const mustFit = route === "/";

        rows.push({
          viewport: viewport.name,
          route,
          scrollHeight: data.scrollHeight,
          viewportHeight: viewport.height,
          overflow: overflows > 2 ? `+${overflows}` : "fits",
          theme: data.theme,
          toggle: data.hasToggle ? "yes" : "NO",
        });

        if (mustFit && process.env.PARTS) {
          console.log(`\n${viewport.name} /`);
          console.table(data.parts);
          if (data.columns) console.log("columns:", data.columns);
        }

        if (mustFit && overflows > 2) {
          problems.push(`${viewport.name} ${route}: overflows by ${overflows}px`);
        }
        if (mustFit && data.clipped && data.clipped > 2) {
          problems.push(
            `${viewport.name} ${route}: stage clips ${data.clipped}px (no page scroll, but content is cut)`,
          );
        }
        if (!data.hasToggle) problems.push(`${viewport.name} ${route}: theme toggle missing`);
        if (data.theme !== "light") problems.push(`${viewport.name} ${route}: theme is ${data.theme}`);
      }
    }

    console.table(rows);
    console.log(problems.length ? `PROBLEMS\n${problems.join("\n")}` : "All viewports OK.");

    // Confirm the toggle actually switches the palette in a real browser.
    await send(
      "Emulation.setDeviceMetricsOverride",
      { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false },
      sessionId,
    );
    await send("Page.navigate", { url: `${URL_BASE}/` }, sessionId);
    await sleep(600);
    const before = await send(
      "Runtime.evaluate",
      { expression: "getComputedStyle(document.body).backgroundColor", returnByValue: true },
      sessionId,
    );
    await send(
      "Runtime.evaluate",
      { expression: "document.querySelector('.theme-toggle').click()" },
      sessionId,
    );
    await sleep(400);
    const after = await send(
      "Runtime.evaluate",
      {
        expression:
          "JSON.stringify({ bg: getComputedStyle(document.body).backgroundColor, theme: document.documentElement.dataset.theme, stored: localStorage.getItem('theme') })",
        returnByValue: true,
      },
      sessionId,
    );
    console.log("\nTheme switch in browser:");
    console.log("  before:", before.result.value);
    console.log("  after: ", after.result.value);

    await send("Target.closeTarget", { targetId });
    ws.close();
  } finally {
    chrome.kill();
  }
  process.exit(0);
})().catch((error) => {
  console.error("FAILED:", error.message);
  process.exit(1);
});
