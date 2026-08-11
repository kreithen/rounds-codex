# Laterality sweep — every row whose label names a side

Run 2026-08-10 because `pe` p2 turned up two "right" labels pointing into the patient's left lung,
and that was found by accident rather than by looking.

**Method:** all 511 work-order rows filtered to those whose **label text** contains left, right,
medial, lateral, ipsilateral or contralateral. **37 rows across 27 pages.** Those are the only rows
where a side can be inverted, so they are the only ones that needed checking.

---

## Confirmed side inversions — the label names one side, the leader is on the other

| page | label | measured |
|---|---|---|
| **pe p2** | Right pulmonary artery (central figure) | ends **(427,296)**, the vessel feeding the patient's **left** lung. Side convention fixed by the aortic arch descending on the viewer's right |
| **pe p2** | Right pulmonary artery (VASCULAR LANDMARKS) | ends **(640,769)**, the patient's **left** hilum — and shares that exact point with the "Left pulmonary artery" label |
| **bronchiolitis p2** | Left main bronchus | ends **~(408,660)**, in the **viewer's-left = patient's RIGHT** lung. The carina is at (472,625); the left main bronchus runs right from it through (500,640) |

`bronchiolitis` p2 has a second problem underneath the first: **neither bronchus leader reaches a
bronchus.** Both stop in parenchyma, 50–90 px short of the ringed tubes at x 415–520.

## A different and equally bad class the sweep exposed: pages that contradict their own key

Two rows name a side *and* land on a colour the page's own legend assigns to something else. This is
worse than a displaced leader, because the key is the thing a reader uses to check themselves.

| page | label | what the page's own key says |
|---|---|---|
| **sci p2** | Lateral Corticospinal Tract (UMN), cross-section | it lands on the **blue** region, which the panel's key assigns to **Spinothalamic** |
| **compartment p2** | 2 LATERAL COMPARTMENT, anterior view | it lands on the **green** mass, which the page's colour key assigns elsewhere |

**Recommend treating these as their own fault for the brief.** A leader on the wrong tissue is a
mistake; a leader on the wrong *key colour* is a mistake the figure itself certifies as correct.

## Rows where the label names a side but the error is not lateral

The remaining 32 are ordinary displacement — `addisons` p2's renal vessels on the ureter,
`hepatitis` p2's left portal vein on the arterial tree, `parkinsons` p2's thalamus on the globus
pallidus, `lung-cancer` p2's two main bronchi on peripheral branches (both sides wrong the same
way, so the sides are at least preserved). They are covered by the page sheets and the work order.

## What this changes

Two of the three confirmed inversions were already known from `pe` p2. **The sweep's value is
`bronchiolitis` p2**, which nobody would have reached for weeks under the damage ranking — it sits
in tier 2 with nine flagged rows and its worst one reads as an ordinary displacement in the order's
own wording.

**Cost: about twenty minutes.** The filter is one regex over the row labels, and it reduced 511 rows
to 37. Worth re-running against any future audit.
