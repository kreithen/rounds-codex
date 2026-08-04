# Suicide Risk Assessment gallery — BUILT AND SHIPPED (v66, 2026-08-04)

Condition **`suicide`** — Suicide Risk Assessment, Psychiatry, ICD-10 R45.851. The header's ICD-10
matches `content/conditions.json` exactly. The **93rd gallery**, and the one that **completed
Psychiatry at 7 of 7**.

All ten pages arrived in one batch of 25 files (10 suicide + 10 delirium + withdrawal 6–10).

## Page order and titles

Order off the `IMAGE n OF 10` header strip, titles off each footer's IMAGE TITLE box. Every
footer's own page number agrees with its header. Arrived shuffled.

| page | shipped title | footer CATEGORY | delivered as |
|---|---|---|---|
| 1 | Overview: Suicide Risk Assessment | Assessment / Safety | `d4f44596-…` |
| 2 | Labeled Neuroanatomy of Suicide Risk | Anatomy / Neurobiology | `d708ab71-…` |
| 3 | Pathophysiology of Suicide Risk | Pathophysiology | `20c48342-…` |
| 4 | Clinical Presentation & Warning Signs | **Pathophysiology** | `d29991bf-…` |
| 5 | History Taking & Risk Factors | **Pathophysiology** | `f57e203a-…` |
| 6 | Clinical Presentation: Key Signs & Symptoms | **Pathophysiology** | `436986b3-…` |
| 7 | Diagnostic Imaging | **Pathophysiology** | `76b70528-…` |
| 8 | Neuropathology & Histology | Pathophysiology | `68073471-…` |
| 9 | Procedures, Therapies & Special Considerations | Therapeutics | `3b4b1ca6-…` |
| 10 | Clinical Pearls & Key Takeaways | Treatment / Management | `fe67fdaf-…` |

Clinical sources: APA Practice Guideline for the Assessment and Treatment of Patients at Risk for
Suicide (2024), and Mann JJ, *Neurobiology of Suicidal Behavior*, Nat Rev Neurosci 2003;4(10):819–828
on pages 2–5. Consistent, and the citation year is the current guideline — unlike `schizophrenia`
page 1.

## One title was corrected on the way in

**Page 6's footer IMAGE TITLE reads "Clinicial Presentation: Key Signs & Symptoms"** — misspelt.
The page's own headline band on the same page reads *"CLINICAL PRESENTATION: KEY SIGNS &
SYMPTOMS"*, spelt correctly, so the band settles it and the app ships the correct spelling. This is
the one place the usual rule (titles come off the footer box) was overridden, and deliberately:
shipping a typo into a display title when the same page contradicts it would be worse. **The
artwork still shows the misspelling** and needs a re-render. Evidence crop:
`DOTS-evidence/TYPO-suicide-page6-Clinicial.png`, which catches the misspelling and the wrong
CATEGORY cell in one frame.

## Faults found

### Pages 4 and 6 are both clinical presentation pages

*"Clinical Presentation & Warning Signs"* (page 4) and *"Clinical Presentation: Key Signs &
Symptoms"* (page 6) read as near-duplicates in the thumbnail strip, with page 5 (history taking)
between them. Same class as `anxiety` 7/8. Shipped as delivered — the rewording is the physician's
call.

### Footer CATEGORY reads "Pathophysiology" on four pages

Pages 4, 5, 6 and 7 — clinical presentation, history taking, clinical presentation again, and
diagnostic imaging — all carry CATEGORY "Pathophysiology". `gout`, `withdrawal` and `delirium` each
had this on page 4 alone; **here it is four pages of one gallery**, which makes the
template-default explanation close to certain.

### Header progress dots — five wrong indices, counts wandering 10–11

| page | dots | filled at | |
|---|---:|---:|---|
| 1 | 10 | 1 | ok |
| 2 | 10 | 2 | ok |
| 3 | 10 | **4** | **wrong index** |
| 4 | 10 | **6** | **wrong index** |
| 5 | **11** | **7** | count and index wrong |
| 6 | 10 | 6 | ok |
| 7 | **11** | **8** | count and index wrong |
| 8 | **11** | 8 | index ok — **but the same dot page 7 fills** |
| 9 | **11** | 9 | index ok, count inflated |
| 10 | **11** | **11** | fills the last of eleven, so it reads as "last page" by accident |

Counts wander between 10 and 11 inside one gallery. Page 3 fills the *fourth* dot and page 4 fills
the *sixth* — overshooting in both cases, where `withdrawal` undershot, so there is no consistent
direction to correct. Pages 7 and 8 fill the same dot.

**Page 10 also carries a stray partial mark** — a dim, half-drawn ring wedged between dots 6 and 7,
off the grid the other ten sit on. First glyph-level defect rather than a wrong count or fill.

### Text error in the artwork

Page 4's red banner reads *"RISK IS DYNAMIC AND **MODIFVABLE**"* — should be "MODIFIABLE". It is
set in large red display type across the full page width, so it is the most visible text defect in
any batch so far. Evidence crop: `DOTS-evidence/TYPO-suicide-page4-MODIFVABLE.png`.

## Checks run

- 25 files, 25 distinct — no duplicates.
- Not a re-send: 0 already live, 0 possibly revised.
- All footers pass the status-claim check.

## Page size

Seven pages at 1024×1536, three at 1023×1537. The builder resampled.

## Built with

    python3 scripts/build_galleries_from_images.py suicide=galleries-staging/suicide-0804
