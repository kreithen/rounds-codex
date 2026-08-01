/* Infectious Disease resident dataset — batch 2 of 12 (entries 6-10).
 * Central nervous system; community and hospital pneumonia.
 */
const RES_ID_B2 = [
{
  id: "id-bacterial-meningitis",
  name: "Acute Bacterial Meningitis",
  sec: "id",
  present: [
    "The classic triad of fever, neck stiffness and altered mentation is present in fewer than half; at least two of headache, fever, stiff neck or altered mentation occur in about 95%",
    "A petechial or purpuric rash points at Neisseria meningitidis and demands droplet precautions before the diagnosis is confirmed",
    "Older, alcoholic and immunosuppressed patients present blunted — confusion without fever or meningismus is common"
  ],
  dx: [
    "Lumbar puncture is the test. CT head first ONLY for immunocompromise, known CNS disease, new seizure, papilledema, depressed consciousness or a focal deficit",
    "Bacterial CSF: neutrophil-predominant pleocytosis usually >1000, glucose <40 mg/dL or CSF:serum ratio <0.4, protein >200 mg/dL",
    "Two sets of blood cultures — positive in 50-80% and often the only microbiology if antibiotics preceded the tap",
    "Multiplex CSF PCR retains yield after antibiotics, when Gram stain and culture do not"
  ],
  tx: [
    "Do NOT delay antibiotics for imaging or the tap. Draw cultures, treat, then image and tap",
    "Dexamethasone 0.15 mg/kg q6h for 4 days, given with or before the first dose — de Gans (NEJM 2002) showed reduced mortality and unfavorable outcome, driven by pneumococcal disease",
    "Empiric ceftriaxone 2g q12h plus vancomycin; add ampicillin over age 50, in pregnancy or with immunosuppression to cover Listeria monocytogenes",
    "Duration by organism: N. meningitidis 7 days, S. pneumoniae 10-14 days, L. monocytogenes at least 21 days, gram-negative bacilli 21 days"
  ],
  pearls: [
    "Stop the dexamethasone once the organism is not pneumococcus — the benefit was not shown for the others and the harm of steroids is real",
    "Cefepime or meropenem replaces ceftriaxone after neurosurgery or penetrating head trauma, where Pseudomonas and staphylococci matter",
    "Close contacts of meningococcal disease need chemoprophylaxis within 24 hours; the index case needs it too unless treated with ceftriaxone",
    "A CSF lymphocytic picture with very low glucose is tuberculous or fungal until proven otherwise, not viral"
  ],
  refs: [
    { t: "IDSA: Bacterial Meningitis Guidelines", u: "https://www.idsociety.org/practice-guideline/bacterial-meningitis/" },
    { t: "CDC: Bacterial Meningitis", u: "https://www.cdc.gov/meningitis/bacterial.html" },
    { t: "StatPearls: Bacterial Meningitis", u: "https://www.ncbi.nlm.nih.gov/books/NBK470351/" }
  ]
},
{
  id: "id-viral-meningitis-encephalitis",
  name: "Viral Meningitis & Encephalitis",
  sec: "id",
  present: [
    "Meningitis spares the brain: headache, fever, photophobia and neck stiffness with preserved mentation, usually enteroviral and self-limited",
    "Encephalitis is parenchymal: altered consciousness, personality change, seizure or focal deficit — that distinction, not the CSF, drives urgency",
    "HSV-1 encephalitis classically presents with fever, aphasia, behavioral change and temporal lobe seizures over days"
  ],
  dx: [
    "CSF shows a lymphocytic pleocytosis with normal glucose and mildly raised protein; early enteroviral disease can be neutrophil-predominant",
    "CSF HSV PCR is the diagnostic test, but it can be negative in the first 24-72 hours — repeat it rather than stopping treatment",
    "MRI is more sensitive than CT: unilateral or asymmetric temporal and inferior frontal signal change suggests HSV",
    "EEG showing temporal periodic lateralized epileptiform discharges supports HSV and detects nonconvulsive seizures"
  ],
  tx: [
    "Start acyclovir 10 mg/kg IV q8h empirically in ANY encephalitis, before the PCR returns",
    "Treat confirmed HSV encephalitis for 14-21 days and document CSF PCR clearance before stopping",
    "Hydrate through acyclovir and dose by ideal body weight — crystal nephropathy is the common avoidable harm",
    "Viral meningitis is supportive care; the decision that matters is whether it is safe to stop antibiotics and discharge"
  ],
  pearls: [
    "Untreated HSV encephalitis kills roughly 70%; there is no version of this where waiting for a PCR is correct",
    "Autoimmune encephalitis, anti-NMDA receptor especially, is the main mimic — young patient, prominent psychiatric features, movement disorder",
    "Enteroviral meningitis in an adult is a diagnosis of exclusion in the first hours; treat as bacterial until the CSF says otherwise"
  ],
  refs: [
    { t: "IDSA: Encephalitis Guidelines", u: "https://www.idsociety.org/practice-guideline/encephalitis/" },
    { t: "CDC: Viral Meningitis", u: "https://www.cdc.gov/meningitis/viral.html" },
    { t: "StatPearls: Herpes Simplex Encephalitis", u: "https://www.ncbi.nlm.nih.gov/books/NBK557643/" }
  ]
},
{
  id: "id-brain-abscess-empyema",
  name: "Brain Abscess & Subdural Empyema",
  sec: "id",
  present: [
    "Headache is the commonest symptom; fever is present in only about half, so an afebrile patient does not exclude it",
    "Focal deficit, seizure or progressive drowsiness reflects mass effect — the full triad of headache, fever and deficit occurs in under 20%",
    "Source usually declares itself: contiguous otogenic, sinus or dental infection; hematogenous from endocarditis or lung; or recent neurosurgery"
  ],
  dx: [
    "MRI with diffusion-weighted imaging is the study — restricted diffusion separates pyogenic abscess from necrotic tumor, which ring-enhances identically",
    "Blood cultures before antibiotics; they are positive in a minority but spare an aspiration when they grow",
    "Stereotactic aspiration gives the organism and decompresses at once; send bacterial, mycobacterial and fungal cultures",
    "Hunt the primary: dental panoramic imaging, sinus and temporal bone CT, echocardiography"
  ],
  tx: [
    "Aspirate or excise lesions larger than about 2.5 cm, any with significant mass effect, and any where the organism is unknown",
    "Empiric ceftriaxone or cefotaxime plus metronidazole; add vancomycin after neurosurgery or where staphylococci are likely",
    "Treat 6-8 weeks intravenously, following serial imaging rather than the calendar",
    "Reserve corticosteroids for threatening edema or impending herniation — they impair capsule formation and antibiotic penetration"
  ],
  pearls: [
    "Lumbar puncture is hazardous with mass effect and rarely yields the organism — it is not part of this workup",
    "Subdural empyema is a neurosurgical emergency, not a medical one; it spreads fast over the convexity and needs drainage the same day",
    "An abscess that appears with no contiguous source means an endovascular or pulmonary source; look for a right-to-left shunt in the young"
  ],
  refs: [
    { t: "IDSA: Healthcare-Associated Ventriculitis and Meningitis", u: "https://www.idsociety.org/practice-guideline/healthcare-associated-ventriculitis-and-meningitis/" },
    { t: "StatPearls: Brain Abscess", u: "https://www.ncbi.nlm.nih.gov/books/NBK441849/" },
    { t: "StatPearls: Subdural Empyema", u: "https://www.ncbi.nlm.nih.gov/books/NBK441836/" }
  ]
},
{
  id: "id-community-acquired-pneumonia",
  name: "Community-Acquired Pneumonia",
  sec: "id",
  present: [
    "Cough, fever, dyspnea and pleuritic pain with focal findings on examination",
    "Older adults present atypically — confusion, a fall or decompensated heart failure with no cough and no fever",
    "Severity is the first decision, not the organism: CURB-65 or PSI decides outpatient, ward or ICU"
  ],
  dx: [
    "Chest radiograph confirms the diagnosis; a normal film very early does not exclude it if the clinical picture fits",
    "Blood and sputum cultures only in severe disease, or where MRSA or Pseudomonas is being empirically covered",
    "Pneumococcal and Legionella urinary antigens in severe disease and in outbreaks",
    "Do not use procalcitonin to withhold initial antibiotics — the 2019 ATS/IDSA guideline is explicit that it lacks the accuracy for that decision"
  ],
  tx: [
    "Healthy outpatient: amoxicillin 1g three times daily, or doxycycline; a macrolide alone only where local pneumococcal macrolide resistance is under 25%",
    "Outpatient with comorbidity: amoxicillin-clavulanate or a cephalosporin plus a macrolide or doxycycline, or a respiratory fluoroquinolone alone",
    "Inpatient: a beta-lactam plus a macrolide; severe disease takes a beta-lactam plus either a macrolide or a fluoroquinolone",
    "Treat a minimum of 5 days and until clinically stable for 48 hours; longer only for complications"
  ],
  pearls: [
    "The 2019 guideline abandoned healthcare-associated pneumonia as a category — it drove broad-spectrum therapy in patients who did not need it",
    "Cover MRSA or Pseudomonas only with prior respiratory isolation of the organism, or severe disease plus risk factors; then de-escalate on cultures",
    "CAPE-COD (NEJM 2023) found hydrocortisone reduced 28-day mortality in severe CAP in the ICU, 6.2% vs 11.9%",
    "No improvement by 72 hours means a complication (empyema, obstructing lesion) or the wrong diagnosis, not a longer course"
  ],
  refs: [
    { t: "ATS/IDSA: Community-Acquired Pneumonia in Adults (2019)", u: "https://www.idsociety.org/practice-guideline/community-acquired-pneumonia-in-adults/" },
    { t: "CAPE-COD: Hydrocortisone in Severe CAP (NEJM 2023)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa2215145" },
    { t: "StatPearls: Community-Acquired Pneumonia", u: "https://www.ncbi.nlm.nih.gov/books/NBK430749/" }
  ]
},
{
  id: "id-hap-vap",
  name: "Hospital-Acquired & Ventilator-Associated Pneumonia",
  sec: "id",
  present: [
    "A new or progressive radiographic infiltrate 48 hours or more after admission (HAP) or after intubation (VAP)",
    "Supported by fever, leukocytosis, purulent secretions and worsening gas exchange — no single finding is specific",
    "Atelectasis, aspiration pneumonitis, pulmonary edema and ARDS all produce the same picture and are the commonest false positives"
  ],
  dx: [
    "The 2016 IDSA/ATS guideline prefers noninvasive sampling — endotracheal aspirate with semiquantitative culture — over bronchoscopic sampling",
    "Blood cultures in all suspected HAP and VAP; they change management in roughly 15%",
    "Interpret against the unit antibiogram; empiric choice should follow local resistance, not a textbook list",
    "A negative respiratory culture in a patient not recently started on antibiotics is strong evidence against VAP and a reason to stop"
  ],
  tx: [
    "Empiric therapy must cover S. aureus and Pseudomonas aeruginosa plus other gram-negative bacilli",
    "Add MRSA coverage for prior IV antibiotics within 90 days, a unit MRSA prevalence above 20%, or prior MRSA isolation",
    "Use two antipseudomonal agents from different classes where mortality risk is high or structural lung disease is present; otherwise one is enough",
    "Seven days for both HAP and VAP, including Pseudomonas, then de-escalate or stop on culture results"
  ],
  pearls: [
    "Seven days is the guideline even for Pseudomonas — the older practice of 14 days did not reduce recurrence and did select resistance",
    "Growing an organism from an endotracheal tube is not a diagnosis; ventilated airways are colonized within days",
    "Do not add empiric antifungal or Legionella cover to routine VAP; both are rare and the therapy is not benign"
  ],
  refs: [
    { t: "IDSA/ATS: HAP and VAP Guidelines (2016)", u: "https://www.idsociety.org/practice-guideline/hap_vap/" },
    { t: "CDC: Ventilator-Associated Pneumonia", u: "https://www.cdc.gov/infection-control/hcp/vap/" },
    { t: "StatPearls: Ventilator-Associated Pneumonia", u: "https://www.ncbi.nlm.nih.gov/books/NBK507711/" }
  ]
}
];
