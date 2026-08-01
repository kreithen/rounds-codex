# Infectious Disease clinical guidelines — corrections record

Twenty entries were submitted (10 for 2025, 10 for 2026). Seventeen shipped: 10 under 2025
and 7 under 2026, after three were removed as duplicates of an entry already carried on the
other year.

Every entry was checked against the published source before merging. This file is the review
record. **It is not app content** — the shipped entries state the corrected fact in clinical
prose and say nothing about having been corrected. That separation is the point: an earlier
specialty shipped a `date` field reading "2025 entry as submitted" to a resident-facing page,
and a first pass at this file wrote sentences like "CORRECTED: the submission said…" into
nine reader-facing fields before `verify_id_guidelines.js` caught them in the browser.

Worst first.

---

## REVERSED — the entry stated the opposite of the published result

### PIC — adjunctive corticosteroids in non-HIV *Pneumocystis* pneumonia (2025 #7)
*Lancet Respiratory Medicine* 2025 · 27 French hospitals · 218 HIV-negative patients

**Submitted:** steroids do not help in non-HIV PCP; entry cautioned against their use.

**Published:** every point estimate favors corticosteroid.

| endpoint | corticosteroid | placebo | result |
|---|---|---|---|
| day-28 mortality (primary) | 21.5% | 32.4% | −10.9%, **p=0.069 — not significant** |
| day-90 mortality | — | — | **HR 0.59, p=0.022 — significant** |
| need for intubation | — | — | **HR 0.36, p=0.020 — significant** |

The primary endpoint genuinely missed, so this does not make steroids standard of care. But
shipped as submitted, a clinician would have withheld a treatment the trial suggests may help.
The entry now describes it as a positive-trending trial that missed its primary endpoint.

---

## NOT FOUND — no such study

### ENCLOSE — dalbavancin for infective endocarditis (2025, dropped)
No randomized trial of this name exists. Published evidence for dalbavancin in endocarditis is
real-world case series only. The entry was dropped; dalbavancin is covered by DOTS instead
(below), which is real.

---

## Wrong design, wrong indication, or wrong trial

### DOTS — dalbavancin for *S. aureus* bacteremia (2025 #2)
*JAMA* 2025;334(10):866-877 · phase 2b open-label · 200 adults · 23 North American centers

**Submitted:** proved noninferiority to standard daily therapy.

**Published:** designed and powered as a **superiority** trial on day-70 DOOR, and it **missed
that primary endpoint**. A failed superiority trial does not establish noninferiority — that
needs a prespecified margin, and this trial had none. Also omitted: enrollment required blood
cultures to have **already cleared**, so it does not speak to the acutely bacteremic patient.

### Mosnodenvir for dengue (2025 #9)
**Submitted:** treatment trial in natural primary dengue, showing reduced viral load and faster
symptom resolution.

**Published:** **daily mosnodenvir as prophylaxis in a controlled human infection model** —
healthy volunteers deliberately challenged. Neither a treatment trial nor a study in natural
infection. A real first-in-class signal; not an outpatient indication.

### endTB / TRUNCATE-TB conflation (2025 #6)
**Submitted:** one entry pairing the two trials, described as covering rifampicin-susceptible
*and* resistant disease.

**Actual:** two trials, two questions. endTB is shorter all-oral regimens in **MDR/RR-TB**;
TRUNCATE-TB is an 8-week strategy in drug-**susceptible** TB. The entry now covers endTB only
and names TRUNCATE-TB explicitly as the trial it is not.

### MVA-BN mpox vaccine (2026 #6) — re-scoped
**Submitted:** "real-world effectiveness against clade I and clade II", 80–85%, four-day
post-exposure window, cited to *JAMA* (link went to the journal front page).

**Actual:** the real-world effectiveness evidence is **clade II** — pooled two-dose VE ≈82%,
adjusted per-study range 66–90%, post-exposure single-dose 78–89% (*Vaccine* systematic
review). For **clade I** there is cross-neutralization data (two doses raise anti-clade-Ib
antibodies, at lower titers than anti-clade-IIb) and deployment modelling, but **no measured
effectiveness**. Title and body re-scoped; the entry now names the gap rather than papering
over it.

---

## Overstated — the number or the claim is stronger than the source

### SNAP — cefazolin for MSSA bacteremia (2026 #1)
*NEJM* 18 June 2026 · >1,200 adults · recruiting Feb 2022 – Aug 2024

**Submitted:** "improves patient survival."

**Published:** cefazolin was **noninferior** for 90-day mortality (15% vs 17%). What reached
significance was **renal**: acute kidney injury 13.9% vs 19.6%, and that comparison was stopped
early on the safety advantage. Numbers were accurate; the verb was not.

### ATTENTION — early TAF in chronic hepatitis B (2025 #10)
**Submitted:** as a completed trial.

**Actual:** an **interim analysis of a trial still enrolling** — 22 centers in South Korea and
Taiwan, non-cirrhotic, HBV DNA 4–8 log10, ALT <70 (M) / <50 (F), age 40–80. Real but
provisional. The entry now says so, and warns against moving a treatment threshold on it.

---

## Date corrections — right science, wrong year

| entry | submitted as | pivotal publication | what actually belongs to this year |
|---|---|---|---|
| PURPOSE 1 & 2, lenacapavir PrEP (2026 #3) | 2026 | **2024** | regulatory approval and rollout |
| SHINE, 4-month pediatric TB (2026 #7) | 2026 | **2022** (extended follow-up since) | the follow-up data |
| EAGLE-2 / EAGLE-3, gepotidacin uUTI (2026 #5) | 2025-2026 | **2024** (*Lancet* 403) | approval and uptake |

---

## Resolved on re-check — flagged, then confirmed against source

Three entries were initially marked unverifiable. Rather than ship a hedge, each was resolved:

- **PediCAP (2026 #2)** — confirmed. *Lancet* 2026, `PIIS0140-6736(26)00879-2`. 1,101 children
  (submitted as 1,100), 13 hospitals across South Africa, Uganda, Zambia, Zimbabwe, Mozambique.
  Readmission or death at 28 days 6% oral amoxicillin / 7% amoxicillin-clavulanate / 6%
  injectable. Additional finding the submission omitted: **no benefit from the broader-spectrum
  combination**, and 4–5 day courses matched 7–8 day courses.
- **Clesrovimab (2026 #4)** — confirmed. *NEJM* 2025, `NEJMoa2502984`. 3,632 healthy preterm and
  full-term infants, 2:1, single fixed 105 mg IM. Through day 150: RSV-associated MALRI −60.4%
  (95% CI 44.1–71.9), RSV hospitalization −84.2% (95% CI 66.6–92.6), severe MALRI −91.7%.
- **MVA-BN (2026 #6)** — resolved *against* the submission; see the re-scoping above.

---

## Deduplication — kept on one year only

| development | kept on | why |
|---|---|---|
| DoxyPEP | 2025 | same content submitted under both years |
| Dalbavancin (DOTS) | 2025 | same |
| Gepotidacin | split | gonorrhea → 2025 (with zoliflodacin); uUTI → 2026 |

CloCeBa (2025 #1) and SNAP (2026 #1) both compare cefazolin in MSSA bacteremia and are **not**
duplicates: 315 patients in France versus >1,200 internationally, different endpoints, and the
smaller one came first. Both are listed, and each entry cross-references the other.

---

## Journal front-page links

Four entries linked to a journal home page rather than an article — the pattern CLAUDE.md
records as predicting which citations will not stand up. All four are now real article URLs
(2026 #2, #4, #5, #6). The #6 link moved from *JAMA* to *Vaccine* with the re-scoping.
