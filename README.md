# Shripad Khandare — Portfolio

Personal portfolio for Shripad Khandare, a computer engineer working on services, cloud
infrastructure, automation, and practical LLM tooling. Built as a single-page React application
with client-side routing.

## Design intent

The site is deliberately quiet. It is meant to read like notes kept by someone who cares about
the work, not a pitch: monospace metadata, hairline rules, restrained colour, and typography
that carries the hierarchy instead of decoration.

- **One accent colour.** A single blue marks links, active navigation, and inline emphasis.
  Nothing else competes for attention.
- **Two families.** Inter for prose and headings, IBM Plex Mono for labels, dates, metrics, and
  stack tags. Newsreader (serif) appears only where the copy is an essay, on the reading page.
- **A home page that fits one screen.** Nothing below the fold, nothing to scroll for. Spacing
  scales with viewport height and the portrait steps down at each breakpoint, so it holds up on a
  short laptop as well as a phone.
- **Light by default, dark on request.** The light palette is a warm grey rather than white. The
  toggle in the header switches to dark, and the choice is remembered.
- **Hairlines over shadows.** Sections separate with 1px rules. Cards get a barely-there border
  and lift 2px on hover at most.
- **No animation theatre.** Transitions are 180ms and limited to colour, border, and small
  transforms. `prefers-reduced-motion` disables the rest.

Copy is written in plain first person. No em dashes, no superlatives, no claims the work does not
support.

## Theming

Tokens live at the top of `src/index.scss`: the light palette on `:root`, the dark palette on
`:root[data-theme="dark"]`. Both are explicit, so nothing depends on the operating system
setting.

`src/hooks/useTheme.ts` owns the state. A small inline script in `public/index.html` applies a
stored choice before first paint, so there is no flash of the wrong theme. The header toggle and
the one inside the mobile drawer stay in sync through a `themechange` event, and the choice
follows across tabs.

To change the default palette, edit `:root` in `src/index.scss`. To change what the browser
chrome reports, update the `theme-color` meta tag and the two hex values in `applyTheme`.

## UI components

Primitives are hand-built on the design tokens rather than pulled from a component library:
buttons, tag pills, definition rows, the social icon set, the two-state theme switch, and the
dot-grid backdrop. That keeps the bundle free of a runtime styling dependency and lets every
piece share the same tokens.

[ObsidianUI](https://www.obsidianui.dev/components) was evaluated and not adopted. It targets
Next.js and requires Tailwind CSS plus Motion, while this project is Create React App with
hand-written SCSS. Its catalogue is also almost entirely animated and decorative (cursor trails,
WebGL canvases, marquees, parallax galleries), which works against the restrained direction here.
Worth revisiting only if the project moves to Next.js and Tailwind, and then one piece at a time.

## Structure

```
src/
  App.tsx                 router, shell, 404, scroll restoration
  index.scss              design tokens, base styles, shared primitives
  hooks/useTheme.ts       theme state, persistence, cross-instance sync
  data/                   all site content, typed and in one place
    profile.ts            name, role, summary, specs, social links
    projects.ts           the 12 projects with stack, year, and links
    areas.ts              the five areas of work
    journey.ts            roles, education, certifications
    writing.ts            Medium articles and reading notes
    nav.ts                navigation items and redirects
  components/             one component per route section
  assets/styles/          one stylesheet per component
  assets/images/          project screenshots, badges, portrait
scripts/content-check.js  renders every route to text for copy review
```

Content lives in `src/data/`. Adding a project, role, or article means editing one array; no
markup changes required.

## Routes

| Path | Contents |
| --- | --- |
| `/` | Hero, at-a-glance specifications, selected projects, areas of work |
| `/expertise` | The five areas of work with tooling |
| `/experience` | Roles, education, and verified certifications |
| `/projects` | All projects |
| `/articles` | Writing, linked to Medium |
| `/reading` | Reading notes and the Goodreads shelf |
| `/contact` | Direct channels and the contact form |

`/work`, `/writing`, `/about`, and `/certifications` redirect to their canonical routes.

## Getting started

```bash
npm install
npm start          # http://localhost:3000
npm run build      # production bundle in build/
npm test           # jest suite
```

### Reviewing the copy without a browser

```bash
node scripts/content-check.js          # summary table plus markup checks
node scripts/content-check.js --write  # also dump plain text of each route
```

The dumps land in `.content-check/` (git-ignored), which is the quickest way to proofread the
whole site as text. The script also asserts that the home page is the only route using the
single-screen `stage` layout.

### Checking the layout in a real browser

```bash
npm run build
npx serve -s build -l 4173      # in another terminal
node scripts/viewport-check.js
```

This drives headless Chrome through the DevTools protocol at six device sizes, from an iPhone SE
to a 1920px desktop. It fails if the home page needs more than one screen, if anything is clipped
inside the stage, or if a route is missing the theme toggle. `PARTS=1` prints the measured height
of each block on the home page, which is how the breakpoints above were tuned. Point it at the dev
server with `PREVIEW_URL=http://127.0.0.1:3000`, and set `CHROME_PATH` if Chrome is somewhere
unusual.

### Contact form configuration

The form posts through EmailJS. Credentials are read from the environment first and fall back to
the values committed in `src/components/Contact.tsx`:

```
REACT_APP_EMAILJS_SERVICE_ID
REACT_APP_EMAILJS_TEMPLATE_ID
REACT_APP_EMAILJS_PUBLIC_KEY
```

See `docs/emailjs_setup_guide.md` for template configuration.

## Deployment

`vercel.json` contains the SPA rewrite, so any static host works as long as unmatched paths
serve `index.html`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

For GitHub Pages, set `homepage` in `package.json` and add a `404.html` copy of `index.html` so
client-side routes resolve.

## Notes

- TypeScript is strict; `npx tsc --noEmit` should stay clean.
- The test suite covers the shell, every route, the project list, and contact validation.
- The portrait is used at its original orientation. Do not crop it to a fixed aspect ratio; the
  framing is deliberate.
