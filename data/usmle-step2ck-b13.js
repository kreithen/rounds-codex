/*
 * Rounds Codex - USMLE Step 2 CK question bank, Batch 13 (18 items)
 * Final batch bringing Step 2 CK to its 318-item maximum.
 * Blueprint-weighted, Medicine-heavy clinical mix. All vignettes original;
 * source used for facts only. Step 2 CK items are clinical: each ends in a
 * decision about diagnosis, next best step, pharmacotherapy, or prevention.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP2CK_B13 = [
  {
    id: "s2ck-0301",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Cardiac amyloidosis",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 74-year-old man has 8 months of progressive exertional dyspnea and leg swelling. He was treated for bilateral carpal tunnel syndrome several years ago and has intermittent lightheadedness. Blood pressure is 104/70 mm Hg and he is sensitive to small doses of diuretics. Echocardiography shows markedly thickened left ventricular walls with a granular sparkling myocardial texture, biatrial enlargement, and preserved ejection fraction, but the strain map shows apical sparing.\n\n**[ECG: Diffusely low-voltage QRS complexes in the limb leads with a pseudoinfarct Q-wave pattern in the anterior precordial leads]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Cardiac amyloidosis",
      "Hypertensive heart disease",
      "Hypertrophic cardiomyopathy",
      "Constrictive pericarditis",
      "Severe aortic stenosis"
    ],
    answer: 0,
    exp: "Thick ventricular walls with LOW ECG voltage is the classic discordance of an infiltrative cardiomyopathy. Bilateral carpal tunnel syndrome, apical-sparing strain, a sparkling myocardium, diuretic sensitivity, and HFpEF in an older man point to cardiac amyloidosis; confirmation is by technetium pyrophosphate scanning (transthyretin) or biopsy.",
    why: [
      "Correct: thick walls with low ECG voltage, apical-sparing strain, prior bilateral carpal tunnel syndrome, and HFpEF are hallmark features of infiltrative cardiac amyloidosis.",
      "Hypertensive heart disease increases ECG voltage rather than lowering it and does not cause a granular myocardium or apical-sparing strain.",
      "Hypertrophic cardiomyopathy produces high-voltage ECG changes and an outflow murmur, not low voltage with a sparkling infiltrated myocardium.",
      "Constrictive pericarditis shows a thickened calcified pericardium with ventricular interdependence, not thick sparkling myocardial walls.",
      "Aortic stenosis causes concentric hypertrophy with a systolic ejection murmur radiating to the carotids, not low voltage with apical sparing."
    ]
  },
  {
    id: "s2ck-0302",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Nonalcoholic steatohepatitis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 52-year-old woman with type 2 diabetes, obesity, and hyperlipidemia is found on routine labs to have an ALT of 82 U/L and AST of 60 U/L. She drinks no more than one glass of wine per month. Viral hepatitis serologies, iron studies, ceruloplasmin, and autoimmune markers are unremarkable. She takes metformin and atorvastatin and feels well.\n\n**[IMAGE: Abdominal ultrasound showing a diffusely hyperechoic ('bright') liver with increased hepatorenal contrast consistent with hepatic steatosis]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Alcoholic hepatitis",
      "Nonalcoholic fatty liver disease (steatohepatitis)",
      "Chronic hepatitis C infection",
      "Autoimmune hepatitis",
      "Statin-induced hepatotoxicity"
    ],
    answer: 1,
    exp: "Mildly elevated transaminases with an AST:ALT ratio below 1, a bright fatty liver on ultrasound, metabolic syndrome, and negative viral and autoimmune workup indicate nonalcoholic fatty liver disease. Management centers on weight loss, glycemic control, and cardiovascular risk reduction; statins can be continued.",
    why: [
      "Alcoholic hepatitis typically shows an AST:ALT ratio above 2 with a meaningful alcohol history, which she lacks.",
      "Correct: metabolic syndrome, an ALT-predominant mild transaminitis, a bright fatty liver on ultrasound, and a negative viral and autoimmune workup define nonalcoholic fatty liver disease.",
      "Chronic hepatitis C is excluded by the negative viral serologies.",
      "Autoimmune hepatitis is unlikely with negative autoimmune markers and would usually show higher transaminases and hypergammaglobulinemia.",
      "Statins rarely cause clinically significant injury and need not be stopped; her picture fits fatty liver from metabolic syndrome."
    ]
  },
  {
    id: "s2ck-0303",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Subacute (de Quervain) thyroiditis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 38-year-old woman has 2 weeks of anterior neck pain that radiates to the jaw, palpitations, heat intolerance, and mild tremor. She had an upper respiratory infection three weeks ago. On exam the thyroid is exquisitely tender to palpation. She has a low-grade fever.\n\n**[LAB: TSH < 0.01 mIU/L, free T4 elevated, ESR 78 mm/h, C-reactive protein elevated; radioactive iodine uptake markedly low at 2%]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Graves disease",
      "Toxic multinodular goiter",
      "Subacute (de Quervain) thyroiditis",
      "Hashimoto thyroiditis",
      "Factitious thyrotoxicosis"
    ],
    answer: 2,
    exp: "A painful, tender thyroid after a viral illness with transient thyrotoxicosis, a high ESR, and a LOW radioactive iodine uptake is classic for subacute granulomatous (de Quervain) thyroiditis. The gland leaks preformed hormone rather than overproducing it; treatment is NSAIDs (or corticosteroids) and beta-blockers for symptoms.",
    why: [
      "Graves disease causes a diffusely enlarged nontender gland with a HIGH radioiodine uptake, not a painful gland with low uptake.",
      "Toxic multinodular goiter shows patchy increased uptake over nodules and is painless.",
      "Correct: a tender thyroid after a viral prodrome with thyrotoxicosis, a high ESR, and low radioiodine uptake defines subacute (de Quervain) thyroiditis.",
      "Hashimoto thyroiditis usually causes painless hypothyroidism, not an acutely painful thyrotoxic gland.",
      "Factitious thyrotoxicosis has low uptake but a NONtender gland and a low thyroglobulin, without neck pain or a high ESR."
    ]
  },
  {
    id: "s2ck-0304",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Warm autoimmune hemolytic anemia",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 60-year-old woman with chronic lymphocytic leukemia develops 1 week of fatigue, dyspnea, and scleral icterus. She is tachycardic and pale. There is no dark urine on standing in the cold.\n\n**[LAB: Hemoglobin 7.4 g/dL, MCV 104 fL, reticulocytes 9%, LDH 620 U/L, haptoglobin < 10 mg/dL, indirect bilirubin elevated; peripheral smear shows spherocytes; direct antiglobulin test positive for IgG]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Hereditary spherocytosis",
      "Glucose-6-phosphate dehydrogenase deficiency",
      "Cold agglutinin disease",
      "Warm autoimmune hemolytic anemia",
      "Microangiopathic hemolytic anemia"
    ],
    answer: 3,
    exp: "Spherocytes with a direct antiglobulin test positive for IgG, an elevated reticulocyte count, high LDH, low haptoglobin, and indirect hyperbilirubinemia in a patient with CLL indicate warm autoimmune hemolytic anemia. IgG-coated red cells are cleared in the spleen; first-line treatment is corticosteroids.",
    why: [
      "Hereditary spherocytosis shows spherocytes but a NEGATIVE direct antiglobulin test and usually a lifelong family history.",
      "G6PD deficiency causes bite cells and Heinz bodies after oxidative stress, with a negative antiglobulin test.",
      "Cold agglutinin disease is mediated by IgM/complement (C3), worsens in the cold, and the antiglobulin test is positive for C3, not IgG.",
      "Correct: spherocytes with an IgG-positive direct antiglobulin test and laboratory hemolysis in a patient with CLL define warm autoimmune hemolytic anemia.",
      "Microangiopathic hemolysis shows schistocytes and thrombocytopenia with a negative antiglobulin test, not spherocytes with a positive test."
    ]
  },
  {
    id: "s2ck-0305",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Anti-glomerular basement membrane (Goodpasture) disease",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 26-year-old man who smokes has 5 days of hemoptysis and progressive dyspnea, and this morning noticed dark, cola-colored urine and reduced urine output. Blood pressure is 158/96 mm Hg. Chest imaging shows patchy alveolar opacities.\n\n**[LAB: Creatinine 3.8 mg/dL (baseline normal), urinalysis with dysmorphic red cells and red-cell casts; anti-glomerular basement membrane antibody positive; ANCA negative]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Granulomatosis with polyangiitis",
      "IgA nephropathy",
      "Poststreptococcal glomerulonephritis",
      "Microscopic polyangiitis",
      "Anti-glomerular basement membrane (Goodpasture) disease"
    ],
    answer: 4,
    exp: "Rapidly progressive glomerulonephritis with red-cell casts plus diffuse alveolar hemorrhage and a positive anti-GBM antibody with negative ANCA defines anti-GBM (Goodpasture) disease. Antibodies target type IV collagen in lung and kidney; treatment is urgent plasmapheresis plus corticosteroids and cyclophosphamide.",
    why: [
      "Granulomatosis with polyangiitis is ANCA-positive (PR3) with upper-airway involvement, whereas this patient is ANCA-negative and anti-GBM-positive.",
      "IgA nephropathy causes hematuria often after a mucosal infection but does not cause pulmonary hemorrhage or a positive anti-GBM antibody.",
      "Poststreptococcal glomerulonephritis follows a streptococcal infection with low complement and does not cause alveolar hemorrhage or anti-GBM antibodies.",
      "Microscopic polyangiitis is ANCA-positive (MPO) and can cause pulmonary-renal syndrome, but the anti-GBM antibody would be negative.",
      "Correct: pulmonary-renal syndrome with red-cell casts, a positive anti-GBM antibody, and negative ANCA defines anti-GBM (Goodpasture) disease."
    ]
  },
  {
    id: "s2ck-0306",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Cluster headache",
    difficulty: "easy",
    anchor: null,
    vignette: "A 34-year-old man has 2 weeks of severe, strictly right-sided headaches centered behind the eye. Each attack lasts about an hour and often wakes him at night. During attacks his right eye tears and reddens, the right nostril runs, and the right eyelid droops. He paces the room because he cannot stay still. He has had similar clusters of attacks in prior years.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Cluster headache",
      "Migraine without aura",
      "Trigeminal neuralgia",
      "Tension-type headache",
      "Giant cell arteritis"
    ],
    answer: 0,
    exp: "Severe unilateral periorbital pain in discrete attacks with ipsilateral autonomic features (lacrimation, rhinorrhea, ptosis) and marked restlessness during attacks is characteristic of cluster headache. High-flow oxygen and subcutaneous sumatriptan abort attacks; verapamil is used for prevention.",
    why: [
      "Correct: short, severe, strictly unilateral periorbital attacks with ipsilateral autonomic signs and agitation define cluster headache.",
      "Migraine patients prefer to lie still in a dark room and lack the prominent ipsilateral cranial autonomic features seen here.",
      "Trigeminal neuralgia causes brief electric-shock facial jabs triggered by touch or chewing, not hour-long periorbital attacks with tearing.",
      "Tension-type headache is a bilateral band-like pressure without autonomic features or restlessness.",
      "Giant cell arteritis occurs in older adults with jaw claudication and a high ESR, not recurrent nocturnal periorbital clusters in a young man."
    ]
  },
  {
    id: "s2ck-0307",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Chronic pancreatitis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 49-year-old man with a long history of heavy alcohol use has months of recurrent gnawing epigastric pain that bores to the back, along with a 9-kg weight loss and bulky, greasy, foul-smelling stools that float. Fasting glucose is newly elevated at 168 mg/dL.\n\n**[IMAGE: Noncontrast abdominal CT showing scattered coarse parenchymal calcifications throughout the pancreas with a dilated main pancreatic duct]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Pancreatic adenocarcinoma",
      "Chronic pancreatitis",
      "Recurrent acute pancreatitis without chronic damage",
      "Celiac disease",
      "Peptic ulcer disease"
    ],
    answer: 1,
    exp: "The triad of exocrine insufficiency (steatorrhea, weight loss), endocrine insufficiency (new diabetes), and pancreatic calcifications with ductal dilation in a heavy drinker is diagnostic of chronic pancreatitis. Management includes alcohol cessation, pancreatic enzyme replacement, and pain control.",
    why: [
      "Pancreatic adenocarcinoma can cause weight loss and pain but presents with a discrete mass and ductal obstruction, not diffuse calcifications with steatorrhea from gland burnout.",
      "Correct: steatorrhea, new diabetes, and diffuse pancreatic calcifications with ductal dilation in a heavy drinker define chronic pancreatitis.",
      "Recurrent acute pancreatitis alone would not produce fixed calcifications, steatorrhea, and new diabetes from permanent gland loss.",
      "Celiac disease causes malabsorption but not pancreatic calcifications or new diabetes, and would improve on a gluten-free diet.",
      "Peptic ulcer disease causes epigastric pain but not steatorrhea, new diabetes, or pancreatic calcification."
    ]
  },
  {
    id: "s2ck-0308",
    system: "Surgery",
    discipline: "Thoracic Surgery",
    topic: "Primary spontaneous pneumothorax",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A tall, thin 22-year-old man who smokes develops sudden right-sided pleuritic chest pain and dyspnea while sitting at his desk. He is in mild distress. Blood pressure is 124/76 mm Hg, heart rate 98/min, oxygen saturation 93% on room air. Breath sounds are decreased over the right hemithorax with hyperresonance, and the trachea is midline.\n\n**[IMAGE: Upright chest radiograph showing a large right-sided pneumothorax with the lung edge visible about 3 cm from the chest wall, without mediastinal shift]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Observation with supplemental oxygen only",
      "Immediate needle thoracostomy at the second intercostal space",
      "Tube thoracostomy (chest tube placement)",
      "Video-assisted thoracoscopic surgery today",
      "Chemical pleurodesis as the initial procedure"
    ],
    answer: 2,
    exp: "A large, symptomatic primary spontaneous pneumothorax without tension physiology is treated with tube thoracostomy (or catheter aspiration) to re-expand the lung. Observation with oxygen is reserved for small, minimally symptomatic pneumothoraces; VATS/pleurodesis are for recurrences or persistent air leaks.",
    why: [
      "Observation with oxygen is appropriate only for a SMALL, minimally symptomatic pneumothorax, not a large symptomatic one with hypoxemia.",
      "Needle thoracostomy is the emergency maneuver for tension pneumothorax, which is absent here (stable vitals, midline trachea).",
      "Correct: a large, symptomatic pneumothorax without tension is managed with tube thoracostomy to evacuate air and re-expand the lung.",
      "VATS is reserved for recurrent pneumothorax, a persistent air leak, or failure of tube drainage, not first-line here.",
      "Pleurodesis is used to prevent recurrence after treatment or with recurrent disease, not as the initial evacuation procedure."
    ]
  },
  {
    id: "s2ck-0309",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Pilonidal abscess",
    difficulty: "easy",
    anchor: null,
    vignette: "A 21-year-old hirsute man who drives a truck for long hours has 3 days of worsening pain and swelling at the top of the gluteal cleft. On exam there is a tender, warm, fluctuant 2-cm mass just off the midline over the sacrococcyx, with a midline pit containing a tuft of hair and a small amount of purulent drainage. He is afebrile.",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Oral antibiotics alone",
      "Sitz baths and observation",
      "Wide excision with primary closure now",
      "Incision and drainage",
      "MRI of the pelvis"
    ],
    answer: 3,
    exp: "An acute pilonidal abscess is treated first with incision and drainage, typically off the midline, with hair removal and hygiene. Antibiotics alone will not resolve a walled-off abscess, and definitive excision is deferred until the acute infection settles and is considered for recurrent disease.",
    why: [
      "Oral antibiotics alone do not drain a walled-off abscess and are, at most, an adjunct.",
      "Sitz baths and observation will not resolve an established fluctuant abscess.",
      "Wide excision is reserved for recurrent or chronic pilonidal disease, not the acutely infected abscess.",
      "Correct: an acute pilonidal abscess is treated with incision and drainage plus local hygiene and hair control.",
      "MRI is unnecessary for a clinically obvious superficial pilonidal abscess and would delay drainage."
    ]
  },
  {
    id: "s2ck-0310",
    system: "Surgery",
    discipline: "Surgical Oncology",
    topic: "Gastric adenocarcinoma",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 66-year-old man has 4 months of early satiety, epigastric discomfort, and a 10-kg weight loss. He is pale and fatigued. Labs show iron deficiency anemia. On exam there is a firm, enlarged left supraclavicular lymph node.\n\n**[IMAGE: Upper endoscopy showing a large ulcerated mass with heaped, irregular, friable margins along the gastric body; biopsy reveals malignant cells with signet-ring morphology]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Benign gastric peptic ulcer",
      "Gastrointestinal stromal tumor",
      "Gastric MALT lymphoma",
      "Pancreatic adenocarcinoma",
      "Gastric adenocarcinoma"
    ],
    answer: 4,
    exp: "An ulcerated gastric mass with heaped irregular margins, signet-ring cells on biopsy, iron deficiency anemia, weight loss, and a left supraclavicular (Virchow) node indicate gastric adenocarcinoma. Staging with CT and endoscopic ultrasound guides resectability and neoadjuvant chemotherapy.",
    why: [
      "A benign peptic ulcer has smooth, regular, punched-out margins, not a heaped irregular mass with signet-ring cells and a Virchow node.",
      "A GI stromal tumor is a submucosal, often endophytic mesenchymal mass without signet-ring histology.",
      "Gastric MALT lymphoma is associated with H. pylori and shows lymphoid histology, not signet-ring adenocarcinoma cells.",
      "Pancreatic adenocarcinoma arises in the pancreas and would not present as an intragastric mucosal mass on endoscopy with signet-ring gastric biopsy.",
      "Correct: an ulcerated gastric mass with irregular heaped margins, signet-ring histology, and a Virchow node defines gastric adenocarcinoma."
    ]
  },
  {
    id: "s2ck-0311",
    system: "Pediatrics",
    discipline: "Pediatric Cardiology",
    topic: "Ventricular septal defect",
    difficulty: "easy",
    anchor: null,
    vignette: "A 6-week-old infant is brought in for poor feeding, sweating during feeds, and slow weight gain. On auscultation there is a harsh, holosystolic murmur best heard at the left lower sternal border with a palpable thrill. The infant is not cyanotic, and pulses are equal in all extremities. The liver edge is palpable 2 cm below the costal margin.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Ventricular septal defect",
      "Atrial septal defect",
      "Patent ductus arteriosus",
      "Tetralogy of Fallot",
      "Innocent flow murmur"
    ],
    answer: 0,
    exp: "A harsh holosystolic murmur at the left lower sternal border with a thrill, plus signs of heart failure (poor feeding, diaphoresis, failure to thrive, hepatomegaly) in an acyanotic infant is classic for a ventricular septal defect. Small defects often close spontaneously; large ones with failure need medical therapy and possible repair.",
    why: [
      "Correct: a harsh holosystolic murmur with a thrill at the left lower sternal border and heart-failure signs in an acyanotic infant indicate a ventricular septal defect.",
      "An atrial septal defect causes a soft systolic murmur with a fixed split S2, not a harsh holosystolic murmur with a thrill.",
      "A patent ductus arteriosus produces a continuous 'machinery' murmur at the left infraclavicular area, not a holosystolic murmur.",
      "Tetralogy of Fallot causes cyanosis and a systolic ejection murmur from pulmonary stenosis, and this infant is acyanotic.",
      "An innocent murmur is soft, systolic, and not associated with a thrill, failure to thrive, or hepatomegaly."
    ]
  },
  {
    id: "s2ck-0312",
    system: "Pediatrics",
    discipline: "Metabolic Genetics",
    topic: "Phenylketonuria",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 2-week-old infant born at home without newborn screening is brought for a routine visit. The mother reports a musty, mousy odor to the diapers and the baby's skin. The infant has fair skin, light hair, and mild eczema, and is feeding a standard cow's-milk-based formula.\n\n**[LAB: Confirmatory testing shows markedly elevated plasma phenylalanine with a normal tyrosine level; a defect in phenylalanine hydroxylase is identified]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Reassurance and repeat screening in one month",
      "A phenylalanine-restricted diet",
      "A galactose-free (soy) formula",
      "Levothyroxine replacement",
      "A copper-chelating agent"
    ],
    answer: 1,
    exp: "Phenylketonuria results from phenylalanine hydroxylase deficiency, causing phenylalanine accumulation with a musty odor, hypopigmentation, and, if untreated, intellectual disability. Lifelong dietary phenylalanine restriction with a tyrosine-supplemented formula prevents neurologic injury.",
    why: [
      "Delaying treatment risks irreversible neurologic damage; elevated phenylalanine requires prompt dietary intervention.",
      "Correct: phenylketonuria is managed with a phenylalanine-restricted diet (and tyrosine supplementation) to prevent intellectual disability.",
      "A galactose-free formula treats galactosemia, which presents with jaundice, hepatomegaly, and cataracts, not a musty odor with high phenylalanine.",
      "Levothyroxine treats congenital hypothyroidism, not phenylalanine hydroxylase deficiency.",
      "Copper chelation treats Wilson disease, which is unrelated to elevated phenylalanine in a neonate."
    ]
  },
  {
    id: "s2ck-0313",
    system: "Pediatrics",
    discipline: "Pediatric Endocrinology",
    topic: "Central precocious puberty",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 6-year-old girl is brought in because of breast development and pubic hair over the past 6 months, along with a recent growth spurt. On exam she has Tanner stage 3 breasts and pubic hair. Her height is now above the 97th percentile and her bone age is advanced by 2.5 years. A GnRH stimulation test produces a brisk, pubertal rise in LH. Brain MRI is normal.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Premature thelarche",
      "Premature adrenarche",
      "Central (GnRH-dependent) precocious puberty",
      "McCune-Albright syndrome",
      "Congenital adrenal hyperplasia"
    ],
    answer: 2,
    exp: "Progressive breast and pubic hair development with accelerated growth, advanced bone age, and a pubertal LH response to GnRH stimulation indicate central (GnRH-dependent) precocious puberty. In girls it is often idiopathic; a GnRH agonist halts progression and preserves adult height.",
    why: [
      "Premature thelarche is isolated breast development without pubic hair, a growth spurt, advanced bone age, or a pubertal LH response.",
      "Premature adrenarche is isolated pubic hair from adrenal androgens, without breast development or a pubertal LH response.",
      "Correct: combined pubertal development with advanced bone age and a pubertal LH response to GnRH defines central precocious puberty.",
      "McCune-Albright syndrome causes GnRH-INDEPENDENT (peripheral) puberty with cafe-au-lait spots and bone lesions and a suppressed LH response.",
      "Congenital adrenal hyperplasia causes virilization from androgen excess with a suppressed gonadotropin response, not a pubertal LH surge."
    ]
  },
  {
    id: "s2ck-0314",
    system: "Obstetrics & Gynecology",
    discipline: "Maternal-Fetal Medicine",
    topic: "Placenta accreta spectrum",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 34-year-old woman at 32 weeks' gestation (gravida 4, para 3) has had three prior cesarean deliveries. She is asymptomatic, and a placenta previa was noted earlier. She is referred for detailed imaging to plan delivery.\n\n**[IMAGE: Obstetric ultrasound with color Doppler showing an anterior placenta overlying the prior cesarean scar, loss of the normal retroplacental clear zone, multiple vascular lacunae ('Swiss-cheese' appearance), and disruption of the bladder-uterine interface]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Placenta previa without abnormal invasion",
      "Vasa previa",
      "Placental abruption",
      "Placenta accreta spectrum",
      "Uterine rupture"
    ],
    answer: 3,
    exp: "Prior cesarean deliveries plus placenta previa overlying the scar with loss of the retroplacental clear zone, placental lacunae, and bladder-wall interface disruption indicate placenta accreta spectrum (abnormally adherent/invasive placenta). Planned late-preterm cesarean hysterectomy at an experienced center is standard.",
    why: [
      "Placenta previa alone does not show lacunae, loss of the retroplacental clear zone, or bladder-interface disruption indicating invasion.",
      "Vasa previa is fetal vessels crossing the cervical os, seen as vessels over the internal os, not myometrial invasion.",
      "Placental abruption is acute placental separation with pain and bleeding, not the chronic invasive sonographic findings described.",
      "Correct: prior cesareans with previa over the scar plus lacunae, loss of the clear zone, and bladder-interface disruption define placenta accreta spectrum.",
      "Uterine rupture is an acute intrapartum catastrophe with fetal distress and pain, not an antenatal sonographic invasion pattern."
    ]
  },
  {
    id: "s2ck-0315",
    system: "Obstetrics & Gynecology",
    discipline: "Labor & Delivery",
    topic: "Active-phase labor arrest",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 27-year-old primigravida at 40 weeks is in active labor. Her cervix was 6 cm dilated with ruptured membranes, and over the past 4 hours she has had strong contractions every 2-3 minutes documented as more than 200 Montevideo units by intrauterine catheter. On repeat exam the cervix remains 6 cm dilated with no descent of the fetal head. The fetal heart tracing is category I and reassuring.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Continue expectant management for two more hours",
      "Begin oxytocin augmentation",
      "Attempt operative vaginal delivery",
      "Perform amniotomy",
      "Proceed to cesarean delivery"
    ],
    answer: 4,
    exp: "Active-phase arrest is diagnosed at 6 cm or more with ruptured membranes and no cervical change for at least 4 hours despite adequate contractions (>200 Montevideo units). With adequate labor already established and no progress, cesarean delivery is indicated.",
    why: [
      "Further expectant management is inappropriate once arrest criteria are met with already-adequate contractions.",
      "Oxytocin augmentation is used for inadequate contractions; her contractions already exceed 200 Montevideo units.",
      "Operative vaginal delivery requires a fully dilated cervix and an appropriately descended head, neither of which is present at 6 cm.",
      "Amniotomy cannot help because the membranes are already ruptured.",
      "Correct: arrest of dilation at 6 cm with ruptured membranes and adequate contractions for at least 4 hours without change warrants cesarean delivery."
    ]
  },
  {
    id: "s2ck-0316",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecologic Oncology",
    topic: "Ovarian dysgerminoma",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "An 18-year-old woman has 3 weeks of abdominal fullness and a palpable lower abdominal mass. Pelvic ultrasound shows a large, solid, predominantly unilateral ovarian mass with internal vascularity. She is not pregnant.\n\n**[LAB: Serum lactate dehydrogenase markedly elevated; beta-hCG mildly elevated, alpha-fetoprotein normal; CA-125 near normal]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Ovarian dysgerminoma (germ cell tumor)",
      "Epithelial ovarian carcinoma",
      "Mature cystic teratoma",
      "Granulosa cell tumor",
      "Ovarian torsion"
    ],
    answer: 0,
    exp: "A solid ovarian mass in a young woman with a markedly elevated LDH is characteristic of dysgerminoma, the most common malignant ovarian germ cell tumor. These tumors are chemosensitive and radiosensitive, and fertility-sparing surgery is often possible.",
    why: [
      "Correct: a solid ovarian mass in an adolescent with a markedly elevated LDH points to dysgerminoma, a malignant germ cell tumor.",
      "Epithelial ovarian carcinoma occurs in older women and elevates CA-125, not LDH in a teenager.",
      "A mature cystic teratoma is typically a cystic mass with fat and calcification, not a solid LDH-secreting tumor.",
      "A granulosa cell tumor secretes estrogen and causes abnormal bleeding or precocious puberty, with elevated inhibin rather than LDH.",
      "Ovarian torsion presents with acute severe pelvic pain and does not elevate LDH or produce a solid vascular tumor pattern."
    ]
  },
  {
    id: "s2ck-0317",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Body dysmorphic disorder",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 23-year-old man reports several hours each day preoccupied with the belief that his nose is misshapen and 'disgusting,' although his physician and family see nothing abnormal. He checks mirrors repeatedly, avoids social situations, and has consulted three surgeons for rhinoplasty despite reassurance. His weight and eating are normal, and he does not fear gaining weight.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Obsessive-compulsive disorder",
      "Body dysmorphic disorder",
      "Anorexia nervosa",
      "Social anxiety disorder",
      "Delusional disorder, somatic type"
    ],
    answer: 1,
    exp: "Preoccupation with a perceived defect in appearance that others do not observe, with repetitive behaviors (mirror checking) and functional impairment, defines body dysmorphic disorder. First-line treatment is an SSRI plus cognitive behavioral therapy; cosmetic surgery does not help.",
    why: [
      "Obsessive-compulsive disorder involves obsessions and compulsions across various themes, not a specific preoccupation with perceived appearance defects.",
      "Correct: a preoccupation with a perceived appearance flaw others do not see, with mirror checking and impairment, defines body dysmorphic disorder.",
      "Anorexia nervosa centers on fear of weight gain and body-weight distortion, but his eating and weight concerns are normal.",
      "Social anxiety disorder is fear of scrutiny in social situations generally, not a fixed concern about a specific body part's appearance.",
      "Delusional disorder is diagnosed only when insight is absent and beliefs are fixedly delusional, whereas body dysmorphic disorder better fits this appearance-specific preoccupation."
    ]
  },
  {
    id: "s2ck-0318",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Human papillomavirus vaccination",
    difficulty: "easy",
    anchor: null,
    vignette: "An 11-year-old girl is at her routine well-child visit. She is healthy and up to date on childhood immunizations. Her mother asks about the vaccine that helps prevent cervical and other cancers and wants to know when her daughter should receive it.",
    lead: "Which of the following is the most appropriate recommendation?",
    options: [
      "Defer vaccination until age 18",
      "Vaccinate only if the child becomes sexually active",
      "Administer the HPV vaccine now as a two-dose series",
      "Vaccinate only girls, not boys",
      "Perform a Pap test before offering the vaccine"
    ],
    answer: 2,
    exp: "Routine HPV vaccination is recommended for all children at ages 11-12 (may start at 9). When begun before the 15th birthday, a two-dose schedule is used; vaccinating before sexual debut maximizes protection against HPV-related cancers and genital warts.",
    why: [
      "Deferring to age 18 misses the window of highest efficacy before likely HPV exposure.",
      "Vaccination should occur before sexual debut, not be delayed until after activity begins.",
      "Correct: HPV vaccine is recommended routinely at ages 11-12 as a two-dose series when started before age 15.",
      "HPV vaccination is recommended for both boys and girls, not girls only.",
      "A Pap test is not required or appropriate before vaccination and is not indicated in an 11-year-old."
    ]
  }
];
