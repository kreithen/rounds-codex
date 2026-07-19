/*
 * Rounds Codex - USMLE Step 1 question bank, Batch 8 (25 items)
 * Blueprint-weighted mix. All vignettes original; source used for facts only.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP1_B8 = [
  {
    id: "s1-0176",
    system: "General Principles",
    discipline: "Biochemistry",
    topic: "Fabry disease (alpha-galactosidase A deficiency)",
    difficulty: "hard",
    anchor: null,
    vignette: "A 26-year-old man reports years of burning pain in his hands and feet that worsens with heat and exercise, along with reduced sweating. He has clusters of small dark-red non-blanching papules over the lower trunk and around the umbilicus. He now has proteinuria, and his maternal uncle died young of kidney failure and stroke. Family history suggests only males are affected across generations.",
    lead: "A deficiency of which enzyme best explains this presentation?",
    options: [
      "Alpha-galactosidase A",
      "Beta-glucocerebrosidase",
      "Sphingomyelinase",
      "Hexosaminidase A",
      "Arylsulfatase A"
    ],
    answer: 0,
    exp: "Episodic acral burning pain (acroparesthesias), angiokeratomas, hypohidrosis, progressive renal disease, and an X-linked pattern affecting males indicate Fabry disease. It results from deficiency of alpha-galactosidase A, causing accumulation of globotriaosylceramide (ceramide trihexoside) in vascular endothelium, nerves, and the kidney. Untreated patients develop renal failure, strokes, and cardiac disease; enzyme replacement is available.",
    why: [
      "Correct: alpha-galactosidase A deficiency causes Fabry disease, with globotriaosylceramide accumulation producing acroparesthesias, angiokeratomas, and renal and vascular disease in an X-linked pattern.",
      "Beta-glucocerebrosidase deficiency causes Gaucher disease with hepatosplenomegaly and bone crises, not angiokeratomas with acral pain.",
      "Sphingomyelinase deficiency causes Niemann-Pick disease with hepatosplenomegaly and a cherry-red macula in infancy.",
      "Hexosaminidase A deficiency causes Tay-Sachs disease with neurodegeneration and a cherry-red macula but no hepatosplenomegaly or angiokeratomas.",
      "Arylsulfatase A deficiency causes metachromatic leukodystrophy with demyelination and progressive motor decline, not this vascular-cutaneous picture."
    ]
  },
  {
    id: "s1-0177",
    system: "General Principles",
    discipline: "Pharmacology",
    topic: "Fluoroquinolone mechanism (DNA gyrase inhibition)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 68-year-old man is treated with oral ciprofloxacin for a complicated urinary tract infection. He is counseled to avoid taking it with his calcium-containing antacid and to report any tendon pain, since he also takes a glucocorticoid.",
    lead: "Which mechanism best explains the antibacterial action of this drug?",
    options: [
      "Inhibition of the 50S ribosomal subunit blocking peptide bond formation",
      "Inhibition of DNA gyrase (topoisomerase II) and topoisomerase IV",
      "Inhibition of dihydrofolate reductase blocking folate synthesis",
      "Disruption of the bacterial cell wall by binding penicillin-binding proteins",
      "Inhibition of RNA polymerase blocking transcription"
    ],
    answer: 1,
    exp: "Fluoroquinolones such as ciprofloxacin inhibit bacterial DNA gyrase (topoisomerase II) and topoisomerase IV, preventing supercoiling relaxation and religation during DNA replication, which is bactericidal. Divalent cations in antacids chelate the drug and reduce absorption, and tendinopathy and tendon rupture are recognized adverse effects, especially with concurrent glucocorticoids.",
    why: [
      "The 50S subunit is the target of macrolides and clindamycin, not fluoroquinolones.",
      "Correct: fluoroquinolones inhibit DNA gyrase and topoisomerase IV, blocking bacterial DNA replication.",
      "Dihydrofolate reductase inhibition describes trimethoprim, which acts on folate metabolism rather than DNA topoisomerases.",
      "Binding penicillin-binding proteins to disrupt cell wall synthesis describes beta-lactams, not quinolones.",
      "RNA polymerase inhibition is the mechanism of rifampin, not fluoroquinolones."
    ]
  },
  {
    id: "s1-0178",
    system: "General Principles",
    discipline: "Pharmacology",
    topic: "Acetaminophen hepatotoxicity (NAPQI)",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 22-year-old woman is brought in about 30 hours after intentionally ingesting a large quantity of acetaminophen. She initially had only nausea but now has right upper quadrant pain and confusion.\n\n| Test | Value | Reference |\n|---|---|---|\n| AST | 4,800 U/L | 10-40 |\n| ALT | 5,200 U/L | 7-56 |\n| INR | 3.1 | 0.9-1.1 |\n| Total bilirubin | 4.5 mg/dL | 0.2-1.2 |",
    lead: "Which mechanism best explains her liver injury, and what does the antidote replenish?",
    options: [
      "Mitochondrial iron overload; antidote chelates iron",
      "Immune-mediated hepatocyte destruction; antidote suppresses the immune response",
      "Accumulation of a toxic quinone metabolite that depletes glutathione; antidote replenishes glutathione stores",
      "Microvesicular fat accumulation from impaired beta-oxidation; antidote provides carnitine",
      "Direct bile duct injury with cholestasis; antidote promotes bile flow"
    ],
    answer: 2,
    exp: "In overdose, acetaminophen is shunted to the reactive metabolite NAPQI via cytochrome P450 (CYP2E1). NAPQI exhausts hepatic glutathione and then binds cellular proteins, producing centrilobular hepatocellular necrosis with markedly elevated transaminases, coagulopathy, and encephalopathy. N-acetylcysteine acts as a glutathione precursor and substitute, restoring the capacity to detoxify NAPQI.",
    why: [
      "Iron overload injury is treated with deferoxamine chelation, which is unrelated to acetaminophen metabolism.",
      "Acetaminophen toxicity is a direct metabolic injury, not an immune-mediated hepatitis treated with immunosuppression.",
      "Correct: NAPQI depletes glutathione and injures hepatocytes, and N-acetylcysteine replenishes glutathione to detoxify the metabolite.",
      "Impaired beta-oxidation with microvesicular steatosis describes Reye syndrome or valproate injury, not acetaminophen overdose.",
      "Acetaminophen causes hepatocellular necrosis rather than a primary cholestatic bile duct injury."
    ]
  },
  {
    id: "s1-0179",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Pathology",
    topic: "Warm autoimmune hemolytic anemia",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 60-year-old woman with chronic lymphocytic leukemia develops fatigue, pallor, and scleral icterus over two weeks. Her spleen is mildly enlarged. A peripheral smear shows spherocytes and polychromasia.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 7.8 g/dL | 12-16 |\n| Reticulocyte count | markedly elevated | - |\n| Indirect bilirubin | elevated | - |\n| Haptoglobin | low | - |\n| Direct antiglobulin (Coombs) test | positive for IgG | negative |",
    lead: "Which best explains her anemia?",
    options: [
      "A membrane cytoskeletal defect from an inherited ankyrin mutation",
      "IgM cold agglutinins causing complement-mediated intravascular hemolysis",
      "Microangiopathic fragmentation of red cells in small vessels",
      "IgG autoantibodies coating red cells with splenic extravascular clearance",
      "Oxidative denaturation of hemoglobin forming Heinz bodies"
    ],
    answer: 3,
    exp: "Acquired hemolytic anemia with spherocytes, reticulocytosis, elevated indirect bilirubin, low haptoglobin, and a direct antiglobulin test positive for IgG is warm autoimmune hemolytic anemia. IgG autoantibodies bind red cells optimally at body temperature; splenic macrophages then remove antibody-coated membrane, forming spherocytes and clearing the cells extravascularly. It is often secondary to chronic lymphocytic leukemia, lupus, or drugs.",
    why: [
      "An inherited ankyrin defect causes hereditary spherocytosis, which has a negative direct antiglobulin test, unlike this acquired antibody-mediated process.",
      "IgM cold agglutinins produce a Coombs test positive for complement (C3) rather than IgG and hemolysis on cold exposure.",
      "Microangiopathic hemolysis shows schistocytes and a negative direct antiglobulin test, not spherocytes with a positive IgG Coombs.",
      "Correct: warm IgG autoantibodies coat red cells and are cleared by splenic macrophages, producing spherocytes and a positive IgG direct antiglobulin test.",
      "Oxidative injury (as in G6PD deficiency) produces Heinz bodies and bite cells with a negative direct antiglobulin test."
    ]
  },
  {
    id: "s1-0180",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Pathology",
    topic: "Sickle cell disease",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 4-year-old African American boy has recurrent episodes of severe pain in his hands, feet, and back, sometimes triggered by cold or infection. He has scleral icterus and splenomegaly, and he has had a pneumococcal infection. His baseline hemoglobin is low.\n\n**[IMAGE: peripheral blood smear showing elongated, crescent-shaped sickled erythrocytes and a Howell-Jolly body]**",
    lead: "Which molecular change best explains this disease?",
    options: [
      "Absent synthesis of beta-globin chains",
      "Deficiency of glucose-6-phosphate dehydrogenase",
      "A quantitative reduction of alpha-globin chain production",
      "A defect in the red cell membrane protein spectrin",
      "A glutamate-to-valine substitution in the beta-globin chain"
    ],
    answer: 4,
    exp: "Recurrent vaso-occlusive pain crises, hemolytic anemia, functional asplenia with encapsulated-organism infections, and sickled cells on smear indicate sickle cell disease. A single point mutation replaces glutamate with valine at the sixth position of beta-globin, producing hemoglobin S that polymerizes when deoxygenated. The rigid sickled cells occlude microvessels and are cleared prematurely, and repeated splenic infarction causes autosplenectomy.",
    why: [
      "Absent beta-globin synthesis causes beta-thalassemia major with transfusion dependence, not the sickling seen here.",
      "G6PD deficiency causes episodic oxidative hemolysis with bite cells, not chronic sickling.",
      "Reduced alpha-globin production causes alpha-thalassemia, a quantitative defect without sickling.",
      "A spectrin defect causes hereditary spherocytosis with spherocytes, not sickle cells and vaso-occlusive crises.",
      "Correct: a glutamate-to-valine substitution at codon 6 of beta-globin creates hemoglobin S, which polymerizes and sickles red cells."
    ]
  },
  {
    id: "s1-0181",
    system: "Behavioral Health & Nervous System",
    discipline: "Psychiatry",
    topic: "Obsessive-compulsive disorder",
    difficulty: "easy",
    anchor: null,
    vignette: "A 28-year-old woman reports that for the past year she has been plagued by intrusive, unwanted thoughts that her hands are contaminated. To relieve the intense anxiety these thoughts cause, she washes her hands dozens of times a day until they are raw and follows rigid cleaning rituals. She recognizes the behavior is excessive but cannot stop, and it now consumes hours daily and interferes with her job.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Obsessive-compulsive disorder",
      "Obsessive-compulsive personality disorder",
      "Generalized anxiety disorder",
      "Specific phobia",
      "Illness anxiety disorder"
    ],
    answer: 0,
    exp: "Recurrent intrusive, distressing thoughts (obsessions) that drive repetitive ritualized behaviors (compulsions) performed to reduce anxiety, recognized as excessive and consuming more than an hour a day with functional impairment, define obsessive-compulsive disorder. First-line treatment combines cognitive-behavioral therapy with exposure and response prevention and an SSRI.",
    why: [
      "Correct: intrusive contamination obsessions with time-consuming washing compulsions that impair function define obsessive-compulsive disorder.",
      "Obsessive-compulsive personality disorder is a pervasive preoccupation with order and control that is ego-syntonic, without true obsessions and compulsions.",
      "Generalized anxiety disorder is chronic worry about real-life concerns without ritualized compulsions.",
      "Specific phobia is marked fear triggered by a particular object or situation, not intrusive obsessions relieved by rituals.",
      "Illness anxiety disorder is preoccupation with having a serious disease, not contamination obsessions with compulsive washing."
    ]
  },
  {
    id: "s1-0182",
    system: "Behavioral Health & Nervous System",
    discipline: "Neurology",
    topic: "Normal pressure hydrocephalus",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 73-year-old man is brought in by his wife for several months of a slow, shuffling, wide-based gait with frequent falls, urinary incontinence, and worsening forgetfulness. He is afebrile with no headache. His gait improves noticeably after a large-volume lumbar puncture.\n\n**[IMAGE: axial head CT showing symmetric enlargement of the lateral ventricles out of proportion to cortical atrophy]**",
    lead: "Which best explains his condition?",
    options: [
      "Obstruction of cerebrospinal fluid flow at the cerebral aqueduct",
      "Impaired cerebrospinal fluid resorption causing ventriculomegaly at normal pressure",
      "Diffuse cortical amyloid plaque deposition with neurofibrillary tangles",
      "Multiple small-vessel lacunar infarcts in the basal ganglia",
      "Loss of dopaminergic neurons in the substantia nigra"
    ],
    answer: 1,
    exp: "The triad of gait apraxia, urinary incontinence, and cognitive decline (\"wet, wobbly, and wacky\") with ventricular enlargement disproportionate to atrophy and improvement after cerebrospinal fluid removal indicates normal pressure hydrocephalus. It reflects impaired cerebrospinal fluid resorption producing communicating hydrocephalus at normal measured pressure; ventricular shunting can reverse symptoms, especially the gait.",
    why: [
      "Aqueductal obstruction causes noncommunicating hydrocephalus with raised pressure and headache, not this normal-pressure communicating picture.",
      "Correct: impaired cerebrospinal fluid resorption produces communicating ventriculomegaly at normal pressure, giving the gait, urinary, and cognitive triad reversible with fluid drainage.",
      "Cortical amyloid plaques and tangles describe Alzheimer disease, which does not improve after a lumbar puncture or show disproportionate ventriculomegaly.",
      "Multiple lacunar infarcts cause vascular cognitive impairment but not the shunt-responsive triad with ventriculomegaly.",
      "Nigral dopaminergic loss causes Parkinson disease with resting tremor and rigidity, not gait apraxia reversible by cerebrospinal fluid removal."
    ]
  },
  {
    id: "s1-0183",
    system: "Behavioral Health & Nervous System",
    discipline: "Pharmacology",
    topic: "Neuroleptic malignant syndrome",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 24-year-old man with schizophrenia is brought in after his antipsychotic dose was increased several days ago. Over about two days he became confused and rigid. He is now diaphoretic with a temperature of 40.4 C, generalized \"lead-pipe\" muscle rigidity, and unstable blood pressure. His reflexes are diminished rather than hyperactive.\n\n| Test | Value | Reference |\n|---|---|---|\n| Creatine kinase | 12,000 U/L | 30-200 |\n| White blood cell count | 15,000/mcL | 4,500-11,000 |\n| Potassium | 5.6 mEq/L | 3.5-5.0 |",
    lead: "Which best explains this presentation?",
    options: [
      "Excess serotonergic activity from a serotonergic drug interaction",
      "A ryanodine receptor mutation triggered by inhaled anesthetics",
      "Central dopamine receptor blockade causing hyperthermia and rigidity",
      "Anticholinergic toxicity from receptor blockade",
      "Autoimmune encephalitis against NMDA receptors"
    ],
    answer: 2,
    exp: "High fever, severe \"lead-pipe\" rigidity with hyporeflexia, autonomic instability, altered mental status, and a markedly elevated creatine kinase days after starting or increasing a dopamine antagonist indicate neuroleptic malignant syndrome. Central D2 receptor blockade impairs thermoregulation and causes rigidity, and sustained muscle contraction produces rhabdomyolysis with hyperkalemia. Treatment includes stopping the antipsychotic plus dantrolene or bromocriptine. The hyporeflexia and slower onset help distinguish it from serotonin syndrome, which causes hyperreflexia, clonus, and rapid onset.",
    why: [
      "Serotonin syndrome causes hyperthermia with hyperreflexia and clonus and develops within hours of a serotonergic agent, unlike this rigid, hyporeflexic, dopamine-antagonist picture.",
      "A ryanodine receptor mutation causes malignant hyperthermia triggered by inhaled anesthetics or succinylcholine, not by an oral antipsychotic.",
      "Correct: central dopamine (D2) receptor blockade produces hyperthermia, lead-pipe rigidity, autonomic instability, and rhabdomyolysis with elevated creatine kinase.",
      "Anticholinergic toxicity causes hyperthermia with dry skin, flushing, and mydriasis, not diaphoresis with lead-pipe rigidity and very high creatine kinase.",
      "Anti-NMDA receptor encephalitis causes psychiatric symptoms and seizures over weeks, not acute hyperthermic rigidity after a dose increase."
    ]
  },
  {
    id: "s1-0184",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Ankylosing spondylitis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 25-year-old man reports more than six months of low back pain and stiffness that is worst in the early morning and after rest and improves with exercise. He has reduced spinal flexion and decreased chest expansion. He also had an episode of a painful red eye. He has no psoriasis or diarrhea.\n\n**[IMAGE: anteroposterior pelvis radiograph showing bilateral sacroiliac joint fusion, with a lateral spine film showing bridging syndesmophytes producing a bamboo spine]**",
    lead: "Which finding is most strongly associated with this disorder?",
    options: [
      "Anti-cyclic citrullinated peptide antibodies",
      "Serum monosodium urate crystals",
      "Anti-double-stranded DNA antibodies",
      "The HLA-B27 allele",
      "Anti-topoisomerase I antibodies"
    ],
    answer: 3,
    exp: "Chronic inflammatory back pain in a young man with morning stiffness that improves with activity, limited chest expansion, acute anterior uveitis, and radiographic sacroiliitis with syndesmophytes is ankylosing spondylitis. This seronegative spondyloarthropathy is strongly linked to HLA-B27. Enthesitis and progressive spinal fusion (bamboo spine) are characteristic, and rheumatoid factor is absent.",
    why: [
      "Anti-cyclic citrullinated peptide antibodies are specific for rheumatoid arthritis, which causes symmetric small-joint synovitis rather than sacroiliitis.",
      "Monosodium urate crystals cause gout with acute peripheral arthritis, not inflammatory spinal fusion.",
      "Anti-double-stranded DNA antibodies are specific for systemic lupus erythematosus, not spondyloarthropathy.",
      "Correct: ankylosing spondylitis is strongly associated with HLA-B27 and features sacroiliitis, syndesmophytes, and anterior uveitis.",
      "Anti-topoisomerase I (Scl-70) antibodies indicate diffuse systemic sclerosis, unrelated to ankylosing spondylitis."
    ]
  },
  {
    id: "s1-0185",
    system: "Musculoskeletal / Skin",
    discipline: "Biochemistry",
    topic: "Vitamin D deficiency rickets",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 14-month-old exclusively breastfed infant who has had little sun exposure is evaluated for bowing of the legs and delayed walking. He has swelling at the wrists and costochondral junctions and a soft, deformable skull. Laboratory testing shows low calcium, low phosphate, and elevated alkaline phosphatase with an elevated parathyroid hormone.\n\n**[IMAGE: radiograph of the wrist showing widened, cupped, and frayed metaphyses of the distal radius and ulna]**",
    lead: "Which best explains these findings?",
    options: [
      "Autoimmune destruction of chondrocytes in the growth plate",
      "Increased osteoclastic bone resorption from a parathyroid adenoma",
      "A defect in type I collagen synthesis",
      "Impaired osteoclast function causing dense brittle bone",
      "Deficient mineralization of osteoid from vitamin D deficiency"
    ],
    answer: 4,
    exp: "Bowing of the legs, widened wrists, a rachitic rosary at the costochondral junctions, craniotabes, and low calcium and phosphate with high alkaline phosphatase in a breastfed infant with poor sun exposure indicate rickets from vitamin D deficiency. Inadequate vitamin D reduces intestinal calcium and phosphate absorption, so growing bone osteoid fails to mineralize, producing soft, deformable bone and frayed metaphyses. Secondary hyperparathyroidism develops in response to hypocalcemia.",
    why: [
      "Autoimmune chondrocyte destruction is not the mechanism; rickets is a mineralization defect from vitamin D deficiency.",
      "A parathyroid adenoma raises calcium, whereas this child is hypocalcemic with secondary hyperparathyroidism.",
      "A type I collagen defect causes osteogenesis imperfecta with fractures and blue sclerae, not frayed metaphyses from poor mineralization.",
      "Impaired osteoclast function causes osteopetrosis with dense brittle bones, the opposite of soft undermineralized rachitic bone.",
      "Correct: vitamin D deficiency impairs calcium and phosphate absorption, leaving osteoid unmineralized and causing the skeletal deformities of rickets."
    ]
  },
  {
    id: "s1-0186",
    system: "Cardiovascular",
    discipline: "Pathology",
    topic: "Infective endocarditis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 32-year-old man who injects drugs presents with two weeks of fever, chills, and malaise. He has a new holosystolic murmur at the lower left sternal border that increases with inspiration. He has small tender nodules on his fingertips and painless macules on his palms and soles.\n\n**[IMAGE: transthoracic echocardiogram showing a mobile echogenic vegetation attached to the tricuspid valve]**",
    lead: "Which best explains this presentation?",
    options: [
      "Microbial vegetations on a heart valve with septic embolization",
      "Sterile verrucous vegetations along the valve closure lines from lupus",
      "Fibrinous pericardial inflammation from a viral infection",
      "Myxomatous degeneration causing valve prolapse",
      "Rheumatic scarring and fusion of the valve commissures"
    ],
    answer: 0,
    exp: "Fever, a new regurgitant murmur, and peripheral stigmata (Osler nodes, Janeway lesions) in a person who injects drugs indicate infective endocarditis, here of the tricuspid valve. Bacteria seed the valve and form vegetations of platelets, fibrin, and organisms; fragments embolize, and immune-complex phenomena produce the peripheral findings. Right-sided disease in injection drug use is frequently due to Staphylococcus aureus.",
    why: [
      "Correct: infective endocarditis forms microbial vegetations on the valve that embolize and cause the fever, new murmur, and peripheral lesions.",
      "Sterile verrucous vegetations on both sides of the valve describe Libman-Sacks endocarditis of lupus, without fever or positive cultures.",
      "Fibrinous pericarditis causes pleuritic chest pain and a friction rub, not a valvular vegetation with embolic phenomena.",
      "Myxomatous mitral valve prolapse causes a midsystolic click, not fever with vegetations and embolic lesions.",
      "Rheumatic commissural fusion causes chronic mitral stenosis, not an acute febrile illness with valve vegetations."
    ]
  },
  {
    id: "s1-0187",
    system: "Cardiovascular",
    discipline: "Physiology",
    topic: "Third-degree (complete) atrioventricular block",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "An 80-year-old woman reports fatigue and several episodes of lightheadedness with near-fainting. Her pulse is slow and regular at about 38 beats per minute and does not increase with exertion. She takes no nodal blocking drugs.\n\n**[ECG: regular P waves at about 90 per minute and regular QRS complexes at about 38 per minute, with complete dissociation between P waves and QRS complexes]**",
    lead: "Which best explains her bradycardia?",
    options: [
      "Progressive prolongation of the PR interval until a beat drops",
      "Complete failure of atrioventricular conduction with an independent escape rhythm",
      "A reentrant circuit using an accessory pathway",
      "Increased vagal tone slowing the sinoatrial node",
      "Chaotic atrial activity with an irregularly irregular ventricular response"
    ],
    answer: 1,
    exp: "Atrioventricular dissociation in which P waves and QRS complexes each march out at their own regular but unrelated rates is third-degree (complete) heart block. No atrial impulse reaches the ventricles, so a junctional or ventricular escape pacemaker drives the slow ventricular rate. Symptomatic complete block requires a permanent pacemaker.",
    why: [
      "Progressive PR prolongation until a dropped beat describes Mobitz type I (Wenckebach) second-degree block, not complete dissociation.",
      "Correct: complete failure of atrioventricular conduction leaves the atria and an escape pacemaker beating independently, producing the dissociation and bradycardia.",
      "An accessory-pathway reentrant circuit causes tachycardia, not a slow dissociated rhythm.",
      "High vagal tone slows the sinus node but preserves atrioventricular conduction, so P waves and QRS complexes stay linked.",
      "Irregularly irregular ventricular activity with no discrete P waves describes atrial fibrillation, not regular dissociated complexes."
    ]
  },
  {
    id: "s1-0188",
    system: "Respiratory & Renal/Urinary",
    discipline: "Microbiology",
    topic: "Pneumococcal lobar pneumonia",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 64-year-old man develops an abrupt high fever with shaking chills, a productive cough with rust-colored sputum, and sharp right-sided chest pain that worsens with breathing. Examination shows dullness to percussion, increased tactile fremitus, and bronchial breath sounds over the right lower lung. A sputum Gram stain shows lancet-shaped gram-positive diplococci.\n\n**[IMAGE: posteroanterior chest radiograph showing dense homogeneous consolidation confined to the right lower lobe with air bronchograms]**",
    lead: "Which is the most likely causative organism?",
    options: [
      "Mycoplasma pneumoniae",
      "Legionella pneumophila",
      "Streptococcus pneumoniae",
      "Klebsiella pneumoniae",
      "Pneumocystis jirovecii"
    ],
    answer: 2,
    exp: "Sudden fever with rigors, rust-colored sputum, pleuritic pain, lobar consolidation with signs of consolidation on examination, and lancet-shaped gram-positive diplococci indicate lobar pneumonia from Streptococcus pneumoniae, the most common cause of community-acquired bacterial pneumonia. The consolidation reflects alveolar filling with neutrophilic exudate that transmits sound and produces bronchial breath sounds and increased fremitus.",
    why: [
      "Mycoplasma pneumoniae causes a walking pneumonia with diffuse interstitial infiltrates and no organisms on Gram stain because it lacks a cell wall.",
      "Legionella causes atypical pneumonia often with diarrhea and hyponatremia and does not show gram-positive diplococci.",
      "Correct: lancet-shaped gram-positive diplococci with lobar consolidation and rust-colored sputum indicate Streptococcus pneumoniae.",
      "Klebsiella causes lobar pneumonia with thick currant-jelly sputum in alcoholics and shows gram-negative rods, not diplococci.",
      "Pneumocystis jirovecii causes diffuse interstitial pneumonia in immunocompromised patients, not lobar consolidation with diplococci."
    ]
  },
  {
    id: "s1-0189",
    system: "Respiratory & Renal/Urinary",
    discipline: "Immunology",
    topic: "Goodpasture syndrome (anti-GBM disease)",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 26-year-old man presents with one week of coughing up blood and progressive shortness of breath, and he has noticed dark, cola-colored urine and decreasing urine output. He is a smoker. His blood pressure is elevated.\n\n| Test | Value | Reference |\n|---|---|---|\n| Serum creatinine | 3.8 mg/dL | 0.7-1.3 |\n| Urinalysis | dysmorphic RBCs and red cell casts | none |\n| Anti-glomerular basement membrane antibody | positive | negative |\n| ANCA | negative | negative |",
    lead: "Which best explains the combined lung and kidney findings?",
    options: [
      "Immune complex deposition in glomeruli and alveoli",
      "IgA deposition in the mesangium and dermal vessels",
      "Antineutrophil cytoplasmic antibody-associated small-vessel vasculitis",
      "Antibodies against the alpha-3 chain of type IV collagen in basement membranes",
      "Anti-phospholipase A2 receptor antibodies in the glomerulus"
    ],
    answer: 3,
    exp: "Simultaneous alveolar hemorrhage (hemoptysis) and rapidly progressive glomerulonephritis with a positive anti-glomerular basement membrane antibody and negative ANCA indicate Goodpasture syndrome. Autoantibodies target the alpha-3 chain of type IV collagen, shared by alveolar and glomerular basement membranes, producing linear immunofluorescence and a crescentic glomerulonephritis. Smoking increases alveolar involvement.",
    why: [
      "Immune-complex deposition (as in lupus or postinfectious disease) gives a granular, not linear, pattern and is not defined by anti-glomerular basement membrane antibodies.",
      "Mesangial IgA deposition causes IgA nephropathy, which does not produce alveolar hemorrhage or anti-glomerular basement membrane antibodies.",
      "ANCA-associated vasculitis can cause a pulmonary-renal syndrome, but the ANCA is negative and the anti-glomerular basement membrane antibody is positive here.",
      "Correct: antibodies against the alpha-3 chain of type IV collagen attack shared alveolar and glomerular basement membranes, causing pulmonary hemorrhage with crescentic glomerulonephritis.",
      "Anti-phospholipase A2 receptor antibodies cause membranous nephropathy with nephrotic syndrome, not a pulmonary-renal hemorrhagic syndrome."
    ]
  },
  {
    id: "s1-0190",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Primary biliary cholangitis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 52-year-old woman reports several months of fatigue and generalized itching that is worse at night. She has hyperpigmentation and small yellow deposits around her eyelids. She has no significant alcohol use and takes no hepatotoxic drugs.\n\n| Test | Value | Reference |\n|---|---|---|\n| Alkaline phosphatase | markedly elevated | 40-120 |\n| AST and ALT | mildly elevated | - |\n| Antimitochondrial antibody | positive | negative |\n| IgM | elevated | - |",
    lead: "Which best explains this disorder?",
    options: [
      "Obstructing gallstone in the common bile duct",
      "Inflammatory strictures and dilations of large bile ducts",
      "Autoantibodies against hepatocyte nuclei and smooth muscle causing interface hepatitis",
      "Iron deposition causing hepatocyte injury and fibrosis",
      "Autoimmune destruction of intrahepatic small bile ducts"
    ],
    answer: 4,
    exp: "A middle-aged woman with fatigue, pruritus, xanthelasma, a cholestatic pattern with markedly elevated alkaline phosphatase, and a positive antimitochondrial antibody has primary biliary cholangitis. T-cell mediated autoimmune destruction of small intrahepatic bile ducts causes cholestasis, pruritus, and hypercholesterolemia, and it can progress to cirrhosis. Ursodeoxycholic acid is the mainstay of treatment.",
    why: [
      "A common bile duct stone causes extrahepatic obstruction with pain and a dilated duct, not a positive antimitochondrial antibody.",
      "Inflammatory strictures of large ducts describe primary sclerosing cholangitis, which is associated with ulcerative colitis and a positive p-ANCA, not antimitochondrial antibody.",
      "Antibodies against nuclei and smooth muscle with interface hepatitis describe autoimmune hepatitis, a hepatocellular rather than cholestatic pattern.",
      "Iron deposition describes hereditary hemochromatosis, which does not produce an antimitochondrial antibody or a purely cholestatic picture.",
      "Correct: autoimmune destruction of small intrahepatic bile ducts causes the cholestatic pattern, pruritus, and antimitochondrial antibody of primary biliary cholangitis."
    ]
  },
  {
    id: "s1-0191",
    system: "Gastrointestinal",
    discipline: "Microbiology",
    topic: "Helicobacter pylori peptic ulcer disease",
    difficulty: "easy",
    anchor: null,
    vignette: "A 45-year-old man reports several weeks of gnawing epigastric pain that improves shortly after eating and recurs a few hours later, sometimes waking him at night. He takes no nonsteroidal anti-inflammatory drugs. Endoscopy shows a clean-based ulcer in the duodenal bulb, and a biopsy urease test is positive.",
    lead: "Which organism is most likely responsible?",
    options: [
      "Helicobacter pylori",
      "Escherichia coli",
      "Salmonella enterica",
      "Candida albicans",
      "Cytomegalovirus"
    ],
    answer: 0,
    exp: "A duodenal ulcer with pain relieved by food and a positive biopsy urease test indicates Helicobacter pylori infection, the leading cause of peptic ulcer disease when nonsteroidal anti-inflammatory drugs are absent. The organism produces urease to neutralize gastric acid and colonizes the mucus layer, causing chronic inflammation that predisposes to ulceration. Eradication with antibiotics plus a proton pump inhibitor heals ulcers and prevents recurrence.",
    why: [
      "Correct: Helicobacter pylori, a urease-positive organism, is the most common cause of duodenal ulcers not related to nonsteroidal anti-inflammatory drugs.",
      "Escherichia coli causes urinary and enteric infections, not chronic gastric colonization and peptic ulceration.",
      "Salmonella causes gastroenteritis and enteric fever, not a urease-positive duodenal ulcer.",
      "Candida esophagitis occurs in immunocompromised hosts and does not produce a positive urease test in a duodenal ulcer.",
      "Cytomegalovirus can cause ulcers in immunocompromised patients but is not the typical urease-positive cause of duodenal ulcer disease."
    ]
  },
  {
    id: "s1-0192",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Medullary thyroid carcinoma (MEN2)",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 32-year-old man has a firm thyroid nodule and episodes of flushing and diarrhea. His father died of a thyroid cancer, and an uncle had recurrent kidney stones. He also reports episodic pounding headaches and palpitations with sweating.\n\n| Test | Value | Reference |\n|---|---|---|\n| Serum calcitonin | markedly elevated | < 10 pg/mL |\n| Carcinoembryonic antigen | elevated | - |\n| Plasma metanephrines | elevated | normal |",
    lead: "This thyroid tumor arises from which cell type, and which gene is most likely mutated?",
    options: [
      "Follicular epithelial cells; a BRAF mutation",
      "Parafollicular C cells; a RET proto-oncogene mutation",
      "Follicular epithelial cells; a PAX8-PPAR gamma fusion",
      "Lymphocytes; a translocation involving BCL2",
      "Parathyroid chief cells; an MEN1 mutation"
    ],
    answer: 1,
    exp: "A calcitonin-secreting thyroid tumor with elevated carcinoembryonic antigen, a family history of thyroid cancer, and coexisting pheochromocytoma (episodic headache, palpitations, sweating, elevated metanephrines) indicate medullary thyroid carcinoma within multiple endocrine neoplasia type 2. This tumor arises from parafollicular C cells and is driven by activating germline mutations of the RET proto-oncogene. Prophylactic thyroidectomy is offered to gene carriers.",
    why: [
      "A BRAF mutation drives papillary thyroid carcinoma from follicular cells, which does not secrete calcitonin or associate with pheochromocytoma.",
      "Correct: medullary thyroid carcinoma arises from calcitonin-secreting parafollicular C cells and is driven by RET proto-oncogene mutations, as in MEN2.",
      "A PAX8-PPAR gamma fusion is seen in follicular thyroid carcinoma, not the calcitonin-secreting C-cell tumor described.",
      "A BCL2 translocation drives follicular lymphoma, unrelated to a calcitonin-secreting thyroid tumor.",
      "MEN1 mutations cause parathyroid, pituitary, and pancreatic tumors, not RET-driven medullary thyroid carcinoma with pheochromocytoma."
    ]
  },
  {
    id: "s1-0193",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Endometriosis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 31-year-old woman reports several years of progressively worsening pelvic pain that begins a day or two before her menses, painful intercourse, and difficulty conceiving. Pelvic examination reveals tender nodularity along the uterosacral ligaments and a fixed, retroverted uterus. A tender adnexal mass is palpable.",
    lead: "Which best explains her symptoms?",
    options: [
      "Benign smooth muscle tumors within the myometrium",
      "Ascending infection of the upper genital tract",
      "Endometrial glands and stroma implanted outside the uterine cavity",
      "Malignant proliferation of ovarian surface epithelium",
      "Adenomyosis with endometrial glands within the myometrium"
    ],
    answer: 2,
    exp: "Cyclic pelvic pain preceding menses, dyspareunia, infertility, uterosacral nodularity, and an adnexal mass (endometrioma) indicate endometriosis. Functioning endometrial glands and stroma implanted outside the uterus respond to cyclic hormones, bleed, and incite inflammation and adhesions, producing pain and infertility. Ovarian implants can form chocolate cysts.",
    why: [
      "Myometrial smooth muscle tumors (leiomyomas) cause bulk symptoms and heavy bleeding, not cyclic pain with uterosacral nodularity.",
      "Ascending pelvic infection causes acute fever and cervical motion tenderness, not years of cyclic pain with fixed nodularity.",
      "Correct: ectopic endometrial glands and stroma outside the uterus cause cyclic pain, dyspareunia, infertility, and endometriomas.",
      "Malignant ovarian surface epithelium causes a complex mass and constitutional symptoms, not this cyclic pain syndrome in a young woman.",
      "Adenomyosis causes a diffusely enlarged, boggy, tender uterus with heavy menses, not implants on the uterosacral ligaments and adnexa."
    ]
  },
  {
    id: "s1-0194",
    system: "Reproductive & Endocrine",
    discipline: "Physiology",
    topic: "Primary hyperaldosteronism (Conn syndrome)",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 48-year-old woman has hypertension that remains poorly controlled despite three antihypertensive drugs. She reports muscle weakness and frequent urination. She is not taking diuretics.\n\n| Test | Value | Reference |\n|---|---|---|\n| Potassium | 2.9 mEq/L | 3.5-5.0 |\n| Bicarbonate | 32 mEq/L | 22-28 |\n| Plasma aldosterone | markedly elevated | - |\n| Plasma renin activity | suppressed | - |\n| Aldosterone-to-renin ratio | high | - |",
    lead: "Which best explains this presentation?",
    options: [
      "A pheochromocytoma secreting catecholamines",
      "Renal artery stenosis activating the renin-angiotensin system",
      "Excess cortisol from an ACTH-secreting pituitary adenoma",
      "Autonomous adrenal aldosterone secretion independent of renin",
      "A distal tubular sodium channel defect causing salt wasting"
    ],
    answer: 3,
    exp: "Resistant hypertension with spontaneous hypokalemia, metabolic alkalosis, a high aldosterone, and suppressed renin (high aldosterone-to-renin ratio) indicate primary hyperaldosteronism, usually from an adrenal adenoma or bilateral hyperplasia. Autonomous aldosterone drives renal sodium retention and potassium and hydrogen loss, causing hypertension, hypokalemia, and alkalosis while feedback suppresses renin. This contrasts with secondary causes, in which renin is high.",
    why: [
      "A pheochromocytoma causes episodic hypertension with headache, palpitations, and sweating from catecholamines, not hypokalemic alkalosis with high aldosterone and low renin.",
      "Renal artery stenosis causes secondary hyperaldosteronism with elevated renin, whereas renin is suppressed here.",
      "Excess cortisol from an ACTH-secreting adenoma causes Cushing disease with central obesity and striae, not isolated aldosterone excess with suppressed renin.",
      "Correct: autonomous adrenal aldosterone secretion raises aldosterone while suppressing renin, producing resistant hypertension with hypokalemia and metabolic alkalosis.",
      "A distal tubular sodium channel defect causing salt wasting (as in Gitelman syndrome) produces low blood pressure, not hypertension."
    ]
  },
  {
    id: "s1-0195",
    system: "Multisystem",
    discipline: "Pathology",
    topic: "Amyloidosis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 63-year-old man has months of fatigue, worsening leg edema, and frothy urine. He has an enlarged tongue, easy bruising around the eyes, and thickened, waxy skin. Echocardiography shows thickened ventricular walls, while the ECG shows paradoxically low QRS voltages (voltage-mass discordance), and urinalysis shows heavy proteinuria. He has a monoclonal light chain in the serum.\n\n**[IMAGE: renal biopsy stained with Congo red showing amorphous deposits that display apple-green birefringence under polarized light]**",
    lead: "Which best explains these multisystem findings?",
    options: [
      "Granulomatous inflammation infiltrating multiple organs",
      "Widespread interstitial fibrosis from activated fibroblasts",
      "Diffuse small-vessel vasculitis from immune complexes",
      "Metastatic calcification of soft tissues from hypercalcemia",
      "Extracellular deposition of misfolded protein in a beta-pleated sheet"
    ],
    answer: 4,
    exp: "Nephrotic-range proteinuria, restrictive cardiomyopathy, macroglossia, periorbital purpura, and a serum monoclonal light chain with Congo red-positive, apple-green birefringent deposits indicate amyloidosis (here AL type from a plasma cell clone). Misfolded proteins aggregate into extracellular beta-pleated sheet fibrils that deposit in and disrupt multiple organs. The apple-green birefringence under polarized light is diagnostic.",
    why: [
      "Granulomatous multiorgan infiltration describes sarcoidosis, which does not show Congo red-positive apple-green birefringent deposits or a monoclonal light chain.",
      "Fibroblast-driven interstitial fibrosis describes systemic sclerosis, not the fibrillar protein deposition of amyloidosis.",
      "Immune-complex small-vessel vasculitis causes palpable purpura and organ ischemia, not amyloid fibril deposition.",
      "Metastatic calcification deposits calcium salts in normal tissue from hypercalcemia and does not stain with Congo red.",
      "Correct: amyloidosis is extracellular deposition of misfolded protein as beta-pleated sheet fibrils, producing the organ dysfunction and characteristic Congo red birefringence."
    ]
  },
  {
    id: "s1-0196",
    system: "Multisystem",
    discipline: "Pharmacology",
    topic: "Ethylene glycol poisoning",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 40-year-old man is brought in confused and ataxic several hours after reportedly drinking antifreeze. He is tachypneic and now has flank pain and decreased urine output.\n\n| Test | Value | Reference |\n|---|---|---|\n| Arterial pH | 7.18 | 7.35-7.45 |\n| Anion gap | 28 mEq/L | 8-12 |\n| Osmolar gap | elevated | < 10 |\n| Serum creatinine | 2.6 mg/dL | 0.7-1.3 |\n| Urine microscopy | envelope-shaped crystals | none |",
    lead: "Which best explains the metabolic acidosis and kidney injury?",
    options: [
      "Metabolism to glycolic and oxalic acids with calcium oxalate deposition in tubules",
      "Metabolism to formic acid causing optic nerve injury",
      "Accumulation of ketoacids from unopposed lipolysis",
      "Lactic acidosis from inhibition of cytochrome c oxidase",
      "Retention of organic acids from acute kidney failure alone"
    ],
    answer: 0,
    exp: "A high anion gap metabolic acidosis with an elevated osmolar gap, acute kidney injury, and envelope-shaped (calcium oxalate) crystals after antifreeze ingestion indicate ethylene glycol poisoning. Alcohol dehydrogenase converts ethylene glycol to glycolic and then oxalic acid, producing acidosis, while calcium oxalate crystals precipitate in renal tubules causing injury and hypocalcemia. Treatment blocks alcohol dehydrogenase with fomepizole.",
    why: [
      "Correct: ethylene glycol is metabolized to glycolic and oxalic acids, causing high anion gap acidosis and calcium oxalate crystal deposition that injures the kidneys.",
      "Metabolism to formic acid describes methanol poisoning, which causes visual loss rather than oxalate crystals and renal failure.",
      "Ketoacid accumulation describes diabetic or alcoholic ketoacidosis, which does not produce an osmolar gap or oxalate crystals.",
      "Cytochrome c oxidase inhibition describes cyanide toxicity, which causes lactic acidosis without oxalate crystalluria.",
      "Kidney failure alone does not produce the elevated osmolar gap and envelope-shaped crystals seen with ethylene glycol."
    ]
  },
  {
    id: "s1-0197",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Positive likelihood ratio",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A new blood test for a disease is evaluated against a reference standard in 200 patients, with the results shown below.\n\n| | Disease + | Disease - |\n|---|---|---|\n| Test + | 72 | 20 |\n| Test - | 8 | 100 |\n\nThe sensitivity is 0.90 and the specificity is 0.83.",
    lead: "What is the approximate positive likelihood ratio of this test?",
    options: [
      "0.12",
      "5.3",
      "0.90",
      "1.0",
      "0.20"
    ],
    answer: 1,
    exp: "The positive likelihood ratio equals sensitivity divided by (1 minus specificity), which is how much a positive result raises the odds of disease. Here that is 0.90 / (1 - 0.83) = 0.90 / 0.17, which is approximately 5.3. A likelihood ratio above 1 (and especially above 5 to 10) meaningfully increases the post-test probability of disease.",
    why: [
      "0.12 corresponds to the negative likelihood ratio, (1 - sensitivity)/specificity = 0.10/0.83, not the positive likelihood ratio.",
      "Correct: the positive likelihood ratio is sensitivity/(1 - specificity) = 0.90/0.17, which is about 5.3.",
      "0.90 is the sensitivity itself, not the likelihood ratio, which also incorporates the specificity.",
      "A likelihood ratio of 1.0 would mean the test provides no diagnostic information, which is not the case here.",
      "0.20 does not correspond to the positive likelihood ratio computed from these sensitivity and specificity values."
    ]
  },
  {
    id: "s1-0198",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Publication bias",
    difficulty: "easy",
    anchor: null,
    vignette: "A researcher performing a meta-analysis of a drug's effect notices that small studies with positive, statistically significant results were readily published, whereas several small studies showing no benefit were never published and are difficult to locate. A funnel plot of the available studies is visibly asymmetric.",
    lead: "Which type of bias is most directly illustrated?",
    options: [
      "Lead-time bias",
      "Recall bias",
      "Publication bias",
      "Confounding",
      "Attrition bias"
    ],
    answer: 2,
    exp: "The selective publication of studies with positive or significant findings while null studies remain unpublished is publication bias. It skews meta-analyses toward overestimating an effect and produces an asymmetric funnel plot. It can be mitigated by trial registries, systematic searching of unpublished data, and statistical tests for funnel plot asymmetry.",
    why: [
      "Lead-time bias applies to screening, where earlier detection appears to lengthen survival without changing outcome.",
      "Recall bias arises from differential accuracy of remembered exposures, not from selective publication of studies.",
      "Correct: preferential publication of positive studies over null studies is publication bias, reflected in the asymmetric funnel plot.",
      "Confounding is distortion by a third variable within a study, not a pattern of which studies get published.",
      "Attrition bias arises from differential loss of participants during a study, not from selective publication."
    ]
  },
  {
    id: "s1-0199",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Refusal of blood transfusion (autonomy)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 40-year-old man who is a Jehovah's Witness is hospitalized with severe gastrointestinal bleeding. He is alert and fully oriented, clearly understands that he could die without a transfusion, and calmly but firmly refuses all blood products for religious reasons. He has documented this wish previously and repeats it now. His adult daughter urges the team to transfuse him anyway.",
    lead: "Which is the most appropriate course of action?",
    options: [
      "Transfuse because the benefit clearly outweighs the risk in a life-threatening emergency",
      "Follow the daughter's wishes because she is next of kin",
      "Transfuse once the patient becomes unconscious and can no longer object",
      "Honor the patient's informed refusal and provide alternative supportive management",
      "Seek a court order to override the patient's refusal"
    ],
    answer: 3,
    exp: "A competent, informed adult has the right to refuse any treatment, including life-saving transfusion, based on personal or religious beliefs; this reflects the principle of autonomy. Because this patient has full decision-making capacity and understands the consequences, his refusal must be respected, and the team should offer alternatives such as volume resuscitation, iron, erythropoietin, and hemostatic measures. Family members cannot override a capacitated patient's own decision.",
    why: [
      "Overriding a capacitated patient's refusal violates autonomy, even when the physician judges the treatment beneficial.",
      "The daughter cannot override the decision of a patient who currently has capacity to decide for himself.",
      "Waiting to transfuse once he is unconscious deliberately circumvents his clearly expressed capacitated wishes and is unethical.",
      "Correct: a competent, informed adult may refuse transfusion for religious reasons, so the team should honor the refusal and pursue alternative management.",
      "A court order is not warranted to override the informed refusal of a competent adult with capacity."
    ]
  },
  {
    id: "s1-0200",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Truth-telling and family requests for nondisclosure",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 70-year-old woman is newly diagnosed with metastatic pancreatic cancer. Before she is told, her adult son approaches the team and insists that his mother not be informed of the diagnosis, saying it would \"destroy her hope.\" The patient is alert, has full decision-making capacity, and has not previously indicated any wish to defer information to her family.",
    lead: "Which is the most appropriate initial response?",
    options: [
      "Withhold the diagnosis as the son requests to protect the patient from distress",
      "Disclose the diagnosis to the son and let him decide how much to tell her",
      "Refer the decision to the hospital ethics committee before speaking with anyone",
      "Tell the patient the full diagnosis immediately without acknowledging the son",
      "Ask the patient how much she wishes to know and who she wants involved"
    ],
    answer: 4,
    exp: "A competent patient has the right to receive information about her own diagnosis, and truth-telling supports her autonomy and ability to make decisions. Rather than simply complying with the family's request for nondisclosure or bluntly overriding it, the physician should first explore the patient's own preferences, asking how much she wishes to know and whom she wants involved. Some patients do choose to defer to family, but only the patient can authorize that.",
    why: [
      "Withholding the diagnosis at the family's request overrides the patient's right to information about her own condition.",
      "Delegating disclosure to the son improperly transfers the capacitated patient's right to know to a family member.",
      "Routing the decision to an ethics committee before even speaking with the patient is unnecessary and delays appropriate patient-centered communication.",
      "Bluntly disclosing everything without exploring her preferences ignores that some patients prefer to defer or receive information gradually.",
      "Correct: the physician should first ask the patient how much she wants to know and whom she wants involved, respecting her autonomy before disclosing."
    ]
  }
];
