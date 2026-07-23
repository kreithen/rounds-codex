// subjects-final.js — HAND-VERIFIED clinical subject tag for each of the 150 items.
// Second axis alongside the 8 NCLEX client-need categories.
// Every entry below was reviewed against the item stem; the keyword classifier's
// proposals were corrected in ~30 places (delegation/consent items were landing on
// disease subjects, procedure items on the wrong system, etc).
module.exports = {
  // --- b1 pilot ---
  "nclex-0001":"professional",       // charge nurse assigning care
  "nclex-0002":"professional",       // prioritizing the workload (PE is context)
  "nclex-0003":"cardiac",            // furosemide in decompensated HF
  "nclex-0004":"cardiac",            // warfarin/afib diet teaching
  "nclex-0005":"perioperative",      // post-op hysterectomy hemorrhage
  "nclex-0006":"gi",                 // cirrhosis / ascites / encephalopathy
  "nclex-0007":"cardiac",            // acute pulmonary edema from HF
  "nclex-0008":"maternal-newborn",   // severe preeclampsia
  "nclex-0009":"maternal-newborn",   // newborn assessment after delivery
  "nclex-0010":"pediatrics",         // tet spell, Tetralogy of Fallot
  "nclex-0011":"pediatrics",         // otitis media discharge teaching, 18-month-old
  "nclex-0012":"mental-health",      // suicide precautions / MDD
  "nclex-0013":"pharmacology",       // heparin infusion calculation
  "nclex-0014":"pharmacology",       // pediatric amoxicillin dose calc (calc skill)
  "nclex-0015":"infectious",         // TB admission
  "nclex-0016":"infectious",         // contact precautions
  "nclex-0017":"infectious",         // C. difficile
  "nclex-0018":"infectious",         // droplet precautions PPE
  "nclex-0019":"infectious",         // doffing sequence
  "nclex-0020":"infectious",         // neutropenic precautions
  "nclex-0021":"fluid-electrolyte",  // hyperkalemia in CKD
  "nclex-0022":"fluid-electrolyte",  // hypokalemia ECG
  "nclex-0023":"fluid-electrolyte",  // SIADH hyponatremia
  "nclex-0024":"fluid-electrolyte",  // DI hypernatremia
  "nclex-0025":"fluid-electrolyte",  // post-thyroidectomy hypocalcemia
  "nclex-0026":"maternal-newborn",   // magnesium toxicity in preeclampsia

  // --- b2 ---
  "nclex-0027":"endocrine",          // hypoglycemia recognition teaching
  "nclex-0028":"professional",       // RN -> LPN delegation
  "nclex-0029":"pharmacology",       // insulin onset / mixing
  "nclex-0030":"fundamentals",       // fall prevention
  "nclex-0031":"fluid-electrolyte",  // acid-base ABG matching
  "nclex-0032":"respiratory",        // asthma exacerbation matrix
  "nclex-0033":"pharmacology",       // naloxone route for opioid depression
  "nclex-0034":"gi",                 // colorectal cancer screening
  "nclex-0035":"mental-health",      // alcohol withdrawal
  "nclex-0036":"renal-gu",           // clean-catch urine specimen

  // --- b3 ---
  "nclex-0037":"professional",       // assigning to a new nurse
  "nclex-0038":"professional",       // who to see first
  "nclex-0039":"pharmacology",       // prednisone taper teaching
  "nclex-0040":"pharmacology",       // vancomycin infusion reaction
  "nclex-0041":"cardiac",            // post cardiac cath assessment
  "nclex-0042":"gi",                 // paracentesis prep
  "nclex-0043":"respiratory",        // COPD oxygen/positioning
  "nclex-0044":"professional",       // two-identifier verification
  "nclex-0045":"maternal-newborn",   // prenatal folic acid
  "nclex-0046":"pharmacology",       // dopamine mcg/kg/min calc

  // --- b4 ---
  "nclex-0047":"mental-health",      // acute anxiety/hyperventilation
  "nclex-0048":"mental-health",      // acute mania nutrition
  "nclex-0049":"mental-health",      // anorexia refeeding
  "nclex-0050":"fundamentals",       // aspiration precautions while eating
  "nclex-0051":"fundamentals",       // pressure injury prevention
  "nclex-0052":"gi",                 // constipation first-line
  "nclex-0053":"pediatrics",         // safe sleep / SIDS
  "nclex-0054":"pediatrics",         // 12-month milestones
  "nclex-0055":"pediatrics",         // childhood immunization schedule
  "nclex-0056":"cardiac",            // ACE inhibitor cough

  // --- b5: sepsis case ---
  "nclex-0057":"infectious","nclex-0058":"infectious","nclex-0059":"infectious",
  "nclex-0060":"infectious","nclex-0061":"infectious","nclex-0062":"infectious",

  // --- b6 ---
  "nclex-0063":"professional",       // delegation to UAP
  "nclex-0064":"professional",       // medication error response
  "nclex-0065":"professional",       // mass-casualty triage
  "nclex-0066":"professional",       // informed consent
  "nclex-0067":"respiratory",        // home oxygen safety
  "nclex-0068":"neuro",              // seizure care
  "nclex-0069":"oncology-heme",      // critical platelet value
  "nclex-0070":"renal-gu",           // contrast nephropathy screen
  "nclex-0071":"oncology-heme",      // transfusion reaction
  "nclex-0072":"cardiac",            // digoxin hold parameter

  // --- b7 ---
  "nclex-0073":"pharmacology",       // metformin + contrast
  "nclex-0074":"pharmacology",       // IV phenytoin administration
  "nclex-0075":"pharmacology",       // beta-blocker in asthma
  "nclex-0076":"pharmacology",       // warfarin discharge teaching
  "nclex-0077":"pharmacology",       // naloxone duration/re-sedation
  "nclex-0078":"pharmacology",       // fentanyl patch heat warning
  "nclex-0079":"pharmacology",       // gtt/min calculation
  "nclex-0080":"pharmacology",       // spironolactone + salt substitutes
  "nclex-0081":"endocrine",          // hypoglycemia rule of 15
  "nclex-0082":"endocrine",          // addisonian crisis

  // --- b8: DKA case ---
  "nclex-0083":"endocrine","nclex-0084":"endocrine","nclex-0085":"endocrine",
  "nclex-0086":"endocrine","nclex-0087":"endocrine","nclex-0088":"endocrine",

  // --- b9 ---
  "nclex-0089":"pharmacology",       // medication reconciliation/polypharmacy
  "nclex-0090":"pharmacology",       // high-alert insulin double-check
  "nclex-0091":"fundamentals",       // least-restrictive alternative to restraints
  "nclex-0092":"fundamentals",       // home gas leak safety
  "nclex-0093":"professional",       // documentation standards
  "nclex-0094":"professional",       // leaving AMA
  "nclex-0095":"professional",       // qualified interpreter for consent
  "nclex-0096":"musculoskeletal",    // osteoporosis prevention
  "nclex-0097":"cardiac",            // BP screening / silent hypertension
  "nclex-0098":"gi",                 // colorectal risk reduction diet

  // --- b10: COPD case ---
  "nclex-0099":"respiratory","nclex-0100":"respiratory","nclex-0101":"respiratory",
  "nclex-0102":"respiratory","nclex-0103":"respiratory","nclex-0104":"respiratory",

  // --- b11 ---
  "nclex-0105":"mental-health",      // PTSD flashback
  "nclex-0106":"mental-health",      // serotonin syndrome
  "nclex-0107":"mental-health",      // therapeutic communication, terminal dx
  "nclex-0108":"mental-health",      // OCD ritual
  "nclex-0109":"gi",                 // colostomy stoma assessment
  "nclex-0110":"renal-gu",           // 24-hour urine collection
  "nclex-0111":"renal-gu",           // CAUTI prevention
  "nclex-0112":"gi",                 // NG feeding placement check
  "nclex-0113":"fundamentals",       // Maslow prioritization
  "nclex-0114":"fundamentals",       // ABC prioritization

  // --- b12: stroke case ---
  "nclex-0115":"neuro","nclex-0116":"neuro","nclex-0117":"neuro",
  "nclex-0118":"neuro","nclex-0119":"neuro","nclex-0120":"neuro",

  // --- b13: CHF case ---
  "nclex-0121":"cardiac","nclex-0122":"cardiac","nclex-0123":"cardiac",
  "nclex-0124":"cardiac","nclex-0125":"cardiac","nclex-0126":"cardiac",

  // --- b14 ---
  "nclex-0127":"professional",       // assignment to LPN/LVN
  "nclex-0128":"professional",       // assess first after hand-off
  "nclex-0129":"professional",       // addressing a colleague's hygiene lapse
  "nclex-0130":"professional",       // verbal order read-back
  "nclex-0131":"pharmacology",       // levothyroxine teaching
  "nclex-0132":"pharmacology",       // protamine = heparin antidote
  "nclex-0133":"pharmacology",       // aminoglycoside toxicity monitoring
  "nclex-0134":"neuro",              // post lumbar puncture care
  "nclex-0135":"fluid-electrolyte",  // hyperkalemia 6.8 action
  "nclex-0136":"infectious",         // contact precautions PPE

  // --- b15 ---
  "nclex-0137":"infectious",         // TB airborne precautions
  "nclex-0138":"fundamentals",       // fall risk assessment
  "nclex-0139":"fundamentals",       // IM injection site
  "nclex-0140":"gi",                 // colorectal screening age 45
  "nclex-0141":"maternal-newborn",   // breastfeeding/newborn nutrition
  "nclex-0142":"pharmacology",       // adult vaccination intervals
  "nclex-0143":"fundamentals",       // wound healing vs infection
  "nclex-0144":"fundamentals",       // sterile technique break
  "nclex-0145":"mental-health",      // severe alcohol withdrawal
  "nclex-0146":"professional",       // duty to warn

  // --- b16 ---
  "nclex-0147":"mental-health",      // grief + suicidal ideation screen
  "nclex-0148":"respiratory",        // oral suctioning technique
  "nclex-0149":"endocrine",          // insulin infusion monitoring
  "nclex-0150":"gi"                  // post liver biopsy hemorrhage
};
