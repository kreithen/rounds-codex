# For production: two template faults are putting label leader lines on the wrong structures

Send this now, ahead of the page-by-page list. It describes **how** the defect is produced. The
page list is a symptom; this is the cause, and fixing it stops new batches arriving broken.

Full findings: `Rounds-Codex-leader-line-corrections.docx`.

---

## What we are seeing

Across the anatomy pages checked so far, **323 of 1,098 labels — 30% — have a leader line that does
not end on the structure it names.** Only 18 of 79 pages were clean.

This is not a scatter of one-off slips. It has two shapes, and both look mechanical rather than
artistic.

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

## What the clean pages do differently — the actionable recommendation

`acs` pages 1 and 2 are **fully clean**, and they are built differently: **numbered circles placed
directly on the 3D render**, with the numbered text in a side list. No leader crosses empty space.

Nearly every failure we found involves a long leader travelling across background to reach a text
column. Where a page can use on-figure numbered markers instead, please do — it removes the whole
class of defect rather than correcting instances of it.

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

Please do not re-render anything yet beyond confirming the cause: our review of the remaining pages
is still in progress and we would rather send one complete list than two partial ones.

---

*Findings were produced by automated inspection of each page at magnification and spot-checked by
hand; the accompanying document marks which are certain and which need a second look. They are
under review by Dr. Kreithen and should be treated as a list to confirm, not a finished verdict.*
