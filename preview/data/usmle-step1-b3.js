/*
 * Rounds Codex - USMLE Step 1 question bank, Batch 3 (25 items)
 * Blueprint-weighted mix. All vignettes original; source used for facts only.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP1_B3 = [
  {
    id: "s1-0051",
    system: "General Principles",
    discipline: "Biochemistry",
    topic: "Phenylketonuria",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 10-month-old boy who was born abroad and never underwent newborn screening has developmental delay, unusually fair skin and hair, eczema, and a musty body odor. He is irritable and hyperactive.\n\n| Test | Value | Reference |\n|---|---|---|\n| Serum phenylalanine | markedly elevated | low |\n| Serum tyrosine | low | normal |",
    lead: "A deficiency of which enzyme is most likely?",
    options: [
      "Homogentisate oxidase",
      "Phenylalanine hydroxylase",
      "Tyrosinase",
      "Branched-chain alpha-ketoacid dehydrogenase",
      "Cystathionine synthase"
    ],
    answer: 1,
    exp: "Developmental delay with hypopigmentation, eczema, and a musty odor plus high phenylalanine and low tyrosine is phenylketonuria from deficient phenylalanine hydroxylase (or its tetrahydrobiopterin cofactor). Phenylalanine accumulates and is converted to phenylketones, while tyrosine becomes an essential amino acid, causing hypopigmentation. Management restricts dietary phenylalanine (and aspartame) and supplements tyrosine.",
    why: [
      "Homogentisate oxidase deficiency causes alkaptonuria, with dark urine and ochronosis, not hyperphenylalaninemia.",
      "Correct: absent phenylalanine hydroxylase raises phenylalanine and lowers tyrosine, causing phenylketonuria.",
      "Tyrosinase deficiency causes oculocutaneous albinism with hypopigmentation but normal intellect and phenylalanine.",
      "Branched-chain alpha-ketoacid dehydrogenase deficiency causes maple syrup urine disease with sweet-smelling urine.",
      "Cystathionine synthase deficiency causes homocystinuria, with lens dislocation and thrombosis."
    ]
  },
  {
    id: "s1-0052",
    system: "General Principles",
    discipline: "Genetics",
    topic: "Marfan syndrome",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 19-year-old man is unusually tall with long limbs and fingers, a pectus deformity, and hypermobile joints. Ophthalmology notes upward dislocation of the lenses. Echocardiography shows dilation of the aortic root with a soft diastolic murmur. His cognition is normal, and several relatives have similar features.",
    lead: "A defect in which protein is most likely responsible?",
    options: [
      "Type III collagen",
      "Type I collagen",
      "Cystathionine beta-synthase",
      "Fibrillin-1",
      "Elastin"
    ],
    answer: 3,
    exp: "Tall stature, arachnodactyly, upward lens dislocation, and aortic root dilation with autosomal dominant inheritance and normal cognition is Marfan syndrome, caused by a fibrillin-1 (FBN1) mutation. Defective fibrillin weakens elastic connective tissue, threatening the aorta with aneurysm and dissection. The upward lens dislocation and normal intellect help separate it from homocystinuria.",
    why: [
      "Type III collagen defects cause vascular Ehlers-Danlos syndrome, with arterial and organ rupture, not lens dislocation.",
      "Type I collagen defects cause osteogenesis imperfecta, with fractures and blue sclerae.",
      "Cystathionine beta-synthase deficiency causes homocystinuria, with downward lens dislocation, intellectual disability, and thrombosis.",
      "Correct: a fibrillin-1 mutation weakens elastic tissue, causing the aortic, ocular, and skeletal features of Marfan syndrome.",
      "Elastin defects underlie conditions such as cutis laxa and are not the cause of this Marfan phenotype."
    ]
  },
  {
    id: "s1-0053",
    system: "General Principles",
    discipline: "Biochemistry",
    topic: "Vitamin C deficiency (scurvy)",
    difficulty: "moderate",
    anchor: null,
    vignette: "An elderly man who lives alone and eats mostly tea and toast has swollen, bleeding gums, curled (corkscrew) body hairs surrounded by pinpoint hemorrhages, easy bruising, and poorly healing wounds. He is anemic.",
    lead: "His deficiency most directly impairs which process?",
    options: [
      "Hydroxylation of proline and lysine residues during collagen synthesis",
      "Gamma-carboxylation of clotting factors",
      "Lysyl oxidase cross-linking of collagen",
      "Conversion of homocysteine to methionine",
      "Insertion of iron into protoporphyrin"
    ],
    answer: 0,
    exp: "Perifollicular hemorrhage, corkscrew hairs, bleeding gums, and poor wound healing indicate scurvy from vitamin C deficiency. Vitamin C is the cofactor for prolyl and lysyl hydroxylases, which stabilize the collagen triple helix; without it, collagen is defective and fragile. The result is capillary fragility, bleeding, and impaired healing.",
    why: [
      "Correct: vitamin C is required for prolyl and lysyl hydroxylation, so its deficiency yields fragile collagen and bleeding.",
      "Gamma-carboxylation depends on vitamin K, whose deficiency causes bleeding without corkscrew hairs or gum changes.",
      "Lysyl oxidase cross-linking requires copper; its deficiency (as in Menkes disease) differs from scurvy.",
      "Conversion of homocysteine to methionine depends on vitamin B12 and folate, causing anemia without the collagen findings.",
      "Iron insertion into protoporphyrin relates to heme synthesis and does not explain the bleeding and healing defects."
    ]
  },
  {
    id: "s1-0054",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Immunology",
    topic: "DiGeorge syndrome",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A neonate has seizures attributed to hypocalcemia, a conotruncal cardiac anomaly, and an abnormal facial appearance. He develops recurrent viral and fungal infections, and imaging shows an absent thymic shadow.\n\n| Test | Value | Reference |\n|---|---|---|\n| Calcium | low | normal |\n| T lymphocytes | markedly reduced | normal |",
    lead: "Failure of which embryologic structures best explains this syndrome?",
    options: [
      "The first pharyngeal arch",
      "Neural tube closure",
      "The fourth aortic arch in isolation",
      "The ventral pancreatic bud",
      "The third and fourth pharyngeal pouches"
    ],
    answer: 4,
    exp: "Hypocalcemia, T-cell deficiency, conotruncal cardiac defects, and thymic aplasia constitute DiGeorge syndrome, from a 22q11.2 deletion. Faulty development of the third and fourth pharyngeal pouches produces thymic aplasia (T-cell deficiency) and parathyroid aplasia (hypocalcemia), while neural crest defects cause the conotruncal anomalies. This is captured by the CATCH-22 mnemonic.",
    why: [
      "First pharyngeal arch defects cause craniofacial syndromes such as Treacher Collins, not thymic and parathyroid aplasia.",
      "Failure of neural tube closure causes spina bifida or anencephaly, unrelated to this immune-endocrine picture.",
      "An isolated fourth aortic arch defect does not account for the thymic and parathyroid failure.",
      "The ventral pancreatic bud forms pancreatic tissue and is unrelated to this syndrome.",
      "Correct: failed third and fourth pharyngeal pouch development causes thymic and parathyroid aplasia with conotruncal defects."
    ]
  },
  {
    id: "s1-0055",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Pathology",
    topic: "Beta-thalassemia major",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 1-year-old child of Mediterranean ancestry has had severe anemia since about 6 months of age, along with hepatosplenomegaly and frontal bossing with prominent cheekbones. The blood smear shows target cells and nucleated red cells, and hemoglobin electrophoresis shows increased hemoglobin F and A2 with almost absent hemoglobin A.\n\n| Test | Value | Reference |\n|---|---|---|\n| Mean corpuscular volume | low | 70-86 (age-adjusted) |\n| Hemoglobin A | markedly reduced | predominant |",
    lead: "Which mechanism best explains this disorder?",
    options: [
      "Defective incorporation of iron into heme",
      "Deletion of all four alpha-globin genes",
      "Markedly reduced beta-globin synthesis with excess alpha chains damaging red cells",
      "A point mutation causing hemoglobin polymerization",
      "Antibody-mediated red cell destruction"
    ],
    answer: 2,
    exp: "Severe transfusion-dependent anemia appearing after 6 months, with skeletal changes and high hemoglobin F, is beta-thalassemia major. Severely reduced beta-globin synthesis leaves excess alpha chains that precipitate, causing ineffective erythropoiesis and hemolysis. Marrow expansion produces the crew-cut skull and chipmunk facies, and chronic transfusion leads to iron overload.",
    why: [
      "Defective iron incorporation describes sideroblastic anemia, with ringed sideroblasts, not high hemoglobin F.",
      "Deletion of all four alpha-globin genes causes hemoglobin Barts and fatal hydrops fetalis in utero.",
      "Correct: reduced beta-globin with excess alpha chains causes ineffective erythropoiesis and the thalassemia major phenotype.",
      "A polymerizing point mutation describes sickle cell disease, with sickled cells and vaso-occlusion.",
      "Antibody-mediated destruction is autoimmune hemolytic anemia, with a positive Coombs test, not this electrophoresis pattern."
    ]
  },
  {
    id: "s1-0056",
    system: "Behavioral Health & Nervous System",
    discipline: "Pathology",
    topic: "Alzheimer disease",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 74-year-old woman has several years of progressive memory loss, getting lost in familiar places, and word-finding difficulty, now affecting her daily activities. Her examination shows no focal deficits, and MRI reveals hippocampal and diffuse cortical atrophy.\n\n**[IMAGE: cortical section with extracellular amyloid (neuritic) plaques and intracellular neurofibrillary tangles on silver stain]**",
    lead: "Which process best explains her dementia?",
    options: [
      "Multiple cortical infarcts producing stepwise decline",
      "Cortical alpha-synuclein (Lewy body) deposition",
      "Frontotemporal lobar degeneration with focal atrophy",
      "Extracellular amyloid-beta plaques with intracellular hyperphosphorylated tau tangles",
      "Prion-associated spongiform change"
    ],
    answer: 3,
    exp: "Insidious, progressive amnestic decline with hippocampal atrophy, plus plaques and tangles on histology, is Alzheimer disease. It is characterized by extracellular amyloid-beta plaques from abnormal APP processing and intracellular neurofibrillary tangles of hyperphosphorylated tau, with loss of cholinergic neurons. The gradual course and lack of focal signs are typical.",
    why: [
      "Multiple cortical infarcts cause vascular dementia with a stepwise course and focal deficits.",
      "Cortical Lewy bodies cause dementia with Lewy bodies, featuring visual hallucinations, parkinsonism, and fluctuating cognition.",
      "Frontotemporal lobar degeneration causes early behavioral or language change with focal frontotemporal atrophy, often in younger patients.",
      "Correct: amyloid-beta plaques and tau neurofibrillary tangles with hippocampal atrophy define Alzheimer disease.",
      "Prion spongiform change causes rapidly progressive dementia with myoclonus, not this slow amnestic course."
    ]
  },
  {
    id: "s1-0057",
    system: "Behavioral Health & Nervous System",
    discipline: "Physiology",
    topic: "Myasthenia gravis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 32-year-old woman has fluctuating drooping of the eyelids and double vision that worsen through the day and improve with rest. She also has proximal weakness that fatigues with repetition. Symptoms briefly improve after an edrophonium challenge, and chest imaging reveals an anterior mediastinal mass.",
    lead: "Which mechanism best explains her weakness?",
    options: [
      "Antibodies against presynaptic voltage-gated calcium channels",
      "Autoantibodies against postsynaptic acetylcholine receptors",
      "Autoantibodies against voltage-gated potassium channels",
      "Impaired acetylcholine release caused by a bacterial toxin",
      "Segmental demyelination of peripheral motor nerves"
    ],
    answer: 1,
    exp: "Fatigable ptosis and diplopia that worsen with use and improve with acetylcholinesterase inhibition, together with a thymoma, indicate myasthenia gravis. Autoantibodies against the postsynaptic acetylcholine receptor reduce available receptors at the neuromuscular junction, so repeated stimulation produces progressive weakness. Symptoms improve with acetylcholinesterase inhibitors and with rest.",
    why: [
      "Presynaptic calcium channel antibodies cause Lambert-Eaton syndrome, in which strength improves with repeated use and which is linked to small cell lung cancer.",
      "Correct: antibodies against postsynaptic acetylcholine receptors cause fatigable weakness that improves with acetylcholinesterase inhibitors.",
      "Voltage-gated potassium channel antibodies cause neuromyotonia and other syndromes, not fatigable myasthenic weakness.",
      "Impaired acetylcholine release from botulinum toxin causes descending flaccid paralysis, not fluctuating fatigable weakness with a thymoma.",
      "Segmental demyelination of peripheral nerves causes areflexic weakness, not a fatigable neuromuscular junction disorder."
    ]
  },
  {
    id: "s1-0058",
    system: "Behavioral Health & Nervous System",
    discipline: "Behavioral Sciences",
    topic: "Delirium versus dementia",
    difficulty: "easy",
    anchor: null,
    vignette: "A 78-year-old man hospitalized for pneumonia becomes acutely confused over two days. His attention wanders mid-sentence, his thinking is disorganized, and he has visual hallucinations that wax and wane, worse at night. He is drowsy at times and agitated at others. His family says his memory and thinking were entirely normal before this admission.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Alzheimer dementia",
      "Major depressive disorder",
      "Schizophrenia",
      "Dementia with Lewy bodies",
      "Delirium"
    ],
    answer: 4,
    exp: "An acute, fluctuating disturbance of attention and consciousness with disorganized thinking in a medically ill patient with a normal baseline is delirium. It is typically precipitated by an underlying medical problem such as infection, medications, or metabolic derangement, and it is usually reversible when the cause is treated. Impaired attention and the acute, fluctuating course distinguish it from dementia.",
    why: [
      "Alzheimer dementia has a chronic, progressive course with preserved consciousness, not an acute fluctuating one.",
      "Major depression can impair concentration but does not cause acute clouding of consciousness with hallucinations from a medical trigger.",
      "Schizophrenia presents earlier in life with chronic psychosis and a clear sensorium.",
      "Dementia with Lewy bodies is a chronic neurodegenerative disorder; the acute onset with a medical precipitant and normal baseline points to delirium.",
      "Correct: acute, fluctuating inattention and altered consciousness from a medical cause define delirium."
    ]
  },
  {
    id: "s1-0059",
    system: "Musculoskeletal / Skin",
    discipline: "Immunology",
    topic: "Rheumatoid arthritis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 45-year-old woman has several months of symmetric pain and swelling of the metacarpophalangeal and proximal interphalangeal joints and wrists, with morning stiffness lasting over an hour that eases as she uses her hands. She has firm subcutaneous nodules over the elbows, and the distal interphalangeal joints are spared. Anti-cyclic citrullinated peptide antibody and rheumatoid factor are positive.",
    lead: "Which process best explains her joint disease?",
    options: [
      "Immune-mediated synovial inflammation with pannus that erodes cartilage and bone",
      "Degeneration of articular cartilage from mechanical wear",
      "Deposition of monosodium urate crystals",
      "Deposition of calcium pyrophosphate crystals",
      "Enthesitis with sacroiliitis in a seronegative pattern"
    ],
    answer: 0,
    exp: "Symmetric small-joint inflammatory arthritis with prolonged morning stiffness, nodules, sparing of the distal interphalangeal joints, and positive anti-cyclic citrullinated peptide antibody is rheumatoid arthritis. The disease is driven by autoimmune synovial inflammation that forms a proliferative pannus, which erodes cartilage and bone. Anti-cyclic citrullinated peptide antibody is highly specific.",
    why: [
      "Correct: autoimmune synovitis with an erosive pannus produces the symmetric small-joint destruction of rheumatoid arthritis.",
      "Cartilage degeneration from wear is osteoarthritis, which worsens with use, spares no distal joints, and involves the distal interphalangeal joints.",
      "Monosodium urate deposition causes acute gout, typically a monoarticular first-toe attack.",
      "Calcium pyrophosphate deposition causes pseudogout, usually of the knee or wrist.",
      "Enthesitis with sacroiliitis describes seronegative spondyloarthritis, which lacks rheumatoid factor and anti-cyclic citrullinated peptide antibody."
    ]
  },
  {
    id: "s1-0060",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Melanoma prognosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 50-year-old man has a changing pigmented lesion on his back that has become larger and now itches and occasionally bleeds.\n\n**[IMAGE: an 8 mm asymmetric pigmented macule with irregular, notched borders and several shades of brown and black]**\n\nBiopsy shows atypical melanocytes invading the dermis.",
    lead: "Which factor most strongly determines his prognosis?",
    options: [
      "The maximum surface diameter of the lesion",
      "The presence of itching",
      "The depth of dermal invasion (Breslow thickness)",
      "The location of the lesion on the back",
      "The intensity of surface pigmentation"
    ],
    answer: 2,
    exp: "For cutaneous melanoma, the single strongest prognostic factor is the depth of invasion, measured as Breslow thickness. Deeper vertical invasion correlates with a higher risk of metastasis and worse survival. The ABCDE features and change over time prompt biopsy, and sentinel lymph node status further refines staging.",
    why: [
      "Surface diameter is a screening clue but is not the strongest determinant of prognosis.",
      "Itching may prompt evaluation but does not determine outcome.",
      "Correct: Breslow depth of invasion is the strongest predictor of metastatic risk and survival.",
      "Anatomic location is a minor factor compared with depth of invasion.",
      "The degree of surface pigmentation does not determine prognosis; amelanotic melanomas can be aggressive."
    ]
  },
  {
    id: "s1-0061",
    system: "Cardiovascular",
    discipline: "Pathology",
    topic: "Inferior myocardial infarction",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 62-year-old man has 45 minutes of crushing substernal chest pain radiating to the jaw, with diaphoresis and nausea. He is bradycardic and hypotensive.\n\n**[ECG: ST-segment elevation in leads II, III, and aVF]**",
    lead: "Occlusion of which coronary artery is most likely?",
    options: [
      "Left anterior descending artery",
      "Left circumflex artery",
      "Left main coronary artery",
      "Right coronary artery",
      "Obtuse marginal branch"
    ],
    answer: 3,
    exp: "ST elevation in the inferior leads II, III, and aVF indicates an inferior wall myocardial infarction, most often from right coronary artery occlusion. The right coronary artery typically supplies the inferior wall and the sinoatrial and atrioventricular nodes, explaining the bradycardia, and may cause right ventricular infarction with preload-sensitive hypotension. Nitrates should be used cautiously in that setting.",
    why: [
      "Left anterior descending occlusion causes anterior infarction with ST elevation in the precordial leads V1 to V4.",
      "Left circumflex occlusion causes lateral infarction, with changes in leads I, aVL, and V5 to V6.",
      "Left main occlusion causes extensive anterolateral injury and hemodynamic collapse, not isolated inferior changes.",
      "Correct: inferior ST elevation with bradycardia points to right coronary artery occlusion.",
      "The obtuse marginal branch supplies the lateral wall, not the inferior wall."
    ]
  },
  {
    id: "s1-0062",
    system: "Cardiovascular",
    discipline: "Pharmacology",
    topic: "Digoxin mechanism",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 70-year-old man with heart failure and atrial fibrillation is treated with digoxin for rate control and symptom relief.",
    lead: "Which mechanism best explains its positive inotropic effect?",
    options: [
      "Inhibition of the sodium-potassium ATPase, raising intracellular sodium and then calcium through the sodium-calcium exchanger",
      "Beta-1 adrenergic receptor agonism that increases cyclic AMP",
      "Inhibition of phosphodiesterase-3",
      "Blockade of L-type calcium channels",
      "Enhanced calcium reuptake into the sarcoplasmic reticulum"
    ],
    answer: 0,
    exp: "Digoxin inhibits the myocardial sodium-potassium ATPase, raising intracellular sodium; this reduces the drive of the sodium-calcium exchanger, so intracellular calcium rises and contractility increases. It also enhances vagal tone, slowing atrioventricular conduction and helping rate control in atrial fibrillation. Its narrow therapeutic index makes toxicity, worsened by hypokalemia, a key concern.",
    why: [
      "Correct: sodium-potassium ATPase inhibition raises intracellular sodium and then calcium, increasing contractility.",
      "Beta-1 agonism increasing cyclic AMP describes dobutamine, not digoxin.",
      "Phosphodiesterase-3 inhibition describes milrinone.",
      "L-type calcium channel blockade describes verapamil and diltiazem, which are negatively inotropic.",
      "Enhanced sarcoplasmic reticulum calcium reuptake would promote relaxation, not increased contractility."
    ]
  },
  {
    id: "s1-0063",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Sarcoidosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 35-year-old African American woman has a dry cough, exertional dyspnea, and fatigue, along with tender red nodules on her shins and blurred vision from anterior uveitis.\n\n**[IMAGE: chest radiograph showing symmetric bilateral hilar lymphadenopathy]**\n\nSerum angiotensin-converting enzyme is elevated and serum calcium is high; a biopsy shows noncaseating granulomas.",
    lead: "Which process best explains her disease?",
    options: [
      "Caseating granulomas from mycobacterial infection",
      "Eosinophilic granulomas containing Langerhans cells",
      "Necrotizing granulomatous vasculitis with c-ANCA",
      "Antigen-triggered hypersensitivity pneumonitis",
      "Noncaseating granulomas from an exaggerated helper T-cell response"
    ],
    answer: 4,
    exp: "Bilateral hilar lymphadenopathy, noncaseating granulomas, elevated angiotensin-converting enzyme, and hypercalcemia in a young African American woman is sarcoidosis. It is a systemic granulomatous disease driven by an exaggerated helper T-cell response, and granuloma macrophages produce 1-alpha-hydroxylase, activating vitamin D and raising calcium. Erythema nodosum and uveitis are common extrapulmonary features.",
    why: [
      "Caseating granulomas indicate tuberculosis, which this noncaseating, culture-negative picture argues against.",
      "Langerhans cell histiocytosis produces eosinophilic granulomas with Birbeck granules, not this systemic pattern.",
      "Necrotizing granulomatous vasculitis with c-ANCA describes granulomatosis with polyangiitis, which features sinus and renal disease.",
      "Hypersensitivity pneumonitis follows inhaled antigen exposure and lacks the hilar adenopathy, high angiotensin-converting enzyme, and hypercalcemia.",
      "Correct: an exaggerated helper T-cell response drives the noncaseating granulomas of sarcoidosis."
    ]
  },
  {
    id: "s1-0064",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Acute tubular necrosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A patient develops oliguric acute kidney injury after prolonged intraoperative hypotension. The fractional excretion of sodium is greater than 2 percent, and the blood urea nitrogen to creatinine ratio is about 12.\n\n**[IMAGE: urine microscopy showing muddy brown granular casts]**",
    lead: "Which is the most likely cause of the acute kidney injury?",
    options: [
      "Prerenal azotemia from volume depletion",
      "Ischemic acute tubular necrosis",
      "Acute interstitial nephritis",
      "Postrenal obstruction",
      "Rapidly progressive glomerulonephritis"
    ],
    answer: 1,
    exp: "Muddy brown granular casts with a high fractional excretion of sodium after an ischemic insult indicate ischemic acute tubular necrosis. Injured tubular epithelium is shed into the urine as granular casts, and damaged tubules can no longer reabsorb sodium, raising the fractional excretion of sodium. This distinguishes it from prerenal azotemia, which has a low fractional excretion of sodium and bland sediment.",
    why: [
      "Prerenal azotemia has a fractional excretion of sodium below 1 percent, a high blood urea nitrogen to creatinine ratio, and bland urine.",
      "Correct: ischemic tubular injury sheds muddy brown granular casts and raises the fractional excretion of sodium.",
      "Acute interstitial nephritis shows white cell casts and eosinophiluria, usually after a drug exposure.",
      "Postrenal obstruction causes hydronephrosis on imaging rather than granular casts.",
      "Rapidly progressive glomerulonephritis produces red cell casts and dysmorphic red cells, not muddy brown casts."
    ]
  },
  {
    id: "s1-0065",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Crohn disease",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 24-year-old has months of crampy abdominal pain, non-bloody diarrhea, and weight loss, along with mouth ulcers and a perianal fistula. Colonoscopy shows inflamed segments separated by normal-appearing mucosa involving the terminal ileum and patches of colon.\n\n**[IMAGE: cobblestone mucosa with linear serpiginous ulcers and intervening skip areas]**\n\nBiopsy shows transmural inflammation with noncaseating granulomas.",
    lead: "Which finding best characterizes this disease?",
    options: [
      "Continuous mucosal inflammation extending proximally from the rectum",
      "Ischemic injury at the splenic flexure watershed",
      "Transmural, discontinuous (skip) inflammation with noncaseating granulomas",
      "Autoimmune villous atrophy of the small bowel",
      "Pseudomembranes from toxin-producing Clostridioides difficile"
    ],
    answer: 2,
    exp: "Skip lesions, transmural inflammation, noncaseating granulomas, perianal fistula, and involvement of the terminal ileum indicate Crohn disease. It can affect any part of the gastrointestinal tract from mouth to anus, with cobblestoning, strictures, and fistulae from the full-thickness inflammation. This contrasts with ulcerative colitis, which is continuous mucosal disease beginning in the rectum.",
    why: [
      "Continuous mucosal inflammation from the rectum describes ulcerative colitis, not the skip lesions of Crohn disease.",
      "Watershed ischemic injury describes ischemic colitis, typically in older patients.",
      "Correct: transmural skip-lesion inflammation with noncaseating granulomas defines Crohn disease.",
      "Autoimmune villous atrophy describes celiac disease, which lacks fistulae and granulomas.",
      "Pseudomembranes indicate Clostridioides difficile colitis, usually after antibiotic exposure."
    ]
  },
  {
    id: "s1-0066",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Hereditary hemochromatosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 50-year-old man has fatigue, aching second and third knuckles, a bronze skin tone, new diabetes, and hepatomegaly.\n\n| Test | Value | Reference |\n|---|---|---|\n| Transferrin saturation | markedly elevated | 20-50% |\n| Ferritin | markedly elevated | 30-300 ng/mL |\n\nGenetic testing shows homozygous HFE C282Y.",
    lead: "Which mechanism best explains his disease?",
    options: [
      "Copper accumulation from impaired biliary excretion",
      "Autoimmune destruction of pancreatic islet cells",
      "Chronic hepatitis C infection",
      "Iron loading solely from alcohol use",
      "Increased intestinal iron absorption from HFE-related hepcidin deficiency"
    ],
    answer: 4,
    exp: "Iron overload with a very high transferrin saturation and ferritin, bronze skin, diabetes, arthropathy, and homozygous HFE C282Y is hereditary hemochromatosis. The HFE defect lowers hepcidin, so intestinal iron absorption is unrestrained and iron deposits in the liver, pancreas, heart, joints, and skin. Phlebotomy is the mainstay of treatment.",
    why: [
      "Copper accumulation from impaired biliary excretion describes Wilson disease, not iron overload.",
      "Autoimmune islet destruction is type 1 diabetes and does not cause systemic iron overload.",
      "Chronic hepatitis C causes liver disease but not this genetic iron-loading pattern.",
      "Alcohol can modestly raise iron stores but does not explain homozygous HFE disease.",
      "Correct: HFE-related hepcidin deficiency increases intestinal iron absorption, causing systemic iron overload."
    ]
  },
  {
    id: "s1-0067",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Type 1 diabetes and diabetic ketoacidosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 12-year-old has several weeks of excessive thirst, frequent urination, and weight loss, and now has vomiting, abdominal pain, deep rapid breathing, and a fruity odor on the breath.\n\n| Test | Value | Reference |\n|---|---|---|\n| Glucose | 480 mg/dL | 70-100 |\n| Bicarbonate | 10 mEq/L | 22-28 |\n| Beta-hydroxybutyrate | markedly elevated | low |\n| C-peptide | low | normal |\n\nGlutamic acid decarboxylase antibodies are positive.",
    lead: "Which mechanism best explains this presentation?",
    options: [
      "Peripheral insulin resistance with preserved insulin secretion",
      "Autoimmune destruction of pancreatic beta cells causing absolute insulin deficiency",
      "A glucagon-secreting pancreatic tumor",
      "Excess cortisol from an adrenal tumor",
      "Defective insulin receptor signaling related to obesity"
    ],
    answer: 1,
    exp: "New-onset hyperglycemia with a high anion gap metabolic acidosis, ketonemia, low C-peptide, and islet autoantibodies in a child is type 1 diabetes presenting as diabetic ketoacidosis. Autoimmune T-cell destruction of beta cells causes absolute insulin deficiency, which unleashes lipolysis and hepatic ketogenesis. The result is the ketoacidosis with Kussmaul breathing and a fruity breath odor.",
    why: [
      "Peripheral insulin resistance with preserved secretion describes type 2 diabetes, which less often presents with ketoacidosis in a lean child.",
      "Correct: autoimmune beta cell destruction causes absolute insulin deficiency and ketoacidosis.",
      "A glucagonoma causes hyperglycemia with necrolytic migratory erythema, not autoantibody-positive ketoacidosis.",
      "Excess cortisol causes Cushing syndrome, not islet autoantibodies and low C-peptide.",
      "Obesity-related receptor signaling defects underlie type 2 diabetes, not this autoimmune presentation."
    ]
  },
  {
    id: "s1-0068",
    system: "Reproductive & Endocrine",
    discipline: "Physiology",
    topic: "Cushing disease and dexamethasone suppression",
    difficulty: "hard",
    anchor: null,
    vignette: "A woman has central obesity, a rounded face, purple abdominal striae, proximal muscle weakness, hypertension, and hyperglycemia. On testing, low-dose dexamethasone fails to suppress her cortisol, but high-dose dexamethasone does suppress it, and her plasma adrenocorticotropic hormone is elevated.",
    lead: "Which is the most likely source of the cortisol excess?",
    options: [
      "Exogenous glucocorticoid use",
      "A cortisol-secreting adrenal adenoma",
      "An adrenocorticotropic hormone-secreting pituitary adenoma",
      "Ectopic adrenocorticotropic hormone from a small cell lung carcinoma",
      "A cortisol-secreting adrenal carcinoma"
    ],
    answer: 2,
    exp: "Cortisol excess that resists low-dose but responds to high-dose dexamethasone, with an elevated adrenocorticotropic hormone, is Cushing disease from a pituitary adenoma. Such adenomas retain partial negative feedback, so only high-dose dexamethasone suppresses them. This contrasts with ectopic adrenocorticotropic hormone, which does not suppress, and with adrenal tumors, which have suppressed adrenocorticotropic hormone.",
    why: [
      "Exogenous glucocorticoid use suppresses adrenocorticotropic hormone and endogenous cortisol, not the pattern shown.",
      "A cortisol-secreting adrenal adenoma has low adrenocorticotropic hormone and does not suppress with dexamethasone.",
      "Correct: a pituitary adenoma retains partial feedback, suppressing with high-dose but not low-dose dexamethasone, with high adrenocorticotropic hormone.",
      "Ectopic adrenocorticotropic hormone from small cell carcinoma has high adrenocorticotropic hormone that does not suppress even at high dose.",
      "An adrenal carcinoma secretes cortisol autonomously with low adrenocorticotropic hormone and no suppression."
    ]
  },
  {
    id: "s1-0069",
    system: "Reproductive & Endocrine",
    discipline: "Physiology",
    topic: "Polycystic ovary syndrome",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 26-year-old woman has irregular, infrequent periods, coarse facial hair, acne, and obesity, and she has been unable to conceive. Laboratory testing shows an elevated free testosterone, and ultrasound shows numerous small peripheral ovarian follicles. She has darkened skin folds at the neck.",
    lead: "Which mechanism best explains her presentation?",
    options: [
      "Hyperandrogenism with insulin resistance and chronic anovulation",
      "Premature ovarian failure with elevated follicle-stimulating hormone",
      "A prolactin-secreting pituitary adenoma",
      "A late-onset 21-hydroxylase deficiency crisis",
      "An androgen-secreting ovarian tumor causing rapid virilization"
    ],
    answer: 0,
    exp: "Oligomenorrhea, hyperandrogenism, and polycystic ovaries with insulin resistance are polycystic ovary syndrome. Insulin resistance drives increased ovarian androgen production and lowers sex hormone-binding globulin, raising free testosterone and disrupting ovulation. It carries increased risk of endometrial hyperplasia and type 2 diabetes.",
    why: [
      "Correct: hyperandrogenism with insulin resistance and anovulation defines polycystic ovary syndrome.",
      "Premature ovarian failure causes menopausal symptoms with high follicle-stimulating hormone and low estrogen, not hyperandrogenism.",
      "A prolactinoma causes galactorrhea and amenorrhea from low estrogen, not hyperandrogenism with polycystic ovaries.",
      "Late-onset congenital adrenal hyperplasia shows markedly elevated 17-hydroxyprogesterone, unlike the typical polycystic ovary syndrome picture.",
      "An androgen-secreting tumor causes rapid, severe virilization with very high testosterone, unlike this gradual course."
    ]
  },
  {
    id: "s1-0070",
    system: "Multisystem",
    discipline: "Microbiology",
    topic: "Lyme disease",
    difficulty: "easy",
    anchor: "image",
    vignette: "A hiker in the northeastern United States develops, in midsummer, an enlarging red skin lesion on the thigh with central clearing, along with low-grade fever and diffuse muscle aches.\n\n**[IMAGE: a single large targetoid (bull's-eye) erythematous plaque with central clearing]**",
    lead: "Which organism is the most likely cause?",
    options: [
      "Rickettsia rickettsii",
      "Ehrlichia chaffeensis",
      "Staphylococcus aureus",
      "Borrelia burgdorferi",
      "Babesia microti"
    ],
    answer: 3,
    exp: "An expanding targetoid rash with central clearing after outdoor exposure in the northeastern United States is erythema migrans, the early sign of Lyme disease caused by Borrelia burgdorferi. The spirochete is transmitted by the Ixodes tick, and untreated infection can progress to carditis with heart block, facial palsy, and later arthritis. Early disease is treated with doxycycline.",
    why: [
      "Rocky Mountain spotted fever from Rickettsia rickettsii causes a petechial rash starting on the wrists and ankles, not a target lesion.",
      "Ehrlichiosis causes a nonspecific febrile illness with morulae in leukocytes, without erythema migrans.",
      "Staphylococcal cellulitis causes spreading erythema without central clearing or a target appearance.",
      "Correct: Borrelia burgdorferi causes erythema migrans and the stages of Lyme disease.",
      "Babesiosis causes a malaria-like hemolytic illness, not a targetoid rash."
    ]
  },
  {
    id: "s1-0071",
    system: "Multisystem",
    discipline: "Genetics",
    topic: "Retinoblastoma (two-hit hypothesis)",
    difficulty: "moderate",
    anchor: "image",
    vignette: "An 18-month-old is brought in because a white reflection appears in one pupil in flash photographs instead of the normal red reflex, and one eye has begun to turn inward.\n\n**[IMAGE: leukocoria, a white pupillary reflex, in the left eye]**\n\nBilateral, familial cases of this tumor are recognized.",
    lead: "Which mechanism underlies the hereditary form?",
    options: [
      "Amplification of the N-myc oncogene",
      "Constitutive activation of a receptor tyrosine kinase",
      "Inheriting one mutated RB1 allele, with a somatic second hit inactivating the other",
      "Loss of DNA mismatch repair genes",
      "A gain-of-function mutation in RAS"
    ],
    answer: 2,
    exp: "Leukocoria in a young child indicates retinoblastoma, a tumor of the RB1 tumor suppressor gene. In the hereditary form, one defective RB1 allele is inherited in the germline, so only a single somatic second hit is needed to inactivate the remaining allele, explaining the earlier onset and bilateral, multifocal tumors of Knudson's two-hit hypothesis. These patients also have increased risk of osteosarcoma.",
    why: [
      "N-myc amplification drives neuroblastoma, not retinoblastoma.",
      "Constitutive receptor tyrosine kinase activation is an oncogene mechanism, not the two-hit loss of a tumor suppressor.",
      "Correct: a germline RB1 mutation plus a somatic second hit inactivates both alleles, per the two-hit hypothesis.",
      "Loss of mismatch repair genes underlies Lynch syndrome, not retinoblastoma.",
      "A gain-of-function RAS mutation activates an oncogene and does not explain the tumor suppressor mechanism here."
    ]
  },
  {
    id: "s1-0072",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Sensitivity and ruling out disease",
    difficulty: "moderate",
    anchor: null,
    vignette: "A screening test for a condition has very high sensitivity but only moderate specificity. A patient undergoes the test, and the result is negative.",
    lead: "Which conclusion is best supported?",
    options: [
      "A negative result on a highly sensitive test helps rule out the disease",
      "A negative result confirms that the disease is present",
      "A positive result on this test definitively rules in the disease",
      "Sensitivity depends on the disease prevalence in the population",
      "The positive predictive value is high regardless of prevalence"
    ],
    answer: 0,
    exp: "A highly sensitive test produces few false negatives, so a negative result is useful for ruling out disease, captured by the mnemonic SnNout. Ruling in disease instead requires high specificity (SpPin). Sensitivity and specificity are intrinsic test properties independent of prevalence, whereas predictive values change with prevalence.",
    why: [
      "Correct: with high sensitivity, a negative result argues strongly against disease and helps rule it out.",
      "A negative result does not confirm disease presence; it makes disease less likely.",
      "Ruling in disease with confidence requires high specificity, which this test lacks.",
      "Sensitivity is an intrinsic property of the test and does not depend on prevalence.",
      "Predictive values, unlike sensitivity, do depend on prevalence, so this claim is false."
    ]
  },
  {
    id: "s1-0073",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Case-control study measures",
    difficulty: "moderate",
    anchor: null,
    vignette: "Investigators studying a rare cancer enroll 100 patients who already have the cancer and 100 comparable people without it, then compare each group's past exposure to an industrial chemical.",
    lead: "Which measure of association is most appropriate for this design?",
    options: [
      "Relative risk, because incidence can be calculated directly",
      "Absolute risk reduction",
      "Attributable risk",
      "Number needed to treat",
      "Odds ratio, because incidence cannot be measured directly in this design"
    ],
    answer: 4,
    exp: "Selecting participants by disease status and looking backward at exposure is a case-control study. Because participants are chosen on the outcome, incidence and therefore relative risk cannot be measured directly, so the odds ratio is used and approximates relative risk when the disease is rare. Case-control designs are efficient for studying rare diseases.",
    why: [
      "Relative risk requires incidence data from a cohort or trial, which a case-control design cannot provide.",
      "Absolute risk reduction applies to interventions with measurable event rates, not this observational design.",
      "Attributable risk also requires incidence data unavailable in a case-control study.",
      "Number needed to treat applies to trials of interventions, not an exposure case-control study.",
      "Correct: the odds ratio is appropriate because incidence cannot be measured directly in a case-control study."
    ]
  },
  {
    id: "s1-0074",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Disclosure of medical error",
    difficulty: "easy",
    anchor: null,
    vignette: "A nurse mistakenly administers a tenfold overdose of insulin. The patient becomes hypoglycemic but is promptly treated and recovers completely, with no lasting harm. The team is deciding what to tell the patient.",
    lead: "Which is the most appropriate action?",
    options: [
      "Do not mention it, since there was no lasting harm",
      "Disclose the error honestly, including what happened and the steps taken",
      "Disclose it only if the patient specifically asks",
      "Report it internally but do not inform the patient",
      "Defer to risk management about whether to tell the patient later"
    ],
    answer: 1,
    exp: "Ethical practice requires honest and timely disclosure of medical errors to the patient, including what happened, any consequences, and the corrective steps taken, even when harm was averted. Transparency respects patient autonomy and sustains trust. Internal reporting for system improvement is important but does not replace disclosure to the patient.",
    why: [
      "Withholding the error because no harm resulted violates the duty of honesty and transparency.",
      "Correct: the error should be disclosed honestly, with an account of what happened and the response.",
      "Disclosure should not be contingent on the patient asking; it is owed proactively.",
      "Internal reporting alone leaves the patient uninformed and is not sufficient.",
      "Deferring the decision to risk management delays owed disclosure to the patient."
    ]
  },
  {
    id: "s1-0075",
    system: "Social Sciences / Ethics",
    discipline: "Communication",
    topic: "Use of a professional interpreter",
    difficulty: "easy",
    anchor: null,
    vignette: "A patient who speaks limited English needs to give informed consent for a procedure. Her adult son offers to interpret, and a hospital-trained medical interpreter is also available.",
    lead: "Which is the most appropriate action?",
    options: [
      "Proceed using the son as the interpreter to save time",
      "Rely on written English materials and gestures",
      "Postpone the procedure until the patient learns English",
      "Use the professional medical interpreter",
      "Ask another bilingual patient to assist"
    ],
    answer: 3,
    exp: "A trained professional medical interpreter should be used to ensure accurate, complete, and confidential communication and valid informed consent. Family members may make errors, omit or filter information, and compromise privacy, especially with sensitive content. Using the professional interpreter best protects understanding and autonomy.",
    why: [
      "Using the son risks translation errors, omissions, and breaches of privacy, and is not appropriate for consent.",
      "Written English materials and gestures cannot ensure understanding for a patient with limited English.",
      "Postponing until the patient learns English is neither realistic nor respectful of her needs.",
      "Correct: a professional medical interpreter ensures accurate, confidential communication and valid consent.",
      "Recruiting another patient to interpret breaches confidentiality and risks inaccuracy."
    ]
  }
];
