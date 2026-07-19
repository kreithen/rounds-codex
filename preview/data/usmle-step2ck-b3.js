/*
 * Rounds Codex - USMLE Step 2 CK question bank, Batch 3 (25 items)
 * Blueprint-weighted, Medicine-heavy clinical mix. All vignettes original;
 * source used for facts only. Step 2 CK items are clinical: each ends in a
 * decision about diagnosis, next best step, pharmacotherapy, or prevention.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP2CK_B3 = [
  {
    id: "s2ck-0051",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Community-acquired pneumonia (outpatient)",
    difficulty: "easy",
    anchor: "image",
    vignette: "A previously healthy 45-year-old man presents with 3 days of productive cough with rust-colored sputum, fever, and pleuritic right-sided chest pain. Temperature is 38.6 C, heart rate 92/min, blood pressure 128/78 mm Hg, and oxygen saturation 96% on room air. There are focal crackles and bronchial breath sounds over the right lower lung field. He is alert, has no comorbidities, and his CURB-65 score is 0.\n\n**[IMAGE: chest radiograph showing dense right lower lobe consolidation with air bronchograms]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Outpatient treatment with an oral antibiotic such as amoxicillin or doxycycline",
      "Admission to the intensive care unit for vasopressor support",
      "Withhold antibiotics until sputum culture results return",
      "Oseltamivir alone without antibacterial therapy",
      "CT pulmonary angiography to exclude pulmonary embolism"
    ],
    answer: 0,
    exp: "Lobar consolidation with fever, productive cough, and focal crackles in a healthy patient with a CURB-65 score of 0 is low-risk community-acquired pneumonia that can be treated as an outpatient. First-line empiric therapy for a previously healthy adult without comorbidities is oral amoxicillin, doxycycline, or a macrolide. Antibiotics are started empirically and should not await culture results.",
    why: [
      "Correct: low-risk community-acquired pneumonia (CURB-65 of 0) is treated with empiric oral antibiotics as an outpatient.",
      "ICU admission is reserved for severe pneumonia with shock or respiratory failure, not this stable presentation.",
      "Empiric antibiotics should begin promptly; delaying for cultures worsens outcomes.",
      "Oseltamivir treats influenza but does not cover the bacterial pathogens causing lobar consolidation.",
      "The clinical picture and radiograph indicate pneumonia, not pulmonary embolism, so CTPA is unnecessary."
    ]
  },
  {
    id: "s2ck-0052",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Non-ST-elevation acute coronary syndrome",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 62-year-old man with diabetes and hypertension has 40 minutes of pressure-like substernal chest pain radiating to the left arm that began at rest and has not fully resolved. He is diaphoretic. Blood pressure is 148/86 mm Hg. The initial high-sensitivity troponin is elevated.\n\n**[ECG: 1.5 mm horizontal ST-segment depression and T-wave inversions in leads V4 through V6, without ST-segment elevation]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate intravenous fibrinolytic therapy",
      "Aspirin, a P2Y12 inhibitor, anticoagulation, and admission for early coronary angiography",
      "Discharge home with an outpatient stress test in one month",
      "Oral nifedipine monotherapy and discharge",
      "Reassurance that this is noncardiac chest pain"
    ],
    answer: 1,
    exp: "Rest angina with ST depression, T-wave inversion, and an elevated troponin but no ST elevation defines non-ST-elevation acute coronary syndrome. Management is dual antiplatelet therapy (aspirin plus a P2Y12 inhibitor), anticoagulation, anti-ischemic therapy, and admission for risk stratification with early invasive coronary angiography. Fibrinolytics are not used in NSTE-ACS because they do not improve outcomes and increase bleeding.",
    why: [
      "Fibrinolytic therapy is indicated in STEMI, not NSTE-ACS, where it is harmful.",
      "Correct: NSTE-ACS is treated with dual antiplatelet therapy, anticoagulation, and admission for early coronary angiography.",
      "Ongoing rest pain with a positive troponin requires admission, not outpatient testing.",
      "A calcium channel blocker alone does not address the thrombotic process or provide risk stratification.",
      "An elevated troponin with ischemic ECG changes is diagnostic of a cardiac event, not noncardiac pain."
    ]
  },
  {
    id: "s2ck-0053",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Acute decompensated heart failure",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 70-year-old woman with known heart failure with reduced ejection fraction presents with 2 days of worsening dyspnea, orthopnea, and paroxysmal nocturnal dyspnea after dietary indiscretion. Blood pressure is 156/92 mm Hg and oxygen saturation is 90% on room air. She has jugular venous distension, bibasilar crackles, and pitting lower-extremity edema.\n\n**[IMAGE: chest radiograph showing cardiomegaly, cephalizaton of pulmonary vessels, Kerley B lines, and bilateral interstitial edema]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Aggressive intravenous isotonic fluid bolus",
      "Start a nondihydropyridine calcium channel blocker infusion",
      "Intravenous loop diuretic such as furosemide with supplemental oxygen",
      "Immediate systemic thrombolysis",
      "Begin a high-dose beta-blocker acutely"
    ],
    answer: 2,
    exp: "Dyspnea, orthopnea, elevated jugular venous pressure, crackles, and edema with radiographic pulmonary congestion indicate acute decompensated heart failure from volume overload. The mainstay of acute treatment is an intravenous loop diuretic to remove excess fluid, along with supplemental oxygen and, when blood pressure allows, vasodilators. Fluids would worsen congestion, and beta-blockers should not be up-titrated during acute decompensation.",
    why: [
      "A fluid bolus would worsen pulmonary edema in a volume-overloaded patient.",
      "Nondihydropyridine calcium channel blockers are negative inotropes and can worsen systolic heart failure.",
      "Correct: intravenous loop diuretics plus oxygen relieve the congestion of acute decompensated heart failure.",
      "Thrombolysis has no role in decompensated heart failure without an acute coronary or embolic event.",
      "Starting or up-titrating a beta-blocker during acute decompensation can further reduce cardiac output."
    ]
  },
  {
    id: "s2ck-0054",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Thyroid storm",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 34-year-old woman with Graves disease who stopped her methimazole presents after a urinary tract infection with agitation, confusion, and vomiting. Temperature is 40.1 C, heart rate is 148/min in atrial fibrillation, and blood pressure is 158/70 mm Hg. She is tremulous and diaphoretic.\n\n| Test | Value | Reference |\n|---|---|---|\n| TSH | < 0.01 mU/L | 0.4-4.0 |\n| Free T4 | 6.8 ng/dL | 0.8-1.8 |",
    lead: "Which of the following is the most appropriate treatment approach?",
    options: [
      "Give iodine (Lugol solution) first, then a thionamide one hour later",
      "Levothyroxine replacement therapy",
      "Radioactive iodine ablation now",
      "Propranolol, propylthiouracil, iodine given after the thionamide, and glucocorticoids",
      "Aspirin for temperature control"
    ],
    answer: 3,
    exp: "Fever, tachyarrhythmia, agitation, and gastrointestinal symptoms with markedly elevated free T4 and suppressed TSH after a precipitant indicate thyroid storm. Treatment combines a beta-blocker (propranolol) for adrenergic symptoms, a thionamide (propylthiouracil) to block hormone synthesis, iodine given at least an hour after the thionamide to block hormone release, and glucocorticoids to reduce peripheral T4-to-T3 conversion. Iodine before a thionamide can paradoxically fuel new hormone synthesis, and aspirin displaces thyroid hormone from binding proteins and should be avoided.",
    why: [
      "Iodine given before a thionamide can be used as substrate for new hormone synthesis and worsen the storm.",
      "Levothyroxine would add thyroid hormone to a patient already in thyroid storm.",
      "Radioactive iodine ablation is a definitive outpatient therapy, not acute management of storm.",
      "Correct: propranolol, propylthiouracil, iodine after the thionamide, and glucocorticoids together treat thyroid storm.",
      "Aspirin displaces thyroid hormone from binding proteins and can raise free hormone levels."
    ]
  },
  {
    id: "s2ck-0055",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Hypertensive emergency",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 55-year-old man with poorly controlled hypertension presents with a severe headache, blurred vision, and confusion. Blood pressure is 224/128 mm Hg in both arms. Funduscopy shows retinal hemorrhages and papilledema.\n\n| Test | Value | Reference |\n|---|---|---|\n| Creatinine | 2.3 mg/dL | 0.6-1.2 |\n| Urinalysis | proteinuria and hematuria | negative |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Rapidly normalize the blood pressure within minutes",
      "Prescribe an oral agent and discharge with follow-up next week",
      "Give sublingual short-acting nifedipine to drop the pressure quickly",
      "Withhold treatment until a second reading confirms the value",
      "Admit for a titratable intravenous antihypertensive, lowering the mean arterial pressure by no more than about 25% in the first hour"
    ],
    answer: 4,
    exp: "Severe hypertension with acute end-organ damage (encephalopathy, retinopathy with papilledema, and acute kidney injury) is a hypertensive emergency. It requires admission and a titratable intravenous antihypertensive with careful, controlled lowering of the mean arterial pressure by roughly 10 to 25 percent in the first hour. Reducing pressure too abruptly can cause cerebral, coronary, or renal hypoperfusion and ischemia.",
    why: [
      "Rapid normalization risks cerebral, cardiac, and renal ischemia from abrupt hypoperfusion.",
      "Acute end-organ damage requires inpatient intravenous therapy, not outpatient oral management.",
      "Short-acting sublingual nifedipine causes uncontrolled precipitous drops and is not recommended.",
      "End-organ injury is already present, so treatment must not be delayed.",
      "Correct: a hypertensive emergency is managed with a titratable IV agent and a controlled reduction of about 25% in the first hour."
    ]
  },
  {
    id: "s2ck-0056",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Upper gastrointestinal bleeding from peptic ulcer",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 60-year-old man who takes daily naproxen for arthritis presents with two episodes of coffee-ground emesis and black tarry stools. He is pale. Heart rate is 112/min and blood pressure is 98/62 mm Hg with orthostatic changes. There is mild epigastric tenderness and the rectal examination reveals melena.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 8.1 g/dL | 13.5-17.5 |\n| BUN | 42 mg/dL | 7-20 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate exploratory laparotomy",
      "Oral iron supplementation and outpatient follow-up",
      "Barium swallow radiographic study",
      "Initiate warfarin anticoagulation",
      "Intravenous fluid resuscitation, a proton pump inhibitor infusion, and urgent upper endoscopy"
    ],
    answer: 4,
    exp: "Hematemesis and melena with anemia, tachycardia, hypotension, and an elevated BUN indicate an upper gastrointestinal bleed, most likely an NSAID-related peptic ulcer. The priorities are hemodynamic resuscitation with intravenous fluids (and blood as needed), an intravenous proton pump inhibitor, and urgent upper endoscopy for diagnosis and hemostasis. Surgery is reserved for bleeding that cannot be controlled endoscopically.",
    why: [
      "Laparotomy is reserved for uncontrollable or endoscopically refractory bleeding, not initial management.",
      "Oral iron and outpatient care are inadequate for an actively bleeding, hemodynamically unstable patient.",
      "A barium study can obscure endoscopic visualization and does not treat the bleeding.",
      "Anticoagulation would worsen an active hemorrhage.",
      "Correct: resuscitation, an intravenous proton pump inhibitor, and urgent endoscopy are the standard approach to upper GI bleeding."
    ]
  },
  {
    id: "s2ck-0057",
    system: "Internal Medicine",
    discipline: "Hepatology",
    topic: "Hepatic encephalopathy",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 58-year-old man with cirrhosis is brought in by family for 2 days of increasing confusion, day-night reversal, and lethargy. He recently became constipated. On examination he is disoriented and has asterixis of the outstretched hands, with scleral icterus and ascites. There are no focal neurologic deficits.\n\n| Test | Value | Reference |\n|---|---|---|\n| Ammonia | 128 mcmol/L | 11-35 |\n| Bilirubin | 4.2 mg/dL | 0.1-1.2 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Lactulose to lower ammonia while identifying and treating the precipitating factor",
      "Permanent restriction of all dietary protein",
      "High-dose benzodiazepines for agitation",
      "Emergent liver transplantation as the first step",
      "Withhold treatment and observe overnight"
    ],
    answer: 0,
    exp: "Confusion with asterixis and an elevated ammonia in a cirrhotic patient indicates hepatic encephalopathy, here precipitated by constipation. First-line therapy is lactulose to increase ammonia elimination, titrated to produce several soft stools daily, along with a search for and correction of precipitants such as constipation, infection, or gastrointestinal bleeding. Rifaximin is added if lactulose alone is insufficient.",
    why: [
      "Correct: lactulose lowers ammonia and treating the precipitant (constipation) is central to managing hepatic encephalopathy.",
      "Prolonged protein restriction worsens malnutrition and is not recommended; adequate protein is maintained.",
      "Benzodiazepines can precipitate or worsen encephalopathy and depress consciousness further.",
      "Transplantation is not an acute intervention for a reversible, precipitant-driven episode.",
      "Observation alone allows a treatable encephalopathy to progress."
    ]
  },
  {
    id: "s2ck-0058",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Prerenal acute kidney injury",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 76-year-old woman presents after 3 days of vomiting and diarrhea from a viral illness with reduced urine output and lightheadedness. She takes lisinopril. Blood pressure is 96/58 mm Hg with dry mucous membranes and poor skin turgor. Her baseline creatinine was 0.9 mg/dL.\n\n| Test | Value | Reference |\n|---|---|---|\n| BUN | 64 mg/dL | 7-20 |\n| Creatinine | 2.4 mg/dL | 0.6-1.2 |\n| Fractional excretion of sodium | 0.4% | - |\n| Urine osmolality | 620 mOsm/kg | - |\n| Urine sediment | bland, no casts | - |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Acute tubular necrosis",
      "Prerenal acute kidney injury from volume depletion",
      "Postrenal obstruction",
      "Acute interstitial nephritis",
      "Acute glomerulonephritis"
    ],
    answer: 1,
    exp: "Volume loss from vomiting and diarrhea, hypotension, and physical signs of hypovolemia with a BUN-to-creatinine ratio above 20, a fractional excretion of sodium below 1 percent, concentrated urine, and bland sediment all indicate prerenal acute kidney injury. The kidneys are avidly reabsorbing sodium and water in response to renal hypoperfusion. Treatment is restoration of intravascular volume with isotonic fluids and holding the ACE inhibitor.",
    why: [
      "Acute tubular necrosis would show a fractional excretion of sodium above 2%, isosthenuric urine, and muddy-brown casts.",
      "Correct: hypovolemia with a high BUN:creatinine ratio, FeNa below 1%, concentrated urine, and bland sediment indicates prerenal azotemia.",
      "Obstruction would typically show hydronephrosis and reduced urine output without these avid-reabsorption indices.",
      "Interstitial nephritis usually follows a drug exposure and shows pyuria, white cell casts, and often eosinophiluria.",
      "Glomerulonephritis produces hematuria, red cell casts, and proteinuria, which are absent here."
    ]
  },
  {
    id: "s2ck-0059",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Myxedema coma",
    difficulty: "hard",
    anchor: "lab",
    vignette: "An 74-year-old woman with hypothyroidism who stopped her levothyroxine is found lethargic and minimally responsive during a cold winter week. Temperature is 34.4 C, heart rate is 48/min, and blood pressure is 88/54 mm Hg. She has periorbital puffiness, dry coarse skin, and delayed relaxation of the deep tendon reflexes.\n\n| Test | Value | Reference |\n|---|---|---|\n| TSH | 82 mU/L | 0.4-4.0 |\n| Free T4 | 0.2 ng/dL | 0.8-1.8 |\n| Sodium | 126 mEq/L | 135-145 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Oral levothyroxine with discharge home",
      "Active external rewarming alone",
      "Intravenous levothyroxine with intravenous hydrocortisone and supportive care",
      "Start a thionamide such as methimazole",
      "Give levothyroxine only, withholding steroids"
    ],
    answer: 2,
    exp: "Hypothermia, bradycardia, hypotension, altered mental status, and hyponatremia with a markedly elevated TSH and low free T4 indicate myxedema coma, a life-threatening decompensation of severe hypothyroidism. Treatment is intravenous levothyroxine (often with liothyronine) plus intravenous hydrocortisone and supportive care in an intensive setting. Hydrocortisone is given before or with thyroid hormone because coexisting adrenal insufficiency can be unmasked and precipitated by thyroid replacement.",
    why: [
      "Oral absorption is unreliable in myxedema coma and outpatient management is unsafe.",
      "Passive rewarming and support are used, but rewarming alone does not correct the profound hormone deficiency.",
      "Correct: myxedema coma requires intravenous thyroid hormone with hydrocortisone and intensive supportive care.",
      "Thionamides treat hyperthyroidism and would be dangerous in profound hypothyroidism.",
      "Giving thyroid hormone without hydrocortisone can precipitate adrenal crisis if adrenal insufficiency coexists."
    ]
  },
  {
    id: "s2ck-0060",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Perforated peptic ulcer",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 63-year-old man with a history of peptic ulcer disease and chronic NSAID use develops sudden severe, diffuse abdominal pain that made him double over. He now lies still. Temperature is 38.4 C and heart rate is 118/min. The abdomen is rigid and board-like with diffuse rebound tenderness and absent bowel sounds.\n\n**[IMAGE: upright chest radiograph showing free air under both hemidiaphragms]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Oral antacids and discharge with follow-up",
      "Colonoscopy to identify the source",
      "Observation with serial abdominal examinations only",
      "Fluid resuscitation, intravenous antibiotics and a proton pump inhibitor, and urgent surgical repair",
      "Upper endoscopy with balloon dilation"
    ],
    answer: 3,
    exp: "Sudden diffuse pain with a rigid, board-like abdomen, peritoneal signs, and free air under the diaphragm indicates a perforated peptic ulcer with diffuse peritonitis. Management is prompt resuscitation with intravenous fluids, broad-spectrum antibiotics, an intravenous proton pump inhibitor, nasogastric decompression, and urgent surgical repair (typically an omental patch). Delay increases the risk of sepsis and death.",
    why: [
      "Antacids and discharge would be fatal in a patient with a perforated viscus and peritonitis.",
      "Colonoscopy does not address an upper gastrointestinal perforation and would risk further contamination.",
      "Observation alone allows peritonitis and sepsis to progress in a patient who needs surgery.",
      "Correct: perforated peptic ulcer with peritonitis requires resuscitation, antibiotics, a PPI, and urgent operative repair.",
      "Endoscopic dilation does not treat a free perforation and could worsen it."
    ]
  },
  {
    id: "s2ck-0061",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Incarcerated inguinal hernia",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 55-year-old man with a long-standing right groin bulge presents with 6 hours of severe pain and a firm, exquisitely tender lump in the right groin that he can no longer push back in. He has nausea, vomiting, and abdominal distension. The overlying skin is warm and erythematous, and he is unable to pass flatus.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Attempt vigorous repeated manual reduction and then discharge",
      "Schedule elective outpatient repair in several weeks",
      "Apply a truss and observe",
      "Broad-spectrum antibiotics alone",
      "Urgent surgical exploration and hernia repair"
    ],
    answer: 4,
    exp: "An irreducible, tender, erythematous groin hernia with bowel obstruction and systemic signs suggests an incarcerated hernia with possible strangulation and bowel ischemia. This is a surgical emergency requiring urgent operative exploration and repair, with resection of any nonviable bowel. Forceful reduction risks reducing dead bowel into the abdomen, and delay for elective repair risks bowel infarction.",
    why: [
      "Forceful reduction of a strangulated hernia risks returning ischemic or perforated bowel into the peritoneum.",
      "Elective delay is unsafe when strangulation and bowel compromise are suspected.",
      "A truss does not treat incarceration and delays definitive surgery.",
      "Antibiotics do not relieve the mechanical incarceration or restore bowel perfusion.",
      "Correct: an incarcerated or strangulated hernia with obstruction requires urgent surgical exploration and repair."
    ]
  },
  {
    id: "s2ck-0062",
    system: "Surgery",
    discipline: "Emergency/Trauma",
    topic: "Tension pneumothorax",
    difficulty: "hard",
    anchor: null,
    vignette: "A 27-year-old man is brought in after a motor vehicle collision with sudden severe shortness of breath. He is agitated and cyanotic. Blood pressure is 78/44 mm Hg and heart rate is 138/min. The trachea is deviated to the left, the right hemithorax is hyperresonant with absent breath sounds, and the neck veins are distended.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Obtain a chest radiograph before any intervention",
      "Intubate and observe without further intervention",
      "High-flow oxygen alone with reassessment in one hour",
      "Emergent pericardiocentesis",
      "Immediate needle decompression followed by tube thoracostomy, without waiting for imaging"
    ],
    answer: 4,
    exp: "Respiratory distress with hypotension, unilateral absent breath sounds and hyperresonance, tracheal deviation away from the affected side, and distended neck veins is a tension pneumothorax. This is a clinical diagnosis and a life-threatening emergency treated by immediate needle (or finger) decompression followed by tube thoracostomy. Obtaining imaging first dangerously delays decompression of a patient in obstructive shock.",
    why: [
      "Waiting for a chest radiograph delays life-saving decompression in a clinically evident tension pneumothorax.",
      "Intubation with positive-pressure ventilation can worsen a tension pneumothorax if it is not first decompressed.",
      "Oxygen alone does not relieve the trapped air causing obstructive shock.",
      "The findings indicate tension pneumothorax, not cardiac tamponade, so pericardiocentesis is inappropriate.",
      "Correct: tension pneumothorax is a clinical diagnosis treated with immediate needle decompression and then a chest tube."
    ]
  },
  {
    id: "s2ck-0063",
    system: "Surgery",
    discipline: "Urology",
    topic: "Testicular torsion",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 15-year-old boy presents with 3 hours of sudden severe left testicular pain that woke him from sleep, associated with nausea and vomiting. There was no trauma. The left testis is swollen, exquisitely tender, elevated, and lying horizontally, and the cremasteric reflex is absent on the left.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Emergent surgical exploration with detorsion and bilateral orchiopexy",
      "Outpatient scrotal ultrasound the following morning",
      "Oral antibiotics for presumed epididymitis",
      "Scrotal support and NSAIDs with follow-up in one week",
      "Warm compresses and observation at home"
    ],
    answer: 0,
    exp: "Acute onset of severe testicular pain with a high-riding, horizontally oriented testis and an absent cremasteric reflex in an adolescent is testicular torsion. Because the testis becomes nonviable after roughly 6 hours of ischemia, the classic presentation warrants emergent surgical exploration with detorsion and bilateral orchiopexy without delaying for imaging. Manual detorsion may be attempted while preparing for surgery.",
    why: [
      "Correct: classic testicular torsion requires emergent surgical exploration and bilateral orchiopexy to salvage the testis.",
      "Delaying for an outpatient ultrasound risks irreversible testicular ischemia within hours.",
      "The presentation is torsion, not epididymitis, and antibiotics would waste critical time.",
      "Symptomatic outpatient management would allow the testis to infarct.",
      "Observation allows the ischemic testis to become nonviable."
    ]
  },
  {
    id: "s2ck-0064",
    system: "Pediatrics",
    discipline: "Pediatric Emergency",
    topic: "Croup (laryngotracheobronchitis)",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 2-year-old boy has 2 days of a barky, seal-like cough, hoarseness, and low-grade fever after a runny nose. Tonight he developed noisy breathing. He has inspiratory stridor audible at rest and mild suprasternal retractions but is well-appearing, alert, and drinking. Oxygen saturation is 97%.\n\n**[IMAGE: frontal neck radiograph showing subglottic narrowing (steeple sign)]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Empiric intravenous antibiotics and intubation",
      "Nebulized epinephrine and a dose of dexamethasone",
      "Albuterol nebulizer alone",
      "Examination of the throat with a tongue depressor",
      "Discharge with no treatment"
    ],
    answer: 1,
    exp: "A barky cough, hoarseness, and inspiratory stridor after a viral prodrome with a subglottic steeple sign indicate croup (viral laryngotracheobronchitis). A child with stridor at rest is treated with nebulized epinephrine for rapid relief and a dose of corticosteroids such as dexamethasone to reduce airway edema. Antibiotics are not indicated for this viral illness.",
    why: [
      "Croup is viral, so antibiotics are not indicated, and intubation is rarely needed with appropriate medical therapy.",
      "Correct: stridor at rest in croup is treated with nebulized epinephrine and dexamethasone.",
      "Albuterol targets bronchospasm and does not relieve the subglottic edema of croup.",
      "Croup does not require throat instrumentation, which is dangerous mainly in suspected epiglottitis.",
      "A child with stridor at rest requires treatment, not discharge without therapy."
    ]
  },
  {
    id: "s2ck-0065",
    system: "Pediatrics",
    discipline: "Pediatric Neurology",
    topic: "Simple febrile seizure",
    difficulty: "easy",
    anchor: null,
    vignette: "An 18-month-old previously healthy girl had a single generalized tonic-clonic seizure lasting about 2 minutes during a fever from a viral upper respiratory infection. By arrival she is at her baseline, alert, and playful. Temperature is 39.2 C. The neurologic examination is normal, there is no neck stiffness, and the anterior fontanelle is closed and flat.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Start long-term daily antiepileptic therapy",
      "Obtain immediate head CT and lumbar puncture",
      "Reassurance and antipyretics with treatment of the underlying infection, without antiepileptic drugs",
      "Obtain an EEG before discharge",
      "Admit to the intensive care unit for continuous monitoring"
    ],
    answer: 2,
    exp: "A brief, single, generalized seizure during fever in an otherwise well 6-month to 5-year-old child who returns to baseline is a simple febrile seizure. Management is reassurance, treatment of the source of fever, and antipyretics for comfort, with no need for neuroimaging, lumbar puncture, EEG, or antiepileptic drugs when the child is well-appearing without meningeal signs. Simple febrile seizures are benign and usually do not recur or lead to epilepsy.",
    why: [
      "Antiepileptic prophylaxis is not indicated for simple febrile seizures and carries unnecessary risk.",
      "Neuroimaging and lumbar puncture are unnecessary in a well-appearing child with a simple febrile seizure and no meningeal signs.",
      "Correct: a simple febrile seizure is managed with reassurance, antipyretics, and treating the underlying infection.",
      "An EEG does not change management of a simple febrile seizure and is not recommended.",
      "ICU monitoring is excessive for a benign, self-limited simple febrile seizure."
    ]
  },
  {
    id: "s2ck-0066",
    system: "Pediatrics",
    discipline: "Pediatric Rheumatology",
    topic: "IgA vasculitis (Henoch-Schonlein purpura)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 6-year-old boy develops a symmetric rash of raised purpuric spots over both buttocks and the extensor surfaces of the legs about a week after an upper respiratory infection. He also has colicky abdominal pain and a swollen, painful right ankle. The platelet count and coagulation studies are normal, and the lesions do not blanch.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Immune thrombocytopenic purpura",
      "Meningococcemia",
      "Hemolytic uremic syndrome",
      "IgA vasculitis (Henoch-Schonlein purpura)",
      "Acute lymphoblastic leukemia"
    ],
    answer: 3,
    exp: "Palpable (nonblanching) purpura concentrated on the buttocks and lower extremities with abdominal pain and arthritis after a respiratory infection, with a normal platelet count, is classic for IgA vasculitis (Henoch-Schonlein purpura). It is the most common small-vessel vasculitis of childhood and is often self-limited, though renal involvement must be monitored. The normal platelet count distinguishes it from thrombocytopenic causes of purpura.",
    why: [
      "Immune thrombocytopenic purpura causes a low platelet count, whereas the platelets here are normal.",
      "Meningococcemia produces a rapidly progressive purpuric rash with fever and toxic appearance, not this well-appearing arthritis-and-abdominal-pain picture.",
      "Hemolytic uremic syndrome features the triad of anemia, thrombocytopenia, and acute kidney injury after bloody diarrhea.",
      "Correct: palpable purpura on the buttocks and legs with abdominal pain and arthritis and normal platelets indicate IgA vasculitis.",
      "Leukemia would typically show cytopenias and blasts rather than a normal platelet count with palpable purpura."
    ]
  },
  {
    id: "s2ck-0067",
    system: "Pediatrics",
    discipline: "Pediatric Pulmonology",
    topic: "Foreign body aspiration",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A previously healthy 2-year-old girl had a sudden episode of coughing and choking while eating peanuts, followed by persistent coughing and noisy breathing. On examination she has unilateral wheezing and diminished breath sounds over the right lung field. She is not cyanotic and is maintaining her airway.\n\n**[IMAGE: expiratory chest radiograph showing hyperinflation and air trapping of the right lung with mediastinal shift away from the affected side]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Chest physiotherapy and observation",
      "Oral antibiotics for presumed pneumonia",
      "Nebulized bronchodilators alone",
      "Rigid bronchoscopy for removal of the foreign body",
      "Blind finger sweep of the airway"
    ],
    answer: 3,
    exp: "A sudden choking episode with unilateral wheeze, focal decreased breath sounds, and radiographic air trapping in a toddler indicates foreign body aspiration, commonly a lodged object in a mainstem bronchus. In a stable child, the definitive management is rigid bronchoscopy to visualize and remove the object. Blind finger sweeps and chest physiotherapy risk further airway obstruction.",
    why: [
      "Chest physiotherapy can dislodge the object into a worse position and does not achieve removal.",
      "Antibiotics do not remove an aspirated foreign body, though a postobstructive pneumonia may develop later.",
      "Bronchodilators do not remove the mechanical obstruction.",
      "Correct: a stable child with a suspected bronchial foreign body undergoes rigid bronchoscopy for removal.",
      "A blind finger sweep can push the object deeper and cause complete obstruction."
    ]
  },
  {
    id: "s2ck-0068",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Gestational diabetes mellitus",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 26-year-old woman at 26 weeks gestation with no history of diabetes undergoes routine screening. Her 1-hour 50-gram glucose challenge is abnormal, so a 3-hour 100-gram oral glucose tolerance test is performed. She is asymptomatic and normotensive.\n\n| Test | Value | Threshold |\n|---|---|---|\n| Fasting | 98 mg/dL | 95 |\n| 1-hour | 190 mg/dL | 180 |\n| 2-hour | 172 mg/dL | 155 |\n| 3-hour | 130 mg/dL | 140 |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Type 1 diabetes mellitus",
      "Normal pregnancy glucose tolerance",
      "Pregestational type 2 diabetes mellitus",
      "Impaired fasting glucose only, not diabetes",
      "Gestational diabetes mellitus"
    ],
    answer: 4,
    exp: "Two or more values meeting or exceeding the thresholds on a 3-hour 100-gram oral glucose tolerance test after an abnormal 1-hour screen establish gestational diabetes mellitus. Here the fasting, 1-hour, and 2-hour values are all elevated, satisfying the criteria. Management begins with nutritional therapy and glucose monitoring, adding insulin if targets are not met.",
    why: [
      "Type 1 diabetes presents with hyperglycemic symptoms and autoimmune beta-cell destruction, not a routine screening abnormality in pregnancy.",
      "The elevated values are abnormal, so glucose tolerance is not normal.",
      "Pregestational diabetes would have been present and diagnosed before or in early pregnancy, not detected on routine third-trimester screening.",
      "Multiple elevated values on the diagnostic test meet criteria for gestational diabetes, not merely impaired fasting glucose.",
      "Correct: two or more elevated values on the 3-hour glucose tolerance test confirm gestational diabetes mellitus."
    ]
  },
  {
    id: "s2ck-0069",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Preterm premature rupture of membranes",
    difficulty: "hard",
    anchor: null,
    vignette: "A 30-year-old woman at 30 weeks gestation reports a sudden gush of clear fluid followed by continued leakage. Speculum examination shows pooling of clear fluid in the posterior fornix that turns nitrazine paper blue and ferns on drying. She is afebrile with no uterine tenderness, is not contracting, and the fetal heart tracing is reassuring.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Admission for expectant management with latency antibiotics, antenatal corticosteroids, and fetal surveillance",
      "Immediate cesarean delivery",
      "Immediate induction of labor for vaginal delivery regardless of gestational age",
      "Discharge home with follow-up in one week",
      "Tocolysis alone without antibiotics or corticosteroids"
    ],
    answer: 0,
    exp: "Pooling, a positive nitrazine test, and ferning confirm preterm premature rupture of membranes at 30 weeks without infection or fetal compromise. Because the fetus is premature and stable, management is admission for expectant care to prolong the pregnancy: latency antibiotics to lengthen the latency period and reduce infection, antenatal corticosteroids for fetal lung maturity, and close maternal and fetal surveillance. Delivery is expedited if chorioamnionitis, labor, or fetal compromise develops.",
    why: [
      "Correct: stable preterm PROM without infection is managed expectantly with latency antibiotics, corticosteroids, and surveillance.",
      "Cesarean is reserved for obstetric indications such as fetal compromise, which is absent here.",
      "Immediate delivery of a stable 30-week fetus forgoes the benefit of steroids and added maturity.",
      "Outpatient management is unsafe because of the risk of infection, cord prolapse, and abruption.",
      "Corticosteroids and latency antibiotics are key components and should not be omitted."
    ]
  },
  {
    id: "s2ck-0070",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Ovarian torsion",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 25-year-old woman presents with sudden severe, intermittent right lower quadrant pain associated with nausea and vomiting that began an hour ago. She has a known right ovarian cyst. She is afebrile, and pelvic examination reveals a tender right adnexal mass. A pregnancy test is negative.\n\n**[IMAGE: transvaginal Doppler ultrasound showing an enlarged, edematous right ovary with markedly diminished venous and arterial flow]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Oral analgesics and outpatient follow-up",
      "Emergent laparoscopy with detorsion of the ovary",
      "Broad-spectrum antibiotics for pelvic inflammatory disease",
      "Methotrexate therapy",
      "Observation with a repeat ultrasound in 48 hours"
    ],
    answer: 1,
    exp: "Sudden severe intermittent pelvic pain with nausea, a tender adnexal mass, and an enlarged edematous ovary with compromised Doppler flow indicates ovarian torsion. This is a surgical emergency, and the treatment is emergent laparoscopy with detorsion to restore blood flow and preserve the ovary, removing any causative cyst. Delay leads to ovarian necrosis and loss of function.",
    why: [
      "Outpatient analgesia would allow ischemic loss of the ovary.",
      "Correct: ovarian torsion requires emergent laparoscopic detorsion to salvage the ovary.",
      "Antibiotics treat pelvic infection, not the mechanical ischemia of torsion.",
      "Methotrexate treats ectopic pregnancy, which is excluded by the negative pregnancy test.",
      "Watchful waiting risks irreversible ovarian necrosis."
    ]
  },
  {
    id: "s2ck-0071",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Postmenopausal bleeding evaluation",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 58-year-old woman who reached menopause at age 51 presents with painless vaginal bleeding for the past 2 weeks. She has never used hormone therapy. Her body mass index is 34 kg/m2 and she has type 2 diabetes and hypertension. The pelvic examination is unremarkable.\n\n**[IMAGE: transvaginal ultrasound showing an endometrial stripe thickness of 12 mm]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Reassurance that postmenopausal bleeding is usually normal",
      "Endometrial biopsy to evaluate for endometrial carcinoma",
      "Start combined oral contraceptives",
      "Repeat the ultrasound in one year",
      "Empiric progestin therapy without tissue sampling"
    ],
    answer: 1,
    exp: "Any postmenopausal bleeding is abnormal and must be evaluated to exclude endometrial carcinoma, especially with obesity, diabetes, and a thickened endometrial stripe well above the 4 mm threshold. The next step is endometrial biopsy to obtain tissue for histologic diagnosis. Empiric hormonal therapy without sampling could mask or delay diagnosis of a malignancy.",
    why: [
      "Postmenopausal bleeding is never assumed normal; it requires evaluation for cancer.",
      "Correct: postmenopausal bleeding with a thickened endometrium warrants endometrial biopsy to exclude carcinoma.",
      "Combined oral contraceptives are inappropriate and do not evaluate the endometrium.",
      "Deferring evaluation for a year risks missing an endometrial cancer.",
      "Empiric progestin without sampling could obscure an underlying malignancy."
    ]
  },
  {
    id: "s2ck-0072",
    system: "Psychiatry",
    discipline: "Adult Psychiatry",
    topic: "Panic disorder",
    difficulty: "easy",
    anchor: null,
    vignette: "A 28-year-old woman reports recurrent, unexpected episodes of pounding heartbeat, chest tightness, shortness of breath, sweating, and a fear that she is dying. The episodes peak within about 10 minutes and resolve within half an hour. She now avoids driving for fear of another attack and worries constantly about when the next one will occur. Cardiac and thyroid workups are normal.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Acute coronary syndrome",
      "Generalized anxiety disorder",
      "Panic disorder",
      "Hyperthyroidism",
      "Specific phobia"
    ],
    answer: 2,
    exp: "Recurrent unexpected panic attacks that peak within minutes, followed by persistent worry about future attacks and behavioral change to avoid them, define panic disorder. A normal cardiac and thyroid evaluation excludes medical mimics. First-line treatment is an SSRI and cognitive behavioral therapy.",
    why: [
      "The normal cardiac workup and recurrent stereotyped episodes with anticipatory anxiety point to panic disorder, not acute coronary syndrome.",
      "Generalized anxiety disorder involves chronic pervasive worry rather than discrete, abrupt panic attacks.",
      "Correct: recurrent unexpected panic attacks with persistent worry about further attacks define panic disorder.",
      "A normal thyroid evaluation excludes hyperthyroidism as the cause.",
      "A specific phobia is triggered by a defined feared object or situation, not the unexpected attacks seen here."
    ]
  },
  {
    id: "s2ck-0073",
    system: "Psychiatry",
    discipline: "Adult Psychiatry",
    topic: "Anorexia nervosa",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 19-year-old woman is brought in by her mother, who is worried about her severe weight loss. The patient restricts her food intake, exercises for hours daily, and is intensely afraid of gaining weight even though she believes she looks overweight. Her body mass index is 15 kg/m2. She has fine downy hair over her arms, cold intolerance, bradycardia at 46/min, and amenorrhea for 4 months.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Bulimia nervosa",
      "Major depressive disorder",
      "Body dysmorphic disorder",
      "Anorexia nervosa",
      "Avoidant/restrictive food intake disorder"
    ],
    answer: 3,
    exp: "Restriction of intake leading to significantly low body weight, an intense fear of weight gain, and a distorted body image (feeling overweight while emaciated) define anorexia nervosa. Physical signs such as lanugo, bradycardia, cold intolerance, and amenorrhea reflect the physiologic effects of starvation. The distorted body image and fear of weight gain distinguish it from other restrictive eating conditions.",
    why: [
      "Bulimia nervosa involves recurrent binge eating with compensatory behaviors, typically at a normal or higher body weight.",
      "Major depression can reduce appetite but does not feature the intense fear of weight gain and body-image distortion seen here.",
      "Body dysmorphic disorder centers on a perceived flaw in appearance, not on body weight and food restriction.",
      "Correct: significantly low weight with fear of weight gain and distorted body image defines anorexia nervosa.",
      "Avoidant/restrictive food intake disorder lacks the fear of weight gain and body-image disturbance central to this presentation."
    ]
  },
  {
    id: "s2ck-0074",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Adolescent confidentiality and consent",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 16-year-old girl comes to the clinic alone requesting testing and treatment for a possible sexually transmitted infection after unprotected intercourse. She is worried and asks the physician not to tell her parents. She has decision-making capacity, and there is no evidence of abuse, coercion, or safety concern.",
    lead: "Which of the following is the most appropriate course of action?",
    options: [
      "Refuse to evaluate her until a parent is present",
      "Call her parents to obtain consent before any testing",
      "Provide confidential testing and treatment for the sexually transmitted infection, which minors can consent to",
      "Report her to school authorities",
      "Tell her she must wait until she is 18 years old"
    ],
    answer: 2,
    exp: "Minors can consent confidentially to diagnosis and treatment of sexually transmitted infections and to most reproductive health services in essentially all jurisdictions, without parental notification. Respecting this confidentiality encourages adolescents to seek care and is ethically and legally supported. The physician should evaluate and treat her while counseling on prevention and follow-up.",
    why: [
      "Refusing care until a parent is present is not required for confidential STI services and would deter needed care.",
      "Parental consent is not required for STI evaluation and treatment of a minor.",
      "Correct: minors can consent confidentially to STI testing and treatment, so the physician should provide care without parental notification.",
      "Reporting a consensual adolescent seeking STI care to authorities violates confidentiality.",
      "Care for STIs should not be deferred; minors are entitled to it now."
    ]
  },
  {
    id: "s2ck-0075",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Breast cancer screening",
    difficulty: "easy",
    anchor: null,
    vignette: "A 52-year-old woman with no breast symptoms presents for routine care and asks about breast cancer screening. She has no personal history of breast cancer, no known high-risk genetic mutation, and no family history of breast or ovarian cancer. Her examination is normal.",
    lead: "Which of the following is the most appropriate screening recommendation?",
    options: [
      "Begin screening mammography, for example every 1 to 2 years",
      "Annual breast MRI as the primary screening test",
      "No screening is needed until age 65",
      "Screen only if she develops a palpable lump",
      "Routine BRCA genetic testing as a screening test for all women"
    ],
    answer: 0,
    exp: "Average-risk women should undergo screening mammography beginning between ages 40 and 50, so a 52-year-old average-risk woman should be screened, typically every 1 to 2 years. Mammography reduces breast cancer mortality by detecting disease before it is clinically apparent. MRI and BRCA testing are reserved for women at high risk, not for average-risk screening.",
    why: [
      "Correct: an average-risk woman in her early fifties should undergo screening mammography, typically every 1 to 2 years.",
      "Breast MRI is an adjunct for high-risk women, not the primary screening test for average risk.",
      "Deferring screening until 65 would miss years of effective early detection.",
      "Screening is meant to detect cancer before symptoms such as a palpable lump develop.",
      "BRCA testing is reserved for those with a suggestive personal or family history, not routine screening."
    ]
  }
];
