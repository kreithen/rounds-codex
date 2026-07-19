/*
 * Rounds Codex - USMLE Step 1 question bank, Batch 12 (5 items)
 * Final top-up batch bringing Step 1 to 280. All vignettes original; source used for facts only.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP1_B12 = [
  {
    id: "s1-0276",
    system: "General Principles",
    discipline: "Biochemistry",
    topic: "Maple syrup urine disease (branched-chain ketoacid dehydrogenase deficiency)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 6-day-old term infant is brought in for poor feeding, vomiting, and increasing lethargy that has progressed to episodes of back-arching rigidity. The parents, who are first cousins, note that the child's urine and cerumen have a sweet, caramel-like odor. Plasma amino acid analysis shows markedly elevated leucine, isoleucine, and valine, and the child is placed on a diet restricted in these amino acids.",
    lead: "A deficiency of which enzyme best explains this presentation?",
    options: [
      "Branched-chain alpha-ketoacid dehydrogenase, impairing catabolism of leucine, isoleucine, and valine",
      "Phenylalanine hydroxylase, impairing conversion of phenylalanine to tyrosine",
      "Homogentisate oxidase, impairing tyrosine degradation",
      "Cystathionine beta-synthase, impairing homocysteine metabolism",
      "Galactose-1-phosphate uridyltransferase, impairing galactose metabolism"
    ],
    answer: 0,
    exp: "Neonatal encephalopathy with feeding difficulty, opisthotonic posturing, a sweet maple-syrup odor of urine and cerumen, and elevated branched-chain amino acids indicate maple syrup urine disease. Deficiency of branched-chain alpha-ketoacid dehydrogenase blocks oxidative decarboxylation of the ketoacids of leucine, isoleucine, and valine, so these amino acids and their neurotoxic ketoacids accumulate. Treatment is lifelong dietary restriction of branched-chain amino acids.",
    why: [
      "Correct: deficiency of branched-chain alpha-ketoacid dehydrogenase blocks catabolism of leucine, isoleucine, and valine, causing the buildup and sweet-smelling urine of maple syrup urine disease.",
      "Phenylalanine hydroxylase deficiency causes phenylketonuria with a musty odor and elevated phenylalanine, not elevated branched-chain amino acids.",
      "Homogentisate oxidase deficiency causes alkaptonuria with urine that darkens on standing, not neonatal encephalopathy with a maple-syrup odor.",
      "Cystathionine beta-synthase deficiency causes homocystinuria with lens dislocation and thrombosis, not accumulation of branched-chain amino acids.",
      "Galactose-1-phosphate uridyltransferase deficiency causes classic galactosemia with cataracts and hepatomegaly after milk feeding, not elevated branched-chain amino acids."
    ]
  },
  {
    id: "s1-0277",
    system: "General Principles",
    discipline: "Pharmacology",
    topic: "Loading dose and volume of distribution",
    difficulty: "easy",
    anchor: "table",
    vignette: "A 70 kg man with a serious infection needs a drug brought rapidly to a therapeutic plasma concentration. The team wants to give a single intravenous loading dose so that the target concentration is reached immediately rather than waiting several half-lives on a maintenance regimen.\n\n| Parameter | Value |\n|---|---|\n| Target plasma concentration | 4 mg/L |\n| Volume of distribution | 35 L |\n| Clearance | 5 L/hr |\n| Bioavailability (IV) | 100% |",
    lead: "Which pharmacokinetic parameter is used to calculate the loading dose needed to reach the target plasma concentration?",
    options: [
      "Clearance",
      "Elimination half-life",
      "Volume of distribution",
      "Elimination rate constant",
      "Renal excretion fraction"
    ],
    answer: 2,
    exp: "The loading dose is the amount needed to fill the apparent space the drug distributes into, so it equals the target plasma concentration multiplied by the volume of distribution (divided by bioavailability). Here that is 4 mg/L x 35 L = 140 mg. Clearance instead determines the maintenance dose rate needed to keep concentrations at steady state; the loading dose is independent of clearance.",
    why: [
      "Clearance determines the maintenance dosing rate at steady state, not the loading dose needed to fill the distribution volume.",
      "Half-life derives from volume of distribution and clearance and governs time to steady state, not the loading dose itself.",
      "Correct: the loading dose equals target concentration times the volume of distribution (adjusted for bioavailability), so volume of distribution is the key parameter.",
      "The elimination rate constant describes the fractional rate of drug removal per unit time, relevant to elimination, not to sizing the loading dose.",
      "The renal excretion fraction describes a route of elimination and does not determine the loading dose required to reach the target concentration."
    ]
  },
  {
    id: "s1-0278",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Hematology",
    topic: "Paroxysmal nocturnal hemoglobinuria",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 33-year-old man reports months of fatigue and episodes of dark, cola-colored urine that are most noticeable in the morning. He was recently hospitalized for an unusual abdominal vein thrombosis. He is mildly jaundiced.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 9.2 g/dL | 13.5-17.5 |\n| Lactate dehydrogenase | markedly elevated | 100-190 |\n| Haptoglobin | undetectable | 30-200 |\n| Direct antiglobulin (Coombs) test | negative | negative |\n| Flow cytometry | absent CD55 and CD59 on red cells | present |",
    lead: "Which best explains his condition?",
    options: [
      "Warm autoantibodies against red cell membrane antigens",
      "Acquired PIGA mutation causing loss of GPI-anchored complement regulators, with complement-mediated intravascular hemolysis",
      "Inherited spectrin and ankyrin defect of the red cell membrane skeleton",
      "Deficiency of the metalloprotease ADAMTS13",
      "X-linked deficiency of glucose-6-phosphate dehydrogenase"
    ],
    answer: 1,
    exp: "Intravascular hemolysis (markedly elevated LDH, undetectable haptoglobin, hemoglobinuria) with a negative direct antiglobulin test, thrombosis at an unusual site, and flow cytometry showing loss of CD55 and CD59 indicate paroxysmal nocturnal hemoglobinuria. An acquired PIGA mutation in a hematopoietic stem cell blocks synthesis of the GPI anchor that tethers the complement inhibitors CD55 and CD59, leaving red cells vulnerable to complement-mediated lysis and predisposing to thrombosis.",
    why: [
      "Warm autoimmune hemolytic anemia produces a positive direct antiglobulin test and extravascular hemolysis, not the Coombs-negative intravascular hemolysis with absent CD55/CD59 seen here.",
      "Correct: an acquired PIGA mutation removes the GPI-anchored complement regulators CD55 and CD59, causing complement-mediated intravascular hemolysis, hemoglobinuria, and thrombosis.",
      "Hereditary spherocytosis is an inherited membrane-skeleton defect causing extravascular hemolysis and spherocytes with a normal CD55/CD59, not this acquired flow-cytometry finding.",
      "ADAMTS13 deficiency causes thrombotic thrombocytopenic purpura with schistocytes and thrombocytopenia, not loss of GPI-anchored proteins.",
      "G6PD deficiency causes episodic oxidant-triggered hemolysis with bite cells and Heinz bodies, not the loss of CD55 and CD59 defining this disorder."
    ]
  },
  {
    id: "s1-0279",
    system: "Immune / Blood & Lymphoreticular",
    discipline: "Immunology",
    topic: "Wiskott-Aldrich syndrome",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 10-month-old boy has had recurrent ear and sinus infections with encapsulated organisms, a chronic itchy eczematous rash, and easy bruising with scattered petechiae and bloody diarrhea. His maternal uncle died young of bleeding and infections.\n\n| Test | Value | Reference |\n|---|---|---|\n| Platelet count | 32,000/mcL | 150,000-400,000 |\n| Mean platelet volume | small | normal |\n| Serum IgM | low | normal |\n| Serum IgE | elevated | normal |",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Chronic granulomatous disease",
      "X-linked (Bruton) agammaglobulinemia",
      "Severe combined immunodeficiency",
      "Wiskott-Aldrich syndrome",
      "Chediak-Higashi syndrome"
    ],
    answer: 3,
    exp: "The triad of eczema, thrombocytopenia with small platelets, and recurrent infections in a boy with an X-linked family history indicates Wiskott-Aldrich syndrome. A mutation in the WAS gene disrupts the actin-cytoskeleton regulator WASP in hematopoietic cells, impairing platelet formation and immune-cell function; the immunoglobulin pattern classically shows low IgM with elevated IgE and IgA. Definitive treatment is hematopoietic stem cell transplantation.",
    why: [
      "Chronic granulomatous disease causes recurrent catalase-positive infections and granulomas from an NADPH oxidase defect, not thrombocytopenia with small platelets and eczema.",
      "Bruton agammaglobulinemia causes recurrent infections after 6 months with absent B cells and low all immunoglobulins, not the eczema-thrombocytopenia triad.",
      "Severe combined immunodeficiency presents in early infancy with severe viral, fungal, and opportunistic infections and failure to thrive, not the specific triad with small platelets.",
      "Correct: eczema, thrombocytopenia with small platelets, recurrent infections, low IgM, and elevated IgE in an X-linked pattern define Wiskott-Aldrich syndrome from a WAS gene defect.",
      "Chediak-Higashi syndrome causes partial albinism, giant granules in leukocytes, and neuropathy, not thrombocytopenia with eczema and this immunoglobulin pattern."
    ]
  },
  {
    id: "s1-0280",
    system: "Multisystem",
    discipline: "Pathology",
    topic: "Tuberous sclerosis complex",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 2-year-old girl is evaluated for recurrent seizures that began in infancy as brief flexor spasms, along with delayed development. Examination reveals several hypopigmented ash-leaf macules on her trunk and a rough, raised plaque over her lower back. Echocardiography done in infancy had shown a cardiac mass that has since regressed, and renal ultrasound shows bilateral fat-containing masses.\n\n**[IMAGE: brain MRI showing calcified subependymal nodules along the lateral ventricles and several cortical tubers]**",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Neurofibromatosis type 1",
      "Sturge-Weber syndrome",
      "Von Hippel-Lindau disease",
      "Neurofibromatosis type 2",
      "Tuberous sclerosis complex"
    ],
    answer: 4,
    exp: "Infantile spasms with developmental delay, ash-leaf hypopigmented macules, a shagreen patch, a regressing cardiac rhabdomyoma, renal angiomyolipomas, and subependymal nodules with cortical tubers indicate tuberous sclerosis complex. Autosomal dominant loss-of-function mutations in TSC1 (hamartin) or TSC2 (tuberin) disinhibit mTOR signaling, producing widespread benign hamartomas across the brain, skin, heart, and kidneys. mTOR inhibitors can shrink several of these lesions.",
    why: [
      "Neurofibromatosis type 1 causes cafe-au-lait macules, neurofibromas, Lisch nodules, and optic gliomas, not ash-leaf spots with cardiac rhabdomyomas and cortical tubers.",
      "Sturge-Weber syndrome causes a facial port-wine stain with leptomeningeal angiomas and seizures, not renal angiomyolipomas and subependymal nodules.",
      "Von Hippel-Lindau disease causes hemangioblastomas, clear cell renal carcinoma, and pheochromocytoma, not ash-leaf macules and cardiac rhabdomyomas.",
      "Neurofibromatosis type 2 causes bilateral vestibular schwannomas and meningiomas, not the skin, cardiac, and renal hamartomas seen here.",
      "Correct: ash-leaf macules, a shagreen patch, cardiac rhabdomyoma, renal angiomyolipomas, and subependymal nodules with cortical tubers define tuberous sclerosis complex from a TSC1/TSC2 mutation."
    ]
  }
];
