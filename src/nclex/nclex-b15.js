// nclex-b15.js — Batch 15 (items 0137-0146). safety/hpm/basic/psych/mgmt. ZERO physio. Schema v0.2.
const NCLEX_B15 = [
  {
    id: "nclex-0137", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient who requires airborne precautions for active pulmonary tuberculosis. Which measure is required?",
    opts: [
      "Place the patient in a negative-pressure room and wear a fit-tested N95 respirator.",
      "Place the patient in any private room and wear a surgical mask.",
      "Use only gown and gloves for all room entries.",
      "No special room is needed if the door stays open."
    ],
    key: 0,
    rationale: "Airborne precautions for tuberculosis require a negative-pressure (airborne infection isolation) room and a fit-tested N95 respirator for anyone entering. A standard private room with a surgical mask (B), contact-only PPE (C), or an open door (D) do not provide airborne protection.",
    src: ["https://www.cdc.gov/tb/hcp/infection-control/index.html", "https://medlineplus.gov/ency/article/000077.htm"],
    cond: null,
    subj: "infectious"
  },
  {
    id: "nclex-0138", type: "mc", cat: "safety", diff: 2, caseId: null, step: null,
    stem: "A nurse is assessing fall risk for an older adult patient. Which finding most increases this patient's risk for falls?",
    opts: [
      "Orthostatic hypotension with dizziness on standing.",
      "Wearing well-fitting rubber-soled shoes.",
      "A clutter-free room with adequate lighting.",
      "Use of a properly fitted walker as instructed."
    ],
    key: 0,
    rationale: "Orthostatic hypotension with dizziness on standing sharply raises fall risk because the patient may become lightheaded and lose balance when rising. Rubber-soled shoes (B), a clutter-free lit room (C), and correct walker use (D) are protective factors.",
    src: ["https://www.cdc.gov/falls/prevention/index.html", "https://medlineplus.gov/ency/article/001167.htm"],
    cond: null,
    subj: "fundamentals"
  },
  {
    id: "nclex-0139", type: "mc", cat: "safety", diff: 3, caseId: null, step: null,
    stem: "A nurse is preparing to administer an intramuscular injection to an adult. Which site is preferred for its safety and low risk of nerve or vascular injury?",
    opts: [
      "The ventrogluteal site",
      "The dorsogluteal (upper outer buttock) site",
      "The antecubital fossa",
      "The radial aspect of the wrist"
    ],
    key: 0,
    rationale: "The ventrogluteal site is preferred for adult IM injections because it is free of major nerves and blood vessels and can hold a larger volume safely. The dorsogluteal site (B) risks sciatic nerve injury, and the antecubital fossa (C) and wrist (D) are not IM injection sites.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK556121/", "https://medlineplus.gov/ency/patientinstructions/000430.htm"],
    cond: null,
    subj: "fundamentals"
  },
  {
    id: "nclex-0140", type: "mc", cat: "hpm", diff: 1, caseId: null, step: null,
    stem: "A nurse is teaching an adult patient about recommended cancer screening. Which statement about colorectal cancer screening is accurate for an average-risk adult?",
    opts: [
      "Routine screening is recommended starting at age 45.",
      "Screening is only necessary after age 75 for everyone.",
      "Screening is unnecessary unless symptoms appear.",
      "A single screening at age 30 provides lifelong protection."
    ],
    key: 0,
    rationale: "For average-risk adults, routine colorectal cancer screening is recommended beginning at age 45. Waiting until 75 (B), screening only when symptomatic (C), and a one-time screening at 30 (D) do not reflect current recommendations.",
    src: ["https://www.cdc.gov/colorectal-cancer/screening/index.html", "https://medlineplus.gov/ency/article/002470.htm"],
    cond: null,
    subj: "gi"
  },
  {
    id: "nclex-0141", type: "mc", cat: "hpm", diff: 2, caseId: null, step: null,
    stem: "A nurse is teaching a breastfeeding patient about newborn nutrition. Which statement indicates correct understanding?",
    opts: [
      "\"Breast milk or formula provides complete nutrition for about the first 6 months.\"",
      "\"I should give my newborn water between feedings to prevent dehydration.\"",
      "\"I can start whole cow's milk at 3 months of age.\"",
      "\"Solid foods should begin in the first month of life.\""
    ],
    key: 0,
    rationale: "Breast milk or formula supplies complete nutrition for roughly the first 6 months, when solids are typically introduced. Giving water to a newborn (B) risks hyponatremia, whole cow's milk (C) is not recommended in the first year, and starting solids in the first month (D) is too early.",
    src: ["https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/index.html", "https://medlineplus.gov/ency/article/002455.htm"],
    cond: null,
    subj: "maternal-newborn"
  },
  {
    id: "nclex-0142", type: "cloze", cat: "hpm", diff: 2, caseId: null, step: null,
    stem: "Complete the teaching about adult vaccination. The nurse explains that the influenza vaccine is recommended [1], and that adults should receive a tetanus, diphtheria booster (Td or Tdap) every [2].",
    blanks: [
      { label: "1", opts: ["annually", "once in a lifetime", "every 5 years"], key: 0 },
      { label: "2", opts: ["10 years", "6 months", "20 years"], key: 0 }
    ],
    rationale: "Influenza vaccine is recommended annually because circulating strains change each season. A tetanus-diphtheria (Td or Tdap) booster is recommended every 10 years for adults. The other options do not match the recommended intervals.",
    src: ["https://www.cdc.gov/vaccines/hcp/imz-schedules/adult-age.html", "https://medlineplus.gov/ency/article/002024.htm"],
    cond: null,
    subj: "pharmacology"
  },
  {
    id: "nclex-0143", type: "mc", cat: "basic", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient with a wound healing by secondary intention. Which finding indicates normal wound healing rather than infection?",
    opts: [
      "Pink-red granulation tissue at the wound base.",
      "Thick yellow-green purulent drainage with foul odor.",
      "Increasing warmth, redness, and swelling around the wound.",
      "A new fever of 38.6 C (101.5 F)."
    ],
    key: 0,
    rationale: "Pink-red granulation tissue is a sign of healthy wound healing by secondary intention. Purulent, foul-smelling drainage (B), increasing warmth/redness/swelling (C), and a new fever (D) are all signs of wound infection.",
    src: ["https://medlineplus.gov/ency/article/000018.htm"],
    cond: null,
    subj: "fundamentals"
  },
  {
    id: "nclex-0144", type: "mc", cat: "basic", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient who needs a sterile dressing change. Which action would break sterile technique and require correction?",
    opts: [
      "Reaching across the sterile field with an ungloved hand.",
      "Keeping the sterile field within the nurse's line of vision.",
      "Holding sterile items above waist level.",
      "Considering the outer 1-inch border of the field as contaminated."
    ],
    key: 0,
    rationale: "Reaching across the sterile field, especially with an ungloved hand, contaminates it and breaks sterile technique. Keeping the field in view (B), holding sterile items above the waist (C), and treating the outer 1-inch border as contaminated (D) all correctly maintain sterility.",
    src: ["https://medlineplus.gov/ency/patientinstructions/000487.htm"],
    cond: null,
    subj: "fundamentals"
  },
  {
    id: "nclex-0145", type: "mc", cat: "psych", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient experiencing alcohol withdrawal. Which finding indicates the withdrawal is becoming severe and requires urgent intervention?",
    opts: [
      "Visual hallucinations, tremors, and a rising heart rate and blood pressure.",
      "Mild anxiety relieved by reassurance.",
      "A single report of difficulty sleeping.",
      "Requesting a caffeinated beverage."
    ],
    key: 0,
    rationale: "Hallucinations with worsening autonomic signs (tremor, tachycardia, hypertension) indicate severe alcohol withdrawal that can progress to delirium tremens, a medical emergency needing urgent intervention. Mild anxiety (B), isolated insomnia (C), and a beverage request (D) are not signs of severe withdrawal.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK441882/", "https://medlineplus.gov/ency/article/000764.htm"],
    cond: null,
    subj: "mental-health"
  },
  {
    id: "nclex-0146", type: "mc", cat: "mgmt", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient who reveals a plan to harm a specific, named person after discharge. Which action reflects the nurse's legal and ethical duty?",
    opts: [
      "Notify the provider and appropriate authorities per the duty to warn.",
      "Keep the information strictly confidential under all circumstances.",
      "Discharge the patient without documenting the statement.",
      "Confront the named person directly without involving anyone else."
    ],
    key: 0,
    rationale: "When a patient voices a credible, specific threat to an identifiable person, the duty to warn/protect overrides confidentiality; the nurse notifies the provider and appropriate authorities and documents. Absolute confidentiality (B), discharging without documentation (C), and personally confronting the target (D) are inappropriate.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK542190/", "https://medlineplus.gov/ency/article/000932.htm"],
    cond: null,
    subj: "professional"
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B15;
