/*
 * Rounds Codex - USMLE Step 1 question bank, Batch 11 (25 items)
 * Blueprint-weighted mix. All vignettes original; source used for facts only.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP1_B11 = [
  {
    id: "s1-0251",
    system: "Behavioral Health & Nervous System",
    discipline: "Physiology",
    topic: "Narcolepsy (orexin/hypocretin deficiency)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 22-year-old college student reports irresistible daytime sleep attacks for the past year, falling asleep in class and mid-conversation despite adequate nighttime sleep. He also describes sudden episodes of bilateral leg buckling and jaw slackening triggered by laughter, brief inability to move on waking, and vivid dreamlike images as he falls asleep. A sleep study shows a short sleep latency with rapid entry into REM sleep.",
    lead: "Which best explains this presentation?",
    options: [
      "Loss of orexin (hypocretin)-producing neurons in the lateral hypothalamus",
      "Repetitive upper airway collapse causing fragmented sleep",
      "Degeneration of dopaminergic neurons in the substantia nigra",
      "A primary mood disorder producing hypersomnia",
      "Deficient nocturnal melatonin secretion from the pineal gland"
    ],
    answer: 0,
    exp: "Excessive daytime sleepiness with sleep attacks, cataplexy (sudden loss of muscle tone triggered by emotion), sleep paralysis, hypnagogic hallucinations, and short REM latency define narcolepsy type 1. It results from loss of orexin (hypocretin)-producing neurons in the lateral hypothalamus, which normally stabilize wakefulness and suppress inappropriate REM intrusion. Low CSF orexin supports the diagnosis, and the cataplexy reflects REM-associated atonia intruding into wakefulness.",
    why: [
      "Correct: destruction of lateral hypothalamic orexin (hypocretin) neurons destabilizes wakefulness and allows REM intrusion, producing sleep attacks, cataplexy, sleep paralysis, and hypnagogic hallucinations.",
      "Upper airway collapse causes obstructive sleep apnea with snoring and witnessed apneas, not cataplexy or short REM latency.",
      "Substantia nigra dopaminergic loss causes Parkinsonism with tremor and rigidity, not emotion-triggered atonia and sleep attacks.",
      "A primary mood disorder can cause hypersomnia but does not cause cataplexy or the sleep-onset REM periods seen here.",
      "Deficient melatonin disrupts circadian timing but does not produce cataplexy or sudden daytime REM intrusion."
    ]
  },
  {
    id: "s1-0252",
    system: "Behavioral Health & Nervous System",
    discipline: "Pathology",
    topic: "Subarachnoid hemorrhage (ruptured berry aneurysm)",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 49-year-old woman suddenly develops the \"worst headache of my life\" that peaks within seconds while gardening, followed by neck stiffness, photophobia, vomiting, and a brief loss of consciousness. She has a history of hypertension and smoking, and a family member had a similar sudden fatal event. She is now alert but has marked nuchal rigidity.\n\n**[IMAGE: noncontrast head CT showing hyperdense blood filling the basal cisterns and extending into the sylvian fissures]**",
    lead: "Which is the most likely underlying cause?",
    options: [
      "Hypertensive rupture of a lenticulostriate artery into the basal ganglia",
      "Rupture of a saccular (berry) aneurysm at the circle of Willis",
      "Embolic occlusion of the middle cerebral artery",
      "Tearing of a bridging vein producing a subdural hematoma",
      "Rupture of the middle meningeal artery producing an epidural hematoma"
    ],
    answer: 1,
    exp: "A thunderclap headache that peaks in seconds with meningismus, photophobia, and transient loss of consciousness, plus CT blood in the basal cisterns and sylvian fissures, indicates aneurysmal subarachnoid hemorrhage. The usual source is rupture of a saccular (berry) aneurysm at branch points of the circle of Willis, and risk factors include hypertension, smoking, and polycystic kidney disease. Vasospasm and rebleeding are major early complications.",
    why: [
      "Hypertensive lenticulostriate rupture causes an intraparenchymal basal ganglia bleed with focal deficits, not blood tracking through the subarachnoid cisterns.",
      "Correct: a ruptured saccular (berry) aneurysm at the circle of Willis spills arterial blood into the subarachnoid space, producing the thunderclap headache and cisternal blood on CT.",
      "Middle cerebral artery embolism causes ischemic stroke with focal weakness, not a sudden thunderclap headache with subarachnoid blood.",
      "Bridging vein tears cause a crescentic subdural hematoma, typically after trauma in older or alcoholic patients, not cisternal subarachnoid blood.",
      "Middle meningeal artery rupture causes a lens-shaped epidural hematoma after temporal trauma, not diffuse subarachnoid cisternal blood."
    ]
  },
  {
    id: "s1-0253",
    system: "Behavioral Health & Nervous System",
    discipline: "Pathology",
    topic: "Osmotic demyelination (central pontine myelinolysis)",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 52-year-old man with chronic alcohol use and malnutrition was admitted with a serum sodium of 108 mEq/L that was corrected rapidly over 12 hours. Three days later he develops progressive quadriparesis, dysarthria, difficulty swallowing, and near-complete paralysis while remaining awake and able to blink and move his eyes vertically on command.\n\n**[IMAGE: axial T2-weighted brain MRI showing a symmetric hyperintense lesion in the central pons that spares the periphery]**",
    lead: "Which best explains this deterioration?",
    options: [
      "Acute ischemic infarction of the basilar artery territory",
      "Hemorrhage into the brainstem from hypertension",
      "Osmotic demyelination from overly rapid correction of hyponatremia",
      "Thiamine deficiency causing mammillary body degeneration",
      "Autoimmune inflammatory demyelination of the optic nerves and cord"
    ],
    answer: 2,
    exp: "A locked-in picture (quadriparesis, dysarthria, dysphagia with preserved consciousness and vertical eye movements) developing days after rapid correction of severe hyponatremia, with a symmetric central pontine T2 lesion, indicates osmotic demyelination syndrome (central pontine myelinolysis). When chronically hyponatremic brain cells that have shed osmolytes are exposed to a rapid rise in serum osmolality, water shifts out and oligodendrocytes are injured, demyelinating central pontine fibers. Sodium should be corrected no faster than about 8 mEq/L per 24 hours.",
    why: [
      "Basilar artery infarction can cause locked-in syndrome but would be abrupt and vascular in distribution, not a symmetric central pontine lesion timed to sodium correction.",
      "Brainstem hypertensive hemorrhage would appear as acute blood on imaging, not a symmetric demyelinating T2 lesion following hyponatremia correction.",
      "Correct: rapid correction of chronic hyponatremia drives water out of adapted brain cells and demyelinates central pontine fibers, producing osmotic demyelination.",
      "Thiamine deficiency causes Wernicke encephalopathy with confusion, ophthalmoplegia, and ataxia, not a symmetric central pontine lesion with quadriparesis.",
      "Autoimmune demyelination (multiple sclerosis) produces asymmetric lesions disseminated in space and time, not a single symmetric pontine lesion after sodium correction."
    ]
  },
  {
    id: "s1-0254",
    system: "Behavioral Health & Nervous System",
    discipline: "Psychiatry",
    topic: "Anorexia nervosa",
    difficulty: "easy",
    anchor: null,
    vignette: "A 17-year-old girl is brought in by her mother, who is worried about her weight. The patient restricts her intake to a few hundred calories daily, exercises for hours, and is intensely afraid of gaining weight even though she is markedly underweight with a body mass index of 15.5 kg/m2. She views herself as \"fat,\" has not menstruated in five months, and has fine downy hair over her back, cold intolerance, and a resting heart rate of 46/min.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Bulimia nervosa",
      "Major depressive disorder",
      "Body dysmorphic disorder",
      "Anorexia nervosa",
      "Hyperthyroidism"
    ],
    answer: 3,
    exp: "Restriction of energy intake leading to significantly low body weight, an intense fear of gaining weight, and a distorted body image define anorexia nervosa. Physiologic consequences of starvation include amenorrhea, lanugo, bradycardia, hypothermia, and cold intolerance. It carries one of the highest mortality rates of any psychiatric disorder, from cardiac complications and suicide.",
    why: [
      "Bulimia nervosa involves recurrent binge eating with compensatory purging in patients who are usually of normal or above-normal weight, not the emaciation seen here.",
      "Major depression can reduce appetite but does not feature the intense fear of weight gain and distorted body image driving self-starvation.",
      "Body dysmorphic disorder centers on a perceived defect in a specific body feature, not on body weight with dangerous caloric restriction.",
      "Correct: severe caloric restriction with significantly low weight, intense fear of gaining weight, and distorted body image, plus lanugo, amenorrhea, and bradycardia, define anorexia nervosa.",
      "Hyperthyroidism causes weight loss but with heat intolerance, tachycardia, and increased appetite, not fear of weight gain and bradycardia."
    ]
  },
  {
    id: "s1-0255",
    system: "Behavioral Health & Nervous System",
    discipline: "Anatomy",
    topic: "Brown-Sequard syndrome (spinal cord hemisection)",
    difficulty: "hard",
    anchor: null,
    vignette: "A 29-year-old man is evaluated after a knife wound to the right side of his back at the mid-thoracic level. On examination he has weakness and loss of vibration and position sense in the right leg below the injury, while pain and temperature sensation are lost in the left leg beginning a couple of segments below the lesion. Reflexes are increased in the right leg.",
    lead: "Which lesion best explains this pattern?",
    options: [
      "Occlusion of the anterior spinal artery",
      "A central cord lesion expanding around the central canal",
      "Selective degeneration of the dorsal columns",
      "A demyelinating plaque in the cervical cord",
      "Hemisection of one half of the spinal cord"
    ],
    answer: 4,
    exp: "Ipsilateral loss of motor function and dorsal-column sensation (vibration, proprioception) with contralateral loss of pain and temperature a few levels below the lesion is the classic Brown-Sequard pattern of spinal cord hemisection. The corticospinal tract and dorsal columns decussate above the cord, so their deficits are ipsilateral, whereas the spinothalamic tract crosses within one or two segments of entry, so its deficit is contralateral and begins slightly below the lesion.",
    why: [
      "Anterior spinal artery occlusion spares the dorsal columns and produces bilateral motor and pain/temperature loss, not this crossed hemisection pattern.",
      "A central cord lesion causes a bilateral \"cape\" distribution loss of pain and temperature with upper-extremity-predominant weakness, not a unilateral hemisection pattern.",
      "Isolated dorsal column degeneration causes loss of vibration and proprioception without the motor and crossed pain/temperature findings seen here.",
      "A cervical demyelinating plaque could cause varied deficits but would not reliably produce this precise ipsilateral motor/dorsal-column and contralateral spinothalamic dissociation from a stab wound.",
      "Correct: hemisection of one half of the cord produces ipsilateral motor and dorsal-column loss with contralateral pain and temperature loss below the level, the Brown-Sequard syndrome."
    ]
  },
  {
    id: "s1-0256",
    system: "Behavioral Health & Nervous System",
    discipline: "Pathophysiology",
    topic: "Migraine with aura",
    difficulty: "easy",
    anchor: null,
    vignette: "A 26-year-old woman reports recurrent headaches roughly twice a month for several years. Each episode begins with 20 minutes of shimmering zigzag lines drifting across her vision, followed by a throbbing, one-sided headache with nausea and marked sensitivity to light and sound. The pain worsens with routine activity, and she prefers to lie in a dark, quiet room until it resolves over several hours.",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Tension-type headache",
      "Cluster headache",
      "Trigeminal neuralgia",
      "Giant cell (temporal) arteritis",
      "Migraine with aura"
    ],
    answer: 4,
    exp: "Recurrent unilateral throbbing headaches with nausea, photophobia, phonophobia, and worsening with activity, preceded by a visual aura of scintillating scotomata, are characteristic of migraine with aura. The aura is attributed to a wave of cortical spreading depression, and the headache involves activation of the trigeminovascular system. Patients characteristically seek a dark, quiet environment.",
    why: [
      "Tension-type headache is a bilateral, band-like, non-throbbing pain without aura, nausea, or prominent photophobia.",
      "Cluster headache causes severe unilateral periorbital pain with lacrimation and rhinorrhea in short daily clusters, and patients are restless rather than seeking a dark room.",
      "Trigeminal neuralgia causes brief lightning-like facial pains triggered by touch, not a prolonged throbbing headache with visual aura.",
      "Giant cell arteritis causes a new temporal headache with jaw claudication and vision loss in older adults, not recurrent auras in a young woman.",
      "Correct: recurrent unilateral throbbing headache with nausea, photophobia, and a preceding scintillating visual aura relieved by rest in the dark defines migraine with aura."
    ]
  },
  {
    id: "s1-0257",
    system: "Behavioral Health & Nervous System",
    discipline: "Pharmacology",
    topic: "Tardive dyskinesia",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 60-year-old man with schizophrenia has taken haloperidol for the past eight years. He now has involuntary, repetitive movements of the mouth and face, including lip smacking, tongue protrusion, and chewing motions, along with occasional writhing movements of the fingers. The movements are not distressing to him and disappear during sleep. There is no rigidity or fever.",
    lead: "Which best explains these movements?",
    options: [
      "Chronic dopamine receptor blockade causing postsynaptic receptor supersensitivity",
      "Acute dystonic reaction from recent dose escalation",
      "Excess central dopaminergic tone from a dopamine agonist",
      "Autoimmune destruction of striatal neurons",
      "An expanded CAG trinucleotide repeat in the huntingtin gene"
    ],
    answer: 0,
    exp: "Involuntary, repetitive orofacial and choreoathetoid movements emerging after years of first-generation antipsychotic therapy indicate tardive dyskinesia. Prolonged blockade of D2 receptors is thought to cause upregulation and supersensitivity of postsynaptic dopamine receptors in the striatum. It can be irreversible, so clinicians minimize exposure, switch to lower-risk agents, and may treat with a VMAT2 inhibitor.",
    why: [
      "Correct: years of D2 receptor blockade by a first-generation antipsychotic produce postsynaptic dopamine receptor supersensitivity, causing the late-onset orofacial choreoathetoid movements of tardive dyskinesia.",
      "Acute dystonia causes sustained muscle spasms (torticollis, oculogyric crisis) within hours to days of starting or increasing the drug, not repetitive orofacial movements after years.",
      "Excess dopaminergic tone from an agonist causes dyskinesias in Parkinson treatment, but this patient is on a dopamine blocker, not an agonist.",
      "Autoimmune striatal destruction (e.g., Sydenham chorea) follows streptococcal infection in children, not chronic antipsychotic use in an older adult.",
      "A huntingtin CAG expansion causes Huntington disease with progressive chorea and dementia, unrelated to antipsychotic exposure and with a family history."
    ]
  },
  {
    id: "s1-0258",
    system: "Musculoskeletal / Skin",
    discipline: "Biochemistry",
    topic: "Osteogenesis imperfecta (type I collagen defect)",
    difficulty: "moderate",
    anchor: null,
    vignette: "An 18-month-old boy has had three long-bone fractures from minor falls. He has blue-tinged sclerae, small discolored teeth that chip easily, and a family history of frequent fractures and early hearing loss in his mother. Radiographs show multiple healing fractures and diffusely thin, osteopenic bones. There are no bruises in unusual patterns or other signs suggesting inflicted injury.",
    lead: "A defect in which of the following best explains this condition?",
    options: [
      "Fibrillin-1, a glycoprotein of elastic microfibrils",
      "Type I collagen synthesis",
      "Type III collagen synthesis",
      "Lysyl hydroxylase acting on collagen cross-links",
      "Vitamin C-dependent proline hydroxylation"
    ],
    answer: 1,
    exp: "Recurrent fractures from minor trauma, blue sclerae, brittle discolored teeth (dentinogenesis imperfecta), and conductive hearing loss with a positive family history indicate osteogenesis imperfecta. Most cases result from an autosomal dominant defect in type I collagen (COL1A1/COL1A2), the major structural protein of bone. The thin sclerae reveal underlying choroidal veins, giving the blue hue.",
    why: [
      "Fibrillin-1 defects cause Marfan syndrome with tall stature, lens dislocation, and aortic root dilation, not recurrent fractures with blue sclerae.",
      "Correct: defective type I collagen synthesis weakens bone, producing recurrent fractures, blue sclerae, brittle teeth, and hearing loss in osteogenesis imperfecta.",
      "Type III collagen defects cause vascular Ehlers-Danlos syndrome with arterial and organ rupture, not the brittle-bone phenotype.",
      "Lysyl hydroxylase deficiency causes a form of Ehlers-Danlos with hyperextensible skin and joint hypermobility, not multiple childhood fractures with blue sclerae.",
      "Impaired vitamin C-dependent proline hydroxylation causes scurvy with perifollicular hemorrhage and poor wound healing, an acquired condition, not this inherited brittle-bone disorder."
    ]
  },
  {
    id: "s1-0259",
    system: "Musculoskeletal / Skin",
    discipline: "Genetics",
    topic: "Achondroplasia (FGFR3 mutation)",
    difficulty: "easy",
    anchor: null,
    vignette: "A 3-year-old boy is noted to have very short arms and legs with a relatively normal-sized trunk, a large head with a prominent forehead, and a small midface with a low nasal bridge. His intelligence and cognitive milestones are normal for age. His father has an identical body habitus, and the condition follows an autosomal dominant pattern in the family.",
    lead: "Which mechanism best explains this disorder?",
    options: [
      "Deficient growth hormone secretion from the anterior pituitary",
      "Defective type I collagen in the growth plate",
      "A constitutively active FGFR3 receptor that inhibits chondrocyte proliferation",
      "Untreated congenital hypothyroidism",
      "Vitamin D deficiency impairing growth-plate mineralization"
    ],
    answer: 2,
    exp: "Rhizomelic (proximal) limb shortening with a normal trunk, macrocephaly with frontal bossing, midface hypoplasia, and normal intelligence in an autosomal dominant pattern indicate achondroplasia, the most common cause of skeletal dysplasia. An activating mutation in fibroblast growth factor receptor 3 (FGFR3) constitutively signals to inhibit chondrocyte proliferation at the growth plate, impairing endochondral ossification while membranous ossification is preserved.",
    why: [
      "Growth hormone deficiency causes proportionate short stature with delayed growth, not the disproportionate rhizomelic shortening and macrocephaly of achondroplasia.",
      "Defective type I collagen causes osteogenesis imperfecta with fractures and blue sclerae, not disproportionate short-limbed dwarfism.",
      "Correct: a constitutively active FGFR3 receptor suppresses growth-plate chondrocyte proliferation, impairing endochondral bone growth and producing achondroplasia.",
      "Untreated congenital hypothyroidism causes intellectual disability and proportionate growth failure, not normal intelligence with rhizomelic limbs.",
      "Vitamin D deficiency causes rickets with bowing and widened growth plates, an acquired nutritional disorder, not this autosomal dominant dysplasia."
    ]
  },
  {
    id: "s1-0260",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Osteopetrosis (failure of osteoclastic bone resorption)",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 4-year-old boy has had several long-bone fractures from minor trauma despite bones that appear unusually dense on imaging. He also has worsening anemia and recurrent infections from marrow failure, hepatosplenomegaly from extramedullary hematopoiesis, and progressive vision and hearing loss attributed to narrowing of cranial nerve foramina.\n\n**[IMAGE: skeletal radiograph showing diffusely dense, sclerotic bones with a \"bone-in-bone\" appearance and obliteration of the medullary cavity]**",
    lead: "Which best explains this disorder?",
    options: [
      "Defective synthesis of type I collagen",
      "Excess parathyroid hormone driving bone resorption",
      "Impaired mineralization of osteoid from vitamin D deficiency",
      "Failure of osteoclast-mediated bone resorption",
      "Accelerated osteoblastic bone formation from a growth factor excess"
    ],
    answer: 3,
    exp: "Dense, brittle bones that paradoxically fracture easily, with marrow failure (anemia, infections), extramedullary hematopoiesis, and cranial nerve compression, indicate osteopetrosis. Dysfunctional osteoclasts (often from carbonic anhydrase II deficiency) cannot resorb bone, so primary spongiosa accumulates and the marrow cavity is obliterated, producing thick but structurally weak, poorly remodeled bone. The classic radiographic clue is a \"bone-in-bone\" sclerotic appearance.",
    why: [
      "Defective type I collagen causes osteogenesis imperfecta with thin, osteopenic bones and blue sclerae, not dense sclerotic bones with an obliterated marrow cavity.",
      "Excess parathyroid hormone increases osteoclastic resorption, producing bone loss (osteitis fibrosa cystica), the opposite of the dense bones seen here.",
      "Impaired osteoid mineralization causes rickets/osteomalacia with soft, undermineralized bone, not the sclerotic dense bones of osteopetrosis.",
      "Correct: failure of osteoclast-mediated resorption (often carbonic anhydrase II deficiency) prevents bone remodeling, causing dense but brittle bone, marrow failure, and cranial nerve compression in osteopetrosis.",
      "Accelerated osteoblastic formation is not the mechanism; osteopetrosis results from defective resorption, not from a growth-factor-driven increase in bone formation."
    ]
  },
  {
    id: "s1-0261",
    system: "Musculoskeletal / Skin",
    discipline: "Microbiology",
    topic: "Disseminated gonococcal arthritis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 24-year-old sexually active woman has several days of migratory joint pains, and now has a swollen, painful right knee. She also has pain and swelling along the tendon sheaths of her wrist and several scattered pustular skin lesions on her extremities. She is febrile.\n\n| Test | Value | Reference |\n|---|---|---|\n| Synovial WBC | 55,000/mcL | < 200 |\n| Synovial Gram stain | gram-negative diplococci | negative |\n| Cervical nucleic acid amplification | positive | negative |",
    lead: "Which organism is the most likely cause?",
    options: [
      "Staphylococcus aureus",
      "Borrelia burgdorferi",
      "Streptococcus pyogenes",
      "Chlamydia trachomatis reactive arthritis",
      "Neisseria gonorrhoeae"
    ],
    answer: 4,
    exp: "In a young, sexually active adult, the triad of migratory polyarthralgia, tenosynovitis, and pustular (vesiculopustular) skin lesions, or a purulent monoarthritis, indicates disseminated gonococcal infection. Gram-negative diplococci on synovial Gram stain and a positive genital nucleic acid amplification test confirm Neisseria gonorrhoeae, the most common cause of septic arthritis in sexually active young adults.",
    why: [
      "Staphylococcus aureus is a leading cause of nongonococcal septic arthritis but appears as gram-positive cocci in clusters and lacks the tenosynovitis-dermatitis syndrome.",
      "Borrelia burgdorferi causes Lyme arthritis, typically a later mono- or oligoarthritis of the knee without pustular lesions or gram-negative diplococci.",
      "Streptococcus pyogenes appears as gram-positive cocci in chains and does not produce this classic gonococcal tenosynovitis and pustular rash.",
      "Chlamydia-associated reactive arthritis is a sterile post-infectious arthritis with conjunctivitis and urethritis, not a purulent joint with organisms on Gram stain.",
      "Correct: gram-negative diplococci in the joint with tenosynovitis, pustular skin lesions, and a positive genital test indicate disseminated Neisseria gonorrhoeae infection."
    ]
  },
  {
    id: "s1-0262",
    system: "Musculoskeletal / Skin",
    discipline: "Pathology",
    topic: "Stevens-Johnson syndrome / toxic epidermal necrolysis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 34-year-old woman started lamotrigine three weeks ago for a mood disorder. She now has fever, malaise, and a rapidly spreading painful rash of dusky red macules with central blistering. She has painful erosions of the lips, oral mucosa, and conjunctivae, and gentle lateral pressure on the skin causes the epidermis to slough. About 8% of her body surface area is affected.\n\n**[IMAGE: photograph of dusky targetoid macules with flaccid bullae and epidermal detachment, plus hemorrhagic crusting of the lips]**",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Stevens-Johnson syndrome",
      "Staphylococcal scalded skin syndrome",
      "Pemphigus vulgaris",
      "Bullous pemphigoid",
      "Erythema multiforme minor"
    ],
    answer: 0,
    exp: "A drug (here lamotrigine) started days to weeks earlier, followed by fever, painful dusky targetoid lesions with epidermal detachment, mucosal erosions at two or more sites, and a positive Nikolsky sign, indicates Stevens-Johnson syndrome (detachment under 10% of body surface area). It is a severe cutaneous adverse reaction driven by keratinocyte apoptosis, and stopping the offending drug plus supportive care is critical. Detachment over 30% defines toxic epidermal necrolysis on the same spectrum.",
    why: [
      "Correct: a culprit drug followed by fever, targetoid lesions with epidermal detachment, prominent mucosal erosions, and a positive Nikolsky sign defines Stevens-Johnson syndrome.",
      "Staphylococcal scalded skin syndrome spares the mucous membranes and splits the superficial epidermis via exfoliative toxin, mainly in young children, unlike this mucosal-predominant drug reaction.",
      "Pemphigus vulgaris causes chronic flaccid bullae and mucosal erosions from desmoglein autoantibodies, not an acute drug-triggered eruption with targetoid lesions and fever.",
      "Bullous pemphigoid causes tense subepidermal blisters with a negative Nikolsky sign in older adults and generally spares mucosa.",
      "Erythema multiforme minor is typically an infection-triggered (herpes) eruption of targetoid lesions with little or no mucosal involvement and no widespread epidermal detachment."
    ]
  },
  {
    id: "s1-0263",
    system: "Musculoskeletal / Skin",
    discipline: "Immunology",
    topic: "Sjogren syndrome",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 55-year-old woman reports a persistent gritty, dry sensation in both eyes and a dry mouth that makes swallowing dry food difficult and has led to multiple new dental cavities. She has bilateral parotid gland enlargement. Schirmer testing shows reduced tear production.\n\n| Test | Value | Reference |\n|---|---|---|\n| Anti-Ro (SSA) antibody | positive | negative |\n| Anti-La (SSB) antibody | positive | negative |\n| Antinuclear antibody | positive | negative |\n| Minor salivary gland biopsy | lymphocytic infiltrate | none |",
    lead: "Which best explains her condition?",
    options: [
      "Deposition of amyloid protein in exocrine glands",
      "Autoimmune lymphocytic destruction of exocrine glands",
      "Noncaseating granulomatous infiltration of the glands",
      "Fibrous replacement of skin and internal organs from excess collagen",
      "IgE-mediated mast cell degranulation in the glands"
    ],
    answer: 1,
    exp: "Keratoconjunctivitis sicca and xerostomia with parotid enlargement, positive anti-Ro/SSA and anti-La/SSB antibodies, and a lymphocytic infiltrate on salivary gland biopsy indicate Sjogren syndrome. Autoreactive lymphocytes infiltrate and destroy the lacrimal and salivary glands, causing the sicca symptoms and dental caries. Patients carry an increased long-term risk of B-cell (MALT) lymphoma.",
    why: [
      "Amyloid deposition can enlarge glands but does not produce the specific anti-Ro/anti-La antibodies and focal lymphocytic sialadenitis seen here.",
      "Correct: autoimmune lymphocytic infiltration destroys the lacrimal and salivary glands, producing sicca symptoms with anti-Ro/SSA and anti-La/SSB antibodies in Sjogren syndrome.",
      "Noncaseating granulomas describe sarcoidosis, which can cause parotid enlargement but not the anti-Ro/anti-La serology and focal lymphocytic sialadenitis of Sjogren syndrome.",
      "Excess collagen deposition describes systemic sclerosis with skin tightening and Raynaud phenomenon, not primary sicca with these autoantibodies.",
      "IgE-mediated mast cell degranulation causes allergic or anaphylactic reactions, not chronic autoimmune destruction of exocrine glands."
    ]
  },
  {
    id: "s1-0264",
    system: "Musculoskeletal / Skin",
    discipline: "Pathophysiology",
    topic: "Acanthosis nigricans (insulin resistance)",
    difficulty: "easy",
    anchor: "image",
    vignette: "A 15-year-old boy with obesity is noted to have symmetric, velvety, hyperpigmented thickening of the skin over the back of his neck and in both axillae, along with several small skin tags. The changes have developed gradually and are not itchy or painful. His fasting glucose is at the upper end of normal and his family has a strong history of type 2 diabetes.\n\n**[IMAGE: photograph of velvety, hyperpigmented, thickened plaques in the posterior neck folds with adjacent skin tags]**",
    lead: "Which best explains this skin finding?",
    options: [
      "Chronic sun exposure causing melanocyte proliferation",
      "A superficial dermatophyte (fungal) infection",
      "Insulin resistance stimulating keratinocyte and fibroblast growth",
      "Excess adrenocorticotropic hormone stimulating melanocytes",
      "Postinflammatory hyperpigmentation from prior dermatitis"
    ],
    answer: 2,
    exp: "Velvety, hyperpigmented, thickened plaques in the flexural areas (neck and axillae) with skin tags in an obese adolescent indicate acanthosis nigricans. Hyperinsulinemia from insulin resistance stimulates keratinocyte and dermal fibroblast proliferation through insulin-like growth factor receptors, producing the epidermal thickening. It is a cutaneous marker of insulin resistance, though it can rarely be paraneoplastic (e.g., gastric adenocarcinoma) in older adults.",
    why: [
      "Chronic sun exposure causes photodamage and lentigines on sun-exposed skin, not velvety flexural plaques with skin tags.",
      "A dermatophyte infection produces scaly, often itchy annular lesions, not the smooth velvety hyperpigmentation of flexural folds.",
      "Correct: hyperinsulinemia from insulin resistance drives keratinocyte and fibroblast proliferation, producing the velvety flexural hyperpigmentation of acanthosis nigricans.",
      "Excess ACTH (as in Addison disease or ectopic ACTH) causes generalized or mucosal hyperpigmentation, not localized velvety flexural plaques with skin tags.",
      "Postinflammatory hyperpigmentation follows a prior inflammatory rash and lacks the velvety thickening and characteristic flexural distribution seen here."
    ]
  },
  {
    id: "s1-0265",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Subacute (de Quervain) granulomatous thyroiditis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 42-year-old woman develops a tender, painful anterior neck with pain radiating to the jaw and ears two weeks after a viral upper respiratory illness. She has low-grade fever, palpitations, heat intolerance, and tremor. The thyroid is firm and exquisitely tender to palpation.\n\n| Test | Value | Reference |\n|---|---|---|\n| TSH | low | 0.4-4.0 mIU/L |\n| Free T4 | high | normal |\n| Erythrocyte sedimentation rate | markedly elevated | 0-20 mm/hr |\n| Radioactive iodine uptake | low | normal |",
    lead: "Which best explains her presentation?",
    options: [
      "Autoantibodies stimulating the TSH receptor",
      "Autoimmune lymphocytic destruction with antithyroid peroxidase antibodies",
      "An autonomously functioning toxic adenoma",
      "Granulomatous inflammation following a viral infection",
      "Iodine-induced excess thyroid hormone synthesis"
    ],
    answer: 3,
    exp: "A painful, tender thyroid after a viral illness with transient hyperthyroidism, a high ESR, and characteristically low radioactive iodine uptake indicates subacute (de Quervain) granulomatous thyroiditis. Inflammatory destruction of follicles releases preformed hormone, causing hyperthyroid symptoms while new hormone synthesis and iodine trapping are suppressed (low uptake). It is typically self-limited, often passing through a transient hypothyroid phase before recovery, and is managed with NSAIDs or corticosteroids.",
    why: [
      "TSH-receptor-stimulating antibodies cause Graves disease, which produces a nontender goiter with high radioactive iodine uptake, not a painful gland with low uptake.",
      "Antithyroid peroxidase-mediated lymphocytic destruction describes Hashimoto thyroiditis, which causes a nontender gland and hypothyroidism, not painful transient thyrotoxicosis.",
      "A toxic adenoma causes hyperthyroidism with a focal area of high uptake on scan, not a diffusely painful gland with low uptake and a high ESR.",
      "Correct: post-viral granulomatous inflammation releases preformed hormone and suppresses iodine uptake, producing the painful, tender thyroid and transient thyrotoxicosis of subacute (de Quervain) thyroiditis.",
      "Iodine-induced hyperthyroidism (Jod-Basedow) follows an iodine load and does not cause a painful, tender gland with a markedly elevated ESR."
    ]
  },
  {
    id: "s1-0266",
    system: "Reproductive & Endocrine",
    discipline: "Anatomy",
    topic: "Testicular torsion",
    difficulty: "easy",
    anchor: null,
    vignette: "A 15-year-old boy awakens with sudden, severe left scrotal pain and vomiting. On examination the left testis is exquisitely tender, elevated, and lies in a horizontal position, and the cremasteric reflex is absent on that side. Elevating the testis does not relieve the pain. There is no dysuria, fever, or urethral discharge.",
    lead: "Which is the most appropriate initial understanding and action?",
    options: [
      "Epididymitis; treat empirically with antibiotics",
      "Orchitis from mumps; provide supportive care",
      "Indirect inguinal hernia; arrange elective repair",
      "Varicocele; reassure and observe",
      "Testicular torsion; obtain urgent urologic surgical exploration"
    ],
    answer: 4,
    exp: "Sudden severe testicular pain with a high-riding, horizontally oriented testis, an absent cremasteric reflex, and no relief on elevation (negative Prehn sign) indicates testicular torsion. The spermatic cord twists and cuts off blood supply, threatening the testis within hours. It is a surgical emergency requiring immediate exploration and detorsion (with orchidopexy), and imaging should not delay treatment when suspicion is high.",
    why: [
      "Epididymitis causes more gradual pain with dysuria, an intact cremasteric reflex, and relief on elevation, unlike this acute torsion presentation.",
      "Mumps orchitis follows parotitis with testicular swelling but does not cause a high-riding testis with an absent cremasteric reflex requiring emergency surgery.",
      "An inguinal hernia produces a groin bulge that may be reducible, not an acutely ischemic, tender, high-riding testis.",
      "A varicocele is a painless \"bag of worms\" scrotal swelling, not sudden severe pain with an absent cremasteric reflex.",
      "Correct: sudden severe pain with a high-riding horizontal testis, absent cremasteric reflex, and no relief on elevation indicates testicular torsion, requiring urgent surgical exploration."
    ]
  },
  {
    id: "s1-0267",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Benign prostatic hyperplasia",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 68-year-old man reports urinary frequency, nocturia, a weak and intermittent stream, hesitancy, and a sense of incomplete bladder emptying over the past two years. Digital rectal examination reveals a smooth, symmetrically enlarged, rubbery prostate without nodules.\n\n| Test | Value | Reference |\n|---|---|---|\n| Prostate-specific antigen | 3.8 ng/mL | < 4 |\n| Urinalysis | no blood, no infection | normal |\n| Post-void residual volume | elevated | low |",
    lead: "Which best explains his symptoms?",
    options: [
      "Nodular hyperplasia of the periurethral (transition) zone driven by dihydrotestosterone",
      "Adenocarcinoma arising in the peripheral zone",
      "Acute bacterial prostatitis",
      "A neurogenic bladder from spinal cord disease",
      "Urethral stricture from prior instrumentation"
    ],
    answer: 0,
    exp: "Progressive lower urinary tract symptoms with a smoothly and symmetrically enlarged, nontender prostate in an older man indicate benign prostatic hyperplasia. Hyperplasia of the periurethral (transition) zone, driven by dihydrotestosterone, compresses the urethra and obstructs outflow, producing hesitancy, weak stream, and incomplete emptying. It is treated with alpha-blockers and 5-alpha-reductase inhibitors.",
    why: [
      "Correct: dihydrotestosterone-driven nodular hyperplasia of the transition (periurethral) zone compresses the urethra, causing the obstructive symptoms of benign prostatic hyperplasia.",
      "Prostate adenocarcinoma arises in the peripheral zone and produces a hard, nodular gland, not the smooth symmetric enlargement described.",
      "Acute bacterial prostatitis causes fever and an exquisitely tender boggy prostate with pyuria, not chronic obstructive symptoms with a normal urinalysis.",
      "A neurogenic bladder from cord disease would show neurologic deficits and abnormal detrusor function rather than a symmetrically enlarged obstructing prostate.",
      "A urethral stricture typically follows instrumentation or infection and causes a normal-sized prostate with obstruction localized to the stricture."
    ]
  },
  {
    id: "s1-0268",
    system: "Reproductive & Endocrine",
    discipline: "Physiology",
    topic: "Kallmann syndrome (GnRH neuron migration failure)",
    difficulty: "hard",
    anchor: "lab",
    vignette: "An 18-year-old young man has not undergone puberty. He has small, firm testes, no facial or pubic hair, a tall eunuchoid build, and a high-pitched voice. On further questioning, he has never been able to smell foods or flowers. There is no history of chronic illness.\n\n| Test | Value | Reference |\n|---|---|---|\n| Luteinizing hormone | low | age-adjusted normal |\n| Follicle-stimulating hormone | low | age-adjusted normal |\n| Testosterone | low | adult male normal |\n| Sense of smell | absent | intact |",
    lead: "Which best explains this presentation?",
    options: [
      "Primary testicular failure with elevated gonadotropins",
      "Failure of GnRH neurons to migrate from the olfactory placode",
      "An extra X chromosome causing seminiferous tubule dysgenesis",
      "Constitutional delay of growth and puberty",
      "A prolactin-secreting pituitary adenoma"
    ],
    answer: 1,
    exp: "Delayed puberty with low testosterone and inappropriately low LH and FSH (hypogonadotropic hypogonadism) combined with anosmia indicates Kallmann syndrome. During development, GnRH-secreting neurons and olfactory neurons migrate together from the olfactory placode; failed migration leaves the hypothalamus unable to secrete GnRH and produces the loss of smell. The result is deficient gonadotropin and sex-steroid production.",
    why: [
      "Primary testicular failure raises LH and FSH through loss of negative feedback, the opposite of the low gonadotropins seen here.",
      "Correct: failed migration of GnRH neurons from the olfactory placode causes hypogonadotropic hypogonadism with anosmia, defining Kallmann syndrome.",
      "An extra X chromosome (Klinefelter syndrome) causes primary hypogonadism with elevated gonadotropins and preserved smell, not low LH and FSH with anosmia.",
      "Constitutional delay is a temporary lag in an otherwise normal axis and does not cause anosmia or permanent gonadotropin deficiency.",
      "A prolactinoma suppresses GnRH via hyperprolactinemia but causes galactorrhea and headaches, not congenital anosmia with lifelong absent puberty."
    ]
  },
  {
    id: "s1-0269",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Insulinoma",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 45-year-old woman has recurrent episodes of confusion, sweating, tremor, and palpitations, usually before meals or after fasting, that resolve quickly when she eats candy. During a supervised 72-hour fast she becomes symptomatic, and blood is drawn at the time of hypoglycemia.\n\n| Test | Value | Reference |\n|---|---|---|\n| Plasma glucose | 38 mg/dL | 70-100 |\n| Insulin | high | low during hypoglycemia |\n| C-peptide | high | low during hypoglycemia |\n| Proinsulin | high | low |\n| Sulfonylurea screen | negative | negative |",
    lead: "Which is the most likely diagnosis?",
    options: [
      "Surreptitious exogenous insulin administration",
      "Covert sulfonylurea ingestion",
      "An insulin-secreting pancreatic beta-cell tumor",
      "Primary adrenal insufficiency",
      "Reactive (postprandial) hypoglycemia"
    ],
    answer: 2,
    exp: "Fasting hypoglycemia with neuroglycopenic and adrenergic symptoms relieved by glucose (Whipple triad), together with inappropriately high insulin, C-peptide, and proinsulin and a negative sulfonylurea screen, indicates an insulinoma. This beta-cell tumor of the pancreatic islets autonomously secretes insulin; the elevated C-peptide confirms endogenous production, distinguishing it from exogenous insulin.",
    why: [
      "Exogenous insulin causes hypoglycemia with high insulin but suppressed C-peptide, since injected insulin lacks C-peptide.",
      "Sulfonylureas stimulate endogenous insulin and raise C-peptide, but the negative drug screen excludes this mimic of insulinoma.",
      "Correct: an insulin-secreting beta-cell tumor produces fasting hypoglycemia with high insulin, C-peptide, and proinsulin and a negative sulfonylurea screen, defining an insulinoma.",
      "Adrenal insufficiency can cause hypoglycemia but with low insulin and C-peptide plus hypotension and hyperpigmentation, not hyperinsulinemia.",
      "Reactive hypoglycemia occurs after meals, not during a prolonged fast, and is not associated with inappropriately elevated fasting insulin and C-peptide."
    ]
  },
  {
    id: "s1-0270",
    system: "Reproductive & Endocrine",
    discipline: "Pathology",
    topic: "Sheehan syndrome (postpartum pituitary necrosis)",
    difficulty: "hard",
    anchor: null,
    vignette: "A 31-year-old woman had a complicated delivery with severe postpartum hemorrhage requiring transfusion and a period of profound hypotension. Over the following weeks she is unable to breastfeed because her milk never comes in, her menses do not return, and she reports progressive fatigue, cold intolerance, and loss of pubic and axillary hair. She also feels dizzy on standing.",
    lead: "Which best explains her condition?",
    options: [
      "Primary hypothyroidism from autoimmune thyroiditis",
      "Primary adrenal insufficiency from autoimmune adrenalitis",
      "Autoimmune lymphocytic destruction of the pituitary",
      "Ischemic necrosis of the anterior pituitary from postpartum hemorrhage",
      "Excess prolactin from a lactotroph adenoma"
    ],
    answer: 3,
    exp: "Failure of postpartum lactation, amenorrhea, and features of combined hormone deficiency (hypothyroidism, adrenal insufficiency, loss of secondary sexual hair) after a delivery complicated by severe hemorrhage and hypotension indicate Sheehan syndrome. The pituitary enlarges during pregnancy and is vulnerable to ischemic infarction when hemorrhage causes hypotension, producing panhypopituitarism. Failure to lactate (low prolactin) is often the earliest clue.",
    why: [
      "Primary hypothyroidism explains fatigue and cold intolerance but not the failure to lactate, amenorrhea, and loss of sexual hair from multiple pituitary hormone deficits.",
      "Primary adrenal insufficiency causes hyperpigmentation and salt craving with high ACTH, not the panhypopituitary picture with agalactorrhea after obstetric hemorrhage.",
      "Autoimmune (lymphocytic) hypophysitis can cause postpartum hypopituitarism but is not precipitated by hemorrhagic hypotension as in this classic ischemic scenario.",
      "Correct: ischemic necrosis of the enlarged anterior pituitary after postpartum hemorrhage and hypotension causes panhypopituitarism (Sheehan syndrome) with failed lactation and secondary hormone deficiencies.",
      "A prolactinoma raises prolactin and would not cause failed lactation; it also would not follow an episode of postpartum hemorrhagic shock."
    ]
  },
  {
    id: "s1-0271",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Odds ratio interpretation",
    difficulty: "moderate",
    anchor: "table",
    vignette: "Investigators conduct a case-control study to examine the association between a chemical exposure and a rare cancer. They enroll patients with the cancer (cases) and cancer-free controls and ascertain prior exposure in each group.\n\n| Group | Exposed | Not exposed |\n|---|---|---|\n| Cases | 90 | 30 |\n| Controls | 30 | 90 |",
    lead: "Which value and interpretation best summarize the association?",
    options: [
      "A relative risk of 3, directly calculable from these data",
      "An odds ratio of 1, indicating no association",
      "An attributable risk of 60%",
      "A number needed to treat of 3",
      "An odds ratio of approximately 9, indicating higher odds of exposure among cases"
    ],
    answer: 4,
    exp: "In a case-control study, the appropriate measure of association is the odds ratio, calculated as (a x d) / (b x c). Here that is (90 x 90) / (30 x 30) = 8100 / 900 = 9, meaning the odds of prior exposure are about nine times higher among cases than controls. Because subjects are sampled by disease status, incidence and thus relative risk cannot be directly computed, though the odds ratio approximates the relative risk for a rare disease.",
    why: [
      "Relative risk requires knowing incidence in exposed and unexposed groups, which a case-control design cannot provide because sampling is by disease status.",
      "An odds ratio of 1 would mean no association, but the cross-product here yields 9, indicating a strong positive association.",
      "Attributable risk is a difference in incidence between exposed and unexposed, which cannot be derived from case-control counts.",
      "Number needed to treat applies to interventions in trials, not to exposure-disease association in an observational case-control study.",
      "Correct: the odds ratio is (90 x 90)/(30 x 30) = 9, indicating the odds of exposure are about nine times higher among cases than controls."
    ]
  },
  {
    id: "s1-0272",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Intention-to-treat analysis",
    difficulty: "moderate",
    anchor: null,
    vignette: "In a randomized controlled trial comparing a new drug with placebo, some participants assigned to the drug stop taking it because of side effects, and a few placebo participants obtain the active drug elsewhere. The statisticians decide to analyze every participant in the group to which they were originally randomized, regardless of the treatment they actually received or their adherence.",
    lead: "Which analytic approach does this describe, and why is it preferred?",
    options: [
      "Intention-to-treat analysis, which preserves the benefits of randomization and reflects real-world effectiveness",
      "Per-protocol analysis, which includes only fully adherent participants",
      "As-treated analysis, which groups participants by the treatment actually received",
      "Subgroup analysis restricted to participants without side effects",
      "Exclusion of all nonadherent participants to reduce noise"
    ],
    answer: 0,
    exp: "Analyzing participants according to their originally assigned group, regardless of adherence or crossover, is intention-to-treat analysis. It preserves the prognostic balance created by randomization, avoids bias from nonrandom dropout or crossover, and gives a conservative, real-world estimate of effectiveness. Per-protocol and as-treated analyses break randomization and can introduce selection bias.",
    why: [
      "Correct: keeping participants in their randomized groups regardless of adherence is intention-to-treat analysis, which preserves randomization and estimates real-world effectiveness.",
      "Per-protocol analysis includes only adherent participants and can bias results by breaking the randomized comparison.",
      "As-treated analysis groups by treatment actually received, which discards randomization and reintroduces confounding.",
      "Restricting to participants without side effects is a subgroup analysis that selects a nonrandom subset and biases the estimate.",
      "Excluding nonadherent participants removes randomization protection and can distort the treatment effect."
    ]
  },
  {
    id: "s1-0273",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Regression to the mean",
    difficulty: "hard",
    anchor: null,
    vignette: "Researchers screen thousands of people and enroll only those with the highest 5% of blood pressure readings into a study of a new relaxation technique. Several weeks later, without any effective intervention, the group's average blood pressure has fallen noticeably. The investigators conclude the technique lowered blood pressure, but a statistician cautions that the drop was expected even with no true effect.",
    lead: "Which phenomenon best explains the apparent improvement?",
    options: [
      "The placebo effect",
      "Regression to the mean",
      "The Hawthorne effect",
      "Lead-time bias",
      "Systematic measurement error in the blood pressure device"
    ],
    answer: 1,
    exp: "When subjects are selected because of an extreme measurement, repeat measurements tend to fall closer to the population average simply because of random variation, a phenomenon called regression to the mean. Because only the highest readings were selected, part of each value reflected transient upward fluctuation that is not repeated on re-measurement, producing an apparent improvement independent of any treatment. A concurrent control group is needed to distinguish a true effect.",
    why: [
      "The placebo effect is a real physiologic or perceived response to an inert intervention, but here the drop is a statistical artifact of selecting extreme values.",
      "Correct: selecting subjects with extreme readings makes subsequent measurements move toward the mean, so blood pressure falls even without a true effect (regression to the mean).",
      "The Hawthorne effect is a change in behavior from being observed, which would not specifically explain a fall from extreme baseline values.",
      "Lead-time bias applies to screening and survival time, not to repeated measurements regressing toward the mean.",
      "Systematic measurement error would bias all readings consistently, not produce a decline concentrated in an extreme-selected group."
    ]
  },
  {
    id: "s1-0274",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Confidentiality and duty to protect third parties (driving safety)",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 58-year-old man with poorly controlled epilepsy has had two breakthrough seizures in the past month, including one while awake. He works as a long-haul truck driver and states that he intends to keep driving because he cannot afford time off. The physician counsels him about the danger and the need to stop driving until his seizures are controlled, but he refuses and plans to drive that afternoon.",
    lead: "Which is the most appropriate action?",
    options: [
      "Maintain strict confidentiality and take no further action",
      "Inform only the patient's family and let them intervene",
      "Notify the appropriate driving/licensing authority in accordance with public-safety obligations",
      "Immediately discharge the patient from the practice",
      "Secretly discontinue his antiepileptic prescription to prevent driving"
    ],
    answer: 2,
    exp: "When a patient poses a serious, foreseeable risk to identifiable third parties or the public, the physician's duty to protect others can override confidentiality. An uncontrolled seizure disorder in a commercial driver who intends to keep driving is such a situation; after counseling the patient, the physician should report to the appropriate driving or licensing authority as permitted or required by law. This balances patient confidentiality against the safety of others on the road.",
    why: [
      "Maintaining strict confidentiality ignores a serious, foreseeable threat to public safety that ethically and legally permits disclosure.",
      "Telling only the family does not discharge the physician's responsibility to prevent harm and improperly shifts the burden without protecting the public.",
      "Correct: an uncontrolled seizure disorder in a driver who intends to keep driving justifies notifying the driving/licensing authority to protect third parties, overriding confidentiality after counseling.",
      "Discharging the patient abandons him and does nothing to address the immediate public-safety risk.",
      "Covertly stopping his medication is deceptive, harmful, and unethical, and would worsen his seizure control."
    ]
  },
  {
    id: "s1-0275",
    system: "Social Sciences / Ethics",
    discipline: "Ethics",
    topic: "Medical futility and non-beneficial treatment",
    difficulty: "moderate",
    anchor: null,
    vignette: "An 82-year-old man with widely metastatic cancer is dying of multi-organ failure in the intensive care unit despite maximal support. His family insists that everything, including cardiopulmonary resuscitation and additional aggressive interventions, be continued, believing a miracle is possible. The care team agrees these interventions cannot restore organ function or meaningfully prolong life and would only add suffering.",
    lead: "Which is the most appropriate course of action?",
    options: [
      "Comply fully with all requested interventions because the family's wishes are absolute",
      "Unilaterally stop all care immediately without informing the family",
      "Transfer the patient to another hospital to avoid the conflict",
      "Meet with the family to clarify prognosis and goals of care, explaining that non-beneficial interventions are not obligatory",
      "Obtain a court order before limiting any intervention"
    ],
    answer: 3,
    exp: "Physicians are not ethically obligated to provide interventions that cannot achieve a meaningful physiologic benefit, and offering such treatment can violate nonmaleficence. The appropriate response is not unilateral withdrawal but a compassionate goals-of-care discussion that clarifies the poor prognosis, addresses the family's hopes and values, and redirects care toward comfort. Ethics consultation and second opinions can help when disagreement persists.",
    why: [
      "A family's wishes are important but do not obligate physicians to provide interventions that offer no meaningful benefit and only prolong suffering.",
      "Unilaterally stopping care without communication is unethical and abandons the shared decision-making process with the family.",
      "Transferring the patient to avoid the conflict abandons the family and sidesteps the needed goals-of-care conversation.",
      "Correct: the team should hold a compassionate family meeting to clarify prognosis and goals of care and explain that non-beneficial interventions are not ethically obligatory.",
      "A court order is a last resort for intractable disputes, not the first step before an honest goals-of-care discussion."
    ]
  }
];
