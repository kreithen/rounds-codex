# Clinical Calculators — for review

Ten calculators. Nine are scores and indices; the tenth is a weight-based dosage calculator, framed as practice-and-check rather than point-of-care preparation.

> **Generated from `calculators.json` by `scripts/build_calculator_review.js` — do not hand-edit.**
> Re-run it after any content change, or this document goes stale against what actually ships.

> **A medical re-read was done on 2026-07-31 and found one real error** — Wells DVT was calling a
> score of 1 "DVT likely" when the validated threshold is ≥2. That and four currency fixes are
> recorded in **`CORRECTIONS-calculators.md`**, which also lists what was checked and found
> correct. Everything below reflects the corrected content.

Every formula is exercised by `scripts/test_calculators.js` against the test vectors shown. **196 checks pass.** What the tests cannot check is whether the clinical framing is right — that is what needs your eyes.

| # | Calculator | Output | Source |
|---|---|---|---|
| 1 | BMI & Body Surface Area | formula | WHO |
| 2 | Mean Arterial Pressure | formula | Prescott HC, Antonelli M, Alhazzani W, et al |
| 3 | Wells' Criteria for DVT | score -2 to 9 | Wells PS, et al |
| 4 | Wells' Criteria for Pulmonary Embolism | score 0 to 12.5 | Wells PS, et al |
| 5 | PERC Rule for Pulmonary Embolism | score 0 to 8 | Kline JA, et al |
| 6 | CHA₂DS₂-VASc Score | score 0 to 9 | Lip GYH, et al |
| 7 | HAS-BLED Score | score 0 to 9 | Pisters R, et al |
| 8 | CURB-65 Score | score 0 to 5 | Lim WS, et al |
| 9 | qSOFA Score | score 0 to 3 | Singer M, et al |
| 10 | Weight-Based Dose & Volume | dose + volume | Dimensional analysis: dose = weight × ordered dose per kg; volume = dose ÷ concentration |

---

## 1. BMI & Body Surface Area

**Purpose.** Body mass index classifies weight status; body surface area is used to normalize physiologic measurements such as cardiac index.

**Inputs**

- Weight — kg / lb
- Height — cm / m / in

**Interpretation**

- ≤ 18.5: **Underweight**
- ≤ 25: **Normal weight**
- ≤ 30: **Overweight**
- ≤ 35: **Obesity class I**
- ≤ 40: **Obesity class II**
- ≤ max: **Obesity class III**

**Caveats shown to the student**

- The WHO categories apply to ADULTS. In anyone under 20, BMI must be read against age- and sex-specific percentiles (CDC growth charts) — the adult cut-offs are not valid and this calculator does not apply them.
- BMI does not distinguish muscle from fat, and misclassifies muscular and older sarcopenic patients in opposite directions.
- WHO recommends lower thresholds for South and East Asian populations: overweight from 23, obesity from 27.5.
- BSA is shown because it normalizes cardiac index and other physiologic measures. Chemotherapy dosing is a pharmacy calculation and is out of scope for this app.

**Source.** WHO. Obesity: preventing and managing the global epidemic (WHO Technical Report Series 894). Mosteller RD. Simplified calculation of body-surface area. N Engl J Med 1987;317:1098.
<https://www.nejm.org/doi/10.1056/NEJM198710223171717>

**Test vectors (all passing)**

| input | expected |
|---|---|
| weight=70, height=175 | bmi 22.9, bsa 1.84, band Normal weight |
| weight=100, height=180 | bmi 30.9, bsa 2.24, band Obesity class I |
| weight=45, height=165 | bmi 16.5, bsa 1.44, band Underweight |
| weight=154, height=69, weight_unit=lb, height_unit=in | bmi 22.7, bsa 1.84, band Normal weight |

---

## 2. Mean Arterial Pressure

**Purpose.** Estimates the average arterial pressure across the cardiac cycle — the pressure driving organ perfusion.

**Inputs**

- Systolic BP — mmHg
- Diastolic BP — mmHg

**Interpretation**

- ≤ 65: **Below the usual resuscitation target**
- ≤ max: **At or above the usual resuscitation target**

**Caveats shown to the student**

