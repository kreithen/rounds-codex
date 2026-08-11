# For production: `pneumothorax` page 2 — the pleura labels are in the lung, and the page is too small to fix four of them

14 rows flagged. **Ten measured and confirmed; four cannot be resolved on the shipped page and the
reason is the export size** — see the last section, which is the one to read first.
*Measured 2026-08-11.*

## Read this before scheduling: the page is 800×1200

**`pneumothorax` p2 ships at 800×1200. The standard is 1024×1536.** Every coordinate below is in the
shipped page's own pixels — multiply by 1.28 for standard-size equivalents.

On this page the size is not housekeeping. Cutting horizontally across the main figure's chest wall
at **y = 375**, the four labelled layers are packed into **fifteen source pixels**:

| x at y=375 | RGB | what it is |
|---|---|---|
| ≤ 471 | (109,39,47) | lung |
| **472–473** | (145,86,92) | a pale line — visceral pleura |
| 474 | (50,19,24) | dark |
| **475–476** | (143,121,124) | a pale line |
| 477–479 | (83,51,66) → (44,10,26) | dark |
| **480** | (153,122,137) | a pale line, **one pixel wide** |
| 481–484 | (7,3,4) | the dark band |
| **485–486** | (160,162,159) | a pale line — the chest-wall boundary |

**Four pale lines, each one or two pixels wide, with three-pixel gaps.** A leader dot on this page is
about 4 px across, so at this export a correctly-aimed leader is wider than the layer it names. Rows
5–8 below cannot be verified here and, more to the point, **cannot be drawn unambiguously at this
size** — which is worth a design decision as well as a re-render. See the last section.

---

## 1. INTERCOSTAL NEUROVASCULAR BUNDLE panel — four labels, four misses

This panel is legible and all four rows are confirmed. Sampling a vertical column at **x = 275**
gives the layer stack exactly:

| y at x=275 | RGB | layer |
|---|---|---|
| 866–877 | (112,74,61) → (133,93,85) | tan subcutaneous / periosteal band |
| 878–897 | (96,41,36) → (77,12,20) | red intercostal muscle |
| 898 | (209,169,170) | the groove's upper boundary |
| **900–911** | (174,138,88), with a blue vessel at x 258–283 | **the subcostal groove** |
| **912–919** | (211,174,129) → (151,110,66) | **the rib** |
| 920–945 | (5,3,4) | dark |
| **946–955** | (146,139,147) → (43,30,50) | **the purple parietal pleura** |
| **957–959** | (226,175,192) | **the pink visceral pleura line** |
| 960 onward | (99,36,53) | magenta lung |

| row | label | ends at | what is under it | correct endpoint |
|---|---|---|---|---|
| 1 | **Rib** | **(288,963)** | **magenta lung**, 4 px inside the visceral pleura line | **(275,915)** the gold rib band — keeps the leader horizontal |
| 2 | **Parietal pleura** | the leader runs at **y = 980** from the panel edge (x 296) leftward past x = 255 | **lung parenchyma along its whole visible length** — the parietal band at that x is at y 946–955, 25–35 px above | **(275,950)** |
| 3 | **Visceral pleura** | the leader runs at **y ≈ 997**, deeper still | **lung parenchyma** | **(275,958)** |
| 4 | **Intercostal vein (blue)** | round dot at **(283,873)** | the **tan subcutaneous/periosteal band** | **(270,906)** the blue segment in the groove |

**On rows 2 and 3 we are not giving you a tip coordinate, deliberately.** We could not separate the
leader's terminus from the lung's own drawn texture at this export — but we do not need to. The
visceral pleura line at that x-range is at y ≈ 958, so **every point on both leaders, from the panel
edge inward, is inside lung parenchyma.** The rows are confirmed whatever the exact tip.

**On row 4 we can be exact, and the order's estimate is right on the nose.** The blue vein segment
sits at **x 258–283, y 902–912**. The dot is at (283,873) — **30 px above it**, and the order says
"the blue segments are ~30px lower". The label's second leader segment curves down-left from (270,884)
through (265,887) and (255,891) and flattens along y ≈ 898, passing **above** the blue the whole way.
Neither end touches a vessel.

The rib is drawn twice in this panel — as the gold band at y 912–919 and as the trabecular cut end at
**x 180–222, y 930–990**. Either works for row 1; the gold band keeps the leader straight.

## 2. PLEURAL RECESSES panel — three of four recess labels miss their recess

The recesses are drawn in **blue** and are unmistakable. The fourth label is correct and shows the
intended form.

| row | label | ends at | what is under it | correct endpoint |
|---|---|---|---|---|
| 9 | **Cervical (recess above the clavicle)** | **(608,878)** | shoulder soft tissue / first rib, **lateral to** the blue apical patch at x 560–570, y 872–883 | **(565,877)** |
| 10 | **Costomediastinal recess** | **(597,925)** | mid-zone lung and overlying ribs — the mediastinal border is at x ≈ 550, so this is **36 px lateral** of the reflection | **(562,925)** |
| 11 | **Costophrenic recess** | **(597,963)** | lung parenchyma, **above** the blue crescent, which runs x 587–607, y 975–1003 | **(597,985)** |
| — | Diaphragmatic recess | **(605,1000)** | the blue crescent — **correct** | leave |

