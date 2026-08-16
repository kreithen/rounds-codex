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