- MAP ≥65 mmHg is the initial resuscitation target for septic shock. It is NOT a universal ward threshold, and this calculator should not be read as a pass/fail for every patient.
- In adults 65 or older, SSC 2026 suggests an initial range of 60–65 mmHg rather than a higher target (weak recommendation, low certainty) — from the 65 trial, where permissive hypotension gave similar 90-day mortality with less vasopressor exposure.
- A MAP cannot be held at exactly 65. The guideline’s own remark is to titrate to a range around the target, roughly within 5 mmHg, rather than to a single number.
- A chronically hypertensive patient may need a higher MAP to perfuse the same organs; a healthy young adult may be entirely well below 65.
- The (SBP + 2×DBP)/3 formula assumes a normal heart rate. It underestimates MAP at high heart rates, where diastole shortens.
- Trend and the patient in front of you matter more than the single number. Escalate on the clinical picture, not the calculator.

**Source.** Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026. Crit Care Med 2026;54(4):725-812.
<https://pubmed.ncbi.nlm.nih.gov/41869847/>

**Test vectors (all passing)**

| input | expected |
|---|---|
| sbp=120, dbp=80 | value 93, band At or above the usual resuscitation target |
| sbp=90, dbp=50 | value 63, band Below the usual resuscitation target |
| sbp=100, dbp=60 | value 73, band At or above the usual resuscitation target |

---

## 3. Wells' Criteria for DVT

**Purpose.** Stratifies pretest probability of deep vein thrombosis, to decide whether a D-dimer or an ultrasound is the right next test.

**Inputs**

- Active cancer (treatment within 6 months, or palliative) — **+1**
- Paralysis, paresis, or recent plaster immobilization of a lower extremity — **+1**
- Bedridden ≥3 days, or major surgery within 12 weeks requiring general or regional anesthesia — **+1**
- Localized tenderness along the deep venous system — **+1**
- Entire leg swollen — **+1**
- Calf swelling >3 cm vs the asymptomatic leg (measured 10 cm below tibial tuberosity) — **+1**
- Pitting edema confined to the symptomatic leg — **+1**
- Collateral superficial veins (non-varicose) — **+1**
- Previously documented DVT — **+1**
- Alternative diagnosis at least as likely as DVT — **-2**

**Interpretation**

- ≤ 1.99: **DVT unlikely** — A negative high-sensitivity D-dimer reasonably excludes DVT in this group.
- ≤ max: **DVT likely** — Proceed to compression ultrasound; D-dimer alone is not sufficient to exclude.

**Caveats shown to the student**

- This uses the two-tier (modified) version: ≤1 is 'DVT unlikely' and ≥2 is 'DVT likely'. The original three-tier version reported low (≤0), moderate (1–2) and high (≥3) probability — check which one your institution uses.
- The score is for a first suspected lower-limb DVT. It is not validated in pregnancy, in suspected upper-extremity DVT, or in patients already anticoagulated.
- The score guides which test to order. It never rules DVT in or out on its own.

**Source.** Wells PS, et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med 2003;349:1227-35.
<https://www.nejm.org/doi/10.1056/NEJMoa023153>

**Test vectors (all passing)**

| input | expected |
|---|---|
| (none selected) | score 0, band DVT unlikely |
| cancer=true, tenderness=true | score 2, band DVT likely |
| cancer=true, tenderness=true, altdx=true | score 0, band DVT unlikely |
| cancer=true, paralysis=true, bedridden=true, tenderness=true, legswollen=true, calf=true, edema=true, collateral=true, priordvt=true | score 9, band DVT likely |
| cancer=true | score 1, band DVT unlikely |

---

## 4. Wells' Criteria for Pulmonary Embolism

**Purpose.** Stratifies pretest probability of pulmonary embolism, to decide between D-dimer and CT pulmonary angiography.

**Inputs**

- Clinical signs and symptoms of DVT (leg swelling and pain on palpation of the deep veins) — **+3**
- PE is the most likely diagnosis, or equally likely as an alternative — **+3**
- Heart rate >100 bpm — **+1.5**
- Immobilization ≥3 days, or surgery within the previous 4 weeks — **+1.5**
- Previous objectively diagnosed PE or DVT — **+1.5**
- Hemoptysis — **+1**
- Malignancy (treatment within 6 months, or palliative) — **+1**

