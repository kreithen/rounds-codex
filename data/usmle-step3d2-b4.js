/*
 * Rounds Codex - USMLE Step 3, Day 2 (Advanced Clinical Management / ACM) bank, Batch 4 (25 items)
 * Day-2-ACM blueprint: managing patients OVER TIME across ambulatory, ED, inpatient, and
 * continuity settings. Vignettes are longer and multi-step (initial data -> workup/evolution
 * -> decision point); lead-ins stress the most appropriate NEXT STEP in management, best
 * initial therapy, monitoring, drug titration, and follow-up. Much less pure biostatistics
 * than Day 1. Same Step 3 system set and shared `s3-` id space as Day 1 (Day 2 extends bank).
 * All vignettes are 100% original; source material used for facts only, never phrasing.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E; only the keyed one starts "Correct")
 */
const USMLE_STEP3D2_B4 = [
  {
    id: "s3-0226",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Post-myocardial infarction secondary prevention optimization",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 58-year-old man returns to clinic 3 weeks after a drug-eluting stent was placed for an inferior ST-elevation myocardial infarction. He feels well and has resumed light activity. His discharge regimen is aspirin, clopidogrel, and a moderate-intensity statin; he was never restarted on a beta-blocker or an ACE inhibitor. His blood pressure is 132/84 mm Hg, heart rate 74/min, and a predischarge echocardiogram showed a left ventricular ejection fraction of 42%. His LDL cholesterol today is 118 mg/dL.",
    lead: "In addition to continuing dual antiplatelet therapy, which of the following is the most appropriate change to his regimen?",
    options: [
      "Start a beta-blocker and an ACE inhibitor and intensify to a high-intensity statin.",
      "Stop clopidogrel now and continue aspirin alone.",
      "Add a dihydropyridine calcium channel blocker for blood pressure.",
      "Replace aspirin with warfarin for secondary prevention.",
      "Discontinue the statin because his LDL is near goal."
    ],
    answer: 0,
    exp: "After MI with reduced ejection fraction, guideline-directed secondary prevention includes a beta-blocker and an ACE inhibitor for mortality and remodeling benefit, plus high-intensity statin therapy to drive LDL well below 70 mg/dL. His current regimen omits all three optimizations.",
    why: [
      "Correct: post-MI patients, especially with LVEF 42%, benefit from a beta-blocker plus ACE inhibitor, and his LDL of 118 warrants high-intensity statin.",
      "Dual antiplatelet therapy should continue for about 12 months after a drug-eluting stent for acute coronary syndrome.",
      "A calcium channel blocker does not provide the post-MI mortality benefit of beta-blockers and ACE inhibitors and is not the priority.",
      "Warfarin does not replace aspirin for routine coronary secondary prevention and adds bleeding risk.",
      "An LDL of 118 is well above the post-MI goal, so the statin should be intensified, not stopped."
    ]
  },
  {
    id: "s3-0227",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Basal insulin initiation and titration in type 2 diabetes",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 61-year-old woman with type 2 diabetes on maximally tolerated metformin, a sulfonylurea, and an SGLT2 inhibitor has persistent hyperglycemia. Her hemoglobin A1c is 9.4%, and she has been started on 10 units of bedtime insulin glargine. She returns after 2 weeks with the fasting fingerstick log below and reports no nocturnal or symptomatic hypoglycemia.\n\n| Day | Fasting glucose (mg/dL) |\n|---|---|\n| 1 | 188 |\n| 3 | 176 |\n| 5 | 181 |\n| 7 | 170 |\n| 10 | 179 |\n| 14 | 174 |",
    lead: "Which of the following is the most appropriate next step in managing her insulin?",
    options: [
      "Increase the bedtime glargine dose to lower fasting glucose toward target.",
      "Add rapid-acting insulin with each meal now.",
      "Stop the basal insulin and add a second oral agent.",
      "Keep the current dose and recheck the hemoglobin A1c in 3 months.",
      "Switch entirely to premixed insulin twice daily."
    ],
    answer: 0,
    exp: "Basal insulin is titrated against the fasting glucose. Her fasting values remain well above the roughly 80-130 mg/dL target without hypoglycemia, so the correct step is to up-titrate the basal dose (for example, by 2 units every few days) until fasting glucose reaches goal, before considering mealtime insulin.",
    why: [
      "Correct: fasting glucose is still above target without hypoglycemia, so the basal insulin dose should be increased.",
      "Prandial insulin is added only after basal is titrated to a fasting target and postprandial or A1c goals remain unmet.",
      "Stopping the basal insulin abandons the therapy that controls fasting glucose while she remains markedly hyperglycemic.",
      "Leaving an ineffective dose unchanged for 3 months delays control of a 9.4% A1c.",
      "Premixed insulin is not indicated before simple basal titration and increases hypoglycemia risk."
    ]
  },
  {
    id: "s3-0228",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Obstructive sleep apnea CPAP management",
    difficulty: "easy",
    anchor: null,
    vignette: "A 49-year-old man with obesity and hypertension reports loud snoring, witnessed apneas, and daytime sleepiness that interferes with his work as a delivery driver. His neck circumference is enlarged and his Epworth Sleepiness Scale score is high. An attended polysomnogram documents an apnea-hypopnea index of 42 events per hour with recurrent oxygen desaturations, confirming severe obstructive sleep apnea.",
    lead: "Which of the following is the most appropriate initial therapy?",
    options: [
      "Nightly modafinil for daytime sleepiness.",
      "Uvulopalatopharyngoplasty.",
      "Supplemental nocturnal oxygen alone.",
      "A benzodiazepine at bedtime to improve sleep quality.",
      "Continuous positive airway pressure (CPAP) therapy."
    ],
    answer: 4,
    exp: "CPAP is first-line therapy for moderate-to-severe obstructive sleep apnea; it pneumatically splints the upper airway, abolishes obstructive events, improves daytime sleepiness, and reduces cardiovascular and motor-vehicle-crash risk. Weight loss is a valuable adjunct but does not replace CPAP initially.",
    why: [
      "Modafinil treats residual sleepiness only after adequate CPAP use, not as primary therapy.",
      "Airway surgery is reserved for CPAP-intolerant patients or specific anatomic obstruction, not first-line.",
      "Oxygen alone does not prevent airway collapse and can prolong apneas.",
      "Benzodiazepines relax pharyngeal muscles and worsen apnea and hypoxemia.",
      "Correct: CPAP is the first-line treatment for severe obstructive sleep apnea and directly relieves the obstruction."
    ]
  },
  {
    id: "s3-0229",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Giant cell arteritis glucocorticoid initiation",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 74-year-old woman reports 3 weeks of new right-sided temporal headache, scalp tenderness when combing her hair, and jaw pain while chewing. This morning she noticed transient blurring of vision in the right eye. Her temporal artery is tender and nodular. Laboratory studies are shown. You arrange an urgent temporal artery biopsy, which cannot be performed until tomorrow.\n\n| Test | Value |\n|---|---|\n| ESR | 96 mm/h |\n| CRP | 84 mg/L |\n| Hemoglobin | 10.8 g/dL |\n| Platelets | 512,000/microL |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Wait for biopsy results before starting any treatment.",
      "Start low-dose aspirin and schedule outpatient follow-up.",
      "Order MRI of the brain before any therapy.",
      "Begin high-dose systemic glucocorticoids immediately.",
      "Prescribe a triptan and refer to neurology for headache."
    ],
    answer: 3,
    exp: "The clinical picture with markedly elevated inflammatory markers and transient monocular visual loss is highly suggestive of giant cell arteritis, which threatens irreversible blindness. High-dose glucocorticoids must be started immediately and should not be delayed for biopsy, which remains diagnostic for up to about 2 weeks after steroids are begun.",
    why: [
      "Delaying steroids for biopsy risks permanent vision loss; the biopsy stays informative for days after treatment starts.",
      "Aspirin is a useful adjunct but does not prevent the impending ischemic optic damage on its own.",
      "MRI does not address the ophthalmic emergency and should not delay glucocorticoids.",
      "Correct: suspected giant cell arteritis with visual symptoms mandates immediate high-dose glucocorticoids to prevent blindness.",
      "This is not migraine; a triptan is inappropriate and dangerously delays sight-saving treatment."
    ]
  },
  {
    id: "s3-0230",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Latent tuberculosis infection treatment",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 34-year-old asymptomatic nurse has a newly positive interferon-gamma release assay obtained during pre-employment screening after caring for a patient with active pulmonary tuberculosis. She has no cough, fever, or weight loss. A chest radiograph is normal, and she has no history of liver disease and takes no medications. She is not pregnant and does not drink alcohol.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Begin four-drug therapy for active tuberculosis.",
      "Repeat the interferon-gamma release assay in 1 year with no treatment.",
      "Administer BCG vaccination.",
      "Provide no treatment because she is asymptomatic.",
      "Start treatment for latent tuberculosis infection, such as isoniazid plus rifapentine or rifampin."
    ],
    answer: 4,
    exp: "A positive IGRA with no symptoms and a normal chest radiograph indicates latent tuberculosis infection. Treatment with a rifamycin-based short-course regimen (isoniazid-rifapentine or rifampin) reduces the risk of progression to active disease, which is especially important in a health-care worker.",
    why: [
      "Four-drug therapy is for active disease, which is excluded by her normal radiograph and absent symptoms.",
      "Simply repeating the test ignores an established latent infection that warrants treatment.",
      "BCG does not treat established infection and is not used for this purpose in the United States.",
      "Untreated latent infection carries a lifetime reactivation risk that treatment substantially lowers.",
      "Correct: latent tuberculosis infection is treated with a short-course rifamycin-based or isoniazid regimen to prevent reactivation."
    ]
  },
  {
    id: "s3-0231",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Ulcerative colitis maintenance therapy",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 29-year-old woman with mild-to-moderate left-sided ulcerative colitis was treated for a flare with oral and rectal mesalamine and has been in clinical remission for 4 months with normal stools and no blood. She asks whether she can stop all medication now that she feels well. She has had two prior flares in the past 2 years, each responding to mesalamine.",
    lead: "Which of the following is the most appropriate next step in her management?",
    options: [
      "Stop all therapy and treat only if a future flare occurs.",
      "Begin a chronic tapering course of oral prednisone for maintenance.",
      "Switch to as-needed loperamide alone.",
      "Start infliximab for maintenance of remission.",
      "Continue maintenance oral (with or without rectal) mesalamine."
    ],
    answer: 4,
    exp: "In mild-to-moderate ulcerative colitis, 5-aminosalicylates such as mesalamine are the mainstay for maintaining remission and reducing flare frequency and colorectal cancer risk. Continuing maintenance mesalamine is appropriate; corticosteroids are never used for maintenance.",
    why: [
      "Stopping maintenance therapy in a patient with recurrent flares invites relapse.",
      "Chronic corticosteroids cause cumulative toxicity and are not effective maintenance agents.",
      "Loperamide treats symptoms but provides no anti-inflammatory maintenance and can precipitate toxic megacolon.",
      "Biologics such as infliximab are reserved for moderate-to-severe or mesalamine-refractory disease.",
      "Correct: mesalamine is the standard maintenance therapy for mild-to-moderate ulcerative colitis."
    ]
  },
  {
    id: "s3-0232",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Immune thrombocytopenia initial management",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 41-year-old woman presents with 5 days of easy bruising and scattered petechiae over both shins but no active mucosal bleeding. She takes no medications and feels well. Examination shows no splenomegaly or lymphadenopathy. Her laboratory studies are shown, and a peripheral smear reveals only reduced numbers of large platelets with normal red and white cells.\n\n| Test | Value |\n|---|---|\n| Platelet count | 14,000/microL |\n| Hemoglobin | 13.6 g/dL |\n| WBC | 6,800/microL |\n| Coagulation studies | normal |",
    lead: "Which of the following is the most appropriate initial treatment?",
    options: [
      "Observation with no treatment until spontaneous bleeding develops.",
      "Platelet transfusion to normalize the count.",
      "Emergency splenectomy.",
      "Corticosteroids (with or without intravenous immunoglobulin).",
      "Rituximab as first-line therapy."
    ],
    answer: 3,
    exp: "This is newly diagnosed immune thrombocytopenia (isolated severe thrombocytopenia with a normal smear and no other cause). With a platelet count under 20,000-30,000/microL, first-line therapy is corticosteroids, adding IVIG when a faster rise is needed; both increase the platelet count by reducing immune-mediated destruction.",
    why: [
      "A count of 14,000/microL carries meaningful bleeding risk and warrants treatment, not watchful waiting.",
      "Transfused platelets are rapidly destroyed and are reserved for severe active or life-threatening bleeding.",
      "Splenectomy is a later option for refractory or relapsing disease, not initial management.",
      "Correct: first-line treatment for newly diagnosed immune thrombocytopenia is corticosteroids, with IVIG added if a rapid response is required.",
      "Rituximab is a second-line agent, not first-line therapy."
    ]
  },
  {
    id: "s3-0233",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "CKD mineral bone disorder hyperphosphatemia management",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 66-year-old man with stage 4 chronic kidney disease from diabetic nephropathy is seen for routine follow-up. He feels well and adheres to a reduced-phosphorus diet. He is not yet on dialysis. His medications include an ACE inhibitor and insulin. Serial laboratory values over the past 6 months are shown.\n\n| Test | 6 months ago | Today |\n|---|---|---|\n| Phosphorus | 4.6 mg/dL | 6.8 mg/dL |\n| Calcium | 9.0 mg/dL | 8.9 mg/dL |\n| PTH | 180 pg/mL | 340 pg/mL |\n| eGFR (mL/min/1.73m2) | 24 | 19 |",
    lead: "Which of the following is the most appropriate next step to manage his mineral metabolism?",
    options: [
      "Reinforce dietary phosphorus restriction and start a non-calcium phosphate binder.",
      "Begin intravenous calcitriol without addressing phosphorus.",
      "Start a calcium-based phosphate binder in large doses to also raise serum calcium.",
      "Start cinacalcet as the primary intervention.",
      "Initiate emergent hemodialysis for hyperphosphatemia."
    ],
    answer: 0,
    exp: "His phosphorus has risen despite diet, with a rising PTH indicating worsening secondary hyperparathyroidism. The next step is to reinforce dietary phosphorus restriction and add a phosphate binder; a non-calcium binder is preferred to avoid a positive calcium balance and vascular calcification. Controlling phosphorus is prerequisite before active vitamin D.",
    why: [
      "Correct: reinforce dietary phosphorus restriction and add a phosphate binder (non-calcium preferred) to control the rising phosphorus and secondary hyperparathyroidism.",
      "Giving calcitriol while phosphorus is high risks worsening hyperphosphatemia and calcium-phosphate deposition.",
      "High-dose calcium-based binders promote a positive calcium balance and vascular calcification in advanced CKD.",
      "Cinacalcet targets PTH but does not directly correct the elevated phosphorus that must be addressed first.",
      "Hyperphosphatemia in non-dialysis CKD is managed medically, not with emergent dialysis."
    ]
  },
  {
    id: "s3-0234",
    system: "Emergency Medicine",
    discipline: "Critical Care",
    topic: "Tension pneumothorax decompression",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 25-year-old man is brought to the emergency department after a motorcycle crash. He is in severe respiratory distress. His blood pressure is 82/50 mm Hg, heart rate 138/min, and oxygen saturation 84% on a non-rebreather mask. The right hemithorax is hyperresonant with absent breath sounds, the trachea is deviated to the left, and neck veins are distended. A portable radiograph is obtained.\n\n**[IMAGE: Chest radiograph showing a large right-sided pneumothorax with mediastinal shift toward the left and a depressed right hemidiaphragm]**",
    lead: "Which of the following is the most appropriate immediate intervention?",
    options: [
      "Obtain a CT scan of the chest to confirm the diagnosis.",
      "Perform emergent endotracheal intubation first.",
      "Administer intravenous fluids and observe.",
      "Immediate needle decompression followed by tube thoracostomy.",
      "Start bilevel positive airway pressure ventilation."
    ],
    answer: 3,
    exp: "The hypotension, tracheal deviation, distended neck veins, and absent breath sounds indicate a tension pneumothorax, a clinical diagnosis requiring immediate needle decompression to relieve the trapped air, followed by definitive tube thoracostomy. Imaging or intubation must not delay decompression.",
    why: [
      "Tension pneumothorax is a clinical diagnosis; leaving to obtain a CT risks cardiac arrest.",
      "Positive-pressure ventilation before decompression can worsen the tension and precipitate arrest.",
      "Fluids alone do not relieve the obstructive shock caused by trapped intrathoracic air.",
      "Correct: immediate needle decompression followed by chest tube placement relieves the tension physiology and restores hemodynamics.",
      "Noninvasive positive pressure similarly worsens a tension pneumothorax and is contraindicated."
    ]
  },
  {
    id: "s3-0235",
    system: "Emergency Medicine",
    discipline: "Toxicology",
    topic: "Carbon monoxide poisoning management",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 44-year-old man and two family members present after several hours in a home with a malfunctioning gas furnace during a winter storm. He reports headache, nausea, dizziness, and difficulty concentrating. His pulse oximetry reads 99% on room air, but he appears unwell. An arterial blood gas with co-oximetry is obtained.\n\n| Test | Value |\n|---|---|\n| Carboxyhemoglobin | 28% |\n| pH | 7.32 |\n| Lactate | 4.1 mmol/L |\n| SpO2 (pulse oximeter) | 99% |",
    lead: "Which of the following is the most appropriate immediate treatment?",
    options: [
      "Discharge with fresh air because his oxygen saturation is normal.",
      "Low-flow nasal cannula oxygen at 2 L/min.",
      "Methylene blue administration.",
      "High-flow 100% oxygen by non-rebreather mask.",
      "Sodium nitrite and sodium thiosulfate."
    ],
    answer: 3,
    exp: "Carbon monoxide poisoning is treated with high-flow 100% oxygen, which dramatically shortens the half-life of carboxyhemoglobin. Pulse oximetry is falsely normal because it cannot distinguish carboxyhemoglobin from oxyhemoglobin. Hyperbaric oxygen is considered for severe features such as neurologic deficits or very high levels.",
    why: [
      "A normal pulse oximeter reading is falsely reassuring in CO poisoning and does not justify discharge.",
      "Low-flow oxygen is insufficient; the goal is to maximize the oxygen gradient that displaces CO.",
      "Methylene blue treats methemoglobinemia, not carbon monoxide poisoning.",
      "Correct: high-flow 100% oxygen accelerates carboxyhemoglobin elimination and is the immediate treatment.",
      "The nitrite-thiosulfate kit treats cyanide toxicity, not carbon monoxide."
    ]
  },
  {
    id: "s3-0236",
    system: "Emergency Medicine",
    discipline: "Toxicology",
    topic: "Digoxin toxicity management",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "An 80-year-old woman with heart failure and atrial fibrillation on digoxin presents with 2 days of anorexia, nausea, and yellow-tinged vision after starting a new diuretic. She is bradycardic and lethargic. Her potassium is 6.1 mEq/L and her serum digoxin level is markedly elevated. Telemetry shows a slow ventricular rate with frequent ectopy, and the rhythm strip is shown.\n\n**[ECG: Regularized junctional rhythm with bidirectional ventricular ectopy and scooped ST segments consistent with digoxin effect and toxicity]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Administer digoxin-specific antibody fragments (DigiFab).",
      "Give intravenous calcium gluconate for the hyperkalemia.",
      "Start an isoproterenol infusion to increase heart rate.",
      "Administer intravenous potassium to correct total-body deficit.",
      "Give amiodarone for the ventricular ectopy."
    ],
    answer: 0,
    exp: "Life-threatening digoxin toxicity with hyperkalemia and dysrhythmia is treated with digoxin-specific antibody fragments, which bind digoxin and reverse toxicity, correcting both the arrhythmia and the hyperkalemia. The hyperkalemia here reflects digoxin poisoning severity rather than a primary potassium problem.",
    why: [
      "Correct: digoxin-immune Fab reverses toxicity and the associated hyperkalemia and dysrhythmias in severe poisoning.",
      "Intravenous calcium in digoxin toxicity is traditionally avoided because of concern for worsening arrhythmia and is not the primary therapy.",
      "Isoproterenol can provoke ventricular arrhythmias in the digoxin-poisoned heart.",
      "Giving potassium worsens the already dangerous hyperkalemia of acute digoxin toxicity.",
      "Amiodarone does not reverse the underlying toxicity and can raise digoxin levels further."
    ]
  },
  {
    id: "s3-0237",
    system: "Surgery",
    discipline: "Orthopedic Surgery",
    topic: "Acute compartment syndrome fasciotomy",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 22-year-old man sustained a closed tibial shaft fracture in a soccer collision 6 hours ago and was placed in a splint. He now has severe, escalating leg pain out of proportion to the injury that is not controlled by opioids. His pain intensifies markedly with passive dorsiflexion of the toes, the anterior compartment is tense and firm, and he reports new paresthesias over the dorsal foot. Distal pulses remain palpable.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Elevate the limb above the heart and reassess in a few hours.",
      "Obtain venous duplex ultrasound to exclude deep vein thrombosis.",
      "Order MRI of the leg to evaluate the soft tissues.",
      "Apply ice and increase the opioid dose.",
      "Perform emergent fasciotomy of the affected compartments."
    ],
    answer: 4,
    exp: "Pain out of proportion, pain with passive stretch, a tense compartment, and paresthesias indicate acute compartment syndrome, a surgical emergency. Palpable pulses do not exclude it. Emergent fasciotomy is required to prevent irreversible muscle and nerve ischemia; imaging or observation dangerously delays treatment.",
    why: [
      "Elevation to heart level and watchful waiting waste time while muscle necrosis progresses.",
      "The presentation is compartment syndrome, not DVT; ultrasound delays limb-saving surgery.",
      "MRI is unnecessary for a clinical diagnosis and delays definitive decompression.",
      "Masking the pain with opioids and ice does not relieve the elevated compartment pressure.",
      "Correct: acute compartment syndrome requires emergent fasciotomy to relieve pressure and prevent irreversible ischemia."
    ]
  },
  {
    id: "s3-0238",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Perforated peptic ulcer management",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 57-year-old man with chronic NSAID use for back pain presents with sudden, severe, diffuse abdominal pain that began 3 hours ago. He lies still and appears ill. His temperature is 38.3 C, heart rate 116/min, and blood pressure 104/68 mm Hg. The abdomen is rigid with diffuse rebound tenderness and absent bowel sounds. An upright chest radiograph is obtained.\n\n**[IMAGE: Upright chest radiograph demonstrating free air under both hemidiaphragms]**",
    lead: "After starting fluids, broad-spectrum antibiotics, and a proton pump inhibitor, which of the following is the most appropriate next step?",
    options: [
      "Outpatient follow-up with repeat imaging in 24 hours.",
      "Nasogastric decompression alone with continued observation.",
      "Emergent exploratory laparotomy for surgical repair.",
      "Upper endoscopy to cauterize the ulcer.",
      "Oral contrast CT before any intervention."
    ],
    answer: 2,
    exp: "Free air under the diaphragm with diffuse peritonitis indicates a perforated viscus, most likely a perforated peptic ulcer given NSAID use. After resuscitation and antibiotics, the definitive treatment is emergent surgery (for example, laparotomy with omental patch repair). Nonoperative management is reserved only for select stable, contained cases.",
    why: [
      "A perforated ulcer with peritonitis is a surgical emergency; outpatient management is unsafe.",
      "Nasogastric decompression is an adjunct but does not repair the perforation in a patient with peritonitis.",
      "Correct: perforated peptic ulcer with peritonitis and free air requires emergent operative repair after resuscitation.",
      "Endoscopy does not repair a free perforation and risks worsening the leak with insufflation.",
      "Further imaging is unnecessary when free air and peritonitis already establish the need for surgery."
    ]
  },
  {
    id: "s3-0239",
    system: "Surgery",
    discipline: "Vascular Surgery",
    topic: "Acute mesenteric ischemia management",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 76-year-old woman with atrial fibrillation not taking anticoagulation presents with sudden severe periumbilical pain for 4 hours. Her pain is far out of proportion to a soft, minimally tender abdomen. She has vomited once and had one loose bowel movement. Her heart rate is irregularly irregular at 118/min. Laboratory studies are shown.\n\n| Test | Value |\n|---|---|\n| Lactate | 5.6 mmol/L |\n| WBC | 19,500/microL |\n| pH | 7.29 |\n| Creatinine | 1.3 mg/dL |",
    lead: "Which of the following is the most appropriate next diagnostic and management step?",
    options: [
      "Prescribe a proton pump inhibitor and discharge with follow-up.",
      "Order an upper GI series with barium.",
      "Obtain urgent CT angiography of the abdomen and begin systemic anticoagulation.",
      "Perform colonoscopy to evaluate for ischemic colitis.",
      "Start antibiotics and observe for 24 hours."
    ],
    answer: 2,
    exp: "Pain out of proportion to examination, atrial fibrillation, and elevated lactate with acidosis strongly suggest acute mesenteric ischemia from an embolus to the superior mesenteric artery. Urgent CT angiography confirms the diagnosis and systemic anticoagulation (heparin) is started, with surgical or endovascular revascularization for confirmed arterial occlusion.",
    why: [
      "Discharging a patient with lactic acidosis and an embolic source risks bowel infarction and death.",
      "A barium study delays diagnosis and can obscure subsequent CT angiography.",
      "Correct: suspected acute mesenteric ischemia warrants urgent CT angiography and prompt systemic anticoagulation, with revascularization for arterial occlusion.",
      "Colonoscopy is not the initial test and can be dangerous with impending transmural infarction.",
      "Passive observation while lactate rises allows irreversible bowel necrosis to develop."
    ]
  },
  {
    id: "s3-0240",
    system: "Pediatrics",
    discipline: "Pediatric Surgery",
    topic: "Hypertrophic pyloric stenosis preoperative management",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 5-week-old boy has 1 week of progressively forceful nonbilious vomiting immediately after feeds and now appears hungry after vomiting. He has lost weight, has a sunken fontanelle, and dry mucous membranes. A firm olive-shaped mass is palpated in the epigastrium, and ultrasound confirms a thickened, elongated pylorus. His laboratory values are shown.\n\n| Test | Value |\n|---|---|\n| Sodium | 134 mEq/L |\n| Potassium | 3.0 mEq/L |\n| Chloride | 88 mEq/L |\n| Bicarbonate | 34 mEq/L |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Proceed to immediate pyloromyotomy in the operating room.",
      "Begin oral rehydration and discharge home.",
      "Start intravenous prokinetic therapy to improve gastric emptying.",
      "Administer a proton pump inhibitor and observe.",
      "Correct the dehydration and hypochloremic, hypokalemic metabolic alkalosis with intravenous fluids before surgery."
    ],
    answer: 4,
    exp: "Pyloric stenosis produces a hypochloremic, hypokalemic metabolic alkalosis from loss of gastric acid. Pyloromyotomy is curative but not an emergency; the infant must first be rehydrated and have electrolytes and alkalosis corrected with intravenous fluids (with potassium once urinating) to make anesthesia safe.",
    why: [
      "Operating before correcting the alkalosis and hypokalemia risks perioperative apnea and arrhythmia.",
      "Oral feeding fails because of gastric outlet obstruction and worsens dehydration.",
      "Prokinetics cannot overcome a mechanically obstructed pylorus.",
      "Acid suppression does not address the mechanical obstruction or the metabolic derangement.",
      "Correct: fluid and electrolyte resuscitation to correct the hypochloremic hypokalemic metabolic alkalosis must precede pyloromyotomy."
    ]
  },
  {
    id: "s3-0241",
    system: "Pediatrics",
    discipline: "Hematology",
    topic: "Sickle cell vaso-occlusive crisis management",
    difficulty: "easy",
    anchor: null,
    vignette: "An 8-year-old boy with known sickle cell disease presents to the emergency department with severe pain in both thighs and his lower back for the past day, typical of his prior vaso-occlusive episodes. He is afebrile, his chest is clear, and his oxygen saturation is 98% on room air. He has taken ibuprofen at home with inadequate relief and appears in significant distress.",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Prompt intravenous fluids and parenteral opioid analgesia.",
      "Exchange transfusion.",
      "Oral antibiotics and discharge home.",
      "Withhold analgesia until imaging confirms the cause.",
      "Corticosteroids as first-line pain control."
    ],
    answer: 0,
    exp: "An uncomplicated vaso-occlusive pain crisis is managed with prompt analgesia (including parenteral opioids for severe pain), hydration, and supportive care. Rapid, adequate pain control is a priority; transfusion is reserved for specific complications such as acute chest syndrome or stroke.",
    why: [
      "Correct: hydration and prompt parenteral opioid analgesia are the mainstays of managing a severe vaso-occlusive pain crisis.",
      "Exchange transfusion is reserved for severe complications like stroke or acute chest syndrome, not routine pain crises.",
      "There is no evidence of infection here, and undertreated pain should not be sent home.",
      "Delaying analgesia for imaging needlessly prolongs suffering in a recognizable pain crisis.",
      "Corticosteroids are not standard first-line therapy and can trigger rebound crises."
    ]
  },
  {
    id: "s3-0242",
    system: "Pediatrics",
    discipline: "Rheumatology",
    topic: "IgA vasculitis (Henoch-Schonlein purpura) management",
    difficulty: "easy",
    anchor: null,
    vignette: "A 6-year-old boy develops palpable purpura over both buttocks and lower legs, colicky abdominal pain, and swelling of the ankles and knees 1 week after a mild upper respiratory illness. He is well-appearing, afebrile, and hemodynamically stable. His platelet count and coagulation studies are normal, and a urinalysis shows a trace of blood without proteinuria.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Immediate high-dose intravenous corticosteroids and cyclophosphamide.",
      "Supportive care with hydration and analgesia, plus monitoring of blood pressure and urinalysis.",
      "Empiric broad-spectrum intravenous antibiotics.",
      "Urgent platelet transfusion.",
      "Emergency exploratory laparotomy for the abdominal pain."
    ],
    answer: 1,
    exp: "IgA vasculitis (Henoch-Schonlein purpura) is usually self-limited. Management is supportive with hydration and analgesia (NSAIDs or acetaminophen), while serial blood pressure and urinalysis monitoring screens for renal involvement, the main determinant of long-term outcome. Corticosteroids are reserved for severe abdominal or renal disease.",
    why: [
      "Aggressive immunosuppression is not indicated for typical, self-limited disease without severe organ involvement.",
      "Correct: supportive care with monitoring of blood pressure and urinalysis for renal involvement is the standard approach.",
      "This is a vasculitis, not a bacterial infection; antibiotics are not indicated.",
      "The platelet count is normal, so thrombocytopenic bleeding is not the mechanism and transfusion is unnecessary.",
      "The abdominal pain reflects bowel-wall vasculitis; surgery is needed only for a true complication like intussusception."
    ]
  },
  {
    id: "s3-0243",
    system: "Obstetrics & Gynecology",
    discipline: "Maternal-Fetal Medicine",
    topic: "Chronic hypertension in pregnancy antihypertensive management",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 33-year-old woman at 12 weeks gestation has chronic hypertension diagnosed before pregnancy. She was taking lisinopril, which was stopped when she learned she was pregnant. She feels well with no headache or visual changes and no proteinuria. Her clinic blood pressure readings over three visits are shown, and she asks how her blood pressure should be treated in pregnancy.\n\n| Visit | Blood pressure (mm Hg) |\n|---|---|\n| 1 | 152/98 |\n| 2 | 156/100 |\n| 3 | 150/96 |",
    lead: "Which of the following is the most appropriate antihypertensive management?",
    options: [
      "Resume lisinopril at her prepregnancy dose.",
      "Start an angiotensin receptor blocker instead.",
      "Start labetalol or nifedipine (or methyldopa).",
      "Withhold all antihypertensives until 20 weeks gestation.",
      "Begin a thiazide diuretic and restrict sodium severely."
    ],
    answer: 2,
    exp: "Chronic hypertension in pregnancy is treated with pregnancy-compatible agents such as labetalol, extended-release nifedipine, or methyldopa, with treatment targeting blood pressure control to reduce maternal risk. ACE inhibitors and ARBs are teratogenic and must be avoided.",
    why: [
      "ACE inhibitors are contraindicated in pregnancy because of fetal renal and developmental toxicity.",
      "Angiotensin receptor blockers share the same fetal toxicity and are contraindicated.",
      "Correct: labetalol, nifedipine, or methyldopa are preferred antihypertensives in pregnancy and should be started for her sustained elevated pressures.",
      "Sustained pressures of about 150/95 warrant treatment now rather than waiting until 20 weeks.",
      "Thiazides and aggressive sodium restriction are not first-line and risk volume depletion affecting the fetus."
    ]
  },
  {
    id: "s3-0244",
    system: "Obstetrics & Gynecology",
    discipline: "Maternal-Fetal Medicine",
    topic: "Preterm premature rupture of membranes management",
    difficulty: "hard",
    anchor: null,
    vignette: "A 27-year-old woman at 31 weeks gestation reports a sudden gush of clear fluid followed by continued leakage. Sterile speculum examination shows pooling of fluid in the vaginal vault with positive nitrazine and ferning, confirming ruptured membranes. She is afebrile with no uterine tenderness or contractions, and the fetal heart rate tracing is reassuring. There are no signs of chorioamnionitis or labor.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Proceed to immediate cesarean delivery.",
      "Discharge home with outpatient follow-up in 1 week.",
      "Induce labor immediately with oxytocin.",
      "Admit for expectant management with antenatal corticosteroids, latency antibiotics, and fetal monitoring.",
      "Perform emergent cerclage placement."
    ],
    answer: 3,
    exp: "For preterm PROM before 34 weeks without infection, labor, or fetal compromise, expectant management prolongs the pregnancy to allow fetal maturation. Care includes antenatal corticosteroids for lung maturity, latency antibiotics to prolong the interval and reduce infection, and close maternal-fetal monitoring.",
    why: [
      "Immediate cesarean is not indicated in a stable preterm patient without fetal or maternal compromise.",
      "Preterm PROM requires inpatient monitoring for infection and fetal status, not outpatient management.",
      "Inducing labor at 31 weeks forfeits the maturation benefit when expectant management is safe.",
      "Correct: expectant inpatient management with corticosteroids, latency antibiotics, and monitoring is appropriate for stable preterm PROM before 34 weeks.",
      "Cerclage is contraindicated after membrane rupture and would increase infection risk."
    ]
  },
  {
    id: "s3-0245",
    system: "Obstetrics & Gynecology",
    discipline: "Reproductive Endocrinology",
    topic: "Polycystic ovary syndrome management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 24-year-old woman reports irregular menses occurring every 2 to 3 months, facial hirsutism, and acne. She is overweight and not currently seeking pregnancy. Examination confirms hirsutism, and laboratory testing shows mildly elevated free testosterone with normal prolactin, TSH, and 17-hydroxyprogesterone. Pelvic ultrasound shows polycystic-appearing ovaries, and other causes of androgen excess have been excluded.",
    lead: "Which of the following is the most appropriate first-line therapy for her menstrual irregularity and hirsutism?",
    options: [
      "Metformin as monotherapy for the hirsutism.",
      "A combined oral contraceptive pill.",
      "Clomiphene citrate to induce ovulation.",
      "Spironolactone alone without contraception.",
      "Gonadotropin-releasing hormone agonist therapy."
    ],
    answer: 1,
    exp: "For a woman with PCOS not seeking pregnancy, combined oral contraceptives are first-line: they regulate menses, protect the endometrium from unopposed estrogen, and reduce androgenic symptoms such as hirsutism and acne. Weight loss is a valuable adjunct.",
    why: [
      "Metformin improves insulin resistance and cycle regularity but is not first-line for hirsutism.",
      "Correct: combined oral contraceptives regulate cycles, protect the endometrium, and reduce hyperandrogenic symptoms in PCOS.",
      "Clomiphene is for ovulation induction in women desiring pregnancy, which she is not.",
      "Spironolactone is teratogenic and should not be used without reliable contraception.",
      "GnRH agonists are not first-line and cause hypoestrogenic side effects."
    ]
  },
  {
    id: "s3-0246",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Schizophrenia relapse and long-acting injectable antipsychotic",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 28-year-old man with schizophrenia has had three hospitalizations for psychotic relapses in the past 2 years, each occurring after he stopped taking his oral antipsychotic. When adherent, he responds well to medication with resolution of hallucinations and delusions and has no significant side effects. He is now stabilized on an oral second-generation antipsychotic in the hospital but has poor insight and repeatedly forgets doses at home.",
    lead: "Which of the following is the most appropriate strategy to prevent future relapses?",
    options: [
      "Continue the same oral regimen and reinforce adherence counseling only.",
      "Transition to a long-acting injectable antipsychotic.",
      "Add a benzodiazepine to the oral regimen.",
      "Discontinue antipsychotics and provide psychotherapy alone.",
      "Switch to as-needed antipsychotic use during symptoms."
    ],
    answer: 1,
    exp: "Recurrent relapses driven by nonadherence to oral medication in an otherwise treatment-responsive patient are a classic indication for a long-acting injectable antipsychotic. Scheduled depot dosing removes the need for daily pills, ensures delivery, and markedly reduces relapse and rehospitalization.",
    why: [
      "Counseling alone has already failed to maintain adherence across three relapses.",
      "Correct: a long-acting injectable antipsychotic ensures medication delivery and reduces relapse from nonadherence.",
      "Benzodiazepines do not treat psychosis or address the adherence problem.",
      "Stopping antipsychotics in relapsing schizophrenia guarantees recurrence; psychotherapy is adjunctive.",
      "As-needed dosing cannot maintain the steady levels required to prevent psychotic relapse."
    ]
  },
  {
    id: "s3-0247",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Post-traumatic stress disorder first-line treatment",
    difficulty: "easy",
    anchor: null,
    vignette: "A 35-year-old female veteran reports 5 months of intrusive nightmares and flashbacks of a combat ambush, avoidance of reminders such as crowds and loud noises, hypervigilance, and an exaggerated startle response. These symptoms began after her deployment and now impair her work and relationships. She has no active suicidal ideation and is not misusing substances, and physical examination and laboratory studies are unremarkable.",
    lead: "Which of the following is the most appropriate first-line treatment?",
    options: [
      "A long-term benzodiazepine.",
      "Trauma-focused psychotherapy, an SSRI or SNRI, or both.",
      "An atypical antipsychotic as monotherapy.",
      "No treatment, with reassessment in 6 months.",
      "Short-term opioid analgesia for hyperarousal."
    ],
    answer: 1,
    exp: "First-line treatment for post-traumatic stress disorder is trauma-focused psychotherapy (such as cognitive processing therapy or prolonged exposure) and/or an SSRI or SNRI such as sertraline, paroxetine, or venlafaxine. These reduce core symptoms and improve function.",
    why: [
      "Benzodiazepines are not effective for core PTSD symptoms and carry dependence risk.",
      "Correct: trauma-focused psychotherapy and/or an SSRI or SNRI is first-line treatment for PTSD.",
      "Antipsychotics are adjuncts for select refractory cases, not first-line monotherapy.",
      "Symptoms lasting 5 months with functional impairment warrant treatment now, not delay.",
      "Opioids are not a treatment for PTSD and pose serious dependence risk."
    ]
  },
  {
    id: "s3-0248",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Tobacco cessation pharmacotherapy",
    difficulty: "easy",
    anchor: null,
    vignette: "A 52-year-old man who has smoked one pack of cigarettes daily for 30 years tells you at a routine visit that he is ready to quit this month. He has tried quitting cold turkey twice without success and asks for help to improve his chances. He has no history of seizures or an eating disorder, drinks alcohol only occasionally, and has well-controlled hypertension. His mood is normal.",
    lead: "In addition to behavioral counseling, which of the following is the most appropriate next step?",
    options: [
      "Advise willpower alone because medications are unnecessary.",
      "Recommend gradual reduction over the next year without pharmacotherapy.",
      "Offer first-line pharmacotherapy such as varenicline or combination nicotine replacement.",
      "Prescribe a benzodiazepine to manage cravings.",
      "Recommend switching to smokeless tobacco as a safe alternative."
    ],
    answer: 2,
    exp: "Combining behavioral counseling with first-line pharmacotherapy substantially increases quit rates. Varenicline is among the most effective agents, and combination nicotine replacement (patch plus short-acting) or bupropion are also first-line. This patient with prior failed unassisted attempts is an ideal candidate.",
    why: [
      "Unassisted attempts have already failed twice; pharmacotherapy meaningfully improves success.",
      "Setting a quit date with support and medication outperforms open-ended gradual reduction.",
      "Correct: pairing counseling with first-line pharmacotherapy such as varenicline or combination nicotine replacement maximizes quit rates.",
      "Benzodiazepines are not a cessation therapy and carry dependence risk.",
      "Smokeless tobacco is not a safe substitute and maintains nicotine dependence."
    ]
  },
  {
    id: "s3-0249",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Truth-telling and family request for nondisclosure",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 70-year-old woman is newly diagnosed with metastatic pancreatic cancer. Her adult children meet you in the hallway before you enter the room and insist that you not tell their mother the diagnosis, saying she is emotionally fragile and the news will devastate her. The patient is alert, has intact decision-making capacity, and has previously expressed that she wants to be fully informed about her health. She has not designated anyone to receive information on her behalf.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Withhold the diagnosis to honor the children's wishes.",
      "Tell only the children and let them decide what to share.",
      "Ask the patient directly how much she wishes to know and disclose accordingly.",
      "Disclose the full diagnosis to the children first and defer the patient's questions.",
      "Refer the case to the ethics committee before speaking with the patient."
    ],
    answer: 2,
    exp: "A patient with capacity has the right to receive information about her own condition, and the family cannot override that. The respectful approach is to speak with the patient, assess how much detail she wants, and disclose accordingly, which also honors her previously stated preference to be fully informed.",
    why: [
      "Withholding the diagnosis violates the autonomy of a capable patient who wants to know.",
      "Sharing only with the children bypasses the patient and breaches confidentiality expectations.",
      "Correct: ask the patient how much she wishes to know and disclose accordingly, respecting her autonomy and stated preferences.",
      "Prioritizing the family over the patient inappropriately deflects her right to information.",
      "An ethics consult is unnecessary here; the correct action is straightforward patient-centered disclosure."
    ]
  },
  {
    id: "s3-0250",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Case-fatality rate calculation",
    difficulty: "moderate",
    anchor: "table",
    vignette: "During an outbreak of a foodborne illness, the local health department compiles the data below after all cases have been identified and followed to resolution. An epidemiologist is asked to summarize the severity of the illness among those who became ill so the response can be scaled appropriately.\n\n| Measure | Number |\n|---|---|\n| People exposed at the event | 500 |\n| People who became ill | 120 |\n| Ill people who died | 18 |\n| Total population of the county | 50,000 |",
    lead: "Which of the following best represents the case-fatality rate for this outbreak?",
    options: [
      "18 divided by 500 (deaths among those exposed).",
      "18 divided by 120 (deaths among those who became ill).",
      "120 divided by 500 (illnesses among those exposed).",
      "18 divided by 50,000 (deaths in the county population).",
      "120 divided by 50,000 (illnesses in the county population)."
    ],
    answer: 1,
    exp: "The case-fatality rate is the proportion of people with the disease who die from it: deaths divided by cases. Here that is 18 deaths among 120 ill persons (15%). It measures severity among the affected, distinct from the attack rate or mortality rate.",
    why: [
      "Deaths divided by those exposed is not the case-fatality rate because many exposed people never became ill.",
      "Correct: case-fatality rate is deaths divided by cases, 18/120 (15%), the severity among those who became ill.",
      "Illnesses divided by exposed persons is the attack rate, not the case-fatality rate.",
      "Deaths divided by the whole county population is a mortality rate, not a case-fatality rate.",
      "Illnesses divided by the county population is neither the attack rate nor the case-fatality rate."
    ]
  }
];
