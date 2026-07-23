// nclex-b10.js — Batch 10 = Unfolding Case 3 (COPD exacerbation), items 0099-0104.
// caseId "case-copd-01", 6 NCJMM steps, per-item evolving chart. Schema v0.2.
const NCLEX_B10 = [
  {
    id: "nclex-0099", type: "sata", cat: "physio", diff: 2, caseId: "case-copd-01", step: 1,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "0900: 70-year-old with COPD presents to clinic with 3 days of worsening dyspnea and increased cough with thick yellow-green sputum. Using accessory muscles. Speaks in short phrases. Anxious." },
      { t: "Vitals", body: "0900: Temp 37.8 C, HR 104, RR 26, BP 142/86, SpO2 88% on room air." },
      { t: "Labs", body: "0900: WBC 13.2 x10^9/L. ABG pending." },
      { t: "Orders", body: "Baseline assessment. Pulse oximetry. Prepare for possible ABG." }
    ] },
    stem: "STEP 1 - Recognize cues. Which findings are cues of an acute COPD exacerbation? Select all that apply.",
    opts: [
      "Increased dyspnea over 3 days with accessory muscle use",
      "Increased cough with thick yellow-green sputum",
      "SpO2 of 88% on room air",
      "Speaking in short phrases and appearing anxious",
      "Elevated WBC of 13.2",
      "Blood pressure of 142/86"
    ],
    key: [0, 1, 2, 3, 4],
    rationale: "Cues of a COPD exacerbation include worsening dyspnea with accessory muscle use, increased and purulent sputum (suggesting infection), hypoxemia (SpO2 88%), increased work of breathing with anxiety, and leukocytosis. The mildly elevated blood pressure (F) is nonspecific and not a defining exacerbation cue.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK559281/", "https://medlineplus.gov/ency/article/000091.htm"],
    cond: "copd",
    subj: "respiratory"
  },
  {
    id: "nclex-0100", type: "mc", cat: "physio", diff: 3, caseId: "case-copd-01", step: 2,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "0930: ABG resulted. Patient remains dyspneic on low-flow oxygen. Nurse analyzing the gas exchange status." },
      { t: "Vitals", body: "0930: HR 102, RR 24, BP 140/84, SpO2 90% on 2 L nasal cannula." },
      { t: "Labs", body: "0930 ABG: pH 7.33, PaCO2 58 mmHg, HCO3 30 mEq/L, PaO2 62 mmHg." },
      { t: "Orders", body: "Titrate oxygen to SpO2 88-92%. Bronchodilators. Recheck ABG as needed." }
    ] },
    stem: "STEP 2 - Analyze cues. The ABG shows pH 7.33, PaCO2 58, HCO3 30. The nurse interprets this as which disturbance?",
    opts: [
      "Respiratory acidosis with partial metabolic compensation",
      "Uncompensated metabolic alkalosis",
      "Respiratory alkalosis",
      "A completely normal ABG for any adult"
    ],
    key: 0,
    rationale: "A low pH (7.33) with an elevated PaCO2 (58) indicates respiratory acidosis from CO2 retention; the elevated bicarbonate (30) shows the kidneys are partially compensating, a common chronic pattern in COPD. It is not metabolic alkalosis (B), respiratory alkalosis (C), or normal (D).",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK507807/", "https://medlineplus.gov/ency/article/003855.htm"],
    cond: "copd",
    subj: "respiratory"
  },
  {
    id: "nclex-0101", type: "mc", cat: "physio", diff: 2, caseId: "case-copd-01", step: 3,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "0945: Patient anxious and dyspneic. Multiple orders received. Nurse prioritizing." },
      { t: "Vitals", body: "0945: HR 104, RR 26, BP 142/86, SpO2 89% on 2 L." },
      { t: "Labs", body: "ABG: pH 7.33, PaCO2 58, PaO2 62." },
      { t: "Orders", body: "Short-acting bronchodilator nebulizer, IV corticosteroid, controlled oxygen to keep SpO2 88-92%, chest x-ray." }
    ] },
    stem: "STEP 3 - Prioritize actions. Which intervention should the nurse prioritize to address the patient's airflow obstruction?",
    opts: [
      "Administer the prescribed short-acting bronchodilator nebulizer treatment.",
      "Apply high-flow 100% oxygen via non-rebreather to normalize SpO2 to 100%.",
      "Encourage rapid, forceful breathing to clear the airways.",
      "Place the patient flat and supine to promote rest."
    ],
    key: 0,
    rationale: "The priority for airflow obstruction in a COPD exacerbation is a short-acting bronchodilator to open the airways. High-flow oxygen targeting 100% (B) risks suppressing the hypoxic drive and worsening CO2 retention (target 88-92%), forceful rapid breathing (C) worsens air trapping, and lying flat (D) impairs breathing.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK559281/", "https://medlineplus.gov/ency/article/000091.htm"],
    cond: "copd",
    subj: "respiratory"
  },
  {
    id: "nclex-0102", type: "selectN", cat: "basic", diff: 2, caseId: "case-copd-01", step: 4,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1030: Bronchodilator and steroid given. Patient slightly improved. Nurse planning supportive measures to ease breathing." },
      { t: "Vitals", body: "1030: HR 98, RR 22, BP 138/82, SpO2 91% on 2 L." },
      { t: "Labs", body: "Repeat ABG pending." },
      { t: "Orders", body: "Continue bronchodilators. Position for comfort. Encourage pursed-lip breathing. Monitor SpO2." }
    ] },
    stem: "STEP 4 - Generate solutions. Choose the 3 supportive nursing measures that best ease this patient's breathing.",
    opts: [
      "Position the patient in high-Fowler's or leaning forward on an overbed table",
      "Coach pursed-lip breathing to prolong exhalation",
      "Maintain controlled oxygen to keep SpO2 at 88-92%",
      "Lay the patient flat to conserve energy",
      "Encourage rapid breathing to increase oxygen intake",
      "Remove all oxygen to strengthen the respiratory drive"
    ],
    n: 3,
    key: [0, 1, 2],
    rationale: "Supportive measures for COPD dyspnea include upright or tripod positioning to ease chest expansion, pursed-lip breathing to prevent airway collapse and prolong exhalation, and controlled oxygen targeting 88-92%. Lying flat (D), rapid breathing (E), and removing oxygen (F) all worsen gas exchange.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK559281/", "https://medlineplus.gov/ency/patientinstructions/000700.htm"],
    cond: "copd",
    subj: "respiratory"
  },
  {
    id: "nclex-0103", type: "mc", cat: "physio", diff: 2, caseId: "case-copd-01", step: 5,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1200: Patient reassessed after treatment. Breathing easier, speaking in full sentences, less anxious." },
      { t: "Vitals", body: "1200: HR 88, RR 18, BP 132/78, SpO2 91% on 2 L nasal cannula." },
      { t: "Labs", body: "1200 ABG: pH 7.36, PaCO2 52, PaO2 68." },
      { t: "Orders", body: "Continue current therapy. Plan for discharge teaching once stable." }
    ] },
    stem: "STEP 5 - Evaluate response. Which finding best indicates the patient's exacerbation is responding to treatment?",
    opts: [
      "Respiratory rate 18, speaking in full sentences, and pH improved to 7.36.",
      "Respiratory rate 30 with worsening accessory muscle use.",
      "SpO2 dropped to 82% on the same oxygen.",
      "The patient is now confused and difficult to arouse."
    ],
    key: 0,
    rationale: "Improvement is shown by a slower respiratory rate, ability to speak in full sentences (less air hunger), and a pH trending back toward normal (7.36). A rising respiratory rate (B), falling SpO2 (C), and new confusion (D) would all indicate worsening respiratory failure.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK559281/", "https://medlineplus.gov/ency/article/000091.htm"],
    cond: "copd",
    subj: "respiratory"
  },
  {
    id: "nclex-0104", type: "mc", cat: "psych", diff: 2, caseId: "case-copd-01", step: 6,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1330: Patient stable and preparing for discharge. Expresses fear about breathlessness at home and admits still smoking." },
      { t: "Vitals", body: "1330: Stable, SpO2 92% on 2 L." },
      { t: "Labs", body: "ABG improving." },
      { t: "Orders", body: "Discharge teaching. Smoking-cessation referral. Inhaler technique review. Pulmonary rehab referral." }
    ] },
    stem: "STEP 6 - Evaluate outcomes. The patient says, \"I get so scared when I can't breathe, and I know I should quit smoking but I don't know how.\" What is the nurse's most therapeutic response?",
    opts: [
      "\"Those feelings are understandable. Let's talk about a smoking-cessation program and ways to manage the anxiety when breathing is hard.\"",
      "\"You have to quit smoking right now or you will die.\"",
      "\"Try not to worry about it; the medications will handle everything.\"",
      "\"Most people can't quit, so don't feel bad if you keep smoking.\""
    ],
    key: 0,
    rationale: "The most therapeutic response validates the patient's fear, offers concrete support (a cessation program), and addresses anxiety management, supporting both the psychosocial need and behavior change. A threatening ultimatum (B), false reassurance (C), and undermining the patient's ability to quit (D) are non-therapeutic.",
    src: ["https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/index.html", "https://medlineplus.gov/ency/article/000091.htm"],
    cond: "copd",
    subj: "respiratory"
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B10;
