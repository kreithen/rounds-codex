/*
 * Rounds Codex - USMLE Step 3, Day 2 (Advanced Clinical Management / ACM) bank, Batch 1 (25 items)
 * Day-2-ACM blueprint: managing patients OVER TIME across ambulatory, ED, inpatient, and
 * continuity settings. Vignettes are longer and multi-step (initial data -> workup/evolution
 * -> decision point); lead-ins stress the most appropriate NEXT STEP in management, best
 * initial therapy, monitoring, and follow-up. Much less pure biostatistics than Day 1.
 * Same Step 3 system set and shared `s3-` id space as Day 1 (Day 2 extends the bank).
 * All vignettes are 100% original; source material used for facts only, never phrasing.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E; only the keyed one starts "Correct")
 */
const USMLE_STEP3D2_B1 = [
  {
    id: "s3-0076",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "HFrEF guideline-directed therapy titration",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 61-year-old man with heart failure and a left ventricular ejection fraction of 30% has been on maximally tolerated lisinopril and carvedilol for 4 months. He remains short of breath climbing one flight of stairs (NYHA class II). He is euvolemic on examination. His most recent clinic data are shown.\n\n| Parameter | Value |\n|---|---|\n| Blood pressure | 118/72 mm Hg |\n| Heart rate | 64/min |\n| Serum potassium | 4.2 mEq/L |\n| Estimated GFR | 66 mL/min/1.73 m^2 |",
    lead: "Which of the following is the most appropriate next step to reduce his mortality?",
    options: [
      "Add amlodipine for additional afterload reduction.",
      "Add digoxin to improve survival.",
      "Increase the furosemide dose because he is symptomatic.",
      "Refer immediately for cardiac transplantation evaluation.",
      "Add spironolactone, a mineralocorticoid receptor antagonist."
    ],
    answer: 4,
    exp: "He has persistent symptomatic HFrEF despite an ACE inhibitor and an evidence-based beta-blocker. Adding a mineralocorticoid receptor antagonist such as spironolactone reduces mortality and hospitalization in NYHA II-IV HFrEF, and his normal potassium (4.2) and preserved eGFR (66) make it safe to start with monitoring. This is the next mortality-reducing pillar of guideline-directed therapy.",
    why: [
      "Dihydropyridine calcium channel blockers do not reduce mortality in HFrEF and are used only for refractory hypertension or angina.",
      "Digoxin can reduce heart-failure hospitalizations but has no proven mortality benefit.",
      "He is euvolemic, so escalating a loop diuretic treats congestion he does not have and risks hypovolemia.",
      "Transplant evaluation is premature before proven mortality-reducing medical therapy is optimized.",
      "Correct: adding a mineralocorticoid receptor antagonist is the next mortality-reducing step, and his normal K and eGFR make it safe."
    ]
  },
  {
    id: "s3-0077",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Type 2 diabetes second-agent intensification",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 58-year-old woman with type 2 diabetes and heart failure with reduced ejection fraction has been taking metformin 1000 mg twice daily for a year. She adheres to diet and exercise. Her hemoglobin A1c has drifted upward over three visits, and current labs are shown.\n\n| Test | Value |\n|---|---|\n| Hemoglobin A1c (6 months ago) | 7.2% |\n| Hemoglobin A1c (now) | 8.4% |\n| Estimated GFR | 58 mL/min/1.73 m^2 |",
    lead: "Which of the following is the most appropriate addition to her regimen?",
    options: [
      "Add a sulfonylurea such as glipizide.",
      "Increase metformin above the maximum dose.",
      "Add an SGLT2 inhibitor.",
      "Add a DPP-4 inhibitor.",
      "Add sliding-scale insulin only."
    ],
    answer: 2,
    exp: "Her A1c is above goal despite maximal metformin, and she has heart failure with reduced ejection fraction. An SGLT2 inhibitor is preferred because it independently lowers heart-failure hospitalization and cardiovascular death and slows diabetic kidney disease progression, giving benefit beyond glucose lowering in exactly this comorbidity profile. Her eGFR of 58 is adequate for initiation.",
    why: [
      "Sulfonylureas cause weight gain and hypoglycemia and confer no cardiovascular or renal benefit.",
      "She is already at the maximum effective metformin dose; exceeding it adds toxicity, not efficacy.",
      "Correct: an SGLT2 inhibitor lowers A1c and independently reduces heart-failure hospitalization and slows CKD, ideal given her HFrEF.",
      "DPP-4 inhibitors are weight-neutral but cardiovascular-neutral and do not help her heart failure.",
      "Sliding-scale insulin alone reactively chases hyperglycemia without addressing her comorbidity-driven agent selection."
    ]
  },
  {
    id: "s3-0078",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Slowing diabetic CKD progression",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 63-year-old man with type 2 diabetes and hypertension is seen for routine follow-up. He feels well. His clinic blood pressure is 148/88 mm Hg on amlodipine, and screening labs are shown. He is not currently taking any renin-angiotensin system blocker.\n\n| Test | Value |\n|---|---|\n| Serum creatinine | 1.4 mg/dL |\n| Estimated GFR | 62 mL/min/1.73 m^2 |\n| Urine albumin-to-creatinine ratio | 320 mg/g |\n| Serum potassium | 4.4 mEq/L |",
    lead: "Which of the following is the most appropriate next step to slow progression of his kidney disease?",
    options: [
      "Begin a severe protein-restricted diet as the primary intervention.",
      "Start an ACE inhibitor (or angiotensin receptor blocker).",
      "Refer for hemodialysis planning now.",
      "Add a second dihydropyridine calcium channel blocker.",
      "Start a scheduled NSAID for his blood pressure."
    ],
    answer: 1,
    exp: "He has diabetes, hypertension, and moderately increased albuminuria (ACR 320 mg/g), which together mark diabetic kidney disease at risk of progression. An ACE inhibitor or ARB reduces intraglomerular pressure and albuminuria and slows progression, while also treating his uncontrolled blood pressure; his potassium of 4.4 allows safe initiation with follow-up monitoring of potassium and creatinine.",
    why: [
      "Extreme protein restriction is not first-line and risks malnutrition; RAS blockade is the proven intervention.",
      "Correct: an ACE inhibitor or ARB reduces albuminuria and slows diabetic CKD while lowering his blood pressure.",
      "His eGFR of 62 is far from dialysis-requiring; disease-modifying therapy is the priority.",
      "Another calcium channel blocker lowers pressure but does not provide the antialbuminuric, renoprotective effect of RAS blockade.",
      "NSAIDs reduce renal perfusion and worsen both blood pressure and kidney function."
    ]
  },
  {
    id: "s3-0079",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Periprocedural anticoagulation bridging",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 67-year-old woman with a mechanical mitral valve prosthesis takes warfarin, with a target INR of 2.5-3.5. She is scheduled for an elective colonoscopy with anticipated polypectomy in one week. She has no active bleeding. Her stable outpatient labs are shown.\n\n| Test | Value |\n|---|---|\n| INR (today) | 3.0 |\n| Hemoglobin | 13.1 g/dL |\n| Platelet count | 240,000/microL |",
    lead: "Which of the following is the most appropriate periprocedural anticoagulation plan?",
    options: [
      "Continue warfarin unchanged through the procedure.",
      "Stop warfarin 5 days prior with no bridging and resume afterward.",
      "Administer intravenous vitamin K the night before the procedure.",
      "Stop warfarin 5 days before, bridge with therapeutic heparin, and resume warfarin after the procedure.",
      "Cancel the colonoscopy indefinitely because of her valve."
    ],
    answer: 3,
    exp: "A mechanical mitral valve is a high thromboembolic-risk indication, so anticoagulation cannot simply be interrupted for a procedure with meaningful bleeding risk. The correct approach is to hold warfarin about 5 days before to normalize the INR, bridge with therapeutic low-molecular-weight or unfractionated heparin during the gap, hold the heparin briefly around the procedure, and resume warfarin afterward.",
    why: [
      "Full-dose warfarin through a polypectomy creates unacceptable bleeding risk.",
      "Omitting bridging in a high-risk mechanical mitral valve leaves a dangerous window for valve thrombosis and embolic stroke.",
      "Vitamin K reverses warfarin but induces a prothrombotic state and warfarin resistance, inappropriate for elective planning.",
      "Correct: hold warfarin ~5 days, bridge with therapeutic heparin, and resume warfarin postprocedure to protect a high-risk mechanical valve.",
      "Colonoscopy is appropriate and manageable with proper bridging; cancellation is unnecessary."
    ]
  },
  {
    id: "s3-0080",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Resistant hypertension add-on therapy",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 55-year-old man returns for hypertension follow-up. He reports good adherence, and a review confirms he is taking maximally dosed lisinopril, amlodipine, and hydrochlorothiazide. His home blood pressure log and labs are shown, and secondary causes have been reasonably excluded.\n\n| Parameter | Value |\n|---|---|\n| Average home BP | 152/94 mm Hg |\n| Clinic BP today | 156/96 mm Hg |\n| Serum potassium | 4.1 mEq/L |\n| Estimated GFR | 74 mL/min/1.73 m^2 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Add spironolactone.",
      "Add a second dihydropyridine calcium channel blocker.",
      "Refer immediately for renal artery denervation.",
      "Double the hydrochlorothiazide beyond the maximal dose.",
      "Add clonidine as first add-on therapy."
    ],
    answer: 0,
    exp: "He meets the definition of resistant hypertension: uncontrolled blood pressure despite three agents including a diuretic, at optimal doses, with adherence confirmed. When a mineralocorticoid receptor antagonist is not contraindicated, spironolactone is the preferred fourth-line add-on and is supported by trial evidence; his potassium of 4.1 and preserved eGFR make it appropriate with monitoring.",
    why: [
      "Correct: spironolactone is the evidence-based fourth-line agent for resistant hypertension and is safe given his normal potassium and eGFR.",
      "Adding a second drug from a class he already takes offers little additional effect.",
      "Renal denervation is not a standard next step before optimizing proven pharmacotherapy.",
      "Exceeding the maximal thiazide dose increases metabolic side effects without meaningful added efficacy.",
      "Central agents like clonidine are later-line due to tolerability and rebound and are not the preferred first add-on here."
    ]
  },
  {
    id: "s3-0081",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Levothyroxine dose titration",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 44-year-old woman with primary hypothyroidism has been taking a stable dose of levothyroxine for 3 months. She reports persistent fatigue and mild constipation. She takes the medication on an empty stomach and adheres well. Her follow-up thyroid studies are shown.\n\n| Test | Value (reference) |\n|---|---|\n| TSH | 8.9 microU/mL (0.4-4.0) |\n| Free T4 | 0.7 ng/dL (0.8-1.8) |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Decrease the levothyroxine dose and recheck in 6 weeks.",
      "Increase the levothyroxine dose and recheck TSH in about 6 weeks.",
      "Add liothyronine (T3) to the regimen.",
      "Stop levothyroxine and observe.",
      "Recheck the TSH in 3 days to confirm the trend."
    ],
    answer: 1,
    exp: "Her TSH is elevated and free T4 is low, indicating she is undertreated on her current levothyroxine dose. The appropriate step is to increase the dose and recheck the TSH after about 6 weeks, the interval needed for the TSH to re-equilibrate to a steady state on the new dose.",
    why: [
      "Lowering the dose would worsen her already under-replaced hypothyroid state.",
      "Correct: an elevated TSH with low free T4 means she is undertreated, so increase the dose and recheck TSH in about 6 weeks.",
      "Routine addition of T3 is not indicated; optimizing levothyroxine is the standard approach.",
      "Stopping therapy in established primary hypothyroidism would precipitate worsening symptoms.",
      "Rechecking in 3 days is too soon because TSH takes about 6 weeks to reflect a dose change."
    ]
  },
  {
    id: "s3-0082",
    system: "Internal Medicine",
    discipline: "Gastroenterology/Hepatology",
    topic: "Spontaneous bacterial peritonitis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 58-year-old man with cirrhosis and known ascites, maintained on spironolactone and furosemide, is admitted with two days of diffuse abdominal pain, low-grade fever, and mild confusion. His abdomen is distended and diffusely tender. A diagnostic paracentesis is performed, and the ascitic fluid analysis is shown.\n\n| Ascitic fluid test | Value |\n|---|---|\n| Polymorphonuclear cell count | 480/microL |\n| Total protein | 0.9 g/dL |\n| Gram stain | pending |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Increase the diuretic doses to mobilize the ascites.",
      "Proceed urgently to transjugular intrahepatic portosystemic shunt.",
      "Repeat the paracentesis in 48 hours before treating.",
      "Discharge on oral ciprofloxacin with outpatient follow-up.",
      "Start empiric intravenous cefotaxime and give intravenous albumin."
    ],
    answer: 4,
    exp: "An ascitic fluid polymorphonuclear count of at least 250/microL diagnoses spontaneous bacterial peritonitis, even before culture results. Treatment is prompt empiric intravenous third-generation cephalosporin such as cefotaxime, plus intravenous albumin (particularly with renal dysfunction or high bilirubin) to reduce the risk of hepatorenal syndrome and death.",
    why: [
      "Escalating diuretics does not treat the infection and can precipitate renal injury and hepatorenal syndrome.",
      "TIPS addresses refractory ascites or variceal bleeding, not acute infection, and is contraindicated during active sepsis and encephalopathy.",
      "Waiting to re-tap delays lifesaving antibiotics; the PMN count already establishes the diagnosis.",
      "Outpatient oral therapy is inappropriate for a confused, febrile inpatient with diagnosed SBP.",
      "Correct: a PMN count of 480 diagnoses SBP, so start empiric IV cefotaxime plus IV albumin to reduce mortality and hepatorenal syndrome."
    ]
  },
  {
    id: "s3-0083",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Chronic gout urate-lowering therapy",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 52-year-old man has had four gout flares in the past year, and examination now reveals a small tophus over the right olecranon. His most recent acute flare resolved two weeks ago with a short course of an anti-inflammatory agent. His renal function is normal, and he wants to prevent future attacks. His serum urate is 9.6 mg/dL.",
    lead: "Which of the following is the most appropriate next step in his long-term management?",
    options: [
      "Treat only acute flares as they occur and give no preventive therapy.",
      "Start allopurinol during his next acute flare without anti-inflammatory cover.",
      "Start allopurinol now with low-dose colchicine prophylaxis, titrating to a urate target.",
      "Prescribe long-term daily NSAIDs as the sole preventive strategy.",
      "Restrict dietary purines alone and defer all medication."
    ],
    answer: 2,
    exp: "Frequent flares (two or more per year) plus a tophus and hyperuricemia are clear indications for urate-lowering therapy. Allopurinol is first-line; it should be started with low-dose colchicine (or NSAID) prophylaxis to prevent mobilization flares and titrated upward to a serum urate target below 6 mg/dL. Starting it between flares with prophylaxis is the appropriate longitudinal plan.",
    why: [
      "Recurrent flares with a tophus are a firm indication for urate-lowering therapy, not flare-only treatment.",
      "Initiating allopurinol during an acute flare without prophylaxis can worsen the flare; prophylactic cover is required.",
      "Correct: start allopurinol with low-dose colchicine prophylaxis and titrate to a urate target below 6 mg/dL.",
      "Chronic NSAID monotherapy does not lower urate or dissolve tophi and carries cumulative toxicity.",
      "Diet alone rarely achieves target urate in a patient with tophi and frequent attacks."
    ]
  },
  {
    id: "s3-0084",
    system: "Emergency Medicine",
    discipline: "Critical Care",
    topic: "Septic shock vasopressor initiation",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 70-year-old woman presents to the emergency department with fever, cough, and confusion from pneumonia. She receives broad-spectrum antibiotics and a 30 mL/kg crystalloid bolus over the first hour. She is reassessed after the fluids, and her data are shown. She remains warm and vasodilated with brisk capillary refill.\n\n| Parameter | After initial fluids |\n|---|---|\n| Blood pressure | 82/44 mm Hg |\n| Mean arterial pressure | 57 mm Hg |\n| Heart rate | 116/min |\n| Serum lactate | 4.1 mmol/L |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Continue repeated large fluid boluses without a vasopressor.",
      "Start dopamine as the first-line vasopressor.",
      "Start dobutamine to increase cardiac output.",
      "Start norepinephrine to target a mean arterial pressure of at least 65 mm Hg.",
      "Give intravenous hydrocortisone before any vasopressor."
    ],
    answer: 3,
    exp: "She has septic shock with persistent hypotension (MAP 57) and elevated lactate despite adequate initial fluid resuscitation. The next step is to start norepinephrine, the first-line vasopressor, titrated to a mean arterial pressure of at least 65 mm Hg. Adding a vasopressor once fluids fail to restore perfusion is the guideline-directed sequence.",
    why: [
      "After adequate resuscitation with persistent hypotension, more indiscriminate boluses risk fluid overload without restoring pressure.",
      "Dopamine is not first-line because of higher arrhythmia risk compared with norepinephrine.",
      "Dobutamine is an inotrope for low cardiac output, not the primary agent for vasodilatory hypotension.",
      "Correct: for fluid-refractory septic shock, start norepinephrine titrated to a MAP of at least 65 mm Hg.",
      "Corticosteroids are reserved for shock refractory to fluids and vasopressors, not given before the first vasopressor."
    ]
  },
  {
    id: "s3-0085",
    system: "Emergency Medicine",
    discipline: "Cardiology",
    topic: "Anterior STEMI reperfusion strategy",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 59-year-old man arrives at a percutaneous coronary intervention-capable hospital 90 minutes after the onset of crushing substernal chest pain with diaphoresis. He is given aspirin and is hemodynamically stable. The catheterization team can achieve device time within 60 minutes.\n\n**[ECG: sinus rhythm with 3-mm ST-segment elevations in leads V1 through V4 and reciprocal ST depression in the inferior leads, consistent with an acute anterior ST-elevation myocardial infarction]**",
    lead: "Which of the following is the most appropriate reperfusion strategy?",
    options: [
      "Activate the catheterization laboratory for primary percutaneous coronary intervention.",
      "Administer fibrinolytic therapy instead of catheterization.",
      "Wait for the initial troponin result before any reperfusion.",
      "Arrange an outpatient exercise stress test.",
      "Discharge with close cardiology follow-up in one week."
    ],
    answer: 0,
    exp: "The ECG shows an acute anterior STEMI in a patient presenting to a PCI-capable center with an achievable first-medical-contact-to-device time within 90 minutes. Primary percutaneous coronary intervention is the preferred reperfusion strategy because it restores flow more effectively and with fewer bleeding complications than fibrinolysis when it can be delivered promptly.",
    why: [
      "Correct: for STEMI at a PCI-capable hospital with timely device access, primary PCI is the preferred reperfusion strategy.",
      "Fibrinolysis is reserved for when timely PCI is unavailable; here PCI is achievable within target time.",
      "STEMI is a clinical-plus-ECG diagnosis, and reperfusion should not be delayed for troponin results.",
      "Stress testing is contraindicated during an acute STEMI and delays lifesaving reperfusion.",
      "Discharging a patient with an evolving anterior infarction would be catastrophic."
    ]
  },
  {
    id: "s3-0086",
    system: "Emergency Medicine",
    discipline: "Neurology",
    topic: "Refractory status epilepticus escalation",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 34-year-old man is brought in with a generalized tonic-clonic seizure that has been continuous for 8 minutes. Intravenous access is established, glucose is normal, and he is given an appropriate weight-based dose of intravenous lorazepam. Two minutes later he is still seizing convulsively with ongoing rhythmic motor activity.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Obtain a noncontrast head CT before giving any further medication.",
      "Administer intravenous fosphenytoin (or levetiracetam) as the next antiseizure agent.",
      "Give an oral phenytoin loading dose through a nasogastric tube.",
      "Continue repeating benzodiazepine boluses indefinitely.",
      "Withhold further therapy and observe for spontaneous resolution."
    ],
    answer: 1,
    exp: "Convulsive status epilepticus persisting after a first-line benzodiazepine requires prompt escalation to a second-line intravenous antiseizure medication such as fosphenytoin, valproate, or levetiracetam, given as a loading dose. Controlling the seizure takes priority over imaging, which is done once the patient is stabilized.",
    why: [
      "Imaging should not delay treatment of ongoing status epilepticus; the seizure must be stopped first.",
      "Correct: after a benzodiazepine fails, load a second-line IV agent such as fosphenytoin or levetiracetam.",
      "Oral or enteral loading is too slow and unreliable during active convulsive status epilepticus.",
      "Repeated benzodiazepines beyond the initial dosing add respiratory depression without adding seizure control; a second-line agent is needed.",
      "Watchful waiting risks neuronal injury; prolonged status epilepticus is a treat-now emergency."
    ]
  },
  {
    id: "s3-0087",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Acute appendicitis management",
    difficulty: "easy",
    anchor: "image",
    vignette: "An 18-year-old man presents with 14 hours of periumbilical pain that migrated to the right lower quadrant, now with nausea, low-grade fever, and anorexia. He has right lower quadrant tenderness with guarding, and his white blood cell count is elevated. He is otherwise healthy.\n\n**[IMAGE: contrast-enhanced abdominal CT showing a dilated, non-filling appendix measuring 11 mm with periappendiceal fat stranding and no evidence of perforation]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Discharge on oral antibiotics with outpatient follow-up only.",
      "Arrange an outpatient colonoscopy.",
      "Observe without intervention and repeat imaging in one week.",
      "Order a barium enema to confirm the diagnosis.",
      "Perform laparoscopic appendectomy with perioperative antibiotics."
    ],
    answer: 4,
    exp: "The clinical picture and CT confirm acute uncomplicated appendicitis. The standard definitive treatment is prompt laparoscopic appendectomy with perioperative antibiotics, which reliably resolves the disease and prevents progression to perforation. Antibiotics-only therapy is a discussed alternative in select adults but is not the standard first choice for a healthy young patient with clear appendicitis.",
    why: [
      "Antibiotics alone carry a substantial recurrence rate and are not the standard definitive treatment for a healthy young adult with clear appendicitis.",
      "Colonoscopy has no role in the acute management of appendicitis.",
      "Observation risks perforation; the diagnosis is already established and warrants operative treatment.",
      "Barium enema is an outdated study that would not add useful information and could worsen the situation.",
      "Correct: laparoscopic appendectomy with perioperative antibiotics is the definitive treatment for acute appendicitis."
    ]
  },
  {
    id: "s3-0088",
    system: "Surgery",
    discipline: "Surgical Critical Care",
    topic: "Postoperative oliguria management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 68-year-old man is in the recovery unit several hours after a prolonged open abdominal operation. Over the last 3 hours his urine output has fallen to 15 mL/hr. He is tachycardic at 108/min with a blood pressure of 96/58 mm Hg, his mucous membranes are dry, and his Foley catheter is confirmed patent and unobstructed. His abdomen is soft.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Administer intravenous furosemide to increase urine output.",
      "Arrange urgent hemodialysis for acute kidney injury.",
      "Give an intravenous crystalloid fluid bolus and reassess urine output.",
      "Start a low-dose dopamine infusion for renal protection.",
      "Continue observation without intervention."
    ],
    answer: 2,
    exp: "Postoperative oliguria with tachycardia, borderline hypotension, and dry mucous membranes, after confirming the catheter is patent, points to hypovolemia (a prerenal state) from intraoperative and ongoing fluid losses. The correct step is a crystalloid fluid challenge followed by reassessment of urine output and hemodynamics, which both treats and helps confirm the volume-responsive cause.",
    why: [
      "Furosemide in a hypovolemic patient worsens intravascular depletion and can precipitate true renal injury.",
      "Dialysis is not indicated for volume-responsive prerenal oliguria without a dialysis indication.",
      "Correct: hypovolemic postoperative oliguria is treated with a crystalloid fluid bolus and reassessment.",
      "Low-dose dopamine does not provide renal protection and is not recommended for this purpose.",
      "Passive observation of worsening oliguria risks progression to established acute kidney injury."
    ]
  },
  {
    id: "s3-0089",
    system: "Surgery",
    discipline: "Vascular Surgery",
    topic: "Abdominal aortic aneurysm repair threshold",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 72-year-old man with a prior smoking history is found to have an abdominal aortic aneurysm on imaging obtained for unrelated back pain. He is asymptomatic, and the aneurysm is infrarenal without tenderness or evidence of rupture. His surgical risk is acceptable after evaluation.\n\n**[IMAGE: CT angiogram demonstrating a fusiform infrarenal abdominal aortic aneurysm measuring 5.6 cm in maximal diameter without contrast extravasation]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Refer for elective abdominal aortic aneurysm repair.",
      "Repeat ultrasound surveillance in 3 years.",
      "Repair only if the aneurysm exceeds 7 cm.",
      "Start a beta-blocker and provide no further surveillance.",
      "Proceed to emergent operative repair today."
    ],
    answer: 0,
    exp: "An asymptomatic infrarenal abdominal aortic aneurysm at or above 5.5 cm in maximal diameter meets the threshold for elective repair because the annual rupture risk exceeds the operative risk in an acceptable-risk patient. At 5.6 cm, this aneurysm should be referred for elective repair (open or endovascular) rather than continued surveillance.",
    why: [
      "Correct: an asymptomatic AAA at or above 5.5 cm warrants elective repair because rupture risk outweighs operative risk.",
      "Surveillance intervals apply to smaller aneurysms below the repair threshold, not to a 5.6-cm aneurysm.",
      "Waiting until 7 cm exposes the patient to a markedly elevated interval rupture risk.",
      "Risk-factor modification is adjunctive but does not replace repair once the size threshold is met.",
      "Emergent repair is for rupture or symptomatic aneurysms; this asymptomatic aneurysm is repaired electively after optimization."
    ]
  },
  {
    id: "s3-0090",
    system: "Pediatrics",
    discipline: "General Pediatrics",
    topic: "Acute otitis media antibiotic therapy",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 14-month-old boy is brought in with one day of fever to 39.2 C, irritability, and tugging at both ears. He has had no prior ear infections and no drug allergies. Examination confirms bilateral findings, and he is well-hydrated and not toxic-appearing.\n\n**[IMAGE: otoscopy showing a bulging, erythematous, opacified tympanic membrane with loss of the normal light reflex, consistent with acute otitis media]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Observation without antibiotics and reassess in 48-72 hours only.",
      "Prescribe antibiotic ear drops alone.",
      "Recommend oral decongestants and antihistamines.",
      "Start high-dose oral amoxicillin.",
      "Refer for immediate tympanostomy tube placement."
    ],
    answer: 3,
    exp: "This child under 2 years old has bilateral acute otitis media with a clearly bulging, erythematous tympanic membrane, fever, and pain. High-dose oral amoxicillin is the recommended first-line antibiotic for a nonallergic child, given the higher likelihood of bacterial infection and the young age with bilateral disease.",
    why: [
      "The observation option is reserved for older children with milder, unilateral disease; a child under 2 with bilateral AOM warrants antibiotics.",
      "Topical antibiotic drops do not treat middle-ear infection behind an intact tympanic membrane.",
      "Decongestants and antihistamines do not improve acute otitis media and add side effects.",
      "Correct: high-dose amoxicillin is first-line for a nonallergic child under 2 with bilateral acute otitis media.",
      "Tympanostomy tubes are for recurrent or persistent effusions, not a first uncomplicated episode."
    ]
  },
  {
    id: "s3-0091",
    system: "Pediatrics",
    discipline: "Pediatric Pulmonology",
    topic: "Pediatric asthma controller step-up",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 7-year-old girl with asthma is seen for follow-up. Over the past month she has used her albuterol rescue inhaler four days per week and has awakened with cough about three nights per month. Her only current medication is the as-needed albuterol. Her inhaler technique is verified to be good, and she has no interval limitation with exercise reported today.",
    lead: "Which of the following is the most appropriate next step in her long-term management?",
    options: [
      "Increase the frequency of the albuterol rescue inhaler.",
      "Start chronic daily oral corticosteroids.",
      "Prescribe a long-acting beta-agonist as monotherapy.",
      "Prescribe montelukast as the sole controller and stop albuterol.",
      "Add a daily low-dose inhaled corticosteroid."
    ],
    answer: 4,
    exp: "Rescue inhaler use more than twice weekly and nighttime symptoms indicate her asthma is not well controlled on rescue therapy alone, so she has persistent asthma. The appropriate step-up is to add a daily low-dose inhaled corticosteroid, the preferred long-term controller, while continuing albuterol as needed.",
    why: [
      "Escalating rescue use treats symptoms reactively without controlling the underlying airway inflammation.",
      "Chronic systemic corticosteroids carry serious cumulative toxicity and are not a step-up controller for mild persistent asthma.",
      "Long-acting beta-agonists must never be used as monotherapy in asthma because of safety concerns.",
      "Leukotriene modifiers are less effective than inhaled corticosteroids and are not preferred as the sole controller here.",
      "Correct: persistent symptoms warrant adding a daily low-dose inhaled corticosteroid as the controller."
    ]
  },
  {
    id: "s3-0092",
    system: "Pediatrics",
    discipline: "General Pediatrics",
    topic: "Bronchiolitis supportive management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 5-month-old girl presents in winter with 3 days of rhinorrhea, cough, and wheezing following an upper respiratory illness. She has mild subcostal retractions, an oxygen saturation of 95% on room air, and diffuse wheezes and crackles. She is feeding at about 75% of normal and remains well-hydrated with a normal capillary refill.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Administer a scheduled albuterol nebulizer regimen.",
      "Provide supportive care with nasal suctioning and attention to hydration.",
      "Start a course of systemic corticosteroids.",
      "Begin empiric oral antibiotics for presumed pneumonia.",
      "Order routine chest physiotherapy."
    ],
    answer: 1,
    exp: "This is typical viral bronchiolitis in an infant who is well-oxygenated and adequately hydrated. Management is supportive: nasal suctioning to clear secretions, ensuring adequate hydration and feeding, and monitoring. Bronchodilators, corticosteroids, antibiotics, and chest physiotherapy are not routinely beneficial in bronchiolitis.",
    why: [
      "Routine bronchodilators do not change the course of bronchiolitis and are not recommended.",
      "Correct: bronchiolitis is managed with supportive care such as nasal suctioning and hydration in a well-oxygenated, well-hydrated infant.",
      "Corticosteroids are not effective for viral bronchiolitis.",
      "Antibiotics are unnecessary without evidence of bacterial infection.",
      "Chest physiotherapy provides no benefit and can distress the infant."
    ]
  },
  {
    id: "s3-0093",
    system: "Obstetrics & Gynecology",
    discipline: "Maternal-Fetal Medicine",
    topic: "Preeclampsia with severe features management",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 29-year-old woman at 34 weeks gestation presents with a severe headache and new right upper quadrant discomfort. She was normotensive earlier in pregnancy. On arrival her blood pressure is persistently elevated on repeat readings, and her workup is shown. The fetal heart tracing is currently reassuring.\n\n| Test | Value |\n|---|---|\n| Blood pressure (repeated) | 165/112 mm Hg |\n| Urine protein-to-creatinine ratio | 0.6 |\n| Platelet count | 180,000/microL |\n| AST / ALT | mildly elevated |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Discharge with outpatient home blood pressure monitoring.",
      "Recommend bed rest at home and recheck in one week.",
      "Continue expectant management to term without intervention.",
      "Give intravenous magnesium sulfate and antihypertensive therapy, and plan delivery.",
      "Proceed directly to cesarean delivery without stabilization."
    ],
    answer: 3,
    exp: "She has preeclampsia with severe features (severe-range blood pressure with headache and right upper quadrant pain plus proteinuria). Management is intravenous magnesium sulfate for seizure prophylaxis, prompt antihypertensive treatment of severe-range pressures, and delivery, which is indicated at or beyond 34 weeks with severe features. Stabilization precedes delivery, and the route is determined obstetrically.",
    why: [
      "Outpatient monitoring is unsafe for preeclampsia with severe features, which requires admission and magnesium.",
      "Home bed rest does not treat the maternal risk of eclampsia and stroke.",
      "Expectant management to term is inappropriate with severe features at 34 weeks; delivery is indicated.",
      "Correct: give magnesium sulfate and antihypertensives and plan delivery for preeclampsia with severe features at 34 weeks.",
      "Cesarean is not automatically required, and delivery should follow maternal stabilization with magnesium and blood-pressure control."
    ]
  },
  {
    id: "s3-0094",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Group B streptococcus intrapartum prophylaxis",
    difficulty: "easy",
    anchor: null,
    vignette: "A 31-year-old woman at 39 weeks gestation is admitted in active labor. Her routine rectovaginal culture at 36 weeks was positive for group B streptococcus. She has no penicillin allergy and no fever, and membranes have just ruptured. Labor is progressing normally.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Administer intrapartum intravenous penicillin.",
      "Give a course of oral antibiotics at the next prenatal visit instead.",
      "Treat only if she develops an intrapartum fever.",
      "Proceed to cesarean delivery to prevent transmission.",
      "Provide no antibiotic because she is asymptomatic."
    ],
    answer: 0,
    exp: "A woman with a positive group B streptococcus screen who presents in labor should receive intrapartum intravenous penicillin (or ampicillin) to reduce the risk of early-onset neonatal GBS disease. Prophylaxis is given during labor, timed to precede delivery, in the penicillin-nonallergic patient.",
    why: [
      "Correct: a GBS-positive woman in labor receives intrapartum IV penicillin to prevent early-onset neonatal GBS disease.",
      "Antenatal oral antibiotics do not prevent early-onset neonatal disease; prophylaxis must be given intrapartum.",
      "Prophylaxis is based on the positive culture and is not withheld pending fever.",
      "Cesarean delivery does not eliminate GBS transmission risk and is not indicated for GBS colonization.",
      "Asymptomatic colonization is precisely the indication for intrapartum prophylaxis, not a reason to withhold it."
    ]
  },
  {
    id: "s3-0095",
    system: "Obstetrics & Gynecology",
    discipline: "Maternal-Fetal Medicine",
    topic: "Preterm labor corticosteroids and tocolysis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 27-year-old woman at 30 weeks gestation presents with regular painful uterine contractions every 4 minutes. Cervical examination shows progressive dilation and effacement compared with her earlier examination, confirming preterm labor. There is no evidence of chorioamnionitis, abruption, or nonreassuring fetal status, and the fetus is in a stable condition.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Proceed to immediate delivery regardless of gestational age.",
      "Start long-term oral terbutaline for ongoing maintenance tocolysis.",
      "Administer antenatal betamethasone and short-term tocolysis to allow steroid benefit.",
      "Provide no intervention and allow labor to progress.",
      "Place an emergency cervical cerclage."
    ],
    answer: 2,
    exp: "In preterm labor before 34 weeks without contraindications, the priority is antenatal corticosteroids (betamethasone) to accelerate fetal lung maturity, combined with short-term tocolysis to delay delivery long enough for the steroids to take effect; magnesium sulfate is also given for fetal neuroprotection at this gestational age. This buys time for meaningful fetal benefit.",
    why: [
      "Immediate delivery forfeits the fetal benefit of corticosteroids when there is no maternal or fetal emergency.",
      "Long-term maintenance tocolysis is not effective and carries maternal cardiovascular risk.",
      "Correct: give antenatal betamethasone plus short-term tocolysis to gain the fetal lung-maturity benefit at 30 weeks.",
      "Doing nothing wastes the window to administer lung-maturing steroids and neuroprotective magnesium.",
      "Cerclage is a prophylactic procedure for cervical insufficiency, not a treatment for established preterm labor."
    ]
  },
  {
    id: "s3-0096",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Generalized anxiety disorder long-term treatment",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 38-year-old woman reports 8 months of excessive, difficult-to-control worry about work, finances, and family, accompanied by restlessness, muscle tension, irritability, and poor sleep. The symptoms are present most days and impair her functioning. A medical workup including thyroid studies is normal, and she uses no substances.",
    lead: "Which of the following is the most appropriate initial long-term management?",
    options: [
      "Prescribe as-needed alprazolam for ongoing daily use.",
      "Start an SSRI and refer for cognitive behavioral therapy.",
      "Prescribe a beta-blocker alone as maintenance therapy.",
      "Provide reassurance only and defer any treatment.",
      "Start a low-dose second-generation antipsychotic as first-line therapy."
    ],
    answer: 1,
    exp: "She meets criteria for generalized anxiety disorder. First-line long-term management pairs an SSRI (or SNRI) with cognitive behavioral therapy, which together provide durable symptom control. Chronic benzodiazepines are avoided as maintenance therapy because of tolerance, dependence, and lack of disease-modifying benefit.",
    why: [
      "Standing benzodiazepines risk tolerance and dependence and are not appropriate maintenance therapy.",
      "Correct: an SSRI plus cognitive behavioral therapy is first-line durable treatment for generalized anxiety disorder.",
      "Beta-blockers blunt some autonomic symptoms but do not treat the core disorder.",
      "Reassurance alone is inadequate for a functionally impairing anxiety disorder.",
      "Antipsychotics are not first-line and carry metabolic and movement risks disproportionate to the need here."
    ]
  },
  {
    id: "s3-0097",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Lithium initiation and monitoring",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 26-year-old man with newly diagnosed bipolar I disorder is being started on lithium for maintenance therapy after a manic episode. He is medically healthy. He returns 6 days after his dose was last adjusted, reporting good adherence and a mild fine hand tremor but no confusion, vomiting, or ataxia. Baseline studies before starting are shown.\n\n| Baseline test | Value |\n|---|---|\n| Serum creatinine | 0.9 mg/dL |\n| TSH | 2.1 microU/mL |\n| Basic metabolic panel | normal |",
    lead: "Which of the following is the most appropriate monitoring plan?",
    options: [
      "Check the lithium level every single day indefinitely.",
      "No laboratory monitoring is needed once he feels well.",
      "Stop lithium permanently at the first sign of any tremor.",
      "Add a second mood stabilizer instead of monitoring the level.",
      "Check a serum lithium level and periodically monitor renal and thyroid function, titrating to the therapeutic range."
    ],
    answer: 4,
    exp: "Lithium has a narrow therapeutic index and requires steady-state trough level monitoring after dose changes, plus periodic renal and thyroid function testing because chronic use can impair both. A mild fine tremor is a common, benign side effect and does not signify toxicity. The plan is to check the level and titrate into the therapeutic range while monitoring organ function.",
    why: [
      "Daily indefinite level checks are excessive; levels are checked at steady state after changes and then periodically.",
      "Ongoing monitoring is essential for a narrow-therapeutic-index drug regardless of how the patient feels.",
      "A benign fine tremor is not toxicity and is not a reason to abruptly stop effective maintenance therapy.",
      "Adding another agent does not substitute for the required therapeutic drug monitoring.",
      "Correct: monitor the serum lithium level and periodically check renal and thyroid function while titrating to the therapeutic range."
    ]
  },
  {
    id: "s3-0098",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Adult pneumococcal immunization",
    difficulty: "easy",
    anchor: null,
    vignette: "A 67-year-old man with type 2 diabetes presents for a routine wellness visit. He is up to date on his annual influenza vaccine and reports he has never received any pneumococcal vaccine. He has no vaccine allergies and no acute illness today. He asks what preventive care he is due for at this visit.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Advise that no pneumococcal vaccine is needed at his age.",
      "Defer all vaccination until he reaches age 75.",
      "Administer a recommended pneumococcal conjugate vaccine.",
      "Give only a repeat influenza vaccine and nothing else.",
      "Recommend antibiotics to be kept at home instead of vaccination."
    ],
    answer: 2,
    exp: "Adults 65 years and older who have not previously received a pneumococcal vaccine are recommended to receive pneumococcal vaccination, and his diabetes further supports it. Administering a recommended pneumococcal conjugate vaccine at this visit is the appropriate preventive step for a pneumococcal-naive older adult.",
    why: [
      "Pneumococcal vaccination is specifically recommended at his age, not withheld.",
      "There is no reason to delay; he is already in the recommended age group and is vaccine-naive.",
      "Correct: a pneumococcal-naive adult 65 or older should receive a recommended pneumococcal conjugate vaccine.",
      "He needs the pneumococcal vaccine in addition to influenza; giving only influenza omits an indicated vaccine.",
      "Standby antibiotics are not a substitute for indicated vaccination."
    ]
  },
  {
    id: "s3-0099",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Surrogate decision-making standard",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 74-year-old man is critically ill and intubated in the intensive care unit and lacks decision-making capacity. He has no written advance directive, but he had previously appointed his adult daughter as his health care proxy. The team must decide whether to pursue an escalation of aggressive interventions, and the daughter is present and engaged.",
    lead: "Which of the following is the most appropriate basis for the treatment decision?",
    options: [
      "Ask the surrogate to decide based on what the patient himself would have wanted (substituted judgment).",
      "Have the physician decide unilaterally in the patient's best interest, disregarding the family.",
      "Obtain a court order before making any treatment decision.",
      "Take a majority vote among all family members present.",
      "Defer the decision indefinitely until the patient regains capacity."
    ],
    answer: 0,
    exp: "For a patient who lacks capacity and has an appointed surrogate but no specific advance directive, decisions should follow the substituted-judgment standard: the surrogate reflects what the patient himself would have chosen based on his known values and prior statements. This respects the incapacitated patient's autonomy through the person he designated.",
    why: [
      "Correct: with an appointed surrogate and no directive, decisions follow substituted judgment, reflecting what the patient would have wanted.",
      "Unilateral physician decision-making disregards the legally designated surrogate and the patient's autonomy.",
      "Routine treatment decisions do not require court involvement when a valid surrogate is available.",
      "A family vote has no standing when the patient designated a specific health care proxy.",
      "Indefinite deferral is untenable for a critically ill patient requiring active decisions now."
    ]
  },
  {
    id: "s3-0100",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Noninferiority trial interpretation",
    difficulty: "hard",
    anchor: "table",
    vignette: "A randomized noninferiority trial compares a new once-daily anticoagulant with standard warfarin for prevention of stroke. Investigators prespecified a noninferiority margin, meaning the new drug is acceptable if its event rate is not worse than warfarin's by more than that margin. The primary results are shown, expressed as the absolute difference in stroke rate (new minus standard).\n\n| Outcome | Difference (new - standard) | 95% CI | Prespecified margin |\n|---|---|---|---|\n| Stroke | +0.3% | -0.6% to +1.1% | +1.5% |",
    lead: "Which of the following statements best interprets this result?",
    options: [
      "The new drug is proven superior to warfarin because the difference is positive.",
      "The new drug is inferior because the point estimate favors warfarin.",
      "The result is uninterpretable because the confidence interval crosses zero.",
      "The new drug is noninferior to warfarin because the entire confidence interval lies within the prespecified margin.",
      "The trial proves the two drugs are exactly equivalent."
    ],
    answer: 3,
    exp: "In a noninferiority trial, noninferiority is established when the confidence interval for the treatment difference lies entirely on the acceptable side of the prespecified margin. Here the upper bound of the 95% CI (+1.1%) is below the margin (+1.5%), so the new drug is noninferior to warfarin. Superiority is a separate question and is not demonstrated here because the interval crosses zero.",
    why: [
      "Superiority would require the interval to exclude zero in favor of the new drug, which it does not.",
      "The point estimate slightly favoring warfarin does not establish inferiority; the margin, not zero, is the reference.",
      "Crossing zero simply means superiority is not shown; noninferiority is still fully interpretable against the margin.",
      "Correct: the entire confidence interval lies within the prespecified margin, so the new drug is noninferior to warfarin.",
      "Noninferiority does not prove exact equivalence; it shows the new drug is not unacceptably worse."
    ]
  }
];
