/*
 * Rounds Codex - USMLE Step 3, Day 2 (Advanced Clinical Management / ACM) bank, Batch 7 (25 items)
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
const USMLE_STEP3D2_B7 = [
  {
    id: "s3-0376",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Parkinson disease initial pharmacotherapy",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 71-year-old man reports 10 months of a slowly worsening resting tremor of the right hand, stiffness, and slowness that now interferes with buttoning his shirt and with his work repairing watches. On examination he has a 4-Hz pill-rolling rest tremor, cogwheel rigidity, and asymmetric bradykinesia with reduced arm swing and a shuffling gait. There are no cerebellar signs, no early falls, and no cognitive impairment, and his symptoms improve with concentration. His examination is otherwise normal and he is not taking a dopamine-blocking drug.",
    lead: "Which of the following is the most appropriate initial therapy for his motor symptoms?",
    options: [
      "Start carbidopa-levodopa to control his functionally limiting motor symptoms.",
      "Begin an anticholinergic agent as long-term monotherapy for his gait.",
      "Prescribe high-dose vitamin E for neuroprotection.",
      "Refer immediately for deep brain stimulation surgery.",
      "Withhold all treatment until he becomes severely disabled."
    ],
    answer: 0,
    exp: "The asymmetric resting tremor, cogwheel rigidity, and bradykinesia with a good response to attention indicate idiopathic Parkinson disease. In an older patient with symptoms that already impair function and occupation, carbidopa-levodopa is the most effective agent for motor control and is the appropriate first-line therapy.",
    why: [
      "Correct: carbidopa-levodopa is the most effective drug for motor symptoms and is first-line when function is already impaired, especially in older patients.",
      "Anticholinergics help only tremor, worsen cognition in older adults, and do not address bradykinesia or gait.",
      "Vitamin E does not slow Parkinson disease or relieve motor symptoms.",
      "Deep brain stimulation is reserved for later motor fluctuations or refractory tremor, not initial therapy.",
      "Delaying all treatment until severe disability needlessly prolongs impairment when effective therapy exists."
    ]
  },
  {
    id: "s3-0377",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Helicobacter pylori eradication therapy",
    difficulty: "easy",
    anchor: null,
    vignette: "A 46-year-old man has 3 months of intermittent epigastric burning that improves after meals and sometimes wakes him at night. He takes no NSAIDs and has no alarm features such as weight loss, bleeding, or dysphagia. Because his symptoms persisted, upper endoscopy was performed and revealed a clean-based duodenal ulcer, and biopsies of the gastric antrum confirmed Helicobacter pylori infection. He has no drug allergies.",
    lead: "Which of the following is the most appropriate therapy?",
    options: [
      "Prescribe long-term proton pump inhibitor monotherapy without antibiotics.",
      "Start a proton pump inhibitor plus two antibiotics (clarithromycin-based triple or bismuth quadruple therapy) to eradicate H. pylori.",
      "Give a single antibiotic course alone.",
      "Repeat endoscopy in 1 year without any treatment.",
      "Begin an H2-receptor blocker as the only therapy."
    ],
    answer: 1,
    exp: "A duodenal ulcer with confirmed H. pylori requires eradication therapy, not acid suppression alone. Guideline-based regimens combine a proton pump inhibitor with at least two antibiotics (clarithromycin-based triple therapy or bismuth quadruple therapy), and eradication should later be confirmed by urea breath test or stool antigen.",
    why: [
      "Acid suppression alone heals the ulcer but leaves the infection, so relapse is common.",
      "Correct: a proton pump inhibitor combined with two antibiotics (triple or bismuth quadruple therapy) is the standard to eradicate H. pylori and prevent ulcer recurrence.",
      "Single-antibiotic regimens fail to eradicate H. pylori and promote resistance.",
      "Observation without treatment leaves an active, treatable infection and ulcer.",
      "An H2 blocker alone suppresses acid transiently but does not eradicate the organism."
    ]
  },
  {
    id: "s3-0378",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Metabolic acidosis of chronic kidney disease",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 63-year-old woman with stage 4 chronic kidney disease from long-standing hypertension is seen for routine follow-up. She feels generally well and is not short of breath. Her blood pressure is controlled, she has no edema, and her volume status is normal. Serial laboratory studies show a persistently low serum bicarbonate with a normal anion gap, and you are planning therapy to slow progression and protect her bone and muscle.\n\n| Test | Value |\n|---|---|\n| Bicarbonate | 16 mEq/L |\n| Anion gap | normal |\n| Potassium | 4.6 mEq/L |\n| eGFR | 22 mL/min/1.73 m2 |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Substantially increase her dietary animal protein.",
      "Start a loop diuretic to correct the acidosis.",
      "Begin oral sodium bicarbonate to raise the serum bicarbonate toward the normal range.",
      "Initiate urgent hemodialysis for the low bicarbonate.",
      "Give daily intravenous normal saline infusions."
    ],
    answer: 2,
    exp: "Chronic metabolic acidosis is common in advanced chronic kidney disease and accelerates progression, bone disease, and muscle wasting. When serum bicarbonate is persistently below about 22 mEq/L, oral alkali therapy such as sodium bicarbonate to raise the level toward normal is recommended and may slow the decline in kidney function.",
    why: [
      "Increasing animal protein raises the acid load and worsens the acidosis.",
      "Loop diuretics do not correct a metabolic acidosis and are not indicated in a euvolemic patient.",
      "Correct: oral sodium bicarbonate to raise serum bicarbonate toward normal treats CKD metabolic acidosis and may slow progression.",
      "Dialysis is not indicated solely for a chronic, asymptomatic acidosis that responds to oral alkali.",
      "Daily saline infusions do not treat the acidosis and risk volume overload."
    ]
  },
  {
    id: "s3-0379",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Thyroid storm management",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 44-year-old woman with untreated Graves disease presents with 2 days of fever, palpitations, and agitation after a urinary tract infection. She is diaphoretic, tremulous, and confused, with a large goiter and a bruit. Her rhythm is irregularly irregular. Her presentation and score are highly suggestive of decompensated thyrotoxicosis, and you are organizing initial pharmacologic therapy.\n\n| Parameter | Value |\n|---|---|\n| Temperature | 40.2 C |\n| Heart rate | 148/min, irregular |\n| Blood pressure | 150/70 mm Hg |\n| Mental status | agitated, confused |",
    lead: "Which of the following is the most appropriate next step in pharmacologic management?",
    options: [
      "Administer iodine (potassium iodide) immediately, before giving any thionamide.",
      "Give aspirin to bring down the fever.",
      "Start levothyroxine to stabilize thyroid function.",
      "Begin propranolol and a thionamide (propylthiouracil), then add iodine after the thionamide, together with hydrocortisone.",
      "Provide only external cooling and observe without drug therapy."
    ],
    answer: 3,
    exp: "This is thyroid storm precipitated by infection. Treatment is multimodal and sequenced: a beta-blocker (propranolol) for adrenergic symptoms, a thionamide (propylthiouracil) to block hormone synthesis, iodine given at least an hour after the thionamide to block hormone release, and glucocorticoids to reduce peripheral T4-to-T3 conversion, along with treatment of the precipitant.",
    why: [
      "Iodine given before a thionamide can fuel further hormone synthesis; the thionamide must come first.",
      "Aspirin displaces thyroid hormone from binding proteins and can worsen thyrotoxicosis, so it is avoided.",
      "Levothyroxine adds thyroid hormone and would be dangerous in a hyperthyroid crisis.",
      "Correct: propranolol plus a thionamide, then iodine after the thionamide, plus glucocorticoids is the sequenced regimen for thyroid storm.",
      "Cooling alone leaves the underlying thyrotoxic crisis untreated and is inadequate."
    ]
  },
  {
    id: "s3-0380",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Sickle cell disease hydroxyurea maintenance",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 24-year-old man with sickle cell anemia (HbSS) has had four painful vaso-occlusive crises requiring hospitalization over the past year, plus one episode of acute chest syndrome. He takes folic acid, is up to date on vaccinations, and adheres to his appointments. He is currently at his baseline between crises, and you are planning long-term therapy to reduce the frequency of these complications. His steady-state laboratory values are shown.\n\n| Test | Value |\n|---|---|\n| Hemoglobin | 8.1 g/dL |\n| Reticulocytes | elevated |\n| Hemoglobin electrophoresis | HbSS |\n| WBC | normal |",
    lead: "Which of the following is the most appropriate long-term therapy?",
    options: [
      "Chronic scheduled opioids as the primary preventive strategy.",
      "Routine monthly transfusions for all patients regardless of complications.",
      "Iron supplementation to raise the hemoglobin.",
      "Long-term prophylactic broad-spectrum antibiotics.",
      "Start hydroxyurea to reduce the frequency of vaso-occlusive crises and acute chest syndrome."
    ],
    answer: 4,
    exp: "Recurrent vaso-occlusive crises and acute chest syndrome in sickle cell anemia are indications for hydroxyurea, which raises fetal hemoglobin, lowers the frequency of pain crises and acute chest syndrome, and reduces transfusion and hospitalization needs. It is the cornerstone disease-modifying therapy for frequent complications.",
    why: [
      "Chronic opioids treat pain but do not prevent crises or modify the disease.",
      "Routine monthly transfusion is reserved for specific indications such as stroke prevention, not first-line for frequent pain crises.",
      "Iron supplementation is inappropriate and risks iron overload, since the anemia is hemolytic, not iron-deficient.",
      "Prophylactic antibiotics are used in young children, not as disease-modifying therapy for an adult with frequent crises.",
      "Correct: hydroxyurea raises fetal hemoglobin and reduces the frequency of vaso-occlusive crises and acute chest syndrome."
    ]
  },
  {
    id: "s3-0381",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Active pulmonary tuberculosis treatment initiation",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 39-year-old man who recently emigrated has 6 weeks of productive cough, drenching night sweats, and a 5-kg weight loss. He appears chronically ill with a low-grade fever. He is placed in a negative-pressure airborne-isolation room, and sputum acid-fast bacilli smears are positive with a nucleic acid amplification test positive for Mycobacterium tuberculosis complex. He has normal liver function and no HIV. His chest radiograph is shown.\n\n**[IMAGE: Chest radiograph showing a right upper-lobe cavitary infiltrate with surrounding nodular opacities]**",
    lead: "Which of the following is the most appropriate initial therapy?",
    options: [
      "Start four-drug therapy with rifampin, isoniazid, pyrazinamide, and ethambutol.",
      "Treat with isoniazid alone as for latent tuberculosis infection.",
      "Give a single 7-day course of a fluoroquinolone.",
      "Withhold all therapy until drug-susceptibility results return.",
      "Start a macrolide for community-acquired pneumonia."
    ],
    answer: 0,
    exp: "Cavitary disease with positive smear and nucleic acid amplification confirms active pulmonary tuberculosis. Empiric treatment begins immediately with the four-drug regimen of rifampin, isoniazid, pyrazinamide, and ethambutol (RIPE) while susceptibilities are pending, along with airborne isolation and public health notification.",
    why: [
      "Correct: active tuberculosis is treated with the four-drug RIPE regimen started empirically while susceptibilities are pending.",
      "Isoniazid monotherapy treats latent infection and would promote resistance in active disease.",
      "A short fluoroquinolone course does not adequately treat active tuberculosis.",
      "Delaying therapy until susceptibilities return prolongs transmissible disease; empiric four-drug therapy starts now.",
      "A macrolide for community-acquired pneumonia does not treat confirmed tuberculosis."
    ]
  },
  {
    id: "s3-0382",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Noncardioembolic ischemic stroke secondary prevention",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 66-year-old man is recovering from a minor ischemic stroke attributed to small-vessel disease. Telemetry over several days shows no atrial fibrillation, carotid imaging reveals less than 50% stenosis, and echocardiography shows no cardiac source of embolism. His deficits have largely resolved. He smokes, has hypertension and an LDL cholesterol of 150 mg/dL, and is currently on no antithrombotic or lipid therapy. You are arranging his long-term secondary prevention.",
    lead: "Which of the following is the most appropriate long-term secondary prevention?",
    options: [
      "Start warfarin with a target INR of 2 to 3.",
      "Begin antiplatelet therapy plus a high-intensity statin and aggressively control vascular risk factors.",
      "Prescribe long-term prophylactic antibiotics.",
      "Provide no medication and simply observe.",
      "Start a direct oral anticoagulant despite documented sinus rhythm."
    ],
    answer: 1,
    exp: "For a noncardioembolic ischemic stroke without atrial fibrillation or a high-grade carotid lesion, secondary prevention rests on antiplatelet therapy (such as aspirin or clopidogrel), a high-intensity statin, blood pressure control, and smoking cessation. Anticoagulation is not superior to antiplatelet therapy for noncardioembolic stroke and adds bleeding risk.",
    why: [
      "Warfarin offers no advantage over antiplatelet therapy in noncardioembolic stroke and increases bleeding.",
      "Correct: antiplatelet therapy plus a high-intensity statin and vascular risk-factor control is the standard secondary prevention for noncardioembolic stroke.",
      "Antibiotics have no role in stroke prevention.",
      "Doing nothing leaves a high-risk patient without proven preventive therapy.",
      "A direct oral anticoagulant is indicated for cardioembolic sources such as atrial fibrillation, which is absent here."
    ]
  },
  {
    id: "s3-0383",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Diabetic gastroparesis management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 52-year-old woman with a 20-year history of poorly controlled type 1 diabetes has several months of early satiety, postprandial fullness, bloating, nausea, and occasional vomiting of undigested food. She has lost weight and has erratic glucose control. Upper endoscopy shows retained food but no obstructing lesion or ulcer, and a gastric emptying scintigraphy study demonstrates markedly delayed emptying. There is no mechanical obstruction.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Advise large, high-fat, high-fiber meals.",
      "Start chronic opioids for the abdominal discomfort.",
      "Optimize glycemic control, recommend small frequent low-fat and low-fiber meals, and start a prokinetic such as metoclopramide.",
      "Begin an anticholinergic agent to slow gut motility.",
      "Proceed directly to surgical gastrectomy."
    ],
    answer: 2,
    exp: "Delayed gastric emptying without obstruction in long-standing diabetes indicates diabetic gastroparesis. Management combines optimized glycemic control (hyperglycemia itself slows emptying), dietary modification with small, frequent, low-fat and low-fiber meals, and a prokinetic agent such as metoclopramide, with attention to its neurologic side effects.",
    why: [
      "Large, high-fat, high-fiber meals delay gastric emptying further and worsen symptoms.",
      "Opioids slow gut motility and aggravate gastroparesis while adding dependence risk.",
      "Correct: glycemic optimization, small low-fat low-fiber meals, and a prokinetic such as metoclopramide are the mainstays of diabetic gastroparesis therapy.",
      "Anticholinergics slow motility and would worsen delayed emptying.",
      "Surgery is a last resort for refractory disease, not initial management."
    ]
  },
  {
    id: "s3-0384",
    system: "Emergency Medicine",
    discipline: "Toxicology",
    topic: "Organophosphate poisoning management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 41-year-old agricultural worker is brought in after collapsing while applying pesticide without protective equipment. He is drooling, tearing, and sweating profusely, with abdominal cramping, vomiting, and involuntary urination. On examination he has pinpoint pupils, diffuse wheezing with copious bronchial secretions, a heart rate of 46/min, and muscle fasciculations. His clothing is soaked, and his oxygen saturation is falling because of the secretions.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Administer naloxone for the depressed consciousness.",
      "Give a beta-blocker to treat the bradycardia.",
      "Provide activated charcoal as the primary antidote.",
      "Remove contaminated clothing, give atropine titrated to drying of secretions, and add pralidoxime.",
      "Start physostigmine to reverse the toxidrome."
    ],
    answer: 3,
    exp: "The cholinergic toxidrome (muscarinic secretions, miosis, bradycardia plus nicotinic fasciculations) indicates organophosphate poisoning from acetylcholinesterase inhibition. Management is decontamination with removal of contaminated clothing, high-dose atropine titrated to drying of pulmonary secretions, and pralidoxime to reactivate acetylcholinesterase, along with airway support.",
    why: [
      "Naloxone reverses opioids and does not address anticholinesterase toxicity.",
      "A beta-blocker would worsen bradycardia and does not treat the underlying cholinergic excess.",
      "Charcoal does not reverse the toxidrome and risks aspiration given copious secretions.",
      "Correct: decontamination plus atropine titrated to secretion control and pralidoxime is the treatment for organophosphate poisoning.",
      "Physostigmine is an anticholinesterase itself and would dangerously worsen cholinergic toxicity."
    ]
  },
  {
    id: "s3-0385",
    system: "Emergency Medicine",
    discipline: "Toxicology",
    topic: "Methanol (toxic alcohol) poisoning management",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 48-year-old man is brought in obtunded after drinking an unlabeled liquid at a homeless encampment. As he becomes more alert he complains that his vision looks like a snowfield. He is tachypneic with deep breathing. His laboratory studies show a severe high-anion-gap metabolic acidosis with an elevated osmolar gap and a normal lactate, and ethanol is undetectable. He has not yet received an antidote.\n\n| Test | Value |\n|---|---|\n| Arterial pH | 7.15 |\n| Bicarbonate | 8 mEq/L |\n| Anion gap | 28 |\n| Osmolar gap | 25 |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Give activated charcoal, which effectively binds methanol.",
      "Administer naloxone for the altered mental status.",
      "Provide only intravenous crystalloid and observe.",
      "Treat empirically with insulin and dextrose.",
      "Start fomepizole to block alcohol dehydrogenase and arrange urgent hemodialysis."
    ],
    answer: 4,
    exp: "Visual disturbance with a high-anion-gap acidosis and elevated osmolar gap after ingesting an unknown alcohol points to methanol poisoning. Treatment blocks conversion to toxic formic acid with fomepizole (an alcohol dehydrogenase inhibitor) and removes methanol and correct acidosis with hemodialysis; sodium bicarbonate and folinic acid are adjuncts.",
    why: [
      "Charcoal does not bind alcohols well and does not treat established methanol toxicity.",
      "Naloxone does not reverse methanol poisoning.",
      "Fluids alone do not stop formic acid production or clear methanol; specific antidotal therapy is required.",
      "Insulin and dextrose do not address alcohol dehydrogenase or the toxic metabolite.",
      "Correct: fomepizole blocks alcohol dehydrogenase and hemodialysis removes methanol and its metabolites while correcting the acidosis."
    ]
  },
  {
    id: "s3-0386",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Post-cardiac-arrest targeted temperature management",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 58-year-old man collapsed at home in ventricular fibrillation and achieved return of spontaneous circulation after bystander CPR and two defibrillations by paramedics. On arrival he is intubated, hemodynamically stabilized on a low-dose vasopressor, and remains comatose without purposeful movement. His post-resuscitation electrocardiogram shows no ST-segment elevation, and bedside echocardiography shows no reversible mechanical cause. You are planning post-resuscitation care.\n\n**[ECG: Post-return-of-circulation sinus rhythm at 92/min with no ST-segment elevation and nonspecific T-wave changes]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Initiate targeted temperature management (32-36 C) with structured post-resuscitation intensive care.",
      "Extubate immediately now that circulation has returned.",
      "Administer routine high-dose corticosteroids to all survivors.",
      "Aggressively rewarm the patient with active external warming.",
      "Withdraw care immediately because he suffered a cardiac arrest."
    ],
    answer: 0,
    exp: "A comatose survivor of cardiac arrest with return of spontaneous circulation benefits from targeted temperature management, maintaining a controlled temperature (32-36 C) while avoiding fever, along with hemodynamic support, ventilation, and delayed neuroprognostication. This bundle improves neurologic outcomes; prognosis should not be declared this early.",
    why: [
      "Correct: targeted temperature management with post-resuscitation intensive care is the standard for a comatose survivor of cardiac arrest.",
      "Extubating a comatose patient who cannot protect the airway is unsafe.",
      "Routine corticosteroids are not standard post-arrest therapy.",
      "Active warming toward hyperthermia worsens neurologic injury and is the wrong direction.",
      "Early withdrawal of care is inappropriate because reliable neuroprognostication requires days."
    ]
  },
  {
    id: "s3-0387",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Acute cholangitis management",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 70-year-old woman presents with 1 day of right upper quadrant pain, rigors, and yellowing of her eyes. She is febrile to 38.8 C and mildly hypotensive, improving after a fluid bolus. She has scleral icterus and right upper quadrant tenderness. Ultrasound shows a dilated common bile duct with a stone and gallstones, and there is no perforation. Her laboratory studies confirm cholestasis and inflammation.\n\n| Test | Value |\n|---|---|\n| Total bilirubin | 5.8 mg/dL |\n| Alkaline phosphatase | markedly elevated |\n| WBC | 18,000/microL |\n| Lactate | mildly elevated |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Schedule elective outpatient cholecystectomy in 6 weeks without antibiotics.",
      "Start intravenous fluids and antibiotics and arrange urgent biliary decompression by ERCP.",
      "Give oral antibiotics and discharge her home.",
      "Proceed immediately to open common bile duct exploration as first-line therapy.",
      "Observe without antibiotics pending blood-culture results."
    ],
    answer: 1,
    exp: "Fever, jaundice, and right upper quadrant pain with a dilated bile duct and an obstructing stone indicate acute cholangitis. Management is resuscitation with intravenous fluids and broad-spectrum antibiotics plus urgent biliary decompression, usually by ERCP; cholecystectomy follows after the acute infection resolves.",
    why: [
      "A delayed elective operation without antibiotics ignores an active, potentially fatal biliary infection.",
      "Correct: intravenous fluids and antibiotics with urgent ERCP for biliary decompression is the treatment of acute cholangitis.",
      "Oral antibiotics and discharge are unsafe for an obstructed, infected biliary tree with sepsis.",
      "Open duct exploration is not first-line when endoscopic drainage is available.",
      "Withholding antibiotics while awaiting cultures risks progression to overwhelming sepsis."
    ]
  },
  {
    id: "s3-0388",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Strangulated inguinal hernia management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 58-year-old man presents with 6 hours of a painful, enlarging bulge in his right groin that he can no longer push back in. He now has nausea, bilious vomiting, and abdominal distention. The groin mass is exquisitely tender and firm with overlying erythema, and gentle attempts at reduction fail and increase the pain. He is tachycardic with localized peritoneal signs, and an abdominal film shows dilated small-bowel loops.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Attempt vigorous manual reduction and discharge him home.",
      "Schedule an elective outpatient repair in 1 month.",
      "Take him for emergent surgical exploration and hernia repair.",
      "Apply a supportive truss and observe.",
      "Order an outpatient ultrasound and arrange clinic follow-up."
    ],
    answer: 2,
    exp: "An irreducible, tender, erythematous groin hernia with bowel obstruction and peritoneal signs indicates a strangulated inguinal hernia with compromised bowel. This is a surgical emergency requiring prompt operative exploration to relieve the obstruction, assess bowel viability, and repair the defect; forceful reduction risks returning dead bowel to the abdomen.",
    why: [
      "Vigorous reduction of a strangulated hernia can reduce nonviable bowel into the peritoneum and cause peritonitis.",
      "Elective delay is unsafe when bowel is already strangulating.",
      "Correct: a strangulated hernia with obstruction and peritoneal signs requires emergent surgical exploration and repair.",
      "A truss does not treat strangulation and would delay lifesaving surgery.",
      "Outpatient imaging and follow-up dangerously delay treatment of an acute surgical emergency."
    ]
  },
  {
    id: "s3-0389",
    system: "Surgery",
    discipline: "Thoracic Surgery",
    topic: "Boerhaave esophageal perforation management",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 55-year-old man develops sudden severe retrosternal and epigastric pain immediately after an episode of forceful vomiting following a large meal and heavy drinking. He is diaphoretic and tachycardic, with subcutaneous crepitus palpable at the base of the neck and a crunching sound over the precordium synchronous with the heartbeat. A contrast-enhanced CT of the chest is shown, and he is kept nil per os.\n\n**[IMAGE: CT chest showing pneumomediastinum, a left pleural effusion, and contrast extravasation from a distal esophageal tear]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Discharge him with oral antacids and reassurance.",
      "Perform elective upper endoscopy with biopsy and observe.",
      "Give oral contrast and advance his diet to test tolerance.",
      "Keep him nil per os, start broad-spectrum antibiotics and fluids, and obtain urgent surgical consultation for operative repair and drainage.",
      "Treat him for acute myocardial infarction with anticoagulation."
    ],
    answer: 3,
    exp: "Forceful emesis followed by chest pain with subcutaneous emphysema, a Hamman crunch, and CT evidence of pneumomediastinum with contrast extravasation indicates Boerhaave syndrome (spontaneous esophageal rupture). Management is nil per os, aggressive resuscitation, broad-spectrum antibiotics (with antifungal coverage), and urgent surgical intervention for repair and drainage of mediastinal contamination.",
    why: [
      "Antacids and discharge would be fatal for a full-thickness esophageal rupture.",
      "Endoscopy with biopsy and observation delays definitive management and can extend the perforation.",
      "Feeding a perforated esophagus worsens mediastinal contamination.",
      "Correct: nil per os, broad-spectrum antibiotics, resuscitation, and urgent surgical repair with drainage is the management of Boerhaave syndrome.",
      "Anticoagulation for a misdiagnosed infarction would be harmful and misses the perforation."
    ]
  },
  {
    id: "s3-0390",
    system: "Pediatrics",
    discipline: "Pediatric Cardiology",
    topic: "Kawasaki disease treatment",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 3-year-old boy has had high fever for 6 days along with bilateral nonexudative conjunctival injection, cracked erythematous lips with a strawberry tongue, a polymorphous truncal rash, erythema and swelling of the hands and feet, and a single enlarged cervical lymph node. Infections have been reasonably excluded, and his inflammatory markers are markedly elevated. He meets diagnostic criteria, and an echocardiogram is arranged to assess the coronary arteries.\n\n| Feature | Status |\n|---|---|\n| Fever duration | 6 days |\n| Conjunctivitis / mucositis | present |\n| Rash / extremity changes | present |\n| Cervical lymphadenopathy | present |",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Corticosteroids alone as first-line therapy.",
      "Supportive care and antipyretics only.",
      "Broad-spectrum antibiotics for presumed bacterial infection.",
      "Low-dose aspirin monotherapy without immunoglobulin.",
      "Administer intravenous immunoglobulin plus aspirin to reduce the risk of coronary artery aneurysms."
    ],
    answer: 4,
    exp: "This child meets criteria for Kawasaki disease. Prompt treatment with intravenous immunoglobulin plus aspirin, ideally within the first 10 days of fever, substantially reduces the risk of coronary artery aneurysms, the most serious complication; echocardiography monitors the coronary arteries.",
    why: [
      "Corticosteroids may be added for high-risk or refractory disease but are not first-line monotherapy.",
      "Supportive care alone leaves the child at high risk for coronary aneurysms.",
      "Antibiotics do not treat this inflammatory vasculitis.",
      "Aspirin alone without immunoglobulin does not adequately lower the aneurysm risk.",
      "Correct: intravenous immunoglobulin plus aspirin is first-line therapy and reduces the risk of coronary artery aneurysms."
    ]
  },
  {
    id: "s3-0391",
    system: "Pediatrics",
    discipline: "Neonatology",
    topic: "Neonatal hyperbilirubinemia phototherapy management",
    difficulty: "easy",
    anchor: "table",
    vignette: "A term newborn boy is evaluated at 60 hours of life for visible jaundice noted by the nursing staff. He was born at 39 weeks after an uncomplicated pregnancy, is breastfeeding, and is otherwise well, alert, and feeding vigorously with normal tone and no lethargy. His blood type is compatible with his mother's, the direct antiglobulin test is negative, and there are no signs of acute bilirubin encephalopathy. His total serum bilirubin plotted on the hour-specific nomogram exceeds the phototherapy threshold.\n\n| Parameter | Value |\n|---|---|\n| Age | 60 hours |\n| Total serum bilirubin | above phototherapy line |\n| Direct antiglobulin test | negative |\n| Neurologic exam | normal |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Begin phototherapy according to the hour-specific bilirubin nomogram.",
      "Perform an immediate exchange transfusion regardless of the level.",
      "Permanently discontinue breastfeeding.",
      "Give oral phenobarbital as first-line therapy.",
      "Discharge with no treatment or follow-up."
    ],
    answer: 0,
    exp: "A term neonate whose total serum bilirubin exceeds the age-specific phototherapy threshold on the nomogram is treated with phototherapy, which converts bilirubin to water-soluble isomers for excretion. Exchange transfusion is reserved for much higher levels or signs of encephalopathy, and feeding is continued.",
    why: [
      "Correct: phototherapy guided by the hour-specific nomogram is the appropriate treatment when the bilirubin crosses the threshold.",
      "Exchange transfusion is reserved for markedly higher levels or acute encephalopathy, not this level.",
      "Breastfeeding is generally continued; permanent cessation is unnecessary.",
      "Phenobarbital is not used for routine neonatal jaundice.",
      "Discharging without treatment risks a rising bilirubin and kernicterus."
    ]
  },
  {
    id: "s3-0392",
    system: "Pediatrics",
    discipline: "Pediatric Cardiology",
    topic: "Tetralogy of Fallot hypercyanotic spell management",
    difficulty: "hard",
    anchor: null,
    vignette: "A 7-month-old infant with known tetralogy of Fallot is brought in during a prolonged crying episode after waking. His parents note that he suddenly turned deeply blue and began breathing hard and fast. On examination he is cyanotic and irritable with rapid deep respirations, and the previously loud systolic murmur is now much softer. His oxygen saturation has dropped markedly. He is having a hypercyanotic spell.",
    lead: "Which of the following is the most appropriate immediate management?",
    options: [
      "Give a peripheral vasodilator to reduce afterload.",
      "Place the infant in a knee-to-chest position, provide oxygen and calming, and escalate to morphine and intravenous fluids as needed.",
      "Start a beta-agonist infusion to increase the heart rate.",
      "Administer furosemide to reduce preload.",
      "Perform immediate electrical cardioversion."
    ],
    answer: 1,
    exp: "A hypercyanotic (Tet) spell reflects increased right-to-left shunting across the ventricular septal defect. Initial management raises systemic vascular resistance and calms the infant: knee-to-chest positioning, supplemental oxygen, and soothing, escalating to morphine, intravenous fluids, and vasoconstrictors such as phenylephrine if the spell persists.",
    why: [
      "A vasodilator lowers systemic vascular resistance and worsens right-to-left shunting.",
      "Correct: knee-to-chest positioning with oxygen and calming, escalating to morphine and fluids, treats a hypercyanotic spell by increasing systemic resistance and reducing shunt.",
      "A beta-agonist increases infundibular contraction and can worsen right ventricular outflow obstruction.",
      "Diuretics reduce preload and worsen the spell.",
      "Cardioversion treats arrhythmias, not the shunt physiology of a Tet spell."
    ]
  },
  {
    id: "s3-0393",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Ectopic pregnancy methotrexate management",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 28-year-old woman at about 6 weeks gestation by dates has mild left lower quadrant pain and light spotting. She is hemodynamically stable and has no peritoneal signs. Transvaginal ultrasound shows no intrauterine pregnancy and a 2-cm left adnexal mass without cardiac activity and no free fluid. She strongly wishes to avoid surgery, is reliable for follow-up, and has normal liver, renal, and blood counts.\n\n| Test | Value |\n|---|---|\n| Beta-hCG | 1,800 mIU/mL |\n| Intrauterine pregnancy | not seen |\n| Adnexal mass | 2 cm, no cardiac activity |\n| Vital signs | stable |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Expectant management with no intervention and no follow-up.",
      "Immediate exploratory laparotomy for all ectopic pregnancies.",
      "Administer single-dose intramuscular methotrexate and follow beta-hCG on days 4 and 7.",
      "Give misoprostol to expel the pregnancy.",
      "Start combined oral contraceptives."
    ],
    answer: 2,
    exp: "A small, unruptured tubal ectopic pregnancy in a stable, reliable patient with a modest beta-hCG and no fetal cardiac activity is well suited to medical management. Single-dose intramuscular methotrexate is given, with beta-hCG measured on days 4 and 7 to confirm an adequate decline; failure or rupture prompts surgery.",
    why: [
      "Expectant management without any follow-up abandons monitoring of a potentially rupturing ectopic.",
      "Laparotomy is not required for a small, stable, unruptured ectopic amenable to medical therapy.",
      "Correct: single-dose intramuscular methotrexate with day 4 and 7 beta-hCG monitoring is appropriate for a stable, unruptured tubal ectopic.",
      "Misoprostol does not treat ectopic pregnancy.",
      "Oral contraceptives have no role in treating an established ectopic pregnancy."
    ]
  },
  {
    id: "s3-0394",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Symptomatic uterine leiomyoma management",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 37-year-old woman reports several months of heavy, prolonged menstrual bleeding with clots, pelvic pressure, and urinary frequency. On examination her uterus is enlarged, firm, and irregular. She is fatigued, and laboratory testing shows iron-deficiency anemia. She wishes to preserve her fertility and avoid major surgery if possible. Pelvic ultrasound is shown, and pregnancy and endometrial pathology have been excluded.\n\n**[IMAGE: Transvaginal ultrasound showing an enlarged uterus with several well-circumscribed hypoechoic intramural leiomyomas]**",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Proceed directly to hysterectomy despite her fertility wishes.",
      "Prescribe long-term opioids for the pelvic pressure.",
      "Reassure her and offer no treatment for the bleeding or anemia.",
      "Start medical therapy to control bleeding (such as hormonal therapy or tranexamic acid), treat the anemia, and reserve myomectomy for fertility preservation if symptoms persist.",
      "Begin a GnRH agonist indefinitely as sole lifelong therapy without add-back or a definitive plan."
    ],
    answer: 3,
    exp: "For symptomatic uterine leiomyomas in a woman who wishes to preserve fertility, initial management is medical: control bleeding with hormonal therapy or tranexamic acid and correct the iron-deficiency anemia. Uterus-sparing myomectomy is reserved for those desiring fertility whose symptoms persist; hysterectomy is definitive but forfeits fertility.",
    why: [
      "Hysterectomy ends fertility and is not appropriate initial therapy when she wishes to conceive.",
      "Chronic opioids do not treat fibroids and add dependence risk.",
      "Doing nothing leaves her with symptomatic bleeding and untreated anemia.",
      "Correct: medical therapy to control bleeding plus treating the anemia, reserving myomectomy for persistent symptoms, preserves fertility and is appropriate initial management.",
      "Indefinite GnRH agonist monotherapy without add-back causes hypoestrogenic bone loss and is not a standalone long-term plan."
    ]
  },
  {
    id: "s3-0395",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Gestational hypertension management",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 29-year-old woman at 34 weeks gestation is found on a routine visit to have a blood pressure of 150/94 mm Hg, confirmed on repeat measurement 4 hours later. She feels well with no headache, visual changes, or epigastric pain. She had normal blood pressures earlier in pregnancy. Her reflexes are normal, and testing shows no proteinuria with normal platelets, liver enzymes, and creatinine. The fetus is growing appropriately with a reassuring tracing.\n\n| Test | Value |\n|---|---|\n| Blood pressure | 150/94 mm Hg |\n| Urine protein | negative |\n| Platelets / LFTs / creatinine | normal |\n| Symptoms | none |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Deliver immediately by cesarean at 34 weeks.",
      "Start magnesium sulfate now for seizure prophylaxis.",
      "Begin an ACE inhibitor for blood pressure control.",
      "Discharge her with no follow-up until her due date.",
      "Monitor closely with serial blood pressures, laboratory tests, and fetal surveillance, and plan delivery at 37 weeks."
    ],
    answer: 4,
    exp: "New hypertension after 20 weeks without proteinuria, symptoms, or laboratory abnormalities is gestational hypertension without severe features. Management is close outpatient surveillance with serial blood pressures, laboratory monitoring for progression to preeclampsia, and fetal assessment, with delivery planned around 37 weeks.",
    why: [
      "Immediate cesarean at 34 weeks is not warranted for gestational hypertension without severe features.",
      "Magnesium sulfate is used for severe features or eclampsia, which are absent here.",
      "ACE inhibitors are contraindicated in pregnancy because of fetal toxicity.",
      "Discharging without follow-up misses progression to preeclampsia.",
      "Correct: close surveillance with serial pressures, labs, and fetal monitoring and planned delivery at 37 weeks is the management of gestational hypertension without severe features."
    ]
  },
  {
    id: "s3-0396",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Panic disorder first-line treatment",
    difficulty: "easy",
    anchor: null,
    vignette: "A 30-year-old woman describes recurrent, unexpected episodes of sudden intense fear that peak within minutes with palpitations, shortness of breath, chest tightness, sweating, and a feeling that she is going to die. Between attacks she worries constantly about having another and has begun avoiding driving and crowded stores. A thorough medical evaluation, including thyroid tests and an electrocardiogram, is normal, and she uses no stimulants or drugs.",
    lead: "Which of the following is the most appropriate first-line treatment?",
    options: [
      "Start a selective serotonin reuptake inhibitor and/or refer for cognitive behavioral therapy.",
      "Prescribe a standing long-term benzodiazepine as maintenance monotherapy.",
      "Advise her to avoid all situations that could trigger an attack.",
      "Begin an antipsychotic as monotherapy.",
      "Provide reassurance alone with no treatment despite the functional impairment."
    ],
    answer: 0,
    exp: "Recurrent unexpected panic attacks with persistent anticipatory worry and avoidance define panic disorder. First-line treatment is an SSRI (or SNRI) and/or cognitive behavioral therapy, which reduce attack frequency and phobic avoidance; benzodiazepines are reserved for short-term bridging because of dependence risk.",
    why: [
      "Correct: an SSRI and/or cognitive behavioral therapy is first-line treatment for panic disorder.",
      "Long-term daily benzodiazepine monotherapy carries dependence risk and is not first-line.",
      "Encouraging avoidance reinforces phobic behavior rather than treating the disorder.",
      "Antipsychotic monotherapy is not indicated for panic disorder.",
      "Reassurance alone is insufficient given her functional impairment."
    ]
  },
  {
    id: "s3-0397",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Tardive dyskinesia management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 60-year-old woman with schizophrenia treated for many years with a first-generation antipsychotic develops slow, involuntary, repetitive movements of her lips, tongue, and jaw, along with occasional writhing finger movements. The movements are present at rest, and she is only partly aware of them. Her symptoms are otherwise stable, and there is no fever, rigidity, or acute distress. The findings have persisted for several months.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Abruptly stop the antipsychotic and give an anticholinergic.",
      "Reassess the antipsychotic regimen and start a VMAT2 inhibitor such as valbenazine or deutetrabenazine.",
      "Increase the antipsychotic dose to suppress the movements.",
      "Start levodopa to treat the abnormal movements.",
      "Ignore the movements because they always resolve spontaneously."
    ],
    answer: 1,
    exp: "Persistent choreoathetoid orofacial movements after prolonged antipsychotic exposure are tardive dyskinesia. Management involves reassessing the need for and dose of the causative antipsychotic (often switching toward an agent with lower risk) and treating with a VMAT2 inhibitor such as valbenazine or deutetrabenazine, which reduce the abnormal movements.",
    why: [
      "Abrupt withdrawal can transiently worsen the movements, and anticholinergics tend to aggravate tardive dyskinesia.",
      "Correct: reassessing the antipsychotic and starting a VMAT2 inhibitor such as valbenazine or deutetrabenazine is the evidence-based treatment.",
      "Raising the dose may mask movements briefly but worsens the underlying disorder.",
      "Levodopa increases dopaminergic activity and can exacerbate the dyskinesia.",
      "Tardive dyskinesia is frequently persistent and does not reliably resolve on its own."
    ]
  },
  {
    id: "s3-0398",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Adult seasonal influenza vaccination",
    difficulty: "easy",
    anchor: null,
    vignette: "A 40-year-old generally healthy man comes to his primary care clinic in October for a routine visit. He works in an office, has no chronic conditions, and takes no medications. He recalls having a bad respiratory illness last winter and asks what he can do to lower his chance of getting sick again this season. He has no allergy to vaccine components and no history of a severe reaction to prior vaccination.",
    lead: "Which of the following is the most appropriate recommendation?",
    options: [
      "Tell him no vaccine is recommended for healthy adults.",
      "Advise vaccination only if he develops symptoms.",
      "Recommend the annual inactivated influenza vaccine now.",
      "Give antiviral prophylaxis instead of vaccination.",
      "Defer any influenza vaccination until he turns 65."
    ],
    answer: 2,
    exp: "Annual influenza vaccination is recommended for all adults without a contraindication, ideally before the influenza season begins. For a healthy adult in autumn asking about prevention, the appropriate step is to offer the seasonal inactivated influenza vaccine.",
    why: [
      "Annual influenza vaccination is recommended for essentially all adults, including healthy ones.",
      "Vaccination is preventive and given before illness, not deferred until symptoms appear.",
      "Correct: the annual inactivated influenza vaccine is recommended for all adults without a contraindication and should be offered now.",
      "Antiviral chemoprophylaxis is for specific exposure situations, not a substitute for routine vaccination.",
      "Influenza vaccination is recommended at all adult ages, not delayed to age 65."
    ]
  },
  {
    id: "s3-0399",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Mandatory reporting of suspected child abuse",
    difficulty: "easy",
    anchor: null,
    vignette: "An 18-month-old girl is brought to the emergency department for a fractured arm. The caregiver says she fell from a low couch, but the spiral fracture and several bruises in different stages of healing over the trunk and buttocks are not consistent with that mechanism. The presentation was delayed by 2 days, and the caregivers give differing accounts of what happened. The child is frightened and clings to staff. You are the treating physician.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Discharge her home with the caregiver and schedule routine follow-up.",
      "Confront and accuse the caregiver before any further evaluation.",
      "Wait to report until you have definitive proof of abuse.",
      "Ensure the child's safety, treat the injuries, and report the suspicion to child protective services.",
      "Take no action because reporting requires the caregiver's consent."
    ],
    answer: 3,
    exp: "Injuries inconsistent with the stated mechanism, bruises of varying ages, and a delayed, inconsistent history raise reasonable suspicion of child abuse. Physicians are mandated reporters: the duty is to ensure the child's immediate safety, provide necessary medical care, and report the reasonable suspicion to child protective services without needing to prove abuse.",
    why: [
      "Discharging the child to a potentially unsafe home ignores a mandatory duty to protect.",
      "Accusing the caregiver is neither required nor helpful and may endanger the child; objective reporting is the duty.",
      "Reporting requires only reasonable suspicion, not proof.",
      "Correct: ensure the child's safety, treat the injuries, and report the reasonable suspicion to child protective services as a mandated reporter.",
      "Reporting suspected abuse does not require the caregiver's consent."
    ]
  },
  {
    id: "s3-0400",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Prespecified subgroup analysis interpretation",
    difficulty: "hard",
    anchor: "table",
    vignette: "A large randomized trial of a new cardiovascular drug finds no significant difference from placebo in the overall primary endpoint. In an exploratory analysis, the investigators tested more than a dozen subgroups and report that patients with diabetes appeared to benefit, while nondiabetic patients did not. There was no formal test of interaction, and the diabetes subgroup was not prespecified. A colleague argues the drug should now be used routinely in diabetic patients.\n\n| Result | Finding |\n|---|---|\n| Overall primary endpoint | no significant difference |\n| Diabetic subgroup | apparently significant |\n| Nondiabetic subgroup | no difference |\n| Number of subgroups tested | more than 12 |",
    lead: "Which of the following is the best interpretation of this subgroup result?",
    options: [
      "The subgroup result proves the drug works in diabetics and should change practice.",
      "A significant subgroup always overrides a neutral overall trial result.",
      "Subgroup analyses require no adjustment for multiple testing.",
      "The overall neutral result should be discarded in favor of the subgroup finding.",
      "The subgroup finding is hypothesis-generating and requires a formal interaction test and confirmatory study, because testing many subgroups inflates false-positive results."
    ],
    answer: 4,
    exp: "Post hoc subgroup analyses of an overall negative trial, especially when many subgroups are tested without a prespecified hypothesis or interaction test, are prone to false-positive findings from multiple comparisons. Such results are hypothesis-generating only and should be confirmed with a formal test of interaction and a dedicated prospective study before changing practice.",
    why: [
      "A non-prespecified subgroup result does not prove efficacy and should not change practice on its own.",
      "A subgroup finding does not override an overall neutral result, particularly when exploratory.",
      "Testing many subgroups inflates the false-positive rate, so adjustment and interaction testing are needed.",
      "The primary overall result is the most reliable estimate and should not be discarded for an exploratory subgroup.",
      "Correct: the subgroup finding is hypothesis-generating and needs a formal interaction test and confirmatory study, because multiple subgroup comparisons inflate false positives."
    ]
  }
];
