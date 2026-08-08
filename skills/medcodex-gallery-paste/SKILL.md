---
name: medcodex-gallery-paste
description: >-
  Process, QA and deploy a Rounds Codex / MedCodex image gallery from pages the physician PASTED
  INTO CHAT from their photo album. Use this skill WHENEVER Dr. Kreithen attaches or pastes gallery
  page images and wants them built, QA'd, or shipped — for example "here are the pages for gout",
  "new gallery images", "process and deploy these", "here's image 2", or any message that arrives
  with several dense infographic pages carrying an "IMAGE n OF 10" header. It finds the pasted files
  in the session upload directory (they are FULL RESOLUTION, not previews), identifies each page by
  OCR of its own header, QAs against a defect checklist drawn from real batches, builds the assets
  and the content/galleries.json entry, verifies headless, and deploys. Use medcodex-gallery INSTEAD
  when the input is an approved production-package PDF rather than pasted images.
---

# Gallery from pasted pages

The physician delivers gallery pages by pasting them into chat from their photo album. **This has
been the route for every gallery.** Your job is integration and QA — never creation, and never
repainting the artwork.

## Rule zero: the pasted images are already the real files

**They arrive at full resolution — 1024×1536, ~2.5 MB PNG, which is exactly the shipping standard.**
They land in `/root/.claude/uploads/<session-id>/`.

On 2026-08-08 I assumed a chat attachment must be a downscaled preview, never looked in that
directory, and spent a whole session asking for "the real files" — routing through Google Drive, the
Netlify connector and a production re-export in turn. The files were on disk the entire time.

**So: look before you ask.** `python3 scripts/ingest_pasted_gallery.py` is step 1, always.

---

## Step 1 — Find and identify the pages

```sh
python3 scripts/ingest_pasted_gallery.py --hours 30                 # what is there, grouped
python3 scripts/ingest_pasted_gallery.py --hours 30 --gid <id>       # detail for one gallery
```

It dedupes by content hash (the same image arrives 2–3 times under different uuids — 42 files were
21 unique pages), reads each page's `IMAGE n OF 10` header and footer `IMAGE TITLE` by OCR, and
flags duplicates, missing pages and multiple ICD-10 codes.

**Read the printed mapping before staging anything.** Attribution is deliberately strict and is
allowed to fail: with two similarly-named galleries pasted in one window, back-pain page 6 scored
0.73 against "Hip Fracture" while hip-fracture page 10 scored 0.55, so no threshold separates them.
Pages it cannot place are left unassigned on purpose.

```sh
python3 scripts/ingest_pasted_gallery.py --hours 30 --gid <id> --stage \
    --pick 3=<file.png> --pick 10=<file.png>
```

`--pick` assigns a page explicitly and overrides attribution. It refuses to stage a set with a
missing page or an unresolved duplicate.

**Resolve a duplicate page by reading the panel that DIFFERS, never by timestamp.** Hip fracture
page 3 arrived in two takes; the canonical one was identified by OCRing its risk-factor panel for
"Advanced age (>65 years)", which the physician had confirmed. If you cannot tell which take is
canonical, **ask the physician** — do not pick.

## Step 2 — Look at every page yourself

The script places pages; it does not read them. **Open each page and look.** Everything in the QA
checklist below was found by eye, and none of it is detectable structurally.

If the gallery already exists, **diff against the deployed pages first.** Two of three batches in
one week were largely re-sends — 20 of 25 pages, then 10 of 75, were byte-identical to live artwork.
Mean pixel diff <2/255 against the shipped JPEGs is compression noise, not a revision.

## Step 3 — QA checklist

Every item here comes from a real batch. Record findings in
`galleries-staging/PRODUCTION-CORRECTIONS-<batch>.md`; **do not try to fix artwork.**

**Structural / template**
- **Header progress dots.** Seen wrong five different ways: wrong count, cumulative fill, inverted
  fill, index one early, index one late. A wrong *count* is cosmetic; a wrong *index* tells the
  reader they are on a different page. **Count them at full resolution and say so if unsure** — dot
  counts read off downscaled images have been wrong twice, and both times a retraction was needed.
- **Footer disclaimer collision.** Two footer templates are in circulation: the one carrying
  `© 2025 Rounds Codex, Inc.` puts the legally-required disclaimer on its own centred line; the one
  without it wraps it into the CATEGORY column and collides.
- **Missing copyright notice.** All ten Hip Fracture pages shipped without one. Check for it.
- **A page built from a different template** — centred title where others are left-aligned, a badge
  missing its pill, a field absent entirely.
- **Logo lockup.** `scripts/fix_page_logo.py` repaints the canonical ℞ mark. This is the one
  artwork correction that is safe and proven (13 galleries).
- **Page size.** One size per gallery. 1024×1536 is the standard; downscale a 1536×2304 export.

**Content — the ones that matter more**
- **Contradictions between pages of the same gallery.** One page said 15–30% one-year mortality,
  another 20–30%. Two pages carried the same imaging algorithm nearly verbatim while the contents
  list expected two different topics.
- **Contradictions with the app's own module or quiz.** This is the highest-severity class. Hip
  Fracture page 4 told readers to keep the patient NPO after midnight — which the app's own quiz
  marks *incorrect*, so a student is contradicted one tap later. **Always read the condition's
  module and quiz against the pages.**
