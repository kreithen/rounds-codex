// nclex-b16.js — Batch 16 (items 0147-0150), FINAL batch. Exactly psych+1, basic+1, pharm+1, risk+1.
// ZERO physio. Completes the 150-item blueprint. Schema v0.2.
const NCLEX_B16 = [
  {
    id: "nclex-0147", type: "mc", cat: "psych", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient who is grieving the recent death of a spouse. The patient says, \"I don't see any point in going on.\" What is the nurse's most appropriate response?",
    opts: [
      "\"It sounds like you are in a lot of pain. Are you having thoughts of harming yourself?\"",
      "\"You should focus on the happy memories instead.\"",
      "\"Everyone feels this way after a loss; it will pass.\"",
      "\"Let's change the subject to something more positive.\""
    ],
    key: 0,
    rationale: "A statement like this can signal suicidal ideation, so the nurse must respond empathetically and directly assess for thoughts of self-harm, which allows for safety planning. Redirecting to happy memories (B), minimizing with a generalization (C), or changing the subject (D) dismiss the patient's distress and miss a possible safety risk.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK430876/", "https://medlineplus.gov/ency/article/000932.htm"],
    cond: null
  },
  {
    id: "nclex-0148", type: "mc", cat: "basic", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient who requires oral suctioning. Which action is correct to minimize the risk of hypoxia during suctioning?",
    opts: [
      "Apply suction only while withdrawing the catheter and limit each pass to about 10 to 15 seconds.",
      "Apply continuous suction while inserting and withdrawing the catheter.",
      "Suction continuously for at least 30 seconds each pass.",
      "Withhold supplemental oxygen entirely during the procedure."
    ],
    key: 0,
    rationale: "To limit hypoxia, suction is applied only during withdrawal of the catheter and each pass is kept to roughly 10 to 15 seconds, with oxygenation between passes. Applying suction during insertion (B), suctioning 30 seconds or longer (C), and removing oxygen (D) all increase hypoxia and mucosal trauma.",
    src: ["https://medlineplus.gov/ency/patientinstructions/000048.htm"],
    cond: null
  },
  {
    id: "nclex-0149", type: "mc", cat: "pharm", diff: 3, caseId: null, step: null,
    stem: "A patient is receiving a continuous IV infusion of insulin for hyperglycemia. Which laboratory value must the nurse monitor most frequently during the infusion?",
    opts: [
      "Blood glucose and serum potassium.",
      "Serum calcium and phosphate.",
      "White blood cell count.",
      "Serum bilirubin."
    ],
    key: 0,
    rationale: "During an insulin infusion, the nurse monitors blood glucose frequently to avoid hypoglycemia and serum potassium because insulin drives potassium into cells, risking hypokalemia. Calcium and phosphate (B), WBC (C), and bilirubin (D) are not the priority values during insulin therapy.",
    src: ["https://medlineplus.gov/druginfo/meds/a682611.html", "https://medlineplus.gov/ency/article/000479.htm"],
    cond: null
  },
  {
    id: "nclex-0150", type: "mc", cat: "risk", diff: 2, caseId: null, step: null,
    stem: "A nurse is monitoring a patient after a liver biopsy. Which finding requires the nurse's immediate attention?",
    opts: [
      "Increasing abdominal pain with a rising heart rate and falling blood pressure.",
      "Mild soreness at the biopsy site.",
      "A small amount of serous drainage on the dressing.",
      "The patient requesting to change position with assistance."
    ],
    key: 0,
    rationale: "The liver is highly vascular, so increasing abdominal pain with tachycardia and hypotension after a liver biopsy suggests internal hemorrhage and requires immediate attention. Mild site soreness (B), a small amount of serous drainage (C), and a routine assisted position change (D) are expected and non-urgent.",
    src: ["https://medlineplus.gov/ency/article/003895.htm"],
    cond: null
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B16;
