# `addisons` page 1 — the order's row was fixed in-app (v95); re-verified, plus one open observation

**Status: the work order's only row is already corrected and shipped.** This sheet exists to record
the re-verification and one point the original fix did not cover. *Re-measured on the shipped page
(800×1200), 2026-08-16.*

**Panels swept independently** — not merely checked against the work order: the magnified adrenal
cross-section inset, the main KIDNEYS/ADRENALS figure with badges ① ② ③ ④, the great-vessel labels,
and the ADRENAL CORTEX ZONES histology panel.

---

## 1. Row 1 `Cortex (…)` — FIXED, verified

The order reported the Cortex leader ending *"inside the dark brown medulla … the same tissue the
Medulla leader points at."* That was true when the order was written. It was corrected in
**v95 (`bfa161a`)** by shortening the leader along its own axis until its terminus fell inside the
orange band — a shortening, not a redraw, with nothing painted.

Re-measured on the shipped file today:

| label | terminator | tissue sampled |
|---|---|---|
| **Cortex** | **(268,236)** | **(171,125,87)** — the orange cortical band |
| **Medulla** | **(263,260)** | **(98,51,34)** — the dark maroon medulla |

A horizontal profile at the Cortex leader's own row puts the medulla at x 240–257 and the orange
cortical band at x **259–269**, so the tip at x 268 is inside the band with 1 px to spare; at the
Medulla leader's row the band has moved outward to x 273–280, leaving x 263 some 19 px inside the
medulla. **Two labels, two layers, as intended.** No further action.

*(Recorded because it nearly caused an error the other way: measured cold, this row reads as a false
positive in the work order. It is not — it is our own fix, already deployed. Check the page's git
history before reporting an order row as unreproducible.)*

## 2. Open — ③ `Adrenal Cortex` and ① `Right Adrenal Gland` land 19 px apart

Not in the work order; found by the panel sweep.

| badge | label | terminator | what is under it |
|---|---|---|---|
| ① | Right Adrenal Gland | **(267,358)** | the golden gland |
| ③ | Adrenal Cortex | **(260,376)** | the same gland, one lobule lower |

Nothing is anatomically false — the cortex *is* the outer layer, so a leader onto the gross surface
is defensible. The difficulty is that this page also carries a cut inset built expressly to separate
cortex from medulla, and badge **④ Adrenal Medulla** is placed at that inset. The two halves of one
teaching point are therefore shown in two different places, and a reader comparing ③ with ④ learns
that the cortex is the outside of the whole gland while the medulla lives in a separate picture.

**If it is cheap, point ③ into the inset's orange band near (264,241)** so ③ and ④ read as a pair.
If not, leave it — this is a design judgement, not an error, and we would rather say so than dress
it up as a defect.

## 3. Measured clean

| what | measured | verdict |
|---|---|---|
| ② Left Adrenal Gland | ends ≈**(507,353)** on the golden gland, viewer's right | correct |
| ④ Adrenal Medulla | badge at (289,293), set beside the inset rather than led | acceptable as drawn |
| Inferior vena cava | ends **(403,278)**; the blue trunk spans x 379–**403** at that row | on the vessel's edge — correct |
| Abdominal aorta | ends **(456,273)**; the red trunk spans x 431–**453** at that row | 3 px past the margin — within tolerance at this export size |
| ADRENAL CORTEX ZONES | brackets at y 228–282 / 288–342 / 352–408 against bands at y 225–277 (dark), 278–345 (pale columnar), 346–390 (dark) | all three correct, in the right histological order |

**Handedness checked before calling the paired labels correct**, because that is where this project
has been caught before: the blue IVC lies at x 379–403 and the red aorta at x 431–453, so blue is
viewer's-left of red. In an anterior view that puts the IVC on the patient's right — which fixes the
sense of the whole figure and makes ① genuinely the right adrenal and ② genuinely the left.

---

## Summary

| # | item | state |
|---|---|---|
| 1 | Cortex (glucocorticoids, mineralocorticoids, androgens) | **fixed in v95, verified — no action** |
| 2 | ③ Adrenal Cortex vs ① Right Adrenal Gland, 19 px apart | **open** — optional move to the inset at (264,241) |
| 3 | export size | 800×1200; re-export at 1024×1536 (covered by `PRODUCTION-export-sizes.md`) |

Correct as drawn: **Medulla** (263,260), **① Right Adrenal Gland** (267,358), **② Left Adrenal
Gland** (507,353), **Inferior vena cava** (403,278), **Abdominal aorta** (456,273), and all three
**ADRENAL CORTEX ZONES** brackets.
