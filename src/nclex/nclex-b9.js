// nclex-b9.js — Batch 9 (items 0089-0098). Weighted safety/mgmt. Schema v0.2.
const NCLEX_B9 = [
  {
    id: "nclex-0089", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "A nurse is reviewing a patient's home medications and finds the patient takes several drugs from different providers. Which action best addresses the risk of polypharmacy and adverse interactions?",
    opts: [
      "Perform medication reconciliation and report the full list to the provider.",
      "Tell the patient to stop the medications that seem unnecessary.",
      "Assume the providers have already coordinated the regimen.",
      "Document the list without further action."
    ],
    key: 0,
    rationale: "Medication reconciliation, compiling a complete, accurate list and communicating it to the provider, is the core safety strategy against polypharmacy and interactions. The nurse should not independently discontinue drugs (B), assume coordination (C), or simply file the list without acting (D).",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK551723/", "https://www.cdc.gov/patient-safety/index.html"],
    cond: null,
    subj: "pharmacology"
  },
  {
    id: "nclex-0090", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "A nurse is preparing to administer a high-alert medication (IV insulin). Which safety practice is required?",
    opts: [
      "Have a second nurse independently verify the drug, dose, and pump settings.",
      "Administer it quickly to avoid delaying the patient's other care.",
      "Round the dose to the nearest whole unit for convenience.",
      "Skip the double-check if the nurse is experienced with insulin."
    ],
    key: 0,
    rationale: "High-alert medications such as IV insulin require an independent double-check by a second nurse of the drug, dose, and pump settings to catch potentially fatal errors. Rushing (B), rounding doses (C), and skipping the check based on experience (D) all defeat the safeguard.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK519065/", "https://www.cdc.gov/patient-safety/index.html"],
    cond: null,
    subj: "pharmacology"
  },
  {
    id: "nclex-0091", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "A confused older adult patient keeps trying to climb out of bed and pull at the IV line. Which intervention should the nurse try first before considering any restraint?",
    opts: [
      "Move the patient closer to the nurses' station and use a bed alarm.",
      "Apply bilateral wrist restraints to prevent the patient from pulling lines.",
      "Sedate the patient with a PRN antipsychotic medication.",
      "Raise all four side rails and leave the patient alone in the room."
    ],
    key: 0,
    rationale: "Restraints are a last resort; the nurse should first try the least restrictive measures, such as relocating the patient for closer observation and using a bed alarm, along with addressing the cause of confusion. Physical restraints (B), chemical restraints (C), and four raised side rails (D, considered a restraint) come only after less restrictive options fail.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK565873/", "https://medlineplus.gov/ency/article/002356.htm"],
    cond: null,
    subj: "fundamentals"
  },
  {
    id: "nclex-0092", type: "mc", cat: "safety", diff: 3, caseId: null, step: null,
    stem: "A nurse notes a strong odor of natural gas while making home visits. What is the nurse's priority action?",
    opts: [
      "Get the patient out of the home and call for help from outside.",
      "Open windows and search the home for the source of the leak.",
      "Turn on lights to see better while investigating.",
      "Use a cell phone inside the home to photograph the appliances."
    ],
    key: 0,
    rationale: "With a suspected gas leak, the priority is to evacuate the patient and nurse and call for help from a safe location outside; any spark can cause an explosion. Searching for the source (B), operating light switches (C), or using electronics inside (D) can ignite the gas.",
    src: ["https://www.cdc.gov/carbon-monoxide/about/index.html", "https://medlineplus.gov/ency/article/002804.htm"],
    cond: null,
    subj: "fundamentals"
  },
  {
    id: "nclex-0093", type: "mc", cat: "mgmt", diff: 2, caseId: null, step: null,
    stem: "A nurse is documenting in the electronic health record. Which entry reflects appropriate documentation practice?",
    opts: [
      "An objective, factual, and timely note of the assessment and care provided.",
      "A subjective opinion that the patient is 'being difficult and dramatic.'",
      "A note written at the end of the shift covering all patients from memory.",
      "A blank space left in the chart to be filled in later if needed."
    ],
    key: 0,
    rationale: "Good documentation is objective, factual, accurate, and timely, reflecting assessments and interventions. Subjective, judgmental language (B), end-of-shift recall documentation (C), and leaving blank spaces (D) are all improper and create legal and safety risks.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK526085/", "https://www.cdc.gov/patient-safety/index.html"],
    cond: null,
    subj: "professional"
  },
  {
    id: "nclex-0094", type: "mc", cat: "mgmt", diff: 3, caseId: null, step: null,
    stem: "A nurse is caring for a patient who tells the nurse in confidence that they plan to leave the hospital against medical advice (AMA). What is the nurse's most appropriate action?",
    opts: [
      "Notify the provider and discuss the risks of leaving with the patient.",
      "Physically block the patient from leaving the unit.",
      "Ignore the statement, as patients often change their minds.",
      "Immediately discharge the patient without any documentation."
    ],
    key: 0,
    rationale: "A competent patient has the right to leave AMA, but the nurse should notify the provider, ensure the patient understands the risks, and document the discussion and the patient's decision. Physically detaining a competent patient (B) is false imprisonment, ignoring it (C) is negligent, and discharging without documentation (D) is improper.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK606114/", "https://medlineplus.gov/ency/patientinstructions/000445.htm"],
    cond: null,
    subj: "professional"
  },
  {
    id: "nclex-0095", type: "mc", cat: "mgmt", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient who does not speak English. The patient's family member offers to interpret during a discussion of surgical consent. What is the nurse's best action?",
    opts: [
      "Arrange for a qualified medical interpreter for the consent discussion.",
      "Allow the family member to interpret to save time.",
      "Use a translation app on a personal phone for the consent.",
      "Proceed in English and have the patient sign the form."
    ],
    key: 0,
    rationale: "For informed consent and other critical communication, a qualified medical interpreter is required to ensure accuracy and confidentiality; family members may omit, alter, or misunderstand medical information. A family interpreter (B), a personal translation app (C), or proceeding in English (D) all risk an invalid consent.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK551663/", "https://www.cdc.gov/health-literacy/php/develop-materials/index.html"],
    cond: null,
    subj: "professional"
  },
  {
    id: "nclex-0096", type: "mc", cat: "hpm", diff: 2, caseId: null, step: null,
    stem: "A nurse is teaching a postmenopausal patient about osteoporosis prevention. Which lifestyle recommendation is most appropriate?",
    opts: [
      "Perform regular weight-bearing exercise and ensure adequate calcium and vitamin D intake.",
      "Avoid all physical activity to protect fragile bones.",
      "Increase carbonated soft-drink and caffeine intake.",
      "Rely on sunlight exposure alone for all vitamin D and calcium needs."
    ],
    key: 0,
    rationale: "Weight-bearing exercise stimulates bone formation, and adequate calcium and vitamin D support bone density, making this the best osteoporosis-prevention advice. Avoiding activity (B) accelerates bone loss, excess cola and caffeine (C) can impair calcium balance, and sunlight alone (D) does not supply dietary calcium.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK441901/", "https://medlineplus.gov/ency/article/000360.htm"],
    cond: null,
    subj: "musculoskeletal"
  },
  {
    id: "nclex-0097", type: "mc", cat: "hpm", diff: 2, caseId: null, step: null,
    stem: "A nurse is counseling an adult patient about routine health screening. Which statement reflects appropriate blood pressure screening guidance for a healthy adult?",
    opts: [
      "Have blood pressure checked regularly, as hypertension often has no symptoms.",
      "Only check blood pressure when experiencing headaches.",
      "Blood pressure screening is unnecessary before age 60.",
      "A single normal reading means screening is never needed again."
    ],
    key: 0,
    rationale: "Hypertension is often asymptomatic (the 'silent killer'), so regular screening is recommended to detect and treat it early. Checking only with symptoms (B), delaying until age 60 (C), or stopping after one normal reading (D) all miss silent, ongoing disease.",
    src: ["https://www.cdc.gov/high-blood-pressure/about/index.html", "https://medlineplus.gov/ency/article/000468.htm"],
    cond: "htn",
    subj: "cardiac"
  },
  {
    id: "nclex-0098", type: "mc", cat: "hpm", diff: 1, caseId: null, step: null,
    stem: "A nurse is teaching a patient about colorectal cancer risk reduction. Which dietary recommendation is appropriate?",
    opts: [
      "Increase dietary fiber from fruits, vegetables, and whole grains.",
      "Increase intake of processed and red meats.",
      "Eliminate all fiber to rest the bowel.",
      "Avoid all fluids to reduce stool bulk."
    ],
    key: 0,
    rationale: "A diet high in fiber from fruits, vegetables, and whole grains is associated with reduced colorectal cancer risk. Diets high in processed and red meat (B) increase risk, eliminating fiber (C) is counterproductive, and avoiding fluids (D) is harmful.",
    src: ["https://www.cdc.gov/colorectal-cancer/prevention/index.html", "https://medlineplus.gov/ency/article/002470.htm"],
    cond: null,
    subj: "gi"
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B9;
