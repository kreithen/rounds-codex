// nclex-b6.js — Batch 6 (items 0063-0072). Weighted mgmt/safety/risk. Schema v0.2.
const NCLEX_B6 = [
  {
    id: "nclex-0063", type: "mc", cat: "mgmt", diff: 2, caseId: null, step: null,
    stem: "A nurse is preparing to delegate tasks at the start of the shift. Which task can the nurse appropriately delegate to unlicensed assistive personnel (UAP)?",
    opts: [
      "Assisting a stable patient with a bed bath and recording intake and output.",
      "Evaluating whether a patient's pain has responded to medication.",
      "Teaching a patient how to use an incentive spirometer for the first time.",
      "Assessing the lung sounds of a patient with new shortness of breath."
    ],
    key: 0,
    rationale: "Assisting with hygiene and recording intake and output are routine, standardized tasks within UAP scope. Evaluating pain response (B), first-time teaching (C), and assessing lung sounds (D) all require nursing judgment and cannot be delegated to UAP.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK519519/", "https://www.ncsbn.org/public-files/NGN_Winter18.pdf"],
    cond: null
  },
  {
    id: "nclex-0064", type: "mc", cat: "mgmt", diff: 3, caseId: null, step: null,
    stem: "A nurse discovers a medication error was made on the previous shift, resulting in a patient receiving a double dose of an antihypertensive. What is the nurse's first action?",
    opts: [
      "Assess the patient's current vital signs and clinical status.",
      "Complete an incident report before doing anything else.",
      "Notify the nurse who made the error on the previous shift.",
      "Wait to see whether the patient develops any symptoms."
    ],
    key: 0,
    rationale: "The nurse's first priority after discovering a medication error is patient safety: assess the patient's vital signs and clinical status to detect and respond to harm (e.g., hypotension). Notifying the provider and completing an incident report (B) follow, but assessment comes first; blaming the prior nurse (C) or waiting passively (D) is inappropriate.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK519065/", "https://www.cdc.gov/patient-safety/index.html"],
    cond: null
  },
  {
    id: "nclex-0065", type: "mc", cat: "mgmt", diff: 2, caseId: null, step: null,
    stem: "During a mass-casualty triage event, a nurse must categorize patients. Using standard triage, which patient should receive care first?",
    opts: [
      "A patient with an open airway obstruction who is not breathing effectively.",
      "A patient with a closed femur fracture who is alert and stable.",
      "A patient with fixed, dilated pupils and no spontaneous respirations after airway repositioning.",
      "A patient with minor lacerations who is walking and talking."
    ],
    key: 0,
    rationale: "In triage, immediate (red) priority goes to those with life-threatening but survivable problems, such as a correctable airway obstruction. A stable fracture (B) is delayed, a patient with no respirations after airway opening (C) is categorized as expectant/deceased in mass-casualty triage, and the walking-wounded (D) are minor.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK459369/", "https://www.cdc.gov/mass-casualty/hcp/triage/index.html"],
    cond: null
  },
  {
    id: "nclex-0066", type: "mc", cat: "mgmt", diff: 2, caseId: null, step: null,
    stem: "A nurse is obtaining informed consent signatures. Which situation requires the nurse to stop and notify the provider before the patient signs?",
    opts: [
      "The patient states they do not understand the risks and alternatives of the surgery.",
      "The patient asks the nurse for a pen to sign the consent form.",
      "The patient's adult child is present in the room during the discussion.",
      "The patient expresses normal preoperative nervousness about the surgery."
    ],
    key: 0,
    rationale: "Informed consent requires the patient to understand the procedure, risks, benefits, and alternatives. If the patient does not understand, the nurse must stop and notify the provider, whose duty it is to explain, before any signature. Wanting a pen (B), family presence (C), and ordinary nervousness (D) do not invalidate consent.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK430827/", "https://medlineplus.gov/ency/patientinstructions/000445.htm"],
    cond: null
  },
  {
    id: "nclex-0067", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient who is receiving oxygen therapy at home. Which safety instruction is essential to prevent injury?",
    opts: [
      "Keep the oxygen and tubing at least 6 feet away from any open flame or heat source.",
      "Store the oxygen tank lying flat on the floor near the stove.",
      "Apply petroleum jelly to the nares to relieve dryness.",
      "Smoking is acceptable as long as the oxygen flow rate is low."
    ],
    key: 0,
    rationale: "Oxygen supports combustion, so equipment must be kept well away (at least 6 feet) from open flames and heat sources. Storing a tank near a stove (B) is a fire hazard, petroleum-based products near oxygen (C) are flammable and should be avoided, and smoking is never safe around oxygen (D).",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK551617/", "https://medlineplus.gov/ency/patientinstructions/000049.htm"],
    cond: null
  },
  {
    id: "nclex-0068", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient during a seizure. Which action is the priority to maintain patient safety?",
    opts: [
      "Turn the patient onto their side and protect the head from injury.",
      "Insert a padded tongue blade between the patient's teeth.",
      "Restrain the patient's arms and legs to stop the movements.",
      "Move the patient to a chair to prevent falling out of bed."
    ],
    key: 0,
    rationale: "During a seizure, the priority is to protect the airway and prevent injury: turn the patient to the side (to prevent aspiration) and cushion the head. Never insert anything into the mouth (B), do not restrain the limbs (C, which can cause fractures), and do not move the patient to a chair mid-seizure (D).",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK430765/", "https://medlineplus.gov/ency/article/003200.htm"],
    cond: null
  },
  {
    id: "nclex-0069", type: "mc", cat: "risk", diff: 2, caseId: null, step: null,
    stem: "A nurse is reviewing morning laboratory results. Which result is a critical value that requires immediate provider notification?",
    opts: [
      "Platelet count of 22,000/microL.",
      "Hemoglobin of 11.8 g/dL.",
      "White blood cell count of 8,500/microL.",
      "Serum sodium of 138 mEq/L."
    ],
    key: 0,
    rationale: "A platelet count of 22,000/microL is severe thrombocytopenia (normal 150,000 to 400,000) that carries a high risk of spontaneous bleeding and requires immediate notification and bleeding precautions. Hemoglobin 11.8 (B), WBC 8,500 (C), and sodium 138 (D) are near-normal.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK542208/", "https://medlineplus.gov/ency/article/003647.htm"],
    cond: null
  },
  {
    id: "nclex-0070", type: "mc", cat: "risk", diff: 3, caseId: null, step: null,
    stem: "A patient is scheduled for a contrast-enhanced CT scan with iodinated contrast. Which pre-procedure laboratory value is most important for the nurse to review?",
    opts: [
      "Serum creatinine and estimated glomerular filtration rate (eGFR).",
      "Serum potassium and chloride.",
      "White blood cell count and differential.",
      "Serum albumin and total protein."
    ],
    key: 0,
    rationale: "Iodinated contrast can cause contrast-induced nephropathy, so renal function (serum creatinine and eGFR) must be checked before the scan to identify patients at risk. Electrolytes (B), WBC (C), and protein (D) are not the primary safety screen for contrast administration.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK448066/", "https://medlineplus.gov/ency/article/003330.htm"],
    cond: null
  },
  {
    id: "nclex-0071", type: "mc", cat: "risk", diff: 2, caseId: null, step: null,
    stem: "A nurse is monitoring a patient receiving a unit of packed red blood cells. Fifteen minutes into the transfusion, the patient reports chills, low back pain, and a feeling of apprehension. What is the nurse's first action?",
    opts: [
      "Stop the transfusion immediately and keep the IV line open with normal saline.",
      "Slow the transfusion rate and continue to monitor the patient.",
      "Administer an antipyretic and continue the transfusion.",
      "Elevate the head of the bed and reassess in 30 minutes."
    ],
    key: 0,
    rationale: "Chills, low back pain, and apprehension early in a transfusion suggest an acute hemolytic transfusion reaction. The first action is to stop the transfusion immediately and maintain IV access with normal saline (via new tubing), then notify the provider and blood bank. Slowing (B), medicating and continuing (C), or delaying (D) can be fatal.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK574536/", "https://medlineplus.gov/ency/article/000554.htm"],
    cond: null
  },
  {
    id: "nclex-0072", type: "mc", cat: "pharm", diff: 2, caseId: null, step: null,
    stem: "A patient is prescribed digoxin for heart failure. Before administering the morning dose, the nurse notes the apical heart rate is 52 beats per minute. What is the nurse's best action?",
    opts: [
      "Hold the dose and notify the provider of the bradycardia.",
      "Administer the dose as scheduled since the rhythm is regular.",
      "Administer half the prescribed dose to be cautious.",
      "Give the dose and recheck the heart rate in one hour."
    ],
    key: 0,
    rationale: "Digoxin slows the heart rate; the standard parameter is to hold the dose and notify the provider if the apical pulse is below 60 beats per minute in an adult, because giving it could worsen bradycardia and signal toxicity. Administering full (B) or partial (C) doses or giving and rechecking later (D) is unsafe.",
    src: ["https://medlineplus.gov/druginfo/meds/a682301.html", "https://www.ncbi.nlm.nih.gov/books/NBK556025/"],
    cond: "chf"
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B6;