**Interpretation**

- ≤ 4: **PE unlikely** — A negative high-sensitivity D-dimer reasonably excludes PE in this group.
- ≤ max: **PE likely** — Proceed to CT pulmonary angiography (or V/Q where CT is contraindicated).

**Caveats shown to the student**

- This uses the dichotomized version: ≤4 is 'PE unlikely', >4 is 'PE likely'. The original three-tier version reported low (<2), moderate (2–6) and high (>6) probability — know which your institution uses.
- Scores fall on half points (1.5, 4.5). Thresholds are applied without rounding.
- 'PE is the most likely diagnosis' is a subjective item and is the main source of inter-rater variation in this score.
- In a low-probability patient, consider PERC before ordering a D-dimer — see the PERC calculator.

**Source.** Wells PS, et al. Derivation of a simple clinical model to categorize patients' probability of pulmonary embolism. Thromb Haemost 2000;83:416-20. Dichotomized thresholds adopted by NICE NG158.
<https://pubmed.ncbi.nlm.nih.gov/10744147/>

**Test vectors (all passing)**

| input | expected |
|---|---|
| (none selected) | score 0, band PE unlikely |
| hr=true, immob=true, prior=true | score 4.5, band PE likely |
| hr=true, immob=true | score 3, band PE unlikely |
| dvtsigns=true, pefirst=true, hr=true, immob=true, prior=true, hemoptysis=true, malignancy=true | score 12.5, band PE likely |
| dvtsigns=true, hemoptysis=true | score 4, band PE unlikely |

---

## 5. PERC Rule for Pulmonary Embolism

**Purpose.** In a patient already judged LOW risk, PERC identifies those in whom no further testing for PE is warranted. All eight criteria must be absent.

**Inputs**

- Age ≥50 — **+1**
- Heart rate ≥100 bpm — **+1**
- SaO₂ <95% on room air — **+1**
- Unilateral leg swelling — **+1**
- Hemoptysis — **+1**
- Recent surgery or trauma within 4 weeks requiring treatment under general anesthesia — **+1**
- Prior PE or DVT — **+1**
- Hormone use (oral contraceptive, hormone replacement, estrogen) — **+1**

**Interpretation**

- ≤ 0: **PERC negative — no further testing indicated** — Valid ONLY if you have already judged this patient low risk on clinical gestalt.
- ≤ max: **PERC positive — PERC cannot exclude PE** — PERC positive does not mean PE is present. It means PERC cannot rule it out; continue the usual pathway.

**Caveats shown to the student**

- PERC is only valid in patients you have ALREADY assessed as low pretest probability. Applying it to a moderate- or high-risk patient is the classic misuse and is unsafe.
- PERC is a rule-OUT tool. A positive PERC is not evidence of PE — it simply means the rule does not apply.
- Not validated in pregnancy.

**Source.** Kline JA, et al. Prospective multicenter evaluation of the pulmonary embolism rule-out criteria. J Thromb Haemost 2008;6:772-80.
<https://pubmed.ncbi.nlm.nih.gov/18318689/>

**Test vectors (all passing)**

| input | expected |
|---|---|
| (none selected) | score 0, band PERC negative — no further testing indicated |
| age=true | score 1, band PERC positive — PERC cannot exclude PE |
| age=true, hr=true, sat=true, legswell=true, hemoptysis=true, surgery=true, prior=true, hormone=true | score 8, band PERC positive — PERC cannot exclude PE |

---

## 6. CHA₂DS₂-VASc Score

**Purpose.** Estimates annual stroke risk in non-valvular atrial fibrillation, to guide whether oral anticoagulation is indicated.

**Inputs**

- Congestive heart failure or left ventricular dysfunction — **+1**
- Hypertension — **+1**
- Age — Under 65 → `0`, 65–74 → `1`, 75 or older → `2`
- Diabetes mellitus — **+1**
- Prior stroke, TIA, or thromboembolism — **+2**
- Vascular disease (prior MI, peripheral arterial disease, or aortic plaque) — **+1**
- Female sex — **+1**

