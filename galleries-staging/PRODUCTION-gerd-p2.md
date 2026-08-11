# For production: `gerd` page 2 — three markers on one point, and a legend entry with no marker

7 rows flagged, **all 7 measured and all 7 confirmed** (four of them were [CHECK] rows). Needs a
re-render. *Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. NORMAL ANATOMY (ANTI-REFLUX BARRIER) — markers ④ ⑤ ⑥ all radiate from one point

Row 4, confirmed exactly as the order states.

Three leaders converge on a single spot at about **(497,377)** — the cardia notch:

| marker | badge at | leader |
|---|---|---|
| **④ Lower esophageal sphincter (LES)** | (555,375) | runs left to (497,377) |
| **⑤ Gastroesophageal junction (GEJ)** | (543,412) | runs up-left to (497,377) |
| **⑥ Angle of His (acute angle)** | (523,443) | runs up-left to (497,377) |

Three numbered markers, one point. The panel exists to separate the components of the anti-reflux
barrier, and as drawn it tells the reader the sphincter, the junction and the angle are the same
place.

**Correct for ④:** the thickened distal oesophageal segment **above** the junction, around
**(470,340)**. ⑤ and ⑥ can share the notch — they genuinely are within a few millimetres of each
other — but the LES is a 3–4 cm segment of oesophagus and belongs above it.

## 2. `② Diaphragmatic crus (right)` is on the oesophageal wall

Row 2, confirmed.

| marker | badge at | leader ends at | what is under it |
|---|---|---|---|
| ① Esophageal muscularis | (386,255) | **(437,257)** | the oesophageal wall — **correct** |
| **② Diaphragmatic crus (right)** | (386,318) | **(444,319)** | **the same oesophageal wall**, 62 px lower |

The crura are drawn and unlabelled: horizontal striated muscle bands at **x 355–430, y 345–390** on
the left and **x 480–600, y 300–360** on the right.

**Correct endpoint: (395,365)** — the left-hand crural band, which is what marker ② names and which
currently carries nothing.

## 3. OVERVIEW: ENTIRE ESOPHAGUS — `Diaphragm` is in the stomach

Row 1, confirmed. Horizontal leader at y = 437 ending in a dot at **(105,437)** — in the middle of
the **stomach body**.

**One thing to check at source before re-routing:** in this ghosted whole-body overview we could not
identify a distinctly drawn diaphragm — the panel shows the ribcage as a translucent wash, the
oesophagus and the stomach, with at most a faint arc around y ≈ 418. If no diaphragm is drawn, this
is a **fault-6 row** (the label names a structure the page does not contain) and needs artwork rather
than a leader move. If the dome is drawn, it sits at about **(100,417)**, 20 px above the current dot.

## 4. `Lower esophageal sphincter (LES)` on the overview is a region box, not a pointer

Row 5, confirmed, and the order's caveat is fair — we are reporting rather than asserting.

The leader ends at **(133,470)**, the **corner of a rectangular callout box** spanning
**x 68–133, y 420–472**. That box encloses the whole stomach and the distal oesophagus.

Read as a region callout it is a legitimate style. But the label names a **3–4 cm sphincter** and the
box contains an entire organ, so a reader taking the box as the label's extent learns the LES is the
size of the stomach. **Our recommendation is a leader onto the sphincter itself**, keeping the box if
it is wanted for the region — but this is a style decision and it is yours.

## 5. HIATAL HERNIA panel — `Widened hiatal opening` is on the gastric body

Row 3, confirmed. The leader runs from the label at (268,1042) up-left, ending at about
**(240,1032)** — on the **mid gastric body** of the herniated stomach.

The hiatus — the gap between the crura at the **neck** of the hernia — is at about **(195,1000)**,
roughly **48 px away**, which on this panel is more than a third of its width. The order estimates
55 px; either way the label is nowhere near the opening it names.

**Correct endpoint: (195,1000).**

## 6. `GE Junction` on the normal side — confirmed, but check the coordinate at source

Row 6. The label's mark sits at **(108,1032)**, and we could not trace a leader from it further into
the figure at this resolution — the tick beside the text is all we can resolve. The order reports the
endpoint as the **gastric cardia wall about 16 px down-right of where the oesophageal lumen enters
the stomach**, and the geometry is consistent with that: the oesophagus descends at x 72–82 and the
cardia occupies x 60–100, y 1015–1050.

**We are passing this row through as the order states it** rather than second-guessing a 16 px call
we cannot reproduce. **Correct endpoint** if it is confirmed: the squamocolumnar junction, about
**(72,1018)**.

## 7. Legend item 7 has no marker on the artwork — confirmed

Row 7. The legend lists **⑦ Stomach (cardia)**. We swept the whole panel — y 240–480 and y 460–610 —
and **the artwork carries markers ① to ⑥ only.** There is no ⑦ anywhere.

**Two ways to fix it, and they are not equivalent:**

- **Add a ⑦ marker** on the gastric cardia, below and left of the ⑥ Angle of His marker.
- **Delete item 7 from the legend.**

We would add the marker. The cardia is the one component of the barrier the panel currently names in
words and does not show, and item 4's correction above frees up the notch that ⑤ and ⑥ share.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | Diaphragm (overview) | (105,437) the stomach body | (100,417) the dome — **or artwork, if no diaphragm is drawn** |
| 2 | ② Diaphragmatic crus (right) | (444,319) the oesophageal wall | (395,365) the crural band |
| 3 | Widened hiatal opening | (240,1032) the gastric body | (195,1000) the gap between the crura |
| 4 | ④ Lower esophageal sphincter | (497,377) — shared with ⑤ and ⑥ | (470,340) the thickened distal segment |
| 5 | LES (overview) | (133,470) a callout-box corner | the sphincter itself — style decision |
| 6 | GE Junction (hernia panel, normal side) | (108,1032) per the order | (72,1018) the squamocolumnar junction — **confirm at source** |
| 7 | ⑦ Stomach (cardia) | **no marker exists** | add a ⑦ on the cardia, or drop the legend entry |

Correct as drawn: **① Esophageal muscularis** (437,257), **Esophagus** on both hernia sub-figures,
**Herniated stomach** (207,990), **Stomach** (overview).
