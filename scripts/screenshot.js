/**
 * Screenshot the built site in headless Chrome, so layout changes can be
 * reviewed as images rather than guessed at.
 *
 *     npm run build
 *     npx serve -s build -l 4173      # in another terminal
 *     node scripts/screenshot.js                       # 1440x900 home, light + dark
 *     node scripts/screenshot.js /projects 390x844     # one route at one size
 *
 * Images land in .screenshots/ (git-ignored).
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
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
  ].filter(Boolean);
  return candidates.find((candidate) => fs.existsSync(candidate));
}

const CHROME = findChrome();
const PORT = Number(process.env.CDP_PORT || 9333);
const URL_BASE = process.env.PREVIEW_URL || "http://127.0.0.1:4173";
const root = path.join(__dirname, "..");
const outDir = path.join(root, ".screenshots");

const route = process.argv[2] || "/";
const size = process.argv[3] || "1440x900";
const [width, height] = size.split("x").map(Number);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getJson = (url) =>
  new Promise((resolve, reject) => {
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
    console.error("No Chrome or Edge binary found. Set CHROME_PATH.");
    process.exit(1);
  }
  fs.mkdirSync(outDir, { recursive: true });

  const userDataDir = path.join(process.env.TEMP || ".", `dsh-shot-${Date.now()}`);
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
      "--hide-scrollbars",
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
    await send(
      "Emulation.setDeviceMetricsOverride",
      { width, height, deviceScaleFactor: 1, mobile: width < 900 },
      sessionId,
    );

    const slug = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-");

    for (const theme of ["light", "dark"]) {
      await send("Page.navigate", { url: URL_BASE + route }, sessionId);
      await sleep(500);
      await send(
        "Runtime.evaluate",
        {
          expression: `(() => {
            if ("${theme}" === "dark") {
              const toggle = document.querySelector('.theme-toggle');
              if (toggle && document.documentElement.dataset.theme !== 'dark') toggle.click();
            }
            document.documentElement.dataset.theme = "${theme}";
            return document.documentElement.dataset.theme;
          })()`,
          returnByValue: true,
        },
        sessionId,
      );
      await sleep(350);

      const shot = await send(
        "Page.captureScreenshot",
        { format: "png", captureBeyondViewport: false },
        sessionId,
      );

      const file = path.join(outDir, `${slug}-${width}x${height}-${theme}.png`);
      fs.writeFileSync(file, Buffer.from(shot.data, "base64"));
      console.log(`wrote ${path.relative(root, file)}`);
    }

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
