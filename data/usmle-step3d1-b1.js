/*
 * Rounds Codex - USMLE Step 3, Day 1 (Foundations of Independent Practice) bank, Batch 1 (25 items)
 * PILOT batch. Day-1-FIP blueprint: biostatistics/epidemiology and medical-literature
 * interpretation are heavily represented alongside applied clinical vignettes covering
 * essential diagnosis, systems-based practice, patient safety/quality, and ethics.
 * All vignettes are 100% original; source material used for facts only, never phrasing.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E; only the keyed one starts "Correct")
 */
const USMLE_STEP3D1_B1 = [
  {
    id: "s3-0001",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Relative risk from a cohort study",
    difficulty: "easy",
    anchor: "table",
    vignette: "Investigators follow 400 middle-aged adults for 5 years to study whether cigarette smoking is associated with a first myocardial infarction. None of the participants had cardiovascular disease at enrollment. The observed outcomes are summarized below.\n\n| Group | Developed MI | No MI | Total |\n|---|---|---|---|\n| Smokers | 40 | 160 | 200 |\n| Nonsmokers | 10 | 190 | 200 |",
    lead: "Based on these data, what is the relative risk of myocardial infarction among smokers compared with nonsmokers?",
    options: [
      "0.25",
      "2.0",
      "4.0",
      "8.0",
      "0.20"
    ],
    answer: 2,
    exp: "A cohort study follows exposed and unexposed groups forward in time, so it yields incidence and the relative risk directly. The incidence in smokers is 40/200 = 0.20 and in nonsmokers is 10/200 = 0.05. The relative risk is 0.20 / 0.05 = 4.0, meaning smokers had four times the risk of a first myocardial infarction.",
    why: [
      "This is the reciprocal (nonsmokers versus smokers) and does not answer the question asked.",
      "This underestimates the ratio; the correct incidence-based calculation gives a larger value.",
      "Correct: relative risk equals the incidence in the exposed (0.20) divided by the incidence in the unexposed (0.05), which is 4.0.",
      "This overestimates the ratio and does not match the incidence proportions in the table.",
      "This is the incidence in the exposed group, not a ratio between the two groups."
    ]
  },
  {
    id: "s3-0002",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Absolute risk reduction and number needed to treat",
    difficulty: "hard",
    anchor: "table",
    vignette: "A randomized, double-blind trial tests whether drug X prevents a first cardiovascular event over 1 year compared with placebo in adults with elevated risk. The primary-outcome results are shown below.\n\n| Arm | Patients | Primary events | Event rate |\n|---|---|---|---|\n| Drug X | 1000 | 60 | 6.0% |\n| Placebo | 1000 | 100 | 10.0% |",
    lead: "Approximately how many patients must be treated with drug X for 1 year to prevent one primary event?",
    options: [
      "4",
      "10",
      "16",
      "25",
      "60"
    ],
    answer: 3,
    exp: "The absolute risk reduction is the control event rate minus the experimental event rate: 0.10 - 0.06 = 0.04 (4 percentage points). The number needed to treat is the reciprocal of the absolute risk reduction: 1 / 0.04 = 25. Note that the relative risk reduction here is 40%, a larger-sounding figure that can mislead if the absolute difference is ignored.",
    why: [
      "This is the absolute risk reduction expressed as a percentage, not the number needed to treat.",
      "This is the control-arm event rate as a percentage, not a number needed to treat.",
      "This value would follow from misusing the relative risk reduction rather than the absolute risk reduction.",
      "Correct: NNT = 1 / absolute risk reduction = 1 / 0.04 = 25.",
      "This is the count of events in the treatment arm, not a number needed to treat."
    ]
  },
  {
    id: "s3-0003",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Predictive value from a diagnostic 2x2 table",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A new blood-based screening test for a disease is evaluated against a gold-standard reference in 1000 people. The results are shown below.\n\n| Test result | Disease present | Disease absent | Total |\n|---|---|---|---|\n| Test positive | 80 | 90 | 170 |\n| Test negative | 20 | 810 | 830 |\n| Total | 100 | 900 | 1000 |",
    lead: "In this population, what is the positive predictive value of the test?",
    options: [
      "80%",
      "47%",
      "90%",
      "98%",
      "10%"
    ],
    answer: 1,
    exp: "Positive predictive value is the probability of disease given a positive test: true positives divided by all positives. Here that is 80 / (80 + 90) = 80/170, which is about 47%. Because predictive value depends on prevalence, this figure would change if the disease were more or less common in the tested population.",
    why: [
      "This is the sensitivity (80/100), the proportion of diseased people who test positive, not the predictive value.",
      "Correct: PPV = true positives / all positives = 80/170, approximately 47%.",
      "This is the specificity (810/900), the proportion of healthy people who test negative.",
      "This is the negative predictive value (810/830), not the positive predictive value.",
      "This is the disease prevalence (100/1000), not a predictive value."
    ]
  },
  {
    id: "s3-0004",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Confidence intervals and statistical significance",
    difficulty: "hard",
    anchor: "table",
    vignette: "A cohort study evaluates whether a dietary supplement is associated with recurrent venous thromboembolism. After adjustment for known confounders, the authors report the primary result below.\n\n| Outcome | Adjusted odds ratio | 95% confidence interval | p-value |\n|---|---|---|---|\n| Recurrent VTE | 1.50 | 0.80 - 2.70 | 0.19 |",
    lead: "Which of the following statements best interprets this result?",
    options: [
      "The supplement significantly reduces recurrent thromboembolism.",
      "The supplement significantly increases recurrent thromboembolism.",
      "The result proves that the supplement has no effect on recurrent thromboembolism.",
      "A larger p-value would have provided stronger evidence of an effect.",
      "The association is not statistically significant because the 95% confidence interval crosses 1.0."
    ],
    answer: 4,
    exp: "For a ratio measure such as an odds ratio, a null effect is 1.0; when the 95% confidence interval includes 1.0, the result is not statistically significant, which is consistent with the p-value of 0.19. Failing to reach significance is not the same as proving no effect, since the interval also includes clinically meaningful values above 1. A wider interval and a p-value above 0.05 indicate insufficient evidence to reject the null hypothesis, not confirmation of it.",
    why: [
      "A protective effect would require the entire confidence interval to lie below 1.0, which it does not.",
      "A harmful effect would require the entire interval to lie above 1.0, but the interval crosses 1.0.",
      "Absence of statistical significance does not prove the null; the study simply cannot reject it.",
      "A larger p-value indicates weaker, not stronger, evidence against the null hypothesis.",
      "Correct: because the confidence interval for the odds ratio includes 1.0 (and p > 0.05), the association is not statistically significant."
    ]
  },
  {
    id: "s3-0005",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Confounding versus other threats to validity",
    difficulty: "hard",
    anchor: null,
    vignette: "An observational study reports that adults who drink several cups of coffee daily have a higher incidence of lung cancer than non-coffee-drinkers. When the analysis is stratified by cigarette smoking, the association between coffee and lung cancer disappears within both smokers and nonsmokers. The investigators note that heavy coffee drinkers in this sample were far more likely to be smokers.",
    lead: "Which of the following best explains the originally observed association?",
    options: [
      "Confounding by cigarette smoking",
      "Selection bias from differential loss to follow-up",
      "Recall bias in the reporting of coffee intake",
      "Lead-time bias from earlier detection",
      "Effect modification with no confounding present"
    ],
    answer: 0,
    exp: "Smoking is associated with both the exposure (coffee drinking) and the outcome (lung cancer) and does not lie on the causal pathway between them, which is the definition of a confounder. Because the coffee-cancer association vanishes after stratifying by smoking, smoking was creating a spurious association. Confounding is addressed by stratification, matching, restriction, or multivariable adjustment.",
    why: [
      "Correct: smoking is linked to both coffee intake and lung cancer and is not on the causal pathway, so it confounds the crude association.",
      "Selection bias arises from how participants are enrolled or retained, which is not what the stratified analysis reveals here.",
      "Recall bias affects retrospective exposure reporting and would not be resolved simply by stratifying on smoking.",
      "Lead-time bias applies to screening and survival comparisons, not to this incidence association.",
      "The uniform disappearance of the association across strata indicates confounding, not effect modification."
    ]
  },
  {
    id: "s3-0006",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Screening biases in survival statistics",
    difficulty: "moderate",
    anchor: null,
    vignette: "A hospital introduces a new imaging test that detects a slow-growing cancer earlier than usual. Marketing materials report that patients whose cancer is found by the test have a much higher 5-year survival than patients diagnosed the traditional way. However, the age-adjusted death rate from the cancer in the surrounding population has not changed since the test was introduced.",
    lead: "Which of the following best explains why survival appears improved while mortality is unchanged?",
    options: [
      "The test cures a larger proportion of cancers.",
      "Selection bias in how the control group was assembled.",
      "Confounding by patient age at diagnosis.",
      "Lead-time and length-time bias inflate apparent survival.",
      "The test has unusually high specificity."
    ],
    answer: 3,
    exp: "Detecting a cancer earlier moves the diagnosis date backward without necessarily delaying death, so measured survival time lengthens even if the date of death is unchanged; this is lead-time bias. Screening also preferentially detects slow-growing, indolent tumors that have a better prognosis, which is length-time bias. Because disease-specific mortality in the population is the outcome least distorted by these biases, an unchanged mortality rate signals that the survival gain is largely artifactual.",
    why: [
      "Higher survival statistics do not demonstrate more cures when the underlying mortality rate is flat.",
      "The discrepancy is driven by how screening shifts diagnosis timing and tumor mix, not by control-group assembly.",
      "Age adjustment was already applied to the mortality rate, so residual age confounding does not explain the pattern.",
      "Correct: earlier diagnosis (lead-time bias) and preferential detection of indolent tumors (length-time bias) raise survival without lowering mortality.",
      "High specificity affects false-positive rates, not the survival-versus-mortality discrepancy."
    ]
  },
  {
    id: "s3-0007",
    system: "Preventive Medicine & Ethics",
    discipline: "Patient Safety",
    topic: "Systems response to a medication error",
    difficulty: "easy",
    anchor: null,
    vignette: "On a busy ward, a nurse administers a look-alike, sound-alike medication to the wrong patient because two vials with nearly identical labels were stored in the same bin. The patient is monitored and comes to no lasting harm. The charge nurse asks the physician team how the unit should respond to prevent recurrence.",
    lead: "Which of the following is the most appropriate response?",
    options: [
      "Discipline the individual nurse who administered the drug.",
      "Perform a root cause analysis to identify contributing system factors.",
      "Note the event in the chart and take no further action.",
      "Rely on staff to be more careful in the future.",
      "Report the event only if the patient had been harmed."
    ],
    answer: 1,
    exp: "Modern patient-safety practice treats most errors as the product of system vulnerabilities rather than individual failure. A root cause analysis examines contributing factors such as look-alike labeling and shared storage bins, then drives system fixes like separating and relabeling the products. A just-culture approach reserves individual sanction for reckless behavior, not honest slips within a flawed system.",
    why: [
      "Punishing the individual for a system-driven slip discourages reporting and fails to fix the underlying hazard.",
      "Correct: a root cause analysis identifies the latent system factors (look-alike labels, shared storage) so durable safeguards can be built.",
      "Documenting without analysis leaves the hazard in place for the next patient.",
      "Exhortations to be careful do not remove the labeling and storage conditions that caused the error.",
      "Near misses should be reported and analyzed precisely because they reveal hazards before harm occurs."
    ]
  },
  {
    id: "s3-0008",
    system: "Preventive Medicine & Ethics",
    discipline: "Ethics",
    topic: "Disclosure of a medical error",
    difficulty: "easy",
    anchor: null,
    vignette: "A resident discovers that a patient received twice the intended dose of an anticoagulant because of an ordering mistake. The patient develops a transient nosebleed that resolves without intervention but is otherwise stable. The resident asks the attending how to proceed with the patient and family.",
    lead: "Which of the following is the most appropriate course of action?",
    options: [
      "Withhold the information to avoid causing the patient worry.",
      "Disclose the error only if the patient specifically asks about it.",
      "Refer the decision to the hospital attorney before saying anything.",
      "Document the event in the chart but do not inform the patient.",
      "Disclose the error to the patient honestly and offer an apology."
    ],
    answer: 4,
    exp: "Respect for patient autonomy and the duty of truth-telling require honest, timely disclosure of harmful errors, including those causing only transient harm. Transparent disclosure with an apology, an explanation of what happened, and a plan to prevent recurrence is the ethical standard and also supports trust. Concealment violates the patient's right to information about their own care.",
    why: [
      "Concealment to spare worry paternalistically overrides the patient's right to know about their care.",
      "Waiting for the patient to ask makes honesty contingent on their suspicion and is not adequate disclosure.",
      "Legal consultation may occur, but it should not delay or replace the physician's ethical duty to disclose.",
      "Charting alone does not fulfill the obligation to inform the patient of what happened.",
      "Correct: honest disclosure with an apology and a prevention plan respects autonomy and the duty of truth-telling."
    ]
  },
  {
    id: "s3-0009",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Complete (third-degree) atrioventricular block",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 68-year-old man is brought in after two episodes of syncope. He is lightheaded, and his heart rate is 38/min with a blood pressure of 86/54 mm Hg. He is pale and diaphoretic.\n\n**[ECG: regular P waves and regular QRS complexes at different rates with no consistent PR relationship, indicating atrioventricular dissociation (complete heart block)]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Observe on telemetry and repeat the ECG in the morning.",
      "Administer intravenous metoprolol.",
      "Begin transcutaneous pacing and arrange transvenous pacing.",
      "Administer intravenous adenosine.",
      "Start oral aspirin and discharge with follow-up."
    ],
    answer: 2,
    exp: "The ECG shows complete heart block with atrioventricular dissociation, and the patient is symptomatic and hypotensive. Symptomatic high-grade block requires prompt heart-rate support with transcutaneous pacing (atropine may be tried but is often ineffective in infranodal block) followed by transvenous pacing and evaluation for a permanent pacemaker. Nodal-blocking drugs would worsen the bradycardia.",
    why: [
      "Watchful waiting is unsafe in a hypotensive patient with syncope from complete heart block.",
      "Metoprolol further slows conduction and would deepen the bradycardia and hypotension.",
      "Correct: symptomatic complete heart block warrants immediate transcutaneous pacing bridged to transvenous pacing and a permanent pacemaker.",
      "Adenosine slows atrioventricular conduction and is used for supraventricular tachycardia, not bradycardia.",
      "Aspirin and discharge ignore a life-threatening conduction disturbance."
    ]
  },
  {
    id: "s3-0010",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Primary hyperparathyroidism",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 57-year-old woman is found to have an elevated calcium level on routine testing. She reports mild fatigue and constipation but is otherwise well. She takes no calcium or vitamin D supplements and has normal kidney function.\n\n| Test | Value | Reference |\n|---|---|---|\n| Calcium | 12.6 mg/dL | 8.5-10.5 |\n| Parathyroid hormone | 98 pg/mL | 15-65 |\n| Phosphate | 2.2 mg/dL | 2.5-4.5 |\n| 25-hydroxyvitamin D | normal | - |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Primary hyperparathyroidism",
      "Malignancy-associated hypercalcemia from PTH-related peptide",
      "Vitamin D toxicity",
      "Milk-alkali syndrome",
      "Familial hypocalciuric hypercalcemia"
    ],
    answer: 0,
    exp: "Hypercalcemia with an inappropriately elevated parathyroid hormone level and a low phosphate is the classic biochemical signature of primary hyperparathyroidism, most often from a single parathyroid adenoma. In nearly all other causes of hypercalcemia the parathyroid hormone is suppressed by feedback. Confirmation and surgical planning may include a 24-hour urine calcium and parathyroid imaging.",
    why: [
      "Correct: high calcium with a non-suppressed (elevated) PTH and low phosphate indicates primary hyperparathyroidism.",
      "PTH-related peptide from malignancy raises calcium but suppresses the measured PTH.",
      "Vitamin D toxicity raises calcium with a suppressed PTH and typically a high or normal phosphate.",
      "Milk-alkali syndrome causes hypercalcemia with metabolic alkalosis and a suppressed PTH.",
      "Familial hypocalciuric hypercalcemia can raise PTH mildly but is defined by low urinary calcium excretion, which is not established here."
    ]
  },
  {
    id: "s3-0011",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Hyperkalemia with electrocardiographic changes",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 64-year-old man with chronic kidney disease and diabetes presents with generalized weakness. He missed dialysis and admits to eating a large amount of dried fruit. His ECG shows peaked T waves and a widening QRS. He is being monitored on telemetry.\n\n| Test | Value | Reference |\n|---|---|---|\n| Potassium | 7.1 mEq/L | 3.5-5.0 |\n| Bicarbonate | 18 mEq/L | 22-28 |\n| Creatinine | 6.8 mg/dL | 0.7-1.3 |",
    lead: "Which of the following is the most appropriate immediate next step?",
    options: [
      "Give an oral potassium-binding resin and recheck in 4 hours.",
      "Administer intravenous insulin with dextrose only.",
      "Arrange urgent hemodialysis before any other therapy.",
      "Administer intravenous calcium gluconate.",
      "Give nebulized albuterol as the sole treatment."
    ],
    answer: 3,
    exp: "With hyperkalemia and ECG changes such as peaked T waves and QRS widening, the first priority is intravenous calcium to stabilize the cardiac membrane and prevent lethal arrhythmia. Calcium does not lower the potassium, so it is immediately followed by measures that shift potassium into cells (insulin with dextrose, and albuterol) and then measures that remove it from the body (dialysis in this dialysis-dependent patient). Sequencing matters: membrane stabilization comes before shifting and removal.",
    why: [
      "Binding resins act slowly and do not address the immediate arrhythmia risk signaled by ECG changes.",
      "Insulin with dextrose shifts potassium intracellularly but does not protect the myocardium first.",
      "Dialysis will ultimately remove the potassium but takes time to arrange and does not provide the immediate cardiac protection needed.",
      "Correct: intravenous calcium gluconate stabilizes the cardiac membrane immediately and is given first when ECG changes are present.",
      "Albuterol shifts potassium but is an adjunct and does not provide the urgent membrane stabilization that calcium does."
    ]
  },
  {
    id: "s3-0012",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Suspected bacterial meningitis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 20-year-old college student presents with 12 hours of fever, severe headache, neck stiffness, and photophobia. He is alert with no focal neurologic deficits or papilledema. A few scattered petechiae are noted on the trunk.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Administer empiric antibiotics and dexamethasone without delay.",
      "Await lumbar puncture results before starting antibiotics.",
      "Obtain MRI of the brain before initiating any treatment.",
      "Start acyclovir alone and observe.",
      "Await blood culture results before treating."
    ],
    answer: 0,
    exp: "Fever, headache, meningismus, and petechiae raise strong concern for bacterial (including meningococcal) meningitis, a time-critical emergency. Empiric antibiotics plus adjunctive dexamethasone should be given without delay after drawing blood cultures; because there are no signs of raised intracranial pressure or focal deficit, lumbar puncture can proceed but should not delay treatment. Delaying antibiotics to complete imaging or await cultures increases mortality.",
    why: [
      "Correct: prompt empiric antibiotics with dexamethasone (after blood cultures) is the priority in suspected bacterial meningitis.",
      "Waiting for lumbar puncture results dangerously delays antibiotics in a rapidly progressive infection.",
      "MRI is not required before treatment here and would delay lifesaving therapy.",
      "Acyclovir alone treats herpes encephalitis and would miss a likely bacterial process.",
      "Antibiotics must not wait for culture results, which take days, while the patient can deteriorate within hours."
    ]
  },
  {
    id: "s3-0013",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "New pleural effusion of unknown cause",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 60-year-old man presents with 2 weeks of progressive dyspnea and a dull ache in the left chest. Examination shows dullness to percussion, decreased breath sounds, and reduced tactile fremitus over the left base. He is afebrile and hemodynamically stable.\n\n**[IMAGE: upright chest radiograph showing a moderate left pleural effusion with blunting of the costophrenic angle and a meniscus sign]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Start empiric antibiotics and discharge.",
      "Perform immediate chest-tube thoracostomy.",
      "Perform diagnostic and therapeutic thoracentesis.",
      "Obtain CT pulmonary angiography.",
      "Observe and start diuretics only."
    ],
    answer: 2,
    exp: "A new, moderate pleural effusion of unknown cause should be sampled by thoracentesis, which both relieves dyspnea and provides fluid for analysis. Applying Light's criteria distinguishes an exudate from a transudate and directs the subsequent workup for causes such as malignancy, infection, or heart failure. Blind treatment without sampling risks missing a diagnosis such as malignant effusion.",
    why: [
      "Empiric antibiotics and discharge assume infection that has not been established and leave the effusion uncharacterized.",
      "A chest tube is not the initial step for an undiagnosed, non-empyematous effusion.",
      "Correct: thoracentesis samples the fluid (applying Light's criteria) and relieves symptoms, guiding further workup.",
      "CT pulmonary angiography evaluates for pulmonary embolism, which the subacute effusion picture does not primarily suggest.",
      "Diuretics presume heart failure, which has not been confirmed and could delay diagnosis of a malignant effusion."
    ]
  },
  {
    id: "s3-0014",
    system: "Internal Medicine",
    discipline: "Geriatrics",
    topic: "Recurrent falls and polypharmacy",
    difficulty: "moderate",
    anchor: null,
    vignette: "An 82-year-old woman is seen after two falls in the past month. She lives alone and takes a long-acting benzodiazepine for sleep, an anticholinergic for bladder symptoms, and an antihypertensive. She has orthostatic lightheadedness. Her gait is unsteady, and her cognition is intact.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Add a sedating antihistamine to improve her sleep.",
      "Recommend strict bed rest to prevent further falls.",
      "Apply physical restraints when she is unsupervised.",
      "Increase the benzodiazepine dose for her anxiety.",
      "Review and deprescribe high-risk medications and assess falls risk."
    ],
    answer: 4,
    exp: "Falls in older adults are usually multifactorial, and medications such as benzodiazepines and anticholinergics (both on the Beers list of potentially inappropriate medications) are common, reversible contributors. A structured multifactorial falls assessment plus deprescribing of high-risk drugs, orthostatic-blood-pressure evaluation, and gait and home-safety review is the appropriate response. Adding sedatives or restraints would increase, not reduce, harm.",
    why: [
      "Sedating antihistamines are anticholinergic and increase fall risk rather than reducing it.",
      "Bed rest causes deconditioning and worsens fall risk over time.",
      "Physical restraints increase injury, agitation, and complications and are not a fall-prevention strategy.",
      "Increasing the benzodiazepine would worsen sedation, balance, and fall risk.",
      "Correct: reviewing and deprescribing high-risk medications alongside a multifactorial falls assessment addresses the reversible contributors."
    ]
  },
  {
    id: "s3-0015",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Lead poisoning versus iron deficiency",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 2-year-old child living in an old, poorly maintained apartment is brought in for irritability and decreased appetite. The parents mention the child sometimes puts paint chips in his mouth. He is pale and mildly developmentally delayed.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 9.6 g/dL | 11.0-14.0 |\n| Mean corpuscular volume | 70 fL | 74-90 |\n| Blood lead level | 55 mcg/dL | < 3.5 |\n| Peripheral smear | basophilic stippling | - |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Iron deficiency anemia",
      "Lead poisoning",
      "Beta-thalassemia trait",
      "Sideroblastic anemia",
      "Anemia of chronic disease"
    ],
    answer: 1,
    exp: "An elevated blood lead level in a toddler with a microcytic anemia, basophilic stippling, and a history of pica for paint chips in an old dwelling indicates lead poisoning. A level this high warrants removal from the exposure source and chelation therapy along with iron-status evaluation, because concurrent iron deficiency increases lead absorption. The markedly elevated lead level distinguishes this from the other microcytic anemias.",
    why: [
      "Iron deficiency also causes microcytosis but does not produce a blood lead level of this magnitude.",
      "Correct: a very high blood lead level with basophilic stippling and pica for paint chips indicates lead poisoning.",
      "Thalassemia trait causes microcytosis but does not elevate the blood lead level.",
      "Sideroblastic anemia is uncommon in toddlers and does not explain the elevated lead level.",
      "Anemia of chronic disease is typically normocytic and unrelated to environmental lead exposure."
    ]
  },
  {
    id: "s3-0016",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Ileocolic intussusception",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 10-month-old previously healthy infant has episodes of sudden inconsolable crying during which he draws his legs up, alternating with periods of calm. He has vomited twice and passed a stool mixed with blood and mucus. A sausage-shaped mass is palpable in the right upper abdomen, and he is otherwise well perfused.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Air or contrast enema for diagnosis and reduction.",
      "Immediate surgical bowel resection.",
      "Oral rehydration and discharge with follow-up.",
      "Broad-spectrum antibiotics alone.",
      "Abdominal MRI."
    ],
    answer: 0,
    exp: "Intermittent colicky pain with leg-drawing, a currant-jelly stool, and a sausage-shaped abdominal mass in an infant is classic for ileocolic intussusception. In a stable child without peritonitis or perforation, an air (or contrast) enema is both diagnostic and therapeutic, achieving reduction in most cases. Surgery is reserved for failed enema reduction, perforation, or signs of peritonitis.",
    why: [
      "Correct: in a stable infant, an air or contrast enema both confirms intussusception and reduces it nonoperatively.",
      "Immediate resection is reserved for perforation, peritonitis, or failed enema reduction, none of which is present.",
      "Discharging the infant risks progression to bowel ischemia and perforation.",
      "Antibiotics alone do not address the mechanical obstruction of intussusception.",
      "MRI is not the appropriate or timely test; ultrasound and enema are used instead."
    ]
  },
  {
    id: "s3-0017",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Croup (laryngotracheobronchitis)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 2-year-old boy presents in autumn with 2 days of a barky, seal-like cough and a hoarse voice, now with noisy breathing. He has audible inspiratory stridor at rest and mild suprasternal retractions but is well-appearing between episodes, with a normal oxygen saturation and no drooling.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Empiric intravenous antibiotics.",
      "An albuterol nebulizer alone.",
      "Corticosteroids plus nebulized epinephrine for stridor at rest.",
      "Immediate intubation in the emergency department.",
      "Reassurance and discharge without any treatment."
    ],
    answer: 2,
    exp: "The barky cough, hoarseness, and inspiratory stridor describe viral croup. For stridor at rest with retractions (moderate croup), treatment is a dose of corticosteroids (dexamethasone) for all severities plus nebulized epinephrine for the resting stridor, followed by a period of observation. Antibiotics and routine intubation are not indicated, and the absence of drooling and toxic appearance argues against epiglottitis.",
    why: [
      "Croup is viral, so antibiotics are not indicated.",
      "Albuterol targets lower-airway bronchospasm and does not relieve the upper-airway obstruction of croup.",
      "Correct: dexamethasone for all croup plus nebulized epinephrine for stridor at rest is the appropriate treatment.",
      "Intubation is reserved for impending respiratory failure, which this well-appearing child does not have.",
      "Stridor at rest with retractions warrants active treatment, not discharge without therapy."
    ]
  },
  {
    id: "s3-0018",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "HELLP syndrome",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 33-year-old woman at 35 weeks gestation presents with right upper quadrant pain, nausea, and malaise. Blood pressure is 158/104 mm Hg. She has proteinuria. The fetal heart tracing is currently reassuring.\n\n| Test | Value | Reference |\n|---|---|---|\n| Platelets | 68,000/mm3 | 150,000-400,000 |\n| AST | 240 U/L | 10-40 |\n| Lactate dehydrogenase | 700 U/L | 140-280 |\n| Haptoglobin | low | - |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Expectant management with home rest.",
      "Platelet transfusion and continuation of the pregnancy to term.",
      "Oral antihypertensive with discharge home.",
      "Stabilize with magnesium sulfate and antihypertensives, then proceed to delivery.",
      "Await spontaneous onset of labor."
    ],
    answer: 3,
    exp: "Hemolysis (low haptoglobin, high lactate dehydrogenase), elevated liver enzymes, and low platelets in a preeclamptic patient define HELLP syndrome, a severe form of preeclampsia. Management is maternal stabilization with magnesium sulfate for seizure prophylaxis and control of severe-range blood pressure, followed by delivery, which is the definitive treatment. At 35 weeks with HELLP, expectant management is unsafe.",
    why: [
      "Home expectant management is unsafe with HELLP, which can deteriorate rapidly.",
      "Transfusing platelets and prolonging the pregnancy does not treat the underlying HELLP and delays definitive care.",
      "Outpatient oral antihypertensive therapy fails to provide seizure prophylaxis, monitoring, and timely delivery.",
      "Correct: magnesium sulfate and blood-pressure control with prompt delivery is the definitive management of HELLP.",
      "Waiting for spontaneous labor delays the delivery that definitively treats HELLP."
    ]
  },
  {
    id: "s3-0019",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Pelvic inflammatory disease",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 22-year-old sexually active woman presents with 3 days of lower abdominal pain and mucopurulent vaginal discharge. Temperature is 38.2 C. Pelvic examination shows cervical motion tenderness and bilateral adnexal tenderness. A pregnancy test is negative and she is hemodynamically stable.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Await cervical culture results before starting any treatment.",
      "Begin empiric outpatient ceftriaxone plus doxycycline (with metronidazole).",
      "Prescribe oral fluconazole for candidiasis.",
      "Provide reassurance and NSAIDs only.",
      "Proceed to immediate hysterectomy."
    ],
    answer: 1,
    exp: "Cervical motion tenderness with adnexal tenderness and mucopurulent discharge in a young sexually active woman meets the clinical threshold for pelvic inflammatory disease. Because delayed treatment risks tubal infertility, ectopic pregnancy, and chronic pain, empiric antibiotics covering gonorrhea, chlamydia, and anaerobes (ceftriaxone plus doxycycline, with metronidazole) should begin on clinical grounds. Cultures and testing are sent but do not delay therapy.",
    why: [
      "Waiting for cultures delays treatment and increases the risk of tubal damage and infertility.",
      "Correct: empiric ceftriaxone plus doxycycline (with metronidazole) treats pelvic inflammatory disease promptly to preserve fertility.",
      "Fluconazole treats vaginal candidiasis and does not cover the pathogens of pelvic inflammatory disease.",
      "NSAIDs alone leave a treatable infection unaddressed and risk serious sequelae.",
      "Hysterectomy is grossly inappropriate for a young woman with treatable pelvic inflammatory disease."
    ]
  },
  {
    id: "s3-0020",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Category III fetal heart tracing",
    difficulty: "hard",
    anchor: null,
    vignette: "A 29-year-old woman in active labor at 39 weeks has continuous fetal monitoring. Over 30 minutes the tracing shows recurrent late decelerations with minimal baseline variability and no accelerations. She is repositioned, given intravenous fluids and supplemental oxygen, and oxytocin is stopped, but the pattern persists.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Continue labor and reassess the tracing in 1 hour.",
      "Restart oxytocin to speed the labor.",
      "Discharge the patient to return when contractions intensify.",
      "Reassure the team that late decelerations are a benign finding.",
      "Continue intrauterine resuscitation and proceed to prompt delivery if the pattern does not improve."
    ],
    answer: 4,
    exp: "Recurrent late decelerations with minimal variability and absent accelerations that persist despite intrauterine resuscitation constitute a category III (abnormal) tracing indicating probable fetal hypoxemia from uteroplacental insufficiency. After conservative measures fail, delivery should be expedited, by cesarean if vaginal delivery is not imminent. Continuing labor unchanged risks fetal acidemia and injury.",
    why: [
      "Waiting another hour with a persistent abnormal tracing risks progressive fetal hypoxic injury.",
      "Restarting oxytocin increases contractions and would worsen uteroplacental compromise.",
      "Discharging a laboring patient with an abnormal tracing is unsafe and inappropriate.",
      "Recurrent late decelerations with minimal variability are ominous, not benign.",
      "Correct: when intrauterine resuscitation fails to improve a category III tracing, prompt delivery is indicated."
    ]
  },
  {
    id: "s3-0021",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Bipolar I disorder, manic episode",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 25-year-old man is brought in by his family for 1 week of markedly decreased need for sleep, rapid pressured speech, grandiose plans to start several businesses, and impulsive spending that has drained his savings. He is irritable and distractible. There is no evidence of substance use, and he has had prior episodes of depression.",
    lead: "Which of the following is the most likely diagnosis and appropriate initial treatment?",
    options: [
      "Major depressive disorder; start a selective serotonin reuptake inhibitor.",
      "Generalized anxiety disorder; start buspirone.",
      "Bipolar I disorder; start a mood stabilizer or atypical antipsychotic.",
      "Schizophrenia; start a long-term antipsychotic only.",
      "Normal goal-directed behavior; provide reassurance."
    ],
    answer: 2,
    exp: "At least 1 week of elevated or irritable mood with decreased need for sleep, pressured speech, grandiosity, distractibility, and risky spending meets criteria for a manic episode, which establishes bipolar I disorder. First-line treatment of acute mania is a mood stabilizer (such as lithium or valproate) or an atypical antipsychotic. An antidepressant given alone could precipitate or worsen mania.",
    why: [
      "Starting an antidepressant alone in someone who is manic can worsen the mania and misidentifies the mood pole.",
      "The syndrome is manic, not primarily anxious, so buspirone is not appropriate.",
      "Correct: a week of manic symptoms defines bipolar I disorder, treated acutely with a mood stabilizer or atypical antipsychotic.",
      "Prominent mood symptoms with prior depression point to bipolar disorder rather than schizophrenia.",
      "The impairment and financial harm indicate pathology, not normal behavior."
    ]
  },
  {
    id: "s3-0022",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Alcohol withdrawal",
    difficulty: "easy",
    anchor: null,
    vignette: "A 45-year-old man who drinks heavily every day is admitted for a hip fracture. About 36 hours after his last drink he develops tremor, anxiety, sweating, nausea, and a heart rate of 112/min. His blood pressure is elevated and he is fully alert without seizures or hallucinations.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Benzodiazepines using symptom-triggered dosing.",
      "Haloperidol as first-line therapy.",
      "Immediate initiation of disulfiram.",
      "Naltrexone for acute withdrawal symptoms.",
      "Observation without any pharmacotherapy."
    ],
    answer: 0,
    exp: "Tremor, autonomic hyperactivity, and anxiety beginning within about a day or two of the last drink indicate alcohol withdrawal. Benzodiazepines are first-line because they reduce symptoms and prevent progression to withdrawal seizures and delirium tremens; symptom-triggered dosing guided by a withdrawal scale is effective and limits oversedation. Thiamine supplementation is also given.",
    why: [
      "Correct: benzodiazepines, often with symptom-triggered dosing, treat withdrawal and prevent seizures and delirium tremens.",
      "Haloperidol lowers the seizure threshold and does not treat the underlying withdrawal physiology.",
      "Disulfiram is used for maintaining abstinence, not for managing acute withdrawal.",
      "Naltrexone reduces craving in maintenance treatment and has no role in acute withdrawal.",
      "Withholding pharmacotherapy risks progression to withdrawal seizures and delirium tremens."
    ]
  },
  {
    id: "s3-0023",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Unstable wide-complex tachycardia",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 65-year-old man with prior myocardial infarction presents with palpitations and chest pain. He is pale and diaphoretic with a blood pressure of 78/44 mm Hg and appears acutely ill.\n\n**[ECG: regular wide-complex tachycardia at 180/min with no clearly discernible P waves, consistent with ventricular tachycardia]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Administer intravenous adenosine.",
      "Observe and obtain serial troponin levels.",
      "Give oral metoprolol.",
      "Attempt vagal maneuvers only.",
      "Perform immediate synchronized cardioversion."
    ],
    answer: 4,
    exp: "A regular wide-complex tachycardia in a patient with prior infarction should be treated as ventricular tachycardia, and this patient is hemodynamically unstable with hypotension and chest pain. Unstable tachyarrhythmia requires immediate synchronized electrical cardioversion rather than a trial of drugs. Antiarrhythmic infusions or adenosine are considered only when the patient is stable.",
    why: [
      "Adenosine is for stable regular narrow-complex supraventricular tachycardia and can be harmful here.",
      "Observation is unsafe when the patient is unstable with hypotension and chest pain.",
      "Oral metoprolol acts too slowly and would worsen hypotension in an unstable patient.",
      "Vagal maneuvers are ineffective for ventricular tachycardia and inappropriate for an unstable patient.",
      "Correct: an unstable wide-complex (ventricular) tachycardia requires immediate synchronized cardioversion."
    ]
  },
  {
    id: "s3-0024",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Anaphylaxis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 30-year-old woman develops diffuse urticaria, lip and tongue swelling, wheezing, and a sensation of throat tightness within minutes of eating shrimp at a restaurant. Blood pressure is 86/50 mm Hg and heart rate is 122/min. She feels faint.",
    lead: "Which of the following is the most appropriate immediate treatment?",
    options: [
      "Intravenous diphenhydramine alone.",
      "An oral corticosteroid followed by discharge.",
      "A nebulized albuterol treatment only.",
      "Intramuscular epinephrine.",
      "Intravenous fluids and observation only."
    ],
    answer: 3,
    exp: "Rapid onset of skin, respiratory, and cardiovascular involvement after an allergen exposure defines anaphylaxis. Intramuscular epinephrine into the anterolateral thigh is the immediate, first-line, lifesaving treatment and should be given without delay, followed by airway support, intravenous fluids, and positioning. Antihistamines and corticosteroids are adjuncts only and do not replace epinephrine.",
    why: [
      "Antihistamines relieve hives but do not reverse airway edema or hypotension and are adjuncts only.",
      "An oral steroid acts too slowly, and discharge would be dangerous during active anaphylaxis.",
      "Albuterol may help bronchospasm but does not address hypotension or airway angioedema.",
      "Correct: intramuscular epinephrine is the immediate first-line treatment for anaphylaxis.",
      "Fluids alone are supportive but do not substitute for the epinephrine that reverses the reaction."
    ]
  },
  {
    id: "s3-0025",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Adhesive small-bowel obstruction",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 60-year-old man with a prior open appendectomy presents with 1 day of crampy abdominal pain, distension, bilious vomiting, and no passage of flatus. The abdomen is distended and tympanitic with high-pitched bowel sounds. He is not peritonitic, and vital signs are stable.\n\n**[IMAGE: supine and upright abdominal radiographs showing multiple dilated loops of small bowel with air-fluid levels and no colonic gas]**",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Immediate exploratory laparotomy in all cases.",
      "Nasogastric decompression, intravenous fluids, and bowel rest with serial examinations.",
      "Discharge with oral laxatives.",
      "Colonoscopy for decompression.",
      "Oral contrast challenge followed by discharge home."
    ],
    answer: 1,
    exp: "The clinical and radiographic picture indicates a small-bowel obstruction, most often from adhesions after prior surgery. Without signs of strangulation, ischemia, or perforation, initial management is nonoperative: nasogastric decompression, intravenous fluid and electrolyte resuscitation, bowel rest, and serial abdominal examinations. Surgery is indicated for a closed-loop obstruction, ischemia, peritonitis, or failure of nonoperative management.",
    why: [
      "Immediate operation is not required for an uncomplicated obstruction without signs of ischemia or perforation.",
      "Correct: uncomplicated adhesive small-bowel obstruction is initially managed with nasogastric decompression, fluids, bowel rest, and serial exams.",
      "Discharge with laxatives is unsafe and does not address the mechanical obstruction.",
      "Colonoscopy addresses the colon and would not relieve a small-bowel obstruction.",
      "Sending the patient home ignores an active obstruction that requires inpatient management and monitoring."
    ]
  }
];
