/*
 * Rounds Codex - USMLE Step 1 question bank, Batch 7 (25 items)
 * Blueprint-weighted mix. All vignettes original; source used for facts only.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP1_B7 = [
  {
    id: "s1-0151",
    system: "General Principles",
    discipline: "Biochemistry",
    topic: "Von Gierke disease (glycogen storage disease type I)",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 6-month-old infant is evaluated for poor growth and recurrent episodes of lethargy and sweating that resolve with feeding. She has a doll-like face with fat cheeks, thin extremities, and a markedly protuberant abdomen with massive hepatomegaly. Symptoms are worst after longer intervals between feeds.\n\n| Test | Value | Reference |\n|---|---|---|\n| Fasting glucose | 38 mg/dL | 60-100 |\n| Lactate | markedly elevated | low |\n| Uric acid | elevated | normal |\n| Triglycerides | markedly elevated | normal |",
    lead: "A deficiency of which enzyme best explains these findings?",
    options: [
      "Lysosomal acid alpha-glucosidase",
      "Muscle glycogen phosphorylase",
      "Glucose-6-phosphatase",
      "Glycogen debranching enzyme",
      "Glycogen branching enzyme"
    ],
    answer: 2,
    exp: "Severe fasting hypoglycemia with massive hepatomegaly, lactic acidosis, hyperuricemia, and hypertriglyceridemia in an infant is von Gierke disease (glycogen storage disease type I) from glucose-6-phosphatase deficiency. Because the final step of both glycogenolysis and gluconeogenesis is blocked, the liver cannot release free glucose, so fasting causes profound hypoglycemia. Accumulated glucose-6-phosphate is shunted toward lactate, uric acid, and lipid synthesis.",
    why: [
      "Lysosomal acid alpha-glucosidase deficiency causes Pompe disease with cardiomegaly and hypotonia but normal blood glucose.",
      "Muscle glycogen phosphorylase deficiency causes McArdle disease with exercise intolerance and normal fasting glucose.",
      "Correct: glucose-6-phosphatase deficiency blocks hepatic glucose release, producing fasting hypoglycemia, lactic acidosis, hyperuricemia, and hyperlipidemia.",
      "Debranching enzyme deficiency (Cori disease) causes milder hypoglycemia with accumulation of limit dextrin and less prominent lactic acidosis.",
      "Branching enzyme deficiency (Andersen disease) causes cirrhosis and failure to thrive rather than this severe hypoglycemic, lactic acidosis picture."
    ]
  },
  {
    id: "s1-0152",
    system: "General Principles",
    discipline: "Pharmacology",
    topic: "Cyanide toxicity (cytochrome c oxidase inhibition)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 58-year-old man in the intensive care unit is treated for a hypertensive emergency with a prolonged high-dose infusion of sodium nitroprusside. Over several hours he becomes confused and tachypneic. His skin is flushed, his venous blood appears unusually bright red, and laboratory testing shows a rising lactate with a high anion gap metabolic acidosis despite a normal arterial oxygen tension.",
    lead: "Which mechanism best explains this toxicity?",
    options: [
      "Inhibition of cytochrome c oxidase in the electron transport chain",
      "Uncoupling of oxidative phosphorylation from the proton gradient",
      "Irreversible inhibition of mitochondrial ATP synthase",
      "Blockade of the adenine nucleotide translocase",
      "Inhibition of NADH dehydrogenase at complex I"
    ],
    answer: 0,
    exp: "Prolonged nitroprusside can liberate cyanide, which binds the ferric iron of cytochrome c oxidase (complex IV) and halts the electron transport chain. Cells cannot use oxygen, so they shift to anaerobic metabolism, producing lactic acidosis, while venous blood stays highly oxygenated because tissues fail to extract oxygen. Treatment includes hydroxocobalamin or nitrites plus thiosulfate.",
    why: [
      "Correct: cyanide inhibits cytochrome c oxidase (complex IV), blocking oxygen use and forcing anaerobic metabolism with lactic acidosis.",
      "Uncouplers such as 2,4-dinitrophenol dissipate the proton gradient and generate heat rather than blocking electron flow at complex IV.",
      "ATP synthase inhibition (as by oligomycin) is not the mechanism of cyanide, which acts one step earlier at complex IV.",
      "The adenine nucleotide translocase is inhibited by atractyloside, not by cyanide.",
      "Rotenone inhibits complex I, but cyanide acts specifically at complex IV."
    ]
  },
  {
    id: "s1-0153",
    system: "General Principles",
    discipline: "Genetics",
    topic: "Cystic fibrosis (CFTR)",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 3-year-old boy has a history of recurrent pneumonias, most recently with Pseudomonas aeruginosa, along with bulky, foul-smelling, greasy stools and poor weight gain. His parents note that he tastes salty when kissed. He has nasal polyps and mild clubbing.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sweat chloride | 82 mmol/L | < 30 |\n| Fecal elastase | low | normal |",
    lead: "Which molecular defect best explains this presentation?",
    options: [
      "A dynein arm defect impairing ciliary motility",
      "Deficiency of alpha-1 antitrypsin",
      "Selective immunoglobulin A deficiency",
      "A mutation in the CFTR gene impairing chloride transport",
      "Absent pancreatic secretin receptors"
    ],
    answer: 3,
    exp: "Recurrent Pseudomonas respiratory infections, pancreatic insufficiency with steatorrhea, salty sweat, and an elevated sweat chloride indicate cystic fibrosis. It results from mutation of the CFTR gene, an ATP-gated chloride channel, most commonly the F508 deletion. Defective chloride transport dehydrates secretions and impairs sweat chloride reabsorption, explaining the thick mucus and salty sweat.",
    why: [
      "A dynein arm defect causes primary ciliary dyskinesia with situs inversus, not an elevated sweat chloride or pancreatic insufficiency.",
      "Alpha-1 antitrypsin deficiency causes early emphysema and liver disease, not this childhood infection and malabsorption pattern.",
      "Selective IgA deficiency causes recurrent sinopulmonary and GI infections but not an elevated sweat chloride or steatorrhea from pancreatic insufficiency.",
      "Correct: a CFTR mutation impairs chloride transport, dehydrating secretions and raising sweat chloride, causing lung infections and pancreatic insufficiency.",
      "There is no clinical syndrome of absent secretin receptors that produces this constellation."
    ]
  },
  {
    id: "s1-0154",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Pathology",
    topic: "Immune thrombocytopenic purpura",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 5-year-old girl develops scattered petechiae over the legs and easy bruising two weeks after a mild upper respiratory illness. She is otherwise well, with no fever, no lymphadenopathy, and no hepatosplenomegaly. A peripheral smear shows a few large platelets and otherwise normal red and white cell morphology.\n\n| Test | Value | Reference |\n|---|---|---|\n| Platelet count | 18,000/mcL | 150,000-400,000 |\n| Hemoglobin | 12.6 g/dL | 11.5-15.5 |\n| Prothrombin time | normal | - |\n| Partial thromboplastin time | normal | - |",
    lead: "Which mechanism best explains her thrombocytopenia?",
    options: [
      "Deficiency of a von Willebrand factor-cleaving protease",
      "Autoantibodies against platelet glycoprotein IIb/IIIa with splenic clearance",
      "Consumption of platelets and clotting factors from disseminated coagulation",
      "Failure of platelet production due to marrow aplasia",
      "A qualitative platelet function defect with a normal platelet count"
    ],
    answer: 1,
    exp: "Isolated thrombocytopenia with mucocutaneous bleeding, normal coagulation studies, and no organomegaly after a viral illness in a child is immune thrombocytopenic purpura. IgG autoantibodies against platelet glycoprotein IIb/IIIa opsonize platelets, which are then cleared by splenic macrophages. The marrow shows increased megakaryocytes as it attempts to compensate.",
    why: [
      "ADAMTS13 deficiency causes thrombotic thrombocytopenic purpura with microangiopathic hemolysis and schistocytes, not isolated thrombocytopenia.",
      "Correct: antibodies against platelet glycoprotein IIb/IIIa lead to splenic destruction of platelets, causing isolated thrombocytopenia with normal coagulation.",
      "Disseminated intravascular coagulation consumes clotting factors and prolongs the PT and PTT, which are normal here.",
      "Marrow aplasia would depress red cells and white cells as well, but the hemoglobin and smear are otherwise normal.",
      "A qualitative platelet defect such as Glanzmann thrombasthenia produces bleeding with a normal platelet count, whereas this count is markedly low."
    ]
  },
  {
    id: "s1-0155",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Pathology",
    topic: "Chronic myeloid leukemia",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 52-year-old man reports several months of fatigue, early satiety, and left upper quadrant fullness. His spleen is palpable well below the costal margin. A peripheral smear shows a markedly increased number of granulocytes at all stages of maturation, including myelocytes and metamyelocytes, with increased basophils and no significant increase in blasts.\n\n| Test | Value | Reference |\n|---|---|---|\n| White blood cell count | 96,000/mcL | 4,500-11,000 |\n| Basophils | increased | - |\n| Leukocyte alkaline phosphatase | low | - |",
    lead: "Which genetic abnormality is most likely responsible?",
    options: [
      "A t(8;14) translocation involving MYC",
      "A t(15;17) translocation producing a PML-RARA fusion",
      "A t(14;18) translocation involving BCL2",
      "A JAK2 V617F point mutation",
      "A t(9;22) translocation producing a constitutively active BCR-ABL1 tyrosine kinase"
    ],
    answer: 4,
    exp: "Massive splenomegaly with a very high white cell count showing the full spectrum of granulocyte maturation, basophilia, and a low leukocyte alkaline phosphatase is chronic myeloid leukemia. It is driven by the t(9;22) Philadelphia chromosome, which fuses BCR to ABL1 to create a constitutively active tyrosine kinase. This kinase is the target of imatinib.",
    why: [
      "The t(8;14) translocation activates MYC in Burkitt lymphoma, not chronic myeloid leukemia.",
      "The t(15;17) PML-RARA fusion defines acute promyelocytic leukemia with abundant promyelocytes, not mature granulocytes with basophilia.",
      "The t(14;18) translocation overexpresses BCL2 in follicular lymphoma.",
      "The JAK2 V617F mutation drives polycythemia vera and related myeloproliferative disorders but not the BCR-ABL-defined CML shown here.",
      "Correct: the t(9;22) BCR-ABL1 fusion creates a constitutive tyrosine kinase that drives the granulocytosis, basophilia, and low leukocyte alkaline phosphatase of CML."
    ]
  },
  {
    id: "s1-0156",
    system: "Behavioral Health & Nervous System",
    discipline: "Psychiatry",
    topic: "Bipolar I disorder",
    difficulty: "easy",
    anchor: null,
    vignette: "A 24-year-old man is brought in by his family for one week of markedly decreased need for sleep, rapid pressured speech, and grandiose plans to start several businesses at once. He has spent his savings impulsively and is easily distracted and irritable. Two years ago he had a two-month episode of depression. He does not use substances.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Bipolar I disorder",
      "Bipolar II disorder",
      "Cyclothymic disorder",
      "Major depressive disorder with psychotic features",
      "Schizoaffective disorder"
    ],
    answer: 0,
    exp: "A distinct period of at least one week of elevated or irritable mood with decreased need for sleep, pressured speech, grandiosity, distractibility, and impulsive spending that impairs functioning is a manic episode, which defines bipolar I disorder. Only a single manic episode is required for the diagnosis, and a prior depressive episode is common. The mania need not be preceded by depression.",
    why: [
      "Correct: a full manic episode lasting at least one week with impaired functioning establishes bipolar I disorder.",
      "Bipolar II disorder requires hypomanic episodes without a full manic episode, but this patient meets full manic criteria.",
      "Cyclothymic disorder involves chronic subthreshold mood swings for at least two years, not a discrete manic episode.",
      "Major depressive disorder with psychotic features does not include manic symptoms such as decreased need for sleep and grandiosity.",
      "Schizoaffective disorder requires psychotic symptoms for at least two weeks in the absence of a mood episode, which is not described."
    ]
  },
  {
    id: "s1-0157",
    system: "Behavioral Health & Nervous System",
    discipline: "Neurology",
    topic: "Amyotrophic lateral sclerosis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 55-year-old man has one year of progressive, asymmetric weakness that began in his right hand and spread. Examination shows muscle wasting and fasciculations in the hands and tongue together with brisk reflexes, spasticity, and extensor plantar responses in the legs. Sensation is entirely normal, and cognition, bowel, and bladder function are preserved.\n\n**[IMAGE: spinal cord cross-section showing degeneration of the anterior horn cells together with pallor of both lateral corticospinal tracts]**",
    lead: "Which best explains these findings?",
    options: [
      "Autoimmune demyelination of peripheral nerves",
      "Antibodies blocking postsynaptic acetylcholine receptors",
      "Degeneration of anterior horn cells and lateral corticospinal tracts",
      "Demyelinating plaques scattered throughout the central white matter",
      "Loss of dopaminergic neurons in the substantia nigra"
    ],
    answer: 2,
    exp: "The combination of lower motor neuron signs (atrophy, fasciculations) and upper motor neuron signs (spasticity, hyperreflexia, extensor plantar responses) with completely spared sensation and cognition is amyotrophic lateral sclerosis. It reflects degeneration of both anterior horn cells and the lateral corticospinal tracts. Some familial cases involve superoxide dismutase 1 mutations.",
    why: [
      "Autoimmune peripheral demyelination (Guillain-Barre) causes ascending weakness with lost reflexes, not mixed upper and lower motor neuron signs.",
      "Antibodies against acetylcholine receptors cause myasthenia gravis with fatigable weakness but no upper motor neuron signs or fasciculations.",
      "Correct: combined degeneration of anterior horn cells and corticospinal tracts produces mixed lower and upper motor neuron signs with intact sensation, the hallmark of ALS.",
      "Scattered central demyelinating plaques (multiple sclerosis) typically produce sensory and visual involvement disseminated in space and time, not pure motor findings.",
      "Loss of nigral dopaminergic neurons causes Parkinson disease with bradykinesia and tremor, not weakness with fasciculations."
    ]
  },
  {
    id: "s1-0158",
    system: "Behavioral Health & Nervous System",
    discipline: "Psychiatry",
    topic: "Post-traumatic stress disorder",
    difficulty: "easy",
    anchor: null,
    vignette: "A 32-year-old veteran reports that for the past four months, since surviving a roadside explosion, he has had intrusive flashbacks and nightmares of the event. He avoids crowds and news reports that remind him of combat, feels emotionally detached, and is irritable with an exaggerated startle response and poor sleep. His symptoms interfere with his work and relationships.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Acute stress disorder",
      "Adjustment disorder",
      "Generalized anxiety disorder",
      "Panic disorder",
      "Post-traumatic stress disorder"
    ],
    answer: 4,
    exp: "Exposure to a life-threatening trauma followed by intrusive re-experiencing, avoidance of reminders, negative alterations in mood and cognition, and hyperarousal lasting more than one month is post-traumatic stress disorder. The four-month duration excludes acute stress disorder, which is diagnosed when the same symptoms last less than one month. The functional impairment supports the diagnosis.",
    why: [
      "Acute stress disorder involves the same trauma-related symptoms but resolves within one month, whereas his have lasted four months.",
      "Adjustment disorder follows a non-life-threatening stressor and lacks the intrusive re-experiencing and hyperarousal seen here.",
      "Generalized anxiety disorder is chronic worry about multiple domains without a defining traumatic event or flashbacks.",
      "Panic disorder features recurrent unexpected panic attacks rather than trauma-linked flashbacks and avoidance.",
      "Correct: trauma exposure with re-experiencing, avoidance, negative mood, and hyperarousal for more than one month defines post-traumatic stress disorder."
    ]
  },
  {
    id: "s1-0159",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Osteoarthritis",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 64-year-old woman with obesity reports several years of aching pain in both knees and her hands that worsens with activity through the day and improves with rest. Morning stiffness lasts about ten minutes. She has bony enlargement of the distal interphalangeal joints and crepitus in the knees, without warmth or redness. She has no systemic symptoms.\n\n**[IMAGE: radiograph of the knee showing asymmetric joint space narrowing, marginal osteophytes, and subchondral sclerosis]**",
    lead: "Which best characterizes the underlying joint process?",
    options: [
      "Inflammatory pannus destroying the joint from autoimmune synovitis",
      "Progressive degeneration of articular cartilage with osteophyte formation",
      "Deposition of monosodium urate crystals in the joint",
      "Deposition of calcium pyrophosphate dihydrate crystals",
      "Immune-complex synovitis following a systemic infection"
    ],
    answer: 1,
    exp: "Activity-related joint pain with brief morning stiffness, bony enlargement of the distal interphalangeal joints (Heberden nodes), crepitus, and no systemic inflammation is osteoarthritis. It results from progressive mechanical degeneration and loss of articular cartilage, with reactive osteophytes and subchondral sclerosis. The radiographic findings of asymmetric joint space narrowing and osteophytes are characteristic.",
    why: [
      "An inflammatory autoimmune pannus with prolonged morning stiffness and symmetric small-joint involvement describes rheumatoid arthritis, not this activity-related picture.",
      "Correct: osteoarthritis is a degenerative loss of articular cartilage with osteophyte formation, producing activity-related pain and the shown radiographic changes.",
      "Monosodium urate deposition causes acute gouty attacks with an intensely inflamed joint, not chronic activity-related pain with Heberden nodes.",
      "Calcium pyrophosphate deposition causes pseudogout with chondrocalcinosis and acute attacks, not this pattern.",
      "Postinfectious immune-complex synovitis (reactive arthritis) presents with acute oligoarthritis and extra-articular features, not chronic degenerative changes."
    ]
  },
  {
    id: "s1-0160",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Bullous pemphigoid",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 74-year-old man develops several weeks of intensely itchy, large, tense blisters on the flexor surfaces of the arms, groin, and lower abdomen. The blisters are firm and do not rupture easily, and lateral pressure on adjacent normal-appearing skin does not induce new blistering. The oral mucosa is spared.\n\n**[IMAGE: direct immunofluorescence of perilesional skin showing a linear band of IgG and C3 along the dermoepidermal junction]**",
    lead: "Autoantibodies against which target best explain this disease?",
    options: [
      "Desmoglein 3 within the desmosomes",
      "Type VII collagen of the anchoring fibrils",
      "Epidermal tissue transglutaminase",
      "Hemidesmosomal proteins at the dermoepidermal junction",
      "Desmoglein 1 in the superficial epidermis"
    ],
    answer: 3,
    exp: "Tense subepidermal blisters in an elderly patient with a negative Nikolsky sign and linear IgG and C3 along the basement membrane are characteristic of bullous pemphigoid. Autoantibodies target hemidesmosomal proteins (BP180 and BP230) at the dermoepidermal junction, producing a subepidermal split. This contrasts with pemphigus vulgaris, which targets desmoglein and causes flaccid intraepidermal blisters.",
    why: [
      "Antibodies against desmoglein 3 cause pemphigus vulgaris, with flaccid intraepidermal blisters and a positive Nikolsky sign.",
      "Antibodies against type VII collagen cause epidermolysis bullosa acquisita, a rarer disorder that is not the classic linear IgG picture here.",
      "Antibodies against epidermal transglutaminase relate to dermatitis herpetiformis, which shows granular IgA at dermal papillae, not linear IgG.",
      "Correct: bullous pemphigoid is caused by antibodies against hemidesmosomal proteins, producing tense subepidermal blisters with linear IgG and C3.",
      "Antibodies against desmoglein 1 cause pemphigus foliaceus with superficial crusting erosions, not tense subepidermal bullae."
    ]
  },
  {
    id: "s1-0161",
    system: "Cardiovascular",
    discipline: "Pathology",
    topic: "Mitral stenosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 34-year-old woman who grew up abroad and had rheumatic fever as a child reports progressive exertional dyspnea, orthopnea, and one episode of coughing up blood. Her pulse is irregularly irregular. On auscultation there is a loud first heart sound, an early diastolic sound after the second heart sound, and a low-pitched rumbling murmur at the apex heard best in the left lateral position.\n\n**[IMAGE: chest radiograph showing left atrial enlargement with straightening of the left heart border and elevation of the left main bronchus]**",
    lead: "Which valvular lesion best explains these findings?",
    options: [
      "Mitral stenosis",
      "Mitral regurgitation",
      "Aortic stenosis",
      "Aortic regurgitation",
      "Tricuspid regurgitation"
    ],
    answer: 0,
    exp: "A history of rheumatic fever with an opening snap and a low-pitched mid-diastolic apical rumble, atrial fibrillation, and left atrial enlargement indicates mitral stenosis. Rheumatic scarring fuses the mitral commissures, obstructing left atrial emptying and raising left atrial pressure. This leads to pulmonary congestion with dyspnea and hemoptysis, atrial dilation, and atrial fibrillation.",
    why: [
      "Correct: rheumatic mitral stenosis produces an opening snap, a diastolic rumble, left atrial enlargement, and atrial fibrillation from obstructed left atrial emptying.",
      "Mitral regurgitation causes a holosystolic murmur radiating to the axilla, not a diastolic rumble with an opening snap.",
      "Aortic stenosis causes a crescendo-decrescendo systolic ejection murmur radiating to the carotids, not a diastolic apical rumble.",
      "Aortic regurgitation causes an early diastolic decrescendo murmur with a wide pulse pressure, not an opening snap and mid-diastolic rumble.",
      "Tricuspid regurgitation causes a holosystolic murmur that increases with inspiration, not these left-sided findings."
    ]
  },
  {
    id: "s1-0162",
    system: "Cardiovascular",
    discipline: "Pharmacology",
    topic: "Organic nitrate mechanism",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 60-year-old man with exertional chest pain places a nitroglycerin tablet under his tongue during an episode and obtains rapid relief. Shortly afterward he develops a throbbing headache and mild lightheadedness on standing.",
    lead: "Which mechanism best explains the relief of his chest pain?",
    options: [
      "Blockade of L-type calcium channels in cardiac myocytes",
      "Competitive antagonism of beta-1 adrenergic receptors",
      "Release of nitric oxide that raises cyclic GMP and dilates veins to reduce preload",
      "Inhibition of the funny pacemaker current in the sinoatrial node",
      "Opening of ATP-sensitive potassium channels in vascular smooth muscle"
    ],
    answer: 2,
    exp: "Organic nitrates are metabolized to nitric oxide, which activates guanylate cyclase and raises cyclic GMP in vascular smooth muscle, causing relaxation. The predominant effect is venodilation, which lowers preload and thus myocardial wall stress and oxygen demand, relieving angina. Cerebral vasodilation explains the accompanying headache, and venous pooling causes orthostatic lightheadedness.",
    why: [
      "Calcium channel blockers relieve angina but act by blocking L-type calcium channels, not by generating nitric oxide.",
      "Beta blockers reduce oxygen demand by antagonizing beta-1 receptors, a different mechanism from nitrates.",
      "Correct: nitrates release nitric oxide, raising cyclic GMP to dilate veins and lower preload, reducing myocardial oxygen demand.",
      "Ivabradine inhibits the funny current to slow heart rate, which is not the mechanism of nitroglycerin.",
      "Potassium channel openers such as minoxidil act on arterial smooth muscle and are not how organic nitrates relieve angina."
    ]
  },
  {
    id: "s1-0163",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Asthma",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 20-year-old man has recurrent episodes of wheezing, chest tightness, and dry cough that are worse at night and are triggered by exercise and exposure to cat dander. He has a history of eczema and allergic rhinitis. During an episode, spirometry shows a reduced ratio of forced expiratory volume in one second to forced vital capacity that improves by more than 12 percent after an inhaled bronchodilator.",
    lead: "Which best describes the underlying pathophysiology?",
    options: [
      "Irreversible airflow obstruction from destruction of alveolar walls",
      "Reversible bronchoconstriction with airway inflammation and hyperresponsiveness",
      "Permanent dilation of bronchi from chronic infection and impaired clearance",
      "Fibrosis of the alveolar interstitium restricting lung expansion",
      "Chronic mucus gland hyperplasia with a productive cough for years"
    ],
    answer: 1,
    exp: "Episodic wheeze and cough triggered by allergens and exercise in an atopic young person, with airflow obstruction that reverses after a bronchodilator, is asthma. The disease involves type 2 airway inflammation with bronchial smooth muscle hyperresponsiveness and reversible bronchoconstriction. Reversibility on spirometry distinguishes it from fixed obstructive disease.",
    why: [
      "Irreversible obstruction from alveolar wall destruction describes emphysema, which does not show large bronchodilator reversibility.",
      "Correct: asthma is reversible bronchoconstriction with airway inflammation and hyperresponsiveness, consistent with the bronchodilator response.",
      "Permanent bronchial dilation from chronic infection describes bronchiectasis with copious sputum, not this reversible allergic pattern.",
      "Interstitial fibrosis produces a restrictive pattern with reduced volumes, not reversible obstruction.",
      "Chronic mucus gland hyperplasia with years of productive cough describes chronic bronchitis, not this episodic reversible disease."
    ]
  },
  {
    id: "s1-0164",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "IgA nephropathy",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 22-year-old man reports several episodes of visible reddish-brown urine, each beginning within a day or two of an upper respiratory infection over the past year. Between episodes he feels well but has persistent microscopic hematuria. His blood pressure is normal, and he has no rash or joint pain.\n\n| Test | Value | Reference |\n|---|---|---|\n| Urinalysis | dysmorphic RBCs, occasional red cell casts | none |\n| Serum C3 and C4 | normal | normal |\n| Throat and skin cultures | negative | - |",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Poststreptococcal glomerulonephritis",
      "Membranoproliferative glomerulonephritis",
      "IgA nephropathy",
      "Alport syndrome",
      "Thin basement membrane disease"
    ],
    answer: 2,
    exp: "Recurrent gross hematuria that begins within one to two days of an upper respiratory infection, with persistent microscopic hematuria, normal complement, and no latent period, is IgA nephropathy. Mesangial deposition of IgA follows mucosal infections and causes the synpharyngitic hematuria. The normal C3 is key: poststreptococcal glomerulonephritis instead follows infection by about two weeks and lowers C3.",
    why: [
      "Poststreptococcal glomerulonephritis follows infection after a latent period of roughly two weeks and characteristically lowers serum C3, unlike this pattern.",
      "Membranoproliferative glomerulonephritis typically shows persistently low complement and nephritic or nephrotic features rather than recurrent gross hematuria with normal complement.",
      "Correct: gross hematuria coinciding with mucosal infections, normal complement, and mesangial IgA deposition indicates IgA nephropathy.",
      "Alport syndrome causes hematuria with sensorineural hearing loss and a family history of renal failure, which are absent here.",
      "Thin basement membrane disease causes persistent microscopic hematuria that is usually asymptomatic, not recurrent visible hematuria tied to infections."
    ]
  },
  {
    id: "s1-0165",
    system: "Gastrointestinal",
    discipline: "Biochemistry",
    topic: "Gilbert syndrome",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 19-year-old college student notices mild yellowing of the eyes during final examinations, when he was fasting, sleep-deprived, and had a viral cold. He feels well otherwise, and the jaundice resolves on its own. There is no dark urine or pale stools, and his physical examination is normal.\n\n| Test | Value | Reference |\n|---|---|---|\n| Total bilirubin | 3.0 mg/dL | 0.2-1.2 |\n| Direct (conjugated) bilirubin | 0.3 mg/dL | < 0.3 |\n| Reticulocyte count | normal | - |\n| Lactate dehydrogenase and haptoglobin | normal | - |\n| AST, ALT, alkaline phosphatase | normal | - |",
    lead: "Which best explains his jaundice?",
    options: [
      "Increased bilirubin production from ongoing hemolysis",
      "Complete absence of UDP-glucuronosyltransferase activity",
      "Defective canalicular excretion of conjugated bilirubin",
      "Extrahepatic biliary obstruction blocking bilirubin excretion",
      "Reduced UDP-glucuronosyltransferase activity causing mild unconjugated hyperbilirubinemia"
    ],
    answer: 4,
    exp: "Intermittent mild unconjugated hyperbilirubinemia triggered by fasting, stress, or illness, with normal hemolysis markers and normal liver enzymes, is Gilbert syndrome. It results from reduced (not absent) activity of UDP-glucuronosyltransferase, so bilirubin conjugation is mildly impaired. The condition is benign and requires no treatment.",
    why: [
      "Ongoing hemolysis would raise reticulocytes and lactate dehydrogenase and lower haptoglobin, all of which are normal here.",
      "Complete absence of UDP-glucuronosyltransferase causes Crigler-Najjar type I, with severe unconjugated hyperbilirubinemia and kernicterus in infancy.",
      "Defective canalicular excretion of conjugated bilirubin (Dubin-Johnson syndrome) raises the direct fraction, whereas this is predominantly unconjugated.",
      "Extrahepatic obstruction raises conjugated bilirubin and causes dark urine and pale stools, which are absent here.",
      "Correct: reduced UDP-glucuronosyltransferase activity mildly impairs conjugation, producing benign unconjugated hyperbilirubinemia provoked by fasting and stress."
    ]
  },
  {
    id: "s1-0166",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Hirschsprung disease",
    difficulty: "moderate",
    anchor: null,
    vignette: "A newborn boy fails to pass meconium in the first 48 hours of life and develops progressive abdominal distension and bilious vomiting. On rectal examination the anal canal is tight, and there is an explosive release of gas and stool as the examining finger is withdrawn. He also has features of Down syndrome. A rectal suction biopsy shows absent ganglion cells.",
    lead: "Which best explains this disorder?",
    options: [
      "Failure of neural crest cell migration leaving a segment of colon without ganglion cells",
      "Hypertrophy of the pylorus obstructing gastric outflow",
      "Telescoping of one segment of bowel into an adjacent segment",
      "Incomplete rotation of the midgut with volvulus",
      "Ischemic necrosis of the immature bowel wall"
    ],
    answer: 0,
    exp: "Delayed passage of meconium, distal obstruction with proximal distension, a tight aganglionic segment with an explosive squirt sign, and an association with Down syndrome indicate Hirschsprung disease. It arises from failed craniocaudal migration of neural crest cells, leaving the distal bowel without submucosal (Meissner) and myenteric (Auerbach) ganglion cells. The aganglionic segment stays tonically contracted, and rectal biopsy is diagnostic.",
    why: [
      "Correct: arrested neural crest cell migration leaves an aganglionic, tonically contracted distal segment, causing functional obstruction confirmed by absent ganglion cells on biopsy.",
      "Pyloric hypertrophy causes nonbilious projectile vomiting at several weeks of age, not neonatal failure to pass meconium.",
      "Telescoping of bowel (intussusception) causes intermittent colicky pain and currant-jelly stools in older infants, not this neonatal obstruction.",
      "Midgut volvulus from malrotation causes bilious vomiting but is not associated with an aganglionic segment on biopsy.",
      "Ischemic necrosis of bowel describes necrotizing enterocolitis, which occurs mainly in premature infants with pneumatosis intestinalis."
    ]
  },
  {
    id: "s1-0167",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Type 2 diabetes mellitus",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 52-year-old man with obesity reports increased thirst, frequent urination, and fatigue over several months. He has velvety, hyperpigmented skin in the axillae and posterior neck. His father and brother have diabetes. He has no history of ketoacidosis and is not acutely ill.\n\n| Test | Value | Reference |\n|---|---|---|\n| Fasting plasma glucose | 184 mg/dL | 70-99 |\n| Hemoglobin A1c | 8.6% | < 5.7 |",
    lead: "Which best explains his condition?",
    options: [
      "Autoimmune destruction of pancreatic beta cells",
      "A single-gene defect in glucokinase",
      "A congenital absence of insulin receptors",
      "Peripheral insulin resistance with a relative insulin deficiency",
      "Excess cortisol secretion from an adrenal tumor"
    ],
    answer: 3,
    exp: "Gradual hyperglycemia in an obese middle-aged adult with acanthosis nigricans, a strong family history, and no ketoacidosis is type 2 diabetes mellitus. The core defects are peripheral tissue resistance to insulin and a progressive relative deficiency of insulin secretion. Acanthosis nigricans reflects the hyperinsulinemia of the insulin-resistant state.",
    why: [
      "Autoimmune destruction of beta cells causes type 1 diabetes, which typically presents in younger, lean patients with a tendency to ketoacidosis.",
      "A glucokinase mutation causes maturity-onset diabetes of the young, a rare monogenic form, not this common obesity-associated pattern.",
      "Congenital absence of insulin receptors is a rare severe syndrome, not the usual cause of adult-onset diabetes.",
      "Correct: type 2 diabetes results from peripheral insulin resistance with a relative insulin secretory deficiency, fitting the obesity, family history, and acanthosis nigricans.",
      "Excess cortisol (Cushing syndrome) can cause hyperglycemia but would also produce features such as central obesity, striae, and hypertension not described here."
    ]
  },
  {
    id: "s1-0168",
    system: "Reproductive & Endocrine",
    discipline: "Physiology",
    topic: "Prolactinoma",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 29-year-old woman reports six months of absent menstrual periods and a milky discharge from both breasts, along with reduced libido. She has recently developed headaches and notes difficulty seeing objects to either side. A pregnancy test is negative.\n\n| Test | Value | Reference |\n|---|---|---|\n| Prolactin | markedly elevated | 4-23 ng/mL |\n| Thyroid-stimulating hormone | normal | 0.4-4.0 |\n| Follicle-stimulating hormone and luteinizing hormone | low | - |",
    lead: "Which best explains her presentation?",
    options: [
      "Autonomous cortisol secretion from a pituitary adenoma",
      "A lactotroph adenoma secreting prolactin that suppresses gonadotropin-releasing hormone",
      "A somatotroph adenoma secreting growth hormone",
      "Primary hypothyroidism as the sole cause of the symptoms",
      "Ectopic prolactin production by a lung tumor"
    ],
    answer: 1,
    exp: "Amenorrhea, galactorrhea, low gonadotropins, a markedly elevated prolactin, and a mass effect causing bitemporal visual field loss indicate a prolactinoma. The lactotroph adenoma secretes prolactin, which suppresses gonadotropin-releasing hormone and lowers FSH and LH, producing hypogonadism. Dopamine agonists such as cabergoline are first-line therapy.",
    why: [
      "Autonomous cortisol secretion causes Cushing disease with central obesity and striae, not galactorrhea with a markedly elevated prolactin.",
      "Correct: a lactotroph adenoma secretes prolactin, which suppresses GnRH and lowers FSH and LH, causing amenorrhea, galactorrhea, and hypogonadism.",
      "A growth hormone-secreting adenoma causes acromegaly with enlarged extremities, not primarily galactorrhea and amenorrhea.",
      "Primary hypothyroidism can mildly raise prolactin, but the normal TSH here excludes it as the cause.",
      "Ectopic prolactin production by tumors is very rare and would not explain a pituitary mass with visual field loss."
    ]
  },
  {
    id: "s1-0169",
    system: "Reproductive & Endocrine",
    discipline: "Genetics",
    topic: "Turner syndrome",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 15-year-old girl is evaluated for not yet having started menstrual periods and for short stature well below her peers. She has a webbed neck, a broad chest with widely spaced nipples, and an increased carrying angle of the arms. As an infant she had swelling of the hands and feet. She has minimal breast development, and hormone testing shows an elevated follicle-stimulating hormone.",
    lead: "Which karyotype is most likely?",
    options: [
      "47,XXY",
      "47,XX,+21",
      "46,XY with androgen insensitivity",
      "47,XX,+18",
      "45,X"
    ],
    answer: 4,
    exp: "Short stature, primary amenorrhea, a webbed neck, a shield chest with widely spaced nipples, cubitus valgus, and a history of infant lymphedema indicate Turner syndrome. The karyotype is classically 45,X (monosomy X). Gonadal dysgenesis produces streak ovaries with low estrogen and a compensatory rise in FSH, and there are associated cardiac and renal anomalies.",
    why: [
      "A 47,XXY karyotype causes Klinefelter syndrome in phenotypic males with tall stature and small testes, not this female phenotype.",
      "Trisomy 21 (47,XX,+21) causes Down syndrome, which does not present as primary amenorrhea with a webbed neck and streak gonads.",
      "A 46,XY androgen insensitivity karyotype produces a female phenotype but with absent uterus and testes and low FSH, not the somatic features of Turner syndrome.",
      "Trisomy 18 (47,XX,+18) is usually lethal in infancy and does not present as an adolescent with primary amenorrhea.",
      "Correct: 45,X monosomy causes Turner syndrome with short stature, gonadal dysgenesis, and the described somatic features."
    ]
  },
  {
    id: "s1-0170",
    system: "Multisystem",
    discipline: "Immunology",
    topic: "Systemic sclerosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 46-year-old woman has several months of color changes in her fingers with cold exposure, progressing to tight, thickened, shiny skin over the fingers and face. She reports worsening heartburn and difficulty swallowing solid foods, and she has small dilated vessels visible on the face. She has mild exertional dyspnea.\n\n| Test | Value | Reference |\n|---|---|---|\n| Antinuclear antibody | positive | negative |\n| Anti-topoisomerase I (Scl-70) | positive | negative |\n| Anti-centromere antibody | negative | negative |",
    lead: "Which best explains the widespread organ involvement?",
    options: [
      "Deposition of immune complexes causing small-vessel vasculitis",
      "Granulomatous inflammation involving multiple organs",
      "Excessive fibroblast collagen deposition with small-vessel injury causing widespread fibrosis",
      "IgG autoantibodies stimulating the thyroid-stimulating hormone receptor",
      "Deposition of amyloid protein in organ interstitium"
    ],
    answer: 2,
    exp: "Raynaud phenomenon, sclerodactyly with tight facial skin, esophageal dysmotility, telangiectasias, and a positive anti-topoisomerase I antibody indicate systemic sclerosis (scleroderma). The disease features activated fibroblasts depositing excessive collagen along with small-vessel endothelial injury, producing fibrosis across skin and internal organs. The diffuse form with anti-Scl-70 carries risk of interstitial lung disease and renal crisis.",
    why: [
      "Immune-complex small-vessel vasculitis causes palpable purpura and organ ischemia, not progressive fibrosis with sclerodactyly.",
      "Granulomatous multiorgan inflammation describes sarcoidosis, which does not cause sclerodactyly and Raynaud phenomenon with anti-Scl-70.",
      "Correct: systemic sclerosis is driven by excessive fibroblast collagen deposition and small-vessel injury, producing widespread fibrosis of skin and organs.",
      "Stimulating antibodies against the TSH receptor cause Graves disease, unrelated to this fibrosing disorder.",
      "Amyloid deposition causes organ dysfunction but not the Raynaud phenomenon, sclerodactyly, and anti-Scl-70 pattern seen here."
    ]
  },
  {
    id: "s1-0171",
    system: "Multisystem",
    discipline: "Pathology",
    topic: "Carbon monoxide poisoning",
    difficulty: "hard",
    anchor: "lab",
    vignette: "During a cold winter night an entire family develops headache, nausea, dizziness, and confusion; they improve after leaving the house, where an old furnace was later found to be faulty. On arrival the mother is confused but her pulse oximeter reads 98 percent on room air, and her measured arterial oxygen tension is normal.\n\n| Test | Value | Reference |\n|---|---|---|\n| Carboxyhemoglobin | 26% | < 3 (nonsmoker) |\n| Arterial PaO2 | 96 mm Hg | 75-100 |\n| Arterial pH | 7.28 | 7.35-7.45 |\n| Lactate | elevated | low |",
    lead: "Which best explains her hypoxic symptoms?",
    options: [
      "Carbon monoxide binds hemoglobin with high affinity, lowering oxygen-carrying capacity and shifting the dissociation curve left",
      "Oxidation of hemoglobin iron to the ferric state forming methemoglobin",
      "Inhibition of mitochondrial cytochrome c oxidase by cyanide",
      "A reduced inspired oxygen tension from high altitude",
      "A right-to-left shunt bypassing ventilated alveoli"
    ],
    answer: 0,
    exp: "Multiple household members with headache and confusion in winter from a faulty furnace, a normal PaO2 and pulse oximeter reading, and a markedly elevated carboxyhemoglobin indicate carbon monoxide poisoning. Carbon monoxide binds hemoglobin with roughly 200 times the affinity of oxygen, reducing oxygen-carrying capacity and shifting the oxygen dissociation curve left so that less oxygen is unloaded to tissues. The PaO2 and standard pulse oximeter remain misleadingly normal, and treatment is high-flow or hyperbaric oxygen.",
    why: [
      "Correct: carbon monoxide binds hemoglobin avidly, lowering oxygen content and shifting the curve left to impair unloading, while dissolved PaO2 stays normal.",
      "Methemoglobinemia oxidizes iron to the ferric state and causes cyanosis with a characteristic low oximeter reading, not a carboxyhemoglobin elevation.",
      "Cyanide inhibits cytochrome c oxidase and would not raise carboxyhemoglobin, which is specific to carbon monoxide.",
      "High-altitude hypoxia lowers the inspired and arterial oxygen tension, but this patient's PaO2 is normal.",
      "A right-to-left shunt would lower the PaO2 and not produce an elevated carboxyhemoglobin."
    ]
  },
  {
    id: "s1-0172",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Type II error and statistical power",
    difficulty: "hard",
    anchor: null,
    vignette: "A small randomized trial compares a new drug with placebo for reducing mortality. The drug group has fewer deaths, but the difference does not reach statistical significance (p = 0.20). The investigators are confident from prior mechanistic data that the drug truly has a modest benefit, and they note that only 60 patients were enrolled.",
    lead: "The failure to detect this true effect is best described as which of the following?",
    options: [
      "A type I error",
      "Selection bias",
      "A confounding effect",
      "Random misclassification of outcomes",
      "A type II error reflecting inadequate statistical power"
    ],
    answer: 4,
    exp: "Failing to reject the null hypothesis when a true difference actually exists is a type II (beta) error. With only 60 patients the trial is underpowered, so its ability to detect a real modest effect (power, which equals 1 minus beta) is low. Power can be increased by enlarging the sample size, choosing a larger detectable effect, or raising the alpha level.",
    why: [
      "A type I error is concluding an effect exists when the null is actually true, the opposite of missing a real effect.",
      "Selection bias arises from how participants are enrolled or retained, not from an underpowered but valid comparison.",
      "Confounding distorts an association through a third variable, whereas here the issue is failure to detect a true effect.",
      "Random misclassification blurs measured outcomes but does not specifically describe failing to reject a false null.",
      "Correct: not detecting a true effect is a type II error, driven here by the small sample size and low statistical power."
    ]
  },
  {
    id: "s1-0173",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Recall bias",
    difficulty: "easy",
    anchor: null,
    vignette: "In a case-control study of birth defects, investigators interview mothers of infants with malformations and mothers of healthy infants about medication and dietary exposures during the first trimester. Mothers of affected infants, having searched their memories for a possible cause, report past exposures far more thoroughly than mothers of healthy infants.",
    lead: "Which type of bias does this scenario best illustrate?",
    options: [
      "Lead-time bias",
      "Selection bias",
      "Confounding",
      "Recall bias",
      "Observer bias by the interviewers"
    ],
    answer: 3,
    exp: "Differential accuracy of remembered exposures between cases and controls is recall bias, a common problem in retrospective case-control studies of adverse outcomes. Mothers of affected infants scrutinize their pregnancies more intensely and report exposures more completely, which distorts the estimated association. It can be reduced by using objective exposure records rather than memory.",
    why: [
      "Lead-time bias applies to screening studies where earlier detection appears to prolong survival, not to differential recall.",
      "Selection bias arises from how participants are chosen for the study, not from how accurately they remember exposures.",
      "Confounding involves a third variable associated with both exposure and outcome, which is not what is described.",
      "Correct: differential accuracy of exposure recall between cases and controls is recall bias.",
      "Observer bias reflects the interviewers systematically differing in how they assess groups, whereas here the mothers themselves recall differently."
    ]
  },
  {
    id: "s1-0174",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Elder abuse reporting",
    difficulty: "moderate",
    anchor: null,
    vignette: "An 82-year-old woman with mild cognitive impairment is brought in by her adult son, who is her primary caregiver. She is dehydrated and unkempt, with several bruises in different stages of healing and a sacral pressure ulcer. The son answers all questions for her and becomes irritated when she is addressed directly. When examined alone, she quietly says she is sometimes left without food or help.",
    lead: "Which is the most appropriate next step?",
    options: [
      "Discharge her home with the son and arrange routine follow-up",
      "Report the suspected elder abuse to adult protective services",
      "Confront the son directly and demand an explanation",
      "Take no action because she has not explicitly asked for help",
      "Immediately contact the police to arrest the son"
    ],
    answer: 1,
    exp: "Signs of neglect and injury in a dependent older adult, including bruises of varying age, a pressure ulcer, dehydration, and a disclosure of being left without care, raise a reasonable suspicion of elder abuse. Physicians are mandated reporters and should notify adult protective services; reasonable suspicion, not proof, is the threshold. The immediate priority is also to ensure the patient's safety.",
    why: [
      "Discharging her home with the suspected abuser without any protective action could leave her in danger.",
      "Correct: reasonable suspicion of elder abuse obligates the physician to report to adult protective services while ensuring the patient's safety.",
      "Confronting the son directly could escalate the situation and compromise the patient's safety and the investigation.",
      "Inaction is inappropriate; mandatory reporting does not require the patient to request help.",
      "Arranging an arrest is a law-enforcement determination and is not the physician's immediate role; the appropriate action is to report to adult protective services."
    ]
  },
  {
    id: "s1-0175",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Physician conflict of interest",
    difficulty: "moderate",
    anchor: null,
    vignette: "A pharmaceutical company representative offers a physician an all-expenses-paid weekend trip to a resort, framed as an educational retreat, shortly after promoting the company's new and expensive brand-name medication. The physician has effective, lower-cost alternatives available for the same indication.",
    lead: "Which is the most appropriate response?",
    options: [
      "Accept the trip because it will not influence prescribing decisions",
      "Accept the gift but disclose it to patients afterward",
      "Prescribe the new drug only for patients who specifically request it",
      "Decline the gift because it creates a conflict of interest that can bias clinical judgment",
      "Accept the gift on behalf of the entire practice group"
    ],
    answer: 3,
    exp: "Substantial gifts from industry, such as paid trips, create a conflict of interest that can subtly bias prescribing even when the physician believes otherwise. Professional guidelines advise declining such gifts so that clinical decisions rest on patient benefit and evidence rather than inducement. Modest items directly related to patient care are treated differently, but a resort trip is not.",
    why: [
      "The belief that a large gift will not influence prescribing is precisely the bias that professional guidelines warn against.",
      "Disclosing the gift afterward does not remove the conflict of interest that accepting it creates.",
      "Restricting the drug to patients who request it still allows the inducement to shape practice and does not resolve the conflict.",
      "Correct: declining the gift avoids a conflict of interest that could bias clinical judgment, keeping decisions grounded in patient benefit.",
      "Accepting the gift for the group does not eliminate the conflict of interest and simply spreads the inducement."
    ]
  }
];
