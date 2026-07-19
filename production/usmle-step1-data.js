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
 *   usmle-step1-b6.js -> USMLE_STEP1_B6 (25)
 *   usmle-step1-b7.js -> USMLE_STEP1_B7 (25)
 *   usmle-step1-b8.js -> USMLE_STEP1_B8 (25)
 *   usmle-step1-b9.js -> USMLE_STEP1_B9 (25)
 *   usmle-step1-b10.js -> USMLE_STEP1_B10 (25)
 *   usmle-step1-b11.js -> USMLE_STEP1_B11 (25)
 *   usmle-step1-b12.js -> USMLE_STEP1_B12 (5)
 *   TOTAL: 280 items
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
    "lead": "Which of the following enzymatic abnormalities best accounts for this presentation?",
    "options": [
      "Adenosine deaminase deficiency",
      "Adenine phosphoribosyltransferase deficiency",
      "Hypoxanthine-guanine phosphoribosyltransferase deficiency",
      "Xanthine oxidase deficiency",
      "PRPP synthetase overactivity"
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
      "An in-frame deletion that preserves partial dystrophin function"
    ],
    "answer": 2,
    "exp": "Proximal weakness with Gowers sign, calf pseudohypertrophy, very high creatine kinase, and X-linked family history is Duchenne muscular dystrophy. Frameshift mutations in the dystrophin gene abolish functional dystrophin, so myofibers lack the link between cytoskeleton and extracellular matrix and undergo progressive degeneration. Absent dystrophin distinguishes Duchenne from the milder Becker form.",
    "why": [
      "Type I collagen defects cause osteogenesis imperfecta with fractures and blue sclerae, not myopathy.",
      "A DMPK CTG expansion causes myotonic dystrophy with grip myotonia, cataracts, and distal weakness.",
      "Correct: a frameshift mutation eliminates dystrophin, producing severe early-onset Duchenne dystrophy.",
      "Acetylcholine receptor autoantibodies cause myasthenia gravis with fatigable weakness and normal creatine kinase.",
      "An in-frame deletion preserving partial dystrophin produces the milder Becker dystrophy, not this severe early presentation."
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
      "1 to 2 months",
      "3 to 5 months",
      "10 to 12 months",
      "15 to 18 months",
      "6 to 9 months"
    ],
    "answer": 4,
    "exp": "Sitting unsupported, transferring objects between hands, babbling, and the onset of stranger anxiety cluster around 6 to 9 months of age. Motor milestones advance in a cephalocaudal (head-to-toe) direction. By around 12 months, most children take first steps, use a pincer grasp, and say a first word.",
    "why": [
      "At 1 to 2 months, infants have a social smile and can track objects but cannot sit or transfer.",
      "At 3 to 5 months, infants hold the head steady, roll, and laugh but do not yet sit unsupported.",
      "At 10 to 12 months, children typically take first steps and say a first word, beyond these milestones.",
      "At 15 to 18 months, children walk well and use several words, well beyond this cluster.",
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
    "difficulty": "moderate",
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
    "difficulty": "moderate",
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
  },
  {
    "id": "s1-0126",
    "system": "General Principles",
    "discipline": "Biochemistry",
    "topic": "Homocystinuria (cystathionine beta-synthase deficiency)",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 14-year-old boy is evaluated for a tall, thin build with long limbs, a pectus deformity, and downward and inward dislocation of both ocular lenses. He has mild intellectual disability, and a maternal cousin died of a pulmonary embolism as a teenager. He has fair skin and a malar flush.\n\n| Test | Value | Reference |\n|---|---|---|\n| Plasma total homocysteine | markedly elevated | normal |\n| Plasma methionine | elevated | normal |\n| Urine homocystine | present | absent |",
    "lead": "A deficiency of which enzyme best explains these findings?",
    "options": [
      "Methylenetetrahydrofolate reductase",
      "Cystathionine beta-synthase",
      "Methionine synthase",
      "Fibrillin-1",
      "Homogentisate oxidase"
    ],
    "answer": 1,
    "exp": "The combination of a marfanoid habitus, downward lens dislocation, thromboembolism, and intellectual disability with elevated homocysteine points to classic homocystinuria from cystathionine beta-synthase deficiency. Because the block is downstream of methionine, homocysteine cannot be converted to cystathionine, so both homocysteine and methionine accumulate. The elevated (rather than low) methionine is the key clue that separates this defect from remethylation defects.",
    "why": [
      "MTHFR deficiency impairs remethylation of homocysteine to methionine, so homocysteine rises but methionine is low, not elevated.",
      "Correct: cystathionine beta-synthase deficiency blocks homocysteine disposal, raising both homocysteine and methionine and causing the marfanoid, thrombotic phenotype.",
      "Methionine synthase deficiency also impairs remethylation and lowers methionine, the opposite of this pattern.",
      "A fibrillin-1 defect (Marfan syndrome) causes a similar habitus but with upward lens dislocation and normal homocysteine.",
      "Homogentisate oxidase deficiency (alkaptonuria) causes dark urine and ochronosis, not hyperhomocysteinemia."
    ]
  },
  {
    "id": "s1-0127",
    "system": "General Principles",
    "discipline": "Genetics",
    "topic": "Familial hypercholesterolemia",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 12-year-old boy is found to have firm nodules over both Achilles tendons and a pale ring at the edge of the cornea. His father had a myocardial infarction at age 38, and a paternal grandfather died suddenly in his forties.\n\n| Test | Value | Reference |\n|---|---|---|\n| Total cholesterol | 390 mg/dL | < 200 |\n| LDL cholesterol | 310 mg/dL | < 130 |\n| Triglycerides | 110 mg/dL | < 150 |",
    "lead": "Which molecular defect is most likely responsible?",
    "options": [
      "Deficiency of lipoprotein lipase",
      "Deficiency of apolipoprotein C-II",
      "Defective or absent LDL receptors",
      "Overproduction of hepatic VLDL",
      "Deficiency of hepatic lipase"
    ],
    "answer": 2,
    "exp": "Very high LDL cholesterol with tendon xanthomas, corneal arcus in a child, and premature coronary disease in the family is familial hypercholesterolemia, an autosomal dominant defect of the LDL receptor. Loss of functional receptors prevents hepatic clearance of LDL, so LDL cholesterol accumulates from early life. The isolated LDL elevation with normal triglycerides is characteristic.",
    "why": [
      "Lipoprotein lipase deficiency causes severe hypertriglyceridemia and chylomicronemia with pancreatitis, not isolated LDL elevation.",
      "Apolipoprotein C-II deficiency impairs lipoprotein lipase activation, again producing hypertriglyceridemia rather than high LDL.",
      "Correct: defective LDL receptors prevent LDL clearance, raising LDL from birth and causing tendon xanthomas and early coronary disease.",
      "Isolated hepatic VLDL overproduction predominantly raises triglycerides, which are normal here.",
      "Hepatic lipase deficiency is rare and elevates remnant particles and triglycerides, not selectively LDL."
    ]
  },
  {
    "id": "s1-0128",
    "system": "General Principles",
    "discipline": "Pharmacology",
    "topic": "Zero-order elimination kinetics",
    "difficulty": "hard",
    "anchor": null,
    "vignette": "A 30-year-old man with a seizure disorder is maintained on phenytoin. When his dose is increased by a small amount to improve seizure control, he returns two weeks later with nystagmus, ataxia, and confusion, and his measured serum drug level is far higher than the proportional increase in dose would predict.",
    "lead": "Which statement best describes the elimination of this drug at therapeutic doses?",
    "options": [
      "Clearance increases progressively as the plasma concentration rises",
      "The elimination half-life is constant across all plasma concentrations",
      "A constant fraction of the drug is eliminated per unit time",
      "A constant amount of drug is eliminated per unit time once metabolism is saturated",
      "The drug follows simple first-order kinetics at every dose"
    ],
    "answer": 3,
    "exp": "Phenytoin exhibits saturable, capacity-limited metabolism, so at therapeutic concentrations the enzymes are nearly saturated and elimination becomes zero-order. Under zero-order kinetics a constant amount of drug is cleared per unit time regardless of concentration, so a small dose increase produces a disproportionately large rise in serum level and toxicity. Ethanol and high-dose aspirin behave similarly.",
    "why": [
      "With saturated enzymes, clearance actually falls as concentration rises, so this is incorrect.",
      "The half-life is not constant in zero-order kinetics; it lengthens as concentration increases.",
      "Elimination of a constant fraction per unit time describes first-order, not the saturated zero-order behavior seen here.",
      "Correct: once metabolizing enzymes are saturated, a fixed amount is eliminated per unit time, so small dose changes cause large, disproportionate level increases.",
      "The disproportionate rise in level specifically indicates a departure from first-order kinetics."
    ]
  },
  {
    "id": "s1-0129",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Pathology",
    "topic": "Iron deficiency anemia",
    "difficulty": "easy",
    "anchor": "lab",
    "vignette": "A 32-year-old woman reports fatigue, and a craving to chew ice for several months. She has heavy menstrual periods. Her fingernails appear spooned, and the conjunctivae are pale.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 9.0 g/dL | 12.0-15.5 |\n| Mean corpuscular volume | 72 fL | 80-100 |\n| Ferritin | 6 ng/mL | 15-150 |\n| Total iron-binding capacity | high | - |",
    "lead": "Which is the most likely cause of her anemia?",
    "options": [
      "Iron deficiency anemia",
      "Anemia of chronic disease",
      "Beta-thalassemia minor",
      "Sideroblastic anemia",
      "Vitamin B12 deficiency"
    ],
    "answer": 0,
    "exp": "A microcytic anemia with a low ferritin and a high total iron-binding capacity in a woman with heavy menses is iron deficiency, the most common cause of microcytic anemia. Depleted iron stores lower ferritin and prompt a compensatory rise in transferrin (TIBC). Pica such as ice craving and koilonychia are classic associated findings.",
    "why": [
      "Correct: a low ferritin with a high TIBC in a menstruating woman indicates depleted iron stores causing microcytic anemia.",
      "Anemia of chronic disease usually shows a normal or high ferritin with a low TIBC, the reverse of these values.",
      "Beta-thalassemia minor causes microcytosis with a normal or high ferritin and a normal or elevated red cell count.",
      "Sideroblastic anemia typically shows high iron stores with ringed sideroblasts, not a low ferritin.",
      "Vitamin B12 deficiency causes a macrocytic, not microcytic, anemia."
    ]
  },
  {
    "id": "s1-0130",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Pathology",
    "topic": "Hodgkin lymphoma",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 24-year-old man has painless, rubbery cervical lymphadenopathy, drenching night sweats, and a 5-kg weight loss over three months. He notes that the enlarged nodes ache after he drinks alcohol.\n\n**[IMAGE: lymph node biopsy showing a large binucleate cell with two mirror-image nuclei, each containing a single prominent eosinophilic nucleolus (owl-eye appearance), set among small reactive lymphocytes]**",
    "lead": "The cell shown is most characteristic of which condition?",
    "options": [
      "Burkitt lymphoma",
      "Chronic lymphocytic leukemia",
      "Follicular lymphoma",
      "Infectious mononucleosis",
      "Classical Hodgkin lymphoma"
    ],
    "answer": 4,
    "exp": "The large binucleate owl-eye cell is a Reed-Sternberg cell, the diagnostic malignant cell of classical Hodgkin lymphoma. Hodgkin lymphoma classically presents in young adults with painless lymphadenopathy, B symptoms such as night sweats and weight loss, and occasionally alcohol-induced nodal pain. It tends to spread in a contiguous nodal fashion.",
    "why": [
      "Burkitt lymphoma shows sheets of intermediate-sized cells with a starry-sky pattern, not Reed-Sternberg cells.",
      "Chronic lymphocytic leukemia shows small mature lymphocytes with smudge cells on smear.",
      "Follicular lymphoma shows a nodular proliferation of small cleaved cells, not binucleate owl-eye cells.",
      "Infectious mononucleosis produces reactive atypical lymphocytes, which are not malignant Reed-Sternberg cells.",
      "Correct: the binucleate owl-eye Reed-Sternberg cell is the hallmark of classical Hodgkin lymphoma."
    ]
  },
  {
    "id": "s1-0131",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Psychiatry",
    "topic": "Schizophrenia",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 22-year-old man is brought in by his family for 8 months of hearing voices that comment on his actions, a fixed belief that neighbors are broadcasting his thoughts, disorganized and rambling speech, and progressive social withdrawal with a marked decline in self-care and school performance. He does not use substances, and a medical workup is unremarkable.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Schizophreniform disorder",
      "Brief psychotic disorder",
      "Schizophrenia",
      "Schizoaffective disorder",
      "Delusional disorder"
    ],
    "answer": 2,
    "exp": "Continuous psychotic symptoms including hallucinations, delusions, disorganized speech, and negative symptoms with functional decline for more than six months meet criteria for schizophrenia. The duration is the key discriminator: schizophreniform disorder lasts one to six months, and brief psychotic disorder lasts less than one month. There is no prominent mood episode to suggest schizoaffective disorder.",
    "why": [
      "Schizophreniform disorder requires the same symptoms but with a total duration of one to six months.",
      "Brief psychotic disorder resolves within one month, far shorter than this eight-month course.",
      "Correct: psychotic symptoms with functional decline persisting beyond six months define schizophrenia.",
      "Schizoaffective disorder requires a concurrent major mood episode, which is absent here.",
      "Delusional disorder features nonbizarre delusions without prominent hallucinations, disorganized speech, or functional deterioration."
    ]
  },
  {
    "id": "s1-0132",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Genetics",
    "topic": "Huntington disease",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 42-year-old man has one year of jerky, involuntary movements of the limbs and face, irritability, and declining memory. His father developed similar symptoms at age 50 and his affected son began showing subtle changes in his late twenties, a progressively earlier onset across generations.\n\n**[IMAGE: axial brain MRI showing bilateral atrophy of the caudate nuclei with enlargement of the frontal horns of the lateral ventricles]**",
    "lead": "Which molecular mechanism best explains this disorder?",
    "options": [
      "A CAG trinucleotide repeat expansion in the huntingtin gene",
      "A CGG repeat expansion with promoter hypermethylation",
      "A CTG repeat expansion in a protein kinase gene",
      "A GAA repeat expansion that silences frataxin",
      "Deposition of misfolded prion protein"
    ],
    "answer": 0,
    "exp": "Chorea, behavioral change, and dementia in midlife with caudate atrophy and progressively earlier onset across generations is Huntington disease. It is caused by a CAG trinucleotide repeat expansion in the huntingtin gene, and the repeat tends to lengthen during spermatogenesis, producing genetic anticipation. Loss of GABAergic medium spiny neurons in the striatum underlies the chorea.",
    "why": [
      "Correct: a CAG repeat expansion in the huntingtin gene causes striatal neurodegeneration, with anticipation from repeat lengthening.",
      "A CGG expansion with hypermethylation causes fragile X syndrome, a childhood intellectual disability syndrome.",
      "A CTG expansion causes myotonic dystrophy with myotonia and cataracts, not midlife chorea.",
      "A GAA expansion silencing frataxin causes Friedreich ataxia with early-onset ataxia and cardiomyopathy.",
      "Prion protein deposition causes rapidly progressive dementia with myoclonus over months, not this slower chorea with a clear autosomal dominant pedigree."
    ]
  },
  {
    "id": "s1-0133",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Biochemistry",
    "topic": "Wernicke encephalopathy (thiamine deficiency)",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 55-year-old man with a long history of heavy alcohol use is brought to the emergency department confused. He has horizontal nystagmus and an inability to fully abduct one eye, and he is unsteady with a wide-based gait. He worsens acutely after receiving intravenous dextrose without any vitamin supplementation.",
    "lead": "A deficiency of which vitamin best explains this presentation?",
    "options": [
      "Niacin",
      "Thiamine",
      "Cobalamin",
      "Folate",
      "Pyridoxine"
    ],
    "answer": 1,
    "exp": "The triad of confusion, ophthalmoplegia with nystagmus, and gait ataxia in a person with heavy alcohol use is Wernicke encephalopathy from thiamine deficiency. Thiamine is a cofactor for enzymes of glucose metabolism, so giving glucose before thiamine can consume remaining stores and precipitate or worsen the syndrome. Prompt thiamine administration can reverse the deficit and prevent irreversible Korsakoff amnesia.",
    "why": [
      "Niacin deficiency causes pellagra with dermatitis, diarrhea, and dementia, not ophthalmoplegia with ataxia.",
      "Correct: thiamine deficiency causes Wernicke encephalopathy, and a glucose load without thiamine can precipitate it.",
      "Cobalamin deficiency causes macrocytic anemia and subacute combined degeneration, not acute ophthalmoplegia.",
      "Folate deficiency causes macrocytic anemia without the neurologic triad seen here.",
      "Pyridoxine deficiency causes peripheral neuropathy and sideroblastic anemia, not this ocular and gait syndrome."
    ]
  },
  {
    "id": "s1-0134",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Osteoporosis",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 68-year-old woman presents with sudden mid-back pain and has lost 3 cm of height over two years. Imaging shows a vertebral compression fracture. She has no bone pain between fractures.\n\n| Test | Value | Reference |\n|---|---|---|\n| Serum calcium | 9.4 mg/dL | 8.5-10.5 |\n| Serum phosphate | 3.4 mg/dL | 2.5-4.5 |\n| Alkaline phosphatase | 70 U/L | 40-120 |\n| Parathyroid hormone | 40 pg/mL | 15-65 |\n| DEXA T-score (hip) | -2.8 | > -1.0 |",
    "lead": "Which best characterizes the underlying bone abnormality?",
    "options": [
      "Defective mineralization of osteoid with normal bone volume",
      "Increased osteoclastic resorption driven by elevated parathyroid hormone",
      "Replacement of marrow by fibrous tissue and abnormal trabeculae",
      "Reduced bone mass with normal bone mineralization and normal laboratory values",
      "Disordered remodeling with a markedly elevated alkaline phosphatase"
    ],
    "answer": 3,
    "exp": "A postmenopausal woman with a fragility fracture, a T-score of -2.8, and entirely normal calcium, phosphate, alkaline phosphatase, and parathyroid hormone has osteoporosis. In osteoporosis the bone that remains is normally mineralized, but its total mass is reduced, so routine laboratory studies are normal and the diagnosis rests on bone density and fracture. The normal labs are what exclude osteomalacia, hyperparathyroidism, and Paget disease.",
    "why": [
      "Defective osteoid mineralization describes osteomalacia, which typically lowers calcium or phosphate and raises alkaline phosphatase.",
      "PTH-driven resorption (hyperparathyroidism) would show an elevated calcium and PTH, which are normal here.",
      "Marrow fibrosis with abnormal trabeculae suggests other marrow or metabolic disorders, not this normal-lab picture.",
      "Correct: osteoporosis is a loss of bone mass with normal mineralization, so laboratory values are normal and density is low.",
      "A markedly elevated alkaline phosphatase with disordered remodeling suggests Paget disease, but the alkaline phosphatase here is normal."
    ]
  },
  {
    "id": "s1-0135",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Osteosarcoma",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 15-year-old boy has several weeks of pain and swelling just above the knee that is worse at night. There is no history of trauma.\n\n**[IMAGE: plain radiograph of the distal femoral metaphysis showing a destructive lesion with a spiculated sunburst periosteal reaction and a Codman triangle where the periosteum is lifted from the cortex]**",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Ewing sarcoma",
      "Osteochondroma",
      "Giant cell tumor",
      "Chondrosarcoma",
      "Osteosarcoma"
    ],
    "answer": 4,
    "exp": "A destructive metaphyseal lesion of the distal femur in an adolescent with a sunburst periosteal reaction and a Codman triangle is characteristic of osteosarcoma, the most common primary bone malignancy of youth. It arises most often around the knee at the metaphysis of rapidly growing long bones. The aggressive periosteal reaction reflects rapid tumor growth lifting the periosteum.",
    "why": [
      "Ewing sarcoma typically arises in the diaphysis and shows a layered onion-skin periosteal reaction, not a sunburst pattern.",
      "Osteochondroma is a benign cartilage-capped bony outgrowth continuous with the cortex, not a destructive lesion.",
      "Giant cell tumor arises at the epiphysis of adults and appears as a lytic soap-bubble lesion.",
      "Chondrosarcoma usually affects older adults in the axial skeleton or pelvis.",
      "Correct: a metaphyseal lesion with a sunburst reaction and Codman triangle in an adolescent is osteosarcoma."
    ]
  },
  {
    "id": "s1-0136",
    "system": "Cardiovascular",
    "discipline": "Physiology",
    "topic": "Wolff-Parkinson-White syndrome",
    "difficulty": "moderate",
    "anchor": "ecg",
    "vignette": "A 25-year-old man has recurrent episodes of sudden, rapid, regular palpitations that start and stop abruptly. He is asymptomatic between episodes, and a resting tracing is obtained.\n\n**[ECG: sinus rhythm with a short PR interval and slurred upstroke of the QRS complex (a delta wave), producing a widened QRS]**",
    "lead": "Which best explains these electrocardiographic findings?",
    "options": [
      "Delayed conduction through the atrioventricular node",
      "An accessory pathway that bypasses the atrioventricular node and pre-excites the ventricle",
      "Reentry confined entirely within the atrioventricular node",
      "Complete failure of atrioventricular conduction",
      "An ectopic atrial focus firing at a rapid rate"
    ],
    "answer": 1,
    "exp": "A short PR interval with a delta wave is the signature of ventricular pre-excitation in Wolff-Parkinson-White syndrome. An accessory pathway (the bundle of Kent) conducts directly from atrium to ventricle, bypassing the delay of the atrioventricular node and beginning ventricular depolarization early, which produces the slurred QRS upstroke. This pathway can support reentrant tachycardias that cause the paroxysmal palpitations.",
    "why": [
      "Delayed AV nodal conduction would prolong the PR interval, the opposite of the short PR seen here.",
      "Correct: an accessory pathway pre-excites the ventricle, shortening the PR interval and creating the delta wave.",
      "Reentry limited to the AV node causes tachycardia but does not produce a resting delta wave.",
      "Complete AV conduction failure produces heart block with dissociated P waves, not pre-excitation.",
      "A rapid ectopic atrial focus causes atrial tachycardia without a delta wave."
    ]
  },
  {
    "id": "s1-0137",
    "system": "Cardiovascular",
    "discipline": "Pathology",
    "topic": "Coarctation of the aorta",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 14-year-old boy is found to have a blood pressure of 150/95 mm Hg in both arms but only 105/70 mm Hg in the legs. The femoral pulses are weak and delayed relative to the radial pulses, and a systolic murmur is heard over the back.\n\n**[IMAGE: chest radiograph showing notching along the inferior margins of several posterior ribs and a subtle contour indentation of the aortic silhouette]**",
    "lead": "Which best explains the blood pressure findings?",
    "options": [
      "A patent ductus arteriosus with a left-to-right shunt",
      "Aortic valve stenosis limiting cardiac output",
      "Fibromuscular dysplasia of the renal arteries",
      "Congenital narrowing of the aorta just distal to the left subclavian artery",
      "An atrial septal defect with right-sided volume overload"
    ],
    "answer": 3,
    "exp": "Upper extremity hypertension with weak, delayed femoral pulses and lower leg pressures is the classic picture of coarctation of the aorta. Narrowing distal to the left subclavian artery raises pressure proximally and reduces it distally, and collateral flow through intercostal arteries erodes the ribs to produce rib notching. It is associated with bicuspid aortic valve and Turner syndrome.",
    "why": [
      "A patent ductus arteriosus causes a continuous murmur and wide pulse pressure, not an arm-leg pressure gradient with rib notching.",
      "Aortic valve stenosis reduces output but does not create differential pressures between the arms and legs.",
      "Renal fibromuscular dysplasia causes secondary hypertension but not delayed femoral pulses or rib notching.",
      "Correct: narrowing of the aorta distal to the left subclavian raises upper-body pressure, lowers leg pressure, and produces collateral rib notching.",
      "An atrial septal defect causes a fixed split S2 and right heart volume overload, not an arm-leg pressure difference."
    ]
  },
  {
    "id": "s1-0138",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Pulmonary embolism",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 62-year-old woman develops sudden dyspnea and sharp pleuritic chest pain three days after a total hip replacement. She is tachycardic and tachypneic, and her right calf is swollen and tender. Breath sounds are clear and symmetric.\n\n| Test | Value | Reference |\n|---|---|---|\n| Arterial pH | 7.49 | 7.35-7.45 |\n| PaO2 (room air) | 62 mm Hg | 75-100 |\n| PaCO2 | 28 mm Hg | 35-45 |\n| Alveolar-arterial O2 gradient | widened | normal |",
    "lead": "Which mechanism best accounts for the blood gas findings?",
    "options": [
      "Increased alveolar dead space from obstructed pulmonary blood flow, with hyperventilation lowering the PaCO2",
      "Alveolar hypoventilation producing hypoxemia with a normal alveolar-arterial gradient",
      "A right-to-left intracardiac shunt present since birth",
      "Impaired diffusion across a fibrotic alveolar membrane",
      "A reduced inspired oxygen tension from high altitude"
    ],
    "answer": 0,
    "exp": "The abrupt onset after immobilizing surgery with a swollen calf indicates a pulmonary embolism. Obstruction of pulmonary arterial flow creates ventilated but poorly perfused lung (dead space) and ventilation-perfusion mismatch, causing hypoxemia with a widened alveolar-arterial gradient, while reflex hyperventilation drives the PaCO2 down and produces a respiratory alkalosis. Recognizing the low PaCO2 with a widened A-a gradient points to embolic dead space rather than hypoventilation.",
    "why": [
      "Correct: embolic obstruction increases dead space and V/Q mismatch, causing hypoxemia with a widened A-a gradient, and hyperventilation lowers the PaCO2.",
      "Pure hypoventilation raises the PaCO2 and leaves the A-a gradient normal, neither of which fits this low PaCO2 and widened gradient.",
      "A congenital right-to-left shunt would have caused chronic cyanosis, not an acute postoperative event.",
      "Diffusion impairment from fibrosis develops chronically with imaging changes, not suddenly after surgery.",
      "High-altitude hypoxia lowers inspired oxygen for everyone but does not explain a unilateral swollen calf or an acute postoperative presentation."
    ]
  },
  {
    "id": "s1-0139",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Poststreptococcal glomerulonephritis",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 7-year-old boy develops dark, cola-colored urine and puffiness around the eyes. Two weeks earlier he had crusted, honey-colored skin lesions that resolved. His blood pressure is elevated for age.\n\n| Test | Value | Reference |\n|---|---|---|\n| Urinalysis | dysmorphic RBCs and red cell casts | none |\n| Serum C3 | low | normal |\n| Anti-DNase B titer | elevated | normal |\n| Serum creatinine | mildly elevated | age-based |",
    "lead": "Which mechanism best explains his kidney disease?",
    "options": [
      "Antibodies directed against the glomerular basement membrane",
      "IgA deposition in the mesangium arising during an active infection",
      "Deposition of immune complexes producing a nephritic syndrome",
      "Podocyte foot process effacement without immune deposits",
      "Diffusely thickened capillary loops from subepithelial IgG spikes"
    ],
    "answer": 2,
    "exp": "A nephritic picture of hematuria with red cell casts, hypertension, edema, and a low C3 appearing two weeks after a streptococcal skin infection is poststreptococcal glomerulonephritis. Immune complexes deposit in the glomeruli as subepithelial humps, activating complement and consuming C3. The latent period after the infection and the elevated anti-DNase B titer support the diagnosis.",
    "why": [
      "Anti-glomerular basement membrane disease (Goodpasture) causes linear immunofluorescence with hemoptysis, not a postinfectious low-C3 nephritis.",
      "IgA nephropathy causes hematuria concurrent with an infection within a day or two, not after a two-week latent period, and complement is usually normal.",
      "Correct: immune complex deposition after streptococcal infection consumes C3 and produces a nephritic syndrome with red cell casts.",
      "Podocyte effacement without deposits describes minimal change disease, which causes nephrotic-range proteinuria, not this nephritic picture.",
      "Subepithelial IgG spikes with thickened loops describe membranous nephropathy, a nephrotic disease with normal complement."
    ]
  },
  {
    "id": "s1-0140",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Ulcerative colitis",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 26-year-old man has several months of bloody diarrhea with mucus, lower abdominal cramping, and urgency with a feeling of incomplete evacuation. Colonoscopy shows continuous, uninterrupted inflammation and friable mucosa extending proximally from the rectum, with several pseudopolyps. He also has itching and elevated cholestatic liver enzymes.",
    "lead": "Which feature best distinguishes his condition from Crohn disease?",
    "options": [
      "Transmural inflammation with noncaseating granulomas",
      "Skip lesions with a cobblestone mucosal appearance",
      "Frequent perianal fistulas and strictures",
      "Involvement of the terminal ileum with sparing of the rectum",
      "Continuous mucosal inflammation extending proximally from the rectum"
    ],
    "answer": 4,
    "exp": "Bloody diarrhea with tenesmus and a continuous field of mucosal inflammation beginning at the rectum is ulcerative colitis. In contrast to the transmural, discontinuous (skip lesion) pattern of Crohn disease, ulcerative colitis is limited to the mucosa and submucosa and involves the colon continuously from the rectum. The associated cholestatic liver enzymes suggest primary sclerosing cholangitis, which is more strongly linked to ulcerative colitis.",
    "why": [
      "Transmural inflammation with granulomas is characteristic of Crohn disease, not ulcerative colitis.",
      "Skip lesions and cobblestoning are features of Crohn disease.",
      "Perianal fistulas and strictures reflect the transmural disease of Crohn disease.",
      "Terminal ileal involvement with rectal sparing is typical of Crohn disease, whereas ulcerative colitis characteristically involves the rectum.",
      "Correct: continuous mucosal inflammation extending proximally from the rectum is the distinguishing pattern of ulcerative colitis."
    ]
  },
  {
    "id": "s1-0141",
    "system": "Gastrointestinal",
    "discipline": "Physiology",
    "topic": "Hypertrophic pyloric stenosis",
    "difficulty": "easy",
    "anchor": "lab",
    "vignette": "A 4-week-old firstborn boy has forceful, projectile vomiting of milk that is never bilious, occurring shortly after each feed. He remains hungry and eager to feed afterward. A firm, olive-shaped mass is palpable in the epigastrium, and peristaltic waves are visible across the abdomen.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sodium | 136 mEq/L | 135-145 |\n| Potassium | 3.1 mEq/L | 3.5-5.0 |\n| Chloride | 92 mEq/L | 98-106 |\n| Bicarbonate | 34 mEq/L | 22-28 |",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Duodenal atresia",
      "Hypertrophic pyloric stenosis",
      "Gastroesophageal reflux",
      "Malrotation with midgut volvulus",
      "Necrotizing enterocolitis"
    ],
    "answer": 1,
    "exp": "Nonbilious projectile vomiting in a first-born infant at around one month of age with a palpable olive-shaped epigastric mass is hypertrophic pyloric stenosis. Loss of gastric hydrochloric acid from repeated vomiting produces the hypochloremic, hypokalemic metabolic alkalosis shown. The vomiting is nonbilious because the obstruction is proximal to the ampulla of Vater.",
    "why": [
      "Duodenal atresia causes bilious vomiting on the first day of life and a double-bubble sign, often with Down syndrome.",
      "Correct: nonbilious projectile vomiting with an olive mass and a hypochloremic hypokalemic alkalosis is pyloric stenosis.",
      "Gastroesophageal reflux causes effortless regurgitation rather than forceful projectile vomiting with an olive mass.",
      "Malrotation with volvulus causes bilious vomiting and is a surgical emergency, unlike this nonbilious picture.",
      "Necrotizing enterocolitis occurs mainly in premature infants with abdominal distention and bloody stools."
    ]
  },
  {
    "id": "s1-0142",
    "system": "Reproductive & Endocrine",
    "discipline": "Immunology",
    "topic": "Graves disease",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 34-year-old woman has palpitations, heat intolerance, weight loss despite a good appetite, and tremor. She has a diffusely enlarged, non-tender thyroid with an audible bruit, protrusion of the eyes, and thickened, non-pitting skin over the shins.\n\n| Test | Value | Reference |\n|---|---|---|\n| Thyroid-stimulating hormone | < 0.01 mIU/L | 0.4-4.0 |\n| Free thyroxine | high | - |\n| Radioiodine uptake | diffusely increased | - |",
    "lead": "Which mechanism best explains her hyperthyroidism?",
    "options": [
      "IgG autoantibodies that stimulate the TSH receptor",
      "Autoantibodies that destroy thyroid peroxidase",
      "A TSH-secreting pituitary adenoma",
      "Autonomous hormone release from a single hyperfunctioning nodule",
      "Release of preformed hormone from an inflamed gland"
    ],
    "answer": 0,
    "exp": "Hyperthyroidism with a diffuse goiter, diffusely increased radioiodine uptake, exophthalmos, and pretibial myxedema is Graves disease. It is caused by IgG thyroid-stimulating immunoglobulins that bind and activate the TSH receptor, driving hormone synthesis and gland growth independent of pituitary control. The extrathyroidal eye and skin findings are specific to Graves disease.",
    "why": [
      "Correct: stimulating IgG antibodies against the TSH receptor drive diffuse hormone production and cause the eye and skin findings.",
      "Antibodies that destroy thyroid peroxidase cause Hashimoto hypothyroidism, not hyperthyroidism with high uptake.",
      "A TSH-secreting adenoma would raise TSH, whereas TSH is suppressed here.",
      "A single autonomous nodule shows focal uptake, not the diffuse uptake and eye disease seen here.",
      "Release of preformed hormone from thyroiditis produces low, not increased, radioiodine uptake."
    ]
  },
  {
    "id": "s1-0143",
    "system": "Reproductive & Endocrine",
    "discipline": "Physiology",
    "topic": "Primary adrenal insufficiency (Addison disease)",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 40-year-old woman has months of fatigue, weight loss, dizziness on standing, and a craving for salty foods. She has darkening of the skin creases and buccal mucosa. Her blood pressure is 92/58 mm Hg.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sodium | 129 mEq/L | 135-145 |\n| Potassium | 5.6 mEq/L | 3.5-5.0 |\n| Morning cortisol | low | - |\n| ACTH | markedly elevated | - |\n| Cortisol after cosyntropin | no significant rise | - |",
    "lead": "Which best explains her condition?",
    "options": [
      "Suppression of the hypothalamic-pituitary axis by exogenous glucocorticoids",
      "A pituitary adenoma failing to secrete ACTH",
      "Isolated aldosterone deficiency with normal cortisol",
      "Tissue resistance to normally produced cortisol",
      "Destruction of the adrenal cortex with loss of both cortisol and aldosterone"
    ],
    "answer": 4,
    "exp": "Hyponatremia, hyperkalemia, hypotension, and hyperpigmentation with a low cortisol, a markedly elevated ACTH, and no response to cosyntropin indicate primary adrenal insufficiency. The high ACTH localizes the defect to the adrenal cortex itself, and the excess ACTH-related peptides stimulate melanocytes to cause hyperpigmentation. Loss of aldosterone explains the salt wasting and hyperkalemia that secondary (pituitary) disease would spare.",
    "why": [
      "Exogenous steroid suppression lowers ACTH and does not cause hyperpigmentation or hyperkalemia.",
      "A pituitary cause would show a low ACTH and generally preserved aldosterone, unlike this high ACTH with hyperkalemia.",
      "Isolated aldosterone deficiency would not lower cortisol or fail the cosyntropin test.",
      "Cortisol resistance would raise, not lower, measured cortisol levels.",
      "Correct: a high ACTH with an absent cortisol response localizes the lesion to the adrenal cortex, and combined cortisol and aldosterone loss explains the electrolytes and pigmentation."
    ]
  },
  {
    "id": "s1-0144",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Preeclampsia",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 30-year-old primigravida at 34 weeks of gestation develops a new blood pressure of 162/104 mm Hg on repeated measurements, along with a headache, mild right upper quadrant discomfort, and new lower extremity swelling. Urinalysis shows 2+ protein, and her prior pregnancy blood pressures had been normal.",
    "lead": "Which best explains the underlying pathophysiology?",
    "options": [
      "An autoimmune reaction against fetal red cell antigens",
      "Excess placental beta-hCG production from molar tissue",
      "Abnormal placental spiral artery remodeling causing widespread maternal endothelial dysfunction",
      "Infarction of the pituitary gland reducing hormone output",
      "Placental hormone-induced insulin resistance"
    ],
    "answer": 2,
    "exp": "New-onset hypertension with proteinuria after 20 weeks of gestation is preeclampsia. It arises from inadequate remodeling of the uterine spiral arteries by trophoblast, producing placental ischemia and release of anti-angiogenic factors that cause systemic maternal endothelial dysfunction. This endothelial injury underlies the hypertension, proteinuria, and organ symptoms such as headache and right upper quadrant pain.",
    "why": [
      "An immune reaction to fetal red cells causes hemolytic disease of the fetus, not maternal hypertension with proteinuria.",
      "Excess beta-hCG from molar tissue can cause early hypertension, but a normal pregnancy at 34 weeks with these findings reflects preeclampsia, not a mole.",
      "Correct: defective spiral artery remodeling causes placental ischemia and maternal endothelial dysfunction, producing hypertension and proteinuria.",
      "Pituitary infarction (Sheehan syndrome) occurs postpartum from hemorrhage and causes hypopituitarism, not antenatal hypertension.",
      "Placental insulin resistance produces gestational diabetes, not hypertension with proteinuria."
    ]
  },
  {
    "id": "s1-0145",
    "system": "Multisystem",
    "discipline": "Immunology",
    "topic": "Systemic lupus erythematosus",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 24-year-old woman has months of fatigue, joint pain in the hands and wrists, painless oral ulcers, and a rash across her cheeks and nose that worsens with sun exposure. She has had one episode of pleuritic chest pain.\n\n| Test | Value | Reference |\n|---|---|---|\n| Antinuclear antibody | positive, high titer | negative |\n| Serum C3 and C4 | low | normal |\n| Urinalysis | proteinuria | none |",
    "lead": "Which antibody is most specific for this diagnosis?",
    "options": [
      "Anti-histone antibody",
      "Anti-centromere antibody",
      "Anti-cyclic citrullinated peptide antibody",
      "Anti-double-stranded DNA antibody",
      "Anti-topoisomerase (Scl-70) antibody"
    ],
    "answer": 3,
    "exp": "A young woman with a photosensitive malar rash, arthritis, oral ulcers, serositis, low complement, and a positive ANA has systemic lupus erythematosus. Although the ANA is sensitive, anti-double-stranded DNA is highly specific for lupus and tends to correlate with disease activity and lupus nephritis. Anti-Smith antibody is also highly specific.",
    "why": [
      "Anti-histone antibodies are most associated with drug-induced lupus rather than being specific for idiopathic SLE.",
      "Anti-centromere antibodies are seen in limited systemic sclerosis (CREST).",
      "Anti-cyclic citrullinated peptide antibodies are specific for rheumatoid arthritis.",
      "Correct: anti-double-stranded DNA is highly specific for SLE and correlates with nephritis and disease activity.",
      "Anti-topoisomerase (Scl-70) is specific for diffuse systemic sclerosis, not lupus."
    ]
  },
  {
    "id": "s1-0146",
    "system": "Multisystem",
    "discipline": "Biochemistry",
    "topic": "Lead poisoning",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 3-year-old child living in a home built in the 1940s with peeling paint has become irritable and less interactive, with loss of previously acquired words. He has intermittent abdominal pain and constipation.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 9.6 g/dL | 11.0-14.0 |\n| Mean corpuscular volume | 74 fL | 75-87 |\n| Peripheral smear | coarse basophilic stippling | none |\n| Blood lead level | markedly elevated | < 3.5 mcg/dL |\n| Free erythrocyte protoporphyrin | elevated | normal |",
    "lead": "Which best explains the anemia in this child?",
    "options": [
      "Inhibition of ferrochelatase and aminolevulinic acid dehydratase in heme synthesis",
      "Autoimmune destruction of red cell membranes",
      "Deficiency of glucose-6-phosphate dehydrogenase",
      "A point mutation in the beta-globin chain",
      "Impaired DNA synthesis from folate deficiency"
    ],
    "answer": 0,
    "exp": "An old home with peeling paint, developmental regression, abdominal pain, a microcytic anemia with basophilic stippling, and a high blood lead level indicates lead poisoning. Lead inhibits ferrochelatase and aminolevulinic acid dehydratase, two enzymes of heme synthesis, so protoporphyrin accumulates and heme production falls, producing a microcytic anemia. The enzyme inhibition also explains the elevated free erythrocyte protoporphyrin.",
    "why": [
      "Correct: lead inhibits ferrochelatase and ALA dehydratase, blocking heme synthesis and raising protoporphyrin, which causes the microcytic anemia.",
      "Autoimmune membrane destruction causes a Coombs-positive hemolytic anemia, not basophilic stippling with a high lead level.",
      "G6PD deficiency causes episodic oxidative hemolysis with bite cells, not this exposure-related microcytic anemia.",
      "A beta-globin point mutation (sickle cell) causes sickling and vaso-occlusion, unrelated to lead exposure.",
      "Folate deficiency causes a macrocytic anemia, not the microcytic anemia with stippling seen here."
    ]
  },
  {
    "id": "s1-0147",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Biostatistics",
    "topic": "Absolute risk reduction",
    "difficulty": "hard",
    "anchor": "table",
    "vignette": "A randomized trial tests a new drug against placebo for preventing myocardial infarction over one year. The outcomes are shown.\n\n| Group | Developed MI | No MI | Total |\n|---|---|---|---|\n| Drug | 30 | 470 | 500 |\n| Placebo | 60 | 440 | 500 |",
    "lead": "What is the absolute risk reduction achieved by the drug?",
    "options": [
      "50%",
      "12%",
      "6%",
      "17",
      "0.5"
    ],
    "answer": 2,
    "exp": "The absolute risk reduction is the difference between the event rate in the control group and the event rate in the treatment group. The placebo event rate is 60/500 = 12% and the drug event rate is 30/500 = 6%, so the absolute risk reduction is 12% minus 6%, which equals 6%. This differs from the relative risk reduction, which would be 50%.",
    "why": [
      "50% is the relative risk reduction (the 6% absolute drop divided by the 12% baseline), not the absolute risk reduction.",
      "12% is the event rate in the placebo group alone, not the difference between groups.",
      "Correct: 12% minus 6% equals a 6% absolute risk reduction.",
      "About 17 is the number needed to treat (1 divided by 0.06), not the absolute risk reduction.",
      "0.5 is the relative risk (6% divided by 12%), not the absolute risk reduction."
    ]
  },
  {
    "id": "s1-0148",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Epidemiology",
    "topic": "Confounding",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A cohort study reports that coffee drinkers have a higher rate of lung cancer than non-drinkers. Investigators note that coffee drinkers in the sample smoke cigarettes far more often than non-drinkers. When the analysis is stratified and adjusted for smoking status, the association between coffee and lung cancer disappears.",
    "lead": "Which term best describes the role of smoking in this study?",
    "options": [
      "Effect modification, in which the exposure effect varies across strata",
      "Selection bias arising from how participants were enrolled",
      "A mediator lying on the causal pathway between coffee and cancer",
      "A confounding variable associated with both coffee drinking and lung cancer",
      "Random error producing a spurious association"
    ],
    "answer": 3,
    "exp": "Smoking is a confounder because it is associated with the exposure (coffee drinking) and is an independent risk factor for the outcome (lung cancer), while not lying on the causal pathway between them. Its presence created a spurious association that vanished once the analysis was adjusted for it. Confounding can be addressed by stratification, multivariable adjustment, matching, or randomization.",
    "why": [
      "Effect modification would show a genuinely different effect of coffee across smoking strata, not a disappearance of the association.",
      "Selection bias stems from how subjects enter the study, which is not what is described here.",
      "A mediator would lie on the causal pathway, but coffee does not cause lung cancer through smoking.",
      "Correct: smoking is linked to both coffee use and lung cancer without being on the causal pathway, so it confounds the association, which disappears after adjustment.",
      "The reproducible association that resolves with adjustment reflects confounding, not random chance."
    ]
  },
  {
    "id": "s1-0149",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Elements of informed consent",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A resident is asked to obtain consent for an elective, non-emergency operation from a competent adult. Pressed for time, the resident places the consent form in front of the patient and asks him to sign it without further discussion. The patient looks uncertain but begins to sign.",
    "lead": "Which of the following is a required element of valid informed consent?",
    "options": [
      "A signature obtained from a family member",
      "Disclosure of the risks, benefits, and reasonable alternatives to a patient with capacity who then agrees voluntarily",
      "Approval of the decision by the hospital ethics committee",
      "A guarantee that the procedure will be successful",
      "Documentation that consent was obtained during a medical emergency"
    ],
    "answer": 1,
    "exp": "Valid informed consent requires that a patient with decision-making capacity be told the nature of the procedure along with its risks, benefits, and reasonable alternatives, and then agree voluntarily without coercion. Simply obtaining a signature without disclosure and understanding does not satisfy these requirements. The resident should stop and provide an adequate discussion before the patient signs.",
    "why": [
      "A family member's signature cannot substitute for the informed agreement of a competent adult patient.",
      "Correct: disclosure of risks, benefits, and alternatives to a patient with capacity who then agrees voluntarily is the core of informed consent.",
      "Routine consent does not require ethics committee approval.",
      "No procedure can be guaranteed to succeed, and such a promise is not part of consent.",
      "The emergency exception applies when consent cannot be obtained, which is the opposite of this elective setting."
    ]
  },
  {
    "id": "s1-0150",
    "system": "Social Sciences / Ethics",
    "discipline": "Behavioral Sciences",
    "topic": "Intimate partner violence",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 29-year-old woman presents with a wrist injury whose description does not match the pattern of bruising. Her partner answers questions for her and stays close. When seen alone, she discloses that her partner has hit her before but says she is not in immediate danger and is not ready to leave the relationship. She is a competent adult, and there are no children in the home.",
    "lead": "Which is the most appropriate next step?",
    "options": [
      "Notify the police against her wishes",
      "Insist that she leave the relationship immediately",
      "Contact the partner to mediate the conflict",
      "Defer any discussion until she raises the topic again",
      "Provide nonjudgmental support, assess her immediate safety, and offer resources while respecting her autonomy"
    ],
    "answer": 4,
    "exp": "For a competent adult experiencing intimate partner violence, the appropriate response is to offer nonjudgmental support, perform a safety assessment, document findings, and provide resources such as counseling and hotline referrals, while respecting the patient's autonomy over decisions. Reporting to law enforcement without consent is generally not required for competent adults, unlike suspected child or elder abuse. Pressuring her to leave can be counterproductive and undermines her autonomy.",
    "why": [
      "Reporting to police against her wishes is generally not mandated for a competent adult and can endanger her.",
      "Insisting she leave immediately disregards her autonomy and may increase her risk.",
      "Contacting the partner to mediate could escalate the danger and breach her confidence.",
      "Deferring the discussion misses the opportunity to assess safety and provide resources.",
      "Correct: nonjudgmental support, a safety assessment, and offered resources respect her autonomy while addressing her risk."
    ]
  },
  {
    "id": "s1-0151",
    "system": "General Principles",
    "discipline": "Biochemistry",
    "topic": "Von Gierke disease (glycogen storage disease type I)",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 6-month-old infant is evaluated for poor growth and recurrent episodes of lethargy and sweating that resolve with feeding. She has a doll-like face with fat cheeks, thin extremities, and a markedly protuberant abdomen with massive hepatomegaly. Symptoms are worst after longer intervals between feeds.\n\n| Test | Value | Reference |\n|---|---|---|\n| Fasting glucose | 38 mg/dL | 60-100 |\n| Lactate | markedly elevated | low |\n| Uric acid | elevated | normal |\n| Triglycerides | markedly elevated | normal |",
    "lead": "A deficiency of which enzyme best explains these findings?",
    "options": [
      "Lysosomal acid alpha-glucosidase",
      "Muscle glycogen phosphorylase",
      "Glucose-6-phosphatase",
      "Glycogen debranching enzyme",
      "Glycogen branching enzyme"
    ],
    "answer": 2,
    "exp": "Severe fasting hypoglycemia with massive hepatomegaly, lactic acidosis, hyperuricemia, and hypertriglyceridemia in an infant is von Gierke disease (glycogen storage disease type I) from glucose-6-phosphatase deficiency. Because the final step of both glycogenolysis and gluconeogenesis is blocked, the liver cannot release free glucose, so fasting causes profound hypoglycemia. Accumulated glucose-6-phosphate is shunted toward lactate, uric acid, and lipid synthesis.",
    "why": [
      "Lysosomal acid alpha-glucosidase deficiency causes Pompe disease with cardiomegaly and hypotonia but normal blood glucose.",
      "Muscle glycogen phosphorylase deficiency causes McArdle disease with exercise intolerance and normal fasting glucose.",
      "Correct: glucose-6-phosphatase deficiency blocks hepatic glucose release, producing fasting hypoglycemia, lactic acidosis, hyperuricemia, and hyperlipidemia.",
      "Debranching enzyme deficiency (Cori disease) causes milder hypoglycemia with accumulation of limit dextrin and less prominent lactic acidosis.",
      "Branching enzyme deficiency (Andersen disease) causes cirrhosis and failure to thrive rather than this severe hypoglycemic, lactic acidosis picture."
    ]
  },
  {
    "id": "s1-0152",
    "system": "General Principles",
    "discipline": "Pharmacology",
    "topic": "Cyanide toxicity (cytochrome c oxidase inhibition)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 58-year-old man in the intensive care unit is treated for a hypertensive emergency with a prolonged high-dose infusion of sodium nitroprusside. Over several hours he becomes confused and tachypneic. His skin is flushed, his venous blood appears unusually bright red, and laboratory testing shows a rising lactate with a high anion gap metabolic acidosis despite a normal arterial oxygen tension.",
    "lead": "Which mechanism best explains this toxicity?",
    "options": [
      "Inhibition of cytochrome c oxidase in the electron transport chain",
      "Uncoupling of oxidative phosphorylation from the proton gradient",
      "Irreversible inhibition of mitochondrial ATP synthase",
      "Blockade of the adenine nucleotide translocase",
      "Inhibition of NADH dehydrogenase at complex I"
    ],
    "answer": 0,
    "exp": "Prolonged nitroprusside can liberate cyanide, which binds the ferric iron of cytochrome c oxidase (complex IV) and halts the electron transport chain. Cells cannot use oxygen, so they shift to anaerobic metabolism, producing lactic acidosis, while venous blood stays highly oxygenated because tissues fail to extract oxygen. Treatment includes hydroxocobalamin or nitrites plus thiosulfate.",
    "why": [
      "Correct: cyanide inhibits cytochrome c oxidase (complex IV), blocking oxygen use and forcing anaerobic metabolism with lactic acidosis.",
      "Uncouplers such as 2,4-dinitrophenol dissipate the proton gradient and generate heat rather than blocking electron flow at complex IV.",
      "ATP synthase inhibition (as by oligomycin) is not the mechanism of cyanide, which acts one step earlier at complex IV.",
      "The adenine nucleotide translocase is inhibited by atractyloside, not by cyanide.",
      "Rotenone inhibits complex I, but cyanide acts specifically at complex IV."
    ]
  },
  {
    "id": "s1-0153",
    "system": "General Principles",
    "discipline": "Genetics",
    "topic": "Cystic fibrosis (CFTR)",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 3-year-old boy has a history of recurrent pneumonias, most recently with Pseudomonas aeruginosa, along with bulky, foul-smelling, greasy stools and poor weight gain. His parents note that he tastes salty when kissed. He has nasal polyps and mild clubbing.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sweat chloride | 82 mmol/L | < 30 |\n| Fecal elastase | low | normal |",
    "lead": "Which molecular defect best explains this presentation?",
    "options": [
      "A dynein arm defect impairing ciliary motility",
      "Deficiency of alpha-1 antitrypsin",
      "Selective immunoglobulin A deficiency",
      "A mutation in the CFTR gene impairing chloride transport",
      "Absent pancreatic secretin receptors"
    ],
    "answer": 3,
    "exp": "Recurrent Pseudomonas respiratory infections, pancreatic insufficiency with steatorrhea, salty sweat, and an elevated sweat chloride indicate cystic fibrosis. It results from mutation of the CFTR gene, an ATP-gated chloride channel, most commonly the F508 deletion. Defective chloride transport dehydrates secretions and impairs sweat chloride reabsorption, explaining the thick mucus and salty sweat.",
    "why": [
      "A dynein arm defect causes primary ciliary dyskinesia with situs inversus, not an elevated sweat chloride or pancreatic insufficiency.",
      "Alpha-1 antitrypsin deficiency causes early emphysema and liver disease, not this childhood infection and malabsorption pattern.",
      "Selective IgA deficiency causes recurrent sinopulmonary and GI infections but not an elevated sweat chloride or steatorrhea from pancreatic insufficiency.",
      "Correct: a CFTR mutation impairs chloride transport, dehydrating secretions and raising sweat chloride, causing lung infections and pancreatic insufficiency.",
      "There is no clinical syndrome of absent secretin receptors that produces this constellation."
    ]
  },
  {
    "id": "s1-0154",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Pathology",
    "topic": "Immune thrombocytopenic purpura",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 5-year-old girl develops scattered petechiae over the legs and easy bruising two weeks after a mild upper respiratory illness. She is otherwise well, with no fever, no lymphadenopathy, and no hepatosplenomegaly. A peripheral smear shows a few large platelets and otherwise normal red and white cell morphology.\n\n| Test | Value | Reference |\n|---|---|---|\n| Platelet count | 18,000/mcL | 150,000-400,000 |\n| Hemoglobin | 12.6 g/dL | 11.5-15.5 |\n| Prothrombin time | normal | - |\n| Partial thromboplastin time | normal | - |",
    "lead": "Which mechanism best explains her thrombocytopenia?",
    "options": [
      "Deficiency of a von Willebrand factor-cleaving protease",
      "Autoantibodies against platelet glycoprotein IIb/IIIa with splenic clearance",
      "Consumption of platelets and clotting factors from disseminated coagulation",
      "Failure of platelet production due to marrow aplasia",
      "A qualitative platelet function defect with a normal platelet count"
    ],
    "answer": 1,
    "exp": "Isolated thrombocytopenia with mucocutaneous bleeding, normal coagulation studies, and no organomegaly after a viral illness in a child is immune thrombocytopenic purpura. IgG autoantibodies against platelet glycoprotein IIb/IIIa opsonize platelets, which are then cleared by splenic macrophages. The marrow shows increased megakaryocytes as it attempts to compensate.",
    "why": [
      "ADAMTS13 deficiency causes thrombotic thrombocytopenic purpura with microangiopathic hemolysis and schistocytes, not isolated thrombocytopenia.",
      "Correct: antibodies against platelet glycoprotein IIb/IIIa lead to splenic destruction of platelets, causing isolated thrombocytopenia with normal coagulation.",
      "Disseminated intravascular coagulation consumes clotting factors and prolongs the PT and PTT, which are normal here.",
      "Marrow aplasia would depress red cells and white cells as well, but the hemoglobin and smear are otherwise normal.",
      "A qualitative platelet defect such as Glanzmann thrombasthenia produces bleeding with a normal platelet count, whereas this count is markedly low."
    ]
  },
  {
    "id": "s1-0155",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Pathology",
    "topic": "Chronic myeloid leukemia",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 52-year-old man reports several months of fatigue, early satiety, and left upper quadrant fullness. His spleen is palpable well below the costal margin. A peripheral smear shows a markedly increased number of granulocytes at all stages of maturation, including myelocytes and metamyelocytes, with increased basophils and no significant increase in blasts.\n\n| Test | Value | Reference |\n|---|---|---|\n| White blood cell count | 96,000/mcL | 4,500-11,000 |\n| Basophils | increased | - |\n| Leukocyte alkaline phosphatase | low | - |",
    "lead": "Which genetic abnormality is most likely responsible?",
    "options": [
      "A t(8;14) translocation involving MYC",
      "A t(15;17) translocation producing a PML-RARA fusion",
      "A t(14;18) translocation involving BCL2",
      "A JAK2 V617F point mutation",
      "A t(9;22) translocation producing a constitutively active BCR-ABL1 tyrosine kinase"
    ],
    "answer": 4,
    "exp": "Massive splenomegaly with a very high white cell count showing the full spectrum of granulocyte maturation, basophilia, and a low leukocyte alkaline phosphatase is chronic myeloid leukemia. It is driven by the t(9;22) Philadelphia chromosome, which fuses BCR to ABL1 to create a constitutively active tyrosine kinase. This kinase is the target of imatinib.",
    "why": [
      "The t(8;14) translocation activates MYC in Burkitt lymphoma, not chronic myeloid leukemia.",
      "The t(15;17) PML-RARA fusion defines acute promyelocytic leukemia with abundant promyelocytes, not mature granulocytes with basophilia.",
      "The t(14;18) translocation overexpresses BCL2 in follicular lymphoma.",
      "The JAK2 V617F mutation drives polycythemia vera and related myeloproliferative disorders but not the BCR-ABL-defined CML shown here.",
      "Correct: the t(9;22) BCR-ABL1 fusion creates a constitutive tyrosine kinase that drives the granulocytosis, basophilia, and low leukocyte alkaline phosphatase of CML."
    ]
  },
  {
    "id": "s1-0156",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Psychiatry",
    "topic": "Bipolar I disorder",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 24-year-old man is brought in by his family for one week of markedly decreased need for sleep, rapid pressured speech, and grandiose plans to start several businesses at once. He has spent his savings impulsively and is easily distracted and irritable. Two years ago he had a two-month episode of depression. He does not use substances.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Bipolar I disorder",
      "Bipolar II disorder",
      "Cyclothymic disorder",
      "Major depressive disorder with psychotic features",
      "Schizoaffective disorder"
    ],
    "answer": 0,
    "exp": "A distinct period of at least one week of elevated or irritable mood with decreased need for sleep, pressured speech, grandiosity, distractibility, and impulsive spending that impairs functioning is a manic episode, which defines bipolar I disorder. Only a single manic episode is required for the diagnosis, and a prior depressive episode is common. The mania need not be preceded by depression.",
    "why": [
      "Correct: a full manic episode lasting at least one week with impaired functioning establishes bipolar I disorder.",
      "Bipolar II disorder requires hypomanic episodes without a full manic episode, but this patient meets full manic criteria.",
      "Cyclothymic disorder involves chronic subthreshold mood swings for at least two years, not a discrete manic episode.",
      "Major depressive disorder with psychotic features does not include manic symptoms such as decreased need for sleep and grandiosity.",
      "Schizoaffective disorder requires psychotic symptoms for at least two weeks in the absence of a mood episode, which is not described."
    ]
  },
  {
    "id": "s1-0157",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Neurology",
    "topic": "Amyotrophic lateral sclerosis",
    "difficulty": "hard",
    "anchor": "image",
    "vignette": "A 55-year-old man has one year of progressive, asymmetric weakness that began in his right hand and spread. Examination shows muscle wasting and fasciculations in the hands and tongue together with brisk reflexes, spasticity, and extensor plantar responses in the legs. Sensation is entirely normal, and cognition, bowel, and bladder function are preserved.\n\n**[IMAGE: spinal cord cross-section showing degeneration of the anterior horn cells together with pallor of both lateral corticospinal tracts]**",
    "lead": "Which best explains these findings?",
    "options": [
      "Autoimmune demyelination of peripheral nerves",
      "Antibodies blocking postsynaptic acetylcholine receptors",
      "Degeneration of anterior horn cells and lateral corticospinal tracts",
      "Demyelinating plaques scattered throughout the central white matter",
      "Loss of dopaminergic neurons in the substantia nigra"
    ],
    "answer": 2,
    "exp": "The combination of lower motor neuron signs (atrophy, fasciculations) and upper motor neuron signs (spasticity, hyperreflexia, extensor plantar responses) with completely spared sensation and cognition is amyotrophic lateral sclerosis. It reflects degeneration of both anterior horn cells and the lateral corticospinal tracts. Some familial cases involve superoxide dismutase 1 mutations.",
    "why": [
      "Autoimmune peripheral demyelination (Guillain-Barre) causes ascending weakness with lost reflexes, not mixed upper and lower motor neuron signs.",
      "Antibodies against acetylcholine receptors cause myasthenia gravis with fatigable weakness but no upper motor neuron signs or fasciculations.",
      "Correct: combined degeneration of anterior horn cells and corticospinal tracts produces mixed lower and upper motor neuron signs with intact sensation, the hallmark of ALS.",
      "Scattered central demyelinating plaques (multiple sclerosis) typically produce sensory and visual involvement disseminated in space and time, not pure motor findings.",
      "Loss of nigral dopaminergic neurons causes Parkinson disease with bradykinesia and tremor, not weakness with fasciculations."
    ]
  },
  {
    "id": "s1-0158",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Psychiatry",
    "topic": "Post-traumatic stress disorder",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 32-year-old veteran reports that for the past four months, since surviving a roadside explosion, he has had intrusive flashbacks and nightmares of the event. He avoids crowds and news reports that remind him of combat, feels emotionally detached, and is irritable with an exaggerated startle response and poor sleep. His symptoms interfere with his work and relationships.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Acute stress disorder",
      "Adjustment disorder",
      "Generalized anxiety disorder",
      "Panic disorder",
      "Post-traumatic stress disorder"
    ],
    "answer": 4,
    "exp": "Exposure to a life-threatening trauma followed by intrusive re-experiencing, avoidance of reminders, negative alterations in mood and cognition, and hyperarousal lasting more than one month is post-traumatic stress disorder. The four-month duration excludes acute stress disorder, which is diagnosed when the same symptoms last less than one month. The functional impairment supports the diagnosis.",
    "why": [
      "Acute stress disorder involves the same trauma-related symptoms but resolves within one month, whereas his have lasted four months.",
      "Adjustment disorder follows a non-life-threatening stressor and lacks the intrusive re-experiencing and hyperarousal seen here.",
      "Generalized anxiety disorder is chronic worry about multiple domains without a defining traumatic event or flashbacks.",
      "Panic disorder features recurrent unexpected panic attacks rather than trauma-linked flashbacks and avoidance.",
      "Correct: trauma exposure with re-experiencing, avoidance, negative mood, and hyperarousal for more than one month defines post-traumatic stress disorder."
    ]
  },
  {
    "id": "s1-0159",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Osteoarthritis",
    "difficulty": "easy",
    "anchor": "image",
    "vignette": "A 64-year-old woman with obesity reports several years of aching pain in both knees and her hands that worsens with activity through the day and improves with rest. Morning stiffness lasts about ten minutes. She has bony enlargement of the distal interphalangeal joints and crepitus in the knees, without warmth or redness. She has no systemic symptoms.\n\n**[IMAGE: radiograph of the knee showing asymmetric joint space narrowing, marginal osteophytes, and subchondral sclerosis]**",
    "lead": "Which best characterizes the underlying joint process?",
    "options": [
      "Inflammatory pannus destroying the joint from autoimmune synovitis",
      "Progressive degeneration of articular cartilage with osteophyte formation",
      "Deposition of monosodium urate crystals in the joint",
      "Deposition of calcium pyrophosphate dihydrate crystals",
      "Immune-complex synovitis following a systemic infection"
    ],
    "answer": 1,
    "exp": "Activity-related joint pain with brief morning stiffness, bony enlargement of the distal interphalangeal joints (Heberden nodes), crepitus, and no systemic inflammation is osteoarthritis. It results from progressive mechanical degeneration and loss of articular cartilage, with reactive osteophytes and subchondral sclerosis. The radiographic findings of asymmetric joint space narrowing and osteophytes are characteristic.",
    "why": [
      "An inflammatory autoimmune pannus with prolonged morning stiffness and symmetric small-joint involvement describes rheumatoid arthritis, not this activity-related picture.",
      "Correct: osteoarthritis is a degenerative loss of articular cartilage with osteophyte formation, producing activity-related pain and the shown radiographic changes.",
      "Monosodium urate deposition causes acute gouty attacks with an intensely inflamed joint, not chronic activity-related pain with Heberden nodes.",
      "Calcium pyrophosphate deposition causes pseudogout with chondrocalcinosis and acute attacks, not this pattern.",
      "Postinfectious immune-complex synovitis (reactive arthritis) presents with acute oligoarthritis and extra-articular features, not chronic degenerative changes."
    ]
  },
  {
    "id": "s1-0160",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Bullous pemphigoid",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 74-year-old man develops several weeks of intensely itchy, large, tense blisters on the flexor surfaces of the arms, groin, and lower abdomen. The blisters are firm and do not rupture easily, and lateral pressure on adjacent normal-appearing skin does not induce new blistering. The oral mucosa is spared.\n\n**[IMAGE: direct immunofluorescence of perilesional skin showing a linear band of IgG and C3 along the dermoepidermal junction]**",
    "lead": "Autoantibodies against which target best explain this disease?",
    "options": [
      "Desmoglein 3 within the desmosomes",
      "Type VII collagen of the anchoring fibrils",
      "Epidermal tissue transglutaminase",
      "Hemidesmosomal proteins at the dermoepidermal junction",
      "Desmoglein 1 in the superficial epidermis"
    ],
    "answer": 3,
    "exp": "Tense subepidermal blisters in an elderly patient with a negative Nikolsky sign and linear IgG and C3 along the basement membrane are characteristic of bullous pemphigoid. Autoantibodies target hemidesmosomal proteins (BP180 and BP230) at the dermoepidermal junction, producing a subepidermal split. This contrasts with pemphigus vulgaris, which targets desmoglein and causes flaccid intraepidermal blisters.",
    "why": [
      "Antibodies against desmoglein 3 cause pemphigus vulgaris, with flaccid intraepidermal blisters and a positive Nikolsky sign.",
      "Antibodies against type VII collagen cause epidermolysis bullosa acquisita, a rarer disorder that is not the classic linear IgG picture here.",
      "Antibodies against epidermal transglutaminase relate to dermatitis herpetiformis, which shows granular IgA at dermal papillae, not linear IgG.",
      "Correct: bullous pemphigoid is caused by antibodies against hemidesmosomal proteins, producing tense subepidermal blisters with linear IgG and C3.",
      "Antibodies against desmoglein 1 cause pemphigus foliaceus with superficial crusting erosions, not tense subepidermal bullae."
    ]
  },
  {
    "id": "s1-0161",
    "system": "Cardiovascular",
    "discipline": "Pathology",
    "topic": "Mitral stenosis",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 34-year-old woman who grew up abroad and had rheumatic fever as a child reports progressive exertional dyspnea, orthopnea, and one episode of coughing up blood. Her pulse is irregularly irregular. On auscultation there is a loud first heart sound, an early diastolic sound after the second heart sound, and a low-pitched rumbling murmur at the apex heard best in the left lateral position.\n\n**[IMAGE: chest radiograph showing left atrial enlargement with straightening of the left heart border and elevation of the left main bronchus]**",
    "lead": "Which valvular lesion best explains these findings?",
    "options": [
      "Mitral stenosis",
      "Mitral regurgitation",
      "Aortic stenosis",
      "Aortic regurgitation",
      "Tricuspid regurgitation"
    ],
    "answer": 0,
    "exp": "A history of rheumatic fever with an opening snap and a low-pitched mid-diastolic apical rumble, atrial fibrillation, and left atrial enlargement indicates mitral stenosis. Rheumatic scarring fuses the mitral commissures, obstructing left atrial emptying and raising left atrial pressure. This leads to pulmonary congestion with dyspnea and hemoptysis, atrial dilation, and atrial fibrillation.",
    "why": [
      "Correct: rheumatic mitral stenosis produces an opening snap, a diastolic rumble, left atrial enlargement, and atrial fibrillation from obstructed left atrial emptying.",
      "Mitral regurgitation causes a holosystolic murmur radiating to the axilla, not a diastolic rumble with an opening snap.",
      "Aortic stenosis causes a crescendo-decrescendo systolic ejection murmur radiating to the carotids, not a diastolic apical rumble.",
      "Aortic regurgitation causes an early diastolic decrescendo murmur with a wide pulse pressure, not an opening snap and mid-diastolic rumble.",
      "Tricuspid regurgitation causes a holosystolic murmur that increases with inspiration, not these left-sided findings."
    ]
  },
  {
    "id": "s1-0162",
    "system": "Cardiovascular",
    "discipline": "Pharmacology",
    "topic": "Organic nitrate mechanism",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 60-year-old man with exertional chest pain places a nitroglycerin tablet under his tongue during an episode and obtains rapid relief. Shortly afterward he develops a throbbing headache and mild lightheadedness on standing.",
    "lead": "Which mechanism best explains the relief of his chest pain?",
    "options": [
      "Blockade of L-type calcium channels in cardiac myocytes",
      "Competitive antagonism of beta-1 adrenergic receptors",
      "Release of nitric oxide that raises cyclic GMP and dilates veins to reduce preload",
      "Inhibition of the funny pacemaker current in the sinoatrial node",
      "Opening of ATP-sensitive potassium channels in vascular smooth muscle"
    ],
    "answer": 2,
    "exp": "Organic nitrates are metabolized to nitric oxide, which activates guanylate cyclase and raises cyclic GMP in vascular smooth muscle, causing relaxation. The predominant effect is venodilation, which lowers preload and thus myocardial wall stress and oxygen demand, relieving angina. Cerebral vasodilation explains the accompanying headache, and venous pooling causes orthostatic lightheadedness.",
    "why": [
      "Calcium channel blockers relieve angina but act by blocking L-type calcium channels, not by generating nitric oxide.",
      "Beta blockers reduce oxygen demand by antagonizing beta-1 receptors, a different mechanism from nitrates.",
      "Correct: nitrates release nitric oxide, raising cyclic GMP to dilate veins and lower preload, reducing myocardial oxygen demand.",
      "Ivabradine inhibits the funny current to slow heart rate, which is not the mechanism of nitroglycerin.",
      "Potassium channel openers such as minoxidil act on arterial smooth muscle and are not how organic nitrates relieve angina."
    ]
  },
  {
    "id": "s1-0163",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Asthma",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 20-year-old man has recurrent episodes of wheezing, chest tightness, and dry cough that are worse at night and are triggered by exercise and exposure to cat dander. He has a history of eczema and allergic rhinitis. During an episode, spirometry shows a reduced ratio of forced expiratory volume in one second to forced vital capacity that improves by more than 12 percent after an inhaled bronchodilator.",
    "lead": "Which best describes the underlying pathophysiology?",
    "options": [
      "Irreversible airflow obstruction from destruction of alveolar walls",
      "Reversible bronchoconstriction with airway inflammation and hyperresponsiveness",
      "Permanent dilation of bronchi from chronic infection and impaired clearance",
      "Fibrosis of the alveolar interstitium restricting lung expansion",
      "Chronic mucus gland hyperplasia with a productive cough for years"
    ],
    "answer": 1,
    "exp": "Episodic wheeze and cough triggered by allergens and exercise in an atopic young person, with airflow obstruction that reverses after a bronchodilator, is asthma. The disease involves type 2 airway inflammation with bronchial smooth muscle hyperresponsiveness and reversible bronchoconstriction. Reversibility on spirometry distinguishes it from fixed obstructive disease.",
    "why": [
      "Irreversible obstruction from alveolar wall destruction describes emphysema, which does not show large bronchodilator reversibility.",
      "Correct: asthma is reversible bronchoconstriction with airway inflammation and hyperresponsiveness, consistent with the bronchodilator response.",
      "Permanent bronchial dilation from chronic infection describes bronchiectasis with copious sputum, not this reversible allergic pattern.",
      "Interstitial fibrosis produces a restrictive pattern with reduced volumes, not reversible obstruction.",
      "Chronic mucus gland hyperplasia with years of productive cough describes chronic bronchitis, not this episodic reversible disease."
    ]
  },
  {
    "id": "s1-0164",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "IgA nephropathy",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 22-year-old man reports several episodes of visible reddish-brown urine, each beginning within a day or two of an upper respiratory infection over the past year. Between episodes he feels well but has persistent microscopic hematuria. His blood pressure is normal, and he has no rash or joint pain.\n\n| Test | Value | Reference |\n|---|---|---|\n| Urinalysis | dysmorphic RBCs, occasional red cell casts | none |\n| Serum C3 and C4 | normal | normal |\n| Throat and skin cultures | negative | - |",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Poststreptococcal glomerulonephritis",
      "Membranoproliferative glomerulonephritis",
      "IgA nephropathy",
      "Alport syndrome",
      "Thin basement membrane disease"
    ],
    "answer": 2,
    "exp": "Recurrent gross hematuria that begins within one to two days of an upper respiratory infection, with persistent microscopic hematuria, normal complement, and no latent period, is IgA nephropathy. Mesangial deposition of IgA follows mucosal infections and causes the synpharyngitic hematuria. The normal C3 is key: poststreptococcal glomerulonephritis instead follows infection by about two weeks and lowers C3.",
    "why": [
      "Poststreptococcal glomerulonephritis follows infection after a latent period of roughly two weeks and characteristically lowers serum C3, unlike this pattern.",
      "Membranoproliferative glomerulonephritis typically shows persistently low complement and nephritic or nephrotic features rather than recurrent gross hematuria with normal complement.",
      "Correct: gross hematuria coinciding with mucosal infections, normal complement, and mesangial IgA deposition indicates IgA nephropathy.",
      "Alport syndrome causes hematuria with sensorineural hearing loss and a family history of renal failure, which are absent here.",
      "Thin basement membrane disease causes persistent microscopic hematuria that is usually asymptomatic, not recurrent visible hematuria tied to infections."
    ]
  },
  {
    "id": "s1-0165",
    "system": "Gastrointestinal",
    "discipline": "Biochemistry",
    "topic": "Gilbert syndrome",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 19-year-old college student notices mild yellowing of the eyes during final examinations, when he was fasting, sleep-deprived, and had a viral cold. He feels well otherwise, and the jaundice resolves on its own. There is no dark urine or pale stools, and his physical examination is normal.\n\n| Test | Value | Reference |\n|---|---|---|\n| Total bilirubin | 3.0 mg/dL | 0.2-1.2 |\n| Direct (conjugated) bilirubin | 0.3 mg/dL | < 0.3 |\n| Reticulocyte count | normal | - |\n| Lactate dehydrogenase and haptoglobin | normal | - |\n| AST, ALT, alkaline phosphatase | normal | - |",
    "lead": "Which best explains his jaundice?",
    "options": [
      "Increased bilirubin production from ongoing hemolysis",
      "Complete absence of UDP-glucuronosyltransferase activity",
      "Defective canalicular excretion of conjugated bilirubin",
      "Extrahepatic biliary obstruction blocking bilirubin excretion",
      "Reduced UDP-glucuronosyltransferase activity causing mild unconjugated hyperbilirubinemia"
    ],
    "answer": 4,
    "exp": "Intermittent mild unconjugated hyperbilirubinemia triggered by fasting, stress, or illness, with normal hemolysis markers and normal liver enzymes, is Gilbert syndrome. It results from reduced (not absent) activity of UDP-glucuronosyltransferase, so bilirubin conjugation is mildly impaired. The condition is benign and requires no treatment.",
    "why": [
      "Ongoing hemolysis would raise reticulocytes and lactate dehydrogenase and lower haptoglobin, all of which are normal here.",
      "Complete absence of UDP-glucuronosyltransferase causes Crigler-Najjar type I, with severe unconjugated hyperbilirubinemia and kernicterus in infancy.",
      "Defective canalicular excretion of conjugated bilirubin (Dubin-Johnson syndrome) raises the direct fraction, whereas this is predominantly unconjugated.",
      "Extrahepatic obstruction raises conjugated bilirubin and causes dark urine and pale stools, which are absent here.",
      "Correct: reduced UDP-glucuronosyltransferase activity mildly impairs conjugation, producing benign unconjugated hyperbilirubinemia provoked by fasting and stress."
    ]
  },
  {
    "id": "s1-0166",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Hirschsprung disease",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A newborn boy fails to pass meconium in the first 48 hours of life and develops progressive abdominal distension and bilious vomiting. On rectal examination the anal canal is tight, and there is an explosive release of gas and stool as the examining finger is withdrawn. He also has features of Down syndrome. A rectal suction biopsy shows absent ganglion cells.",
    "lead": "Which best explains this disorder?",
    "options": [
      "Failure of neural crest cell migration leaving a segment of colon without ganglion cells",
      "Hypertrophy of the pylorus obstructing gastric outflow",
      "Telescoping of one segment of bowel into an adjacent segment",
      "Incomplete rotation of the midgut with volvulus",
      "Ischemic necrosis of the immature bowel wall"
    ],
    "answer": 0,
    "exp": "Delayed passage of meconium, distal obstruction with proximal distension, a tight aganglionic segment with an explosive squirt sign, and an association with Down syndrome indicate Hirschsprung disease. It arises from failed craniocaudal migration of neural crest cells, leaving the distal bowel without submucosal (Meissner) and myenteric (Auerbach) ganglion cells. The aganglionic segment stays tonically contracted, and rectal biopsy is diagnostic.",
    "why": [
      "Correct: arrested neural crest cell migration leaves an aganglionic, tonically contracted distal segment, causing functional obstruction confirmed by absent ganglion cells on biopsy.",
      "Pyloric hypertrophy causes nonbilious projectile vomiting at several weeks of age, not neonatal failure to pass meconium.",
      "Telescoping of bowel (intussusception) causes intermittent colicky pain and currant-jelly stools in older infants, not this neonatal obstruction.",
      "Midgut volvulus from malrotation causes bilious vomiting but is not associated with an aganglionic segment on biopsy.",
      "Ischemic necrosis of bowel describes necrotizing enterocolitis, which occurs mainly in premature infants with pneumatosis intestinalis."
    ]
  },
  {
    "id": "s1-0167",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Type 2 diabetes mellitus",
    "difficulty": "easy",
    "anchor": "lab",
    "vignette": "A 52-year-old man with obesity reports increased thirst, frequent urination, and fatigue over several months. He has velvety, hyperpigmented skin in the axillae and posterior neck. His father and brother have diabetes. He has no history of ketoacidosis and is not acutely ill.\n\n| Test | Value | Reference |\n|---|---|---|\n| Fasting plasma glucose | 184 mg/dL | 70-99 |\n| Hemoglobin A1c | 8.6% | < 5.7 |",
    "lead": "Which best explains his condition?",
    "options": [
      "Autoimmune destruction of pancreatic beta cells",
      "A single-gene defect in glucokinase",
      "A congenital absence of insulin receptors",
      "Peripheral insulin resistance with a relative insulin deficiency",
      "Excess cortisol secretion from an adrenal tumor"
    ],
    "answer": 3,
    "exp": "Gradual hyperglycemia in an obese middle-aged adult with acanthosis nigricans, a strong family history, and no ketoacidosis is type 2 diabetes mellitus. The core defects are peripheral tissue resistance to insulin and a progressive relative deficiency of insulin secretion. Acanthosis nigricans reflects the hyperinsulinemia of the insulin-resistant state.",
    "why": [
      "Autoimmune destruction of beta cells causes type 1 diabetes, which typically presents in younger, lean patients with a tendency to ketoacidosis.",
      "A glucokinase mutation causes maturity-onset diabetes of the young, a rare monogenic form, not this common obesity-associated pattern.",
      "Congenital absence of insulin receptors is a rare severe syndrome, not the usual cause of adult-onset diabetes.",
      "Correct: type 2 diabetes results from peripheral insulin resistance with a relative insulin secretory deficiency, fitting the obesity, family history, and acanthosis nigricans.",
      "Excess cortisol (Cushing syndrome) can cause hyperglycemia but would also produce features such as central obesity, striae, and hypertension not described here."
    ]
  },
  {
    "id": "s1-0168",
    "system": "Reproductive & Endocrine",
    "discipline": "Physiology",
    "topic": "Prolactinoma",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 29-year-old woman reports six months of absent menstrual periods and a milky discharge from both breasts, along with reduced libido. She has recently developed headaches and notes difficulty seeing objects to either side. A pregnancy test is negative.\n\n| Test | Value | Reference |\n|---|---|---|\n| Prolactin | markedly elevated | 4-23 ng/mL |\n| Thyroid-stimulating hormone | normal | 0.4-4.0 |\n| Follicle-stimulating hormone and luteinizing hormone | low | - |",
    "lead": "Which best explains her presentation?",
    "options": [
      "Autonomous cortisol secretion from a pituitary adenoma",
      "A lactotroph adenoma secreting prolactin that suppresses gonadotropin-releasing hormone",
      "A somatotroph adenoma secreting growth hormone",
      "Primary hypothyroidism as the sole cause of the symptoms",
      "Ectopic prolactin production by a lung tumor"
    ],
    "answer": 1,
    "exp": "Amenorrhea, galactorrhea, low gonadotropins, a markedly elevated prolactin, and a mass effect causing bitemporal visual field loss indicate a prolactinoma. The lactotroph adenoma secretes prolactin, which suppresses gonadotropin-releasing hormone and lowers FSH and LH, producing hypogonadism. Dopamine agonists such as cabergoline are first-line therapy.",
    "why": [
      "Autonomous cortisol secretion causes Cushing disease with central obesity and striae, not galactorrhea with a markedly elevated prolactin.",
      "Correct: a lactotroph adenoma secretes prolactin, which suppresses GnRH and lowers FSH and LH, causing amenorrhea, galactorrhea, and hypogonadism.",
      "A growth hormone-secreting adenoma causes acromegaly with enlarged extremities, not primarily galactorrhea and amenorrhea.",
      "Primary hypothyroidism can mildly raise prolactin, but the normal TSH here excludes it as the cause.",
      "Ectopic prolactin production by tumors is very rare and would not explain a pituitary mass with visual field loss."
    ]
  },
  {
    "id": "s1-0169",
    "system": "Reproductive & Endocrine",
    "discipline": "Genetics",
    "topic": "Turner syndrome",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 15-year-old girl is evaluated for not yet having started menstrual periods and for short stature well below her peers. She has a webbed neck, a broad chest with widely spaced nipples, and an increased carrying angle of the arms. As an infant she had swelling of the hands and feet. She has minimal breast development, and hormone testing shows an elevated follicle-stimulating hormone.",
    "lead": "Which karyotype is most likely?",
    "options": [
      "47,XXY",
      "47,XX,+21",
      "46,XY with androgen insensitivity",
      "47,XX,+18",
      "45,X"
    ],
    "answer": 4,
    "exp": "Short stature, primary amenorrhea, a webbed neck, a shield chest with widely spaced nipples, cubitus valgus, and a history of infant lymphedema indicate Turner syndrome. The karyotype is classically 45,X (monosomy X). Gonadal dysgenesis produces streak ovaries with low estrogen and a compensatory rise in FSH, and there are associated cardiac and renal anomalies.",
    "why": [
      "A 47,XXY karyotype causes Klinefelter syndrome in phenotypic males with tall stature and small testes, not this female phenotype.",
      "Trisomy 21 (47,XX,+21) causes Down syndrome, which does not present as primary amenorrhea with a webbed neck and streak gonads.",
      "A 46,XY androgen insensitivity karyotype produces a female phenotype but with absent uterus and testes and low FSH, not the somatic features of Turner syndrome.",
      "Trisomy 18 (47,XX,+18) is usually lethal in infancy and does not present as an adolescent with primary amenorrhea.",
      "Correct: 45,X monosomy causes Turner syndrome with short stature, gonadal dysgenesis, and the described somatic features."
    ]
  },
  {
    "id": "s1-0170",
    "system": "Multisystem",
    "discipline": "Immunology",
    "topic": "Systemic sclerosis",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 46-year-old woman has several months of color changes in her fingers with cold exposure, progressing to tight, thickened, shiny skin over the fingers and face. She reports worsening heartburn and difficulty swallowing solid foods, and she has small dilated vessels visible on the face. She has mild exertional dyspnea.\n\n| Test | Value | Reference |\n|---|---|---|\n| Antinuclear antibody | positive | negative |\n| Anti-topoisomerase I (Scl-70) | positive | negative |\n| Anti-centromere antibody | negative | negative |",
    "lead": "Which best explains the widespread organ involvement?",
    "options": [
      "Deposition of immune complexes causing small-vessel vasculitis",
      "Granulomatous inflammation involving multiple organs",
      "Excessive fibroblast collagen deposition with small-vessel injury causing widespread fibrosis",
      "IgG autoantibodies stimulating the thyroid-stimulating hormone receptor",
      "Deposition of amyloid protein in organ interstitium"
    ],
    "answer": 2,
    "exp": "Raynaud phenomenon, sclerodactyly with tight facial skin, esophageal dysmotility, telangiectasias, and a positive anti-topoisomerase I antibody indicate systemic sclerosis (scleroderma). The disease features activated fibroblasts depositing excessive collagen along with small-vessel endothelial injury, producing fibrosis across skin and internal organs. The diffuse form with anti-Scl-70 carries risk of interstitial lung disease and renal crisis.",
    "why": [
      "Immune-complex small-vessel vasculitis causes palpable purpura and organ ischemia, not progressive fibrosis with sclerodactyly.",
      "Granulomatous multiorgan inflammation describes sarcoidosis, which does not cause sclerodactyly and Raynaud phenomenon with anti-Scl-70.",
      "Correct: systemic sclerosis is driven by excessive fibroblast collagen deposition and small-vessel injury, producing widespread fibrosis of skin and organs.",
      "Stimulating antibodies against the TSH receptor cause Graves disease, unrelated to this fibrosing disorder.",
      "Amyloid deposition causes organ dysfunction but not the Raynaud phenomenon, sclerodactyly, and anti-Scl-70 pattern seen here."
    ]
  },
  {
    "id": "s1-0171",
    "system": "Multisystem",
    "discipline": "Pathology",
    "topic": "Carbon monoxide poisoning",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "During a cold winter night an entire family develops headache, nausea, dizziness, and confusion; they improve after leaving the house, where an old furnace was later found to be faulty. On arrival the mother is confused but her pulse oximeter reads 98 percent on room air, and her measured arterial oxygen tension is normal.\n\n| Test | Value | Reference |\n|---|---|---|\n| Carboxyhemoglobin | 26% | < 3 (nonsmoker) |\n| Arterial PaO2 | 96 mm Hg | 75-100 |\n| Arterial pH | 7.28 | 7.35-7.45 |\n| Lactate | elevated | low |",
    "lead": "Which best explains her hypoxic symptoms?",
    "options": [
      "Carbon monoxide binds hemoglobin with high affinity, lowering oxygen-carrying capacity and shifting the dissociation curve left",
      "Oxidation of hemoglobin iron to the ferric state forming methemoglobin",
      "Inhibition of mitochondrial cytochrome c oxidase by cyanide",
      "A reduced inspired oxygen tension from high altitude",
      "A right-to-left shunt bypassing ventilated alveoli"
    ],
    "answer": 0,
    "exp": "Multiple household members with headache and confusion in winter from a faulty furnace, a normal PaO2 and pulse oximeter reading, and a markedly elevated carboxyhemoglobin indicate carbon monoxide poisoning. Carbon monoxide binds hemoglobin with roughly 200 times the affinity of oxygen, reducing oxygen-carrying capacity and shifting the oxygen dissociation curve left so that less oxygen is unloaded to tissues. The PaO2 and standard pulse oximeter remain misleadingly normal, and treatment is high-flow or hyperbaric oxygen.",
    "why": [
      "Correct: carbon monoxide binds hemoglobin avidly, lowering oxygen content and shifting the curve left to impair unloading, while dissolved PaO2 stays normal.",
      "Methemoglobinemia oxidizes iron to the ferric state and causes cyanosis with a characteristic low oximeter reading, not a carboxyhemoglobin elevation.",
      "Cyanide inhibits cytochrome c oxidase and would not raise carboxyhemoglobin, which is specific to carbon monoxide.",
      "High-altitude hypoxia lowers the inspired and arterial oxygen tension, but this patient's PaO2 is normal.",
      "A right-to-left shunt would lower the PaO2 and not produce an elevated carboxyhemoglobin."
    ]
  },
  {
    "id": "s1-0172",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Biostatistics",
    "topic": "Type II error and statistical power",
    "difficulty": "hard",
    "anchor": null,
    "vignette": "A small randomized trial compares a new drug with placebo for reducing mortality. The drug group has fewer deaths, but the difference does not reach statistical significance (p = 0.20). The investigators are confident from prior mechanistic data that the drug truly has a modest benefit, and they note that only 60 patients were enrolled.",
    "lead": "The failure to detect this true effect is best described as which of the following?",
    "options": [
      "A type I error",
      "Selection bias",
      "A confounding effect",
      "Random misclassification of outcomes",
      "A type II error reflecting inadequate statistical power"
    ],
    "answer": 4,
    "exp": "Failing to reject the null hypothesis when a true difference actually exists is a type II (beta) error. With only 60 patients the trial is underpowered, so its ability to detect a real modest effect (power, which equals 1 minus beta) is low. Power can be increased by enlarging the sample size, choosing a larger detectable effect, or raising the alpha level.",
    "why": [
      "A type I error is concluding an effect exists when the null is actually true, the opposite of missing a real effect.",
      "Selection bias arises from how participants are enrolled or retained, not from an underpowered but valid comparison.",
      "Confounding distorts an association through a third variable, whereas here the issue is failure to detect a true effect.",
      "Random misclassification blurs measured outcomes but does not specifically describe failing to reject a false null.",
      "Correct: not detecting a true effect is a type II error, driven here by the small sample size and low statistical power."
    ]
  },
  {
    "id": "s1-0173",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Epidemiology",
    "topic": "Recall bias",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "In a case-control study of birth defects, investigators interview mothers of infants with malformations and mothers of healthy infants about medication and dietary exposures during the first trimester. Mothers of affected infants, having searched their memories for a possible cause, report past exposures far more thoroughly than mothers of healthy infants.",
    "lead": "Which type of bias does this scenario best illustrate?",
    "options": [
      "Lead-time bias",
      "Selection bias",
      "Confounding",
      "Recall bias",
      "Observer bias by the interviewers"
    ],
    "answer": 3,
    "exp": "Differential accuracy of remembered exposures between cases and controls is recall bias, a common problem in retrospective case-control studies of adverse outcomes. Mothers of affected infants scrutinize their pregnancies more intensely and report exposures more completely, which distorts the estimated association. It can be reduced by using objective exposure records rather than memory.",
    "why": [
      "Lead-time bias applies to screening studies where earlier detection appears to prolong survival, not to differential recall.",
      "Selection bias arises from how participants are chosen for the study, not from how accurately they remember exposures.",
      "Confounding involves a third variable associated with both exposure and outcome, which is not what is described.",
      "Correct: differential accuracy of exposure recall between cases and controls is recall bias.",
      "Observer bias reflects the interviewers systematically differing in how they assess groups, whereas here the mothers themselves recall differently."
    ]
  },
  {
    "id": "s1-0174",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Elder abuse reporting",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "An 82-year-old woman with mild cognitive impairment is brought in by her adult son, who is her primary caregiver. She is dehydrated and unkempt, with several bruises in different stages of healing and a sacral pressure ulcer. The son answers all questions for her and becomes irritated when she is addressed directly. When examined alone, she quietly says she is sometimes left without food or help.",
    "lead": "Which is the most appropriate next step?",
    "options": [
      "Discharge her home with the son and arrange routine follow-up",
      "Report the suspected elder abuse to adult protective services",
      "Confront the son directly and demand an explanation",
      "Take no action because she has not explicitly asked for help",
      "Immediately contact the police to arrest the son"
    ],
    "answer": 1,
    "exp": "Signs of neglect and injury in a dependent older adult, including bruises of varying age, a pressure ulcer, dehydration, and a disclosure of being left without care, raise a reasonable suspicion of elder abuse. Physicians are mandated reporters and should notify adult protective services; reasonable suspicion, not proof, is the threshold. The immediate priority is also to ensure the patient's safety.",
    "why": [
      "Discharging her home with the suspected abuser without any protective action could leave her in danger.",
      "Correct: reasonable suspicion of elder abuse obligates the physician to report to adult protective services while ensuring the patient's safety.",
      "Confronting the son directly could escalate the situation and compromise the patient's safety and the investigation.",
      "Inaction is inappropriate; mandatory reporting does not require the patient to request help.",
      "Arranging an arrest is a law-enforcement determination and is not the physician's immediate role; the appropriate action is to report to adult protective services."
    ]
  },
  {
    "id": "s1-0175",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Physician conflict of interest",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A pharmaceutical company representative offers a physician an all-expenses-paid weekend trip to a resort, framed as an educational retreat, shortly after promoting the company's new and expensive brand-name medication. The physician has effective, lower-cost alternatives available for the same indication.",
    "lead": "Which is the most appropriate response?",
    "options": [
      "Accept the trip because it will not influence prescribing decisions",
      "Accept the gift but disclose it to patients afterward",
      "Prescribe the new drug only for patients who specifically request it",
      "Decline the gift because it creates a conflict of interest that can bias clinical judgment",
      "Accept the gift on behalf of the entire practice group"
    ],
    "answer": 3,
    "exp": "Substantial gifts from industry, such as paid trips, create a conflict of interest that can subtly bias prescribing even when the physician believes otherwise. Professional guidelines advise declining such gifts so that clinical decisions rest on patient benefit and evidence rather than inducement. Modest items directly related to patient care are treated differently, but a resort trip is not.",
    "why": [
      "The belief that a large gift will not influence prescribing is precisely the bias that professional guidelines warn against.",
      "Disclosing the gift afterward does not remove the conflict of interest that accepting it creates.",
      "Restricting the drug to patients who request it still allows the inducement to shape practice and does not resolve the conflict.",
      "Correct: declining the gift avoids a conflict of interest that could bias clinical judgment, keeping decisions grounded in patient benefit.",
      "Accepting the gift for the group does not eliminate the conflict of interest and simply spreads the inducement."
    ]
  },
  {
    "id": "s1-0176",
    "system": "General Principles",
    "discipline": "Biochemistry",
    "topic": "Fabry disease (alpha-galactosidase A deficiency)",
    "difficulty": "hard",
    "anchor": null,
    "vignette": "A 26-year-old man reports years of burning pain in his hands and feet that worsens with heat and exercise, along with reduced sweating. He has clusters of small dark-red non-blanching papules over the lower trunk and around the umbilicus. He now has proteinuria, and his maternal uncle died young of kidney failure and stroke. Family history suggests only males are affected across generations.",
    "lead": "A deficiency of which enzyme best explains this presentation?",
    "options": [
      "Alpha-galactosidase A",
      "Beta-glucocerebrosidase",
      "Sphingomyelinase",
      "Hexosaminidase A",
      "Arylsulfatase A"
    ],
    "answer": 0,
    "exp": "Episodic acral burning pain (acroparesthesias), angiokeratomas, hypohidrosis, progressive renal disease, and an X-linked pattern affecting males indicate Fabry disease. It results from deficiency of alpha-galactosidase A, causing accumulation of globotriaosylceramide (ceramide trihexoside) in vascular endothelium, nerves, and the kidney. Untreated patients develop renal failure, strokes, and cardiac disease; enzyme replacement is available.",
    "why": [
      "Correct: alpha-galactosidase A deficiency causes Fabry disease, with globotriaosylceramide accumulation producing acroparesthesias, angiokeratomas, and renal and vascular disease in an X-linked pattern.",
      "Beta-glucocerebrosidase deficiency causes Gaucher disease with hepatosplenomegaly and bone crises, not angiokeratomas with acral pain.",
      "Sphingomyelinase deficiency causes Niemann-Pick disease with hepatosplenomegaly and a cherry-red macula in infancy.",
      "Hexosaminidase A deficiency causes Tay-Sachs disease with neurodegeneration and a cherry-red macula but no hepatosplenomegaly or angiokeratomas.",
      "Arylsulfatase A deficiency causes metachromatic leukodystrophy with demyelination and progressive motor decline, not this vascular-cutaneous picture."
    ]
  },
  {
    "id": "s1-0177",
    "system": "General Principles",
    "discipline": "Pharmacology",
    "topic": "Fluoroquinolone mechanism (DNA gyrase inhibition)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 68-year-old man is treated with oral ciprofloxacin for a complicated urinary tract infection. He is counseled to avoid taking it with his calcium-containing antacid and to report any tendon pain, since he also takes a glucocorticoid.",
    "lead": "Which mechanism best explains the antibacterial action of this drug?",
    "options": [
      "Inhibition of the 50S ribosomal subunit blocking peptide bond formation",
      "Inhibition of DNA gyrase (topoisomerase II) and topoisomerase IV",
      "Inhibition of dihydrofolate reductase blocking folate synthesis",
      "Disruption of the bacterial cell wall by binding penicillin-binding proteins",
      "Inhibition of RNA polymerase blocking transcription"
    ],
    "answer": 1,
    "exp": "Fluoroquinolones such as ciprofloxacin inhibit bacterial DNA gyrase (topoisomerase II) and topoisomerase IV, preventing supercoiling relaxation and religation during DNA replication, which is bactericidal. Divalent cations in antacids chelate the drug and reduce absorption, and tendinopathy and tendon rupture are recognized adverse effects, especially with concurrent glucocorticoids.",
    "why": [
      "The 50S subunit is the target of macrolides and clindamycin, not fluoroquinolones.",
      "Correct: fluoroquinolones inhibit DNA gyrase and topoisomerase IV, blocking bacterial DNA replication.",
      "Dihydrofolate reductase inhibition describes trimethoprim, which acts on folate metabolism rather than DNA topoisomerases.",
      "Binding penicillin-binding proteins to disrupt cell wall synthesis describes beta-lactams, not quinolones.",
      "RNA polymerase inhibition is the mechanism of rifampin, not fluoroquinolones."
    ]
  },
  {
    "id": "s1-0178",
    "system": "General Principles",
    "discipline": "Pharmacology",
    "topic": "Acetaminophen hepatotoxicity (NAPQI)",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 22-year-old woman is brought in about 30 hours after intentionally ingesting a large quantity of acetaminophen. She initially had only nausea but now has right upper quadrant pain and confusion.\n\n| Test | Value | Reference |\n|---|---|---|\n| AST | 4,800 U/L | 10-40 |\n| ALT | 5,200 U/L | 7-56 |\n| INR | 3.1 | 0.9-1.1 |\n| Total bilirubin | 4.5 mg/dL | 0.2-1.2 |",
    "lead": "Which mechanism best explains her liver injury, and what does the antidote replenish?",
    "options": [
      "Mitochondrial iron overload; antidote chelates iron",
      "Immune-mediated hepatocyte destruction; antidote suppresses the immune response",
      "Accumulation of a toxic quinone metabolite that depletes glutathione; antidote replenishes glutathione stores",
      "Microvesicular fat accumulation from impaired beta-oxidation; antidote provides carnitine",
      "Direct bile duct injury with cholestasis; antidote promotes bile flow"
    ],
    "answer": 2,
    "exp": "In overdose, acetaminophen is shunted to the reactive metabolite NAPQI via cytochrome P450 (CYP2E1). NAPQI exhausts hepatic glutathione and then binds cellular proteins, producing centrilobular hepatocellular necrosis with markedly elevated transaminases, coagulopathy, and encephalopathy. N-acetylcysteine acts as a glutathione precursor and substitute, restoring the capacity to detoxify NAPQI.",
    "why": [
      "Iron overload injury is treated with deferoxamine chelation, which is unrelated to acetaminophen metabolism.",
      "Acetaminophen toxicity is a direct metabolic injury, not an immune-mediated hepatitis treated with immunosuppression.",
      "Correct: NAPQI depletes glutathione and injures hepatocytes, and N-acetylcysteine replenishes glutathione to detoxify the metabolite.",
      "Impaired beta-oxidation with microvesicular steatosis describes Reye syndrome or valproate injury, not acetaminophen overdose.",
      "Acetaminophen causes hepatocellular necrosis rather than a primary cholestatic bile duct injury."
    ]
  },
  {
    "id": "s1-0179",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Pathology",
    "topic": "Warm autoimmune hemolytic anemia",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 60-year-old woman with chronic lymphocytic leukemia develops fatigue, pallor, and scleral icterus over two weeks. Her spleen is mildly enlarged. A peripheral smear shows spherocytes and polychromasia.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 7.8 g/dL | 12-16 |\n| Reticulocyte count | markedly elevated | - |\n| Indirect bilirubin | elevated | - |\n| Haptoglobin | low | - |\n| Direct antiglobulin (Coombs) test | positive for IgG | negative |",
    "lead": "Which best explains her anemia?",
    "options": [
      "A membrane cytoskeletal defect from an inherited ankyrin mutation",
      "IgM cold agglutinins causing complement-mediated intravascular hemolysis",
      "Microangiopathic fragmentation of red cells in small vessels",
      "IgG autoantibodies coating red cells with splenic extravascular clearance",
      "Oxidative denaturation of hemoglobin forming Heinz bodies"
    ],
    "answer": 3,
    "exp": "Acquired hemolytic anemia with spherocytes, reticulocytosis, elevated indirect bilirubin, low haptoglobin, and a direct antiglobulin test positive for IgG is warm autoimmune hemolytic anemia. IgG autoantibodies bind red cells optimally at body temperature; splenic macrophages then remove antibody-coated membrane, forming spherocytes and clearing the cells extravascularly. It is often secondary to chronic lymphocytic leukemia, lupus, or drugs.",
    "why": [
      "An inherited ankyrin defect causes hereditary spherocytosis, which has a negative direct antiglobulin test, unlike this acquired antibody-mediated process.",
      "IgM cold agglutinins produce a Coombs test positive for complement (C3) rather than IgG and hemolysis on cold exposure.",
      "Microangiopathic hemolysis shows schistocytes and a negative direct antiglobulin test, not spherocytes with a positive IgG Coombs.",
      "Correct: warm IgG autoantibodies coat red cells and are cleared by splenic macrophages, producing spherocytes and a positive IgG direct antiglobulin test.",
      "Oxidative injury (as in G6PD deficiency) produces Heinz bodies and bite cells with a negative direct antiglobulin test."
    ]
  },
  {
    "id": "s1-0180",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Pathology",
    "topic": "Sickle cell disease",
    "difficulty": "easy",
    "anchor": "image",
    "vignette": "A 4-year-old African American boy has recurrent episodes of severe pain in his hands, feet, and back, sometimes triggered by cold or infection. He has scleral icterus and splenomegaly, and he has had a pneumococcal infection. His baseline hemoglobin is low.\n\n**[IMAGE: peripheral blood smear showing elongated, crescent-shaped sickled erythrocytes and a Howell-Jolly body]**",
    "lead": "Which molecular change best explains this disease?",
    "options": [
      "Absent synthesis of beta-globin chains",
      "Deficiency of glucose-6-phosphate dehydrogenase",
      "A quantitative reduction of alpha-globin chain production",
      "A defect in the red cell membrane protein spectrin",
      "A glutamate-to-valine substitution in the beta-globin chain"
    ],
    "answer": 4,
    "exp": "Recurrent vaso-occlusive pain crises, hemolytic anemia, functional asplenia with encapsulated-organism infections, and sickled cells on smear indicate sickle cell disease. A single point mutation replaces glutamate with valine at the sixth position of beta-globin, producing hemoglobin S that polymerizes when deoxygenated. The rigid sickled cells occlude microvessels and are cleared prematurely, and repeated splenic infarction causes autosplenectomy.",
    "why": [
      "Absent beta-globin synthesis causes beta-thalassemia major with transfusion dependence, not the sickling seen here.",
      "G6PD deficiency causes episodic oxidative hemolysis with bite cells, not chronic sickling.",
      "Reduced alpha-globin production causes alpha-thalassemia, a quantitative defect without sickling.",
      "A spectrin defect causes hereditary spherocytosis with spherocytes, not sickle cells and vaso-occlusive crises.",
      "Correct: a glutamate-to-valine substitution at codon 6 of beta-globin creates hemoglobin S, which polymerizes and sickles red cells."
    ]
  },
  {
    "id": "s1-0181",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Psychiatry",
    "topic": "Obsessive-compulsive disorder",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 28-year-old woman reports that for the past year she has been plagued by intrusive, unwanted thoughts that her hands are contaminated. To relieve the intense anxiety these thoughts cause, she washes her hands dozens of times a day until they are raw and follows rigid cleaning rituals. She recognizes the behavior is excessive but cannot stop, and it now consumes hours daily and interferes with her job.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Obsessive-compulsive disorder",
      "Obsessive-compulsive personality disorder",
      "Generalized anxiety disorder",
      "Specific phobia",
      "Illness anxiety disorder"
    ],
    "answer": 0,
    "exp": "Recurrent intrusive, distressing thoughts (obsessions) that drive repetitive ritualized behaviors (compulsions) performed to reduce anxiety, recognized as excessive and consuming more than an hour a day with functional impairment, define obsessive-compulsive disorder. First-line treatment combines cognitive-behavioral therapy with exposure and response prevention and an SSRI.",
    "why": [
      "Correct: intrusive contamination obsessions with time-consuming washing compulsions that impair function define obsessive-compulsive disorder.",
      "Obsessive-compulsive personality disorder is a pervasive preoccupation with order and control that is ego-syntonic, without true obsessions and compulsions.",
      "Generalized anxiety disorder is chronic worry about real-life concerns without ritualized compulsions.",
      "Specific phobia is marked fear triggered by a particular object or situation, not intrusive obsessions relieved by rituals.",
      "Illness anxiety disorder is preoccupation with having a serious disease, not contamination obsessions with compulsive washing."
    ]
  },
  {
    "id": "s1-0182",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Neurology",
    "topic": "Normal pressure hydrocephalus",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 73-year-old man is brought in by his wife for several months of a slow, shuffling, wide-based gait with frequent falls, urinary incontinence, and worsening forgetfulness. He is afebrile with no headache. His gait improves noticeably after a large-volume lumbar puncture.\n\n**[IMAGE: axial head CT showing symmetric enlargement of the lateral ventricles out of proportion to cortical atrophy]**",
    "lead": "Which best explains his condition?",
    "options": [
      "Obstruction of cerebrospinal fluid flow at the cerebral aqueduct",
      "Impaired cerebrospinal fluid resorption causing ventriculomegaly at normal pressure",
      "Diffuse cortical amyloid plaque deposition with neurofibrillary tangles",
      "Multiple small-vessel lacunar infarcts in the basal ganglia",
      "Loss of dopaminergic neurons in the substantia nigra"
    ],
    "answer": 1,
    "exp": "The triad of gait apraxia, urinary incontinence, and cognitive decline (\"wet, wobbly, and wacky\") with ventricular enlargement disproportionate to atrophy and improvement after cerebrospinal fluid removal indicates normal pressure hydrocephalus. It reflects impaired cerebrospinal fluid resorption producing communicating hydrocephalus at normal measured pressure; ventricular shunting can reverse symptoms, especially the gait.",
    "why": [
      "Aqueductal obstruction causes noncommunicating hydrocephalus with raised pressure and headache, not this normal-pressure communicating picture.",
      "Correct: impaired cerebrospinal fluid resorption produces communicating ventriculomegaly at normal pressure, giving the gait, urinary, and cognitive triad reversible with fluid drainage.",
      "Cortical amyloid plaques and tangles describe Alzheimer disease, which does not improve after a lumbar puncture or show disproportionate ventriculomegaly.",
      "Multiple lacunar infarcts cause vascular cognitive impairment but not the shunt-responsive triad with ventriculomegaly.",
      "Nigral dopaminergic loss causes Parkinson disease with resting tremor and rigidity, not gait apraxia reversible by cerebrospinal fluid removal."
    ]
  },
  {
    "id": "s1-0183",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Pharmacology",
    "topic": "Neuroleptic malignant syndrome",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 24-year-old man with schizophrenia is brought in after his antipsychotic dose was increased several days ago. Over about two days he became confused and rigid. He is now diaphoretic with a temperature of 40.4 C, generalized \"lead-pipe\" muscle rigidity, and unstable blood pressure. His reflexes are diminished rather than hyperactive.\n\n| Test | Value | Reference |\n|---|---|---|\n| Creatine kinase | 12,000 U/L | 30-200 |\n| White blood cell count | 15,000/mcL | 4,500-11,000 |\n| Potassium | 5.6 mEq/L | 3.5-5.0 |",
    "lead": "Which best explains this presentation?",
    "options": [
      "Excess serotonergic activity from a serotonergic drug interaction",
      "A ryanodine receptor mutation triggered by inhaled anesthetics",
      "Central dopamine receptor blockade causing hyperthermia and rigidity",
      "Anticholinergic toxicity from receptor blockade",
      "Autoimmune encephalitis against NMDA receptors"
    ],
    "answer": 2,
    "exp": "High fever, severe \"lead-pipe\" rigidity with hyporeflexia, autonomic instability, altered mental status, and a markedly elevated creatine kinase days after starting or increasing a dopamine antagonist indicate neuroleptic malignant syndrome. Central D2 receptor blockade impairs thermoregulation and causes rigidity, and sustained muscle contraction produces rhabdomyolysis with hyperkalemia. Treatment includes stopping the antipsychotic plus dantrolene or bromocriptine. The hyporeflexia and slower onset help distinguish it from serotonin syndrome, which causes hyperreflexia, clonus, and rapid onset.",
    "why": [
      "Serotonin syndrome causes hyperthermia with hyperreflexia and clonus and develops within hours of a serotonergic agent, unlike this rigid, hyporeflexic, dopamine-antagonist picture.",
      "A ryanodine receptor mutation causes malignant hyperthermia triggered by inhaled anesthetics or succinylcholine, not by an oral antipsychotic.",
      "Correct: central dopamine (D2) receptor blockade produces hyperthermia, lead-pipe rigidity, autonomic instability, and rhabdomyolysis with elevated creatine kinase.",
      "Anticholinergic toxicity causes hyperthermia with dry skin, flushing, and mydriasis, not diaphoresis with lead-pipe rigidity and very high creatine kinase.",
      "Anti-NMDA receptor encephalitis causes psychiatric symptoms and seizures over weeks, not acute hyperthermic rigidity after a dose increase."
    ]
  },
  {
    "id": "s1-0184",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Ankylosing spondylitis",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 25-year-old man reports more than six months of low back pain and stiffness that is worst in the early morning and after rest and improves with exercise. He has reduced spinal flexion and decreased chest expansion. He also had an episode of a painful red eye. He has no psoriasis or diarrhea.\n\n**[IMAGE: anteroposterior pelvis radiograph showing bilateral sacroiliac joint fusion, with a lateral spine film showing bridging syndesmophytes producing a bamboo spine]**",
    "lead": "Which finding is most strongly associated with this disorder?",
    "options": [
      "Anti-cyclic citrullinated peptide antibodies",
      "Serum monosodium urate crystals",
      "Anti-double-stranded DNA antibodies",
      "The HLA-B27 allele",
      "Anti-topoisomerase I antibodies"
    ],
    "answer": 3,
    "exp": "Chronic inflammatory back pain in a young man with morning stiffness that improves with activity, limited chest expansion, acute anterior uveitis, and radiographic sacroiliitis with syndesmophytes is ankylosing spondylitis. This seronegative spondyloarthropathy is strongly linked to HLA-B27. Enthesitis and progressive spinal fusion (bamboo spine) are characteristic, and rheumatoid factor is absent.",
    "why": [
      "Anti-cyclic citrullinated peptide antibodies are specific for rheumatoid arthritis, which causes symmetric small-joint synovitis rather than sacroiliitis.",
      "Monosodium urate crystals cause gout with acute peripheral arthritis, not inflammatory spinal fusion.",
      "Anti-double-stranded DNA antibodies are specific for systemic lupus erythematosus, not spondyloarthropathy.",
      "Correct: ankylosing spondylitis is strongly associated with HLA-B27 and features sacroiliitis, syndesmophytes, and anterior uveitis.",
      "Anti-topoisomerase I (Scl-70) antibodies indicate diffuse systemic sclerosis, unrelated to ankylosing spondylitis."
    ]
  },
  {
    "id": "s1-0185",
    "system": "Musculoskeletal / Skin",
    "discipline": "Biochemistry",
    "topic": "Vitamin D deficiency rickets",
    "difficulty": "easy",
    "anchor": "image",
    "vignette": "A 14-month-old exclusively breastfed infant who has had little sun exposure is evaluated for bowing of the legs and delayed walking. He has swelling at the wrists and costochondral junctions and a soft, deformable skull. Laboratory testing shows low calcium, low phosphate, and elevated alkaline phosphatase with an elevated parathyroid hormone.\n\n**[IMAGE: radiograph of the wrist showing widened, cupped, and frayed metaphyses of the distal radius and ulna]**",
    "lead": "Which best explains these findings?",
    "options": [
      "Autoimmune destruction of chondrocytes in the growth plate",
      "Increased osteoclastic bone resorption from a parathyroid adenoma",
      "A defect in type I collagen synthesis",
      "Impaired osteoclast function causing dense brittle bone",
      "Deficient mineralization of osteoid from vitamin D deficiency"
    ],
    "answer": 4,
    "exp": "Bowing of the legs, widened wrists, a rachitic rosary at the costochondral junctions, craniotabes, and low calcium and phosphate with high alkaline phosphatase in a breastfed infant with poor sun exposure indicate rickets from vitamin D deficiency. Inadequate vitamin D reduces intestinal calcium and phosphate absorption, so growing bone osteoid fails to mineralize, producing soft, deformable bone and frayed metaphyses. Secondary hyperparathyroidism develops in response to hypocalcemia.",
    "why": [
      "Autoimmune chondrocyte destruction is not the mechanism; rickets is a mineralization defect from vitamin D deficiency.",
      "A parathyroid adenoma raises calcium, whereas this child is hypocalcemic with secondary hyperparathyroidism.",
      "A type I collagen defect causes osteogenesis imperfecta with fractures and blue sclerae, not frayed metaphyses from poor mineralization.",
      "Impaired osteoclast function causes osteopetrosis with dense brittle bones, the opposite of soft undermineralized rachitic bone.",
      "Correct: vitamin D deficiency impairs calcium and phosphate absorption, leaving osteoid unmineralized and causing the skeletal deformities of rickets."
    ]
  },
  {
    "id": "s1-0186",
    "system": "Cardiovascular",
    "discipline": "Pathology",
    "topic": "Infective endocarditis",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 32-year-old man who injects drugs presents with two weeks of fever, chills, and malaise. He has a new holosystolic murmur at the lower left sternal border that increases with inspiration. He has small tender nodules on his fingertips and painless macules on his palms and soles.\n\n**[IMAGE: transthoracic echocardiogram showing a mobile echogenic vegetation attached to the tricuspid valve]**",
    "lead": "Which best explains this presentation?",
    "options": [
      "Microbial vegetations on a heart valve with septic embolization",
      "Sterile verrucous vegetations along the valve closure lines from lupus",
      "Fibrinous pericardial inflammation from a viral infection",
      "Myxomatous degeneration causing valve prolapse",
      "Rheumatic scarring and fusion of the valve commissures"
    ],
    "answer": 0,
    "exp": "Fever, a new regurgitant murmur, and peripheral stigmata (Osler nodes, Janeway lesions) in a person who injects drugs indicate infective endocarditis, here of the tricuspid valve. Bacteria seed the valve and form vegetations of platelets, fibrin, and organisms; fragments embolize, and immune-complex phenomena produce the peripheral findings. Right-sided disease in injection drug use is frequently due to Staphylococcus aureus.",
    "why": [
      "Correct: infective endocarditis forms microbial vegetations on the valve that embolize and cause the fever, new murmur, and peripheral lesions.",
      "Sterile verrucous vegetations on both sides of the valve describe Libman-Sacks endocarditis of lupus, without fever or positive cultures.",
      "Fibrinous pericarditis causes pleuritic chest pain and a friction rub, not a valvular vegetation with embolic phenomena.",
      "Myxomatous mitral valve prolapse causes a midsystolic click, not fever with vegetations and embolic lesions.",
      "Rheumatic commissural fusion causes chronic mitral stenosis, not an acute febrile illness with valve vegetations."
    ]
  },
  {
    "id": "s1-0187",
    "system": "Cardiovascular",
    "discipline": "Physiology",
    "topic": "Third-degree (complete) atrioventricular block",
    "difficulty": "moderate",
    "anchor": "ecg",
    "vignette": "An 80-year-old woman reports fatigue and several episodes of lightheadedness with near-fainting. Her pulse is slow and regular at about 38 beats per minute and does not increase with exertion. She takes no nodal blocking drugs.\n\n**[ECG: regular P waves at about 90 per minute and regular QRS complexes at about 38 per minute, with complete dissociation between P waves and QRS complexes]**",
    "lead": "Which best explains her bradycardia?",
    "options": [
      "Progressive prolongation of the PR interval until a beat drops",
      "Complete failure of atrioventricular conduction with an independent escape rhythm",
      "A reentrant circuit using an accessory pathway",
      "Increased vagal tone slowing the sinoatrial node",
      "Chaotic atrial activity with an irregularly irregular ventricular response"
    ],
    "answer": 1,
    "exp": "Atrioventricular dissociation in which P waves and QRS complexes each march out at their own regular but unrelated rates is third-degree (complete) heart block. No atrial impulse reaches the ventricles, so a junctional or ventricular escape pacemaker drives the slow ventricular rate. Symptomatic complete block requires a permanent pacemaker.",
    "why": [
      "Progressive PR prolongation until a dropped beat describes Mobitz type I (Wenckebach) second-degree block, not complete dissociation.",
      "Correct: complete failure of atrioventricular conduction leaves the atria and an escape pacemaker beating independently, producing the dissociation and bradycardia.",
      "An accessory-pathway reentrant circuit causes tachycardia, not a slow dissociated rhythm.",
      "High vagal tone slows the sinus node but preserves atrioventricular conduction, so P waves and QRS complexes stay linked.",
      "Irregularly irregular ventricular activity with no discrete P waves describes atrial fibrillation, not regular dissociated complexes."
    ]
  },
  {
    "id": "s1-0188",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Microbiology",
    "topic": "Pneumococcal lobar pneumonia",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 64-year-old man develops an abrupt high fever with shaking chills, a productive cough with rust-colored sputum, and sharp right-sided chest pain that worsens with breathing. Examination shows dullness to percussion, increased tactile fremitus, and bronchial breath sounds over the right lower lung. A sputum Gram stain shows lancet-shaped gram-positive diplococci.\n\n**[IMAGE: posteroanterior chest radiograph showing dense homogeneous consolidation confined to the right lower lobe with air bronchograms]**",
    "lead": "Which is the most likely causative organism?",
    "options": [
      "Mycoplasma pneumoniae",
      "Legionella pneumophila",
      "Streptococcus pneumoniae",
      "Klebsiella pneumoniae",
      "Pneumocystis jirovecii"
    ],
    "answer": 2,
    "exp": "Sudden fever with rigors, rust-colored sputum, pleuritic pain, lobar consolidation with signs of consolidation on examination, and lancet-shaped gram-positive diplococci indicate lobar pneumonia from Streptococcus pneumoniae, the most common cause of community-acquired bacterial pneumonia. The consolidation reflects alveolar filling with neutrophilic exudate that transmits sound and produces bronchial breath sounds and increased fremitus.",
    "why": [
      "Mycoplasma pneumoniae causes a walking pneumonia with diffuse interstitial infiltrates and no organisms on Gram stain because it lacks a cell wall.",
      "Legionella causes atypical pneumonia often with diarrhea and hyponatremia and does not show gram-positive diplococci.",
      "Correct: lancet-shaped gram-positive diplococci with lobar consolidation and rust-colored sputum indicate Streptococcus pneumoniae.",
      "Klebsiella causes lobar pneumonia with thick currant-jelly sputum in alcoholics and shows gram-negative rods, not diplococci.",
      "Pneumocystis jirovecii causes diffuse interstitial pneumonia in immunocompromised patients, not lobar consolidation with diplococci."
    ]
  },
  {
    "id": "s1-0189",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Immunology",
    "topic": "Goodpasture syndrome (anti-GBM disease)",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 26-year-old man presents with one week of coughing up blood and progressive shortness of breath, and he has noticed dark, cola-colored urine and decreasing urine output. He is a smoker. His blood pressure is elevated.\n\n| Test | Value | Reference |\n|---|---|---|\n| Serum creatinine | 3.8 mg/dL | 0.7-1.3 |\n| Urinalysis | dysmorphic RBCs and red cell casts | none |\n| Anti-glomerular basement membrane antibody | positive | negative |\n| ANCA | negative | negative |",
    "lead": "Which best explains the combined lung and kidney findings?",
    "options": [
      "Immune complex deposition in glomeruli and alveoli",
      "IgA deposition in the mesangium and dermal vessels",
      "Antineutrophil cytoplasmic antibody-associated small-vessel vasculitis",
      "Antibodies against the alpha-3 chain of type IV collagen in basement membranes",
      "Anti-phospholipase A2 receptor antibodies in the glomerulus"
    ],
    "answer": 3,
    "exp": "Simultaneous alveolar hemorrhage (hemoptysis) and rapidly progressive glomerulonephritis with a positive anti-glomerular basement membrane antibody and negative ANCA indicate Goodpasture syndrome. Autoantibodies target the alpha-3 chain of type IV collagen, shared by alveolar and glomerular basement membranes, producing linear immunofluorescence and a crescentic glomerulonephritis. Smoking increases alveolar involvement.",
    "why": [
      "Immune-complex deposition (as in lupus or postinfectious disease) gives a granular, not linear, pattern and is not defined by anti-glomerular basement membrane antibodies.",
      "Mesangial IgA deposition causes IgA nephropathy, which does not produce alveolar hemorrhage or anti-glomerular basement membrane antibodies.",
      "ANCA-associated vasculitis can cause a pulmonary-renal syndrome, but the ANCA is negative and the anti-glomerular basement membrane antibody is positive here.",
      "Correct: antibodies against the alpha-3 chain of type IV collagen attack shared alveolar and glomerular basement membranes, causing pulmonary hemorrhage with crescentic glomerulonephritis.",
      "Anti-phospholipase A2 receptor antibodies cause membranous nephropathy with nephrotic syndrome, not a pulmonary-renal hemorrhagic syndrome."
    ]
  },
  {
    "id": "s1-0190",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Primary biliary cholangitis",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 52-year-old woman reports several months of fatigue and generalized itching that is worse at night. She has hyperpigmentation and small yellow deposits around her eyelids. She has no significant alcohol use and takes no hepatotoxic drugs.\n\n| Test | Value | Reference |\n|---|---|---|\n| Alkaline phosphatase | markedly elevated | 40-120 |\n| AST and ALT | mildly elevated | - |\n| Antimitochondrial antibody | positive | negative |\n| IgM | elevated | - |",
    "lead": "Which best explains this disorder?",
    "options": [
      "Obstructing gallstone in the common bile duct",
      "Inflammatory strictures and dilations of large bile ducts",
      "Autoantibodies against hepatocyte nuclei and smooth muscle causing interface hepatitis",
      "Iron deposition causing hepatocyte injury and fibrosis",
      "Autoimmune destruction of intrahepatic small bile ducts"
    ],
    "answer": 4,
    "exp": "A middle-aged woman with fatigue, pruritus, xanthelasma, a cholestatic pattern with markedly elevated alkaline phosphatase, and a positive antimitochondrial antibody has primary biliary cholangitis. T-cell mediated autoimmune destruction of small intrahepatic bile ducts causes cholestasis, pruritus, and hypercholesterolemia, and it can progress to cirrhosis. Ursodeoxycholic acid is the mainstay of treatment.",
    "why": [
      "A common bile duct stone causes extrahepatic obstruction with pain and a dilated duct, not a positive antimitochondrial antibody.",
      "Inflammatory strictures of large ducts describe primary sclerosing cholangitis, which is associated with ulcerative colitis and a positive p-ANCA, not antimitochondrial antibody.",
      "Antibodies against nuclei and smooth muscle with interface hepatitis describe autoimmune hepatitis, a hepatocellular rather than cholestatic pattern.",
      "Iron deposition describes hereditary hemochromatosis, which does not produce an antimitochondrial antibody or a purely cholestatic picture.",
      "Correct: autoimmune destruction of small intrahepatic bile ducts causes the cholestatic pattern, pruritus, and antimitochondrial antibody of primary biliary cholangitis."
    ]
  },
  {
    "id": "s1-0191",
    "system": "Gastrointestinal",
    "discipline": "Microbiology",
    "topic": "Helicobacter pylori peptic ulcer disease",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 45-year-old man reports several weeks of gnawing epigastric pain that improves shortly after eating and recurs a few hours later, sometimes waking him at night. He takes no nonsteroidal anti-inflammatory drugs. Endoscopy shows a clean-based ulcer in the duodenal bulb, and a biopsy urease test is positive.",
    "lead": "Which organism is most likely responsible?",
    "options": [
      "Helicobacter pylori",
      "Escherichia coli",
      "Salmonella enterica",
      "Candida albicans",
      "Cytomegalovirus"
    ],
    "answer": 0,
    "exp": "A duodenal ulcer with pain relieved by food and a positive biopsy urease test indicates Helicobacter pylori infection, the leading cause of peptic ulcer disease when nonsteroidal anti-inflammatory drugs are absent. The organism produces urease to neutralize gastric acid and colonizes the mucus layer, causing chronic inflammation that predisposes to ulceration. Eradication with antibiotics plus a proton pump inhibitor heals ulcers and prevents recurrence.",
    "why": [
      "Correct: Helicobacter pylori, a urease-positive organism, is the most common cause of duodenal ulcers not related to nonsteroidal anti-inflammatory drugs.",
      "Escherichia coli causes urinary and enteric infections, not chronic gastric colonization and peptic ulceration.",
      "Salmonella causes gastroenteritis and enteric fever, not a urease-positive duodenal ulcer.",
      "Candida esophagitis occurs in immunocompromised hosts and does not produce a positive urease test in a duodenal ulcer.",
      "Cytomegalovirus can cause ulcers in immunocompromised patients but is not the typical urease-positive cause of duodenal ulcer disease."
    ]
  },
  {
    "id": "s1-0192",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Medullary thyroid carcinoma (MEN2)",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 32-year-old man has a firm thyroid nodule and episodes of flushing and diarrhea. His father died of a thyroid cancer, and an uncle had recurrent kidney stones. He also reports episodic pounding headaches and palpitations with sweating.\n\n| Test | Value | Reference |\n|---|---|---|\n| Serum calcitonin | markedly elevated | < 10 pg/mL |\n| Carcinoembryonic antigen | elevated | - |\n| Plasma metanephrines | elevated | normal |",
    "lead": "This thyroid tumor arises from which cell type, and which gene is most likely mutated?",
    "options": [
      "Follicular epithelial cells; a BRAF mutation",
      "Parafollicular C cells; a RET proto-oncogene mutation",
      "Follicular epithelial cells; a PAX8-PPAR gamma fusion",
      "Lymphocytes; a translocation involving BCL2",
      "Parathyroid chief cells; an MEN1 mutation"
    ],
    "answer": 1,
    "exp": "A calcitonin-secreting thyroid tumor with elevated carcinoembryonic antigen, a family history of thyroid cancer, and coexisting pheochromocytoma (episodic headache, palpitations, sweating, elevated metanephrines) indicate medullary thyroid carcinoma within multiple endocrine neoplasia type 2. This tumor arises from parafollicular C cells and is driven by activating germline mutations of the RET proto-oncogene. Prophylactic thyroidectomy is offered to gene carriers.",
    "why": [
      "A BRAF mutation drives papillary thyroid carcinoma from follicular cells, which does not secrete calcitonin or associate with pheochromocytoma.",
      "Correct: medullary thyroid carcinoma arises from calcitonin-secreting parafollicular C cells and is driven by RET proto-oncogene mutations, as in MEN2.",
      "A PAX8-PPAR gamma fusion is seen in follicular thyroid carcinoma, not the calcitonin-secreting C-cell tumor described.",
      "A BCL2 translocation drives follicular lymphoma, unrelated to a calcitonin-secreting thyroid tumor.",
      "MEN1 mutations cause parathyroid, pituitary, and pancreatic tumors, not RET-driven medullary thyroid carcinoma with pheochromocytoma."
    ]
  },
  {
    "id": "s1-0193",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Endometriosis",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 31-year-old woman reports several years of progressively worsening pelvic pain that begins a day or two before her menses, painful intercourse, and difficulty conceiving. Pelvic examination reveals tender nodularity along the uterosacral ligaments and a fixed, retroverted uterus. A tender adnexal mass is palpable.",
    "lead": "Which best explains her symptoms?",
    "options": [
      "Benign smooth muscle tumors within the myometrium",
      "Ascending infection of the upper genital tract",
      "Endometrial glands and stroma implanted outside the uterine cavity",
      "Malignant proliferation of ovarian surface epithelium",
      "Adenomyosis with endometrial glands within the myometrium"
    ],
    "answer": 2,
    "exp": "Cyclic pelvic pain preceding menses, dyspareunia, infertility, uterosacral nodularity, and an adnexal mass (endometrioma) indicate endometriosis. Functioning endometrial glands and stroma implanted outside the uterus respond to cyclic hormones, bleed, and incite inflammation and adhesions, producing pain and infertility. Ovarian implants can form chocolate cysts.",
    "why": [
      "Myometrial smooth muscle tumors (leiomyomas) cause bulk symptoms and heavy bleeding, not cyclic pain with uterosacral nodularity.",
      "Ascending pelvic infection causes acute fever and cervical motion tenderness, not years of cyclic pain with fixed nodularity.",
      "Correct: ectopic endometrial glands and stroma outside the uterus cause cyclic pain, dyspareunia, infertility, and endometriomas.",
      "Malignant ovarian surface epithelium causes a complex mass and constitutional symptoms, not this cyclic pain syndrome in a young woman.",
      "Adenomyosis causes a diffusely enlarged, boggy, tender uterus with heavy menses, not implants on the uterosacral ligaments and adnexa."
    ]
  },
  {
    "id": "s1-0194",
    "system": "Reproductive & Endocrine",
    "discipline": "Physiology",
    "topic": "Primary hyperaldosteronism (Conn syndrome)",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 48-year-old woman has hypertension that remains poorly controlled despite three antihypertensive drugs. She reports muscle weakness and frequent urination. She is not taking diuretics.\n\n| Test | Value | Reference |\n|---|---|---|\n| Potassium | 2.9 mEq/L | 3.5-5.0 |\n| Bicarbonate | 32 mEq/L | 22-28 |\n| Plasma aldosterone | markedly elevated | - |\n| Plasma renin activity | suppressed | - |\n| Aldosterone-to-renin ratio | high | - |",
    "lead": "Which best explains this presentation?",
    "options": [
      "A pheochromocytoma secreting catecholamines",
      "Renal artery stenosis activating the renin-angiotensin system",
      "Excess cortisol from an ACTH-secreting pituitary adenoma",
      "Autonomous adrenal aldosterone secretion independent of renin",
      "A distal tubular sodium channel defect causing salt wasting"
    ],
    "answer": 3,
    "exp": "Resistant hypertension with spontaneous hypokalemia, metabolic alkalosis, a high aldosterone, and suppressed renin (high aldosterone-to-renin ratio) indicate primary hyperaldosteronism, usually from an adrenal adenoma or bilateral hyperplasia. Autonomous aldosterone drives renal sodium retention and potassium and hydrogen loss, causing hypertension, hypokalemia, and alkalosis while feedback suppresses renin. This contrasts with secondary causes, in which renin is high.",
    "why": [
      "A pheochromocytoma causes episodic hypertension with headache, palpitations, and sweating from catecholamines, not hypokalemic alkalosis with high aldosterone and low renin.",
      "Renal artery stenosis causes secondary hyperaldosteronism with elevated renin, whereas renin is suppressed here.",
      "Excess cortisol from an ACTH-secreting adenoma causes Cushing disease with central obesity and striae, not isolated aldosterone excess with suppressed renin.",
      "Correct: autonomous adrenal aldosterone secretion raises aldosterone while suppressing renin, producing resistant hypertension with hypokalemia and metabolic alkalosis.",
      "A distal tubular sodium channel defect causing salt wasting (as in Gitelman syndrome) produces low blood pressure, not hypertension."
    ]
  },
  {
    "id": "s1-0195",
    "system": "Multisystem",
    "discipline": "Pathology",
    "topic": "Amyloidosis",
    "difficulty": "hard",
    "anchor": "image",
    "vignette": "A 63-year-old man has months of fatigue, worsening leg edema, and frothy urine. He has an enlarged tongue, easy bruising around the eyes, and thickened, waxy skin. Echocardiography shows thickened ventricular walls, while the ECG shows paradoxically low QRS voltages (voltage-mass discordance), and urinalysis shows heavy proteinuria. He has a monoclonal light chain in the serum.\n\n**[IMAGE: renal biopsy stained with Congo red showing amorphous deposits that display apple-green birefringence under polarized light]**",
    "lead": "Which best explains these multisystem findings?",
    "options": [
      "Granulomatous inflammation infiltrating multiple organs",
      "Widespread interstitial fibrosis from activated fibroblasts",
      "Diffuse small-vessel vasculitis from immune complexes",
      "Metastatic calcification of soft tissues from hypercalcemia",
      "Extracellular deposition of misfolded protein in a beta-pleated sheet"
    ],
    "answer": 4,
    "exp": "Nephrotic-range proteinuria, restrictive cardiomyopathy, macroglossia, periorbital purpura, and a serum monoclonal light chain with Congo red-positive, apple-green birefringent deposits indicate amyloidosis (here AL type from a plasma cell clone). Misfolded proteins aggregate into extracellular beta-pleated sheet fibrils that deposit in and disrupt multiple organs. The apple-green birefringence under polarized light is diagnostic.",
    "why": [
      "Granulomatous multiorgan infiltration describes sarcoidosis, which does not show Congo red-positive apple-green birefringent deposits or a monoclonal light chain.",
      "Fibroblast-driven interstitial fibrosis describes systemic sclerosis, not the fibrillar protein deposition of amyloidosis.",
      "Immune-complex small-vessel vasculitis causes palpable purpura and organ ischemia, not amyloid fibril deposition.",
      "Metastatic calcification deposits calcium salts in normal tissue from hypercalcemia and does not stain with Congo red.",
      "Correct: amyloidosis is extracellular deposition of misfolded protein as beta-pleated sheet fibrils, producing the organ dysfunction and characteristic Congo red birefringence."
    ]
  },
  {
    "id": "s1-0196",
    "system": "Multisystem",
    "discipline": "Pharmacology",
    "topic": "Ethylene glycol poisoning",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 40-year-old man is brought in confused and ataxic several hours after reportedly drinking antifreeze. He is tachypneic and now has flank pain and decreased urine output.\n\n| Test | Value | Reference |\n|---|---|---|\n| Arterial pH | 7.18 | 7.35-7.45 |\n| Anion gap | 28 mEq/L | 8-12 |\n| Osmolar gap | elevated | < 10 |\n| Serum creatinine | 2.6 mg/dL | 0.7-1.3 |\n| Urine microscopy | envelope-shaped crystals | none |",
    "lead": "Which best explains the metabolic acidosis and kidney injury?",
    "options": [
      "Metabolism to glycolic and oxalic acids with calcium oxalate deposition in tubules",
      "Metabolism to formic acid causing optic nerve injury",
      "Accumulation of ketoacids from unopposed lipolysis",
      "Lactic acidosis from inhibition of cytochrome c oxidase",
      "Retention of organic acids from acute kidney failure alone"
    ],
    "answer": 0,
    "exp": "A high anion gap metabolic acidosis with an elevated osmolar gap, acute kidney injury, and envelope-shaped (calcium oxalate) crystals after antifreeze ingestion indicate ethylene glycol poisoning. Alcohol dehydrogenase converts ethylene glycol to glycolic and then oxalic acid, producing acidosis, while calcium oxalate crystals precipitate in renal tubules causing injury and hypocalcemia. Treatment blocks alcohol dehydrogenase with fomepizole.",
    "why": [
      "Correct: ethylene glycol is metabolized to glycolic and oxalic acids, causing high anion gap acidosis and calcium oxalate crystal deposition that injures the kidneys.",
      "Metabolism to formic acid describes methanol poisoning, which causes visual loss rather than oxalate crystals and renal failure.",
      "Ketoacid accumulation describes diabetic or alcoholic ketoacidosis, which does not produce an osmolar gap or oxalate crystals.",
      "Cytochrome c oxidase inhibition describes cyanide toxicity, which causes lactic acidosis without oxalate crystalluria.",
      "Kidney failure alone does not produce the elevated osmolar gap and envelope-shaped crystals seen with ethylene glycol."
    ]
  },
  {
    "id": "s1-0197",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Biostatistics",
    "topic": "Positive likelihood ratio",
    "difficulty": "moderate",
    "anchor": "table",
    "vignette": "A new blood test for a disease is evaluated against a reference standard in 200 patients, with the results shown below.\n\n| | Disease + | Disease - |\n|---|---|---|\n| Test + | 72 | 20 |\n| Test - | 8 | 100 |\n\nThe sensitivity is 0.90 and the specificity is 0.83.",
    "lead": "What is the approximate positive likelihood ratio of this test?",
    "options": [
      "0.12",
      "5.3",
      "0.90",
      "1.0",
      "0.20"
    ],
    "answer": 1,
    "exp": "The positive likelihood ratio equals sensitivity divided by (1 minus specificity), which is how much a positive result raises the odds of disease. Here that is 0.90 / (1 - 0.83) = 0.90 / 0.17, which is approximately 5.3. A likelihood ratio above 1 (and especially above 5 to 10) meaningfully increases the post-test probability of disease.",
    "why": [
      "0.12 corresponds to the negative likelihood ratio, (1 - sensitivity)/specificity = 0.10/0.83, not the positive likelihood ratio.",
      "Correct: the positive likelihood ratio is sensitivity/(1 - specificity) = 0.90/0.17, which is about 5.3.",
      "0.90 is the sensitivity itself, not the likelihood ratio, which also incorporates the specificity.",
      "A likelihood ratio of 1.0 would mean the test provides no diagnostic information, which is not the case here.",
      "0.20 does not correspond to the positive likelihood ratio computed from these sensitivity and specificity values."
    ]
  },
  {
    "id": "s1-0198",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Epidemiology",
    "topic": "Publication bias",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A researcher performing a meta-analysis of a drug's effect notices that small studies with positive, statistically significant results were readily published, whereas several small studies showing no benefit were never published and are difficult to locate. A funnel plot of the available studies is visibly asymmetric.",
    "lead": "Which type of bias is most directly illustrated?",
    "options": [
      "Lead-time bias",
      "Recall bias",
      "Publication bias",
      "Confounding",
      "Attrition bias"
    ],
    "answer": 2,
    "exp": "The selective publication of studies with positive or significant findings while null studies remain unpublished is publication bias. It skews meta-analyses toward overestimating an effect and produces an asymmetric funnel plot. It can be mitigated by trial registries, systematic searching of unpublished data, and statistical tests for funnel plot asymmetry.",
    "why": [
      "Lead-time bias applies to screening, where earlier detection appears to lengthen survival without changing outcome.",
      "Recall bias arises from differential accuracy of remembered exposures, not from selective publication of studies.",
      "Correct: preferential publication of positive studies over null studies is publication bias, reflected in the asymmetric funnel plot.",
      "Confounding is distortion by a third variable within a study, not a pattern of which studies get published.",
      "Attrition bias arises from differential loss of participants during a study, not from selective publication."
    ]
  },
  {
    "id": "s1-0199",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Refusal of blood transfusion (autonomy)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 40-year-old man who is a Jehovah's Witness is hospitalized with severe gastrointestinal bleeding. He is alert and fully oriented, clearly understands that he could die without a transfusion, and calmly but firmly refuses all blood products for religious reasons. He has documented this wish previously and repeats it now. His adult daughter urges the team to transfuse him anyway.",
    "lead": "Which is the most appropriate course of action?",
    "options": [
      "Transfuse because the benefit clearly outweighs the risk in a life-threatening emergency",
      "Follow the daughter's wishes because she is next of kin",
      "Transfuse once the patient becomes unconscious and can no longer object",
      "Honor the patient's informed refusal and provide alternative supportive management",
      "Seek a court order to override the patient's refusal"
    ],
    "answer": 3,
    "exp": "A competent, informed adult has the right to refuse any treatment, including life-saving transfusion, based on personal or religious beliefs; this reflects the principle of autonomy. Because this patient has full decision-making capacity and understands the consequences, his refusal must be respected, and the team should offer alternatives such as volume resuscitation, iron, erythropoietin, and hemostatic measures. Family members cannot override a capacitated patient's own decision.",
    "why": [
      "Overriding a capacitated patient's refusal violates autonomy, even when the physician judges the treatment beneficial.",
      "The daughter cannot override the decision of a patient who currently has capacity to decide for himself.",
      "Waiting to transfuse once he is unconscious deliberately circumvents his clearly expressed capacitated wishes and is unethical.",
      "Correct: a competent, informed adult may refuse transfusion for religious reasons, so the team should honor the refusal and pursue alternative management.",
      "A court order is not warranted to override the informed refusal of a competent adult with capacity."
    ]
  },
  {
    "id": "s1-0200",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Truth-telling and family requests for nondisclosure",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 70-year-old woman is newly diagnosed with metastatic pancreatic cancer. Before she is told, her adult son approaches the team and insists that his mother not be informed of the diagnosis, saying it would \"destroy her hope.\" The patient is alert, has full decision-making capacity, and has not previously indicated any wish to defer information to her family.",
    "lead": "Which is the most appropriate initial response?",
    "options": [
      "Withhold the diagnosis as the son requests to protect the patient from distress",
      "Disclose the diagnosis to the son and let him decide how much to tell her",
      "Refer the decision to the hospital ethics committee before speaking with anyone",
      "Tell the patient the full diagnosis immediately without acknowledging the son",
      "Ask the patient how much she wishes to know and who she wants involved"
    ],
    "answer": 4,
    "exp": "A competent patient has the right to receive information about her own diagnosis, and truth-telling supports her autonomy and ability to make decisions. Rather than simply complying with the family's request for nondisclosure or bluntly overriding it, the physician should first explore the patient's own preferences, asking how much she wishes to know and whom she wants involved. Some patients do choose to defer to family, but only the patient can authorize that.",
    "why": [
      "Withholding the diagnosis at the family's request overrides the patient's right to information about her own condition.",
      "Delegating disclosure to the son improperly transfers the capacitated patient's right to know to a family member.",
      "Routing the decision to an ethics committee before even speaking with the patient is unnecessary and delays appropriate patient-centered communication.",
      "Bluntly disclosing everything without exploring her preferences ignores that some patients prefer to defer or receive information gradually.",
      "Correct: the physician should first ask the patient how much she wants to know and whom she wants involved, respecting her autonomy before disclosing."
    ]
  },
  {
    "id": "s1-0201",
    "system": "General Principles",
    "discipline": "Biochemistry",
    "topic": "Pompe disease (glycogen storage disease type II)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 5-month-old infant is evaluated for profound floppiness and poor feeding. He has marked hypotonia, a large protruding tongue, and hepatomegaly. Examination reveals a hyperdynamic precordium, and echocardiography shows massively thickened ventricular walls. He tires quickly and has difficulty breathing, and the family is counseled that the disease often causes death from cardiorespiratory failure in infancy.",
    "lead": "A deficiency of which enzyme best explains this presentation?",
    "options": [
      "Lysosomal acid alpha-glucosidase (acid maltase)",
      "Glucose-6-phosphatase",
      "Glycogen debranching enzyme (alpha-1,6-glucosidase)",
      "Skeletal muscle glycogen phosphorylase (myophosphorylase)",
      "Lysosomal alpha-galactosidase A"
    ],
    "answer": 0,
    "exp": "Infantile hypotonia (\"floppy baby\"), macroglossia, hepatomegaly, and a massively hypertrophic cardiomyopathy indicate Pompe disease, glycogen storage disease type II. Deficiency of lysosomal acid alpha-glucosidase (acid maltase) prevents lysosomal degradation of glycogen, so glycogen accumulates within lysosomes of cardiac and skeletal muscle. Because the defect is lysosomal, blood glucose is not affected, distinguishing it from the cytosolic glycogenoses.",
    "why": [
      "Correct: deficiency of lysosomal acid alpha-glucosidase (acid maltase) causes lysosomal glycogen accumulation, producing the cardiomegaly, hypotonia, and macroglossia of Pompe disease.",
      "Glucose-6-phosphatase deficiency causes von Gierke disease with fasting hypoglycemia and hepatomegaly, not a hypertrophic cardiomyopathy.",
      "Debranching enzyme deficiency causes Cori disease with milder hypoglycemia and hepatomegaly, without the severe infantile cardiomyopathy.",
      "Myophosphorylase deficiency causes McArdle disease with exercise-induced cramps in adults, not infantile cardiomegaly and hypotonia.",
      "Alpha-galactosidase A deficiency causes Fabry disease with acroparesthesias and angiokeratomas, not glycogen accumulation."
    ]
  },
  {
    "id": "s1-0202",
    "system": "General Principles",
    "discipline": "Pharmacology",
    "topic": "Aminoglycoside mechanism (30S ribosomal subunit)",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 58-year-old man with gram-negative bacteremia is started on intravenous gentamicin. He is counseled that his kidney function and hearing will be monitored during therapy because of potential nephrotoxicity and ototoxicity.",
    "lead": "Which mechanism best explains the antibacterial action of this drug?",
    "options": [
      "Inhibition of DNA gyrase (topoisomerase II)",
      "Binding the 30S ribosomal subunit, causing misreading of mRNA and blocking initiation",
      "Binding penicillin-binding proteins to disrupt cell wall synthesis",
      "Inhibition of dihydrofolate reductase blocking folate synthesis",
      "Inhibition of RNA polymerase blocking transcription"
    ],
    "answer": 1,
    "exp": "Aminoglycosides such as gentamicin bind irreversibly to the 30S ribosomal subunit, causing misreading of the genetic code and blocking formation of the initiation complex, which is bactericidal against aerobic gram-negative bacteria. Their uptake into bacteria is oxygen-dependent, so they are inactive against anaerobes. Nephrotoxicity and ototoxicity are the major dose-related adverse effects.",
    "why": [
      "DNA gyrase inhibition is the mechanism of fluoroquinolones, not aminoglycosides.",
      "Correct: aminoglycosides bind the 30S ribosomal subunit, causing mRNA misreading and blocking initiation of protein synthesis.",
      "Binding penicillin-binding proteins describes beta-lactams, which act on the cell wall rather than the ribosome.",
      "Dihydrofolate reductase inhibition describes trimethoprim, acting on folate metabolism.",
      "RNA polymerase inhibition is the mechanism of rifampin, not aminoglycosides."
    ]
  },
  {
    "id": "s1-0203",
    "system": "General Principles",
    "discipline": "Pharmacology",
    "topic": "Warfarin mechanism (vitamin K epoxide reductase)",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 67-year-old man taking an oral anticoagulant for atrial fibrillation presents with gum bleeding and easy bruising after starting an antibiotic. His anticoagulant is held and he is given vitamin K, which gradually corrects his coagulation studies.\n\n| Test | Value | Reference |\n|---|---|---|\n| Prothrombin time (PT) | 42 s | 11-13.5 |\n| INR | 6.5 | 0.9-1.1 |\n| aPTT | mildly prolonged | 25-35 |\n| Platelet count | normal | 150,000-400,000 |",
    "lead": "Which mechanism best explains the action of this anticoagulant?",
    "options": [
      "Direct inhibition of thrombin (factor IIa)",
      "Direct inhibition of activated factor X",
      "Inhibition of vitamin K epoxide reductase, impairing gamma-carboxylation of factors II, VII, IX, and X",
      "Potentiation of antithrombin activity",
      "Irreversible inhibition of platelet cyclooxygenase"
    ],
    "answer": 2,
    "exp": "The oral vitamin K antagonist warfarin inhibits vitamin K epoxide reductase, blocking regeneration of reduced vitamin K needed for gamma-carboxylation of clotting factors II, VII, IX, and X (and proteins C and S). This impairs the function of these factors and prolongs the prothrombin time and INR. Reversal with vitamin K restores carboxylation capacity, explaining the gradual correction.",
    "why": [
      "Direct thrombin inhibition describes dabigatran, not warfarin, and is not reversed by vitamin K.",
      "Direct factor Xa inhibition describes agents such as rivaroxaban, whose effect is not corrected by vitamin K.",
      "Correct: warfarin inhibits vitamin K epoxide reductase, impairing gamma-carboxylation of factors II, VII, IX, and X, prolonging the PT/INR reversibly with vitamin K.",
      "Potentiation of antithrombin is the mechanism of heparin, which prolongs the aPTT and is reversed with protamine.",
      "Irreversible platelet cyclooxygenase inhibition describes aspirin, an antiplatelet agent, not an anticoagulant affecting the INR."
    ]
  },
  {
    "id": "s1-0204",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Hematology",
    "topic": "Von Willebrand disease",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 19-year-old woman reports lifelong easy bruising, frequent nosebleeds, heavy menstrual periods, and prolonged bleeding after a dental extraction. Her mother has similar symptoms. She takes no medications.\n\n| Test | Value | Reference |\n|---|---|---|\n| Platelet count | normal | 150,000-400,000 |\n| Prothrombin time | normal | 11-13.5 |\n| aPTT | mildly prolonged | 25-35 |\n| Platelet function analysis (closure time) | prolonged | normal |\n| Ristocetin cofactor activity | decreased | normal |",
    "lead": "Which best explains her bleeding disorder?",
    "options": [
      "Isolated deficiency of factor VIII",
      "Deficiency of the platelet glycoprotein IIb/IIIa receptor",
      "Deficiency of the metalloprotease ADAMTS13",
      "A quantitative or qualitative defect of von Willebrand factor impairing platelet adhesion",
      "Vitamin K deficiency impairing clotting factor carboxylation"
    ],
    "answer": 3,
    "exp": "Lifelong mucocutaneous bleeding (epistaxis, menorrhagia, gum and post-procedure bleeding) with a normal platelet count, prolonged platelet function closure time, decreased ristocetin cofactor activity, and a mildly prolonged aPTT indicate von Willebrand disease, the most common inherited bleeding disorder. Von Willebrand factor mediates platelet adhesion to injured endothelium and stabilizes factor VIII; its deficiency causes a combined platelet-type and mild coagulation defect.",
    "why": [
      "Isolated factor VIII deficiency causes hemophilia A, an X-linked disorder with hemarthroses and deep bleeding, not mucocutaneous bleeding with abnormal ristocetin cofactor activity.",
      "Glycoprotein IIb/IIIa deficiency causes Glanzmann thrombasthenia, which impairs platelet aggregation but has normal ristocetin cofactor and von Willebrand factor.",
      "ADAMTS13 deficiency causes thrombotic thrombocytopenic purpura with thrombocytopenia and microangiopathic hemolysis, not lifelong mucosal bleeding with normal platelets.",
      "Correct: a quantitative or qualitative von Willebrand factor defect impairs platelet adhesion and lowers factor VIII, producing mucocutaneous bleeding with decreased ristocetin cofactor activity.",
      "Vitamin K deficiency prolongs the prothrombin time and is acquired, not a lifelong familial mucocutaneous bleeding disorder with a normal PT."
    ]
  },
  {
    "id": "s1-0205",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Pathology",
    "topic": "Polycythemia vera",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 61-year-old man reports intense generalized itching after hot showers, headaches, blurred vision, and a burning redness of his hands. He has facial plethora and a palpable spleen. He had a recent unprovoked deep vein thrombosis.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 20.5 g/dL | 13.5-17.5 |\n| Hematocrit | 62% | 41-53 |\n| Serum erythropoietin | low | normal |\n| JAK2 V617F mutation | positive | negative |",
    "lead": "Which best explains his condition?",
    "options": [
      "Appropriately increased erythropoietin from chronic hypoxemia",
      "Paraneoplastic erythropoietin secretion from a renal cell carcinoma",
      "Relative erythrocytosis from plasma volume contraction",
      "Reactive erythrocytosis from a right-to-left cardiac shunt",
      "A JAK2 mutation driving erythropoietin-independent clonal myeloproliferation"
    ],
    "answer": 4,
    "exp": "Elevated hemoglobin and hematocrit with aquagenic pruritus, erythromelalgia, splenomegaly, thrombosis, and a low erythropoietin with a JAK2 V617F mutation indicate polycythemia vera. The JAK2 mutation causes constitutive tyrosine kinase signaling, so the erythroid clone proliferates independent of erythropoietin, which is suppressed by feedback. Increased blood viscosity and platelet dysfunction predispose to thrombosis, and treatment centers on phlebotomy and aspirin.",
    "why": [
      "Chronic hypoxemia raises erythropoietin, but this patient's erythropoietin is low, indicating a primary marrow process.",
      "An erythropoietin-secreting renal cell carcinoma would raise erythropoietin, not suppress it as seen here.",
      "Relative erythrocytosis from volume contraction does not cause splenomegaly, a JAK2 mutation, or a truly elevated red cell mass.",
      "A right-to-left shunt causes hypoxemia with elevated erythropoietin, not the low erythropoietin and JAK2 mutation of polycythemia vera.",
      "Correct: a JAK2 V617F mutation drives erythropoietin-independent clonal erythroid proliferation, causing polycythemia vera with a low erythropoietin, pruritus, and thrombosis."
    ]
  },
  {
    "id": "s1-0206",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Pathology",
    "topic": "Glioblastoma multiforme",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 62-year-old man has several weeks of progressively worsening headaches that are worst in the morning, new left-sided weakness, and a first-ever generalized seizure. He is afebrile with no history of trauma.\n\n**[IMAGE: contrast-enhanced brain MRI showing a large irregular ring-enhancing mass with central necrosis crossing the corpus callosum to involve both hemispheres]**",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Glioblastoma with pseudopalisading necrosis and microvascular proliferation",
      "Meningioma arising from arachnoid cap cells",
      "Vestibular schwannoma",
      "Oligodendroglioma with a fried-egg appearance",
      "Prolactin-secreting pituitary adenoma"
    ],
    "answer": 0,
    "exp": "A rapidly progressive focal deficit, morning headaches from raised intracranial pressure, and seizures in an older adult with a necrotic, ring-enhancing mass crossing the corpus callosum (\"butterfly glioma\") indicate glioblastoma, the most common malignant primary brain tumor in adults. Histology shows pseudopalisading necrosis and microvascular proliferation, and prognosis is poor despite treatment.",
    "why": [
      "Correct: a butterfly ring-enhancing mass crossing the corpus callosum with pseudopalisading necrosis and microvascular proliferation is characteristic of glioblastoma.",
      "Meningiomas are extra-axial dural-based masses that are usually benign and do not cross the corpus callosum with central necrosis.",
      "A vestibular schwannoma arises at the cerebellopontine angle causing hearing loss, not a necrotic hemispheric mass with seizures.",
      "Oligodendroglioma is typically a slower-growing calcified frontal tumor and does not usually present as a necrotic butterfly lesion.",
      "A prolactinoma is a sellar tumor causing galactorrhea and visual field loss, not a ring-enhancing hemispheric mass."
    ]
  },
  {
    "id": "s1-0207",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Psychiatry",
    "topic": "Alcohol withdrawal and delirium tremens",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 54-year-old man admitted two days ago for a hip fracture becomes tremulous, agitated, and disoriented. He is tachycardic, hypertensive, febrile, and profusely diaphoretic, and he reports seeing insects crawling on the walls. His family notes he drinks heavily every day, and he has had no alcohol since admission.",
    "lead": "Which best explains this presentation?",
    "options": [
      "Wernicke encephalopathy from thiamine deficiency",
      "Delirium tremens from central nervous system hyperexcitability after alcohol cessation",
      "Acute alcohol intoxication",
      "Hepatic encephalopathy from hyperammonemia",
      "Serotonin syndrome from a drug interaction"
    ],
    "answer": 1,
    "exp": "Autonomic hyperactivity (tachycardia, hypertension, fever, diaphoresis), tremor, agitation, disorientation, and hallucinations developing about 48-72 hours after the last drink in a heavy daily drinker indicate delirium tremens. Chronic alcohol enhances inhibitory GABA tone and suppresses excitatory glutamate signaling; abrupt cessation removes this inhibition, producing dangerous CNS hyperexcitability. Benzodiazepines are the treatment of choice.",
    "why": [
      "Wernicke encephalopathy causes confusion, ophthalmoplegia, and ataxia without the florid autonomic instability and hallucinations of delirium tremens.",
      "Correct: abrupt alcohol cessation removes chronic GABA enhancement and glutamate suppression, producing the autonomic hyperactivity, tremor, and hallucinations of delirium tremens.",
      "Acute intoxication causes sedation and disinhibition, not the hyperadrenergic withdrawal state seen two days after the last drink.",
      "Hepatic encephalopathy causes asterixis and somnolence with elevated ammonia, not a hyperadrenergic tremulous delirium timed to alcohol cessation.",
      "Serotonin syndrome follows serotonergic drugs and features clonus and hyperreflexia, not withdrawal timed to stopping alcohol."
    ]
  },
  {
    "id": "s1-0208",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Psychiatry",
    "topic": "Borderline personality disorder",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 24-year-old woman is seen after a superficial wrist-cutting episode following a breakup. She describes a pattern of intense, unstable relationships in which she alternately idealizes and then devalues partners, a chronic sense of emptiness, frantic efforts to avoid being abandoned, impulsive spending and substance use, and recurrent self-harm. Her sense of who she is shifts frequently.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Histrionic personality disorder",
      "Narcissistic personality disorder",
      "Borderline personality disorder",
      "Antisocial personality disorder",
      "Bipolar II disorder"
    ],
    "answer": 2,
    "exp": "A pervasive pattern of unstable relationships with splitting (idealization and devaluation), identity disturbance, chronic emptiness, frantic efforts to avoid abandonment, impulsivity, and recurrent self-harm defines borderline personality disorder. It is a Cluster B personality disorder; dialectical behavior therapy is the treatment with the best evidence.",
    "why": [
      "Histrionic personality disorder features excessive attention-seeking and shallow, shifting emotions, not self-harm with abandonment fears and splitting.",
      "Narcissistic personality disorder centers on grandiosity and a need for admiration, without the self-harm and identity disturbance seen here.",
      "Correct: unstable relationships with splitting, identity disturbance, chronic emptiness, abandonment fears, impulsivity, and self-harm define borderline personality disorder.",
      "Antisocial personality disorder involves disregard for and violation of others' rights, not self-directed harm and abandonment sensitivity.",
      "Bipolar II disorder features discrete hypomanic and depressive episodes lasting days, not a chronic pattern of unstable relationships and self-image."
    ]
  },
  {
    "id": "s1-0209",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Giant cell (temporal) arteritis",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 74-year-old woman reports a new, persistent right-sided temporal headache with scalp tenderness when she combs her hair and jaw pain that develops while chewing. This morning she had a brief episode of painless vision loss in the right eye that resolved. She also has several weeks of shoulder and hip girdle stiffness.\n\n| Test | Value | Reference |\n|---|---|---|\n| Erythrocyte sedimentation rate | 96 mm/hr | 0-30 |\n| C-reactive protein | markedly elevated | < 5 |\n| Hemoglobin | 10.8 g/dL (normocytic) | 12-16 |",
    "lead": "Which is the most appropriate next step?",
    "options": [
      "Schedule an outpatient temporal artery biopsy and withhold all treatment until the result returns",
      "Obtain brain MRI before initiating any therapy",
      "Prescribe low-dose ibuprofen and arrange routine follow-up",
      "Start high-dose glucocorticoids immediately, then obtain a temporal artery biopsy",
      "Perform urgent carotid endarterectomy"
    ],
    "answer": 3,
    "exp": "A new temporal headache, scalp tenderness, jaw claudication, transient monocular vision loss, polymyalgia symptoms, and a very high ESR and CRP in an older woman indicate giant cell arteritis. Because untreated disease can cause sudden, permanent blindness from anterior ischemic optic neuropathy, high-dose glucocorticoids must be started immediately on clinical suspicion; biopsy can be obtained afterward, since arterial inflammation persists for days despite steroids.",
    "why": [
      "Delaying treatment for biopsy risks irreversible blindness; steroids should not be withheld while awaiting the procedure.",
      "Brain MRI does not diagnose giant cell arteritis and delaying steroids for imaging risks permanent vision loss.",
      "NSAIDs with routine follow-up are inadequate for a vision-threatening large-vessel vasculitis.",
      "Correct: giant cell arteritis threatens vision, so high-dose glucocorticoids are started immediately on suspicion and biopsy is obtained afterward.",
      "Carotid endarterectomy treats carotid stenosis, not the inflammatory arteritis causing this presentation."
    ]
  },
  {
    "id": "s1-0210",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Ewing sarcoma",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 12-year-old boy has several weeks of pain and swelling of the mid-thigh, low-grade fever, and mild weight loss, and an elevated white cell count initially raised concern for infection. A biopsy shows sheets of small round blue cells that stain for CD99.\n\n**[IMAGE: radiograph of the femoral diaphysis showing a lytic lesion with a multilayered \"onion-skin\" periosteal reaction]**",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Osteosarcoma with a sunburst pattern and Codman triangle",
      "Osteochondroma",
      "Giant cell tumor of bone",
      "Osteoid osteoma",
      "Ewing sarcoma with a t(11;22) translocation"
    ],
    "answer": 4,
    "exp": "A diaphyseal lytic lesion with an onion-skin periosteal reaction in a child, systemic symptoms mimicking infection, and small round blue cells expressing CD99 indicate Ewing sarcoma. It is driven by the t(11;22)(q24;q12) translocation producing the EWSR1-FLI1 fusion oncoprotein. It classically arises in the diaphysis of long bones or the pelvis in children and adolescents.",
    "why": [
      "Osteosarcoma arises at the metaphysis with a sunburst pattern and Codman triangle and produces osteoid, not small round blue cells with an onion-skin reaction.",
      "Osteochondroma is a benign cartilage-capped bony outgrowth, not a destructive lytic diaphyseal lesion with systemic symptoms.",
      "Giant cell tumor is an epiphyseal lesion in young adults with multinucleated giant cells, not a small round blue cell diaphyseal tumor of childhood.",
      "Osteoid osteoma is a small benign lesion causing night pain relieved by NSAIDs, without an aggressive onion-skin appearance.",
      "Correct: a diaphyseal onion-skin lesion with CD99-positive small round blue cells and a t(11;22) EWSR1-FLI1 translocation defines Ewing sarcoma."
    ]
  },
  {
    "id": "s1-0211",
    "system": "Cardiovascular",
    "discipline": "Physiology",
    "topic": "Atrial fibrillation",
    "difficulty": "moderate",
    "anchor": "ecg",
    "vignette": "A 72-year-old man with long-standing hypertension reports palpitations and mild breathlessness. His pulse is irregular in both rate and rhythm. He is counseled about the increased risk of embolic stroke from clot forming in the left atrial appendage.\n\n**[ECG: irregularly irregular RR intervals with no discrete P waves and a fibrillatory baseline]**",
    "lead": "Which best explains his rhythm?",
    "options": [
      "Disorganized atrial electrical activity with an irregularly irregular ventricular response and loss of the atrial kick",
      "A reentrant circuit using an accessory pathway",
      "Appropriate sinus tachycardia from increased sympathetic tone",
      "Complete dissociation of regular atrial and ventricular rhythms",
      "Isolated premature ventricular complexes"
    ],
    "answer": 0,
    "exp": "An irregularly irregular rhythm with absent P waves and a fibrillatory baseline is atrial fibrillation. Chaotic, disorganized atrial electrical activity produces an irregular ventricular response and loss of the coordinated atrial contribution to filling (the atrial kick). Stasis in the fibrillating left atrial appendage predisposes to thrombus and embolic stroke, so anticoagulation is guided by stroke-risk scores.",
    "why": [
      "Correct: disorganized atrial electrical activity with absent P waves gives an irregularly irregular ventricular response and loss of the atrial kick, defining atrial fibrillation.",
      "An accessory-pathway reentrant circuit produces a regular tachycardia, not an irregularly irregular rhythm with no P waves.",
      "Sinus tachycardia is a regular rhythm with normal P waves, unlike this irregular P-wave-absent rhythm.",
      "Complete atrioventricular dissociation shows regular independent atrial and ventricular rates, not an irregularly irregular ventricular response.",
      "Isolated premature ventricular complexes are occasional early wide beats on an otherwise organized rhythm, not sustained irregular fibrillation."
    ]
  },
  {
    "id": "s1-0212",
    "system": "Cardiovascular",
    "discipline": "Pathophysiology",
    "topic": "Cardiac tamponade",
    "difficulty": "hard",
    "anchor": "ecg",
    "vignette": "A 58-year-old man with metastatic lung cancer becomes acutely dyspneic and lightheaded. His blood pressure is 84/62 mm Hg, heart rate 122/min, and jugular venous pressure is markedly elevated. Heart sounds are distant, and his systolic pressure falls by 18 mm Hg during inspiration. His lungs are clear.\n\n**[ECG: sinus tachycardia with low-voltage QRS complexes and beat-to-beat alternation in QRS amplitude (electrical alternans)]**",
    "lead": "Which best explains his hemodynamic compromise?",
    "options": [
      "Acute left ventricular pump failure from a large myocardial infarction",
      "Pericardial fluid raising intrapericardial pressure and impairing diastolic filling with equalization of chamber pressures",
      "Massive pulmonary embolism obstructing right ventricular outflow",
      "Tension pneumothorax shifting the mediastinum",
      "Acute severe mitral regurgitation flooding the lungs"
    ],
    "answer": 1,
    "exp": "Hypotension, elevated jugular venous pressure, and muffled heart sounds (Beck triad) with an exaggerated inspiratory fall in systolic pressure (pulsus paradoxus) and electrical alternans with low voltage indicate cardiac tamponade, here from a malignant effusion. Rising intrapericardial pressure compresses the chambers, impairing diastolic filling and equalizing diastolic pressures; the swinging heart in fluid produces electrical alternans. Emergent pericardiocentesis is required.",
    "why": [
      "Left ventricular pump failure from infarction typically causes pulmonary congestion, not clear lungs with muffled sounds, pulsus paradoxus, and electrical alternans.",
      "Correct: pericardial fluid raises intrapericardial pressure, impairing diastolic filling and equalizing chamber pressures, producing Beck triad, pulsus paradoxus, and electrical alternans.",
      "Massive pulmonary embolism causes acute right heart strain and hypoxemia but not muffled heart sounds with electrical alternans from a pericardial effusion.",
      "Tension pneumothorax causes absent breath sounds and tracheal deviation with clear evidence on the affected side, not distant heart sounds with electrical alternans.",
      "Acute severe mitral regurgitation produces pulmonary edema and a loud murmur, not the clear lungs and effusion physiology described."
    ]
  },
  {
    "id": "s1-0213",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Renal cell carcinoma",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 63-year-old man who has smoked for decades reports painless blood in his urine, a dull left flank ache, and 6 kg of unintended weight loss. Examination reveals a palpable left flank mass, and he has a new left-sided varicocele that does not empty when he lies down.\n\n**[IMAGE: contrast CT of the abdomen showing a large heterogeneously enhancing solid mass in the upper pole of the left kidney with tumor extending into the left renal vein]**",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Transitional cell carcinoma of the renal pelvis",
      "Angiomyolipoma",
      "Clear cell renal cell carcinoma arising from proximal tubular epithelium",
      "Wilms tumor (nephroblastoma)",
      "Renal oncocytoma"
    ],
    "answer": 2,
    "exp": "The classic triad of flank pain, hematuria, and a palpable mass, with weight loss, a solid enhancing renal mass invading the renal vein, and a new left varicocele (from left renal vein or gonadal vein obstruction) indicates renal cell carcinoma. The most common subtype is clear cell carcinoma, which arises from proximal tubular epithelium and is associated with von Hippel-Lindau gene inactivation and cigarette smoking, and characteristically invades the renal vein.",
    "why": [
      "Transitional cell carcinoma of the renal pelvis typically causes painless hematuria but appears as a filling defect in the collecting system, not a solid parenchymal mass invading the renal vein.",
      "Angiomyolipoma is a benign fat-containing tumor (often in tuberous sclerosis), not a heterogeneous solid mass with renal vein invasion and weight loss.",
      "Correct: a solid enhancing renal mass with renal vein invasion, the classic triad, and a new varicocele indicate clear cell renal cell carcinoma from proximal tubular epithelium.",
      "Wilms tumor is a childhood renal tumor, not a mass in a 63-year-old smoker.",
      "Renal oncocytoma is a benign tumor with a central scar and does not invade the renal vein or cause this constitutional and paraneoplastic picture."
    ]
  },
  {
    "id": "s1-0214",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Small cell lung carcinoma (Lambert-Eaton syndrome)",
    "difficulty": "hard",
    "anchor": null,
    "vignette": "A 66-year-old man who has smoked heavily for 45 years reports several weeks of proximal muscle weakness that makes rising from a chair difficult, along with dry mouth. He notes that his strength briefly improves after repeated effort. Chest imaging shows a large central hilar mass, and antibodies against presynaptic voltage-gated calcium channels are detected.",
    "lead": "Which primary tumor is most likely responsible?",
    "options": [
      "Squamous cell carcinoma of the lung",
      "Pulmonary adenocarcinoma",
      "Bronchial carcinoid tumor",
      "Small cell (oat cell) carcinoma of neuroendocrine origin",
      "Large cell carcinoma"
    ],
    "answer": 3,
    "exp": "Proximal weakness that improves with repeated use, autonomic features such as dry mouth, and antibodies against presynaptic voltage-gated calcium channels indicate Lambert-Eaton myasthenic syndrome, a paraneoplastic disorder most often caused by small cell lung carcinoma. This central neuroendocrine tumor, strongly linked to smoking, secretes hormones and provokes paraneoplastic syndromes (Lambert-Eaton, SIADH, ectopic ACTH). Recognizing the antibody points to the underlying oat cell tumor.",
    "why": [
      "Squamous cell carcinoma is centrally located and associated with hypercalcemia from PTHrP, not Lambert-Eaton syndrome with calcium-channel antibodies.",
      "Adenocarcinoma is usually peripheral and is not the classic cause of Lambert-Eaton myasthenic syndrome.",
      "Bronchial carcinoid can cause carcinoid syndrome with flushing and diarrhea, not calcium-channel antibody-mediated weakness.",
      "Correct: small cell (oat cell) neuroendocrine carcinoma is the classic cause of Lambert-Eaton syndrome from antibodies against presynaptic voltage-gated calcium channels.",
      "Large cell carcinoma is an undifferentiated peripheral tumor and is not the typical cause of Lambert-Eaton syndrome."
    ]
  },
  {
    "id": "s1-0215",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Nephrolithiasis (calcium oxalate stones)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 44-year-old man presents with sudden, severe, colicky left flank pain that radiates to the groin and comes in waves. He is restless and unable to find a comfortable position, and he reports nausea and pink-tinged urine. He is afebrile. Urinalysis shows gross hematuria and envelope-shaped crystals, and a noncontrast CT shows a radiopaque stone at the ureterovesical junction.",
    "lead": "Which is the most likely composition of this stone?",
    "options": [
      "Struvite (magnesium ammonium phosphate) from urease-producing bacteria",
      "Uric acid",
      "Cystine",
      "Pure calcium phosphate from distal renal tubular acidosis",
      "Calcium oxalate"
    ],
    "answer": 4,
    "exp": "Acute unilateral colicky flank pain radiating to the groin with a restless patient, hematuria, and a radiopaque stone with envelope-shaped (dumbbell/octahedral) crystals indicates a calcium oxalate stone, the most common type of kidney stone. Calcium oxalate stones are radiopaque and form in relatively acidic or normal urine, and low fluid intake and hypercalciuria are common risk factors.",
    "why": [
      "Struvite stones form in alkaline urine from urease-producing organisms and create large staghorn calculi, not the small envelope-shaped crystals seen here.",
      "Uric acid stones are radiolucent on plain films and form in acidic urine as rhombic crystals, not radiopaque envelope-shaped crystals.",
      "Cystine stones are rare, occur in cystinuria, and form hexagonal crystals, not the envelope-shaped calcium oxalate crystals described.",
      "Calcium phosphate stones form in alkaline urine and appear as wedge-shaped crystals, not the octahedral envelope crystals of oxalate.",
      "Correct: envelope-shaped crystals with a radiopaque stone indicate calcium oxalate, the most common stone composition."
    ]
  },
  {
    "id": "s1-0216",
    "system": "Gastrointestinal",
    "discipline": "Physiology",
    "topic": "Achalasia",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 47-year-old woman reports two years of progressively worsening difficulty swallowing both solids and liquids from the start, along with regurgitation of undigested food and gradual weight loss. She sometimes has chest discomfort after eating.\n\n**[IMAGE: barium esophagram showing a dilated esophageal body tapering to a smooth \"bird-beak\" narrowing at the gastroesophageal junction]**",
    "lead": "Which best explains her condition?",
    "options": [
      "Loss of inhibitory ganglion cells in the myenteric plexus causing failed lower esophageal sphincter relaxation and aperistalsis",
      "A mechanically obstructing distal esophageal adenocarcinoma",
      "Autoimmune destruction of the esophageal squamous epithelium",
      "A thin mucosal web in the upper esophagus",
      "Uncoordinated high-amplitude contractions of the esophageal body"
    ],
    "answer": 0,
    "exp": "Dysphagia to solids and liquids simultaneously from the outset, regurgitation, weight loss, and a dilated esophagus with a bird-beak tapering at the gastroesophageal junction indicate achalasia. Degeneration of inhibitory (nitric oxide and VIP) ganglion cells in the myenteric (Auerbach) plexus prevents relaxation of the lower esophageal sphincter and abolishes peristalsis. Manometry confirms incomplete sphincter relaxation with aperistalsis.",
    "why": [
      "Correct: loss of inhibitory myenteric ganglion cells prevents lower esophageal sphincter relaxation and causes aperistalsis, producing achalasia with a bird-beak esophagram.",
      "A distal adenocarcinoma can cause pseudoachalasia but typically presents with rapidly progressive dysphagia to solids in an older patient with a mass, not this classic primary picture.",
      "Autoimmune destruction of squamous epithelium is not the mechanism of achalasia, which is a neuromuscular motility disorder.",
      "An esophageal web causes intermittent dysphagia to solids in the upper esophagus, not simultaneous solid-and-liquid dysphagia with a bird-beak junction.",
      "Uncoordinated high-amplitude contractions describe diffuse esophageal spasm (a corkscrew esophagus), not the aperistaltic dilated esophagus of achalasia."
    ]
  },
  {
    "id": "s1-0217",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Hepatocellular carcinoma",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 60-year-old man with long-standing cirrhosis from chronic hepatitis C develops worsening abdominal distension, right upper quadrant pain, and weight loss over two months. He now has new bloody ascites. Imaging shows a 5 cm arterially enhancing mass in the right hepatic lobe.\n\n| Test | Value | Reference |\n|---|---|---|\n| Alpha-fetoprotein | 1,850 ng/mL | < 10 |\n| Platelet count | 78,000/mcL | 150,000-400,000 |\n| INR | 1.6 | 0.9-1.1 |",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Cholangiocarcinoma",
      "Hepatocellular carcinoma arising in cirrhosis",
      "Cavernous hepatic hemangioma",
      "Focal nodular hyperplasia",
      "Metastatic colon adenocarcinoma"
    ],
    "answer": 1,
    "exp": "A new arterially enhancing hepatic mass with a markedly elevated alpha-fetoprotein arising in a cirrhotic liver indicates hepatocellular carcinoma. Chronic hepatitis C, hepatitis B, alcohol, and aflatoxin cause cirrhosis, the main risk state, and tumors arise from regenerating hepatocytes. Decompensation, right upper quadrant pain, and bloody ascites are characteristic, and surveillance imaging plus alpha-fetoprotein is used in high-risk patients.",
    "why": [
      "Cholangiocarcinoma arises from bile duct epithelium, is typically not associated with a markedly elevated alpha-fetoprotein, and is linked to primary sclerosing cholangitis and liver flukes.",
      "Correct: an arterially enhancing hepatic mass with markedly elevated alpha-fetoprotein in a cirrhotic liver is hepatocellular carcinoma.",
      "A cavernous hemangioma is a benign vascular lesion with characteristic peripheral nodular enhancement and does not raise alpha-fetoprotein or cause bloody ascites.",
      "Focal nodular hyperplasia is a benign lesion with a central scar in young women, not a mass with elevated alpha-fetoprotein in a cirrhotic patient.",
      "Metastatic colon cancer produces multiple hepatic lesions and raises carcinoembryonic antigen, not alpha-fetoprotein, and usually arises without background cirrhosis."
    ]
  },
  {
    "id": "s1-0218",
    "system": "Reproductive & Endocrine",
    "discipline": "Physiology",
    "topic": "Central diabetes insipidus",
    "difficulty": "hard",
    "anchor": "table",
    "vignette": "A 34-year-old man reports several weeks of constant intense thirst and passing large volumes of dilute urine, including waking multiple times at night. He recently had a head injury. His serum sodium is 148 mEq/L. A water deprivation test is performed, followed by administration of desmopressin.\n\n| Phase | Urine osmolality |\n|---|---|\n| Baseline | 110 mOsm/kg |\n| After water deprivation | 135 mOsm/kg |\n| After desmopressin | 420 mOsm/kg |",
    "lead": "Which best explains his polyuria?",
    "options": [
      "Osmotic diuresis from hyperglycemia",
      "Primary polydipsia from excessive water intake",
      "Deficient antidiuretic hormone secretion from the posterior pituitary",
      "Renal collecting duct resistance to antidiuretic hormone",
      "Excess antidiuretic hormone causing water retention"
    ],
    "answer": 2,
    "exp": "Polyuria with dilute urine, hypernatremia, and urine that fails to concentrate with water deprivation but then rises substantially (more than 50%) after desmopressin indicates central diabetes insipidus. Deficient antidiuretic hormone (from hypothalamic-pituitary injury, here posttraumatic) prevents water reabsorption until exogenous desmopressin is given, at which point the intact kidney concentrates urine. This response distinguishes it from nephrogenic diabetes insipidus, in which the kidney cannot respond.",
    "why": [
      "Osmotic diuresis from hyperglycemia produces a high urine osmolality with glucosuria, not persistently dilute urine that responds to desmopressin.",
      "Primary polydipsia causes a low serum sodium from water overload and partially concentrates with water deprivation, unlike this hypernatremic patient who responds to desmopressin.",
      "Correct: deficient antidiuretic hormone (central diabetes insipidus) leaves urine dilute during water deprivation but responsive to desmopressin, consistent with the posttraumatic history.",
      "Renal resistance to antidiuretic hormone (nephrogenic diabetes insipidus) would show little rise in urine osmolality after desmopressin, unlike the marked response here.",
      "Excess antidiuretic hormone (SIADH) causes concentrated urine and hyponatremia, the opposite of this dilute urine with hypernatremia."
    ]
  },
  {
    "id": "s1-0219",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Uterine leiomyoma",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 41-year-old woman reports increasingly heavy, prolonged menstrual periods, pelvic pressure, and urinary frequency. On examination the uterus is enlarged, firm, irregular, and nontender, with several bulging nodular contours. She is otherwise well, and her symptoms tend to worsen and the uterus enlarges during pregnancy.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Endometrial adenocarcinoma",
      "Adenomyosis",
      "Ovarian carcinoma",
      "Uterine leiomyoma",
      "Endometrial hyperplasia"
    ],
    "answer": 3,
    "exp": "An enlarged, firm, irregular, nontender uterus with nodular contours causing menorrhagia and bulk symptoms in a premenopausal woman indicates uterine leiomyomas (fibroids), the most common benign tumors of the female genital tract. These benign smooth muscle tumors are estrogen and progesterone responsive, so they grow during the reproductive years and pregnancy and regress after menopause.",
    "why": [
      "Endometrial adenocarcinoma typically causes postmenopausal bleeding and is not a firm, irregular, nodular enlarged uterus that grows in pregnancy.",
      "Adenomyosis causes a diffusely enlarged, boggy, tender uterus with heavy painful menses, not a firm irregular nodular uterus.",
      "Ovarian carcinoma presents as an adnexal mass with bloating and often ascites, not an irregularly enlarged uterus.",
      "Correct: a firm, irregular, nodular, nontender enlarged uterus with menorrhagia and bulk symptoms that grows with estrogen indicates uterine leiomyomas.",
      "Endometrial hyperplasia causes abnormal bleeding from a thickened endometrium but does not produce a nodular, irregularly enlarged uterus."
    ]
  },
  {
    "id": "s1-0220",
    "system": "Multisystem",
    "discipline": "Pathology",
    "topic": "Disseminated intravascular coagulation",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 40-year-old woman with gram-negative septic shock develops oozing from every intravenous puncture site and gum bleeding, together with dusky, mottled fingertips suggesting microvascular thrombosis. A peripheral smear shows fragmented red cells.\n\n| Test | Value | Reference |\n|---|---|---|\n| Platelet count | 38,000/mcL | 150,000-400,000 |\n| Prothrombin time | prolonged | 11-13.5 |\n| aPTT | prolonged | 25-35 |\n| Fibrinogen | low | 200-400 |\n| D-dimer | markedly elevated | < 0.5 |",
    "lead": "Which best explains these findings?",
    "options": [
      "Autoimmune platelet destruction alone",
      "Deficiency of the metalloprotease ADAMTS13",
      "Antibodies to platelet factor 4-heparin complexes",
      "Isolated vitamin K deficiency",
      "Systemic activation of coagulation consuming platelets and clotting factors"
    ],
    "answer": 4,
    "exp": "Simultaneous diffuse bleeding and microvascular thrombosis with thrombocytopenia, prolonged PT and aPTT, low fibrinogen, elevated D-dimer, and schistocytes indicate disseminated intravascular coagulation. A trigger such as sepsis causes widespread activation of coagulation with microthrombi that consume platelets and clotting factors and trigger secondary fibrinolysis, producing both thrombosis and bleeding. Treatment targets the underlying cause with supportive blood product replacement.",
    "why": [
      "Immune thrombocytopenia causes isolated low platelets with normal coagulation times and fibrinogen, not the consumptive picture with prolonged PT/aPTT and low fibrinogen.",
      "ADAMTS13 deficiency causes thrombotic thrombocytopenic purpura, which has a normal PT, aPTT, and fibrinogen despite thrombocytopenia and schistocytes.",
      "Antibodies to platelet factor 4-heparin complexes cause heparin-induced thrombocytopenia with thrombosis, not consumption of fibrinogen and prolonged clotting times with bleeding.",
      "Vitamin K deficiency prolongs the PT and aPTT but does not consume platelets or fibrinogen or produce schistocytes.",
      "Correct: systemic activation of coagulation consumes platelets and clotting factors with secondary fibrinolysis, producing the bleeding, thrombosis, and abnormal studies of disseminated intravascular coagulation."
    ]
  },
  {
    "id": "s1-0221",
    "system": "Multisystem",
    "discipline": "Pathology",
    "topic": "Tumor lysis syndrome",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 9-year-old boy with a newly diagnosed bulky T-cell leukemia is admitted and started on induction chemotherapy. Two days later he becomes lethargic with muscle cramps, his urine output falls, and a cardiac monitor shows peaked T waves.\n\n| Test | Value | Reference |\n|---|---|---|\n| Potassium | 6.4 mEq/L | 3.5-5.0 |\n| Phosphate | 8.2 mg/dL | 2.5-4.5 |\n| Uric acid | 14 mg/dL | 3.5-7.2 |\n| Calcium | 6.8 mg/dL | 8.5-10.5 |\n| Creatinine | 2.4 mg/dL | 0.3-0.7 |",
    "lead": "Which best explains these laboratory abnormalities?",
    "options": [
      "Contrast-induced nephropathy",
      "Hemolytic uremic syndrome",
      "Rhabdomyolysis from prolonged immobilization",
      "Acute interstitial nephritis from a drug reaction",
      "Massive release of intracellular contents from lysed tumor cells"
    ],
    "answer": 4,
    "exp": "The combination of hyperkalemia, hyperphosphatemia, hyperuricemia, and hypocalcemia with acute kidney injury shortly after starting chemotherapy for a bulky, rapidly proliferating malignancy indicates tumor lysis syndrome. Massive cell death releases intracellular potassium, phosphate, and nucleic acids (metabolized to uric acid); phosphate binds calcium causing hypocalcemia, and uric acid and calcium phosphate precipitate in tubules causing renal injury. Prevention uses hydration and allopurinol or rasburicase.",
    "why": [
      "Contrast nephropathy causes a rise in creatinine but not the tetrad of hyperkalemia, hyperphosphatemia, hyperuricemia, and hypocalcemia after chemotherapy.",
      "Hemolytic uremic syndrome causes microangiopathic anemia, thrombocytopenia, and renal failure, not this specific electrolyte tetrad from cell lysis.",
      "Rhabdomyolysis releases potassium and phosphate but also markedly elevates creatine kinase and follows muscle injury, not chemotherapy for leukemia.",
      "Acute interstitial nephritis causes kidney injury with eosinophils and a rash, not the massive uric acid and phosphate release seen here.",
      "Correct: massive lysis of tumor cells releases potassium, phosphate, and uric acid and lowers calcium, causing tumor lysis syndrome with acute kidney injury."
    ]
  },
  {
    "id": "s1-0222",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Epidemiology",
    "topic": "Selection bias (Berkson bias)",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "Investigators conduct a case-control study using only patients hospitalized on a single ward to examine whether a particular exposure is associated with a disease. They find a strong association, but critics point out that both the exposure and the disease independently increase the chance of being hospitalized, so the hospital sample does not represent the general population.",
    "lead": "Which type of bias is most directly illustrated?",
    "options": [
      "Selection bias",
      "Recall bias",
      "Lead-time bias",
      "Confounding",
      "Observer bias"
    ],
    "answer": 0,
    "exp": "When study subjects are chosen in a way that makes them unrepresentative of the target population, so that the sampling itself distorts the exposure-disease relationship, the result is selection bias. Using only hospitalized patients (Berkson bias) is a classic example, because factors that increase hospitalization skew the observed association. It is addressed through appropriate, representative sampling and control selection.",
    "why": [
      "Correct: choosing an unrepresentative hospitalized sample so that sampling distorts the association is selection bias (Berkson bias).",
      "Recall bias arises from differential accuracy of remembered exposures between groups, not from how subjects were selected.",
      "Lead-time bias applies to screening, where earlier detection appears to prolong survival without changing outcome.",
      "Confounding is distortion by a third variable associated with both exposure and outcome, not a problem of unrepresentative sampling.",
      "Observer bias arises when knowledge of exposure or outcome status influences measurement, not from the selection of the study sample."
    ]
  },
  {
    "id": "s1-0223",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Epidemiology",
    "topic": "Length-time bias",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A screening test for a cancer appears to improve survival, but analysts note that the screen preferentially detects slow-growing, indolent tumors that spend a long time in a detectable but asymptomatic phase, while fast-growing aggressive tumors tend to become symptomatic and be diagnosed between screening rounds.",
    "lead": "Which bias best explains the apparent survival benefit?",
    "options": [
      "Lead-time bias",
      "Length-time bias",
      "Selection bias",
      "Attrition bias",
      "Confounding"
    ],
    "answer": 1,
    "exp": "When screening disproportionately detects slowly progressive disease that has a long asymptomatic phase, the screened group appears to survive longer simply because indolent cancers are overrepresented, independent of any treatment effect. This is length-time bias. It differs from lead-time bias, in which earlier diagnosis lengthens apparent survival by moving the diagnosis date earlier without changing the time of death.",
    "why": [
      "Lead-time bias reflects earlier detection advancing the diagnosis date without changing outcome, not the preferential detection of slow-growing tumors.",
      "Correct: preferential detection of slowly progressive, indolent tumors with a long detectable phase overrepresents good-prognosis disease, which is length-time bias.",
      "Selection bias arises from unrepresentative sampling of subjects, not from the biology of which tumors are detected by screening.",
      "Attrition bias arises from differential dropout of participants during a study, not from the tumor growth rate detected at screening.",
      "Confounding is distortion by a third variable, not the overrepresentation of indolent tumors inherent to screening."
    ]
  },
  {
    "id": "s1-0224",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Emancipated minor consent",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 16-year-old patient comes to the clinic alone for evaluation of abdominal pain. She is legally married, lives independently with her spouse, and financially supports herself. She is alert and understands the proposed evaluation and treatment. Her parents are not present, and she asks that they not be contacted.",
    "lead": "Which is the most appropriate course of action?",
    "options": [
      "Require parental consent before any evaluation",
      "Contact her parents to obtain permission before treating",
      "Provide care because an emancipated minor may consent to her own treatment",
      "Defer all decisions to a court-appointed guardian",
      "Obtain consent from another adult relative"
    ],
    "answer": 2,
    "exp": "A minor who is married, self-supporting and living independently, in the military, or otherwise legally emancipated may consent to and refuse medical care as an adult would. Because this patient is married and financially independent, she is an emancipated minor and can provide her own informed consent, and parental notification is not required against her wishes.",
    "why": [
      "Requiring parental consent ignores that an emancipated minor has the legal authority to consent for herself.",
      "Contacting the parents against her wishes violates the autonomy and confidentiality of an emancipated minor.",
      "Correct: a married, self-supporting minor is emancipated and may consent to her own medical care without parental involvement.",
      "A court-appointed guardian is unnecessary because the emancipated minor can make her own decisions.",
      "Another adult relative has no authority to consent for an emancipated minor who can consent for herself."
    ]
  },
  {
    "id": "s1-0225",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Withdrawing versus withholding life-sustaining treatment",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 70-year-old man is on mechanical ventilation in the intensive care unit with an irreversible, terminal illness and no realistic chance of recovery. Before losing capacity he clearly and repeatedly stated, and documented, that he would not want to be kept alive on a ventilator in such a situation. His surrogate now asks that the ventilator be discontinued. A junior team member worries that stopping the ventilator is different from never having started it.",
    "lead": "Which is the most appropriate course of action?",
    "options": [
      "Continue the ventilator indefinitely because withdrawing support is equivalent to euthanasia",
      "Require a court order before discontinuing the ventilator",
      "Only refrain from adding new interventions but never withdraw the ventilator already in place",
      "Discontinue the ventilator in accordance with the patient's known wishes",
      "Ask a different family member to authorize continuing treatment"
    ],
    "answer": 3,
    "exp": "A patient with decision-making capacity, or through a valid prior expressed wish and surrogate, may refuse or discontinue any life-sustaining treatment, including mechanical ventilation. Ethically and legally, withdrawing an already-started treatment and withholding one that was never started are equivalent; honoring a clearly expressed refusal is respecting autonomy, not euthanasia. The team should discontinue the ventilator and provide comfort-focused care.",
    "why": [
      "Withdrawing unwanted life support that honors the patient's refusal is not euthanasia, which involves actively administering an agent to cause death.",
      "A court order is not required to honor a capacitated patient's clearly expressed and documented refusal conveyed through a surrogate.",
      "Withholding and withdrawing life-sustaining treatment are ethically and legally equivalent, so continuing an unwanted ventilator is not justified.",
      "Correct: the patient's clearly expressed prior wishes should be honored by discontinuing the ventilator, since withdrawing and withholding treatment are ethically equivalent.",
      "Seeking another family member to override the patient's documented wishes disregards his autonomy and the surrogate's proper role."
    ]
  },
  {
    "id": "s1-0226",
    "system": "Cardiovascular",
    "discipline": "Pathology",
    "topic": "Aortic dissection",
    "difficulty": "hard",
    "anchor": "image",
    "vignette": "A 61-year-old man with a long history of poorly controlled hypertension develops abrupt, severe, tearing chest pain that radiates through to his back. He is diaphoretic and anxious. Blood pressure is 178/104 mm Hg in the right arm but 138/82 mm Hg in the left arm, and a soft early diastolic murmur is heard at the left sternal border.\n\n**[IMAGE: contrast CT of the chest showing a widened mediastinum and an intimal flap dividing the ascending aorta into two lumens]**",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Aortic dissection",
      "Acute ST-elevation myocardial infarction",
      "Massive pulmonary embolism",
      "Esophageal rupture (Boerhaave syndrome)",
      "Acute pericarditis"
    ],
    "answer": 0,
    "exp": "Abrupt tearing chest pain radiating to the back, a blood-pressure differential between the arms, and a new murmur of aortic regurgitation in a hypertensive patient point to aortic dissection. Longstanding hypertension causes cystic medial degeneration, allowing an intimal tear through which blood creates a false lumen. CT showing an intimal flap and false lumen confirms the diagnosis.",
    "why": [
      "Correct: tearing pain to the back, an inter-arm pressure difference, aortic regurgitation, and an intimal flap on CT are classic for aortic dissection.",
      "Myocardial infarction causes pressure-like pain but not a blood-pressure differential between arms or an intimal flap on CT.",
      "Pulmonary embolism causes pleuritic pain and hypoxemia, not a widened mediastinum with an aortic intimal flap.",
      "Boerhaave syndrome follows forceful vomiting and produces mediastinitis and subcutaneous emphysema, not an aortic flap.",
      "Acute pericarditis produces positional, pleuritic pain with a friction rub and diffuse ST elevation, not tearing pain with an intimal flap."
    ]
  },
  {
    "id": "s1-0227",
    "system": "Cardiovascular",
    "discipline": "Pathology",
    "topic": "Mitral valve prolapse",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 24-year-old woman is evaluated for occasional palpitations and atypical chest discomfort. On auscultation there is a mid-systolic click followed by a late systolic murmur best heard at the apex. When she stands up from squatting, the click and murmur move earlier in systole and become more prominent.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Aortic stenosis",
      "Mitral valve prolapse",
      "Mitral stenosis",
      "Aortic regurgitation",
      "Tricuspid regurgitation"
    ],
    "answer": 1,
    "exp": "A mid-systolic click followed by a late systolic murmur that moves earlier in systole with maneuvers that decrease ventricular filling (standing, Valsalva) is characteristic of mitral valve prolapse. Myxomatous degeneration of the leaflets allows them to billow into the left atrium during systole. Reduced preload lets the valve prolapse sooner, shifting the click earlier.",
    "why": [
      "Aortic stenosis produces a crescendo-decrescendo systolic ejection murmur radiating to the carotids, not a mid-systolic click.",
      "Correct: a mid-systolic click with a late systolic murmur that moves earlier on standing indicates mitral valve prolapse from myxomatous leaflets.",
      "Mitral stenosis causes an opening snap and a diastolic rumble, not a systolic click.",
      "Aortic regurgitation produces an early diastolic decrescendo murmur, not a systolic click and murmur.",
      "Tricuspid regurgitation causes a holosystolic murmur that increases with inspiration, without a mid-systolic click."
    ]
  },
  {
    "id": "s1-0228",
    "system": "Cardiovascular",
    "discipline": "Pathology",
    "topic": "Peripheral artery disease",
    "difficulty": "easy",
    "anchor": "lab",
    "vignette": "A 68-year-old man with a 40-pack-year smoking history and diabetes reports aching, cramping pain in his left calf that reliably begins after walking two blocks and resolves with a few minutes of rest. His pedal pulses are diminished, and the skin over his lower leg is shiny and hairless.\n\n| Test | Value | Reference |\n|---|---|---|\n| Ankle-brachial index (left) | 0.6 | > 0.9 |\n| Ankle-brachial index (right) | 0.95 | > 0.9 |",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Deep vein thrombosis",
      "Lumbar spinal stenosis",
      "Peripheral artery disease from atherosclerosis",
      "Chronic venous insufficiency",
      "Ruptured popliteal (Baker) cyst"
    ],
    "answer": 2,
    "exp": "Reproducible calf pain with walking that is relieved by rest (intermittent claudication), diminished pulses, trophic skin changes, and a reduced ankle-brachial index indicate peripheral artery disease. Atherosclerotic narrowing limits blood flow to exercising muscle, producing ischemic pain that resolves once demand falls. An ABI below 0.9 confirms significant arterial obstruction.",
    "why": [
      "Deep vein thrombosis causes constant unilateral swelling and tenderness, not exertional pain relieved by rest with a low ABI.",
      "Neurogenic claudication from spinal stenosis is relieved by leaning forward, not by simply stopping, and does not lower the ABI.",
      "Correct: reproducible exertional calf pain relieved by rest with diminished pulses and a low ankle-brachial index is atherosclerotic peripheral artery disease.",
      "Chronic venous insufficiency causes edema, hyperpigmentation, and aching that worsens with standing, not exertional claudication with a low ABI.",
      "A ruptured Baker cyst causes acute calf swelling and pain mimicking DVT, not reproducible exertional claudication."
    ]
  },
  {
    "id": "s1-0229",
    "system": "Cardiovascular",
    "discipline": "Pathophysiology",
    "topic": "Vasospastic (Prinzmetal variant) angina",
    "difficulty": "moderate",
    "anchor": "ecg",
    "vignette": "A 42-year-old woman who smokes reports several episodes of chest pain occurring at rest, typically in the early morning hours, each lasting a few minutes and resolving spontaneously. During one episode in the emergency department her ECG is captured. Subsequent coronary angiography shows no fixed obstructive lesions, and troponin is normal.\n\n**[ECG: transient ST-segment elevation in the inferior leads that fully normalizes as the pain resolves]**",
    "lead": "Which mechanism best explains her presentation?",
    "options": [
      "Fixed atherosclerotic coronary stenosis",
      "Coronary embolism from a left atrial thrombus",
      "Aortic dissection extending into a coronary ostium",
      "Transient coronary artery vasospasm",
      "Viral myocarditis"
    ],
    "answer": 3,
    "exp": "Rest angina occurring in the early morning with transient ST-segment elevation that resolves, in a patient with normal coronary arteries, is Prinzmetal (variant) angina caused by transient coronary vasospasm. Focal smooth-muscle hyperreactivity abruptly reduces coronary flow, producing transmural ischemia and ST elevation without infarction. Smoking is a common trigger; calcium channel blockers are the treatment.",
    "why": [
      "A fixed atherosclerotic stenosis typically causes exertional angina with ST depression, not rest pain with transient ST elevation and normal arteries.",
      "Coronary embolism would cause sustained infarction with elevated troponin, not transient self-resolving ST changes.",
      "Aortic dissection produces tearing pain and a pressure differential, not brief self-limited episodes with normal angiography.",
      "Correct: transient rest angina with reversible ST elevation and angiographically normal coronaries indicates coronary vasospasm (variant angina).",
      "Myocarditis causes a more sustained illness with elevated troponin and diffuse ECG changes, not brief vasospastic episodes."
    ]
  },
  {
    "id": "s1-0230",
    "system": "Cardiovascular",
    "discipline": "Pathophysiology",
    "topic": "Constrictive pericarditis",
    "difficulty": "hard",
    "anchor": "image",
    "vignette": "A 57-year-old man who had tuberculosis years earlier develops progressive fatigue, abdominal swelling, and leg edema. His jugular venous pressure is markedly elevated and rises further with inspiration. On auscultation an early diastolic sound is heard after S2, and he has ascites and hepatomegaly. Lungs are clear.\n\n**[IMAGE: lateral chest CT showing a thickened, calcified pericardium encasing the heart]**",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Restrictive cardiomyopathy from amyloidosis",
      "Cardiac tamponade",
      "Right heart failure from cor pulmonale",
      "Tricuspid valve stenosis",
      "Constrictive pericarditis"
    ],
    "answer": 4,
    "exp": "Elevated JVP that rises with inspiration (Kussmaul sign), a pericardial knock, prominent right-sided congestion with clear lungs, and a calcified pericardium after tuberculosis indicate constrictive pericarditis. A rigid, scarred pericardium prevents normal diastolic filling, so ventricular volume is fixed and venous pressures rise. The knock reflects abrupt cessation of filling against the stiff pericardium.",
    "why": [
      "Amyloid restrictive cardiomyopathy can mimic constriction but shows thickened myocardium, not a calcified pericardium on imaging.",
      "Tamponade causes pulsus paradoxus with a small quiet heart and an absent y descent, not a calcified pericardium and knock.",
      "Cor pulmonale arises from chronic lung disease and pulmonary hypertension, not from a scarred calcified pericardium with clear lungs.",
      "Tricuspid stenosis produces a diastolic murmur and giant a waves, not a pericardial knock with pericardial calcification.",
      "Correct: Kussmaul sign, a pericardial knock, right-sided congestion, and a calcified pericardium after TB indicate constrictive pericarditis."
    ]
  },
  {
    "id": "s1-0231",
    "system": "Cardiovascular",
    "discipline": "Pathology",
    "topic": "Left atrial myxoma",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 48-year-old woman reports several months of fatigue, low-grade fevers, and weight loss, along with episodes of breathlessness that are worse when she lies in certain positions. She has had one transient episode of right arm weakness. On auscultation a low-pitched early diastolic sound is heard that varies with body position.\n\n**[IMAGE: transthoracic echocardiogram showing a mobile, pedunculated mass attached by a stalk to the interatrial septum near the fossa ovalis, prolapsing across the mitral valve in diastole]**",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Left atrial myxoma",
      "Left atrial appendage thrombus",
      "Infective endocarditis vegetation",
      "Papillary fibroelastoma of the aortic valve",
      "Metastatic carcinoma to the heart"
    ],
    "answer": 0,
    "exp": "Constitutional symptoms, positional dyspnea, embolic events, and a pedunculated mass attached to the fossa ovalis that prolapses across the mitral valve describe a left atrial myxoma, the most common primary cardiac tumor in adults. The gelatinous mass intermittently obstructs the mitral orifice (causing a 'tumor plop' and positional symptoms) and sheds emboli. IL-6 release explains the fever and weight loss.",
    "why": [
      "Correct: a pedunculated mass on the interatrial septum causing positional obstruction, emboli, and constitutional symptoms is a left atrial myxoma.",
      "Atrial thrombus usually forms in the appendage in the setting of atrial fibrillation and is not a pedunculated septal mass with a stalk.",
      "Endocarditis vegetations attach to valve leaflets and cause a regurgitant murmur, not a stalked septal mass.",
      "Papillary fibroelastoma is small and attaches to valve surfaces, not by a stalk to the fossa ovalis.",
      "Cardiac metastases typically involve the pericardium or myocardium diffusely, not as a single pedunculated atrial mass."
    ]
  },
  {
    "id": "s1-0232",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Chronic bronchitis (Reid index)",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 60-year-old man with a heavy smoking history reports a productive cough with sputum on most days for the past several years, present for more than three months in each of two consecutive years. He is overweight and mildly cyanotic, and has peripheral edema. Histology of his bronchi shows enlargement of the mucous glands relative to the bronchial wall thickness.",
    "lead": "Which finding best defines his condition?",
    "options": [
      "Permanent destruction of alveolar walls distal to terminal bronchioles",
      "Chronic productive cough for at least 3 months in 2 consecutive years with bronchial mucous gland hyperplasia (increased Reid index)",
      "Reversible bronchospasm with eosinophilic airway inflammation",
      "Permanent bronchial dilation with pooling of purulent secretions",
      "Diffuse alveolar damage with hyaline membrane formation"
    ],
    "answer": 1,
    "exp": "Chronic bronchitis is defined clinically as a productive cough on most days for at least 3 months in 2 consecutive years. The pathologic hallmark is hyperplasia of bronchial submucosal mucous glands, quantified by an increased Reid index (gland-to-wall-thickness ratio). Chronic mucus hypersecretion and hypoxemia produce the classic cyanotic, edematous 'blue bloater.'",
    "why": [
      "Alveolar wall destruction defines emphysema, which produces a 'pink puffer' with hyperinflation rather than mucous gland hyperplasia.",
      "Correct: chronic bronchitis is a productive cough for 3 months over 2 years with mucous gland hyperplasia and an increased Reid index.",
      "Reversible bronchospasm with eosinophilic inflammation describes asthma, not the fixed mucus hypersecretion of chronic bronchitis.",
      "Permanent bronchial dilation with pooled secretions describes bronchiectasis, a distinct entity.",
      "Diffuse alveolar damage with hyaline membranes describes acute respiratory distress syndrome, not chronic bronchitis."
    ]
  },
  {
    "id": "s1-0233",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathophysiology",
    "topic": "Idiopathic pulmonary arterial hypertension",
    "difficulty": "hard",
    "anchor": null,
    "vignette": "A 32-year-old woman reports two years of gradually worsening exertional dyspnea and fatigue, and recently near-syncope on exertion. Examination reveals a loud pulmonic component of the second heart sound, a right ventricular heave, and mild lower-extremity edema. Chest imaging shows enlarged central pulmonary arteries with clear lung fields, and left ventricular function is normal. A BMPR2 mutation is identified.",
    "lead": "Which best explains the underlying pathophysiology?",
    "options": [
      "Left ventricular systolic failure raising pulmonary venous pressure",
      "Chronic hypoxemia from diffuse parenchymal lung disease",
      "Pulmonary arterial remodeling with medial hypertrophy and plexiform lesions",
      "Recurrent thromboembolic obstruction of pulmonary arteries",
      "Left-to-right shunt through an atrial septal defect"
    ],
    "answer": 2,
    "exp": "A young woman with progressive dyspnea, a loud P2, RV heave, clear lungs, normal LV function, and a BMPR2 mutation has idiopathic pulmonary arterial hypertension. Loss of BMPR2 signaling promotes proliferation of pulmonary arterial smooth muscle and endothelium, causing medial hypertrophy, intimal fibrosis, and plexiform lesions that raise pulmonary vascular resistance and strain the right ventricle.",
    "why": [
      "Left heart failure would show pulmonary venous congestion and reduced LV function, which are absent here.",
      "Parenchymal lung disease causes hypoxemia with abnormal lung fields, not clear lungs with a BMPR2 mutation.",
      "Correct: idiopathic PAH from BMPR2 loss causes pulmonary arterial remodeling with medial hypertrophy and plexiform lesions raising vascular resistance.",
      "Chronic thromboembolic disease produces perfusion defects on imaging, not the primary vascular remodeling of idiopathic PAH.",
      "An atrial septal defect causes a left-to-right shunt with a fixed split S2, not the isolated arteriopathy described."
    ]
  },
  {
    "id": "s1-0234",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathophysiology",
    "topic": "Pleural effusion (Light's criteria)",
    "difficulty": "moderate",
    "anchor": "table",
    "vignette": "A 66-year-old man with fever, cough, and pleuritic chest pain has a moderate right pleural effusion. A diagnostic thoracentesis is performed and simultaneous serum studies are obtained.\n\n| Measurement | Value |\n|---|---|\n| Pleural fluid protein / serum protein | 0.6 |\n| Pleural fluid LDH / serum LDH | 0.7 |\n| Pleural fluid LDH | 250 U/L (> 2/3 upper limit of normal serum LDH) |",
    "lead": "How is this effusion best classified?",
    "options": [
      "Transudate due to heart failure",
      "Transudate due to cirrhosis",
      "Transudate due to nephrotic syndrome",
      "Exudate meeting Light's criteria",
      "Chylothorax"
    ],
    "answer": 3,
    "exp": "Light's criteria classify an effusion as an exudate if any one is met: pleural/serum protein ratio > 0.5, pleural/serum LDH ratio > 0.6, or pleural LDH > 2/3 the upper limit of normal serum LDH. This fluid meets all three, making it an exudate. Exudates arise from increased capillary permeability or impaired lymphatic drainage, as in infection (parapneumonic effusion), malignancy, or pulmonary embolism.",
    "why": [
      "Heart failure produces a transudate with low protein and LDH ratios, not the elevated ratios shown here.",
      "Cirrhosis causes a transudative hepatic hydrothorax, which would not meet Light's exudative criteria.",
      "Nephrotic syndrome causes transudative effusions from hypoalbuminemia, not an exudate.",
      "Correct: protein and LDH ratios above the Light's thresholds classify this as an exudate, consistent with a parapneumonic effusion.",
      "Chylothorax is defined by high triglyceride content from thoracic duct injury, not by these protein and LDH ratios alone."
    ]
  },
  {
    "id": "s1-0235",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Diabetic nephropathy (Kimmelstiel-Wilson)",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 58-year-old man with a 15-year history of type 2 diabetes has slowly worsening kidney function and increasing protein in his urine, along with worsening hypertension. His retinal exam shows diabetic changes. A renal biopsy is performed.\n\n| Test | Value | Reference |\n|---|---|---|\n| Urine albumin-to-creatinine ratio | 900 mg/g | < 30 |\n| Serum creatinine | 1.9 mg/dL | 0.7-1.3 |",
    "lead": "Which histologic finding is most likely on biopsy?",
    "options": [
      "Crescents filling Bowman space",
      "Subepithelial 'spike and dome' deposits",
      "Foot-process effacement with otherwise normal glomeruli",
      "Wire-loop capillary lesions with immune deposits",
      "Nodular mesangial expansion (Kimmelstiel-Wilson nodules) with thickened basement membranes"
    ],
    "answer": 4,
    "exp": "Long-standing diabetes with progressive albuminuria, hypertension, and retinopathy indicates diabetic nephropathy. Chronic hyperglycemia causes nonenzymatic glycation and mesangial matrix expansion, producing basement-membrane thickening and characteristic nodular glomerulosclerosis (Kimmelstiel-Wilson nodules). Hyperfiltration and glomerular hypertension drive progressive proteinuria and decline in GFR.",
    "why": [
      "Crescents indicate rapidly progressive glomerulonephritis, not the indolent course of diabetic nephropathy.",
      "Subepithelial 'spike and dome' deposits characterize membranous nephropathy, not diabetic glomerulosclerosis.",
      "Isolated foot-process effacement defines minimal change disease, which causes abrupt nephrotic syndrome in children.",
      "Wire-loop lesions are seen in lupus nephritis, not in diabetes.",
      "Correct: diabetic nephropathy shows nodular mesangial sclerosis (Kimmelstiel-Wilson nodules) with thickened glomerular basement membranes."
    ]
  },
  {
    "id": "s1-0236",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Renovascular hypertension (fibromuscular dysplasia)",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 34-year-old woman is found to have blood pressure of 168/104 mm Hg that remains elevated despite three antihypertensive agents. She has no other risk factors. On abdominal examination a bruit is heard in the flank. Renal function worsened after she was started on an ACE inhibitor.\n\n**[IMAGE: renal arteriography showing alternating stenoses and dilations producing a 'string of beads' appearance in the mid-to-distal renal artery]**",
    "lead": "Which is the most likely underlying cause of her hypertension?",
    "options": [
      "Fibromuscular dysplasia of the renal artery",
      "Atherosclerotic renal artery stenosis",
      "Primary hyperaldosteronism",
      "Pheochromocytoma",
      "Coarctation of the aorta"
    ],
    "answer": 0,
    "exp": "A young woman with resistant hypertension, a flank bruit, worsened renal function after an ACE inhibitor, and a 'string of beads' pattern on angiography has renovascular hypertension from fibromuscular dysplasia. The noninflammatory arterial wall thickening narrows the renal artery, reducing perfusion and activating the renin-angiotensin system. ACE inhibition removes angiotensin II support of the efferent arteriole, dropping GFR in the affected kidney.",
    "why": [
      "Correct: a young woman with a 'string of beads' renal artery and renin-driven resistant hypertension has fibromuscular dysplasia.",
      "Atherosclerotic renal artery stenosis occurs in older patients with vascular risk factors and involves the ostium, not this beaded mid-artery pattern.",
      "Primary hyperaldosteronism causes hypertension with hypokalemia and suppressed renin, not a beaded renal artery.",
      "Pheochromocytoma causes episodic hypertension with catecholamine symptoms, not fixed renal artery stenosis.",
      "Coarctation causes upper-extremity hypertension with reduced femoral pulses, not a renal artery abnormality."
    ]
  },
  {
    "id": "s1-0237",
    "system": "Respiratory & Renal/Urinary",
    "discipline": "Pathology",
    "topic": "Alport syndrome",
    "difficulty": "hard",
    "anchor": null,
    "vignette": "A 9-year-old boy is evaluated for persistent microscopic hematuria noted on several urinalyses. He has bilateral high-frequency sensorineural hearing loss and an ophthalmologist notes anterior lenticonus. Several maternal male relatives developed kidney failure in early adulthood. Electron microscopy of a renal biopsy shows irregular thickening and thinning of the glomerular basement membrane with splitting of the lamina densa.",
    "lead": "Which protein is most likely defective?",
    "options": [
      "Podocin",
      "Type IV collagen (alpha-3/4/5 chains)",
      "Fibrillin-1",
      "Type I collagen",
      "Type III collagen"
    ],
    "answer": 1,
    "exp": "Hereditary hematuria with sensorineural deafness and ocular abnormalities (anterior lenticonus), plus a 'basket-weave' split basement membrane on EM, is Alport syndrome. The X-linked form results from mutations in COL4A5 encoding the alpha-5 chain of type IV collagen. Defective type IV collagen weakens basement membranes in the glomerulus, cochlea, and lens, explaining the triad.",
    "why": [
      "Podocin mutations cause steroid-resistant focal segmental glomerulosclerosis, not the deafness-and-eye triad of Alport.",
      "Correct: Alport syndrome results from defective type IV collagen (alpha-3/4/5 chains), weakening basement membranes in kidney, ear, and eye.",
      "Fibrillin-1 defects cause Marfan syndrome with aortic and skeletal features, not hematuria with deafness.",
      "Type I collagen defects cause osteogenesis imperfecta, not glomerular basement membrane splitting.",
      "Type III collagen defects cause vascular Ehlers-Danlos syndrome, not the Alport triad."
    ]
  },
  {
    "id": "s1-0238",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Acute appendicitis",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "An 18-year-old man reports abdominal pain that began around the umbilicus yesterday and has since shifted to the right lower quadrant. He has anorexia, nausea, and a low-grade fever. On examination there is tenderness at a point two-thirds of the way from the umbilicus to the right anterior superior iliac spine, with guarding and rebound tenderness.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Acute cholecystitis",
      "Mesenteric adenitis",
      "Acute appendicitis",
      "Sigmoid diverticulitis",
      "Ureteral colic"
    ],
    "answer": 2,
    "exp": "Periumbilical pain that migrates to the right lower quadrant, anorexia, and tenderness at McBurney point with peritoneal signs are classic for acute appendicitis. Luminal obstruction (often by a fecalith) raises intraluminal pressure, causing early visceral periumbilical pain; as inflammation reaches the parietal peritoneum, pain localizes to the right lower quadrant. Rebound and guarding signal peritoneal irritation.",
    "why": [
      "Cholecystitis causes right upper quadrant pain with a positive Murphy sign, not migratory right lower quadrant pain.",
      "Mesenteric adenitis mimics appendicitis but usually follows a viral illness and is a diagnosis of exclusion.",
      "Correct: periumbilical pain migrating to McBurney point with anorexia and peritoneal signs indicates acute appendicitis.",
      "Diverticulitis typically causes left lower quadrant pain in older adults, not right lower quadrant pain in a teenager.",
      "Ureteral colic causes severe flank pain radiating to the groin with hematuria, not McBurney point tenderness."
    ]
  },
  {
    "id": "s1-0239",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Acute cholecystitis",
    "difficulty": "easy",
    "anchor": "image",
    "vignette": "A 44-year-old obese woman presents with constant right upper quadrant pain that began after a fatty meal and has persisted for eight hours, with nausea and a fever of 38.4 C. On examination she abruptly stops inspiration when the examiner palpates beneath the right costal margin.\n\n**[IMAGE: right upper quadrant ultrasound showing gallstones, a thickened gallbladder wall, and pericholecystic fluid]**",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Acute pancreatitis",
      "Peptic ulcer disease",
      "Acute viral hepatitis",
      "Acute cholecystitis",
      "Ascending cholangitis"
    ],
    "answer": 3,
    "exp": "Persistent right upper quadrant pain after a fatty meal, fever, a positive Murphy sign, and ultrasound showing gallstones with a thickened wall and pericholecystic fluid indicate acute cholecystitis. A stone impacted in the cystic duct obstructs the gallbladder, causing distension, inflammation, and secondary infection. The inspiratory arrest on palpation (Murphy sign) reflects the inflamed gallbladder contacting the examining hand.",
    "why": [
      "Pancreatitis causes epigastric pain radiating to the back with elevated lipase, not a positive Murphy sign with gallbladder wall thickening.",
      "Peptic ulcer disease causes epigastric burning related to meals, not RUQ pain with sonographic gallbladder inflammation.",
      "Viral hepatitis causes diffuse tenderness with markedly elevated transaminases, not focal Murphy-positive gallbladder findings.",
      "Correct: RUQ pain, fever, a positive Murphy sign, and sonographic gallbladder inflammation with stones indicate acute cholecystitis.",
      "Ascending cholangitis adds jaundice and marked ductal dilation (Charcot triad), which are not described here."
    ]
  },
  {
    "id": "s1-0240",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Acute diverticulitis",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 65-year-old man with a low-fiber diet presents with three days of left lower quadrant pain, low-grade fever, and a change in bowel habits. He is tender in the left lower quadrant with mild guarding, and his white blood cell count is elevated.\n\n**[IMAGE: abdominal CT showing multiple sigmoid colonic outpouchings with focal wall thickening and surrounding pericolic fat stranding]**",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Ischemic colitis",
      "Ulcerative colitis flare",
      "Colorectal carcinoma",
      "Irritable bowel syndrome",
      "Acute diverticulitis"
    ],
    "answer": 4,
    "exp": "Left lower quadrant pain, fever, leukocytosis, and CT showing sigmoid diverticula with pericolic fat stranding indicate acute diverticulitis. Diverticula are herniations of mucosa and submucosa through the muscularis at points of vascular penetration, favored by low-fiber diets and elevated intraluminal pressure. Obstruction and micro-perforation of a diverticulum produce localized inflammation and the pericolic stranding seen on CT.",
    "why": [
      "Ischemic colitis causes crampy pain with bloody diarrhea in watershed areas, not localized diverticular inflammation with fat stranding.",
      "An ulcerative colitis flare causes bloody diarrhea with continuous mucosal inflammation from the rectum, not focal pericolic stranding.",
      "Colorectal carcinoma causes an obstructing mass and iron-deficiency anemia, not acute pericolic inflammation around diverticula.",
      "Irritable bowel syndrome causes pain without fever, leukocytosis, or CT inflammatory changes.",
      "Correct: LLQ pain with fever, leukocytosis, and CT sigmoid diverticula with pericolic fat stranding is acute diverticulitis."
    ]
  },
  {
    "id": "s1-0241",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Gastric adenocarcinoma (diffuse type)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 63-year-old man reports several months of epigastric discomfort, early satiety, and a 9 kg weight loss. Examination reveals a firm, enlarged left supraclavicular lymph node and velvety hyperpigmented plaques in the axillae. Upper endoscopy shows a rigid, thickened, non-distensible stomach wall, and biopsy reveals cells with intracellular mucin displacing the nucleus to the periphery.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Gastric adenocarcinoma, diffuse (signet-ring) type",
      "Gastric MALT lymphoma",
      "Gastrointestinal stromal tumor",
      "Peptic ulcer disease",
      "Menetrier disease"
    ],
    "answer": 0,
    "exp": "Weight loss, early satiety, a left supraclavicular (Virchow) node, acanthosis nigricans, a rigid 'leather-bottle' stomach (linitis plastica), and signet-ring cells indicate diffuse gastric adenocarcinoma. The malignant cells infiltrate the wall diffusely without forming a discrete mass, accumulating mucin that pushes the nucleus to the periphery. Loss of E-cadherin underlies the discohesive infiltrative growth.",
    "why": [
      "Correct: signet-ring cells, linitis plastica, a Virchow node, and acanthosis nigricans indicate diffuse gastric adenocarcinoma.",
      "MALT lymphoma is associated with H. pylori and shows lymphoid infiltrates, not signet-ring cells with linitis plastica.",
      "A GIST is a submucosal mesenchymal tumor expressing c-KIT, not a diffusely infiltrating signet-ring carcinoma.",
      "Peptic ulcer disease causes a discrete mucosal defect, not diffuse mural thickening with signet-ring cells.",
      "Menetrier disease causes giant hypertrophic gastric folds with protein loss, not a rigid wall with malignant signet cells."
    ]
  },
  {
    "id": "s1-0242",
    "system": "Gastrointestinal",
    "discipline": "Pathology",
    "topic": "Primary sclerosing cholangitis",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 38-year-old man with a several-year history of ulcerative colitis reports increasing fatigue and itching. Laboratory studies show a disproportionately elevated alkaline phosphatase with only mild transaminase elevation. Perinuclear antineutrophil cytoplasmic antibodies are positive.\n\n**[IMAGE: magnetic resonance cholangiopancreatography showing multifocal strictures and dilations of intrahepatic and extrahepatic bile ducts producing a 'beaded' appearance]**",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Primary biliary cholangitis",
      "Primary sclerosing cholangitis",
      "Choledocholithiasis",
      "Autoimmune hepatitis",
      "Cholangiocarcinoma"
    ],
    "answer": 1,
    "exp": "A cholestatic picture (high alkaline phosphatase, pruritus) in a man with ulcerative colitis, p-ANCA positivity, and multifocal biliary strictures with beading is primary sclerosing cholangitis. Progressive concentric periductal 'onion-skin' fibrosis obliterates intra- and extrahepatic ducts, producing the alternating strictures and dilations. Patients carry an increased risk of cholangiocarcinoma.",
    "why": [
      "Primary biliary cholangitis affects middle-aged women with antimitochondrial antibodies and small intrahepatic ducts, not large-duct beading with UC.",
      "Correct: cholestasis with p-ANCA, ulcerative colitis, and a beaded biliary tree indicates primary sclerosing cholangitis.",
      "Choledocholithiasis causes a discrete obstructing stone, not diffuse multifocal strictures of the whole biliary tree.",
      "Autoimmune hepatitis causes a hepatocellular pattern with high transaminases and anti-smooth-muscle antibodies, not biliary beading.",
      "Cholangiocarcinoma may complicate PSC but presents as a dominant obstructing mass rather than diffuse beading."
    ]
  },
  {
    "id": "s1-0243",
    "system": "Gastrointestinal",
    "discipline": "Microbiology",
    "topic": "Whipple disease",
    "difficulty": "hard",
    "anchor": null,
    "vignette": "A 52-year-old man reports a year of chronic diarrhea, weight loss, and migratory joint pains, and more recently develops low-grade fever and mild cognitive changes with abnormal eye movements. Small-bowel biopsy shows the lamina propria distended by foamy macrophages that stain strongly with periodic acid-Schiff, and electron microscopy reveals rod-shaped bacilli within the macrophages.",
    "lead": "Which organism is most likely responsible?",
    "options": [
      "Giardia lamblia",
      "Mycobacterium avium complex",
      "Tropheryma whipplei",
      "Cryptosporidium parvum",
      "Clostridioides difficile"
    ],
    "answer": 2,
    "exp": "Chronic diarrhea and malabsorption with migratory arthralgias, cardiac and neurologic involvement, and PAS-positive foamy macrophages in the lamina propria describe Whipple disease. It is caused by the gram-positive actinomycete Tropheryma whipplei, which accumulates within intestinal macrophages and impairs lymphatic transport, producing malabsorption. It classically affects middle-aged white men and responds to prolonged antibiotics.",
    "why": [
      "Giardia causes fatty diarrhea with trophozoites on stool exam, not PAS-positive macrophages with systemic arthralgias.",
      "M. avium complex infects immunocompromised hosts and gives PAS-positive, acid-fast macrophages, unlike the non-acid-fast bacilli of Whipple disease.",
      "Correct: Whipple disease is caused by Tropheryma whipplei, seen as PAS-positive foamy macrophages in the lamina propria.",
      "Cryptosporidium causes watery diarrhea in immunocompromised patients, identified by acid-fast oocysts, not intramacrophage bacilli.",
      "C. difficile causes antibiotic-associated pseudomembranous colitis, not chronic malabsorption with PAS-positive macrophages."
    ]
  },
  {
    "id": "s1-0244",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Biostatistics",
    "topic": "Receiver operating characteristic (ROC) curve",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "Investigators evaluate a new continuous blood biomarker for a disease and plot its performance across all possible diagnostic cutoffs.\n\n**[IMAGE: a receiver operating characteristic (ROC) curve plotting true-positive rate (sensitivity) on the y-axis against false-positive rate (1 minus specificity) on the x-axis, bowing toward the upper-left corner]**",
    "lead": "The cutoff point lying closest to the upper-left corner of the ROC curve best represents which of the following?",
    "options": [
      "The cutoff that maximizes the disease prevalence in the sample",
      "The cutoff with the highest positive predictive value regardless of disease frequency",
      "The cutoff that maximizes specificity while ignoring sensitivity",
      "The cutoff that best balances high sensitivity and high specificity",
      "The threshold at which sensitivity equals the disease prevalence"
    ],
    "answer": 3,
    "exp": "An ROC curve plots sensitivity against 1 minus specificity across all cutoffs. Points nearer the upper-left corner have both high true-positive and low false-positive rates, so the cutoff closest to that corner offers the best simultaneous balance of sensitivity and specificity. The overall area under the curve summarizes discriminatory ability independent of any single threshold.",
    "why": [
      "Prevalence is a property of the population, not something a diagnostic cutoff maximizes on an ROC curve.",
      "Predictive values depend on prevalence and are not what the ROC curve's upper-left point identifies, which is based on sensitivity and specificity.",
      "Maximizing specificity alone would push the point toward the lower-left, sacrificing sensitivity rather than balancing both.",
      "Correct: the point nearest the upper-left corner maximizes sensitivity and specificity simultaneously, the best overall balance.",
      "There is no meaningful threshold where sensitivity equals prevalence; the two are unrelated measures."
    ]
  },
  {
    "id": "s1-0245",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Biostatistics",
    "topic": "Reliability versus validity",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A hospital tests a new automated cuff by comparing it with a simultaneous intra-arterial catheter measurement, considered the true value. Across many patients the new cuff's readings cluster very tightly together on repeat measurement, but they are consistently about 15 mm Hg higher than the intra-arterial value.",
    "lead": "Which best describes this device's measurement properties?",
    "options": [
      "High validity but low reliability",
      "Low reliability and low validity",
      "High validity and high reliability",
      "The main problem is random error affecting precision",
      "High reliability but low validity due to systematic error"
    ],
    "answer": 4,
    "exp": "Reliability (precision) refers to how reproducible repeated measurements are, while validity (accuracy) refers to how close measurements are to the true value. Tightly clustered readings indicate high reliability, but a consistent 15 mm Hg offset from the true arterial value indicates poor validity due to systematic error (bias). Consistent directional error reduces accuracy without harming precision.",
    "why": [
      "This reverses the finding; the consistent offset means validity is low, not high, while reliability is high.",
      "Reliability is actually high because readings are tightly clustered, so 'low reliability' is incorrect.",
      "Validity is not high, because the readings are systematically off by 15 mm Hg from the true value.",
      "A consistent directional offset is systematic error, not random error, so precision is preserved.",
      "Correct: tightly clustered readings show high reliability, but a fixed 15 mm Hg offset is systematic error, giving low validity."
    ]
  },
  {
    "id": "s1-0246",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Mandatory reporting of communicable disease",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 40-year-old man is newly diagnosed with active pulmonary tuberculosis confirmed by sputum testing. He is distressed and asks the physician to keep the diagnosis completely private and not to inform anyone, including public health authorities, because he fears stigma at work.",
    "lead": "Which is the most appropriate action?",
    "options": [
      "Report the case to the public health department as legally required and counsel the patient about the reasons",
      "Honor the patient's request for confidentiality and decline to report the case",
      "Report the case only if the patient later refuses treatment",
      "Personally notify the patient's contacts without involving public health authorities",
      "Require a court order before making any report"
    ],
    "answer": 0,
    "exp": "Active tuberculosis is a reportable communicable disease. Public health reporting laws create a recognized exception to patient confidentiality because the risk of transmission to others justifies protecting community health. The physician must notify the public health department, which handles contact tracing, while continuing to support the patient and explaining why reporting is required.",
    "why": [
      "Correct: active tuberculosis is legally reportable, so the physician must notify public health while counseling the patient.",
      "Confidentiality yields to mandatory reporting for communicable diseases that threaten public health, so declining to report is inappropriate.",
      "Reporting is required at diagnosis regardless of treatment adherence, not contingent on refusal of therapy.",
      "Contact tracing is the role of the public health department, not something the physician should undertake independently.",
      "No court order is needed; statutory public health reporting requirements authorize the disclosure directly."
    ]
  },
  {
    "id": "s1-0247",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Ectopic pregnancy",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 27-year-old woman with a prior episode of pelvic inflammatory disease presents with 7 weeks of amenorrhea, right lower quadrant pain, and vaginal spotting. Her urine pregnancy test is positive and serum beta-hCG is 2,800 mIU/mL.\n\n**[IMAGE: transvaginal ultrasound showing an empty uterine cavity with a complex mass containing a gestational sac in the right adnexa]**",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Threatened intrauterine abortion",
      "Ectopic (tubal) pregnancy",
      "Ruptured ovarian cyst",
      "Acute appendicitis",
      "Complete hydatidiform mole"
    ],
    "answer": 1,
    "exp": "A positive pregnancy test with a beta-hCG above the discriminatory zone, an empty uterus, and an adnexal gestational sac indicates an ectopic pregnancy. Prior pelvic inflammatory disease scars the fallopian tube, impeding transport of the fertilized ovum so it implants in the tube. As the tubal pregnancy grows it causes pain and bleeding and risks life-threatening rupture.",
    "why": [
      "A threatened abortion would show an intrauterine gestation with a closed cervix, not an empty uterus with an adnexal sac.",
      "Correct: an empty uterus with an adnexal gestational sac and a positive beta-hCG after prior PID indicates a tubal ectopic pregnancy.",
      "A ruptured ovarian cyst causes acute pain but would not produce an adnexal gestational sac with a positive pregnancy test.",
      "Appendicitis does not cause a positive beta-hCG or an adnexal gestational sac.",
      "A complete mole shows a 'snowstorm' intrauterine pattern with a markedly elevated beta-hCG, not an adnexal sac with an empty uterus."
    ]
  },
  {
    "id": "s1-0248",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Pathology",
    "topic": "Chronic lymphocytic leukemia",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 70-year-old man is found on routine testing to have a markedly elevated lymphocyte count. He feels well but has painless, rubbery enlargement of cervical and axillary lymph nodes. A peripheral smear shows numerous mature-appearing small lymphocytes and many disrupted 'smudge' cells.\n\n| Test | Value | Reference |\n|---|---|---|\n| White blood cells | 48,000/uL | 4,500-11,000 |\n| Lymphocytes | 85% | 20-40 |\n| Hemoglobin | 13.8 g/dL | 13.5-17.5 |",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Acute lymphoblastic leukemia",
      "Chronic myeloid leukemia",
      "Chronic lymphocytic leukemia",
      "Hairy cell leukemia",
      "Reactive viral lymphocytosis"
    ],
    "answer": 2,
    "exp": "An older adult with marked mature lymphocytosis, painless lymphadenopathy, and smudge cells on smear has chronic lymphocytic leukemia. It is a clonal proliferation of functionally incompetent mature B cells that co-express CD5 with CD19/CD20. The fragile leukemic cells rupture during smear preparation, producing the characteristic smudge cells.",
    "why": [
      "Acute lymphoblastic leukemia occurs mainly in children and shows immature blasts with rapid onset, not mature lymphocytes and smudge cells.",
      "Chronic myeloid leukemia produces a granulocytic proliferation with a left shift and the BCR-ABL fusion, not a mature lymphocytosis.",
      "Correct: an elderly patient with mature lymphocytosis, painless adenopathy, and smudge cells has chronic lymphocytic leukemia.",
      "Hairy cell leukemia causes pancytopenia with splenomegaly and cells with cytoplasmic projections, not marked lymphocytosis with smudge cells.",
      "Reactive lymphocytosis is usually transient and modest with atypical lymphocytes, not a persistent clonal count of 48,000 with smudge cells."
    ]
  },
  {
    "id": "s1-0249",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Neurology",
    "topic": "Cluster headache",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 35-year-old man reports recurrent attacks of excruciating, strictly unilateral pain centered behind his right eye, each lasting about an hour. During attacks his right eye waters and becomes red, his right nostril runs, and the right eyelid droops. The attacks strike several times a day for a few weeks, often waking him at the same hour each night, and he paces restlessly because he cannot sit still.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Migraine without aura",
      "Tension-type headache",
      "Trigeminal neuralgia",
      "Cluster headache",
      "Giant cell (temporal) arteritis"
    ],
    "answer": 3,
    "exp": "Severe, strictly unilateral periorbital pain lasting under three hours, with ipsilateral autonomic features (lacrimation, conjunctival injection, rhinorrhea, ptosis) and restless agitation occurring in clustered bouts, defines cluster headache. Attacks show a striking circadian pattern, often awakening the patient at night. Activation of the trigeminal-autonomic reflex produces the pain and cranial autonomic signs.",
    "why": [
      "Migraine causes throbbing pain lasting hours to days with photophobia and a preference to lie still, not brief attacks with prominent autonomic signs.",
      "Tension-type headache is a bilateral band-like pressure without autonomic features or agitation.",
      "Trigeminal neuralgia causes brief electric-shock facial pains triggered by touch, not hour-long attacks with lacrimation and ptosis.",
      "Correct: brief unilateral periorbital pain with ipsilateral autonomic features, restlessness, and clustered circadian attacks is cluster headache.",
      "Giant cell arteritis causes temporal pain with jaw claudication and visual loss in older patients, not clustered autonomic attacks."
    ]
  },
  {
    "id": "s1-0250",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Calcium pyrophosphate deposition (pseudogout)",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "A 74-year-old woman develops acute pain, warmth, and swelling of the right knee over a day. She is afebrile. A radiograph of the knee shows linear calcification within the joint cartilage. Arthrocentesis yields cloudy fluid, and polarized microscopy is performed.\n\n| Finding | Result |\n|---|---|\n| Crystal shape | Rhomboid |\n| Birefringence under polarized light | Positive (blue when parallel to the compensator) |\n| Synovial fluid WBC | 20,000/uL |",
    "lead": "These crystals are composed of which substance?",
    "options": [
      "Monosodium urate",
      "Calcium oxalate",
      "Cholesterol",
      "Hydroxyapatite",
      "Calcium pyrophosphate dihydrate"
    ],
    "answer": 4,
    "exp": "Acute monoarthritis with cartilage calcification (chondrocalcinosis) and rhomboid, positively birefringent crystals indicates calcium pyrophosphate deposition disease (pseudogout). CPPD crystals deposit in cartilage and, when shed into the joint, trigger an acute inflammatory arthritis. Under polarized light they appear blue when aligned parallel to the compensator, distinguishing them from urate crystals.",
    "why": [
      "Monosodium urate crystals are needle-shaped and negatively birefringent (yellow when parallel), the crystals of gout rather than pseudogout.",
      "Calcium oxalate crystals cause renal stones and can deposit in dialysis patients but are not the rhomboid positively birefringent joint crystals here.",
      "Cholesterol crystals are flat plates with notched corners seen in chronic effusions, not rhomboid birefringent crystals with chondrocalcinosis.",
      "Hydroxyapatite crystals are not birefringent and require special stains, unlike these positively birefringent rhomboid crystals.",
      "Correct: rhomboid, positively birefringent crystals with chondrocalcinosis are calcium pyrophosphate dihydrate, causing pseudogout."
    ]
  },
  {
    "id": "s1-0251",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Physiology",
    "topic": "Narcolepsy (orexin/hypocretin deficiency)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 22-year-old college student reports irresistible daytime sleep attacks for the past year, falling asleep in class and mid-conversation despite adequate nighttime sleep. He also describes sudden episodes of bilateral leg buckling and jaw slackening triggered by laughter, brief inability to move on waking, and vivid dreamlike images as he falls asleep. A sleep study shows a short sleep latency with rapid entry into REM sleep.",
    "lead": "Which best explains this presentation?",
    "options": [
      "Loss of orexin (hypocretin)-producing neurons in the lateral hypothalamus",
      "Repetitive upper airway collapse causing fragmented sleep",
      "Degeneration of dopaminergic neurons in the substantia nigra",
      "A primary mood disorder producing hypersomnia",
      "Deficient nocturnal melatonin secretion from the pineal gland"
    ],
    "answer": 0,
    "exp": "Excessive daytime sleepiness with sleep attacks, cataplexy (sudden loss of muscle tone triggered by emotion), sleep paralysis, hypnagogic hallucinations, and short REM latency define narcolepsy type 1. It results from loss of orexin (hypocretin)-producing neurons in the lateral hypothalamus, which normally stabilize wakefulness and suppress inappropriate REM intrusion. Low CSF orexin supports the diagnosis, and the cataplexy reflects REM-associated atonia intruding into wakefulness.",
    "why": [
      "Correct: destruction of lateral hypothalamic orexin (hypocretin) neurons destabilizes wakefulness and allows REM intrusion, producing sleep attacks, cataplexy, sleep paralysis, and hypnagogic hallucinations.",
      "Upper airway collapse causes obstructive sleep apnea with snoring and witnessed apneas, not cataplexy or short REM latency.",
      "Substantia nigra dopaminergic loss causes Parkinsonism with tremor and rigidity, not emotion-triggered atonia and sleep attacks.",
      "A primary mood disorder can cause hypersomnia but does not cause cataplexy or the sleep-onset REM periods seen here.",
      "Deficient melatonin disrupts circadian timing but does not produce cataplexy or sudden daytime REM intrusion."
    ]
  },
  {
    "id": "s1-0252",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Pathology",
    "topic": "Subarachnoid hemorrhage (ruptured berry aneurysm)",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 49-year-old woman suddenly develops the \"worst headache of my life\" that peaks within seconds while gardening, followed by neck stiffness, photophobia, vomiting, and a brief loss of consciousness. She has a history of hypertension and smoking, and a family member had a similar sudden fatal event. She is now alert but has marked nuchal rigidity.\n\n**[IMAGE: noncontrast head CT showing hyperdense blood filling the basal cisterns and extending into the sylvian fissures]**",
    "lead": "Which is the most likely underlying cause?",
    "options": [
      "Hypertensive rupture of a lenticulostriate artery into the basal ganglia",
      "Rupture of a saccular (berry) aneurysm at the circle of Willis",
      "Embolic occlusion of the middle cerebral artery",
      "Tearing of a bridging vein producing a subdural hematoma",
      "Rupture of the middle meningeal artery producing an epidural hematoma"
    ],
    "answer": 1,
    "exp": "A thunderclap headache that peaks in seconds with meningismus, photophobia, and transient loss of consciousness, plus CT blood in the basal cisterns and sylvian fissures, indicates aneurysmal subarachnoid hemorrhage. The usual source is rupture of a saccular (berry) aneurysm at branch points of the circle of Willis, and risk factors include hypertension, smoking, and polycystic kidney disease. Vasospasm and rebleeding are major early complications.",
    "why": [
      "Hypertensive lenticulostriate rupture causes an intraparenchymal basal ganglia bleed with focal deficits, not blood tracking through the subarachnoid cisterns.",
      "Correct: a ruptured saccular (berry) aneurysm at the circle of Willis spills arterial blood into the subarachnoid space, producing the thunderclap headache and cisternal blood on CT.",
      "Middle cerebral artery embolism causes ischemic stroke with focal weakness, not a sudden thunderclap headache with subarachnoid blood.",
      "Bridging vein tears cause a crescentic subdural hematoma, typically after trauma in older or alcoholic patients, not cisternal subarachnoid blood.",
      "Middle meningeal artery rupture causes a lens-shaped epidural hematoma after temporal trauma, not diffuse subarachnoid cisternal blood."
    ]
  },
  {
    "id": "s1-0253",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Pathology",
    "topic": "Osmotic demyelination (central pontine myelinolysis)",
    "difficulty": "hard",
    "anchor": "image",
    "vignette": "A 52-year-old man with chronic alcohol use and malnutrition was admitted with a serum sodium of 108 mEq/L that was corrected rapidly over 12 hours. Three days later he develops progressive quadriparesis, dysarthria, difficulty swallowing, and near-complete paralysis while remaining awake and able to blink and move his eyes vertically on command.\n\n**[IMAGE: axial T2-weighted brain MRI showing a symmetric hyperintense lesion in the central pons that spares the periphery]**",
    "lead": "Which best explains this deterioration?",
    "options": [
      "Acute ischemic infarction of the basilar artery territory",
      "Hemorrhage into the brainstem from hypertension",
      "Osmotic demyelination from overly rapid correction of hyponatremia",
      "Thiamine deficiency causing mammillary body degeneration",
      "Autoimmune inflammatory demyelination of the optic nerves and cord"
    ],
    "answer": 2,
    "exp": "A locked-in picture (quadriparesis, dysarthria, dysphagia with preserved consciousness and vertical eye movements) developing days after rapid correction of severe hyponatremia, with a symmetric central pontine T2 lesion, indicates osmotic demyelination syndrome (central pontine myelinolysis). When chronically hyponatremic brain cells that have shed osmolytes are exposed to a rapid rise in serum osmolality, water shifts out and oligodendrocytes are injured, demyelinating central pontine fibers. Sodium should be corrected no faster than about 8 mEq/L per 24 hours.",
    "why": [
      "Basilar artery infarction can cause locked-in syndrome but would be abrupt and vascular in distribution, not a symmetric central pontine lesion timed to sodium correction.",
      "Brainstem hypertensive hemorrhage would appear as acute blood on imaging, not a symmetric demyelinating T2 lesion following hyponatremia correction.",
      "Correct: rapid correction of chronic hyponatremia drives water out of adapted brain cells and demyelinates central pontine fibers, producing osmotic demyelination.",
      "Thiamine deficiency causes Wernicke encephalopathy with confusion, ophthalmoplegia, and ataxia, not a symmetric central pontine lesion with quadriparesis.",
      "Autoimmune demyelination (multiple sclerosis) produces asymmetric lesions disseminated in space and time, not a single symmetric pontine lesion after sodium correction."
    ]
  },
  {
    "id": "s1-0254",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Psychiatry",
    "topic": "Anorexia nervosa",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 17-year-old girl is brought in by her mother, who is worried about her weight. The patient restricts her intake to a few hundred calories daily, exercises for hours, and is intensely afraid of gaining weight even though she is markedly underweight with a body mass index of 15.5 kg/m2. She views herself as \"fat,\" has not menstruated in five months, and has fine downy hair over her back, cold intolerance, and a resting heart rate of 46/min.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Bulimia nervosa",
      "Major depressive disorder",
      "Body dysmorphic disorder",
      "Anorexia nervosa",
      "Hyperthyroidism"
    ],
    "answer": 3,
    "exp": "Restriction of energy intake leading to significantly low body weight, an intense fear of gaining weight, and a distorted body image define anorexia nervosa. Physiologic consequences of starvation include amenorrhea, lanugo, bradycardia, hypothermia, and cold intolerance. It carries one of the highest mortality rates of any psychiatric disorder, from cardiac complications and suicide.",
    "why": [
      "Bulimia nervosa involves recurrent binge eating with compensatory purging in patients who are usually of normal or above-normal weight, not the emaciation seen here.",
      "Major depression can reduce appetite but does not feature the intense fear of weight gain and distorted body image driving self-starvation.",
      "Body dysmorphic disorder centers on a perceived defect in a specific body feature, not on body weight with dangerous caloric restriction.",
      "Correct: severe caloric restriction with significantly low weight, intense fear of gaining weight, and distorted body image, plus lanugo, amenorrhea, and bradycardia, define anorexia nervosa.",
      "Hyperthyroidism causes weight loss but with heat intolerance, tachycardia, and increased appetite, not fear of weight gain and bradycardia."
    ]
  },
  {
    "id": "s1-0255",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Anatomy",
    "topic": "Brown-Sequard syndrome (spinal cord hemisection)",
    "difficulty": "hard",
    "anchor": null,
    "vignette": "A 29-year-old man is evaluated after a knife wound to the right side of his back at the mid-thoracic level. On examination he has weakness and loss of vibration and position sense in the right leg below the injury, while pain and temperature sensation are lost in the left leg beginning a couple of segments below the lesion. Reflexes are increased in the right leg.",
    "lead": "Which lesion best explains this pattern?",
    "options": [
      "Occlusion of the anterior spinal artery",
      "A central cord lesion expanding around the central canal",
      "Selective degeneration of the dorsal columns",
      "A demyelinating plaque in the cervical cord",
      "Hemisection of one half of the spinal cord"
    ],
    "answer": 4,
    "exp": "Ipsilateral loss of motor function and dorsal-column sensation (vibration, proprioception) with contralateral loss of pain and temperature a few levels below the lesion is the classic Brown-Sequard pattern of spinal cord hemisection. The corticospinal tract and dorsal columns decussate above the cord, so their deficits are ipsilateral, whereas the spinothalamic tract crosses within one or two segments of entry, so its deficit is contralateral and begins slightly below the lesion.",
    "why": [
      "Anterior spinal artery occlusion spares the dorsal columns and produces bilateral motor and pain/temperature loss, not this crossed hemisection pattern.",
      "A central cord lesion causes a bilateral \"cape\" distribution loss of pain and temperature with upper-extremity-predominant weakness, not a unilateral hemisection pattern.",
      "Isolated dorsal column degeneration causes loss of vibration and proprioception without the motor and crossed pain/temperature findings seen here.",
      "A cervical demyelinating plaque could cause varied deficits but would not reliably produce this precise ipsilateral motor/dorsal-column and contralateral spinothalamic dissociation from a stab wound.",
      "Correct: hemisection of one half of the cord produces ipsilateral motor and dorsal-column loss with contralateral pain and temperature loss below the level, the Brown-Sequard syndrome."
    ]
  },
  {
    "id": "s1-0256",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Pathophysiology",
    "topic": "Migraine with aura",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 26-year-old woman reports recurrent headaches roughly twice a month for several years. Each episode begins with 20 minutes of shimmering zigzag lines drifting across her vision, followed by a throbbing, one-sided headache with nausea and marked sensitivity to light and sound. The pain worsens with routine activity, and she prefers to lie in a dark, quiet room until it resolves over several hours.",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Tension-type headache",
      "Cluster headache",
      "Trigeminal neuralgia",
      "Giant cell (temporal) arteritis",
      "Migraine with aura"
    ],
    "answer": 4,
    "exp": "Recurrent unilateral throbbing headaches with nausea, photophobia, phonophobia, and worsening with activity, preceded by a visual aura of scintillating scotomata, are characteristic of migraine with aura. The aura is attributed to a wave of cortical spreading depression, and the headache involves activation of the trigeminovascular system. Patients characteristically seek a dark, quiet environment.",
    "why": [
      "Tension-type headache is a bilateral, band-like, non-throbbing pain without aura, nausea, or prominent photophobia.",
      "Cluster headache causes severe unilateral periorbital pain with lacrimation and rhinorrhea in short daily clusters, and patients are restless rather than seeking a dark room.",
      "Trigeminal neuralgia causes brief lightning-like facial pains triggered by touch, not a prolonged throbbing headache with visual aura.",
      "Giant cell arteritis causes a new temporal headache with jaw claudication and vision loss in older adults, not recurrent auras in a young woman.",
      "Correct: recurrent unilateral throbbing headache with nausea, photophobia, and a preceding scintillating visual aura relieved by rest in the dark defines migraine with aura."
    ]
  },
  {
    "id": "s1-0257",
    "system": "Behavioral Health & Nervous System",
    "discipline": "Pharmacology",
    "topic": "Tardive dyskinesia",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 60-year-old man with schizophrenia has taken haloperidol for the past eight years. He now has involuntary, repetitive movements of the mouth and face, including lip smacking, tongue protrusion, and chewing motions, along with occasional writhing movements of the fingers. The movements are not distressing to him and disappear during sleep. There is no rigidity or fever.",
    "lead": "Which best explains these movements?",
    "options": [
      "Chronic dopamine receptor blockade causing postsynaptic receptor supersensitivity",
      "Acute dystonic reaction from recent dose escalation",
      "Excess central dopaminergic tone from a dopamine agonist",
      "Autoimmune destruction of striatal neurons",
      "An expanded CAG trinucleotide repeat in the huntingtin gene"
    ],
    "answer": 0,
    "exp": "Involuntary, repetitive orofacial and choreoathetoid movements emerging after years of first-generation antipsychotic therapy indicate tardive dyskinesia. Prolonged blockade of D2 receptors is thought to cause upregulation and supersensitivity of postsynaptic dopamine receptors in the striatum. It can be irreversible, so clinicians minimize exposure, switch to lower-risk agents, and may treat with a VMAT2 inhibitor.",
    "why": [
      "Correct: years of D2 receptor blockade by a first-generation antipsychotic produce postsynaptic dopamine receptor supersensitivity, causing the late-onset orofacial choreoathetoid movements of tardive dyskinesia.",
      "Acute dystonia causes sustained muscle spasms (torticollis, oculogyric crisis) within hours to days of starting or increasing the drug, not repetitive orofacial movements after years.",
      "Excess dopaminergic tone from an agonist causes dyskinesias in Parkinson treatment, but this patient is on a dopamine blocker, not an agonist.",
      "Autoimmune striatal destruction (e.g., Sydenham chorea) follows streptococcal infection in children, not chronic antipsychotic use in an older adult.",
      "A huntingtin CAG expansion causes Huntington disease with progressive chorea and dementia, unrelated to antipsychotic exposure and with a family history."
    ]
  },
  {
    "id": "s1-0258",
    "system": "Musculoskeletal / Skin",
    "discipline": "Biochemistry",
    "topic": "Osteogenesis imperfecta (type I collagen defect)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "An 18-month-old boy has had three long-bone fractures from minor falls. He has blue-tinged sclerae, small discolored teeth that chip easily, and a family history of frequent fractures and early hearing loss in his mother. Radiographs show multiple healing fractures and diffusely thin, osteopenic bones. There are no bruises in unusual patterns or other signs suggesting inflicted injury.",
    "lead": "A defect in which of the following best explains this condition?",
    "options": [
      "Fibrillin-1, a glycoprotein of elastic microfibrils",
      "Type I collagen synthesis",
      "Type III collagen synthesis",
      "Lysyl hydroxylase acting on collagen cross-links",
      "Vitamin C-dependent proline hydroxylation"
    ],
    "answer": 1,
    "exp": "Recurrent fractures from minor trauma, blue sclerae, brittle discolored teeth (dentinogenesis imperfecta), and conductive hearing loss with a positive family history indicate osteogenesis imperfecta. Most cases result from an autosomal dominant defect in type I collagen (COL1A1/COL1A2), the major structural protein of bone. The thin sclerae reveal underlying choroidal veins, giving the blue hue.",
    "why": [
      "Fibrillin-1 defects cause Marfan syndrome with tall stature, lens dislocation, and aortic root dilation, not recurrent fractures with blue sclerae.",
      "Correct: defective type I collagen synthesis weakens bone, producing recurrent fractures, blue sclerae, brittle teeth, and hearing loss in osteogenesis imperfecta.",
      "Type III collagen defects cause vascular Ehlers-Danlos syndrome with arterial and organ rupture, not the brittle-bone phenotype.",
      "Lysyl hydroxylase deficiency causes a form of Ehlers-Danlos with hyperextensible skin and joint hypermobility, not multiple childhood fractures with blue sclerae.",
      "Impaired vitamin C-dependent proline hydroxylation causes scurvy with perifollicular hemorrhage and poor wound healing, an acquired condition, not this inherited brittle-bone disorder."
    ]
  },
  {
    "id": "s1-0259",
    "system": "Musculoskeletal / Skin",
    "discipline": "Genetics",
    "topic": "Achondroplasia (FGFR3 mutation)",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 3-year-old boy is noted to have very short arms and legs with a relatively normal-sized trunk, a large head with a prominent forehead, and a small midface with a low nasal bridge. His intelligence and cognitive milestones are normal for age. His father has an identical body habitus, and the condition follows an autosomal dominant pattern in the family.",
    "lead": "Which mechanism best explains this disorder?",
    "options": [
      "Deficient growth hormone secretion from the anterior pituitary",
      "Defective type I collagen in the growth plate",
      "A constitutively active FGFR3 receptor that inhibits chondrocyte proliferation",
      "Untreated congenital hypothyroidism",
      "Vitamin D deficiency impairing growth-plate mineralization"
    ],
    "answer": 2,
    "exp": "Rhizomelic (proximal) limb shortening with a normal trunk, macrocephaly with frontal bossing, midface hypoplasia, and normal intelligence in an autosomal dominant pattern indicate achondroplasia, the most common cause of skeletal dysplasia. An activating mutation in fibroblast growth factor receptor 3 (FGFR3) constitutively signals to inhibit chondrocyte proliferation at the growth plate, impairing endochondral ossification while membranous ossification is preserved.",
    "why": [
      "Growth hormone deficiency causes proportionate short stature with delayed growth, not the disproportionate rhizomelic shortening and macrocephaly of achondroplasia.",
      "Defective type I collagen causes osteogenesis imperfecta with fractures and blue sclerae, not disproportionate short-limbed dwarfism.",
      "Correct: a constitutively active FGFR3 receptor suppresses growth-plate chondrocyte proliferation, impairing endochondral bone growth and producing achondroplasia.",
      "Untreated congenital hypothyroidism causes intellectual disability and proportionate growth failure, not normal intelligence with rhizomelic limbs.",
      "Vitamin D deficiency causes rickets with bowing and widened growth plates, an acquired nutritional disorder, not this autosomal dominant dysplasia."
    ]
  },
  {
    "id": "s1-0260",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Osteopetrosis (failure of osteoclastic bone resorption)",
    "difficulty": "moderate",
    "anchor": "image",
    "vignette": "A 4-year-old boy has had several long-bone fractures from minor trauma despite bones that appear unusually dense on imaging. He also has worsening anemia and recurrent infections from marrow failure, hepatosplenomegaly from extramedullary hematopoiesis, and progressive vision and hearing loss attributed to narrowing of cranial nerve foramina.\n\n**[IMAGE: skeletal radiograph showing diffusely dense, sclerotic bones with a \"bone-in-bone\" appearance and obliteration of the medullary cavity]**",
    "lead": "Which best explains this disorder?",
    "options": [
      "Defective synthesis of type I collagen",
      "Excess parathyroid hormone driving bone resorption",
      "Impaired mineralization of osteoid from vitamin D deficiency",
      "Failure of osteoclast-mediated bone resorption",
      "Accelerated osteoblastic bone formation from a growth factor excess"
    ],
    "answer": 3,
    "exp": "Dense, brittle bones that paradoxically fracture easily, with marrow failure (anemia, infections), extramedullary hematopoiesis, and cranial nerve compression, indicate osteopetrosis. Dysfunctional osteoclasts (often from carbonic anhydrase II deficiency) cannot resorb bone, so primary spongiosa accumulates and the marrow cavity is obliterated, producing thick but structurally weak, poorly remodeled bone. The classic radiographic clue is a \"bone-in-bone\" sclerotic appearance.",
    "why": [
      "Defective type I collagen causes osteogenesis imperfecta with thin, osteopenic bones and blue sclerae, not dense sclerotic bones with an obliterated marrow cavity.",
      "Excess parathyroid hormone increases osteoclastic resorption, producing bone loss (osteitis fibrosa cystica), the opposite of the dense bones seen here.",
      "Impaired osteoid mineralization causes rickets/osteomalacia with soft, undermineralized bone, not the sclerotic dense bones of osteopetrosis.",
      "Correct: failure of osteoclast-mediated resorption (often carbonic anhydrase II deficiency) prevents bone remodeling, causing dense but brittle bone, marrow failure, and cranial nerve compression in osteopetrosis.",
      "Accelerated osteoblastic formation is not the mechanism; osteopetrosis results from defective resorption, not from a growth-factor-driven increase in bone formation."
    ]
  },
  {
    "id": "s1-0261",
    "system": "Musculoskeletal / Skin",
    "discipline": "Microbiology",
    "topic": "Disseminated gonococcal arthritis",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 24-year-old sexually active woman has several days of migratory joint pains, and now has a swollen, painful right knee. She also has pain and swelling along the tendon sheaths of her wrist and several scattered pustular skin lesions on her extremities. She is febrile.\n\n| Test | Value | Reference |\n|---|---|---|\n| Synovial WBC | 55,000/mcL | < 200 |\n| Synovial Gram stain | gram-negative diplococci | negative |\n| Cervical nucleic acid amplification | positive | negative |",
    "lead": "Which organism is the most likely cause?",
    "options": [
      "Staphylococcus aureus",
      "Borrelia burgdorferi",
      "Streptococcus pyogenes",
      "Chlamydia trachomatis reactive arthritis",
      "Neisseria gonorrhoeae"
    ],
    "answer": 4,
    "exp": "In a young, sexually active adult, the triad of migratory polyarthralgia, tenosynovitis, and pustular (vesiculopustular) skin lesions, or a purulent monoarthritis, indicates disseminated gonococcal infection. Gram-negative diplococci on synovial Gram stain and a positive genital nucleic acid amplification test confirm Neisseria gonorrhoeae, the most common cause of septic arthritis in sexually active young adults.",
    "why": [
      "Staphylococcus aureus is a leading cause of nongonococcal septic arthritis but appears as gram-positive cocci in clusters and lacks the tenosynovitis-dermatitis syndrome.",
      "Borrelia burgdorferi causes Lyme arthritis, typically a later mono- or oligoarthritis of the knee without pustular lesions or gram-negative diplococci.",
      "Streptococcus pyogenes appears as gram-positive cocci in chains and does not produce this classic gonococcal tenosynovitis and pustular rash.",
      "Chlamydia-associated reactive arthritis is a sterile post-infectious arthritis with conjunctivitis and urethritis, not a purulent joint with organisms on Gram stain.",
      "Correct: gram-negative diplococci in the joint with tenosynovitis, pustular skin lesions, and a positive genital test indicate disseminated Neisseria gonorrhoeae infection."
    ]
  },
  {
    "id": "s1-0262",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathology",
    "topic": "Stevens-Johnson syndrome / toxic epidermal necrolysis",
    "difficulty": "hard",
    "anchor": "image",
    "vignette": "A 34-year-old woman started lamotrigine three weeks ago for a mood disorder. She now has fever, malaise, and a rapidly spreading painful rash of dusky red macules with central blistering. She has painful erosions of the lips, oral mucosa, and conjunctivae, and gentle lateral pressure on the skin causes the epidermis to slough. About 8% of her body surface area is affected.\n\n**[IMAGE: photograph of dusky targetoid macules with flaccid bullae and epidermal detachment, plus hemorrhagic crusting of the lips]**",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Stevens-Johnson syndrome",
      "Staphylococcal scalded skin syndrome",
      "Pemphigus vulgaris",
      "Bullous pemphigoid",
      "Erythema multiforme minor"
    ],
    "answer": 0,
    "exp": "A drug (here lamotrigine) started days to weeks earlier, followed by fever, painful dusky targetoid lesions with epidermal detachment, mucosal erosions at two or more sites, and a positive Nikolsky sign, indicates Stevens-Johnson syndrome (detachment under 10% of body surface area). It is a severe cutaneous adverse reaction driven by keratinocyte apoptosis, and stopping the offending drug plus supportive care is critical. Detachment over 30% defines toxic epidermal necrolysis on the same spectrum.",
    "why": [
      "Correct: a culprit drug followed by fever, targetoid lesions with epidermal detachment, prominent mucosal erosions, and a positive Nikolsky sign defines Stevens-Johnson syndrome.",
      "Staphylococcal scalded skin syndrome spares the mucous membranes and splits the superficial epidermis via exfoliative toxin, mainly in young children, unlike this mucosal-predominant drug reaction.",
      "Pemphigus vulgaris causes chronic flaccid bullae and mucosal erosions from desmoglein autoantibodies, not an acute drug-triggered eruption with targetoid lesions and fever.",
      "Bullous pemphigoid causes tense subepidermal blisters with a negative Nikolsky sign in older adults and generally spares mucosa.",
      "Erythema multiforme minor is typically an infection-triggered (herpes) eruption of targetoid lesions with little or no mucosal involvement and no widespread epidermal detachment."
    ]
  },
  {
    "id": "s1-0263",
    "system": "Musculoskeletal / Skin",
    "discipline": "Immunology",
    "topic": "Sjogren syndrome",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 55-year-old woman reports a persistent gritty, dry sensation in both eyes and a dry mouth that makes swallowing dry food difficult and has led to multiple new dental cavities. She has bilateral parotid gland enlargement. Schirmer testing shows reduced tear production.\n\n| Test | Value | Reference |\n|---|---|---|\n| Anti-Ro (SSA) antibody | positive | negative |\n| Anti-La (SSB) antibody | positive | negative |\n| Antinuclear antibody | positive | negative |\n| Minor salivary gland biopsy | lymphocytic infiltrate | none |",
    "lead": "Which best explains her condition?",
    "options": [
      "Deposition of amyloid protein in exocrine glands",
      "Autoimmune lymphocytic destruction of exocrine glands",
      "Noncaseating granulomatous infiltration of the glands",
      "Fibrous replacement of skin and internal organs from excess collagen",
      "IgE-mediated mast cell degranulation in the glands"
    ],
    "answer": 1,
    "exp": "Keratoconjunctivitis sicca and xerostomia with parotid enlargement, positive anti-Ro/SSA and anti-La/SSB antibodies, and a lymphocytic infiltrate on salivary gland biopsy indicate Sjogren syndrome. Autoreactive lymphocytes infiltrate and destroy the lacrimal and salivary glands, causing the sicca symptoms and dental caries. Patients carry an increased long-term risk of B-cell (MALT) lymphoma.",
    "why": [
      "Amyloid deposition can enlarge glands but does not produce the specific anti-Ro/anti-La antibodies and focal lymphocytic sialadenitis seen here.",
      "Correct: autoimmune lymphocytic infiltration destroys the lacrimal and salivary glands, producing sicca symptoms with anti-Ro/SSA and anti-La/SSB antibodies in Sjogren syndrome.",
      "Noncaseating granulomas describe sarcoidosis, which can cause parotid enlargement but not the anti-Ro/anti-La serology and focal lymphocytic sialadenitis of Sjogren syndrome.",
      "Excess collagen deposition describes systemic sclerosis with skin tightening and Raynaud phenomenon, not primary sicca with these autoantibodies.",
      "IgE-mediated mast cell degranulation causes allergic or anaphylactic reactions, not chronic autoimmune destruction of exocrine glands."
    ]
  },
  {
    "id": "s1-0264",
    "system": "Musculoskeletal / Skin",
    "discipline": "Pathophysiology",
    "topic": "Acanthosis nigricans (insulin resistance)",
    "difficulty": "easy",
    "anchor": "image",
    "vignette": "A 15-year-old boy with obesity is noted to have symmetric, velvety, hyperpigmented thickening of the skin over the back of his neck and in both axillae, along with several small skin tags. The changes have developed gradually and are not itchy or painful. His fasting glucose is at the upper end of normal and his family has a strong history of type 2 diabetes.\n\n**[IMAGE: photograph of velvety, hyperpigmented, thickened plaques in the posterior neck folds with adjacent skin tags]**",
    "lead": "Which best explains this skin finding?",
    "options": [
      "Chronic sun exposure causing melanocyte proliferation",
      "A superficial dermatophyte (fungal) infection",
      "Insulin resistance stimulating keratinocyte and fibroblast growth",
      "Excess adrenocorticotropic hormone stimulating melanocytes",
      "Postinflammatory hyperpigmentation from prior dermatitis"
    ],
    "answer": 2,
    "exp": "Velvety, hyperpigmented, thickened plaques in the flexural areas (neck and axillae) with skin tags in an obese adolescent indicate acanthosis nigricans. Hyperinsulinemia from insulin resistance stimulates keratinocyte and dermal fibroblast proliferation through insulin-like growth factor receptors, producing the epidermal thickening. It is a cutaneous marker of insulin resistance, though it can rarely be paraneoplastic (e.g., gastric adenocarcinoma) in older adults.",
    "why": [
      "Chronic sun exposure causes photodamage and lentigines on sun-exposed skin, not velvety flexural plaques with skin tags.",
      "A dermatophyte infection produces scaly, often itchy annular lesions, not the smooth velvety hyperpigmentation of flexural folds.",
      "Correct: hyperinsulinemia from insulin resistance drives keratinocyte and fibroblast proliferation, producing the velvety flexural hyperpigmentation of acanthosis nigricans.",
      "Excess ACTH (as in Addison disease or ectopic ACTH) causes generalized or mucosal hyperpigmentation, not localized velvety flexural plaques with skin tags.",
      "Postinflammatory hyperpigmentation follows a prior inflammatory rash and lacks the velvety thickening and characteristic flexural distribution seen here."
    ]
  },
  {
    "id": "s1-0265",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Subacute (de Quervain) granulomatous thyroiditis",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 42-year-old woman develops a tender, painful anterior neck with pain radiating to the jaw and ears two weeks after a viral upper respiratory illness. She has low-grade fever, palpitations, heat intolerance, and tremor. The thyroid is firm and exquisitely tender to palpation.\n\n| Test | Value | Reference |\n|---|---|---|\n| TSH | low | 0.4-4.0 mIU/L |\n| Free T4 | high | normal |\n| Erythrocyte sedimentation rate | markedly elevated | 0-20 mm/hr |\n| Radioactive iodine uptake | low | normal |",
    "lead": "Which best explains her presentation?",
    "options": [
      "Autoantibodies stimulating the TSH receptor",
      "Autoimmune lymphocytic destruction with antithyroid peroxidase antibodies",
      "An autonomously functioning toxic adenoma",
      "Granulomatous inflammation following a viral infection",
      "Iodine-induced excess thyroid hormone synthesis"
    ],
    "answer": 3,
    "exp": "A painful, tender thyroid after a viral illness with transient hyperthyroidism, a high ESR, and characteristically low radioactive iodine uptake indicates subacute (de Quervain) granulomatous thyroiditis. Inflammatory destruction of follicles releases preformed hormone, causing hyperthyroid symptoms while new hormone synthesis and iodine trapping are suppressed (low uptake). It is typically self-limited, often passing through a transient hypothyroid phase before recovery, and is managed with NSAIDs or corticosteroids.",
    "why": [
      "TSH-receptor-stimulating antibodies cause Graves disease, which produces a nontender goiter with high radioactive iodine uptake, not a painful gland with low uptake.",
      "Antithyroid peroxidase-mediated lymphocytic destruction describes Hashimoto thyroiditis, which causes a nontender gland and hypothyroidism, not painful transient thyrotoxicosis.",
      "A toxic adenoma causes hyperthyroidism with a focal area of high uptake on scan, not a diffusely painful gland with low uptake and a high ESR.",
      "Correct: post-viral granulomatous inflammation releases preformed hormone and suppresses iodine uptake, producing the painful, tender thyroid and transient thyrotoxicosis of subacute (de Quervain) thyroiditis.",
      "Iodine-induced hyperthyroidism (Jod-Basedow) follows an iodine load and does not cause a painful, tender gland with a markedly elevated ESR."
    ]
  },
  {
    "id": "s1-0266",
    "system": "Reproductive & Endocrine",
    "discipline": "Anatomy",
    "topic": "Testicular torsion",
    "difficulty": "easy",
    "anchor": null,
    "vignette": "A 15-year-old boy awakens with sudden, severe left scrotal pain and vomiting. On examination the left testis is exquisitely tender, elevated, and lies in a horizontal position, and the cremasteric reflex is absent on that side. Elevating the testis does not relieve the pain. There is no dysuria, fever, or urethral discharge.",
    "lead": "Which is the most appropriate initial understanding and action?",
    "options": [
      "Epididymitis; treat empirically with antibiotics",
      "Orchitis from mumps; provide supportive care",
      "Indirect inguinal hernia; arrange elective repair",
      "Varicocele; reassure and observe",
      "Testicular torsion; obtain urgent urologic surgical exploration"
    ],
    "answer": 4,
    "exp": "Sudden severe testicular pain with a high-riding, horizontally oriented testis, an absent cremasteric reflex, and no relief on elevation (negative Prehn sign) indicates testicular torsion. The spermatic cord twists and cuts off blood supply, threatening the testis within hours. It is a surgical emergency requiring immediate exploration and detorsion (with orchidopexy), and imaging should not delay treatment when suspicion is high.",
    "why": [
      "Epididymitis causes more gradual pain with dysuria, an intact cremasteric reflex, and relief on elevation, unlike this acute torsion presentation.",
      "Mumps orchitis follows parotitis with testicular swelling but does not cause a high-riding testis with an absent cremasteric reflex requiring emergency surgery.",
      "An inguinal hernia produces a groin bulge that may be reducible, not an acutely ischemic, tender, high-riding testis.",
      "A varicocele is a painless \"bag of worms\" scrotal swelling, not sudden severe pain with an absent cremasteric reflex.",
      "Correct: sudden severe pain with a high-riding horizontal testis, absent cremasteric reflex, and no relief on elevation indicates testicular torsion, requiring urgent surgical exploration."
    ]
  },
  {
    "id": "s1-0267",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Benign prostatic hyperplasia",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 68-year-old man reports urinary frequency, nocturia, a weak and intermittent stream, hesitancy, and a sense of incomplete bladder emptying over the past two years. Digital rectal examination reveals a smooth, symmetrically enlarged, rubbery prostate without nodules.\n\n| Test | Value | Reference |\n|---|---|---|\n| Prostate-specific antigen | 3.8 ng/mL | < 4 |\n| Urinalysis | no blood, no infection | normal |\n| Post-void residual volume | elevated | low |",
    "lead": "Which best explains his symptoms?",
    "options": [
      "Nodular hyperplasia of the periurethral (transition) zone driven by dihydrotestosterone",
      "Adenocarcinoma arising in the peripheral zone",
      "Acute bacterial prostatitis",
      "A neurogenic bladder from spinal cord disease",
      "Urethral stricture from prior instrumentation"
    ],
    "answer": 0,
    "exp": "Progressive lower urinary tract symptoms with a smoothly and symmetrically enlarged, nontender prostate in an older man indicate benign prostatic hyperplasia. Hyperplasia of the periurethral (transition) zone, driven by dihydrotestosterone, compresses the urethra and obstructs outflow, producing hesitancy, weak stream, and incomplete emptying. It is treated with alpha-blockers and 5-alpha-reductase inhibitors.",
    "why": [
      "Correct: dihydrotestosterone-driven nodular hyperplasia of the transition (periurethral) zone compresses the urethra, causing the obstructive symptoms of benign prostatic hyperplasia.",
      "Prostate adenocarcinoma arises in the peripheral zone and produces a hard, nodular gland, not the smooth symmetric enlargement described.",
      "Acute bacterial prostatitis causes fever and an exquisitely tender boggy prostate with pyuria, not chronic obstructive symptoms with a normal urinalysis.",
      "A neurogenic bladder from cord disease would show neurologic deficits and abnormal detrusor function rather than a symmetrically enlarged obstructing prostate.",
      "A urethral stricture typically follows instrumentation or infection and causes a normal-sized prostate with obstruction localized to the stricture."
    ]
  },
  {
    "id": "s1-0268",
    "system": "Reproductive & Endocrine",
    "discipline": "Physiology",
    "topic": "Kallmann syndrome (GnRH neuron migration failure)",
    "difficulty": "hard",
    "anchor": "lab",
    "vignette": "An 18-year-old young man has not undergone puberty. He has small, firm testes, no facial or pubic hair, a tall eunuchoid build, and a high-pitched voice. On further questioning, he has never been able to smell foods or flowers. There is no history of chronic illness.\n\n| Test | Value | Reference |\n|---|---|---|\n| Luteinizing hormone | low | age-adjusted normal |\n| Follicle-stimulating hormone | low | age-adjusted normal |\n| Testosterone | low | adult male normal |\n| Sense of smell | absent | intact |",
    "lead": "Which best explains this presentation?",
    "options": [
      "Primary testicular failure with elevated gonadotropins",
      "Failure of GnRH neurons to migrate from the olfactory placode",
      "An extra X chromosome causing seminiferous tubule dysgenesis",
      "Constitutional delay of growth and puberty",
      "A prolactin-secreting pituitary adenoma"
    ],
    "answer": 1,
    "exp": "Delayed puberty with low testosterone and inappropriately low LH and FSH (hypogonadotropic hypogonadism) combined with anosmia indicates Kallmann syndrome. During development, GnRH-secreting neurons and olfactory neurons migrate together from the olfactory placode; failed migration leaves the hypothalamus unable to secrete GnRH and produces the loss of smell. The result is deficient gonadotropin and sex-steroid production.",
    "why": [
      "Primary testicular failure raises LH and FSH through loss of negative feedback, the opposite of the low gonadotropins seen here.",
      "Correct: failed migration of GnRH neurons from the olfactory placode causes hypogonadotropic hypogonadism with anosmia, defining Kallmann syndrome.",
      "An extra X chromosome (Klinefelter syndrome) causes primary hypogonadism with elevated gonadotropins and preserved smell, not low LH and FSH with anosmia.",
      "Constitutional delay is a temporary lag in an otherwise normal axis and does not cause anosmia or permanent gonadotropin deficiency.",
      "A prolactinoma suppresses GnRH via hyperprolactinemia but causes galactorrhea and headaches, not congenital anosmia with lifelong absent puberty."
    ]
  },
  {
    "id": "s1-0269",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Insulinoma",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 45-year-old woman has recurrent episodes of confusion, sweating, tremor, and palpitations, usually before meals or after fasting, that resolve quickly when she eats candy. During a supervised 72-hour fast she becomes symptomatic, and blood is drawn at the time of hypoglycemia.\n\n| Test | Value | Reference |\n|---|---|---|\n| Plasma glucose | 38 mg/dL | 70-100 |\n| Insulin | high | low during hypoglycemia |\n| C-peptide | high | low during hypoglycemia |\n| Proinsulin | high | low |\n| Sulfonylurea screen | negative | negative |",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Surreptitious exogenous insulin administration",
      "Covert sulfonylurea ingestion",
      "An insulin-secreting pancreatic beta-cell tumor",
      "Primary adrenal insufficiency",
      "Reactive (postprandial) hypoglycemia"
    ],
    "answer": 2,
    "exp": "Fasting hypoglycemia with neuroglycopenic and adrenergic symptoms relieved by glucose (Whipple triad), together with inappropriately high insulin, C-peptide, and proinsulin and a negative sulfonylurea screen, indicates an insulinoma. This beta-cell tumor of the pancreatic islets autonomously secretes insulin; the elevated C-peptide confirms endogenous production, distinguishing it from exogenous insulin.",
    "why": [
      "Exogenous insulin causes hypoglycemia with high insulin but suppressed C-peptide, since injected insulin lacks C-peptide.",
      "Sulfonylureas stimulate endogenous insulin and raise C-peptide, but the negative drug screen excludes this mimic of insulinoma.",
      "Correct: an insulin-secreting beta-cell tumor produces fasting hypoglycemia with high insulin, C-peptide, and proinsulin and a negative sulfonylurea screen, defining an insulinoma.",
      "Adrenal insufficiency can cause hypoglycemia but with low insulin and C-peptide plus hypotension and hyperpigmentation, not hyperinsulinemia.",
      "Reactive hypoglycemia occurs after meals, not during a prolonged fast, and is not associated with inappropriately elevated fasting insulin and C-peptide."
    ]
  },
  {
    "id": "s1-0270",
    "system": "Reproductive & Endocrine",
    "discipline": "Pathology",
    "topic": "Sheehan syndrome (postpartum pituitary necrosis)",
    "difficulty": "hard",
    "anchor": null,
    "vignette": "A 31-year-old woman had a complicated delivery with severe postpartum hemorrhage requiring transfusion and a period of profound hypotension. Over the following weeks she is unable to breastfeed because her milk never comes in, her menses do not return, and she reports progressive fatigue, cold intolerance, and loss of pubic and axillary hair. She also feels dizzy on standing.",
    "lead": "Which best explains her condition?",
    "options": [
      "Primary hypothyroidism from autoimmune thyroiditis",
      "Primary adrenal insufficiency from autoimmune adrenalitis",
      "Autoimmune lymphocytic destruction of the pituitary",
      "Ischemic necrosis of the anterior pituitary from postpartum hemorrhage",
      "Excess prolactin from a lactotroph adenoma"
    ],
    "answer": 3,
    "exp": "Failure of postpartum lactation, amenorrhea, and features of combined hormone deficiency (hypothyroidism, adrenal insufficiency, loss of secondary sexual hair) after a delivery complicated by severe hemorrhage and hypotension indicate Sheehan syndrome. The pituitary enlarges during pregnancy and is vulnerable to ischemic infarction when hemorrhage causes hypotension, producing panhypopituitarism. Failure to lactate (low prolactin) is often the earliest clue.",
    "why": [
      "Primary hypothyroidism explains fatigue and cold intolerance but not the failure to lactate, amenorrhea, and loss of sexual hair from multiple pituitary hormone deficits.",
      "Primary adrenal insufficiency causes hyperpigmentation and salt craving with high ACTH, not the panhypopituitary picture with agalactorrhea after obstetric hemorrhage.",
      "Autoimmune (lymphocytic) hypophysitis can cause postpartum hypopituitarism but is not precipitated by hemorrhagic hypotension as in this classic ischemic scenario.",
      "Correct: ischemic necrosis of the enlarged anterior pituitary after postpartum hemorrhage and hypotension causes panhypopituitarism (Sheehan syndrome) with failed lactation and secondary hormone deficiencies.",
      "A prolactinoma raises prolactin and would not cause failed lactation; it also would not follow an episode of postpartum hemorrhagic shock."
    ]
  },
  {
    "id": "s1-0271",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Biostatistics",
    "topic": "Odds ratio interpretation",
    "difficulty": "moderate",
    "anchor": "table",
    "vignette": "Investigators conduct a case-control study to examine the association between a chemical exposure and a rare cancer. They enroll patients with the cancer (cases) and cancer-free controls and ascertain prior exposure in each group.\n\n| Group | Exposed | Not exposed |\n|---|---|---|\n| Cases | 90 | 30 |\n| Controls | 30 | 90 |",
    "lead": "Which value and interpretation best summarize the association?",
    "options": [
      "A relative risk of 3, directly calculable from these data",
      "An odds ratio of 1, indicating no association",
      "An attributable risk of 60%",
      "A number needed to treat of 3",
      "An odds ratio of approximately 9, indicating higher odds of exposure among cases"
    ],
    "answer": 4,
    "exp": "In a case-control study, the appropriate measure of association is the odds ratio, calculated as (a x d) / (b x c). Here that is (90 x 90) / (30 x 30) = 8100 / 900 = 9, meaning the odds of prior exposure are about nine times higher among cases than controls. Because subjects are sampled by disease status, incidence and thus relative risk cannot be directly computed, though the odds ratio approximates the relative risk for a rare disease.",
    "why": [
      "Relative risk requires knowing incidence in exposed and unexposed groups, which a case-control design cannot provide because sampling is by disease status.",
      "An odds ratio of 1 would mean no association, but the cross-product here yields 9, indicating a strong positive association.",
      "Attributable risk is a difference in incidence between exposed and unexposed, which cannot be derived from case-control counts.",
      "Number needed to treat applies to interventions in trials, not to exposure-disease association in an observational case-control study.",
      "Correct: the odds ratio is (90 x 90)/(30 x 30) = 9, indicating the odds of exposure are about nine times higher among cases than controls."
    ]
  },
  {
    "id": "s1-0272",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Biostatistics",
    "topic": "Intention-to-treat analysis",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "In a randomized controlled trial comparing a new drug with placebo, some participants assigned to the drug stop taking it because of side effects, and a few placebo participants obtain the active drug elsewhere. The statisticians decide to analyze every participant in the group to which they were originally randomized, regardless of the treatment they actually received or their adherence.",
    "lead": "Which analytic approach does this describe, and why is it preferred?",
    "options": [
      "Intention-to-treat analysis, which preserves the benefits of randomization and reflects real-world effectiveness",
      "Per-protocol analysis, which includes only fully adherent participants",
      "As-treated analysis, which groups participants by the treatment actually received",
      "Subgroup analysis restricted to participants without side effects",
      "Exclusion of all nonadherent participants to reduce noise"
    ],
    "answer": 0,
    "exp": "Analyzing participants according to their originally assigned group, regardless of adherence or crossover, is intention-to-treat analysis. It preserves the prognostic balance created by randomization, avoids bias from nonrandom dropout or crossover, and gives a conservative, real-world estimate of effectiveness. Per-protocol and as-treated analyses break randomization and can introduce selection bias.",
    "why": [
      "Correct: keeping participants in their randomized groups regardless of adherence is intention-to-treat analysis, which preserves randomization and estimates real-world effectiveness.",
      "Per-protocol analysis includes only adherent participants and can bias results by breaking the randomized comparison.",
      "As-treated analysis groups by treatment actually received, which discards randomization and reintroduces confounding.",
      "Restricting to participants without side effects is a subgroup analysis that selects a nonrandom subset and biases the estimate.",
      "Excluding nonadherent participants removes randomization protection and can distort the treatment effect."
    ]
  },
  {
    "id": "s1-0273",
    "system": "Biostatistics & Epidemiology",
    "discipline": "Biostatistics",
    "topic": "Regression to the mean",
    "difficulty": "hard",
    "anchor": null,
    "vignette": "Researchers screen thousands of people and enroll only those with the highest 5% of blood pressure readings into a study of a new relaxation technique. Several weeks later, without any effective intervention, the group's average blood pressure has fallen noticeably. The investigators conclude the technique lowered blood pressure, but a statistician cautions that the drop was expected even with no true effect.",
    "lead": "Which phenomenon best explains the apparent improvement?",
    "options": [
      "The placebo effect",
      "Regression to the mean",
      "The Hawthorne effect",
      "Lead-time bias",
      "Systematic measurement error in the blood pressure device"
    ],
    "answer": 1,
    "exp": "When subjects are selected because of an extreme measurement, repeat measurements tend to fall closer to the population average simply because of random variation, a phenomenon called regression to the mean. Because only the highest readings were selected, part of each value reflected transient upward fluctuation that is not repeated on re-measurement, producing an apparent improvement independent of any treatment. A concurrent control group is needed to distinguish a true effect.",
    "why": [
      "The placebo effect is a real physiologic or perceived response to an inert intervention, but here the drop is a statistical artifact of selecting extreme values.",
      "Correct: selecting subjects with extreme readings makes subsequent measurements move toward the mean, so blood pressure falls even without a true effect (regression to the mean).",
      "The Hawthorne effect is a change in behavior from being observed, which would not specifically explain a fall from extreme baseline values.",
      "Lead-time bias applies to screening and survival time, not to repeated measurements regressing toward the mean.",
      "Systematic measurement error would bias all readings consistently, not produce a decline concentrated in an extreme-selected group."
    ]
  },
  {
    "id": "s1-0274",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Confidentiality and duty to protect third parties (driving safety)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 58-year-old man with poorly controlled epilepsy has had two breakthrough seizures in the past month, including one while awake. He works as a long-haul truck driver and states that he intends to keep driving because he cannot afford time off. The physician counsels him about the danger and the need to stop driving until his seizures are controlled, but he refuses and plans to drive that afternoon.",
    "lead": "Which is the most appropriate action?",
    "options": [
      "Maintain strict confidentiality and take no further action",
      "Inform only the patient's family and let them intervene",
      "Notify the appropriate driving/licensing authority in accordance with public-safety obligations",
      "Immediately discharge the patient from the practice",
      "Secretly discontinue his antiepileptic prescription to prevent driving"
    ],
    "answer": 2,
    "exp": "When a patient poses a serious, foreseeable risk to identifiable third parties or the public, the physician's duty to protect others can override confidentiality. An uncontrolled seizure disorder in a commercial driver who intends to keep driving is such a situation; after counseling the patient, the physician should report to the appropriate driving or licensing authority as permitted or required by law. This balances patient confidentiality against the safety of others on the road.",
    "why": [
      "Maintaining strict confidentiality ignores a serious, foreseeable threat to public safety that ethically and legally permits disclosure.",
      "Telling only the family does not discharge the physician's responsibility to prevent harm and improperly shifts the burden without protecting the public.",
      "Correct: an uncontrolled seizure disorder in a driver who intends to keep driving justifies notifying the driving/licensing authority to protect third parties, overriding confidentiality after counseling.",
      "Discharging the patient abandons him and does nothing to address the immediate public-safety risk.",
      "Covertly stopping his medication is deceptive, harmful, and unethical, and would worsen his seizure control."
    ]
  },
  {
    "id": "s1-0275",
    "system": "Social Sciences / Ethics",
    "discipline": "Ethics",
    "topic": "Medical futility and non-beneficial treatment",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "An 82-year-old man with widely metastatic cancer is dying of multi-organ failure in the intensive care unit despite maximal support. His family insists that everything, including cardiopulmonary resuscitation and additional aggressive interventions, be continued, believing a miracle is possible. The care team agrees these interventions cannot restore organ function or meaningfully prolong life and would only add suffering.",
    "lead": "Which is the most appropriate course of action?",
    "options": [
      "Comply fully with all requested interventions because the family's wishes are absolute",
      "Unilaterally stop all care immediately without informing the family",
      "Transfer the patient to another hospital to avoid the conflict",
      "Meet with the family to clarify prognosis and goals of care, explaining that non-beneficial interventions are not obligatory",
      "Obtain a court order before limiting any intervention"
    ],
    "answer": 3,
    "exp": "Physicians are not ethically obligated to provide interventions that cannot achieve a meaningful physiologic benefit, and offering such treatment can violate nonmaleficence. The appropriate response is not unilateral withdrawal but a compassionate goals-of-care discussion that clarifies the poor prognosis, addresses the family's hopes and values, and redirects care toward comfort. Ethics consultation and second opinions can help when disagreement persists.",
    "why": [
      "A family's wishes are important but do not obligate physicians to provide interventions that offer no meaningful benefit and only prolong suffering.",
      "Unilaterally stopping care without communication is unethical and abandons the shared decision-making process with the family.",
      "Transferring the patient to avoid the conflict abandons the family and sidesteps the needed goals-of-care conversation.",
      "Correct: the team should hold a compassionate family meeting to clarify prognosis and goals of care and explain that non-beneficial interventions are not ethically obligatory.",
      "A court order is a last resort for intractable disputes, not the first step before an honest goals-of-care discussion."
    ]
  },
  {
    "id": "s1-0276",
    "system": "General Principles",
    "discipline": "Biochemistry",
    "topic": "Maple syrup urine disease (branched-chain ketoacid dehydrogenase deficiency)",
    "difficulty": "moderate",
    "anchor": null,
    "vignette": "A 6-day-old term infant is brought in for poor feeding, vomiting, and increasing lethargy that has progressed to episodes of back-arching rigidity. The parents, who are first cousins, note that the child's urine and cerumen have a sweet, caramel-like odor. Plasma amino acid analysis shows markedly elevated leucine, isoleucine, and valine, and the child is placed on a diet restricted in these amino acids.",
    "lead": "A deficiency of which enzyme best explains this presentation?",
    "options": [
      "Branched-chain alpha-ketoacid dehydrogenase, impairing catabolism of leucine, isoleucine, and valine",
      "Phenylalanine hydroxylase, impairing conversion of phenylalanine to tyrosine",
      "Homogentisate oxidase, impairing tyrosine degradation",
      "Cystathionine beta-synthase, impairing homocysteine metabolism",
      "Galactose-1-phosphate uridyltransferase, impairing galactose metabolism"
    ],
    "answer": 0,
    "exp": "Neonatal encephalopathy with feeding difficulty, opisthotonic posturing, a sweet maple-syrup odor of urine and cerumen, and elevated branched-chain amino acids indicate maple syrup urine disease. Deficiency of branched-chain alpha-ketoacid dehydrogenase blocks oxidative decarboxylation of the ketoacids of leucine, isoleucine, and valine, so these amino acids and their neurotoxic ketoacids accumulate. Treatment is lifelong dietary restriction of branched-chain amino acids.",
    "why": [
      "Correct: deficiency of branched-chain alpha-ketoacid dehydrogenase blocks catabolism of leucine, isoleucine, and valine, causing the buildup and sweet-smelling urine of maple syrup urine disease.",
      "Phenylalanine hydroxylase deficiency causes phenylketonuria with a musty odor and elevated phenylalanine, not elevated branched-chain amino acids.",
      "Homogentisate oxidase deficiency causes alkaptonuria with urine that darkens on standing, not neonatal encephalopathy with a maple-syrup odor.",
      "Cystathionine beta-synthase deficiency causes homocystinuria with lens dislocation and thrombosis, not accumulation of branched-chain amino acids.",
      "Galactose-1-phosphate uridyltransferase deficiency causes classic galactosemia with cataracts and hepatomegaly after milk feeding, not elevated branched-chain amino acids."
    ]
  },
  {
    "id": "s1-0277",
    "system": "General Principles",
    "discipline": "Pharmacology",
    "topic": "Loading dose and volume of distribution",
    "difficulty": "easy",
    "anchor": "table",
    "vignette": "A 70 kg man with a serious infection needs a drug brought rapidly to a therapeutic plasma concentration. The team wants to give a single intravenous loading dose so that the target concentration is reached immediately rather than waiting several half-lives on a maintenance regimen.\n\n| Parameter | Value |\n|---|---|\n| Target plasma concentration | 4 mg/L |\n| Volume of distribution | 35 L |\n| Clearance | 5 L/hr |\n| Bioavailability (IV) | 100% |",
    "lead": "Which pharmacokinetic parameter is used to calculate the loading dose needed to reach the target plasma concentration?",
    "options": [
      "Clearance",
      "Elimination half-life",
      "Volume of distribution",
      "Elimination rate constant",
      "Renal excretion fraction"
    ],
    "answer": 2,
    "exp": "The loading dose is the amount needed to fill the apparent space the drug distributes into, so it equals the target plasma concentration multiplied by the volume of distribution (divided by bioavailability). Here that is 4 mg/L x 35 L = 140 mg. Clearance instead determines the maintenance dose rate needed to keep concentrations at steady state; the loading dose is independent of clearance.",
    "why": [
      "Clearance determines the maintenance dosing rate at steady state, not the loading dose needed to fill the distribution volume.",
      "Half-life derives from volume of distribution and clearance and governs time to steady state, not the loading dose itself.",
      "Correct: the loading dose equals target concentration times the volume of distribution (adjusted for bioavailability), so volume of distribution is the key parameter.",
      "The elimination rate constant describes the fractional rate of drug removal per unit time, relevant to elimination, not to sizing the loading dose.",
      "The renal excretion fraction describes a route of elimination and does not determine the loading dose required to reach the target concentration."
    ]
  },
  {
    "id": "s1-0278",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Hematology",
    "topic": "Paroxysmal nocturnal hemoglobinuria",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 33-year-old man reports months of fatigue and episodes of dark, cola-colored urine that are most noticeable in the morning. He was recently hospitalized for an unusual abdominal vein thrombosis. He is mildly jaundiced.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 9.2 g/dL | 13.5-17.5 |\n| Lactate dehydrogenase | markedly elevated | 100-190 |\n| Haptoglobin | undetectable | 30-200 |\n| Direct antiglobulin (Coombs) test | negative | negative |\n| Flow cytometry | absent CD55 and CD59 on red cells | present |",
    "lead": "Which best explains his condition?",
    "options": [
      "Warm autoantibodies against red cell membrane antigens",
      "Acquired PIGA mutation causing loss of GPI-anchored complement regulators, with complement-mediated intravascular hemolysis",
      "Inherited spectrin and ankyrin defect of the red cell membrane skeleton",
      "Deficiency of the metalloprotease ADAMTS13",
      "X-linked deficiency of glucose-6-phosphate dehydrogenase"
    ],
    "answer": 1,
    "exp": "Intravascular hemolysis (markedly elevated LDH, undetectable haptoglobin, hemoglobinuria) with a negative direct antiglobulin test, thrombosis at an unusual site, and flow cytometry showing loss of CD55 and CD59 indicate paroxysmal nocturnal hemoglobinuria. An acquired PIGA mutation in a hematopoietic stem cell blocks synthesis of the GPI anchor that tethers the complement inhibitors CD55 and CD59, leaving red cells vulnerable to complement-mediated lysis and predisposing to thrombosis.",
    "why": [
      "Warm autoimmune hemolytic anemia produces a positive direct antiglobulin test and extravascular hemolysis, not the Coombs-negative intravascular hemolysis with absent CD55/CD59 seen here.",
      "Correct: an acquired PIGA mutation removes the GPI-anchored complement regulators CD55 and CD59, causing complement-mediated intravascular hemolysis, hemoglobinuria, and thrombosis.",
      "Hereditary spherocytosis is an inherited membrane-skeleton defect causing extravascular hemolysis and spherocytes with a normal CD55/CD59, not this acquired flow-cytometry finding.",
      "ADAMTS13 deficiency causes thrombotic thrombocytopenic purpura with schistocytes and thrombocytopenia, not loss of GPI-anchored proteins.",
      "G6PD deficiency causes episodic oxidant-triggered hemolysis with bite cells and Heinz bodies, not the loss of CD55 and CD59 defining this disorder."
    ]
  },
  {
    "id": "s1-0279",
    "system": "Immune / Blood & Lymphoreticular",
    "discipline": "Immunology",
    "topic": "Wiskott-Aldrich syndrome",
    "difficulty": "moderate",
    "anchor": "lab",
    "vignette": "A 10-month-old boy has had recurrent ear and sinus infections with encapsulated organisms, a chronic itchy eczematous rash, and easy bruising with scattered petechiae and bloody diarrhea. His maternal uncle died young of bleeding and infections.\n\n| Test | Value | Reference |\n|---|---|---|\n| Platelet count | 32,000/mcL | 150,000-400,000 |\n| Mean platelet volume | small | normal |\n| Serum IgM | low | normal |\n| Serum IgE | elevated | normal |",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Chronic granulomatous disease",
      "X-linked (Bruton) agammaglobulinemia",
      "Severe combined immunodeficiency",
      "Wiskott-Aldrich syndrome",
      "Chediak-Higashi syndrome"
    ],
    "answer": 3,
    "exp": "The triad of eczema, thrombocytopenia with small platelets, and recurrent infections in a boy with an X-linked family history indicates Wiskott-Aldrich syndrome. A mutation in the WAS gene disrupts the actin-cytoskeleton regulator WASP in hematopoietic cells, impairing platelet formation and immune-cell function; the immunoglobulin pattern classically shows low IgM with elevated IgE and IgA. Definitive treatment is hematopoietic stem cell transplantation.",
    "why": [
      "Chronic granulomatous disease causes recurrent catalase-positive infections and granulomas from an NADPH oxidase defect, not thrombocytopenia with small platelets and eczema.",
      "Bruton agammaglobulinemia causes recurrent infections after 6 months with absent B cells and low all immunoglobulins, not the eczema-thrombocytopenia triad.",
      "Severe combined immunodeficiency presents in early infancy with severe viral, fungal, and opportunistic infections and failure to thrive, not the specific triad with small platelets.",
      "Correct: eczema, thrombocytopenia with small platelets, recurrent infections, low IgM, and elevated IgE in an X-linked pattern define Wiskott-Aldrich syndrome from a WAS gene defect.",
      "Chediak-Higashi syndrome causes partial albinism, giant granules in leukocytes, and neuropathy, not thrombocytopenia with eczema and this immunoglobulin pattern."
    ]
  },
  {
    "id": "s1-0280",
    "system": "Multisystem",
    "discipline": "Pathology",
    "topic": "Tuberous sclerosis complex",
    "difficulty": "hard",
    "anchor": "image",
    "vignette": "A 2-year-old girl is evaluated for recurrent seizures that began in infancy as brief flexor spasms, along with delayed development. Examination reveals several hypopigmented ash-leaf macules on her trunk and a rough, raised plaque over her lower back. Echocardiography done in infancy had shown a cardiac mass that has since regressed, and renal ultrasound shows bilateral fat-containing masses.\n\n**[IMAGE: brain MRI showing calcified subependymal nodules along the lateral ventricles and several cortical tubers]**",
    "lead": "Which is the most likely diagnosis?",
    "options": [
      "Neurofibromatosis type 1",
      "Sturge-Weber syndrome",
      "Von Hippel-Lindau disease",
      "Neurofibromatosis type 2",
      "Tuberous sclerosis complex"
    ],
    "answer": 4,
    "exp": "Infantile spasms with developmental delay, ash-leaf hypopigmented macules, a shagreen patch, a regressing cardiac rhabdomyoma, renal angiomyolipomas, and subependymal nodules with cortical tubers indicate tuberous sclerosis complex. Autosomal dominant loss-of-function mutations in TSC1 (hamartin) or TSC2 (tuberin) disinhibit mTOR signaling, producing widespread benign hamartomas across the brain, skin, heart, and kidneys. mTOR inhibitors can shrink several of these lesions.",
    "why": [
      "Neurofibromatosis type 1 causes cafe-au-lait macules, neurofibromas, Lisch nodules, and optic gliomas, not ash-leaf spots with cardiac rhabdomyomas and cortical tubers.",
      "Sturge-Weber syndrome causes a facial port-wine stain with leptomeningeal angiomas and seizures, not renal angiomyolipomas and subependymal nodules.",
      "Von Hippel-Lindau disease causes hemangioblastomas, clear cell renal carcinoma, and pheochromocytoma, not ash-leaf macules and cardiac rhabdomyomas.",
      "Neurofibromatosis type 2 causes bilateral vestibular schwannomas and meningiomas, not the skin, cardiac, and renal hamartomas seen here.",
      "Correct: ash-leaf macules, a shagreen patch, cardiac rhabdomyoma, renal angiomyolipomas, and subependymal nodules with cortical tubers define tuberous sclerosis complex from a TSC1/TSC2 mutation."
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
