/*
 * Rounds Codex - USMLE Step 1 question bank, Batch 6 (25 items)
 * Blueprint-weighted mix. All vignettes original; source used for facts only.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP1_B6 = [
  {
    id: "s1-0126",
    system: "General Principles",
    discipline: "Biochemistry",
    topic: "Homocystinuria (cystathionine beta-synthase deficiency)",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 14-year-old boy is evaluated for a tall, thin build with long limbs, a pectus deformity, and downward and inward dislocation of both ocular lenses. He has mild intellectual disability, and a maternal cousin died of a pulmonary embolism as a teenager. He has fair skin and a malar flush.\n\n| Test | Value | Reference |\n|---|---|---|\n| Plasma total homocysteine | markedly elevated | normal |\n| Plasma methionine | elevated | normal |\n| Urine homocystine | present | absent |",
    lead: "A deficiency of which enzyme best explains these findings?",
    options: [
      "Methylenetetrahydrofolate reductase",
      "Cystathionine beta-synthase",
      "Methionine synthase",
      "Fibrillin-1",
      "Homogentisate oxidase"
    ],
    answer: 1,
    exp: "The combination of a marfanoid habitus, downward lens dislocation, thromboembolism, and intellectual disability with elevated homocysteine points to classic homocystinuria from cystathionine beta-synthase deficiency. Because the block is downstream of methionine, homocysteine cannot be converted to cystathionine, so both homocysteine and methionine accumulate. The elevated (rather than low) methionine is the key clue that separates this defect from remethylation defects.",
    why: [
      "MTHFR deficiency impairs remethylation of homocysteine to methionine, so homocysteine rises but methionine is low, not elevated.",
      "Correct: cystathionine beta-synthase deficiency blocks homocysteine disposal, raising both homocysteine and methionine and causing the marfanoid, thrombotic phenotype.",
      "Methionine synthase deficiency also impairs remethylation and lowers methionine, the opposite of this pattern.",
      "A fibrillin-1 defect (Marfan syndrome) causes a similar habitus but with upward lens dislocation and normal homocysteine.",
      "Homogentisate oxidase deficiency (alkaptonuria) causes dark urine and ochronosis, not hyperhomocysteinemia."
    ]
  },
  {
    id: "s1-0127",
    system: "General Principles",
    discipline: "Genetics",
    topic: "Familial hypercholesterolemia",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 12-year-old boy is found to have firm nodules over both Achilles tendons and a pale ring at the edge of the cornea. His father had a myocardial infarction at age 38, and a paternal grandfather died suddenly in his forties.\n\n| Test | Value | Reference |\n|---|---|---|\n| Total cholesterol | 390 mg/dL | < 200 |\n| LDL cholesterol | 310 mg/dL | < 130 |\n| Triglycerides | 110 mg/dL | < 150 |",
    lead: "Which molecular defect is most likely responsible?",
    options: [
      "Deficiency of lipoprotein lipase",
      "Deficiency of apolipoprotein C-II",
      "Defective or absent LDL receptors",
      "Overproduction of hepatic VLDL",
      "Deficiency of hepatic lipase"
    ],
    answer: 2,
    exp: "Very high LDL cholesterol with tendon xanthomas, corneal arcus in a child, and premature coronary disease in the family is familial hypercholesterolemia, an autosomal dominant defect of the LDL receptor. Loss of functional receptors prevents hepatic clearance of LDL, so LDL cholesterol accumulates from early life. The isolated LDL elevation with normal triglycerides is characteristic.",
    why: [
      "Lipoprotein lipase deficiency causes severe hypertriglyceridemia and chylomicronemia with pancreatitis, not isolated LDL elevation.",
      "Apolipoprotein C-II deficiency impairs lipoprotein lipase activation, again producing hypertriglyceridemia rather than high LDL.",
      "Correct: defective LDL receptors prevent LDL clearance, raising LDL from birth and causing tendon xanthomas and early coronary disease.",
      "Isolated hepatic VLDL overproduction predominantly raises triglycerides, which are normal here.",
      "Hepatic lipase deficiency is rare and elevates remnant particles and triglycerides, not selectively LDL."
    ]
  },
  {
    id: "s1-0128",
    system: "General Principles",
    discipline: "Pharmacology",
    topic: "Zero-order elimination kinetics",
    difficulty: "hard",
    anchor: null,
    vignette: "A 30-year-old man with a seizure disorder is maintained on phenytoin. When his dose is increased by a small amount to improve seizure control, he returns two weeks later with nystagmus, ataxia, and confusion, and his measured serum drug level is far higher than the proportional increase in dose would predict.",
    lead: "Which statement best describes the elimination of this drug at therapeutic doses?",
    options: [
      "Clearance increases progressively as the plasma concentration rises",
      "The elimination half-life is constant across all plasma concentrations",
      "A constant fraction of the drug is eliminated per unit time",
      "A constant amount of drug is eliminated per unit time once metabolism is saturated",
      "The drug follows simple first-order kinetics at every dose"
    ],
    answer: 3,
    exp: "Phenytoin exhibits saturable, capacity-limited metabolism, so at therapeutic concentrations the enzymes are nearly saturated and elimination becomes zero-order. Under zero-order kinetics a constant amount of drug is cleared per unit time regardless of concentration, so a small dose increase produces a disproportionately large rise in serum level and toxicity. Ethanol and high-dose aspirin behave similarly.",
    why: [
      "With saturated enzymes, clearance actually falls as concentration rises, so this is incorrect.",
      "The half-life is not constant in zero-order kinetics; it lengthens as concentration increases.",
      "Elimination of a constant fraction per unit time describes first-order, not the saturated zero-order behavior seen here.",
      "Correct: once metabolizing enzymes are saturated, a fixed amount is eliminated per unit time, so small dose changes cause large, disproportionate level increases.",
      "The disproportionate rise in level specifically indicates a departure from first-order kinetics."
    ]
  },
  {
    id: "s1-0129",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Pathology",
    topic: "Iron deficiency anemia",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 32-year-old woman reports fatigue, and a craving to chew ice for several months. She has heavy menstrual periods. Her fingernails appear spooned, and the conjunctivae are pale.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 9.0 g/dL | 12.0-15.5 |\n| Mean corpuscular volume | 72 fL | 80-100 |\n| Ferritin | 6 ng/mL | 15-150 |\n| Total iron-binding capacity | high | - |",
    lead: "Which is the most likely cause of her anemia?",
    options: [
      "Iron deficiency anemia",
      "Anemia of chronic disease",
      "Beta-thalassemia minor",
      "Sideroblastic anemia",
      "Vitamin B12 deficiency"
    ],
    answer: 0,
    exp: "A microcytic anemia with a low ferritin and a high total iron-binding capacity in a woman with heavy menses is iron deficiency, the most common cause of microcytic anemia. Depleted iron stores lower ferritin and prompt a compensatory rise in transferrin (TIBC). Pica such as ice craving and koilonychia are classic associated findings.",
    why: [
      "Correct: a low ferritin with a high TIBC in a menstruating woman indicates depleted iron stores causing microcytic anemia.",
      "Anemia of chronic disease usually shows a normal or high ferritin with a low TIBC, the reverse of these values.",
      "Beta-thalassemia minor causes microcytosis with a normal or high ferritin and a normal or elevated red cell count.",
      "Sideroblastic anemia typically shows high iron stores with ringed sideroblasts, not a low ferritin.",
      "Vitamin B12 deficiency causes a macrocytic, not microcytic, anemia."
    ]
  },
  {
    id: "s1-0130",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Pathology",
    topic: "Hodgkin lymphoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 24-year-old man has painless, rubbery cervical lymphadenopathy, drenching night sweats, and a 5-kg weight loss over three months. He notes that the enlarged nodes ache after he drinks alcohol.\n\n**[IMAGE: lymph node biopsy showing a large binucleate cell with two mirror-image nuclei, each containing a single prominent eosinophilic nucleolus (owl-eye appearance), set among small reactive lymphocytes]**",
    lead: "The cell shown is most characteristic of which condition?",
    options: [
      "Burkitt lymphoma",
      "Chronic lymphocytic leukemia",
      "Follicular lymphoma",
      "Infectious mononucleosis",
      "Classical Hodgkin lymphoma"
    ],
    answer: 4,
    exp: "The large binucleate owl-eye cell is a Reed-Sternberg cell, the diagnostic malignant cell of classical Hodgkin lymphoma. Hodgkin lymphoma classically presents in young adults with painless lymphadenopathy, B symptoms such as night sweats and weight loss, and occasionally alcohol-induced nodal pain. It tends to spread in a contiguous nodal fashion.",
    why: [
      "Burkitt lymphoma shows sheets of intermediate-sized cells with a starry-sky pattern, not Reed-Sternberg cells.",
      "Chronic lymphocytic leukemia shows small mature lymphocytes with smudge cells on smear.",
      "Follicular lymphoma shows a nodular proliferation of small cleaved cells, not binucleate owl-eye cells.",
      "Infectious mononucleosis produces reactive atypical lymphocytes, which are not malignant Reed-Sternberg cells.",
      "Correct: the binucleate owl-eye Reed-Sternberg cell is the hallmark of classical Hodgkin lymphoma."
    ]
  },
  {
    id: "s1-0131",
    system: "Behavioral Health & Nervous System",
    discipline: "Psychiatry",
    topic: "Schizophrenia",
    difficulty: "easy",
    anchor: null,
    vignette: "A 22-year-old man is brought in by his family for 8 months of hearing voices that comment on his actions, a fixed belief that neighbors are broadcasting his thoughts, disorganized and rambling speech, and progressive social withdrawal with a marked decline in self-care and school performance. He does not use substances, and a medical workup is unremarkable.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Schizophreniform disorder",
      "Brief psychotic disorder",
      "Schizophrenia",
      "Schizoaffective disorder",
      "Delusional disorder"
    ],
    answer: 2,
    exp: "Continuous psychotic symptoms including hallucinations, delusions, disorganized speech, and negative symptoms with functional decline for more than six months meet criteria for schizophrenia. The duration is the key discriminator: schizophreniform disorder lasts one to six months, and brief psychotic disorder lasts less than one month. There is no prominent mood episode to suggest schizoaffective disorder.",
    why: [
      "Schizophreniform disorder requires the same symptoms but with a total duration of one to six months.",
      "Brief psychotic disorder resolves within one month, far shorter than this eight-month course.",
      "Correct: psychotic symptoms with functional decline persisting beyond six months define schizophrenia.",
      "Schizoaffective disorder requires a concurrent major mood episode, which is absent here.",
      "Delusional disorder features nonbizarre delusions without prominent hallucinations, disorganized speech, or functional deterioration."
    ]
  },
  {
    id: "s1-0132",
    system: "Behavioral Health & Nervous System",
    discipline: "Genetics",
    topic: "Huntington disease",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 42-year-old man has one year of jerky, involuntary movements of the limbs and face, irritability, and declining memory. His father developed similar symptoms at age 50 and his affected son began showing subtle changes in his late twenties, a progressively earlier onset across generations.\n\n**[IMAGE: axial brain MRI showing bilateral atrophy of the caudate nuclei with enlargement of the frontal horns of the lateral ventricles]**",
    lead: "Which molecular mechanism best explains this disorder?",
    options: [
      "A CAG trinucleotide repeat expansion in the huntingtin gene",
      "A CGG repeat expansion with promoter hypermethylation",
      "A CTG repeat expansion in a protein kinase gene",
      "A GAA repeat expansion that silences frataxin",
      "Deposition of misfolded prion protein"
    ],
    answer: 0,
    exp: "Chorea, behavioral change, and dementia in midlife with caudate atrophy and progressively earlier onset across generations is Huntington disease. It is caused by a CAG trinucleotide repeat expansion in the huntingtin gene, and the repeat tends to lengthen during spermatogenesis, producing genetic anticipation. Loss of GABAergic medium spiny neurons in the striatum underlies the chorea.",
    why: [
      "Correct: a CAG repeat expansion in the huntingtin gene causes striatal neurodegeneration, with anticipation from repeat lengthening.",
      "A CGG expansion with hypermethylation causes fragile X syndrome, a childhood intellectual disability syndrome.",
      "A CTG expansion causes myotonic dystrophy with myotonia and cataracts, not midlife chorea.",
      "A GAA expansion silencing frataxin causes Friedreich ataxia with early-onset ataxia and cardiomyopathy.",
      "Prion protein deposition causes rapidly progressive dementia with myoclonus over months, not this slower chorea with a clear autosomal dominant pedigree."
    ]
  },
  {
    id: "s1-0133",
    system: "Behavioral Health & Nervous System",
    discipline: "Biochemistry",
    topic: "Wernicke encephalopathy (thiamine deficiency)",
    difficulty: "easy",
    anchor: null,
    vignette: "A 55-year-old man with a long history of heavy alcohol use is brought to the emergency department confused. He has horizontal nystagmus and an inability to fully abduct one eye, and he is unsteady with a wide-based gait. He worsens acutely after receiving intravenous dextrose without any vitamin supplementation.",
    lead: "A deficiency of which vitamin best explains this presentation?",
    options: [
      "Niacin",
      "Thiamine",
      "Cobalamin",
      "Folate",
      "Pyridoxine"
    ],
    answer: 1,
    exp: "The triad of confusion, ophthalmoplegia with nystagmus, and gait ataxia in a person with heavy alcohol use is Wernicke encephalopathy from thiamine deficiency. Thiamine is a cofactor for enzymes of glucose metabolism, so giving glucose before thiamine can consume remaining stores and precipitate or worsen the syndrome. Prompt thiamine administration can reverse the deficit and prevent irreversible Korsakoff amnesia.",
    why: [
      "Niacin deficiency causes pellagra with dermatitis, diarrhea, and dementia, not ophthalmoplegia with ataxia.",
      "Correct: thiamine deficiency causes Wernicke encephalopathy, and a glucose load without thiamine can precipitate it.",
      "Cobalamin deficiency causes macrocytic anemia and subacute combined degeneration, not acute ophthalmoplegia.",
      "Folate deficiency causes macrocytic anemia without the neurologic triad seen here.",
      "Pyridoxine deficiency causes peripheral neuropathy and sideroblastic anemia, not this ocular and gait syndrome."
    ]
  },
  {
    id: "s1-0134",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Osteoporosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 68-year-old woman presents with sudden mid-back pain and has lost 3 cm of height over two years. Imaging shows a vertebral compression fracture. She has no bone pain between fractures.\n\n| Test | Value | Reference |\n|---|---|---|\n| Serum calcium | 9.4 mg/dL | 8.5-10.5 |\n| Serum phosphate | 3.4 mg/dL | 2.5-4.5 |\n| Alkaline phosphatase | 70 U/L | 40-120 |\n| Parathyroid hormone | 40 pg/mL | 15-65 |\n| DEXA T-score (hip) | -2.8 | > -1.0 |",
    lead: "Which best characterizes the underlying bone abnormality?",
    options: [
      "Defective mineralization of osteoid with normal bone volume",
      "Increased osteoclastic resorption driven by elevated parathyroid hormone",
      "Replacement of marrow by fibrous tissue and abnormal trabeculae",
      "Reduced bone mass with normal bone mineralization and normal laboratory values",
      "Disordered remodeling with a markedly elevated alkaline phosphatase"
    ],
    answer: 3,
    exp: "A postmenopausal woman with a fragility fracture, a T-score of -2.8, and entirely normal calcium, phosphate, alkaline phosphatase, and parathyroid hormone has osteoporosis. In osteoporosis the bone that remains is normally mineralized, but its total mass is reduced, so routine laboratory studies are normal and the diagnosis rests on bone density and fracture. The normal labs are what exclude osteomalacia, hyperparathyroidism, and Paget disease.",
    why: [
      "Defective osteoid mineralization describes osteomalacia, which typically lowers calcium or phosphate and raises alkaline phosphatase.",
      "PTH-driven resorption (hyperparathyroidism) would show an elevated calcium and PTH, which are normal here.",
      "Marrow fibrosis with abnormal trabeculae suggests other marrow or metabolic disorders, not this normal-lab picture.",
      "Correct: osteoporosis is a loss of bone mass with normal mineralization, so laboratory values are normal and density is low.",
      "A markedly elevated alkaline phosphatase with disordered remodeling suggests Paget disease, but the alkaline phosphatase here is normal."
    ]
  },
  {
    id: "s1-0135",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Osteosarcoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 15-year-old boy has several weeks of pain and swelling just above the knee that is worse at night. There is no history of trauma.\n\n**[IMAGE: plain radiograph of the distal femoral metaphysis showing a destructive lesion with a spiculated sunburst periosteal reaction and a Codman triangle where the periosteum is lifted from the cortex]**",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Ewing sarcoma",
      "Osteochondroma",
      "Giant cell tumor",
      "Chondrosarcoma",
      "Osteosarcoma"
    ],
    answer: 4,
    exp: "A destructive metaphyseal lesion of the distal femur in an adolescent with a sunburst periosteal reaction and a Codman triangle is characteristic of osteosarcoma, the most common primary bone malignancy of youth. It arises most often around the knee at the metaphysis of rapidly growing long bones. The aggressive periosteal reaction reflects rapid tumor growth lifting the periosteum.",
    why: [
      "Ewing sarcoma typically arises in the diaphysis and shows a layered onion-skin periosteal reaction, not a sunburst pattern.",
      "Osteochondroma is a benign cartilage-capped bony outgrowth continuous with the cortex, not a destructive lesion.",
      "Giant cell tumor arises at the epiphysis of adults and appears as a lytic soap-bubble lesion.",
      "Chondrosarcoma usually affects older adults in the axial skeleton or pelvis.",
      "Correct: a metaphyseal lesion with a sunburst reaction and Codman triangle in an adolescent is osteosarcoma."
    ]
  },
  {
    id: "s1-0136",
    system: "Cardiovascular",
    discipline: "Physiology",
    topic: "Wolff-Parkinson-White syndrome",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 25-year-old man has recurrent episodes of sudden, rapid, regular palpitations that start and stop abruptly. He is asymptomatic between episodes, and a resting tracing is obtained.\n\n**[ECG: sinus rhythm with a short PR interval and slurred upstroke of the QRS complex (a delta wave), producing a widened QRS]**",
    lead: "Which best explains these electrocardiographic findings?",
    options: [
      "Delayed conduction through the atrioventricular node",
      "An accessory pathway that bypasses the atrioventricular node and pre-excites the ventricle",
      "Reentry confined entirely within the atrioventricular node",
      "Complete failure of atrioventricular conduction",
      "An ectopic atrial focus firing at a rapid rate"
    ],
    answer: 1,
    exp: "A short PR interval with a delta wave is the signature of ventricular pre-excitation in Wolff-Parkinson-White syndrome. An accessory pathway (the bundle of Kent) conducts directly from atrium to ventricle, bypassing the delay of the atrioventricular node and beginning ventricular depolarization early, which produces the slurred QRS upstroke. This pathway can support reentrant tachycardias that cause the paroxysmal palpitations.",
    why: [
      "Delayed AV nodal conduction would prolong the PR interval, the opposite of the short PR seen here.",
      "Correct: an accessory pathway pre-excites the ventricle, shortening the PR interval and creating the delta wave.",
      "Reentry limited to the AV node causes tachycardia but does not produce a resting delta wave.",
      "Complete AV conduction failure produces heart block with dissociated P waves, not pre-excitation.",
      "A rapid ectopic atrial focus causes atrial tachycardia without a delta wave."
    ]
  },
  {
    id: "s1-0137",
    system: "Cardiovascular",
    discipline: "Pathology",
    topic: "Coarctation of the aorta",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 14-year-old boy is found to have a blood pressure of 150/95 mm Hg in both arms but only 105/70 mm Hg in the legs. The femoral pulses are weak and delayed relative to the radial pulses, and a systolic murmur is heard over the back.\n\n**[IMAGE: chest radiograph showing notching along the inferior margins of several posterior ribs and a subtle contour indentation of the aortic silhouette]**",
    lead: "Which best explains the blood pressure findings?",
    options: [
      "A patent ductus arteriosus with a left-to-right shunt",
      "Aortic valve stenosis limiting cardiac output",
      "Fibromuscular dysplasia of the renal arteries",
      "Congenital narrowing of the aorta just distal to the left subclavian artery",
      "An atrial septal defect with right-sided volume overload"
    ],
    answer: 3,
    exp: "Upper extremity hypertension with weak, delayed femoral pulses and lower leg pressures is the classic picture of coarctation of the aorta. Narrowing distal to the left subclavian artery raises pressure proximally and reduces it distally, and collateral flow through intercostal arteries erodes the ribs to produce rib notching. It is associated with bicuspid aortic valve and Turner syndrome.",
    why: [
      "A patent ductus arteriosus causes a continuous murmur and wide pulse pressure, not an arm-leg pressure gradient with rib notching.",
      "Aortic valve stenosis reduces output but does not create differential pressures between the arms and legs.",
      "Renal fibromuscular dysplasia causes secondary hypertension but not delayed femoral pulses or rib notching.",
      "Correct: narrowing of the aorta distal to the left subclavian raises upper-body pressure, lowers leg pressure, and produces collateral rib notching.",
      "An atrial septal defect causes a fixed split S2 and right heart volume overload, not an arm-leg pressure difference."
    ]
  },
  {
    id: "s1-0138",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Pulmonary embolism",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 62-year-old woman develops sudden dyspnea and sharp pleuritic chest pain three days after a total hip replacement. She is tachycardic and tachypneic, and her right calf is swollen and tender. Breath sounds are clear and symmetric.\n\n| Test | Value | Reference |\n|---|---|---|\n| Arterial pH | 7.49 | 7.35-7.45 |\n| PaO2 (room air) | 62 mm Hg | 75-100 |\n| PaCO2 | 28 mm Hg | 35-45 |\n| Alveolar-arterial O2 gradient | widened | normal |",
    lead: "Which mechanism best accounts for the blood gas findings?",
    options: [
      "Increased alveolar dead space from obstructed pulmonary blood flow, with hyperventilation lowering the PaCO2",
      "Alveolar hypoventilation producing hypoxemia with a normal alveolar-arterial gradient",
      "A right-to-left intracardiac shunt present since birth",
      "Impaired diffusion across a fibrotic alveolar membrane",
      "A reduced inspired oxygen tension from high altitude"
    ],
    answer: 0,
    exp: "The abrupt onset after immobilizing surgery with a swollen calf indicates a pulmonary embolism. Obstruction of pulmonary arterial flow creates ventilated but poorly perfused lung (dead space) and ventilation-perfusion mismatch, causing hypoxemia with a widened alveolar-arterial gradient, while reflex hyperventilation drives the PaCO2 down and produces a respiratory alkalosis. Recognizing the low PaCO2 with a widened A-a gradient points to embolic dead space rather than hypoventilation.",
    why: [
      "Correct: embolic obstruction increases dead space and V/Q mismatch, causing hypoxemia with a widened A-a gradient, and hyperventilation lowers the PaCO2.",
      "Pure hypoventilation raises the PaCO2 and leaves the A-a gradient normal, neither of which fits this low PaCO2 and widened gradient.",
      "A congenital right-to-left shunt would have caused chronic cyanosis, not an acute postoperative event.",
      "Diffusion impairment from fibrosis develops chronically with imaging changes, not suddenly after surgery.",
      "High-altitude hypoxia lowers inspired oxygen for everyone but does not explain a unilateral swollen calf or an acute postoperative presentation."
    ]
  },
  {
    id: "s1-0139",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Poststreptococcal glomerulonephritis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 7-year-old boy develops dark, cola-colored urine and puffiness around the eyes. Two weeks earlier he had crusted, honey-colored skin lesions that resolved. His blood pressure is elevated for age.\n\n| Test | Value | Reference |\n|---|---|---|\n| Urinalysis | dysmorphic RBCs and red cell casts | none |\n| Serum C3 | low | normal |\n| Anti-DNase B titer | elevated | normal |\n| Serum creatinine | mildly elevated | age-based |",
    lead: "Which mechanism best explains his kidney disease?",
    options: [
      "Antibodies directed against the glomerular basement membrane",
      "IgA deposition in the mesangium arising during an active infection",
      "Deposition of immune complexes producing a nephritic syndrome",
      "Podocyte foot process effacement without immune deposits",
      "Diffusely thickened capillary loops from subepithelial IgG spikes"
    ],
    answer: 2,
    exp: "A nephritic picture of hematuria with red cell casts, hypertension, edema, and a low C3 appearing two weeks after a streptococcal skin infection is poststreptococcal glomerulonephritis. Immune complexes deposit in the glomeruli as subepithelial humps, activating complement and consuming C3. The latent period after the infection and the elevated anti-DNase B titer support the diagnosis.",
    why: [
      "Anti-glomerular basement membrane disease (Goodpasture) causes linear immunofluorescence with hemoptysis, not a postinfectious low-C3 nephritis.",
      "IgA nephropathy causes hematuria concurrent with an infection within a day or two, not after a two-week latent period, and complement is usually normal.",
      "Correct: immune complex deposition after streptococcal infection consumes C3 and produces a nephritic syndrome with red cell casts.",
      "Podocyte effacement without deposits describes minimal change disease, which causes nephrotic-range proteinuria, not this nephritic picture.",
      "Subepithelial IgG spikes with thickened loops describe membranous nephropathy, a nephrotic disease with normal complement."
    ]
  },
  {
    id: "s1-0140",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Ulcerative colitis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 26-year-old man has several months of bloody diarrhea with mucus, lower abdominal cramping, and urgency with a feeling of incomplete evacuation. Colonoscopy shows continuous, uninterrupted inflammation and friable mucosa extending proximally from the rectum, with several pseudopolyps. He also has itching and elevated cholestatic liver enzymes.",
    lead: "Which feature best distinguishes his condition from Crohn disease?",
    options: [
      "Transmural inflammation with noncaseating granulomas",
      "Skip lesions with a cobblestone mucosal appearance",
      "Frequent perianal fistulas and strictures",
      "Involvement of the terminal ileum with sparing of the rectum",
      "Continuous mucosal inflammation extending proximally from the rectum"
    ],
    answer: 4,
    exp: "Bloody diarrhea with tenesmus and a continuous field of mucosal inflammation beginning at the rectum is ulcerative colitis. In contrast to the transmural, discontinuous (skip lesion) pattern of Crohn disease, ulcerative colitis is limited to the mucosa and submucosa and involves the colon continuously from the rectum. The associated cholestatic liver enzymes suggest primary sclerosing cholangitis, which is more strongly linked to ulcerative colitis.",
    why: [
      "Transmural inflammation with granulomas is characteristic of Crohn disease, not ulcerative colitis.",
      "Skip lesions and cobblestoning are features of Crohn disease.",
      "Perianal fistulas and strictures reflect the transmural disease of Crohn disease.",
      "Terminal ileal involvement with rectal sparing is typical of Crohn disease, whereas ulcerative colitis characteristically involves the rectum.",
      "Correct: continuous mucosal inflammation extending proximally from the rectum is the distinguishing pattern of ulcerative colitis."
    ]
  },
  {
    id: "s1-0141",
    system: "Gastrointestinal",
    discipline: "Physiology",
    topic: "Hypertrophic pyloric stenosis",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 4-week-old firstborn boy has forceful, projectile vomiting of milk that is never bilious, occurring shortly after each feed. He remains hungry and eager to feed afterward. A firm, olive-shaped mass is palpable in the epigastrium, and peristaltic waves are visible across the abdomen.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sodium | 136 mEq/L | 135-145 |\n| Potassium | 3.1 mEq/L | 3.5-5.0 |\n| Chloride | 92 mEq/L | 98-106 |\n| Bicarbonate | 34 mEq/L | 22-28 |",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Duodenal atresia",
      "Hypertrophic pyloric stenosis",
      "Gastroesophageal reflux",
      "Malrotation with midgut volvulus",
      "Necrotizing enterocolitis"
    ],
    answer: 1,
    exp: "Nonbilious projectile vomiting in a first-born infant at around one month of age with a palpable olive-shaped epigastric mass is hypertrophic pyloric stenosis. Loss of gastric hydrochloric acid from repeated vomiting produces the hypochloremic, hypokalemic metabolic alkalosis shown. The vomiting is nonbilious because the obstruction is proximal to the ampulla of Vater.",
    why: [
      "Duodenal atresia causes bilious vomiting on the first day of life and a double-bubble sign, often with Down syndrome.",
      "Correct: nonbilious projectile vomiting with an olive mass and a hypochloremic hypokalemic alkalosis is pyloric stenosis.",
      "Gastroesophageal reflux causes effortless regurgitation rather than forceful projectile vomiting with an olive mass.",
      "Malrotation with volvulus causes bilious vomiting and is a surgical emergency, unlike this nonbilious picture.",
      "Necrotizing enterocolitis occurs mainly in premature infants with abdominal distention and bloody stools."
    ]
  },
  {
    id: "s1-0142",
    system: "Reproductive & Endocrine",
    discipline: "Immunology",
    topic: "Graves disease",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 34-year-old woman has palpitations, heat intolerance, weight loss despite a good appetite, and tremor. She has a diffusely enlarged, non-tender thyroid with an audible bruit, protrusion of the eyes, and thickened, non-pitting skin over the shins.\n\n| Test | Value | Reference |\n|---|---|---|\n| Thyroid-stimulating hormone | < 0.01 mIU/L | 0.4-4.0 |\n| Free thyroxine | high | - |\n| Radioiodine uptake | diffusely increased | - |",
    lead: "Which mechanism best explains her hyperthyroidism?",
    options: [
      "IgG autoantibodies that stimulate the TSH receptor",
      "Autoantibodies that destroy thyroid peroxidase",
      "A TSH-secreting pituitary adenoma",
      "Autonomous hormone release from a single hyperfunctioning nodule",
      "Release of preformed hormone from an inflamed gland"
    ],
    answer: 0,
    exp: "Hyperthyroidism with a diffuse goiter, diffusely increased radioiodine uptake, exophthalmos, and pretibial myxedema is Graves disease. It is caused by IgG thyroid-stimulating immunoglobulins that bind and activate the TSH receptor, driving hormone synthesis and gland growth independent of pituitary control. The extrathyroidal eye and skin findings are specific to Graves disease.",
    why: [
      "Correct: stimulating IgG antibodies against the TSH receptor drive diffuse hormone production and cause the eye and skin findings.",
      "Antibodies that destroy thyroid peroxidase cause Hashimoto hypothyroidism, not hyperthyroidism with high uptake.",
      "A TSH-secreting adenoma would raise TSH, whereas TSH is suppressed here.",
      "A single autonomous nodule shows focal uptake, not the diffuse uptake and eye disease seen here.",
      "Release of preformed hormone from thyroiditis produces low, not increased, radioiodine uptake."
    ]
  },
  {
    id: "s1-0143",
    system: "Reproductive & Endocrine",
    discipline: "Physiology",
    topic: "Primary adrenal insufficiency (Addison disease)",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 40-year-old woman has months of fatigue, weight loss, dizziness on standing, and a craving for salty foods. She has darkening of the skin creases and buccal mucosa. Her blood pressure is 92/58 mm Hg.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sodium | 129 mEq/L | 135-145 |\n| Potassium | 5.6 mEq/L | 3.5-5.0 |\n| Morning cortisol | low | - |\n| ACTH | markedly elevated | - |\n| Cortisol after cosyntropin | no significant rise | - |",
    lead: "Which best explains her condition?",
    options: [
      "Suppression of the hypothalamic-pituitary axis by exogenous glucocorticoids",
      "A pituitary adenoma failing to secrete ACTH",
      "Isolated aldosterone deficiency with normal cortisol",
      "Tissue resistance to normally produced cortisol",
      "Destruction of the adrenal cortex with loss of both cortisol and aldosterone"
    ],
    answer: 4,
    exp: "Hyponatremia, hyperkalemia, hypotension, and hyperpigmentation with a low cortisol, a markedly elevated ACTH, and no response to cosyntropin indicate primary adrenal insufficiency. The high ACTH localizes the defect to the adrenal cortex itself, and the excess ACTH-related peptides stimulate melanocytes to cause hyperpigmentation. Loss of aldosterone explains the salt wasting and hyperkalemia that secondary (pituitary) disease would spare.",
    why: [
      "Exogenous steroid suppression lowers ACTH and does not cause hyperpigmentation or hyperkalemia.",
      "A pituitary cause would show a low ACTH and generally preserved aldosterone, unlike this high ACTH with hyperkalemia.",
      "Isolated aldosterone deficiency would not lower cortisol or fail the cosyntropin test.",
      "Cortisol resistance would raise, not lower, measured cortisol levels.",
      "Correct: a high ACTH with an absent cortisol response localizes the lesion to the adrenal cortex, and combined cortisol and aldosterone loss explains the electrolytes and pigmentation."
    ]
  },
  {
    id: "s1-0144",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Preeclampsia",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 30-year-old primigravida at 34 weeks of gestation develops a new blood pressure of 162/104 mm Hg on repeated measurements, along with a headache, mild right upper quadrant discomfort, and new lower extremity swelling. Urinalysis shows 2+ protein, and her prior pregnancy blood pressures had been normal.",
    lead: "Which best explains the underlying pathophysiology?",
    options: [
      "An autoimmune reaction against fetal red cell antigens",
      "Excess placental beta-hCG production from molar tissue",
      "Abnormal placental spiral artery remodeling causing widespread maternal endothelial dysfunction",
      "Infarction of the pituitary gland reducing hormone output",
      "Placental hormone-induced insulin resistance"
    ],
    answer: 2,
    exp: "New-onset hypertension with proteinuria after 20 weeks of gestation is preeclampsia. It arises from inadequate remodeling of the uterine spiral arteries by trophoblast, producing placental ischemia and release of anti-angiogenic factors that cause systemic maternal endothelial dysfunction. This endothelial injury underlies the hypertension, proteinuria, and organ symptoms such as headache and right upper quadrant pain.",
    why: [
      "An immune reaction to fetal red cells causes hemolytic disease of the fetus, not maternal hypertension with proteinuria.",
      "Excess beta-hCG from molar tissue can cause early hypertension, but a normal pregnancy at 34 weeks with these findings reflects preeclampsia, not a mole.",
      "Correct: defective spiral artery remodeling causes placental ischemia and maternal endothelial dysfunction, producing hypertension and proteinuria.",
      "Pituitary infarction (Sheehan syndrome) occurs postpartum from hemorrhage and causes hypopituitarism, not antenatal hypertension.",
      "Placental insulin resistance produces gestational diabetes, not hypertension with proteinuria."
    ]
  },
  {
    id: "s1-0145",
    system: "Multisystem",
    discipline: "Immunology",
    topic: "Systemic lupus erythematosus",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 24-year-old woman has months of fatigue, joint pain in the hands and wrists, painless oral ulcers, and a rash across her cheeks and nose that worsens with sun exposure. She has had one episode of pleuritic chest pain.\n\n| Test | Value | Reference |\n|---|---|---|\n| Antinuclear antibody | positive, high titer | negative |\n| Serum C3 and C4 | low | normal |\n| Urinalysis | proteinuria | none |",
    lead: "Which antibody is most specific for this diagnosis?",
    options: [
      "Anti-histone antibody",
      "Anti-centromere antibody",
      "Anti-cyclic citrullinated peptide antibody",
      "Anti-double-stranded DNA antibody",
      "Anti-topoisomerase (Scl-70) antibody"
    ],
    answer: 3,
    exp: "A young woman with a photosensitive malar rash, arthritis, oral ulcers, serositis, low complement, and a positive ANA has systemic lupus erythematosus. Although the ANA is sensitive, anti-double-stranded DNA is highly specific for lupus and tends to correlate with disease activity and lupus nephritis. Anti-Smith antibody is also highly specific.",
    why: [
      "Anti-histone antibodies are most associated with drug-induced lupus rather than being specific for idiopathic SLE.",
      "Anti-centromere antibodies are seen in limited systemic sclerosis (CREST).",
      "Anti-cyclic citrullinated peptide antibodies are specific for rheumatoid arthritis.",
      "Correct: anti-double-stranded DNA is highly specific for SLE and correlates with nephritis and disease activity.",
      "Anti-topoisomerase (Scl-70) is specific for diffuse systemic sclerosis, not lupus."
    ]
  },
  {
    id: "s1-0146",
    system: "Multisystem",
    discipline: "Biochemistry",
    topic: "Lead poisoning",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 3-year-old child living in a home built in the 1940s with peeling paint has become irritable and less interactive, with loss of previously acquired words. He has intermittent abdominal pain and constipation.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 9.6 g/dL | 11.0-14.0 |\n| Mean corpuscular volume | 74 fL | 75-87 |\n| Peripheral smear | coarse basophilic stippling | none |\n| Blood lead level | markedly elevated | < 3.5 mcg/dL |\n| Free erythrocyte protoporphyrin | elevated | normal |",
    lead: "Which best explains the anemia in this child?",
    options: [
      "Inhibition of ferrochelatase and aminolevulinic acid dehydratase in heme synthesis",
      "Autoimmune destruction of red cell membranes",
      "Deficiency of glucose-6-phosphate dehydrogenase",
      "A point mutation in the beta-globin chain",
      "Impaired DNA synthesis from folate deficiency"
    ],
    answer: 0,
    exp: "An old home with peeling paint, developmental regression, abdominal pain, a microcytic anemia with basophilic stippling, and a high blood lead level indicates lead poisoning. Lead inhibits ferrochelatase and aminolevulinic acid dehydratase, two enzymes of heme synthesis, so protoporphyrin accumulates and heme production falls, producing a microcytic anemia. The enzyme inhibition also explains the elevated free erythrocyte protoporphyrin.",
    why: [
      "Correct: lead inhibits ferrochelatase and ALA dehydratase, blocking heme synthesis and raising protoporphyrin, which causes the microcytic anemia.",
      "Autoimmune membrane destruction causes a Coombs-positive hemolytic anemia, not basophilic stippling with a high lead level.",
      "G6PD deficiency causes episodic oxidative hemolysis with bite cells, not this exposure-related microcytic anemia.",
      "A beta-globin point mutation (sickle cell) causes sickling and vaso-occlusion, unrelated to lead exposure.",
      "Folate deficiency causes a macrocytic anemia, not the microcytic anemia with stippling seen here."
    ]
  },
  {
    id: "s1-0147",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Absolute risk reduction",
    difficulty: "hard",
    anchor: "table",
    vignette: "A randomized trial tests a new drug against placebo for preventing myocardial infarction over one year. The outcomes are shown.\n\n| Group | Developed MI | No MI | Total |\n|---|---|---|---|\n| Drug | 30 | 470 | 500 |\n| Placebo | 60 | 440 | 500 |",
    lead: "What is the absolute risk reduction achieved by the drug?",
    options: [
      "50%",
      "12%",
      "6%",
      "17",
      "0.5"
    ],
    answer: 2,
    exp: "The absolute risk reduction is the difference between the event rate in the control group and the event rate in the treatment group. The placebo event rate is 60/500 = 12% and the drug event rate is 30/500 = 6%, so the absolute risk reduction is 12% minus 6%, which equals 6%. This differs from the relative risk reduction, which would be 50%.",
    why: [
      "50% is the relative risk reduction (the 6% absolute drop divided by the 12% baseline), not the absolute risk reduction.",
      "12% is the event rate in the placebo group alone, not the difference between groups.",
      "Correct: 12% minus 6% equals a 6% absolute risk reduction.",
      "About 17 is the number needed to treat (1 divided by 0.06), not the absolute risk reduction.",
      "0.5 is the relative risk (6% divided by 12%), not the absolute risk reduction."
    ]
  },
  {
    id: "s1-0148",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Confounding",
    difficulty: "moderate",
    anchor: null,
    vignette: "A cohort study reports that coffee drinkers have a higher rate of lung cancer than non-drinkers. Investigators note that coffee drinkers in the sample smoke cigarettes far more often than non-drinkers. When the analysis is stratified and adjusted for smoking status, the association between coffee and lung cancer disappears.",
    lead: "Which term best describes the role of smoking in this study?",
    options: [
      "Effect modification, in which the exposure effect varies across strata",
      "Selection bias arising from how participants were enrolled",
      "A mediator lying on the causal pathway between coffee and cancer",
      "A confounding variable associated with both coffee drinking and lung cancer",
      "Random error producing a spurious association"
    ],
    answer: 3,
    exp: "Smoking is a confounder because it is associated with the exposure (coffee drinking) and is an independent risk factor for the outcome (lung cancer), while not lying on the causal pathway between them. Its presence created a spurious association that vanished once the analysis was adjusted for it. Confounding can be addressed by stratification, multivariable adjustment, matching, or randomization.",
    why: [
      "Effect modification would show a genuinely different effect of coffee across smoking strata, not a disappearance of the association.",
      "Selection bias stems from how subjects enter the study, which is not what is described here.",
      "A mediator would lie on the causal pathway, but coffee does not cause lung cancer through smoking.",
      "Correct: smoking is linked to both coffee use and lung cancer without being on the causal pathway, so it confounds the association, which disappears after adjustment.",
      "The reproducible association that resolves with adjustment reflects confounding, not random chance."
    ]
  },
  {
    id: "s1-0149",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Elements of informed consent",
    difficulty: "easy",
    anchor: null,
    vignette: "A resident is asked to obtain consent for an elective, non-emergency operation from a competent adult. Pressed for time, the resident places the consent form in front of the patient and asks him to sign it without further discussion. The patient looks uncertain but begins to sign.",
    lead: "Which of the following is a required element of valid informed consent?",
    options: [
      "A signature obtained from a family member",
      "Disclosure of the risks, benefits, and reasonable alternatives to a patient with capacity who then agrees voluntarily",
      "Approval of the decision by the hospital ethics committee",
      "A guarantee that the procedure will be successful",
      "Documentation that consent was obtained during a medical emergency"
    ],
    answer: 1,
    exp: "Valid informed consent requires that a patient with decision-making capacity be told the nature of the procedure along with its risks, benefits, and reasonable alternatives, and then agree voluntarily without coercion. Simply obtaining a signature without disclosure and understanding does not satisfy these requirements. The resident should stop and provide an adequate discussion before the patient signs.",
    why: [
      "A family member's signature cannot substitute for the informed agreement of a competent adult patient.",
      "Correct: disclosure of risks, benefits, and alternatives to a patient with capacity who then agrees voluntarily is the core of informed consent.",
      "Routine consent does not require ethics committee approval.",
      "No procedure can be guaranteed to succeed, and such a promise is not part of consent.",
      "The emergency exception applies when consent cannot be obtained, which is the opposite of this elective setting."
    ]
  },
  {
    id: "s1-0150",
    system: "Social Sciences / Ethics",
    discipline: "Behavioral Sciences",
    topic: "Intimate partner violence",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 29-year-old woman presents with a wrist injury whose description does not match the pattern of bruising. Her partner answers questions for her and stays close. When seen alone, she discloses that her partner has hit her before but says she is not in immediate danger and is not ready to leave the relationship. She is a competent adult, and there are no children in the home.",
    lead: "Which is the most appropriate next step?",
    options: [
      "Notify the police against her wishes",
      "Insist that she leave the relationship immediately",
      "Contact the partner to mediate the conflict",
      "Defer any discussion until she raises the topic again",
      "Provide nonjudgmental support, assess her immediate safety, and offer resources while respecting her autonomy"
    ],
    answer: 4,
    exp: "For a competent adult experiencing intimate partner violence, the appropriate response is to offer nonjudgmental support, perform a safety assessment, document findings, and provide resources such as counseling and hotline referrals, while respecting the patient's autonomy over decisions. Reporting to law enforcement without consent is generally not required for competent adults, unlike suspected child or elder abuse. Pressuring her to leave can be counterproductive and undermines her autonomy.",
    why: [
      "Reporting to police against her wishes is generally not mandated for a competent adult and can endanger her.",
      "Insisting she leave immediately disregards her autonomy and may increase her risk.",
      "Contacting the partner to mediate could escalate the danger and breach her confidence.",
      "Deferring the discussion misses the opportunity to assess safety and provide resources.",
      "Correct: nonjudgmental support, a safety assessment, and offered resources respect her autonomy while addressing her risk."
    ]
  }
];
