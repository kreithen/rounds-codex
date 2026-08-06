# Croup gallery — INCOMPLETE, 7 of 10. **Do not build.**

Condition **`croup`** — Croup, OB & Peds, ICD-10 J05.0. It is the **only OB & Peds condition still
without a gallery**, and therefore **the 100th gallery**.

Received 2026-08-05 inside a 45-file batch. **Pages 7, 8 and 9 are missing** — what arrived in
their place belongs to a different condition entirely. See below.

| page | IMAGE TITLE | file |
|---|---|---|
| 1 | Overview: Croup | `croup-01.png` |
| 2 | — read when the gallery is complete | `croup-02.png` |
| 3 | — | `croup-03.png` |
| 4 | — | `croup-04.png` |
| 5 | — | `croup-05.png` |
| 6 | — | `croup-06.png` |
| **7** | **MISSING** | — |
| **8** | **MISSING** | — |
| **9** | **MISSING** | — |
| 10 | Clinical Pearl & Key Takeaways | `croup-10.png` |

Sources on the pages present: AAP Red Book 2024, Nelson Textbook of Pediatrics 22e, and
AAP Clinical Practice Guideline: Croup (Reaffirmed 2018).

## What arrived instead of pages 7–9

Three pages that are **asthma, not croup**. They are staged in `../asthma-strays-0805/`.

| | croup pages | the three strays |
|---|---|---|
| header ICD-10 | **J05.0** | **J45.0** |
| footer condition line | Croup | **Asthma** |
| CATEGORY | Infectious Disease / Pulmonology | Pulmonology |
| CLINICAL SOURCE | AAP Red Book 2024, Nelson 22e, AAP Croup CPG | **GINA 2024, Kendig's Disorders of the Respiratory Tract in Children 9e, EPR-3 2007** |

**This is the thing worth noticing.** The batch contained ten pages under an `OB & PEDS` header
that a page count would have read as one complete gallery. Seven are croup and three are asthma.
Filing them as croup 7–9 would have shipped three asthma pages inside the croup gallery, and the
only signal is the ICD-10 and the source line — the specialty label says OB & PEDS on all ten.

Two further things make the strays clearly not wanted here:

- **`asthma` already has a complete ten-page gallery live**, in **Respiratory** — with different
  page titles (`Physical Exam & Acute Severity`, `Diagnosis & Monitoring`, `Management & Treatment`
  for 7/8/9). So these are a re-render of finished work, not new content.
- **`asthma` is Respiratory, not OB & Peds.** The header specialty is wrong on all three.

## What production needs to send

**Croup pages 7, 8 and 9**, with ICD-10 **J05.0** and croup sources. Nothing else is outstanding —
the other seven pages are fine.

## When they arrive

    python3 scripts/triage_incoming_gallery.py <incoming> --site /workspace/rounds-codex-app --out <out>
    # move croup-07/08/09 in here, read titles for 2-6 and 7-9, write titles.json, then
    python3 scripts/build_galleries_from_images.py croup=galleries-staging/croup-0805-INCOMPLETE

That build takes the app to **100 galleries** and **completes OB & Peds at 6 of 6**.
