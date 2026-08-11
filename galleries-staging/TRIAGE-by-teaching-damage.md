# Triage: the 81 pages ranked by what the error would teach

Built 2026-08-10, on Dr. Kreithen's instruction, because the previous ordering was by **how many
labels the auditors flagged** — and that proxy misses single-label disasters. `croup` p2 has one
flagged label and puts the trachea in the lung.

**Method.** All **511 rows** parsed from the work order and pre-scored on the auditors' own wording
(a second label on the same structure; a named structure that is not drawn at all; a displacement
measured in whole organs; an endpoint in an unrelated organ). The score is only a sieve — the
ranking below is a reading of the row text, not the score. Where the two disagreed, the reading won.

**How the scores fell:** 343 rows scored 0, 124 scored 2, and **44 rows scored 3 or more**. So the
severe material is concentrated: roughly 9% of the rows carry most of the teaching damage, spread
over about 30 pages.

---

## Tier 1 — a reader acts on this and is wrong

Work these first. Each teaches a specific false thing rather than leaving a leader in empty space.

| page | the finding that puts it here |
|---|---|
| **sepsis p2** | marker **6 "BRAIN (Meningitis)"** sits on the **left lateral chest wall / axilla**. A brain marker on the chest. |
| **dvt p2** | "Popliteal vein" is **72 px below the joint line, on the tibial shaft**; "Deep femoral vein" marks the same trunk as "Femoral vein"; "Valve closed" names a structure the panel never draws. This is the page a reader uses to learn where to compress. |
| **pe p2** | "Left main bronchus" ends on the **left cardiac border / adjacent lung** — no airway at the endpoint — on the page teaching vascular landmarks. |
| **stroke p2** | "Vertebral Arteries" ends on **black background**, abutting a thin side branch. |
| **croup p2** | "Trachea" in **left lung parenchyma, below the carina**. *(measured; layout row)* |
| **bph p2** | seminal vesicle and bladder wall carry **each other's names**; testis and scrotum both on the penis. *(done — sheet issued)* |
| **aki p2** | four tubule labels inside **one 17 px blood vessel**; glomerulus and Bowman's capsule swapped. *(done — sheet issued)* |

## Tier 2 — two labels on one structure, or a structure that isn't drawn

The reader gets a confident wrong name. Less immediately actionable than tier 1, equally wrong.

| page | the finding |
|---|---|
| **migraine p2** | "Dura mater" lands on the **superior sagittal sinus** — a vein named as a membrane |
| **schizophrenia p2** | "Pituitary Gland" on **empty background**; no pituitary is drawn |
| **osteomyelitis p2** | "Venous drainage" on the cortical shell; **no vein at the endpoint** |
| **parkinsons p2** | "Thalamus" on the **globus pallidus** — the structure another label already marks |
| **seizure p2** | "Basal ganglia" on the **thalamic sphere** — same as the "Thalamus" label |
| **suicide p2** | "Hippocampus" on the **same sphere** the Raphe Nuclei arrow points at |
| **bronchiolitis p2** | "Excess mucus" on the same swollen lining another label marks |
| **hyperkalemia p2** | "Renal Medulla" on the **external surface** of the intact kidney |
| **nephrolithiasis p2** | "Urinary bladder" on the **distal ureter** |
| **uti p2** | "Ureterovesical junction" 45 px from where the ureter actually enters |
| **tb p2** | "Hilar lymph node enlargement" on lung parenchyma, 20 px lateral of the node |
| **aortic-dissection p2** | arch branch labels **shifted one position**; two on one vessel. *(done — sheet issued)* |

## Tier 3 — big pages, many rows, mostly displacement rather than misnaming

Worth doing, and they are where the hours go: `pneumothorax` p2 (14 rows), `cdiff` p2 (14),
`hepatitis` p2 (13), `parkinsons` p2 (10), `pe` p2 (10), `stroke` p2 (9), `bronchiolitis` p2 (9),
`ckd` p2 (8), `hypothyroid` p2 (7), `gerd` p2 (7).

## Correction to this triage — `dementia` p2 was ranked far too low (2026-08-11)

It landed in tier 4 because it has only 14 flagged rows. **Twelve of those fourteen are asserted
moves**, and on measuring it: the amygdala label is on the pons, the cerebellum label is on the
brainstem, the thalamus label is on the corpus callosum, the corpus callosum label is on the
cingulate gyrus, and on the coronal panel both hippocampi carry other labels' names while the
label "Hippocampus" points at the midline. **It belongs in tier 2.** Sheet issued as
`PRODUCTION-dementia-p2.md`.

The lesson for the rest of tier 4: **row count was still doing some of the work in this ranking.**
Within tier 4, sort by the *move* count rather than the total, since a [CHECK]-heavy page of 30 rows
can be gentler than a 14-row page that is 12 moves.

## Tier 4 — the rest

Roughly 45 pages whose flagged rows are near-misses: a leader a few pixels short of a correct
structure, or a [CHECK] row that may be correct as drawn. These are real but they do not teach a
false fact, and they should be last.

---

## What changed by doing this

Ordering by flagged-label count would have put `pneumothorax` p2 and `cdiff` p2 (14 rows each) near
the front and **`sepsis` p2 near the back** — it has only two flagged rows, one of which is a brain
marker on a chest wall. It would also have buried `croup` p2, `stroke` p2 and `tb` p2.

Seven of the tier-1 and tier-2 pages are already done. **The next sessions go: `sepsis` p2, `dvt` p2,
`pe` p2, `stroke` p2, then tier 2 in the order listed.**

*Scores and the full 511-row table are in `triage.json` alongside this file, so the ranking can be
re-derived or argued with rather than taken on trust.*
