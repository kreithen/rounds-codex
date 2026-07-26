---
name: medcodex-gallery
description: >-
  Add an Image Gallery to a MedCodex condition page from an approved production-package PDF.
  Use this skill WHENEVER the user wants to attach, add, wire up, or integrate a gallery,
  atlas, image set, or "production package" into MedCodex — for example "add the gallery for
  Myocardial Infarction", "here's the production PDF for COPD", "wire up these images to the
  asthma page", or when they attach the MedCodex index.html plus a multi-page medical PDF and
  name a condition. It renders the PDF pages into the gallery's thumbnails + full-screen viewer,
  reads each page's title, builds a compact high-quality gallery PDF for the download button, and
  inserts one GALLERIES entry. It does NOT generate, crop, or substitute artwork — only approved pages.
---

# MedCodex Gallery Integration

MedCodex already contains the full gallery experience — the thumbnail grid, the full-screen
viewer (pinch-zoom, pan, wrap-around swipe, auto-hiding controls), the Bookmarks page, and the
❤️ section icon. All of that is driven by a single data map called `GALLERIES` inside
`index.html`. So "adding a gallery" is really just: **produce the approved image assets and add
one `GALLERIES` entry.** This skill does exactly that, consistently, every time.

The artwork comes from an external production process. Your job is integration, never creation.

## Ask first — at invocation (AskUserQuestion)
Before building, confirm these via **AskUserQuestion**, marking your best guess "(Recommended)".
Skip any the user already answered in their request.
1. **Condition id** — which `DATA` condition this gallery attaches to. Resolve the name → id; if the
   name is ambiguous or absent, confirm rather than guessing.
2. **Thumbnails** — separate thumbnail files, or **reuse the full images as thumbs**? Reusing halves
   the file count for the GitHub upload (the ~100-files-per-commit limit) at the cost of a heavier
   grid; prefer reuse for phone-first galleries.

## Inputs you need

1. **The production-package PDF** — one multi-page PDF whose pages *are* the approved production
   pages (typically 10). The user attaches this.
2. **The current app** — the latest `index.html`. Prefer the full current deploy folder/zip if
   the user has it (so the output is directly re-deployable); a bare `index.html` also works.
3. **Which condition it belongs to** — a name the user gives (e.g. "Heart Failure",
   "Myocardial Infarction"). You resolve this to the condition's library **id**.

If any of these is missing, ask for it before proceeding.

## Procedure

### 1. Set up a project directory
Put the app where the script can edit it in place.
- If the user gave a **zip/folder**: unzip/copy it to a working dir (it already contains
  `index.html` and `assets/`). Re-zipping later yields a ready-to-deploy bundle.
- If the user gave **only `index.html`**: make a working dir and copy `index.html` into it.
  The output will be `index.html` + a new `assets/<id>/` folder to merge into their deploy.

### 2. Resolve the condition id
Galleries attach to an existing condition. Find its id in the `DATA` array of `index.html`:
```
grep -o '"id":"[^"]*","name":"[^"]*"' index.html    # or read the DATA entries
```
Match the user's condition name to the right entry and take its `id` (e.g. "Heart Failure" →
`chf`, "Acute Coronary Syndrome / MI" → `acs`). If the name is ambiguous or absent, ask the user
to confirm the exact condition rather than guessing.

### 3. Read each page's title (do this yourself — do not skip it)
Open the PDF with the Read tool (`pages: "1-N"`) and, for each page in order, record its **Image
Title** — shown in the page footer's "Image Title" field (and echoed as the top-right section
label). These become the thumbnail labels and viewer headers, so read them exactly as written
(e.g. "3D Anatomy Overview", "Labeled Cardiac Anatomy", "Pathophysiology", …). Write them to a
JSON array in page order:
```
["3D Anatomy Overview", "Labeled Cardiac Anatomy", "Pathophysiology", ...]
```
Save it as `titles.json`. This is the one step only you can do — the script cannot read the
artwork.

