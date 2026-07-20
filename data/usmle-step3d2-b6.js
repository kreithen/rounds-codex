/*
 * Rounds Codex - USMLE Step 3, Day 2 (Advanced Clinical Management / ACM) bank, Batch 6 (25 items)
 * Day-2-ACM blueprint: managing patients OVER TIME across ambulatory, ED, inpatient, and
 * continuity settings. Vignettes are longer and multi-step (initial data -> workup/evolution
 * -> decision point); lead-ins stress the most appropriate NEXT STEP in management, best
 * initial therapy, monitoring, drug titration, and follow-up. Much less pure biostatistics
 * than Day 1. Same Step 3 system set and shared `s3-` id space as Day 1 (Day 2 extends bank).
 * All vignettes are 100% original; source material used for facts only, never phrasing.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E; only the keyed one starts "Correct")
 */
const USMLE_STEP3D2_B6 = [
  {
    id: "s3-0326",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Acute pericarditis first-line therapy",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 28-year-old man presents with 2 days of sharp, pleuritic central chest pain that is worse when he lies flat and eases when he sits forward. He had a viral upper respiratory illness the week before. On auscultation there is a three-component scratchy rub at the left sternal border. His troponin is normal, and a bedside echocardiogram shows no effusion and preserved function. His electrocardiogram is shown.\n\n**[ECG: Diffuse concave-upward ST-segment elevation across the limb and precordial leads with associated PR-segment depression]**",
    lead: "Which of the following is the most appropriate first-line therapy?",
    options: [
      "Start empiric intravenous antibiotics for presumed bacterial pericarditis.",
      "Begin therapeutic anticoagulation with heparin.",
      "Prescribe a high-dose NSAID plus colchicine and advise activity restriction.",
      "Perform urgent pericardiocentesis.",
      "Start high-dose corticosteroids as initial monotherapy."
    ],
    answer: 2,
    exp: "The positional pleuritic chest pain, friction rub, and diffuse ST elevation with PR depression are classic for acute viral/idiopathic pericarditis. First-line treatment combines a high-dose NSAID (such as ibuprofen) with colchicine, which relieves symptoms and reduces recurrence; exercise restriction is advised until symptoms and markers normalize.",
    why: [
      "There is no evidence of purulent bacterial pericarditis, so empiric antibiotics are not indicated.",
      "Anticoagulation is avoided in acute pericarditis because it can increase the risk of hemorrhagic effusion and tamponade.",
      "Correct: an NSAID plus colchicine is first-line therapy for acute pericarditis, controlling symptoms and lowering recurrence risk.",
      "Pericardiocentesis is reserved for tamponade or large symptomatic effusions, neither of which is present.",
      "Corticosteroids are second-line because they increase recurrence and are reserved for NSAID/colchicine failure or specific causes."
    ]
  },
  {
    id: "s3-0327",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Prolactinoma medical management",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 34-year-old woman reports 8 months of amenorrhea and a milky bilateral nipple discharge, along with a recent decline in her peripheral vision. She takes no medications, is not pregnant, and has normal thyroid and renal function. Formal visual field testing shows a bitemporal defect, and pituitary MRI reveals a 1.4-cm sellar adenoma abutting the optic chiasm. Her laboratory studies are shown.\n\n| Test | Value |\n|---|---|\n| Prolactin | 240 ng/mL |\n| TSH | normal |\n| Beta-hCG | negative |\n| IGF-1 | normal |",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Proceed directly to transsphenoidal surgical resection.",
      "Start a dopamine agonist such as cabergoline.",
      "Begin combined oral contraceptives to restore menses.",
      "Refer immediately for pituitary radiotherapy.",
      "Observe with repeat MRI in 1 year."
    ],
    answer: 1,
    exp: "Marked hyperprolactinemia with a macroadenoma, amenorrhea, galactorrhea, and chiasmal compression indicates a prolactin-secreting adenoma. Even with visual field compromise, first-line therapy is a dopamine agonist (cabergoline preferred), which shrinks the tumor and normalizes prolactin in most patients; surgery is reserved for drug intolerance or failure.",
    why: [
      "Surgery is second-line for prolactinomas because most tumors, even macroadenomas with chiasmal compression, respond well to medical therapy.",
      "Correct: a dopamine agonist such as cabergoline is first-line and typically shrinks the tumor and normalizes prolactin.",
      "Estrogen-progestin pills mask the amenorrhea but leave the tumor and its mass effect untreated.",
      "Radiotherapy is a late option for refractory tumors, not initial management.",
      "Observation is inappropriate when a macroadenoma is already compressing the optic chiasm."
    ]
  },
  {
    id: "s3-0328",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Hepatic encephalopathy management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 59-year-old man with cirrhosis from prior alcohol use is brought in by his family for 2 days of increasing confusion and daytime sleepiness. He has been constipated and recently ran out of his medications. On examination he is disoriented to time and place and has a flapping tremor of the outstretched hands. He is afebrile, has no focal neurologic deficits, and a urinalysis and chest film show no infection. His ammonia is elevated.",
    lead: "Which of the following is the most appropriate initial therapy?",
    options: [
      "Start oral (or rectal) lactulose titrated to two to three soft stools daily.",
      "Restrict dietary protein severely for the long term.",
      "Give a benzodiazepine to calm his agitation.",
      "Begin empiric hemodialysis to clear the ammonia.",
      "Administer intravenous mannitol for cerebral edema."
    ],
    answer: 0,
    exp: "Confusion with asterixis, constipation, and elevated ammonia in a cirrhotic reflects hepatic encephalopathy, often precipitated by constipation or missed medications. First-line therapy is lactulose, a nonabsorbable disaccharide titrated to two to three soft stools per day, which traps and eliminates gut-derived ammonia; rifaximin is added if needed.",
    why: [
      "Correct: lactulose titrated to two to three soft stools daily is first-line therapy that lowers gut ammonia production and absorption.",
      "Prolonged severe protein restriction worsens malnutrition and is no longer recommended; adequate protein is maintained.",
      "Benzodiazepines can precipitate or deepen encephalopathy and should be avoided.",
      "Dialysis is not standard therapy for hepatic encephalopathy, which responds to lactulose.",
      "Mannitol treats cerebral edema of acute liver failure, not the reversible encephalopathy of chronic cirrhosis."
    ]
  },
  {
    id: "s3-0329",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Warfarin-associated major bleeding reversal",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 74-year-old woman on warfarin for atrial fibrillation presents after a mechanical fall with progressive headache and one episode of vomiting. She is drowsy but arousable, and a non-contrast head CT shows an acute subdural hematoma with early mass effect. Her blood pressure is stable and neurosurgery has been consulted. Her coagulation studies are shown.\n\n| Test | Value |\n|---|---|\n| INR | 3.6 |\n| Platelets | 190,000/microL |\n| Hemoglobin | 12.1 g/dL |\n| Fibrinogen | normal |",
    lead: "Which of the following is the most appropriate next step to reverse her anticoagulation?",
    options: [
      "Simply hold warfarin and recheck the INR in the morning.",
      "Give oral vitamin K alone and observe.",
      "Transfuse platelets to improve hemostasis.",
      "Administer four-factor prothrombin complex concentrate plus intravenous vitamin K.",
      "Start an infusion of fresh frozen plasma over the next 12 hours only."
    ],
    answer: 3,
    exp: "Warfarin-associated intracranial hemorrhage is a life-threatening major bleed requiring immediate reversal. The fastest, most reliable approach is four-factor prothrombin complex concentrate together with intravenous vitamin K; the concentrate corrects the INR within minutes while intravenous vitamin K sustains the reversal.",
    why: [
      "Merely holding warfarin allows the elevated INR and bleeding to persist for hours to days during an intracranial emergency.",
      "Oral vitamin K alone works too slowly and incompletely for a life-threatening hemorrhage.",
      "Platelet transfusion does not reverse warfarin, and her platelet count is normal.",
      "Correct: four-factor prothrombin complex concentrate with intravenous vitamin K reverses warfarin rapidly and durably in major bleeding.",
      "Plasma reverses more slowly, requires large volumes, and is inferior to prothrombin complex concentrate for urgent reversal."
    ]
  },
  {
    id: "s3-0330",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Acute pyelonephritis disposition and therapy",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 27-year-old previously healthy woman has 2 days of fever, right flank pain, and dysuria with frequency. She is not pregnant and has no vomiting. On examination her temperature is 38.6 C, she has right costovertebral angle tenderness, and she is tolerating oral fluids without nausea. Her vital signs are otherwise stable, and a urinalysis shows pyuria with white cell casts and bacteria. Urine cultures are pending.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Admit her for intravenous vancomycin.",
      "Prescribe a 3-day course of oral nitrofurantoin.",
      "Provide only phenazopyridine for symptom relief.",
      "Delay antibiotics until the urine culture results return.",
      "Treat as an outpatient with an oral fluoroquinolone (or another guideline-based agent) and arrange close follow-up."
    ],
    answer: 4,
    exp: "This is acute uncomplicated pyelonephritis in a hemodynamically stable, non-pregnant woman who can tolerate oral intake. She can be managed as an outpatient with an appropriate oral agent (a fluoroquinolone, or an alternative guided by local resistance) plus close follow-up; admission and intravenous therapy are reserved for sepsis, intractable vomiting, pregnancy, or failure of outpatient care.",
    why: [
      "Vancomycin targets gram-positive organisms and does not cover the gram-negative uropathogens typical of pyelonephritis.",
      "Nitrofurantoin does not achieve adequate renal tissue levels and is inappropriate for pyelonephritis.",
      "Phenazopyridine only masks symptoms and leaves the kidney infection untreated.",
      "Withholding antibiotics for a febrile upper urinary tract infection risks progression to sepsis.",
      "Correct: a stable patient with uncomplicated pyelonephritis who tolerates oral intake can be treated as an outpatient with an oral agent and close follow-up."
    ]
  },
  {
    id: "s3-0331",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Recurrent calcium nephrolithiasis prevention",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 45-year-old man has had three episodes of calcium oxalate kidney stones over 4 years, the most recent passed last month. He has normal renal function and no hyperparathyroidism. After his acute pain resolved, a 24-hour urine collection was obtained while he continued his usual diet. His results are shown, and you are planning a long-term prevention strategy.\n\n| 24-hour urine | Value |\n|---|---|\n| Volume | 1.1 L/day |\n| Calcium | 320 mg/day (high) |\n| Citrate | low |\n| Oxalate | normal |",
    lead: "Which of the following is the most appropriate long-term preventive measure?",
    options: [
      "Sharply restrict all dietary calcium intake.",
      "Advise a high-sodium diet to dilute the urine.",
      "Start allopurinol as first-line prevention.",
      "Begin a loop diuretic to increase urine flow.",
      "Increase fluid intake and add a thiazide diuretic to lower urinary calcium."
    ],
    answer: 4,
    exp: "Recurrent calcium stones with a low urine volume and hypercalciuria are best prevented by increasing fluid intake to raise urine output above 2 to 2.5 L/day and adding a thiazide diuretic, which reduces urinary calcium excretion. Potassium citrate can be added for the low citrate; dietary calcium should be normal, not restricted.",
    why: [
      "Severe calcium restriction paradoxically increases oxalate absorption and stone risk; normal dietary calcium is advised.",
      "A high-sodium diet raises urinary calcium and promotes stone formation.",
      "Allopurinol is used mainly for uric acid stones or hyperuricosuria, not first-line for hypercalciuric calcium stones.",
      "Loop diuretics increase urinary calcium excretion and would worsen calcium stone formation.",
      "Correct: higher fluid intake plus a thiazide diuretic lowers urinary calcium and is the mainstay of preventing recurrent calcium stones."
    ]
  },
  {
    id: "s3-0332",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Idiopathic pulmonary fibrosis antifibrotic therapy",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 68-year-old man has 14 months of slowly progressive exertional dyspnea and a dry cough. He has fine bibasilar end-inspiratory crackles and early digital clubbing. An extensive evaluation excludes connective tissue disease, hypersensitivity pneumonitis, and drug exposure, and there is no heart failure. Pulmonary function testing shows a restrictive pattern with a reduced diffusing capacity. His high-resolution chest CT is shown.\n\n**[IMAGE: High-resolution CT showing peripheral, subpleural, basal-predominant reticulation with honeycombing and traction bronchiectasis, a usual interstitial pneumonia pattern]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Begin an antifibrotic agent such as pirfenidone or nintedanib.",
      "Start long-term high-dose prednisone as primary therapy.",
      "Prescribe broad-spectrum antibiotics for presumed infection.",
      "Start warfarin to prevent disease progression.",
      "Provide reassurance and no specific therapy."
    ],
    answer: 0,
    exp: "The insidious dyspnea, basal crackles, clubbing, restrictive physiology, and a definite usual interstitial pneumonia pattern on high-resolution CT after exclusion of other causes indicate idiopathic pulmonary fibrosis. Disease-modifying treatment is an antifibrotic (pirfenidone or nintedanib), which slows the decline in lung function; supportive measures and transplant evaluation are also considered.",
    why: [
      "Correct: an antifibrotic such as pirfenidone or nintedanib slows the progressive loss of lung function in idiopathic pulmonary fibrosis.",
      "High-dose corticosteroids do not benefit idiopathic pulmonary fibrosis and can cause harm, unlike in inflammatory interstitial lung diseases.",
      "There is no evidence of infection, so antibiotics are not indicated.",
      "Anticoagulation does not slow fibrosis and has been associated with worse outcomes in this disease.",
      "Withholding therapy forgoes antifibrotic treatment proven to slow decline in this progressive, fatal disease."
    ]
  },
  {
    id: "s3-0333",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Ankylosing spondylitis first-line therapy",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 26-year-old man reports more than 6 months of low back pain and stiffness that is worst in the early morning, lasts over an hour, and improves with exercise rather than rest. He has reduced lumbar flexion and limited chest expansion. His inflammatory markers are elevated and he is HLA-B27 positive. Infection and mechanical causes have been excluded, and pelvic imaging is shown.\n\n**[IMAGE: Pelvic radiograph showing bilateral sacroiliac joint erosions with sclerosis and partial joint-space fusion consistent with sacroiliitis]**",
    lead: "Which of the following is the most appropriate initial therapy?",
    options: [
      "Begin a regularly dosed NSAID together with a structured physical therapy and exercise program.",
      "Start systemic corticosteroids as long-term maintenance.",
      "Initiate methotrexate for the axial disease.",
      "Prescribe strict bed rest until the pain resolves.",
      "Start a long-acting opioid for pain control."
    ],
    answer: 0,
    exp: "Chronic inflammatory back pain that improves with activity, reduced spinal mobility, HLA-B27 positivity, and radiographic sacroiliitis indicate ankylosing spondylitis. First-line therapy is a regularly scheduled NSAID combined with a supervised exercise and physical therapy program; a TNF or IL-17 inhibitor is added if NSAIDs fail.",
    why: [
      "Correct: scheduled NSAIDs plus an exercise and physical therapy program are first-line and improve pain, stiffness, and function in ankylosing spondylitis.",
      "Systemic steroids have little role in axial spondyloarthritis and cause cumulative toxicity.",
      "Methotrexate is ineffective for axial disease, working only for peripheral arthritis.",
      "Bed rest worsens stiffness and disability; regular exercise is a cornerstone of management.",
      "Chronic opioids do not treat the inflammatory process and carry dependence risk."
    ]
  },
  {
    id: "s3-0334",
    system: "Emergency Medicine",
    discipline: "Toxicology",
    topic: "Opioid overdose naloxone management",
    difficulty: "easy",
    anchor: null,
    vignette: "A 24-year-old man is brought in by friends who found him unresponsive after a party. On arrival he is minimally responsive with shallow, slow breathing at 6 breaths per minute and pinpoint pupils. There is no trauma, his fingerstick glucose is normal, and empty capsules were found nearby. His oxygen saturation is falling despite a jaw thrust, and he does not respond to a sternal rub.",
    lead: "Which of the following is the most appropriate immediate management?",
    options: [
      "Perform immediate rapid-sequence intubation without any pharmacologic trial.",
      "Give activated charcoal by mouth.",
      "Administer intravenous dextrose.",
      "Provide bag-mask ventilation and administer naloxone, titrating to adequate respiration.",
      "Order an urgent CT of the head before any intervention."
    ],
    answer: 3,
    exp: "Depressed consciousness, respiratory depression, and miosis are the classic opioid toxidrome. The immediate priority is to support ventilation with bag-mask oxygenation and give the antidote naloxone, titrated to restore adequate spontaneous breathing while avoiding precipitating severe withdrawal.",
    why: [
      "Intubation may be avoidable once naloxone reverses the respiratory depression, so an antidote trial with ventilatory support comes first.",
      "Activated charcoal risks aspiration in a patient with a depressed airway and does not address the acute apnea.",
      "Dextrose treats hypoglycemia, which has already been excluded by a normal glucose.",
      "Correct: support ventilation with bag-mask oxygen and give naloxone titrated to restore adequate breathing.",
      "Head CT delays lifesaving reversal of a readily treatable opioid overdose."
    ]
  },
  {
    id: "s3-0335",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Exertional heat stroke management",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 20-year-old football player collapses during practice on a hot, humid afternoon. He is confused and combative, and his skin is hot; teammates say he stopped sweating before collapsing. He has no focal deficits and no signs of trauma. Rectal temperature and initial data are shown, and intravenous access is established while cooling measures are prepared.\n\n| Parameter | Value |\n|---|---|\n| Rectal temperature | 41.4 C |\n| Heart rate | 138/min |\n| Blood pressure | 96/58 mm Hg |\n| Mental status | agitated, confused |",
    lead: "Which of the following is the most appropriate immediate treatment?",
    options: [
      "Give intravenous acetaminophen to lower the temperature.",
      "Administer dantrolene as the primary cooling therapy.",
      "Begin rapid whole-body cooling, ideally cold-water immersion, with intravenous fluids.",
      "Wrap him in warm blankets and allow gradual passive cooling.",
      "Start empiric broad-spectrum antibiotics for presumed sepsis."
    ],
    answer: 2,
    exp: "Hyperthermia above 40 C with central nervous system dysfunction after exertion in the heat defines exertional heat stroke. Survival depends on rapid reduction of core temperature; cold-water immersion is the most effective method and should begin immediately along with intravenous fluid resuscitation, targeting a core temperature near 39 C.",
    why: [
      "Antipyretics act on a hypothalamic set-point that is not elevated in heat stroke and do not lower the core temperature.",
      "Dantrolene is used for malignant hyperthermia, not exertional heat stroke, and does not replace external cooling.",
      "Correct: immediate rapid cooling by cold-water immersion with intravenous fluids is the definitive treatment for heat stroke.",
      "Passive warming would raise the temperature further and is exactly the wrong direction.",
      "Antibiotics do not treat heat stroke; cooling is the priority even if infection is later considered."
    ]
  },
  {
    id: "s3-0336",
    system: "Emergency Medicine",
    discipline: "Toxicology",
    topic: "Calcium channel blocker overdose management",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 62-year-old woman is brought in 90 minutes after an intentional overdose of her extended-release verapamil. She is lightheaded and cool. Her blood pressure is 74/40 mm Hg and heart rate 42/min despite an initial normal saline bolus and a dose of atropine. Her mental status is intact and her lungs are clear. A fingerstick glucose is elevated. Her rhythm strip is shown.\n\n**[ECG: Sinus bradycardia with a first-degree atrioventricular block and no ischemic ST changes]**",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Administer a beta-agonist infusion alone and observe.",
      "Give a large dose of intravenous potassium.",
      "Start intravenous calcium and high-dose insulin with dextrose (euglycemic therapy).",
      "Administer intravenous digoxin to support the blood pressure.",
      "Provide only additional saline boluses and repeat atropine."
    ],
    answer: 2,
    exp: "Refractory hypotension and bradycardia with hyperglycemia after a calcium channel blocker overdose reflect blocked calcium entry and impaired insulin secretion. When fluids and atropine fail, treatment escalates to intravenous calcium plus high-dose insulin with dextrose (euglycemic hyperinsulinemia), which improves myocardial contractility; vasopressors and glucagon are additional options.",
    why: [
      "A beta-agonist alone is insufficient for the profound calcium-channel blockade and refractory shock.",
      "Giving potassium does not address the toxicity and could be dangerous.",
      "Correct: intravenous calcium with high-dose insulin and dextrose is the cornerstone of managing refractory calcium channel blocker toxicity.",
      "Digoxin does not reverse calcium channel blockade and can worsen conduction disturbances.",
      "Continued saline and atropine have already failed, so escalation to specific antidotal therapy is required."
    ]
  },
  {
    id: "s3-0337",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Acute gallstone pancreatitis management",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 48-year-old woman presents with 12 hours of severe epigastric pain radiating to the back with nausea and vomiting. She has epigastric tenderness without peritoneal signs and is hemodynamically stable. An abdominal ultrasound shows cholelithiasis with a normal-caliber common bile duct and no ductal stone, and there is no cholangitis. Her laboratory studies are shown.\n\n| Test | Value |\n|---|---|\n| Lipase | 1,240 U/L |\n| ALT | 210 U/L |\n| Total bilirubin | 1.3 mg/dL |\n| Creatinine | 0.9 mg/dL |",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Take her for emergent common bile duct exploration now.",
      "Perform urgent ERCP immediately despite the absence of obstruction.",
      "Keep her strictly nil per os for 7 days with total parenteral nutrition.",
      "Start empiric broad-spectrum antibiotics for the pancreatitis.",
      "Begin aggressive intravenous fluid resuscitation with analgesia and early enteral feeding as tolerated."
    ],
    answer: 4,
    exp: "Elevated lipase with epigastric pain and gallstones indicates acute gallstone pancreatitis. Cornerstone early management is goal-directed intravenous fluid resuscitation, analgesia, and early enteral nutrition as tolerated. There is no cholangitis or ductal obstruction, so urgent ERCP is not required; same-admission cholecystectomy follows recovery of mild disease.",
    why: [
      "Emergent duct exploration is not indicated when there is no retained ductal stone or obstruction.",
      "Urgent ERCP is reserved for concurrent cholangitis or persistent biliary obstruction, which are absent here.",
      "Prolonged fasting with parenteral nutrition is outdated; early enteral feeding improves outcomes in most cases.",
      "Prophylactic antibiotics are not recommended for uncomplicated acute pancreatitis without infection.",
      "Correct: early aggressive fluid resuscitation with analgesia and early enteral feeding is the mainstay of managing acute pancreatitis."
    ]
  },
  {
    id: "s3-0338",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Postoperative ileus management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 66-year-old man is on postoperative day 3 after an open colectomy. He has abdominal distention, nausea, and has not passed flatus or stool. His abdomen is soft and mildly distended with hypoactive bowel sounds but no localized tenderness, guarding, or fever. He is receiving scheduled intravenous opioids. An abdominal film shows dilated loops of small and large bowel with air throughout the colon and into the rectum and no transition point.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Return him urgently to the operating room for exploratory laparotomy.",
      "Provide supportive care: correct electrolytes, minimize opioids, encourage ambulation, and rest the bowel.",
      "Start a stimulant laxative and immediately advance to a full solid diet.",
      "Begin broad-spectrum antibiotics for presumed intra-abdominal infection.",
      "Place a rectal tube and administer a neostigmine infusion now."
    ],
    answer: 1,
    exp: "Diffuse bowel dilation with gas reaching the rectum, no transition point, and no peritoneal signs after abdominal surgery indicates postoperative ileus rather than mechanical obstruction. Management is supportive: correct electrolyte abnormalities, reduce opioids (a key contributor), encourage early ambulation, and allow the bowel to recover, often with bowel rest.",
    why: [
      "There is no evidence of mechanical obstruction or peritonitis, so reoperation is not indicated.",
      "Correct: postoperative ileus is managed supportively by correcting electrolytes, limiting opioids, mobilizing the patient, and resting the bowel.",
      "Advancing to a full solid diet in an ileus can worsen distention and provoke vomiting.",
      "Antibiotics are not indicated without evidence of infection.",
      "Neostigmine is used for acute colonic pseudo-obstruction with marked cecal dilation, not routine postoperative ileus."
    ]
  },
  {
    id: "s3-0339",
    system: "Surgery",
    discipline: "Endocrine Surgery",
    topic: "Post-thyroidectomy hypocalcemia management",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 52-year-old woman is recovering from a total thyroidectomy for multinodular goiter. About 18 hours postoperatively she develops perioral numbness and tingling of her fingertips, and tapping over the facial nerve elicits a facial twitch. She is otherwise stable with a well-healing incision and no stridor or neck swelling. Her laboratory studies are shown.\n\n| Test | Value |\n|---|---|\n| Calcium | 7.0 mg/dL |\n| Ionized calcium | low |\n| Albumin | normal |\n| Magnesium | normal |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Reassure her and simply recheck the calcium in 24 hours.",
      "Return her urgently to the operating room to re-explore the neck.",
      "Restrict her dietary calcium intake.",
      "Start oral (and, if symptomatic, intravenous) calcium supplementation with calcitriol.",
      "Administer intravenous bisphosphonate therapy."
    ],
    answer: 3,
    exp: "Perioral and digital paresthesias with a positive Chvostek sign and hypocalcemia after total thyroidectomy reflect hypoparathyroidism from transient parathyroid injury. Treatment is calcium supplementation, oral for mild symptoms and intravenous for significant symptoms, along with calcitriol (active vitamin D) to enhance absorption, with monitoring as parathyroid function recovers.",
    why: [
      "Symptomatic hypocalcemia requires treatment now, not passive observation, to prevent tetany or laryngospasm.",
      "Neck re-exploration does not correct transient postoperative hypoparathyroidism.",
      "Restricting calcium would worsen the deficiency.",
      "Correct: symptomatic post-thyroidectomy hypocalcemia is treated with calcium supplementation plus calcitriol to raise serum calcium.",
      "Bisphosphonates lower serum calcium and are exactly the wrong therapy here."
    ]
  },
  {
    id: "s3-0340",
    system: "Pediatrics",
    discipline: "Pediatric Infectious Disease",
    topic: "Pediatric community-acquired pneumonia outpatient therapy",
    difficulty: "easy",
    anchor: null,
    vignette: "A 4-year-old previously healthy, fully immunized girl has 2 days of fever and a productive cough. She is well-appearing and playful, drinking normally, with a respiratory rate of 32/min and an oxygen saturation of 97% on room air. Focal crackles and decreased breath sounds are heard at the right lung base, and a chest radiograph shows a right lower lobe consolidation without effusion. She has no distress or retractions.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Admit her for intravenous vancomycin and cefepime.",
      "Prescribe oral high-dose amoxicillin and arrange outpatient follow-up.",
      "Provide only supportive care because all pneumonia is viral at this age.",
      "Start oral oseltamivir as the primary therapy.",
      "Order a chest CT before initiating any treatment."
    ],
    answer: 1,
    exp: "A well-appearing, immunized child with lobar community-acquired pneumonia who is feeding well and not hypoxic can be treated as an outpatient. High-dose oral amoxicillin is first-line because Streptococcus pneumoniae is the most common bacterial cause; admission is reserved for hypoxia, distress, dehydration, or toxic appearance.",
    why: [
      "Broad intravenous antibiotics and admission are unnecessary for a nontoxic, well-oxygenated child who can take oral medication.",
      "Correct: high-dose oral amoxicillin with outpatient follow-up is first-line for uncomplicated pediatric bacterial community-acquired pneumonia.",
      "A focal lobar consolidation with fever suggests bacterial pneumonia that warrants antibiotics, not supportive care alone.",
      "Oseltamivir treats influenza, which is not the picture of a lobar bacterial consolidation.",
      "A chest CT is not needed for typical community-acquired pneumonia and should not delay treatment."
    ]
  },
  {
    id: "s3-0341",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Nocturnal enuresis management",
    difficulty: "easy",
    anchor: null,
    vignette: "A 7-year-old boy wets the bed several nights a week and has never been reliably dry overnight, though he is dry during the day. He is otherwise healthy, growing well, and developmentally normal, with no daytime urinary symptoms, constipation, snoring, or excessive thirst. His physical examination and a urinalysis are normal. His parents are frustrated, and he is beginning to avoid sleepovers.",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Prescribe long-term oral desmopressin as first-line therapy.",
      "Start an anticholinergic bladder relaxant.",
      "Refer for urodynamic testing and cystoscopy.",
      "Restrict all fluids throughout the entire day.",
      "Provide reassurance and education with behavioral measures, offering an enuresis bedwetting alarm as first-line active treatment."
    ],
    answer: 4,
    exp: "Primary monosymptomatic nocturnal enuresis in a healthy 7-year-old with a normal examination and urinalysis is managed first with reassurance, education, and behavioral measures such as scheduled voiding and limiting evening fluids. When active treatment is desired, the enuresis alarm has the best long-term cure rate and is first-line, with desmopressin as an alternative.",
    why: [
      "Desmopressin is an option but relapse is common; the alarm is preferred first-line active therapy for durable cure.",
      "Anticholinergics are used for overactive-bladder symptoms, which this child does not have.",
      "Invasive urologic testing is not indicated for straightforward primary nocturnal enuresis with a normal workup.",
      "Daytime fluid restriction is unnecessary and counterproductive; only evening intake is moderated.",
      "Correct: reassurance, education, and behavioral measures with an enuresis alarm as first-line active treatment is the appropriate approach."
    ]
  },
  {
    id: "s3-0342",
    system: "Pediatrics",
    discipline: "Pediatric Orthopedics",
    topic: "Pediatric septic arthritis management",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 5-year-old boy refuses to bear weight and holds his right hip flexed, abducted, and externally rotated. He has had fever for a day, and any passive movement of the hip causes severe pain. He is ill-appearing with a temperature of 39.2 C. An ultrasound shows a right hip joint effusion, and a diagnostic arthrocentesis is performed. His synovial fluid results are shown.\n\n| Synovial fluid | Value |\n|---|---|\n| WBC | 92,000/microL |\n| Neutrophils | 90% |\n| Gram stain | gram-positive cocci |\n| Serum CRP | markedly elevated |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Perform urgent surgical drainage of the joint and start intravenous antibiotics.",
      "Treat with anti-inflammatory medication alone for presumed transient synovitis.",
      "Prescribe oral antibiotics and discharge with clinic follow-up.",
      "Observe overnight and repeat the aspiration in the morning.",
      "Obtain an MRI before any intervention or antibiotics."
    ],
    answer: 0,
    exp: "A febrile, toxic child with a hip effusion and purulent synovial fluid (very high neutrophil-predominant white count with organisms on Gram stain) has bacterial septic arthritis, a surgical emergency. Prompt joint drainage (arthrotomy or arthroscopic washout) plus empiric intravenous antibiotics is required to prevent cartilage destruction and osteonecrosis.",
    why: [
      "Correct: septic arthritis of the hip requires urgent surgical drainage plus intravenous antibiotics to prevent joint destruction.",
      "The purulent fluid and organisms exclude transient synovitis, so anti-inflammatory therapy alone would be dangerous.",
      "Oral antibiotics with discharge are inadequate for a joint infection that needs urgent drainage and intravenous therapy.",
      "Delaying drainage risks irreversible cartilage and epiphyseal damage.",
      "Waiting for MRI must not delay drainage and antibiotics once septic arthritis is confirmed by aspiration."
    ]
  },
  {
    id: "s3-0343",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Eclampsia acute management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 30-year-old woman at 37 weeks gestation with known preeclampsia is being observed when she has a generalized tonic-clonic seizure lasting about 60 seconds. She is now postictal. Her blood pressure is 168/112 mm Hg, and she has 3+ proteinuria and brisk reflexes with clonus. The airway is protected in the lateral position, and the fetal heart rate shows a transient deceleration that recovers.",
    lead: "Which of the following is the most appropriate immediate management?",
    options: [
      "Administer a loading dose of lorazepam and continue expectant management.",
      "Start intravenous magnesium sulfate, control the blood pressure, and plan delivery after stabilization.",
      "Proceed to immediate crash cesarean delivery during the seizure.",
      "Begin intravenous phenytoin as the first-line anticonvulsant.",
      "Give a rapid intravenous fluid bolus and observe without further therapy."
    ],
    answer: 1,
    exp: "A seizure in a woman with preeclampsia is eclampsia. Management is intravenous magnesium sulfate to treat and prevent further seizures, antihypertensive therapy for severe-range pressures, and delivery once the mother is stabilized; magnesium, not benzodiazepines or phenytoin, is the drug of choice for eclamptic seizures.",
    why: [
      "Benzodiazepines are not first-line for eclampsia, and expectant management ignores the need for delivery after stabilization.",
      "Correct: magnesium sulfate plus blood pressure control and planned delivery after maternal stabilization is the management of eclampsia.",
      "Delivery follows maternal stabilization; operating during an active seizure endangers mother and fetus.",
      "Phenytoin is inferior to magnesium sulfate for preventing recurrent eclamptic seizures.",
      "A fluid bolus alone does not treat the seizures or the severe hypertension and risks pulmonary edema."
    ]
  },
  {
    id: "s3-0344",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Intraamniotic infection (chorioamnionitis) management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 27-year-old woman at 39 weeks gestation is in active labor with ruptured membranes for 20 hours. She develops a fever of 38.9 C, and both maternal and fetal tachycardia are noted, with uterine fundal tenderness and purulent-appearing amniotic fluid. She has no other source of fever on examination. The fetal heart tracing shows tachycardia but maintained variability, and labor is progressing.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Administer antipyretics alone and continue expectant labor management.",
      "Stop labor with tocolytics to allow the fever to resolve.",
      "Perform an immediate cesarean delivery solely because of the infection.",
      "Start broad-spectrum intravenous antibiotics and proceed toward delivery.",
      "Delay all antibiotics until blood cultures result."
    ],
    answer: 3,
    exp: "Maternal fever with uterine tenderness, maternal and fetal tachycardia, and purulent fluid during prolonged rupture of membranes indicates intraamniotic infection (chorioamnionitis). Management is prompt broad-spectrum intravenous antibiotics (such as ampicillin plus gentamicin) with antipyretics while continuing toward vaginal delivery; cesarean is reserved for usual obstetric indications.",
    why: [
      "Antipyretics alone leave the intrauterine infection untreated and risk neonatal sepsis.",
      "Tocolytics are contraindicated in intraamniotic infection because delivery, not prolongation, is the goal.",
      "Infection itself is not an indication for cesarean; delivery route follows standard obstetric criteria.",
      "Correct: broad-spectrum intravenous antibiotics with continued progress toward delivery is the management of intraamniotic infection.",
      "Antibiotics must begin immediately on clinical diagnosis, not be delayed for culture results."
    ]
  },
  {
    id: "s3-0345",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Endometriosis first-line medical management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 29-year-old woman has 2 years of progressively worsening pelvic pain, painful menses, and deep pain with intercourse. Examination reveals tender uterosacral nodularity and a fixed, retroverted uterus. She is not currently trying to conceive. A pelvic ultrasound shows no adnexal mass, and infection and pregnancy are excluded. Her symptoms strongly suggest endometriosis, and she wants to avoid surgery if possible.",
    lead: "Which of the following is the most appropriate first-line therapy?",
    options: [
      "Proceed directly to diagnostic laparoscopy with excision before any medical therapy.",
      "Prescribe a long-term opioid regimen for pain control.",
      "Perform a hysterectomy with bilateral oophorectomy now.",
      "Start an NSAID together with combined hormonal contraception (or a progestin).",
      "Begin a GnRH agonist without add-back therapy as indefinite first-line treatment."
    ],
    answer: 3,
    exp: "Cyclic and chronic pelvic pain with dyspareunia and tender uterosacral nodularity is characteristic of endometriosis. In a woman not currently seeking pregnancy, empiric first-line therapy is an NSAID plus hormonal suppression with combined contraceptives or a progestin, which reduces pain by suppressing cyclic endometrial stimulation; laparoscopy and GnRH agonists are later steps.",
    why: [
      "Empiric medical therapy is appropriate first; laparoscopy is reserved for diagnostic uncertainty or failure of medical management.",
      "Chronic opioids do not treat the underlying disease and carry dependence risk.",
      "Definitive surgery is reserved for refractory disease in women who have completed childbearing, not first-line.",
      "Correct: an NSAID plus combined hormonal contraception or a progestin is first-line therapy for symptomatic endometriosis.",
      "GnRH agonists are second-line and, when used, require add-back therapy to limit hypoestrogenic bone loss."
    ]
  },
  {
    id: "s3-0346",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Acute dystonic reaction management",
    difficulty: "easy",
    anchor: null,
    vignette: "A 19-year-old man with a first psychotic episode was started on haloperidol 2 days ago. He is brought to the emergency department with a sudden, frightening sustained contraction of his neck muscles pulling his head to one side, along with an upward deviation of his eyes that he cannot control. He is alert and oriented with a normal temperature, no rigidity elsewhere, and a normal creatine kinase.",
    lead: "Which of the following is the most appropriate immediate treatment?",
    options: [
      "Administer intramuscular or intravenous benztropine (or diphenhydramine).",
      "Increase the haloperidol dose to overcome the reaction.",
      "Start dantrolene for presumed neuroleptic malignant syndrome.",
      "Give intravenous lorazepam as the definitive treatment.",
      "Begin lifelong anticholinergic therapy without dose adjustment of the antipsychotic."
    ],
    answer: 0,
    exp: "Acute onset of torticollis and oculogyric crisis shortly after starting a high-potency antipsychotic is an acute dystonic reaction. It responds rapidly to an anticholinergic agent, benztropine or diphenhydramine, given intramuscularly or intravenously; the offending antipsychotic is then reassessed.",
    why: [
      "Correct: an anticholinergic such as benztropine or diphenhydramine rapidly reverses an acute dystonic reaction.",
      "Raising the antipsychotic dose would worsen the dopamine blockade causing the dystonia.",
      "The normal temperature, absent rigidity, and normal creatine kinase exclude neuroleptic malignant syndrome, so dantrolene is not indicated.",
      "Benzodiazepines are only adjunctive; an anticholinergic is the definitive first-line treatment.",
      "Indefinite anticholinergic therapy without addressing the antipsychotic is not the appropriate acute or long-term strategy."
    ]
  },
  {
    id: "s3-0347",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Social anxiety disorder first-line treatment",
    difficulty: "easy",
    anchor: null,
    vignette: "A 22-year-old college student reports that for several years he has felt intense fear of embarrassing himself in social and performance situations, such as speaking in class or eating in front of others. He recognizes the fear is excessive but avoids these situations, which is harming his grades and friendships. He has no panic attacks out of the blue, no manic symptoms, and no substance use, and a medical workup is unremarkable.",
    lead: "Which of the following is the most appropriate first-line treatment?",
    options: [
      "Prescribe a standing daily benzodiazepine for long-term use.",
      "Recommend a selective serotonin reuptake inhibitor and/or cognitive behavioral therapy.",
      "Advise complete avoidance of all anxiety-provoking situations.",
      "Start an antipsychotic as monotherapy.",
      "Use only an as-needed beta-blocker for all situations."
    ],
    answer: 1,
    exp: "Persistent, excessive fear of scrutiny in social situations with avoidance and functional impairment defines social anxiety disorder. First-line treatment is an SSRI (or SNRI) and/or cognitive behavioral therapy; beta-blockers are useful only for isolated performance anxiety, not generalized social anxiety.",
    why: [
      "Long-term daily benzodiazepines are not first-line owing to dependence risk and are avoided for chronic anxiety disorders.",
      "Correct: an SSRI (or SNRI) and/or cognitive behavioral therapy is first-line treatment for social anxiety disorder.",
      "Encouraging avoidance reinforces the disorder rather than treating it.",
      "Antipsychotic monotherapy is not indicated for social anxiety disorder.",
      "A beta-blocker helps only situational performance anxiety, not the broader generalized social anxiety described."
    ]
  },
  {
    id: "s3-0348",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Advance directive and DNR order interpretation",
    difficulty: "moderate",
    anchor: null,
    vignette: "An 82-year-old man with advanced metastatic cancer is admitted with pneumonia and worsening respiratory distress. He completed a valid advance directive naming his daughter as health care proxy and clearly documenting that he does not want cardiopulmonary resuscitation or intubation. He now becomes obtunded and cannot participate. His son, who lives out of state, arrives and insists that everything be done, including intubation.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Intubate the patient because a family member is now demanding full measures.",
      "Ask the two children to vote on the plan of care.",
      "Honor the documented advance directive and the proxy's authority, providing care consistent with his stated wishes.",
      "Obtain an emergency court order to override the advance directive.",
      "Default to full resuscitation whenever any relative disagrees with the directive."
    ],
    answer: 2,
    exp: "A valid advance directive expressing a competent patient's wishes governs care once he loses capacity, and the designated proxy, not other relatives, speaks for him. The documented refusal of CPR and intubation must be honored, and comfort-focused, wish-consistent care provided; a disagreeing family member cannot override a valid directive.",
    why: [
      "A single relative's demand does not override the patient's own documented, valid wishes.",
      "Care is directed by the patient's advance directive and proxy, not by a family vote.",
      "Correct: the valid advance directive and the appointed proxy govern care, and the patient's documented refusal of CPR and intubation must be honored.",
      "Courts are not needed to enforce a clear, valid advance directive that already reflects the patient's wishes.",
      "Defaulting to full resuscitation would violate the patient's explicit, legally valid refusal."
    ]
  },
  {
    id: "s3-0349",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "HIV pre-exposure prophylaxis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 26-year-old man who has sex with men requests protection from HIV. He reports inconsistent condom use with multiple partners and has no symptoms. He is interested in a preventive medication he heard about. Before he starts, baseline screening is completed and shown below, confirming he is HIV-negative with normal renal function and no active hepatitis B needing different management.\n\n| Test | Value |\n|---|---|\n| HIV antigen/antibody | negative |\n| Creatinine / eGFR | normal |\n| Hepatitis B surface antigen | negative |\n| STI screen | negative |",
    lead: "Which of the following is the most appropriate recommendation?",
    options: [
      "Tell him no preventive medication exists and to rely on condoms alone.",
      "Start post-exposure prophylaxis only after a future exposure occurs.",
      "Begin daily oral tenofovir-based pre-exposure prophylaxis with periodic HIV and renal monitoring.",
      "Defer any prophylaxis until his CD4 count is checked.",
      "Give a one-time dose of antiretroviral medication now."
    ],
    answer: 2,
    exp: "A confirmed HIV-negative person at substantial risk of acquiring HIV is a candidate for pre-exposure prophylaxis. Daily oral tenofovir-based therapy markedly reduces the risk of infection and is started after confirming negative HIV status and normal renal function, with periodic repeat HIV testing, renal monitoring, and STI screening.",
    why: [
      "Effective pre-exposure prophylaxis exists and is recommended for people at substantial risk.",
      "Post-exposure prophylaxis addresses a single past exposure and does not provide the ongoing protection he needs.",
      "Correct: daily oral tenofovir-based pre-exposure prophylaxis with periodic HIV and renal monitoring is appropriate for an HIV-negative person at substantial risk.",
      "CD4 testing is unnecessary because he is HIV-negative; prophylaxis does not depend on it.",
      "A single dose does not provide durable prophylaxis; ongoing daily therapy (or an approved regimen) is required."
    ]
  },
  {
    id: "s3-0350",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Composite endpoint interpretation",
    difficulty: "hard",
    anchor: "table",
    vignette: "A cardiovascular trial reports that a new drug significantly reduces its primary composite endpoint of cardiovascular death, nonfatal myocardial infarction, and hospitalization for heart failure. On reviewing the individual components, a clinician notices that the overall benefit is driven almost entirely by fewer heart-failure hospitalizations, while the harder outcomes show no meaningful difference. The component data are shown.\n\n| Component | Drug vs placebo |\n|---|---|\n| Cardiovascular death | no significant difference |\n| Nonfatal MI | no significant difference |\n| HF hospitalization | markedly reduced |\n| Composite endpoint | significantly reduced |",
    lead: "Which of the following is the best interpretation of this composite endpoint result?",
    options: [
      "The composite proves the drug reduces cardiovascular mortality.",
      "Because the composite is significant, each individual component must also be significant.",
      "The composite result should be disregarded entirely as meaningless.",
      "A significant composite always indicates a large clinical benefit regardless of components.",
      "The overall benefit is driven by the least severe component, so the composite must be interpreted cautiously and by its individual parts."
    ],
    answer: 4,
    exp: "Composite endpoints combine outcomes of differing severity and can appear positive even when the effect is confined to the softest, most frequent component. Here the benefit comes from fewer heart-failure hospitalizations while death and myocardial infarction are unchanged, so the composite must be interpreted cautiously by examining its individual components rather than assuming a mortality benefit.",
    why: [
      "The component data show no reduction in cardiovascular death, so the composite does not prove a mortality benefit.",
      "A significant composite does not require each component to be significant; the effect can rest on a single component.",
      "The composite is not meaningless, but it must be interpreted alongside its individual components rather than discarded.",
      "A significant composite can reflect a modest effect on a soft endpoint, not necessarily a large clinical benefit.",
      "Correct: the benefit is driven by the least severe component, so the composite must be interpreted cautiously and by its individual parts."
    ]
  }
];