- **A wrong ICD-10 code**, including a right-family-wrong-site code. `M80.00XA` is the
  *unspecified-site* pathological fracture code; the femur-specific one is `M80.05-`.
- **Anatomical mislabelling.** A sensation map credited the whole dorsum of the foot to the deep
  peroneal nerve, which supplies only the first web space, and omitted superficial peroneal.
- **Charts with no source, denominator or date**, and charts whose proportions look inverted
  against normal practice. Query them; do not silently ship.
- **Superseded names.** NOF became the Bone Health and Osteoporosis Foundation in 2021.
- **Typos inside artwork** ("fanction"), and single words split across two bullets ("Muscle" /
  "relaxants" reads as two drug classes).
- **Complications or management that apply to only one arm of a distinction the gallery itself
  teaches** — arthroplasty failure modes presented as generic hip-fracture complications.

**Never repaint delivered pages.** A dot repainter was written once, detected the row by
autocorrelation, sampled colours off the page and refused pages it could not read cleanly. It still
produced half-erased dots and surviving cumulative fills, skipped 31 of 80 pages, and was deleted.
Flag for re-render instead.

## Step 4 — Titles

Write `galleries-staging/<id>/titles.json` as `{"_note": "...", "1": "...", ... "10": "..."}`.

Titles come from the footer **IMAGE TITLE** field (the second line — the first is the condition
name), cross-checked against the subtitle under the main heading. The ingest script prints both.
Record in `_note` how the pages were identified and which defects are outstanding on which page.

## Step 5 — Build

```sh
python3 scripts/build_galleries_from_images.py <id>=galleries-staging/<id>
```

Writes pages to `assets/<id>/<id>-NN.jpg` at q88, thumbs to the flat root-level `gthumbs/` at 320px
q82, the compact download PDF at 512×768, and the `content/galleries.json` entry with the id added
to `real`.

- `base` is `''` with the folder in each `file`, so `thumb` can reach `gthumbs/`.
- **Thumbnails are always real files — never point `thumb` at `file`.** 26 galleries shipped that
  way once and the galleries index pulled 78 MB.
- `RC_APP` retargets the build to a throwaway tree if you want to rehearse first.
- **`content/galleries.json` ships MINIFIED.** Check `git diff --numstat` is `1 1`.

## Step 6 — Verify (all of it, before deploying)

```sh
python3 scripts/verify_gallery_pdfs.py /workspace/rounds-codex-app <id>   # PDF matches its pages
python3 scripts/audit_font_coverage.py /workspace/rounds-codex-app
node scripts/verify_sw.js /workspace/rounds-codex-app/sw.js
node scripts/netlifysim.js /workspace/rounds-codex-app 8253 &            # then drive it headless
RC_PW=<scratchpad> node scripts/verify_gallery_pdf.js <id>               # download button
RC_PW=<scratchpad>/node_modules/playwright-core node scripts/verify_gallery_chain.js 8253
python3 scripts/gen_gallery_gap.py                                       # coverage doc
```

Headless assertions that actually matter — a count is not enough, the images must **decode**:
gallery button present on the condition page, 6 tiles in the detail strip, 10 grid images with
`naturalWidth > 0` on every one, viewer opens at 1024×1536, walks 1→10 with a correct total,
`fetch()` of the PDF returns `%PDF-` at ~1.1 MB, **zero page errors and zero HTTP ≥ 400**.

Note the two `RC_PW` conventions — `verify_gallery_chain.js` and `verify_gallery_gestures.js` want
the full path to `playwright-core`; the others want the scratchpad directory.

## Step 7 — Deploy

Bump `sw.js` `CACHE` and stamp `version.txt` (`<ISO8601>  vNN-SHORT-LABEL`), commit, push to
`main` in `/workspace/rounds-codex-app`.

**Then prove the bytes arrived** — do not report a push as a deploy:

```sh
git fetch origin main && git show origin/main:version.txt
git show origin/main:content/galleries.json | python3 -c "..."   # entry + real[]
git ls-tree -r --name-only origin/main | grep -c '^assets/<id>/'
```

The container cannot reach the live site and the Netlify connector is usually off for the chat, so
**ask the physician to open `/version.txt`** and confirm the stamp. Wait ~90 seconds first.

## Step 8 — Record

- **Commit the page masters** next to `titles.json`. Upload directories die with the container —
  that is why the masters for 26 of 27 early galleries are unrecoverable, which in turn is why a
  270-page production re-export was queued for something our own old pipeline caused.
- Refresh the production corrections document and hand it over as a file.
- Regenerate `GALLERY-GAP.md` — it reads the shipped JSON, so it cannot drift.
- If pages will be re-rendered later, note that a rebuild is the same build command **plus**
  `scripts/rebuild_gallery_pdf.py` — the download PDF is a build artifact and drifts from the pages
  otherwise, which is exactly how four galleries shipped a stale logo.

## The medical gate

**The physician is the medical gate.** Ship the pages, but surface anything clinically actionable
plainly rather than burying it in a defect list — and never resolve a clinical disagreement between
the artwork and the module on your own judgement. State which is right, say why, and let them
decide.
