/*
 * Rounds Codex - USMLE Step 2 CK question bank, Batch 1 (25 items)
 * Blueprint-weighted, Medicine-heavy clinical mix. All vignettes original;
 * source used for facts only. Step 2 CK items are clinical: each ends in a
 * decision about diagnosis, next best step, pharmacotherapy, or prevention.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP2CK_B1 = [
  {
    id: "s2ck-0001",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Acute ST-elevation myocardial infarction",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 58-year-old man arrives at the emergency department with 40 minutes of crushing substernal chest pressure that radiates to his left arm. He is diaphoretic and nauseated. Blood pressure is 138/84 mm Hg and heart rate is 92/min. He is given aspirin and sublingual nitroglycerin.\n\n**[ECG: ST-segment elevation in leads II, III, and aVF with reciprocal ST depression in leads I and aVL]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Obtain serial troponin levels and withhold treatment until results return",
      "Start intravenous heparin and admit for telemetry observation",
      "Activate the cardiac catheterization laboratory for primary percutaneous coronary intervention",
      "Give thrombolytics only after a repeat ECG in 6 hours confirms changes",
      "Arrange an outpatient exercise stress test"
    ],
    answer: 2,
    exp: "The ECG shows an inferior ST-elevation myocardial infarction, which is a time-critical diagnosis. The single most important intervention is prompt reperfusion, and primary percutaneous coronary intervention is preferred when it can be delivered within a door-to-balloon time of 90 minutes. Reperfusion should not be delayed to wait for troponin, which may be normal early in the course.",
    why: [
      "Troponin can be normal in the first hours, so waiting for it delays life-saving reperfusion in a clear STEMI.",
      "Heparin and observation alone do not restore coronary flow in an evolving STEMI.",
      "Correct: ST elevation across the inferior leads is a STEMI, and immediate primary PCI is the preferred reperfusion strategy.",
      "Delaying a repeat ECG for 6 hours wastes salvageable myocardium when ST elevation is already present.",
      "An outpatient stress test is unsafe and inappropriate during an acute infarction."
    ]
  },
  {
    id: "s2ck-0002",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Symptomatic hyponatremia from SIADH",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 70-year-old woman with small cell lung cancer is brought in for 2 days of worsening confusion and one witnessed seizure. She is clinically euvolemic with no edema and normal skin turgor. She takes no diuretics.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sodium | 116 mEq/L | 135-145 |\n| Serum osmolality | 245 mOsm/kg | 275-295 |\n| Urine osmolality | 520 mOsm/kg | - |\n| Urine sodium | 60 mEq/L | - |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Rapidly correct the sodium to the normal range within 12 hours using 3% saline",
      "Begin fluid restriction alone and recheck sodium in 24 hours",
      "Infuse 0.9% (isotonic) saline boluses",
      "Give hypertonic 3% saline, limiting the rise to about 6 to 8 mEq/L over 24 hours",
      "Administer desmopressin to reduce free water losses"
    ],
    answer: 3,
    exp: "The low serum osmolality with inappropriately concentrated urine and high urine sodium in a euvolemic patient with small cell lung cancer indicates SIADH. Because she has severe symptoms (seizure and confusion), the treatment is hypertonic 3% saline, but correction must be controlled to no more than roughly 6 to 8 mEq/L in 24 hours to avoid osmotic demyelination. Fluid restriction alone is too slow for a seizing patient.",
    why: [
      "Overly rapid correction risks osmotic demyelination syndrome and is dangerous.",
      "Fluid restriction alone acts too slowly for a patient who is actively seizing.",
      "Isotonic saline can worsen hyponatremia in SIADH because the concentrated urine excretes the salt and retains the water.",
      "Correct: severe symptomatic hyponatremia warrants 3% saline with a deliberately capped correction rate to prevent demyelination.",
      "Desmopressin promotes water retention and would further lower the sodium."
    ]
  },
  {
    id: "s2ck-0003",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Pneumocystis pneumonia in advanced HIV",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 34-year-old man with HIV who stopped his antiretroviral therapy a year ago has 3 weeks of progressive exertional dyspnea and a dry cough. His oxygen saturation is 96% at rest but falls to 86% with ambulation. His CD4 count is 40 cells/mm3, and serum lactate dehydrogenase is elevated. Chest imaging shows diffuse bilateral interstitial infiltrates.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Pneumocystis jirovecii pneumonia",
      "Bacterial lobar pneumonia",
      "Reactivation pulmonary tuberculosis",
      "Pulmonary Kaposi sarcoma",
      "Cytomegalovirus pneumonitis"
    ],
    answer: 0,
    exp: "Subacute dyspnea, a nonproductive cough, marked exertional desaturation, diffuse bilateral interstitial infiltrates, and an elevated LDH in a patient with a CD4 count under 200 are classic for Pneumocystis jirovecii pneumonia. Exercise-induced hypoxemia out of proportion to resting findings is a characteristic clue. First-line treatment is trimethoprim-sulfamethoxazole, with corticosteroids added for significant hypoxemia.",
    why: [
      "Correct: subacute dyspnea with diffuse interstitial infiltrates, high LDH, and profound CD4 depletion is the classic picture of Pneumocystis pneumonia.",
      "Bacterial lobar pneumonia typically causes acute focal consolidation with productive cough, not diffuse interstitial disease.",
      "Tuberculosis usually produces apical infiltrates or cavitation with weeks of cough, fevers, and weight loss.",
      "Pulmonary Kaposi sarcoma causes nodular lesions and often skin involvement, not this interstitial pattern with high LDH.",
      "CMV pneumonitis is less common as an isolated lung process and usually occurs with other end-organ CMV disease."
    ]
  },
  {
    id: "s2ck-0004",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Diabetic ketoacidosis management",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 22-year-old woman with type 1 diabetes presents with nausea, vomiting, and diffuse abdominal pain after missing insulin doses during an illness. She has deep, rapid breathing and a fruity odor on her breath. Blood pressure is 104/66 mm Hg and heart rate is 118/min with dry mucous membranes.\n\n| Test | Value | Reference |\n|---|---|---|\n| Glucose | 486 mg/dL | 70-100 |\n| Arterial pH | 7.16 | 7.35-7.45 |\n| Bicarbonate | 10 mEq/L | 22-28 |\n| Potassium | 5.4 mEq/L | 3.5-5.0 |\n| Serum ketones | large | negative |",
    lead: "Which of the following is the most appropriate initial step in management?",
    options: [
      "Give an intravenous insulin bolus before any fluids",
      "Begin isotonic intravenous fluid resuscitation",
      "Start intravenous potassium replacement immediately",
      "Administer intravenous sodium bicarbonate",
      "Give subcutaneous long-acting insulin"
    ],
    answer: 1,
    exp: "The first priority in diabetic ketoacidosis is aggressive isotonic fluid resuscitation to restore intravascular volume and perfusion. Insulin is started shortly after fluids, but potassium must be checked first because insulin drives potassium into cells; replacement is added only once the potassium falls below about 5.3 mEq/L. Bicarbonate is reserved for extreme acidemia and is not part of routine initial care.",
    why: [
      "Insulin is not given as a first bolus before fluids, and it can precipitate dangerous hypokalemia if given before volume and potassium are addressed.",
      "Correct: restoring intravascular volume with isotonic fluids is the first step and improves perfusion and glucose clearance.",
      "This potassium is at the upper end, so immediate potassium infusion is not yet indicated; insulin will lower it into the target range.",
      "Bicarbonate is reserved for severe acidemia (pH under about 6.9) and does not improve outcomes here.",
      "Subcutaneous long-acting insulin is inappropriate for acute DKA, which requires intravenous insulin after fluids."
    ]
  },
  {
    id: "s2ck-0005",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Spontaneous bacterial peritonitis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 55-year-old man with alcohol-related cirrhosis and known ascites presents with 1 day of diffuse abdominal pain, fever, and new confusion. Temperature is 38.4 C. The abdomen is distended with shifting dullness and diffuse tenderness. A diagnostic paracentesis is performed.\n\n| Test | Value | Reference |\n|---|---|---|\n| Ascitic fluid neutrophils (PMNs) | 380 cells/mm3 | < 250 |\n| Ascitic fluid total protein | 0.8 g/dL | - |\n| Blood culture | pending | - |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Repeat the paracentesis in 48 hours before treating",
      "Place a transjugular intrahepatic portosystemic shunt",
      "Prescribe oral ciprofloxacin prophylaxis only",
      "Intensify diuretics and sodium restriction",
      "Start empiric intravenous cefotaxime"
    ],
    answer: 4,
    exp: "An ascitic fluid neutrophil count of at least 250 cells/mm3 establishes spontaneous bacterial peritonitis, even before culture results. Empiric treatment with a third-generation cephalosporin such as cefotaxime should begin immediately, and intravenous albumin is added to reduce the risk of hepatorenal syndrome. Delaying antibiotics to await cultures increases mortality.",
    why: [
      "Delaying antibiotics for a repeat tap risks progression to sepsis and death.",
      "A TIPS procedure treats refractory ascites or variceal bleeding, not acute infection.",
      "Oral prophylaxis is for prevention in high-risk patients, not treatment of established SBP.",
      "Diuretics and salt restriction manage ascites volume but do not treat the infection.",
      "Correct: a PMN count of 250 or more diagnoses SBP, and prompt empiric cefotaxime is indicated."
    ]
  },
  {
    id: "s2ck-0006",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Acute pulmonary embolism workup",
    difficulty: "hard",
    anchor: null,
    vignette: "A 62-year-old woman is on postoperative day 3 after a total hip replacement when she develops sudden pleuritic chest pain and dyspnea. Heart rate is 112/min, respiratory rate is 26/min, blood pressure is 128/78 mm Hg, and oxygen saturation is 89% on room air. Her right calf is swollen and tender. She remains hemodynamically stable.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Send a D-dimer and discharge her if it is negative",
      "Administer systemic thrombolytic therapy immediately",
      "Obtain CT pulmonary angiography and begin therapeutic anticoagulation",
      "Order lower-extremity ultrasound as the only test",
      "Start empiric antibiotics for hospital-acquired pneumonia"
    ],
    answer: 2,
    exp: "Recent major orthopedic surgery, tachycardia, hypoxemia, and signs of deep vein thrombosis create a high pretest probability of pulmonary embolism. With high probability, a D-dimer is not useful, and the correct approach is confirmatory CT pulmonary angiography while starting therapeutic anticoagulation unless contraindicated. Thrombolytics are reserved for hemodynamically unstable (massive) PE, which this stable patient does not have.",
    why: [
      "A D-dimer is not helpful when pretest probability is high because a negative result cannot safely exclude PE in this setting.",
      "Systemic thrombolysis is reserved for massive PE with hemodynamic instability, and this patient is stable.",
      "Correct: high pretest probability warrants CT pulmonary angiography plus prompt anticoagulation, which can start before imaging if no contraindication.",
      "A negative leg ultrasound would not rule out PE, so imaging of the chest is still required.",
      "The presentation is thromboembolic, not infectious, so antibiotics are inappropriate."
    ]
  },
  {
    id: "s2ck-0007",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Giant cell (temporal) arteritis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 72-year-old woman reports 2 weeks of a new right-sided temporal headache, tenderness when combing her hair, and jaw pain when chewing. This morning she had a transient episode of vision loss in the right eye that resolved. The temporal artery is tender and nodular. Her erythrocyte sedimentation rate is 92 mm/h.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Start high-dose corticosteroids immediately",
      "Obtain a temporal artery biopsy before starting any treatment",
      "Order MRI of the brain before initiating therapy",
      "Begin low-dose aspirin and observe",
      "Start methotrexate as first-line therapy"
    ],
    answer: 0,
    exp: "New temporal headache, jaw claudication, scalp tenderness, transient vision loss, and a markedly elevated ESR in an older patient indicate giant cell arteritis. Because untreated disease can cause irreversible blindness, high-dose corticosteroids must be started immediately, before biopsy. A temporal artery biopsy remains diagnostic and stays positive for several days after steroids are begun, so treatment should not wait.",
    why: [
      "Correct: the threat of permanent vision loss means high-dose steroids are started at once, without waiting for biopsy.",
      "Biopsy confirms the diagnosis but should not delay steroids because the artery stays abnormal for days after treatment begins.",
      "Brain MRI does not diagnose giant cell arteritis and would delay sight-saving therapy.",
      "Low-dose aspirin is adjunctive and cannot prevent the ischemic optic damage that steroids address.",
      "Methotrexate is a steroid-sparing add-on, not the initial treatment for threatened vision."
    ]
  },
  {
    id: "s2ck-0008",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Iron deficiency anemia",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 35-year-old woman reports several months of fatigue and reduced exercise tolerance. She has heavy menstrual periods lasting 7 days and admits to frequently craving and chewing ice. Conjunctivae are pale.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 9.2 g/dL | 12.0-15.5 |\n| Mean corpuscular volume | 68 fL | 80-100 |\n| Ferritin | 6 ng/mL | 15-150 |\n| Red cell distribution width | elevated | - |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Anemia of chronic disease",
      "Beta-thalassemia trait",
      "Vitamin B12 deficiency",
      "Iron deficiency anemia",
      "Sideroblastic anemia"
    ],
    answer: 3,
    exp: "A microcytic anemia with a low ferritin, an elevated red cell distribution width, and pica for ice (pagophagia) in a woman with heavy menses points to iron deficiency anemia. Ferritin is the most useful single test and is low only in iron deficiency among the microcytic anemias. Management is oral iron replacement and treatment of the source of blood loss.",
    why: [
      "Anemia of chronic disease usually shows normal or high ferritin because ferritin is an acute-phase reactant.",
      "Thalassemia trait causes microcytosis with a normal or low RDW and a normal ferritin, and does not lower ferritin.",
      "B12 deficiency produces a macrocytic anemia, not microcytosis.",
      "Correct: microcytosis with a low ferritin and pica in a woman with menorrhagia is classic iron deficiency.",
      "Sideroblastic anemia typically raises iron and ferritin rather than lowering ferritin."
    ]
  },
  {
    id: "s2ck-0009",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Anticoagulation in atrial fibrillation",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 74-year-old woman is evaluated for palpitations and an irregular pulse noted at a routine visit. Her history includes hypertension, type 2 diabetes, and a transient ischemic attack 2 years ago. She has no history of bleeding and normal renal function.\n\n**[ECG: irregularly irregular rhythm with absent P waves and a fibrillatory baseline, consistent with atrial fibrillation]**",
    lead: "Which of the following is the most appropriate next step to reduce her stroke risk?",
    options: [
      "Aspirin 81 mg daily",
      "Start a direct oral anticoagulant such as apixaban",
      "No antithrombotic therapy is needed",
      "Dual antiplatelet therapy with aspirin plus clopidogrel",
      "Begin anticoagulation only after successful cardioversion"
    ],
    answer: 1,
    exp: "Her CHA2DS2-VASc score is high (age 65 to 74, female sex, hypertension, diabetes, and a prior TIA counting 2 points, totaling 6), which places her at substantial stroke risk. Guidelines recommend oral anticoagulation, and a direct oral anticoagulant such as apixaban is preferred over warfarin for nonvalvular atrial fibrillation. Antiplatelet therapy is inferior for stroke prevention in this setting.",
    why: [
      "Aspirin provides inadequate stroke protection in atrial fibrillation with a high CHA2DS2-VASc score.",
      "Correct: a high stroke-risk score warrants oral anticoagulation, and a DOAC is first-line for nonvalvular atrial fibrillation.",
      "Withholding therapy leaves a high-risk patient unprotected against cardioembolic stroke.",
      "Dual antiplatelet therapy is less effective than anticoagulation and adds bleeding risk.",
      "Stroke prevention is indicated based on risk factors regardless of whether cardioversion is planned."
    ]
  },
  {
    id: "s2ck-0010",
    system: "Surgery",
    discipline: "Emergency/Trauma",
    topic: "Blunt abdominal trauma with hemodynamic instability",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 28-year-old man is brought in after a high-speed motor vehicle collision. He has a seatbelt sign across the abdomen with distension and guarding. Blood pressure is 84/52 mm Hg and heart rate is 132/min. He remains hypotensive after 2 liters of crystalloid.\n\n**[IMAGE: focused assessment with sonography for trauma (FAST) showing anechoic free fluid in the hepatorenal (Morrison) pouch]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "CT of the abdomen and pelvis with contrast",
      "Diagnostic peritoneal lavage",
      "Admission for observation with serial abdominal examinations",
      "Repeat the FAST examination in 1 hour",
      "Immediate exploratory laparotomy"
    ],
    answer: 4,
    exp: "A patient with blunt abdominal trauma who is persistently hypotensive despite fluids and has a positive FAST is bleeding into the peritoneum and needs operative control of hemorrhage. Immediate exploratory laparotomy is indicated, and CT should be avoided because it delays definitive care in an unstable patient. CT is appropriate only when the patient is hemodynamically stable.",
    why: [
      "CT requires a stable patient and would dangerously delay hemorrhage control here.",
      "Diagnostic peritoneal lavage is unnecessary because the positive FAST already confirms intraperitoneal blood.",
      "Observation is unsafe in a hypotensive patient with a positive FAST.",
      "Repeating the FAST wastes time when the patient is already unstable with confirmed free fluid.",
      "Correct: persistent hypotension with a positive FAST after fluids mandates immediate laparotomy."
    ]
  },
  {
    id: "s2ck-0011",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Acute appendicitis",
    difficulty: "easy",
    anchor: null,
    vignette: "A 19-year-old man has 18 hours of abdominal pain that began around the umbilicus and then shifted to the right lower quadrant. He has anorexia, nausea, and a temperature of 38.1 C. Examination shows maximal tenderness at McBurney point with guarding and rebound tenderness.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Acute appendicitis",
      "Acute cholecystitis",
      "Sigmoid diverticulitis",
      "Ureteral colic from nephrolithiasis",
      "Mesenteric adenitis"
    ],
    answer: 0,
    exp: "Periumbilical pain that migrates to the right lower quadrant with anorexia, low-grade fever, and localized peritoneal signs at McBurney point is the classic presentation of acute appendicitis. The typical sequence reflects early visceral referred pain followed by parietal peritoneal irritation as inflammation progresses. Management is appendectomy, often after confirmatory imaging in equivocal cases.",
    why: [
      "Correct: migratory periumbilical-to-right-lower-quadrant pain with McBurney tenderness is textbook appendicitis.",
      "Cholecystitis causes right upper quadrant pain with a positive Murphy sign, not right lower quadrant findings.",
      "Diverticulitis typically causes left lower quadrant pain in older adults.",
      "Ureteral colic causes severe flank pain radiating to the groin with hematuria, not localized peritoneal signs.",
      "Mesenteric adenitis can mimic appendicitis but is less likely given the classic migratory pain and peritoneal signs."
    ]
  },
  {
    id: "s2ck-0012",
    system: "Surgery",
    discipline: "Vascular Surgery",
    topic: "Ruptured abdominal aortic aneurysm",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 70-year-old man with a long smoking history and hypertension presents with sudden severe abdominal and back pain. He is pale and diaphoretic. Blood pressure is 78/44 mm Hg and heart rate is 128/min. A pulsatile, tender mass is palpable in the mid-abdomen.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Obtain CT angiography before any intervention",
      "Perform bedside ultrasound and then observe",
      "Proceed to immediate surgical repair",
      "Administer intravenous beta-blockade and admit to the ward",
      "Refer for outpatient vascular surgery follow-up"
    ],
    answer: 2,
    exp: "The triad of sudden abdominal or back pain, hypotension, and a pulsatile abdominal mass in an older smoker is a ruptured abdominal aortic aneurysm. A hemodynamically unstable patient should go directly to the operating room for emergent repair without waiting for confirmatory imaging. CT is appropriate only in a stable patient in whom the diagnosis is uncertain.",
    why: [
      "CT angiography would delay definitive repair in an unstable patient who is exsanguinating.",
      "Ultrasound can suggest an aneurysm but observation is fatal in a suspected rupture.",
      "Correct: an unstable patient with a suspected ruptured AAA requires immediate operative repair.",
      "Beta-blockade and ward admission do not control the hemorrhage and delay surgery.",
      "Outpatient referral is grossly inadequate for an acute life-threatening rupture."
    ]
  },
  {
    id: "s2ck-0013",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Acute calculous cholecystitis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 45-year-old woman has 12 hours of constant right upper quadrant pain that began after a fatty meal, along with nausea and a temperature of 38.3 C. She has inspiratory arrest on deep palpation of the right upper quadrant (a positive Murphy sign).\n\n**[IMAGE: right upper quadrant ultrasound showing a thickened gallbladder wall, pericholecystic fluid, and a shadowing stone impacted in the gallbladder neck]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Elective cholecystectomy scheduled in 6 weeks",
      "Intravenous antibiotics and laparoscopic cholecystectomy during this admission",
      "Urgent ERCP",
      "Oral ursodeoxycholic acid dissolution therapy",
      "Observation with a low-fat diet and outpatient follow-up"
    ],
    answer: 1,
    exp: "The clinical picture with a positive Murphy sign plus ultrasound showing gallbladder wall thickening, pericholecystic fluid, and an impacted stone confirms acute calculous cholecystitis. Standard care is intravenous fluids and antibiotics followed by early laparoscopic cholecystectomy during the same hospitalization, which lowers complications compared with delayed surgery. ERCP is reserved for suspected common bile duct stones or cholangitis.",
    why: [
      "Delaying surgery for 6 weeks increases the risk of complications in acute cholecystitis.",
      "Correct: acute cholecystitis is treated with antibiotics and early (same-admission) laparoscopic cholecystectomy.",
      "ERCP addresses common bile duct obstruction or cholangitis, which are not shown here.",
      "Dissolution therapy is slow and ineffective for acute cholecystitis.",
      "Observation alone risks progression to gangrene or perforation."
    ]
  },
  {
    id: "s2ck-0014",
    system: "Pediatrics",
    discipline: "Pediatric Pulmonology",
    topic: "Viral bronchiolitis",
    difficulty: "easy",
    anchor: null,
    vignette: "An 8-month-old infant is brought in during winter with 3 days of runny nose and cough that has progressed to noisy, fast breathing and poor feeding. Temperature is 38.0 C, respiratory rate is 58/min, and there are mild intercostal retractions. Auscultation reveals diffuse wheezes and fine crackles. Oxygen saturation is 94%.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Bacterial pneumonia",
      "Asthma exacerbation",
      "Croup (laryngotracheobronchitis)",
      "Viral bronchiolitis",
      "Foreign body aspiration"
    ],
    answer: 3,
    exp: "A first episode of wheezing in an infant under 2 years during winter, preceded by upper respiratory symptoms and with diffuse wheezes and crackles, is characteristic of viral bronchiolitis, most often caused by respiratory syncytial virus. Management is supportive with hydration, nasal suctioning, and supplemental oxygen as needed. Bronchodilators, steroids, and antibiotics are not routinely helpful.",
    why: [
      "Bacterial pneumonia usually causes focal consolidation and higher fever rather than diffuse wheezing after a viral prodrome.",
      "Asthma is difficult to diagnose at this age and typically involves recurrent episodes, not a first winter illness after a cold.",
      "Croup produces a barky cough and inspiratory stridor, not diffuse wheezes and crackles.",
      "Correct: a first winter wheezing illness in an infant with a preceding coryza is classic viral bronchiolitis.",
      "Foreign body aspiration usually causes sudden focal, unilateral findings rather than a gradual viral course with diffuse crackles."
    ]
  },
  {
    id: "s2ck-0015",
    system: "Pediatrics",
    discipline: "Pediatric Rheumatology",
    topic: "Kawasaki disease",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 4-year-old boy has had a fever above 39 C for 6 days. Examination shows bilateral nonexudative conjunctival injection, cracked erythematous lips with a strawberry tongue, a polymorphous truncal rash, edema and erythema of the hands and feet, and a single enlarged cervical lymph node.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Supportive care and reassurance",
      "Oral antibiotics for streptococcal pharyngitis",
      "Corticosteroids as sole therapy",
      "Acyclovir",
      "Intravenous immunoglobulin plus high-dose aspirin"
    ],
    answer: 4,
    exp: "Fever for at least 5 days with conjunctivitis, mucositis (strawberry tongue and cracked lips), rash, extremity changes, and cervical lymphadenopathy meets criteria for Kawasaki disease. Prompt treatment with intravenous immunoglobulin and aspirin reduces the risk of coronary artery aneurysms, and an echocardiogram should be obtained. Delay in treatment increases the likelihood of coronary complications.",
    why: [
      "Supportive care alone leaves the child at high risk for coronary artery aneurysms.",
      "Antibiotics do not treat Kawasaki disease, which is not a bacterial infection.",
      "Steroids may be added in refractory or high-risk cases but are not the standard first-line monotherapy.",
      "Acyclovir treats herpesvirus infections and has no role here.",
      "Correct: IVIG plus aspirin is the standard treatment and reduces the risk of coronary aneurysms."
    ]
  },
  {
    id: "s2ck-0016",
    system: "Pediatrics",
    discipline: "Neonatology",
    topic: "Neonatal hyperbilirubinemia",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A term infant born at 38 weeks is now 60 hours old and appears jaundiced with icterus extending to the palms and soles. He is breastfeeding well with adequate wet diapers and no lethargy. Mother and infant are both blood type O positive, and there is no evidence of hemolysis.\n\n| Test | Value | Reference |\n|---|---|---|\n| Total serum bilirubin | 21 mg/dL | age-specific |\n| Direct (conjugated) bilirubin | 0.4 mg/dL | < 1 |\n| Hematocrit | 52% | - |\n| Reticulocytes | normal | - |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Initiate phototherapy",
      "Perform an immediate exchange transfusion",
      "Reassure and follow up in 2 weeks",
      "Permanently discontinue breastfeeding",
      "Start intravenous antibiotics"
    ],
    answer: 0,
    exp: "This is an unconjugated hyperbilirubinemia in a well term infant without hemolysis. At 60 hours of age a total bilirubin of 21 mg/dL exceeds the phototherapy threshold but is well below the exchange transfusion level (typically around 25 mg/dL), so phototherapy is the correct intervention. Interpreting the value against the age-in-hours nomogram, rather than the number alone, drives the decision.",
    why: [
      "Correct: a bilirubin of 21 mg/dL at 60 hours in a well infant crosses the phototherapy threshold but not the exchange threshold.",
      "Exchange transfusion is reserved for much higher levels or signs of acute bilirubin encephalopathy.",
      "Simple reassurance is unsafe because this level warrants active treatment.",
      "Breastfeeding generally continues; permanent cessation is not indicated.",
      "There is no evidence of infection, so antibiotics are not warranted."
    ]
  },
  {
    id: "s2ck-0017",
    system: "Pediatrics",
    discipline: "Pediatric Surgery",
    topic: "Hypertrophic pyloric stenosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 5-week-old firstborn boy has 1 week of progressively forceful, nonbilious vomiting that now shoots across the room immediately after feeds. He appears hungry and eagerly refeeds afterward. A firm, olive-shaped mass is palpable in the epigastrium, and laboratory studies show a hypochloremic, hypokalemic metabolic alkalosis.\n\n**[IMAGE: abdominal ultrasound showing an elongated pyloric channel of 17 mm with a muscle wall thickness of 4 mm]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Gastroesophageal reflux disease",
      "Duodenal atresia",
      "Hypertrophic pyloric stenosis",
      "Malrotation with midgut volvulus",
      "Necrotizing enterocolitis"
    ],
    answer: 2,
    exp: "Progressive nonbilious projectile vomiting in a hungry infant around 3 to 6 weeks of age, with a palpable olive-shaped epigastric mass and hypochloremic hypokalemic metabolic alkalosis, is hypertrophic pyloric stenosis. Ultrasound confirming an elongated, thickened pylorus is diagnostic. Management is fluid and electrolyte correction followed by pyloromyotomy.",
    why: [
      "Reflux causes effortless regurgitation, not projectile vomiting with an olive mass and alkalosis.",
      "Duodenal atresia presents in the newborn period with bilious vomiting and a double-bubble sign.",
      "Correct: projectile nonbilious vomiting, a palpable olive, alkalosis, and a thickened pylorus on ultrasound define pyloric stenosis.",
      "Malrotation with volvulus causes bilious vomiting and is a surgical emergency, unlike this nonbilious picture.",
      "Necrotizing enterocolitis affects premature neonates with feeding intolerance and pneumatosis intestinalis."
    ]
  },
  {
    id: "s2ck-0018",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Preeclampsia with severe features",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 30-year-old woman at 34 weeks gestation presents with a severe headache and right upper quadrant pain. Blood pressure is 166/112 mm Hg on repeat measurement. Urine protein is elevated, and platelet count is 88,000/mm3. Deep tendon reflexes are brisk. The fetal heart tracing is reassuring.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Proceed to immediate cesarean delivery regardless of other factors",
      "Arrange outpatient monitoring with follow-up in 1 week",
      "Prescribe oral labetalol and discharge home",
      "Admit for intravenous magnesium sulfate and blood pressure control",
      "Give betamethasone alone and continue expectant management at home"
    ],
    answer: 3,
    exp: "Severe-range blood pressure with headache, right upper quadrant pain, proteinuria, and thrombocytopenia indicates preeclampsia with severe features. The immediate priorities are hospital admission, intravenous magnesium sulfate for seizure prophylaxis, and antihypertensive therapy for severe blood pressure, along with antenatal corticosteroids for fetal lung maturity. Delivery is planned but does not have to be immediate cesarean when the mother and fetus are stable at 34 weeks.",
    why: [
      "Immediate cesarean is not mandatory when stable; the route and timing of delivery are individualized after stabilization.",
      "Outpatient management is unsafe with severe features and thrombocytopenia.",
      "Discharge home with oral medication fails to provide seizure prophylaxis and monitoring.",
      "Correct: severe features require admission, magnesium sulfate, and control of severe-range blood pressure.",
      "Steroids are appropriate but home expectant management omits the necessary magnesium and monitoring."
    ]
  },
  {
    id: "s2ck-0019",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Rh(D) alloimmunization prophylaxis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 26-year-old woman in her first pregnancy is seen for a routine visit at 28 weeks gestation. Her blood type is O negative and her antibody screen is negative. The baby's father is known to be Rh(D) positive. She has had no bleeding or trauma.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "No intervention is needed because the antibody screen is negative",
      "Administer anti-D immune globulin now at 28 weeks",
      "Begin intrauterine transfusion",
      "Deliver early to prevent sensitization",
      "Repeat the antibody screen monthly without prophylaxis"
    ],
    answer: 1,
    exp: "An Rh(D)-negative, unsensitized pregnant woman should receive anti-D immune globulin at about 28 weeks to prevent alloimmunization, with an additional dose after delivery if the newborn is Rh(D) positive. Prophylaxis is given precisely because the antibody screen is still negative (she is not yet sensitized). It is also given after any potential fetomaternal hemorrhage such as bleeding or trauma.",
    why: [
      "A negative screen is the reason to give prophylaxis, not to withhold it, because the goal is to prevent sensitization.",
      "Correct: routine anti-D immune globulin at 28 weeks prevents Rh alloimmunization in an unsensitized Rh-negative woman.",
      "Intrauterine transfusion treats established severe fetal anemia, which is not present here.",
      "Early delivery is not indicated and does not address alloimmunization risk.",
      "Serial screening without prophylaxis fails to prevent sensitization."
    ]
  },
  {
    id: "s2ck-0020",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Tubal ectopic pregnancy",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 27-year-old woman with a prior chlamydial infection presents with 3 days of left lower quadrant pain and light vaginal spotting after 6 weeks of amenorrhea. She is hemodynamically stable with a soft abdomen and mild left adnexal tenderness.\n\n| Test | Value | Reference |\n|---|---|---|\n| Serum beta-hCG | 2,600 mIU/mL | - |\n| Transvaginal ultrasound | no intrauterine gestational sac; 2 cm left adnexal mass, no free fluid | - |\n| Hemoglobin | 12.6 g/dL | 12.0-15.5 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Repeat the beta-hCG in 48 hours and reassure",
      "Perform emergency exploratory laparotomy",
      "Perform dilation and curettage",
      "Choose expectant management with no intervention",
      "Administer intramuscular methotrexate"
    ],
    answer: 4,
    exp: "A beta-hCG above the discriminatory zone (about 1,500 to 2,000 mIU/mL) with no intrauterine pregnancy on transvaginal ultrasound and an adnexal mass indicates an ectopic pregnancy. Because she is hemodynamically stable with a small unruptured ectopic, no fetal cardiac activity, and normal hemoglobin, medical management with intramuscular methotrexate is appropriate. Surgery is reserved for rupture, instability, or failed or contraindicated medical therapy.",
    why: [
      "The hCG is already above the discriminatory zone with an empty uterus, so simply rechecking and reassuring misses a diagnosed ectopic.",
      "Laparotomy is for a ruptured or unstable ectopic, which this stable patient does not have.",
      "Dilation and curettage treats an intrauterine process and would not address a tubal ectopic.",
      "Pure expectant management is inappropriate for a symptomatic ectopic with a rising diagnostic hCG.",
      "Correct: a small unruptured ectopic in a stable patient with normal hemoglobin is well suited to methotrexate."
    ]
  },
  {
    id: "s2ck-0021",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Cervical cancer screening follow-up",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 30-year-old woman undergoes routine cervical cancer screening. Her cervical cytology returns as atypical squamous cells of undetermined significance (ASC-US), and reflex testing is positive for high-risk human papillomavirus. She is otherwise asymptomatic with no history of abnormal results.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Colposcopy",
      "Repeat cytology in 3 years",
      "Total hysterectomy",
      "Loop electrosurgical excision without further evaluation",
      "Reassurance with no further follow-up"
    ],
    answer: 0,
    exp: "ASC-US cytology with a positive high-risk HPV result carries enough risk of underlying cervical dysplasia to warrant colposcopy for direct visualization and biopsy. HPV-negative ASC-US could be followed with repeat co-testing, but a positive HPV result changes management. Treatment such as excision is guided by the histologic findings at colposcopy, not performed empirically.",
    why: [
      "Correct: ASC-US with positive high-risk HPV meets the threshold for colposcopic evaluation.",
      "Deferring for 3 years is appropriate only for low-risk results, not HPV-positive ASC-US.",
      "Hysterectomy is not a screening or diagnostic step and is far too aggressive here.",
      "Excisional treatment should follow a histologic diagnosis at colposcopy, not precede it.",
      "No follow-up is unsafe when high-risk HPV is present with atypical cytology."
    ]
  },
  {
    id: "s2ck-0022",
    system: "Psychiatry",
    discipline: "Adult Psychiatry",
    topic: "Major depressive disorder pharmacotherapy",
    difficulty: "easy",
    anchor: null,
    vignette: "A 28-year-old woman reports 2 months of persistently low mood and loss of interest in activities she used to enjoy. She also describes insomnia, poor concentration, low energy, feelings of guilt, and a 4 kg unintentional weight loss. She denies suicidal ideation, mania, or psychotic symptoms and uses no substances.",
    lead: "Which of the following is the most appropriate initial pharmacotherapy?",
    options: [
      "A benzodiazepine",
      "An antipsychotic as monotherapy",
      "A selective serotonin reuptake inhibitor such as sertraline",
      "A tricyclic antidepressant as first-line therapy",
      "A monoamine oxidase inhibitor as first-line therapy"
    ],
    answer: 2,
    exp: "She meets criteria for major depressive disorder with at least five symptoms for more than 2 weeks. First-line pharmacotherapy is a selective serotonin reuptake inhibitor because of its efficacy and favorable side-effect and safety profile. Psychotherapy is also effective and can be combined with medication.",
    why: [
      "Benzodiazepines do not treat the core depressive illness and carry dependence risk.",
      "Antipsychotic monotherapy is not first-line for uncomplicated major depression without psychosis.",
      "Correct: an SSRI is the preferred first-line antidepressant given its efficacy and safety.",
      "Tricyclics are effective but are not first-line because of anticholinergic effects and toxicity in overdose.",
      "MAOIs are reserved for refractory or atypical cases because of dietary restrictions and interactions."
    ]
  },
  {
    id: "s2ck-0023",
    system: "Psychiatry",
    discipline: "Emergency Psychiatry",
    topic: "Serotonin syndrome",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 24-year-old man taking a stable dose of an SSRI for depression is started on tramadol for back pain. Two days later he becomes agitated and diaphoretic. Temperature is 38.6 C, heart rate is 122/min, and blood pressure is 158/96 mm Hg. Examination shows hyperreflexia and inducible clonus that is more pronounced in the lower extremities.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Continue current medications and observe",
      "Discontinue the serotonergic agents and provide supportive care, adding cyproheptadine if needed",
      "Administer dantrolene as first-line therapy",
      "Add a second SSRI to stabilize serotonin levels",
      "Give haloperidol to control agitation"
    ],
    answer: 1,
    exp: "Agitation, autonomic instability, hyperthermia, hyperreflexia, and lower-extremity-predominant clonus after adding a second serotonergic drug (tramadol) to an SSRI indicate serotonin syndrome. The first step is to stop all serotonergic agents and provide supportive care with cooling and benzodiazepines; cyproheptadine, a serotonin antagonist, is added for persistent or severe cases. The neuromuscular hyperactivity with clonus and hyperreflexia distinguishes it from neuroleptic malignant syndrome.",
    why: [
      "Continuing the offending drugs allows the syndrome to progress and become life-threatening.",
      "Correct: stopping the serotonergic drugs plus supportive care, with cyproheptadine as needed, is the treatment.",
      "Dantrolene is used for neuroleptic malignant syndrome and malignant hyperthermia, which feature rigidity rather than clonus and hyperreflexia.",
      "Adding another SSRI would worsen the serotonin excess.",
      "Haloperidol can raise temperature and cause its own toxicity and does not treat the underlying serotonin excess."
    ]
  },
  {
    id: "s2ck-0024",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Lung cancer screening",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 58-year-old man comes for a routine visit and asks how he can be screened for cancer. He has a 40 pack-year smoking history and continues to smoke about one pack daily. He has no respiratory symptoms and no personal history of cancer.",
    lead: "Which of the following is the most appropriate cancer screening recommendation for him?",
    options: [
      "Annual chest radiography",
      "Annual sputum cytology",
      "No lung cancer screening is indicated",
      "Annual low-dose CT of the chest",
      "PET scan of the chest every 2 years"
    ],
    answer: 3,
    exp: "Adults aged 50 to 80 years with at least a 20 pack-year history who currently smoke or quit within the past 15 years qualify for lung cancer screening. The recommended modality is annual low-dose CT of the chest, which reduces lung cancer mortality in this high-risk group. Smoking cessation counseling should accompany screening.",
    why: [
      "Chest radiography does not reduce lung cancer mortality and is not recommended for screening.",
      "Sputum cytology is not an effective screening test for lung cancer.",
      "This patient clearly meets the age and pack-year criteria, so screening is indicated.",
      "Correct: he meets the criteria, and annual low-dose CT is the recommended screening test.",
      "PET is used to characterize known lesions, not for routine screening."
    ]
  },
  {
    id: "s2ck-0025",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Advance directives and surrogate decision-making",
    difficulty: "easy",
    anchor: null,
    vignette: "An 80-year-old man with advanced dementia no longer recognizes family and lacks decision-making capacity. Years earlier, while competent, he completed a valid advance directive declining artificial nutrition and named his son as his health care proxy. He is now admitted with aspiration pneumonia, and his adult daughter insists that a feeding tube be placed. The son says his father would not have wanted it.",
    lead: "Which of the following is the most appropriate course of action?",
    options: [
      "Place a feeding tube because a family member requests it",
      "Obtain a court order to resolve the disagreement",
      "Defer to the physician's judgment over the written directive",
      "Ask the patient to decide despite his lack of capacity",
      "Follow the advance directive and the health care proxy's guidance"
    ],
    answer: 4,
    exp: "A valid advance directive completed while the patient had capacity governs care when he later loses capacity, and the designated health care proxy speaks for him. Both the written directive declining artificial nutrition and the proxy align against tube feeding, so that decision should be honored. The wishes of other relatives do not override a valid directive and the appointed surrogate.",
    why: [
      "The daughter's request does not override the patient's own prior expressed wishes and appointed proxy.",
      "A court order is unnecessary when a valid directive and a legally designated proxy already provide clear guidance.",
      "Physician preference cannot override a patient's documented autonomous choice.",
      "The patient lacks capacity and cannot make this decision now.",
      "Correct: the valid advance directive and the appointed health care proxy should guide care."
    ]
  }
];