**Interpretation**

- ≤ 0.99: **Low risk** — Anticoagulation generally not recommended on the basis of this score alone.
- ≤ 1.99: **Intermediate risk** — Anticoagulation may be considered — a score of 1 from female sex alone is not an indication.
- ≤ max: **High risk** — Guidelines recommend oral anticoagulation at ≥2 in men and ≥3 in women.

**Caveats shown to the student**

- Age is scored ONCE — either 2 points for ≥75 or 1 point for 65–74, never both. The calculator enforces this with a single age selector.
- Female sex is a risk MODIFIER, not a risk factor on its own. A woman whose only point is her sex is treated as low risk, which is why the thresholds are ≥2 in men and ≥3 in women.
- Validated for NON-VALVULAR atrial fibrillation. Patients with moderate-to-severe mitral stenosis or a mechanical valve need anticoagulation regardless of this score.
- The score estimates stroke risk. It says nothing about bleeding risk — see HAS-BLED, and note that the two are not meant to be subtracted from one another.
- The 2023 ACC/AHA/ACCP/HRS guideline frames the decision as an annual thromboembolic risk of about 2% per year rather than a score alone — which corresponds to ≥2 in men and ≥3 in women — and allows other validated scores (ATRIA, GARFIELD-AF) alongside this one.

**Source.** Lip GYH, et al. Refining clinical risk stratification for predicting stroke and thromboembolism in atrial fibrillation using a novel risk factor-based approach. Chest 2010;137:263-72.
<https://pubmed.ncbi.nlm.nih.gov/19762550/>

**Test vectors (all passing)**

| input | expected |
|---|---|
| agegroup=0 | score 0, band Low risk |
| agegroup=0, female=true | score 1, band Intermediate risk |
| agegroup=2, htn=true | score 3, band High risk |
| chf=true, htn=true, agegroup=2, dm=true, stroke=true, vascular=true, female=true | score 9, band High risk |
| chf=true, htn=true | score 2, band High risk |

---

## 7. HAS-BLED Score

**Purpose.** Estimates one-year major bleeding risk in patients with atrial fibrillation on anticoagulation, to flag modifiable risk factors.

**Inputs**

- Uncontrolled hypertension (systolic >160 mmHg) — **+1**
- Abnormal renal function (dialysis, transplant, or creatinine >200 µmol/L / >2.26 mg/dL) — **+1**
- Abnormal liver function (cirrhosis, or bilirubin >2× normal with AST/ALT/ALP >3× normal) — **+1**
- Prior stroke — **+1**
- Prior major bleeding, or predisposition to bleeding — **+1**
- Labile INR (time in therapeutic range <60%) — **+1**
- Age >65 — **+1**
- Concomitant antiplatelet or NSAID — **+1**
- Alcohol excess (≥8 drinks per week) — **+1**

**Interpretation**

- ≤ 0: **Low bleeding risk**
- ≤ 2: **Intermediate bleeding risk**
- ≤ max: **High bleeding risk** — Address the modifiable factors and review more often — this is not on its own a reason to withhold anticoagulation.

**Caveats shown to the student**

- The most important misuse to avoid: a high HAS-BLED is NOT a reason to withhold anticoagulation. Its purpose is to identify MODIFIABLE risk factors — uncontrolled blood pressure, labile INR, concomitant NSAIDs, alcohol — and to correct them.
- Many patients score points for factors that also raise their stroke risk. Do not subtract HAS-BLED from CHA₂DS₂-VASc; they answer different questions.
- Labile INR applies only to patients on a vitamin K antagonist, and scores 0 in a patient on a DOAC.
- Maximum score is 9.

**Source.** Pisters R, et al. A novel user-friendly score (HAS-BLED) to assess 1-year risk of major bleeding in patients with atrial fibrillation. Chest 2010;138:1093-100.
<https://pubmed.ncbi.nlm.nih.gov/20299623/>

**Test vectors (all passing)**

