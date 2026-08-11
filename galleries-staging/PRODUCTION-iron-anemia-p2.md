# For production: `iron-anemia` page 2 — both small-bowel labels are on the large bowel

4 rows flagged. **Two measured and confirmed; two carried.** Needs a re-render.
*Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. `JEJUNUM` and `ILEUM` are on the colon

The abdominal figure draws the two clearly and differently: the **large bowel** as a deeply
**haustrated, sacculated** frame around the outside, and the **small bowel** as **smooth, narrower
coiled loops** filling the centre. At 4× the difference is unmistakable without any colour work.

| row | label | terminator | what is under it |
|---|---|---|---|
| 1 | **JEJUNUM** | **two dots** — **(196,670)** and **(204,652)** | both on the **haustrated ascending colon / hepatic flexure** |
| 2 | **ILEUM** | **(194,780)** | the **haustrated** ascending colon's medial border |

**JEJUNUM has two terminators**, which is a **fault-8** leader in its own right — the horizontal runs
right at y = 670, then forks, one branch rising to (204,652) and the other continuing to (196,670).
Both land on the same wrong structure, so the second tip compounds rather than rescues.

The smooth small-bowel loops fill **x 230–420, y 680–810** and carry no label.

**Correct endpoints:** JEJUNUM → the smooth coiled loops in the mid-abdomen, e.g. **(300,720)**;
ILEUM → the distal loops in the right lower quadrant. *We are not giving a coordinate for the ileum*
— on this figure the RLQ loops sit behind the sigmoid and caecum and we would rather you picked the
loop than have us guess which is drawn in front.

**Why this one matters more than its row count suggests.** The page's own left-hand text reads
"JEJUNUM — Absorbs a small amount of iron" and "ILEUM — Minimal iron absorption", against "DUODENUM —
Primary site of iron absorption". The whole panel is a gradient down the small bowel, and two of its
three segments are labelled on the colon, which absorbs no iron at all.

## 2. Rows 3 and 4 — carried, not measured

| row | label | the order's finding |
|---|---|---|
| 3 | Hemosiderin (insoluble) stores excess iron *[CHECK]* | the bottom edge of **the same purple ferritin particle** the Ferritin label points at; **no separate hemosiderin aggregate is drawn** |
| 4 | Fe3+ bound to transferrin *[CHECK]* | the blue transferrin lobe at the bottom of the complex, ~40 px below either orange Fe3+ sphere. Move to one of the orange spheres |

**Row 3 may be a fault-6 row.** If no distinct hemosiderin deposit is drawn, no leader move fixes it —
the STORAGE panel's whole point is ferritin (soluble, readily available) versus hemosiderin
(insoluble, excess), and one particle cannot carry both labels. **Please check at source**; if it is
not drawn, this belongs on `PRODUCTION-artwork-needed.md`.

**Row 4 is the reverse of row 3 and easy:** the orange Fe³⁺ spheres are drawn and distinct from the
blue transferrin lobes, so it is a short move onto a sphere.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | JEJUNUM | **two dots**, (196,670) and (204,652) — the haustrated colon | one dot, ≈(300,720) on the smooth coiled loops |
| 2 | ILEUM | (194,780) the haustrated colon | the distal small-bowel loops, RLQ — **place from source** |
| 3 | Hemosiderin | *per the order* — the ferritin particle | a distinct hemosiderin deposit — **confirm one is drawn** |
| 4 | Fe3+ bound to transferrin | *per the order* — a blue transferrin lobe | an orange Fe³⁺ sphere |
