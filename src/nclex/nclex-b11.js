// nclex-b11.js — Batch 11 (items 0105-0114). psych/basic focus, ZERO physio. Schema v0.2.
const NCLEX_B11 = [
  {
    id: "nclex-0105", type: "mc", cat: "psych", diff: 2, caseId: null, step: null,
    stem: "A patient with post-traumatic stress disorder (PTSD) becomes distressed during a group activity when a loud noise triggers a flashback. What is the nurse's most therapeutic initial action?",
    opts: [
      "Speak calmly, help orient the patient to the present, and ensure a sense of safety.",
      "Insist the patient continue the activity to build tolerance.",
      "Leave the patient alone until the flashback resolves on its own.",
      "Tell the patient the flashback is not real and to ignore it."
    ],
    key: 0,
    rationale: "During a flashback, the nurse uses a calm voice, grounds and orients the patient to the present, and provides reassurance of safety. Forcing continued exposure (B), abandoning the patient (C), or dismissing the experience (D) are non-therapeutic and can escalate distress.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK559129/", "https://medlineplus.gov/ency/article/000925.htm"],
    cond: null
  },
  {
    id: "nclex-0106", type: "mc", cat: "psych", diff: 3, caseId: null, step: null,
    stem: "A patient is admitted with suspected serotonin syndrome after starting a second antidepressant. Which cluster of findings supports this diagnosis?",
    opts: [
      "Agitation, hyperthermia, muscle rigidity, and hyperreflexia with clonus.",
      "Bradycardia, hypothermia, and flaccid paralysis.",
      "Constipation, dry mouth, and urinary retention only.",
      "Isolated mild drowsiness with no vital sign changes."
    ],
    key: 0,
    rationale: "Serotonin syndrome presents with mental status changes (agitation), autonomic instability (hyperthermia, tachycardia), and neuromuscular excitability (rigidity, hyperreflexia, clonus), often after adding a serotonergic drug. Bradycardia with flaccid paralysis (B), isolated anticholinergic effects (C), and mild drowsiness alone (D) do not fit.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK482377/", "https://medlineplus.gov/ency/article/007272.htm"],
    cond: null
  },
  {
    id: "nclex-0107", type: "mc", cat: "psych", diff: 2, caseId: null, step: null,
    stem: "A nurse is using therapeutic communication with a patient who is newly diagnosed with a terminal illness. Which response demonstrates the therapeutic technique of active listening and empathy?",
    opts: [
      "\"This must be very difficult news for you. Tell me what you are feeling right now.\"",
      "\"Everything happens for a reason; you need to stay positive.\"",
      "\"I know exactly how you feel because my relative had the same illness.\"",
      "\"Let's not focus on that; talk about something more cheerful.\""
    ],
    key: 0,
    rationale: "Acknowledging the difficulty and inviting the patient to express feelings shows empathy and active listening, keeping the focus on the patient. Offering cliches (B), claiming to know exactly how they feel (C), and changing the subject (D) block therapeutic communication.",
    src: ["https://medlineplus.gov/ency/article/000932.htm"],
    cond: null
  },
  {
    id: "nclex-0108", type: "mc", cat: "psych", diff: 2, caseId: null, step: null,
    stem: "A nurse observes a patient with obsessive-compulsive disorder (OCD) repeatedly washing their hands until the skin is raw. What is the most therapeutic nursing approach initially?",
    opts: [
      "Allow time for the ritual while setting reasonable limits, and address the underlying anxiety.",
      "Physically prevent the patient from washing their hands at all.",
      "Ridicule the behavior so the patient sees how irrational it is.",
      "Ignore the patient entirely until the behavior stops."
    ],
    key: 0,
    rationale: "Compulsive rituals relieve overwhelming anxiety; abruptly blocking them increases distress. The nurse initially allows the ritual within reasonable limits while building trust and addressing the underlying anxiety, gradually reducing the behavior. Forcibly stopping (B), ridiculing (C), or ignoring (D) the patient are harmful.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK553162/", "https://medlineplus.gov/ency/article/000929.htm"],
    cond: null
  },
  {
    id: "nclex-0109", type: "mc", cat: "basic", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient with a new colostomy. Which observation of the stoma should be reported to the provider immediately?",
    opts: [
      "The stoma appears dusky, dark purple, or black.",
      "The stoma is pink-red and moist.",
      "The stoma protrudes slightly above the skin.",
      "A small amount of blood is present when cleaning the stoma."
    ],
    key: 0,
    rationale: "A healthy stoma is pink-red and moist (B). A dusky, purple, or black stoma signals impaired blood supply (ischemia/necrosis) and must be reported immediately. Slight protrusion (C) is normal, and minor bleeding with cleaning (D) is expected because the stoma is vascular.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK560503/", "https://medlineplus.gov/ency/article/000750.htm"],
    cond: null
  },
  {
    id: "nclex-0110", type: "mc", cat: "basic", diff: 1, caseId: null, step: null,
    stem: "A nurse is providing care for a patient who requires a 24-hour urine collection. Which action ensures an accurate specimen?",
    opts: [
      "Discard the first voiding, then collect all urine for the next 24 hours including the final void.",
      "Save the first voiding and stop collecting 12 hours later.",
      "Collect only the urine that appears most concentrated.",
      "Keep the collection container at room temperature in direct sunlight."
    ],
    key: 0,
    rationale: "A 24-hour urine collection begins by discarding the first void (so timing starts with an empty bladder), then collecting all urine for 24 hours, ending with a final void at the 24-hour mark. Keeping the first void (B), collecting selectively (C), or improper storage (D) invalidates the test.",
    src: ["https://medlineplus.gov/ency/article/003425.htm", "https://www.ncbi.nlm.nih.gov/books/NBK557685/"],
    cond: null
  },
  {
    id: "nclex-0111", type: "mc", cat: "basic", diff: 2, caseId: null, step: null,
    stem: "A nurse is caring for a patient with an indwelling urinary catheter. Which action best prevents catheter-associated urinary tract infection (CAUTI)?",
    opts: [
      "Keep the drainage bag below the level of the bladder and maintain a closed system.",
      "Routinely irrigate the catheter with tap water every shift.",
      "Place the drainage bag on the bed beside the patient for easy access.",
      "Disconnect the tubing frequently to measure output."
    ],
    key: 0,
    rationale: "Keeping the drainage bag below bladder level prevents backflow, and maintaining a closed system limits pathogen entry, both key CAUTI-prevention measures. Routine irrigation (B), placing the bag on the bed (C, allowing backflow), and frequent disconnection (D, breaking the closed system) all raise infection risk.",
    src: ["https://www.cdc.gov/uti/about/index.html"],
    cond: null
  },
  {
    id: "nclex-0112", type: "mc", cat: "basic", diff: 2, caseId: null, step: null,
    stem: "A nurse is assisting a patient with a nasogastric (NG) tube for feeding. Before administering an intermittent tube feeding, which action is the priority?",
    opts: [
      "Verify tube placement and check gastric residual per policy.",
      "Flush the tube with 240 mL of hypertonic saline.",
      "Administer the feeding rapidly to save the patient's time.",
      "Position the patient flat and supine during the feeding."
    ],
    key: 0,
    rationale: "Before an NG feeding, the priority is to verify tube placement and check gastric residual to prevent instilling feeding into the lungs or over-feeding a patient with delayed emptying. Flushing with hypertonic saline (B) is wrong, rapid administration (C) causes cramping and reflux, and lying flat (D) increases aspiration risk (the head should be elevated).",
    src: ["https://medlineplus.gov/ency/patientinstructions/000900.htm"],
    cond: null
  },
  {
    id: "nclex-0113", type: "mc", cat: "mgmt", diff: 2, caseId: null, step: null,
    stem: "A nurse is planning care and must prioritize using Maslow's hierarchy of needs. Which patient need should the nurse address first?",
    opts: [
      "A patient whose airway is partially obstructed by secretions.",
      "A patient expressing feelings of loneliness and isolation.",
      "A patient asking for help writing a will.",
      "A patient requesting information about a support group."
    ],
    key: 0,
    rationale: "Maslow places physiologic needs first, and among those, airway is the top priority; a partially obstructed airway is life-threatening and must be addressed before psychosocial needs. Loneliness (B), estate concerns (C), and support-group information (D) are higher-level needs addressed after physiologic stability.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK534811/", "https://medlineplus.gov/ency/article/000007.htm"],
    cond: null
  },
  {
    id: "nclex-0114", type: "mc", cat: "mgmt", diff: 3, caseId: null, step: null,
    stem: "A nurse is caring for four patients. Using the ABC (airway, breathing, circulation) framework, which patient requires the nurse's immediate attention?",
    opts: [
      "A patient with noisy, gurgling respirations and difficulty managing secretions.",
      "A patient with a blood pressure of 138/88 and a mild headache.",
      "A patient requesting pain medication for chronic back pain.",
      "A patient due for a routine dressing change."
    ],
    key: 0,
    rationale: "By the ABC framework, an airway problem takes precedence: noisy, gurgling respirations with secretion difficulty indicates a threatened airway needing immediate suctioning and assessment. A mildly elevated BP with headache (B), a chronic pain request (C), and a routine dressing change (D) are lower priority.",
    src: ["https://www.ncbi.nlm.nih.gov/books/NBK534811/", "https://medlineplus.gov/ency/article/000007.htm"],
    cond: null
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = NCLEX_B11;
