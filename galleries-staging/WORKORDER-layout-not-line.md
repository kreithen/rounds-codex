# Work-order rows where the stated fix is the WRONG fix

Running list, built while working the 81-page order. These rows are real defects — the leader does
end on the wrong structure — but the correction production should make is **moving the label**, not
re-routing the line. Sending them as line-placement work would produce a page with a correct
endpoint and a leader dragged across half the figure.

Three kinds so far: **layout** rows, where the label itself has to move; **numbering** rows, where
the marker is in the right place and carries the wrong number; and **not-separable** rows, where the
stroke to be shortened is collinear with the artwork underneath it and no local edit can remove one
without taking the other.

The layout kind is the point already made in `PRODUCTION-BRIEF-leader-lines.md`: *"treat these as
layout problems, not line-placement problems — moving the label is a better fix than threading the
line."* This file is the accumulating list of which specific rows that applies to.

---

## `croup` page 2 #1 — "Trachea"

**The defect is real.** The leader runs almost horizontally from the label at (155,904) to a dot at
(380,904), which is left-lung parenchyma about 145 px below the carina. The trachea — the ringed
blue-grey tube — sits at x 395–425, y 565–750.

**Why a line move is the wrong fix.** The label column's order already matches the anatomy's order
top to bottom (nasal cavity, oral cavity, tongue, epiglottis, vocal cords, subglottic space,
trachea). The trouble is that the column is *taller than the airway*: the last label sits at y≈904
while the trachea ends at the carina at y≈758. Any correct leader therefore has to climb ~160 px
while travelling right, and every such route crosses roughly 100 px of left lung — a line from
(155,904) to the lowest tracheal ring at (398,748) passes through (300,811), which is lung.

**What we suggest instead:** raise the "Trachea" label so it sits beside the tube (around y 640–700
in the column) and let the leader run straight across the black background, the way the "Epiglottis"
and "Vocal cords" leaders on this page already do. If the column cannot be re-spaced, an on-figure
numbered badge on the trachea would also remove the problem.

*Examined on the shipped page 2026-08-10; not corrected locally, deliberately.*

---

## `b12-anemia` page 2 #1 — marker "3" (Parietal Cells)

**This is a numbering error, and the work order's own note spotted it.** Badge ③ sits on the
duodenal C-loop just distal to the pylorus, at (442,512). The legend's item 3 is *Parietal Cells*,
which belong in the gastric body — but item **4 is Duodenum, and no ④ exists anywhere on the
figure**. Scanning the central panel for the badge blue finds exactly six discs: ① ② ③ ⑤ ⑤ ⑥, the
second ⑤ being the repeat inside the CUBILIN magnifier inset.

So the badge is almost certainly in the **right place with the wrong numeral**. The fix is to
renumber it **4** and add a new **3** on the gastric body near ②, not to drag it across the stomach.

**Why we have not done it here.** Renumbering means repainting a glyph inside a 24 px disc in your
typeface, and adding a badge means compositing a new one — both are fabricating artwork rather than
moving a marker, which is the line this project does not cross. There is also a third thing tangled
in it: the **"Pancreas" leader terminates exactly at the badge's left edge** (x≈428, y=512), so
whatever that leader was meant to reach is currently underneath or behind the disc, and moving the
disc would expose it.

**What we need:** re-render with ③ on the gastric body, ④ on the C-loop where the current disc is,
and the Pancreas leader carried through to the orange pancreas below rather than stopping at a badge.

*Examined on the shipped page 2026-08-10; not corrected locally, deliberately.*

---

## `thrombocytopenia` page 2 #1 — "Sinusoid (marrow capillary)"

**The defect is real and small.** The leader doglegs down-left from (500,556), crosses the blue
sinusoid it names, and stops ~25 px past it at (468,599), on a megakaryocyte pseudopod. Measuring
the vessel band against the leader's own line puts the crossing at **(485,580)** — the band runs
(479,576)–(488,576) widening to (487,594)–(495,594), and leader and band centre coincide at y≈580.
So the shortening target is exact.

**Why we have not done it.** The leader and the pseudopod are very nearly **collinear**. Perpendicular
profiles across the erase segment show the bright core at a constant offset of −1.5 px, and from
t≈15 onward a *second* bright ridge appears alongside it — the proplatelet extension's own highlight.
Erasing a 4 px band centred on the stroke and comparing at 24× shows the pseudopod arm coming back
about 15 px shorter than it is on the shipped page.

That is not an acceptable trade on **this** page: the extension it truncates is the thing the panel
is teaching — "Proplatelet extensions into sinusoid" is a label of its own, three rows below.
Shortening a leader by 25 px is not worth shortening a proplatelet.

**What we need:** re-render with the "Sinusoid" leader ending where it crosses the vessel, at about
(485,580), and the pseudopod left at its full length. From source this is free; from the flattened
page it is not.

*Examined on the shipped page 2026-08-10; a working correction was built, measured against the
original at 24×, and discarded.*