## 3. APICAL BLEBS panel — the costophrenic angle label is on the lateral lung border

Row 12. Dot at **(682,402)**, on the lung's **lateral border**, mid-zone. The costophrenic angle —
where the lung base curves down to meet the chest wall — is at about **(674,438)**, **38 px lower**.
(The order estimates 25 px; we measure 38.)

**Correct endpoint: (674,438).**

The two neighbours on this panel are placed correctly and can stay: **Pleural line** at (680,360) and
**Deep sulcus**, whose leader ends at (694,455), inside the dashed marker circle at x 670–697,
y 440–470.

## 4. CHEST TUBE SAFE TRIANGLE — both border labels are on the same side

Rows 13 and 14, confirmed. The triangle is drawn with three vertices and three sides:

| element | measured |
|---|---|
| **Apex** (gold dot) | **(661,574)** |
| **posterior vertex** (white dot) | **(592,710)** |
| **Base** (gold dot) | **(664,741)** |
| **side A** — a **red** vertical | x ≈ 660–663, from y 576 to y 739 |
| **side B** — blue diagonal | (661,574) → (592,710), with a white waypoint dot at (629,623) |
| **side C** — blue, the base | (592,710) → (664,741) |

| row | label | ends at | what is under it |
|---|---|---|---|
| 13 | **Anterior border of latissimus dorsi** | **(659,621)** | **side A, the red vertical** |
| 14 | **Lateral border of pectoralis major** | **(659,672)** | **side A, the red vertical**, 51 px lower |

So the two labels that name the triangle's *two different borders* land on **one** side, 51 px apart,
and side B carries no label at all — even though it has a white waypoint dot at (629,623) that looks
built for one.

**Correct:** give each label one side. Leave one on the red vertical at about **(661,650)** and take
the other to the blue diagonal at its waypoint, **(629,623)**. *Which label goes to which side is
your call from the source file* — we can measure the geometry but not which side of this drawing is
anterior, and getting that backwards would be worse than leaving it.

The Apex and Base labels are correct and point at their gold vertices.

## 5. Rows 5–8 — the main figure, and a design question rather than a leader fix

The four main-figure callouts each have a **bright leader that visibly stops short**, and a faint
continuation that cannot be resolved at 800 px.

| row | callout | bright segment ends at | what is under it |
|---|---|---|---|
| 5 | **③ Left lung** | **(478,344)** | intercostal muscle; the lung's edge at that height is at x ≈ 466 |
| 6 | **④ Parietal pleura** | **(505,383)** | **the middle of a tan rib cross-section** (rib oval x 495–520, y 358–392) |
| 7 | **⑤ Visceral pleura** | **(498,433)** | red muscle beside the rib oval |
| 8 | **⑥ Pleural cavity** | **(508,468)** | **a rib cross-section** |

Two of the four visibly terminate **on a rib**, which is a defect we can state without resolving the
faint continuations: whatever the continuation does, the leader as drawn reads as pointing at bone.

**The design question.** Per the measurement at the top of this sheet, the visceral pleura, the
pleural cavity and the parietal pleura occupy **1–2 source pixels each** at this location, separated
by 3-pixel gaps. Even at 1024×1536 they would be 2–3 px each. Four separate leaders cannot land
distinguishably on that, and a reader could not tell them apart if they did.

**Our recommendation:** on the main figure, keep **③ Left lung** and **⑥ Pleural cavity** as leaders
and let the INTERCOSTAL NEUROVASCULAR BUNDLE panel — which already magnifies exactly this stack —
carry ④ and ⑤. That panel is on the same page, four rows of this sheet are about fixing it anyway,
and it is where the layers are big enough to name.

---

## Summary of endpoints — in the shipped 800×1200 page's pixels

| # | label | now | should be |
|---|---|---|---|
| 1 | Rib (bundle) | (288,963) lung | (275,915) the gold rib band |
| 2 | Parietal pleura (bundle) | the y = 980 leader, inside the lung | (275,950) the purple band |
| 3 | Visceral pleura (bundle) | the y ≈ 997 leader, inside the lung | (275,958) the pink line |
| 4 | Intercostal vein (bundle) | (283,873) subcutaneous band | (270,906) the blue segment in the groove |
| 5–8 | ③④⑤⑥ (main figure) | (478,344) / (505,383) / (498,433) / (508,468) | **re-render at 1024×1536 first**, and consider moving ④ and ⑤ to the bundle panel |
| 9 | Cervical recess | (608,878) shoulder | (565,877) the blue apical patch |
| 10 | Costomediastinal recess | (597,925) mid lung | (562,925) the reflection beside the mediastinum |
| 11 | Costophrenic recess | (597,963) lung | (597,985) the blue crescent |
| 12 | Costophrenic angle | (682,402) lateral lung border | (674,438) the angle |
| 13 | Anterior border of latissimus dorsi | (659,621) the red vertical | one of (661,650) / (629,623) |
| 14 | Lateral border of pectoralis major | (659,672) the same red vertical | the other of (661,650) / (629,623) |

Correct as drawn: **Diaphragmatic recess** (605,1000), **Pleural line** (680,360), **Deep sulcus**
(694,455), **Apex** (661,574), **Base** (664,741).
