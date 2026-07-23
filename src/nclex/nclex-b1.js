// nclex-b1.js — Pilot batch (26 items) for the Rounds Codex NCLEX module.
// Source: the 4 seed packets approved by Dr. Kreithen. Schema per nclex-module-workflow.md v0.2.
// One declaration only. Node-requireable for validation; inert in browser.
const NCLEX_B1 = [
  // ===== Packet: Core (Management / Pharm / Physio) =====
  {
    id: "nclex-0001", type: "mc", cat: "mgmt", diff: 2, caseId: null, step: null,
    stem: "A charge nurse on a busy telemetry unit is assigning patient care. Which patient is most appropriate to assign to an Unlicensed Assistive Personnel (UAP)?",
    opts: [
      "A patient with new-onset atrial fibrillation who requires a continuous diltiazem infusion.",
      "A patient 24 hours post total knee arthroplasty who needs assistance ambulating for the first time.",
      "A patient with COPD who requires oxygen saturation monitoring via pulse oximetry.",
      "A patient being discharged to a skilled nursing facility who needs comprehensive medication education."
    ],
    key: 2,
    rationale: "Measuring oxygen saturation via pulse oximetry is a routine, non-invasive skill requiring no clinical judgment, so it is appropriate to delegate to a UAP. First-time ambulation of a fresh post-op patient (B) requires RN evaluation for orthostatic changes and gait stability. IV medication titration (A) and discharge teaching (D) can never be delegated to a UAP.",
    src: ["https://www.ncsbn.org/public-files/NGN_Winter18.pdf", "https://www.ncbi.nlm.nih.gov/books/NBK519519/"],
    cond: null,
    subj: "professional"
  },
  {
    id: "nclex-0002", type: "mc", cat: "mgmt", diff: 2, caseId: null, step: null,
    stem: "The nurse is reviewing the assigned patient workload for the day. Which patient should the nurse assess first?",
    opts: [
      "A patient with diabetes mellitus whose fasting blood glucose is 140 mg/dL.",
      "A patient with a deep vein thrombosis who reports sudden onset of shortness of breath and chest pain.",
      "A patient with chronic kidney disease whose latest serum creatinine is 2.1 mg/dL.",
      "A patient recovering from an appendectomy requesting a PRN dose of oral analgesic."
    ],
    key: 1,
    rationale: "Sudden dyspnea and chest pain in a patient with a known DVT strongly suggests a life-threatening pulmonary embolism; this unstable patient takes priority over stable hyperglycemia (A), a chronic stable creatinine elevation (C), and routine post-op pain management (D). Airway-Breathing-Circulation and the least stable patient come first.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK560891/", "https://medlineplus.gov/ency/article/000132.htm"],
    cond: "pe",
    subj: "professional"
  },
  {
    id: "nclex-0003", type: "mc", cat: "pharm", diff: 2, caseId: null, step: null,
    stem: "The nurse is preparing to administer furosemide 40 mg IV push to a patient with acute decompensated heart failure. Which laboratory value requires immediate verification before administering the medication?",
    opts: ["Sodium 136 mEq/L", "Potassium 3.1 mEq/L", "Blood Urea Nitrogen 22 mg/dL", "Hemoglobin 12.5 g/dL"],
    key: 1,
    rationale: "Furosemide is a potent loop diuretic that causes potassium excretion. Giving it to a patient already hypokalemic (normal 3.5-5.0 mEq/L) can trigger lethal arrhythmias such as Torsades de Pointes or ventricular fibrillation. Sodium 136 (A) and BUN 22 (C) are essentially normal, and hemoglobin (D) is unaffected by furosemide administration.",
    src: ["https://medlineplus.gov/druginfo/meds/a682858.html", "https://www.ncbi.nlm.nih.gov/books/NBK499921/"],
    cond: "chf",
    subj: "cardiac"
  },
  {
    id: "nclex-0004", type: "mc", cat: "pharm", diff: 2, caseId: null, step: null,
    stem: "A patient with atrial fibrillation is prescribed warfarin for stroke prevention. Which dietary instruction is most vital during discharge teaching?",
    opts: [
      "Avoid all foods containing sodium and artificial sweeteners.",
      "Maintain a consistent daily intake of green leafy vegetables high in Vitamin K.",
      "Eliminate red meat and dairy products entirely from the diet.",
      "Increase intake of citrus fruits to maximize absorption."
    ],
    key: 1,
    rationale: "Vitamin K is the physiologic antidote to warfarin. Patients do not need to eliminate Vitamin K; they must keep intake consistent day to day so the provider can accurately calibrate the target INR. Sudden swings in Vitamin K intake, not sodium (A), protein (C), or citrus (D), are what destabilize the INR.",
    src: ["https://medlineplus.gov/druginfo/meds/a682277.html", "https://www.ncbi.nlm.nih.gov/books/NBK470313/"],
    cond: "afib",
    subj: "cardiac"
  },
  {
    id: "nclex-0005", type: "mc", cat: "risk", diff: 2, caseId: null, step: null,
    stem: "A patient is 6 hours post-op following an abdominal hysterectomy. Which assessment finding is a potential complication that must be reported to the provider immediately?",
    opts: [
      "Urine output of 110 mL over the last 4 hours via indwelling catheter.",
      "Pain rated 6 out of 10 along the abdominal incision line.",
      "A serosanguineous stain measuring 2 cm on the surgical dressing.",
      "A sudden drop in blood pressure from 122/78 to 88/54 mmHg with tachycardia."
    ],
    key: 3,
    rationale: "A sudden, steep BP drop with tachycardia signals impending hypovolemic shock from internal hemorrhage (or early sepsis) and demands immediate provider notification. Urine output of 110 mL/4 h averages ~27.5 mL/hr, near the acceptable ~30 mL/hr floor; moderate incisional pain (B) and a small serosanguineous stain (C) are expected 6 hours post-op.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK513297/", "https://medlineplus.gov/ency/article/000167.htm"],
    cond: null,
    subj: "perioperative"
  },
  {
    id: "nclex-0006", type: "mc", cat: "physio", diff: 2, caseId: null, step: null,
    stem: "A patient with liver cirrhosis presents with severe ascites and confusion. The provider prescribes lactulose 30 mL orally three times daily. What is the primary therapeutic rationale?",
    opts: [
      "To reduce serum ammonia levels by promoting excretion through the stool.",
      "To decrease portal vein hypertension and minimize esophageal varices.",
      "To stimulate production of clotting factors by the liver.",
      "To maintain normal electrolyte balance and fluid distribution."
    ],
    key: 0,
    rationale: "Hepatic encephalopathy is driven by neurotoxic ammonia the scarred liver cannot clear. Lactulose acidifies the colon, drawing ammonia (NH3) into the bowel and converting it to ammonium (NH4+), which is expelled via its laxative effect. It does not lower portal pressure (B), make clotting factors (C), or primarily balance electrolytes (D).",
    src: ["https://medlineplus.gov/druginfo/meds/a682338.html", "https://www.ncbi.nlm.nih.gov/books/NBK441911/"],
    cond: "cirrhosis",
    subj: "gi"
  },
  {
    id: "nclex-0007", type: "matrixMC", cat: "physio", diff: 3, caseId: null, step: null,
    stem: "A 68-year-old man presents with severe dyspnea, pink frothy sputum, and orthopnea. History of chronic hypertension and left-sided heart failure. BP 172/94, HR 112, RR 28, SpO2 86% on room air, diffuse bilateral coarse crackles. For each intervention, indicate whether it is Anticipated or Contraindicated for this patient.",
    rows: [
      "Administer oxygen via high-flow nasal cannula or non-rebreather mask",
      "Place the patient flat and supine to maximize spinal alignment",
      "Administer IV morphine sulfate as prescribed to reduce preload and anxiety",
      "Administer a rapid-acting IV loop diuretic (e.g., furosemide)",
      "Administer a 500 mL bolus of 0.9% normal saline over 30 minutes"
    ],
    cols: ["Anticipated", "Contraindicated"],
    key: [0, 1, 0, 0, 1],
    rationale: "This is acute cardiogenic pulmonary edema. Oxygen is anticipated (SpO2 86% with distress). Flat supine positioning is contraindicated: it increases venous return to an overwhelmed heart and worsens congestion; the patient needs high-Fowler's. Morphine is anticipated as a mild vasodilator that lowers preload and eases respiratory panic. A loop diuretic is anticipated to offload pulmonary fluid. A normal saline bolus is contraindicated: adding volume to acute pulmonary edema worsens overload and risks respiratory arrest.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK544260/", "https://medlineplus.gov/ency/article/000140.htm"],
    cond: "chf",
    subj: "cardiac"
  },

  // ===== Packet: Maternal / Peds / Psych / Dosage =====
  {
    id: "nclex-0008", type: "mc", cat: "risk", diff: 2, caseId: null, step: null,
    stem: "A patient at 34 weeks gestation is admitted with severe preeclampsia. Which finding indicates worsening disease requiring immediate provider notification?",
    opts: [
      "2+ bilateral pitting edema in the lower extremities.",
      "Sudden report of epigastric pain and a severe, persistent frontal headache.",
      "A 1-hour urine output of 45 mL.",
      "Fetal heart rate variability showing moderate accelerations."
    ],
    key: 1,
    rationale: "Epigastric pain reflects hepatic capsule stretch/ischemia and can herald HELLP syndrome or hepatic rupture, while a severe frontal headache signals worsening cerebral edema and impending eclampsia. Lower-extremity edema (A) and urine output above 30 mL/hr (C) are expected preeclamptic parameters; moderate accelerations (D) are reassuring.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK570611/", "https://medlineplus.gov/ency/article/000898.htm"],
    cond: "preeclampsia",
    subj: "maternal-newborn"
  },
  {
    id: "nclex-0009", type: "mc", cat: "hpm", diff: 2, caseId: null, step: null,
    stem: "The nurse is assessing a newborn 4 hours after a vaginal delivery. Which finding should be reported to the pediatrician immediately?",
    opts: [
      "Blue color of the hands and feet with a pink trunk.",
      "A blood glucose level of 52 mg/dL.",
      "Sustained nasal flaring and intercostal chest retractions at rest.",
      "Milia across the bridge of the nose and forehead."
    ],
    key: 2,
    rationale: "Sustained nasal flaring and intercostal retractions are definitive signs of neonatal respiratory distress and require immediate intervention. Acrocyanosis (A) is expected for 24-48 hours, a glucose of 52 mg/dL (B) is safe (normal >40-45), and milia (D) are benign.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK560595/", "https://medlineplus.gov/ency/article/007306.htm"],
    cond: null,
    subj: "maternal-newborn"
  },
  {
    id: "nclex-0010", type: "mc", cat: "physio", diff: 2, caseId: null, step: null,
    stem: "A 4-year-old with Tetralogy of Fallot suddenly becomes agitated, cyanotic, and begins gasping for air. Which action should the nurse take first?",
    opts: [
      "Administer a prescribed PRN dose of oral oxygen.",
      "Place the child immediately into a knee-chest position.",
      "Prepare a dose of IV morphine sulfate to calm the patient.",
      "Call the rapid response team to initiate emergency intubation."
    ],
    key: 1,
    rationale: "This is a hypercyanotic (Tet) spell. The knee-chest position immediately raises systemic vascular resistance, forcing more blood across the pulmonary outflow to be oxygenated and rapidly improving systemic oxygenation. Oxygen and morphine may follow, but the positioning change is the immediate life-saving step; intubation (D) is not first-line.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK534803/", "https://medlineplus.gov/ency/article/001567.htm"],
    cond: null,
    subj: "pediatrics"
  },
  {
    id: "nclex-0011", type: "mc", cat: "hpm", diff: 2, caseId: null, step: null,
    stem: "The nurse is giving discharge instructions to parents of an 18-month-old treated for acute otitis media. Which statement indicates correct understanding of pediatric safety and infection prevention?",
    opts: [
      "\"I will prop my child's bottle up in bed so they can fall asleep easily.\"",
      "\"I will avoid exposing my child to secondhand tobacco smoke in our home and car.\"",
      "\"I should stop the oral antibiotics as soon as my child's ear pain goes away.\"",
      "\"I will use cotton swabs to clean deep inside my child's ear canal daily.\""
    ],
    key: 1,
    rationale: "Secondhand smoke is a proven risk factor that inflames and blocks the Eustachian tubes, directly promoting otitis media. Bottle propping (A) pools fluid in the pharynx and raises infection risk, antibiotic courses must be finished completely (C), and objects should never be inserted into the ear canal (D).",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK470332/", "https://medlineplus.gov/ency/article/000638.htm"],
    cond: null,
    subj: "pediatrics"
  },
  {
    id: "nclex-0012", type: "mc", cat: "psych", diff: 2, caseId: null, step: null,
    stem: "A patient with major depressive disorder, admitted 3 days ago after a suicidal gesture, was withdrawn and uncommunicative but is now suddenly smiling, neatly dressed, and giving away personal belongings. Which action is the priority?",
    opts: [
      "Document the improvement and encourage the patient to join group therapy.",
      "Allow the patient privacy to interact and bond with other patients.",
      "Implement continuous one-on-one suicide precautions immediately.",
      "Ask the provider to downgrade the patient's risk status for discharge."
    ],
    key: 2,
    rationale: "A sudden mood lift in a severely depressed patient, paired with giving away possessions, is a classic sign the patient has finalized a suicide plan and now has the energy to carry it out. The priority is to secure physical safety with 1:1 line-of-sight monitoring, not to relax observation (A, B) or downgrade risk (D).",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK557428/", "https://medlineplus.gov/ency/article/001554.htm"],
    cond: null,
    subj: "mental-health"
  },
  {
    id: "nclex-0013", type: "numeric", cat: "pharm", diff: 2, caseId: null, step: null,
    stem: "A provider prescribes a continuous IV heparin infusion at 1,200 units/hour. The pharmacy supplies a 500 mL bag labeled \"Heparin Sodium 25,000 units in 5% Dextrose.\" The nurse should set the pump to deliver how many mL/hour? (Round to the nearest whole number.)",
    numeric: { answer: 24, unit: "mL/hour", tol: 0 },
    rationale: "Concentration = 25,000 units / 500 mL = 50 units/mL. Rate = 1,200 units/hr divided by 50 units/mL = 24 mL/hour.",
    src: ["https://medlineplus.gov/druginfo/meds/a682826.html", "https://www.ncbi.nlm.nih.gov/books/NBK538247/"],
    cond: null,
    subj: "pharmacology"
  },
  {
    id: "nclex-0014", type: "numeric", cat: "pharm", diff: 3, caseId: null, step: null,
    stem: "A child weighing 44 lb is prescribed amoxicillin 40 mg/kg/day divided every 12 hours. The pharmacy dispenses amoxicillin suspension 250 mg / 5 mL. How many mL should the nurse give per dose? (Round to the nearest tenth.)",
    numeric: { answer: 8, unit: "mL/dose", tol: 0.1 },
    rationale: "Weight = 44 / 2.2 = 20 kg. Daily dose = 20 kg x 40 mg/kg = 800 mg/day. Divided q12h (2 doses) = 400 mg/dose. Volume = (400 mg / 250 mg) x 5 mL = 8 mL/dose.",
    src: ["https://medlineplus.gov/druginfo/meds/a685001.html", "https://www.ncbi.nlm.nih.gov/books/NBK482250/"],
    cond: null,
    subj: "pharmacology"
  },

  // ===== Packet: Infection Control (all Safety) =====
  {
    id: "nclex-0015", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "A nurse is admitting a patient with a productive cough, drenching night sweats, and a 15-pound weight loss over the past month. Which infection control measure must be implemented immediately?",
    opts: [
      "Private room with staff wearing a standard surgical mask on entry.",
      "Negative-pressure airflow room with healthcare workers wearing an N95 respirator.",
      "Semi-private room shared with a patient who has bacterial pneumonia.",
      "Droplet precautions with the room door kept wide open for ventilation."
    ],
    key: 1,
    rationale: "This presentation is classic for active pulmonary tuberculosis, which requires airborne precautions: a negative-pressure (AIIR) room and an N95 (or higher) respirator for everyone entering. A surgical mask (A) is inadequate, cohorting with another infection (C) is unsafe, and airborne precautions require the door kept closed (D).",
    src: ["https://www.cdc.gov/tb/hcp/infection-control/index.html", "https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html"],
    cond: "tb",
    subj: "infectious"
  },
  {
    id: "nclex-0016", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "Which patient requires strict implementation of Contact Precautions?",
    opts: [
      "A patient with an active scabies infestation who needs help bathing.",
      "A patient with Neisseria meningitidis receiving IV antibiotics.",
      "A patient with localized herpes zoster whose lesions are fully crusted over.",
      "A patient with Mycoplasma pneumoniae who has a frequent cough."
    ],
    key: 0,
    rationale: "Scabies is a highly contagious skin infestation spread by direct skin-to-skin contact and requires Contact Precautions (gown and gloves). Neisseria meningitidis (B) and Mycoplasma pneumoniae (D) require Droplet Precautions, and fully crusted shingles (C) is no longer contagious.",
    src: ["https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html", "https://www.ncbi.nlm.nih.gov/books/NBK544312/"],
    cond: null,
    subj: "infectious"
  },
  {
    id: "nclex-0017", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient with confirmed Clostridioides difficile infection and severe diarrhea. Which infection control action is most critical?",
    opts: [
      "Cleanse hands with an alcohol-based hand rub before leaving the room.",
      "Wear a surgical mask and eye goggles when entering the room.",
      "Wash hands with soap and water after removing gloves and before exiting.",
      "Place the patient in a negative-pressure isolation room."
    ],
    key: 2,
    rationale: "C. difficile forms spores that resist alcohol-based sanitizer; the mechanical action of soap-and-water handwashing is required to physically remove them. A mask (B) and negative pressure (D) are not indicated for C. diff, which needs Contact Precautions, and alcohol rub alone (A) is insufficient.",
    src: ["https://www.cdc.gov/c-diff/hcp/clinical-overview/index.html", "https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html"],
    cond: null,
    subj: "infectious"
  },
  {
    id: "nclex-0018", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "A nurse is preparing to enter the room of a patient on droplet precautions to perform oral suctioning likely to generate fluid splashes. In which sequence should the nurse don PPE?",
    opts: [
      "Gown -> Mask/Respirator -> Goggles/Face Shield -> Gloves",
      "Gloves -> Gown -> Mask/Respirator -> Goggles/Face Shield",
      "Mask/Respirator -> Goggles/Face Shield -> Gown -> Gloves",
      "Gown -> Gloves -> Mask/Respirator -> Goggles/Face Shield"
    ],
    key: 0,
    rationale: "The CDC donning sequence is gown, then mask or respirator, then goggles or face shield, then gloves last so the gloves cover the gown cuffs. The other orders place gloves too early or misorder the protective layers.",
    src: ["https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html", "https://www.cdc.gov/niosh/npptl/pdfs/PPE-Sequence-508.pdf"],
    cond: null,
    subj: "infectious"
  },
  {
    id: "nclex-0019", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "A nurse has finished care for a patient on airborne and contact precautions and is standing inside the room near the exit. Which PPE item should be removed first?",
    opts: ["N95 Respirator", "Gown", "Goggles", "Gloves"],
    key: 3,
    rationale: "Doffing goes from most to least contaminated: gloves, then gown, then goggles/face shield, then mask/respirator. Gloves are the most contaminated and come off first. The N95 (A) is removed last and only after leaving the room and closing the door.",
    src: ["https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html", "https://www.cdc.gov/niosh/npptl/pdfs/PPE-Sequence-508.pdf"],
    cond: null,
    subj: "infectious"
  },
  {
    id: "nclex-0020", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient with acute myeloid leukemia and severe neutropenia after intensive chemotherapy. Which intervention protects this patient from healthcare-associated infection?",
    opts: [
      "Place fresh flowers in water at the bedside to boost morale.",
      "Use a negative-pressure isolation room with 12 air exchanges per hour.",
      "Prohibit raw fruits, raw vegetables, and undercooked meats from meals.",
      "Require the patient to wear an N95 respirator at all times while resting."
    ],
    key: 2,
    rationale: "Neutropenic (protective) precautions shield the immunocompromised patient from external pathogens; raw produce and undercooked meat harbor bacteria and mold spores that can be fatal, so all food must be thoroughly cooked. Fresh flowers/standing water (A) harbor Pseudomonas and are banned, the patient needs positive- not negative-pressure (B), and a resting N95 (D) is not required in a protective-isolation room.",
    src: ["https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html", "https://www.ncbi.nlm.nih.gov/books/NBK513351/"],
    cond: null,
    subj: "infectious"
  },

  // ===== Packet: Fluids & Electrolytes =====
  {
    id: "nclex-0021", type: "mc", cat: "risk", diff: 2, caseId: null, step: null,
    stem: "A patient with chronic kidney disease missed hemodialysis and has a serum potassium of 6.8 mEq/L. Which intervention should the nurse anticipate implementing first?",
    opts: [
      "Administer oral sodium polystyrene sulfonate.",
      "Obtain a 12-lead electrocardiogram immediately.",
      "Initiate a continuous IV infusion of 0.9% normal saline.",
      "Educate the patient on restricting potassium-rich foods."
    ],
    key: 1,
    rationale: "A potassium of 6.8 mEq/L is severe hyperkalemia (normal 3.5-5.0) that can cause lethal arrhythmias, so obtaining an ECG to check for cardiac toxicity (peaked T waves, widened QRS) is the immediate priority and guides emergency therapy. Sodium polystyrene sulfonate (A) takes hours, saline (C) does not lower potassium acutely, and diet teaching (D) is not urgent.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK470284/", "https://medlineplus.gov/ency/article/000479.htm"],
    cond: null,
    subj: "fluid-electrolyte"
  },
  {
    id: "nclex-0022", type: "mc", cat: "physio", diff: 2, caseId: null, step: null,
    stem: "A patient admitted with severe vomiting has a serum potassium of 2.8 mEq/L. Which ECG change is most characteristic of this imbalance?",
    opts: [
      "Tall, peaked T waves and a widened QRS complex.",
      "Prolonged ST segment and a shortened QT interval.",
      "Flattened T waves, ST-segment depression, and U waves.",
      "Progressive lengthening of the PR interval until a QRS is dropped."
    ],
    key: 2,
    rationale: "A potassium of 2.8 mEq/L is severe hypokalemia, which delays ventricular repolarization and produces flattened T waves, ST depression, and U waves. Tall peaked T waves (A) indicate hyperkalemia, and a dropped QRS after PR lengthening (D) is a second-degree AV block, not a primary hypokalemia finding.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK482465/", "https://medlineplus.gov/ency/article/000479.htm"],
    cond: null,
    subj: "fluid-electrolyte"
  },
  {
    id: "nclex-0023", type: "mc", cat: "physio", diff: 3, caseId: null, step: null,
    stem: "A patient with SIADH has a serum sodium of 118 mEq/L and is lethargic with a severe headache. Which prescription should the nurse expect?",
    opts: [
      "IV infusion of 3% hypertonic saline at a slow, controlled rate.",
      "A rapid 1,000 mL bolus of 0.45% half-normal saline.",
      "Continuous IV infusion of 5% dextrose in water (D5W).",
      "Increased oral fluid intake to at least 2,500 mL per day."
    ],
    key: 0,
    rationale: "This is severe symptomatic hyponatremia from SIADH fluid retention, risking cerebral edema and seizures. Slow, controlled 3% hypertonic saline is the high-alert treatment to raise sodium carefully. Hypotonic fluids (B, C) and increased oral intake (D) would worsen the hyponatremia.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK507777/", "https://medlineplus.gov/ency/article/000394.htm"],
    cond: null,
    subj: "fluid-electrolyte"
  },
  {
    id: "nclex-0024", type: "mc", cat: "risk", diff: 2, caseId: null, step: null,
    stem: "A patient with diabetes insipidus is admitted with severe dehydration, a serum sodium of 158 mEq/L, and extreme thirst. Which intervention is the priority?",
    opts: [
      "Encourage high-sodium broths to stabilize fluid shifts.",
      "Implement seizure precautions and monitor neurologic status hourly.",
      "Administer IV loop diuretics to clear excess volume.",
      "Restrict all oral fluid intake to prevent fluid overload."
    ],
    key: 1,
    rationale: "A sodium of 158 mEq/L is severe hypernatremia (normal 135-145) that shrinks brain cells and causes altered mentation and seizures, so seizure precautions with close neuro monitoring is the priority. High-sodium broths (A) and fluid restriction (D) are contraindicated in a dehydrated, hypernatremic patient, and diuretics (C) worsen volume loss.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK441960/", "https://medlineplus.gov/ency/article/000394.htm"],
    cond: null,
    subj: "fluid-electrolyte"
  },
  {
    id: "nclex-0025", type: "mc", cat: "physio", diff: 2, caseId: null, step: null,
    stem: "A patient is 12 hours post total thyroidectomy and reports perioral numbness and finger spasms when the blood pressure cuff inflates. Which laboratory value explains these findings?",
    opts: ["Serum Calcium 7.2 mg/dL", "Serum Magnesium 2.6 mEq/L", "Serum Potassium 5.1 mEq/L", "Serum Calcium 10.9 mg/dL"],
    key: 0,
    rationale: "Thyroidectomy can injure or remove the parathyroid glands, dropping PTH and causing hypocalcemia (normal 8.5-10.5 mg/dL). Low calcium raises neuromuscular excitability: perioral numbness and a hand spasm on cuff inflation (Trousseau's sign) are classic. Choice B is mild hypermagnesemia and C is mild hyperkalemia, neither of which explains these signs.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK430912/", "https://medlineplus.gov/ency/article/000365.htm"],
    cond: null,
    subj: "fluid-electrolyte"
  },
  {
    id: "nclex-0026", type: "mc", cat: "pharm", diff: 3, caseId: null, step: null,
    stem: "A patient with severe preeclampsia is receiving a continuous IV magnesium sulfate infusion. The nurse notes a respiratory rate of 10, absent deep tendon reflexes, and 15 mL of urine over the past hour. Which action must the nurse take immediately?",
    opts: [
      "Increase the magnesium sulfate infusion to reach a therapeutic level.",
      "Stop the infusion immediately and prepare to administer calcium gluconate.",
      "Document the findings as an expected therapeutic response.",
      "Administer a rapid normal saline bolus to flush the kidneys."
    ],
    key: 1,
    rationale: "Bradypnea (<12), loss of deep tendon reflexes, and oliguria (<30 mL/hr) are signs of magnesium sulfate toxicity, a CNS depressant that can cause respiratory and cardiac arrest. The nurse must stop the infusion at once and prepare the antidote, calcium gluconate. Increasing the rate (A) or treating it as expected (C) is dangerous.",
    src: ["https://medlineplus.gov/druginfo/meds/a682401.html", "https://www.ncbi.nlm.nih.gov/books/NBK554593/"],
    cond: "preeclampsia",
    subj: "maternal-newborn"
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B1;
