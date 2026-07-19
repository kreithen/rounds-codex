/*
 * Rounds Codex - USMLE Step 2 CK question bank, Batch 5 (25 items)
 * Blueprint-weighted, Medicine-heavy clinical mix. All vignettes original;
 * source used for facts only. Step 2 CK items are clinical: each ends in a
 * decision about diagnosis, next best step, pharmacotherapy, or prevention.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP2CK_B5 = [
  {
    id: "s2ck-0101",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Severe symptomatic aortic stenosis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 72-year-old man reports several months of exertional dyspnea, chest tightness on exertion, and one episode of near-syncope while climbing stairs. He has a harsh crescendo-decrescendo systolic murmur at the right upper sternal border radiating to the carotids, a delayed and diminished carotid upstroke, and a soft single second heart sound.\n\n**[IMAGE: transthoracic echocardiogram showing a heavily calcified aortic valve with a peak velocity of 4.6 m/s, mean gradient 52 mm Hg, and valve area 0.8 cm2]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Refer for aortic valve replacement (surgical or transcatheter)",
      "Long-term afterload reduction with high-dose nifedipine",
      "Reassurance and routine follow-up in one year",
      "Start a beta-blocker to soften the murmur",
      "Begin an ACE inhibitor and diuretic and avoid intervention"
    ],
    answer: 0,
    exp: "Severe aortic stenosis that has become symptomatic (angina, syncope, or heart failure) carries a poor prognosis, with roughly 50% mortality within 2 years without intervention. The definitive treatment is aortic valve replacement, either surgical or transcatheter depending on surgical risk. Vasodilators are dangerous because cardiac output is fixed by the stenotic valve, and no medical therapy improves survival.",
    why: [
      "Correct: symptomatic severe aortic stenosis is treated with aortic valve replacement, which is the only therapy that improves survival.",
      "Vasodilators reduce preload and afterload dangerously in a fixed-obstruction lesion and can cause hemodynamic collapse.",
      "Symptomatic severe aortic stenosis has high short-term mortality and cannot be safely observed for a year.",
      "A beta-blocker does not relieve the mechanical obstruction and may worsen forward output in a symptomatic patient.",
      "Medical therapy alone does not improve survival once severe aortic stenosis is symptomatic."
    ]
  },
  {
    id: "s2ck-0102",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Pheochromocytoma",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 44-year-old woman has recurrent paroxysms of pounding headache, palpitations, and drenching diaphoresis. During an episode her blood pressure is 214/122 mm Hg. Between spells she is normotensive. Imaging obtained for another reason showed a 4-cm right adrenal mass.\n\n| Test | Value | Reference |\n|---|---|---|\n| Plasma free metanephrines | markedly elevated | normal |\n| 24-hour urinary metanephrines | markedly elevated | normal |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate adrenalectomy without medical preparation",
      "Alpha-adrenergic blockade first, then beta-blockade, followed by surgical resection",
      "Start a beta-blocker alone for symptom control",
      "Begin an ACE inhibitor as definitive therapy",
      "Observation with repeat imaging in one year"
    ],
    answer: 1,
    exp: "Episodic headache, palpitations, and diaphoresis with paroxysmal hypertension and elevated metanephrines indicate a catecholamine-secreting pheochromocytoma. Management requires preoperative alpha-adrenergic blockade (for example phenoxybenzamine) to control blood pressure and expand volume, followed by beta-blockade for heart rate, and only then surgical resection. Giving a beta-blocker first leaves alpha-mediated vasoconstriction unopposed and can precipitate a hypertensive crisis.",
    why: [
      "Operating without alpha blockade and volume expansion risks a catastrophic intraoperative hypertensive crisis.",
      "Correct: alpha blockade first, then beta blockade, then resection is the sequence that prevents catecholamine crisis.",
      "A beta-blocker alone leaves alpha-mediated vasoconstriction unopposed and can trigger a hypertensive emergency.",
      "An ACE inhibitor does not adequately control catecholamine surges and is not definitive for a functional tumor.",
      "A functional catecholamine-secreting tumor requires resection, not observation."
    ]
  },
  {
    id: "s2ck-0103",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Acute severe ulcerative colitis flare",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 28-year-old man with known ulcerative colitis has 6 days of bloody diarrhea occurring more than 8 times daily with fever and crampy abdominal pain. He is tachycardic with diffuse abdominal tenderness but no peritoneal signs. Stool studies for enteric pathogens and Clostridioides difficile are negative.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 9.8 g/dL | 13.5-17.5 |\n| C-reactive protein | 88 mg/L | < 5 |\n| Erythrocyte sedimentation rate | 52 mm/hr | 0-15 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Oral mesalamine and outpatient follow-up",
      "Loperamide to reduce stool frequency",
      "Admit for intravenous corticosteroids with venous thromboembolism prophylaxis and close monitoring",
      "Proceed directly to total colectomy",
      "Empiric antifungal therapy"
    ],
    answer: 2,
    exp: "More than 6 bloody stools daily with fever, tachycardia, anemia, and elevated inflammatory markers meets criteria for acute severe ulcerative colitis. These patients require hospitalization for intravenous corticosteroids, thromboprophylaxis, and monitoring for toxic megacolon, with rescue therapy (infliximab or ciclosporin) if there is no response by day 3. Colectomy is reserved for failure of medical therapy, perforation, or toxic megacolon.",
    why: [
      "Oral mesalamine is inadequate for a severe flare requiring hospitalization and intravenous therapy.",
      "Antimotility agents such as loperamide can precipitate toxic megacolon and are contraindicated.",
      "Correct: acute severe ulcerative colitis warrants admission for intravenous corticosteroids, thromboprophylaxis, and monitoring.",
      "Colectomy is reserved for medically refractory disease, perforation, or toxic megacolon, not as the initial step.",
      "There is no indication for antifungal therapy in an ulcerative colitis flare."
    ]
  },
  {
    id: "s2ck-0104",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Acute pyelonephritis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 34-year-old woman has 2 days of fever, right flank pain, dysuria, and nausea. Temperature is 38.7 C. She has marked right costovertebral angle tenderness but is hemodynamically stable and tolerating oral fluids. She is not pregnant and has no history of stones or urinary tract obstruction.\n\n| Test | Value | Reference |\n|---|---|---|\n| Urine leukocyte esterase | positive | negative |\n| Urine nitrite | positive | negative |\n| Urine microscopy | pyuria with white-cell casts | none |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Phenazopyridine alone for symptom relief",
      "Reassurance and increased oral fluid intake only",
      "Withhold antibiotics until the urine culture returns in 48 hours",
      "Send a urine culture and start empiric oral antibiotics as outpatient therapy",
      "Immediate percutaneous nephrostomy"
    ],
    answer: 3,
    exp: "Fever, flank pain, costovertebral angle tenderness, and pyuria with white-cell casts indicate acute pyelonephritis. A stable, non-pregnant patient who can tolerate oral intake can be treated as an outpatient with a urine culture obtained and empiric oral antibiotics (such as a fluoroquinolone, guided by local resistance). Admission, imaging, and decompression are reserved for sepsis, obstruction, or failure to improve.",
    why: [
      "Phenazopyridine only masks symptoms and does not treat the infection.",
      "Untreated pyelonephritis can progress to sepsis or renal abscess.",
      "Delaying antibiotics in clear-cut pyelonephritis is unsafe; empiric therapy should begin promptly.",
      "Correct: obtain a urine culture and start empiric outpatient oral antibiotics in this stable patient.",
      "Nephrostomy is reserved for an obstructed, infected collecting system, which is not present here."
    ]
  },
  {
    id: "s2ck-0105",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Complicated parapneumonic effusion",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 60-year-old man treated for community-acquired pneumonia over the past week returns with persistent fever, worsening pleuritic left-sided chest pain, and increasing breathlessness. There is dullness to percussion and decreased breath sounds over the left base. He is completing his oral antibiotic course.\n\n**[IMAGE: chest radiograph showing a moderate left pleural effusion with a layering, partly loculated appearance]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Continue the current antibiotics alone",
      "Add a loop diuretic to reduce the effusion",
      "Repeat the chest radiograph in one week",
      "Proceed directly to thoracotomy",
      "Perform diagnostic and therapeutic thoracentesis to sample and drain the pleural fluid"
    ],
    answer: 4,
    exp: "A pleural effusion that develops or persists during treatment of pneumonia must be sampled by thoracentesis to distinguish an uncomplicated effusion from a complicated effusion or empyema. Fluid with a low pH, low glucose, positive Gram stain, or frank pus requires tube thoracostomy drainage, sometimes with intrapleural fibrinolytics or video-assisted thoracoscopic surgery. Antibiotics alone will not clear an infected, loculated collection.",
    why: [
      "Antibiotics alone do not clear a complicated or loculated parapneumonic effusion.",
      "The effusion is inflammatory/infectious, not a volume-overload transudate, so diuretics are inappropriate.",
      "Delaying evaluation risks progression to organized empyema.",
      "Surgery is not the first step before the fluid has been sampled and characterized.",
      "Correct: thoracentesis samples and drains the fluid and guides whether chest-tube drainage is needed."
    ]
  },
  {
    id: "s2ck-0106",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Septic arthritis",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 55-year-old man presents with 2 days of a hot, swollen, exquisitely painful right knee and is unable to bear weight. Temperature is 38.6 C. The joint is warm, erythematous, and effused with markedly limited range of motion. Arthrocentesis is performed.\n\n| Synovial fluid | Value |\n|---|---|\n| White-cell count | 82,000/uL (90% neutrophils) |\n| Crystals | none seen |\n| Gram stain | gram-positive cocci in clusters |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Joint drainage plus empiric intravenous antibiotics",
      "Oral NSAIDs alone",
      "Intra-articular corticosteroid injection",
      "Oral colchicine",
      "Reassurance and outpatient follow-up"
    ],
    answer: 0,
    exp: "A hot, swollen joint with synovial fluid showing a very high neutrophil-predominant white-cell count, no crystals, and gram-positive cocci is bacterial septic arthritis, most often Staphylococcus aureus. Treatment is urgent joint drainage (repeated aspiration, arthroscopic, or open washout) together with empiric intravenous antibiotics, because retained purulent fluid rapidly destroys cartilage. Delay leads to irreversible joint damage.",
    why: [
      "Correct: septic arthritis requires prompt joint drainage plus empiric intravenous antibiotics to prevent joint destruction.",
      "NSAIDs treat pain but do not eradicate a joint-space infection.",
      "Intra-articular steroids would worsen an established infection.",
      "Colchicine treats crystal arthritis, but no crystals are present and the fluid shows bacteria.",
      "Observation allows the infection to destroy the joint."
    ]
  },
  {
    id: "s2ck-0107",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Heparin-induced thrombocytopenia",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 68-year-old woman receiving unfractionated heparin after orthopedic surgery is noted on postoperative day 6 to have a falling platelet count and new swelling of the right leg. Duplex ultrasound confirms a deep vein thrombosis. She has no bleeding. Her clinical probability (4T) score is high.\n\n| Platelet count | Day |\n|---|---|\n| 245,000/uL | admission |\n| 210,000/uL | day 3 |\n| 96,000/uL | day 6 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Continue heparin and transfuse platelets",
      "Stop all heparin products and start a non-heparin anticoagulant such as argatroban",
      "Switch to low-molecular-weight heparin",
      "Start warfarin as monotherapy immediately",
      "Observe without changes to anticoagulation"
    ],
    answer: 1,
    exp: "A platelet drop of more than 50% beginning around day 5 to 10 of heparin exposure with new thrombosis and a high 4T score indicates heparin-induced thrombocytopenia, an immune, prothrombotic reaction. Management is to stop all heparin (including low-molecular-weight heparin and line flushes) and start a non-heparin anticoagulant such as argatroban or fondaparinux. Platelet transfusion and starting warfarin alone are avoided, as warfarin before platelet recovery can cause venous limb gangrene.",
    why: [
      "Continuing heparin and giving platelets worsens the prothrombotic state and is contraindicated.",
      "Correct: stop all heparin and anticoagulate with a non-heparin agent such as argatroban.",
      "Low-molecular-weight heparin cross-reacts with the antibodies and does not resolve the process.",
      "Starting warfarin alone before platelet recovery risks venous limb gangrene.",
      "HIT is prothrombotic and requires alternative anticoagulation, not observation."
    ]
  },
  {
    id: "s2ck-0108",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Rhabdomyolysis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 40-year-old man is found on the floor after a prolonged period of immobility following heavy alcohol use. He reports diffuse muscle pain and has passed dark, tea-colored urine. His muscles are tender and swollen. The urine dipstick is strongly positive for blood, but microscopy shows very few red cells.\n\n| Test | Value | Reference |\n|---|---|---|\n| Creatine kinase | 42,000 U/L | 30-200 |\n| Potassium | 6.1 mEq/L | 3.5-5.0 |\n| Creatinine | 2.3 mg/dL | 0.6-1.2 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Loop diuretic to force diuresis",
      "Restrict intravenous fluids to avoid overload",
      "Aggressive isotonic intravenous fluid resuscitation with monitoring of potassium and renal function",
      "Immediate hemodialysis for all patients",
      "Oral potassium supplementation"
    ],
    answer: 2,
    exp: "A markedly elevated creatine kinase with a dipstick positive for blood but few red cells (myoglobinuria) and hyperkalemia with rising creatinine indicates rhabdomyolysis with pigment-induced acute kidney injury. The cornerstone of treatment is aggressive isotonic crystalloid to maintain urine output and limit myoglobin nephrotoxicity, together with treatment and monitoring of hyperkalemia. Dialysis is reserved for refractory hyperkalemia or severe kidney injury.",
    why: [
      "Diuretics are not first-line; volume repletion is the priority in rhabdomyolysis.",
      "Fluid restriction worsens pigment nephropathy and acute kidney injury.",
      "Correct: aggressive isotonic fluids with electrolyte and renal monitoring is the mainstay of rhabdomyolysis care.",
      "Dialysis is reserved for refractory hyperkalemia or severe renal failure, not routine cases.",
      "The patient is already hyperkalemic, so giving potassium is dangerous."
    ]
  },
  {
    id: "s2ck-0109",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Transient ischemic attack",
    difficulty: "easy",
    anchor: null,
    vignette: "A 68-year-old man with hypertension and a 40-pack-year smoking history had a 20-minute episode of right arm weakness and slurred speech that resolved completely. He now has a completely normal neurologic examination. The episode occurred 3 hours ago and has not recurred.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Reassure the patient that no workup is needed",
      "Start empiric warfarin",
      "Schedule an outpatient MRI in two months",
      "Urgent evaluation with brain imaging, carotid imaging, and ECG, plus antiplatelet therapy and risk-factor modification",
      "Administer intravenous thrombolytics now"
    ],
    answer: 3,
    exp: "A transient focal neurologic deficit that fully resolves is a transient ischemic attack and confers a high short-term risk of stroke. Management is urgent evaluation with neuroimaging, carotid imaging, and an ECG (to detect atrial fibrillation), plus antiplatelet therapy and aggressive risk-factor control; carotid revascularization is offered for significant symptomatic stenosis. Anticoagulation is reserved for a cardioembolic source.",
    why: [
      "A TIA carries a high near-term stroke risk and requires urgent evaluation, not reassurance.",
      "Anticoagulation is indicated only for a cardioembolic source such as atrial fibrillation, not empirically.",
      "A two-month delay squanders the window to prevent an early stroke.",
      "Correct: urgent imaging and cardiac evaluation with antiplatelet therapy and risk-factor control is the appropriate approach.",
      "Thrombolytics are not given once the deficit has resolved and there is no acute infarct to treat."
    ]
  },
  {
    id: "s2ck-0110",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Acute ascending cholangitis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 66-year-old woman presents with right upper quadrant pain, fever with rigors, and jaundice. She is now confused with a blood pressure of 88/54 mm Hg and heart rate of 122/min. Ultrasound shows a dilated common bile duct with an obstructing stone.\n\n| Test | Value | Reference |\n|---|---|---|\n| Total bilirubin | 6.8 mg/dL | 0.2-1.2 |\n| Alkaline phosphatase | 410 U/L | 40-130 |\n| White-cell count | 19,800/uL | 4,500-11,000 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Oral antibiotics and outpatient follow-up",
      "Elective cholecystectomy in six weeks with no acute intervention",
      "Observation with serial examinations only",
      "Immediate open common bile duct exploration as the first intervention",
      "Intravenous fluids and antibiotics with urgent biliary decompression by ERCP"
    ],
    answer: 4,
    exp: "Right upper quadrant pain, fever, and jaundice (Charcot triad) plus hypotension and confusion (Reynolds pentad) with a dilated, obstructed bile duct indicate suppurative ascending cholangitis. Management is resuscitation with intravenous fluids and antibiotics and urgent biliary drainage, most often by ERCP with sphincterotomy and stone extraction; interval cholecystectomy follows once the patient recovers. Delayed decompression is frequently fatal.",
    why: [
      "This septic patient cannot be managed with oral antibiotics as an outpatient.",
      "Deferring all intervention while the biliary tree remains obstructed is dangerous in a septic patient.",
      "Observation alone allows progression of biliary sepsis and death.",
      "ERCP, not open exploration, is the preferred first-line decompression for cholangitis.",
      "Correct: resuscitate with fluids and antibiotics and urgently decompress the biliary tree, typically by ERCP."
    ]
  },
  {
    id: "s2ck-0111",
    system: "Surgery",
    discipline: "Vascular Surgery",
    topic: "Symptomatic carotid artery stenosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 70-year-old man had a transient episode of left-sided arm and face weakness that resolved within an hour. He has hypertension and hyperlipidemia, and a right carotid bruit is audible. His neurologic examination is now normal.\n\n**[IMAGE: carotid duplex ultrasound demonstrating 80% stenosis of the right internal carotid artery with elevated peak systolic velocity]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Carotid endarterectomy together with antiplatelet and statin therapy",
      "Anticoagulation with warfarin alone",
      "Observation without medical or surgical therapy",
      "Bilateral carotid artery ligation",
      "Empiric antibiotic therapy"
    ],
    answer: 0,
    exp: "A recent hemispheric transient ischemic attack with an ipsilateral high-grade (70-99%) internal carotid stenosis is symptomatic carotid disease. Carotid endarterectomy performed within about 2 weeks substantially reduces the risk of subsequent stroke and is combined with best medical therapy: antiplatelet agents, a statin, and blood-pressure control. Revascularization plus medical therapy is superior to medical therapy alone in this setting.",
    why: [
      "Correct: symptomatic high-grade carotid stenosis is treated with carotid endarterectomy plus antiplatelet and statin therapy.",
      "Anticoagulation is not superior to endarterectomy plus antiplatelet therapy for atherosclerotic carotid stenosis.",
      "Symptomatic severe stenosis warrants intervention, not observation.",
      "Carotid ligation is not a treatment for stenosis and would cause ischemia.",
      "There is no infection; antibiotics have no role."
    ]
  },
  {
    id: "s2ck-0112",
    system: "Surgery",
    discipline: "Surgical Oncology",
    topic: "Palpable breast mass evaluation",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 48-year-old woman presents with a firm, nontender lump in the upper outer quadrant of the right breast that she noticed 3 weeks ago. On examination the mass is irregular, hard, and feels fixed to underlying tissue. She has never had breast imaging.\n\n**[IMAGE: diagnostic mammogram showing a spiculated mass with associated pleomorphic microcalcifications]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Reassurance with re-examination in one year",
      "Diagnostic mammography and ultrasound followed by core-needle biopsy",
      "Immediate mastectomy",
      "A course of antibiotics for a presumed abscess",
      "Repeat examination after the next menstrual cycle only"
    ],
    answer: 1,
    exp: "A discrete, firm, fixed, irregular breast mass in a woman of this age requires triple assessment: clinical examination, imaging (diagnostic mammography with ultrasound), and tissue diagnosis by core-needle biopsy. Suspicious imaging features such as a spiculated mass with microcalcifications mandate biopsy regardless of appearance. Definitive surgery is planned only after a tissue diagnosis is established.",
    why: [
      "A suspicious fixed mass requires prompt workup, not deferred reassurance.",
      "Correct: triple assessment with imaging and core-needle biopsy establishes the diagnosis of a suspicious breast mass.",
      "Surgery should not precede a tissue diagnosis that guides the operative plan.",
      "The presentation is not that of an abscess, and antibiotics would delay diagnosis.",
      "Deferring evaluation of a suspicious fixed mass to another cycle is inappropriate."
    ]
  },
  {
    id: "s2ck-0113",
    system: "Surgery",
    discipline: "Orthopedic Surgery",
    topic: "Acute compartment syndrome",
    difficulty: "hard",
    anchor: null,
    vignette: "A 22-year-old man is placed in a cast after a closed tibial shaft fracture. Six hours later he has severe, escalating pain that is out of proportion to the injury and is not relieved by opioids. Pain is markedly worsened by passive stretch of the toes, the leg compartment is tense, and he reports new paresthesias. Distal pulses are palpable.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Elevate the limb, give more analgesia, and reassess in the morning",
      "Tighten the cast to provide more support",
      "Remove the cast and perform emergent fasciotomy",
      "Apply ice and a compression wrap",
      "Order an MRI before any intervention"
    ],
    answer: 2,
    exp: "Pain out of proportion to injury, pain on passive stretch, a tense compartment, and paresthesias after a fracture and casting indicate acute compartment syndrome, a limb-threatening emergency. The constricting cast must be removed and emergent fasciotomy performed; compartment pressures can be measured if this does not delay treatment. Pulselessness and pallor are late findings, so waiting for them risks irreversible muscle necrosis.",
    why: [
      "Delaying treatment allows irreversible ischemic muscle and nerve injury.",
      "Tightening the cast increases compartment pressure and worsens ischemia.",
      "Correct: remove the constricting cast and perform emergent fasciotomy for compartment syndrome.",
      "Ice and compression further reduce perfusion and worsen the syndrome.",
      "Imaging delays a time-critical limb-threatening emergency diagnosed clinically."
    ]
  },
  {
    id: "s2ck-0114",
    system: "Pediatrics",
    discipline: "Pediatric Surgery",
    topic: "Necrotizing enterocolitis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A premature infant born at 29 weeks is now 8 days old and, after enteral feeds were advanced, develops abdominal distension, feeding intolerance with bilious residuals, bloody stools, and lethargy. The abdomen is distended and tender.\n\n**[IMAGE: abdominal radiograph showing pneumatosis intestinalis in the bowel wall without free air]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Advance enteral feeds to improve nutrition",
      "Discharge with outpatient follow-up",
      "Oral rehydration solution",
      "Stop feeds, place a nasogastric tube for decompression, give intravenous fluids and broad-spectrum antibiotics, and obtain serial abdominal radiographs",
      "Immediate laparotomy for all infants"
    ],
    answer: 3,
    exp: "A premature infant with feeding intolerance, bloody stools, and pneumatosis intestinalis has necrotizing enterocolitis. Initial management is bowel rest with nothing by mouth, nasogastric decompression, intravenous fluids and nutrition, broad-spectrum antibiotics, and serial abdominal films to watch for perforation. Surgery is indicated for pneumoperitoneum (perforation) or clinical deterioration despite medical therapy.",
    why: [
      "Advancing feeds worsens necrotizing enterocolitis.",
      "The infant is acutely ill and cannot be discharged.",
      "Oral intake is contraindicated; the bowel must be rested.",
      "Correct: bowel rest, nasogastric decompression, fluids, antibiotics, and serial films are the medical management of necrotizing enterocolitis.",
      "Surgery is reserved for perforation or deterioration, not routine initial care."
    ]
  },
  {
    id: "s2ck-0115",
    system: "Pediatrics",
    discipline: "Pediatric Cardiology",
    topic: "Acute rheumatic fever",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 9-year-old boy develops migratory arthritis of the large joints, a new heart murmur, and painless firm nodules over the elbows about 3 weeks after an untreated sore throat. He is febrile and has an elevated antistreptolysin O titer.\n\n| Finding | Present |\n|---|---|\n| Migratory polyarthritis | yes |\n| Carditis (new murmur) | yes |\n| Subcutaneous nodules | yes |\n| Antistreptolysin O titer | elevated |",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Antiviral therapy",
      "Observation only",
      "Systemic anticoagulation",
      "Immediate valve replacement surgery",
      "Penicillin to eradicate streptococcus plus anti-inflammatory therapy, followed by long-term secondary prophylaxis"
    ],
    answer: 4,
    exp: "Migratory polyarthritis, carditis, and subcutaneous nodules after a streptococcal pharyngitis with a rising antistreptolysin O titer meet the Jones criteria for acute rheumatic fever. Treatment is penicillin to eradicate residual group A streptococcus, anti-inflammatory therapy (aspirin or NSAIDs) for arthritis and carditis, and long-term secondary antibiotic prophylaxis to prevent recurrences and rheumatic heart disease.",
    why: [
      "Rheumatic fever follows streptococcal, not viral, infection, so antivirals are useless.",
      "Untreated disease can progress to chronic rheumatic heart disease.",
      "Anticoagulation is not part of acute rheumatic fever management.",
      "Valve surgery is not the initial treatment and is reserved for severe chronic valve damage.",
      "Correct: eradicate streptococcus with penicillin, control inflammation, and provide long-term secondary prophylaxis."
    ]
  },
  {
    id: "s2ck-0116",
    system: "Pediatrics",
    discipline: "Pediatric Infectious Disease",
    topic: "Febrile urinary tract infection in an infant",
    difficulty: "easy",
    anchor: "lab",
    vignette: "An 8-month-old girl is brought in with a fever to 39.5 C, irritability, and poor feeding for 1 day without an obvious source. She has no respiratory symptoms and a normal ear and throat examination. A catheterized urine specimen is obtained.\n\n| Urine (catheter) | Value |\n|---|---|\n| Leukocyte esterase | positive |\n| Nitrite | positive |\n| Microscopy | pyuria with bacteria |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Obtain a catheterized urine culture and start empiric antibiotics",
      "Antipyretics alone and reassess in one week",
      "Send only a bagged urine specimen and withhold antibiotics",
      "Reassurance without further testing",
      "Immediate cystoscopy"
    ],
    answer: 0,
    exp: "A febrile infant without a source and a catheterized urinalysis showing pyuria with positive leukocyte esterase and nitrite has a urinary tract infection. Management is to send the catheter specimen for culture and start empiric antibiotics, with a renal and bladder ultrasound afterward and further imaging as indicated. Bagged specimens are unreliable for culture because of contamination.",
    why: [
      "Correct: send a catheterized urine culture and begin empiric antibiotics for a febrile infant urinary tract infection.",
      "Antipyretics do not treat the infection and delay risks urosepsis.",
      "Bagged specimens are contaminated and unreliable, and antibiotics should not be withheld.",
      "An untreated infant urinary tract infection can cause urosepsis and renal scarring.",
      "Cystoscopy is not indicated in the acute evaluation of an infant urinary tract infection."
    ]
  },
  {
    id: "s2ck-0117",
    system: "Pediatrics",
    discipline: "Developmental-Behavioral Pediatrics",
    topic: "Autism spectrum disorder",
    difficulty: "easy",
    anchor: null,
    vignette: "A 24-month-old boy is not yet using two-word phrases, rarely makes eye contact, does not respond to his name, and engages in repetitive hand flapping with a fixed insistence on lining up his toys. His hearing test is normal and he has no regression of motor skills.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Reassure the parents that most children catch up on their own",
      "Refer for formal developmental and autism evaluation and enroll in early intervention services",
      "Start an antipsychotic medication",
      "Repeat the hearing test only",
      "Recheck development at age 5"
    ],
    answer: 1,
    exp: "Impaired social communication (poor eye contact, not responding to name, language delay) with restricted, repetitive behaviors raises concern for autism spectrum disorder. The next step is referral for a formal developmental evaluation and enrollment in early intervention services, because early intervention improves long-term outcomes. Routine developmental screening occurs at the 18- and 24-month visits.",
    why: [
      "Waiting for the child to catch up delays access to beneficial early intervention.",
      "Correct: refer for formal developmental evaluation and start early intervention services.",
      "There is no medication that treats the core features, and antipsychotics are not first-line.",
      "Hearing is already normal, so repeating it alone does not address the concern.",
      "Deferring evaluation to age 5 forgoes the benefit of early intervention."
    ]
  },
  {
    id: "s2ck-0118",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Intraamniotic infection (chorioamnionitis)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 30-year-old woman at 39 weeks gestation has had ruptured membranes for 20 hours. She now has a temperature of 38.6 C, maternal tachycardia, fetal tachycardia on the monitor, uterine fundal tenderness, and foul-smelling amniotic fluid. She is in early labor.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Administer a tocolytic to prolong the pregnancy",
      "Discharge home with oral antibiotics",
      "Start broad-spectrum intravenous antibiotics and proceed with delivery",
      "Give antipyretics only and await spontaneous labor at home",
      "Perform an immediate cesarean delivery regardless of labor progress"
    ],
    answer: 2,
    exp: "Maternal fever with uterine tenderness, maternal and fetal tachycardia, and purulent amniotic fluid after prolonged rupture of membranes indicates intraamniotic infection (chorioamnionitis). Management is prompt broad-spectrum intravenous antibiotics (for example ampicillin plus gentamicin) together with delivery; the route of delivery is guided by usual obstetric indications, so cesarean is not automatic.",
    why: [
      "Prolonging the pregnancy in the face of intrauterine infection endangers mother and fetus.",
      "This is a serious infection requiring inpatient intravenous therapy and delivery, not discharge.",
      "Correct: give broad-spectrum intravenous antibiotics and proceed with delivery for chorioamnionitis.",
      "Antipyretics do not treat the infection, and awaiting labor at home is unsafe.",
      "Cesarean is reserved for standard obstetric indications, not mandated by the infection itself."
    ]
  },
  {
    id: "s2ck-0119",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Umbilical cord prolapse",
    difficulty: "hard",
    anchor: null,
    vignette: "A woman in active labor undergoes artificial rupture of membranes, after which the fetal heart rate abruptly drops to 70/min and remains there. On examination a pulsating loop of umbilical cord is palpable in the vagina below the presenting part.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Augment labor with oxytocin",
      "Await spontaneous vaginal delivery",
      "Manually reduce the cord back above the presenting part and continue labor",
      "Elevate the presenting part off the cord and proceed to emergent cesarean delivery",
      "Administer a tocolytic and discharge the patient"
    ],
    answer: 3,
    exp: "A palpable pulsating cord with sudden fetal bradycardia after membrane rupture is umbilical cord prolapse, an obstetric emergency causing cord compression and fetal hypoxia. The examiner should manually elevate the presenting part off the cord (and place the mother in knee-chest or steep Trendelenburg) to relieve compression while preparing for emergent cesarean delivery. Handling or replacing the cord and any delay worsen fetal outcome.",
    why: [
      "Oxytocin intensifies contractions and worsens cord compression.",
      "Awaiting vaginal delivery allows continued fetal hypoxia and death.",
      "Manual replacement of the cord is not recommended and delays definitive delivery.",
      "Correct: elevate the presenting part off the cord and proceed to emergent cesarean delivery.",
      "A tocolytic with discharge fails to deliver the compromised fetus."
    ]
  },
  {
    id: "s2ck-0120",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Threatened abortion",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 26-year-old woman at 9 weeks gestation reports light vaginal bleeding and mild cramping for 1 day. On speculum examination the cervical os is closed, and no tissue has passed. She is hemodynamically stable.\n\n**[IMAGE: transvaginal ultrasound showing an intrauterine gestation with fetal cardiac activity appropriate for dates]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Emergency dilation and curettage",
      "Methotrexate",
      "Immediate cesarean delivery",
      "Oxytocin infusion",
      "Expectant management with pelvic rest, reassurance, and follow-up"
    ],
    answer: 4,
    exp: "Vaginal bleeding with a closed cervical os and a viable intrauterine pregnancy on ultrasound is a threatened abortion. Because the pregnancy is viable and the os is closed, management is expectant with pelvic rest, reassurance, and follow-up; most such pregnancies continue. Uterine evacuation and methotrexate are inappropriate for a viable desired intrauterine pregnancy.",
    why: [
      "Dilation and curettage is for an incomplete or missed abortion, not a viable pregnancy.",
      "Methotrexate is used for ectopic pregnancy, not a viable intrauterine pregnancy.",
      "Cesarean delivery is irrelevant at 9 weeks gestation.",
      "Oxytocin is not indicated in the first trimester for a viable pregnancy.",
      "Correct: threatened abortion with a viable intrauterine pregnancy is managed expectantly with follow-up."
    ]
  },
  {
    id: "s2ck-0121",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Bacterial vaginosis",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 30-year-old woman reports a thin, grayish-white vaginal discharge with a fishy odor that is worse after intercourse. There is minimal itching and no vulvar erythema or dysuria. Point-of-care testing is performed.\n\n| Finding | Result |\n|---|---|\n| Vaginal pH | 5.2 |\n| Whiff (amine) test | positive |\n| Saline wet mount | clue cells present |",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Oral or vaginal metronidazole",
      "Oral fluconazole",
      "Intramuscular penicillin",
      "Topical corticosteroid",
      "No treatment; observe only"
    ],
    answer: 0,
    exp: "A thin gray discharge with a pH above 4.5, a positive whiff test, and clue cells on wet mount meets the criteria for bacterial vaginosis, an overgrowth of anaerobic flora. First-line treatment is metronidazole (oral or vaginal) or clindamycin. Fluconazole treats candidiasis, and penicillin treats syphilis, neither of which is present.",
    why: [
      "Correct: bacterial vaginosis is treated with metronidazole (oral or vaginal) or clindamycin.",
      "Fluconazole treats vulvovaginal candidiasis, which causes a thick white discharge and itching, not clue cells.",
      "Penicillin treats syphilis, not bacterial vaginosis.",
      "Corticosteroids do not treat an infectious vaginosis.",
      "Symptomatic bacterial vaginosis is treated rather than merely observed."
    ]
  },
  {
    id: "s2ck-0122",
    system: "Psychiatry",
    discipline: "Adult Psychiatry",
    topic: "First-episode schizophrenia",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 21-year-old man is brought in by his family for 8 months of auditory hallucinations, fixed paranoid delusions that his neighbors are spying on him, disorganized speech, and progressive social and academic withdrawal. A urine toxicology screen is negative and laboratory studies are normal.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Benzodiazepine monotherapy",
      "A second-generation antipsychotic together with psychosocial support",
      "An SSRI alone",
      "No treatment, with watchful waiting",
      "A stimulant medication"
    ],
    answer: 1,
    exp: "Hallucinations, delusions, disorganized speech, and functional decline persisting for more than 6 months with negative toxicology indicate schizophrenia. First-line treatment is an antipsychotic, typically a second-generation agent, combined with psychosocial interventions such as family support and vocational rehabilitation. Earlier treatment of a first psychotic episode is associated with better outcomes.",
    why: [
      "Benzodiazepines do not treat the underlying psychosis.",
      "Correct: a second-generation antipsychotic with psychosocial support is first-line for schizophrenia.",
      "An SSRI alone does not treat primary psychotic symptoms.",
      "Untreated psychosis worsens functioning and prognosis.",
      "Stimulants can exacerbate psychotic symptoms."
    ]
  },
  {
    id: "s2ck-0123",
    system: "Psychiatry",
    discipline: "Adult Psychiatry",
    topic: "Obsessive-compulsive disorder",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 26-year-old woman describes intrusive, distressing fears of contamination that she recognizes as irrational but cannot dismiss. To relieve the anxiety she washes her hands for hours each day until they are raw. The rituals now consume much of her day and have caused her to fall behind at work.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "A benzodiazepine",
      "An antipsychotic as monotherapy",
      "An SSRI combined with cognitive-behavioral therapy using exposure and response prevention",
      "No treatment because insight is preserved",
      "A stimulant medication"
    ],
    answer: 2,
    exp: "Recurrent intrusive obsessions and time-consuming compulsions that the patient recognizes as excessive and that impair functioning define obsessive-compulsive disorder. First-line treatment combines an SSRI (often at higher doses than for depression) with cognitive-behavioral therapy using exposure and response prevention, the most effective psychotherapy for the condition.",
    why: [
      "Benzodiazepines are not first-line and carry dependence risk.",
      "Antipsychotics are used only as augmentation in refractory cases, not as monotherapy.",
      "Correct: an SSRI plus exposure and response prevention therapy is first-line for obsessive-compulsive disorder.",
      "Preserved insight does not obviate the need to treat impairing symptoms.",
      "Stimulants have no role and could worsen anxiety."
    ]
  },
  {
    id: "s2ck-0124",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Osteoporosis screening",
    difficulty: "easy",
    anchor: null,
    vignette: "A 66-year-old postmenopausal woman comes in for a routine health maintenance visit. She has no history of fractures, takes no relevant medications, and has a normal physical examination. She asks whether she needs any bone-related screening for her age.",
    lead: "Which of the following is the most appropriate recommendation?",
    options: [
      "No bone screening is indicated",
      "Annual spine radiographs",
      "Screen only after a fragility fracture occurs",
      "Bone mineral density testing with dual-energy X-ray absorptiometry (DEXA)",
      "Start a bisphosphonate empirically without testing"
    ],
    answer: 3,
    exp: "Women aged 65 years and older should be screened for osteoporosis with bone mineral density testing by dual-energy X-ray absorptiometry, which detects low bone density before a fracture occurs and identifies candidates for treatment. Plain radiographs are insensitive for bone density, and treatment decisions are guided by measured density and fracture-risk assessment rather than given empirically.",
    why: [
      "Women 65 and older meet criteria for osteoporosis screening, so screening is indicated.",
      "Plain radiographs are insensitive for detecting reduced bone mineral density.",
      "Screening is meant to detect low bone density before the first fracture, not after.",
      "Correct: screen women 65 and older with DEXA bone mineral density testing.",
      "Treatment should follow density and fracture-risk results, not be started empirically."
    ]
  },
  {
    id: "s2ck-0125",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Confidentiality versus duty to protect third parties",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 48-year-old man with poorly controlled epilepsy has had two witnessed generalized seizures in the past month. He drives a school bus for a living and, despite counseling about the danger, states he intends to keep driving and refuses to stop. He is otherwise cognitively intact.",
    lead: "Which of the following is the most appropriate course of action?",
    options: [
      "Maintain strict confidentiality and take no further action",
      "Immediately discharge him from your practice",
      "Covertly arrange to disable his vehicle",
      "Instruct his family to stop him without informing him",
      "Counsel him about the risk and driving restrictions and, if he continues to pose a serious danger to others, notify the appropriate authority as legally required"
    ],
    answer: 4,
    exp: "Patient confidentiality yields when a patient poses a serious, foreseeable risk of harm to identifiable others, analogous to the duty to protect. After counseling the patient about driving restrictions and giving him the opportunity to comply, the physician should report an unfit driver who continues to endanger the public to the appropriate motor-vehicle or public-health authority as required by jurisdiction. Inaction, covert acts, or bypassing the patient are inappropriate.",
    why: [
      "Absolute confidentiality is not required when a patient poses a serious danger to identifiable others.",
      "Discharging him from the practice abandons the patient and does not address the public-safety risk.",
      "Covertly disabling his vehicle is deceptive and outside the physician's proper role.",
      "Secretly enlisting the family bypasses the patient and is not the appropriate mechanism.",
      "Correct: counsel the patient and, if he continues to endanger others, notify the appropriate authority as legally required."
    ]
  }
];
