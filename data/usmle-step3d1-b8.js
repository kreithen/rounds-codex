/*
 * Rounds Codex - USMLE Step 3, Day 1 (Foundations of Independent Practice) bank, Batch 8 (25 items)
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
const USMLE_STEP3D1_B8 = [
  {
    id: "s3-0301",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Hazard versus cumulative risk",
    difficulty: "hard",
    anchor: "table",
    vignette: "A trial reports that the instantaneous rate (hazard) of a first hospitalization is essentially constant over 3 years of follow-up. Investigators observe that even though the hazard does not change, the cumulative probability that a patient has been hospitalized at least once keeps climbing with longer follow-up.\n\n| Quantity | Value |\n|---|---|\n| Hazard (per person-year) | ~0.10, approximately constant |\n| 1-year cumulative risk | ~10% |\n| 3-year cumulative risk | ~26% |",
    lead: "Which statement best explains the relationship between the hazard and the cumulative risk?",
    options: [
      "The hazard is an instantaneous event rate per unit time, whereas cumulative risk is the accumulating probability of having had the event by a given time; a constant hazard still produces a cumulative risk that rises toward 1 as follow-up lengthens.",
      "A constant hazard means the cumulative risk must also remain constant over time.",
      "Hazard and cumulative risk are identical quantities merely expressed in different units.",
      "A constant hazard implies that no patient will ever experience the event.",
      "The cumulative risk can never exceed the numerical value of the hazard."
    ],
    answer: 0,
    exp: "The hazard is an instantaneous rate (events per unit person-time) and can be constant, while cumulative risk (cumulative incidence) is the probability of having experienced the event by a given time and necessarily accumulates as people remain at risk. A constant hazard of about 0.10 per year still yields a cumulative risk that grows (roughly 10% at 1 year, 26% at 3 years) because each additional interval adds further opportunity for the event. The two are related but distinct: cumulative risk is not fixed by a constant hazard, is not the same quantity as the rate, does not imply zero events, and is not capped by the hazard's numeric value.",
    why: [
      "Correct: the hazard is an instantaneous rate while cumulative risk accumulates over time, so a constant hazard still drives cumulative risk upward with longer follow-up.",
      "A constant hazard produces a rising, not constant, cumulative risk because risk keeps accruing over time.",
      "Rate (per person-time) and cumulative probability are different constructs, not the same quantity in different units.",
      "A positive constant hazard means events do occur; it does not imply that no patient is ever hospitalized.",
      "Cumulative risk is a probability that approaches 1 with time and is not bounded by the numeric value of the hazard."
    ]
  },
  {
    id: "s3-0302",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Crude versus age-adjusted mortality rate",
    difficulty: "moderate",
    anchor: "table",
    vignette: "Two regions are compared for mortality. Region A has a higher crude death rate than Region B, but Region A has a substantially older population. After direct standardization to a common (standard) age distribution, Region B has the higher age-adjusted rate.\n\n| Rate | Region A | Region B |\n|---|---|---|\n| Crude death rate | 12 per 1,000 | 9 per 1,000 |\n| Age-adjusted death rate | 7 per 1,000 | 10 per 1,000 |",
    lead: "Which statement best interprets these rates?",
    options: [
      "The crude rates are the valid basis for comparing underlying mortality between the two regions.",
      "Region A's higher crude rate reflects its older age structure; after age standardization removes this confounding, Region B has the higher mortality, so the age-adjusted rates are the valid comparison.",
      "Age standardization introduces bias and should be avoided when comparing populations.",
      "The adjusted rates prove that the two populations have identical age structures.",
      "Crude and adjusted rates must always agree in direction, so one set must be an error."
    ],
    answer: 1,
    exp: "Crude rates lump together populations with different age structures; because mortality rises steeply with age, an older population like Region A can have a higher crude rate purely from its age mix. Direct standardization applies each region's age-specific rates to a common standard population, removing age as a confounder. Here the reversal shows that, age for age, Region B actually has higher mortality, so the age-adjusted rates are the valid comparison. Standardization reduces (does not introduce) confounding, does not imply identical age structures, and crude and adjusted rates need not agree in direction.",
    why: [
      "Crude rates are confounded by differing age structures and are not the valid basis for comparing underlying mortality here.",
      "Correct: the higher crude rate in Region A reflects its older population, and age standardization reveals that Region B truly has higher mortality.",
      "Standardization is a tool to remove confounding by age, not a source of bias to be avoided.",
      "Adjusted rates account for differing age structures; they do not imply the populations are demographically identical.",
      "A reversal between crude and adjusted rates is exactly what confounding by age produces and does not indicate an error."
    ]
  },
  {
    id: "s3-0303",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Confounding by indication",
    difficulty: "moderate",
    anchor: null,
    vignette: "An observational database study finds that hospitalized patients prescribed a certain sedative have higher mortality than those not prescribed it. On chart review, clinicians had preferentially prescribed the sedative to patients who were already more severely ill and more agitated at baseline.",
    lead: "Which threat to validity best explains the apparent drug-mortality association?",
    options: [
      "Lead-time bias, because the sedative advances the time of diagnosis.",
      "Nondifferential misclassification of the exposure, which exaggerated the effect.",
      "Confounding by indication: the underlying severity of illness that prompted prescribing is associated with both receiving the drug and death, creating a spurious drug-outcome association.",
      "Publication bias arising from the source database.",
      "The association is straightforwardly causal and requires no consideration of confounding."
    ],
    answer: 2,
    exp: "Confounding by indication occurs when the clinical reason a drug is prescribed (here, greater baseline severity and agitation) is itself associated with the outcome. Sicker patients both receive the sedative more often and die more often, so the drug appears harmful even if it has no true effect. This is a form of confounding, addressed by design (e.g., restriction, matching, propensity methods) or by adjusting for severity, not by lead-time bias (a screening/survival concept), exposure misclassification, or publication bias, and it should not be read as causal without accounting for the indication.",
    why: [
      "Lead-time bias concerns earlier detection advancing apparent survival, not preferential prescribing to sicker patients.",
      "The distortion arises from who received the drug (severity), not from random misclassification of exposure status.",
      "Correct: baseline severity drives both sedative use and mortality, producing confounding by indication rather than a true drug effect.",
      "Publication bias concerns which studies get published, not the within-study distortion described here.",
      "Ignoring the indication would wrongly attribute the higher mortality to the drug rather than to underlying illness severity."
    ]
  },
  {
    id: "s3-0304",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Allocation concealment in randomized trials",
    difficulty: "moderate",
    anchor: null,
    vignette: "In a randomized trial, the staff member enrolling participants could foresee each upcoming treatment assignment from an unsealed, predictable sequence. Consciously or not, this person steered sicker patients toward one of the study arms before assignment occurred.",
    lead: "Failure of which methodological safeguard most directly caused this problem?",
    options: [
      "Intention-to-treat analysis of the outcome data.",
      "Blinding of the outcome assessors after the trial ended.",
      "Achieving adequate statistical power for the primary outcome.",
      "Allocation concealment: hiding the upcoming assignment from those enrolling patients prevents selective channeling of patients into arms and protects randomization from selection bias.",
      "Use of an inert placebo comparator."
    ],
    answer: 3,
    exp: "Allocation concealment means the person enrolling and assigning participants cannot know or predict the next assignment, which prevents them from steering particular patients into a preferred arm and thereby preserves the baseline comparability that randomization is meant to create. It is distinct from blinding (which occurs after assignment and protects against biased outcome ascertainment and behavior). Intention-to-treat analysis, statistical power, and placebo use address other issues and would not prevent this pre-assignment selection bias.",
    why: [
      "Intention-to-treat governs how randomized patients are analyzed, not how assignment is concealed at enrollment.",
      "Blinding protects post-assignment ascertainment and behavior; the failure here occurred at the moment of allocation.",
      "Statistical power concerns detecting a true effect, not preventing selective channeling into arms.",
      "Correct: adequate allocation concealment would have hidden the upcoming assignment, preventing selective enrollment and the resulting selection bias.",
      "A placebo maintains blinding of treatment identity but does not conceal the allocation sequence from the enroller."
    ]
  },
  {
    id: "s3-0305",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Detection (surveillance) bias",
    difficulty: "hard",
    anchor: null,
    vignette: "A cohort study reports that patients taking a particular medication have a higher incidence of gallstones than nonusers. On review, patients taking the medication underwent abdominal ultrasonography far more frequently for unrelated monitoring, so asymptomatic gallstones were much more likely to be discovered in them.",
    lead: "Which bias best explains the observed association?",
    options: [
      "Recall bias from differential reporting of past exposures.",
      "Lead-time bias in the estimation of survival.",
      "Loss to follow-up (attrition) bias between the groups.",
      "Confounding by age alone, which is fully removed by simple adjustment.",
      "Detection (surveillance) bias: the exposed group was investigated more intensively, so subclinical disease was preferentially detected in them, producing a spurious association."
    ],
    answer: 4,
    exp: "Detection (ascertainment/surveillance) bias arises when one group is examined or tested more thoroughly than another, so disease is more likely to be found in the more-scrutinized group regardless of any true difference in occurrence. Here, more frequent ultrasonography in medication users uncovers asymptomatic gallstones that would go undetected in nonusers, inflating the apparent incidence. It is not recall bias (differential exposure reporting), lead-time bias (survival timing), attrition bias (differential dropout), or simple age confounding.",
    why: [
      "Recall bias concerns differential accuracy of exposure reporting, not differential intensity of disease testing.",
      "Lead-time bias relates to earlier detection advancing measured survival, not to unequal case ascertainment between exposure groups.",
      "Attrition bias stems from differential loss to follow-up, which is not the mechanism described.",
      "The distortion comes from unequal testing intensity, not from age confounding removable by adjustment.",
      "Correct: more intensive imaging in the exposed group preferentially detects subclinical gallstones, which is detection (surveillance) bias."
    ]
  },
  {
    id: "s3-0306",
    system: "Preventive Medicine & Ethics",
    discipline: "Epidemiology",
    topic: "Healthy-worker effect",
    difficulty: "hard",
    anchor: "table",
    vignette: "Investigators compare deaths among a cohort of actively employed factory workers with the number expected if the workers died at general-population rates. Fewer deaths are observed than expected, and the authors conclude the workplace exposure is protective.\n\n| Quantity | Value |\n|---|---|\n| Observed deaths in worker cohort | 80 |\n| Deaths expected from general-population rates | 100 |",
    lead: "Which phenomenon most likely explains the lower-than-expected mortality among the workers?",
    options: [
      "The workers must have received superior medical care unrelated to their employment.",
      "Reverse causation, in which low mortality itself caused the workers to be employed.",
      "The general-population reference rates were necessarily miscalculated.",
      "The healthy-worker effect: people healthy enough to be employed have lower baseline morbidity and mortality than the general population, which includes those too ill to work, biasing occupational cohort comparisons toward apparent benefit.",
      "This finding proves the workplace exposure is genuinely protective against death."
    ],
    answer: 3,
    exp: "The healthy-worker effect is a selection bias in occupational epidemiology: the actively employed are systematically healthier than the general population, which contains people too sick or disabled to work. Comparing worker mortality with general-population rates therefore tends to show fewer deaths than expected, mimicking a protective effect even for harmful exposures. Better comparisons use an internal referent (e.g., low- vs high-exposure workers). It is not simply superior medical care, reverse causation of that form, miscalculated reference rates, or proof of a protective exposure.",
    why: [
      "Superior care is not the established explanation; the systematic bias is that employable people are healthier at baseline.",
      "The employed are healthier for many reasons; framing it as low mortality causing employment mislabels the selection bias.",
      "The reference rates need not be wrong; the distortion comes from comparing a healthier employed group to the whole population.",
      "Correct: employed people are healthier than the general population, so occupational cohorts show fewer deaths than expected (the healthy-worker effect).",
      "The apparent benefit is an artifact of selection, not evidence that the workplace exposure prevents death."
    ]
  },
  {
    id: "s3-0307",
    system: "Preventive Medicine & Ethics",
    discipline: "Ethics",
    topic: "Elements of valid informed consent",
    difficulty: "easy",
    anchor: null,
    vignette: "Before an elective cholecystectomy, a resident is asked to obtain informed consent from a competent adult patient. The patient has decision-making capacity, is not under duress, and asks the resident to explain what the consent process should include.",
    lead: "Which of the following best describes the required elements of valid informed consent?",
    options: [
      "A signed consent form is sufficient by itself, regardless of what the patient actually understands.",
      "Only the procedure's risks need be disclosed; its benefits and alternatives are optional.",
      "Consent is valid only if the patient agrees to the physician's recommended option.",
      "The physician may withhold all risks in order to avoid alarming the patient.",
      "The patient must have decision-making capacity and voluntarily give consent after disclosure of the diagnosis, the nature and purpose of the procedure, its material risks and expected benefits, and reasonable alternatives (including no treatment)."
    ],
    answer: 4,
    exp: "Valid informed consent requires that a patient with decision-making capacity, acting voluntarily and free of coercion, be given adequate information: the diagnosis, the nature and purpose of the proposed intervention, its material risks and benefits, and the reasonable alternatives including the option of no treatment. A signature alone does not equal informed consent, disclosure cannot be limited to risks only, a valid refusal is still valid consent-process, and withholding all risks defeats the purpose of disclosure.",
    why: [
      "A signature documents consent but does not substitute for the patient's understanding and voluntary agreement.",
      "Disclosure must include benefits and reasonable alternatives, not risks alone.",
      "A capacitated patient may validly decline; consent does not require agreeing with the physician's recommendation.",
      "Routinely withholding risks undermines informed decision-making and is not permissible for ordinary elective surgery.",
      "Correct: capacity, voluntariness, and disclosure of diagnosis, procedure, risks, benefits, and alternatives are the required elements."
    ]
  },
  {
    id: "s3-0308",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Preconception folic acid supplementation",
    difficulty: "easy",
    anchor: null,
    vignette: "A healthy 27-year-old woman with no chronic conditions and no personal or family history of neural tube defects plans to conceive within the next few months. She takes no medications and asks what she can do now to reduce risks to a future pregnancy.",
    lead: "Which of the following is the most appropriate preventive recommendation?",
    options: [
      "No supplementation is needed unless a prior pregnancy was affected by a neural tube defect.",
      "Begin folic acid only after a positive pregnancy test is obtained.",
      "High-dose folic acid 4 mg daily is recommended for all women regardless of risk.",
      "Vitamin A supplementation is the recommended way to prevent neural tube defects.",
      "Begin a daily supplement containing about 400 micrograms of folic acid before conception and continue through early pregnancy to reduce the risk of neural tube defects."
    ],
    answer: 4,
    exp: "All women planning or capable of pregnancy should take about 400 micrograms of folic acid daily starting before conception, because the neural tube closes in the first few weeks (often before pregnancy is recognized), and adequate folate substantially reduces neural tube defect risk. Waiting for a positive test is too late. The high-dose 4-mg regimen is reserved for higher-risk women (e.g., a prior affected pregnancy), and vitamin A is not preventive and is teratogenic in excess.",
    why: [
      "Average-risk women still benefit; supplementation is universally recommended, not limited to those with a prior affected pregnancy.",
      "The neural tube closes very early, so starting only after a positive test misses the critical window.",
      "The 4-mg dose is for higher-risk women; average-risk women are advised about 400 micrograms daily.",
      "Vitamin A does not prevent neural tube defects and is teratogenic at high doses.",
      "Correct: about 400 micrograms of folic acid daily started preconceptionally reduces neural tube defect risk."
    ]
  },
  {
    id: "s3-0309",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Acromegaly diagnosis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 48-year-old man reports that his ring and shoe sizes have gradually increased over several years. He has coarsened facial features, jaw prognathism with new spacing between his teeth, macroglossia, excessive sweating, and carpal tunnel symptoms.\n\n| Feature | Finding |\n|---|---|\n| Ring/shoe size | progressively increased |\n| Jaw | prognathism, dental spacing |\n| Fasting glucose | 128 mg/dL |",
    lead: "Which of the following is the most appropriate initial diagnostic test?",
    options: [
      "Serum insulin-like growth factor 1 (IGF-1), the best initial screening test for acromegaly; failure of growth hormone to suppress on an oral glucose tolerance test then confirms it.",
      "A single random growth hormone level, which by itself reliably establishes the diagnosis.",
      "Pituitary MRI performed before any biochemical testing.",
      "Serum prolactin measured as the initial screening test for acromegaly.",
      "An overnight dexamethasone suppression test."
    ],
    answer: 0,
    exp: "Acral enlargement, coarse facial features, prognathism with dental spacing, macroglossia, and soft-tissue changes suggest acromegaly from growth hormone excess, usually a pituitary somatotroph adenoma. Because growth hormone is secreted in pulses, a random level is unreliable; the best initial test is IGF-1, which reflects integrated growth hormone activity. An elevated IGF-1 is confirmed by lack of growth hormone suppression during an oral glucose tolerance test, and pituitary MRI then localizes the tumor. Prolactin and dexamethasone testing evaluate different disorders.",
    why: [
      "Correct: IGF-1 is the best initial screen for acromegaly, confirmed by non-suppression of growth hormone on an oral glucose tolerance test.",
      "A single random growth hormone level is unreliable because secretion is pulsatile.",
      "MRI localizes the tumor after biochemical confirmation, not before initial testing.",
      "Prolactin may be co-secreted but is not the screening test for growth hormone excess.",
      "The dexamethasone suppression test screens for cortisol excess, not acromegaly."
    ]
  },
  {
    id: "s3-0310",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Hyperprolactinemia workup",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 29-year-old woman has secondary amenorrhea and milky nipple discharge for several months, along with intermittent headaches. She is not pregnant and takes no antipsychotics or other dopamine-blocking drugs.\n\n| Test | Value | Reference |\n|---|---|---|\n| Prolactin | 180 ng/mL | <25 |\n| Pregnancy test | negative | negative |\n| TSH | normal | 0.4-4.0 |",
    lead: "Which of the following is the most appropriate next diagnostic step?",
    options: [
      "Reassure the patient and simply repeat the prolactin in one year without imaging.",
      "Obtain an MRI of the pituitary to evaluate for a prolactin-secreting adenoma, having already excluded pregnancy, hypothyroidism, and dopamine-antagonist medications.",
      "Start a dopamine agonist immediately without any further evaluation.",
      "Measure 24-hour urinary metanephrines.",
      "Perform an insulin tolerance test as the next step."
    ],
    answer: 1,
    exp: "Amenorrhea and galactorrhea with a markedly elevated prolactin, after excluding pregnancy, primary hypothyroidism, and dopamine-antagonist drugs, point to a prolactinoma. The appropriate next step is pituitary MRI to identify an adenoma and assess its size and relationship to the optic chiasm, particularly given the headaches. A prolactin this high with these symptoms warrants imaging, not watchful waiting or empiric treatment before a diagnosis; metanephrines and insulin tolerance testing evaluate unrelated conditions.",
    why: [
      "A markedly elevated prolactin with symptoms warrants imaging now, not deferred repeat testing.",
      "Correct: after excluding pregnancy, hypothyroidism, and offending drugs, pituitary MRI evaluates for a prolactinoma.",
      "Treatment should follow, not precede, confirming and characterizing the underlying lesion.",
      "Urinary metanephrines screen for pheochromocytoma, which does not explain this presentation.",
      "The insulin tolerance test assesses growth hormone/cortisol reserve, not hyperprolactinemia."
    ]
  },
  {
    id: "s3-0311",
    system: "Internal Medicine",
    discipline: "Hematology/Oncology",
    topic: "Polycythemia vera diagnosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 58-year-old man has facial ruddiness, headaches, and intense generalized itching that is worst after a hot shower. On examination he has splenomegaly. Laboratory studies are shown.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 19.5 g/dL | 13.5-17.5 |\n| Hematocrit | 58% | 41-53 |\n| Serum erythropoietin | low | normal |",
    lead: "Which of the following is the most appropriate next diagnostic test?",
    options: [
      "Serum ferritin, which by itself confirms the diagnosis.",
      "A carboxyhemoglobin level to establish the cause.",
      "Testing for the JAK2 V617F mutation, which is present in nearly all cases of polycythemia vera and, together with the low erythropoietin, supports the diagnosis.",
      "Arterial blood gas measurement, which would confirm polycythemia vera.",
      "Bone marrow testing for the BCR-ABL fusion gene."
    ],
    answer: 2,
    exp: "Erythrocytosis with aquagenic pruritus, plethora, splenomegaly, and a low (suppressed) erythropoietin level is characteristic of polycythemia vera, a myeloproliferative neoplasm. The confirmatory next test is molecular analysis for the JAK2 V617F mutation, found in the great majority of cases; a low erythropoietin argues against secondary (hypoxia-driven) causes. Ferritin and arterial blood gas do not confirm the diagnosis, carboxyhemoglobin evaluates secondary polycythemia from carbon monoxide, and BCR-ABL defines chronic myeloid leukemia, not polycythemia vera.",
    why: [
      "Ferritin reflects iron stores and cannot confirm a myeloproliferative neoplasm.",
      "Carboxyhemoglobin evaluates a secondary cause of erythrocytosis, not primary polycythemia vera.",
      "Correct: JAK2 V617F mutation testing, with a low erythropoietin, confirms polycythemia vera.",
      "An arterial blood gas assesses hypoxemia (a secondary cause), not primary polycythemia vera.",
      "BCR-ABL is the hallmark of chronic myeloid leukemia, not polycythemia vera."
    ]
  },
  {
    id: "s3-0312",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Systemic lupus erythematosus initial diagnosis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 24-year-old woman has weeks of fatigue, joint pain in the hands and wrists, a facial rash that spares the nasolabial folds, and painless oral ulcers. Initial testing shows mild leukopenia and proteinuria.\n\n| Finding | Result |\n|---|---|\n| Malar rash, oral ulcers | present |\n| White blood cell count | low |\n| Urinalysis | proteinuria |",
    lead: "Which of the following is the most appropriate initial screening test?",
    options: [
      "Anti-double-stranded DNA antibody, used as the initial screening test.",
      "Anti-Smith antibody, used as the initial screening test.",
      "Rheumatoid factor as the best initial test.",
      "Antinuclear antibody (ANA), the most sensitive initial screening test for systemic lupus erythematosus; a positive result is followed by more specific antibodies such as anti-double-stranded DNA and anti-Smith.",
      "Complement C3 and C4 levels alone to establish the diagnosis."
    ],
    answer: 3,
    exp: "A young woman with a malar rash, arthritis, oral ulcers, cytopenia, and proteinuria has a presentation suggestive of systemic lupus erythematosus. The best initial screen is the antinuclear antibody, which is highly sensitive (nearly all patients are positive); a positive ANA is then followed by more specific tests such as anti-double-stranded DNA and anti-Smith antibodies to support the diagnosis. Anti-dsDNA and anti-Smith are specific but less sensitive, rheumatoid factor is nonspecific, and complement levels help assess activity rather than serve as the initial screen.",
    why: [
      "Anti-dsDNA is specific but not sensitive enough to serve as the initial screen.",
      "Anti-Smith is highly specific but insensitive, so it is a confirmatory rather than screening test.",
      "Rheumatoid factor is nonspecific and does not screen for lupus.",
      "Correct: ANA is the most sensitive initial screen, and a positive result prompts specific antibody testing (anti-dsDNA, anti-Smith).",
      "Complement levels help gauge disease activity but do not establish the initial diagnosis."
    ]
  },
  {
    id: "s3-0313",
    system: "Internal Medicine",
    discipline: "Hematology/Oncology",
    topic: "Chronic lymphocytic leukemia diagnosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 68-year-old man is found on routine bloodwork to have a persistently elevated white blood cell count. He feels well, with no fever or weight loss. Examination shows a few small, nontender cervical lymph nodes. The peripheral smear shows numerous mature-appearing small lymphocytes and smudge cells.\n\n| Test | Value | Reference |\n|---|---|---|\n| White blood cell count | 45,000/microL | 4,000-11,000 |\n| Lymphocytes | markedly increased | |\n| Smear | smudge cells | |",
    lead: "Which of the following is the most appropriate next diagnostic test?",
    options: [
      "Peripheral blood flow cytometry (immunophenotyping) to confirm a clonal B-cell population characteristic of chronic lymphocytic leukemia.",
      "Bone marrow biopsy as the required first step to make the diagnosis.",
      "Excisional lymph node biopsy as the initial diagnostic test.",
      "Hemoglobin electrophoresis to evaluate the lymphocytosis.",
      "A heterophile antibody (Monospot) test as the confirmatory study."
    ],
    answer: 0,
    exp: "A persistent, marked mature lymphocytosis with smudge cells in an older adult strongly suggests chronic lymphocytic leukemia. The diagnosis is confirmed by peripheral blood flow cytometry demonstrating a clonal B-cell population with the characteristic immunophenotype, so bone marrow or lymph node biopsy is usually unnecessary for diagnosis. Hemoglobin electrophoresis evaluates hemoglobinopathies, and the Monospot tests for infectious mononucleosis, which typically causes atypical (not clonal mature) lymphocytosis in younger patients.",
    why: [
      "Correct: peripheral blood flow cytometry identifies the clonal B-cell population that confirms chronic lymphocytic leukemia.",
      "Bone marrow biopsy is not required to diagnose CLL when blood flow cytometry is diagnostic.",
      "Excisional node biopsy is reserved for suspected transformation, not initial CLL diagnosis.",
      "Hemoglobin electrophoresis evaluates hemoglobin disorders, not a clonal lymphocytosis.",
      "The Monospot detects infectious mononucleosis, which does not fit this clonal mature lymphocytosis in an older adult."
    ]
  },
  {
    id: "s3-0314",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Multiple sclerosis diagnosis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 30-year-old woman has had two distinct neurologic episodes months apart: painful vision loss in one eye that resolved, and later a band of numbness ascending from the trunk. On examination she has an internuclear ophthalmoplegia and brisk reflexes.\n\n**[IMAGE: T2/FLAIR brain MRI showing multiple ovoid periventricular white-matter lesions oriented perpendicular to the ventricles (Dawson fingers)]**",
    lead: "Which of the following is the most appropriate initial diagnostic test?",
    options: [
      "Nerve conduction studies of the limbs.",
      "CT of the head without contrast.",
      "Electroencephalography.",
      "Muscle biopsy.",
      "MRI of the brain and spinal cord to demonstrate demyelinating lesions disseminated in space and time, the key initial test for multiple sclerosis (supported by cerebrospinal fluid oligoclonal bands)."
    ],
    answer: 4,
    exp: "Recurrent central neurologic events separated in time and location (optic neuritis, a sensory level, internuclear ophthalmoplegia) suggest multiple sclerosis. The most useful initial test is MRI of the brain and spinal cord, which shows characteristic demyelinating white-matter lesions (e.g., periventricular Dawson fingers) disseminated in space and time; cerebrospinal fluid oligoclonal bands provide support. Nerve conduction studies and muscle biopsy assess peripheral nerve and muscle, CT is insensitive for demyelination, and EEG evaluates seizures.",
    why: [
      "Nerve conduction studies evaluate peripheral nerves, not central demyelination.",
      "Noncontrast CT is insensitive for the white-matter demyelinating lesions of multiple sclerosis.",
      "EEG evaluates seizure activity, not demyelinating central nervous system disease.",
      "Muscle biopsy assesses myopathy, not a central demyelinating disorder.",
      "Correct: MRI of the brain and spinal cord demonstrates demyelinating lesions disseminated in space and time, the key initial test for multiple sclerosis."
    ]
  },
  {
    id: "s3-0315",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Retinoblastoma (leukocoria)",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 14-month-old girl is brought in because her parents noticed a white glow in one of her pupils in several recent flash photographs. On examination the red reflex is absent in that eye and appears white instead.\n\n**[IMAGE: red-reflex examination showing leukocoria (a white pupillary reflex) in the right eye instead of the normal red reflex]**",
    lead: "Which of the following is the most likely diagnosis and best next step?",
    options: [
      "Congenital cataract; routine outpatient follow-up in 6 months.",
      "Retinoblastoma; urgent referral to pediatric ophthalmology for dilated examination and imaging, because leukocoria with an absent red reflex is the classic presentation.",
      "A normal variant of the red reflex requiring no further evaluation.",
      "Bacterial conjunctivitis; treat with topical antibiotics.",
      "Refractive error; prescribe corrective lenses and reassess."
    ],
    answer: 1,
    exp: "Leukocoria (a white pupillary reflex) with an absent red reflex in a young child is the classic sign of retinoblastoma and demands urgent referral to pediatric ophthalmology for dilated fundoscopic examination and imaging. Early diagnosis is critical for vision and life preservation. Although congenital cataract can also cause an abnormal red reflex, leukocoria must be presumed to be retinoblastoma until excluded; it is never a normal variant and is not conjunctivitis or simple refractive error.",
    why: [
      "Cataract can disturb the red reflex, but leukocoria must first be urgently evaluated to exclude retinoblastoma, not merely followed.",
      "Correct: leukocoria with an absent red reflex is classic for retinoblastoma and requires urgent ophthalmology referral.",
      "A white reflex replacing the normal red reflex is abnormal and never a benign variant.",
      "Conjunctivitis causes discharge and redness, not leukocoria.",
      "Refractive error does not produce a white pupillary reflex."
    ]
  },
  {
    id: "s3-0316",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Meckel diverticulum",
    difficulty: "moderate",
    anchor: null,
    vignette: "A previously healthy 2-year-old boy passes a large amount of dark red and maroon blood per rectum. He has no pain, no diarrhea, and no fever, and his abdomen is soft and nontender. His hemoglobin is mildly decreased from baseline.",
    lead: "Which of the following is the most appropriate diagnostic test?",
    options: [
      "Abdominal ultrasound looking for the target sign of intussusception.",
      "Upper gastrointestinal endoscopy as the initial diagnostic test.",
      "A technetium-99m pertechnetate (Meckel) scan to detect ectopic gastric mucosa in a Meckel diverticulum, the most common cause of painless significant lower gastrointestinal bleeding in a young child.",
      "A barium enema as the first diagnostic study.",
      "Colonoscopy advanced to the cecum as the initial step."
    ],
    answer: 2,
    exp: "Painless, brisk lower gastrointestinal bleeding in a toddler is most often caused by a Meckel diverticulum containing ectopic gastric mucosa that ulcerates adjacent bowel. The best diagnostic test is a technetium-99m pertechnetate scan (Meckel scan), which is taken up by the ectopic gastric mucosa. Ultrasound targets intussusception (typically painful with a target sign), and upper endoscopy, barium enema, and colonoscopy are not the initial tests for this classic presentation.",
    why: [
      "Ultrasound evaluates intussusception, which is typically painful with a palpable mass, unlike this painless bleeding.",
      "Upper endoscopy assesses upper-tract sources and would not detect a distal Meckel diverticulum.",
      "Correct: a technetium-99m pertechnetate (Meckel) scan detects ectopic gastric mucosa, the source of painless lower GI bleeding here.",
      "Barium enema is not the diagnostic test for a bleeding Meckel diverticulum and could obscure other studies.",
      "Colonoscopy is not the initial test for this classic painless bleeding and rarely reaches the diverticulum."
    ]
  },
  {
    id: "s3-0317",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Duchenne muscular dystrophy diagnosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 4-year-old boy has delayed motor milestones, a waddling gait, and frequent falls. He pushes on his thighs with his hands to rise from the floor, and his calves appear enlarged and firm.\n\n| Test | Value | Reference |\n|---|---|---|\n| Creatine kinase | markedly elevated (>10,000) | 30-200 U/L |\n| Gower sign | present | |\n| Calves | enlarged (pseudohypertrophy) | |",
    lead: "Which of the following is the most appropriate next diagnostic test?",
    options: [
      "Nerve conduction studies to confirm the diagnosis.",
      "Serum aldolase alone, which by itself establishes the diagnosis.",
      "Brain MRI to evaluate the motor delay.",
      "Genetic testing for a dystrophin (DMD) gene mutation to confirm Duchenne muscular dystrophy, prompted by the markedly elevated creatine kinase and classic examination findings.",
      "Thyroid-stimulating hormone measurement as the confirmatory test."
    ],
    answer: 3,
    exp: "A boy with proximal weakness, a waddling gait, the Gower sign, calf pseudohypertrophy, and a markedly elevated creatine kinase has a classic presentation of Duchenne muscular dystrophy. The confirmatory test is genetic analysis of the dystrophin (DMD) gene for a pathogenic mutation (muscle biopsy showing absent dystrophin is an alternative). Nerve conduction studies assess neuropathy, aldolase is nonspecific, brain MRI does not diagnose the myopathy, and thyroid testing evaluates a different cause of weakness.",
    why: [
      "Nerve conduction studies evaluate peripheral nerves, not a dystrophinopathy.",
      "Aldolase is a nonspecific muscle enzyme and does not confirm Duchenne muscular dystrophy.",
      "Brain MRI does not diagnose this muscle disorder.",
      "Correct: dystrophin (DMD) gene testing confirms Duchenne muscular dystrophy in this classic presentation with very high creatine kinase.",
      "Thyroid testing evaluates a different cause of weakness and would not confirm this diagnosis."
    ]
  },
  {
    id: "s3-0318",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Palpable breast mass evaluation",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 45-year-old woman feels a firm, nontender, immobile lump in her breast that has persisted through a full menstrual cycle. There is no overlying skin change, nipple retraction, or discharge, and her family history is unremarkable.",
    lead: "Which of the following is the most appropriate initial diagnostic evaluation?",
    options: [
      "Diagnostic mammography combined with targeted breast ultrasound, followed by image-guided core-needle biopsy of any suspicious finding (triple assessment).",
      "Reassurance and re-examination in one year without any imaging.",
      "Screening breast MRI as the sole initial diagnostic test.",
      "A serum tumor marker (CA 15-3) to decide whether a biopsy is needed.",
      "Immediate excisional biopsy of the entire breast without prior imaging."
    ],
    answer: 0,
    exp: "A persistent, firm, immobile breast mass in a woman of this age requires the triple assessment: clinical examination, imaging (diagnostic mammography with targeted ultrasound), and tissue sampling by image-guided core-needle biopsy of any suspicious lesion. This structured evaluation reliably characterizes the mass and detects malignancy. Deferring evaluation, relying on MRI or a tumor marker to decide, or proceeding to excisional biopsy before imaging are all inappropriate initial approaches.",
    why: [
      "Correct: diagnostic mammography plus targeted ultrasound and image-guided core-needle biopsy (triple assessment) is the appropriate initial evaluation.",
      "A persistent discrete mass requires evaluation now, not observation for a year.",
      "MRI is an adjunct in selected cases and is not the sole initial test for a palpable mass.",
      "CA 15-3 is not used to decide whether a suspicious mass warrants biopsy.",
      "Tissue diagnosis should follow imaging with core-needle biopsy, not proceed to excision without it."
    ]
  },
  {
    id: "s3-0319",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Bacterial vaginosis diagnosis",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 26-year-old woman has a thin, grayish-white vaginal discharge with an unpleasant fishy odor, especially after intercourse. There is little itching or irritation, and the vulva and vaginal walls are not inflamed.\n\n| Finding | Result |\n|---|---|\n| Discharge | thin, gray-white, homogeneous |\n| Vaginal pH | 5.0 |\n| Whiff (amine) test | positive |\n| Saline microscopy | clue cells |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Vulvovaginal candidiasis.",
      "Trichomoniasis.",
      "Bacterial vaginosis, indicated by a thin gray discharge, a vaginal pH above 4.5, a positive whiff test, and clue cells on saline microscopy (Amsel criteria).",
      "Physiologic leukorrhea.",
      "Atrophic vaginitis."
    ],
    answer: 2,
    exp: "A thin gray-white homogeneous discharge with a fishy odor, vaginal pH above 4.5, a positive whiff (amine) test, and clue cells on microscopy meets the Amsel criteria for bacterial vaginosis, caused by a shift away from lactobacilli. Candidiasis causes thick white discharge with itching and a normal pH; trichomoniasis causes a frothy discharge with motile organisms and often cervical inflammation; physiologic leukorrhea lacks odor and clue cells; and atrophic vaginitis occurs in hypoestrogenic states.",
    why: [
      "Candidiasis produces thick, curd-like discharge with pruritus and a normal pH, not clue cells and an elevated pH.",
      "Trichomoniasis typically causes frothy discharge with motile trichomonads and cervical inflammation, not clue cells.",
      "Correct: thin gray discharge, pH above 4.5, a positive whiff test, and clue cells (Amsel criteria) indicate bacterial vaginosis.",
      "Physiologic leukorrhea is odorless without clue cells or a positive whiff test.",
      "Atrophic vaginitis occurs with estrogen deficiency and does not produce clue cells and a positive amine test."
    ]
  },
  {
    id: "s3-0320",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Endometriosis diagnosis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 30-year-old woman has years of progressively worsening dysmenorrhea, deep pain with intercourse, and difficulty conceiving. Pelvic examination reveals tender nodularity along the uterosacral ligaments and a fixed, retroverted uterus.",
    lead: "Which of the following is the most likely diagnosis, and what is the definitive diagnostic method?",
    options: [
      "Pelvic inflammatory disease; diagnosed by endometrial biopsy.",
      "Adenomyosis; diagnosed by hysterosalpingography.",
      "Primary dysmenorrhea; no further evaluation is warranted.",
      "Uterine leiomyoma; diagnosed by a serum CA-125 level.",
      "Endometriosis; while examination and pelvic ultrasound are supportive, definitive diagnosis is by laparoscopic visualization (with histologic confirmation) of ectopic endometrial implants."
    ],
    answer: 4,
    exp: "Progressive dysmenorrhea, deep dyspareunia, infertility, and tender uterosacral nodularity with a fixed uterus are classic for endometriosis. Examination and imaging (transvaginal ultrasound) support the diagnosis, but the definitive method is direct laparoscopic visualization of ectopic endometrial implants, ideally with histologic confirmation. Pelvic inflammatory disease presents acutely with cervical motion tenderness, adenomyosis causes a diffusely enlarged tender uterus, primary dysmenorrhea has no such findings, and CA-125 is nonspecific and not diagnostic of leiomyoma.",
    why: [
      "Pelvic inflammatory disease is an acute infection with cervical motion tenderness, not chronic cyclic pain with uterosacral nodularity.",
      "Adenomyosis causes a diffusely enlarged, boggy tender uterus and is not diagnosed by hysterosalpingography.",
      "The nodularity, fixed uterus, and infertility indicate pathology beyond primary dysmenorrhea.",
      "CA-125 is nonspecific and does not diagnose leiomyoma, which is characterized by a firm enlarged uterus on imaging.",
      "Correct: this picture is classic for endometriosis, definitively diagnosed by laparoscopic visualization of ectopic implants with histology."
    ]
  },
  {
    id: "s3-0321",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Body dysmorphic disorder",
    difficulty: "easy",
    anchor: null,
    vignette: "A 22-year-old man spends several hours each day preoccupied with a barely perceptible asymmetry of his nose, which he is convinced is hideously deformed. He checks mirrors repeatedly, avoids social situations, and has sought multiple cosmetic consultations despite being reassured that his appearance is normal.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Obsessive-compulsive disorder.",
      "Body dysmorphic disorder, characterized by preoccupation with a perceived or slight defect in physical appearance, repetitive behaviors such as mirror-checking, and significant distress or impairment.",
      "Social anxiety disorder.",
      "Narcissistic personality disorder.",
      "Illness anxiety disorder."
    ],
    answer: 1,
    exp: "Body dysmorphic disorder involves preoccupation with one or more perceived defects in physical appearance that are not observable or appear slight to others, accompanied by repetitive behaviors (mirror-checking, reassurance-seeking, cosmetic procedures) and clinically significant distress or impairment. Obsessive-compulsive disorder involves broader obsessions and compulsions not confined to appearance, social anxiety centers on fear of scrutiny generally, narcissistic personality disorder involves grandiosity, and illness anxiety disorder centers on fear of having a serious disease rather than an appearance defect.",
    why: [
      "Obsessive-compulsive disorder features obsessions and compulsions across varied themes, not a focused preoccupation with appearance.",
      "Correct: preoccupation with a slight or imagined appearance defect, repetitive checking, and distress define body dysmorphic disorder.",
      "Social anxiety disorder is fear of scrutiny and embarrassment in general, not a specific appearance-defect preoccupation.",
      "Narcissistic personality disorder involves grandiosity and need for admiration, not distress over a perceived flaw.",
      "Illness anxiety disorder centers on fear of serious illness, not a perceived defect in appearance."
    ]
  },
  {
    id: "s3-0322",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Narcolepsy diagnosis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 19-year-old has several months of irresistible daytime sleep attacks and brief episodes of bilateral leg weakness triggered by laughter, during which he stays fully conscious. He also describes vivid dream-like hallucinations while falling asleep and episodes of being unable to move on waking.",
    lead: "Which of the following is the most appropriate diagnostic test?",
    options: [
      "Overnight pulse oximetry alone.",
      "Electroencephalography to evaluate for seizures.",
      "Brain MRI as the confirmatory test.",
      "Nocturnal polysomnography followed by a multiple sleep latency test, which in narcolepsy shows a short sleep latency and early-onset REM sleep periods.",
      "A thyroid-stimulating hormone level to establish the diagnosis."
    ],
    answer: 3,
    exp: "Excessive daytime sleepiness with cataplexy (laughter-triggered bilateral weakness with preserved consciousness), hypnagogic hallucinations, and sleep paralysis are characteristic of narcolepsy. The diagnostic evaluation is nocturnal polysomnography (to exclude other sleep disorders) followed by a multiple sleep latency test, which demonstrates a shortened mean sleep latency and multiple sleep-onset REM periods. Pulse oximetry, EEG, brain MRI, and thyroid testing evaluate other conditions and do not establish narcolepsy.",
    why: [
      "Pulse oximetry screens for oxygen desaturation in sleep apnea, not for narcolepsy.",
      "EEG for seizures does not diagnose narcolepsy; the cataplexy here is not a seizure.",
      "Brain MRI evaluates structural lesions and is not the diagnostic test for narcolepsy.",
      "Correct: polysomnography followed by a multiple sleep latency test shows short sleep latency and sleep-onset REM periods diagnostic of narcolepsy.",
      "Thyroid testing evaluates a different cause of fatigue and does not establish narcolepsy."
    ]
  },
  {
    id: "s3-0323",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Acute pericarditis diagnosis",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 34-year-old man has 2 days of sharp, pleuritic chest pain that worsens when he lies flat and improves when he sits up and leans forward. He had a viral upper respiratory illness the week before. On auscultation there is a scratchy, three-component rub at the left sternal border, and he is hemodynamically stable.\n\n**[ECG: diffuse concave-upward ST-segment elevation across multiple leads with associated PR-segment depression]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Acute pericarditis, supported by pleuritic positional chest pain relieved by leaning forward, a friction rub, and diffuse ST-segment elevation with PR-segment depression on the ECG.",
      "Acute ST-elevation myocardial infarction requiring emergent coronary reperfusion.",
      "Acute aortic dissection.",
      "Pulmonary embolism.",
      "Gastroesophageal reflux disease."
    ],
    answer: 0,
    exp: "Positional, pleuritic chest pain relieved by sitting forward, a pericardial friction rub, and an ECG showing diffuse (not territorial) concave ST elevation with PR depression are classic for acute pericarditis, often following a viral illness. Unlike STEMI, the ST changes are widespread rather than localized to a coronary territory and lack reciprocal changes and a convex morphology. Aortic dissection causes tearing pain with pulse differentials, pulmonary embolism causes dyspnea and hypoxia, and reflux does not produce a rub or these ECG findings.",
    why: [
      "Correct: positional pleuritic pain relieved by leaning forward, a friction rub, and diffuse ST elevation with PR depression indicate acute pericarditis.",
      "STEMI produces territorial ST elevation with reciprocal changes, not the diffuse pattern with PR depression seen here.",
      "Aortic dissection causes severe tearing pain with pulse or blood-pressure differences, not a friction rub and diffuse ST elevation.",
      "Pulmonary embolism presents with dyspnea and hypoxia rather than positional pain with a rub and this ECG.",
      "Reflux does not cause a pericardial friction rub or diffuse ST elevation with PR depression."
    ]
  },
  {
    id: "s3-0324",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Epidural hematoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 20-year-old man was struck in the side of the head by a baseball. He briefly lost consciousness, then awoke and felt well for about an hour before rapidly becoming confused and difficult to arouse. One pupil is now fixed and dilated.\n\n**[IMAGE: noncontrast head CT showing a biconvex (lens-shaped) hyperdense extra-axial collection that does not cross suture lines]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Acute subdural hematoma.",
      "Epidural hematoma, classically from middle meningeal artery injury after temporal trauma, presenting with a lucid interval and a biconvex (lens-shaped) collection that does not cross suture lines.",
      "Subarachnoid hemorrhage.",
      "Diffuse axonal injury.",
      "Acute ischemic stroke."
    ],
    answer: 1,
    exp: "A lucid interval after temporal head trauma followed by rapid deterioration and an ipsilateral fixed, dilated pupil, with a biconvex (lens-shaped) hyperdense collection that does not cross suture lines on CT, is classic for an epidural hematoma, usually from middle meningeal artery injury. Subdural hematomas are crescent-shaped and cross suture lines, subarachnoid hemorrhage tracks in sulci and cisterns, diffuse axonal injury shows scattered small lesions, and ischemic stroke is hypodense rather than a hyperdense extra-axial collection.",
    why: [
      "Subdural hematomas are crescent-shaped and cross suture lines, unlike this biconvex collection.",
      "Correct: a lucid interval with a lens-shaped hyperdense collection not crossing suture lines indicates an epidural hematoma from arterial injury.",
      "Subarachnoid hemorrhage layers within sulci and basal cisterns, not as a biconvex extra-axial mass.",
      "Diffuse axonal injury shows small scattered lesions at gray-white junctions, not a lens-shaped hematoma.",
      "Ischemic stroke produces a hypodense infarct, not a hyperdense extra-axial collection."
    ]
  },
  {
    id: "s3-0325",
    system: "Surgery",
    discipline: "Surgery",
    topic: "Acute pancreatitis diagnosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 52-year-old man with a history of heavy alcohol use has 12 hours of severe, constant epigastric pain that bores through to his back, with nausea and vomiting. He leans forward to ease the pain, and his epigastrium is tender.\n\n| Test | Value | Reference |\n|---|---|---|\n| Serum lipase | 1,200 U/L (>3x upper limit) | <60 |\n| Pain | epigastric, radiating to back | |\n| Temperature | 37.8 C | |",
    lead: "Which of the following best establishes the diagnosis?",
    options: [
      "A serum amylase within the normal range reliably excludes the diagnosis.",
      "Contrast-enhanced CT is required in every patient before the diagnosis can be made.",
      "Characteristic epigastric pain radiating to the back plus a serum lipase greater than three times the upper limit of normal meets the diagnostic criteria for acute pancreatitis (two of three: typical pain, enzyme elevation, or characteristic imaging).",
      "An elevated lipase alone, in a patient without any symptoms, confirms acute pancreatitis.",
      "Endoscopic retrograde cholangiopancreatography is the initial diagnostic test of choice."
    ],
    answer: 2,
    exp: "Acute pancreatitis is diagnosed when at least two of three criteria are met: characteristic epigastric pain radiating to the back, serum lipase (or amylase) greater than three times the upper limit of normal, or characteristic findings on cross-sectional imaging. This patient meets the first two, so the diagnosis is established without mandatory imaging. A normal amylase does not exclude pancreatitis (lipase is more sensitive and specific), imaging is not required in every case, an isolated enzyme elevation without symptoms is not diagnostic, and ERCP is a therapeutic/biliary procedure, not the initial diagnostic test.",
    why: [
      "A normal amylase does not exclude pancreatitis; lipase is more sensitive and specific, and it is markedly elevated here.",
      "CT is reserved for uncertain cases or complications and is not required to make the diagnosis when clinical and enzyme criteria are met.",
      "Correct: typical pain plus lipase more than three times the upper limit meets two of three diagnostic criteria for acute pancreatitis.",
      "An isolated enzyme elevation without compatible symptoms or imaging does not by itself establish the diagnosis.",
      "ERCP is used for biliary intervention, not as the initial diagnostic test for acute pancreatitis."
    ]
  }
];
