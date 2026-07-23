// nclex-b13.js — Batch 13 = Unfolding Case 5 (heart failure exacerbation), items 0121-0126.
// caseId "case-chf-01", 6 NCJMM steps, per-item evolving chart, ZERO physio. Schema v0.2.
const NCLEX_B13 = [
  {
    id: "nclex-0121", type: "sata", cat: "risk", diff: 2, caseId: "case-chf-01", step: 1,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "0700: 78-year-old with chronic heart failure reports 3 days of worsening shortness of breath, unable to sleep flat (using 3 pillows), and swollen ankles. Gained 5 pounds this week. Fatigued." },
      { t: "Vitals", body: "0700: BP 158/92, HR 104, RR 24, SpO2 90% on room air, Temp 36.9 C." },
      { t: "Labs", body: "0700: BNP elevated. Potassium 4.2 mEq/L. Chest x-ray shows pulmonary congestion." },
      { t: "Orders", body: "Daily weight. Strict intake and output. Oxygen to keep SpO2 >= 94%. Assess lung sounds." }
    ] },
    stem: "STEP 1 - Recognize cues. Which findings are cues of worsening heart failure? Select all that apply.",
    opts: [
      "Orthopnea requiring 3 pillows to sleep",
      "A 5-pound weight gain in one week",
      "Bilateral ankle edema",
      "SpO2 of 90% on room air with dyspnea",
      "Elevated BNP with pulmonary congestion on x-ray",
      "Serum potassium of 4.2 mEq/L"
    ],
    key: [0, 1, 2, 3, 4],
    rationale: "Cues of decompensated heart failure include orthopnea, rapid weight gain from fluid retention, dependent edema, hypoxemia with dyspnea, and an elevated BNP with pulmonary congestion. A normal potassium of 4.2 (F) is not a cue of worsening failure.",
    src: ["https://www.cdc.gov/heart-disease/about/heart-failure.html", "https://medlineplus.gov/ency/article/000158.htm"],
    cond: "chf",
    subj: "cardiac"
  },
  {
    id: "nclex-0122", type: "mc", cat: "risk", diff: 2, caseId: "case-chf-01", step: 2,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "0715: Nurse analyzing the fluid status data before care planning." },
      { t: "Vitals", body: "0715: BP 156/90, HR 102, RR 24, SpO2 91% on 2 L." },
      { t: "Labs", body: "BNP elevated. Chest x-ray: pulmonary congestion." },
      { t: "Orders", body: "Daily weight, strict I&O, sodium and fluid restriction, IV loop diuretic." }
    ] },
    stem: "STEP 2 - Analyze cues. The nurse determines the patient's primary problem is best described as which of the following?",
    opts: [
      "Fluid volume overload from decompensated heart failure",
      "Fluid volume deficit from dehydration",
      "An acute infection with septic shock",
      "A normal fluid balance requiring no intervention"
    ],
    key: 0,
    rationale: "Weight gain, edema, orthopnea, pulmonary congestion, and an elevated BNP all point to fluid volume overload from decompensated heart failure. These findings are the opposite of dehydration (B); there is no evidence of infection or sepsis (C), and the patient clearly needs intervention (D).",
    src: ["https://www.cdc.gov/heart-disease/about/heart-failure.html", "https://medlineplus.gov/ency/article/000158.htm"],
    cond: "chf",
    subj: "cardiac"
  },
  {
    id: "nclex-0123", type: "mc", cat: "mgmt", diff: 2, caseId: "case-chf-01", step: 3,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "0730: Patient dyspneic and anxious. Nurse prioritizing immediate comfort and oxygenation while diuresis begins." },
      { t: "Vitals", body: "0730: BP 156/90, HR 102, RR 26, SpO2 90% on 2 L." },
      { t: "Labs", body: "BNP elevated." },
      { t: "Orders", body: "IV loop diuretic now, oxygen to keep SpO2 >= 94%, position for comfort, continuous monitoring." }
    ] },
    stem: "STEP 3 - Prioritize actions. Which nursing action should be implemented first to relieve this patient's dyspnea?",
    opts: [
      "Place the patient in high-Fowler's position and ensure oxygen is applied.",
      "Lay the patient flat to promote rest.",
      "Restrict the patient from any position changes.",
      "Withhold oxygen to avoid dependence."
    ],
    key: 0,
    rationale: "Placing the patient in high-Fowler's decreases venous return and lets the lungs expand, and applying oxygen addresses hypoxemia, together giving rapid dyspnea relief while diuretics take effect. Lying flat (B) worsens pulmonary congestion, immobilizing the patient (C) is inappropriate, and withholding oxygen (D) is unsafe.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK430873/", "https://medlineplus.gov/ency/article/000158.htm"],
    cond: "chf",
    subj: "cardiac"
  },
  {
    id: "nclex-0124", type: "mc", cat: "safety", diff: 3, caseId: "case-chf-01", step: 4,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1000: IV furosemide given 2 hours ago. Patient voided large amounts. Nurse planning to monitor for a medication-related complication." },
      { t: "Vitals", body: "1000: BP 138/82, HR 96, RR 20, SpO2 94% on 2 L." },
      { t: "Labs", body: "1000: Repeat potassium 3.2 mEq/L (was 4.2). Magnesium pending." },
      { t: "Orders", body: "Monitor electrolytes after diuresis. Telemetry. Replace potassium per protocol." }
    ] },
    stem: "STEP 4 - Generate solutions. The potassium has fallen to 3.2 mEq/L after diuresis. Which action should the nurse anticipate to prevent a dangerous complication?",
    opts: [
      "Administer prescribed potassium replacement and monitor the cardiac rhythm.",
      "Administer an additional dose of the loop diuretic.",
      "Restrict the patient's dietary potassium further.",
      "Ignore the value because mild changes are expected."
    ],
    key: 0,
    rationale: "Loop diuretics waste potassium; a level of 3.2 mEq/L is hypokalemia that predisposes to cardiac dysrhythmias, so the nurse anticipates potassium replacement with cardiac monitoring. Giving more diuretic (B) or restricting potassium (C) would worsen the deficit, and ignoring it (D) is unsafe.",
    src: ["https://medlineplus.gov/druginfo/meds/a682858.html", "https://medlineplus.gov/ency/article/000479.htm"],
    cond: "chf",
    subj: "cardiac"
  },
  {
    id: "nclex-0125", type: "mc", cat: "mgmt", diff: 2, caseId: "case-chf-01", step: 5,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "Day 2: Patient improved. Breathing easier, less edema, lost 4 pounds since admission. Nurse evaluating response to therapy." },
      { t: "Vitals", body: "Day 2: BP 128/76, HR 82, RR 18, SpO2 95% on room air." },
      { t: "Labs", body: "Potassium 4.0 mEq/L after replacement. BNP trending down." },
      { t: "Orders", body: "Continue oral diuretic, sodium restriction, daily weights, prepare discharge teaching." }
    ] },
    stem: "STEP 5 - Take action / evaluate. Which finding best indicates the heart failure treatment has been effective?",
    opts: [
      "Weight loss of 4 pounds, easier breathing, and SpO2 95% on room air.",
      "Weight gain of 3 more pounds since admission.",
      "Worsening orthopnea now requiring 4 pillows.",
      "New crackles auscultated throughout both lung fields."
    ],
    key: 0,
    rationale: "Effectiveness is shown by fluid loss (weight down 4 pounds), reduced work of breathing, and improved oxygenation on room air. Continued weight gain (B), worsening orthopnea (C), and new diffuse crackles (D) would all indicate the treatment is not working.",
    src: ["https://www.cdc.gov/heart-disease/about/heart-failure.html", "https://medlineplus.gov/ency/article/000158.htm"],
    cond: "chf",
    subj: "cardiac"
  },
  {
    id: "nclex-0126", type: "mc", cat: "hpm", diff: 2, caseId: "case-chf-01", step: 6,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "Day 3: Patient ready for discharge. Nurse providing self-management teaching to prevent readmission." },
      { t: "Vitals", body: "Stable, within normal limits." },
      { t: "Labs", body: "Electrolytes normal." },
      { t: "Orders", body: "Discharge with oral diuretic, low-sodium diet, daily weight log, follow-up appointment." }
    ] },
    stem: "STEP 6 - Evaluate outcomes. Which patient statement indicates correct understanding of heart failure self-management at home?",
    opts: [
      "\"I will weigh myself every morning and call my provider if I gain 2 to 3 pounds in a day or 5 in a week.\"",
      "\"I can add salt freely to my food as long as I take my water pill.\"",
      "\"I should stop my medications once I feel better.\"",
      "\"I only need to weigh myself when my ankles look swollen.\""
    ],
    key: 0,
    rationale: "Daily morning weights with a clear notification threshold (about 2 to 3 pounds in a day or 5 in a week) catch fluid retention early and prevent readmission. Adding salt freely (B), stopping medications when feeling better (C), and weighing only when symptomatic (D) all lead to decompensation.",
    src: ["https://www.cdc.gov/heart-disease/about/heart-failure.html", "https://medlineplus.gov/ency/patientinstructions/000112.htm"],
    cond: "chf",
    subj: "cardiac"
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B13;
