// nclex-b4.js — Batch 4 (items 0047-0056). Weighted to psych/basic/hpm. Schema v0.2.
const NCLEX_B4 = [
  {
    id: "nclex-0047", type: "mc", cat: "psych", diff: 2, caseId: null, step: null,
    stem: "A patient with generalized anxiety disorder is admitted for a medical procedure and begins hyperventilating, stating, \"I can't catch my breath, something terrible is going to happen.\" What is the nurse's best initial response?",
    opts: [
      "\"There is nothing to be afraid of; this is a routine procedure.\"",
      "Stay with the patient and guide them to take slow, controlled breaths.",
      "Leave the room to let the patient calm down independently.",
      "Explain the full risks and complications of the procedure in detail."
    ],
    key: 1,
    rationale: "During acute anxiety with hyperventilation, the nurse should stay with the patient and coach slow, controlled breathing; a calm presence and reduced stimulation help restore control. Dismissing the fear (A), leaving (C), or detailing risks during peak anxiety (D) escalate distress.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK441870/", "https://medlineplus.gov/ency/article/000917.htm"],
    cond: null,
    subj: "mental-health"
  },
  {
    id: "nclex-0048", type: "mc", cat: "psych", diff: 2, caseId: null, step: null,
    stem: "A patient experiencing an acute manic episode of bipolar disorder is hyperactive, intrusive, and unable to sit through meals. Which nursing intervention best supports this patient's nutrition?",
    opts: [
      "Serve three large, balanced meals in the crowded dining room.",
      "Provide high-calorie finger foods and fluids the patient can eat while moving.",
      "Withhold food until the patient agrees to sit and eat calmly.",
      "Offer caffeinated beverages to sustain the patient's energy."
    ],
    key: 1,
    rationale: "A patient in acute mania cannot sit still long enough to complete a meal, so high-calorie finger foods and portable fluids meet nutritional needs without requiring the patient to remain seated. Large meals in a stimulating dining room (A), withholding food (C), and caffeine (D) all work against the patient's needs.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK558998/", "https://medlineplus.gov/ency/article/000926.htm"],
    cond: null,
    subj: "mental-health"
  },
  {
    id: "nclex-0049", type: "mc", cat: "psych", diff: 3, caseId: null, step: null,
    stem: "A nurse is caring for a patient with anorexia nervosa who is being refed after a period of severe restriction. Which laboratory finding is the priority to monitor for refeeding syndrome?",
    opts: ["Serum phosphate", "Serum chloride", "Serum bicarbonate", "Serum albumin"],
    key: 0,
    rationale: "Refeeding syndrome causes a dangerous intracellular shift of phosphate as carbohydrate intake resumes, producing severe hypophosphatemia that can cause cardiac failure and death, so serum phosphate is the priority to monitor (along with potassium and magnesium). Chloride, bicarbonate, and albumin are not the hallmark refeeding derangements.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK564513/", "https://medlineplus.gov/ency/article/000362.htm"],
    cond: null,
    subj: "mental-health"
  },
  {
    id: "nclex-0050", type: "mc", cat: "basic", diff: 1, caseId: null, step: null,
    stem: "A nurse is assisting a patient who is at risk for aspiration with eating. Which intervention best reduces the aspiration risk during meals?",
    opts: [
      "Position the patient in high-Fowler's (upright) position while eating.",
      "Have the patient lie back at a 30-degree angle to relax the throat.",
      "Encourage the patient to tilt the head backward with each swallow.",
      "Offer thin liquids frequently to help wash food down quickly."
    ],
    key: 0,
    rationale: "Sitting upright in high-Fowler's uses gravity to help direct food to the stomach and protects the airway, reducing aspiration risk. Reclining (B) and head-tilt-back (C) open the airway to food, and thin liquids (D) are often the hardest to control for patients with dysphagia.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK563096/", "https://medlineplus.gov/ency/patientinstructions/000056.htm"],
    cond: null,
    subj: "fundamentals"
  },
  {
    id: "nclex-0051", type: "mc", cat: "basic", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for an immobile patient to prevent pressure injuries. Which intervention is most effective?",
    opts: [
      "Reposition the patient at least every 2 hours and keep skin clean and dry.",
      "Massage reddened bony prominences vigorously to improve circulation.",
      "Keep the head of the bed elevated above 45 degrees continuously.",
      "Use a doughnut-shaped ring cushion under the sacrum."
    ],
    key: 0,
    rationale: "Repositioning at least every 2 hours relieves prolonged pressure over bony prominences, and keeping skin clean and dry protects tissue integrity, making this the most effective prevention. Massaging reddened areas (B) can damage tissue, high head elevation (C) increases shear, and doughnut cushions (D) concentrate pressure and are not recommended.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK553107/", "https://medlineplus.gov/ency/patientinstructions/000147.htm"],
    cond: null,
    subj: "fundamentals"
  },
  {
    id: "nclex-0052", type: "mc", cat: "basic", diff: 2, caseId: null, step: null,
    stem: "A patient reports constipation. After assessment, which nurse-initiated intervention should be tried first, assuming no contraindications?",
    opts: [
      "Administer a prescribed PRN stimulant laxative immediately.",
      "Increase dietary fiber and fluid intake and encourage activity.",
      "Prepare to administer a cleansing enema.",
      "Request a prescription for manual disimpaction."
    ],
    key: 1,
    rationale: "The first-line, least invasive approach to constipation is to increase dietary fiber and fluids and encourage physical activity, which promote normal bowel motility. Laxatives (A) and enemas (C) come after lifestyle measures, and manual disimpaction (D) is reserved for confirmed impaction.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK513291/", "https://medlineplus.gov/ency/article/003125.htm"],
    cond: null,
    subj: "gi"
  },
  {
    id: "nclex-0053", type: "mc", cat: "hpm", diff: 1, caseId: null, step: null,
    stem: "A nurse is teaching new parents about safe sleep to reduce the risk of sudden infant death syndrome (SIDS). Which instruction is correct?",
    opts: [
      "Place the infant to sleep on the back on a firm, flat surface.",
      "Position the infant on the stomach to prevent choking.",
      "Use soft pillows and bumper pads for comfort in the crib.",
      "Have the infant sleep in the parents' bed for closer monitoring."
    ],
    key: 0,
    rationale: "Infants should always be placed on their back to sleep on a firm, flat surface, the single most effective way to reduce SIDS risk. Stomach positioning (B), soft bedding and bumpers (C), and bed-sharing (D) all increase the risk of SIDS and suffocation.",
    src: ["https://www.cdc.gov/sudden-infant-death/about/index.html", "https://medlineplus.gov/ency/article/001566.htm"],
    cond: null,
    subj: "pediatrics"
  },
  {
    id: "nclex-0054", type: "mc", cat: "hpm", diff: 2, caseId: null, step: null,
    stem: "A nurse is performing a developmental assessment on a 12-month-old at a well-child visit. Which gross motor milestone is typically expected at this age?",
    opts: [
      "Pulling to a stand and possibly taking first independent steps.",
      "Running steadily and climbing stairs with alternating feet.",
      "Sitting without support for the first time.",
      "Rolling from back to front for the first time."
    ],
    key: 0,
    rationale: "At about 12 months, infants typically pull to stand, cruise along furniture, and may take first independent steps. Running and alternating-foot stair climbing (B) are toddler/preschool skills; sitting unsupported (C) and rolling back-to-front (D) are earlier milestones achieved around 6 months.",
    src: ["https://www.cdc.gov/ncbddd/actearly/milestones/milestones-1yr.html", "https://medlineplus.gov/ency/article/002367.htm"],
    cond: null,
    subj: "pediatrics"
  },
  {
    id: "nclex-0055", type: "cloze", cat: "hpm", diff: 2, caseId: null, step: null,
    stem: "Complete the immunization teaching. The nurse explains that the first dose of the [1] vaccine is given at birth, and that the MMR vaccine is first given at [2] of age.",
    blanks: [
      { label: "1", opts: ["hepatitis B", "influenza", "varicella"], key: 0 },
      { label: "2", opts: ["2 months", "6 months", "12 to 15 months"], key: 2 }
    ],
    rationale: "The hepatitis B vaccine series begins with a dose at birth. The MMR (measles-mumps-rubella) vaccine is first given at 12 to 15 months, as maternal antibodies interfere with earlier response. Influenza is given annually starting at 6 months, and varicella is also first given at 12 to 15 months.",
    src: ["https://www.cdc.gov/vaccines/hcp/imz-schedules/child-adolescent-age.html", "https://medlineplus.gov/ency/article/002024.htm"],
    cond: null,
    subj: "pediatrics"
  },
  {
    id: "nclex-0056", type: "mc", cat: "pharm", diff: 2, caseId: null, step: null,
    stem: "A patient taking an ACE inhibitor (lisinopril) for hypertension reports a persistent dry cough. What is the nurse's most appropriate response?",
    opts: [
      "\"This is a known side effect; I will notify your provider, who may switch your medication.\"",
      "\"Continue taking the medication; the cough is not related to it.\"",
      "\"Stop the medication immediately and do not take any more doses.\"",
      "\"Take an over-the-counter cough suppressant and ignore the cough.\""
    ],
    key: 0,
    rationale: "A persistent dry cough is a well-known ACE inhibitor side effect caused by bradykinin accumulation; the appropriate action is to notify the provider, who may switch the patient to an ARB. The cough is drug-related (B is wrong), the patient should not abruptly self-discontinue antihypertensives without guidance (C), and masking it (D) ignores the cause.",
    src: ["https://medlineplus.gov/druginfo/meds/a692051.html", "https://www.ncbi.nlm.nih.gov/books/NBK430896/"],
    cond: "htn",
    subj: "cardiac"
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B4;