### 4. Run the builder
```
python scripts/build_gallery.py \
  --project <work_dir> \
  --pdf <production_package.pdf> \
  --id <condition_id> \
  --title "<Condition display name, exactly as in DATA>" \
  --titles-file titles.json
```
This renders every page to `assets/<id>/<id>-NN.jpg` (180 dpi), builds `thumb-NN.jpg` (520 px
wide, downscaled — never cropped), assembles a **compact** `assets/<id>/<id>-gallery.pdf` from
those rendered pages, inserts/updates the `GALLERIES["<id>"]` entry in `index.html`, **and adds
the id to the app's `REALGAL` set**. That last part matters: the app renders real artwork only for
ids in `REALGAL` — an id missing from it shows placeholder graphics instead of the approved images.

> **Since 2026-07-26 the app's content is split out of `index.html`.** The script writes the
> entry into **`content/galleries.json`** (and appends the id to its `real` array) whenever
> that file exists, leaving `index.html` untouched; it falls back to patching the inline
> `GALLERIES` map only for a pre-split project. Use `--base` when the images will not be
> served from `assets/<id>/` — the live site's layout is not uniform.

The script handles both the gallery entry and REALGAL membership
automatically (and tolerates any spacing/quoting in those declarations). Re-running for the same id
cleanly replaces the old entry, so it is safe to redo. The build output's `realgal` field reports
`added` / `already present` / `no REALGAL set found` so you can confirm it took.

Why the PDF is rebuilt rather than copied: raw production PDFs are often 20-25 MB because of a
heavy container, which quickly blows past delivery/bundle size limits. The script re-packages the
**exact same rendered pages** (the same images the viewer shows) with lossless JPEG embedding via
`img2pdf`, typically ~5 MB — visually identical, just far smaller. This is a size optimization, not
a change to the artwork. (If `img2pdf` is somehow unavailable, it falls back to copying the
original and says so in its output.)

### 5. Verify in a headless browser
Confirm it renders and the viewer opens before delivering. Minimal check:
```
node -e "const{chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const p=await b.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));await p.goto('file://<work_dir>/index.html');await p.waitForTimeout(400);
// open the target condition, then assert .ggrid has the expected number of .gthumb and the viewer opens on click
console.log('errors',errs);await b.close()})()"
```
Open the condition, assert the gallery panel shows the right page count, click a thumbnail, and
confirm the full-screen viewer opens with the correct "Image X of N" + title. Report zero JS
errors.

### 6. Package and deliver
- **Full bundle in** → zip the whole work dir and deliver it; it deploys directly (drag onto
  Netlify).
- **index.html only in** → deliver the updated `index.html` and the new `assets/<id>/` folder
  (zipped together), and tell the user to drop `assets/<id>/` into their site's `assets/` and
  redeploy (a Netlify drop replaces the whole site, so a partial zip alone would remove other
  files — they must merge, or hand you the full bundle next time for a one-drop result).

## Asset specifications (encoded in the script — keep them consistent)
- Full pages: rendered at **180 dpi**, JPEG quality **88** (≈1280×1920 for a 512×768pt page).
- Thumbnails: **520 px wide**, aspect preserved, JPEG quality 82 — **downscaled, never cropped**.
- Naming: `assets/<id>/<id>-NN.jpg`, `thumb-NN.jpg`, `<id>-gallery.pdf` (NN is 1-based, 2 digits).
- The `GALLERIES` entry shape:
  ```
  "<id>": { title, base:"assets/<id>/", pdf:"assets/<id>/<id>-gallery.pdf",
            images:[ { n, file, thumb, title }, ... ] }
  ```

## Rules (non-negotiable — this is a medical atlas)
- Use **only** the approved Production Pages from the given package.
- **Never** regenerate, recreate, or "improve" the artwork.
- **Never** crop a page — thumbnails are proportional downscales only.
- **Never** substitute or reorder pages; page order and titles come straight from the PDF.
- The downloadable gallery PDF is a **compact re-package of the identical approved rendered pages**
  (lossless-embedded, high quality, ~5 MB) — a size optimization only. Never redraw, alter, or
  reorder the pages; the images stay pixel-for-pixel what the viewer shows.

## Notes
- The gallery CSS/JS/viewer already exist in `index.html`; this skill only adds data + assets.
  Do not duplicate the viewer.
- The last-row centering (4/4/2) is built for 10-page packages and naturally handles ≤10; if a
  package has a different count, mention that the final row may left-align.
- Galleries don't affect the AI chat (`kb.mjs`) — no need to touch it.
