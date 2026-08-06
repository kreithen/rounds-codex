# Non-leader-line observations picked up during the label sweep

Not label endpoints, so out of scope for the ranked worklist, but found while zoomed in and
worth passing to production / the physician.

## batch 11
- `hypoglycemia` p2 — the counter-regulatory row has a FOURTH column (anterior pituitary /
  growth hormone) with **no numbered heading**, and its pituitary illustration sits inside the
  "3 CORTISOL" card.
- `t1dm` p2 — the islet inset contradicts its own ISLET CELL TYPES legend: purple delta cells
  (legend 5-10%) visually dominate while green beta cells (60-70%) are a minority.
- `siadh` p2 — the water arrows point OUT of the cell in both directions, the reverse of
  lumen -> cell -> blood.

## Spot-check of the first WRONG finding (done by me, not an agent)

`pericarditis` p2 cross-section, verified at 2x on tiles r0c1 and r1c1:

- Layers rendered outside->inside are: grey striated FIBROUS, dark teal band, a thin dark navy
  line, a purple band, then red muscle.
- The **Myocardium** dot sits in the dark TEAL band - outboard of the purple and well outboard
  of the red. Confirmed WRONG.
- The **Parietal Serous Pericardium** dot also sits in the teal band, which is the same band the
  **Pericardial Cavity** dot correctly marks one row below. Two labels, one band. Confirmed.
- Fibrous, Pericardial Cavity and Visceral Serous are all correctly placed, so this is NOT a
  uniform vertical offset - two dots were placed independently wrong.
- Aggravating factor: the artwork barely renders a distinct parietal serous layer at all. The
  only candidate is the thin pale edge at the inner surface of the grey. A re-render should draw
  the layer, not just move the dot.

**This validates the method.** The agents' WRONG findings are reproducible at the tile level.

## Dead end: the "V1.0" header badge is NOT a triage axis

`aki` p2 carries a `V1.0` pill in the header, and batch 00's agent described the fan-of-leaders
failure as happening on "V1.0-template pages" - which suggested the badge might mark the bad
template and give production a one-line filter.

It does not. Cropping the top-right corner of **all 100 page-2s** into one contact sheet
(`/tmp/qa-verify/version-badges.jpg`) shows **every page carries V1.0**, including the ones the
agents found clean. The badge discriminates nothing.

Two cosmetic things the sheet did show, for the defect log rather than this sweep:
- the badge case is inconsistent - `V1.0` on most, lowercase `v1.0` on cardiac-arrest,
  cardiomyopathy, di, dka, gout, hyperlipidemia, hyponatremia, hypoglycemia, hypothyroid,
  t2dm, thyroidstorm and a few others
- the pill colour varies (blue on most, magenta on labor / pph / suicide, teal on bph)

Recorded so the next reader does not chase it again.

## Spot-check of the largest finding: `aki` p2 (19 of 27)

Verified by me at 2x on tiles r0c0 and r1c1. The agent's report is confirmed and in one panel
it is UNDERSTATED.

- **KEY ANATOMY fan (markers 1-5)**: the five numbered leaders fan evenly down the left side and
  all terminate inside the left kidney's parenchyma. 1 Renal Artery and 2 Renal Vein land in
  renal pyramids while the actual red and blue vessels are at the hilum to the right; 3 Cortex
  lands inside a pyramid, i.e. in medulla; 5 Renal Pelvis lands on lower-pole cortex. Only
  4 Medulla is defensible.
- **NEPHRON panel**: Proximal Tubule, Loop of Henle, Distal Tubule and Collecting Duct leaders
  all converge on the SAME red/blue vasa recta bundle at the left of the panel. The gold tubules
  they name sit untouched to the right. Bowman's Capsule points at the red glomerular tuft rather
  than the ring around it. Five labels, one vessel bundle.
- **BLOOD SUPPLY panel** - the agent flagged only Segmental and Afferent; the whole fan is
  ordered by vertical position rather than by branching order. Segmental Arteries (the largest,
  most proximal) points at the finest peripheral mesh at the top, while Interlobular (near-
  terminal) points lower at a larger vessel. The series is effectively inverted.

**This page cannot be fixed by nudging dots. It needs a full re-render.**
