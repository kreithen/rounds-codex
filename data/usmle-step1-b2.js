/*
 * Rounds Codex - USMLE Step 1 question bank, Batch 2 (25 items)
 * Blueprint-weighted mix. All vignettes original; source used for facts only.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP1_B2 = [
  {
    id: "s1-0026",
    system: "General Principles",
    discipline: "Biochemistry",
    topic: "Ornithine transcarbamylase deficiency",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 3-day-old boy who fed well initially becomes lethargic, vomits, and breathes rapidly. He has no hepatomegaly.\n\n| Test | Value | Reference |\n|---|---|---|\n| Ammonia | very high | low |\n| Blood urea nitrogen | low | normal |\n| Blood pH | 7.52 (respiratory alkalosis) | 7.35-7.45 |\n| Urine orotic acid | elevated | - |\n\nThere is no megaloblastic anemia.",
    lead: "A deficiency of which enzyme best explains these findings?",
    options: [
      "Carbamoyl phosphate synthetase I",
      "Argininosuccinate synthetase",
      "Ornithine transcarbamylase",
      "UMP synthase",
      "Arginase"
    ],
    answer: 2,
    exp: "Neonatal hyperammonemia with respiratory alkalosis, elevated urinary orotic acid, and no megaloblastic anemia is X-linked ornithine transcarbamylase deficiency, the most common urea cycle disorder. Accumulated carbamoyl phosphate spills into the pyrimidine pathway, raising orotic acid, while the blocked urea cycle causes hyperammonemia. The absence of megaloblastic anemia separates it from hereditary orotic aciduria.",
    why: [
      "Carbamoyl phosphate synthetase I deficiency causes hyperammonemia but with low, not elevated, orotic acid.",
      "Argininosuccinate synthetase deficiency (citrullinemia) elevates citrulline.",
      "Correct: blocked ornithine transcarbamylase raises carbamoyl phosphate, shunting it to orotic acid, with hyperammonemia and no anemia.",
      "UMP synthase deficiency (hereditary orotic aciduria) causes orotic aciduria with megaloblastic anemia and normal ammonia.",
      "Arginase deficiency causes hyperargininemia with spastic diplegia and milder, later symptoms."
    ]
  },
  {
    id: "s1-0027",
    system: "General Principles",
    discipline: "Genetics",
    topic: "Fragile X syndrome",
    difficulty: "moderate",
    anchor: null,
    vignette: "An 8-year-old boy has intellectual disability, a long narrow face with a prominent jaw and large protruding ears, hyperextensible joints, and enlarged testes noted at the start of puberty. He has features of autism spectrum disorder. Reviewing the pedigree, the condition appears more severe and earlier in successive generations.",
    lead: "Which mechanism best explains this disorder?",
    options: [
      "Deletion of the paternally derived chromosome 15q11-q13",
      "Trisomy of chromosome 21",
      "A microdeletion of chromosome 22q11",
      "Maternal uniparental disomy",
      "Expansion of a CGG trinucleotide repeat with hypermethylation of FMR1"
    ],
    answer: 4,
    exp: "Intellectual disability with a long face, large ears, macroorchidism, and worsening severity across generations is fragile X syndrome. It is caused by expansion of a CGG repeat in the FMR1 gene; large expansions become hypermethylated and silence the gene. Repeat expansion during transmission underlies anticipation, the earlier and more severe disease in later generations.",
    why: [
      "Deletion of paternal 15q11-q13 causes Prader-Willi syndrome, with hyperphagia, obesity, and hypotonia.",
      "Trisomy 21 causes Down syndrome, with characteristic facies, hypotonia, and cardiac defects.",
      "A 22q11 microdeletion causes DiGeorge syndrome, with cardiac, parathyroid, and thymic defects.",
      "Maternal uniparental disomy is one mechanism of imprinting disorders, not the typical cause here.",
      "Correct: CGG repeat expansion with FMR1 hypermethylation causes fragile X, with anticipation."
    ]
  },
  {
    id: "s1-0028",
    system: "General Principles",
    discipline: "Cell Biology",
    topic: "I-cell disease",
    difficulty: "hard",
    anchor: null,
    vignette: "A 6-month-old infant has coarse facial features, gingival overgrowth, restricted joint mobility, and developmental delay. Skeletal survey shows dysostosis multiplex. Laboratory testing reveals markedly elevated lysosomal enzyme activity in the plasma, while enzyme activity inside cultured cells is deficient.",
    lead: "Which defect best explains these findings?",
    options: [
      "Failure to tag lysosomal enzymes with mannose-6-phosphate, so they are secreted rather than delivered to lysosomes",
      "Deficiency of alpha-L-iduronidase",
      "Deficiency of lysosomal glucocerebrosidase",
      "Defective peroxisome biogenesis",
      "Deficiency of hexosaminidase A"
    ],
    answer: 0,
    exp: "Coarse facies, dysostosis, and the paradox of high plasma but low intracellular lysosomal enzymes indicate I-cell disease (mucolipidosis II). A defective N-acetylglucosaminyl-1-phosphotransferase fails to add the mannose-6-phosphate tag that targets enzymes to lysosomes, so the enzymes are secreted into the blood instead. Lysosomes therefore accumulate undegraded substrate.",
    why: [
      "Correct: without the mannose-6-phosphate tag, lysosomal enzymes are missorted and secreted, raising plasma levels while lysosomes fail.",
      "Alpha-L-iduronidase deficiency (Hurler) is a single-enzyme deficiency, not a global trafficking failure with high plasma enzymes.",
      "Glucocerebrosidase deficiency (Gaucher) causes hepatosplenomegaly and bone crises, with a single enzyme deficient.",
      "Defective peroxisome biogenesis (Zellweger) causes hypotonia, seizures, and very-long-chain fatty acid accumulation.",
      "Hexosaminidase A deficiency (Tay-Sachs) causes a cherry-red macula and neurodegeneration without coarse facies or high plasma enzymes."
    ]
  },
  {
    id: "s1-0029",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Immunology",
    topic: "Hereditary angioedema",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 25-year-old woman has recurrent episodes of nonpitting, nonpruritic swelling of the lips, face, and hands, sometimes with painful bouts of abdominal cramping. The swelling is not accompanied by hives and does not respond to antihistamines. Episodes are sometimes triggered by dental procedures. Her father had similar attacks. Complement C4 is persistently low.",
    lead: "A deficiency of which of the following best explains her condition?",
    options: [
      "IgE-mediated mast cell activation by an allergen",
      "NADPH oxidase",
      "The low-density lipoprotein receptor",
      "C1 esterase inhibitor",
      "Adenosine deaminase"
    ],
    answer: 3,
    exp: "Recurrent angioedema without urticaria, unresponsive to antihistamines, with a low C4 and autosomal dominant inheritance is hereditary angioedema from C1 esterase inhibitor deficiency. Loss of this inhibitor permits unchecked generation of bradykinin (and complement activation), driving the swelling. This is why angiotensin-converting enzyme inhibitors, which further raise bradykinin, can precipitate attacks.",
    why: [
      "IgE-mediated mast cell activation causes allergic angioedema with urticaria that responds to antihistamines.",
      "NADPH oxidase deficiency causes chronic granulomatous disease, not angioedema.",
      "LDL receptor defects cause familial hypercholesterolemia with xanthomas and early atherosclerosis.",
      "Correct: C1 esterase inhibitor deficiency permits excess bradykinin, causing recurrent angioedema with low C4.",
      "Adenosine deaminase deficiency causes severe combined immunodeficiency."
    ]
  },
  {
    id: "s1-0030",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Biochemistry",
    topic: "G6PD deficiency",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 19-year-old man of Mediterranean descent develops fatigue, scleral icterus, and dark urine two days after starting an antimalarial for travel prophylaxis. Hemoglobin has dropped acutely.\n\n**[IMAGE: peripheral smear showing red cells with a 'bite' taken out; a supravital stain reveals dark intracellular Heinz bodies]**",
    lead: "Which mechanism best explains the hemolysis?",
    options: [
      "A cytoskeletal membrane protein defect",
      "Deficiency of glucose-6-phosphate dehydrogenase, reducing NADPH and impairing regeneration of reduced glutathione",
      "A point mutation in the beta-globin chain",
      "Deficiency of pyruvate kinase",
      "Autoantibodies directed against red cell surface antigens"
    ],
    answer: 1,
    exp: "Episodic oxidative hemolysis after an oxidant drug, with bite cells and Heinz bodies, is X-linked glucose-6-phosphate dehydrogenase deficiency. G6PD generates NADPH in the pentose phosphate pathway, which is needed to keep glutathione reduced; without it, oxidative stress denatures hemoglobin into Heinz bodies. Splenic macrophages remove those inclusions, producing bite cells and hemolysis.",
    why: [
      "A cytoskeletal defect (hereditary spherocytosis) causes chronic hemolysis with spherocytes, not episodic oxidative hemolysis after drugs.",
      "Correct: low G6PD reduces NADPH and reduced glutathione, so oxidant stress precipitates hemoglobin as Heinz bodies.",
      "A beta-globin point mutation (sickle cell) causes vaso-occlusion and sickled cells.",
      "Pyruvate kinase deficiency causes chronic hemolysis with echinocytes, not oxidant-triggered episodes.",
      "Autoantibodies against red cells cause a positive Coombs autoimmune hemolysis with spherocytes, not Heinz bodies."
    ]
  },
  {
    id: "s1-0031",
    system: "Behavioral Health & Nervous System",
    discipline: "Pathology",
    topic: "Multiple sclerosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 31-year-old woman has had separate episodes over three years: painful loss of vision in one eye that later recovered, and, months afterward, weakness and numbness of a leg. On lateral gaze the adducting eye fails to fully cross while the abducting eye shows nystagmus. Her symptoms worsen after a hot shower. Cerebrospinal fluid shows oligoclonal bands.\n\n**[IMAGE: brain MRI with multiple ovoid periventricular white-matter lesions oriented perpendicular to the ventricles]**",
    lead: "Which process best explains her disease?",
    options: [
      "Autoantibodies against the postsynaptic acetylcholine receptor",
      "Segmental demyelination confined to peripheral nerves",
      "Progressive loss of anterior horn motor neurons",
      "Small-vessel lacunar infarction",
      "Immune-mediated demyelination of central white matter with relative axonal sparing"
    ],
    answer: 4,
    exp: "Neurologic episodes separated in time and space, an internuclear ophthalmoplegia, heat sensitivity, oligoclonal bands, and periventricular plaques define multiple sclerosis. The disease is a T-cell-mediated attack on central nervous system myelin with relative preservation of axons early on. The internuclear ophthalmoplegia reflects a demyelinating lesion of the medial longitudinal fasciculus.",
    why: [
      "Acetylcholine receptor autoantibodies cause myasthenia gravis with fatigable weakness and normal sensation.",
      "Peripheral segmental demyelination (Guillain-Barre or CIDP) affects peripheral nerves, not central white matter with oligoclonal bands.",
      "Anterior horn cell loss (amyotrophic lateral sclerosis) causes mixed upper and lower motor neuron signs without sensory or visual relapses.",
      "Lacunar infarcts cause discrete vascular syndromes, not relapsing demyelination with oligoclonal bands.",
      "Correct: autoimmune central demyelination with axonal sparing produces the relapsing-remitting picture and MRI plaques."
    ]
  },
  {
    id: "s1-0032",
    system: "Behavioral Health & Nervous System",
    discipline: "Pharmacology",
    topic: "Benzodiazepine mechanism",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 48-year-old man admitted for alcohol withdrawal becomes tremulous and agitated with a rising heart rate. He is treated with lorazepam, and his symptoms improve.",
    lead: "Which action best describes how this drug works?",
    options: [
      "It directly opens chloride channels independent of the neurotransmitter",
      "It blocks NMDA-type glutamate receptors",
      "It increases the frequency of chloride channel opening at the GABA-A receptor",
      "It increases the duration of chloride channel opening at the GABA-A receptor",
      "It inhibits neuronal reuptake of GABA"
    ],
    answer: 2,
    exp: "Benzodiazepines are positive allosteric modulators of the GABA-A receptor that increase the frequency of chloride channel opening in the presence of GABA. The resulting chloride influx hyperpolarizes neurons, producing sedation and anxiolysis useful in withdrawal. Because they require endogenous GABA to act, they have a wider safety margin than barbiturates.",
    why: [
      "Direct channel opening independent of GABA occurs with barbiturates at high doses, not with benzodiazepines.",
      "NMDA receptor blockade describes agents such as ketamine, not benzodiazepines.",
      "Correct: benzodiazepines increase the frequency of GABA-A chloride channel opening.",
      "Increasing the duration of channel opening is the barbiturate mechanism.",
      "Benzodiazepines act at the GABA-A receptor and do not work by blocking GABA reuptake."
    ]
  },
  {
    id: "s1-0033",
    system: "Behavioral Health & Nervous System",
    discipline: "Behavioral Sciences",
    topic: "Normal grief versus major depression",
    difficulty: "easy",
    anchor: null,
    vignette: "A 61-year-old woman is seen five weeks after her husband died. She describes waves of sadness and tearfulness that come with reminders of him, some difficulty sleeping, and a fleeting sense that she briefly heard his voice in their home. Between waves she can still enjoy time with her grandchildren, she is caring for herself, and she denies any thoughts of self-harm or worthlessness.",
    lead: "Which of the following best characterizes her presentation?",
    options: [
      "Normal (uncomplicated) grief",
      "Major depressive disorder",
      "Prolonged grief disorder",
      "Adjustment disorder with depressed mood",
      "Brief psychotic disorder"
    ],
    answer: 0,
    exp: "Grief that comes in waves tied to reminders, with preserved self-worth, retained capacity for pleasure, and intact functioning, is normal bereavement. Transient perceptual experiences of the deceased, such as briefly hearing their voice, are common and not psychotic. The absence of pervasive anhedonia, worthlessness, and suicidality argues against major depression.",
    why: [
      "Correct: wave-like grief with preserved function, self-worth, and only fleeting perceptual experiences is normal bereavement.",
      "Major depression would show sustained low mood, pervasive anhedonia, worthlessness, or suicidality, which are absent.",
      "Prolonged grief disorder is diagnosed only after persistent, disabling grief lasting many months, not at five weeks.",
      "Adjustment disorder applies to a stressor other than the expected reaction to bereavement.",
      "Brief psychotic disorder requires true psychotic symptoms, not a normal fleeting sense of the deceased's presence."
    ]
  },
  {
    id: "s1-0034",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Gout",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 55-year-old man wakes with the sudden onset of an exquisitely painful, red, swollen first metatarsophalangeal joint. The episode followed a dinner of red meat and several beers. Joint fluid is aspirated.\n\n**[IMAGE: polarized light microscopy of synovial fluid showing needle-shaped crystals that appear yellow when aligned parallel to the compensator (negative birefringence)]**",
    lead: "The crystals are composed of which of the following?",
    options: [
      "Calcium pyrophosphate dihydrate",
      "Calcium oxalate",
      "Cholesterol",
      "Monosodium urate",
      "Hydroxyapatite"
    ],
    answer: 3,
    exp: "Acute podagra after a purine- and alcohol-rich meal, with needle-shaped, negatively birefringent crystals, is gout. The crystals are monosodium urate, which appear yellow when parallel to the axis of the red compensator. Urate deposition triggers an intense neutrophilic inflammatory response.",
    why: [
      "Calcium pyrophosphate crystals (pseudogout) are rhomboid and positively birefringent, favoring the knee and wrist.",
      "Calcium oxalate crystals appear in oxalate nephropathy and ethylene glycol toxicity, not classic podagra.",
      "Cholesterol crystals are flat plates seen in chronic effusions, not acute gout.",
      "Correct: needle-shaped, negatively birefringent crystals are monosodium urate.",
      "Hydroxyapatite deposition causes periarticular calcification and is not birefringent."
    ]
  },
  {
    id: "s1-0035",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Basal cell carcinoma",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 68-year-old man with decades of sun exposure has a slowly enlarging, pearly papule with a rolled, translucent border and overlying fine telangiectasias on the side of his nose; it occasionally bleeds with minor trauma. Biopsy shows nests of basaloid cells with peripheral palisading. The lesion very rarely metastasizes.",
    lead: "Dysregulation of which pathway most likely underlies this tumor?",
    options: [
      "RAS-MAPK signaling driven by a BRAF V600E mutation",
      "Hedgehog signaling from loss of PTCH1",
      "Wnt/beta-catenin signaling",
      "JAK-STAT signaling",
      "Estrogen receptor signaling"
    ],
    answer: 1,
    exp: "A pearly, telangiectatic papule with rolled borders and palisading basaloid nests that rarely metastasizes is basal cell carcinoma, the most common skin cancer. It is driven by aberrant Hedgehog pathway activation, most often from loss-of-function of the PTCH1 tumor suppressor. This mechanism is the target of smoothened inhibitors used for advanced disease.",
    why: [
      "BRAF V600E activation of RAS-MAPK is characteristic of melanoma, which is pigmented and metastasizes readily.",
      "Correct: loss of PTCH1 unleashes Hedgehog signaling, driving basal cell carcinoma.",
      "Wnt/beta-catenin dysregulation is associated with colorectal and other cancers, not the classic basal cell carcinoma.",
      "JAK-STAT dysregulation drives myeloproliferative neoplasms, not basal cell carcinoma.",
      "Estrogen receptor signaling drives certain breast cancers, not this cutaneous tumor."
    ]
  },
  {
    id: "s1-0036",
    system: "Cardiovascular",
    discipline: "Physiology",
    topic: "Tetralogy of Fallot",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 2-year-old boy has episodes of deep blue discoloration during crying that he instinctively relieves by squatting. A harsh systolic murmur is heard at the left sternal border.\n\n**[IMAGE: chest radiograph showing a boot-shaped heart with decreased pulmonary vascular markings]**",
    lead: "Squatting improves his cyanosis primarily by which mechanism?",
    options: [
      "Decreasing systemic venous return to the heart",
      "Pharmacologically relieving right ventricular outflow obstruction",
      "Increasing systemic vascular resistance, which reduces right-to-left shunting",
      "Increasing right-to-left shunting to bypass the lungs",
      "Promoting closure of the ductus arteriosus"
    ],
    answer: 2,
    exp: "A boot-shaped heart with cyanotic spells relieved by squatting is tetralogy of Fallot, in which right ventricular outflow obstruction drives blood right-to-left across a ventricular septal defect. Squatting kinks the femoral arteries and raises systemic vascular resistance, so more blood is forced through the pulmonary circuit instead of shunting right-to-left. This increases pulmonary blood flow and improves oxygenation.",
    why: [
      "Decreasing venous return would worsen, not improve, a hypercyanotic spell.",
      "Squatting is a mechanical maneuver, not a pharmacologic relief of outflow obstruction.",
      "Correct: raising systemic vascular resistance reduces the right-to-left shunt and increases pulmonary flow.",
      "Increasing right-to-left shunting would deepen cyanosis, the opposite of the observed effect.",
      "Ductal closure would reduce pulmonary blood flow in duct-dependent lesions and would not relieve a spell."
    ]
  },
  {
    id: "s1-0037",
    system: "Cardiovascular",
    discipline: "Pharmacology",
    topic: "ACE inhibitor mechanism",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 60-year-old man with hypertension and diabetic kidney disease with proteinuria is started on lisinopril. Over the next two weeks he develops a persistent dry cough. Repeat labs show a small rise in serum creatinine and potassium.",
    lead: "Which mechanism best accounts for both the antihypertensive effect and the cough?",
    options: [
      "Blockade of angiotensin II type 1 receptors, with cough caused by bradykinin",
      "Direct inhibition of renin, with cough caused by histamine release",
      "Aldosterone receptor antagonism, with cough caused by hyperkalemia",
      "Calcium channel blockade, with cough caused by peripheral edema",
      "Inhibition of angiotensin-converting enzyme, lowering angiotensin II while raising bradykinin, which triggers cough"
    ],
    answer: 4,
    exp: "Lisinopril inhibits angiotensin-converting enzyme, reducing angiotensin II (less vasoconstriction and aldosterone) and dilating the efferent arteriole, which lowers blood pressure and reduces proteinuria but can raise creatinine and potassium slightly. The same enzyme normally degrades bradykinin, so ACE inhibition raises bradykinin and causes the classic dry cough. Marked bradykinin accumulation can also cause angioedema.",
    why: [
      "Angiotensin receptor blockers act at the AT1 receptor and do not raise bradykinin, so they typically do not cause cough.",
      "Direct renin inhibitors act higher in the cascade and do not produce a bradykinin-mediated cough.",
      "Aldosterone antagonists cause hyperkalemia and gynecomastia, not a bradykinin cough.",
      "Calcium channel blockers cause peripheral edema but not a dry cough from bradykinin.",
      "Correct: ACE inhibition lowers angiotensin II and raises bradykinin, explaining both the pressure drop and the cough."
    ]
  },
  {
    id: "s1-0038",
    system: "Respiratory & Renal/Urinary",
    discipline: "Physiology",
    topic: "Neonatal respiratory distress syndrome",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "An infant born at 30 weeks of gestation develops grunting, nasal flaring, and intercostal retractions within the first hour of life. Chest radiograph shows diffuse ground-glass opacities with air bronchograms.\n\n| Test | Value | Reference |\n|---|---|---|\n| Lecithin-to-sphingomyelin ratio | 1.4 | mature >= 2.0 |",
    lead: "Which is the primary underlying cause?",
    options: [
      "Deficiency of pulmonary surfactant, raising alveolar surface tension",
      "Persistent pulmonary hypertension of the newborn",
      "Aspiration of meconium",
      "A congenital diaphragmatic hernia",
      "Aspiration of amniotic squamous debris"
    ],
    answer: 0,
    exp: "A premature infant with early respiratory distress, ground-glass lungs, and a low lecithin-to-sphingomyelin ratio has neonatal respiratory distress syndrome from surfactant deficiency. Immature type II pneumocytes make too little surfactant, so alveolar surface tension is high and alveoli collapse, producing diffuse atelectasis and hypoxemia. Antenatal corticosteroids accelerate surfactant production and reduce risk.",
    why: [
      "Correct: insufficient surfactant raises surface tension and collapses alveoli, causing the distress.",
      "Persistent pulmonary hypertension causes differential cyanosis and labile oxygenation, not a low L/S ratio with ground-glass lungs.",
      "Meconium aspiration occurs in term or post-term infants with patchy infiltrates, not a premature low-surfactant picture.",
      "A diaphragmatic hernia produces a scaphoid abdomen and bowel in the chest, not diffuse ground-glass opacities.",
      "Aspiration of squamous debris is not the mechanism of prematurity-related respiratory distress syndrome."
    ]
  },
  {
    id: "s1-0039",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Minimal change disease",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 5-year-old boy develops rapidly progressive periorbital and lower-extremity edema and frothy urine over several days. Urinalysis shows heavy proteinuria without hematuria; serum albumin is low and lipids are high. Complement levels are normal.\n\n**[IMAGE: glomerular electron micrograph showing diffuse effacement of podocyte foot processes, with a normal appearance on light microscopy]**",
    lead: "Which finding best explains his nephrotic syndrome?",
    options: [
      "Subepithelial immune-complex humps",
      "Linear deposition of antibody along the basement membrane",
      "Mesangial deposition of IgA",
      "Effacement of podocyte foot processes with loss of the glomerular charge barrier",
      "Nodular glomerulosclerosis"
    ],
    answer: 3,
    exp: "Sudden nephrotic-range, selective proteinuria in a young child with normal light microscopy but foot process effacement on electron microscopy is minimal change disease, the most common nephrotic syndrome in children. Loss of the anionic charge barrier allows selective albumin loss, and the glomeruli appear normal by light microscopy and immunofluorescence. It typically responds well to corticosteroids.",
    why: [
      "Subepithelial humps indicate postinfectious glomerulonephritis, a nephritic process with hematuria and low complement.",
      "Linear antibody deposition indicates anti-glomerular basement membrane disease with hemoptysis and hematuria.",
      "Mesangial IgA deposition indicates IgA nephropathy, typically with episodic hematuria.",
      "Correct: foot process effacement with charge-barrier loss causes selective proteinuria and steroid-responsive disease.",
      "Nodular glomerulosclerosis is seen in long-standing diabetic nephropathy, not an acute childhood presentation."
    ]
  },
  {
    id: "s1-0040",
    system: "Gastrointestinal",
    discipline: "Immunology",
    topic: "Celiac disease",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 32-year-old woman has months of diarrhea, bloating, and weight loss, along with iron-deficiency anemia and an intensely itchy vesicular rash over her elbows and knees. Serum IgA anti-tissue transglutaminase antibodies are elevated.\n\n**[IMAGE: duodenal biopsy showing villous atrophy, crypt hyperplasia, and increased intraepithelial lymphocytes]**",
    lead: "Which mechanism best explains her disease?",
    options: [
      "Deficiency of the brush-border enzyme lactase",
      "An immune response to gliadin causing small-bowel villous atrophy, associated with HLA-DQ2/DQ8",
      "Small-intestinal bacterial overgrowth",
      "Autoimmune destruction of pancreatic acinar cells",
      "Infection with Tropheryma whipplei"
    ],
    answer: 1,
    exp: "Malabsorption with tissue transglutaminase antibodies, duodenal villous atrophy, and dermatitis herpetiformis is celiac disease. A T-cell-mediated response to deamidated gliadin peptides, in genetically susceptible HLA-DQ2 or DQ8 individuals, damages the small-bowel villi and impairs absorption. Symptoms and histology improve on a gluten-free diet.",
    why: [
      "Lactase deficiency causes bloating and osmotic diarrhea after dairy but no antibodies, villous atrophy, or rash.",
      "Correct: an immune response to gliadin causes villous atrophy in HLA-DQ2/DQ8 individuals, with dermatitis herpetiformis.",
      "Bacterial overgrowth causes malabsorption but not tissue transglutaminase antibodies or the characteristic biopsy.",
      "Autoimmune pancreatic acinar destruction causes exocrine insufficiency without these serologies or duodenal histology.",
      "Whipple disease shows PAS-positive macrophages and arthralgias, not tissue transglutaminase antibodies and villous atrophy."
    ]
  },
  {
    id: "s1-0041",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Carcinoid syndrome",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 56-year-old woman has episodes of cutaneous flushing, secretory diarrhea, and wheezing. On examination she has a right-sided cardiac murmur. Symptoms became prominent only after imaging revealed multiple liver masses. Urinary 5-hydroxyindoleacetic acid is elevated, and she has a scaly, pigmented rash consistent with niacin deficiency.",
    lead: "Excess of which mediator best explains her syndrome?",
    options: [
      "Gastrin",
      "Vasoactive intestinal peptide",
      "Catecholamines",
      "Histamine from a mast cell disorder",
      "Serotonin from a metastatic neuroendocrine tumor"
    ],
    answer: 4,
    exp: "Flushing, diarrhea, wheezing, right-sided valvular disease, and elevated urinary 5-HIAA indicate carcinoid syndrome from a serotonin-secreting neuroendocrine tumor. Systemic symptoms appear once hepatic metastases release serotonin directly into the systemic circulation, bypassing first-pass hepatic metabolism. Diversion of tryptophan to serotonin causes niacin deficiency (pellagra), and serotonin cleared by the lungs spares the left heart while damaging right-sided valves.",
    why: [
      "Excess gastrin causes Zollinger-Ellison syndrome with refractory ulcers, not flushing with elevated 5-HIAA.",
      "Excess vasoactive intestinal peptide causes profuse watery diarrhea with hypokalemia, not the full carcinoid picture.",
      "Excess catecholamines cause paroxysmal hypertension with headache and palpitations, not elevated 5-HIAA.",
      "Mast cell histamine release causes flushing and pruritus but not elevated urinary 5-HIAA or right-heart carcinoid disease.",
      "Correct: metastatic serotonin secretion produces flushing, diarrhea, right-heart disease, and high 5-HIAA."
    ]
  },
  {
    id: "s1-0042",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Hashimoto thyroiditis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 45-year-old woman has months of fatigue, weight gain, cold intolerance, constipation, and dry skin. She has a firm, nontender, diffusely enlarged thyroid.\n\n| Test | Value | Reference |\n|---|---|---|\n| Thyroid-stimulating hormone | 18 mIU/L | 0.4-4.0 |\n| Free thyroxine | low | 0.8-1.8 ng/dL |\n| Anti-thyroid peroxidase antibodies | high | - |",
    lead: "Which mechanism best explains her hypothyroidism?",
    options: [
      "Stimulating antibodies directed against the TSH receptor",
      "Dietary iodine deficiency",
      "Autoimmune destruction of thyroid follicles by antibodies and cytotoxic T cells",
      "A thyroid-stimulating hormone-secreting pituitary adenoma",
      "Excess exogenous levothyroxine intake"
    ],
    answer: 2,
    exp: "Hypothyroidism with a firm goiter, elevated TSH, low free thyroxine, and high anti-thyroid peroxidase antibodies is Hashimoto thyroiditis. It is an autoimmune disorder in which antibody- and cell-mediated attack destroys thyroid follicles, producing a lymphocytic infiltrate with germinal centers and Hurthle cells. It also carries an increased long-term risk of thyroid lymphoma.",
    why: [
      "Stimulating TSH receptor antibodies cause Graves disease with hyperthyroidism, the opposite picture.",
      "Iodine deficiency can cause goiter and hypothyroidism but does not produce anti-thyroid peroxidase antibodies.",
      "Correct: autoimmune destruction of follicles causes hypothyroidism with high TSH and anti-thyroid peroxidase antibodies.",
      "A TSH-secreting adenoma would raise both TSH and thyroid hormone, causing hyperthyroidism.",
      "Excess exogenous levothyroxine would suppress TSH, not elevate it."
    ]
  },
  {
    id: "s1-0043",
    system: "Reproductive & Endocrine",
    discipline: "Physiology",
    topic: "Pheochromocytoma",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 40-year-old woman has recurrent spells of pounding headache, palpitations, and drenching sweats accompanied by severe, paroxysmal blood-pressure elevation that resolves spontaneously.\n\n| Test | Value | Reference |\n|---|---|---|\n| Plasma free metanephrines | markedly elevated | normal |\n| 24-hour urinary catecholamines | elevated | normal |",
    lead: "The excess hormone most likely originates from which source?",
    options: [
      "Catecholamine secretion by adrenal medullary chromaffin cells",
      "Aldosterone from a zona glomerulosa adenoma",
      "Cortisol from a zona fasciculata adenoma",
      "Renin from a juxtaglomerular cell tumor",
      "Thyroid hormone from a toxic adenoma"
    ],
    answer: 0,
    exp: "Paroxysmal hypertension with the triad of headache, palpitations, and diaphoresis and elevated metanephrines is a pheochromocytoma, a catecholamine-secreting tumor of adrenal medullary chromaffin cells. Metanephrines are the most useful screening test because they are produced continuously. Treatment requires alpha-adrenergic blockade before beta-blockade to avoid an unopposed alpha hypertensive crisis, and it may occur in MEN2.",
    why: [
      "Correct: chromaffin cell catecholamine secretion produces the paroxysmal spells and elevated metanephrines.",
      "An aldosterone-producing adenoma causes sustained hypertension with hypokalemia, not catecholamine spells.",
      "A cortisol-producing adenoma causes Cushing syndrome features, not elevated metanephrines.",
      "A renin-secreting tumor causes hypertension with secondary hyperaldosteronism, not elevated catecholamines.",
      "A toxic thyroid adenoma causes hyperthyroidism, not paroxysmal catecholamine excess."
    ]
  },
  {
    id: "s1-0044",
    system: "Reproductive & Endocrine",
    discipline: "Physiology",
    topic: "Klinefelter syndrome",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 17-year-old boy is evaluated for delayed puberty. He is tall with disproportionately long limbs, has gynecomastia, small firm testes, and sparse facial and body hair. He has had academic difficulties.\n\nLaboratory testing shows low testosterone with elevated luteinizing hormone and follicle-stimulating hormone, and semen analysis reveals azoospermia.",
    lead: "Which of the following is the most likely underlying cause?",
    options: [
      "A 45,X karyotype",
      "A 46,XY karyotype with an androgen receptor defect",
      "A 47,XYY karyotype",
      "A 47,XXY karyotype",
      "GnRH deficiency with anosmia"
    ],
    answer: 3,
    exp: "Tall stature, gynecomastia, small firm testes, and primary hypogonadism with elevated gonadotropins in a phenotypic male indicate Klinefelter syndrome (47,XXY). The extra X causes seminiferous tubule dysgenesis and Leydig cell dysfunction, so testosterone is low while luteinizing and follicle-stimulating hormones rise. The result is infertility with azoospermia.",
    why: [
      "A 45,X karyotype is Turner syndrome, which occurs in phenotypic females.",
      "An androgen receptor defect causes a female phenotype with testes and normal-to-high testosterone, not this male phenotype.",
      "A 47,XYY karyotype is usually associated with tall stature and normal fertility, not primary hypogonadism.",
      "Correct: 47,XXY causes primary hypogonadism with high gonadotropins, gynecomastia, and azoospermia.",
      "GnRH deficiency (Kallmann syndrome) causes low gonadotropins and anosmia, not elevated gonadotropins."
    ]
  },
  {
    id: "s1-0045",
    system: "Multisystem",
    discipline: "Microbiology",
    topic: "Diphtheria toxin",
    difficulty: "moderate",
    anchor: "image",
    vignette: "An unvaccinated 6-year-old recent immigrant has fever, sore throat, and marked cervical swelling. Now he develops new arrhythmia and evidence of myocarditis.\n\n**[IMAGE: gray, adherent pseudomembrane over the tonsils and posterior pharynx that bleeds when scraped]**",
    lead: "Which mechanism best explains this toxin's effect?",
    options: [
      "Cleavage of SNARE proteins to block neurotransmitter release",
      "ADP-ribosylation of elongation factor 2, halting host protein synthesis",
      "Persistent activation of the Gs protein, raising cyclic AMP",
      "Cleavage of the 28S ribosomal RNA of the 60S subunit",
      "Cross-linking of MHC class II and T-cell receptors as a superantigen"
    ],
    answer: 1,
    exp: "A gray pharyngeal pseudomembrane with myocarditis in an unvaccinated child is diphtheria. The toxin, encoded by a lysogenic bacteriophage, ADP-ribosylates elongation factor 2, halting host cell protein synthesis and causing local pseudomembrane formation plus systemic cardiac and neurologic injury. Pseudomonas exotoxin A shares this same target.",
    why: [
      "SNARE cleavage describes botulinum and tetanus toxins, which impair neurotransmitter release.",
      "Correct: diphtheria toxin ADP-ribosylates elongation factor 2, stopping protein synthesis.",
      "Persistent Gs activation with raised cyclic AMP describes cholera toxin.",
      "Cleavage of 28S ribosomal RNA describes Shiga and Shiga-like toxins.",
      "Superantigen cross-linking describes toxic shock syndrome toxin and streptococcal pyrogenic exotoxins."
    ]
  },
  {
    id: "s1-0046",
    system: "Multisystem",
    discipline: "Pharmacology",
    topic: "Methotrexate mechanism",
    difficulty: "moderate",
    anchor: null,
    vignette: "A patient is treated with methotrexate, and the oncology team plans timed leucovorin (folinic acid) rescue to limit toxicity to normal tissues.",
    lead: "Which action best describes how methotrexate works?",
    options: [
      "It cross-links DNA strands through alkylation",
      "It intercalates DNA and inhibits topoisomerase II",
      "It inhibits dihydrofolate reductase, depleting tetrahydrofolate and blocking nucleotide synthesis",
      "It inhibits microtubule disassembly during mitosis",
      "It directly inhibits thymidylate synthase"
    ],
    answer: 2,
    exp: "Methotrexate inhibits dihydrofolate reductase, blocking regeneration of tetrahydrofolate needed for thymidylate and purine synthesis, so DNA replication in rapidly dividing cells fails. Leucovorin is a reduced folate that bypasses the blocked enzyme to rescue normal cells. Characteristic toxicities include myelosuppression, mucositis, and hepatotoxicity.",
    why: [
      "DNA cross-linking by alkylation describes agents such as cyclophosphamide, not methotrexate.",
      "DNA intercalation with topoisomerase II inhibition describes anthracyclines such as doxorubicin.",
      "Correct: methotrexate inhibits dihydrofolate reductase, depleting tetrahydrofolate and impairing nucleotide synthesis.",
      "Inhibition of microtubule disassembly describes taxanes.",
      "Direct thymidylate synthase inhibition describes 5-fluorouracil, not methotrexate."
    ]
  },
  {
    id: "s1-0047",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Number needed to treat",
    difficulty: "moderate",
    anchor: "table",
    vignette: "In a one-year randomized trial, a cardiovascular event occurred in the two groups as shown.\n\n| Group | One-year event rate |\n|---|---|\n| Placebo | 8% |\n| Treatment | 4% |",
    lead: "How many patients must be treated for one year to prevent one event (number needed to treat)?",
    options: [
      "25",
      "4",
      "50",
      "2",
      "100"
    ],
    answer: 0,
    exp: "The number needed to treat is the reciprocal of the absolute risk reduction. The absolute risk reduction here is 8% minus 4%, which is 4% (0.04). The reciprocal of 0.04 is 25, so 25 patients must be treated for one year to prevent one event.",
    why: [
      "Correct: NNT = 1 / absolute risk reduction = 1 / 0.04 = 25.",
      "4 reflects the relative risk reduction of 50% or the raw percentage difference, not the number needed to treat.",
      "50 would result from using half the absolute risk reduction (0.02).",
      "2 is not obtained from any correct manipulation of these rates.",
      "100 would result from a 1% absolute risk reduction, which is not the case here."
    ]
  },
  {
    id: "s1-0048",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Confidence interval interpretation",
    difficulty: "moderate",
    anchor: null,
    vignette: "A cohort study reports that an exposure is associated with an outcome, with a relative risk of 1.8 and a 95% confidence interval of 0.9 to 3.2.",
    lead: "Which is the best interpretation of this result?",
    options: [
      "The exposure significantly increases the risk of the outcome",
      "The exposure significantly decreases the risk of the outcome",
      "The result proves that no association exists",
      "The study design must be invalid",
      "The association is not statistically significant because the interval includes 1.0"
    ],
    answer: 4,
    exp: "For a ratio measure such as relative risk, the null value is 1.0. A 95% confidence interval that spans 1.0 means the result is not statistically significant at an alpha of 0.05. It does not prove the absence of an effect; the study may simply be underpowered to detect one.",
    why: [
      "The result is not statistically significant, so it cannot be interpreted as a significant increase in risk.",
      "The point estimate is above 1.0, and the result is not significant, so it does not show a significant decrease.",
      "A nonsignificant result does not prove that no association exists; it may reflect insufficient power.",
      "A confidence interval crossing 1.0 reflects statistical uncertainty, not an invalid study design.",
      "Correct: because the interval includes the null value of 1.0, the association is not statistically significant."
    ]
  },
  {
    id: "s1-0049",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Surrogate decision-making",
    difficulty: "easy",
    anchor: null,
    vignette: "A 72-year-old man is unconscious after a large stroke and cannot participate in decisions. He has no written advance directive and never named a health-care proxy. A decision about placing a feeding tube must be made, and his adult children are present and involved.",
    lead: "Which is the most appropriate basis for making this decision?",
    options: [
      "The physician should decide unilaterally based on medical judgment alone",
      "Default to whichever treatment prolongs life regardless of the patient's prior wishes",
      "Obtain a court order before making any decision",
      "Have the appropriate surrogate apply substituted judgment based on the patient's known values and prior statements",
      "Postpone all decisions until the patient regains capacity"
    ],
    answer: 3,
    exp: "For an incapacitated adult without an advance directive or named proxy, decisions should be made by the appropriate surrogate, who applies substituted judgment: choosing what the patient himself would have wanted based on his known values and prior statements. Only when those wishes are unknown does the standard shift to the patient's best interests. Courts are involved only when conflicts cannot otherwise be resolved.",
    why: [
      "Unilateral physician decisions bypass the patient's own values and the role of the surrogate.",
      "Defaulting to life-prolonging treatment ignores the patient's previously expressed preferences.",
      "Court involvement is a last resort for unresolved disputes, not the routine basis for decisions.",
      "Correct: the surrogate should apply substituted judgment grounded in the patient's known values and wishes.",
      "Waiting is not appropriate when the patient will not imminently regain capacity and a decision is needed."
    ]
  },
  {
    id: "s1-0050",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Duty to protect (Tarasoff)",
    difficulty: "moderate",
    anchor: null,
    vignette: "During an outpatient visit, a psychiatric patient states a credible, specific intention to kill a named former partner and describes a concrete plan and the means to carry it out. He appears serious and capable of acting.",
    lead: "Which of the following is the most appropriate action?",
    options: [
      "Maintain strict confidentiality and address the threat only within therapy",
      "Take steps to protect the identifiable victim, which may include warning her and notifying authorities",
      "Immediately terminate the therapeutic relationship and refer the patient elsewhere",
      "Tell the patient that confidentiality legally prevents any disclosure",
      "Issue a general community advisory without identifying anyone"
    ],
    answer: 1,
    exp: "When a patient poses a serious and imminent threat to an identifiable third party, the clinician's duty to protect overrides ordinary confidentiality. Appropriate steps may include warning the intended victim, notifying law enforcement, and taking measures such as hospitalization to prevent harm. This duty to protect was established by the Tarasoff decision.",
    why: [
      "Maintaining strict confidentiality in the face of a serious, specific threat fails the duty to protect a foreseeable victim.",
      "Correct: the clinician must act to protect the identifiable victim, which may include warning her and notifying authorities.",
      "Simply terminating care does nothing to protect the threatened person and may worsen risk.",
      "Confidentiality is not absolute; it yields when there is a serious threat to an identifiable third party.",
      "A general community advisory neither protects the specific victim nor fulfills the targeted duty to warn."
    ]
  }
];
