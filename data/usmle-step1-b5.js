/*
 * Rounds Codex - USMLE Step 1 question bank, Batch 5 (25 items)
 * Blueprint-weighted mix. All vignettes original; source used for facts only.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP1_B5 = [
  {
    id: "s1-0101",
    system: "General Principles",
    discipline: "Biochemistry",
    topic: "Tay-Sachs disease",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 6-month-old of Ashkenazi Jewish descent has lost previously acquired motor milestones and startles excessively to sound. He is hypotonic. There is no hepatosplenomegaly.\n\n**[IMAGE: fundoscopy showing a cherry-red spot at the macula]**",
    lead: "A deficiency of which enzyme is most likely?",
    options: [
      "Sphingomyelinase",
      "Glucocerebrosidase",
      "Alpha-galactosidase A",
      "Hexosaminidase A",
      "Galactocerebrosidase"
    ],
    answer: 3,
    exp: "Progressive neurodegeneration with an exaggerated startle, a cherry-red macula, and no hepatosplenomegaly is Tay-Sachs disease from deficient hexosaminidase A. GM2 ganglioside accumulates within neurons, causing the neurologic decline. The absence of hepatosplenomegaly distinguishes it from Niemann-Pick disease.",
    why: [
      "Sphingomyelinase deficiency causes Niemann-Pick disease, which has a cherry-red spot but also hepatosplenomegaly.",
      "Glucocerebrosidase deficiency causes Gaucher disease, with hepatosplenomegaly and bone crises.",
      "Alpha-galactosidase A deficiency causes Fabry disease, with neuropathic pain and angiokeratomas.",
      "Correct: hexosaminidase A deficiency causes GM2 accumulation and Tay-Sachs disease without hepatosplenomegaly.",
      "Galactocerebrosidase deficiency causes Krabbe disease, with globoid cells and peripheral neuropathy."
    ]
  },
  {
    id: "s1-0102",
    system: "General Principles",
    discipline: "Genetics",
    topic: "Down syndrome",
    difficulty: "moderate",
    anchor: null,
    vignette: "A newborn has hypotonia, upslanting palpebral fissures with epicanthal folds, a flat nasal bridge, a single transverse palmar crease, and a murmur from an atrioventricular septal defect. Bilious vomiting leads to imaging showing duodenal atresia. The mother is 41 years old.",
    lead: "Which mechanism most commonly underlies this condition?",
    options: [
      "A robertsonian translocation inherited from a parent",
      "Meiotic nondisjunction producing trisomy 21, associated with advanced maternal age",
      "Postzygotic mosaicism",
      "A microdeletion of chromosome 5p",
      "Uniparental disomy of chromosome 15"
    ],
    answer: 1,
    exp: "These features indicate Down syndrome, which most often results from maternal meiotic nondisjunction producing trisomy 21. The risk rises with advancing maternal age. Associated findings include atrioventricular septal defects, duodenal atresia, and increased risks of acute leukemia and early Alzheimer disease.",
    why: [
      "A robertsonian translocation causes a minority of cases and is not maternal-age dependent.",
      "Correct: maternal meiotic nondisjunction is the most common cause and increases with maternal age.",
      "Mosaicism accounts for only a small fraction of cases.",
      "A 5p deletion causes cri-du-chat syndrome, not Down syndrome.",
      "Uniparental disomy of chromosome 15 causes Prader-Willi or Angelman syndrome."
    ]
  },
  {
    id: "s1-0103",
    system: "General Principles",
    discipline: "Biochemistry",
    topic: "Vitamin B6 deficiency from isoniazid",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A patient being treated with isoniazid for tuberculosis develops numbness and tingling in the feet and hands over several weeks.\n\n| Test | Value | Reference |\n|---|---|---|\n| Mean corpuscular volume | low | 80-100 |\n| Bone marrow iron stain | ringed sideroblasts | none |",
    lead: "A deficiency of which vitamin is most likely responsible?",
    options: [
      "Vitamin B12",
      "Folate",
      "Iron",
      "Thiamine",
      "Vitamin B6 (pyridoxine)"
    ],
    answer: 4,
    exp: "Isoniazid depletes pyridoxine (vitamin B6), producing peripheral neuropathy, and can cause seizures and a sideroblastic anemia. Vitamin B6 is a cofactor for aminolevulinic acid synthase, the first step of heme synthesis, so its deficiency causes ringed sideroblasts. Coadministering pyridoxine prevents these effects.",
    why: [
      "Vitamin B12 deficiency causes a macrocytic anemia with neurologic disease, not a microcytic sideroblastic anemia.",
      "Folate deficiency causes a macrocytic anemia without neuropathy.",
      "Iron deficiency causes a microcytic anemia but not neuropathy or the isoniazid association.",
      "Thiamine deficiency causes Wernicke encephalopathy and beriberi, not sideroblastic anemia.",
      "Correct: isoniazid-induced pyridoxine deficiency causes peripheral neuropathy and sideroblastic anemia."
    ]
  },
  {
    id: "s1-0104",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Immunology",
    topic: "Anaphylaxis (type I hypersensitivity)",
    difficulty: "moderate",
    anchor: null,
    vignette: "Minutes after a bee sting, a previously sensitized person develops diffuse hives, swelling of the lips and tongue, wheezing, and hypotension.",
    lead: "Which mechanism best explains this reaction?",
    options: [
      "IgE-mediated mast cell and basophil degranulation releasing preformed histamine",
      "IgG and IgM antibodies binding cell-surface antigens",
      "Deposition of antigen-antibody immune complexes activating complement",
      "T-cell-mediated delayed hypersensitivity",
      "Direct activation of complement without antibody"
    ],
    answer: 0,
    exp: "Anaphylaxis is a type I (immediate) hypersensitivity reaction. On re-exposure, allergen cross-links IgE bound to pre-sensitized mast cells and basophils, triggering degranulation with histamine and other mediators. The result is vasodilation, bronchoconstriction, and angioedema, treated with intramuscular epinephrine.",
    why: [
      "Correct: allergen cross-linking of IgE on mast cells and basophils releases histamine, causing immediate anaphylaxis.",
      "IgG and IgM against cell-surface antigens describes type II hypersensitivity, such as autoimmune hemolysis.",
      "Immune-complex deposition describes type III hypersensitivity, such as serum sickness.",
      "T-cell-mediated delayed hypersensitivity describes type IV reactions, such as contact dermatitis.",
      "Direct complement activation without antibody is not the mechanism of allergic anaphylaxis."
    ]
  },
  {
    id: "s1-0105",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Pathology",
    topic: "Thrombotic thrombocytopenic purpura",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 40-year-old woman has fatigue, scattered petechiae, confusion, fever, and decreased urine output. Laboratory testing shows anemia, thrombocytopenia, and elevated lactate dehydrogenase, with normal prothrombin and partial thromboplastin times.\n\n**[IMAGE: peripheral smear showing fragmented red cells (schistocytes) with few platelets]**",
    lead: "Which defect best explains this disorder?",
    options: [
      "Deficiency of factor VIII",
      "Antibodies against platelet glycoprotein IIb/IIIa",
      "Deficiency of ADAMTS13, leaving large von Willebrand factor multimers",
      "Widespread activation of coagulation consuming clotting factors",
      "Endothelial injury from bacterial Shiga toxin"
    ],
    answer: 2,
    exp: "Microangiopathic hemolytic anemia with schistocytes, thrombocytopenia, neurologic changes, fever, and renal involvement, with normal coagulation times, is thrombotic thrombocytopenic purpura. Deficiency or inhibition of ADAMTS13 leaves ultralarge von Willebrand factor multimers that drive platelet microthrombi. Normal prothrombin and partial thromboplastin times distinguish it from disseminated intravascular coagulation.",
    why: [
      "Factor VIII deficiency causes hemophilia with deep bleeding, not a microangiopathic hemolytic process.",
      "Antibodies against glycoprotein IIb/IIIa cause immune thrombocytopenia with isolated low platelets and no schistocytes.",
      "Correct: ADAMTS13 deficiency leaves large von Willebrand factor multimers that cause platelet microthrombi and schistocytes.",
      "Consumptive coagulation is disseminated intravascular coagulation, which prolongs the prothrombin and partial thromboplastin times.",
      "Shiga toxin causes hemolytic uremic syndrome, typically in children with more prominent renal failure."
    ]
  },
  {
    id: "s1-0106",
    system: "Behavioral Health & Nervous System",
    discipline: "Pathology",
    topic: "Epidural hematoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A young man is struck on the side of the head and briefly loses consciousness, then feels well for an hour before rapidly deteriorating with severe headache, vomiting, and a dilated pupil on one side. Imaging shows a temporal bone fracture.\n\n**[IMAGE: head CT showing a biconvex (lens-shaped) hyperdensity that does not cross suture lines]**",
    lead: "Injury to which vessel is most likely?",
    options: [
      "A bridging cortical vein",
      "The middle meningeal artery",
      "A saccular aneurysm of the circle of Willis",
      "A lenticulostriate artery",
      "The superior sagittal sinus"
    ],
    answer: 1,
    exp: "A lucid interval followed by rapid decline with a lens-shaped hemorrhage that does not cross sutures is an epidural hematoma, classically from a torn middle meningeal artery with a temporal bone fracture. Arterial bleeding expands quickly and can cause uncal herniation with a third nerve palsy. It is a neurosurgical emergency.",
    why: [
      "Bridging vein rupture causes a subdural hematoma, which is crescent-shaped and crosses suture lines.",
      "Correct: middle meningeal artery injury causes the biconvex epidural hematoma with a lucid interval.",
      "A ruptured saccular aneurysm causes subarachnoid hemorrhage with a thunderclap headache.",
      "A lenticulostriate artery rupture causes hypertensive intraparenchymal hemorrhage.",
      "Superior sagittal sinus thrombosis causes venous infarction and headache, not this arterial epidural collection."
    ]
  },
  {
    id: "s1-0107",
    system: "Behavioral Health & Nervous System",
    discipline: "Pharmacology",
    topic: "Serotonin syndrome",
    difficulty: "moderate",
    anchor: null,
    vignette: "A patient taking a selective serotonin reuptake inhibitor is given tramadol for pain. Within hours she becomes agitated and diaphoretic, with tremor, hyperreflexia, sustained clonus that is worse in the legs, and a temperature of 39.5 C.",
    lead: "Which mechanism best explains this presentation?",
    options: [
      "Dopamine receptor blockade causing rigidity and hyperthermia",
      "Anticholinergic toxicity",
      "Sympathetic overactivity from a stimulant",
      "Excess central serotonergic activity from combined serotonergic drugs",
      "A volatile anesthetic triggering malignant hyperthermia"
    ],
    answer: 3,
    exp: "Rapid onset of neuromuscular hyperactivity (clonus and hyperreflexia), autonomic instability, and altered mental status after combining serotonergic drugs is serotonin syndrome. Agents such as selective serotonin reuptake inhibitors combined with tramadol, monoamine oxidase inhibitors, or linezolid raise synaptic serotonin excessively. Treatment is stopping the drugs, supportive care, and cyproheptadine.",
    why: [
      "Dopamine blockade causes neuroleptic malignant syndrome, with lead-pipe rigidity, hyporeflexia, and a slower onset.",
      "Anticholinergic toxicity causes dry skin, urinary retention, and mydriasis, not clonus and hyperreflexia.",
      "Stimulant sympathetic overactivity does not typically cause the sustained clonus characteristic of serotonin syndrome.",
      "Correct: excess serotonergic activity from combined agents produces the hyperreflexia, clonus, and hyperthermia.",
      "Malignant hyperthermia follows volatile anesthetics or succinylcholine, with masseter rigidity, not serotonergic drugs."
    ]
  },
  {
    id: "s1-0108",
    system: "Behavioral Health & Nervous System",
    discipline: "Psychiatry",
    topic: "Major depressive disorder",
    difficulty: "easy",
    anchor: null,
    vignette: "A 35-year-old woman reports six weeks of depressed mood most of the day, loss of interest in activities she used to enjoy, insomnia, poor appetite with weight loss, low energy, poor concentration, and feelings of worthlessness. She sometimes thinks life is not worth living. She has never had a manic episode, and the symptoms are not due to a substance or medical condition.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Major depressive disorder",
      "Persistent depressive disorder (dysthymia)",
      "Bipolar II disorder",
      "Adjustment disorder with depressed mood",
      "Normal sadness"
    ],
    answer: 0,
    exp: "At least five depressive symptoms including depressed mood or anhedonia, present for two weeks or more and causing impairment, define a major depressive episode. This patient has the classic cluster with functional impairment and passive suicidal ideation. There is no manic history, which excludes a bipolar diagnosis.",
    why: [
      "Correct: a two-week cluster of depressive symptoms with impairment defines major depressive disorder.",
      "Persistent depressive disorder requires a milder, chronic course lasting at least two years.",
      "Bipolar II disorder requires a history of a hypomanic episode, which she lacks.",
      "Adjustment disorder follows an identifiable stressor and does not meet full criteria for major depression.",
      "These symptoms exceed normal sadness and impair functioning."
    ]
  },
  {
    id: "s1-0109",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Dermatomyositis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 52-year-old woman has several months of progressive difficulty climbing stairs and lifting her arms overhead, reflecting symmetric proximal muscle weakness. Creatine kinase is elevated.\n\n**[IMAGE: violaceous (heliotrope) discoloration of the eyelids and scaly erythematous papules over the knuckles (Gottron papules)]**",
    lead: "Which best explains her condition?",
    options: [
      "Fatigable weakness from acetylcholine receptor antibodies",
      "Degeneration of lower motor neurons",
      "Genetic deficiency of dystrophin",
      "Osteoarthritis of the proximal joints",
      "An immune-mediated inflammatory myopathy with characteristic skin findings"
    ],
    answer: 4,
    exp: "Symmetric proximal weakness with an elevated creatine kinase plus a heliotrope rash and Gottron papules is dermatomyositis, an inflammatory myopathy. Immune-mediated muscle injury (with perifascicular atrophy) and the characteristic skin findings define the disease. In adults it carries an increased risk of occult malignancy, warranting age-appropriate cancer screening.",
    why: [
      "Acetylcholine receptor antibodies cause myasthenia gravis, with fatigable weakness, a normal creatine kinase, and no rash.",
      "Lower motor neuron degeneration causes flaccid weakness without a rash or elevated creatine kinase.",
      "Dystrophin deficiency causes childhood-onset X-linked muscular dystrophy, not adult inflammatory myopathy with a rash.",
      "Osteoarthritis causes joint pain, not proximal weakness with an elevated creatine kinase and skin findings.",
      "Correct: an immune-mediated inflammatory myopathy with heliotrope and Gottron findings is dermatomyositis."
    ]
  },
  {
    id: "s1-0110",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Cutaneous squamous cell carcinoma",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 72-year-old farmer with chronic sun damage has an enlarging, ulcerated, hyperkeratotic nodule on his lower lip that arose from a scaly, rough precursor lesion. Biopsy shows nests of malignant keratinocytes with keratin pearls.",
    lead: "Which description best fits this lesion?",
    options: [
      "A pearly papule with telangiectasias and palisading basaloid nests",
      "Malignant melanocytes with high metastatic potential staged by depth",
      "Malignant keratinocytes with keratin pearls, often arising from actinic keratosis",
      "A benign waxy, stuck-on papule with horn cysts",
      "A proliferation of malignant endothelial cells"
    ],
    answer: 2,
    exp: "An ulcerated hyperkeratotic nodule on sun-exposed skin arising from actinic keratosis, with keratin pearls on histology, is cutaneous squamous cell carcinoma. It is more likely to metastasize than basal cell carcinoma, especially on the lip or ear and in immunosuppressed or transplant patients. Chronic ultraviolet exposure is the major risk factor.",
    why: [
      "A pearly telangiectatic papule with palisading basaloid nests describes basal cell carcinoma.",
      "Depth-staged malignant melanocytes describe melanoma.",
      "Correct: malignant keratinocytes with keratin pearls arising from actinic keratosis define squamous cell carcinoma.",
      "A waxy stuck-on papule with horn cysts describes benign seborrheic keratosis.",
      "Malignant endothelial proliferation describes angiosarcoma, not a keratinocyte tumor."
    ]
  },
  {
    id: "s1-0111",
    system: "Cardiovascular",
    discipline: "Pathology",
    topic: "Dilated cardiomyopathy",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 45-year-old man with heavy alcohol use has progressive exertional dyspnea, orthopnea, and leg edema. The apical impulse is displaced laterally, and an S3 gallop is present. Echocardiography shows a dilated left ventricle with a globally reduced ejection fraction and functional mitral regurgitation.",
    lead: "Which best describes the underlying abnormality?",
    options: [
      "Eccentric hypertrophy with ventricular dilation and impaired systolic contraction",
      "Concentric hypertrophy with impaired diastolic filling",
      "Dynamic outflow obstruction from asymmetric septal hypertrophy",
      "Infiltration producing a stiff ventricle with a normal cavity size",
      "Pericardial constriction limiting ventricular filling"
    ],
    answer: 0,
    exp: "A dilated, poorly contracting left ventricle with systolic heart failure, an S3, and functional mitral regurgitation is dilated cardiomyopathy. It reflects eccentric hypertrophy with chamber dilation and impaired contraction. Causes include alcohol, viral myocarditis, doxorubicin, peripartum cardiomyopathy, and genetic mutations.",
    why: [
      "Correct: eccentric hypertrophy with dilation and impaired systolic function defines dilated cardiomyopathy.",
      "Concentric hypertrophy with diastolic dysfunction describes hypertensive heart disease with preserved ejection fraction.",
      "Dynamic outflow obstruction from septal hypertrophy describes hypertrophic cardiomyopathy.",
      "A stiff ventricle with a normal cavity describes restrictive cardiomyopathy, such as amyloidosis.",
      "Pericardial constriction limits filling externally and does not dilate the ventricle."
    ]
  },
  {
    id: "s1-0112",
    system: "Cardiovascular",
    discipline: "Pharmacology",
    topic: "Beta-blocker mechanism in angina",
    difficulty: "moderate",
    anchor: null,
    vignette: "A patient with stable angina and a prior myocardial infarction is started on metoprolol. His heart rate and blood pressure decrease, and his anginal episodes become less frequent.",
    lead: "Which mechanism best explains the anti-anginal benefit?",
    options: [
      "Direct arteriolar dilation that reduces afterload",
      "An increase in myocardial contractility",
      "Blockade of beta-1 receptors, lowering heart rate and contractility to reduce myocardial oxygen demand",
      "Relief of coronary vasospasm through nitric oxide",
      "Blockade of L-type calcium channels in vascular smooth muscle"
    ],
    answer: 2,
    exp: "Beta-1 blockade lowers heart rate and contractility and slows atrioventricular conduction, reducing myocardial oxygen demand and improving the supply-demand balance in angina. Beta-blockers also improve survival after myocardial infarction and in heart failure with reduced ejection fraction. Adverse effects include bronchospasm, bradycardia, and masking of hypoglycemia.",
    why: [
      "Direct arteriolar dilation describes drugs such as hydralazine, not beta-blockers.",
      "Beta-blockers decrease, rather than increase, contractility.",
      "Correct: beta-1 blockade lowers heart rate and contractility, reducing myocardial oxygen demand.",
      "Nitrates, not beta-blockers, relieve vasospasm through nitric oxide.",
      "L-type calcium channel blockade describes calcium channel blockers."
    ]
  },
  {
    id: "s1-0113",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Acute respiratory distress syndrome",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A patient with severe sepsis develops acute, severe dyspnea and hypoxemia that does not correct with supplemental oxygen within a day. There is no clinical or echocardiographic evidence of heart failure, and the pulmonary capillary wedge pressure is normal.\n\n**[IMAGE: chest radiograph showing bilateral diffuse alveolar infiltrates]**",
    lead: "Which best describes the underlying pathophysiology?",
    options: [
      "Left heart failure causing hydrostatic pulmonary edema",
      "Reversible bronchial smooth muscle hyperreactivity",
      "Surfactant deficiency from prematurity",
      "Chronic destruction of alveolar walls",
      "Diffuse alveolar damage with increased capillary permeability and hyaline membranes"
    ],
    answer: 4,
    exp: "Acute refractory hypoxemia with bilateral infiltrates and a normal wedge pressure after sepsis is acute respiratory distress syndrome. Inflammatory injury causes diffuse alveolar damage with increased alveolar-capillary permeability, protein-rich edema, and hyaline membranes, reducing compliance. Management includes treating the cause and low-tidal-volume ventilation.",
    why: [
      "Hydrostatic edema from left heart failure produces a high wedge pressure, unlike this normal value.",
      "Bronchial hyperreactivity describes asthma, not diffuse alveolar damage.",
      "Surfactant deficiency describes neonatal respiratory distress syndrome, not this adult sepsis-related process.",
      "Chronic alveolar wall destruction describes emphysema, not an acute infiltrative process.",
      "Correct: diffuse alveolar damage with increased permeability and hyaline membranes defines acute respiratory distress syndrome."
    ]
  },
  {
    id: "s1-0114",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Membranous nephropathy",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 55-year-old man has edema, heavy proteinuria, low serum albumin, and high lipids. Testing shows antibodies to the phospholipase A2 receptor. He later develops a renal vein thrombosis.\n\n**[IMAGE: glomerular electron micrograph showing subepithelial immune deposits with basement membrane 'spikes' projecting between them]**",
    lead: "Which finding best explains his nephrotic syndrome?",
    options: [
      "Podocyte foot process effacement with normal light microscopy",
      "Subepithelial immune-complex deposits thickening the basement membrane (spike-and-dome)",
      "Mesangial deposition of IgA",
      "Crescents with linear anti-basement membrane antibody",
      "Nodular mesangial sclerosis"
    ],
    answer: 1,
    exp: "Adult nephrotic syndrome with anti-phospholipase A2 receptor antibodies and subepithelial deposits producing a spike-and-dome pattern is membranous nephropathy, the most common primary nephrotic syndrome in adults. Immune complexes deposit under the epithelium and thicken the glomerular basement membrane. It is associated with a hypercoagulable state and renal vein thrombosis, and secondary causes include lupus, hepatitis B, and solid tumors.",
    why: [
      "Foot process effacement with normal light microscopy describes minimal change disease.",
      "Correct: subepithelial deposits with basement membrane spikes define membranous nephropathy.",
      "Mesangial IgA deposition describes IgA nephropathy, typically with hematuria.",
      "Crescents with linear antibody describe anti-glomerular basement membrane disease.",
      "Nodular mesangial sclerosis describes diabetic nephropathy."
    ]
  },
  {
    id: "s1-0115",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Barrett esophagus",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 55-year-old with years of heartburn undergoes endoscopy, which shows salmon-colored mucosa extending above the gastroesophageal junction.\n\n**[IMAGE: esophageal biopsy showing intestinal-type columnar epithelium with goblet cells replacing the normal squamous epithelium]**",
    lead: "Which change has occurred, and what is the main risk?",
    options: [
      "Squamous dysplasia predisposing to squamous cell carcinoma",
      "Acute erosive esophagitis",
      "Eosinophilic infiltration from food allergy",
      "Metaplasia from squamous to intestinal columnar epithelium, predisposing to adenocarcinoma",
      "Fungal (candidal) esophagitis"
    ],
    answer: 3,
    exp: "Replacement of distal esophageal squamous epithelium by intestinal columnar epithelium with goblet cells is Barrett esophagus, a metaplastic response to chronic acid reflux. It predisposes to esophageal adenocarcinoma and warrants surveillance for dysplasia. The metaplasia is an adaptive but premalignant change.",
    why: [
      "Squamous cell carcinoma is linked to smoking and alcohol, not to Barrett metaplasia.",
      "Acute erosive esophagitis is an acute injury, not columnar metaplasia.",
      "Eosinophilic esophagitis is an allergic disorder with rings and furrows, not goblet-cell metaplasia.",
      "Correct: metaplasia to intestinal columnar epithelium predisposes to esophageal adenocarcinoma.",
      "Candidal esophagitis produces white plaques in immunocompromised hosts, not this metaplasia."
    ]
  },
  {
    id: "s1-0116",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Colorectal adenocarcinoma",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 68-year-old has fatigue with iron-deficiency anemia, occult blood in the stool, weight loss, and a change in bowel habits. Colonoscopy reveals an annular, constricting mass, and he has a history of adenomatous polyps.",
    lead: "Which sequence best explains this cancer's development?",
    options: [
      "Stepwise adenoma-to-carcinoma progression through APC, then KRAS, then TP53 mutations",
      "Molecular mimicry following a prior infection",
      "A single germline BRCA mutation",
      "Chronic acid reflux causing metaplasia",
      "A t(8;14) translocation activating MYC"
    ],
    answer: 0,
    exp: "Most colorectal cancers develop through the adenoma-carcinoma sequence, in which loss of APC initiates adenoma formation, KRAS activation promotes growth, and TP53 loss drives progression to carcinoma. Older adults may present with iron-deficiency anemia, occult bleeding, and an apple-core lesion. Screening detects and removes precursor adenomas.",
    why: [
      "Correct: accumulation of APC, KRAS, and TP53 mutations drives the adenoma-carcinoma sequence.",
      "Molecular mimicry underlies conditions such as rheumatic fever, not colorectal cancer.",
      "BRCA mutations predispose to breast and ovarian cancer.",
      "Chronic acid reflux causes Barrett esophagus and esophageal adenocarcinoma.",
      "A t(8;14) translocation characterizes Burkitt lymphoma."
    ]
  },
  {
    id: "s1-0117",
    system: "Reproductive & Endocrine",
    discipline: "Physiology",
    topic: "Acromegaly",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 45-year-old reports that his rings and shoes no longer fit, along with coarsening facial features, a prominent jaw, a deepening voice, headaches, and difficulty seeing to the sides. He has new hypertension and diabetes. Serum insulin-like growth factor 1 is elevated.",
    lead: "Which finding would best confirm the diagnosis?",
    options: [
      "Suppression of insulin-like growth factor 1 after exercise",
      "An elevated prolactin level with galactorrhea",
      "Failure of growth hormone to suppress after an oral glucose load",
      "An elevated thyroid-stimulating hormone with high thyroxine",
      "A low cortisol after dexamethasone"
    ],
    answer: 2,
    exp: "Acral and soft-tissue overgrowth with elevated insulin-like growth factor 1 in an adult is acromegaly, usually from a growth hormone-secreting pituitary adenoma. Normally glucose suppresses growth hormone, so failure of growth hormone to suppress during an oral glucose tolerance test confirms the diagnosis. Mass effect from the adenoma can cause bitemporal hemianopia.",
    why: [
      "Exercise raises growth hormone and does not confirm the diagnosis.",
      "An elevated prolactin with galactorrhea suggests a prolactinoma, not acromegaly.",
      "Correct: failure of growth hormone to suppress after oral glucose confirms acromegaly.",
      "Elevated thyroid-stimulating hormone with high thyroxine points to a thyroid disorder.",
      "Cortisol suppression testing evaluates Cushing syndrome, not acromegaly."
    ]
  },
  {
    id: "s1-0118",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Papillary thyroid carcinoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 35-year-old woman has a painless thyroid nodule and a history of head and neck radiation in childhood. Fine-needle aspiration is performed.\n\n**[IMAGE: thyroid cytology showing enlarged cells with pale, ground-glass ('Orphan Annie eye') nuclei, nuclear grooves, and psammoma bodies]**",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Medullary thyroid carcinoma",
      "Anaplastic thyroid carcinoma",
      "Follicular thyroid carcinoma",
      "Hurthle cell adenoma",
      "Papillary thyroid carcinoma"
    ],
    answer: 4,
    exp: "Ground-glass Orphan Annie eye nuclei, nuclear grooves, and psammoma bodies are hallmarks of papillary thyroid carcinoma, the most common thyroid malignancy. It is associated with prior radiation exposure and RET or BRAF mutations. It spreads through lymphatics but generally has an excellent prognosis.",
    why: [
      "Medullary carcinoma arises from parafollicular C cells, secretes calcitonin, and shows amyloid, without these nuclear features.",
      "Anaplastic carcinoma is an undifferentiated, aggressive tumor of older adults.",
      "Follicular carcinoma spreads hematogenously and is diagnosed by capsular or vascular invasion, not these nuclear findings.",
      "A Hurthle cell adenoma is composed of oncocytic cells and lacks these nuclear features.",
      "Correct: Orphan Annie eye nuclei, grooves, and psammoma bodies define papillary thyroid carcinoma."
    ]
  },
  {
    id: "s1-0119",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Complete hydatidiform mole",
    difficulty: "hard",
    anchor: "image",
    vignette: "A pregnant woman has a uterus larger than expected for dates, severe nausea, early signs of preeclampsia, and vaginal passage of grape-like tissue. Her beta-human chorionic gonadotropin is markedly elevated.\n\n**[IMAGE: pelvic ultrasound with a 'snowstorm' (cluster-of-grapes) appearance and no identifiable fetus]**",
    lead: "Which best characterizes a complete mole?",
    options: [
      "A triploid karyotype with identifiable fetal parts",
      "An ectopic implantation in the fallopian tube",
      "A normal twin intrauterine pregnancy",
      "Diploid, entirely paternal (46,XX) chromosomes with no fetus and diffuse trophoblastic proliferation",
      "A benign leiomyoma of the uterus"
    ],
    answer: 3,
    exp: "A complete hydatidiform mole is typically 46,XX of entirely paternal origin, arising when an empty ovum is fertilized and the paternal genome duplicates. There is diffuse trophoblastic proliferation with no fetus, a markedly elevated beta-human chorionic gonadotropin, and a snowstorm ultrasound. It carries a higher risk of progression to choriocarcinoma than a partial mole.",
    why: [
      "A triploid karyotype with fetal parts describes a partial mole, which has lower beta-human chorionic gonadotropin.",
      "An ectopic pregnancy implants outside the uterus and does not produce this molar appearance.",
      "A normal twin pregnancy shows fetal structures, unlike a complete mole.",
      "Correct: a diploid, entirely paternal 46,XX conceptus with no fetus and diffuse trophoblast proliferation is a complete mole.",
      "A leiomyoma is a benign smooth muscle tumor unrelated to trophoblastic disease."
    ]
  },
  {
    id: "s1-0120",
    system: "Multisystem",
    discipline: "Microbiology",
    topic: "Secondary syphilis",
    difficulty: "easy",
    anchor: "image",
    vignette: "Several weeks after a painless genital ulcer resolved on its own, a young adult develops a diffuse maculopapular rash, generalized lymphadenopathy, and moist, wart-like lesions in the groin. A nontreponemal serologic test is reactive.\n\n**[IMAGE: symmetric coppery maculopapular rash involving the palms and soles]**",
    lead: "Which organism is responsible?",
    options: [
      "Haemophilus ducreyi",
      "Treponema pallidum",
      "Herpes simplex virus type 2",
      "Chlamydia trachomatis (L serovars)",
      "Neisseria gonorrhoeae"
    ],
    answer: 1,
    exp: "A painless primary ulcer followed weeks later by a rash involving the palms and soles, with condylomata lata and lymphadenopathy, is secondary syphilis caused by Treponema pallidum. Diagnosis uses nontreponemal tests (RPR or VDRL) confirmed by treponemal tests. Penicillin is the treatment.",
    why: [
      "Haemophilus ducreyi causes chancroid, a painful genital ulcer.",
      "Correct: Treponema pallidum causes the painless chancre and the palm-and-sole rash of secondary syphilis.",
      "Herpes simplex virus type 2 causes painful vesicles and ulcers, not this rash.",
      "Chlamydia L serovars cause lymphogranuloma venereum with lymphadenopathy but not a palm-and-sole rash.",
      "Neisseria gonorrhoeae causes urethritis and cervicitis, not this presentation."
    ]
  },
  {
    id: "s1-0121",
    system: "Multisystem",
    discipline: "Genetics",
    topic: "Neurofibromatosis type 1",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A child has multiple flat, light-brown skin patches and freckling in the axillae, along with several soft skin nodules and pigmented iris hamartomas. An optic pathway glioma is found, and a parent is similarly affected.\n\n**[IMAGE: multiple cafe-au-lait macules with cutaneous neurofibromas]**",
    lead: "A mutation in which gene is most likely responsible?",
    options: [
      "NF1 (neurofibromin) on chromosome 17",
      "NF2 (merlin) on chromosome 22",
      "TSC1 or TSC2",
      "VHL",
      "RET"
    ],
    answer: 0,
    exp: "Cafe-au-lait macules, axillary freckling, neurofibromas, Lisch nodules, and an optic glioma indicate neurofibromatosis type 1. It is an autosomal dominant disorder caused by mutation of the NF1 gene on chromosome 17, which encodes neurofibromin, a negative regulator of Ras. Patients also have an increased risk of pheochromocytoma.",
    why: [
      "Correct: an NF1 (neurofibromin) mutation on chromosome 17 causes neurofibromatosis type 1.",
      "NF2 mutations cause bilateral vestibular schwannomas, not this cutaneous picture.",
      "TSC1 or TSC2 mutations cause tuberous sclerosis, with ash-leaf spots and seizures.",
      "VHL mutations cause hemangioblastomas and renal cell carcinoma.",
      "RET mutations underlie multiple endocrine neoplasia type 2 and medullary thyroid carcinoma."
    ]
  },
  {
    id: "s1-0122",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Relative risk from a cohort study",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A cohort study follows exposed and unexposed groups for the development of a disease.\n\n| Group | Disease | No disease |\n|---|---|---|\n| Exposed | 40 | 160 |\n| Unexposed | 10 | 190 |",
    lead: "What is the relative risk of disease with exposure?",
    options: [
      "0.25",
      "2",
      "4",
      "8",
      "0.05"
    ],
    answer: 2,
    exp: "Relative risk is the risk in the exposed divided by the risk in the unexposed. The risk in the exposed is 40 of 200, or 0.20, and the risk in the unexposed is 10 of 200, or 0.05. Dividing gives 0.20 over 0.05, which equals 4, so exposed individuals have four times the risk.",
    why: [
      "0.25 is the inverse of the correct relative risk.",
      "2 does not result from the correct calculation.",
      "Correct: relative risk = (40/200) / (10/200) = 0.20 / 0.05 = 4.",
      "8 does not result from the correct calculation.",
      "0.05 is the risk in the unexposed group, not the relative risk."
    ]
  },
  {
    id: "s1-0123",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Hawthorne effect",
    difficulty: "easy",
    anchor: null,
    vignette: "In a study of hand-hygiene compliance, hospital staff wash their hands far more often when they know research observers are present than at other times.",
    lead: "Which effect does this best illustrate?",
    options: [
      "Lead-time bias",
      "Recall bias",
      "Confounding",
      "Selection bias",
      "The Hawthorne effect"
    ],
    answer: 4,
    exp: "The Hawthorne effect is the tendency of study subjects to change their behavior because they know they are being observed. It threatens validity when the outcome depends on behavior. Blinding of observers or unobtrusive measurement can reduce it.",
    why: [
      "Lead-time bias concerns earlier detection making survival appear longer, unrelated to being observed.",
      "Recall bias concerns differential accuracy of remembered exposures.",
      "Confounding is distortion by a third variable, not a reaction to observation.",
      "Selection bias arises from nonrandom enrollment, not from being watched.",
      "Correct: changing behavior because of being observed is the Hawthorne effect."
    ]
  },
  {
    id: "s1-0124",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Honoring an advance directive",
    difficulty: "moderate",
    anchor: null,
    vignette: "A patient completed a valid living will stating that he would not want mechanical ventilation if he had an irreversible terminal condition. He is now unconscious from end-stage disease, and a decision about intubation is required. His family asks that he be intubated anyway.",
    lead: "Which is the most appropriate action?",
    options: [
      "Intubate because the family requests it",
      "Follow the patient's advance directive and withhold mechanical ventilation",
      "Seek a court order to override the directive",
      "Ask the family to sign consent for intubation",
      "Intubate temporarily while the team decides"
    ],
    answer: 1,
    exp: "A valid advance directive expresses the patient's own autonomous wishes and should be honored when he loses capacity, taking precedence over family preferences. This directive declines mechanical ventilation for exactly this situation, so intubation should be withheld and care refocused on comfort. Overriding it would violate the patient's autonomy.",
    why: [
      "The family's wishes do not override the patient's valid, applicable directive.",
      "Correct: the valid advance directive should be followed, withholding mechanical ventilation.",
      "A court order is unnecessary when the directive is valid and clearly applies.",
      "Family consent cannot authorize treatment the patient explicitly declined.",
      "Even temporary intubation would act against the patient's stated wishes."
    ]
  },
  {
    id: "s1-0125",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Reporting an impaired colleague",
    difficulty: "easy",
    anchor: null,
    vignette: "A resident notices that a colleague repeatedly smells of alcohol while on duty, has slurred speech, and has recently made medication errors during patient care.",
    lead: "Which is the most appropriate action?",
    options: [
      "Say nothing to protect the colleague's career",
      "Confront the colleague privately and agree to keep it secret",
      "Wait until a patient is clearly harmed before acting",
      "Report the impaired colleague through the appropriate institutional channel",
      "Quietly cover the colleague's shifts to hide the problem"
    ],
    answer: 3,
    exp: "An impaired physician endangers patients, and there is an ethical and often legal duty to report suspected impairment through appropriate channels such as a supervisor or a physician health program. Reporting protects patients and directs the colleague toward evaluation and treatment. Concealing the problem or waiting for harm is not acceptable.",
    why: [
      "Silence leaves patients at risk and neglects the duty to report.",
      "A private agreement to keep it secret does not ensure evaluation or patient safety.",
      "Waiting for a patient to be harmed is unacceptable when the risk is already apparent.",
      "Correct: report the impaired colleague through the appropriate institutional channel to protect patients.",
      "Covering shifts conceals the problem and allows ongoing risk to patients."
    ]
  }
];
