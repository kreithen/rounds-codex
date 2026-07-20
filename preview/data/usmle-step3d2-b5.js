/*
 * Rounds Codex - USMLE Step 3, Day 2 (Advanced Clinical Management / ACM) bank, Batch 5 (25 items)
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
const USMLE_STEP3D2_B5 = [
  {
    id: "s3-0276",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Symptomatic severe aortic stenosis management",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 72-year-old man reports several months of exertional dyspnea and one episode of syncope while climbing stairs. On examination he has a harsh late-peaking crescendo-decrescendo systolic murmur at the right upper sternal border that radiates to both carotids, and his carotid upstrokes are diminished and delayed. His blood pressure is 128/78 mm Hg. A transthoracic echocardiogram is performed.\n\n**[IMAGE: Transthoracic echocardiogram showing a calcified trileaflet aortic valve with a calculated valve area of 0.8 cm2, mean transvalvular gradient of 45 mm Hg, and preserved left ventricular ejection fraction]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Start an oral nitrate to reduce afterload and relieve his symptoms.",
      "Reassure him and repeat the echocardiogram in 1 year.",
      "Refer him for aortic valve replacement (surgical or transcatheter).",
      "Begin a beta-blocker to slow the murmur and reduce oxygen demand.",
      "Add a high-dose loop diuretic and advise strict activity restriction."
    ],
    answer: 2,
    exp: "He has severe aortic stenosis (valve area <1.0 cm2, mean gradient >40 mm Hg) that has become symptomatic with dyspnea and syncope. Symptomatic severe aortic stenosis carries a poor prognosis without intervention, and the definitive treatment is aortic valve replacement by a surgical or transcatheter approach.",
    why: [
      "Vasodilators such as nitrates can precipitate dangerous hypotension in fixed severe aortic stenosis and do not address the mechanical obstruction.",
      "Watchful waiting is appropriate only for asymptomatic disease; the onset of symptoms mandates intervention, not another year of observation.",
      "Correct: symptomatic severe aortic stenosis is treated with aortic valve replacement, which relieves the obstruction and improves survival.",
      "Beta-blockers blunt the compensatory tachycardia and cardiac output needed across a fixed stenosis and do not treat the lesion.",
      "Aggressive diuresis risks reducing preload-dependent output, and activity restriction alone leaves the lethal lesion untreated."
    ]
  },
  {
    id: "s3-0277",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Graves disease hyperthyroidism treatment",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 30-year-old woman has 6 weeks of palpitations, heat intolerance, a 5-kg unintentional weight loss, and a fine tremor. She has a diffusely enlarged, nontender goiter with an audible bruit and mild proptosis with lid lag. She is not pregnant and has no chest pain. Laboratory studies are shown.\n\n| Test | Value |\n|---|---|\n| TSH | <0.01 microU/mL |\n| Free T4 | 3.8 ng/dL |\n| TSH receptor antibody | positive |\n| Heart rate | 112/min |",
    lead: "Which of the following is the most appropriate initial pharmacotherapy?",
    options: [
      "Start methimazole and a beta-blocker for symptom control.",
      "Begin levothyroxine to normalize thyroid function.",
      "Proceed to total thyroidectomy within the week.",
      "Observe with repeat thyroid studies in 6 months.",
      "Give high-dose oral iodine (Lugol solution) as sole therapy."
    ],
    answer: 0,
    exp: "The suppressed TSH, elevated free T4, diffuse goiter with bruit, orbitopathy, and positive TSH receptor antibody confirm Graves disease. First-line management pairs an antithyroid drug (methimazole) to reduce hormone synthesis with a beta-blocker for adrenergic symptoms; radioactive iodine can worsen orbitopathy and is less preferred here.",
    why: [
      "Correct: methimazole reduces thyroid hormone synthesis while a beta-blocker controls tremor, palpitations, and tachycardia during onset of action.",
      "Levothyroxine would add exogenous hormone to an already hyperthyroid patient and worsen her condition.",
      "Surgery is reserved for specific indications (large compressive goiter, drug intolerance, suspected malignancy), not routine initial therapy.",
      "Untreated Graves hyperthyroidism risks thyrotoxic complications, so observation alone is inappropriate.",
      "Iodine alone can transiently worsen hyperthyroidism and is used adjunctively, not as monotherapy."
    ]
  },
  {
    id: "s3-0278",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Clostridioides difficile infection treatment",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 68-year-old woman develops profuse watery diarrhea, crampy abdominal pain, and a low-grade fever 5 days after finishing a course of clindamycin for a dental abscess. She has up to ten loose stools daily. Her abdomen is soft with mild diffuse tenderness and no distention or peritoneal signs, and she is hemodynamically stable. Her white blood cell count is 15,000/microL, and stool testing is positive for toxigenic Clostridioides difficile.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Continue supportive care with oral loperamide to slow the diarrhea.",
      "Discontinue clindamycin and start oral fidaxomicin (or oral vancomycin).",
      "Begin intravenous vancomycin as monotherapy.",
      "Proceed to fecal microbiota transplantation now.",
      "Start empiric oral ciprofloxacin."
    ],
    answer: 1,
    exp: "This is an initial episode of C. difficile infection precipitated by clindamycin. Management is to stop the inciting antibiotic when possible and treat with an oral agent that reaches the colonic lumen; current guidelines favor oral fidaxomicin, with oral vancomycin as an accepted alternative. Antimotility agents are avoided.",
    why: [
      "Antimotility drugs such as loperamide can promote toxin retention and precipitate ileus or toxic megacolon.",
      "Correct: stopping the offending antibiotic and starting oral fidaxomicin (or oral vancomycin) is first-line therapy for an initial episode.",
      "Intravenous vancomycin does not reach the colonic lumen and is ineffective for C. difficile colitis.",
      "Fecal microbiota transplantation is reserved for multiply recurrent disease, not a first episode.",
      "Fluoroquinolones are themselves high-risk for provoking C. difficile and do not treat it."
    ]
  },
  {
    id: "s3-0279",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Heparin-induced thrombocytopenia management",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 64-year-old man is recovering from coronary artery bypass grafting and has been receiving prophylactic unfractionated heparin. On postoperative day 6 his platelet count has fallen and he develops new unilateral leg swelling; duplex ultrasound confirms a proximal deep vein thrombosis. He has no bleeding. His platelet trend is shown, and his 4T score is high.\n\n| Postoperative day | Platelet count (/microL) |\n|---|---|\n| 1 | 245,000 |\n| 3 | 210,000 |\n| 5 | 120,000 |\n| 6 | 78,000 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Continue heparin and transfuse platelets to correct the count.",
      "Reduce the heparin dose and observe the platelet trend.",
      "Start warfarin immediately as the sole anticoagulant.",
      "Discontinue all heparin and begin a non-heparin anticoagulant such as argatroban.",
      "Administer protamine and give no further anticoagulation."
    ],
    answer: 3,
    exp: "A greater than 50% platelet drop beginning day 5-7 of heparin exposure with new thrombosis and a high 4T score indicates heparin-induced thrombocytopenia, a prothrombotic disorder. All heparin must be stopped and a non-heparin anticoagulant (argatroban, bivalirudin, fondaparinux, or a DOAC) started; warfarin alone is deferred until platelets recover.",
    why: [
      "Continuing heparin perpetuates the immune-mediated platelet activation and thrombosis; platelet transfusion adds fuel and is avoided.",
      "Any heparin exposure, even reduced, sustains the process; the drug must be stopped entirely.",
      "Starting warfarin alone during acute HIT can precipitate venous limb gangrene from protein C depletion.",
      "Correct: stop all heparin and begin an alternative non-heparin anticoagulant such as argatroban to control the prothrombotic state.",
      "Protamine does not treat HIT, and leaving a patient with active thrombosis unanticoagulated risks limb loss and death."
    ]
  },
  {
    id: "s3-0280",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Antiretroviral therapy initiation in new HIV diagnosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 29-year-old asymptomatic man is found to have HIV infection confirmed by antigen/antibody testing and a supplemental assay obtained after a routine screening. He feels well, has no opportunistic infection, and his examination is normal. Baseline laboratory studies including chemistries, hepatitis serologies, and a resistance panel have been sent. His results are shown, and he asks when treatment should begin.\n\n| Test | Value |\n|---|---|\n| CD4 count | 420 cells/microL |\n| HIV RNA (viral load) | 55,000 copies/mL |\n| Creatinine | 0.9 mg/dL |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Defer antiretroviral therapy until the CD4 count falls below 200.",
      "Start trimethoprim-sulfamethoxazole prophylaxis and defer antiretroviral therapy.",
      "Repeat the viral load in 6 months before deciding on treatment.",
      "Begin antiretroviral therapy only after the CD4 count falls below 350.",
      "Initiate combination antiretroviral therapy now, such as an integrase inhibitor-based regimen."
    ],
    answer: 4,
    exp: "Current guidelines recommend starting antiretroviral therapy for all people with HIV regardless of CD4 count, ideally as soon as possible after diagnosis. Early treatment (commonly an integrase strand transfer inhibitor-based regimen) reduces morbidity, mortality, and transmission. Waiting for immunologic decline is outdated practice.",
    why: [
      "Treatment is no longer withheld until advanced immunosuppression; all patients benefit from early therapy.",
      "Opportunistic-infection prophylaxis alone leaves the underlying infection untreated; his CD4 also does not mandate it.",
      "Delaying to recheck the viral load postpones a therapy indicated at diagnosis.",
      "CD4-threshold-based deferral is obsolete; therapy is started irrespective of the count.",
      "Correct: antiretroviral therapy should begin promptly at diagnosis regardless of CD4 count, typically with an integrase inhibitor-based regimen."
    ]
  },
  {
    id: "s3-0281",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Rhabdomyolysis fluid management",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 22-year-old man is brought in after an intense first-time weightlifting session followed by several hours immobile on the floor after collapsing. He has severe thigh pain and swelling and passes dark, tea-colored urine. He is alert with stable vital signs. A urine dipstick is strongly positive for blood, but microscopy shows few red cells. His laboratory studies are shown.\n\n| Test | Value |\n|---|---|\n| Creatine kinase | 42,000 U/L |\n| Potassium | 5.8 mEq/L |\n| Creatinine | 1.8 mg/dL |\n| Calcium | 8.2 mg/dL |",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Begin aggressive intravenous isotonic crystalloid to maintain brisk urine output.",
      "Initiate immediate hemodialysis for the elevated creatine kinase.",
      "Give a loop diuretic to force a diuresis.",
      "Restrict fluids because his creatinine is already elevated.",
      "Start allopurinol as the primary therapy."
    ],
    answer: 0,
    exp: "The markedly elevated creatine kinase, pigmenturia (dipstick-positive for blood with few red cells), hyperkalemia, and early acute kidney injury indicate rhabdomyolysis. The cornerstone of treatment is early, aggressive isotonic fluid resuscitation to maintain a high urine output, dilute nephrotoxic myoglobin, and prevent or limit acute kidney injury.",
    why: [
      "Correct: early aggressive isotonic fluids maintain brisk urine flow, protecting the kidneys from myoglobin injury.",
      "Dialysis is reserved for refractory hyperkalemia, severe acidosis, or established oliguric failure, not the CK level itself.",
      "Loop diuretics do not treat the underlying process and can worsen intravascular volume depletion.",
      "Fluid restriction accelerates myoglobin-induced tubular injury; the patient needs volume, not restriction.",
      "Allopurinol addresses uric acid but is not the primary therapy for pigment nephropathy."
    ]
  },
  {
    id: "s3-0282",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Incidental solitary pulmonary nodule surveillance",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 55-year-old woman with a 20-pack-year smoking history undergoes CT of the abdomen for flank pain, and the lung bases incidentally reveal a nodule. A dedicated chest CT characterizes it further. She is asymptomatic, has no prior imaging for comparison, and has no lymphadenopathy or weight loss. Her calculated malignancy risk is low-to-intermediate.\n\n**[IMAGE: Chest CT showing a single 6-mm smooth-bordered solid pulmonary nodule in the right lower lobe without spiculation, cavitation, or associated adenopathy]**",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Obtain a PET-CT scan immediately.",
      "Repeat a low-dose chest CT in 6 to 12 months.",
      "Refer for surgical wedge resection of the nodule.",
      "Perform CT-guided percutaneous biopsy now.",
      "Reassure her that no further imaging is ever needed."
    ],
    answer: 1,
    exp: "For a solid nodule of about 6 mm in a patient with risk factors, guideline-based (Fleischner) management is interval CT surveillance in 6-12 months to assess for growth, because a nodule this small is below the threshold at which PET or biopsy is reliable or indicated. Stability over follow-up is reassuring.",
    why: [
      "PET-CT has poor sensitivity for nodules this small and is not the appropriate next step.",
      "Correct: a small solid nodule with risk factors is followed with an interval low-dose CT in 6-12 months to detect growth.",
      "Resection of an indeterminate 6-mm nodule is overly aggressive before growth is demonstrated.",
      "Biopsy of a 6-mm nodule is technically difficult, low-yield, and not indicated at this size.",
      "A smoker with a new nodule requires surveillance, not dismissal, because growth would change management."
    ]
  },
  {
    id: "s3-0283",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Lupus nephritis induction therapy",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 26-year-old woman with systemic lupus erythematosus develops new lower-extremity edema and hypertension over 3 weeks. She takes hydroxychloroquine. Her laboratory studies are shown, and urine microscopy reveals red cell casts. A renal biopsy demonstrates diffuse proliferative (class IV) lupus nephritis with active lesions.\n\n| Test | Value |\n|---|---|\n| Urine protein/creatinine | 3.4 g/g |\n| Serum creatinine | 1.6 mg/dL |\n| Anti-dsDNA | markedly elevated |\n| C3/C4 complement | low |",
    lead: "Which of the following is the most appropriate induction therapy?",
    options: [
      "Continue hydroxychloroquine alone and monitor.",
      "Use an ACE inhibitor alone and follow the proteinuria.",
      "Start high-dose corticosteroids plus mycophenolate mofetil (or cyclophosphamide).",
      "Give rituximab as first-line induction.",
      "Initiate plasma exchange as primary therapy."
    ],
    answer: 2,
    exp: "Biopsy-proven active proliferative (class III/IV) lupus nephritis requires prompt immunosuppressive induction to prevent progression to end-stage kidney disease. Standard induction combines high-dose glucocorticoids with either mycophenolate mofetil or cyclophosphamide; hydroxychloroquine and an ACE inhibitor are important adjuncts but not sufficient alone.",
    why: [
      "Hydroxychloroquine is a valuable background agent but cannot control active proliferative nephritis by itself.",
      "An ACE inhibitor reduces proteinuria but does not treat the underlying immune-mediated glomerular inflammation.",
      "Correct: active proliferative lupus nephritis is induced with high-dose glucocorticoids plus mycophenolate mofetil or cyclophosphamide.",
      "Rituximab is generally reserved for refractory disease, not standard first-line induction.",
      "Plasma exchange is not standard induction for lupus nephritis and is reserved for specific complications."
    ]
  },
  {
    id: "s3-0284",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Hypertensive emergency management",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 58-year-old man presents with a severe pounding headache and blurred vision that began this morning. He ran out of his antihypertensive medications 2 weeks ago. He is alert but uncomfortable. Funduscopy reveals bilateral papilledema and flame hemorrhages, and his chest is clear. His data are shown, confirming acute target-organ involvement.\n\n| Parameter | Value |\n|---|---|\n| Blood pressure | 232/130 mm Hg |\n| Creatinine | 2.1 mg/dL (baseline 1.0) |\n| Urinalysis | proteinuria, hematuria |\n| Neuro exam | intact, no focal deficit |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Rapidly normalize the blood pressure with sublingual short-acting nifedipine.",
      "Give an oral antihypertensive and discharge with clinic follow-up.",
      "Administer a large intravenous fluid bolus.",
      "Admit and start an intravenous titratable antihypertensive (e.g., nicardipine or labetalol), lowering the mean arterial pressure by about 10-20% in the first hour.",
      "Withhold treatment pending repeat readings over the next 24 hours."
    ],
    answer: 3,
    exp: "Severe hypertension with acute target-organ damage (papilledema, hemorrhages, and acute kidney injury) is a hypertensive emergency. Treatment requires admission and a titratable intravenous agent to lower the mean arterial pressure by roughly 10-20% in the first hour, then gradually further, avoiding precipitous drops that cause ischemia.",
    why: [
      "Sublingual nifedipine causes abrupt, uncontrolled pressure drops and can precipitate stroke or myocardial ischemia.",
      "Acute end-organ damage makes outpatient oral management unsafe; the patient needs monitored intravenous therapy.",
      "A fluid bolus does not address the emergency and may worsen the hypertension.",
      "Correct: a hypertensive emergency is treated with a titratable intravenous agent, lowering mean arterial pressure by about 10-20% in the first hour under monitoring.",
      "Withholding therapy in the face of active target-organ injury allows ongoing damage."
    ]
  },
  {
    id: "s3-0285",
    system: "Emergency Medicine",
    discipline: "Toxicology",
    topic: "Serotonin syndrome management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 34-year-old woman on a stable dose of an SSRI for depression presents 8 hours after being started on tramadol for back pain and linezolid for a skin infection. She is agitated and diaphoretic. Her temperature is 39.5 C and heart rate 124/min. Examination shows spontaneous clonus, hyperreflexia that is more pronounced in the lower extremities, and a coarse tremor. She is not rigid between episodes.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Continue her medications and add a first-generation antipsychotic.",
      "Administer dantrolene as first-line therapy.",
      "Give bromocriptine to reverse the syndrome.",
      "Restart the SSRI at a higher dose to stabilize her.",
      "Stop all serotonergic drugs and provide supportive care with benzodiazepines and cooling, adding cyproheptadine if refractory."
    ],
    answer: 4,
    exp: "The rapid onset after adding serotonergic agents (tramadol and linezolid to an SSRI), hyperthermia, autonomic instability, and neuromuscular findings of clonus and lower-limb-predominant hyperreflexia are classic for serotonin syndrome. Management is to stop all serotonergic agents and provide supportive care with benzodiazepines and cooling, reserving cyproheptadine for refractory cases.",
    why: [
      "Continuing the offending drugs perpetuates the toxidrome; antipsychotics with anticholinergic effects can impair heat dissipation.",
      "Dantrolene is used for malignant hyperthermia, not serotonin syndrome.",
      "Bromocriptine, a dopamine agonist, is used for neuroleptic malignant syndrome and can worsen serotonergic excess.",
      "Escalating the SSRI would intensify the serotonergic toxicity.",
      "Correct: discontinue all serotonergic agents and give supportive care with benzodiazepines and cooling, using cyproheptadine if symptoms persist."
    ]
  },
  {
    id: "s3-0286",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Severe asthma exacerbation with impending respiratory failure",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 27-year-old man with asthma arrives with a severe exacerbation. Despite an hour of continuous nebulized albuterol, ipratropium, and intravenous corticosteroids, he remains in distress, speaking only single words and using accessory muscles. He is now becoming drowsy, and his respiratory rate has fallen. A serial arterial blood gas trend is shown.\n\n| Time | pH | PaCO2 (mm Hg) |\n|---|---|---|\n| On arrival | 7.48 | 30 |\n| After 1 hour | 7.36 | 44 |",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Administer intravenous magnesium sulfate and prepare for endotracheal intubation.",
      "Reassure and discharge him because the PaCO2 has normalized.",
      "Start an oral beta-blocker to slow his heart rate.",
      "Give a bolus of intravenous fluids and continue observation only.",
      "Begin oral montelukast as rescue therapy."
    ],
    answer: 0,
    exp: "A 'normalizing' or rising PaCO2 in a tiring asthmatic who was initially hyperventilating signals impending respiratory failure, not improvement. The next steps are to escalate with intravenous magnesium sulfate and to prepare for endotracheal intubation and mechanical ventilation given the fatigue, drowsiness, and rising carbon dioxide.",
    why: [
      "Correct: a rising PaCO2 with fatigue heralds respiratory failure; escalate with IV magnesium and prepare to intubate.",
      "A 'normal' PaCO2 here is ominous, reflecting fatigue rather than recovery; discharge would be fatal.",
      "Beta-blockers can trigger bronchospasm and are contraindicated in acute asthma.",
      "Passive observation ignores the impending respiratory collapse signaled by the blood gas trend.",
      "Montelukast has no role in acute rescue of a severe exacerbation."
    ]
  },
  {
    id: "s3-0287",
    system: "Surgery",
    discipline: "Vascular Surgery",
    topic: "Acute limb ischemia management",
    difficulty: "hard",
    anchor: null,
    vignette: "A 70-year-old woman with atrial fibrillation who is not taking anticoagulation develops sudden severe pain in her left leg over the past 3 hours. The leg is cold, pale, and mottled below the knee. Distal pulses are absent by palpation and Doppler, and she reports new numbness and paresthesia over the foot, though she can still move her toes. The contralateral leg is warm with palpable pulses.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Elevate the limb, apply a warm compress, and reassess in the morning.",
      "Start intravenous heparin immediately and obtain an urgent vascular surgery consultation for revascularization.",
      "Order a venous duplex ultrasound to evaluate for deep vein thrombosis.",
      "Begin thrombolysis through a peripheral intravenous line.",
      "Proceed directly to primary amputation."
    ],
    answer: 1,
    exp: "Sudden onset of a cold, pulseless, painful, paresthetic leg in a patient with atrial fibrillation indicates acute arterial limb ischemia, most likely embolic. A threatened but still viable limb (motor intact) requires immediate systemic heparin anticoagulation and urgent vascular surgery evaluation for embolectomy or other revascularization to salvage the limb.",
    why: [
      "Elevation and warm compresses do nothing for arterial occlusion and delaying wastes the narrow window for salvage.",
      "Correct: immediate systemic heparin plus urgent vascular surgery consultation for revascularization is the standard for a threatened viable limb.",
      "The presentation is arterial, not venous; duplex for DVT misdirects care and delays revascularization.",
      "Catheter-directed thrombolysis may be used selectively, but drug through a peripheral line is not appropriate initial management.",
      "The limb is still viable with intact motor function, so primary amputation is premature."
    ]
  },
  {
    id: "s3-0288",
    system: "Surgery",
    discipline: "Trauma Surgery",
    topic: "Burn fluid resuscitation with the Parkland formula",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 40-year-old man is rescued from a house fire and arrives alert with deep partial-thickness and full-thickness burns. His airway is patent with no stridor or soot in the oropharynx. Using the rule of nines, the burned surface area and his weight are recorded below, and two large-bore intravenous lines are placed as you plan fluid resuscitation.\n\n| Parameter | Value |\n|---|---|\n| Estimated burn area (TBSA) | 40% |\n| Body weight | 80 kg |\n| Blood pressure | 108/70 mm Hg |\n| Urine output goal | 0.5 mL/kg/h |",
    lead: "Which of the following is the most appropriate initial fluid management?",
    options: [
      "Administer maintenance normal saline at a low fixed rate only.",
      "Withhold intravenous fluids until the urine output drops.",
      "Begin lactated Ringer's using the Parkland formula, giving half the calculated 24-hour volume over the first 8 hours and titrating to urine output.",
      "Transfuse packed red blood cells as the primary resuscitation fluid.",
      "Give a single bolus of hypertonic saline and reassess in 24 hours."
    ],
    answer: 2,
    exp: "Large burns cause massive fluid shifts requiring structured crystalloid resuscitation. The Parkland formula estimates 24-hour lactated Ringer's needs (about 2-4 mL/kg per %TBSA), giving half over the first 8 hours from the time of injury and the remainder over the next 16 hours, then titrating to a urine output around 0.5 mL/kg/h.",
    why: [
      "Fixed low-rate maintenance fluids grossly underestimate the huge losses of a 40% burn and lead to shock.",
      "Waiting for oliguria before resuscitating allows preventable hypovolemic shock and organ injury.",
      "Correct: calculate lactated Ringer's by the Parkland formula, give half over the first 8 hours, and titrate to urine output.",
      "Blood is not the primary resuscitation fluid for acute burns; isotonic crystalloid is.",
      "A single hypertonic saline bolus does not provide the sustained volume replacement burns require."
    ]
  },
  {
    id: "s3-0289",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Postoperative colorectal anastomotic leak management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 62-year-old man underwent a sigmoid colectomy with primary anastomosis for diverticular disease. On postoperative day 5, as his diet is advanced, he develops fever, worsening diffuse abdominal pain, and tachycardia. His abdomen is now diffusely tender with guarding and rebound, and his white blood cell count has risen sharply. CT with rectal contrast shows extravasation at the anastomosis with free intraperitoneal fluid and air, and he is developing hypotension.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Continue the current plan and recheck laboratory values in the morning.",
      "Switch to oral antibiotics and continue advancing his diet.",
      "Prescribe antidiarrheal agents and encourage ambulation.",
      "Resuscitate, start broad-spectrum antibiotics, and perform urgent operative re-exploration.",
      "Discharge with outpatient surgical follow-up in 1 week."
    ],
    answer: 3,
    exp: "Fever, diffuse peritonitis, leukocytosis, and CT evidence of anastomotic leak with free air and fluid in a hemodynamically deteriorating patient indicate a leak with generalized peritonitis. This requires prompt resuscitation, broad-spectrum antibiotics, and urgent return to the operating room for washout and diversion or repair.",
    why: [
      "Delaying while the patient becomes septic risks rapid deterioration and death.",
      "Oral antibiotics and feeding are dangerous with an established leak and diffuse peritonitis.",
      "Antimotility agents and ambulation do not address intra-abdominal contamination.",
      "Correct: an anastomotic leak with peritonitis and hemodynamic instability requires resuscitation, antibiotics, and urgent operative re-exploration.",
      "Discharging a patient with peritonitis and free air would be fatal."
    ]
  },
  {
    id: "s3-0290",
    system: "Pediatrics",
    discipline: "Pediatric Nephrology",
    topic: "Minimal change nephrotic syndrome initial therapy",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 4-year-old boy is brought in with 1 week of progressive puffiness. His parents note periorbital swelling on waking and later swelling of the legs and abdomen. He is well-appearing, normotensive, and afebrile with no rash or joint findings. Laboratory studies are shown, and urine microscopy is bland without red cells or casts.\n\n| Test | Value |\n|---|---|\n| Urine dipstick protein | 4+ |\n| Serum albumin | 1.8 g/dL |\n| Serum creatinine | normal for age |\n| C3/C4 complement | normal |",
    lead: "Which of the following is the most appropriate initial therapy?",
    options: [
      "Obtain a renal biopsy before starting any treatment.",
      "Treat with an ACE inhibitor alone.",
      "Start first-line cyclophosphamide.",
      "Use diuretics as the sole treatment.",
      "Begin empiric oral corticosteroids (prednisone)."
    ],
    answer: 4,
    exp: "Nephrotic-range proteinuria, hypoalbuminemia, and edema in a young child with a bland sediment and normal complement are typical of minimal change disease, the most common cause of childhood nephrotic syndrome. It is highly steroid-responsive, so empiric oral corticosteroids are started without an initial biopsy.",
    why: [
      "Biopsy is reserved for atypical features or steroid resistance; typical childhood nephrotic syndrome is treated empirically first.",
      "An ACE inhibitor is an adjunct for proteinuria but does not induce remission in minimal change disease.",
      "Cyclophosphamide is a later option for frequently relapsing or steroid-dependent disease, not first-line.",
      "Diuretics relieve edema symptomatically but do not treat the underlying glomerular process.",
      "Correct: empiric oral corticosteroids are first-line for presumed minimal change disease in a young child."
    ]
  },
  {
    id: "s3-0291",
    system: "Pediatrics",
    discipline: "Pediatric Cardiology",
    topic: "Acute rheumatic fever management",
    difficulty: "easy",
    anchor: null,
    vignette: "A 9-year-old girl develops migratory joint pain and swelling affecting first her knees and then her elbows over several days, about 3 weeks after an untreated sore throat. She is febrile, and cardiac examination reveals a new apical holosystolic murmur. Her anti-streptolysin O titer is elevated and her inflammatory markers are high. An echocardiogram confirms mitral regurgitation, meeting diagnostic criteria for acute rheumatic fever.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Start penicillin to eradicate residual streptococcus and give anti-inflammatory therapy, then begin long-term secondary prophylaxis.",
      "Provide reassurance and observation only.",
      "Treat with antiviral therapy.",
      "Proceed to immediate mitral valve surgery.",
      "Give long-term corticosteroids as the sole therapy."
    ],
    answer: 0,
    exp: "Acute rheumatic fever is managed by eradicating any residual group A streptococcus with penicillin, controlling inflammation (aspirin, with corticosteroids for severe carditis), and beginning long-term secondary antibiotic prophylaxis to prevent recurrent attacks that would worsen rheumatic heart disease.",
    why: [
      "Correct: eradicate streptococcus with penicillin, give anti-inflammatory therapy, and start long-term secondary prophylaxis to prevent recurrence.",
      "Untreated disease and absent prophylaxis risk recurrent attacks and progressive valve damage.",
      "The illness is a post-streptococcal immune phenomenon, not a viral infection.",
      "Valve surgery is reserved for severe refractory valvular dysfunction, not initial management.",
      "Corticosteroids alone omit the essential antibiotic eradication and long-term prophylaxis."
    ]
  },
  {
    id: "s3-0292",
    system: "Pediatrics",
    discipline: "Pediatric Endocrinology",
    topic: "New-onset type 1 diabetes without ketoacidosis",
    difficulty: "easy",
    anchor: null,
    vignette: "An 11-year-old boy has 3 weeks of increased thirst, frequent urination including nighttime episodes, and a 4-kg weight loss. He is alert and well-perfused with normal breathing and no vomiting. His random blood glucose is 380 mg/dL, urine ketones are small, and his venous pH and bicarbonate are normal, excluding diabetic ketoacidosis. He is tolerating oral fluids well.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Start metformin monotherapy.",
      "Begin subcutaneous basal-bolus insulin therapy with diabetes education.",
      "Admit for an intravenous insulin infusion in the intensive care unit.",
      "Recommend dietary carbohydrate changes alone.",
      "Prescribe a sulfonylurea."
    ],
    answer: 1,
    exp: "This is new-onset type 1 diabetes without ketoacidosis (normal pH and bicarbonate). Management is initiation of subcutaneous insulin in a physiologic basal-bolus regimen along with structured diabetes education for the child and family; an intravenous insulin drip is reserved for diabetic ketoacidosis.",
    why: [
      "Metformin does not address the absolute insulin deficiency of type 1 diabetes.",
      "Correct: subcutaneous basal-bolus insulin plus diabetes education is appropriate for new-onset type 1 diabetes without ketoacidosis.",
      "An intravenous insulin infusion in the ICU is for diabetic ketoacidosis, which he does not have.",
      "Diet alone cannot control type 1 diabetes, which requires exogenous insulin.",
      "Sulfonylureas augment insulin secretion and are ineffective when beta-cell function is lost."
    ]
  },
  {
    id: "s3-0293",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Shoulder dystocia intrapartum management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 29-year-old woman at term with a pregnancy complicated by gestational diabetes is pushing in the second stage. The fetal head delivers but then retracts tightly against the perineum (the turtle sign), and the anterior shoulder fails to deliver with gentle downward traction. No cord is felt and the fetal heart rate remains reassuring, but the shoulder is clearly impacted behind the pubic symphysis.",
    lead: "Which of the following is the most appropriate immediate maneuver?",
    options: [
      "Apply firm fundal pressure to push the fetus out.",
      "Proceed immediately to cesarean delivery.",
      "Perform the McRoberts maneuver and apply suprapubic pressure.",
      "Continue strong downward traction on the fetal head.",
      "Administer oxytocin to strengthen the contractions."
    ],
    answer: 2,
    exp: "Shoulder dystocia is an obstetric emergency recognized by the turtle sign and failure of the shoulder to deliver. The first-line response is the McRoberts maneuver (sharp maternal hip hyperflexion) combined with suprapubic pressure, which frees the impacted anterior shoulder in most cases without additional risk.",
    why: [
      "Fundal pressure worsens shoulder impaction and increases the risk of uterine rupture and fetal injury.",
      "Cesarean is not the immediate step once the head has delivered; specific maneuvers are performed first.",
      "Correct: the McRoberts maneuver with suprapubic pressure is the first-line response to relieve shoulder dystocia.",
      "Excessive traction on the head risks brachial plexus injury without relieving the impaction.",
      "Strengthening contractions does not dislodge an impacted shoulder and delays effective maneuvers."
    ]
  },
  {
    id: "s3-0294",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Postpartum endometritis treatment",
    difficulty: "easy",
    anchor: null,
    vignette: "A 32-year-old woman is 3 days out from a cesarean delivery performed after prolonged labor with ruptured membranes. She now has fever, chills, and lower abdominal pain. Examination reveals uterine fundal tenderness and foul-smelling lochia, and her white blood cell count is elevated. Her incision is clean and dry, her lungs are clear, and there is no costovertebral angle tenderness or dysuria.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Give oral acetaminophen and discharge her home.",
      "Prescribe a single dose of oral azithromycin.",
      "Observe without antibiotics and reassess in 24 hours.",
      "Start broad-spectrum intravenous antibiotics such as clindamycin plus gentamicin.",
      "Proceed to emergency hysterectomy."
    ],
    answer: 3,
    exp: "Postpartum fever with uterine tenderness and foul lochia after cesarean delivery with prolonged rupture of membranes indicates endometritis, a polymicrobial infection. Treatment is broad-spectrum intravenous antibiotics, classically clindamycin plus gentamicin, continued until the patient is clinically improved and afebrile.",
    why: [
      "Antipyretics without antibiotics leave a uterine infection untreated and risk progression to sepsis.",
      "A single-dose oral macrolide does not cover the polymicrobial flora of endometritis.",
      "Delaying antibiotics in an established infection risks worsening sepsis.",
      "Correct: broad-spectrum intravenous antibiotics such as clindamycin plus gentamicin are the treatment for postpartum endometritis.",
      "Hysterectomy is reserved for refractory infection or complications, not initial management."
    ]
  },
  {
    id: "s3-0295",
    system: "Obstetrics & Gynecology",
    discipline: "Maternal-Fetal Medicine",
    topic: "Intrahepatic cholestasis of pregnancy management",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 31-year-old woman at 34 weeks gestation reports 1 week of intense generalized itching that is worst on her palms and soles and much worse at night. She has no rash apart from excoriations. She has no right upper quadrant pain. Laboratory studies are shown, and viral hepatitis serologies are negative. The fetal heart tracing is currently reassuring.\n\n| Test | Value |\n|---|---|\n| Total serum bile acids | 42 micromol/L |\n| ALT | 96 U/L |\n| Total bilirubin | 1.4 mg/dL |\n| Platelets | normal |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Recommend topical emollients only and reassure her.",
      "Use antihistamines alone and plan routine delivery at 40 weeks.",
      "Perform an immediate cesarean delivery now.",
      "Give high-dose corticosteroids to relieve the pruritus.",
      "Start ursodeoxycholic acid, institute fetal surveillance, and plan delivery around 37 weeks."
    ],
    answer: 4,
    exp: "Palmar-plantar pruritus without a primary rash plus elevated bile acids and transaminases indicates intrahepatic cholestasis of pregnancy, which raises the risk of stillbirth. Management is ursodeoxycholic acid to reduce bile acids and symptoms, antenatal fetal surveillance, and planned delivery around 37 weeks (earlier if bile acids are very high).",
    why: [
      "Emollients alone neither lower bile acids nor address the fetal risk of stillbirth.",
      "Waiting until 40 weeks ignores the elevated stillbirth risk that warrants earlier delivery.",
      "Immediate cesarean at 34 weeks is not indicated with a reassuring tracing; planned delivery near 37 weeks is standard.",
      "Corticosteroids do not treat cholestatic pruritus and are not the therapy here.",
      "Correct: ursodeoxycholic acid, fetal surveillance, and planned delivery around 37 weeks is the management for intrahepatic cholestasis of pregnancy."
    ]
  },
  {
    id: "s3-0296",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Neuroleptic malignant syndrome management",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 30-year-old man with schizophrenia was started on high-dose haloperidol several days ago. He is brought in confused and diaphoretic. His temperature is 40.1 C and his blood pressure fluctuates between 90/60 and 160/95 mm Hg. Examination shows generalized 'lead-pipe' muscular rigidity and decreased responsiveness. His laboratory studies are shown.\n\n| Test | Value |\n|---|---|\n| Creatine kinase | 8,500 U/L |\n| WBC | 16,000/microL |\n| Potassium | 5.2 mEq/L |\n| Creatinine | 1.7 mg/dL |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Discontinue the antipsychotic immediately and provide supportive care with cooling and intravenous fluids, adding dantrolene or bromocriptine if severe.",
      "Increase the haloperidol dose to control his agitation.",
      "Give cyproheptadine as the first-line antidote.",
      "Administer an additional serotonergic agent.",
      "Restart the antipsychotic within 24 hours regardless of his course."
    ],
    answer: 0,
    exp: "Hyperthermia, lead-pipe rigidity, altered mental status, autonomic instability, and markedly elevated creatine kinase days after starting a potent dopamine antagonist indicate neuroleptic malignant syndrome. Treatment is immediate withdrawal of the offending agent plus supportive care (aggressive cooling and intravenous fluids), with dantrolene or bromocriptine for severe cases.",
    why: [
      "Correct: stop the antipsychotic at once and give supportive care with cooling and fluids, adding dantrolene or bromocriptine when severe.",
      "Increasing the dopamine antagonist worsens the syndrome it caused.",
      "Cyproheptadine is used for serotonin syndrome, not neuroleptic malignant syndrome.",
      "Adding a serotonergic drug does not treat this dopamine-blockade syndrome and adds risk.",
      "Rechallenge, if ever attempted, is delayed well beyond 24 hours and only after full recovery."
    ]
  },
  {
    id: "s3-0297",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Obsessive-compulsive disorder first-line treatment",
    difficulty: "easy",
    anchor: null,
    vignette: "A 24-year-old graduate student reports intrusive, distressing thoughts that her hands are contaminated, which she can only relieve by washing them repeatedly, sometimes for hours each day until they are raw. She recognizes the thoughts are excessive and irrational but cannot resist the urge. These rituals now consume much of her day and are causing her to fall behind in school. She has no manic or psychotic symptoms.",
    lead: "Which of the following is the most appropriate first-line treatment?",
    options: [
      "Start a long-term benzodiazepine for the anxiety.",
      "Begin a selective serotonin reuptake inhibitor and/or cognitive behavioral therapy with exposure and response prevention.",
      "Use an antipsychotic as monotherapy.",
      "Provide no treatment and reassess in 6 months.",
      "Prescribe a short course of a stimulant."
    ],
    answer: 1,
    exp: "Intrusive obsessions and time-consuming compulsions with preserved insight and functional impairment define obsessive-compulsive disorder. First-line treatment is a selective serotonin reuptake inhibitor (often at higher doses than for depression) and/or cognitive behavioral therapy using exposure and response prevention.",
    why: [
      "Benzodiazepines do not treat the core obsessive-compulsive symptoms and carry dependence risk.",
      "Correct: an SSRI and/or cognitive behavioral therapy with exposure and response prevention is first-line for obsessive-compulsive disorder.",
      "Antipsychotics are used only as augmentation in refractory cases, not first-line monotherapy.",
      "Functionally impairing symptoms warrant treatment now, not delayed reassessment.",
      "Stimulants have no role and could worsen anxiety and compulsions."
    ]
  },
  {
    id: "s3-0298",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Refusal of blood transfusion by a competent patient",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 45-year-old man who is a Jehovah's Witness is admitted with a brisk upper gastrointestinal hemorrhage and a hemoglobin of 6 g/dL. He is alert and oriented, understands that he could die without a transfusion, and clearly and consistently refuses all blood products on religious grounds. He has full decision-making capacity. His adult children arrive and beg you to transfuse him despite his refusal.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Transfuse blood under an emergency exception over his objection.",
      "Wait until he loses consciousness and then transfuse.",
      "Honor his informed refusal, withhold blood products, and pursue non-blood management strategies.",
      "Obtain a court order to compel transfusion.",
      "Defer to the family's wishes and transfuse."
    ],
    answer: 2,
    exp: "A competent, informed adult has the right to refuse any treatment, including life-saving transfusion, even when refusal may result in death. The physician must respect his autonomous decision and instead optimize non-blood strategies (volume support, hemostatic control, iron, erythropoiesis-stimulating agents) rather than transfuse against his will.",
    why: [
      "The emergency exception does not apply when a capable patient has explicitly and currently refused the treatment.",
      "Waiting to transfuse once he is unconscious circumvents a valid, capacitated refusal and is unethical.",
      "Correct: respect the competent patient's informed refusal and manage with non-blood strategies.",
      "Courts do not override a competent adult's refusal of treatment for himself.",
      "The family cannot override the autonomous decision of a patient who has capacity."
    ]
  },
  {
    id: "s3-0299",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "HPV vaccination recommendation in adolescents",
    difficulty: "easy",
    anchor: null,
    vignette: "A 13-year-old girl is seen for a routine well-child visit. She is healthy and her other immunizations are up to date. Her mother has heard about the human papillomavirus vaccine and asks whether her daughter should receive it, noting that her daughter is not yet sexually active. There are no contraindications, and the girl feels well with a normal examination.",
    lead: "Which of the following is the most appropriate recommendation?",
    options: [
      "Wait to vaccinate until she becomes sexually active.",
      "Vaccinate only if she has an abnormal Pap test in the future.",
      "Advise that the vaccine is contraindicated at her age.",
      "Recommend the HPV vaccine now as a two-dose series, appropriate for ages 9 to 14.",
      "Give a single dose only, with no further follow-up."
    ],
    answer: 3,
    exp: "HPV vaccination is routinely recommended around ages 11-12 (and can start at 9), before the onset of sexual activity, precisely because it is most effective when given prior to exposure. For those who start before their 15th birthday, a two-dose schedule provides protection against HPV-related cancers and warts.",
    why: [
      "Vaccinating before sexual debut maximizes protection, so waiting reduces benefit.",
      "The vaccine prevents infection and should be given before exposure, not withheld pending an abnormal Pap.",
      "The vaccine is indicated, not contraindicated, at age 13.",
      "Correct: recommend the HPV vaccine now as a two-dose series, which is the schedule for ages 9-14.",
      "A single dose does not complete the recommended series for full protection in this schedule."
    ]
  },
  {
    id: "s3-0300",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Multiple comparisons and type I error inflation",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A large randomized trial comparing a new drug with placebo finds no difference in its prespecified primary endpoint. The investigators then perform 20 unplanned subgroup analyses and highlight one showing benefit in left-handed patients with a p-value of 0.04, none of which was adjusted for multiple testing. A clinician reads the paper and considers prescribing the drug specifically to left-handed patients on the basis of this finding.\n\n| Analysis | Result |\n|---|---|\n| Primary endpoint | not significant |\n| Subgroup analyses performed | 20 |\n| Adjustment for multiple testing | none |\n| Highlighted subgroup p-value | 0.04 |",
    lead: "Which of the following is the best interpretation of the highlighted subgroup result?",
    options: [
      "The subgroup finding proves the drug works and practice should change.",
      "The result is definitive because the p-value is below 0.05.",
      "The negative primary endpoint should be disregarded in favor of the subgroup.",
      "A larger p-value would have made the subgroup finding more convincing.",
      "Testing many subgroups inflates the type I error rate, so this isolated significant result is likely a false positive and only hypothesis-generating."
    ],
    answer: 4,
    exp: "When many comparisons are made without adjustment, the probability of at least one false-positive result rises well above the nominal 5%. With 20 unplanned subgroup tests, an isolated p=0.04 is likely a chance finding. Such results are hypothesis-generating and should not change practice without confirmation in a dedicated trial.",
    why: [
      "A single unadjusted subgroup result does not prove efficacy, especially when the primary endpoint was negative.",
      "A p-value just under 0.05 among many tests is not definitive; the multiplicity undermines it.",
      "The prespecified primary endpoint is the most reliable result and should not be discarded for a post hoc subgroup.",
      "A larger p-value indicates weaker, not stronger, evidence, so this reasoning is backward.",
      "Correct: multiple unadjusted comparisons inflate the type I error rate, making this isolated result likely a false positive and only hypothesis-generating."
    ]
  }
];
