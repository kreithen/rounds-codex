/* Infectious Disease resident dataset — batch 12 of 12 (entries 56-60).
 * Resistance, prevention, delivery of therapy, and the undiagnosed fever.
 */
const RES_ID_B12 = [
{
  id: "id-mdr-gram-negatives",
  name: "Multidrug-Resistant Gram-Negative Organisms - ESBL, AmpC, CRE, Pseudomonas",
  sec: "id",
  present: [
    "Suspect resistance with recent antibiotic exposure, prior colonization, healthcare abroad, dialysis, transplant or long-term care residence",
    "The clinical syndromes are ordinary — urinary, intra-abdominal, pneumonia, bacteremia — and it is the isolate rather than the presentation that declares the problem",
    "Prior isolation of a resistant organism is the strongest single predictor of the next one, and belongs in the empiric decision"
  ],
  dx: [
    "Extended-spectrum beta-lactamase producers are inferred from ceftriaxone resistance in E. coli, Klebsiella and Proteus rather than from a specific reported test",
    "AmpC-inducible organisms — Enterobacter cloacae, Klebsiella aerogenes, Citrobacter freundii — can test susceptible to ceftriaxone on day one and be resistant on day four of treatment",
    "Carbapenem-resistant Enterobacterales need carbapenemase identification, because KPC, NDM, OXA-48 and VIM lead to entirely different agents",
    "Difficult-to-treat Pseudomonas is defined by nonsusceptibility to all of the standard first-line beta-lactams and fluoroquinolones"
  ],
  tx: [
    "ESBL producers with bacteremia or serious infection: a carbapenem. Piperacillin-tazobactam was inferior in the MERINO trial and should not be used for ESBL bloodstream infection",
    "AmpC risk organisms: cefepime or a carbapenem, not ceftriaxone, even when the report says susceptible",
    "Carbapenem-resistant Enterobacterales: the agent follows the carbapenemase — ceftazidime-avibactam or meropenem-vaborbactam for KPC, and cefiderocol or ceftazidime-avibactam with aztreonam for metallo-beta-lactamases",
    "Difficult-to-treat Pseudomonas: ceftolozane-tazobactam, ceftazidime-avibactam, imipenem-relebactam or cefiderocol, chosen on susceptibility rather than habit"
  ],
  pearls: [
    "Uncomplicated cystitis caused by an ESBL producer does not need a carbapenem — nitrofurantoin, fosfomycin or trimethoprim-sulfamethoxazole often work and preserve the carbapenem",
    "Routine combination therapy for resistant gram-negatives has not been shown to improve outcomes over an active single agent and adds toxicity",
    "Colonization is not infection. Treating a rectal swab that grew CRE in a well patient does harm and no good",
    "Involve infection prevention on the first CRE or Candida auris isolate; these are transmissible and the response is institutional, not just clinical"
  ],
  refs: [
    { t: "IDSA: Guidance on Antimicrobial-Resistant Gram-Negative Infections", u: "https://www.idsociety.org/practice-guideline/amr-guidance/" },
    { t: "CDC: Antimicrobial Resistance Threats", u: "https://www.cdc.gov/antimicrobial-resistance/data-research/threats/" },
    { t: "StatPearls: Extended Spectrum Beta-Lactamase", u: "https://www.ncbi.nlm.nih.gov/books/NBK547401/" }
  ]
},
{
  id: "id-healthcare-associated-infection-prevention",
  name: "Healthcare-Associated Infection Prevention & Outbreak Investigation",
  sec: "id",
  present: [
    "The four device and procedure associated infections that are tracked and reportable: central line bloodstream infection, catheter-associated urinary tract infection, ventilator-associated events and surgical site infection",
    "An outbreak is two or more epidemiologically linked cases above the expected baseline — recognizing it depends on knowing the baseline",
    "Clusters usually surface through the microbiology laboratory before anyone at the bedside notices a pattern"
  ],
  dx: [
    "Hand hygiene is the single most effective measure and the most frequently omitted; the evidence for it is not in doubt and the compliance is",
    "Know the precautions: contact for C. difficile and resistant organisms, droplet for influenza and meningococcus, airborne for tuberculosis, measles and varicella",
    "C. difficile requires soap and water, not alcohol gel, because spores are not killed by alcohol",
    "Outbreak investigation runs in order: confirm the diagnosis, define a case, find cases, describe by person place and time, generate a hypothesis, test it, then intervene"
  ],
  tx: [
    "Insertion bundles for central lines: hand hygiene, maximal barrier precautions, chlorhexidine skin preparation, optimal site selection, and daily review of the need for the line",
    "The strongest urinary catheter intervention is not inserting one, and the second strongest is removing it — duration is the dominant risk factor",
    "Surgical site infection prevention: correctly timed prophylaxis within an hour of incision, appropriate redosing, normothermia, glycemic control, and no routine hair removal with a razor",
    "During an outbreak, control measures start on the hypothesis; you do not wait for the case-control study to finish"
  ],
  pearls: [
    "Prolonging surgical prophylaxis beyond wound closure does not reduce infection and does increase resistance and C. difficile — the post-operative doses are the commonest error",
    "Environmental cleaning matters disproportionately for C. difficile, Candida auris and norovirus, all of which persist on surfaces",
    "Ask what changed: a new product, a new process, a locum, a broken washer-disinfector. Outbreaks usually have a mundane cause",
    "Report early. Infection prevention and public health would far rather hear about a cluster that turns out to be nothing"
  ],
  refs: [
    { t: "CDC: Infection Control Guidelines", u: "https://www.cdc.gov/infection-control/hcp/" },
    { t: "SHEA/IDSA/APIC: Compendium of Strategies to Prevent HAIs", u: "https://shea-online.org/priority-topics/compendium-of-strategies-to-prevent-hais/" },
    { t: "CDC: Outbreak Investigations", u: "https://www.cdc.gov/training/quicklearns/outbreak/" }
  ]
},
{
  id: "id-opat",
  name: "Outpatient Parenteral Antimicrobial Therapy (OPAT)",
  sec: "id",
  present: [
    "Used where prolonged parenteral therapy is genuinely needed and the patient is otherwise well enough to be at home: endocarditis, osteomyelitis, prosthetic joint infection, complicated bacteremia",
    "Success depends as much on the social assessment as the microbiological one — housing, a caregiver, transport, and reliable follow-up",
    "The first question should always be whether an oral regimen would do instead"
  ],
  dx: [
    "Confirm the organism and susceptibilities before discharge; OPAT on empiric therapy is a recipe for readmission",
    "Choose the line for the duration: a midline for shorter courses, a peripherally inserted central catheter or tunneled line for longer",
    "Arrange the monitoring schedule explicitly — weekly complete blood count, renal and hepatic function, plus drug levels where relevant",
    "Book the infectious diseases follow-up before discharge, not as an open referral"
  ],
  tx: [
    "Favor once-daily agents where they are equally effective — ceftriaxone, ertapenem, daptomycin — because complexity predicts failure",
    "Long-acting lipoglycopeptides such as dalbavancin and oritavancin can complete therapy in one or two doses and remove the line altogether",
    "OVIVA and POET both showed oral therapy noninferior in selected bone and joint infection and left-sided endocarditis; the oral option is a real one and often the better one",
    "Have a written plan for line complications, and a defined route back into hospital that does not begin in the emergency department"
  ],
  pearls: [
    "The catheter is the main hazard of OPAT: thrombosis, bloodstream infection and mechanical failure, and every avoided line is an avoided complication",
    "OPAT in a person who injects drugs requires a considered plan rather than a reflex refusal; several models work, and oral therapy or a long-acting agent may serve better than a central line",
    "Vancomycin is a poor OPAT drug — daily levels, nephrotoxicity and infusion reactions — and is often replaceable by daptomycin or a long-acting agent",
    "Weekly laboratory monitoring is not optional; the commonest OPAT harms are drug toxicities detected late"
  ],
  refs: [
    { t: "IDSA: Outpatient Parenteral Antimicrobial Therapy Guidelines", u: "https://www.idsociety.org/practice-guideline/opat/" },
    { t: "OVIVA: Oral versus Intravenous Antibiotics for Bone and Joint Infection (NEJM 2019)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa1710926" },
    { t: "StatPearls: Outpatient Parenteral Antimicrobial Therapy", u: "https://www.ncbi.nlm.nih.gov/books/NBK564394/" }
  ]
},
{
  id: "id-penicillin-allergy-delabeling",
  name: "Penicillin Allergy De-labeling & Antimicrobial Allergy",
  sec: "id",
  present: [
    "About one in ten patients carries a penicillin allergy label, and more than 90% of them are not allergic on formal testing",
    "The label is not harmless: it pushes patients onto broader, less effective and more toxic alternatives, with more surgical site infection, more C. difficile and more MRSA",
    "Most labels come from a childhood rash during an infection, or from a symptom that was never an allergy at all"
  ],
  dx: [
    "Take the history properly: what drug, what reaction, how long after the dose, how long ago, what treatment was needed, and has any beta-lactam been tolerated since",
    "Separate the categories: intolerance (nausea, headache) is not allergy; a benign delayed rash is low risk; anaphylaxis, and severe cutaneous adverse reactions, are not",
    "Low-risk histories can be de-labeled by direct oral amoxicillin challenge under observation, without prior skin testing",
    "Refer for skin testing where the history is moderate risk or unclear and the answer will matter"
  ],
  tx: [
    "De-label at the point of care where the history is low risk; this is a task for the admitting team, not only for allergy clinics",
    "Cross-reactivity between penicillins and later-generation cephalosporins is low and driven by side-chain similarity, not by the beta-lactam ring — cefazolin has a unique side chain and is very rarely cross-reactive",
    "Where a beta-lactam is genuinely needed in a truly allergic patient, desensitization is available and is the correct answer in pregnancy with syphilis",
    "Update the record everywhere the moment a label is removed, or it reappears at the next admission"
  ],
  pearls: [
    "A history of severe cutaneous adverse reaction — Stevens-Johnson syndrome, toxic epidermal necrolysis, DRESS — is an absolute contraindication and must never be challenged or desensitized",
    "The label costs the patient at surgery: cefazolin prophylaxis is displaced by vancomycin or clindamycin, and surgical site infection rates go up",
    "Vancomycin infusion reaction (formerly red man syndrome) is a rate-related histamine release, not an allergy, and should not be recorded as one",
    "Ask specifically what the patient has taken since; a documented course of amoxicillin tolerated last year settles the question without any test"
  ],
  refs: [
    { t: "CDC: Evaluation and Diagnosis of Penicillin Allergy", u: "https://www.cdc.gov/antibiotic-use/hcp/clinical-signs/penicillin-allergy.html" },
    { t: "AAAAI/ACAAI: Drug Allergy Practice Parameter", u: "https://www.aaaai.org/practice-resources/statements-and-practice-parameters" },
    { t: "StatPearls: Penicillin Allergy", u: "https://www.ncbi.nlm.nih.gov/books/NBK545153/" }
  ]
},
{
  id: "id-fever-of-unknown-origin",
  name: "Fever of Unknown Origin",
  sec: "id",
  present: [
    "Classical definition: temperature above 38.3 C on several occasions, for more than three weeks, undiagnosed after appropriate initial investigation",
    "Four broad categories: infection, malignancy, noninfectious inflammatory disease, and miscellaneous — and in modern series a substantial proportion remain undiagnosed and resolve",
    "Noninfectious inflammatory disease now outweighs infection in many series, with giant cell arteritis, adult-onset Still disease and vasculitis prominent"
  ],
  dx: [
    "Repeat the history and examination rather than adding tests; the diagnosis usually arrives from something previously unasked — travel, animals, occupation, drugs, dental work, family history",
    "Review every medication, including over-the-counter and recently stopped drugs; drug fever is common and is diagnosed by withdrawal",
    "Structured first-line testing: blood cultures off antibiotics, complete blood count with film, inflammatory markers, transaminases, HIV, tuberculosis testing, autoantibodies, and cross-sectional imaging",
    "18F-FDG PET/CT has a good yield in genuine fever of unknown origin and is best deployed after the structured first pass rather than in place of it"
  ],
  tx: [
    "Resist empiric antibiotics in a stable patient — they obscure the diagnosis, sterilize cultures, and rarely help",
    "Empiric therapy is justified in specific circumstances: suspected culture-negative endocarditis, suspected tuberculosis in the deteriorating patient, or clinical instability",
    "A therapeutic trial of steroids should follow, not precede, exclusion of infection and lymphoma; started early it can mask both",
    "Biopsy what is abnormal. Temporal artery biopsy in the older patient with raised inflammatory markers has a real yield"
  ],
  pearls: [
    "The commonest reason for a persistent fever of unknown origin is an incomplete history, not a rare disease",
    "Withhold antibiotics before blood cultures, and take them off therapy where the patient is stable enough — this is the step that most often unlocks endocarditis",
    "In the older patient with a raised ESR, headache or jaw claudication, treat for giant cell arteritis while arranging the biopsy; vision loss is not recoverable",
    "Many patients never receive a diagnosis and get better anyway; that outcome is acceptable and better than an empirical treatment cascade"
  ],
  refs: [
    { t: "IDSA Practice Guidelines", u: "https://www.idsociety.org/practice-guideline/practice-guidelines/" },
    { t: "CDC: Clinical Overview of Q Fever (a classic FUO cause)", u: "https://www.cdc.gov/q-fever/hcp/clinical-overview/" },
    { t: "StatPearls: Fever of Unknown Origin", u: "https://www.ncbi.nlm.nih.gov/books/NBK532265/" }
  ]
}
];
