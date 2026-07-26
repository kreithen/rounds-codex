# Live app (`index.html`) — integration & change queue

> **STATUS 2026-07-20:** Items 1–8 below, the **USMLE Mode** + **Resident Mode expansion**
> content integrations, AND the **5 Cardiology galleries + 3 Cardiology quizzes** are all
> BUILT & VERIFIED into `applive/index.html` (local, gitignored).
> - First bundle: `rounds-codex-app-deploy-20260720.zip` (index.html + usmle/, 65 files).
> - Complete superset bundle: `rounds-codex-app-deploy-20260720-cardio.zip` (index.html +
>   usmle/ + assets/{aortic-dissection,cardiac-arrest,dvt,hyperlipidemia,pad}/, 176 files).
>
> **Cardiology galleries (5):** aortic-dissection, cardiac-arrest, dvt, hyperlipidemia, pad —
> each 10 approved pages rendered (180 dpi) + thumbs + compact ~5 MB gallery PDF; GALLERIES
> entries + REALGAL membership added; page titles read visually from each page's IMAGE TITLE
> box (aortic p7 = "Management Overview", read from its header since it has no title box).
> **Cardiology quizzes (3):** aortic-dissection, cardiac-arrest, dvt — 10 Q each wired into
> QUIZZES (q/ch/correct/exp/pearl/img), auto-enabling the "Take the Quiz" button on those
> condition pages. Verified headless: galleries render, viewer opens, quizzes load & score,
> zero JS errors. (PAD + Hyperlipidemia have galleries only — no quizzes were uploaded.)


