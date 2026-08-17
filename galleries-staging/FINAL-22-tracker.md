# The final 22 — straight through, one PDF and one zip at the end

Set 2026-08-16 on Dr. Kreithen's instruction: **work straight through all remaining pages and
deliver one combined PDF and one zip at the end**, rather than a tranche after each page.

**This file is the resume point.** Measured coordinates go into
`galleries-staging/final22-findings.json` as each page is finished; when all 22 are in, the PDF is
built with `scripts/build_label_correction_pdf.py` and the zip with `scripts/stage_pages_to_fix.py`,
both already written and both driven off that JSON.

---

## Exact scope — counted, not estimated

| | |
|---|---|
| described-only pages | 25 |
| already measured (`b12-anemia` p2, `bipolar` p2, `hyponatremia` p2) | 3 |
| **remaining to measure** | **22** |
| **flagged rows across them** | **141** |

Not in this 22, and tracked elsewhere: the ~15 open `[CHECK]` rows on the seven pages that already
look finished (see the Correction 2 section of `UNSHEETED-PAGES-progress.md`), and the four
production items in `PRODUCTION-residual-after-rerender.md`.

## The 22, smallest first

Order is by flagged-row count, because that is the order in which findings come cheapest.

| page | rows | panel | measured? |
|---|---|---|---|
| `cirrhosis` p2 | 4 | Normal liver anatomy & portal venous system | **2 of 4** |
| `covid` p2 | 4 | Respiratory tract & viral entry | **3 of 4** |
| `croup` p2 | 4 | Pediatric airway | |
| `gi-bleed` p2 | 4 | Upper GI: structures at risk for bleeding | |
| `myasthenia` p2 | 4 | Labeled neuromuscular junction | |
| `sickle-cell` p2 | 5 | Hemoglobin, RBCs, spleen & microvasculature | |
| `thrombocytopenia` p2 | 5 | Platelet production | |
| `influenza` p2 | 6 | Labeled respiratory anatomy | |
| `leukemia` p2 | 6 | Normal bone marrow & hematopoiesis | |
| `lymphoma` p2 | 6 | Lymphatic system | |
| `osa` p2 | 6 | Upper airway — lateral & cross-sectional | |
| `t2dm` p2 | 6 | Normal pancreatic & endocrine anatomy | |
| `cholecystitis` p2 | 7 | Hepatobiliary system | |
| `fracture` p2 | 7 | Normal bone & common fracture locations | |
| `lung-cancer` p2 | 7 | Labeled anatomy & typical tumour locations | |
| `metabolic-syndrome` p1 | 7 | Normal anatomy & visceral adiposity | |
| `osteoarthritis` p2 | 7 | Anatomy & joint structure | |
| `ra` p2 | 7 | The normal joint | |
| `ms` p2 | 8 | Labeled CNS anatomy | |
| `tia` p2 | 9 | Cerebral & carotid vascular anatomy | |
| `thyroidstorm` p2 | 10 | Anatomy & physiology | |
| `meningitis` p2 | 12 | Meninges & CSF spaces | |

## Method — fixed, not to be re-litigated

Per page: full view, then a coordinate-grid crop at 3–13× over each panel carrying a flagged row;
read the terminator by eye; confirm by sampling the tissue under it with the leader's own ink
excluded; establish a target the same way. **A target that cannot be pinned to a pixel is written
`PLACE FROM SOURCE`, never guessed** — that rule has already kept two bad coordinates out
(`appendicitis` psoas/iliacus, `b12-anemia` terminal ileum).

**Do not attempt to automate the endpoint search.** Four approaches were tried and scored against
nine hand-measured `aki` p2 endpoints; the best got 2 of 9. The table of what failed and why is in
`UNSHEETED-PAGES-progress.md` — read it before having the idea again.

## Things worth checking on these specific pages

Called out now because they are predictable from the page subjects and each has already bitten:

- **Laterality.** `osa`, `influenza`, `covid`, `croup` and `lung-cancer` are all airway or thoracic
  pages with paired structures. Establish handedness from one asymmetric landmark **before** calling
  any left/right label correct — that is the `hepatitis` p2 lesson.
