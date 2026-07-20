/*
 * Rounds Codex - USMLE Step 2 CK question bank, Batch 8 (25 items)
 * Blueprint-weighted, Medicine-heavy clinical mix. All vignettes original;
 * source used for facts only. Step 2 CK items are clinical: each ends in a
 * decision about diagnosis, next best step, pharmacotherapy, or prevention.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP2CK_B8 = [
  {
    id: "s2ck-0176",
    system: "Internal Medicine",
    discipline: "Hematology/Oncology",
    topic: "Multiple myeloma",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 68-year-old man reports several weeks of worsening fatigue, mid-back pain, and two recent bacterial pneumonias. He appears pale. Peripheral smear shows red cells stacked like coins. Skeletal survey reveals punched-out lytic lesions in the skull.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 8.9 g/dL | 13.5-17.5 |\n| Calcium | 12.6 mg/dL | 8.5-10.2 |\n| Creatinine | 2.3 mg/dL | 0.6-1.2 |\n| Total protein | 10.4 g/dL | 6.0-8.3 |\n| Albumin | 3.1 g/dL | 3.5-5.0 |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Multiple myeloma",
      "Metastatic prostate carcinoma",
      "Primary hyperparathyroidism",
      "Waldenstrom macroglobulinemia",
      "Monoclonal gammopathy of undetermined significance"
    ],
    answer: 0,
    exp: "The combination of anemia, hypercalcemia, renal insufficiency, and lytic bone lesions with a large gap between total protein and albumin (a monoclonal paraprotein) and rouleaux formation is classic for multiple myeloma. Recurrent infections reflect impaired production of functional immunoglobulins. Confirmation is with serum and urine protein electrophoresis and a bone marrow biopsy showing clonal plasma cells.",
    why: [
      "Correct: anemia, hypercalcemia, renal failure, and lytic lesions with a paraprotein gap and rouleaux define multiple myeloma.",
      "Prostate cancer causes osteoblastic (sclerotic), not punched-out lytic, lesions and does not produce a paraprotein gap.",
      "Primary hyperparathyroidism raises calcium but does not cause anemia, lytic skull lesions, or a monoclonal protein spike.",
      "Waldenstrom produces an IgM paraprotein with hyperviscosity but characteristically lacks lytic bone lesions and hypercalcemia.",
      "MGUS is asymptomatic with no anemia, hypercalcemia, renal failure, or bone lesions (no end-organ damage)."
    ]
  },
  {
    id: "s2ck-0177",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Systemic lupus erythematosus",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 26-year-old woman has several months of fatigue, symmetric small-joint arthralgias, painless oral ulcers, and a facial rash that spares the nasolabial folds and worsens with sun exposure. She now has pleuritic chest pain.\n\n| Test | Value | Reference |\n|---|---|---|\n| WBC | 3.1 x10^9/L | 4.0-11.0 |\n| Platelets | 96 x10^9/L | 150-400 |\n| ANA | 1:640 (positive) | negative |\n| Anti-dsDNA | markedly elevated | negative |\n| C3/C4 | low | normal |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Rheumatoid arthritis",
      "Systemic lupus erythematosus",
      "Dermatomyositis",
      "Parvovirus B19 arthropathy",
      "Mixed cryoglobulinemia"
    ],
    answer: 1,
    exp: "A young woman with malar photosensitive rash, oral ulcers, nonerosive arthritis, serositis, and cytopenias, together with a high-titer ANA, elevated anti-double-stranded DNA, and low complement, meets criteria for systemic lupus erythematosus. Anti-dsDNA and hypocomplementemia are specific for lupus and track with disease activity, particularly nephritis.",
    why: [
      "Rheumatoid arthritis causes erosive symmetric arthritis but not malar rash, oral ulcers, serositis, or anti-dsDNA.",
      "Correct: malar rash, oral ulcers, serositis, cytopenias, high-titer ANA, anti-dsDNA, and low complement define SLE.",
      "Dermatomyositis causes proximal muscle weakness with heliotrope rash and Gottron papules, not this serologic pattern.",
      "Parvovirus can cause a transient symmetric arthropathy but not cytopenias with anti-dsDNA and low complement.",
      "Cryoglobulinemia causes palpable purpura and neuropathy, typically with hepatitis C, not this multisystem lupus picture."
    ]
  },
  {
    id: "s2ck-0178",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Idiopathic pulmonary fibrosis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 65-year-old man has one year of progressive exertional dyspnea and a persistent dry cough. He has fine dry bibasilar end-inspiratory crackles and digital clubbing. He never smoked and reports no birds, molds, or occupational dust exposures. Autoimmune serologies are negative.\n\n**[IMAGE: high-resolution chest CT showing peripheral, subpleural, basal-predominant reticulation with honeycombing and traction bronchiectasis]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Hypersensitivity pneumonitis",
      "Pulmonary sarcoidosis",
      "Idiopathic pulmonary fibrosis",
      "Chronic obstructive pulmonary disease",
      "Congestive heart failure"
    ],
    answer: 2,
    exp: "Insidious dyspnea and dry cough in an older adult with Velcro-like basal crackles, clubbing, and a usual interstitial pneumonia pattern on HRCT (subpleural, basal reticulation with honeycombing) in the absence of an exposure or connective tissue disease indicates idiopathic pulmonary fibrosis. Diagnosis is often confirmed by the characteristic UIP pattern alone, and antifibrotic therapy (pirfenidone or nintedanib) slows decline.",
    why: [
      "Hypersensitivity pneumonitis requires an antigen exposure and typically shows upper/mid-lung mosaic attenuation, not basal honeycombing.",
      "Sarcoidosis causes hilar adenopathy and upper-lobe nodularity, not subpleural basal honeycombing with clubbing.",
      "Correct: a subpleural basal UIP pattern with honeycombing and no alternate cause defines idiopathic pulmonary fibrosis.",
      "COPD produces airflow obstruction and hyperinflation, not restrictive fibrosis with honeycombing and clubbing.",
      "Heart failure causes central edema and effusions that respond to diuresis, not fixed subpleural honeycombing."
    ]
  },
  {
    id: "s2ck-0179",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Wolff-Parkinson-White syndrome",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 22-year-old man has recurrent episodes of abrupt-onset palpitations that resolve spontaneously, and one episode of near-syncope. He is asymptomatic in clinic with a normal cardiac examination and normal blood pressure.\n\n**[ECG: sinus rhythm with a short PR interval and a slurred upstroke of the QRS (delta wave)]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Long-term rate control with intravenous diltiazem for future episodes",
      "Start digoxin for maintenance therapy",
      "Reassure the patient that no further evaluation is needed",
      "Refer for electrophysiology study with catheter ablation of the accessory pathway",
      "Place an implantable cardioverter-defibrillator"
    ],
    answer: 3,
    exp: "A short PR interval with a delta wave plus symptomatic tachyarrhythmias defines the Wolff-Parkinson-White syndrome. In a symptomatic patient, catheter ablation of the accessory pathway is the definitive, curative treatment. AV nodal blocking agents such as digoxin and non-dihydropyridine calcium channel blockers are dangerous if atrial fibrillation develops because they can accelerate conduction down the accessory pathway.",
    why: [
      "AV nodal blockers like diltiazem can precipitate rapid conduction over the accessory pathway during atrial fibrillation and are hazardous in WPW.",
      "Digoxin shortens the accessory pathway refractory period and can precipitate ventricular fibrillation in WPW.",
      "Symptomatic pre-excitation with near-syncope warrants intervention, not reassurance.",
      "Correct: catheter ablation of the accessory pathway is the definitive, curative therapy for symptomatic WPW.",
      "An ICD treats sustained ventricular arrhythmias, not a curable accessory pathway; ablation is preferred."
    ]
  },
  {
    id: "s2ck-0180",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Primary hyperaldosteronism",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 47-year-old woman has hypertension that remains 168/104 mm Hg despite three antihypertensive agents. She has intermittent muscle cramps. She is not on diuretics and has no edema.\n\n| Test | Value | Reference |\n|---|---|---|\n| Potassium | 2.9 mEq/L | 3.5-5.0 |\n| Bicarbonate | 32 mEq/L | 22-28 |\n| Sodium | 144 mEq/L | 135-145 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Renal artery duplex ultrasonography",
      "24-hour urine metanephrines",
      "Empiric spironolactone without further testing",
      "Immediate adrenal venous sampling",
      "Measure the plasma aldosterone-to-renin ratio"
    ],
    answer: 4,
    exp: "Resistant hypertension with spontaneous hypokalemia and metabolic alkalosis strongly suggests primary hyperaldosteronism. The appropriate screening test is the plasma aldosterone-to-renin ratio; a high aldosterone with suppressed renin supports the diagnosis and is followed by confirmatory testing and then adrenal imaging or venous sampling to distinguish an adenoma from bilateral hyperplasia.",
    why: [
      "Renovascular disease is a consideration but does not typically cause this hypokalemic alkalosis; screen for aldosterone excess first.",
      "Urine metanephrines screen for pheochromocytoma, which causes paroxysmal symptoms, not this hypokalemic pattern.",
      "Treating empirically before biochemical confirmation forfeits the chance to identify a surgically curable adenoma.",
      "Adrenal venous sampling is a later step to lateralize a source after biochemical confirmation, not the initial test.",
      "Correct: the aldosterone-to-renin ratio is the screening test for primary hyperaldosteronism in resistant hypertension with hypokalemia."
    ]
  },
  {
    id: "s2ck-0181",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Guillain-Barre syndrome",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 38-year-old man reports three days of progressive symmetric leg weakness that has ascended to involve his thighs and now his hands. He had a diarrheal illness two weeks ago. Deep tendon reflexes are absent. Sensation is largely preserved and mental status is normal.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Measure serial forced vital capacity and admit for close monitoring",
      "Begin high-dose intravenous corticosteroids",
      "Discharge with outpatient nerve conduction studies",
      "Start empiric intravenous antibiotics",
      "Obtain a noncontrast CT of the head"
    ],
    answer: 0,
    exp: "Ascending symmetric weakness with areflexia after a diarrheal illness is characteristic of Guillain-Barre syndrome. Because respiratory failure from diaphragmatic weakness is the major early threat, the first priority is admission with serial bedside spirometry (forced vital capacity and negative inspiratory force). Disease-specific treatment is IVIG or plasma exchange; corticosteroids are not effective.",
    why: [
      "Correct: monitor respiratory status with serial forced vital capacity and admit, since respiratory failure is the leading cause of death.",
      "Corticosteroids have been shown to be ineffective in Guillain-Barre syndrome; IVIG or plasma exchange is used.",
      "Discharge is unsafe because rapidly progressive weakness can cause respiratory failure requiring intubation.",
      "There is no infection to treat; the syndrome is a post-infectious autoimmune neuropathy.",
      "The clinical pattern is a peripheral neuropathy; a head CT would not explain areflexic ascending weakness."
    ]
  },
  {
    id: "s2ck-0182",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Hereditary hemochromatosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 52-year-old man of northern European descent has months of fatigue, arthralgias of the second and third metacarpophalangeal joints, and decreased libido. His skin has a bronze hue and he was recently diagnosed with diabetes. Liver span is enlarged.\n\n| Test | Value | Reference |\n|---|---|---|\n| Ferritin | 1450 ng/mL | 30-300 |\n| Transferrin saturation | 78% | 20-50 |\n| ALT | 88 U/L | 10-40 |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Wilson disease",
      "Hereditary hemochromatosis",
      "Alpha-1 antitrypsin deficiency",
      "Nonalcoholic steatohepatitis",
      "Autoimmune hepatitis"
    ],
    answer: 1,
    exp: "Fatigue, arthropathy of the second and third MCP joints, bronze skin, diabetes ('bronze diabetes'), hypogonadism, and hepatomegaly with a markedly elevated ferritin and transferrin saturation above 45% indicate iron overload from hereditary hemochromatosis. Confirmation is with HFE gene testing (C282Y), and treatment is serial therapeutic phlebotomy.",
    why: [
      "Wilson disease causes copper accumulation with neuropsychiatric signs and Kayser-Fleischer rings, presenting in younger patients.",
      "Correct: MCP arthropathy, bronze skin, diabetes, and hypogonadism with high ferritin and transferrin saturation indicate iron overload.",
      "Alpha-1 antitrypsin deficiency causes liver disease with early emphysema, not iron overload with an elevated transferrin saturation.",
      "NASH is associated with obesity and metabolic syndrome but does not raise transferrin saturation to 78% or cause bronze skin.",
      "Autoimmune hepatitis shows positive autoantibodies and hypergammaglobulinemia, not markedly elevated iron studies."
    ]
  },
  {
    id: "s2ck-0183",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Legionella pneumonia",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 61-year-old smoker has three days of high fever, cough, watery diarrhea, and confusion. He returned from a cruise last week. Temperature is 39.6 C and pulse is 78/min. A chest radiograph shows a patchy left lower lobe infiltrate.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sodium | 128 mEq/L | 135-145 |\n| AST | 96 U/L | 10-40 |\n| ALT | 88 U/L | 10-40 |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Mycoplasma pneumonia",
      "Influenza pneumonia",
      "Legionella pneumonia",
      "Pneumococcal pneumonia",
      "Psittacosis"
    ],
    answer: 2,
    exp: "High fever with diarrhea, confusion, hyponatremia, elevated transaminases, and relative bradycardia after exposure to a water source (a cruise ship) is a classic presentation of Legionella pneumonia. The urinary antigen test for Legionella serogroup 1 confirms it, and a respiratory fluoroquinolone or a macrolide is the treatment.",
    why: [
      "Mycoplasma causes a milder 'walking pneumonia' in younger patients, not this severe illness with hyponatremia and diarrhea.",
      "Influenza can cause pneumonia but does not characteristically produce hyponatremia, transaminitis, and prominent diarrhea after water exposure.",
      "Correct: fever, diarrhea, confusion, hyponatremia, transaminitis, and relative bradycardia after water exposure point to Legionella.",
      "Pneumococcal pneumonia causes lobar consolidation with rust-colored sputum but not this extrapulmonary triad of features.",
      "Psittacosis follows bird exposure and causes headache and splenomegaly, not this waterborne exposure pattern."
    ]
  },
  {
    id: "s2ck-0184",
    system: "Internal Medicine",
    discipline: "Hematology/Oncology",
    topic: "Thrombotic thrombocytopenic purpura",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 34-year-old woman has two days of fatigue, confusion, and low-grade fever. She has scattered petechiae. She takes no anticoagulants and has had no recent bleeding.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 8.4 g/dL | 12-16 |\n| Platelets | 18 x10^9/L | 150-400 |\n| LDH | 720 U/L | 100-250 |\n| Creatinine | 1.6 mg/dL | 0.6-1.1 |\n| PT/PTT | normal | normal |\n| Smear | schistocytes | none |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Transfuse platelets to correct the thrombocytopenia",
      "Broad-spectrum antibiotics alone",
      "Start a heparin infusion",
      "Initiate urgent plasma exchange (plasmapheresis)",
      "Withhold all treatment until the ADAMTS13 level returns"
    ],
    answer: 3,
    exp: "Microangiopathic hemolytic anemia with schistocytes, severe thrombocytopenia, neurologic changes, fever, and renal involvement, with normal coagulation times, is thrombotic thrombocytopenic purpura from ADAMTS13 deficiency. Urgent plasma exchange is lifesaving and should be started immediately without waiting for the ADAMTS13 result. Platelet transfusion is generally avoided because it can worsen microvascular thrombosis.",
    why: [
      "Platelet transfusion can fuel microvascular thrombosis in TTP and is reserved for life-threatening bleeding only.",
      "There is no evidence of a primary infection driving this; the microangiopathy requires plasma exchange.",
      "Normal PT/PTT argue against DIC, and heparin does not treat the ADAMTS13 deficiency of TTP.",
      "Correct: urgent plasma exchange is the lifesaving therapy and must not be delayed for confirmatory testing.",
      "Delaying treatment for a confirmatory assay risks rapid deterioration; empiric plasma exchange is started immediately."
    ]
  },
  {
    id: "s2ck-0185",
    system: "Surgery",
    discipline: "Otolaryngology/GI Surgery",
    topic: "Zenker diverticulum",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 72-year-old man has several months of difficulty initiating swallows, regurgitation of undigested food hours after eating, foul breath, and a gurgling sensation in his neck. He has lost 3 kg. He occasionally aspirates at night.\n\n**[IMAGE: barium esophagram showing a posterior outpouching at the pharyngoesophageal junction that retains contrast]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Achalasia",
      "Esophageal squamous cell carcinoma",
      "Diffuse esophageal spasm",
      "Eosinophilic esophagitis",
      "Zenker diverticulum"
    ],
    answer: 4,
    exp: "Oropharyngeal dysphagia with regurgitation of undigested food, halitosis, a gurgling neck, and nocturnal aspiration, with a posterior pharyngoesophageal outpouching on barium swallow, is a Zenker diverticulum. It arises from herniation through Killian triangle above the cricopharyngeus. Treatment is cricopharyngeal myotomy with diverticulectomy or an endoscopic approach.",
    why: [
      "Achalasia causes progressive dysphagia to solids and liquids with a bird-beak esophagus, not a posterior neck pouch with halitosis.",
      "Esophageal cancer causes progressive dysphagia and weight loss but shows an irregular luminal stricture, not a retaining diverticulum.",
      "Diffuse esophageal spasm causes intermittent chest pain and a corkscrew esophagus, not food regurgitation from a pouch.",
      "Eosinophilic esophagitis causes solid-food dysphagia and food impaction with mucosal rings, not a posterior diverticulum.",
      "Correct: regurgitation of undigested food, halitosis, and a posterior pharyngoesophageal outpouching define a Zenker diverticulum."
    ]
  },
  {
    id: "s2ck-0186",
    system: "Surgery",
    discipline: "Colorectal Surgery",
    topic: "Thrombosed external hemorrhoid",
    difficulty: "easy",
    anchor: null,
    vignette: "A 40-year-old man presents with the sudden onset 12 hours ago of severe, constant perianal pain. Examination shows a single tense, tender, bluish-purple nodule at the anal verge. There is no fever, drainage, or surrounding cellulitis.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Excision of the thrombosed external hemorrhoid",
      "Rubber band ligation",
      "Oral metronidazole",
      "Incision and drainage in the operating room under general anesthesia",
      "Barium enema"
    ],
    answer: 0,
    exp: "An acutely painful, tense bluish nodule at the anal verge within the first 48 to 72 hours is a thrombosed external hemorrhoid, and excision of the clot and overlying skin provides the fastest relief during this early window. Beyond 72 hours, conservative management with sitz baths, stool softeners, and analgesia is preferred as pain subsides.",
    why: [
      "Correct: within the first 48 to 72 hours, excision of a thrombosed external hemorrhoid gives the most rapid pain relief.",
      "Rubber band ligation is used for internal hemorrhoids and would strangulate sensitive external skin below the dentate line.",
      "There is no infection; antibiotics do not treat a thrombosed hemorrhoid.",
      "A simple in-office excision suffices; general anesthesia in the operating room is unnecessary for this small lesion.",
      "A barium enema evaluates the colon and has no role in an acute thrombosed external hemorrhoid."
    ]
  },
  {
    id: "s2ck-0187",
    system: "Surgery",
    discipline: "Colorectal Surgery",
    topic: "Perianal abscess",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 35-year-old man with type 2 diabetes has three days of increasing throbbing perianal pain, now with fever and difficulty sitting. Examination reveals a fluctuant, exquisitely tender, erythematous mass just lateral to the anus with overlying warmth.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Oral antibiotics alone",
      "Incision and drainage",
      "Sitz baths and stool softeners only",
      "Colonoscopy",
      "Topical nitroglycerin"
    ],
    answer: 1,
    exp: "A fluctuant, tender, warm perianal mass with fever is a perianal abscess, and the definitive treatment is prompt incision and drainage. Antibiotics alone will not resolve a drainable collection; they are added for cellulitis, immunosuppression, diabetes, or signs of systemic infection but never substitute for source control.",
    why: [
      "Antibiotics alone do not resolve an established abscess; drainage is required, though antibiotics are added in diabetics.",
      "Correct: a fluctuant perianal abscess requires prompt incision and drainage for source control.",
      "Conservative measures do not drain a fluctuant collection and would allow the infection to progress.",
      "Colonoscopy has no role in the acute management of a drainable perianal abscess.",
      "Topical nitroglycerin treats anal fissures by relaxing the sphincter, not a purulent abscess."
    ]
  },
  {
    id: "s2ck-0188",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Gallstone ileus",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 75-year-old woman has two days of intermittent cramping abdominal pain, bilious vomiting, and obstipation. She has a history of recurrent biliary colic. The abdomen is distended with high-pitched bowel sounds.\n\n**[IMAGE: abdominal radiograph showing dilated small-bowel loops with air-fluid levels, air in the biliary tree, and an ectopic calcified stone in the right lower quadrant]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Adhesive small-bowel obstruction",
      "Sigmoid volvulus",
      "Gallstone ileus",
      "Acute cholecystitis",
      "Cecal adenocarcinoma"
    ],
    answer: 2,
    exp: "Small-bowel obstruction accompanied by pneumobilia and an ectopic gallstone (the Rigler triad) indicates gallstone ileus, in which a large gallstone erodes through a cholecystoduodenal fistula and impacts in the distal ileum. Treatment is enterolithotomy to remove the obstructing stone; management of the fistula and gallbladder is individualized.",
    why: [
      "Adhesive obstruction is common but does not produce pneumobilia or an ectopic gallstone on imaging.",
      "Sigmoid volvulus causes a coffee-bean sign of the colon, not small-bowel obstruction with pneumobilia.",
      "Correct: small-bowel obstruction with pneumobilia and an ectopic gallstone (Rigler triad) defines gallstone ileus.",
      "Acute cholecystitis causes right upper quadrant pain and a positive Murphy sign, not mechanical small-bowel obstruction.",
      "Cecal cancer can obstruct but would not create biliary air or a migrated gallstone."
    ]
  },
  {
    id: "s2ck-0189",
    system: "Pediatrics",
    discipline: "Pediatric Cardiology",
    topic: "Tetralogy of Fallot (hypercyanotic spell)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 9-month-old infant with a known murmur suddenly becomes deeply cyanotic and irritable while crying. The parents note he instinctively pulls his knees to his chest, after which he improves. On examination there is a harsh systolic ejection murmur at the left upper sternal border.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Intravenous furosemide",
      "Oral nifedipine",
      "Immediate chest compressions",
      "Place the infant in the knee-chest position and give supplemental oxygen",
      "Intravenous prostaglandin E1 infusion"
    ],
    answer: 3,
    exp: "A hypercyanotic 'tet' spell in an infant with tetralogy of Fallot results from increased right-to-left shunting across the ventricular septal defect. First-line management is the knee-chest position, which raises systemic vascular resistance and reduces the shunt, plus supplemental oxygen and calming the child; morphine and other measures follow if needed.",
    why: [
      "Furosemide lowers preload and would reduce pulmonary blood flow, worsening the right-to-left shunt.",
      "Nifedipine lowers systemic vascular resistance, which increases right-to-left shunting and worsens the spell.",
      "The infant is perfusing and improves with squatting; chest compressions are for pulselessness, not a tet spell.",
      "Correct: knee-chest positioning raises systemic vascular resistance to decrease the right-to-left shunt, plus oxygen.",
      "Prostaglandin maintains ductal patency in a ductal-dependent neonate, not for a tet spell in an older infant."
    ]
  },
  {
    id: "s2ck-0190",
    system: "Pediatrics",
    discipline: "Neonatology",
    topic: "Early-onset neonatal sepsis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A term newborn at 14 hours of life develops temperature instability, tachypnea with grunting, and poor feeding. The mother had prolonged rupture of membranes and her group B Streptococcus status was unknown; she received no intrapartum antibiotics.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Continued observation with reassessment in 12 hours",
      "Oral amoxicillin",
      "Intravenous acyclovir alone",
      "Surfactant administration",
      "Obtain blood cultures and begin empiric intravenous ampicillin plus gentamicin"
    ],
    answer: 4,
    exp: "A newborn with temperature instability, respiratory distress, and poor feeding in the setting of prolonged rupture of membranes and unknown GBS status is presumed to have early-onset neonatal sepsis. The standard of care is a sepsis evaluation with blood cultures followed by prompt empiric intravenous ampicillin plus gentamicin, which covers group B Streptococcus and gram-negative organisms.",
    why: [
      "A symptomatic newborn with risk factors cannot be safely observed; empiric antibiotics are urgent.",
      "Oral antibiotics are inadequate for suspected neonatal bacteremia; intravenous therapy is required.",
      "Acyclovir treats HSV, but bacterial coverage for GBS and gram-negatives is the priority in this presentation.",
      "Surfactant treats respiratory distress syndrome of prematurity, not sepsis in a symptomatic term infant.",
      "Correct: obtain blood cultures and start empiric IV ampicillin plus gentamicin for suspected early-onset sepsis."
    ]
  },
  {
    id: "s2ck-0191",
    system: "Pediatrics",
    discipline: "Pediatric Infectious Disease",
    topic: "Erythema infectiosum (fifth disease)",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 6-year-old girl had a few days of low-grade fever and mild coryza, which resolved. Today her parents note bright red cheeks. She is well-appearing and playful with no respiratory distress.\n\n**[IMAGE: child with confluent erythema of both cheeks sparing the nasal bridge, and a lacy reticular rash on the extensor arms]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Erythema infectiosum (parvovirus B19)",
      "Measles",
      "Scarlet fever",
      "Roseola infantum",
      "Rubella"
    ],
    answer: 0,
    exp: "A well-appearing child with a bright 'slapped-cheek' facial erythema followed by a lacy reticular rash on the extremities after a mild prodrome has erythema infectiosum from parvovirus B19. It is self-limited; the child is no longer contagious once the rash appears. Caution is warranted around pregnant contacts and patients with hemolytic anemias.",
    why: [
      "Correct: a slapped-cheek facial rash with a lacy reticular exanthem after a mild prodrome is erythema infectiosum.",
      "Measles causes high fever, cough, coryza, conjunctivitis, Koplik spots, and a cephalocaudal rash in an ill child.",
      "Scarlet fever produces a sandpaper rash with a strawberry tongue and pharyngitis, not slapped cheeks with sparing.",
      "Roseola causes high fever followed by a rose-pink truncal rash as the fever breaks, not facial erythema.",
      "Rubella causes a pink maculopapular rash with tender posterior auricular lymphadenopathy, not the slapped-cheek pattern."
    ]
  },
  {
    id: "s2ck-0192",
    system: "Pediatrics",
    discipline: "Pediatric Orthopedics",
    topic: "Osgood-Schlatter disease",
    difficulty: "easy",
    anchor: null,
    vignette: "A 13-year-old competitive basketball player has several weeks of anterior knee pain that worsens with running, jumping, and kneeling and improves with rest. Examination shows tenderness and a bony prominence over the tibial tubercle. There is no effusion, warmth, or ligamentous laxity.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Patellar tendon rupture",
      "Osgood-Schlatter disease",
      "Septic arthritis of the knee",
      "Osteosarcoma",
      "Patellofemoral pain syndrome"
    ],
    answer: 1,
    exp: "Activity-related anterior knee pain with focal tenderness and prominence over the tibial tubercle in a skeletally immature athlete is Osgood-Schlatter disease, a traction apophysitis of the tibial tubercle. It is a clinical diagnosis managed with activity modification, ice, stretching, and analgesia; it resolves with skeletal maturity.",
    why: [
      "Patellar tendon rupture causes acute inability to extend the knee and a palpable defect, not chronic activity-related tubercle pain.",
      "Correct: tibial tubercle tenderness and prominence in an active adolescent is Osgood-Schlatter traction apophysitis.",
      "Septic arthritis presents with fever, a warm effusion, and refusal to bear weight, none of which are present here.",
      "Osteosarcoma causes progressive rest and night pain with a metaphyseal mass, not focal tubercle pain relieved by rest.",
      "Patellofemoral pain causes peripatellar pain worse with stairs and prolonged sitting, not focal tibial tubercle tenderness."
    ]
  },
  {
    id: "s2ck-0193",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Hyperemesis gravidarum",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 24-year-old woman at 9 weeks gestation has two weeks of intractable nausea and vomiting, is unable to keep down food or liquids, and has lost 6% of her prepregnancy weight. She has dry mucous membranes and orthostatic vital signs.\n\n| Test | Value | Reference |\n|---|---|---|\n| Urine ketones | large | negative |\n| Potassium | 3.0 mEq/L | 3.5-5.0 |\n| Chloride | 90 mEq/L | 98-106 |\n| Bicarbonate | 32 mEq/L | 22-28 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Reassurance with oral intake as tolerated",
      "Immediate termination of the pregnancy",
      "Intravenous fluid resuscitation with electrolyte repletion and antiemetics",
      "Oral iron supplementation",
      "Outpatient ondansetron without further evaluation"
    ],
    answer: 2,
    exp: "Persistent vomiting with more than 5% weight loss, ketonuria, hypokalemia, and hypochloremic metabolic alkalosis defines hyperemesis gravidarum. The immediate priority is intravenous fluid resuscitation with potassium repletion and antiemetics (for example pyridoxine-doxylamine, then metoclopramide or ondansetron), along with thiamine before dextrose to prevent Wernicke encephalopathy.",
    why: [
      "Oral intake will fail in a dehydrated, vomiting patient with ketonuria and electrolyte derangements; IV therapy is needed.",
      "Termination is not indicated; hyperemesis is treatable with rehydration and antiemetics.",
      "Correct: IV fluids with electrolyte repletion and antiemetics address the dehydration and metabolic alkalosis of hyperemesis.",
      "Iron worsens nausea and does not address dehydration or the electrolyte abnormalities.",
      "This patient is volume-depleted with electrolyte derangements and needs inpatient IV resuscitation, not outpatient oral therapy alone."
    ]
  },
  {
    id: "s2ck-0194",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Cervical insufficiency",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 29-year-old woman at 20 weeks gestation is found on routine examination to have painless cervical dilation to 2 cm with bulging membranes. She reports no contractions, bleeding, or leakage of fluid. She has had two prior painless second-trimester pregnancy losses.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate cesarean delivery",
      "Oxytocin augmentation",
      "Betamethasone and discharge home",
      "Cervical cerclage",
      "Therapeutic amniocentesis"
    ],
    answer: 3,
    exp: "Painless second-trimester cervical dilation with a history of recurrent painless midtrimester losses indicates cervical insufficiency. In this pre-viable period with no contractions or infection, an examination-indicated (rescue) cervical cerclage can be placed to reinforce the cervix and prolong the pregnancy. Progesterone and pelvic rest are adjuncts.",
    why: [
      "The fetus is pre-viable and there is no maternal or fetal indication for cesarean delivery.",
      "Oxytocin would promote delivery, the opposite of the goal of maintaining the pregnancy.",
      "Betamethasone is used near viability, and discharge without intervention risks imminent loss.",
      "Correct: an examination-indicated cerclage reinforces the incompetent cervix and can prolong this pregnancy.",
      "Amniocentesis does not treat cervical insufficiency and adds procedural risk without benefit here."
    ]
  },
  {
    id: "s2ck-0195",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Primary dysmenorrhea",
    difficulty: "easy",
    anchor: null,
    vignette: "A 17-year-old girl has crampy lower abdominal pain during the first one to two days of each menstrual period since menarche at age 12. The pain is relieved partly by a heating pad. She is not sexually active. Pelvic examination and vital signs are normal.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Diagnostic laparoscopy",
      "Pelvic ultrasound followed by a GnRH agonist",
      "Broad-spectrum antibiotics",
      "Endometrial biopsy",
      "Nonsteroidal anti-inflammatory drugs"
    ],
    answer: 4,
    exp: "Cyclic crampy pain beginning with menses in an adolescent with a normal examination and no red-flag features is primary dysmenorrhea, mediated by prostaglandins. First-line treatment is NSAIDs, which inhibit prostaglandin synthesis; combined hormonal contraception is added if NSAIDs are insufficient or contraception is desired.",
    why: [
      "Laparoscopy is invasive and reserved for suspected secondary causes after failure of empiric therapy.",
      "Routine imaging and GnRH agonists are not first-line for classic primary dysmenorrhea with a normal exam.",
      "There is no infection; antibiotics are not indicated for primary dysmenorrhea.",
      "Endometrial biopsy evaluates abnormal uterine bleeding in older women, not adolescent cyclic cramping.",
      "Correct: NSAIDs reduce prostaglandin-mediated cramping and are first-line for primary dysmenorrhea."
    ]
  },
  {
    id: "s2ck-0196",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Breech presentation at term",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 31-year-old woman at 37 weeks gestation is found on ultrasound to have a frank breech presentation. The pregnancy is otherwise uncomplicated, with a reassuring fetal heart tracing, adequate amniotic fluid, and no prior uterine surgery.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Offer external cephalic version",
      "Proceed to cesarean delivery now",
      "Perform a vaginal breech delivery immediately",
      "Await spontaneous version until 42 weeks",
      "Begin oxytocin induction"
    ],
    answer: 0,
    exp: "For a persistent breech at 37 weeks with no contraindications, external cephalic version should be offered to attempt to convert the fetus to a cephalic lie and allow a trial of vaginal delivery, reducing the need for cesarean. If version fails or is declined, a scheduled cesarean delivery is planned around 39 weeks.",
    why: [
      "Correct: at term with no contraindications, external cephalic version is offered to attempt conversion to cephalic presentation.",
      "Cesarean is the fallback if version fails or is declined, but version should be offered first to avoid surgery.",
      "Immediate vaginal breech delivery is not indicated in a stable patient not in labor and carries added risk.",
      "Spontaneous version at term is unlikely, and waiting to 42 weeks risks post-term complications.",
      "Oxytocin induction of a breech fetus is inappropriate without first attempting version or planning cesarean."
    ]
  },
  {
    id: "s2ck-0197",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Neuroleptic malignant syndrome",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 28-year-old man with schizophrenia was started on haloperidol five days ago. He now has a temperature of 40.1 C, generalized 'lead-pipe' muscle rigidity, fluctuating consciousness, diaphoresis, blood pressure swings, and tachycardia.\n\n| Test | Value | Reference |\n|---|---|---|\n| Creatine kinase | 8600 U/L | 30-200 |\n| WBC | 15.4 x10^9/L | 4-11 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Increase the haloperidol dose",
      "Discontinue the antipsychotic and provide aggressive supportive care",
      "Administer a serotonin agonist",
      "Start lithium",
      "Give benztropine alone"
    ],
    answer: 1,
    exp: "Fever, lead-pipe rigidity, autonomic instability, altered mental status, and markedly elevated creatine kinase days after starting a dopamine antagonist define neuroleptic malignant syndrome. The essential first step is to stop the offending antipsychotic and provide aggressive supportive care (cooling, IV fluids to protect the kidneys, and monitoring); dantrolene or bromocriptine is added in severe cases.",
    why: [
      "Increasing the antipsychotic worsens the dopamine blockade driving neuroleptic malignant syndrome.",
      "Correct: stop the antipsychotic and provide aggressive supportive care, the cornerstone of NMS treatment.",
      "Serotonin agonists are not indicated; NMS is a dopamine-blockade syndrome, not serotonin excess.",
      "Lithium does not treat NMS and can add neurotoxicity.",
      "Anticholinergics do not reverse NMS; stopping the drug and supportive care are essential."
    ]
  },
  {
    id: "s2ck-0198",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Borderline personality disorder",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 24-year-old woman has a long-standing pattern of intense, unstable relationships that swing between idealization and devaluation, recurrent self-cutting after perceived rejections, chronic feelings of emptiness, impulsive spending, and a shifting sense of identity. Symptoms are pervasive, not confined to discrete mood episodes.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Bipolar II disorder",
      "Histrionic personality disorder",
      "Borderline personality disorder",
      "Antisocial personality disorder",
      "Major depressive disorder"
    ],
    answer: 2,
    exp: "A pervasive pattern of unstable relationships, identity disturbance, chronic emptiness, impulsivity, recurrent self-harm, and frantic efforts to avoid abandonment is characteristic of borderline personality disorder. First-line treatment is psychotherapy such as dialectical behavior therapy; medications target specific comorbid symptoms.",
    why: [
      "Bipolar II involves discrete hypomanic and depressive episodes, whereas these symptoms are pervasive and interpersonally triggered.",
      "Histrionic disorder centers on attention-seeking and excessive emotionality, not self-harm and abandonment fears.",
      "Correct: unstable relationships, identity disturbance, chronic emptiness, impulsivity, and self-harm define borderline personality disorder.",
      "Antisocial disorder features disregard for others' rights and deceit, not self-directed harm and abandonment fears.",
      "Major depression is an episodic mood disorder and does not by itself explain the pervasive interpersonal instability."
    ]
  },
  {
    id: "s2ck-0199",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "One-time hepatitis C screening",
    difficulty: "easy",
    anchor: null,
    vignette: "A 45-year-old asymptomatic man presents for a routine health maintenance visit. He has no known risk factors for viral hepatitis, normal liver enzymes, and has never been tested for hepatitis C.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "No screening is indicated in the absence of risk factors",
      "Screen only if liver enzymes become elevated",
      "Hepatitis C RNA polymerase chain reaction as the initial test",
      "One-time hepatitis C antibody screening",
      "Liver ultrasonography"
    ],
    answer: 3,
    exp: "Current guidelines recommend one-time hepatitis C antibody screening for all adults aged 18 to 79 years regardless of risk factors, because many infected persons are asymptomatic with normal enzymes. A reactive antibody test is confirmed with an HCV RNA test to document active infection.",
    why: [
      "Universal one-time screening is now recommended for all adults, so absence of risk factors does not defer testing.",
      "Screening does not depend on abnormal enzymes, since infection is often present with normal transaminases.",
      "The initial test is the antibody assay; RNA testing is used to confirm a reactive antibody result.",
      "Correct: all adults aged 18 to 79 should receive one-time hepatitis C antibody screening regardless of risk.",
      "Ultrasonography assesses liver morphology and does not screen for hepatitis C infection."
    ]
  },
  {
    id: "s2ck-0200",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Statin therapy for primary prevention",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 58-year-old man with hypertension and a 25-pack-year smoking history has no history of cardiovascular disease or diabetes. His estimated 10-year atherosclerotic cardiovascular disease risk is 12%. He already follows a heart-healthy diet and exercises regularly.\n\n| Test | Value | Reference |\n|---|---|---|\n| LDL cholesterol | 150 mg/dL | < 100 optimal |\n| HDL cholesterol | 42 mg/dL | > 40 |\n| Total cholesterol | 232 mg/dL | < 200 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Continue lifestyle changes alone without pharmacotherapy",
      "Start a fibrate",
      "Start ezetimibe monotherapy",
      "Start a PCSK9 inhibitor",
      "Initiate a moderate-intensity statin"
    ],
    answer: 4,
    exp: "For a 40- to 75-year-old adult without diabetes or established cardiovascular disease and a 10-year ASCVD risk of 7.5% or higher, a moderate-intensity statin is recommended for primary prevention after a risk discussion. Statins are the first-line agents with the strongest evidence for reducing cardiovascular events.",
    why: [
      "With an intermediate-to-high 10-year risk and elevated LDL, lifestyle alone is insufficient and a statin is indicated.",
      "Fibrates primarily lower triglycerides and are not first-line for cardiovascular risk reduction here.",
      "Ezetimibe is an add-on when statins are inadequate or not tolerated, not first-line monotherapy.",
      "PCSK9 inhibitors are reserved for very high-risk patients not controlled on maximal statin therapy.",
      "Correct: a moderate-intensity statin is first-line primary prevention for this intermediate-risk patient with elevated LDL."
    ]
  }
];
