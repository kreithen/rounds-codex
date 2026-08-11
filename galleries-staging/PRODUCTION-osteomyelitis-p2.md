# For production: `osteomyelitis` page 2 — yellow marrow labelled in the red marrow, endosteum labelled in the marrow

6 rows flagged, **all 6 measured and all 6 confirmed** (three [CHECK] rows resolved: two as real
defects, one as arguable). Needs a re-render. *Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## LONG BONE (SECTIONAL ANATOMY) — the two marrow labels

The figure draws the two marrows as two clearly separated blocks, and **both labels miss.**

- **Red (haematopoietic) marrow** — the dark red trabecular mass of the metaphysis, x 300–370,
  y 405–478. Sampled at (359,441): **(116,56,43)**.
- **Yellow (fatty) marrow** — a saturated gold rectangle, **x 313–347, y 478–560**. Sampled at
  (328,505): **(197,131,34)**.

| row | label | dot at | what is under it |
|---|---|---|---|
| 1 | **Yellow marrow** | **(353,441)** | **deep red marrow**, 38 px above the gold block's top edge |
| 2 | **Endosteum** | **(343,533)** | **inside the gold yellow-marrow block**, at its right margin |

**Row 1 correct endpoint: (328,505)** — the middle of the gold block. The "Red marrow" label above it
is placed correctly, so the two are not swapped; Yellow marrow simply stops one structure short.

**Row 2 correct endpoint: (359,533).** Sampling across at y = 533 gives the layer boundaries exactly:

| x at y=533 | RGB | what it is |
|---|---|---|
| ≤ 346 | (103,64,7) | gold yellow marrow — **where the dot is** |
| 348–356 | (45,17,0) → (56,19,11) | the dark endosteal/trabecular transition |
| **358–386** | (190,163,133) → (195,171,143) | **the cortical shell** |
| 388 onward | (13,7,7) | background |

The endosteum lines the **inner surface** of that shell, so the endpoint belongs at **x ≈ 358–359**,
16 px right of the dot — not at x ≈ 368, which is mid-cortex. (The work order's suggested x ≈ 368 is
on the right structure but slightly deep; we are refining the coordinate, not disputing the row.)

## OSTEON — row 3, `Haversian (central) canal` stops on the lamellae — CONFIRMED

Two leaders arrive at the osteon's top face 29 px apart, and both land on the concentric rings:

| label | leader route | endpoint |
|---|---|---|
| **Concentric lamellae** | horizontal at y = 392 | **(738,392)** — the lamellar rings |
| **Haversian (central) canal with blood vessels** | horizontal at y = 452, elbow at (690,452), then up-right | **(738,421)** — the same lamellar rings, 29 px lower |

The canal itself is unmissable: a **dark oval opening at x 765–825, y 385–420** with the red and blue
vessels running down through it. The leader is aimed at it and stops **27 px short**, on the
structure the label above already names.

**Correct endpoint: (790,402)**, inside the dark opening beside the vessels.

## OSTEON — row 4, `Volkmann's canal` lands on an osteocyte lacuna — CONFIRMED

This one has its own control on the same figure, in the same drawing style:

| label | leader route | endpoint | what is there |
|---|---|---|---|
| **Lacunae (osteocytes)** | horizontal at y = 541, elbow at (750,541), then up-right | **(783,512)** | a black almond-shaped lacuna at (785,517) — **correct** |
| **Volkmann's (perforating) canal** | horizontal at y = 660, elbow at (752,660), then up-right | **(783,622)** | a black almond-shaped **lacuna** at (785,623) |

Same dogleg, same target class, 110 px apart. The Volkmann's label names a **transverse vascular
channel**, and one is drawn: the red-and-blue vessel pair crossing the cut face, traced by colour at
**(742,532) → (766,548) → (794,564) → (823,580) → (854,596) → (870,604)**, where it turns and runs
down the right edge.

**Correct endpoint: (766,548)** — on the vessel pair, and close enough to the existing elbow that the
leader barely changes shape.

## VASCULAR SUPPLY OF BONE — rows 5 and 6

**Row 5, `Epiphyseal arteries` — CONFIRMED, and genuinely arguable.**

| label | endpoint | note |
|---|---|---|
| Metaphyseal arteries | **(294,1095)** | on the cortex |
| **Epiphyseal arteries** | **(297,1130)** | a cortical foramen **35 px below it**, on the same stretch of cortex |

Two vessel labels 35 px apart on one piece of shaft cortex, with the distal epiphysis about 120 px
below the lower one. **We are not calling this a defect.** An arterial label placed where the vessel
*enters* the bone is a legitimate convention, and both of these read that way. What is worth fixing
is the *ambiguity*: at 35 px apart a reader cannot tell which foramen belongs to which label. Either
separate them along the cortex or take the epiphyseal leader down to the epiphysis it supplies.

**Row 6, `Venous drainage` — CONFIRMED.** Endpoint at **(285,1250)**, on the **distal cortical
shell**, with no vessel of any kind at the tip.

The veins are drawn. Two blue-grey venous channels run the length of the medullary cavity — one
central at **x ≈ 341–348**, one lateral at **x ≈ 383–392** — both clearly distinguishable from the
red arterial tree at 12×.

**Correct endpoint: (386,1080)** on the lateral channel, or **(344,1180)** on the central one if a
shorter leader is preferred. Either is about 100 px medial to where the leader stops now.

*One thing to be careful of when checking this at source:* the bone's own outline carries a pale
blue-grey highlight along **x 391–405** in the distal third. It reads as a vessel at low zoom and it
is not one — it traces the silhouette exactly. We nearly reported it as the target.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | Yellow marrow | (353,441) red marrow | (328,505) the gold block |
| 2 | Endosteum | (343,533) inside the gold block | (359,533) the inner surface of the cortical shell |
| 3 | Haversian (central) canal | (738,421) concentric lamellae | (790,402) inside the dark canal opening |
| 4 | Volkmann's (perforating) canal | (783,622) an osteocyte lacuna | (766,548) the transverse red/blue vessel pair |
| 5 | Epiphyseal arteries | (297,1130) cortical foramen | separate from Metaphyseal (294,1095), or take it to the epiphysis — **arguable, your call** |
| 6 | Venous drainage | (285,1250) distal cortical shell | (386,1080) or (344,1180), the medullary venous channels |

Correct as drawn and not to be touched: **Red marrow**, **Concentric lamellae** (738,392),
**Lacunae (osteocytes)** (783,512), **Metaphyseal arteries** (294,1095).
