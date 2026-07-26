# Rounds Codex — project notes for Claude

Medical-education app by Dr. Kreithen (physician). Static single-page apps (HTML + inline JS),
no backend. This file is context for future sessions — read it before starting work.

## Two repos (critical)
- **`rounds-codex` (this repo, PUBLIC)** — the dev/build repo: question banks, illustrations,
  staging materials, build tools, docs. Safe to commit here.
- **`rounds-codex-app` (PRIVATE, separate)** — the LIVE site → https://rounds-codex.netlify.app
  (Netlify auto-deploys from its `main`). This workspace is **firewalled** from it, and the
  GitHub MCP is scoped to `rounds-codex` only, so we **cannot push to it directly**. `add_repo`
  for it requires an approval the user's surface can't grant.
- **Deploy path = the user's Chrome web-upload** to `rounds-codex-app` `main`. We build/verify
  here, then hand the user files to upload. See "Deploying" below.

## `applive/` — the live app working copy (gitignored, NEVER commit)
- `applive/index.html` is a LOCAL copy of the private live app's single ~6 MB `index.html`
  (minified, data + code inline). We edit it here, verify headless, then deliver for upload.
- `applive/usmle/` and `applive/assets/` mirror the live site's folders.
- `.gitignore` already excludes `applive/` and every `rounds-codex-*.zip` deploy bundle.
  **Do not commit the live app or deploy zips to this public repo.**

## Live app structure

> **CONTENT IS NO LONGER INLINE (2026-07-26).** `index.html` is now **code only** (0.65 MB,
> was 6.87 MB); all content lives in **`content/*.json`** and is fetched at boot. The globals
> below still exist with the same names and shapes — they are declared **empty** and *filled*
> by the loader at the bottom of `index.html`, so app code reads them exactly as before.
> **To change content, edit the JSON, not `index.html`.** Built by
> `scripts/split_content.js`; rationale and traps in `native-app-plan.md` §5.
>
> | file | holds |
> |---|---|
> | `content/conditions.json` | `DATA` (181) |
> | `content/drugs.json` | `RX_DATA` (300) |
> | `content/resident.json` | `RES_DATA` (1308), `RES_SPECIALTIES`, `RES_ACTIVE`, `RES_SECTION2_TITLE`, `RES_COND`, `RESIDENT_APPROACH` |
> | `content/nclex.json` | `NCLEX_DATA` (150) |
> | `content/quizzes.json` | `QUIZZES` (9) |
> | `content/galleries.json` | `GALLERIES` (35) + `real` (the `REALGAL` list) |
> | `content/or.json` | `OR_DATA` |
>
> Consequences: **`file://` no longer works** (the loader uses `fetch`) — serve over http or
> from the app shell; opening the file off disk shows an explicit message. The first upload
> after the split must include `index.html` **and** `content/`; after that they are
> independent. Derived lookups (`byId`, `ORDER`, `rxById`, `rxByCond`, `resById`), the first
> `paint()` and the `/c/<id>` router boot all run in the loader, not at parse time.

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
- **Galleries** (`medcodex-gallery` skill + `scripts/build_gallery.py` in the skill; a copy is
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
- Parse-check: extract inline `<script>` (no `src`) blocks and `new Function(code)`.
- Note: JS string escapes like `←`/`—` are valid and render as ←/— — leave as-is.

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
  - Thumbnails were dropped from the 5 Cardiology galleries (grid reuses full images) to cut file
    count from 105 → 55; GALLERIES `thumb` == `file` for those ids.
- After upload, Netlify auto-deploys (~1 min); load the live site and spot-check.

## Status docs
- `app-integration-queue.md` — running checklist of live-app changes (what's built/deployed).
- `usmle-build-status.md`, `resident-staging/*.md`, `galleries-staging/README.md` — build state.

## Working branch
Develop on **`claude/usmle-rounds-codex-module-bmpl61`**. Commit + push there; never push elsewhere
without explicit permission. Do NOT open a PR unless the user asks.
