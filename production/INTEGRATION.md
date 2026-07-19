# USMLE Mode — Production Integration Kit

Drop-in package that ports the "USMLE Mode" preview engine into the live
Rounds Codex app. Everything here is self-contained: no build step for the
runtime, no external dependencies, no network calls.

> **This workspace is firewalled from the live private app repo.** There is no
> live `index.html` here to edit. Do **not** try to modify the live app from
> this workspace. The paste into the live `index.html` must happen through the
> **medcodex-publish (Chrome) path**, using the user's logged-in GitHub session
> in the browser — that is the only route that can reach the private repo that
> auto-deploys to https://rounds-codex.netlify.app.

## Files in this kit

| File | Role |
| --- | --- |
| `usmle-mode.js` | The quiz engine as one self-contained module. Exposes `window.RoundsCodexUSMLE.mount(selector, bankArray)`. Injects its own CSS scoped under `.rcusmle` so it will not clobber host styles. |
| `usmle-step1-data.js` | **Generated.** Combined question bank: `const USMLE_STEP1 = [...125 items...]` plus `const USMLE_STEP1_BY_ID = {}` indexed by id. Regenerate with `build-data.js`. |
| `build-data.js` | Node script that bundles `data/usmle-step1-b*.js` into `usmle-step1-data.js`. |
| `demo.html` | Standalone, `file://`-friendly proof-of-life page. Double-click to run. |
| `INTEGRATION.md` | This file. |

## What the engine reproduces (feature parity with the preview)

- Vignette rendering: Markdown-ish lab tables (`| ... |`) and bold
  `**[IMAGE: ...]**` / `**[ECG: ...]**` anchor placeholders (rendered as labeled
  anchor boxes). All text is HTML-escaped before formatting.
- Two modes: **Explanation** (feedback after each answer) and **Standard**
  (exam sim, score at the end).
- Filters: system, difficulty, question count, and order (shuffle / sequential).
- Live scoring, end-of-set score, by-system breakdown bars, and an expandable
  per-question review with full rationales.
- Keyboard support: `A`–`E` to answer, `Enter` for Next (only while the quiz
  screen is visible).
- Light/dark friendliness via `prefers-color-scheme`.

## Integrating into the live `index.html` (Chrome publish session)

1. **Add the two data + engine files.** Copy `usmle-step1-data.js` and
   `usmle-mode.js` into the app (e.g. alongside `index.html`, or in an assets
   folder). If the app is a single `index.html`, you may instead paste the
   contents of both files inside `<script>` blocks near the end of `<body>`.

2. **Add the script tags** just before `</body>`, in this order (data first,
   engine second):

   ```html
   <script src="usmle-step1-data.js"></script>
   <script src="usmle-mode.js"></script>
   ```

   (Adjust the `src` paths to wherever you placed the files. If you inlined the
   contents instead, paste `usmle-step1-data.js` first, then `usmle-mode.js`.)

3. **Add a mount point** where USMLE Mode should render. Use whatever container
   convention the app already uses for its modes/tabs, e.g.:

   ```html
   <div id="usmle-root"></div>
   ```

4. **Mount the widget** once the container exists (after the two scripts):

   ```html
   <script>
     RoundsCodexUSMLE.mount('#usmle-root', USMLE_STEP1);
   </script>
   ```

   `mount()` adds the `.rcusmle` class to the container, injects the scoped CSS
   once, and builds the UI. Safe to call once per container. All styles are
   prefixed with `.rcusmle`, so nothing leaks into or out of the host app.

5. **Add the nav / tab entry labeled "USMLE Mode."** Match the app's existing
   nav pattern. Two common shapes:

   - *If modes are separate sections toggled by a nav:* add a nav item/button
     labeled **USMLE Mode** that shows the `#usmle-root` section (and hides the
     others) the same way the other tabs do. Mount the widget the first time
     that tab is opened (or on load — mounting is cheap and idempotent per
     container).

   - *If the app swaps a single content area:* add **USMLE Mode** to the nav
     list and, when selected, ensure `#usmle-root` is present in the content
     area, then call `RoundsCodexUSMLE.mount('#usmle-root', USMLE_STEP1)` if it
     has not been mounted yet.

   Guard against double-mount if the tab can be reopened, e.g.:

   ```html
   <script>
     var usmleMounted = false;
     function openUsmleMode() {
       // ...app's own show/hide of the USMLE section...
       if (!usmleMounted) {
         RoundsCodexUSMLE.mount('#usmle-root', USMLE_STEP1);
         usmleMounted = true;
       }
     }
   </script>
   ```

6. **Publish via the medcodex-publish (Chrome) path.** Because this workspace
   cannot reach the private repo, commit the edited `index.html` (plus the two
   asset files, if not inlined) through the Chrome / logged-in GitHub route.
   Netlify auto-deploys from that repo to the live site.

## Regenerating the data when new batches land

New content ships as additional `data/usmle-step1-b6.js`, `-b7.js`, … files,
each declaring `const USMLE_STEP1_B# = [...]`. To refresh the bundle:

```bash
node production/build-data.js
```

`build-data.js` auto-globs `data/usmle-step1-b*.js`, sorts them by batch number,
concatenates in order, and rewrites `production/usmle-step1-data.js` with the
new total and a fresh `USMLE_STEP1_BY_ID` index. No arguments and no edits to
the script are needed — just drop the new batch files in and re-run. It also
fails loudly on duplicate ids across batches.

Then re-publish the updated `usmle-step1-data.js` through the same Chrome path.

## Notes

- `usmle-step1-data.js` attaches `USMLE_STEP1` / `USMLE_STEP1_BY_ID` to `window`
  in a browser and also `module.exports` under Node, so the same generated file
  works both as a `<script>` include and via `require()` in tooling.
- The engine has zero third-party dependencies and makes no network requests.
- Multiple mounts on one page are supported; the CSS is injected only once.
