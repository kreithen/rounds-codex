# Preeclampsia & Eclampsia gallery — BUILT AND SHIPPED (v67, 2026-08-05)

Condition **`preeclampsia`** — Preeclampsia & Eclampsia, OB & Peds, ICD-10 O14.90. The header's
ICD-10 matches `content/conditions.json` exactly. The **95th gallery**, shipped alongside
`osteoarthritis`, and the **first OB & Peds gallery** — the category opens at 1 of 6.

All ten pages arrived in one batch of 15 (10 preeclampsia + osteoarthritis 6–10).

## Page order and titles

Order off the `IMAGE n OF 10` header strip, titles off each footer's Image Title box. Every
footer's own page number agrees with its header. Arrived shuffled.

| page | Image Title | delivered as |
|---|---|---|
| 1 | Overview: Preeclampsia & Eclampsia | `4a423e13-…` |
| 2 | Anatomy: Preeclampsia & Eclampsia | `e82dc806-…` |
| 3 | Pathophysiology of Preeclampsia & Eclampsia | `72b91127-…` |
| 4 | Clinical Presentation of Preeclampsia & Eclampsia | `752fbe81-…` |
| 5 | Physical Exam of Preeclampsia & Eclampsia | `ede8ce42-…` |
| 6 | Diagnostic Evaluation of Preeclampsia & Eclampsia | `6a03301c-…` |
| 7 | Diagnostic Imaging: Supporting Exams for Preeclampsia | `715cd8cd-…` |
| 8 | Microscopic Pathology & Cellular Pathophysiology | `b5f103fa-…` |
| 9 | Special Considerations, Complications & Prognosis | `543b724b-…` |
| 10 | Clinical Pearl & Board Review | `83065423-…` |

Every headline band agrees with its footer Image Title. No duplicate or near-duplicate titles —
the first gallery this week where that is true.

## This is the cleanest delivery to date

Worth recording, because the log is otherwise a list of faults:

- **Sourcing is consistent and correctly attributed.** ACOG Practice Bulletin No. 222 (2020) plus
  UpToDate: Preeclampsia, identical on all ten pages. No wrong-college attribution, no year drift,
  no journal cited for an unrelated topic. `osteoarthritis`, delivered in the same batch, manages
  none of that.
- **All ten pages are exactly 1024×1536.** First delivery with no size drift at all, so the builder
  resampled nothing.
- No spelling errors found, no footer status claims, no duplicate files, not a re-send.
- Page 8 carries a **HISTOLOGY STAIN KEY** legend (H&E / IF / EM) above the footer — a genuinely
  useful addition, not seen on other pathology pages.

## Header progress dots — and the most useful finding in the whole log

| page | dots | filled at | |
|---|---:|---:|---|
| 1–6 | 10 | 1, 2, 3, 4, 5, 6 | **all correct** |
| 7 | **9** | **6** | wrong |
| 8 | **9** | **6** | wrong — same dot as page 7 |
| 9 | **9** | **7** | wrong |
| 10 | 10 | 10 | correct |

Seven of ten correct is the best any gallery has managed. But the interesting part is *which* three
are wrong, because **`delirium` (2026-08-04) has the identical signature** — pages 1–6 and 10
correct, 7 and 8 both filling dot 6, 9 wrong. And `osteoarthritis`, delivered in this same batch,
has pages 7, 8 and 9 all filling dot 8 with its count jumping from 10 to 11 at exactly page 7.

**Three galleries, same three pages.** That is not random, and it is a far more specific lead than
anything else in `DOTS-defect-for-production.md`: whatever generates pages 7–9 is not receiving the
page number the rest of the sequence gets. Sent to production as the place to look first.

On these three pages the count drops to nine as well, so count and index fail together there.

## Template

Title Case footer labels and a Category cell holding the **specialty** (`OB & Peds`) rather than
the page type — the same new footer layout as `osteoarthritis`. But the shield is the **square**
check, where `osteoarthritis` uses a circular one, so the mark and the layout vary independently
even inside one delivery. See `DOTS-evidence/template-v3-vs-v2-footer.jpg`.

## Built with

    python3 scripts/build_galleries_from_images.py preeclampsia=galleries-staging/preeclampsia-0805
