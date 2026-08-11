# For production: `ckd` page 2 — glomerulus and Bowman's capsule are swapped, and both arterioles are labelled on the wrong side

8 rows flagged, **all 8 measured and all 8 confirmed** (the [CHECK] row resolved as a real defect).
Needs a re-render. *Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. RENAL CORPUSCLE — four labels, four misses, and one clean swap

The panel draws the corpuscle unambiguously: a **red capillary tuft** filling x 800–855, a **golden
Bowman's capsule ring** at x 862–888, the dark **Bowman's space** between them at x 850–862, and the
**gold tubular pole** below at x 845–885, y 1035–1090. The **vascular pole is on the LEFT.**

| row | label | ends at | what is under it |
|---|---|---|---|
| 4 | **Bowman's capsule** | **(857,1001)** | **a red capillary loop of the tuft** |
| 5 | **Glomerulus** | **(887,1013)** | **the golden capsule ring** |
| 6 | **Afferent arteriole** | **(865,1024)** | **empty Bowman's space** — no vessel at all |
| 7 | **Efferent arteriole** | **(872,1063)** | **the gold tubule at the tubular pole** |

**Rows 4 and 5 are a straight swap** — exchange the two endpoints and both are right.

**Rows 6 and 7 are not a swap; both are on the wrong side of the figure.** The two arterioles are
drawn at the vascular pole on the **left**: an upper, thicker vessel entering at about **(775,970)**
and a second at **(770,1012)**. Both labels sit on the right, 90–110 px away, and neither vessel
carries a label.

**Correct endpoints:** Bowman's capsule → **(887,1013)**; Glomerulus → **(857,1001)**; and one
arteriole label to each of **(775,970)** and **(770,1012)**. *Which label goes to which vessel is your
call from the source file* — the afferent is conventionally the larger of the two, and the upper
vessel is the thicker one here, but we are not going to assign it from a render.

## 2. NEPHRON panel — `Proximal tubule` is on a blood vessel

Row 3, confirmed. The leader runs right at y = 447, elbows at (807,447) and rises to a rounded tip at
**(821,431)** — on the **blue vessel** running vertically at x 814–824.

The **orange-walled tubule** descending from Bowman's capsule is 37 px to the right, at **x 856–864**.

**Correct endpoint: (858,431).**

## 3. Main urinary-tract figure — neither renal vessel is labelled on a vessel

| row | label | ends at | sampled RGB | what that is |
|---|---|---|---|---|
| 1 | **RENAL ARTERY** | **(292,437)** | **(105,39,34)** | a **medullary pyramid / minor calyx** inside the renal sinus — no vessel |
| 2 | **RENAL VEIN** | **(275,510)** | **(110,35,34)** | **cortex/medulla parenchyma** |

The blue renal vein is drawn and easy to hit: sampled **(31,56,117)** at **(365,500)**, about **90 px
to the right** of where the label stops.

**Correct endpoints:** row 1 → the red arterial trunk and its branches at the hilum, around
**(324,429)** and lateral; row 2 → **(365,500)**.

## 4. RENAL BLOOD SUPPLY — the whole series is outside the kidney, and the first three run backwards

Row 8, confirmed, and this is the one worth reading carefully because it is the same shape as the
`aki` p2 blood-supply row in tranche 1.

The kidney is sectioned at **x 780–840, y 765–860**; the arterial trunk enters from the right at
y ≈ 760 and branches at about (850,758). Measured tips, in label order:

| label | tip at | position |
|---|---|---|
| Renal artery | **(828,763)** | at the kidney's upper margin — **the deepest of the three** |
| Segmental arteries | **(848,760)** | 20 px further **out** |
| Interlobar arteries | **(863,768)** | 35 px further out again, entirely clear of the kidney |
| Arcuate arteries | **(838,786)** | back at the kidney's right edge |
| Interlobular arteries | **(831,822)** | at the edge, lower |

**Renal → segmental → interlobar runs outward.** Anatomically the sequence runs *inward*: the renal
artery is the most peripheral and the interlobar the deepest, between the pyramids. So the first
three are in reverse order along the vessel.

Underneath that, the larger problem the order identifies is real: **interlobar** belongs between the
pyramids, **arcuate** arching at the corticomedullary junction, **interlobular** in the cortex — and
all five tips are on the extrarenal trunk and its two branches, x 828–863. None enters the kidney.

Vessels **are** drawn inside the outline — gold and orange arcs at roughly **x 780–800, y 765–800** —
so there may be targets. **Please confirm at source whether those are drawn as distinct interlobar,
arcuate and interlobular vessels.** If they are not, this row needs artwork rather than five leader
moves, and the honest alternative is to keep only `Renal artery` and `Segmental arteries` on this
figure and carry the intrarenal series on a panel that draws them.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | RENAL ARTERY | (292,437) a medullary pyramid | (324,429) the arterial trunk at the hilum |
| 2 | RENAL VEIN | (275,510) parenchyma | (365,500) the blue renal vein |
| 3 | Proximal tubule | (821,431) a blue vessel | (858,431) the orange tubule |
| 4 | Bowman's capsule | (857,1001) a capillary loop | (887,1013) the golden ring |
| 5 | Glomerulus | (887,1013) the golden ring | (857,1001) the capillary tuft |
| 6 | Afferent arteriole | (865,1024) empty Bowman's space | (775,970) or (770,1012) at the vascular pole |
| 7 | Efferent arteriole | (872,1063) the gold tubule | the other of (775,970) / (770,1012) |
| 8 | Segmental / Interlobar / Arcuate / Interlobular | (848,760) / (863,768) / (838,786) / (831,822) — all extrarenal, first three in reverse order | inside the kidney — **confirm the intrarenal vessels are drawn before re-routing** |
