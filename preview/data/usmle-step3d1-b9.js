/*
 * Rounds Codex - USMLE Step 3, Day 1 (Foundations of Independent Practice) bank, Batch 9 (25 items)
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
const USMLE_STEP3D1_B9 = [
  {
    id: "s3-0351",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Precision versus accuracy",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A new handheld analyzer measures serum sodium. When a single control sample of known concentration is measured many times, the readings cluster very tightly together, but their average is consistently about 8 mmol/L higher than the true reference value.\n\n| Property | Finding |\n|---|---|\n| Spread of repeated readings | very tight (low random error) |\n| Mean of readings vs true value | +8 mmol/L constant offset |",
    lead: "Which statement best characterizes the analyzer's performance?",
    options: [
      "The analyzer is precise (readings are highly reproducible with little random error) but inaccurate (systematically biased away from the true value); precision and accuracy are distinct properties.",
      "The analyzer is both precise and accurate because the readings are highly reproducible.",
      "The tight clustering of readings proves the values are valid and free of systematic error.",
      "The analyzer is accurate but imprecise.",
      "Precision and accuracy are synonyms, so a precise instrument is necessarily accurate."
    ],
    answer: 0,
    exp: "Precision refers to reproducibility (low random error), whereas accuracy refers to closeness to the true value (low systematic error, or bias). Tightly clustered readings that share a constant offset from the reference value are precise but not accurate: the random error is small, yet a systematic bias remains. These are independent properties, so reproducibility alone does not establish validity, and the pattern here (tight spread, fixed offset) is precise-but-inaccurate rather than the reverse.",
    why: [
      "Correct: reproducible readings with a constant offset from the truth are precise (low random error) but inaccurate (biased), which are distinct properties.",
      "Reproducible readings that are systematically offset are precise but not accurate.",
      "Reproducibility addresses random error only; it does not rule out the systematic offset that undermines validity.",
      "This reverses the situation: the readings are reproducible (precise) but biased (inaccurate), not accurate-but-imprecise.",
      "Precision and accuracy are distinct; a precise instrument can still carry a systematic bias."
    ]
  },
  {
    id: "s3-0352",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Per-protocol analysis and its bias",
    difficulty: "moderate",
    anchor: null,
    vignette: "In a randomized trial of a demanding rehabilitation program, investigators analyze only participants who completed the full protocol, excluding those who dropped out or were nonadherent. This per-protocol analysis shows a much larger benefit than the intention-to-treat analysis of the same trial.",
    lead: "Which statement best explains why the per-protocol result may be misleading?",
    options: [
      "Per-protocol analysis is always the preferred primary analysis for a superiority trial because it estimates the pure biologic efficacy without bias.",
      "Excluding dropouts and nonadherent participants breaks the balance created by randomization and can introduce selection bias, because adherence is often linked to prognosis; intention-to-treat better preserves randomization for a superiority trial.",
      "Per-protocol and intention-to-treat analyses must yield identical estimates, so one of them must be a calculation error.",
      "The larger per-protocol effect proves the treatment is truly more effective than the intention-to-treat estimate indicates.",
      "Intention-to-treat analysis introduces selection bias by retaining nonadherent patients in their assigned groups."
    ],
    answer: 1,
    exp: "Randomization balances prognostic factors only across the originally assigned groups. Once nonadherent participants and dropouts are excluded, that balance can be lost, because adherence itself is frequently associated with better (or worse) prognosis. The per-protocol estimate can therefore be biased in either direction. For a superiority trial, intention-to-treat analysis, which keeps every randomized patient in the assigned arm, best preserves the benefits of randomization and gives a conservative, less biased estimate of effectiveness.",
    why: [
      "Per-protocol estimates can be biased because adherers differ prognostically; it is not the uniformly preferred primary analysis for superiority trials.",
      "Correct: excluding dropouts/nonadherers breaks randomization and can introduce selection bias, so intention-to-treat is the more valid primary analysis for a superiority trial.",
      "The two analyses address different populations and routinely differ; a difference is expected rather than an error.",
      "The inflated per-protocol effect may reflect selection bias among adherers, not genuine superiority.",
      "Intention-to-treat preserves randomization by analyzing all assigned patients; it avoids, rather than creates, this selection bias."
    ]
  },
  {
    id: "s3-0353",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Differential versus nondifferential misclassification",
    difficulty: "hard",
    anchor: null,
    vignette: "In a case-control study of diet and cancer, past intake of a particular food is measured by questionnaire. Patients with cancer recall and report their prior intake more intensively and differently than controls, so the accuracy of the exposure measurement differs according to disease status.",
    lead: "How does this type of misclassification most likely affect the measured association?",
    options: [
      "Because misclassification is random, it will always bias the odds ratio toward the null.",
      "Misclassification that depends on disease status has no systematic effect on the odds ratio.",
      "This is differential misclassification, in which measurement error depends on disease status; it can bias the estimated association in either direction (toward or away from the null), unlike nondifferential misclassification of a binary exposure, which typically biases toward the null.",
      "Differential misclassification always biases the odds ratio away from the null, exaggerating the association.",
      "This is nondifferential misclassification, so it will bias the result predictably toward the null."
    ],
    answer: 2,
    exp: "Misclassification is differential when the error depends on outcome (or exposure) status, as with recall that differs between cases and controls. Differential misclassification can bias an estimate in either direction, toward or away from the null, so its impact is unpredictable. This contrasts with nondifferential misclassification of a binary exposure, where the error is independent of disease status and generally biases the estimate toward the null. The scenario described is differential, so the simple toward-the-null rule does not apply.",
    why: [
      "The error here is not random or independent of disease status, so the 'always toward the null' rule for nondifferential error does not apply.",
      "Differential misclassification does distort the estimate; it is not neutral.",
      "Correct: error that depends on disease status is differential misclassification, which can bias the association in either direction.",
      "Differential misclassification can bias in either direction, not exclusively away from the null.",
      "The error depends on disease status (differential), not independent of it, so the toward-the-null expectation of nondifferential error does not hold."
    ]
  },
  {
    id: "s3-0354",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Ceiling and floor effects",
    difficulty: "moderate",
    anchor: null,
    vignette: "A trial uses a symptom questionnaire scored from 0 to 10. Many enrolled patients already score at or very near the maximum of 10 at baseline, so for those patients the instrument cannot register any further worsening during the study, even if their symptoms truly deteriorate.",
    lead: "Which measurement problem does this scenario most directly illustrate?",
    options: [
      "Regression to the mean produced by repeated measurement of the same patients.",
      "A floor effect, because the scores are clustered at the bottom of the scale.",
      "Immortal-time bias arising during the follow-up period.",
      "A ceiling effect, in which a large share of participants already score at the top of the scale so that true increases cannot be detected, limiting the instrument's ability to capture change.",
      "Confounding by an unmeasured third variable."
    ],
    answer: 3,
    exp: "A ceiling effect occurs when many participants cluster at the highest possible score, so the instrument cannot record any further increase and true worsening becomes undetectable. Its mirror image is a floor effect (clustering at the lowest score). Here scores pile up at the maximum, so worsening cannot be measured. This is a limitation of the measurement scale's range, not regression to the mean (drift of extreme values on remeasurement), immortal-time bias (misclassified follow-up), or confounding (a distorting third variable).",
    why: [
      "Regression to the mean concerns extreme values drifting toward the average on remeasurement, not scores capped at the top of a scale.",
      "A floor effect is clustering at the lowest score; here the scores cluster at the maximum instead.",
      "Immortal-time bias concerns misclassified person-time during follow-up, not the limited range of a measurement scale.",
      "Correct: clustering at the top of the scale prevents detection of further increases, which is a ceiling effect.",
      "Confounding involves a third variable distorting an association, not a limit imposed by the measurement scale itself."
    ]
  },
  {
    id: "s3-0355",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Nested case-control design with incidence-density sampling",
    difficulty: "hard",
    anchor: null,
    vignette: "Within a large, already-assembled cohort, investigators want to study an expensive stored biomarker. Rather than assay everyone, they measure it in all participants who developed the disease and in a sample of cohort members who were still disease-free and at risk at the moment each case occurred.",
    lead: "Which study design and sampling strategy is described?",
    options: [
      "A cross-sectional study, because the biomarker is measured only once per person.",
      "An ecological study, because the cohort is analyzed at the group level.",
      "A traditional case-control study that requires a rare-disease assumption for the odds ratio to approximate the risk ratio.",
      "A randomized controlled trial nested within the cohort.",
      "A nested case-control study using incidence-density (risk-set) sampling, which draws controls from those still at risk when each case arises; this efficient design lets the odds ratio estimate the rate ratio without a rare-disease assumption."
    ],
    answer: 4,
    exp: "Sampling cases and selecting controls from the risk set present at each case's event time, within a defined cohort, is a nested case-control study with incidence-density (risk-set) sampling. It is efficient because the costly biomarker is measured in only a fraction of the cohort while retaining the cohort's temporal structure. With risk-set sampling, the odds ratio directly estimates the incidence-rate ratio, so no rare-disease assumption is needed. It is not cross-sectional, ecological, a conventional case-control study, or a randomized trial.",
    why: [
      "Incident cases accrue over follow-up time, so this is not a single-time-point cross-sectional design.",
      "Analysis is at the individual level within a defined cohort, unlike a group-level ecological study.",
      "With incidence-density sampling the odds ratio estimates the rate ratio directly, so the rare-disease assumption is not required.",
      "No intervention is assigned; the biomarker is merely observed, so it is not a randomized trial.",
      "Correct: sampling controls from the risk set at each case's event time within a cohort is a nested case-control study with incidence-density sampling, and its odds ratio estimates the rate ratio."
    ]
  },
  {
    id: "s3-0356",
    system: "Preventive Medicine & Ethics",
    discipline: "Epidemiology",
    topic: "Point prevalence versus period prevalence",
    difficulty: "easy",
    anchor: "table",
    vignette: "A community health survey of a town reports two figures for a chronic skin condition: the proportion of residents who have the condition on the single day of the survey, and the proportion who had the condition at any time during the entire calendar year.\n\n| Measure | Value |\n|---|---|\n| Residents affected on survey day | 40 per 1,000 |\n| Residents affected at any time during the year | 95 per 1,000 |",
    lead: "Which statement correctly labels and interprets these two measures?",
    options: [
      "The single-day figure is point prevalence and the whole-year figure is period prevalence; period prevalence is generally higher because it also counts cases present at any time during the interval.",
      "Both figures are incidence rates because they count people who have the condition.",
      "The single-day figure is incidence and the whole-year figure is prevalence.",
      "Point prevalence is always higher than period prevalence.",
      "The two measures are interchangeable and should be equal."
    ],
    answer: 0,
    exp: "Point prevalence is the proportion of a population that has a condition at a single instant, while period prevalence is the proportion affected at any time during a defined interval. Period prevalence includes cases that were present at the start, resolved during the interval, or arose during it, so it is generally at least as high as point prevalence. Neither figure is an incidence rate, which counts only new cases per unit of person-time; the two prevalence measures describe different time windows and are not expected to be equal.",
    why: [
      "Correct: the single-day value is point prevalence, the whole-year value is period prevalence, and period prevalence is generally the higher of the two.",
      "Prevalence counts existing cases at or over a time window, not new cases per person-time as incidence does.",
      "Neither figure counts only new cases, so labeling the single-day value as incidence is incorrect.",
      "Period prevalence includes additional cases accumulated over the interval and is generally higher, not lower.",
      "The two measures describe different time windows (an instant versus a year) and are not expected to be equal."
    ]
  },
  {
    id: "s3-0357",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Tetanus wound prophylaxis",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 40-year-old man steps on a rusty nail, sustaining a deep, dirty puncture wound. He completed his full childhood primary tetanus vaccination series, but he is certain his last tetanus booster was more than 10 years ago.\n\n| Factor | Status |\n|---|---|\n| Wound type | deep, dirty puncture (tetanus-prone) |\n| Primary series | documented complete (3 or more doses) |\n| Last booster dose | more than 10 years ago |",
    lead: "Which of the following is the most appropriate tetanus prophylaxis?",
    options: [
      "No prophylaxis is needed because he already completed the childhood primary series.",
      "Administer a tetanus toxoid-containing booster (Tdap or Td); tetanus immune globulin is not indicated because he has a documented complete primary series, and a booster is due for this tetanus-prone wound since his last dose was more than 5 years ago.",
      "Give tetanus immune globulin alone, without any tetanus toxoid.",
      "Give both the toxoid booster and tetanus immune globulin, because immune globulin is required for every dirty wound.",
      "Withhold the toxoid and simply observe him for trismus, treating only if symptoms develop."
    ],
    answer: 1,
    exp: "For a tetanus-prone (dirty) wound, a tetanus toxoid-containing booster is indicated if it has been 5 or more years since the last dose. Tetanus immune globulin is reserved for tetanus-prone wounds when the primary series is unknown or incomplete (fewer than 3 doses). This patient has a documented complete primary series but a remote last booster, so the correct action is a Td or Tdap booster alone; immune globulin is not required, and simple observation would be unsafe.",
    why: [
      "A remote booster still warrants a dose for a tetanus-prone wound when 5 or more years have elapsed, so prophylaxis is needed.",
      "Correct: give a Td/Tdap booster because the last dose was over 5 years ago, and omit immune globulin because the primary series is documented and complete.",
      "The toxoid booster is the key step; immune globulin alone omits needed active immunization and is unnecessary with a complete series.",
      "Immune globulin is indicated only when the primary series is incomplete or unknown, not for every dirty wound.",
      "Waiting for trismus is unsafe; timely toxoid boosting is the standard preventive step for this wound."
    ]
  },
  {
    id: "s3-0358",
    system: "Preventive Medicine & Ethics",
    discipline: "Ethics",
    topic: "Emancipated minor consent",
    difficulty: "easy",
    anchor: null,
    vignette: "A 16-year-old girl who is legally married and lives independently, supporting herself with her own job, comes to clinic for treatment of a routine illness. Her parents are not involved in her care and are not present.",
    lead: "Which statement best describes her authority to consent to her own medical treatment?",
    options: [
      "Parental consent is always required for any patient under 18, regardless of circumstances.",
      "She may consent only to care related to reproduction, not to general medical treatment.",
      "As an emancipated minor (for example, one who is married, self-supporting and living independently, or in the military), she may consent to her own general medical care as an adult would, without parental permission.",
      "A separate court order is required before she can consent to routine treatment.",
      "She may consent to her own care only after she reaches the age of 18."
    ],
    answer: 2,
    exp: "An emancipated minor, such as one who is married, financially self-supporting and living apart from parents, or serving in the military, may consent to general medical care with the same authority as an adult, without parental involvement. This differs from confidential-care statutes that let ordinary minors consent to specific services (such as contraception or sexually transmitted infection care). Because this patient is married and self-supporting, she is emancipated and does not require parental consent, a court order, or waiting until age 18.",
    why: [
      "Emancipation is a recognized exception; being under 18 does not universally require parental consent.",
      "Emancipation grants authority over general medical care, not only reproductive services.",
      "Correct: as a married, self-supporting minor she is emancipated and may consent to her own general medical care as an adult would.",
      "Emancipation by marriage or self-support does not require a separate court order for routine care.",
      "Emancipated status confers consent authority now; she need not wait until age 18."
    ]
  },
  {
    id: "s3-0359",
    system: "Internal Medicine",
    discipline: "Hepatology",
    topic: "Wilson disease diagnosis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 22-year-old man has several months of worsening tremor, slurred speech, and declining school performance, along with fatigue and mild jaundice. On slit-lamp examination there are golden-brown rings at the corneal margins.\n\n| Test | Value |\n|---|---|\n| Serum ceruloplasmin | low |\n| Kayser-Fleischer rings | present |\n| 24-hour urinary copper | elevated |\n| Aminotransferases | mildly elevated |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Hereditary hemochromatosis.",
      "Autoimmune hepatitis.",
      "Alpha-1 antitrypsin deficiency.",
      "Wilson disease (hepatolenticular degeneration), a disorder of copper accumulation, supported by young-onset combined neuropsychiatric and hepatic disease, Kayser-Fleischer rings, low ceruloplasmin, and elevated urinary copper.",
      "Primary biliary cholangitis."
    ],
    answer: 3,
    exp: "Wilson disease is a disorder of impaired copper excretion that leads to copper accumulation in the liver and brain. Young-onset neuropsychiatric symptoms (tremor, dysarthria, cognitive or behavioral change) combined with liver disease, Kayser-Fleischer rings on slit-lamp examination, a low serum ceruloplasmin, and elevated 24-hour urinary copper are the classic picture. This constellation distinguishes it from iron-overload, autoimmune, protease-inhibitor-deficiency, and cholestatic antimitochondrial-antibody liver diseases, which lack the corneal rings and copper derangements.",
    why: [
      "Hemochromatosis causes iron overload with arthropathy, diabetes, and skin bronzing, not Kayser-Fleischer rings or low ceruloplasmin.",
      "Autoimmune hepatitis features autoantibodies and elevated IgG, without corneal copper rings or copper abnormalities.",
      "Alpha-1 antitrypsin deficiency causes liver and lung disease but not Kayser-Fleischer rings or the copper derangements seen here.",
      "Correct: young-onset neuropsychiatric plus hepatic disease with Kayser-Fleischer rings, low ceruloplasmin, and high urinary copper is diagnostic of Wilson disease.",
      "Primary biliary cholangitis is a cholestatic disease of middle-aged women with antimitochondrial antibodies, not copper accumulation with corneal rings."
    ]
  },
  {
    id: "s3-0360",
    system: "Internal Medicine",
    discipline: "Oncology",
    topic: "Carcinoid syndrome diagnosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 55-year-old woman has episodic cutaneous flushing, watery secretory diarrhea, and intermittent wheezing. On examination she has a murmur suggesting right-sided valvular heart disease.\n\n| Feature | Finding |\n|---|---|\n| Flushing, diarrhea, wheezing | episodic |\n| Right-sided valvular disease | present |\n| 24-hour urinary 5-HIAA | elevated |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Pheochromocytoma.",
      "Systemic mastocytosis.",
      "Menopausal vasomotor flushing.",
      "VIPoma.",
      "Carcinoid syndrome from a serotonin-secreting neuroendocrine tumor (often with hepatic metastases), supported by flushing, secretory diarrhea, wheezing, right-sided valvular disease, and elevated urinary 5-HIAA."
    ],
    answer: 4,
    exp: "Carcinoid syndrome arises when a serotonin-secreting neuroendocrine tumor, typically with liver metastases, releases vasoactive substances into the systemic circulation. The classic features are episodic flushing, secretory diarrhea, bronchospasm/wheezing, and fibrotic right-sided valvular heart disease. The best confirmatory finding is an elevated 24-hour urinary 5-hydroxyindoleacetic acid (5-HIAA), the metabolite of serotonin. Pheochromocytoma, mastocytosis, menopausal flushing, and VIPoma produce overlapping symptoms but not an elevated 5-HIAA.",
    why: [
      "Pheochromocytoma causes episodic hypertension, headache, and palpitations with elevated metanephrines, not elevated 5-HIAA.",
      "Systemic mastocytosis causes flushing and urticaria with elevated tryptase, not the 5-HIAA elevation and right-heart valve disease seen here.",
      "Menopausal flushing does not cause secretory diarrhea, wheezing, valvular disease, or elevated 5-HIAA.",
      "VIPoma causes profuse watery diarrhea with hypokalemia and achlorhydria, not flushing with elevated 5-HIAA.",
      "Correct: flushing, secretory diarrhea, wheezing, right-sided valvular disease, and elevated urinary 5-HIAA are classic for carcinoid syndrome."
    ]
  },
  {
    id: "s3-0361",
    system: "Internal Medicine",
    discipline: "Hepatology",
    topic: "Primary sclerosing cholangitis diagnosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 35-year-old man with a several-year history of ulcerative colitis has fatigue and pruritus. Liver studies show a cholestatic pattern with a markedly elevated alkaline phosphatase. He has no fever or right-upper-quadrant pain.\n\n**[IMAGE: MRCP showing multifocal intrahepatic and extrahepatic bile-duct strictures alternating with segments of dilatation, producing a beaded appearance]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Primary sclerosing cholangitis, a chronic fibrosing cholangiopathy strongly associated with inflammatory bowel disease, showing multifocal biliary strictures with a beaded appearance on cholangiography.",
      "Primary biliary cholangitis.",
      "Choledocholithiasis.",
      "Acute ascending cholangitis.",
      "Autoimmune hepatitis."
    ],
    answer: 0,
    exp: "Primary sclerosing cholangitis is a chronic fibrosing disease of the intrahepatic and extrahepatic bile ducts that is strongly associated with inflammatory bowel disease, especially ulcerative colitis. It produces a cholestatic biochemical pattern and characteristic multifocal strictures alternating with dilatation (a beaded appearance) on MRCP. This differs from the small-duct antimitochondrial-antibody disease of primary biliary cholangitis, a discrete obstructing stone, the acute Charcot-triad presentation of cholangitis, and the hepatocellular pattern of autoimmune hepatitis.",
    why: [
      "Correct: a young man with inflammatory bowel disease, cholestatic liver tests, and beaded multifocal biliary strictures has primary sclerosing cholangitis.",
      "Primary biliary cholangitis is a small-duct antimitochondrial-antibody disease of middle-aged women, without large-duct beading or the inflammatory bowel disease association.",
      "Choledocholithiasis produces a discrete obstructing stone, not multifocal beaded strictures throughout the biliary tree.",
      "Acute cholangitis presents with fever, jaundice, and pain (Charcot triad), which are absent here.",
      "Autoimmune hepatitis causes a hepatocellular pattern with autoantibodies, not cholestatic biliary strictures."
    ]
  },
  {
    id: "s3-0362",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Thrombotic thrombocytopenic purpura diagnosis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 40-year-old woman has new confusion, fever, and scattered petechiae. She takes no anticoagulants and has had no recent heparin exposure.\n\n| Test | Value / Finding |\n|---|---|\n| Platelet count | markedly low |\n| Hemoglobin | low |\n| Peripheral smear | numerous schistocytes |\n| PT / aPTT | normal |\n| Creatinine | mildly elevated |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Disseminated intravascular coagulation.",
      "Thrombotic thrombocytopenic purpura, a microangiopathy from severely deficient ADAMTS13 activity, presenting with microangiopathic hemolytic anemia, thrombocytopenia, neurologic changes, fever, and renal involvement with normal coagulation times.",
      "Immune thrombocytopenia.",
      "Heparin-induced thrombocytopenia.",
      "Evans syndrome."
    ],
    answer: 1,
    exp: "Thrombotic thrombocytopenic purpura results from severely deficient ADAMTS13 activity, leaving ultralarge von Willebrand factor multimers that drive microvascular platelet thrombi. The result is microangiopathic hemolytic anemia (schistocytes), thrombocytopenia, and organ ischemia producing neurologic changes, fever, and renal impairment, all with normal PT and aPTT because coagulation factors are not consumed. Normal coagulation times distinguish it from disseminated intravascular coagulation; the schistocytes and hemolysis distinguish it from immune thrombocytopenia, heparin-induced thrombocytopenia, and Evans syndrome.",
    why: [
      "Disseminated intravascular coagulation prolongs PT/aPTT and consumes fibrinogen; here the coagulation times are normal.",
      "Correct: microangiopathic hemolysis with schistocytes, thrombocytopenia, neurologic and renal findings, and normal coagulation times indicates thrombotic thrombocytopenic purpura.",
      "Immune thrombocytopenia causes isolated low platelets without schistocytes, hemolysis, or neurologic findings.",
      "Heparin-induced thrombocytopenia follows heparin exposure and causes thrombosis, not microangiopathic hemolysis with schistocytes.",
      "Evans syndrome combines immune hemolysis and thrombocytopenia with a positive Coombs test and no schistocytes."
    ]
  },
  {
    id: "s3-0363",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Guillain-Barre syndrome diagnosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 30-year-old man has progressive, symmetric weakness that began in the legs and ascended over several days, with loss of deep tendon reflexes. He had a self-limited diarrheal illness a few weeks earlier, and his sensation is relatively preserved.\n\n| Finding | Result |\n|---|---|\n| Weakness | ascending, symmetric |\n| Deep tendon reflexes | absent |\n| CSF protein | elevated |\n| CSF white cell count | normal |",
    lead: "Which of the following best supports the diagnosis?",
    options: [
      "Myasthenia gravis with fatigable ocular weakness.",
      "Amyotrophic lateral sclerosis with mixed upper and lower motor neuron signs.",
      "Guillain-Barre syndrome (acute inflammatory demyelinating polyradiculoneuropathy), supported by ascending areflexic weakness after an antecedent infection and cerebrospinal fluid albuminocytologic dissociation (elevated protein with a normal cell count).",
      "Acute transverse myelitis with a distinct sensory level.",
      "Botulism with descending paralysis."
    ],
    answer: 2,
    exp: "Guillain-Barre syndrome is an acute immune-mediated polyradiculoneuropathy that often follows a respiratory or gastrointestinal infection (classically Campylobacter). It presents with symmetric ascending weakness and early loss of reflexes, with relatively preserved sensation. Cerebrospinal fluid classically shows albuminocytologic dissociation, an elevated protein with a normal white cell count. Nerve conduction studies confirm demyelination. The pattern differs from fatigable myasthenia, mixed-sign amyotrophic lateral sclerosis, transverse myelitis with a sensory level, and descending botulism.",
    why: [
      "Myasthenia gravis causes fatigable ocular and bulbar weakness with preserved reflexes, not ascending areflexia with cerebrospinal fluid changes.",
      "Amyotrophic lateral sclerosis shows mixed upper and lower motor neuron signs over months, not acute post-infectious areflexic weakness.",
      "Correct: ascending areflexic weakness after an infection with cerebrospinal fluid albuminocytologic dissociation indicates Guillain-Barre syndrome.",
      "Transverse myelitis produces a sensory level and often hyperreflexia below the lesion, unlike this areflexic peripheral pattern.",
      "Botulism causes descending paralysis with prominent bulbar and autonomic signs, not ascending weakness with albuminocytologic dissociation."
    ]
  },
  {
    id: "s3-0364",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Subacute (de Quervain) thyroiditis diagnosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 38-year-old woman has a painful, tender thyroid gland along with palpitations and heat intolerance for two weeks. Her symptoms began shortly after a viral upper respiratory infection, and the neck pain radiates toward the jaw.\n\n| Test | Value |\n|---|---|\n| TSH | low |\n| Free T4 | high |\n| ESR | markedly elevated |\n| Radioactive iodine uptake | very low |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Graves disease.",
      "Toxic multinodular goiter.",
      "Hashimoto thyroiditis.",
      "Subacute (de Quervain) granulomatous thyroiditis, a self-limited postviral inflammatory thyroiditis with a painful, tender gland, transient hyperthyroidism, a high ESR, and low radioactive iodine uptake.",
      "Factitious thyrotoxicosis from exogenous thyroid hormone."
    ],
    answer: 3,
    exp: "Subacute (de Quervain) granulomatous thyroiditis is a self-limited inflammatory process, often following a viral illness, that causes a painful, tender thyroid and transient thyrotoxicosis from release of preformed hormone. The ESR is characteristically high, and radioactive iodine uptake is low because the inflamed gland is not synthesizing new hormone. This distinguishes it from Graves disease and toxic multinodular goiter (both high uptake), painless Hashimoto thyroiditis, and factitious thyrotoxicosis (low uptake but a nontender gland and low thyroglobulin).",
    why: [
      "Graves disease causes a painless goiter with high radioactive iodine uptake, not a painful gland with suppressed uptake.",
      "Toxic multinodular goiter shows a nodular gland with increased uptake, not a painful gland with low uptake.",
      "Hashimoto thyroiditis typically causes painless hypothyroidism, not a painful gland with transient thyrotoxicosis.",
      "Correct: a painful, tender postviral thyroid with transient thyrotoxicosis, high ESR, and low radioactive iodine uptake indicates subacute thyroiditis.",
      "Factitious thyrotoxicosis shows low uptake but a nontender gland and low thyroglobulin, without postviral neck pain."
    ]
  },
  {
    id: "s3-0365",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Wilms tumor diagnosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 3-year-old previously healthy girl is found by her parents to have a smooth, firm mass on one side of her abdomen that does not cross the midline. She has mild hypertension and one episode of painless hematuria, and is otherwise thriving.\n\n**[IMAGE: abdominal ultrasound showing a large, well-circumscribed solid mass arising from and within the kidney]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Neuroblastoma.",
      "Autosomal recessive polycystic kidney disease.",
      "Renal cell carcinoma.",
      "Congenital hydronephrosis.",
      "Wilms tumor (nephroblastoma), the most common renal malignancy of early childhood, typically a smooth, unilateral flank mass that does not cross the midline, sometimes with hypertension and hematuria."
    ],
    answer: 4,
    exp: "Wilms tumor (nephroblastoma) is the most common renal malignancy of young children, usually presenting in a well-appearing toddler as a smooth, firm, unilateral abdominal or flank mass that characteristically does not cross the midline. Hypertension (from renin) and painless hematuria may occur. Imaging shows a solid intrarenal mass. Neuroblastoma typically crosses the midline and causes systemic symptoms, polycystic disease produces bilateral cystic kidneys, renal cell carcinoma is an adult tumor, and hydronephrosis is a dilated collecting system, not a solid mass.",
    why: [
      "Neuroblastoma is usually an irregular mass that crosses the midline with systemic symptoms and elevated catecholamine metabolites, not a smooth intrarenal mass.",
      "Polycystic kidney disease produces bilaterally enlarged cystic kidneys, not a solitary solid mass.",
      "Renal cell carcinoma is a tumor of adults and is rare in young children.",
      "Hydronephrosis is a dilated collecting system, not a solid intrarenal tumor.",
      "Correct: a smooth, unilateral intrarenal mass that does not cross the midline, with hypertension and hematuria in a toddler, is classic for Wilms tumor."
    ]
  },
  {
    id: "s3-0366",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Biliary atresia diagnosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 6-week-old infant has persistent jaundice, pale clay-colored (acholic) stools, and dark urine. The infant is feeding but has mild hepatomegaly.\n\n| Test | Value |\n|---|---|\n| Total bilirubin | elevated |\n| Direct (conjugated) bilirubin | elevated (>20% of total) |\n| Stool color | acholic |\n| GGT | elevated |",
    lead: "Which of the following is the most likely diagnosis and the appropriate next step?",
    options: [
      "Biliary atresia; conjugated hyperbilirubinemia with acholic stools in an infant requires urgent evaluation (ultrasound, hepatobiliary scintigraphy, and often intraoperative cholangiogram), because timely Kasai portoenterostomy improves outcomes.",
      "Physiologic jaundice; reassure the family and observe.",
      "Breast-milk jaundice; continue breastfeeding without further workup.",
      "Gilbert syndrome; no evaluation is needed.",
      "Crigler-Najjar syndrome; treat with phototherapy alone."
    ],
    answer: 0,
    exp: "Conjugated (direct) hyperbilirubinemia with acholic stools in an infant is always pathologic and must be evaluated urgently for biliary atresia, the leading cause. Workup includes ultrasound and hepatobiliary scintigraphy, often followed by intraoperative cholangiography, because a Kasai portoenterostomy performed early (generally before about 8 weeks of age) substantially improves biliary drainage and outcomes. Physiologic jaundice, breast-milk jaundice, Gilbert syndrome, and Crigler-Najjar syndrome all cause unconjugated hyperbilirubinemia and do not explain conjugated jaundice with pale stools.",
    why: [
      "Correct: conjugated hyperbilirubinemia with acholic stools at 6 weeks demands urgent workup for biliary atresia so a timely Kasai procedure can be done.",
      "Physiologic jaundice is unconjugated and resolves in the first weeks; persistent conjugated jaundice is always pathologic.",
      "Breast-milk jaundice is unconjugated and cannot explain conjugated hyperbilirubinemia with acholic stools.",
      "Gilbert syndrome causes mild unconjugated hyperbilirubinemia, not conjugated jaundice with pale stools.",
      "Crigler-Najjar syndrome is an unconjugated hyperbilirubinemia and does not explain conjugated jaundice with acholic stools."
    ]
  },
  {
    id: "s3-0367",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Oligoarticular juvenile idiopathic arthritis diagnosis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 3-year-old girl has had a swollen, warm knee with morning stiffness for 8 weeks. She is otherwise well, without fever, rash, or preceding trauma, and she limps more in the morning than later in the day. Her pediatrician arranges a slit-lamp eye examination.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Septic arthritis of the knee.",
      "Oligoarticular juvenile idiopathic arthritis, defined by arthritis lasting at least 6 weeks in four or fewer joints in a child under 16, and carrying a risk of chronic anterior uveitis that warrants slit-lamp screening.",
      "Transient (toxic) synovitis of the hip.",
      "Acute rheumatic fever.",
      "Reactive arthritis following gastroenteritis."
    ],
    answer: 1,
    exp: "Oligoarticular juvenile idiopathic arthritis is defined by arthritis persisting at least 6 weeks in four or fewer joints in a child younger than 16, typically a well-appearing young girl with a chronically swollen large joint such as the knee. It carries a notable risk of asymptomatic chronic anterior uveitis, especially with a positive antinuclear antibody, so routine slit-lamp screening is required. The chronic, afebrile course distinguishes it from acute septic arthritis, brief post-viral transient synovitis, migratory rheumatic fever, and self-limited reactive arthritis.",
    why: [
      "Septic arthritis is acutely painful with fever and inability to bear weight over days, not 8 weeks of low-grade swelling.",
      "Correct: chronic arthritis (over 6 weeks) in a single joint of a well young child, with uveitis risk prompting slit-lamp screening, is oligoarticular juvenile idiopathic arthritis.",
      "Transient synovitis affects the hip briefly after a viral illness and resolves within days to weeks, not persistent knee arthritis.",
      "Acute rheumatic fever causes a migratory polyarthritis after streptococcal infection, not a single chronically swollen joint.",
      "Reactive arthritis follows an infection and is usually self-limited over weeks, without the chronic uveitis risk of juvenile idiopathic arthritis."
    ]
  },
  {
    id: "s3-0368",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Vulvar lichen sclerosus diagnosis",
    difficulty: "easy",
    anchor: null,
    vignette: "A 62-year-old postmenopausal woman has vulvar itching and soreness with painful intercourse. Examination shows thin, whitened, atrophic parchment-like skin encircling the vulva and perianal area in a figure-of-eight pattern, with some loss of the normal labial architecture.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Vulvovaginal candidiasis.",
      "Atrophic vaginitis alone.",
      "Lichen sclerosus, a chronic inflammatory dermatosis causing thin, white, atrophic vulvar plaques with pruritus and architectural loss; biopsy is warranted to confirm it and to exclude malignancy.",
      "Invasive vulvar squamous cell carcinoma.",
      "Contact dermatitis."
    ],
    answer: 2,
    exp: "Lichen sclerosus is a chronic inflammatory dermatosis that most often affects postmenopausal women, producing thin, white, atrophic plaques over the vulva and perianal region in a figure-of-eight distribution, with pruritus, soreness, dyspareunia, and progressive loss of vulvar architecture. It carries an increased risk of vulvar squamous cell carcinoma, so biopsy is indicated to confirm the diagnosis and exclude malignancy. Candidiasis, atrophic vaginitis, an invasive carcinoma, and contact dermatitis have distinct appearances.",
    why: [
      "Candidiasis causes erythema and thick discharge with itching, not white atrophic parchment-like plaques.",
      "Atrophic vaginitis thins the vaginal mucosa from estrogen deficiency but does not create figure-of-eight white plaques with architectural destruction.",
      "Correct: thin, white, atrophic figure-of-eight vulvar plaques with architectural loss in a postmenopausal woman indicate lichen sclerosus, and biopsy excludes malignancy.",
      "Invasive squamous cell carcinoma presents as a discrete mass or ulcer; lichen sclerosus is a predisposing dermatosis distinguished by biopsy.",
      "Contact dermatitis causes erythematous, weeping or scaling skin from an irritant, not sclerotic white atrophic plaques."
    ]
  },
  {
    id: "s3-0369",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Ovarian dysgerminoma diagnosis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "An 18-year-old woman has several weeks of abdominal fullness and a palpable pelvic mass. Pelvic imaging shows a solid adnexal mass, and a pregnancy test is negative.\n\n| Test | Value |\n|---|---|\n| Serum LDH | markedly elevated |\n| Beta-hCG | mildly elevated |\n| Alpha-fetoprotein | normal |\n| Pregnancy test | negative |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Serous cystadenocarcinoma.",
      "Mature cystic teratoma (dermoid).",
      "Endodermal sinus (yolk sac) tumor.",
      "Ovarian dysgerminoma, the most common malignant ovarian germ cell tumor in young women, typically a solid mass associated with a markedly elevated lactate dehydrogenase (and sometimes a mildly elevated beta-hCG).",
      "Ovarian fibroma."
    ],
    answer: 3,
    exp: "Dysgerminoma is the most common malignant ovarian germ cell tumor and characteristically occurs in adolescents and young women, presenting as a rapidly growing solid adnexal mass. It typically secretes lactate dehydrogenase (LDH), and some tumors produce a mild beta-hCG elevation, while alpha-fetoprotein is normal. A normal alpha-fetoprotein argues against a yolk sac tumor, which secretes it; a very high beta-hCG would suggest choriocarcinoma; and epithelial cancer, benign teratoma, and fibroma do not match this young patient with a solid, LDH-secreting mass.",
    why: [
      "Serous cystadenocarcinoma is an epithelial tumor of older women associated with elevated CA-125, not LDH in a teenager.",
      "A mature teratoma is benign with fat and calcification on imaging and normal tumor markers, not a solid LDH-secreting malignancy.",
      "A yolk sac tumor characteristically secretes alpha-fetoprotein, which is normal here.",
      "Correct: a solid ovarian mass in a young woman with markedly elevated LDH (and mild beta-hCG) but normal alpha-fetoprotein is characteristic of dysgerminoma.",
      "An ovarian fibroma is a benign solid stromal tumor without elevated LDH."
    ]
  },
  {
    id: "s3-0370",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Early pregnancy loss diagnosis by ultrasound",
    difficulty: "hard",
    anchor: "table",
    vignette: "A 28-year-old woman at an estimated 8 weeks' gestation has light vaginal spotting without cramping. Transvaginal ultrasound shows an embryo with a crown-rump length of 9 mm and no cardiac activity, and a repeat scan confirms the finding.\n\n| Finding | Result |\n|---|---|\n| Crown-rump length | 9 mm |\n| Cardiac activity | absent |\n| Cervical os | closed |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Threatened abortion.",
      "Inevitable abortion.",
      "Incomplete abortion.",
      "Viable intrauterine pregnancy.",
      "Early pregnancy loss (missed abortion), diagnosed when an embryo with a crown-rump length of at least 7 mm shows no cardiac activity; the closed cervical os indicates the loss has not yet progressed to expulsion."
    ],
    answer: 4,
    exp: "Standard ultrasound criteria diagnose early pregnancy loss when an embryo with a crown-rump length of 7 mm or greater shows no cardiac activity. With a 9-mm embryo and absent, confirmed cardiac activity, the pregnancy is definitively nonviable. Because the cervical os is closed and no tissue has passed, this is a missed abortion (early pregnancy loss with a closed os). A threatened abortion requires a viable pregnancy, an inevitable abortion has a dilated os, and an incomplete abortion involves partial passage of products of conception.",
    why: [
      "Threatened abortion requires a viable pregnancy with bleeding and a closed os; here cardiac activity is absent, so the pregnancy is nonviable.",
      "Inevitable abortion involves a dilated (open) cervical os with an intact but nonviable pregnancy; the os here is closed.",
      "Incomplete abortion means partial passage of products of conception, which has not occurred with a closed os and retained embryo.",
      "An embryo of this size without cardiac activity is nonviable by standard criteria, so this is not a viable pregnancy.",
      "Correct: a crown-rump length of at least 7 mm with no cardiac activity confirms early pregnancy loss, and the closed os makes this a missed abortion."
    ]
  },
  {
    id: "s3-0371",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Functional neurological symptom (conversion) disorder diagnosis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 26-year-old woman develops sudden inability to move her right arm immediately after a severe emotional argument. On examination there is give-way weakness that is inconsistent with any anatomic nerve or root distribution, and imaging and nerve conduction studies are normal. She appears strikingly unconcerned about the deficit.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Functional neurological symptom disorder (conversion disorder), in which neurologic symptoms are internally inconsistent and incompatible with recognized disease, often follow psychological stress, and are not intentionally produced.",
      "Factitious disorder.",
      "Malingering.",
      "Somatic symptom disorder.",
      "Acute ischemic stroke."
    ],
    answer: 0,
    exp: "Functional neurological symptom disorder (conversion disorder) presents with neurologic symptoms, such as weakness or sensory loss, that are internally inconsistent or incompatible with recognized neurologic disease (for example, give-way weakness not fitting an anatomic distribution, with normal imaging and studies). Symptoms are often precipitated by psychological stress and are not consciously feigned, distinguishing it from factitious disorder (deliberate deception to assume the sick role) and malingering (feigning for external gain). Somatic symptom disorder centers on distressing preoccupation, and stroke is excluded by the workup.",
    why: [
      "Correct: neurologic deficits incompatible with anatomy, precipitated by stress and not intentionally produced, define functional neurological symptom (conversion) disorder.",
      "Factitious disorder involves deliberate falsification of symptoms to assume the sick role, whereas conversion symptoms are not intentionally produced.",
      "Malingering is conscious feigning for external gain such as money or avoiding duties, which is not described here.",
      "Somatic symptom disorder features excessive distress and preoccupation about symptoms, not a single neurologic deficit incompatible with anatomy.",
      "Normal imaging and studies, with give-way weakness not fitting a nerve distribution, exclude an acute ischemic stroke."
    ]
  },
  {
    id: "s3-0372",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Delusional disorder diagnosis",
    difficulty: "easy",
    anchor: null,
    vignette: "A 48-year-old woman has been convinced for the past 8 months that a particular coworker is secretly in love with her, despite clear evidence to the contrary. She continues to function well at work and socially, has no hallucinations, and shows no disorganized speech or broader decline apart from this single fixed belief.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Schizophrenia.",
      "Delusional disorder, defined by one or more nonbizarre delusions persisting at least one month with otherwise preserved functioning and without prominent hallucinations or the other core features of schizophrenia.",
      "Schizoaffective disorder.",
      "Brief psychotic disorder.",
      "Obsessive-compulsive disorder."
    ],
    answer: 1,
    exp: "Delusional disorder is defined by one or more delusions lasting at least one month in a person whose functioning is otherwise relatively preserved and who lacks the other active-phase features of schizophrenia (prominent hallucinations, disorganized speech, negative symptoms). This woman's isolated, fixed, nonbizarre belief of being loved (an erotomanic delusion) over 8 months, with intact work and social function, fits delusional disorder. Schizophrenia requires broader symptoms and impairment, schizoaffective disorder requires a concurrent mood episode, and brief psychotic disorder lasts under a month.",
    why: [
      "Schizophrenia requires two or more active-phase symptoms with functional decline, which are absent when functioning is preserved.",
      "Correct: an isolated nonbizarre delusion persisting well beyond one month with otherwise intact functioning defines delusional disorder.",
      "Schizoaffective disorder requires a concurrent major mood episode with the psychosis, which is not present.",
      "Brief psychotic disorder lasts less than one month, whereas this belief has persisted 8 months.",
      "Obsessive-compulsive disorder features intrusive ego-dystonic obsessions and compulsions, not a fixed ego-syntonic delusional belief."
    ]
  },
  {
    id: "s3-0373",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Central retinal artery occlusion diagnosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 68-year-old man with atherosclerotic risk factors has sudden, painless, complete loss of vision in one eye. On examination there is a relative afferent pupillary defect in the affected eye.\n\n**[IMAGE: fundus photograph showing a diffusely pale, edematous retina with a cherry-red spot at the macula]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Central retinal vein occlusion.",
      "Rhegmatogenous retinal detachment.",
      "Central retinal artery occlusion, an ophthalmic emergency causing sudden painless monocular vision loss with a pale retina and a cherry-red macular spot.",
      "Acute angle-closure glaucoma.",
      "Optic neuritis."
    ],
    answer: 2,
    exp: "Central retinal artery occlusion is an ophthalmic emergency, usually embolic or thrombotic, that causes sudden, painless, severe monocular vision loss with a relative afferent pupillary defect. The retina becomes pale and edematous from ischemia, while the thin foveal region overlying the intact choroidal circulation stands out as a cherry-red spot. This is distinct from the diffuse hemorrhages of vein occlusion, the curtain-like defect of detachment, the painful red eye of angle-closure glaucoma, and the painful vision loss of optic neuritis.",
    why: [
      "Central retinal vein occlusion shows diffuse retinal hemorrhages (a 'blood and thunder' fundus), not a pale retina with a cherry-red spot.",
      "Retinal detachment causes floaters, flashes, and a curtain-like field defect, not a cherry-red macular spot.",
      "Correct: sudden painless monocular vision loss with a relative afferent pupillary defect and a pale retina with a cherry-red spot indicates central retinal artery occlusion.",
      "Acute angle-closure glaucoma is painful with a red eye, halos, and a mid-dilated pupil, unlike this painless loss.",
      "Optic neuritis causes painful vision loss in a younger patient with a normal or swollen disc, not a cherry-red spot."
    ]
  },
  {
    id: "s3-0374",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Peritonsillar abscess diagnosis",
    difficulty: "easy",
    anchor: null,
    vignette: "A 19-year-old has a worsening severe sore throat with a muffled hot-potato voice, drooling, and difficulty opening the mouth (trismus). Examination shows a swollen, bulging soft palate on one side with the uvula deviated toward the opposite side.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Acute streptococcal pharyngitis.",
      "Infectious mononucleosis.",
      "Epiglottitis.",
      "Peritonsillar abscess, a collection of pus beside the tonsil producing a muffled voice, trismus, and deviation of the uvula away from the affected side.",
      "Retropharyngeal abscess."
    ],
    answer: 3,
    exp: "A peritonsillar abscess is a collection of pus between the tonsillar capsule and the pharyngeal muscles, typically in an adolescent or young adult. It causes a severe unilateral sore throat, a muffled hot-potato voice, trismus, and drooling, with a bulging soft palate that displaces the uvula toward the contralateral side. Management is drainage plus antibiotics. Streptococcal pharyngitis and mononucleosis cause bilateral findings, epiglottitis causes stridor and a toxic tripoding patient, and retropharyngeal abscess is more common in young children.",
    why: [
      "Streptococcal pharyngitis causes bilateral tonsillar exudate without uvular deviation, trismus, or a bulging palate.",
      "Infectious mononucleosis causes bilateral tonsillar enlargement, lymphadenopathy, and fatigue, not unilateral peritonsillar bulging.",
      "Epiglottitis causes stridor and a toxic-appearing patient who sits tripoding, typically without uvular deviation.",
      "Correct: a unilateral bulging soft palate with uvular deviation, trismus, and a hot-potato voice indicates a peritonsillar abscess.",
      "Retropharyngeal abscess causes neck stiffness and posterior pharyngeal swelling, more often in young children, not uvular deviation with palate bulging."
    ]
  },
  {
    id: "s3-0375",
    system: "Surgery",
    discipline: "Surgery",
    topic: "Achalasia diagnosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 45-year-old man has a year of progressive difficulty swallowing both solids and liquids from the outset, with regurgitation of undigested food and modest weight loss. He sometimes has retrosternal chest discomfort.\n\n**[IMAGE: barium esophagram showing a dilated esophageal body tapering to a smooth bird-beak narrowing at the gastroesophageal junction]**",
    lead: "Which of the following is the most likely diagnosis, and which test confirms it?",
    options: [
      "Esophageal squamous cell carcinoma; confirmed by barium swallow alone.",
      "Gastroesophageal reflux disease; confirmed by ambulatory pH monitoring.",
      "Diffuse esophageal spasm; confirmed by upper endoscopy.",
      "Peptic (benign) esophageal stricture; confirmed by serologic testing.",
      "Achalasia, a motility disorder from failure of lower esophageal sphincter relaxation with loss of peristalsis, suggested by dysphagia to solids and liquids with a bird-beak esophagram and confirmed by esophageal manometry."
    ],
    answer: 4,
    exp: "Achalasia is an esophageal motility disorder characterized by failure of the lower esophageal sphincter to relax and loss of esophageal peristalsis. Dysphagia to both solids and liquids from the start, regurgitation of undigested food, and a dilated esophagus tapering to a bird-beak narrowing on barium esophagram are classic. Esophageal manometry confirms the diagnosis by showing aperistalsis with incomplete lower esophageal sphincter relaxation, and endoscopy is done to exclude a malignancy mimicking achalasia (pseudoachalasia).",
    why: [
      "Carcinoma usually causes progressive dysphagia to solids first with marked weight loss and an irregular mass, and requires endoscopic biopsy rather than barium alone.",
      "Reflux disease causes heartburn and regurgitation but not the bird-beak narrowing with aperistalsis of achalasia.",
      "Diffuse esophageal spasm shows a corkscrew esophagus with intermittent chest pain and is diagnosed by manometry, not endoscopy.",
      "A peptic stricture follows chronic reflux, is diagnosed endoscopically rather than by serology, and lacks the bird-beak aperistaltic pattern.",
      "Correct: dysphagia to solids and liquids with a bird-beak esophagram indicates achalasia, confirmed by manometry showing aperistalsis and incomplete lower esophageal sphincter relaxation."
    ]
  }
];
