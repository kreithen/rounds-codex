/*
 * Rounds Codex - USMLE Step 3, Day 2 (Advanced Clinical Management / ACM) bank, Batch 8 (5 items)
 * Day-2-ACM blueprint: managing patients OVER TIME across ambulatory, ED, inpatient, and
 * continuity settings. Vignettes are longer and multi-step (initial data -> workup/evolution
 * -> decision point); lead-ins stress the most appropriate NEXT STEP in management, best
 * initial therapy, monitoring, drug titration, and follow-up. Much less pure biostatistics
 * than Day 1. Same Step 3 system set and shared `s3-` id space as Day 1 (Day 2 extends bank).
 * All vignettes are 100% original; source material used for facts only, never phrasing.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E; only the keyed one starts "Correct")
 */
const USMLE_STEP3D2_B8 = [
  {
    id: "s3-0408",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Restless legs syndrome pharmacotherapy",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 58-year-old woman reports several months of an uncomfortable crawling, pulling sensation deep in both legs that appears each evening when she sits or lies down. The urge to move is nearly irresistible and is relieved by walking but returns as soon as she rests, so she is falling asleep late and is exhausted during the day. Her neurologic examination is normal with no sensory loss or weakness, and she takes no dopamine-blocking drugs. You review her medications and obtain iron studies before choosing therapy.\n\n| Test | Value |\n|---|---|\n| Ferritin | 24 ng/mL |\n| Transferrin saturation | 14% |\n| Hemoglobin | 13.4 g/dL |\n| TSH | normal |",
    lead: "Which of the following is the most appropriate initial management?",
    options: [
      "Replete iron because the serum ferritin is low, and review medications that can aggravate symptoms.",
      "Start long-term high-dose opioids as the first-line treatment for her symptoms.",
      "Begin a high-dose dopamine agonist immediately, without regard to her iron status.",
      "Prescribe nightly diphenhydramine to help her fall asleep.",
      "Reassure her that no evaluation or treatment is needed for these sensations."
    ],
    answer: 0,
    exp: "Her nocturnal, movement-relieved leg discomfort with a normal neurologic examination is typical of restless legs syndrome. When serum ferritin is low (roughly below 75 ng/mL) or transferrin saturation is reduced, iron repletion is first-line and can substantially reduce symptoms; aggravating agents such as antihistamines, dopamine antagonists, and some antidepressants should also be removed before drug therapy is escalated.",
    why: [
      "Correct: with low ferritin and transferrin saturation, iron repletion plus removing aggravating drugs is the appropriate first step and can markedly improve restless legs syndrome.",
      "Chronic high-dose opioids are reserved for refractory disease, not initial therapy given the risks of dependence.",
      "Dopamine agonists risk augmentation over time and are not the first choice when iron deficiency is present and correctable.",
      "Antihistamines such as diphenhydramine characteristically worsen restless legs syndrome and would aggravate her symptoms.",
      "Her sleep is significantly disrupted, so evaluation and treatment are clearly warranted rather than reassurance alone."
    ]
  },
  {
    id: "s3-0409",
    system: "Emergency Medicine",
    discipline: "Emergency Medicine",
    topic: "Wernicke encephalopathy acute management",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 54-year-old man with long-standing alcohol use disorder is brought to the emergency department by family because he has become increasingly confused over 2 days and is unsteady on his feet. He has eaten poorly for weeks. On examination he is disoriented and inattentive, has horizontal nystagmus with impaired lateral gaze, and cannot walk without support because of a broad-based ataxic gait. A fingerstick glucose is drawn and treatment is being organized before any carbohydrate is given.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Give intravenous dextrose immediately for presumed hypoglycemia and add thiamine afterward.",
      "Administer high-dose intravenous thiamine before giving any glucose-containing fluids.",
      "Obtain a lumbar puncture and start empiric antibiotics before any other therapy.",
      "Arrange urgent brain MRI and withhold all treatment until it is completed.",
      "Provide an oral multivitamin and discharge him with outpatient follow-up."
    ],
    answer: 1,
    exp: "The triad of encephalopathy, ophthalmoplegia/nystagmus, and gait ataxia in a malnourished patient indicates Wernicke encephalopathy from thiamine deficiency. High-dose parenteral thiamine must be given promptly and, critically, before glucose administration, because a glucose load can precipitate or worsen the deficiency; treatment should not await imaging.",
    why: [
      "Giving glucose before thiamine can acutely worsen Wernicke encephalopathy, so thiamine must come first.",
      "Correct: prompt high-dose intravenous thiamine given before any glucose is the essential intervention in suspected Wernicke encephalopathy.",
      "There is no evidence of meningitis; delaying thiamine for a lumbar puncture risks irreversible injury.",
      "Wernicke encephalopathy is a clinical diagnosis and treatment must not be delayed for MRI.",
      "This is a neurologic emergency; oral vitamins and discharge would be dangerously inadequate."
    ]
  },
  {
    id: "s3-0410",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Infected pancreatic necrosis step-up management",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 49-year-old man was admitted 4 weeks ago with severe gallstone pancreatitis complicated by extensive necrosis. He had been improving on supportive care but now develops recurring fevers, worsening abdominal pain, and a rising leukocyte count over 2 days. He is hemodynamically stable on the ward. A contrast-enhanced CT of the abdomen is obtained to evaluate the pancreatic bed before deciding on intervention.\n\n**[IMAGE: Contrast-enhanced abdominal CT showing a large walled-off peripancreatic collection containing gas bubbles, consistent with infected necrosis]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Proceed immediately to open surgical necrosectomy as the initial intervention.",
      "Continue supportive care alone without antibiotics or any drainage procedure.",
      "Start broad-spectrum antibiotics and pursue a step-up approach with image-guided (percutaneous or endoscopic) drainage, delaying necrosectomy.",
      "Begin indefinite bowel rest with total parenteral nutrition as definitive therapy.",
      "Perform emergent ERCP with sphincterotomy to drain the necrotic collection."
    ],
    answer: 2,
    exp: "Gas within a walled-off collection weeks after necrotizing pancreatitis, with new fever and leukocytosis, indicates infected pancreatic necrosis. Management is broad-spectrum antibiotics plus a step-up approach: minimally invasive image-guided drainage (percutaneous or endoscopic) first, escalating to minimally invasive necrosectomy only if needed. This strategy reduces morbidity compared with immediate open necrosectomy, and intervention is ideally delayed until the collection is walled off.",
    why: [
      "Immediate open necrosectomy carries high morbidity and is no longer first-line when a step-up approach is feasible.",
      "Infected necrosis will not resolve with supportive care alone; antibiotics and source control are required.",
      "Correct: antibiotics plus a step-up strategy beginning with image-guided drainage, reserving necrosectomy for failure, is the modern standard for infected walled-off necrosis.",
      "Parenteral nutrition supports the patient but does not control the infected collection.",
      "ERCP addresses biliary obstruction, not drainage of an infected retroperitoneal necrotic collection."
    ]
  },
  {
    id: "s3-0411",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Cervical insufficiency cerclage management",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 30-year-old woman, gravida 3 para 0, presents at 18 weeks gestation for follow-up. Both prior pregnancies ended in painless second-trimester losses with rapid, painless cervical dilation and no contractions or bleeding. She currently feels well with no cramping, leaking, or bleeding, and there are no signs of infection. Transvaginal ultrasound is performed to assess the cervix before deciding on management.\n\n**[IMAGE: Transvaginal ultrasound showing a shortened cervix measuring 18 mm with funneling of the internal os and no fetal or placental abnormality]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Proceed to immediate delivery given the shortened cervix.",
      "Recommend strict bed rest alone as definitive treatment.",
      "Start indefinite tocolytic therapy to prevent cervical change.",
      "Place a cervical cerclage given her history of painless second-trimester losses and current short cervix.",
      "Reassure her and continue routine prenatal visits without intervention."
    ],
    answer: 3,
    exp: "A history of recurrent painless second-trimester losses with a currently short cervix supports cervical insufficiency. A history- and ultrasound-indicated cervical cerclage, typically combined with vaginal progesterone, is the appropriate intervention to reduce the risk of recurrent preterm birth in the absence of infection, labor, or ruptured membranes.",
    why: [
      "Delivery at 18 weeks is not viable and is not indicated when cerclage can prolong the pregnancy.",
      "Bed rest has not been shown to prevent preterm birth and is not adequate management here.",
      "Tocolytics treat active contractions, which she does not have, and are not a preventive strategy for insufficiency.",
      "Correct: cervical cerclage is appropriate for cervical insufficiency with prior painless second-trimester losses and a short cervix, in the absence of infection or labor.",
      "Doing nothing ignores a strong history and objective short cervix that place her at high risk for another loss."
    ]
  },
  {
    id: "s3-0412",
    system: "Psychiatry",
    discipline: "Psychiatry",
    topic: "Alzheimer dementia pharmacologic management",
    difficulty: "easy",
    anchor: null,
    vignette: "A 74-year-old man is brought in by his daughter for gradually worsening memory over about 2 years. He repeats questions, misplaces items, and has gotten lost driving familiar routes, though he still dresses and bathes himself. On cognitive testing he scores in the mild-to-moderate impairment range with prominent short-term memory deficits. Depression screening, thyroid studies, vitamin B12, and neuroimaging show no reversible cause, and his examination is otherwise nonfocal.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Start a standing high-dose benzodiazepine to improve his memory.",
      "Begin an antipsychotic as first-line therapy for the cognitive decline.",
      "Prescribe high-dose vitamin E and ginkgo biloba as the primary treatment.",
      "Provide no treatment because nothing can help his condition.",
      "Start a cholinesterase inhibitor such as donepezil and provide caregiver support and driving-safety counseling."
    ],
    answer: 4,
    exp: "The insidious progressive amnestic decline with a negative reversible-cause workup is consistent with Alzheimer dementia. A cholinesterase inhibitor (for example donepezil) is the appropriate first-line pharmacotherapy for mild-to-moderate disease and can modestly improve cognition and function, and management must also include caregiver support, safety measures, and driving assessment.",
    why: [
      "Benzodiazepines impair cognition and increase fall and confusion risk; they do not treat dementia.",
      "Antipsychotics are reserved for severe refractory agitation or psychosis and are not first-line for cognitive decline.",
      "Vitamin E and ginkgo are not established primary therapies for Alzheimer dementia.",
      "Effective symptomatic therapy and important supportive interventions exist, so withholding all treatment is inappropriate.",
      "Correct: a cholinesterase inhibitor such as donepezil plus caregiver support and safety planning is first-line management of mild-to-moderate Alzheimer dementia."
    ]
  }
];
