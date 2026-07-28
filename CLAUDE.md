# Rounds Codex — project notes for Claude

Medical-education app by Dr. Kreithen (physician). Static single-page apps (HTML + inline JS),
no backend. This file is context for future sessions — read it before starting work.

## Two repos (critical)
- **`rounds-codex` (this repo, PUBLIC)** — the dev/build repo: question banks, illustrations,
  staging materials, build tools, docs. Safe to commit here.
- **`rounds-codex-app` (PRIVATE, separate)** — the LIVE site → https://rounds-codex.netlify.app
  (Netlify auto-deploys from its `main`). **`add_repo` works** (2026-07-27): `access:"read"` was
  granted with no prompt, `access:"push"` after one approval. Clone to
  `/workspace/rounds-codex-app`. The GitHub MCP stays scoped to `rounds-codex`, so use plain
  `git` against the clone, not MCP calls.
- **The live site itself is still unreachable** — the agent proxy 403s rounds-codex.netlify.app.
  To verify a deploy, clone the app repo and serve it with `scripts/netlifysim.js`: same bytes
  Netlify publishes, and it covers the galleries whose images exist only in that repo.
- **Deploy path** was the user's Chrome web-upload to `rounds-codex-app` `main`; with `add_repo`
  push access we can now commit directly. Either way, **verify after**: their manual upload of
  2026-07-27 put 310 thumbnails three folders too high and every one 404'd.
- **Packaging rule learned the hard way:** when a drag has to land in `<dir>/`, name *every* part
  folder `<dir>` — not `part1`, `part2`. A wrapper named anything else will get dragged as-is.

## `applive/` — the live app working copy (gitignored, NEVER commit)
- `applive/index.html` is a LOCAL copy of the private live app's single ~6 MB `index.html`
  (minified, data + code inline). We edit it here, verify headless, then deliver for upload.
- `applive/usmle/` and `applive/assets/` mirror the live site's folders.
- `.gitignore` already excludes `applive/` and every `rounds-codex-*.zip` deploy bundle.
  **Do not commit the live app or deploy zips to this public repo.**

## Live app structure

> **CONTENT IS NO LONGER INLINE (shipped 2026-07-27, commit `414c899`).** `index.html` is now
> **code only** (0.54 MB, was 6.76 MB); all content lives in **`content/*.json`** and is
> fetched at boot. The globals below still exist with the same names and shapes — they are
> declared **empty** and *filled* by the loader at the bottom of `index.html`, so app code
> reads them exactly as before. **To change content, edit the JSON, not `index.html`.** Built
> by `scripts/split_content.js`; rationale and traps in `native-app-plan.md` §5.
>
> | file | holds |
> |---|---|
> | `content/conditions.json` | `DATA` (181) |
> | `content/drugs.json` | `RX_DATA` (300) |
> | `content/resident.json` | `RES_DATA` (1308), `RES_SPECIALTIES`, `RES_ACTIVE`, `RES_SECTION2_TITLE`, `RES_COND`, `RESIDENT_APPROACH` |
> | `content/nclex.json` | `NCLEX_DATA` (150) |
> | `content/quizzes.json` | `QUIZZES` (9) |
> | `content/galleries.json` | `GALLERIES` (39) + `real` (the `REALGAL` list) |
> | `content/or.json` | `OR_DATA` |
>
> Consequences: **`file://` no longer works** (the loader uses `fetch`) — serve over http or
> from the app shell; opening the file off disk shows an explicit message. The first upload
> after the split must include `index.html` **and** `content/`; after that they are
> independent. Derived lookups (`byId`, `ORDER`, `rxById`, `rxByCond`, `resById`), the first
> `paint()` and the `/c/<id>` router boot all run in the loader, not at parse time.
> `sw.js` precaches all seven files, so **a new content file must be added to `CORE`** or it
> will be missing offline.

- **Share links (`/c/<id>`)** — every condition has a URL; `_redirects` rewrites `/c/*` to
  `index.html` with a 200. Added by `scripts/add_share_links.js`, which also writes the
  `<base>` tag from `RC_ROOT` (**do not add a second `<base>`** — the head script decides it,
  and hard-coding `/` breaks the native bundle). `rcSyncURL()` in `paint()` keeps the address
  bar on the visible condition, `replaceState` only. The router exposes `RC_ROUTE_BOOT`, which
  the content loader calls once `byId` is populated — **share links must be added before the
  content split**, or `split_content.js` fails with "router boot wiring: found 0 occurrences".
