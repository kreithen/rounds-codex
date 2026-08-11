# For production: `aortic-dissection` page 2 — the arch branches, verified

29 labels, 6 flagged to move, 2 to check. **Needs a re-render**; nothing corrected locally.

This sheet verifies the **arch-branch series**, which is the brief's example of fault 2 (an
off-by-one shift within an ordered set). It is exactly as the work order describes, now with
coordinates.

*Verified on the shipped page (915×1373) at 13×, 2026-08-10. Coordinates are page pixels.*

---

## The arch draws three branches; the labels are shifted one position along

Left to right, rising from the arch:

| branch | span at its top | what it is |
|---|---|---|
| **1** | x 422–437 | brachiocephalic trunk — the thick one, cut off at the top of our crop where it bifurcates |
| **2** | x 448–465, apex y≈220 | left common carotid |
| **3** | x 478–500, apex y≈235 | left subclavian |

| row | label | dot ends at | which branch | verdict |
|---|---|---|---|---|
| 1 | Brachiocephalic trunk | **(462,222)** | **2** | wrong — one position along |
| 2 | Left common carotid artery | **(490,236)** | **3** | wrong — one position along |
| — | Left subclavian artery | **(484,252)** | **3** | correct, but it now shares branch 3 with row 2 |

**Two labels on one vessel is the tell**, and branch 1 — the real brachiocephalic, the only one that
visibly bifurcates — carries no label at all.

**Correct endpoints:** Brachiocephalic trunk → branch 1, about **(430,240)**; Left common carotid →
branch 2, about **(453,240)**; Left subclavian stays where it is.

## A near-miss worth passing on, because it affects how you read our sheets

Our first pass at 12× cropped from x = 440 and **cut branch 1 out of frame**. On that view the
Brachiocephalic dot appeared to sit on the leftmost visible branch, and we were one sentence from
reporting this row as correct and contradicting the work order.

The lesson is not about magnification — 12× was plenty. It is that **a crop can remove the evidence
that a series is shifted**, because a shift is only visible when you can see the whole series. Every
ordered-set claim on these sheets is now checked on a crop that contains the entire series plus a
margin.

## Rows not yet verified

Rows 3–8 are carried over from the work order unchecked: the "Aortic arch" marker, the UNPAIRED
ANTERIOR BRANCHES leaders landing on paired lateral branches, the Intima/Adventitia pair in the
AORTIC WALL LAYERS inset (both at mid-thickness, same radial position as Media), the sinotubular
junction, and the arch inset's own "Left subclavian artery". They are stated in the order with
coordinates; we have not examined them at magnification and are not implying we have.

**One of them is worth doing early even so.** Rows 5 and 6 — Intima and Adventitia both landing at
mid-thickness of the mauve layer, at the same radial position as Media — is the same shape as
`pericarditis` p3 and `addisons` p1/p2: a layered figure whose layer labels all stop in the middle
layer. That pattern has appeared on four galleries now and may be worth a template check of its own.

## Separately: this page ships at the wrong size

`aortic-dissection` pages are **915×1373**. The standard is 1024×1536. Please export at the standard
size when re-rendering.
