# For production: `aki` page 2 — the nephron panel, verified

The largest page in the order: 27 labels, 15 flagged to move, 4 to check. **It needs a re-render**;
nothing here is being corrected locally.

This sheet verifies the **NEPHRON (FUNCTIONAL UNIT)** panel completely, because that is the panel the
brief leads with and it turns out to be exactly as described. It also **withdraws one claim** about
the BLOOD SUPPLY panel pending a second look — see the last section.

*Verified on the shipped page (1024×1536) at 6×, 2026-08-10. Coordinates are page pixels.*

---

## NEPHRON panel — four labels on one blood vessel

The panel draws, left to right: the **vasa recta bundle** as a blue/red vertical pair at **x 833–847**,
then the **gold tubules** — the beaded proximal convolutions at x 855–925, the hairpin limbs of Henle
at x 865–885 and 895–910, and the **thick collecting-duct trunk at x 950–980**.

| row | label | where it ends (verified) | what is there | where it should end |
|---|---|---|---|---|
| 14 | Proximal Tubule | **(825,551)** | the vasa recta bundle | the beaded gold tubule, x 860–925 |
| 15 | Loop of Henle | **(840,600)** | the vasa recta bundle | the gold hairpin, x 865–910 |
| 16 | Distal Tubule | **(842,648)** | the red vessel of the same bundle | the gold tubule returning to the glomerulus |
| 17 | Collecting Duct | **~(870,700)** | the descending gold limb of Henle | the thick gold trunk, x 950–980 |

**Three of the four terminate inside a 17-pixel-wide blood vessel**, and the fourth is one structure
short. The gold tubules those labels name are drawn clearly, 20–140 px to the right, and carry no
label at all. This is the clearest instance of the routing fault in the whole review: the four
leaders leave a stacked label column and stop at the first thing they meet at their own height.

## The same panel also has a mutual swap

| row | label | where it ends (verified) | what is there |
|---|---|---|---|
| 12 | Glomerulus (filters blood) | **(823,450)** | the bend of the blue arteriole, above the capsule |
| 13 | Bowman's Capsule | **(830,500)** | the red glomerular tuft, inside the capsule |

So the tuft is labelled "Bowman's Capsule" and the arteriole is labelled "Glomerulus", while the
capsule — the thick peach ring spanning roughly x 775–850, y 460–540 — carries no label. Same shape
as `bph` p2: each label displaced onto the other's structure, which reads as a confident wrong name
rather than an obvious miss.

**Correct endpoints:** Glomerulus → the red tuft at about **(830,495)**; Bowman's Capsule → the peach
ring, e.g. its left limb at about **(780,500)**.

Note the consequence for layout: with those endpoints, the Glomerulus leader has to pass **over** the
capsule ring to reach the tuft inside it. That is normal and fine — but it means the two leaders
cannot simply be swapped end for end.

---

## BLOOD SUPPLY — the order was right, and an earlier draft of this sheet was wrong

**Read this section if you received an earlier version of this sheet.** A first draft told you the
"series is effectively inverted" claim could not be reproduced and asked you not to re-order the
panel. **That draft was wrong. The claim is correct.** It was withdrawn on an eyeball reading of the
endpoints at 5×; re-measuring at 11× reverses it. The instruction now is the opposite of what that
draft said.

Measured leader endpoints, at 11×:

| label | endpoint | position in the tree |
|---|---|---|
| **Segmental Arteries** | **(806,849)** | out among the fine peripheral cortical branches |
| **Interlobar Arteries** | **(794,870)** | 12 px *more medial* than Segmental |
| **Arcuate Arteries** | **(789,918)** | more medial still |
| Interlobular Arteries | (838,961) | the most lateral of the four — correct |
| Afferent Arteriole | ~(785,1021) | a small stub at the lower-pole margin; the leader crosses the blue renal vein |

Anatomically these should run **medial to lateral** in the order segmental → interlobar → arcuate →
interlobular. The first three run **exactly backwards**: 806, 794, 789. Interlobular alone is where
it belongs.

**Segmental is the worst of them.** It names the largest, most proximal branch, and the thick
first-order trunks are drawn plainly at **x 750–790, y 855–890** — its leader stops 20–50 px lateral
of them, in the fine mesh.

**What we need:** re-order the first three endpoints so they run outward with the vessel order —
Segmental onto the thick trunks at x 750–790, Interlobar lateral of that, Arcuate lateral of that
again at the corticomedullary arcs. Interlobular can stay. The Afferent Arteriole leader should not
cross the renal vein.

### Why the first reading failed, in case it helps you check our other sheets

At 5× the Segmental endpoint read as 801 and Interlobar as 806 — a 5 px difference in the wrong
direction, which is under the width of the strokes themselves. At 11× they are 806 and 794. **The
sign of a 12-pixel comparison cannot be taken off a 5× view**, and every ordering claim in these
sheets now gets measured at 11× or better before it is written down.

## Rows not yet verified

Rows 1–11 (the main figure's numbered badges and the KIDNEY CROSS-SECTION panel) and row 19 are
carried over from the work order unchecked. They are stated there with coordinates; we have not
examined them at magnification and are not implying we have.
