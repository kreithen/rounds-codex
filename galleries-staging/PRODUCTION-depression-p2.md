# For production: `depression` page 2 — two prefrontal labels on the cingulate, and the cingulate label on prefrontal cortex

7 rows flagged, **all 7 measured and all 7 confirmed** (four were [CHECK] rows). Needs a re-render.
*Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. The three cortical labels are an exchange, and the page's own key names it

The CORTICAL REGIONS legend assigns **green to "Cingulate cortex (emotion)"** and **blue to "Frontal
lobe (regulation)"**, and the figure is shaded accordingly: a green band arcing over the corpus
callosum, blue frontal cortex in front of and below it.

| row | label | terminator | sampled | what that is |
|---|---|---|---|---|
| 1 | **Dorsolateral prefrontal cortex (DLPFC)** | **(473,323)** | **(152,176,132)** | **the green cingulate band** — matches the band at (500,310), (157,180,132) |
| 2 | **Ventromedial prefrontal cortex (vmPFC)** | **(577,323)** | **(175,139,128)** | **the same band's posterior/olive end** — matches (585,330), (145,119,104) |
| 4 | Anterior cingulate cortex (ACC) *[CHECK]* | **(461,371)** | **(26,60,89)** | **blue frontal cortex** — matches (450,375), (52,104,155) |

So the two labels naming **prefrontal** cortex are on the **cingulate**, and the label naming the
**cingulate** is on **prefrontal** cortex. That is fault 5 — the page contradicting its own colour key
— and every row is decided by sampling, with no anatomical judgement.

**Correct endpoints:** DLPFC → the blue frontal convexity above and in front of the band; vmPFC →
the ventral-anterior frontal cortex, low and forward, around **(465,375)**; ACC → the green band
itself, which is where the DLPFC leader currently stops — **(473,323)**.

**Note the direction of travel.** vmPFC ends at the band's *posterior* end, high and far back, which is
about as far from ventromedial as this figure allows. On a page whose subject is prefrontal–limbic
circuit disruption, the three labels that carry that circuit are the three that are wrong.

## 2. Two labels end on empty background

| row | label | terminator | sampled | the target |
|---|---|---|---|---|
| 3 | **Pituitary gland (ACTH)** | **(624,614)** | **(9,14,22)** — black | the sella region under the hypothalamus, about 120 px away |
| 5 | Raphe nuclei (Serotonin) *[CHECK]* | **(594,528)** | **(27,34,41)** — dark | the midline brainstem nuclei higher up |

Both arrowheads sit on nothing. For row 5 the order names **the gold node at (555,437)** as the
target, and that node is real and bright — sampled **(216,156,83)**.

> **CORRECTED 2026-08-15 — that node is almost certainly the PITUITARY, not a raphe nucleus.** At
> 14× it is a discrete gland-like body, an orange sphere spanning **x 552–562, y 432–444** with a
> specular highlight, and **this page's own pathway legend makes orange the HPA-axis colour** —
> serotonergic pathways are purple. So:
> - **Row 3's question below is answered: the gland IS drawn.** The Pituitary (ACTH) leader should
>   go to **≈(556,437)**, and this page comes off `PRODUCTION-artwork-needed.md`.
> - **Row 5's target above is wrong.** Do not send the Raphe leader there. The raphe nuclei are the
>   midline brainstem column lower and further back; we are not giving a coordinate for it until it
>   has been read at the same magnification.
>
> **`schizophrenia` p2's pituitary row should be re-checked the same way** before it stays on the
> artwork-needed list. The check that would have caught this is on the page itself: **test a
> candidate target against the page's own colour legend before naming it.**

**On row 3 we are handing the target back.** The order's suggested (510,410) samples **(31,28,35)** —
dark — so we cannot confirm a drawn pituitary at that point. **Please check at source whether the
gland is drawn.** If it is not, this joins `schizophrenia` p2's pituitary on
`PRODUCTION-artwork-needed.md`, and it is the same gland missing on two psychiatry pages.

The HPA-axis panel on this page runs "Hypothalamus → CRH → Pituitary → ACTH → Adrenal cortex →
Cortisol", so the gland is load-bearing for the page's mechanism.

## 3. Two near-misses, both confirmed

| row | label | terminator | sampled | the structure |
|---|---|---|---|---|
| 6 | Nucleus accumbens (Dopamine) *[CHECK]* | **(493,424)** | **(41,44,49)** — the dark gap | the blue-violet sphere at **(492,401)**, sampled (154,110,178) — 23 px higher |
| 7 | Hippocampus (CORONAL VIEW) *[CHECK]* | **(905,415)** | **(37,20,53)** — dark cortex/white matter | the bright purple hippocampus at **(884,434)**, sampled (106,54,139) — 28 px away |

Both are short moves onto structures that are the only bright object in their neighbourhood.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | DLPFC | (473,323) the green cingulate band | the blue frontal convexity |
| 2 | vmPFC | (577,323) the band's posterior end | ≈(465,375) ventral-anterior frontal cortex |
| 3 | Pituitary gland (ACTH) | (624,614) empty background | the sella — **confirm the gland is drawn** |
| 4 | Anterior cingulate cortex | (461,371) blue frontal cortex | (473,323) the green band |
| 5 | Raphe nuclei | (594,528) dark background | (555,437) the gold node |
| 6 | Nucleus accumbens | (493,424) the dark gap | (492,401) the violet sphere |
| 7 | Hippocampus (coronal) | (905,415) cortex/white matter | (884,434) the purple hippocampus |
