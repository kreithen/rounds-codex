// nclex-b7.js — Batch 7 (items 0073-0082). Pharm-heavy, mixed formats. Schema v0.2.
const NCLEX_B7 = [
  {
    id: "nclex-0073", type: "mc", cat: "pharm", diff: 2, caseId: null, step: null,
    stem: "A patient is prescribed metformin for type 2 diabetes and is scheduled for a contrast-enhanced imaging study. Which instruction should the nurse reinforce?",
    opts: [
      "Metformin should be withheld at the time of the contrast study as directed by the provider.",
      "Double the metformin dose on the day of the study.",
      "Take metformin with a large carbohydrate meal before the study.",
      "Metformin has no interaction with contrast and requires no change."
    ],
    key: 0,
    rationale: "Metformin is withheld around the time of iodinated contrast studies in at-risk patients because contrast-related kidney injury can lead to metformin accumulation and lactic acidosis. Doubling (B), taking with carbs (C), or ignoring the interaction (D) is unsafe.",
    src: ["https://medlineplus.gov/druginfo/meds/a696005.html", "https://www.ncbi.nlm.nih.gov/books/NBK518983/"],
    cond: null
  },
  {
    id: "nclex-0074", type: "mc", cat: "pharm", diff: 3, caseId: null, step: null,
    stem: "A patient is receiving IV phenytoin for status epilepticus. Which action is essential when administering this medication IV?",
    opts: [
      "Administer it slowly and only with normal saline, monitoring the ECG and blood pressure.",
      "Mix it in dextrose 5% in water and infuse rapidly.",
      "Administer it as a fast IV push to stop seizures quickly.",
      "Infuse it through the same line as a continuous dopamine drip."
    ],
    key: 0,
    rationale: "IV phenytoin must be given slowly (rate-limited) with normal saline (it precipitates in dextrose) while monitoring the ECG and blood pressure for bradycardia and hypotension. Mixing in dextrose (B), rapid push (C), and co-infusing with incompatible drugs (D) are dangerous.",
    src: ["https://medlineplus.gov/druginfo/meds/a682022.html", "https://www.ncbi.nlm.nih.gov/books/NBK482444/"],
    cond: null
  },
  {
    id: "nclex-0075", type: "mc", cat: "pharm", diff: 2, caseId: null, step: null,
    stem: "A patient taking a nonselective beta-blocker (propranolol) also has a history of asthma. Which assessment is most important for the nurse to monitor?",
    opts: [
      "Lung sounds for wheezing and signs of bronchospasm.",
      "Deep tendon reflexes for hyperreflexia.",
      "Skin turgor for signs of dehydration.",
      "Pupil size for signs of constriction."
    ],
    key: 0,
    rationale: "Nonselective beta-blockers block beta-2 receptors in the airways and can trigger bronchospasm, so the nurse must monitor lung sounds for wheezing in a patient with asthma. Deep tendon reflexes (B), skin turgor (C), and pupil size (D) are not the primary concern with this drug-disease interaction.",
    src: ["https://medlineplus.gov/druginfo/meds/a682607.html", "https://www.ncbi.nlm.nih.gov/books/NBK534841/"],
    cond: "asthma"
  },
  {
    id: "nclex-0076", type: "sata", cat: "pharm", diff: 3, caseId: null, step: null,
    stem: "A patient is being discharged on warfarin. Which statements indicate the patient understands safe use? Select all that apply.",
    opts: [
      "\"I will use a soft toothbrush and an electric razor.\"",
      "\"I will keep my scheduled lab appointments to check my INR.\"",
      "\"I will take a double dose if I miss one to catch up.\"",
      "\"I will tell any new provider or dentist that I take a blood thinner.\"",
      "\"I will watch for unusual bruising, blood in my urine, or black stools.\"",
      "\"I will start taking daily aspirin as well for extra protection.\""
    ],
    key: [0, 1, 3, 4],
    rationale: "Safe warfarin use includes bleeding precautions (soft toothbrush, electric razor), keeping INR lab appointments, informing all providers, and watching for bleeding signs. Doubling a missed dose (C) risks over-anticoagulation, and adding aspirin (F) compounds bleeding risk and should not be done without provider direction.",
    src: ["https://medlineplus.gov/druginfo/meds/a682277.html", "https://www.ncbi.nlm.nih.gov/books/NBK470313/"],
    cond: null
  },
  {
    id: "nclex-0077", type: "mc", cat: "pharm", diff: 3, caseId: null, step: null,
    stem: "A patient with an opioid overdose receives naloxone and responds, but 45 minutes later becomes drowsy and bradypneic again. What is the best explanation for this?",
    opts: [
      "Naloxone has a shorter duration of action than many opioids, so effects can recur.",
      "The patient received an overdose of naloxone.",
      "Naloxone caused a delayed allergic reaction.",
      "The patient has developed permanent tolerance to naloxone."
    ],
    key: 0,
    rationale: "Naloxone has a relatively short half-life compared with many opioids, so as it wears off the patient can re-sedate and require repeat dosing or an infusion with continued monitoring. It is not a naloxone overdose (B), an allergy (C), or tolerance (D) that explains the recurrence.",
    src: ["https://medlineplus.gov/druginfo/meds/a685039.html", "https://www.ncbi.nlm.nih.gov/books/NBK441910/"],
    cond: null
  },
  {
    id: "nclex-0078", type: "mc", cat: "pharm", diff: 2, caseId: null, step: null,
    stem: "A patient is prescribed a fentanyl transdermal patch for chronic cancer pain. Which instruction is most important for safety?",
    opts: [
      "Avoid external heat sources over the patch, such as heating pads or hot baths.",
      "Cut the patch in half if the pain is mild that day.",
      "Apply a new patch every 4 hours as needed for breakthrough pain.",
      "Place the patch over broken or irritated skin for better absorption."
    ],
    key: 0,
    rationale: "External heat increases fentanyl absorption from the patch and can cause a fatal overdose, so heat sources over the patch must be avoided. The patch must never be cut (B), it is typically changed every 72 hours (not every 4 hours, C), and it should be applied to intact, non-irritated skin (D).",
    src: ["https://medlineplus.gov/druginfo/meds/a601202.html", "https://www.ncbi.nlm.nih.gov/books/NBK459275/"],
    cond: null
  },
  {
    id: "nclex-0079", type: "numeric", cat: "pharm", diff: 2, caseId: null, step: null,
    stem: "A patient is prescribed 1,000 mL of 0.9% normal saline to infuse over 8 hours. The IV tubing has a drop factor of 15 gtt/mL. The nurse should set the manual drip rate to how many drops per minute? (Round to the nearest whole number.)",
    numeric: { answer: 31, unit: "gtt/min", tol: 1 },
    rationale: "Rate = (volume x drop factor) / time in minutes = (1,000 mL x 15 gtt/mL) / (8 x 60 min) = 15,000 / 480 = 31.25, which rounds to 31 gtt/min.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK518998/", "https://medlineplus.gov/ency/article/003423.htm"],
    cond: null
  },
  {
    id: "nclex-0080", type: "mc", cat: "pharm", diff: 2, caseId: null, step: null,
    stem: "A patient on a potassium-sparing diuretic (spironolactone) should be taught to avoid which of the following?",
    opts: [
      "Salt substitutes containing potassium.",
      "Foods high in vitamin C.",
      "Dairy products high in calcium.",
      "Green leafy vegetables high in vitamin K."
    ],
    key: 0,
    rationale: "Spironolactone conserves potassium, so combining it with potassium-based salt substitutes can cause dangerous hyperkalemia; the patient should avoid them. Vitamin C (B), calcium (C), and vitamin K (D) are not the concern with this potassium-sparing diuretic.",
    src: ["https://medlineplus.gov/druginfo/meds/a682627.html", "https://www.ncbi.nlm.nih.gov/books/NBK554421/"],
    cond: null
  },
  {
    id: "nclex-0081", type: "mc", cat: "physio", diff: 2, caseId: null, step: null,
    stem: "A patient with type 1 diabetes is found confused and diaphoretic with a capillary blood glucose of 48 mg/dL. The patient is awake and able to swallow. What is the nurse's priority action?",
    opts: [
      "Give 15 grams of a fast-acting oral carbohydrate, such as juice.",
      "Administer the patient's scheduled dose of long-acting insulin.",
      "Encourage the patient to eat a high-protein meal immediately.",
      "Withhold all food and recheck the glucose in one hour."
    ],
    key: 0,
    rationale: "For conscious symptomatic hypoglycemia, the priority is to give about 15 grams of fast-acting carbohydrate (the rule of 15) and recheck in 15 minutes. Giving insulin (B) would deepen hypoglycemia, protein (C) acts too slowly, and withholding treatment (D) is dangerous.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK534841/", "https://medlineplus.gov/ency/article/000386.htm"],
    cond: null
  },
  {
    id: "nclex-0082", type: "mc", cat: "physio", diff: 2, caseId: null, step: null,
    stem: "A patient with Addison's disease (adrenal insufficiency) is at risk for an addisonian crisis. Which finding indicates this life-threatening emergency?",
    opts: [
      "Severe hypotension, profound weakness, and hyperkalemia.",
      "Hypertension, weight gain, and a round moon face.",
      "Hyperglycemia with polyuria and polydipsia.",
      "Bradycardia with cold intolerance and constipation."
    ],
    key: 0,
    rationale: "Addisonian crisis is acute adrenal insufficiency marked by severe hypotension, profound weakness, hyponatremia, and hyperkalemia, requiring emergency IV fluids, corticosteroids, and glucose. Hypertension with moon face (B) describes Cushing's, and choices C and D describe hyperglycemia and hypothyroidism, respectively.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK441994/", "https://medlineplus.gov/ency/article/000357.htm"],
    cond: null
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B7;
