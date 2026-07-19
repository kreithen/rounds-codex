/*
 * Rounds Codex - USMLE Step 2 CK question bank, Batch 2 (25 items)
 * Blueprint-weighted, Medicine-heavy clinical mix. All vignettes original;
 * source used for facts only. Step 2 CK items are clinical: each ends in a
 * decision about diagnosis, next best step, pharmacotherapy, or prevention.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP2CK_B2 = [
  {
    id: "s2ck-0026",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Acute pericarditis",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 27-year-old man reports 3 days of sharp central chest pain that worsens when he lies flat and improves when he sits up and leans forward. He had a viral upper respiratory illness the week before. On auscultation there is a scratchy three-component rub at the left sternal border. Vital signs are stable.\n\n**[ECG: diffuse concave ST-segment elevation across the limb and precordial leads with PR-segment depression]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Acute ST-elevation myocardial infarction",
      "Acute pulmonary embolism",
      "Acute pericarditis",
      "Aortic dissection",
      "Gastroesophageal reflux disease"
    ],
    answer: 2,
    exp: "Positional pleuritic chest pain that improves with sitting forward, a three-component friction rub, and an antecedent viral illness are classic for acute pericarditis. The ECG shows the characteristic diffuse concave ST-segment elevation with PR-segment depression, which differs from the regional ST elevation of a STEMI. First-line treatment is a nonsteroidal anti-inflammatory drug combined with colchicine.",
    why: [
      "The ST elevation of a STEMI is regional with reciprocal changes, not the diffuse pattern with PR depression seen here.",
      "Pulmonary embolism causes pleuritic pain with dyspnea and hypoxemia, not a friction rub and diffuse ST elevation.",
      "Correct: positional pleuritic pain, a friction rub after a viral illness, and diffuse ST elevation with PR depression indicate acute pericarditis.",
      "Aortic dissection produces tearing pain radiating to the back with a pulse or blood pressure differential, not these ECG findings.",
      "Reflux causes burning retrosternal discomfort related to meals and position but would not produce a rub or diffuse ST elevation."
    ]
  },
  {
    id: "s2ck-0027",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Primary adrenal insufficiency (adrenal crisis)",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 42-year-old woman has had months of fatigue, weight loss, salt craving, and darkening of her skin creases and gums. She now presents with vomiting, light-headedness, and near-syncope. Blood pressure is 82/50 mm Hg and responds poorly to a fluid bolus.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sodium | 128 mEq/L | 135-145 |\n| Potassium | 5.8 mEq/L | 3.5-5.0 |\n| Glucose | 58 mg/dL | 70-100 |\n| Morning cortisol | 2 mcg/dL | > 10 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Restrict fluids and recheck electrolytes in the morning",
      "Administer intravenous insulin with dextrose",
      "Start oral fludrocortisone alone",
      "Give intravenous hydrocortisone and isotonic saline",
      "Begin a norepinephrine infusion as the primary therapy"
    ],
    answer: 3,
    exp: "Chronic fatigue, weight loss, hyperpigmentation, and salt craving with hyponatremia, hyperkalemia, hypoglycemia, and a low morning cortisol indicate primary adrenal insufficiency, now presenting as adrenal crisis with refractory hypotension. The immediate treatment is intravenous stress-dose hydrocortisone together with aggressive isotonic saline to correct volume depletion and hypoglycemia. Stress-dose hydrocortisone also provides a mineralocorticoid effect, so separate fludrocortisone is not needed acutely.",
    why: [
      "Fluid restriction would worsen the volume depletion and hypotension of adrenal crisis.",
      "The patient is hypoglycemic, so insulin would be dangerous; she needs cortisol and glucose.",
      "Oral fludrocortisone alone does not treat the acute glucocorticoid deficiency or the crisis.",
      "Correct: adrenal crisis is treated with immediate intravenous hydrocortisone plus isotonic saline to restore cortisol and volume.",
      "Vasopressors alone will not correct hypotension driven by cortisol deficiency; hydrocortisone is required."
    ]
  },
  {
    id: "s2ck-0028",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Severe hyperkalemia with ECG changes",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 66-year-old man with end-stage renal disease misses two hemodialysis sessions and develops generalized weakness and palpitations. He takes lisinopril and spironolactone. Heart rate is 46/min.\n\n| Test | Value | Reference |\n|---|---|---|\n| Potassium | 7.3 mEq/L | 3.5-5.0 |\n\n**[ECG: peaked T waves, a widened QRS complex, and flattened P waves]**",
    lead: "Which of the following is the most appropriate immediate next step?",
    options: [
      "Give oral sodium polystyrene sulfonate and await its effect",
      "Administer intravenous calcium gluconate",
      "Give intravenous insulin and dextrose, then discharge",
      "Arrange hemodialysis as the first intervention",
      "Start a loop diuretic as the sole treatment"
    ],
    answer: 1,
    exp: "Severe hyperkalemia with ECG changes such as peaked T waves and QRS widening is a medical emergency because it can progress to a sinusoidal rhythm and cardiac arrest. The first step is intravenous calcium to stabilize the cardiac membrane, which acts within minutes but does not lower the potassium. Insulin with dextrose and beta-agonists are then given to shift potassium into cells, and hemodialysis provides definitive removal in this dialysis-dependent patient.",
    why: [
      "Potassium binders act too slowly to address life-threatening ECG changes.",
      "Correct: with ECG changes, intravenous calcium is given first to stabilize the myocardium before potassium-lowering measures.",
      "Insulin and dextrose shift potassium but do not stabilize the membrane, and discharge would be unsafe.",
      "Dialysis is the definitive treatment but takes time to arrange; membrane stabilization must come first.",
      "A loop diuretic is inadequate and slow and will not protect the heart from imminent arrhythmia."
    ]
  },
  {
    id: "s2ck-0029",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Acute pancreatitis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 48-year-old man presents with 12 hours of severe, constant epigastric pain that bores through to his back and is accompanied by vomiting. He drinks alcohol heavily. He sits leaning forward and has epigastric tenderness with guarding.\n\n| Test | Value | Reference |\n|---|---|---|\n| Lipase | 920 U/L | 10-140 |\n| Amylase | 610 U/L | 30-110 |\n| Calcium | 8.4 mg/dL | 8.5-10.2 |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Perforated peptic ulcer",
      "Acute cholecystitis",
      "Acute mesenteric ischemia",
      "Inferior myocardial infarction",
      "Acute pancreatitis"
    ],
    answer: 4,
    exp: "Severe epigastric pain radiating to the back with vomiting and a lipase more than three times the upper limit of normal establishes acute pancreatitis, here most likely from alcohol. Lipase is more specific than amylase for the diagnosis. Management is aggressive intravenous fluids, analgesia, and early enteral nutrition as tolerated.",
    why: [
      "A perforated ulcer causes sudden diffuse peritonitis with free air, not a markedly elevated lipase.",
      "Cholecystitis produces right upper quadrant pain with a positive Murphy sign rather than boring epigastric pain with high lipase.",
      "Mesenteric ischemia causes pain out of proportion to examination, often with lactic acidosis, not this enzyme pattern.",
      "An inferior myocardial infarction can cause epigastric discomfort but would not elevate lipase to this degree.",
      "Correct: epigastric pain radiating to the back with a lipase greater than three times normal is diagnostic of acute pancreatitis."
    ]
  },
  {
    id: "s2ck-0030",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Acute bacterial meningitis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 55-year-old man is brought in with 1 day of fever, severe headache, neck stiffness, and increasing confusion. Temperature is 39.2 C. He has photophobia and nuchal rigidity with a positive Kernig sign. There are no focal neurologic deficits or papilledema.\n\n| Test | Value | Reference |\n|---|---|---|\n| CSF white cells | 2,200/mm3 (90% neutrophils) | < 5 |\n| CSF glucose | 28 mg/dL | 40-70 |\n| CSF protein | 240 mg/dL | 15-45 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Give dexamethasone with empiric vancomycin and ceftriaxone without delay, then continue the workup",
      "Withhold antibiotics until the CSF culture results return",
      "Obtain brain MRI before starting any therapy",
      "Treat with acyclovir alone",
      "Start oral antibiotics and discharge with follow-up"
    ],
    answer: 0,
    exp: "A neutrophilic CSF pleocytosis with low glucose and high protein indicates acute bacterial meningitis, a neurologic emergency. Empiric intravenous vancomycin plus a third-generation cephalosporin should be started immediately, along with dexamethasone, which reduces morbidity in pneumococcal meningitis. Because there are no focal deficits or papilledema, the lumbar puncture did not require preceding CT, and antibiotics must never be delayed for imaging or cultures.",
    why: [
      "Correct: bacterial meningitis requires immediate empiric vancomycin and ceftriaxone with dexamethasone, without waiting for cultures.",
      "Delaying antibiotics for culture results increases mortality in bacterial meningitis.",
      "MRI is unnecessary here and would dangerously postpone life-saving antibiotics.",
      "The CSF profile is bacterial, not the lymphocytic pattern of viral encephalitis, so acyclovir alone is inadequate.",
      "Oral antibiotics and discharge are grossly inadequate for bacterial meningitis."
    ]
  },
  {
    id: "s2ck-0031",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "COPD exacerbation",
    difficulty: "easy",
    anchor: null,
    vignette: "A 68-year-old man with a 50 pack-year smoking history and known chronic obstructive pulmonary disease presents with 2 days of worsening dyspnea, increased cough, and a change to thick yellow-green sputum. He is using accessory muscles and has diffuse expiratory wheezing. Oxygen saturation is 89% on room air.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Long-term daily azithromycin as the only therapy",
      "Immediate endotracheal intubation",
      "Antibiotics alone without bronchodilators or steroids",
      "Inhaled bronchodilators, systemic corticosteroids, and antibiotics with controlled supplemental oxygen",
      "Emergent chest tube placement"
    ],
    answer: 3,
    exp: "An acute exacerbation of COPD with increased dyspnea, sputum volume, and sputum purulence is treated with inhaled short-acting bronchodilators, a course of systemic corticosteroids, and antibiotics when purulence and increased sputum are present. Supplemental oxygen should be titrated to a target of about 88 to 92 percent to avoid suppressing respiratory drive. Noninvasive ventilation is added if there is respiratory acidosis.",
    why: [
      "Chronic azithromycin may reduce future exacerbations but does not treat the acute event.",
      "Intubation is reserved for failure of medical therapy and noninvasive ventilation, not first-line here.",
      "Antibiotics alone omit the bronchodilators and steroids that are central to treating the exacerbation.",
      "Correct: bronchodilators, systemic steroids, antibiotics, and controlled oxygen are the standard treatment of a COPD exacerbation.",
      "There is no pneumothorax, so a chest tube is not indicated."
    ]
  },
  {
    id: "s2ck-0032",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Acute gout",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 52-year-old man wakes with sudden excruciating pain, redness, and swelling of the first metatarsophalangeal joint of his right foot. It began overnight after a large steak dinner with several beers. He has hypertension and takes hydrochlorothiazide. Arthrocentesis is performed.\n\n| Test | Value | Reference |\n|---|---|---|\n| Synovial fluid crystals | needle-shaped, negatively birefringent | - |\n| Synovial fluid white cells | 18,000/mm3 | - |\n| Gram stain | negative | - |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Septic arthritis",
      "Gout",
      "Calcium pyrophosphate deposition disease (pseudogout)",
      "Rheumatoid arthritis",
      "Cellulitis"
    ],
    answer: 1,
    exp: "Acute monoarticular arthritis of the first metatarsophalangeal joint (podagra) after a purine-rich meal and alcohol, with negatively birefringent needle-shaped crystals, is diagnostic of gout. A thiazide diuretic is a common contributing factor because it raises serum urate. Acute attacks are treated with NSAIDs, colchicine, or corticosteroids.",
    why: [
      "The negative Gram stain and characteristic crystals argue against septic arthritis, although it must be excluded.",
      "Correct: podagra with negatively birefringent needle-shaped crystals is classic acute gout.",
      "Pseudogout crystals are rhomboid and positively birefringent and usually affect larger joints such as the knee.",
      "Rheumatoid arthritis is a chronic symmetric polyarthritis, not a sudden monoarticular attack with urate crystals.",
      "Cellulitis is a soft-tissue infection and would not produce intra-articular crystals."
    ]
  },
  {
    id: "s2ck-0033",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Acute ischemic stroke thrombolysis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 70-year-old woman is brought to the emergency department 90 minutes after the sudden onset of right-sided weakness and slurred speech. She has atrial fibrillation. Blood pressure is 168/92 mm Hg and blood glucose is normal.\n\n**[IMAGE: noncontrast head CT showing no hemorrhage and no early ischemic changes]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Give aspirin now and admit for observation",
      "Rapidly lower the blood pressure to normal, then reassess",
      "Administer intravenous thrombolysis with alteplase",
      "Start a therapeutic heparin infusion",
      "Begin warfarin for stroke prevention"
    ],
    answer: 2,
    exp: "This is an acute ischemic stroke presenting within the treatment window, with no hemorrhage on CT and no listed contraindication. Intravenous thrombolysis with alteplase (or tenecteplase) is indicated within 4.5 hours of symptom onset and should not be delayed. Blood pressure up to 185/110 mm Hg is acceptable before thrombolysis, so aggressive lowering is unnecessary and can worsen ischemia.",
    why: [
      "Aspirin is given after thrombolysis is excluded or completed and is not a substitute for timely reperfusion in an eligible patient.",
      "Overly aggressive blood pressure lowering can extend the infarct, and her pressure is below the threshold that would preclude thrombolysis.",
      "Correct: an ischemic stroke within 4.5 hours with no hemorrhage or contraindication warrants intravenous thrombolysis.",
      "Acute therapeutic heparin does not improve outcomes and increases hemorrhage risk in acute ischemic stroke.",
      "Warfarin is for long-term prevention and has no role in the acute reperfusion decision."
    ]
  },
  {
    id: "s2ck-0034",
    system: "Internal Medicine",
    discipline: "Oncology",
    topic: "Hypercalcemia of malignancy",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 63-year-old woman with metastatic breast cancer presents with 4 days of worsening confusion, constipation, nausea, and excessive urination. She appears dehydrated with dry mucous membranes.\n\n| Test | Value | Reference |\n|---|---|---|\n| Calcium | 14.6 mg/dL | 8.5-10.2 |\n| Albumin | 4.0 g/dL | 3.5-5.0 |\n| Parathyroid hormone | 8 pg/mL | 15-65 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Start a thiazide diuretic",
      "Restrict dietary calcium alone",
      "Give intravenous calcium supplementation",
      "Initiate emergent hemodialysis",
      "Begin aggressive intravenous isotonic saline hydration"
    ],
    answer: 4,
    exp: "Severe symptomatic hypercalcemia with a suppressed parathyroid hormone in a patient with metastatic cancer indicates hypercalcemia of malignancy. The immediate treatment is aggressive intravenous isotonic saline to restore volume and promote calciuresis, followed by a bisphosphonate (or denosumab) for sustained control and often calcitonin for rapid short-term lowering. Loop diuretics are used only after the patient is volume-replete, if needed.",
    why: [
      "Thiazides reduce urinary calcium excretion and would worsen hypercalcemia.",
      "Dietary restriction is far too slow and inadequate for a calcium of 14.6 with symptoms.",
      "Giving calcium would be dangerous in a patient who is already severely hypercalcemic.",
      "Dialysis is reserved for refractory cases or renal failure, not first-line for a volume-depleted patient.",
      "Correct: aggressive isotonic saline hydration is the first step, with a bisphosphonate and calcitonin added for durable control."
    ]
  },
  {
    id: "s2ck-0035",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Adhesive small-bowel obstruction",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 60-year-old woman with a prior open hysterectomy presents with 2 days of crampy abdominal pain, bilious vomiting, abdominal distension, and inability to pass flatus or stool. The abdomen is distended and tympanitic with high-pitched bowel sounds. She is afebrile with a soft, nontender abdomen and no peritoneal signs.\n\n**[IMAGE: upright abdominal radiograph showing multiple dilated loops of small bowel with air-fluid levels and no colonic gas]**",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Nasogastric decompression, bowel rest, and intravenous fluids",
      "Immediate exploratory laparotomy",
      "Oral osmotic laxatives",
      "Urgent colonoscopy",
      "Discharge home with oral antibiotics"
    ],
    answer: 0,
    exp: "Crampy pain, bilious vomiting, obstipation, and radiographs showing dilated small-bowel loops with air-fluid levels in a patient with prior surgery indicate adhesive small-bowel obstruction. Without signs of ischemia, strangulation, or peritonitis, initial management is nonoperative with nasogastric decompression, bowel rest, and intravenous fluid and electrolyte resuscitation. Surgery is reserved for a complete obstruction that fails to resolve or for signs of strangulation.",
    why: [
      "Correct: an uncomplicated adhesive small-bowel obstruction is first managed with nasogastric decompression, bowel rest, and intravenous fluids.",
      "Immediate laparotomy is reserved for strangulation or peritonitis, which are absent here.",
      "Osmotic laxatives do not relieve a mechanical small-bowel obstruction and could worsen distension.",
      "Colonoscopy does not address a small-bowel obstruction.",
      "Discharge would be unsafe with an active bowel obstruction."
    ]
  },
  {
    id: "s2ck-0036",
    system: "Surgery",
    discipline: "Emergency/Trauma",
    topic: "Necrotizing fasciitis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 58-year-old man with diabetes presents with 24 hours of rapidly spreading redness and severe pain in his left leg that seems far worse than the skin findings suggest. Temperature is 39.4 C and heart rate is 124/min. The skin has dusky discoloration with a few tense bullae, and there is crepitus on palpation.\n\n| Test | Value | Reference |\n|---|---|---|\n| White blood cells | 24,000/mm3 | 4,500-11,000 |\n| C-reactive protein | 280 mg/L | < 10 |\n| Creatinine | 2.1 mg/dL | 0.6-1.2 |\n| Sodium | 131 mEq/L | 135-145 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Oral antibiotics and outpatient follow-up",
      "MRI of the leg before any intervention",
      "Warm compresses and limb elevation with observation",
      "Emergent surgical exploration and debridement with broad-spectrum intravenous antibiotics",
      "Topical antibiotics to the affected skin"
    ],
    answer: 3,
    exp: "Pain out of proportion to skin findings, systemic toxicity, dusky skin with bullae, crepitus, and markedly abnormal laboratory values point to necrotizing fasciitis. This is a surgical emergency, and the essential step is emergent surgical exploration and debridement together with broad-spectrum intravenous antibiotics. Imaging should not delay operative management when the diagnosis is clinically apparent.",
    why: [
      "Oral antibiotics and discharge would be fatal in a rapidly progressive necrotizing infection.",
      "MRI would delay the life-saving surgery that this clinical picture already demands.",
      "Observation allows a fulminant infection to progress to sepsis and death.",
      "Correct: necrotizing fasciitis requires emergent surgical debridement plus broad-spectrum intravenous antibiotics.",
      "Topical therapy cannot address deep fascial necrosis."
    ]
  },
  {
    id: "s2ck-0037",
    system: "Surgery",
    discipline: "Vascular Surgery",
    topic: "Acute limb ischemia",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 72-year-old man with atrial fibrillation who is not taking anticoagulation develops sudden severe pain in his right leg over the past 4 hours. The leg is pale, cold, and mottled below the knee, with absent pedal pulses and reduced sensation. The contralateral leg is warm with normal pulses.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Elevate the limb and observe overnight",
      "Schedule an outpatient arterial duplex in one week",
      "Start intravenous heparin and arrange urgent surgical or endovascular revascularization",
      "Begin warfarin and discharge",
      "Proceed directly to above-knee amputation"
    ],
    answer: 2,
    exp: "Sudden onset of a painful, pale, pulseless, cold, and paresthetic leg in a patient with atrial fibrillation indicates acute limb ischemia, most likely from a cardioembolic occlusion. Immediate systemic anticoagulation with heparin should be started and the patient taken urgently for revascularization by embolectomy or catheter-directed therapy. Delay risks irreversible tissue loss because the ischemia window is short.",
    why: [
      "Observation risks irreversible muscle and nerve damage within hours.",
      "An outpatient study would dangerously delay limb-saving revascularization.",
      "Correct: acute limb ischemia is treated with immediate heparin and urgent revascularization.",
      "Warfarin acts too slowly, and discharge would abandon a threatened limb.",
      "Amputation is a last resort for a nonviable limb, not the initial step for a salvageable one."
    ]
  },
  {
    id: "s2ck-0038",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Acute uncomplicated diverticulitis",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 59-year-old man presents with 2 days of left lower quadrant pain, low-grade fever, and mild nausea. He has localized left lower quadrant tenderness without rebound or guarding and is hemodynamically stable and tolerating oral intake.\n\n**[IMAGE: CT of the abdomen showing sigmoid colonic wall thickening with surrounding pericolonic fat stranding and no abscess or free air]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Emergency sigmoid colectomy",
      "Immediate colonoscopy during the acute episode",
      "Urgent percutaneous drainage",
      "Long-term systemic corticosteroids",
      "Bowel rest and antibiotics with outpatient management"
    ],
    answer: 4,
    exp: "CT showing sigmoid wall thickening with pericolonic fat stranding and no abscess, perforation, or obstruction indicates acute uncomplicated diverticulitis. A stable patient who tolerates oral intake can be managed as an outpatient with bowel rest and antibiotics, and a colonoscopy is arranged several weeks later to exclude malignancy. Colonoscopy during the acute episode is avoided because of the perforation risk.",
    why: [
      "Emergency colectomy is for complicated disease such as perforation or a refractory abscess, not uncomplicated diverticulitis.",
      "Colonoscopy during acute diverticulitis raises the risk of perforation and is deferred for several weeks.",
      "Percutaneous drainage is for a drainable abscess, which is not present.",
      "Corticosteroids have no role and can mask or worsen the infection.",
      "Correct: acute uncomplicated diverticulitis in a stable patient is treated with bowel rest and antibiotics on an outpatient basis."
    ]
  },
  {
    id: "s2ck-0039",
    system: "Pediatrics",
    discipline: "Pediatric Gastroenterology",
    topic: "Ileocolic intussusception",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 9-month-old previously healthy boy has episodes of sudden inconsolable crying during which he draws his legs to his abdomen, alternating with periods of lethargy. He passed a stool mixed with blood and mucus. A sausage-shaped mass is palpable in the right upper abdomen.\n\n**[IMAGE: abdominal ultrasound showing a target (doughnut) sign of concentric bowel rings]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate surgical resection for all cases",
      "Air (pneumatic) contrast enema, which is both diagnostic and therapeutic",
      "Oral rehydration and discharge home",
      "Broad-spectrum antibiotics alone",
      "Abdominal CT with contrast"
    ],
    answer: 1,
    exp: "Intermittent colicky pain with leg-drawing, currant-jelly stools, a sausage-shaped mass, and a target sign on ultrasound are classic for ileocolic intussusception. In a stable child without peritonitis or perforation, an air (or contrast) enema is both diagnostic and therapeutic and can reduce the intussusception. Surgery is reserved for failed enema reduction, perforation, or peritonitis.",
    why: [
      "Surgery is not first-line unless enema reduction fails or there is perforation or peritonitis.",
      "Correct: in a stable child, an air contrast enema both confirms and reduces the intussusception.",
      "Discharge would miss a bowel emergency that can progress to ischemia.",
      "Antibiotics alone do not reduce the telescoped bowel.",
      "CT is unnecessary when ultrasound is diagnostic and would delay definitive enema reduction."
    ]
  },
  {
    id: "s2ck-0040",
    system: "Pediatrics",
    discipline: "Pediatric Emergency",
    topic: "Acute epiglottitis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 4-year-old boy who has not received routine vaccinations develops a high fever, severe sore throat, and drooling over several hours. He sits leaning forward on his hands, refuses to lie down, has a muffled voice, and makes soft inspiratory stridor. He appears anxious and toxic.\n\n**[IMAGE: lateral neck radiograph showing an enlarged, thumb-shaped epiglottis]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Secure the airway in a controlled setting such as the operating room with anesthesia and ENT present",
      "Examine the oropharynx with a tongue depressor immediately",
      "Discharge home with oral antibiotics",
      "Obtain a CT scan of the neck before doing anything else",
      "Give a dose of nebulized epinephrine and send the child home"
    ],
    answer: 0,
    exp: "Rapid-onset high fever, drooling, tripod positioning, a muffled voice, and a thumbprint sign in an unvaccinated child indicate acute epiglottitis, classically from Haemophilus influenzae type b. The priority is to keep the child calm and secure the airway in a controlled environment such as the operating room with anesthesia and otolaryngology available, before giving intravenous antibiotics. Instrumenting the throat or agitating the child can precipitate complete airway obstruction.",
    why: [
      "Correct: the immediate priority in epiglottitis is controlled airway management with the appropriate specialists present.",
      "Examining the throat with a tongue depressor can trigger fatal laryngospasm and airway obstruction.",
      "Discharge is unsafe with impending airway compromise.",
      "A CT scan would require positioning and delay that endanger the airway.",
      "Nebulized epinephrine treats croup, not epiglottitis, and sending the child home would be dangerous."
    ]
  },
  {
    id: "s2ck-0041",
    system: "Pediatrics",
    discipline: "Pediatric ENT",
    topic: "Acute otitis media",
    difficulty: "easy",
    anchor: null,
    vignette: "A 2-year-old girl has 2 days of fever, irritability, and left ear pain and tugging after a recent cold. On otoscopy the left tympanic membrane is bulging, erythematous, and opaque with reduced mobility on pneumatic insufflation. She has not had prior ear infections and has no drug allergies.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Topical antifungal ear drops",
      "Immediate tympanostomy tube placement",
      "Oral antihistamines alone",
      "High-dose oral amoxicillin",
      "No treatment is ever indicated for ear infections"
    ],
    answer: 3,
    exp: "A bulging, erythematous tympanic membrane with impaired mobility and acute symptoms establishes acute otitis media. In a young child with clear signs, first-line therapy is high-dose oral amoxicillin unless there is a penicillin allergy or recent amoxicillin use. Tympanostomy tubes are considered for recurrent or persistent disease, not a first episode.",
    why: [
      "Antifungal drops treat fungal otitis externa, not acute otitis media.",
      "Tympanostomy tubes are for recurrent or chronic effusions, not a first uncomplicated infection.",
      "Antihistamines do not treat the bacterial infection or shorten its course.",
      "Correct: high-dose amoxicillin is first-line for acute otitis media in a young child without penicillin allergy.",
      "This bulging inflamed membrane with fever warrants antibiotic treatment in a child this age."
    ]
  },
  {
    id: "s2ck-0042",
    system: "Pediatrics",
    discipline: "Pediatric Orthopedics",
    topic: "Slipped capital femoral epiphysis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 13-year-old boy with obesity reports several weeks of dull left groin and knee pain and a limp, without any injury. On examination the left hip is held in external rotation, and passive internal rotation of the hip is limited and painful. He walks with an antalgic gait.\n\n**[IMAGE: frog-leg lateral hip radiograph showing posterior and inferior displacement of the femoral epiphysis relative to the femoral neck]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Physical therapy and return to sports",
      "A long-leg walking cast",
      "Make the patient non-weight-bearing and arrange urgent surgical screw fixation",
      "NSAIDs and reassessment in 3 months",
      "Attempt manual reduction of the hip in the clinic"
    ],
    answer: 2,
    exp: "Groin or knee pain with a limp and limited internal rotation in an adolescent with obesity, plus epiphyseal slippage on radiographs, indicates slipped capital femoral epiphysis. The patient should be made non-weight-bearing immediately and undergo urgent in situ screw fixation to prevent further slippage and avascular necrosis. Forceful manipulation is avoided because it can compromise the blood supply to the femoral head.",
    why: [
      "Continued weight-bearing and sports risk worsening the slip and avascular necrosis.",
      "Casting does not stabilize the slipped epiphysis, which requires surgical fixation.",
      "Correct: SCFE is managed by making the patient non-weight-bearing and performing urgent surgical screw fixation.",
      "Delaying with NSAIDs allows progression of the slip and joint damage.",
      "Manual reduction can disrupt the femoral head blood supply and cause avascular necrosis."
    ]
  },
  {
    id: "s2ck-0043",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Placental abruption",
    difficulty: "hard",
    anchor: null,
    vignette: "A 31-year-old woman at 36 weeks gestation presents with the sudden onset of severe constant abdominal pain and dark vaginal bleeding after using cocaine. The uterus is firm, rigid, and tender with frequent contractions. Blood pressure is 150/98 mm Hg and maternal heart rate is 112/min. The fetal heart tracing shows recurrent late decelerations.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Administer tocolytics and continue expectant management",
      "Perform a digital cervical examination and then discharge",
      "Obtain an ultrasound to exclude placenta previa before intervening",
      "Arrange outpatient monitoring with follow-up in one week",
      "Provide maternal resuscitation with continuous fetal monitoring and prepare for emergent delivery"
    ],
    answer: 4,
    exp: "Painful vaginal bleeding with a rigid, tender uterus and a nonreassuring fetal tracing after cocaine use is characteristic of placental abruption. Given the maternal instability risk and fetal compromise, management is prompt maternal stabilization, continuous fetal monitoring, and expedited delivery, usually by cesarean when the fetal status is nonreassuring. Ultrasound is insensitive for abruption and must not delay delivery when the diagnosis is clinical and the fetus is compromised.",
    why: [
      "Tocolytics are contraindicated with abruption and fetal compromise because delivery is needed.",
      "A digital examination risks worsening the hemorrhage, and discharge would be dangerous.",
      "Ultrasound often misses abruption and should not delay delivery when the fetus is compromised.",
      "Outpatient monitoring is unsafe with active abruption and a nonreassuring tracing.",
      "Correct: placental abruption with fetal compromise requires maternal resuscitation and prompt (usually cesarean) delivery."
    ]
  },
  {
    id: "s2ck-0044",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Postpartum hemorrhage from uterine atony",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 29-year-old woman has just had a vaginal delivery of a 4,300-gram infant after a prolonged, augmented labor. Within minutes she has brisk vaginal bleeding. On examination the uterus is soft, boggy, and poorly contracted, with the fundus palpable above the umbilicus. The placenta was delivered intact and the birth canal shows no lacerations.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Firm bimanual uterine massage and uterotonic agents such as oxytocin",
      "Proceed directly to emergency hysterectomy",
      "Observe expectantly and recheck in 30 minutes",
      "Give antibiotics alone",
      "Perform uterine artery embolization as the first intervention"
    ],
    answer: 0,
    exp: "Brisk postpartum bleeding with a soft, boggy uterus after a macrosomic infant and prolonged augmented labor indicates uterine atony, the most common cause of postpartum hemorrhage. The first steps are firm bimanual uterine massage and uterotonic medications such as oxytocin, along with fluid resuscitation. Escalation to procedures such as embolization or surgery is reserved for atony that does not respond to these measures.",
    why: [
      "Correct: uterine atony is first treated with bimanual massage and uterotonics such as oxytocin.",
      "Hysterectomy is a last resort after conservative and less invasive measures fail.",
      "Expectant observation is unsafe during active hemorrhage.",
      "Antibiotics do not address the atony causing the bleeding.",
      "Embolization is considered only after uterotonics and massage fail in a stable patient."
    ]
  },
  {
    id: "s2ck-0045",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Polycystic ovary syndrome",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 24-year-old woman reports irregular menstrual periods occurring every 2 to 3 months, along with worsening facial and chest hair and acne over the past 2 years. Her body mass index is 32 kg/m2. She is not pregnant.\n\n| Test | Value | Reference |\n|---|---|---|\n| Total testosterone | mildly elevated | - |\n| LH:FSH ratio | increased | - |\n| 17-hydroxyprogesterone | normal | - |\n| TSH and prolactin | normal | - |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Cushing syndrome",
      "Polycystic ovary syndrome",
      "Nonclassic congenital adrenal hyperplasia",
      "Androgen-secreting ovarian tumor",
      "Primary hypothyroidism"
    ],
    answer: 1,
    exp: "Oligomenorrhea, clinical and biochemical hyperandrogenism, and obesity in a young woman, with a normal 17-hydroxyprogesterone and normal thyroid and prolactin, fit polycystic ovary syndrome. The diagnosis is clinical, requiring two of oligo-ovulation, hyperandrogenism, and polycystic ovaries after excluding mimics. Management includes lifestyle measures, combined oral contraceptives for menstrual regulation, and metformin when indicated.",
    why: [
      "Cushing syndrome would show additional features such as striae, hypertension, and cortisol excess.",
      "Correct: oligomenorrhea with hyperandrogenism and a normal 17-hydroxyprogesterone is consistent with polycystic ovary syndrome.",
      "Nonclassic congenital adrenal hyperplasia would raise 17-hydroxyprogesterone, which is normal here.",
      "An androgen-secreting tumor causes rapidly progressive virilization with markedly elevated androgens, not this gradual course.",
      "Hypothyroidism can disturb menses but would show an abnormal TSH and would not cause hyperandrogenism."
    ]
  },
  {
    id: "s2ck-0046",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Pelvic inflammatory disease",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 22-year-old sexually active woman presents with 3 days of lower abdominal pain, fever, and new mucopurulent vaginal discharge. She uses condoms inconsistently. On pelvic examination there is cervical motion tenderness and bilateral adnexal tenderness. Temperature is 38.3 C, and a pregnancy test is negative.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Await cervical culture results before starting any therapy",
      "Proceed directly to diagnostic laparoscopy",
      "Begin empiric antibiotics with ceftriaxone plus doxycycline",
      "Prescribe antifungal therapy",
      "Reassure and follow up as needed"
    ],
    answer: 2,
    exp: "Lower abdominal pain with cervical motion and adnexal tenderness in a sexually active woman meets the clinical criteria for pelvic inflammatory disease. Because untreated PID can lead to infertility, ectopic pregnancy, and tubo-ovarian abscess, empiric antibiotics such as ceftriaxone plus doxycycline (with metronidazole added for anaerobic coverage) should be started based on clinical criteria alone. Treatment should not wait for culture confirmation.",
    why: [
      "Delaying treatment for cultures risks tubal damage and complications; PID is treated on clinical grounds.",
      "Laparoscopy is not required to diagnose PID, which is a clinical diagnosis.",
      "Correct: PID is treated empirically with ceftriaxone plus doxycycline based on clinical criteria.",
      "Antifungal therapy does not treat the bacterial causes of PID.",
      "Reassurance without treatment risks serious reproductive complications."
    ]
  },
  {
    id: "s2ck-0047",
    system: "Psychiatry",
    discipline: "Adult Psychiatry",
    topic: "Bipolar I disorder, manic episode",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 25-year-old man is brought in by his family because for the past week he has slept only 2 hours a night yet feels energetic. He speaks rapidly and is hard to interrupt, believes he is destined to launch a billion-dollar company, and has made several large impulsive purchases. He has no history of substance use, and a urine drug screen is negative.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Major depressive disorder",
      "Generalized anxiety disorder",
      "Schizophrenia",
      "Bipolar I disorder, current episode manic",
      "Attention-deficit/hyperactivity disorder"
    ],
    answer: 3,
    exp: "A distinct period of at least one week with decreased need for sleep, grandiosity, pressured speech, and impulsive risky behavior that impairs functioning defines a manic episode, which establishes bipolar I disorder. Substance use has been excluded by history and a negative drug screen. Acute mania is treated with a mood stabilizer such as lithium or valproate or with a second-generation antipsychotic.",
    why: [
      "Major depression involves low mood and anergia, the opposite of this elevated, high-energy presentation.",
      "Generalized anxiety disorder features chronic worry, not a decreased need for sleep with grandiosity.",
      "Schizophrenia centers on psychosis with functional decline, not a discrete mood episode with elevated energy.",
      "Correct: a week of decreased need for sleep, grandiosity, and risky impulsivity defines a manic episode diagnostic of bipolar I disorder.",
      "ADHD is a chronic childhood-onset pattern of inattention, not an acute one-week change in mood and sleep."
    ]
  },
  {
    id: "s2ck-0048",
    system: "Psychiatry",
    discipline: "Addiction Psychiatry",
    topic: "Alcohol withdrawal",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 48-year-old man admitted for elective surgery becomes tremulous, anxious, and diaphoretic about 36 hours after his last alcoholic drink. Heart rate is 116/min and blood pressure is 162/98 mm Hg. He appears restless and reports feeling shaky, and he has a fine tremor of the outstretched hands.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Administer haloperidol as monotherapy",
      "Begin symptom-triggered benzodiazepines such as lorazepam",
      "Give a beta-blocker as the sole treatment",
      "Resume alcohol to control symptoms",
      "Start naltrexone immediately"
    ],
    answer: 1,
    exp: "Tremor, anxiety, tachycardia, hypertension, and diaphoresis roughly one to two days after the last drink indicate alcohol withdrawal. Benzodiazepines, ideally dosed by a symptom-triggered protocol, are the treatment of choice because they reduce symptoms and prevent progression to withdrawal seizures and delirium tremens. Thiamine should also be given to prevent Wernicke encephalopathy.",
    why: [
      "Haloperidol lowers the seizure threshold and does not treat the underlying withdrawal physiology.",
      "Correct: benzodiazepines are first-line for alcohol withdrawal and prevent seizures and delirium tremens.",
      "A beta-blocker may mask tachycardia but does not prevent seizures or delirium tremens.",
      "Restarting alcohol is not appropriate management of withdrawal in the hospital.",
      "Naltrexone helps maintain abstinence later but does not treat acute withdrawal."
    ]
  },
  {
    id: "s2ck-0049",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Colorectal cancer screening",
    difficulty: "easy",
    anchor: null,
    vignette: "A 50-year-old man with no gastrointestinal symptoms comes in for a routine visit and asks about cancer screening. He has no personal history of colorectal cancer, adenomatous polyps, or inflammatory bowel disease, and no family history of colorectal cancer. He is otherwise healthy.",
    lead: "Which of the following is the most appropriate screening recommendation?",
    options: [
      "Begin colorectal cancer screening now, for example colonoscopy every 10 years",
      "Defer any colorectal screening until age 65",
      "Order annual chest CT",
      "Perform prostate-specific antigen testing as colon screening",
      "Screen only if he develops symptoms"
    ],
    answer: 0,
    exp: "Average-risk adults should begin colorectal cancer screening at age 45 to 50, so this 50-year-old is due to start. Acceptable strategies include colonoscopy every 10 years or stool-based testing such as annual fecal immunochemical testing, among others. Screening detects and removes precancerous polyps and reduces colorectal cancer mortality.",
    why: [
      "Correct: an average-risk 50-year-old should start colorectal cancer screening now, such as colonoscopy every 10 years.",
      "Waiting until 65 misses years of effective screening and polyp removal.",
      "Chest CT is not a colorectal cancer screening test.",
      "PSA screens for prostate cancer, not colorectal cancer.",
      "Screening is intended to detect disease before symptoms develop, so waiting for symptoms defeats its purpose."
    ]
  },
  {
    id: "s2ck-0050",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Informed refusal of treatment and autonomy",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 40-year-old man with severe anemia from acute gastrointestinal bleeding is advised that he needs a blood transfusion. He is a Jehovah's Witness and calmly refuses all blood products. He has full decision-making capacity, understands that declining transfusion could result in his death, and remains firm in his decision. He has no advance directive on file.",
    lead: "Which of the following is the most appropriate course of action?",
    options: [
      "Transfuse blood anyway to preserve his life",
      "Obtain a court order to authorize transfusion",
      "Ask his family to override his decision",
      "Declare him incompetent so treatment can proceed",
      "Respect his informed refusal and pursue alternatives to transfusion"
    ],
    answer: 4,
    exp: "A competent adult with intact decision-making capacity has the right to refuse any treatment, including a life-saving blood transfusion, based on the principle of autonomy. Because he understands the consequences and refuses voluntarily, his decision must be honored even if it may lead to death. The team should pursue acceptable alternatives such as intravenous fluids, iron, erythropoietin, and hemostatic measures.",
    why: [
      "Transfusing against the wishes of a competent patient violates his autonomy and constitutes battery.",
      "A court order is inappropriate when a competent adult has made an informed refusal.",
      "Family members cannot override the decision of a patient who retains capacity.",
      "He clearly has capacity, so declaring him incompetent to force treatment is unethical and inaccurate.",
      "Correct: a competent patient's informed refusal of transfusion must be respected while offering alternative treatments."
    ]
  }
];
