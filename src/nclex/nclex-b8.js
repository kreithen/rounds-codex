// nclex-b8.js — Batch 8 = Unfolding Case 2 (DKA), items 0083-0088.
// caseId "case-dka-01", 6 NCJMM steps, per-item evolving chart. Schema v0.2.
const NCLEX_B8 = [
  {
    id: "nclex-0083", type: "sata", cat: "physio", diff: 2, caseId: "case-dka-01", step: 1,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1400: 19-year-old with type 1 diabetes brought to ED. Reports 2 days of vomiting, unable to keep insulin schedule. Breathing deep and rapid. Fruity odor on breath noted. Very drowsy." },
      { t: "Vitals", body: "1400: Temp 37.2 C, HR 122, RR 30 and deep, BP 96/58, SpO2 98% on room air." },
      { t: "Labs", body: "1400: Glucose 512 mg/dL, pH 7.18, bicarbonate 12 mEq/L, potassium 5.6 mEq/L, positive serum ketones." },
      { t: "Orders", body: "IV access established. Labs drawn. Cardiac monitor applied." }
    ] },
    stem: "STEP 1 - Recognize cues. Which findings are cues consistent with diabetic ketoacidosis (DKA)? Select all that apply.",
    opts: [
      "Deep, rapid (Kussmaul) respirations",
      "Fruity odor on the breath",
      "Glucose 512 mg/dL with positive serum ketones",
      "pH 7.18 with bicarbonate 12 mEq/L",
      "Blood pressure 96/58 with heart rate 122",
      "SpO2 98% on room air"
    ],
    key: [0, 1, 2, 3, 4],
    rationale: "DKA cues include Kussmaul respirations (respiratory compensation for acidosis), fruity (acetone) breath, marked hyperglycemia with ketones, metabolic acidosis (low pH and bicarbonate), and signs of volume depletion (hypotension, tachycardia). A normal SpO2 (F) is not a DKA cue.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK534848/", "https://medlineplus.gov/ency/article/000320.htm"],
    cond: "dka"
  },
  {
    id: "nclex-0084", type: "mc", cat: "physio", diff: 3, caseId: "case-dka-01", step: 2,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1415: Provider notified. Patient remains drowsy with deep respirations. Nurse analyzing the acid-base and electrolyte picture." },
      { t: "Vitals", body: "1415: HR 120, RR 30 deep, BP 94/56, Temp 37.2 C." },
      { t: "Labs", body: "Glucose 512, pH 7.18, bicarbonate 12, potassium 5.6, sodium 132, ketones positive." },
      { t: "Orders", body: "Begin IV 0.9% normal saline bolus. Insulin infusion to be started. Recheck potassium before and during insulin." }
    ] },
    stem: "STEP 2 - Analyze cues. The patient's arterial pH is 7.18 with a bicarbonate of 12. The nurse interprets this as which acid-base disturbance?",
    opts: [
      "Metabolic acidosis",
      "Metabolic alkalosis",
      "Respiratory acidosis",
      "Respiratory alkalosis"
    ],
    key: 0,
    rationale: "A low pH (7.18) with a low bicarbonate (12) indicates metabolic acidosis, here from ketoacid accumulation; the deep Kussmaul breathing is respiratory compensation blowing off CO2. It is not alkalosis (B, D), and the primary problem is metabolic, not respiratory acidosis (C).",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK507807/", "https://medlineplus.gov/ency/article/000320.htm"],
    cond: "dka"
  },
  {
    id: "nclex-0085", type: "mc", cat: "mgmt", diff: 3, caseId: "case-dka-01", step: 3,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1430: Multiple orders received. Nurse prioritizing initial DKA management." },
      { t: "Vitals", body: "1430: HR 120, RR 30, BP 94/56." },
      { t: "Labs", body: "Glucose 512, potassium 5.6, pH 7.18." },
      { t: "Orders", body: "0.9% normal saline IV bolus, IV insulin infusion, hourly glucose, potassium monitoring, cardiac monitoring." }
    ] },
    stem: "STEP 3 - Prioritize hypotheses / actions. Which intervention should the nurse initiate first in the management of DKA?",
    opts: [
      "Begin the prescribed IV isotonic fluid resuscitation.",
      "Administer IV sodium bicarbonate to correct the pH.",
      "Give the patient a carbohydrate snack to prevent hypoglycemia.",
      "Withhold all potassium replacement indefinitely."
    ],
    key: 0,
    rationale: "The first priority in DKA is aggressive IV isotonic fluid resuscitation to restore intravascular volume and perfusion, followed by an insulin infusion. Bicarbonate (B) is reserved for extreme acidosis, a carb snack (C) is inappropriate with glucose 512, and potassium is monitored and replaced as needed (D) because insulin drives potassium into cells.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK534848/", "https://medlineplus.gov/ency/article/000320.htm"],
    cond: "dka"
  },
  {
    id: "nclex-0086", type: "mc", cat: "risk", diff: 3, caseId: "case-dka-01", step: 4,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1600: Fluids and insulin infusion running for 90 minutes. Patient more alert. Nurse planning to prevent a known complication of insulin therapy in DKA." },
      { t: "Vitals", body: "1600: HR 104, RR 22, BP 108/64." },
      { t: "Labs", body: "1600: Glucose 288 mg/dL (down from 512), potassium 3.4 mEq/L (down from 5.6), pH 7.28." },
      { t: "Orders", body: "Continue insulin infusion. Add potassium to IV fluids per protocol. Recheck potassium hourly. Add dextrose when glucose approaches 200." }
    ] },
    stem: "STEP 4 - Generate solutions. As insulin therapy continues, the potassium has dropped to 3.4 mEq/L. Which action should the nurse anticipate to prevent a life-threatening complication?",
    opts: [
      "Add potassium replacement to the IV fluids as prescribed and continue monitoring.",
      "Stop the insulin infusion permanently to raise potassium.",
      "Administer a potassium-wasting diuretic.",
      "Restrict all IV fluids to concentrate the serum potassium."
    ],
    key: 0,
    rationale: "Insulin drives potassium into cells, so during DKA treatment potassium can fall dangerously, risking arrhythmias; the nurse adds potassium replacement to IV fluids per protocol and monitors closely. Permanently stopping insulin (B) would let the acidosis worsen, a diuretic (C) lowers potassium further, and fluid restriction (D) is inappropriate in a volume-depleted patient.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK534848/", "https://medlineplus.gov/ency/article/000479.htm"],
    cond: "dka"
  },
  {
    id: "nclex-0087", type: "matrixMC", cat: "physio", diff: 3, caseId: "case-dka-01", step: 5,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1800: Patient alert and conversant. Respirations normal. Nurse evaluating trend of therapy." },
      { t: "Vitals", body: "1800: HR 88, RR 18, BP 116/70, Temp 37.0 C." },
      { t: "Labs", body: "1800: Glucose 196 mg/dL, potassium 4.0 mEq/L, pH 7.35, bicarbonate 20 mEq/L, ketones trace." },
      { t: "Orders", body: "Transition toward subcutaneous insulin when criteria met. Continue monitoring. Dextrose added to fluids." }
    ] },
    stem: "STEP 5 - Take action / evaluate. For each finding at 1800, indicate whether it shows the DKA is Improving or is a Concern requiring continued attention.",
    rows: [
      "Glucose decreased from 512 to 196 mg/dL",
      "pH increased from 7.18 to 7.35",
      "Glucose now 196 mg/dL while insulin infusion continues without added dextrose",
      "Serum ketones now only trace",
      "Potassium stabilized at 4.0 mEq/L"
    ],
    cols: ["Improving", "Concern"],
    key: [0, 0, 1, 0, 0],
    rationale: "Falling glucose, a normalizing pH, clearing ketones, and stable potassium all show improvement. The one concern: with glucose already down to 196 while the insulin infusion continues, dextrose must be added to the fluids to prevent overshoot into hypoglycemia (protocols add dextrose as glucose approaches ~200 mg/dL). Recognizing that a 'good' number can still signal a needed action is the discrimination being tested.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK534848/", "https://medlineplus.gov/ency/article/000320.htm"],
    cond: "dka"
  },
  {
    id: "nclex-0088", type: "mc", cat: "mgmt", diff: 2, caseId: "case-dka-01", step: 6,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1830: DKA resolving. Nurse planning discharge teaching to prevent recurrence." },
      { t: "Vitals", body: "1830: Stable, within normal limits." },
      { t: "Labs", body: "Glucose 180, pH 7.36, ketones trace." },
      { t: "Orders", body: "Diabetes educator consult. Sick-day management teaching. Transition to subcutaneous insulin." }
    ] },
    stem: "STEP 6 - Evaluate outcomes. Which patient statement indicates correct understanding of preventing future DKA episodes?",
    opts: [
      "\"When I am sick and can't eat, I should still take my insulin and check my blood sugar and ketones often.\"",
      "\"If I feel sick, I should stop my insulin until I can eat normally again.\"",
      "\"I only need to check my blood sugar when I feel thirsty.\"",
      "\"DKA only happens to people with type 2 diabetes, so I don't need to worry.\""
    ],
    key: 0,
    rationale: "During illness (sick days), patients with type 1 diabetes must continue insulin, monitor glucose and ketones frequently, and stay hydrated, because stress hormones raise glucose even when not eating. Stopping insulin when ill (B) is a leading DKA trigger, symptom-only monitoring (C) is inadequate, and DKA is most associated with type 1 diabetes (D).",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK534848/", "https://medlineplus.gov/ency/article/000320.htm"],
    cond: "dka"
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B8;
