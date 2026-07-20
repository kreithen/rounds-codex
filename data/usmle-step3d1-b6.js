/*
 * Rounds Codex - USMLE Step 3, Day 1 (Foundations of Independent Practice) bank, Batch 6 (25 items)
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
const USMLE_STEP3D1_B6 = [
  {
    id: "s3-0201",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Cox proportional-hazards model interpretation",
    difficulty: "hard",
    anchor: "table",
    vignette: "A randomized trial evaluates a new drug against placebo for time to cardiovascular death. The investigators fit a Cox proportional-hazards model and confirm the proportional-hazards assumption is met by inspecting scaled residuals.\n\n| Output | Value |\n|---|---|\n| Hazard ratio (drug vs placebo) | 0.72 |\n| 95% confidence interval | 0.60 - 0.87 |\n| p-value | 0.001 |",
    lead: "Which statement best interprets this Cox model output?",
    options: [
      "The hazard ratio of 0.72 means the drug is associated with a 28% lower instantaneous rate of the event at any given time during follow-up, and because the confidence interval excludes 1, the effect is statistically significant.",
      "A hazard ratio of 0.72 means the absolute risk of death was reduced by exactly 28 percentage points.",
      "A hazard ratio of 0.72 indicates that 72% of patients in the drug group died during the study.",
      "The Cox model requires the survival outcome to be normally distributed before it can be applied.",
      "A statistically significant hazard ratio by itself proves that the proportional-hazards assumption holds."
    ],
    answer: 0,
    exp: "A hazard ratio from a Cox model compares the instantaneous event rate (hazard) between groups over follow-up. A value of 0.72 means a 28% lower hazard in the treated group, and a confidence interval that excludes 1.0 indicates statistical significance. The hazard ratio is a relative, not absolute, measure, does not equal a proportion of patients with the event, does not require a normally distributed outcome, and its significance is separate from whether the proportional-hazards assumption is satisfied.",
    why: [
      "Correct: a hazard ratio of 0.72 reflects a 28% lower instantaneous event rate, and the interval excluding 1 makes it statistically significant.",
      "The hazard ratio is a relative measure; it does not give the absolute risk difference in percentage points.",
      "A hazard ratio is a rate ratio, not the proportion of patients who experienced the event.",
      "The Cox model is semiparametric and does not assume a normally distributed outcome.",
      "Significance of the hazard ratio is unrelated to verifying the proportional-hazards assumption, which is checked separately."
    ]
  },
  {
    id: "s3-0202",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Immortal-time bias in observational studies",
    difficulty: "hard",
    anchor: "table",
    vignette: "An observational study reports that transplant recipients who later filled a prescription for a particular drug lived longer than those who never filled it. Patients had to survive long enough after transplant to reach the pharmacy and be classified as 'treated,' and the time between transplant and first fill was counted as treated person-time.\n\n| Group | Classification rule |\n|---|---|\n| Treated | Survived to fill the prescription |\n| Untreated | Never filled the prescription |",
    lead: "Which bias most likely explains the apparent survival benefit?",
    options: [
      "Lead-time bias, because the drug detects disease earlier than usual.",
      "Immortal-time bias: the span before treatment initiation, during which patients had to remain alive to be classified as treated, is misattributed to the treated group and spuriously makes treatment look protective.",
      "Confounding by indication, which is fully removed by simple adjustment for baseline covariates.",
      "Regression to the mean from selecting patients with extreme baseline values.",
      "Differential misclassification of the survival endpoint itself."
    ],
    answer: 1,
    exp: "Immortal-time bias arises when a period of follow-up during which the outcome (death) cannot occur is misclassified as exposed time, or when group assignment requires surviving long enough to receive treatment. Treated patients are guaranteed to have survived until their prescription fill, so counting that guaranteed-alive interval as treated time makes the therapy appear protective. The remedy is a time-dependent exposure definition. It is not lead-time bias, ordinary confounding, regression to the mean, or endpoint misclassification.",
    why: [
      "Lead-time bias concerns earlier detection shifting apparent survival, not misclassified person-time before treatment.",
      "Correct: the guaranteed-survival interval before the first prescription fill is misattributed to the treated group, creating a spurious benefit.",
      "Confounding by indication is a separate issue and is not fully eliminated by simple covariate adjustment.",
      "Regression to the mean involves extreme baseline values regressing on remeasurement, not the mechanism here.",
      "The bias here is in classifying person-time, not in how the death outcome was measured."
    ]
  },
  {
    id: "s3-0203",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Competing risks in survival analysis",
    difficulty: "hard",
    anchor: null,
    vignette: "In a cohort of very elderly nursing-home residents, investigators study the cumulative incidence of hip fracture over 5 years. Many participants die of unrelated causes before any fracture occurs. The analysts initially compute one minus the Kaplan-Meier survival, treating deaths as ordinary censoring.",
    lead: "Which statement best describes the correct analytic approach?",
    options: [
      "Deaths should be treated as ordinary independent censoring, and the Kaplan-Meier estimate of fracture incidence is unbiased here.",
      "Competing risks are relevant only in randomized controlled trials, not observational cohorts.",
      "Because death prevents the fracture from ever occurring, it is a competing risk; treating deaths as independent censoring in a Kaplan-Meier analysis overestimates the cumulative incidence of fracture, so a cumulative incidence function (competing-risks analysis) is preferred.",
      "The overestimation described is an example of immortal-time bias.",
      "A competing risk increases statistical power and can safely be ignored."
    ],
    answer: 2,
    exp: "A competing risk is an event (here, death) that precludes the event of interest (hip fracture) from occurring. Treating competing events as independent censoring in a Kaplan-Meier analysis assumes censored subjects could still develop the outcome, which is false for the dead, so it overestimates the true cumulative incidence. The cumulative incidence function (a competing-risks method) gives an unbiased estimate. This is not immortal-time bias, is not confined to trials, and cannot be ignored.",
    why: [
      "Deaths are not independent censoring because a dead patient can never fracture, so Kaplan-Meier overestimates incidence.",
      "Competing risks apply to any time-to-event study, including observational cohorts.",
      "Correct: death is a competing risk, and a cumulative incidence function avoids the overestimation produced by Kaplan-Meier censoring.",
      "Immortal-time bias concerns misclassified person-time before treatment, not competing events.",
      "Ignoring a competing risk biases the incidence estimate; it does not simply add power."
    ]
  },
  {
    id: "s3-0204",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Standardized mortality ratio",
    difficulty: "moderate",
    anchor: "table",
    vignette: "An occupational cohort of foundry workers is followed for mortality. Using age-specific rates from the general population applied to the cohort's age structure (indirect standardization), investigators calculate the number of deaths expected if the workers had died at general-population rates and compare it with the observed number.\n\n| Quantity | Value |\n|---|---|\n| Observed deaths | 90 |\n| Expected deaths (age-standardized) | 75 |",
    lead: "What is the standardized mortality ratio, and what does it indicate?",
    options: [
      "The standardized mortality ratio is 75/90 = 0.83, indicating the cohort had lower mortality than the reference population.",
      "A standardized mortality ratio of 1.2 means exactly 120 excess deaths occurred in the cohort.",
      "The standardized mortality ratio compares two exposed groups directly and does not use a reference population.",
      "The standardized mortality ratio is observed/expected = 90/75 = 1.2, indicating mortality about 20% higher than expected from the reference population after adjusting for age.",
      "A standardized mortality ratio of 1.0 would indicate that the cohort experienced no deaths."
    ],
    answer: 3,
    exp: "The standardized mortality ratio (SMR) is observed deaths divided by expected deaths derived by indirect standardization: 90/75 = 1.2. An SMR of 1.0 means observed equals expected, above 1.0 means excess mortality, and below 1.0 means fewer deaths than expected. Here 1.2 indicates roughly 20% higher mortality than the age-matched reference. It is a ratio, not a count of excess deaths, and requires a reference population's rates.",
    why: [
      "The ratio is observed over expected (90/75), not expected over observed, so it is 1.2, not 0.83.",
      "An SMR of 1.2 is a ratio indicating 20% excess mortality, not a raw count of 120 excess deaths.",
      "The SMR explicitly uses reference-population rates applied to the cohort, not a direct two-group comparison.",
      "Correct: SMR = observed/expected = 90/75 = 1.2, meaning about 20% higher mortality than expected.",
      "An SMR of 1.0 means observed equals expected deaths, not that no deaths occurred."
    ]
  },
  {
    id: "s3-0205",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Prevalence-incidence-duration relationship",
    difficulty: "moderate",
    anchor: "table",
    vignette: "For a chronic disease in a stable (steady-state) population, the annual incidence has remained unchanged for a decade. A newly approved therapy substantially prolongs survival with the disease but does not cure it. Public-health analysts note a rising prevalence and consider the relationship among prevalence, incidence, and disease duration.\n\n| Parameter | Status |\n|---|---|\n| Incidence | Unchanged |\n| Average disease duration | Increased (better survival) |\n| Cure rate | No cure available |",
    lead: "Which statement best explains the rising prevalence?",
    options: [
      "Prevalence and incidence are interchangeable measures of the rate of new cases.",
      "A rising prevalence necessarily means the incidence of the disease has increased.",
      "Effective treatment that extends survival lowers the prevalence of a chronic disease.",
      "The duration of a disease has no effect on its prevalence.",
      "In a steady state, prevalence is approximately incidence times average duration (P is proportional to I x D); a therapy that prolongs survival without curing increases duration and therefore raises prevalence even when incidence is unchanged."
    ],
    answer: 4,
    exp: "For a steady-state population with low prevalence, prevalence is approximately the product of incidence and average disease duration (P is proportional to I x D). Incidence counts new cases per time, whereas prevalence counts existing cases. A treatment that keeps patients alive longer without curing them lengthens average duration, so prevalence rises even though incidence is constant. Prevalence and incidence are distinct, and duration directly influences prevalence.",
    why: [
      "Incidence measures new cases while prevalence measures existing cases; they are not interchangeable.",
      "Prevalence can rise from longer duration alone, so a higher prevalence does not require a higher incidence.",
      "Prolonging survival increases the number of people living with the disease, raising prevalence rather than lowering it.",
      "Duration is a key determinant of prevalence in the P is proportional to I x D relationship.",
      "Correct: prevalence tracks incidence times duration, so longer survival raises prevalence with incidence unchanged."
    ]
  },
  {
    id: "s3-0206",
    system: "Preventive Medicine & Ethics",
    discipline: "Epidemiology",
    topic: "Case-fatality rate versus mortality rate",
    difficulty: "moderate",
    anchor: "table",
    vignette: "During an outbreak of a novel respiratory infection in a town of 50,000 people, public-health officials tabulate the following over the outbreak period. They want to express how deadly the disease is among those who become ill.\n\n| Quantity | Value |\n|---|---|\n| Confirmed cases | 200 |\n| Deaths among cases | 10 |\n| Town population | 50,000 |",
    lead: "What is the case-fatality rate, and how does it differ from the mortality rate?",
    options: [
      "The case-fatality rate is deaths among people with the disease = 10/200 = 5%; it measures disease severity, whereas the mortality rate uses the whole population at risk as its denominator.",
      "The case-fatality rate is the number of deaths divided by the total town population.",
      "The case-fatality rate and the incidence of the disease are the same quantity.",
      "A case-fatality rate of 5% means that 5% of the entire population died during the outbreak.",
      "The case-fatality rate cannot be computed unless the total population size is known."
    ],
    answer: 0,
    exp: "The case-fatality rate is the proportion of people with a disease who die of it: 10/200 = 5%. It reflects the severity of illness among the affected. The mortality (death) rate instead uses the total population at risk as the denominator (10/50,000 here). The two answer different questions, and the case-fatality rate does not require knowing the whole population, only the number of cases and deaths among them.",
    why: [
      "Correct: case-fatality rate = deaths/cases = 10/200 = 5%, a severity measure distinct from the population-based mortality rate.",
      "Dividing deaths by the total population gives the mortality rate, not the case-fatality rate.",
      "Case-fatality rate measures lethality among cases; incidence measures new cases per population.",
      "A 5% case-fatality rate applies to those who were ill, not to the entire population.",
      "The case-fatality rate needs only cases and deaths among cases, not the total population size."
    ]
  },
  {
    id: "s3-0207",
    system: "Preventive Medicine & Ethics",
    discipline: "Ethics",
    topic: "Reporting an impaired physician colleague",
    difficulty: "moderate",
    anchor: null,
    vignette: "A resident notices that an attending surgeon smells of alcohol, has slurred speech, and an unsteady gait shortly before a scheduled elective operation. The attending insists he is fine and prepares to scrub in. No other supervisor is immediately present in the room.",
    lead: "Which of the following is the most appropriate action?",
    options: [
      "Say nothing, because confronting a senior colleague would be unprofessional.",
      "Take steps to prevent the impaired colleague from operating and report the concern to the appropriate authority (a supervisor, the physician health program, or the licensing body), because protecting patients takes priority.",
      "Report the concern only if a patient is actually harmed during the case.",
      "Handle the matter privately with the colleague and never involve any oversight body.",
      "Immediately post the concern publicly on social media to ensure accountability."
    ],
    answer: 1,
    exp: "Physicians have an ethical and professional duty to protect patients from a colleague who is impaired. The immediate priority is to prevent the impaired attending from operating, then to report through appropriate channels such as a supervisor, an institutional physician health program, or the state licensing board. Staying silent, waiting for harm to occur, keeping it entirely private, or airing it publicly all fail to safeguard patients or respect due process.",
    why: [
      "Silence exposes patients to harm and violates the duty to report an impaired colleague.",
      "Correct: prevent the impaired colleague from operating and report through appropriate institutional or licensing channels to protect patients.",
      "Waiting for patient harm before acting abandons the preventive purpose of reporting.",
      "Managing it privately without any oversight leaves patients unprotected and the impairment unaddressed.",
      "Public social-media disclosure breaches confidentiality and due process rather than following proper reporting channels."
    ]
  },
  {
    id: "s3-0208",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Breast cancer screening mammography",
    difficulty: "easy",
    anchor: null,
    vignette: "A 55-year-old woman at average risk for breast cancer, with no personal or family history and no genetic risk factors, comes for a routine visit. She feels well and asks which breast cancer screening test she should have and how often.",
    lead: "Which of the following is the most appropriate screening recommendation?",
    options: [
      "No breast cancer screening is needed because she is asymptomatic.",
      "Begin annual breast MRI as the primary screening test for average-risk women.",
      "Recommend screening mammography every 2 years, as advised for average-risk women in the 40-to-74-year range, with individualized discussion of frequency.",
      "Breast cancer screening should not begin until age 65.",
      "A clinical breast examination alone is sufficient, and imaging is unnecessary."
    ],
    answer: 2,
    exp: "For women at average risk, screening mammography is the recommended modality, generally offered biennially in the 40-to-74-year range, with shared decision-making about starting age and interval. Being asymptomatic is precisely the setting in which screening applies. MRI is reserved for high-risk women, screening should not be deferred to age 65, and clinical breast examination alone is not an adequate substitute for mammographic screening.",
    why: [
      "Screening targets asymptomatic women, so lack of symptoms is not a reason to skip mammography.",
      "MRI is a supplemental test for high-risk women, not the primary screen for average-risk patients.",
      "Correct: biennial screening mammography is recommended for average-risk women in the 40-to-74-year range.",
      "Delaying screening until 65 would miss the years of substantial breast cancer risk in midlife.",
      "Clinical breast examination alone lacks the sensitivity of mammography and is not a stand-alone screen."
    ]
  },
  {
    id: "s3-0209",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Primary adrenal insufficiency diagnosis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 42-year-old woman has months of fatigue, weight loss, anorexia, salt craving, and darkening of skin creases and buccal mucosa. Today she is hypotensive and lightheaded. Screening labs are shown.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sodium | 128 mmol/L | 135-145 |\n| Potassium | 5.6 mmol/L | 3.5-5.0 |\n| Morning cortisol | low | 5-25 mcg/dL |\n| ACTH | markedly elevated | 10-60 pg/mL |",
    lead: "Which of the following is the most appropriate confirmatory test?",
    options: [
      "Start high-dose levothyroxine, since the symptoms indicate hypothyroidism.",
      "A random plasma glucose, which is diagnostic of this disorder.",
      "A dexamethasone suppression test to confirm the diagnosis.",
      "An ACTH (cosyntropin) stimulation test showing a subnormal cortisol response, which with an elevated ACTH confirms primary adrenal insufficiency.",
      "No testing is needed because the hyperpigmentation is diagnostic of hemochromatosis."
    ],
    answer: 3,
    exp: "Hyponatremia, hyperkalemia, hypotension, and mucocutaneous hyperpigmentation with a low cortisol and markedly elevated ACTH point to primary adrenal insufficiency (Addison disease). The confirmatory test is the cosyntropin (ACTH) stimulation test: a subnormal cortisol rise confirms adrenal failure, and the high baseline ACTH localizes the defect to the adrenal gland. Dexamethasone suppression tests for cortisol excess, not deficiency, and the other options do not establish the diagnosis.",
    why: [
      "Levothyroxine treats hypothyroidism and does not address the cortisol deficiency causing this presentation.",
      "Random glucose is nonspecific and does not diagnose adrenal insufficiency.",
      "The dexamethasone suppression test evaluates cortisol excess (Cushing), the opposite of this deficiency.",
      "Correct: a cosyntropin stimulation test showing subnormal cortisol response, with elevated ACTH, confirms primary adrenal insufficiency.",
      "Hyperpigmentation here reflects high ACTH, not hemochromatosis, and the diagnosis requires biochemical confirmation."
    ]
  },
  {
    id: "s3-0210",
    system: "Internal Medicine",
    discipline: "Hepatology",
    topic: "Hereditary hemochromatosis screening",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 50-year-old man has fatigue, polyarthralgia of the hands, and a bronze skin tone. His brother was diagnosed with an iron-overload disorder. Screening labs show elevated transaminases and impaired glucose tolerance.\n\n| Test | Value | Reference |\n|---|---|---|\n| Transferrin saturation | 72% | 20-45 |\n| Ferritin | 1,200 ng/mL | 30-300 |\n| ALT | 68 U/L | 7-40 |",
    lead: "Which of the following is the most appropriate initial diagnostic approach?",
    options: [
      "Liver biopsy is required as the first diagnostic test.",
      "Measure serum ceruloplasmin, which is the screening test for this disorder.",
      "Obtain a 24-hour urine copper as the initial study.",
      "Begin therapeutic phlebotomy empirically without any diagnostic testing.",
      "An elevated fasting transferrin saturation with a high ferritin is the best initial screen; confirm with HFE gene testing for hereditary hemochromatosis."
    ],
    answer: 4,
    exp: "Fatigue, arthralgia, bronze skin, hepatic and glucose abnormalities, and a family history suggest hereditary hemochromatosis. The best initial screen is the fasting transferrin saturation together with ferritin; a transferrin saturation above roughly 45% with elevated ferritin prompts confirmatory HFE genetic testing. Ceruloplasmin and urine copper evaluate Wilson disease, liver biopsy is reserved for staging when needed, and treatment should follow, not precede, diagnosis.",
    why: [
      "Liver biopsy is used selectively for fibrosis staging, not as the initial diagnostic test for iron overload.",
      "Ceruloplasmin screens for Wilson disease, not hemochromatosis.",
      "Urine copper evaluates Wilson disease and does not diagnose iron overload.",
      "Phlebotomy is treatment and should follow a confirmed diagnosis, not replace testing.",
      "Correct: elevated transferrin saturation and ferritin are the best initial screen, confirmed by HFE genetic testing."
    ]
  },
  {
    id: "s3-0211",
    system: "Internal Medicine",
    discipline: "Hematology/Oncology",
    topic: "Initial workup of suspected multiple myeloma",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 68-year-old man has weeks of progressive back pain, fatigue, and constipation. Labs reveal anemia, hypercalcemia, and renal insufficiency, and a plain film shows a lytic lesion in the vertebra.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 9.2 g/dL | 13.5-17.5 |\n| Calcium | 12.6 mg/dL | 8.5-10.5 |\n| Creatinine | 2.4 mg/dL | 0.7-1.3 |\n| Total protein | 9.8 g/dL | 6.0-8.3 |",
    lead: "Which of the following is the most appropriate initial diagnostic test?",
    options: [
      "Serum and urine protein electrophoresis with immunofixation and serum free light chains to detect a monoclonal protein, the initial step in evaluating suspected multiple myeloma.",
      "Reassure the patient that these findings represent normal aging.",
      "Start iron supplementation as definitive therapy for the anemia.",
      "Order a technetium bone scan as the best test to detect myeloma lesions.",
      "Perform a dexamethasone suppression test."
    ],
    answer: 0,
    exp: "Hypercalcemia, renal insufficiency, anemia, and lytic bone lesions (the CRAB features) with an elevated total protein suggest multiple myeloma. The initial workup is serum and urine protein electrophoresis with immunofixation plus serum free light chains to identify and quantify a monoclonal (M) protein, followed by bone marrow biopsy and skeletal imaging. Myeloma lytic lesions are typically not seen on technetium bone scan, and the other options neither diagnose nor treat the disorder.",
    why: [
      "Correct: protein electrophoresis with immunofixation and free light chains is the initial step to detect the monoclonal protein of myeloma.",
      "The CRAB findings are pathologic, not normal aging, and require evaluation.",
      "Iron does not address a marrow infiltrative anemia and would not treat myeloma.",
      "Purely lytic myeloma lesions are often missed by technetium bone scan, which detects osteoblastic activity.",
      "A dexamethasone suppression test evaluates cortisol excess and is irrelevant here."
    ]
  },
  {
    id: "s3-0212",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Serologic diagnosis of celiac disease",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 30-year-old woman has months of bloating, intermittent diarrhea, and unintentional weight loss. She has iron-deficiency anemia that has not responded to oral iron. She continues to eat a normal gluten-containing diet.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 10.5 g/dL | 12-16 |\n| Mean corpuscular volume | 74 fL | 80-100 |\n| Ferritin | low | 15-150 ng/mL |",
    lead: "Which of the following is the most appropriate initial diagnostic test?",
    options: [
      "Start a gluten-free diet immediately and test only if symptoms persist.",
      "Check tissue transglutaminase IgA antibody (with a total IgA level) as the best initial serologic test, confirmed by duodenal biopsy while she remains on a gluten-containing diet.",
      "Perform colonoscopy as the initial diagnostic test for these symptoms.",
      "Order a lactose hydrogen breath test, which is diagnostic of celiac disease.",
      "Send stool for ova and parasites as the confirmatory test."
    ],
    answer: 1,
    exp: "Chronic diarrhea, weight loss, and refractory iron-deficiency anemia raise suspicion for celiac disease. The best initial test is the tissue transglutaminase IgA antibody with a total IgA level (to detect IgA deficiency that could give a false negative), performed while the patient still eats gluten; a positive result is confirmed by duodenal biopsy. Starting a gluten-free diet before testing can normalize serology and histology and obscure the diagnosis.",
    why: [
      "Beginning a gluten-free diet before testing can normalize serology and biopsy, making the diagnosis harder to confirm.",
      "Correct: tissue transglutaminase IgA (with total IgA) on a gluten-containing diet is the best initial test, confirmed by duodenal biopsy.",
      "Colonoscopy evaluates the colon, whereas celiac disease affects the small-intestinal mucosa.",
      "A hydrogen breath test assesses carbohydrate malabsorption, not celiac autoimmunity.",
      "Stool ova and parasites screens for parasitic infection, not celiac disease."
    ]
  },
  {
    id: "s3-0213",
    system: "Internal Medicine",
    discipline: "Hepatology",
    topic: "Primary biliary cholangitis diagnosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 52-year-old woman has several months of fatigue and generalized pruritus. She has xanthelasma and mild hepatomegaly. Labs show a cholestatic pattern with a disproportionately elevated alkaline phosphatase and near-normal bilirubin.\n\n| Test | Value | Reference |\n|---|---|---|\n| Alkaline phosphatase | 410 U/L | 40-130 |\n| ALT | 55 U/L | 7-40 |\n| Total bilirubin | 1.0 mg/dL | 0.2-1.2 |",
    lead: "Which of the following is the most appropriate next diagnostic test?",
    options: [
      "Anti-smooth muscle antibody, which is the diagnostic test for this disorder.",
      "Endoscopic retrograde cholangiopancreatography (ERCP) is required to establish the diagnosis.",
      "Check antimitochondrial antibody; a positive result with a cholestatic (elevated alkaline phosphatase) pattern in a middle-aged woman supports primary biliary cholangitis.",
      "Begin ursodiol empirically without any further testing or imaging.",
      "The elevated alkaline phosphatase is best explained by Paget disease and needs no liver evaluation."
    ],
    answer: 2,
    exp: "Fatigue, pruritus, xanthelasma, and a cholestatic pattern with markedly elevated alkaline phosphatase in a middle-aged woman are classic for primary biliary cholangitis. The key diagnostic test is the antimitochondrial antibody, which is positive in the large majority of cases; ursodiol is then first-line therapy. Anti-smooth muscle antibody points to autoimmune hepatitis, ERCP is used for obstructive or large-duct disease, and the alkaline phosphatase elevation here is hepatic (confirmed by the raised ALT), not skeletal.",
    why: [
      "Anti-smooth muscle antibody suggests autoimmune hepatitis, not primary biliary cholangitis.",
      "ERCP evaluates mechanical biliary obstruction and is not needed to diagnose this small-duct autoimmune disease.",
      "Correct: a positive antimitochondrial antibody with a cholestatic pattern in a middle-aged woman supports primary biliary cholangitis.",
      "Ursodiol is treatment and should follow, not replace, establishing the diagnosis.",
      "The accompanying transaminase elevation indicates a hepatic source, so a skeletal cause like Paget disease is unlikely and a liver workup is warranted."
    ]
  },
  {
    id: "s3-0214",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Sarcoidosis diagnosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 34-year-old woman has several weeks of dry cough, mild dyspnea, and tender red nodules on her shins. She has no fevers or night sweats and no sick contacts. A chest radiograph is obtained.\n\n**[IMAGE: frontal chest radiograph showing symmetric bilateral hilar lymphadenopathy with clear lung fields]**",
    lead: "Which of the following best describes the likely diagnosis and confirmation?",
    options: [
      "The presentation is most consistent with asthma and needs no further imaging workup.",
      "The findings are diagnostic of tuberculosis; start four-drug antituberculous therapy without further evaluation.",
      "This is heart failure, and the hilar shadows represent pulmonary edema.",
      "Bilateral hilar lymphadenopathy with erythema nodosum and cough suggests sarcoidosis; biopsy demonstrating noncaseating granulomas (after excluding infection) confirms it.",
      "The chest radiograph is normal and requires no explanation."
    ],
    answer: 3,
    exp: "Symmetric bilateral hilar lymphadenopathy with erythema nodosum and cough in a young adult is a classic presentation of sarcoidosis (Lofgren syndrome when combined with fever and arthralgias). Confirmation is tissue biopsy showing noncaseating granulomas after excluding infection and other causes. Asymmetric or unilateral adenopathy would suggest infection or malignancy; tuberculosis and heart failure do not fit this picture, and the radiograph is clearly abnormal.",
    why: [
      "Asthma does not cause bilateral hilar lymphadenopathy, and the imaging demands explanation.",
      "Empiric antituberculous therapy without confirmation is inappropriate, and the symmetric adenopathy here favors sarcoidosis.",
      "Heart failure produces vascular congestion and effusions, not symmetric hilar lymphadenopathy with erythema nodosum.",
      "Correct: bilateral hilar adenopathy with erythema nodosum suggests sarcoidosis, confirmed by biopsy showing noncaseating granulomas.",
      "The radiograph shows clear bilateral hilar lymphadenopathy and is not normal."
    ]
  },
  {
    id: "s3-0215",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Developmental dysplasia of the hip",
    difficulty: "easy",
    anchor: null,
    vignette: "A 3-week-old girl, born breech, is examined at a well-baby visit. On abduction of the flexed hip, the examiner feels a palpable clunk as the femoral head relocates into the acetabulum (a positive Ortolani sign), and thigh skin folds are asymmetric.",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Reassure the family, because hip clunks in newborns never require evaluation.",
      "Obtain a hip radiograph now, as it is the most sensitive test at this age.",
      "Proceed directly to open surgical reduction of the hip.",
      "Order MRI under sedation as the initial diagnostic test.",
      "Obtain a hip ultrasound, the preferred initial imaging for developmental dysplasia of the hip in an infant younger than about 6 months."
    ],
    answer: 4,
    exp: "A positive Ortolani or Barlow maneuver, especially with breech delivery and asymmetric thigh folds, indicates developmental dysplasia of the hip. In infants younger than roughly 6 months the femoral head is largely cartilaginous, so ultrasound is the preferred imaging; plain radiographs become useful only once the femoral head ossifies. Early detection allows nonoperative treatment (e.g., a Pavlik harness), whereas surgery and sedated MRI are not first-line steps.",
    why: [
      "A positive Ortolani sign is abnormal and mandates evaluation, not reassurance.",
      "Radiographs are unreliable in young infants because the femoral head has not yet ossified.",
      "Open reduction is a late intervention, not the initial response to an abnormal newborn hip exam.",
      "Sedated MRI is not the initial imaging modality for suspected hip dysplasia in an infant.",
      "Correct: hip ultrasound is the preferred initial imaging for suspected dysplasia in an infant younger than about 6 months."
    ]
  },
  {
    id: "s3-0216",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Hypertrophic pyloric stenosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 4-week-old firstborn boy has 1 week of progressively forceful, nonbilious vomiting immediately after feeds. He remains hungry and feeds eagerly afterward. A firm, olive-shaped mass is palpated in the epigastrium.\n\n| Test | Value | Reference |\n|---|---|---|\n| Chloride | 88 mmol/L | 98-106 |\n| Potassium | 3.1 mmol/L | 3.5-5.0 |\n| Bicarbonate | 34 mmol/L | 22-28 |",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Obtain an abdominal ultrasound, which shows a thickened, elongated pylorus and confirms the diagnosis; correct the hypochloremic hypokalemic metabolic alkalosis before pyloromyotomy.",
      "Perform upper endoscopy as the first-line diagnostic test.",
      "Start broad-spectrum antibiotics for presumed neonatal sepsis.",
      "Interpret the laboratory pattern as a primary respiratory disorder.",
      "Proceed to immediate laparotomy without imaging or fluid and electrolyte correction."
    ],
    answer: 0,
    exp: "Progressive nonbilious projectile vomiting in a hungry 3-to-6-week-old with a palpable olive and a hypochloremic hypokalemic metabolic alkalosis is classic for hypertrophic pyloric stenosis. Abdominal ultrasound is the diagnostic test of choice, showing a thickened and elongated pylorus. The metabolic derangement must be corrected with fluids and electrolytes before the definitive treatment, pyloromyotomy; surgery is never an emergency performed before rehydration.",
    why: [
      "Correct: ultrasound confirms the thickened pylorus, and the alkalosis is corrected before pyloromyotomy.",
      "Endoscopy is not the diagnostic test for pyloric stenosis; ultrasound is preferred.",
      "The picture is obstructive, not septic, so empiric antibiotics do not address the problem.",
      "The elevated bicarbonate reflects a metabolic alkalosis from vomiting, not a respiratory disorder.",
      "Surgery must follow fluid and electrolyte correction; operating on a dehydrated, alkalotic infant is unsafe."
    ]
  },
  {
    id: "s3-0217",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Autism spectrum disorder screening",
    difficulty: "easy",
    anchor: null,
    vignette: "A healthy 18-month-old boy is brought for a routine well-child visit. The practice performs standardized developmental surveillance at recommended ages for all children. His parents have no specific concerns today.",
    lead: "Which of the following is the most appropriate approach?",
    options: [
      "No autism screening is recommended in asymptomatic toddlers.",
      "Administer a validated autism-specific screening tool, such as the M-CHAT-R, as recommended for all toddlers at the 18- and 24-month visits regardless of apparent risk.",
      "Order genetic testing as the initial autism screen for every 18-month-old.",
      "Defer any screening for autism until the child reaches school age.",
      "A normal hearing test alone is sufficient to rule out autism."
    ],
    answer: 1,
    exp: "Standardized autism-specific screening with a validated instrument such as the M-CHAT-R is recommended for all children at the 18- and 24-month visits, in addition to routine developmental surveillance, because early identification enables timely intervention. Screening is universal and not limited to children whose parents raise concerns. Genetic testing is not a first-line screen, screening should not be deferred to school age, and a hearing test does not substitute for autism screening.",
    why: [
      "Universal autism screening at 18 and 24 months is recommended even for asymptomatic toddlers.",
      "Correct: a validated tool like the M-CHAT-R is administered to all toddlers at the 18- and 24-month visits.",
      "Genetic testing is not the initial screening tool; a validated behavioral instrument is used first.",
      "Delaying to school age forgoes the benefits of early identification and intervention.",
      "A hearing test evaluates hearing and does not rule out autism spectrum disorder."
    ]
  },
  {
    id: "s3-0218",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Ovarian torsion diagnosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 26-year-old woman has sudden onset of severe, colicky right lower-quadrant pain with nausea and vomiting that began 3 hours ago. She is afebrile, and pelvic examination reveals unilateral adnexal tenderness with a palpable mass. A urine pregnancy test is negative.\n\n**[IMAGE: transvaginal ultrasound showing an enlarged, edematous right ovary with peripherally displaced follicles and diminished Doppler flow]**",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Reassure the patient and discharge her with oral analgesics.",
      "Obtain a CT of the abdomen before any pelvic imaging is performed.",
      "Recognize probable ovarian torsion; pelvic ultrasound with Doppler shows an enlarged ovary with abnormal flow, and prompt diagnostic laparoscopy is needed to detorse and preserve the ovary.",
      "Start antibiotics for pelvic inflammatory disease as definitive treatment.",
      "Obtain a Pap smear to evaluate the acute pain."
    ],
    answer: 2,
    exp: "Sudden severe unilateral pelvic pain with nausea and an adnexal mass suggests ovarian torsion, a surgical emergency. Transvaginal ultrasound with Doppler is the best initial test and may show an enlarged edematous ovary with reduced or absent flow, though normal flow does not exclude torsion. Prompt laparoscopy to detorse the ovary preserves ovarian viability. Reassurance, CT before pelvic ultrasound, antibiotics for pelvic inflammatory disease, and a Pap smear all delay definitive care.",
    why: [
      "Discharging a patient with likely torsion risks ovarian infarction and loss.",
      "Pelvic ultrasound with Doppler, not CT, is the appropriate first imaging study for suspected torsion.",
      "Correct: ultrasound with Doppler supports ovarian torsion, and prompt laparoscopy is needed to detorse and salvage the ovary.",
      "Antibiotics for pelvic inflammatory disease do not treat torsion and would delay surgery.",
      "A Pap smear screens for cervical dysplasia and has no role in evaluating acute torsion."
    ]
  },
  {
    id: "s3-0219",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Complete hydatidiform mole",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 24-year-old woman at an estimated 12 weeks of gestation has vaginal bleeding and severe nausea and vomiting. Her uterus is larger than expected for dates, no fetal heart tones are detected, and her serum beta-hCG is markedly elevated for gestational age.\n\n**[IMAGE: pelvic ultrasound showing a heterogeneous intrauterine mass with numerous small cystic spaces (a 'snowstorm' pattern) and no identifiable fetus]**",
    lead: "Which of the following best describes the diagnosis and management?",
    options: [
      "This is a normal intrauterine pregnancy requiring only routine prenatal care.",
      "The findings indicate an ectopic pregnancy; administer methotrexate.",
      "This is a threatened abortion; recommend bed rest and observation.",
      "The markedly elevated hCG, uterus large for dates, and 'snowstorm' ultrasound without a fetus indicate a complete hydatidiform mole; manage with uterine evacuation and serial hCG monitoring.",
      "Immediate hysterectomy is required in all patients regardless of their fertility wishes."
    ],
    answer: 3,
    exp: "A markedly elevated beta-hCG, a uterus large for dates, hyperemesis, vaginal bleeding, and a 'snowstorm' ultrasound with no fetus are characteristic of a complete hydatidiform mole. Management is suction dilation and curettage (uterine evacuation) followed by serial beta-hCG monitoring to detect persistent gestational trophoblastic neoplasia. It is neither a normal pregnancy nor an ectopic gestation, and hysterectomy is not required for women who wish to preserve fertility.",
    why: [
      "A normal pregnancy has a fetus and normal hCG trajectory, unlike this molar picture.",
      "An ectopic pregnancy is implanted outside the uterus; this is an intrauterine molar gestation.",
      "The snowstorm appearance and very high hCG indicate molar disease, not a simple threatened abortion.",
      "Correct: elevated hCG, uterus large for dates, and a snowstorm ultrasound indicate a complete mole managed by evacuation and serial hCG follow-up.",
      "Hysterectomy is an option in select cases but is not required for all, especially women desiring future fertility."
    ]
  },
  {
    id: "s3-0220",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Prenatal aneuploidy screening",
    difficulty: "easy",
    anchor: null,
    vignette: "A 32-year-old woman at 11 weeks of gestation asks about testing for Down syndrome. She would prefer a noninvasive option and understands the difference between screening and diagnosis. She has no personal or family history of chromosomal disorders.",
    lead: "Which of the following is the most appropriate counseling?",
    options: [
      "Amniocentesis is the recommended first-line screening test for all pregnant women.",
      "No prenatal screening for aneuploidy is available during the first trimester.",
      "A positive cell-free DNA result is diagnostic and requires no confirmation.",
      "Screening for aneuploidy can only be performed after 28 weeks of gestation.",
      "Offer noninvasive prenatal screening with cell-free fetal DNA (or first-trimester combined screening); these are screening tests, and a positive result should be confirmed with diagnostic testing such as chorionic villus sampling or amniocentesis."
    ],
    answer: 4,
    exp: "Prenatal aneuploidy testing is offered to all pregnant women. Cell-free fetal DNA screening and first-trimester combined screening (nuchal translucency with serum markers) are available options; they estimate risk but are not diagnostic. A positive screen should be confirmed with a diagnostic procedure such as chorionic villus sampling or amniocentesis. Amniocentesis is a diagnostic, not a screening, test and carries a small procedure-related risk, so it is not the first-line screen for low-risk women.",
    why: [
      "Amniocentesis is a diagnostic procedure with a small risk, not a first-line screening test for all women.",
      "First-trimester screening, including cell-free DNA and combined screening, is available and commonly offered.",
      "Cell-free DNA is a screening test; a positive result requires diagnostic confirmation.",
      "Screening options exist in the first trimester and are not restricted to after 28 weeks.",
      "Correct: offer noninvasive cell-free DNA or first-trimester combined screening, confirming positives with CVS or amniocentesis."
    ]
  },
  {
    id: "s3-0221",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Panic disorder diagnosis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 29-year-old woman has recurrent, unexpected episodes of pounding heartbeat, chest tightness, shortness of breath, dizziness, and an intense fear of dying that peak within minutes and then subside. Between episodes she worries persistently about having another attack and has begun avoiding places where they occurred. An electrocardiogram, thyroid studies, and cardiac evaluation are normal.",
    lead: "Which of the following best describes the diagnosis and initial management?",
    options: [
      "Recurrent unexpected panic attacks with persistent worry about further attacks, after organic causes are excluded, indicate panic disorder; first-line treatment is an SSRI and/or cognitive behavioral therapy.",
      "This is an acute coronary syndrome despite the normal workup, and she should be admitted for cardiac catheterization.",
      "The diagnosis is pheochromocytoma, and she requires urgent adrenalectomy.",
      "Long-term daily benzodiazepines are the preferred first-line therapy for this condition.",
      "These symptoms are best explained by malingering."
    ],
    answer: 0,
    exp: "Recurrent unexpected panic attacks followed by at least a month of persistent worry about further attacks or maladaptive avoidance, once medical causes are excluded, define panic disorder. First-line treatment is an SSRI (or SNRI) and/or cognitive behavioral therapy. Benzodiazepines may be used briefly but are not preferred for long-term therapy because of tolerance and dependence. The normal cardiac and endocrine workup argues against acute coronary syndrome or pheochromocytoma, and there is no evidence of feigned illness.",
    why: [
      "Correct: recurrent unexpected panic attacks with anticipatory worry, after excluding organic causes, define panic disorder treated with an SSRI and/or CBT.",
      "A normal cardiac evaluation makes acute coronary syndrome unlikely, and repeat catheterization is not indicated.",
      "Normal thyroid studies and episodic self-limited attacks argue against pheochromocytoma, and surgery is unwarranted.",
      "Long-term daily benzodiazepines are not first-line because of dependence and tolerance risks.",
      "The clinical pattern fits panic disorder, and there is no indication the symptoms are feigned."
    ]
  },
  {
    id: "s3-0222",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Post-traumatic stress disorder diagnosis",
    difficulty: "moderate",
    anchor: null,
    vignette: "Three months after being assaulted, a 35-year-old man has intrusive memories and nightmares of the event, avoids the street where it happened, feels persistently on edge and easily startled, and describes a negative mood with detachment from others. The symptoms have persisted for more than a month and impair his work and relationships.",
    lead: "Which of the following best describes the diagnosis and first-line treatment?",
    options: [
      "Because symptoms have lasted more than a month, this is acute stress disorder.",
      "Symptoms lasting more than a month after a traumatic event, spanning intrusion, avoidance, negative cognitions/mood, and hyperarousal, define post-traumatic stress disorder; first-line treatment is trauma-focused psychotherapy, with SSRIs or SNRIs as effective pharmacotherapy.",
      "This is a normal stress reaction requiring no treatment or follow-up.",
      "First-line treatment is long-term antipsychotic monotherapy.",
      "The diagnosis is specific phobia."
    ],
    answer: 1,
    exp: "Post-traumatic stress disorder is diagnosed when symptoms from the intrusion, avoidance, negative alterations in cognition and mood, and hyperarousal clusters persist for more than one month after exposure to a traumatic event and cause impairment. Acute stress disorder applies when symptoms last from 3 days to 1 month. First-line treatment is trauma-focused psychotherapy (such as cognitive processing therapy or prolonged exposure), with SSRIs or SNRIs as effective medications. Antipsychotic monotherapy is not first-line.",
    why: [
      "Acute stress disorder is limited to 3 days to 1 month; symptoms beyond a month indicate PTSD.",
      "Correct: persistent post-traumatic symptoms beyond a month define PTSD, treated first with trauma-focused psychotherapy and SSRIs/SNRIs.",
      "The symptoms are impairing and persistent, so they are not a normal reaction needing no care.",
      "Antipsychotic monotherapy is not first-line for PTSD.",
      "Specific phobia is fear of a discrete object or situation, not the full post-traumatic symptom pattern described."
    ]
  },
  {
    id: "s3-0223",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Acute testicular torsion",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 15-year-old boy has sudden, severe left testicular pain that woke him 2 hours ago, along with nausea. The left testis is high-riding and exquisitely tender with a transverse lie, and the cremasteric reflex is absent on that side.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Reassure the patient and treat with oral antibiotics for presumed epididymitis.",
      "Obtain a CT scan of the pelvis before contacting any consultant.",
      "Recognize probable testicular torsion and obtain immediate urologic consultation for emergent scrotal exploration, using Doppler ultrasound only if it will not delay surgery, because detorsion within about 6 hours preserves the testis.",
      "Apply ice and arrange routine urology follow-up in 2 weeks.",
      "State that manual detorsion is contraindicated in all cases and that observation is preferred."
    ],
    answer: 2,
    exp: "Sudden severe testicular pain with a high-riding, transverse-lying testis and an absent cremasteric reflex is testicular torsion, a surgical emergency. Testicular salvage depends on time, with the best outcomes when detorsion occurs within about 6 hours, so management is immediate urologic consultation for scrotal exploration; ultrasound should not delay surgery when suspicion is high. Antibiotics for epididymitis, CT, ice with routine follow-up, and refusing manual detorsion all inappropriately delay definitive care.",
    why: [
      "Treating as epididymitis delays surgery in a time-critical torsion and risks testicular loss.",
      "CT is not indicated and would delay the emergent surgical evaluation.",
      "Correct: probable torsion requires immediate urologic consultation for exploration, with imaging only if it does not delay surgery.",
      "Ice and routine follow-up ignore the narrow window for testicular salvage.",
      "Manual detorsion can be attempted as a temporizing measure and is not universally contraindicated; observation alone is unsafe."
    ]
  },
  {
    id: "s3-0224",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Carbon monoxide poisoning",
    difficulty: "hard",
    anchor: "lab",
    vignette: "In midwinter, a family of four presents together with headache, nausea, dizziness, and malaise that improve when they are outdoors. They heat their home with a poorly vented furnace. On presentation their standard pulse oximetry reads normal.\n\n| Test | Value |\n|---|---|\n| Pulse oximetry (SpO2) | 98% |\n| Carboxyhemoglobin (co-oximetry) | 22% |\n| Lactate | mildly elevated |",
    lead: "Which of the following is the most appropriate diagnostic and initial treatment step?",
    options: [
      "A normal pulse oximeter reading excludes significant poisoning, so no further testing is needed.",
      "Order a chest radiograph as the definitive diagnostic test for this exposure.",
      "A methemoglobin level is the specific confirmatory test for this poisoning.",
      "Measure carboxyhemoglobin with co-oximetry, because standard pulse oximetry is falsely normal, and treat with high-flow 100% oxygen (considering hyperbaric oxygen for severe cases).",
      "No treatment is needed once the patients have left the house."
    ],
    answer: 3,
    exp: "A cluster of household members with headache, nausea, and dizziness that improve away from home, especially with a faulty combustion source, suggests carbon monoxide poisoning. Standard pulse oximetry cannot distinguish carboxyhemoglobin from oxyhemoglobin and reads falsely normal, so diagnosis requires co-oximetry measurement of carboxyhemoglobin. Treatment is immediate high-flow 100% oxygen to shorten carbon monoxide's half-life, with hyperbaric oxygen considered for severe toxicity.",
    why: [
      "Standard pulse oximetry is falsely reassuring in carbon monoxide poisoning because it cannot distinguish carboxyhemoglobin from oxyhemoglobin.",
      "A chest radiograph does not diagnose carbon monoxide exposure.",
      "Methemoglobin measures a different dyshemoglobinemia; carboxyhemoglobin is the relevant test here.",
      "Correct: measure carboxyhemoglobin by co-oximetry and treat with high-flow 100% oxygen, considering hyperbaric therapy for severe cases.",
      "Symptoms may temporarily improve outdoors, but significant carboxyhemoglobin still requires oxygen therapy."
    ]
  },
  {
    id: "s3-0225",
    system: "Surgery",
    discipline: "Surgery",
    topic: "Acute mesenteric ischemia diagnosis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 74-year-old man with atrial fibrillation who is not anticoagulated has sudden, severe, diffuse abdominal pain for 2 hours. The pain is strikingly out of proportion to a soft, only mildly tender abdomen. He appears uncomfortable, and initial labs are shown.\n\n| Test | Value | Reference |\n|---|---|---|\n| Lactate | 4.8 mmol/L | 0.5-2.2 |\n| White blood cells | 18,000 /uL | 4,500-11,000 |",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "The benign abdominal examination reliably excludes serious intra-abdominal pathology.",
      "Upper endoscopy is the diagnostic test of choice for this presentation.",
      "Reassure the patient and discharge him with a proton pump inhibitor.",
      "A plain abdominal radiograph is sufficient to exclude the diagnosis.",
      "Suspect acute mesenteric ischemia given pain out of proportion to examination, lactic acidosis, and atrial fibrillation; obtain urgent CT angiography of the abdomen and immediate surgical consultation."
    ],
    answer: 4,
    exp: "Sudden severe abdominal pain out of proportion to a benign examination, a lactic acidosis, and a cardioembolic source such as atrial fibrillation strongly suggest acute mesenteric ischemia, often from embolic occlusion of the superior mesenteric artery. CT angiography of the abdomen is the diagnostic test of choice, and surgical consultation must be immediate because delays lead to bowel infarction and high mortality. Endoscopy, plain films, and reassurance all dangerously delay diagnosis.",
    why: [
      "Pain out of proportion to a soft abdomen is the hallmark of mesenteric ischemia, so a benign exam does not exclude catastrophe.",
      "Upper endoscopy evaluates the mucosa of the upper GI tract, not mesenteric arterial flow.",
      "Discharging this patient risks bowel infarction and death from an evolving ischemic process.",
      "Plain radiographs are insensitive early and cannot exclude mesenteric ischemia.",
      "Correct: the presentation suggests acute mesenteric ischemia requiring urgent CT angiography and immediate surgical consultation."
    ]
  }
];
