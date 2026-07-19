/*
 * Rounds Codex - USMLE Step 1 question bank, Batch 10 (25 items)
 * Blueprint-weighted mix. All vignettes original; source used for facts only.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP1_B10 = [
  {
    id: "s1-0226",
    system: "Cardiovascular",
    discipline: "Pathology",
    topic: "Aortic dissection",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 61-year-old man with a long history of poorly controlled hypertension develops abrupt, severe, tearing chest pain that radiates through to his back. He is diaphoretic and anxious. Blood pressure is 178/104 mm Hg in the right arm but 138/82 mm Hg in the left arm, and a soft early diastolic murmur is heard at the left sternal border.\n\n**[IMAGE: contrast CT of the chest showing a widened mediastinum and an intimal flap dividing the ascending aorta into two lumens]**",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Aortic dissection",
      "Acute ST-elevation myocardial infarction",
      "Massive pulmonary embolism",
      "Esophageal rupture (Boerhaave syndrome)",
      "Acute pericarditis"
    ],
    answer: 0,
    exp: "Abrupt tearing chest pain radiating to the back, a blood-pressure differential between the arms, and a new murmur of aortic regurgitation in a hypertensive patient point to aortic dissection. Longstanding hypertension causes cystic medial degeneration, allowing an intimal tear through which blood creates a false lumen. CT showing an intimal flap and false lumen confirms the diagnosis.",
    why: [
      "Correct: tearing pain to the back, an inter-arm pressure difference, aortic regurgitation, and an intimal flap on CT are classic for aortic dissection.",
      "Myocardial infarction causes pressure-like pain but not a blood-pressure differential between arms or an intimal flap on CT.",
      "Pulmonary embolism causes pleuritic pain and hypoxemia, not a widened mediastinum with an aortic intimal flap.",
      "Boerhaave syndrome follows forceful vomiting and produces mediastinitis and subcutaneous emphysema, not an aortic flap.",
      "Acute pericarditis produces positional, pleuritic pain with a friction rub and diffuse ST elevation, not tearing pain with an intimal flap."
    ]
  },
  {
    id: "s1-0227",
    system: "Cardiovascular",
    discipline: "Pathology",
    topic: "Mitral valve prolapse",
    difficulty: "easy",
    anchor: null,
    vignette: "A 24-year-old woman is evaluated for occasional palpitations and atypical chest discomfort. On auscultation there is a mid-systolic click followed by a late systolic murmur best heard at the apex. When she stands up from squatting, the click and murmur move earlier in systole and become more prominent.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Aortic stenosis",
      "Mitral valve prolapse",
      "Mitral stenosis",
      "Aortic regurgitation",
      "Tricuspid regurgitation"
    ],
    answer: 1,
    exp: "A mid-systolic click followed by a late systolic murmur that moves earlier in systole with maneuvers that decrease ventricular filling (standing, Valsalva) is characteristic of mitral valve prolapse. Myxomatous degeneration of the leaflets allows them to billow into the left atrium during systole. Reduced preload lets the valve prolapse sooner, shifting the click earlier.",
    why: [
      "Aortic stenosis produces a crescendo-decrescendo systolic ejection murmur radiating to the carotids, not a mid-systolic click.",
      "Correct: a mid-systolic click with a late systolic murmur that moves earlier on standing indicates mitral valve prolapse from myxomatous leaflets.",
      "Mitral stenosis causes an opening snap and a diastolic rumble, not a systolic click.",
      "Aortic regurgitation produces an early diastolic decrescendo murmur, not a systolic click and murmur.",
      "Tricuspid regurgitation causes a holosystolic murmur that increases with inspiration, without a mid-systolic click."
    ]
  },
  {
    id: "s1-0228",
    system: "Cardiovascular",
    discipline: "Pathology",
    topic: "Peripheral artery disease",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 68-year-old man with a 40-pack-year smoking history and diabetes reports aching, cramping pain in his left calf that reliably begins after walking two blocks and resolves with a few minutes of rest. His pedal pulses are diminished, and the skin over his lower leg is shiny and hairless.\n\n| Test | Value | Reference |\n|---|---|---|\n| Ankle-brachial index (left) | 0.6 | > 0.9 |\n| Ankle-brachial index (right) | 0.95 | > 0.9 |",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Deep vein thrombosis",
      "Lumbar spinal stenosis",
      "Peripheral artery disease from atherosclerosis",
      "Chronic venous insufficiency",
      "Ruptured popliteal (Baker) cyst"
    ],
    answer: 2,
    exp: "Reproducible calf pain with walking that is relieved by rest (intermittent claudication), diminished pulses, trophic skin changes, and a reduced ankle-brachial index indicate peripheral artery disease. Atherosclerotic narrowing limits blood flow to exercising muscle, producing ischemic pain that resolves once demand falls. An ABI below 0.9 confirms significant arterial obstruction.",
    why: [
      "Deep vein thrombosis causes constant unilateral swelling and tenderness, not exertional pain relieved by rest with a low ABI.",
      "Neurogenic claudication from spinal stenosis is relieved by leaning forward, not by simply stopping, and does not lower the ABI.",
      "Correct: reproducible exertional calf pain relieved by rest with diminished pulses and a low ankle-brachial index is atherosclerotic peripheral artery disease.",
      "Chronic venous insufficiency causes edema, hyperpigmentation, and aching that worsens with standing, not exertional claudication with a low ABI.",
      "A ruptured Baker cyst causes acute calf swelling and pain mimicking DVT, not reproducible exertional claudication."
    ]
  },
  {
    id: "s1-0229",
    system: "Cardiovascular",
    discipline: "Pathophysiology",
    topic: "Vasospastic (Prinzmetal variant) angina",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 42-year-old woman who smokes reports several episodes of chest pain occurring at rest, typically in the early morning hours, each lasting a few minutes and resolving spontaneously. During one episode in the emergency department her ECG is captured. Subsequent coronary angiography shows no fixed obstructive lesions, and troponin is normal.\n\n**[ECG: transient ST-segment elevation in the inferior leads that fully normalizes as the pain resolves]**",
    lead: "Which mechanism best explains her presentation?",
    options: [
      "Fixed atherosclerotic coronary stenosis",
      "Coronary embolism from a left atrial thrombus",
      "Aortic dissection extending into a coronary ostium",
      "Transient coronary artery vasospasm",
      "Viral myocarditis"
    ],
    answer: 3,
    exp: "Rest angina occurring in the early morning with transient ST-segment elevation that resolves, in a patient with normal coronary arteries, is Prinzmetal (variant) angina caused by transient coronary vasospasm. Focal smooth-muscle hyperreactivity abruptly reduces coronary flow, producing transmural ischemia and ST elevation without infarction. Smoking is a common trigger; calcium channel blockers are the treatment.",
    why: [
      "A fixed atherosclerotic stenosis typically causes exertional angina with ST depression, not rest pain with transient ST elevation and normal arteries.",
      "Coronary embolism would cause sustained infarction with elevated troponin, not transient self-resolving ST changes.",
      "Aortic dissection produces tearing pain and a pressure differential, not brief self-limited episodes with normal angiography.",
      "Correct: transient rest angina with reversible ST elevation and angiographically normal coronaries indicates coronary vasospasm (variant angina).",
      "Myocarditis causes a more sustained illness with elevated troponin and diffuse ECG changes, not brief vasospastic episodes."
    ]
  },
  {
    id: "s1-0230",
    system: "Cardiovascular",
    discipline: "Pathophysiology",
    topic: "Constrictive pericarditis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 57-year-old man who had tuberculosis years earlier develops progressive fatigue, abdominal swelling, and leg edema. His jugular venous pressure is markedly elevated and rises further with inspiration. On auscultation an early diastolic sound is heard after S2, and he has ascites and hepatomegaly. Lungs are clear.\n\n**[IMAGE: lateral chest CT showing a thickened, calcified pericardium encasing the heart]**",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Restrictive cardiomyopathy from amyloidosis",
      "Cardiac tamponade",
      "Right heart failure from cor pulmonale",
      "Tricuspid valve stenosis",
      "Constrictive pericarditis"
    ],
    answer: 4,
    exp: "Elevated JVP that rises with inspiration (Kussmaul sign), a pericardial knock, prominent right-sided congestion with clear lungs, and a calcified pericardium after tuberculosis indicate constrictive pericarditis. A rigid, scarred pericardium prevents normal diastolic filling, so ventricular volume is fixed and venous pressures rise. The knock reflects abrupt cessation of filling against the stiff pericardium.",
    why: [
      "Amyloid restrictive cardiomyopathy can mimic constriction but shows thickened myocardium, not a calcified pericardium on imaging.",
      "Tamponade causes pulsus paradoxus with a small quiet heart and an absent y descent, not a calcified pericardium and knock.",
      "Cor pulmonale arises from chronic lung disease and pulmonary hypertension, not from a scarred calcified pericardium with clear lungs.",
      "Tricuspid stenosis produces a diastolic murmur and giant a waves, not a pericardial knock with pericardial calcification.",
      "Correct: Kussmaul sign, a pericardial knock, right-sided congestion, and a calcified pericardium after TB indicate constrictive pericarditis."
    ]
  },
  {
    id: "s1-0231",
    system: "Cardiovascular",
    discipline: "Pathology",
    topic: "Left atrial myxoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 48-year-old woman reports several months of fatigue, low-grade fevers, and weight loss, along with episodes of breathlessness that are worse when she lies in certain positions. She has had one transient episode of right arm weakness. On auscultation a low-pitched early diastolic sound is heard that varies with body position.\n\n**[IMAGE: transthoracic echocardiogram showing a mobile, pedunculated mass attached by a stalk to the interatrial septum near the fossa ovalis, prolapsing across the mitral valve in diastole]**",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Left atrial myxoma",
      "Left atrial appendage thrombus",
      "Infective endocarditis vegetation",
      "Papillary fibroelastoma of the aortic valve",
      "Metastatic carcinoma to the heart"
    ],
    answer: 0,
    exp: "Constitutional symptoms, positional dyspnea, embolic events, and a pedunculated mass attached to the fossa ovalis that prolapses across the mitral valve describe a left atrial myxoma, the most common primary cardiac tumor in adults. The gelatinous mass intermittently obstructs the mitral orifice (causing a 'tumor plop' and positional symptoms) and sheds emboli. IL-6 release explains the fever and weight loss.",
    why: [
      "Correct: a pedunculated mass on the interatrial septum causing positional obstruction, emboli, and constitutional symptoms is a left atrial myxoma.",
      "Atrial thrombus usually forms in the appendage in the setting of atrial fibrillation and is not a pedunculated septal mass with a stalk.",
      "Endocarditis vegetations attach to valve leaflets and cause a regurgitant murmur, not a stalked septal mass.",
      "Papillary fibroelastoma is small and attaches to valve surfaces, not by a stalk to the fossa ovalis.",
      "Cardiac metastases typically involve the pericardium or myocardium diffusely, not as a single pedunculated atrial mass."
    ]
  },
  {
    id: "s1-0232",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Chronic bronchitis (Reid index)",
    difficulty: "easy",
    anchor: null,
    vignette: "A 60-year-old man with a heavy smoking history reports a productive cough with sputum on most days for the past several years, present for more than three months in each of two consecutive years. He is overweight and mildly cyanotic, and has peripheral edema. Histology of his bronchi shows enlargement of the mucous glands relative to the bronchial wall thickness.",
    lead: "Which finding best defines his condition?",
    options: [
      "Permanent destruction of alveolar walls distal to terminal bronchioles",
      "Chronic productive cough for at least 3 months in 2 consecutive years with bronchial mucous gland hyperplasia (increased Reid index)",
      "Reversible bronchospasm with eosinophilic airway inflammation",
      "Permanent bronchial dilation with pooling of purulent secretions",
      "Diffuse alveolar damage with hyaline membrane formation"
    ],
    answer: 1,
    exp: "Chronic bronchitis is defined clinically as a productive cough on most days for at least 3 months in 2 consecutive years. The pathologic hallmark is hyperplasia of bronchial submucosal mucous glands, quantified by an increased Reid index (gland-to-wall-thickness ratio). Chronic mucus hypersecretion and hypoxemia produce the classic cyanotic, edematous 'blue bloater.'",
    why: [
      "Alveolar wall destruction defines emphysema, which produces a 'pink puffer' with hyperinflation rather than mucous gland hyperplasia.",
      "Correct: chronic bronchitis is a productive cough for 3 months over 2 years with mucous gland hyperplasia and an increased Reid index.",
      "Reversible bronchospasm with eosinophilic inflammation describes asthma, not the fixed mucus hypersecretion of chronic bronchitis.",
      "Permanent bronchial dilation with pooled secretions describes bronchiectasis, a distinct entity.",
      "Diffuse alveolar damage with hyaline membranes describes acute respiratory distress syndrome, not chronic bronchitis."
    ]
  },
  {
    id: "s1-0233",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathophysiology",
    topic: "Idiopathic pulmonary arterial hypertension",
    difficulty: "hard",
    anchor: null,
    vignette: "A 32-year-old woman reports two years of gradually worsening exertional dyspnea and fatigue, and recently near-syncope on exertion. Examination reveals a loud pulmonic component of the second heart sound, a right ventricular heave, and mild lower-extremity edema. Chest imaging shows enlarged central pulmonary arteries with clear lung fields, and left ventricular function is normal. A BMPR2 mutation is identified.",
    lead: "Which best explains the underlying pathophysiology?",
    options: [
      "Left ventricular systolic failure raising pulmonary venous pressure",
      "Chronic hypoxemia from diffuse parenchymal lung disease",
      "Pulmonary arterial remodeling with medial hypertrophy and plexiform lesions",
      "Recurrent thromboembolic obstruction of pulmonary arteries",
      "Left-to-right shunt through an atrial septal defect"
    ],
    answer: 2,
    exp: "A young woman with progressive dyspnea, a loud P2, RV heave, clear lungs, normal LV function, and a BMPR2 mutation has idiopathic pulmonary arterial hypertension. Loss of BMPR2 signaling promotes proliferation of pulmonary arterial smooth muscle and endothelium, causing medial hypertrophy, intimal fibrosis, and plexiform lesions that raise pulmonary vascular resistance and strain the right ventricle.",
    why: [
      "Left heart failure would show pulmonary venous congestion and reduced LV function, which are absent here.",
      "Parenchymal lung disease causes hypoxemia with abnormal lung fields, not clear lungs with a BMPR2 mutation.",
      "Correct: idiopathic PAH from BMPR2 loss causes pulmonary arterial remodeling with medial hypertrophy and plexiform lesions raising vascular resistance.",
      "Chronic thromboembolic disease produces perfusion defects on imaging, not the primary vascular remodeling of idiopathic PAH.",
      "An atrial septal defect causes a left-to-right shunt with a fixed split S2, not the isolated arteriopathy described."
    ]
  },
  {
    id: "s1-0234",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathophysiology",
    topic: "Pleural effusion (Light's criteria)",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 66-year-old man with fever, cough, and pleuritic chest pain has a moderate right pleural effusion. A diagnostic thoracentesis is performed and simultaneous serum studies are obtained.\n\n| Measurement | Value |\n|---|---|\n| Pleural fluid protein / serum protein | 0.6 |\n| Pleural fluid LDH / serum LDH | 0.7 |\n| Pleural fluid LDH | 250 U/L (> 2/3 upper limit of normal serum LDH) |",
    lead: "How is this effusion best classified?",
    options: [
      "Transudate due to heart failure",
      "Transudate due to cirrhosis",
      "Transudate due to nephrotic syndrome",
      "Exudate meeting Light's criteria",
      "Chylothorax"
    ],
    answer: 3,
    exp: "Light's criteria classify an effusion as an exudate if any one is met: pleural/serum protein ratio > 0.5, pleural/serum LDH ratio > 0.6, or pleural LDH > 2/3 the upper limit of normal serum LDH. This fluid meets all three, making it an exudate. Exudates arise from increased capillary permeability or impaired lymphatic drainage, as in infection (parapneumonic effusion), malignancy, or pulmonary embolism.",
    why: [
      "Heart failure produces a transudate with low protein and LDH ratios, not the elevated ratios shown here.",
      "Cirrhosis causes a transudative hepatic hydrothorax, which would not meet Light's exudative criteria.",
      "Nephrotic syndrome causes transudative effusions from hypoalbuminemia, not an exudate.",
      "Correct: protein and LDH ratios above the Light's thresholds classify this as an exudate, consistent with a parapneumonic effusion.",
      "Chylothorax is defined by high triglyceride content from thoracic duct injury, not by these protein and LDH ratios alone."
    ]
  },
  {
    id: "s1-0235",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Diabetic nephropathy (Kimmelstiel-Wilson)",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 58-year-old man with a 15-year history of type 2 diabetes has slowly worsening kidney function and increasing protein in his urine, along with worsening hypertension. His retinal exam shows diabetic changes. A renal biopsy is performed.\n\n| Test | Value | Reference |\n|---|---|---|\n| Urine albumin-to-creatinine ratio | 900 mg/g | < 30 |\n| Serum creatinine | 1.9 mg/dL | 0.7-1.3 |",
    lead: "Which histologic finding is most likely on biopsy?",
    options: [
      "Crescents filling Bowman space",
      "Subepithelial 'spike and dome' deposits",
      "Foot-process effacement with otherwise normal glomeruli",
      "Wire-loop capillary lesions with immune deposits",
      "Nodular mesangial expansion (Kimmelstiel-Wilson nodules) with thickened basement membranes"
    ],
    answer: 4,
    exp: "Long-standing diabetes with progressive albuminuria, hypertension, and retinopathy indicates diabetic nephropathy. Chronic hyperglycemia causes nonenzymatic glycation and mesangial matrix expansion, producing basement-membrane thickening and characteristic nodular glomerulosclerosis (Kimmelstiel-Wilson nodules). Hyperfiltration and glomerular hypertension drive progressive proteinuria and decline in GFR.",
    why: [
      "Crescents indicate rapidly progressive glomerulonephritis, not the indolent course of diabetic nephropathy.",
      "Subepithelial 'spike and dome' deposits characterize membranous nephropathy, not diabetic glomerulosclerosis.",
      "Isolated foot-process effacement defines minimal change disease, which causes abrupt nephrotic syndrome in children.",
      "Wire-loop lesions are seen in lupus nephritis, not in diabetes.",
      "Correct: diabetic nephropathy shows nodular mesangial sclerosis (Kimmelstiel-Wilson nodules) with thickened glomerular basement membranes."
    ]
  },
  {
    id: "s1-0236",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Renovascular hypertension (fibromuscular dysplasia)",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 34-year-old woman is found to have blood pressure of 168/104 mm Hg that remains elevated despite three antihypertensive agents. She has no other risk factors. On abdominal examination a bruit is heard in the flank. Renal function worsened after she was started on an ACE inhibitor.\n\n**[IMAGE: renal arteriography showing alternating stenoses and dilations producing a 'string of beads' appearance in the mid-to-distal renal artery]**",
    lead: "Which is the most likely underlying cause of her hypertension?",
    options: [
      "Fibromuscular dysplasia of the renal artery",
      "Atherosclerotic renal artery stenosis",
      "Primary hyperaldosteronism",
      "Pheochromocytoma",
      "Coarctation of the aorta"
    ],
    answer: 0,
    exp: "A young woman with resistant hypertension, a flank bruit, worsened renal function after an ACE inhibitor, and a 'string of beads' pattern on angiography has renovascular hypertension from fibromuscular dysplasia. The noninflammatory arterial wall thickening narrows the renal artery, reducing perfusion and activating the renin-angiotensin system. ACE inhibition removes angiotensin II support of the efferent arteriole, dropping GFR in the affected kidney.",
    why: [
      "Correct: a young woman with a 'string of beads' renal artery and renin-driven resistant hypertension has fibromuscular dysplasia.",
      "Atherosclerotic renal artery stenosis occurs in older patients with vascular risk factors and involves the ostium, not this beaded mid-artery pattern.",
      "Primary hyperaldosteronism causes hypertension with hypokalemia and suppressed renin, not a beaded renal artery.",
      "Pheochromocytoma causes episodic hypertension with catecholamine symptoms, not fixed renal artery stenosis.",
      "Coarctation causes upper-extremity hypertension with reduced femoral pulses, not a renal artery abnormality."
    ]
  },
  {
    id: "s1-0237",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Alport syndrome",
    difficulty: "hard",
    anchor: null,
    vignette: "A 9-year-old boy is evaluated for persistent microscopic hematuria noted on several urinalyses. He has bilateral high-frequency sensorineural hearing loss and an ophthalmologist notes anterior lenticonus. Several maternal male relatives developed kidney failure in early adulthood. Electron microscopy of a renal biopsy shows irregular thickening and thinning of the glomerular basement membrane with splitting of the lamina densa.",
    lead: "Which protein is most likely defective?",
    options: [
      "Podocin",
      "Type IV collagen (alpha-3/4/5 chains)",
      "Fibrillin-1",
      "Type I collagen",
      "Type III collagen"
    ],
    answer: 1,
    exp: "Hereditary hematuria with sensorineural deafness and ocular abnormalities (anterior lenticonus), plus a 'basket-weave' split basement membrane on EM, is Alport syndrome. The X-linked form results from mutations in COL4A5 encoding the alpha-5 chain of type IV collagen. Defective type IV collagen weakens basement membranes in the glomerulus, cochlea, and lens, explaining the triad.",
    why: [
      "Podocin mutations cause steroid-resistant focal segmental glomerulosclerosis, not the deafness-and-eye triad of Alport.",
      "Correct: Alport syndrome results from defective type IV collagen (alpha-3/4/5 chains), weakening basement membranes in kidney, ear, and eye.",
      "Fibrillin-1 defects cause Marfan syndrome with aortic and skeletal features, not hematuria with deafness.",
      "Type I collagen defects cause osteogenesis imperfecta, not glomerular basement membrane splitting.",
      "Type III collagen defects cause vascular Ehlers-Danlos syndrome, not the Alport triad."
    ]
  },
  {
    id: "s1-0238",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Acute appendicitis",
    difficulty: "easy",
    anchor: null,
    vignette: "An 18-year-old man reports abdominal pain that began around the umbilicus yesterday and has since shifted to the right lower quadrant. He has anorexia, nausea, and a low-grade fever. On examination there is tenderness at a point two-thirds of the way from the umbilicus to the right anterior superior iliac spine, with guarding and rebound tenderness.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Acute cholecystitis",
      "Mesenteric adenitis",
      "Acute appendicitis",
      "Sigmoid diverticulitis",
      "Ureteral colic"
    ],
    answer: 2,
    exp: "Periumbilical pain that migrates to the right lower quadrant, anorexia, and tenderness at McBurney point with peritoneal signs are classic for acute appendicitis. Luminal obstruction (often by a fecalith) raises intraluminal pressure, causing early visceral periumbilical pain; as inflammation reaches the parietal peritoneum, pain localizes to the right lower quadrant. Rebound and guarding signal peritoneal irritation.",
    why: [
      "Cholecystitis causes right upper quadrant pain with a positive Murphy sign, not migratory right lower quadrant pain.",
      "Mesenteric adenitis mimics appendicitis but usually follows a viral illness and is a diagnosis of exclusion.",
      "Correct: periumbilical pain migrating to McBurney point with anorexia and peritoneal signs indicates acute appendicitis.",
      "Diverticulitis typically causes left lower quadrant pain in older adults, not right lower quadrant pain in a teenager.",
      "Ureteral colic causes severe flank pain radiating to the groin with hematuria, not McBurney point tenderness."
    ]
  },
  {
    id: "s1-0239",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Acute cholecystitis",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 44-year-old obese woman presents with constant right upper quadrant pain that began after a fatty meal and has persisted for eight hours, with nausea and a fever of 38.4 C. On examination she abruptly stops inspiration when the examiner palpates beneath the right costal margin.\n\n**[IMAGE: right upper quadrant ultrasound showing gallstones, a thickened gallbladder wall, and pericholecystic fluid]**",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Acute pancreatitis",
      "Peptic ulcer disease",
      "Acute viral hepatitis",
      "Acute cholecystitis",
      "Ascending cholangitis"
    ],
    answer: 3,
    exp: "Persistent right upper quadrant pain after a fatty meal, fever, a positive Murphy sign, and ultrasound showing gallstones with a thickened wall and pericholecystic fluid indicate acute cholecystitis. A stone impacted in the cystic duct obstructs the gallbladder, causing distension, inflammation, and secondary infection. The inspiratory arrest on palpation (Murphy sign) reflects the inflamed gallbladder contacting the examining hand.",
    why: [
      "Pancreatitis causes epigastric pain radiating to the back with elevated lipase, not a positive Murphy sign with gallbladder wall thickening.",
      "Peptic ulcer disease causes epigastric burning related to meals, not RUQ pain with sonographic gallbladder inflammation.",
      "Viral hepatitis causes diffuse tenderness with markedly elevated transaminases, not focal Murphy-positive gallbladder findings.",
      "Correct: RUQ pain, fever, a positive Murphy sign, and sonographic gallbladder inflammation with stones indicate acute cholecystitis.",
      "Ascending cholangitis adds jaundice and marked ductal dilation (Charcot triad), which are not described here."
    ]
  },
  {
    id: "s1-0240",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Acute diverticulitis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 65-year-old man with a low-fiber diet presents with three days of left lower quadrant pain, low-grade fever, and a change in bowel habits. He is tender in the left lower quadrant with mild guarding, and his white blood cell count is elevated.\n\n**[IMAGE: abdominal CT showing multiple sigmoid colonic outpouchings with focal wall thickening and surrounding pericolic fat stranding]**",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Ischemic colitis",
      "Ulcerative colitis flare",
      "Colorectal carcinoma",
      "Irritable bowel syndrome",
      "Acute diverticulitis"
    ],
    answer: 4,
    exp: "Left lower quadrant pain, fever, leukocytosis, and CT showing sigmoid diverticula with pericolic fat stranding indicate acute diverticulitis. Diverticula are herniations of mucosa and submucosa through the muscularis at points of vascular penetration, favored by low-fiber diets and elevated intraluminal pressure. Obstruction and micro-perforation of a diverticulum produce localized inflammation and the pericolic stranding seen on CT.",
    why: [
      "Ischemic colitis causes crampy pain with bloody diarrhea in watershed areas, not localized diverticular inflammation with fat stranding.",
      "An ulcerative colitis flare causes bloody diarrhea with continuous mucosal inflammation from the rectum, not focal pericolic stranding.",
      "Colorectal carcinoma causes an obstructing mass and iron-deficiency anemia, not acute pericolic inflammation around diverticula.",
      "Irritable bowel syndrome causes pain without fever, leukocytosis, or CT inflammatory changes.",
      "Correct: LLQ pain with fever, leukocytosis, and CT sigmoid diverticula with pericolic fat stranding is acute diverticulitis."
    ]
  },
  {
    id: "s1-0241",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Gastric adenocarcinoma (diffuse type)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 63-year-old man reports several months of epigastric discomfort, early satiety, and a 9 kg weight loss. Examination reveals a firm, enlarged left supraclavicular lymph node and velvety hyperpigmented plaques in the axillae. Upper endoscopy shows a rigid, thickened, non-distensible stomach wall, and biopsy reveals cells with intracellular mucin displacing the nucleus to the periphery.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Gastric adenocarcinoma, diffuse (signet-ring) type",
      "Gastric MALT lymphoma",
      "Gastrointestinal stromal tumor",
      "Peptic ulcer disease",
      "Menetrier disease"
    ],
    answer: 0,
    exp: "Weight loss, early satiety, a left supraclavicular (Virchow) node, acanthosis nigricans, a rigid 'leather-bottle' stomach (linitis plastica), and signet-ring cells indicate diffuse gastric adenocarcinoma. The malignant cells infiltrate the wall diffusely without forming a discrete mass, accumulating mucin that pushes the nucleus to the periphery. Loss of E-cadherin underlies the discohesive infiltrative growth.",
    why: [
      "Correct: signet-ring cells, linitis plastica, a Virchow node, and acanthosis nigricans indicate diffuse gastric adenocarcinoma.",
      "MALT lymphoma is associated with H. pylori and shows lymphoid infiltrates, not signet-ring cells with linitis plastica.",
      "A GIST is a submucosal mesenchymal tumor expressing c-KIT, not a diffusely infiltrating signet-ring carcinoma.",
      "Peptic ulcer disease causes a discrete mucosal defect, not diffuse mural thickening with signet-ring cells.",
      "Menetrier disease causes giant hypertrophic gastric folds with protein loss, not a rigid wall with malignant signet cells."
    ]
  },
  {
    id: "s1-0242",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Primary sclerosing cholangitis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 38-year-old man with a several-year history of ulcerative colitis reports increasing fatigue and itching. Laboratory studies show a disproportionately elevated alkaline phosphatase with only mild transaminase elevation. Perinuclear antineutrophil cytoplasmic antibodies are positive.\n\n**[IMAGE: magnetic resonance cholangiopancreatography showing multifocal strictures and dilations of intrahepatic and extrahepatic bile ducts producing a 'beaded' appearance]**",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Primary biliary cholangitis",
      "Primary sclerosing cholangitis",
      "Choledocholithiasis",
      "Autoimmune hepatitis",
      "Cholangiocarcinoma"
    ],
    answer: 1,
    exp: "A cholestatic picture (high alkaline phosphatase, pruritus) in a man with ulcerative colitis, p-ANCA positivity, and multifocal biliary strictures with beading is primary sclerosing cholangitis. Progressive concentric periductal 'onion-skin' fibrosis obliterates intra- and extrahepatic ducts, producing the alternating strictures and dilations. Patients carry an increased risk of cholangiocarcinoma.",
    why: [
      "Primary biliary cholangitis affects middle-aged women with antimitochondrial antibodies and small intrahepatic ducts, not large-duct beading with UC.",
      "Correct: cholestasis with p-ANCA, ulcerative colitis, and a beaded biliary tree indicates primary sclerosing cholangitis.",
      "Choledocholithiasis causes a discrete obstructing stone, not diffuse multifocal strictures of the whole biliary tree.",
      "Autoimmune hepatitis causes a hepatocellular pattern with high transaminases and anti-smooth-muscle antibodies, not biliary beading.",
      "Cholangiocarcinoma may complicate PSC but presents as a dominant obstructing mass rather than diffuse beading."
    ]
  },
  {
    id: "s1-0243",
    system: "Gastrointestinal",
    discipline: "Microbiology",
    topic: "Whipple disease",
    difficulty: "hard",
    anchor: null,
    vignette: "A 52-year-old man reports a year of chronic diarrhea, weight loss, and migratory joint pains, and more recently develops low-grade fever and mild cognitive changes with abnormal eye movements. Small-bowel biopsy shows the lamina propria distended by foamy macrophages that stain strongly with periodic acid-Schiff, and electron microscopy reveals rod-shaped bacilli within the macrophages.",
    lead: "Which organism is most likely responsible?",
    options: [
      "Giardia lamblia",
      "Mycobacterium avium complex",
      "Tropheryma whipplei",
      "Cryptosporidium parvum",
      "Clostridioides difficile"
    ],
    answer: 2,
    exp: "Chronic diarrhea and malabsorption with migratory arthralgias, cardiac and neurologic involvement, and PAS-positive foamy macrophages in the lamina propria describe Whipple disease. It is caused by the gram-positive actinomycete Tropheryma whipplei, which accumulates within intestinal macrophages and impairs lymphatic transport, producing malabsorption. It classically affects middle-aged white men and responds to prolonged antibiotics.",
    why: [
      "Giardia causes fatty diarrhea with trophozoites on stool exam, not PAS-positive macrophages with systemic arthralgias.",
      "M. avium complex infects immunocompromised hosts and gives PAS-positive, acid-fast macrophages, unlike the non-acid-fast bacilli of Whipple disease.",
      "Correct: Whipple disease is caused by Tropheryma whipplei, seen as PAS-positive foamy macrophages in the lamina propria.",
      "Cryptosporidium causes watery diarrhea in immunocompromised patients, identified by acid-fast oocysts, not intramacrophage bacilli.",
      "C. difficile causes antibiotic-associated pseudomembranous colitis, not chronic malabsorption with PAS-positive macrophages."
    ]
  },
  {
    id: "s1-0244",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Receiver operating characteristic (ROC) curve",
    difficulty: "moderate",
    anchor: "image",
    vignette: "Investigators evaluate a new continuous blood biomarker for a disease and plot its performance across all possible diagnostic cutoffs.\n\n**[IMAGE: a receiver operating characteristic (ROC) curve plotting true-positive rate (sensitivity) on the y-axis against false-positive rate (1 minus specificity) on the x-axis, bowing toward the upper-left corner]**",
    lead: "The cutoff point lying closest to the upper-left corner of the ROC curve best represents which of the following?",
    options: [
      "The cutoff that maximizes the disease prevalence in the sample",
      "The cutoff with the highest positive predictive value regardless of disease frequency",
      "The cutoff that maximizes specificity while ignoring sensitivity",
      "The cutoff that best balances high sensitivity and high specificity",
      "The threshold at which sensitivity equals the disease prevalence"
    ],
    answer: 3,
    exp: "An ROC curve plots sensitivity against 1 minus specificity across all cutoffs. Points nearer the upper-left corner have both high true-positive and low false-positive rates, so the cutoff closest to that corner offers the best simultaneous balance of sensitivity and specificity. The overall area under the curve summarizes discriminatory ability independent of any single threshold.",
    why: [
      "Prevalence is a property of the population, not something a diagnostic cutoff maximizes on an ROC curve.",
      "Predictive values depend on prevalence and are not what the ROC curve's upper-left point identifies, which is based on sensitivity and specificity.",
      "Maximizing specificity alone would push the point toward the lower-left, sacrificing sensitivity rather than balancing both.",
      "Correct: the point nearest the upper-left corner maximizes sensitivity and specificity simultaneously, the best overall balance.",
      "There is no meaningful threshold where sensitivity equals prevalence; the two are unrelated measures."
    ]
  },
  {
    id: "s1-0245",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Reliability versus validity",
    difficulty: "moderate",
    anchor: null,
    vignette: "A hospital tests a new automated cuff by comparing it with a simultaneous intra-arterial catheter measurement, considered the true value. Across many patients the new cuff's readings cluster very tightly together on repeat measurement, but they are consistently about 15 mm Hg higher than the intra-arterial value.",
    lead: "Which best describes this device's measurement properties?",
    options: [
      "High validity but low reliability",
      "Low reliability and low validity",
      "High validity and high reliability",
      "The main problem is random error affecting precision",
      "High reliability but low validity due to systematic error"
    ],
    answer: 4,
    exp: "Reliability (precision) refers to how reproducible repeated measurements are, while validity (accuracy) refers to how close measurements are to the true value. Tightly clustered readings indicate high reliability, but a consistent 15 mm Hg offset from the true arterial value indicates poor validity due to systematic error (bias). Consistent directional error reduces accuracy without harming precision.",
    why: [
      "This reverses the finding; the consistent offset means validity is low, not high, while reliability is high.",
      "Reliability is actually high because readings are tightly clustered, so 'low reliability' is incorrect.",
      "Validity is not high, because the readings are systematically off by 15 mm Hg from the true value.",
      "A consistent directional offset is systematic error, not random error, so precision is preserved.",
      "Correct: tightly clustered readings show high reliability, but a fixed 15 mm Hg offset is systematic error, giving low validity."
    ]
  },
  {
    id: "s1-0246",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Mandatory reporting of communicable disease",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 40-year-old man is newly diagnosed with active pulmonary tuberculosis confirmed by sputum testing. He is distressed and asks the physician to keep the diagnosis completely private and not to inform anyone, including public health authorities, because he fears stigma at work.",
    lead: "Which is the most appropriate action?",
    options: [
      "Report the case to the public health department as legally required and counsel the patient about the reasons",
      "Honor the patient's request for confidentiality and decline to report the case",
      "Report the case only if the patient later refuses treatment",
      "Personally notify the patient's contacts without involving public health authorities",
      "Require a court order before making any report"
    ],
    answer: 0,
    exp: "Active tuberculosis is a reportable communicable disease. Public health reporting laws create a recognized exception to patient confidentiality because the risk of transmission to others justifies protecting community health. The physician must notify the public health department, which handles contact tracing, while continuing to support the patient and explaining why reporting is required.",
    why: [
      "Correct: active tuberculosis is legally reportable, so the physician must notify public health while counseling the patient.",
      "Confidentiality yields to mandatory reporting for communicable diseases that threaten public health, so declining to report is inappropriate.",
      "Reporting is required at diagnosis regardless of treatment adherence, not contingent on refusal of therapy.",
      "Contact tracing is the role of the public health department, not something the physician should undertake independently.",
      "No court order is needed; statutory public health reporting requirements authorize the disclosure directly."
    ]
  },
  {
    id: "s1-0247",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Ectopic pregnancy",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 27-year-old woman with a prior episode of pelvic inflammatory disease presents with 7 weeks of amenorrhea, right lower quadrant pain, and vaginal spotting. Her urine pregnancy test is positive and serum beta-hCG is 2,800 mIU/mL.\n\n**[IMAGE: transvaginal ultrasound showing an empty uterine cavity with a complex mass containing a gestational sac in the right adnexa]**",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Threatened intrauterine abortion",
      "Ectopic (tubal) pregnancy",
      "Ruptured ovarian cyst",
      "Acute appendicitis",
      "Complete hydatidiform mole"
    ],
    answer: 1,
    exp: "A positive pregnancy test with a beta-hCG above the discriminatory zone, an empty uterus, and an adnexal gestational sac indicates an ectopic pregnancy. Prior pelvic inflammatory disease scars the fallopian tube, impeding transport of the fertilized ovum so it implants in the tube. As the tubal pregnancy grows it causes pain and bleeding and risks life-threatening rupture.",
    why: [
      "A threatened abortion would show an intrauterine gestation with a closed cervix, not an empty uterus with an adnexal sac.",
      "Correct: an empty uterus with an adnexal gestational sac and a positive beta-hCG after prior PID indicates a tubal ectopic pregnancy.",
      "A ruptured ovarian cyst causes acute pain but would not produce an adnexal gestational sac with a positive pregnancy test.",
      "Appendicitis does not cause a positive beta-hCG or an adnexal gestational sac.",
      "A complete mole shows a 'snowstorm' intrauterine pattern with a markedly elevated beta-hCG, not an adnexal sac with an empty uterus."
    ]
  },
  {
    id: "s1-0248",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Pathology",
    topic: "Chronic lymphocytic leukemia",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 70-year-old man is found on routine testing to have a markedly elevated lymphocyte count. He feels well but has painless, rubbery enlargement of cervical and axillary lymph nodes. A peripheral smear shows numerous mature-appearing small lymphocytes and many disrupted 'smudge' cells.\n\n| Test | Value | Reference |\n|---|---|---|\n| White blood cells | 48,000/uL | 4,500-11,000 |\n| Lymphocytes | 85% | 20-40 |\n| Hemoglobin | 13.8 g/dL | 13.5-17.5 |",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Acute lymphoblastic leukemia",
      "Chronic myeloid leukemia",
      "Chronic lymphocytic leukemia",
      "Hairy cell leukemia",
      "Reactive viral lymphocytosis"
    ],
    answer: 2,
    exp: "An older adult with marked mature lymphocytosis, painless lymphadenopathy, and smudge cells on smear has chronic lymphocytic leukemia. It is a clonal proliferation of functionally incompetent mature B cells that co-express CD5 with CD19/CD20. The fragile leukemic cells rupture during smear preparation, producing the characteristic smudge cells.",
    why: [
      "Acute lymphoblastic leukemia occurs mainly in children and shows immature blasts with rapid onset, not mature lymphocytes and smudge cells.",
      "Chronic myeloid leukemia produces a granulocytic proliferation with a left shift and the BCR-ABL fusion, not a mature lymphocytosis.",
      "Correct: an elderly patient with mature lymphocytosis, painless adenopathy, and smudge cells has chronic lymphocytic leukemia.",
      "Hairy cell leukemia causes pancytopenia with splenomegaly and cells with cytoplasmic projections, not marked lymphocytosis with smudge cells.",
      "Reactive lymphocytosis is usually transient and modest with atypical lymphocytes, not a persistent clonal count of 48,000 with smudge cells."
    ]
  },
  {
    id: "s1-0249",
    system: "Behavioral Health & Nervous System",
    discipline: "Neurology",
    topic: "Cluster headache",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 35-year-old man reports recurrent attacks of excruciating, strictly unilateral pain centered behind his right eye, each lasting about an hour. During attacks his right eye waters and becomes red, his right nostril runs, and the right eyelid droops. The attacks strike several times a day for a few weeks, often waking him at the same hour each night, and he paces restlessly because he cannot sit still.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Migraine without aura",
      "Tension-type headache",
      "Trigeminal neuralgia",
      "Cluster headache",
      "Giant cell (temporal) arteritis"
    ],
    answer: 3,
    exp: "Severe, strictly unilateral periorbital pain lasting under three hours, with ipsilateral autonomic features (lacrimation, conjunctival injection, rhinorrhea, ptosis) and restless agitation occurring in clustered bouts, defines cluster headache. Attacks show a striking circadian pattern, often awakening the patient at night. Activation of the trigeminal-autonomic reflex produces the pain and cranial autonomic signs.",
    why: [
      "Migraine causes throbbing pain lasting hours to days with photophobia and a preference to lie still, not brief attacks with prominent autonomic signs.",
      "Tension-type headache is a bilateral band-like pressure without autonomic features or agitation.",
      "Trigeminal neuralgia causes brief electric-shock facial pains triggered by touch, not hour-long attacks with lacrimation and ptosis.",
      "Correct: brief unilateral periorbital pain with ipsilateral autonomic features, restlessness, and clustered circadian attacks is cluster headache.",
      "Giant cell arteritis causes temporal pain with jaw claudication and visual loss in older patients, not clustered autonomic attacks."
    ]
  },
  {
    id: "s1-0250",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Calcium pyrophosphate deposition (pseudogout)",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 74-year-old woman develops acute pain, warmth, and swelling of the right knee over a day. She is afebrile. A radiograph of the knee shows linear calcification within the joint cartilage. Arthrocentesis yields cloudy fluid, and polarized microscopy is performed.\n\n| Finding | Result |\n|---|---|\n| Crystal shape | Rhomboid |\n| Birefringence under polarized light | Positive (blue when parallel to the compensator) |\n| Synovial fluid WBC | 20,000/uL |",
    lead: "These crystals are composed of which substance?",
    options: [
      "Monosodium urate",
      "Calcium oxalate",
      "Cholesterol",
      "Hydroxyapatite",
      "Calcium pyrophosphate dihydrate"
    ],
    answer: 4,
    exp: "Acute monoarthritis with cartilage calcification (chondrocalcinosis) and rhomboid, positively birefringent crystals indicates calcium pyrophosphate deposition disease (pseudogout). CPPD crystals deposit in cartilage and, when shed into the joint, trigger an acute inflammatory arthritis. Under polarized light they appear blue when aligned parallel to the compensator, distinguishing them from urate crystals.",
    why: [
      "Monosodium urate crystals are needle-shaped and negatively birefringent (yellow when parallel), the crystals of gout rather than pseudogout.",
      "Calcium oxalate crystals cause renal stones and can deposit in dialysis patients but are not the rhomboid positively birefringent joint crystals here.",
      "Cholesterol crystals are flat plates with notched corners seen in chronic effusions, not rhomboid birefringent crystals with chondrocalcinosis.",
      "Hydroxyapatite crystals are not birefringent and require special stains, unlike these positively birefringent rhomboid crystals.",
      "Correct: rhomboid, positively birefringent crystals with chondrocalcinosis are calcium pyrophosphate dihydrate, causing pseudogout."
    ]
  }
];
