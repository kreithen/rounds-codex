/*
 * Rounds Codex - USMLE Step 1 question bank, Batch 9 (25 items)
 * Blueprint-weighted mix. All vignettes original; source used for facts only.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP1_B9 = [
  {
    id: "s1-0201",
    system: "General Principles",
    discipline: "Biochemistry",
    topic: "Pompe disease (glycogen storage disease type II)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 5-month-old infant is evaluated for profound floppiness and poor feeding. He has marked hypotonia, a large protruding tongue, and hepatomegaly. Examination reveals a hyperdynamic precordium, and echocardiography shows massively thickened ventricular walls. He tires quickly and has difficulty breathing, and the family is counseled that the disease often causes death from cardiorespiratory failure in infancy.",
    lead: "A deficiency of which enzyme best explains this presentation?",
    options: [
      "Lysosomal acid alpha-glucosidase (acid maltase)",
      "Glucose-6-phosphatase",
      "Glycogen debranching enzyme (alpha-1,6-glucosidase)",
      "Skeletal muscle glycogen phosphorylase (myophosphorylase)",
      "Lysosomal alpha-galactosidase A"
    ],
    answer: 0,
    exp: "Infantile hypotonia (\"floppy baby\"), macroglossia, hepatomegaly, and a massively hypertrophic cardiomyopathy indicate Pompe disease, glycogen storage disease type II. Deficiency of lysosomal acid alpha-glucosidase (acid maltase) prevents lysosomal degradation of glycogen, so glycogen accumulates within lysosomes of cardiac and skeletal muscle. Because the defect is lysosomal, blood glucose is not affected, distinguishing it from the cytosolic glycogenoses.",
    why: [
      "Correct: deficiency of lysosomal acid alpha-glucosidase (acid maltase) causes lysosomal glycogen accumulation, producing the cardiomegaly, hypotonia, and macroglossia of Pompe disease.",
      "Glucose-6-phosphatase deficiency causes von Gierke disease with fasting hypoglycemia and hepatomegaly, not a hypertrophic cardiomyopathy.",
      "Debranching enzyme deficiency causes Cori disease with milder hypoglycemia and hepatomegaly, without the severe infantile cardiomyopathy.",
      "Myophosphorylase deficiency causes McArdle disease with exercise-induced cramps in adults, not infantile cardiomegaly and hypotonia.",
      "Alpha-galactosidase A deficiency causes Fabry disease with acroparesthesias and angiokeratomas, not glycogen accumulation."
    ]
  },
  {
    id: "s1-0202",
    system: "General Principles",
    discipline: "Pharmacology",
    topic: "Aminoglycoside mechanism (30S ribosomal subunit)",
    difficulty: "easy",
    anchor: null,
    vignette: "A 58-year-old man with gram-negative bacteremia is started on intravenous gentamicin. He is counseled that his kidney function and hearing will be monitored during therapy because of potential nephrotoxicity and ototoxicity.",
    lead: "Which mechanism best explains the antibacterial action of this drug?",
    options: [
      "Inhibition of DNA gyrase (topoisomerase II)",
      "Binding the 30S ribosomal subunit, causing misreading of mRNA and blocking initiation",
      "Binding penicillin-binding proteins to disrupt cell wall synthesis",
      "Inhibition of dihydrofolate reductase blocking folate synthesis",
      "Inhibition of RNA polymerase blocking transcription"
    ],
    answer: 1,
    exp: "Aminoglycosides such as gentamicin bind irreversibly to the 30S ribosomal subunit, causing misreading of the genetic code and blocking formation of the initiation complex, which is bactericidal against aerobic gram-negative bacteria. Their uptake into bacteria is oxygen-dependent, so they are inactive against anaerobes. Nephrotoxicity and ototoxicity are the major dose-related adverse effects.",
    why: [
      "DNA gyrase inhibition is the mechanism of fluoroquinolones, not aminoglycosides.",
      "Correct: aminoglycosides bind the 30S ribosomal subunit, causing mRNA misreading and blocking initiation of protein synthesis.",
      "Binding penicillin-binding proteins describes beta-lactams, which act on the cell wall rather than the ribosome.",
      "Dihydrofolate reductase inhibition describes trimethoprim, acting on folate metabolism.",
      "RNA polymerase inhibition is the mechanism of rifampin, not aminoglycosides."
    ]
  },
  {
    id: "s1-0203",
    system: "General Principles",
    discipline: "Pharmacology",
    topic: "Warfarin mechanism (vitamin K epoxide reductase)",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 67-year-old man taking an oral anticoagulant for atrial fibrillation presents with gum bleeding and easy bruising after starting an antibiotic. His anticoagulant is held and he is given vitamin K, which gradually corrects his coagulation studies.\n\n| Test | Value | Reference |\n|---|---|---|\n| Prothrombin time (PT) | 42 s | 11-13.5 |\n| INR | 6.5 | 0.9-1.1 |\n| aPTT | mildly prolonged | 25-35 |\n| Platelet count | normal | 150,000-400,000 |",
    lead: "Which mechanism best explains the action of this anticoagulant?",
    options: [
      "Direct inhibition of thrombin (factor IIa)",
      "Direct inhibition of activated factor X",
      "Inhibition of vitamin K epoxide reductase, impairing gamma-carboxylation of factors II, VII, IX, and X",
      "Potentiation of antithrombin activity",
      "Irreversible inhibition of platelet cyclooxygenase"
    ],
    answer: 2,
    exp: "The oral vitamin K antagonist warfarin inhibits vitamin K epoxide reductase, blocking regeneration of reduced vitamin K needed for gamma-carboxylation of clotting factors II, VII, IX, and X (and proteins C and S). This impairs the function of these factors and prolongs the prothrombin time and INR. Reversal with vitamin K restores carboxylation capacity, explaining the gradual correction.",
    why: [
      "Direct thrombin inhibition describes dabigatran, not warfarin, and is not reversed by vitamin K.",
      "Direct factor Xa inhibition describes agents such as rivaroxaban, whose effect is not corrected by vitamin K.",
      "Correct: warfarin inhibits vitamin K epoxide reductase, impairing gamma-carboxylation of factors II, VII, IX, and X, prolonging the PT/INR reversibly with vitamin K.",
      "Potentiation of antithrombin is the mechanism of heparin, which prolongs the aPTT and is reversed with protamine.",
      "Irreversible platelet cyclooxygenase inhibition describes aspirin, an antiplatelet agent, not an anticoagulant affecting the INR."
    ]
  },
  {
    id: "s1-0204",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Hematology",
    topic: "Von Willebrand disease",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 19-year-old woman reports lifelong easy bruising, frequent nosebleeds, heavy menstrual periods, and prolonged bleeding after a dental extraction. Her mother has similar symptoms. She takes no medications.\n\n| Test | Value | Reference |\n|---|---|---|\n| Platelet count | normal | 150,000-400,000 |\n| Prothrombin time | normal | 11-13.5 |\n| aPTT | mildly prolonged | 25-35 |\n| Platelet function analysis (closure time) | prolonged | normal |\n| Ristocetin cofactor activity | decreased | normal |",
    lead: "Which best explains her bleeding disorder?",
    options: [
      "Isolated deficiency of factor VIII",
      "Deficiency of the platelet glycoprotein IIb/IIIa receptor",
      "Deficiency of the metalloprotease ADAMTS13",
      "A quantitative or qualitative defect of von Willebrand factor impairing platelet adhesion",
      "Vitamin K deficiency impairing clotting factor carboxylation"
    ],
    answer: 3,
    exp: "Lifelong mucocutaneous bleeding (epistaxis, menorrhagia, gum and post-procedure bleeding) with a normal platelet count, prolonged platelet function closure time, decreased ristocetin cofactor activity, and a mildly prolonged aPTT indicate von Willebrand disease, the most common inherited bleeding disorder. Von Willebrand factor mediates platelet adhesion to injured endothelium and stabilizes factor VIII; its deficiency causes a combined platelet-type and mild coagulation defect.",
    why: [
      "Isolated factor VIII deficiency causes hemophilia A, an X-linked disorder with hemarthroses and deep bleeding, not mucocutaneous bleeding with abnormal ristocetin cofactor activity.",
      "Glycoprotein IIb/IIIa deficiency causes Glanzmann thrombasthenia, which impairs platelet aggregation but has normal ristocetin cofactor and von Willebrand factor.",
      "ADAMTS13 deficiency causes thrombotic thrombocytopenic purpura with thrombocytopenia and microangiopathic hemolysis, not lifelong mucosal bleeding with normal platelets.",
      "Correct: a quantitative or qualitative von Willebrand factor defect impairs platelet adhesion and lowers factor VIII, producing mucocutaneous bleeding with decreased ristocetin cofactor activity.",
      "Vitamin K deficiency prolongs the prothrombin time and is acquired, not a lifelong familial mucocutaneous bleeding disorder with a normal PT."
    ]
  },
  {
    id: "s1-0205",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Pathology",
    topic: "Polycythemia vera",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 61-year-old man reports intense generalized itching after hot showers, headaches, blurred vision, and a burning redness of his hands. He has facial plethora and a palpable spleen. He had a recent unprovoked deep vein thrombosis.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 20.5 g/dL | 13.5-17.5 |\n| Hematocrit | 62% | 41-53 |\n| Serum erythropoietin | low | normal |\n| JAK2 V617F mutation | positive | negative |",
    lead: "Which best explains his condition?",
    options: [
      "Appropriately increased erythropoietin from chronic hypoxemia",
      "Paraneoplastic erythropoietin secretion from a renal cell carcinoma",
      "Relative erythrocytosis from plasma volume contraction",
      "Reactive erythrocytosis from a right-to-left cardiac shunt",
      "A JAK2 mutation driving erythropoietin-independent clonal myeloproliferation"
    ],
    answer: 4,
    exp: "Elevated hemoglobin and hematocrit with aquagenic pruritus, erythromelalgia, splenomegaly, thrombosis, and a low erythropoietin with a JAK2 V617F mutation indicate polycythemia vera. The JAK2 mutation causes constitutive tyrosine kinase signaling, so the erythroid clone proliferates independent of erythropoietin, which is suppressed by feedback. Increased blood viscosity and platelet dysfunction predispose to thrombosis, and treatment centers on phlebotomy and aspirin.",
    why: [
      "Chronic hypoxemia raises erythropoietin, but this patient's erythropoietin is low, indicating a primary marrow process.",
      "An erythropoietin-secreting renal cell carcinoma would raise erythropoietin, not suppress it as seen here.",
      "Relative erythrocytosis from volume contraction does not cause splenomegaly, a JAK2 mutation, or a truly elevated red cell mass.",
      "A right-to-left shunt causes hypoxemia with elevated erythropoietin, not the low erythropoietin and JAK2 mutation of polycythemia vera.",
      "Correct: a JAK2 V617F mutation drives erythropoietin-independent clonal erythroid proliferation, causing polycythemia vera with a low erythropoietin, pruritus, and thrombosis."
    ]
  },
  {
    id: "s1-0206",
    system: "Behavioral Health & Nervous System",
    discipline: "Pathology",
    topic: "Glioblastoma multiforme",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 62-year-old man has several weeks of progressively worsening headaches that are worst in the morning, new left-sided weakness, and a first-ever generalized seizure. He is afebrile with no history of trauma.\n\n**[IMAGE: contrast-enhanced brain MRI showing a large irregular ring-enhancing mass with central necrosis crossing the corpus callosum to involve both hemispheres]**",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Glioblastoma with pseudopalisading necrosis and microvascular proliferation",
      "Meningioma arising from arachnoid cap cells",
      "Vestibular schwannoma",
      "Oligodendroglioma with a fried-egg appearance",
      "Prolactin-secreting pituitary adenoma"
    ],
    answer: 0,
    exp: "A rapidly progressive focal deficit, morning headaches from raised intracranial pressure, and seizures in an older adult with a necrotic, ring-enhancing mass crossing the corpus callosum (\"butterfly glioma\") indicate glioblastoma, the most common malignant primary brain tumor in adults. Histology shows pseudopalisading necrosis and microvascular proliferation, and prognosis is poor despite treatment.",
    why: [
      "Correct: a butterfly ring-enhancing mass crossing the corpus callosum with pseudopalisading necrosis and microvascular proliferation is characteristic of glioblastoma.",
      "Meningiomas are extra-axial dural-based masses that are usually benign and do not cross the corpus callosum with central necrosis.",
      "A vestibular schwannoma arises at the cerebellopontine angle causing hearing loss, not a necrotic hemispheric mass with seizures.",
      "Oligodendroglioma is typically a slower-growing calcified frontal tumor and does not usually present as a necrotic butterfly lesion.",
      "A prolactinoma is a sellar tumor causing galactorrhea and visual field loss, not a ring-enhancing hemispheric mass."
    ]
  },
  {
    id: "s1-0207",
    system: "Behavioral Health & Nervous System",
    discipline: "Psychiatry",
    topic: "Alcohol withdrawal and delirium tremens",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 54-year-old man admitted two days ago for a hip fracture becomes tremulous, agitated, and disoriented. He is tachycardic, hypertensive, febrile, and profusely diaphoretic, and he reports seeing insects crawling on the walls. His family notes he drinks heavily every day, and he has had no alcohol since admission.",
    lead: "Which best explains this presentation?",
    options: [
      "Wernicke encephalopathy from thiamine deficiency",
      "Delirium tremens from central nervous system hyperexcitability after alcohol cessation",
      "Acute alcohol intoxication",
      "Hepatic encephalopathy from hyperammonemia",
      "Serotonin syndrome from a drug interaction"
    ],
    answer: 1,
    exp: "Autonomic hyperactivity (tachycardia, hypertension, fever, diaphoresis), tremor, agitation, disorientation, and hallucinations developing about 48-72 hours after the last drink in a heavy daily drinker indicate delirium tremens. Chronic alcohol enhances inhibitory GABA tone and suppresses excitatory glutamate signaling; abrupt cessation removes this inhibition, producing dangerous CNS hyperexcitability. Benzodiazepines are the treatment of choice.",
    why: [
      "Wernicke encephalopathy causes confusion, ophthalmoplegia, and ataxia without the florid autonomic instability and hallucinations of delirium tremens.",
      "Correct: abrupt alcohol cessation removes chronic GABA enhancement and glutamate suppression, producing the autonomic hyperactivity, tremor, and hallucinations of delirium tremens.",
      "Acute intoxication causes sedation and disinhibition, not the hyperadrenergic withdrawal state seen two days after the last drink.",
      "Hepatic encephalopathy causes asterixis and somnolence with elevated ammonia, not a hyperadrenergic tremulous delirium timed to alcohol cessation.",
      "Serotonin syndrome follows serotonergic drugs and features clonus and hyperreflexia, not withdrawal timed to stopping alcohol."
    ]
  },
  {
    id: "s1-0208",
    system: "Behavioral Health & Nervous System",
    discipline: "Psychiatry",
    topic: "Borderline personality disorder",
    difficulty: "easy",
    anchor: null,
    vignette: "A 24-year-old woman is seen after a superficial wrist-cutting episode following a breakup. She describes a pattern of intense, unstable relationships in which she alternately idealizes and then devalues partners, a chronic sense of emptiness, frantic efforts to avoid being abandoned, impulsive spending and substance use, and recurrent self-harm. Her sense of who she is shifts frequently.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Histrionic personality disorder",
      "Narcissistic personality disorder",
      "Borderline personality disorder",
      "Antisocial personality disorder",
      "Bipolar II disorder"
    ],
    answer: 2,
    exp: "A pervasive pattern of unstable relationships with splitting (idealization and devaluation), identity disturbance, chronic emptiness, frantic efforts to avoid abandonment, impulsivity, and recurrent self-harm defines borderline personality disorder. It is a Cluster B personality disorder; dialectical behavior therapy is the treatment with the best evidence.",
    why: [
      "Histrionic personality disorder features excessive attention-seeking and shallow, shifting emotions, not self-harm with abandonment fears and splitting.",
      "Narcissistic personality disorder centers on grandiosity and a need for admiration, without the self-harm and identity disturbance seen here.",
      "Correct: unstable relationships with splitting, identity disturbance, chronic emptiness, abandonment fears, impulsivity, and self-harm define borderline personality disorder.",
      "Antisocial personality disorder involves disregard for and violation of others' rights, not self-directed harm and abandonment sensitivity.",
      "Bipolar II disorder features discrete hypomanic and depressive episodes lasting days, not a chronic pattern of unstable relationships and self-image."
    ]
  },
  {
    id: "s1-0209",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Giant cell (temporal) arteritis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 74-year-old woman reports a new, persistent right-sided temporal headache with scalp tenderness when she combs her hair and jaw pain that develops while chewing. This morning she had a brief episode of painless vision loss in the right eye that resolved. She also has several weeks of shoulder and hip girdle stiffness.\n\n| Test | Value | Reference |\n|---|---|---|\n| Erythrocyte sedimentation rate | 96 mm/hr | 0-30 |\n| C-reactive protein | markedly elevated | < 5 |\n| Hemoglobin | 10.8 g/dL (normocytic) | 12-16 |",
    lead: "Which is the most appropriate next step?",
    options: [
      "Schedule an outpatient temporal artery biopsy and withhold all treatment until the result returns",
      "Obtain brain MRI before initiating any therapy",
      "Prescribe low-dose ibuprofen and arrange routine follow-up",
      "Start high-dose glucocorticoids immediately, then obtain a temporal artery biopsy",
      "Perform urgent carotid endarterectomy"
    ],
    answer: 3,
    exp: "A new temporal headache, scalp tenderness, jaw claudication, transient monocular vision loss, polymyalgia symptoms, and a very high ESR and CRP in an older woman indicate giant cell arteritis. Because untreated disease can cause sudden, permanent blindness from anterior ischemic optic neuropathy, high-dose glucocorticoids must be started immediately on clinical suspicion; biopsy can be obtained afterward, since arterial inflammation persists for days despite steroids.",
    why: [
      "Delaying treatment for biopsy risks irreversible blindness; steroids should not be withheld while awaiting the procedure.",
      "Brain MRI does not diagnose giant cell arteritis and delaying steroids for imaging risks permanent vision loss.",
      "NSAIDs with routine follow-up are inadequate for a vision-threatening large-vessel vasculitis.",
      "Correct: giant cell arteritis threatens vision, so high-dose glucocorticoids are started immediately on suspicion and biopsy is obtained afterward.",
      "Carotid endarterectomy treats carotid stenosis, not the inflammatory arteritis causing this presentation."
    ]
  },
  {
    id: "s1-0210",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Ewing sarcoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 12-year-old boy has several weeks of pain and swelling of the mid-thigh, low-grade fever, and mild weight loss, and an elevated white cell count initially raised concern for infection. A biopsy shows sheets of small round blue cells that stain for CD99.\n\n**[IMAGE: radiograph of the femoral diaphysis showing a lytic lesion with a multilayered \"onion-skin\" periosteal reaction]**",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Osteosarcoma with a sunburst pattern and Codman triangle",
      "Osteochondroma",
      "Giant cell tumor of bone",
      "Osteoid osteoma",
      "Ewing sarcoma with a t(11;22) translocation"
    ],
    answer: 4,
    exp: "A diaphyseal lytic lesion with an onion-skin periosteal reaction in a child, systemic symptoms mimicking infection, and small round blue cells expressing CD99 indicate Ewing sarcoma. It is driven by the t(11;22)(q24;q12) translocation producing the EWSR1-FLI1 fusion oncoprotein. It classically arises in the diaphysis of long bones or the pelvis in children and adolescents.",
    why: [
      "Osteosarcoma arises at the metaphysis with a sunburst pattern and Codman triangle and produces osteoid, not small round blue cells with an onion-skin reaction.",
      "Osteochondroma is a benign cartilage-capped bony outgrowth, not a destructive lytic diaphyseal lesion with systemic symptoms.",
      "Giant cell tumor is an epiphyseal lesion in young adults with multinucleated giant cells, not a small round blue cell diaphyseal tumor of childhood.",
      "Osteoid osteoma is a small benign lesion causing night pain relieved by NSAIDs, without an aggressive onion-skin appearance.",
      "Correct: a diaphyseal onion-skin lesion with CD99-positive small round blue cells and a t(11;22) EWSR1-FLI1 translocation defines Ewing sarcoma."
    ]
  },
  {
    id: "s1-0211",
    system: "Cardiovascular",
    discipline: "Physiology",
    topic: "Atrial fibrillation",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 72-year-old man with long-standing hypertension reports palpitations and mild breathlessness. His pulse is irregular in both rate and rhythm. He is counseled about the increased risk of embolic stroke from clot forming in the left atrial appendage.\n\n**[ECG: irregularly irregular RR intervals with no discrete P waves and a fibrillatory baseline]**",
    lead: "Which best explains his rhythm?",
    options: [
      "Disorganized atrial electrical activity with an irregularly irregular ventricular response and loss of the atrial kick",
      "A reentrant circuit using an accessory pathway",
      "Appropriate sinus tachycardia from increased sympathetic tone",
      "Complete dissociation of regular atrial and ventricular rhythms",
      "Isolated premature ventricular complexes"
    ],
    answer: 0,
    exp: "An irregularly irregular rhythm with absent P waves and a fibrillatory baseline is atrial fibrillation. Chaotic, disorganized atrial electrical activity produces an irregular ventricular response and loss of the coordinated atrial contribution to filling (the atrial kick). Stasis in the fibrillating left atrial appendage predisposes to thrombus and embolic stroke, so anticoagulation is guided by stroke-risk scores.",
    why: [
      "Correct: disorganized atrial electrical activity with absent P waves gives an irregularly irregular ventricular response and loss of the atrial kick, defining atrial fibrillation.",
      "An accessory-pathway reentrant circuit produces a regular tachycardia, not an irregularly irregular rhythm with no P waves.",
      "Sinus tachycardia is a regular rhythm with normal P waves, unlike this irregular P-wave-absent rhythm.",
      "Complete atrioventricular dissociation shows regular independent atrial and ventricular rates, not an irregularly irregular ventricular response.",
      "Isolated premature ventricular complexes are occasional early wide beats on an otherwise organized rhythm, not sustained irregular fibrillation."
    ]
  },
  {
    id: "s1-0212",
    system: "Cardiovascular",
    discipline: "Pathophysiology",
    topic: "Cardiac tamponade",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 58-year-old man with metastatic lung cancer becomes acutely dyspneic and lightheaded. His blood pressure is 84/62 mm Hg, heart rate 122/min, and jugular venous pressure is markedly elevated. Heart sounds are distant, and his systolic pressure falls by 18 mm Hg during inspiration. His lungs are clear.\n\n**[ECG: sinus tachycardia with low-voltage QRS complexes and beat-to-beat alternation in QRS amplitude (electrical alternans)]**",
    lead: "Which best explains his hemodynamic compromise?",
    options: [
      "Acute left ventricular pump failure from a large myocardial infarction",
      "Pericardial fluid raising intrapericardial pressure and impairing diastolic filling with equalization of chamber pressures",
      "Massive pulmonary embolism obstructing right ventricular outflow",
      "Tension pneumothorax shifting the mediastinum",
      "Acute severe mitral regurgitation flooding the lungs"
    ],
    answer: 1,
    exp: "Hypotension, elevated jugular venous pressure, and muffled heart sounds (Beck triad) with an exaggerated inspiratory fall in systolic pressure (pulsus paradoxus) and electrical alternans with low voltage indicate cardiac tamponade, here from a malignant effusion. Rising intrapericardial pressure compresses the chambers, impairing diastolic filling and equalizing diastolic pressures; the swinging heart in fluid produces electrical alternans. Emergent pericardiocentesis is required.",
    why: [
      "Left ventricular pump failure from infarction typically causes pulmonary congestion, not clear lungs with muffled sounds, pulsus paradoxus, and electrical alternans.",
      "Correct: pericardial fluid raises intrapericardial pressure, impairing diastolic filling and equalizing chamber pressures, producing Beck triad, pulsus paradoxus, and electrical alternans.",
      "Massive pulmonary embolism causes acute right heart strain and hypoxemia but not muffled heart sounds with electrical alternans from a pericardial effusion.",
      "Tension pneumothorax causes absent breath sounds and tracheal deviation with clear evidence on the affected side, not distant heart sounds with electrical alternans.",
      "Acute severe mitral regurgitation produces pulmonary edema and a loud murmur, not the clear lungs and effusion physiology described."
    ]
  },
  {
    id: "s1-0213",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Renal cell carcinoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 63-year-old man who has smoked for decades reports painless blood in his urine, a dull left flank ache, and 6 kg of unintended weight loss. Examination reveals a palpable left flank mass, and he has a new left-sided varicocele that does not empty when he lies down.\n\n**[IMAGE: contrast CT of the abdomen showing a large heterogeneously enhancing solid mass in the upper pole of the left kidney with tumor extending into the left renal vein]**",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Transitional cell carcinoma of the renal pelvis",
      "Angiomyolipoma",
      "Clear cell renal cell carcinoma arising from proximal tubular epithelium",
      "Wilms tumor (nephroblastoma)",
      "Renal oncocytoma"
    ],
    answer: 2,
    exp: "The classic triad of flank pain, hematuria, and a palpable mass, with weight loss, a solid enhancing renal mass invading the renal vein, and a new left varicocele (from left renal vein or gonadal vein obstruction) indicates renal cell carcinoma. The most common subtype is clear cell carcinoma, which arises from proximal tubular epithelium and is associated with von Hippel-Lindau gene inactivation and cigarette smoking, and characteristically invades the renal vein.",
    why: [
      "Transitional cell carcinoma of the renal pelvis typically causes painless hematuria but appears as a filling defect in the collecting system, not a solid parenchymal mass invading the renal vein.",
      "Angiomyolipoma is a benign fat-containing tumor (often in tuberous sclerosis), not a heterogeneous solid mass with renal vein invasion and weight loss.",
      "Correct: a solid enhancing renal mass with renal vein invasion, the classic triad, and a new varicocele indicate clear cell renal cell carcinoma from proximal tubular epithelium.",
      "Wilms tumor is a childhood renal tumor, not a mass in a 63-year-old smoker.",
      "Renal oncocytoma is a benign tumor with a central scar and does not invade the renal vein or cause this constitutional and paraneoplastic picture."
    ]
  },
  {
    id: "s1-0214",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Small cell lung carcinoma (Lambert-Eaton syndrome)",
    difficulty: "hard",
    anchor: null,
    vignette: "A 66-year-old man who has smoked heavily for 45 years reports several weeks of proximal muscle weakness that makes rising from a chair difficult, along with dry mouth. He notes that his strength briefly improves after repeated effort. Chest imaging shows a large central hilar mass, and antibodies against presynaptic voltage-gated calcium channels are detected.",
    lead: "Which primary tumor is most likely responsible?",
    options: [
      "Squamous cell carcinoma of the lung",
      "Pulmonary adenocarcinoma",
      "Bronchial carcinoid tumor",
      "Small cell (oat cell) carcinoma of neuroendocrine origin",
      "Large cell carcinoma"
    ],
    answer: 3,
    exp: "Proximal weakness that improves with repeated use, autonomic features such as dry mouth, and antibodies against presynaptic voltage-gated calcium channels indicate Lambert-Eaton myasthenic syndrome, a paraneoplastic disorder most often caused by small cell lung carcinoma. This central neuroendocrine tumor, strongly linked to smoking, secretes hormones and provokes paraneoplastic syndromes (Lambert-Eaton, SIADH, ectopic ACTH). Recognizing the antibody points to the underlying oat cell tumor.",
    why: [
      "Squamous cell carcinoma is centrally located and associated with hypercalcemia from PTHrP, not Lambert-Eaton syndrome with calcium-channel antibodies.",
      "Adenocarcinoma is usually peripheral and is not the classic cause of Lambert-Eaton myasthenic syndrome.",
      "Bronchial carcinoid can cause carcinoid syndrome with flushing and diarrhea, not calcium-channel antibody-mediated weakness.",
      "Correct: small cell (oat cell) neuroendocrine carcinoma is the classic cause of Lambert-Eaton syndrome from antibodies against presynaptic voltage-gated calcium channels.",
      "Large cell carcinoma is an undifferentiated peripheral tumor and is not the typical cause of Lambert-Eaton syndrome."
    ]
  },
  {
    id: "s1-0215",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Nephrolithiasis (calcium oxalate stones)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 44-year-old man presents with sudden, severe, colicky left flank pain that radiates to the groin and comes in waves. He is restless and unable to find a comfortable position, and he reports nausea and pink-tinged urine. He is afebrile. Urinalysis shows gross hematuria and envelope-shaped crystals, and a noncontrast CT shows a radiopaque stone at the ureterovesical junction.",
    lead: "Which is the most likely composition of this stone?",
    options: [
      "Struvite (magnesium ammonium phosphate) from urease-producing bacteria",
      "Uric acid",
      "Cystine",
      "Pure calcium phosphate from distal renal tubular acidosis",
      "Calcium oxalate"
    ],
    answer: 4,
    exp: "Acute unilateral colicky flank pain radiating to the groin with a restless patient, hematuria, and a radiopaque stone with envelope-shaped (dumbbell/octahedral) crystals indicates a calcium oxalate stone, the most common type of kidney stone. Calcium oxalate stones are radiopaque and form in relatively acidic or normal urine, and low fluid intake and hypercalciuria are common risk factors.",
    why: [
      "Struvite stones form in alkaline urine from urease-producing organisms and create large staghorn calculi, not the small envelope-shaped crystals seen here.",
      "Uric acid stones are radiolucent on plain films and form in acidic urine as rhombic crystals, not radiopaque envelope-shaped crystals.",
      "Cystine stones are rare, occur in cystinuria, and form hexagonal crystals, not the envelope-shaped calcium oxalate crystals described.",
      "Calcium phosphate stones form in alkaline urine and appear as wedge-shaped crystals, not the octahedral envelope crystals of oxalate.",
      "Correct: envelope-shaped crystals with a radiopaque stone indicate calcium oxalate, the most common stone composition."
    ]
  },
  {
    id: "s1-0216",
    system: "Gastrointestinal",
    discipline: "Physiology",
    topic: "Achalasia",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 47-year-old woman reports two years of progressively worsening difficulty swallowing both solids and liquids from the start, along with regurgitation of undigested food and gradual weight loss. She sometimes has chest discomfort after eating.\n\n**[IMAGE: barium esophagram showing a dilated esophageal body tapering to a smooth \"bird-beak\" narrowing at the gastroesophageal junction]**",
    lead: "Which best explains her condition?",
    options: [
      "Loss of inhibitory ganglion cells in the myenteric plexus causing failed lower esophageal sphincter relaxation and aperistalsis",
      "A mechanically obstructing distal esophageal adenocarcinoma",
      "Autoimmune destruction of the esophageal squamous epithelium",
      "A thin mucosal web in the upper esophagus",
      "Uncoordinated high-amplitude contractions of the esophageal body"
    ],
    answer: 0,
    exp: "Dysphagia to solids and liquids simultaneously from the outset, regurgitation, weight loss, and a dilated esophagus with a bird-beak tapering at the gastroesophageal junction indicate achalasia. Degeneration of inhibitory (nitric oxide and VIP) ganglion cells in the myenteric (Auerbach) plexus prevents relaxation of the lower esophageal sphincter and abolishes peristalsis. Manometry confirms incomplete sphincter relaxation with aperistalsis.",
    why: [
      "Correct: loss of inhibitory myenteric ganglion cells prevents lower esophageal sphincter relaxation and causes aperistalsis, producing achalasia with a bird-beak esophagram.",
      "A distal adenocarcinoma can cause pseudoachalasia but typically presents with rapidly progressive dysphagia to solids in an older patient with a mass, not this classic primary picture.",
      "Autoimmune destruction of squamous epithelium is not the mechanism of achalasia, which is a neuromuscular motility disorder.",
      "An esophageal web causes intermittent dysphagia to solids in the upper esophagus, not simultaneous solid-and-liquid dysphagia with a bird-beak junction.",
      "Uncoordinated high-amplitude contractions describe diffuse esophageal spasm (a corkscrew esophagus), not the aperistaltic dilated esophagus of achalasia."
    ]
  },
  {
    id: "s1-0217",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Hepatocellular carcinoma",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 60-year-old man with long-standing cirrhosis from chronic hepatitis C develops worsening abdominal distension, right upper quadrant pain, and weight loss over two months. He now has new bloody ascites. Imaging shows a 5 cm arterially enhancing mass in the right hepatic lobe.\n\n| Test | Value | Reference |\n|---|---|---|\n| Alpha-fetoprotein | 1,850 ng/mL | < 10 |\n| Platelet count | 78,000/mcL | 150,000-400,000 |\n| INR | 1.6 | 0.9-1.1 |",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Cholangiocarcinoma",
      "Hepatocellular carcinoma arising in cirrhosis",
      "Cavernous hepatic hemangioma",
      "Focal nodular hyperplasia",
      "Metastatic colon adenocarcinoma"
    ],
    answer: 1,
    exp: "A new arterially enhancing hepatic mass with a markedly elevated alpha-fetoprotein arising in a cirrhotic liver indicates hepatocellular carcinoma. Chronic hepatitis C, hepatitis B, alcohol, and aflatoxin cause cirrhosis, the main risk state, and tumors arise from regenerating hepatocytes. Decompensation, right upper quadrant pain, and bloody ascites are characteristic, and surveillance imaging plus alpha-fetoprotein is used in high-risk patients.",
    why: [
      "Cholangiocarcinoma arises from bile duct epithelium, is typically not associated with a markedly elevated alpha-fetoprotein, and is linked to primary sclerosing cholangitis and liver flukes.",
      "Correct: an arterially enhancing hepatic mass with markedly elevated alpha-fetoprotein in a cirrhotic liver is hepatocellular carcinoma.",
      "A cavernous hemangioma is a benign vascular lesion with characteristic peripheral nodular enhancement and does not raise alpha-fetoprotein or cause bloody ascites.",
      "Focal nodular hyperplasia is a benign lesion with a central scar in young women, not a mass with elevated alpha-fetoprotein in a cirrhotic patient.",
      "Metastatic colon cancer produces multiple hepatic lesions and raises carcinoembryonic antigen, not alpha-fetoprotein, and usually arises without background cirrhosis."
    ]
  },
  {
    id: "s1-0218",
    system: "Reproductive & Endocrine",
    discipline: "Physiology",
    topic: "Central diabetes insipidus",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 34-year-old man reports several weeks of constant intense thirst and passing large volumes of dilute urine, including waking multiple times at night. He recently had a head injury. His serum sodium is 148 mEq/L. A water deprivation test is performed, followed by administration of desmopressin.\n\n| Phase | Urine osmolality |\n|---|---|\n| Baseline | 110 mOsm/kg |\n| After water deprivation | 135 mOsm/kg |\n| After desmopressin | 420 mOsm/kg |",
    lead: "Which best explains his polyuria?",
    options: [
      "Osmotic diuresis from hyperglycemia",
      "Primary polydipsia from excessive water intake",
      "Deficient antidiuretic hormone secretion from the posterior pituitary",
      "Renal collecting duct resistance to antidiuretic hormone",
      "Excess antidiuretic hormone causing water retention"
    ],
    answer: 2,
    exp: "Polyuria with dilute urine, hypernatremia, and urine that fails to concentrate with water deprivation but then rises substantially (more than 50%) after desmopressin indicates central diabetes insipidus. Deficient antidiuretic hormone (from hypothalamic-pituitary injury, here posttraumatic) prevents water reabsorption until exogenous desmopressin is given, at which point the intact kidney concentrates urine. This response distinguishes it from nephrogenic diabetes insipidus, in which the kidney cannot respond.",
    why: [
      "Osmotic diuresis from hyperglycemia produces a high urine osmolality with glucosuria, not persistently dilute urine that responds to desmopressin.",
      "Primary polydipsia causes a low serum sodium from water overload and partially concentrates with water deprivation, unlike this hypernatremic patient who responds to desmopressin.",
      "Correct: deficient antidiuretic hormone (central diabetes insipidus) leaves urine dilute during water deprivation but responsive to desmopressin, consistent with the posttraumatic history.",
      "Renal resistance to antidiuretic hormone (nephrogenic diabetes insipidus) would show little rise in urine osmolality after desmopressin, unlike the marked response here.",
      "Excess antidiuretic hormone (SIADH) causes concentrated urine and hyponatremia, the opposite of this dilute urine with hypernatremia."
    ]
  },
  {
    id: "s1-0219",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Uterine leiomyoma",
    difficulty: "easy",
    anchor: null,
    vignette: "A 41-year-old woman reports increasingly heavy, prolonged menstrual periods, pelvic pressure, and urinary frequency. On examination the uterus is enlarged, firm, irregular, and nontender, with several bulging nodular contours. She is otherwise well, and her symptoms tend to worsen and the uterus enlarges during pregnancy.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Endometrial adenocarcinoma",
      "Adenomyosis",
      "Ovarian carcinoma",
      "Uterine leiomyoma",
      "Endometrial hyperplasia"
    ],
    answer: 3,
    exp: "An enlarged, firm, irregular, nontender uterus with nodular contours causing menorrhagia and bulk symptoms in a premenopausal woman indicates uterine leiomyomas (fibroids), the most common benign tumors of the female genital tract. These benign smooth muscle tumors are estrogen and progesterone responsive, so they grow during the reproductive years and pregnancy and regress after menopause.",
    why: [
      "Endometrial adenocarcinoma typically causes postmenopausal bleeding and is not a firm, irregular, nodular enlarged uterus that grows in pregnancy.",
      "Adenomyosis causes a diffusely enlarged, boggy, tender uterus with heavy painful menses, not a firm irregular nodular uterus.",
      "Ovarian carcinoma presents as an adnexal mass with bloating and often ascites, not an irregularly enlarged uterus.",
      "Correct: a firm, irregular, nodular, nontender enlarged uterus with menorrhagia and bulk symptoms that grows with estrogen indicates uterine leiomyomas.",
      "Endometrial hyperplasia causes abnormal bleeding from a thickened endometrium but does not produce a nodular, irregularly enlarged uterus."
    ]
  },
  {
    id: "s1-0220",
    system: "Multisystem",
    discipline: "Pathology",
    topic: "Disseminated intravascular coagulation",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 40-year-old woman with gram-negative septic shock develops oozing from every intravenous puncture site and gum bleeding, together with dusky, mottled fingertips suggesting microvascular thrombosis. A peripheral smear shows fragmented red cells.\n\n| Test | Value | Reference |\n|---|---|---|\n| Platelet count | 38,000/mcL | 150,000-400,000 |\n| Prothrombin time | prolonged | 11-13.5 |\n| aPTT | prolonged | 25-35 |\n| Fibrinogen | low | 200-400 |\n| D-dimer | markedly elevated | < 0.5 |",
    lead: "Which best explains these findings?",
    options: [
      "Autoimmune platelet destruction alone",
      "Deficiency of the metalloprotease ADAMTS13",
      "Antibodies to platelet factor 4-heparin complexes",
      "Isolated vitamin K deficiency",
      "Systemic activation of coagulation consuming platelets and clotting factors"
    ],
    answer: 4,
    exp: "Simultaneous diffuse bleeding and microvascular thrombosis with thrombocytopenia, prolonged PT and aPTT, low fibrinogen, elevated D-dimer, and schistocytes indicate disseminated intravascular coagulation. A trigger such as sepsis causes widespread activation of coagulation with microthrombi that consume platelets and clotting factors and trigger secondary fibrinolysis, producing both thrombosis and bleeding. Treatment targets the underlying cause with supportive blood product replacement.",
    why: [
      "Immune thrombocytopenia causes isolated low platelets with normal coagulation times and fibrinogen, not the consumptive picture with prolonged PT/aPTT and low fibrinogen.",
      "ADAMTS13 deficiency causes thrombotic thrombocytopenic purpura, which has a normal PT, aPTT, and fibrinogen despite thrombocytopenia and schistocytes.",
      "Antibodies to platelet factor 4-heparin complexes cause heparin-induced thrombocytopenia with thrombosis, not consumption of fibrinogen and prolonged clotting times with bleeding.",
      "Vitamin K deficiency prolongs the PT and aPTT but does not consume platelets or fibrinogen or produce schistocytes.",
      "Correct: systemic activation of coagulation consumes platelets and clotting factors with secondary fibrinolysis, producing the bleeding, thrombosis, and abnormal studies of disseminated intravascular coagulation."
    ]
  },
  {
    id: "s1-0221",
    system: "Multisystem",
    discipline: "Pathology",
    topic: "Tumor lysis syndrome",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 9-year-old boy with a newly diagnosed bulky T-cell leukemia is admitted and started on induction chemotherapy. Two days later he becomes lethargic with muscle cramps, his urine output falls, and a cardiac monitor shows peaked T waves.\n\n| Test | Value | Reference |\n|---|---|---|\n| Potassium | 6.4 mEq/L | 3.5-5.0 |\n| Phosphate | 8.2 mg/dL | 2.5-4.5 |\n| Uric acid | 14 mg/dL | 3.5-7.2 |\n| Calcium | 6.8 mg/dL | 8.5-10.5 |\n| Creatinine | 2.4 mg/dL | 0.3-0.7 |",
    lead: "Which best explains these laboratory abnormalities?",
    options: [
      "Contrast-induced nephropathy",
      "Hemolytic uremic syndrome",
      "Rhabdomyolysis from prolonged immobilization",
      "Acute interstitial nephritis from a drug reaction",
      "Massive release of intracellular contents from lysed tumor cells"
    ],
    answer: 4,
    exp: "The combination of hyperkalemia, hyperphosphatemia, hyperuricemia, and hypocalcemia with acute kidney injury shortly after starting chemotherapy for a bulky, rapidly proliferating malignancy indicates tumor lysis syndrome. Massive cell death releases intracellular potassium, phosphate, and nucleic acids (metabolized to uric acid); phosphate binds calcium causing hypocalcemia, and uric acid and calcium phosphate precipitate in tubules causing renal injury. Prevention uses hydration and allopurinol or rasburicase.",
    why: [
      "Contrast nephropathy causes a rise in creatinine but not the tetrad of hyperkalemia, hyperphosphatemia, hyperuricemia, and hypocalcemia after chemotherapy.",
      "Hemolytic uremic syndrome causes microangiopathic anemia, thrombocytopenia, and renal failure, not this specific electrolyte tetrad from cell lysis.",
      "Rhabdomyolysis releases potassium and phosphate but also markedly elevates creatine kinase and follows muscle injury, not chemotherapy for leukemia.",
      "Acute interstitial nephritis causes kidney injury with eosinophils and a rash, not the massive uric acid and phosphate release seen here.",
      "Correct: massive lysis of tumor cells releases potassium, phosphate, and uric acid and lowers calcium, causing tumor lysis syndrome with acute kidney injury."
    ]
  },
  {
    id: "s1-0222",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Selection bias (Berkson bias)",
    difficulty: "easy",
    anchor: null,
    vignette: "Investigators conduct a case-control study using only patients hospitalized on a single ward to examine whether a particular exposure is associated with a disease. They find a strong association, but critics point out that both the exposure and the disease independently increase the chance of being hospitalized, so the hospital sample does not represent the general population.",
    lead: "Which type of bias is most directly illustrated?",
    options: [
      "Selection bias",
      "Recall bias",
      "Lead-time bias",
      "Confounding",
      "Observer bias"
    ],
    answer: 0,
    exp: "When study subjects are chosen in a way that makes them unrepresentative of the target population, so that the sampling itself distorts the exposure-disease relationship, the result is selection bias. Using only hospitalized patients (Berkson bias) is a classic example, because factors that increase hospitalization skew the observed association. It is addressed through appropriate, representative sampling and control selection.",
    why: [
      "Correct: choosing an unrepresentative hospitalized sample so that sampling distorts the association is selection bias (Berkson bias).",
      "Recall bias arises from differential accuracy of remembered exposures between groups, not from how subjects were selected.",
      "Lead-time bias applies to screening, where earlier detection appears to prolong survival without changing outcome.",
      "Confounding is distortion by a third variable associated with both exposure and outcome, not a problem of unrepresentative sampling.",
      "Observer bias arises when knowledge of exposure or outcome status influences measurement, not from the selection of the study sample."
    ]
  },
  {
    id: "s1-0223",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Length-time bias",
    difficulty: "moderate",
    anchor: null,
    vignette: "A screening test for a cancer appears to improve survival, but analysts note that the screen preferentially detects slow-growing, indolent tumors that spend a long time in a detectable but asymptomatic phase, while fast-growing aggressive tumors tend to become symptomatic and be diagnosed between screening rounds.",
    lead: "Which bias best explains the apparent survival benefit?",
    options: [
      "Lead-time bias",
      "Length-time bias",
      "Selection bias",
      "Attrition bias",
      "Confounding"
    ],
    answer: 1,
    exp: "When screening disproportionately detects slowly progressive disease that has a long asymptomatic phase, the screened group appears to survive longer simply because indolent cancers are overrepresented, independent of any treatment effect. This is length-time bias. It differs from lead-time bias, in which earlier diagnosis lengthens apparent survival by moving the diagnosis date earlier without changing the time of death.",
    why: [
      "Lead-time bias reflects earlier detection advancing the diagnosis date without changing outcome, not the preferential detection of slow-growing tumors.",
      "Correct: preferential detection of slowly progressive, indolent tumors with a long detectable phase overrepresents good-prognosis disease, which is length-time bias.",
      "Selection bias arises from unrepresentative sampling of subjects, not from the biology of which tumors are detected by screening.",
      "Attrition bias arises from differential dropout of participants during a study, not from the tumor growth rate detected at screening.",
      "Confounding is distortion by a third variable, not the overrepresentation of indolent tumors inherent to screening."
    ]
  },
  {
    id: "s1-0224",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Emancipated minor consent",
    difficulty: "easy",
    anchor: null,
    vignette: "A 16-year-old patient comes to the clinic alone for evaluation of abdominal pain. She is legally married, lives independently with her spouse, and financially supports herself. She is alert and understands the proposed evaluation and treatment. Her parents are not present, and she asks that they not be contacted.",
    lead: "Which is the most appropriate course of action?",
    options: [
      "Require parental consent before any evaluation",
      "Contact her parents to obtain permission before treating",
      "Provide care because an emancipated minor may consent to her own treatment",
      "Defer all decisions to a court-appointed guardian",
      "Obtain consent from another adult relative"
    ],
    answer: 2,
    exp: "A minor who is married, self-supporting and living independently, in the military, or otherwise legally emancipated may consent to and refuse medical care as an adult would. Because this patient is married and financially independent, she is an emancipated minor and can provide her own informed consent, and parental notification is not required against her wishes.",
    why: [
      "Requiring parental consent ignores that an emancipated minor has the legal authority to consent for herself.",
      "Contacting the parents against her wishes violates the autonomy and confidentiality of an emancipated minor.",
      "Correct: a married, self-supporting minor is emancipated and may consent to her own medical care without parental involvement.",
      "A court-appointed guardian is unnecessary because the emancipated minor can make her own decisions.",
      "Another adult relative has no authority to consent for an emancipated minor who can consent for herself."
    ]
  },
  {
    id: "s1-0225",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Withdrawing versus withholding life-sustaining treatment",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 70-year-old man is on mechanical ventilation in the intensive care unit with an irreversible, terminal illness and no realistic chance of recovery. Before losing capacity he clearly and repeatedly stated, and documented, that he would not want to be kept alive on a ventilator in such a situation. His surrogate now asks that the ventilator be discontinued. A junior team member worries that stopping the ventilator is different from never having started it.",
    lead: "Which is the most appropriate course of action?",
    options: [
      "Continue the ventilator indefinitely because withdrawing support is equivalent to euthanasia",
      "Require a court order before discontinuing the ventilator",
      "Only refrain from adding new interventions but never withdraw the ventilator already in place",
      "Discontinue the ventilator in accordance with the patient's known wishes",
      "Ask a different family member to authorize continuing treatment"
    ],
    answer: 3,
    exp: "A patient with decision-making capacity, or through a valid prior expressed wish and surrogate, may refuse or discontinue any life-sustaining treatment, including mechanical ventilation. Ethically and legally, withdrawing an already-started treatment and withholding one that was never started are equivalent; honoring a clearly expressed refusal is respecting autonomy, not euthanasia. The team should discontinue the ventilator and provide comfort-focused care.",
    why: [
      "Withdrawing unwanted life support that honors the patient's refusal is not euthanasia, which involves actively administering an agent to cause death.",
      "A court order is not required to honor a capacitated patient's clearly expressed and documented refusal conveyed through a surrogate.",
      "Withholding and withdrawing life-sustaining treatment are ethically and legally equivalent, so continuing an unwanted ventilator is not justified.",
      "Correct: the patient's clearly expressed prior wishes should be honored by discontinuing the ventilator, since withdrawing and withholding treatment are ethically equivalent.",
      "Seeking another family member to override the patient's documented wishes disregards his autonomy and the surrogate's proper role."
    ]
  }
];
