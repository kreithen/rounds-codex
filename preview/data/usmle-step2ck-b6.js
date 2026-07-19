/*
 * Rounds Codex - USMLE Step 2 CK question bank, Batch 6 (25 items)
 * Blueprint-weighted, Medicine-heavy clinical mix. All vignettes original;
 * source used for facts only. Step 2 CK items are clinical: each ends in a
 * decision about diagnosis, next best step, pharmacotherapy, or prevention.
 * Schema per item:
 *   id, system, discipline, topic, difficulty (easy|moderate|hard),
 *   anchor (null|lab|image|ecg|table), vignette, lead, options[5],
 *   answer (0-4 index of correct option), exp (teaching for correct answer),
 *   why[5] (one 1-2 sentence rationale per option, aligned A-E)
 */
const USMLE_STEP2CK_B6 = [
  {
    id: "s2ck-0126",
    system: "Internal Medicine",
    discipline: "Cardiology",
    topic: "Complete (third-degree) atrioventricular block",
    difficulty: "hard",
    anchor: "ecg",
    vignette: "A 78-year-old man reports recurrent lightheadedness and one syncopal episode. He is bradycardic at 38/min and feels faint when he stands. He takes no nodal-blocking drugs, and his potassium and troponin are normal.\n\n**[ECG: sinus P waves at 88/min marching through independently of wide QRS complexes at 38/min, with complete atrioventricular dissociation]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Admit for cardiac monitoring and place a transvenous pacemaker as a bridge to a permanent pacemaker",
      "Start oral metoprolol to stabilize the rhythm",
      "Give intravenous adenosine",
      "Reassure the patient and arrange outpatient follow-up",
      "Begin a calcium channel blocker for rate control"
    ],
    answer: 0,
    exp: "AV dissociation with independent atrial and ventricular rates and a wide escape at 38/min is complete (third-degree) heart block. Symptomatic high-grade block that is not due to a reversible cause requires admission with monitoring and temporary pacing (transcutaneous or transvenous) followed by a permanent pacemaker, the only definitive therapy. AV nodal blocking drugs and adenosine would further suppress the escape rhythm and are dangerous.",
    why: [
      "Correct: symptomatic complete heart block requires monitoring and temporary pacing as a bridge to a permanent pacemaker.",
      "Beta-blockers further suppress the AV node and escape rhythm and would worsen the bradycardia.",
      "Adenosine transiently blocks the AV node and can cause asystole in complete heart block.",
      "Symptomatic third-degree block carries a high risk of asystole and cannot be managed as an outpatient.",
      "A calcium channel blocker slows conduction further and is contraindicated in high-grade AV block."
    ]
  },
  {
    id: "s2ck-0127",
    system: "Internal Medicine",
    discipline: "Endocrinology",
    topic: "Adrenal incidentaloma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 54-year-old woman had abdominal CT for evaluation of nonspecific pain, which incidentally revealed a right adrenal mass. She has no history of hypertension, weight change, easy bruising, or malignancy, and her examination is unremarkable.\n\n**[IMAGE: contrast CT showing a well-circumscribed homogeneous 2.5-cm right adrenal nodule with low unenhanced attenuation (< 10 Hounsfield units)]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Proceed directly to adrenalectomy",
      "Biochemical evaluation for hormone hypersecretion, including a 1-mg overnight dexamethasone suppression test and plasma metanephrines",
      "Percutaneous biopsy of the adrenal mass",
      "Begin lifelong glucocorticoid replacement",
      "No further evaluation is needed"
    ],
    answer: 1,
    exp: "An adrenal mass found incidentally on imaging requires two questions: is it hormonally active, and is it malignant. Every incidentaloma should undergo biochemical screening for autonomous cortisol (overnight dexamethasone suppression), catecholamine excess (plasma or urine metanephrines), and, if hypertensive or hypokalemic, aldosterone excess. A homogeneous mass under 4 cm with low attenuation has benign imaging features, so resection is not automatic.",
    why: [
      "Surgery is not indicated for a small benign-appearing mass until functional status is known.",
      "Correct: screen every adrenal incidentaloma for cortisol, catecholamine, and (if indicated) aldosterone hypersecretion.",
      "Biopsy is avoided until pheochromocytoma is excluded, as it can precipitate a catecholamine crisis.",
      "There is no adrenal insufficiency; empiric steroid replacement is inappropriate.",
      "An incidentaloma always warrants biochemical evaluation before it can be dismissed."
    ]
  },
  {
    id: "s2ck-0128",
    system: "Internal Medicine",
    discipline: "Gastroenterology",
    topic: "Ischemic colitis",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 72-year-old woman with atherosclerotic disease develops sudden left lower quadrant crampy pain followed by bloody diarrhea. She is mildly tender in the left abdomen without rebound or guarding, is hemodynamically stable, and has a soft abdomen. Stool studies for infection are pending.\n\n**[IMAGE: CT of the abdomen showing segmental wall thickening of the descending and sigmoid colon with pericolonic fat stranding]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate exploratory laparotomy",
      "Urgent mesenteric angiography and thrombolysis",
      "Bowel rest, intravenous fluids, and supportive care with monitoring",
      "Oral loperamide to control diarrhea",
      "Emergent colonoscopy with polypectomy"
    ],
    answer: 2,
    exp: "Sudden crampy pain with bloody diarrhea and segmental colonic wall thickening in a watershed distribution in an older vasculopath is ischemic colitis, usually a nonocclusive, self-limited insult. Most cases resolve with bowel rest, intravenous fluids, and supportive care, with antibiotics for moderate disease; the colon is monitored for signs of gangrene or perforation. Surgery is reserved for peritonitis, perforation, or clinical deterioration.",
    why: [
      "Laparotomy is reserved for peritonitis, perforation, or gangrene, none of which is present.",
      "Ischemic colitis is usually nonocclusive; angiographic thrombolysis is not standard therapy.",
      "Correct: most ischemic colitis is managed supportively with bowel rest, fluids, and monitoring.",
      "Antimotility agents can worsen ischemic injury and are avoided.",
      "Urgent colonoscopy with polypectomy risks perforation of ischemic bowel and is not indicated."
    ]
  },
  {
    id: "s2ck-0129",
    system: "Internal Medicine",
    discipline: "Infectious Disease",
    topic: "Vertebral osteomyelitis",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 60-year-old man who injects drugs has 3 weeks of progressively worsening focal low back pain that is now constant and worse at night, with subjective fevers. He has point tenderness over the lower thoracic spine. Neurologic examination is intact. Blood cultures are drawn.\n\n**[IMAGE: MRI of the spine showing T2 hyperintensity of two adjacent vertebral bodies with destruction of the intervening disc space and an early paraspinal collection]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Empiric antibiotics immediately without any cultures",
      "Prescribe an NSAID and physical therapy for mechanical back pain",
      "A short course of oral corticosteroids",
      "Obtain blood cultures and an image-guided biopsy to identify the organism, then start targeted antibiotics",
      "Immediate surgical decompression for all patients"
    ],
    answer: 3,
    exp: "Focal spine pain worse at night with fever and MRI showing adjacent endplate destruction and disc-space involvement indicates vertebral osteomyelitis with discitis, common in people who inject drugs. Because prolonged pathogen-directed therapy is required, the organism should be identified with blood cultures and, if those are negative, image-guided biopsy before starting antibiotics in a stable patient without sepsis or neurologic deficit. Urgent surgery is reserved for cord compression, instability, or epidural abscess with deficits.",
    why: [
      "Starting antibiotics blindly before cultures can obscure the organism and prolongs untargeted therapy.",
      "Night pain with fever and endplate destruction is infection, not mechanical back pain.",
      "Corticosteroids do not treat a bony infection and may worsen it.",
      "Correct: obtain blood cultures and image-guided biopsy to target therapy, then treat with pathogen-directed antibiotics.",
      "Surgery is reserved for neurologic compromise, instability, or drainable abscess, not routine cases."
    ]
  },
  {
    id: "s2ck-0130",
    system: "Internal Medicine",
    discipline: "Pulmonology",
    topic: "Obstructive sleep apnea",
    difficulty: "easy",
    anchor: null,
    vignette: "A 49-year-old obese man reports loud snoring, witnessed pauses in breathing during sleep reported by his partner, and daytime sleepiness causing him to doze at work. His neck circumference is large, and his blood pressure is mildly elevated. Screening questionnaires suggest high risk.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Start a hypnotic to improve sleep quality",
      "Reassure him that snoring is benign",
      "Prescribe supplemental daytime oxygen",
      "Begin an amphetamine for daytime sleepiness",
      "Refer for polysomnography to confirm the diagnosis"
    ],
    answer: 4,
    exp: "Loud snoring, witnessed apneas, and daytime hypersomnolence in an obese patient with a large neck are classic for obstructive sleep apnea. The diagnosis is confirmed with a sleep study (in-laboratory polysomnography or home sleep apnea testing), after which continuous positive airway pressure and weight loss are the mainstays of therapy. Sedatives worsen upper-airway collapse and are contraindicated.",
    why: [
      "Hypnotics relax the upper airway and worsen obstructive apneas.",
      "The symptoms indicate a treatable disorder with cardiovascular consequences, not benign snoring.",
      "Oxygen alone does not relieve the mechanical airway obstruction of sleep apnea.",
      "Stimulants do not treat the underlying airway obstruction and are not first-line.",
      "Correct: confirm suspected obstructive sleep apnea with polysomnography before initiating therapy such as CPAP."
    ]
  },
  {
    id: "s2ck-0131",
    system: "Internal Medicine",
    discipline: "Rheumatology",
    topic: "Calcium pyrophosphate deposition disease (pseudogout)",
    difficulty: "moderate",
    anchor: "table",
    vignette: "A 74-year-old woman presents with 2 days of an acutely swollen, painful, warm right knee. She is afebrile and has no prior similar episodes. Radiographs show linear calcification of the knee cartilage. Arthrocentesis is performed.\n\n| Synovial fluid | Value |\n|---|---|\n| White-cell count | 22,000/uL |\n| Crystals | rhomboid, positively birefringent |\n| Gram stain | no organisms |",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Calcium pyrophosphate deposition disease (pseudogout)",
      "Gout",
      "Septic arthritis",
      "Rheumatoid arthritis",
      "Osteoarthritis flare"
    ],
    answer: 0,
    exp: "Rhomboid, positively birefringent crystals with an inflammatory but sterile synovial fluid and cartilage calcification (chondrocalcinosis) on radiographs indicate calcium pyrophosphate deposition disease, or pseudogout. Acute attacks are treated like gout flares with NSAIDs, colchicine, or intra-articular corticosteroids. Gout produces needle-shaped, negatively birefringent crystals, and the negative Gram stain and modest cell count argue against joint sepsis.",
    why: [
      "Correct: rhomboid, positively birefringent crystals with chondrocalcinosis define calcium pyrophosphate (pseudogout).",
      "Gout crystals are needle-shaped and negatively birefringent, unlike these rhomboid positively birefringent crystals.",
      "The Gram stain is negative and the cell count is only modestly elevated, arguing against septic arthritis.",
      "Rheumatoid arthritis is a chronic symmetric polyarthritis, not an acute crystal-proven monoarthritis.",
      "Osteoarthritis produces noninflammatory fluid without intracellular crystals."
    ]
  },
  {
    id: "s2ck-0132",
    system: "Internal Medicine",
    discipline: "Hematology",
    topic: "Immune thrombocytopenia",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 29-year-old woman presents with a petechial rash over the lower legs and mucosal bleeding of the gums, but no fever or weight loss. Her spleen is not enlarged. She takes no new medications and has no recent viral illness. The peripheral smear shows reduced but large platelets with normal red and white cells.\n\n| Test | Value | Reference |\n|---|---|---|\n| Platelet count | 12,000/uL | 150,000-400,000 |\n| Hemoglobin | 13.4 g/dL | 12-16 |\n| White-cell count | 7,200/uL | 4,500-11,000 |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Urgent platelet transfusion regardless of bleeding severity",
      "Start corticosteroids (with IVIG if bleeding is significant) for immune thrombocytopenia",
      "Begin broad-spectrum antibiotics",
      "Perform emergent splenectomy",
      "Start therapeutic anticoagulation"
    ],
    answer: 1,
    exp: "Isolated severe thrombocytopenia with mucocutaneous bleeding, a normal smear apart from large platelets, and no other cytopenias is immune thrombocytopenia, a diagnosis of exclusion from antibody-mediated platelet destruction. First-line therapy is corticosteroids, adding IVIG (or anti-D) for significant bleeding or very low counts. Platelet transfusion is reserved for life-threatening hemorrhage, and splenectomy is a later option for refractory disease.",
    why: [
      "Transfused platelets are rapidly destroyed and are reserved for life-threatening bleeding, not routine cases.",
      "Correct: corticosteroids, with IVIG for significant bleeding, are first-line therapy for immune thrombocytopenia.",
      "There is no infection; antibiotics do not treat immune platelet destruction.",
      "Splenectomy is a second-line option for refractory disease, not the initial step.",
      "Anticoagulation would be dangerous in a bleeding, severely thrombocytopenic patient."
    ]
  },
  {
    id: "s2ck-0133",
    system: "Internal Medicine",
    discipline: "Nephrology",
    topic: "Acute interstitial nephritis",
    difficulty: "hard",
    anchor: "lab",
    vignette: "A 63-year-old man develops a rising creatinine one week after starting a proton pump inhibitor and a course of a beta-lactam antibiotic. He has a low-grade fever and a faint maculopapular rash. He is not volume-depleted, and his blood pressure is normal.\n\n| Test | Value | Reference |\n|---|---|---|\n| Creatinine | 3.1 mg/dL (baseline 1.0) | 0.6-1.2 |\n| Urinalysis | white cells, white-cell casts, no bacteria | none |\n| Urine eosinophils | present | none |",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Aggressive intravenous saline for presumed prerenal azotemia",
      "Start empiric antibiotics for pyelonephritis",
      "Discontinue the offending drug and monitor renal function, considering corticosteroids if there is no improvement",
      "Begin urgent hemodialysis",
      "Place a ureteral stent for obstruction"
    ],
    answer: 2,
    exp: "Acute kidney injury with fever, rash, and sterile pyuria with white-cell casts and urine eosinophils after starting a proton pump inhibitor and a beta-lactam is classic acute interstitial nephritis, a hypersensitivity reaction. The essential step is to stop the culprit drug; renal function usually recovers, and corticosteroids are considered if it does not improve. Fluids alone, antibiotics, dialysis, and stenting do not address the drug-induced immune process.",
    why: [
      "This is drug-induced interstitial nephritis, not a prerenal state; fluids alone will not reverse it.",
      "Sterile pyuria without bacteria is not infection; antibiotics may in fact be the trigger.",
      "Correct: stop the offending drug and monitor, using corticosteroids if renal function does not recover.",
      "Dialysis is reserved for refractory complications, not the initial management of interstitial nephritis.",
      "There is no obstruction; a stent does not treat interstitial nephritis."
    ]
  },
  {
    id: "s2ck-0134",
    system: "Internal Medicine",
    discipline: "Neurology",
    topic: "Bell palsy",
    difficulty: "easy",
    anchor: null,
    vignette: "A 33-year-old woman awakens with acute drooping of the right side of her face. She cannot fully close the right eye or wrinkle the right forehead, and the right corner of her mouth droops. There is no limb weakness, no other cranial-nerve deficit, and the rest of the neurologic examination is normal.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Immediate CT angiography and thrombolysis for stroke",
      "Long-term antiepileptic therapy",
      "Urgent carotid endarterectomy",
      "No treatment, as no intervention affects outcome",
      "Oral corticosteroids and eye protection with lubrication"
    ],
    answer: 4,
    exp: "Acute unilateral facial weakness that involves the forehead indicates a peripheral (lower motor neuron) facial nerve palsy, or Bell palsy, distinguishing it from a central lesion that spares the forehead. Early oral corticosteroids improve the likelihood of complete recovery, and the exposed eye must be protected with lubrication and taping to prevent corneal injury. Antivirals may be added for severe cases.",
    why: [
      "Forehead involvement indicates a peripheral facial palsy, not a cortical stroke needing thrombolysis.",
      "This is not a seizure disorder, so antiepileptics have no role.",
      "Carotid surgery is irrelevant to an isolated peripheral facial nerve palsy.",
      "Early corticosteroids improve recovery, so treatment is beneficial rather than futile.",
      "Correct: early corticosteroids and eye protection are the management of Bell palsy."
    ]
  },
  {
    id: "s2ck-0135",
    system: "Surgery",
    discipline: "General Surgery",
    topic: "Boerhaave syndrome (esophageal perforation)",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 55-year-old man develops sudden severe retrosternal and epigastric pain immediately after an episode of forceful vomiting following a large meal with heavy alcohol. He is diaphoretic, tachycardic, and febrile, with subcutaneous crepitus palpable over the neck and chest.\n\n**[IMAGE: chest radiograph showing pneumomediastinum and a left pleural effusion]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Discharge with antacids for presumed reflux",
      "Upper endoscopy with immediate biopsy of the esophagus",
      "Oral barium swallow followed by outpatient follow-up",
      "Reassurance and observation only",
      "Resuscitation, broad-spectrum antibiotics, nothing by mouth, and urgent surgical or endoscopic consultation for esophageal repair"
    ],
    answer: 4,
    exp: "Severe chest pain after forceful vomiting with subcutaneous emphysema, pneumomediastinum, and a pleural effusion is Boerhaave syndrome, a full-thickness esophageal rupture. It is a surgical emergency requiring aggressive resuscitation, broad-spectrum antibiotics, nil by mouth, and urgent surgical or endoscopic repair with drainage; a water-soluble contrast study confirms the leak. Delay leads to mediastinitis, sepsis, and death.",
    why: [
      "This is a life-threatening perforation, not reflux, and cannot be managed with antacids at home.",
      "Endoscopic insufflation and biopsy can extend the perforation and are avoided as the first step.",
      "Barium is contraindicated with suspected perforation, and outpatient management is unsafe.",
      "Observation of an esophageal rupture allows fatal mediastinitis and sepsis.",
      "Correct: resuscitate, give antibiotics, keep nil by mouth, and obtain urgent surgical or endoscopic repair for Boerhaave syndrome."
    ]
  },
  {
    id: "s2ck-0136",
    system: "Surgery",
    discipline: "Neurosurgery",
    topic: "Acute subdural hematoma",
    difficulty: "moderate",
    anchor: "image",
    vignette: "An 80-year-old man on warfarin for atrial fibrillation is brought in after a fall with a head strike. He is drowsy and confused with a left hemiparesis. His right pupil is slightly larger than the left. His INR is elevated.\n\n**[IMAGE: noncontrast head CT showing a right-sided crescent-shaped hyperdense extra-axial collection crossing suture lines with midline shift]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Reverse the coagulopathy urgently and obtain emergent neurosurgical evaluation",
      "Start therapeutic heparin",
      "Administer intravenous thrombolysis",
      "Perform an immediate lumbar puncture",
      "Discharge with return precautions"
    ],
    answer: 0,
    exp: "A crescent-shaped extra-axial collection that crosses suture lines with midline shift is an acute subdural hematoma, favored by brain atrophy and anticoagulation in the elderly. Management is urgent reversal of the coagulopathy (for example prothrombin complex concentrate and vitamin K for warfarin) and immediate neurosurgical evaluation for possible decompression, given the depressed consciousness, focal deficit, and anisocoria signaling herniation risk. Anticoagulants and thrombolytics would be catastrophic.",
    why: [
      "Correct: urgently reverse the anticoagulation and obtain emergent neurosurgical evaluation for the subdural hematoma.",
      "Heparin worsens intracranial hemorrhage and is contraindicated.",
      "Thrombolysis would dramatically worsen the intracranial bleed.",
      "Lumbar puncture risks herniation with a mass lesion and midline shift and does not treat the hematoma.",
      "A patient with a shifting subdural, focal deficit, and anisocoria cannot be safely discharged."
    ]
  },
  {
    id: "s2ck-0137",
    system: "Surgery",
    discipline: "Endocrine Surgery",
    topic: "Thyroid nodule evaluation",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A 45-year-old woman is found to have a firm 2-cm nodule in the right thyroid lobe on routine examination. She is clinically euthyroid with no compressive symptoms. Her serum TSH is normal.\n\n**[IMAGE: thyroid ultrasound showing a solid hypoechoic nodule with microcalcifications and irregular margins]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Radioactive iodine ablation",
      "Ultrasound-guided fine-needle aspiration biopsy",
      "Total thyroidectomy without further testing",
      "Start levothyroxine to suppress the nodule",
      "Repeat examination in five years"
    ],
    answer: 1,
    exp: "A thyroid nodule with a normal TSH and sonographically suspicious features (solid hypoechoic, microcalcifications, irregular margins) should be evaluated with ultrasound-guided fine-needle aspiration to obtain cytology. A radionuclide scan is used only when the TSH is low to identify an autonomous ('hot') nodule. Surgery follows a cytologic diagnosis that indicates or suspects malignancy.",
    why: [
      "Radioiodine ablation treats hyperfunctioning tissue, not a euthyroid nodule needing tissue diagnosis.",
      "Correct: a sonographically suspicious nodule with normal TSH is evaluated by fine-needle aspiration biopsy.",
      "Thyroidectomy should not precede a cytologic diagnosis that guides the extent of surgery.",
      "Levothyroxine suppression is ineffective and does not establish a diagnosis.",
      "A suspicious nodule requires prompt biopsy rather than a five-year delay."
    ]
  },
  {
    id: "s2ck-0138",
    system: "Surgery",
    discipline: "Urology",
    topic: "Acute urinary retention",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 70-year-old man with a long history of progressive nocturia and weak stream presents with 8 hours of an inability to void and severe lower abdominal pain. On examination there is a tender, palpable suprapubic mass consistent with a distended bladder, and the prostate is diffusely enlarged and smooth.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Immediate transurethral resection of the prostate",
      "Loop diuretic to increase urine output",
      "Immediate bladder decompression with urethral catheterization",
      "Fluid restriction and observation",
      "Emergent hemodialysis"
    ],
    answer: 2,
    exp: "A distended, painful bladder with inability to void in a man with benign prostatic hyperplasia is acute urinary retention. The immediate step is bladder decompression by urethral (or suprapubic) catheterization to relieve pain and protect the kidneys, followed by an alpha-blocker and a voiding trial. Definitive procedures such as transurethral resection are planned electively after the acute episode, not emergently.",
    why: [
      "Surgery is planned electively after decompression, not as the emergent first step.",
      "A diuretic increases urine into an already obstructed bladder and worsens the problem.",
      "Correct: relieve acute retention immediately with urethral (or suprapubic) catheter decompression.",
      "Observation leaves the obstructed bladder distended and risks renal injury.",
      "Dialysis is not indicated for mechanical bladder outlet obstruction relieved by a catheter."
    ]
  },
  {
    id: "s2ck-0139",
    system: "Pediatrics",
    discipline: "Pediatric Gastroenterology",
    topic: "Meckel diverticulum",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A previously healthy 2-year-old boy passes a large volume of painless brick-red and maroon blood per rectum. He is mildly pale but hemodynamically stable after fluids, with a soft, nontender abdomen and no palpable mass. There is no diarrhea or fever.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Empiric antibiotics for infectious colitis",
      "Barium enema",
      "Reassurance and dietary changes",
      "A technetium-99m pertechnetate (Meckel) scan",
      "Immediate colonoscopy with polypectomy"
    ],
    answer: 3,
    exp: "Painless, substantial lower gastrointestinal bleeding in a toddler is classically caused by a Meckel diverticulum containing ectopic acid-secreting gastric mucosa that ulcerates adjacent ileum. The best diagnostic test is a technetium-99m pertechnetate scan, which is taken up by the ectopic gastric mucosa; symptomatic diverticula are then resected surgically. Antibiotics, barium studies, and colonoscopy do not target this diagnosis.",
    why: [
      "Painless bleeding without diarrhea or fever is not infectious colitis.",
      "A barium enema neither diagnoses nor localizes a bleeding Meckel diverticulum.",
      "Significant painless rectal bleeding needs a diagnosis, not reassurance.",
      "Correct: a technetium-99m pertechnetate (Meckel) scan detects ectopic gastric mucosa in a Meckel diverticulum.",
      "Colonoscopy typically will not reach or identify a small-bowel Meckel diverticulum."
    ]
  },
  {
    id: "s2ck-0140",
    system: "Pediatrics",
    discipline: "Pediatric Surgery",
    topic: "Duodenal atresia",
    difficulty: "moderate",
    anchor: "image",
    vignette: "A newborn with features of Down syndrome develops bilious vomiting within the first day of life. The upper abdomen is mildly full but the rest of the abdomen is scaphoid, and no stool has been passed.\n\n**[IMAGE: abdominal radiograph showing a 'double bubble' of gas in the stomach and proximal duodenum with no distal bowel gas]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Begin oral feeds and observe",
      "Prescribe an antiemetic and discharge",
      "Perform an immediate barium enema and send home",
      "Nasogastric decompression, intravenous fluids, and surgical consultation for operative repair",
      "Start broad-spectrum antifungal therapy"
    ],
    answer: 3,
    exp: "Bilious vomiting on the first day of life with a double-bubble sign and no distal gas indicates duodenal atresia, which is associated with Down syndrome. Initial management is nasogastric decompression, correction of fluid and electrolyte deficits, and surgical consultation for operative repair (duodenoduodenostomy). Continuing feeds or discharging the infant would be dangerous, and the picture is not infectious.",
    why: [
      "Feeding an obstructed newborn causes further vomiting and aspiration risk.",
      "Antiemetics and discharge ignore a surgical intestinal obstruction.",
      "This complete obstruction requires stabilization and surgery, not discharge.",
      "Correct: decompress with a nasogastric tube, resuscitate with fluids, and obtain surgical repair for duodenal atresia.",
      "There is no fungal infection; antifungals are irrelevant."
    ]
  },
  {
    id: "s2ck-0141",
    system: "Pediatrics",
    discipline: "Pediatric Infectious Disease",
    topic: "Measles (rubeola)",
    difficulty: "easy",
    anchor: null,
    vignette: "A 4-year-old unvaccinated child who recently traveled internationally has 4 days of high fever, cough, coryza, and conjunctivitis, followed by an erythematous maculopapular rash that began at the hairline and spread downward. Tiny bluish-white spots on a red base are seen on the buccal mucosa.",
    lead: "Which of the following is the most appropriate management?",
    options: [
      "Supportive care with vitamin A, isolation, and public health notification",
      "Oral amoxicillin",
      "Systemic corticosteroids",
      "Intravenous acyclovir",
      "No isolation is necessary"
    ],
    answer: 0,
    exp: "High fever with the three C's (cough, coryza, conjunctivitis), Koplik spots, and a cephalocaudal maculopapular rash in an unvaccinated traveler is measles. Management is supportive with vitamin A supplementation, which reduces measles morbidity and mortality in children, along with respiratory (airborne) isolation and mandatory public health reporting to control this highly contagious disease. Antibiotics are used only for bacterial superinfection.",
    why: [
      "Correct: measles is managed with supportive care and vitamin A, plus airborne isolation and public health reporting.",
      "Amoxicillin does not treat a viral illness and is reserved for bacterial superinfection.",
      "Corticosteroids are not indicated for uncomplicated measles.",
      "Acyclovir treats herpesviruses, not measles.",
      "Measles is highly contagious and requires airborne isolation, so no-isolation is wrong."
    ]
  },
  {
    id: "s2ck-0142",
    system: "Pediatrics",
    discipline: "Pediatric Orthopedics",
    topic: "Transient synovitis of the hip",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 5-year-old boy has a limp and mild right hip pain for 2 days following a recent upper respiratory infection. He is afebrile and well-appearing, bears weight with a limp, and allows gentle range of motion with only mild guarding. Laboratory inflammatory markers and white-cell count are normal or only minimally elevated.",
    lead: "Which of the following is the most likely diagnosis?",
    options: [
      "Septic arthritis of the hip",
      "Transient (toxic) synovitis of the hip",
      "Slipped capital femoral epiphysis",
      "Legg-Calve-Perthes disease with acute fracture",
      "Osteosarcoma of the femur"
    ],
    answer: 1,
    exp: "A well-appearing, afebrile child who bears weight and has near-normal inflammatory markers after a viral illness has transient (toxic) synovitis, a self-limited postinfectious hip inflammation treated with rest and NSAIDs. The key task is to distinguish it from septic arthritis using the Kocher criteria (fever, non-weight-bearing, elevated ESR and white-cell count); low-risk children can be observed with close follow-up.",
    why: [
      "Septic arthritis typically causes fever, refusal to bear weight, and markedly elevated inflammatory markers, absent here.",
      "Correct: an afebrile, weight-bearing child with near-normal labs after a viral illness has transient synovitis.",
      "Slipped capital femoral epiphysis usually occurs in older, overweight adolescents and shows epiphyseal slip on imaging.",
      "Legg-Calve-Perthes is avascular necrosis with a more chronic course and characteristic radiographic changes.",
      "Osteosarcoma presents with a persistent mass and progressive pain, not a transient postviral limp."
    ]
  },
  {
    id: "s2ck-0143",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Eclampsia",
    difficulty: "hard",
    anchor: null,
    vignette: "A 27-year-old woman at 37 weeks gestation with known preeclampsia is brought in after a witnessed generalized tonic-clonic seizure at home. On arrival she is postictal with a blood pressure of 172/112 mm Hg and brisk reflexes. The fetal heart rate is reassuring between contractions.",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Administer intravenous lorazepam as the definitive treatment and continue the pregnancy",
      "Perform an immediate cesarean delivery under general anesthesia at once",
      "Start intravenous magnesium sulfate, control severe hypertension, stabilize the mother, and plan delivery",
      "Order urgent CT of the head before any treatment",
      "Give a tocolytic to prevent labor"
    ],
    answer: 2,
    exp: "A generalized seizure in a woman with preeclampsia is eclampsia. Management is intravenous magnesium sulfate to treat and prevent further seizures, control of severe-range blood pressure with an antihypertensive such as labetalol or hydralazine, and maternal stabilization, after which the definitive treatment is delivery. Magnesium is superior to benzodiazepines for eclamptic seizures, and the mother is stabilized before delivery rather than rushed to an emergent operation.",
    why: [
      "Magnesium sulfate, not a benzodiazepine, is the treatment for eclamptic seizures, and the pregnancy must be delivered.",
      "Delivery is required, but the mother should first be stabilized with magnesium and blood-pressure control; the route is not automatically cesarean.",
      "Correct: give magnesium sulfate, control severe hypertension, stabilize the mother, and then deliver.",
      "Imaging should not delay magnesium and blood-pressure treatment in a classic eclamptic seizure.",
      "Tocolytics are inappropriate; the definitive treatment of eclampsia is delivery, not prolonging pregnancy."
    ]
  },
  {
    id: "s2ck-0144",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Category III fetal heart rate tracing",
    difficulty: "hard",
    anchor: "image",
    vignette: "A 31-year-old woman in active labor has a fetal monitor showing recurrent late decelerations with each contraction and absent baseline variability. Repositioning to the left lateral position, an intravenous fluid bolus, supplemental oxygen, and stopping oxytocin have not improved the pattern.\n\n**[IMAGE: fetal monitor tracing showing recurrent late decelerations with absent baseline variability]**",
    lead: "Which of the following is the most appropriate next step in management?",
    options: [
      "Increase the oxytocin infusion to speed labor",
      "Continue expectant management and reassess in one hour",
      "Administer a tocolytic and discharge the patient",
      "Proceed to expedited delivery, by cesarean if vaginal delivery is not imminent",
      "Order a biophysical profile before acting"
    ],
    answer: 3,
    exp: "Recurrent late decelerations with absent variability that persist despite intrauterine resuscitation constitute a category III (abnormal) tracing indicating fetal acidemia and hypoxia. When conservative measures fail, the fetus must be delivered expeditiously, by cesarean if vaginal delivery is not imminent. Augmenting labor, waiting, or ordering additional antenatal testing wastes time in an emergency.",
    why: [
      "More oxytocin intensifies contractions and worsens fetal hypoxia.",
      "A category III tracing that has not responded to resuscitation cannot be safely observed.",
      "A tocolytic with discharge fails to deliver a hypoxic fetus.",
      "Correct: a persistent category III tracing mandates expedited delivery, by cesarean if delivery is not imminent.",
      "A biophysical profile is an antenatal test that would only delay urgent delivery in labor."
    ]
  },
  {
    id: "s2ck-0145",
    system: "Obstetrics & Gynecology",
    discipline: "Gynecology",
    topic: "Vulvovaginal candidiasis",
    difficulty: "easy",
    anchor: "lab",
    vignette: "A 25-year-old woman who recently completed a course of antibiotics reports intense vulvar itching with a thick, white, clumpy vaginal discharge. On examination the vulva is erythematous and there is a curd-like discharge. There is no fishy odor and no dysuria.\n\n| Finding | Result |\n|---|---|\n| Vaginal pH | 4.2 |\n| KOH wet mount | budding yeast and pseudohyphae |\n| Whiff (amine) test | negative |",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Oral metronidazole",
      "Intramuscular penicillin",
      "Topical corticosteroid alone",
      "No treatment is required",
      "An antifungal (oral fluconazole or a topical azole)"
    ],
    answer: 4,
    exp: "Vulvar itching with a thick, curd-like discharge, a normal vaginal pH, a negative whiff test, and pseudohyphae on KOH indicates vulvovaginal candidiasis, often precipitated by recent antibiotics. Treatment is an antifungal, either a single dose of oral fluconazole or a topical azole. Metronidazole treats bacterial vaginosis or trichomoniasis, and penicillin treats syphilis, neither of which is present.",
    why: [
      "Metronidazole treats bacterial vaginosis and trichomoniasis, not a yeast infection.",
      "Penicillin treats syphilis, not candidiasis.",
      "A corticosteroid does not eradicate the fungal infection causing the symptoms.",
      "Symptomatic candidiasis warrants antifungal treatment, not observation.",
      "Correct: vulvovaginal candidiasis is treated with an antifungal such as oral fluconazole or a topical azole."
    ]
  },
  {
    id: "s2ck-0146",
    system: "Obstetrics & Gynecology",
    discipline: "Obstetrics",
    topic: "Postpartum endometritis",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 29-year-old woman who underwent cesarean delivery 3 days ago develops fever to 38.9 C, lower abdominal pain, uterine fundal tenderness, and foul-smelling lochia. Her lungs are clear, her breasts are nontender, and there is no costovertebral angle tenderness or calf pain.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Broad-spectrum intravenous antibiotics such as clindamycin plus gentamicin",
      "Oral acetaminophen alone",
      "Therapeutic anticoagulation for pelvic vein thrombosis",
      "Immediate hysterectomy",
      "Topical antifungal therapy"
    ],
    answer: 0,
    exp: "Postpartum fever with uterine tenderness and foul-smelling lochia after cesarean delivery is endometritis, a polymicrobial infection of the uterine lining and a leading cause of postpartum fever. Treatment is broad-spectrum intravenous antibiotics, classically clindamycin plus gentamicin, continued until the patient is afebrile and improving. Cesarean delivery is the main risk factor, and other sources of postpartum fever have been excluded here.",
    why: [
      "Correct: postpartum endometritis is treated with broad-spectrum IV antibiotics such as clindamycin plus gentamicin.",
      "Antipyretics alone do not treat the underlying uterine infection.",
      "Anticoagulation is for septic pelvic thrombophlebitis, considered only when endometritis fails to respond to antibiotics.",
      "Hysterectomy is not the treatment for uncomplicated endometritis.",
      "There is no fungal infection; antifungals are not indicated."
    ]
  },
  {
    id: "s2ck-0147",
    system: "Psychiatry",
    discipline: "Adult Psychiatry",
    topic: "Bulimia nervosa",
    difficulty: "moderate",
    anchor: "lab",
    vignette: "A 22-year-old woman of normal body weight describes recurrent episodes of eating large amounts of food with a sense of loss of control, followed by self-induced vomiting to avoid weight gain, occurring several times a week for months. She has dental enamel erosion and calluses on the dorsum of her hand.\n\n| Test | Value | Reference |\n|---|---|---|\n| Potassium | 3.0 mEq/L | 3.5-5.0 |\n| Bicarbonate | 32 mEq/L | 22-28 |\n| Chloride | 92 mEq/L | 98-106 |",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Bupropion",
      "Cognitive-behavioral therapy combined with an SSRI such as fluoxetine",
      "A benzodiazepine",
      "An antipsychotic as monotherapy",
      "No treatment because her weight is normal"
    ],
    answer: 1,
    exp: "Recurrent binge eating with compensatory self-induced vomiting in a normal-weight patient, with enamel erosion, Russell sign, and a hypokalemic hypochloremic metabolic alkalosis, defines bulimia nervosa. First-line treatment is cognitive-behavioral therapy combined with an SSRI, for which fluoxetine has the best evidence. Bupropion is contraindicated because it lowers the seizure threshold in patients who purge.",
    why: [
      "Bupropion is contraindicated in bulimia because it increases seizure risk in purging patients.",
      "Correct: cognitive-behavioral therapy plus an SSRI such as fluoxetine is first-line for bulimia nervosa.",
      "Benzodiazepines do not treat the eating disorder and carry dependence risk.",
      "Antipsychotic monotherapy is not indicated for bulimia nervosa.",
      "Normal weight does not obviate treatment; the disorder carries medical and psychiatric morbidity."
    ]
  },
  {
    id: "s2ck-0148",
    system: "Psychiatry",
    discipline: "Addiction Psychiatry",
    topic: "Opioid use disorder maintenance therapy",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 34-year-old man with a history of heroin and prescription opioid use meets criteria for opioid use disorder and wants help. He has relapsed repeatedly after supervised withdrawal alone and is currently in mild early withdrawal. He is motivated to start long-term treatment and has no acute intoxication.",
    lead: "Which of the following is the most appropriate treatment?",
    options: [
      "Rapid inpatient detoxification alone without maintenance therapy",
      "A benzodiazepine taper",
      "Medication-assisted treatment with buprenorphine-naloxone or methadone plus psychosocial support",
      "As-needed naloxone with no other therapy",
      "An antipsychotic"
    ],
    answer: 2,
    exp: "For opioid use disorder, maintenance medication-assisted treatment with an opioid agonist (buprenorphine-naloxone or methadone) or the antagonist naltrexone, combined with counseling, markedly reduces relapse, overdose, and mortality compared with withdrawal management alone. Repeated relapse after detoxification is exactly the pattern that maintenance therapy addresses. Detoxification without ongoing pharmacotherapy has high relapse and overdose rates.",
    why: [
      "Detoxification alone has high relapse and overdose rates and is what has already failed this patient.",
      "Benzodiazepines do not treat opioid use disorder and are dangerous combined with opioids.",
      "Correct: maintenance with buprenorphine-naloxone or methadone plus psychosocial support is first-line for opioid use disorder.",
      "Naloxone reverses acute overdose but is not maintenance therapy for the disorder.",
      "Antipsychotics do not treat opioid use disorder."
    ]
  },
  {
    id: "s2ck-0149",
    system: "Preventive Medicine & Ethics",
    discipline: "Preventive Medicine",
    topic: "Herpes zoster vaccination",
    difficulty: "easy",
    anchor: null,
    vignette: "A 68-year-old immunocompetent woman comes in for routine health maintenance. She had chickenpox as a child and has never received a shingles vaccine. She has no acute illness and takes no immunosuppressive medications. She asks how to reduce her risk of shingles and its complications.",
    lead: "Which of the following is the most appropriate recommendation?",
    options: [
      "No shingles vaccine is recommended at her age",
      "A single dose of the live attenuated zoster vaccine only",
      "Antiviral prophylaxis with daily acyclovir instead of vaccination",
      "The two-dose recombinant zoster vaccine",
      "Vaccinate only after she has an episode of shingles"
    ],
    answer: 3,
    exp: "Immunocompetent adults aged 50 years and older should receive the two-dose recombinant zoster vaccine, which is preferred over the older live vaccine and substantially reduces the risk of herpes zoster and postherpetic neuralgia. It is given regardless of a prior episode of shingles or prior receipt of the live vaccine. Long-term antiviral prophylaxis is not a substitute for vaccination.",
    why: [
      "Adults 50 and older are recommended to be vaccinated, so declining at 68 is incorrect.",
      "The recombinant vaccine is a two-dose series and is preferred over the live vaccine.",
      "Daily antiviral prophylaxis is not recommended in place of the highly effective vaccine.",
      "Correct: give the two-dose recombinant zoster vaccine to this immunocompetent adult over 50.",
      "Vaccination is recommended proactively, not delayed until after an episode of shingles."
    ]
  },
  {
    id: "s2ck-0150",
    system: "Preventive Medicine & Ethics",
    discipline: "Medical Ethics",
    topic: "Truth-telling versus family request for nondisclosure",
    difficulty: "moderate",
    anchor: null,
    vignette: "A 70-year-old man is newly diagnosed with metastatic pancreatic cancer. Before the physician speaks with him, his adult children insist that he not be told the diagnosis because they fear it will 'make him give up.' The patient is alert, has full decision-making capacity, and has not asked that information be withheld from him.",
    lead: "Which of the following is the most appropriate course of action?",
    options: [
      "Withhold the diagnosis entirely because the family requested it",
      "Tell only the family and document that the patient was not informed",
      "Transfer care to another physician to avoid the conflict",
      "Disclose the diagnosis to the patient covertly against the family's wishes without exploring the concern",
      "Explore the family's concerns, then ask the patient how much he wishes to know and disclose the diagnosis honestly to him"
    ],
    answer: 4,
    exp: "A competent patient has the right to receive honest information about his own diagnosis; the physician's primary duty of truth-telling runs to the patient, not the family. The appropriate approach is to acknowledge and explore the family's concerns, then determine the patient's own preferences by asking how much he wishes to know, and to disclose the diagnosis compassionately. A patient may waive disclosure, but that choice is his to make, not the family's.",
    why: [
      "The family cannot override a competent patient's right to information about his own condition.",
      "Informing only the family while keeping a capable patient uninformed violates his autonomy.",
      "Transferring care abandons the patient and does not resolve the ethical obligation.",
      "Disclosure should be handled openly and sensitively, first exploring the family's concerns, not done covertly without discussion.",
      "Correct: address the family's concerns, ask the patient how much he wishes to know, and disclose honestly to him."
    ]
  }
];
