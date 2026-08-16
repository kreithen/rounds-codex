# For production: four defects that survived the re-render (v119–v120)

These four pages have been through a correction pass and are **live in this state**. Each row below
is what the pass did not resolve. None of them is a leader that landed slightly off — each needs a
decision or a piece of artwork.

*Measured on the shipped pages, 2026-08-16, after the corrections went live.*

---

## 1. `cardiomyopathy` p1 — `ARRHYTHMOGENIC` still points into the RESTRICTIVE slab

**The most consequential of the four**, because on a three-way comparison figure a callout in the
wrong slab does not mislabel a structure — it teaches the wrong phenotype.

The re-render fixed two of the three actionable callouts. Slab boundaries measured from the **new**
captions — DILATED x 200–320, HYPERTROPHIC 385–620, RESTRICTIVE 660–890 — putting the dividers at
**x 352** and **x 640**:

| callout | terminator | slab | state |
|---|---|---|---|
| DILATED | (272,875) | left | **fixed** |
| HYPERTROPHIC | (522,862) | middle | **fixed** |
| RESTRICTIVE | (704,782) | right | correct |
| **ARRHYTHMOGENIC** | **(772,861)** | **right** | **still wrong** |

**No arrhythmogenic slab was added**, so there is still nothing for that callout to point at. Two
ways to close it:

- **Add a fourth slab.** Note ACM is classically **right-ventricular** while every existing slab is
  cut to show the LV, so a fourth slab has to show the RV free wall — it is not a copy of the
  others with different shading.
- **Drop the callout from this figure** and carry ACM on its own panel.

We would add the slab: the page is the gallery's opening image and a four-way comparison that shows
three phenotypes is a visible gap.

## 2. `aortic-stenosis` p2 — the inferior vena cava is now unlabelled

The `Pulmonary Trunk` label was corrected and now terminates at **(644,512)** on the blue trunk,
sampling **(119,121,167)** against the trunk reference **(46,55,108)**. Correct.

The consequence is that **the vessel it used to point at — (365,1010), the inferior vena cava —
carries no label at all**, while the page labels the **superior** vena cava a short distance above
it. A reader sees one cava named and one not.

**Fix: add `Inferior Vena Cava` with a short leader to (365,1010).** One line of type, and it
completes a pair the page has already half-drawn.

## 3. `aortic-stenosis` p2 — the corrected leader takes the route we asked you to avoid

The original sheet said, in these words:

> **Do not simply re-aim the existing leader** — from its present position the line would cross the
> right atrium, the tricuspid valve, the right ventricle and the LVOT leaders.

The label block stayed at the lower left and the leader was re-aimed, so it now runs diagonally from
about (255,1105) up to (644,512) — **across the right ventricle, through the tricuspid chordae, and
past the LVOT leaders.**

This is cosmetic, not anatomical: the endpoint is right and no reader will misidentify anything.
It is raised because it is a hero anatomy page and the crossing is conspicuous.

**Fix: re-site the `Pulmonary Trunk` label block to the upper left or upper centre**, beside the
vessel it names, and shorten the leader accordingly. If the block genuinely cannot move, caption the
trunk on-figure instead.

## 4. `stroke` p2 — the posterior communicating artery lost its label

The correction pass deleted **two** label blocks from the CIRCLE OF WILLIS panel:

| label | verdict |
|---|---|
| `Middle Communicating Artery (PCoA)` | **correctly deleted — there is no middle communicating artery.** It was a fabricated vessel, and it carried the PCoA abbreviation, duplicating the entry above it |
| `Posterior Communicating Artery (PCoA)` | **a real structure, now unlabelled** |

The panel is *the* Circle of Willis figure, and the posterior communicating artery is one of the two
vessels that make it a circle — it is the collateral pathway the panel's own caption is about.

**Fix: restore `Posterior Communicating Artery (PCoA)` with a leader onto the vessel joining the ICA
to the PCA.** Do not restore the middle communicating entry.

---

## Summary

| # | page | what to do |
|---|---|---|
| 1 | `cardiomyopathy` p1 | add a fourth **ARRHYTHMOGENIC** slab showing the **RV** free wall, or drop the callout |
| 2 | `aortic-stenosis` p2 | label the **inferior vena cava** at (365,1010) |
| 3 | `aortic-stenosis` p2 | re-site the **Pulmonary Trunk** label block so its leader stops crossing the RV and LVOT |
| 4 | `stroke` p2 | restore **Posterior Communicating Artery (PCoA)**; leave the middle communicating entry deleted |

**Raised at Dr. Kreithen's request, 2026-08-16.** Rows 1–4 are all on pages that are already live and
already improved — none of this is a regression, and none of it blocks anything.
