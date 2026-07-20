/*
 * Rounds Codex - USMLE Step 2 CK question bank, Batch 7 (25 items)
 * Blueprint-weighted, Medicine-heavy clinical mix. All vignettes original;
 * source used for facts only. Step 2 CK items are clinical: each ends in a
 * decision about diagnosis, next best step, pharmacotherapy, or prevention.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP2CK_B7 = [
  {
    id: "s2ck-0151",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Hypertrophic cardiomyopathy",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 19-year-old competitive basketball player reports two episodes of exertional lightheadedness and one near-syncope while sprinting. A harsh crescendo-decrescendo systolic murmur is heard at the left lower sternal border that becomes louder with Valsalva and standing and softer with squatting. A relative died suddenly in his twenties.\n\n**[ECG: prominent left ventricular hypertrophy with deep, narrow Q waves in the inferolateral leads]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Start a dihydropyridine calcium channel blocker as a vasodilator",
      "Obtain a transthoracic echocardiogram and restrict him from competitive athletics",
      "Begin aggressive intravenous diuresis",
      "Perform immediate coronary angiography with thrombolysis",
      "Reassure him and clear him for competitive sports"
    ],
    answer: 1,
    exp: "Exertional syncope with a systolic murmur that intensifies with maneuvers reducing preload (Valsalva, standing) and a family history of sudden death in a young athlete points to hypertrophic cardiomyopathy with dynamic left ventricular outflow obstruction. The next step is transthoracic echocardiography to confirm asymmetric septal hypertrophy, along with restriction from competitive sports because of the risk of sudden cardiac death. Vasodilators and diuretics reduce preload and worsen the obstruction.",
    why: [
      "Vasodilators reduce afterload and preload, worsening the dynamic outflow obstruction of hypertrophic cardiomyopathy.",
      "Correct: confirm the diagnosis with echocardiography and restrict competitive athletics given the sudden-death risk.",
      "Diuresis lowers preload and increases outflow obstruction, worsening symptoms.",
      "The murmur and ECG indicate hypertrophic cardiomyopathy, not an acute coronary occlusion needing thrombolysis.",
      "Clearing an athlete with exertional syncope and a dynamic murmur ignores a potentially fatal condition."
    ]
  },
  {
    id: "s2ck-0152",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Type 2 diabetes mellitus initial pharmacotherapy",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 52-year-old obese man is found to have hyperglycemia on routine screening. He is asymptomatic, well-appearing, and not volume-depleted, with no ketosis and normal renal function. His blood pressure is mildly elevated and he has acanthosis nigricans.\n\n| Test | Value | Reference |\n|---|---|---|\n| Hemoglobin A1c | 7.8% | < 5.7 |\n| Fasting glucose | 168 mg/dL | 70-99 |\n| Creatinine | 0.9 mg/dL | 0.6-1.2 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Initiate metformin together with lifestyle modification",
      "Start basal-bolus insulin now",
      "Begin a sulfonylurea as first-line monotherapy",
      "Recommend diet and exercise alone indefinitely with no medication",
      "Start a thiazolidinedione as first-line therapy"
    ],
    answer: 0,
    exp: "A new diagnosis of type 2 diabetes with an A1c of 7.8% in a patient without contraindications is managed with metformin plus lifestyle modification as first-line therapy. Metformin lowers hepatic glucose output, does not cause hypoglycemia, and is weight-neutral. Insulin is reserved for markedly higher A1c, catabolic symptoms, or failure of oral agents, and lifestyle change alone is insufficient at this glycemic level.",
    why: [
      "Correct: metformin plus lifestyle modification is first-line for new type 2 diabetes without contraindications.",
      "Basal-bolus insulin is reserved for very high A1c, symptomatic hyperglycemia, or oral-agent failure.",
      "Sulfonylureas cause hypoglycemia and weight gain and are not preferred first-line over metformin.",
      "Lifestyle change alone will not adequately control an A1c of 7.8%; pharmacotherapy is indicated.",
      "Thiazolidinediones cause weight gain and fluid retention and are not first-line therapy."
    ]
  },
  {
    id: "s2ck-0153",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Sarcoidosis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 35-year-old woman has several weeks of dry cough, exertional dyspnea, and fatigue. She has tender erythematous nodules on her shins and mildly blurred vision. She does not smoke, has no occupational dust exposure, and has no fever or weight loss.\n\n**[IMAGE: chest radiograph showing symmetric bilateral hilar lymphadenopathy with clear lung fields]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Tuberculosis",
      "Hodgkin lymphoma",
      "Sarcoidosis",
      "Silicosis",
      "Histoplasmosis"
    ],
    answer: 2,
    exp: "Bilateral hilar lymphadenopathy with cough and dyspnea, erythema nodosum, and eye involvement (uveitis) in a young adult is classic for sarcoidosis, a multisystem granulomatous disease. Biopsy of an accessible site shows noncaseating granulomas, and infection and lymphoma must be excluded. Many patients with hilar adenopathy and erythema nodosum (Lofgren syndrome) have a self-limited course.",
    why: [
      "Tuberculosis usually causes unilateral or asymmetric adenopathy with constitutional symptoms and a positive exposure history.",
      "Lymphoma can cause adenopathy but does not typically produce erythema nodosum and uveitis with symmetric hilar nodes.",
      "Correct: symmetric bilateral hilar adenopathy with erythema nodosum and uveitis is characteristic of sarcoidosis.",
      "Silicosis requires occupational dust exposure and shows upper-lobe nodular fibrosis, absent here.",
      "Histoplasmosis is regional and typically causes an acute febrile pulmonary illness rather than this syndrome."
    ]
  },
  {
    id: "s2ck-0154",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Acute hepatitis A infection",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 28-year-old man develops nausea, anorexia, malaise, and then jaundice two weeks after returning from travel to a region with poor sanitation, where he ate raw shellfish. He has tender hepatomegaly and dark urine. He drinks no alcohol and takes no medications or acetaminophen.\n\n| Test | Value | Reference |\n|---|---|---|\n| ALT | 1850 U/L | 7-56 |\n| Total bilirubin | 7.2 mg/dL | 0.1-1.2 |\n| Anti-HAV IgM | positive | negative |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Start lifelong tenofovir",
      "Begin pegylated interferon therapy",
      "Arrange urgent liver transplantation",
      "Supportive care with monitoring for signs of fulminant hepatitis",
      "Start broad-spectrum antibiotics"
    ],
    answer: 3,
    exp: "An acute self-limited hepatitis after travel with fecal-oral exposure and a positive anti-HAV IgM is hepatitis A. Management is supportive, with hydration, avoidance of hepatotoxins, and monitoring for the rare progression to fulminant hepatic failure (worsening coagulopathy or encephalopathy). Hepatitis A does not become chronic, so antivirals and interferon are unnecessary.",
    why: [
      "Tenofovir treats chronic hepatitis B, not a self-limited hepatitis A infection.",
      "Interferon is used for chronic viral hepatitis, not acute hepatitis A.",
      "Transplantation is reserved for the rare case of fulminant failure, not routine hepatitis A.",
      "Correct: hepatitis A is managed supportively with monitoring for fulminant hepatic failure.",
      "There is no bacterial infection; antibiotics are not indicated."
    ]
  },
  {
    id: "s2ck-0155",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Polymyalgia rheumatica",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 72-year-old woman has 6 weeks of aching and stiffness in both shoulders and hips, worst in the morning and lasting more than an hour, making it hard to rise from a chair or lift her arms. Muscle strength is preserved when pain allows, and there is no headache, jaw claudication, or visual change.\n\n| Test | Value | Reference |\n|---|---|---|\n| ESR | 78 mm/h | < 30 |\n| CRP | elevated | < 0.5 |\n| Creatine kinase | normal | normal |",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "High-dose methotrexate",
      "Colchicine",
      "High-dose prednisone (60 mg/day) with temporal artery biopsy",
      "NSAIDs alone indefinitely",
      "Low-dose oral corticosteroids (prednisone about 15 mg/day)"
    ],
    answer: 4,
    exp: "Bilateral shoulder- and hip-girdle pain and stiffness with a markedly elevated ESR, normal creatine kinase, and preserved strength in an older adult is polymyalgia rheumatica. It responds rapidly and dramatically to low-dose corticosteroids (roughly 15 mg of prednisone daily), which are both diagnostic and therapeutic. High-dose steroids and temporal artery biopsy are reserved for accompanying giant cell arteritis, which this patient lacks.",
    why: [
      "Methotrexate is only a steroid-sparing adjunct, not the initial treatment for polymyalgia rheumatica.",
      "Colchicine treats crystal arthropathy, not polymyalgia rheumatica.",
      "High-dose steroids and biopsy are for giant cell arteritis, which she has no features of.",
      "NSAIDs alone do not adequately control polymyalgia rheumatica.",
      "Correct: low-dose corticosteroids produce a rapid response and are first-line for polymyalgia rheumatica."
    ]
  },
  {
    id: "s2ck-0156",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Chronic lymphocytic leukemia",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 68-year-old man is found to have a markedly elevated lymphocyte count on a routine complete blood count. He feels well, has no fever, night sweats, or weight loss, and has only small, mobile cervical nodes. His hemoglobin and platelet count are normal. The peripheral smear shows numerous mature-appearing lymphocytes and smudge cells, and flow cytometry reveals a clonal CD5-positive, CD19/CD23-positive B-cell population.\n\n| Test | Value | Reference |\n|---|---|---|\n| White-cell count | 45,000/uL | 4,500-11,000 |\n| Lymphocytes | 80% | 20-40 |\n| Hemoglobin | 14.0 g/dL | 13.5-17.5 |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Immediate combination chemoimmunotherapy",
      "Observation with periodic monitoring (watchful waiting)",
      "Allogeneic hematopoietic stem cell transplantation",
      "Splenectomy",
      "Empiric broad-spectrum antibiotics"
    ],
    answer: 1,
    exp: "An asymptomatic older adult with lymphocytosis, smudge cells, and a CD5-positive clonal B-cell population has chronic lymphocytic leukemia. Early-stage, asymptomatic disease with preserved blood counts is managed with observation, because treatment does not prolong survival when started early. Therapy is initiated only for progressive cytopenias, bulky or symptomatic disease, or constitutional symptoms.",
    why: [
      "Early treatment of asymptomatic chronic lymphocytic leukemia does not improve survival and adds toxicity.",
      "Correct: asymptomatic early-stage chronic lymphocytic leukemia is managed with watchful waiting.",
      "Transplantation is reserved for select high-risk, refractory disease, not initial asymptomatic disease.",
      "Splenectomy is not the initial management of chronic lymphocytic leukemia.",
      "There is no active infection; antibiotics are not indicated for the leukocytosis itself."
    ]
  },
  {
    id: "s2ck-0157",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Trigeminal neuralgia",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 60-year-old woman describes recurrent paroxysms of severe, electric shock-like pain over her right cheek and jaw, each lasting only seconds. The attacks are triggered by chewing, brushing her teeth, or a light touch to the face. Her neurologic examination, including facial sensation and strength, is entirely normal between attacks.",
    lead: "Which of the following is the most appropriate initial treatment?",
    options: [
      "Carbamazepine",
      "Scheduled high-dose opioids",
      "Immediate microvascular decompression surgery",
      "Sumatriptan",
      "A prednisone taper"
    ],
    answer: 0,
    exp: "Brief, lancinating, unilateral facial pains triggered by innocuous stimuli with a normal neurologic examination are characteristic of trigeminal neuralgia. First-line therapy is carbamazepine (or oxcarbazepine), which is highly effective at reducing the paroxysms. Surgery such as microvascular decompression is reserved for medication-refractory cases, and opioids and triptans are not effective.",
    why: [
      "Correct: carbamazepine is the first-line treatment for trigeminal neuralgia.",
      "Opioids are largely ineffective for the neuropathic paroxysms of trigeminal neuralgia.",
      "Surgery is reserved for cases refractory to medical therapy, not the initial step.",
      "Triptans treat migraine, not trigeminal neuralgia.",
      "Corticosteroids do not treat trigeminal neuralgia."
    ]
  },
  {
    id: "s2ck-0158",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Early localized Lyme disease",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 30-year-old man who hikes in wooded areas of the northeastern United States in summer develops a single expanding erythematous skin lesion on his thigh over several days. The lesion is 12 cm across with central clearing, giving a target-like appearance, and is warm but not painful. He has mild fatigue and myalgia but no neurologic or cardiac symptoms.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Intravenous ceftriaxone for 28 days",
      "No treatment; observe the rash",
      "Oral doxycycline",
      "Topical corticosteroid applied to the rash",
      "Withhold antibiotics until serologic testing returns positive"
    ],
    answer: 2,
    exp: "A single expanding target-shaped rash (erythema migrans) in an endemic area is diagnostic of early localized Lyme disease, and treatment is based on the clinical presentation. Oral doxycycline is first-line therapy. Serologic testing is often negative in early infection and should not delay treatment; intravenous antibiotics are reserved for cardiac or neurologic Lyme disease.",
    why: [
      "Intravenous therapy is reserved for cardiac or neurologic Lyme disease, not early localized infection.",
      "Untreated erythema migrans can progress to disseminated disease, so treatment is warranted.",
      "Correct: early localized Lyme disease with erythema migrans is treated empirically with oral doxycycline.",
      "A topical steroid does not treat the underlying spirochetal infection.",
      "Serology is often falsely negative early; treatment should not wait on it when erythema migrans is present."
    ]
  },
  {
    id: "s2ck-0159",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Chronic kidney disease management",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 58-year-old man with long-standing type 2 diabetes and hypertension has fatigue and gradually worsening kidney function over the past year. He is not volume-overloaded, his blood pressure is 150/92 mm Hg, and ultrasound shows small, echogenic kidneys. He is asymptomatic aside from fatigue.\n\n| Test | Value | Reference |\n|---|---|---|\n| Creatinine | 2.1 mg/dL | 0.6-1.2 |\n| eGFR | 34 mL/min/1.73m2 | > 60 |\n| Urine albumin/creatinine | 620 mg/g | < 30 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate initiation of hemodialysis",
      "Start high-dose NSAIDs for symptom control",
      "Severely restrict all fluids and obtain a contrast-enhanced CT",
      "Start an ACE inhibitor or ARB, optimize blood pressure and glycemic control, and manage complications",
      "Arrange urgent kidney transplantation without further workup"
    ],
    answer: 3,
    exp: "Progressive kidney impairment with albuminuria and small echogenic kidneys in a diabetic hypertensive patient is chronic kidney disease, most likely diabetic nephropathy. Management slows progression: an ACE inhibitor or ARB to reduce albuminuria, tight blood-pressure and glucose control (with an SGLT2 inhibitor for added renal protection), and treatment of complications such as anemia and mineral-bone disease. Dialysis and transplantation are for end-stage disease, and NSAIDs and contrast would worsen kidney function.",
    why: [
      "Dialysis is indicated for end-stage disease or refractory complications, not at this stage.",
      "NSAIDs are nephrotoxic and would accelerate the decline in kidney function.",
      "Aggressive fluid restriction and iodinated contrast risk further kidney injury and are not therapeutic.",
      "Correct: renin-angiotensin blockade with blood-pressure and glucose control slows progression of chronic kidney disease.",
      "Transplantation is considered for end-stage renal disease after appropriate evaluation, not urgently here."
    ]
  },
  {
    id: "s2ck-0160",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Pancreatic head adenocarcinoma",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 67-year-old man has 6 weeks of progressive, painless yellowing of the skin and eyes with generalized itching, dark urine, and pale stools. He has lost 8 kg. On examination he has scleral icterus and a nontender, palpably distended gallbladder. He drinks minimal alcohol.\n\n**[IMAGE: contrast CT of the abdomen showing a hypodense mass in the head of the pancreas with dilated intrahepatic and extrahepatic bile ducts and a dilated pancreatic duct]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Choledocholithiasis",
      "Acute viral hepatitis",
      "Primary sclerosing cholangitis",
      "Gallbladder polyp",
      "Pancreatic head adenocarcinoma"
    ],
    answer: 4,
    exp: "Painless obstructive jaundice with weight loss and a palpable nontender gallbladder (Courvoisier sign) plus a pancreatic-head mass with a dilated bile duct and pancreatic duct (the double-duct sign) is classic for pancreatic head adenocarcinoma. Painless jaundice in an older adult must be regarded as malignancy until proven otherwise. Stones typically cause painful, fluctuating jaundice rather than this progressive painless course.",
    why: [
      "Choledocholithiasis usually causes painful, intermittent jaundice, not painless progressive jaundice with weight loss.",
      "Viral hepatitis causes hepatocellular injury and tender hepatomegaly, not a pancreatic mass with ductal dilation.",
      "Primary sclerosing cholangitis produces multifocal strictures, not a discrete pancreatic-head mass.",
      "A gallbladder polyp does not obstruct the bile duct or produce a pancreatic mass.",
      "Correct: painless obstructive jaundice with a pancreatic-head mass and the double-duct sign is pancreatic adenocarcinoma."
    ]
  },
  {
    id: "s2ck-0161",
    system: "Surgery",
    discipline: "Neurosurgery",
    topic: "Cauda equina syndrome",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 45-year-old man with acute severe low back pain now has weakness in both legs, numbness over the buttocks and inner thighs, and difficulty urinating with a sensation of incomplete emptying. Examination shows saddle anesthesia, reduced anal sphincter tone, and a palpable distended bladder from urinary retention with overflow.\n\n**[IMAGE: lumbar MRI showing a large central disc herniation compressing the thecal sac and cauda equina nerve roots]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Outpatient physical therapy and NSAIDs",
      "Emergent surgical decompression",
      "Schedule an epidural steroid injection in two weeks",
      "Bed rest and reassurance",
      "Lumbar puncture"
    ],
    answer: 1,
    exp: "Bilateral leg weakness, saddle anesthesia, urinary retention, and decreased anal tone with a large central disc compressing the cauda equina define cauda equina syndrome, a surgical emergency. Emergent surgical decompression is required to prevent permanent bowel, bladder, and lower-limb dysfunction. Delay markedly worsens the prognosis, so conservative measures and injections are inappropriate.",
    why: [
      "Conservative therapy risks permanent neurologic damage in an evolving cauda equina syndrome.",
      "Correct: cauda equina syndrome requires emergent surgical decompression to preserve neurologic function.",
      "An elective steroid injection would dangerously delay decompression.",
      "Reassurance ignores a time-critical surgical emergency.",
      "Lumbar puncture is neither diagnostic nor therapeutic and could worsen the situation."
    ]
  },
  {
    id: "s2ck-0162",
    system: "Surgery",
    discipline: "Orthopedic Surgery",
    topic: "Displaced femoral neck fracture",
    difficulty: "moderate",
    anchor: "image",
    vignette: "An 82-year-old woman with osteoporosis falls from standing onto her right side and now cannot bear weight, with severe right groin pain. On examination the right leg is shortened and externally rotated, and any attempted movement of the hip is painful. Her distal pulses and sensation are intact.\n\n**[IMAGE: pelvic radiograph showing a displaced right femoral neck fracture]**",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Surgical arthroplasty (hip replacement) for the displaced femoral neck fracture",
      "Prolonged bed rest with skeletal traction alone",
      "Application of a below-knee cast",
      "Reassurance and outpatient physical therapy",
      "Long-term anticoagulation alone"
    ],
    answer: 0,
    exp: "A shortened, externally rotated leg after a fall with an inability to bear weight and a radiographic displaced femoral neck fracture is treated surgically. In an older adult a displaced femoral neck fracture is usually managed with arthroplasty (hemiarthroplasty or total hip replacement) because the disrupted blood supply predisposes to nonunion and avascular necrosis. Early surgery and mobilization reduce the high morbidity and mortality of prolonged immobility.",
    why: [
      "Correct: a displaced femoral neck fracture in an older adult is treated with arthroplasty and early mobilization.",
      "Prolonged traction and bed rest cause pneumonia, thromboembolism, and pressure injury and are not standard.",
      "A cast cannot immobilize or heal a femoral neck fracture.",
      "The fracture will not heal with physical therapy alone and requires operative fixation.",
      "Anticoagulation is prophylaxis, not treatment, and does not address the fracture."
    ]
  },
  {
    id: "s2ck-0163",
    system: "Surgery",
    discipline: "Orthopedic Surgery",
    topic: "Achilles tendon rupture",
    difficulty: "easy",
    anchor: null,
    vignette: "A 40-year-old recreational tennis player feels a sudden snap and a sensation of being kicked in the back of the ankle while pushing off during a match. He now has difficulty pushing off and walking on his toes. On examination there is a palpable gap in the tendon above the heel, and squeezing the calf does not produce plantar flexion of the foot.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Lateral ankle ligament sprain",
      "Mild gastrocnemius muscle strain",
      "Achilles tendon rupture",
      "Deep vein thrombosis",
      "Calcaneal stress fracture"
    ],
    answer: 2,
    exp: "A sudden snap during push-off with weak plantar flexion, a palpable tendon gap, and absent plantar flexion when the calf is squeezed (a positive Thompson test) indicates an Achilles tendon rupture. The Thompson test is the key bedside maneuver. Treatment is either functional bracing or surgical repair depending on patient factors.",
    why: [
      "An ankle sprain causes lateral ligament pain and instability, not an absent Thompson test.",
      "A minor calf strain does not produce a palpable tendon gap or a positive Thompson test.",
      "Correct: a palpable gap with a positive Thompson test after a push-off snap indicates Achilles tendon rupture.",
      "Deep vein thrombosis causes calf swelling and tenderness, not an acute snap with a tendon gap.",
      "A calcaneal stress fracture causes gradual heel pain, not an acute rupture with loss of plantar flexion."
    ]
  },
  {
    id: "s2ck-0164",
    system: "Pediatrics",
    discipline: "Pediatric Pulmonology",
    topic: "Cystic fibrosis",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 9-month-old infant has had recurrent respiratory infections and a chronic wet cough, along with bulky, greasy, foul-smelling stools and poor weight gain despite a good appetite. The parents note that the baby tastes salty when kissed. Growth has fallen across percentiles.\n\n| Test | Value | Reference |\n|---|---|---|\n| Sweat chloride | 85 mmol/L | < 30 |\n| Fecal elastase | low | normal |\n| Newborn screen | elevated immunoreactive trypsinogen | normal |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Primary ciliary dyskinesia",
      "Common variable immunodeficiency",
      "Celiac disease",
      "Cystic fibrosis",
      "Alpha-1 antitrypsin deficiency"
    ],
    answer: 3,
    exp: "Recurrent pulmonary infections, pancreatic insufficiency (steatorrhea, low fecal elastase, failure to thrive), and salty-tasting skin with a sweat chloride above 60 mmol/L confirm cystic fibrosis. The elevated sweat chloride reflects defective CFTR chloride transport. Management is multidisciplinary with airway clearance, pancreatic enzyme replacement, and CFTR modulators.",
    why: [
      "Primary ciliary dyskinesia causes respiratory disease and situs abnormalities but not pancreatic insufficiency with a high sweat chloride.",
      "Common variable immunodeficiency causes recurrent infections but not steatorrhea and a high sweat chloride.",
      "Celiac disease causes malabsorption but not recurrent lung infection or an elevated sweat chloride.",
      "Correct: recurrent pulmonary infection, pancreatic insufficiency, and a sweat chloride above 60 confirm cystic fibrosis.",
      "Alpha-1 antitrypsin deficiency causes liver and adult-onset lung disease, not this infantile picture."
    ]
  },
  {
    id: "s2ck-0165",
    system: "Pediatrics",
    discipline: "Pediatric Endocrinology",
    topic: "Congenital hypothyroidism",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 3-week-old infant is brought in for prolonged jaundice and poor feeding. The parents report the baby is very sleepy, is constipated, and hardly cries. On examination there is a large anterior fontanelle, an umbilical hernia, macroglossia, and dry, mottled skin. The mother had no prenatal care.\n\n| Test | Value | Reference |\n|---|---|---|\n| TSH | markedly elevated | age-specific |\n| Free T4 | low | age-specific |\n| Newborn screen | flagged abnormal | normal |",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Observation and repeat screening in six months",
      "Iodine supplementation alone",
      "Surgical thyroidectomy",
      "Propylthiouracil",
      "Prompt initiation of levothyroxine"
    ],
    answer: 4,
    exp: "Prolonged jaundice, lethargy, constipation, a large fontanelle, macroglossia, and an umbilical hernia with a high TSH and low free T4 indicate congenital hypothyroidism. Treatment is prompt levothyroxine, because early replacement is essential to prevent irreversible intellectual disability. Any delay in initiating therapy risks permanent neurodevelopmental impairment.",
    why: [
      "Delaying treatment risks irreversible neurodevelopmental damage; therapy cannot wait.",
      "Iodine alone does not correct the hypothyroidism in congenital hypothyroidism.",
      "There is no need for thyroidectomy; the problem is thyroid hormone deficiency.",
      "Propylthiouracil treats hyperthyroidism and would worsen this infant's hypothyroidism.",
      "Correct: congenital hypothyroidism requires prompt levothyroxine to prevent intellectual disability."
    ]
  },
  {
    id: "s2ck-0166",
    system: "Pediatrics",
    discipline: "Pediatric Oncology",
    topic: "Wilms tumor",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 3-year-old previously healthy girl is brought in after her mother felt a smooth mass in the left side of the abdomen while bathing her. The child is well-appearing and playful. The mass is firm, smooth, and confined to one flank, and does not cross the midline. Her blood pressure is mildly elevated for age.\n\n**[IMAGE: abdominal CT showing a large, well-circumscribed solid mass arising from the left kidney and displacing adjacent structures without crossing the midline]**",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Neuroblastoma",
      "Wilms tumor (nephroblastoma)",
      "Hydronephrosis",
      "Hepatoblastoma",
      "Autosomal recessive polycystic kidney disease"
    ],
    answer: 1,
    exp: "A smooth, unilateral flank mass that does not cross the midline in an otherwise well toddler, arising from the kidney with mild hypertension, is characteristic of Wilms tumor (nephroblastoma). Because the mass can seed or rupture, the abdomen should not be palpated excessively. Management is staged imaging and surgical resection with chemotherapy. Neuroblastoma, by contrast, is often irregular, crosses the midline, and causes systemic symptoms.",
    why: [
      "Neuroblastoma usually crosses the midline, is often calcified, and produces systemic symptoms, unlike this smooth intrarenal mass.",
      "Correct: a smooth unilateral flank mass not crossing the midline in a well toddler is a Wilms tumor.",
      "Hydronephrosis is a fluid-filled dilated collecting system, not a solid mass on imaging.",
      "Hepatoblastoma arises from the liver in the right upper quadrant, not the kidney.",
      "Polycystic kidney disease produces bilateral cystic kidneys, not a solitary solid mass."
    ]
  },
  {
    id: "s2ck-0167",
    system: "Pediatrics",
    discipline: "Pediatric Orthopedics",
    topic: "Radial head subluxation (nursemaid elbow)",
    difficulty: "easy",
    anchor: null,
    vignette: "A 2-year-old girl is brought in after her arm was suddenly pulled while an adult prevented her from falling. She now holds the arm slightly flexed at the elbow and pronated at her side and refuses to use it. There is no swelling, deformity, or bruising, and she has no bony tenderness on gentle palpation.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Manual reduction with supination and flexion of the elbow",
      "Long-arm cast for six weeks",
      "Immediate surgical exploration",
      "MRI of the elbow before any manipulation",
      "Skeletal survey for abuse and hospital admission"
    ],
    answer: 0,
    exp: "A toddler who holds the arm pronated and refuses to use it after an axial pull, without swelling or deformity, has a radial head subluxation (nursemaid elbow). It is treated with a simple bedside reduction maneuver, supination of the forearm with flexion of the elbow (or hyperpronation), after which the child typically resumes normal use within minutes. Imaging is not required when the mechanism and examination are classic.",
    why: [
      "Correct: nursemaid elbow is reduced at the bedside with supination and flexion of the elbow.",
      "Casting is unnecessary for a subluxation that reduces easily.",
      "Surgery is not needed for this simple reducible subluxation.",
      "The classic history and examination make imaging unnecessary before reduction.",
      "The mechanism is a typical accidental pull, not an indication for an abuse workup and admission."
    ]
  },
  {
    id: "s2ck-0168",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Preterm labor management",
    difficulty: "hard",
    anchor: null,
    vignette: "A 26-year-old woman at 30 weeks gestation presents with 3 hours of regular, painful uterine contractions every 4 minutes. Cervical examination shows she is 3 cm dilated and 80% effaced with intact membranes. There are no signs of infection or bleeding, and the fetal heart rate tracing is reassuring.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate cesarean delivery",
      "Oxytocin augmentation to expedite delivery",
      "Antenatal corticosteroids, tocolysis to allow steroid benefit, and magnesium sulfate for fetal neuroprotection",
      "Discharge home with no intervention",
      "Emergency cervical cerclage"
    ],
    answer: 2,
    exp: "Regular contractions with documented cervical change before 34 weeks is preterm labor. Management is to give antenatal corticosteroids to accelerate fetal lung maturity, administer a tocolytic to delay delivery long enough for the steroids to work, and provide magnesium sulfate for fetal neuroprotection at this gestational age. Hastening delivery or discharging the patient would be inappropriate for a stable preterm fetus.",
    why: [
      "There is no indication for cesarean delivery in stable preterm labor with a reassuring fetus.",
      "Oxytocin would accelerate a preterm delivery that should be delayed.",
      "Correct: give corticosteroids, tocolysis to gain time, and magnesium sulfate for neuroprotection in preterm labor.",
      "Discharging a woman in active preterm labor with cervical change is unsafe.",
      "Cerclage is a prophylactic measure for cervical insufficiency, not treatment of active preterm labor."
    ]
  },
  {
    id: "s2ck-0169",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Endometriosis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 30-year-old nulliparous woman has years of progressively worsening pelvic pain that begins just before her menses, along with deep pain during intercourse and painful bowel movements during her periods. She has been unable to conceive for 18 months. On pelvic examination there is tenderness and nodularity along the uterosacral ligaments and a fixed, retroverted uterus.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Pelvic inflammatory disease",
      "Adenomyosis",
      "Ovarian torsion",
      "Endometriosis",
      "Irritable bowel syndrome"
    ],
    answer: 3,
    exp: "Cyclic dysmenorrhea, deep dyspareunia, dyschezia, infertility, and uterosacral nodularity with a fixed retroverted uterus are classic for endometriosis, ectopic endometrial tissue outside the uterus. Laparoscopy with visualization of implants is the definitive diagnostic test, but the clinical picture strongly suggests it. Treatment ranges from NSAIDs and hormonal suppression to surgical excision.",
    why: [
      "Pelvic inflammatory disease causes acute infection with fever and discharge, not chronic cyclic pain with nodularity.",
      "Adenomyosis typically causes a diffusely enlarged, boggy uterus with heavy menses rather than uterosacral nodularity.",
      "Ovarian torsion causes acute severe unilateral pain, not years of cyclic symptoms.",
      "Correct: cyclic pain, dyspareunia, dyschezia, infertility, and uterosacral nodularity indicate endometriosis.",
      "Irritable bowel syndrome does not produce uterosacral nodularity or a fixed retroverted uterus."
    ]
  },
  {
    id: "s2ck-0170",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Hydatidiform mole",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 24-year-old woman at an estimated 12 weeks gestation has intermittent vaginal bleeding and severe nausea and vomiting. Her uterus is larger than expected for dates, no fetal heart tones are detected, and her blood pressure is mildly elevated.\n\n| Test | Value | Reference |\n|---|---|---|\n| Beta-hCG | 210,000 mIU/mL | gestation-specific |\n| Ultrasound | heterogeneous echogenic intrauterine mass with cystic spaces ('snowstorm'), no fetus | live intrauterine gestation |\n| Fetal heart tones | absent | present |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Expectant management",
      "Methotrexate",
      "Immediate hysterectomy in all patients",
      "Prostaglandin induction of labor",
      "Suction dilation and curettage with subsequent serial beta-hCG monitoring"
    ],
    answer: 4,
    exp: "A uterus large for dates with markedly elevated beta-hCG, hyperemesis, early-onset hypertension, absent fetal heart tones, and a snowstorm ultrasound pattern indicates a hydatidiform (molar) pregnancy. Management is uterine evacuation by suction dilation and curettage, followed by serial beta-hCG monitoring to detect persistent gestational trophoblastic disease. Induction with prostaglandins is avoided because of embolization and bleeding risk.",
    why: [
      "A molar pregnancy must be evacuated, not managed expectantly.",
      "Methotrexate is for gestational trophoblastic neoplasia, not initial evacuation of a mole.",
      "Hysterectomy is reserved for select patients; evacuation with curettage is first-line for most.",
      "Prostaglandin induction risks trophoblastic embolization and hemorrhage and is avoided.",
      "Correct: evacuate a hydatidiform mole by suction curettage and follow serial beta-hCG levels."
    ]
  },
  {
    id: "s2ck-0171",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Adnexal mass suspicious for ovarian cancer",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 62-year-old postmenopausal woman reports several months of abdominal bloating, early satiety, and vague pelvic discomfort. On examination she has a palpable pelvic mass and abdominal distention with a fluid wave. Her CA-125 level is elevated.\n\n**[IMAGE: pelvic ultrasound showing a complex adnexal mass with solid components, thick septations, and internal papillary projections, with a moderate volume of ascites]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Repeat the ultrasound in one year",
      "Referral to a gynecologic oncologist for surgical evaluation and staging",
      "Start oral contraceptives and provide reassurance",
      "Give CA-125-guided chemotherapy without any surgery",
      "Percutaneous aspiration of the mass"
    ],
    answer: 1,
    exp: "A postmenopausal woman with a complex solid-and-cystic adnexal mass, ascites, and an elevated CA-125 has features highly concerning for ovarian cancer. The appropriate step is referral to a gynecologic oncologist for surgical exploration and staging, which provides both diagnosis and treatment; outcomes are better when staging surgery is performed by a gynecologic oncologist. Aspiration risks spilling malignant cells and is avoided.",
    why: [
      "Delaying a year is unsafe given the high suspicion for ovarian malignancy.",
      "Correct: a suspicious adnexal mass with ascites and high CA-125 warrants referral to gynecologic oncology for staging surgery.",
      "Oral contraceptives and reassurance are inappropriate when malignancy is strongly suspected.",
      "A tissue diagnosis and surgical staging are needed before chemotherapy; CA-125 alone cannot direct treatment.",
      "Percutaneous aspiration risks rupturing the mass and disseminating malignant cells."
    ]
  },
  {
    id: "s2ck-0172",
    system: "Psychiatry",
    discipline: "Adult Psychiatry",
    topic: "Postpartum depression",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 29-year-old woman is seen 4 weeks after delivering her first child. For the past 3 weeks she has felt persistently sad and tearful, has lost interest in activities she used to enjoy, sleeps poorly even when the baby sleeps, feels worthless as a mother, and struggles to bond with the infant. She has occasional thoughts that the baby would be better off with someone else but no thoughts of harming the baby and no hallucinations or delusions.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Initiate an SSRI and refer for psychotherapy",
      "Reassure her that this is normal 'baby blues' requiring no treatment",
      "Arrange immediate involuntary psychiatric hospitalization",
      "Start an antipsychotic as monotherapy",
      "Recommend electroconvulsive therapy as first-line treatment"
    ],
    answer: 0,
    exp: "Depressive symptoms persisting beyond two weeks postpartum with functional impairment and impaired bonding, without psychosis, indicate postpartum depression. First-line management is an antidepressant (an SSRI) combined with psychotherapy. The self-limited 'baby blues' resolve within two weeks, and the absence of delusions, hallucinations, or thoughts of harming the infant distinguishes this from postpartum psychosis, which is a psychiatric emergency.",
    why: [
      "Correct: postpartum depression is treated with an SSRI plus psychotherapy.",
      "Baby blues resolve within two weeks; symptoms lasting three weeks with impairment indicate depression needing treatment.",
      "There is no psychosis or imminent danger, so involuntary hospitalization is not warranted.",
      "Antipsychotic monotherapy is not first-line for postpartum depression without psychosis.",
      "Electroconvulsive therapy is reserved for severe, refractory, or psychotic or catatonic cases, not first-line."
    ]
  },
  {
    id: "s2ck-0173",
    system: "Psychiatry",
    discipline: "Child Psychiatry",
    topic: "Attention-deficit/hyperactivity disorder",
    difficulty: "moderate",
    anchor: null,
    vignette: "An 8-year-old boy is brought in because of longstanding difficulty paying attention, being easily distracted, failing to finish schoolwork, fidgeting constantly, blurting out answers, and being unable to wait his turn. These behaviors have been present for more than a year and occur both at school and at home, and his grades are suffering. His physical and neurologic examinations and hearing and vision screening are normal.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Reassurance that these are normal childhood behaviors",
      "Start an SSRI",
      "Behavioral therapy combined with a stimulant such as methylphenidate",
      "Start an antipsychotic",
      "Eliminate all dietary sugar as the sole intervention"
    ],
    answer: 2,
    exp: "Inattention, hyperactivity, and impulsivity present for more than six months in more than one setting with functional impairment, and not better explained by another condition, meet criteria for attention-deficit/hyperactivity disorder. In school-age children, evidence-based treatment combines behavioral therapy with a stimulant such as methylphenidate or an amphetamine, which is first-line pharmacotherapy. Dietary changes and SSRIs are not effective primary treatments.",
    why: [
      "The symptoms cross settings and impair function, meeting diagnostic criteria rather than normal behavior.",
      "SSRIs are not first-line for ADHD and do not target the core symptoms.",
      "Correct: behavioral therapy plus a stimulant such as methylphenidate is first-line for school-age ADHD.",
      "Antipsychotics are not indicated for uncomplicated ADHD.",
      "Sugar restriction has no proven benefit as a treatment for ADHD."
    ]
  },
  {
    id: "s2ck-0174",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Adult pneumococcal vaccination",
    difficulty: "easy",
    anchor: null,
    vignette: "A 67-year-old man comes in for a routine health maintenance visit. He is generally healthy, is immunocompetent, does not smoke, and has never received any pneumococcal vaccine. He has no acute illness and asks what vaccines he should receive now that he is over 65.",
    lead: "Which of the following is the most appropriate recommendation?",
    options: [
      "No pneumococcal vaccine is needed",
      "Vaccinate only if he develops pneumonia",
      "Annual pneumococcal vaccination",
      "Administer a pneumococcal conjugate vaccine (PCV20, or PCV15 followed by PPSV23)",
      "Give the vaccine only after age 75"
    ],
    answer: 3,
    exp: "Adults 65 years and older who have not previously been vaccinated should receive pneumococcal vaccination, either a single dose of PCV20 or PCV15 followed by PPSV23. This reduces the risk of invasive pneumococcal disease and pneumonia. Pneumococcal vaccine is not given annually, unlike influenza vaccine, and should be offered proactively rather than after an infection.",
    why: [
      "Pneumococcal vaccination is recommended for all adults 65 and older, so 'none needed' is incorrect.",
      "Vaccination is preventive and should not wait until after an episode of pneumonia.",
      "The pneumococcal vaccine is not an annual vaccine.",
      "Correct: give a pneumococcal conjugate vaccine (PCV20, or PCV15 then PPSV23) to this unvaccinated adult over 65.",
      "Vaccination is recommended now at 67, not delayed until 75."
    ]
  },
  {
    id: "s2ck-0175",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Disclosure of medical error",
    difficulty: "moderate",
    anchor: null,
    vignette: "A hospitalized patient receives ten times the intended dose of insulin because of an infusion-pump programming mistake. The patient develops symptomatic hypoglycemia that is promptly recognized and corrected, and the patient is now stable with no lasting harm. The patient and family ask the physician what caused the earlier episode of sweating and confusion.",
    lead: "Which of the following is the most appropriate course of action?",
    options: [
      "Do not mention the error because no permanent harm occurred",
      "Disclose the error only if the family specifically asks whether a mistake was made",
      "Attribute the episode to the infusion-pump manufacturer when speaking with the family",
      "Wait for a lawsuit before disclosing what happened",
      "Promptly and honestly disclose the error to the patient, express empathy, and report it through institutional channels"
    ],
    answer: 4,
    exp: "The ethical duty of truth-telling requires honest, timely disclosure of medical errors to patients, even when no permanent harm results. The physician should explain what happened, express empathy and, where appropriate, apology, and report the event through institutional safety channels so system causes can be addressed. Concealing or minimizing the error violates patient autonomy and trust.",
    why: [
      "The absence of permanent harm does not excuse withholding the truth about what happened.",
      "Disclosure is an affirmative duty, not something contingent on the family asking the right question.",
      "Deflecting blame to the manufacturer is dishonest and evades the duty to disclose.",
      "Disclosure should be prompt and is an ethical obligation independent of any litigation.",
      "Correct: honestly disclose the error, express empathy, and report it through institutional channels."
    ]
  }
];
