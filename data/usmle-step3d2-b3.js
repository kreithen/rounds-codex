/*
 * Rounds Codex - USMLE Step 3, Day 2 (Advanced Clinical Management / ACM) bank, Batch 3 (25 items)
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
const USMLE_STEP3D2_B3 = [
  {
    id: "s3-0176",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Chronic stable angina antianginal optimization",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 64-year-old man with chronic stable exertional angina is seen for follow-up. He is already taking aspirin, a high-intensity statin, and a maximally tolerated beta-blocker (metoprolol succinate). He still develops predictable chest tightness climbing two flights of stairs, relieved by rest and sublingual nitroglycerin. His resting heart rate is 56/min and blood pressure is 118/72 mm Hg, and a recent stress echocardiogram showed reversible mid-anterior ischemia without high-risk features and preserved left ventricular function.",
    lead: "Which of the following is the most appropriate next step to reduce his angina?",
    options: [
      "Add a long-acting dihydropyridine calcium channel blocker or long-acting nitrate as a second antianginal agent.",
      "Increase the beta-blocker dose further to intensify rate control.",
      "Refer for coronary artery bypass grafting.",
      "Stop the beta-blocker and rely on sublingual nitroglycerin alone.",
      "Discontinue the statin because it does not relieve angina."
    ],
    answer: 0,
    exp: "He has ongoing angina on a maximally tolerated beta-blocker with low-risk stress findings, so the next step is to add a second antianginal such as a long-acting dihydropyridine calcium channel blocker or a long-acting nitrate. His resting bradycardia precludes further beta-blockade, and revascularization is reserved for high-risk anatomy or symptoms refractory to optimized medical therapy.",
    why: [
      "Correct: when angina persists on a maximally tolerated beta-blocker, adding a long-acting nitrate or dihydropyridine calcium channel blocker is the next step.",
      "His resting heart rate of 56/min leaves no room to up-titrate the beta-blocker without symptomatic bradycardia.",
      "Bypass surgery is for high-risk anatomy or medically refractory symptoms, not low-risk ischemia not yet on optimized therapy.",
      "Stopping the beta-blocker removes effective antianginal and prognostic therapy.",
      "The statin is essential for atherosclerotic risk reduction even though it does not directly relieve angina."
    ]
  },
  {
    id: "s3-0177",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Supratherapeutic INR without bleeding",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 72-year-old woman on warfarin for atrial fibrillation comes in for a routine INR check. She feels well, has no bruising, hematuria, melena, or other signs of bleeding, and recently started a course of an antibiotic for a urinary infection. Her target INR range is 2 to 3, and today's value is markedly elevated as shown.\n\n| Test | Value |\n|---|---|\n| INR | 6.5 |\n| Hemoglobin | 13.4 g/dL |\n| Signs of bleeding | none |\n| Target INR range | 2.0-3.0 |",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Give intravenous vitamin K plus fresh frozen plasma now.",
      "Withhold the next one or two warfarin doses, monitor the INR, and resume at a lower dose.",
      "Administer four-factor prothrombin complex concentrate.",
      "Continue the current warfarin dose unchanged and recheck in one month.",
      "Give intravenous protamine sulfate to reverse the warfarin."
    ],
    answer: 1,
    exp: "For an INR that is elevated (roughly up to 10) without bleeding, the appropriate management is to hold one or two warfarin doses, monitor the INR, and resume at a reduced dose once it falls into range; the offending antibiotic interaction should also be addressed. Vitamin K, plasma, and prothrombin complex concentrate are reserved for serious or life-threatening bleeding.",
    why: [
      "Intravenous vitamin K and plasma are for serious or life-threatening bleeding, not an asymptomatic elevated INR.",
      "Correct: for a supratherapeutic INR without bleeding, hold warfarin, monitor, and resume at a lower dose.",
      "Prothrombin complex concentrate is reserved for major bleeding or urgent reversal, which she does not need.",
      "Continuing the same dose ignores a dangerously high INR and bleeding risk.",
      "Protamine reverses heparin, not warfarin, and has no role here."
    ]
  },
  {
    id: "s3-0178",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Heart failure with preserved ejection fraction",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 70-year-old woman with hypertension, obesity, and type 2 diabetes reports progressive exertional dyspnea and leg swelling over several months. Examination shows elevated jugular venous pressure and bilateral pedal edema, and her natriuretic peptide level is elevated. Echocardiography shows a left ventricular ejection fraction of 60% with grade 2 diastolic dysfunction and left atrial enlargement. She has been started on a loop diuretic, with improvement in her congestion.",
    lead: "Which of the following is the most appropriate additional therapy to reduce heart failure hospitalizations?",
    options: [
      "Add digoxin for symptom control.",
      "Add oral nitrates plus hydralazine.",
      "Add an SGLT2 inhibitor.",
      "Add a short-acting dihydropyridine calcium channel blocker.",
      "Add high-dose loop diuretic indefinitely regardless of volume status."
    ],
    answer: 2,
    exp: "She has heart failure with preserved ejection fraction. Beyond diuretics for congestion and control of blood pressure and comorbidities, an SGLT2 inhibitor is now guideline-recommended because it reduces heart failure hospitalizations across the ejection-fraction spectrum. Digoxin, nitrate-hydralazine, and calcium channel blockers do not provide this benefit in HFpEF.",
    why: [
      "Digoxin does not reduce hospitalizations in HFpEF and carries toxicity risk.",
      "Nitrate-hydralazine is used in HFrEF (notably in certain populations), not to reduce HFpEF hospitalization.",
      "Correct: an SGLT2 inhibitor reduces heart failure hospitalizations in HFpEF and is the recommended add-on.",
      "Short-acting dihydropyridines can worsen edema and provide no outcome benefit here.",
      "Escalating diuretics without regard to volume risks hypovolemia and does not address outcomes."
    ]
  },
  {
    id: "s3-0179",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Adult asthma controller step-up",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 34-year-old woman with asthma returns for review. She is currently on a low-dose inhaled corticosteroid, uses her short-acting beta-agonist rescue inhaler four to five times per week, and wakes with symptoms about twice a week. Her inhaler technique and adherence are confirmed to be good, and there are no untreated triggers. Her control assessment is summarized below.\n\n| Parameter | Value |\n|---|---|\n| Current controller | low-dose inhaled corticosteroid |\n| Rescue inhaler use | 4-5 times/week |\n| Nighttime awakenings | ~2/week |\n| Technique / adherence | confirmed adequate |",
    lead: "Which of the following is the most appropriate next step in her maintenance therapy?",
    options: [
      "Add scheduled short-acting beta-agonist several times daily.",
      "Start chronic daily oral corticosteroids.",
      "Replace the inhaled corticosteroid with a leukotriene antagonist alone.",
      "Step up to a combination inhaled corticosteroid-long-acting beta-agonist inhaler.",
      "Discontinue controller therapy and use the rescue inhaler as needed."
    ],
    answer: 3,
    exp: "Her asthma is not well controlled on a low-dose inhaled corticosteroid despite good adherence and technique, so the guideline-directed step-up is to a combination inhaled corticosteroid-long-acting beta-agonist inhaler (or to increase the inhaled steroid dose). Scheduled rescue beta-agonists, chronic oral steroids, and dropping the inhaled steroid are all inappropriate.",
    why: [
      "Scheduled short-acting beta-agonist is not controller therapy and masks worsening control.",
      "Chronic oral corticosteroids carry major toxicity and are not a routine step-up.",
      "Leukotriene monotherapy is less effective than inhaled corticosteroids and would remove the anti-inflammatory anchor.",
      "Correct: uncontrolled asthma on low-dose inhaled corticosteroid warrants stepping up to combination inhaled corticosteroid-long-acting beta-agonist.",
      "Stopping controller therapy would worsen her already inadequate control."
    ]
  },
  {
    id: "s3-0180",
    system: "Internal Medicine",
    discipline: "Gastroenterology/Hepatology",
    topic: "Partially responsive GERD optimization",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 48-year-old man has had typical heartburn and regurgitation for several months. He was started on a once-daily proton pump inhibitor with partial relief. On questioning, he admits he takes the pill irregularly, often with lunch or at bedtime, and continues to eat large late-night meals. He has no dysphagia, weight loss, anemia, or gastrointestinal bleeding, and he is otherwise well.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Refer him directly for antireflux (fundoplication) surgery.",
      "Add long-term metoclopramide as a prokinetic.",
      "Stop the proton pump inhibitor and use antacids only as needed.",
      "Order 24-hour esophageal pH monitoring before any other change.",
      "Counsel him to take the proton pump inhibitor 30-60 minutes before a meal and reinforce adherence and lifestyle measures."
    ],
    answer: 4,
    exp: "His incomplete response is largely explained by improper proton pump inhibitor timing and poor adherence plus ongoing dietary triggers. Optimizing therapy, taking the drug 30-60 minutes before a meal, ensuring adherence, and addressing lifestyle, is the appropriate next step before escalating. Surgery, chronic prokinetics, and invasive testing are premature without an optimized trial and alarm features.",
    why: [
      "Antireflux surgery is not indicated before medical therapy is optimized and without a clear indication.",
      "Chronic metoclopramide risks tardive dyskinesia and is not first-line for typical GERD.",
      "Stepping down to antacids alone would worsen a patient with persistent symptoms.",
      "Ambulatory pH testing is reserved for diagnostic uncertainty or pre-surgical evaluation, not before optimizing therapy.",
      "Correct: optimizing proton pump inhibitor timing (before meals), adherence, and lifestyle is the appropriate next step."
    ]
  },
  {
    id: "s3-0181",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Painful diabetic peripheral neuropathy",
    difficulty: "easy",
    anchor: null,
    vignette: "A 60-year-old man with long-standing type 2 diabetes reports several months of burning, tingling pain in both feet that is worse at night and interferes with sleep. Examination shows symmetric decreased pinprick and vibration sensation in a stocking distribution with intact skin, no ulceration, and good pedal pulses. His glycemic control is reasonable, and his urine albumin is normal.",
    lead: "Which of the following is the most appropriate initial pharmacotherapy for his symptoms?",
    options: [
      "Start duloxetine (or a gabapentinoid) for neuropathic pain.",
      "Start a scheduled long-acting opioid.",
      "Prescribe a scheduled NSAID for the foot pain.",
      "Begin high-dose vitamin B12 supplementation.",
      "Apply a topical antibiotic to the feet."
    ],
    answer: 0,
    exp: "He has painful diabetic peripheral neuropathy. First-line pharmacotherapy is an agent with proven benefit for neuropathic pain such as duloxetine, a gabapentinoid (gabapentin or pregabalin), or a tricyclic antidepressant, alongside optimized glycemic control. Opioids and NSAIDs are not first-line, and B12 is only indicated if he is deficient.",
    why: [
      "Correct: duloxetine or a gabapentinoid is first-line for painful diabetic neuropathy.",
      "Chronic opioids are not first-line and carry dependence and tolerance risks.",
      "NSAIDs do not treat neuropathic pain and risk renal and gastrointestinal harm.",
      "B12 helps only if a deficiency is present, which is not indicated here.",
      "A topical antibiotic treats infection, not neuropathic pain, and there is no ulcer."
    ]
  },
  {
    id: "s3-0182",
    system: "Internal Medicine",
    discipline: "Gastroenterology/Hepatology",
    topic: "Chronic hepatitis B treatment eligibility",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 45-year-old man from an endemic region has had a positive hepatitis B surface antigen for more than a year. He feels well with no stigmata of chronic liver disease, and noninvasive assessment shows no cirrhosis. Serial monitoring now shows persistent active viral replication with liver enzyme elevation, summarized below.\n\n| Test | Value |\n|---|---|\n| HBsAg | positive (> 6 months) |\n| HBeAg | positive |\n| HBV DNA | > 2,000,000 IU/mL |\n| ALT | ~3x upper limit of normal |\n| FIB-4 fibrosis index | low (no cirrhosis) |",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Continue observation with no antiviral therapy indefinitely.",
      "Initiate antiviral therapy with tenofovir or entecavir.",
      "Give hepatitis B immune globulin.",
      "Treat only if he later develops cirrhosis.",
      "Start lamivudine monotherapy as the preferred long-term agent."
    ],
    answer: 1,
    exp: "He has immune-active chronic hepatitis B: HBeAg-positive with high HBV DNA and ALT elevated to roughly three times normal, indicating ongoing hepatic inflammation. This meets criteria for treatment, and first-line therapy is a high-barrier nucleos(t)ide analogue such as tenofovir or entecavir to suppress viral replication and prevent progression. Lamivudine is avoided because of high resistance rates.",
    why: [
      "Ongoing observation is for the inactive carrier or immune-tolerant phase, not active hepatitis with elevated ALT and high DNA.",
      "Correct: immune-active hepatitis B (high DNA, elevated ALT) warrants first-line tenofovir or entecavir.",
      "Hepatitis B immune globulin is for post-exposure prophylaxis or transplant, not chronic treatment.",
      "Waiting for cirrhosis forgoes the chance to prevent progression during active inflammation.",
      "Lamivudine has a low genetic barrier and high resistance, so it is not the preferred agent."
    ]
  },
  {
    id: "s3-0183",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Migraine preventive therapy selection",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 30-year-old woman has episodic migraine without aura, now occurring about eight days per month and disabling enough to miss work. Her acute attacks respond to a triptan, but she is using it on most headache days. She also has recently diagnosed hypertension that is not yet on treatment. Her neurologic examination is normal, and she has no contraindication to beta-blockade.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Advise more frequent triptan use to control the attacks.",
      "Start scheduled butalbital-containing combination analgesics.",
      "Start propranolol for migraine prophylaxis.",
      "Begin botulinum toxin injections now.",
      "Start verapamil as first-line migraine prevention."
    ],
    answer: 2,
    exp: "With frequent, disabling migraines and escalating acute-medication use, she needs preventive therapy. Propranolol is an evidence-based first-line preventive and has the added benefit of treating her coexisting hypertension. Increasing acute medications risks medication-overuse headache, butalbital should be avoided, botulinum toxin is for chronic migraine (15 or more headache days per month), and verapamil is used for cluster headache.",
    why: [
      "More frequent triptan use risks medication-overuse headache and does not address the underlying frequency.",
      "Butalbital combinations promote dependence and medication-overuse headache and are not preventive therapy.",
      "Correct: propranolol is a first-line migraine preventive and also treats her new hypertension.",
      "Botulinum toxin is indicated for chronic migraine (15 or more headache days per month), which she does not have.",
      "Verapamil is used for cluster headache prophylaxis, not first-line migraine prevention."
    ]
  },
  {
    id: "s3-0184",
    system: "Emergency Medicine",
    discipline: "Gastroenterology",
    topic: "Acute non-variceal upper GI bleeding",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 58-year-old man who takes daily NSAIDs for arthritis presents with two episodes of coffee-ground emesis and black tarry stools. He has no known liver disease or alcohol use. He is pale; two large-bore intravenous lines are placed and crystalloid is started while blood is typed and crossed. His initial data are shown.\n\n| Parameter | Value |\n|---|---|\n| Heart rate | 108/min |\n| Blood pressure | 104/66 mm Hg |\n| Hemoglobin | 9.1 g/dL |\n| Stigmata of chronic liver disease | none |\n| Likely source | peptic ulcer (NSAID use) |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Start octreotide plus prophylactic antibiotics for presumed varices.",
      "Give an oral proton pump inhibitor and discharge with outpatient follow-up.",
      "Proceed directly to exploratory laparotomy.",
      "Start an intravenous proton pump inhibitor and arrange urgent upper endoscopy.",
      "Perform urgent colonoscopy to localize the bleeding."
    ],
    answer: 3,
    exp: "This is an acute non-variceal (likely peptic ulcer) upper gastrointestinal bleed in a patient without liver disease. After resuscitation, the appropriate management is an intravenous proton pump inhibitor and urgent upper endoscopy for diagnosis and hemostatic therapy. Octreotide and antibiotics target variceal bleeding, and surgery is a rescue option for endoscopically uncontrollable hemorrhage.",
    why: [
      "Octreotide and antibiotics are for variceal bleeding in cirrhosis, which he does not have.",
      "Oral acid suppression and discharge are unsafe for an actively bleeding, anemic, tachycardic patient.",
      "Surgery is reserved for bleeding that endoscopy cannot control.",
      "Correct: an intravenous proton pump inhibitor plus urgent upper endoscopy is the standard management of non-variceal upper GI bleeding.",
      "Colonoscopy evaluates lower GI bleeding; melena with hematemesis points to an upper source."
    ]
  },
  {
    id: "s3-0185",
    system: "Emergency Medicine",
    discipline: "Cardiology",
    topic: "Acute cardiogenic pulmonary edema",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 68-year-old man with hypertension presents with sudden severe breathlessness and inability to lie flat. He is anxious and diaphoretic with diffuse bibasilar crackles, an S3 gallop, and elevated jugular venous pressure. His blood pressure is 192/108 mm Hg, heart rate 112/min, and oxygen saturation 86% on room air. His portable chest radiograph is shown.\n\n**[IMAGE: portable AP chest radiograph showing bilateral perihilar alveolar opacities, Kerley B lines, and cardiomegaly, consistent with cardiogenic pulmonary edema]**",
    lead: "Which of the following is the most appropriate immediate management?",
    options: [
      "Give a rapid intravenous crystalloid bolus.",
      "Start broad-spectrum antibiotics for pneumonia.",
      "Give an intravenous beta-blocker to slow the heart rate.",
      "Withhold oxygen and observe until laboratory results return.",
      "Give intravenous furosemide and nitroglycerin with noninvasive positive-pressure ventilation."
    ],
    answer: 4,
    exp: "He has acute hypertensive cardiogenic pulmonary edema. Immediate treatment combines preload/afterload reduction with intravenous nitroglycerin, an intravenous loop diuretic for volume, and noninvasive positive-pressure ventilation to improve oxygenation and reduce work of breathing. A fluid bolus, antibiotics, and beta-blockade would each worsen his condition.",
    why: [
      "A fluid bolus would worsen pulmonary congestion in a volume-overloaded patient.",
      "There is no evidence of pneumonia; the picture is cardiogenic pulmonary edema.",
      "Acute intravenous beta-blockade can precipitate cardiogenic shock in decompensated heart failure.",
      "Withholding oxygen in a hypoxemic patient is dangerous.",
      "Correct: nitroglycerin, a loop diuretic, and noninvasive positive-pressure ventilation are the immediate treatment for cardiogenic pulmonary edema."
    ]
  },
  {
    id: "s3-0186",
    system: "Emergency Medicine",
    discipline: "Critical Care",
    topic: "Symptomatic severe hyponatremia",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 74-year-old woman on a thiazide diuretic is brought in after new confusion progressing to a witnessed generalized seizure. She is postictal and drowsy. Point-of-care and laboratory testing confirm profound hyponatremia with concentrated urine, and her studies are shown while the team prepares treatment.\n\n| Test | Value |\n|---|---|\n| Serum sodium | 112 mEq/L |\n| Serum osmolality | 238 mOsm/kg |\n| Urine osmolality | 480 mOsm/kg |\n| Urine sodium | 55 mEq/L |\n| Volume status | near euvolemic |",
    lead: "Which of the following is the most appropriate immediate treatment?",
    options: [
      "Administer a bolus of 3% hypertonic saline.",
      "Rapidly correct the sodium fully to normal within a few hours.",
      "Institute fluid restriction alone and observe.",
      "Infuse isotonic (0.9%) saline slowly over 24 hours.",
      "Give desmopressin to concentrate the urine."
    ],
    answer: 0,
    exp: "Severe hyponatremia with seizures is a neurologic emergency from cerebral edema and requires a bolus of 3% hypertonic saline to raise the sodium a few mEq/L and stop seizure activity. Correction must then be limited to roughly 6 to 8 mEq/L per 24 hours to avoid osmotic demyelination; overly rapid or full correction is harmful, and fluid restriction alone is too slow for a seizing patient.",
    why: [
      "Correct: symptomatic severe hyponatremia with seizures is treated with a 3% hypertonic saline bolus.",
      "Rapid full correction risks osmotic demyelination syndrome; the rise must be limited per 24 hours.",
      "Fluid restriction alone acts too slowly for an actively seizing patient.",
      "Isotonic saline given slowly is inadequate for life-threatening symptomatic hyponatremia.",
      "Desmopressin raises the risk of worsening hyponatremia and is used only to prevent overcorrection, not acutely here."
    ]
  },
  {
    id: "s3-0187",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Acute cholecystitis management timing",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 50-year-old woman presents with 2 days of constant right upper quadrant pain, fever, and nausea. She has a positive Murphy sign, and her white blood cell count is elevated. She is hemodynamically stable and an acceptable operative candidate, with a normal bilirubin. Right upper quadrant ultrasonography is performed.\n\n**[IMAGE: right upper quadrant ultrasound showing gallstones, a thickened gallbladder wall, and pericholecystic fluid, without dilation of the common bile duct]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Discharge on antibiotics and schedule elective cholecystectomy in 6 weeks.",
      "Give intravenous antibiotics and perform early laparoscopic cholecystectomy during this admission.",
      "Perform urgent ERCP before any other intervention.",
      "Place a percutaneous cholecystostomy tube as definitive therapy.",
      "Treat with antibiotics alone and avoid surgery entirely."
    ],
    answer: 1,
    exp: "She has acute calculous cholecystitis without evidence of choledocholithiasis or biliary obstruction. For a stable, acceptable operative candidate, the standard of care is intravenous antibiotics and early laparoscopic cholecystectomy during the same admission, which shortens recovery and reduces complications compared with delayed surgery. ERCP and cholecystostomy are reserved for specific indications.",
    why: [
      "Delaying surgery for weeks increases the risk of recurrent or complicated disease in a good operative candidate.",
      "Correct: acute cholecystitis in a stable operative candidate is treated with antibiotics and early laparoscopic cholecystectomy.",
      "ERCP is for choledocholithiasis or cholangitis, which the normal bilirubin and duct argue against.",
      "Cholecystostomy is a temporizing measure for patients too unstable or unfit for surgery.",
      "Antibiotics alone do not remove the diseased gallbladder and risk recurrence and complications."
    ]
  },
  {
    id: "s3-0188",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Early postoperative fever evaluation",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 62-year-old man is on the first postoperative day after an open sigmoid colectomy. He feels reasonably well and is eager to move. His nurse reports a low-grade fever. He has decreased breath sounds at both lung bases, a soft nondistended abdomen with a clean incision, and no calf tenderness or urinary symptoms. His observations are shown.\n\n| Parameter | Value |\n|---|---|\n| Postoperative day | 1 |\n| Temperature | 38.3 C |\n| Heart rate | 86/min |\n| Blood pressure | 126/76 mm Hg |\n| Exam | basal atelectasis; benign abdomen |",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Start broad-spectrum antibiotics empirically.",
      "Obtain an urgent CT of the abdomen to rule out anastomotic leak.",
      "Encourage deep breathing, incentive spirometry, and early ambulation.",
      "Return the patient to the operating room for exploration.",
      "Remove all lines and catheters and begin a full sepsis workup."
    ],
    answer: 2,
    exp: "A low-grade fever on postoperative day 1 with bibasilar atelectasis and an otherwise benign examination most likely reflects atelectasis and the normal inflammatory response to surgery. The appropriate step is pulmonary toilet, incentive spirometry, and early mobilization, with observation. An extensive infectious workup, imaging for a leak, or reoperation is not warranted this early without localizing signs.",
    why: [
      "Empiric antibiotics are not indicated for early postoperative low-grade fever without a source.",
      "An anastomotic leak typically presents later (around days 5 to 7) with peritonitis; imaging now is premature.",
      "Correct: early postoperative fever with atelectasis is managed with incentive spirometry and early ambulation.",
      "Reoperation is unjustified without evidence of a surgical complication.",
      "A full sepsis workup and removing all lines is excessive for a benign day-1 low-grade fever."
    ]
  },
  {
    id: "s3-0189",
    system: "Surgery",
    discipline: "Trauma Surgery",
    topic: "Blunt splenic injury nonoperative management",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 25-year-old man is brought in after a motor vehicle collision with left upper quadrant pain. After an initial liter of crystalloid he is comfortable and hemodynamically stable, with a heart rate of 92/min and blood pressure of 118/74 mm Hg. His abdomen is mildly tender without peritonitis, and he has no other significant injuries. Contrast-enhanced CT is obtained.\n\n**[IMAGE: contrast-enhanced abdominal CT showing a grade II splenic laceration with a small subcapsular hematoma and no active contrast extravasation or other solid-organ injury]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Proceed to immediate splenectomy.",
      "Perform exploratory laparotomy for washout.",
      "Discharge home with outpatient follow-up.",
      "Admit for nonoperative management with serial abdominal exams and hemodynamic monitoring.",
      "Mandate splenic artery angioembolization for this low-grade injury."
    ],
    answer: 3,
    exp: "A hemodynamically stable patient with a low-grade blunt splenic injury and no contrast extravasation is best managed nonoperatively: admission to a monitored setting, serial abdominal examinations, serial hemoglobin, and bed rest, with surgery or angioembolization held in reserve for hemodynamic deterioration or an active blush. Immediate splenectomy or laparotomy is reserved for instability or peritonitis.",
    why: [
      "Immediate splenectomy is for hemodynamic instability or failure of nonoperative management, not a stable low-grade injury.",
      "Laparotomy is indicated for peritonitis or instability, which he does not have.",
      "Discharging a patient with an acute splenic laceration risks delayed hemorrhage and death.",
      "Correct: a stable low-grade splenic injury without a blush is managed nonoperatively with monitoring and serial exams.",
      "Angioembolization is reserved for higher-grade injury or active extravasation, not routine grade II without a blush."
    ]
  },
  {
    id: "s3-0190",
    system: "Pediatrics",
    discipline: "General Pediatrics",
    topic: "Moderate croup management",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 2-year-old boy is brought in with 2 days of coryza followed by a barky, seal-like cough and noisy breathing. He now has inspiratory stridor audible at rest with mild chest wall retractions. He is not drooling or toxic-appearing, is well hydrated, and maintains an oxygen saturation of 96%. His neck radiograph is shown.\n\n**[IMAGE: frontal soft-tissue neck radiograph showing symmetric subglottic tracheal narrowing (steeple sign), consistent with croup]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Start intravenous broad-spectrum antibiotics.",
      "Perform immediate endotracheal intubation.",
      "Give a scheduled albuterol nebulizer treatment.",
      "Obtain blood cultures and admit for observation without treatment.",
      "Give dexamethasone and nebulized epinephrine for the stridor at rest."
    ],
    answer: 4,
    exp: "He has moderate croup (viral laryngotracheitis) with stridor at rest. Management is a single dose of corticosteroid (dexamethasone) for all severities plus nebulized epinephrine when there is stridor at rest, followed by a period of observation for rebound. Antibiotics, intubation, and albuterol are not indicated in typical croup.",
    why: [
      "Croup is viral; antibiotics are not indicated.",
      "Intubation is reserved for impending respiratory failure, which he does not have.",
      "Albuterol treats bronchospasm, not the subglottic edema of croup.",
      "Blood cultures and observation without treatment neglect effective, indicated therapy.",
      "Correct: moderate croup with stridor at rest is treated with dexamethasone plus nebulized epinephrine."
    ]
  },
  {
    id: "s3-0191",
    system: "Pediatrics",
    discipline: "Developmental-Behavioral Pediatrics",
    topic: "ADHD initial management",
    difficulty: "moderate",
    anchor: null,
    vignette: "An 8-year-old boy is evaluated for inattention, impulsivity, and hyperactivity. Standardized rating scales from both his parents and his teacher document symptoms present for more than 6 months in at least two settings, causing academic and social impairment. His hearing, vision, physical and neurologic examinations are normal, and there is no personal or family history of cardiac disease or sudden death. He meets criteria for attention-deficit/hyperactivity disorder.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Start a stimulant medication (methylphenidate) combined with behavioral therapy.",
      "Prescribe a second-generation antipsychotic.",
      "Eliminate sugar from the diet as the primary treatment.",
      "Start a benzodiazepine to reduce his hyperactivity.",
      "Provide reassurance and no specific treatment or follow-up."
    ],
    answer: 0,
    exp: "For a school-aged child who meets criteria for ADHD with impairment across settings, first-line treatment is an FDA-approved stimulant such as methylphenidate combined with behavioral interventions and school support. There are no cardiac red flags requiring further screening. Antipsychotics, benzodiazepines, and dietary elimination are not appropriate primary therapies.",
    why: [
      "Correct: stimulant medication plus behavioral therapy is first-line for ADHD in a school-aged child.",
      "Antipsychotics are not first-line for uncomplicated ADHD and carry significant metabolic risks.",
      "Dietary sugar elimination is not an evidence-based treatment for ADHD.",
      "Benzodiazepines do not treat ADHD and risk sedation and disinhibition.",
      "Withholding treatment leaves impairing, well-documented ADHD unaddressed."
    ]
  },
  {
    id: "s3-0192",
    system: "Pediatrics",
    discipline: "General Pediatrics",
    topic: "Functional constipation management",
    difficulty: "easy",
    anchor: null,
    vignette: "A 4-year-old girl is brought in for several weeks of hard, painful stools passed every few days. Her parents describe her stiffening and hiding when she needs to defecate, apparently withholding because of prior painful stools. She passed meconium normally after birth, is growing well, has no bilious vomiting or abdominal distension, and her examination reveals palpable stool in the lower abdomen with a normally placed anus.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Order a barium enema to evaluate for Hirschsprung disease.",
      "Start an osmotic laxative (polyethylene glycol) with toileting behavior counseling.",
      "Refer for surgical evaluation.",
      "Recommend increasing cow's milk intake.",
      "Begin a long-term daily stimulant laxative as first-line therapy."
    ],
    answer: 1,
    exp: "This is functional (behavioral) constipation with a classic stool-withholding pattern and no red flags for an organic cause. First-line management is an osmotic laxative such as polyethylene glycol to soften stool and make defecation painless, combined with behavioral measures (scheduled toileting, positive reinforcement) and dietary counseling. Imaging and surgery are unnecessary.",
    why: [
      "A barium enema for Hirschsprung disease is not indicated when the history (normal meconium, later onset, withholding) points to functional constipation.",
      "Correct: functional constipation is treated with an osmotic laxative plus behavioral toileting measures.",
      "Surgical referral is unnecessary for functional constipation.",
      "Excess cow's milk can worsen constipation, not treat it.",
      "Stimulant laxatives are second-line and not the first choice for maintenance in children."
    ]
  },
  {
    id: "s3-0193",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Perimenopausal abnormal uterine bleeding",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 47-year-old woman reports several months of irregular, heavy menstrual bleeding with no predictable pattern. She has obesity and a history of infrequent periods suggesting chronic anovulation. A urine pregnancy test is negative, her thyroid function is normal, and pelvic examination and cervical screening are unremarkable. Her data are shown.\n\n| Parameter | Value |\n|---|---|\n| Age | 47 years |\n| Body mass index | 34 kg/m^2 |\n| Pregnancy test | negative |\n| Bleeding pattern | irregular, heavy, anovulatory |\n| Hemoglobin | 11.0 g/dL |",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Reassure her that this is normal perimenopause and observe.",
      "Start combined oral contraceptives empirically without further evaluation.",
      "Perform endometrial biopsy to evaluate for hyperplasia or carcinoma.",
      "Proceed directly to hysterectomy.",
      "Order serum CA-125 as the initial diagnostic test."
    ],
    answer: 2,
    exp: "A woman 45 years or older with abnormal uterine bleeding, especially with risk factors for unopposed estrogen (obesity, chronic anovulation), requires endometrial sampling to exclude endometrial hyperplasia or carcinoma before instituting hormonal therapy. Empiric treatment or reassurance without tissue evaluation could miss a premalignant or malignant lesion.",
    why: [
      "Attributing anovulatory bleeding in an at-risk woman to normal perimenopause without sampling risks missing endometrial neoplasia.",
      "Starting hormonal therapy before excluding hyperplasia or cancer could mask a serious lesion.",
      "Correct: abnormal bleeding at age 45 or older with risk factors warrants endometrial biopsy to rule out hyperplasia or carcinoma.",
      "Hysterectomy is not a first step without a tissue diagnosis.",
      "CA-125 is nonspecific and not the appropriate test for evaluating abnormal uterine bleeding."
    ]
  },
  {
    id: "s3-0194",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Nausea and vomiting of pregnancy",
    difficulty: "easy",
    anchor: null,
    vignette: "A 26-year-old woman at 9 weeks gestation reports frequent nausea with occasional vomiting, worst in the morning. She is still able to keep down small amounts of fluid and food, has no signs of dehydration, and her urine shows no ketones. Her weight is stable and her examination is normal. She has already tried eating small, frequent, bland meals with modest benefit.",
    lead: "Which of the following is the most appropriate initial pharmacologic therapy?",
    options: [
      "Admit for intravenous rehydration and bowel rest.",
      "Start intravenous ondansetron as first-line therapy.",
      "Recommend pregnancy termination.",
      "Start pyridoxine (vitamin B6), with or without doxylamine.",
      "Begin high-dose corticosteroids."
    ],
    answer: 3,
    exp: "She has mild nausea and vomiting of pregnancy without dehydration or hyperemesis. After dietary measures, first-line pharmacotherapy is pyridoxine (vitamin B6), alone or combined with doxylamine, which is safe and effective in pregnancy. Intravenous fluids and hospitalization are reserved for hyperemesis with dehydration, and other antiemetics are later options.",
    why: [
      "Hospitalization and intravenous fluids are for hyperemesis with dehydration, which she does not have.",
      "Ondansetron is a later-line agent, not the initial recommended therapy.",
      "Termination is not an appropriate response to routine nausea of early pregnancy.",
      "Correct: pyridoxine (with or without doxylamine) is first-line pharmacotherapy for nausea and vomiting of pregnancy.",
      "Corticosteroids are reserved for refractory hyperemesis, not initial mild symptoms."
    ]
  },
  {
    id: "s3-0195",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Menopausal vasomotor symptom therapy",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 52-year-old woman has not had a menstrual period for 14 months and reports frequent, disabling hot flashes and night sweats that disrupt her sleep and daily function. She has an intact uterus, no history of venous thromboembolism, breast cancer, or coronary disease, and is within a few years of her final menstrual period. Lifestyle measures have not adequately controlled her symptoms.",
    lead: "Which of the following is the most appropriate therapy for her vasomotor symptoms?",
    options: [
      "Start systemic unopposed estrogen alone.",
      "Recommend no treatment because symptoms will resolve eventually.",
      "Start systemic testosterone therapy.",
      "Prescribe a chronic benzodiazepine at bedtime.",
      "Start combined estrogen-progestin hormone therapy."
    ],
    answer: 4,
    exp: "For a healthy, recently menopausal woman with disabling vasomotor symptoms and no contraindications, systemic hormone therapy is the most effective treatment. Because she has an intact uterus, estrogen must be combined with a progestin to prevent endometrial hyperplasia and carcinoma from unopposed estrogen. Nonhormonal options exist but are less effective for severe symptoms.",
    why: [
      "Unopposed estrogen in a woman with a uterus causes endometrial hyperplasia and cancer risk.",
      "Withholding treatment leaves her disabling symptoms unaddressed when effective therapy exists.",
      "Testosterone does not treat vasomotor symptoms and is not indicated here.",
      "Chronic benzodiazepines do not treat hot flashes and carry dependence risk.",
      "Correct: combined estrogen-progestin therapy is most effective and adds endometrial protection in a woman with a uterus."
    ]
  },
  {
    id: "s3-0196",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Bipolar depression pharmacotherapy",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 34-year-old man with a documented history of a prior manic episode (bipolar I disorder) now presents with 4 weeks of depressed mood, anhedonia, hypersomnia, and low energy. He is not currently taking any medication and is not suicidal or psychotic. He asks for something to help his low mood, and he has previously become agitated and 'wired' when given an antidepressant alone.",
    lead: "Which of the following is the most appropriate pharmacotherapy?",
    options: [
      "Start quetiapine (or lurasidone) for bipolar depression.",
      "Start an SSRI as monotherapy.",
      "Prescribe a psychostimulant to improve energy.",
      "Start bupropion as monotherapy.",
      "Prescribe a scheduled benzodiazepine."
    ],
    answer: 0,
    exp: "In bipolar I disorder, a depressive episode should be treated with an agent with established efficacy for bipolar depression, such as quetiapine or lurasidone (or lamotrigine or lithium), ideally with mood-stabilizer coverage. Antidepressant monotherapy is avoided because it can precipitate a manic switch, which his prior reaction suggests.",
    why: [
      "Correct: quetiapine or lurasidone is an evidence-based treatment for bipolar depression and avoids antidepressant-induced switching.",
      "SSRI monotherapy risks precipitating mania in bipolar disorder and lacks mood-stabilizer coverage.",
      "Stimulants do not treat bipolar depression and can destabilize mood.",
      "Bupropion monotherapy without a mood stabilizer risks a manic switch.",
      "Benzodiazepines do not treat the depressive episode and carry dependence risk."
    ]
  },
  {
    id: "s3-0197",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Chronic insomnia first-line therapy",
    difficulty: "easy",
    anchor: null,
    vignette: "A 45-year-old woman reports 4 months of difficulty falling and staying asleep, with daytime fatigue and reduced concentration affecting her work. She has no depression, anxiety disorder, or symptoms suggesting obstructive sleep apnea or restless legs. She drinks little caffeine and has tried basic sleep-hygiene changes with only partial benefit. She is reluctant to rely on sleeping pills long term.",
    lead: "Which of the following is the most appropriate first-line treatment?",
    options: [
      "Prescribe a nightly benzodiazepine long term.",
      "Recommend cognitive behavioral therapy for insomnia (CBT-I).",
      "Advise nightly diphenhydramine indefinitely.",
      "Start zolpidem for open-ended nightly use.",
      "Suggest a nightly alcoholic drink to aid sleep onset."
    ],
    answer: 1,
    exp: "Cognitive behavioral therapy for insomnia is the recommended first-line treatment for chronic insomnia, with durable benefit and no medication risks. Pharmacologic hypnotics are reserved for short-term or adjunctive use, and long-term benzodiazepines, nightly antihistamines, and alcohol are inappropriate because of dependence, tolerance, and disrupted sleep architecture.",
    why: [
      "Long-term benzodiazepines cause tolerance, dependence, and next-day impairment and are not first-line.",
      "Correct: cognitive behavioral therapy for insomnia is the first-line treatment for chronic insomnia.",
      "Chronic diphenhydramine causes tolerance and anticholinergic effects and is not recommended.",
      "Open-ended nightly zolpidem is not first-line; hypnotics are for short-term use.",
      "Alcohol fragments sleep and worsens insomnia over time."
    ]
  },
  {
    id: "s3-0198",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Herpes zoster vaccination",
    difficulty: "easy",
    anchor: null,
    vignette: "A 66-year-old woman comes in for a routine wellness visit. She is generally healthy, takes no immunosuppressive medications, and has no immunocompromising condition. She recalls having chickenpox as a child but has never received any shingles vaccine. She asks whether she should be vaccinated to prevent shingles and its complications.",
    lead: "Which of the following is the most appropriate recommendation?",
    options: [
      "No zoster vaccine is needed because she had chickenpox.",
      "Give the live attenuated zoster vaccine only if she becomes immunocompromised.",
      "Administer the recombinant zoster vaccine as a two-dose series.",
      "Vaccinate only after she has had an episode of shingles.",
      "Defer any zoster vaccination until age 70."
    ],
    answer: 2,
    exp: "Immunocompetent adults aged 50 years and older should receive the recombinant zoster vaccine as a two-dose series to prevent herpes zoster and postherpetic neuralgia; it is the preferred vaccine and is recommended regardless of prior chickenpox or prior shingles. Waiting for an episode or until age 70 leaves her unprotected.",
    why: [
      "Prior chickenpox is exactly why she harbors latent virus and should be vaccinated, not a reason to skip it.",
      "The recombinant (non-live) vaccine is preferred and recommended now, not reserved for immunocompromise.",
      "Correct: immunocompetent adults 50 and older should receive the two-dose recombinant zoster vaccine.",
      "Vaccination is recommended before, not only after, an episode of shingles.",
      "The recommended age to start is 50, so deferring to 70 is inappropriate."
    ]
  },
  {
    id: "s3-0199",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Professional boundaries and patient gifts",
    difficulty: "moderate",
    anchor: null,
    vignette: "A physician has cared for a cognitively intact, grateful patient for several years. At a visit the patient presents the physician with a very expensive personal gift (an item worth several thousand dollars) as thanks for the care provided. There is no pending disability paperwork, controlled-substance request, or other decision that the gift could influence, but the value of the gift is substantial.",
    lead: "Which of the following is the most appropriate response?",
    options: [
      "Accept the gift freely and simply document it in the chart.",
      "Report the patient to authorities for offering the gift.",
      "Accept the gift to avoid offending the patient.",
      "Kindly decline the expensive gift while acknowledging the patient's gratitude.",
      "Immediately terminate the physician-patient relationship."
    ],
    answer: 3,
    exp: "Accepting a gift of substantial value can compromise professional boundaries and the objectivity of the physician-patient relationship, even when no specific decision is at stake. The appropriate response is to graciously decline the expensive gift while acknowledging the patient's gratitude, exploring its meaning, and preserving the therapeutic relationship. Small tokens of appreciation may be acceptable, but a very valuable gift is not.",
    why: [
      "Accepting a very valuable gift risks compromising professional boundaries regardless of documentation.",
      "Offering a gift is not misconduct requiring a report to authorities.",
      "Accepting purely to avoid offense still jeopardizes objectivity and boundaries.",
      "Correct: graciously declining the expensive gift while acknowledging gratitude preserves professional boundaries.",
      "Terminating the relationship is a disproportionate response to a well-meant gesture."
    ]
  },
  {
    id: "s3-0200",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Effect modification versus confounding",
    difficulty: "hard",
    anchor: "table",
    vignette: "Investigators analyze a cohort study of a medication and subsequent myocardial infarction. The crude (overall) relative risk is 1.5. When the analysis is stratified by smoking status, the association differs markedly between strata, as shown. The stratum-specific estimates are not simply equal to one another after stratification.\n\n| Stratum | Relative risk (drug vs no drug) |\n|---|---|\n| Overall (crude) | 1.5 |\n| Smokers | 3.0 |\n| Nonsmokers | 1.0 |",
    lead: "Which of the following best describes what these data demonstrate?",
    options: [
      "Confounding by smoking, which should be adjusted away.",
      "Selection bias in enrolling participants.",
      "Random error explaining the whole finding.",
      "Recall bias in exposure ascertainment.",
      "Effect modification (interaction) by smoking."
    ],
    answer: 4,
    exp: "When stratum-specific measures of association differ substantially from one another (here 3.0 in smokers versus 1.0 in nonsmokers), the exposure's effect genuinely varies across levels of a third variable, which is effect modification (interaction). This is reported by stratum rather than adjusted away. In confounding, the stratum-specific estimates are similar to each other but differ from the crude estimate.",
    why: [
      "In confounding the stratum-specific risks would be similar to each other; here they clearly differ.",
      "Selection bias arises from how participants are chosen and is not shown by differing stratum estimates.",
      "The consistent, large difference between strata is not explained by random error.",
      "Recall bias affects exposure reporting and is not demonstrated by this stratified pattern.",
      "Correct: markedly different stratum-specific relative risks indicate effect modification (interaction) by smoking."
    ]
  }
];
