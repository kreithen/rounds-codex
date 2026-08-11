# For production: `hyperkalemia` page 2 — the medulla labelled on the capsule, the collecting duct on the DCT

3 rows flagged, **all 3 measured and all 3 confirmed** (one [CHECK] row resolved, and more precisely
than the order states it). Needs a re-render. *Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. `② Renal Medulla` is on the outside of the intact kidney

The KIDNEYS – ANTERIOR VIEW panel draws **two** kidneys: the left one **intact**, the right one **cut
open** with its pyramids and pelvis showing.

| badge | endpoint | what is under it |
|---|---|---|
| **① Renal Cortex** | dot at **(346,334)** | the intact kidney's outer surface — **correct** |
| **② Renal Medulla** | dot at **(347,451)** | **the same outer surface**, 117 px lower — capsule/cortex again |

The intact kidney has no medulla showing anywhere on it, so this leader cannot be right at any point
along its length. The pyramids are all in the **cut** kidney opposite, where badges ③ and ④ already
land.

**Correct endpoint: (533,435)** — a striated medullary pyramid in the cut kidney, chosen so it does
not collide with **④ Collecting Duct** at (571,451) or **③ Nephron** at (599,341).

## 2. `④ Collecting Duct` is on the distal convoluted tubule

In THE NEPHRON panel the leader runs horizontally at y = 632 and ends in a round dot at
**(908,632)** — the **lower bend of the DCT coil**.

Scanning tan tubule pixels across the panel gives three vertical tubes at every level:

| x range | what it is |
|---|---|
| 888–894 | the loop's left limb |
| 909–913 | the loop's right limb (partly hidden behind the vasa recta) |
| **952–970** | **the thick branched collecting duct**, running the full height with side branches |

**Correct endpoint: (960,620)** — on the branched duct, which is the only structure on the panel that
looks like a collecting duct and is currently unlabelled.

For reference the neighbour is right: **Distal Convoluted Tubule** ends at **(902,558)** on the
tubule's upper vertical run.

## 3. Neither limb of the loop is identified — CONFIRMED, and the mechanism is a shared bracket

The panel prints three labels in a group:

```
Loop of Henle  ───────────┐
  • Descending Limb        │   ← nothing
  • Ascending Limb  ───────┘
```

Measured: a **square bracket at x = 872 spanning y 406–533**, mouth facing the tubule. **Two**
horizontals feed into it — **"Loop of Henle" at y = 438** and **"Ascending Limb" at y = 504** — and
**"Descending Limb" at y ≈ 462 has no line at all.**

So the bracket, which correctly spans the whole loop, is shared by the group label and one of its own
sub-items, and the other sub-item has nothing. A reader cannot tell which tube is which — and this
panel is the whole point of the page, since the potassium story turns on where in the tubule things
happen.

**Correct:** keep the bracket for **Loop of Henle**, and give each bullet its own short leader:

- **Descending Limb → (891,470)** — the left vertical tube, continuous with the proximal tubule,
  which ends at (884,380).
- **Ascending Limb → (911,470)** — the right vertical tube, returning up to the DCT.

*One thing to fix while you are in there:* the ascending limb is **drawn behind the red and blue vasa
recta** for most of its length, which is why it reads as absent. A leader onto it will look wrong
unless the tube is brought clear of the vessels, or the leader lands at a level where it is visible
(y ≈ 420 and y ≈ 550 are the cleanest).

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | ② Renal Medulla | (347,451) intact kidney's capsule | (533,435) a pyramid in the cut kidney |
| 2 | ④ Collecting Duct | (908,632) the DCT coil | (960,620) the branched collecting duct |
| 3 | Descending Limb | *no leader* | (891,470) the left limb |
| 3 | Ascending Limb | shares the Loop of Henle bracket | (911,470) the right limb |

Correct as drawn: **① Renal Cortex** (346,334), **③ Nephron** (599,341), **Distal Convoluted Tubule**
(902,558), **Proximal Tubule** (884,380).
