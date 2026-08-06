# Croup gallery — BUILT AND SHIPPED: **the 100th gallery** (v69, 2026-08-06)

Condition **`croup`** — Croup, OB & Peds, ICD-10 J05.0. **The 100th gallery, and the 1,000th
illustration page.** It completes **OB & Peds at 6 of 6** — the eleventh complete category.

Pages 1–6 and 10 arrived 2026-08-05 inside a 45-file batch. **Pages 7, 8 and 9 were replaced in
that delivery by three asthma pages** and had to be re-sent; they arrived correct on 2026-08-06.

## The re-sent pages were checked, not counted

The lesson from the first delivery. Before building, all three were verified against the things
that actually distinguish croup from the strays:

| check | result |
|---|---|
| header ICD-10 | **J05.0** on all three |
| footer condition line | **Croup** |
| CLINICAL SOURCE | **AAP Clinical Practice Guideline: Croup (Reaffirmed 2018)** |
| byte-identical to the asthma strays? | **no** — zero md5 collisions |

The three asthma pages carried J45.0, "Asthma" on the footer line, and GINA 2024. None of that is
present here. The specialty label reads `OB & PEDS` on both sets, so it remains useless as a check.

## Page titles

| page | IMAGE TITLE |
|---|---|
| 1 | Overview: Croup |
| 2 | Anatomy: Pediatric Airway |
| 3 | Pathophysiology: Croup |
| 4 | Clinical Presentation |
| 5 | Physical Exam & Bedside Assessment |
| 6 | Imaging Evaluation of Croup |
| 7 | Diagnostic Imaging |
| 8 | Microscopic Pathology |
| 9 | Treatment & Management |
| 10 | Clinical Pearl & Key Takeaways |

**Pages 6 and 7 are both imaging pages** — *Imaging Evaluation of Croup* and *Diagnostic Imaging*.
Distinguishable, but adjacent and near-duplicate in the thumbnail strip. Physician's call.

Sources: AAP Red Book 2024 and Nelson 22e on page 1; Kendig's 9e + Red Book on 2–6; the AAP Croup
guideline on 7–10.

## The dots: cumulative fill, and the count is wrong throughout

Read at 1.8x off the source pages. Evidence: `DOTS-evidence/croup-p1-p10-cumulative.png`.

| page | dots | filled | |
|---|---:|---:|---|
| 1 | **9** | 1 | index ok, count short |
| 2 | **9** | 2 | index ok, count short |
| 3 | **9** | 2 (one pale) | **cumulative begins** |
| 4 | **9** | 3 | cumulative |
| 5 | 10 | **6** | cumulative, and jumped |
| 6 | 10 | **7** | cumulative |
| 7 | 10 | **8** | cumulative |
| 8 | 10 | **9** | cumulative |
| 9 | 10 | **9** | cumulative, saturated |
| 10 | 10 | **9** | cumulative — and the last page never fills the last dot |

**This is the cumulative-fill defect returning.** It was last seen on Alzheimer's, Parkinson's and
Guillain-Barré, and `DOTS-defect-for-production.md` records that a repainter was written for it and
**deleted** because it produced visibly damaged pages. It cannot be fixed downstream.

The count is also short — nine dots on pages 1–4, ten on 5–10 — and the fill saturates at nine, so
page 10 shows an unfinished gallery.

None of it blocks display, and the gallery is shipped. It is the single clearest example to send
production, because it shows the count fault and the cumulative fault on one gallery.

## Built with

    python3 scripts/build_galleries_from_images.py croup=galleries-staging/croup-0805