- **Fonts are self-hosted** (`fonts/*.woff2`, 6 faces, 136 kB, precached in `CORE`). Built by
  `scripts/build_fonts.py`, applied by `scripts/self_host_fonts.js`. **Never point them back at
  `fonts.googleapis.com`** — `sw.js` skips cross-origin, so that was the one thing it could
  never cache. There is an Inter **`symbols`** face because Google's `latin` subset has no
  `→ ≥ ≤ ₂ ⁺` — `→` alone appears 585× and was silently falling back. **Run
  `python3 scripts/audit_font_coverage.py <site-root>` after any content change**: an
  uncovered character does not error, it just renders in the wrong font mid-sentence.
- **`RC_SHARE_ORIGIN`** is the origin a *shared link* points at (pinned to the public site),
  as distinct from `RC_ROOT`, which is where assets load from. Change it when
  `roundscodex.com` becomes canonical.
- **Share button** — on every condition page beside the ICD-10 pill, added by
  `scripts/add_share_button.js`. `rcShare(id)` calls `navigator.share` **synchronously from
  the tap** (Safari rejects a share that has left the gesture) with `{title, text, url}` —
  `text` is what makes iOS Messages show the name; `title` alone sends a bare URL. No sheet
  (desktop, http) → copies the link. **Its colour is `--accent` (the MODE), the ICD pill's is
  `--sec` (the CATEGORY, set inline on `.pad`)** — they are meant to differ.
- **Section links (`/s/<slug>`)** — a Share button in the library count row, shown only when a
  specialty chip is selected. Added by `scripts/add_section_share.js`. Category names are
  slugged (`Renal & GU` → `renal-gu`); the script asserts the 21 slugs are distinct. The link
  carries **no mode** on purpose — the section list is identical in all three.
  **Any new one-segment route must be added to the `RC_ROOT` regex** (`/^\/(c|s)\//`) or
  `<base>` becomes that folder and every `content/*.json` 404s — the app then boots to
  "Content didn't load" with no page error, because the loader catches it.
- **Persistence** — `RC_STORE` (bookmarks, best first-try quiz score) and `NCLEX_STORE`
  (exam save/resume, attempt history, mastery), both `localStorage`, both device-local and
  never transmitted, both behind an interface so sync can be added later. Added by
  `scripts/add_persistence.js`, which also inlines `src/report/nclex-report.js` — the NCLEX
  engine's `showReport()` needs `NCLEX_REPORT` present or it silently drops the
  record-this-attempt call.

- **Modes** via `document.documentElement[data-mode]`: `nursing` | `medical` | `resident`
  (`setMode(m)`). Medical accent `--sec:#00c2ff`.
- **Conditions**: `DATA=[{id,name,category,icd10,tagline,...}]`. `byId[id]` lookup.
  Detail page = `detailHTML(id)`; left/right **swipe** browses `DATA` array order (adjacency
  matters — e.g. Hypertension `htn` is placed right before `aortic-stenosis`).
- **Galleries**: `GALLERIES={ "<id>": {title, base:"assets/<id>/", pdf, images:[{n,file,
  thumb,title}]} }`. Real artwork renders only for ids in `REALGAL` (the `real` array in
  `content/galleries.json`). **`base` is not uniform on the live site** — see the warning in
  `app-integration-queue.md`; match the existing value for that id or repoint it deliberately.
  `gframe(id,i,mini)` uses `base+thumb` for the grid, `base+file` for the viewer (`openViewer`).
  **Thumbnails are always real files — never point `thumb` at `file`.** 26 galleries shipped that
  way to save upload file count and the galleries index (340 thumbs at once) ended up pulling
  78 MB; `scripts/gen_thumbs.py` + `scripts/repoint_thumbs.js` moved them to a flat root-level
  `gthumbs/<id>-NN.jpg` set at 320 px q82 (12 MB). See `app-integration-queue.md`.
  New galleries use `base:''` with the folder in `file`, so `thumb` can reach `gthumbs/`.
  **The "Download Complete Gallery (PDF)" button is a stub app-wide** — it toasts, nothing more.
