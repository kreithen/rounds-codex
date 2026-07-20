/*
 * Rounds Codex - USMLE Step 3, Day 1 (Foundations of Independent Practice) bank, Batch 7 (25 items)
 * Day-1-FIP blueprint: biostatistics/epidemiology and medical-literature interpretation
 * are heavily represented alongside applied clinical vignettes emphasizing essential
 * diagnosis, best initial diagnostic testing, screening, prevention, and ethics.
 * All vignettes are 100% original; source material used for facts only, never phrasing.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E; only the keyed one starts "Correct")
 */
const USMLE_STEP3D1_B7 = [
  {
    id: "s3-0251",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Simpson's paradox in pooled data",
    difficulty: "hard",
    anchor: "table",
    vignette: "Two surgeons' outcomes for a procedure are audited. When results are pooled, Surgeon A has the higher overall success rate. When cases are stratified by preoperative risk, Surgeon B has the higher success rate in both the low-risk and the high-risk stratum. Surgeon B operates predominantly on high-risk patients.\n\n| Group | Surgeon A success | Surgeon B success |\n|---|---|---|\n| Low-risk cases | 95% (190/200) | 98% (49/50) |\n| High-risk cases | 70% (35/50) | 75% (150/200) |\n| Pooled | 90% (225/250) | 80% (199/250) |",
    lead: "Which statement best explains this discrepancy?",
    options: [
      "This is Simpson's paradox: the direction of the association reverses when data are pooled versus stratified because case-mix (risk severity) confounds the crude comparison, so the stratified (risk-adjusted) result is the valid one.",
      "The pooled result is always the most reliable estimate and should be the one reported to patients.",
      "Random sampling error alone accounts for the reversal, and no confounding is present.",
      "The reversal proves that surgical skill genuinely differs by patient subgroup, so no adjustment for case-mix is warranted.",
      "The reversal indicates that one surgeon's data must have been fabricated."
    ],
    answer: 0,
    exp: "Simpson's paradox occurs when an association seen within every subgroup reverses after the subgroups are combined, driven by a confounder unevenly distributed across groups. Here Surgeon B takes a much larger share of high-risk cases, dragging down the crude success rate even though B outperforms A within each risk stratum. The risk-stratified (adjusted) comparison is the valid one; the pooled figure is misleading, is not mere random error, does not reflect true effect modification requiring no adjustment, and does not imply fabrication.",
    why: [
      "Correct: the association reverses on pooling because risk severity confounds the crude comparison, so the stratified estimate is the valid one.",
      "The pooled estimate is confounded by case-mix here and is the misleading figure, not the reliable one.",
      "The consistent within-stratum reversal reflects structural confounding, not chance sampling error.",
      "Effect modification would show differing effects across strata; here the effect is consistent within strata and only reverses on pooling, which requires adjustment.",
      "A reversal from unequal case-mix is a well-described statistical phenomenon and does not imply fabricated data."
    ]
  },
  {
    id: "s3-0252",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Minimal clinically important difference",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A randomized trial of a new analgesic for chronic pain enrolls 4,000 patients and reports the change in pain on a 0-to-100-mm visual analog scale. The prespecified minimal clinically important difference for this scale is 15 mm.\n\n| Output | Value |\n|---|---|\n| Mean VAS reduction (drug vs placebo) | 3 mm |\n| 95% confidence interval | 2 to 4 mm |\n| p-value | <0.001 |\n| Minimal clinically important difference | 15 mm |",
    lead: "Which statement best interprets this result?",
    options: [
      "Because the difference is statistically significant, the drug is clinically important and should be adopted.",
      "The 3-mm difference is statistically significant but far smaller than the 15-mm minimal clinically important difference, so it is unlikely to be meaningful to patients despite the very low p-value.",
      "A statistically significant result guarantees that the effect exceeds the minimal clinically important difference.",
      "The minimal clinically important difference is determined by the study's p-value.",
      "A larger sample size would have increased the minimal clinically important difference."
    ],
    answer: 1,
    exp: "Statistical significance and clinical importance are distinct. With a very large sample, even a trivial 3-mm difference can achieve a tiny p-value, but if it falls below the minimal clinically important difference (the smallest change patients perceive as beneficial), it is unlikely to matter clinically. The minimal clinically important difference is anchored to patient-perceived benefit, not to the p-value or sample size, and significance does not guarantee the effect crosses that threshold.",
    why: [
      "Statistical significance does not equal clinical importance; a significant but sub-threshold effect may be meaningless to patients.",
      "Correct: the significant 3-mm effect is below the 15-mm minimal clinically important difference, so it is unlikely to be clinically meaningful despite the low p-value.",
      "A small p-value from a large sample can accompany an effect well below the clinical importance threshold.",
      "The minimal clinically important difference is set by patient-perceived benefit, not derived from the p-value.",
      "Sample size affects precision and p-values, not the value of the minimal clinically important difference."
    ]
  },
  {
    id: "s3-0253",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Berkson (admission-rate) bias",
    difficulty: "moderate",
    anchor: null,
    vignette: "Investigators conduct a case-control study using only hospitalized patients. Cases have disease A and controls are patients admitted for other reasons. They find an apparently protective inverse association between disease A and a second condition, disease B. In the community, both disease A and disease B independently raise the likelihood of hospital admission.",
    lead: "Which bias most likely explains this spurious inverse association?",
    options: [
      "Recall bias, because hospitalized cases remember exposures differently.",
      "Lead-time bias, because disease A is detected earlier in hospitalized patients.",
      "Berkson (admission-rate) bias: selecting controls from hospitalized patients, when both conditions independently increase admission, distorts the exposure-disease association and can create a spurious inverse relationship.",
      "Immortal-time bias, because follow-up before admission is misclassified.",
      "The inverse association is real and fully explained by confounding that simple adjustment removes."
    ],
    answer: 2,
    exp: "Berkson bias is a selection bias that arises in hospital-based case-control studies when both the disease of interest and the exposure (or a second condition) independently increase the probability of hospitalization. Restricting sampling to admitted patients distorts the true association and can even reverse its direction, producing a spurious inverse relationship. It is not recall bias (a measurement problem), lead-time or immortal-time bias (time-related), and it is not removed by simple covariate adjustment because the distortion is in how subjects were selected.",
    why: [
      "Recall bias is differential recall of exposures, a measurement problem, not the selection distortion described here.",
      "Lead-time bias concerns earlier detection advancing apparent survival, not hospital-based selection.",
      "Correct: sampling controls from hospitalized patients, when both conditions raise admission, produces Berkson selection bias and a spurious inverse association.",
      "Immortal-time bias involves misclassified person-time before treatment, not selection of hospitalized subjects.",
      "The association is an artifact of selection, not a true effect fixable by ordinary adjustment."
    ]
  },
  {
    id: "s3-0254",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Multiple comparisons and family-wise error",
    difficulty: "moderate",
    anchor: null,
    vignette: "A negative primary-outcome trial reports 20 secondary and subgroup analyses, each tested at a significance threshold of 0.05. One of them reaches p = 0.04, and the sponsor issues a press release highlighting this finding as evidence the drug works in that subgroup.",
    lead: "Which statement best interprets this finding?",
    options: [
      "The p = 0.04 result proves the drug is effective in that subgroup.",
      "A p-value of 0.04 means there is a 4% probability that the null hypothesis is true.",
      "Performing many comparisons reduces the overall type I error rate.",
      "Testing 20 independent hypotheses at 0.05 inflates the family-wise type I error so that roughly one false-positive is expected by chance alone; such a finding needs multiplicity correction and should be treated as hypothesis-generating.",
      "No adjustment for multiple testing is ever required for secondary outcomes."
    ],
    answer: 3,
    exp: "When many hypotheses are each tested at alpha 0.05, the probability of at least one false-positive rises sharply (the family-wise error rate); with 20 independent tests roughly one significant result is expected by chance even if no true effect exists. A lone significant secondary result in an otherwise negative trial is therefore hypothesis-generating and requires multiplicity correction (e.g., Bonferroni) or prospective confirmation. A p-value is not the probability the null is true, and multiple testing increases, not decreases, type I error.",
    why: [
      "A single subgroup p-value amid many comparisons does not prove efficacy and may be a chance finding.",
      "A p-value is the probability of the data (or more extreme) if the null were true, not the probability the null is true.",
      "Multiple comparisons increase, not reduce, the family-wise type I error rate.",
      "Correct: 20 tests at 0.05 make about one false-positive expected by chance, so the result needs multiplicity correction and is only hypothesis-generating.",
      "Multiplicity correction is precisely what many secondary and subgroup analyses require."
    ]
  },
  {
    id: "s3-0255",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Recall bias in case-control studies",
    difficulty: "easy",
    anchor: null,
    vignette: "In a case-control study of birth defects, mothers of affected infants are interviewed about first-trimester medication and dietary exposures alongside mothers of healthy infants. Mothers of affected infants, having searched for an explanation, report their exposures far more thoroughly and completely than control mothers.",
    lead: "Which type of bias is most likely introduced?",
    options: [
      "Selection bias from the way cases were enrolled.",
      "Lead-time bias from earlier detection of the outcome.",
      "Confounding by an unmeasured third variable.",
      "Regression to the mean on repeated measurement.",
      "Recall bias: differential accuracy of exposure reporting between cases and controls, a form of information bias that distorts the exposure-outcome association."
    ],
    answer: 4,
    exp: "Recall bias is a form of information (measurement) bias in which cases and controls report past exposures with differing accuracy or completeness. Mothers of affected infants often recall and report exposures more thoroughly than controls, systematically distorting the estimated association. It is not selection bias (about who is enrolled), lead-time bias, confounding, or regression to the mean, all of which describe different mechanisms.",
    why: [
      "Selection bias concerns how subjects are chosen for study, not differential recall of exposures.",
      "Lead-time bias applies to screening and survival timing, not exposure recall in a case-control study.",
      "Confounding involves a third variable associated with both exposure and outcome, not differential reporting.",
      "Regression to the mean describes extreme values moving toward average on remeasurement, not the mechanism here.",
      "Correct: cases and controls report exposures with differing accuracy, which is recall (information) bias."
    ]
  },
  {
    id: "s3-0256",
    system: "Preventive Medicine & Ethics",
    discipline: "Epidemiology",
    topic: "Standardized incidence ratio",
    difficulty: "moderate",
    anchor: "table",
    vignette: "An occupational cohort of chemical-plant workers is followed for new cancer diagnoses. Using age- and sex-specific incidence rates from the general population applied to the cohort's structure (indirect standardization), investigators calculate the number of incident cancers expected if the workers developed cancer at general-population rates and compare it with the observed number.\n\n| Quantity | Value |\n|---|---|\n| Observed incident cancers | 60 |\n| Expected incident cancers (standardized) | 40 |",
    lead: "What is the standardized incidence ratio, and what does it indicate?",
    options: [
      "The standardized incidence ratio is observed/expected = 60/40 = 1.5, indicating about 50% higher cancer incidence than expected from the reference population after standardization.",
      "The standardized incidence ratio is expected/observed = 40/60 = 0.67, indicating lower incidence than expected.",
      "The standardized incidence ratio uses deaths in its numerator and therefore cannot be computed from incident cases.",
      "A standardized incidence ratio of 1.5 means exactly 150 excess cancers occurred in the cohort.",
      "A standardized incidence ratio of 1.0 would mean no cancers occurred in the cohort."
    ],
    answer: 0,
    exp: "The standardized incidence ratio (SIR) is observed incident cases divided by the number expected from applying reference-population incidence rates to the cohort by indirect standardization: 60/40 = 1.5. A value above 1.0 indicates more new cases than expected; here about 50% excess incidence. Unlike the standardized mortality ratio, the SIR counts incident disease, not deaths. It is a ratio, not a count of excess cases, and 1.0 means observed equals expected, not zero cases.",
    why: [
      "Correct: SIR = observed/expected = 60/40 = 1.5, about 50% higher incidence than the standardized expectation.",
      "The ratio is observed over expected, so it is 1.5, not the inverted 0.67.",
      "The SIR uses incident cases in its numerator; the mortality version (SMR) uses deaths.",
      "An SIR of 1.5 is a ratio meaning 50% excess incidence, not a raw count of 150 cases.",
      "An SIR of 1.0 means observed equals expected, not that no cancers occurred."
    ]
  },
  {
    id: "s3-0257",
    system: "Preventive Medicine & Ethics",
    discipline: "Ethics",
    topic: "Duty to protect an identifiable third party",
    difficulty: "moderate",
    anchor: null,
    vignette: "During an outpatient visit, a psychiatric patient states a specific, credible intent and a concrete plan to seriously harm a named, identifiable person within the next few days. The patient is not currently committable on other grounds but is competent and adamant about the plan.",
    lead: "Which of the following is the most appropriate action?",
    options: [
      "Maintain strict confidentiality and take no external action, because the therapeutic relationship must be preserved.",
      "Take reasonable steps to protect the identifiable potential victim, which may include warning the person and notifying law enforcement, because a serious threat to an identifiable third party is a recognized exception to confidentiality.",
      "Simply document the threat in the chart and take no further action.",
      "Disclose the threat only if a court first issues a subpoena.",
      "Post a public warning on social media so the community can protect itself."
    ],
    answer: 1,
    exp: "When a patient poses a serious, credible threat of violence to a reasonably identifiable third party, the clinician's duty to protect that person overrides ordinary confidentiality. Appropriate steps may include warning the intended victim, notifying law enforcement, and arranging to prevent harm (such as hospitalization when criteria are met). Silence, mere documentation, waiting for a subpoena, or public disclosure all fail either to protect the victim or to respect confidentiality boundaries.",
    why: [
      "Absolute confidentiality is outweighed by the duty to protect an identifiable person from a serious, credible threat.",
      "Correct: reasonable protective steps, including warning the victim and notifying authorities, are warranted because a serious threat to an identifiable third party is a confidentiality exception.",
      "Documentation alone does nothing to protect the endangered person and is insufficient.",
      "The duty to protect does not require waiting for a court order before acting.",
      "Public social-media disclosure breaches confidentiality broadly and is not a proportionate protective measure."
    ]
  },
  {
    id: "s3-0258",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "One-time hepatitis C screening in adults",
    difficulty: "easy",
    anchor: null,
    vignette: "A healthy, asymptomatic 45-year-old man with normal liver enzymes comes for a routine preventive visit. He has never been tested for hepatitis C and reports no injection drug use or other classic risk factors. He asks whether any additional screening tests are recommended for someone his age.",
    lead: "Which of the following is the most appropriate screening recommendation?",
    options: [
      "No hepatitis C screening is needed because he has no risk factors and normal liver enzymes.",
      "Screen for hepatitis C only if his aminotransferases become elevated.",
      "Offer one-time hepatitis C screening with a hepatitis C virus antibody test, as recommended for all adults aged 18 to 79 regardless of risk factors.",
      "Perform a liver biopsy as the initial screening test for hepatitis C.",
      "Check hepatitis C virus RNA every year in all adults regardless of antibody status."
    ],
    answer: 2,
    exp: "Current recommendations call for one-time hepatitis C screening for all adults aged 18 to 79, independent of traditional risk factors, using a hepatitis C virus antibody test; a reactive result is confirmed with HCV RNA testing. Because chronic hepatitis C is often asymptomatic with normal enzymes, risk-based screening alone misses many cases. Liver biopsy is not a screening test, and universal annual RNA testing is not recommended.",
    why: [
      "Universal one-time screening is advised precisely because many infected adults are asymptomatic with normal enzymes and lack recognized risk factors.",
      "Waiting for enzyme elevation misses the large number of chronically infected patients with normal aminotransferases.",
      "Correct: one-time hepatitis C antibody screening is recommended for all adults 18 to 79 regardless of risk factors.",
      "Liver biopsy assesses fibrosis and is not a screening modality.",
      "Annual RNA testing for all adults is not recommended; a one-time antibody test is the screen."
    ]
  },
  {
    id: "s3-0259",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Pheochromocytoma diagnosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 46-year-old woman has episodic spells of pounding headache, palpitations, and drenching sweats lasting minutes, accompanied by markedly elevated blood pressure that returns toward normal between episodes. An adrenal mass was noted incidentally on prior imaging.\n\n| Test | Value | Reference |\n|---|---|---|\n| Blood pressure during spell | 210/120 mmHg | <120/80 |\n| Fasting glucose | 138 mg/dL | 70-99 |\n| Potassium | 4.2 mmol/L | 3.5-5.0 |",
    lead: "Which of the following is the most appropriate initial diagnostic test?",
    options: [
      "A random serum cortisol level, which establishes the diagnosis.",
      "Plasma renin and aldosterone levels as the initial screen.",
      "A serum TSH, since the spells indicate thyrotoxicosis.",
      "Measure plasma free metanephrines (or 24-hour urinary fractionated metanephrines), the biochemical screen for catecholamine excess from a pheochromocytoma.",
      "No testing is needed because adrenal masses are always benign."
    ],
    answer: 3,
    exp: "The triad of episodic headache, palpitations, and diaphoresis with paroxysmal hypertension and an adrenal mass is classic for pheochromocytoma. The best initial biochemical test is plasma free metanephrines or 24-hour urinary fractionated metanephrines, which have high sensitivity for catecholamine-secreting tumors; imaging localizes the tumor after biochemical confirmation. Random cortisol, renin/aldosterone, and TSH evaluate other disorders, and adrenal incidentalomas are not uniformly benign.",
    why: [
      "Random cortisol screens for cortisol excess (Cushing), not catecholamine-secreting tumors.",
      "Renin and aldosterone screen for primary aldosteronism, which typically causes sustained hypertension and hypokalemia, not paroxysmal spells.",
      "TSH evaluates thyroid disease; the paroxysmal catecholaminergic pattern here points to pheochromocytoma.",
      "Correct: plasma free metanephrines (or 24-hour urinary fractionated metanephrines) are the initial biochemical screen for pheochromocytoma.",
      "Adrenal masses require evaluation for hormone secretion and malignancy and are not assumed benign, especially with these symptoms."
    ]
  },
  {
    id: "s3-0260",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Cushing syndrome initial screening",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 40-year-old woman has progressive central weight gain, a rounded plethoric face, wide purple abdominal striae, proximal muscle weakness, new hypertension, and newly diagnosed diabetes. She takes no glucocorticoids.\n\n| Test | Value | Reference |\n|---|---|---|\n| Fasting glucose | 156 mg/dL | 70-99 |\n| Potassium | 3.3 mmol/L | 3.5-5.0 |\n| Blood pressure | 158/96 mmHg | <120/80 |",
    lead: "Which of the following is the most appropriate initial diagnostic test?",
    options: [
      "A single random serum cortisol level, which reliably establishes the diagnosis.",
      "A morning plasma ACTH level alone, which confirms the syndrome.",
      "A high-dose dexamethasone suppression test as the first-line screen.",
      "Adrenal CT imaging before any biochemical testing.",
      "A screening test for cortisol excess such as late-night salivary cortisol, a 1-mg overnight (low-dose) dexamethasone suppression test, or 24-hour urinary free cortisol."
    ],
    answer: 4,
    exp: "The clinical picture suggests endogenous Cushing syndrome. Because cortisol secretion is pulsatile, a single random level is not diagnostic; screening instead uses one of the validated tests demonstrating cortisol excess or loss of normal suppression: late-night salivary cortisol, the 1-mg overnight low-dose dexamethasone suppression test, or 24-hour urinary free cortisol (two abnormal results confirm hypercortisolism). ACTH measurement and high-dose dexamethasone testing help localize the cause after excess is confirmed, and imaging follows biochemical diagnosis.",
    why: [
      "A single random cortisol is uninterpretable because of pulsatile, diurnal secretion.",
      "Plasma ACTH helps localize the source only after hypercortisolism is biochemically confirmed.",
      "The high-dose dexamethasone test is used to distinguish causes, not as the initial screen for cortisol excess.",
      "Imaging is done after biochemical confirmation, since incidental adrenal masses are common and can mislead.",
      "Correct: late-night salivary cortisol, 1-mg overnight dexamethasone suppression, or 24-hour urinary free cortisol are the appropriate initial screens for cortisol excess."
    ]
  },
  {
    id: "s3-0261",
    system: "Internal Medicine",
    discipline: "Hematology/Oncology",
    topic: "Autoimmune hemolytic anemia diagnosis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 55-year-old woman has 2 weeks of increasing fatigue, jaundice, and dark urine. She has scleral icterus and mild splenomegaly. Laboratory studies are shown.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 8.1 g/dL | 12-16 |\n| Reticulocyte count | markedly elevated | 0.5-2.5% |\n| Lactate dehydrogenase | high | 140-280 U/L |\n| Indirect bilirubin | high | <0.8 mg/dL |\n| Haptoglobin | very low | 30-200 mg/dL |",
    lead: "Which of the following is the most appropriate next diagnostic test?",
    options: [
      "A direct antiglobulin (Coombs) test to detect antibody or complement on the red cells and confirm autoimmune hemolytic anemia.",
      "A bone marrow biopsy as the initial confirmatory test.",
      "Hemoglobin electrophoresis as the best next study.",
      "A glucose-6-phosphate dehydrogenase level obtained during the acute episode.",
      "Iron studies to evaluate the anemia."
    ],
    answer: 0,
    exp: "High reticulocytes, elevated lactate dehydrogenase and indirect bilirubin, and a very low haptoglobin indicate hemolysis. In an adult with acquired hemolysis, the key next test is the direct antiglobulin (Coombs) test; a positive result confirms immune-mediated destruction (autoimmune hemolytic anemia). Bone marrow biopsy is not the initial test, hemoglobin electrophoresis evaluates hemoglobinopathies, G6PD levels can be falsely normal when measured during an acute hemolytic episode, and iron studies do not explain a hemolytic picture.",
    why: [
      "Correct: the direct antiglobulin (Coombs) test detects antibody/complement on red cells and confirms autoimmune hemolytic anemia.",
      "Bone marrow biopsy is not the initial step when peripheral hemolysis markers are already evident.",
      "Hemoglobin electrophoresis diagnoses hemoglobinopathies, not antibody-mediated hemolysis.",
      "G6PD activity is often falsely normal during acute hemolysis because deficient cells have already lysed and are replaced by young cells.",
      "Iron studies do not explain a hemolytic anemia with low haptoglobin and high reticulocytes."
    ]
  },
  {
    id: "s3-0262",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Graves disease diagnosis",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 32-year-old woman has several weeks of weight loss despite a good appetite, heat intolerance, palpitations, and a fine tremor. She has mild proptosis and a smooth, symmetrically enlarged, nontender thyroid gland.\n\n| Test | Value | Reference |\n|---|---|---|\n| TSH | <0.01 mIU/L | 0.4-4.0 |\n| Free T4 | markedly elevated | 0.8-1.8 ng/dL |",
    lead: "Which of the following best confirms the underlying cause?",
    options: [
      "A thyroid ultrasound alone, which is diagnostic of the etiology.",
      "TSH receptor antibodies (thyroid-stimulating immunoglobulin), or a radioactive iodine uptake scan showing diffuse increased uptake, confirming Graves disease.",
      "Anti-thyroid peroxidase antibodies, which are diagnostic of Graves disease specifically.",
      "Fine-needle aspiration of the thyroid as the confirmatory test.",
      "Repeating the TSH in 6 months before any further evaluation."
    ],
    answer: 1,
    exp: "A suppressed TSH with elevated free T4, a diffuse goiter, and orbitopathy strongly suggest Graves disease. The etiology is confirmed by TSH receptor antibodies (thyroid-stimulating immunoglobulin) or by a radioactive iodine uptake scan showing diffuse increased uptake. Ultrasound alone does not establish the cause, anti-thyroid peroxidase antibodies are nonspecific and seen in several thyroid disorders, fine-needle aspiration evaluates nodules, and delaying evaluation is inappropriate for overt thyrotoxicosis.",
    why: [
      "Ultrasound characterizes anatomy but does not establish the autoimmune etiology of hyperthyroidism.",
      "Correct: TSH receptor antibodies or a diffusely increased radioactive iodine uptake confirm Graves disease.",
      "Anti-thyroid peroxidase antibodies are nonspecific and occur in Hashimoto and other thyroid diseases, not specifically Graves.",
      "Fine-needle aspiration is used to evaluate nodules, not to diagnose diffuse Graves disease.",
      "Overt thyrotoxicosis warrants prompt evaluation, not a 6-month deferral."
    ]
  },
  {
    id: "s3-0263",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Myasthenia gravis diagnosis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 28-year-old woman has several weeks of drooping eyelids and double vision that worsen through the day, along with difficulty chewing toward the end of meals and proximal limb weakness that improves after rest. Her symptoms are least noticeable in the morning.",
    lead: "Which of the following is the most appropriate initial diagnostic test?",
    options: [
      "MRI of the brain as the best initial test for these symptoms.",
      "Nerve conduction velocity to detect a demyelinating neuropathy.",
      "Serum acetylcholine receptor antibodies, the best initial serologic test for myasthenia gravis.",
      "A muscle biopsy as the initial confirmatory study.",
      "A lumbar puncture with cerebrospinal fluid analysis."
    ],
    answer: 2,
    exp: "Fatigable weakness affecting ocular, bulbar, and proximal muscles that worsens with activity and improves with rest is characteristic of myasthenia gravis. The best initial test is serum acetylcholine receptor antibodies, which are positive in most patients with generalized disease; repetitive nerve stimulation and single-fiber electromyography support the diagnosis when serology is negative. Brain MRI, standard nerve conduction studies, muscle biopsy, and lumbar puncture do not establish this neuromuscular-junction disorder.",
    why: [
      "Brain MRI does not diagnose a neuromuscular-junction disorder and would not explain fatigable weakness.",
      "Nerve conduction velocity assesses peripheral nerve conduction, not neuromuscular-junction transmission.",
      "Correct: serum acetylcholine receptor antibodies are the best initial serologic test for myasthenia gravis.",
      "Muscle biopsy evaluates myopathies, not antibody-mediated junction failure.",
      "Cerebrospinal fluid analysis does not diagnose myasthenia gravis."
    ]
  },
  {
    id: "s3-0264",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Infective endocarditis initial workup",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 39-year-old man who injects drugs has 10 days of fevers, malaise, and night sweats. Examination reveals a new holosystolic murmur, tender nodules on the finger pads, and small nontender palmar macules.\n\n| Finding | Detail |\n|---|---|\n| Temperature | 38.9 C |\n| Cardiac | new regurgitant murmur |\n| Skin | Osler nodes, Janeway lesions, splinter hemorrhages |",
    lead: "Which of the following is the most appropriate initial diagnostic step?",
    options: [
      "Start empiric antibiotics immediately without obtaining any cultures.",
      "Draw a single blood culture and begin treatment.",
      "Proceed directly to cardiac catheterization to evaluate the murmur.",
      "Obtain three sets of blood cultures from separate venipuncture sites and an echocardiogram, applying the Duke criteria to evaluate for infective endocarditis.",
      "Order a CT of the chest as the initial diagnostic test."
    ],
    answer: 3,
    exp: "Fever, a new regurgitant murmur, and peripheral stigmata (Osler nodes, Janeway lesions, splinter hemorrhages) in a person who injects drugs strongly suggest infective endocarditis. The initial diagnostic step is to obtain multiple (typically three) sets of blood cultures from separate sites before antibiotics, along with echocardiography, and to apply the Duke criteria. Giving antibiotics before cultures can render them falsely negative, a single culture is inadequate, and catheterization or CT is not the initial evaluation.",
    why: [
      "Antibiotics before cultures can sterilize the blood and obscure the causative organism.",
      "A single blood culture is insufficient; multiple sets from separate sites are needed to document sustained bacteremia.",
      "Cardiac catheterization does not diagnose endocarditis and is not the initial step.",
      "Correct: three sets of blood cultures from separate sites plus echocardiography, interpreted with the Duke criteria, are the appropriate initial workup.",
      "Chest CT is not the initial test for suspected endocarditis."
    ]
  },
  {
    id: "s3-0265",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Cystic fibrosis diagnosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 6-month-old infant has recurrent respiratory infections, chronic cough, bulky greasy stools, and poor weight gain despite adequate intake. The state newborn screen flagged an elevated immunoreactive trypsinogen.\n\n| Test | Value | Reference |\n|---|---|---|\n| Newborn screen immunoreactive trypsinogen | elevated | age-based cutoff |\n| Weight-for-age | below 3rd percentile | 3rd-97th |\n| Fecal elastase | low | >200 mcg/g |",
    lead: "Which of the following is the most appropriate confirmatory test?",
    options: [
      "A high-resolution chest CT as the confirmatory test.",
      "A sputum bacterial culture to establish the diagnosis.",
      "Serum immunoglobulin levels to confirm the disorder.",
      "Flexible bronchoscopy as the initial diagnostic study.",
      "A sweat chloride test, which if elevated confirms cystic fibrosis (with CFTR genetic testing as adjunct)."
    ],
    answer: 4,
    exp: "Recurrent respiratory infections, pancreatic insufficiency (steatorrhea, low fecal elastase), failure to thrive, and a positive newborn screen point to cystic fibrosis. The confirmatory test is the sweat chloride test; a value at or above the diagnostic threshold confirms the diagnosis, and CFTR mutation analysis is a complementary study. Chest CT, sputum culture, immunoglobulin levels, and bronchoscopy assess complications or alternative diagnoses but do not confirm cystic fibrosis.",
    why: [
      "Chest CT characterizes lung disease but does not diagnose cystic fibrosis.",
      "Sputum culture identifies pathogens but does not confirm the underlying disorder.",
      "Immunoglobulin levels evaluate immunodeficiency, not CFTR dysfunction.",
      "Bronchoscopy is not the diagnostic test for cystic fibrosis.",
      "Correct: the sweat chloride test confirms cystic fibrosis, with CFTR genetic testing as an adjunct."
    ]
  },
  {
    id: "s3-0266",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Slipped capital femoral epiphysis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 13-year-old boy with obesity has several weeks of dull left hip and knee pain and a limp, without preceding trauma or fever. On examination the affected hip is held in external rotation and loses internal rotation, and the leg obligately externally rotates as the hip is flexed.\n\n**[IMAGE: frog-leg lateral pelvis radiograph showing posteroinferior displacement of the left femoral epiphysis relative to the femoral neck]**",
    lead: "Which of the following is the most likely diagnosis and next step?",
    options: [
      "Slipped capital femoral epiphysis; make the child non-weight-bearing and obtain urgent orthopedic referral for surgical fixation.",
      "Transient (toxic) synovitis; reassure and treat with rest and NSAIDs at home.",
      "Legg-Calve-Perthes disease requiring only long-term observation.",
      "Septic arthritis requiring urgent joint aspiration and antibiotics.",
      "Benign growing pains needing no imaging or referral."
    ],
    answer: 0,
    exp: "An adolescent with obesity, insidious hip or referred knee pain, a limp, and loss of internal rotation with obligate external rotation on hip flexion has slipped capital femoral epiphysis, confirmed by posteroinferior epiphyseal displacement on the frog-leg lateral radiograph. Management is immediate non-weight-bearing and urgent orthopedic referral for in situ screw fixation to prevent further slippage and avascular necrosis. Transient synovitis, Perthes disease, septic arthritis, and growing pains do not fit this radiographic and clinical picture.",
    why: [
      "Correct: the presentation and radiograph indicate slipped capital femoral epiphysis, which requires non-weight-bearing and urgent orthopedic fixation.",
      "Transient synovitis is typically postviral with a normal radiograph, not epiphyseal displacement.",
      "Legg-Calve-Perthes involves femoral head osteonecrosis in younger children and does not show acute epiphyseal slippage.",
      "Septic arthritis presents with fever and a toxic, acutely irritable joint, not chronic pain with a displaced epiphysis.",
      "Growing pains are a diagnosis of exclusion and do not produce this abnormal radiograph."
    ]
  },
  {
    id: "s3-0267",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Congenital hypothyroidism newborn screening",
    difficulty: "easy",
    anchor: null,
    vignette: "A term newborn appears well at the nursery discharge examination with no dysmorphic features and normal feeding. The parents ask which conditions the routine heel-stick newborn screen checks for and why one of them must be caught so early.",
    lead: "Which of the following best describes the recommended screening approach for congenital hypothyroidism?",
    options: [
      "No screening is needed unless the infant develops symptoms such as constipation or lethargy.",
      "Universal newborn screening with a blood thyroid test (TSH and/or T4) is recommended for all infants, because early detection and treatment prevent intellectual disability.",
      "Screen only infants who have a palpable goiter at birth.",
      "Defer thyroid screening until the child's first birthday.",
      "Obtain a thyroid ultrasound on every newborn as the primary screen."
    ],
    answer: 1,
    exp: "Congenital hypothyroidism is a leading preventable cause of intellectual disability, and affected newborns are usually asymptomatic at birth. Universal newborn screening with a blood TSH and/or T4 (from the heel-stick specimen) allows detection and prompt levothyroxine treatment before irreversible neurodevelopmental injury occurs. Symptom-based or goiter-based screening misses most cases, deferring to age 1 is far too late, and ultrasound is not a screening tool.",
    why: [
      "Waiting for symptoms misses the asymptomatic window during which treatment prevents intellectual disability.",
      "Correct: universal newborn TSH and/or T4 screening detects congenital hypothyroidism early, and treatment prevents intellectual disability.",
      "Most affected newborns have no goiter, so goiter-based screening would miss them.",
      "Deferring until age 1 forgoes the critical early window for preventing neurodevelopmental damage.",
      "Ultrasound is not used as the population screen; a blood thyroid test is."
    ]
  },
  {
    id: "s3-0268",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Postmenopausal bleeding evaluation",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 58-year-old woman who reached menopause 6 years ago has new painless vaginal bleeding for 2 weeks. She has never used hormone therapy, has a body mass index of 34, and has an otherwise unremarkable pelvic examination with no visible cervical or vaginal lesion.",
    lead: "Which of the following is the most appropriate initial diagnostic test?",
    options: [
      "Reassure her that postmenopausal bleeding is a normal variant and no evaluation is needed.",
      "Perform a Papanicolaou test alone, which is sufficient to evaluate the bleeding.",
      "Obtain an endometrial biopsy (or transvaginal ultrasound to assess endometrial thickness) to evaluate for endometrial hyperplasia or carcinoma.",
      "Begin empiric hormone therapy to control the bleeding without further testing.",
      "Proceed directly to hysterectomy without any tissue diagnosis."
    ],
    answer: 2,
    exp: "Any postmenopausal bleeding is presumed to be endometrial cancer until proven otherwise, especially with obesity as a risk factor. The appropriate initial evaluation is endometrial sampling (endometrial biopsy) or transvaginal ultrasound to measure endometrial thickness, with biopsy for a thickened or inadequately visualized endometrium. Reassurance, a Pap test alone, empiric hormone therapy, and immediate hysterectomy without a tissue diagnosis all fail to exclude malignancy appropriately.",
    why: [
      "Postmenopausal bleeding is never assumed normal; it requires evaluation to exclude endometrial cancer.",
      "The Pap test screens for cervical, not endometrial, pathology and is not adequate here.",
      "Correct: endometrial biopsy (or transvaginal ultrasound for endometrial thickness) is the appropriate initial evaluation for postmenopausal bleeding.",
      "Empiric hormone therapy without tissue diagnosis could mask an underlying malignancy.",
      "Hysterectomy should follow, not precede, a tissue diagnosis."
    ]
  },
  {
    id: "s3-0269",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Adnexal mass evaluation",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 62-year-old postmenopausal woman has several weeks of abdominal bloating, early satiety, and vague pelvic discomfort. On bimanual examination a firm, irregular right adnexal mass is palpated. A urine pregnancy test is not applicable given her menopausal status.",
    lead: "Which of the following is the most appropriate initial diagnostic evaluation?",
    options: [
      "Obtain a CT of the abdomen and pelvis as the first imaging study for the mass.",
      "Proceed directly to exploratory laparotomy without imaging.",
      "Perform a Papanicolaou test to evaluate the adnexal mass.",
      "Obtain a transvaginal pelvic ultrasound and a serum CA-125 to characterize the adnexal mass and assess ovarian cancer risk.",
      "Reassure the patient that adnexal masses in postmenopausal women are always benign."
    ],
    answer: 3,
    exp: "A postmenopausal woman with bloating, early satiety, and an adnexal mass raises concern for ovarian malignancy. The best initial evaluation is transvaginal ultrasound to characterize the mass, combined with serum CA-125 to help stratify risk and guide referral to gynecologic oncology. CT is not the first-line imaging for an adnexal mass, surgery should follow characterization, a Pap test does not evaluate ovarian masses, and postmenopausal adnexal masses carry meaningful malignancy risk.",
    why: [
      "CT is not the initial imaging modality for characterizing an adnexal mass; transvaginal ultrasound is preferred.",
      "Laparotomy should follow, not precede, imaging and tumor-marker assessment.",
      "The Pap test screens the cervix and does not evaluate an adnexal mass.",
      "Correct: transvaginal ultrasound plus serum CA-125 is the appropriate initial evaluation of an adnexal mass to assess malignancy risk.",
      "Adnexal masses in postmenopausal women carry a significant malignancy risk and are not assumed benign."
    ]
  },
  {
    id: "s3-0270",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Primary amenorrhea workup",
    difficulty: "hard",
    anchor: null,
    vignette: "A 16-year-old girl has never had a menstrual period. She has normal breast and pubic-hair development and is at a normal height for her age. She is not sexually active by report, and her general examination is otherwise unremarkable.",
    lead: "Which of the following is the most appropriate initial diagnostic approach?",
    options: [
      "Obtain a karyotype as the very first test before anything else.",
      "Reassure the family and simply observe until she turns 18.",
      "Perform a GnRH stimulation test as the initial study.",
      "Begin empiric estrogen therapy without any diagnostic evaluation.",
      "Start with a pregnancy test, then check FSH, LH, TSH, and prolactin and obtain a pelvic ultrasound to evaluate the outflow tract and gonadal function."
    ],
    answer: 4,
    exp: "Primary amenorrhea warrants evaluation by age 15 when secondary sexual characteristics are present. Even with normal development, pregnancy must be excluded first, followed by FSH and LH (to localize the problem to the ovary versus the hypothalamic-pituitary axis), TSH and prolactin, and pelvic ultrasound to assess for a uterus and outflow-tract anatomy. Karyotype and other targeted tests follow based on these results; observation, GnRH testing, or empiric estrogen are not the appropriate initial steps.",
    why: [
      "Karyotype is obtained selectively based on initial hormone and imaging results, not as the first universal test.",
      "Absent menses by 15 with normal development warrants evaluation now, not watchful waiting until 18.",
      "A GnRH stimulation test is not the initial study for primary amenorrhea.",
      "Empiric estrogen without a diagnosis could mask the underlying cause and is inappropriate.",
      "Correct: exclude pregnancy first, then obtain FSH, LH, TSH, prolactin, and a pelvic ultrasound to evaluate the outflow tract and gonadal axis."
    ]
  },
  {
    id: "s3-0271",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Anorexia nervosa diagnosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 17-year-old girl has lost substantial weight over 6 months through severe dietary restriction and compulsive exercise. She is intensely afraid of gaining weight, sees herself as overweight despite a very low body mass index, and has not menstruated in 4 months. She denies binge eating or purging.\n\n| Test | Value | Reference |\n|---|---|---|\n| Heart rate | 46 beats/min | 60-100 |\n| Potassium | 3.2 mmol/L | 3.5-5.0 |\n| Body mass index | 15.5 kg/m^2 | 18.5-24.9 |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Anorexia nervosa, restricting type.",
      "Bulimia nervosa.",
      "Major depressive disorder with poor appetite.",
      "Hyperthyroidism causing the weight loss.",
      "Avoidant/restrictive food intake disorder."
    ],
    answer: 0,
    exp: "Marked low body weight from restriction, an intense fear of weight gain, and a distorted body image in an adolescent with bradycardia and hypokalemia are diagnostic of anorexia nervosa, restricting type. Bulimia nervosa involves recurrent binge-purge cycles at a typically normal or higher weight. Depression and hyperthyroidism can cause weight loss but not the characteristic fear of weight gain and body-image disturbance, and avoidant/restrictive food intake disorder lacks the weight-related body-image concern.",
    why: [
      "Correct: low weight from restriction, intense fear of weight gain, and body-image distortion define anorexia nervosa, restricting type.",
      "Bulimia nervosa features recurrent binge eating and compensatory purging, which she denies, usually at a normal weight.",
      "Depression can reduce appetite but does not produce the fear of weight gain and distorted body image seen here.",
      "Hyperthyroidism causes weight loss with increased appetite, not a driven fear of gaining weight.",
      "Avoidant/restrictive food intake disorder involves restriction without the weight-related body-image disturbance central to this case."
    ]
  },
  {
    id: "s3-0272",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Obsessive-compulsive disorder diagnosis",
    difficulty: "easy",
    anchor: null,
    vignette: "A 24-year-old man describes intrusive, unwanted thoughts that his hands are contaminated, which provoke intense anxiety. To relieve the anxiety he washes his hands in a rigid ritual for several hours each day. He recognizes the behavior is excessive and senseless, but resisting it becomes unbearable, and the rituals now make him late for work.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Generalized anxiety disorder.",
      "Obsessive-compulsive disorder.",
      "Obsessive-compulsive personality disorder.",
      "Specific phobia of contamination.",
      "Illness anxiety disorder."
    ],
    answer: 1,
    exp: "Recurrent intrusive obsessions (contamination fears) that drive time-consuming, distressing compulsions (ritualized washing) recognized as excessive define obsessive-compulsive disorder. Generalized anxiety disorder involves diffuse worry without ritualized compulsions. Obsessive-compulsive personality disorder is a pervasive pattern of perfectionism and control without true obsessions and compulsions. Specific phobia is fear of a discrete stimulus without ritual, and illness anxiety disorder centers on fear of having a serious disease.",
    why: [
      "Generalized anxiety disorder is characterized by pervasive worry, not intrusive obsessions with ritualized compulsions.",
      "Correct: intrusive contamination obsessions with time-consuming, distressing washing compulsions recognized as excessive define obsessive-compulsive disorder.",
      "Obsessive-compulsive personality disorder is an egosyntonic pattern of perfectionism and rigidity without true obsessions and compulsions.",
      "Specific phobia involves fear of a discrete object or situation without compulsive rituals.",
      "Illness anxiety disorder centers on preoccupation with having a serious illness, not contamination-driven washing rituals."
    ]
  },
  {
    id: "s3-0273",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Acute aortic dissection diagnosis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 63-year-old man with longstanding hypertension has abrupt, severe, tearing chest pain radiating to the back. He is hypertensive with a 22 mmHg difference in systolic blood pressure between his arms. He is hemodynamically stable.\n\n**[IMAGE: portable chest radiograph showing a widened mediastinum]**",
    lead: "Which of the following is the most appropriate diagnostic test?",
    options: [
      "Reassure the patient and treat empirically for gastroesophageal reflux.",
      "Order an exercise treadmill stress test to evaluate the chest pain.",
      "Obtain CT angiography of the chest (or transesophageal echocardiography) to evaluate for acute aortic dissection.",
      "Send a D-dimer and discharge the patient if it is normal.",
      "Proceed directly to coronary catheterization as the initial diagnostic test."
    ],
    answer: 2,
    exp: "Abrupt tearing chest and back pain with an interarm blood-pressure differential and a widened mediastinum in a hypertensive patient is classic for acute aortic dissection. In a hemodynamically stable patient the diagnostic test of choice is CT angiography of the chest (transesophageal echocardiography is an alternative, particularly if the patient is unstable). Reassurance, a stress test, relying on a D-dimer to discharge, or going straight to coronary catheterization would dangerously miss a life-threatening dissection.",
    why: [
      "The presentation is a surgical emergency, not reflux, and empiric reassurance risks a fatal miss.",
      "A stress test is contraindicated and inappropriate for suspected acute aortic dissection.",
      "Correct: CT angiography of the chest (or transesophageal echocardiography) is the diagnostic test of choice for acute aortic dissection.",
      "A normal D-dimer does not safely exclude dissection in a high-probability presentation, so discharge is unsafe.",
      "Coronary catheterization does not evaluate the aorta for dissection and would delay definitive imaging."
    ]
  },
  {
    id: "s3-0274",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Cauda equina syndrome",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 48-year-old man has 2 days of severe low back pain that now includes bilateral leg weakness, numbness over the buttocks and inner thighs, and difficulty urinating with subsequent dribbling. On examination he has decreased perianal sensation and reduced anal sphincter tone.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Prescribe bed rest and NSAIDs and arrange routine follow-up in 2 weeks.",
      "Obtain plain lumbar spine radiographs only and discharge him.",
      "Refer him to outpatient physical therapy for the back pain.",
      "Obtain an emergent MRI of the lumbosacral spine and arrange urgent surgical decompression, because these findings indicate cauda equina syndrome.",
      "Schedule an outpatient electromyogram to assess the leg weakness."
    ],
    answer: 3,
    exp: "Saddle anesthesia, bilateral lower-extremity weakness, urinary retention with overflow incontinence, and decreased anal tone are red flags for cauda equina syndrome, a surgical emergency usually from a large compressive lesion such as a central disc herniation. The appropriate next step is emergent MRI of the lumbosacral spine and urgent surgical decompression to prevent permanent neurologic deficits. Conservative measures, plain films alone, physical therapy, or outpatient electromyography would dangerously delay definitive care.",
    why: [
      "Conservative management delays decompression and risks permanent bladder, bowel, and motor dysfunction.",
      "Plain radiographs cannot exclude the compressive lesion, and discharge is unsafe with these red-flag findings.",
      "Physical therapy is inappropriate for an acute compressive emergency requiring urgent surgery.",
      "Correct: the red-flag findings indicate cauda equina syndrome, requiring emergent MRI and urgent surgical decompression.",
      "An outpatient electromyogram would delay the emergent imaging and surgery this syndrome demands."
    ]
  },
  {
    id: "s3-0275",
    system: "Surgery",
    discipline: "Surgery",
    topic: "Sigmoid volvulus diagnosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "An 78-year-old bedbound nursing-home resident with chronic constipation has 1 day of progressive abdominal distension, cramping pain, and no passage of stool or flatus. His abdomen is markedly distended and tympanitic but soft with no peritoneal signs.\n\n**[IMAGE: abdominal radiograph showing a massively dilated inverted-U ('coffee-bean') loop of colon arising from the pelvis]**",
    lead: "Which of the following best describes the diagnosis and initial management?",
    options: [
      "Small-bowel obstruction requiring immediate laparotomy.",
      "Toxic megacolon requiring urgent colectomy.",
      "Cecal volvulus best managed with long-term stool softeners alone.",
      "Paralytic ileus requiring only nasogastric decompression and observation.",
      "Sigmoid volvulus; in the absence of peritonitis or ischemia, initial management is endoscopic (sigmoidoscopic) detorsion and decompression."
    ],
    answer: 4,
    exp: "An elderly, debilitated, chronically constipated patient with abdominal distension and a coffee-bean-shaped loop arising from the pelvis has sigmoid volvulus. When there is no peritonitis or evidence of ischemia, initial management is endoscopic detorsion and decompression (rigid or flexible sigmoidoscopy), which relieves the obstruction and allows elective sigmoid resection to prevent recurrence. Emergent laparotomy, colectomy for presumed toxic megacolon, softeners alone, or treating it as an ileus are not the appropriate initial approach.",
    why: [
      "The pelvic coffee-bean loop indicates a colonic volvulus, not small-bowel obstruction, and laparotomy is not the first step without peritonitis.",
      "Toxic megacolon involves systemic toxicity and colitis, which are absent here.",
      "This is a sigmoid, not cecal, volvulus, and softeners alone do not relieve an acute twist.",
      "Ileus does not produce a twisted coffee-bean loop, and the findings indicate mechanical volvulus.",
      "Correct: the findings indicate sigmoid volvulus, initially managed by endoscopic detorsion and decompression when there is no peritonitis or ischemia."
    ]
  }
];
