/*
 * Rounds Codex - USMLE Step 2 CK question bank, Batch 11 (25 items)
 * Blueprint-weighted, Medicine-heavy clinical mix. All vignettes original;
 * source used for facts only. Step 2 CK items are clinical: each ends in a
 * decision about diagnosis, next best step, pharmacotherapy, or prevention.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP2CK_B11 = [
  {
    id: "s2ck-0251",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Cardiac tamponade",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 58-year-old man with metastatic lung cancer presents with progressive dyspnea and lightheadedness over 3 days. He is tachycardic and hypotensive with distended neck veins and muffled, distant heart sounds. His systolic blood pressure falls by 18 mm Hg during inspiration. Bedside echocardiography shows a large circumferential pericardial effusion with diastolic collapse of the right atrium and right ventricle.\n\n**[ECG: sinus tachycardia with low QRS voltage and beat-to-beat alternation of QRS amplitude (electrical alternans)]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Acute pericarditis without effusion",
      "Tension pneumothorax",
      "Massive pulmonary embolism",
      "Acute decompensated heart failure",
      "Cardiac tamponade"
    ],
    answer: 4,
    exp: "Hypotension, jugular venous distention, and muffled heart sounds (Beck triad) with pulsus paradoxus, plus an echocardiogram showing a large effusion with diastolic right-heart collapse and low-voltage QRS with electrical alternans, indicate cardiac tamponade. A malignant effusion is compressing the heart; the definitive treatment is urgent pericardiocentesis.",
    why: [
      "Uncomplicated acute pericarditis causes pleuritic chest pain and diffuse ST elevation without hemodynamic collapse or diastolic chamber collapse.",
      "Tension pneumothorax causes tracheal deviation and absent unilateral breath sounds, not a pericardial effusion with electrical alternans.",
      "Massive pulmonary embolism causes acute right-heart strain but not a large circumferential pericardial effusion with diastolic right-atrial collapse.",
      "Decompensated heart failure produces pulmonary edema and an S3, not muffled sounds with tamponade physiology and echocardiographic chamber collapse.",
      "Correct: Beck triad, pulsus paradoxus, electrical alternans, and diastolic right-heart collapse on echo define cardiac tamponade requiring pericardiocentesis."
    ]
  },
  {
    id: "s2ck-0252",
    system: "Internal Medicine",
    discipline: "Critical Care/Pulmonology",
    topic: "Acute respiratory distress syndrome",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 49-year-old man admitted with severe acute pancreatitis develops rapidly worsening dyspnea and hypoxemia on hospital day 2. He requires intubation, and despite an inspired oxygen fraction of 0.9 his arterial oxygen tension is only 68 mm Hg (PaO2/FiO2 of 76). He has no history of heart disease, his jugular venous pressure is normal, and echocardiography shows normal biventricular function with no elevated filling pressures.\n\n**[IMAGE: Portable chest radiograph showing new bilateral diffuse alveolar opacities sparing the costophrenic angles, with a normal cardiac silhouette]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Acute respiratory distress syndrome",
      "Cardiogenic pulmonary edema",
      "Community-acquired pneumonia",
      "Diffuse alveolar hemorrhage",
      "Acute pulmonary embolism"
    ],
    answer: 0,
    exp: "Acute hypoxemic respiratory failure within a week of a known insult (pancreatitis), bilateral opacities not fully explained by effusions or collapse, a PaO2/FiO2 of 76, and no evidence of cardiogenic edema meet the Berlin criteria for acute respiratory distress syndrome. Management is lung-protective low-tidal-volume ventilation and treatment of the underlying cause.",
    why: [
      "Correct: bilateral infiltrates, severe hypoxemia (low PaO2/FiO2), and absence of cardiac failure after pancreatitis define ARDS by the Berlin criteria.",
      "Cardiogenic edema requires elevated left-heart filling pressures, but this patient has normal cardiac function and jugular venous pressure.",
      "Pneumonia typically causes a focal lobar infiltrate rather than diffuse bilateral opacities arising acutely from systemic inflammation.",
      "Diffuse alveolar hemorrhage presents with hemoptysis and a falling hematocrit, which are not described here.",
      "Pulmonary embolism usually produces a clear or near-clear chest film, not diffuse bilateral alveolar opacities."
    ]
  },
  {
    id: "s2ck-0253",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Achalasia",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 46-year-old woman has 8 months of progressive difficulty swallowing both solids and liquids, along with regurgitation of undigested food, nocturnal cough, and a 6-kg weight loss. She often maneuvers by lifting her neck and drinking water to force food down. Upper endoscopy shows retained food but no mass, and the scope passes into the stomach with a slight pop. High-resolution manometry reveals aperistalsis of the esophageal body and failure of the lower esophageal sphincter to relax.\n\n**[IMAGE: Barium esophagram showing a dilated esophagus tapering to a smooth 'bird-beak' narrowing at the gastroesophageal junction]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Esophageal adenocarcinoma",
      "Achalasia",
      "Diffuse esophageal spasm",
      "Gastroesophageal reflux disease",
      "Eosinophilic esophagitis"
    ],
    answer: 1,
    exp: "Dysphagia to both solids and liquids from the outset, regurgitation of undigested food, a bird-beak tapering on esophagram, and manometry showing aperistalsis with failed lower esophageal sphincter relaxation are diagnostic of achalasia. Treatment options include pneumatic dilation, laparoscopic (Heller) myotomy, or peroral endoscopic myotomy.",
    why: [
      "Esophageal cancer causes progressive solid-food dysphagia with a mucosal mass on endoscopy, not a smooth bird-beak with manometric aperistalsis.",
      "Correct: simultaneous solid and liquid dysphagia, a bird-beak esophagram, and aperistalsis with impaired LES relaxation define achalasia.",
      "Diffuse esophageal spasm causes intermittent chest pain and dysphagia with a corkscrew esophagram and preserved LES relaxation, not a dilated bird-beak esophagus.",
      "GERD causes heartburn and, at most, a peptic stricture, not global aperistalsis with a non-relaxing sphincter.",
      "Eosinophilic esophagitis causes solid-food dysphagia and food impaction with esophageal rings and eosinophils on biopsy, not manometric aperistalsis."
    ]
  },
  {
    id: "s2ck-0254",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Graves disease",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 29-year-old woman has 3 months of palpitations, heat intolerance, tremor, anxiety, and a 5-kg weight loss despite a good appetite. On exam she has a diffusely enlarged, non-tender thyroid with an audible bruit, a fine hand tremor, proptosis with lid lag, and raised, non-pitting plaques over the shins.\n\n| Test | Value | Reference |\n|---|---|---|\n| TSH | < 0.01 mU/L | 0.4-4.0 |\n| Free T4 | markedly elevated | normal |\n| TSH receptor antibody | positive | negative |\n| Radioiodine uptake | diffusely increased | normal |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Toxic multinodular goiter",
      "Subacute (de Quervain) thyroiditis",
      "Graves disease",
      "Silent (painless) thyroiditis",
      "Factitious thyrotoxicosis"
    ],
    answer: 2,
    exp: "Thyrotoxicosis with a diffuse goiter and bruit, orbitopathy (proptosis, lid lag), pretibial myxedema, positive TSH receptor antibodies, and diffusely increased radioiodine uptake is diagnostic of Graves disease. Options for management include antithyroid drugs (methimazole), radioactive iodine, or thyroidectomy, with beta blockade for symptom control.",
    why: [
      "A toxic multinodular goiter shows a lumpy gland with patchy (heterogeneous) uptake and does not cause orbitopathy or TSH receptor antibodies.",
      "Subacute thyroiditis causes a painful, tender thyroid with LOW radioiodine uptake following a viral illness, not high uptake with antibodies.",
      "Correct: diffuse goiter with bruit, orbitopathy, pretibial myxedema, positive TSH receptor antibody, and high diffuse uptake define Graves disease.",
      "Silent thyroiditis causes transient thyrotoxicosis with low uptake and no orbitopathy or antibodies.",
      "Factitious thyrotoxicosis from exogenous hormone suppresses thyroglobulin and shows low uptake, without a goiter, bruit, or orbitopathy."
    ]
  },
  {
    id: "s2ck-0255",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "IgA nephropathy",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 24-year-old man notices his urine turned cola-colored during a bout of the flu with sore throat and fever. He recalls a similar brief episode of visible blood in the urine a year earlier that coincided with an upper respiratory infection. He has no rash, joint pain, or edema, and his blood pressure is mildly elevated.\n\n| Test | Value | Reference |\n|---|---|---|\n| Urinalysis | 3+ blood, dysmorphic RBCs, RBC casts | negative |\n| Urine protein | 0.8 g/day | < 0.15 |\n| Serum complement C3/C4 | normal | normal |\n| Antistreptolysin O titer | not elevated | - |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Post-streptococcal glomerulonephritis",
      "Thin basement membrane nephropathy",
      "Alport syndrome",
      "IgA nephropathy",
      "Membranous nephropathy"
    ],
    answer: 3,
    exp: "Recurrent episodes of gross hematuria occurring simultaneously with (rather than weeks after) an upper respiratory infection, with dysmorphic red cells and RBC casts but normal complement, are characteristic of IgA nephropathy. The synpharyngitic timing and normal C3 distinguish it from post-streptococcal disease; management targets blood pressure and proteinuria with ACE inhibitors.",
    why: [
      "Post-streptococcal glomerulonephritis follows infection by 1-3 weeks with LOW C3 and elevated antistreptolysin O, not synpharyngitic hematuria with normal complement.",
      "Thin basement membrane nephropathy causes persistent microscopic hematuria, not recurrent episodes of gross hematuria with proteinuria and casts.",
      "Alport syndrome features hematuria with sensorineural hearing loss and a family history of kidney failure, which are absent here.",
      "Correct: recurrent synpharyngitic gross hematuria with dysmorphic RBCs, RBC casts, and normal complement defines IgA nephropathy.",
      "Membranous nephropathy presents with nephrotic-range proteinuria and edema, not episodic gross hematuria triggered by infection."
    ]
  },
  {
    id: "s2ck-0256",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Infectious mononucleosis",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 19-year-old college student has 1 week of severe fatigue, sore throat, and low-grade fevers. On exam he has tender posterior cervical lymphadenopathy, tonsillar enlargement with exudates, and a spleen tip palpable 2 cm below the costal margin. He developed a diffuse maculopapular rash after a clinician prescribed amoxicillin for presumed strep throat.\n\n| Test | Value | Reference |\n|---|---|---|\n| Heterophile (Monospot) antibody | positive | negative |\n| Peripheral smear | atypical (reactive) lymphocytes | - |\n| WBC | lymphocyte-predominant | - |\n| Rapid strep antigen | negative | negative |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Streptococcal pharyngitis",
      "Acute retroviral (HIV) syndrome",
      "Cytomegalovirus mononucleosis",
      "Acute leukemia",
      "Infectious mononucleosis"
    ],
    answer: 4,
    exp: "A young adult with fatigue, exudative pharyngitis, posterior cervical lymphadenopathy, splenomegaly, a rash after amoxicillin, atypical lymphocytes, and a positive heterophile antibody has infectious mononucleosis from Epstein-Barr virus. Management is supportive; contact sports are avoided for several weeks to prevent splenic rupture.",
    why: [
      "Strep pharyngitis causes anterior cervical nodes and a positive rapid antigen, not splenomegaly with a positive heterophile test.",
      "Acute HIV can mimic mononucleosis but is heterophile-negative and requires HIV RNA/antigen testing to diagnose.",
      "CMV mononucleosis is typically heterophile-negative and causes less prominent pharyngitis, unlike this heterophile-positive illness.",
      "Leukemia would show blasts and cytopenias on the smear, not reactive atypical lymphocytes with a positive Monospot.",
      "Correct: exudative pharyngitis, posterior adenopathy, splenomegaly, amoxicillin rash, atypical lymphocytes, and a positive heterophile define EBV mononucleosis."
    ]
  },
  {
    id: "s2ck-0257",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Rheumatoid arthritis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 44-year-old woman has 4 months of symmetric pain and swelling of the small joints of both hands and wrists, with more than an hour of morning stiffness and fatigue. On exam the metacarpophalangeal and proximal interphalangeal joints are warm and boggy, while the distal interphalangeal joints are spared. Anti-cyclic citrullinated peptide antibody and rheumatoid factor are both positive.\n\n**[IMAGE: Radiograph of both hands showing symmetric periarticular osteopenia and marginal bony erosions at the metacarpophalangeal and proximal interphalangeal joints]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Rheumatoid arthritis",
      "Osteoarthritis",
      "Psoriatic arthritis",
      "Systemic lupus erythematosus",
      "Gout"
    ],
    answer: 0,
    exp: "Symmetric inflammatory polyarthritis of the MCP and PIP joints with prolonged morning stiffness, sparing of the DIP joints, positive anti-CCP and rheumatoid factor, and marginal erosions with periarticular osteopenia is diagnostic of rheumatoid arthritis. Early disease-modifying therapy (e.g., methotrexate) prevents joint destruction.",
    why: [
      "Correct: symmetric MCP/PIP inflammatory arthritis with morning stiffness, positive anti-CCP, and marginal erosions defines rheumatoid arthritis.",
      "Osteoarthritis involves the DIP and weight-bearing joints with osteophytes and joint-space narrowing, not inflammatory MCP synovitis with erosions.",
      "Psoriatic arthritis often affects the DIP joints with dactylitis and a 'pencil-in-cup' deformity, and is usually seronegative.",
      "Lupus arthritis is typically non-erosive (Jaccoud arthropathy) and accompanied by systemic features and specific autoantibodies.",
      "Gout causes acute monoarticular attacks with punched-out erosions and overhanging edges, not a symmetric small-joint polyarthritis with anti-CCP positivity."
    ]
  },
  {
    id: "s2ck-0258",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Aneurysmal subarachnoid hemorrhage",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 52-year-old woman suddenly develops the worst headache of her life while lifting a heavy box; the pain peaked within seconds and she briefly lost consciousness. She now has severe neck stiffness, photophobia, and vomiting. Her blood pressure is elevated and she is somnolent but arousable, with no focal motor deficit.\n\n**[IMAGE: Noncontrast head CT showing hyperdense blood filling the basal cisterns and extending into the Sylvian fissures]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Migraine with aura",
      "Aneurysmal subarachnoid hemorrhage",
      "Bacterial meningitis",
      "Acute ischemic stroke",
      "Hypertensive intracerebral hemorrhage"
    ],
    answer: 1,
    exp: "A thunderclap headache that peaks within seconds, with transient loss of consciousness, meningismus, and CT showing blood in the basal cisterns, is aneurysmal subarachnoid hemorrhage. CT angiography localizes the ruptured aneurysm, which is secured by clipping or coiling; nimodipine reduces vasospasm-related ischemia.",
    why: [
      "Migraine builds over minutes to hours and does not cause blood in the basal cisterns on CT or sudden loss of consciousness.",
      "Correct: a thunderclap headache with meningismus and cisternal blood on CT defines aneurysmal subarachnoid hemorrhage.",
      "Bacterial meningitis produces fever and evolves over hours to days without acute hyperdense cisternal blood on CT.",
      "Ischemic stroke causes focal deficits from vascular occlusion and appears as hypodensity, not acute subarachnoid blood.",
      "Hypertensive hemorrhage produces a focal intraparenchymal clot (e.g., basal ganglia), not diffuse subarachnoid blood in the cisterns."
    ]
  },
  {
    id: "s2ck-0259",
    system: "Internal Medicine",
    discipline: "Hematology/Oncology",
    topic: "Hodgkin lymphoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 26-year-old man has 6 weeks of a painless, enlarging mass in his neck, along with drenching night sweats, intermittent fevers, and a 7-kg weight loss. He also reports generalized itching and notes that the neck mass becomes painful shortly after he drinks alcohol. On exam he has firm, rubbery, non-tender cervical and supraclavicular lymphadenopathy. Excisional lymph node biopsy shows large binucleate cells with prominent nucleoli.\n\n**[IMAGE: Chest radiograph showing a bulky anterior mediastinal mass widening the mediastinum]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Tuberculous lymphadenitis",
      "Sarcoidosis",
      "Hodgkin lymphoma",
      "Infectious mononucleosis",
      "Reactive lymphoid hyperplasia"
    ],
    answer: 2,
    exp: "Painless rubbery lymphadenopathy with B symptoms (fever, night sweats, weight loss), pruritus, alcohol-induced nodal pain, a mediastinal mass, and biopsy showing Reed-Sternberg cells is classic Hodgkin lymphoma. Staging guides combination chemotherapy (e.g., ABVD) with or without radiation.",
    why: [
      "Tuberculous lymphadenitis causes matted, sometimes draining nodes with caseating granulomas and positive mycobacterial studies, not Reed-Sternberg cells.",
      "Sarcoidosis causes bilateral hilar adenopathy with non-caseating granulomas, not binucleate Reed-Sternberg cells or alcohol-induced nodal pain.",
      "Correct: B symptoms, pruritus, alcohol-induced nodal pain, a mediastinal mass, and Reed-Sternberg cells define Hodgkin lymphoma.",
      "Mononucleosis causes tender lymphadenopathy in an acute febrile illness with atypical lymphocytes, not a biopsy showing Reed-Sternberg cells.",
      "Reactive hyperplasia produces small, soft, mobile nodes without B symptoms, a mediastinal mass, or malignant cells on biopsy."
    ]
  },
  {
    id: "s2ck-0260",
    system: "Surgery",
    discipline: "Orthopedic Surgery",
    topic: "Scaphoid fracture",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 20-year-old man fell onto his outstretched hand while skateboarding and now has wrist pain. On exam he has tenderness in the anatomic snuffbox at the base of the thumb, pain with axial compression of the thumb, and pain on resisted wrist extension. There is mild swelling but no deformity, and the neurovascular exam is normal.\n\n**[IMAGE: Posteroanterior wrist radiograph showing a lucent fracture line through the waist of the scaphoid]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Wrist sprain",
      "Distal radius (Colles) fracture",
      "De Quervain tenosynovitis",
      "Scaphoid fracture",
      "Carpal tunnel syndrome"
    ],
    answer: 3,
    exp: "A fall on an outstretched hand with anatomic snuffbox tenderness and pain on axial thumb loading is a scaphoid fracture until proven otherwise. Because the scaphoid's retrograde blood supply risks avascular necrosis and nonunion, a suspected fracture is immobilized in a thumb spica even if initial films are normal, with repeat imaging in 1-2 weeks.",
    why: [
      "A simple sprain does not produce focal snuffbox tenderness with a visible fracture line on radiograph.",
      "A Colles fracture causes a dorsally angulated distal radius ('dinner-fork') deformity, not an isolated scaphoid waist fracture.",
      "De Quervain tenosynovitis causes radial wrist pain with a positive Finkelstein test after repetitive use, not an acute traumatic fracture.",
      "Correct: snuffbox tenderness after a fall on an outstretched hand with a scaphoid waist fracture line defines a scaphoid fracture.",
      "Carpal tunnel syndrome causes median-nerve sensory symptoms, not acute post-traumatic snuffbox tenderness with a fracture line."
    ]
  },
  {
    id: "s2ck-0261",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Cecal volvulus",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 34-year-old woman presents with 1 day of severe, colicky right-sided abdominal pain, progressive distension, nausea, and inability to pass stool or flatus. She had a prior pregnancy but no abdominal surgeries. Her abdomen is distended and tympanitic with high-pitched bowel sounds, and there is no peritoneal sign yet.\n\n**[IMAGE: Abdominal radiograph showing a markedly dilated, 'coffee bean'-shaped gas-filled loop projecting into the left upper quadrant with distended small bowel loops]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Sigmoid volvulus",
      "Adhesive small-bowel obstruction",
      "Acute appendicitis",
      "Colonic pseudo-obstruction (Ogilvie syndrome)",
      "Cecal volvulus"
    ],
    answer: 4,
    exp: "A younger patient with acute obstruction and a dilated 'coffee bean' loop with its apex in the left upper quadrant plus distended small bowel indicates cecal volvulus, in which a mobile cecum twists on its mesentery. It causes a closed-loop obstruction; treatment is surgical (right hemicolectomy or cecopexy) because endoscopic detorsion usually fails.",
    why: [
      "Sigmoid volvulus occurs in older, constipated or institutionalized patients with a dilated loop pointing toward the RIGHT upper quadrant, and lacks small-bowel distension.",
      "Adhesive obstruction usually follows prior surgery and does not create a single coffee-bean cecal loop in the left upper quadrant.",
      "Appendicitis causes right lower quadrant pain and peritoneal signs, not a large twisted air-filled colonic loop with obstruction.",
      "Ogilvie syndrome is massive colonic dilation without a mechanical twist, typically in ill, bedbound patients, not a discrete coffee-bean loop.",
      "Correct: acute closed-loop obstruction with a coffee-bean cecal loop in the left upper quadrant and dilated small bowel defines cecal volvulus."
    ]
  },
  {
    id: "s2ck-0262",
    system: "Surgery",
    discipline: "Vascular Surgery",
    topic: "Popliteal artery aneurysm",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 70-year-old man with a known abdominal aortic aneurysm is noted to have a prominent, easily palpable pulsation behind his right knee on a routine exam. He is asymptomatic. On palpation there is a pulsatile mass in the popliteal fossa, and a similar but smaller pulsation is felt behind the left knee. His distal pulses are intact and both feet are warm and well perfused.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Popliteal artery aneurysm",
      "Baker (popliteal) cyst",
      "Deep vein thrombosis",
      "Popliteal artery entrapment syndrome",
      "Soft-tissue sarcoma"
    ],
    answer: 0,
    exp: "A pulsatile popliteal mass, especially in a man with a known aortic aneurysm and a contralateral pulsatile fossa, indicates a popliteal artery aneurysm; these are frequently bilateral and associated with aortic aneurysms. The chief danger is thromboembolism causing acute limb ischemia, so ultrasound confirmation and elective repair of significant aneurysms are indicated.",
    why: [
      "Correct: a pulsatile popliteal mass with a contralateral counterpart and a coexisting aortic aneurysm defines popliteal artery aneurysm.",
      "A Baker cyst is a non-pulsatile, fluctuant swelling of the medial popliteal fossa related to knee joint fluid.",
      "Deep vein thrombosis causes a swollen, tender calf, not a discrete pulsatile mass behind the knee.",
      "Popliteal entrapment causes exertional claudication in young athletes with pulse loss on plantarflexion, not a resting pulsatile mass.",
      "A soft-tissue sarcoma forms a firm, non-pulsatile mass and is not associated with aortic aneurysms."
    ]
  },
  {
    id: "s2ck-0263",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Pancreatic pseudocyst",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 45-year-old man with a recent episode of alcohol-induced acute pancreatitis returns 5 weeks later with persistent dull epigastric pain, early satiety, and nausea. On exam he has a vague, non-tender epigastric fullness. His serum amylase is mildly elevated, and he is hemodynamically stable and afebrile.\n\n**[IMAGE: Abdominal CT showing a well-circumscribed round fluid collection with a mature, thin wall in the lesser sac, without internal septations or solid components]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Pancreatic adenocarcinoma",
      "Pancreatic pseudocyst",
      "Infected pancreatic necrosis",
      "Splenic artery aneurysm",
      "Mucinous cystic neoplasm"
    ],
    answer: 1,
    exp: "A well-defined, encapsulated peripancreatic fluid collection appearing several weeks after acute pancreatitis, with persistent pain and a mildly elevated amylase, is a pancreatic pseudocyst (a collection walled off by granulation tissue lacking an epithelial lining). Small, asymptomatic pseudocysts are observed; large, symptomatic, or complicated ones are drained.",
    why: [
      "Pancreatic adenocarcinoma is a solid, enhancing mass causing obstructive jaundice and weight loss, not a simple fluid collection after pancreatitis.",
      "Correct: an encapsulated fluid collection arising weeks after acute pancreatitis with a mature wall is a pancreatic pseudocyst.",
      "Infected necrosis presents with fever, sepsis, and gas or heterogeneous debris, not an afebrile patient with a simple thin-walled cyst.",
      "A splenic artery aneurysm is a pulsatile vascular lesion that enhances with contrast, not a simple non-enhancing fluid collection.",
      "A mucinous cystic neoplasm is a septated cystic tumor typically in the pancreatic body/tail of women, unrelated to a recent pancreatitis episode."
    ]
  },
  {
    id: "s2ck-0264",
    system: "Pediatrics",
    discipline: "Pediatric Cardiology",
    topic: "Coarctation of the aorta",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 9-year-old boy is found to have elevated blood pressure at a school physical, along with occasional leg fatigue when running. On exam his upper-extremity blood pressure is much higher than his lower-extremity pressure, his femoral pulses are weak and delayed relative to the radial pulses, and there is a systolic murmur best heard over the left upper back. He has a webbed neck and short stature.\n\n**[IMAGE: Chest radiograph showing bilateral inferior rib notching and a '3 sign' contour of the aortic knob]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Patent ductus arteriosus",
      "Ventricular septal defect",
      "Coarctation of the aorta",
      "Essential hypertension",
      "Takayasu arteritis"
    ],
    answer: 2,
    exp: "Upper-extremity hypertension with weak, delayed femoral pulses (radio-femoral delay), an interscapular murmur, and rib notching with a '3 sign' on chest radiograph indicate coarctation of the aorta, here associated with Turner-syndrome features. Diagnosis is confirmed by echocardiography, and treatment is surgical or catheter-based repair of the narrowed segment.",
    why: [
      "A patent ductus arteriosus causes a continuous 'machinery' murmur and bounding pulses, not a blood-pressure gradient with weak femoral pulses.",
      "A ventricular septal defect causes a holosystolic murmur at the left lower sternal border without an upper-to-lower blood-pressure gradient.",
      "Correct: an arm-leg blood-pressure gradient with radio-femoral delay, an interscapular murmur, and rib notching defines coarctation of the aorta.",
      "Essential hypertension is uncommon at this age and does not cause diminished femoral pulses or rib notching.",
      "Takayasu arteritis causes pulse deficits from large-vessel inflammation but presents with systemic symptoms and is not associated with rib notching and Turner features in a child."
    ]
  },
  {
    id: "s2ck-0265",
    system: "Pediatrics",
    discipline: "Pediatric Surgery",
    topic: "Hirschsprung disease",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 3-day-old full-term boy has not passed meconium and now has progressive abdominal distension and bilious vomiting. His mother reports he was reluctant to feed. On digital rectal examination the rectal vault is tight and empty, and withdrawal of the examining finger is followed by a forceful gush of stool and gas that decompresses the abdomen.\n\n**[IMAGE: Contrast enema showing a narrow distal rectosigmoid segment with an abrupt transition to markedly dilated proximal colon]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Meconium ileus",
      "Functional constipation",
      "Imperforate anus",
      "Hirschsprung disease",
      "Necrotizing enterocolitis"
    ],
    answer: 3,
    exp: "Failure to pass meconium in the first 48 hours, distension, bilious vomiting, an empty tight rectum with an explosive gush of stool on withdrawal of the finger (squirt sign), and a transition zone on contrast enema indicate Hirschsprung disease. Absence of ganglion cells on rectal biopsy confirms it; treatment is surgical resection of the aganglionic segment.",
    why: [
      "Meconium ileus (often in cystic fibrosis) causes distal ileal obstruction with inspissated meconium, not a rectosigmoid transition zone with a squirt sign.",
      "Functional constipation does not present in the neonatal period with failure to pass meconium and a transition zone on enema.",
      "Imperforate anus is diagnosed on the newborn exam by an absent or abnormal anal opening, not by a tight rectum with explosive decompression.",
      "Correct: delayed meconium, a squirt sign, and a contrast-enema transition zone define Hirschsprung disease, confirmed by absent ganglion cells.",
      "Necrotizing enterocolitis causes bloody stools, pneumatosis intestinalis, and systemic sepsis, especially in preterm infants, not a discrete transition zone."
    ]
  },
  {
    id: "s2ck-0266",
    system: "Pediatrics",
    discipline: "Pediatric Rheumatology",
    topic: "Oligoarticular juvenile idiopathic arthritis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 3-year-old girl has had a swollen right knee for 8 weeks, with a limp that is worst in the morning and improves as the day goes on. She has had no fever, no rash, and no preceding trauma or illness. On exam the knee is swollen, warm, and mildly limited in flexion but is not exquisitely tender, and she remains active and well-appearing. Inflammatory markers are only mildly elevated.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Septic arthritis",
      "Acute rheumatic fever",
      "Reactive arthritis",
      "Acute lymphoblastic leukemia",
      "Oligoarticular juvenile idiopathic arthritis"
    ],
    answer: 4,
    exp: "Chronic (more than 6 weeks) arthritis of a large joint with morning stiffness in a well-appearing young child, without fever or a septic-appearing joint, is oligoarticular juvenile idiopathic arthritis. Because these children (often ANA-positive) are at risk for asymptomatic chronic uveitis, regular slit-lamp screening is essential alongside NSAIDs and intra-articular steroids.",
    why: [
      "Septic arthritis causes an acutely painful, hot joint with fever and refusal to bear weight over days, not 8 weeks of a well-tolerated swollen knee.",
      "Acute rheumatic fever causes a migratory polyarthritis after streptococcal infection with carditis, not a single chronically swollen knee.",
      "Reactive arthritis follows a gastrointestinal or genitourinary infection and is uncommon in a toddler with an isolated chronic knee effusion.",
      "Leukemia can cause bone pain and cytopenias with systemic illness, not an isolated chronically swollen knee in a well child.",
      "Correct: chronic (>6 weeks) large-joint arthritis with morning stiffness in a well child defines oligoarticular JIA, which mandates uveitis screening."
    ]
  },
  {
    id: "s2ck-0267",
    system: "Pediatrics",
    discipline: "Pediatric Toxicology",
    topic: "Lead poisoning",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 2-year-old boy who lives in a house built in the 1940s is brought in for irritability, poor appetite, intermittent abdominal pain, and constipation. His parents note he often puts paint chips and dirt in his mouth. He has been more clumsy and less verbal than a few months ago. He appears pale.\n\n| Test | Value | Reference |\n|---|---|---|\n| Venous blood lead level | 48 ug/dL | < 3.5 |\n| Hemoglobin | 9.6 g/dL | 11.0-14.0 |\n| Mean corpuscular volume | low (microcytic) | normal |\n| Peripheral smear | basophilic stippling | none |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Lead poisoning",
      "Iron deficiency anemia",
      "Sideroblastic anemia",
      "Beta-thalassemia minor",
      "Anemia of chronic disease"
    ],
    answer: 0,
    exp: "A toddler with pica in an old home, developmental regression, abdominal pain and constipation, microcytic anemia with basophilic stippling, and a markedly elevated blood lead level has lead poisoning. Management includes removing the exposure source and chelation therapy for high levels, with developmental follow-up.",
    why: [
      "Correct: pica in an old house, neurodevelopmental regression, microcytic anemia with basophilic stippling, and a high blood lead level define lead poisoning.",
      "Iron deficiency causes microcytic anemia but not basophilic stippling, an elevated blood lead level, or neurodevelopmental regression with pica for paint.",
      "Sideroblastic anemia is rare in toddlers and does not present with pica and an elevated lead level.",
      "Beta-thalassemia minor causes mild microcytosis without symptoms, basophilic stippling from lead, or an elevated blood lead level.",
      "Anemia of chronic disease occurs with chronic inflammation and is usually normocytic, without pica or an elevated lead level."
    ]
  },
  {
    id: "s2ck-0268",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "HELLP syndrome",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 33-year-old woman at 35 weeks gestation presents with 2 days of right upper quadrant and epigastric pain, nausea, and malaise. Her blood pressure is 158/104 mm Hg. She has mild right upper quadrant tenderness. There is no vaginal bleeding.\n\n| Test | Value | Reference |\n|---|---|---|\n| Platelets | 78 x10^9/L | 150-400 |\n| AST / ALT | markedly elevated | normal |\n| Lactate dehydrogenase | elevated | normal |\n| Peripheral smear | schistocytes | none |\n| Haptoglobin | low | normal |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Acute fatty liver of pregnancy",
      "HELLP syndrome",
      "Thrombotic thrombocytopenic purpura",
      "Gestational thrombocytopenia",
      "Immune thrombocytopenia"
    ],
    answer: 1,
    exp: "Right upper quadrant pain with hypertension, microangiopathic hemolysis (schistocytes, high LDH, low haptoglobin), elevated transaminases, and low platelets in the third trimester defines HELLP syndrome, a severe variant of preeclampsia. Management is maternal stabilization, magnesium for seizure prophylaxis, and delivery.",
    why: [
      "Acute fatty liver of pregnancy causes profound hepatic failure with hypoglycemia, coagulopathy, and encephalopathy rather than isolated hemolysis with low platelets.",
      "Correct: hemolysis, elevated liver enzymes, and low platelets with hypertension and RUQ pain in the third trimester define HELLP syndrome.",
      "TTP presents with the pentad of fever, neurologic changes, and renal failure without the hypertension and marked transaminase elevation of HELLP.",
      "Gestational thrombocytopenia is mild, asymptomatic, and lacks hemolysis, elevated liver enzymes, and hypertension.",
      "Immune thrombocytopenia causes isolated low platelets without hemolysis, elevated transaminases, or hypertension."
    ]
  },
  {
    id: "s2ck-0269",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Lactational mastitis",
    difficulty: "easy",
    anchor: null,
    vignette: "A 28-year-old woman who is 3 weeks postpartum and breastfeeding presents with 2 days of a painful, red area on her right breast along with fever, chills, and body aches. On exam there is a wedge-shaped area of erythema, warmth, and tenderness in the upper outer quadrant of the right breast; there is no fluctuant mass or point of drainage. She is otherwise well.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Stop breastfeeding on both sides until the infection resolves",
      "Perform incision and drainage",
      "Continue breastfeeding and start oral dicloxacillin",
      "Obtain urgent mammography and biopsy",
      "Reassurance with warm compresses only"
    ],
    answer: 2,
    exp: "A wedge-shaped area of breast erythema, warmth, and tenderness with fever in a breastfeeding woman, without a fluctuant mass, is lactational mastitis, usually from Staphylococcus aureus. Treatment is continued breastfeeding or milk expression to promote drainage plus an antistaphylococcal antibiotic such as dicloxacillin.",
    why: [
      "Stopping breastfeeding promotes milk stasis and worsens mastitis; continued emptying of the breast is therapeutic.",
      "Incision and drainage is for a fluctuant abscess, which is not present in this non-fluctuant cellulitic mastitis.",
      "Correct: continued breastfeeding plus an antistaphylococcal antibiotic (dicloxacillin) treats lactational mastitis.",
      "Mammography and biopsy are unnecessary for classic postpartum mastitis; imaging is reserved for a suspected abscess or non-resolving inflammatory findings.",
      "Warm compresses alone are inadequate once there is fever and spreading cellulitis, which require antibiotics."
    ]
  },
  {
    id: "s2ck-0270",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Secondary amenorrhea evaluation",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 27-year-old woman who previously had regular monthly menstrual cycles has not had a period for 3 months. She is sexually active and uses condoms inconsistently. She reports mild breast tenderness and occasional nausea but denies galactorrhea, hot flashes, headaches, or visual changes, and she is not taking any new medications. Her exam is unremarkable.",
    lead: "Which of the following is the most appropriate next step in evaluation?",
    options: [
      "Measure serum prolactin",
      "Measure follicle-stimulating hormone and estradiol",
      "Perform a progestin withdrawal challenge",
      "Obtain a urine or serum beta-hCG",
      "Order a pelvic ultrasound"
    ],
    answer: 3,
    exp: "Pregnancy is by far the most common cause of secondary amenorrhea, so the first step in any woman of reproductive age with new amenorrhea is a pregnancy test. This patient's inconsistent contraception, breast tenderness, and nausea further raise the pretest probability, and a beta-hCG must be obtained before other endocrine testing.",
    why: [
      "Prolactin is checked after pregnancy is excluded and typically when galactorrhea or headaches suggest a prolactinoma, which are absent here.",
      "FSH and estradiol help evaluate ovarian failure but come only after a negative pregnancy test.",
      "A progestin withdrawal challenge assesses the estrogen/outflow tract after pregnancy has been ruled out, not as the first test.",
      "Correct: pregnancy is the most common cause of secondary amenorrhea, so a beta-hCG is the first step.",
      "Pelvic ultrasound may follow later but is not the initial test before excluding pregnancy."
    ]
  },
  {
    id: "s2ck-0271",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Bartholin gland abscess",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 31-year-old woman presents with 3 days of a painful, enlarging swelling near the vaginal opening that makes sitting and walking uncomfortable. On exam there is a tender, fluctuant, unilateral mass at the posterior aspect of the right labium majus near the 8 o'clock position of the vaginal introitus, with overlying erythema. She is afebrile and otherwise well.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Oral antibiotics alone",
      "Warm sitz baths and observation only",
      "Wide local excision of the vulva",
      "Topical estrogen cream",
      "Incision and drainage with Word catheter placement"
    ],
    answer: 4,
    exp: "A tender, fluctuant mass at the posterolateral introitus (4 or 8 o'clock) is a Bartholin gland abscess from obstruction of the duct. The treatment is incision and drainage, and placement of a Word catheter to keep the tract open promotes epithelialization of a fistulous tract and reduces recurrence.",
    why: [
      "Antibiotics alone do not drain a walled-off fluctuant abscess, which requires a drainage procedure.",
      "Sitz baths help small, non-fluctuant Bartholin cysts but are insufficient for a painful fluctuant abscess.",
      "Wide vulvar excision is overly aggressive for a simple abscess and is not indicated.",
      "Topical estrogen treats atrophic vaginitis, not a Bartholin gland abscess.",
      "Correct: a fluctuant Bartholin abscess is managed by incision and drainage with Word catheter placement to prevent recurrence."
    ]
  },
  {
    id: "s2ck-0272",
    system: "Psychiatry",
    discipline: "Addiction Psychiatry",
    topic: "Opioid overdose",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 24-year-old man is found unresponsive on a bathroom floor by his roommate and brought in by paramedics. On arrival he is minimally responsive with shallow breathing at a rate of 6 breaths per minute, oxygen saturation of 82%, and pinpoint pupils. There are fresh needle track marks on his forearms. His blood pressure is maintained.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Administer naloxone and support ventilation",
      "Administer intravenous flumazenil",
      "Give oral activated charcoal",
      "Start oral naltrexone",
      "Observe without pharmacologic intervention"
    ],
    answer: 0,
    exp: "Depressed consciousness, respiratory depression, and pinpoint pupils with needle marks indicate an opioid overdose. The immediate priority is airway and ventilatory support plus naloxone, an opioid antagonist that rapidly reverses respiratory depression; repeat dosing may be needed because naloxone is shorter-acting than many opioids.",
    why: [
      "Correct: opioid overdose with respiratory depression and miosis is treated with naloxone plus ventilatory support.",
      "Flumazenil reverses benzodiazepines, not opioids, and can precipitate seizures; it does not address opioid-induced respiratory depression.",
      "Activated charcoal is not useful for an obtunded patient with an injected opioid overdose and risks aspiration.",
      "Naltrexone is a maintenance medication for opioid use disorder, not an acute reversal agent for overdose.",
      "Observation alone risks fatal respiratory arrest when an effective antidote is available."
    ]
  },
  {
    id: "s2ck-0273",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Illness anxiety disorder",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 38-year-old woman is seen for the fifth time this year, convinced she has cancer despite repeated normal examinations and negative workups. She has essentially no physical symptoms but spends hours each day researching diseases, repeatedly checking her body for lumps, and seeking reassurance from multiple physicians. Her preoccupation has persisted for more than a year and interferes with her work and relationships. Prior evaluations, including imaging, have been unremarkable.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Somatic symptom disorder",
      "Illness anxiety disorder",
      "Generalized anxiety disorder",
      "Obsessive-compulsive disorder",
      "Factitious disorder"
    ],
    answer: 1,
    exp: "Persistent (more than 6 months) preoccupation with having a serious illness, with minimal or no somatic symptoms, high health anxiety, and excessive checking or reassurance-seeking despite negative evaluations, is illness anxiety disorder. The near-absence of actual physical symptoms distinguishes it from somatic symptom disorder; treatment includes a consistent primary provider, scheduled visits, and cognitive-behavioral therapy.",
    why: [
      "Somatic symptom disorder features one or more distressing physical symptoms with disproportionate thoughts, whereas this patient has essentially no somatic symptoms.",
      "Correct: preoccupation with having a serious illness with minimal somatic symptoms and excessive checking defines illness anxiety disorder.",
      "Generalized anxiety disorder involves excessive worry across many domains, not a focused, persistent fear of a specific serious disease.",
      "Obsessive-compulsive disorder involves intrusive obsessions and compulsions across varied themes, not a singular fixed conviction of being ill.",
      "Factitious disorder involves deliberately feigning or inducing illness to assume the sick role, not genuine anxiety about being sick."
    ]
  },
  {
    id: "s2ck-0274",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Prostate cancer screening (shared decision-making)",
    difficulty: "easy",
    anchor: null,
    vignette: "A 55-year-old asymptomatic man with no family history of prostate cancer asks his physician whether he should be screened for prostate cancer. He has read conflicting information and wants guidance. He has no urinary symptoms, and his overall health is good with a long life expectancy.",
    lead: "Which of the following is the most appropriate approach?",
    options: [
      "Order a prostate-specific antigen test and refer for biopsy now",
      "Tell him prostate cancer screening is never beneficial and decline to discuss it",
      "Engage in shared decision-making about the benefits and harms of PSA testing",
      "Rely on an annual digital rectal exam as the sole screening method",
      "Defer any discussion of screening until after age 75"
    ],
    answer: 2,
    exp: "For men aged 55-69, prostate-specific antigen screening is a shared decision: the physician should discuss the modest potential mortality benefit against the harms of false positives, overdiagnosis, and overtreatment, then align the decision with the patient's values. Routine screening is not recommended after age 70.",
    why: [
      "Ordering PSA and referring for biopsy without a discussion imposes testing and its downstream harms without the patient's informed preference.",
      "Refusing to discuss screening withholds a guideline-endorsed shared decision the patient is specifically requesting.",
      "Correct: for men 55-69, PSA screening should be an individualized, shared decision weighing benefits against harms.",
      "A digital rectal exam alone is not a validated stand-alone screening strategy for prostate cancer.",
      "Deferring the discussion ignores that this age group is exactly where shared decision-making about screening applies."
    ]
  },
  {
    id: "s2ck-0275",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Reporting an impaired colleague",
    difficulty: "moderate",
    anchor: null,
    vignette: "A resident notices on several occasions that a senior colleague smells of alcohol, has slurred speech, and appears unsteady just before seeing patients. On one occasion the colleague nearly ordered a tenfold medication overdose that a nurse caught. The colleague brushes off concerns and insists everything is fine, but the pattern continues and patient safety appears to be at risk.",
    lead: "Which of the following is the most appropriate action?",
    options: [
      "Ignore the behavior because you are not completely certain",
      "Privately confront the colleague and take no further action",
      "Wait until a patient is actually harmed before acting",
      "Report the colleague to a supervisor or physician health program",
      "Post anonymous concerns about the colleague on social media"
    ],
    answer: 3,
    exp: "Physicians have an ethical duty to protect patients from an impaired colleague. When there is credible evidence of impairment that threatens patient safety, the appropriate action is to report the colleague to the supervisor, department chair, or physician health program so the individual can be evaluated and patients protected, while also supporting the colleague toward treatment.",
    why: [
      "Ignoring credible signs of impairment abdicates the duty to protect patients from foreseeable harm.",
      "A private conversation alone is insufficient when a dangerous pattern persists and safety remains at risk.",
      "Waiting for actual patient harm is unethical when the physician can act to prevent it.",
      "Correct: credible impairment threatening patient safety must be reported to a supervisor or physician health program.",
      "Public social-media posting is unprofessional, breaches confidentiality, and does not lead to proper evaluation or treatment."
    ]
  }
];