Everything to apply to the LIVE app (`rounds-codex-app` repo → https://rounds-codex.netlify.app)
in the **desktop + Chrome** session. All edits are built/verified here first, then published in
ONE integrated pass: pull the current live `index.html` once → apply all of the below → verify
headless → upload to `main` via Chrome → Netlify auto-deploys.

> The live `index.html` is NOT in this workspace (private repo, firewalled). Pull the newest copy
> from `github.com/kreithen/rounds-codex-app` (`main`, via Chrome → Raw) before editing so nothing
> already live gets reverted.

## Layout / functionality changes
### 1. Home-page tagline text
- **Change:** `KNOWLEDGE. CLARITY. BETTER OUTCOMES` → `LEARN. UNDERSTAND. SUCCEED`
- **Scope:** text content ONLY — keep the exact same font, size, weight, letter-spacing, and
  color (do not touch any CSS/classes; only replace the words).
- **How:** grep the live `index.html` for the tagline (match the actual on-page form — it may be
  upper/mixed case, split across spans, or use `&middot;`/`.` separators) and replace just the
  three words, preserving whatever markup/separators wrap them. If it's three separate elements,
  replace each word in place (LEARN / UNDERSTAND / SUCCEED).
- **Verify:** tagline reads "LEARN. UNDERSTAND. SUCCEED" with identical styling; nothing else moved.

### 2. Resident Mode — put the section title first, rename the conditions list
- On each specialty page, show that specialty's **section-2 title at the TOP of the page**
  (the `RES_SECTION2_TITLE` value — e.g. "Top 50 Inpatient Diagnoses" / "Top 50 Operations" /
  "Top 50 Topics & Procedures" / "Top 50 ED Diagnoses" / "Top 60 Cardiology Topics", per specialty).
- **Underneath it**, list all the conditions under a heading renamed **"Codex Conditions" →
  "Relevant Conditions"**.
- **Add the Cardiology section** to the specialty list. (Comes in with the Resident Mode data
  expansion — `RES_ACTIVE` in `resident-staging/res-logic-wiring-snippet.js` already includes
  `cards`; confirm `cards` shows in the picker after the expansion.)

### 3. Resident Mode — larger back arrow
- Inside each specialty section, make the **back arrow in the upper-left corner larger**
  (the control that returns to the main specialty list). Style/size only.

### 4. Bottom control bar
- Move **"Ask Rounds Codex" to the far right** of the bar.
- Rename the **"Resident" → "Resident Mode"** label.

### 5. Medical mode → USMLE PREP entry button
- When the user selects **"Medical"** mode on the home page, add a **large button directly under
  the "search 180 conditions" bar** labeled **"USMLE PREP"**.
- Clicking it opens the **USMLE test-prep home page** (the USMLE Mode app we built in `preview/`,
  integrated per the "USMLE Mode" content-integration item below).

### 6. USMLE home page — back arrow to home
- On the USMLE home page, place an **arrow button in the upper-left corner** that returns to the
  **Rounds Codex home page**.

### 7. USMLE mode — hide the bottom control bar
- **Do NOT render the bottom control bar while in USMLE mode** (it should only appear in the
  main app / Resident mode, not inside USMLE Mode).

### 8. BUG — condition swipe adjacency (Hypertension)
- Left-swiping off the **Hypertension** page currently jumps to **COPD** — wrong. It should swipe
  to **Aortic Stenosis (Valvular Disease)**. Find the condition swipe order / neighbor mapping and
  fix Hypertension's left-swipe target to Aortic Stenosis (Valvular Disease). Verify the reverse
  swipe is consistent too.

<!-- More layout/functionality changes get appended here as the user sends them. -->

### 9. USMLE performance report (BUILT & VERIFIED 2026-07-22 — ready to upload)
- Adds a full results report to the USMLE page (`usmle/`): overall score ring, breakdowns by
  **organ system** + **difficulty**, honest strengths/needs-work, study recommendations, and the
  per-question review. Reuses the shared report engine (`nclex-report.js`) via a registered
  `usmle` **profile** — the engine is **not forked**.
- **Honesty constraints honored** (verified in tests + on the real page): practice score, **never
  a predicted USMLE score or pass probability**; <3-item areas shown ("limited sample") but never
  driving recommendations; no fabricated strength when none clears the 80% bar.
- **3 files → `usmle/` folder:** `index.html` (2 tiny edits: 2 script tags + a render hook before
  `show("results")`, try/catch-wrapped), plus NEW `nclex-report.js` and `usmle-report.js`.
- Staged in `applive/usmle/` (gitignored). Drop-in bundle + upload steps: scratchpad
  `usmle-report-deploy/` (`UPLOAD-TOMORROW.md`). Modular source committed to `src/report/`
  (engine + profile + 32-assertion test + 25-assertion agnostic test; both green).
- Independent of the NCLEX ship (that patches the big root `index.html`; this only touches
  `usmle/`).

## Content integrations (built & staged in this repo)
- **USMLE Mode** — wire the finished quiz app (`preview/`) into `index.html` (new section/route,
  TBD with user). 705+ items across Step 1/2 CK/3 Day 1/3 Day 2.
- **Cardiology galleries (5)** — `galleries-staging/*-gallery.pdf` via the `medcodex-gallery`
  builder; titles pre-drafted in `galleries-staging/*-titles.json` (confirm visually).
- **Cardiology quizzes (3)** — pre-parsed to `galleries-staging/*-quiz.json`; wire into the
  Aortic / DVT / Cardiac-Arrest condition pages (confirm the app's quiz format first).
- **Resident Mode expansion** — replace embedded `RES_DATA` with the 1308-entry master +
  wiring from `resident-staging/` (data expansion, NOT a first-time patch — see its DEPLOY-README).

## SHIPPED 2026-07-25 (live on rounds-codex.netlify.app, user-confirmed)
- **NCLEX-RN module** — patched into the live root `index.html` and published. Opens full-screen
  in Nursing mode. 150 items.
- **USMLE performance report** — 3 files into `usmle/`; profile registered on the shared engine.
- **8 Pulmonary galleries** — copd, asthma, cap, pe, ards, pneumothorax, tb, lung-cancer.
  10 images each, thumbs reuse the full image (`thumb == file`), page order + titles read off
  each page's "IMAGE N OF 10" / IMAGE TITLE. Source was mixed: 2 production PDFs (copd, asthma)
  and 6 folders of UUID-named PNGs. All rendered to 800×1200 for phone.
- **Metabolic Syndrome** — new Endocrine condition (`E88.81`), Endocrine now 13, sits between
  T2DM and Hypothyroidism for swipe order. Content researched + drafted (2009 harmonized
  AHA/NHLBI/IDF criteria + the **June 2026 AHA/ACC/ADA/ASN CKM guideline**, CKM Stage 2 +
  PREVENT). **`verified:false`** — RC VERIFIED badge intentionally OFF pending physician review.
- **NCLEX entry button** — restyled to match the `.usmleprep` banner (same geometry/radius/
  padding, icon tile + title + subtitle + chevron) in the Nursing accent.
- **NCLEX test interface** — header now mirrors the app's own `.qhead`/`.qtop` pattern and the
  USMLE page: rounded back button + eyebrow/title + logo, 8px gradient progress bar, `.pmeta`
  row, card radius 22/pad 24, stem 21px/800, options radius 16. Refactored into one shared
  `nxHead()` used by all five module screens.
- **BUG FIXED — NCLEX button vanished after navigation.** It was injected once by JS, so the
  app's `paint()` wiped it whenever the library re-rendered. Moved into the home template next
  to `.usmleprep`, so it now persists exactly like the USMLE button.

## BUILT & VERIFIED 2026-07-26 (awaiting the user's Chrome/phone upload)
- **Pinch/zoom rewrite** in the gallery viewer — pointer-event `Map`, distance-ratio pinch,
  anchored `setZoom(z,cx,cy)` (`gpx=ax-(ax-gpx)*(z/gzoom)`), `gClamp()` pan bounds, MINZ 1 /
  MAXZ 4, double-tap 2.5× / double-tap-to-reset, `stage.style.touchAction='none'`, zoom reset
  on `gnav()`. Fixes "can only zoom in once" + the motion artifacts. Verified with synthetic
  two-pointer gestures: 1 → 2.5 (double-tap) → 4 (pinch) → 4 (pinch again) → clamps at 4 →
  1 (double-tap reset); 1 after next/prev.
- **Home-page mode swipe** — `MODES=['nursing','medical','resident']`; swipe-left from Nursing →
  Resident, swipe-right → Medical. Ignores swipes starting on chips/toggle/viewer/inputs;
  needs |dx|≥60, |dy|≤0.7|dx|, <700 ms.
- **Resident specialty swipe** — replaces the top of `stack` instead of pushing, so Back still
  returns to the specialty list (verified: em → fm, depth stays 2, Back → `res`).
- **`RESIDENT SPECIALTIES` button** (`.respec`) under the search bar in Resident mode — same
  geometry/radius as `.usmleprep` in the `--res` purple gradient; opens `root('res')`.
- **Resident-mode back arrow** — `.res-topbar` `.tb-btn` at the upper-left of the specialty
  list + a "Library" label; `root('library')` (verified: depth 1, library rendered).
- **Toggle label** — "Medical" → **"Medical Student"**.
- **Metabolic Syndrome** — `verified:true`, RC VERIFIED badge now ON (physician-confirmed).
- **Canonical logo** re-rendered on all 21 endocrine/respiratory galleries + the 5 Cardiology
  galleries (`gal-final/`, `cardio-final/`; pristine originals kept in `gal-orig/`,
  `cardio-orig/`). 116 pages needed correction.
- **Per-condition share button + share URLs** — see the next section.

### Per-condition sub-URLs (`/c/<id>`) — needs the root `_redirects` file
- Share button sits next to the ICD-10 badge (`.icd-row` > `.d-icd` + `.d-share`), uses
  `navigator.share` (Apple/Android sheet) with a clipboard/prompt fallback on desktop.
  Share text strips the tagline's `<b>` markup.
- `condURL(id)` → `location.origin+'/c/'+encodeURIComponent(id)`. The router accepts
  `/c/<id>` (preferred), `?c=<id>`, and `#c=<id>` (older links keep working).
- **Two things are load-bearing:**
  1. **`_redirects` at the repo root**, one line: `/c/*  /index.html  200`. Without it every
     shared link 404s.
  2. **`<base href="/">` right after `<head>`.** Gallery `base` values are relative (`""`,
     `"<id>/"`, `"dvt-upload/assets/<id>/"`), and so are `href="usmle/"` and
     `serviceWorker.register('sw.js')`. At `/c/dka` without the base tag they resolve under
     `/c/` — proved in the browser: USMLE PREP resolved to `/c/usmle/`. With it: `/usmle/`.
- Verified against a local Netlify simulation (real files first, else `/c/*` → index 200):
  `/c/metabolic-syndrome` opens the condition with the clean URL intact; gallery images load
  10/10 from `/c/copd` (`firstSrc: /copd-01.jpg`); USMLE PREP resolves to and navigates to
  `/usmle/`; an unknown id (`/c/not-a-real-condition`) falls back to the 181-card library;
  legacy `#c=`/`?c=` links still route. Zero page errors, zero unexpected 404s.

### ⚠️ Live asset paths are NOT under `assets/` — read before touching galleries
GitHub web uploads have nested wrong twice, and `index.html` was patched to match reality
rather than moving files:
- **Cardiology (5):** `base: "dvt-upload/assets/<id>/"` (nested one level too deep)
- **Pulmonary (8):** `base: "<id>/"` — condition folders sit at the **repo root**, not in
  `assets/`. The `assets/` wrapper was dropped during the drag.
Any future gallery work must match the existing `base` for that id, or repoint it deliberately.
Optional cleanup (not done): consolidate everything under `assets/` and regenerate `index.html`.

## Publish
Upload updated `index.html` (+ any new gallery folders) to `main` via Chrome; confirm Netlify
deploy goes green; load the live site and verify each change. **Before clicking Commit, check
the file list GitHub shows — it displays the full destination path, which is where the two
nesting mistakes above would have been caught.**
