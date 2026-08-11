# For production: `nephrolithiasis` page 2 — both renal vessels miss, and the bladder label is on the ureter

4 rows flagged, **all 4 measured and all 4 confirmed** (one [CHECK] row resolved as a real defect).
Needs a re-render. *Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. `Renal artery` lands on kidney parenchyma, not on a vessel

| label | dot at | sampled colour under it | what it is |
|---|---|---|---|
| **Kidney** | **(199,430)** | (219,142,127) | kidney cortex — **correct** |
| **Renal artery** | **(198,489)** | **(164,56,43)** | **the same kidney parenchyma**, 59 px lower |

There is no vessel of any kind within 70 px of that dot. The **red renal artery is drawn**, running
from the aorta to the hilum — sampled **(158,55,44)** at **(295,458)**.

**Correct endpoint: (295,458).**

## 2. `Renal vein` is on the inferior vena cava, 100 px below the renal vein

Dot at **(325,572)** — on the **vertical blue IVC** (x 318–335), well below the kidney.

The renal vein itself is the **horizontal blue branch** joining the IVC at hilum level — sampled
**(29,81,151)** at **(300,470)**.

**Correct endpoint: (300,470)**, 102 px straight up the IVC from where the dot sits.

Taken together, rows 1 and 2 mean the two vessels this page names are both drawn, both correct, and
**neither is labelled** — one label is on parenchyma and the other on the wrong vein.

## 3. `Urinary bladder` is on the distal ureter

Dot at **(278,871)**, on the **tan/gold distal ureter** as it descends toward the bladder. The red
bladder wall begins at x ≈ 293 at that height, and the bladder body fills x 300–360, y 855–930.

**Correct endpoint: (320,890)** — inside the bladder.

This is a 20 px miss, which is small enough to look deliberate and is not: the ureter and the bladder
are the two structures this page is about, and the label sits on the wrong one of the pair.

## 4. `Medulla (renal pyramids)` is in the cortical band — CONFIRMED at 16×

In the KIDNEY (CROSS-SECTION) inset:

| label | dot at | what is under it |
|---|---|---|
| **Cortex** | **(797,810)** | the outer cortical band — **correct** |
| **Medulla (renal pyramids)** | **(818,856)** | **the same outer cortical band**, 51 px lower |

At 16× the pyramid's pale capsule outline runs (812,846) → (809,860) → (806,868), and the dot is
clearly **to its right**, in the band between the pyramid and the kidney's outer edge at x ≈ 828.
The striated pyramid interior is on the other side of that line.

**Correct endpoint: (795,860)** — inside the pyramid, in the visibly striated tissue.

Worth saying plainly because it affects how you fix it: the cortical band here is only about **16 px
wide**, so the dot has been placed carefully *within* it. This is not a leader that overshot — it was
put where the cortex is, under a label that names the medulla.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | Renal artery | (198,489) kidney parenchyma | (295,458) the red renal artery |
| 2 | Renal vein | (325,572) the IVC | (300,470) the horizontal renal vein |
| 3 | Urinary bladder | (278,871) the distal ureter | (320,890) inside the bladder |
| 4 | Medulla (renal pyramids) | (818,856) the cortical band | (795,860) inside a pyramid |

Correct as drawn: **Kidney** (199,430), **Cortex** (797,810).
