# For production: `bph` page 2 — the worst page in the order, verified

12 of 33 labels flagged. This sheet re-measures the work order's rows against the shipped page at
9× and states where we agree, where we differ, and which rows cannot be fixed by moving a line.

**This page needs a re-render.** No part of it is being corrected locally: several labels land on
each other's structures, and on the sagittal view the label column sits on the far side of the penis
from the testis, so some of these are layout problems rather than line-placement problems.

*Verified on the shipped page (1024×1536) 2026-08-10. Coordinates are page pixels.*

---

## SAGITTAL VIEW — the rows we re-measured

| row | label | where it ends (verified) | where it should end | agreement with the order |
|---|---|---|---|---|
| 1 | Seminal vesicle | **(683,180)** — the bladder's anterior-inferior wall at the base | the lumpy coiled retrovesical chain, ~(800,175) | agrees (order said ~690,181) |
| 2 | Detrusor muscle | ~(816,160) — fascia lateral to that retrovesical chain | the thick muscular bladder wall, 10–25 px medial | agrees |
| 3 | Pubic symphysis | (666,285) — the root of the penis | **(662,225)** — the pale cream ovoid, which spans x 645–680, y 200–250 | agrees (order said 668,225) |
| 4 | Testis | **(628,362)** — the penile shaft near the corona | **(683,362)** — the pink ovoid, x 665–700, y 335–390 | agrees |
| 5 | Scrotum | **(628,390)** — the glans penis | the scrotal sac around the testis, x 660–730, y 320–405 | agrees |
| 8 | Periprostatic venous plexus | **(738,232)** — a dark dot inside the right prostate lobe | the veins around/anterior to the gland, outside it | agrees (order said 739,236) |

**Rows 1 and 2 are the reason this page is first in the queue.** The seminal vesicle on this figure
is labelled "Detrusor muscle" and the bladder wall is labelled "Seminal vesicle". They approach from
opposite sides, so it is not a swapped pair of leaders — each is displaced in a way that happens to
land on the other's target. For a reader the effect is the same, and it is the failure mode that
produces a page that *looks* right.

## What re-measuring changed

Two things, both worth having:

- **The prostate's own extent is (690–780, 200–255)**, split at the midline urethra at x≈728, with
  the pubic symphysis a separate pale ovoid at 645–680. Any re-render needs those apart: at low
  magnification they read as one mass, which is very likely how "Pubic symphysis" ended up on the
  penile root.
- **A first coarse pass put the symphysis at (634,215) — 28 px out.** It was re-measured at 9× before
  being written down. Where this sheet gives a coordinate, it was taken at 9× or better.

## Rows 4 and 5 are a LAYOUT problem, not a line problem

The label column runs down the left. On the figure, the **penis is drawn between that column and the
testis**. So a correct "Testis" leader — horizontal at y=362 from the column to (683,362) — has to
cross the glans and then the scrotal wall before it arrives. The same is true of "Scrotum".

Moving the endpoints alone would give two leaders that visibly run through the penis to reach the
scrotum behind it. **Please re-site those two labels below the figure, or bring them in from the
right**, rather than lengthening the existing leaders.

## The rows we have not yet re-measured

Rows 6, 7, 9, 10, 11 and 12 (bulbourethral gland, external urethral sphincter, both bladder-neck
rows, ejaculatory ducts, and the PROSTATE RELATIONS dash-dot connectors) are carried over from the
work order unverified. They are flagged there with coordinates; we have not yet checked them at
magnification and will say so rather than imply we have.

**Row 12 deserves a design decision rather than a correction.** All six connectors in the PROSTATE
RELATIONS panel are dash-dot, arrowless, and stop loosely on the central figure — they read as
decorative links from the inset circles rather than as pointers. Two of them happen to terminate on
prostate tissue while naming other organs. If they are meant to be decorative, giving them a visibly
different style from the real leaders elsewhere on the page would stop them being read as claims.
