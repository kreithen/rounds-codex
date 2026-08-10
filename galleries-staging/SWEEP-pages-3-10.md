# Sampling sweep: do pages 3–10 carry the same leader defect?

**Short answer: yes, and the 81-page work order does not cover them.**

The order is a review of pages 1 and 2 — 90 of the 119 pages examined were page 2. This sweep asks
what is happening on the ~880 pages nobody has looked at. Commissioned by Dr. Kreithen 2026-08-10.

*Status: sample classified, six further figures examined. The headline changed on the second pass -
see the template table below.*

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

## The refinement that matters: there are three label templates, and only one of them fails

Continuing the sample past the two failures changed the answer, and for the better. The library does
not use one labelling system. It uses at least three, and they are not equally fragile:

| template | where it is used | how it fails |
|---|---|---|
| **A — text column + long leader fan** | the anatomy pages, 1 and 2, and occasionally later | **this is the one that fails.** Both examples found outside the order were template A, and both were wrong |
| **B — icon bubble or card + short elbow tether** | most of pages 4/6/8 | endpoints land on gross regions (a head, a kidney, the bladder). Examined on `ckd` p4/p6, `dic` p4/p8, `gout` p4, `pud` p4 — none wrong |
| **C — numbered badges on the figure** | `acs` pages 1 and 2 | removes the routing defect; a badge can still sit on the wrong vessel (`acs` p2 diagonal branch) |

**So the first estimate was too pessimistic.** "~30% of pages 4/6/8 carry a leader fan" counted every
page with *any* tethered label. Once template B is separated out, **only 2 of the 30 sampled pages use
template A** — `lymphoma` p4 and `osteoporosis` p4 — and both of those carry a wrong leader.

Template B has a structural reason for being safe, worth stating because it is also the
recommendation: **its tethers are short and its targets are coarse.** "Brain → the head" cannot be
displaced onto the wrong structure the way "Inguinal lymphadenopathy → the groin" can, because there
is nothing adjacent to hit.

## What this means for scope

Revised arithmetic, again stated as arithmetic: ~880 unexamined pages × **~7%** using template A ≈
**60 at-risk figures** outside the work order, of which some fraction will be wrong. That is a very
different number from the 260 the first pass implied, and it is the one to plan against.

**The sequencing point stands and is now cheap to act on.** The 81-page order is a first tranche.
Telling production that costs nothing; discovering it after they have run one re-render batch costs
a second batch.

**And there is a positive recommendation hiding in the sample.** Where a page needs labels on a
figure, template B — icon or card with a short tether to a coarse region — has not failed once in
six examples. That is a stronger version of what the brief already says about on-figure badges.

## What would turn this into a rate

Examine the remaining 6–8 at-risk figures in this sample at magnification (roughly one session), and
extend the sample to every 5th gallery if the answer is still ambiguous. The classification pass is
cheap — it is contact sheets — and only the at-risk figures need a close read.

*Sampled and examined 2026-08-10.*
