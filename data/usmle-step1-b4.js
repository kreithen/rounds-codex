/*
 * Rounds Codex - USMLE Step 1 question bank, Batch 4 (25 items)
 * Blueprint-weighted mix. All vignettes original; source used for facts only.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP1_B4 = [
  {
    id: "s1-0076",
    system: "General Principles",
    discipline: "Biochemistry",
    topic: "Classic galactosemia",
    difficulty: "moderate",
    anchor: null,
    vignette: "A neonate begins vomiting and feeding poorly a few days after milk feeds are started. She becomes jaundiced with hepatomegaly and is found to have bilateral cataracts. She develops Escherichia coli sepsis. Urine tests positive for reducing substances, and she is hypoglycemic.",
    lead: "A deficiency of which enzyme is most likely?",
    options: [
      "Fructokinase",
      "Aldolase B",
      "Galactose-1-phosphate uridyltransferase",
      "Galactokinase",
      "Glucose-6-phosphatase"
    ],
    answer: 2,
    exp: "Vomiting, jaundice, hepatomegaly, cataracts, and E. coli sepsis after milk exposure indicate classic galactosemia from deficient galactose-1-phosphate uridyltransferase. Accumulated galactose-1-phosphate is toxic to the liver, kidney, and brain, while excess galactose is converted to galactitol, causing cataracts. Management removes galactose and lactose from the diet.",
    why: [
      "Fructokinase deficiency causes benign essential fructosuria, which is asymptomatic.",
      "Aldolase B deficiency causes hereditary fructose intolerance, triggered by fructose, not galactose.",
      "Correct: galactose-1-phosphate uridyltransferase deficiency causes the toxic accumulation and multisystem findings of classic galactosemia.",
      "Galactokinase deficiency is milder and causes cataracts alone, without hepatic failure or sepsis.",
      "Glucose-6-phosphatase deficiency causes von Gierke disease, with fasting hypoglycemia and hepatomegaly, not milk-triggered sepsis."
    ]
  },
  {
    id: "s1-0077",
    system: "General Principles",
    discipline: "Genetics",
    topic: "Prader-Willi syndrome (imprinting)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A young child had marked hypotonia and poor feeding as an infant but now has relentless hyperphagia with obesity, short stature, small hands and feet, hypogonadism, and intellectual disability. Testing shows a deletion of the paternally inherited chromosome 15q11-q13.",
    lead: "Which mechanism best explains this disorder?",
    options: [
      "Loss of paternally expressed genes at 15q11-q13 through genomic imprinting",
      "Trisomy of chromosome 21",
      "Expansion of a CGG trinucleotide repeat",
      "Loss of the maternal 15q11-q13 region",
      "A microdeletion at chromosome 22q11"
    ],
    answer: 0,
    exp: "Infantile hypotonia followed by hyperphagia, obesity, and hypogonadism with a paternal 15q11-q13 deletion is Prader-Willi syndrome. Because the maternal copy of this region is normally imprinted (silenced), loss of the paternal copy leaves no functional gene expression. The reciprocal loss of the maternal region causes Angelman syndrome.",
    why: [
      "Correct: loss of paternally expressed 15q11-q13 genes, with the maternal copy imprinted, causes Prader-Willi syndrome.",
      "Trisomy 21 causes Down syndrome, not this hyperphagia-obesity phenotype.",
      "A CGG repeat expansion causes fragile X syndrome.",
      "Loss of the maternal 15q11-q13 region causes Angelman syndrome, with ataxia, seizures, and inappropriate laughter.",
      "A 22q11 microdeletion causes DiGeorge syndrome, with cardiac, parathyroid, and thymic defects."
    ]
  },
  {
    id: "s1-0078",
    system: "General Principles",
    discipline: "Cell Biology",
    topic: "Primary ciliary dyskinesia (Kartagener)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A young adult has chronic sinusitis, recurrent otitis media, and bronchiectasis, and he and his partner have been unable to conceive; his sperm are immotile. A chest radiograph shows the cardiac apex pointing to the right (situs inversus).",
    lead: "A defect in which structure best explains this triad?",
    options: [
      "The CFTR chloride channel",
      "Alpha-1 antitrypsin",
      "Type I collagen",
      "Fibrillin-1",
      "The dynein arms of the ciliary axoneme"
    ],
    answer: 4,
    exp: "Situs inversus with chronic sinusitis and bronchiectasis plus infertility is primary ciliary dyskinesia (Kartagener syndrome), caused by defective dynein arms. Immotile cilia impair mucociliary clearance (recurrent sinopulmonary infections) and sperm motility, and dysfunctional embryonic nodal cilia randomize organ situs. The classic triad is situs inversus, chronic sinusitis, and bronchiectasis.",
    why: [
      "A CFTR defect causes cystic fibrosis, which lacks situs inversus and immotile cilia.",
      "Alpha-1 antitrypsin deficiency causes emphysema and liver disease, not this ciliary triad.",
      "Type I collagen defects cause osteogenesis imperfecta.",
      "Fibrillin-1 defects cause Marfan syndrome.",
      "Correct: defective dynein arms immobilize cilia, causing the sinopulmonary disease, infertility, and situs inversus of Kartagener syndrome."
    ]
  },
  {
    id: "s1-0079",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Immunology",
    topic: "Severe combined immunodeficiency",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 5-month-old has failure to thrive, chronic diarrhea, persistent oral thrush, and Pneumocystis pneumonia, along with severe recurrent bacterial and viral infections since birth. Imaging shows an absent thymic shadow, and the absolute lymphocyte count is very low.",
    lead: "Which best explains this presentation?",
    options: [
      "Isolated IgA deficiency",
      "Severe combined immunodeficiency from defective T- and B-cell immunity",
      "Terminal complement (C5-C9) deficiency",
      "X-linked agammaglobulinemia with intact T cells",
      "Chronic granulomatous disease"
    ],
    answer: 1,
    exp: "Severe infections from birth with bacteria, viruses, and fungi (including Pneumocystis and Candida), failure to thrive, an absent thymus, and profound lymphopenia indicate severe combined immunodeficiency. Defects such as the X-linked common gamma chain or adenosine deaminase deficiency cripple both cellular and humoral immunity. It is fatal without hematopoietic stem cell transplantation, and live vaccines must be avoided.",
    why: [
      "Isolated IgA deficiency is usually asymptomatic or causes mild mucosal infections and transfusion reactions.",
      "Correct: combined T- and B-cell failure causes overwhelming early infections with an absent thymus and lymphopenia.",
      "Terminal complement deficiency predisposes specifically to recurrent Neisseria infections.",
      "X-linked agammaglobulinemia affects B cells with intact T cells, causing encapsulated bacterial infections after about 6 months.",
      "Chronic granulomatous disease causes catalase-positive infections with granulomas and a normal lymphocyte count."
    ]
  },
  {
    id: "s1-0080",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Pathology",
    topic: "Hemophilia A",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 3-year-old boy has recurrent swollen, painful knees after minor activity, deep muscle bleeds, and prolonged bleeding after a dental procedure. A maternal uncle had similar problems. Specific factor assays show reduced factor VIII activity with normal factor IX activity.\n\n| Test | Value | Reference |\n|---|---|---|\n| Activated partial thromboplastin time | prolonged | normal |\n| Prothrombin time | normal | normal |\n| Platelet count | normal | normal |\n| Mixing study | corrects | - |",
    lead: "A deficiency of which factor is most likely?",
    options: [
      "Von Willebrand factor",
      "Factor IX",
      "Platelet glycoprotein Ib",
      "Factor VIII",
      "Vitamin K-dependent factors"
    ],
    answer: 3,
    exp: "Deep joint and muscle bleeding in a boy with a prolonged activated partial thromboplastin time, normal prothrombin time and platelets, and a correcting mixing study is hemophilia A, an X-linked deficiency of factor VIII. The intrinsic pathway is impaired, prolonging the activated partial thromboplastin time, while correction on mixing indicates a factor deficiency rather than an inhibitor. Low factor VIII with normal factor IX confirms hemophilia A.",
    why: [
      "Von Willebrand disease causes mucosal bleeding with a prolonged bleeding time; factor VIII may be mildly low but the assay here isolates factor VIII deficiency.",
      "Factor IX deficiency (hemophilia B) gives an identical coagulation pattern, but this patient's factor IX activity is normal.",
      "Glycoprotein Ib deficiency (Bernard-Soulier) is a platelet disorder with a prolonged bleeding time, not an isolated activated partial thromboplastin time.",
      "Correct: X-linked factor VIII deficiency prolongs the activated partial thromboplastin time and causes hemarthroses.",
      "Vitamin K-dependent factor deficiency prolongs both the prothrombin time and the activated partial thromboplastin time."
    ]
  },
  {
    id: "s1-0081",
    system: "Behavioral Health & Nervous System",
    discipline: "Pathology",
    topic: "Guillain-Barre syndrome",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 40-year-old develops symmetric weakness that begins in the legs and ascends over several days, with loss of reflexes and mild tingling. Symptoms began about ten days after a diarrheal illness. There is concern for respiratory compromise.\n\n| Test | Value | Reference |\n|---|---|---|\n| Cerebrospinal fluid protein | elevated | normal |\n| Cerebrospinal fluid white cells | normal | normal |",
    lead: "Which process best explains this illness?",
    options: [
      "Autoimmune demyelination of peripheral nerves and roots",
      "Autoantibodies against the acetylcholine receptor",
      "Infection of anterior horn cells by poliovirus",
      "Central demyelination with oligoclonal bands",
      "Dorsal column degeneration from vitamin B12 deficiency"
    ],
    answer: 0,
    exp: "Ascending symmetric weakness with areflexia after a diarrheal illness, together with elevated cerebrospinal fluid protein and a normal cell count (albuminocytologic dissociation), is Guillain-Barre syndrome. It is an immune-mediated demyelinating polyradiculoneuropathy, often triggered by Campylobacter through molecular mimicry, and it can progress to respiratory failure. Treatment is intravenous immunoglobulin or plasmapheresis.",
    why: [
      "Correct: autoimmune demyelination of peripheral nerves and roots causes ascending areflexic weakness with albuminocytologic dissociation.",
      "Acetylcholine receptor antibodies cause myasthenia gravis, with fatigable weakness and preserved reflexes.",
      "Poliovirus infection causes asymmetric flaccid paralysis with a febrile illness and cerebrospinal fluid pleocytosis.",
      "Central demyelination with oligoclonal bands describes multiple sclerosis, not an ascending peripheral neuropathy.",
      "Vitamin B12 deficiency causes chronic dorsal column and corticospinal degeneration, not an acute ascending paralysis."
    ]
  },
  {
    id: "s1-0082",
    system: "Behavioral Health & Nervous System",
    discipline: "Pharmacology",
    topic: "Opioid overdose",
    difficulty: "moderate",
    anchor: null,
    vignette: "A young adult is found unresponsive with a respiratory rate of 6 breaths per minute, pinpoint pupils, and cyanosis. There are track marks on the arms. He rapidly improves after administration of naloxone.",
    lead: "Which mechanism best explains this toxidrome?",
    options: [
      "Blockade of muscarinic acetylcholine receptors",
      "Excess serotonin at central synapses",
      "Agonism at mu-opioid receptors causing respiratory depression and miosis",
      "Blockade of GABA-A receptors",
      "Inhibition of acetylcholinesterase"
    ],
    answer: 2,
    exp: "Depressed consciousness, a very low respiratory rate, and pinpoint pupils that reverse with naloxone indicate opioid toxicity. Opioids agonize mu receptors, depressing the brainstem respiratory drive and causing miosis and reduced gastrointestinal motility. Naloxone is a competitive mu-receptor antagonist that rapidly reverses the effects.",
    why: [
      "Antimuscarinic toxicity causes dilated pupils, dry skin, and hyperthermia, not miosis with hypoventilation.",
      "Serotonin excess causes agitation, hyperreflexia, and clonus, not respiratory depression with pinpoint pupils.",
      "Correct: mu-opioid receptor agonism depresses respiration and causes miosis, both reversed by naloxone.",
      "GABA-A blockade causes seizures rather than sedation and miosis.",
      "Acetylcholinesterase inhibition causes miosis but with excessive secretions, bradycardia, and muscle fasciculations."
    ]
  },
  {
    id: "s1-0083",
    system: "Behavioral Health & Nervous System",
    discipline: "Behavioral Sciences",
    topic: "Developmental milestones",
    difficulty: "easy",
    anchor: null,
    vignette: "At a routine well-child visit, a healthy infant can sit without support, transfers objects from one hand to the other, babbles, and has recently begun to show wariness around unfamiliar people.",
    lead: "Which age is most consistent with these milestones?",
    options: [
      "2 months",
      "4 months",
      "12 months",
      "18 months",
      "6 to 9 months"
    ],
    answer: 4,
    exp: "Sitting unsupported, transferring objects between hands, babbling, and the onset of stranger anxiety cluster around 6 to 9 months of age. Motor milestones advance in a cephalocaudal (head-to-toe) direction. By around 12 months, most children take first steps, use a pincer grasp, and say a first word.",
    why: [
      "At 2 months, infants have a social smile and can track objects but cannot sit or transfer.",
      "At 4 months, infants hold the head steady, roll, and laugh but do not yet sit unsupported.",
      "At 12 months, children typically take first steps and say a first word, beyond these milestones.",
      "At 18 months, children walk well and use several words, well beyond this cluster.",
      "Correct: sitting unsupported, hand-to-hand transfer, babbling, and stranger anxiety fit 6 to 9 months."
    ]
  },
  {
    id: "s1-0084",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Paget disease of bone",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 68-year-old man reports that his hats no longer fit, along with progressive hearing loss, bone pain, and bowing of the shins. Radiographs show mixed lytic and sclerotic bone with cortical thickening.\n\n| Test | Value | Reference |\n|---|---|---|\n| Alkaline phosphatase | markedly elevated | 40-130 U/L |\n| Calcium | normal | 8.5-10.2 mg/dL |\n| Phosphate | normal | 2.5-4.5 mg/dL |",
    lead: "Which process best explains these findings?",
    options: [
      "Osteoclast dysfunction producing dense, brittle bone",
      "Disordered remodeling with excessive osteoclastic and then osteoblastic activity",
      "Defective mineralization from vitamin D deficiency",
      "Increased bone resorption from parathyroid hormone excess",
      "Widespread osteoblastic metastases from prostate carcinoma"
    ],
    answer: 1,
    exp: "An enlarging skull, hearing loss, bowed limbs, and isolated elevation of alkaline phosphatase with normal calcium and phosphate is Paget disease of bone. It reflects focal, disordered remodeling with a burst of osteoclastic resorption followed by disorganized osteoblastic bone formation, producing a mosaic bone pattern. Complications include high-output heart failure, hearing loss, and rarely osteosarcoma.",
    why: [
      "Osteoclast dysfunction causes osteopetrosis, with diffusely dense, fracture-prone bone.",
      "Correct: disordered osteoclastic then osteoblastic remodeling raises alkaline phosphatase with normal calcium and phosphate.",
      "Vitamin D deficiency causes osteomalacia, with low or low-normal calcium and phosphate.",
      "Parathyroid hormone excess causes hypercalcemia with low phosphate, not isolated alkaline phosphatase elevation.",
      "Prostate metastases would show a known primary and other laboratory abnormalities rather than this isolated pattern."
    ]
  },
  {
    id: "s1-0085",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Psoriasis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 30-year-old has well-demarcated, erythematous plaques with thick silvery scale over the elbows, knees, and scalp. Removing the scale produces pinpoint bleeding, and the fingernails show fine pitting. Some finger joints ache.\n\n**[IMAGE: sharply demarcated erythematous plaques with thick silvery-white scale over extensor surfaces]**",
    lead: "Which histologic finding is most characteristic?",
    options: [
      "Intraepidermal acantholysis with net-like intercellular IgG",
      "A subepidermal blister with linear IgG along the basement membrane",
      "Spongiosis with intraepidermal edema",
      "Epidermal hyperplasia with parakeratosis and neutrophils in the stratum corneum",
      "Granulomatous inflammation of the dermis"
    ],
    answer: 3,
    exp: "Silvery-scaled plaques on extensor surfaces with the Auspitz sign and nail pitting are psoriasis, a T-cell-driven disorder of keratinocyte hyperproliferation. Histology shows acanthosis with parakeratosis (retained nuclei in the stratum corneum), thinned suprapapillary plates over dilated capillaries (the basis of the Auspitz sign), and Munro microabscesses of neutrophils. Psoriatic arthritis may accompany the skin disease.",
    why: [
      "Intraepidermal acantholysis with net-like IgG describes pemphigus vulgaris.",
      "A subepidermal blister with linear IgG describes bullous pemphigoid.",
      "Spongiosis with intraepidermal edema describes eczematous (spongiotic) dermatitis.",
      "Correct: acanthosis, parakeratosis, and neutrophilic microabscesses in the stratum corneum characterize psoriasis.",
      "Granulomatous dermal inflammation occurs in conditions such as sarcoidosis or granuloma annulare, not psoriasis."
    ]
  },
  {
    id: "s1-0086",
    system: "Cardiovascular",
    discipline: "Physiology",
    topic: "Calcific aortic stenosis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 74-year-old man has exertional chest tightness, light-headedness, and breathlessness. On examination there is a harsh crescendo-decrescendo systolic ejection murmur at the right upper sternal border that radiates to the carotids, and the carotid upstrokes are weak and delayed.",
    lead: "Which process best explains his findings?",
    options: [
      "Calcific narrowing of the aortic valve increasing outflow resistance",
      "Retrograde flow through an incompetent aortic valve",
      "Dynamic outflow obstruction from asymmetric septal hypertrophy",
      "A left-to-right shunt through a ventricular septal defect",
      "Prolapse of a mitral leaflet into the left atrium"
    ],
    answer: 0,
    exp: "Exertional angina, syncope, and dyspnea with an ejection murmur radiating to the carotids and pulsus parvus et tardus is calcific aortic stenosis, common in the elderly. The fixed valvular obstruction imposes a pressure load that drives concentric left ventricular hypertrophy. Reduced preload from Valsalva softens the murmur, unlike in hypertrophic cardiomyopathy.",
    why: [
      "Correct: calcific aortic valve narrowing raises outflow resistance, producing the classic triad and parvus et tardus.",
      "Aortic regurgitation causes a diastolic decrescendo murmur with a wide pulse pressure, not this systolic ejection murmur.",
      "Dynamic obstruction from septal hypertrophy (hypertrophic cardiomyopathy) intensifies with reduced preload, unlike fixed stenosis.",
      "A ventricular septal defect causes a holosystolic murmur at the left lower sternal border.",
      "Mitral valve prolapse causes a midsystolic click with a late systolic murmur, not a carotid-radiating ejection murmur."
    ]
  },
  {
    id: "s1-0087",
    system: "Cardiovascular",
    discipline: "Pharmacology",
    topic: "Statin mechanism",
    difficulty: "moderate",
    anchor: null,
    vignette: "A patient with an elevated low-density lipoprotein cholesterol is started on atorvastatin for cardiovascular risk reduction.",
    lead: "Which mechanism best describes how this drug lowers LDL cholesterol?",
    options: [
      "Binding bile acids in the gut to increase cholesterol excretion",
      "Blocking intestinal cholesterol absorption at NPC1L1",
      "Activating lipoprotein lipase through PPAR-alpha",
      "Inhibiting PCSK9 to prolong LDL receptor recycling",
      "Inhibiting HMG-CoA reductase, which upregulates hepatic LDL receptors"
    ],
    answer: 4,
    exp: "Statins competitively inhibit HMG-CoA reductase, the rate-limiting enzyme of cholesterol synthesis. The resulting fall in intracellular cholesterol prompts hepatocytes to upregulate LDL receptors, increasing clearance of LDL from the blood. Statins also modestly raise HDL and lower triglycerides, and can cause myopathy and transaminase elevation.",
    why: [
      "Bile acid binding describes resins such as cholestyramine.",
      "Blocking NPC1L1 describes ezetimibe.",
      "Activating lipoprotein lipase through PPAR-alpha describes fibrates.",
      "Inhibiting PCSK9 describes monoclonal antibodies such as evolocumab.",
      "Correct: HMG-CoA reductase inhibition upregulates hepatic LDL receptors and lowers LDL cholesterol."
    ]
  },
  {
    id: "s1-0088",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Squamous cell lung carcinoma with PTHrP",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 62-year-old long-time smoker has weight loss and hemoptysis. Imaging shows a central lung mass with cavitation. He is confused and constipated.\n\n| Test | Value | Reference |\n|---|---|---|\n| Calcium | high | 8.5-10.2 mg/dL |\n| Phosphate | low | 2.5-4.5 mg/dL |\n| Parathyroid hormone | low | normal |\n| Parathyroid hormone-related peptide | elevated | low |",
    lead: "Which paraneoplastic mechanism best explains the hypercalcemia?",
    options: [
      "Ectopic secretion of adrenocorticotropic hormone",
      "Ectopic secretion of antidiuretic hormone",
      "Secretion of parathyroid hormone-related peptide",
      "Antibodies against presynaptic calcium channels",
      "Extensive osteolytic bone metastases"
    ],
    answer: 2,
    exp: "A central cavitary lung mass in a smoker with hypercalcemia, low phosphate, suppressed parathyroid hormone, and elevated parathyroid hormone-related peptide is squamous cell carcinoma causing humoral hypercalcemia of malignancy. Parathyroid hormone-related peptide acts at the parathyroid hormone receptor to raise calcium and lower phosphate, while native parathyroid hormone is appropriately suppressed. Squamous cell tumors classically secrete this peptide.",
    why: [
      "Ectopic adrenocorticotropic hormone, more typical of small cell carcinoma, causes Cushing syndrome, not hypercalcemia.",
      "Ectopic antidiuretic hormone causes hyponatremia, not hypercalcemia.",
      "Correct: parathyroid hormone-related peptide raises calcium and lowers phosphate while suppressing native parathyroid hormone.",
      "Presynaptic calcium channel antibodies cause Lambert-Eaton syndrome, a neuromuscular disorder.",
      "Osteolytic metastases can raise calcium, but the elevated parathyroid hormone-related peptide points to a humoral mechanism here."
    ]
  },
  {
    id: "s1-0089",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Autosomal dominant polycystic kidney disease",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 35-year-old has hypertension, flank pain, and blood in the urine, with palpable bilateral abdominal masses. A relative died of a brain hemorrhage, and several relatives developed kidney failure.\n\n**[IMAGE: renal ultrasound showing bilaterally enlarged kidneys studded with numerous cysts]**\n\nHepatic cysts are also present.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Acquired obstructive uropathy",
      "Autosomal dominant polycystic kidney disease from a PKD1 mutation",
      "Simple benign renal cysts",
      "Renal cell carcinoma",
      "Autosomal recessive polycystic kidney disease presenting in a neonate"
    ],
    answer: 1,
    exp: "Bilateral enlarged cystic kidneys with hypertension, hematuria, hepatic cysts, and a family history of kidney failure and cerebral hemorrhage is autosomal dominant polycystic kidney disease, usually from a PKD1 mutation affecting polycystin-1. Progressive cyst growth causes chronic kidney disease, and extrarenal features include berry aneurysms with subarachnoid hemorrhage risk and mitral valve prolapse. Inheritance is autosomal dominant.",
    why: [
      "Obstructive uropathy causes hydronephrosis, not innumerable bilateral cysts with hepatic cysts.",
      "Correct: a PKD1 mutation causes progressive bilateral renal cysts with the extrarenal features described.",
      "Simple cysts are few and incidental, without kidney enlargement or a family syndrome.",
      "Renal cell carcinoma usually presents as a solid mass rather than diffuse bilateral cysts.",
      "The recessive form presents in infancy with Potter sequence, not in a hypertensive adult."
    ]
  },
  {
    id: "s1-0090",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Acute pancreatitis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 48-year-old with a history of gallstones has severe, steady epigastric pain radiating to the back with nausea and vomiting; the pain worsens when supine.\n\n| Test | Value | Reference |\n|---|---|---|\n| Lipase | more than 3 times the upper limit | 10-140 U/L |",
    lead: "Which mechanism best explains the tissue injury?",
    options: [
      "Autoimmune destruction of pancreatic islet cells",
      "Ischemic infarction of the pancreas",
      "Bacterial infection of the pancreatic duct",
      "Premature intra-acinar activation of pancreatic enzymes causing autodigestion",
      "Malignant obstruction of the pancreatic duct alone"
    ],
    answer: 3,
    exp: "Epigastric pain radiating to the back with a markedly elevated lipase in a patient with gallstones is acute pancreatitis. The initiating event is premature activation of trypsinogen within acinar cells, triggering a cascade of enzymatic autodigestion, inflammation, and fat necrosis. Gallstones and alcohol are the most common causes, and complications include necrosis, pseudocyst, and hypocalcemia.",
    why: [
      "Autoimmune islet destruction causes type 1 diabetes, not acute pancreatitis.",
      "Ischemic infarction is an uncommon primary cause of acute pancreatitis.",
      "Infection is a complication of pancreatic necrosis rather than the initiating mechanism.",
      "Correct: premature intra-acinar enzyme activation causes autodigestion and acute pancreatitis.",
      "Ductal obstruction can trigger pancreatitis, but the underlying injury is enzymatic autodigestion."
    ]
  },
  {
    id: "s1-0091",
    system: "Gastrointestinal",
    discipline: "Microbiology",
    topic: "Hepatitis B serology",
    difficulty: "hard",
    anchor: "table",
    vignette: "An asymptomatic adult is screened as part of a routine evaluation, with the following hepatitis B panel.\n\n| Marker | Result |\n|---|---|\n| Hepatitis B surface antigen | positive |\n| IgM antibody to core antigen | negative |\n| Total antibody to core antigen | positive |\n| Antibody to surface antigen | negative |\n| Hepatitis B e antigen | positive |",
    lead: "Which best describes this patient's status?",
    options: [
      "Immune due to prior vaccination",
      "Immune due to resolved natural infection",
      "Acute infection in the window period",
      "Never infected and susceptible",
      "Chronic hepatitis B infection with high infectivity"
    ],
    answer: 4,
    exp: "Persistent surface antigen with total (IgG) core antibody but no IgM core antibody and no surface antibody indicates chronic hepatitis B infection. A positive e antigen signals active viral replication and high infectivity. Vaccination produces isolated surface antibody, and resolved infection produces both surface antibody and core antibody.",
    why: [
      "Vaccine-derived immunity shows isolated surface antibody with negative surface antigen and core antibody.",
      "Resolved infection shows positive surface antibody and core antibody with negative surface antigen.",
      "The window period shows positive IgM core antibody with negative surface antigen and surface antibody.",
      "A susceptible person has all markers negative.",
      "Correct: persistent surface antigen with total core antibody and positive e antigen indicates chronic infection with high infectivity."
    ]
  },
  {
    id: "s1-0092",
    system: "Reproductive & Endocrine",
    discipline: "Physiology",
    topic: "Primary hyperparathyroidism",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 58-year-old woman is found to have hypercalcemia on routine testing. She reports fatigue, constipation, a recent kidney stone, bone aches, and low mood.\n\n| Test | Value | Reference |\n|---|---|---|\n| Calcium | high | 8.5-10.2 mg/dL |\n| Phosphate | low | 2.5-4.5 mg/dL |\n| Parathyroid hormone | elevated | normal |\n| 24-hour urine calcium | high | - |",
    lead: "Which is the most likely cause?",
    options: [
      "A parathyroid adenoma autonomously secreting parathyroid hormone",
      "Parathyroid hormone-related peptide from a carcinoma",
      "Vitamin D intoxication",
      "Familial hypocalciuric hypercalcemia",
      "Secondary hyperparathyroidism from chronic kidney disease"
    ],
    answer: 0,
    exp: "Hypercalcemia with low phosphate, elevated parathyroid hormone, and high urine calcium is primary hyperparathyroidism, most often from a solitary parathyroid adenoma. Excess parathyroid hormone raises calcium, lowers phosphate, and increases bone resorption and urinary calcium, producing stones, bone pain, constipation, and mood changes. It is frequently detected as asymptomatic hypercalcemia.",
    why: [
      "Correct: an autonomous parathyroid adenoma raises parathyroid hormone, causing hypercalcemia with hypophosphatemia and hypercalciuria.",
      "Humoral hypercalcemia from parathyroid hormone-related peptide suppresses native parathyroid hormone, which is elevated here.",
      "Vitamin D toxicity raises both calcium and phosphate and suppresses parathyroid hormone.",
      "Familial hypocalciuric hypercalcemia shows low urine calcium, unlike the high urinary calcium here.",
      "Secondary hyperparathyroidism from kidney disease features low or normal calcium with high parathyroid hormone."
    ]
  },
  {
    id: "s1-0093",
    system: "Reproductive & Endocrine",
    discipline: "Physiology",
    topic: "Syndrome of inappropriate antidiuretic hormone",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 66-year-old with small cell lung carcinoma is confused. She appears euvolemic, with no edema and normal blood pressure. Thyroid, adrenal, and kidney function are normal.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sodium | 118 mEq/L | 135-145 |\n| Serum osmolality | low | 275-295 mOsm/kg |\n| Urine osmolality | inappropriately high | - |\n| Urine sodium | elevated | - |",
    lead: "Which mechanism best explains her hyponatremia?",
    options: [
      "Renal sodium wasting from aldosterone deficiency",
      "Free water loss from antidiuretic hormone deficiency",
      "Inappropriate antidiuretic hormone secretion causing water retention",
      "Hypovolemic hyponatremia from diuretic use",
      "Pseudohyponatremia from severe hyperlipidemia"
    ],
    answer: 2,
    exp: "Euvolemic hypotonic hyponatremia with inappropriately concentrated urine and elevated urine sodium is the syndrome of inappropriate antidiuretic hormone, here a paraneoplastic effect of small cell lung carcinoma. Excess antidiuretic hormone drives renal free water retention, diluting the serum sodium while the urine remains concentrated. Management centers on fluid restriction and treating the cause.",
    why: [
      "Aldosterone deficiency causes hypovolemia with hyperkalemia, not euvolemic hyponatremia with concentrated urine.",
      "Antidiuretic hormone deficiency causes diabetes insipidus, with hypernatremia and dilute urine.",
      "Correct: excess antidiuretic hormone retains free water, causing dilutional euvolemic hyponatremia with concentrated urine.",
      "Diuretic-induced hyponatremia is typically hypovolemic, unlike this euvolemic picture.",
      "Pseudohyponatremia from hyperlipidemia shows a normal measured serum osmolality."
    ]
  },
  {
    id: "s1-0094",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Testicular seminoma",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 30-year-old man notices a firm, painless enlargement of one testis that does not transilluminate. He had an undescended testis corrected in childhood. Ultrasound shows a solid intratesticular mass, and serum lactate dehydrogenase is mildly elevated while alpha-fetoprotein is normal.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Hydrocele",
      "Epididymitis",
      "Leydig cell tumor",
      "Seminoma",
      "Yolk sac tumor"
    ],
    answer: 3,
    exp: "A painless, firm, solid testicular mass in a young man with a history of cryptorchidism is most likely a germ cell tumor, and seminoma is the most common type. Seminomas are radiosensitive and may raise lactate dehydrogenase and placental alkaline phosphatase, with a normal alpha-fetoprotein. Alpha-fetoprotein elevation would instead suggest nonseminomatous (for example, yolk sac) elements.",
    why: [
      "A hydrocele is cystic and transilluminates rather than presenting as a solid mass.",
      "Epididymitis is painful and infectious, not a painless firm mass.",
      "A Leydig cell tumor typically produces androgens or estrogens and is usually benign.",
      "Correct: a painless solid testicular mass with prior cryptorchidism and normal alpha-fetoprotein fits seminoma.",
      "A yolk sac tumor elevates alpha-fetoprotein and is more common in young children."
    ]
  },
  {
    id: "s1-0095",
    system: "Multisystem",
    discipline: "Microbiology",
    topic: "Tuberculosis (type IV hypersensitivity)",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A recent immigrant has several weeks of productive cough, drenching night sweats, weight loss, and blood-streaked sputum. An apical cavitary infiltrate is seen on imaging, and acid-fast bacilli are present on sputum smear.\n\n**[IMAGE: lung histology showing a caseating granuloma with central necrosis, epithelioid macrophages, and a Langhans giant cell]**",
    lead: "Which immune mechanism drives the granulomatous tissue findings?",
    options: [
      "Immediate (type I) IgE-mediated hypersensitivity",
      "Cell-mediated (type IV) hypersensitivity with granuloma formation",
      "Immune-complex (type III) deposition",
      "Antibody-mediated (type II) cytotoxicity",
      "Direct exotoxin-mediated cytolysis"
    ],
    answer: 1,
    exp: "Chronic cough, night sweats, an apical cavity, and acid-fast bacilli with caseating granulomas indicate tuberculosis. Containment depends on a cell-mediated type IV response in which Th1 cells release interferon-gamma to activate macrophages, forming granulomas with Langhans giant cells and central caseation. Reactivation favors the apices because of their high oxygen tension.",
    why: [
      "Type I hypersensitivity mediates allergy and anaphylaxis, not granuloma formation.",
      "Correct: a type IV cell-mediated response builds the caseating granulomas that contain the organism.",
      "Type III immune-complex deposition underlies conditions such as serum sickness and postinfectious glomerulonephritis.",
      "Type II antibody-mediated cytotoxicity does not produce these granulomas.",
      "Mycobacterium tuberculosis does not cause this disease through a classic exotoxin."
    ]
  },
  {
    id: "s1-0096",
    system: "Multisystem",
    discipline: "Pathology",
    topic: "Multiple myeloma",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 68-year-old has fatigue, bone pain, and recurrent infections. Radiographs show punched-out lytic lesions, the smear shows red cells stacked like coins, and urine contains free light chains.\n\n| Test | Value | Reference |\n|---|---|---|\n| Calcium | high | 8.5-10.2 mg/dL |\n| Creatinine | elevated | 0.6-1.2 mg/dL |\n| Serum protein electrophoresis | monoclonal spike | polyclonal |",
    lead: "Which process best explains these findings?",
    options: [
      "Reactive polyclonal gammopathy from chronic infection",
      "Chronic lymphocytic leukemia",
      "Proliferation of Reed-Sternberg cells",
      "Metastatic carcinoma with osteoblastic lesions",
      "Clonal plasma cell proliferation producing monoclonal immunoglobulin"
    ],
    answer: 4,
    exp: "Hypercalcemia, renal insufficiency, anemia, and lytic bone lesions with a monoclonal spike, light-chain proteinuria, and rouleaux define multiple myeloma. A clonal proliferation of plasma cells secretes monoclonal immunoglobulin, and excess light chains injure the kidney while cytokines activate osteoclasts, causing lytic lesions and hypercalcemia. These features are summarized by the CRAB mnemonic.",
    why: [
      "A reactive process produces a broad polyclonal gammopathy, not a monoclonal spike with lytic lesions.",
      "Chronic lymphocytic leukemia shows lymphocytosis with smudge cells, not a monoclonal spike and lytic bone disease.",
      "Reed-Sternberg cells define Hodgkin lymphoma, which presents with lymphadenopathy.",
      "Most carcinoma metastases and the described monoclonal spike do not fit osteoblastic metastatic disease.",
      "Correct: a clonal plasma cell proliferation secreting monoclonal immunoglobulin causes the CRAB features of myeloma."
    ]
  },
  {
    id: "s1-0097",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Type I error",
    difficulty: "easy",
    anchor: null,
    vignette: "A trial reports that a new drug is superior to placebo, rejecting the null hypothesis at a significance level of 0.05. In reality, the drug has no true effect.",
    lead: "Which best describes what has occurred?",
    options: [
      "A type II error",
      "Increased statistical power",
      "A type I error",
      "Selection bias",
      "Confounding"
    ],
    answer: 2,
    exp: "Concluding there is a treatment effect when none truly exists means falsely rejecting a true null hypothesis, which is a type I error. Its probability is set by alpha, commonly 0.05. A type II error is failing to detect a real effect, and power (1 minus beta) is the probability of detecting a true effect.",
    why: [
      "A type II error is a false negative, missing a real effect, the opposite of this situation.",
      "Power is the ability to detect a true effect and does not describe a false-positive conclusion.",
      "Correct: falsely rejecting a true null hypothesis is a type I error, with probability alpha.",
      "Selection bias is a systematic error in how participants are enrolled, not a false-positive statistical result.",
      "Confounding is distortion by a third variable, not the definition of a false-positive conclusion."
    ]
  },
  {
    id: "s1-0098",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Incidence versus prevalence",
    difficulty: "moderate",
    anchor: null,
    vignette: "A new treatment prolongs survival for a chronic disease but neither prevents new cases nor cures anyone. Investigators track measures of disease frequency in the population over subsequent years.",
    lead: "Which change is most likely to occur?",
    options: [
      "Prevalence increases while incidence remains unchanged",
      "Incidence increases while prevalence falls",
      "Both incidence and prevalence fall",
      "Incidence rises while prevalence remains unchanged",
      "Prevalence falls because patients survive longer"
    ],
    answer: 0,
    exp: "Prevalence approximately equals incidence multiplied by average disease duration. A treatment that extends survival without preventing new cases increases the average duration of disease, so prevalence rises while incidence, the rate of new cases, stays the same. Only prevention or cure would lower prevalence.",
    why: [
      "Correct: longer survival increases duration and therefore prevalence, while incidence is unchanged.",
      "Incidence depends on new cases and would not rise from a survival-prolonging treatment.",
      "Both measures falling would require prevention or cure, which this treatment does not provide.",
      "Incidence is unaffected by a treatment that only prolongs survival.",
      "Longer survival raises prevalence rather than lowering it."
    ]
  },
  {
    id: "s1-0099",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Mandatory reporting of suspected child abuse",
    difficulty: "easy",
    anchor: null,
    vignette: "A toddler is brought in with multiple bruises of different ages and a spiral fracture of a long bone. The caregiver's explanation of how the injuries occurred is inconsistent with the physical findings.",
    lead: "Which is the most appropriate action?",
    options: [
      "Discharge the child with routine follow-up",
      "Directly confront and accuse the caregiver",
      "Only document the findings in the chart",
      "Report the suspicion of child abuse to child protective services",
      "Wait for definitive proof before acting"
    ],
    answer: 3,
    exp: "Physicians are mandatory reporters and must notify child protective services when there is a reasonable suspicion of child abuse. Bruises of varying ages, a spiral fracture, and a history inconsistent with the injuries meet that threshold. Reporting requires reasonable suspicion rather than proof, and the child's safety is the priority.",
    why: [
      "Discharging the child leaves a potentially abused patient in danger.",
      "Accusing the caregiver is not the physician's role and may escalate the situation.",
      "Documentation alone does not satisfy the legal duty to report.",
      "Correct: a reasonable suspicion of abuse requires a report to child protective services.",
      "Waiting for definitive proof is not required and risks further harm."
    ]
  },
  {
    id: "s1-0100",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "HIV partner notification",
    difficulty: "moderate",
    anchor: null,
    vignette: "A patient is newly diagnosed with HIV. He has a regular sexual partner who is unaware of the diagnosis, and he states that he does not intend to tell the partner or to use protection.",
    lead: "Which is the most appropriate action?",
    options: [
      "Immediately notify the partner without informing the patient",
      "Counsel the patient to disclose and use protection, and engage public health partner-notification services",
      "Keep the information strictly confidential and take no further steps",
      "Decline to continue caring for the patient",
      "Report the patient to law enforcement"
    ],
    answer: 1,
    exp: "The physician should first counsel the patient to disclose to the partner and to use protective measures, and should involve public health partner-notification services, which can confidentially notify at-risk partners. This approach balances patient confidentiality with the duty to protect an identifiable third party from serious harm. Public health channels, rather than unilateral disclosure, are the appropriate route.",
    why: [
      "Unilateral notification without first counseling the patient and engaging public health is not the best initial step.",
      "Correct: counsel the patient to disclose and use protection while engaging public health partner-notification services.",
      "Doing nothing ignores the serious, foreseeable risk to an identifiable partner.",
      "Abandoning the patient is unethical and does not address the risk.",
      "Law enforcement is not the appropriate channel for partner notification."
    ]
  }
];
