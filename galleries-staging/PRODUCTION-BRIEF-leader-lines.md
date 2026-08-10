# For production: two template faults are putting label leader lines on the wrong structures

Send this now, ahead of the page-by-page list. It describes **how** the defect is produced. The
page list is a symptom; this is the cause, and fixing it stops new batches arriving broken.

Full findings: `Rounds-Codex-leader-line-corrections.docx`.

---

## What we are seeing

**119 anatomy pages examined. 81 of them carry at least one label whose leader line ends on a
structure other than the one it names — 553 individual findings.** The accompanying work order lists
those 81 pages across 75 galleries: 272 labels to move and 235 to confirm.

On the first 79 pages of that review, where we counted every label rather than only the wrong ones,
the rate was **323 of 1,098 — 30%**. We have not recounted the denominator across the full set, so
please treat 30% as the measured rate on that subset rather than a figure for all 81 pages.

This is not a scatter of one-off slips. It has two shapes, and both look mechanical rather than
artistic.

**One limit on scope, stated plainly.** In practice this was a review of pages 1 and 2 — 90 of the
119 pages examined were page 2. Roughly 880 pages across the galleries have never been looked at, and
we have since found the same class of defect on pages 4, 6, 7 and 8. **So the 81-page list is a work
order for the anatomy pages, not a clean bill of health for the rest**, and the 30% figure should not
be extrapolated to the full library in either direction.

---

## Fault 1 — a fan of leaders dropped into whatever tissue is at that height

When labels are stacked down a text column, each leader appears to travel right and stop at the
first thing it meets at its own vertical position, regardless of what the label says.

The clearest case is `aki` page 2, the nephron panel. **Proximal Tubule, Loop of Henle, Distal
Tubule and Collecting Duct all terminate on the same red-and-blue vasa recta bundle.** The gold
tubules those four labels name sit untouched to the right. On the same page the blood-supply panel
runs the other way: *Segmental Arteries* — the largest, most proximal branch — points at the finest
peripheral mesh, while near-terminal branches point at larger vessels, so the whole series is
effectively inverted.

Same shape on `addisons` page 2 (the zona labels) and `aortic-dissection` page 1, where **Intima,
Media and Adventitia all land at the same radial depth in the vessel wall** — three labels naming
three different layers, one position.

**What this suggests:** leader endpoints are being placed from the label's list position rather
than from the structure's location in the artwork.

---

## Fault 2 — an off-by-one shift within an ordered series

Where a figure shows an ordered set of structures, the labels can be shifted one position along.

`aortic-dissection` page 2, the aortic arch branches:

- "Brachiocephalic trunk" points at the **left common carotid**
- "Left common carotid" points at the **left subclavian**
- "Left subclavian" points at the **left subclavian** as well

Two labels on one vessel is the tell, and the real brachiocephalic — the thick one that visibly
bifurcates — carries no label at all.

**What this suggests:** the label list and the anatomical order are being zipped together with one
of them off by a step.

---

## Fault 3 — two labels ending on each other's structure

Worse than a displaced endpoint, because the reader is given a confident wrong name rather than an
ambiguous one.

`bph` page 2, SAGITTAL VIEW — verified by hand at 3x:

- **"Seminal vesicle"**, in the left-hand label column, ends on the **bladder wall**.
- **"Detrusor muscle"**, in the right-hand column, ends on the **lumpy retrovesical chain — the
  seminal vesicle.**

So the seminal vesicle on that figure is labelled "Detrusor muscle", and the bladder wall is
labelled "Seminal vesicle". The two labels approach from opposite sides, so this is not two leaders
being exchanged; each is displaced in a way that happens to land on the other's target. For a
reader the effect is the same as a swap.

The same page has "Testis" and "Scrotum" both ending on the penis, and is the worst found so far at
12 of 33 labels flagged.

**Why this one matters most:** faults 1 and 2 usually leave a leader in empty space or on obviously
unrelated tissue, which a careful reader may notice. This produces a page that looks correct and
teaches two structures under each other's names.

---

## What the clean pages do differently — the actionable recommendation

`acs` page 1 is clean, and both `acs` pages 1 and 2 are built differently from the rest: **numbered
circles placed directly on the 3D render**, with the numbered text in a side list. No leader crosses
empty space.

Nearly every failure we found involves a long leader travelling across background to reach a text
column. Where a page can use on-figure numbered markers instead, please do — it removes **the routing
class of defect**, which is most of what this brief is about.

**It does not remove misplacement, and we have a live example.** On `acs` page 2 the **Diagonal
Branch** badge sits on a vessel that forks off the **left circumflex** just distal to the left main
bifurcation — an obtuse marginal or ramus intermedius. Traced three times at 8–12× on a vessel
isolation map, that vessel never contacts the LAD; it stays 50–90 px to its right at every level. A
badge sitting directly on the artwork is still a badge sitting on the *wrong* artwork.

So: **badges remove the leader, not the identification step. Each badge's position still has to be
checked against the structure it names.**

Where leaders are unavoidable, the endpoint needs to be anchored to the structure in the artwork,
not to the label's row.

---

## Two smaller notes from the same pass

- **`aortic-dissection` page 1 ships at 915x1373.** The standard is 1024x1536. Please export at the
  standard size.
- **A correct leader is sometimes impossible without re-laying-out the label column.** On
  `aortic-dissection` page 1 the "Aortic arch" label sits third down the left column while the arch
  is at the top right, so a correct leader has to cross the ascending aorta. That is very likely
  why it was routed to the heart instead. Please treat these as layout problems, not line-placement
  problems — moving the label is a better fix than threading the line.

---

## What we need back

1. Confirmation of whether faults 1 and 2 come from a shared step in your process.
2. Re-rendered pages from source, from the list in the accompanying document, once the template is
   corrected — re-rendering from source keeps every other pixel of the page intact, which no fix on
   our side can match.

**The 81-page list is complete and ready to work from.** Dr. Kreithen approves by page, so please
start from the sheets he has signed rather than the whole order at once.

Separately from this list you may also have received individual sheets for particular pages —
`aortic-stenosis` p2, `acs` p6, `cardiomyopathy` p1, `pericarditis` p4 and the two `hip-fracture` p5
figures. Those are **not** leader-line corrections and are not in the work order: each needs a figure
redrawn or a label block re-sited, for reasons given on the sheet. They can proceed independently of
the template question.

---

*Findings were produced by automated inspection of each page at magnification and spot-checked by
hand; the accompanying document marks which are certain and which need a second look. They are
under review by Dr. Kreithen and should be treated as a list to confirm, not a finished verdict.*
