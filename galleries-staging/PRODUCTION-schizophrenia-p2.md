# For production: `schizophrenia` page 2 — the thalamus is labelled "Corpus Callosum"

5 rows flagged, **all 5 measured and all 5 confirmed**, plus **two defects the work order does not
list**. Needs a re-render. *Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. `Corpus Callosum` and `Thalamus` — one lands on the other's structure, the other lands on nothing

Both leaders come down into the **SAGITTAL VIEW (MEDIAL)** panel from the label row above it.

| label | endpoint | what is under it |
|---|---|---|
| **Corpus Callosum** | white dot at **(489,424)** | **inside the blue/purple glowing thalamus–basal-ganglia mass** — the structure carrying the "3" badge |
| **Thalamus** | tip at **(618,428)** | parietal **cortical gyri**, high on the convexity — 124 px from the thalamus |

The callosum is drawn, clearly, and the Corpus Callosum leader **passes straight through it** on its
way down. Sampling a column at x = 489 from the top:

| y at x=489 | RGB | what it is |
|---|---|---|
| 374–396 | (223,188,169) → (227,206,187) | **the pale ribbed callosal band** |
| 398–414 | (64,34,26) → (100,64,52) | the dark space beneath it |
| 416 onward | (77,66,100) → (75,174,255) at (510,450) | **the blue/purple thalamic mass** |
| 424 | (255,251,255) | **the Corpus Callosum leader's dot** |

**Correct endpoints:**
- Corpus Callosum → **(489,386)**, the middle of the ribbed band — 38 px straight up the same leader.
- Thalamus → **(495,443)**, the blue mass, i.e. where the Corpus Callosum leader currently ends.

Between them, the page teaches a reader that the thalamus is the corpus callosum and that the
thalamus is parietal cortex. This is the page's headline defect.

## 2. `Cerebellum` points at the brainstem — and the label below it points at the same tube

Two horizontal arrows come in from the right, one above the other:

| label | arrowhead at | what is under it |
|---|---|---|
| **Cerebellum** | **(583,684)** | the tan **brainstem / upper spinal cord** tube |
| **Spinal Cord** | **(596,723)** | the same tube, 39 px lower — **correct** |

The foliated cerebellum is drawn large and unmistakable at **x 570–700, y 500–600**, directly above
both arrows, and **carries no label at all.**

**Correct endpoint for Cerebellum:** **(640,530)**, in the folia.

This is the fault-2 shape — a label displaced one position down an ordered column — and it is worth
checking the whole right-hand column of this figure at source rather than moving one arrow.

## 3. `Pituitary Gland` — the arrow is a connector, but no pituitary is drawn

The work order is right to hedge this one, so we will state exactly what is on the page.

The mark is a **double-headed orange arrow** running vertically from the "4" badge at **(495,538)**
down to **(495,650)**, immediately above the label text. Its lower head is in **empty black
background**. Read as a pointer it is wrong; read as a badge-to-label connector — which is what a
double-headed arrow between a badge and its own text normally is — it is fine, and the other three
badges on the figure are drawn the same way.

**The real problem is behind the badge.** We looked at the sella region under the hypothalamus and
**no pituitary gland or stalk is drawn there** — the "4" badge sits on undifferentiated
hypothalamic/brainstem tissue. So the tuberoinfundibular pathway, which the left-hand text calls
"Hypothalamus → Anterior Pituitary", terminates on an organ the figure does not contain.

**Recommendation:** leave the connector alone and **draw a pituitary and stalk** below the
hypothalamus. If that is not wanted, the label should not imply a location.

## 4. `Nucleus Accumbens` — CONFIRMED, and it is the arguable one

Arrowhead at **(400,512)**, on the **purple mesolimbic pathway ribbon** just below the "1" badge at
(413,502). No discrete ventral-striatal body is drawn at that point.

The badge does mark the mesolimbic terminus, so an arrow to the ribbon is defensible as a *pathway*
marker. But the label names a **nucleus**, and the two neighbouring labels on the same figure —
Amygdala at **(440,522)** and Hippocampus at **(456,537)** — both point at tissue rather than at a
ribbon, which sets the reader's expectation. **Our recommendation is to draw the accumbens and point
at it**, but this is a judgement call and we are flagging it rather than asserting it.

---

## Two defects not in the work order

**A. `Substantia Nigra` is printed twice in the right-hand label column** — at y 570–600 and again at
y 620–650, the same two words both times. Their leaders end at **(554,545)** and **(554,551)**,
6 px apart on the same structure. One of the two should be a different label (the figure has an
unlabelled cerebellum immediately above, and the VTA is named in the left-hand text but nowhere on
the drawing) or it should be deleted.

**B. `Hippocampus` ends on a pathway node, not on the hippocampus.** Its tip at **(456,537)** sits on
the lower-left edge of the **purple sphere centred at (462,527)** — one of the pathway's marker
spheres, the same kind of object the Nucleus Accumbens arrow is criticised for hitting. We are not
calling this one, because the hippocampal formation may be drawn underneath the sphere; please check
at source.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | Corpus Callosum | (489,424) the thalamic mass | (489,386) the ribbed callosal band |
| 2 | Thalamus | (618,428) parietal cortex | (495,443) the blue thalamic mass |
| 3 | Cerebellum | (583,684) brainstem/cord | (640,530) the cerebellar folia |
| 4 | Pituitary Gland | (495,650) empty background | connector is fine — **draw the pituitary under the hypothalamus** |
| 5 | Nucleus Accumbens | (400,512) the mesolimbic ribbon | draw the accumbens and point at it (flagged, not asserted) |
| — | Substantia Nigra ×2 | (554,545) and (554,551) | duplicate label — resolve |
| — | Hippocampus | (456,537) a pathway sphere | check at source |

Correct as drawn: **Spinal Cord** (596,723), **Amygdala** (440,522).
