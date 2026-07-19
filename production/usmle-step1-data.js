/*
 * Rounds Codex - USMLE Step 1 combined question bank (GENERATED).
 *
 * Do not edit by hand. Regenerate with:
 *     node production/build-data.js
 *
 * Sources (in order):
 *   usmle-step1-b1.js -> USMLE_STEP1_B1 (25)
 *   usmle-step1-b2.js -> USMLE_STEP1_B2 (25)
 *   usmle-step1-b3.js -> USMLE_STEP1_B3 (25)
 *   usmle-step1-b4.js -> USMLE_STEP1_B4 (25)
 *   usmle-step1-b5.js -> USMLE_STEP1_B5 (25)
 *   TOTAL: 125 items
 *
 * Exposes globals USMLE_STEP1 (array, batch order) and
 * USMLE_STEP1_BY_ID (object keyed by item id).
 */

const USMLE_STEP1 = [
  {
    "id": "s1-0001",
    "system": "General Principles",
    "discipline": "Biochemistry",
    "topic": "Lesch-Nyhan syndrome (HGPRT deficiency)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 4-year-old boy is brought in for intellectual disability, involuntary writhing movements, and repeated biting of his own lips and fingertips that has required protective restraints. His parents recall orange, sand-like crystals in his diapers during infancy. He has swollen, tender joints, and serum uric acid is markedly elevated. His maternal uncle had similar problems.",
    "lead": "Deficiency of which enzyme best accounts for this presentation?",
    "options": [
      "Adenosine deaminase",
      "Adenine phosphoribosyltransferase",
      "Hypoxanthine-guanine phosphoribosyltransferase",
      "Xanthine oxidase",
      "Increased activity of PRPP synthetase"
    ],
    "answer": 2,
    "exp": "The triad of self-mutilation, dystonia with intellectual disability, and hyperuricemia in an X-linked pattern is Lesch-Nyhan syndrome, caused by deficient HGPRT. Loss of purine salvage forces hypoxanthine and guanine down the degradation pathway to uric acid while de novo purine synthesis is disinhibited, producing gout and urate nephrolithiasis. The neurobehavioral features are the clinical hallmark that separates it from other causes of hyperuricemia.",
    "why": [
      "Adenosine deaminase deficiency causes severe combined immunodeficiency from toxic deoxyadenosine, not self-mutilation or hyperuricemia.",
      "APRT deficiency causes 2,8-dihydroxyadenine kidney stones without neurologic disease.",
      "Correct: absent HGPRT blocks purine salvage, driving uric acid overproduction plus the neurobehavioral syndrome.",
      "Xanthine oxidase deficiency lowers uric acid and causes xanthine stones, the opposite of this picture.",
      "PRPP synthetase overactivity causes early gout and hyperuricemia but not the self-injurious neurologic syndrome."
    ]
  },
  {
    "id": "s1-0002",
    "system": "General Principles",
    "discipline": "Genetics",
    "topic": "Mitochondrial (maternal) inheritance",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 15-year-old has recurrent stroke-like episodes, headaches, and short stature, with elevated serum lactate. Muscle biopsy shows ragged red fibers. Review of the family shows that every child of an affected woman is affected to a variable degree, whereas no child of an affected man is affected.\n\n**[IMAGE: three-generation pedigree in which affected females transmit the trait to all offspring and affected males transmit it to none]**",
    "lead": "Which inheritance pattern does this pedigree demonstrate?",
    "options": [
      "Mitochondrial (maternal) inheritance",
      "X-linked recessive",
      "Autosomal dominant with incomplete penetrance",
      "Autosomal recessive",
      "Genomic imprinting"
    ],
    "answer": 0,
    "exp": "Transmission exclusively through affected mothers with no paternal transmission is the signature of mitochondrial DNA inheritance, seen here in MELAS. Because a cell contains many mitochondria, the mutant-to-wild-type ratio (heteroplasmy) varies among offspring and tissues, explaining the variable severity. Ragged red fibers and lactic acidosis reflect defective oxidative phosphorylation.",
    "why": [
      "Correct: mtDNA is inherited from the ovum, so only affected females transmit the trait, with heteroplasmy causing variable expression.",
      "X-linked recessive would show affected males transmitting to carrier daughters and no male-to-male transmission, not maternal-only inheritance.",
      "Autosomal dominant would show both sexes transmitting to roughly half of offspring.",
      "Autosomal recessive typically skips generations with unaffected carrier parents, unlike this all-offspring pattern.",
      "Imprinting produces disease based on parent-of-origin of a nuclear allele, not uniform maternal transmission with heteroplasmy."
    ]
  },
  {
    "id": "s1-0003",
    "system": "General Principles",
    "discipline": "Biochemistry",
    "topic": "McArdle disease (myophosphorylase deficiency)",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 22-year-old man reports painful muscle cramps and fatigue within minutes of starting vigorous exercise; if he rests briefly and resumes at a gentler pace, the symptoms ease and he can continue (a 'second wind'). After a strenuous soccer match he passed dark burgundy urine. An ischemic forearm exercise test shows a normal rise in ammonia but no rise in venous lactate.\n\n| Test | Value | Reference |\n|---|---|---|\n| Creatine kinase (rest) | 780 U/L | 30-200 |\n| Venous lactate after ischemic exercise | no rise | 2-3x rise expected |",
    "lead": "A deficiency of which enzyme is most likely responsible?",
    "options": [
      "Acid alpha-glucosidase",
      "Glucose-6-phosphatase",
      "Debranching enzyme",
      "Branching enzyme",
      "Myophosphorylase"
    ],
    "answer": 4,
    "exp": "Exercise intolerance with cramps, a second-wind phenomenon, myoglobinuria, and a flat lactate response to ischemic exercise is McArdle disease (glycogen storage disease V), due to deficient muscle glycogen phosphorylase (myophosphorylase). The muscle cannot mobilize its own glycogen, so anaerobic glycolysis fails to generate lactate during bursts of activity. The second wind reflects a switch to bloodborne glucose and free fatty acids.",
    "why": [
      "Acid alpha-glucosidase deficiency (Pompe) causes lysosomal glycogen accumulation with cardiomegaly and hypotonia in infancy.",
      "Glucose-6-phosphatase deficiency (von Gierke) causes fasting hypoglycemia, hepatomegaly, and lactic acidosis, not exercise-only symptoms.",
      "Debranching enzyme deficiency (Cori) causes hepatomegaly and fasting hypoglycemia with milder features.",
      "Branching enzyme deficiency (Andersen) causes cirrhosis and failure to thrive in infancy.",
      "Correct: absent myophosphorylase blocks muscle glycogenolysis, producing the flat lactate curve and second wind."
    ]
  },
  {
    "id": "s1-0004",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Immunology",
    "topic": "Chronic granulomatous disease",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 2-year-old boy has had recurrent skin abscesses, suppurative lymphadenitis, and a liver abscess. Organisms recovered have included Staphylococcus aureus, Serratia marcescens, and Aspergillus. A dihydrorhodamine flow cytometry assay shows failure of neutrophils to fluoresce after stimulation.",
    "lead": "Which defect best explains this pattern of infection?",
    "options": [
      "Deficiency of the beta-2 integrin CD18",
      "Defective NADPH oxidase",
      "Impaired lysosome-phagosome fusion",
      "Absent Bruton tyrosine kinase",
      "Interleukin-12 receptor deficiency"
    ],
    "answer": 1,
    "exp": "Recurrent infections with catalase-positive organisms plus granuloma formation and an abnormal dihydrorhodamine test indicate chronic granulomatous disease from a defective NADPH oxidase. Phagocytes cannot generate the respiratory burst, so they fail to kill organisms that degrade their own hydrogen peroxide with catalase. The dihydrorhodamine assay detects the missing oxidative burst.",
    "why": [
      "CD18 deficiency (leukocyte adhesion deficiency) causes delayed umbilical separation and infections without pus, with a normal oxidative burst.",
      "Correct: absent NADPH oxidase activity eliminates the respiratory burst, crippling killing of catalase-positive organisms.",
      "Impaired lysosome-phagosome fusion (Chediak-Higashi) causes partial albinism, giant granules, and neuropathy.",
      "Absent BTK (X-linked agammaglobulinemia) causes recurrent encapsulated bacterial infections after 6 months with absent B cells.",
      "IL-12 receptor deficiency causes disseminated mycobacterial and Salmonella infections, not this catalase-positive pattern."
    ]
  },
  {
    "id": "s1-0005",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Pathology",
    "topic": "Hereditary spherocytosis",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 20-year-old woman has intermittent jaundice, splenomegaly, and pigmented gallstones. Her peripheral smear shows small, round, densely staining red cells that lack central pallor. A direct antiglobulin (Coombs) test is negative, and an eosin-5-maleimide binding test is decreased.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 9.4 g/dL | 12.0-15.5 |\n| Mean corpuscular hemoglobin concentration | 37 g/dL | 32-36 |\n| Reticulocytes | 8% | 0.5-2.5 |\n| Indirect bilirubin | 3.1 mg/dL | 0.1-0.7 |",
    "lead": "The underlying defect most likely involves which of the following?",
    "options": [
      "Glucose-6-phosphate dehydrogenase",
      "A point mutation in beta-globin",
      "Deficiency of a GPI-anchored complement regulator",
      "Red cell membrane cytoskeletal proteins",
      "Pyruvate kinase"
    ],
    "answer": 3,
    "exp": "Spherocytes with a high MCHC, elevated reticulocytes, a negative Coombs test, and abnormal EMA binding indicate hereditary spherocytosis, a defect in membrane cytoskeletal proteins such as ankyrin, spectrin, or band 3. Loss of vertical membrane connections sheds membrane, converting biconcave cells into spheres that are trapped and destroyed in the spleen. This causes chronic hemolysis with jaundice, splenomegaly, and pigment gallstones.",
    "why": [
      "G6PD deficiency causes episodic oxidative hemolysis with bite cells and Heinz bodies after triggers, not persistent spherocytosis.",
      "A beta-globin point mutation (sickle cell) produces sickled cells and vaso-occlusion, not spherocytes with high MCHC.",
      "Loss of GPI-anchored regulators (paroxysmal nocturnal hemoglobinuria) causes complement-mediated intravascular hemolysis with thrombosis.",
      "Correct: cytoskeletal protein defects cause membrane loss, spherocyte formation, and splenic sequestration.",
      "Pyruvate kinase deficiency causes chronic hemolysis with echinocytes and normal MCHC, without EMA abnormality."
    ]
  },
  {
    "id": "s1-0006",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Pathology",
    "topic": "Parkinson disease",
    "difficulty": "easy",
    "anchor": "image",
    "vignette": "A 68-year-old man has a 2-year history of a slow resting tremor of the right hand that abates with purposeful movement, along with stiffness, small handwriting, reduced facial expression, and a shuffling gait. Symptoms improve substantially after starting levodopa-carbidopa.\n\n**[IMAGE: pigmented brainstem neuron containing a round eosinophilic cytoplasmic inclusion with a pale halo]**",
    "lead": "Which process best explains his signs?",
    "options": [
      "Depletion of acetylcholine in the nucleus basalis of Meynert",
      "Loss of dopaminergic neurons in the substantia nigra pars compacta with alpha-synuclein inclusions",
      "Degeneration of GABAergic neurons in the caudate nucleus",
      "Loss of hypocretin-producing neurons in the hypothalamus",
      "Autoimmune demyelination of central white matter"
    ],
    "answer": 1,
    "exp": "A resting tremor, bradykinesia, rigidity, and levodopa responsiveness define idiopathic Parkinson disease, driven by loss of dopaminergic neurons in the substantia nigra pars compacta. The eosinophilic inclusion shown is a Lewy body, composed largely of aggregated alpha-synuclein. Depletion of nigrostriatal dopamine underlies the motor deficit that levodopa temporarily corrects.",
    "why": [
      "Nucleus basalis cholinergic loss is characteristic of Alzheimer disease and causes amnestic dementia, not parkinsonism.",
      "Correct: nigral dopaminergic neuron loss with Lewy bodies produces the classic parkinsonian syndrome.",
      "Caudate GABAergic neuron loss causes Huntington chorea with dementia, not a hypokinetic resting tremor.",
      "Hypocretin neuron loss causes narcolepsy with cataplexy.",
      "Central demyelination (multiple sclerosis) causes relapsing neurologic deficits, not a levodopa-responsive movement disorder."
    ]
  },
  {
    "id": "s1-0007",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Physiology",
    "topic": "Subacute combined degeneration (B12 deficiency)",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 57-year-old woman has 4 months of symmetric tingling in the feet, unsteady gait that worsens in the dark, and stiffness. Examination shows loss of vibration and position sense, a positive Romberg sign, spastic weakness, and hyperreflexia with upgoing toes. She follows a strict vegan diet.\n\n| Test | Value | Reference |\n|---|---|---|\n| Mean corpuscular volume | 112 fL | 80-100 |\n| Vitamin B12 | 90 pg/mL | 200-900 |\n| Methylmalonic acid | elevated | normal |\n| Homocysteine | elevated | normal |",
    "lead": "Which pattern of spinal cord involvement best explains her findings?",
    "options": [
      "Isolated degeneration of the corticospinal tracts",
      "Selective anterior horn cell loss",
      "Demyelination limited to peripheral nerves",
      "Spinocerebellar tract degeneration from frataxin deficiency",
      "Combined dorsal column and lateral corticospinal tract degeneration"
    ],
    "answer": 4,
    "exp": "Vitamin B12 deficiency impairs myelin maintenance and causes subacute combined degeneration, damaging the dorsal columns and lateral corticospinal tracts together. Dorsal column loss produces impaired vibration and proprioception with a positive Romberg, while corticospinal involvement produces spastic weakness and hyperreflexia. The elevated methylmalonic acid and macrocytosis confirm B12 deficiency.",
    "why": [
      "Isolated corticospinal degeneration would give spasticity without the prominent sensory ataxia seen here.",
      "Anterior horn cell loss causes flaccid weakness and atrophy with normal sensation.",
      "A pure peripheral neuropathy would not produce upgoing toes and hyperreflexia.",
      "Frataxin deficiency (Friedreich ataxia) is inherited and presents in childhood with cerebellar and cardiac features.",
      "Correct: B12 deficiency degenerates the dorsal columns and lateral corticospinal tracts together, explaining the mixed picture."
    ]
  },
  {
    "id": "s1-0008",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Behavioral Sciences",
    "topic": "Defense mechanisms",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 40-year-old man harbors intense, unacknowledged resentment toward his younger brother, who recently inherited the family business. Whenever they meet, the man is conspicuously warm, showers his brother with expensive gifts, and publicly praises him far beyond what the situation warrants.",
    "lead": "Which defense mechanism is he most likely using?",
    "options": [
      "Reaction formation",
      "Displacement",
      "Projection",
      "Sublimation",
      "Isolation of affect"
    ],
    "answer": 0,
    "exp": "Transforming an unacceptable impulse into its exaggerated opposite is reaction formation. His hostility is converted into ostentatious affection and generosity that overshoot a genuine response. The excessive, unwarranted quality of the behavior is the clue that it defends against the opposite feeling.",
    "why": [
      "Correct: an unacceptable hostile impulse is expressed as its exaggerated opposite, warmth and generosity.",
      "Displacement would redirect the anger onto a safer target, such as an employee, not convert it into affection.",
      "Projection would attribute his own resentment to his brother ('he hates me').",
      "Sublimation would channel the impulse into a socially productive outlet, such as competitive achievement.",
      "Isolation of affect would separate the feeling from the memory, discussing the inheritance without emotion."
    ]
  },
  {
    "id": "s1-0009",
    "system": "Musculoskeletal / Skin",
    "discipline": "Genetics",
    "topic": "Duchenne muscular dystrophy",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 4-year-old boy has delayed walking and frequent falls. To rise from the floor he pushes on his thighs to climb upright. He has enlarged, firm calves and a waddling gait. A maternal uncle used a wheelchair from adolescence and died in his twenties.\n\n| Test | Value | Reference |\n|---|---|---|\n| Creatine kinase | 14,200 U/L | 30-200 |",
    "lead": "Which molecular defect is most likely?",
    "options": [
      "A defect in type I collagen",
      "A CTG trinucleotide repeat expansion in DMPK",
      "A frameshift mutation in the dystrophin gene",
      "Autoantibodies against the nicotinic acetylcholine receptor",
      "An in-frame missense mutation that preserves partial dystrophin function"
    ],
    "answer": 2,
    "exp": "Proximal weakness with Gowers sign, calf pseudohypertrophy, very high creatine kinase, and X-linked family history is Duchenne muscular dystrophy. Frameshift mutations in the dystrophin gene abolish functional dystrophin, so myofibers lack the link between cytoskeleton and extracellular matrix and undergo progressive degeneration. Absent dystrophin distinguishes Duchenne from the milder Becker form.",
    "why": [
      "Type I collagen defects cause osteogenesis imperfecta with fractures and blue sclerae, not myopathy.",
      "A DMPK CTG expansion causes myotonic dystrophy with grip myotonia, cataracts, and distal weakness.",
      "Correct: a frameshift mutation eliminates dystrophin, producing severe early-onset Duchenne dystrophy.",
      "Acetylcholine receptor autoantibodies cause myasthenia gravis with fatigable weakness and normal creatine kinase.",
      "An in-frame mutation preserving partial dystrophin produces the milder Becker dystrophy, not this severe early presentation."
    ]
  },
  {
    "id": "s1-0010",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Pemphigus vulgaris",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 52-year-old woman has painful oral erosions and flaccid skin blisters that rupture easily, leaving raw areas. Gentle lateral pressure on adjacent normal-looking skin causes the epidermis to slide (positive Nikolsky sign). Histology shows separation of keratinocytes just above the basal layer.\n\n**[IMAGE: direct immunofluorescence showing a net-like (reticular) pattern of intercellular IgG throughout the epidermis]**",
    "lead": "Autoantibodies against which target best explain these findings?",
    "options": [
      "Hemidesmosomal proteins BP180 and BP230",
      "Tissue transglutaminase with IgA in dermal papillae",
      "Desmoglein 1 cleaved by staphylococcal exfoliative toxin",
      "Desmoglein 3 in desmosomes",
      "Nickel haptens producing a type IV reaction"
    ],
    "answer": 3,
    "exp": "Flaccid bullae, mucosal involvement, a positive Nikolsky sign, suprabasal acantholysis, and intercellular net-like IgG define pemphigus vulgaris. Autoantibodies against desmoglein 3 disrupt desmosomes that hold keratinocytes together, so cells separate within the epidermis. The intraepidermal (rather than subepidermal) split explains the fragile, easily ruptured blisters.",
    "why": [
      "Anti-BP180/BP230 antibodies cause bullous pemphigoid, with tense subepidermal blisters, a linear pattern, and a negative Nikolsky sign.",
      "IgA against tissue transglutaminase in dermal papillae is dermatitis herpetiformis, with pruritic grouped vesicles linked to celiac disease.",
      "Staphylococcal exfoliative toxin cleaves desmoglein 1 in the superficial epidermis (scalded skin syndrome); this is toxin-mediated rather than autoantibody-mediated and spares mucosa.",
      "Correct: anti-desmoglein 3 antibodies dissolve desmosomes, producing suprabasal acantholysis and net-like intercellular IgG.",
      "A type IV reaction to nickel causes allergic contact dermatitis, not acantholytic blistering."
    ]
  },
  {
    "id": "s1-0011",
    "system": "Cardiovascular",
    "discipline": "Physiology",
    "topic": "Hypertrophic cardiomyopathy",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 17-year-old competitive athlete has had two episodes of near-syncope during sprints. A harsh crescendo-decrescendo systolic murmur is heard at the left lower sternal border. The murmur grows louder when he strains during a Valsalva maneuver and when he stands, and softens when he squats. His father died suddenly at age 40.",
    "lead": "Which mechanism best explains why the murmur intensifies with Valsalva?",
    "options": [
      "Increased venous return augments flow across a fixed valvular narrowing",
      "Increased afterload raises the transvalvular pressure gradient",
      "Acute papillary muscle rupture worsens regurgitation",
      "Increased left ventricular end-diastolic volume widens the outflow tract",
      "Decreased preload reduces ventricular cavity size and worsens dynamic outflow obstruction"
    ],
    "answer": 4,
    "exp": "This is hypertrophic cardiomyopathy with dynamic left ventricular outflow tract obstruction from systolic anterior motion of the mitral valve. Maneuvers that decrease preload, such as Valsalva strain and standing, shrink the ventricular cavity and bring the hypertrophied septum and mitral leaflet closer together, worsening obstruction and intensifying the murmur. Squatting increases preload and afterload, enlarging the cavity and softening the murmur.",
    "why": [
      "A fixed valvular murmur such as aortic stenosis softens with reduced preload, the opposite of this behavior.",
      "Valsalva strain lowers, not raises, afterload and preload, so this does not explain the louder murmur.",
      "Papillary muscle rupture causes acute severe mitral regurgitation and pulmonary edema, not a maneuver-sensitive outflow murmur.",
      "A wider outflow tract would reduce obstruction and soften the murmur.",
      "Correct: reduced preload decreases cavity size, accentuating dynamic outflow obstruction and the murmur."
    ]
  },
  {
    "id": "s1-0012",
    "system": "Cardiovascular",
    "discipline": "Pharmacology",
    "topic": "Class III antiarrhythmic mechanism",
    "difficulty": "moderate",
    "anchor": "ecg",
    "vignette": "A 66-year-old woman with atrial fibrillation is started on sotalol for rhythm control. Three days later she has palpitations and a brief syncopal episode.\n\n**[ECG: markedly prolonged QT interval followed by a run of polymorphic ventricular tachycardia with a twisting axis]**",
    "lead": "The QT prolongation results from blockade of which current?",
    "options": [
      "The fast inward sodium current during phase 0",
      "The L-type calcium current during phase 2",
      "The rapid delayed-rectifier potassium current during phase 3",
      "The funny (pacemaker) current in the sinoatrial node",
      "The sodium-potassium ATPase pump current"
    ],
    "answer": 2,
    "exp": "Sotalol is a class III antiarrhythmic that blocks the rapid delayed-rectifier potassium current (IKr), prolonging phase 3 repolarization and the QT interval. Excessive prolongation predisposes to early afterdepolarizations that trigger torsades de pointes, the polymorphic ventricular tachycardia shown. This is the shared mechanism of QT prolongation for class III agents.",
    "why": [
      "Blocking the phase 0 sodium current is the class I mechanism, which slows conduction and widens QRS rather than prolonging QT via repolarization.",
      "L-type calcium channel blockade shortens the plateau and is the class IV mechanism, slowing AV nodal conduction.",
      "Correct: blocking IKr prolongs repolarization and the QT interval, predisposing to torsades.",
      "Funny current inhibition slows the sinoatrial rate without prolonging ventricular repolarization.",
      "The sodium-potassium ATPase is the target of digoxin, which shortens rather than prolongs the QT."
    ]
  },
  {
    "id": "s1-0013",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Alpha-1 antitrypsin deficiency",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 41-year-old man who has never smoked has progressive dyspnea. Imaging shows emphysema that is most severe at the lung bases. He also has mildly abnormal liver enzymes; a liver biopsy shows periodic acid-Schiff-positive, diastase-resistant globules within hepatocytes. Serum alpha-1 antitrypsin is low.",
    "lead": "Which mechanism best explains his lung disease?",
    "options": [
      "Unopposed neutrophil elastase degrading alveolar walls",
      "Antibodies directed against the alveolar basement membrane",
      "Mucous gland hyperplasia from chronic tobacco exposure",
      "A CFTR mutation producing inspissated airway secretions",
      "Deficiency of a lysosomal alpha-galactosidase"
    ],
    "answer": 0,
    "exp": "Panacinar, basilar-predominant emphysema in a young nonsmoker with liver disease and low serum levels indicates alpha-1 antitrypsin deficiency. Without this protease inhibitor, neutrophil elastase acts unopposed and destroys alveolar elastin, producing emphysema. The misfolded Z-variant protein polymerizes and accumulates in hepatocytes as the PAS-positive, diastase-resistant globules seen on biopsy.",
    "why": [
      "Correct: loss of the elastase inhibitor allows neutrophil elastase to destroy alveolar walls, causing panacinar emphysema.",
      "Anti-basement membrane antibodies cause Goodpasture syndrome with hemoptysis and glomerulonephritis, not emphysema.",
      "Tobacco-related mucous gland hyperplasia causes chronic bronchitis and centriacinar (apical) emphysema, and he is a nonsmoker.",
      "A CFTR mutation causes cystic fibrosis with bronchiectasis and pancreatic insufficiency, not low alpha-1 antitrypsin with hepatic globules.",
      "Alpha-galactosidase deficiency (Fabry disease) causes neuropathic pain, angiokeratomas, and renal disease, not emphysema."
    ]
  },
  {
    "id": "s1-0014",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Physiology",
    "topic": "Gitelman syndrome",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 24-year-old man has fatigue and intermittent muscle cramps. His blood pressure is normal. He takes no diuretics or laxatives.\n\n| Test | Value | Reference |\n|---|---|---|\n| Potassium | 2.9 mEq/L | 3.5-5.0 |\n| Bicarbonate | 32 mEq/L | 22-28 |\n| Magnesium | 1.2 mg/dL | 1.7-2.2 |\n| Urine calcium | low | - |",
    "lead": "A defect in which transporter best explains these findings?",
    "options": [
      "The Na-K-2Cl cotransporter of the thick ascending limb",
      "The Na-Cl cotransporter of the distal convoluted tubule",
      "The epithelial sodium channel of the collecting duct",
      "Aldosterone overproduction by an adrenal adenoma",
      "The vasopressin-regulated aquaporin-2 water channel"
    ],
    "answer": 1,
    "exp": "Hypokalemic metabolic alkalosis with hypomagnesemia and hypocalciuria in a normotensive patient is Gitelman syndrome, caused by a loss-of-function defect in the distal convoluted tubule Na-Cl cotransporter. The physiology mimics chronic thiazide therapy, which likewise lowers urinary calcium and wastes magnesium. Normal blood pressure and hypocalciuria distinguish it from other tubular disorders.",
    "why": [
      "A Na-K-2Cl cotransporter defect (Bartter syndrome) mimics a loop diuretic and causes hypercalciuria, not hypocalciuria.",
      "Correct: a distal Na-Cl cotransporter defect reproduces a thiazide effect, with hypocalciuria and hypomagnesemia.",
      "An overactive epithelial sodium channel (Liddle syndrome) causes hypertension with low renin and aldosterone.",
      "An aldosterone-producing adenoma (Conn syndrome) causes hypertension, not a normotensive presentation.",
      "Aquaporin-2 dysfunction causes nephrogenic diabetes insipidus with polyuria, not this electrolyte pattern."
    ]
  },
  {
    "id": "s1-0015",
    "system": "Gastrointestinal",
    "discipline": "Physiology",
    "topic": "Zollinger-Ellison syndrome",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 46-year-old woman has recurrent duodenal ulcers, some located in the distal duodenum, that persist despite standard acid suppression. She also has chronic watery diarrhea. Fasting serum gastrin is high, and after intravenous secretin the gastrin level rises further rather than falling.",
    "lead": "Which mechanism best explains her ulcers?",
    "options": [
      "Helicobacter pylori-induced antral gastritis",
      "Autoimmune destruction of gastric parietal cells",
      "Excess secretion of vasoactive intestinal peptide",
      "Autonomous gastrin secretion from a neuroendocrine tumor",
      "Loss of somatostatin from antral D-cell hyperplasia"
    ],
    "answer": 3,
    "exp": "Refractory, distally located ulcers with diarrhea and a paradoxical rise in gastrin after secretin indicate Zollinger-Ellison syndrome from a gastrin-secreting neuroendocrine tumor (gastrinoma). Normal gastrin-producing cells are suppressed by secretin, but gastrinoma cells paradoxically increase secretion, which is the basis of the diagnostic test. Sustained hypergastrinemia drives acid hypersecretion, ulcers, and diarrhea, and it may occur with MEN1.",
    "why": [
      "H. pylori gastritis causes common peptic ulcers but does not raise fasting gastrin with a paradoxical secretin response.",
      "Autoimmune parietal cell destruction reduces acid and causes pernicious anemia, the opposite of acid hypersecretion.",
      "Excess VIP causes profuse secretory diarrhea with hypokalemia and achlorhydria, not acid-driven ulcers.",
      "Correct: autonomous tumor gastrin secretion, confirmed by the paradoxical secretin response, drives acid hypersecretion and ulcers.",
      "Loss of somatostatin would disinhibit gastrin but would not produce a paradoxical secretin-stimulated rise."
    ]
  },
  {
    "id": "s1-0016",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Wilson disease",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 19-year-old college student has several months of worsening hand tremor, slurred speech, and difficulty with fine movements, along with new irritability and declining grades. Examination shows a resting and postural tremor and brownish rings at the corneal margins. Liver enzymes are elevated. Serum ceruloplasmin is low and 24-hour urinary copper is high.",
    "lead": "Which defect underlies this disorder?",
    "options": [
      "An HFE mutation causing intestinal iron overload",
      "Reduced hepatic glucuronidation of bilirubin",
      "Autoimmune destruction of intrahepatic bile ducts",
      "Accumulation of misfolded alpha-1 antitrypsin",
      "A mutation in the ATP7B copper-transporting ATPase"
    ],
    "answer": 4,
    "exp": "A young adult with combined hepatic, movement, and psychiatric disease plus Kayser-Fleischer rings and low ceruloplasmin has Wilson disease, caused by ATP7B mutations. The defective transporter impairs biliary copper excretion and copper incorporation into ceruloplasmin, so copper accumulates in the liver, brain, and cornea. Elevated urinary copper reflects the systemic overload.",
    "why": [
      "HFE-related hemochromatosis causes iron overload with diabetes and skin bronzing, not corneal copper rings or low ceruloplasmin.",
      "Reduced bilirubin glucuronidation (Gilbert or Crigler-Najjar) causes unconjugated hyperbilirubinemia without neurologic disease.",
      "Autoimmune bile duct destruction (primary biliary cholangitis) causes cholestatic pruritus in middle-aged women with antimitochondrial antibodies.",
      "Alpha-1 antitrypsin accumulation causes liver disease and emphysema, not copper-related corneal rings.",
      "Correct: ATP7B dysfunction blocks biliary copper excretion, causing hepatic, neurologic, and corneal copper deposition."
    ]
  },
  {
    "id": "s1-0017",
    "system": "Reproductive & Endocrine",
    "discipline": "Physiology",
    "topic": "Complete androgen insensitivity",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 16-year-old with a female appearance is evaluated for not yet having menstruated. She has normal breast development but sparse axillary and pubic hair. Pelvic examination reveals a short, blind-ending vagina with no palpable cervix or uterus, and there are bilateral masses in the inguinal canals. Serum testosterone is in the normal male range, and the karyotype is 46,XY.",
    "lead": "Which defect best explains this presentation?",
    "options": [
      "Deficiency of 5-alpha-reductase",
      "A defective androgen receptor",
      "Deficiency of 21-hydroxylase",
      "Deficiency of aromatase",
      "Müllerian duct agenesis in a 46,XX individual"
    ],
    "answer": 1,
    "exp": "A 46,XY individual with female external genitalia, absent uterus, intra-abdominal or inguinal testes, and male-range testosterone has complete androgen insensitivity from a defective androgen receptor. Testosterone and dihydrotestosterone cannot act, so external genitalia develop along the default female pathway, while testicular anti-Mullerian hormone still regresses the uterus and tubes. Breast development results from peripheral aromatization of androgens to estrogen.",
    "why": [
      "5-alpha-reductase deficiency causes undervirilized males at birth who virilize at puberty, not a fully female phenotype with breasts.",
      "Correct: a nonfunctional androgen receptor prevents androgen action, yielding female genitalia with testes and no uterus.",
      "21-hydroxylase deficiency virilizes 46,XX individuals and causes salt wasting, not a 46,XY female phenotype.",
      "Aromatase deficiency prevents estrogen synthesis and causes virilization, the opposite of breast development.",
      "Mullerian agenesis occurs in 46,XX individuals with normal ovaries and female androgen levels, not a 46,XY karyotype with testes."
    ]
  },
  {
    "id": "s1-0018",
    "system": "Reproductive & Endocrine",
    "discipline": "Biochemistry",
    "topic": "21-hydroxylase deficiency",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A newborn assigned female at birth has ambiguous genitalia with clitoromegaly. On day 10 of life she becomes lethargic, dehydrated, and hypotensive.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sodium | 124 mEq/L | 135-145 |\n| Potassium | 6.8 mEq/L | 3.5-5.0 |\n| 17-hydroxyprogesterone | markedly elevated | - |",
    "lead": "A deficiency of which enzyme is most likely?",
    "options": [
      "21-hydroxylase",
      "17-alpha-hydroxylase",
      "11-beta-hydroxylase",
      "Aromatase",
      "5-alpha-reductase"
    ],
    "answer": 0,
    "exp": "Virilization of a genetically female infant with salt-wasting (hyponatremia, hyperkalemia, hypotension) and a markedly elevated 17-hydroxyprogesterone is classic salt-wasting 21-hydroxylase deficiency, the most common congenital adrenal hyperplasia. Impaired synthesis of cortisol and aldosterone shunts precursors into the androgen pathway, causing virilization, while aldosterone deficiency causes the salt-wasting crisis. Elevated 17-hydroxyprogesterone is the diagnostic marker.",
    "why": [
      "Correct: 21-hydroxylase deficiency reduces cortisol and aldosterone, causing salt wasting with androgen excess and high 17-hydroxyprogesterone.",
      "17-alpha-hydroxylase deficiency reduces androgens and cortisol, causing hypertension with hypokalemia and absent virilization.",
      "11-beta-hydroxylase deficiency causes virilization but with hypertension and hypokalemia from deoxycorticosterone excess, not salt wasting.",
      "Aromatase deficiency causes maternal and fetal virilization without a salt-wasting crisis or elevated 17-hydroxyprogesterone.",
      "5-alpha-reductase deficiency undervirilizes 46,XY infants and does not cause salt wasting."
    ]
  },
  {
    "id": "s1-0019",
    "system": "Reproductive & Endocrine",
    "discipline": "Pharmacology",
    "topic": "Thionamide mechanism (propylthiouracil)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 28-year-old woman in the first trimester of pregnancy has heat intolerance, palpitations, a diffuse goiter, and mild proptosis. Thyroid-stimulating hormone is suppressed and free thyroxine is elevated. She is started on propylthiouracil.",
    "lead": "Which action best describes how this drug lowers thyroid hormone levels?",
    "options": [
      "It blocks iodide uptake at the sodium-iodide symporter",
      "It destroys thyroid follicular cells through beta radiation",
      "It suppresses thyroid-stimulating hormone release from the pituitary",
      "It inhibits thyroid peroxidase and peripheral conversion of thyroxine to triiodothyronine",
      "It increases the concentration of thyroxine-binding globulin"
    ],
    "answer": 3,
    "exp": "Propylthiouracil inhibits thyroid peroxidase, blocking iodide organification and coupling required to synthesize thyroid hormone. It additionally inhibits peripheral 5'-deiodinase, reducing conversion of thyroxine to the more active triiodothyronine, which is useful in severe hyperthyroidism. These actions lower circulating active hormone without destroying the gland.",
    "why": [
      "Blockade of the sodium-iodide symporter is the action of perchlorate, not a thionamide.",
      "Beta-radiation destruction of follicular cells describes radioactive iodine therapy.",
      "Thionamides act on the gland and periphery, not by suppressing pituitary TSH release.",
      "Correct: propylthiouracil inhibits thyroid peroxidase and peripheral deiodination, lowering active hormone.",
      "Thyroxine-binding globulin levels are influenced by estrogen and do not mediate a thionamide effect."
    ]
  },
  {
    "id": "s1-0020",
    "system": "Multisystem",
    "discipline": "Microbiology",
    "topic": "Acute rheumatic fever (molecular mimicry)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 9-year-old boy develops migratory arthritis of the large joints, a new heart murmur, painless nodules over the elbows, and a serpiginous truncal rash three weeks after an untreated sore throat. An antistreptolysin O titer is elevated.",
    "lead": "Which mechanism best explains his cardiac involvement?",
    "options": [
      "Direct bacterial invasion of the myocardium",
      "Deposition of circulating immune complexes in the tissue",
      "Antibodies against streptococcal M protein cross-reacting with cardiac myosin",
      "A toxic shock toxin acting as a superantigen",
      "IgA deposition within small-vessel walls"
    ],
    "answer": 2,
    "exp": "Acute rheumatic fever follows group A streptococcal pharyngitis and results from molecular mimicry, a type II hypersensitivity reaction. Antibodies raised against streptococcal M protein cross-react with structurally similar cardiac myosin and valvular tissue, producing carditis. The migratory arthritis, subcutaneous nodules, and erythema marginatum complete the picture.",
    "why": [
      "Rheumatic carditis is immune-mediated, not caused by direct bacterial invasion of the heart.",
      "Immune-complex deposition explains poststreptococcal glomerulonephritis, a different sequela affecting the kidney.",
      "Correct: anti-M protein antibodies cross-react with cardiac myosin, causing autoimmune carditis.",
      "Superantigen-mediated toxic shock causes fever, rash, and hypotension, not this delayed valvular disease.",
      "IgA vasculitis (Henoch-Schonlein) causes palpable purpura, arthritis, and nephritis, not carditis after strep throat."
    ]
  },
  {
    "id": "s1-0021",
    "system": "Multisystem",
    "discipline": "Pathology",
    "topic": "Burkitt lymphoma",
    "difficulty": "easy",
    "anchor": "image",
    "vignette": "An 8-year-old boy has a rapidly enlarging mass of the jaw and face that has doubled in size over two weeks. Serologic testing is consistent with prior Epstein-Barr virus infection.\n\n**[IMAGE: sheets of intermediate-sized lymphocytes interspersed with pale tingible-body macrophages producing a starry-sky appearance; proliferation index near 100%]**",
    "lead": "Which genetic event most likely underlies this tumor?",
    "options": [
      "A translocation fusing BCR and ABL1",
      "A translocation placing MYC next to the immunoglobulin heavy-chain locus",
      "A translocation overexpressing BCL2",
      "A translocation producing a PML-RARA fusion",
      "A translocation overexpressing cyclin D1"
    ],
    "answer": 1,
    "exp": "A rapidly growing jaw mass in a child with EBV association and a starry-sky histology with an extremely high proliferation index is Burkitt lymphoma. The defining lesion is t(8;14), which places the MYC oncogene under the control of the immunoglobulin heavy-chain enhancer, driving constitutive MYC expression and explosive proliferation. Tingible-body macrophages clearing apoptotic cells create the starry-sky look.",
    "why": [
      "A BCR-ABL1 fusion, t(9;22), defines chronic myeloid leukemia, not a starry-sky lymphoma.",
      "Correct: t(8;14) juxtaposes MYC with the immunoglobulin heavy-chain locus, driving the high-grade proliferation of Burkitt lymphoma.",
      "BCL2 overexpression, t(14;18), characterizes follicular lymphoma, which is indolent.",
      "PML-RARA, t(15;17), defines acute promyelocytic leukemia treated with all-trans retinoic acid.",
      "Cyclin D1 overexpression, t(11;14), characterizes mantle cell lymphoma in older adults."
    ]
  },
  {
    "id": "s1-0022",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Biostatistics",
    "topic": "Predictive values",
    "difficulty": "moderate",
    "anchor": "table",
    "vignette": "A new blood test for a disease is evaluated in 1,000 people. The results compared with the reference standard are shown.\n\n| | Disease present | Disease absent |\n|---|---|---|\n| Test positive | 90 | 90 |\n| Test negative | 10 | 810 |",
    "lead": "What is the positive predictive value of this test in this population?",
    "options": [
      "90%",
      "10%",
      "82%",
      "50%",
      "99%"
    ],
    "answer": 3,
    "exp": "Positive predictive value is the proportion of test-positive people who truly have disease, calculated as true positives divided by all positives. Here that is 90 divided by (90 + 90), which equals 50%. Note that even with 90% sensitivity and 90% specificity, the modest disease prevalence of 10% keeps the positive predictive value low.",
    "why": [
      "90% is the sensitivity and the specificity, not the positive predictive value.",
      "10% is the disease prevalence in this sample, not the predictive value.",
      "82% does not correspond to any correct calculation from the table.",
      "Correct: PPV = 90 / (90 + 90) = 50%.",
      "About 99% is the negative predictive value, 810 / (810 + 10), not the positive predictive value."
    ]
  },
  {
    "id": "s1-0023",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Epidemiology",
    "topic": "Lead-time bias",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A new screening test detects a cancer an average of two years earlier than it would otherwise be diagnosed. When investigators compare screened and unscreened patients, survival measured from the time of diagnosis appears longer in the screened group. However, the age at death and the overall disease-specific mortality are unchanged between the groups.",
    "lead": "Which bias best explains the apparent survival benefit?",
    "options": [
      "Lead-time bias",
      "Length-time bias",
      "Selection bias favoring healthier participants",
      "Recall bias",
      "Confounding by indication"
    ],
    "answer": 0,
    "exp": "When a test moves the moment of diagnosis earlier without changing the time of death, survival measured from diagnosis lengthens artificially even though patients do not live longer. This is lead-time bias, and unchanged mortality is the tell that the apparent benefit is illusory. Screening efficacy must be judged by disease-specific mortality, not survival time from diagnosis.",
    "why": [
      "Correct: earlier diagnosis lengthens measured survival without extending life, and mortality is unchanged.",
      "Length-time bias arises when screening preferentially detects slow-growing, less aggressive tumors, which is not described here.",
      "Selection bias toward healthier volunteers would alter baseline mortality, but disease-specific mortality is unchanged.",
      "Recall bias affects retrospective exposure reporting, not survival timing in screening.",
      "Confounding by indication involves treatment assignment based on prognosis, which is not the mechanism here."
    ]
  },
  {
    "id": "s1-0024",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Adolescent confidentiality",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 16-year-old girl comes to the clinic alone requesting testing after unprotected intercourse. She is worried she may have a sexually transmitted infection and asks that her parents not be informed. She understands the testing and its implications, and there is no indication of abuse or coercion.",
    "lead": "Which of the following is the most appropriate next step?",
    "options": [
      "Require parental consent before performing any testing",
      "Decline to evaluate her unless a parent is present",
      "Provide confidential testing and treatment for sexually transmitted infections",
      "Notify her parents because she is a minor",
      "Report the encounter to child protective services"
    ],
    "answer": 2,
    "exp": "Minors can consent to the diagnosis and treatment of sexually transmitted infections confidentially, and this care should be provided without requiring parental notification. Respecting confidentiality encourages adolescents to seek needed care. The physician can encourage parental involvement but should not mandate it in the absence of abuse or safety concerns.",
    "why": [
      "Requiring parental consent would inappropriately withhold confidential STI care to which she is entitled.",
      "Declining to evaluate her without a parent present creates a barrier to necessary care.",
      "Correct: adolescents may confidentially consent to STI testing and treatment, which should be provided.",
      "Notifying parents against her wishes breaches the confidentiality afforded for this care.",
      "There is no evidence of abuse, so a child protective services report is not indicated."
    ]
  },
  {
    "id": "s1-0025",
    "system": "Social Sciences / Ethics",
    "discipline": "Communication",
    "topic": "Decision-making capacity and refusal",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 58-year-old man with a bleeding gastric ulcer has a hemoglobin of 6.5 g/dL. He is alert and oriented and clearly explains that, as a devout Jehovah's Witness, he does not want a blood transfusion. He accurately describes the risks of refusing, including that he could die, and he articulates reasons consistent with his long-held beliefs. His family urges the team to transfuse him anyway.",
    "lead": "Which of the following is the most appropriate course of action?",
    "options": [
      "Obtain a court order authorizing transfusion",
      "Transfuse under the emergency exception to consent",
      "Conclude that his refusal itself demonstrates a lack of capacity",
      "Ask the family to authorize transfusion on his behalf",
      "Respect his informed refusal and pursue alternative management"
    ],
    "answer": 4,
    "exp": "A competent, informed adult has the right to refuse any treatment, including a life-saving transfusion, when the refusal reflects stable, deeply held values. This patient demonstrates capacity: he understands his situation, appreciates the consequences, reasons consistently, and communicates a clear choice. The team should honor his refusal and optimize non-transfusion strategies rather than override him.",
    "why": [
      "A court order is inappropriate when a capacitated adult has made an informed refusal.",
      "The emergency exception applies only when consent cannot be obtained; here a capacitated patient has explicitly refused.",
      "Refusing recommended care does not by itself indicate incapacity when the patient understands and reasons clearly.",
      "Family cannot override the autonomous decision of a patient who retains capacity.",
      "Correct: an informed, capacitated adult may refuse transfusion, and his decision should be respected."
    ]
  },
  {
    "id": "s1-0026",
    "system": "General Principles",
    "discipline": "Biochemistry",
    "topic": "Ornithine transcarbamylase deficiency",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 3-day-old boy who fed well initially becomes lethargic, vomits, and breathes rapidly. He has no hepatomegaly.\n\n| Test | Value | Reference |\n|---|---|---|\n| Ammonia | very high | low |\n| Blood urea nitrogen | low | normal |\n| Blood pH | 7.52 (respiratory alkalosis) | 7.35-7.45 |\n| Urine orotic acid | elevated | - |\n\nThere is no megaloblastic anemia.",
    "lead": "A deficiency of which enzyme best explains these findings?",
    "options": [
      "Carbamoyl phosphate synthetase I",
      "Argininosuccinate synthetase",
      "Ornithine transcarbamylase",
      "UMP synthase",
      "Arginase"
    ],
    "answer": 2,
    "exp": "Neonatal hyperammonemia with respiratory alkalosis, elevated urinary orotic acid, and no megaloblastic anemia is X-linked ornithine transcarbamylase deficiency, the most common urea cycle disorder. Accumulated carbamoyl phosphate spills into the pyrimidine pathway, raising orotic acid, while the blocked urea cycle causes hyperammonemia. The absence of megaloblastic anemia separates it from hereditary orotic aciduria.",
    "why": [
      "Carbamoyl phosphate synthetase I deficiency causes hyperammonemia but with low, not elevated, orotic acid.",
      "Argininosuccinate synthetase deficiency (citrullinemia) elevates citrulline.",
      "Correct: blocked ornithine transcarbamylase raises carbamoyl phosphate, shunting it to orotic acid, with hyperammonemia and no anemia.",
      "UMP synthase deficiency (hereditary orotic aciduria) causes orotic aciduria with megaloblastic anemia and normal ammonia.",
      "Arginase deficiency causes hyperargininemia with spastic diplegia and milder, later symptoms."
    ]
  },
  {
    "id": "s1-0027",
    "system": "General Principles",
    "discipline": "Genetics",
    "topic": "Fragile X syndrome",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "An 8-year-old boy has intellectual disability, a long narrow face with a prominent jaw and large protruding ears, hyperextensible joints, and enlarged testes noted at the start of puberty. He has features of autism spectrum disorder. Reviewing the pedigree, the condition appears more severe and earlier in successive generations.",
    "lead": "Which mechanism best explains this disorder?",
    "options": [
      "Deletion of the paternally derived chromosome 15q11-q13",
      "Trisomy of chromosome 21",
      "A microdeletion of chromosome 22q11",
      "Maternal uniparental disomy",
      "Expansion of a CGG trinucleotide repeat with hypermethylation of FMR1"
    ],
    "answer": 4,
    "exp": "Intellectual disability with a long face, large ears, macroorchidism, and worsening severity across generations is fragile X syndrome. It is caused by expansion of a CGG repeat in the FMR1 gene; large expansions become hypermethylated and silence the gene. Repeat expansion during transmission underlies anticipation, the earlier and more severe disease in later generations.",
    "why": [
      "Deletion of paternal 15q11-q13 causes Prader-Willi syndrome, with hyperphagia, obesity, and hypotonia.",
      "Trisomy 21 causes Down syndrome, with characteristic facies, hypotonia, and cardiac defects.",
      "A 22q11 microdeletion causes DiGeorge syndrome, with cardiac, parathyroid, and thymic defects.",
      "Maternal uniparental disomy is one mechanism of imprinting disorders, not the typical cause here.",
      "Correct: CGG repeat expansion with FMR1 hypermethylation causes fragile X, with anticipation."
    ]
  },
  {
    "id": "s1-0028",
    "system": "General Principles",
    "discipline": "Cell Biology",
    "topic": "I-cell disease",
    "difficulty": "hard",
    "anchor": null,
    "vignette": "A 6-month-old infant has coarse facial features, gingival overgrowth, restricted joint mobility, and developmental delay. Skeletal survey shows dysostosis multiplex. Laboratory testing reveals markedly elevated lysosomal enzyme activity in the plasma, while enzyme activity inside cultured cells is deficient.",
    "lead": "Which defect best explains these findings?",
    "options": [
      "Failure to tag lysosomal enzymes with mannose-6-phosphate, so they are secreted rather than delivered to lysosomes",
      "Deficiency of alpha-L-iduronidase",
      "Deficiency of lysosomal glucocerebrosidase",
      "Defective peroxisome biogenesis",
      "Deficiency of hexosaminidase A"
    ],
    "answer": 0,
    "exp": "Coarse facies, dysostosis, and the paradox of high plasma but low intracellular lysosomal enzymes indicate I-cell disease (mucolipidosis II). A defective N-acetylglucosaminyl-1-phosphotransferase fails to add the mannose-6-phosphate tag that targets enzymes to lysosomes, so the enzymes are secreted into the blood instead. Lysosomes therefore accumulate undegraded substrate.",
    "why": [
      "Correct: without the mannose-6-phosphate tag, lysosomal enzymes are missorted and secreted, raising plasma levels while lysosomes fail.",
      "Alpha-L-iduronidase deficiency (Hurler) is a single-enzyme deficiency, not a global trafficking failure with high plasma enzymes.",
      "Glucocerebrosidase deficiency (Gaucher) causes hepatosplenomegaly and bone crises, with a single enzyme deficient.",
      "Defective peroxisome biogenesis (Zellweger) causes hypotonia, seizures, and very-long-chain fatty acid accumulation.",
      "Hexosaminidase A deficiency (Tay-Sachs) causes a cherry-red macula and neurodegeneration without coarse facies or high plasma enzymes."
    ]
  },
  {
    "id": "s1-0029",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Immunology",
    "topic": "Hereditary angioedema",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 25-year-old woman has recurrent episodes of nonpitting, nonpruritic swelling of the lips, face, and hands, sometimes with painful bouts of abdominal cramping. The swelling is not accompanied by hives and does not respond to antihistamines. Episodes are sometimes triggered by dental procedures. Her father had similar attacks. Complement C4 is persistently low.",
    "lead": "A deficiency of which of the following best explains her condition?",
    "options": [
      "IgE-mediated mast cell activation by an allergen",
      "NADPH oxidase",
      "The low-density lipoprotein receptor",
      "C1 esterase inhibitor",
      "Adenosine deaminase"
    ],
    "answer": 3,
    "exp": "Recurrent angioedema without urticaria, unresponsive to antihistamines, with a low C4 and autosomal dominant inheritance is hereditary angioedema from C1 esterase inhibitor deficiency. Loss of this inhibitor permits unchecked generation of bradykinin (and complement activation), driving the swelling. This is why angiotensin-converting enzyme inhibitors, which further raise bradykinin, can precipitate attacks.",
    "why": [
      "IgE-mediated mast cell activation causes allergic angioedema with urticaria that responds to antihistamines.",
      "NADPH oxidase deficiency causes chronic granulomatous disease, not angioedema.",
      "LDL receptor defects cause familial hypercholesterolemia with xanthomas and early atherosclerosis.",
      "Correct: C1 esterase inhibitor deficiency permits excess bradykinin, causing recurrent angioedema with low C4.",
      "Adenosine deaminase deficiency causes severe combined immunodeficiency."
    ]
  },
  {
    "id": "s1-0030",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Biochemistry",
    "topic": "G6PD deficiency",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 19-year-old man of Mediterranean descent develops fatigue, scleral icterus, and dark urine two days after starting an antimalarial for travel prophylaxis. Hemoglobin has dropped acutely.\n\n**[IMAGE: peripheral smear showing red cells with a 'bite' taken out; a supravital stain reveals dark intracellular Heinz bodies]**",
    "lead": "Which mechanism best explains the hemolysis?",
    "options": [
      "A cytoskeletal membrane protein defect",
      "Deficiency of glucose-6-phosphate dehydrogenase, reducing NADPH and impairing regeneration of reduced glutathione",
      "A point mutation in the beta-globin chain",
      "Deficiency of pyruvate kinase",
      "Autoantibodies directed against red cell surface antigens"
    ],
    "answer": 1,
    "exp": "Episodic oxidative hemolysis after an oxidant drug, with bite cells and Heinz bodies, is X-linked glucose-6-phosphate dehydrogenase deficiency. G6PD generates NADPH in the pentose phosphate pathway, which is needed to keep glutathione reduced; without it, oxidative stress denatures hemoglobin into Heinz bodies. Splenic macrophages remove those inclusions, producing bite cells and hemolysis.",
    "why": [
      "A cytoskeletal defect (hereditary spherocytosis) causes chronic hemolysis with spherocytes, not episodic oxidative hemolysis after drugs.",
      "Correct: low G6PD reduces NADPH and reduced glutathione, so oxidant stress precipitates hemoglobin as Heinz bodies.",
      "A beta-globin point mutation (sickle cell) causes vaso-occlusion and sickled cells.",
      "Pyruvate kinase deficiency causes chronic hemolysis with echinocytes, not oxidant-triggered episodes.",
      "Autoantibodies against red cells cause a positive Coombs autoimmune hemolysis with spherocytes, not Heinz bodies."
    ]
  },
  {
    "id": "s1-0031",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Pathology",
    "topic": "Multiple sclerosis",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 31-year-old woman has had separate episodes over three years: painful loss of vision in one eye that later recovered, and, months afterward, weakness and numbness of a leg. On lateral gaze the adducting eye fails to fully cross while the abducting eye shows nystagmus. Her symptoms worsen after a hot shower. Cerebrospinal fluid shows oligoclonal bands.\n\n**[IMAGE: brain MRI with multiple ovoid periventricular white-matter lesions oriented perpendicular to the ventricles]**",
    "lead": "Which process best explains her disease?",
    "options": [
      "Autoantibodies against the postsynaptic acetylcholine receptor",
      "Segmental demyelination confined to peripheral nerves",
      "Progressive loss of anterior horn motor neurons",
      "Small-vessel lacunar infarction",
      "Immune-mediated demyelination of central white matter with relative axonal sparing"
    ],
    "answer": 4,
    "exp": "Neurologic episodes separated in time and space, an internuclear ophthalmoplegia, heat sensitivity, oligoclonal bands, and periventricular plaques define multiple sclerosis. The disease is a T-cell-mediated attack on central nervous system myelin with relative preservation of axons early on. The internuclear ophthalmoplegia reflects a demyelinating lesion of the medial longitudinal fasciculus.",
    "why": [
      "Acetylcholine receptor autoantibodies cause myasthenia gravis with fatigable weakness and normal sensation.",
      "Peripheral segmental demyelination (Guillain-Barre or CIDP) affects peripheral nerves, not central white matter with oligoclonal bands.",
      "Anterior horn cell loss (amyotrophic lateral sclerosis) causes mixed upper and lower motor neuron signs without sensory or visual relapses.",
      "Lacunar infarcts cause discrete vascular syndromes, not relapsing demyelination with oligoclonal bands.",
      "Correct: autoimmune central demyelination with axonal sparing produces the relapsing-remitting picture and MRI plaques."
    ]
  },
  {
    "id": "s1-0032",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Pharmacology",
    "topic": "Benzodiazepine mechanism",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 48-year-old man admitted for alcohol withdrawal becomes tremulous and agitated with a rising heart rate. He is treated with lorazepam, and his symptoms improve.",
    "lead": "Which action best describes how this drug works?",
    "options": [
      "It directly opens chloride channels independent of the neurotransmitter",
      "It blocks NMDA-type glutamate receptors",
      "It increases the frequency of chloride channel opening at the GABA-A receptor",
      "It increases the duration of chloride channel opening at the GABA-A receptor",
      "It inhibits neuronal reuptake of GABA"
    ],
    "answer": 2,
    "exp": "Benzodiazepines are positive allosteric modulators of the GABA-A receptor that increase the frequency of chloride channel opening in the presence of GABA. The resulting chloride influx hyperpolarizes neurons, producing sedation and anxiolysis useful in withdrawal. Because they require endogenous GABA to act, they have a wider safety margin than barbiturates.",
    "why": [
      "Direct channel opening independent of GABA occurs with barbiturates at high doses, not with benzodiazepines.",
      "NMDA receptor blockade describes agents such as ketamine, not benzodiazepines.",
      "Correct: benzodiazepines increase the frequency of GABA-A chloride channel opening.",
      "Increasing the duration of channel opening is the barbiturate mechanism.",
      "Benzodiazepines act at the GABA-A receptor and do not work by blocking GABA reuptake."
    ]
  },
  {
    "id": "s1-0033",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Behavioral Sciences",
    "topic": "Normal grief versus major depression",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 61-year-old woman is seen five weeks after her husband died. She describes waves of sadness and tearfulness that come with reminders of him, some difficulty sleeping, and a fleeting sense that she briefly heard his voice in their home. Between waves she can still enjoy time with her grandchildren, she is caring for herself, and she denies any thoughts of self-harm or worthlessness.",
    "lead": "Which of the following best characterizes her presentation?",
    "options": [
      "Normal (uncomplicated) grief",
      "Major depressive disorder",
      "Prolonged grief disorder",
      "Adjustment disorder with depressed mood",
      "Brief psychotic disorder"
    ],
    "answer": 0,
    "exp": "Grief that comes in waves tied to reminders, with preserved self-worth, retained capacity for pleasure, and intact functioning, is normal bereavement. Transient perceptual experiences of the deceased, such as briefly hearing their voice, are common and not psychotic. The absence of pervasive anhedonia, worthlessness, and suicidality argues against major depression.",
    "why": [
      "Correct: wave-like grief with preserved function, self-worth, and only fleeting perceptual experiences is normal bereavement.",
      "Major depression would show sustained low mood, pervasive anhedonia, worthlessness, or suicidality, which are absent.",
      "Prolonged grief disorder is diagnosed only after persistent, disabling grief lasting many months, not at five weeks.",
      "Adjustment disorder applies to a stressor other than the expected reaction to bereavement.",
      "Brief psychotic disorder requires true psychotic symptoms, not a normal fleeting sense of the deceased's presence."
    ]
  },
  {
    "id": "s1-0034",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Gout",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 55-year-old man wakes with the sudden onset of an exquisitely painful, red, swollen first metatarsophalangeal joint. The episode followed a dinner of red meat and several beers. Joint fluid is aspirated.\n\n**[IMAGE: polarized light microscopy of synovial fluid showing needle-shaped crystals that appear yellow when aligned parallel to the compensator (negative birefringence)]**",
    "lead": "The crystals are composed of which of the following?",
    "options": [
      "Calcium pyrophosphate dihydrate",
      "Calcium oxalate",
      "Cholesterol",
      "Monosodium urate",
      "Hydroxyapatite"
    ],
    "answer": 3,
    "exp": "Acute podagra after a purine- and alcohol-rich meal, with needle-shaped, negatively birefringent crystals, is gout. The crystals are monosodium urate, which appear yellow when parallel to the axis of the red compensator. Urate deposition triggers an intense neutrophilic inflammatory response.",
    "why": [
      "Calcium pyrophosphate crystals (pseudogout) are rhomboid and positively birefringent, favoring the knee and wrist.",
      "Calcium oxalate crystals appear in oxalate nephropathy and ethylene glycol toxicity, not classic podagra.",
      "Cholesterol crystals are flat plates seen in chronic effusions, not acute gout.",
      "Correct: needle-shaped, negatively birefringent crystals are monosodium urate.",
      "Hydroxyapatite deposition causes periarticular calcification and is not birefringent."
    ]
  },
  {
    "id": "s1-0035",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Basal cell carcinoma",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 68-year-old man with decades of sun exposure has a slowly enlarging, pearly papule with a rolled, translucent border and overlying fine telangiectasias on the side of his nose; it occasionally bleeds with minor trauma. Biopsy shows nests of basaloid cells with peripheral palisading. The lesion very rarely metastasizes.",
    "lead": "Dysregulation of which pathway most likely underlies this tumor?",
    "options": [
      "RAS-MAPK signaling driven by a BRAF V600E mutation",
      "Hedgehog signaling from loss of PTCH1",
      "Wnt/beta-catenin signaling",
      "JAK-STAT signaling",
      "Estrogen receptor signaling"
    ],
    "answer": 1,
    "exp": "A pearly, telangiectatic papule with rolled borders and palisading basaloid nests that rarely metastasizes is basal cell carcinoma, the most common skin cancer. It is driven by aberrant Hedgehog pathway activation, most often from loss-of-function of the PTCH1 tumor suppressor. This mechanism is the target of smoothened inhibitors used for advanced disease.",
    "why": [
      "BRAF V600E activation of RAS-MAPK is characteristic of melanoma, which is pigmented and metastasizes readily.",
      "Correct: loss of PTCH1 unleashes Hedgehog signaling, driving basal cell carcinoma.",
      "Wnt/beta-catenin dysregulation is associated with colorectal and other cancers, not the classic basal cell carcinoma.",
      "JAK-STAT dysregulation drives myeloproliferative neoplasms, not basal cell carcinoma.",
      "Estrogen receptor signaling drives certain breast cancers, not this cutaneous tumor."
    ]
  },
  {
    "id": "s1-0036",
    "system": "Cardiovascular",
    "discipline": "Physiology",
    "topic": "Tetralogy of Fallot",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 2-year-old boy has episodes of deep blue discoloration during crying that he instinctively relieves by squatting. A harsh systolic murmur is heard at the left sternal border.\n\n**[IMAGE: chest radiograph showing a boot-shaped heart with decreased pulmonary vascular markings]**",
    "lead": "Squatting improves his cyanosis primarily by which mechanism?",
    "options": [
      "Decreasing systemic venous return to the heart",
      "Pharmacologically relieving right ventricular outflow obstruction",
      "Increasing systemic vascular resistance, which reduces right-to-left shunting",
      "Increasing right-to-left shunting to bypass the lungs",
      "Promoting closure of the ductus arteriosus"
    ],
    "answer": 2,
    "exp": "A boot-shaped heart with cyanotic spells relieved by squatting is tetralogy of Fallot, in which right ventricular outflow obstruction drives blood right-to-left across a ventricular septal defect. Squatting kinks the femoral arteries and raises systemic vascular resistance, so more blood is forced through the pulmonary circuit instead of shunting right-to-left. This increases pulmonary blood flow and improves oxygenation.",
    "why": [
      "Decreasing venous return would worsen, not improve, a hypercyanotic spell.",
      "Squatting is a mechanical maneuver, not a pharmacologic relief of outflow obstruction.",
      "Correct: raising systemic vascular resistance reduces the right-to-left shunt and increases pulmonary flow.",
      "Increasing right-to-left shunting would deepen cyanosis, the opposite of the observed effect.",
      "Ductal closure would reduce pulmonary blood flow in duct-dependent lesions and would not relieve a spell."
    ]
  },
  {
    "id": "s1-0037",
    "system": "Cardiovascular",
    "discipline": "Pharmacology",
    "topic": "ACE inhibitor mechanism",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 60-year-old man with hypertension and diabetic kidney disease with proteinuria is started on lisinopril. Over the next two weeks he develops a persistent dry cough. Repeat labs show a small rise in serum creatinine and potassium.",
    "lead": "Which mechanism best accounts for both the antihypertensive effect and the cough?",
    "options": [
      "Blockade of angiotensin II type 1 receptors, with cough caused by bradykinin",
      "Direct inhibition of renin, with cough caused by histamine release",
      "Aldosterone receptor antagonism, with cough caused by hyperkalemia",
      "Calcium channel blockade, with cough caused by peripheral edema",
      "Inhibition of angiotensin-converting enzyme, lowering angiotensin II while raising bradykinin, which triggers cough"
    ],
    "answer": 4,
    "exp": "Lisinopril inhibits angiotensin-converting enzyme, reducing angiotensin II (less vasoconstriction and aldosterone) and dilating the efferent arteriole, which lowers blood pressure and reduces proteinuria but can raise creatinine and potassium slightly. The same enzyme normally degrades bradykinin, so ACE inhibition raises bradykinin and causes the classic dry cough. Marked bradykinin accumulation can also cause angioedema.",
    "why": [
      "Angiotensin receptor blockers act at the AT1 receptor and do not raise bradykinin, so they typically do not cause cough.",
      "Direct renin inhibitors act higher in the cascade and do not produce a bradykinin-mediated cough.",
      "Aldosterone antagonists cause hyperkalemia and gynecomastia, not a bradykinin cough.",
      "Calcium channel blockers cause peripheral edema but not a dry cough from bradykinin.",
      "Correct: ACE inhibition lowers angiotensin II and raises bradykinin, explaining both the pressure drop and the cough."
    ]
  },
  {
    "id": "s1-0038",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Physiology",
    "topic": "Neonatal respiratory distress syndrome",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "An infant born at 30 weeks of gestation develops grunting, nasal flaring, and intercostal retractions within the first hour of life. Chest radiograph shows diffuse ground-glass opacities with air bronchograms.\n\n| Test | Value | Reference |\n|---|---|---|\n| Lecithin-to-sphingomyelin ratio | 1.4 | mature >= 2.0 |",
    "lead": "Which is the primary underlying cause?",
    "options": [
      "Deficiency of pulmonary surfactant, raising alveolar surface tension",
      "Persistent pulmonary hypertension of the newborn",
      "Aspiration of meconium",
      "A congenital diaphragmatic hernia",
      "Aspiration of amniotic squamous debris"
    ],
    "answer": 0,
    "exp": "A premature infant with early respiratory distress, ground-glass lungs, and a low lecithin-to-sphingomyelin ratio has neonatal respiratory distress syndrome from surfactant deficiency. Immature type II pneumocytes make too little surfactant, so alveolar surface tension is high and alveoli collapse, producing diffuse atelectasis and hypoxemia. Antenatal corticosteroids accelerate surfactant production and reduce risk.",
    "why": [
      "Correct: insufficient surfactant raises surface tension and collapses alveoli, causing the distress.",
      "Persistent pulmonary hypertension causes differential cyanosis and labile oxygenation, not a low L/S ratio with ground-glass lungs.",
      "Meconium aspiration occurs in term or post-term infants with patchy infiltrates, not a premature low-surfactant picture.",
      "A diaphragmatic hernia produces a scaphoid abdomen and bowel in the chest, not diffuse ground-glass opacities.",
      "Aspiration of squamous debris is not the mechanism of prematurity-related respiratory distress syndrome."
    ]
  },
  {
    "id": "s1-0039",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Minimal change disease",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 5-year-old boy develops rapidly progressive periorbital and lower-extremity edema and frothy urine over several days. Urinalysis shows heavy proteinuria without hematuria; serum albumin is low and lipids are high. Complement levels are normal.\n\n**[IMAGE: glomerular electron micrograph showing diffuse effacement of podocyte foot processes, with a normal appearance on light microscopy]**",
    "lead": "Which finding best explains his nephrotic syndrome?",
    "options": [
      "Subepithelial immune-complex humps",
      "Linear deposition of antibody along the basement membrane",
      "Mesangial deposition of IgA",
      "Effacement of podocyte foot processes with loss of the glomerular charge barrier",
      "Nodular glomerulosclerosis"
    ],
    "answer": 3,
    "exp": "Sudden nephrotic-range, selective proteinuria in a young child with normal light microscopy but foot process effacement on electron microscopy is minimal change disease, the most common nephrotic syndrome in children. Loss of the anionic charge barrier allows selective albumin loss, and the glomeruli appear normal by light microscopy and immunofluorescence. It typically responds well to corticosteroids.",
    "why": [
      "Subepithelial humps indicate postinfectious glomerulonephritis, a nephritic process with hematuria and low complement.",
      "Linear antibody deposition indicates anti-glomerular basement membrane disease with hemoptysis and hematuria.",
      "Mesangial IgA deposition indicates IgA nephropathy, typically with episodic hematuria.",
      "Correct: foot process effacement with charge-barrier loss causes selective proteinuria and steroid-responsive disease.",
      "Nodular glomerulosclerosis is seen in long-standing diabetic nephropathy, not an acute childhood presentation."
    ]
  },
  {
    "id": "s1-0040",
    "system": "Gastrointestinal",
    "discipline": "Immunology",
    "topic": "Celiac disease",
    "difficulty": "easy",
    "anchor": "image",
    "vignette": "A 32-year-old woman has months of diarrhea, bloating, and weight loss, along with iron-deficiency anemia and an intensely itchy vesicular rash over her elbows and knees. Serum IgA anti-tissue transglutaminase antibodies are elevated.\n\n**[IMAGE: duodenal biopsy showing villous atrophy, crypt hyperplasia, and increased intraepithelial lymphocytes]**",
    "lead": "Which mechanism best explains her disease?",
    "options": [
      "Deficiency of the brush-border enzyme lactase",
      "An immune response to gliadin causing small-bowel villous atrophy, associated with HLA-DQ2/DQ8",
      "Small-intestinal bacterial overgrowth",
      "Autoimmune destruction of pancreatic acinar cells",
      "Infection with Tropheryma whipplei"
    ],
    "answer": 1,
    "exp": "Malabsorption with tissue transglutaminase antibodies, duodenal villous atrophy, and dermatitis herpetiformis is celiac disease. A T-cell-mediated response to deamidated gliadin peptides, in genetically susceptible HLA-DQ2 or DQ8 individuals, damages the small-bowel villi and impairs absorption. Symptoms and histology improve on a gluten-free diet.",
    "why": [
      "Lactase deficiency causes bloating and osmotic diarrhea after dairy but no antibodies, villous atrophy, or rash.",
      "Correct: an immune response to gliadin causes villous atrophy in HLA-DQ2/DQ8 individuals, with dermatitis herpetiformis.",
      "Bacterial overgrowth causes malabsorption but not tissue transglutaminase antibodies or the characteristic biopsy.",
      "Autoimmune pancreatic acinar destruction causes exocrine insufficiency without these serologies or duodenal histology.",
      "Whipple disease shows PAS-positive macrophages and arthralgias, not tissue transglutaminase antibodies and villous atrophy."
    ]
  },
  {
    "id": "s1-0041",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Carcinoid syndrome",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 56-year-old woman has episodes of cutaneous flushing, secretory diarrhea, and wheezing. On examination she has a right-sided cardiac murmur. Symptoms became prominent only after imaging revealed multiple liver masses. Urinary 5-hydroxyindoleacetic acid is elevated, and she has a scaly, pigmented rash consistent with niacin deficiency.",
    "lead": "Excess of which mediator best explains her syndrome?",
    "options": [
      "Gastrin",
      "Vasoactive intestinal peptide",
      "Catecholamines",
      "Histamine from a mast cell disorder",
      "Serotonin from a metastatic neuroendocrine tumor"
    ],
    "answer": 4,
    "exp": "Flushing, diarrhea, wheezing, right-sided valvular disease, and elevated urinary 5-HIAA indicate carcinoid syndrome from a serotonin-secreting neuroendocrine tumor. Systemic symptoms appear once hepatic metastases release serotonin directly into the systemic circulation, bypassing first-pass hepatic metabolism. Diversion of tryptophan to serotonin causes niacin deficiency (pellagra), and serotonin cleared by the lungs spares the left heart while damaging right-sided valves.",
    "why": [
      "Excess gastrin causes Zollinger-Ellison syndrome with refractory ulcers, not flushing with elevated 5-HIAA.",
      "Excess vasoactive intestinal peptide causes profuse watery diarrhea with hypokalemia, not the full carcinoid picture.",
      "Excess catecholamines cause paroxysmal hypertension with headache and palpitations, not elevated 5-HIAA.",
      "Mast cell histamine release causes flushing and pruritus but not elevated urinary 5-HIAA or right-heart carcinoid disease.",
      "Correct: metastatic serotonin secretion produces flushing, diarrhea, right-heart disease, and high 5-HIAA."
    ]
  },
  {
    "id": "s1-0042",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Hashimoto thyroiditis",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 45-year-old woman has months of fatigue, weight gain, cold intolerance, constipation, and dry skin. She has a firm, nontender, diffusely enlarged thyroid.\n\n| Test | Value | Reference |\n|---|---|---|\n| Thyroid-stimulating hormone | 18 mIU/L | 0.4-4.0 |\n| Free thyroxine | low | 0.8-1.8 ng/dL |\n| Anti-thyroid peroxidase antibodies | high | - |",
    "lead": "Which mechanism best explains her hypothyroidism?",
    "options": [
      "Stimulating antibodies directed against the TSH receptor",
      "Dietary iodine deficiency",
      "Autoimmune destruction of thyroid follicles by antibodies and cytotoxic T cells",
      "A thyroid-stimulating hormone-secreting pituitary adenoma",
      "Excess exogenous levothyroxine intake"
    ],
    "answer": 2,
    "exp": "Hypothyroidism with a firm goiter, elevated TSH, low free thyroxine, and high anti-thyroid peroxidase antibodies is Hashimoto thyroiditis. It is an autoimmune disorder in which antibody- and cell-mediated attack destroys thyroid follicles, producing a lymphocytic infiltrate with germinal centers and Hurthle cells. It also carries an increased long-term risk of thyroid lymphoma.",
    "why": [
      "Stimulating TSH receptor antibodies cause Graves disease with hyperthyroidism, the opposite picture.",
      "Iodine deficiency can cause goiter and hypothyroidism but does not produce anti-thyroid peroxidase antibodies.",
      "Correct: autoimmune destruction of follicles causes hypothyroidism with high TSH and anti-thyroid peroxidase antibodies.",
      "A TSH-secreting adenoma would raise both TSH and thyroid hormone, causing hyperthyroidism.",
      "Excess exogenous levothyroxine would suppress TSH, not elevate it."
    ]
  },
  {
    "id": "s1-0043",
    "system": "Reproductive & Endocrine",
    "discipline": "Physiology",
    "topic": "Pheochromocytoma",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 40-year-old woman has recurrent spells of pounding headache, palpitations, and drenching sweats accompanied by severe, paroxysmal blood-pressure elevation that resolves spontaneously.\n\n| Test | Value | Reference |\n|---|---|---|\n| Plasma free metanephrines | markedly elevated | normal |\n| 24-hour urinary catecholamines | elevated | normal |",
    "lead": "The excess hormone most likely originates from which source?",
    "options": [
      "Catecholamine secretion by adrenal medullary chromaffin cells",
      "Aldosterone from a zona glomerulosa adenoma",
      "Cortisol from a zona fasciculata adenoma",
      "Renin from a juxtaglomerular cell tumor",
      "Thyroid hormone from a toxic adenoma"
    ],
    "answer": 0,
    "exp": "Paroxysmal hypertension with the triad of headache, palpitations, and diaphoresis and elevated metanephrines is a pheochromocytoma, a catecholamine-secreting tumor of adrenal medullary chromaffin cells. Metanephrines are the most useful screening test because they are produced continuously. Treatment requires alpha-adrenergic blockade before beta-blockade to avoid an unopposed alpha hypertensive crisis, and it may occur in MEN2.",
    "why": [
      "Correct: chromaffin cell catecholamine secretion produces the paroxysmal spells and elevated metanephrines.",
      "An aldosterone-producing adenoma causes sustained hypertension with hypokalemia, not catecholamine spells.",
      "A cortisol-producing adenoma causes Cushing syndrome features, not elevated metanephrines.",
      "A renin-secreting tumor causes hypertension with secondary hyperaldosteronism, not elevated catecholamines.",
      "A toxic thyroid adenoma causes hyperthyroidism, not paroxysmal catecholamine excess."
    ]
  },
  {
    "id": "s1-0044",
    "system": "Reproductive & Endocrine",
    "discipline": "Physiology",
    "topic": "Klinefelter syndrome",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 17-year-old boy is evaluated for delayed puberty. He is tall with disproportionately long limbs, has gynecomastia, small firm testes, and sparse facial and body hair. He has had academic difficulties.\n\nLaboratory testing shows low testosterone with elevated luteinizing hormone and follicle-stimulating hormone, and semen analysis reveals azoospermia.",
    "lead": "Which of the following is the most likely underlying cause?",
    "options": [
      "A 45,X karyotype",
      "A 46,XY karyotype with an androgen receptor defect",
      "A 47,XYY karyotype",
      "A 47,XXY karyotype",
      "GnRH deficiency with anosmia"
    ],
    "answer": 3,
    "exp": "Tall stature, gynecomastia, small firm testes, and primary hypogonadism with elevated gonadotropins in a phenotypic male indicate Klinefelter syndrome (47,XXY). The extra X causes seminiferous tubule dysgenesis and Leydig cell dysfunction, so testosterone is low while luteinizing and follicle-stimulating hormones rise. The result is infertility with azoospermia.",
    "why": [
      "A 45,X karyotype is Turner syndrome, which occurs in phenotypic females.",
      "An androgen receptor defect causes a female phenotype with testes and normal-to-high testosterone, not this male phenotype.",
      "A 47,XYY karyotype is usually associated with tall stature and normal fertility, not primary hypogonadism.",
      "Correct: 47,XXY causes primary hypogonadism with high gonadotropins, gynecomastia, and azoospermia.",
      "GnRH deficiency (Kallmann syndrome) causes low gonadotropins and anosmia, not elevated gonadotropins."
    ]
  },
  {
    "id": "s1-0045",
    "system": "Multisystem",
    "discipline": "Microbiology",
    "topic": "Diphtheria toxin",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "An unvaccinated 6-year-old recent immigrant has fever, sore throat, and marked cervical swelling. Now he develops new arrhythmia and evidence of myocarditis.\n\n**[IMAGE: gray, adherent pseudomembrane over the tonsils and posterior pharynx that bleeds when scraped]**",
    "lead": "Which mechanism best explains this toxin's effect?",
    "options": [
      "Cleavage of SNARE proteins to block neurotransmitter release",
      "ADP-ribosylation of elongation factor 2, halting host protein synthesis",
      "Persistent activation of the Gs protein, raising cyclic AMP",
      "Cleavage of the 28S ribosomal RNA of the 60S subunit",
      "Cross-linking of MHC class II and T-cell receptors as a superantigen"
    ],
    "answer": 1,
    "exp": "A gray pharyngeal pseudomembrane with myocarditis in an unvaccinated child is diphtheria. The toxin, encoded by a lysogenic bacteriophage, ADP-ribosylates elongation factor 2, halting host cell protein synthesis and causing local pseudomembrane formation plus systemic cardiac and neurologic injury. Pseudomonas exotoxin A shares this same target.",
    "why": [
      "SNARE cleavage describes botulinum and tetanus toxins, which impair neurotransmitter release.",
      "Correct: diphtheria toxin ADP-ribosylates elongation factor 2, stopping protein synthesis.",
      "Persistent Gs activation with raised cyclic AMP describes cholera toxin.",
      "Cleavage of 28S ribosomal RNA describes Shiga and Shiga-like toxins.",
      "Superantigen cross-linking describes toxic shock syndrome toxin and streptococcal pyrogenic exotoxins."
    ]
  },
  {
    "id": "s1-0046",
    "system": "Multisystem",
    "discipline": "Pharmacology",
    "topic": "Methotrexate mechanism",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A patient is treated with methotrexate, and the oncology team plans timed leucovorin (folinic acid) rescue to limit toxicity to normal tissues.",
    "lead": "Which action best describes how methotrexate works?",
    "options": [
      "It cross-links DNA strands through alkylation",
      "It intercalates DNA and inhibits topoisomerase II",
      "It inhibits dihydrofolate reductase, depleting tetrahydrofolate and blocking nucleotide synthesis",
      "It inhibits microtubule disassembly during mitosis",
      "It directly inhibits thymidylate synthase"
    ],
    "answer": 2,
    "exp": "Methotrexate inhibits dihydrofolate reductase, blocking regeneration of tetrahydrofolate needed for thymidylate and purine synthesis, so DNA replication in rapidly dividing cells fails. Leucovorin is a reduced folate that bypasses the blocked enzyme to rescue normal cells. Characteristic toxicities include myelosuppression, mucositis, and hepatotoxicity.",
    "why": [
      "DNA cross-linking by alkylation describes agents such as cyclophosphamide, not methotrexate.",
      "DNA intercalation with topoisomerase II inhibition describes anthracyclines such as doxorubicin.",
      "Correct: methotrexate inhibits dihydrofolate reductase, depleting tetrahydrofolate and impairing nucleotide synthesis.",
      "Inhibition of microtubule disassembly describes taxanes.",
      "Direct thymidylate synthase inhibition describes 5-fluorouracil, not methotrexate."
    ]
  },
  {
    "id": "s1-0047",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Biostatistics",
    "topic": "Number needed to treat",
    "difficulty": "moderate",
    "anchor": "table",
    "vignette": "In a one-year randomized trial, a cardiovascular event occurred in the two groups as shown.\n\n| Group | One-year event rate |\n|---|---|\n| Placebo | 8% |\n| Treatment | 4% |",
    "lead": "How many patients must be treated for one year to prevent one event (number needed to treat)?",
    "options": [
      "25",
      "4",
      "50",
      "2",
      "100"
    ],
    "answer": 0,
    "exp": "The number needed to treat is the reciprocal of the absolute risk reduction. The absolute risk reduction here is 8% minus 4%, which is 4% (0.04). The reciprocal of 0.04 is 25, so 25 patients must be treated for one year to prevent one event.",
    "why": [
      "Correct: NNT = 1 / absolute risk reduction = 1 / 0.04 = 25.",
      "4 reflects the relative risk reduction of 50% or the raw percentage difference, not the number needed to treat.",
      "50 would result from using half the absolute risk reduction (0.02).",
      "2 is not obtained from any correct manipulation of these rates.",
      "100 would result from a 1% absolute risk reduction, which is not the case here."
    ]
  },
  {
    "id": "s1-0048",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Biostatistics",
    "topic": "Confidence interval interpretation",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A cohort study reports that an exposure is associated with an outcome, with a relative risk of 1.8 and a 95% confidence interval of 0.9 to 3.2.",
    "lead": "Which is the best interpretation of this result?",
    "options": [
      "The exposure significantly increases the risk of the outcome",
      "The exposure significantly decreases the risk of the outcome",
      "The result proves that no association exists",
      "The study design must be invalid",
      "The association is not statistically significant because the interval includes 1.0"
    ],
    "answer": 4,
    "exp": "For a ratio measure such as relative risk, the null value is 1.0. A 95% confidence interval that spans 1.0 means the result is not statistically significant at an alpha of 0.05. It does not prove the absence of an effect; the study may simply be underpowered to detect one.",
    "why": [
      "The result is not statistically significant, so it cannot be interpreted as a significant increase in risk.",
      "The point estimate is above 1.0, and the result is not significant, so it does not show a significant decrease.",
      "A nonsignificant result does not prove that no association exists; it may reflect insufficient power.",
      "A confidence interval crossing 1.0 reflects statistical uncertainty, not an invalid study design.",
      "Correct: because the interval includes the null value of 1.0, the association is not statistically significant."
    ]
  },
  {
    "id": "s1-0049",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Surrogate decision-making",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 72-year-old man is unconscious after a large stroke and cannot participate in decisions. He has no written advance directive and never named a health-care proxy. A decision about placing a feeding tube must be made, and his adult children are present and involved.",
    "lead": "Which is the most appropriate basis for making this decision?",
    "options": [
      "The physician should decide unilaterally based on medical judgment alone",
      "Default to whichever treatment prolongs life regardless of the patient's prior wishes",
      "Obtain a court order before making any decision",
      "Have the appropriate surrogate apply substituted judgment based on the patient's known values and prior statements",
      "Postpone all decisions until the patient regains capacity"
    ],
    "answer": 3,
    "exp": "For an incapacitated adult without an advance directive or named proxy, decisions should be made by the appropriate surrogate, who applies substituted judgment: choosing what the patient himself would have wanted based on his known values and prior statements. Only when those wishes are unknown does the standard shift to the patient's best interests. Courts are involved only when conflicts cannot otherwise be resolved.",
    "why": [
      "Unilateral physician decisions bypass the patient's own values and the role of the surrogate.",
      "Defaulting to life-prolonging treatment ignores the patient's previously expressed preferences.",
      "Court involvement is a last resort for unresolved disputes, not the routine basis for decisions.",
      "Correct: the surrogate should apply substituted judgment grounded in the patient's known values and wishes.",
      "Waiting is not appropriate when the patient will not imminently regain capacity and a decision is needed."
    ]
  },
  {
    "id": "s1-0050",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Duty to protect (Tarasoff)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "During an outpatient visit, a psychiatric patient states a credible, specific intention to kill a named former partner and describes a concrete plan and the means to carry it out. He appears serious and capable of acting.",
    "lead": "Which of the following is the most appropriate action?",
    "options": [
      "Maintain strict confidentiality and address the threat only within therapy",
      "Take steps to protect the identifiable victim, which may include warning her and notifying authorities",
      "Immediately terminate the therapeutic relationship and refer the patient elsewhere",
      "Tell the patient that confidentiality legally prevents any disclosure",
      "Issue a general community advisory without identifying anyone"
    ],
    "answer": 1,
    "exp": "When a patient poses a serious and imminent threat to an identifiable third party, the clinician's duty to protect overrides ordinary confidentiality. Appropriate steps may include warning the intended victim, notifying law enforcement, and taking measures such as hospitalization to prevent harm. This duty to protect was established by the Tarasoff decision.",
    "why": [
      "Maintaining strict confidentiality in the face of a serious, specific threat fails the duty to protect a foreseeable victim.",
      "Correct: the clinician must act to protect the identifiable victim, which may include warning her and notifying authorities.",
      "Simply terminating care does nothing to protect the threatened person and may worsen risk.",
      "Confidentiality is not absolute; it yields when there is a serious threat to an identifiable third party.",
      "A general community advisory neither protects the specific victim nor fulfills the targeted duty to warn."
    ]
  },
  {
    "id": "s1-0051",
    "system": "General Principles",
    "discipline": "Biochemistry",
    "topic": "Phenylketonuria",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 10-month-old boy who was born abroad and never underwent newborn screening has developmental delay, unusually fair skin and hair, eczema, and a musty body odor. He is irritable and hyperactive.\n\n| Test | Value | Reference |\n|---|---|---|\n| Serum phenylalanine | markedly elevated | low |\n| Serum tyrosine | low | normal |",
    "lead": "A deficiency of which enzyme is most likely?",
    "options": [
      "Homogentisate oxidase",
      "Phenylalanine hydroxylase",
      "Tyrosinase",
      "Branched-chain alpha-ketoacid dehydrogenase",
      "Cystathionine synthase"
    ],
    "answer": 1,
    "exp": "Developmental delay with hypopigmentation, eczema, and a musty odor plus high phenylalanine and low tyrosine is phenylketonuria from deficient phenylalanine hydroxylase (or its tetrahydrobiopterin cofactor). Phenylalanine accumulates and is converted to phenylketones, while tyrosine becomes an essential amino acid, causing hypopigmentation. Management restricts dietary phenylalanine (and aspartame) and supplements tyrosine.",
    "why": [
      "Homogentisate oxidase deficiency causes alkaptonuria, with dark urine and ochronosis, not hyperphenylalaninemia.",
      "Correct: absent phenylalanine hydroxylase raises phenylalanine and lowers tyrosine, causing phenylketonuria.",
      "Tyrosinase deficiency causes oculocutaneous albinism with hypopigmentation but normal intellect and phenylalanine.",
      "Branched-chain alpha-ketoacid dehydrogenase deficiency causes maple syrup urine disease with sweet-smelling urine.",
      "Cystathionine synthase deficiency causes homocystinuria, with lens dislocation and thrombosis."
    ]
  },
  {
    "id": "s1-0052",
    "system": "General Principles",
    "discipline": "Genetics",
    "topic": "Marfan syndrome",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 19-year-old man is unusually tall with long limbs and fingers, a pectus deformity, and hypermobile joints. Ophthalmology notes upward dislocation of the lenses. Echocardiography shows dilation of the aortic root with a soft diastolic murmur. His cognition is normal, and several relatives have similar features.",
    "lead": "A defect in which protein is most likely responsible?",
    "options": [
      "Type III collagen",
      "Type I collagen",
      "Cystathionine beta-synthase",
      "Fibrillin-1",
      "Elastin"
    ],
    "answer": 3,
    "exp": "Tall stature, arachnodactyly, upward lens dislocation, and aortic root dilation with autosomal dominant inheritance and normal cognition is Marfan syndrome, caused by a fibrillin-1 (FBN1) mutation. Defective fibrillin weakens elastic connective tissue, threatening the aorta with aneurysm and dissection. The upward lens dislocation and normal intellect help separate it from homocystinuria.",
    "why": [
      "Type III collagen defects cause vascular Ehlers-Danlos syndrome, with arterial and organ rupture, not lens dislocation.",
      "Type I collagen defects cause osteogenesis imperfecta, with fractures and blue sclerae.",
      "Cystathionine beta-synthase deficiency causes homocystinuria, with downward lens dislocation, intellectual disability, and thrombosis.",
      "Correct: a fibrillin-1 mutation weakens elastic tissue, causing the aortic, ocular, and skeletal features of Marfan syndrome.",
      "Elastin defects underlie conditions such as cutis laxa and are not the cause of this Marfan phenotype."
    ]
  },
  {
    "id": "s1-0053",
    "system": "General Principles",
    "discipline": "Biochemistry",
    "topic": "Vitamin C deficiency (scurvy)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "An elderly man who lives alone and eats mostly tea and toast has swollen, bleeding gums, curled (corkscrew) body hairs surrounded by pinpoint hemorrhages, easy bruising, and poorly healing wounds. He is anemic.",
    "lead": "His deficiency most directly impairs which process?",
    "options": [
      "Hydroxylation of proline and lysine residues during collagen synthesis",
      "Gamma-carboxylation of clotting factors",
      "Lysyl oxidase cross-linking of collagen",
      "Conversion of homocysteine to methionine",
      "Insertion of iron into protoporphyrin"
    ],
    "answer": 0,
    "exp": "Perifollicular hemorrhage, corkscrew hairs, bleeding gums, and poor wound healing indicate scurvy from vitamin C deficiency. Vitamin C is the cofactor for prolyl and lysyl hydroxylases, which stabilize the collagen triple helix; without it, collagen is defective and fragile. The result is capillary fragility, bleeding, and impaired healing.",
    "why": [
      "Correct: vitamin C is required for prolyl and lysyl hydroxylation, so its deficiency yields fragile collagen and bleeding.",
      "Gamma-carboxylation depends on vitamin K, whose deficiency causes bleeding without corkscrew hairs or gum changes.",
      "Lysyl oxidase cross-linking requires copper; its deficiency (as in Menkes disease) differs from scurvy.",
      "Conversion of homocysteine to methionine depends on vitamin B12 and folate, causing anemia without the collagen findings.",
      "Iron insertion into protoporphyrin relates to heme synthesis and does not explain the bleeding and healing defects."
    ]
  },
  {
    "id": "s1-0054",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Immunology",
    "topic": "DiGeorge syndrome",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A neonate has seizures attributed to hypocalcemia, a conotruncal cardiac anomaly, and an abnormal facial appearance. He develops recurrent viral and fungal infections, and imaging shows an absent thymic shadow.\n\n| Test | Value | Reference |\n|---|---|---|\n| Calcium | low | normal |\n| T lymphocytes | markedly reduced | normal |",
    "lead": "Failure of which embryologic structures best explains this syndrome?",
    "options": [
      "The first pharyngeal arch",
      "Neural tube closure",
      "The fourth aortic arch in isolation",
      "The ventral pancreatic bud",
      "The third and fourth pharyngeal pouches"
    ],
    "answer": 4,
    "exp": "Hypocalcemia, T-cell deficiency, conotruncal cardiac defects, and thymic aplasia constitute DiGeorge syndrome, from a 22q11.2 deletion. Faulty development of the third and fourth pharyngeal pouches produces thymic aplasia (T-cell deficiency) and parathyroid aplasia (hypocalcemia), while neural crest defects cause the conotruncal anomalies. This is captured by the CATCH-22 mnemonic.",
    "why": [
      "First pharyngeal arch defects cause craniofacial syndromes such as Treacher Collins, not thymic and parathyroid aplasia.",
      "Failure of neural tube closure causes spina bifida or anencephaly, unrelated to this immune-endocrine picture.",
      "An isolated fourth aortic arch defect does not account for the thymic and parathyroid failure.",
      "The ventral pancreatic bud forms pancreatic tissue and is unrelated to this syndrome.",
      "Correct: failed third and fourth pharyngeal pouch development causes thymic and parathyroid aplasia with conotruncal defects."
    ]
  },
  {
    "id": "s1-0055",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Pathology",
    "topic": "Beta-thalassemia major",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 1-year-old child of Mediterranean ancestry has had severe anemia since about 6 months of age, along with hepatosplenomegaly and frontal bossing with prominent cheekbones. The blood smear shows target cells and nucleated red cells, and hemoglobin electrophoresis shows increased hemoglobin F and A2 with almost absent hemoglobin A.\n\n| Test | Value | Reference |\n|---|---|---|\n| Mean corpuscular volume | low | 70-86 (age-adjusted) |\n| Hemoglobin A | markedly reduced | predominant |",
    "lead": "Which mechanism best explains this disorder?",
    "options": [
      "Defective incorporation of iron into heme",
      "Deletion of all four alpha-globin genes",
      "Markedly reduced beta-globin synthesis with excess alpha chains damaging red cells",
      "A point mutation causing hemoglobin polymerization",
      "Antibody-mediated red cell destruction"
    ],
    "answer": 2,
    "exp": "Severe transfusion-dependent anemia appearing after 6 months, with skeletal changes and high hemoglobin F, is beta-thalassemia major. Severely reduced beta-globin synthesis leaves excess alpha chains that precipitate, causing ineffective erythropoiesis and hemolysis. Marrow expansion produces the crew-cut skull and chipmunk facies, and chronic transfusion leads to iron overload.",
    "why": [
      "Defective iron incorporation describes sideroblastic anemia, with ringed sideroblasts, not high hemoglobin F.",
      "Deletion of all four alpha-globin genes causes hemoglobin Barts and fatal hydrops fetalis in utero.",
      "Correct: reduced beta-globin with excess alpha chains causes ineffective erythropoiesis and the thalassemia major phenotype.",
      "A polymerizing point mutation describes sickle cell disease, with sickled cells and vaso-occlusion.",
      "Antibody-mediated destruction is autoimmune hemolytic anemia, with a positive Coombs test, not this electrophoresis pattern."
    ]
  },
  {
    "id": "s1-0056",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Pathology",
    "topic": "Alzheimer disease",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 74-year-old woman has several years of progressive memory loss, getting lost in familiar places, and word-finding difficulty, now affecting her daily activities. Her examination shows no focal deficits, and MRI reveals hippocampal and diffuse cortical atrophy.\n\n**[IMAGE: cortical section with extracellular amyloid (neuritic) plaques and intracellular neurofibrillary tangles on silver stain]**",
    "lead": "Which process best explains her dementia?",
    "options": [
      "Multiple cortical infarcts producing stepwise decline",
      "Cortical alpha-synuclein (Lewy body) deposition",
      "Frontotemporal lobar degeneration with focal atrophy",
      "Extracellular amyloid-beta plaques with intracellular hyperphosphorylated tau tangles",
      "Prion-associated spongiform change"
    ],
    "answer": 3,
    "exp": "Insidious, progressive amnestic decline with hippocampal atrophy, plus plaques and tangles on histology, is Alzheimer disease. It is characterized by extracellular amyloid-beta plaques from abnormal APP processing and intracellular neurofibrillary tangles of hyperphosphorylated tau, with loss of cholinergic neurons. The gradual course and lack of focal signs are typical.",
    "why": [
      "Multiple cortical infarcts cause vascular dementia with a stepwise course and focal deficits.",
      "Cortical Lewy bodies cause dementia with Lewy bodies, featuring visual hallucinations, parkinsonism, and fluctuating cognition.",
      "Frontotemporal lobar degeneration causes early behavioral or language change with focal frontotemporal atrophy, often in younger patients.",
      "Correct: amyloid-beta plaques and tau neurofibrillary tangles with hippocampal atrophy define Alzheimer disease.",
      "Prion spongiform change causes rapidly progressive dementia with myoclonus, not this slow amnestic course."
    ]
  },
  {
    "id": "s1-0057",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Physiology",
    "topic": "Myasthenia gravis",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 32-year-old woman has fluctuating drooping of the eyelids and double vision that worsen through the day and improve with rest. She also has proximal weakness that fatigues with repetition. Symptoms briefly improve after an edrophonium challenge, and chest imaging reveals an anterior mediastinal mass.",
    "lead": "Which mechanism best explains her weakness?",
    "options": [
      "Antibodies against presynaptic voltage-gated calcium channels",
      "Autoantibodies against postsynaptic acetylcholine receptors",
      "Autoantibodies against voltage-gated potassium channels",
      "Impaired acetylcholine release caused by a bacterial toxin",
      "Segmental demyelination of peripheral motor nerves"
    ],
    "answer": 1,
    "exp": "Fatigable ptosis and diplopia that worsen with use and improve with acetylcholinesterase inhibition, together with a thymoma, indicate myasthenia gravis. Autoantibodies against the postsynaptic acetylcholine receptor reduce available receptors at the neuromuscular junction, so repeated stimulation produces progressive weakness. Symptoms improve with acetylcholinesterase inhibitors and with rest.",
    "why": [
      "Presynaptic calcium channel antibodies cause Lambert-Eaton syndrome, in which strength improves with repeated use and which is linked to small cell lung cancer.",
      "Correct: antibodies against postsynaptic acetylcholine receptors cause fatigable weakness that improves with acetylcholinesterase inhibitors.",
      "Voltage-gated potassium channel antibodies cause neuromyotonia and other syndromes, not fatigable myasthenic weakness.",
      "Impaired acetylcholine release from botulinum toxin causes descending flaccid paralysis, not fluctuating fatigable weakness with a thymoma.",
      "Segmental demyelination of peripheral nerves causes areflexic weakness, not a fatigable neuromuscular junction disorder."
    ]
  },
  {
    "id": "s1-0058",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Behavioral Sciences",
    "topic": "Delirium versus dementia",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 78-year-old man hospitalized for pneumonia becomes acutely confused over two days. His attention wanders mid-sentence, his thinking is disorganized, and he has visual hallucinations that wax and wane, worse at night. He is drowsy at times and agitated at others. His family says his memory and thinking were entirely normal before this admission.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Alzheimer dementia",
      "Major depressive disorder",
      "Schizophrenia",
      "Dementia with Lewy bodies",
      "Delirium"
    ],
    "answer": 4,
    "exp": "An acute, fluctuating disturbance of attention and consciousness with disorganized thinking in a medically ill patient with a normal baseline is delirium. It is typically precipitated by an underlying medical problem such as infection, medications, or metabolic derangement, and it is usually reversible when the cause is treated. Impaired attention and the acute, fluctuating course distinguish it from dementia.",
    "why": [
      "Alzheimer dementia has a chronic, progressive course with preserved consciousness, not an acute fluctuating one.",
      "Major depression can impair concentration but does not cause acute clouding of consciousness with hallucinations from a medical trigger.",
      "Schizophrenia presents earlier in life with chronic psychosis and a clear sensorium.",
      "Dementia with Lewy bodies is a chronic neurodegenerative disorder; the acute onset with a medical precipitant and normal baseline points to delirium.",
      "Correct: acute, fluctuating inattention and altered consciousness from a medical cause define delirium."
    ]
  },
  {
    "id": "s1-0059",
    "system": "Musculoskeletal / Skin",
    "discipline": "Immunology",
    "topic": "Rheumatoid arthritis",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 45-year-old woman has several months of symmetric pain and swelling of the metacarpophalangeal and proximal interphalangeal joints and wrists, with morning stiffness lasting over an hour that eases as she uses her hands. She has firm subcutaneous nodules over the elbows, and the distal interphalangeal joints are spared. Anti-cyclic citrullinated peptide antibody and rheumatoid factor are positive.",
    "lead": "Which process best explains her joint disease?",
    "options": [
      "Immune-mediated synovial inflammation with pannus that erodes cartilage and bone",
      "Degeneration of articular cartilage from mechanical wear",
      "Deposition of monosodium urate crystals",
      "Deposition of calcium pyrophosphate crystals",
      "Enthesitis with sacroiliitis in a seronegative pattern"
    ],
    "answer": 0,
    "exp": "Symmetric small-joint inflammatory arthritis with prolonged morning stiffness, nodules, sparing of the distal interphalangeal joints, and positive anti-cyclic citrullinated peptide antibody is rheumatoid arthritis. The disease is driven by autoimmune synovial inflammation that forms a proliferative pannus, which erodes cartilage and bone. Anti-cyclic citrullinated peptide antibody is highly specific.",
    "why": [
      "Correct: autoimmune synovitis with an erosive pannus produces the symmetric small-joint destruction of rheumatoid arthritis.",
      "Cartilage degeneration from wear is osteoarthritis, which worsens with use, spares no distal joints, and involves the distal interphalangeal joints.",
      "Monosodium urate deposition causes acute gout, typically a monoarticular first-toe attack.",
      "Calcium pyrophosphate deposition causes pseudogout, usually of the knee or wrist.",
      "Enthesitis with sacroiliitis describes seronegative spondyloarthritis, which lacks rheumatoid factor and anti-cyclic citrullinated peptide antibody."
    ]
  },
  {
    "id": "s1-0060",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Melanoma prognosis",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 50-year-old man has a changing pigmented lesion on his back that has become larger and now itches and occasionally bleeds.\n\n**[IMAGE: an 8 mm asymmetric pigmented macule with irregular, notched borders and several shades of brown and black]**\n\nBiopsy shows atypical melanocytes invading the dermis.",
    "lead": "Which factor most strongly determines his prognosis?",
    "options": [
      "The maximum surface diameter of the lesion",
      "The presence of itching",
      "The depth of dermal invasion (Breslow thickness)",
      "The location of the lesion on the back",
      "The intensity of surface pigmentation"
    ],
    "answer": 2,
    "exp": "For cutaneous melanoma, the single strongest prognostic factor is the depth of invasion, measured as Breslow thickness. Deeper vertical invasion correlates with a higher risk of metastasis and worse survival. The ABCDE features and change over time prompt biopsy, and sentinel lymph node status further refines staging.",
    "why": [
      "Surface diameter is a screening clue but is not the strongest determinant of prognosis.",
      "Itching may prompt evaluation but does not determine outcome.",
      "Correct: Breslow depth of invasion is the strongest predictor of metastatic risk and survival.",
      "Anatomic location is a minor factor compared with depth of invasion.",
      "The degree of surface pigmentation does not determine prognosis; amelanotic melanomas can be aggressive."
    ]
  },
  {
    "id": "s1-0061",
    "system": "Cardiovascular",
    "discipline": "Pathology",
    "topic": "Inferior myocardial infarction",
    "difficulty": "moderate",
    "anchor": "ecg",
    "vignette": "A 62-year-old man has 45 minutes of crushing substernal chest pain radiating to the jaw, with diaphoresis and nausea. He is bradycardic and hypotensive.\n\n**[ECG: ST-segment elevation in leads II, III, and aVF]**",
    "lead": "Occlusion of which coronary artery is most likely?",
    "options": [
      "Left anterior descending artery",
      "Left circumflex artery",
      "Left main coronary artery",
      "Right coronary artery",
      "Obtuse marginal branch"
    ],
    "answer": 3,
    "exp": "ST elevation in the inferior leads II, III, and aVF indicates an inferior wall myocardial infarction, most often from right coronary artery occlusion. The right coronary artery typically supplies the inferior wall and the sinoatrial and atrioventricular nodes, explaining the bradycardia, and may cause right ventricular infarction with preload-sensitive hypotension. Nitrates should be used cautiously in that setting.",
    "why": [
      "Left anterior descending occlusion causes anterior infarction with ST elevation in the precordial leads V1 to V4.",
      "Left circumflex occlusion causes lateral infarction, with changes in leads I, aVL, and V5 to V6.",
      "Left main occlusion causes extensive anterolateral injury and hemodynamic collapse, not isolated inferior changes.",
      "Correct: inferior ST elevation with bradycardia points to right coronary artery occlusion.",
      "The obtuse marginal branch supplies the lateral wall, not the inferior wall."
    ]
  },
  {
    "id": "s1-0062",
    "system": "Cardiovascular",
    "discipline": "Pharmacology",
    "topic": "Digoxin mechanism",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 70-year-old man with heart failure and atrial fibrillation is treated with digoxin for rate control and symptom relief.",
    "lead": "Which mechanism best explains its positive inotropic effect?",
    "options": [
      "Inhibition of the sodium-potassium ATPase, raising intracellular sodium and then calcium through the sodium-calcium exchanger",
      "Beta-1 adrenergic receptor agonism that increases cyclic AMP",
      "Inhibition of phosphodiesterase-3",
      "Blockade of L-type calcium channels",
      "Enhanced calcium reuptake into the sarcoplasmic reticulum"
    ],
    "answer": 0,
    "exp": "Digoxin inhibits the myocardial sodium-potassium ATPase, raising intracellular sodium; this reduces the drive of the sodium-calcium exchanger, so intracellular calcium rises and contractility increases. It also enhances vagal tone, slowing atrioventricular conduction and helping rate control in atrial fibrillation. Its narrow therapeutic index makes toxicity, worsened by hypokalemia, a key concern.",
    "why": [
      "Correct: sodium-potassium ATPase inhibition raises intracellular sodium and then calcium, increasing contractility.",
      "Beta-1 agonism increasing cyclic AMP describes dobutamine, not digoxin.",
      "Phosphodiesterase-3 inhibition describes milrinone.",
      "L-type calcium channel blockade describes verapamil and diltiazem, which are negatively inotropic.",
      "Enhanced sarcoplasmic reticulum calcium reuptake would promote relaxation, not increased contractility."
    ]
  },
  {
    "id": "s1-0063",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Sarcoidosis",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 35-year-old African American woman has a dry cough, exertional dyspnea, and fatigue, along with tender red nodules on her shins and blurred vision from anterior uveitis.\n\n**[IMAGE: chest radiograph showing symmetric bilateral hilar lymphadenopathy]**\n\nSerum angiotensin-converting enzyme is elevated and serum calcium is high; a biopsy shows noncaseating granulomas.",
    "lead": "Which process best explains her disease?",
    "options": [
      "Caseating granulomas from mycobacterial infection",
      "Eosinophilic granulomas containing Langerhans cells",
      "Necrotizing granulomatous vasculitis with c-ANCA",
      "Antigen-triggered hypersensitivity pneumonitis",
      "Noncaseating granulomas from an exaggerated helper T-cell response"
    ],
    "answer": 4,
    "exp": "Bilateral hilar lymphadenopathy, noncaseating granulomas, elevated angiotensin-converting enzyme, and hypercalcemia in a young African American woman is sarcoidosis. It is a systemic granulomatous disease driven by an exaggerated helper T-cell response, and granuloma macrophages produce 1-alpha-hydroxylase, activating vitamin D and raising calcium. Erythema nodosum and uveitis are common extrapulmonary features.",
    "why": [
      "Caseating granulomas indicate tuberculosis, which this noncaseating, culture-negative picture argues against.",
      "Langerhans cell histiocytosis produces eosinophilic granulomas with Birbeck granules, not this systemic pattern.",
      "Necrotizing granulomatous vasculitis with c-ANCA describes granulomatosis with polyangiitis, which features sinus and renal disease.",
      "Hypersensitivity pneumonitis follows inhaled antigen exposure and lacks the hilar adenopathy, high angiotensin-converting enzyme, and hypercalcemia.",
      "Correct: an exaggerated helper T-cell response drives the noncaseating granulomas of sarcoidosis."
    ]
  },
  {
    "id": "s1-0064",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Acute tubular necrosis",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A patient develops oliguric acute kidney injury after prolonged intraoperative hypotension. The fractional excretion of sodium is greater than 2 percent, and the blood urea nitrogen to creatinine ratio is about 12.\n\n**[IMAGE: urine microscopy showing muddy brown granular casts]**",
    "lead": "Which is the most likely cause of the acute kidney injury?",
    "options": [
      "Prerenal azotemia from volume depletion",
      "Ischemic acute tubular necrosis",
      "Acute interstitial nephritis",
      "Postrenal obstruction",
      "Rapidly progressive glomerulonephritis"
    ],
    "answer": 1,
    "exp": "Muddy brown granular casts with a high fractional excretion of sodium after an ischemic insult indicate ischemic acute tubular necrosis. Injured tubular epithelium is shed into the urine as granular casts, and damaged tubules can no longer reabsorb sodium, raising the fractional excretion of sodium. This distinguishes it from prerenal azotemia, which has a low fractional excretion of sodium and bland sediment.",
    "why": [
      "Prerenal azotemia has a fractional excretion of sodium below 1 percent, a high blood urea nitrogen to creatinine ratio, and bland urine.",
      "Correct: ischemic tubular injury sheds muddy brown granular casts and raises the fractional excretion of sodium.",
      "Acute interstitial nephritis shows white cell casts and eosinophiluria, usually after a drug exposure.",
      "Postrenal obstruction causes hydronephrosis on imaging rather than granular casts.",
      "Rapidly progressive glomerulonephritis produces red cell casts and dysmorphic red cells, not muddy brown casts."
    ]
  },
  {
    "id": "s1-0065",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Crohn disease",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 24-year-old has months of crampy abdominal pain, non-bloody diarrhea, and weight loss, along with mouth ulcers and a perianal fistula. Colonoscopy shows inflamed segments separated by normal-appearing mucosa involving the terminal ileum and patches of colon.\n\n**[IMAGE: cobblestone mucosa with linear serpiginous ulcers and intervening skip areas]**\n\nBiopsy shows transmural inflammation with noncaseating granulomas.",
    "lead": "Which finding best characterizes this disease?",
    "options": [
      "Continuous mucosal inflammation extending proximally from the rectum",
      "Ischemic injury at the splenic flexure watershed",
      "Transmural, discontinuous (skip) inflammation with noncaseating granulomas",
      "Autoimmune villous atrophy of the small bowel",
      "Pseudomembranes from toxin-producing Clostridioides difficile"
    ],
    "answer": 2,
    "exp": "Skip lesions, transmural inflammation, noncaseating granulomas, perianal fistula, and involvement of the terminal ileum indicate Crohn disease. It can affect any part of the gastrointestinal tract from mouth to anus, with cobblestoning, strictures, and fistulae from the full-thickness inflammation. This contrasts with ulcerative colitis, which is continuous mucosal disease beginning in the rectum.",
    "why": [
      "Continuous mucosal inflammation from the rectum describes ulcerative colitis, not the skip lesions of Crohn disease.",
      "Watershed ischemic injury describes ischemic colitis, typically in older patients.",
      "Correct: transmural skip-lesion inflammation with noncaseating granulomas defines Crohn disease.",
      "Autoimmune villous atrophy describes celiac disease, which lacks fistulae and granulomas.",
      "Pseudomembranes indicate Clostridioides difficile colitis, usually after antibiotic exposure."
    ]
  },
  {
    "id": "s1-0066",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Hereditary hemochromatosis",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 50-year-old man has fatigue, aching second and third knuckles, a bronze skin tone, new diabetes, and hepatomegaly.\n\n| Test | Value | Reference |\n|---|---|---|\n| Transferrin saturation | markedly elevated | 20-50% |\n| Ferritin | markedly elevated | 30-300 ng/mL |\n\nGenetic testing shows homozygous HFE C282Y.",
    "lead": "Which mechanism best explains his disease?",
    "options": [
      "Copper accumulation from impaired biliary excretion",
      "Autoimmune destruction of pancreatic islet cells",
      "Chronic hepatitis C infection",
      "Iron loading solely from alcohol use",
      "Increased intestinal iron absorption from HFE-related hepcidin deficiency"
    ],
    "answer": 4,
    "exp": "Iron overload with a very high transferrin saturation and ferritin, bronze skin, diabetes, arthropathy, and homozygous HFE C282Y is hereditary hemochromatosis. The HFE defect lowers hepcidin, so intestinal iron absorption is unrestrained and iron deposits in the liver, pancreas, heart, joints, and skin. Phlebotomy is the mainstay of treatment.",
    "why": [
      "Copper accumulation from impaired biliary excretion describes Wilson disease, not iron overload.",
      "Autoimmune islet destruction is type 1 diabetes and does not cause systemic iron overload.",
      "Chronic hepatitis C causes liver disease but not this genetic iron-loading pattern.",
      "Alcohol can modestly raise iron stores but does not explain homozygous HFE disease.",
      "Correct: HFE-related hepcidin deficiency increases intestinal iron absorption, causing systemic iron overload."
    ]
  },
  {
    "id": "s1-0067",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Type 1 diabetes and diabetic ketoacidosis",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 12-year-old has several weeks of excessive thirst, frequent urination, and weight loss, and now has vomiting, abdominal pain, deep rapid breathing, and a fruity odor on the breath.\n\n| Test | Value | Reference |\n|---|---|---|\n| Glucose | 480 mg/dL | 70-100 |\n| Bicarbonate | 10 mEq/L | 22-28 |\n| Beta-hydroxybutyrate | markedly elevated | low |\n| C-peptide | low | normal |\n\nGlutamic acid decarboxylase antibodies are positive.",
    "lead": "Which mechanism best explains this presentation?",
    "options": [
      "Peripheral insulin resistance with preserved insulin secretion",
      "Autoimmune destruction of pancreatic beta cells causing absolute insulin deficiency",
      "A glucagon-secreting pancreatic tumor",
      "Excess cortisol from an adrenal tumor",
      "Defective insulin receptor signaling related to obesity"
    ],
    "answer": 1,
    "exp": "New-onset hyperglycemia with a high anion gap metabolic acidosis, ketonemia, low C-peptide, and islet autoantibodies in a child is type 1 diabetes presenting as diabetic ketoacidosis. Autoimmune T-cell destruction of beta cells causes absolute insulin deficiency, which unleashes lipolysis and hepatic ketogenesis. The result is the ketoacidosis with Kussmaul breathing and a fruity breath odor.",
    "why": [
      "Peripheral insulin resistance with preserved secretion describes type 2 diabetes, which less often presents with ketoacidosis in a lean child.",
      "Correct: autoimmune beta cell destruction causes absolute insulin deficiency and ketoacidosis.",
      "A glucagonoma causes hyperglycemia with necrolytic migratory erythema, not autoantibody-positive ketoacidosis.",
      "Excess cortisol causes Cushing syndrome, not islet autoantibodies and low C-peptide.",
      "Obesity-related receptor signaling defects underlie type 2 diabetes, not this autoimmune presentation."
    ]
  },
  {
    "id": "s1-0068",
    "system": "Reproductive & Endocrine",
    "discipline": "Physiology",
    "topic": "Cushing disease and dexamethasone suppression",
    "difficulty": "hard",
    "anchor": null,
    "vignette": "A woman has central obesity, a rounded face, purple abdominal striae, proximal muscle weakness, hypertension, and hyperglycemia. On testing, low-dose dexamethasone fails to suppress her cortisol, but high-dose dexamethasone does suppress it, and her plasma adrenocorticotropic hormone is elevated.",
    "lead": "Which is the most likely source of the cortisol excess?",
    "options": [
      "Exogenous glucocorticoid use",
      "A cortisol-secreting adrenal adenoma",
      "An adrenocorticotropic hormone-secreting pituitary adenoma",
      "Ectopic adrenocorticotropic hormone from a small cell lung carcinoma",
      "A cortisol-secreting adrenal carcinoma"
    ],
    "answer": 2,
    "exp": "Cortisol excess that resists low-dose but responds to high-dose dexamethasone, with an elevated adrenocorticotropic hormone, is Cushing disease from a pituitary adenoma. Such adenomas retain partial negative feedback, so only high-dose dexamethasone suppresses them. This contrasts with ectopic adrenocorticotropic hormone, which does not suppress, and with adrenal tumors, which have suppressed adrenocorticotropic hormone.",
    "why": [
      "Exogenous glucocorticoid use suppresses adrenocorticotropic hormone and endogenous cortisol, not the pattern shown.",
      "A cortisol-secreting adrenal adenoma has low adrenocorticotropic hormone and does not suppress with dexamethasone.",
      "Correct: a pituitary adenoma retains partial feedback, suppressing with high-dose but not low-dose dexamethasone, with high adrenocorticotropic hormone.",
      "Ectopic adrenocorticotropic hormone from small cell carcinoma has high adrenocorticotropic hormone that does not suppress even at high dose.",
      "An adrenal carcinoma secretes cortisol autonomously with low adrenocorticotropic hormone and no suppression."
    ]
  },
  {
    "id": "s1-0069",
    "system": "Reproductive & Endocrine",
    "discipline": "Physiology",
    "topic": "Polycystic ovary syndrome",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 26-year-old woman has irregular, infrequent periods, coarse facial hair, acne, and obesity, and she has been unable to conceive. Laboratory testing shows an elevated free testosterone, and ultrasound shows numerous small peripheral ovarian follicles. She has darkened skin folds at the neck.",
    "lead": "Which mechanism best explains her presentation?",
    "options": [
      "Hyperandrogenism with insulin resistance and chronic anovulation",
      "Premature ovarian failure with elevated follicle-stimulating hormone",
      "A prolactin-secreting pituitary adenoma",
      "A late-onset 21-hydroxylase deficiency crisis",
      "An androgen-secreting ovarian tumor causing rapid virilization"
    ],
    "answer": 0,
    "exp": "Oligomenorrhea, hyperandrogenism, and polycystic ovaries with insulin resistance are polycystic ovary syndrome. Insulin resistance drives increased ovarian androgen production and lowers sex hormone-binding globulin, raising free testosterone and disrupting ovulation. It carries increased risk of endometrial hyperplasia and type 2 diabetes.",
    "why": [
      "Correct: hyperandrogenism with insulin resistance and anovulation defines polycystic ovary syndrome.",
      "Premature ovarian failure causes menopausal symptoms with high follicle-stimulating hormone and low estrogen, not hyperandrogenism.",
      "A prolactinoma causes galactorrhea and amenorrhea from low estrogen, not hyperandrogenism with polycystic ovaries.",
      "Late-onset congenital adrenal hyperplasia shows markedly elevated 17-hydroxyprogesterone, unlike the typical polycystic ovary syndrome picture.",
      "An androgen-secreting tumor causes rapid, severe virilization with very high testosterone, unlike this gradual course."
    ]
  },
  {
    "id": "s1-0070",
    "system": "Multisystem",
    "discipline": "Microbiology",
    "topic": "Lyme disease",
    "difficulty": "easy",
    "anchor": "image",
    "vignette": "A hiker in the northeastern United States develops, in midsummer, an enlarging red skin lesion on the thigh with central clearing, along with low-grade fever and diffuse muscle aches.\n\n**[IMAGE: a single large targetoid (bull's-eye) erythematous plaque with central clearing]**",
    "lead": "Which organism is the most likely cause?",
    "options": [
      "Rickettsia rickettsii",
      "Ehrlichia chaffeensis",
      "Staphylococcus aureus",
      "Borrelia burgdorferi",
      "Babesia microti"
    ],
    "answer": 3,
    "exp": "An expanding targetoid rash with central clearing after outdoor exposure in the northeastern United States is erythema migrans, the early sign of Lyme disease caused by Borrelia burgdorferi. The spirochete is transmitted by the Ixodes tick, and untreated infection can progress to carditis with heart block, facial palsy, and later arthritis. Early disease is treated with doxycycline.",
    "why": [
      "Rocky Mountain spotted fever from Rickettsia rickettsii causes a petechial rash starting on the wrists and ankles, not a target lesion.",
      "Ehrlichiosis causes a nonspecific febrile illness with morulae in leukocytes, without erythema migrans.",
      "Staphylococcal cellulitis causes spreading erythema without central clearing or a target appearance.",
      "Correct: Borrelia burgdorferi causes erythema migrans and the stages of Lyme disease.",
      "Babesiosis causes a malaria-like hemolytic illness, not a targetoid rash."
    ]
  },
  {
    "id": "s1-0071",
    "system": "Multisystem",
    "discipline": "Genetics",
    "topic": "Retinoblastoma (two-hit hypothesis)",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "An 18-month-old is brought in because a white reflection appears in one pupil in flash photographs instead of the normal red reflex, and one eye has begun to turn inward.\n\n**[IMAGE: leukocoria, a white pupillary reflex, in the left eye]**\n\nBilateral, familial cases of this tumor are recognized.",
    "lead": "Which mechanism underlies the hereditary form?",
    "options": [
      "Amplification of the N-myc oncogene",
      "Constitutive activation of a receptor tyrosine kinase",
      "Inheriting one mutated RB1 allele, with a somatic second hit inactivating the other",
      "Loss of DNA mismatch repair genes",
      "A gain-of-function mutation in RAS"
    ],
    "answer": 2,
    "exp": "Leukocoria in a young child indicates retinoblastoma, a tumor of the RB1 tumor suppressor gene. In the hereditary form, one defective RB1 allele is inherited in the germline, so only a single somatic second hit is needed to inactivate the remaining allele, explaining the earlier onset and bilateral, multifocal tumors of Knudson's two-hit hypothesis. These patients also have increased risk of osteosarcoma.",
    "why": [
      "N-myc amplification drives neuroblastoma, not retinoblastoma.",
      "Constitutive receptor tyrosine kinase activation is an oncogene mechanism, not the two-hit loss of a tumor suppressor.",
      "Correct: a germline RB1 mutation plus a somatic second hit inactivates both alleles, per the two-hit hypothesis.",
      "Loss of mismatch repair genes underlies Lynch syndrome, not retinoblastoma.",
      "A gain-of-function RAS mutation activates an oncogene and does not explain the tumor suppressor mechanism here."
    ]
  },
  {
    "id": "s1-0072",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Biostatistics",
    "topic": "Sensitivity and ruling out disease",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A screening test for a condition has very high sensitivity but only moderate specificity. A patient undergoes the test, and the result is negative.",
    "lead": "Which conclusion is best supported?",
    "options": [
      "A negative result on a highly sensitive test helps rule out the disease",
      "A negative result confirms that the disease is present",
      "A positive result on this test definitively rules in the disease",
      "Sensitivity depends on the disease prevalence in the population",
      "The positive predictive value is high regardless of prevalence"
    ],
    "answer": 0,
    "exp": "A highly sensitive test produces few false negatives, so a negative result is useful for ruling out disease, captured by the mnemonic SnNout. Ruling in disease instead requires high specificity (SpPin). Sensitivity and specificity are intrinsic test properties independent of prevalence, whereas predictive values change with prevalence.",
    "why": [
      "Correct: with high sensitivity, a negative result argues strongly against disease and helps rule it out.",
      "A negative result does not confirm disease presence; it makes disease less likely.",
      "Ruling in disease with confidence requires high specificity, which this test lacks.",
      "Sensitivity is an intrinsic property of the test and does not depend on prevalence.",
      "Predictive values, unlike sensitivity, do depend on prevalence, so this claim is false."
    ]
  },
  {
    "id": "s1-0073",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Epidemiology",
    "topic": "Case-control study measures",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "Investigators studying a rare cancer enroll 100 patients who already have the cancer and 100 comparable people without it, then compare each group's past exposure to an industrial chemical.",
    "lead": "Which measure of association is most appropriate for this design?",
    "options": [
      "Relative risk, because incidence can be calculated directly",
      "Absolute risk reduction",
      "Attributable risk",
      "Number needed to treat",
      "Odds ratio, because incidence cannot be measured directly in this design"
    ],
    "answer": 4,
    "exp": "Selecting participants by disease status and looking backward at exposure is a case-control study. Because participants are chosen on the outcome, incidence and therefore relative risk cannot be measured directly, so the odds ratio is used and approximates relative risk when the disease is rare. Case-control designs are efficient for studying rare diseases.",
    "why": [
      "Relative risk requires incidence data from a cohort or trial, which a case-control design cannot provide.",
      "Absolute risk reduction applies to interventions with measurable event rates, not this observational design.",
      "Attributable risk also requires incidence data unavailable in a case-control study.",
      "Number needed to treat applies to trials of interventions, not an exposure case-control study.",
      "Correct: the odds ratio is appropriate because incidence cannot be measured directly in a case-control study."
    ]
  },
  {
    "id": "s1-0074",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Disclosure of medical error",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A nurse mistakenly administers a tenfold overdose of insulin. The patient becomes hypoglycemic but is promptly treated and recovers completely, with no lasting harm. The team is deciding what to tell the patient.",
    "lead": "Which is the most appropriate action?",
    "options": [
      "Do not mention it, since there was no lasting harm",
      "Disclose the error honestly, including what happened and the steps taken",
      "Disclose it only if the patient specifically asks",
      "Report it internally but do not inform the patient",
      "Defer to risk management about whether to tell the patient later"
    ],
    "answer": 1,
    "exp": "Ethical practice requires honest and timely disclosure of medical errors to the patient, including what happened, any consequences, and the corrective steps taken, even when harm was averted. Transparency respects patient autonomy and sustains trust. Internal reporting for system improvement is important but does not replace disclosure to the patient.",
    "why": [
      "Withholding the error because no harm resulted violates the duty of honesty and transparency.",
      "Correct: the error should be disclosed honestly, with an account of what happened and the response.",
      "Disclosure should not be contingent on the patient asking; it is owed proactively.",
      "Internal reporting alone leaves the patient uninformed and is not sufficient.",
      "Deferring the decision to risk management delays owed disclosure to the patient."
    ]
  },
  {
    "id": "s1-0075",
    "system": "Social Sciences / Ethics",
    "discipline": "Communication",
    "topic": "Use of a professional interpreter",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A patient who speaks limited English needs to give informed consent for a procedure. Her adult son offers to interpret, and a hospital-trained medical interpreter is also available.",
    "lead": "Which is the most appropriate action?",
    "options": [
      "Proceed using the son as the interpreter to save time",
      "Rely on written English materials and gestures",
      "Postpone the procedure until the patient learns English",
      "Use the professional medical interpreter",
      "Ask another bilingual patient to assist"
    ],
    "answer": 3,
    "exp": "A trained professional medical interpreter should be used to ensure accurate, complete, and confidential communication and valid informed consent. Family members may make errors, omit or filter information, and compromise privacy, especially with sensitive content. Using the professional interpreter best protects understanding and autonomy.",
    "why": [
      "Using the son risks translation errors, omissions, and breaches of privacy, and is not appropriate for consent.",
      "Written English materials and gestures cannot ensure understanding for a patient with limited English.",
      "Postponing until the patient learns English is neither realistic nor respectful of her needs.",
      "Correct: a professional medical interpreter ensures accurate, confidential communication and valid consent.",
      "Recruiting another patient to interpret breaches confidentiality and risks inaccuracy."
    ]
  },
  {
    "id": "s1-0076",
    "system": "General Principles",
    "discipline": "Biochemistry",
    "topic": "Classic galactosemia",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A neonate begins vomiting and feeding poorly a few days after milk feeds are started. She becomes jaundiced with hepatomegaly and is found to have bilateral cataracts. She develops Escherichia coli sepsis. Urine tests positive for reducing substances, and she is hypoglycemic.",
    "lead": "A deficiency of which enzyme is most likely?",
    "options": [
      "Fructokinase",
      "Aldolase B",
      "Galactose-1-phosphate uridyltransferase",
      "Galactokinase",
      "Glucose-6-phosphatase"
    ],
    "answer": 2,
    "exp": "Vomiting, jaundice, hepatomegaly, cataracts, and E. coli sepsis after milk exposure indicate classic galactosemia from deficient galactose-1-phosphate uridyltransferase. Accumulated galactose-1-phosphate is toxic to the liver, kidney, and brain, while excess galactose is converted to galactitol, causing cataracts. Management removes galactose and lactose from the diet.",
    "why": [
      "Fructokinase deficiency causes benign essential fructosuria, which is asymptomatic.",
      "Aldolase B deficiency causes hereditary fructose intolerance, triggered by fructose, not galactose.",
      "Correct: galactose-1-phosphate uridyltransferase deficiency causes the toxic accumulation and multisystem findings of classic galactosemia.",
      "Galactokinase deficiency is milder and causes cataracts alone, without hepatic failure or sepsis.",
      "Glucose-6-phosphatase deficiency causes von Gierke disease, with fasting hypoglycemia and hepatomegaly, not milk-triggered sepsis."
    ]
  },
  {
    "id": "s1-0077",
    "system": "General Principles",
    "discipline": "Genetics",
    "topic": "Prader-Willi syndrome (imprinting)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A young child had marked hypotonia and poor feeding as an infant but now has relentless hyperphagia with obesity, short stature, small hands and feet, hypogonadism, and intellectual disability. Testing shows a deletion of the paternally inherited chromosome 15q11-q13.",
    "lead": "Which mechanism best explains this disorder?",
    "options": [
      "Loss of paternally expressed genes at 15q11-q13 through genomic imprinting",
      "Trisomy of chromosome 21",
      "Expansion of a CGG trinucleotide repeat",
      "Loss of the maternal 15q11-q13 region",
      "A microdeletion at chromosome 22q11"
    ],
    "answer": 0,
    "exp": "Infantile hypotonia followed by hyperphagia, obesity, and hypogonadism with a paternal 15q11-q13 deletion is Prader-Willi syndrome. Because the maternal copy of this region is normally imprinted (silenced), loss of the paternal copy leaves no functional gene expression. The reciprocal loss of the maternal region causes Angelman syndrome.",
    "why": [
      "Correct: loss of paternally expressed 15q11-q13 genes, with the maternal copy imprinted, causes Prader-Willi syndrome.",
      "Trisomy 21 causes Down syndrome, not this hyperphagia-obesity phenotype.",
      "A CGG repeat expansion causes fragile X syndrome.",
      "Loss of the maternal 15q11-q13 region causes Angelman syndrome, with ataxia, seizures, and inappropriate laughter.",
      "A 22q11 microdeletion causes DiGeorge syndrome, with cardiac, parathyroid, and thymic defects."
    ]
  },
  {
    "id": "s1-0078",
    "system": "General Principles",
    "discipline": "Cell Biology",
    "topic": "Primary ciliary dyskinesia (Kartagener)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A young adult has chronic sinusitis, recurrent otitis media, and bronchiectasis, and he and his partner have been unable to conceive; his sperm are immotile. A chest radiograph shows the cardiac apex pointing to the right (situs inversus).",
    "lead": "A defect in which structure best explains this triad?",
    "options": [
      "The CFTR chloride channel",
      "Alpha-1 antitrypsin",
      "Type I collagen",
      "Fibrillin-1",
      "The dynein arms of the ciliary axoneme"
    ],
    "answer": 4,
    "exp": "Situs inversus with chronic sinusitis and bronchiectasis plus infertility is primary ciliary dyskinesia (Kartagener syndrome), caused by defective dynein arms. Immotile cilia impair mucociliary clearance (recurrent sinopulmonary infections) and sperm motility, and dysfunctional embryonic nodal cilia randomize organ situs. The classic triad is situs inversus, chronic sinusitis, and bronchiectasis.",
    "why": [
      "A CFTR defect causes cystic fibrosis, which lacks situs inversus and immotile cilia.",
      "Alpha-1 antitrypsin deficiency causes emphysema and liver disease, not this ciliary triad.",
      "Type I collagen defects cause osteogenesis imperfecta.",
      "Fibrillin-1 defects cause Marfan syndrome.",
      "Correct: defective dynein arms immobilize cilia, causing the sinopulmonary disease, infertility, and situs inversus of Kartagener syndrome."
    ]
  },
  {
    "id": "s1-0079",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Immunology",
    "topic": "Severe combined immunodeficiency",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 5-month-old has failure to thrive, chronic diarrhea, persistent oral thrush, and Pneumocystis pneumonia, along with severe recurrent bacterial and viral infections since birth. Imaging shows an absent thymic shadow, and the absolute lymphocyte count is very low.",
    "lead": "Which best explains this presentation?",
    "options": [
      "Isolated IgA deficiency",
      "Severe combined immunodeficiency from defective T- and B-cell immunity",
      "Terminal complement (C5-C9) deficiency",
      "X-linked agammaglobulinemia with intact T cells",
      "Chronic granulomatous disease"
    ],
    "answer": 1,
    "exp": "Severe infections from birth with bacteria, viruses, and fungi (including Pneumocystis and Candida), failure to thrive, an absent thymus, and profound lymphopenia indicate severe combined immunodeficiency. Defects such as the X-linked common gamma chain or adenosine deaminase deficiency cripple both cellular and humoral immunity. It is fatal without hematopoietic stem cell transplantation, and live vaccines must be avoided.",
    "why": [
      "Isolated IgA deficiency is usually asymptomatic or causes mild mucosal infections and transfusion reactions.",
      "Correct: combined T- and B-cell failure causes overwhelming early infections with an absent thymus and lymphopenia.",
      "Terminal complement deficiency predisposes specifically to recurrent Neisseria infections.",
      "X-linked agammaglobulinemia affects B cells with intact T cells, causing encapsulated bacterial infections after about 6 months.",
      "Chronic granulomatous disease causes catalase-positive infections with granulomas and a normal lymphocyte count."
    ]
  },
  {
    "id": "s1-0080",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Pathology",
    "topic": "Hemophilia A",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 3-year-old boy has recurrent swollen, painful knees after minor activity, deep muscle bleeds, and prolonged bleeding after a dental procedure. A maternal uncle had similar problems. Specific factor assays show reduced factor VIII activity with normal factor IX activity.\n\n| Test | Value | Reference |\n|---|---|---|\n| Activated partial thromboplastin time | prolonged | normal |\n| Prothrombin time | normal | normal |\n| Platelet count | normal | normal |\n| Mixing study | corrects | - |",
    "lead": "A deficiency of which factor is most likely?",
    "options": [
      "Von Willebrand factor",
      "Factor IX",
      "Platelet glycoprotein Ib",
      "Factor VIII",
      "Vitamin K-dependent factors"
    ],
    "answer": 3,
    "exp": "Deep joint and muscle bleeding in a boy with a prolonged activated partial thromboplastin time, normal prothrombin time and platelets, and a correcting mixing study is hemophilia A, an X-linked deficiency of factor VIII. The intrinsic pathway is impaired, prolonging the activated partial thromboplastin time, while correction on mixing indicates a factor deficiency rather than an inhibitor. Low factor VIII with normal factor IX confirms hemophilia A.",
    "why": [
      "Von Willebrand disease causes mucosal bleeding with a prolonged bleeding time; factor VIII may be mildly low but the assay here isolates factor VIII deficiency.",
      "Factor IX deficiency (hemophilia B) gives an identical coagulation pattern, but this patient's factor IX activity is normal.",
      "Glycoprotein Ib deficiency (Bernard-Soulier) is a platelet disorder with a prolonged bleeding time, not an isolated activated partial thromboplastin time.",
      "Correct: X-linked factor VIII deficiency prolongs the activated partial thromboplastin time and causes hemarthroses.",
      "Vitamin K-dependent factor deficiency prolongs both the prothrombin time and the activated partial thromboplastin time."
    ]
  },
  {
    "id": "s1-0081",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Pathology",
    "topic": "Guillain-Barre syndrome",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 40-year-old develops symmetric weakness that begins in the legs and ascends over several days, with loss of reflexes and mild tingling. Symptoms began about ten days after a diarrheal illness. There is concern for respiratory compromise.\n\n| Test | Value | Reference |\n|---|---|---|\n| Cerebrospinal fluid protein | elevated | normal |\n| Cerebrospinal fluid white cells | normal | normal |",
    "lead": "Which process best explains this illness?",
    "options": [
      "Autoimmune demyelination of peripheral nerves and roots",
      "Autoantibodies against the acetylcholine receptor",
      "Infection of anterior horn cells by poliovirus",
      "Central demyelination with oligoclonal bands",
      "Dorsal column degeneration from vitamin B12 deficiency"
    ],
    "answer": 0,
    "exp": "Ascending symmetric weakness with areflexia after a diarrheal illness, together with elevated cerebrospinal fluid protein and a normal cell count (albuminocytologic dissociation), is Guillain-Barre syndrome. It is an immune-mediated demyelinating polyradiculoneuropathy, often triggered by Campylobacter through molecular mimicry, and it can progress to respiratory failure. Treatment is intravenous immunoglobulin or plasmapheresis.",
    "why": [
      "Correct: autoimmune demyelination of peripheral nerves and roots causes ascending areflexic weakness with albuminocytologic dissociation.",
      "Acetylcholine receptor antibodies cause myasthenia gravis, with fatigable weakness and preserved reflexes.",
      "Poliovirus infection causes asymmetric flaccid paralysis with a febrile illness and cerebrospinal fluid pleocytosis.",
      "Central demyelination with oligoclonal bands describes multiple sclerosis, not an ascending peripheral neuropathy.",
      "Vitamin B12 deficiency causes chronic dorsal column and corticospinal degeneration, not an acute ascending paralysis."
    ]
  },
  {
    "id": "s1-0082",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Pharmacology",
    "topic": "Opioid overdose",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A young adult is found unresponsive with a respiratory rate of 6 breaths per minute, pinpoint pupils, and cyanosis. There are track marks on the arms. He rapidly improves after administration of naloxone.",
    "lead": "Which mechanism best explains this toxidrome?",
    "options": [
      "Blockade of muscarinic acetylcholine receptors",
      "Excess serotonin at central synapses",
      "Agonism at mu-opioid receptors causing respiratory depression and miosis",
      "Blockade of GABA-A receptors",
      "Inhibition of acetylcholinesterase"
    ],
    "answer": 2,
    "exp": "Depressed consciousness, a very low respiratory rate, and pinpoint pupils that reverse with naloxone indicate opioid toxicity. Opioids agonize mu receptors, depressing the brainstem respiratory drive and causing miosis and reduced gastrointestinal motility. Naloxone is a competitive mu-receptor antagonist that rapidly reverses the effects.",
    "why": [
      "Antimuscarinic toxicity causes dilated pupils, dry skin, and hyperthermia, not miosis with hypoventilation.",
      "Serotonin excess causes agitation, hyperreflexia, and clonus, not respiratory depression with pinpoint pupils.",
      "Correct: mu-opioid receptor agonism depresses respiration and causes miosis, both reversed by naloxone.",
      "GABA-A blockade causes seizures rather than sedation and miosis.",
      "Acetylcholinesterase inhibition causes miosis but with excessive secretions, bradycardia, and muscle fasciculations."
    ]
  },
  {
    "id": "s1-0083",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Behavioral Sciences",
    "topic": "Developmental milestones",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "At a routine well-child visit, a healthy infant can sit without support, transfers objects from one hand to the other, babbles, and has recently begun to show wariness around unfamiliar people.",
    "lead": "Which age is most consistent with these milestones?",
    "options": [
      "2 months",
      "4 months",
      "12 months",
      "18 months",
      "6 to 9 months"
    ],
    "answer": 4,
    "exp": "Sitting unsupported, transferring objects between hands, babbling, and the onset of stranger anxiety cluster around 6 to 9 months of age. Motor milestones advance in a cephalocaudal (head-to-toe) direction. By around 12 months, most children take first steps, use a pincer grasp, and say a first word.",
    "why": [
      "At 2 months, infants have a social smile and can track objects but cannot sit or transfer.",
      "At 4 months, infants hold the head steady, roll, and laugh but do not yet sit unsupported.",
      "At 12 months, children typically take first steps and say a first word, beyond these milestones.",
      "At 18 months, children walk well and use several words, well beyond this cluster.",
      "Correct: sitting unsupported, hand-to-hand transfer, babbling, and stranger anxiety fit 6 to 9 months."
    ]
  },
  {
    "id": "s1-0084",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Paget disease of bone",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 68-year-old man reports that his hats no longer fit, along with progressive hearing loss, bone pain, and bowing of the shins. Radiographs show mixed lytic and sclerotic bone with cortical thickening.\n\n| Test | Value | Reference |\n|---|---|---|\n| Alkaline phosphatase | markedly elevated | 40-130 U/L |\n| Calcium | normal | 8.5-10.2 mg/dL |\n| Phosphate | normal | 2.5-4.5 mg/dL |",
    "lead": "Which process best explains these findings?",
    "options": [
      "Osteoclast dysfunction producing dense, brittle bone",
      "Disordered remodeling with excessive osteoclastic and then osteoblastic activity",
      "Defective mineralization from vitamin D deficiency",
      "Increased bone resorption from parathyroid hormone excess",
      "Widespread osteoblastic metastases from prostate carcinoma"
    ],
    "answer": 1,
    "exp": "An enlarging skull, hearing loss, bowed limbs, and isolated elevation of alkaline phosphatase with normal calcium and phosphate is Paget disease of bone. It reflects focal, disordered remodeling with a burst of osteoclastic resorption followed by disorganized osteoblastic bone formation, producing a mosaic bone pattern. Complications include high-output heart failure, hearing loss, and rarely osteosarcoma.",
    "why": [
      "Osteoclast dysfunction causes osteopetrosis, with diffusely dense, fracture-prone bone.",
      "Correct: disordered osteoclastic then osteoblastic remodeling raises alkaline phosphatase with normal calcium and phosphate.",
      "Vitamin D deficiency causes osteomalacia, with low or low-normal calcium and phosphate.",
      "Parathyroid hormone excess causes hypercalcemia with low phosphate, not isolated alkaline phosphatase elevation.",
      "Prostate metastases would show a known primary and other laboratory abnormalities rather than this isolated pattern."
    ]
  },
  {
    "id": "s1-0085",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Psoriasis",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 30-year-old has well-demarcated, erythematous plaques with thick silvery scale over the elbows, knees, and scalp. Removing the scale produces pinpoint bleeding, and the fingernails show fine pitting. Some finger joints ache.\n\n**[IMAGE: sharply demarcated erythematous plaques with thick silvery-white scale over extensor surfaces]**",
    "lead": "Which histologic finding is most characteristic?",
    "options": [
      "Intraepidermal acantholysis with net-like intercellular IgG",
      "A subepidermal blister with linear IgG along the basement membrane",
      "Spongiosis with intraepidermal edema",
      "Epidermal hyperplasia with parakeratosis and neutrophils in the stratum corneum",
      "Granulomatous inflammation of the dermis"
    ],
    "answer": 3,
    "exp": "Silvery-scaled plaques on extensor surfaces with the Auspitz sign and nail pitting are psoriasis, a T-cell-driven disorder of keratinocyte hyperproliferation. Histology shows acanthosis with parakeratosis (retained nuclei in the stratum corneum), thinned suprapapillary plates over dilated capillaries (the basis of the Auspitz sign), and Munro microabscesses of neutrophils. Psoriatic arthritis may accompany the skin disease.",
    "why": [
      "Intraepidermal acantholysis with net-like IgG describes pemphigus vulgaris.",
      "A subepidermal blister with linear IgG describes bullous pemphigoid.",
      "Spongiosis with intraepidermal edema describes eczematous (spongiotic) dermatitis.",
      "Correct: acanthosis, parakeratosis, and neutrophilic microabscesses in the stratum corneum characterize psoriasis.",
      "Granulomatous dermal inflammation occurs in conditions such as sarcoidosis or granuloma annulare, not psoriasis."
    ]
  },
  {
    "id": "s1-0086",
    "system": "Cardiovascular",
    "discipline": "Physiology",
    "topic": "Calcific aortic stenosis",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 74-year-old man has exertional chest tightness, light-headedness, and breathlessness. On examination there is a harsh crescendo-decrescendo systolic ejection murmur at the right upper sternal border that radiates to the carotids, and the carotid upstrokes are weak and delayed.",
    "lead": "Which process best explains his findings?",
    "options": [
      "Calcific narrowing of the aortic valve increasing outflow resistance",
      "Retrograde flow through an incompetent aortic valve",
      "Dynamic outflow obstruction from asymmetric septal hypertrophy",
      "A left-to-right shunt through a ventricular septal defect",
      "Prolapse of a mitral leaflet into the left atrium"
    ],
    "answer": 0,
    "exp": "Exertional angina, syncope, and dyspnea with an ejection murmur radiating to the carotids and pulsus parvus et tardus is calcific aortic stenosis, common in the elderly. The fixed valvular obstruction imposes a pressure load that drives concentric left ventricular hypertrophy. Reduced preload from Valsalva softens the murmur, unlike in hypertrophic cardiomyopathy.",
    "why": [
      "Correct: calcific aortic valve narrowing raises outflow resistance, producing the classic triad and parvus et tardus.",
      "Aortic regurgitation causes a diastolic decrescendo murmur with a wide pulse pressure, not this systolic ejection murmur.",
      "Dynamic obstruction from septal hypertrophy (hypertrophic cardiomyopathy) intensifies with reduced preload, unlike fixed stenosis.",
      "A ventricular septal defect causes a holosystolic murmur at the left lower sternal border.",
      "Mitral valve prolapse causes a midsystolic click with a late systolic murmur, not a carotid-radiating ejection murmur."
    ]
  },
  {
    "id": "s1-0087",
    "system": "Cardiovascular",
    "discipline": "Pharmacology",
    "topic": "Statin mechanism",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A patient with an elevated low-density lipoprotein cholesterol is started on atorvastatin for cardiovascular risk reduction.",
    "lead": "Which mechanism best describes how this drug lowers LDL cholesterol?",
    "options": [
      "Binding bile acids in the gut to increase cholesterol excretion",
      "Blocking intestinal cholesterol absorption at NPC1L1",
      "Activating lipoprotein lipase through PPAR-alpha",
      "Inhibiting PCSK9 to prolong LDL receptor recycling",
      "Inhibiting HMG-CoA reductase, which upregulates hepatic LDL receptors"
    ],
    "answer": 4,
    "exp": "Statins competitively inhibit HMG-CoA reductase, the rate-limiting enzyme of cholesterol synthesis. The resulting fall in intracellular cholesterol prompts hepatocytes to upregulate LDL receptors, increasing clearance of LDL from the blood. Statins also modestly raise HDL and lower triglycerides, and can cause myopathy and transaminase elevation.",
    "why": [
      "Bile acid binding describes resins such as cholestyramine.",
      "Blocking NPC1L1 describes ezetimibe.",
      "Activating lipoprotein lipase through PPAR-alpha describes fibrates.",
      "Inhibiting PCSK9 describes monoclonal antibodies such as evolocumab.",
      "Correct: HMG-CoA reductase inhibition upregulates hepatic LDL receptors and lowers LDL cholesterol."
    ]
  },
  {
    "id": "s1-0088",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Squamous cell lung carcinoma with PTHrP",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 62-year-old long-time smoker has weight loss and hemoptysis. Imaging shows a central lung mass with cavitation. He is confused and constipated.\n\n| Test | Value | Reference |\n|---|---|---|\n| Calcium | high | 8.5-10.2 mg/dL |\n| Phosphate | low | 2.5-4.5 mg/dL |\n| Parathyroid hormone | low | normal |\n| Parathyroid hormone-related peptide | elevated | low |",
    "lead": "Which paraneoplastic mechanism best explains the hypercalcemia?",
    "options": [
      "Ectopic secretion of adrenocorticotropic hormone",
      "Ectopic secretion of antidiuretic hormone",
      "Secretion of parathyroid hormone-related peptide",
      "Antibodies against presynaptic calcium channels",
      "Extensive osteolytic bone metastases"
    ],
    "answer": 2,
    "exp": "A central cavitary lung mass in a smoker with hypercalcemia, low phosphate, suppressed parathyroid hormone, and elevated parathyroid hormone-related peptide is squamous cell carcinoma causing humoral hypercalcemia of malignancy. Parathyroid hormone-related peptide acts at the parathyroid hormone receptor to raise calcium and lower phosphate, while native parathyroid hormone is appropriately suppressed. Squamous cell tumors classically secrete this peptide.",
    "why": [
      "Ectopic adrenocorticotropic hormone, more typical of small cell carcinoma, causes Cushing syndrome, not hypercalcemia.",
      "Ectopic antidiuretic hormone causes hyponatremia, not hypercalcemia.",
      "Correct: parathyroid hormone-related peptide raises calcium and lowers phosphate while suppressing native parathyroid hormone.",
      "Presynaptic calcium channel antibodies cause Lambert-Eaton syndrome, a neuromuscular disorder.",
      "Osteolytic metastases can raise calcium, but the elevated parathyroid hormone-related peptide points to a humoral mechanism here."
    ]
  },
  {
    "id": "s1-0089",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Autosomal dominant polycystic kidney disease",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 35-year-old has hypertension, flank pain, and blood in the urine, with palpable bilateral abdominal masses. A relative died of a brain hemorrhage, and several relatives developed kidney failure.\n\n**[IMAGE: renal ultrasound showing bilaterally enlarged kidneys studded with numerous cysts]**\n\nHepatic cysts are also present.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Acquired obstructive uropathy",
      "Autosomal dominant polycystic kidney disease from a PKD1 mutation",
      "Simple benign renal cysts",
      "Renal cell carcinoma",
      "Autosomal recessive polycystic kidney disease presenting in a neonate"
    ],
    "answer": 1,
    "exp": "Bilateral enlarged cystic kidneys with hypertension, hematuria, hepatic cysts, and a family history of kidney failure and cerebral hemorrhage is autosomal dominant polycystic kidney disease, usually from a PKD1 mutation affecting polycystin-1. Progressive cyst growth causes chronic kidney disease, and extrarenal features include berry aneurysms with subarachnoid hemorrhage risk and mitral valve prolapse. Inheritance is autosomal dominant.",
    "why": [
      "Obstructive uropathy causes hydronephrosis, not innumerable bilateral cysts with hepatic cysts.",
      "Correct: a PKD1 mutation causes progressive bilateral renal cysts with the extrarenal features described.",
      "Simple cysts are few and incidental, without kidney enlargement or a family syndrome.",
      "Renal cell carcinoma usually presents as a solid mass rather than diffuse bilateral cysts.",
      "The recessive form presents in infancy with Potter sequence, not in a hypertensive adult."
    ]
  },
  {
    "id": "s1-0090",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Acute pancreatitis",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 48-year-old with a history of gallstones has severe, steady epigastric pain radiating to the back with nausea and vomiting; the pain worsens when supine.\n\n| Test | Value | Reference |\n|---|---|---|\n| Lipase | more than 3 times the upper limit | 10-140 U/L |",
    "lead": "Which mechanism best explains the tissue injury?",
    "options": [
      "Autoimmune destruction of pancreatic islet cells",
      "Ischemic infarction of the pancreas",
      "Bacterial infection of the pancreatic duct",
      "Premature intra-acinar activation of pancreatic enzymes causing autodigestion",
      "Malignant obstruction of the pancreatic duct alone"
    ],
    "answer": 3,
    "exp": "Epigastric pain radiating to the back with a markedly elevated lipase in a patient with gallstones is acute pancreatitis. The initiating event is premature activation of trypsinogen within acinar cells, triggering a cascade of enzymatic autodigestion, inflammation, and fat necrosis. Gallstones and alcohol are the most common causes, and complications include necrosis, pseudocyst, and hypocalcemia.",
    "why": [
      "Autoimmune islet destruction causes type 1 diabetes, not acute pancreatitis.",
      "Ischemic infarction is an uncommon primary cause of acute pancreatitis.",
      "Infection is a complication of pancreatic necrosis rather than the initiating mechanism.",
      "Correct: premature intra-acinar enzyme activation causes autodigestion and acute pancreatitis.",
      "Ductal obstruction can trigger pancreatitis, but the underlying injury is enzymatic autodigestion."
    ]
  },
  {
    "id": "s1-0091",
    "system": "Gastrointestinal",
    "discipline": "Microbiology",
    "topic": "Hepatitis B serology",
    "difficulty": "hard",
    "anchor": "table",
    "vignette": "An asymptomatic adult is screened as part of a routine evaluation, with the following hepatitis B panel.\n\n| Marker | Result |\n|---|---|\n| Hepatitis B surface antigen | positive |\n| IgM antibody to core antigen | negative |\n| Total antibody to core antigen | positive |\n| Antibody to surface antigen | negative |\n| Hepatitis B e antigen | positive |",
    "lead": "Which best describes this patient's status?",
    "options": [
      "Immune due to prior vaccination",
      "Immune due to resolved natural infection",
      "Acute infection in the window period",
      "Never infected and susceptible",
      "Chronic hepatitis B infection with high infectivity"
    ],
    "answer": 4,
    "exp": "Persistent surface antigen with total (IgG) core antibody but no IgM core antibody and no surface antibody indicates chronic hepatitis B infection. A positive e antigen signals active viral replication and high infectivity. Vaccination produces isolated surface antibody, and resolved infection produces both surface antibody and core antibody.",
    "why": [
      "Vaccine-derived immunity shows isolated surface antibody with negative surface antigen and core antibody.",
      "Resolved infection shows positive surface antibody and core antibody with negative surface antigen.",
      "The window period shows positive IgM core antibody with negative surface antigen and surface antibody.",
      "A susceptible person has all markers negative.",
      "Correct: persistent surface antigen with total core antibody and positive e antigen indicates chronic infection with high infectivity."
    ]
  },
  {
    "id": "s1-0092",
    "system": "Reproductive & Endocrine",
    "discipline": "Physiology",
    "topic": "Primary hyperparathyroidism",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 58-year-old woman is found to have hypercalcemia on routine testing. She reports fatigue, constipation, a recent kidney stone, bone aches, and low mood.\n\n| Test | Value | Reference |\n|---|---|---|\n| Calcium | high | 8.5-10.2 mg/dL |\n| Phosphate | low | 2.5-4.5 mg/dL |\n| Parathyroid hormone | elevated | normal |\n| 24-hour urine calcium | high | - |",
    "lead": "Which is the most likely cause?",
    "options": [
      "A parathyroid adenoma autonomously secreting parathyroid hormone",
      "Parathyroid hormone-related peptide from a carcinoma",
      "Vitamin D intoxication",
      "Familial hypocalciuric hypercalcemia",
      "Secondary hyperparathyroidism from chronic kidney disease"
    ],
    "answer": 0,
    "exp": "Hypercalcemia with low phosphate, elevated parathyroid hormone, and high urine calcium is primary hyperparathyroidism, most often from a solitary parathyroid adenoma. Excess parathyroid hormone raises calcium, lowers phosphate, and increases bone resorption and urinary calcium, producing stones, bone pain, constipation, and mood changes. It is frequently detected as asymptomatic hypercalcemia.",
    "why": [
      "Correct: an autonomous parathyroid adenoma raises parathyroid hormone, causing hypercalcemia with hypophosphatemia and hypercalciuria.",
      "Humoral hypercalcemia from parathyroid hormone-related peptide suppresses native parathyroid hormone, which is elevated here.",
      "Vitamin D toxicity raises both calcium and phosphate and suppresses parathyroid hormone.",
      "Familial hypocalciuric hypercalcemia shows low urine calcium, unlike the high urinary calcium here.",
      "Secondary hyperparathyroidism from kidney disease features low or normal calcium with high parathyroid hormone."
    ]
  },
  {
    "id": "s1-0093",
    "system": "Reproductive & Endocrine",
    "discipline": "Physiology",
    "topic": "Syndrome of inappropriate antidiuretic hormone",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 66-year-old with small cell lung carcinoma is confused. She appears euvolemic, with no edema and normal blood pressure. Thyroid, adrenal, and kidney function are normal.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sodium | 118 mEq/L | 135-145 |\n| Serum osmolality | low | 275-295 mOsm/kg |\n| Urine osmolality | inappropriately high | - |\n| Urine sodium | elevated | - |",
    "lead": "Which mechanism best explains her hyponatremia?",
    "options": [
      "Renal sodium wasting from aldosterone deficiency",
      "Free water loss from antidiuretic hormone deficiency",
      "Inappropriate antidiuretic hormone secretion causing water retention",
      "Hypovolemic hyponatremia from diuretic use",
      "Pseudohyponatremia from severe hyperlipidemia"
    ],
    "answer": 2,
    "exp": "Euvolemic hypotonic hyponatremia with inappropriately concentrated urine and elevated urine sodium is the syndrome of inappropriate antidiuretic hormone, here a paraneoplastic effect of small cell lung carcinoma. Excess antidiuretic hormone drives renal free water retention, diluting the serum sodium while the urine remains concentrated. Management centers on fluid restriction and treating the cause.",
    "why": [
      "Aldosterone deficiency causes hypovolemia with hyperkalemia, not euvolemic hyponatremia with concentrated urine.",
      "Antidiuretic hormone deficiency causes diabetes insipidus, with hypernatremia and dilute urine.",
      "Correct: excess antidiuretic hormone retains free water, causing dilutional euvolemic hyponatremia with concentrated urine.",
      "Diuretic-induced hyponatremia is typically hypovolemic, unlike this euvolemic picture.",
      "Pseudohyponatremia from hyperlipidemia shows a normal measured serum osmolality."
    ]
  },
  {
    "id": "s1-0094",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Testicular seminoma",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 30-year-old man notices a firm, painless enlargement of one testis that does not transilluminate. He had an undescended testis corrected in childhood. Ultrasound shows a solid intratesticular mass. Serum lactate dehydrogenase and beta-human chorionic gonadotropin are mildly elevated, while alpha-fetoprotein is normal.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Hydrocele",
      "Epididymitis",
      "Leydig cell tumor",
      "Seminoma",
      "Yolk sac tumor"
    ],
    "answer": 3,
    "exp": "A painless, firm, solid testicular mass in a young man with a history of cryptorchidism is most likely a germ cell tumor, and seminoma is the most common type. Seminomas are radiosensitive and may raise lactate dehydrogenase, placental alkaline phosphatase, and sometimes beta-human chorionic gonadotropin, but alpha-fetoprotein stays normal. Alpha-fetoprotein elevation would instead indicate nonseminomatous (for example, yolk sac) elements.",
    "why": [
      "A hydrocele is cystic and transilluminates rather than presenting as a solid mass.",
      "Epididymitis is painful and infectious, not a painless firm mass.",
      "A Leydig cell tumor typically produces androgens or estrogens and is usually benign.",
      "Correct: a painless solid testicular mass with prior cryptorchidism and normal alpha-fetoprotein fits seminoma.",
      "A yolk sac tumor elevates alpha-fetoprotein and is more common in young children."
    ]
  },
  {
    "id": "s1-0095",
    "system": "Multisystem",
    "discipline": "Microbiology",
    "topic": "Tuberculosis (type IV hypersensitivity)",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A recent immigrant has several weeks of productive cough, drenching night sweats, weight loss, and blood-streaked sputum. An apical cavitary infiltrate is seen on imaging, and acid-fast bacilli are present on sputum smear.\n\n**[IMAGE: lung histology showing a caseating granuloma with central necrosis, epithelioid macrophages, and a Langhans giant cell]**",
    "lead": "Which immune mechanism drives the granulomatous tissue findings?",
    "options": [
      "Immediate (type I) IgE-mediated hypersensitivity",
      "Cell-mediated (type IV) hypersensitivity with granuloma formation",
      "Immune-complex (type III) deposition",
      "Antibody-mediated (type II) cytotoxicity",
      "Direct exotoxin-mediated cytolysis"
    ],
    "answer": 1,
    "exp": "Chronic cough, night sweats, an apical cavity, and acid-fast bacilli with caseating granulomas indicate tuberculosis. Containment depends on a cell-mediated type IV response in which Th1 cells release interferon-gamma to activate macrophages, forming granulomas with Langhans giant cells and central caseation. Reactivation favors the apices because of their high oxygen tension.",
    "why": [
      "Type I hypersensitivity mediates allergy and anaphylaxis, not granuloma formation.",
      "Correct: a type IV cell-mediated response builds the caseating granulomas that contain the organism.",
      "Type III immune-complex deposition underlies conditions such as serum sickness and postinfectious glomerulonephritis.",
      "Type II antibody-mediated cytotoxicity does not produce these granulomas.",
      "Mycobacterium tuberculosis does not cause this disease through a classic exotoxin."
    ]
  },
  {
    "id": "s1-0096",
    "system": "Multisystem",
    "discipline": "Pathology",
    "topic": "Multiple myeloma",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 68-year-old has fatigue, bone pain, and recurrent infections. Radiographs show punched-out lytic lesions, the smear shows red cells stacked like coins, and urine contains free light chains.\n\n| Test | Value | Reference |\n|---|---|---|\n| Calcium | high | 8.5-10.2 mg/dL |\n| Creatinine | elevated | 0.6-1.2 mg/dL |\n| Serum protein electrophoresis | monoclonal spike | polyclonal |",
    "lead": "Which process best explains these findings?",
    "options": [
      "Reactive polyclonal gammopathy from chronic infection",
      "Chronic lymphocytic leukemia",
      "Proliferation of Reed-Sternberg cells",
      "Metastatic carcinoma with osteoblastic lesions",
      "Clonal plasma cell proliferation producing monoclonal immunoglobulin"
    ],
    "answer": 4,
    "exp": "Hypercalcemia, renal insufficiency, anemia, and lytic bone lesions with a monoclonal spike, light-chain proteinuria, and rouleaux define multiple myeloma. A clonal proliferation of plasma cells secretes monoclonal immunoglobulin, and excess light chains injure the kidney while cytokines activate osteoclasts, causing lytic lesions and hypercalcemia. These features are summarized by the CRAB mnemonic.",
    "why": [
      "A reactive process produces a broad polyclonal gammopathy, not a monoclonal spike with lytic lesions.",
      "Chronic lymphocytic leukemia shows lymphocytosis with smudge cells, not a monoclonal spike and lytic bone disease.",
      "Reed-Sternberg cells define Hodgkin lymphoma, which presents with lymphadenopathy.",
      "Most carcinoma metastases and the described monoclonal spike do not fit osteoblastic metastatic disease.",
      "Correct: a clonal plasma cell proliferation secreting monoclonal immunoglobulin causes the CRAB features of myeloma."
    ]
  },
  {
    "id": "s1-0097",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Biostatistics",
    "topic": "Type I error",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A trial reports that a new drug is superior to placebo, rejecting the null hypothesis at a significance level of 0.05. In reality, the drug has no true effect.",
    "lead": "Which best describes what has occurred?",
    "options": [
      "A type II error",
      "Increased statistical power",
      "A type I error",
      "Selection bias",
      "Confounding"
    ],
    "answer": 2,
    "exp": "Concluding there is a treatment effect when none truly exists means falsely rejecting a true null hypothesis, which is a type I error. Its probability is set by alpha, commonly 0.05. A type II error is failing to detect a real effect, and power (1 minus beta) is the probability of detecting a true effect.",
    "why": [
      "A type II error is a false negative, missing a real effect, the opposite of this situation.",
      "Power is the ability to detect a true effect and does not describe a false-positive conclusion.",
      "Correct: falsely rejecting a true null hypothesis is a type I error, with probability alpha.",
      "Selection bias is a systematic error in how participants are enrolled, not a false-positive statistical result.",
      "Confounding is distortion by a third variable, not the definition of a false-positive conclusion."
    ]
  },
  {
    "id": "s1-0098",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Epidemiology",
    "topic": "Incidence versus prevalence",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A new treatment prolongs survival for a chronic disease but neither prevents new cases nor cures anyone. Investigators track measures of disease frequency in the population over subsequent years.",
    "lead": "Which change is most likely to occur?",
    "options": [
      "Prevalence increases while incidence remains unchanged",
      "Incidence increases while prevalence falls",
      "Both incidence and prevalence fall",
      "Incidence rises while prevalence remains unchanged",
      "Prevalence falls because patients survive longer"
    ],
    "answer": 0,
    "exp": "Prevalence approximately equals incidence multiplied by average disease duration. A treatment that extends survival without preventing new cases increases the average duration of disease, so prevalence rises while incidence, the rate of new cases, stays the same. Only prevention or cure would lower prevalence.",
    "why": [
      "Correct: longer survival increases duration and therefore prevalence, while incidence is unchanged.",
      "Incidence depends on new cases and would not rise from a survival-prolonging treatment.",
      "Both measures falling would require prevention or cure, which this treatment does not provide.",
      "Incidence is unaffected by a treatment that only prolongs survival.",
      "Longer survival raises prevalence rather than lowering it."
    ]
  },
  {
    "id": "s1-0099",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Mandatory reporting of suspected child abuse",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A toddler is brought in with multiple bruises of different ages and a spiral fracture of a long bone. The caregiver's explanation of how the injuries occurred is inconsistent with the physical findings.",
    "lead": "Which is the most appropriate action?",
    "options": [
      "Discharge the child with routine follow-up",
      "Directly confront and accuse the caregiver",
      "Only document the findings in the chart",
      "Report the suspicion of child abuse to child protective services",
      "Wait for definitive proof before acting"
    ],
    "answer": 3,
    "exp": "Physicians are mandatory reporters and must notify child protective services when there is a reasonable suspicion of child abuse. Bruises of varying ages, a spiral fracture, and a history inconsistent with the injuries meet that threshold. Reporting requires reasonable suspicion rather than proof, and the child's safety is the priority.",
    "why": [
      "Discharging the child leaves a potentially abused patient in danger.",
      "Accusing the caregiver is not the physician's role and may escalate the situation.",
      "Documentation alone does not satisfy the legal duty to report.",
      "Correct: a reasonable suspicion of abuse requires a report to child protective services.",
      "Waiting for definitive proof is not required and risks further harm."
    ]
  },
  {
    "id": "s1-0100",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "HIV partner notification",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A patient is newly diagnosed with HIV. He has a regular sexual partner who is unaware of the diagnosis, and he states that he does not intend to tell the partner or to use protection.",
    "lead": "Which is the most appropriate action?",
    "options": [
      "Immediately notify the partner without informing the patient",
      "Counsel the patient to disclose and use protection, and engage public health partner-notification services",
      "Keep the information strictly confidential and take no further steps",
      "Decline to continue caring for the patient",
      "Report the patient to law enforcement"
    ],
    "answer": 1,
    "exp": "The physician should first counsel the patient to disclose to the partner and to use protective measures, and should involve public health partner-notification services, which can confidentially notify at-risk partners. This approach balances patient confidentiality with the duty to protect an identifiable third party from serious harm. Public health channels, rather than unilateral disclosure, are the appropriate route.",
    "why": [
      "Unilateral notification without first counseling the patient and engaging public health is not the best initial step.",
      "Correct: counsel the patient to disclose and use protection while engaging public health partner-notification services.",
      "Doing nothing ignores the serious, foreseeable risk to an identifiable partner.",
      "Abandoning the patient is unethical and does not address the risk.",
      "Law enforcement is not the appropriate channel for partner notification."
    ]
  },
  {
    "id": "s1-0101",
    "system": "General Principles",
    "discipline": "Biochemistry",
    "topic": "Tay-Sachs disease",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 6-month-old of Ashkenazi Jewish descent has lost previously acquired motor milestones and startles excessively to sound. He is hypotonic. There is no hepatosplenomegaly.\n\n**[IMAGE: fundoscopy showing a cherry-red spot at the macula]**",
    "lead": "A deficiency of which enzyme is most likely?",
    "options": [
      "Sphingomyelinase",
      "Glucocerebrosidase",
      "Alpha-galactosidase A",
      "Hexosaminidase A",
      "Galactocerebrosidase"
    ],
    "answer": 3,
    "exp": "Progressive neurodegeneration with an exaggerated startle, a cherry-red macula, and no hepatosplenomegaly is Tay-Sachs disease from deficient hexosaminidase A. GM2 ganglioside accumulates within neurons, causing the neurologic decline. The absence of hepatosplenomegaly distinguishes it from Niemann-Pick disease.",
    "why": [
      "Sphingomyelinase deficiency causes Niemann-Pick disease, which has a cherry-red spot but also hepatosplenomegaly.",
      "Glucocerebrosidase deficiency causes Gaucher disease, with hepatosplenomegaly and bone crises.",
      "Alpha-galactosidase A deficiency causes Fabry disease, with neuropathic pain and angiokeratomas.",
      "Correct: hexosaminidase A deficiency causes GM2 accumulation and Tay-Sachs disease without hepatosplenomegaly.",
      "Galactocerebrosidase deficiency causes Krabbe disease, with globoid cells and peripheral neuropathy."
    ]
  },
  {
    "id": "s1-0102",
    "system": "General Principles",
    "discipline": "Genetics",
    "topic": "Down syndrome",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A newborn has hypotonia, upslanting palpebral fissures with epicanthal folds, a flat nasal bridge, a single transverse palmar crease, and a murmur from an atrioventricular septal defect. Bilious vomiting leads to imaging showing duodenal atresia. The mother is 41 years old.",
    "lead": "Which mechanism most commonly underlies this condition?",
    "options": [
      "A robertsonian translocation inherited from a parent",
      "Meiotic nondisjunction producing trisomy 21, associated with advanced maternal age",
      "Postzygotic mosaicism",
      "A microdeletion of chromosome 5p",
      "Uniparental disomy of chromosome 15"
    ],
    "answer": 1,
    "exp": "These features indicate Down syndrome, which most often results from maternal meiotic nondisjunction producing trisomy 21. The risk rises with advancing maternal age. Associated findings include atrioventricular septal defects, duodenal atresia, and increased risks of acute leukemia and early Alzheimer disease.",
    "why": [
      "A robertsonian translocation causes a minority of cases and is not maternal-age dependent.",
      "Correct: maternal meiotic nondisjunction is the most common cause and increases with maternal age.",
      "Mosaicism accounts for only a small fraction of cases.",
      "A 5p deletion causes cri-du-chat syndrome, not Down syndrome.",
      "Uniparental disomy of chromosome 15 causes Prader-Willi or Angelman syndrome."
    ]
  },
  {
    "id": "s1-0103",
    "system": "General Principles",
    "discipline": "Biochemistry",
    "topic": "Vitamin B6 deficiency from isoniazid",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A patient being treated with isoniazid for tuberculosis develops numbness and tingling in the feet and hands over several weeks.\n\n| Test | Value | Reference |\n|---|---|---|\n| Mean corpuscular volume | low | 80-100 |\n| Bone marrow iron stain | ringed sideroblasts | none |",
    "lead": "A deficiency of which vitamin is most likely responsible?",
    "options": [
      "Vitamin B12",
      "Folate",
      "Iron",
      "Thiamine",
      "Vitamin B6 (pyridoxine)"
    ],
    "answer": 4,
    "exp": "Isoniazid depletes pyridoxine (vitamin B6), producing peripheral neuropathy, and can cause seizures and a sideroblastic anemia. Vitamin B6 is a cofactor for aminolevulinic acid synthase, the first step of heme synthesis, so its deficiency causes ringed sideroblasts. Coadministering pyridoxine prevents these effects.",
    "why": [
      "Vitamin B12 deficiency causes a macrocytic anemia with neurologic disease, not a microcytic sideroblastic anemia.",
      "Folate deficiency causes a macrocytic anemia without neuropathy.",
      "Iron deficiency causes a microcytic anemia but not neuropathy or the isoniazid association.",
      "Thiamine deficiency causes Wernicke encephalopathy and beriberi, not sideroblastic anemia.",
      "Correct: isoniazid-induced pyridoxine deficiency causes peripheral neuropathy and sideroblastic anemia."
    ]
  },
  {
    "id": "s1-0104",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Immunology",
    "topic": "Anaphylaxis (type I hypersensitivity)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "Minutes after a bee sting, a previously sensitized person develops diffuse hives, swelling of the lips and tongue, wheezing, and hypotension.",
    "lead": "Which mechanism best explains this reaction?",
    "options": [
      "IgE-mediated mast cell and basophil degranulation releasing preformed histamine",
      "IgG and IgM antibodies binding cell-surface antigens",
      "Deposition of antigen-antibody immune complexes activating complement",
      "T-cell-mediated delayed hypersensitivity",
      "Direct activation of complement without antibody"
    ],
    "answer": 0,
    "exp": "Anaphylaxis is a type I (immediate) hypersensitivity reaction. On re-exposure, allergen cross-links IgE bound to pre-sensitized mast cells and basophils, triggering degranulation with histamine and other mediators. The result is vasodilation, bronchoconstriction, and angioedema, treated with intramuscular epinephrine.",
    "why": [
      "Correct: allergen cross-linking of IgE on mast cells and basophils releases histamine, causing immediate anaphylaxis.",
      "IgG and IgM against cell-surface antigens describes type II hypersensitivity, such as autoimmune hemolysis.",
      "Immune-complex deposition describes type III hypersensitivity, such as serum sickness.",
      "T-cell-mediated delayed hypersensitivity describes type IV reactions, such as contact dermatitis.",
      "Direct complement activation without antibody is not the mechanism of allergic anaphylaxis."
    ]
  },
  {
    "id": "s1-0105",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Pathology",
    "topic": "Thrombotic thrombocytopenic purpura",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 40-year-old woman has fatigue, scattered petechiae, confusion, fever, and decreased urine output. Laboratory testing shows anemia, thrombocytopenia, and elevated lactate dehydrogenase, with normal prothrombin and partial thromboplastin times.\n\n**[IMAGE: peripheral smear showing fragmented red cells (schistocytes) with few platelets]**",
    "lead": "Which defect best explains this disorder?",
    "options": [
      "Deficiency of factor VIII",
      "Antibodies against platelet glycoprotein IIb/IIIa",
      "Deficiency of ADAMTS13, leaving large von Willebrand factor multimers",
      "Widespread activation of coagulation consuming clotting factors",
      "Endothelial injury from bacterial Shiga toxin"
    ],
    "answer": 2,
    "exp": "Microangiopathic hemolytic anemia with schistocytes, thrombocytopenia, neurologic changes, fever, and renal involvement, with normal coagulation times, is thrombotic thrombocytopenic purpura. Deficiency or inhibition of ADAMTS13 leaves ultralarge von Willebrand factor multimers that drive platelet microthrombi. Normal prothrombin and partial thromboplastin times distinguish it from disseminated intravascular coagulation.",
    "why": [
      "Factor VIII deficiency causes hemophilia with deep bleeding, not a microangiopathic hemolytic process.",
      "Antibodies against glycoprotein IIb/IIIa cause immune thrombocytopenia with isolated low platelets and no schistocytes.",
      "Correct: ADAMTS13 deficiency leaves large von Willebrand factor multimers that cause platelet microthrombi and schistocytes.",
      "Consumptive coagulation is disseminated intravascular coagulation, which prolongs the prothrombin and partial thromboplastin times.",
      "Shiga toxin causes hemolytic uremic syndrome, typically in children with more prominent renal failure."
    ]
  },
  {
    "id": "s1-0106",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Pathology",
    "topic": "Epidural hematoma",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A young man is struck on the side of the head and briefly loses consciousness, then feels well for an hour before rapidly deteriorating with severe headache, vomiting, and a dilated pupil on one side. Imaging shows a temporal bone fracture.\n\n**[IMAGE: head CT showing a biconvex (lens-shaped) hyperdensity that does not cross suture lines]**",
    "lead": "Injury to which vessel is most likely?",
    "options": [
      "A bridging cortical vein",
      "The middle meningeal artery",
      "A saccular aneurysm of the circle of Willis",
      "A lenticulostriate artery",
      "The superior sagittal sinus"
    ],
    "answer": 1,
    "exp": "A lucid interval followed by rapid decline with a lens-shaped hemorrhage that does not cross sutures is an epidural hematoma, classically from a torn middle meningeal artery with a temporal bone fracture. Arterial bleeding expands quickly and can cause uncal herniation with a third nerve palsy. It is a neurosurgical emergency.",
    "why": [
      "Bridging vein rupture causes a subdural hematoma, which is crescent-shaped and crosses suture lines.",
      "Correct: middle meningeal artery injury causes the biconvex epidural hematoma with a lucid interval.",
      "A ruptured saccular aneurysm causes subarachnoid hemorrhage with a thunderclap headache.",
      "A lenticulostriate artery rupture causes hypertensive intraparenchymal hemorrhage.",
      "Superior sagittal sinus thrombosis causes venous infarction and headache, not this arterial epidural collection."
    ]
  },
  {
    "id": "s1-0107",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Pharmacology",
    "topic": "Serotonin syndrome",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A patient taking a selective serotonin reuptake inhibitor is given tramadol for pain. Within hours she becomes agitated and diaphoretic, with tremor, hyperreflexia, sustained clonus that is worse in the legs, and a temperature of 39.5 C.",
    "lead": "Which mechanism best explains this presentation?",
    "options": [
      "Dopamine receptor blockade causing rigidity and hyperthermia",
      "Anticholinergic toxicity",
      "Sympathetic overactivity from a stimulant",
      "Excess central serotonergic activity from combined serotonergic drugs",
      "A volatile anesthetic triggering malignant hyperthermia"
    ],
    "answer": 3,
    "exp": "Rapid onset of neuromuscular hyperactivity (clonus and hyperreflexia), autonomic instability, and altered mental status after combining serotonergic drugs is serotonin syndrome. Agents such as selective serotonin reuptake inhibitors combined with tramadol, monoamine oxidase inhibitors, or linezolid raise synaptic serotonin excessively. Treatment is stopping the drugs, supportive care, and cyproheptadine.",
    "why": [
      "Dopamine blockade causes neuroleptic malignant syndrome, with lead-pipe rigidity, hyporeflexia, and a slower onset.",
      "Anticholinergic toxicity causes dry skin, urinary retention, and mydriasis, not clonus and hyperreflexia.",
      "Stimulant sympathetic overactivity does not typically cause the sustained clonus characteristic of serotonin syndrome.",
      "Correct: excess serotonergic activity from combined agents produces the hyperreflexia, clonus, and hyperthermia.",
      "Malignant hyperthermia follows volatile anesthetics or succinylcholine, with masseter rigidity, not serotonergic drugs."
    ]
  },
  {
    "id": "s1-0108",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Psychiatry",
    "topic": "Major depressive disorder",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 35-year-old woman reports six weeks of depressed mood most of the day, loss of interest in activities she used to enjoy, insomnia, poor appetite with weight loss, low energy, poor concentration, and feelings of worthlessness. She sometimes thinks life is not worth living. She has never had a manic episode, and the symptoms are not due to a substance or medical condition.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Major depressive disorder",
      "Persistent depressive disorder (dysthymia)",
      "Bipolar II disorder",
      "Adjustment disorder with depressed mood",
      "Normal sadness"
    ],
    "answer": 0,
    "exp": "At least five depressive symptoms including depressed mood or anhedonia, present for two weeks or more and causing impairment, define a major depressive episode. This patient has the classic cluster with functional impairment and passive suicidal ideation. There is no manic history, which excludes a bipolar diagnosis.",
    "why": [
      "Correct: a two-week cluster of depressive symptoms with impairment defines major depressive disorder.",
      "Persistent depressive disorder requires a milder, chronic course lasting at least two years.",
      "Bipolar II disorder requires a history of a hypomanic episode, which she lacks.",
      "Adjustment disorder follows an identifiable stressor and does not meet full criteria for major depression.",
      "These symptoms exceed normal sadness and impair functioning."
    ]
  },
  {
    "id": "s1-0109",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Dermatomyositis",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 52-year-old woman has several months of progressive difficulty climbing stairs and lifting her arms overhead, reflecting symmetric proximal muscle weakness. Creatine kinase is elevated.\n\n**[IMAGE: violaceous (heliotrope) discoloration of the eyelids and scaly erythematous papules over the knuckles (Gottron papules)]**",
    "lead": "Which best explains her condition?",
    "options": [
      "Fatigable weakness from acetylcholine receptor antibodies",
      "Degeneration of lower motor neurons",
      "Genetic deficiency of dystrophin",
      "Osteoarthritis of the proximal joints",
      "An immune-mediated inflammatory myopathy with characteristic skin findings"
    ],
    "answer": 4,
    "exp": "Symmetric proximal weakness with an elevated creatine kinase plus a heliotrope rash and Gottron papules is dermatomyositis, an inflammatory myopathy. Immune-mediated muscle injury (with perifascicular atrophy) and the characteristic skin findings define the disease. In adults it carries an increased risk of occult malignancy, warranting age-appropriate cancer screening.",
    "why": [
      "Acetylcholine receptor antibodies cause myasthenia gravis, with fatigable weakness, a normal creatine kinase, and no rash.",
      "Lower motor neuron degeneration causes flaccid weakness without a rash or elevated creatine kinase.",
      "Dystrophin deficiency causes childhood-onset X-linked muscular dystrophy, not adult inflammatory myopathy with a rash.",
      "Osteoarthritis causes joint pain, not proximal weakness with an elevated creatine kinase and skin findings.",
      "Correct: an immune-mediated inflammatory myopathy with heliotrope and Gottron findings is dermatomyositis."
    ]
  },
  {
    "id": "s1-0110",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Cutaneous squamous cell carcinoma",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 72-year-old farmer with chronic sun damage has an enlarging, ulcerated, hyperkeratotic nodule on his lower lip that arose from a scaly, rough precursor lesion. Biopsy shows nests of malignant keratinocytes with keratin pearls.",
    "lead": "Which description best fits this lesion?",
    "options": [
      "A pearly papule with telangiectasias and palisading basaloid nests",
      "Malignant melanocytes with high metastatic potential staged by depth",
      "Malignant keratinocytes with keratin pearls, often arising from actinic keratosis",
      "A benign waxy, stuck-on papule with horn cysts",
      "A proliferation of malignant endothelial cells"
    ],
    "answer": 2,
    "exp": "An ulcerated hyperkeratotic nodule on sun-exposed skin arising from actinic keratosis, with keratin pearls on histology, is cutaneous squamous cell carcinoma. It is more likely to metastasize than basal cell carcinoma, especially on the lip or ear and in immunosuppressed or transplant patients. Chronic ultraviolet exposure is the major risk factor.",
    "why": [
      "A pearly telangiectatic papule with palisading basaloid nests describes basal cell carcinoma.",
      "Depth-staged malignant melanocytes describe melanoma.",
      "Correct: malignant keratinocytes with keratin pearls arising from actinic keratosis define squamous cell carcinoma.",
      "A waxy stuck-on papule with horn cysts describes benign seborrheic keratosis.",
      "Malignant endothelial proliferation describes angiosarcoma, not a keratinocyte tumor."
    ]
  },
  {
    "id": "s1-0111",
    "system": "Cardiovascular",
    "discipline": "Pathology",
    "topic": "Dilated cardiomyopathy",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 45-year-old man with heavy alcohol use has progressive exertional dyspnea, orthopnea, and leg edema. The apical impulse is displaced laterally, and an S3 gallop is present. Echocardiography shows a dilated left ventricle with a globally reduced ejection fraction and functional mitral regurgitation.",
    "lead": "Which best describes the underlying abnormality?",
    "options": [
      "Eccentric hypertrophy with ventricular dilation and impaired systolic contraction",
      "Concentric hypertrophy with impaired diastolic filling",
      "Dynamic outflow obstruction from asymmetric septal hypertrophy",
      "Infiltration producing a stiff ventricle with a normal cavity size",
      "Pericardial constriction limiting ventricular filling"
    ],
    "answer": 0,
    "exp": "A dilated, poorly contracting left ventricle with systolic heart failure, an S3, and functional mitral regurgitation is dilated cardiomyopathy. It reflects eccentric hypertrophy with chamber dilation and impaired contraction. Causes include alcohol, viral myocarditis, doxorubicin, peripartum cardiomyopathy, and genetic mutations.",
    "why": [
      "Correct: eccentric hypertrophy with dilation and impaired systolic function defines dilated cardiomyopathy.",
      "Concentric hypertrophy with diastolic dysfunction describes hypertensive heart disease with preserved ejection fraction.",
      "Dynamic outflow obstruction from septal hypertrophy describes hypertrophic cardiomyopathy.",
      "A stiff ventricle with a normal cavity describes restrictive cardiomyopathy, such as amyloidosis.",
      "Pericardial constriction limits filling externally and does not dilate the ventricle."
    ]
  },
  {
    "id": "s1-0112",
    "system": "Cardiovascular",
    "discipline": "Pharmacology",
    "topic": "Beta-blocker mechanism in angina",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A patient with stable angina and a prior myocardial infarction is started on metoprolol. His heart rate and blood pressure decrease, and his anginal episodes become less frequent.",
    "lead": "Which mechanism best explains the anti-anginal benefit?",
    "options": [
      "Direct arteriolar dilation that reduces afterload",
      "An increase in myocardial contractility",
      "Blockade of beta-1 receptors, lowering heart rate and contractility to reduce myocardial oxygen demand",
      "Relief of coronary vasospasm through nitric oxide",
      "Blockade of L-type calcium channels in vascular smooth muscle"
    ],
    "answer": 2,
    "exp": "Beta-1 blockade lowers heart rate and contractility and slows atrioventricular conduction, reducing myocardial oxygen demand and improving the supply-demand balance in angina. Beta-blockers also improve survival after myocardial infarction and in heart failure with reduced ejection fraction. Adverse effects include bronchospasm, bradycardia, and masking of hypoglycemia.",
    "why": [
      "Direct arteriolar dilation describes drugs such as hydralazine, not beta-blockers.",
      "Beta-blockers decrease, rather than increase, contractility.",
      "Correct: beta-1 blockade lowers heart rate and contractility, reducing myocardial oxygen demand.",
      "Nitrates, not beta-blockers, relieve vasospasm through nitric oxide.",
      "L-type calcium channel blockade describes calcium channel blockers."
    ]
  },
  {
    "id": "s1-0113",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Acute respiratory distress syndrome",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A patient with severe sepsis develops acute, severe dyspnea and hypoxemia that does not correct with supplemental oxygen within a day. There is no clinical or echocardiographic evidence of heart failure, and the pulmonary capillary wedge pressure is normal.\n\n**[IMAGE: chest radiograph showing bilateral diffuse alveolar infiltrates]**",
    "lead": "Which best describes the underlying pathophysiology?",
    "options": [
      "Left heart failure causing hydrostatic pulmonary edema",
      "Reversible bronchial smooth muscle hyperreactivity",
      "Surfactant deficiency from prematurity",
      "Chronic destruction of alveolar walls",
      "Diffuse alveolar damage with increased capillary permeability and hyaline membranes"
    ],
    "answer": 4,
    "exp": "Acute refractory hypoxemia with bilateral infiltrates and a normal wedge pressure after sepsis is acute respiratory distress syndrome. Inflammatory injury causes diffuse alveolar damage with increased alveolar-capillary permeability, protein-rich edema, and hyaline membranes, reducing compliance. Management includes treating the cause and low-tidal-volume ventilation.",
    "why": [
      "Hydrostatic edema from left heart failure produces a high wedge pressure, unlike this normal value.",
      "Bronchial hyperreactivity describes asthma, not diffuse alveolar damage.",
      "Surfactant deficiency describes neonatal respiratory distress syndrome, not this adult sepsis-related process.",
      "Chronic alveolar wall destruction describes emphysema, not an acute infiltrative process.",
      "Correct: diffuse alveolar damage with increased permeability and hyaline membranes defines acute respiratory distress syndrome."
    ]
  },
  {
    "id": "s1-0114",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Membranous nephropathy",
    "difficulty": "hard",
    "anchor": "image",
    "vignette": "A 55-year-old man has edema, heavy proteinuria, low serum albumin, and high lipids. Testing shows antibodies to the phospholipase A2 receptor. He later develops a renal vein thrombosis.\n\n**[IMAGE: glomerular electron micrograph showing subepithelial immune deposits with basement membrane 'spikes' projecting between them]**",
    "lead": "Which finding best explains his nephrotic syndrome?",
    "options": [
      "Podocyte foot process effacement with normal light microscopy",
      "Subepithelial immune-complex deposits thickening the basement membrane (spike-and-dome)",
      "Mesangial deposition of IgA",
      "Crescents with linear anti-basement membrane antibody",
      "Nodular mesangial sclerosis"
    ],
    "answer": 1,
    "exp": "Adult nephrotic syndrome with anti-phospholipase A2 receptor antibodies and subepithelial deposits producing a spike-and-dome pattern is membranous nephropathy, the most common primary nephrotic syndrome in adults. Immune complexes deposit under the epithelium and thicken the glomerular basement membrane. It is associated with a hypercoagulable state and renal vein thrombosis, and secondary causes include lupus, hepatitis B, and solid tumors.",
    "why": [
      "Foot process effacement with normal light microscopy describes minimal change disease.",
      "Correct: subepithelial deposits with basement membrane spikes define membranous nephropathy.",
      "Mesangial IgA deposition describes IgA nephropathy, typically with hematuria.",
      "Crescents with linear antibody describe anti-glomerular basement membrane disease.",
      "Nodular mesangial sclerosis describes diabetic nephropathy."
    ]
  },
  {
    "id": "s1-0115",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Barrett esophagus",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 55-year-old with years of heartburn undergoes endoscopy, which shows salmon-colored mucosa extending above the gastroesophageal junction.\n\n**[IMAGE: esophageal biopsy showing intestinal-type columnar epithelium with goblet cells replacing the normal squamous epithelium]**",
    "lead": "Which change has occurred, and what is the main risk?",
    "options": [
      "Squamous dysplasia predisposing to squamous cell carcinoma",
      "Acute erosive esophagitis",
      "Eosinophilic infiltration from food allergy",
      "Metaplasia from squamous to intestinal columnar epithelium, predisposing to adenocarcinoma",
      "Fungal (candidal) esophagitis"
    ],
    "answer": 3,
    "exp": "Replacement of distal esophageal squamous epithelium by intestinal columnar epithelium with goblet cells is Barrett esophagus, a metaplastic response to chronic acid reflux. It predisposes to esophageal adenocarcinoma and warrants surveillance for dysplasia. The metaplasia is an adaptive but premalignant change.",
    "why": [
      "Squamous cell carcinoma is linked to smoking and alcohol, not to Barrett metaplasia.",
      "Acute erosive esophagitis is an acute injury, not columnar metaplasia.",
      "Eosinophilic esophagitis is an allergic disorder with rings and furrows, not goblet-cell metaplasia.",
      "Correct: metaplasia to intestinal columnar epithelium predisposes to esophageal adenocarcinoma.",
      "Candidal esophagitis produces white plaques in immunocompromised hosts, not this metaplasia."
    ]
  },
  {
    "id": "s1-0116",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Colorectal adenocarcinoma",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 68-year-old has fatigue with iron-deficiency anemia, occult blood in the stool, weight loss, and a change in bowel habits. Colonoscopy reveals an annular, constricting mass, and he has a history of adenomatous polyps.",
    "lead": "Which sequence best explains this cancer's development?",
    "options": [
      "Stepwise adenoma-to-carcinoma progression through APC, then KRAS, then TP53 mutations",
      "Molecular mimicry following a prior infection",
      "A single germline BRCA mutation",
      "Chronic acid reflux causing metaplasia",
      "A t(8;14) translocation activating MYC"
    ],
    "answer": 0,
    "exp": "Most colorectal cancers develop through the adenoma-carcinoma sequence, in which loss of APC initiates adenoma formation, KRAS activation promotes growth, and TP53 loss drives progression to carcinoma. Older adults may present with iron-deficiency anemia, occult bleeding, and an apple-core lesion. Screening detects and removes precursor adenomas.",
    "why": [
      "Correct: accumulation of APC, KRAS, and TP53 mutations drives the adenoma-carcinoma sequence.",
      "Molecular mimicry underlies conditions such as rheumatic fever, not colorectal cancer.",
      "BRCA mutations predispose to breast and ovarian cancer.",
      "Chronic acid reflux causes Barrett esophagus and esophageal adenocarcinoma.",
      "A t(8;14) translocation characterizes Burkitt lymphoma."
    ]
  },
  {
    "id": "s1-0117",
    "system": "Reproductive & Endocrine",
    "discipline": "Physiology",
    "topic": "Acromegaly",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 45-year-old reports that his rings and shoes no longer fit, along with coarsening facial features, a prominent jaw, a deepening voice, headaches, and difficulty seeing to the sides. He has new hypertension and diabetes. Serum insulin-like growth factor 1 is elevated.",
    "lead": "Which finding would best confirm the diagnosis?",
    "options": [
      "Suppression of insulin-like growth factor 1 after exercise",
      "An elevated prolactin level with galactorrhea",
      "Failure of growth hormone to suppress after an oral glucose load",
      "An elevated thyroid-stimulating hormone with high thyroxine",
      "A low cortisol after dexamethasone"
    ],
    "answer": 2,
    "exp": "Acral and soft-tissue overgrowth with elevated insulin-like growth factor 1 in an adult is acromegaly, usually from a growth hormone-secreting pituitary adenoma. Normally glucose suppresses growth hormone, so failure of growth hormone to suppress during an oral glucose tolerance test confirms the diagnosis. Mass effect from the adenoma can cause bitemporal hemianopia.",
    "why": [
      "Exercise raises growth hormone and does not confirm the diagnosis.",
      "An elevated prolactin with galactorrhea suggests a prolactinoma, not acromegaly.",
      "Correct: failure of growth hormone to suppress after oral glucose confirms acromegaly.",
      "Elevated thyroid-stimulating hormone with high thyroxine points to a thyroid disorder.",
      "Cortisol suppression testing evaluates Cushing syndrome, not acromegaly."
    ]
  },
  {
    "id": "s1-0118",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Papillary thyroid carcinoma",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 35-year-old woman has a painless thyroid nodule and a history of head and neck radiation in childhood. Fine-needle aspiration is performed.\n\n**[IMAGE: thyroid cytology showing enlarged cells with pale, ground-glass ('Orphan Annie eye') nuclei, nuclear grooves, and psammoma bodies]**",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Medullary thyroid carcinoma",
      "Anaplastic thyroid carcinoma",
      "Follicular thyroid carcinoma",
      "Hurthle cell adenoma",
      "Papillary thyroid carcinoma"
    ],
    "answer": 4,
    "exp": "Ground-glass Orphan Annie eye nuclei, nuclear grooves, and psammoma bodies are hallmarks of papillary thyroid carcinoma, the most common thyroid malignancy. It is associated with prior radiation exposure and RET or BRAF mutations. It spreads through lymphatics but generally has an excellent prognosis.",
    "why": [
      "Medullary carcinoma arises from parafollicular C cells, secretes calcitonin, and shows amyloid, without these nuclear features.",
      "Anaplastic carcinoma is an undifferentiated, aggressive tumor of older adults.",
      "Follicular carcinoma spreads hematogenously and is diagnosed by capsular or vascular invasion, not these nuclear findings.",
      "A Hurthle cell adenoma is composed of oncocytic cells and lacks these nuclear features.",
      "Correct: Orphan Annie eye nuclei, grooves, and psammoma bodies define papillary thyroid carcinoma."
    ]
  },
  {
    "id": "s1-0119",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Complete hydatidiform mole",
    "difficulty": "hard",
    "anchor": "image",
    "vignette": "A pregnant woman has a uterus larger than expected for dates, severe nausea, early signs of preeclampsia, and vaginal passage of grape-like tissue. Her beta-human chorionic gonadotropin is markedly elevated.\n\n**[IMAGE: pelvic ultrasound with a 'snowstorm' (cluster-of-grapes) appearance and no identifiable fetus]**",
    "lead": "Which best characterizes a complete mole?",
    "options": [
      "A triploid karyotype with identifiable fetal parts",
      "An ectopic implantation in the fallopian tube",
      "A normal twin intrauterine pregnancy",
      "Diploid, entirely paternal (46,XX) chromosomes with no fetus and diffuse trophoblastic proliferation",
      "A benign leiomyoma of the uterus"
    ],
    "answer": 3,
    "exp": "A complete hydatidiform mole is typically 46,XX of entirely paternal origin, arising when an empty ovum is fertilized and the paternal genome duplicates. There is diffuse trophoblastic proliferation with no fetus, a markedly elevated beta-human chorionic gonadotropin, and a snowstorm ultrasound. It carries a higher risk of progression to choriocarcinoma than a partial mole.",
    "why": [
      "A triploid karyotype with fetal parts describes a partial mole, which has lower beta-human chorionic gonadotropin.",
      "An ectopic pregnancy implants outside the uterus and does not produce this molar appearance.",
      "A normal twin pregnancy shows fetal structures, unlike a complete mole.",
      "Correct: a diploid, entirely paternal 46,XX conceptus with no fetus and diffuse trophoblast proliferation is a complete mole.",
      "A leiomyoma is a benign smooth muscle tumor unrelated to trophoblastic disease."
    ]
  },
  {
    "id": "s1-0120",
    "system": "Multisystem",
    "discipline": "Microbiology",
    "topic": "Secondary syphilis",
    "difficulty": "easy",
    "anchor": "image",
    "vignette": "Several weeks after a painless genital ulcer resolved on its own, a young adult develops a diffuse maculopapular rash, generalized lymphadenopathy, and moist, wart-like lesions in the groin. A nontreponemal serologic test is reactive.\n\n**[IMAGE: symmetric coppery maculopapular rash involving the palms and soles]**",
    "lead": "Which organism is responsible?",
    "options": [
      "Haemophilus ducreyi",
      "Treponema pallidum",
      "Herpes simplex virus type 2",
      "Chlamydia trachomatis (L serovars)",
      "Neisseria gonorrhoeae"
    ],
    "answer": 1,
    "exp": "A painless primary ulcer followed weeks later by a rash involving the palms and soles, with condylomata lata and lymphadenopathy, is secondary syphilis caused by Treponema pallidum. Diagnosis uses nontreponemal tests (RPR or VDRL) confirmed by treponemal tests. Penicillin is the treatment.",
    "why": [
      "Haemophilus ducreyi causes chancroid, a painful genital ulcer.",
      "Correct: Treponema pallidum causes the painless chancre and the palm-and-sole rash of secondary syphilis.",
      "Herpes simplex virus type 2 causes painful vesicles and ulcers, not this rash.",
      "Chlamydia L serovars cause lymphogranuloma venereum with lymphadenopathy but not a palm-and-sole rash.",
      "Neisseria gonorrhoeae causes urethritis and cervicitis, not this presentation."
    ]
  },
  {
    "id": "s1-0121",
    "system": "Multisystem",
    "discipline": "Genetics",
    "topic": "Neurofibromatosis type 1",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A child has multiple flat, light-brown skin patches and freckling in the axillae, along with several soft skin nodules and pigmented iris hamartomas. An optic pathway glioma is found, and a parent is similarly affected.\n\n**[IMAGE: multiple cafe-au-lait macules with cutaneous neurofibromas]**",
    "lead": "A mutation in which gene is most likely responsible?",
    "options": [
      "NF1 (neurofibromin) on chromosome 17",
      "NF2 (merlin) on chromosome 22",
      "TSC1 or TSC2",
      "VHL",
      "RET"
    ],
    "answer": 0,
    "exp": "Cafe-au-lait macules, axillary freckling, neurofibromas, Lisch nodules, and an optic glioma indicate neurofibromatosis type 1. It is an autosomal dominant disorder caused by mutation of the NF1 gene on chromosome 17, which encodes neurofibromin, a negative regulator of Ras. Patients also have an increased risk of pheochromocytoma.",
    "why": [
      "Correct: an NF1 (neurofibromin) mutation on chromosome 17 causes neurofibromatosis type 1.",
      "NF2 mutations cause bilateral vestibular schwannomas, not this cutaneous picture.",
      "TSC1 or TSC2 mutations cause tuberous sclerosis, with ash-leaf spots and seizures.",
      "VHL mutations cause hemangioblastomas and renal cell carcinoma.",
      "RET mutations underlie multiple endocrine neoplasia type 2 and medullary thyroid carcinoma."
    ]
  },
  {
    "id": "s1-0122",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Biostatistics",
    "topic": "Relative risk from a cohort study",
    "difficulty": "moderate",
    "anchor": "table",
    "vignette": "A cohort study follows exposed and unexposed groups for the development of a disease.\n\n| Group | Disease | No disease |\n|---|---|---|\n| Exposed | 40 | 160 |\n| Unexposed | 10 | 190 |",
    "lead": "What is the relative risk of disease with exposure?",
    "options": [
      "0.25",
      "2",
      "4",
      "8",
      "0.05"
    ],
    "answer": 2,
    "exp": "Relative risk is the risk in the exposed divided by the risk in the unexposed. The risk in the exposed is 40 of 200, or 0.20, and the risk in the unexposed is 10 of 200, or 0.05. Dividing gives 0.20 over 0.05, which equals 4, so exposed individuals have four times the risk.",
    "why": [
      "0.25 is the inverse of the correct relative risk.",
      "2 does not result from the correct calculation.",
      "Correct: relative risk = (40/200) / (10/200) = 0.20 / 0.05 = 4.",
      "8 does not result from the correct calculation.",
      "0.05 is the risk in the unexposed group, not the relative risk."
    ]
  },
  {
    "id": "s1-0123",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Epidemiology",
    "topic": "Hawthorne effect",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "In a study of hand-hygiene compliance, hospital staff wash their hands far more often when they know research observers are present than at other times.",
    "lead": "Which effect does this best illustrate?",
    "options": [
      "Lead-time bias",
      "Recall bias",
      "Confounding",
      "Selection bias",
      "The Hawthorne effect"
    ],
    "answer": 4,
    "exp": "The Hawthorne effect is the tendency of study subjects to change their behavior because they know they are being observed. It threatens validity when the outcome depends on behavior. Blinding of observers or unobtrusive measurement can reduce it.",
    "why": [
      "Lead-time bias concerns earlier detection making survival appear longer, unrelated to being observed.",
      "Recall bias concerns differential accuracy of remembered exposures.",
      "Confounding is distortion by a third variable, not a reaction to observation.",
      "Selection bias arises from nonrandom enrollment, not from being watched.",
      "Correct: changing behavior because of being observed is the Hawthorne effect."
    ]
  },
  {
    "id": "s1-0124",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Honoring an advance directive",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A patient completed a valid living will stating that he would not want mechanical ventilation if he had an irreversible terminal condition. He is now unconscious from end-stage disease, and a decision about intubation is required. His family asks that he be intubated anyway.",
    "lead": "Which is the most appropriate action?",
    "options": [
      "Intubate because the family requests it",
      "Follow the patient's advance directive and withhold mechanical ventilation",
      "Seek a court order to override the directive",
      "Ask the family to sign consent for intubation",
      "Intubate temporarily while the team decides"
    ],
    "answer": 1,
    "exp": "A valid advance directive expresses the patient's own autonomous wishes and should be honored when he loses capacity, taking precedence over family preferences. This directive declines mechanical ventilation for exactly this situation, so intubation should be withheld and care refocused on comfort. Overriding it would violate the patient's autonomy.",
    "why": [
      "The family's wishes do not override the patient's valid, applicable directive.",
      "Correct: the valid advance directive should be followed, withholding mechanical ventilation.",
      "A court order is unnecessary when the directive is valid and clearly applies.",
      "Family consent cannot authorize treatment the patient explicitly declined.",
      "Even temporary intubation would act against the patient's stated wishes."
    ]
  },
  {
    "id": "s1-0125",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Reporting an impaired colleague",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A resident notices that a colleague repeatedly smells of alcohol while on duty, has slurred speech, and has recently made medication errors during patient care.",
    "lead": "Which is the most appropriate action?",
    "options": [
      "Say nothing to protect the colleague's career",
      "Confront the colleague privately and agree to keep it secret",
      "Wait until a patient is clearly harmed before acting",
      "Report the impaired colleague through the appropriate institutional channel",
      "Quietly cover the colleague's shifts to hide the problem"
    ],
    "answer": 3,
    "exp": "An impaired physician endangers patients, and there is an ethical and often legal duty to report suspected impairment through appropriate channels such as a supervisor or a physician health program. Reporting protects patients and directs the colleague toward evaluation and treatment. Concealing the problem or waiting for harm is not acceptable.",
    "why": [
      "Silence leaves patients at risk and neglects the duty to report.",
      "A private agreement to keep it secret does not ensure evaluation or patient safety.",
      "Waiting for a patient to be harmed is unacceptable when the risk is already apparent.",
      "Correct: report the impaired colleague through the appropriate institutional channel to protect patients.",
      "Covering shifts conceals the problem and allows ongoing risk to patients."
    ]
  }
];

const USMLE_STEP1_BY_ID = {};
USMLE_STEP1.forEach(function (q) { if (q && q.id) USMLE_STEP1_BY_ID[q.id] = q; });

// Dual publish: browser globals + Node require(), harmless in either.
if (typeof window !== "undefined") {
  window.USMLE_STEP1 = USMLE_STEP1;
  window.USMLE_STEP1_BY_ID = USMLE_STEP1_BY_ID;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { USMLE_STEP1: USMLE_STEP1, USMLE_STEP1_BY_ID: USMLE_STEP1_BY_ID };
}
