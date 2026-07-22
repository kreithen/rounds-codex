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

## Publish
Upload updated `index.html` (+ any new `assets/<id>/` for galleries) to `main` via Chrome; confirm
Netlify deploy goes green; load the live site and verify each change.
