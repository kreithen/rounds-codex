# For production: `uti` page 2 — three of five labels in the kidney panel point at pyramids

5 rows flagged, **all 5 measured and all 5 confirmed** (the [CHECK] row resolved as a real defect).
Needs a re-render. *Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. `③ Renal vein` is on the renal artery

Measured at 12× on the main figure:

| badge | leader tip | sampled colour under it |
|---|---|---|
| **② Renal artery** | **(425,408)** | (180,100,93) — the red artery, **correct** |
| **③ Renal vein** | **(413,413)** | **(78,8,13)** — **the red artery's lower edge** |

The blue renal vein runs immediately below, through **(430,426)**, sampled **(33,75,140)**. The ③
leader stops about 12 px short of it, on the artery ② already names.

**Correct endpoint: (430,426).**

Two vessel labels on one vessel, on a page whose subject is ascending infection along the urinary
tract — the vessels are context, but a reader learning them off this figure learns them wrong.

## 2. `⑧ Ureterovesical junction (UVJ)` is 43 px below the junction — CONFIRMED

Dot at **(565,771)**, on the **plain lateral bladder wall**. The gold ureter descends from the upper
right and meets the bladder silhouette at about **(560,727)** — 43 px above.

**Correct endpoint: (560,727).**

*Worth flagging beyond the leader:* the ureter is drawn passing **behind** the bladder and simply
ending at the outline, so **no oblique intramural segment is drawn** for the leader to point at. The
UVJ is badge ⑧ of eight and the page's KEY POINT turns on it. The page's own IMPORTANT ANATOMIC
RELATIONSHIPS strip has a UVJ panel that draws the oblique entry correctly — use it as the reference
and give the main figure the same detail.

## 3–5. The KIDNEY panel: `Renal pelvis`, `Major calyx` and `Minor calyx` all land on medullary pyramids

Five leaders come in from the right, in label order. Sampling under each tip separates them cleanly —
the pyramids are red (G ≈ B) and the collecting system is gold (G well above B):

| label | tip at | sampled | verdict |
|---|---|---|---|
| Cortex | **(841,272)** | outer cortical band | **correct** |
| Medulla | **(844,300)** | a pyramid | **correct** |
| **Renal pelvis (collecting system)** | **(844,347)** | **(174,69,61)** — a **pyramid** | wrong |
| **Major calyx** | **(842,390)** | **(120,37,31)** — a **pyramid** | wrong |
| **Minor calyx** | **(830,417)** | **(142,51,46)** — the base of a **pyramid** | wrong |

**So three of the five labels in this panel point at the structure the second label already names.**
The entire tan collecting system — the thing the page is about — is drawn in full and carries no
label at all.

The gold structures, located by colour:

| what | where | sampled |
|---|---|---|
| **the pelvis funnel** | **(793,350)** | (184,114,54) |
| **a major calyx branch** | **(803,372)** | (216,138,73) |
| **a minor calyx cup** around a papilla | **(816,378)** | (222,173,106) |

**Correct endpoints:** Renal pelvis → **(793,350)**; Major calyx → **(803,372)**; Minor calyx →
**(816,378)**.

All three moves are 30–45 px to the left, so the leaders keep their shape and the panel keeps its
layout. The gold branches run out to about y 400 and no further, which is why the Minor calyx dot at
y 417 could not have been on one.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | ③ Renal vein | (413,413) the renal artery | (430,426) the blue renal vein |
| 2 | ⑧ Ureterovesical junction | (565,771) plain bladder wall | (560,727) where the ureter meets the wall — **and draw the oblique segment** |
| 3 | Renal pelvis | (844,347) a pyramid | (793,350) the tan funnel |
| 4 | Major calyx | (842,390) a pyramid | (803,372) a tan branch |
| 5 | Minor calyx | (830,417) a pyramid base | (816,378) a tan cup around a papilla |

Correct as drawn: **② Renal artery** (425,408), **Cortex** (841,272), **Medulla** (844,300).
