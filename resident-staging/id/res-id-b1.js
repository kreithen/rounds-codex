/* Infectious Disease resident dataset — batch 1 of 12 (entries 1-5).
 * Bacteremia & endovascular infection.
 * Schema: {id,name,sec,present[],dx[],tx[],pearls[],refs[{t,u}]}  sec="id"
 */
const RES_ID_B1 = [
{
  id: "id-staph-aureus-bacteremia",
  name: "Staphylococcus aureus Bacteremia",
  sec: "id",
  present: [
    "Fever with no obvious source; ~25% have no identifiable portal of entry at presentation",
    "Risk substrate drives the workup: injection drug use, hemodialysis access, any prosthetic material, recent instrumentation",
    "Metastatic seeding is the rule not the exception — back pain (vertebral osteomyelitis/epidural abscess), monoarthritis, new murmur, focal neuro deficit"
  ],
  dx: [
    "Repeat blood cultures every 48h until documented clearance — time to clearance defines complicated vs uncomplicated and sets duration",
    "Echocardiography in EVERY patient: TTE first, TEE if prosthetic material, persistent bacteremia/fever >72h, intracardiac device, or TTE nondiagnostic",
    "Hunt metastatic foci actively — MRI spine for any back pain, joint aspiration for effusion, imaging of any prosthesis",
    "Uncomplicated requires ALL of: no prosthetic material, no endocarditis, cultures clear by 2-4 days, defervescence within 72h, no metastatic focus"
  ],
  tx: [
    "MSSA: cefazolin 2g q8h or an antistaphylococcal penicillin. CloCeBa (Lancet 2025, n=315) found cefazolin noninferior at a 12% margin with fewer serious adverse events",
    "MRSA: vancomycin (AUC/MIC 400-600) or daptomycin 8-10 mg/kg. Never use vancomycin for MSSA — it is inferior",
    "Uncomplicated: 14 days from first negative culture. Complicated (endocarditis, metastatic focus, retained hardware, delayed clearance): 4-6 weeks",
    "Remove the source: pull every removable catheter, drain collections, and plan hardware explantation early rather than after a failed course"
  ],
  pearls: [
    "S. aureus in a blood culture is never a contaminant — one positive bottle demands the full workup",
    "Formal ID consultation is repeatedly associated with lower mortality in SAB, driven by echo uptake, source control and correct duration",
    "The 7-day BALANCE result does NOT apply here — that trial specifically excluded S. aureus and endocarditis",
    "The cefazolin inoculum effect is largely an in-vitro phenomenon; it is not a reason to withhold cefazolin in MSSA bacteremia"
  ],
  refs: [
    { t: "IDSA: MRSA Treatment Guidelines", u: "https://www.idsociety.org/practice-guideline/mrsa/" },
    { t: "CloCeBa: cloxacillin vs cefazolin for MSSA bacteremia (Lancet 2025)", u: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)01624-1/fulltext" },
    { t: "StatPearls: Staphylococcus aureus Infection", u: "https://www.ncbi.nlm.nih.gov/books/NBK441868/" }
  ]
},
{
  id: "id-native-valve-endocarditis",
  name: "Infective Endocarditis - Native Valve",
  sec: "id",
  present: [
    "Fever plus a new or changed regurgitant murmur; subacute disease can present as weeks of malaise, weight loss and anemia",
    "Embolic and immune phenomena: splinter hemorrhages, Janeway lesions, Osler nodes, Roth spots, splenic or cerebral infarct",
    "Right-sided disease (injection drug use) presents as septic pulmonary emboli and pleuritic pain, often with a clear chest exam"
  ],
  dx: [
    "Three sets of blood cultures from separate sites BEFORE antibiotics — sustained bacteremia is the microbiologic backbone of the diagnosis",
    "2023 Duke-ISCVID criteria: TTE first, TEE if TTE negative or nondiagnostic and suspicion persists (TEE sensitivity ~90% vs ~70%)",
    "Cardiac CT and, for prosthetic material, 18F-FDG PET/CT are now accepted imaging major criteria",
    "Culture-negative disease: send Coxiella burnetii and Bartonella serology, and ask what antibiotics were given before the cultures"
  ],
  tx: [
    "Empiric therapy only after cultures, and only if unstable: vancomycin plus ceftriaxone, then narrow the moment susceptibilities return",
    "Pathogen-directed IV therapy for 4-6 weeks; viridans streptococci with a penicillin-susceptible isolate can complete 4 weeks, or 2 weeks with an aminoglycoside in selected uncomplicated cases",
    "Surgical indications: heart failure from valve dysfunction, uncontrolled infection (abscess, fistula, persistent bacteremia), and prevention of embolism (vegetation >10 mm with an embolic event, or >10 mm with severe valve disease)",
    "POET (NEJM 2019) supports partial oral step-down in stabilized left-sided endocarditis after an initial IV period, in a carefully selected population"
  ],
  pearls: [
    "Sensitivity collapses if cultures are drawn after antibiotics — in a stable patient, wait and draw all three sets first",
    "Surgery is not a rescue for failed antibiotics; when an indication exists, delaying to complete a course worsens outcomes",
    "A normal TTE does not exclude endocarditis, and in S. aureus bacteremia it is not enough on its own"
  ],
  refs: [
    { t: "AHA: Infective Endocarditis Scientific Statement", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000296" },
    { t: "2023 Duke-ISCVID Criteria (Clin Infect Dis)", u: "https://academic.oup.com/cid/article/77/4/518/7145966" },
    { t: "StatPearls: Infective Endocarditis", u: "https://www.ncbi.nlm.nih.gov/books/NBK557641/" }
  ]
},
{
  id: "id-prosthetic-valve-cied-infection",
  name: "Prosthetic Valve Endocarditis & Cardiac Device Infection",
  sec: "id",
  present: [
    "Early PVE (<12 months from surgery) is typically staphylococcal and nosocomially acquired; late PVE resembles native valve disease",
    "CIED pocket infection: erythema, fluctuance, adherence or frank erosion of the generator through the skin",
    "CIED lead endocarditis may present only as occult or relapsing bacteremia with no local pocket findings at all"
  ],
  dx: [
    "TEE is the standard; TTE alone is inadequate for prosthetic material and for lead vegetations",
    "18F-FDG PET/CT and radiolabeled leukocyte SPECT/CT are Duke-ISCVID major criteria for prosthetic valves and are most useful beyond 3 months from implant",
    "Blood cultures before any antibiotic; culture the pocket and the explanted leads, not just the generator",
    "Look for paravalvular extension — new conduction delay on ECG suggests an aortic root abscess"
  ],
  tx: [
    "Staphylococcal PVE requires triple therapy: an antistaphylococcal agent plus rifampin plus gentamicin, for at least 6 weeks",
    "Start rifampin only once the bloodstream is sterile — adding it during active bacteremia selects rifampin resistance",
    "CIED infection requires COMPLETE removal of the generator and all leads (a Class I recommendation); antibiotics alone reliably fail",
    "Reimplant only after clearance, and on the contralateral side: roughly 72 hours for pocket infection, and 14 days after clearance where there is valve involvement"
  ],
  pearls: [
    "A patient with a CIED and S. aureus bacteremia has a device infection until imaging and clearance prove otherwise",
    "Erosion of a generator through the skin is device infection by definition — a swab and oral antibiotics is not a treatment",
    "Reassess the indication before reimplanting; a substantial minority of extracted patients no longer need the device"
  ],
  refs: [
    { t: "AHA: Management of CIED Infections (Scientific Statement)", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000745" },
    { t: "AHA: Infective Endocarditis Scientific Statement", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000296" },
    { t: "StatPearls: Prosthetic Valve Endocarditis", u: "https://www.ncbi.nlm.nih.gov/books/NBK567731/" }
  ]
},
{
  id: "id-gram-negative-bacteremia",
  name: "Gram-Negative Bacteremia & Source Control",
  sec: "id",
  present: [
    "Urinary, biliary and intra-abdominal sources account for the large majority; the portal is usually findable on history and imaging",
    "Older and comorbid patients predominate; presentation ranges from isolated fever to septic shock",
    "Recurrent or persistent bacteremia points at an undrained collection or an obstructed system, not at the wrong antibiotic"
  ],
  dx: [
    "Identify and image the source early — obstructive uropathy, cholangitis and abscess all need a procedure, not a longer course",
    "Routine repeat blood cultures are not required for uncomplicated gram-negative bacteremia, unlike S. aureus",
    "Susceptibilities drive de-escalation; know the local resistance pattern while empiric therapy is running",
    "Flag AmpC-inducible organisms (Enterobacter, Citrobacter freundii, Serratia) — susceptibility to third-generation cephalosporins on day 1 can be lost on therapy"
  ],
  tx: [
    "Source control is the intervention: relieve obstruction, drain the collection, remove the infected line",
    "Seven days is enough for most patients. BALANCE (NEJM, 3608 patients, 74 hospitals) found 7 days noninferior to 14 for 90-day mortality, 14.5% vs 16.1%",
    "Oral step-down once afebrile with source control, using a high-bioavailability agent (fluoroquinolone or trimethoprim-sulfamethoxazole) guided by susceptibility",
    "For AmpC risk organisms prefer cefepime or a carbapenem over ceftriaxone, and reserve carbapenems for ESBL producers"
  ],
  pearls: [
    "Fever persisting past 72 hours on an active agent means the source is not controlled — re-image rather than broaden",
    "BALANCE excluded S. aureus, Candida, endocarditis and severe immunocompromise; the 7-day result cannot be carried into those",
    "Oral step-down is not second-best therapy here, and it removes the line that causes the next bloodstream infection"
  ],
  refs: [
    { t: "BALANCE: 7 vs 14 days of antibiotics for bloodstream infection (NEJM)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa2404991" },
    { t: "IDSA: Guidance on Antimicrobial-Resistant Gram-Negative Infections", u: "https://www.idsociety.org/practice-guideline/amr-guidance/" },
    { t: "StatPearls: Gram-Negative Bacteremia", u: "https://www.ncbi.nlm.nih.gov/books/NBK559094/" }
  ]
},
{
  id: "id-catheter-related-bloodstream-infection",
  name: "Catheter-Related Bloodstream Infection",
  sec: "id",
  present: [
    "Fever or rigors in a patient with an intravascular catheter and no competing source, classically on flushing the line",
    "Exit-site infection is confined to within 2 cm of the insertion site; tunnel infection tracks along the subcutaneous course and is not salvageable",
    "Suppurative thrombophlebitis presents as persistent bacteremia with a palpable cord or extremity swelling"
  ],
  dx: [
    "Draw paired cultures — one through the catheter and one peripherally — before starting antibiotics",
    "Differential time to positivity of 2 hours or more in favor of the catheter draw supports the line as the source",
    "Quantitative catheter culture (a 3-fold or greater colony count from the line) is the alternative where available",
    "A single bottle growing coagulase-negative staphylococci is far more often contamination than infection — repeat before committing to therapy"
  ],
  tx: [
    "Remove the catheter for S. aureus, Pseudomonas aeruginosa, Candida, rapidly growing mycobacteria, tunnel infection, septic shock, or persistent bacteremia",
    "Long-term catheters infected with coagulase-negative staphylococci or Enterococcus may be salvaged with systemic therapy plus an antibiotic lock",
    "Duration runs from the first negative culture: roughly 5-7 days if the line is out and the organism is low-virulence, 14 days for most, 4-6 weeks for complicated disease",
    "Candidemia always means catheter removal plus an echinocandin plus a dilated ophthalmologic examination"
  ],
  pearls: [
    "Do not remove a functioning tunneled dialysis catheter reflexively for a single coagulase-negative staph — access is a finite resource",
    "Persistent bacteremia more than 72 hours after line removal means metastatic infection or septic thrombophlebitis; image the vessel",
    "An antibiotic lock treats the lumen only; it never replaces systemic therapy"
  ],
  refs: [
    { t: "IDSA: Intravascular Catheter-Related Infection Guidelines", u: "https://www.idsociety.org/practice-guideline/intravascular-catheter-related-infection/" },
    { t: "CDC: Central Line-Associated Bloodstream Infection (CLABSI)", u: "https://www.cdc.gov/infection-control/hcp/bsi/" },
    { t: "StatPearls: Central Line Associated Blood Stream Infections", u: "https://www.ncbi.nlm.nih.gov/books/NBK430891/" }
  ]
}
];