| input | expected |
|---|---|
| (none selected) | score 0, band Low bleeding risk |
| htn=true, elderly=true | score 2, band Intermediate bleeding risk |
| htn=true, elderly=true, drugs=true | score 3, band High bleeding risk |
| htn=true, renal=true, liver=true, stroke=true, bleeding=true, inr=true, elderly=true, drugs=true, alcohol=true | score 9, band High bleeding risk |
| htn=true | score 1, band Intermediate bleeding risk |

---

## 8. CURB-65 Score

**Purpose.** Estimates 30-day mortality in community-acquired pneumonia, to support the decision about where the patient should be treated.

**Inputs**

- Confusion (new disorientation to person, place or time) — **+1**
- Urea >7 mmol/L (BUN >19 mg/dL) — **+1**
- Respiratory rate ≥30 breaths/min — **+1**
- Systolic BP <90 mmHg or diastolic BP ≤60 mmHg — **+1**
- Age ≥65 — **+1**

**Interpretation**

- ≤ 1: **Low severity** — Around 1.5% 30-day mortality. Outpatient treatment is usually appropriate.
- ≤ 2: **Moderate severity** — Around 9% 30-day mortality. Consider admission or supervised outpatient care.
- ≤ max: **High severity** — Around 22% 30-day mortality. Admit; consider critical care at 4–5.

**Caveats shown to the student**

- CURB-65 predicts MORTALITY. It does not predict who needs intensive care, and it does not account for hypoxia, comorbidity, or social circumstances — a hypoxic 40-year-old scores 0.
- Clinical judgement and oxygenation override the score. A low score in a patient who looks unwell is not permission to discharge.
- The urea criterion needs a blood result. CRB-65, which drops it, is the version used in primary care.
- Derived in community-acquired pneumonia. It is not validated in hospital-acquired or aspiration pneumonia, or in immunocompromised patients.

**Source.** Lim WS, et al. Defining community acquired pneumonia severity on presentation to hospital: an international derivation and validation study. Thorax 2003;58:377-82.
<https://pubmed.ncbi.nlm.nih.gov/12728155/>

**Test vectors (all passing)**

| input | expected |
|---|---|
| (none selected) | score 0, band Low severity |
| age=true | score 1, band Low severity |
| age=true, urea=true | score 2, band Moderate severity |
| confusion=true, urea=true, rr=true, bp=true, age=true | score 5, band High severity |
| confusion=true, urea=true, rr=true | score 3, band High severity |

---

## 9. qSOFA Score

**Purpose.** A three-item bedside prompt that identifies patients with suspected infection who are at higher risk of a poor outcome.

**Inputs**

- Respiratory rate ≥22 breaths/min — **+1**
- Altered mentation (GCS <15) — **+1**
- Systolic BP ≤100 mmHg — **+1**

**Interpretation**

- ≤ 1: **Not qSOFA positive** — This does not exclude sepsis. A patient with suspected infection who looks unwell needs escalation regardless.
- ≤ max: **qSOFA positive** — Associated with higher mortality and longer ICU stay in suspected infection. Escalate and investigate.

**Caveats shown to the student**

- The Surviving Sepsis Campaign 2021 guidelines recommend AGAINST using qSOFA as a single screening tool for sepsis, compared with SIRS, NEWS or MEWS. It is a prognostic prompt, not a screen.
- qSOFA is insensitive early. A qSOFA of 0 or 1 does NOT exclude sepsis, and a well-looking score of 0 in a deteriorating patient should not reassure you.
- It applies to patients with SUSPECTED INFECTION. Outside that context the score has no meaning.
- Use your institution's escalation trigger — in most UK and Australian hospitals that is NEWS2 or an equivalent track-and-trigger chart, not qSOFA.

**Source.** Singer M, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA 2016;315:801-10.
<https://pubmed.ncbi.nlm.nih.gov/26903338/>

**Test vectors (all passing)**

| input | expected |
|---|---|
| (none selected) | score 0, band Not qSOFA positive |
| rr=true | score 1, band Not qSOFA positive |
| rr=true, sbp=true | score 2, band qSOFA positive |
| rr=true, mentation=true, sbp=true | score 3, band qSOFA positive |

---

## 10. Weight-Based Dose & Volume

**Purpose.** Work out the dose for a weight-based order and the volume to measure from a given supply. Do the sum yourself first, then use this to check it.

