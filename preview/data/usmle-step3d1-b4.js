/*
 * Rounds Codex - USMLE Step 3, Day 1 (Foundations of Independent Practice) bank, Batch 4 (25 items)
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
const USMLE_STEP3D1_B4 = [
  {
    id: "s3-0101",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Area under the ROC curve for test discrimination",
    difficulty: "moderate",
    anchor: "image",
    vignette: "Investigators develop a continuous biomarker to distinguish patients with a disease from those without it. To summarize how well the biomarker separates the two groups across all possible cutoffs, they plot sensitivity against 1 minus specificity and compute the area under the curve.\n\n**[IMAGE: receiver operating characteristic curve bowing toward the upper-left corner, with a reported area under the curve of 0.88 and a diagonal reference line representing an area of 0.50]**",
    lead: "Which statement best interprets this ROC analysis?",
    options: [
      "An area under the curve of 0.88 indicates good overall discrimination, meaning a randomly chosen diseased patient has an 88% probability of a higher test value than a randomly chosen non-diseased patient.",
      "An area under the curve of 0.88 means the test is positive in 88% of diseased patients.",
      "The diagonal reference line represents a perfect test.",
      "The area under the curve directly gives the positive predictive value of the test.",
      "A higher area under the curve necessarily means a lower false-positive rate at every possible cutoff."
    ],
    answer: 0,
    exp: "The area under the ROC curve summarizes a test's ability to discriminate diseased from non-diseased individuals across all thresholds. An area of 0.5 (the diagonal) is no better than chance and 1.0 is perfect; 0.88 reflects good discrimination and equals the probability that a randomly selected diseased person has a higher test value than a randomly selected non-diseased person. It is not the sensitivity, the predictive value, or a guarantee about any single cutoff.",
    why: [
      "Correct: the AUC equals the probability that a random diseased subject scores higher than a random non-diseased subject; 0.88 reflects good discrimination.",
      "The proportion positive among diseased patients is sensitivity at a specific cutoff, not the AUC.",
      "The diagonal line represents a useless test (AUC 0.50), not a perfect one.",
      "Predictive values depend on prevalence and are not read directly off the AUC.",
      "A larger AUC reflects better average discrimination but does not guarantee a lower false-positive rate at every individual threshold."
    ]
  },
  {
    id: "s3-0102",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Kaplan-Meier survival curve interpretation",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A randomized trial reports overall survival for a new therapy versus standard care using Kaplan-Meier curves. The investigators mark where each curve crosses the 50% survival level and report the log-rank test.\n\n**[IMAGE: two Kaplan-Meier curves; the treatment curve stays above the control curve; median survival is 30 months for treatment and 20 months for control, with tick marks for censored patients and a log-rank p = 0.01]**",
    lead: "Which statement best interprets this figure?",
    options: [
      "The tick marks on the curves indicate the exact time each patient died.",
      "Median survival is longer with the new therapy (30 vs 20 months), and the log-rank p = 0.01 indicates the survival difference is statistically significant.",
      "Because both curves eventually decline, the therapy provides no benefit.",
      "The log-rank test compares survival only at the final time point of the study.",
      "Median survival is the time at which 100% of patients in a group have died."
    ],
    answer: 1,
    exp: "On a Kaplan-Meier plot, median survival is the time at which the survival probability falls to 50%; here it is 30 months with therapy versus 20 months with control. The log-rank test compares the entire survival experience of the two groups over time, and p = 0.01 indicates a statistically significant difference. Tick marks denote censored (not deceased) patients whose follow-up ended without the event.",
    why: [
      "Tick marks denote censored patients (lost to follow-up or event-free at last contact), not deaths.",
      "Correct: median survival is 30 vs 20 months, and the log-rank p = 0.01 shows a significant survival difference.",
      "A separation favoring treatment with a significant log-rank test indicates benefit, even though survival curves fall over time.",
      "The log-rank test compares the full survival distributions across all time points, not just the last.",
      "Median survival is when 50% (not 100%) of the group has experienced the event."
    ]
  },
  {
    id: "s3-0103",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Effect of disease prevalence on positive predictive value",
    difficulty: "hard",
    anchor: "table",
    vignette: "A screening test with fixed sensitivity of 99% and specificity of 95% is applied first in a high-prevalence clinic population and then in a low-prevalence general population. The 2x2 results per 10,000 tested are shown for each setting.\n\n| Setting | True positives | False positives | Total positives |\n|---|---|---|---|\n| High prevalence (10%) | 990 | 450 | 1440 |\n| Low prevalence (1%) | 99 | 495 | 594 |",
    lead: "Which statement best explains what happens to the positive predictive value as prevalence falls?",
    options: [
      "The positive predictive value stays the same because sensitivity and specificity are unchanged.",
      "The positive predictive value rises because there are fewer diseased people to detect.",
      "The positive predictive value falls (from about 69% to about 17%) because at low prevalence a larger share of positives are false positives.",
      "The negative predictive value falls sharply as prevalence decreases.",
      "Prevalence has no effect on predictive values, only on sensitivity."
    ],
    answer: 2,
    exp: "Sensitivity and specificity are properties of the test and do not change with prevalence, but predictive values do. At 10% prevalence the positive predictive value is 990/1440 = ~69%, whereas at 1% prevalence it is 99/594 = ~17%: as prevalence falls, false positives make up a larger fraction of all positive results, so the positive predictive value drops. Negative predictive value moves in the opposite direction, rising as prevalence falls.",
    why: [
      "Predictive values, unlike sensitivity and specificity, do change with prevalence.",
      "Fewer diseased people mean proportionally more false positives, which lowers rather than raises the positive predictive value.",
      "Correct: PPV falls from ~69% to ~17% because false positives dominate the positives at low prevalence.",
      "Negative predictive value actually increases as prevalence falls, since most negatives are truly disease-free.",
      "Prevalence strongly affects predictive values while leaving sensitivity unchanged."
    ]
  },
  {
    id: "s3-0104",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Statistical power and type II error",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A trial team designs a study to detect a clinically meaningful reduction in a primary outcome. During planning they discuss the probability of missing a true effect and how to reduce it.\n\n| Design parameter | Planned value |\n|---|---|\n| Alpha (type I error) | 0.05 |\n| Power (1 - beta) | 0.80 |\n| Expected effect size | modest |",
    lead: "Which change would most directly increase the study's statistical power?",
    options: [
      "Decreasing the sample size to speed enrollment.",
      "Lowering alpha from 0.05 to 0.01 while keeping everything else fixed.",
      "Choosing an outcome measure with greater variability.",
      "Increasing the sample size.",
      "Reducing the expected effect size to be more conservative."
    ],
    answer: 3,
    exp: "Power is the probability of detecting a true effect (1 minus the type II error, beta). It increases with a larger sample size, a larger true effect size, lower outcome variability, and a higher (less stringent) alpha. Increasing the sample size most directly raises power. Shrinking the sample, tightening alpha, adding variability, or assuming a smaller effect all reduce power.",
    why: [
      "A smaller sample reduces power and raises the chance of a type II error.",
      "Lowering alpha makes the test more conservative and decreases power if nothing else changes.",
      "Greater outcome variability widens the sampling distribution and lowers power.",
      "Correct: increasing the sample size raises power (reduces the type II error rate).",
      "Assuming a smaller effect size requires more subjects and, at fixed sample size, lowers power."
    ]
  },
  {
    id: "s3-0105",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Ecological fallacy in group-level data",
    difficulty: "hard",
    anchor: "table",
    vignette: "An investigator compares countries and finds that nations with higher average per-capita intake of a nutrient also have higher rates of a cancer. No information on individual people's intake or disease status is available; only country-level averages are compared.\n\n| Data available | Level |\n|---|---|\n| Average nutrient intake | Country (aggregate) |\n| Cancer incidence | Country (aggregate) |\n| Individual intake and disease | Not measured |",
    lead: "Which limitation most threatens a causal conclusion about individuals from these data?",
    options: [
      "Recall bias, because participants misremember their intake.",
      "Lead-time bias, because screening detects disease earlier.",
      "Loss to follow-up, because participants drop out over time.",
      "Immortal time bias, because of misclassified follow-up periods.",
      "Ecological fallacy, because associations observed at the group level may not hold for individuals."
    ],
    answer: 4,
    exp: "This is an ecological study: exposure and outcome are measured only as group-level aggregates. Inferring that individuals with higher intake have higher cancer risk commits the ecological fallacy, because a correlation between group averages need not reflect the relationship within individuals (confounders and differing distributions can distort it). Recall bias, lead-time bias, loss to follow-up, and immortal time bias describe different problems that require individual-level or longitudinal data.",
    why: [
      "Recall bias arises from individual self-report, but here no individual-level exposure data were collected.",
      "Lead-time bias applies to screening and earlier detection, not to this aggregate comparison.",
      "Loss to follow-up is a cohort-study problem; this cross-sectional ecological comparison has no follow-up.",
      "Immortal time bias concerns misclassified person-time in longitudinal data, not group averages.",
      "Correct: drawing individual conclusions from group-level correlations is the ecological fallacy."
    ]
  },
  {
    id: "s3-0106",
    system: "Preventive Medicine & Ethics",
    discipline: "Epidemiology",
    topic: "Vaccine efficacy from attack rates",
    difficulty: "easy",
    anchor: "table",
    vignette: "During a field trial, investigators compare the attack rate of an infection among vaccinated and unvaccinated participants over one season to estimate how well the vaccine prevents disease.\n\n| Group | Attack rate |\n|---|---|\n| Unvaccinated | 20% |\n| Vaccinated | 5% |",
    lead: "What is the estimated vaccine efficacy?",
    options: [
      "75%",
      "15%",
      "25%",
      "80%",
      "95%"
    ],
    answer: 0,
    exp: "Vaccine efficacy is the relative reduction in disease risk among the vaccinated compared with the unvaccinated: (attack rate unvaccinated - attack rate vaccinated) / attack rate unvaccinated = (0.20 - 0.05) / 0.20 = 0.15 / 0.20 = 0.75, or 75%. This is a relative measure; the absolute risk reduction here is the 15-percentage-point difference, which is a distinct quantity.",
    why: [
      "Correct: (20% - 5%) / 20% = 15/20 = 75% vaccine efficacy.",
      "15% is the absolute risk reduction (the raw difference in attack rates), not the efficacy.",
      "25% is the residual relative risk in the vaccinated (5%/20%), not the efficacy.",
      "80% misreads the residual risk; efficacy is 1 minus the 0.25 relative risk = 75%.",
      "95% simply subtracts the vaccinated attack rate from 100% and does not use the correct formula."
    ]
  },
  {
    id: "s3-0107",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Lung cancer screening with low-dose CT",
    difficulty: "easy",
    anchor: null,
    vignette: "A 58-year-old man with a 35 pack-year smoking history still smokes one pack daily. He feels well and has no respiratory symptoms. He asks whether any test can help catch lung cancer early, and he has no condition that would prevent treatment if a cancer were found.",
    lead: "Which of the following is the most appropriate screening recommendation?",
    options: [
      "Annual chest radiograph.",
      "Annual low-dose CT of the chest.",
      "Screening sputum cytology every 6 months.",
      "No screening because he is asymptomatic.",
      "A single baseline PET scan."
    ],
    answer: 1,
    exp: "Annual low-dose CT of the chest is recommended for adults roughly 50-80 years old with a 20 pack-year or greater smoking history who currently smoke or quit within the past 15 years, because it reduces lung cancer mortality. This 58-year-old with a 35 pack-year history who still smokes qualifies. Chest radiography and sputum cytology have not been shown to reduce mortality, and PET is a diagnostic, not a screening, test.",
    why: [
      "Chest radiography does not reduce lung cancer mortality and is not recommended for screening.",
      "Correct: annual low-dose chest CT is recommended for high-risk smokers and reduces lung cancer mortality.",
      "Sputum cytology is not an effective screening strategy for lung cancer.",
      "He is at high risk and eligible; being asymptomatic is exactly when screening applies.",
      "PET is used to characterize known lesions, not as a primary screening test."
    ]
  },
  {
    id: "s3-0108",
    system: "Preventive Medicine & Ethics",
    discipline: "Ethics",
    topic: "Reporting a patient unsafe to drive",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 68-year-old man with a recent unprovoked seizure and a second breakthrough seizure last week continues to drive daily, including to work. He is counseled that he should not drive until he is seizure-free per local requirements, but he says he cannot afford to stop and intends to keep driving. Local law addresses reporting of drivers with lapses of consciousness.",
    lead: "Which of the following is the most appropriate action?",
    options: [
      "Do nothing, because physician-patient confidentiality is absolute.",
      "Immediately call the police to have him arrested.",
      "Discharge him from the practice for noncompliance.",
      "Counsel him clearly about the driving risk, document the discussion, and report to the appropriate licensing authority as permitted or required by local law.",
      "Ask a family member to secretly disable his car."
    ],
    answer: 3,
    exp: "When a patient with uncontrolled seizures poses a serious risk to public safety and intends to keep driving despite counseling, the duty to protect third parties can override confidentiality. The appropriate steps are to counsel the patient clearly, document the conversation, and report to the licensing (motor vehicle) authority as permitted or required by jurisdictional law. Confidentiality is not absolute when there is a foreseeable risk of serious harm to others.",
    why: [
      "Confidentiality is not absolute and yields when a patient poses a serious, foreseeable risk to others.",
      "Arranging an arrest is punitive and not the physician's role; the licensing authority handles fitness to drive.",
      "Dismissing the patient abandons care and does not address the immediate public-safety risk.",
      "Correct: counsel, document, and report to the licensing authority as permitted or required by law.",
      "Covertly disabling the car is deceptive, potentially unlawful, and not an appropriate physician action."
    ]
  },
  {
    id: "s3-0109",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Initial management of newly diagnosed hypertension",
    difficulty: "easy",
    anchor: "table",
    vignette: "A 48-year-old man with no known medical problems is found to have elevated blood pressure on two separate visits, confirmed with proper technique. He has no diabetes and no known cardiovascular disease, and his examination and basic labs are unremarkable.\n\n| Visit | Blood pressure |\n|---|---|\n| Visit 1 | 148/92 mm Hg |\n| Visit 2 | 150/94 mm Hg |",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Lifestyle modification plus a first-line antihypertensive such as a thiazide, ACE inhibitor/ARB, or calcium channel blocker.",
      "No treatment; recheck in 2 years.",
      "Start two intravenous antihypertensives immediately.",
      "Begin a beta-blocker as the required first-line agent for all patients.",
      "Order renal artery imaging before any therapy."
    ],
    answer: 0,
    exp: "Confirmed blood pressure of roughly 150/94 mm Hg represents stage 2 hypertension. Management combines lifestyle modification (sodium reduction, weight loss, exercise, moderation of alcohol) with pharmacologic therapy, and first-line agents are a thiazide diuretic, an ACE inhibitor or ARB, or a calcium channel blocker. Beta-blockers are not first-line without a specific indication, and routine secondary-cause imaging is not warranted absent features suggesting secondary hypertension.",
    why: [
      "Correct: stage 2 hypertension is treated with lifestyle change plus a first-line agent (thiazide, ACE inhibitor/ARB, or calcium channel blocker).",
      "Sustained readings near 150/94 warrant treatment now, not a 2-year delay.",
      "Intravenous therapy is for hypertensive emergencies, not stable outpatient hypertension.",
      "Beta-blockers are not preferred first-line without a compelling indication.",
      "Secondary-cause workup is reserved for features suggesting a secondary etiology, not routine initial care."
    ]
  },
  {
    id: "s3-0110",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Statin therapy for primary ASCVD prevention",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 55-year-old man with hypertension and a 30-year smoking history has a calculated 10-year atherosclerotic cardiovascular disease risk of 15%. He has no prior cardiovascular events. His fasting lipid panel is shown.\n\n| Test | Value | Reference |\n|---|---|---|\n| Total cholesterol | 232 mg/dL | < 200 |\n| LDL cholesterol | 158 mg/dL | < 100 optimal |\n| HDL cholesterol | 38 mg/dL | > 40 |",
    lead: "Which of the following is the most appropriate management to reduce his cardiovascular risk?",
    options: [
      "No pharmacotherapy; lifestyle change alone regardless of risk.",
      "Start a fibrate as first-line therapy.",
      "Initiate a moderate- to high-intensity statin along with lifestyle modification.",
      "Begin niacin as the preferred agent.",
      "Start a proton pump inhibitor."
    ],
    answer: 2,
    exp: "A 10-year atherosclerotic cardiovascular disease risk of 15% places this patient in an elevated-risk category (roughly 7.5% or greater) for which a moderate- to high-intensity statin is recommended alongside lifestyle modification. Statins are the first-line lipid-lowering therapy proven to reduce cardiovascular events. Fibrates and niacin are not first-line for primary prevention, and a proton pump inhibitor has no role here.",
    why: [
      "At a 15% 10-year risk with elevated LDL, statin therapy (not lifestyle alone) is indicated.",
      "Fibrates primarily lower triglycerides and are not first-line for ASCVD risk reduction.",
      "Correct: a moderate- to high-intensity statin plus lifestyle change is indicated at this risk level.",
      "Niacin is not a preferred agent and has not shown consistent event reduction added to statins.",
      "A proton pump inhibitor treats acid-related disease and does not modify cardiovascular risk."
    ]
  },
  {
    id: "s3-0111",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Evaluation of a solitary thyroid nodule",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 44-year-old woman is found to have a 2-cm firm nodule in the right thyroid lobe on routine examination. She has no compressive symptoms and no family history of thyroid cancer. Neck ultrasound confirms a solid 2-cm nodule with no clearly benign features.\n\n| Test | Value | Reference |\n|---|---|---|\n| TSH | 1.8 mIU/L | 0.4-4.0 |",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Immediate total thyroidectomy.",
      "Start levothyroxine to suppress the nodule.",
      "Radioactive iodine ablation.",
      "Reassure and no further evaluation.",
      "Ultrasound-guided fine-needle aspiration biopsy."
    ],
    answer: 4,
    exp: "For a thyroid nodule with a normal (non-suppressed) TSH, the next step is ultrasound-guided fine-needle aspiration biopsy to evaluate for malignancy, with the size threshold guided by sonographic risk features; a solid 2-cm nodule without benign features warrants sampling. A suppressed TSH would instead prompt a radionuclide scan to look for an autonomous (usually benign) hot nodule. Surgery, hormone suppression, and radioiodine are not appropriate before cytologic diagnosis.",
    why: [
      "Total thyroidectomy is premature before a tissue diagnosis is obtained.",
      "Levothyroxine suppression is not an appropriate diagnostic step and does not establish malignancy risk.",
      "Radioiodine ablation treats hyperthyroidism, not an undiagnosed euthyroid nodule.",
      "A solid 2-cm nodule with a normal TSH requires cytologic evaluation, not simple reassurance.",
      "Correct: with a normal TSH, ultrasound-guided fine-needle aspiration is the next step to assess for malignancy."
    ]
  },
  {
    id: "s3-0112",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Polymyalgia rheumatica",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 72-year-old woman reports several weeks of aching and morning stiffness in both shoulders and hips, with difficulty rising from a chair and combing her hair. She has no true muscle weakness on testing, no headache, and no visual symptoms. Muscle enzymes are normal.\n\n| Test | Value | Reference |\n|---|---|---|\n| ESR | 62 mm/h | < 20 |\n| Creatine kinase | normal | 30-200 U/L |",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "High-dose glucocorticoids as used for giant cell arteritis with vision loss.",
      "Low-dose oral glucocorticoids (e.g., prednisone 15 mg daily).",
      "High-dose methotrexate as first-line monotherapy.",
      "A muscle biopsy before any treatment.",
      "Broad-spectrum antibiotics."
    ],
    answer: 1,
    exp: "Bilateral shoulder and hip girdle pain and stiffness in an older adult with a markedly elevated ESR and normal creatine kinase (no true weakness) is characteristic of polymyalgia rheumatica. It responds rapidly to low-dose oral glucocorticoids, typically around prednisone 15 mg daily. High-dose steroids are reserved for giant cell arteritis with ischemic symptoms; methotrexate is an adjunct, not first-line monotherapy, and biopsy or antibiotics are not indicated.",
    why: [
      "High-dose steroids are reserved for giant cell arteritis with visual or ischemic symptoms, which she lacks.",
      "Correct: polymyalgia rheumatica responds to low-dose glucocorticoids such as prednisone ~15 mg daily.",
      "Methotrexate is a steroid-sparing adjunct, not first-line monotherapy for polymyalgia rheumatica.",
      "The presentation and labs are characteristic; muscle biopsy is unnecessary and CK is normal.",
      "There is no infection; antibiotics have no role in polymyalgia rheumatica."
    ]
  },
  {
    id: "s3-0113",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Chronic kidney disease staging and management",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 63-year-old man with long-standing type 2 diabetes and hypertension has had a stable but reduced kidney function for over 3 months, with persistent albuminuria. He is asymptomatic and euvolemic.\n\n| Test | Value | Reference |\n|---|---|---|\n| Estimated GFR | 45 mL/min/1.73m2 | > 90 |\n| Urine albumin-to-creatinine ratio | 320 mg/g | < 30 |\n| Potassium | 4.6 mmol/L | 3.5-5.0 |",
    lead: "Which of the following best reduces his risk of kidney disease progression?",
    options: [
      "Restrict protein to near-starvation levels and avoid all medications.",
      "Start an aminoglycoside prophylactically.",
      "Optimize glycemic and blood-pressure control and start an ACE inhibitor or ARB for albuminuria.",
      "Begin immediate hemodialysis.",
      "Add a nonsteroidal anti-inflammatory drug for renal protection."
    ],
    answer: 2,
    exp: "Reduced GFR (here 45, stage G3a) for more than 3 months with albuminuria confirms chronic kidney disease, and in a diabetic hypertensive patient with albuminuria the interventions that slow progression are tight glycemic and blood-pressure control plus an ACE inhibitor or ARB (which reduce albuminuria and preserve renal function); an SGLT2 inhibitor further reduces progression. Nephrotoxins such as aminoglycosides and NSAIDs should be avoided, and dialysis is not indicated at this stage.",
    why: [
      "Severe protein restriction is not recommended, and appropriate medications are protective, not harmful.",
      "Aminoglycosides are nephrotoxic and would worsen kidney function.",
      "Correct: glycemic and blood-pressure control with an ACE inhibitor or ARB slows progression of albuminuric diabetic kidney disease.",
      "Dialysis is reserved for advanced kidney failure, not stage G3a disease.",
      "NSAIDs impair renal perfusion and accelerate kidney injury rather than protecting the kidney."
    ]
  },
  {
    id: "s3-0114",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Ascitic fluid analysis and SAAG interpretation",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 58-year-old man with a long history of heavy alcohol use develops progressive abdominal distention. He is afebrile and not encephalopathic. Diagnostic paracentesis is performed and the ascitic fluid is analyzed alongside a same-day serum albumin.\n\n| Measure | Value |\n|---|---|\n| Serum albumin | 3.2 g/dL |\n| Ascitic fluid albumin | 0.8 g/dL |\n| Ascitic fluid neutrophil count | 60 cells/mm3 |",
    lead: "Which of the following best describes the fluid and the diagnosis?",
    options: [
      "A low serum-ascites albumin gradient indicating peritoneal carcinomatosis.",
      "An ascitic neutrophil count diagnostic of spontaneous bacterial peritonitis requiring antibiotics.",
      "A transudate from nephrotic syndrome given the low ascitic albumin.",
      "A high serum-ascites albumin gradient (2.4 g/dL) indicating portal hypertension from cirrhosis.",
      "A chylous effusion from thoracic duct injury."
    ],
    answer: 3,
    exp: "The serum-ascites albumin gradient (SAAG) is serum albumin minus ascitic albumin: 3.2 - 0.8 = 2.4 g/dL. A SAAG of 1.1 g/dL or greater indicates portal hypertension, which in this patient with heavy alcohol use reflects cirrhosis. The ascitic neutrophil count of 60/mm3 is below the 250/mm3 threshold, so spontaneous bacterial peritonitis is not present and empiric antibiotics are not indicated.",
    why: [
      "The SAAG here is high (2.4), not low; a low gradient would suggest carcinomatosis, which this is not.",
      "Spontaneous bacterial peritonitis requires 250 neutrophils/mm3 or more; 60/mm3 does not meet that threshold.",
      "A high SAAG indicates portal hypertension, not the low-gradient pattern of nephrotic ascites.",
      "Correct: SAAG = 3.2 - 0.8 = 2.4 g/dL (high), indicating portal hypertension from cirrhosis.",
      "The fluid is not chylous; the picture reflects portal hypertensive ascites from cirrhosis."
    ]
  },
  {
    id: "s3-0115",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Group A streptococcal pharyngitis",
    difficulty: "easy",
    anchor: null,
    vignette: "An 8-year-old girl has 2 days of sore throat, fever, and painful swallowing without cough or rhinorrhea. She has tonsillar exudates and tender anterior cervical lymphadenopathy. A rapid antigen detection test for group A streptococcus is positive.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Supportive care only, since all pharyngitis is viral.",
      "Oral acyclovir.",
      "A macrolide only for all patients regardless of allergy.",
      "Topical antifungal therapy.",
      "Oral penicillin or amoxicillin."
    ],
    answer: 4,
    exp: "A positive rapid antigen test with exudative pharyngitis, fever, tender anterior nodes, and no cough is consistent with group A streptococcal pharyngitis. First-line treatment is oral penicillin or amoxicillin, which shortens symptoms, reduces transmission, and prevents acute rheumatic fever. Macrolides are reserved for penicillin-allergic patients, and antivirals or antifungals have no role.",
    why: [
      "This confirmed streptococcal infection warrants antibiotics to prevent rheumatic fever, not supportive care alone.",
      "Acyclovir treats herpesvirus infections, not streptococcal pharyngitis.",
      "Macrolides are reserved for penicillin-allergic patients, not routine first-line therapy for everyone.",
      "There is no fungal infection; antifungals are inappropriate.",
      "Correct: penicillin or amoxicillin is first-line for group A streptococcal pharyngitis and prevents rheumatic fever."
    ]
  },
  {
    id: "s3-0116",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Febrile urinary tract infection in an infant",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 9-month-old girl has 2 days of fever to 39.2 C without an obvious source, plus fussiness and decreased feeding. She is well hydrated and non-toxic. A catheterized urine specimen is obtained and analyzed, and a urine culture is sent.\n\n| Test | Value |\n|---|---|\n| Leukocyte esterase | positive |\n| Nitrites | positive |\n| Urine white blood cells | many per high-power field |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Start antibiotics for a urinary tract infection and treat, using the culture to tailor therapy.",
      "Withhold all treatment until the culture returns in 48 hours.",
      "Reassure and discharge with no treatment or follow-up.",
      "Begin systemic corticosteroids.",
      "Perform immediate cystoscopy."
    ],
    answer: 0,
    exp: "A febrile infant with a positive leukocyte esterase and nitrites and pyuria on a properly collected (catheterized) specimen has a urinary tract infection. Empiric antibiotics should be started promptly, with the culture used to confirm the organism and adjust therapy. Delaying treatment risks progression to pyelonephritis and renal scarring; steroids and cystoscopy are not part of acute management.",
    why: [
      "Correct: start empiric antibiotics for the febrile UTI and refine with culture results.",
      "Delaying antibiotics for 48 hours in a febrile infant with pyuria risks pyelonephritis and scarring.",
      "A positive urinalysis in a febrile infant requires treatment, not discharge without therapy.",
      "Corticosteroids do not treat a bacterial urinary tract infection.",
      "Cystoscopy is not indicated in the acute evaluation of a first febrile UTI."
    ]
  },
  {
    id: "s3-0117",
    system: "Pediatrics",
    discipline: "Preventive Medicine",
    topic: "Safe-sleep counseling to reduce SIDS risk",
    difficulty: "easy",
    anchor: null,
    vignette: "At a 2-month well-child visit, first-time parents ask how to lower the risk of sudden infant death syndrome. They currently place their healthy infant prone with soft bedding and stuffed animals in a shared adult bed because it seems more comfortable.",
    lead: "Which of the following is the most appropriate anticipatory guidance?",
    options: [
      "Place the infant prone to prevent choking.",
      "Use soft bedding and bumper pads for comfort.",
      "Have the infant sleep in the parents' adult bed for safety.",
      "Add a home apnea monitor as the primary prevention strategy.",
      "Place the infant supine on a firm, flat surface in the parents' room without soft bedding, and avoid bed-sharing."
    ],
    answer: 4,
    exp: "To reduce the risk of sudden infant death syndrome, infants should be placed supine (on the back) for every sleep on a firm, flat surface, in the parents' room but not in the parents' bed (room-sharing without bed-sharing), and soft objects and loose bedding should be kept out of the sleep area. Home apnea monitors have not been shown to prevent sudden infant death syndrome.",
    why: [
      "Prone positioning increases, rather than decreases, the risk of sudden infant death syndrome.",
      "Soft bedding and bumper pads raise the risk of suffocation and should be avoided.",
      "Bed-sharing increases risk; room-sharing on a separate firm surface is recommended instead.",
      "Home monitors do not reduce sudden infant death syndrome and are not a recommended prevention strategy.",
      "Correct: supine sleep on a firm flat surface, room-sharing without bed-sharing, and no soft bedding reduce the risk."
    ]
  },
  {
    id: "s3-0118",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Placental abruption",
    difficulty: "hard",
    anchor: null,
    vignette: "A 33-year-old woman at 34 weeks gestation with chronic hypertension presents with sudden, severe, constant abdominal pain and dark vaginal bleeding after a fall. The uterus is firm, tender, and hypertonic with frequent contractions, and the fetal heart tracing shows recurrent late decelerations. Her blood pressure is elevated.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Placenta previa.",
      "Placental abruption.",
      "Uterine rupture through a prior classical scar.",
      "Vasa previa.",
      "Normal labor."
    ],
    answer: 1,
    exp: "Painful vaginal bleeding with a firm, tender, hypertonic uterus and a nonreassuring fetal tracing in a woman with hypertension and recent trauma is characteristic of placental abruption (premature separation of the placenta). By contrast, placenta previa causes painless bleeding with a soft uterus. Abruption is an obstetric emergency requiring maternal-fetal stabilization and often expedited delivery.",
    why: [
      "Placenta previa causes painless bleeding with a soft, nontender uterus, unlike this painful, rigid uterus.",
      "Correct: painful bleeding with a rigid, tender uterus and fetal distress in a hypertensive patient indicates placental abruption.",
      "Uterine rupture typically presents with loss of fetal station and a prior uterine scar, not described here.",
      "Vasa previa causes painless bleeding with fetal bleeding at membrane rupture, not a hypertonic tender uterus.",
      "The severe pain, bleeding, and fetal distress are not consistent with normal labor."
    ]
  },
  {
    id: "s3-0119",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Rh(D) alloimmunization prophylaxis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 26-year-old woman who is Rh(D)-negative is at 28 weeks in her first pregnancy. Her antibody screen is negative, and the baby's father is Rh(D)-positive. She has had no bleeding and feels well. She asks how to protect this and future pregnancies.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "No intervention because her antibody screen is currently negative.",
      "Begin maternal corticosteroids to prevent sensitization.",
      "Administer anti-D immune globulin (RhoGAM) at about 28 weeks and again after delivery if the newborn is Rh(D)-positive.",
      "Perform an immediate exchange transfusion on the mother.",
      "Start the mother on iron and folate to prevent alloimmunization."
    ],
    answer: 2,
    exp: "An unsensitized Rh(D)-negative pregnant woman (negative antibody screen) should receive anti-D immune globulin at approximately 28 weeks and again within 72 hours after delivery if the newborn is Rh(D)-positive, as well as after any sensitizing event. This prevents maternal alloimmunization that could cause hemolytic disease in current and future pregnancies. Corticosteroids, exchange transfusion, and iron/folate do not prevent Rh sensitization.",
    why: [
      "A negative screen is exactly when prophylaxis works; waiting until she is sensitized is too late.",
      "Corticosteroids do not prevent Rh alloimmunization.",
      "Correct: give anti-D immune globulin at ~28 weeks and postpartum if the newborn is Rh(D)-positive.",
      "Maternal exchange transfusion is not a prophylactic measure for Rh sensitization.",
      "Iron and folate treat anemia and do not prevent alloimmunization."
    ]
  },
  {
    id: "s3-0120",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Contraindication to combined hormonal contraception",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 34-year-old woman requests combined oral contraceptive pills. She has migraine headaches preceded by visual aura and smokes half a pack of cigarettes per day. She has no other medical problems and her examination is normal.",
    lead: "Which of the following is the most appropriate contraceptive recommendation?",
    options: [
      "Prescribe a standard combined estrogen-progestin pill without concern.",
      "Prescribe a combined contraceptive patch instead of pills.",
      "Add supplemental estrogen for better cycle control.",
      "Recommend a progestin-only or nonhormonal method (such as a progestin-only pill, implant, or copper/levonorgestrel IUD) because estrogen is contraindicated.",
      "Advise that no contraception is safe for her and she should abstain."
    ],
    answer: 3,
    exp: "Migraine with aura is a contraindication to estrogen-containing contraception because of an increased risk of ischemic stroke, a risk further compounded by smoking. Estrogen-free options such as a progestin-only pill, the etonogestrel implant, or an intrauterine device (copper or levonorgestrel) are appropriate and effective. All combined estrogen-progestin formulations, including the patch, share the same contraindication.",
    why: [
      "Combined pills contain estrogen, which is contraindicated with migraine with aura due to stroke risk.",
      "The patch also delivers estrogen and carries the same contraindication as combined pills.",
      "Adding estrogen worsens the very risk that must be avoided in migraine with aura.",
      "Correct: with migraine with aura, use a progestin-only or nonhormonal method, avoiding estrogen.",
      "Highly effective estrogen-free options exist, so abstinence is not the only safe choice."
    ]
  },
  {
    id: "s3-0121",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Opioid use disorder medication treatment",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 29-year-old man with a 3-year history of nonprescribed opioid use meets criteria for opioid use disorder, with tolerance, withdrawal, failed attempts to cut down, and continued use despite harm. He is motivated to engage in treatment and asks what will best help him stay off opioids and avoid overdose.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Offer medication for opioid use disorder such as buprenorphine or methadone, combined with counseling.",
      "Recommend abstinence-only counseling without any medication.",
      "Prescribe a short benzodiazepine taper as definitive therapy.",
      "Provide a rapid detoxification and then no further treatment.",
      "Start a stimulant to counteract sedation."
    ],
    answer: 0,
    exp: "Medications for opioid use disorder, particularly the opioid agonist/partial-agonist therapies buprenorphine and methadone (naltrexone is an alternative), reduce illicit use, retain patients in care, and lower overdose mortality, and they are most effective combined with psychosocial support. Detoxification alone has high relapse and overdose rates. Benzodiazepines and stimulants do not treat opioid use disorder and add risk.",
    why: [
      "Correct: agonist therapy (buprenorphine or methadone) plus counseling reduces use and overdose deaths.",
      "Counseling alone without medication has substantially higher relapse and overdose risk.",
      "Benzodiazepines do not treat opioid use disorder and increase overdose risk with opioids.",
      "Detoxification without ongoing medication is followed by high relapse and overdose rates.",
      "Stimulants do not treat opioid use disorder and introduce additional harm."
    ]
  },
  {
    id: "s3-0122",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Somatic symptom disorder",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 40-year-old woman has had months of fluctuating physical complaints, including fatigue, abdominal discomfort, and diffuse pain. She has undergone extensive negative workups by several physicians but remains intensely worried, spends hours researching her symptoms, and frequently seeks new tests. Her distress and health preoccupation impair her daily functioning.",
    lead: "Which of the following best describes the diagnosis and management?",
    options: [
      "Malingering; confront her about fabricating symptoms.",
      "Factitious disorder; report her to authorities.",
      "Illness anxiety with no somatic symptoms; no treatment needed.",
      "Somatic symptom disorder; provide regular scheduled visits with one coordinating physician, limit unnecessary testing, and offer cognitive behavioral therapy.",
      "Generalized anxiety disorder; start a standing benzodiazepine."
    ],
    answer: 3,
    exp: "Persistent distressing somatic symptoms accompanied by excessive thoughts, anxiety, and time devoted to health concerns, with resulting functional impairment, define somatic symptom disorder. Management centers on a consistent therapeutic relationship with a single coordinating physician who provides regular scheduled visits, minimizes unnecessary testing and referrals, and offers cognitive behavioral therapy (and treats comorbid depression or anxiety). The symptoms are genuinely experienced, so confrontation or reporting is inappropriate.",
    why: [
      "Malingering involves conscious feigning for external gain, which is not indicated here; her distress is real.",
      "Factitious disorder involves deliberately produced symptoms for the sick role, not this pattern of genuine distress.",
      "She has prominent somatic symptoms, so this is not illness anxiety without somatic complaints, and treatment is needed.",
      "Correct: this is somatic symptom disorder; scheduled visits with one physician, limited testing, and CBT are appropriate.",
      "Standing benzodiazepines are not the treatment, and the core problem is somatic symptom disorder rather than generalized anxiety alone."
    ]
  },
  {
    id: "s3-0123",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Subarachnoid hemorrhage",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 47-year-old woman presents with the sudden onset of the worst headache of her life, peaking within seconds, with neck stiffness and one episode of vomiting. She is awake with no focal deficits. A noncontrast head CT is obtained promptly.\n\n**[IMAGE: noncontrast head CT showing hyperdense blood filling the basal cisterns and sylvian fissures, consistent with acute subarachnoid hemorrhage]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Discharge with oral analgesics and outpatient follow-up.",
      "Give a triptan for presumed migraine.",
      "Start empiric antibiotics for meningitis and observe.",
      "Perform immediate lumbar puncture before any imaging.",
      "Consult neurosurgery, obtain CT/catheter angiography to identify an aneurysm, and manage blood pressure and complications in a monitored setting."
    ],
    answer: 4,
    exp: "A thunderclap headache with meningismus and CT showing blood in the basal cisterns indicates aneurysmal subarachnoid hemorrhage. Management is urgent neurosurgical/neurointerventional consultation with vascular imaging (CT or catheter angiography) to locate the aneurysm for securing (clipping or coiling), along with blood-pressure control, monitoring, and prevention of complications such as rebleeding and vasospasm. Discharge, triptans, or treating as migraine would be dangerous.",
    why: [
      "Discharging a patient with CT-confirmed subarachnoid hemorrhage risks fatal rebleeding.",
      "This is a hemorrhage, not migraine; a triptan is inappropriate and does not address the aneurysm.",
      "The CT shows hemorrhage, not meningitis; antibiotics and observation would miss the aneurysm.",
      "The CT already confirms hemorrhage, so lumbar puncture is unnecessary; imaging preceded it appropriately.",
      "Correct: urgent neurosurgical consultation, vascular imaging to find the aneurysm, and blood-pressure control with monitoring are indicated."
    ]
  },
  {
    id: "s3-0124",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Tricyclic antidepressant overdose",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 24-year-old woman is brought in obtunded 1 hour after an intentional overdose of her amitriptyline. She is hypotensive with dilated pupils, dry skin, and decreased bowel sounds. She then has a brief seizure.\n\n**[ECG: sinus tachycardia with a widened QRS complex of 130 ms and a prominent terminal R wave in lead aVR, consistent with tricyclic antidepressant sodium-channel blockade]**",
    lead: "Which of the following is the most appropriate immediate treatment?",
    options: [
      "Oral activated charcoal alone and discharge after observation.",
      "Intravenous sodium bicarbonate.",
      "Intravenous flumazenil.",
      "A class IA antiarrhythmic such as procainamide.",
      "Oral beta-blocker for the tachycardia."
    ],
    answer: 1,
    exp: "The anticholinergic toxidrome with QRS widening and a terminal R wave in aVR indicates tricyclic antidepressant cardiotoxicity from sodium-channel blockade. Intravenous sodium bicarbonate is the treatment for the widened QRS and hemodynamic instability: it provides a sodium load and alkalinization that overcome sodium-channel blockade, narrowing the QRS and stabilizing the myocardium. Flumazenil can precipitate seizures, and class IA antiarrhythmics worsen sodium-channel blockade.",
    why: [
      "Charcoal does not treat cardiotoxicity, and a patient with QRS widening and seizures cannot be safely discharged.",
      "Correct: intravenous sodium bicarbonate reverses tricyclic sodium-channel blockade and narrows the widened QRS.",
      "Flumazenil is contraindicated here and can precipitate seizures in tricyclic overdose.",
      "Class IA antiarrhythmics are sodium-channel blockers and would worsen tricyclic cardiotoxicity.",
      "A beta-blocker can worsen hypotension and does not address the sodium-channel blockade."
    ]
  },
  {
    id: "s3-0125",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Acute uncomplicated diverticulitis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 60-year-old man has 2 days of steady left lower quadrant pain, low-grade fever, and mild leukocytosis. He is hemodynamically stable, tolerating oral intake, and has localized tenderness without peritoneal signs. CT is obtained.\n\n**[IMAGE: CT of the abdomen and pelvis showing sigmoid colonic wall thickening with pericolic fat stranding and diverticula, no abscess or free air, consistent with acute uncomplicated diverticulitis]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Emergency sigmoid colectomy.",
      "Immediate colonoscopy during the acute inflammation.",
      "Supportive outpatient management (with antibiotics if indicated) and interval colonoscopy after recovery.",
      "Percutaneous drainage of the inflamed segment.",
      "Long-term daily corticosteroids."
    ],
    answer: 2,
    exp: "CT showing sigmoid wall thickening and pericolic fat stranding without abscess or perforation indicates acute uncomplicated diverticulitis. A stable patient tolerating oral intake can be managed supportively as an outpatient (bowel rest/diet modification, with antibiotics based on severity and current guidance), and a colonoscopy is arranged several weeks after recovery to exclude an underlying neoplasm. Emergency surgery, drainage, and acute colonoscopy are reserved for complicated disease.",
    why: [
      "Emergency colectomy is reserved for complicated diverticulitis such as perforation or failure of medical therapy.",
      "Colonoscopy during acute inflammation risks perforation and is deferred until recovery.",
      "Correct: uncomplicated diverticulitis is managed supportively, with interval colonoscopy after recovery to exclude malignancy.",
      "There is no abscess to drain on imaging, so percutaneous drainage is not indicated.",
      "Corticosteroids do not treat diverticulitis and can mask or worsen complications."
    ]
  }
];
