/*
 * Rounds Codex - USMLE Step 3, Day 1 (Foundations of Independent Practice) bank, Batch 3 (25 items)
 * Day-1-FIP blueprint: biostatistics/epidemiology and medical-literature interpretation
 * are heavily represented alongside applied clinical vignettes covering essential
 * diagnosis, systems-based practice, patient safety/quality, and ethics.
 * All vignettes are 100% original; source material used for facts only, never phrasing.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E; only the keyed one starts "Correct")
 */
const USMLE_STEP3D1_B3 = [
  {
    id: "s3-0051",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Number needed to harm from adverse-event data",
    difficulty: "easy",
    anchor: "table",
    vignette: "A randomized trial compares a new anticoagulant with placebo for 1 year. Investigators tabulate the proportion of patients in each group who experience a major bleeding event, the prespecified safety outcome.\n\n| Group | Major bleeding | No major bleeding | Total |\n|---|---|---|---|\n| New drug | 80 | 920 | 1000 |\n| Placebo | 30 | 970 | 1000 |",
    lead: "What is the number needed to harm for major bleeding with the new drug?",
    options: [
      "20",
      "5",
      "40",
      "13",
      "100"
    ],
    answer: 0,
    exp: "The number needed to harm is the reciprocal of the absolute risk increase in the harmful outcome. Here the event rate is 80/1000 = 8% on the drug and 30/1000 = 3% on placebo, an absolute risk increase of 0.08 - 0.03 = 0.05. The number needed to harm is 1 / 0.05 = 20, meaning that for every 20 patients treated, one extra major bleeding event occurs.",
    why: [
      "Correct: absolute risk increase = 8% - 3% = 5%, so number needed to harm = 1/0.05 = 20.",
      "This would require an absolute risk increase of 20%, which is not what the table shows.",
      "This uses an absolute risk increase of 2.5% rather than the correct 5%.",
      "This value does not correspond to the reciprocal of the 5% absolute risk increase.",
      "A number needed to harm of 100 would require only a 1% absolute risk increase."
    ]
  },
  {
    id: "s3-0052",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Post-test probability from a likelihood ratio",
    difficulty: "hard",
    anchor: "table",
    vignette: "A clinician is deciding how much a positive test result should change the probability of disease in a specific patient. Before testing, the clinician judges the patient's probability of disease to be 20% based on clinical features. The validated test characteristics are shown below.\n\n| Characteristic | Value |\n|---|---|\n| Sensitivity | 90% |\n| Specificity | 85% |\n| Pretest probability | 20% |",
    lead: "If the test is positive, what is the approximate post-test probability of disease?",
    options: [
      "20%",
      "60%",
      "85%",
      "6%",
      "90%"
    ],
    answer: 1,
    exp: "The positive likelihood ratio is sensitivity / (1 - specificity) = 0.90 / 0.15 = 6. Converting the 20% pretest probability to odds gives 0.20 / 0.80 = 0.25; multiplying by the likelihood ratio gives post-test odds of 0.25 x 6 = 1.5; converting back to a probability gives 1.5 / (1 + 1.5) = 0.60, or about 60%. A positive result thus roughly triples this patient's probability of disease.",
    why: [
      "This is the pretest probability, which a positive result should increase, not leave unchanged.",
      "Correct: LR+ = 6, pretest odds 0.25 x 6 = 1.5, post-test probability 1.5/2.5 = 60%.",
      "This overstates the shift; it does not follow from applying the likelihood ratio to 20% odds.",
      "This is far lower than the pretest probability and reflects a negative, not positive, result.",
      "This equals the sensitivity, not the post-test probability, which also depends on pretest odds."
    ]
  },
  {
    id: "s3-0053",
    system: "Biostatistics & Epidemiology",
    discipline: "Medical Literature Interpretation",
    topic: "Forest plot in a meta-analysis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A meta-analysis pools eight randomized trials of a preventive therapy versus placebo for a cardiovascular outcome. The forest plot displays each trial's risk ratio with confidence intervals and a summary diamond.\n\n**[IMAGE: forest plot of 8 trials; several individual confidence intervals cross the line of no effect (risk ratio 1.0), but the pooled summary diamond is centered at a risk ratio of 0.82 with a 95% confidence interval of 0.74-0.91 and reported heterogeneity I-squared = 15%]**",
    lead: "Which statement best interprets this forest plot?",
    options: [
      "The pooled result is not statistically significant because several individual trials crossed the line of no effect.",
      "There is substantial heterogeneity, so the trials should not have been combined.",
      "The pooled estimate shows a statistically significant relative risk reduction of about 18% with low heterogeneity across trials.",
      "Every individual trial demonstrated a significant benefit of the therapy.",
      "The pooled risk ratio of 0.82 indicates the therapy increases the outcome by 18%."
    ],
    answer: 2,
    exp: "The summary diamond is centered at a risk ratio of 0.82 with a 95% confidence interval of 0.74-0.91 that lies entirely below 1.0, so the pooled effect is statistically significant and represents roughly an 18% relative reduction in the outcome. The low I-squared (15%) indicates little between-trial heterogeneity. Pooling increases precision, so a significant summary estimate can emerge even when several individual trials, being underpowered, crossed the line of no effect.",
    why: [
      "The pooled confidence interval (0.74-0.91) excludes 1.0, so the summary result is significant despite wide individual intervals.",
      "An I-squared of 15% reflects low heterogeneity, supporting rather than precluding pooling.",
      "Correct: the pooled risk ratio 0.82 (CI 0.74-0.91) is a significant ~18% relative reduction, with low heterogeneity.",
      "Several individual intervals cross 1.0, so not every trial was individually significant.",
      "A risk ratio below 1.0 indicates a reduction, not an increase, in the outcome."
    ]
  },
  {
    id: "s3-0054",
    system: "Biostatistics & Epidemiology",
    discipline: "Epidemiology",
    topic: "Incidence rate using person-time",
    difficulty: "easy",
    anchor: "table",
    vignette: "A cohort of initially disease-free workers is followed to measure how quickly a chronic disease develops. Because participants enter and leave the study at different times, investigators use accumulated person-time as the denominator.\n\n| Measure | Value |\n|---|---|\n| New cases observed | 30 |\n| Total follow-up | 600 person-years |",
    lead: "What is the incidence rate of the disease in this cohort?",
    options: [
      "5 per 1,000 person-years",
      "20 per 1,000 person-years",
      "30 per 1,000 person-years",
      "50 per 1,000 person-years",
      "600 per 1,000 person-years"
    ],
    answer: 3,
    exp: "An incidence rate is the number of new cases divided by the total person-time at risk: 30 cases / 600 person-years = 0.05 cases per person-year, equivalent to 50 per 1,000 person-years. Using person-time in the denominator accounts for varying lengths of follow-up and for participants who are observed for different periods, unlike a simple cumulative incidence proportion.",
    why: [
      "This would result from dividing by 6,000 person-years rather than 600.",
      "This does not match 30 cases divided by 600 person-years.",
      "This is the case count expressed per 1,000, not the rate per person-time.",
      "Correct: 30 cases / 600 person-years = 0.05/year = 50 per 1,000 person-years.",
      "This misuses the person-time total as if it were the numerator."
    ]
  },
  {
    id: "s3-0055",
    system: "Biostatistics & Epidemiology",
    discipline: "Biostatistics",
    topic: "Interrater agreement beyond chance",
    difficulty: "moderate",
    anchor: null,
    vignette: "Two radiologists independently classify 200 chest radiographs as normal or abnormal. Investigators want to quantify how well the two readers agree with each other, correcting for the agreement that would be expected by chance alone.",
    lead: "Which statistic best measures interrater agreement beyond chance?",
    options: [
      "The Pearson correlation coefficient",
      "The p-value from a chi-square test",
      "The sensitivity of one reader versus the other",
      "The coefficient of determination (R-squared)",
      "The Cohen kappa coefficient"
    ],
    answer: 4,
    exp: "Cohen kappa measures agreement between two raters classifying items into categories while correcting for the agreement expected by chance, making it the appropriate statistic for interrater reliability of a categorical judgment. A kappa of 1 is perfect agreement, 0 is chance-level agreement, and values around 0.6-0.8 are considered substantial. Correlation coefficients and p-values do not adjust for chance categorical agreement.",
    why: [
      "The Pearson correlation measures linear association between continuous variables, not categorical agreement corrected for chance.",
      "A chi-square p-value tests for association, not the degree of agreement beyond chance.",
      "Sensitivity compares a test against a reference standard, not the mutual agreement of two raters.",
      "R-squared describes variance explained in a regression, not interrater reliability.",
      "Correct: Cohen kappa quantifies interrater agreement for categorical ratings while correcting for chance."
    ]
  },
  {
    id: "s3-0056",
    system: "Preventive Medicine & Ethics",
    discipline: "Ethics",
    topic: "Request for non-beneficial (futile) intervention",
    difficulty: "moderate",
    anchor: null,
    vignette: "A patient with multiorgan failure and an irreversible terminal condition is not expected to survive. The family insists that the team continue aggressive life-prolonging interventions and asks that everything possible be done. The team believes further escalation offers no realistic benefit and only prolongs suffering.",
    lead: "Which of the following is the most appropriate approach?",
    options: [
      "Immediately and unilaterally withdraw all interventions over the family's objection.",
      "Comply with every demand indefinitely regardless of the clinical assessment.",
      "Obtain a court order before communicating further with the family.",
      "Transfer the patient to another facility to avoid the conflict.",
      "Hold a goals-of-care conversation to understand the family's values, provide clear prognostic information, involve palliative care, and use the ethics committee if disagreement persists."
    ],
    answer: 4,
    exp: "When families request interventions the team judges non-beneficial, the appropriate first step is careful, compassionate communication: a goals-of-care discussion that explores the family's values, delivers honest prognostic information, and aligns the plan with achievable goals. Palliative care and, if conflict persists, an ethics consultation help resolve disagreement. Unilateral withdrawal, indefinite compliance, and reflexive legal or transfer maneuvers bypass this shared decision-making process.",
    why: [
      "Abrupt unilateral withdrawal without communication disregards shared decision-making and the family's role.",
      "Indefinitely providing non-beneficial interventions is not ethically required and can prolong suffering.",
      "Courts are a last resort after communication and ethics processes fail, not an opening step.",
      "Transferring to sidestep the conflict avoids rather than addresses the underlying disagreement.",
      "Correct: a goals-of-care conversation with prognostic honesty, palliative care, and ethics support is the appropriate approach."
    ]
  },
  {
    id: "s3-0057",
    system: "Preventive Medicine & Ethics",
    discipline: "Epidemiology",
    topic: "Herd immunity threshold and basic reproduction number",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A public health team plans a vaccination campaign for a highly contagious respiratory illness and wants to estimate the proportion of the population that must be immune to interrupt sustained transmission.\n\n| Parameter | Value |\n|---|---|\n| Basic reproduction number (R0) | 15 |\n| Vaccine effectiveness | assumed ~100% |",
    lead: "Approximately what proportion of the population must be immune to reach the herd immunity threshold?",
    options: [
      "50%",
      "67%",
      "85%",
      "93%",
      "100%"
    ],
    answer: 3,
    exp: "The herd immunity threshold is estimated as 1 - 1/R0. For an illness with R0 = 15, that is 1 - 1/15 = 1 - 0.067 = 0.933, or about 93%. Highly transmissible diseases such as measles have very high R0 values and therefore require very high immunization coverage to interrupt sustained transmission and protect those who cannot be vaccinated.",
    why: [
      "A 50% threshold corresponds to an R0 of about 2, far lower than 15.",
      "A 67% threshold corresponds to an R0 of about 3.",
      "An 85% threshold corresponds to an R0 of roughly 6-7, still below 15.",
      "Correct: 1 - 1/15 = 0.93, so about 93% immunity is required.",
      "Reaching 100% immunity is not required; the threshold interrupts transmission below full coverage."
    ]
  },
  {
    id: "s3-0058",
    system: "Preventive Medicine & Ethics",
    discipline: "Ethics",
    topic: "Parental refusal of routine childhood vaccination",
    difficulty: "moderate",
    anchor: null,
    vignette: "At a well-child visit, the parents of a healthy toddler decline all routine childhood vaccinations, citing concerns they read online. The child has no acute illness and no contraindication to immunization. The parents are otherwise engaged and attentive.",
    lead: "Which of the following is the most appropriate response?",
    options: [
      "Report the parents to child protective services for medical neglect.",
      "Immediately dismiss the family from the practice.",
      "Explore and address the parents' specific concerns, provide clear evidence-based counseling, strongly recommend vaccination, and document the discussion while continuing care.",
      "Vaccinate the child over the parents' explicit objection.",
      "Accept the refusal without any discussion or documentation."
    ],
    answer: 2,
    exp: "For a nonemergent decision, competent parents may generally decline routine vaccination on behalf of a healthy child. The appropriate response is to explore the specific concerns, provide clear evidence-based counseling, strongly and respectfully recommend immunization, document the conversation, and maintain the therapeutic relationship so the topic can be revisited. Reporting, dismissal, and vaccinating over objection are not warranted when there is no immediate danger to the child.",
    why: [
      "Declining routine vaccination for a healthy child is not medical neglect and does not warrant a report.",
      "Immediate dismissal severs the relationship and forgoes opportunities to build trust and revisit the issue.",
      "Correct: explore concerns, counsel with evidence, strongly recommend, document, and continue care.",
      "Vaccinating over explicit parental objection violates their authority for this nonemergent decision.",
      "Passively accepting refusal without counseling or documentation abandons the physician's advisory role."
    ]
  },
  {
    id: "s3-0059",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Primary hypothyroidism",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 45-year-old woman reports several months of fatigue, cold intolerance, weight gain, constipation, and dry skin. On examination she has slightly coarse skin and delayed relaxation of the ankle reflexes.\n\n| Test | Value | Reference |\n|---|---|---|\n| TSH | 12 mIU/L | 0.4-4.0 |\n| Free T4 | low | 0.8-1.8 ng/dL |",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "No treatment; recheck thyroid tests in 1 year.",
      "Levothyroxine replacement.",
      "Methimazole.",
      "Radioactive iodine ablation.",
      "Propranolol alone."
    ],
    answer: 1,
    exp: "An elevated TSH with a low free T4 and typical symptoms indicates overt primary hypothyroidism. The treatment is thyroid hormone replacement with levothyroxine, titrated to normalize the TSH. Antithyroid drugs, radioiodine ablation, and beta-blockers treat hyperthyroidism and are inappropriate here.",
    why: [
      "Overt hypothyroidism with symptoms and a low free T4 should be treated, not merely monitored.",
      "Correct: overt primary hypothyroidism is treated with levothyroxine titrated to the TSH.",
      "Methimazole treats hyperthyroidism and would worsen a hypothyroid state.",
      "Radioiodine ablation is used for hyperthyroidism, not for an underactive thyroid.",
      "Propranolol controls hyperthyroid symptoms and does not replace deficient thyroid hormone."
    ]
  },
  {
    id: "s3-0060",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Acute gouty arthritis flare",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 55-year-old man with hypertension awakens with the sudden onset of an exquisitely painful, red, swollen first metatarsophalangeal joint. He has had similar self-limited episodes before. There is no fever, no skin break, and no evidence of joint infection; arthrocentesis shows negatively birefringent needle-shaped crystals.",
    lead: "Which of the following is the most appropriate management of this acute flare?",
    options: [
      "Start an anti-inflammatory agent such as an NSAID, colchicine, or a short course of corticosteroids.",
      "Begin urate-lowering therapy with allopurinol to abort the attack.",
      "Give broad-spectrum intravenous antibiotics.",
      "Start daily long-term colchicine only, deferring any acute treatment.",
      "Provide no treatment, since gout resolves on its own."
    ],
    answer: 0,
    exp: "The clinical picture and negatively birefringent needle-shaped crystals confirm an acute gout flare. Acute treatment is an anti-inflammatory agent: an NSAID, colchicine, or a short course of systemic corticosteroids. Urate-lowering therapy such as allopurinol is not started (or changed) during an acute attack because shifting urate levels can prolong or worsen the flare; it is initiated later for long-term prevention.",
    why: [
      "Correct: an acute gout flare is treated with an NSAID, colchicine, or a short corticosteroid course.",
      "Allopurinol does not treat an acute attack and can prolong it if started during a flare.",
      "The crystal findings and absence of infection make antibiotics inappropriate.",
      "Withholding acute anti-inflammatory therapy leaves the painful flare untreated.",
      "Although flares can be self-limited, effective anti-inflammatory therapy is indicated to relieve severe pain."
    ]
  },
  {
    id: "s3-0061",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Vitamin B12 deficiency anemia",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 68-year-old man reports progressive fatigue and numbness and tingling in both feet. He has a smooth, sore tongue and reduced vibratory sensation in the lower extremities.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin | 9.6 g/dL | 13.5-17.5 |\n| Mean corpuscular volume | 112 fL | 80-100 |\n| Serum vitamin B12 | low | 200-900 pg/mL |\n| Peripheral smear | hypersegmented neutrophils | - |",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Vitamin B12 (cobalamin) replacement.",
      "Oral iron supplementation.",
      "Folic acid alone.",
      "Packed red blood cell transfusion as definitive therapy.",
      "Erythropoietin injections."
    ],
    answer: 0,
    exp: "Macrocytic anemia with a low vitamin B12 level, hypersegmented neutrophils, glossitis, and neurologic findings (paresthesias, reduced vibratory sense) indicates vitamin B12 deficiency. Treatment is B12 (cobalamin) repletion, which corrects the anemia and can halt or reverse the neuropathy. Giving folate alone can improve the anemia while allowing the neurologic damage to progress, so B12 must be replaced.",
    why: [
      "Correct: low B12 with macrocytosis and neurologic signs is treated with vitamin B12 replacement.",
      "Iron deficiency causes a microcytic, not macrocytic, anemia and is not indicated here.",
      "Folate alone can mask the anemia while the B12-related neuropathy worsens.",
      "Transfusion is not definitive therapy; it does not correct the underlying vitamin deficiency.",
      "Erythropoietin does not address a vitamin B12 deficiency."
    ]
  },
  {
    id: "s3-0062",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Guideline-directed therapy for heart failure with reduced ejection fraction",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 60-year-old man has chronic heart failure with a left ventricular ejection fraction of 30% and New York Heart Association class II symptoms. He is currently taking only a loop diuretic for volume control and remains clinically euvolemic. His blood pressure and renal function permit additional therapy.",
    lead: "Which of the following best reduces his long-term mortality?",
    options: [
      "Continue the loop diuretic alone.",
      "Initiate guideline-directed therapy: a beta-blocker plus an ACE inhibitor or ARNI, adding a mineralocorticoid receptor antagonist and an SGLT2 inhibitor.",
      "Start a nondihydropyridine calcium channel blocker.",
      "Use digoxin as the primary agent to improve survival.",
      "Provide no additional medication beyond diuretics."
    ],
    answer: 1,
    exp: "Loop diuretics relieve congestion but do not improve survival in heart failure with reduced ejection fraction. Mortality is reduced by guideline-directed medical therapy: an evidence-based beta-blocker, an ACE inhibitor or angiotensin receptor-neprilysin inhibitor (ARNI), a mineralocorticoid receptor antagonist, and an SGLT2 inhibitor. Nondihydropyridine calcium channel blockers are generally avoided, and digoxin reduces hospitalizations but not mortality.",
    why: [
      "Diuretics relieve symptoms but do not reduce mortality in reduced-ejection-fraction heart failure.",
      "Correct: beta-blocker plus ACE inhibitor/ARNI, an MRA, and an SGLT2 inhibitor form mortality-reducing therapy.",
      "Nondihydropyridine calcium channel blockers are negative inotropes and are generally avoided in this setting.",
      "Digoxin can reduce hospitalizations but has not been shown to improve survival.",
      "Withholding disease-modifying therapy forgoes a proven mortality benefit."
    ]
  },
  {
    id: "s3-0063",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "New diagnosis of type 2 diabetes mellitus",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 52-year-old man with obesity reports increased thirst and urination. He is not acutely ill and has no ketosis. His diagnostic testing is shown below.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin A1c | 8.1% | < 5.7% |\n| Fasting plasma glucose | 165 mg/dL | 70-99 |",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Immediate intravenous insulin infusion.",
      "A sulfonylurea as the sole first-line agent.",
      "Lifestyle modification plus metformin.",
      "No pharmacotherapy; diet alone regardless of A1c.",
      "Immediate basal-bolus insulin therapy."
    ],
    answer: 2,
    exp: "An A1c of 8.1% with a fasting glucose of 165 mg/dL confirms type 2 diabetes in a patient who is not acutely ill. Initial management combines lifestyle modification (nutrition, weight loss, and physical activity) with metformin, the preferred first-line pharmacologic agent unless contraindicated. Intensive insulin regimens are reserved for markedly higher glucose, symptomatic hyperglycemia, or catabolic features.",
    why: [
      "An intravenous insulin infusion is for hyperglycemic emergencies, not stable new type 2 diabetes.",
      "A sulfonylurea is not preferred first-line; metformin is the initial agent of choice.",
      "Correct: lifestyle modification plus metformin is first-line for newly diagnosed type 2 diabetes.",
      "Diet alone is insufficient at an A1c of 8.1%; pharmacotherapy is indicated.",
      "Basal-bolus insulin is unnecessary initial therapy for stable, nonketotic type 2 diabetes."
    ]
  },
  {
    id: "s3-0064",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Acute pulmonary embolism, hemodynamically stable",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 58-year-old woman develops acute dyspnea and pleuritic chest pain 5 days after knee replacement. She is tachycardic and mildly hypoxemic but hemodynamically stable with a normal blood pressure and no right heart strain on bedside echocardiography. She has no bleeding and no contraindication to anticoagulation.\n\n**[IMAGE: CT pulmonary angiogram showing a filling defect in the right main pulmonary artery consistent with acute pulmonary embolism]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Observation with a repeat scan in 24 hours.",
      "Systemic thrombolytic therapy.",
      "Inferior vena cava filter placement as first-line therapy.",
      "Therapeutic anticoagulation.",
      "Empiric antibiotics for pneumonia."
    ],
    answer: 3,
    exp: "The CT pulmonary angiogram confirms acute pulmonary embolism in a hemodynamically stable patient without right heart strain. The treatment is prompt therapeutic anticoagulation. Systemic thrombolysis is reserved for massive (hemodynamically unstable) embolism because of bleeding risk, and inferior vena cava filters are used mainly when anticoagulation is contraindicated or fails.",
    why: [
      "Delaying treatment of a confirmed embolism risks deterioration; anticoagulation should begin promptly.",
      "Thrombolysis is reserved for hemodynamically unstable (massive) embolism given its bleeding risk.",
      "An inferior vena cava filter is indicated mainly when anticoagulation is contraindicated or has failed.",
      "Correct: a hemodynamically stable confirmed pulmonary embolism is treated with therapeutic anticoagulation.",
      "The imaging shows an embolism, not pneumonia, so antibiotics are not indicated."
    ]
  },
  {
    id: "s3-0065",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Acute bronchiolitis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 7-month-old previously healthy infant is brought in during winter with 3 days of runny nose progressing to cough, wheezing, and rapid breathing with mild subcostal retractions. He is feeding adequately, is well hydrated, and has an oxygen saturation of 94% on room air. The clinical picture is consistent with viral bronchiolitis.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Routine nebulized albuterol for all infants.",
      "Systemic corticosteroids.",
      "Empiric oral antibiotics.",
      "A chest radiograph and antibiotics for every case.",
      "Supportive care with nasal suctioning, maintenance of hydration, and supplemental oxygen as needed."
    ],
    answer: 4,
    exp: "Bronchiolitis, most often caused by respiratory syncytial virus, is managed supportively: nasal suctioning, ensuring adequate hydration, and supplemental oxygen when saturations fall below the accepted threshold. Bronchodilators, systemic corticosteroids, and antibiotics are not routinely beneficial, and chest radiographs are not needed in typical, uncomplicated cases.",
    why: [
      "Routine bronchodilators are not recommended because they do not change the course of bronchiolitis.",
      "Systemic corticosteroids have not been shown to help in typical bronchiolitis.",
      "Bronchiolitis is viral, so empiric antibiotics are not indicated without evidence of bacterial infection.",
      "Routine radiographs and antibiotics for every case represent unnecessary overtreatment.",
      "Correct: supportive care with suctioning, hydration, and oxygen as needed is the mainstay of treatment."
    ]
  },
  {
    id: "s3-0066",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Acute otitis media",
    difficulty: "easy",
    anchor: null,
    vignette: "A 2-year-old girl has 1 day of fever, irritability, and right ear pain. On otoscopy the right tympanic membrane is bulging and erythematous with impaired mobility on pneumatic insufflation, indicating a middle-ear effusion with acute inflammation. She has no ear drainage and no toxic appearance.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Oral corticosteroids.",
      "Intravenous vancomycin.",
      "Oral antihistamines alone.",
      "Immediate tympanostomy tube placement.",
      "High-dose oral amoxicillin."
    ],
    answer: 4,
    exp: "A bulging, erythematous tympanic membrane with impaired mobility in a febrile toddler indicates acute otitis media. First-line therapy for children who warrant antibiotics is high-dose oral amoxicillin (amoxicillin-clavulanate if there are risk factors for resistance or recent treatment failure). Corticosteroids, antihistamines, intravenous antibiotics, and surgery are not first-line for uncomplicated acute otitis media.",
    why: [
      "Corticosteroids do not treat the bacterial infection of acute otitis media.",
      "Intravenous vancomycin is excessive for uncomplicated acute otitis media.",
      "Antihistamines do not treat the middle-ear infection and are not recommended.",
      "Tympanostomy tubes are for recurrent or persistent effusions, not an acute first episode.",
      "Correct: high-dose oral amoxicillin is first-line for uncomplicated acute otitis media requiring antibiotics."
    ]
  },
  {
    id: "s3-0067",
    system: "Pediatrics",
    discipline: "Pediatrics",
    topic: "Acute epiglottitis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 4-year-old boy whose immunizations are not up to date develops rapidly worsening high fever, drooling, and muffled voice over several hours. He sits leaning forward on his hands, appears anxious and toxic, and has soft inspiratory stridor. He resists lying down.\n\n**[IMAGE: lateral neck radiograph showing an enlarged, rounded epiglottis producing the thumbprint sign]**",
    lead: "Which of the following is the most appropriate immediate management?",
    options: [
      "Examine the oropharynx with a tongue depressor to visualize the epiglottis.",
      "Prescribe oral antibiotics and discharge home with follow-up.",
      "Give racemic epinephrine and dexamethasone and observe as for croup.",
      "Keep the child calm and undisturbed and arrange urgent controlled airway management in a setting with anesthesia and otolaryngology, then give intravenous antibiotics.",
      "Obtain immediate blood cultures and start a large intravenous fluid bolus before anything else."
    ],
    answer: 3,
    exp: "The abrupt toxic course with drooling, muffled voice, tripod positioning, and a thumbprint sign indicates acute epiglottitis, a potential airway emergency. The child should be kept calm to avoid precipitating complete airway obstruction, and definitive airway control should be arranged in a controlled setting (operating room) with anesthesia and otolaryngology available, followed by intravenous antibiotics. Examining the throat with a tongue blade can trigger fatal laryngospasm and is contraindicated.",
    why: [
      "Instrumenting the pharynx can provoke laryngospasm and complete airway obstruction and is contraindicated.",
      "Outpatient oral antibiotics are unsafe for a toxic child with an unstable airway.",
      "Racemic epinephrine and steroids treat croup, not the airway emergency of epiglottitis.",
      "Correct: keep the child calm and secure the airway in a controlled setting, then give intravenous antibiotics.",
      "Agitating the child for procedures before the airway is secured risks precipitating obstruction."
    ]
  },
  {
    id: "s3-0068",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Placenta previa",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 29-year-old woman at 32 weeks gestation has sudden painless, bright red vaginal bleeding. She is hemodynamically stable, the uterus is soft and nontender, and there are no regular contractions. The fetal heart rate tracing is reassuring.\n\n**[IMAGE: transvaginal ultrasound showing the placenta completely covering the internal cervical os]**",
    lead: "Which of the following is the most appropriate next step?",
    options: [
      "Perform a digital vaginal examination to assess cervical dilation.",
      "Induce labor for prompt vaginal delivery.",
      "Avoid digital vaginal examination, admit for close maternal and fetal monitoring, and plan cesarean delivery, managing expectantly while stable.",
      "Perform an immediate cesarean delivery regardless of stability.",
      "Discharge home with routine outpatient follow-up."
    ],
    answer: 2,
    exp: "Painless third-trimester bleeding with ultrasound showing the placenta covering the cervical os indicates placenta previa. Digital vaginal examination is contraindicated because it can provoke catastrophic hemorrhage. Management of a stable, preterm patient with a reassuring tracing is admission with close monitoring and expectant management to gain fetal maturity, with planned cesarean delivery; vaginal delivery is not possible with the placenta covering the os.",
    why: [
      "Digital examination in placenta previa can precipitate massive hemorrhage and is contraindicated.",
      "Vaginal delivery is unsafe when the placenta covers the os, so labor should not be induced.",
      "Correct: avoid digital exam, admit for monitoring, manage expectantly while stable, and plan cesarean delivery.",
      "Immediate cesarean is not required for a stable patient with a reassuring tracing at 32 weeks.",
      "Discharging a patient with active previa bleeding is unsafe and forgoes needed monitoring."
    ]
  },
  {
    id: "s3-0069",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Cervical cancer screening intervals",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A healthy 30-year-old woman with no history of abnormal results and a normal immune status asks how she should be screened for cervical cancer. General age-based screening options are summarized below.\n\n| Age group | Recommended screening options |\n|---|---|\n| Under 21 | No screening |\n| 21-29 | Cervical cytology every 3 years |\n| 30-65 | Cytology every 3 years, OR cytology plus HPV co-testing every 5 years, OR primary HPV testing every 5 years |",
    lead: "Which of the following is the most appropriate screening approach for her?",
    options: [
      "Annual cervical cytology (Pap test).",
      "Cytology every 3 years, or co-testing (cytology plus HPV) every 5 years, or primary HPV testing every 5 years.",
      "No screening until age 35.",
      "Immediate colposcopy.",
      "HPV vaccination in place of any screening."
    ],
    answer: 1,
    exp: "For an average-risk woman aged 30-65, acceptable cervical cancer screening options are cytology alone every 3 years, cytology plus HPV co-testing every 5 years, or primary HPV testing every 5 years. Annual Pap testing represents overscreening. HPV vaccination reduces risk but does not replace the need for screening, and colposcopy is a diagnostic step reserved for abnormal results.",
    why: [
      "Annual cytology exceeds recommended intervals and constitutes overscreening.",
      "Correct: at age 30-65, cytology every 3 years, co-testing every 5 years, or primary HPV testing every 5 years is appropriate.",
      "Screening for this age group is due now, not deferred to age 35.",
      "Colposcopy is a diagnostic procedure for abnormal results, not a primary screening test.",
      "Vaccination lowers risk but does not eliminate the need for routine screening."
    ]
  },
  {
    id: "s3-0070",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Intrapartum group B streptococcus prophylaxis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 28-year-old woman at 39 weeks gestation is admitted in active labor. Her routine rectovaginal culture obtained at 36 weeks was positive for group B streptococcus. She has no penicillin allergy, and there are no signs of chorioamnionitis.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Administer intrapartum intravenous penicillin (or ampicillin) for group B streptococcus prophylaxis.",
      "Give a course of oral antibiotics for 7 days after delivery.",
      "Treat only the newborn empirically after birth, giving nothing during labor.",
      "Perform a cesarean delivery to prevent vertical transmission.",
      "Provide no prophylaxis because she is asymptomatic."
    ],
    answer: 0,
    exp: "A positive antenatal group B streptococcus screen is an indication for intrapartum intravenous antibiotic prophylaxis, typically penicillin (ampicillin as an alternative), to reduce early-onset neonatal group B streptococcal disease. Prophylaxis is given during labor because that timing interrupts vertical transmission; treating after delivery, or defaulting to cesarean, is not the recommended strategy.",
    why: [
      "Correct: a positive group B streptococcus screen warrants intrapartum intravenous penicillin prophylaxis.",
      "Postpartum oral antibiotics do not prevent intrapartum transmission to the neonate.",
      "Treating only the newborn misses the benefit of intrapartum prophylaxis during labor.",
      "Cesarean delivery is not indicated solely to prevent group B streptococcus transmission.",
      "Colonization is asymptomatic by nature; prophylaxis is still indicated to protect the newborn."
    ]
  },
  {
    id: "s3-0071",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Generalized anxiety disorder",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 35-year-old woman describes at least 8 months of excessive, hard-to-control worry about many aspects of her life, including work, finances, and her family's health. She also reports restlessness, fatigue, difficulty concentrating, irritability, muscle tension, and disturbed sleep. The symptoms impair her functioning, and there is no substance use or other medical cause.",
    lead: "Which of the following best describes the diagnosis and initial treatment?",
    options: [
      "Generalized anxiety disorder; start an SSRI or SNRI, with cognitive behavioral therapy.",
      "Panic disorder; prescribe a long-term standing benzodiazepine.",
      "Normal stress; no treatment or follow-up is needed.",
      "Bipolar disorder; begin a mood stabilizer.",
      "Adjustment disorder; start an antipsychotic."
    ],
    answer: 0,
    exp: "At least 6 months of excessive, difficult-to-control worry about multiple domains plus several associated symptoms (restlessness, fatigue, poor concentration, irritability, muscle tension, sleep disturbance) with functional impairment defines generalized anxiety disorder. First-line treatment is an SSRI or SNRI and/or cognitive behavioral therapy. Benzodiazepines are not preferred for long-term management given dependence risk.",
    why: [
      "Correct: chronic pervasive worry with associated symptoms is generalized anxiety disorder, treated with an SSRI/SNRI and CBT.",
      "The picture is chronic worry, not recurrent panic attacks, and standing benzodiazepines are not first-line.",
      "The symptoms are impairing and chronic, so this is not merely normal stress.",
      "There is no evidence of manic or hypomanic episodes to suggest bipolar disorder.",
      "Antipsychotic monotherapy is not indicated for uncomplicated generalized anxiety disorder."
    ]
  },
  {
    id: "s3-0072",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Postpartum depression",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 30-year-old woman is 5 weeks postpartum and reports 3 weeks of persistent depressed mood, loss of interest, excessive guilt, poor sleep beyond the demands of newborn care, low energy, and frequent tearfulness. She denies any thoughts of harming herself or the infant, has no hallucinations or delusions, and there is no prior manic history.",
    lead: "Which of the following best describes the diagnosis and management?",
    options: [
      "Postpartum blues; reassure that it will resolve within about 2 weeks without treatment.",
      "Postpartum depression; begin an SSRI and/or psychotherapy and assess safety at follow-up.",
      "Postpartum psychosis; hospitalize immediately and start an antipsychotic.",
      "Normal new-parent adjustment; no evaluation or treatment is warranted.",
      "Generalized anxiety disorder; start a standing benzodiazepine."
    ],
    answer: 1,
    exp: "Depressive symptoms persisting well beyond 2 weeks postpartum with functional impairment indicate postpartum depression rather than the transient, self-limited postpartum blues. Management is an antidepressant such as an SSRI and/or psychotherapy, along with ongoing assessment of safety, mother-infant bonding, and thoughts of self-harm. Postpartum psychosis, which would include hallucinations, delusions, or disorganization, is absent here.",
    why: [
      "Postpartum blues resolve within about 2 weeks; symptoms persisting 3 weeks with impairment exceed that.",
      "Correct: persistent postpartum depressive symptoms are postpartum depression, treated with an SSRI and/or psychotherapy with safety assessment.",
      "There are no psychotic features, so this is not postpartum psychosis.",
      "Persistent impairing depressive symptoms are not normal adjustment and warrant treatment.",
      "The syndrome is depressive, and standing benzodiazepines are not the appropriate treatment."
    ]
  },
  {
    id: "s3-0073",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Acute ST-elevation myocardial infarction",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 59-year-old man arrives 1 hour after the onset of crushing substernal chest pain with diaphoresis and nausea. He is hemodynamically stable. The emergency department is at a hospital with an on-site catheterization laboratory available now.\n\n**[ECG: ST-segment elevation in leads II, III, and aVF with reciprocal ST depression in leads I and aVL, consistent with an acute inferior ST-elevation myocardial infarction]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Discharge with outpatient stress testing in 1 week.",
      "Administer a nonsteroidal anti-inflammatory drug for presumed pericarditis.",
      "Immediate reperfusion with primary percutaneous coronary intervention, plus aspirin and anticoagulation.",
      "Observe with serial troponins and no reperfusion therapy.",
      "Give fibrinolytics even though timely primary PCI is available."
    ],
    answer: 2,
    exp: "ST-segment elevation in the inferior leads with reciprocal changes indicates an acute ST-elevation myocardial infarction. When primary percutaneous coronary intervention is promptly available, it is the preferred reperfusion strategy and is superior to fibrinolysis; the patient also receives aspirin and anticoagulation. Reperfusion benefit is highly time-dependent, so delay or observation is inappropriate.",
    why: [
      "Discharging a patient with an evolving STEMI is dangerous and forgoes emergent reperfusion.",
      "The ECG and presentation indicate STEMI, not pericarditis, so NSAIDs are inappropriate.",
      "Correct: with a catheterization laboratory available, primary PCI plus aspirin and anticoagulation is the treatment of choice.",
      "Observation without reperfusion neglects a time-critical, treatable coronary occlusion.",
      "Fibrinolytics are second choice when timely primary PCI is available, as it is here."
    ]
  },
  {
    id: "s3-0074",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Septic shock resuscitation",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 70-year-old woman presents with fever, flank pain, and confusion. Her blood pressure is 82/48 mm Hg despite an initial fluid challenge, and she is tachycardic. A urinary source (pyelonephritis) is suspected.\n\n| Test | Value | Reference |\n|---|---|---|\n| Serum lactate | 4.5 mmol/L | < 2.0 |\n| White blood cell count | markedly elevated | 4.5-11.0 |",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Withhold antibiotics until blood culture results return in 2 days.",
      "Give intravenous fluids only, deferring antibiotics.",
      "Start vasopressors before any fluid resuscitation.",
      "Obtain blood cultures and lactate, give early broad-spectrum antibiotics and intravenous crystalloid resuscitation, and add vasopressors if hypotension persists.",
      "Discharge on oral antibiotics with next-day follow-up."
    ],
    answer: 3,
    exp: "Hypotension and a lactate of 4.5 mmol/L with a suspected infection indicate septic shock. Early management is to obtain blood cultures and a lactate, administer broad-spectrum antibiotics promptly (ideally within the first hour), and give intravenous crystalloid resuscitation, adding vasopressors (norepinephrine first-line) if hypotension persists after fluids. Delaying antibiotics or fluids worsens outcomes.",
    why: [
      "Antibiotics must not be delayed for culture results; early administration improves survival.",
      "Fluids alone without timely antibiotics leaves the driving infection untreated.",
      "Fluid resuscitation precedes vasopressors, which are added only if hypotension persists.",
      "Correct: cultures and lactate, early broad-spectrum antibiotics, crystalloid resuscitation, and vasopressors if needed is the sepsis bundle.",
      "Septic shock requires admission and aggressive resuscitation, not outpatient oral therapy."
    ]
  },
  {
    id: "s3-0075",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Acute appendicitis",
    difficulty: "moderate",
    anchor: null,
    vignette: "An 18-year-old man has 18 hours of periumbilical pain that migrated to the right lower quadrant, with anorexia and nausea. He has right lower quadrant tenderness at McBurney point with guarding, a low-grade fever, and leukocytosis. Computed tomography shows a dilated, inflamed appendix with surrounding fat stranding and no perforation.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Discharge home with outpatient oral antibiotics only.",
      "Arrange colonoscopy to evaluate the pain.",
      "Observe indefinitely without intervention.",
      "Prescribe oral laxatives for presumed constipation.",
      "Admit for intravenous fluids and antibiotics and perform appendectomy."
    ],
    answer: 4,
    exp: "The migratory pain, McBurney-point tenderness, leukocytosis, and CT findings confirm acute appendicitis. Standard management is admission with intravenous fluids and antibiotics followed by appendectomy, which is typically performed laparoscopically. Appendectomy is definitive and reduces the risk of perforation; nonoperative options are reserved for selected uncomplicated cases and specific circumstances.",
    why: [
      "Discharge with oral antibiotics alone is not standard care for confirmed acute appendicitis.",
      "Colonoscopy does not address an acutely inflamed appendix and could be harmful.",
      "Indefinite observation risks progression to perforation and is inappropriate.",
      "The picture is appendicitis, not constipation, so laxatives are wrong and potentially harmful.",
      "Correct: acute appendicitis is treated with fluids, antibiotics, and appendectomy."
    ]
  }
];