**Inputs**

- Patient weight — kg / lb
- Ordered dose (per kg) — 
- Dose unit — mg/kg → `mg`, mcg/kg → `mcg`, g/kg → `g`
- The order is written as — a single dose → `dose`, a total per day, divided → `day`
- Doses per day (if divided) — 1 — once daily → `1`, 2 — q12h / BID → `2`, 3 — q8h / TID → `3`, 4 — q6h / QID → `4`, 6 — q4h → `6`
- Supply: strength — 
- Strength unit — mg → `mg`, mcg → `mcg`, g → `g`
- Supply: in this volume — mL

**Interpretation**

- ≤ 0.1: **Very small volume — re-check your units** — Under 0.1 mL cannot be measured accurately in most syringes, and a volume this small usually means a mcg/mg mix-up. Re-read the order and the vial before drawing anything up.
- ≤ 50: **Volume is in the usual measurable range** — This checks the ARITHMETIC only. It is not a statement that the dose is correct, safe, or appropriate for this patient.
- ≤ max: **Large volume — re-check your units** — More than 50 mL as a single measured dose is unusual outside an infusion. A g-for-mg slip produces exactly this result.

**Caveats shown to the student**

- This checks your arithmetic, not the dose. It has no drug knowledge and cannot know a maximum, a minimum, or whether the drug suits this patient. A decimal-point error that happens to produce a measurable volume will pass without complaint. Always check the dose itself against a current drug reference.
- Work it out yourself first, then use this to check. A calculator you drive will faithfully carry your mistake — if you enter mg where the order says mcg, it returns a confident and wrong answer.
- mcg, mg and g is where these calculations actually go wrong. A thousandfold error still looks like an ordinary number. Read the order and the vial label as written, not as you expect them to read.
- 'Per day, divided' is not 'per dose'. Giving a whole daily dose as one dose is a two- to four-fold overdose and is the commonest weight-based error there is. Check which one the order specifies before you choose it above.
- Pediatric doses are frequently capped at the adult dose. Weight-based arithmetic does not know that and will scale straight past it in a large child or an adolescent.
- This is a study tool. It is not a substitute for your institution's process — for high-alert medications that includes an independent double check by a second person where your policy requires one, not a second run through the same calculator.

**Source.** Dimensional analysis: dose = weight × ordered dose per kg; volume = dose ÷ concentration. Safety framing follows the Institute for Safe Medication Practices, 'Independent double checks: undervalued and misused' (ISMP Medication Safety Alert!), which recommends double checks be applied judiciously to selected high-alert situations rather than universally.
<https://www.ismp.org/sites/default/files/attachments/2018-04/LTC201506.pdf>

**Test vectors (all passing)**

| input | expected |
|---|---|
| weight=70, dose=5, doseUnit=mg, basis=dose, strength=50, strengthUnit=mg, volume=1 | dose 350, doseUnit mg, volume 7 |
| weight=154, weight_unit=lb, dose=5, doseUnit=mg, basis=dose, strength=50, strengthUnit=mg, volume=1 | dose 349.27, doseUnit mg, volume 6.99 |
| weight=20, dose=45, doseUnit=mg, basis=day, freq=3, strength=250, strengthUnit=mg, volume=5 | dose 300, doseUnit mg, volume 6 |
| weight=20, dose=45, doseUnit=mg, basis=dose, strength=250, strengthUnit=mg, volume=5 | dose 900, doseUnit mg, volume 18 |
| weight=60, dose=2, doseUnit=mcg, basis=dose, strength=100, strengthUnit=mcg, volume=2 | dose 120, doseUnit mcg, volume 2.4 |
| weight=50, dose=0.1, doseUnit=g, basis=dose, strength=500, strengthUnit=mg, volume=10 | dose 5, doseUnit g, volume 100 |
| weight=3.2, dose=10, doseUnit=mcg, basis=dose, strength=1, strengthUnit=mg, volume=1 | dose 32, doseUnit mcg, volume 0.032 |
| weight=70, dose=5, doseUnit=mg, basis=dose | dose 350, doseUnit mg, volume null |

---

*10 calculators, 47 test vectors, 196 checks.*
