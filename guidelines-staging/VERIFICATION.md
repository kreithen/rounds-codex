# Anesthesiology clinical guidelines — citation verification

**Status: the feature is built and verified. The 2025 content is NOT safe to ship.**

Every one of the 20 entries supplied for Anesthesiology was checked against the literature by web
search on 2026-07-30. The per-entry findings are in the `verify` block of each staging file
(`anes-2025.json`, `anes-2026.json`); `scripts/merge_guidelines.js` strips those blocks so they
never reach a resident's screen, and refuses to merge an entry that has no `verify` block at all.

Headline: **the 2026 list is sound, the 2025 list is not.**

| | entries | citation found | wrong/absent source | findings misstated |
|---|---|---|---|---|
| 2025 | 10 | 4 | **6** | **3 state the opposite of the published result** |
| 2026 | 10 | **10** | 0 | 4 overstate; **1 states the opposite** |

Nothing here is a judgement on the clinical *teaching*. Several of the summaries describe practice
that is genuinely reasonable. The problem is that they attribute it to trials that either do not
exist or that found the reverse, and residents reading a "breakthrough studies" page will take the
citation as the authority.

## The five that must be corrected before this ships

These state a conclusion that the real literature contradicts. A resident who learns them will be
wrong on the exam and wrong on the ward.

1. **2025 #3 — "HPI-SMART Trial", JAMA.** No trial by this name exists. The real 2025 JAMA trial of
   individualized perioperative blood pressure — **IMPROVE-multi** — found that individualized MAP
   targets **did not** reduce the composite of AKI, myocardial injury, cardiac arrest or death at 7
   days versus routine management at MAP ≥ 65 mmHg. The entry says the opposite, and says
   international hemodynamic standards were rewritten on the strength of it.

2. **2025 #10 — VHA-guided fibrinogen in postpartum hemorrhage, Lancet.** No such trial. The one
   randomised trial in this space — **OBS2** (BJA 2017, double-blind) — found **no benefit**:
   adjusted IRR for allogeneic units 0.72 (95% CI 0.3–1.7), P = 0.45. FIDEL likewise showed no
   benefit from early systematic fibrinogen. The entry claims reduced ICU admissions and a strong
   guideline recommendation.

3. **2026 #2 — 2.5-minute vs 5-minute NIBP trial, Anesthesiology.** The trial is real
   (NCT06314074, 264 patients, single centre) and it was **negative**. 2.5-minute cycling did not
   reduce the time-weighted average of MAP < 65 mmHg; severe hypotension was 5.3% vs 9.9%, P = 0.24.
   Ninety-eight percent of patients were on norepinephrine infusions, which is the likely reason.
   The entry says it proved shorter intervals reduce hypotensive depth and duration, and tells the
   reader to shorten cycling to 2.5 minutes.

4. **2025 #5 — restrictive vs liberal oxygenation, NEJM.** No such pragmatic trial found. The "high
   FiO₂ does not reduce SSI" half is well supported (30 studies, 18,055 patients, RR 0.90, 95% CI
   0.79–1.03). But a 2025 meta-analysis of 20 RCTs (5,793 patients) found low FiO₂ gave *less*
   atelectasis and *more* acute kidney injury (RR 1.64, 95% CI 1.15–2.34). No society has adopted a
   92–96% intraoperative SpO₂ target.

5. **2026 #10 — EEG-guided emergence.** The study is real (Anesthesiology, July 2026) but it is a
   **feasibility study whose endpoint was dreaming**. It did not measure emergence agitation or PTSD,
   which are the two things the entry credits it with reducing.

## Wrong trial or wrong year, right clinical content

6. **2025 #7 — "TITRE-3", NEJM.** No such trial. The description — 7.5 vs 9.5 g/dL, noninferior for
   the composite, high-risk cardiac surgery — is **TRICS III, NEJM 2017**: >5,000 patients, 11.4% vs
   12.5% within a 3% noninferiority margin, transfusion 52.3% vs 72.6%. The teaching is correct; the
   name, year and "90-day MACCE" framing are not. (TITRe2 is a separate earlier UK trial.)

7. **2025 #8 — "RACE-2", JAMA Surgery.** No such trial. "No difference in delirium between spinal
   and general" is well supported — by **REGAIN** (NEJM 2021; 33.9% vs 37.8% in the cognitively
   impaired, 16.2% vs 16.0% in the unimpaired) and **RAGA** (JAMA 2022) — but not by a 2025 trial,
   and not with processed-EEG-guided GA as the comparator.

