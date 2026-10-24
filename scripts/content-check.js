/**
 * Content check.
 *
 * Renders every route of the site to static HTML without a browser, so the
 * markup and copy can be reviewed from a terminal:
 *
 *     node scripts/content-check.js            # summary table plus basic checks
 *     node scripts/content-check.js --write    # also dump text to .content-check/
 *
 * It compiles the TSX on demand with Babel, so it never touches the build
 * output and needs no dev server.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const write = process.argv.includes("--write");
const outDir = path.join(root, ".content-check");

// --- Node runtime shims -----------------------------------------------------

const Module = require("module");

// Stylesheets and image imports are webpack concerns; stub them out.
const originalLoad = Module._load;
Module._load = function load(request, parent, isMain) {
  if (/\.(scss|sass|css)$/.test(request)) return {};
  if (/\.(png|jpe?g|svg|gif|webp|ico)$/.test(request)) return path.basename(request);
  return originalLoad.call(this, request, parent, isMain);
};

const babel = require("@babel/core");

const compile = (module, filename) => {
  const { code } = babel.transformSync(fs.readFileSync(filename, "utf8"), {
    filename,
    presets: [
      [require.resolve("@babel/preset-env"), { targets: { node: "current" } }],
      [require.resolve("@babel/preset-react"), { runtime: "automatic" }],
      require.resolve("@babel/preset-typescript"),
    ],
    babelrc: false,
    configFile: false,
  });
  module._compile(code, filename);
};

require.extensions[".tsx"] = compile;
require.extensions[".ts"] = compile;

// Resolve extensionless imports the way the bundler does.
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function resolve(request, parent, isMain, options) {
  const relative = request.startsWith(".") || request.startsWith("/");
  if (relative && !path.extname(request)) {
    for (const candidate of [".tsx", ".ts", "/index.tsx", "/index.ts"]) {
      const attempt = path.resolve(path.dirname(parent.filename), request + candidate);
      if (fs.existsSync(attempt)) return attempt;
    }
  }
  return originalResolve.call(this, request, parent, isMain, options);
};

// Node reads the ESM-syntax barrel file as a real ES module and cannot resolve
// its extensionless imports, so seed that module from the cache by hand.
const componentDir = path.join(root, "src", "components");
const barrelPath = path.join(componentDir, "index.js");
const barrel = { exports: {} };
for (const name of [
  "Navigation",
  "Footer",
  "Main",
  "Expertise",
  "Timeline",
  "Project",
  "Certifications",
  "Contact",
  "Blogs",
  "ReadingJourney",
]) {
  barrel.exports[name] = require(path.join(componentDir, `${name}.tsx`)).default;
}
delete require.cache[barrelPath];
require.cache[barrelPath] = barrel;

// --- Render -----------------------------------------------------------------

const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const { StaticRouter } = require("react-router-dom/server");
const { Shell } = require(path.join(root, "src", "App.tsx"));
const { routes: navRoutes, redirects } = require(path.join(root, "src", "data", "nav.ts"));

const routes = [...navRoutes, "/definitely-not-a-route"];

/** Which page-level layout each route is expected to use. */
const layoutFor = (route) =>
  redirects[route] ? "redirect" : route === "/" ? "stage (one screen)" : "flow (scrolls)";

const toText = (html) =>
  html
    .replace(/<\/(p|h1|h2|h3|li|dt|dd|div|section|figcaption|footer|header)>/g, "$&\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/[ \t]+/g, " ")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");

const rows = [];
const problems = [];

for (const route of routes) {
  const html = renderToStaticMarkup(
    React.createElement(StaticRouter, { location: route }, React.createElement(Shell)),
  );

  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((match) =>
    toText(match[1]),
  );
  const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
  const links = [...html.matchAll(/<a\b[^>]*>/g)].map((match) => match[0]);
  const text = toText(html);

  // The home page must be the only route with the single-screen stage layout.
  const isStage = /class="stage"/.test(html);
  const expectStage = route === "/";

  rows.push({
    route,
    layout: layoutFor(route),
    h1: h1s[0] || "(none)",
    words: text.split(/\s+/).length,
    themeToggle: (html.match(/aria-pressed=/g) || []).length,
  });

  if (h1s.length !== 1) problems.push(`${route}: expected one h1, found ${h1s.length}`);
  if (imageWithoutAlt(images)) problems.push(`${route}: image without alt text`);
  if (bareTargetBlank(links)) problems.push(`${route}: target=_blank without rel=noreferrer`);
  if (links.some((tag) => /href=""/.test(tag))) problems.push(`${route}: empty href`);
  if (/[\u2014\u2013]/.test(text)) problems.push(`${route}: contains an em or en dash`);
  if (isStage !== expectStage) {
    problems.push(`${route}: stage layout ${isStage ? "present" : "missing"}`);
  }

  if (write) {
    fs.mkdirSync(outDir, { recursive: true });
    const file = route === "/" ? "home" : route.replace(/^\//, "");
    fs.writeFileSync(path.join(outDir, `${file}.txt`), text);
  }
}

function imageWithoutAlt(images) {
  return images.some((tag) => !/\balt=/.test(tag));
}

function bareTargetBlank(links) {
  return links.some((tag) => /target="_blank"/.test(tag) && !/rel="noreferrer"/.test(tag));
}

console.table(rows);
console.log(problems.length ? `PROBLEMS\n${problems.join("\n")}` : "Checks passed.");
