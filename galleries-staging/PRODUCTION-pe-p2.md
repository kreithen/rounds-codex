# For production: `pe` page 2 — the pulmonary arteries are labelled on the wrong sides

10 rows flagged, and the pattern behind most of them is **laterality**. Needs a re-render.

*Measured on the shipped page (800×1200) at 8×, 2026-08-10.*

---

## The side convention, established first

The **aortic arch descends on the viewer's right** (its limb runs down at x ≈ 400–430 while the
ascending aorta rises at x ≈ 330–360). On an anterior view that puts the descending aorta on the
patient's **left**, so throughout this figure:

> **viewer's right = patient's LEFT.**

Everything below follows from that, and it is worth stating on the sheet because two of the rows are
only wrong once the convention is fixed.

## The central heart figure

| row | label | ends at | what that is |
|---|---|---|---|
| 2 | **Right pulmonary artery** | **(427,296)** | the blue artery running toward the **viewer's right — the patient's LEFT lung** |
| 1 | Main pulmonary artery | (411,272) | the right border of the salmon **aortic arch** — an artery of the systemic circulation |
| 3 | Left pulmonary artery *[CHECK]* | (388,319) | the upper-right edge of the **red thrombus** inside the blue trunk, rather than the vessel wall |

**Row 2 is the one that matters.** A label reading "Right pulmonary artery" sits on the vessel
feeding the patient's left lung. On a pulmonary-embolism page, side is the thing a reader carries
away.

**Its correct target is drawn and unlabelled:** the blue trunk on the **viewer's left** at
x ≈ 318–338, y ≈ 275–325 — which contains a second, smaller clot at about (335,305). The figure
therefore draws clot in both trunks and labels neither side correctly.

Row 1 puts a pulmonary label on the aorta; the pulmonary trunk it wants is the blue vessel arising
from the RV at roughly (355–375, 320–360), about 70 px lower left.

## The VASCULAR LANDMARKS panel — the same fault, plus two labels on one point

| row | label | ends at | should be |
|---|---|---|---|
| 7 | **Right pulmonary artery** | **(640,769)** — the **viewer's-right (patient's LEFT) hilum** | the right hilum, viewer's left, ≈ (565–585, 750–762) |
| 8 | Left pulmonary artery *[CHECK]* | **the same point, (640,769)** | its own point on the left PA |
| 9 | Left main bronchus | (648,822) — left cardiac border / adjacent lung; **no airway drawn there** | the carina / left main bronchus behind the heart, ≈ (615–630, 755–768) |
| 5 | Ascending aorta | (634,710) — the **apex of the viewer's-right lung**; the leader fades out | the salmon aorta, ≈ (595–610, 700–740) |
| 6 | Superior vena cava | (614–630, 755–758) — the blue **pulmonary-artery confluence** | the SVC tube, ≈ (580–590, 733–765), on the far side of the aorta |
| 10 | Inferior vena cava | (645,874) — dark space where the leader fades | the blue IVC, ≈ (578–592, 820–872) |

Rows 7 and 8 land on **one node**, so the panel marks left and right pulmonary arteries at the same
place — and row 7 has the side inverted on top of that.

## What we need

1. **Fix the sides first.** Rows 2 and 7 both name "right" and point into the patient's left. Once
   those move, rows 8 and 3 may resolve on their own.
2. **Rows 5, 9 and 10 end where nothing is drawn** — a lung apex, a cardiac border, dark space. Each
   has a real target listed above, 25–55 px away.
3. Row 4 (Segmental arteries) shares an 8-px node with a lobar branch; it needs a distinct, more
   peripheral vessel.

*Rows 3, 4 and 8 are the auditors' [CHECK] calls and we have not re-measured them; they are stated
here as the order gives them. Rows 1, 2, 5, 6, 7, 9 and 10 are confirmed against the shipped page.*

---

## Please also export at the standard size

This gallery ships at **800×1200**; the standard is **1024×1536**. A re-render fixes the labels and the size in one pass — please do both rather than re-rendering it small and revisiting later.
