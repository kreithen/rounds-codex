/*
 * Rounds Codex - USMLE Step 1 question bank, Batch 1 (25 items)
 * Blueprint-weighted mix. All vignettes original; source used for facts only.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP1_B1 = [
  {
    id: "s1-0001",
    system: "General Principles",
    discipline: "Biochemistry",
    topic: "Lesch-Nyhan syndrome (HGPRT deficiency)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 4-year-old boy is brought in for intellectual disability, involuntary writhing movements, and repeated biting of his own lips and fingertips that has required protective restraints. His parents recall orange, sand-like crystals in his diapers during infancy. He has swollen, tender joints, and serum uric acid is markedly elevated. His maternal uncle had similar problems.",
    lead: "Deficiency of which enzyme best accounts for this presentation?",
    options: [
      "Adenosine deaminase",
      "Adenine phosphoribosyltransferase",
      "Hypoxanthine-guanine phosphoribosyltransferase",
      "Xanthine oxidase",
      "Increased activity of PRPP synthetase"
    ],
    answer: 2,
    exp: "The triad of self-mutilation, dystonia with intellectual disability, and hyperuricemia in an X-linked pattern is Lesch-Nyhan syndrome, caused by deficient HGPRT. Loss of purine salvage forces hypoxanthine and guanine down the degradation pathway to uric acid while de novo purine synthesis is disinhibited, producing gout and urate nephrolithiasis. The neurobehavioral features are the clinical hallmark that separates it from other causes of hyperuricemia.",
    why: [
      "Adenosine deaminase deficiency causes severe combined immunodeficiency from toxic deoxyadenosine, not self-mutilation or hyperuricemia.",
      "APRT deficiency causes 2,8-dihydroxyadenine kidney stones without neurologic disease.",
      "Correct: absent HGPRT blocks purine salvage, driving uric acid overproduction plus the neurobehavioral syndrome.",
      "Xanthine oxidase deficiency lowers uric acid and causes xanthine stones, the opposite of this picture.",
      "PRPP synthetase overactivity causes early gout and hyperuricemia but not the self-injurious neurologic syndrome."
    ]
  },
  {
    id: "s1-0002",
    system: "General Principles",
    discipline: "Genetics",
    topic: "Mitochondrial (maternal) inheritance",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 15-year-old has recurrent stroke-like episodes, headaches, and short stature, with elevated serum lactate. Muscle biopsy shows ragged red fibers. Review of the family shows that every child of an affected woman is affected to a variable degree, whereas no child of an affected man is affected.\n\n**[IMAGE: three-generation pedigree in which affected females transmit the trait to all offspring and affected males transmit it to none]**",
    lead: "Which inheritance pattern does this pedigree demonstrate?",
    options: [
      "Mitochondrial (maternal) inheritance",
      "X-linked recessive",
      "Autosomal dominant with incomplete penetrance",
      "Autosomal recessive",
      "Genomic imprinting"
    ],
    answer: 0,
    exp: "Transmission exclusively through affected mothers with no paternal transmission is the signature of mitochondrial DNA inheritance, seen here in MELAS. Because a cell contains many mitochondria, the mutant-to-wild-type ratio (heteroplasmy) varies among offspring and tissues, explaining the variable severity. Ragged red fibers and lactic acidosis reflect defective oxidative phosphorylation.",
    why: [
      "Correct: mtDNA is inherited from the ovum, so only affected females transmit the trait, with heteroplasmy causing variable expression.",
      "X-linked recessive would show affected males transmitting to carrier daughters and no male-to-male transmission, not maternal-only inheritance.",
      "Autosomal dominant would show both sexes transmitting to roughly half of offspring.",
      "Autosomal recessive typically skips generations with unaffected carrier parents, unlike this all-offspring pattern.",
      "Imprinting produces disease based on parent-of-origin of a nuclear allele, not uniform maternal transmission with heteroplasmy."
    ]
  },
  {
    id: "s1-0003",
    system: "General Principles",
    discipline: "Biochemistry",
    topic: "McArdle disease (myophosphorylase deficiency)",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 22-year-old man reports painful muscle cramps and fatigue within minutes of starting vigorous exercise; if he rests briefly and resumes at a gentler pace, the symptoms ease and he can continue (a 'second wind'). After a strenuous soccer match he passed dark burgundy urine. An ischemic forearm exercise test shows a normal rise in ammonia but no rise in venous lactate.\n\n| Test | Value | Reference |\n|---|---|---|\n| Creatine kinase (rest) | 780 U/L | 30-200 |\n| Venous lactate after ischemic exercise | no rise | 2-3x rise expected |",
    lead: "A deficiency of which enzyme is most likely responsible?",
    options: [
      "Acid alpha-glucosidase",
      "Glucose-6-phosphatase",
      "Debranching enzyme",
      "Branching enzyme",
      "Myophosphorylase"
    ],
    answer: 4,
    exp: "Exercise intolerance with cramps, a second-wind phenomenon, myoglobinuria, and a flat lactate response to ischemic exercise is McArdle disease (glycogen storage disease V), due to deficient muscle glycogen phosphorylase (myophosphorylase). The muscle cannot mobilize its own glycogen, so anaerobic glycolysis fails to generate lactate during bursts of activity. The second wind reflects a switch to bloodborne glucose and free fatty acids.",
    why: [
      "Acid alpha-glucosidase deficiency (Pompe) causes lysosomal glycogen accumulation with cardiomegaly and hypotonia in infancy.",
      "Glucose-6-phosphatase deficiency (von Gierke) causes fasting hypoglycemia, hepatomegaly, and lactic acidosis, not exercise-only symptoms.",
      "Debranching enzyme deficiency (Cori) causes hepatomegaly and fasting hypoglycemia with milder features.",
      "Branching enzyme deficiency (Andersen) causes cirrhosis and failure to thrive in infancy.",
      "Correct: absent myophosphorylase blocks muscle glycogenolysis, producing the flat lactate curve and second wind."
    ]
  },
  {
    id: "s1-0004",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Immunology",
    topic: "Chronic granulomatous disease",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 2-year-old boy has had recurrent skin abscesses, suppurative lymphadenitis, and a liver abscess. Organisms recovered have included Staphylococcus aureus, Serratia marcescens, and Aspergillus. A dihydrorhodamine flow cytometry assay shows failure of neutrophils to fluoresce after stimulation.",
    lead: "Which defect best explains this pattern of infection?",
    options: [
      "Deficiency of the beta-2 integrin CD18",
      "Defective NADPH oxidase",
      "Impaired lysosome-phagosome fusion",
      "Absent Bruton tyrosine kinase",
      "Interleukin-12 receptor deficiency"
    ],
    answer: 1,
    exp: "Recurrent infections with catalase-positive organisms plus granuloma formation and an abnormal dihydrorhodamine test indicate chronic granulomatous disease from a defective NADPH oxidase. Phagocytes cannot generate the respiratory burst, so they fail to kill organisms that degrade their own hydrogen peroxide with catalase. The dihydrorhodamine assay detects the missing oxidative burst.",
    why: [
      "CD18 deficiency (leukocyte adhesion deficiency) causes delayed umbilical separation and infections without pus, with a normal oxidative burst.",
      "Correct: absent NADPH oxidase activity eliminates the respiratory burst, crippling killing of catalase-positive organisms.",
      "Impaired lysosome-phagosome fusion (Chediak-Higashi) causes partial albinism, giant granules, and neuropathy.",
      "Absent BTK (X-linked agammaglobulinemia) causes recurrent encapsulated bacterial infections after 6 months with absent B cells.",
      "IL-12 receptor deficiency causes disseminated mycobacterial and Salmonella infections, not this catalase-positive pattern."
    ]
  },
  {
    id: "s1-0005",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Pathology",
    topic: "Hereditary spherocytosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 20-year-old woman has intermittent jaundice, splenomegaly, and pigmented gallstones. Her peripheral smear shows small, round, densely staining red cells that lack central pallor. A direct antiglobulin (Coombs) test is negative, and an eosin-5-maleimide binding test is decreased.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 9.4 g/dL | 12.0-15.5 |\n| Mean corpuscular hemoglobin concentration | 37 g/dL | 32-36 |\n| Reticulocytes | 8% | 0.5-2.5 |\n| Indirect bilirubin | 3.1 mg/dL | 0.1-0.7 |",
    lead: "The underlying defect most likely involves which of the following?",
    options: [
      "Glucose-6-phosphate dehydrogenase",
      "A point mutation in beta-globin",
      "Deficiency of a GPI-anchored complement regulator",
      "Red cell membrane cytoskeletal proteins",
      "Pyruvate kinase"
    ],
    answer: 3,
    exp: "Spherocytes with a high MCHC, elevated reticulocytes, a negative Coombs test, and abnormal EMA binding indicate hereditary spherocytosis, a defect in membrane cytoskeletal proteins such as ankyrin, spectrin, or band 3. Loss of vertical membrane connections sheds membrane, converting biconcave cells into spheres that are trapped and destroyed in the spleen. This causes chronic hemolysis with jaundice, splenomegaly, and pigment gallstones.",
    why: [
      "G6PD deficiency causes episodic oxidative hemolysis with bite cells and Heinz bodies after triggers, not persistent spherocytosis.",
      "A beta-globin point mutation (sickle cell) produces sickled cells and vaso-occlusion, not spherocytes with high MCHC.",
      "Loss of GPI-anchored regulators (paroxysmal nocturnal hemoglobinuria) causes complement-mediated intravascular hemolysis with thrombosis.",
      "Correct: cytoskeletal protein defects cause membrane loss, spherocyte formation, and splenic sequestration.",
      "Pyruvate kinase deficiency causes chronic hemolysis with echinocytes and normal MCHC, without EMA abnormality."
    ]
  },
  {
    id: "s1-0006",
    system: "Behavioral Health & Nervous System",
    discipline: "Pathology",
    topic: "Parkinson disease",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 68-year-old man has a 2-year history of a slow resting tremor of the right hand that abates with purposeful movement, along with stiffness, small handwriting, reduced facial expression, and a shuffling gait. Symptoms improve substantially after starting levodopa-carbidopa.\n\n**[IMAGE: pigmented brainstem neuron containing a round eosinophilic cytoplasmic inclusion with a pale halo]**",
    lead: "Which process best explains his signs?",
    options: [
      "Depletion of acetylcholine in the nucleus basalis of Meynert",
      "Loss of dopaminergic neurons in the substantia nigra pars compacta with alpha-synuclein inclusions",
      "Degeneration of GABAergic neurons in the caudate nucleus",
      "Loss of hypocretin-producing neurons in the hypothalamus",
      "Autoimmune demyelination of central white matter"
    ],
    answer: 1,
    exp: "A resting tremor, bradykinesia, rigidity, and levodopa responsiveness define idiopathic Parkinson disease, driven by loss of dopaminergic neurons in the substantia nigra pars compacta. The eosinophilic inclusion shown is a Lewy body, composed largely of aggregated alpha-synuclein. Depletion of nigrostriatal dopamine underlies the motor deficit that levodopa temporarily corrects.",
    why: [
      "Nucleus basalis cholinergic loss is characteristic of Alzheimer disease and causes amnestic dementia, not parkinsonism.",
      "Correct: nigral dopaminergic neuron loss with Lewy bodies produces the classic parkinsonian syndrome.",
      "Caudate GABAergic neuron loss causes Huntington chorea with dementia, not a hypokinetic resting tremor.",
      "Hypocretin neuron loss causes narcolepsy with cataplexy.",
      "Central demyelination (multiple sclerosis) causes relapsing neurologic deficits, not a levodopa-responsive movement disorder."
    ]
  },
  {
    id: "s1-0007",
    system: "Behavioral Health & Nervous System",
    discipline: "Physiology",
    topic: "Subacute combined degeneration (B12 deficiency)",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 57-year-old woman has 4 months of symmetric tingling in the feet, unsteady gait that worsens in the dark, and stiffness. Examination shows loss of vibration and position sense, a positive Romberg sign, spastic weakness, and hyperreflexia with upgoing toes. She follows a strict vegan diet.\n\n| Test | Value | Reference |\n|---|---|---|\n| Mean corpuscular volume | 112 fL | 80-100 |\n| Vitamin B12 | 90 pg/mL | 200-900 |\n| Methylmalonic acid | elevated | normal |\n| Homocysteine | elevated | normal |",
    lead: "Which pattern of spinal cord involvement best explains her findings?",
    options: [
      "Isolated degeneration of the corticospinal tracts",
      "Selective anterior horn cell loss",
      "Demyelination limited to peripheral nerves",
      "Spinocerebellar tract degeneration from frataxin deficiency",
      "Combined dorsal column and lateral corticospinal tract degeneration"
    ],
    answer: 4,
    exp: "Vitamin B12 deficiency impairs myelin maintenance and causes subacute combined degeneration, damaging the dorsal columns and lateral corticospinal tracts together. Dorsal column loss produces impaired vibration and proprioception with a positive Romberg, while corticospinal involvement produces spastic weakness and hyperreflexia. The elevated methylmalonic acid and macrocytosis confirm B12 deficiency.",
    why: [
      "Isolated corticospinal degeneration would give spasticity without the prominent sensory ataxia seen here.",
      "Anterior horn cell loss causes flaccid weakness and atrophy with normal sensation.",
      "A pure peripheral neuropathy would not produce upgoing toes and hyperreflexia.",
      "Frataxin deficiency (Friedreich ataxia) is inherited and presents in childhood with cerebellar and cardiac features.",
      "Correct: B12 deficiency degenerates the dorsal columns and lateral corticospinal tracts together, explaining the mixed picture."
    ]
  },
  {
    id: "s1-0008",
    system: "Behavioral Health & Nervous System",
    discipline: "Behavioral Sciences",
    topic: "Defense mechanisms",
    difficulty: "easy",
    anchor: null,
    vignette: "A 40-year-old man harbors intense, unacknowledged resentment toward his younger brother, who recently inherited the family business. Whenever they meet, the man is conspicuously warm, showers his brother with expensive gifts, and publicly praises him far beyond what the situation warrants.",
    lead: "Which defense mechanism is he most likely using?",
    options: [
      "Reaction formation",
      "Displacement",
      "Projection",
      "Sublimation",
      "Isolation of affect"
    ],
    answer: 0,
    exp: "Transforming an unacceptable impulse into its exaggerated opposite is reaction formation. His hostility is converted into ostentatious affection and generosity that overshoot a genuine response. The excessive, unwarranted quality of the behavior is the clue that it defends against the opposite feeling.",
    why: [
      "Correct: an unacceptable hostile impulse is expressed as its exaggerated opposite, warmth and generosity.",
      "Displacement would redirect the anger onto a safer target, such as an employee, not convert it into affection.",
      "Projection would attribute his own resentment to his brother ('he hates me').",
      "Sublimation would channel the impulse into a socially productive outlet, such as competitive achievement.",
      "Isolation of affect would separate the feeling from the memory, discussing the inheritance without emotion."
    ]
  },
  {
    id: "s1-0009",
    system: "Musculoskeletal / Skin",
    discipline: "Genetics",
    topic: "Duchenne muscular dystrophy",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 4-year-old boy has delayed walking and frequent falls. To rise from the floor he pushes on his thighs to climb upright. He has enlarged, firm calves and a waddling gait. A maternal uncle used a wheelchair from adolescence and died in his twenties.\n\n| Test | Value | Reference |\n|---|---|---|\n| Creatine kinase | 14,200 U/L | 30-200 |",
    lead: "Which molecular defect is most likely?",
    options: [
      "A defect in type I collagen",
      "A CTG trinucleotide repeat expansion in DMPK",
      "A frameshift mutation in the dystrophin gene",
      "Autoantibodies against the nicotinic acetylcholine receptor",
      "An in-frame missense mutation that preserves partial dystrophin function"
    ],
    answer: 2,
    exp: "Proximal weakness with Gowers sign, calf pseudohypertrophy, very high creatine kinase, and X-linked family history is Duchenne muscular dystrophy. Frameshift mutations in the dystrophin gene abolish functional dystrophin, so myofibers lack the link between cytoskeleton and extracellular matrix and undergo progressive degeneration. Absent dystrophin distinguishes Duchenne from the milder Becker form.",
    why: [
      "Type I collagen defects cause osteogenesis imperfecta with fractures and blue sclerae, not myopathy.",
      "A DMPK CTG expansion causes myotonic dystrophy with grip myotonia, cataracts, and distal weakness.",
      "Correct: a frameshift mutation eliminates dystrophin, producing severe early-onset Duchenne dystrophy.",
      "Acetylcholine receptor autoantibodies cause myasthenia gravis with fatigable weakness and normal creatine kinase.",
      "An in-frame mutation preserving partial dystrophin produces the milder Becker dystrophy, not this severe early presentation."
    ]
  },
  {
    id: "s1-0010",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Pemphigus vulgaris",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 52-year-old woman has painful oral erosions and flaccid skin blisters that rupture easily, leaving raw areas. Gentle lateral pressure on adjacent normal-looking skin causes the epidermis to slide (positive Nikolsky sign). Histology shows separation of keratinocytes just above the basal layer.\n\n**[IMAGE: direct immunofluorescence showing a net-like (reticular) pattern of intercellular IgG throughout the epidermis]**",
    lead: "Autoantibodies against which target best explain these findings?",
    options: [
      "Hemidesmosomal proteins BP180 and BP230",
      "Tissue transglutaminase with IgA in dermal papillae",
      "Desmoglein 1 cleaved by staphylococcal exfoliative toxin",
      "Desmoglein 3 in desmosomes",
      "Nickel haptens producing a type IV reaction"
    ],
    answer: 3,
    exp: "Flaccid bullae, mucosal involvement, a positive Nikolsky sign, suprabasal acantholysis, and intercellular net-like IgG define pemphigus vulgaris. Autoantibodies against desmoglein 3 disrupt desmosomes that hold keratinocytes together, so cells separate within the epidermis. The intraepidermal (rather than subepidermal) split explains the fragile, easily ruptured blisters.",
    why: [
      "Anti-BP180/BP230 antibodies cause bullous pemphigoid, with tense subepidermal blisters, a linear pattern, and a negative Nikolsky sign.",
      "IgA against tissue transglutaminase in dermal papillae is dermatitis herpetiformis, with pruritic grouped vesicles linked to celiac disease.",
      "Staphylococcal exfoliative toxin cleaves desmoglein 1 in the superficial epidermis (scalded skin syndrome); this is toxin-mediated rather than autoantibody-mediated and spares mucosa.",
      "Correct: anti-desmoglein 3 antibodies dissolve desmosomes, producing suprabasal acantholysis and net-like intercellular IgG.",
      "A type IV reaction to nickel causes allergic contact dermatitis, not acantholytic blistering."
    ]
  },
  {
    id: "s1-0011",
    system: "Cardiovascular",
    discipline: "Physiology",
    topic: "Hypertrophic cardiomyopathy",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 17-year-old competitive athlete has had two episodes of near-syncope during sprints. A harsh crescendo-decrescendo systolic murmur is heard at the left lower sternal border. The murmur grows louder when he strains during a Valsalva maneuver and when he stands, and softens when he squats. His father died suddenly at age 40.",
    lead: "Which mechanism best explains why the murmur intensifies with Valsalva?",
    options: [
      "Increased venous return augments flow across a fixed valvular narrowing",
      "Increased afterload raises the transvalvular pressure gradient",
      "Acute papillary muscle rupture worsens regurgitation",
      "Increased left ventricular end-diastolic volume widens the outflow tract",
      "Decreased preload reduces ventricular cavity size and worsens dynamic outflow obstruction"
    ],
    answer: 4,
    exp: "This is hypertrophic cardiomyopathy with dynamic left ventricular outflow tract obstruction from systolic anterior motion of the mitral valve. Maneuvers that decrease preload, such as Valsalva strain and standing, shrink the ventricular cavity and bring the hypertrophied septum and mitral leaflet closer together, worsening obstruction and intensifying the murmur. Squatting increases preload and afterload, enlarging the cavity and softening the murmur.",
    why: [
      "A fixed valvular murmur such as aortic stenosis softens with reduced preload, the opposite of this behavior.",
      "Valsalva strain lowers, not raises, afterload and preload, so this does not explain the louder murmur.",
      "Papillary muscle rupture causes acute severe mitral regurgitation and pulmonary edema, not a maneuver-sensitive outflow murmur.",
      "A wider outflow tract would reduce obstruction and soften the murmur.",
      "Correct: reduced preload decreases cavity size, accentuating dynamic outflow obstruction and the murmur."
    ]
  },
  {
    id: "s1-0012",
    system: "Cardiovascular",
    discipline: "Pharmacology",
    topic: "Class III antiarrhythmic mechanism",
    difficulty: "moderate",
    anchor: "ecg",
    vignette: "A 66-year-old woman with atrial fibrillation is started on sotalol for rhythm control. Three days later she has palpitations and a brief syncopal episode.\n\n**[ECG: markedly prolonged QT interval followed by a run of polymorphic ventricular tachycardia with a twisting axis]**",
    lead: "The QT prolongation results from blockade of which current?",
    options: [
      "The fast inward sodium current during phase 0",
      "The L-type calcium current during phase 2",
      "The rapid delayed-rectifier potassium current during phase 3",
      "The funny (pacemaker) current in the sinoatrial node",
      "The sodium-potassium ATPase pump current"
    ],
    answer: 2,
    exp: "Sotalol is a class III antiarrhythmic that blocks the rapid delayed-rectifier potassium current (IKr), prolonging phase 3 repolarization and the QT interval. Excessive prolongation predisposes to early afterdepolarizations that trigger torsades de pointes, the polymorphic ventricular tachycardia shown. This is the shared mechanism of QT prolongation for class III agents.",
    why: [
      "Blocking the phase 0 sodium current is the class I mechanism, which slows conduction and widens QRS rather than prolonging QT via repolarization.",
      "L-type calcium channel blockade shortens the plateau and is the class IV mechanism, slowing AV nodal conduction.",
      "Correct: blocking IKr prolongs repolarization and the QT interval, predisposing to torsades.",
      "Funny current inhibition slows the sinoatrial rate without prolonging ventricular repolarization.",
      "The sodium-potassium ATPase is the target of digoxin, which shortens rather than prolongs the QT."
    ]
  },
  {
    id: "s1-0013",
    system: "Respiratory & Renal/Urinary",
    discipline: "Pathology",
    topic: "Alpha-1 antitrypsin deficiency",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 41-year-old man who has never smoked has progressive dyspnea. Imaging shows emphysema that is most severe at the lung bases. He also has mildly abnormal liver enzymes; a liver biopsy shows periodic acid-Schiff-positive, diastase-resistant globules within hepatocytes. Serum alpha-1 antitrypsin is low.",
    lead: "Which mechanism best explains his lung disease?",
    options: [
      "Unopposed neutrophil elastase degrading alveolar walls",
      "Antibodies directed against the alveolar basement membrane",
      "Mucous gland hyperplasia from chronic tobacco exposure",
      "A CFTR mutation producing inspissated airway secretions",
      "Deficiency of a lysosomal alpha-galactosidase"
    ],
    answer: 0,
    exp: "Panacinar, basilar-predominant emphysema in a young nonsmoker with liver disease and low serum levels indicates alpha-1 antitrypsin deficiency. Without this protease inhibitor, neutrophil elastase acts unopposed and destroys alveolar elastin, producing emphysema. The misfolded Z-variant protein polymerizes and accumulates in hepatocytes as the PAS-positive, diastase-resistant globules seen on biopsy.",
    why: [
      "Correct: loss of the elastase inhibitor allows neutrophil elastase to destroy alveolar walls, causing panacinar emphysema.",
      "Anti-basement membrane antibodies cause Goodpasture syndrome with hemoptysis and glomerulonephritis, not emphysema.",
      "Tobacco-related mucous gland hyperplasia causes chronic bronchitis and centriacinar (apical) emphysema, and he is a nonsmoker.",
      "A CFTR mutation causes cystic fibrosis with bronchiectasis and pancreatic insufficiency, not low alpha-1 antitrypsin with hepatic globules.",
      "Alpha-galactosidase deficiency (Fabry disease) causes neuropathic pain, angiokeratomas, and renal disease, not emphysema."
    ]
  },
  {
    id: "s1-0014",
    system: "Respiratory & Renal/Urinary",
    discipline: "Physiology",
    topic: "Gitelman syndrome",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 24-year-old man has fatigue and intermittent muscle cramps. His blood pressure is normal. He takes no diuretics or laxatives.\n\n| Test | Value | Reference |\n|---|---|---|\n| Potassium | 2.9 mEq/L | 3.5-5.0 |\n| Bicarbonate | 32 mEq/L | 22-28 |\n| Magnesium | 1.2 mg/dL | 1.7-2.2 |\n| Urine calcium | low | - |",
    lead: "A defect in which transporter best explains these findings?",
    options: [
      "The Na-K-2Cl cotransporter of the thick ascending limb",
      "The Na-Cl cotransporter of the distal convoluted tubule",
      "The epithelial sodium channel of the collecting duct",
      "Aldosterone overproduction by an adrenal adenoma",
      "The vasopressin-regulated aquaporin-2 water channel"
    ],
    answer: 1,
    exp: "Hypokalemic metabolic alkalosis with hypomagnesemia and hypocalciuria in a normotensive patient is Gitelman syndrome, caused by a loss-of-function defect in the distal convoluted tubule Na-Cl cotransporter. The physiology mimics chronic thiazide therapy, which likewise lowers urinary calcium and wastes magnesium. Normal blood pressure and hypocalciuria distinguish it from other tubular disorders.",
    why: [
      "A Na-K-2Cl cotransporter defect (Bartter syndrome) mimics a loop diuretic and causes hypercalciuria, not hypocalciuria.",
      "Correct: a distal Na-Cl cotransporter defect reproduces a thiazide effect, with hypocalciuria and hypomagnesemia.",
      "An overactive epithelial sodium channel (Liddle syndrome) causes hypertension with low renin and aldosterone.",
      "An aldosterone-producing adenoma (Conn syndrome) causes hypertension, not a normotensive presentation.",
      "Aquaporin-2 dysfunction causes nephrogenic diabetes insipidus with polyuria, not this electrolyte pattern."
    ]
  },
  {
    id: "s1-0015",
    system: "Gastrointestinal",
    discipline: "Physiology",
    topic: "Zollinger-Ellison syndrome",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 46-year-old woman has recurrent duodenal ulcers, some located in the distal duodenum, that persist despite standard acid suppression. She also has chronic watery diarrhea. Fasting serum gastrin is high, and after intravenous secretin the gastrin level rises further rather than falling.",
    lead: "Which mechanism best explains her ulcers?",
    options: [
      "Helicobacter pylori-induced antral gastritis",
      "Autoimmune destruction of gastric parietal cells",
      "Excess secretion of vasoactive intestinal peptide",
      "Autonomous gastrin secretion from a neuroendocrine tumor",
      "Loss of somatostatin from antral D-cell hyperplasia"
    ],
    answer: 3,
    exp: "Refractory, distally located ulcers with diarrhea and a paradoxical rise in gastrin after secretin indicate Zollinger-Ellison syndrome from a gastrin-secreting neuroendocrine tumor (gastrinoma). Normal gastrin-producing cells are suppressed by secretin, but gastrinoma cells paradoxically increase secretion, which is the basis of the diagnostic test. Sustained hypergastrinemia drives acid hypersecretion, ulcers, and diarrhea, and it may occur with MEN1.",
    why: [
      "H. pylori gastritis causes common peptic ulcers but does not raise fasting gastrin with a paradoxical secretin response.",
      "Autoimmune parietal cell destruction reduces acid and causes pernicious anemia, the opposite of acid hypersecretion.",
      "Excess VIP causes profuse secretory diarrhea with hypokalemia and achlorhydria, not acid-driven ulcers.",
      "Correct: autonomous tumor gastrin secretion, confirmed by the paradoxical secretin response, drives acid hypersecretion and ulcers.",
      "Loss of somatostatin would disinhibit gastrin but would not produce a paradoxical secretin-stimulated rise."
    ]
  },
  {
    id: "s1-0016",
    system: "Gastrointestinal",
    discipline: "Pathology",
    topic: "Wilson disease",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 19-year-old college student has several months of worsening hand tremor, slurred speech, and difficulty with fine movements, along with new irritability and declining grades. Examination shows a resting and postural tremor and brownish rings at the corneal margins. Liver enzymes are elevated. Serum ceruloplasmin is low and 24-hour urinary copper is high.",
    lead: "Which defect underlies this disorder?",
    options: [
      "An HFE mutation causing intestinal iron overload",
      "Reduced hepatic glucuronidation of bilirubin",
      "Autoimmune destruction of intrahepatic bile ducts",
      "Accumulation of misfolded alpha-1 antitrypsin",
      "A mutation in the ATP7B copper-transporting ATPase"
    ],
    answer: 4,
    exp: "A young adult with combined hepatic, movement, and psychiatric disease plus Kayser-Fleischer rings and low ceruloplasmin has Wilson disease, caused by ATP7B mutations. The defective transporter impairs biliary copper excretion and copper incorporation into ceruloplasmin, so copper accumulates in the liver, brain, and cornea. Elevated urinary copper reflects the systemic overload.",
    why: [
      "HFE-related hemochromatosis causes iron overload with diabetes and skin bronzing, not corneal copper rings or low ceruloplasmin.",
      "Reduced bilirubin glucuronidation (Gilbert or Crigler-Najjar) causes unconjugated hyperbilirubinemia without neurologic disease.",
      "Autoimmune bile duct destruction (primary biliary cholangitis) causes cholestatic pruritus in middle-aged women with antimitochondrial antibodies.",
      "Alpha-1 antitrypsin accumulation causes liver disease and emphysema, not copper-related corneal rings.",
      "Correct: ATP7B dysfunction blocks biliary copper excretion, causing hepatic, neurologic, and corneal copper deposition."
    ]
  },
  {
    id: "s1-0017",
    system: "Reproductive & Endocrine",
    discipline: "Physiology",
    topic: "Complete androgen insensitivity",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 16-year-old with a female appearance is evaluated for not yet having menstruated. She has normal breast development but sparse axillary and pubic hair. Pelvic examination reveals a short, blind-ending vagina with no palpable cervix or uterus, and there are bilateral masses in the inguinal canals. Serum testosterone is in the normal male range, and the karyotype is 46,XY.",
    lead: "Which defect best explains this presentation?",
    options: [
      "Deficiency of 5-alpha-reductase",
      "A defective androgen receptor",
      "Deficiency of 21-hydroxylase",
      "Deficiency of aromatase",
      "Müllerian duct agenesis in a 46,XX individual"
    ],
    answer: 1,
    exp: "A 46,XY individual with female external genitalia, absent uterus, intra-abdominal or inguinal testes, and male-range testosterone has complete androgen insensitivity from a defective androgen receptor. Testosterone and dihydrotestosterone cannot act, so external genitalia develop along the default female pathway, while testicular anti-Mullerian hormone still regresses the uterus and tubes. Breast development results from peripheral aromatization of androgens to estrogen.",
    why: [
      "5-alpha-reductase deficiency causes undervirilized males at birth who virilize at puberty, not a fully female phenotype with breasts.",
      "Correct: a nonfunctional androgen receptor prevents androgen action, yielding female genitalia with testes and no uterus.",
      "21-hydroxylase deficiency virilizes 46,XX individuals and causes salt wasting, not a 46,XY female phenotype.",
      "Aromatase deficiency prevents estrogen synthesis and causes virilization, the opposite of breast development.",
      "Mullerian agenesis occurs in 46,XX individuals with normal ovaries and female androgen levels, not a 46,XY karyotype with testes."
    ]
  },
  {
    id: "s1-0018",
    system: "Reproductive & Endocrine",
    discipline: "Biochemistry",
    topic: "21-hydroxylase deficiency",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A newborn assigned female at birth has ambiguous genitalia with clitoromegaly. On day 10 of life she becomes lethargic, dehydrated, and hypotensive.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sodium | 124 mEq/L | 135-145 |\n| Potassium | 6.8 mEq/L | 3.5-5.0 |\n| 17-hydroxyprogesterone | markedly elevated | - |",
    lead: "A deficiency of which enzyme is most likely?",
    options: [
      "21-hydroxylase",
      "17-alpha-hydroxylase",
      "11-beta-hydroxylase",
      "Aromatase",
      "5-alpha-reductase"
    ],
    answer: 0,
    exp: "Virilization of a genetically female infant with salt-wasting (hyponatremia, hyperkalemia, hypotension) and a markedly elevated 17-hydroxyprogesterone is classic salt-wasting 21-hydroxylase deficiency, the most common congenital adrenal hyperplasia. Impaired synthesis of cortisol and aldosterone shunts precursors into the androgen pathway, causing virilization, while aldosterone deficiency causes the salt-wasting crisis. Elevated 17-hydroxyprogesterone is the diagnostic marker.",
    why: [
      "Correct: 21-hydroxylase deficiency reduces cortisol and aldosterone, causing salt wasting with androgen excess and high 17-hydroxyprogesterone.",
      "17-alpha-hydroxylase deficiency reduces androgens and cortisol, causing hypertension with hypokalemia and absent virilization.",
      "11-beta-hydroxylase deficiency causes virilization but with hypertension and hypokalemia from deoxycorticosterone excess, not salt wasting.",
      "Aromatase deficiency causes maternal and fetal virilization without a salt-wasting crisis or elevated 17-hydroxyprogesterone.",
      "5-alpha-reductase deficiency undervirilizes 46,XY infants and does not cause salt wasting."
    ]
  },
  {
    id: "s1-0019",
    system: "Reproductive & Endocrine",
    discipline: "Pharmacology",
    topic: "Thionamide mechanism (propylthiouracil)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 28-year-old woman in the first trimester of pregnancy has heat intolerance, palpitations, a diffuse goiter, and mild proptosis. Thyroid-stimulating hormone is suppressed and free thyroxine is elevated. She is started on propylthiouracil.",
    lead: "Which action best describes how this drug lowers thyroid hormone levels?",
    options: [
      "It blocks iodide uptake at the sodium-iodide symporter",
      "It destroys thyroid follicular cells through beta radiation",
      "It suppresses thyroid-stimulating hormone release from the pituitary",
      "It inhibits thyroid peroxidase and peripheral conversion of thyroxine to triiodothyronine",
      "It increases the concentration of thyroxine-binding globulin"
    ],
    answer: 3,
    exp: "Propylthiouracil inhibits thyroid peroxidase, blocking iodide organification and coupling required to synthesize thyroid hormone. It additionally inhibits peripheral 5'-deiodinase, reducing conversion of thyroxine to the more active triiodothyronine, which is useful in severe hyperthyroidism. These actions lower circulating active hormone without destroying the gland.",
    why: [
      "Blockade of the sodium-iodide symporter is the action of perchlorate, not a thionamide.",
      "Beta-radiation destruction of follicular cells describes radioactive iodine therapy.",
      "Thionamides act on the gland and periphery, not by suppressing pituitary TSH release.",
      "Correct: propylthiouracil inhibits thyroid peroxidase and peripheral deiodination, lowering active hormone.",
      "Thyroxine-binding globulin levels are influenced by estrogen and do not mediate a thionamide effect."
    ]
  },
  {
    id: "s1-0020",
    system: "Multisystem",
    discipline: "Microbiology",
    topic: "Acute rheumatic fever (molecular mimicry)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 9-year-old boy develops migratory arthritis of the large joints, a new heart murmur, painless nodules over the elbows, and a serpiginous truncal rash three weeks after an untreated sore throat. An antistreptolysin O titer is elevated.",
    lead: "Which mechanism best explains his cardiac involvement?",
    options: [
      "Direct bacterial invasion of the myocardium",
      "Deposition of circulating immune complexes in the tissue",
      "Antibodies against streptococcal M protein cross-reacting with cardiac myosin",
      "A toxic shock toxin acting as a superantigen",
      "IgA deposition within small-vessel walls"
    ],
    answer: 2,
    exp: "Acute rheumatic fever follows group A streptococcal pharyngitis and results from molecular mimicry, a type II hypersensitivity reaction. Antibodies raised against streptococcal M protein cross-react with structurally similar cardiac myosin and valvular tissue, producing carditis. The migratory arthritis, subcutaneous nodules, and erythema marginatum complete the picture.",
    why: [
      "Rheumatic carditis is immune-mediated, not caused by direct bacterial invasion of the heart.",
      "Immune-complex deposition explains poststreptococcal glomerulonephritis, a different sequela affecting the kidney.",
      "Correct: anti-M protein antibodies cross-react with cardiac myosin, causing autoimmune carditis.",
      "Superantigen-mediated toxic shock causes fever, rash, and hypotension, not this delayed valvular disease.",
      "IgA vasculitis (Henoch-Schonlein) causes palpable purpura, arthritis, and nephritis, not carditis after strep throat."
    ]
  },
  {
    id: "s1-0021",
    system: "Multisystem",
    discipline: "Pathology",
    topic: "Burkitt lymphoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "An 8-year-old boy has a rapidly enlarging mass of the jaw and face that has doubled in size over two weeks. Serologic testing is consistent with prior Epstein-Barr virus infection.\n\n**[IMAGE: sheets of intermediate-sized lymphocytes interspersed with pale tingible-body macrophages producing a starry-sky appearance; proliferation index near 100%]**",
    lead: "Which genetic event most likely underlies this tumor?",
    options: [
      "A translocation fusing BCR and ABL1",
      "A translocation placing MYC next to the immunoglobulin heavy-chain locus",
      "A translocation overexpressing BCL2",
      "A translocation producing a PML-RARA fusion",
      "A translocation overexpressing cyclin D1"
    ],
    answer: 1,
    exp: "A rapidly growing jaw mass in a child with EBV association and a starry-sky histology with an extremely high proliferation index is Burkitt lymphoma. The defining lesion is t(8;14), which places the MYC oncogene under the control of the immunoglobulin heavy-chain enhancer, driving constitutive MYC expression and explosive proliferation. Tingible-body macrophages clearing apoptotic cells create the starry-sky look.",
    why: [
      "A BCR-ABL1 fusion, t(9;22), defines chronic myeloid leukemia, not a starry-sky lymphoma.",
      "Correct: t(8;14) juxtaposes MYC with the immunoglobulin heavy-chain locus, driving the high-grade proliferation of Burkitt lymphoma.",
      "BCL2 overexpression, t(14;18), characterizes follicular lymphoma, which is indolent.",
      "PML-RARA, t(15;17), defines acute promyelocytic leukemia treated with all-trans retinoic acid.",
      "Cyclin D1 overexpression, t(11;14), characterizes mantle cell lymphoma in older adults."
    ]
  },
  {
    id: "s1-0022",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Predictive values",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A new blood test for a disease is evaluated in 1,000 people. The results compared with the reference standard are shown.\n\n| | Disease present | Disease absent |\n|---|---|---|\n| Test positive | 90 | 90 |\n| Test negative | 10 | 810 |",
    lead: "What is the positive predictive value of this test in this population?",
    options: [
      "90%",
      "10%",
      "82%",
      "50%",
      "99%"
    ],
    answer: 3,
    exp: "Positive predictive value is the proportion of test-positive people who truly have disease, calculated as true positives divided by all positives. Here that is 90 divided by (90 + 90), which equals 50%. Note that even with 90% sensitivity and 90% specificity, the modest disease prevalence of 10% keeps the positive predictive value low.",
    why: [
      "90% is the sensitivity and the specificity, not the positive predictive value.",
      "10% is the disease prevalence in this sample, not the predictive value.",
      "82% does not correspond to any correct calculation from the table.",
      "Correct: PPV = 90 / (90 + 90) = 50%.",
      "About 99% is the negative predictive value, 810 / (810 + 10), not the positive predictive value."
    ]
  },
  {
    id: "s1-0023",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Lead-time bias",
    difficulty: "moderate",
    anchor: null,
    vignette: "A new screening test detects a cancer an average of two years earlier than it would otherwise be diagnosed. When investigators compare screened and unscreened patients, survival measured from the time of diagnosis appears longer in the screened group. However, the age at death and the overall disease-specific mortality are unchanged between the groups.",
    lead: "Which bias best explains the apparent survival benefit?",
    options: [
      "Lead-time bias",
      "Length-time bias",
      "Selection bias favoring healthier participants",
      "Recall bias",
      "Confounding by indication"
    ],
    answer: 0,
    exp: "When a test moves the moment of diagnosis earlier without changing the time of death, survival measured from diagnosis lengthens artificially even though patients do not live longer. This is lead-time bias, and unchanged mortality is the tell that the apparent benefit is illusory. Screening efficacy must be judged by disease-specific mortality, not survival time from diagnosis.",
    why: [
      "Correct: earlier diagnosis lengthens measured survival without extending life, and mortality is unchanged.",
      "Length-time bias arises when screening preferentially detects slow-growing, less aggressive tumors, which is not described here.",
      "Selection bias toward healthier volunteers would alter baseline mortality, but disease-specific mortality is unchanged.",
      "Recall bias affects retrospective exposure reporting, not survival timing in screening.",
      "Confounding by indication involves treatment assignment based on prognosis, which is not the mechanism here."
    ]
  },
  {
    id: "s1-0024",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Adolescent confidentiality",
    difficulty: "easy",
    anchor: null,
    vignette: "A 16-year-old girl comes to the clinic alone requesting testing after unprotected intercourse. She is worried she may have a sexually transmitted infection and asks that her parents not be informed. She understands the testing and its implications, and there is no indication of abuse or coercion.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Require parental consent before performing any testing",
      "Decline to evaluate her unless a parent is present",
      "Provide confidential testing and treatment for sexually transmitted infections",
      "Notify her parents because she is a minor",
      "Report the encounter to child protective services"
    ],
    answer: 2,
    exp: "Minors can consent to the diagnosis and treatment of sexually transmitted infections confidentially, and this care should be provided without requiring parental notification. Respecting confidentiality encourages adolescents to seek needed care. The physician can encourage parental involvement but should not mandate it in the absence of abuse or safety concerns.",
    why: [
      "Requiring parental consent would inappropriately withhold confidential STI care to which she is entitled.",
      "Declining to evaluate her without a parent present creates a barrier to necessary care.",
      "Correct: adolescents may confidentially consent to STI testing and treatment, which should be provided.",
      "Notifying parents against her wishes breaches the confidentiality afforded for this care.",
      "There is no evidence of abuse, so a child protective services report is not indicated."
    ]
  },
  {
    id: "s1-0025",
    system: "Social Sciences / Ethics",
    discipline: "Communication",
    topic: "Decision-making capacity and refusal",
    difficulty: "easy",
    anchor: null,
    vignette: "A 58-year-old man with a bleeding gastric ulcer has a hemoglobin of 6.5 g/dL. He is alert and oriented and clearly explains that, as a devout Jehovah's Witness, he does not want a blood transfusion. He accurately describes the risks of refusing, including that he could die, and he articulates reasons consistent with his long-held beliefs. His family urges the team to transfuse him anyway.",
    lead: "Which of the following is the most appropriate course of action?",
    options: [
      "Obtain a court order authorizing transfusion",
      "Transfuse under the emergency exception to consent",
      "Conclude that his refusal itself demonstrates a lack of capacity",
      "Ask the family to authorize transfusion on his behalf",
      "Respect his informed refusal and pursue alternative management"
    ],
    answer: 4,
    exp: "A competent, informed adult has the right to refuse any treatment, including a life-saving transfusion, when the refusal reflects stable, deeply held values. This patient demonstrates capacity: he understands his situation, appreciates the consequences, reasons consistently, and communicates a clear choice. The team should honor his refusal and optimize non-transfusion strategies rather than override him.",
    why: [
      "A court order is inappropriate when a capacitated adult has made an informed refusal.",
      "The emergency exception applies only when consent cannot be obtained; here a capacitated patient has explicitly refused.",
      "Refusing recommended care does not by itself indicate incapacity when the patient understands and reasons clearly.",
      "Family cannot override the autonomous decision of a patient who retains capacity.",
      "Correct: an informed, capacitated adult may refuse transfusion, and his decision should be respected."
    ]
  }
];