- **Source artwork arrives at 1024x1536** (2:3 portrait). Ship it at native resolution, JPEG q88
  (~440 kB/page); the old pipeline downscaled to 800x1200, which was below what a Pro Max screen
  shows the viewer at. Ask production for 1536x2304 if the tool offers it.
- **Quizzes**: `QUIZZES={ "<id>": {condition, questions:[{q, ch:[...], correct, exp,
  pearl?, why?:[...], img?:[N]}]} }`. Having `QUIZZES[id]` auto-enables the "Take the Quiz"
  button in `detailHTML`. `img:[N]` links a question to gallery image N. `why[i]` shows on a
  wrong pick (optional; falls back to generic text).
- **Resident mode**: `RES_DATA` (array, each `.sec`=specialty code), `RES_ACTIVE` (Set of active
  codes), `RES_SECTION2_TITLE` (code→"Top X…" header), `RES_SPECIALTIES` (`[{id,n}]` picker),
  `RES_COND` (conditions per specialty). `resSpecHTML(spec)` renders a specialty page: section-2
  title first, then "Relevant Conditions". 23 base specialties + Cardiology; ~1308 entries.
- **USMLE mode** ships as a SEPARATE page at `/usmle/` (not inlined, to avoid doubling the big
  file). Medical mode has a "USMLE PREP" button → `/usmle/`. That page has its own back arrow
  and no bottom control bar.

## USMLE question bank (this repo)
- `data/usmle-step1-b*.js`, `usmle-step2ck-b*.js`, `usmle-step3d1-b*.js`, `usmle-step3d2-b*.js`
  (43 bank files). `preview/` wires them for local testing; `applive/usmle/` is the deployable copy.
- **Item schema**: `{id, system, discipline, topic, difficulty, anchor, vignette, lead,
  options[5], answer(0-4), exp, why[5]}`. Rule: `why[answer]` starts "Correct"; no other does.
- **Exam maxes** (all built): Step 1 = 280, Step 2 CK = 318, Step 3 Day 1 (FIP) = 232,
  Step 3 Day 2 (ACM) = 180. Total 1,010 (+13 CCS deferred).
- **Illustrations**: `RC_ILLUS[id]` registry, merged across `illus-p*.js` (later wins). `<img>`
  → "IMAGE" badge, `<svg>` → "SCHEMATIC". 231 items illustrated. `illus-real.js` loads last so
  approved real images override schematics.

## Build pipelines
- **Galleries from loose images** (`scripts/add_gallery.js` + `scripts/gen_thumbs.py`): when a
  gallery arrives as ten images rather than a production PDF. Titles must be read off the pages
  visually — the footer's title field is unreliable. `scripts/fix_page_logo.py` replaces a wrong
  logo lockup with the canonical one (`RC_LOGO`, default `logo-trim.png`); the production process
  gets it wrong in a different way most batches, so check every page.
- **Galleries from a PDF** (`medcodex-gallery` skill + `scripts/build_gallery.py` in the skill; a copy is
  version-controlled at `skills/medcodex-gallery/`): approved production PDF → renders pages to
  `assets/<id>/<id>-NN.jpg` + thumbs + compact gallery PDF, then writes the entry **into
  `content/galleries.json`** and adds the id to its `real` list. It detects the split
  automatically and falls back to patching inline `GALLERIES` only for a pre-split project.
  `--base` overrides the runtime path prefix when the files land somewhere other than
  `assets/<id>/`. **Page titles must be read visually** from each
  page's "IMAGE TITLE" box (no text layer in the PDFs); pass them as a plain JSON array.
  `galleries-staging/` holds the 5 Cardiology gallery PDFs + 3 quiz JSONs + title defaults.
- **Real/AI images** (`tools/`): `higgsfield-image-prompts.md` (231) → `build_image_manifest.py`
  → `image-qa.html` (physician gate) → `incorporate_images.py`. Higgsfield API automation is
  **ON HOLD** per the user.
- **Resident content** (`medcodex-resident-buildout` skill): `resident-staging/` has the 1308-entry
  master + wiring snippet.

## Editing `applive/index.html`
- Now ~0.65 MB of **code only** — content edits go to `content/*.json` instead, so the
  brace-matching surgery below is rarely needed. When you do have to edit a literal in the
  code file, use **string-aware brace matching** (skip braces inside JS string literals) and
  assert lengths/counts after edits.
