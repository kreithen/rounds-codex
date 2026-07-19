/*
 * Rounds Codex - USMLE Step 3, Day 1 (Foundations of Independent Practice) bank, Batch 5 (25 items)
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
const USMLE_STEP3D1_B5 = [
  {
    id: "s3-0151",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Funnel plot asymmetry and publication bias",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A meta-analysis pools 15 trials of a therapy. To assess whether small studies with unfavorable results might be missing from the literature, the authors plot each study's effect estimate against its precision (standard error).\n\n**[IMAGE: funnel plot with effect size on the x-axis and standard error on the y-axis; large precise studies cluster near the pooled estimate, but the lower-left region where small negative studies would fall is empty, producing a visibly asymmetric funnel]**",
    lead: "Which statement best interprets this funnel plot?",
    options: [
      "The asymmetry, with small negative studies apparently missing, suggests publication bias (small-study effects) that may have inflated the pooled effect estimate.",
      "A symmetric inverted funnel would prove the therapy is truly effective.",
      "The funnel plot directly quantifies statistical heterogeneity (I-squared) between studies.",
      "Funnel plot asymmetry confirms that the meta-analytic estimate is unbiased.",
      "The plot displays individual patient survival over follow-up time."
    ],
    answer: 0,
    exp: "A funnel plot graphs each study's effect against its precision; in the absence of bias, studies scatter symmetrically around the pooled estimate, widening at the base where small, imprecise studies vary more. Asymmetry with a gap where small unfavorable studies should lie suggests publication bias or other small-study effects, which can inflate the pooled effect. It is a visual screen, not a measure of heterogeneity or a proof of efficacy.",
    why: [
      "Correct: an asymmetric funnel with missing small negative studies suggests publication bias inflating the pooled estimate.",
      "Symmetry is reassuring against small-study bias but does not by itself prove a true treatment effect.",
      "Heterogeneity is quantified by I-squared and the Cochran Q test, not read off a funnel plot.",
      "Asymmetry raises concern for bias; it does not confirm the estimate is unbiased.",
      "A funnel plot shows study effect versus precision, not patient-level survival over time."
    ]
  },
  {
    id: "s3-0152",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Meta-analysis heterogeneity and the I-squared statistic",
    difficulty: "hard",
    anchor: "table",
    vignette: "A meta-analysis combines 12 randomized trials of an antihypertensive on stroke risk. Before interpreting the pooled result, the authors report measures of between-study consistency.\n\n| Statistic | Value |\n|---|---|\n| Number of trials | 12 |\n| I-squared | 82% |\n| Cochran Q test | p < 0.01 |",
    lead: "Which statement best interprets these heterogeneity measures?",
    options: [
      "An I-squared of 82% indicates low heterogeneity, so a fixed-effect pooled estimate can be trusted without concern.",
      "An I-squared of 82% indicates substantial heterogeneity: most of the variability across studies reflects true between-study differences rather than chance, so sources should be explored and a random-effects model considered.",
      "I-squared directly measures the degree of publication bias in the analysis.",
      "An I-squared of 82% means 82% of the trials favored the treatment.",
      "High I-squared proves the pooled association is causal."
    ],
    answer: 1,
    exp: "I-squared estimates the percentage of total variability across studies that is due to real between-study differences rather than sampling error; roughly 25%, 50%, and 75% mark low, moderate, and high heterogeneity. An I-squared of 82% with a significant Cochran Q indicates substantial heterogeneity, so investigators should look for explanatory differences (populations, doses, outcomes) and generally use a random-effects model. It does not measure publication bias, count studies favoring treatment, or establish causation.",
    why: [
      "An I-squared of 82% is high, not low, and warrants caution rather than a confident fixed-effect pooling.",
      "Correct: I-squared of 82% signals substantial true between-study heterogeneity, prompting exploration of sources and a random-effects approach.",
      "Publication bias is assessed with funnel plots or related tests, not with I-squared.",
      "I-squared describes variability, not the proportion of trials favoring a treatment.",
      "Heterogeneity statistics say nothing about causation, which depends on study design and validity."
    ]
  },
  {
    id: "s3-0153",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Diagnostic odds ratio as a single accuracy measure",
    difficulty: "moderate",
    anchor: "table",
    vignette: "Investigators summarize the accuracy of a new dichotomous diagnostic test with a single measure that combines sensitivity and specificity. The 2x2 table from their validation study is shown.\n\n| | Disease + | Disease - |\n|---|---|---|\n| Test + | 90 | 20 |\n| Test - | 10 | 80 |",
    lead: "What is the diagnostic odds ratio, and what does it indicate?",
    options: [
      "A diagnostic odds ratio of 1 would indicate a highly accurate test.",
      "The diagnostic odds ratio here is 0.5, indicating a poor test.",
      "The diagnostic odds ratio is (90 x 80)/(20 x 10) = 36; larger values indicate better overall discrimination, with 1 meaning no discriminative ability.",
      "The diagnostic odds ratio equals the positive predictive value of the test.",
      "The diagnostic odds ratio varies with disease prevalence just as predictive values do."
    ],
    answer: 2,
    exp: "The diagnostic odds ratio is the ratio of the odds of a positive test in diseased versus non-diseased people and equals (true positives x true negatives)/(false positives x false negatives): (90 x 80)/(20 x 10) = 7200/200 = 36. A value of 1 means the test cannot discriminate, and higher values indicate better overall discrimination. Like sensitivity and specificity, it is a property of the test and does not depend on prevalence, unlike predictive values.",
    why: [
      "A diagnostic odds ratio of 1 means no discrimination (test no better than chance), not high accuracy.",
      "The value here is 36, not 0.5; 0.5 would indicate a test performing worse than chance.",
      "Correct: (90 x 80)/(20 x 10) = 36, and larger diagnostic odds ratios indicate better discrimination.",
      "The diagnostic odds ratio is not the positive predictive value, which depends on prevalence.",
      "Unlike predictive values, the diagnostic odds ratio is prevalence-independent."
    ]
  },
  {
    id: "s3-0154",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Regression to the mean",
    difficulty: "hard",
    anchor: "table",
    vignette: "A wellness program enrolls only employees whose single screening blood pressure was in the highest 10%. It provides no active treatment but simply rechecks blood pressure 3 months later. The average of the selected group falls noticeably at the recheck.\n\n| Time point | Mean systolic BP (selected group) |\n|---|---|\n| Initial screening (top 10%) | 158 mm Hg |\n| Recheck at 3 months | 146 mm Hg |",
    lead: "Which phenomenon most likely explains the drop in the group's average blood pressure?",
    options: [
      "The observed decline proves the wellness program's counseling was effective.",
      "This demonstrates a placebo effect that exceeds any true drug effect.",
      "The decline proves the measurement instrument is systematically biased downward.",
      "Regression to the mean: subjects selected for extreme initial values tend to have less extreme values on repeat measurement, so some improvement is expected even with no true effect.",
      "This is a Hawthorne effect, in which being observed changes physiologic blood pressure."
    ],
    answer: 3,
    exp: "When individuals are chosen because a variable measurement was extreme, random fluctuation and measurement variability mean that a repeat measurement will, on average, be closer to the population mean, even with no intervention. This regression to the mean can masquerade as a treatment effect whenever a group is selected for extreme baseline values. A control group (or randomization) is needed to separate a true effect from this artifact.",
    why: [
      "Without a control group, the drop cannot be attributed to counseling; regression to the mean alone predicts it.",
      "A placebo effect is a real response to inert treatment, whereas here no treatment was given at all.",
      "A downward instrument bias would lower all readings, not selectively affect a group chosen for extreme highs.",
      "Correct: selecting the most extreme values guarantees average movement toward the mean on remeasurement, mimicking improvement.",
      "The Hawthorne effect is a behavioral change from being observed, not the statistical artifact seen here."
    ]
  },
  {
    id: "s3-0155",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Verification (work-up) bias in diagnostic accuracy studies",
    difficulty: "hard",
    anchor: "table",
    vignette: "Investigators evaluate a new noninvasive test against a gold-standard biopsy. Because biopsy is invasive, patients with a positive index test are almost always biopsied, whereas patients with a negative index test are only rarely sent for the reference standard.\n\n| Index test result | Proportion receiving gold-standard biopsy |\n|---|---|\n| Positive index test | 95% |\n| Negative index test | 8% |",
    lead: "Which bias most threatens the reported sensitivity and specificity?",
    options: [
      "Lead-time bias, because the test detects disease earlier than usual.",
      "Recall bias, because patients misreport their prior symptoms.",
      "Immortal time bias, from misclassified periods of follow-up.",
      "Publication bias, because negative studies go unpublished.",
      "Verification (work-up) bias: because the reference standard was applied preferentially to index-test-positive patients, the estimated sensitivity and specificity are distorted."
    ],
    answer: 4,
    exp: "Verification (work-up) bias arises when the decision to apply the reference standard depends on the index test result. When test-positive patients are far more likely to be verified than test-negative patients, true positives are captured more completely than true negatives and false negatives, which typically inflates sensitivity and lowers specificity. The remedy is to verify a representative sample of patients regardless of index test result, or to use statistical correction. It is unrelated to lead-time, recall, immortal time, or publication bias.",
    why: [
      "Lead-time bias concerns earlier detection shifting apparent survival, not selective application of a reference standard.",
      "Recall bias involves differential recollection of exposure, which is not the mechanism here.",
      "Immortal time bias concerns misclassified person-time in longitudinal studies, not diagnostic verification.",
      "Publication bias affects which whole studies are published, not who is verified within one accuracy study.",
      "Correct: preferential verification of test-positive patients defines work-up (verification) bias and distorts the accuracy estimates."
    ]
  },
  {
    id: "s3-0156",
    system: "Preventive Medicine & Ethics",
    discipline: "Epidemiology",
    topic: "Number needed to screen",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A screening program is evaluated for its effect on disease-specific mortality over 10 years. Investigators want to express the benefit as the number of people who must be screened to prevent one death.\n\n| Group | 10-year disease-specific mortality |\n|---|---|\n| Not screened | 0.40% |\n| Screened | 0.30% |",
    lead: "What is the number needed to screen to prevent one disease-specific death?",
    options: [
      "The number needed to screen is 1/(0.0040 - 0.0030) = 1/0.001 = 1000, so about 1000 people must be screened to prevent one death.",
      "The number needed to screen is 10.",
      "The number needed to screen equals the relative risk reduction of 25%.",
      "The number needed to screen cannot be computed without the test's sensitivity.",
      "A smaller absolute risk reduction produces a smaller number needed to screen."
    ],
    answer: 0,
    exp: "The number needed to screen is the reciprocal of the absolute risk reduction in the outcome attributable to screening. Here the absolute mortality reduction is 0.40% - 0.30% = 0.10% (0.001), so the number needed to screen is 1/0.001 = 1000. The relative risk reduction (25%) is a separate measure, and because the number needed to screen is the inverse of the absolute risk reduction, a smaller absolute reduction yields a larger, not smaller, number.",
    why: [
      "Correct: number needed to screen = 1/absolute risk reduction = 1/0.001 = 1000.",
      "A value of 10 would require a 10% absolute risk reduction, far larger than the 0.1% seen here.",
      "The 25% figure is the relative risk reduction, which is not the number needed to screen.",
      "The number needed to screen follows directly from the absolute risk reduction and does not require the test's sensitivity.",
      "Because it is the reciprocal of the absolute risk reduction, a smaller reduction gives a larger number needed to screen."
    ]
  },
  {
    id: "s3-0157",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Chlamydia screening in a young woman",
    difficulty: "easy",
    anchor: null,
    vignette: "A 21-year-old sexually active woman presents for a routine visit. She feels well and has no genitourinary symptoms. She has no chronic medical problems and asks whether she needs any screening tests as a young adult.",
    lead: "Which of the following is the most appropriate screening recommendation?",
    options: [
      "No screening is needed because she is asymptomatic.",
      "Screen annually for chlamydia (and gonorrhea) because she is a sexually active woman 24 years old or younger.",
      "Begin annual screening mammography now.",
      "Screen only if she has had more than one lifetime partner.",
      "Perform an endometrial biopsy to screen for infection."
    ],
    answer: 1,
    exp: "Sexually active women aged 24 years or younger are at increased risk for chlamydia and gonorrhea, and annual screening is recommended because many infections are asymptomatic and untreated infection can cause pelvic inflammatory disease and infertility. Screening is done with a nucleic acid amplification test. Mammography and endometrial biopsy are not screening tools for this purpose, and being asymptomatic does not remove the indication.",
    why: [
      "Most chlamydial infections are asymptomatic, so lack of symptoms is exactly why routine screening is advised.",
      "Correct: annual chlamydia (and gonorrhea) screening is recommended for sexually active women 24 or younger.",
      "Mammography is not indicated at 21 and does not screen for infection.",
      "Age and sexual activity, not a partner-number threshold, drive the routine screening recommendation.",
      "Endometrial biopsy is a diagnostic procedure for uterine pathology, not an infection screen."
    ]
  },
  {
    id: "s3-0158",
    system: "Preventive Medicine & Ethics",
    discipline: "Quality & Patient Safety",
    topic: "Surgical time-out to prevent wrong-site surgery",
    difficulty: "moderate",
    anchor: null,
    vignette: "An operating-room team is about to begin an elective knee arthroscopy. The circulating nurse notes that the consent, the marked site, and the imaging should be reconciled before the incision. The team is under time pressure and the surgeon is confident he knows the correct side.",
    lead: "Which of the following is the most appropriate patient-safety practice?",
    options: [
      "Rely on the surgeon's memory to confirm the correct operative site.",
      "Mark the surgical site only after the incision has been made.",
      "Perform a preincision time-out (the Universal Protocol) in which the entire team pauses to verify the correct patient, procedure, and marked site before starting.",
      "Skip formal verification to save operating time in stable patients.",
      "Assign verification solely to the most junior team member without using a checklist."
    ],
    answer: 2,
    exp: "Wrong-site, wrong-procedure, and wrong-patient surgery are 'never events' that are prevented by a standardized preincision time-out, part of the Universal Protocol. Immediately before starting, the whole team stops and actively confirms patient identity, the correct procedure, and the correct marked site using the consent and available imaging. Relying on memory, deferring site marking, or delegating verification without a structured checklist defeats the safeguard.",
    why: [
      "Memory alone is error-prone; the time-out exists precisely because reliance on recall causes wrong-site events.",
      "Site marking must occur before incision with the patient involved when possible, not afterward.",
      "Correct: a team-based preincision time-out verifying patient, procedure, and site is the standard safeguard against wrong-site surgery.",
      "Omitting verification to save time is exactly the shortcut that leads to preventable never events.",
      "Verification is a shared team responsibility using a checklist, not a task delegated informally to one junior member."
    ]
  },
  {
    id: "s3-0159",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Evaluation of asymptomatic microscopic hematuria",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 57-year-old man with a 30 pack-year smoking history has microscopic hematuria noted incidentally on a urinalysis and confirmed on a repeat sample. He has no dysuria, no recent trauma or vigorous exercise, and no signs of infection. His blood pressure and kidney function are normal.\n\n| Test | Value | Reference |\n|---|---|---|\n| Urine red blood cells | 8 per high-power field | < 3 |\n| Urine protein | negative | negative |\n| Urine culture | no growth | no growth |\n| Serum creatinine | 0.9 mg/dL | 0.7-1.3 |",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Reassure him, because microscopic hematuria never requires evaluation.",
      "Start empiric antibiotics for a presumed urinary tract infection.",
      "Proceed directly to radical cystectomy.",
      "Confirm the hematuria is glomerular vs urologic, and because it is persistent and he is a smoker, evaluate with cystoscopy and upper-tract imaging (CT urography) to exclude urothelial malignancy and renal disease.",
      "Begin systemic anticoagulation."
    ],
    answer: 3,
    exp: "Confirmed asymptomatic microscopic hematuria (3 or more red cells per high-power field on microscopy, without infection, menses, or trauma) requires evaluation, particularly in an older smoker who is at risk for urothelial cancer. A negative culture and absence of proteinuria or dysmorphic cells point away from infection and glomerular disease, so a urologic source must be excluded with cystoscopy and upper-tract imaging (CT urography). Reassurance, empiric antibiotics, immediate surgery, or anticoagulation are all inappropriate.",
    why: [
      "Persistent microscopic hematuria, especially in a smoker, does require evaluation, not blanket reassurance.",
      "There is no pyuria or positive culture, so empiric antibiotics are not indicated.",
      "Cystectomy is a treatment for confirmed invasive cancer, not a diagnostic step for unexplained hematuria.",
      "Correct: persistent hematuria in an at-risk smoker warrants cystoscopy and CT urography to exclude urothelial and renal disease.",
      "Anticoagulation would worsen bleeding and does not address the cause of the hematuria."
    ]
  },
  {
    id: "s3-0160",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Subclinical hypothyroidism",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 45-year-old asymptomatic woman has thyroid function checked as part of a routine evaluation. She feels well, has no goiter, and takes no medications. Her results are shown.\n\n| Test | Value | Reference |\n|---|---|---|\n| TSH | 7.2 mIU/L | 0.4-4.0 |\n| Free T4 | normal | 0.8-1.8 ng/dL |",
    lead: "Which of the following best describes the finding and management?",
    options: [
      "Start high-dose levothyroxine immediately regardless of the values.",
      "Start methimazole for hyperthyroidism.",
      "Diagnose overt hypothyroidism and begin lifelong therapy now.",
      "Order radioactive iodine ablation.",
      "This is subclinical hypothyroidism (mildly elevated TSH with normal free T4); confirm with repeat testing and monitor, reserving levothyroxine for higher TSH, symptoms, positive antibodies, or pregnancy."
    ],
    answer: 4,
    exp: "An elevated TSH with a normal free T4 defines subclinical hypothyroidism. For a mildly elevated TSH (below about 10 mIU/L) in an asymptomatic nonpregnant adult, the appropriate step is to confirm with repeat testing and monitor rather than automatically treat; levothyroxine is favored when TSH is higher (roughly 10 or more), when symptoms or thyroid antibodies are present, or in pregnancy. It is not overt hypothyroidism, and antithyroid or ablative therapy would be inappropriate.",
    why: [
      "Immediate high-dose levothyroxine is not warranted for a mildly elevated TSH in an asymptomatic patient.",
      "Methimazole treats hyperthyroidism, the opposite of this elevated-TSH picture.",
      "A normal free T4 makes this subclinical, not overt, hypothyroidism.",
      "Radioiodine ablation treats hyperthyroidism and has no role here.",
      "Correct: this is subclinical hypothyroidism; confirm and monitor, treating selectively based on TSH level, symptoms, antibodies, or pregnancy."
    ]
  },
  {
    id: "s3-0161",
    system: "Internal Medicine",
    discipline: "Oncology",
    topic: "Hypercalcemia of malignancy",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 66-year-old man with known metastatic squamous cell lung cancer becomes increasingly lethargic and constipated over several days, with polyuria and poor oral intake. He is clinically volume-depleted. Laboratory testing is obtained.\n\n| Test | Value | Reference |\n|---|---|---|\n| Calcium | 13.8 mg/dL | 8.5-10.5 |\n| Intact PTH | low | 15-65 pg/mL |\n| PTH-related peptide | elevated | undetectable |",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Aggressive isotonic saline volume expansion followed by a bisphosphonate such as zoledronic acid, with calcitonin for rapid short-term lowering.",
      "Start a thiazide diuretic to lower the calcium.",
      "Give calcium and vitamin D supplementation.",
      "Proceed to urgent parathyroidectomy.",
      "Restrict fluids to concentrate the urine."
    ],
    answer: 0,
    exp: "A markedly elevated calcium with a suppressed PTH and elevated PTH-related peptide indicates humoral hypercalcemia of malignancy. Symptomatic, volume-depleted patients are first rehydrated with isotonic saline to restore urine calcium excretion, then given a bisphosphonate (e.g., zoledronic acid) for durable control, with calcitonin added for rapid but transient lowering. Thiazides and calcium/vitamin D raise calcium further, parathyroidectomy is irrelevant with suppressed PTH, and fluid restriction worsens the hypercalcemia.",
    why: [
      "Correct: saline rehydration plus a bisphosphonate, with calcitonin for rapid lowering, is the standard treatment of hypercalcemia of malignancy.",
      "Thiazides reduce urinary calcium excretion and would worsen the hypercalcemia.",
      "Calcium and vitamin D would raise serum calcium further, the opposite of what is needed.",
      "Parathyroidectomy addresses PTH-driven disease, but PTH is appropriately suppressed here.",
      "Fluid restriction aggravates hypercalcemia; these patients need volume repletion."
    ]
  },
  {
    id: "s3-0162",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "GERD with alarm features",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 58-year-old man has had heartburn for over a year, only partly relieved by antacids. In the last 2 months he has developed difficulty swallowing solid foods that seems to be worsening, along with a 5 kg unintentional weight loss. He looks well and his abdomen is soft and nontender.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Continue empiric antacids indefinitely without further evaluation.",
      "Because alarm features (progressive dysphagia and weight loss) are present, perform upper endoscopy to evaluate for malignancy or complicated reflux disease.",
      "Start long-term antibiotics.",
      "Order abdominal ultrasound as the definitive diagnostic test.",
      "Reassure him that reflux symptoms never require further evaluation."
    ],
    answer: 1,
    exp: "Chronic reflux symptoms accompanied by alarm features, such as progressive dysphagia, unintentional weight loss, bleeding, anemia, or vomiting, warrant prompt upper endoscopy rather than continued empiric therapy, to exclude esophageal malignancy, stricture, or other complications. Uncomplicated reflux without alarm features can be managed with an empiric trial of acid suppression, but the new dysphagia and weight loss here change the approach.",
    why: [
      "Continuing empiric therapy ignores alarm features that require direct visualization of the esophagus.",
      "Correct: progressive dysphagia and weight loss are alarm features mandating upper endoscopy.",
      "Antibiotics do not treat reflux disease or its complications.",
      "Abdominal ultrasound does not evaluate the esophageal mucosa where the pathology lies.",
      "Alarm symptoms specifically require evaluation, so blanket reassurance is inappropriate."
    ]
  },
  {
    id: "s3-0163",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Screening for primary aldosteronism",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 46-year-old man has hypertension that remains poorly controlled despite three antihypertensive agents at adequate doses. He is also noted to have unexplained low potassium. He has no edema and normal kidney function.\n\n| Finding | Value |\n|---|---|\n| Blood pressure (on 3 agents) | 168/104 mm Hg |\n| Serum potassium | 3.1 mmol/L |\n| Serum creatinine | normal |",
    lead: "Which of the following is the most appropriate initial screening test?",
    options: [
      "No further workup; simply add a fourth antihypertensive.",
      "Order 24-hour urine metanephrines as the screening test.",
      "Measure the plasma aldosterone-to-renin ratio as the screening test for primary aldosteronism, with confirmatory testing and adrenal imaging if it is positive.",
      "Start a loop diuretic and recheck the potassium.",
      "Proceed directly to bilateral adrenalectomy."
    ],
    answer: 2,
    exp: "Resistant hypertension with spontaneous or easily provoked hypokalemia should prompt screening for primary aldosteronism. The screening test is the plasma aldosterone-to-renin ratio, drawn under standardized conditions; a high ratio (elevated aldosterone with suppressed renin) is followed by confirmatory (aldosterone suppression) testing and then adrenal imaging with possible venous sampling to distinguish an adenoma from bilateral hyperplasia. Urine metanephrines screen for pheochromocytoma, and empiric therapy or surgery without a diagnosis is inappropriate.",
    why: [
      "Resistant hypertension with hypokalemia specifically warrants a secondary-cause workup, not just another drug.",
      "Urine metanephrines screen for pheochromocytoma, not primary aldosteronism.",
      "Correct: the plasma aldosterone-to-renin ratio is the screening test for primary aldosteronism.",
      "A loop diuretic would worsen hypokalemia and does not establish the diagnosis.",
      "Adrenalectomy is only considered after biochemical confirmation and lateralization, not as an initial step."
    ]
  },
  {
    id: "s3-0164",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Osteoporosis screening and DEXA T-score interpretation",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 68-year-old postmenopausal woman undergoes bone mineral density screening with dual-energy x-ray absorptiometry. She has had no fractures and takes no bone-active medications. Her results are shown.\n\n| Site | T-score |\n|---|---|\n| Femoral neck | -2.6 |\n| Lumbar spine | -2.4 |",
    lead: "Which of the following best interprets these results and guides management?",
    options: [
      "A T-score of -2.6 represents normal bone density and needs no action.",
      "This is osteopenia only, so no treatment is ever indicated.",
      "The T-score compares her to age-matched peers, so treatment is unnecessary.",
      "A T-score of -2.5 or below (here -2.6 at the femoral neck) defines osteoporosis; initiate a bisphosphonate with calcium, vitamin D, and weight-bearing exercise, and evaluate for secondary causes.",
      "Teriparatide is the required first-line agent for every patient with a low T-score."
    ],
    answer: 3,
    exp: "The T-score compares bone density to a young healthy adult reference; a T-score of -2.5 or lower defines osteoporosis, -1.0 to -2.5 is osteopenia, and above -1.0 is normal. Her femoral neck T-score of -2.6 meets criteria for osteoporosis, so first-line therapy is a bisphosphonate along with adequate calcium and vitamin D, weight-bearing exercise, and fall-prevention, with evaluation for secondary causes. The Z-score, not the T-score, compares against age-matched peers, and teriparatide is reserved for severe or high-risk disease rather than routine first-line use.",
    why: [
      "A T-score of -2.6 is diagnostic of osteoporosis, not normal density.",
      "The femoral neck T-score of -2.6 is in the osteoporosis range, and treatment is indicated.",
      "Age-matched comparison is the Z-score; diagnosis and treatment here rest on the T-score.",
      "Correct: a T-score of -2.5 or below defines osteoporosis, warranting a bisphosphonate plus calcium, vitamin D, exercise, and a secondary-cause workup.",
      "Teriparatide is an anabolic agent reserved for severe or very-high-risk osteoporosis, not first-line for all."
    ]
  },
  {
    id: "s3-0165",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Oral rehydration for acute gastroenteritis",
    difficulty: "easy",
    anchor: null,
    vignette: "A 2-year-old boy has 2 days of watery, nonbloody diarrhea and a few episodes of vomiting during a viral illness. He is alert and interactive with slightly dry lips, still making tears and urinating, and has mild signs of dehydration. He is tolerating small sips by mouth.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Immediate intravenous fluids for any child with diarrhea.",
      "Withhold all fluids to rest the gut.",
      "Start empiric antibiotics for the viral gastroenteritis.",
      "Give an antidiarrheal such as loperamide as first-line therapy.",
      "Provide oral rehydration solution to correct the mild-to-moderate dehydration and continue age-appropriate feeding."
    ],
    answer: 4,
    exp: "Most acute gastroenteritis in children is viral and self-limited, and mild-to-moderate dehydration is best treated with oral rehydration solution, which is as effective as and safer than intravenous fluids, with continued age-appropriate feeding. Intravenous fluids are reserved for severe dehydration or failure of oral intake. Antibiotics are not indicated for viral illness, and antimotility agents such as loperamide are discouraged in young children.",
    why: [
      "Intravenous fluids are reserved for severe dehydration or inability to tolerate oral intake, not routine mild cases.",
      "Withholding fluids worsens dehydration; ongoing losses must be replaced.",
      "Antibiotics do not treat viral gastroenteritis and are not indicated here.",
      "Loperamide is discouraged in young children with acute gastroenteritis because of adverse effects.",
      "Correct: oral rehydration solution with continued feeding is first-line for mild-to-moderate dehydration."
    ]
  },
  {
    id: "s3-0166",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Fever in a young infant under 28 days",
    difficulty: "hard",
    anchor: "lab",
    vignette: "An 18-day-old, previously healthy, full-term infant is brought in for a rectal temperature of 38.6 C at home. He is feeding somewhat less but is currently well-appearing without an obvious source on examination.\n\n| Feature | Value |\n|---|---|\n| Age | 18 days |\n| Rectal temperature | 38.6 C |\n| Appearance | well-appearing, no focal source |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Obtain a full sepsis evaluation, including blood, urine, and cerebrospinal fluid cultures, start empiric parenteral antibiotics, and admit the infant.",
      "Discharge home with oral antibiotics and next-day follow-up.",
      "Give antipyretics and reassure the parents without any testing.",
      "Obtain only a chest radiograph and observe the infant at home.",
      "Start acyclovir alone without any bacterial cultures or antibacterial coverage."
    ],
    answer: 0,
    exp: "A febrile infant 28 days old or younger is at high risk for serious bacterial infection and cannot be reliably risk-stratified by appearance alone. The standard approach is a full sepsis evaluation, blood, urine, and cerebrospinal fluid studies with cultures, prompt empiric parenteral antibiotics, hospital admission, and consideration of empiric acyclovir if herpes simplex is suspected. Outpatient oral therapy, reassurance without testing, or a limited workup are unsafe at this age.",
    why: [
      "Correct: neonatal fever mandates full cultures (blood, urine, CSF), empiric parenteral antibiotics, and admission.",
      "Oral antibiotics and outpatient management are unsafe for a febrile infant this young.",
      "A well appearance does not exclude serious bacterial infection in a neonate, so testing cannot be skipped.",
      "A limited workup with home observation misses occult bacteremia, urinary infection, or meningitis.",
      "Acyclovir may be added if herpes is suspected, but bacterial cultures and antibiotics remain essential."
    ]
  },
  {
    id: "s3-0167",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Innocent (functional) heart murmur in a child",
    difficulty: "moderate",
    anchor: null,
    vignette: "A healthy 5-year-old boy is seen for a routine visit. He has a soft, grade 2/6, musical vibratory systolic murmur heard best at the lower left sternal border that softens when he stands up. He is growing normally, is asymptomatic and active, and has normal pulses, a normal second heart sound, and no diastolic component or other abnormal findings.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Urgent cardiac catheterization.",
      "Reassure the family that this is a benign innocent (functional) murmur requiring no further cardiac workup, given the reassuring features.",
      "Start antibiotic prophylaxis before all future dental procedures.",
      "Restrict the child from all physical activity.",
      "Refer immediately for cardiac surgery."
    ],
    answer: 1,
    exp: "A soft (grade 1-2), systolic, musical or vibratory murmur that changes with position, in an asymptomatic child who is growing well with normal pulses, a normal second heart sound, and no diastolic murmur, is a classic innocent (functional) murmur, such as a Still murmur. These require only reassurance and no further testing. Features that would instead prompt echocardiography include a loud, harsh, or diastolic murmur, abnormal pulses or second heart sound, or symptoms.",
    why: [
      "Catheterization is invasive and unwarranted for a murmur with entirely benign features.",
      "Correct: the reassuring characteristics identify an innocent murmur needing only reassurance, not further workup.",
      "Endocarditis prophylaxis is not indicated for a structurally normal heart with an innocent murmur.",
      "Activity restriction is unnecessary because the child has no structural heart disease.",
      "Surgical referral is inappropriate for a benign functional murmur."
    ]
  },
  {
    id: "s3-0168",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Emergency contraception",
    difficulty: "easy",
    anchor: null,
    vignette: "A 22-year-old woman presents about 2 days after an episode of unprotected intercourse. She does not want to become pregnant and asks what her options are. Her last menstrual period was 10 days ago and she has no contraindications to hormonal or intrauterine methods.",
    lead: "Which of the following is the most appropriate counseling?",
    options: [
      "It is too late for any emergency contraception after 24 hours.",
      "Only combined oral contraceptive pills taken daily can serve as emergency contraception.",
      "Offer emergency contraception options: a copper intrauterine device (most effective) or oral ulipristal acetate or levonorgestrel, which are more effective the sooner they are used within 3 to 5 days.",
      "Emergency contraception works by aborting an already implanted pregnancy.",
      "No option is available; she should simply wait for her next period."
    ],
    answer: 2,
    exp: "Effective emergency contraception is available for several days after unprotected intercourse. The copper intrauterine device is the most effective option and can be placed up to about 5 days later; oral ulipristal acetate and levonorgestrel are also effective, with efficacy greatest the sooner they are taken. These methods prevent or delay ovulation (and the copper device impairs fertilization/implantation) and do not disrupt an established pregnancy.",
    why: [
      "Emergency contraception remains effective for several days, not only within the first 24 hours.",
      "Daily combined pills are not the standard method; dedicated regimens and the copper IUD are used.",
      "Correct: options include the copper IUD and oral ulipristal or levonorgestrel, most effective when used sooner.",
      "Emergency contraception prevents or delays ovulation and does not terminate an implanted pregnancy.",
      "Effective options exist, so simply waiting is not appropriate counseling."
    ]
  },
  {
    id: "s3-0169",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Abnormal uterine bleeding in a reproductive-age woman",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 33-year-old woman has several months of heavy, irregular menstrual bleeding. She is hemodynamically stable with a soft, nontender abdomen. A urine pregnancy test is negative and there are no signs of a bleeding disorder on history.",
    lead: "Which of the following is the most appropriate approach?",
    options: [
      "Proceed directly to hysterectomy.",
      "Provide no evaluation, since heavy menstrual bleeding is always benign.",
      "Start high-dose empiric antibiotics.",
      "After confirming a negative pregnancy test, evaluate with laboratory tests and structural assessment, and for stable bleeding begin hormonal therapy such as combined oral contraceptives or a levonorgestrel intrauterine device.",
      "Perform emergency uterine artery embolization for all patients."
    ],
    answer: 3,
    exp: "Evaluation of abnormal uterine bleeding first excludes pregnancy, then assesses for structural and nonstructural causes (the PALM-COEIN framework) with laboratory testing (including a blood count) and pelvic imaging as needed. For a hemodynamically stable patient, medical management with hormonal therapy, such as combined oral contraceptives or a levonorgestrel-releasing intrauterine device, is first-line and often controls bleeding without surgery. Hysterectomy and embolization are reserved for refractory or specific indications.",
    why: [
      "Hysterectomy is not a first-line step before evaluation and a trial of medical therapy.",
      "Heavy bleeding warrants evaluation for structural and systemic causes, not dismissal as always benign.",
      "There is no evidence of infection, so empiric antibiotics are inappropriate.",
      "Correct: exclude pregnancy, evaluate systematically, and manage stable bleeding first with hormonal therapy.",
      "Emergency embolization is a specialized intervention, not routine initial management of stable bleeding."
    ]
  },
  {
    id: "s3-0170",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Lactational mastitis",
    difficulty: "easy",
    anchor: null,
    vignette: "A 29-year-old woman who is breastfeeding her 3-week-old infant develops a tender, warm, wedge-shaped area of redness in one breast, along with a low-grade fever and body aches. There is no fluctuant mass and she is otherwise well.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Permanently stop breastfeeding from both breasts.",
      "Perform immediate surgical drainage even though no abscess is present.",
      "Observation only, because antibiotics are never needed for mastitis.",
      "Discontinue milk removal from the affected breast to rest it.",
      "Continue breastfeeding or milk removal and treat with an antibiotic that covers Staphylococcus aureus, such as dicloxacillin or cephalexin."
    ],
    answer: 4,
    exp: "Lactational mastitis is a cellulitis of the breast, usually due to Staphylococcus aureus, presenting with a tender erythematous wedge, fever, and malaise. Treatment is continued effective milk removal (breastfeeding or pumping) plus an oral antibiotic active against S. aureus, such as dicloxacillin or cephalexin, along with analgesia. Continued drainage of milk is therapeutic; stopping worsens engorgement. Surgical drainage is reserved for a true abscess.",
    why: [
      "Breastfeeding should continue; stopping causes milk stasis that worsens mastitis.",
      "Without a fluctuant abscess, surgical drainage is not indicated.",
      "Bacterial mastitis with fever generally requires antibiotics, not observation alone.",
      "Continued milk removal from the affected breast is part of therapy, not something to stop.",
      "Correct: continue milk removal and give an anti-staphylococcal antibiotic such as dicloxacillin or cephalexin."
    ]
  },
  {
    id: "s3-0171",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Screening for depression with the PHQ-9",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 39-year-old woman presents to a primary-care clinic for a routine visit. The practice uses a two-item screen (PHQ-2) for all adults, and hers is positive. The clinic has staff and workflows in place to ensure accurate diagnosis, treatment, and follow-up of patients who screen positive.",
    lead: "Which of the following is the most appropriate approach?",
    options: [
      "Administer a validated instrument such as the PHQ-9 and confirm the diagnosis of major depression by clinical interview, including assessment of bipolar disorder and suicide risk, before starting treatment.",
      "Conclude that screening for depression is not recommended in asymptomatic adults.",
      "Treat the positive screen as diagnostic of major depression without any further clinical assessment.",
      "Order thyroid imaging as the initial evaluation for the positive screen.",
      "Start an antidepressant immediately based on the screen alone, without assessing for bipolar disorder or suicidality."
    ],
    answer: 0,
    exp: "Screening adults for depression is recommended when systems are in place to ensure accurate diagnosis, effective treatment, and follow-up. A positive brief screen (PHQ-2) should be followed by a fuller validated instrument (PHQ-9) and, critically, a clinical interview to confirm major depressive disorder, gauge severity and suicide risk, and screen for bipolar disorder before starting an antidepressant. A positive screen alone is not diagnostic, and starting an antidepressant in undiagnosed bipolar disorder can precipitate mania.",
    why: [
      "Correct: follow a positive brief screen with the PHQ-9 and a confirmatory interview assessing bipolar disorder and suicide risk before treatment.",
      "Depression screening is recommended in adults when follow-up systems exist, as in this clinic.",
      "A positive screen raises suspicion but does not by itself establish the diagnosis.",
      "Thyroid imaging is not the initial step; a diagnostic interview and targeted evaluation come first.",
      "Starting an antidepressant without assessing for bipolar disorder or suicidality risks precipitating mania and missing high-risk patients."
    ]
  },
  {
    id: "s3-0172",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Bulimia nervosa",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 23-year-old woman describes recurrent episodes of eating large amounts of food with a sense of loss of control, followed by self-induced vomiting, several times a week for months. She is very concerned about her body shape. Her weight is normal for her height, and she has painless parotid enlargement and dental erosions.\n\n| Test | Value | Reference |\n|---|---|---|\n| Potassium | 3.0 mmol/L | 3.5-5.0 |\n| BMI | 22 kg/m2 | 18.5-24.9 |",
    lead: "Which of the following best describes the diagnosis and treatment?",
    options: [
      "Anorexia nervosa, because low weight defines the disorder.",
      "Bulimia nervosa; first-line treatment combines cognitive behavioral therapy with an SSRI such as fluoxetine, and electrolyte abnormalities are corrected.",
      "Binge-eating disorder, and no treatment is needed.",
      "Bulimia nervosa best treated with bupropion as the preferred medication.",
      "A primary renal tubular disorder rather than a psychiatric condition."
    ],
    answer: 1,
    exp: "Recurrent binge eating with compensatory purging and overvaluation of body shape at a normal weight defines bulimia nervosa; the hypokalemia, parotid swelling, and dental erosions reflect recurrent vomiting. First-line treatment is cognitive behavioral therapy plus an SSRI, with fluoxetine the best-studied and approved agent, along with correction of electrolyte disturbances and dental care. Bupropion is contraindicated because it lowers the seizure threshold in purging patients.",
    why: [
      "The normal BMI distinguishes bulimia nervosa from anorexia nervosa, which requires low weight.",
      "Correct: this is bulimia nervosa, treated with cognitive behavioral therapy plus fluoxetine and electrolyte correction.",
      "Binge-eating disorder lacks the compensatory purging seen here, and this patient does need treatment.",
      "Bupropion is contraindicated in bulimia because it increases seizure risk in purging patients.",
      "The hypokalemia is a consequence of purging, not a primary renal tubular disease."
    ]
  },
  {
    id: "s3-0173",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Salicylate (aspirin) overdose",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 28-year-old woman presents a few hours after ingesting a large amount of aspirin. She reports ringing in her ears and is breathing rapidly and deeply. She is agitated and diaphoretic. Arterial blood gas and chemistries are obtained.\n\n| Test | Value |\n|---|---|\n| pH | 7.44 |\n| pCO2 | low |\n| Bicarbonate | low |\n| Anion gap | elevated |\n| Salicylate level | markedly elevated |",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Administer intravenous flumazenil.",
      "Give a beta-blocker to control the tachypnea and tachycardia.",
      "Treat with sodium bicarbonate to alkalinize the serum and urine, enhancing salicylate elimination, and arrange hemodialysis for severe toxicity.",
      "Acidify the urine to speed salicylate elimination.",
      "Observe without intervention because the blood pH is within the normal range."
    ],
    answer: 2,
    exp: "Salicylate toxicity classically produces tinnitus and a mixed primary respiratory alkalosis with a high-anion-gap metabolic acidosis. Treatment is serum and urine alkalinization with sodium bicarbonate, which shifts salicylate out of tissues (including the brain) and traps the ionized drug in the urine to enhance excretion, along with potassium repletion; hemodialysis is used for severe or refractory toxicity, high levels, or end-organ effects. Acidifying the urine or withholding treatment because the pH looks normal would be dangerous.",
    why: [
      "Flumazenil treats benzodiazepine toxicity and has no role in salicylate poisoning.",
      "A beta-blocker does not address the toxicity and could blunt compensatory responses.",
      "Correct: sodium bicarbonate alkalinization enhances salicylate elimination, with hemodialysis for severe cases.",
      "Acidifying the urine would increase salicylate reabsorption, worsening toxicity.",
      "A near-normal pH from mixed disturbances does not indicate safety; salicylate toxicity still requires treatment."
    ]
  },
  {
    id: "s3-0174",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Acute angle-closure glaucoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 63-year-old woman presents with several hours of severe pain in one red eye with blurred vision, halos around lights, headache, and nausea. Symptoms began after she was in a dark movie theater.\n\n**[IMAGE: external eye photograph showing a red, injected eye with a hazy cornea and a fixed, mid-dilated pupil]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Prescribe topical atropine to dilate the pupil.",
      "Reassure the patient and arrange routine follow-up in a week.",
      "Patch the eye and prescribe oral antibiotics.",
      "This is acute angle-closure glaucoma: urgently lower the intraocular pressure with topical and systemic agents (such as acetazolamide) and obtain emergent ophthalmology consultation for definitive laser iridotomy.",
      "Apply a mydriatic agent and warm compresses."
    ],
    answer: 3,
    exp: "A painful red eye with a hazy cornea, a fixed mid-dilated pupil, halos, and nausea, often precipitated by dim light, indicates acute angle-closure glaucoma, an ophthalmologic emergency from a sudden rise in intraocular pressure. Management is prompt pressure lowering with topical agents and systemic acetazolamide (and osmotic agents) plus emergent ophthalmology consultation for definitive laser peripheral iridotomy. Dilating (mydriatic) drops such as atropine worsen the block and can cause permanent vision loss.",
    why: [
      "Atropine dilates the pupil and worsens angle closure, risking permanent vision loss.",
      "This is a sight-threatening emergency, not a condition for routine follow-up.",
      "Patching and antibiotics do not lower intraocular pressure and delay definitive care.",
      "Correct: urgently lower intraocular pressure and obtain emergent ophthalmology consultation for iridotomy.",
      "A mydriatic would aggravate the angle closure, exactly the wrong intervention."
    ]
  },
  {
    id: "s3-0175",
    system: "Surgery",
    discipline: "Vascular Surgery",
    topic: "One-time ultrasound screening for abdominal aortic aneurysm",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 67-year-old asymptomatic man presents to establish care. He has no abdominal complaints and a normal abdominal examination. He asks whether he needs any screening tests appropriate for his age and history.\n\n| Factor | Value |\n|---|---|\n| Age | 67 years |\n| Smoking history | 40 pack-years (former smoker) |\n| Abdominal symptoms | none |",
    lead: "Which of the following is the most appropriate screening recommendation?",
    options: [
      "No screening is indicated because he is asymptomatic.",
      "Annual CT angiography of the abdomen for all older men.",
      "Screening is only appropriate after an aneurysm has ruptured.",
      "Screen with a plain abdominal radiograph.",
      "Perform a one-time abdominal ultrasound to screen for abdominal aortic aneurysm, as recommended for men aged 65 to 75 who have ever smoked."
    ],
    answer: 4,
    exp: "A one-time abdominal ultrasound is recommended to screen for abdominal aortic aneurysm in men aged 65 to 75 years who have ever smoked, because ultrasound is accurate, inexpensive, and safe, and detecting an aneurysm before rupture allows elective repair that reduces aneurysm-related mortality. This 67-year-old former smoker qualifies. Repeated CT angiography, plain radiographs, and waiting until rupture are not appropriate screening strategies, and being asymptomatic is exactly when screening applies.",
    why: [
      "Abdominal aortic aneurysms are typically asymptomatic until rupture, which is why screening is done in asymptomatic men.",
      "Repeated CT angiography carries radiation and contrast risk and is not the screening modality; ultrasound is.",
      "Screening aims to detect the aneurysm before rupture, not after a catastrophic event.",
      "Plain radiographs are insensitive for aortic aneurysm and are not used for screening.",
      "Correct: a one-time abdominal ultrasound is recommended for men 65 to 75 who have ever smoked."
    ]
  }
];
