# Incoming gallery batches — status

Two Gastroenterology galleries are part-delivered. Raw pages are staged here at native
1024x1536 PNG (lossless on purpose — see "Why raw" below). Both app conditions already exist
and neither has a gallery yet: `hepatitis` (Viral Hepatitis) and `appendicitis` (Appendicitis),
both in the Gastrointestinal category.

## Viral Hepatitis — `hepatitis` — 4 of 10 pages

| page | title | staged |
|---|---|---|
| 1 | Overview: Viral Hepatitis | yes |
| 2 | Labeled Liver Anatomy | yes |
| 3 | Pathophysiology & Viral Life Cycles | yes |
| 4 | Clinical Presentation | yes |
| 5–10 | — | **missing** |

## Acute Appendicitis — `appendicitis` — 1 of 10 pages

| page | title | staged |
|---|---|---|
| 6 | Clinical Evaluation: History, Physical Exam & Labs | yes |
| 1–5, 7–10 | — | **missing** |

## Two things to settle before building

**The logo is wrong on all five pages.** They carry a detached "℞ Rounds / CODEX" lockup with a
thin outline circle. The canonical mark — on every shipped gallery — is the integrated one
where the ℞ forms the R of "Rounds", with the lens flare and the rule flourishes
(`scripts/logo-trim.png`). `scripts/fix_page_logo.py` replaces it.

**Do not run the logo fix on a partial set.** `placement()` derives ONE size for the whole
gallery from `min(heights)` across every page, precisely so the header does not jitter as you
swipe. Fix four pages now and six later and the two halves get different sizes — which is the
exact defect the script was written to prevent. Run it once, over all ten.

## Why raw PNG

Pages ship as JPEG q88. Staging them as JPEG too would mean the logo fix decodes and re-encodes
a lossy file, so the shipped page would carry two generations of compression. Lossless staging
keeps it to the single encode at build time.

## Build, once each set is complete

1. `RC_LOGO=scripts/logo-trim.png python3 scripts/fix_page_logo.py <dir>` — all ten pages
2. `scripts/add_gallery.js` + `scripts/gen_thumbs.py` — assets, `gthumbs/`, gallery PDF
3. Entry into `content/galleries.json` with `base:""`, `file:"assets/<id>/<id>-NN.jpg"`,
   `thumb:"gthumbs/<id>-NN.jpg"`, and the id added to the `real` list
4. Verify headless against `scripts/netlifysim.js`, then deploy
