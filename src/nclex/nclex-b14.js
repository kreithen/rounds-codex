// nclex-b14.js — Batch 14 (items 0127-0136). mgmt/pharm/risk/safety. ZERO physio. Schema v0.2.
const NCLEX_B14 = [
  {
    id: "nclex-0127", type: "mc", cat: "mgmt", diff: 2, caseId: null, step: null,
    stem: "A charge nurse is making assignments on a medical-surgical unit. Which patient is most appropriate to assign to a licensed practical/vocational nurse (LPN/LVN)?",
    opts: [
      "A stable patient with a chronic wound requiring a routine dressing change.",
      "A newly admitted patient requiring a complete admission assessment.",
      "A patient requiring initial teaching about a new insulin regimen.",
      "A patient whose plan of care needs to be evaluated and revised."
    ],
    key: 0,
    rationale: "An LPN/LVN can perform routine, stable tasks such as a scheduled dressing change on a stable patient. Admission assessments (B), initial patient teaching (C), and evaluating/revising the care plan (D) require the registered nurse's scope of judgment.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK519519/", "https://www.ncsbn.org/public-files/NGN_Winter18.pdf"],
    cond: null
  },
  {
    id: "nclex-0128", type: "mc", cat: "mgmt", diff: 3, caseId: null, step: null,
    stem: "A nurse is caring for four patients. Which patient should the nurse assess first after receiving hand-off report?",
    opts: [
      "A patient 1 hour post-op with a blood pressure trend dropping from 118/70 to 92/54.",
      "A patient requesting a warm blanket and assistance to the bathroom.",
      "A patient scheduled for discharge teaching later in the afternoon.",
      "A patient asking when the next meal tray will arrive."
    ],
    key: 0,
    rationale: "A falling blood pressure in a fresh post-op patient suggests possible hemorrhage or shock and requires immediate assessment. A blanket request (B), scheduled discharge teaching (C), and a meal-tray question (D) are non-urgent and can be addressed later or delegated.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK525964/", "https://medlineplus.gov/ency/article/000039.htm"],
    cond: null
  },
  {
    id: "nclex-0129", type: "mc", cat: "mgmt", diff: 2, caseId: null, step: null,
    stem: "A nurse observes another nurse failing to perform hand hygiene before entering a patient's room. What is the most appropriate initial action?",
    opts: [
      "Respectfully remind the colleague to perform hand hygiene.",
      "Report the colleague to the state board of nursing immediately.",
      "Ignore it, since one missed occurrence is unlikely to matter.",
      "Document the incident in the patient's medical record."
    ],
    key: 0,
    rationale: "The most appropriate initial action is a direct, respectful reminder to the colleague, which addresses the infection-control breach immediately and collegially. Escalating to the board (B) is premature, ignoring it (C) endangers patients, and the medical record (D) is not the place for staff-performance notes.",
    src: ["https://www.cdc.gov/clean-hands/about/index.html", "https://www.ncbi.nlm.nih.gov/books/NBK570498/"],
    cond: null
  },
  {
    id: "nclex-0130", type: "mc", cat: "mgmt", diff: 2, caseId: null, step: null,
    stem: "A nurse is reviewing a verbal prescription received during an emergency. Which action ensures the prescription is safely and correctly transcribed?",
    opts: [
      "Read the prescription back to the provider to confirm accuracy.",
      "Transcribe it from memory after the emergency resolves.",
      "Ask another nurse to guess the intended dose.",
      "Delay clarification until the provider's next scheduled visit."
    ],
    key: 0,
    rationale: "A read-back of a verbal or telephone order to the prescriber confirms the drug, dose, route, and frequency, preventing transcription errors. Relying on memory (B), guessing (C), or delaying clarification (D) all introduce dangerous ambiguity.",
    src: ["https://www.cdc.gov/patient-safety/index.html"],
    cond: null
  },
  {
    id: "nclex-0131", type: "mc", cat: "pharm", diff: 2, caseId: null, step: null,
    stem: "A patient is prescribed levothyroxine for hypothyroidism. Which instruction should the nurse include in teaching?",
    opts: [
      "Take the medication on an empty stomach in the morning, and do not stop it abruptly.",
      "Take the medication with the largest meal of the day.",
      "Stop taking it once energy levels return to normal.",
      "Double the dose any day fatigue is worse."
    ],
    key: 0,
    rationale: "Levothyroxine is best absorbed on an empty stomach in the morning, and because it is lifelong replacement, it must not be stopped when the patient feels better. Taking it with a large meal (B) impairs absorption, stopping it (C) causes recurrence, and doubling doses (D) risks toxicity.",
    src: ["https://medlineplus.gov/druginfo/meds/a682461.html"],
    cond: null
  },
  {
    id: "nclex-0132", type: "mc", cat: "pharm", diff: 3, caseId: null, step: null,
    stem: "A patient is receiving IV heparin. The nurse should ensure which medication is readily available as the antidote for heparin overdose?",
    opts: ["Protamine sulfate", "Vitamin K (phytonadione)", "Naloxone", "Flumazenil"],
    key: 0,
    rationale: "Protamine sulfate is the specific antidote that reverses heparin. Vitamin K (B) reverses warfarin, naloxone (C) reverses opioids, and flumazenil (D) reverses benzodiazepines.",
    src: ["https://medlineplus.gov/druginfo/meds/a682826.html"],
    cond: null
  },
  {
    id: "nclex-0133", type: "sata", cat: "pharm", diff: 3, caseId: null, step: null,
    stem: "A patient is prescribed an aminoglycoside antibiotic (gentamicin) IV. Which parameters should the nurse monitor for toxicity? Select all that apply.",
    opts: [
      "Serum creatinine and BUN for nephrotoxicity",
      "Hearing changes and balance for ototoxicity",
      "Peak and trough drug levels",
      "Serum vitamin C level",
      "Skin freckle count",
      "Hair growth rate"
    ],
    key: [0, 1, 2],
    rationale: "Aminoglycosides are nephrotoxic and ototoxic, so the nurse monitors renal function (creatinine, BUN), hearing and balance, and peak/trough drug levels to keep the drug in the therapeutic range. Vitamin C level (D), freckle count (E), and hair growth (F) are irrelevant to aminoglycoside toxicity.",
    src: ["https://medlineplus.gov/druginfo/meds/a682275.html"],
    cond: null
  },
  {
    id: "nclex-0134", type: "mc", cat: "risk", diff: 2, caseId: null, step: null,
    stem: "A nurse is preparing a patient for a lumbar puncture. Which nursing action is appropriate for the post-procedure period?",
    opts: [
      "Encourage the patient to lie flat and increase fluid intake.",
      "Have the patient sit fully upright immediately to prevent aspiration.",
      "Restrict all fluids for 8 hours after the procedure.",
      "Encourage vigorous ambulation right after the procedure."
    ],
    key: 0,
    rationale: "After a lumbar puncture, lying flat and increasing fluids helps prevent and relieve a post-dural-puncture (spinal) headache from cerebrospinal fluid leakage. Sitting upright immediately (B), restricting fluids (C), and vigorous early ambulation (D) can worsen the headache.",
    src: ["https://medlineplus.gov/ency/article/003428.htm"],
    cond: null
  },
  {
    id: "nclex-0135", type: "mc", cat: "risk", diff: 2, caseId: null, step: null,
    stem: "A nurse reviews a patient's potassium level, which is 6.8 mEq/L. Which action should the nurse take first?",
    opts: [
      "Obtain a cardiac monitor and notify the provider promptly.",
      "Encourage the patient to eat a banana.",
      "Document the value as a normal finding.",
      "Administer a prescribed potassium supplement."
    ],
    key: 0,
    rationale: "A potassium of 6.8 mEq/L is severe hyperkalemia that can cause life-threatening dysrhythmias, so the nurse should get the patient on a cardiac monitor and notify the provider promptly. Eating a banana (B) or giving potassium (D) would worsen it, and it is far from normal (C).",
    src: ["https://medlineplus.gov/ency/article/001179.htm"],
    cond: null
  },
  {
    id: "nclex-0136", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient on contact precautions for a multidrug-resistant organism. Which personal protective equipment is required to enter the room for direct patient care?",
    opts: [
      "Gown and gloves",
      "N95 respirator only",
      "No protective equipment is needed",
      "Sterile surgical attire"
    ],
    key: 0,
    rationale: "Contact precautions require a gown and gloves for direct patient care to prevent transmission of organisms spread by contact. An N95 (B) is for airborne precautions, some protection is always needed here (C), and full sterile surgical attire (D) is not indicated for routine contact-precaution care.",
    src: ["https://www.cdc.gov/infection-control/hcp/basics/transmission-based-precautions.html", "https://medlineplus.gov/ency/patientinstructions/000446.htm"],
    cond: null
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B14;
