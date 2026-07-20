/*
 * Rounds Codex - USMLE Step 2 CK question bank, Batch 9 (25 items)
 * Blueprint-weighted, Medicine-heavy clinical mix. All vignettes original;
 * source used for facts only. Step 2 CK items are clinical: each ends in a
 * decision about diagnosis, next best step, pharmacotherapy, or prevention.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP2CK_B9 = [
  {
    id: "s2ck-0201",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Chronic aortic regurgitation",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 54-year-old man is evaluated for exertional dyspnea over the past year. On exam his pulses are bounding with rapid collapse, and a soft high-pitched early diastolic murmur is heard at the left sternal border when he sits and leans forward. His blood pressure is 158/48 mm Hg. The apical impulse is displaced laterally and is diffuse.\n\n**[IMAGE: Transthoracic echocardiogram, parasternal long-axis view, showing a dilated left ventricle with a regurgitant color-Doppler jet directed into the LV outflow tract during diastole]**",
    lead: "Which of the following valvular lesions best explains these findings?",
    options: [
      "Aortic regurgitation",
      "Mitral stenosis",
      "Aortic stenosis",
      "Tricuspid regurgitation",
      "Pulmonic stenosis"
    ],
    answer: 0,
    exp: "A wide pulse pressure, bounding water-hammer pulses, a laterally displaced diffuse apex, and a decrescendo early diastolic murmur along the left sternal border that increases with sitting forward are classic for chronic aortic regurgitation. Chronic volume overload produces eccentric LV dilation, which the echocardiogram confirms along with the diastolic regurgitant jet.",
    why: [
      "Correct: wide pulse pressure, water-hammer pulse, and an early diastolic decrescendo murmur with a dilated LV define chronic aortic regurgitation.",
      "Mitral stenosis produces a low-pitched mid-diastolic rumble with an opening snap and a normal or narrow pulse pressure, not a wide one.",
      "Aortic stenosis causes a crescendo-decrescendo systolic murmur with a narrow pulse pressure and delayed carotid upstroke, the opposite pulse findings.",
      "Tricuspid regurgitation gives a holosystolic murmur that increases with inspiration and prominent jugular v waves, not a diastolic murmur.",
      "Pulmonic stenosis produces a systolic ejection murmur at the left upper sternal border, not a diastolic murmur with a wide pulse pressure."
    ]
  },
  {
    id: "s2ck-0202",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Digoxin toxicity",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 78-year-old woman with heart failure and atrial fibrillation reports several days of nausea, anorexia, and seeing yellow-green halos around lights. She started an ACE inhibitor last week and takes digoxin and furosemide. She is bradycardic at 44/min. Her potassium is 5.9 mEq/L and creatinine has risen from 1.1 to 1.8 mg/dL.\n\n**[ECG: regularized ventricular rhythm with frequent premature ventricular complexes and scooped down-sloping ST segments]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Increase the digoxin dose to control the rate",
      "Administer digoxin-specific antibody fragments",
      "Give intravenous calcium gluconate",
      "Start amiodarone infusion",
      "Perform urgent cardioversion"
    ],
    answer: 1,
    exp: "Nausea, anorexia, visual halos, bradyarrhythmia, and hyperkalemia in a patient whose renal function has declined (reducing digoxin clearance) point to digoxin toxicity. Life-threatening toxicity with hyperkalemia and significant arrhythmia is treated with digoxin-specific antibody fragments (Fab), which bind and neutralize digoxin.",
    why: [
      "Increasing digoxin would worsen an already toxic level and is dangerous.",
      "Correct: hyperkalemia with arrhythmia from digoxin toxicity is an indication for digoxin-specific antibody fragments (Fab).",
      "In digoxin toxicity, IV calcium is classically avoided because of concern for worsening digoxin-related myocardial contracture; Fab is preferred for the hyperkalemia.",
      "Amiodarone raises digoxin levels and does not treat the underlying toxicity; it could worsen the bradyarrhythmia.",
      "Cardioversion in digoxin toxicity can precipitate refractory ventricular fibrillation and is not the appropriate first step here."
    ]
  },
  {
    id: "s2ck-0203",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Cushing syndrome",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 44-year-old woman has gained 15 kg over a year, mostly in the abdomen and face, with new purple abdominal striae, proximal muscle weakness making it hard to rise from a chair, and easy bruising. She has new hypertension and hyperglycemia. She takes no glucocorticoids.\n\n| Test | Value | Reference |\n|---|---|---|\n| Late-night salivary cortisol | Elevated x2 | low |\n| 24-h urine free cortisol | Elevated | normal |\n| 1 mg overnight dexamethasone cortisol | Not suppressed | < 1.8 ug/dL |\n| ACTH | 65 pg/mL | 7.2-63 |",
    lead: "Which of the following is the most appropriate next step to localize the cause?",
    options: [
      "Bilateral adrenal venous sampling",
      "Start ketoconazole empirically",
      "Pituitary MRI with high-dose dexamethasone testing",
      "Reassure and repeat testing in one year",
      "CT of the adrenal glands only"
    ],
    answer: 2,
    exp: "Multiple confirmatory tests (elevated late-night salivary cortisol, elevated urine free cortisol, and failure to suppress on low-dose dexamethasone) establish endogenous hypercortisolism. A non-suppressed ACTH indicates ACTH-dependent disease, most commonly a pituitary adenoma (Cushing disease), so the next step is pituitary MRI, often with high-dose dexamethasone suppression or inferior petrosal sinus sampling to distinguish pituitary from ectopic sources.",
    why: [
      "Adrenal venous sampling is used for primary aldosteronism lateralization, not for ACTH-dependent Cushing syndrome.",
      "Ketoconazole lowers cortisol but treating before localizing the source is inappropriate and obscures the diagnosis.",
      "Correct: hypercortisolism with a non-suppressed (ACTH-dependent) level points to pituitary disease, so pituitary MRI with high-dose testing is next.",
      "The biochemical testing already confirms pathologic hypercortisolism; delaying evaluation risks progressive end-organ damage.",
      "Adrenal CT is appropriate for ACTH-independent (suppressed ACTH) disease, not this ACTH-dependent picture."
    ]
  },
  {
    id: "s2ck-0204",
    system: "Internal Medicine",
    discipline: "Hematology/Oncology",
    topic: "Tumor lysis syndrome",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 22-year-old man with newly diagnosed Burkitt lymphoma is admitted for chemotherapy. Two days after the first dose he becomes oliguric with muscle cramps and perioral tingling. He is on continuous cardiac monitoring.\n\n| Test | Value | Reference |\n|---|---|---|\n| Potassium | 6.4 mEq/L | 3.5-5.0 |\n| Phosphorus | 7.8 mg/dL | 2.5-4.5 |\n| Calcium | 6.9 mg/dL | 8.5-10.2 |\n| Uric acid | 13.2 mg/dL | 3.5-7.2 |\n| Creatinine | 2.6 mg/dL | 0.6-1.2 |",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Oral allopurinol and observation",
      "Loop diuretics with potassium supplementation",
      "Immediate calcium and phosphate infusion",
      "Aggressive IV hydration with rasburicase",
      "Withhold all further therapy and discharge"
    ],
    answer: 3,
    exp: "Rapid cell turnover after cytotoxic therapy for a bulky, highly proliferative tumor releases potassium, phosphate, and nucleic acids, producing hyperkalemia, hyperphosphatemia, hypocalcemia, and hyperuricemia with acute kidney injury: tumor lysis syndrome. Established TLS with high uric acid and renal impairment is managed with aggressive IV fluids to maintain urine output plus rasburicase to rapidly degrade uric acid.",
    why: [
      "Allopurinol only blocks new urate formation and works too slowly for established TLS with marked hyperuricemia and AKI.",
      "Adding potassium would worsen the dangerous hyperkalemia, and diuretics alone do not address the metabolic derangements.",
      "Giving phosphate would worsen hyperphosphatemia; calcium is reserved for symptomatic hypocalcemia or cardiac membrane stabilization, not routine infusion.",
      "Correct: established tumor lysis syndrome is treated with aggressive IV hydration plus rasburicase to rapidly lower uric acid.",
      "Discharging a patient with life-threatening electrolyte derangements and AKI is unsafe."
    ]
  },
  {
    id: "s2ck-0205",
    system: "Internal Medicine",
    discipline: "Hematology/Oncology",
    topic: "Polycythemia vera",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 61-year-old man reports headaches, blurred vision, and intense generalized itching after hot showers for several months. He has a plethoric, ruddy face and a palpable spleen tip. He does not smoke and has normal oxygen saturation.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 19.8 g/dL | 13.5-17.5 |\n| Hematocrit | 59% | 41-53 |\n| Platelets | 640 x10^9/L | 150-400 |\n| WBC | 13.2 x10^9/L | 4.0-11.0 |\n| Erythropoietin | Low | normal |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Chronic hypoxic (secondary) polycythemia",
      "Relative polycythemia from dehydration",
      "Renal cell carcinoma with EPO production",
      "Essential thrombocythemia",
      "Polycythemia vera"
    ],
    answer: 4,
    exp: "Erythrocytosis with a suppressed erythropoietin level, aquagenic pruritus, plethora, splenomegaly, and accompanying leukocytosis and thrombocytosis is characteristic of polycythemia vera, a JAK2-mutated myeloproliferative neoplasm. Low EPO distinguishes it from secondary causes, in which EPO is elevated. Management includes phlebotomy, low-dose aspirin, and cytoreduction (hydroxyurea) in high-risk patients.",
    why: [
      "Hypoxic secondary polycythemia raises EPO and occurs with hypoxemia, which this patient lacks.",
      "Relative polycythemia raises hematocrit through plasma loss but does not cause splenomegaly, leukocytosis, thrombocytosis, or a low EPO.",
      "EPO-secreting renal tumors raise EPO, not suppress it, and do not cause aquagenic pruritus.",
      "Essential thrombocythemia elevates platelets predominantly and does not produce this degree of erythrocytosis with a suppressed EPO.",
      "Correct: erythrocytosis with low EPO, pruritus, splenomegaly, and panmyelosis defines polycythemia vera."
    ]
  },
  {
    id: "s2ck-0206",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Myasthenia gravis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 32-year-old woman reports several weeks of drooping eyelids and double vision that are minimal in the morning and worsen through the day. She also notes that her voice becomes nasal and she tires while chewing at dinner. Strength is normal at rest, but sustained upgaze reproduces the ptosis, which improves after a brief period of rest with ice applied to the lids.",
    lead: "Which of the following is the most appropriate initial diagnostic test?",
    options: [
      "Serum acetylcholine receptor antibodies",
      "Nerve conduction study for demyelination",
      "Muscle biopsy",
      "Serum creatine kinase",
      "Genetic testing for myotonic dystrophy"
    ],
    answer: 0,
    exp: "Fatigable, fluctuating weakness affecting ocular, bulbar, and skeletal muscles that worsens with use and improves with rest (and with cooling) is characteristic of myasthenia gravis, an autoimmune disorder of the postsynaptic acetylcholine receptor. Acetylcholine receptor antibodies are positive in most patients and are the appropriate first serologic test; a chest CT for thymoma follows.",
    why: [
      "Correct: fatigable ocular and bulbar weakness is myasthenia gravis, confirmed by acetylcholine receptor antibodies.",
      "Nerve conduction demyelination testing evaluates peripheral neuropathies, not the neuromuscular junction disorder described.",
      "Muscle biopsy assesses myopathies and is not needed to diagnose myasthenia gravis.",
      "Creatine kinase is elevated in inflammatory myopathies, which cause fixed proximal weakness, not fatigable ptosis and diplopia.",
      "Myotonic dystrophy causes myotonia and distal weakness, not fatigable diurnal ocular weakness."
    ]
  },
  {
    id: "s2ck-0207",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Granulomatosis with polyangiitis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 49-year-old man has months of recurrent bloody nasal crusting, sinus pain, and a saddle-nose deformity, with new cough and hemoptysis. Over the past two weeks his urine has turned cola-colored and his creatinine has doubled. Chest imaging shows bilateral nodules, some cavitary.\n\n| Test | Value | Reference |\n|---|---|---|\n| Creatinine | 2.9 mg/dL | 0.6-1.2 |\n| Urinalysis | dysmorphic RBCs, RBC casts | none |\n| c-ANCA (anti-PR3) | strongly positive | negative |\n| ESR | 88 mm/h | < 20 |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Goodpasture syndrome (anti-GBM disease)",
      "Granulomatosis with polyangiitis",
      "IgA nephropathy",
      "Eosinophilic granulomatosis with polyangiitis",
      "Poststreptococcal glomerulonephritis"
    ],
    answer: 1,
    exp: "The triad of upper airway disease (sinusitis, nasal crusting, saddle-nose), lower airway involvement (cavitary pulmonary nodules, hemoptysis), and rapidly progressive glomerulonephritis with a strongly positive c-ANCA/anti-PR3 is characteristic of granulomatosis with polyangiitis. Treatment is glucocorticoids plus rituximab or cyclophosphamide.",
    why: [
      "Anti-GBM disease causes pulmonary-renal syndrome but lacks the destructive upper-airway granulomatous disease and is ANCA-negative with anti-GBM antibodies.",
      "Correct: upper- and lower-airway granulomatous disease with pauci-immune glomerulonephritis and PR3-ANCA defines granulomatosis with polyangiitis.",
      "IgA nephropathy causes hematuria often after mucosal infection but does not produce sinus destruction, cavitary lung nodules, or c-ANCA.",
      "Eosinophilic granulomatosis with polyangiitis features asthma and prominent eosinophilia with p-ANCA/anti-MPO, not c-ANCA and saddle-nose disease.",
      "Poststreptococcal glomerulonephritis follows a streptococcal infection with low complement and does not cause upper-airway destruction or ANCA positivity."
    ]
  },
  {
    id: "s2ck-0208",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Wernicke encephalopathy",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 57-year-old man with long-standing alcohol use disorder is brought in confused. On exam he is disoriented, has horizontal nystagmus with bilateral lateral rectus weakness, and a wide-based unsteady gait. A well-meaning intern is about to hang a bag of dextrose-containing fluids to treat his low blood glucose.",
    lead: "Which of the following is the most appropriate immediate management?",
    options: [
      "Give dextrose first, then thiamine later if needed",
      "Obtain brain MRI before any treatment",
      "Start a benzodiazepine taper",
      "Administer intramuscular vitamin B12",
      "Administer intravenous thiamine before or with glucose"
    ],
    answer: 4,
    exp: "The triad of confusion, ophthalmoplegia/nystagmus, and gait ataxia in a person with alcohol use disorder indicates Wernicke encephalopathy from thiamine deficiency. Thiamine must be given before or together with glucose because a carbohydrate load in a thiamine-deficient patient can precipitate or worsen the encephalopathy. Prompt parenteral thiamine can reverse the deficits and prevent irreversible Korsakoff amnesia.",
    why: [
      "Giving glucose first can precipitate or worsen Wernicke encephalopathy in a thiamine-deficient patient.",
      "MRI can support the diagnosis but must not delay life- and brain-saving thiamine administration.",
      "Benzodiazepines treat alcohol withdrawal but do not address the thiamine deficiency causing these findings.",
      "Vitamin B12 deficiency causes a different syndrome and does not treat Wernicke encephalopathy.",
      "Correct: parenteral thiamine given before or with glucose treats and prevents progression of Wernicke encephalopathy."
    ]
  },
  {
    id: "s2ck-0209",
    system: "Internal Medicine",
    discipline: "Allergy/Immunology",
    topic: "Anaphylaxis",
    difficulty: "easy",
    anchor: null,
    vignette: "A 24-year-old woman develops diffuse urticaria, lip and tongue swelling, wheezing, and lightheadedness within minutes of eating shrimp at a restaurant. Her blood pressure is 82/50 mm Hg and she is using accessory muscles to breathe. Staff have called for help.",
    lead: "Which of the following is the most appropriate immediate treatment?",
    options: [
      "Intravenous diphenhydramine",
      "Oral prednisone",
      "Nebulized albuterol only",
      "Intravenous famotidine",
      "Intramuscular epinephrine"
    ],
    answer: 4,
    exp: "Rapid-onset involvement of skin (urticaria, angioedema), respiratory (wheeze), and cardiovascular (hypotension) systems after an allergen exposure is anaphylaxis. Intramuscular epinephrine into the anterolateral thigh is the first-line, life-saving treatment; it reverses airway edema, bronchospasm, and vasodilation. Antihistamines and glucocorticoids are adjuncts only.",
    why: [
      "Antihistamines relieve urticaria but do not reverse airway edema or hypotension and are adjuncts, not first-line therapy.",
      "Glucocorticoids have a delayed onset and do not treat the acute life-threatening manifestations.",
      "Albuterol helps bronchospasm but does not address angioedema or hypotension and cannot replace epinephrine.",
      "H2 blockers are adjuncts and have no role as the immediate life-saving intervention.",
      "Correct: intramuscular epinephrine is the immediate first-line treatment for anaphylaxis."
    ]
  },
  {
    id: "s2ck-0210",
    system: "Surgery",
    discipline: "Vascular Surgery",
    topic: "Peripheral artery disease (intermittent claudication)",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 66-year-old man with diabetes and a 40-pack-year smoking history reports cramping pain in both calves after walking two blocks that reliably resolves with a few minutes of rest. His feet are cool with diminished dorsalis pedis pulses, hair loss over the shins, and thin shiny skin. Rest pain and ulceration are absent.\n\n| Measurement | Right | Left | Normal |\n|---|---|---|---|\n| Ankle-brachial index | 0.62 | 0.58 | 0.90-1.40 |",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Immediate lower-extremity bypass surgery",
      "Urgent catheter-directed thrombolysis",
      "Amputation of the more affected limb",
      "Bed rest and limb elevation",
      "Supervised exercise, smoking cessation, statin, and antiplatelet therapy"
    ],
    answer: 4,
    exp: "Reproducible exertional calf pain relieved by rest, diminished pulses, trophic skin changes, and an ankle-brachial index below 0.90 indicate peripheral artery disease with intermittent claudication. For claudication without critical limb ischemia, first-line therapy is risk-factor modification: a supervised exercise program, smoking cessation, a statin, antiplatelet therapy, and glucose/blood pressure control, with cilostazol for persistent symptoms.",
    why: [
      "Bypass surgery is reserved for critical limb ischemia or lifestyle-limiting disease refractory to medical therapy, not initial claudication.",
      "Thrombolysis treats acute limb ischemia, not chronic stable claudication.",
      "Amputation is a last resort for unsalvageable limbs, not stable claudication.",
      "Limb elevation worsens perfusion in arterial disease; dependency, not elevation, is what patients favor.",
      "Correct: claudication is first managed with supervised exercise, smoking cessation, statin, and antiplatelet therapy."
    ]
  },
  {
    id: "s2ck-0211",
    system: "Surgery",
    discipline: "Neurosurgery",
    topic: "Epidural hematoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 19-year-old man struck his temple during a fall from a bicycle. He was briefly unconscious, then awoke and conversed normally for about an hour before rapidly becoming drowsy and difficult to arouse. His right pupil is now dilated and sluggish. Skull palpation reveals tenderness over the temporal region.\n\n**[IMAGE: Noncontrast head CT showing a biconvex (lens-shaped) hyperdense extra-axial collection over the right temporal convexity that does not cross suture lines]**",
    lead: "Which of the following best explains this presentation?",
    options: [
      "Epidural hematoma from middle meningeal artery injury",
      "Acute subdural hematoma from bridging vein tear",
      "Diffuse axonal injury",
      "Subarachnoid hemorrhage from aneurysm rupture",
      "Concussion without structural injury"
    ],
    answer: 0,
    exp: "A lucid interval after temporal trauma followed by rapid deterioration and an ipsilateral blown pupil, with a biconvex hyperdensity that does not cross suture lines, is classic for an epidural hematoma, typically from a torn middle meningeal artery beneath a temporal bone fracture. Rapid arterial bleeding causes uncal herniation, making this a neurosurgical emergency requiring urgent evacuation.",
    why: [
      "Correct: a lucid interval with a lens-shaped hematoma not crossing sutures indicates an arterial epidural hematoma from the middle meningeal artery.",
      "Subdural hematomas are crescent-shaped, cross suture lines, and typically occur in older or anticoagulated patients from venous bleeding.",
      "Diffuse axonal injury causes immediate persistent coma without a lucid interval and shows no lens-shaped collection.",
      "Aneurysmal subarachnoid hemorrhage presents with thunderclap headache and blood in the basal cisterns, not a biconvex extra-axial mass.",
      "Concussion produces no structural lesion on CT and would not cause a fixed dilated pupil or a hyperdense collection."
    ]
  },
  {
    id: "s2ck-0212",
    system: "Surgery",
    discipline: "Colorectal Surgery",
    topic: "Anal fissure",
    difficulty: "easy",
    anchor: null,
    vignette: "A 34-year-old woman reports several weeks of severe, sharp, tearing pain during bowel movements followed by bright red blood on the toilet paper and lingering pain for an hour afterward. She has had hard stools and constipation. Examination reveals a longitudinal tear in the posterior midline of the anal canal; she guards intensely against digital exam.",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Lateral internal sphincterotomy",
      "Fiber, increased fluids, sitz baths, and topical nitroglycerin or diltiazem",
      "Rubber band ligation",
      "Broad-spectrum oral antibiotics",
      "Incision and drainage"
    ],
    answer: 1,
    exp: "Sharp pain during defecation with bright red bleeding and a posterior midline tear is a typical anal fissure, usually from passage of hard stool with sphincter hypertonicity. First-line therapy is conservative: stool softening with fiber and fluids, sitz baths, and topical agents (nitroglycerin or a calcium-channel blocker such as diltiazem) that relax the internal sphincter and improve healing. Sphincterotomy is reserved for chronic refractory fissures.",
    why: [
      "Lateral internal sphincterotomy is reserved for chronic fissures that fail medical therapy, not first-line treatment.",
      "Correct: fiber, fluids, sitz baths, and topical nitroglycerin or diltiazem are first-line for an acute anal fissure.",
      "Band ligation treats internal hemorrhoids, not an anal fissure.",
      "Antibiotics are not indicated for an uncomplicated fissure without abscess.",
      "Incision and drainage treats an abscess, which this patient does not have."
    ]
  },
  {
    id: "s2ck-0213",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Gastric outlet obstruction",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 58-year-old man with a long history of untreated peptic ulcer disease has weeks of early satiety, nausea, and large-volume nonbilious vomiting of undigested food eaten hours earlier. He has lost 8 kg. A succussion splash is audible over the epigastrium. Labs show a hypochloremic, hypokalemic metabolic alkalosis. He appears volume depleted.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Acute pancreatitis",
      "Achalasia",
      "Gastric outlet obstruction",
      "Superior mesenteric artery syndrome",
      "Diabetic gastroparesis"
    ],
    answer: 2,
    exp: "Nonbilious vomiting of undigested food, early satiety, weight loss, a succussion splash, and a hypochloremic hypokalemic metabolic alkalosis (from loss of gastric acid) indicate gastric outlet obstruction, here from chronic peptic ulcer scarring at the pylorus. Management includes fluid/electrolyte correction, nasogastric decompression, acid suppression, and endoscopy to define and treat the obstruction.",
    why: [
      "Pancreatitis causes epigastric pain radiating to the back with elevated lipase, not obstructive vomiting of undigested food with a succussion splash.",
      "Achalasia causes dysphagia to solids and liquids with regurgitation of undigested food but does not produce a gastric succussion splash or metabolic alkalosis from acid loss.",
      "Correct: undigested food emesis, weight loss, succussion splash, and hypochloremic hypokalemic alkalosis define gastric outlet obstruction.",
      "SMA syndrome causes proximal duodenal obstruction with bilious vomiting, typically in very thin patients, not the acid-loss alkalosis of pyloric obstruction.",
      "Diabetic gastroparesis can cause vomiting but this patient's picture is explained by chronic ulcer scarring at the pylorus with a mechanical succussion splash."
    ]
  },
  {
    id: "s2ck-0214",
    system: "Pediatrics",
    discipline: "Pediatric Cardiology",
    topic: "Transposition of the great arteries",
    difficulty: "hard",
    anchor: "image",
    vignette: "A term newborn becomes deeply cyanotic within the first hours of life. The cyanosis does not improve with supplemental oxygen. There is no murmur, and the single second heart sound is loud. The infant is otherwise vigorous. Cyanosis worsens as the ductus arteriosus begins to close.\n\n**[IMAGE: Chest radiograph showing a narrow superior mediastinum with an oval cardiac silhouette described as an 'egg on a string']**",
    lead: "Which of the following is the most appropriate immediate management?",
    options: [
      "Administer 100% oxygen and observe",
      "Give intravenous indomethacin",
      "Begin oral propranolol",
      "Start prostaglandin E1 infusion",
      "Immediate exchange transfusion"
    ],
    answer: 3,
    exp: "Severe neonatal cyanosis unresponsive to oxygen with a single loud S2 and an egg-on-a-string cardiac silhouette suggests d-transposition of the great arteries, in which the pulmonary and systemic circulations run in parallel. Survival depends on mixing between the circuits, so prostaglandin E1 is started to keep the ductus arteriosus patent while balloon atrial septostomy and surgical arterial switch are arranged.",
    why: [
      "Oxygen fails to improve saturation in transposition because the circulations are in parallel; observation would be fatal as the duct closes.",
      "Indomethacin closes the ductus, which would eliminate the mixing this infant depends on.",
      "Propranolol is used for hypercyanotic spells of tetralogy of Fallot, not for duct-dependent transposition.",
      "Correct: prostaglandin E1 maintains ductal patency to allow circulatory mixing in transposition of the great arteries.",
      "Exchange transfusion treats severe hyperbilirubinemia or polycythemia, not the anatomic mixing problem of transposition."
    ]
  },
  {
    id: "s2ck-0215",
    system: "Pediatrics",
    discipline: "Pediatric Infectious Disease",
    topic: "Roseola infantum",
    difficulty: "easy",
    anchor: null,
    vignette: "A 13-month-old girl had three days of high fever to 40 C but otherwise appeared well and continued to feed. As the fever abruptly resolved today, her parents noticed a rose-pink maculopapular rash appearing on the trunk and spreading to the neck and proximal limbs, sparing the face. She is playful and well appearing, and the rash is not itchy.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Measles",
      "Scarlet fever",
      "Rubella",
      "Roseola infantum",
      "Kawasaki disease"
    ],
    answer: 3,
    exp: "High fever for three days in a well-appearing infant followed by defervescence and the sudden appearance of a rose-pink truncal maculopapular rash is classic roseola infantum (exanthem subitum), caused by human herpesvirus 6. The rash appears as the fever breaks. It is self-limited and requires only supportive care.",
    why: [
      "Measles causes a rash that appears while the child is still febrile and toxic-appearing, with cough, coryza, conjunctivitis, and Koplik spots.",
      "Scarlet fever produces a sandpaper rash with sore throat and strawberry tongue, and the rash accompanies the fever rather than following defervescence.",
      "Rubella causes a rash with tender posterior auricular/occipital lymphadenopathy and mild fever, not three days of high fever preceding the rash.",
      "Correct: three days of high fever in a well child, then a rose-pink truncal rash as fever breaks, defines roseola infantum (HHV-6).",
      "Kawasaki disease requires at least five days of fever with conjunctivitis, mucosal changes, extremity changes, and adenopathy, which are absent here."
    ]
  },
  {
    id: "s2ck-0216",
    system: "Pediatrics",
    discipline: "Pediatric Hematology",
    topic: "Sickle cell dactylitis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 10-month-old boy of West African descent presents with symmetric painful swelling of both hands and feet and refusal to bear weight. He is irritable and has a low-grade fever. This is his first such episode. Newborn screening results were not available to the family.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 8.1 g/dL | 10.5-13.5 |\n| Reticulocytes | 9% | 0.5-1.5 |\n| Smear | sickled cells, target cells, Howell-Jolly bodies | none |",
    lead: "Which of the following is the most likely underlying diagnosis?",
    options: [
      "Sickle cell disease",
      "Juvenile idiopathic arthritis",
      "Osteomyelitis of multiple bones",
      "Nonaccidental trauma",
      "Transient synovitis"
    ],
    answer: 0,
    exp: "Symmetric painful swelling of the hands and feet (dactylitis) in an infant with hemolytic anemia, reticulocytosis, sickled cells, and Howell-Jolly bodies (from functional asplenia) is often the first vaso-occlusive manifestation of sickle cell disease. Dactylitis reflects ischemic infarction of the small bones of the hands and feet. Management is hydration, analgesia, and long-term penicillin prophylaxis and pneumococcal vaccination.",
    why: [
      "Correct: infantile dactylitis with hemolytic anemia, sickled cells, and Howell-Jolly bodies indicates sickle cell disease.",
      "Juvenile idiopathic arthritis causes chronic joint inflammation but not hemolytic anemia with sickled cells and Howell-Jolly bodies.",
      "Multifocal osteomyelitis is uncommon and would not explain the chronic hemolytic smear findings pointing to a hemoglobinopathy.",
      "Nonaccidental trauma should be considered for unexplained injury but does not cause symmetric dactylitis with hemolytic anemia.",
      "Transient synovitis affects the hip in older children after a viral illness, not symmetric hand and foot swelling in an infant."
    ]
  },
  {
    id: "s2ck-0217",
    system: "Pediatrics",
    discipline: "Pediatric Ophthalmology/Oncology",
    topic: "Retinoblastoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "The parents of an 18-month-old girl noticed that in recent photographs one of her pupils appears white rather than showing the normal red reflex. On examination there is leukocoria of the left eye and a new intermittent inward deviation of that eye. There is no pain or redness. A maternal uncle had an eye removed in childhood.\n\n**[IMAGE: Fundus photograph showing a creamy-white elevated retinal mass with overlying feeder vessels]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Congenital cataract",
      "Retinoblastoma",
      "Retinopathy of prematurity",
      "Toxocara canis granuloma",
      "Coats disease"
    ],
    answer: 1,
    exp: "Leukocoria (a white pupillary reflex), new strabismus, a family history suggesting a heritable RB1 mutation, and a white retinal mass point to retinoblastoma, the most common intraocular malignancy of childhood. Any child with an absent or white red reflex needs urgent ophthalmologic evaluation, because early treatment is both eye- and life-saving.",
    why: [
      "Congenital cataract causes leukocoria but appears as lens opacity, not a vascularized retinal mass, and lacks the malignant/family-history picture.",
      "Correct: leukocoria with a white retinal mass, strabismus, and a suggestive family history indicates retinoblastoma.",
      "Retinopathy of prematurity occurs in preterm infants with oxygen exposure, not a term toddler with a discrete mass.",
      "Toxocara granuloma can cause leukocoria but is typically unilateral in older children with a peripheral inflammatory granuloma and eosinophilia, not a heritable tumor.",
      "Coats disease causes leukocoria from exudative retinal telangiectasias, usually in boys, without a familial pattern or a solid tumor mass."
    ]
  },
  {
    id: "s2ck-0218",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Asymptomatic bacteriuria in pregnancy",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 27-year-old woman at 14 weeks gestation is seen for routine prenatal care. She has no urinary symptoms, no fever, and no flank pain. A screening clean-catch urine culture obtained at her first visit is reported today.\n\n| Test | Value | Reference |\n|---|---|---|\n| Urine culture | Escherichia coli, >100,000 CFU/mL | no growth |\n| Urinalysis | no symptoms reported | - |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "No treatment; repeat culture only if symptoms develop",
      "Treat only if a repeat culture is again positive",
      "Treat now with an appropriate antibiotic (e.g., nitrofurantoin or cephalexin)",
      "Start prophylactic daily antibiotics for the rest of pregnancy",
      "Obtain renal ultrasound before any therapy"
    ],
    answer: 2,
    exp: "Unlike in nonpregnant adults, asymptomatic bacteriuria in pregnancy is treated because untreated bacteriuria substantially raises the risk of pyelonephritis, preterm birth, and low birth weight. A pregnancy-safe antibiotic such as nitrofurantoin (avoiding near term) or cephalexin is given based on susceptibilities, with a test-of-cure culture afterward.",
    why: [
      "Withholding treatment is appropriate in nonpregnant patients but not in pregnancy, where bacteriuria increases pyelonephritis and preterm birth risk.",
      "A single properly collected positive culture with >100,000 CFU/mL warrants treatment; delaying for a repeat is unnecessary.",
      "Correct: asymptomatic bacteriuria in pregnancy is treated promptly with a pregnancy-safe antibiotic.",
      "Continuous prophylaxis is not indicated after a first episode; treat the current infection and confirm cure.",
      "Renal ultrasound is not required before treating uncomplicated asymptomatic bacteriuria."
    ]
  },
  {
    id: "s2ck-0219",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Trichomoniasis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 29-year-old woman reports a week of copious, frothy, yellow-green, malodorous vaginal discharge with vulvar itching and discomfort during intercourse. On speculum exam the discharge is profuse and the cervix has punctate hemorrhages giving a strawberry appearance. Vaginal pH is 6.0.\n\n**[IMAGE: Saline wet-mount microscopy showing motile flagellated pear-shaped protozoa among epithelial cells and neutrophils]**",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Topical clotrimazole",
      "Oral fluconazole single dose",
      "Intramuscular ceftriaxone",
      "Oral metronidazole",
      "Topical metronidazole gel only"
    ],
    answer: 3,
    exp: "Frothy yellow-green malodorous discharge, a strawberry cervix, elevated vaginal pH, and motile flagellated trichomonads on wet mount indicate Trichomonas vaginalis infection. First-line treatment is oral metronidazole (or tinidazole). Because it is a sexually transmitted infection, partners should be treated and patients tested for other STIs.",
    why: [
      "Topical clotrimazole treats vulvovaginal candidiasis, not a protozoal infection.",
      "Fluconazole treats yeast, which produces thick white discharge with a normal pH, not motile trichomonads.",
      "Ceftriaxone treats gonorrhea; it does not eradicate Trichomonas.",
      "Correct: oral metronidazole (or tinidazole) is first-line for trichomoniasis, with partner treatment.",
      "Topical vaginal metronidazole gel is inadequate for trichomoniasis; systemic oral therapy is required."
    ]
  },
  {
    id: "s2ck-0220",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Menopausal hormone therapy",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 51-year-old woman whose last menstrual period was 10 months ago has frequent disruptive hot flashes and night sweats that impair her sleep and daytime function. She has an intact uterus, no history of breast cancer, venous thromboembolism, coronary disease, or stroke, and a normal blood pressure. She asks about the most effective therapy for her symptoms.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Unopposed systemic estrogen therapy",
      "Vaginal estrogen cream alone",
      "No therapy; symptoms will always resolve within weeks",
      "High-dose combined oral contraceptives indefinitely",
      "Systemic estrogen combined with a progestin"
    ],
    answer: 4,
    exp: "For a recently menopausal woman under 60 with bothersome vasomotor symptoms and no contraindications, systemic hormone therapy is the most effective treatment. Because she has an intact uterus, estrogen must be combined with a progestin to protect the endometrium from estrogen-induced hyperplasia and carcinoma.",
    why: [
      "Unopposed estrogen in a woman with a uterus causes endometrial hyperplasia and cancer and is contraindicated.",
      "Vaginal estrogen treats genitourinary symptoms but does not adequately control systemic vasomotor symptoms.",
      "Vasomotor symptoms can persist for years, and effective therapy exists, so withholding treatment is not appropriate.",
      "High-dose combined contraceptives are not the standard menopausal regimen and carry higher estrogen doses than needed.",
      "Correct: systemic estrogen plus a progestin controls vasomotor symptoms while protecting the endometrium in a woman with a uterus."
    ]
  },
  {
    id: "s2ck-0221",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Uterine rupture",
    difficulty: "hard",
    anchor: null,
    vignette: "A 32-year-old woman at 39 weeks gestation is in active labor attempting a vaginal birth after a prior classical cesarean. She suddenly reports severe tearing abdominal pain, and the previously reassuring fetal tracing shows deep prolonged decelerations with fetal bradycardia. The presenting fetal part, previously engaged, is now higher on exam, and she becomes hypotensive and tachycardic.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Emergent laparotomy and cesarean delivery",
      "Augment labor with oxytocin",
      "Administer terbutaline and continue labor",
      "Await spontaneous vaginal delivery",
      "Place an intrauterine pressure catheter and observe"
    ],
    answer: 0,
    exp: "Sudden severe abdominal pain, loss of fetal station (the presenting part recedes), an abnormal fetal heart tracing with bradycardia, and maternal hemodynamic instability during a trial of labor after a prior classical (high vertical) cesarean are hallmark signs of uterine rupture. This is a life-threatening emergency requiring immediate laparotomy to deliver the fetus and repair or remove the uterus.",
    why: [
      "Correct: signs of uterine rupture during labor mandate emergent laparotomy and delivery.",
      "Oxytocin augmentation would worsen a rupture and is contraindicated.",
      "Terbutaline (tocolysis) does not address a ruptured uterus and would dangerously delay delivery.",
      "Awaiting vaginal delivery risks fetal and maternal death from ongoing hemorrhage and hypoxia.",
      "Placing a pressure catheter and observing delays definitive surgical management of a catastrophic emergency."
    ]
  },
  {
    id: "s2ck-0222",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Delirium",
    difficulty: "moderate",
    anchor: null,
    vignette: "An 82-year-old man hospitalized for pneumonia becomes acutely confused overnight. His attention fluctuates, he is disoriented and picking at the bedsheets, and he was calm and lucid earlier in the day. He is now agitated, sees insects on the wall, and has a distended bladder. His symptoms wax and wane over hours.",
    lead: "Which of the following is the most appropriate initial step?",
    options: [
      "Start a long-acting benzodiazepine for sleep",
      "Diagnose major neurocognitive disorder (dementia) and arrange placement",
      "Identify and treat the underlying medical causes",
      "Begin a cholinesterase inhibitor",
      "Apply physical restraints as the primary intervention"
    ],
    answer: 2,
    exp: "Acute onset, fluctuating course, inattention, disorganized thinking, and altered consciousness with visual hallucinations indicate delirium, not dementia. Delirium is a syndrome caused by an underlying medical disturbance, so management centers on identifying and correcting precipitants (here likely infection, urinary retention, and possibly medications) plus supportive nonpharmacologic measures such as reorientation.",
    why: [
      "Benzodiazepines can worsen or precipitate delirium (except in alcohol/sedative withdrawal) and are not first-line here.",
      "The acute, fluctuating course with inattention distinguishes delirium from the chronic, stable decline of dementia.",
      "Correct: delirium management begins with finding and treating the underlying medical causes.",
      "Cholinesterase inhibitors treat Alzheimer dementia and have no role in acute delirium.",
      "Restraints increase agitation and injury risk and are a last resort, not the primary intervention."
    ]
  },
  {
    id: "s2ck-0223",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Acute dystonic reaction",
    difficulty: "easy",
    anchor: null,
    vignette: "A 20-year-old man is brought to the emergency department a day after starting haloperidol for acute psychosis. He now has painful sustained contraction of his neck muscles twisting his head to one side, and his eyes are deviated upward and locked in place. He is frightened but fully alert, oriented, and afebrile, with normal vital signs.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Intravenous dantrolene",
      "Oral fluoxetine",
      "Intramuscular benztropine or diphenhydramine",
      "Increase the haloperidol dose",
      "Intravenous fluids and cooling measures"
    ],
    answer: 2,
    exp: "Sustained painful muscle contractions such as torticollis and oculogyric crisis occurring within hours to days of starting a high-potency antipsychotic represent an acute dystonic reaction, an extrapyramidal side effect. It is rapidly reversed with an anticholinergic (benztropine) or antihistamine (diphenhydramine) given intramuscularly or intravenously.",
    why: [
      "Dantrolene treats neuroleptic malignant syndrome and malignant hyperthermia, which involve fever and rigidity, not this isolated dystonia.",
      "An SSRI has no role in reversing an acute dystonic reaction.",
      "Correct: an acute dystonic reaction is reversed with intramuscular benztropine or diphenhydramine.",
      "Increasing the offending antipsychotic would worsen the dystonia.",
      "Fluids and cooling treat hyperthermic syndromes; this afebrile patient has a dystonic reaction requiring an anticholinergic."
    ]
  },
  {
    id: "s2ck-0224",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Routine HIV screening",
    difficulty: "easy",
    anchor: null,
    vignette: "A 30-year-old asymptomatic man presents for a routine health maintenance visit. He has never been tested for HIV. He has no specific complaints and reports being in a monogamous relationship. You are reviewing which routine screening tests to recommend for adults his age.",
    lead: "Which of the following screening recommendations is most appropriate?",
    options: [
      "Screen for HIV only if he reports high-risk behaviors",
      "Defer HIV screening until age 50",
      "Screen only after obtaining separate written specific consent unrelated to routine care",
      "Offer one-time HIV screening as part of routine care",
      "HIV screening is not recommended for asymptomatic adults"
    ],
    answer: 3,
    exp: "Guidelines recommend routine, opt-out HIV screening at least once for all adolescents and adults regardless of stated risk, because risk-based testing misses many infections and early detection improves outcomes and reduces transmission. This asymptomatic 30-year-old who has never been tested should be offered HIV screening as part of routine care.",
    why: [
      "Risk-based screening alone misses many infections; routine screening is recommended irrespective of reported risk.",
      "HIV screening should not be deferred to age 50; routine screening covers adolescents and adults broadly.",
      "Separate written specific consent is no longer required; HIV testing is incorporated into general consent for care in most settings.",
      "Correct: one-time routine (opt-out) HIV screening is recommended for all adults regardless of risk factors.",
      "HIV screening is recommended for asymptomatic adults, so declining to screen is incorrect."
    ]
  },
  {
    id: "s2ck-0225",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Mandatory reporting of suspected child abuse",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 2-year-old is brought in for a fall. The physician notes multiple bruises of varying ages over the torso and buttocks, a spiral femur fracture, and a caregiver history that keeps changing and does not match the injuries. The caregiver becomes upset and asks the physician to keep this visit confidential and not to involve any outside agency.",
    lead: "Which of the following is the most appropriate action?",
    options: [
      "Honor the request for confidentiality and discharge the child",
      "Report the suspected abuse to child protective services",
      "Report only after obtaining definitive proof of abuse",
      "Wait for the involvement of the hospital lawyer before acting",
      "Ask the caregiver to sign a safety contract and follow up in one month"
    ],
    answer: 1,
    exp: "Physicians are mandated reporters and must report a reasonable suspicion of child abuse to child protective services; they do not need to prove abuse first. Injuries of varying ages, patterns inconsistent with the stated mechanism, and a spiral long-bone fracture in a nonambulatory-appropriate history raise strong suspicion. Reporting overrides the caregiver's request for confidentiality because it protects the child.",
    why: [
      "Maintaining confidentiality and discharging the child leaves a vulnerable child at risk and violates mandatory reporting duties.",
      "Correct: a reasonable suspicion of child abuse must be reported to child protective services by mandated reporters.",
      "Reporting requires only reasonable suspicion, not definitive proof; awaiting proof endangers the child.",
      "Legal consultation should not delay a mandated safety report to protect the child.",
      "A safety contract with delayed follow-up does not protect the child and is not an acceptable alternative to reporting."
    ]
  }
];
