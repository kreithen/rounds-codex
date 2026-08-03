# Fractures gallery - INCOMPLETE, do not build yet

Received 2026-08-03: **5 of 10 pages**. The header on every page reads `IMAGE n OF 10`, so this
is a ten-page gallery and pages **6, 7, 8, 9 and 10** have not been delivered.
`scripts/build_galleries_from_images.py` asserts all ten exist and will refuse until they do.

Condition id is **`fracture`** ("Fractures", MSK & Rheum) - it already exists in
`content/conditions.json`, and the page header's "MSK & RHEUM" and ICD-10 `S42.001A` agree.

## Page order - the files arrived SHUFFLED

Read off the `IMAGE n OF 10` header strip, never the filename. Mapping applied here:

| upload | real page | title |
|---|---|---|
| up-01 | 1 | Overview: Definition, Types & Key Concepts |
| up-02 | 2 | Anatomy: Normal Bone & Common Fracture Locations |
| up-05 | **3** | Pathophysiology: How Bone Breaks & Heals |
| up-04 | 4 | Clinical Presentation |
| up-03 | **5** | Physical Exam & Initial Assessment |

The sequence matches every other gallery in the set, so pages 6-10 are expected to be roughly
Diagnostics, Imaging, Treatment, Complications, and Clinical Pearl & Key Takeaways.

## What is RIGHT about this batch

- **No review-status claim.** The footer has no REVIEW cell at all; the last cell is the shield.
  That is the corrected template and it is the defect that mattered most.
- **All five pages are exactly 1024x1536** - the first batch in a long time with no 1022/1023
  rounding artefact, so nothing needs resampling.
- **Canonical logo lockup** on all five, no TM variant.
- **Dot COUNT is 10 on every page**, which the previous two batches got wrong on 15 of 20 pages.

## What is WRONG

1. **Page 2 fills the first TWO dots.** The cumulative-fill defect, back again. Pages 1, 3, 4 and
   5 each fill exactly one dot at the right index. Recorded in DOTS-defect-for-production.md.
2. **The shield is not the new mark.** These pages carry an older shield - "RC" in white over a
   cyan pulse line. COVID-19 and Osteomyelitis, shipped 2026-08-02, carry the physician's new
   **RC + checkbox** verified mark in cyan. Two adjacent galleries would show different marks in
   the same footer position. Worth settling with production before this ships.
