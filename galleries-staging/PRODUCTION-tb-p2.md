# For production: `tb` page 2 — an alveolar magnifier anchored to a lymph node

3 rows flagged. **Two measured and confirmed; the third could not be measured on the shipped page and
we say why below.** Needs a re-render. *Measured 2026-08-11.*

## Please also export this page at the standard size

**`tb` page 2 ships at 800×1200. The standard is 1024×1536.** Every coordinate below is in the
shipped page's own 800×1200 pixels — multiply by 1.28 for the standard-size equivalent.

This is not housekeeping on this particular page. **The undersize export is the reason row 3 below
could not be verified**: at 800 px wide, the hilar node cluster and the surrounding parenchyma no
longer separate by colour, and at 24× the region is pixel mush. Please re-render at 1024×1536 and fix
the leaders in the same pass.

---

## 1. The alveolar magnifier is anchored to a mediastinal lymph node

The magnifier circle on the main lung figure shows **alveoli, an alveolar duct and an alveolar
macrophage** — parenchymal structures. Its anchor line leaves the circle's rim at about **(383,547)**
and runs up-right to an **arrowhead at (412,478)**, which lands on a **tan/olive enlarged lymph node**
in the subcarinal cluster (that node spans x 405–430, y 460–485).

Marker **⑥ Hilar / Mediastinal Lymph Nodes** points at **(413,437)** — the node **immediately above**
it, x 405–435, y 425–455.

So the two arrows land on adjacent nodes of one chain, and only one of them is about lymph nodes. A
reader following the magnifier is told that these alveoli are what is inside that node.

**Correct anchor: (330,500)** — lung parenchyma in the mid-left lung field, clear of the node chain
and of marker ⑥'s arrow.

## 2. `Alveolar macrophage` points at an alveolus — CONFIRMED at 16×

Inside the magnifier:

| label | endpoint | what is under it |
|---|---|---|
| **Alveolus (air sac)** | dot at **(415,620)** | a pink alveolar sphere — **correct** |
| **Alveolar macrophage** | arrowhead tip at **(403,674)** | **a pink alveolar sphere**, the sphere spanning x 385–420, y 655–695 |

The purple spiculated macrophage is drawn right beside it — body **x 344–390, y 655–700**, centre
**(368,678)**, with its right-hand spicules reaching x ≈ 390 at that height. The arrowhead stops
**13 px past the cell's edge**, on the alveolus.

**Correct endpoint: (368,678)** — the purple cell body. The macrophage is the only purple object in
the inset and it is 45 px across, so there is no ambiguity about the target.

## 3. `Hilar lymph node enlargement` (Ghon Complex panel) — carried over, NOT verified

The work order reports this leader stopping on pink lung parenchyma about 20 px lateral to the tan
hilar node chain, after a dogleg. **We could not confirm or refute it on the shipped page**, and per
our standing rule we are passing it through rather than second-guessing it.

What we could trace:

- the leader runs from the label as a horizontal at y = 890 to about **(426,890)**, doglegs up-left
  through **(404,878)** and **(399,876)**, and ends at **(391,874)**
- the olive/khaki node cluster sits at roughly **x 380–392, y 870–912**

That puts the tip about 8 px lateral of the nearest node — around **10 px** at standard size, which
is half what the order states and inside the margin of what an 800 px render can resolve. Sampling
colour under the tip does not settle it either: at this export the olive nodes and the pink
parenchyma overlap in RGB, where on a 1024×1536 page they separate cleanly.

**Please check this one against your 1024×1536 master.** If the tip is off the node, move it to the
node at **(383,874)**.

For contrast, the neighbouring label on the same panel is unambiguous and correct: **Ghon focus
(subpleural granuloma)** ends at **(391,849)**, on the gold subpleural granuloma at x 383–400,
y 840–860.

---

## Summary of endpoints — all in the shipped 800×1200 page's pixels

| # | label | now | should be |
|---|---|---|---|
| 1 | alveolar magnifier anchor | (412,478) a subcarinal lymph node | (330,500) lung parenchyma |
| 2 | Alveolar macrophage | (403,674) a pink alveolus | (368,678) the purple macrophage |
| 3 | Hilar lymph node enlargement | (391,874), ~8 px lateral of the node chain | **verify at 1024×1536**; if off, (383,874) |

Correct as drawn: **⑥ Hilar / Mediastinal Lymph Nodes** (413,437), **Alveolus (air sac)** (415,620),
**Ghon focus** (391,849).
