# Fractures gallery - COMPLETE, built 2026-08-03

All ten pages received (5 + 5) and built into `content/galleries.json` as `fracture`
("Fractures", MSK & Rheum). Verified headless: 10 thumbnails, all decoded, viewer opens the full
1024x1536, index reads 81 galleries / 810 images, findable by search, reachable from the
condition page, zero page errors and zero failed requests.

## Page order - the FIRST five arrived shuffled

Read off the `IMAGE n OF 10` header strip, never the filename.

| upload | real page | title |
|---|---|---|
| batch 1 #1 | 1 | Overview: Definition, Types & Key Concepts |
| batch 1 #2 | 2 | Anatomy: Normal Bone & Common Fracture Locations |
| batch 1 #5 | **3** | Pathophysiology: How Bone Breaks & Heals |
| batch 1 #4 | 4 | Clinical Presentation |
| batch 1 #3 | **5** | Physical Exam & Initial Assessment |
| batch 2 #1 | 6 | Diagnostic Imaging: Find the Break |
| batch 2 #2 | 7 | Gross Pathology & Mechanism |
| batch 2 #3 | 8 | Microscopic Pathology & Healing Process |
| batch 2 #4 | 9 | Treatment & Management |
| batch 2 #5 | 10 | Clinical Pearl & Key Takeaways |

The second batch arrived in order. The first did not - pages 3 and 5 were swapped.

## Known defects, reported to production

Neither blocks the gallery; both are recorded in `../DOTS-defect-for-production.md`.

1. **Dot index wrong on pages 2, 7, 8 and 9.** Page 2 fills two dots cumulatively; 7 and 8 fill
   one position early; 9 fills two early. The dot COUNT is correct on all ten, which is a first.
2. **The shield is the older RC-over-pulse mark**, not the RC + checkbox verified mark that
   COVID-19 and Osteomyelitis shipped with on 2026-08-02.

## What was right

No REVIEW cell anywhere - nothing on these pages claims a pending clinical review. Every page
exported at exactly 1024x1536, so none had to be resampled. Canonical logo lockup throughout.
