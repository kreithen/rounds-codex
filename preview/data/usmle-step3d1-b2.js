/*
 * Rounds Codex - USMLE Step 3, Day 1 (Foundations of Independent Practice) bank, Batch 2 (25 items)
 * Day-1-FIP blueprint: biostatistics/epidemiology and medical-literature interpretation
 * are heavily represented alongside applied clinical vignettes covering essential
 * diagnosis, systems-based practice, patient safety/quality, and ethics.
 * All vignettes are 100% original; source material used for facts only, never phrasing.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E; only the keyed one starts "Correct")
 */
const USMLE_STEP3D1_B2 = [
  {
    id: "s3-0026",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Sensitivity and specificity from a 2x2 table",
    difficulty: "easy",
    anchor: "table",
    vignette: "A new rapid antigen test for an infection is compared with a reference-standard PCR assay in 500 people. The results are summarized below.\n\n| Test result | Disease present | Disease absent | Total |\n|---|---|---|---|\n| Test positive | 90 | 20 | 110 |\n| Test negative | 10 | 380 | 390 |\n| Total | 100 | 400 | 500 |",
    lead: "In this sample, what is the sensitivity of the rapid antigen test?",
    options: [
      "90%",
      "95%",
      "82%",
      "97%",
      "20%"
    ],
    answer: 0,
    exp: "Sensitivity is the proportion of people with disease who test positive: true positives divided by all diseased people. Here that is 90 / (90 + 10) = 90/100 = 90%. Sensitivity is a property of the test itself and, unlike predictive value, does not vary with disease prevalence.",
    why: [
      "Correct: sensitivity = true positives / all diseased = 90/100 = 90%.",
      "This is the specificity (380/400), the proportion of healthy people who test negative.",
      "This is the positive predictive value (90/110), which depends on prevalence.",
      "This is the negative predictive value (380/390), not the sensitivity.",
      "This is the disease prevalence (100/500), not a test-performance measure."
    ]
  },
  {
    id: "s3-0027",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Positive likelihood ratio",
    difficulty: "hard",
    anchor: "table",
    vignette: "A diagnostic study characterizes a serum biomarker against a gold-standard reference. The validated test-performance characteristics are shown below.\n\n| Characteristic | Value |\n|---|---|\n| Sensitivity | 80% |\n| Specificity | 90% |",
    lead: "What is the positive likelihood ratio of this biomarker?",
    options: [
      "0.22",
      "8.0",
      "4.0",
      "0.13",
      "1.0"
    ],
    answer: 1,
    exp: "The positive likelihood ratio equals sensitivity divided by (1 - specificity): 0.80 / (1 - 0.90) = 0.80 / 0.10 = 8.0. A positive likelihood ratio near 8-10 produces a moderate-to-large increase in the post-test probability of disease when the test is positive. Likelihood ratios combine sensitivity and specificity and, unlike predictive values, are independent of prevalence.",
    why: [
      "This is the negative likelihood ratio, (1 - sensitivity)/specificity = 0.20/0.90 = 0.22.",
      "Correct: positive likelihood ratio = sensitivity / (1 - specificity) = 0.80/0.10 = 8.0.",
      "This would result from dividing sensitivity by specificity rather than by (1 - specificity).",
      "This misplaces the numerator and denominator of the likelihood-ratio formula.",
      "A likelihood ratio of 1 means the test does not change the probability of disease, which is not the case here."
    ]
  },
  {
    id: "s3-0028",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Hazard ratio from a survival analysis",
    difficulty: "hard",
    anchor: "table",
    vignette: "A randomized trial compares a new chemotherapy regimen with the standard regimen for overall survival in advanced cancer. The time-to-event analysis reports the following primary result.\n\n| Outcome | Hazard ratio (new vs standard) | 95% confidence interval | p-value |\n|---|---|---|---|\n| Death | 0.70 | 0.55 - 0.88 | 0.003 |",
    lead: "Which of the following statements best interprets this result?",
    options: [
      "The new regimen increases the rate of death by about 30%.",
      "The result is not statistically significant because the interval is wide.",
      "The new regimen reduces the hazard (rate) of death by about 30%, and the result is statistically significant.",
      "Exactly 70% of patients on the new regimen survived the study period.",
      "The hazard ratio proves the two regimens are equivalent."
    ],
    answer: 2,
    exp: "A hazard ratio of 0.70 means that at any given moment the instantaneous rate of death in the new-regimen group is 0.70 times that of the standard group, a roughly 30% relative reduction. Because the entire 95% confidence interval lies below 1.0 (and p = 0.003), the effect is statistically significant. A hazard ratio describes the relative rate of events over time, not the absolute proportion of patients who survived.",
    why: [
      "A hazard ratio below 1.0 indicates a reduced, not increased, rate of the event.",
      "The interval (0.55-0.88) excludes 1.0 and the p-value is 0.003, so the result is statistically significant.",
      "Correct: a hazard ratio of 0.70 is about a 30% relative reduction in the death rate, and the confidence interval excluding 1.0 confirms significance.",
      "A hazard ratio is a relative rate, not the proportion of patients surviving.",
      "Equivalence would require a hazard ratio near 1.0 with an interval spanning it, which is not the case."
    ]
  },
  {
    id: "s3-0029",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Odds ratio in a case-control study",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A case-control study investigates whether recent nonsteroidal anti-inflammatory drug (NSAID) use is associated with upper gastrointestinal bleeding. Investigators enroll 100 cases with bleeding and 100 controls without and ascertain prior NSAID exposure.\n\n| Exposure | Cases (bleed) | Controls (no bleed) |\n|---|---|---|\n| NSAID use | 40 | 25 |\n| No NSAID use | 60 | 75 |",
    lead: "What is the odds ratio for the association between NSAID use and gastrointestinal bleeding?",
    options: [
      "0.50",
      "1.60",
      "0.63",
      "2.00",
      "1.33"
    ],
    answer: 3,
    exp: "In a case-control study the appropriate measure of association is the odds ratio, calculated as (a x d) / (b x c) from the 2x2 table: (40 x 75) / (25 x 60) = 3000 / 1500 = 2.0. Because participants are selected on outcome status, incidence and relative risk cannot be computed directly, so the odds ratio is used and approximates the relative risk when the outcome is rare.",
    why: [
      "This is the reciprocal of the correct odds ratio and reverses the exposure-outcome direction.",
      "This does not match the cross-product calculation from the table.",
      "This is another inverted value and does not reflect the odds of exposure among cases versus controls.",
      "Correct: odds ratio = (40 x 75) / (25 x 60) = 3000/1500 = 2.0.",
      "This value would arise from an incorrect pairing of the table cells."
    ]
  },
  {
    id: "s3-0030",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Intention-to-treat analysis",
    difficulty: "moderate",
    anchor: null,
    vignette: "In a randomized trial of a new oral drug versus placebo, 12% of patients assigned to the drug never took it and several switched to placebo because of side effects. The investigators want to analyze the results in the way that best preserves the benefits of randomization and minimizes bias.",
    lead: "Which analytic approach best meets this goal?",
    options: [
      "Analyze only patients who fully adhered to their assigned drug (per-protocol).",
      "Analyze patients according to the treatment they actually received (as-treated).",
      "Exclude all nonadherent patients from the analysis entirely.",
      "Analyze only a subgroup of patients who tolerated the drug well.",
      "Analyze all patients in the groups to which they were originally randomized (intention-to-treat)."
    ],
    answer: 4,
    exp: "An intention-to-treat analysis keeps every randomized participant in the group to which they were assigned, regardless of adherence or crossover. This preserves the baseline comparability created by randomization, protects against attrition and selection bias, and gives a more conservative, real-world estimate of effectiveness. Per-protocol and as-treated analyses break randomization and can exaggerate benefit.",
    why: [
      "A per-protocol analysis excludes nonadherent patients and breaks the randomization, potentially biasing the estimate.",
      "An as-treated analysis groups patients by actual treatment and discards the protection randomization provides.",
      "Excluding nonadherent patients introduces selection bias and undermines the randomized comparison.",
      "Analyzing only a tolerant subgroup is a biased selection that no longer reflects randomized groups.",
      "Correct: intention-to-treat analysis keeps patients in their randomized groups, preserving randomization and limiting bias."
    ]
  },
  {
    id: "s3-0031",
    system: "Preventive Medicine & Ethics",
    discipline: "Epidemiology",
    topic: "Attack rate in an outbreak investigation",
    difficulty: "moderate",
    anchor: "table",
    vignette: "Public health officials investigate a gastroenteritis outbreak after a catered banquet. For one implicated dish, potato salad, they tabulate illness among attendees according to whether they ate the dish.\n\n| Potato salad | Became ill | Remained well | Total |\n|---|---|---|---|\n| Ate | 150 | 50 | 200 |\n| Did not eat | 20 | 180 | 200 |",
    lead: "What is the attack rate of illness among attendees who ate the potato salad?",
    options: [
      "75%",
      "30%",
      "50%",
      "10%",
      "88%"
    ],
    answer: 0,
    exp: "An attack rate is the proportion of an exposed group that develops illness during a defined outbreak period: ill persons divided by the total exposed. For potato-salad eaters this is 150 / 200 = 75%. Comparing this with the attack rate among those who did not eat the dish (20/200 = 10%) points to potato salad as a likely vehicle of the outbreak.",
    why: [
      "Correct: attack rate = ill exposed / total exposed = 150/200 = 75%.",
      "This does not correspond to any group's attack rate in the table.",
      "This would be the overall proportion ill only if the groups were combined incorrectly.",
      "This is the attack rate among those who did NOT eat the potato salad (20/200), not the exposed group.",
      "This value does not match the exposed group's illness proportion."
    ]
  },
  {
    id: "s3-0032",
    system: "Preventive Medicine & Ethics",
    discipline: "Ethics",
    topic: "Assessing decision-making capacity",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 72-year-old man with diabetes and progressing foot gangrene declines the recommended below-knee amputation. He is alert and not delirious. The surgical team is unsure how to proceed and asks whether his refusal should be honored.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Ask a court to declare him incompetent before doing anything else.",
      "Assess his capacity by evaluating whether he understands the situation, appreciates the consequences, reasons about options, and can express a choice.",
      "Obtain consent from his adult children and proceed with surgery.",
      "Place him on an involuntary psychiatric hold for refusing care.",
      "Honor the refusal immediately without any assessment."
    ],
    answer: 1,
    exp: "Before accepting or overriding a treatment refusal, the physician must assess decision-making capacity, which is decision-specific and clinical (as opposed to competence, a global legal determination made by a court). Capacity requires that the patient understand the relevant information, appreciate how it applies to their situation, reason through the options, and communicate a consistent choice. A capable patient may refuse even life-saving surgery.",
    why: [
      "Competence is a legal judgment for a court; the immediate clinical task is a capacity assessment, and going to court first is premature.",
      "Correct: capacity is assessed clinically through understanding, appreciation, reasoning, and the ability to express a choice, and it is decision-specific.",
      "Surrogate consent applies only after the patient is found to lack capacity, which has not yet been assessed.",
      "Refusing recommended care is not itself grounds for a psychiatric hold; capacity must be evaluated first.",
      "Honoring the refusal without confirming capacity risks missing a reversible impairment of judgment."
    ]
  },
  {
    id: "s3-0033",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Mandatory reporting of a communicable disease",
    difficulty: "easy",
    anchor: null,
    vignette: "A 40-year-old man is newly diagnosed with sputum-smear-positive active pulmonary tuberculosis. He is started on therapy and asks the physician to keep the diagnosis strictly private and not tell anyone.",
    lead: "Which of the following is the most appropriate action regarding reporting?",
    options: [
      "Maintain complete confidentiality and do not report the case.",
      "Report the case only if the patient gives written permission.",
      "Report the case to the public health department as required by law.",
      "Notify only the patient's employer about the diagnosis.",
      "Take no action because the patient is already receiving treatment."
    ],
    answer: 2,
    exp: "Active tuberculosis is a nationally notifiable communicable disease, and clinicians are legally required to report cases to the public health department. Mandatory reporting is a recognized ethical and legal exception to patient confidentiality that enables contact tracing, directly observed therapy, and protection of public health. The reporting duty does not depend on patient consent.",
    why: [
      "Confidentiality yields to the legal reporting requirement for a notifiable communicable disease.",
      "Reporting of tuberculosis is mandatory and does not require the patient's permission.",
      "Correct: active tuberculosis must be reported to the public health department as a notifiable disease.",
      "Public health reporting goes to the health department for contact tracing, not to the employer.",
      "Ongoing treatment does not remove the legal obligation to report the case."
    ]
  },
  {
    id: "s3-0034",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Outpatient community-acquired pneumonia",
    difficulty: "easy",
    anchor: null,
    vignette: "A previously healthy 38-year-old woman presents with 3 days of fever, productive cough, and pleuritic chest pain. She has focal crackles at the right base and a chest radiograph confirms a lobar infiltrate. She is well-appearing, with normal mental status, blood pressure, and oxygen saturation, and has no comorbidities (CURB-65 score of 0).",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Admit to the intensive care unit for monitoring.",
      "Begin intravenous vancomycin for resistant organisms.",
      "Withhold antibiotics because the illness is viral.",
      "Treat as an outpatient with oral antibiotics such as amoxicillin or doxycycline.",
      "Start empiric antifungal therapy."
    ],
    answer: 3,
    exp: "A healthy young adult with community-acquired pneumonia and a CURB-65 score of 0 is low risk and can be treated as an outpatient. Guideline-based options for an otherwise healthy patient without comorbidities include oral amoxicillin, doxycycline, or a macrolide. Hospitalization, broad intravenous or antifungal therapy is unnecessary and would represent overtreatment.",
    why: [
      "ICU admission is reserved for severe pneumonia with respiratory failure or shock, not a low-risk patient.",
      "Empiric vancomycin targets resistant gram-positive organisms not suggested in a low-risk outpatient.",
      "The lobar infiltrate with fever and productive cough indicates a treatable bacterial pneumonia.",
      "Correct: a low-risk patient (CURB-65 of 0) is appropriately treated as an outpatient with oral antibiotics such as amoxicillin or doxycycline.",
      "There is no indication of a fungal infection in an immunocompetent, low-risk patient."
    ]
  },
  {
    id: "s3-0035",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Stroke prevention in atrial fibrillation",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 74-year-old woman is found to have new nonvalvular atrial fibrillation on a routine ECG. She has a history of hypertension and type 2 diabetes but no prior stroke and no bleeding history. Her clinical risk factors are summarized below.\n\n| CHA2DS2-VASc factor | Present |\n|---|---|\n| Congestive heart failure | No |\n| Hypertension | Yes |\n| Age 65-74 | Yes |\n| Diabetes | Yes |\n| Prior stroke/TIA | No |\n| Vascular disease | No |\n| Female sex | Yes |",
    lead: "Which of the following is the most appropriate long-term antithrombotic strategy?",
    options: [
      "Low-dose aspirin alone.",
      "No antithrombotic therapy.",
      "Clopidogrel alone.",
      "Aspirin plus clopidogrel.",
      "Oral anticoagulation with a direct oral anticoagulant."
    ],
    answer: 4,
    exp: "Her CHA2DS2-VASc score sums to 4 (hypertension 1, age 65-74 1, diabetes 1, female sex 1), well above the threshold at which oral anticoagulation is recommended for nonvalvular atrial fibrillation. A direct oral anticoagulant is preferred over warfarin for most such patients. Antiplatelet therapy is substantially less effective than anticoagulation for preventing cardioembolic stroke.",
    why: [
      "Aspirin alone provides inferior stroke protection compared with anticoagulation at this risk level.",
      "Withholding therapy is inappropriate given a CHA2DS2-VASc score of 4.",
      "Clopidogrel monotherapy is not an adequate substitute for anticoagulation in atrial fibrillation.",
      "Dual antiplatelet therapy raises bleeding risk without matching anticoagulation's efficacy for cardioembolic stroke.",
      "Correct: a CHA2DS2-VASc score of 4 warrants oral anticoagulation, and a direct oral anticoagulant is first-line for nonvalvular atrial fibrillation."
    ]
  },
  {
    id: "s3-0036",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "COPD exacerbation",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 66-year-old man with chronic obstructive pulmonary disease and a long smoking history presents with 2 days of increased dyspnea, increased sputum volume, and new sputum purulence. He has diffuse wheezing and prolonged expiration but is alert with an oxygen saturation of 88% on room air.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Inhaled short-acting bronchodilators, systemic corticosteroids, antibiotics, and controlled supplemental oxygen.",
      "High-flow 100% oxygen to rapidly normalize the oxygen saturation.",
      "Immediate endotracheal intubation.",
      "Intravenous beta-blocker therapy.",
      "Aggressive diuresis with a loop diuretic."
    ],
    answer: 0,
    exp: "An acute COPD exacerbation with the cardinal features of increased dyspnea, sputum volume, and purulence is treated with inhaled short-acting bronchodilators, a course of systemic corticosteroids, and antibiotics when purulence is present. Oxygen should be titrated to a target saturation of about 88-92% to avoid worsening hypercapnia. Intubation is reserved for those failing initial therapy or with respiratory failure.",
    why: [
      "Correct: bronchodilators, systemic corticosteroids, antibiotics for purulent sputum, and carefully controlled oxygen are the core treatment of a COPD exacerbation.",
      "High-flow oxygen to normalize saturation can worsen CO2 retention; the target is roughly 88-92%.",
      "This alert patient responsive to medical therapy does not require immediate intubation.",
      "Beta-blockers can provoke bronchospasm and do not treat the exacerbation.",
      "Diuresis treats volume overload, not the airflow obstruction of a COPD exacerbation."
    ]
  },
  {
    id: "s3-0037",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Syndrome of inappropriate antidiuretic hormone secretion",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 68-year-old man with newly diagnosed small cell lung cancer is admitted with mild confusion and headache. He is clinically euvolemic, with no edema and normal blood pressure, and takes no diuretics. Thyroid and adrenal function are normal.\n\n| Test | Value | Reference |\n|---|---|---|\n| Serum sodium | 122 mEq/L | 135-145 |\n| Serum osmolality | 255 mOsm/kg | 275-295 |\n| Urine osmolality | 480 mOsm/kg | - |\n| Urine sodium | 60 mEq/L | - |",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Rapid infusion of large-volume isotonic saline boluses.",
      "Fluid restriction while treating the underlying malignancy.",
      "Rapid full correction of the sodium to normal within a few hours.",
      "Administer desmopressin.",
      "Loop diuretic therapy as the sole intervention."
    ],
    answer: 1,
    exp: "Euvolemic hypotonic hyponatremia with concentrated urine (urine osmolality > serum) and elevated urine sodium, once thyroid and adrenal causes are excluded, indicates the syndrome of inappropriate antidiuretic hormone secretion, here paraneoplastic from small cell lung cancer. Initial management of mild, chronic SIADH is fluid restriction plus treatment of the underlying cause. Sodium must be corrected slowly to avoid osmotic demyelination.",
    why: [
      "In SIADH the kidneys retain water and excrete the sodium, so isotonic saline can paradoxically worsen the hyponatremia.",
      "Correct: fluid restriction with treatment of the underlying malignancy is the appropriate initial approach to mild, chronic SIADH.",
      "Overly rapid correction of chronic hyponatremia risks osmotic demyelination syndrome.",
      "Desmopressin is an antidiuretic and would worsen water retention and hyponatremia.",
      "A loop diuretic may be adjunctive but is not appropriate as the sole initial therapy."
    ]
  },
  {
    id: "s3-0038",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Non-ST-elevation acute coronary syndrome",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 61-year-old man with hypertension and hyperlipidemia presents with 40 minutes of ongoing substernal chest pressure radiating to the left arm. He is diaphoretic but hemodynamically stable. The ECG shows ST-segment depressions in the lateral leads without ST elevation.\n\n| Test | Value | Reference |\n|---|---|---|\n| Troponin (high-sensitivity) | markedly elevated | below cutoff |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Administer fibrinolytic (thrombolytic) therapy immediately.",
      "Discharge home with outpatient stress testing in 2 weeks.",
      "Give aspirin plus a second antiplatelet agent and anticoagulation, and admit for risk stratification with an early invasive strategy.",
      "Treat empirically with antibiotics for suspected pericarditis.",
      "Provide reassurance and observe without cardiac therapy."
    ],
    answer: 2,
    exp: "Ischemic chest pain with ST depression and a rising troponin defines a non-ST-elevation acute coronary syndrome (NSTEMI). Management includes antiplatelet therapy (aspirin plus a P2Y12 inhibitor), anticoagulation, anti-ischemic therapy, and admission with risk stratification and typically an early invasive (angiographic) strategy. Fibrinolytics are indicated for ST-elevation MI, not for NSTEMI, where they offer no benefit and add bleeding risk.",
    why: [
      "Fibrinolytics benefit ST-elevation MI but are not indicated and may be harmful in NSTEMI.",
      "Discharging a patient with ongoing ischemia and a positive troponin is unsafe.",
      "Correct: NSTEMI is treated with dual antiplatelet therapy, anticoagulation, and admission for risk stratification and an early invasive strategy.",
      "The picture is ischemic coronary disease, not an infection requiring antibiotics.",
      "Observation without therapy neglects an acute coronary syndrome with a positive biomarker."
    ]
  },
  {
    id: "s3-0039",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Diabetic ketoacidosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 24-year-old woman with type 1 diabetes presents with 1 day of nausea, vomiting, and abdominal pain after missing insulin doses during a viral illness. She is breathing deeply and rapidly, and her mucous membranes are dry.\n\n| Test | Value | Reference |\n|---|---|---|\n| Glucose | 480 mg/dL | 70-99 |\n| Arterial pH | 7.15 | 7.35-7.45 |\n| Bicarbonate | 10 mEq/L | 22-28 |\n| Serum ketones | strongly positive | negative |\n| Potassium | 5.2 mEq/L | 3.5-5.0 |",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "An intravenous insulin bolus alone without fluid resuscitation.",
      "Intravenous sodium bicarbonate as the primary therapy.",
      "Oral hydration and metformin.",
      "Intravenous isotonic fluids and an insulin infusion, with close potassium monitoring and repletion.",
      "Withhold all insulin until the potassium falls below normal, giving no fluids."
    ],
    answer: 3,
    exp: "Diabetic ketoacidosis is treated with aggressive isotonic fluid resuscitation, a continuous insulin infusion to close the anion gap, and careful potassium monitoring, because total-body potassium is depleted even when the serum level is normal or high and will fall rapidly as insulin drives potassium into cells. Insulin is generally held only if potassium is below about 3.3 mEq/L until it is repleted. Bicarbonate is reserved for severe acidemia.",
    why: [
      "Insulin without concurrent fluid resuscitation fails to correct the profound volume depletion of DKA.",
      "Bicarbonate is not primary therapy and is reserved for severe acidemia (pH well below this level).",
      "Oral therapy and metformin cannot correct acute ketoacidosis and volume depletion.",
      "Correct: isotonic fluids plus an insulin infusion with close potassium monitoring and repletion is the cornerstone of DKA management.",
      "Insulin is withheld only when potassium is dangerously low (below ~3.3 mEq/L), and fluids must not be withheld."
    ]
  },
  {
    id: "s3-0040",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Simple febrile seizure",
    difficulty: "easy",
    anchor: null,
    vignette: "An 18-month-old previously healthy boy has a single generalized tonic-clonic seizure lasting about 2 minutes during a febrile viral illness. By the time he reaches the clinic he is back to his baseline, interactive and consolable, with a normal neurologic examination and no signs of meningitis.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Start a long-term antiepileptic medication.",
      "Obtain an urgent CT scan of the head.",
      "Obtain an electroencephalogram before discharge.",
      "Perform a routine lumbar puncture.",
      "Provide reassurance and treat the underlying febrile illness, without routine neuroimaging, EEG, or lumbar puncture."
    ],
    answer: 4,
    exp: "A simple febrile seizure is a brief (< 15 minutes), generalized, single seizure within 24 hours in a neurologically normal child aged 6 months to 5 years during a fever. It is benign, and management is reassurance and treatment of the underlying illness. Routine neuroimaging, EEG, and lumbar puncture are not indicated when the child has returned to baseline without meningeal signs.",
    why: [
      "Long-term antiepileptic therapy is not indicated for a simple febrile seizure.",
      "Neuroimaging is unnecessary for a simple febrile seizure with a normal examination.",
      "An EEG does not alter management of a simple febrile seizure and is not routinely obtained.",
      "Lumbar puncture is reserved for suspected meningitis, which is absent in a child back to baseline.",
      "Correct: reassurance and treating the febrile illness is appropriate, with no routine imaging, EEG, or lumbar puncture."
    ]
  },
  {
    id: "s3-0041",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Kawasaki disease",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 4-year-old boy has had 5 days of high fever. He has bilateral nonexudative conjunctivitis, cracked erythematous lips with a strawberry tongue, a polymorphous truncal rash, erythema and swelling of the hands and feet, and a single enlarged cervical lymph node. Throat culture is negative.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Intravenous immunoglobulin and aspirin, with echocardiography to evaluate the coronary arteries.",
      "Supportive care alone with antipyretics.",
      "A course of oral antibiotics for scarlet fever.",
      "Systemic corticosteroids as sole therapy.",
      "Empiric antiviral therapy."
    ],
    answer: 0,
    exp: "Prolonged fever with conjunctivitis, oral mucosal changes, rash, extremity changes, and cervical lymphadenopathy meets criteria for Kawasaki disease. Prompt treatment with intravenous immunoglobulin and aspirin reduces the risk of coronary artery aneurysms, the major complication, and a baseline echocardiogram assesses the coronary arteries. Delayed treatment increases aneurysm risk.",
    why: [
      "Correct: IVIG plus aspirin with echocardiography is the standard treatment of Kawasaki disease to prevent coronary aneurysms.",
      "Supportive care alone leaves the child at risk for coronary artery aneurysms.",
      "The negative throat culture and clinical picture point to Kawasaki disease, not scarlet fever.",
      "Corticosteroids are adjuncts in selected refractory cases, not first-line monotherapy.",
      "Kawasaki disease is a vasculitis, not a primary viral infection treated with antivirals."
    ]
  },
  {
    id: "s3-0042",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Neonatal hyperbilirubinemia",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A term newborn is brought in on day 3 of life with visible jaundice extending to the chest. He is feeding and voiding well and is otherwise well-appearing with a normal examination.\n\n| Test | Value |\n|---|---|\n| Total serum bilirubin | 18 mg/dL (above the phototherapy threshold for age in hours) |\n| Direct (conjugated) bilirubin | 0.4 mg/dL |\n| Direct antiglobulin (Coombs) test | negative |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Observation with a repeat bilirubin in 1 week.",
      "Initiate phototherapy.",
      "Perform an immediate exchange transfusion.",
      "Administer intravenous immunoglobulin.",
      "Permanently discontinue breastfeeding."
    ],
    answer: 1,
    exp: "An unconjugated hyperbilirubinemia that exceeds the age-in-hours phototherapy threshold is treated with phototherapy, which converts bilirubin to water-soluble isomers that can be excreted. Exchange transfusion is reserved for very high levels or signs of acute bilirubin encephalopathy. The low direct bilirubin and negative Coombs test point to common physiologic or breastfeeding-related jaundice rather than hemolytic disease.",
    why: [
      "Waiting a week is unsafe when the bilirubin already exceeds the phototherapy threshold.",
      "Correct: a bilirubin above the phototherapy threshold for age is treated with phototherapy.",
      "Exchange transfusion is reserved for markedly higher levels or acute bilirubin encephalopathy.",
      "IVIG is used for isoimmune hemolytic disease, which the negative Coombs test makes unlikely.",
      "Breastfeeding rarely needs to be stopped, and permanent discontinuation is not indicated."
    ]
  },
  {
    id: "s3-0043",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Ectopic pregnancy",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 27-year-old woman with 7 weeks of amenorrhea presents with unilateral lower abdominal pain and light vaginal spotting. She is hemodynamically stable with a soft, mildly tender abdomen and no rebound.\n\n| Finding | Result |\n|---|---|\n| Serum beta-hCG | 2,600 mIU/mL (above the discriminatory threshold) |\n| Transvaginal ultrasound | no intrauterine gestational sac; small right adnexal mass |\n| Hemodynamics | stable, no free-fluid evidence of rupture |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Expectant management with a repeat beta-hCG in 1 week only.",
      "Immediate exploratory laparotomy with salpingectomy.",
      "Methotrexate medical therapy.",
      "Dilation and curettage of the uterus.",
      "Reassurance that this represents a normal early pregnancy."
    ],
    answer: 2,
    exp: "A beta-hCG above the discriminatory zone with no intrauterine pregnancy on transvaginal ultrasound and an adnexal mass indicates an ectopic pregnancy. In a hemodynamically stable patient with an unruptured, small ectopic and no contraindications, methotrexate offers effective medical management and preserves the tube. Surgery is required for rupture, hemodynamic instability, or failed or contraindicated medical therapy.",
    why: [
      "Purely expectant management is inappropriate once an ectopic is diagnosed with a mass and hCG above the discriminatory level.",
      "Emergency surgery is reserved for rupture or instability, which are absent here.",
      "Correct: a stable, unruptured ectopic meeting criteria is appropriately managed with methotrexate.",
      "Uterine curettage does not treat a pregnancy implanted outside the uterus.",
      "The absence of an intrauterine sac with hCG above the discriminatory level makes a normal pregnancy unlikely."
    ]
  },
  {
    id: "s3-0044",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Postpartum hemorrhage from uterine atony",
    difficulty: "moderate",
    anchor: null,
    vignette: "Shortly after a vaginal delivery following a prolonged labor, a 30-year-old woman has brisk, continuous vaginal bleeding. On examination the uterine fundus is soft, boggy, and poorly contracted. The placenta was delivered intact and there are no visible cervical or vaginal lacerations.",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Proceed directly to emergency hysterectomy.",
      "Observe and recheck the bleeding in 30 minutes.",
      "Give tranexamic acid alone without addressing the uterine tone.",
      "Perform bimanual uterine massage and administer uterotonic agents such as oxytocin.",
      "Start broad-spectrum intravenous antibiotics."
    ],
    answer: 3,
    exp: "Uterine atony is the most common cause of early postpartum hemorrhage, and a soft, boggy uterus after an intact placental delivery points to it. Initial management is bimanual uterine massage plus uterotonic medication (oxytocin first-line, with agents such as methylergonovine, carboprost, or misoprostol as needed), along with fluid resuscitation. Hysterectomy is a last resort after conservative measures fail.",
    why: [
      "Hysterectomy is a last resort, not the initial step, for atony that usually responds to massage and uterotonics.",
      "Active brisk hemorrhage requires immediate intervention, not watchful waiting.",
      "Tranexamic acid is adjunctive and does not correct the underlying atony causing the bleeding.",
      "Correct: bimanual massage plus uterotonics (oxytocin first-line) is the initial treatment of hemorrhage from uterine atony.",
      "Antibiotics treat infection, not the acute bleeding from a poorly contracted uterus."
    ]
  },
  {
    id: "s3-0045",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Gestational diabetes screening",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 31-year-old woman at 26 weeks gestation has an elevated 1-hour 50-g glucose challenge test and undergoes a diagnostic 3-hour 100-g oral glucose tolerance test. Her results are shown below.\n\n| Time | Value (mg/dL) | Threshold (mg/dL) |\n|---|---|---|\n| Fasting | 98 | 95 |\n| 1 hour | 190 | 180 |\n| 2 hour | 145 | 155 |\n| 3 hour | 130 | 140 |",
    lead: "Which of the following best describes the diagnosis and next step?",
    options: [
      "The test is normal; no further testing is needed.",
      "Start insulin immediately regardless of diet.",
      "Repeat the 1-hour glucose challenge test in 4 weeks.",
      "This indicates pre-existing type 1 diabetes.",
      "Gestational diabetes; begin medical nutrition therapy and glucose monitoring."
    ],
    answer: 4,
    exp: "On a 3-hour 100-g oral glucose tolerance test, two or more values meeting or exceeding the thresholds establish gestational diabetes; here the fasting (98 >= 95) and 1-hour (190 >= 180) values are abnormal. First-line management is medical nutrition therapy with exercise and self-monitored blood glucose, escalating to insulin (or an accepted oral agent) if glycemic targets are not met.",
    why: [
      "Two values meet or exceed the thresholds, so the test is diagnostic, not normal.",
      "Insulin is added only if lifestyle measures fail to meet glucose targets, not automatically at diagnosis.",
      "Diagnostic testing is already abnormal, so repeating the screening test is not appropriate.",
      "New glucose intolerance in pregnancy is gestational diabetes, not a diagnosis of type 1 diabetes.",
      "Correct: two abnormal values diagnose gestational diabetes, managed first with medical nutrition therapy and glucose monitoring."
    ]
  },
  {
    id: "s3-0046",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Major depressive disorder, first-line treatment",
    difficulty: "easy",
    anchor: null,
    vignette: "A 34-year-old woman reports 6 weeks of depressed mood and loss of interest in her usual activities. She also describes poor sleep, low energy, difficulty concentrating, reduced appetite, and feelings of worthlessness. She has no history of mania, no psychotic symptoms, no active suicidal plan, and no substance use.",
    lead: "Which of the following is the most appropriate initial treatment?",
    options: [
      "A selective serotonin reuptake inhibitor, with or without psychotherapy.",
      "A benzodiazepine as monotherapy.",
      "An antipsychotic as monotherapy.",
      "No treatment, with observation only.",
      "A stimulant medication."
    ],
    answer: 0,
    exp: "At least 2 weeks of depressed mood or anhedonia plus several neurovegetative and cognitive symptoms meets criteria for major depressive disorder. First-line treatment is an antidepressant such as a selective serotonin reuptake inhibitor, evidence-based psychotherapy, or their combination. Benzodiazepines, antipsychotic monotherapy, and stimulants are not first-line for uncomplicated major depression.",
    why: [
      "Correct: an SSRI, alone or combined with psychotherapy, is first-line for major depressive disorder.",
      "Benzodiazepine monotherapy does not treat the underlying depression and carries dependence risk.",
      "Antipsychotic monotherapy is not first-line for major depression without psychotic features.",
      "Clinically significant depression warrants treatment rather than observation alone.",
      "Stimulants are not standard first-line therapy for major depressive disorder."
    ]
  },
  {
    id: "s3-0047",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Delirium in a hospitalized patient",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 78-year-old man is 2 days out from hip surgery when nurses note that he is acutely confused, with fluctuating attention that worsens in the evening. He is disoriented and intermittently agitated. He is on several sedating medications and has a urinary catheter, and his workup reveals a urinary tract infection.",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Begin a long-term antipsychotic medication.",
      "Identify and treat the underlying causes and use supportive nonpharmacologic measures.",
      "Apply physical restraints as the first-line intervention.",
      "Administer a benzodiazepine for routine sedation.",
      "Discharge the patient home to reduce disorientation."
    ],
    answer: 1,
    exp: "Acute onset of fluctuating confusion with inattention is delirium, which is typically multifactorial. Management centers on identifying and correcting the underlying causes (here treating the infection, removing the catheter, and minimizing sedating and anticholinergic medications) plus nonpharmacologic supportive measures such as reorientation, sleep hygiene, and mobilization. Antipsychotics are reserved for severe agitation posing a safety risk.",
    why: [
      "Delirium is treated by addressing its causes; a long-term antipsychotic is not first-line and carries risks in older adults.",
      "Correct: treating the underlying causes and providing nonpharmacologic support is the cornerstone of delirium management.",
      "Restraints can worsen agitation and injury and are not a first-line intervention.",
      "Benzodiazepines generally worsen delirium (except in alcohol or sedative withdrawal).",
      "Discharging an acutely delirious postoperative patient is unsafe and does not address the cause."
    ]
  },
  {
    id: "s3-0048",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Acute ischemic stroke thrombolysis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 62-year-old man is brought in after the sudden onset of right-sided weakness and difficulty speaking that began 90 minutes ago. His blood pressure is 168/92 mm Hg, blood glucose is normal, and he has no recent surgery, bleeding, or anticoagulant use.\n\n**[IMAGE: noncontrast head CT showing no intracranial hemorrhage and no large established infarct]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Give aspirin only and do not consider thrombolysis.",
      "Wait and repeat the CT scan in 24 hours before acting.",
      "Administer intravenous thrombolytic therapy.",
      "Start a full-dose intravenous heparin infusion.",
      "Aggressively lower the blood pressure to normal and then observe."
    ],
    answer: 2,
    exp: "The presentation is an acute ischemic stroke within the treatment window, and the noncontrast CT has excluded hemorrhage, the key contraindication. With no other contraindications and blood pressure below the treatment threshold, intravenous thrombolysis should be given promptly, as benefit is highly time-dependent. Aspirin is deferred for about 24 hours after thrombolysis, and aggressive blood-pressure lowering is avoided in acute ischemic stroke.",
    why: [
      "Aspirin alone forgoes the greater benefit of thrombolysis in an eligible patient within the window.",
      "Delaying to repeat imaging wastes the narrow, time-critical treatment window.",
      "Correct: with hemorrhage excluded and no contraindications within the window, intravenous thrombolysis is indicated.",
      "Full-dose heparin is not standard acute therapy and increases hemorrhage risk.",
      "Aggressive blood-pressure reduction can worsen cerebral perfusion in acute ischemic stroke."
    ]
  },
  {
    id: "s3-0049",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Acetaminophen overdose",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 19-year-old woman is brought in 5 hours after intentionally ingesting a large quantity of acetaminophen tablets. She currently has only mild nausea and a normal examination. A timed serum acetaminophen level is drawn.\n\n| Test | Result |\n|---|---|\n| Serum acetaminophen (timed) | plots above the treatment line on the Rumack-Matthew nomogram |\n| Aminotransferases | currently normal |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Give a single dose of activated charcoal and discharge.",
      "Arrange emergent hemodialysis as first-line therapy.",
      "Observe and recheck liver enzymes in 1 week.",
      "Administer N-acetylcysteine.",
      "Administer flumazenil."
    ],
    answer: 3,
    exp: "When a timed acetaminophen level plots above the treatment line on the Rumack-Matthew nomogram, N-acetylcysteine is indicated to prevent hepatotoxicity, and it is most effective when started early, well before transaminases rise. N-acetylcysteine replenishes glutathione and detoxifies the reactive metabolite NAPQI. Normal liver enzymes at presentation do not defer treatment, because injury is delayed.",
    why: [
      "Charcoal is most useful very early and does not treat an already-absorbed toxic level; discharge would be dangerous.",
      "Hemodialysis is not first-line for acetaminophen toxicity; the antidote is N-acetylcysteine.",
      "Waiting a week ignores a toxic level and risks progression to fulminant hepatic failure.",
      "Correct: a level above the nomogram treatment line warrants N-acetylcysteine to prevent hepatotoxicity.",
      "Flumazenil reverses benzodiazepines and has no role in acetaminophen poisoning."
    ]
  },
  {
    id: "s3-0050",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Acute cholecystitis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 48-year-old woman presents with 8 hours of constant right upper quadrant pain that began after a fatty meal, now with fever and nausea. On examination she has right upper quadrant tenderness with inspiratory arrest on palpation (a positive Murphy sign), and her white blood cell count is elevated.\n\n**[IMAGE: right upper quadrant ultrasound showing gallstones, a thickened gallbladder wall, and pericholecystic fluid]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Discharge with antacids and dietary advice.",
      "Perform urgent ERCP as the first step.",
      "Observe indefinitely and avoid any surgery.",
      "Arrange colonoscopy.",
      "Admit for intravenous fluids, antibiotics, and analgesia, and plan early laparoscopic cholecystectomy."
    ],
    answer: 4,
    exp: "Right upper quadrant pain with fever, a positive Murphy sign, leukocytosis, and ultrasound showing gallstones, wall thickening, and pericholecystic fluid indicates acute cholecystitis. Management is admission with intravenous fluids, antibiotics, and analgesia, followed by early laparoscopic cholecystectomy, which is preferred over delayed surgery. ERCP is used when there is concurrent choledocholithiasis or cholangitis, which are not indicated here.",
    why: [
      "Discharge with antacids ignores an acute infectious and inflammatory process requiring admission.",
      "ERCP addresses common bile duct stones or cholangitis, which are not demonstrated in this case.",
      "Indefinite observation is inappropriate; cholecystitis is definitively treated with cholecystectomy.",
      "Colonoscopy evaluates the colon and is unrelated to acute gallbladder disease.",
      "Correct: acute cholecystitis is managed with fluids, antibiotics, and analgesia, followed by early laparoscopic cholecystectomy."
    ]
  }
];
