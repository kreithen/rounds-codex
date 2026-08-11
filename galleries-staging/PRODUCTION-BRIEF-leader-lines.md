# For production: eight template faults are putting label leader lines on the wrong structures

Send this now, ahead of the page-by-page list. It describes **how** the defect is produced. The
page list is a symptom; this is the cause, and fixing it stops new batches arriving broken.

Full findings: `Rounds-Codex-leader-line-corrections.docx`.

> ## REISSUED 2026-08-11 — this replaces the version you have
>
> The brief you received described **five** faults. Measuring 47 of the 81 pages since then has added
> **three more**, each seen on four or more separate pages:
>
> - **Fault 6** — the label names a structure the page does not draw. **11 instances.** No leader move
>   can fix these; they need artwork.
> - **Fault 7** — the label list and the marker set do not match: a legend entry with no marker, or a
>   label with no leader. **6 instances.**
> - **Fault 8** — a leader with two endpoints, or a leader with no label. **5 instances.**
>
> Faults 6, 7 and 8 are at the end of this document. **Fault 6 has its own sheet** —
> `PRODUCTION-artwork-needed.md` — because it is illustrator work rather than a re-render and may go
> to a different person or schedule.
>
> Nothing above fault 6 has changed.

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

## Fault 4 — on a layered figure, every layer label stops in the MIDDLE layer

*Added 2026-08-10, after the pattern turned up on a fourth gallery.*

This is mechanically distinct from faults 1 and 2. It is not a fan dropped by row position, and not
an off-by-one along a series. It is a **radial** set — the concentric layers of a wall, a capsule or
a gland — where several labels naming different layers all terminate in the same middle band.

Four instances, each measured on the shipped page:

| page | labels | where they all land |
|---|---|---|
| `aortic-dissection` p2 | Intima, Media, Adventitia | all at mid-thickness of the mauve wall, same radial position |
| `pericarditis` p3 | Visceral pericardium | outboard of the cavity, on the parietal band — inverting the layer order |
| `addisons` p1 | Cortex | 7 px past the cortex/medulla boundary, in the medulla the "Medulla" label also points at |
| `addisons` p2 | Zona Fasciculata, Zona Reticularis | fasciculata on the gland's central hilum; reticularis inside the medulla |

**Why it is worth naming separately.** On a radial figure the layers are usually only 8–20 px thick,
so a leader that overshoots by a fraction of the figure's radius still lands two layers in. The
reader gets a confident wrong layer rather than an obvious miss — and on these particular figures the
layers *are the subject*: the whole point of an adrenal cross-section is cortex versus medulla, and
of a wall inset is intima versus media versus adventitia.

**What we suggest:** where a figure's structures are concentric, anchor each label's endpoint to a
**measured radius** rather than to a point picked by eye. Two of the four above are also cases where
the label column's vertical order does not match the radial order, which is what lets a leader arrive
at the wrong depth without looking wrong on the page.

**A practical check you can run without measuring anything:** on a layered figure, no two layer
labels should terminate at the same distance from the centre. On all four pages above, at least two
do.

---

## Fault 5 — the leader lands on a colour the page's own key assigns to something else

*Added 2026-08-10, found by a laterality sweep rather than by the page-by-page review.*

Two rows so far, and this is the worst-behaved of the five because **the figure certifies the error
as correct**. A leader on the wrong tissue is a mistake a careful reader may catch. A leader on the
wrong *key colour* survives exactly the check a reader would use to catch it.

| page | label | what the page's own legend says |
|---|---|---|
| `sci` p2 | Lateral Corticospinal Tract (UMN), cross-section | dot at (423,437); surround samples **(49,107,150)** — the key's Spinothalamic blue **(27,118,181)**. The green corticospinal region 30–45 px away carries no label |
| `compartment` p2 | 2 LATERAL COMPARTMENT, anterior view | the label is printed in gold ink **(108,85,17)**; its dot at (230,462) sits on **(83,103,51)** — the green the page shades as *anterior* |

