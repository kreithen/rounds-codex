# Cardiology deployment — staged materials

Uploaded by the user for deployment into the **cardiology section of the LIVE app**
(`rounds-codex-app` repo → https://rounds-codex.netlify.app). Staged here so they survive
across sessions. **Deploy happens with the desktop + Chrome connection** (the live repo is
firewalled from this workspace — see the `medcodex-publish` skill).

## Contents
| Condition | Gallery (10 img) | Quiz (10 Q) |
|---|---|---|
| Aortic Aneurysm & Dissection | aortic-aneurysm-dissection-gallery.pdf | aortic-aneurysm-dissection-quiz.pdf |
| Peripheral Artery Disease | peripheral-artery-disease-gallery.pdf | (none uploaded yet) |
| Hyperlipidemia | hyperlipidemia-gallery.pdf | (none uploaded yet) |
| DVT | dvt-gallery.pdf | dvt-quiz.pdf |
| Cardiac Arrest / ACLS | cardiac-arrest-acls-gallery.pdf | cardiac-arrest-acls-quiz.pdf |

- **Galleries:** clean 10-page, one-image-per-page PDFs (verified via pymupdf) — exactly the
  format the `medcodex-gallery` builder expects. Titles are baked into the artwork (no text
  layer), so page titles get read visually during the build.
- **Quizzes:** structured text PDFs — 10 questions each, 5 choices (A-E), correct answer,
  explanation, educational pearl, and a **"Gallery image reference"** number linking each
  question to a gallery image.

## Deploy plan (desktop + Chrome session)
1. Pull the CURRENT live `index.html` from `rounds-codex-app` `main` (Chrome → Raw) into the
   workspace — never build on a stale copy.
2. For each condition: resolve its library `id` in the app's `DATA` array, run
   `medcodex-gallery` builder (renders assets/<id>/, compact gallery PDF, GALLERIES entry,
   REALGAL membership), reading the 10 page titles visually.
3. Wire the quizzes: confirm with the user how quizzes attach in the app (existing pattern in
   index.html), then parse each quiz PDF into the app's quiz data shape (question/options/
   answer/explanation/pearl/imageRef) and insert.
4. Verify headless (galleries render, viewer opens, quizzes load), then publish via Chrome to
   `main` → Netlify auto-deploys.

## Notes
- PAD and Hyperlipidemia quizzes were not uploaded — galleries only, unless more arrive.
- These staged PDFs can be deleted after a successful live deploy (they belong in the app repo).

## Pre-processed (done tonight, ready for tomorrow's wiring)
- **`<slug>-quiz.json`** — the 3 quizzes parsed into structured data (10 Q each; question,
  options[5], answer index 0-4, explanation, pearl, imageRef). Validated: all 30 items have
  5 options + a valid answer. Aortic/DVT carry gallery `imageRef`s; Cardiac Arrest has none.
- **`<slug>-titles.json`** — default gallery page titles from the Factory v2.0 LOCKED 10-image
  sequence (Overview, Anatomy, Pathophysiology, Clinical Presentation, Physical Exam/Assessment,
  Diagnostics, Treatment Algorithm, Histology/Pathology, Management[/Post-ROSC], Clinical Pearls).
  Confirm visually against each page footer at build time before finalizing.
- **`FACTORY-v2.0-spec.txt`** — the production standard (North Star, locked pipeline, QA gates).
