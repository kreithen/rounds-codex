// nclex-b5.js — Batch 5 = Unfolding Case 1 (sepsis), items 0057-0062.
// 6 NCJMM steps, caseId "case-sepsis-01", per-item evolving chart. Exercises bowtie (step 6).
// Schema v0.2. One declaration only.
const NCLEX_B5 = [
  {
    id: "nclex-0057", type: "sata", cat: "physio", diff: 2, caseId: "case-sepsis-01", step: 1,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "0800: 72-year-old admitted from home 2 days ago with a urinary tract infection. Family reports increasing confusion since last night. Skin warm and flushed. Patient drowsy but rousable, oriented to self only." },
      { t: "Vitals", body: "0800: Temp 38.9 C (102.0 F), HR 112, RR 24, BP 98/56, SpO2 93% on room air." },
      { t: "Labs", body: "0800: WBC 17.5 x10^9/L, lactate 2.6 mmol/L, creatinine 1.4 mg/dL." },
      { t: "Orders", body: "Indwelling urinary catheter present. IV 0.9% saline at 75 mL/hr. Acetaminophen PRN fever." }
    ] },
    stem: "STEP 1 - Recognize cues. The nurse reviews the chart on this patient admitted for a UTI. Which findings are cues that the patient may be developing sepsis? Select all that apply.",
    opts: [
      "New confusion, oriented to self only",
      "Temperature 38.9 C (102.0 F)",
      "Heart rate 112 and respiratory rate 24",
      "Blood pressure 98/56 mmHg",
      "Elevated WBC 17.5 and lactate 2.6",
      "Presence of an indwelling urinary catheter as the only concern"
    ],
    key: [0, 1, 2, 3, 4],
    rationale: "Sepsis cues here include new-onset confusion (altered mentation), fever, tachycardia with tachypnea, borderline-low blood pressure, and elevated WBC and lactate signaling infection with early hypoperfusion. The catheter is a source/risk factor but, by itself framed as 'the only concern' (F), is not the cue of deterioration; the systemic signs are.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK547669/", "https://medlineplus.gov/ency/article/000666.htm"],
    cond: "sepsis"
  },
  {
    id: "nclex-0058", type: "mc", cat: "physio", diff: 3, caseId: "case-sepsis-01", step: 2,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "0815: Provider notified of vital signs and confusion. Sepsis screening positive. Blood cultures x2 drawn. Patient remains drowsy." },
      { t: "Vitals", body: "0815: Temp 38.9 C, HR 116, RR 26, BP 94/54, SpO2 92% on room air." },
      { t: "Labs", body: "0800: WBC 17.5, lactate 2.6 mmol/L, creatinine 1.4 mg/dL. Cultures pending." },
      { t: "Orders", body: "New: obtain blood cultures x2 (done), start broad-spectrum IV antibiotics, lactate to be rechecked, 30 mL/kg isotonic fluid bolus." }
    ] },
    stem: "STEP 2 - Analyze cues. Based on the data, the nurse determines the patient's condition is most consistent with which problem?",
    opts: [
      "Sepsis with early tissue hypoperfusion.",
      "An isolated, uncomplicated urinary tract infection.",
      "Cardiogenic shock from acute heart failure.",
      "A localized allergic reaction to the antibiotic."
    ],
    key: 0,
    rationale: "Infection (UTI) plus systemic signs - fever, tachycardia, tachypnea, hypotension, altered mentation, and an elevated lactate - indicate sepsis with early hypoperfusion, not an isolated UTI (B). There is no pump failure history for cardiogenic shock (C), and antibiotics were only just started, so an allergic reaction (D) does not fit.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK547669/", "https://medlineplus.gov/ency/article/000666.htm"],
    cond: "sepsis"
  },
  {
    id: "nclex-0059", type: "mc", cat: "mgmt", diff: 3, caseId: "case-sepsis-01", step: 3,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "0830: Patient increasingly drowsy. Multiple new orders received. Nurse prioritizing the sepsis bundle." },
      { t: "Vitals", body: "0830: Temp 38.9 C, HR 118, RR 26, BP 92/52, SpO2 92% on room air." },
      { t: "Labs", body: "0800: lactate 2.6 mmol/L. Repeat lactate ordered." },
      { t: "Orders", body: "IV broad-spectrum antibiotics, 30 mL/kg isotonic bolus, repeat lactate, blood cultures (drawn), acetaminophen for fever." }
    ] },
    stem: "STEP 3 - Prioritize hypotheses / actions. Cultures are already drawn. Which intervention should the nurse prioritize next to address the greatest threat?",
    opts: [
      "Administer the acetaminophen for the fever.",
      "Administer the prescribed broad-spectrum IV antibiotics and begin the fluid bolus.",
      "Send the patient for a non-urgent renal ultrasound.",
      "Reposition the patient and provide oral care."
    ],
    key: 1,
    rationale: "In the sepsis bundle, after cultures are drawn, early antibiotics and fluid resuscitation for hypoperfusion are the highest priority and are time-critical to survival. Antipyretics (A), a non-urgent scan (C), and comfort measures (D) do not address the life threat of progressing sepsis.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK547669/", "https://www.cdc.gov/sepsis/about/index.html"],
    cond: "sepsis"
  },
  {
    id: "nclex-0060", type: "selectN", cat: "mgmt", diff: 3, caseId: "case-sepsis-01", step: 4,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "0900: Antibiotics infusing. First fluid bolus in progress. Nurse planning ongoing monitoring during resuscitation." },
      { t: "Vitals", body: "0900: HR 114, RR 24, BP 96/58 after partial bolus, SpO2 94% on 2 L nasal cannula." },
      { t: "Labs", body: "Repeat lactate pending." },
      { t: "Orders", body: "Titrate oxygen to SpO2 >= 94%. Monitor urine output hourly. Recheck lactate after resuscitation. Reassess perfusion." }
    ] },
    stem: "STEP 4 - Generate solutions. Choose the 3 monitoring priorities the nurse should implement during fluid resuscitation.",
    opts: [
      "Monitor hourly urine output as a marker of perfusion",
      "Reassess blood pressure and mental status frequently",
      "Recheck the serum lactate after the fluid bolus",
      "Restrict all IV fluids to prevent overload",
      "Discontinue oxygen once SpO2 reaches 90%",
      "Delay reassessment until the next scheduled shift check"
    ],
    n: 3,
    key: [0, 1, 2],
    rationale: "During sepsis resuscitation, the nurse monitors urine output (perfusion), blood pressure and mental status (response to therapy), and a repeat lactate (clearance indicates improving perfusion). Restricting ordered fluids (D), stopping oxygen at 90% (E, below the >=94% goal), and delaying reassessment (F) are unsafe.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK547669/", "https://www.cdc.gov/sepsis/about/index.html"],
    cond: "sepsis"
  },
  {
    id: "nclex-0061", type: "mc", cat: "physio", diff: 3, caseId: "case-sepsis-01", step: 5,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1000: Patient received 30 mL/kg fluid and antibiotics. Nurse reassessing response to interventions." },
      { t: "Vitals", body: "1000: HR 98, RR 20, BP 112/68, SpO2 96% on 2 L nasal cannula, Temp 37.8 C." },
      { t: "Labs", body: "1000: repeat lactate 1.4 mmol/L (down from 2.6). Urine output 45 mL last hour." },
      { t: "Orders", body: "Continue antibiotics. Maintenance IV fluids. Continue hourly monitoring." }
    ] },
    stem: "STEP 5 - Take action / evaluate response. Which finding best indicates the patient is responding positively to the sepsis interventions?",
    opts: [
      "Lactate decreased to 1.4 mmol/L with improved blood pressure and urine output.",
      "Heart rate remains above 110 with continued hypotension.",
      "Urine output has fallen to 10 mL over the past hour.",
      "The patient has become unresponsive to verbal stimuli."
    ],
    key: 0,
    rationale: "A falling lactate (2.6 to 1.4), normalizing blood pressure, slower heart rate, and adequate urine output (45 mL/hr) all indicate improved perfusion and a positive response to resuscitation. Persistent tachycardia/hypotension (B), oliguria (C), and decreasing responsiveness (D) would indicate worsening sepsis.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK547669/", "https://medlineplus.gov/ency/article/000666.htm"],
    cond: "sepsis"
  },
  {
    id: "nclex-0062", type: "bowtie", cat: "physio", diff: 3, caseId: "case-sepsis-01", step: 6,
    chart: { tabs: [
      { t: "Nurses' Notes", body: "1030: Patient stabilizing. Nurse completing a summary of the clinical picture and ongoing plan." },
      { t: "Vitals", body: "1030: HR 96, RR 19, BP 114/70, SpO2 96% on 2 L, Temp 37.6 C." },
      { t: "Labs", body: "lactate 1.4 mmol/L, WBC 16.0 (trending down), creatinine 1.3 mg/dL." },
      { t: "Orders", body: "Continue IV antibiotics, maintenance fluids, hourly perfusion checks, urine output monitoring." }
    ] },
    stem: "STEP 6 - Evaluate outcomes (bowtie). Complete the bowtie: select the 2 actions to continue, the 1 condition the patient is experiencing, and the 2 parameters to monitor.",
    bowtie: {
      actions: [
        "Continue IV antibiotic therapy as prescribed",
        "Continue fluid and perfusion monitoring",
        "Discontinue all IV fluids immediately",
        "Place the patient in strict airborne isolation"
      ],
      conds: ["Sepsis from a urinary source", "Anaphylaxis", "Acute myocardial infarction"],
      params: [
        "Serum lactate and urine output",
        "Blood pressure and mental status",
        "Daily weight only",
        "Serum amylase and lipase"
      ],
      keyA: [0, 1],
      keyC: 0,
      keyP: [0, 1]
    },
    rationale: "The patient has sepsis from a urinary source. The two actions to continue are ongoing antibiotic therapy and fluid/perfusion monitoring; stopping fluids (action index 2) or airborne isolation (index 3) are wrong. The two parameters that best track sepsis response are lactate with urine output and blood pressure with mental status; daily weight alone and amylase/lipase do not monitor this condition.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK547669/", "https://www.cdc.gov/sepsis/about/index.html"],
    cond: "sepsis"
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B5;
