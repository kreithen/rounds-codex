/*
 * Rounds Codex - USMLE Step 2 CK question bank, Batch 4 (25 items)
 * Blueprint-weighted, Medicine-heavy clinical mix. All vignettes original;
 * source used for facts only. Step 2 CK items are clinical: each ends in a
 * decision about diagnosis, next best step, pharmacotherapy, or prevention.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP2CK_B4 = [
  {
    id: "s2ck-0076",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Acute asthma exacerbation",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 24-year-old woman with asthma presents with 6 hours of worsening wheeze, cough, and breathlessness after a viral illness. She is speaking in short phrases and using accessory muscles. Diffuse expiratory wheezes are heard bilaterally. She has taken several albuterol puffs at home without relief.\n\n| Parameter | Value |\n|---|---|\n| Respiratory rate | 28/min |\n| Heart rate | 116/min |\n| Oxygen saturation | 92% on room air |\n| Peak expiratory flow | 48% of personal best |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Supplemental oxygen, inhaled short-acting beta-agonist with ipratropium, and systemic corticosteroids",
      "Empiric broad-spectrum antibiotics as first-line therapy",
      "Discharge with an as-needed albuterol inhaler and no further treatment",
      "Immediate endotracheal intubation",
      "Intravenous theophylline as the initial agent"
    ],
    answer: 0,
    exp: "A moderate-to-severe asthma exacerbation with accessory muscle use, tachypnea, hypoxemia, and a peak flow under 50% of best is treated with supplemental oxygen, repeated inhaled short-acting beta-agonists (often with ipratropium), and early systemic corticosteroids to reduce airway inflammation. Antibiotics are not routinely needed, and intubation is reserved for impending respiratory failure despite maximal therapy.",
    why: [
      "Correct: oxygen, inhaled bronchodilators (beta-agonist plus ipratropium), and systemic corticosteroids are first-line for a moderate-to-severe exacerbation.",
      "Most exacerbations are triggered by viruses or allergens, so empiric antibiotics are not first-line.",
      "The patient is hypoxemic with a markedly reduced peak flow and cannot be safely discharged untreated.",
      "Intubation is reserved for failure of medical therapy or impending respiratory arrest, not the initial step here.",
      "Theophylline is not a first-line agent and carries a narrow therapeutic window and toxicity risk."
    ]
  },
  {
    id: "s2ck-0077",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Acute aortic dissection",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 64-year-old man with long-standing poorly controlled hypertension presents with sudden severe, tearing chest pain radiating to the back between the scapulae. Blood pressure is 188/104 mm Hg in the right arm and 150/86 mm Hg in the left arm. He has a soft early diastolic murmur, and pulses are asymmetric.\n\n**[IMAGE: CT angiography of the chest showing an intimal flap in the ascending aorta extending into the arch (Stanford type A)]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Intravenous thrombolytic therapy",
      "Intravenous beta-blockade to lower heart rate and blood pressure, with emergent cardiothoracic surgical repair",
      "Discharge with outpatient CT follow-up in one month",
      "Intravenous sodium nitroprusside alone without rate control",
      "Full-dose heparin anticoagulation infusion"
    ],
    answer: 1,
    exp: "Sudden tearing chest pain radiating to the back with an interarm blood pressure differential, aortic regurgitation murmur, and an intimal flap involving the ascending aorta is a Stanford type A aortic dissection. Management is rapid impulse control with an intravenous beta-blocker to reduce heart rate and shear stress (target roughly below 60/min) followed by blood pressure control, and emergent surgical repair because ascending (type A) dissection is a surgical emergency. Thrombolytics and anticoagulation would be catastrophic.",
    why: [
      "Thrombolytics would worsen bleeding into the false lumen and are contraindicated in dissection.",
      "Correct: type A dissection requires intravenous beta-blockade to reduce aortic shear stress plus emergent surgical repair.",
      "An ascending aortic dissection is immediately life-threatening and cannot be managed as an outpatient.",
      "A vasodilator given before beta-blockade causes reflex tachycardia that increases aortic wall stress and propagation.",
      "Anticoagulation increases the risk of fatal hemorrhage and does not treat the dissection."
    ]
  },
  {
    id: "s2ck-0078",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Infective endocarditis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 32-year-old man who injects drugs presents with 5 days of fever, chills, and malaise. Temperature is 38.9 C. He has a new holosystolic murmur at the left lower sternal border, splinter hemorrhages under the nails, and nontender erythematous macules on the palms. He is hemodynamically stable.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate valve replacement surgery",
      "Discharge on oral antibiotics with outpatient follow-up",
      "Obtain three sets of blood cultures and echocardiography, then begin empiric intravenous antibiotics",
      "Start systemic anticoagulation to prevent embolization",
      "Obtain a single blood culture and observe off antibiotics"
    ],
    answer: 2,
    exp: "Fever with a new regurgitant murmur and peripheral stigmata (splinter hemorrhages, Janeway lesions) in a person who injects drugs is infective endocarditis. The next step is to draw at least three sets of blood cultures from separate sites and obtain echocardiography to identify vegetations, then start empiric intravenous antibiotics; cultures are drawn before antibiotics whenever the patient is stable so the pathogen can be identified. Surgery is reserved for specific complications such as heart failure or refractory infection.",
    why: [
      "Surgery is indicated for complications like refractory heart failure or abscess, not as the initial step in a stable patient.",
      "Endocarditis requires prolonged intravenous therapy; oral outpatient treatment is inadequate initially.",
      "Correct: obtain multiple blood cultures and echocardiography, then start empiric intravenous antibiotics.",
      "Anticoagulation does not prevent septic emboli and can cause hemorrhage into infarcts.",
      "A single culture is insufficient, and withholding antibiotics risks progression of a serious infection."
    ]
  },
  {
    id: "s2ck-0079",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Clostridioides difficile colitis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 74-year-old woman completed a course of clindamycin for a dental infection and now has 10 days of profuse watery diarrhea, lower abdominal cramping, and fever. She is tachycardic with diffuse abdominal tenderness. A stool nucleic acid amplification test is positive for Clostridioides difficile toxin gene.\n\n| Test | Value | Reference |\n|---|---|---|\n| White blood cells | 19,500/uL | 4,500-11,000 |\n| Creatinine | 1.9 mg/dL (baseline 0.8) | 0.6-1.2 |\n| Albumin | 2.6 g/dL | 3.5-5.0 |",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Continue clindamycin and add loperamide for symptom control",
      "Oral metronidazole as the preferred first-line agent",
      "Intravenous vancomycin",
      "Oral vancomycin and discontinuation of the inciting antibiotic",
      "No antimicrobial therapy and observation"
    ],
    answer: 3,
    exp: "Watery diarrhea with a positive C. difficile test after antibiotic exposure, plus leukocytosis above 15,000 and a rising creatinine, indicates severe C. difficile infection. Preferred treatment is oral vancomycin (or fidaxomicin), together with stopping the inciting antibiotic; oral metronidazole is now reserved for nonsevere disease when preferred agents are unavailable. Antimotility agents like loperamide are avoided because they can precipitate ileus and toxic megacolon.",
    why: [
      "Continuing the offending antibiotic perpetuates the infection, and loperamide risks ileus and toxic megacolon.",
      "Oral metronidazole is no longer preferred first-line and is inferior for severe disease.",
      "Intravenous vancomycin does not reach the colonic lumen; the oral route is required for luminal C. difficile.",
      "Correct: oral vancomycin plus stopping the inciting antibiotic is the treatment for severe C. difficile infection.",
      "Withholding therapy in symptomatic severe colitis risks progression to fulminant disease."
    ]
  },
  {
    id: "s2ck-0080",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Hyperosmolar hyperglycemic state",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 78-year-old man with type 2 diabetes is brought in after several days of increasing lethargy and confusion during a febrile illness with poor oral intake. He has very dry mucous membranes, poor skin turgor, and hypotension. He is arousable but disoriented, without Kussmaul respirations.\n\n| Test | Value | Reference |\n|---|---|---|\n| Glucose | 1080 mg/dL | 70-100 |\n| Serum osmolality | 355 mOsm/kg | 275-295 |\n| Serum bicarbonate | 20 mEq/L | 22-28 |\n| Serum ketones | small | negative |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Intravenous insulin bolus before any fluids",
      "Intravenous sodium bicarbonate",
      "Oral hypoglycemic agents",
      "Rapid correction of glucose to normal within one hour",
      "Aggressive isotonic intravenous fluid resuscitation, then an insulin infusion with potassium monitoring"
    ],
    answer: 4,
    exp: "Marked hyperglycemia with very high serum osmolality, minimal ketosis, near-normal bicarbonate, and profound dehydration with altered mental status defines the hyperosmolar hyperglycemic state. These patients have massive free-water and volume deficits, so the first priority is aggressive isotonic fluid resuscitation, followed by an insulin infusion once volume is being restored, with careful potassium repletion and gradual lowering of glucose and osmolality. Giving insulin before fluids can precipitate vascular collapse.",
    why: [
      "Insulin before volume resuscitation shifts fluid intracellularly and can cause circulatory collapse.",
      "Bicarbonate is not indicated; there is no severe acidosis in the hyperosmolar hyperglycemic state.",
      "Oral agents cannot correct a life-threatening hyperosmolar emergency.",
      "Overly rapid correction of glucose and osmolality risks cerebral edema; correction should be gradual.",
      "Correct: aggressive isotonic fluids first, then an insulin infusion with potassium monitoring, treat the hyperosmolar state."
    ]
  },
  {
    id: "s2ck-0081",
    system: "Internal Medicine",
    discipline: "Vascular Medicine",
    topic: "Lower extremity deep vein thrombosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 58-year-old woman returns from a 12-hour flight with 2 days of left calf pain and swelling. The left leg is warm with pitting edema, the calf circumference is 4 cm greater than the right, and there is tenderness along the deep venous system. She has no chest pain or dyspnea and is hemodynamically stable.\n\n**[IMAGE: compression ultrasonography of the left leg showing a noncompressible femoral vein with echogenic intraluminal thrombus]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Begin therapeutic anticoagulation, for example a direct oral anticoagulant",
      "Prescribe low-dose aspirin alone",
      "Place an inferior vena cava filter as first-line therapy",
      "Recommend graduated compression stockings without anticoagulation",
      "Order a D-dimer to determine whether treatment is needed"
    ],
    answer: 0,
    exp: "A noncompressible proximal vein with intraluminal thrombus on ultrasonography confirms an acute lower-extremity deep vein thrombosis. In a hemodynamically stable patient without contraindications, treatment is therapeutic anticoagulation, and a direct oral anticoagulant is a preferred first-line option. An inferior vena cava filter is reserved for patients in whom anticoagulation is contraindicated, and a D-dimer is not useful once imaging is already diagnostic.",
    why: [
      "Correct: a confirmed proximal DVT is treated with therapeutic anticoagulation such as a direct oral anticoagulant.",
      "Aspirin is insufficient anticoagulation for an acute deep vein thrombosis.",
      "An IVC filter is reserved for patients who cannot be anticoagulated, not as first-line therapy.",
      "Compression stockings help symptoms but do not treat the clot or prevent propagation and embolism.",
      "D-dimer is a rule-out test for low-probability cases; imaging has already confirmed the diagnosis."
    ]
  },
  {
    id: "s2ck-0082",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Primary hypothyroidism",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 45-year-old woman reports several months of fatigue, weight gain, cold intolerance, constipation, and dry skin. On examination she has coarse skin, mild bradycardia, and delayed relaxation of the ankle reflexes. There is no neck mass and she is hemodynamically stable.\n\n| Test | Value | Reference |\n|---|---|---|\n| TSH | 14.2 mU/L | 0.4-4.0 |\n| Free T4 | 0.5 ng/dL | 0.8-1.8 |",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Methimazole",
      "Levothyroxine replacement therapy",
      "Observation without treatment",
      "Liothyronine (T3) monotherapy",
      "Potassium iodide"
    ],
    answer: 1,
    exp: "An elevated TSH with a low free T4 and classic symptoms indicate overt primary hypothyroidism. The treatment is levothyroxine (synthetic T4) replacement, titrated to normalize the TSH. Antithyroid drugs and iodine treat hyperthyroidism and would be inappropriate, and T3 monotherapy is not recommended for standard replacement.",
    why: [
      "Methimazole blocks hormone synthesis and treats hyperthyroidism, the opposite problem.",
      "Correct: overt primary hypothyroidism is treated with levothyroxine to normalize the TSH.",
      "Overt hypothyroidism with symptoms and a low free T4 warrants treatment, not observation.",
      "T3 monotherapy is not standard replacement; levothyroxine (T4) provides steadier physiologic levels.",
      "Iodide is used in hyperthyroid states and does not treat hormone deficiency."
    ]
  },
  {
    id: "s2ck-0083",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Atrial fibrillation with rapid ventricular response",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 68-year-old man presents with palpitations and mild breathlessness for several hours. Blood pressure is 132/80 mm Hg and heart rate is about 140/min and irregularly irregular. He is alert and not in distress, with clear lungs and no chest pain.\n\n**[ECG: irregularly irregular rhythm with absent P waves and a narrow QRS at a ventricular rate near 140/min, consistent with atrial fibrillation with rapid ventricular response]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate synchronized direct-current cardioversion",
      "Intravenous adenosine",
      "Rate control with an intravenous beta-blocker or nondihydropyridine calcium channel blocker",
      "Intravenous thrombolytic therapy",
      "No treatment and reassurance"
    ],
    answer: 2,
    exp: "Atrial fibrillation with a rapid ventricular response in a hemodynamically stable patient is managed first with rate control using an intravenous beta-blocker or a nondihydropyridine calcium channel blocker (diltiazem or verapamil). Immediate electrical cardioversion is reserved for hemodynamic instability. Anticoagulation decisions are guided by stroke risk (CHA2DS2-VASc), and cardioversion of atrial fibrillation of uncertain duration requires attention to thromboembolic risk.",
    why: [
      "Emergent cardioversion is reserved for hemodynamically unstable atrial fibrillation, not a stable patient.",
      "Adenosine terminates AV-nodal reentrant tachycardias, not atrial fibrillation.",
      "Correct: stable atrial fibrillation with rapid response is managed with rate control using a beta-blocker or calcium channel blocker.",
      "Thrombolytics have no role in atrial fibrillation.",
      "A ventricular rate of 140/min with symptoms requires rate control, not observation alone."
    ]
  },
  {
    id: "s2ck-0084",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Vitamin B12 deficiency (pernicious anemia)",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 66-year-old woman with a history of autoimmune thyroid disease reports months of fatigue, a sore smooth tongue, and numbness and tingling in both feet with an unsteady gait. Examination shows conjunctival pallor, glossitis, and reduced vibration and position sense in the lower extremities.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 9.6 g/dL | 12-16 |\n| Mean corpuscular volume | 112 fL | 80-100 |\n| Vitamin B12 | 92 pg/mL | 200-900 |\n| Methylmalonic acid | markedly elevated | - |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Oral iron supplementation",
      "Folic acid supplementation alone",
      "Packed red blood cell transfusion",
      "Vitamin B12 (cobalamin) replacement",
      "Observation with repeat testing in 6 months"
    ],
    answer: 3,
    exp: "Macrocytic anemia with glossitis, a low B12 level, elevated methylmalonic acid, and neurologic findings of subacute combined degeneration indicate vitamin B12 deficiency, commonly from pernicious anemia in a patient with other autoimmune disease. Treatment is vitamin B12 (cobalamin) replacement, which corrects the anemia and can halt or reverse neurologic damage if started early. Folate alone can correct the anemia while allowing the neurologic deficits to progress, so it must not be substituted.",
    why: [
      "Iron deficiency causes microcytosis, not the macrocytic anemia and neurologic findings seen here.",
      "Folate alone can improve the blood counts but allows the neurologic degeneration of B12 deficiency to worsen.",
      "Transfusion is not needed for a stable, chronically anemic patient; treating the deficiency corrects it.",
      "Correct: vitamin B12 replacement treats the deficiency and can reverse the anemia and neurologic changes.",
      "Delaying treatment risks irreversible neurologic injury from ongoing B12 deficiency."
    ]
  },
  {
    id: "s2ck-0085",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Acute mesenteric ischemia",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 76-year-old man with atrial fibrillation not on anticoagulation develops sudden severe, diffuse abdominal pain. The pain is out of proportion to a soft, only mildly tender abdomen. He is tachycardic and has had one episode of bloody diarrhea.\n\n| Test | Value | Reference |\n|---|---|---|\n| Lactate | 5.8 mmol/L | 0.5-2.2 |\n| White blood cells | 21,000/uL | 4,500-11,000 |\n| Arterial pH | 7.28 | 7.35-7.45 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Reassurance and outpatient follow-up",
      "Oral proton pump inhibitor therapy",
      "Elective colonoscopy in several weeks",
      "Observation with serial examinations only",
      "Fluid resuscitation, broad-spectrum antibiotics, CT angiography, and urgent surgical/revascularization consultation"
    ],
    answer: 4,
    exp: "Sudden severe abdominal pain out of proportion to examination in an elderly patient with atrial fibrillation, plus lactic acidosis and leukocytosis, is classic for acute mesenteric ischemia, typically from an embolus to the superior mesenteric artery. Management is prompt resuscitation, broad-spectrum antibiotics, urgent CT angiography to confirm and localize the occlusion, and emergent surgical or endovascular revascularization with resection of any necrotic bowel. Delay leads to transmural infarction and death.",
    why: [
      "Reassurance would be fatal in a patient with bowel ischemia and lactic acidosis.",
      "A proton pump inhibitor does not address arterial occlusion and bowel ischemia.",
      "Elective colonoscopy delays treatment of a time-critical vascular emergency.",
      "Observation alone allows progression to bowel infarction and sepsis.",
      "Correct: mesenteric ischemia requires resuscitation, antibiotics, CT angiography, and urgent revascularization/surgery."
    ]
  },
  {
    id: "s2ck-0086",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Sigmoid volvulus",
    difficulty: "moderate",
    anchor: "image",
    vignette: "An 80-year-old nursing-home resident with chronic constipation presents with 2 days of progressive abdominal distension, cramping pain, and obstipation. The abdomen is markedly distended and tympanitic but soft, without peritoneal signs. He is afebrile and hemodynamically stable.\n\n**[IMAGE: abdominal radiograph showing a massively dilated inverted-U (coffee-bean) sigmoid loop projecting toward the right upper quadrant]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Endoscopic (sigmoidoscopic) detorsion with placement of a rectal decompression tube",
      "Immediate exploratory laparotomy as the first intervention",
      "Barium enema for definitive treatment",
      "Discharge with oral laxatives",
      "Broad-spectrum antibiotics alone"
    ],
    answer: 0,
    exp: "A dilated coffee-bean loop with obstipation and distension in an elderly, constipated patient is a sigmoid volvulus. In the absence of peritonitis or bowel compromise, the initial treatment is endoscopic detorsion (flexible sigmoidoscopy) with placement of a rectal tube, which relieves the obstruction and allows the bowel to decompress. Surgery is required if there is peritonitis, gangrene, failed decompression, or recurrence (elective sigmoidectomy is often planned after successful decompression).",
    why: [
      "Correct: uncomplicated sigmoid volvulus without peritonitis is first treated by endoscopic detorsion and rectal tube decompression.",
      "Immediate laparotomy is reserved for peritonitis, gangrene, or failed endoscopic decompression.",
      "A barium enema is not the treatment and risks perforation of a compromised, distended colon.",
      "Discharge with laxatives ignores a mechanical closed-loop obstruction that can strangulate.",
      "Antibiotics do not relieve the mechanical torsion causing the obstruction."
    ]
  },
  {
    id: "s2ck-0087",
    system: "Surgery",
    discipline: "Trauma/Burn Surgery",
    topic: "Major burn fluid resuscitation",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 30-year-old man is brought in after a house fire with deep partial- and full-thickness burns estimated at 40% of total body surface area over the trunk and both legs. He is alert with a patent airway and no stridor. Blood pressure is 106/70 mm Hg and heart rate is 118/min. Two large-bore intravenous lines are placed.",
    lead: "Which of the following is the most appropriate initial fluid management?",
    options: [
      "Intravenous colloid (albumin) as the sole resuscitation fluid in the first hours",
      "Lactated Ringer solution titrated by the Parkland formula, with half given over the first 8 hours",
      "Hypotonic 0.45% saline to replace free-water losses",
      "Packed red blood cell transfusion as the primary resuscitation fluid",
      "Oral rehydration solution alone"
    ],
    answer: 1,
    exp: "Large burns cause massive capillary leak and fluid losses, so early crystalloid resuscitation is essential. Isotonic lactated Ringer solution is given according to a weight- and burn-size-based estimate (the Parkland formula, about 4 mL/kg per percent TBSA over 24 hours), with half the calculated volume in the first 8 hours from the time of injury, titrated to a urine output of roughly 0.5 mL/kg/hr. Colloids, hypotonic fluids, and blood are not the appropriate first-line resuscitation fluid.",
    why: [
      "Colloid is not the initial resuscitation fluid; isotonic crystalloid is standard in the first hours.",
      "Correct: lactated Ringer by the Parkland estimate, half over the first 8 hours, titrated to urine output, is standard burn resuscitation.",
      "Hypotonic saline does not adequately restore intravascular volume in a burn patient.",
      "Blood is given for hemorrhage or anemia, not as primary volume resuscitation in acute burns.",
      "Oral rehydration is inadequate for the large intravascular losses of a major burn."
    ]
  },
  {
    id: "s2ck-0088",
    system: "Surgery",
    discipline: "Urology",
    topic: "Obstructing ureteral stone with infection",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 52-year-old woman presents with 8 hours of severe right flank pain radiating to the groin, nausea, and now shaking chills. Temperature is 39.1 C, heart rate 118/min, and blood pressure 96/60 mm Hg. There is marked right costovertebral angle tenderness, and urinalysis shows pyuria and bacteriuria.\n\n**[IMAGE: noncontrast CT showing a 9-mm obstructing stone at the right ureteropelvic junction with hydronephrosis]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Oral analgesics and outpatient follow-up",
      "Alpha-blocker therapy and discharge to pass the stone",
      "Intravenous fluids and antibiotics with emergent urologic decompression by ureteral stent or percutaneous nephrostomy",
      "Immediate shock-wave lithotripsy",
      "Increased oral fluid intake alone"
    ],
    answer: 2,
    exp: "An obstructing ureteral stone with fever, pyuria, and signs of sepsis is an infected, obstructed collecting system, a urologic emergency. Beyond fluids and antibiotics, the obstruction must be relieved emergently by decompression with a ureteral stent or percutaneous nephrostomy; definitive stone removal is deferred until the infection is controlled. Attempting outpatient stone passage or lithotripsy in the setting of infection risks overwhelming urosepsis.",
    why: [
      "Outpatient management of an infected, obstructed kidney risks fatal urosepsis.",
      "Expulsive therapy is appropriate for small uncomplicated stones, not an infected obstruction.",
      "Correct: infected obstruction requires fluids, antibiotics, and emergent decompression with a stent or nephrostomy.",
      "Lithotripsy is contraindicated with active infection and does not relieve the obstruction promptly.",
      "Oral fluids alone do not relieve the obstruction or treat the sepsis."
    ]
  },
  {
    id: "s2ck-0089",
    system: "Pediatrics",
    discipline: "Pediatric Orthopedics",
    topic: "Developmental dysplasia of the hip",
    difficulty: "easy",
    anchor: null,
    vignette: "A newborn girl born in the frank breech position is examined on the second day of life. During the hip examination there is a palpable clunk as the examiner abducts and lifts the flexed hip (positive Ortolani), and the thigh skinfolds are asymmetric. She is otherwise well.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Plain hip radiographs now for diagnosis",
      "Reassurance that the findings will resolve without evaluation",
      "Immediate surgical reduction",
      "Confirm with hip ultrasonography and treat with a Pavlik harness if dysplasia is confirmed",
      "Application of a hip spica cast"
    ],
    answer: 3,
    exp: "A positive Ortolani sign with a breech history and asymmetric skinfolds suggests developmental dysplasia of the hip. In an infant under about 6 months, the femoral head is largely cartilaginous, so ultrasonography (not radiography) is the imaging study of choice to confirm the diagnosis, and confirmed cases are treated with a Pavlik harness to hold the hips reduced. Radiographs are useful only after the femoral head ossifies around 4 to 6 months.",
    why: [
      "Radiographs are unreliable in the newborn because the femoral head is not yet ossified.",
      "A positive Ortolani sign is abnormal and requires evaluation, not reassurance.",
      "Surgery is reserved for cases that fail bracing or present late, not initial newborn management.",
      "Correct: confirm with ultrasonography and treat confirmed dysplasia with a Pavlik harness.",
      "A spica cast is used for late or failed cases, not first-line for a newborn."
    ]
  },
  {
    id: "s2ck-0090",
    system: "Pediatrics",
    discipline: "Pediatric Nephrology",
    topic: "Childhood nephrotic syndrome (minimal change disease)",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 4-year-old boy is brought in with 5 days of progressive puffiness around the eyes and swelling of the legs and abdomen. Blood pressure is normal for age and he is well-appearing. There is periorbital edema, pitting lower-extremity edema, and mild ascites, without rash or hematuria.\n\n| Test | Value | Reference |\n|---|---|---|\n| Urine protein | 4+ | negative |\n| Serum albumin | 1.8 g/dL | 3.5-5.0 |\n| Creatinine | normal for age | - |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Renal biopsy before any treatment",
      "Long-term angiotensin-converting enzyme inhibitor as sole therapy",
      "Broad-spectrum antibiotics",
      "Loop diuretics alone without other therapy",
      "Empiric oral corticosteroids (prednisone)"
    ],
    answer: 4,
    exp: "Heavy proteinuria, hypoalbuminemia, and generalized edema with normal blood pressure and renal function in a young child is nephrotic syndrome, most often minimal change disease at this age. Because minimal change disease is highly steroid-responsive, the standard approach is empiric oral corticosteroids without an initial biopsy. Renal biopsy is reserved for atypical features (older age, hematuria, hypertension, renal insufficiency) or steroid resistance.",
    why: [
      "Biopsy is reserved for atypical presentations or steroid resistance, not first-line in a typical young child.",
      "An ACE inhibitor reduces proteinuria as an adjunct but does not induce remission of minimal change disease.",
      "Antibiotics do not treat the underlying glomerular disease, though infection is a recognized complication.",
      "Diuretics ease edema symptomatically but do not treat the underlying nephrotic process.",
      "Correct: typical childhood nephrotic syndrome is treated with empiric corticosteroids because minimal change disease is steroid-responsive."
    ]
  },
  {
    id: "s2ck-0091",
    system: "Pediatrics",
    discipline: "Pediatric Hematology-Oncology",
    topic: "Acute lymphoblastic leukemia",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 5-year-old boy has 3 weeks of increasing fatigue, pallor, and easy bruising, with intermittent bone pain and low-grade fevers. Examination reveals scattered petechiae, cervical lymphadenopathy, and hepatosplenomegaly.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 7.2 g/dL | 11.5-15.5 |\n| Platelets | 28,000/uL | 150,000-400,000 |\n| White blood cells | 42,000/uL with circulating blasts | 5,000-15,000 |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Immune thrombocytopenic purpura",
      "Aplastic anemia",
      "Juvenile idiopathic arthritis",
      "Acute lymphoblastic leukemia",
      "Infectious mononucleosis"
    ],
    answer: 3,
    exp: "Pancytopenia in the red cell and platelet lines with a high white count containing circulating blasts, plus bone pain, lymphadenopathy, and hepatosplenomegaly in a young child, is characteristic of acute lymphoblastic leukemia, the most common childhood malignancy. The diagnosis is confirmed by bone marrow examination showing lymphoblasts. The combination of blasts and organ infiltration distinguishes it from the other cytopenia syndromes.",
    why: [
      "Immune thrombocytopenic purpura causes isolated thrombocytopenia, not anemia with blasts and organomegaly.",
      "Aplastic anemia produces pancytopenia without blasts, organomegaly, or lymphadenopathy.",
      "Juvenile idiopathic arthritis causes joint inflammation, not blasts and marrow failure.",
      "Correct: cytopenias with circulating blasts, bone pain, and organomegaly in a child indicate acute lymphoblastic leukemia.",
      "Mononucleosis causes atypical lymphocytes and adenopathy but not blasts with anemia and thrombocytopenia."
    ]
  },
  {
    id: "s2ck-0092",
    system: "Pediatrics",
    discipline: "Pediatric Infectious Disease",
    topic: "Pertussis (whooping cough)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 7-month-old incompletely vaccinated infant has 2 weeks of worsening cough that now comes in severe paroxysms, sometimes ending in an inspiratory whooping sound and post-tussive vomiting. Between spells the infant appears relatively well and is afebrile. A sibling recently had a prolonged cough.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Supportive care only with no antibiotics",
      "A macrolide antibiotic such as azithromycin",
      "Oral amoxicillin",
      "Systemic corticosteroids",
      "Inhaled bronchodilators as definitive therapy"
    ],
    answer: 1,
    exp: "Paroxysmal cough with an inspiratory whoop and post-tussive emesis in an undervaccinated infant with a sick contact indicates pertussis (Bordetella pertussis). Treatment is a macrolide antibiotic (azithromycin is preferred, especially in young infants), which reduces transmission and can shorten illness when given early. Close contacts should receive post-exposure macrolide prophylaxis regardless of vaccination status.",
    why: [
      "Antibiotics reduce transmissibility and are indicated; supportive care alone misses this benefit.",
      "Correct: pertussis is treated with a macrolide such as azithromycin, which also limits spread.",
      "Amoxicillin does not adequately cover Bordetella pertussis.",
      "Corticosteroids are not established therapy for pertussis.",
      "Bronchodilators do not treat the infection and are not definitive therapy."
    ]
  },
  {
    id: "s2ck-0093",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Placenta previa",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 29-year-old woman at 32 weeks gestation presents with a sudden episode of painless bright red vaginal bleeding that has now slowed. She has no abdominal pain or uterine tenderness, and the uterus is soft. The fetal heart tracing is reassuring and she is hemodynamically stable.\n\n**[IMAGE: transabdominal ultrasound showing the placenta completely covering the internal cervical os]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate digital cervical examination to assess dilation",
      "Induction of labor for vaginal delivery",
      "Avoid digital vaginal examination; admit for monitoring and plan cesarean delivery",
      "Discharge home with reassurance",
      "Administer oxytocin to augment contractions"
    ],
    answer: 2,
    exp: "Painless third-trimester bleeding with the placenta covering the internal os is placenta previa. Digital vaginal examination is contraindicated because it can provoke catastrophic hemorrhage. Management of a stable patient is admission for maternal and fetal monitoring, and delivery is by cesarean section because the placenta obstructs the birth canal; antenatal corticosteroids are given if preterm delivery is anticipated.",
    why: [
      "Digital examination can precipitate massive hemorrhage in placenta previa and is contraindicated.",
      "Vaginal delivery is unsafe when the placenta covers the cervical os.",
      "Correct: avoid digital examination, admit for monitoring, and plan cesarean delivery for placenta previa.",
      "Painless bleeding from previa requires admission and monitoring, not discharge.",
      "Oxytocin-driven contractions would worsen bleeding from the previa."
    ]
  },
  {
    id: "s2ck-0094",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Shoulder dystocia",
    difficulty: "hard",
    anchor: null,
    vignette: "A 31-year-old woman with gestational diabetes is delivering a large-for-gestational-age infant. After the head delivers it retracts tightly against the perineum (turtle sign), and the anterior shoulder fails to deliver with gentle downward traction. The fetal heart rate remains stable at this moment.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Apply fundal pressure to push the fetus out",
      "Proceed directly to emergency cesarean delivery",
      "Apply strong downward traction on the fetal head",
      "Perform the McRoberts maneuver with suprapubic pressure",
      "Cut the umbilical cord immediately"
    ],
    answer: 3,
    exp: "Retraction of the delivered head with failure of the anterior shoulder to deliver is shoulder dystocia, an obstetric emergency from impaction of the anterior shoulder behind the pubic symphysis. The first maneuvers are McRoberts (sharp hyperflexion of the maternal hips) combined with suprapubic pressure, which frees the shoulder in most cases. Fundal pressure and excessive traction are avoided because they worsen impaction and cause brachial plexus injury.",
    why: [
      "Fundal pressure worsens impaction of the shoulder against the symphysis and can cause injury.",
      "Cesarean is not the immediate maneuver when the head has already delivered; specific maneuvers are performed first.",
      "Strong traction on the head risks brachial plexus injury and does not relieve the impaction.",
      "Correct: the McRoberts maneuver with suprapubic pressure is the first-line response to shoulder dystocia.",
      "Cutting the cord does not relieve the dystocia and would compromise the fetus."
    ]
  },
  {
    id: "s2ck-0095",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Uterine leiomyomata",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 41-year-old woman reports several months of progressively heavier, prolonged menstrual periods with pelvic pressure and urinary frequency. On examination the uterus is enlarged, firm, irregular, and mobile. A pregnancy test is negative and she is not anemic on point-of-care testing.\n\n**[IMAGE: pelvic ultrasound showing multiple well-circumscribed hypoechoic intramural masses distorting the uterine contour]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Adenomyosis",
      "Endometrial carcinoma",
      "Ovarian malignancy",
      "Intrauterine pregnancy",
      "Uterine leiomyomata (fibroids)"
    ],
    answer: 4,
    exp: "Heavy, prolonged menses with pelvic pressure and an enlarged, firm, irregularly contoured, mobile uterus, plus well-circumscribed intramural masses on ultrasonography, is characteristic of uterine leiomyomata (fibroids). Fibroids are the most common pelvic tumors in reproductive-age women. The irregular, lumpy uterine contour distinguishes them from the diffusely enlarged, boggy uterus of adenomyosis.",
    why: [
      "Adenomyosis causes a diffusely enlarged, tender, boggy uterus rather than discrete circumscribed masses.",
      "Endometrial carcinoma typically causes postmenopausal or irregular bleeding with a thickened endometrium, not a lumpy myomatous uterus.",
      "An ovarian tumor would appear as an adnexal mass, not intramural uterine masses distorting the contour.",
      "The negative pregnancy test excludes an intrauterine pregnancy.",
      "Correct: an enlarged irregular uterus with well-circumscribed intramural masses indicates uterine leiomyomata."
    ]
  },
  {
    id: "s2ck-0096",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Group B Streptococcus intrapartum prophylaxis",
    difficulty: "easy",
    anchor: null,
    vignette: "A 27-year-old woman at 39 weeks gestation is admitted in active labor. Her routine rectovaginal culture at 37 weeks was positive for group B Streptococcus. She has no drug allergies, membranes have just ruptured, and both mother and fetus are stable.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Intravenous penicillin during labor",
      "Oral amoxicillin now with delivery deferred",
      "Cesarean delivery to prevent transmission",
      "No treatment because she is asymptomatic",
      "Treat only if the newborn develops fever after birth"
    ],
    answer: 0,
    exp: "A positive antenatal group B Streptococcus culture is an indication for intrapartum antibiotic prophylaxis to prevent early-onset neonatal GBS disease. The recommended regimen is intravenous penicillin (or ampicillin) given during labor, ideally at least 4 hours before delivery. Cesarean delivery is not indicated solely for GBS colonization, and waiting until the newborn is ill forgoes the preventive benefit.",
    why: [
      "Correct: a GBS-positive mother in labor receives intravenous penicillin for intrapartum prophylaxis.",
      "Oral antibiotics before labor do not provide effective intrapartum prophylaxis, which must be given during labor.",
      "Cesarean delivery is not indicated for GBS colonization alone.",
      "Prophylaxis is indicated despite the mother being asymptomatic, to protect the neonate.",
      "Prophylaxis is given intrapartum to prevent disease, not withheld until the neonate becomes ill."
    ]
  },
  {
    id: "s2ck-0097",
    system: "Psychiatry",
    discipline: "Adult Psychiatry",
    topic: "Generalized anxiety disorder",
    difficulty: "easy",
    anchor: null,
    vignette: "A 35-year-old woman reports about 8 months of excessive, hard-to-control worry about her job, finances, family, and health on most days. She feels restless and keyed up, tires easily, has trouble concentrating, and describes muscle tension and poor sleep. Physical examination and thyroid studies are normal.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Panic disorder",
      "Generalized anxiety disorder",
      "Major depressive disorder",
      "Adjustment disorder",
      "Hyperthyroidism"
    ],
    answer: 1,
    exp: "Excessive, difficult-to-control worry about multiple domains occurring on most days for at least 6 months, accompanied by symptoms such as restlessness, fatigue, poor concentration, muscle tension, and sleep disturbance, defines generalized anxiety disorder. A normal examination and thyroid studies exclude a medical mimic. First-line treatment is an SSRI or SNRI together with cognitive behavioral therapy.",
    why: [
      "Panic disorder is defined by recurrent discrete panic attacks, not chronic pervasive worry.",
      "Correct: chronic excessive worry across multiple domains for at least 6 months with associated symptoms defines generalized anxiety disorder.",
      "Major depression centers on low mood and anhedonia rather than pervasive anxious worry.",
      "Adjustment disorder follows an identifiable stressor and does not persist as chronic free-floating worry.",
      "Normal thyroid studies exclude hyperthyroidism as the cause."
    ]
  },
  {
    id: "s2ck-0098",
    system: "Psychiatry",
    discipline: "Adult Psychiatry",
    topic: "Post-traumatic stress disorder",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 29-year-old veteran presents 4 months after a roadside explosion in which a comrade died. He has intrusive memories and nightmares of the event, avoids driving and crowded places that remind him of it, is irritable and hypervigilant, startles easily, and sleeps poorly. The symptoms impair his work and relationships.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Long-term benzodiazepine monotherapy",
      "An antipsychotic as monotherapy",
      "Trauma-focused psychotherapy together with an SSRI or SNRI",
      "No treatment because symptoms will resolve on their own",
      "A beta-blocker as definitive long-term therapy"
    ],
    answer: 2,
    exp: "Intrusive re-experiencing, avoidance, negative mood, and hyperarousal persisting beyond a month after a traumatic event with functional impairment define post-traumatic stress disorder. First-line treatment combines trauma-focused psychotherapy (such as prolonged exposure or cognitive processing therapy) with an SSRI or SNRI. Benzodiazepines are avoided because they can worsen outcomes and carry dependence risk, and antipsychotic monotherapy is not first-line.",
    why: [
      "Benzodiazepines are not recommended in PTSD; they can impair recovery and cause dependence.",
      "Antipsychotic monotherapy is not first-line therapy for PTSD.",
      "Correct: trauma-focused psychotherapy plus an SSRI or SNRI is first-line treatment for PTSD.",
      "Persistent, impairing PTSD symptoms warrant treatment rather than watchful waiting.",
      "A beta-blocker is not established as definitive long-term therapy for PTSD."
    ]
  },
  {
    id: "s2ck-0099",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Abdominal aortic aneurysm screening",
    difficulty: "easy",
    anchor: null,
    vignette: "A 68-year-old man presents for a routine visit. He smoked a pack of cigarettes daily for 30 years and quit 5 years ago. He is asymptomatic with a normal abdominal examination and no known vascular disease. He asks whether he needs any special screening tests for his age and history.",
    lead: "Which of the following is the most appropriate screening recommendation?",
    options: [
      "One-time abdominal ultrasonography to screen for abdominal aortic aneurysm",
      "Annual abdominal CT scans",
      "No abdominal screening is indicated",
      "Screening abdominal palpation only, without imaging",
      "Screen only if he develops abdominal pain"
    ],
    answer: 0,
    exp: "Men aged 65 to 75 years who have ever smoked should undergo a one-time screening abdominal ultrasound for abdominal aortic aneurysm, because early detection allows monitoring and elective repair before rupture. Ultrasonography is accurate, inexpensive, and free of radiation. Routine annual CT scanning and physical examination alone are not the recommended screening approach for asymptomatic men.",
    why: [
      "Correct: a one-time abdominal ultrasound is recommended to screen men 65-75 who have ever smoked for an aortic aneurysm.",
      "Annual CT screening is not recommended and adds unnecessary radiation and cost.",
      "This patient meets criteria (male, 65-75, ever-smoker), so screening is indicated.",
      "Physical examination is insensitive for detecting abdominal aortic aneurysms.",
      "Screening is meant to detect the aneurysm before symptoms such as pain, which often signal rupture."
    ]
  },
  {
    id: "s2ck-0100",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Decision-making capacity assessment",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 70-year-old man with early-stage gangrene of a toe is advised to undergo amputation but declines, saying he would rather risk the consequences than lose part of his foot. He is not delirious, understands his diagnosis and the risks of refusing, expresses consistent reasoning tied to his values, and communicates a clear and stable choice.",
    lead: "Which of the following is the most appropriate course of action?",
    options: [
      "Override his decision and proceed with surgery in his best interest",
      "Obtain a court order to declare him incompetent",
      "Immediately transfer decision-making to his next of kin",
      "Administer sedation and perform the amputation",
      "Assess his decision-making capacity for this specific decision and, if intact, respect his informed refusal"
    ],
    answer: 4,
    exp: "A capable adult may refuse even life- or limb-saving treatment. Decision-making capacity is decision-specific and rests on four abilities: understanding the relevant information, appreciating how it applies to oneself, reasoning about the options, and communicating a stable choice. This patient demonstrates all four, so his refusal should be respected after ensuring he is fully informed; overriding him or invoking surrogates or the courts violates his autonomy when capacity is intact.",
    why: [
      "Overriding a capable patient's refusal violates his autonomy and the right to refuse treatment.",
      "A court order is unnecessary and inappropriate when the patient clearly retains capacity.",
      "Surrogate decision-making applies only when the patient lacks capacity, which is not the case here.",
      "Sedating a capable, refusing patient to operate would be battery.",
      "Correct: assess capacity for this decision and, because he meets all four criteria, respect his informed refusal."
    ]
  }
];
