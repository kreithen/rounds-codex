# For production: `cardiomyopathy` page 1 — three of four callouts point at the wrong phenotype

Send with the leader-line re-render batch. Attachment: `PRODUCTION-cardiomyopathy-p1-evidence.png`.

The figure is one heart split by two vertical dividers into three phenotype slabs, captioned along the
bottom **DILATED | HYPERTROPHIC | RESTRICTIVE**. The whole page is a three-way comparison, so a callout
in the wrong slab does not merely mislabel a structure — it teaches the wrong phenotype.

---

## Where the slabs actually are

Measured from the caption text itself: **DILATED** spans x 203–291, **HYPERTROPHIC** 408–569,
**RESTRICTIVE** 659–795. Midway between adjacent captions puts the dividers at **x ≈ 370** and
**x ≈ 606**.

*One trap worth passing on:* there is a strong pale vertical line at **x = 469** that reads like a
divider and is not one — it sits inside the HYPERTROPHIC caption's own span, so it cannot be a slab
edge. Anyone checking this page by eye will be tempted by it.

## What lands where

| callout | endpoint | slab it lands in | verdict |
|---|---|---|---|
| **DILATED** | (673, 520) | RESTRICTIVE | **wrong** — and on a great vein, not a ventricular wall |
| **HYPERTROPHIC** | (696, 707) | RESTRICTIVE | **wrong** — on an atrial-appendage bulge |
| RESTRICTIVE | (738, 831) | RESTRICTIVE | correct |
| **ARRHYTHMOGENIC** | (706, 1047) | RESTRICTIVE | **no ARRHYTHMOGENIC slab is drawn at all** |

Both wrong callouts land in the *same* slab as the correct one, so as shipped, three of the four
callouts point into the restrictive third of the figure.

## What we need

1. **DILATED → about (330, 880)** — the thin wall of the dilated chamber, inside the left slab.
2. **HYPERTROPHIC → about (530, 830)** — the solid thickened myocardium in the middle slab.
3. **ARRHYTHMOGENIC** — this one cannot be fixed by moving a leader, because there is nothing to move
   it to. Either add a fourth slab, or drop the callout from this figure and carry ACM on its own
   panel. Note it is also classically **right-ventricular**, while the current leader points at the LV
   free wall, so a fourth slab would need to show the RV.

Re-ordering the label column is not required: with the endpoints above, the four leaders fan without
crossing (checked at every intersection).

---

## Why we are not fixing this one locally

The two wrong callouts have to travel across the figure, which means erasing roughly 120 px of leader
**over myocardium** for each. Every large tissue-side erase attempted in this batch has left a visible
patch, and this is the gallery's opening page. More decisively: even a perfect two-callout fix leaves
ARRHYTHMOGENIC pointing at a phenotype that is not drawn, so the page still needs you.

---

*Measured on the shipped page, 2026-08-10. Extends `CARDIOLOGY-audit-findings.md`, which identified
the two misplaced callouts and the missing slab; this sheet adds the slab boundaries, the corrected
coordinates, and the x=469 false divider.*
