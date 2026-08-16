# The 42 work-order pages that had no production sheet — measurement progress

Started 2026-08-16. The 81-page work order had **39 pages with sheets and 42 without**. This file
tracks the measurement of those 42 and records the two scope corrections found on day one.

---

## Correction 1 — **11 of the 42 are already fixed in-app.** Check git before measuring.

`addisons` p1 measured cold reads as a **false positive in the work order**: the Cortex leader lands
squarely on the cortical band, exactly as the order says it should. It is not a false positive — the
leader was shortened by us in **v95**, and the fix is deployed. Reporting it as unreproducible would
have told production the auditors were wrong about a row the auditors got right.

**Before measuring any page, run `git log --oneline -- <page path>` in the app repo.** A page with
more than one commit has been corrected. The eleven:

| page | fixed in | what was fixed |
|---|---|---|
| `addisons` p1 | v95 `bfa161a` | row 1 Cortex — leader shortened into the orange band |
| `addisons` p2 | v97 `60c3e29` | rows 3–4, the two zona leaders pulled back into the cortex |
| `aortic-dissection` p1 | v93 `c7751cf` | a second orphan dot |
| `bowel-obstruction` p2 | v96 `8c83319` | row 1 Villi |
| `bronchiolitis` p7 | v95 `bfa161a` | row 1 Minimal mucus |
| `cardiac-arrest` p2 | v93 `c7751cf` | row 1 badge ⑤ Diaphragm |
| `htn` p2 | v93 `c7751cf` | row 1 Renal Arteries |
| `pancreatitis` p2 | v95 `bfa161a` | row 1 Celiac trunk |
| `pericarditis` p1 | v93 `c7751cf` | row 1 Fibrous Pericardium |
| `pericarditis` p2 | v92 `830093d` | both pericardial-layer labels |
| `pud` p2 | v96 `8c83319` | row 1 Pylorus |

**So the genuinely unmeasured count is 31, not 42.**

## Correction 2 — the fixes took the `to move` rows and left the `[CHECK]` rows

Every one of those eleven commits actioned the row the order marked **to move**. The rows marked
**[CHECK]** were never measured, and they are still open. Counting them off the order:

| page | [CHECK] rows still open |
|---|---|
| `addisons` p2 | rows 1, 2 (renal artery/vein — **to-move rows, and v97 only touched rows 3–4**), row 5 Ureters |
| `aortic-dissection` p1 | rows 1, 3, 4 (to-move) minus whichever v93 took, plus rows 2, 5 |
| `bowel-obstruction` p2 | rows 2, 3, 4, 5 — all four |
| `bronchiolitis` p7 | row 2 — **measured 2026-08-16, CONFIRMED**, see its sheet |
| `htn` p2 | row 2 Common Iliac Arteries |
| `pancreatitis` p2 | rows 2, 3 |
| `pericarditis` p1 | row 2 Parietal Serous Pericardium |
| `pud` p2 | rows 2, 3 |

That is roughly **15 open rows on pages that look finished**, which is the worst place for them to
hide. `addisons` p2 is the one to look at first: it has four to-move rows and the fix commit names
only two of them.

---

## Progress

| page | rows in the order | state |
|---|---|---|
| `addisons` p1 | 1 | **done** — sheet written; order row verified fixed, one open consistency point (③ vs ①, 19 px apart) |
| `anxiety` p2 | 1 | **done** — sheet written; row ⑤ Insula CONFIRMED on the thalamus, **and ① Amygdala + ② Hippocampus found to be the same fault** (all three off a midsagittal plane) |
| `cardiac-arrest` p2 | 1 | **done** — order row verified fixed in v93; badges ①–④ swept clean; no sheet needed |
| `bronchiolitis` p7 | 2 | **done** — sheet written; row 2 CONFIRMED with endpoint (832,400) |

**Remaining: 38 pages** (31 never measured + 7 of the already-fixed eleven still carrying open
[CHECK] rows).

### Order of work

Smallest first, by flagged-row count, because the sheets are cheapest there and the ratio of finding
to effort is highest:

`htn` p2 ▸ `pericarditis` p1 ▸ `pericarditis` p2 ▸ `gi-bleed` p1 ▸ `hyperparathyroid` p2 ▸
`hyponatremia` p2 ▸ `pancreatitis` p2 ▸ `pud` p2 ▸ `b12-anemia` p2 ▸ `bipolar` p2 ▸ `cirrhosis` p2 ▸
`covid` p2 ▸ `croup` p2 ▸ `diverticulitis` p2 ▸ `gi-bleed` p2 ▸ `myasthenia` p2 ▸ `addisons` p2 ▸
`aortic-dissection` p1 ▸ `bowel-obstruction` p2 ▸ `sickle-cell` p2 ▸ `thrombocytopenia` p2 ▸
`influenza` p2 ▸ `leukemia` p2 ▸ `lymphoma` p2 ▸ `osa` p2 ▸ `t2dm` p2 ▸ `cholecystitis` p2 ▸
`fracture` p2 ▸ `lung-cancer` p2 ▸ `metabolic-syndrome` p1 ▸ `osteoarthritis` p2 ▸ `ra` p2 ▸
`hiv` p2 ▸ `ms` p2 ▸ `gout` p2 ▸ `tia` p2 ▸ `thyroidstorm` p2 ▸ `meningitis` p2

**211 flagged rows** across the 42 (99 to move, 112 to check).

### Export sizes among these pages

Twelve ship off-standard and need adding to `PRODUCTION-export-sizes.md` if they are not there
already: `addisons` p1/p2, `lung-cancer` p2, `metabolic-syndrome` p1, `osa` p2, `t2dm` p2,
`thyroidstorm` p2 (all 800×1200); `aortic-dissection` p1 (915×1373); `cardiac-arrest` p2
(913×1373); `htn` p2 (1137×1705); `pericarditis` p1 and p2 (1280×1920).

---

## Method notes worth keeping

- **The automated leader-tracer does not work on this artwork and was abandoned.** Two attempts:
  fixed-threshold connected components (the leaders are anti-aliased over bright artwork and
  fragment into 10-px pieces), then a top-hat ridge filter plus Zhang–Suen thinning (the leaders
  merge with magnifier circles and label text, so skeleton endpoints land on glyphs). What works is
  the project's existing method — **crop with a coordinate grid at 4–13×, read it by eye, then
  confirm the tissue under the terminator by sampling RGB with the leader's own ink excluded.**
- Tools in the scratchpad: `mt.py grid|crop|full|rgb` and horizontal tissue-profile scans printed as
  ASCII, which settle a boundary question faster than any image does.
- **A profile at the leader's own row beats a sampled box** when a band is narrow: on `addisons` p1
  the cortex is 10 px wide and a 7×7 sample straddles it, while the profile reads
  `medulla x240–257 · cortex x259–269` and puts the tip at 268 beyond argument.
