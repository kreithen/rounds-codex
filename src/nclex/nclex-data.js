// nclex-data.js — merged NCLEX-RN item bank (150 items). Auto-generated from nclex-b1..b16.
// Schema v0.2. Do not hand-edit; edit the batch files and re-merge.
const NCLEX_DATA = [
  {
    "id": "nclex-0001",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A charge nurse on a busy telemetry unit is assigning patient care. Which patient is most appropriate to assign to an Unlicensed Assistive Personnel (UAP)?",
    "opts": [
      "A patient with new-onset atrial fibrillation who requires a continuous diltiazem infusion.",
      "A patient 24 hours post total knee arthroplasty who needs assistance ambulating for the first time.",
      "A patient with COPD who requires oxygen saturation monitoring via pulse oximetry.",
      "A patient being discharged to a skilled nursing facility who needs comprehensive medication education."
    ],
    "key": 2,
    "rationale": "Measuring oxygen saturation via pulse oximetry is a routine, non-invasive skill requiring no clinical judgment, so it is appropriate to delegate to a UAP. First-time ambulation of a fresh post-op patient (B) requires RN evaluation for orthostatic changes and gait stability. IV medication titration (A) and discharge teaching (D) can never be delegated to a UAP.",
    "src": [
      "https://www.ncsbn.org/public-files/NGN_Winter18.pdf",
      "https://www.ncbi.nlm.nih.gov/books/NBK519519/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0002",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "The nurse is reviewing the assigned patient workload for the day. Which patient should the nurse assess first?",
    "opts": [
      "A patient with diabetes mellitus whose fasting blood glucose is 140 mg/dL.",
      "A patient with a deep vein thrombosis who reports sudden onset of shortness of breath and chest pain.",
      "A patient with chronic kidney disease whose latest serum creatinine is 2.1 mg/dL.",
      "A patient recovering from an appendectomy requesting a PRN dose of oral analgesic."
    ],
    "key": 1,
    "rationale": "Sudden dyspnea and chest pain in a patient with a known DVT strongly suggests a life-threatening pulmonary embolism; this unstable patient takes priority over stable hyperglycemia (A), a chronic stable creatinine elevation (C), and routine post-op pain management (D). Airway-Breathing-Circulation and the least stable patient come first.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK560891/",
      "https://medlineplus.gov/ency/article/000132.htm"
    ],
    "cond": "pe"
  },
  {
    "id": "nclex-0003",
    "type": "mc",
    "cat": "pharm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "The nurse is preparing to administer furosemide 40 mg IV push to a patient with acute decompensated heart failure. Which laboratory value requires immediate verification before administering the medication?",
    "opts": [
      "Sodium 136 mEq/L",
      "Potassium 3.1 mEq/L",
      "Blood Urea Nitrogen 22 mg/dL",
      "Hemoglobin 12.5 g/dL"
    ],
    "key": 1,
    "rationale": "Furosemide is a potent loop diuretic that causes potassium excretion. Giving it to a patient already hypokalemic (normal 3.5-5.0 mEq/L) can trigger lethal arrhythmias such as Torsades de Pointes or ventricular fibrillation. Sodium 136 (A) and BUN 22 (C) are essentially normal, and hemoglobin (D) is unaffected by furosemide administration.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682858.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK499921/"
    ],
    "cond": "chf"
  },
  {
    "id": "nclex-0004",
    "type": "mc",
    "cat": "pharm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient with atrial fibrillation is prescribed warfarin for stroke prevention. Which dietary instruction is most vital during discharge teaching?",
    "opts": [
      "Avoid all foods containing sodium and artificial sweeteners.",
      "Maintain a consistent daily intake of green leafy vegetables high in Vitamin K.",
      "Eliminate red meat and dairy products entirely from the diet.",
      "Increase intake of citrus fruits to maximize absorption."
    ],
    "key": 1,
    "rationale": "Vitamin K is the physiologic antidote to warfarin. Patients do not need to eliminate Vitamin K; they must keep intake consistent day to day so the provider can accurately calibrate the target INR. Sudden swings in Vitamin K intake, not sodium (A), protein (C), or citrus (D), are what destabilize the INR.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682277.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK470313/"
    ],
    "cond": "afib"
  },
  {
    "id": "nclex-0005",
    "type": "mc",
    "cat": "risk",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient is 6 hours post-op following an abdominal hysterectomy. Which assessment finding is a potential complication that must be reported to the provider immediately?",
    "opts": [
      "Urine output of 110 mL over the last 4 hours via indwelling catheter.",
      "Pain rated 6 out of 10 along the abdominal incision line.",
      "A serosanguineous stain measuring 2 cm on the surgical dressing.",
      "A sudden drop in blood pressure from 122/78 to 88/54 mmHg with tachycardia."
    ],
    "key": 3,
    "rationale": "A sudden, steep BP drop with tachycardia signals impending hypovolemic shock from internal hemorrhage (or early sepsis) and demands immediate provider notification. Urine output of 110 mL/4 h averages ~27.5 mL/hr, near the acceptable ~30 mL/hr floor; moderate incisional pain (B) and a small serosanguineous stain (C) are expected 6 hours post-op.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK513297/",
      "https://medlineplus.gov/ency/article/000167.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0006",
    "type": "mc",
    "cat": "physio",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient with liver cirrhosis presents with severe ascites and confusion. The provider prescribes lactulose 30 mL orally three times daily. What is the primary therapeutic rationale?",
    "opts": [
      "To reduce serum ammonia levels by promoting excretion through the stool.",
      "To decrease portal vein hypertension and minimize esophageal varices.",
      "To stimulate production of clotting factors by the liver.",
      "To maintain normal electrolyte balance and fluid distribution."
    ],
    "key": 0,
    "rationale": "Hepatic encephalopathy is driven by neurotoxic ammonia the scarred liver cannot clear. Lactulose acidifies the colon, drawing ammonia (NH3) into the bowel and converting it to ammonium (NH4+), which is expelled via its laxative effect. It does not lower portal pressure (B), make clotting factors (C), or primarily balance electrolytes (D).",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682338.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK441911/"
    ],
    "cond": "cirrhosis"
  },
  {
    "id": "nclex-0007",
    "type": "matrixMC",
    "cat": "physio",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A 68-year-old man presents with severe dyspnea, pink frothy sputum, and orthopnea. History of chronic hypertension and left-sided heart failure. BP 172/94, HR 112, RR 28, SpO2 86% on room air, diffuse bilateral coarse crackles. For each intervention, indicate whether it is Anticipated or Contraindicated for this patient.",
    "rows": [
      "Administer oxygen via high-flow nasal cannula or non-rebreather mask",
      "Place the patient flat and supine to maximize spinal alignment",
      "Administer IV morphine sulfate as prescribed to reduce preload and anxiety",
      "Administer a rapid-acting IV loop diuretic (e.g., furosemide)",
      "Administer a 500 mL bolus of 0.9% normal saline over 30 minutes"
    ],
    "cols": [
      "Anticipated",
      "Contraindicated"
    ],
    "key": [
      0,
      1,
      0,
      0,
      1
    ],
    "rationale": "This is acute cardiogenic pulmonary edema. Oxygen is anticipated (SpO2 86% with distress). Flat supine positioning is contraindicated: it increases venous return to an overwhelmed heart and worsens congestion; the patient needs high-Fowler's. Morphine is anticipated as a mild vasodilator that lowers preload and eases respiratory panic. A loop diuretic is anticipated to offload pulmonary fluid. A normal saline bolus is contraindicated: adding volume to acute pulmonary edema worsens overload and risks respiratory arrest.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK544260/",
      "https://medlineplus.gov/ency/article/000140.htm"
    ],
    "cond": "chf"
  },
  {
    "id": "nclex-0008",
    "type": "mc",
    "cat": "risk",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient at 34 weeks gestation is admitted with severe preeclampsia. Which finding indicates worsening disease requiring immediate provider notification?",
    "opts": [
      "2+ bilateral pitting edema in the lower extremities.",
      "Sudden report of epigastric pain and a severe, persistent frontal headache.",
      "A 1-hour urine output of 45 mL.",
      "Fetal heart rate variability showing moderate accelerations."
    ],
    "key": 1,
    "rationale": "Epigastric pain reflects hepatic capsule stretch/ischemia and can herald HELLP syndrome or hepatic rupture, while a severe frontal headache signals worsening cerebral edema and impending eclampsia. Lower-extremity edema (A) and urine output above 30 mL/hr (C) are expected preeclamptic parameters; moderate accelerations (D) are reassuring.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK570611/",
      "https://medlineplus.gov/ency/article/000898.htm"
    ],
    "cond": "preeclampsia"
  },
  {
    "id": "nclex-0009",
    "type": "mc",
    "cat": "hpm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "The nurse is assessing a newborn 4 hours after a vaginal delivery. Which finding should be reported to the pediatrician immediately?",
    "opts": [
      "Blue color of the hands and feet with a pink trunk.",
      "A blood glucose level of 52 mg/dL.",
      "Sustained nasal flaring and intercostal chest retractions at rest.",
      "Milia across the bridge of the nose and forehead."
    ],
    "key": 2,
    "rationale": "Sustained nasal flaring and intercostal retractions are definitive signs of neonatal respiratory distress and require immediate intervention. Acrocyanosis (A) is expected for 24-48 hours, a glucose of 52 mg/dL (B) is safe (normal >40-45), and milia (D) are benign.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK560595/",
      "https://medlineplus.gov/ency/article/007306.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0010",
    "type": "mc",
    "cat": "physio",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A 4-year-old with Tetralogy of Fallot suddenly becomes agitated, cyanotic, and begins gasping for air. Which action should the nurse take first?",
    "opts": [
      "Administer a prescribed PRN dose of oral oxygen.",
      "Place the child immediately into a knee-chest position.",
      "Prepare a dose of IV morphine sulfate to calm the patient.",
      "Call the rapid response team to initiate emergency intubation."
    ],
    "key": 1,
    "rationale": "This is a hypercyanotic (Tet) spell. The knee-chest position immediately raises systemic vascular resistance, forcing more blood across the pulmonary outflow to be oxygenated and rapidly improving systemic oxygenation. Oxygen and morphine may follow, but the positioning change is the immediate life-saving step; intubation (D) is not first-line.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK534803/",
      "https://medlineplus.gov/ency/article/001567.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0011",
    "type": "mc",
    "cat": "hpm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "The nurse is giving discharge instructions to parents of an 18-month-old treated for acute otitis media. Which statement indicates correct understanding of pediatric safety and infection prevention?",
    "opts": [
      "\"I will prop my child's bottle up in bed so they can fall asleep easily.\"",
      "\"I will avoid exposing my child to secondhand tobacco smoke in our home and car.\"",
      "\"I should stop the oral antibiotics as soon as my child's ear pain goes away.\"",
      "\"I will use cotton swabs to clean deep inside my child's ear canal daily.\""
    ],
    "key": 1,
    "rationale": "Secondhand smoke is a proven risk factor that inflames and blocks the Eustachian tubes, directly promoting otitis media. Bottle propping (A) pools fluid in the pharynx and raises infection risk, antibiotic courses must be finished completely (C), and objects should never be inserted into the ear canal (D).",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK470332/",
      "https://medlineplus.gov/ency/article/000638.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0012",
    "type": "mc",
    "cat": "psych",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient with major depressive disorder, admitted 3 days ago after a suicidal gesture, was withdrawn and uncommunicative but is now suddenly smiling, neatly dressed, and giving away personal belongings. Which action is the priority?",
    "opts": [
      "Document the improvement and encourage the patient to join group therapy.",
      "Allow the patient privacy to interact and bond with other patients.",
      "Implement continuous one-on-one suicide precautions immediately.",
      "Ask the provider to downgrade the patient's risk status for discharge."
    ],
    "key": 2,
    "rationale": "A sudden mood lift in a severely depressed patient, paired with giving away possessions, is a classic sign the patient has finalized a suicide plan and now has the energy to carry it out. The priority is to secure physical safety with 1:1 line-of-sight monitoring, not to relax observation (A, B) or downgrade risk (D).",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK557428/",
      "https://medlineplus.gov/ency/article/001554.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0013",
    "type": "numeric",
    "cat": "pharm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A provider prescribes a continuous IV heparin infusion at 1,200 units/hour. The pharmacy supplies a 500 mL bag labeled \"Heparin Sodium 25,000 units in 5% Dextrose.\" The nurse should set the pump to deliver how many mL/hour? (Round to the nearest whole number.)",
    "numeric": {
      "answer": 24,
      "unit": "mL/hour",
      "tol": 0
    },
    "rationale": "Concentration = 25,000 units / 500 mL = 50 units/mL. Rate = 1,200 units/hr divided by 50 units/mL = 24 mL/hour.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682826.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK538247/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0014",
    "type": "numeric",
    "cat": "pharm",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A child weighing 44 lb is prescribed amoxicillin 40 mg/kg/day divided every 12 hours. The pharmacy dispenses amoxicillin suspension 250 mg / 5 mL. How many mL should the nurse give per dose? (Round to the nearest tenth.)",
    "numeric": {
      "answer": 8,
      "unit": "mL/dose",
      "tol": 0.1
    },
    "rationale": "Weight = 44 / 2.2 = 20 kg. Daily dose = 20 kg x 40 mg/kg = 800 mg/day. Divided q12h (2 doses) = 400 mg/dose. Volume = (400 mg / 250 mg) x 5 mL = 8 mL/dose.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a685001.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK482250/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0015",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is admitting a patient with a productive cough, drenching night sweats, and a 15-pound weight loss over the past month. Which infection control measure must be implemented immediately?",
    "opts": [
      "Private room with staff wearing a standard surgical mask on entry.",
      "Negative-pressure airflow room with healthcare workers wearing an N95 respirator.",
      "Semi-private room shared with a patient who has bacterial pneumonia.",
      "Droplet precautions with the room door kept wide open for ventilation."
    ],
    "key": 1,
    "rationale": "This presentation is classic for active pulmonary tuberculosis, which requires airborne precautions: a negative-pressure (AIIR) room and an N95 (or higher) respirator for everyone entering. A surgical mask (A) is inadequate, cohorting with another infection (C) is unsafe, and airborne precautions require the door kept closed (D).",
    "src": [
      "https://www.cdc.gov/tb/hcp/infection-control/index.html",
      "https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html"
    ],
    "cond": "tb"
  },
  {
    "id": "nclex-0016",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "Which patient requires strict implementation of Contact Precautions?",
    "opts": [
      "A patient with an active scabies infestation who needs help bathing.",
      "A patient with Neisseria meningitidis receiving IV antibiotics.",
      "A patient with localized herpes zoster whose lesions are fully crusted over.",
      "A patient with Mycoplasma pneumoniae who has a frequent cough."
    ],
    "key": 0,
    "rationale": "Scabies is a highly contagious skin infestation spread by direct skin-to-skin contact and requires Contact Precautions (gown and gloves). Neisseria meningitidis (B) and Mycoplasma pneumoniae (D) require Droplet Precautions, and fully crusted shingles (C) is no longer contagious.",
    "src": [
      "https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK544312/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0017",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient with confirmed Clostridioides difficile infection and severe diarrhea. Which infection control action is most critical?",
    "opts": [
      "Cleanse hands with an alcohol-based hand rub before leaving the room.",
      "Wear a surgical mask and eye goggles when entering the room.",
      "Wash hands with soap and water after removing gloves and before exiting.",
      "Place the patient in a negative-pressure isolation room."
    ],
    "key": 2,
    "rationale": "C. difficile forms spores that resist alcohol-based sanitizer; the mechanical action of soap-and-water handwashing is required to physically remove them. A mask (B) and negative pressure (D) are not indicated for C. diff, which needs Contact Precautions, and alcohol rub alone (A) is insufficient.",
    "src": [
      "https://www.cdc.gov/c-diff/hcp/clinical-overview/index.html",
      "https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html"
    ],
    "cond": null
  },
  {
    "id": "nclex-0018",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is preparing to enter the room of a patient on droplet precautions to perform oral suctioning likely to generate fluid splashes. In which sequence should the nurse don PPE?",
    "opts": [
      "Gown -> Mask/Respirator -> Goggles/Face Shield -> Gloves",
      "Gloves -> Gown -> Mask/Respirator -> Goggles/Face Shield",
      "Mask/Respirator -> Goggles/Face Shield -> Gown -> Gloves",
      "Gown -> Gloves -> Mask/Respirator -> Goggles/Face Shield"
    ],
    "key": 0,
    "rationale": "The CDC donning sequence is gown, then mask or respirator, then goggles or face shield, then gloves last so the gloves cover the gown cuffs. The other orders place gloves too early or misorder the protective layers.",
    "src": [
      "https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html",
      "https://www.cdc.gov/niosh/npptl/pdfs/PPE-Sequence-508.pdf"
    ],
    "cond": null
  },
  {
    "id": "nclex-0019",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse has finished care for a patient on airborne and contact precautions and is standing inside the room near the exit. Which PPE item should be removed first?",
    "opts": [
      "N95 Respirator",
      "Gown",
      "Goggles",
      "Gloves"
    ],
    "key": 3,
    "rationale": "Doffing goes from most to least contaminated: gloves, then gown, then goggles/face shield, then mask/respirator. Gloves are the most contaminated and come off first. The N95 (A) is removed last and only after leaving the room and closing the door.",
    "src": [
      "https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html",
      "https://www.cdc.gov/niosh/npptl/pdfs/PPE-Sequence-508.pdf"
    ],
    "cond": null
  },
  {
    "id": "nclex-0020",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient with acute myeloid leukemia and severe neutropenia after intensive chemotherapy. Which intervention protects this patient from healthcare-associated infection?",
    "opts": [
      "Place fresh flowers in water at the bedside to boost morale.",
      "Use a negative-pressure isolation room with 12 air exchanges per hour.",
      "Prohibit raw fruits, raw vegetables, and undercooked meats from meals.",
      "Require the patient to wear an N95 respirator at all times while resting."
    ],
    "key": 2,
    "rationale": "Neutropenic (protective) precautions shield the immunocompromised patient from external pathogens; raw produce and undercooked meat harbor bacteria and mold spores that can be fatal, so all food must be thoroughly cooked. Fresh flowers/standing water (A) harbor Pseudomonas and are banned, the patient needs positive- not negative-pressure (B), and a resting N95 (D) is not required in a protective-isolation room.",
    "src": [
      "https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK513351/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0021",
    "type": "mc",
    "cat": "risk",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient with chronic kidney disease missed hemodialysis and has a serum potassium of 6.8 mEq/L. Which intervention should the nurse anticipate implementing first?",
    "opts": [
      "Administer oral sodium polystyrene sulfonate.",
      "Obtain a 12-lead electrocardiogram immediately.",
      "Initiate a continuous IV infusion of 0.9% normal saline.",
      "Educate the patient on restricting potassium-rich foods."
    ],
    "key": 1,
    "rationale": "A potassium of 6.8 mEq/L is severe hyperkalemia (normal 3.5-5.0) that can cause lethal arrhythmias, so obtaining an ECG to check for cardiac toxicity (peaked T waves, widened QRS) is the immediate priority and guides emergency therapy. Sodium polystyrene sulfonate (A) takes hours, saline (C) does not lower potassium acutely, and diet teaching (D) is not urgent.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK470284/",
      "https://medlineplus.gov/ency/article/000479.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0022",
    "type": "mc",
    "cat": "physio",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient admitted with severe vomiting has a serum potassium of 2.8 mEq/L. Which ECG change is most characteristic of this imbalance?",
    "opts": [
      "Tall, peaked T waves and a widened QRS complex.",
      "Prolonged ST segment and a shortened QT interval.",
      "Flattened T waves, ST-segment depression, and U waves.",
      "Progressive lengthening of the PR interval until a QRS is dropped."
    ],
    "key": 2,
    "rationale": "A potassium of 2.8 mEq/L is severe hypokalemia, which delays ventricular repolarization and produces flattened T waves, ST depression, and U waves. Tall peaked T waves (A) indicate hyperkalemia, and a dropped QRS after PR lengthening (D) is a second-degree AV block, not a primary hypokalemia finding.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK482465/",
      "https://medlineplus.gov/ency/article/000479.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0023",
    "type": "mc",
    "cat": "physio",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A patient with SIADH has a serum sodium of 118 mEq/L and is lethargic with a severe headache. Which prescription should the nurse expect?",
    "opts": [
      "IV infusion of 3% hypertonic saline at a slow, controlled rate.",
      "A rapid 1,000 mL bolus of 0.45% half-normal saline.",
      "Continuous IV infusion of 5% dextrose in water (D5W).",
      "Increased oral fluid intake to at least 2,500 mL per day."
    ],
    "key": 0,
    "rationale": "This is severe symptomatic hyponatremia from SIADH fluid retention, risking cerebral edema and seizures. Slow, controlled 3% hypertonic saline is the high-alert treatment to raise sodium carefully. Hypotonic fluids (B, C) and increased oral intake (D) would worsen the hyponatremia.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK507777/",
      "https://medlineplus.gov/ency/article/000394.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0024",
    "type": "mc",
    "cat": "risk",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient with diabetes insipidus is admitted with severe dehydration, a serum sodium of 158 mEq/L, and extreme thirst. Which intervention is the priority?",
    "opts": [
      "Encourage high-sodium broths to stabilize fluid shifts.",
      "Implement seizure precautions and monitor neurologic status hourly.",
      "Administer IV loop diuretics to clear excess volume.",
      "Restrict all oral fluid intake to prevent fluid overload."
    ],
    "key": 1,
    "rationale": "A sodium of 158 mEq/L is severe hypernatremia (normal 135-145) that shrinks brain cells and causes altered mentation and seizures, so seizure precautions with close neuro monitoring is the priority. High-sodium broths (A) and fluid restriction (D) are contraindicated in a dehydrated, hypernatremic patient, and diuretics (C) worsen volume loss.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK441960/",
      "https://medlineplus.gov/ency/article/000394.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0025",
    "type": "mc",
    "cat": "physio",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient is 12 hours post total thyroidectomy and reports perioral numbness and finger spasms when the blood pressure cuff inflates. Which laboratory value explains these findings?",
    "opts": [
      "Serum Calcium 7.2 mg/dL",
      "Serum Magnesium 2.6 mEq/L",
      "Serum Potassium 5.1 mEq/L",
      "Serum Calcium 10.9 mg/dL"
    ],
    "key": 0,
    "rationale": "Thyroidectomy can injure or remove the parathyroid glands, dropping PTH and causing hypocalcemia (normal 8.5-10.5 mg/dL). Low calcium raises neuromuscular excitability: perioral numbness and a hand spasm on cuff inflation (Trousseau's sign) are classic. Choice B is mild hypermagnesemia and C is mild hyperkalemia, neither of which explains these signs.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK430912/",
      "https://medlineplus.gov/ency/article/000365.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0026",
    "type": "mc",
    "cat": "pharm",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A patient with severe preeclampsia is receiving a continuous IV magnesium sulfate infusion. The nurse notes a respiratory rate of 10, absent deep tendon reflexes, and 15 mL of urine over the past hour. Which action must the nurse take immediately?",
    "opts": [
      "Increase the magnesium sulfate infusion to reach a therapeutic level.",
      "Stop the infusion immediately and prepare to administer calcium gluconate.",
      "Document the findings as an expected therapeutic response.",
      "Administer a rapid normal saline bolus to flush the kidneys."
    ],
    "key": 1,
    "rationale": "Bradypnea (<12), loss of deep tendon reflexes, and oliguria (<30 mL/hr) are signs of magnesium sulfate toxicity, a CNS depressant that can cause respiratory and cardiac arrest. The nurse must stop the infusion at once and prepare the antidote, calcium gluconate. Increasing the rate (A) or treating it as expected (C) is dangerous.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682401.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK554593/"
    ],
    "cond": "preeclampsia"
  },
  {
    "id": "nclex-0027",
    "type": "sata",
    "cat": "basic",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is teaching a patient newly diagnosed with type 2 diabetes about recognizing hypoglycemia. Which manifestations should the nurse include as early signs of a low blood glucose? Select all that apply.",
    "opts": [
      "Diaphoresis and cool, clammy skin",
      "Tremors and shakiness",
      "Fruity, acetone odor on the breath",
      "Palpitations and tachycardia",
      "Deep, rapid Kussmaul respirations",
      "Sudden hunger and irritability"
    ],
    "key": [
      0,
      1,
      3,
      5
    ],
    "rationale": "Early hypoglycemia triggers a sympathetic (adrenergic) response: diaphoresis with cool clammy skin, tremors, palpitations/tachycardia, and sudden hunger with irritability. A fruity acetone breath odor and Kussmaul respirations are hallmarks of diabetic ketoacidosis (hyperglycemia), not hypoglycemia.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK534841/",
      "https://medlineplus.gov/ency/article/000386.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0028",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A registered nurse is delegating tasks to a licensed practical/vocational nurse (LPN/LVN). Which task is within the LPN/LVN scope and appropriate to delegate?",
    "opts": [
      "Developing the initial nursing care plan for a newly admitted patient.",
      "Administering a scheduled oral antihypertensive to a stable patient.",
      "Performing the admission assessment on a patient with chest pain.",
      "Providing the first dose of IV push adenosine for supraventricular tachycardia."
    ],
    "key": 1,
    "rationale": "Administering routine oral medications to a stable patient is within the LPN/LVN scope. Creating the initial care plan (A) and the admission assessment (C) require RN-level assessment and clinical judgment, and high-alert IV push antiarrhythmics for an unstable rhythm (D) are outside the LPN/LVN scope.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK519519/",
      "https://www.ncsbn.org/public-files/NGN_Winter18.pdf"
    ],
    "cond": null
  },
  {
    "id": "nclex-0029",
    "type": "cloze",
    "cat": "pharm",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "Complete the statements about insulin therapy by selecting the option that makes each sentence correct. Regular insulin has an onset of [1] and, when mixing insulins in one syringe, the nurse draws up [2] first.",
    "blanks": [
      {
        "label": "1",
        "opts": [
          "15 minutes (rapid)",
          "30 to 60 minutes",
          "6 to 8 hours"
        ],
        "key": 1
      },
      {
        "label": "2",
        "opts": [
          "the clear (regular) insulin",
          "the cloudy (NPH) insulin"
        ],
        "key": 0
      }
    ],
    "rationale": "Regular (short-acting) insulin has an onset of roughly 30 to 60 minutes, peaks at 2 to 4 hours. When mixing regular and NPH in one syringe, the nurse draws up the clear regular insulin first (clear before cloudy) to avoid contaminating the regular vial with the longer-acting NPH.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682611.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK560688/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0030",
    "type": "selectN",
    "cat": "safety",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A nurse is reviewing fall-prevention strategies for an older adult patient at high risk for falls on a medical unit. Choose the 3 interventions the nurse should implement.",
    "opts": [
      "Keep the bed in the lowest position with wheels locked",
      "Apply a vest restraint at all times to prevent movement",
      "Ensure the call light is within the patient's reach",
      "Provide nonskid footwear when the patient is out of bed",
      "Keep all four side rails up at all times",
      "Dim all room lighting to encourage rest"
    ],
    "n": 3,
    "key": [
      0,
      2,
      3
    ],
    "rationale": "Evidence-based fall prevention keeps the bed low with wheels locked, the call light within reach, and nonskid footwear during ambulation. Routine vest restraints (B) and keeping all four side rails up (E, considered a restraint) increase injury risk, and dim lighting (F) raises fall risk rather than lowering it.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK560761/",
      "https://www.cdc.gov/falls/about/index.html"
    ],
    "cond": null
  },
  {
    "id": "nclex-0031",
    "type": "ddTable",
    "cat": "physio",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "For each acid-base disturbance, select the arterial blood gas pattern that matches. (pH normal 7.35-7.45; PaCO2 35-45 mmHg; HCO3 22-26 mEq/L.)",
    "rows": [
      {
        "label": "Uncompensated respiratory acidosis",
        "opts": [
          "pH 7.28, PaCO2 55, HCO3 24",
          "pH 7.50, PaCO2 30, HCO3 24",
          "pH 7.30, PaCO2 34, HCO3 16"
        ],
        "key": 0
      },
      {
        "label": "Uncompensated metabolic acidosis",
        "opts": [
          "pH 7.28, PaCO2 55, HCO3 24",
          "pH 7.50, PaCO2 30, HCO3 24",
          "pH 7.30, PaCO2 34, HCO3 16"
        ],
        "key": 2
      },
      {
        "label": "Uncompensated respiratory alkalosis",
        "opts": [
          "pH 7.28, PaCO2 55, HCO3 24",
          "pH 7.50, PaCO2 30, HCO3 24",
          "pH 7.30, PaCO2 34, HCO3 16"
        ],
        "key": 1
      }
    ],
    "rationale": "Respiratory acidosis: low pH with high PaCO2 (55) and normal HCO3. Metabolic acidosis: low pH with low HCO3 (16) and near-normal PaCO2. Respiratory alkalosis: high pH (7.50) with low PaCO2 (30) from hyperventilation and normal HCO3. Matching pH direction to the primary driver (CO2 vs HCO3) identifies each disorder.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK507807/",
      "https://medlineplus.gov/ency/article/003855.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0032",
    "type": "matrixMR",
    "cat": "risk",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A patient is admitted with an acute exacerbation of asthma. For each assessment finding, indicate all categories that apply. (Select one or more columns per row.)",
    "rows": [
      "SpO2 of 88% on room air",
      "Audible expiratory wheezing",
      "Speaking in single words only",
      "Respiratory rate of 16 and unlabored"
    ],
    "cols": [
      "Indicates worsening",
      "Requires immediate action",
      "Reassuring finding"
    ],
    "key": [
      [
        0,
        1
      ],
      [
        0
      ],
      [
        0,
        1
      ],
      [
        2
      ]
    ],
    "rationale": "An SpO2 of 88% both indicates worsening and requires immediate action (oxygen). Expiratory wheezing indicates worsening airflow obstruction. Speaking in single words signals severe distress that indicates worsening and requires immediate action. A rate of 16, unlabored, is a reassuring finding. Distinguishing findings that merely trend worse from those demanding immediate action is the core skill.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK430901/",
      "https://medlineplus.gov/ency/article/000141.htm"
    ],
    "cond": "asthma"
  },
  {
    "id": "nclex-0033",
    "type": "pair",
    "cat": "pharm",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A patient receiving an opioid analgesic develops respiratory depression. Select the appropriate antidote and the correct route for emergency reversal.",
    "pair": {
      "first": {
        "label": "Antidote",
        "opts": [
          "Naloxone",
          "Flumazenil",
          "Acetylcysteine",
          "Protamine sulfate"
        ],
        "key": 0
      },
      "second": {
        "label": "Route",
        "opts": [
          "Oral",
          "Intravenous",
          "Topical",
          "Subcutaneous only"
        ],
        "key": 1
      }
    },
    "rationale": "Naloxone is the opioid antagonist that reverses respiratory depression, and the IV route gives the fastest onset in an emergency. Flumazenil reverses benzodiazepines, acetylcysteine treats acetaminophen toxicity, and protamine reverses heparin, none of which apply to opioid overdose.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a685039.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK441910/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0034",
    "type": "mc",
    "cat": "hpm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is counseling a healthy 50-year-old adult about age-appropriate cancer screening. Which recommendation reflects current preventive guidance?",
    "opts": [
      "Average-risk colorectal cancer screening should have already begun at age 45.",
      "Colorectal screening is unnecessary until age 70.",
      "A yearly chest x-ray is recommended for all adults to screen for lung cancer.",
      "Screening is only needed after symptoms develop."
    ],
    "key": 0,
    "rationale": "Current guidance (USPSTF and American Cancer Society) recommends average-risk colorectal cancer screening beginning at age 45, so a healthy 50-year-old should already be screened and remain up to date. Delaying to age 70 (B) misses early disease, routine chest x-ray (C) is not a recommended lung-cancer screen, and screening is preventive and precedes symptoms (D).",
    "src": [
      "https://www.cdc.gov/colorectal-cancer/screening/index.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK570861/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0035",
    "type": "mc",
    "cat": "psych",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient experiencing alcohol withdrawal is being monitored on a medical unit. Which finding indicates the patient may be progressing to severe withdrawal (delirium tremens)?",
    "opts": [
      "Mild hand tremor and requesting a snack.",
      "Disorientation to time and place with visual hallucinations and a heart rate of 128.",
      "Reports of a poor night's sleep and mild anxiety.",
      "Blood pressure of 128/80 and an oral temperature of 98.8 F."
    ],
    "key": 1,
    "rationale": "Delirium tremens is a medical emergency marked by disorientation, hallucinations, severe autonomic instability (tachycardia, hypertension, fever), and agitation, typically 48 to 96 hours after the last drink. A mild tremor (A), poor sleep with mild anxiety (C), and normal vital signs (D) reflect early or uncomplicated withdrawal.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK482134/",
      "https://medlineplus.gov/ency/article/000766.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0036",
    "type": "mc",
    "cat": "basic",
    "diff": 1,
    "caseId": null,
    "step": null,
    "stem": "A nurse is preparing to obtain a clean-catch midstream urine specimen from an adult patient. Which instruction is correct?",
    "opts": [
      "Collect the very first portion of the urine stream into the container.",
      "Begin voiding into the toilet, then collect the middle portion of the stream.",
      "Collect the specimen only after the bladder is completely empty.",
      "Refrigerate the specimen for 24 hours before sending it to the lab."
    ],
    "key": 1,
    "rationale": "A clean-catch midstream specimen is obtained by cleansing the meatus, voiding the first portion into the toilet to flush the distal urethra, then collecting the midstream portion, which best reflects bladder urine. Collecting the first stream (A) captures contaminants, and a specimen should be sent promptly, not held 24 hours (D).",
    "src": [
      "https://medlineplus.gov/ency/article/007487.htm",
      "https://www.ncbi.nlm.nih.gov/books/NBK557685/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0037",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse manager is reviewing the assignment for an oncoming shift. Which patient is most appropriate to assign to a newly licensed registered nurse who is still in orientation?",
    "opts": [
      "A hemodynamically unstable patient requiring frequent titration of IV vasopressors.",
      "A stable patient with community-acquired pneumonia receiving scheduled IV antibiotics.",
      "A patient immediately post cardiac arrest being prepared for transfer to the ICU.",
      "A patient with a complex, evolving GI bleed requiring frequent reassessment."
    ],
    "key": 1,
    "rationale": "A stable patient on a predictable, scheduled regimen is the safest match for a new nurse in orientation. Unstable patients needing vasopressor titration (A), immediate post-arrest care (C), or a complex evolving bleed (D) require the judgment and speed of an experienced nurse.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK519519/",
      "https://www.ncsbn.org/public-files/NGN_Winter18.pdf"
    ],
    "cond": null
  },
  {
    "id": "nclex-0038",
    "type": "mc",
    "cat": "mgmt",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A nurse receives shift report on four patients. Which patient should the nurse plan to see first?",
    "opts": [
      "A patient with pneumonia whose oxygen saturation is 94% on 2 L nasal cannula.",
      "A postoperative patient whose dressing has a small amount of dry, dark drainage.",
      "A patient with a new prescription for a blood transfusion scheduled later this shift.",
      "A patient reporting a sudden severe headache described as the worst of their life."
    ],
    "key": 3,
    "rationale": "A sudden severe headache described as the worst of one's life is a red flag for a subarachnoid hemorrhage and requires immediate assessment. The pneumonia patient (A) is stable on low-flow oxygen, the dry dark drainage (B) is old and expected, and the transfusion (C) is scheduled later and not yet urgent.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK442010/",
      "https://medlineplus.gov/ency/article/000701.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0039",
    "type": "mc",
    "cat": "pharm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient is started on oral prednisone for an autoimmune flare. Which instruction should the nurse emphasize?",
    "opts": [
      "Stop the medication abruptly once symptoms improve.",
      "Take the dose on an empty stomach at bedtime.",
      "Do not stop the medication suddenly; the dose must be tapered.",
      "Limit fluid intake to prevent dilution of the drug."
    ],
    "key": 2,
    "rationale": "Long-term or moderate-course corticosteroids suppress the adrenal axis; stopping abruptly can precipitate an adrenal crisis, so the dose must be tapered. Prednisone should be taken with food to reduce GI upset (not empty stomach at bedtime, B), and fluid restriction (D) is not indicated.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a601102.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK534809/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0040",
    "type": "mc",
    "cat": "pharm",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A patient receiving IV vancomycin develops flushing and an erythematous rash over the face and upper torso midway through a rapid infusion. What is the nurse's priority action?",
    "opts": [
      "Stop the infusion and prepare to restart it at a slower rate as prescribed.",
      "Administer the patient's next scheduled dose of an opioid analgesic.",
      "Continue the infusion and document the expected allergic response.",
      "Increase the infusion rate to finish the dose quickly and limit exposure."
    ],
    "key": 0,
    "rationale": "Flushing and rash of the face and upper body during rapid vancomycin infusion is vancomycin infusion reaction (formerly 'red man syndrome'), a rate-related histamine release, not a true allergy. The priority is to stop the infusion and restart it more slowly as prescribed. Continuing (C) or speeding up (D) worsens the reaction.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a604038.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK459263/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0041",
    "type": "sata",
    "cat": "risk",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient immediately after a cardiac catheterization via the right femoral artery. Which assessment findings require immediate follow-up? Select all that apply.",
    "opts": [
      "Diminished right pedal pulse compared to the left",
      "A rapidly enlarging hematoma at the insertion site",
      "Report of mild discomfort at the insertion site",
      "Cool, pale right foot with delayed capillary refill",
      "Blood pressure 118/74 and heart rate 76",
      "Complaint of the urge to void"
    ],
    "key": [
      0,
      1,
      3
    ],
    "rationale": "After femoral cardiac cath, a diminished pedal pulse, a rapidly enlarging hematoma, and a cool pale foot with delayed refill all signal arterial compromise or bleeding and require immediate follow-up. Mild insertion-site discomfort (C), normal vitals (E), and the urge to void (F) are expected and not emergent.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK534803/",
      "https://medlineplus.gov/ency/article/003419.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0042",
    "type": "mc",
    "cat": "risk",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient is scheduled for a paracentesis to relieve tense ascites. Which nursing action is the priority immediately before the procedure?",
    "opts": [
      "Ensure the patient has an empty bladder.",
      "Place the patient flat in a supine position.",
      "Restrict the patient's oral fluids for 12 hours.",
      "Administer a routine cleansing enema."
    ],
    "key": 0,
    "rationale": "Before a paracentesis, the patient should void (or be catheterized) to empty the bladder, which lowers the risk of accidental bladder puncture when the abdominal needle is inserted. The patient is positioned upright or with the head elevated (not flat, B); prolonged fluid restriction (C) and an enema (D) are not indicated.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK441861/",
      "https://medlineplus.gov/ency/article/003896.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0043",
    "type": "mc",
    "cat": "physio",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient with chronic obstructive pulmonary disease has an oxygen saturation of 89% and is receiving oxygen at 2 L/min via nasal cannula. The patient remains dyspneic. What is the nurse's best initial action?",
    "opts": [
      "Immediately increase the oxygen to 6 L/min via nasal cannula.",
      "Assess the patient and raise the head of the bed to a high-Fowler's position.",
      "Discontinue the oxygen to prevent suppressing the respiratory drive.",
      "Place the patient flat and encourage rapid, deep breaths."
    ],
    "key": 1,
    "rationale": "For a dyspneic COPD patient, the nurse first assesses and optimizes positioning; high-Fowler's improves lung expansion and eases work of breathing. An SpO2 of 89% is acceptable in COPD, so aggressively increasing oxygen to 6 L (A) risks blunting the hypoxic drive, and discontinuing oxygen (C) or lying flat (D) worsens hypoxemia.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK559281/",
      "https://medlineplus.gov/ency/article/000091.htm"
    ],
    "cond": "copd"
  },
  {
    "id": "nclex-0044",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is about to administer a medication and finds the patient's identification wristband is missing. What is the nurse's best action?",
    "opts": [
      "Administer the medication since the nurse recognizes the patient.",
      "Ask the patient's roommate to confirm the patient's identity.",
      "Verify identity using two identifiers and replace the wristband before administering.",
      "Administer the medication and apply a new wristband afterward."
    ],
    "key": 2,
    "rationale": "Safe practice requires two patient identifiers (e.g., name and date of birth) before medication administration. With the band missing, the nurse verifies identity by two approved identifiers and replaces the band before giving the drug. Relying on recognition (A), a roommate (B), or giving first and banding later (D) all risk a wrong-patient error.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK493222/",
      "https://www.cdc.gov/patient-safety/index.html"
    ],
    "cond": null
  },
  {
    "id": "nclex-0045",
    "type": "mc",
    "cat": "hpm",
    "diff": 1,
    "caseId": null,
    "step": null,
    "stem": "A nurse is teaching a pregnant patient at her first prenatal visit about recommended weight gain and nutrition. Which nutrient is most important to prevent neural tube defects in the developing fetus?",
    "opts": [
      "Vitamin C",
      "Folic acid",
      "Vitamin D",
      "Calcium"
    ],
    "key": 1,
    "rationale": "Adequate folic acid (folate) intake before and during early pregnancy is essential to prevent neural tube defects such as spina bifida, which is why 400 to 800 mcg daily is recommended. Vitamin C, vitamin D, and calcium are important in pregnancy but do not specifically prevent neural tube defects.",
    "src": [
      "https://www.cdc.gov/folic-acid/about/index.html",
      "https://medlineplus.gov/ency/article/002408.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0046",
    "type": "numeric",
    "cat": "pharm",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A patient is prescribed dopamine at 5 mcg/kg/min. The patient weighs 80 kg. The bag is labeled dopamine 400 mg in 250 mL D5W. At how many mL/hour should the nurse set the infusion pump? (Round to the nearest whole number.)",
    "numeric": {
      "answer": 15,
      "unit": "mL/hour",
      "tol": 1
    },
    "rationale": "Dose = 5 mcg/kg/min x 80 kg = 400 mcg/min = 24,000 mcg/hr = 24 mg/hr. Concentration = 400 mg / 250 mL = 1.6 mg/mL. Rate = 24 mg/hr divided by 1.6 mg/mL = 15 mL/hour.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682059.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK470392/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0047",
    "type": "mc",
    "cat": "psych",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient with generalized anxiety disorder is admitted for a medical procedure and begins hyperventilating, stating, \"I can't catch my breath, something terrible is going to happen.\" What is the nurse's best initial response?",
    "opts": [
      "\"There is nothing to be afraid of; this is a routine procedure.\"",
      "Stay with the patient and guide them to take slow, controlled breaths.",
      "Leave the room to let the patient calm down independently.",
      "Explain the full risks and complications of the procedure in detail."
    ],
    "key": 1,
    "rationale": "During acute anxiety with hyperventilation, the nurse should stay with the patient and coach slow, controlled breathing; a calm presence and reduced stimulation help restore control. Dismissing the fear (A), leaving (C), or detailing risks during peak anxiety (D) escalate distress.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK441870/",
      "https://medlineplus.gov/ency/article/000917.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0048",
    "type": "mc",
    "cat": "psych",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient experiencing an acute manic episode of bipolar disorder is hyperactive, intrusive, and unable to sit through meals. Which nursing intervention best supports this patient's nutrition?",
    "opts": [
      "Serve three large, balanced meals in the crowded dining room.",
      "Provide high-calorie finger foods and fluids the patient can eat while moving.",
      "Withhold food until the patient agrees to sit and eat calmly.",
      "Offer caffeinated beverages to sustain the patient's energy."
    ],
    "key": 1,
    "rationale": "A patient in acute mania cannot sit still long enough to complete a meal, so high-calorie finger foods and portable fluids meet nutritional needs without requiring the patient to remain seated. Large meals in a stimulating dining room (A), withholding food (C), and caffeine (D) all work against the patient's needs.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK558998/",
      "https://medlineplus.gov/ency/article/000926.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0049",
    "type": "mc",
    "cat": "psych",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient with anorexia nervosa who is being refed after a period of severe restriction. Which laboratory finding is the priority to monitor for refeeding syndrome?",
    "opts": [
      "Serum phosphate",
      "Serum chloride",
      "Serum bicarbonate",
      "Serum albumin"
    ],
    "key": 0,
    "rationale": "Refeeding syndrome causes a dangerous intracellular shift of phosphate as carbohydrate intake resumes, producing severe hypophosphatemia that can cause cardiac failure and death, so serum phosphate is the priority to monitor (along with potassium and magnesium). Chloride, bicarbonate, and albumin are not the hallmark refeeding derangements.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK564513/",
      "https://medlineplus.gov/ency/article/000362.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0050",
    "type": "mc",
    "cat": "basic",
    "diff": 1,
    "caseId": null,
    "step": null,
    "stem": "A nurse is assisting a patient who is at risk for aspiration with eating. Which intervention best reduces the aspiration risk during meals?",
    "opts": [
      "Position the patient in high-Fowler's (upright) position while eating.",
      "Have the patient lie back at a 30-degree angle to relax the throat.",
      "Encourage the patient to tilt the head backward with each swallow.",
      "Offer thin liquids frequently to help wash food down quickly."
    ],
    "key": 0,
    "rationale": "Sitting upright in high-Fowler's uses gravity to help direct food to the stomach and protects the airway, reducing aspiration risk. Reclining (B) and head-tilt-back (C) open the airway to food, and thin liquids (D) are often the hardest to control for patients with dysphagia.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK563096/",
      "https://medlineplus.gov/ency/patientinstructions/000056.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0051",
    "type": "mc",
    "cat": "basic",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for an immobile patient to prevent pressure injuries. Which intervention is most effective?",
    "opts": [
      "Reposition the patient at least every 2 hours and keep skin clean and dry.",
      "Massage reddened bony prominences vigorously to improve circulation.",
      "Keep the head of the bed elevated above 45 degrees continuously.",
      "Use a doughnut-shaped ring cushion under the sacrum."
    ],
    "key": 0,
    "rationale": "Repositioning at least every 2 hours relieves prolonged pressure over bony prominences, and keeping skin clean and dry protects tissue integrity, making this the most effective prevention. Massaging reddened areas (B) can damage tissue, high head elevation (C) increases shear, and doughnut cushions (D) concentrate pressure and are not recommended.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK553107/",
      "https://medlineplus.gov/ency/patientinstructions/000147.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0052",
    "type": "mc",
    "cat": "basic",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient reports constipation. After assessment, which nurse-initiated intervention should be tried first, assuming no contraindications?",
    "opts": [
      "Administer a prescribed PRN stimulant laxative immediately.",
      "Increase dietary fiber and fluid intake and encourage activity.",
      "Prepare to administer a cleansing enema.",
      "Request a prescription for manual disimpaction."
    ],
    "key": 1,
    "rationale": "The first-line, least invasive approach to constipation is to increase dietary fiber and fluids and encourage physical activity, which promote normal bowel motility. Laxatives (A) and enemas (C) come after lifestyle measures, and manual disimpaction (D) is reserved for confirmed impaction.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK513291/",
      "https://medlineplus.gov/ency/article/003125.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0053",
    "type": "mc",
    "cat": "hpm",
    "diff": 1,
    "caseId": null,
    "step": null,
    "stem": "A nurse is teaching new parents about safe sleep to reduce the risk of sudden infant death syndrome (SIDS). Which instruction is correct?",
    "opts": [
      "Place the infant to sleep on the back on a firm, flat surface.",
      "Position the infant on the stomach to prevent choking.",
      "Use soft pillows and bumper pads for comfort in the crib.",
      "Have the infant sleep in the parents' bed for closer monitoring."
    ],
    "key": 0,
    "rationale": "Infants should always be placed on their back to sleep on a firm, flat surface, the single most effective way to reduce SIDS risk. Stomach positioning (B), soft bedding and bumpers (C), and bed-sharing (D) all increase the risk of SIDS and suffocation.",
    "src": [
      "https://www.cdc.gov/sudden-infant-death/about/index.html",
      "https://medlineplus.gov/ency/article/001566.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0054",
    "type": "mc",
    "cat": "hpm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is performing a developmental assessment on a 12-month-old at a well-child visit. Which gross motor milestone is typically expected at this age?",
    "opts": [
      "Pulling to a stand and possibly taking first independent steps.",
      "Running steadily and climbing stairs with alternating feet.",
      "Sitting without support for the first time.",
      "Rolling from back to front for the first time."
    ],
    "key": 0,
    "rationale": "At about 12 months, infants typically pull to stand, cruise along furniture, and may take first independent steps. Running and alternating-foot stair climbing (B) are toddler/preschool skills; sitting unsupported (C) and rolling back-to-front (D) are earlier milestones achieved around 6 months.",
    "src": [
      "https://www.cdc.gov/ncbddd/actearly/milestones/milestones-1yr.html",
      "https://medlineplus.gov/ency/article/002367.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0055",
    "type": "cloze",
    "cat": "hpm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "Complete the immunization teaching. The nurse explains that the first dose of the [1] vaccine is given at birth, and that the MMR vaccine is first given at [2] of age.",
    "blanks": [
      {
        "label": "1",
        "opts": [
          "hepatitis B",
          "influenza",
          "varicella"
        ],
        "key": 0
      },
      {
        "label": "2",
        "opts": [
          "2 months",
          "6 months",
          "12 to 15 months"
        ],
        "key": 2
      }
    ],
    "rationale": "The hepatitis B vaccine series begins with a dose at birth. The MMR (measles-mumps-rubella) vaccine is first given at 12 to 15 months, as maternal antibodies interfere with earlier response. Influenza is given annually starting at 6 months, and varicella is also first given at 12 to 15 months.",
    "src": [
      "https://www.cdc.gov/vaccines/hcp/imz-schedules/child-adolescent-age.html",
      "https://medlineplus.gov/ency/article/002024.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0056",
    "type": "mc",
    "cat": "pharm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient taking an ACE inhibitor (lisinopril) for hypertension reports a persistent dry cough. What is the nurse's most appropriate response?",
    "opts": [
      "\"This is a known side effect; I will notify your provider, who may switch your medication.\"",
      "\"Continue taking the medication; the cough is not related to it.\"",
      "\"Stop the medication immediately and do not take any more doses.\"",
      "\"Take an over-the-counter cough suppressant and ignore the cough.\""
    ],
    "key": 0,
    "rationale": "A persistent dry cough is a well-known ACE inhibitor side effect caused by bradykinin accumulation; the appropriate action is to notify the provider, who may switch the patient to an ARB. The cough is drug-related (B is wrong), the patient should not abruptly self-discontinue antihypertensives without guidance (C), and masking it (D) ignores the cause.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a692051.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK430896/"
    ],
    "cond": "htn"
  },
  {
    "id": "nclex-0057",
    "type": "sata",
    "cat": "physio",
    "diff": 2,
    "caseId": "case-sepsis-01",
    "step": 1,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "0800: 72-year-old admitted from home 2 days ago with a urinary tract infection. Family reports increasing confusion since last night. Skin warm and flushed. Patient drowsy but rousable, oriented to self only."
        },
        {
          "t": "Vitals",
          "body": "0800: Temp 38.9 C (102.0 F), HR 112, RR 24, BP 98/56, SpO2 93% on room air."
        },
        {
          "t": "Labs",
          "body": "0800: WBC 17.5 x10^9/L, lactate 2.6 mmol/L, creatinine 1.4 mg/dL."
        },
        {
          "t": "Orders",
          "body": "Indwelling urinary catheter present. IV 0.9% saline at 75 mL/hr. Acetaminophen PRN fever."
        }
      ]
    },
    "stem": "STEP 1 - Recognize cues. The nurse reviews the chart on this patient admitted for a UTI. Which findings are cues that the patient may be developing sepsis? Select all that apply.",
    "opts": [
      "New confusion, oriented to self only",
      "Temperature 38.9 C (102.0 F)",
      "Heart rate 112 and respiratory rate 24",
      "Blood pressure 98/56 mmHg",
      "Elevated WBC 17.5 and lactate 2.6",
      "Presence of an indwelling urinary catheter as the only concern"
    ],
    "key": [
      0,
      1,
      2,
      3,
      4
    ],
    "rationale": "Sepsis cues here include new-onset confusion (altered mentation), fever, tachycardia with tachypnea, borderline-low blood pressure, and elevated WBC and lactate signaling infection with early hypoperfusion. The catheter is a source/risk factor but, by itself framed as 'the only concern' (F), is not the cue of deterioration; the systemic signs are.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK547669/",
      "https://medlineplus.gov/ency/article/000666.htm"
    ],
    "cond": "sepsis"
  },
  {
    "id": "nclex-0058",
    "type": "mc",
    "cat": "physio",
    "diff": 3,
    "caseId": "case-sepsis-01",
    "step": 2,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "0815: Provider notified of vital signs and confusion. Sepsis screening positive. Blood cultures x2 drawn. Patient remains drowsy."
        },
        {
          "t": "Vitals",
          "body": "0815: Temp 38.9 C, HR 116, RR 26, BP 94/54, SpO2 92% on room air."
        },
        {
          "t": "Labs",
          "body": "0800: WBC 17.5, lactate 2.6 mmol/L, creatinine 1.4 mg/dL. Cultures pending."
        },
        {
          "t": "Orders",
          "body": "New: obtain blood cultures x2 (done), start broad-spectrum IV antibiotics, lactate to be rechecked, 30 mL/kg isotonic fluid bolus."
        }
      ]
    },
    "stem": "STEP 2 - Analyze cues. Based on the data, the nurse determines the patient's condition is most consistent with which problem?",
    "opts": [
      "Sepsis with early tissue hypoperfusion.",
      "An isolated, uncomplicated urinary tract infection.",
      "Cardiogenic shock from acute heart failure.",
      "A localized allergic reaction to the antibiotic."
    ],
    "key": 0,
    "rationale": "Infection (UTI) plus systemic signs - fever, tachycardia, tachypnea, hypotension, altered mentation, and an elevated lactate - indicate sepsis with early hypoperfusion, not an isolated UTI (B). There is no pump failure history for cardiogenic shock (C), and antibiotics were only just started, so an allergic reaction (D) does not fit.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK547669/",
      "https://medlineplus.gov/ency/article/000666.htm"
    ],
    "cond": "sepsis"
  },
  {
    "id": "nclex-0059",
    "type": "mc",
    "cat": "mgmt",
    "diff": 3,
    "caseId": "case-sepsis-01",
    "step": 3,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "0830: Patient increasingly drowsy. Multiple new orders received. Nurse prioritizing the sepsis bundle."
        },
        {
          "t": "Vitals",
          "body": "0830: Temp 38.9 C, HR 118, RR 26, BP 92/52, SpO2 92% on room air."
        },
        {
          "t": "Labs",
          "body": "0800: lactate 2.6 mmol/L. Repeat lactate ordered."
        },
        {
          "t": "Orders",
          "body": "IV broad-spectrum antibiotics, 30 mL/kg isotonic bolus, repeat lactate, blood cultures (drawn), acetaminophen for fever."
        }
      ]
    },
    "stem": "STEP 3 - Prioritize hypotheses / actions. Cultures are already drawn. Which intervention should the nurse prioritize next to address the greatest threat?",
    "opts": [
      "Administer the acetaminophen for the fever.",
      "Administer the prescribed broad-spectrum IV antibiotics and begin the fluid bolus.",
      "Send the patient for a non-urgent renal ultrasound.",
      "Reposition the patient and provide oral care."
    ],
    "key": 1,
    "rationale": "In the sepsis bundle, after cultures are drawn, early antibiotics and fluid resuscitation for hypoperfusion are the highest priority and are time-critical to survival. Antipyretics (A), a non-urgent scan (C), and comfort measures (D) do not address the life threat of progressing sepsis.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK547669/",
      "https://www.cdc.gov/sepsis/about/index.html"
    ],
    "cond": "sepsis"
  },
  {
    "id": "nclex-0060",
    "type": "selectN",
    "cat": "mgmt",
    "diff": 3,
    "caseId": "case-sepsis-01",
    "step": 4,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "0900: Antibiotics infusing. First fluid bolus in progress. Nurse planning ongoing monitoring during resuscitation."
        },
        {
          "t": "Vitals",
          "body": "0900: HR 114, RR 24, BP 96/58 after partial bolus, SpO2 94% on 2 L nasal cannula."
        },
        {
          "t": "Labs",
          "body": "Repeat lactate pending."
        },
        {
          "t": "Orders",
          "body": "Titrate oxygen to SpO2 >= 94%. Monitor urine output hourly. Recheck lactate after resuscitation. Reassess perfusion."
        }
      ]
    },
    "stem": "STEP 4 - Generate solutions. Choose the 3 monitoring priorities the nurse should implement during fluid resuscitation.",
    "opts": [
      "Monitor hourly urine output as a marker of perfusion",
      "Reassess blood pressure and mental status frequently",
      "Recheck the serum lactate after the fluid bolus",
      "Restrict all IV fluids to prevent overload",
      "Discontinue oxygen once SpO2 reaches 90%",
      "Delay reassessment until the next scheduled shift check"
    ],
    "n": 3,
    "key": [
      0,
      1,
      2
    ],
    "rationale": "During sepsis resuscitation, the nurse monitors urine output (perfusion), blood pressure and mental status (response to therapy), and a repeat lactate (clearance indicates improving perfusion). Restricting ordered fluids (D), stopping oxygen at 90% (E, below the >=94% goal), and delaying reassessment (F) are unsafe.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK547669/",
      "https://www.cdc.gov/sepsis/about/index.html"
    ],
    "cond": "sepsis"
  },
  {
    "id": "nclex-0061",
    "type": "mc",
    "cat": "physio",
    "diff": 3,
    "caseId": "case-sepsis-01",
    "step": 5,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1000: Patient received 30 mL/kg fluid and antibiotics. Nurse reassessing response to interventions."
        },
        {
          "t": "Vitals",
          "body": "1000: HR 98, RR 20, BP 112/68, SpO2 96% on 2 L nasal cannula, Temp 37.8 C."
        },
        {
          "t": "Labs",
          "body": "1000: repeat lactate 1.4 mmol/L (down from 2.6). Urine output 45 mL last hour."
        },
        {
          "t": "Orders",
          "body": "Continue antibiotics. Maintenance IV fluids. Continue hourly monitoring."
        }
      ]
    },
    "stem": "STEP 5 - Take action / evaluate response. Which finding best indicates the patient is responding positively to the sepsis interventions?",
    "opts": [
      "Lactate decreased to 1.4 mmol/L with improved blood pressure and urine output.",
      "Heart rate remains above 110 with continued hypotension.",
      "Urine output has fallen to 10 mL over the past hour.",
      "The patient has become unresponsive to verbal stimuli."
    ],
    "key": 0,
    "rationale": "A falling lactate (2.6 to 1.4), normalizing blood pressure, slower heart rate, and adequate urine output (45 mL/hr) all indicate improved perfusion and a positive response to resuscitation. Persistent tachycardia/hypotension (B), oliguria (C), and decreasing responsiveness (D) would indicate worsening sepsis.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK547669/",
      "https://medlineplus.gov/ency/article/000666.htm"
    ],
    "cond": "sepsis"
  },
  {
    "id": "nclex-0062",
    "type": "bowtie",
    "cat": "physio",
    "diff": 3,
    "caseId": "case-sepsis-01",
    "step": 6,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1030: Patient stabilizing. Nurse completing a summary of the clinical picture and ongoing plan."
        },
        {
          "t": "Vitals",
          "body": "1030: HR 96, RR 19, BP 114/70, SpO2 96% on 2 L, Temp 37.6 C."
        },
        {
          "t": "Labs",
          "body": "lactate 1.4 mmol/L, WBC 16.0 (trending down), creatinine 1.3 mg/dL."
        },
        {
          "t": "Orders",
          "body": "Continue IV antibiotics, maintenance fluids, hourly perfusion checks, urine output monitoring."
        }
      ]
    },
    "stem": "STEP 6 - Evaluate outcomes (bowtie). Complete the bowtie: select the 2 actions to continue, the 1 condition the patient is experiencing, and the 2 parameters to monitor.",
    "bowtie": {
      "actions": [
        "Continue IV antibiotic therapy as prescribed",
        "Continue fluid and perfusion monitoring",
        "Discontinue all IV fluids immediately",
        "Place the patient in strict airborne isolation"
      ],
      "conds": [
        "Sepsis from a urinary source",
        "Anaphylaxis",
        "Acute myocardial infarction"
      ],
      "params": [
        "Serum lactate and urine output",
        "Blood pressure and mental status",
        "Daily weight only",
        "Serum amylase and lipase"
      ],
      "keyA": [
        0,
        1
      ],
      "keyC": 0,
      "keyP": [
        0,
        1
      ]
    },
    "rationale": "The patient has sepsis from a urinary source. The two actions to continue are ongoing antibiotic therapy and fluid/perfusion monitoring; stopping fluids (action index 2) or airborne isolation (index 3) are wrong. The two parameters that best track sepsis response are lactate with urine output and blood pressure with mental status; daily weight alone and amylase/lipase do not monitor this condition.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK547669/",
      "https://www.cdc.gov/sepsis/about/index.html"
    ],
    "cond": "sepsis"
  },
  {
    "id": "nclex-0063",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is preparing to delegate tasks at the start of the shift. Which task can the nurse appropriately delegate to unlicensed assistive personnel (UAP)?",
    "opts": [
      "Assisting a stable patient with a bed bath and recording intake and output.",
      "Evaluating whether a patient's pain has responded to medication.",
      "Teaching a patient how to use an incentive spirometer for the first time.",
      "Assessing the lung sounds of a patient with new shortness of breath."
    ],
    "key": 0,
    "rationale": "Assisting with hygiene and recording intake and output are routine, standardized tasks within UAP scope. Evaluating pain response (B), first-time teaching (C), and assessing lung sounds (D) all require nursing judgment and cannot be delegated to UAP.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK519519/",
      "https://www.ncsbn.org/public-files/NGN_Winter18.pdf"
    ],
    "cond": null
  },
  {
    "id": "nclex-0064",
    "type": "mc",
    "cat": "mgmt",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A nurse discovers a medication error was made on the previous shift, resulting in a patient receiving a double dose of an antihypertensive. What is the nurse's first action?",
    "opts": [
      "Assess the patient's current vital signs and clinical status.",
      "Complete an incident report before doing anything else.",
      "Notify the nurse who made the error on the previous shift.",
      "Wait to see whether the patient develops any symptoms."
    ],
    "key": 0,
    "rationale": "The nurse's first priority after discovering a medication error is patient safety: assess the patient's vital signs and clinical status to detect and respond to harm (e.g., hypotension). Notifying the provider and completing an incident report (B) follow, but assessment comes first; blaming the prior nurse (C) or waiting passively (D) is inappropriate.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK519065/",
      "https://www.cdc.gov/patient-safety/index.html"
    ],
    "cond": null
  },
  {
    "id": "nclex-0065",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "During a mass-casualty triage event, a nurse must categorize patients. Using standard triage, which patient should receive care first?",
    "opts": [
      "A patient with an open airway obstruction who is not breathing effectively.",
      "A patient with a closed femur fracture who is alert and stable.",
      "A patient with fixed, dilated pupils and no spontaneous respirations after airway repositioning.",
      "A patient with minor lacerations who is walking and talking."
    ],
    "key": 0,
    "rationale": "In triage, immediate (red) priority goes to those with life-threatening but survivable problems, such as a correctable airway obstruction. A stable fracture (B) is delayed, a patient with no respirations after airway opening (C) is categorized as expectant/deceased in mass-casualty triage, and the walking-wounded (D) are minor.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK459369/",
      "https://www.cdc.gov/mass-casualty/hcp/triage/index.html"
    ],
    "cond": null
  },
  {
    "id": "nclex-0066",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is obtaining informed consent signatures. Which situation requires the nurse to stop and notify the provider before the patient signs?",
    "opts": [
      "The patient states they do not understand the risks and alternatives of the surgery.",
      "The patient asks the nurse for a pen to sign the consent form.",
      "The patient's adult child is present in the room during the discussion.",
      "The patient expresses normal preoperative nervousness about the surgery."
    ],
    "key": 0,
    "rationale": "Informed consent requires the patient to understand the procedure, risks, benefits, and alternatives. If the patient does not understand, the nurse must stop and notify the provider, whose duty it is to explain, before any signature. Wanting a pen (B), family presence (C), and ordinary nervousness (D) do not invalidate consent.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK430827/",
      "https://medlineplus.gov/ency/patientinstructions/000445.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0067",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient who is receiving oxygen therapy at home. Which safety instruction is essential to prevent injury?",
    "opts": [
      "Keep the oxygen and tubing at least 6 feet away from any open flame or heat source.",
      "Store the oxygen tank lying flat on the floor near the stove.",
      "Apply petroleum jelly to the nares to relieve dryness.",
      "Smoking is acceptable as long as the oxygen flow rate is low."
    ],
    "key": 0,
    "rationale": "Oxygen supports combustion, so equipment must be kept well away (at least 6 feet) from open flames and heat sources. Storing a tank near a stove (B) is a fire hazard, petroleum-based products near oxygen (C) are flammable and should be avoided, and smoking is never safe around oxygen (D).",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK551617/",
      "https://medlineplus.gov/ency/patientinstructions/000049.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0068",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient during a seizure. Which action is the priority to maintain patient safety?",
    "opts": [
      "Turn the patient onto their side and protect the head from injury.",
      "Insert a padded tongue blade between the patient's teeth.",
      "Restrain the patient's arms and legs to stop the movements.",
      "Move the patient to a chair to prevent falling out of bed."
    ],
    "key": 0,
    "rationale": "During a seizure, the priority is to protect the airway and prevent injury: turn the patient to the side (to prevent aspiration) and cushion the head. Never insert anything into the mouth (B), do not restrain the limbs (C, which can cause fractures), and do not move the patient to a chair mid-seizure (D).",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK430765/",
      "https://medlineplus.gov/ency/article/003200.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0069",
    "type": "mc",
    "cat": "risk",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is reviewing morning laboratory results. Which result is a critical value that requires immediate provider notification?",
    "opts": [
      "Platelet count of 22,000/microL.",
      "Hemoglobin of 11.8 g/dL.",
      "White blood cell count of 8,500/microL.",
      "Serum sodium of 138 mEq/L."
    ],
    "key": 0,
    "rationale": "A platelet count of 22,000/microL is severe thrombocytopenia (normal 150,000 to 400,000) that carries a high risk of spontaneous bleeding and requires immediate notification and bleeding precautions. Hemoglobin 11.8 (B), WBC 8,500 (C), and sodium 138 (D) are near-normal.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK542208/",
      "https://medlineplus.gov/ency/article/003647.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0070",
    "type": "mc",
    "cat": "risk",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A patient is scheduled for a contrast-enhanced CT scan with iodinated contrast. Which pre-procedure laboratory value is most important for the nurse to review?",
    "opts": [
      "Serum creatinine and estimated glomerular filtration rate (eGFR).",
      "Serum potassium and chloride.",
      "White blood cell count and differential.",
      "Serum albumin and total protein."
    ],
    "key": 0,
    "rationale": "Iodinated contrast can cause contrast-induced nephropathy, so renal function (serum creatinine and eGFR) must be checked before the scan to identify patients at risk. Electrolytes (B), WBC (C), and protein (D) are not the primary safety screen for contrast administration.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK448066/",
      "https://medlineplus.gov/ency/article/003330.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0071",
    "type": "mc",
    "cat": "risk",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is monitoring a patient receiving a unit of packed red blood cells. Fifteen minutes into the transfusion, the patient reports chills, low back pain, and a feeling of apprehension. What is the nurse's first action?",
    "opts": [
      "Stop the transfusion immediately and keep the IV line open with normal saline.",
      "Slow the transfusion rate and continue to monitor the patient.",
      "Administer an antipyretic and continue the transfusion.",
      "Elevate the head of the bed and reassess in 30 minutes."
    ],
    "key": 0,
    "rationale": "Chills, low back pain, and apprehension early in a transfusion suggest an acute hemolytic transfusion reaction. The first action is to stop the transfusion immediately and maintain IV access with normal saline (via new tubing), then notify the provider and blood bank. Slowing (B), medicating and continuing (C), or delaying (D) can be fatal.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK574536/",
      "https://medlineplus.gov/ency/article/000554.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0072",
    "type": "mc",
    "cat": "pharm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient is prescribed digoxin for heart failure. Before administering the morning dose, the nurse notes the apical heart rate is 52 beats per minute. What is the nurse's best action?",
    "opts": [
      "Hold the dose and notify the provider of the bradycardia.",
      "Administer the dose as scheduled since the rhythm is regular.",
      "Administer half the prescribed dose to be cautious.",
      "Give the dose and recheck the heart rate in one hour."
    ],
    "key": 0,
    "rationale": "Digoxin slows the heart rate; the standard parameter is to hold the dose and notify the provider if the apical pulse is below 60 beats per minute in an adult, because giving it could worsen bradycardia and signal toxicity. Administering full (B) or partial (C) doses or giving and rechecking later (D) is unsafe.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682301.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK556025/"
    ],
    "cond": "chf"
  },
  {
    "id": "nclex-0073",
    "type": "mc",
    "cat": "pharm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient is prescribed metformin for type 2 diabetes and is scheduled for a contrast-enhanced imaging study. Which instruction should the nurse reinforce?",
    "opts": [
      "Metformin should be withheld at the time of the contrast study as directed by the provider.",
      "Double the metformin dose on the day of the study.",
      "Take metformin with a large carbohydrate meal before the study.",
      "Metformin has no interaction with contrast and requires no change."
    ],
    "key": 0,
    "rationale": "Metformin is withheld around the time of iodinated contrast studies in at-risk patients because contrast-related kidney injury can lead to metformin accumulation and lactic acidosis. Doubling (B), taking with carbs (C), or ignoring the interaction (D) is unsafe.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a696005.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK518983/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0074",
    "type": "mc",
    "cat": "pharm",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A patient is receiving IV phenytoin for status epilepticus. Which action is essential when administering this medication IV?",
    "opts": [
      "Administer it slowly and only with normal saline, monitoring the ECG and blood pressure.",
      "Mix it in dextrose 5% in water and infuse rapidly.",
      "Administer it as a fast IV push to stop seizures quickly.",
      "Infuse it through the same line as a continuous dopamine drip."
    ],
    "key": 0,
    "rationale": "IV phenytoin must be given slowly (rate-limited) with normal saline (it precipitates in dextrose) while monitoring the ECG and blood pressure for bradycardia and hypotension. Mixing in dextrose (B), rapid push (C), and co-infusing with incompatible drugs (D) are dangerous.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682022.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK482444/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0075",
    "type": "mc",
    "cat": "pharm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient taking a nonselective beta-blocker (propranolol) also has a history of asthma. Which assessment is most important for the nurse to monitor?",
    "opts": [
      "Lung sounds for wheezing and signs of bronchospasm.",
      "Deep tendon reflexes for hyperreflexia.",
      "Skin turgor for signs of dehydration.",
      "Pupil size for signs of constriction."
    ],
    "key": 0,
    "rationale": "Nonselective beta-blockers block beta-2 receptors in the airways and can trigger bronchospasm, so the nurse must monitor lung sounds for wheezing in a patient with asthma. Deep tendon reflexes (B), skin turgor (C), and pupil size (D) are not the primary concern with this drug-disease interaction.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682607.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK534841/"
    ],
    "cond": "asthma"
  },
  {
    "id": "nclex-0076",
    "type": "sata",
    "cat": "pharm",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A patient is being discharged on warfarin. Which statements indicate the patient understands safe use? Select all that apply.",
    "opts": [
      "\"I will use a soft toothbrush and an electric razor.\"",
      "\"I will keep my scheduled lab appointments to check my INR.\"",
      "\"I will take a double dose if I miss one to catch up.\"",
      "\"I will tell any new provider or dentist that I take a blood thinner.\"",
      "\"I will watch for unusual bruising, blood in my urine, or black stools.\"",
      "\"I will start taking daily aspirin as well for extra protection.\""
    ],
    "key": [
      0,
      1,
      3,
      4
    ],
    "rationale": "Safe warfarin use includes bleeding precautions (soft toothbrush, electric razor), keeping INR lab appointments, informing all providers, and watching for bleeding signs. Doubling a missed dose (C) risks over-anticoagulation, and adding aspirin (F) compounds bleeding risk and should not be done without provider direction.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682277.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK470313/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0077",
    "type": "mc",
    "cat": "pharm",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A patient with an opioid overdose receives naloxone and responds, but 45 minutes later becomes drowsy and bradypneic again. What is the best explanation for this?",
    "opts": [
      "Naloxone has a shorter duration of action than many opioids, so effects can recur.",
      "The patient received an overdose of naloxone.",
      "Naloxone caused a delayed allergic reaction.",
      "The patient has developed permanent tolerance to naloxone."
    ],
    "key": 0,
    "rationale": "Naloxone has a relatively short half-life compared with many opioids, so as it wears off the patient can re-sedate and require repeat dosing or an infusion with continued monitoring. It is not a naloxone overdose (B), an allergy (C), or tolerance (D) that explains the recurrence.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a685039.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK441910/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0078",
    "type": "mc",
    "cat": "pharm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient is prescribed a fentanyl transdermal patch for chronic cancer pain. Which instruction is most important for safety?",
    "opts": [
      "Avoid external heat sources over the patch, such as heating pads or hot baths.",
      "Cut the patch in half if the pain is mild that day.",
      "Apply a new patch every 4 hours as needed for breakthrough pain.",
      "Place the patch over broken or irritated skin for better absorption."
    ],
    "key": 0,
    "rationale": "External heat increases fentanyl absorption from the patch and can cause a fatal overdose, so heat sources over the patch must be avoided. The patch must never be cut (B), it is typically changed every 72 hours (not every 4 hours, C), and it should be applied to intact, non-irritated skin (D).",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a601202.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK459275/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0079",
    "type": "numeric",
    "cat": "pharm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient is prescribed 1,000 mL of 0.9% normal saline to infuse over 8 hours. The IV tubing has a drop factor of 15 gtt/mL. The nurse should set the manual drip rate to how many drops per minute? (Round to the nearest whole number.)",
    "numeric": {
      "answer": 31,
      "unit": "gtt/min",
      "tol": 1
    },
    "rationale": "Rate = (volume x drop factor) / time in minutes = (1,000 mL x 15 gtt/mL) / (8 x 60 min) = 15,000 / 480 = 31.25, which rounds to 31 gtt/min.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK518998/",
      "https://medlineplus.gov/ency/article/003423.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0080",
    "type": "mc",
    "cat": "pharm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient on a potassium-sparing diuretic (spironolactone) should be taught to avoid which of the following?",
    "opts": [
      "Salt substitutes containing potassium.",
      "Foods high in vitamin C.",
      "Dairy products high in calcium.",
      "Green leafy vegetables high in vitamin K."
    ],
    "key": 0,
    "rationale": "Spironolactone conserves potassium, so combining it with potassium-based salt substitutes can cause dangerous hyperkalemia; the patient should avoid them. Vitamin C (B), calcium (C), and vitamin K (D) are not the concern with this potassium-sparing diuretic.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682627.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK554421/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0081",
    "type": "mc",
    "cat": "physio",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient with type 1 diabetes is found confused and diaphoretic with a capillary blood glucose of 48 mg/dL. The patient is awake and able to swallow. What is the nurse's priority action?",
    "opts": [
      "Give 15 grams of a fast-acting oral carbohydrate, such as juice.",
      "Administer the patient's scheduled dose of long-acting insulin.",
      "Encourage the patient to eat a high-protein meal immediately.",
      "Withhold all food and recheck the glucose in one hour."
    ],
    "key": 0,
    "rationale": "For conscious symptomatic hypoglycemia, the priority is to give about 15 grams of fast-acting carbohydrate (the rule of 15) and recheck in 15 minutes. Giving insulin (B) would deepen hypoglycemia, protein (C) acts too slowly, and withholding treatment (D) is dangerous.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK534841/",
      "https://medlineplus.gov/ency/article/000386.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0082",
    "type": "mc",
    "cat": "physio",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient with Addison's disease (adrenal insufficiency) is at risk for an addisonian crisis. Which finding indicates this life-threatening emergency?",
    "opts": [
      "Severe hypotension, profound weakness, and hyperkalemia.",
      "Hypertension, weight gain, and a round moon face.",
      "Hyperglycemia with polyuria and polydipsia.",
      "Bradycardia with cold intolerance and constipation."
    ],
    "key": 0,
    "rationale": "Addisonian crisis is acute adrenal insufficiency marked by severe hypotension, profound weakness, hyponatremia, and hyperkalemia, requiring emergency IV fluids, corticosteroids, and glucose. Hypertension with moon face (B) describes Cushing's, and choices C and D describe hyperglycemia and hypothyroidism, respectively.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK441994/",
      "https://medlineplus.gov/ency/article/000357.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0083",
    "type": "sata",
    "cat": "physio",
    "diff": 2,
    "caseId": "case-dka-01",
    "step": 1,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1400: 19-year-old with type 1 diabetes brought to ED. Reports 2 days of vomiting, unable to keep insulin schedule. Breathing deep and rapid. Fruity odor on breath noted. Very drowsy."
        },
        {
          "t": "Vitals",
          "body": "1400: Temp 37.2 C, HR 122, RR 30 and deep, BP 96/58, SpO2 98% on room air."
        },
        {
          "t": "Labs",
          "body": "1400: Glucose 512 mg/dL, pH 7.18, bicarbonate 12 mEq/L, potassium 5.6 mEq/L, positive serum ketones."
        },
        {
          "t": "Orders",
          "body": "IV access established. Labs drawn. Cardiac monitor applied."
        }
      ]
    },
    "stem": "STEP 1 - Recognize cues. Which findings are cues consistent with diabetic ketoacidosis (DKA)? Select all that apply.",
    "opts": [
      "Deep, rapid (Kussmaul) respirations",
      "Fruity odor on the breath",
      "Glucose 512 mg/dL with positive serum ketones",
      "pH 7.18 with bicarbonate 12 mEq/L",
      "Blood pressure 96/58 with heart rate 122",
      "SpO2 98% on room air"
    ],
    "key": [
      0,
      1,
      2,
      3,
      4
    ],
    "rationale": "DKA cues include Kussmaul respirations (respiratory compensation for acidosis), fruity (acetone) breath, marked hyperglycemia with ketones, metabolic acidosis (low pH and bicarbonate), and signs of volume depletion (hypotension, tachycardia). A normal SpO2 (F) is not a DKA cue.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK534848/",
      "https://medlineplus.gov/ency/article/000320.htm"
    ],
    "cond": "dka"
  },
  {
    "id": "nclex-0084",
    "type": "mc",
    "cat": "physio",
    "diff": 3,
    "caseId": "case-dka-01",
    "step": 2,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1415: Provider notified. Patient remains drowsy with deep respirations. Nurse analyzing the acid-base and electrolyte picture."
        },
        {
          "t": "Vitals",
          "body": "1415: HR 120, RR 30 deep, BP 94/56, Temp 37.2 C."
        },
        {
          "t": "Labs",
          "body": "Glucose 512, pH 7.18, bicarbonate 12, potassium 5.6, sodium 132, ketones positive."
        },
        {
          "t": "Orders",
          "body": "Begin IV 0.9% normal saline bolus. Insulin infusion to be started. Recheck potassium before and during insulin."
        }
      ]
    },
    "stem": "STEP 2 - Analyze cues. The patient's arterial pH is 7.18 with a bicarbonate of 12. The nurse interprets this as which acid-base disturbance?",
    "opts": [
      "Metabolic acidosis",
      "Metabolic alkalosis",
      "Respiratory acidosis",
      "Respiratory alkalosis"
    ],
    "key": 0,
    "rationale": "A low pH (7.18) with a low bicarbonate (12) indicates metabolic acidosis, here from ketoacid accumulation; the deep Kussmaul breathing is respiratory compensation blowing off CO2. It is not alkalosis (B, D), and the primary problem is metabolic, not respiratory acidosis (C).",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK507807/",
      "https://medlineplus.gov/ency/article/000320.htm"
    ],
    "cond": "dka"
  },
  {
    "id": "nclex-0085",
    "type": "mc",
    "cat": "mgmt",
    "diff": 3,
    "caseId": "case-dka-01",
    "step": 3,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1430: Multiple orders received. Nurse prioritizing initial DKA management."
        },
        {
          "t": "Vitals",
          "body": "1430: HR 120, RR 30, BP 94/56."
        },
        {
          "t": "Labs",
          "body": "Glucose 512, potassium 5.6, pH 7.18."
        },
        {
          "t": "Orders",
          "body": "0.9% normal saline IV bolus, IV insulin infusion, hourly glucose, potassium monitoring, cardiac monitoring."
        }
      ]
    },
    "stem": "STEP 3 - Prioritize hypotheses / actions. Which intervention should the nurse initiate first in the management of DKA?",
    "opts": [
      "Begin the prescribed IV isotonic fluid resuscitation.",
      "Administer IV sodium bicarbonate to correct the pH.",
      "Give the patient a carbohydrate snack to prevent hypoglycemia.",
      "Withhold all potassium replacement indefinitely."
    ],
    "key": 0,
    "rationale": "The first priority in DKA is aggressive IV isotonic fluid resuscitation to restore intravascular volume and perfusion, followed by an insulin infusion. Bicarbonate (B) is reserved for extreme acidosis, a carb snack (C) is inappropriate with glucose 512, and potassium is monitored and replaced as needed (D) because insulin drives potassium into cells.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK534848/",
      "https://medlineplus.gov/ency/article/000320.htm"
    ],
    "cond": "dka"
  },
  {
    "id": "nclex-0086",
    "type": "mc",
    "cat": "risk",
    "diff": 3,
    "caseId": "case-dka-01",
    "step": 4,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1600: Fluids and insulin infusion running for 90 minutes. Patient more alert. Nurse planning to prevent a known complication of insulin therapy in DKA."
        },
        {
          "t": "Vitals",
          "body": "1600: HR 104, RR 22, BP 108/64."
        },
        {
          "t": "Labs",
          "body": "1600: Glucose 288 mg/dL (down from 512), potassium 3.4 mEq/L (down from 5.6), pH 7.28."
        },
        {
          "t": "Orders",
          "body": "Continue insulin infusion. Add potassium to IV fluids per protocol. Recheck potassium hourly. Add dextrose when glucose approaches 200."
        }
      ]
    },
    "stem": "STEP 4 - Generate solutions. As insulin therapy continues, the potassium has dropped to 3.4 mEq/L. Which action should the nurse anticipate to prevent a life-threatening complication?",
    "opts": [
      "Add potassium replacement to the IV fluids as prescribed and continue monitoring.",
      "Stop the insulin infusion permanently to raise potassium.",
      "Administer a potassium-wasting diuretic.",
      "Restrict all IV fluids to concentrate the serum potassium."
    ],
    "key": 0,
    "rationale": "Insulin drives potassium into cells, so during DKA treatment potassium can fall dangerously, risking arrhythmias; the nurse adds potassium replacement to IV fluids per protocol and monitors closely. Permanently stopping insulin (B) would let the acidosis worsen, a diuretic (C) lowers potassium further, and fluid restriction (D) is inappropriate in a volume-depleted patient.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK534848/",
      "https://medlineplus.gov/ency/article/000479.htm"
    ],
    "cond": "dka"
  },
  {
    "id": "nclex-0087",
    "type": "matrixMC",
    "cat": "physio",
    "diff": 3,
    "caseId": "case-dka-01",
    "step": 5,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1800: Patient alert and conversant. Respirations normal. Nurse evaluating trend of therapy."
        },
        {
          "t": "Vitals",
          "body": "1800: HR 88, RR 18, BP 116/70, Temp 37.0 C."
        },
        {
          "t": "Labs",
          "body": "1800: Glucose 196 mg/dL, potassium 4.0 mEq/L, pH 7.35, bicarbonate 20 mEq/L, ketones trace."
        },
        {
          "t": "Orders",
          "body": "Transition toward subcutaneous insulin when criteria met. Continue monitoring. Dextrose added to fluids."
        }
      ]
    },
    "stem": "STEP 5 - Take action / evaluate. For each finding at 1800, indicate whether it shows the DKA is Improving or is a Concern requiring continued attention.",
    "rows": [
      "Glucose decreased from 512 to 196 mg/dL",
      "pH increased from 7.18 to 7.35",
      "Glucose now 196 mg/dL while insulin infusion continues without added dextrose",
      "Serum ketones now only trace",
      "Potassium stabilized at 4.0 mEq/L"
    ],
    "cols": [
      "Improving",
      "Concern"
    ],
    "key": [
      0,
      0,
      1,
      0,
      0
    ],
    "rationale": "Falling glucose, a normalizing pH, clearing ketones, and stable potassium all show improvement. The one concern: with glucose already down to 196 while the insulin infusion continues, dextrose must be added to the fluids to prevent overshoot into hypoglycemia (protocols add dextrose as glucose approaches ~200 mg/dL). Recognizing that a 'good' number can still signal a needed action is the discrimination being tested.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK534848/",
      "https://medlineplus.gov/ency/article/000320.htm"
    ],
    "cond": "dka"
  },
  {
    "id": "nclex-0088",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": "case-dka-01",
    "step": 6,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1830: DKA resolving. Nurse planning discharge teaching to prevent recurrence."
        },
        {
          "t": "Vitals",
          "body": "1830: Stable, within normal limits."
        },
        {
          "t": "Labs",
          "body": "Glucose 180, pH 7.36, ketones trace."
        },
        {
          "t": "Orders",
          "body": "Diabetes educator consult. Sick-day management teaching. Transition to subcutaneous insulin."
        }
      ]
    },
    "stem": "STEP 6 - Evaluate outcomes. Which patient statement indicates correct understanding of preventing future DKA episodes?",
    "opts": [
      "\"When I am sick and can't eat, I should still take my insulin and check my blood sugar and ketones often.\"",
      "\"If I feel sick, I should stop my insulin until I can eat normally again.\"",
      "\"I only need to check my blood sugar when I feel thirsty.\"",
      "\"DKA only happens to people with type 2 diabetes, so I don't need to worry.\""
    ],
    "key": 0,
    "rationale": "During illness (sick days), patients with type 1 diabetes must continue insulin, monitor glucose and ketones frequently, and stay hydrated, because stress hormones raise glucose even when not eating. Stopping insulin when ill (B) is a leading DKA trigger, symptom-only monitoring (C) is inadequate, and DKA is most associated with type 1 diabetes (D).",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK534848/",
      "https://medlineplus.gov/ency/article/000320.htm"
    ],
    "cond": "dka"
  },
  {
    "id": "nclex-0089",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is reviewing a patient's home medications and finds the patient takes several drugs from different providers. Which action best addresses the risk of polypharmacy and adverse interactions?",
    "opts": [
      "Perform medication reconciliation and report the full list to the provider.",
      "Tell the patient to stop the medications that seem unnecessary.",
      "Assume the providers have already coordinated the regimen.",
      "Document the list without further action."
    ],
    "key": 0,
    "rationale": "Medication reconciliation, compiling a complete, accurate list and communicating it to the provider, is the core safety strategy against polypharmacy and interactions. The nurse should not independently discontinue drugs (B), assume coordination (C), or simply file the list without acting (D).",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK551723/",
      "https://www.cdc.gov/patient-safety/index.html"
    ],
    "cond": null
  },
  {
    "id": "nclex-0090",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is preparing to administer a high-alert medication (IV insulin). Which safety practice is required?",
    "opts": [
      "Have a second nurse independently verify the drug, dose, and pump settings.",
      "Administer it quickly to avoid delaying the patient's other care.",
      "Round the dose to the nearest whole unit for convenience.",
      "Skip the double-check if the nurse is experienced with insulin."
    ],
    "key": 0,
    "rationale": "High-alert medications such as IV insulin require an independent double-check by a second nurse of the drug, dose, and pump settings to catch potentially fatal errors. Rushing (B), rounding doses (C), and skipping the check based on experience (D) all defeat the safeguard.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK519065/",
      "https://www.cdc.gov/patient-safety/index.html"
    ],
    "cond": null
  },
  {
    "id": "nclex-0091",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A confused older adult patient keeps trying to climb out of bed and pull at the IV line. Which intervention should the nurse try first before considering any restraint?",
    "opts": [
      "Move the patient closer to the nurses' station and use a bed alarm.",
      "Apply bilateral wrist restraints to prevent the patient from pulling lines.",
      "Sedate the patient with a PRN antipsychotic medication.",
      "Raise all four side rails and leave the patient alone in the room."
    ],
    "key": 0,
    "rationale": "Restraints are a last resort; the nurse should first try the least restrictive measures, such as relocating the patient for closer observation and using a bed alarm, along with addressing the cause of confusion. Physical restraints (B), chemical restraints (C), and four raised side rails (D, considered a restraint) come only after less restrictive options fail.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK565873/",
      "https://medlineplus.gov/ency/article/002356.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0092",
    "type": "mc",
    "cat": "safety",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A nurse notes a strong odor of natural gas while making home visits. What is the nurse's priority action?",
    "opts": [
      "Get the patient out of the home and call for help from outside.",
      "Open windows and search the home for the source of the leak.",
      "Turn on lights to see better while investigating.",
      "Use a cell phone inside the home to photograph the appliances."
    ],
    "key": 0,
    "rationale": "With a suspected gas leak, the priority is to evacuate the patient and nurse and call for help from a safe location outside; any spark can cause an explosion. Searching for the source (B), operating light switches (C), or using electronics inside (D) can ignite the gas.",
    "src": [
      "https://www.cdc.gov/carbon-monoxide/about/index.html",
      "https://medlineplus.gov/ency/article/002804.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0093",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is documenting in the electronic health record. Which entry reflects appropriate documentation practice?",
    "opts": [
      "An objective, factual, and timely note of the assessment and care provided.",
      "A subjective opinion that the patient is 'being difficult and dramatic.'",
      "A note written at the end of the shift covering all patients from memory.",
      "A blank space left in the chart to be filled in later if needed."
    ],
    "key": 0,
    "rationale": "Good documentation is objective, factual, accurate, and timely, reflecting assessments and interventions. Subjective, judgmental language (B), end-of-shift recall documentation (C), and leaving blank spaces (D) are all improper and create legal and safety risks.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK526085/",
      "https://www.cdc.gov/patient-safety/index.html"
    ],
    "cond": null
  },
  {
    "id": "nclex-0094",
    "type": "mc",
    "cat": "mgmt",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient who tells the nurse in confidence that they plan to leave the hospital against medical advice (AMA). What is the nurse's most appropriate action?",
    "opts": [
      "Notify the provider and discuss the risks of leaving with the patient.",
      "Physically block the patient from leaving the unit.",
      "Ignore the statement, as patients often change their minds.",
      "Immediately discharge the patient without any documentation."
    ],
    "key": 0,
    "rationale": "A competent patient has the right to leave AMA, but the nurse should notify the provider, ensure the patient understands the risks, and document the discussion and the patient's decision. Physically detaining a competent patient (B) is false imprisonment, ignoring it (C) is negligent, and discharging without documentation (D) is improper.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK606114/",
      "https://medlineplus.gov/ency/patientinstructions/000445.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0095",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient who does not speak English. The patient's family member offers to interpret during a discussion of surgical consent. What is the nurse's best action?",
    "opts": [
      "Arrange for a qualified medical interpreter for the consent discussion.",
      "Allow the family member to interpret to save time.",
      "Use a translation app on a personal phone for the consent.",
      "Proceed in English and have the patient sign the form."
    ],
    "key": 0,
    "rationale": "For informed consent and other critical communication, a qualified medical interpreter is required to ensure accuracy and confidentiality; family members may omit, alter, or misunderstand medical information. A family interpreter (B), a personal translation app (C), or proceeding in English (D) all risk an invalid consent.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK551663/",
      "https://www.cdc.gov/health-literacy/php/develop-materials/index.html"
    ],
    "cond": null
  },
  {
    "id": "nclex-0096",
    "type": "mc",
    "cat": "hpm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is teaching a postmenopausal patient about osteoporosis prevention. Which lifestyle recommendation is most appropriate?",
    "opts": [
      "Perform regular weight-bearing exercise and ensure adequate calcium and vitamin D intake.",
      "Avoid all physical activity to protect fragile bones.",
      "Increase carbonated soft-drink and caffeine intake.",
      "Rely on sunlight exposure alone for all vitamin D and calcium needs."
    ],
    "key": 0,
    "rationale": "Weight-bearing exercise stimulates bone formation, and adequate calcium and vitamin D support bone density, making this the best osteoporosis-prevention advice. Avoiding activity (B) accelerates bone loss, excess cola and caffeine (C) can impair calcium balance, and sunlight alone (D) does not supply dietary calcium.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK441901/",
      "https://medlineplus.gov/ency/article/000360.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0097",
    "type": "mc",
    "cat": "hpm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is counseling an adult patient about routine health screening. Which statement reflects appropriate blood pressure screening guidance for a healthy adult?",
    "opts": [
      "Have blood pressure checked regularly, as hypertension often has no symptoms.",
      "Only check blood pressure when experiencing headaches.",
      "Blood pressure screening is unnecessary before age 60.",
      "A single normal reading means screening is never needed again."
    ],
    "key": 0,
    "rationale": "Hypertension is often asymptomatic (the 'silent killer'), so regular screening is recommended to detect and treat it early. Checking only with symptoms (B), delaying until age 60 (C), or stopping after one normal reading (D) all miss silent, ongoing disease.",
    "src": [
      "https://www.cdc.gov/high-blood-pressure/about/index.html",
      "https://medlineplus.gov/ency/article/000468.htm"
    ],
    "cond": "htn"
  },
  {
    "id": "nclex-0098",
    "type": "mc",
    "cat": "hpm",
    "diff": 1,
    "caseId": null,
    "step": null,
    "stem": "A nurse is teaching a patient about colorectal cancer risk reduction. Which dietary recommendation is appropriate?",
    "opts": [
      "Increase dietary fiber from fruits, vegetables, and whole grains.",
      "Increase intake of processed and red meats.",
      "Eliminate all fiber to rest the bowel.",
      "Avoid all fluids to reduce stool bulk."
    ],
    "key": 0,
    "rationale": "A diet high in fiber from fruits, vegetables, and whole grains is associated with reduced colorectal cancer risk. Diets high in processed and red meat (B) increase risk, eliminating fiber (C) is counterproductive, and avoiding fluids (D) is harmful.",
    "src": [
      "https://www.cdc.gov/colorectal-cancer/prevention/index.html",
      "https://medlineplus.gov/ency/article/002470.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0099",
    "type": "sata",
    "cat": "physio",
    "diff": 2,
    "caseId": "case-copd-01",
    "step": 1,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "0900: 70-year-old with COPD presents to clinic with 3 days of worsening dyspnea and increased cough with thick yellow-green sputum. Using accessory muscles. Speaks in short phrases. Anxious."
        },
        {
          "t": "Vitals",
          "body": "0900: Temp 37.8 C, HR 104, RR 26, BP 142/86, SpO2 88% on room air."
        },
        {
          "t": "Labs",
          "body": "0900: WBC 13.2 x10^9/L. ABG pending."
        },
        {
          "t": "Orders",
          "body": "Baseline assessment. Pulse oximetry. Prepare for possible ABG."
        }
      ]
    },
    "stem": "STEP 1 - Recognize cues. Which findings are cues of an acute COPD exacerbation? Select all that apply.",
    "opts": [
      "Increased dyspnea over 3 days with accessory muscle use",
      "Increased cough with thick yellow-green sputum",
      "SpO2 of 88% on room air",
      "Speaking in short phrases and appearing anxious",
      "Elevated WBC of 13.2",
      "Blood pressure of 142/86"
    ],
    "key": [
      0,
      1,
      2,
      3,
      4
    ],
    "rationale": "Cues of a COPD exacerbation include worsening dyspnea with accessory muscle use, increased and purulent sputum (suggesting infection), hypoxemia (SpO2 88%), increased work of breathing with anxiety, and leukocytosis. The mildly elevated blood pressure (F) is nonspecific and not a defining exacerbation cue.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK559281/",
      "https://medlineplus.gov/ency/article/000091.htm"
    ],
    "cond": "copd"
  },
  {
    "id": "nclex-0100",
    "type": "mc",
    "cat": "physio",
    "diff": 3,
    "caseId": "case-copd-01",
    "step": 2,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "0930: ABG resulted. Patient remains dyspneic on low-flow oxygen. Nurse analyzing the gas exchange status."
        },
        {
          "t": "Vitals",
          "body": "0930: HR 102, RR 24, BP 140/84, SpO2 90% on 2 L nasal cannula."
        },
        {
          "t": "Labs",
          "body": "0930 ABG: pH 7.33, PaCO2 58 mmHg, HCO3 30 mEq/L, PaO2 62 mmHg."
        },
        {
          "t": "Orders",
          "body": "Titrate oxygen to SpO2 88-92%. Bronchodilators. Recheck ABG as needed."
        }
      ]
    },
    "stem": "STEP 2 - Analyze cues. The ABG shows pH 7.33, PaCO2 58, HCO3 30. The nurse interprets this as which disturbance?",
    "opts": [
      "Respiratory acidosis with partial metabolic compensation",
      "Uncompensated metabolic alkalosis",
      "Respiratory alkalosis",
      "A completely normal ABG for any adult"
    ],
    "key": 0,
    "rationale": "A low pH (7.33) with an elevated PaCO2 (58) indicates respiratory acidosis from CO2 retention; the elevated bicarbonate (30) shows the kidneys are partially compensating, a common chronic pattern in COPD. It is not metabolic alkalosis (B), respiratory alkalosis (C), or normal (D).",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK507807/",
      "https://medlineplus.gov/ency/article/003855.htm"
    ],
    "cond": "copd"
  },
  {
    "id": "nclex-0101",
    "type": "mc",
    "cat": "physio",
    "diff": 2,
    "caseId": "case-copd-01",
    "step": 3,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "0945: Patient anxious and dyspneic. Multiple orders received. Nurse prioritizing."
        },
        {
          "t": "Vitals",
          "body": "0945: HR 104, RR 26, BP 142/86, SpO2 89% on 2 L."
        },
        {
          "t": "Labs",
          "body": "ABG: pH 7.33, PaCO2 58, PaO2 62."
        },
        {
          "t": "Orders",
          "body": "Short-acting bronchodilator nebulizer, IV corticosteroid, controlled oxygen to keep SpO2 88-92%, chest x-ray."
        }
      ]
    },
    "stem": "STEP 3 - Prioritize actions. Which intervention should the nurse prioritize to address the patient's airflow obstruction?",
    "opts": [
      "Administer the prescribed short-acting bronchodilator nebulizer treatment.",
      "Apply high-flow 100% oxygen via non-rebreather to normalize SpO2 to 100%.",
      "Encourage rapid, forceful breathing to clear the airways.",
      "Place the patient flat and supine to promote rest."
    ],
    "key": 0,
    "rationale": "The priority for airflow obstruction in a COPD exacerbation is a short-acting bronchodilator to open the airways. High-flow oxygen targeting 100% (B) risks suppressing the hypoxic drive and worsening CO2 retention (target 88-92%), forceful rapid breathing (C) worsens air trapping, and lying flat (D) impairs breathing.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK559281/",
      "https://medlineplus.gov/ency/article/000091.htm"
    ],
    "cond": "copd"
  },
  {
    "id": "nclex-0102",
    "type": "selectN",
    "cat": "basic",
    "diff": 2,
    "caseId": "case-copd-01",
    "step": 4,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1030: Bronchodilator and steroid given. Patient slightly improved. Nurse planning supportive measures to ease breathing."
        },
        {
          "t": "Vitals",
          "body": "1030: HR 98, RR 22, BP 138/82, SpO2 91% on 2 L."
        },
        {
          "t": "Labs",
          "body": "Repeat ABG pending."
        },
        {
          "t": "Orders",
          "body": "Continue bronchodilators. Position for comfort. Encourage pursed-lip breathing. Monitor SpO2."
        }
      ]
    },
    "stem": "STEP 4 - Generate solutions. Choose the 3 supportive nursing measures that best ease this patient's breathing.",
    "opts": [
      "Position the patient in high-Fowler's or leaning forward on an overbed table",
      "Coach pursed-lip breathing to prolong exhalation",
      "Maintain controlled oxygen to keep SpO2 at 88-92%",
      "Lay the patient flat to conserve energy",
      "Encourage rapid breathing to increase oxygen intake",
      "Remove all oxygen to strengthen the respiratory drive"
    ],
    "n": 3,
    "key": [
      0,
      1,
      2
    ],
    "rationale": "Supportive measures for COPD dyspnea include upright or tripod positioning to ease chest expansion, pursed-lip breathing to prevent airway collapse and prolong exhalation, and controlled oxygen targeting 88-92%. Lying flat (D), rapid breathing (E), and removing oxygen (F) all worsen gas exchange.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK559281/",
      "https://medlineplus.gov/ency/patientinstructions/000700.htm"
    ],
    "cond": "copd"
  },
  {
    "id": "nclex-0103",
    "type": "mc",
    "cat": "physio",
    "diff": 2,
    "caseId": "case-copd-01",
    "step": 5,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1200: Patient reassessed after treatment. Breathing easier, speaking in full sentences, less anxious."
        },
        {
          "t": "Vitals",
          "body": "1200: HR 88, RR 18, BP 132/78, SpO2 91% on 2 L nasal cannula."
        },
        {
          "t": "Labs",
          "body": "1200 ABG: pH 7.36, PaCO2 52, PaO2 68."
        },
        {
          "t": "Orders",
          "body": "Continue current therapy. Plan for discharge teaching once stable."
        }
      ]
    },
    "stem": "STEP 5 - Evaluate response. Which finding best indicates the patient's exacerbation is responding to treatment?",
    "opts": [
      "Respiratory rate 18, speaking in full sentences, and pH improved to 7.36.",
      "Respiratory rate 30 with worsening accessory muscle use.",
      "SpO2 dropped to 82% on the same oxygen.",
      "The patient is now confused and difficult to arouse."
    ],
    "key": 0,
    "rationale": "Improvement is shown by a slower respiratory rate, ability to speak in full sentences (less air hunger), and a pH trending back toward normal (7.36). A rising respiratory rate (B), falling SpO2 (C), and new confusion (D) would all indicate worsening respiratory failure.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK559281/",
      "https://medlineplus.gov/ency/article/000091.htm"
    ],
    "cond": "copd"
  },
  {
    "id": "nclex-0104",
    "type": "mc",
    "cat": "psych",
    "diff": 2,
    "caseId": "case-copd-01",
    "step": 6,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1330: Patient stable and preparing for discharge. Expresses fear about breathlessness at home and admits still smoking."
        },
        {
          "t": "Vitals",
          "body": "1330: Stable, SpO2 92% on 2 L."
        },
        {
          "t": "Labs",
          "body": "ABG improving."
        },
        {
          "t": "Orders",
          "body": "Discharge teaching. Smoking-cessation referral. Inhaler technique review. Pulmonary rehab referral."
        }
      ]
    },
    "stem": "STEP 6 - Evaluate outcomes. The patient says, \"I get so scared when I can't breathe, and I know I should quit smoking but I don't know how.\" What is the nurse's most therapeutic response?",
    "opts": [
      "\"Those feelings are understandable. Let's talk about a smoking-cessation program and ways to manage the anxiety when breathing is hard.\"",
      "\"You have to quit smoking right now or you will die.\"",
      "\"Try not to worry about it; the medications will handle everything.\"",
      "\"Most people can't quit, so don't feel bad if you keep smoking.\""
    ],
    "key": 0,
    "rationale": "The most therapeutic response validates the patient's fear, offers concrete support (a cessation program), and addresses anxiety management, supporting both the psychosocial need and behavior change. A threatening ultimatum (B), false reassurance (C), and undermining the patient's ability to quit (D) are non-therapeutic.",
    "src": [
      "https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/index.html",
      "https://medlineplus.gov/ency/article/000091.htm"
    ],
    "cond": "copd"
  },
  {
    "id": "nclex-0105",
    "type": "mc",
    "cat": "psych",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient with post-traumatic stress disorder (PTSD) becomes distressed during a group activity when a loud noise triggers a flashback. What is the nurse's most therapeutic initial action?",
    "opts": [
      "Speak calmly, help orient the patient to the present, and ensure a sense of safety.",
      "Insist the patient continue the activity to build tolerance.",
      "Leave the patient alone until the flashback resolves on its own.",
      "Tell the patient the flashback is not real and to ignore it."
    ],
    "key": 0,
    "rationale": "During a flashback, the nurse uses a calm voice, grounds and orients the patient to the present, and provides reassurance of safety. Forcing continued exposure (B), abandoning the patient (C), or dismissing the experience (D) are non-therapeutic and can escalate distress.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK559129/",
      "https://medlineplus.gov/ency/article/000925.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0106",
    "type": "mc",
    "cat": "psych",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A patient is admitted with suspected serotonin syndrome after starting a second antidepressant. Which cluster of findings supports this diagnosis?",
    "opts": [
      "Agitation, hyperthermia, muscle rigidity, and hyperreflexia with clonus.",
      "Bradycardia, hypothermia, and flaccid paralysis.",
      "Constipation, dry mouth, and urinary retention only.",
      "Isolated mild drowsiness with no vital sign changes."
    ],
    "key": 0,
    "rationale": "Serotonin syndrome presents with mental status changes (agitation), autonomic instability (hyperthermia, tachycardia), and neuromuscular excitability (rigidity, hyperreflexia, clonus), often after adding a serotonergic drug. Bradycardia with flaccid paralysis (B), isolated anticholinergic effects (C), and mild drowsiness alone (D) do not fit.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK482377/",
      "https://medlineplus.gov/ency/article/007272.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0107",
    "type": "mc",
    "cat": "psych",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is using therapeutic communication with a patient who is newly diagnosed with a terminal illness. Which response demonstrates the therapeutic technique of active listening and empathy?",
    "opts": [
      "\"This must be very difficult news for you. Tell me what you are feeling right now.\"",
      "\"Everything happens for a reason; you need to stay positive.\"",
      "\"I know exactly how you feel because my relative had the same illness.\"",
      "\"Let's not focus on that; talk about something more cheerful.\""
    ],
    "key": 0,
    "rationale": "Acknowledging the difficulty and inviting the patient to express feelings shows empathy and active listening, keeping the focus on the patient. Offering cliches (B), claiming to know exactly how they feel (C), and changing the subject (D) block therapeutic communication.",
    "src": [
      "https://medlineplus.gov/ency/article/000932.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0108",
    "type": "mc",
    "cat": "psych",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse observes a patient with obsessive-compulsive disorder (OCD) repeatedly washing their hands until the skin is raw. What is the most therapeutic nursing approach initially?",
    "opts": [
      "Allow time for the ritual while setting reasonable limits, and address the underlying anxiety.",
      "Physically prevent the patient from washing their hands at all.",
      "Ridicule the behavior so the patient sees how irrational it is.",
      "Ignore the patient entirely until the behavior stops."
    ],
    "key": 0,
    "rationale": "Compulsive rituals relieve overwhelming anxiety; abruptly blocking them increases distress. The nurse initially allows the ritual within reasonable limits while building trust and addressing the underlying anxiety, gradually reducing the behavior. Forcibly stopping (B), ridiculing (C), or ignoring (D) the patient are harmful.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK553162/",
      "https://medlineplus.gov/ency/article/000929.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0109",
    "type": "mc",
    "cat": "basic",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient with a new colostomy. Which observation of the stoma should be reported to the provider immediately?",
    "opts": [
      "The stoma appears dusky, dark purple, or black.",
      "The stoma is pink-red and moist.",
      "The stoma protrudes slightly above the skin.",
      "A small amount of blood is present when cleaning the stoma."
    ],
    "key": 0,
    "rationale": "A healthy stoma is pink-red and moist (B). A dusky, purple, or black stoma signals impaired blood supply (ischemia/necrosis) and must be reported immediately. Slight protrusion (C) is normal, and minor bleeding with cleaning (D) is expected because the stoma is vascular.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK560503/",
      "https://medlineplus.gov/ency/article/000750.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0110",
    "type": "mc",
    "cat": "basic",
    "diff": 1,
    "caseId": null,
    "step": null,
    "stem": "A nurse is providing care for a patient who requires a 24-hour urine collection. Which action ensures an accurate specimen?",
    "opts": [
      "Discard the first voiding, then collect all urine for the next 24 hours including the final void.",
      "Save the first voiding and stop collecting 12 hours later.",
      "Collect only the urine that appears most concentrated.",
      "Keep the collection container at room temperature in direct sunlight."
    ],
    "key": 0,
    "rationale": "A 24-hour urine collection begins by discarding the first void (so timing starts with an empty bladder), then collecting all urine for 24 hours, ending with a final void at the 24-hour mark. Keeping the first void (B), collecting selectively (C), or improper storage (D) invalidates the test.",
    "src": [
      "https://medlineplus.gov/ency/article/003425.htm",
      "https://www.ncbi.nlm.nih.gov/books/NBK557685/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0111",
    "type": "mc",
    "cat": "basic",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient with an indwelling urinary catheter. Which action best prevents catheter-associated urinary tract infection (CAUTI)?",
    "opts": [
      "Keep the drainage bag below the level of the bladder and maintain a closed system.",
      "Routinely irrigate the catheter with tap water every shift.",
      "Place the drainage bag on the bed beside the patient for easy access.",
      "Disconnect the tubing frequently to measure output."
    ],
    "key": 0,
    "rationale": "Keeping the drainage bag below bladder level prevents backflow, and maintaining a closed system limits pathogen entry, both key CAUTI-prevention measures. Routine irrigation (B), placing the bag on the bed (C, allowing backflow), and frequent disconnection (D, breaking the closed system) all raise infection risk.",
    "src": [
      "https://www.cdc.gov/uti/about/index.html"
    ],
    "cond": null
  },
  {
    "id": "nclex-0112",
    "type": "mc",
    "cat": "basic",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is assisting a patient with a nasogastric (NG) tube for feeding. Before administering an intermittent tube feeding, which action is the priority?",
    "opts": [
      "Verify tube placement and check gastric residual per policy.",
      "Flush the tube with 240 mL of hypertonic saline.",
      "Administer the feeding rapidly to save the patient's time.",
      "Position the patient flat and supine during the feeding."
    ],
    "key": 0,
    "rationale": "Before an NG feeding, the priority is to verify tube placement and check gastric residual to prevent instilling feeding into the lungs or over-feeding a patient with delayed emptying. Flushing with hypertonic saline (B) is wrong, rapid administration (C) causes cramping and reflux, and lying flat (D) increases aspiration risk (the head should be elevated).",
    "src": [
      "https://medlineplus.gov/ency/patientinstructions/000900.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0113",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is planning care and must prioritize using Maslow's hierarchy of needs. Which patient need should the nurse address first?",
    "opts": [
      "A patient whose airway is partially obstructed by secretions.",
      "A patient expressing feelings of loneliness and isolation.",
      "A patient asking for help writing a will.",
      "A patient requesting information about a support group."
    ],
    "key": 0,
    "rationale": "Maslow places physiologic needs first, and among those, airway is the top priority; a partially obstructed airway is life-threatening and must be addressed before psychosocial needs. Loneliness (B), estate concerns (C), and support-group information (D) are higher-level needs addressed after physiologic stability.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK534811/",
      "https://medlineplus.gov/ency/article/000007.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0114",
    "type": "mc",
    "cat": "mgmt",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for four patients. Using the ABC (airway, breathing, circulation) framework, which patient requires the nurse's immediate attention?",
    "opts": [
      "A patient with noisy, gurgling respirations and difficulty managing secretions.",
      "A patient with a blood pressure of 138/88 and a mild headache.",
      "A patient requesting pain medication for chronic back pain.",
      "A patient due for a routine dressing change."
    ],
    "key": 0,
    "rationale": "By the ABC framework, an airway problem takes precedence: noisy, gurgling respirations with secretion difficulty indicates a threatened airway needing immediate suctioning and assessment. A mildly elevated BP with headache (B), a chronic pain request (C), and a routine dressing change (D) are lower priority.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK534811/",
      "https://medlineplus.gov/ency/article/000007.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0115",
    "type": "sata",
    "cat": "risk",
    "diff": 2,
    "caseId": "case-stroke-01",
    "step": 1,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1000: 66-year-old brought to ED by family. Sudden onset of right-sided weakness and slurred speech noted 45 minutes ago. Facial droop on the right. History of atrial fibrillation, not on anticoagulation."
        },
        {
          "t": "Vitals",
          "body": "1000: BP 186/98, HR 92 irregular, RR 18, SpO2 96% on room air, Temp 37.0 C."
        },
        {
          "t": "Labs",
          "body": "1000: Glucose 128 mg/dL. Coagulation panel pending. CT scan ordered."
        },
        {
          "t": "Orders",
          "body": "Activate stroke protocol. NPO. Non-contrast head CT STAT. Neuro checks."
        }
      ]
    },
    "stem": "STEP 1 - Recognize cues. Which findings are cues consistent with an acute stroke? Select all that apply.",
    "opts": [
      "Sudden right-sided weakness",
      "Slurred speech and right facial droop",
      "Symptom onset clearly identified 45 minutes ago",
      "History of atrial fibrillation without anticoagulation",
      "Blood pressure 186/98",
      "SpO2 96% on room air"
    ],
    "key": [
      0,
      1,
      2,
      3,
      4
    ],
    "rationale": "Stroke cues include sudden focal weakness, slurred speech with facial droop, a known time of onset (critical for treatment eligibility), atrial fibrillation without anticoagulation (a major embolic stroke risk), and marked hypertension. A normal SpO2 (F) is not a stroke cue.",
    "src": [
      "https://www.cdc.gov/stroke/signs-symptoms/index.html",
      "https://medlineplus.gov/ency/article/000726.htm"
    ],
    "cond": "stroke"
  },
  {
    "id": "nclex-0116",
    "type": "mc",
    "cat": "mgmt",
    "diff": 3,
    "caseId": "case-stroke-01",
    "step": 2,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1015: Stroke team assembled. Nurse analyzing which factor most affects treatment options."
        },
        {
          "t": "Vitals",
          "body": "1015: BP 184/96, HR 90 irregular, RR 18."
        },
        {
          "t": "Labs",
          "body": "Glucose 128. Platelets and INR pending."
        },
        {
          "t": "Orders",
          "body": "Non-contrast head CT STAT to distinguish ischemic vs hemorrhagic stroke before any thrombolytic decision."
        }
      ]
    },
    "stem": "STEP 2 - Analyze cues. Why is the STAT non-contrast head CT the most critical next step in analyzing this patient's situation?",
    "opts": [
      "It distinguishes ischemic from hemorrhagic stroke, which determines whether thrombolytics are safe.",
      "It measures the patient's blood glucose more accurately.",
      "It confirms the diagnosis of atrial fibrillation.",
      "It is required only for documentation and does not affect treatment."
    ],
    "key": 0,
    "rationale": "A non-contrast head CT rapidly distinguishes ischemic stroke from hemorrhagic stroke; giving a thrombolytic to a patient with a bleed would be catastrophic, so this imaging drives the entire treatment pathway. It does not measure glucose (B) or diagnose atrial fibrillation (C), and it is far more than documentation (D).",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK535369/",
      "https://medlineplus.gov/ency/article/000726.htm"
    ],
    "cond": "stroke"
  },
  {
    "id": "nclex-0117",
    "type": "mc",
    "cat": "risk",
    "diff": 3,
    "caseId": "case-stroke-01",
    "step": 3,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1030: CT shows no hemorrhage; ischemic stroke. Patient within treatment window. Nurse prioritizing pre-thrombolytic safety checks."
        },
        {
          "t": "Vitals",
          "body": "1030: BP 190/100, HR 90 irregular, RR 18."
        },
        {
          "t": "Labs",
          "body": "Platelets 240,000, INR 1.0, glucose 128."
        },
        {
          "t": "Orders",
          "body": "Consider IV thrombolytic. Blood pressure must be < 185/110 before and during therapy. Prepare labetalol per protocol."
        }
      ]
    },
    "stem": "STEP 3 - Prioritize actions. Before IV thrombolytic therapy can be given, which finding must the nurse address first?",
    "opts": [
      "The blood pressure of 190/100, which exceeds the safe threshold for thrombolytics.",
      "The normal platelet count of 240,000.",
      "The INR of 1.0, which is within normal limits.",
      "The glucose of 128, which is acceptable."
    ],
    "key": 0,
    "rationale": "Blood pressure must be below 185/110 before and during thrombolytic therapy to reduce hemorrhage risk; at 190/100 the nurse must administer the prescribed antihypertensive (e.g., labetalol) first. The normal platelets (B), INR (C), and glucose (D) do not contraindicate treatment.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK535369/",
      "https://medlineplus.gov/ency/article/000726.htm"
    ],
    "cond": "stroke"
  },
  {
    "id": "nclex-0118",
    "type": "selectN",
    "cat": "safety",
    "diff": 3,
    "caseId": "case-stroke-01",
    "step": 4,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1130: IV thrombolytic initiated after BP controlled. Nurse implementing post-thrombolytic monitoring."
        },
        {
          "t": "Vitals",
          "body": "1130: BP 172/94, HR 88 irregular, RR 18, SpO2 97%."
        },
        {
          "t": "Labs",
          "body": "Post-treatment monitoring ongoing."
        },
        {
          "t": "Orders",
          "body": "Frequent neuro checks and vital signs. Bleeding precautions. Monitor for signs of intracranial hemorrhage."
        }
      ]
    },
    "stem": "STEP 4 - Generate solutions. Choose the 3 priority monitoring actions after IV thrombolytic administration.",
    "opts": [
      "Perform frequent neurologic assessments for changes",
      "Monitor closely for signs of bleeding, including sudden severe headache",
      "Keep blood pressure controlled within the ordered parameters",
      "Encourage the patient to ambulate independently right away",
      "Administer aspirin immediately along with the thrombolytic",
      "Remove all fall and bleeding precautions to promote mobility"
    ],
    "n": 3,
    "key": [
      0,
      1,
      2
    ],
    "rationale": "After thrombolytics the nurse performs frequent neuro checks, watches for bleeding (a sudden severe headache can signal intracranial hemorrhage), and keeps blood pressure within ordered limits. Immediate independent ambulation (D), giving aspirin with the thrombolytic (E, increases bleeding), and removing precautions (F) are unsafe.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK535369/",
      "https://medlineplus.gov/ency/article/000726.htm"
    ],
    "cond": "stroke"
  },
  {
    "id": "nclex-0119",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": "case-stroke-01",
    "step": 5,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1400: Patient stable post-thrombolytic. Some improvement in right-sided strength. Difficulty swallowing noted on screening. Nurse evaluating safe care planning."
        },
        {
          "t": "Vitals",
          "body": "1400: BP 158/88, HR 86 irregular, RR 18."
        },
        {
          "t": "Labs",
          "body": "No bleeding signs. Neuro checks stable."
        },
        {
          "t": "Orders",
          "body": "Keep NPO until formal swallow evaluation. Speech therapy consult. Aspiration precautions."
        }
      ]
    },
    "stem": "STEP 5 - Take action. A bedside swallow screen suggests the patient has dysphagia. Which action best protects the patient from a common post-stroke complication?",
    "opts": [
      "Keep the patient NPO until a formal swallow evaluation is completed.",
      "Offer thin liquids to test the patient's ability to swallow.",
      "Begin a regular diet since the patient is more alert.",
      "Give oral medications with a large glass of water."
    ],
    "key": 0,
    "rationale": "Dysphagia after stroke greatly raises aspiration and aspiration-pneumonia risk, so the patient must remain NPO until a formal swallow evaluation confirms safety. Offering thin liquids (B), starting a regular diet (C), or giving oral meds with water (D) all risk aspiration.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK563096/",
      "https://medlineplus.gov/ency/article/000726.htm"
    ],
    "cond": "stroke"
  },
  {
    "id": "nclex-0120",
    "type": "mc",
    "cat": "psych",
    "diff": 2,
    "caseId": "case-stroke-01",
    "step": 6,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "Day 3: Patient stable, beginning rehabilitation. Frustrated and tearful about difficulty speaking (expressive aphasia). Nurse evaluating psychosocial support."
        },
        {
          "t": "Vitals",
          "body": "Stable and within normal limits."
        },
        {
          "t": "Labs",
          "body": "Stable."
        },
        {
          "t": "Orders",
          "body": "Speech therapy. Physical and occupational therapy. Emotional support and coping resources."
        }
      ]
    },
    "stem": "STEP 6 - Evaluate outcomes. The patient with expressive aphasia becomes tearful and frustrated when unable to find words. What is the nurse's most therapeutic approach?",
    "opts": [
      "Allow extra time, use patience and simple yes/no questions, and reassure the patient.",
      "Finish the patient's sentences quickly to reduce their frustration.",
      "Tell the patient to stop trying to talk until therapy fixes the problem.",
      "Speak loudly and rapidly to help the patient understand better."
    ],
    "key": 0,
    "rationale": "For expressive aphasia, the nurse gives the patient extra time, uses simple yes/no questions and communication aids, and offers patient reassurance, supporting dignity and reducing frustration. Finishing sentences (B), discouraging attempts to speak (C), and speaking loudly and rapidly (D) are non-therapeutic (aphasia is not a hearing deficit).",
    "src": [
      "https://medlineplus.gov/ency/article/000726.htm"
    ],
    "cond": "stroke"
  },
  {
    "id": "nclex-0121",
    "type": "sata",
    "cat": "risk",
    "diff": 2,
    "caseId": "case-chf-01",
    "step": 1,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "0700: 78-year-old with chronic heart failure reports 3 days of worsening shortness of breath, unable to sleep flat (using 3 pillows), and swollen ankles. Gained 5 pounds this week. Fatigued."
        },
        {
          "t": "Vitals",
          "body": "0700: BP 158/92, HR 104, RR 24, SpO2 90% on room air, Temp 36.9 C."
        },
        {
          "t": "Labs",
          "body": "0700: BNP elevated. Potassium 4.2 mEq/L. Chest x-ray shows pulmonary congestion."
        },
        {
          "t": "Orders",
          "body": "Daily weight. Strict intake and output. Oxygen to keep SpO2 >= 94%. Assess lung sounds."
        }
      ]
    },
    "stem": "STEP 1 - Recognize cues. Which findings are cues of worsening heart failure? Select all that apply.",
    "opts": [
      "Orthopnea requiring 3 pillows to sleep",
      "A 5-pound weight gain in one week",
      "Bilateral ankle edema",
      "SpO2 of 90% on room air with dyspnea",
      "Elevated BNP with pulmonary congestion on x-ray",
      "Serum potassium of 4.2 mEq/L"
    ],
    "key": [
      0,
      1,
      2,
      3,
      4
    ],
    "rationale": "Cues of decompensated heart failure include orthopnea, rapid weight gain from fluid retention, dependent edema, hypoxemia with dyspnea, and an elevated BNP with pulmonary congestion. A normal potassium of 4.2 (F) is not a cue of worsening failure.",
    "src": [
      "https://www.cdc.gov/heart-disease/about/heart-failure.html",
      "https://medlineplus.gov/ency/article/000158.htm"
    ],
    "cond": "chf"
  },
  {
    "id": "nclex-0122",
    "type": "mc",
    "cat": "risk",
    "diff": 2,
    "caseId": "case-chf-01",
    "step": 2,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "0715: Nurse analyzing the fluid status data before care planning."
        },
        {
          "t": "Vitals",
          "body": "0715: BP 156/90, HR 102, RR 24, SpO2 91% on 2 L."
        },
        {
          "t": "Labs",
          "body": "BNP elevated. Chest x-ray: pulmonary congestion."
        },
        {
          "t": "Orders",
          "body": "Daily weight, strict I&O, sodium and fluid restriction, IV loop diuretic."
        }
      ]
    },
    "stem": "STEP 2 - Analyze cues. The nurse determines the patient's primary problem is best described as which of the following?",
    "opts": [
      "Fluid volume overload from decompensated heart failure",
      "Fluid volume deficit from dehydration",
      "An acute infection with septic shock",
      "A normal fluid balance requiring no intervention"
    ],
    "key": 0,
    "rationale": "Weight gain, edema, orthopnea, pulmonary congestion, and an elevated BNP all point to fluid volume overload from decompensated heart failure. These findings are the opposite of dehydration (B); there is no evidence of infection or sepsis (C), and the patient clearly needs intervention (D).",
    "src": [
      "https://www.cdc.gov/heart-disease/about/heart-failure.html",
      "https://medlineplus.gov/ency/article/000158.htm"
    ],
    "cond": "chf"
  },
  {
    "id": "nclex-0123",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": "case-chf-01",
    "step": 3,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "0730: Patient dyspneic and anxious. Nurse prioritizing immediate comfort and oxygenation while diuresis begins."
        },
        {
          "t": "Vitals",
          "body": "0730: BP 156/90, HR 102, RR 26, SpO2 90% on 2 L."
        },
        {
          "t": "Labs",
          "body": "BNP elevated."
        },
        {
          "t": "Orders",
          "body": "IV loop diuretic now, oxygen to keep SpO2 >= 94%, position for comfort, continuous monitoring."
        }
      ]
    },
    "stem": "STEP 3 - Prioritize actions. Which nursing action should be implemented first to relieve this patient's dyspnea?",
    "opts": [
      "Place the patient in high-Fowler's position and ensure oxygen is applied.",
      "Lay the patient flat to promote rest.",
      "Restrict the patient from any position changes.",
      "Withhold oxygen to avoid dependence."
    ],
    "key": 0,
    "rationale": "Placing the patient in high-Fowler's decreases venous return and lets the lungs expand, and applying oxygen addresses hypoxemia, together giving rapid dyspnea relief while diuretics take effect. Lying flat (B) worsens pulmonary congestion, immobilizing the patient (C) is inappropriate, and withholding oxygen (D) is unsafe.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK430873/",
      "https://medlineplus.gov/ency/article/000158.htm"
    ],
    "cond": "chf"
  },
  {
    "id": "nclex-0124",
    "type": "mc",
    "cat": "safety",
    "diff": 3,
    "caseId": "case-chf-01",
    "step": 4,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "1000: IV furosemide given 2 hours ago. Patient voided large amounts. Nurse planning to monitor for a medication-related complication."
        },
        {
          "t": "Vitals",
          "body": "1000: BP 138/82, HR 96, RR 20, SpO2 94% on 2 L."
        },
        {
          "t": "Labs",
          "body": "1000: Repeat potassium 3.2 mEq/L (was 4.2). Magnesium pending."
        },
        {
          "t": "Orders",
          "body": "Monitor electrolytes after diuresis. Telemetry. Replace potassium per protocol."
        }
      ]
    },
    "stem": "STEP 4 - Generate solutions. The potassium has fallen to 3.2 mEq/L after diuresis. Which action should the nurse anticipate to prevent a dangerous complication?",
    "opts": [
      "Administer prescribed potassium replacement and monitor the cardiac rhythm.",
      "Administer an additional dose of the loop diuretic.",
      "Restrict the patient's dietary potassium further.",
      "Ignore the value because mild changes are expected."
    ],
    "key": 0,
    "rationale": "Loop diuretics waste potassium; a level of 3.2 mEq/L is hypokalemia that predisposes to cardiac dysrhythmias, so the nurse anticipates potassium replacement with cardiac monitoring. Giving more diuretic (B) or restricting potassium (C) would worsen the deficit, and ignoring it (D) is unsafe.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682858.html",
      "https://medlineplus.gov/ency/article/000479.htm"
    ],
    "cond": "chf"
  },
  {
    "id": "nclex-0125",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": "case-chf-01",
    "step": 5,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "Day 2: Patient improved. Breathing easier, less edema, lost 4 pounds since admission. Nurse evaluating response to therapy."
        },
        {
          "t": "Vitals",
          "body": "Day 2: BP 128/76, HR 82, RR 18, SpO2 95% on room air."
        },
        {
          "t": "Labs",
          "body": "Potassium 4.0 mEq/L after replacement. BNP trending down."
        },
        {
          "t": "Orders",
          "body": "Continue oral diuretic, sodium restriction, daily weights, prepare discharge teaching."
        }
      ]
    },
    "stem": "STEP 5 - Take action / evaluate. Which finding best indicates the heart failure treatment has been effective?",
    "opts": [
      "Weight loss of 4 pounds, easier breathing, and SpO2 95% on room air.",
      "Weight gain of 3 more pounds since admission.",
      "Worsening orthopnea now requiring 4 pillows.",
      "New crackles auscultated throughout both lung fields."
    ],
    "key": 0,
    "rationale": "Effectiveness is shown by fluid loss (weight down 4 pounds), reduced work of breathing, and improved oxygenation on room air. Continued weight gain (B), worsening orthopnea (C), and new diffuse crackles (D) would all indicate the treatment is not working.",
    "src": [
      "https://www.cdc.gov/heart-disease/about/heart-failure.html",
      "https://medlineplus.gov/ency/article/000158.htm"
    ],
    "cond": "chf"
  },
  {
    "id": "nclex-0126",
    "type": "mc",
    "cat": "hpm",
    "diff": 2,
    "caseId": "case-chf-01",
    "step": 6,
    "chart": {
      "tabs": [
        {
          "t": "Nurses' Notes",
          "body": "Day 3: Patient ready for discharge. Nurse providing self-management teaching to prevent readmission."
        },
        {
          "t": "Vitals",
          "body": "Stable, within normal limits."
        },
        {
          "t": "Labs",
          "body": "Electrolytes normal."
        },
        {
          "t": "Orders",
          "body": "Discharge with oral diuretic, low-sodium diet, daily weight log, follow-up appointment."
        }
      ]
    },
    "stem": "STEP 6 - Evaluate outcomes. Which patient statement indicates correct understanding of heart failure self-management at home?",
    "opts": [
      "\"I will weigh myself every morning and call my provider if I gain 2 to 3 pounds in a day or 5 in a week.\"",
      "\"I can add salt freely to my food as long as I take my water pill.\"",
      "\"I should stop my medications once I feel better.\"",
      "\"I only need to weigh myself when my ankles look swollen.\""
    ],
    "key": 0,
    "rationale": "Daily morning weights with a clear notification threshold (about 2 to 3 pounds in a day or 5 in a week) catch fluid retention early and prevent readmission. Adding salt freely (B), stopping medications when feeling better (C), and weighing only when symptomatic (D) all lead to decompensation.",
    "src": [
      "https://www.cdc.gov/heart-disease/about/heart-failure.html",
      "https://medlineplus.gov/ency/patientinstructions/000112.htm"
    ],
    "cond": "chf"
  },
  {
    "id": "nclex-0127",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A charge nurse is making assignments on a medical-surgical unit. Which patient is most appropriate to assign to a licensed practical/vocational nurse (LPN/LVN)?",
    "opts": [
      "A stable patient with a chronic wound requiring a routine dressing change.",
      "A newly admitted patient requiring a complete admission assessment.",
      "A patient requiring initial teaching about a new insulin regimen.",
      "A patient whose plan of care needs to be evaluated and revised."
    ],
    "key": 0,
    "rationale": "An LPN/LVN can perform routine, stable tasks such as a scheduled dressing change on a stable patient. Admission assessments (B), initial patient teaching (C), and evaluating/revising the care plan (D) require the registered nurse's scope of judgment.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK519519/",
      "https://www.ncsbn.org/public-files/NGN_Winter18.pdf"
    ],
    "cond": null
  },
  {
    "id": "nclex-0128",
    "type": "mc",
    "cat": "mgmt",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for four patients. Which patient should the nurse assess first after receiving hand-off report?",
    "opts": [
      "A patient 1 hour post-op with a blood pressure trend dropping from 118/70 to 92/54.",
      "A patient requesting a warm blanket and assistance to the bathroom.",
      "A patient scheduled for discharge teaching later in the afternoon.",
      "A patient asking when the next meal tray will arrive."
    ],
    "key": 0,
    "rationale": "A falling blood pressure in a fresh post-op patient suggests possible hemorrhage or shock and requires immediate assessment. A blanket request (B), scheduled discharge teaching (C), and a meal-tray question (D) are non-urgent and can be addressed later or delegated.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK525964/",
      "https://medlineplus.gov/ency/article/000039.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0129",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse observes another nurse failing to perform hand hygiene before entering a patient's room. What is the most appropriate initial action?",
    "opts": [
      "Respectfully remind the colleague to perform hand hygiene.",
      "Report the colleague to the state board of nursing immediately.",
      "Ignore it, since one missed occurrence is unlikely to matter.",
      "Document the incident in the patient's medical record."
    ],
    "key": 0,
    "rationale": "The most appropriate initial action is a direct, respectful reminder to the colleague, which addresses the infection-control breach immediately and collegially. Escalating to the board (B) is premature, ignoring it (C) endangers patients, and the medical record (D) is not the place for staff-performance notes.",
    "src": [
      "https://www.cdc.gov/clean-hands/about/index.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK570498/"
    ],
    "cond": null
  },
  {
    "id": "nclex-0130",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is reviewing a verbal prescription received during an emergency. Which action ensures the prescription is safely and correctly transcribed?",
    "opts": [
      "Read the prescription back to the provider to confirm accuracy.",
      "Transcribe it from memory after the emergency resolves.",
      "Ask another nurse to guess the intended dose.",
      "Delay clarification until the provider's next scheduled visit."
    ],
    "key": 0,
    "rationale": "A read-back of a verbal or telephone order to the prescriber confirms the drug, dose, route, and frequency, preventing transcription errors. Relying on memory (B), guessing (C), or delaying clarification (D) all introduce dangerous ambiguity.",
    "src": [
      "https://www.cdc.gov/patient-safety/index.html"
    ],
    "cond": null
  },
  {
    "id": "nclex-0131",
    "type": "mc",
    "cat": "pharm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A patient is prescribed levothyroxine for hypothyroidism. Which instruction should the nurse include in teaching?",
    "opts": [
      "Take the medication on an empty stomach in the morning, and do not stop it abruptly.",
      "Take the medication with the largest meal of the day.",
      "Stop taking it once energy levels return to normal.",
      "Double the dose any day fatigue is worse."
    ],
    "key": 0,
    "rationale": "Levothyroxine is best absorbed on an empty stomach in the morning, and because it is lifelong replacement, it must not be stopped when the patient feels better. Taking it with a large meal (B) impairs absorption, stopping it (C) causes recurrence, and doubling doses (D) risks toxicity.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682461.html"
    ],
    "cond": null
  },
  {
    "id": "nclex-0132",
    "type": "mc",
    "cat": "pharm",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A patient is receiving IV heparin. The nurse should ensure which medication is readily available as the antidote for heparin overdose?",
    "opts": [
      "Protamine sulfate",
      "Vitamin K (phytonadione)",
      "Naloxone",
      "Flumazenil"
    ],
    "key": 0,
    "rationale": "Protamine sulfate is the specific antidote that reverses heparin. Vitamin K (B) reverses warfarin, naloxone (C) reverses opioids, and flumazenil (D) reverses benzodiazepines.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682826.html"
    ],
    "cond": null
  },
  {
    "id": "nclex-0133",
    "type": "sata",
    "cat": "pharm",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A patient is prescribed an aminoglycoside antibiotic (gentamicin) IV. Which parameters should the nurse monitor for toxicity? Select all that apply.",
    "opts": [
      "Serum creatinine and BUN for nephrotoxicity",
      "Hearing changes and balance for ototoxicity",
      "Peak and trough drug levels",
      "Serum vitamin C level",
      "Skin freckle count",
      "Hair growth rate"
    ],
    "key": [
      0,
      1,
      2
    ],
    "rationale": "Aminoglycosides are nephrotoxic and ototoxic, so the nurse monitors renal function (creatinine, BUN), hearing and balance, and peak/trough drug levels to keep the drug in the therapeutic range. Vitamin C level (D), freckle count (E), and hair growth (F) are irrelevant to aminoglycoside toxicity.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682275.html"
    ],
    "cond": null
  },
  {
    "id": "nclex-0134",
    "type": "mc",
    "cat": "risk",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is preparing a patient for a lumbar puncture. Which nursing action is appropriate for the post-procedure period?",
    "opts": [
      "Encourage the patient to lie flat and increase fluid intake.",
      "Have the patient sit fully upright immediately to prevent aspiration.",
      "Restrict all fluids for 8 hours after the procedure.",
      "Encourage vigorous ambulation right after the procedure."
    ],
    "key": 0,
    "rationale": "After a lumbar puncture, lying flat and increasing fluids helps prevent and relieve a post-dural-puncture (spinal) headache from cerebrospinal fluid leakage. Sitting upright immediately (B), restricting fluids (C), and vigorous early ambulation (D) can worsen the headache.",
    "src": [
      "https://medlineplus.gov/ency/article/003428.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0135",
    "type": "mc",
    "cat": "risk",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse reviews a patient's potassium level, which is 6.8 mEq/L. Which action should the nurse take first?",
    "opts": [
      "Obtain a cardiac monitor and notify the provider promptly.",
      "Encourage the patient to eat a banana.",
      "Document the value as a normal finding.",
      "Administer a prescribed potassium supplement."
    ],
    "key": 0,
    "rationale": "A potassium of 6.8 mEq/L is severe hyperkalemia that can cause life-threatening dysrhythmias, so the nurse should get the patient on a cardiac monitor and notify the provider promptly. Eating a banana (B) or giving potassium (D) would worsen it, and it is far from normal (C).",
    "src": [
      "https://medlineplus.gov/ency/article/001179.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0136",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient on contact precautions for a multidrug-resistant organism. Which personal protective equipment is required to enter the room for direct patient care?",
    "opts": [
      "Gown and gloves",
      "N95 respirator only",
      "No protective equipment is needed",
      "Sterile surgical attire"
    ],
    "key": 0,
    "rationale": "Contact precautions require a gown and gloves for direct patient care to prevent transmission of organisms spread by contact. An N95 (B) is for airborne precautions, some protection is always needed here (C), and full sterile surgical attire (D) is not indicated for routine contact-precaution care.",
    "src": [
      "https://www.cdc.gov/infection-control/hcp/basics/transmission-based-precautions.html",
      "https://medlineplus.gov/ency/patientinstructions/000446.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0137",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient who requires airborne precautions for active pulmonary tuberculosis. Which measure is required?",
    "opts": [
      "Place the patient in a negative-pressure room and wear a fit-tested N95 respirator.",
      "Place the patient in any private room and wear a surgical mask.",
      "Use only gown and gloves for all room entries.",
      "No special room is needed if the door stays open."
    ],
    "key": 0,
    "rationale": "Airborne precautions for tuberculosis require a negative-pressure (airborne infection isolation) room and a fit-tested N95 respirator for anyone entering. A standard private room with a surgical mask (B), contact-only PPE (C), or an open door (D) do not provide airborne protection.",
    "src": [
      "https://www.cdc.gov/tb/hcp/infection-control/index.html",
      "https://medlineplus.gov/ency/article/000077.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0138",
    "type": "mc",
    "cat": "safety",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is assessing fall risk for an older adult patient. Which finding most increases this patient's risk for falls?",
    "opts": [
      "Orthostatic hypotension with dizziness on standing.",
      "Wearing well-fitting rubber-soled shoes.",
      "A clutter-free room with adequate lighting.",
      "Use of a properly fitted walker as instructed."
    ],
    "key": 0,
    "rationale": "Orthostatic hypotension with dizziness on standing sharply raises fall risk because the patient may become lightheaded and lose balance when rising. Rubber-soled shoes (B), a clutter-free lit room (C), and correct walker use (D) are protective factors.",
    "src": [
      "https://www.cdc.gov/falls/prevention/index.html",
      "https://medlineplus.gov/ency/article/001167.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0139",
    "type": "mc",
    "cat": "safety",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A nurse is preparing to administer an intramuscular injection to an adult. Which site is preferred for its safety and low risk of nerve or vascular injury?",
    "opts": [
      "The ventrogluteal site",
      "The dorsogluteal (upper outer buttock) site",
      "The antecubital fossa",
      "The radial aspect of the wrist"
    ],
    "key": 0,
    "rationale": "The ventrogluteal site is preferred for adult IM injections because it is free of major nerves and blood vessels and can hold a larger volume safely. The dorsogluteal site (B) risks sciatic nerve injury, and the antecubital fossa (C) and wrist (D) are not IM injection sites.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK556121/",
      "https://medlineplus.gov/ency/patientinstructions/000430.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0140",
    "type": "mc",
    "cat": "hpm",
    "diff": 1,
    "caseId": null,
    "step": null,
    "stem": "A nurse is teaching an adult patient about recommended cancer screening. Which statement about colorectal cancer screening is accurate for an average-risk adult?",
    "opts": [
      "Routine screening is recommended starting at age 45.",
      "Screening is only necessary after age 75 for everyone.",
      "Screening is unnecessary unless symptoms appear.",
      "A single screening at age 30 provides lifelong protection."
    ],
    "key": 0,
    "rationale": "For average-risk adults, routine colorectal cancer screening is recommended beginning at age 45. Waiting until 75 (B), screening only when symptomatic (C), and a one-time screening at 30 (D) do not reflect current recommendations.",
    "src": [
      "https://www.cdc.gov/colorectal-cancer/screening/index.html",
      "https://medlineplus.gov/ency/article/002470.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0141",
    "type": "mc",
    "cat": "hpm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is teaching a breastfeeding patient about newborn nutrition. Which statement indicates correct understanding?",
    "opts": [
      "\"Breast milk or formula provides complete nutrition for about the first 6 months.\"",
      "\"I should give my newborn water between feedings to prevent dehydration.\"",
      "\"I can start whole cow's milk at 3 months of age.\"",
      "\"Solid foods should begin in the first month of life.\""
    ],
    "key": 0,
    "rationale": "Breast milk or formula supplies complete nutrition for roughly the first 6 months, when solids are typically introduced. Giving water to a newborn (B) risks hyponatremia, whole cow's milk (C) is not recommended in the first year, and starting solids in the first month (D) is too early.",
    "src": [
      "https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/index.html",
      "https://medlineplus.gov/ency/article/002455.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0142",
    "type": "cloze",
    "cat": "hpm",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "Complete the teaching about adult vaccination. The nurse explains that the influenza vaccine is recommended [1], and that adults should receive a tetanus, diphtheria booster (Td or Tdap) every [2].",
    "blanks": [
      {
        "label": "1",
        "opts": [
          "annually",
          "once in a lifetime",
          "every 5 years"
        ],
        "key": 0
      },
      {
        "label": "2",
        "opts": [
          "10 years",
          "6 months",
          "20 years"
        ],
        "key": 0
      }
    ],
    "rationale": "Influenza vaccine is recommended annually because circulating strains change each season. A tetanus-diphtheria (Td or Tdap) booster is recommended every 10 years for adults. The other options do not match the recommended intervals.",
    "src": [
      "https://www.cdc.gov/vaccines/hcp/imz-schedules/adult-age.html",
      "https://medlineplus.gov/ency/article/002024.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0143",
    "type": "mc",
    "cat": "basic",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient with a wound healing by secondary intention. Which finding indicates normal wound healing rather than infection?",
    "opts": [
      "Pink-red granulation tissue at the wound base.",
      "Thick yellow-green purulent drainage with foul odor.",
      "Increasing warmth, redness, and swelling around the wound.",
      "A new fever of 38.6 C (101.5 F)."
    ],
    "key": 0,
    "rationale": "Pink-red granulation tissue is a sign of healthy wound healing by secondary intention. Purulent, foul-smelling drainage (B), increasing warmth/redness/swelling (C), and a new fever (D) are all signs of wound infection.",
    "src": [
      "https://medlineplus.gov/ency/article/000018.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0144",
    "type": "mc",
    "cat": "basic",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient who needs a sterile dressing change. Which action would break sterile technique and require correction?",
    "opts": [
      "Reaching across the sterile field with an ungloved hand.",
      "Keeping the sterile field within the nurse's line of vision.",
      "Holding sterile items above waist level.",
      "Considering the outer 1-inch border of the field as contaminated."
    ],
    "key": 0,
    "rationale": "Reaching across the sterile field, especially with an ungloved hand, contaminates it and breaks sterile technique. Keeping the field in view (B), holding sterile items above the waist (C), and treating the outer 1-inch border as contaminated (D) all correctly maintain sterility.",
    "src": [
      "https://medlineplus.gov/ency/patientinstructions/000487.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0145",
    "type": "mc",
    "cat": "psych",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient experiencing alcohol withdrawal. Which finding indicates the withdrawal is becoming severe and requires urgent intervention?",
    "opts": [
      "Visual hallucinations, tremors, and a rising heart rate and blood pressure.",
      "Mild anxiety relieved by reassurance.",
      "A single report of difficulty sleeping.",
      "Requesting a caffeinated beverage."
    ],
    "key": 0,
    "rationale": "Hallucinations with worsening autonomic signs (tremor, tachycardia, hypertension) indicate severe alcohol withdrawal that can progress to delirium tremens, a medical emergency needing urgent intervention. Mild anxiety (B), isolated insomnia (C), and a beverage request (D) are not signs of severe withdrawal.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK441882/",
      "https://medlineplus.gov/ency/article/000764.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0146",
    "type": "mc",
    "cat": "mgmt",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient who reveals a plan to harm a specific, named person after discharge. Which action reflects the nurse's legal and ethical duty?",
    "opts": [
      "Notify the provider and appropriate authorities per the duty to warn.",
      "Keep the information strictly confidential under all circumstances.",
      "Discharge the patient without documenting the statement.",
      "Confront the named person directly without involving anyone else."
    ],
    "key": 0,
    "rationale": "When a patient voices a credible, specific threat to an identifiable person, the duty to warn/protect overrides confidentiality; the nurse notifies the provider and appropriate authorities and documents. Absolute confidentiality (B), discharging without documentation (C), and personally confronting the target (D) are inappropriate.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK542190/",
      "https://medlineplus.gov/ency/article/000932.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0147",
    "type": "mc",
    "cat": "psych",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient who is grieving the recent death of a spouse. The patient says, \"I don't see any point in going on.\" What is the nurse's most appropriate response?",
    "opts": [
      "\"It sounds like you are in a lot of pain. Are you having thoughts of harming yourself?\"",
      "\"You should focus on the happy memories instead.\"",
      "\"Everyone feels this way after a loss; it will pass.\"",
      "\"Let's change the subject to something more positive.\""
    ],
    "key": 0,
    "rationale": "A statement like this can signal suicidal ideation, so the nurse must respond empathetically and directly assess for thoughts of self-harm, which allows for safety planning. Redirecting to happy memories (B), minimizing with a generalization (C), or changing the subject (D) dismiss the patient's distress and miss a possible safety risk.",
    "src": [
      "https://www.ncbi.nlm.nih.gov/books/NBK430876/",
      "https://medlineplus.gov/ency/article/000932.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0148",
    "type": "mc",
    "cat": "basic",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is caring for a patient who requires oral suctioning. Which action is correct to minimize the risk of hypoxia during suctioning?",
    "opts": [
      "Apply suction only while withdrawing the catheter and limit each pass to about 10 to 15 seconds.",
      "Apply continuous suction while inserting and withdrawing the catheter.",
      "Suction continuously for at least 30 seconds each pass.",
      "Withhold supplemental oxygen entirely during the procedure."
    ],
    "key": 0,
    "rationale": "To limit hypoxia, suction is applied only during withdrawal of the catheter and each pass is kept to roughly 10 to 15 seconds, with oxygenation between passes. Applying suction during insertion (B), suctioning 30 seconds or longer (C), and removing oxygen (D) all increase hypoxia and mucosal trauma.",
    "src": [
      "https://medlineplus.gov/ency/patientinstructions/000048.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0149",
    "type": "mc",
    "cat": "pharm",
    "diff": 3,
    "caseId": null,
    "step": null,
    "stem": "A patient is receiving a continuous IV infusion of insulin for hyperglycemia. Which laboratory value must the nurse monitor most frequently during the infusion?",
    "opts": [
      "Blood glucose and serum potassium.",
      "Serum calcium and phosphate.",
      "White blood cell count.",
      "Serum bilirubin."
    ],
    "key": 0,
    "rationale": "During an insulin infusion, the nurse monitors blood glucose frequently to avoid hypoglycemia and serum potassium because insulin drives potassium into cells, risking hypokalemia. Calcium and phosphate (B), WBC (C), and bilirubin (D) are not the priority values during insulin therapy.",
    "src": [
      "https://medlineplus.gov/druginfo/meds/a682611.html",
      "https://medlineplus.gov/ency/article/000479.htm"
    ],
    "cond": null
  },
  {
    "id": "nclex-0150",
    "type": "mc",
    "cat": "risk",
    "diff": 2,
    "caseId": null,
    "step": null,
    "stem": "A nurse is monitoring a patient after a liver biopsy. Which finding requires the nurse's immediate attention?",
    "opts": [
      "Increasing abdominal pain with a rising heart rate and falling blood pressure.",
      "Mild soreness at the biopsy site.",
      "A small amount of serous drainage on the dressing.",
      "The patient requesting to change position with assistance."
    ],
    "key": 0,
    "rationale": "The liver is highly vascular, so increasing abdominal pain with tachycardia and hypotension after a liver biopsy suggests internal hemorrhage and requires immediate attention. Mild site soreness (B), a small amount of serous drainage (C), and a routine assisted position change (D) are expected and non-urgent.",
    "src": [
      "https://medlineplus.gov/ency/article/003895.htm"
    ],
    "cond": null
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_DATA;
