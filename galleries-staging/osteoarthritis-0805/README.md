# Osteoarthritis gallery — BUILT AND SHIPPED (v67, 2026-08-05)

Condition **`osteoarthritis`** — Osteoarthritis, MSK & Rheum, ICD-10 M19.90. The header's ICD-10
matches `content/conditions.json` exactly.

**This was the last MSK & Rheum condition without a gallery**, so the category is now **7 of 7** —
the tenth complete one, after Cardiac, Endocrine, GI, Heme & Onc, ID, Neurology, Psychiatry,
Renal & GU and Respiratory.

Pages 1–5 arrived in the morning, 6–10 the same evening. **Built and live as the 94th gallery**,
alongside `preeclampsia`.

## Page order and titles

Order off the `IMAGE n OF 10` header strip, titles off each footer's Image Title box. Every
footer's own page number agrees with its header. Arrived shuffled — 2, 4, 3, 1, 5.

| page | Image Title | file | delivered as |
|---|---|---|---|
| 1 | Overview: Anatomy, Pathophysiology & Key Facts | `osteoarthritis-01.png` | `c58e4263-…` |
| 2 | Anatomy & Joint Structure | `osteoarthritis-02.png` | `3304ec0c-…` |
| 3 | Pathophysiology & Disease Process | `osteoarthritis-03.png` | `b3168791-…` |
| 4 | Clinical Presentation | `osteoarthritis-04.png` | `8cfc79ef-…` |
| 5 | Physical Examination | `osteoarthritis-05.png` | `e8100bcb-…` |
| 6 | Diagnostic Imaging | `osteoarthritis-06.png` | `c2b054fe-…` |
| 7 | Gross Pathology & Disease Progression | `osteoarthritis-07.png` | `8961cb6d-…` |
| 8 | Histology & Cellular Pathophysiology | `osteoarthritis-08.png` | `b0be8982-…` |
| 9 | Treatment & Management | `osteoarthritis-09.png` | `0a5b96c2-…` |
| 10 | Clinical Pearl & Key Takeaways | `osteoarthritis-10.png` | `fdf198d0-…` |

Every headline band agrees with its footer Image Title.

**The two halves cite different sources, and one of them is the wrong college.** Pages 1–5 cite
*ACR Clinical Practice Guideline (2019)*; pages 6–10 cite *ACR Appropriateness Criteria (2021)*.
"ACR" is doing double duty: the first is the American College of **Rheumatology**, the second the
American College of **Radiology**. Imaging-appropriateness criteria are the right source for page 6
(Diagnostic Imaging) and the wrong one for page 9 (**Treatment & Management**), which should carry
the rheumatology guideline pages 1–5 use. Pages 7, 8 and 10 are also attributed to the radiology
criteria. **This is a physician call, not an artwork defect** — flagged, shipped as delivered.

The Category cell also disagrees across the halves: `MSK & Rheum` on 1–5, `MSK & Rheumatology` on
6–10.

The page 1 title overlaps pages 2 and 3 by naming anatomy and pathophysiology, but it is the
overview page and its band reads *"THE MOST COMMON ARTHRITIS — A DISEASE OF THE WHOLE JOINT"*, so
it is not the near-duplicate problem seen on `delirium` 3/7.

## A new footer template — and the shield varies independently

Side-by-side evidence: `DOTS-evidence/template-v3-vs-v2-footer.jpg`.

| | the 93 galleries before today | `osteoarthritis` | `preeclampsia` (same batch) |
|---|---|---|---|
| footer labels | ALL CAPS | Title Case | Title Case |
| what Category holds | the page type | the **specialty** | the **specialty** |
| shield mark | square check | **circular** check | square check |

**The Category change is the one that matters.** On every shipped gallery that cell names what kind
of page it is; here it names the specialty, which the header already says. It does have one happy
side effect — the "CATEGORY reads Pathophysiology on a clinical presentation page" bug cannot occur
if the cell holds the specialty — but it is inconsistent with 930 published pages, and a reader
moving between galleries will see the footer mean two different things.

The shield differs between two galleries delivered in the **same batch**, so the mark and the
footer layout are varying independently rather than being one new template.

Worth deciding deliberately rather than absorbing. **It does not block the build either way** —
nothing in `content/galleries.json` reads the footer.

## Header progress dots — seven of ten wrong

Read at 3x off the source pages. Evidence: `DOTS-evidence/osteoarthritis-p1-p5-dots.png`.

| page | dots | filled at | |
|---|---:|---:|---|
| 1 | 10 | 1 | ok |
| 2 | 10 | **1** | **wrong — row identical to page 1** |
| 3 | 10 | **4** | wrong |
| 4 | 10 | **5** | wrong |
| 5 | 10 | **5** | **wrong — row identical to page 4** |
| 6 | 10 | 6 | ok |
| 7 | **11** | **8** | wrong |
| 8 | **11** | 8 | index ok — **same dot as page 7** |
| 9 | **11** | **8** | **wrong — same dot again** |
| 10 | **11** | **11** | fills the last of eleven |

**The count jumps from 10 to 11 at exactly page 7**, and pages 7, 8 and 9 all fill dot 8.

When only pages 1–5 were in hand this README said "the count is correct on all five" and drew a
conclusion about the count being fixed. Pages 6–10 then arrived at eleven dots. **A half gallery
cannot settle a per-gallery question** — the note has been corrected in
`ARTWORK-CORRECTIONS.md`.

Ring colour is grey throughout — no orange, no stray cyan.

## Checks run

- Both halves: all files distinct, no duplicates.
- Not a re-send: `triage_incoming_gallery.py` reported 0 already live, 0 possibly revised in both.
- All ten footers pass the status-claim check.
- No spelling errors found in the artwork.

## Page size

Eight at 1024×1536, one at 1024×1535, one at 1023×1537. The builder resampled.

## Built with

    python3 scripts/build_galleries_from_images.py osteoarthritis=galleries-staging/osteoarthritis-0805
