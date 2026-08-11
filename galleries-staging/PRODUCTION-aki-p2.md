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

## One claim we are withdrawing until it is re-checked: BLOOD SUPPLY

The work order says of row 18 that *"Segmental Arteries — the largest, most proximal branch — points
at the finest peripheral mesh, while near-terminal branches point at larger vessels, so the whole
series is effectively inverted."*

**Reading the endpoints off the shipped panel, we could not reproduce "inverted."** Measured left to
right, the five endpoints appear to fall in the *correct* anatomical sequence — segmental most
medial, interlobular most peripheral. What does look wrong is different and narrower:

- **Segmental Arteries lands too far out.** Its leader descends from a bend at (846,821) on a slope
  of about −1.1 px per row; the true segmental trunks — the thick first-order branches — sit at
  **x 745–790**, and the endpoint is well lateral of them.
- **Segmental and Interlobar land within a few pixels of each other**, which is a defect in itself:
  two different vessel orders marked at one place.
- **Afferent Arteriole's leader crosses the blue renal vein** on its way to a small red stub at the
  lower-pole margin — this part of the order we do reproduce.

**Please do not re-order this panel's labels on the strength of the "inverted" wording.** Move
Segmental in to the first-order trunks, separate it from Interlobar, and leave the rest until we
have re-measured. We would rather withdraw a claim than have a correct series re-shuffled.

## Rows not yet verified

Rows 1–11 (the main figure's numbered badges and the KIDNEY CROSS-SECTION panel) and row 19 are
carried over from the work order unchecked. They are stated there with coordinates; we have not
examined them at magnification and are not implying we have.
