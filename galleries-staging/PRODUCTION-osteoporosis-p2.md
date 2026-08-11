# For production: `osteoporosis` page 2 — Tibia and Fibula are on each other's bone, and on the anterior skeleton both are on one bone

5 rows flagged. **Two measured and confirmed; three carried.** Needs a re-render.
*Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. THE SKELETAL FRAMEWORK — the leg labels

The panel draws two skeletons, anterior on the left and lateral on the right, with a shared label
column between them. **Each label carries two leaders, one to each skeleton**, so every row has to be
checked twice — and on this page the two leaders of one label do not agree.

### The anterior skeleton — both leg labels are on the slender bone

Measured at 16×, the near leg has a **broad shaft at x 428–441** and a **slender shaft at x 445–452**.

| label | dot at | which bone |
|---|---|---|
| **Tibia** | **(449,691)** | the **slender** shaft — at that height it spans x 448–450 |
| **Fibula** | **(446,730)** | the **slender** shaft again, on its medial edge |

**The broad shaft carries no label at all.** It sits 10–17 px medial to both dots and runs the whole
length of the leg. On a page whose subject is fragility fracture sites, the tibia is the bone that is
unlabelled.

### The lateral skeleton — the two labels are on different bones

| label | leader ends at | which bone |
|---|---|---|
| **Tibia** | **≈(558,673)** | the **slender** anterior shaft (x 552–560), at the knee |
| **Fibula** | **≈(563,708)** | the **broad** shaft behind it (x 561–572) |

So on this skeleton the labels *are* on separate bones, and if the broad shaft is the tibia — which its
width says it is — **the two are exchanged.**

**One thing we will not call from a render.** The lateral skeleton shows both legs overlapping, and we
could not be certain which shaft belongs to the near leg. **Please confirm from your source scene
which bone each label should take before re-routing** — the width argument is strong but it is not
proof when two legs are superimposed.

**Correct endpoints, once that is settled:** Tibia → the broad shaft on both skeletons, e.g.
**(436,691)** on the anterior figure; Fibula → the slender shaft, e.g. **(449,730)**.

## 2. A second terminator on the Tibia leader

Not in the order. On the lateral skeleton there is a **short white horizontal dash at y ≈ 690, running
x 556 to 568**, separate from the Tibia leader's splayed tip at (558,673) and lying across both
shafts.

If that dash belongs to the Tibia label, this is a **fault-8 two-tip leader** and the two tips are on
different bones — which would be the worst possible version of it. **Please check at source.**

## 3. Rows 3, 4 and 5 — carried, not measured

| row | label | the order's finding |
|---|---|---|
| 3 | **Radius (Distal)** | the distal **FEMORAL** shaft of the lateral skeleton, just above the knee. The hand is drawn up and to the right |
| 4 | **Humerus** | the lower thoracic / lumbar **VERTEBRAL COLUMN** of the lateral skeleton, about one vertebral body below the distal humerus. Its anterior-side leader stops in soft tissue medial to the humerus, **though it does cross the shaft** |
| 5 | Ribs *[CHECK]* | the right-hand leader terminates on the **humeral shaft** after crossing 3–4 rib arcs |

**These three are worth reading together, because they are the same shape as the leg rows.** The
label column runs Cranium, Vertebral column, Ribs, Humerus, Pelvis, Femur, Radius (Distal), Tibia,
Fibula — and the reported endpoints are: Ribs → the humerus, Humerus → the vertebral column, Radius →
the femur. Each of those is **another bone from the same column**, not a random miss.

Row 4's detail is the useful one: the anterior leader **crosses the humeral shaft and keeps going**.
A leader that passes through its own target and stops beyond it is the signature of an endpoint placed
from a list position rather than from the artwork — fault 1 in the brief.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | Tibia | (449,691) anterior — the slender bone; ≈(558,673) lateral | the broad shaft on both, e.g. (436,691) |
| 2 | Fibula | (446,730) anterior — the slender bone; ≈(563,708) lateral | the slender shaft on both, e.g. (449,730) |
| 3 | Radius (Distal) | *per the order* — the distal femur | the distal radius at the wrist |
| 4 | Humerus | *per the order* — the vertebral column | the humeral shaft |
| 5 | Ribs | *per the order* — the humeral shaft | a rib |
| — | Tibia's second dash | x 556–568 at y ≈ 690, across both shafts | **check whether this is a second terminator** |
