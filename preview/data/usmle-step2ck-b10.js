/*
 * Rounds Codex - USMLE Step 2 CK question bank, Batch 10 (25 items)
 * Blueprint-weighted, Medicine-heavy clinical mix. All vignettes original;
 * source used for facts only. Step 2 CK items are clinical: each ends in a
 * decision about diagnosis, next best step, pharmacotherapy, or prevention.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP2CK_B10 = [
  {
    id: "s2ck-0226",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Vasospastic (Prinzmetal) angina",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 45-year-old woman reports several weeks of recurrent chest pressure that occurs at rest, often waking her in the early morning hours, and resolves within minutes. She has excellent exercise tolerance and can climb several flights of stairs without symptoms. She smokes a pack of cigarettes daily. During an episode in the emergency department her tracing is captured; the changes resolve completely after sublingual nitroglycerin, and serial troponins are negative.\n\n**[ECG: transient ST-segment elevation in the inferior leads during chest pain that normalizes when the pain resolves]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Vasospastic (Prinzmetal) angina",
      "Acute ST-elevation myocardial infarction",
      "Stable exertional angina",
      "Acute aortic dissection",
      "Gastroesophageal reflux disease"
    ],
    answer: 0,
    exp: "Rest chest pain that occurs in a circadian early-morning pattern with transient ST-segment elevation that resolves promptly with nitroglycerin and negative troponins, in a patient with preserved exertional capacity, is characteristic of vasospastic (Prinzmetal) angina from coronary artery spasm. Smoking is a major trigger. Treatment is calcium-channel blockers and nitrates plus smoking cessation; nonselective beta blockers are avoided because they can worsen spasm.",
    why: [
      "Correct: rest angina with transient ST elevation that reverses with nitroglycerin and negative troponins indicates coronary vasospasm (Prinzmetal angina).",
      "A true STEMI produces persistent ST elevation with a rise in troponin and myocardial necrosis, not transient changes that fully normalize with negative biomarkers.",
      "Stable exertional angina occurs predictably with exertion and resolves with rest, whereas this patient's pain occurs at rest with excellent exercise tolerance.",
      "Aortic dissection causes tearing chest or back pain with a pulse or blood-pressure differential, not brief rest angina relieved by nitroglycerin with ST elevation.",
      "Reflux can cause chest discomfort but does not produce transient ST elevation on the tracing that resolves with nitroglycerin."
    ]
  },
  {
    id: "s2ck-0227",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Pulmonary arterial hypertension",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 41-year-old woman has 18 months of progressive exertional dyspnea and fatigue, and twice has nearly fainted while climbing stairs. On exam she has a loud pulmonic component of the second heart sound, a right ventricular heave, and elevated jugular venous pressure with a prominent a wave. Echocardiography shows a dilated, hypokinetic right ventricle with a normal left ventricle and no valvular disease. Right heart catheterization is performed.\n\n| Measurement | Value | Normal |\n|---|---|---|\n| Mean pulmonary artery pressure | 45 mm Hg | < 20 |\n| Pulmonary capillary wedge pressure | 9 mm Hg | <= 15 |\n| Pulmonary vascular resistance | markedly elevated | low |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Left heart failure with pulmonary venous hypertension",
      "Pulmonary arterial hypertension",
      "Chronic obstructive pulmonary disease",
      "Acute pulmonary embolism",
      "Constrictive pericarditis"
    ],
    answer: 1,
    exp: "A markedly elevated mean pulmonary artery pressure with a normal wedge pressure and high pulmonary vascular resistance defines precapillary (pulmonary arterial) hypertension. The normal wedge pressure and normal left ventricle exclude a left-heart cause. Right heart strain produces the loud P2, RV heave, and exertional syncope. Management involves vasoreactivity testing and pulmonary vasodilator therapy at a specialized center.",
    why: [
      "Left heart failure would raise the wedge pressure (postcapillary hypertension), but here the wedge pressure is normal with a normal left ventricle.",
      "Correct: a high mean PA pressure with a normal wedge pressure and elevated pulmonary vascular resistance defines precapillary pulmonary arterial hypertension.",
      "COPD would show obstructive lung disease and hypoxemia as the driver; the vignette lacks airflow obstruction and points to an isolated pulmonary vascular process.",
      "Acute pulmonary embolism causes sudden dyspnea and chest pain over hours, not 18 months of progressive symptoms with fixed elevated pulmonary vascular resistance.",
      "Constrictive pericarditis causes equalization of diastolic pressures and a pericardial knock, not isolated precapillary pulmonary hypertension with a normal wedge."
    ]
  },
  {
    id: "s2ck-0228",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Celiac disease",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 31-year-old woman has 8 months of intermittent diarrhea, bloating, and a 5-kg weight loss. She also has an intensely itchy, grouped vesicular rash over her elbows and knees. Her iron deficiency anemia has not improved despite months of oral iron. Symptoms worsen after meals containing bread and pasta.\n\n| Test | Value | Reference |\n|---|---|---|\n| Tissue transglutaminase IgA | strongly positive | negative |\n| Total IgA | normal | normal |\n| Hemoglobin | 10.2 g/dL | 12.0-15.5 |\n| Ferritin | low | normal |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Irritable bowel syndrome",
      "Lactose intolerance",
      "Celiac disease",
      "Crohn disease",
      "Giardiasis"
    ],
    answer: 2,
    exp: "Chronic diarrhea with malabsorption, iron deficiency refractory to oral iron, and the intensely pruritic vesicular rash of dermatitis herpetiformis, together with a positive tissue transglutaminase IgA and a normal total IgA, strongly indicate celiac disease. Duodenal biopsy showing villous atrophy confirms it. Management is a lifelong gluten-free diet.",
    why: [
      "Irritable bowel syndrome causes altered bowel habits without weight loss, iron malabsorption, positive celiac serology, or dermatitis herpetiformis.",
      "Lactose intolerance causes gas and diarrhea after dairy but does not produce iron deficiency, a vesicular rash, or positive tissue transglutaminase antibodies.",
      "Correct: malabsorptive diarrhea, refractory iron deficiency, dermatitis herpetiformis, and positive tissue transglutaminase IgA define celiac disease.",
      "Crohn disease can cause diarrhea and weight loss but is not associated with tissue transglutaminase antibodies or dermatitis herpetiformis triggered by gluten.",
      "Giardiasis causes malabsorptive diarrhea after exposure but does not produce celiac serology positivity or dermatitis herpetiformis."
    ]
  },
  {
    id: "s2ck-0229",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Primary hyperparathyroidism",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 58-year-old woman is found to have an elevated calcium on routine labs. She reports mild constipation and increased urination and has passed two kidney stones in the past few years. She takes no calcium supplements, thiazides, or vitamin D. Her renal function is normal.\n\n| Test | Value | Reference |\n|---|---|---|\n| Calcium | 11.8 mg/dL | 8.5-10.2 |\n| Intact PTH | 96 pg/mL | 15-65 |\n| Phosphorus | 2.3 mg/dL | 2.5-4.5 |\n| 24-hour urine calcium | elevated | normal |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Hypercalcemia of malignancy",
      "Familial hypocalciuric hypercalcemia",
      "Vitamin D intoxication",
      "Primary hyperparathyroidism",
      "Secondary hyperparathyroidism"
    ],
    answer: 3,
    exp: "Hypercalcemia with an inappropriately elevated (non-suppressed) PTH, hypophosphatemia, and high urinary calcium indicates primary hyperparathyroidism, most often from a solitary parathyroid adenoma. Nephrolithiasis and mild neuromuscular/GI symptoms are common. Parathyroidectomy is indicated for symptomatic disease (e.g., kidney stones).",
    why: [
      "Malignancy-associated hypercalcemia (often via PTH-related peptide) suppresses PTH, whereas this patient's PTH is elevated.",
      "Familial hypocalciuric hypercalcemia is defined by LOW urinary calcium, the opposite of this patient's elevated urine calcium.",
      "Vitamin D toxicity raises calcium but suppresses PTH and raises phosphate, unlike the high PTH and low phosphate seen here.",
      "Correct: hypercalcemia with a non-suppressed PTH, low phosphate, and hypercalciuria defines primary hyperparathyroidism.",
      "Secondary hyperparathyroidism occurs with low or normal calcium (as in chronic kidney disease or vitamin D deficiency), not hypercalcemia."
    ]
  },
  {
    id: "s2ck-0230",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Autosomal dominant polycystic kidney disease",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 42-year-old man is evaluated for new hypertension found at a work physical, along with intermittent flank pain and an episode of gross hematuria. His father and a paternal aunt developed kidney failure requiring dialysis, and a cousin died of a ruptured brain aneurysm. On exam bilateral flank masses are palpable.\n\n**[IMAGE: Abdominal CT showing markedly enlarged kidneys bilaterally replaced by innumerable cysts of varying size, with several cysts also seen in the liver]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Simple renal cysts",
      "Bilateral renal cell carcinoma",
      "Medullary sponge kidney",
      "Acquired cystic kidney disease",
      "Autosomal dominant polycystic kidney disease"
    ],
    answer: 4,
    exp: "Bilaterally enlarged kidneys replaced by numerous cysts, hepatic cysts, hypertension, hematuria, and a strong family history of kidney failure and intracranial aneurysm are characteristic of autosomal dominant polycystic kidney disease. Screening for and controlling hypertension and counseling about aneurysm risk are central to management.",
    why: [
      "Simple renal cysts are few and incidental and do not cause bilaterally enlarged kidneys, hepatic cysts, or a familial pattern of kidney failure.",
      "Bilateral renal cell carcinoma presents as solid enhancing masses, not innumerable fluid-filled cysts with a heritable family history.",
      "Medullary sponge kidney causes small medullary cystic dilatations with stones but does not massively enlarge the kidneys or involve the liver.",
      "Acquired cystic kidney disease develops in patients with long-standing end-stage renal disease on dialysis, not in a newly diagnosed hypertensive man.",
      "Correct: bilaterally enlarged cystic kidneys with hepatic cysts and a family history of renal failure and aneurysm indicate ADPKD."
    ]
  },
  {
    id: "s2ck-0231",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Reactivation pulmonary tuberculosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 54-year-old man who immigrated from a high-prevalence region several years ago has 6 weeks of productive cough, now with streaks of blood, along with drenching night sweats, low-grade fevers, and a 6-kg weight loss. He has not been previously screened. He is placed in a negative-pressure room.\n\n**[IMAGE: Chest radiograph showing a right upper lobe cavitary infiltrate with surrounding fibronodular opacities]**",
    lead: "Which of the following is the most appropriate next step in evaluation?",
    options: [
      "Collect sputum for acid-fast bacilli smears and mycobacterial culture",
      "Start broad-spectrum antibiotics for community-acquired pneumonia",
      "Obtain a CT-guided lung biopsy for suspected carcinoma",
      "Begin high-dose corticosteroids for presumed sarcoidosis",
      "Perform CT pulmonary angiography for pulmonary embolism"
    ],
    answer: 0,
    exp: "Chronic cough with hemoptysis, night sweats, weight loss, an upper-lobe cavitary infiltrate, and epidemiologic risk indicate reactivation pulmonary tuberculosis. After airborne isolation, the diagnostic step is collection of serial sputum specimens for acid-fast bacilli smear, nucleic acid amplification, and mycobacterial culture to confirm and guide therapy.",
    why: [
      "Correct: chronic constitutional symptoms with an upper-lobe cavitary lesion and risk factors require sputum acid-fast bacilli smears and culture to confirm tuberculosis.",
      "Empiric antibiotics for typical pneumonia neither treat tuberculosis nor address the airborne infection-control and diagnostic priorities.",
      "Jumping to lung biopsy for cancer is premature and hazardous before ruling out the far more likely, transmissible tuberculosis by sputum testing.",
      "Corticosteroids for presumed sarcoidosis could worsen undiagnosed tuberculosis and are inappropriate as an initial step.",
      "The subacute constitutional illness with a cavitary infiltrate is not an embolism, so CT angiography does not address the likely diagnosis."
    ]
  },
  {
    id: "s2ck-0232",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Ankylosing spondylitis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 26-year-old man has more than 6 months of low back and buttock pain that is worst in the early morning with over an hour of stiffness, improves with exercise, and worsens with rest. The pain sometimes alternates between buttocks and wakes him in the second half of the night. On exam he has reduced lumbar flexion and decreased chest expansion.\n\n**[IMAGE: Anteroposterior pelvic radiograph showing bilateral sacroiliac joint erosions with sclerosis and partial joint-space fusion]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Mechanical (degenerative) low back pain",
      "Ankylosing spondylitis",
      "Lumbar disc herniation",
      "Fibromyalgia",
      "Diffuse idiopathic skeletal hyperostosis"
    ],
    answer: 1,
    exp: "Inflammatory back pain in a young man (insidious onset before age 40, morning stiffness over an hour, improvement with exercise, night pain, alternating buttock pain) with reduced chest expansion and radiographic bilateral sacroiliitis is characteristic of ankylosing spondylitis. First-line therapy is NSAIDs and physical therapy, with TNF inhibitors for refractory disease.",
    why: [
      "Mechanical back pain worsens with activity and improves with rest, the opposite of this inflammatory pattern, and does not cause sacroiliitis.",
      "Correct: inflammatory back pain with morning stiffness improving with exercise, reduced chest expansion, and bilateral sacroiliitis defines ankylosing spondylitis.",
      "Disc herniation causes radicular leg pain with positive straight-leg raise, not bilateral inflammatory sacroiliitis with morning stiffness.",
      "Fibromyalgia causes widespread tender points and fatigue without sacroiliac erosions or objective inflammatory findings.",
      "DISH causes flowing anterior spinal ossification in older patients and typically spares the sacroiliac joints, unlike the erosive sacroiliitis seen here."
    ]
  },
  {
    id: "s2ck-0233",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Multiple sclerosis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 28-year-old woman reports that a year ago she had painful vision loss in one eye that recovered over weeks. She now has 2 weeks of numbness and weakness in her right leg and describes an electric sensation shooting down her spine when she flexes her neck. On exam, when she looks to the left the right eye fails to fully adduct while the left eye shows nystagmus.\n\n**[IMAGE: Brain MRI (FLAIR) showing multiple ovoid periventricular hyperintensities oriented perpendicular to the ventricles]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Neuromyelitis optica spectrum disorder",
      "Acute disseminated encephalomyelitis",
      "Multiple sclerosis",
      "Vitamin B12 deficiency (subacute combined degeneration)",
      "Functional neurological symptom disorder"
    ],
    answer: 2,
    exp: "Neurologic events separated in time and space (prior optic neuritis, now myelopathy with Lhermitte sign and an internuclear ophthalmoplegia) with periventricular ovoid white-matter lesions (Dawson fingers) are diagnostic of relapsing-remitting multiple sclerosis. MRI and CSF oligoclonal bands support it; disease-modifying therapy reduces relapses.",
    why: [
      "Neuromyelitis optica typically causes longitudinally extensive myelitis and severe optic neuritis with aquaporin-4 antibodies, not the disseminated small periventricular lesions and internuclear ophthalmoplegia of MS.",
      "ADEM is usually a monophasic post-infectious encephalopathy in children, not recurrent attacks separated by a year with an internuclear ophthalmoplegia.",
      "Correct: relapses separated in time and space with periventricular ovoid lesions and internuclear ophthalmoplegia define multiple sclerosis.",
      "B12 deficiency causes symmetric dorsal-column and corticospinal signs without optic neuritis, internuclear ophthalmoplegia, or periventricular MRI plaques.",
      "A functional disorder does not produce an objective internuclear ophthalmoplegia or corresponding demyelinating lesions on MRI."
    ]
  },
  {
    id: "s2ck-0234",
    system: "Internal Medicine",
    discipline: "Hematology/Oncology",
    topic: "Chronic myeloid leukemia",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 52-year-old man reports several months of fatigue, drenching night sweats, and early satiety with left upper quadrant fullness. On exam the spleen is markedly enlarged, extending well below the umbilicus. He has no lymphadenopathy.\n\n| Test | Value | Reference |\n|---|---|---|\n| WBC | 185 x10^9/L | 4.0-11.0 |\n| Differential | full spectrum of maturing myeloid cells with basophilia | - |\n| Platelets | 540 x10^9/L | 150-400 |\n| Leukocyte alkaline phosphatase | low | normal/high |\n| BCR-ABL1 (Philadelphia chromosome) | positive | negative |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Leukemoid reaction",
      "Acute myeloid leukemia",
      "Chronic lymphocytic leukemia",
      "Chronic myeloid leukemia",
      "Primary myelofibrosis"
    ],
    answer: 3,
    exp: "Marked leukocytosis with a full spectrum of maturing myeloid cells and basophilia, a low leukocyte alkaline phosphatase, massive splenomegaly, and the BCR-ABL1 (Philadelphia chromosome) fusion are diagnostic of chronic myeloid leukemia. Tyrosine kinase inhibitors such as imatinib target the BCR-ABL1 protein and are first-line therapy.",
    why: [
      "A leukemoid reaction is a reactive neutrophilia with a HIGH leukocyte alkaline phosphatase and no BCR-ABL1, unlike this low-LAP, Philadelphia-positive picture.",
      "AML shows a blast proliferation with maturation arrest and cytopenias, not a full spectrum of maturing myeloid cells with basophilia and BCR-ABL1.",
      "CLL is a mature B-lymphocyte proliferation causing lymphocytosis and lymphadenopathy, not a maturing myeloid leukocytosis with the Philadelphia chromosome.",
      "Correct: maturing myeloid leukocytosis with basophilia, low leukocyte alkaline phosphatase, splenomegaly, and BCR-ABL1 defines chronic myeloid leukemia.",
      "Primary myelofibrosis causes a leukoerythroblastic smear with teardrop cells and marrow fibrosis, and is not defined by the BCR-ABL1 fusion."
    ]
  },
  {
    id: "s2ck-0235",
    system: "Surgery",
    discipline: "Urology",
    topic: "Painless gross hematuria (bladder cancer)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 68-year-old man reports two episodes of painless, bright red urine over the past month. He has a 45-pack-year smoking history and worked for years in a dye-manufacturing plant. He has no dysuria, fever, or flank pain. Urinalysis confirms numerous red blood cells without casts or dysmorphic features, and urine culture is negative.",
    lead: "Which of the following is the most appropriate next step in evaluation?",
    options: [
      "Reassure the patient and repeat urinalysis in one year",
      "Prescribe empiric antibiotics for a urinary tract infection",
      "Obtain renal ultrasound only",
      "Measure a 24-hour urine protein",
      "Perform cystoscopy with CT urography"
    ],
    answer: 4,
    exp: "Painless gross hematuria in an older patient with heavy smoking and occupational aromatic-amine (dye) exposure is bladder cancer until proven otherwise. Evaluation of gross hematuria without infection requires cystoscopy to inspect the bladder and CT urography to image the upper tracts. Delay risks missing a curable urothelial malignancy.",
    why: [
      "Reassurance and delayed repeat testing risks missing a urothelial cancer in a high-risk patient with gross hematuria.",
      "There is no evidence of infection (negative culture, no symptoms), so empiric antibiotics would inappropriately delay cancer evaluation.",
      "Ultrasound alone can miss small bladder tumors and does not visualize the urothelium; cystoscopy is required.",
      "A glomerular workup is unnecessary because the red cells are non-dysmorphic without casts, pointing to a urologic (not glomerular) source.",
      "Correct: painless gross hematuria in a high-risk patient warrants cystoscopy with CT urography to evaluate for urothelial cancer."
    ]
  },
  {
    id: "s2ck-0236",
    system: "Surgery",
    discipline: "Orthopedic Surgery",
    topic: "Anterior shoulder dislocation",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 22-year-old man fell onto an outstretched arm during a rugby tackle and now holds his right arm slightly abducted and externally rotated, resisting any movement. The normal rounded contour of the shoulder is lost, the acromion is prominent, and there is a palpable fullness anteriorly. Sensation over the lateral deltoid is being assessed.\n\n**[IMAGE: Anteroposterior shoulder radiograph showing the humeral head displaced anteriorly and inferiorly, lying beneath the coracoid process]**",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Closed reduction after documenting neurovascular status",
      "Immediate open surgical reconstruction",
      "Sling immobilization without any reduction",
      "MRI of the shoulder before any intervention",
      "Intra-articular corticosteroid injection"
    ],
    answer: 0,
    exp: "Loss of the deltoid contour with a prominent acromion and the arm held in slight abduction/external rotation, confirmed radiographically as an anterior glenohumeral dislocation, is managed by prompt closed reduction after documenting neurovascular status (especially axillary nerve sensation over the lateral deltoid). Post-reduction films confirm alignment and the joint is then immobilized.",
    why: [
      "Correct: an anterior shoulder dislocation is treated with prompt closed reduction after documenting neurovascular (axillary nerve) status.",
      "Open surgery is not the initial treatment for a first-time simple dislocation, which reduces closed.",
      "Immobilizing without reducing leaves the joint dislocated, causing ongoing pain and risking neurovascular injury.",
      "MRI is not required before reducing an obvious dislocation and would only delay urgent joint reduction.",
      "A steroid injection does not relocate the joint and has no role in an acute dislocation."
    ]
  },
  {
    id: "s2ck-0237",
    system: "Surgery",
    discipline: "Surgical Oncology",
    topic: "Esophageal adenocarcinoma",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 63-year-old man has 3 months of progressive difficulty swallowing, first with solid foods and now with softer foods, along with a 9-kg unintentional weight loss. He has a long history of gastroesophageal reflux and was previously told he had Barrett esophagus. He has smoked for decades.",
    lead: "Which of the following is the most appropriate next diagnostic step?",
    options: [
      "Barium swallow followed by observation",
      "Upper endoscopy with biopsy",
      "Esophageal manometry",
      "An 8-week trial of a proton pump inhibitor",
      "CT of the chest without obtaining tissue"
    ],
    answer: 1,
    exp: "Progressive dysphagia from solids to softer foods with weight loss in a patient with long-standing reflux and Barrett esophagus is alarming for esophageal adenocarcinoma. Upper endoscopy with biopsy is the diagnostic test of choice because it directly visualizes and samples the lesion; staging (endoscopic ultrasound, CT/PET) follows a tissue diagnosis.",
    why: [
      "A barium swallow may show a stricture but cannot provide a tissue diagnosis, and observation delays needed cancer workup.",
      "Correct: progressive dysphagia with weight loss and Barrett esophagus requires upper endoscopy with biopsy to diagnose esophageal cancer.",
      "Manometry evaluates motility disorders such as achalasia, not the mechanical, alarm-feature dysphagia described here.",
      "A PPU trial is inappropriate and dangerous in the presence of alarm features (weight loss, progressive dysphagia) that mandate endoscopy.",
      "CT can aid staging but does not establish a tissue diagnosis, which endoscopic biopsy provides."
    ]
  },
  {
    id: "s2ck-0238",
    system: "Surgery",
    discipline: "Surgical Oncology",
    topic: "Cutaneous melanoma",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 55-year-old fair-skinned man with a history of blistering childhood sunburns points out a mole on his back that his spouse says has enlarged and darkened over several months. It now occasionally itches and has bled once. On exam the lesion is about 9 mm, asymmetric, with an irregular notched border and areas of brown, black, and tan pigmentation.\n\n**[IMAGE: Dermoscopic photograph of a pigmented lesion with asymmetry, irregular borders, and multiple colors]**",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Shave biopsy of the lesion's center",
      "Cryotherapy of the lesion",
      "Excisional biopsy with narrow margins",
      "Reassurance with photographic follow-up",
      "Topical fluorouracil"
    ],
    answer: 2,
    exp: "An evolving pigmented lesion with asymmetry, border irregularity, color variegation, and diameter over 6 mm is concerning for melanoma. The correct step is full-thickness excisional biopsy with narrow margins, which allows accurate measurement of Breslow depth to guide staging and definitive wide local excision.",
    why: [
      "A shave biopsy can transect the lesion and prevent accurate Breslow depth measurement, which is critical for melanoma staging.",
      "Cryotherapy destroys the lesion without tissue for diagnosis and is inappropriate for a possible melanoma.",
      "Correct: a suspicious pigmented lesion is evaluated with full-thickness excisional biopsy with narrow margins to assess Breslow depth.",
      "Reassurance and observation would dangerously delay diagnosis of a lesion with multiple melanoma features.",
      "Topical fluorouracil treats superficial actinic keratoses, not a suspected invasive melanoma."
    ]
  },
  {
    id: "s2ck-0239",
    system: "Pediatrics",
    discipline: "Pediatric Infectious Disease",
    topic: "Scarlet fever",
    difficulty: "easy",
    anchor: null,
    vignette: "A 6-year-old boy has 2 days of fever and sore throat and now a rash. On exam he has a fine, blanching, sandpaper-textured erythematous rash over the trunk and in the skin folds, circumoral pallor, and a bright red tongue with prominent papillae. His pharynx is erythematous with tonsillar exudates and tender anterior cervical nodes. A rapid antigen test for group A streptococcus is positive.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Supportive care only",
      "Oral acyclovir",
      "Topical corticosteroids",
      "Oral penicillin or amoxicillin",
      "Intravenous immunoglobulin"
    ],
    answer: 3,
    exp: "A sandpaper rash with circumoral pallor, strawberry tongue, and accentuation in skin folds accompanying streptococcal pharyngitis is scarlet fever, caused by an erythrogenic toxin of group A streptococcus. Oral penicillin or amoxicillin is first-line; antibiotic treatment shortens illness and, importantly, prevents acute rheumatic fever.",
    why: [
      "Supportive care alone does not eradicate the streptococcus or prevent rheumatic fever.",
      "Acyclovir treats herpesvirus infections and has no role in a bacterial streptococcal illness.",
      "Topical steroids do not treat the underlying streptococcal infection driving scarlet fever.",
      "Correct: scarlet fever from group A streptococcus is treated with oral penicillin or amoxicillin to cure infection and prevent rheumatic fever.",
      "IVIG is used in Kawasaki disease and toxic shock, not uncomplicated scarlet fever."
    ]
  },
  {
    id: "s2ck-0240",
    system: "Pediatrics",
    discipline: "Pediatric Endocrinology",
    topic: "Congenital adrenal hyperplasia (21-hydroxylase deficiency)",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 12-day-old infant is brought in for poor feeding, recurrent vomiting, and lethargy. The infant appears dehydrated. On examination there is clitoromegaly with partial labial fusion. The infant is placed on a cardiac monitor and intravenous access is obtained.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sodium | 124 mEq/L | 135-145 |\n| Potassium | 6.9 mEq/L | 3.5-5.0 |\n| Glucose | 44 mg/dL | 60-100 |\n| 17-hydroxyprogesterone | markedly elevated | low |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Hypertrophic pyloric stenosis",
      "Galactosemia",
      "Sepsis with SIADH",
      "Cystic fibrosis (pseudo-Bartter syndrome)",
      "Congenital adrenal hyperplasia (21-hydroxylase deficiency)"
    ],
    answer: 4,
    exp: "A neonate with vomiting, dehydration, hyponatremia, hyperkalemia, hypoglycemia, virilized (ambiguous) genitalia, and a markedly elevated 17-hydroxyprogesterone has salt-wasting congenital adrenal hyperplasia from 21-hydroxylase deficiency. Impaired cortisol and aldosterone synthesis with androgen excess produces the salt-wasting crisis. Treatment is intravenous saline with dextrose, hydrocortisone, and fludrocortisone.",
    why: [
      "Pyloric stenosis causes a HYPOchloremic HYPOkalemic metabolic alkalosis with projectile vomiting, the opposite electrolyte pattern and without virilization.",
      "Galactosemia causes jaundice, hepatomegaly, and E. coli sepsis after milk feeds, not hyperkalemic hyponatremia with elevated 17-hydroxyprogesterone.",
      "SIADH causes hyponatremia but not hyperkalemia, hypoglycemia, virilization, or an elevated 17-hydroxyprogesterone.",
      "Cystic fibrosis pseudo-Bartter causes hypochloremic hypokalemic alkalosis from salt loss, not hyperkalemia with virilized genitalia.",
      "Correct: neonatal salt-wasting crisis with hyponatremia, hyperkalemia, virilization, and high 17-hydroxyprogesterone defines 21-hydroxylase-deficiency CAH."
    ]
  },
  {
    id: "s2ck-0241",
    system: "Pediatrics",
    discipline: "Pediatric Surgery",
    topic: "Intestinal malrotation with midgut volvulus",
    difficulty: "hard",
    anchor: "image",
    vignette: "A previously well 5-day-old term neonate suddenly begins forceful bilious (green) vomiting and becomes irritable and then lethargic. The abdomen is initially soft but becomes distended and tender, and a rectal exam reveals a trace of blood. The infant is tachycardic and mottled.\n\n**[IMAGE: Upper GI contrast study showing the duodenum failing to cross the midline with a corkscrew configuration of contrast in the proximal jejunum]**",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Emergent surgical exploration (Ladd procedure)",
      "Nasogastric decompression and observation",
      "Barium enema and discharge home",
      "Reassurance; the vomiting is likely reflux",
      "Broad-spectrum antibiotics alone"
    ],
    answer: 0,
    exp: "Bilious vomiting in a neonate is midgut volvulus from intestinal malrotation until proven otherwise, and the corkscrew appearance with a duodenum that fails to cross the midline confirms it. This is a surgical emergency because the twisted midgut can infarct within hours; emergent laparotomy (Ladd procedure) is required to detorse and fix the bowel.",
    why: [
      "Correct: neonatal bilious vomiting with a corkscrew upper GI study is midgut volvulus requiring emergent surgery (Ladd procedure) to prevent bowel infarction.",
      "Observation risks catastrophic loss of the entire midgut to ischemia while the bowel remains twisted.",
      "A barium enema does not detorse the volvulus, and discharging the infant would be fatal.",
      "Bilious vomiting is never simple reflux in a neonate and mandates urgent evaluation for malrotation.",
      "Antibiotics do not relieve the mechanical vascular obstruction of a twisted midgut, which needs immediate surgery."
    ]
  },
  {
    id: "s2ck-0242",
    system: "Pediatrics",
    discipline: "Pediatric Oncology",
    topic: "Neuroblastoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 2-year-old girl is brought in for irritability, decreased appetite, and a firm abdominal mass noticed during bathing. On exam the mass is firm, irregular, and crosses the midline. She has bluish periorbital swelling and bruising, and her eyes exhibit rapid, chaotic, dancing movements. Blood pressure is elevated for age, and urinary catecholamine metabolites are elevated.\n\n**[IMAGE: Abdominal CT showing a heterogeneous suprarenal mass with speckled calcifications that crosses the midline and encases the aorta]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Wilms tumor (nephroblastoma)",
      "Neuroblastoma",
      "Hepatoblastoma",
      "Renal cell carcinoma",
      "Burkitt lymphoma"
    ],
    answer: 1,
    exp: "A firm, irregular, calcified suprarenal mass that crosses the midline and encases vessels, with periorbital ecchymoses (from orbital metastases), opsoclonus-myoclonus, hypertension, and elevated urinary catecholamine metabolites, is characteristic of neuroblastoma, a tumor of neural crest origin. It commonly presents in toddlers and is staged before multimodal therapy.",
    why: [
      "Wilms tumor is a smooth, well-circumscribed renal mass that usually does not cross the midline or produce opsoclonus-myoclonus and catecholamine excess.",
      "Correct: a calcified midline-crossing suprarenal mass with periorbital ecchymoses, opsoclonus-myoclonus, and elevated catecholamines defines neuroblastoma.",
      "Hepatoblastoma arises in the liver with elevated alpha-fetoprotein, not a suprarenal calcified mass with catecholamine excess.",
      "Renal cell carcinoma is rare in toddlers and does not cause the paraneoplastic opsoclonus-myoclonus or catecholamine picture.",
      "Burkitt lymphoma causes rapidly growing bowel/nodal masses, not a calcified suprarenal mass with catecholamine excess."
    ]
  },
  {
    id: "s2ck-0243",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Intrahepatic cholestasis of pregnancy",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 32-year-old woman at 34 weeks gestation reports 10 days of relentless generalized itching that is worst on her palms and soles and most severe at night, disrupting her sleep. She has no rash other than excoriations. She has mild scleral icterus. Her blood pressure is normal and urine protein is negative.\n\n| Test | Value | Reference |\n|---|---|---|\n| Total serum bile acids | 42 umol/L | < 10 |\n| ALT | 118 U/L | 7-56 |\n| Total bilirubin | 1.9 mg/dL | 0.1-1.2 |\n| Platelets | normal | normal |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Preeclampsia",
      "Acute fatty liver of pregnancy",
      "Intrahepatic cholestasis of pregnancy",
      "Pruritic urticarial papules and plaques of pregnancy",
      "Acute viral hepatitis"
    ],
    answer: 2,
    exp: "Intense pruritus of the palms and soles in the third trimester without a primary rash, with elevated serum bile acids and transaminases, is intrahepatic cholestasis of pregnancy. Elevated bile acids raise the risk of stillbirth, so management is ursodeoxycholic acid and planned delivery (typically around 37 weeks, earlier if bile acids are very high).",
    why: [
      "Preeclampsia features hypertension and proteinuria, which are absent here; itching with elevated bile acids is not its hallmark.",
      "Acute fatty liver of pregnancy causes marked hepatic dysfunction with hypoglycemia, coagulopathy, and encephalopathy, not isolated pruritus with modestly elevated bile acids.",
      "Correct: third-trimester palmoplantar pruritus without a primary rash plus elevated bile acids defines intrahepatic cholestasis of pregnancy.",
      "PUPPP is an intensely itchy rash of papules and plaques within abdominal striae, not a rash-free pruritus with elevated bile acids.",
      "Acute viral hepatitis usually produces higher transaminases with systemic symptoms and is not defined by palmoplantar pruritus with elevated bile acids."
    ]
  },
  {
    id: "s2ck-0244",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Vasa previa",
    difficulty: "hard",
    anchor: null,
    vignette: "A 30-year-old woman at 36 weeks gestation presents in early labor. A prior ultrasound had noted a velamentous cord insertion with fetal vessels crossing near the internal cervical os. Shortly after her membranes spontaneously rupture, she has a modest amount of painless vaginal bleeding, and the fetal heart tracing immediately shows a sinusoidal pattern followed by prolonged bradycardia. She is hemodynamically stable.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Expectant management with bed rest",
      "Perform a digital cervical exam and continue to observe",
      "Administer terbutaline and allow labor to continue",
      "Proceed to emergent cesarean delivery",
      "Await spontaneous vaginal delivery"
    ],
    answer: 3,
    exp: "Painless vaginal bleeding with acute fetal distress (sinusoidal tracing, bradycardia) immediately after rupture of membranes, in a pregnancy with a velamentous cord insertion and vessels over the os, indicates ruptured vasa previa. Because the bleeding is fetal, the fetus can exsanguinate within minutes, so emergent cesarean delivery is required to save the baby.",
    why: [
      "Expectant management would allow the fetus to bleed to death from the torn fetal vessels.",
      "A digital exam risks further disrupting fetal vessels and wastes critical time during fetal exsanguination.",
      "Tocolysis does not stop fetal hemorrhage and dangerously delays the needed delivery.",
      "Correct: ruptured vasa previa with fetal bleeding and distress requires emergent cesarean delivery to prevent fetal exsanguination.",
      "Awaiting vaginal delivery would be fatal because the fetus loses its own blood volume rapidly."
    ]
  },
  {
    id: "s2ck-0245",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Lichen sclerosus",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 62-year-old postmenopausal woman reports months of vulvar itching and burning with painful intercourse. On examination there are porcelain-white, atrophic, wrinkled plaques involving the labia and perianal skin in a figure-of-eight distribution, with areas of thinned, easily fissured skin and loss of normal architecture. There is no vaginal discharge.\n\n**[IMAGE: Vulvar photograph showing porcelain-white atrophic plaques encircling the vulva and anus in a figure-of-eight pattern]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Topical antifungal cream",
      "Topical estrogen cream alone",
      "Oral fluconazole",
      "Reassurance; no treatment is needed",
      "High-potency topical corticosteroid with biopsy of suspicious areas"
    ],
    answer: 4,
    exp: "Porcelain-white atrophic plaques in a figure-of-eight vulvar/perianal distribution with pruritus, dyspareunia, and architectural loss are characteristic of lichen sclerosus. First-line treatment is a high-potency topical corticosteroid (e.g., clobetasol). Because lichen sclerosus carries a risk of vulvar squamous cell carcinoma, biopsy of any thickened, ulcerated, or non-responding areas is warranted.",
    why: [
      "An antifungal treats candidiasis, which causes discharge and erythema, not white atrophic sclerotic plaques.",
      "Topical estrogen helps atrophic vaginitis of the mucosa but does not treat the inflammatory dermatosis of lichen sclerosus.",
      "Oral fluconazole treats yeast infection and has no role in lichen sclerosus.",
      "Untreated lichen sclerosus causes progressive scarring and carries a malignancy risk, so observation alone is inadequate.",
      "Correct: lichen sclerosus is treated with a high-potency topical corticosteroid, with biopsy of suspicious areas to exclude squamous cell carcinoma."
    ]
  },
  {
    id: "s2ck-0246",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Emergency contraception",
    difficulty: "easy",
    anchor: null,
    vignette: "A 19-year-old woman presents about 24 hours after an episode of unprotected intercourse and is worried about pregnancy. She uses no regular contraception, her last menstrual period was 2 weeks ago, and she has regular cycles. She has no contraindications and wants the most effective option to prevent pregnancy, and is also interested in ongoing contraception.",
    lead: "Which of the following is the most effective option for emergency contraception?",
    options: [
      "Copper intrauterine device",
      "Starting a combined oral contraceptive next cycle",
      "No option is effective more than 12 hours after intercourse",
      "A depot medroxyprogesterone injection",
      "Using condoms consistently going forward"
    ],
    answer: 0,
    exp: "The copper intrauterine device is the most effective form of emergency contraception, preventing over 99% of pregnancies when placed within 5 days of unprotected intercourse, and it also provides highly effective ongoing contraception. Oral options (ulipristal acetate or levonorgestrel) are alternatives but are less effective than the copper IUD.",
    why: [
      "Correct: the copper IUD is the most effective emergency contraception within 5 days and also provides ongoing contraception.",
      "Starting a pill next cycle does nothing to prevent pregnancy from intercourse that already occurred.",
      "Emergency contraception is effective for up to 5 days after intercourse, so this claim is false.",
      "Depot medroxyprogesterone is not used for emergency contraception and would not prevent this pregnancy.",
      "Future condom use does not address the already-occurred exposure requiring emergency contraception."
    ]
  },
  {
    id: "s2ck-0247",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Functional neurological symptom (conversion) disorder",
    difficulty: "hard",
    anchor: null,
    vignette: "A 24-year-old woman develops sudden inability to move her right arm minutes after a heated argument with her partner. She appears surprisingly calm about the deficit. On exam her arm is flaccid, but when she is asked to flex her opposite hip against resistance, the paralyzed leg pushes down normally, and her reflexes and sensation are intact. Brain MRI and nerve conduction studies are normal.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Malingering",
      "Functional neurological symptom (conversion) disorder",
      "Acute ischemic stroke",
      "Factitious disorder",
      "Somatic symptom disorder"
    ],
    answer: 1,
    exp: "Acute neurologic deficits that are inconsistent with anatomy, are incompatible on exam (a positive Hoover sign, where hip extension returns with contralateral flexion), follow a psychological stressor, and have normal imaging indicate functional neurological symptom (conversion) disorder. The symptoms are not intentionally produced; treatment includes physical therapy and psychotherapy.",
    why: [
      "Malingering involves conscious feigning for external gain (money, avoiding duty), which is not evident and is not diagnosed when symptoms are involuntary.",
      "Correct: internally inconsistent deficits (positive Hoover sign) after a stressor with normal studies define functional neurological (conversion) disorder.",
      "An ischemic stroke would produce anatomically consistent deficits and typically abnormal imaging, not a positive Hoover sign with normal MRI.",
      "Factitious disorder involves deliberately inducing signs to assume the sick role, not the involuntary, exam-incongruent weakness seen here.",
      "Somatic symptom disorder involves distressing physical symptoms with excessive health-related thoughts and behaviors, not a discrete incongruent neurologic deficit."
    ]
  },
  {
    id: "s2ck-0248",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Lithium toxicity",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 60-year-old woman with bipolar disorder maintained on lithium was recently started on a thiazide diuretic and an NSAID for hypertension and joint pain. Over several days she developed a coarse tremor, unsteady gait, slurred speech, vomiting, and worsening confusion. She appears volume depleted.\n\n| Test | Value | Reference |\n|---|---|---|\n| Lithium level | 2.4 mEq/L | 0.6-1.2 |\n| Creatinine | 1.8 mg/dL | 0.6-1.1 |\n| Sodium | 146 mEq/L | 135-145 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Continue lithium at the same dose",
      "Administer oral activated charcoal",
      "Stop lithium and give intravenous isotonic saline, with hemodialysis if severe",
      "Give oral potassium supplementation",
      "Start a benzodiazepine and observe"
    ],
    answer: 2,
    exp: "A coarse tremor, ataxia, dysarthria, GI symptoms, and confusion with a supratherapeutic lithium level indicate lithium toxicity, here precipitated by a thiazide and NSAID (which reduce lithium clearance) plus volume depletion. Management is to stop lithium, restore volume with isotonic saline to enhance renal excretion, and use hemodialysis for severe toxicity (very high levels, renal failure, or severe neurologic signs).",
    why: [
      "Continuing lithium would worsen an already toxic level and progressive neurotoxicity.",
      "Activated charcoal does not bind lithium (a small cation) and is ineffective for lithium toxicity.",
      "Correct: lithium toxicity is treated by stopping the drug, giving isotonic saline to enhance clearance, and hemodialysis when severe.",
      "Potassium supplementation does not treat lithium toxicity and ignores the actual problem.",
      "A benzodiazepine with observation fails to lower the toxic lithium level and delays effective treatment."
    ]
  },
  {
    id: "s2ck-0249",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Chlamydia screening in young women",
    difficulty: "easy",
    anchor: null,
    vignette: "A 20-year-old sexually active woman presents for a routine visit. She has had two new partners in the past year and inconsistently uses condoms. She is asymptomatic with no discharge, dysuria, or pelvic pain. You are determining which routine screening to recommend for a woman her age.",
    lead: "Which of the following screening recommendations is most appropriate?",
    options: [
      "No screening is needed because she is asymptomatic",
      "Screen only if she develops symptoms",
      "A Pap smear alone is sufficient screening",
      "Annual chlamydia (and gonorrhea) screening with nucleic acid amplification testing",
      "Screen only women older than 30"
    ],
    answer: 3,
    exp: "Guidelines recommend routine screening for chlamydia (and gonorrhea) in all sexually active women 24 years and younger, and in older women at increased risk, because these infections are frequently asymptomatic and can cause pelvic inflammatory disease and infertility. A urine or vaginal nucleic acid amplification test is the preferred method.",
    why: [
      "Most chlamydial infections are asymptomatic, so waiting for symptoms misses infections that guidelines recommend screening for.",
      "Symptom-based screening fails to detect the many silent infections that lead to pelvic inflammatory disease and infertility.",
      "A Pap smear screens for cervical cancer and does not test for chlamydia or gonorrhea.",
      "Correct: sexually active women 24 and younger should have annual chlamydia (and gonorrhea) screening by nucleic acid amplification testing.",
      "Younger women have the highest infection rates, so restricting screening to those over 30 is incorrect."
    ]
  },
  {
    id: "s2ck-0250",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Refusal of blood transfusion (Jehovah's Witness)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 40-year-old woman who is a practicing Jehovah's Witness is hospitalized with a gastrointestinal bleed and a hemoglobin of 6 g/dL. She is alert, fully oriented, and articulate. She calmly states that her religious beliefs prohibit blood transfusion and that she understands she may die without it, but she still refuses blood products. Her reasoning is consistent and she demonstrates understanding of the consequences.",
    lead: "Which of the following is the most appropriate action?",
    options: [
      "Transfuse blood against her wishes to save her life",
      "Obtain a court order to compel transfusion",
      "Wait for family members to consent to transfusion",
      "Declare her decision-making impaired because of anemia",
      "Respect her informed refusal and offer non-blood alternatives"
    ],
    answer: 4,
    exp: "A competent adult with decision-making capacity has the right to refuse any treatment, including life-saving blood transfusion, based on her values and religious beliefs. She understands the consequences and reasons consistently, so her refusal must be respected; the appropriate course is to honor her decision while offering acceptable non-blood management (e.g., iron, erythropoietin, hemostatic measures).",
    why: [
      "Transfusing against the wishes of a competent patient violates her autonomy and constitutes battery.",
      "A court order is not warranted to override a competent adult's informed refusal of treatment.",
      "Family consent cannot override the informed refusal of a competent adult patient.",
      "She demonstrates clear understanding and consistent reasoning, so capacity cannot be dismissed merely because she is anemic or her choice is risky.",
      "Correct: a competent patient's informed refusal must be respected, and non-blood alternatives should be offered."
    ]
  }
];
