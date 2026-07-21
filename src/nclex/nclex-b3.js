// nclex-b3.js — Batch 3 (items 0037-0046) for the Rounds Codex NCLEX module.
// Weighted to mgmt/pharm/risk. Schema per v0.2. One declaration only.
const NCLEX_B3 = [
  {
    id: "nclex-0037", type: "mc", cat: "mgmt", diff: 2, caseId: null, step: null,
    stem: "A nurse manager is reviewing the assignment for an oncoming shift. Which patient is most appropriate to assign to a newly licensed registered nurse who is still in orientation?",
    opts: [
      "A hemodynamically unstable patient requiring frequent titration of IV vasopressors.",
      "A stable patient with community-acquired pneumonia receiving scheduled IV antibiotics.",
      "A patient immediately post cardiac arrest being prepared for transfer to the ICU.",
      "A patient with a complex, evolving GI bleed requiring frequent reassessment."
    ],
    key: 1,
    rationale: "A stable patient on a predictable, scheduled regimen is the safest match for a new nurse in orientation. Unstable patients needing vasopressor titration (A), immediate post-arrest care (C), or a complex evolving bleed (D) require the judgment and speed of an experienced nurse.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK519519/", "https://www.ncsbn.org/public-files/NGN_Winter18.pdf"],
    cond: null
  },
  {
    id: "nclex-0038", type: "mc", cat: "mgmt", diff: 3, caseId: null, step: null,
    stem: "A nurse receives shift report on four patients. Which patient should the nurse plan to see first?",
    opts: [
      "A patient with pneumonia whose oxygen saturation is 94% on 2 L nasal cannula.",
      "A postoperative patient whose dressing has a small amount of dry, dark drainage.",
      "A patient with a new prescription for a blood transfusion scheduled later this shift.",
      "A patient reporting a sudden severe headache described as the worst of their life."
    ],
    key: 3,
    rationale: "A sudden severe headache described as the worst of one's life is a red flag for a subarachnoid hemorrhage and requires immediate assessment. The pneumonia patient (A) is stable on low-flow oxygen, the dry dark drainage (B) is old and expected, and the transfusion (C) is scheduled later and not yet urgent.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK442010/", "https://medlineplus.gov/ency/article/000701.htm"],
    cond: null
  },
  {
    id: "nclex-0039", type: "mc", cat: "pharm", diff: 2, caseId: null, step: null,
    stem: "A patient is started on oral prednisone for an autoimmune flare. Which instruction should the nurse emphasize?",
    opts: [
      "Stop the medication abruptly once symptoms improve.",
      "Take the dose on an empty stomach at bedtime.",
      "Do not stop the medication suddenly; the dose must be tapered.",
      "Limit fluid intake to prevent dilution of the drug."
    ],
    key: 2,
    rationale: "Long-term or moderate-course corticosteroids suppress the adrenal axis; stopping abruptly can precipitate an adrenal crisis, so the dose must be tapered. Prednisone should be taken with food to reduce GI upset (not empty stomach at bedtime, B), and fluid restriction (D) is not indicated.",
    src: ["https://medlineplus.gov/druginfo/meds/a601102.html", "https://www.ncbi.nlm.nih.gov/books/NBK534809/"],
    cond: null
  },
  {
    id: "nclex-0040", type: "mc", cat: "pharm", diff: 3, caseId: null, step: null,
    stem: "A patient receiving IV vancomycin develops flushing and an erythematous rash over the face and upper torso midway through a rapid infusion. What is the nurse's priority action?",
    opts: [
      "Stop the infusion and prepare to restart it at a slower rate as prescribed.",
      "Administer the patient's next scheduled dose of an opioid analgesic.",
      "Continue the infusion and document the expected allergic response.",
      "Increase the infusion rate to finish the dose quickly and limit exposure."
    ],
    key: 0,
    rationale: "Flushing and rash of the face and upper body during rapid vancomycin infusion is vancomycin infusion reaction (formerly 'red man syndrome'), a rate-related histamine release, not a true allergy. The priority is to stop the infusion and restart it more slowly as prescribed. Continuing (C) or speeding up (D) worsens the reaction.",
    src: ["https://medlineplus.gov/druginfo/meds/a604038.html", "https://www.ncbi.nlm.nih.gov/books/NBK459263/"],
    cond: null
  },
  {
    id: "nclex-0041", type: "sata", cat: "risk", diff: 3, caseId: null, step: null,
    stem: "A nurse is caring for a patient immediately after a cardiac catheterization via the right femoral artery. Which assessment findings require immediate follow-up? Select all that apply.",
    opts: [
      "Diminished right pedal pulse compared to the left",
      "A rapidly enlarging hematoma at the insertion site",
      "Report of mild discomfort at the insertion site",
      "Cool, pale right foot with delayed capillary refill",
      "Blood pressure 118/74 and heart rate 76",
      "Complaint of the urge to void"
    ],
    key: [0, 1, 3],
    rationale: "After femoral cardiac cath, a diminished pedal pulse, a rapidly enlarging hematoma, and a cool pale foot with delayed refill all signal arterial compromise or bleeding and require immediate follow-up. Mild insertion-site discomfort (C), normal vitals (E), and the urge to void (F) are expected and not emergent.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK534803/", "https://medlineplus.gov/ency/article/003419.htm"],
    cond: null
  },
  {
    id: "nclex-0042", type: "mc", cat: "risk", diff: 2, caseId: null, step: null,
    stem: "A patient is scheduled for a paracentesis to relieve tense ascites. Which nursing action is the priority immediately before the procedure?",
    opts: [
      "Ensure the patient has an empty bladder.",
      "Place the patient flat in a supine position.",
      "Restrict the patient's oral fluids for 12 hours.",
      "Administer a routine cleansing enema."
    ],
    key: 0,
    rationale: "Before a paracentesis, the patient should void (or be catheterized) to empty the bladder, which lowers the risk of accidental bladder puncture when the abdominal needle is inserted. The patient is positioned upright or with the head elevated (not flat, B); prolonged fluid restriction (C) and an enema (D) are not indicated.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK441861/", "https://medlineplus.gov/ency/article/003896.htm"],
    cond: null
  },
  {
    id: "nclex-0043", type: "mc", cat: "physio", diff: 2, caseId: null, step: null,
    stem: "A patient with chronic obstructive pulmonary disease has an oxygen saturation of 89% and is receiving oxygen at 2 L/min via nasal cannula. The patient remains dyspneic. What is the nurse's best initial action?",
    opts: [
      "Immediately increase the oxygen to 6 L/min via nasal cannula.",
      "Assess the patient and raise the head of the bed to a high-Fowler's position.",
      "Discontinue the oxygen to prevent suppressing the respiratory drive.",
      "Place the patient flat and encourage rapid, deep breaths."
    ],
    key: 1,
    rationale: "For a dyspneic COPD patient, the nurse first assesses and optimizes positioning; high-Fowler's improves lung expansion and eases work of breathing. An SpO2 of 89% is acceptable in COPD, so aggressively increasing oxygen to 6 L (A) risks blunting the hypoxic drive, and discontinuing oxygen (C) or lying flat (D) worsens hypoxemia.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK559281/", "https://medlineplus.gov/ency/article/000091.htm"],
    cond: "copd"
  },
  {
    id: "nclex-0044", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "A nurse is about to administer a medication and finds the patient's identification wristband is missing. What is the nurse's best action?",
    opts: [
      "Administer the medication since the nurse recognizes the patient.",
      "Ask the patient's roommate to confirm the patient's identity.",
      "Verify identity using two identifiers and replace the wristband before administering.",
      "Administer the medication and apply a new wristband afterward."
    ],
    key: 2,
    rationale: "Safe practice requires two patient identifiers (e.g., name and date of birth) before medication administration. With the band missing, the nurse verifies identity by two approved identifiers and replaces the band before giving the drug. Relying on recognition (A), a roommate (B), or giving first and banding later (D) all risk a wrong-patient error.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK493222/", "https://www.cdc.gov/patient-safety/index.html"],
    cond: null
  },
  {
    id: "nclex-0045", type: "mc", cat: "hpm", diff: 1, caseId: null, step: null,
    stem: "A nurse is teaching a pregnant patient at her first prenatal visit about recommended weight gain and nutrition. Which nutrient is most important to prevent neural tube defects in the developing fetus?",
    opts: ["Vitamin C", "Folic acid", "Vitamin D", "Calcium"],
    key: 1,
    rationale: "Adequate folic acid (folate) intake before and during early pregnancy is essential to prevent neural tube defects such as spina bifida, which is why 400 to 800 mcg daily is recommended. Vitamin C, vitamin D, and calcium are important in pregnancy but do not specifically prevent neural tube defects.",
    src: ["https://www.cdc.gov/folic-acid/about/index.html", "https://medlineplus.gov/ency/article/002408.htm"],
    cond: null
  },
  {
    id: "nclex-0046", type: "numeric", cat: "pharm", diff: 3, caseId: null, step: null,
    stem: "A patient is prescribed dopamine at 5 mcg/kg/min. The patient weighs 80 kg. The bag is labeled dopamine 400 mg in 250 mL D5W. At how many mL/hour should the nurse set the infusion pump? (Round to the nearest whole number.)",
    numeric: { answer: 15, unit: "mL/hour", tol: 1 },
    rationale: "Dose = 5 mcg/kg/min x 80 kg = 400 mcg/min = 24,000 mcg/hr = 24 mg/hr. Concentration = 400 mg / 250 mL = 1.6 mg/mL. Rate = 24 mg/hr divided by 1.6 mg/mL = 15 mL/hour.",
    src: ["https://medlineplus.gov/druginfo/meds/a682059.html", "https://www.ncbi.nlm.nih.gov/books/NBK470392/"],
    cond: null
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B3;
