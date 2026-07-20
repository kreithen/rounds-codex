/*
 * Rounds Codex - USMLE Step 2 CK question bank, Batch 12 (25 items)
 * Blueprint-weighted, Medicine-heavy clinical mix. All vignettes original;
 * source used for facts only. Step 2 CK items are clinical: each ends in a
 * decision about diagnosis, next best step, pharmacotherapy, or prevention.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP2CK_B12 = [
  {
    id: "s2ck-0276",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Constrictive pericarditis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 61-year-old man who received mediastinal radiation for lymphoma years ago has 6 months of progressive fatigue, leg swelling, and abdominal distension. On exam his jugular venous pressure is elevated and rises further with inspiration, and there is hepatomegaly, ascites, and pitting edema. A sharp early-diastolic sound is audible at the left sternal border. Echocardiography shows a septal bounce with respiratory variation in ventricular filling and normal systolic function.\n\n**[IMAGE: Chest CT showing a diffusely thickened, calcified pericardium encasing the heart]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Constrictive pericarditis",
      "Restrictive cardiomyopathy",
      "Cardiac tamponade",
      "Right ventricular myocardial infarction",
      "Decompensated cirrhosis"
    ],
    answer: 0,
    exp: "Right-heart failure signs with elevated jugular venous pressure, Kussmaul sign, a pericardial knock, ventricular interdependence on echo, and a thickened calcified pericardium after mediastinal radiation indicate constrictive pericarditis. The rigid pericardium limits diastolic filling; definitive treatment for refractory cases is pericardiectomy.",
    why: [
      "Correct: Kussmaul sign, a pericardial knock, respiratory ventricular interdependence, and a calcified thickened pericardium after radiation define constrictive pericarditis.",
      "Restrictive cardiomyopathy causes similar filling abnormalities but from infiltrated myocardium, without a calcified thickened pericardium or ventricular interdependence.",
      "Cardiac tamponade develops acutely with a pericardial effusion, pulsus paradoxus, and diastolic chamber collapse, not chronic pericardial calcification.",
      "Right ventricular infarction causes acute hypotension and elevated venous pressure in the setting of an inferior STEMI, not chronic constriction with pericardial calcification.",
      "Cirrhosis produces ascites and edema but with a low or normal jugular venous pressure and no pericardial knock or calcification."
    ]
  },
  {
    id: "s2ck-0277",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Mitral stenosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 39-year-old woman who immigrated from a region where rheumatic fever is common has 8 months of progressive exertional dyspnea and one episode of blood-streaked sputum. On auscultation there is a loud first heart sound, an opening snap shortly after the second sound, and a low-pitched diastolic rumble at the apex heard best in the left lateral position. Her pulse is irregularly irregular.\n\n**[IMAGE: Transthoracic echocardiogram showing a thickened mitral valve with diastolic doming ('hockey-stick' anterior leaflet), a reduced valve orifice, and left atrial enlargement]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Aortic stenosis",
      "Mitral stenosis",
      "Mitral regurgitation",
      "Aortic regurgitation",
      "Atrial septal defect"
    ],
    answer: 1,
    exp: "A loud S1, an opening snap, and an apical diastolic rumble with atrial fibrillation and left atrial enlargement in a patient with prior rheumatic fever indicate mitral stenosis. The narrowed valve raises left atrial pressure, causing dyspnea, hemoptysis, and atrial fibrillation; treatment options include percutaneous balloon valvotomy or valve surgery.",
    why: [
      "Aortic stenosis causes a crescendo-decrescendo systolic murmur radiating to the carotids, not a diastolic rumble with an opening snap.",
      "Correct: a loud S1, opening snap, apical diastolic rumble, atrial fibrillation, and left atrial enlargement after rheumatic fever define mitral stenosis.",
      "Mitral regurgitation produces a holosystolic murmur radiating to the axilla, not a diastolic rumble with an opening snap.",
      "Aortic regurgitation causes an early diastolic decrescendo murmur with a wide pulse pressure, not a mid-diastolic rumble with a loud S1.",
      "An atrial septal defect causes a fixed split S2 and a pulmonary flow murmur, not an opening snap with a doming mitral valve."
    ]
  },
  {
    id: "s2ck-0278",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Primary biliary cholangitis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 52-year-old woman has several months of fatigue and generalized itching that is worst at night. On exam she has mild scleral icterus, xanthelasma around the eyes, excoriations, and a non-tender enlarged liver. She has a history of hypothyroidism. She drinks no alcohol and takes no hepatotoxic medications.\n\n| Test | Value | Reference |\n|---|---|---|\n| Alkaline phosphatase | markedly elevated | normal |\n| AST / ALT | mildly elevated | normal |\n| Antimitochondrial antibody | positive | negative |\n| IgM | elevated | normal |\n| Right upper quadrant ultrasound | normal ducts, no stones | - |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Primary sclerosing cholangitis",
      "Autoimmune hepatitis",
      "Primary biliary cholangitis",
      "Chronic hepatitis C",
      "Choledocholithiasis"
    ],
    answer: 2,
    exp: "A middle-aged woman with fatigue, pruritus, a cholestatic pattern (high alkaline phosphatase), a positive antimitochondrial antibody, elevated IgM, and normal ducts on imaging has primary biliary cholangitis, an autoimmune destruction of small intralobular bile ducts. Ursodeoxycholic acid slows progression and is first-line therapy.",
    why: [
      "Primary sclerosing cholangitis affects men with ulcerative colitis and shows multifocal duct strictures ('beading') on cholangiography, not a positive antimitochondrial antibody with normal ducts.",
      "Autoimmune hepatitis causes a hepatocellular pattern with high transaminases and positive anti-smooth-muscle or ANA antibodies, not a cholestatic pattern with antimitochondrial antibody.",
      "Correct: cholestatic pattern, antimitochondrial antibody, elevated IgM, and pruritus in a middle-aged woman define primary biliary cholangitis.",
      "Chronic hepatitis C causes a hepatocellular pattern with positive viral serology, not a cholestatic picture with antimitochondrial antibody.",
      "Choledocholithiasis produces a dilated common bile duct with a visible stone on imaging, which are absent here."
    ]
  },
  {
    id: "s2ck-0279",
    system: "Internal Medicine",
    discipline: "Hepatology",
    topic: "Wilson disease",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 23-year-old man is evaluated for a 4-month history of a resting and postural tremor, slurred speech, and clumsiness, along with new depression and declining school performance. His transaminases are mildly elevated. Slit-lamp examination reveals golden-brown rings at the corneal margins. He has episodes of jaundice, and a Coombs test is negative despite evidence of hemolysis.\n\n| Test | Value | Reference |\n|---|---|---|\n| Serum ceruloplasmin | low | normal |\n| 24-hour urinary copper | markedly elevated | normal |\n| Slit-lamp exam | Kayser-Fleischer rings | absent |\n| Direct antiglobulin (Coombs) | negative | negative |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Autoimmune hepatitis",
      "Alpha-1 antitrypsin deficiency",
      "Hereditary hemochromatosis",
      "Wilson disease",
      "Acute hepatitis B"
    ],
    answer: 3,
    exp: "A young adult with combined hepatic disease, a movement disorder, neuropsychiatric symptoms, Kayser-Fleischer rings, Coombs-negative hemolytic anemia, low ceruloplasmin, and high urinary copper has Wilson disease (hepatolenticular degeneration). Copper accumulates from impaired biliary excretion; treatment is chelation with penicillamine or trientine plus zinc.",
    why: [
      "Autoimmune hepatitis causes hepatocellular injury with autoantibodies but not Kayser-Fleischer rings, low ceruloplasmin, or a copper-driven hemolytic anemia.",
      "Alpha-1 antitrypsin deficiency causes liver disease and early emphysema, not corneal copper rings or a movement disorder.",
      "Hemochromatosis deposits iron causing diabetes, skin bronzing, and arthropathy, not low ceruloplasmin with Kayser-Fleischer rings.",
      "Correct: hepatic plus neuropsychiatric disease with Kayser-Fleischer rings, low ceruloplasmin, and high urinary copper defines Wilson disease.",
      "Acute hepatitis B causes a self-limited hepatitis with positive viral serologies, not copper accumulation with a movement disorder and corneal rings."
    ]
  },
  {
    id: "s2ck-0280",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Central diabetes insipidus",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 40-year-old man develops relentless thirst and passes large volumes of dilute urine, up to 8 liters a day, beginning 2 weeks after resection of a pituitary macroadenoma. He wakes several times nightly to urinate and drink. His serum sodium is at the upper end of normal, and his fingerstick glucose is normal. A supervised water deprivation test is performed with the following results.\n\n| Phase | Urine osmolality | Serum osmolality |\n|---|---|---|\n| Baseline | 110 mOsm/kg | 296 mOsm/kg |\n| After water deprivation | 130 mOsm/kg (remains low) | 305 mOsm/kg |\n| After desmopressin | rises to 400 mOsm/kg (> 50% increase) | - |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Primary polydipsia",
      "Nephrogenic diabetes insipidus",
      "Osmotic diuresis from hyperglycemia",
      "Diuretic use",
      "Central diabetes insipidus"
    ],
    answer: 4,
    exp: "Persistent production of dilute urine despite rising serum osmolality after water deprivation, with a robust (> 50%) rise in urine osmolality after desmopressin, indicates central diabetes insipidus from deficient antidiuretic hormone, here after pituitary surgery. Treatment is desmopressin replacement.",
    why: [
      "Primary polydipsia would concentrate the urine with water deprivation alone because ADH production and response are intact.",
      "Nephrogenic diabetes insipidus fails to concentrate urine after BOTH water deprivation AND desmopressin, because the kidney cannot respond to ADH.",
      "Osmotic diuresis from hyperglycemia is excluded by the normal glucose, and it would not correct with desmopressin.",
      "Diuretic use is not reported and would not produce a marked urine-concentrating response to desmopressin after water deprivation.",
      "Correct: dilute urine despite dehydration that concentrates by more than 50% after desmopressin, following pituitary surgery, defines central diabetes insipidus."
    ]
  },
  {
    id: "s2ck-0281",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Sjogren syndrome",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 54-year-old woman has 2 years of persistent dry eyes with a gritty, foreign-body sensation and a dry mouth that makes swallowing crackers difficult without water. She has developed multiple dental caries and bilateral parotid gland enlargement. On exam her corneal surface stains with fluorescein, and Schirmer testing shows reduced tear production. She has no rash and no synovitis.\n\n| Test | Value | Reference |\n|---|---|---|\n| Anti-Ro/SSA antibody | positive | negative |\n| Anti-La/SSB antibody | positive | negative |\n| Rheumatoid factor | positive | negative |\n| Schirmer test | reduced tear wetting | normal |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Sjogren syndrome",
      "Systemic lupus erythematosus",
      "Sarcoidosis",
      "IgG4-related disease",
      "Rheumatoid arthritis"
    ],
    answer: 0,
    exp: "The combination of dry eyes (keratoconjunctivitis sicca) and dry mouth (xerostomia) with parotid enlargement, dental caries, positive anti-Ro/SSA and anti-La/SSB antibodies, and a positive Schirmer test defines Sjogren syndrome, an autoimmune exocrinopathy. Management is symptomatic (artificial tears, secretagogues) with monitoring for lymphoma risk.",
    why: [
      "Correct: sicca symptoms with parotid enlargement, positive anti-Ro/SSA and anti-La/SSB, and a positive Schirmer test define Sjogren syndrome.",
      "Lupus causes malar rash, serositis, and nephritis with anti-dsDNA, not isolated sicca symptoms with prominent xerostomia and caries.",
      "Sarcoidosis can cause parotid swelling but presents with hilar adenopathy and non-caseating granulomas, not anti-Ro/anti-La-positive sicca disease.",
      "IgG4-related disease causes gland enlargement with elevated IgG4 and storiform fibrosis, not anti-Ro/anti-La positivity with keratoconjunctivitis sicca.",
      "Rheumatoid arthritis causes symmetric erosive synovitis; secondary sicca can occur, but this patient has no synovitis and a primary sicca picture."
    ]
  },
  {
    id: "s2ck-0282",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Rocky Mountain spotted fever",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 30-year-old man from North Carolina develops high fever, severe headache, and myalgias 5 days after a camping trip. Two days later a rash appears. He recalls removing a tick from his leg. He is ill-appearing with a temperature of 39.4 C. Laboratory studies show thrombocytopenia, hyponatremia, and mild transaminase elevation. The clinician starts empiric doxycycline without waiting for confirmatory serology.\n\n**[IMAGE: Photograph of a maculopapular and petechial rash beginning on the wrists and ankles, involving the palms and soles, and spreading centrally toward the trunk]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Lyme disease",
      "Rocky Mountain spotted fever",
      "Meningococcemia",
      "Measles",
      "Secondary syphilis"
    ],
    answer: 1,
    exp: "Fever, headache, and myalgias after a tick bite followed by a rash that starts on the wrists and ankles, involves the palms and soles, and spreads centrally, with thrombocytopenia and hyponatremia, is classic Rocky Mountain spotted fever from Rickettsia rickettsii. Because delay increases mortality, doxycycline is started empirically before serologic confirmation.",
    why: [
      "Lyme disease causes an expanding erythema migrans target lesion, not a centrally spreading petechial rash on the palms and soles with thrombocytopenia.",
      "Correct: a tick bite followed by a wrist/ankle rash spreading centrally to involve palms and soles, with thrombocytopenia and hyponatremia, defines Rocky Mountain spotted fever.",
      "Meningococcemia causes fulminant sepsis with a rapidly spreading purpuric rash but is not linked to a tick bite or the characteristic wrist-and-ankle onset.",
      "Measles causes a cephalocaudal rash with cough, coryza, conjunctivitis, and Koplik spots, not a tick-associated acral petechial rash.",
      "Secondary syphilis causes a diffuse copper-colored rash on the palms and soles but is not acute, febrile, tick-associated, or accompanied by thrombocytopenia."
    ]
  },
  {
    id: "s2ck-0283",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Amyotrophic lateral sclerosis",
    difficulty: "hard",
    anchor: null,
    vignette: "A 63-year-old man has 8 months of progressive, painless weakness that began with a foot drop and now involves both hands and his swallowing. On exam he has muscle atrophy and visible fasciculations in the hands and tongue, together with brisk reflexes, spasticity, and an extensor plantar response. Sensation is completely intact, extraocular movements are normal, and cognition is preserved. There are no bowel or bladder symptoms.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Cervical spondylotic myelopathy",
      "Multiple sclerosis",
      "Amyotrophic lateral sclerosis",
      "Myasthenia gravis",
      "Guillain-Barre syndrome"
    ],
    answer: 2,
    exp: "Progressive weakness with simultaneous upper motor neuron signs (spasticity, hyperreflexia, extensor plantars) and lower motor neuron signs (atrophy, fasciculations, tongue involvement) in the absence of sensory loss is characteristic of amyotrophic lateral sclerosis. Riluzole modestly prolongs survival, and care is otherwise supportive and multidisciplinary.",
    why: [
      "Cervical spondylotic myelopathy causes upper motor neuron signs below the lesion with sensory changes, but not tongue fasciculations or bulbar involvement.",
      "Multiple sclerosis causes relapsing central deficits with sensory and visual involvement and lesions disseminated in space and time, not pure combined motor neuron degeneration.",
      "Correct: combined upper and lower motor neuron signs with tongue fasciculations and preserved sensation define amyotrophic lateral sclerosis.",
      "Myasthenia gravis causes fatigable weakness with ptosis and diplopia and no upper motor neuron signs, fasciculations, or atrophy.",
      "Guillain-Barre syndrome is an acute ascending areflexic paralysis with sensory symptoms, not a chronic mixed upper-and-lower motor neuron syndrome."
    ]
  },
  {
    id: "s2ck-0284",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Aplastic anemia",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 25-year-old man has 3 weeks of worsening fatigue, easy bruising, gum bleeding, and a persistent sore throat with fevers. He took a course of an antibiotic weeks earlier. On exam he is pale with scattered petechiae; there is no lymphadenopathy or splenomegaly. A bone marrow biopsy is performed.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 7.8 g/dL | 13.5-17.5 |\n| WBC | 1.9 x10^9/L | 4.5-11.0 |\n| Platelets | 18 x10^9/L | 150-400 |\n| Reticulocyte count | very low | normal-high |\n| Bone marrow | markedly hypocellular, fatty, no blasts | - |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Acute myeloid leukemia",
      "Myelodysplastic syndrome",
      "Vitamin B12 deficiency",
      "Aplastic anemia",
      "Paroxysmal nocturnal hemoglobinuria"
    ],
    answer: 3,
    exp: "Pancytopenia with a low reticulocyte count and a markedly hypocellular, fat-replaced bone marrow lacking blasts or fibrosis defines aplastic anemia, here likely drug-associated. Management is removal of the offending agent plus immunosuppression (antithymocyte globulin and cyclosporine) or hematopoietic stem-cell transplantation in young patients.",
    why: [
      "Acute myeloid leukemia produces a HYPERcellular marrow packed with blasts, not an empty fat-replaced marrow without blasts.",
      "Myelodysplastic syndrome shows a hypercellular or normocellular dysplastic marrow with cytogenetic abnormalities, not a strikingly hypocellular fatty marrow.",
      "Vitamin B12 deficiency causes a megaloblastic marrow with hypersegmented neutrophils and macrocytosis, not marrow aplasia.",
      "Correct: pancytopenia with reticulocytopenia and a hypocellular fat-replaced marrow without blasts defines aplastic anemia.",
      "Paroxysmal nocturnal hemoglobinuria causes complement-mediated hemolysis with thrombosis and can cause marrow failure, but the picture here is primary marrow aplasia."
    ]
  },
  {
    id: "s2ck-0285",
    system: "Surgery",
    discipline: "Orthopedic Surgery",
    topic: "Rotator cuff tear",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 58-year-old house painter has several months of right shoulder pain that is worse with overhead activity and at night when he lies on that side. He now has difficulty lifting his arm to comb his hair. On exam he has weakness of abduction and external rotation, and when his arm is passively raised to 90 degrees and released it drops suddenly. There is no history of acute dislocation.\n\n**[IMAGE: Shoulder MRI showing a full-thickness tear of the supraspinatus tendon with retraction and fluid in the subacromial space]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Adhesive capsulitis (frozen shoulder)",
      "Acromioclavicular joint separation",
      "Anterior shoulder dislocation",
      "Biceps tendon rupture",
      "Rotator cuff tear"
    ],
    answer: 4,
    exp: "Chronic overhead-worker shoulder pain worse at night, weakness of abduction and external rotation, a positive drop-arm test, and an MRI showing a full-thickness supraspinatus tear indicate a rotator cuff tear. Management ranges from physical therapy for partial tears to surgical repair for full-thickness tears in active patients.",
    why: [
      "Adhesive capsulitis causes global loss of both active AND passive range of motion, not isolated weakness with preserved passive motion and a tendon tear on MRI.",
      "An acromioclavicular separation follows a direct fall onto the shoulder with a tender, stepped-off AC joint, not a supraspinatus tendon tear.",
      "Anterior dislocation presents acutely with the arm held in slight abduction and external rotation and a visibly deformed shoulder, not a chronic drop-arm sign.",
      "Biceps tendon rupture causes a 'Popeye' bulge of the muscle belly, not weakness of abduction with a supraspinatus tear.",
      "Correct: chronic pain, weak abduction/external rotation, a positive drop-arm test, and a full-thickness supraspinatus tear on MRI define a rotator cuff tear."
    ]
  },
  {
    id: "s2ck-0286",
    system: "Surgery",
    discipline: "Neurosurgery",
    topic: "Lumbar disc herniation with radiculopathy",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 41-year-old warehouse worker develops sharp low back pain radiating down the back of the right leg to the sole of the foot after lifting a heavy box. Raising the straight right leg to 40 degrees reproduces the shooting leg pain. He has weakness of plantarflexion and a diminished right ankle reflex, with decreased sensation over the lateral foot. He has normal bowel and bladder function and no saddle anesthesia.\n\n**[IMAGE: Lumbar spine MRI showing a paracentral disc herniation at L5-S1 compressing the traversing S1 nerve root]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Lumbar disc herniation with radiculopathy",
      "Cauda equina syndrome",
      "Lumbar spinal stenosis",
      "Vertebral compression fracture",
      "Ankylosing spondylitis"
    ],
    answer: 0,
    exp: "Acute radicular pain after lifting, a positive straight-leg-raise, and an S1 radiculopathy (weak plantarflexion, diminished ankle reflex, lateral-foot sensory loss) with a corresponding disc herniation define lumbar disc herniation. Without red flags, initial management is conservative (analgesia and activity as tolerated), because most herniations resolve without surgery.",
    why: [
      "Correct: an acute positive straight-leg-raise with an S1 radiculopathy and a matching disc herniation defines lumbar disc herniation with radiculopathy.",
      "Cauda equina syndrome requires saddle anesthesia, urinary retention, or bilateral deficits, which are absent here, and is a surgical emergency.",
      "Spinal stenosis causes neurogenic claudication that worsens with standing and improves with flexion in older adults, not acute lifting-induced radiculopathy.",
      "A vertebral compression fracture causes focal axial pain, usually in osteoporotic or trauma settings, not a dermatomal radiculopathy with a disc herniation.",
      "Ankylosing spondylitis causes chronic inflammatory back pain with morning stiffness improving with exercise, not acute unilateral sciatica from a disc."
    ]
  },
  {
    id: "s2ck-0287",
    system: "Surgery",
    discipline: "Vascular Surgery",
    topic: "Chronic venous insufficiency",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 66-year-old woman has years of aching, heavy legs that worsen with prolonged standing and improve with elevation. She has bilateral ankle swelling and brownish skin discoloration around both ankles. On exam there are dilated tortuous varicosities, firm indurated skin above the medial malleolus, and a shallow, irregular, weeping ulcer over the medial ankle. Her pedal pulses are palpable and the ankle-brachial index is normal.\n\n**[IMAGE: Photograph of the medial ankle showing hemosiderin hyperpigmentation, lipodermatosclerosis, and a shallow exudative ulcer just above the medial malleolus]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Arterial insufficiency ulcer",
      "Chronic venous insufficiency with venous stasis ulcer",
      "Neuropathic (diabetic) foot ulcer",
      "Pyoderma gangrenosum",
      "Cellulitis"
    ],
    answer: 1,
    exp: "Aching legs relieved by elevation, varicosities, hemosiderin pigmentation, lipodermatosclerosis, and a shallow exudative ulcer over the medial malleolus with normal pulses define chronic venous insufficiency with a venous stasis ulcer. Treatment centers on graded compression therapy and leg elevation.",
    why: [
      "An arterial ulcer is a painful, punched-out lesion over the toes or lateral malleolus with absent pulses and a low ankle-brachial index, not a medial exudative ulcer with normal pulses.",
      "Correct: varicosities, hemosiderin staining, lipodermatosclerosis, and a medial-malleolar ulcer with normal pulses define chronic venous insufficiency with a stasis ulcer.",
      "A neuropathic ulcer occurs at pressure points (e.g., the plantar surface) in patients with sensory loss, not over the medial malleolus with venous stigmata.",
      "Pyoderma gangrenosum is a rapidly enlarging painful ulcer with a violaceous undermined border linked to inflammatory bowel disease, not chronic venous stasis changes.",
      "Cellulitis is an acute, spreading, warm erythema with fever, not a chronic ulcer with hemosiderin pigmentation and lipodermatosclerosis."
    ]
  },
  {
    id: "s2ck-0288",
    system: "Surgery",
    discipline: "Surgical Oncology",
    topic: "Basal cell carcinoma",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 70-year-old man with extensive sun exposure as a farmer presents with a slowly enlarging lesion on the side of his nose that has been present for over a year. It occasionally bleeds with minor trauma and then scabs over but never fully heals. It is not painful. He has fair skin and a history of multiple sunburns.\n\n**[IMAGE: Dermatologic photograph of a pearly, translucent papule with a rolled border, central ulceration, and overlying telangiectasias]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Squamous cell carcinoma",
      "Melanoma",
      "Basal cell carcinoma",
      "Seborrheic keratosis",
      "Actinic keratosis"
    ],
    answer: 2,
    exp: "A slow-growing, pearly, translucent papule with a rolled border, central ulceration, and telangiectasias on sun-exposed skin that bleeds and fails to heal is basal cell carcinoma, the most common skin cancer. It rarely metastasizes but is locally invasive; diagnosis is by biopsy and treatment is excision (or Mohs surgery for the face).",
    why: [
      "Squamous cell carcinoma appears as a firm, scaly, or ulcerated hyperkeratotic nodule, not a pearly papule with telangiectasias and a rolled border.",
      "Melanoma is a pigmented lesion with asymmetry, irregular borders, and color variation, not a pearly translucent nodule.",
      "Correct: a pearly, telangiectatic papule with a rolled border and central ulceration on sun-exposed skin defines basal cell carcinoma.",
      "A seborrheic keratosis is a benign, waxy, 'stuck-on' pigmented plaque, not a pearly ulcerated nodule.",
      "An actinic keratosis is a rough, scaly, erythematous macule (a precancerous lesion), not a pearly nodule with telangiectasias."
    ]
  },
  {
    id: "s2ck-0289",
    system: "Pediatrics",
    discipline: "Neonatology",
    topic: "Biliary atresia",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 6-week-old full-term girl has jaundice that was noted at 3 weeks and has steadily worsened. Her parents report that her stools have become pale, clay-colored, and her urine is dark. She is feeding and growing adequately. On exam she is jaundiced with firm hepatomegaly.\n\n| Test | Value | Reference |\n|---|---|---|\n| Total bilirubin | elevated | - |\n| Direct (conjugated) bilirubin | markedly elevated (> 20% of total) | < 20% |\n| GGT | elevated | normal |\n| Abdominal ultrasound | small/absent gallbladder, no dilated ducts | - |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Physiologic jaundice",
      "Breast milk jaundice",
      "Neonatal hemolytic disease",
      "Biliary atresia",
      "Crigler-Najjar syndrome"
    ],
    answer: 3,
    exp: "Conjugated (direct) hyperbilirubinemia persisting beyond 2 weeks with acholic pale stools, dark urine, hepatomegaly, and an absent or small gallbladder points to biliary atresia, a progressive obliteration of the extrahepatic bile ducts. Prompt confirmation and Kasai portoenterostomy before 8 weeks of age are critical to preserve liver function.",
    why: [
      "Physiologic jaundice is an unconjugated hyperbilirubinemia that resolves within the first 1-2 weeks, not a conjugated hyperbilirubinemia with acholic stools at 6 weeks.",
      "Breast milk jaundice causes prolonged UNCONJUGATED hyperbilirubinemia in a thriving infant, not conjugated hyperbilirubinemia with pale stools.",
      "Hemolytic disease produces an unconjugated hyperbilirubinemia with anemia, not conjugated hyperbilirubinemia with acholic stools and hepatomegaly.",
      "Correct: persistent conjugated hyperbilirubinemia with acholic stools and an absent gallbladder defines biliary atresia, requiring urgent Kasai procedure.",
      "Crigler-Najjar syndrome is a severe UNCONJUGATED hyperbilirubinemia from UDP-glucuronosyltransferase deficiency, not a conjugated cholestasis."
    ]
  },
  {
    id: "s2ck-0290",
    system: "Pediatrics",
    discipline: "Pediatric Neurology",
    topic: "Duchenne muscular dystrophy",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 4-year-old boy is brought in because he is slower than his peers, falls frequently, and has trouble climbing stairs and getting up from the floor. His parents note he pushes on his thighs with his hands to stand upright. On exam he has a waddling gait, lumbar lordosis, and enlarged, firm calf muscles. He has a maternal uncle who used a wheelchair from a young age.\n\n| Test | Value | Reference |\n|---|---|---|\n| Serum creatine kinase | markedly elevated (10-100x) | normal |\n| Genetic testing | dystrophin gene deletion | - |\n| Inheritance | X-linked recessive | - |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Spinal muscular atrophy",
      "Becker muscular dystrophy",
      "Myasthenia gravis",
      "Cerebral palsy",
      "Duchenne muscular dystrophy"
    ],
    answer: 4,
    exp: "A young boy with proximal weakness, a Gowers sign, calf pseudohypertrophy, a markedly elevated creatine kinase, an X-linked family history, and a dystrophin gene deletion has Duchenne muscular dystrophy. Glucocorticoids slow progression, and multidisciplinary cardiopulmonary surveillance is essential.",
    why: [
      "Spinal muscular atrophy causes hypotonia with absent reflexes and fasciculations from anterior horn cell loss, not calf pseudohypertrophy with very high creatine kinase.",
      "Becker muscular dystrophy is a milder allelic disorder with later onset and partially preserved dystrophin, not the severe early presentation seen here.",
      "Myasthenia gravis causes fatigable weakness with ptosis and normal creatine kinase, not a Gowers sign with pseudohypertrophy.",
      "Cerebral palsy is a non-progressive motor disorder from a perinatal insult with spasticity and a normal creatine kinase, not progressive weakness with high creatine kinase.",
      "Correct: proximal weakness, Gowers sign, calf pseudohypertrophy, very high creatine kinase, and a dystrophin deletion define Duchenne muscular dystrophy."
    ]
  },
  {
    id: "s2ck-0291",
    system: "Pediatrics",
    discipline: "Pediatric Surgery",
    topic: "Cryptorchidism",
    difficulty: "easy",
    anchor: null,
    vignette: "A 9-month-old boy is brought in for a well-child visit. His parents note that his right testis has never been felt in the scrotum. On repeated, gentle examination in a warm room, the right hemiscrotum is empty and appears underdeveloped, and the testis can be palpated high in the inguinal canal but cannot be drawn down into the scrotum. The left testis is normally positioned. He was born at term.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Refer for orchiopexy",
      "Reassure that it is a retractile testis and observe",
      "Obtain scrotal ultrasound and start antibiotics",
      "Perform emergent surgical exploration for torsion",
      "Prescribe intranasal gonadotropin and recheck in 2 years"
    ],
    answer: 0,
    exp: "A testis that remains undescended and cannot be brought into the scrotum by 6-12 months of age is cryptorchidism and should be corrected with orchiopexy. Early surgery (ideally by 12-18 months) reduces the risks of infertility and testicular malignancy and allows easier future examination.",
    why: [
      "Correct: an undescended testis that has not descended by 6-12 months should be referred for orchiopexy to reduce infertility and cancer risk.",
      "A retractile testis can be manually brought into the scrotum and stays there transiently; this testis cannot, so it is truly undescended.",
      "Ultrasound is unreliable for a palpable testis and antibiotics are irrelevant, as there is no infection.",
      "There are no acute signs of torsion (pain, swelling, tenderness), so emergent exploration for torsion is not indicated.",
      "Hormonal therapy is not standard first-line treatment, and delaying to age 2 or beyond forfeits the benefit of early orchiopexy."
    ]
  },
  {
    id: "s2ck-0292",
    system: "Pediatrics",
    discipline: "Pediatric Infectious Disease",
    topic: "Hand-foot-and-mouth disease",
    difficulty: "easy",
    anchor: null,
    vignette: "A 2-year-old girl who attends daycare has 2 days of low-grade fever and irritability, with reduced oral intake because her mouth hurts. On exam she has several shallow, painful ulcers on the tongue and buccal mucosa, along with small oval vesicles on the palms, soles, and buttocks surrounded by a red halo. Several children at her daycare have similar symptoms. She is otherwise well-hydrated and playful between episodes.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Herpangina",
      "Hand-foot-and-mouth disease",
      "Varicella",
      "Herpetic gingivostomatitis",
      "Aphthous stomatitis"
    ],
    answer: 1,
    exp: "Oral ulcers together with vesicles on the palms, soles, and buttocks in a febrile toddler during a daycare outbreak is hand-foot-and-mouth disease, typically caused by coxsackievirus A16. It is self-limited; management is supportive with hydration and analgesia, watching for dehydration from poor oral intake.",
    why: [
      "Herpangina causes posterior oropharyngeal vesicles and ulcers WITHOUT the characteristic hand, foot, and buttock lesions.",
      "Correct: oral ulcers plus vesicles on the palms, soles, and buttocks during a daycare outbreak define hand-foot-and-mouth disease.",
      "Varicella produces generalized vesicles in different stages ('dewdrops on a rose petal') over the trunk and face, not a palm-sole-mouth distribution.",
      "Herpetic gingivostomatitis causes painful anterior gingival and perioral ulcers with fever but not vesicles on the palms and soles.",
      "Aphthous stomatitis causes isolated recurrent oral ulcers without fever, a rash, or an outbreak among contacts."
    ]
  },
  {
    id: "s2ck-0293",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Fetal growth restriction",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 29-year-old woman at 32 weeks gestation who smokes and has chronic hypertension is found to have a fundal height that measures 5 cm less than expected for dates. Her dating is certain from a first-trimester ultrasound. A growth ultrasound shows an estimated fetal weight below the 5th percentile for gestational age, with reduced amniotic fluid and elevated resistance on umbilical artery Doppler studies.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Constitutionally small-for-gestational-age fetus",
      "Isolated oligohydramnios of unknown cause",
      "Fetal growth restriction",
      "Fetal macrosomia",
      "Incorrect pregnancy dating"
    ],
    answer: 2,
    exp: "An estimated fetal weight below the 10th percentile with oligohydramnios and abnormal umbilical artery Doppler in a mother with hypertension and smoking indicates fetal growth restriction from uteroplacental insufficiency. Management is serial growth and Doppler surveillance with antenatal testing and timed delivery when fetal compromise is detected.",
    why: [
      "A constitutionally small fetus grows along its own percentile with normal fluid and normal Dopplers, not with oligohydramnios and abnormal Doppler resistance.",
      "Isolated oligohydramnios without growth lag would not explain an estimated weight below the 5th percentile with abnormal Dopplers.",
      "Correct: estimated fetal weight below the 10th percentile with oligohydramnios and abnormal umbilical Dopplers from placental insufficiency defines fetal growth restriction.",
      "Macrosomia is excessive fetal growth (large size), the opposite of the small fetus described here.",
      "Dating is certain from a first-trimester ultrasound, so the small size reflects true growth restriction rather than a dating error."
    ]
  },
  {
    id: "s2ck-0294",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Amniotic fluid embolism",
    difficulty: "hard",
    anchor: null,
    vignette: "A 34-year-old woman in active labor with a rapidly progressing delivery suddenly becomes acutely short of breath, then hypotensive and hypoxic, and loses consciousness within minutes. She has a brief seizure. Shortly afterward she develops profuse bleeding from her intravenous sites and the vagina, with laboratory evidence of consumptive coagulopathy. She had no prior cardiac or respiratory disease.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Pulmonary thromboembolism",
      "Eclampsia",
      "Peripartum cardiomyopathy",
      "Amniotic fluid embolism",
      "Anaphylaxis"
    ],
    answer: 3,
    exp: "Sudden cardiovascular collapse, hypoxemia, and altered consciousness during labor or immediately postpartum, followed by disseminated intravascular coagulation, is the classic triad of amniotic fluid embolism. It is a catastrophic anaphylactoid reaction; treatment is immediate high-quality resuscitation, respiratory and hemodynamic support, and aggressive correction of coagulopathy.",
    why: [
      "Pulmonary thromboembolism causes acute dyspnea and hypoxia but does not typically cause immediate seizures with consumptive coagulopathy during delivery.",
      "Eclampsia causes seizures in the setting of preeclampsia (hypertension, proteinuria), not sudden cardiovascular collapse with DIC and no preceding hypertension.",
      "Peripartum cardiomyopathy causes heart failure that develops over weeks near term or postpartum, not sudden intrapartum collapse with coagulopathy.",
      "Correct: abrupt intrapartum cardiovascular collapse, hypoxia, altered mentation, and DIC define amniotic fluid embolism.",
      "Anaphylaxis causes hypotension with urticaria and bronchospasm after an allergen exposure, not the classic triad with DIC during delivery."
    ]
  },
  {
    id: "s2ck-0295",
    system: "Obstetrics & Gynecology",
    discipline: "Urogynecology",
    topic: "Stress urinary incontinence",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 52-year-old woman who has had three vaginal deliveries reports involuntary loss of small amounts of urine when she coughs, laughs, sneezes, or exercises. She does not have a strong sudden urge to void beforehand and does not leak at night. On examination, coughing with a full bladder produces a brief spurt of urine from the urethra. Her post-void residual volume is normal, and urinalysis is unremarkable.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Urge incontinence (overactive bladder)",
      "Overflow incontinence",
      "Mixed urinary incontinence",
      "Functional incontinence",
      "Stress urinary incontinence"
    ],
    answer: 4,
    exp: "Leakage of urine with increases in intra-abdominal pressure (cough, laugh, sneeze, exercise) without urgency, a positive cough stress test, and a normal post-void residual indicate stress urinary incontinence from urethral hypermobility or sphincter weakness. First-line management is pelvic floor muscle (Kegel) training, with a midurethral sling for refractory cases.",
    why: [
      "Urge incontinence causes a sudden compelling urge to void with leakage of larger volumes, not leakage triggered purely by coughing or sneezing.",
      "Overflow incontinence causes continuous dribbling with an elevated post-void residual from a poorly emptying bladder, which is normal here.",
      "Mixed incontinence combines stress and urge symptoms, but this patient has no urgency component.",
      "Functional incontinence results from cognitive or mobility impairment preventing timely toileting, not from a competent-appearing sphincter failing under pressure.",
      "Correct: leakage with coughing/sneezing/exercise, a positive cough stress test, and a normal post-void residual define stress urinary incontinence."
    ]
  },
  {
    id: "s2ck-0296",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Genitourinary syndrome of menopause",
    difficulty: "easy",
    anchor: null,
    vignette: "A 61-year-old woman who went through menopause 9 years ago reports vaginal dryness, burning, and pain with intercourse that has worsened over the past year. She also notes occasional light spotting after intercourse and mild urinary urgency. On exam the vaginal mucosa is thin, pale, and dry with loss of rugae, and the vaginal pH is elevated. There is no mass, and cervical cytology and endometrial evaluation are reassuring.",
    lead: "Which of the following is the most appropriate first-line treatment?",
    options: [
      "Topical vaginal estrogen",
      "Oral fluconazole",
      "Metronidazole",
      "High-potency topical clobetasol",
      "Total hysterectomy"
    ],
    answer: 0,
    exp: "Vaginal dryness, dyspareunia, thin pale mucosa with loss of rugae, and an elevated vaginal pH in a postmenopausal woman are the genitourinary syndrome of menopause (atrophic vaginitis) from estrogen deficiency. After excluding other causes of bleeding, low-dose topical vaginal estrogen is effective first-line therapy; nonhormonal moisturizers are an alternative.",
    why: [
      "Correct: postmenopausal vaginal atrophy with dryness, dyspareunia, and an elevated pH is treated with low-dose topical vaginal estrogen.",
      "Fluconazole treats candidal vaginitis, which causes thick discharge and pruritus with a normal or low pH, not atrophic dry mucosa.",
      "Metronidazole treats bacterial vaginosis or trichomoniasis, which cause discharge and odor, not estrogen-deficient atrophy.",
      "Clobetasol treats lichen sclerosus, which causes white porcelain plaques and architectural change, not diffuse thin atrophic mucosa.",
      "Hysterectomy is not indicated for atrophic vaginitis, and the endometrial evaluation was already reassuring."
    ]
  },
  {
    id: "s2ck-0297",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Adjustment disorder",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 34-year-old man is seen 6 weeks after being unexpectedly laid off from his job. Since then he has felt down and worried, has trouble concentrating, sleeps poorly, and has withdrawn from friends, which is affecting his marriage. He does not have anhedonia, guilt, or thoughts of death, and he denies psychomotor changes or weight loss. He has no prior psychiatric history, and his symptoms clearly began after the layoff.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Major depressive disorder",
      "Adjustment disorder",
      "Acute stress disorder",
      "Persistent depressive disorder (dysthymia)",
      "Normal bereavement"
    ],
    answer: 1,
    exp: "Emotional and behavioral symptoms out of proportion to an identifiable stressor, beginning within 3 months of that stressor and causing functional impairment but not meeting criteria for another disorder, define adjustment disorder. It typically resolves within 6 months of the stressor's end; supportive psychotherapy is first-line.",
    why: [
      "Major depressive disorder requires at least five of nine symptoms including anhedonia or depressed mood for 2 weeks; this patient lacks the full symptom set.",
      "Correct: distress out of proportion to an identifiable stressor within 3 months, with impairment but not meeting another disorder's criteria, defines adjustment disorder.",
      "Acute stress disorder follows exposure to a traumatic (life-threatening) event with dissociative and re-experiencing symptoms, not a job loss.",
      "Persistent depressive disorder requires a depressed mood on most days for at least 2 years, far longer than 6 weeks.",
      "Bereavement follows the death of a loved one, not a job loss, and is not the best fit here."
    ]
  },
  {
    id: "s2ck-0298",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Antisocial personality disorder",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 27-year-old man is evaluated after an arrest for assault. He has a long history of arrests for theft and fraud, has been fired repeatedly for fighting and lying, and cannot hold a job or keep housing. He shows no remorse for harming others, is glib and manipulative, and blames his victims. His history reveals repeated truancy, fire-setting, and cruelty to animals before age 15. There is no evidence of psychosis or mania.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Narcissistic personality disorder",
      "Borderline personality disorder",
      "Antisocial personality disorder",
      "Conduct disorder",
      "Intermittent explosive disorder"
    ],
    answer: 2,
    exp: "A pervasive disregard for and violation of the rights of others since age 15, with deceitfulness, impulsivity, aggression, irresponsibility, and lack of remorse in a patient at least 18 years old with a history of childhood conduct disorder, defines antisocial personality disorder. Management is challenging; psychotherapy is used and comorbid substance use is addressed.",
    why: [
      "Narcissistic personality disorder features grandiosity and a need for admiration, but not the pervasive criminality, deceit, and violation of others' rights seen here.",
      "Borderline personality disorder centers on unstable relationships, affective lability, and self-harm with fear of abandonment, not remorseless exploitation and criminality.",
      "Correct: chronic violation of others' rights with deceit, aggression, and lack of remorse since age 15 in an adult defines antisocial personality disorder.",
      "Conduct disorder is the childhood/adolescent precursor and is diagnosed only before age 18, whereas this patient is 27.",
      "Intermittent explosive disorder involves discrete impulsive aggressive outbursts without the broader pattern of deceit, criminality, and lack of remorse."
    ]
  },
  {
    id: "s2ck-0299",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Preconception folic acid supplementation",
    difficulty: "easy",
    anchor: null,
    vignette: "A 27-year-old woman with no chronic medical problems tells her physician she plans to try to conceive in the next few months. She takes no medications and has no personal or family history of a prior pregnancy affected by a neural tube defect. She asks what she can do now to give her future baby the best start and to lower the risk of birth defects.",
    lead: "Which of the following is the most appropriate recommendation?",
    options: [
      "Begin folic acid only after a positive pregnancy test",
      "Take vitamin A supplements to prevent birth defects",
      "No supplementation is needed before pregnancy",
      "Start folic acid 400 micrograms daily now, before conception",
      "Take high-dose folic acid 4 milligrams daily as all women should"
    ],
    answer: 3,
    exp: "All women capable of becoming pregnant should take 400-800 micrograms of folic acid daily, ideally beginning at least one month before conception, to reduce the risk of neural tube defects. Because the neural tube closes early (by about 4 weeks), supplementation must start before pregnancy is recognized.",
    why: [
      "Starting folic acid only after a positive test is often too late, because the neural tube closes before many women know they are pregnant.",
      "Vitamin A in excess is teratogenic and is not used to prevent birth defects.",
      "Preconception folic acid is a proven, low-risk intervention, so 'no supplementation' is incorrect.",
      "Correct: women planning pregnancy should start 400 micrograms of folic acid daily before conception to prevent neural tube defects.",
      "The high 4-milligram dose is reserved for women with a prior neural-tube-defect-affected pregnancy or other high-risk conditions, not routine low-risk patients."
    ]
  },
  {
    id: "s2ck-0300",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Elements of informed consent",
    difficulty: "moderate",
    anchor: null,
    vignette: "A resident is asked to obtain informed consent from a 60-year-old man with decision-making capacity who is scheduled for an elective inguinal hernia repair. The patient is alert, speaks fluent English, and has no cognitive impairment. He is calm and asks several thoughtful questions about the operation. The resident wants to ensure the consent process is ethically and legally valid.",
    lead: "Which of the following best reflects a valid informed consent process?",
    options: [
      "Having the patient sign the consent form is by itself sufficient",
      "Only the risks the physician personally considers important need to be disclosed",
      "Obtaining consent after sedation just before surgery is preferable",
      "A family member may consent on behalf of this competent adult",
      "Disclose the diagnosis, procedure, risks, benefits, and alternatives, then confirm the patient's understanding and voluntary choice"
    ],
    answer: 4,
    exp: "Valid informed consent requires that a patient with decision-making capacity be given the diagnosis, the nature and purpose of the proposed procedure, its material risks and benefits, and reasonable alternatives (including no treatment), and then make a voluntary decision demonstrating understanding. A signed form documents but does not substitute for this process.",
    why: [
      "A signature documents consent but does not replace the disclosure-and-understanding discussion that makes consent valid.",
      "Material risks that a reasonable patient would want to know must be disclosed, not only those the physician deems important.",
      "Consent obtained after sedation is not valid because sedation can impair the capacity to understand and decide.",
      "A competent adult must consent for himself; surrogate consent applies only when the patient lacks capacity.",
      "Correct: valid informed consent requires disclosing the diagnosis, procedure, risks, benefits, and alternatives and confirming the patient's understanding and voluntary choice."
    ]
  }
];