- **Do extraction and patching in ONE language.** JS string indices are UTF-16 code units and
  Python's are code points, so with emoji in the file (there are several) offsets computed in
  Node and applied in Python drift by the astral-character count — it silently swallowed two
  `const` declarations before this was caught.
- **Verify every change headless** before delivering:
  `playwright-core` + Chromium at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`
  (`--no-sandbox`). Drive the app via `page.evaluate(()=>go('gallery','dvt'))` etc.; assert
  `.gthumb` counts, `img.naturalWidth>0`, viewer opens, quiz loads, **zero pageerrors**.
  Serve the tree with `scripts/netlifysim.js <ROOT> <PORT>` (positional args) — it does the
  `/c/*` rewrite and sends the right MIME types, so share links, fonts and the service worker
  behave as they do on Netlify.
- **The strongest check for a mechanical change is a side-by-side.** Serve the old and new
  builds on two ports, drive both through the same script, and compare `.app` `innerHTML` —
  the content split was proved that way over sixteen views plus every content global
  serialised. It catches what an assertion you thought to write would not.
- Parse-check: extract inline `<script>` (no `src`) blocks and `new Function(code)`.
- `node scripts/verify_sw.js <sw.js>` unit-tests the service worker's cache-read guard,
  asserts `CORE` still covers all 7 content files and all 6 fonts, and — the one that matters —
  **fails if the navigate branch calls `res.clone()`**. See below.
- **NEVER clone the response the service worker returns for a navigation.** `res.clone()` tees
  one body into two that must both be drained; with the other branch going to Cache Storage, an
  iOS tab suspend/resume mid-stream breaks the tee and the page dies as
  **"WebKitBlobResource error 1."** on returning to a backgrounded tab. This shipped twice —
  the first fix hardened only the *offline* fallback and the bug was in the *online* branch.
  The shell is precached in `CORE`, so the per-navigation write was redundant anyway.
- **Chromium does not use the agent proxy; `curl` and Python do.** A page load showing
  `ERR_CONNECTION_RESET` for an external host does not mean the host is unreachable from the
  sandbox — that is how the Google Fonts dependency stayed invisible.
- **`document.fonts.check()` is false for a face that matches but has not loaded yet.** To
  assert a glyph is covered, `await document.fonts.load(font, char)` and check the result is
  non-empty.
- Note: JS string escapes like `←`/`—` are valid and render as ←/— — leave as-is.
- **A quiz-driving test must use `dvt`, not `dka`** — DKA has no quiz, and `go('quiz','dka')`
  throws. Cards are selected by `data-id`, not by an `onclick` attribute.
- **Beware the service worker when testing failure paths.** It is network-first with a cache
  fallback, so `page.route(...).abort()` in a context that has already loaded the app is
  silently served from Cache Storage and the failure never happens. Use a fresh context.

## Deploying (Chrome web-upload to rounds-codex-app)
- **Resident + all UI/data changes live in `index.html`** — uploading the new `index.html` ships
  them. No separate resident files.
- **USMLE** = the `usmle/` folder. **Galleries** = folders under `assets/`.
- **GitHub web-upload gotchas learned the hard way:**
  - Web UI caps ~**100 files per commit**. Keep each drag well under it (macOS may add hidden
    `__MACOSX`/`._` files that inflate the count).
  - **Drag the folder whose name is the destination.** To land files at `assets/<id>/`, drag a
    folder named `assets` (or navigate INTO `assets/` on GitHub first, then drag `<id>`). Dragging
    an outer wrapper (e.g. `dvt-upload`) nests everything under that wrapper — a real bug we hit.
  - Multiple zips that each contain a same-named top folder (`assets/`, `usmle/`) will **merge on
    extract** — give each a unique parent folder to avoid it.
  - Thumbnails were dropped from 26 galleries (grid reused the full images) to cut the file count.
    Undone 2026-07-27 — see the `gthumbs/` note above; don't trade thumbnails for file count again.
- After upload, Netlify auto-deploys (~1 min); load the live site and spot-check.

## Status docs
- `app-integration-queue.md` — running checklist of live-app changes (what's built/deployed).
- `usmle-build-status.md`, `resident-staging/*.md`, `galleries-staging/README.md` — build state.

## Working branch
Develop on **`claude/usmle-rounds-codex-module-bmpl61`**. Commit + push there; never push elsewhere
without explicit permission. Do NOT open a PR unless the user asks.
