/* Infectious Disease resident dataset — batch 3 of 12 (entries 11-15).
 * Mycobacterial disease; native joint septic arthritis.
 */
const RES_ID_B3 = [
{
  id: "id-pulmonary-tuberculosis",
  name: "Pulmonary Tuberculosis - Diagnosis & Treatment",
  sec: "id",
  present: [
    "Cough for more than two to three weeks with fever, drenching night sweats and weight loss; hemoptysis in advanced disease",
    "Reactivation disease favors the upper lobes and cavitates; primary disease gives a mid or lower zone infiltrate with hilar adenopathy",
    "Epidemiology carries weight: birth or residence in a high-incidence country, incarceration, homelessness, HIV, TNF inhibitors, silicosis"
  ],
  dx: [
    "Airborne isolation first, on suspicion, before any test returns",
    "Three sputum specimens for AFB smear and mycobacterial culture; culture is the reference standard and is needed for full drug-susceptibility testing",
    "Nucleic acid amplification (Xpert MTB/RIF) on at least one specimen — same-day result and it detects rifampin resistance, but it never replaces culture",
    "Test everyone with TB for HIV, and get a baseline LFT, creatinine, visual acuity and color vision before treatment"
  ],
  tx: [
    "Standard regimen: rifampin, isoniazid, pyrazinamide and ethambutol for 2 months, then rifampin and isoniazid for 4 months",
    "A 4-month rifapentine-moxifloxacin regimen (Study 31/ACTG A5349, NEJM 2021) is noninferior for drug-susceptible pulmonary TB and is endorsed by both WHO and CDC",
    "Directly observed therapy is the standard of care, not an optional extra — it is the single strongest predictor of completion",
    "Pyridoxine with isoniazid to prevent peripheral neuropathy; drop ethambutol once susceptibility to the other three is confirmed"
  ],
  pearls: [
    "Isolation stops on three negative smears plus clinical improvement plus adequate therapy — not on the smear alone",
    "Rifampin induces CYP3A4 hard: check every co-medication, and expect to switch antiretrovirals or use rifabutin",
    "A negative smear does not exclude TB; roughly half of culture-confirmed pulmonary TB is smear-negative",
    "Paradoxical worsening early in treatment is usually a reaction, not failure — but exclude a second diagnosis before calling it that"
  ],
  refs: [
    { t: "CDC: Treatment of Tuberculosis Disease", u: "https://www.cdc.gov/tb/treatment/" },
    { t: "Study 31/A5349: Four-Month Rifapentine Regimens (NEJM 2021)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa2033400" },
    { t: "WHO: Consolidated Guidelines on Tuberculosis Treatment", u: "https://www.who.int/publications/i/item/9789240048126" }
  ]
},
{
  id: "id-latent-tuberculosis",
  name: "Latent Tuberculosis Infection",
  sec: "id",
  present: [
    "By definition asymptomatic — found by screening, not by a patient complaining",
    "Test only those you intend to treat: recent contacts, people from high-incidence countries, HIV, and anyone starting a TNF inhibitor, other biologic or transplant immunosuppression",
    "Reactivation risk is roughly 5-10% lifetime, front-loaded into the first two years after infection, and far higher with HIV or TNF blockade"
  ],
  dx: [
    "Interferon-gamma release assay or tuberculin skin test; IGRA is preferred with prior BCG vaccination and where a return visit is unlikely",
    "Active disease MUST be excluded before treatment — symptom review plus a chest radiograph in everyone, plus sputum if either is abnormal",
    "TST cut-offs vary by risk: 5 mm for HIV, contacts and immunosuppressed; 10 mm for other risk groups; 15 mm for people with no risk factors",
    "Neither test distinguishes latent from active infection, and neither is a test of cure"
  ],
  tx: [
    "Rifamycin-based short courses are now preferred (CDC 2020): weekly isoniazid plus rifapentine for 12 doses (3HP), daily rifampin for 4 months (4R), or daily isoniazid-rifampin for 3 months",
    "Six to nine months of daily isoniazid remains an option where a rifamycin cannot be used, but completion rates are markedly worse",
    "Choose the regimen around interactions: rifamycins are potent inducers and will collide with antiretrovirals, anticoagulants and contraception",
    "Monitor clinically each month; routine LFTs only with liver disease, alcohol use, pregnancy or HIV"
  ],
  pearls: [
    "Treating latent infection without excluding active disease is functional monotherapy and manufactures resistance — the chest radiograph is not optional",
    "A positive test in someone with no risk factor is more likely a false positive than infection; that is why untargeted screening does harm",
    "Warn patients that rifampin turns secretions orange and will stain contact lenses, or they stop the drug",
    "Neither IGRA nor TST reverts reliably after treatment; do not repeat them to confirm success"
  ],
  refs: [
    { t: "CDC: Latent TB Infection Treatment Regimens", u: "https://www.cdc.gov/tb/treatment/latent-tuberculosis-infection.html" },
    { t: "ATS/IDSA/CDC: Treatment of Latent TB Infection", u: "https://www.idsociety.org/practice-guideline/tuberculosis-latent/" },
    { t: "StatPearls: Latent Tuberculosis", u: "https://www.ncbi.nlm.nih.gov/books/NBK538267/" }
  ]
},
{
  id: "id-drug-resistant-tuberculosis",
  name: "Drug-Resistant Tuberculosis",
  sec: "id",
  present: [
    "Suspect it with prior TB treatment, treatment interruption, contact with a resistant case, or origin in a high-MDR-burden region",
    "Failure to convert sputum culture by two months, or clinical deterioration on a standard regimen, is resistance until disproven",
    "Definitions: MDR is resistance to isoniazid and rifampin; pre-XDR adds fluoroquinolone resistance; XDR adds resistance to a Group A drug"
  ],
  dx: [
    "Rapid molecular drug-susceptibility testing on the first specimen — Xpert MTB/RIF for rifampin, Xpert MTB/XDR for isoniazid, fluoroquinolones and injectables",
    "Send phenotypic susceptibility on the culture isolate as well; molecular tests detect known mutations only",
    "Repeat cultures monthly on treatment; conversion is the objective measure of response",
    "Manage with an experienced center and the health department — this is not a solo undertaking"
  ],
  tx: [
    "WHO recommends BPaLM — bedaquiline, pretomanid, linezolid and moxifloxacin — for 6 months in MDR and rifampin-resistant TB, in preference to 9-month or 18-month regimens",
    "The regimen is all-oral and injectable-free, which removes the aminoglycoside ototoxicity and nephrotoxicity that defined older treatment",
    "Monitor the QT interval: bedaquiline and moxifloxacin both prolong it, and the combination compounds",
    "Linezolid causes myelosuppression and peripheral neuropathy on prolonged use — check counts, and the neuropathy may not fully reverse"
  ],
  pearls: [
    "Never add a single drug to a failing regimen — that is precisely how the next resistance is generated",
    "Directly observed therapy is mandatory here, and contact investigation is a public health obligation, not a courtesy",
    "Fluoroquinolones given empirically for a community pneumonia can partially treat unrecognized TB and select fluoroquinolone resistance",
    "Culture conversion at two months predicts outcome better than any symptom score"
  ],
  refs: [
    { t: "WHO: Drug-Resistant TB Treatment (2022 update)", u: "https://www.who.int/publications/i/item/9789240063129" },
    { t: "CDC: Drug-Resistant Tuberculosis", u: "https://www.cdc.gov/tb/hcp/clinical-overview/drug-resistant-tuberculosis.html" },
    { t: "StatPearls: Multidrug-Resistant Tuberculosis", u: "https://www.ncbi.nlm.nih.gov/books/NBK507845/" }
  ]
},
{
  id: "id-nontuberculous-mycobacteria",
  name: "Nontuberculous Mycobacterial Disease",
  sec: "id",
  present: [
    "Nodular bronchiectatic disease: chronic cough in an older, slender, often nonsmoking woman, with right middle lobe and lingular involvement",
    "Fibrocavitary disease: upper lobe cavities in an older man with COPD or prior tuberculosis, resembling reactivation TB",
    "Disseminated Mycobacterium avium complex is a disease of advanced HIV with a CD4 count under 50, presenting with fever, weight loss and cytopenias"
  ],
  dx: [
    "The 2020 ATS/IDSA criteria need all three: compatible symptoms, compatible imaging, and microbiology",
    "Microbiologic criteria means two separate expectorated sputum cultures growing the same species, or one bronchoalveolar lavage, or a lung biopsy",
    "Speciate every isolate — Mycobacterium abscessus, M. avium complex and M. kansasii have completely different regimens and prognoses",
    "Test macrolide and amikacin susceptibility; for M. abscessus, inducible macrolide resistance via erm(41) needs extended incubation to detect"
  ],
  tx: [
    "MAC nodular bronchiectatic disease: azithromycin, rifampin and ethambutol three times weekly",
    "MAC cavitary or severe disease: the same three drugs daily, with amikacin considered for the first months",
    "Continue for 12 months beyond culture conversion, which usually means 15-18 months of therapy in total",
    "Amikacin liposome inhalation suspension is licensed for refractory MAC that has not converted on guideline therapy"
  ],
  pearls: [
    "Isolating an NTM is not a diagnosis — these organisms are environmental and contaminate, which is why two positive sputums are required",
    "Never treat with a macrolide alone; macrolide resistance in MAC is the single change that most worsens outcome",
    "M. abscessus is closer to a chronic suppressive problem than a curable infection; involve a specialist center from the start",
    "Not every patient meeting criteria needs treatment — mild nodular bronchiectatic disease can be watched, and the regimen is long and toxic"
  ],
  refs: [
    { t: "ATS/ERS/ESCMID/IDSA: Nontuberculous Mycobacterial Pulmonary Disease (2020)", u: "https://www.idsociety.org/practice-guideline/nontuberculous-mycobacteria/" },
    { t: "CDC: Nontuberculous Mycobacteria", u: "https://www.cdc.gov/nontuberculous-mycobacteria/about/" },
    { t: "StatPearls: Atypical Mycobacterial Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK551583/" }
  ]
},
{
  id: "id-septic-arthritis",
  name: "Native Joint Septic Arthritis",
  sec: "id",
  present: [
    "Acute monoarthritis with a hot, swollen, exquisitely painful joint and severe pain on passive range of motion; the knee is involved in about half",
    "Inability to bear weight, or a child holding a hip in flexion and external rotation, is the presentation that must not be sat on",
    "Disseminated gonococcal infection is the exception: migratory polyarthralgia, tenosynovitis and pustular skin lesions in a young sexually active adult"
  ],
  dx: [
    "Arthrocentesis before antibiotics — the single decision that determines whether this is ever diagnosed properly",
    "Synovial fluid white count is typically above 50,000 with more than 90% neutrophils, but there is real overlap with crystal disease at every threshold",
    "Send Gram stain (positive in roughly half), culture, cell count AND crystals on every aspirate",
    "Blood cultures in all cases; they are positive in about half and sometimes are the only growth"
  ],
  tx: [
    "Joint drainage is treatment, not diagnostics: serial aspiration, arthroscopic washout or open drainage depending on joint and response",
    "Empiric vancomycin, adding ceftriaxone or an antipseudomonal agent where gram-negative or gonococcal infection is plausible",
    "Narrow on culture and treat 2-4 weeks intravenously, longer where there is adjacent osteomyelitis",
    "Gonococcal arthritis responds quickly to ceftriaxone and rarely needs surgical drainage; treat the partner and screen for other STIs"
  ],
  pearls: [
    "Crystals in the fluid do not exclude infection — gout and septic arthritis coexist, and finding urate has sent patients home to lose a joint",
    "A hip or shoulder can be septic with an unimpressive external exam; image and aspirate under guidance rather than relying on inspection",
    "Every hour of delay to drainage costs cartilage; this is a same-day problem, not a next-morning one",
    "In a prosthetic joint the diagnostic thresholds are far lower, and the pathway is different — do not apply native joint cut-offs"
  ],
  refs: [
    { t: "IDSA Practice Guidelines", u: "https://www.idsociety.org/practice-guideline/practice-guidelines/" },
    { t: "CDC: Gonococcal Infections Treatment Guidelines", u: "https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm" },
    { t: "StatPearls: Septic Arthritis", u: "https://www.ncbi.nlm.nih.gov/books/NBK538176/" }
  ]
}
];
