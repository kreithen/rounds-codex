# Sampling sweep: do pages 3–10 carry the same leader defect?

**Short answer: yes, and the 81-page work order does not cover them.**

The order is a review of pages 1 and 2 — 90 of the 119 pages examined were page 2. This sweep asks
what is happening on the ~880 pages nobody has looked at. Commissioned by Dr. Kreithen 2026-08-10.

*Status: first pass complete, two figures examined in detail. Not yet a rate.*

---

## Method

Deterministic stratified sample, so it can be re-run and extended: every 10th gallery in sorted
order (10 of 102 — `anxiety`, `bph`, `ckd`, `dic`, `gout`, `hyponatremia`, `lymphoma`,
`osteoporosis`, `pud`, `t1dm`), pages **4, 6 and 8** of each. 30 pages.

Sheet built at 300×450 per page, three contact sheets, then each page classified by whether it
carries the structure that produces the defect: **a figure with a fan of leader lines running out to
a text column**. Pages that are icon grids, tables, flowcharts, imaging thumbnails or micrographs
cannot carry it.

## What the 30 pages are made of

The good news first: **pages 4/6/8 are mostly not at risk.** Their titles run "Clinical
Presentation", "Diagnostic Imaging", "Diagnostic Evaluation", "Cellular Pathophysiology",
"Histology" — and in practice that means dense grids of icons, lab tables, algorithm flowcharts,
radiograph panels and photomicrographs. Roughly **8–10 of the 30** carry a central figure with a
leader fan. Call it **30%**, the same fraction the label-level rate happened to be on pages 1–2 —
coincidence, but a useful reminder that these are different denominators.

The at-risk figures found: `ckd` p4/p6/p8 (body figure + column), `dic` p4/p8 (body + organ labels),
`gout` p4 (foot photo + column), `hyponatremia` p8 (brain panels), `lymphoma` p4 (body + nodal
stations), `osteoporosis` p4 (figure + column), `pud` p4 (figure + symptoms).

## The two examined in detail — both carry a wrong leader

### `lymphoma` page 4 — "Inguinal lymphadenopathy" is on the small bowel

Five labels down the right column: Cervical, Axillary, Mediastinal mass, Splenomegaly, Inguinal.
Splenomegaly lands correctly on the spleen; cervical and mediastinal are acceptable.

- **Inguinal lymphadenopathy ends over the small bowel, mid-abdomen** — the inguinal nodes are drawn,
  at the groin, roughly 100 px lower. This is **fault 1 exactly**: the label is the last in its
  column, the column ends before the figure does, and the leader stops at the height it reached.
- **Axillary lymphadenopathy** is suspect — its dot sits infraclavicular on the chest wall rather
  than in the axilla.

This is the highest-consequence kind: a trainee reading it learns to palpate for inguinal nodes in
the mid-abdomen.

### `osteoporosis` page 4 — "Vertebral compression fracture" stops on the sleeve

Five labels: Thoracic kyphosis, Height loss, Vertebral compression fracture, Distal radius (Colles)
fracture, Hip fragility fracture. Kyphosis, Colles and hip all land correctly — the hip leader is on
the reddened femoral-neck fracture, which is exactly right.

- **Vertebral compression fracture ends on the patient's sleeve**, at the body's outline. The
  figure draws the fracture explicitly, as a reddened wedge vertebra, about 340 px further left. The
  leader names a specific drawn feature and stops short of it.
- **Height loss >1.5 in** has no anatomical referent and ends on the shoulder. Same class as the
  "Hypertension" bullet on `hyperlipidemia` p5 — a measurement, not a structure. Arguably it should
  carry no leader at all.

---

## What this means for scope

**Two at-risk figures examined, two carried a wrong leader.** That is two of two, which is not a
rate — it is a demonstration that the defect is not confined to the pages that were audited.

Scaled arithmetic, stated as arithmetic and not as a finding: ~880 unexamined pages × ~30% carrying
a leader fan ≈ **260 at-risk figures outside the work order**. If the per-figure hit rate resembles
what pages 1–2 showed, a large fraction of those carry at least one wrong leader.

**The practical consequence is about sequencing, not about panic.** If production corrects the
template and re-renders the 81 pages, and the rest of the library is later found to have the same
defect, they will have to run the batch twice. It costs nothing to tell them now that the 81 is a
first tranche rather than the whole job.

## What would turn this into a rate

Examine the remaining 6–8 at-risk figures in this sample at magnification (roughly one session), and
extend the sample to every 5th gallery if the answer is still ambiguous. The classification pass is
cheap — it is contact sheets — and only the at-risk figures need a close read.

*Sampled and examined 2026-08-10.*