- **Layered/radial figures.** `ra`, `osteoarthritis`, `fracture` and `leukemia` draw concentric or
  stacked layers, which is where fault 4 lives: on a radial figure a leader overshooting by a
  fraction of the radius still lands two layers in. Fit the circle from its own outline, not from a
  tissue mask — that error cost a whole re-measure on `appendicitis`.
- **Off-standard exports.** `lung-cancer` p2, `metabolic-syndrome` p1, `osa` p2, `t2dm` p2 and
  `thyroidstorm` p2 all ship at **800×1200**. Coordinates are in each page's own pixels; multiply by
  1.28 for standard-size equivalents, and expect fine calls to be less reliable there.
- **Panel sweeps, not just the order's rows.** Every sheet states which panels were swept
  independently. The `icp` scope error is why.

---

## CLOSED 2026-08-16 — the two open physician questions

Both accepted as drawn on Dr. Kreithen's call. Neither needs action, and neither should be re-raised
by a later sweep.

**`gdm` p2 — umbilical vessel colours.** Closed with no change. See the CLOSED section at the foot of
`PRODUCTION-gdm-p2.md` for why it was undecidable from the render and why moving the leaders under
the wrong assumption would have been worse than leaving it.

**`bipolar` p2 — ⑥ HIPPOCAMPUS.** Measured at **(617,523)**, on the **cerebellum**. This row was NOT
in the work order; it was found by our own panel sweep, reported rather than silently fixed, and is
now accepted as a schematic liberty. Same class and same disposition as `anxiety` p2, where ⑤ INSULA
sits on the drawn thalamus and ① AMYGDALA / ② HIPPOCAMPUS sit off the midsagittal plane — all
reviewed and accepted.

**The pattern is worth stating once:** on circuit-diagram pages the nodes are positional
approximations, not anatomical pointers, and the physician has now accepted that convention twice.
A future sweep that flags a circuit node for landing off its structure should check this decision
before writing it up as a defect.

---

# PROJECT CLOSED — 2026-08-17

The mislabelled-anatomy correction project is finished. Live at **v125** (`2026-08-17T02:45:00Z  v125-FINAL-FOUR-PRODUCTION-ITEMS`).

## What shipped

| | |
|---|---|
| pages examined | 119 |
| pages found defective | 81 |
| individual findings | 553 |
| **pages corrected and live** | **75+**, across v92–v125 |
| deploys | 34 (v92 → v125) |

## What is deliberately not done, and where each is recorded

Three buckets, all closed by the physician rather than left dangling. Each has its own CLOSED
section giving the reasoning, so none of them should be re-raised as a new finding:

1. ~~**Four production items**~~ — **RESOLVED in v125**, not deferred. The physician cut the
   three pages himself and they shipped. Two of the four are closed by deletion, two stand
   accepted. See the RESOLVED section of `PRODUCTION-residual-after-rerender.md` — it also
   records the one defect class this project never looked for: **a deleted label can leave its
   leader behind**, which is what `stroke` p2 was carrying.
2. **~15 `[CHECK]` rows on seven pages** — `UNSHEETED-PAGES-progress.md`. Accepted **unmeasured**.
   Stated plainly there, because unmeasured is not the same as clean.
3. **Two physician questions** — the CLOSED section above. `gdm` p2 umbilical vessel colours and
   `bipolar` p2 ⑥ HIPPOCAMPUS, both accepted as schematic liberties.

## The three method results worth carrying forward

Recorded because each cost real time and each would otherwise be re-derived:

- **The terminator detector does not work.** Four approaches, best scored **2 of 9** against
  hand-measured ground truth. The table is in `UNSHEETED-PAGES-progress.md`. Do not rebuild it.
- **The work order's findings are reliable; its distances are not.** Rows described as ~250 px
  measured 57; ~160 px measured 35. Trust *what* it flags, re-measure *where*.
- **What works is crop at 4–13× with a coordinate grid, read by eye, then confirm the tissue
  under the terminator by sampling RGB with the leader's own ink excluded.** Every measured
  finding in this project came from that. The ink count at a stated point is a good cheap
  *verifier* — it just cannot *find* a coordinate.

And one that is about process rather than pixels: **two pages came back from Photoshop with a
label's TEXT destroyed rather than its leader moved** and were caught before shipping. When a
leader starts inside a text column, check the type after the erase.