Both were confirmed by sampling, not by eye — see `PRODUCTION-sci-p2-compartment-p2.md`.

**What we suggest.** Where a figure carries a colour key, the label endpoints and the key are two
statements about the same thing, and they can be checked against each other **without any anatomical
judgement at all** — sample the colour under each endpoint, look it up in the key, compare to the
label. That is a check your pipeline can run automatically, and it is the only one of the five faults
where that is true.

---

## Fault 6 — the label names a structure the page does not draw

*Added 2026-08-11. Eleven instances across nine pages.*

**This is the one that will come back to you as "cannot locate target" if we do not say it up front.**
The leader is not misplaced; there is nothing on the page for it to point at. We checked each of these
across the whole figure at 5x or better before saying so.

| page | label | what is missing |
|---|---|---|
| `stroke` p1 | Circle of Willis, Basilar, PCA, ACA | **four labels at once.** The figure is a lateral view showing cervical arteries and cortical surface branches. All four name basal or medial vessels that this projection cannot show |
| `parkinsons` p2 | Substantia nigra pars reticulata | no SN is drawn in the sagittal panel — midbrain and pons are one undifferentiated tan column. The SNc label already lands in it with nothing to mark |
| `parkinsons` p2 | Internal capsule | no white-matter lamina anywhere in that panel |
| `migraine` p2 | D - Superficial temporal artery | no extracranial vessel anywhere over the scalp or temple. The leader points at an *intracranial* branch |
| `schizophrenia` p2 | Pituitary Gland | no gland or stalk under the hypothalamus. The double-headed arrow is a badge-to-label connector and is fine as drawn - the gap is the organ |
| `uti` p2 | 8 Ureterovesical junction | the ureter passes *behind* the bladder and ends at the silhouette; no oblique intramural segment is drawn |
| `hepatitis` p2 | Coronary ligament | a peritoneal reflection on the **superior and posterior** surface. An anterior view cannot show it at all |
| `hypothyroid` p2 | Hyoid bone | no bone-like structure anywhere above the thyroid cartilage |
| `dementia` p2 | Fornix | no separately drawn fornix; the arch beneath the corpus callosum is not differentiated from the callosal band |

**A pattern worth noticing:** three of these are structures that are **drawn correctly elsewhere on
the same page** - `uti`'s UVJ in its relationships strip, `parkinsons`' substantia nigra in its own
midbrain panel, and `stroke` p1's basal vessels are exactly what a circle-of-Willis inset would show.
The detail exists; it did not reach the main figure. So the fix is often to copy a panel's detail into
the main figure, not to draw something new.

**What this suggests:** the label list is being written from the topic rather than from the artwork,
and then applied. On `stroke` p1 the effect is unmistakable - the seven-vessel list is the standard
teaching list for cerebral circulation, and four of the seven simply are not in a lateral view.

**Each of these needs a decision, not a coordinate**, and they are collected with their options in
`PRODUCTION-artwork-needed.md`.

---

## Fault 7 — the label list and the marker set do not match

*Added 2026-08-11. Six instances.*

Two directions, same underlying failure: **the label list and the drawn marks were assembled
separately and never reconciled.**

**A legend entry whose marker was never drawn** - the reader looks for a number that is not there:

| page | legend entry | what we found |
|---|---|---|
| `gerd` p2 | 7 Stomach (cardia) | swept the panel at y 240-480 and y 460-610: **markers 1 to 6 only** |
| `meningitis` p2 | 4 Cerebral aqueduct | **no 4 marker anywhere on the figure**; the leader ends on the anterior horn of the lateral ventricle |
| `meningitis` p2 | 6 Median aperture | **no 6 marker anywhere**; the leader ends on inner skull base |
| `lymphoma` p2 | 5 Mediastinal Lymph Nodes | **no 5 marker or leader anywhere** on the body figure - the right-hand column runs 2,3,4,6,7,8,9 |
| `gout` p2 | 5 Other metatarsals (2-5) | **no numbered 5 badge anywhere on the foot**; the leader ends on empty background at the legend box edge |

