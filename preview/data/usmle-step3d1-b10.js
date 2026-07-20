/*
 * Rounds Codex - USMLE Step 3, Day 1 (Foundations of Independent Practice) bank, Batch 10 (7 items)
 * Day-1-FIP blueprint: biostatistics/epidemiology and medical-literature interpretation
 * are heavily represented alongside applied clinical vignettes emphasizing essential
 * diagnosis, best initial diagnostic testing, screening, prevention, and ethics.
 * All vignettes are 100% original; source material used for facts only, never phrasing.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E; only the keyed one starts "Correct")
 */
const USMLE_STEP3D1_B10 = [
  {
    id: "s3-0401",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Attributable risk and attributable risk percent",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A prospective cohort study follows smokers and nonsmokers and records the incidence of a chronic lung disease over 10 years. Investigators want to quantify the excess disease burden in smokers that could be attributed to smoking if the association is causal.\n\n| Group | 10-year incidence |\n|---|---|\n| Smokers (exposed) | 90 per 1,000 |\n| Nonsmokers (unexposed) | 10 per 1,000 |",
    lead: "Which value best represents the attributable risk in the exposed and its interpretation?",
    options: [
      "The relative risk is 9, so the attributable risk is a ninefold ratio of incidence between smokers and nonsmokers.",
      "The attributable risk is 80 per 1,000 (90 minus 10), the excess incidence among smokers attributable to smoking if causal, giving an attributable risk percent of about 89%.",
      "The attributable risk is 100 per 1,000, obtained by adding the two incidence figures together.",
      "The attributable risk cannot be determined without first calculating an odds ratio.",
      "The attributable risk is 10 per 1,000, equal to the incidence among the nonsmokers."
    ],
    answer: 1,
    exp: "Attributable risk (the risk difference) is the incidence in the exposed minus the incidence in the unexposed: 90 - 10 = 80 per 1,000. It estimates the excess disease in the exposed group that would be attributable to the exposure if the relationship is causal. The attributable risk percent, (Ie - Iu)/Ie = 80/90, is about 89%, the proportion of disease in exposed persons attributable to the exposure. This absolute difference is distinct from the relative risk (a ratio of 9) and does not require an odds ratio.",
    why: [
      "A ratio of 9 is the relative risk; attributable risk is an absolute difference in incidence, not a ratio.",
      "Correct: attributable risk is the incidence difference, 90 - 10 = 80 per 1,000, and the attributable risk percent is (90 - 10)/90, about 89%.",
      "Adding incidences is not meaningful; attributable risk is their difference (80 per 1,000), not their sum.",
      "Attributable risk is computed directly from cohort incidence data and needs no odds ratio.",
      "10 per 1,000 is the baseline incidence in the unexposed, not the excess risk attributable to the exposure."
    ]
  },
  {
    id: "s3-0402",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Spectrum bias in diagnostic accuracy studies",
    difficulty: "hard",
    anchor: null,
    vignette: "A new blood test's sensitivity and specificity were first reported in a study that compared patients with severe, advanced disease against entirely healthy volunteers. When the same test is later applied in a primary-care population that includes many patients with early, mild disease and various comorbid conditions, both its sensitivity and specificity are substantially lower.",
    lead: "Which methodologic problem best explains the decline in the test's measured performance?",
    options: [
      "Verification bias, arising because only some patients underwent the reference standard.",
      "Lead-time bias, because the test detects the disease at an earlier point in its course.",
      "Publication bias affecting which accuracy studies were reported in the literature.",
      "Spectrum bias: accuracy estimated from an unrepresentative spectrum (severe cases versus healthy controls) does not generalize to the milder, more heterogeneous spectrum of patients actually tested in practice.",
      "Regression to the mean occurring across repeated administrations of the test."
    ],
    answer: 3,
    exp: "Sensitivity and specificity are not fixed properties of a test; they vary with the clinical spectrum of the patients studied. Deriving them from clearly severe cases and healthy controls (a case-control-like design) tends to overestimate accuracy, because such patients are easy to classify. Applying the test to a representative population with milder, early disease and conditions that mimic the target disorder lowers the apparent sensitivity and specificity. This is spectrum bias, distinct from verification bias (incomplete reference-standard testing), lead-time bias, publication bias, and regression to the mean.",
    why: [
      "Verification bias comes from applying the reference standard selectively, not from an unrepresentative case mix, which is the issue here.",
      "Lead-time bias concerns earlier detection inflating survival time, not shifts in measured sensitivity and specificity.",
      "Publication bias concerns which studies get published, not why accuracy falls when the test is applied to a different patient spectrum.",
      "Correct: accuracy derived from severe cases versus healthy controls does not carry over to a representative, milder patient spectrum, which is spectrum bias.",
      "Regression to the mean involves extreme values drifting toward the average on remeasurement, not the case mix of a diagnostic study."
    ]
  },
  {
    id: "s3-0403",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Ludwig angina diagnosis",
    difficulty: "easy",
    anchor: null,
    vignette: "A 45-year-old man with an untreated infected lower molar has 2 days of rapidly progressive, tender bilateral swelling under the jaw. His mouth floor is firm and board-like (woody), his tongue is pushed upward and backward, and he is drooling with a muffled voice. He is febrile and increasingly anxious about breathing.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Ludwig angina, a rapidly spreading bilateral cellulitis of the submandibular and sublingual spaces (usually from a mandibular molar infection) that elevates the tongue and threatens the airway.",
      "Peritonsillar abscess with contralateral uvular deviation.",
      "Acute submandibular sialadenitis from a salivary duct stone.",
      "Infectious mononucleosis with tonsillar enlargement.",
      "Acute epiglottitis causing stridor and tripoding."
    ],
    answer: 0,
    exp: "Ludwig angina is a rapidly progressive, bilateral cellulitis of the submandibular and sublingual spaces, most often arising from an infected mandibular molar. It produces brawny, board-like induration of the floor of the mouth with posterosuperior displacement of the tongue, drooling, and a muffled voice, and it is an airway emergency requiring airway protection and broad-spectrum antibiotics. Its bilateral floor-of-mouth induration and tongue elevation distinguish it from a unilateral peritonsillar abscess, ductal sialadenitis, mononucleosis, and supraglottic epiglottitis.",
    why: [
      "Correct: bilateral woody submandibular swelling with tongue elevation and drooling from an odontogenic source is Ludwig angina, an airway emergency.",
      "Peritonsillar abscess causes a unilateral bulging soft palate with uvular deviation, not bilateral floor-of-mouth induration.",
      "Sialadenitis produces painful swelling of a single salivary gland, not diffuse bilateral floor-of-mouth induration with tongue elevation.",
      "Mononucleosis causes bilateral tonsillar enlargement and lymphadenopathy, not brawny submandibular induration from a dental source.",
      "Epiglottitis causes supraglottic swelling with stridor and tripoding, not the woody floor-of-mouth induration of Ludwig angina."
    ]
  },
  {
    id: "s3-0404",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Placenta accreta spectrum diagnosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 34-year-old woman at 32 weeks' gestation has a known placenta previa and a history of two prior cesarean deliveries. She has had no bleeding. A surveillance ultrasound is performed to plan her delivery.\n\n**[IMAGE: obstetric ultrasound showing multiple irregular placental lacunae, loss of the normal hypoechoic retroplacental clear zone, and thinning of the myometrium beneath the placenta, with increased vascularity at the uterine-bladder interface on Doppler]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Complete hydatidiform mole.",
      "Placental abruption.",
      "Threatened uterine rupture at the prior scar.",
      "Vasa previa.",
      "Placenta accreta spectrum, an abnormally adherent or invasive placenta suggested by prior cesarean deliveries plus placenta previa and ultrasound findings of placental lacunae, loss of the retroplacental clear zone, and myometrial thinning."
    ],
    answer: 4,
    exp: "Placenta accreta spectrum describes abnormal placental invasion into or through the myometrium. The strongest risk factors are prior cesarean deliveries combined with a placenta previa overlying the scar. Characteristic ultrasound signs include multiple placental lacunae, loss of the normal hypoechoic retroplacental clear zone, myometrial thinning, and increased vascularity at the uterine-bladder interface. Antenatal recognition allows planned delivery at a center prepared for hemorrhage. These findings are not those of a molar pregnancy, abruption, uterine rupture, or vasa previa.",
    why: [
      "A hydatidiform mole shows a heterogeneous, cystic 'snowstorm' intrauterine mass with markedly elevated hCG, not an invasive placenta over a prior scar.",
      "Abruption presents acutely with painful bleeding and a retroplacental clot, not the chronic invasive findings and myometrial thinning described.",
      "Uterine rupture is an acute intrapartum catastrophe with pain, fetal distress, and a palpable defect, not these sonographic invasion signs.",
      "Vasa previa is unprotected fetal vessels crossing the internal os, seen on Doppler over the cervix, not placental lacunae with myometrial invasion.",
      "Correct: prior cesareans with placenta previa plus lacunae, loss of the retroplacental clear zone, and myometrial thinning indicate placenta accreta spectrum."
    ]
  },
  {
    id: "s3-0405",
    system: "Surgery",
    discipline: "Surgery",
    topic: "Zenker diverticulum diagnosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 70-year-old man has months of progressive difficulty swallowing, regurgitation of undigested food hours after meals, chronic bad breath, and a gurgling sensation in his neck. Occasionally undigested food appears on his pillow at night, and he has had episodes of coughing and aspiration.\n\n**[IMAGE: barium esophagram showing a posterior midline outpouching at the pharyngoesophageal junction just above the upper esophageal sphincter]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Achalasia of the lower esophageal sphincter.",
      "Esophageal squamous cell carcinoma.",
      "Zenker diverticulum, a pharyngoesophageal pulsion diverticulum through Killian triangle causing dysphagia, regurgitation of undigested food, halitosis, and aspiration.",
      "Diffuse esophageal spasm.",
      "Gastroesophageal reflux disease with regurgitation."
    ],
    answer: 2,
    exp: "A Zenker diverticulum is a false pulsion diverticulum that herniates posteriorly through Killian triangle, a weak area above the cricopharyngeus, because of upper esophageal sphincter dysfunction. Classic features are progressive dysphagia, regurgitation of undigested food hours after eating, halitosis, a gurgling neck, and aspiration, typically in older adults. A barium esophagram shows the outpouching and is the diagnostic study of choice; blind nasogastric or endoscopic instrumentation risks perforating the pouch. The picture differs from achalasia, carcinoma, esophageal spasm, and reflux.",
    why: [
      "Achalasia causes dysphagia to solids and liquids with a bird-beak distal narrowing, not a proximal posterior pouch with regurgitation of undigested food.",
      "Carcinoma typically causes progressive solid-food dysphagia with weight loss and an irregular luminal mass, not a smooth pharyngoesophageal outpouching.",
      "Correct: dysphagia, regurgitation of undigested food, halitosis, and a proximal posterior outpouching on esophagram indicate a Zenker diverticulum.",
      "Diffuse esophageal spasm causes intermittent chest pain with a corkscrew esophagram, not a retention pouch regurgitating old food.",
      "Reflux disease causes heartburn and regurgitation of acidic material, not regurgitation of undigested food from a neck pouch with halitosis."
    ]
  },
  {
    id: "s3-0406",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Hirschsprung disease diagnosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A term neonate did not pass meconium in the first 48 hours of life and now has progressive abdominal distension and bilious vomiting. On digital rectal examination the anal canal feels tight, and withdrawal of the finger is followed by an explosive gush of stool and gas.\n\n**[IMAGE: contrast enema showing a narrow distal rectosigmoid segment with an abrupt transition zone to dilated proximal colon]**",
    lead: "Which of the following is the most likely diagnosis, and what confirms it?",
    options: [
      "Hirschsprung disease (congenital aganglionic megacolon) from absent distal ganglion cells, suggested by delayed meconium passage with a transition zone on contrast enema and confirmed by rectal suction biopsy showing absent ganglion cells.",
      "Meconium ileus, confirmed by a normal rectal biopsy.",
      "Anorectal malformation (imperforate anus), confirmed on inspection of the perineum.",
      "Necrotizing enterocolitis, confirmed by pneumatosis intestinalis on radiography.",
      "Functional constipation, confirmed by a trial of laxatives."
    ],
    answer: 0,
    exp: "Hirschsprung disease results from failed migration of neural crest cells, leaving a distal aganglionic bowel segment that cannot relax. It classically presents with failure to pass meconium in the first 48 hours, abdominal distension, and bilious emesis, with a tight rectum and an explosive release of stool after rectal examination. A contrast enema shows a narrow aganglionic distal segment with a transition zone to dilated proximal colon, and rectal suction biopsy (absent ganglion cells with hypertrophied nerve trunks) is the confirmatory gold standard. This differs from meconium ileus, imperforate anus, necrotizing enterocolitis, and functional constipation.",
    why: [
      "Correct: delayed meconium, a transition zone on contrast enema, and the explosive-stool sign point to Hirschsprung disease, confirmed by rectal suction biopsy showing absent ganglion cells.",
      "Meconium ileus (often with cystic fibrosis) shows inspissated meconium and a microcolon, and the rectal biopsy in Hirschsprung disease is abnormal, not normal.",
      "An anorectal malformation is diagnosed by perineal inspection showing an absent or abnormal anus, which is not described here.",
      "Necrotizing enterocolitis causes pneumatosis and systemic toxicity, usually in preterm or fed infants, not a fixed rectosigmoid transition zone.",
      "Functional constipation does not present in the newborn period with failure to pass meconium and a transition-zone contrast enema."
    ]
  },
  {
    id: "s3-0407",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Acute stress disorder diagnosis",
    difficulty: "easy",
    anchor: null,
    vignette: "Twelve days after surviving a serious highway collision, a 29-year-old man has intrusive memories and nightmares of the crash, a sense that his surroundings are unreal, avoidance of driving, irritability, and hypervigilance. The symptoms began within a few days of the event and are impairing his work.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Post-traumatic stress disorder.",
      "Adjustment disorder with anxiety.",
      "Acute stress disorder, a trauma-related disorder with intrusion, dissociative, avoidance, and arousal symptoms lasting from 3 days up to 1 month after exposure to a traumatic event.",
      "Panic disorder.",
      "Generalized anxiety disorder."
    ],
    answer: 2,
    exp: "Acute stress disorder follows exposure to a traumatic event and features intrusion, negative mood, dissociative, avoidance, and arousal symptoms. Its defining feature is timing: symptoms last from 3 days up to 1 month after the trauma. If the same symptoms persist beyond 1 month, the diagnosis becomes post-traumatic stress disorder. Here symptoms began within days and are present at 12 days, fitting acute stress disorder. It differs from adjustment disorder (a nontraumatic stressor without this symptom cluster), panic disorder, and generalized anxiety disorder.",
    why: [
      "Post-traumatic stress disorder requires the symptom pattern to persist beyond 1 month, whereas these symptoms began under 2 weeks ago.",
      "Adjustment disorder follows a nonlife-threatening stressor and lacks the intrusion, dissociation, and hyperarousal cluster tied to a traumatic event.",
      "Correct: trauma-related intrusion, dissociative, avoidance, and arousal symptoms lasting 3 days to 1 month after the event define acute stress disorder.",
      "Panic disorder centers on recurrent unexpected panic attacks with anticipatory worry, not trauma-triggered re-experiencing and avoidance.",
      "Generalized anxiety disorder involves at least 6 months of pervasive worry about many domains, not an acute post-traumatic reaction."
    ]
  }
];
