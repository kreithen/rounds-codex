# Gallery page header: progress dots are wrong — re-render request

**Batches affected:** Neurology, delivered 2026-07-31 — 8 galleries, 80 pages
(bacterial meningitis, ischemic stroke, seizure & status epilepticus,
Alzheimer's & dementia, Parkinson's disease, TIA, multiple sclerosis,
Guillain-Barré). **Still present in myasthenia gravis, delivered 2026-08-01** —
see the table at the end. That delivery is the evidence that this is in the
template and did not travel with the July batch.

**Everything else about this batch is good** — artwork, layout, titles, page
order and the 1024×1536 sizing are all correct, and the galleries are live. This
is the one defect, it is in the page template rather than in any individual
gallery, and it is cosmetic. But it is visible on **every page of every
gallery**, so it is worth a re-render.

Only the header strip needs regenerating. Nothing below it changes.

---

## What the dots are supposed to do

The strip of dots under "IMAGE n OF 10" is a page-position indicator. For a
ten-page gallery it should be:

* **exactly 10 dots**, and
* **exactly one filled**, at position *n*.

So page 4 of 10 = ten dots, the fourth one filled, nine hollow.

---

## Defect 1 — the dot COUNT is not the page total

Pages carry **11, 12 or 13 dots** on a ten-page gallery. The count also varies
from page to page *within* one gallery.

This is present on essentially every page, **including pages whose filled dot is
in the right place**, so it is not a side effect of Defect 2.

**Verified example.** Bacterial meningitis, page 6 — header reads "IMAGE 6 OF
10". Measured directly off the delivered PNG: **11 dots**, evenly spaced at a
27 px pitch, spanning x=372 to x=648. The 6th is filled cyan (RGB ≈ 2,111,177);
the other ten are grey rings (RGB ≈ 130,130,130). The fill position is right and
the count is wrong.

---

## Defect 2 — the fill is CUMULATIVE on three galleries

On **Alzheimer's & dementia**, **Parkinson's disease** and **Guillain-Barré**,
every dot up to and including the current page is filled, instead of just the
current one. It reads as a progress bar rather than a position marker.

Examples, read off the delivered pages:

| gallery | page | filled dots | should be |
|---|---|---|---|
| Alzheimer's & dementia | 4 of 10 | first **4** filled | only the 4th |
| Alzheimer's & dementia | 10 of 10 | **11** filled | only the 10th |
| Parkinson's disease | 6 of 10 | first **7** filled | only the 6th |
| Guillain-Barré | 5 of 10 | first **6** filled | only the 5th |

Page 1 of each of these galleries is correct, because one filled dot is right
either way — the divergence starts at page 2.

The other five galleries (meningitis, stroke, seizure, TIA, MS) fill a single
dot correctly. They still have Defect 1.

---

## What we need back

Re-rendered pages with the header strip corrected:

1. **Dot count = the gallery's page total** (10 for all eight of these).
2. **Exactly one filled dot**, at the current page.

Same 1024×1536, same JPEG quality, same filenames if possible. If the page
number is being read from one variable and the dot row generated from another,
that mismatch is very likely the whole of Defect 1.

Please fix it **in the template**, not per batch — every future gallery will
carry it otherwise.

---

## Notes for whoever picks this up

* Do **not** attempt to repaint the dots on the delivered PNGs. We tried, with a
  tool that located the row by autocorrelation, sampled the ring and disc
  colours off each page and rebuilt the background by interpolation. It still
  produced half-erased dots and left the cumulative fills underneath, and it
  could not read 31 of the 80 pages at all. The header's vertical position
  drifts by tens of pixels between pages, which defeats fixed-geometry
  detection. Fixing the generator is the only sound route.
* The defect is easiest to confirm on a contact sheet of the header strips —
  `scripts/triage_incoming_gallery.py` writes one, and the dots are perfectly
  legible there even though automated counting is not reliable.

---

## Still present: myasthenia gravis, delivered 2026-08-01

One gallery, ten pages, and **nine of the ten are wrong** — both defects, in the
same gallery. This is a single ten-page set, so the count varying from 10 to 11
to 12 *within it* cannot be a per-gallery configuration value.

| page | dots | filled | correct? |
|---|---|---|---|
| 1 | 10 | 1st only | ✅ |
| 2 | 10 | first 2 | ❌ cumulative |
| 3 | 10 | first 3 | ❌ cumulative |
| 4 | 10 | first 4 | ❌ cumulative |
| 5 | 10 | first 5 | ❌ cumulative |
| 6 | 10 | first 6 | ❌ cumulative |
| 7 | **11** | first 7, ring highlight on the **8th** | ❌ count, fill, and the highlight is off by one |
| 8 | **11** | cumulative + ring highlight | ❌ |
| 9 | **11** | cumulative + ring highlight | ❌ |
| 10 | **12** | first 11, ring highlight on the **12th** | ❌ |

Two things here that the July batch did not show as clearly:

* **The extra dots appear from page 7 onward and keep growing** — 10, 10, 10, 10,
  10, 10, 11, 11, 11, 12. That looks like the row is being sized from a running
  count rather than the page total, which would also explain Defect 1's
  page-to-page variation in the July batch.
* **There is now a third marker style** — a hollow ring drawn in the highlight
  colour, distinct from both the filled disc and the grey ring. On page 10 it
  sits at position 12, i.e. past the end of a ten-page gallery.

Page 1 is correct and can ship as delivered. The other nine need the header
strip re-rendered.

---

## The 90-page batch of 2026-08-01: one defect fixed, a worse one introduced

Nine galleries (increased ICP/TBI, spinal cord injury, migraine, iron
deficiency anemia, B12/folate deficiency anemia, sickle cell disease,
leukemia, lymphoma, thrombocytopenia).

**Defect 2 is FIXED.** No page in these 90 fills more than one dot. Thank you —
that is the one that made the strip unreadable.

**Defect 1 persists**, and now differs by template: Neurology pages carry
**12** dots on a ten-page gallery, the Heme & Onc pages mostly **10**, some
11 or 12.

### New Defect 3 — the single filled dot is in the WRONG POSITION

This is a regression and it matters more than the count. A wrong dot count is
cosmetic; a dot filled at the wrong index tells the reader they are on a
different page than they are.

Verified at native resolution, not off a contact sheet:

| page | dots | filled | should be |
|---|---|---|---|
| Iron deficiency anemia, page 3 | 10 | **4th** | 3rd |
| B12 / folate deficiency anemia, page 2 | 10 | **1st** | 2nd |

Note these go in **opposite directions**, so it is not a constant offset that
could be corrected by subtracting one. It is wrong on a substantial share of
pages across several of the nine galleries.

### New Defect 4 — inconsistent marker rendering

* Unfilled rings are grey on the Neurology pages and **orange/yellow** on
  thrombocytopenia.
* **Iron deficiency anemia page 2** contains three different renderings in one
  row: normal grey rings, one ring so dark it is nearly invisible against the
  header, and one ring filled **grey** rather than the highlight colour.

### What we need

The header strip re-rendered on all 90 pages, with the dot row driven by the
same page number that prints in "IMAGE n OF 10" — count from the gallery
total, fill at that index, one marker style. That single change closes all
four defects.

Everything else in this batch is good: artwork, titles, page numbering in the
header text, and the logo lockup are all correct.
