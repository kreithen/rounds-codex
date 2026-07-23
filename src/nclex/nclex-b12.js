// nclex-b12.js — Batch 12 = Unfolding Case 4 (acute ischemic stroke), items 0115-0120.
// caseId "case-stroke-01", 6 NCJMM steps, per-item evolving chart, ZERO physio. Schema v0.2.
const NCLEX_B12 = [
  {
    id: "nclex-0115", type: "sata", cat: "risk", diff: 2, caseId: "case-stroke-01", step: 1,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1000: 66-year-old brought to ED by family. Sudden onset of right-sided weakness and slurred speech noted 45 minutes ago. Facial droop on the right. History of atrial fibrillation, not on anticoagulation." },
      { t: "Vitals", body: "1000: BP 186/98, HR 92 irregular, RR 18, SpO2 96% on room air, Temp 37.0 C." },
      { t: "Labs", body: "1000: Glucose 128 mg/dL. Coagulation panel pending. CT scan ordered." },
      { t: "Orders", body: "Activate stroke protocol. NPO. Non-contrast head CT STAT. Neuro checks." }
    ] },
    stem: "STEP 1 - Recognize cues. Which findings are cues consistent with an acute stroke? Select all that apply.",
    opts: [
      "Sudden right-sided weakness",
      "Slurred speech and right facial droop",
      "Symptom onset clearly identified 45 minutes ago",
      "History of atrial fibrillation without anticoagulation",
      "Blood pressure 186/98",
      "SpO2 96% on room air"
    ],
    key: [0, 1, 2, 3, 4],
    rationale: "Stroke cues include sudden focal weakness, slurred speech with facial droop, a known time of onset (critical for treatment eligibility), atrial fibrillation without anticoagulation (a major embolic stroke risk), and marked hypertension. A normal SpO2 (F) is not a stroke cue.",
    src: ["https://www.cdc.gov/stroke/signs-symptoms/index.html", "https://medlineplus.gov/ency/article/000726.htm"],
    cond: "stroke",
    subj: "neuro"
  },
  {
    id: "nclex-0116", type: "mc", cat: "mgmt", diff: 3, caseId: "case-stroke-01", step: 2,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1015: Stroke team assembled. Nurse analyzing which factor most affects treatment options." },
      { t: "Vitals", body: "1015: BP 184/96, HR 90 irregular, RR 18." },
      { t: "Labs", body: "Glucose 128. Platelets and INR pending." },
      { t: "Orders", body: "Non-contrast head CT STAT to distinguish ischemic vs hemorrhagic stroke before any thrombolytic decision." }
    ] },
    stem: "STEP 2 - Analyze cues. Why is the STAT non-contrast head CT the most critical next step in analyzing this patient's situation?",
    opts: [
      "It distinguishes ischemic from hemorrhagic stroke, which determines whether thrombolytics are safe.",
      "It measures the patient's blood glucose more accurately.",
      "It confirms the diagnosis of atrial fibrillation.",
      "It is required only for documentation and does not affect treatment."
    ],
    key: 0,
    rationale: "A non-contrast head CT rapidly distinguishes ischemic stroke from hemorrhagic stroke; giving a thrombolytic to a patient with a bleed would be catastrophic, so this imaging drives the entire treatment pathway. It does not measure glucose (B) or diagnose atrial fibrillation (C), and it is far more than documentation (D).",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK535369/", "https://medlineplus.gov/ency/article/000726.htm"],
    cond: "stroke",
    subj: "neuro"
  },
  {
    id: "nclex-0117", type: "mc", cat: "risk", diff: 3, caseId: "case-stroke-01", step: 3,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1030: CT shows no hemorrhage; ischemic stroke. Patient within treatment window. Nurse prioritizing pre-thrombolytic safety checks." },
      { t: "Vitals", body: "1030: BP 190/100, HR 90 irregular, RR 18." },
      { t: "Labs", body: "Platelets 240,000, INR 1.0, glucose 128." },
      { t: "Orders", body: "Consider IV thrombolytic. Blood pressure must be < 185/110 before and during therapy. Prepare labetalol per protocol." }
    ] },
    stem: "STEP 3 - Prioritize actions. Before IV thrombolytic therapy can be given, which finding must the nurse address first?",
    opts: [
      "The blood pressure of 190/100, which exceeds the safe threshold for thrombolytics.",
      "The normal platelet count of 240,000.",
      "The INR of 1.0, which is within normal limits.",
      "The glucose of 128, which is acceptable."
    ],
    key: 0,
    rationale: "Blood pressure must be below 185/110 before and during thrombolytic therapy to reduce hemorrhage risk; at 190/100 the nurse must administer the prescribed antihypertensive (e.g., labetalol) first. The normal platelets (B), INR (C), and glucose (D) do not contraindicate treatment.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK535369/", "https://medlineplus.gov/ency/article/000726.htm"],
    cond: "stroke",
    subj: "neuro"
  },
  {
    id: "nclex-0118", type: "selectN", cat: "safety", diff: 3, caseId: "case-stroke-01", step: 4,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1130: IV thrombolytic initiated after BP controlled. Nurse implementing post-thrombolytic monitoring." },
      { t: "Vitals", body: "1130: BP 172/94, HR 88 irregular, RR 18, SpO2 97%." },
      { t: "Labs", body: "Post-treatment monitoring ongoing." },
      { t: "Orders", body: "Frequent neuro checks and vital signs. Bleeding precautions. Monitor for signs of intracranial hemorrhage." }
    ] },
    stem: "STEP 4 - Generate solutions. Choose the 3 priority monitoring actions after IV thrombolytic administration.",
    opts: [
      "Perform frequent neurologic assessments for changes",
      "Monitor closely for signs of bleeding, including sudden severe headache",
      "Keep blood pressure controlled within the ordered parameters",
      "Encourage the patient to ambulate independently right away",
      "Administer aspirin immediately along with the thrombolytic",
      "Remove all fall and bleeding precautions to promote mobility"
    ],
    n: 3,
    key: [0, 1, 2],
    rationale: "After thrombolytics the nurse performs frequent neuro checks, watches for bleeding (a sudden severe headache can signal intracranial hemorrhage), and keeps blood pressure within ordered limits. Immediate independent ambulation (D), giving aspirin with the thrombolytic (E, increases bleeding), and removing precautions (F) are unsafe.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK535369/", "https://medlineplus.gov/ency/article/000726.htm"],
    cond: "stroke",
    subj: "neuro"
  },
  {
    id: "nclex-0119", type: "mc", cat: "mgmt", diff: 2, caseId: "case-stroke-01", step: 5,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1400: Patient stable post-thrombolytic. Some improvement in right-sided strength. Difficulty swallowing noted on screening. Nurse evaluating safe care planning." },
      { t: "Vitals", body: "1400: BP 158/88, HR 86 irregular, RR 18." },
      { t: "Labs", body: "No bleeding signs. Neuro checks stable." },
      { t: "Orders", body: "Keep NPO until formal swallow evaluation. Speech therapy consult. Aspiration precautions." }
    ] },
    stem: "STEP 5 - Take action. A bedside swallow screen suggests the patient has dysphagia. Which action best protects the patient from a common post-stroke complication?",
    opts: [
      "Keep the patient NPO until a formal swallow evaluation is completed.",
      "Offer thin liquids to test the patient's ability to swallow.",
      "Begin a regular diet since the patient is more alert.",
      "Give oral medications with a large glass of water."
    ],
    key: 0,
    rationale: "Dysphagia after stroke greatly raises aspiration and aspiration-pneumonia risk, so the patient must remain NPO until a formal swallow evaluation confirms safety. Offering thin liquids (B), starting a regular diet (C), or giving oral meds with water (D) all risk aspiration.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK563096/", "https://medlineplus.gov/ency/article/000726.htm"],
    cond: "stroke",
    subj: "neuro"
  },
  {
    id: "nclex-0120", type: "mc", cat: "psych", diff: 2, caseId: "case-stroke-01", step: 6,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "Day 3: Patient stable, beginning rehabilitation. Frustrated and tearful about difficulty speaking (expressive aphasia). Nurse evaluating psychosocial support." },
      { t: "Vitals", body: "Stable and within normal limits." },
      { t: "Labs", body: "Stable." },
      { t: "Orders", body: "Speech therapy. Physical and occupational therapy. Emotional support and coping resources." }
    ] },
    stem: "STEP 6 - Evaluate outcomes. The patient with expressive aphasia becomes tearful and frustrated when unable to find words. What is the nurse's most therapeutic approach?",
    opts: [
      "Allow extra time, use patience and simple yes/no questions, and reassure the patient.",
      "Finish the patient's sentences quickly to reduce their frustration.",
      "Tell the patient to stop trying to talk until therapy fixes the problem.",
      "Speak loudly and rapidly to help the patient understand better."
    ],
    key: 0,
    rationale: "For expressive aphasia, the nurse gives the patient extra time, uses simple yes/no questions and communication aids, and offers patient reassurance, supporting dignity and reducing frustration. Finishing sentences (B), discouraging attempts to speak (C), and speaking loudly and rapidly (D) are non-therapeutic (aphasia is not a hearing deficit).",
    src: ["https://medlineplus.gov/ency/article/000726.htm"],
    cond: "stroke",
    subj: "neuro"
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B12;
