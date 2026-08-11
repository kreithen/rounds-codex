# For production: `migraine` page 2 — a vein labelled as a membrane, and an artery labelled inside the skull

5 rows flagged, **all 5 measured and all 5 confirmed** (three [CHECK] rows resolved as real
defects). Needs a re-render. *Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. `A — Dura mater` lands on the superior sagittal sinus

The A leader terminates in a small bar at **(521.5, 306.5)**, on the upper wall of the **blue
superior sagittal sinus** at the vessel's bend. **`B — Superior sagittal sinus` arrowheads onto the
same vessel at (585,342)**, 45 px further along it.

So the page names one blue tube twice: once as a venous sinus, once as a **membrane**. A reader who
takes A at face value learns that the dura mater is a vein.

**The dura is drawn, and it is easy to hit.** Sampling a vertical column at x = 470, from outside in:

| y at x=470 | RGB | what it is |
|---|---|---|
| 272–278 | (216,199,183) → (193,161,136) | skull — outer table and diploe |
| 279 | **(237,218,203)** | the bright **inner table** line |
| **280–285** | (110,111,113) → (65,75,84) → (52,46,56) | **the dark meningeal band — this is the dura** |
| 286 onward | (194,160,158) → pink | cerebral cortex |

**Correct endpoint for A:** **(470,283)**, in the middle of that six-pixel band, well clear of the
sinus. The page's own **MENINGEAL & VASCULAR INNERVATION** panel (top right) already draws Skull /
Dura / Arachnoid / Pia as separate layers and can be used as the reference.

*Note:* a second, fainter leader tip sits at **(510,310)**, also on the sinus. Please check at source
whether A carries two terminators or whether that belongs to another label.

## 2. `C — Middle meningeal artery` is on bare cortex — CONFIRMED

Arrowhead tip at **(598,412)**. There is no vessel of any kind under it: it sits on cortical gyri at
the inner margin of the blue sinus, which runs x 608–620 at that height. The nearest branch of the
red arterial tree is roughly 10–15 px down and left, around **(590,425)**.

**Correct endpoint:** any point on the red arterial tree — e.g. **(588,428)**.

## 3. `D — Superficial temporal artery` points at an artery INSIDE the skull

Arrowhead tip at **(595,478)**, on the cortical-surface arterial tree — the same red tree that label
C, 66 px above, calls the middle meningeal artery. Both labels are on one vessel system, and one of
them names an **extracranial scalp** vessel.

**There is no correct endpoint on this page.** We checked the scalp and temple outside the inner
table across the whole convexity: the layers there are skull, diploe and soft tissue, and **no
extracranial red vessel is drawn anywhere**. So this is not a leader move — either the superficial
temporal artery has to be **drawn into the scalp over the temple**, or the label has to come off this
figure. It cannot be made correct by re-routing.

## 4. `F — Trigeminal ganglion (Gasserian)` stops on the trunk, not the ganglion — CONFIRMED

The ganglion is unmistakable on the page: a ringed disc at **(448,545)** with a dark slit at its
centre and five beige branches radiating from it — the V1/V2/V3 hub.

The F leader comes in from the lower right, **passes over the purple marker sphere at (487,614)**,
and terminates at **(453,589)** — on the beige nerve trunk descending *below* the disc, about 14 px
below its lower edge and 44 px below its centre.

**Correct endpoint:** **(448,548)**, the radiating hub itself. `E — Pterygopalatine ganglion` on the
same figure is placed correctly (small gold sphere, dot at (490,566)) and shows the intended style.

## 5. `C2` in the CERVICAL CONTRIBUTION panel is 16 px above its nerve — CONFIRMED

This one has its own control built into the page.

| arrow | tip at | what is under the tip |
|---|---|---|
| **C2** | **(150,1264)** | red posterior neck muscle. A faint pale thread runs (137,1268)→(147,1258); it is not the yellow nerve |
| **C3** | **(145,1301)** | **directly on the yellow cervical ramus** — correct |

The yellow C2-level ramus runs from **(131,1268)** down-right through **(150,1280)** to
**(158,1284)**. At x = 150 it is at y = 1280, so the C2 arrowhead is **16 px above it**, on muscle.

**Correct endpoint:** **(150,1280)** — pointing at the yellow nerve the way C3 already does.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | A — Dura mater | (521.5,306.5) superior sagittal sinus | (470,283) the dark meningeal band under the inner table |
| 2 | C — Middle meningeal artery | (598,412) bare cortex | (588,428) on the red arterial tree |
| 3 | D — Superficial temporal artery | (595,478) an intracranial branch | **needs an extracranial scalp vessel drawn over the temple**, or drop the label |
| 4 | F — Trigeminal ganglion | (453,589) the nerve trunk | (448,548) the radiating ganglion hub |
| 5 | C2 (cervical panel) | (150,1264) neck muscle | (150,1280) the yellow C2 ramus |

Correct as drawn and not to be touched: **B — Superior sagittal sinus** (585,342), **E —
Pterygopalatine ganglion** (490,566), **C3** (145,1301).
