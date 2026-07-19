/*
 * Rounds Codex - USMLE Step 3, Day 2 (Advanced Clinical Management / ACM) bank, Batch 2 (25 items)
 * Day-2-ACM blueprint: managing patients OVER TIME across ambulatory, ED, inpatient, and
 * continuity settings. Vignettes are longer and multi-step (initial data -> workup/evolution
 * -> decision point); lead-ins stress the most appropriate NEXT STEP in management, best
 * initial therapy, monitoring, and follow-up. Much less pure biostatistics than Day 1.
 * Same Step 3 system set and shared `s3-` id space as Day 1 (Day 2 extends the bank).
 * All vignettes are 100% original; source material used for facts only, never phrasing.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E; only the keyed one starts "Correct")
 */
const USMLE_STEP3D2_B2 = [
  {
    id: "s3-0126",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "New atrial fibrillation rate control",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 68-year-old woman presents to clinic with 2 days of palpitations and mild exertional breathlessness. She has hypertension but no chest pain, and she is hemodynamically stable with a blood pressure of 128/78 mm Hg. Her rhythm strip is shown, and the ventricular rate is 128/min. She is not currently anticoagulated.\n\n**[ECG: an irregularly irregular narrow-complex rhythm with absent discrete P waves and a ventricular rate near 130/min, consistent with atrial fibrillation with a rapid ventricular response]**",
    lead: "Which of the following is the most appropriate next step to control her ventricular rate?",
    options: [
      "Start an oral beta-blocker such as metoprolol for rate control.",
      "Perform immediate synchronized cardioversion.",
      "Start digoxin as the first-line rate-control agent.",
      "Begin amiodarone for pharmacologic rhythm control.",
      "Give intravenous adenosine to terminate the rhythm."
    ],
    answer: 0,
    exp: "She has hemodynamically stable atrial fibrillation with a rapid ventricular response. The first-line approach is rate control with an atrioventricular nodal blocker such as a beta-blocker (or a nondihydropyridine calcium channel blocker); stroke-prevention anticoagulation is decided separately by her CHA2DS2-VASc score. Cardioversion is reserved for hemodynamic instability.",
    why: [
      "Correct: stable atrial fibrillation with rapid ventricular response is managed first with a rate-controlling AV nodal blocker such as a beta-blocker.",
      "Immediate cardioversion is indicated for hemodynamic instability, which she does not have.",
      "Digoxin is less effective for rate control during activity and is a second-line or adjunctive agent.",
      "Amiodarone is a rhythm-control drug, not the first step for acute rate control in a stable patient.",
      "Adenosine only transiently blocks the AV node and does not control or terminate atrial fibrillation."
    ]
  },
  {
    id: "s3-0127",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "COPD maintenance therapy step-up",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 66-year-old man with COPD is seen for follow-up. He remains breathless on moderate exertion and has had two moderate exacerbations in the past year despite good adherence and inhaler technique on a long-acting muscarinic antagonist (tiotropium) alone. He has stopped smoking. His clinic data are shown.\n\n| Parameter | Value |\n|---|---|\n| Post-bronchodilator FEV1 | 48% predicted |\n| Exacerbations in past year | 2 (moderate) |\n| Blood eosinophils | 140/microL |\n| Current inhaler | LAMA monotherapy |",
    lead: "Which of the following is the most appropriate next step in his maintenance therapy?",
    options: [
      "Add a chronic daily oral corticosteroid.",
      "Replace the LAMA with an inhaled corticosteroid as monotherapy.",
      "Start daily prophylactic oral antibiotics as the next step.",
      "Start roflumilast as the next add-on.",
      "Add a long-acting beta-agonist to create dual bronchodilation."
    ],
    answer: 4,
    exp: "He is symptomatic and continues to exacerbate on long-acting muscarinic antagonist monotherapy. The guideline-directed escalation is to add a long-acting beta-agonist, creating dual long-acting bronchodilation (LABA/LAMA), which improves symptoms and reduces exacerbations more than either agent alone. Inhaled corticosteroids are added later if exacerbations persist or eosinophils are high.",
    why: [
      "Chronic oral corticosteroids carry major cumulative toxicity and are not maintenance therapy for COPD.",
      "Inhaled corticosteroid monotherapy is not appropriate in COPD and would remove effective bronchodilation.",
      "Prophylactic antibiotics are a later-line option for frequent exacerbators already on optimized inhalers.",
      "Roflumilast is reserved for severe COPD with chronic bronchitis and frequent exacerbations after bronchodilator optimization.",
      "Correct: adding a long-acting beta-agonist to the LAMA gives dual bronchodilation, the next step for a symptomatic exacerbating patient."
    ]
  },
  {
    id: "s3-0128",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Anemia of chronic kidney disease workup",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 70-year-old man with stage 4 chronic kidney disease reports several weeks of worsening fatigue and reduced exercise tolerance. He is not on dialysis and has no overt bleeding. His hemoglobin has fallen over successive visits, and his current studies are shown.\n\n| Test | Value |\n|---|---|\n| Hemoglobin | 9.2 g/dL |\n| Mean corpuscular volume | 84 fL |\n| Ferritin | 60 ng/mL |\n| Transferrin saturation | 15% |\n| Estimated GFR | 22 mL/min/1.73 m^2 |",
    lead: "Which of the following is the most appropriate next step to manage his anemia?",
    options: [
      "Start an erythropoiesis-stimulating agent immediately.",
      "Give iron to replete stores and reassess before starting an ESA.",
      "Transfuse packed red blood cells now.",
      "Begin oral cobalamin (vitamin B12) supplementation.",
      "Start hydroxyurea to stimulate red-cell production."
    ],
    answer: 1,
    exp: "He has anemia of chronic kidney disease, but his transferrin saturation of 15% and relatively low ferritin indicate coexisting iron deficiency. Iron stores must be repleted first (targeting a higher transferrin saturation and ferritin) and the response reassessed; erythropoiesis-stimulating agents work poorly and are started only after iron is adequate and hemoglobin remains low.",
    why: [
      "Starting an ESA before repleting iron leads to a poor response because iron is the rate-limiting substrate.",
      "Correct: the low transferrin saturation signals iron deficiency, so replete iron and reassess before considering an ESA.",
      "Transfusion is reserved for severe or symptomatic anemia, not this stable, correctable case.",
      "His normal mean corpuscular volume and picture do not indicate B12 deficiency.",
      "Hydroxyurea has no role in anemia of chronic kidney disease and would worsen it."
    ]
  },
  {
    id: "s3-0129",
    system: "Internal Medicine",
    discipline: "Gastroenterology/Hepatology",
    topic: "Chronic hepatitis C treatment initiation",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 55-year-old man is found to have a positive hepatitis C antibody on screening. Confirmatory testing is performed, and he feels well with no stigmata of chronic liver disease. Noninvasive fibrosis assessment indicates no cirrhosis. His labs are shown.\n\n| Test | Value |\n|---|---|\n| Hepatitis C antibody | positive |\n| Hepatitis C RNA (viral load) | detectable (positive) |\n| ALT | mildly elevated |\n| FIB-4 fibrosis index | low (no advanced fibrosis) |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Observe and repeat the viral load in one year without treatment.",
      "Treat only if he later develops cirrhosis.",
      "Start direct-acting antiviral therapy.",
      "Start pegylated interferon plus ribavirin.",
      "Refer for liver transplantation evaluation now."
    ],
    answer: 2,
    exp: "A detectable hepatitis C RNA confirms chronic active infection. Current guidelines recommend direct-acting antiviral therapy for essentially all patients with chronic hepatitis C regardless of fibrosis stage, because cure prevents progression to cirrhosis and hepatocellular carcinoma. Interferon-based regimens are obsolete, and transplant is not indicated without decompensated disease.",
    why: [
      "Deferring treatment allows ongoing liver injury; chronic hepatitis C should be treated, not merely observed.",
      "Waiting for cirrhosis abandons the chance to prevent it; treatment is recommended before advanced fibrosis develops.",
      "Correct: chronic hepatitis C (detectable RNA) warrants direct-acting antiviral therapy regardless of fibrosis stage.",
      "Interferon-ribavirin is outdated, poorly tolerated, and inferior to direct-acting antivirals.",
      "Transplant evaluation is for decompensated cirrhosis or hepatocellular carcinoma, which he does not have."
    ]
  },
  {
    id: "s3-0130",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Osteoporosis pharmacotherapy initiation",
    difficulty: "easy",
    anchor: "table",
    vignette: "A 68-year-old postmenopausal woman is seen after routine bone density testing. She has had no fractures, takes adequate calcium and vitamin D, and has normal renal function. She has no contraindication to oral therapy. Her dual-energy x-ray absorptiometry results are shown.\n\n| Site | T-score |\n|---|---|\n| Femoral neck | -2.7 |\n| Total hip | -2.5 |\n| Lumbar spine | -2.4 |",
    lead: "Which of the following is the most appropriate pharmacologic therapy?",
    options: [
      "Calcium and vitamin D supplements alone.",
      "Start estrogen replacement as first-line therapy.",
      "Begin teriparatide as first-line therapy.",
      "Start an oral bisphosphonate such as alendronate.",
      "Repeat the bone density scan in 2 years before treating."
    ],
    answer: 3,
    exp: "A femoral neck T-score of -2.5 or lower meets the definition of osteoporosis and is an indication for pharmacologic therapy. An oral bisphosphonate such as alendronate is first-line and reduces fracture risk. Anabolic agents like teriparatide are reserved for very high risk or severe disease, and estrogen is not first-line for osteoporosis alone.",
    why: [
      "Supplements alone are insufficient once osteoporosis is established and pharmacologic therapy is indicated.",
      "Estrogen is not first-line therapy for osteoporosis because of its risk profile.",
      "Teriparatide is an anabolic agent reserved for very high fracture risk, not initial routine therapy.",
      "Correct: a T-score of -2.5 or lower is osteoporosis, and an oral bisphosphonate is the first-line treatment.",
      "Delaying treatment 2 years leaves diagnosed osteoporosis untreated and fracture risk unaddressed."
    ]
  },
  {
    id: "s3-0131",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "New rheumatoid arthritis DMARD initiation",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 44-year-old woman has had 3 months of symmetric pain and swelling of the metacarpophalangeal joints and wrists with more than an hour of morning stiffness. Rheumatoid factor and anti-cyclic citrullinated peptide antibodies are positive, inflammatory markers are elevated, and early radiographic erosions are noted. She is diagnosed with rheumatoid arthritis.",
    lead: "Which of the following is the most appropriate next step in her long-term management?",
    options: [
      "Start methotrexate as the initial disease-modifying therapy.",
      "Prescribe long-term NSAID monotherapy.",
      "Use chronic oral prednisone as the sole long-term therapy.",
      "Start a TNF inhibitor as first-line before any conventional agent.",
      "Recommend physical therapy alone and defer medication."
    ],
    answer: 0,
    exp: "Newly diagnosed rheumatoid arthritis should be treated early with a conventional synthetic disease-modifying antirheumatic drug to prevent joint destruction, and methotrexate is the anchor first-line agent. NSAIDs and low-dose corticosteroids serve only as adjuncts or bridges, and biologics are generally added after an inadequate response to conventional DMARDs.",
    why: [
      "Correct: methotrexate is the first-line disease-modifying agent that should be started early in rheumatoid arthritis to prevent erosion.",
      "NSAIDs relieve symptoms but do not modify disease or prevent joint damage.",
      "Chronic prednisone monotherapy causes cumulative toxicity and does not adequately control disease progression.",
      "A TNF inhibitor is typically reserved for inadequate response to conventional DMARDs, not first-line.",
      "Physical therapy is supportive but does not halt the destructive inflammatory process."
    ]
  },
  {
    id: "s3-0132",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Primary-prevention statin initiation",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 58-year-old man is seen for cardiovascular risk assessment. He has hypertension and currently smokes but has no history of atherosclerotic disease or diabetes. His blood pressure is treated, and his lipid panel and calculated risk are shown. He is willing to make lifestyle changes.\n\n| Parameter | Value |\n|---|---|\n| LDL cholesterol | 150 mg/dL |\n| HDL cholesterol | 38 mg/dL |\n| 10-year ASCVD risk (pooled cohort) | 14% |",
    lead: "Which of the following is the most appropriate next step to reduce his cardiovascular risk?",
    options: [
      "Recommend lifestyle changes only and no medication.",
      "Start a fibrate to lower his cardiovascular risk.",
      "Start low-dose aspirin as primary-prevention monotherapy.",
      "Start ezetimibe as first-line lipid-lowering therapy.",
      "Start a moderate-to-high-intensity statin."
    ],
    answer: 4,
    exp: "His 10-year atherosclerotic cardiovascular disease risk of 14% places him in the intermediate-to-high category, where a moderate-to-high-intensity statin is recommended together with lifestyle modification and smoking cessation. Statins have the strongest evidence for primary prevention; fibrates and ezetimibe are not first-line, and aspirin is no longer routine for primary prevention.",
    why: [
      "Lifestyle changes alone are inadequate for a patient with an intermediate-to-high calculated risk who warrants a statin.",
      "Fibrates lower triglycerides but do not provide the atherosclerotic risk reduction statins offer.",
      "Aspirin is not routinely recommended for primary prevention and does not address his lipids.",
      "Ezetimibe is an add-on when statins are insufficient or not tolerated, not the first-line agent.",
      "Correct: a 10-year risk of 14% warrants a moderate-to-high-intensity statin plus lifestyle change."
    ]
  },
  {
    id: "s3-0133",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Unprovoked VTE anticoagulation duration",
    difficulty: "hard",
    anchor: null,
    vignette: "A 60-year-old man was diagnosed 3 months ago with a first unprovoked proximal deep vein thrombosis and pulmonary embolism, with no identifiable transient risk factor and no evidence of malignancy. He has completed 3 months of anticoagulation, tolerates it well, and has a low bleeding risk. He asks whether he can stop the medication now.",
    lead: "Which of the following is the most appropriate recommendation regarding anticoagulation duration?",
    options: [
      "Stop anticoagulation now because 3 months is always sufficient.",
      "Continue extended (indefinite) anticoagulation given the unprovoked event and low bleeding risk.",
      "Switch to lifelong aspirin instead of an anticoagulant.",
      "Place an inferior vena cava filter and stop anticoagulation.",
      "Continue for exactly 6 months total, then stop regardless of risk."
    ],
    answer: 1,
    exp: "An unprovoked proximal venous thromboembolism carries a high risk of recurrence after anticoagulation is stopped. In a patient with low-to-moderate bleeding risk, extended (indefinite) anticoagulation is recommended, with periodic reassessment of the risk-benefit balance. Anticoagulation limited to 3 months applies to events provoked by a major transient risk factor.",
    why: [
      "A fixed 3-month course applies to VTE provoked by a transient factor, not to unprovoked events with high recurrence risk.",
      "Correct: an unprovoked proximal VTE with low bleeding risk warrants extended anticoagulation with periodic reassessment.",
      "Aspirin is far less effective than anticoagulation for preventing recurrent VTE.",
      "An inferior vena cava filter is only for patients who cannot receive anticoagulation, which does not apply here.",
      "An arbitrary 6-month stop ignores the ongoing recurrence risk of an unprovoked event."
    ]
  },
  {
    id: "s3-0134",
    system: "Emergency Medicine",
    discipline: "Critical Care",
    topic: "Hyperkalemia with ECG changes",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 62-year-old man with end-stage renal disease who missed his last two dialysis sessions presents with generalized weakness and palpitations. He is bradycardic, and point-of-care testing shows a potassium of 7.1 mEq/L. His electrocardiogram is shown while the team prepares treatment.\n\n**[ECG: sinus rhythm with tall, narrow-based peaked T waves and progressive widening of the QRS complexes, consistent with severe hyperkalemia]**",
    lead: "Which of the following is the most appropriate immediate next step?",
    options: [
      "Give intravenous insulin with dextrose as the first intervention.",
      "Administer oral sodium polystyrene sulfonate as the first step.",
      "Give intravenous calcium gluconate to stabilize the myocardium.",
      "Arrange urgent hemodialysis before giving any medication.",
      "Administer a nebulized beta-agonist alone."
    ],
    answer: 2,
    exp: "Hyperkalemia with electrocardiographic changes (peaked T waves and QRS widening) is a cardiac emergency. The first step is intravenous calcium to stabilize the myocardial membrane and protect against fatal arrhythmia, which acts within minutes. Insulin with dextrose and a beta-agonist then shift potassium intracellularly, and dialysis provides definitive removal.",
    why: [
      "Insulin with dextrose shifts potassium but does not immediately protect the heart, so it follows calcium.",
      "Potassium-binding resins act too slowly to address life-threatening electrocardiographic changes.",
      "Correct: intravenous calcium immediately stabilizes the myocardium when hyperkalemia causes ECG changes.",
      "Dialysis is definitive but takes time to arrange; membrane stabilization and shifting must come first.",
      "A beta-agonist alone shifts potassium modestly and does not protect the myocardium acutely."
    ]
  },
  {
    id: "s3-0135",
    system: "Emergency Medicine",
    discipline: "Allergy/Immunology",
    topic: "Anaphylaxis acute treatment",
    difficulty: "easy",
    anchor: null,
    vignette: "A 25-year-old woman is brought to the emergency department minutes after eating a dish containing peanuts. She has diffuse urticaria, audible wheezing, a sensation of throat tightness, and a blood pressure of 88/50 mm Hg. She is anxious and flushed but maintaining her airway for now.",
    lead: "Which of the following is the most appropriate immediate treatment?",
    options: [
      "Give intravenous diphenhydramine as the first-line agent.",
      "Administer intravenous corticosteroids first.",
      "Give a nebulized bronchodilator as the primary treatment.",
      "Administer intramuscular epinephrine immediately.",
      "Observe and give an oral antihistamine."
    ],
    answer: 3,
    exp: "She has anaphylaxis (mucocutaneous, respiratory, and cardiovascular involvement after an allergen exposure). Immediate intramuscular epinephrine into the anterolateral thigh is the first-line, life-saving treatment. Antihistamines and corticosteroids are adjuncts that do not reverse airway compromise or shock and must never delay epinephrine.",
    why: [
      "Antihistamines relieve itching and hives but do not reverse airway swelling or hypotension.",
      "Corticosteroids have a delayed effect and do not treat the acute life threat.",
      "A bronchodilator helps bronchospasm but does not address the systemic reaction or hypotension.",
      "Correct: intramuscular epinephrine is the immediate life-saving treatment for anaphylaxis.",
      "Observation and oral antihistamine are dangerously inadequate for evolving anaphylaxis."
    ]
  },
  {
    id: "s3-0136",
    system: "Emergency Medicine",
    discipline: "Gastroenterology",
    topic: "Acute variceal hemorrhage management",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 55-year-old man with known cirrhosis presents with several episodes of hematemesis and melena. He is pale and diaphoretic. Two large-bore intravenous lines are placed and crystalloid resuscitation is begun as blood products are readied. His initial vital signs are shown.\n\n| Parameter | Value |\n|---|---|\n| Heart rate | 118/min |\n| Blood pressure | 92/58 mm Hg |\n| Hemoglobin | 8.4 g/dL |\n| Mental status | alert, anxious |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Begin intravenous octreotide plus prophylactic antibiotics and arrange urgent upper endoscopy.",
      "Transfuse aggressively to a hemoglobin target above 12 g/dL.",
      "Start a nonselective beta-blocker acutely to stop the bleeding.",
      "Give an oral proton pump inhibitor and discharge with follow-up.",
      "Proceed directly to a transjugular intrahepatic portosystemic shunt before endoscopy."
    ],
    answer: 0,
    exp: "Suspected variceal hemorrhage in cirrhosis is treated with resuscitation plus a vasoactive agent (octreotide) to lower portal pressure and prophylactic antibiotics (which reduce mortality and rebleeding), followed by urgent endoscopy for band ligation. Transfusion should target a restrictive threshold near 7 g/dL, and TIPS is a rescue option for refractory bleeding.",
    why: [
      "Correct: octreotide, prophylactic antibiotics, and urgent endoscopy are the standard acute management of variceal bleeding.",
      "Overtransfusion raises portal pressure and worsens variceal bleeding; a restrictive strategy is preferred.",
      "Acute nonselective beta-blockade is inappropriate during active bleeding and can blunt compensatory tachycardia.",
      "Oral acid suppression and discharge are grossly inadequate for active variceal hemorrhage.",
      "TIPS is a rescue therapy for bleeding refractory to endoscopic and medical control, not the first step."
    ]
  },
  {
    id: "s3-0137",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Adhesive small bowel obstruction management",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 64-year-old man with a prior open appendectomy presents with 1 day of crampy abdominal pain, distension, bilious vomiting, and no passage of flatus. His abdomen is distended and tympanitic but soft without peritoneal signs, and he is hemodynamically stable. Imaging is obtained.\n\n**[IMAGE: supine and upright abdominal series showing multiple dilated loops of small bowel with air-fluid levels and a distal transition point, without free air or signs of ischemia]**",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Proceed to immediate exploratory laparotomy.",
      "Start oral laxatives and resume regular feeds.",
      "Give an opioid for pain and discharge home.",
      "Perform colonoscopic decompression.",
      "Provide nasogastric decompression, intravenous fluids, and bowel rest with serial examinations."
    ],
    answer: 4,
    exp: "This is an uncomplicated adhesive small bowel obstruction without ischemia or peritonitis. Initial management is nonoperative: nasogastric decompression, intravenous fluid resuscitation, bowel rest, and serial abdominal examinations. Surgery is reserved for failure to resolve or signs of strangulation, ischemia, or peritonitis.",
    why: [
      "Immediate laparotomy is not indicated for an uncomplicated obstruction that may resolve with decompression.",
      "Feeding and laxatives would worsen a mechanical obstruction.",
      "Discharging an obstructed, vomiting patient risks progression to strangulation and perforation.",
      "Colonoscopy does not decompress a small bowel obstruction.",
      "Correct: uncomplicated adhesive small bowel obstruction is managed initially with nasogastric decompression, fluids, and serial exams."
    ]
  },
  {
    id: "s3-0138",
    system: "Surgery",
    discipline: "Colorectal Surgery",
    topic: "Uncomplicated diverticulitis management",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 58-year-old woman presents with 2 days of left lower quadrant pain and low-grade fever. She is well-appearing, tolerating oral intake, and hemodynamically stable, with mild left lower quadrant tenderness and no peritoneal signs. Her white blood cell count is mildly elevated, and imaging is obtained.\n\n**[IMAGE: contrast-enhanced abdominal CT showing sigmoid colonic wall thickening with pericolic fat stranding and diverticula, without abscess, free air, or perforation]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Proceed to urgent sigmoid colectomy.",
      "Manage as an outpatient with supportive care and close follow-up, with colonoscopy after resolution.",
      "Perform CT-guided percutaneous drainage.",
      "Perform immediate colonoscopy during the acute inflammation.",
      "Start long-term daily antibiotic prophylaxis."
    ],
    answer: 1,
    exp: "She has acute uncomplicated diverticulitis (no abscess, perforation, or systemic toxicity). Management is supportive outpatient care with close follow-up, and colonoscopy is performed several weeks after resolution to exclude an underlying malignancy. Surgery and drainage are reserved for complicated disease, and colonoscopy is avoided acutely because of perforation risk.",
    why: [
      "Urgent colectomy is for complicated or refractory disease, not a first uncomplicated episode.",
      "Correct: uncomplicated diverticulitis is managed supportively as an outpatient, with interval colonoscopy after recovery.",
      "Percutaneous drainage is for a diverticular abscess, which she does not have.",
      "Colonoscopy during acute inflammation increases the risk of perforation and is deferred.",
      "Chronic antibiotic prophylaxis is not indicated after a single uncomplicated episode."
    ]
  },
  {
    id: "s3-0139",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Necrotizing soft tissue infection",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 60-year-old man with diabetes presents with a rapidly spreading area of erythema on his lower leg over several hours. He reports pain far out of proportion to the visible findings, and examination reveals tense bullae and palpable crepitus. He is febrile and hypotensive. His data are shown.\n\n| Parameter | Value |\n|---|---|\n| Temperature | 39.1 C |\n| Blood pressure | 90/56 mm Hg |\n| White blood cell count | 22,000/microL |\n| Serum sodium | 129 mEq/L |\n| Serum lactate | 4.5 mmol/L |",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Admit for intravenous antibiotics alone and observe the limb.",
      "Obtain an outpatient MRI before any intervention.",
      "Perform emergent surgical exploration and debridement with broad-spectrum antibiotics.",
      "Apply topical antibiotics and elevate the limb.",
      "Start compression therapy for presumed cellulitis."
    ],
    answer: 2,
    exp: "Pain out of proportion, bullae, crepitus, systemic toxicity, and supportive laboratory derangements point to a necrotizing soft tissue infection, a surgical emergency. Immediate operative exploration and debridement, together with broad-spectrum antibiotics and aggressive resuscitation, are required; imaging must never delay surgery because the diagnosis is clinical and mortality rises with every hour of delay.",
    why: [
      "Antibiotics alone cannot treat necrotic, avascular tissue; source control by debridement is mandatory.",
      "Awaiting outpatient imaging fatally delays surgery in a rapidly progressive, life-threatening infection.",
      "Correct: necrotizing soft tissue infection demands emergent surgical debridement plus broad-spectrum antibiotics.",
      "Topical therapy is useless for deep necrotizing infection.",
      "This is not simple cellulitis, and compression would delay definitive surgical care."
    ]
  },
  {
    id: "s3-0140",
    system: "Pediatrics",
    discipline: "Pediatric Endocrinology",
    topic: "Pediatric diabetic ketoacidosis management",
    difficulty: "hard",
    anchor: "lab",
    vignette: "An 11-year-old boy with newly recognized diabetes is brought in with several days of polyuria, vomiting, and deep rapid breathing. He is dehydrated and lethargic but arousable. Point-of-care and laboratory studies are shown, and an insulin infusion and fluids are being prepared.\n\n| Test | Value |\n|---|---|\n| Serum glucose | 480 mg/dL |\n| Venous pH | 7.15 |\n| Serum bicarbonate | 10 mEq/L |\n| Serum potassium | 4.0 mEq/L |\n| Serum/urine ketones | positive |",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Give an intravenous insulin bolus immediately before any fluids.",
      "Administer intravenous sodium bicarbonate to correct the acidosis.",
      "Give oral rehydration and subcutaneous insulin only.",
      "Start intravenous isotonic fluid resuscitation, then begin a continuous insulin infusion.",
      "Rapidly correct the glucose to normal within 2 hours."
    ],
    answer: 3,
    exp: "Pediatric diabetic ketoacidosis is managed by beginning with isotonic fluid resuscitation, then starting a continuous low-dose insulin infusion (no bolus in children, given cerebral-edema concerns), with potassium added as it falls and glucose corrected gradually. Bicarbonate is avoided, and overly rapid correction of glucose and osmolality increases the risk of cerebral edema.",
    why: [
      "An insulin bolus before fluid resuscitation is avoided in children because of cerebral-edema risk.",
      "Bicarbonate does not improve outcomes and may worsen cerebral edema in pediatric ketoacidosis.",
      "Oral rehydration and subcutaneous insulin are inadequate for a lethargic, acidotic child.",
      "Correct: begin isotonic fluids first, then a continuous insulin infusion, correcting glucose gradually.",
      "Overly rapid glucose and osmolality correction increases the risk of dangerous cerebral edema."
    ]
  },
  {
    id: "s3-0141",
    system: "Pediatrics",
    discipline: "General Pediatrics",
    topic: "Intussusception reduction",
    difficulty: "moderate",
    anchor: "image",
    vignette: "An 18-month-old boy is brought in with episodes of sudden inconsolable crying during which he draws his legs up, alternating with calm intervals. He passed one stool mixed with blood and mucus. On examination there is a sausage-shaped mass in the right upper quadrant, but he is well-perfused with a soft abdomen and no peritoneal signs. Imaging is performed.\n\n**[IMAGE: abdominal ultrasound showing a target (doughnut) sign of concentric bowel rings in the right abdomen, consistent with ileocolic intussusception]**",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Perform an air (pneumatic) enema for both confirmation and reduction.",
      "Proceed to immediate surgical resection.",
      "Provide oral rehydration and discharge home.",
      "Give broad-spectrum antibiotics and observe.",
      "Order a barium small-bowel follow-through study."
    ],
    answer: 0,
    exp: "Ileocolic intussusception in a stable child without peritonitis or perforation is treated with a nonoperative air (or contrast) enema, which is both diagnostic and therapeutic. Surgery is reserved for failed reduction, perforation, peritonitis, or shock. Prompt reduction relieves the obstruction and prevents progression to ischemia.",
    why: [
      "Correct: an air enema both confirms and reduces intussusception in a stable child without peritonitis.",
      "Immediate surgery is reserved for failed enema reduction or signs of perforation or peritonitis.",
      "Discharging a child with active intussusception risks bowel ischemia and perforation.",
      "Antibiotics and observation do not relieve the obstruction and delay definitive reduction.",
      "A barium follow-through is a diagnostic transit study, not the therapeutic reduction needed here."
    ]
  },
  {
    id: "s3-0142",
    system: "Pediatrics",
    discipline: "General Pediatrics",
    topic: "Nutritional iron-deficiency anemia",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 15-month-old girl is brought in for pallor and mild fatigue noted by her parents. She drinks about 40 ounces of cow's milk daily and eats few iron-rich solids. She is otherwise well and growing appropriately. Her screening labs are shown.\n\n| Test | Value |\n|---|---|\n| Hemoglobin | 9.5 g/dL |\n| Mean corpuscular volume | 68 fL |\n| Ferritin | low |\n| Reticulocyte count | low-normal |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Transfuse packed red blood cells.",
      "Start vitamin B12 injections.",
      "Begin an erythropoiesis-stimulating agent.",
      "Order a bone marrow biopsy.",
      "Start oral iron supplementation and limit cow's milk intake."
    ],
    answer: 4,
    exp: "Excessive cow's milk intake with a microcytic anemia and low ferritin is classic nutritional iron-deficiency anemia. Management is oral iron supplementation together with dietary counseling to limit cow's milk and increase iron-rich foods, with a follow-up count to confirm response. Transfusion is reserved for severe or symptomatic anemia.",
    why: [
      "Transfusion is unnecessary for mild, correctable nutritional iron-deficiency anemia.",
      "The microcytic picture indicates iron, not B12, deficiency.",
      "Erythropoiesis-stimulating agents are not used for iron-deficiency anemia.",
      "A bone marrow biopsy is not needed for straightforward nutritional iron deficiency.",
      "Correct: oral iron plus limiting cow's milk treats and prevents recurrence of nutritional iron-deficiency anemia."
    ]
  },
  {
    id: "s3-0143",
    system: "Obstetrics & Gynecology",
    discipline: "Maternal-Fetal Medicine",
    topic: "Gestational diabetes pharmacotherapy",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 30-year-old woman at 28 weeks gestation was diagnosed with gestational diabetes 2 weeks ago and started medical nutrition therapy and exercise. She has been adherent and checks her glucose four times daily. Her log now consistently shows values above target, as summarized below.\n\n| Reading | Typical value | Target |\n|---|---|---|\n| Fasting | 105 mg/dL | < 95 mg/dL |\n| 2-hour postprandial | 160 mg/dL | < 120 mg/dL |",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Continue diet alone and recheck in 4 weeks.",
      "Start insulin therapy.",
      "Begin a sulfonylurea as first-line pharmacotherapy.",
      "Recommend immediate delivery.",
      "Stop glucose monitoring and provide reassurance."
    ],
    answer: 1,
    exp: "Her fasting and postprandial glucose values remain above target despite an adequate trial of medical nutrition therapy, so pharmacotherapy is indicated. Insulin is the preferred first-line agent in gestational diabetes because it does not cross the placenta and reliably controls glucose. Monitoring continues, and delivery timing is a separate decision.",
    why: [
      "Continuing diet alone leaves persistently high glucose that risks fetal macrosomia and other complications.",
      "Correct: uncontrolled gestational diabetes despite nutrition therapy warrants insulin, the preferred agent.",
      "Sulfonylureas are not the preferred first-line agent; insulin is favored in pregnancy.",
      "Immediate delivery at 28 weeks is not indicated for glucose that can be controlled pharmacologically.",
      "Stopping monitoring abandons the data needed to manage glucose safely."
    ]
  },
  {
    id: "s3-0144",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Rh(D) alloimmunization prophylaxis",
    difficulty: "easy",
    anchor: null,
    vignette: "A 27-year-old woman in her first pregnancy is seen at a routine 28-week visit. Her blood type is O negative, and her antibody screen is negative, indicating she is not yet sensitized. She feels well, and the pregnancy has been uncomplicated to this point.",
    lead: "Which of the following is the most appropriate management at this visit?",
    options: [
      "No intervention because the antibody screen is negative.",
      "Give anti-D immune globulin only after delivery, never antenatally.",
      "Administer anti-D immune globulin now, at about 28 weeks.",
      "Begin intrauterine transfusion.",
      "Recommend termination because of blood-group incompatibility."
    ],
    answer: 2,
    exp: "An Rh(D)-negative, unsensitized pregnant patient should receive anti-D immune globulin at approximately 28 weeks, with a repeat dose after delivery if the newborn is Rh(D)-positive (and after any sensitizing event). This prevents maternal alloimmunization that could threaten future pregnancies.",
    why: [
      "A negative screen is precisely when prophylaxis prevents future sensitization; it is not a reason to withhold it.",
      "Routine anti-D immune globulin is given both antenatally at 28 weeks and postpartum, not postpartum only.",
      "Correct: an unsensitized Rh(D)-negative patient receives anti-D immune globulin at about 28 weeks.",
      "Intrauterine transfusion treats an already-affected fetus with hemolytic disease, not routine prophylaxis.",
      "Rh incompatibility is managed with immunoprophylaxis, never termination."
    ]
  },
  {
    id: "s3-0145",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Abnormal cervical cytology management",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 29-year-old woman has a routine cervical cancer screening result. She is asymptomatic and has no prior abnormal results. Reflex high-risk human papillomavirus testing is performed on the same sample, and the results are shown.\n\n| Test | Result |\n|---|---|\n| Cervical cytology | ASC-US (atypical squamous cells of undetermined significance) |\n| Reflex high-risk HPV | positive |",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Repeat the cytology in 3 years as routine screening.",
      "Proceed directly to hysterectomy.",
      "Perform an immediate excisional (LEEP) procedure.",
      "Refer for colposcopy.",
      "Reassure her and recommend no further follow-up."
    ],
    answer: 3,
    exp: "Atypical squamous cells of undetermined significance with a positive high-risk human papillomavirus test carries enough risk of underlying dysplasia that colposcopy is indicated for direct visualization and biopsy. Returning to routine screening applies only when the reflex HPV test is negative, and excisional treatment is not performed before a histologic diagnosis.",
    why: [
      "Routine-interval rescreening is appropriate only when the reflex HPV test is negative, not positive.",
      "Hysterectomy is not a management step for an abnormal screening result without a tissue diagnosis.",
      "Excision before histologic confirmation risks overtreatment; colposcopic biopsy comes first.",
      "Correct: ASC-US with positive high-risk HPV warrants colposcopy for evaluation and biopsy.",
      "No follow-up would miss potentially significant cervical dysplasia."
    ]
  },
  {
    id: "s3-0146",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Antidepressant nonresponse next step",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 40-year-old woman with major depressive disorder has been taking an SSRI at an adequate dose for 8 weeks. She reports good adherence and tolerates the medication well but has had only minimal improvement in mood, energy, and sleep. She has no psychotic features and no suicidal ideation, and her functioning remains impaired.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Switch to a different first-line antidepressant after this adequate trial.",
      "Add a benzodiazepine as the primary treatment.",
      "Stop all pharmacotherapy and observe.",
      "Refer immediately for electroconvulsive therapy.",
      "Continue the same dose unchanged for another 6 months."
    ],
    answer: 0,
    exp: "After an adequate antidepressant trial (adequate dose for at least 6 to 8 weeks) with an inadequate response, appropriate next steps are to switch to another antidepressant or to augment therapy. Electroconvulsive therapy is reserved for severe, refractory, psychotic, or emergent depression, and benzodiazepines do not treat the underlying disorder.",
    why: [
      "Correct: an adequate trial with minimal response warrants switching to a different antidepressant (or augmenting).",
      "Benzodiazepines are not a primary treatment for major depressive disorder and risk dependence.",
      "Stopping treatment abandons a still-symptomatic, functionally impaired patient.",
      "Electroconvulsive therapy is reserved for severe or refractory or emergent cases, not first-step management.",
      "Continuing an ineffective regimen unchanged for months leaves her depression inadequately treated."
    ]
  },
  {
    id: "s3-0147",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Alcohol use disorder maintenance pharmacotherapy",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 46-year-old man with alcohol use disorder completed medically supervised withdrawal and has been abstinent for 2 weeks. He is motivated to remain sober and asks about a medication to help prevent relapse. He has normal liver enzymes, takes no opioids, and has no contraindication to opioid-receptor antagonists.",
    lead: "Which of the following is the most appropriate maintenance pharmacotherapy?",
    options: [
      "Prescribe a standing long-term benzodiazepine.",
      "Start disulfiram without regard to adherence or motivation.",
      "Advise that no pharmacotherapy is ever helpful and offer counseling only.",
      "Restart a chlordiazepoxide taper for maintenance.",
      "Start naltrexone to reduce relapse, combined with counseling."
    ],
    answer: 4,
    exp: "For maintenance of alcohol use disorder in a motivated, abstinent patient, naltrexone (an opioid-receptor antagonist) is a first-line agent that reduces heavy drinking and relapse, and it works best combined with psychosocial support. Benzodiazepines are only for acute withdrawal, and disulfiram is reserved for select highly motivated, supervised patients.",
    why: [
      "Standing benzodiazepines are for acute withdrawal, not maintenance, and risk dependence.",
      "Disulfiram depends heavily on adherence and supervision and is not the best default first-line choice.",
      "Evidence clearly supports pharmacotherapy plus counseling; medication should not be dismissed.",
      "Repeating a withdrawal taper does not provide relapse-prevention maintenance therapy.",
      "Correct: naltrexone combined with counseling is a first-line maintenance therapy that reduces relapse."
    ]
  },
  {
    id: "s3-0148",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Average-risk colorectal cancer screening",
    difficulty: "easy",
    anchor: null,
    vignette: "A 50-year-old man presents for a wellness visit. He is asymptomatic, has no family history of colorectal cancer or polyps, and has no inflammatory bowel disease. He has never been screened for colorectal cancer and asks what preventive testing he should have.",
    lead: "Which of the following is the most appropriate recommendation?",
    options: [
      "No screening is needed until age 60.",
      "Begin colorectal cancer screening now with colonoscopy or a fecal immunochemical test.",
      "Screen only if he develops symptoms.",
      "Order an annual abdominal CT for screening.",
      "Recommend serum carcinoembryonic antigen (CEA) testing for screening."
    ],
    answer: 1,
    exp: "Average-risk adults should begin colorectal cancer screening in their mid-forties to age 50, and acceptable modalities include colonoscopy or a stool-based test such as the fecal immunochemical test. This asymptomatic, never-screened 50-year-old should start now. CEA and CT are not screening tools, and waiting for symptoms misses curable early cancers.",
    why: [
      "Screening should start now at average risk, not be delayed to age 60.",
      "Correct: an average-risk, unscreened 50-year-old should begin screening with colonoscopy or a fecal immunochemical test.",
      "Symptom-based testing detects cancer too late; screening targets asymptomatic disease.",
      "Abdominal CT is not a validated colorectal cancer screening test.",
      "CEA is a tumor marker for surveillance, not a screening test."
    ]
  },
  {
    id: "s3-0149",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Adolescent confidentiality for STI care",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 16-year-old sexually active girl comes to the clinic requesting testing and treatment for a possible sexually transmitted infection. She is worried and asks that her parents not be told. There is no evidence of abuse or coercion, and she demonstrates a clear understanding of her situation and the proposed care.",
    lead: "Which of the following is the most appropriate response?",
    options: [
      "Refuse to provide care until a parent consents.",
      "Inform her parents before providing any treatment.",
      "Provide confidential evaluation and treatment for the sexually transmitted infection.",
      "Report her to authorities for underage sexual activity.",
      "Defer all decisions to her parents' preferences."
    ],
    answer: 2,
    exp: "In most jurisdictions minors may consent confidentially to diagnosis and treatment of sexually transmitted infections, and preserving confidentiality encourages adolescents to seek needed care. Disclosure to parents against her wishes is not required here; breaking confidentiality would be justified only for a safety concern such as abuse or a specific legal mandate.",
    why: [
      "Requiring parental consent for STI care conflicts with laws that let minors consent confidentially.",
      "Informing parents against her wishes breaches confidentiality that the law generally protects for STI care.",
      "Correct: adolescents may confidentially consent to STI evaluation and treatment, which should be provided.",
      "Consensual adolescent sexual activity without abuse is not a mandated report.",
      "Deferring to parental preference disregards the minor's legal right to confidential STI care."
    ]
  },
  {
    id: "s3-0150",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Number needed to treat calculation",
    difficulty: "hard",
    anchor: "table",
    vignette: "A randomized trial evaluates a new preventive drug against placebo for a cardiovascular outcome over 5 years. The investigators report the proportion of patients in each group who experienced the primary event, and a clinician wants to summarize the treatment's benefit as the number needed to treat. The event rates are shown.\n\n| Group | Primary event rate |\n|---|---|\n| New drug | 8% |\n| Placebo (control) | 12% |",
    lead: "Which of the following values best represents the number needed to treat?",
    options: [
      "4",
      "8",
      "12",
      "25",
      "100"
    ],
    answer: 3,
    exp: "The absolute risk reduction is the control event rate minus the treatment event rate: 12% minus 8% equals 4%, or 0.04. The number needed to treat is the reciprocal of the absolute risk reduction: 1 divided by 0.04 equals 25. Thus 25 patients must be treated to prevent one additional primary event.",
    why: [
      "The value 4 is the absolute risk reduction expressed as a percentage, not the number needed to treat.",
      "The value 8 is the treatment-group event rate, not a measure of treatment benefit.",
      "The value 12 is the control-group event rate, not the number needed to treat.",
      "Correct: number needed to treat equals 1 divided by the absolute risk reduction (0.04), which is 25.",
      "The value 100 would result from mistakenly using the reciprocal of a 1% risk reduction."
    ]
  }
];
