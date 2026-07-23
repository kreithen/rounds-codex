// nclex-b2.js — Batch 2 (items 0027-0036) for the Rounds Codex NCLEX module.
// Exercises new NGN formats: sata, selectN, cloze, ddTable, matrixMR, pair. Schema per v0.2.
// One declaration only. Node-requireable for validation; inert in browser.
const NCLEX_B2 = [
  {
    id: "nclex-0027", type: "sata", cat: "basic", diff: 2, caseId: null, step: null,
    stem: "A nurse is teaching a patient newly diagnosed with type 2 diabetes about recognizing hypoglycemia. Which manifestations should the nurse include as early signs of a low blood glucose? Select all that apply.",
    opts: [
      "Diaphoresis and cool, clammy skin",
      "Tremors and shakiness",
      "Fruity, acetone odor on the breath",
      "Palpitations and tachycardia",
      "Deep, rapid Kussmaul respirations",
      "Sudden hunger and irritability"
    ],
    key: [0, 1, 3, 5],
    rationale: "Early hypoglycemia triggers a sympathetic (adrenergic) response: diaphoresis with cool clammy skin, tremors, palpitations/tachycardia, and sudden hunger with irritability. A fruity acetone breath odor and Kussmaul respirations are hallmarks of diabetic ketoacidosis (hyperglycemia), not hypoglycemia.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK534841/", "https://medlineplus.gov/ency/article/000386.htm"],
    cond: null,
    subj: "endocrine"
  },
  {
    id: "nclex-0028", type: "mc", cat: "mgmt", diff: 2, caseId: null, step: null,
    stem: "A registered nurse is delegating tasks to a licensed practical/vocational nurse (LPN/LVN). Which task is within the LPN/LVN scope and appropriate to delegate?",
    opts: [
      "Developing the initial nursing care plan for a newly admitted patient.",
      "Administering a scheduled oral antihypertensive to a stable patient.",
      "Performing the admission assessment on a patient with chest pain.",
      "Providing the first dose of IV push adenosine for supraventricular tachycardia."
    ],
    key: 1,
    rationale: "Administering routine oral medications to a stable patient is within the LPN/LVN scope. Creating the initial care plan (A) and the admission assessment (C) require RN-level assessment and clinical judgment, and high-alert IV push antiarrhythmics for an unstable rhythm (D) are outside the LPN/LVN scope.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK519519/", "https://www.ncsbn.org/public-files/NGN_Winter18.pdf"],
    cond: null,
    subj: "professional"
  },
  {
    id: "nclex-0029", type: "cloze", cat: "pharm", diff: 3, caseId: null, step: null,
    stem: "Complete the statements about insulin therapy by selecting the option that makes each sentence correct. Regular insulin has an onset of [1] and, when mixing insulins in one syringe, the nurse draws up [2] first.",
    blanks: [
      { label: "1", opts: ["15 minutes (rapid)", "30 to 60 minutes", "6 to 8 hours"], key: 1 },
      { label: "2", opts: ["the clear (regular) insulin", "the cloudy (NPH) insulin"], key: 0 }
    ],
    rationale: "Regular (short-acting) insulin has an onset of roughly 30 to 60 minutes, peaks at 2 to 4 hours. When mixing regular and NPH in one syringe, the nurse draws up the clear regular insulin first (clear before cloudy) to avoid contaminating the regular vial with the longer-acting NPH.",
    src: ["https://medlineplus.gov/druginfo/meds/a682611.html", "https://www.ncbi.nlm.nih.gov/books/NBK560688/"],
    cond: null,
    subj: "pharmacology"
  },
  {
    id: "nclex-0030", type: "selectN", cat: "safety", diff: 3, caseId: null, step: null,
    stem: "A nurse is reviewing fall-prevention strategies for an older adult patient at high risk for falls on a medical unit. Choose the 3 interventions the nurse should implement.",
    opts: [
      "Keep the bed in the lowest position with wheels locked",
      "Apply a vest restraint at all times to prevent movement",
      "Ensure the call light is within the patient's reach",
      "Provide nonskid footwear when the patient is out of bed",
      "Keep all four side rails up at all times",
      "Dim all room lighting to encourage rest"
    ],
    n: 3,
    key: [0, 2, 3],
    rationale: "Evidence-based fall prevention keeps the bed low with wheels locked, the call light within reach, and nonskid footwear during ambulation. Routine vest restraints (B) and keeping all four side rails up (E, considered a restraint) increase injury risk, and dim lighting (F) raises fall risk rather than lowering it.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK560761/", "https://www.cdc.gov/falls/about/index.html"],
    cond: null,
    subj: "fundamentals"
  },
  {
    id: "nclex-0031", type: "ddTable", cat: "physio", diff: 3, caseId: null, step: null,
    stem: "For each acid-base disturbance, select the arterial blood gas pattern that matches. (pH normal 7.35-7.45; PaCO2 35-45 mmHg; HCO3 22-26 mEq/L.)",
    rows: [
      { label: "Uncompensated respiratory acidosis", opts: ["pH 7.28, PaCO2 55, HCO3 24", "pH 7.50, PaCO2 30, HCO3 24", "pH 7.30, PaCO2 34, HCO3 16"], key: 0 },
      { label: "Uncompensated metabolic acidosis", opts: ["pH 7.28, PaCO2 55, HCO3 24", "pH 7.50, PaCO2 30, HCO3 24", "pH 7.30, PaCO2 34, HCO3 16"], key: 2 },
      { label: "Uncompensated respiratory alkalosis", opts: ["pH 7.28, PaCO2 55, HCO3 24", "pH 7.50, PaCO2 30, HCO3 24", "pH 7.30, PaCO2 34, HCO3 16"], key: 1 }
    ],
    rationale: "Respiratory acidosis: low pH with high PaCO2 (55) and normal HCO3. Metabolic acidosis: low pH with low HCO3 (16) and near-normal PaCO2. Respiratory alkalosis: high pH (7.50) with low PaCO2 (30) from hyperventilation and normal HCO3. Matching pH direction to the primary driver (CO2 vs HCO3) identifies each disorder.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK507807/", "https://medlineplus.gov/ency/article/003855.htm"],
    cond: null,
    subj: "fluid-electrolyte"
  },
  {
    id: "nclex-0032", type: "matrixMR", cat: "risk", diff: 3, caseId: null, step: null,
    stem: "A patient is admitted with an acute exacerbation of asthma. For each assessment finding, indicate all categories that apply. (Select one or more columns per row.)",
    rows: [
      "SpO2 of 88% on room air",
      "Audible expiratory wheezing",
      "Speaking in single words only",
      "Respiratory rate of 16 and unlabored"
    ],
    cols: ["Indicates worsening", "Requires immediate action", "Reassuring finding"],
    key: [[0, 1], [0], [0, 1], [2]],
    rationale: "An SpO2 of 88% both indicates worsening and requires immediate action (oxygen). Expiratory wheezing indicates worsening airflow obstruction. Speaking in single words signals severe distress that indicates worsening and requires immediate action. A rate of 16, unlabored, is a reassuring finding. Distinguishing findings that merely trend worse from those demanding immediate action is the core skill.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK430901/", "https://medlineplus.gov/ency/article/000141.htm"],
    cond: "asthma",
    subj: "respiratory"
  },
  {
    id: "nclex-0033", type: "pair", cat: "pharm", diff: 3, caseId: null, step: null,
    stem: "A patient receiving an opioid analgesic develops respiratory depression. Select the appropriate antidote and the correct route for emergency reversal.",
    pair: {
      first: { label: "Antidote", opts: ["Naloxone", "Flumazenil", "Acetylcysteine", "Protamine sulfate"], key: 0 },
      second: { label: "Route", opts: ["Oral", "Intravenous", "Topical", "Subcutaneous only"], key: 1 }
    },
    rationale: "Naloxone is the opioid antagonist that reverses respiratory depression, and the IV route gives the fastest onset in an emergency. Flumazenil reverses benzodiazepines, acetylcysteine treats acetaminophen toxicity, and protamine reverses heparin, none of which apply to opioid overdose.",
    src: ["https://medlineplus.gov/druginfo/meds/a685039.html", "https://www.ncbi.nlm.nih.gov/books/NBK441910/"],
    cond: null,
    subj: "pharmacology"
  },
  {
    id: "nclex-0034", type: "mc", cat: "hpm", diff: 2, caseId: null, step: null,
    stem: "A nurse is counseling a healthy 50-year-old adult about age-appropriate cancer screening. Which recommendation reflects current preventive guidance?",
    opts: [
      "Average-risk colorectal cancer screening should have already begun at age 45.",
      "Colorectal screening is unnecessary until age 70.",
      "A yearly chest x-ray is recommended for all adults to screen for lung cancer.",
      "Screening is only needed after symptoms develop."
    ],
    key: 0,
    rationale: "Current guidance (USPSTF and American Cancer Society) recommends average-risk colorectal cancer screening beginning at age 45, so a healthy 50-year-old should already be screened and remain up to date. Delaying to age 70 (B) misses early disease, routine chest x-ray (C) is not a recommended lung-cancer screen, and screening is preventive and precedes symptoms (D).",
    src: ["https://www.cdc.gov/colorectal-cancer/screening/index.html", "https://www.ncbi.nlm.nih.gov/books/NBK570861/"],
    cond: null,
    subj: "gi"
  },
  {
    id: "nclex-0035", type: "mc", cat: "psych", diff: 2, caseId: null, step: null,
    stem: "A patient experiencing alcohol withdrawal is being monitored on a medical unit. Which finding indicates the patient may be progressing to severe withdrawal (delirium tremens)?",
    opts: [
      "Mild hand tremor and requesting a snack.",
      "Disorientation to time and place with visual hallucinations and a heart rate of 128.",
      "Reports of a poor night's sleep and mild anxiety.",
      "Blood pressure of 128/80 and an oral temperature of 98.8 F."
    ],
    key: 1,
    rationale: "Delirium tremens is a medical emergency marked by disorientation, hallucinations, severe autonomic instability (tachycardia, hypertension, fever), and agitation, typically 48 to 96 hours after the last drink. A mild tremor (A), poor sleep with mild anxiety (C), and normal vital signs (D) reflect early or uncomplicated withdrawal.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK482134/", "https://medlineplus.gov/ency/article/000766.htm"],
    cond: null,
    subj: "mental-health"
  },
  {
    id: "nclex-0036", type: "mc", cat: "basic", diff: 1, caseId: null, step: null,
    stem: "A nurse is preparing to obtain a clean-catch midstream urine specimen from an adult patient. Which instruction is correct?",
    opts: [
      "Collect the very first portion of the urine stream into the container.",
      "Begin voiding into the toilet, then collect the middle portion of the stream.",
      "Collect the specimen only after the bladder is completely empty.",
      "Refrigerate the specimen for 24 hours before sending it to the lab."
    ],
    key: 1,
    rationale: "A clean-catch midstream specimen is obtained by cleansing the meatus, voiding the first portion into the toilet to flush the distal urethra, then collecting the midstream portion, which best reflects bladder urine. Collecting the first stream (A) captures contaminants, and a specimen should be sent promptly, not held 24 hours (D).",
    src: ["https://medlineplus.gov/ency/article/007487.htm", "https://www.ncbi.nlm.nih.gov/books/NBK557685/"],
    cond: null,
    subj: "renal-gu"
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B2;
