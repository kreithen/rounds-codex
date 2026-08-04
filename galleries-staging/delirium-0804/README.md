# Delirium gallery — BUILT AND SHIPPED (v66, 2026-08-04)

Condition **`delirium`** — Delirium, Psychiatry, ICD-10 F05. The header's ICD-10 matches
`content/conditions.json` exactly. The **92nd gallery**, shipped alongside `withdrawal` (91st) and
`suicide` (93rd) — the three that took **Psychiatry to 7 of 7**.

All ten pages arrived in one batch of 25 files (10 delirium + 10 suicide + withdrawal 6–10).

## Page order and titles

Order off the `IMAGE n OF 10` header strip, titles off each footer's IMAGE TITLE box. Every
footer's own page number agrees with its header. Arrived shuffled.

| page | IMAGE TITLE | footer CATEGORY | delivered as |
|---|---|---|---|
| 1 | Overview: Delirium | Clinical Overview | `6c5e6da6-…` |
| 2 | Anatomy & Neurobiology | Anatomy | `533b2b2b-…` |
| 3 | Pathophysiology of Delirium | Pathophysiology | `693b9a4c-…` |
| 4 | Clinical Presentation of Delirium | **Pathophysiology** | `c2cb83c6-…` |
| 5 | Physical Exam in Delirium | Physical Exam | `92071a5b-…` |
| 6 | Diagnostic Imaging in Delirium | Diagnostics | `b972d6df-…` |
| 7 | **Pathophysiology of Delirium** | Pathophysiology | `2a329392-…` |
| 8 | Histology & Microscopic Changes in Delirium | Pathophysiology | `967e0094-…` |
| 9 | Management & Treatment of Delirium | Treatment | `b5ef1d82-…` |
| 10 | Clinical Pearl & Key Takeaways | Treatment / Summary | `4e6329b2-…` |

Clinical sources: UpToDate, DSM-5, Hospital Medicine Society — consistent across all ten pages.

## Faults found

### Page 7 has the SAME title as page 3

Both footers read *"Pathophysiology of Delirium"* and both headline bands read
*"DELIRIUM: PATHOPHYSIOLOGY"*. They are different pages — page 3's subtitle is *"AN ACUTE,
REVERSIBLE BRAIN FAILURE"* and page 7's is *"A MULTIFACTORIAL SYNDROME OF ACUTE BRAIN
DYSFUNCTION"* — but **nothing a reader sees in the thumbnail strip distinguishes them**. Their KEY
POINT lines differ by one word (page 3 "neuroinflammation", page 7 "inflammation").

Same class as `bipolar` page 5, `anxiety` 7/8 and `schizophrenia` 7/9. Shipped as delivered; the
rewording is the physician's call. Page 7's distinct content is the *multifactorial* framing, so
something like "Multifactorial Causes & Precipitants" would separate them.

### Page 4's footer CATEGORY reads "Pathophysiology"

The page is Clinical Presentation. **Third occurrence of this exact fault** — `gout` page 4 and
`withdrawal` page 4 both had it, and `suicide` has it on four pages. It is a template default that
is not being overwritten.

### Header progress dots — four consecutive pages fill the same dot

| page | dots | filled at | |
|---|---:|---:|---|
| 1 | 10 | 1 | ok — but a stray **cyan ring** at position 3 |
| 2 | 10 | 2 | ok — stray cyan ring at position 3 |
| 3 | 10 | 3 | ok — stray cyan ring at position 2 |
| 4 | 10 | 4 | ok |
| 5 | 10 | 5 | ok |
| 6 | 10 | 6 | ok |
| 7 | 10 | **6** | **wrong — same dot as page 6** |
| 8 | 10 | **6** | **wrong — same dot as page 6** |
| 9 | 10 | **6** | **wrong — same dot as page 6** |
| 10 | 10 | 10 | ok |

**Pages 6, 7, 8 and 9 all fill dot 6.** Four consecutive pages with an identical indicator is the
worst instance recorded — worse than `schizophrenia`, where two pages shared one. The count is
right on all ten, which is the first time that has happened, so the count bug and the index bug
are independent.

Two colour faults on top: a **cyan** ring appears beside the fill on pages 1–3 (adjacent to the
fill, but not at a consistent offset), and pages 8–10 draw their unfilled rings in **orange**
rather than grey.

### Text error in the artwork

Page 10's KEY TAKEAWAY reads *"Delirium is reversible in most **casee**."* — should be "cases".

## Checks run

- 25 files, 25 distinct — no duplicates.
- Not a re-send: `triage_incoming_gallery.py` reported 0 already live, 0 possibly revised.
- All footers pass the status-claim check.

## Page size

Nine pages at 1024×1536, page 2 at 1024×1535. The builder resampled.

## Built with

    python3 scripts/build_galleries_from_images.py delirium=galleries-staging/delirium-0804
