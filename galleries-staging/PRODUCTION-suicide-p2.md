# For production: `suicide` page 2 — the hippocampus label is on the raphe, and four labels stop on circuit nodes

5 rows flagged, **all 5 measured and all 5 confirmed** (four of them were [CHECK] rows). Needs a
re-render. *Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. `Hippocampus` and `Raphe Nuclei (Brainstem)` are on the same violet sphere

| label | endpoint | what is under it |
|---|---|---|
| **Hippocampus** | round knob at **(359,578)** | the **violet sphere** at x 355–390, y 540–585, centre (372,562), sampled **(141,89,172)** |
| **Raphe Nuclei (Brainstem)** | white arrowhead at **(390,592)** | **the same violet sphere**, from the other side |

The violet sphere sits on the brainstem with the pink serotonergic ribbon leaving it — it is the
raphe, and the raphe label is right. The hippocampus label is 33 px away on the same ball.

**The hippocampus is drawn.** Inside the medial-temporal swirl, just below and behind the orange
amygdala sphere, there is a plum/magenta elongated structure — sampled **(123,56,73)** at (303,579)
and **(108,52,65)** at (310,581), clearly distinct from both the orange amygdala **(182,74,35)** at
(305,556) and the surrounding brown.

**Correct endpoint: (305,580).**

## 2. `Amygdala` ends in empty space — CONFIRMED

The Amygdala leader is orange. It starts at a round dot at **(198,653)** on the label box and runs up
to an **arrowhead at (245,571)** — which is in **empty dark background** below the blue frontal lobe,
at the brain's inferior margin, where the orange *circuit* arrow's head also sits.

The orange amygdala sphere is drawn at **(305,556)**, 62 px away, and nothing points at it.

**Correct endpoint: (305,556).** Worth noting that the label leader and the circuit arrow are the
same orange and meet at the same point, which is part of why this reads as intentional at a glance
and is not.

## 3. `Anterior Cingulate Cortex (ACC)` is on the MID-cingulate — CONFIRMED

The green cingulate band runs **x 233 to x 440**, so its midpoint is x ≈ 336.

The ACC leader — the yellow-green line descending from the ACC box at (340,400) — ends on a blue
circuit node at **(339,455)**. That is the band's midpoint to within 3 px: **mid-cingulate, not
anterior cingulate.**

**Correct endpoint: (262,470)** — the rostral limb, green sampled **(93,189,144)**.

## 4. `Dorsolateral Prefrontal Cortex (DLPFC)` never reaches the frontal lobe — CONFIRMED

The cyan line from the DLPFC box descends left and ends on a blue node at **(402,472)** — **82% of
the way along the green cingulate band**, i.e. its posterior third — then continues down-left through
(390,490) to the purple limbic arch. **No prefrontal cortex is touched anywhere along it.**

*On the work order's own caveat:* the panel KEY does define blue lines as "Inhibitory / Top-down
control" circuit arrows, so a blue line is not automatically a pointer. But this cyan line runs from
the DLPFC box's own cyan border to the node, and it is the **only** line connecting that box to the
drawing. It is functioning as the label's leader whether or not it was drawn as one.

**Correct endpoint:** the superior-anterior frontal convexity — **(240,435)**, rose cortex sampled
(175,92,122), or **(215,470)** if the blue-shaded frontal lobe (78,112,202) is the region intended as
prefrontal. *Please pick from your source file:* this figure colours the frontal lobe blue and the
convexity above it rose, and we cannot tell which the DLPFC was meant to be.

## 5. `Orbitofrontal Cortex (OFC)` is 40 px above the orbital surface — CONFIRMED

The OFC leader ends on a blue node at **(200,507)**, in mid medial-frontal blue cortex.

Scanning the blue lobe's lower boundary by colour, the **orbital (inferior) surface** sits at
**y ≈ 547–555** across x 205–230. So the node is about **40 px above** the surface the label names.

**Correct endpoint: (210,545).**

---

## One observation not in the work order

A third blue node on the green band, at **(370,461)**, is reached by a white/cream line descending
from above — between the ACC and DLPFC boxes. We could not attribute it to a label from the shipped
page. If it belongs to a fourth label, it lands mid-cingulate like the ACC one does; if it is a bare
circuit node, ignore this. Please check at source.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | Hippocampus | (359,578) the violet raphe sphere | (305,580) the plum medial-temporal band |
| 2 | DLPFC | (402,472) posterior cingulate node | (240,435) rose convexity, or (215,470) blue frontal lobe — your call |
| 3 | OFC | (200,507) mid medial-frontal | (210,545) the orbital surface |
| 4 | ACC | (339,455) mid-cingulate | (262,470) the rostral limb |
| 5 | Amygdala | (245,571) empty background | (305,556) the orange sphere |

Correct as drawn: **Raphe Nuclei (Brainstem)** (390,592).
