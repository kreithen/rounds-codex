# For production: `stroke` page 1 — five cerebral-artery labels land outside the skull, and four name vessels this view cannot show

8 rows flagged, **all 8 measured and all 8 confirmed** (three were [CHECK] rows). Needs a re-render.
*Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

**This is the most damaging page we have measured.** It is the overview page of the stroke module —
the first thing a reader sees — and it teaches that the circle of Willis, the basilar artery and the
posterior cerebral artery are branches of the aortic arch.

---

## 1. The mechanism: a vertical label column and horizontal leaders

Every label on the left of the main figure is a **horizontal dashed line running right to whatever
vessel sits at the same height**. The labels are stacked in anatomical order from the MCA downward —
but **the column continues 300 px below the base of the skull**, so the intracranial vessels get
labelled onto neck and mediastinal vessels.

The brain's inferior surface is at **y ≈ 458**; the skull base at **y ≈ 500**.

| label | leader | endpoint | how far below the brain |
|---|---|---|---|
| Middle Cerebral Artery (MCA) | gold dashes at **y = 423** | gold terminator at **(447,423)** | *inside* the cranium — see section 3 |
| **Anterior Cerebral Artery (ACA)** | dashes at **y = 503** | gold terminator at **(461,503)** | **48 px below** — on the cervical arterial trunk |
| Internal Carotid Artery (ICA) | dashes at **y = 570** | arrowhead at **(447,570)** | 112 px below — but the ICA *is* a cervical vessel, so this one is defensible |
| Vertebral Artery | dashes at **y = 630** | arrowhead at **(452,630)** | 172 px below — likewise a neck vessel, defensible |
| **Basilar Artery** | line at **y = 668** | runs right past x = 480 | **210 px below** |
| **Posterior Cerebral Artery (PCA)** | dashes at **y = 715** | runs right to ≈ (470,715) | **257 px below** |
| **Circle of Willis** | dashes at **y = 775** | runs right | **317 px below** |

The work order's estimates — "about 40 px below the inferior surface" for the ACA, "about 200 px
below the cranium" for the basilar, "roughly 300 px below the skull" for the circle of Willis — are
accurate to within a few pixels.

## 2. Four of these labels name vessels the figure does not draw

**This is the part that cannot be fixed by moving leaders**, and it is why we would not simply
re-route them.

The main figure is a **lateral view** showing the cervical arteries ascending into the head and the
**cortical surface branches** fanning over the hemisphere. The red tree enters the cranium at about
**(505,500)** and branches at **(505,430)**, running out through (520,410), (535,395), (545,380) and
(555,350) into the ischemic zone.

Looked at across the whole figure at 5×:

- **there is no circle of Willis** — no arterial ring at the base of the brain, anywhere
- **there is no basilar artery** — no midline vessel on the front of the pons; no pons is drawn
- **there is no posterior cerebral artery**
- **there is no anterior cerebral artery** — the ACA runs on the medial surface, which a lateral view
  cannot show

All four are **basal or medial vessels that are invisible in this projection.** The label list was
written for a different figure — a circle-of-Willis or basal view — and applied to a lateral one.

**Two ways forward, and they are not equivalent:**

1. **Add a small basal / circle-of-Willis inset** and move those four labels onto it. The page has
   room in the lower-left of the main figure panel, and the module needs that view anyway.
2. **Drop the four labels from this figure**, keeping ICA, vertebral and MCA, which this view does
   show.

We would add the inset. A stroke overview page that names no basal vessel is a real gap; a stroke
overview page that puts the basilar artery in the mediastinum is worse than the gap.

## 3. `Middle Cerebral Artery (MCA)` — the one label with a target on this figure, and it misses

Row 5, confirmed. The MCA leader is **gold**, dashed, at y = 423, and ends in a **gold terminator at
(447,423)** — in a sulcus of the **plain pink, non-infarcted** cortex.

The artery the artwork actually draws is 60–110 px to the right: the red trunk ascending at
**x 500–520**, and its branches running up into the gold penumbra at **(535,395)** and **(545,380)**.

**Correct endpoint: (520,410)** on the trunk, or **(540,388)** on a branch over the penumbra.

*(We measure the gap as 58 px to the ascending trunk and 107 px to the branch entering the penumbra;
the order says ~130 px. The endpoint itself is not in doubt — only the distance, which depends on
which part of the trunk you measure to.)*

**Worth fixing at the same time, and not in the order:** this leader and the ACA leader below it are
drawn in **gold, and both terminate in a gold blob** — the same amber the figure uses for the
**penumbra**. A terminator painted in a colour the figure has assigned to a tissue class is hard to
see and easy to read as artwork. Both would be clearer in white, like the thrombus leader.

## 4. `Thrombus (clot) blocking the MCA` — CONFIRMED

Row 6. A **white dot at (556,368)**, inside the **dark red infarct core**, with the line running down-
right to the magnifier inset. The inset shows a clot **inside a vessel lumen**, so the anchor should
be on the vessel.

A red arterial branch passes about **8 px** away, through (548,375). **Correct endpoint: (548,375).**

A short move, but the difference matters: as drawn, the page marks the clot as being in brain tissue.

## 5. ISCHEMIC STROKE PATHWAY panel — both tissue labels are on the wrong hemisphere

Rows 7 and 8, both confirmed, and both are short unambiguous moves.

| row | label | terminator at | what is under it | the structure it names |
|---|---|---|---|---|
| 7 | **Ischemic core (infarct)** | **(893,631)** | **plain pink LEFT hemisphere**, at the icon's near edge | the dark red core at **x 940–975, y 600–635** — 50 px right |
| 8 | **Penumbra (salvageable tissue)** | **(890,730)** | **plain pink LEFT hemisphere** | the gold rim at **x 955–1000, y 695–750** — 70 px right, on the opposite side of the icon |

Each icon has exactly one coloured region and it is the only non-pink thing on it, so there is no
ambiguity about the target.

**Correct endpoints:** row 7 → **(955,617)**; row 8 → **(975,720)**.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | Circle of Willis | (y = 775), 317 px below the brain | **not drawn — add a basal inset, or drop** |
| 2 | Posterior Cerebral Artery | (y = 715), 257 px below | **not drawn — as above** |
| 3 | Basilar Artery | (y = 668), 210 px below | **not drawn — as above** |
| 4 | Anterior Cerebral Artery | (461,503), 48 px below | **not drawn in a lateral view — as above** |
| 5 | Middle Cerebral Artery | (447,423) non-infarcted cortex | (520,410) the trunk, or (540,388) a branch |
| 6 | Thrombus blocking the MCA | (556,368) the infarct core | (548,375) the artery |
| 7 | Ischemic core (infarct) | (893,631) the left hemisphere | (955,617) the dark red core |
| 8 | Penumbra (salvageable tissue) | (890,730) the left hemisphere | (975,720) the gold rim |
| — | MCA and ACA leader colour | gold — the penumbra's colour | white, like the thrombus leader |

Correct as drawn, and defensible where the order flags them: **Internal Carotid Artery** (447,570) and
**Vertebral Artery** (452,630) are both genuinely cervical vessels, and the figure draws them.