**A label with no leader at all** - the converse:

| page | label | what we found |
|---|---|---|
| `hyperkalemia` p2 | Descending Limb | a square bracket at x = 872 spanning y 406-533 is fed by **two** horizontals - "Loop of Henle" at y 438 and "Ascending Limb" at y 504 - and **"Descending Limb" at y 462 has no line**. So neither limb of the loop is individually identified, on the panel the whole page depends on |

**A practical check:** count the numbered markers on the artwork and compare to the legend. It takes
seconds and it is exact. Where a group label shares a bracket with one of its own sub-items, check
that every sub-item has its own leader.

---

## Fault 8 — a leader with two endpoints, or with no label

*Added 2026-08-11. Five instances.*

**A leader with two endpoints gives the reader two answers.** Where the two land on different
structures, it is not a near-miss - it is an unresolvable label.

| page | label | the two endpoints |
|---|---|---|
| `dementia` p2 | Hippocampus | **two ring terminators**, (376,566) on the green hippocampus's outer rim and (388,573) on the pink cerebellum - straddling the boundary between the two structures |
| `cdiff` p2 | Right colic a. | an arrowhead at (122,1117) on the colon wall **and** a separate dash ending at (142,1118) in black background |
| `cdiff` p2 | Inferior mesenteric v. | two dots, (481,1143) and (481,1160) - both on the wrong side of the body, so the second tip compounds rather than rescues |
| `stroke` p2 | External Carotid Artery | dashed, terminating **twice**: a round dot at (145,808) and a dash at x ~ 158 |
| `migraine` p2 | A - Dura mater | a bar at (521.5,306.5) and a second, fainter tip at (510,310). Please check at source whether this label carries two leaders |

**A leader with no label** - the orphan:

| page | what we found |
|---|---|
| `leukemia` p2 | **a line segment ends on a golden fat cell and connects to no label**, while the "Adipocyte (fat cell)" label points into the lumen of a large red blood vessel. The correct target has a leader; the leader has no label |

**What this suggests:** leaders are being edited after placement - shortened, re-aimed or duplicated -
without the old segment being removed. The `leukemia` case is the clearest: something once pointed at
the right cell.

**A practical check:** every label has exactly one terminator, and every terminator belongs to exactly
one label. Both halves are countable.

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

- **Sixteen galleries in the order ship off-standard, and this now blocks verification.** That has
  its own consolidated sheet - `PRODUCTION-export-sizes.md` - which replaces the per-page size notes.
  It carries the measurement that makes the case: on `pneumothorax` p2 the four labelled pleural
  layers are **four pale lines one or two pixels wide with three-pixel gaps**, and a leader terminator
  on that page is about 4 px across. Nine rows across the review could not be verified, and **all nine
  are on those pages.**
- **A terminator must not be painted in a colour the figure assigns to a tissue class.** On `stroke`
  p1 the MCA and ACA leaders are drawn in gold and end in gold blobs - the same amber the figure uses
  for the **penumbra**. The MCA terminator sits in a cortical sulcus 60 px from the artery, and reads
  as artwork. White, as on the thrombus leader on the same page, would have made it obvious.
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
3. **For faults 7 and 8, a check you can run before delivery rather than after:** count the numbered
   markers against the legend, and count terminators against labels. Both are exact and neither needs
   anatomical knowledge. Between them they would have caught 11 of the findings in this brief.
4. **For fault 6, a decision per row** — see `PRODUCTION-artwork-needed.md`. Those cannot be scheduled
   with the re-renders because they need an illustrator, and if they are treated as leader moves they
   will come back as "cannot locate target".

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
