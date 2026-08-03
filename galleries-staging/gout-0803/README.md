# Gout gallery — pages 1–5 received 2026-08-03

Condition **`gout`** — Gout, MSK & Rheum, ICD-10 M10.9. No gallery live for it yet, so this
would be the **84th** and the **first in MSK & Rheum other than rheumatoid arthritis**.

**Half a gallery. Pages 6–10 are still to come — do not build until they arrive.**

## Page order and titles

Order read off the `IMAGE n OF 10` header strip, titles off each footer's IMAGE TITLE box —
not from filenames, which arrived shuffled as always (the batch came in the order 2, 1, 5, 4, 3).

| page | IMAGE TITLE | footer CATEGORY | file |
|---|---|---|---|
| 1 | Overview: Gout | Overview | `gout-01.png` |
| 2 | Labeled Anatomy: First MTP Joint | Anatomy | `gout-02.png` |
| 3 | Pathophysiology of Gout | Pathophysiology | `gout-03.png` |
| 4 | Clinical Presentation of Gout | **Pathophysiology** ← wrong | `gout-04.png` |
| 5 | Physical Examination of Gout | Clinical Assessment | `gout-05.png` |

Clinical source on every page: ACR Guidelines (2020) + UpToDate: Gout. Page 2 also cites
Netter's Atlas of Human Anatomy (7th Ed.).

## Checks already run

- **Not re-sends.** All five diffed as NEW against the 830 live pages; nearest live neighbour
  was 24–30 mean pixel difference, i.e. unrelated artwork rather than compression noise.
- **Footer status check clean.** No cell asserts pending / proof / prepublication / draft.
  This is the check added after the "Clinical Pending" badge episode, and this is the first
  incoming batch it has passed from a standing start.
- **Progress dots are CORRECT on all five** — ten dots, a single fill, at the right index on
  every page. Worth recording given the history, but per the standing rule this does not prove
  production fixed them: `dic` regressed hours after a clean 90-page batch. Check pages 6–10
  the same way.
- **The RC☑ shield lockup** (the physician's new mark) is on all five.

## Two things for production, neither blocking

1. **Page size is mixed.** Pages 1–4 are 1024×1535, page 5 is 1024×1536. The standard is
   **1024×1536**, and `fix_page_logo.py` refuses a mixed set — it needs `RC_PAGE_SIZE=1024x1536`
   to resample deliberately. Off-by-one heights have shown up in several recent batches.
2. **Page 4's footer CATEGORY says "Pathophysiology"** while its IMAGE TITLE is "Clinical
   Presentation of Gout" and page 3 is the actual pathophysiology page. The category cell is
   wrong; the artwork itself is right. Cosmetic, visible in the footer bar.

## When 6–10 arrive

    python3 scripts/triage_incoming_gallery.py <incoming> --site /workspace/rounds-codex-app --out <out>
    # read the header strip for order, the footer for titles, the dots by eye
    python3 scripts/build_galleries_from_images.py …   # pages -> assets/gout/, thumbs -> gthumbs/,
                                                       # compact PDF, content/galleries.json entry + `real`