8. **2025 #2 — volatile vs TIVA in cancer surgery, Lancet.** Not found. The two trials designed to
   answer this — **GAS TIVA** (22 sites, NSCLC) and **VAPOR-C** — had not reported definitive
   3-year recurrence-free survival. There is a real BJA 2023 long-term follow-up of propofol vs
   sevoflurane in older patients having major cancer surgery, which may be what was intended.

9. **2025 #9 — hs-cTn "focused update".** The substance is right and lives in the **2024**
   AHA/ACC/ACS/ASNC/HRS/SCA/SCCT/SCMR/SVM perioperative guideline: preoperative cTn is reasonable in
   known CVD, or age ≥ 65, or age ≥ 45 with symptoms, before elevated-risk surgery. It is a 2024
   full guideline, not a 2025 focused update, and not joint with ESAIC. The "measurably lowers
   1-year mortality" claim is not something the guideline asserts.

10. **2025 #1 — GLP-1 RA guidance.** Real and accurately summarised (symptom screening + gastric
    POCUS + shared decision-making). Released **December 2024**, not 2025.

11. **2025 #4 — ASA neuromuscular blockade guideline.** Real, and every clinical claim checks out
    (quantitative monitoring at the adductor pollicis to TOF ≥ 0.9 before extubation, sugammadex
    over neostigmine at deep/moderate/shallow block). It is the **2023** guideline, not a new 2025
    document.

12. **2025 #6 — SGLT2 / eDKA consensus.** A real 2025 multidisciplinary consensus exists
    (El-Boghdadly et al., *Anaesthesia* 2025, covering GLP-1 RAs, GIP agonists and SGLT2
    inhibitors) recommending a **3-day** hold. It was published in *Anaesthesia*, **not endorsed by
    Circulation**, and the hold is 3 days rather than "3–4". The consensus itself notes there is no
    Class 1 evidence here.

## 2026 — real, with four summaries to soften

All ten 2026 citations resolved to real, correctly-journaled documents. Four overstate:

- **#1 ASA regional analgesia guideline** — for **adults** the recommendation is **conditional**,
  and only for minimally invasive cardiothoracic surgery and open hernia repair. The **strong**
  recommendation is for **children** after open cardiac or thoracic surgery. The guideline also
  states its own evidence base was limited by low methodologic quality and small single-centre
  samples.
- **#5 remimazolam phase 3** — the trial studied **short-term** ICU sedation, not prolonged. No
  society guideline has been revised to include it.
- **#6 CAS Guidelines 2026** — real (49th annual revision) but "a comprehensive overhaul" is wrong:
  CAS revises sections annually only where high-quality literature supports it. The two specific
  claims (continuous capnography required in all sedation locations; formal desflurane phase-out)
  could not be confirmed from the abstract and need checking against the document.
- **#7 PACU EEG delirium** — a risk-**association** study identifying a "vulnerable brain"
  phenotype. "Accurately identifying" overstates it, and no guideline has been refined.
- **#9 high-risk thyroidectomy** — from the **Society for Head and Neck Anesthesia** specifically,
  not "multi-society". A consensus statement cannot demonstrate a reduction in permanent vocal cord
  paralysis rates.
- **#8 HOST-EXAM 10-year** is accurate, with one thing worth adding: clopidogrel was better for the
  primary composite (25.4% vs 28.5%, HR 0.86, 95% CI 0.77–0.96, p = 0.0050) and for ischaemic and
  bleeding outcomes, **but not for all-cause mortality**.

## What the links point at

The supplied "Hyperlink:" fields were descriptive labels, not URLs, so a URL was resolved for each
entry and the label kept as the visible link text. Where the cited study does not exist, the link
points at **the real study with the contrary result** (IMPROVE-multi, TRICS III, RAGA, OBS2) rather
than at nothing, so the discrepancy is visible on the page rather than hidden. Two entries with no
identifiable source (2025 #2 and #5) link to a PubMed title search.

## Method and its limits

- Verification was by **web search only**. The agent proxy 403s PubMed, PMC, NEJM, doi.org and
  every publisher site, so **no abstract or full text was read** — only search-result summaries.
- That is enough to establish that a trial does or does not exist, and to catch an inverted primary
  outcome. It is **not** enough to confirm a specific number inside a paper, and it is why the CAS
  capnography and desflurane claims are marked unverified rather than wrong.
- A "matched" status means the document exists and the summary is consistent with what the search
  results say about it. It is **not** a medical re-read.
