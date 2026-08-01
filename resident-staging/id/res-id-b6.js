/* Infectious Disease resident dataset — batch 6 of 12 (entries 26-30).
 * Genitourinary; HIV diagnosis and antiretroviral therapy.
 */
const RES_ID_B6 = [
{
  id: "id-complicated-uti-pyelonephritis",
  name: "Complicated UTI & Pyelonephritis",
  sec: "id",
  present: [
    "Fever, flank pain and costovertebral angle tenderness, with or without the lower tract symptoms of frequency and dysuria",
    "Complicated means the host or the tract is abnormal: obstruction, stone, catheter, neurogenic bladder, transplant, pregnancy, or any male patient",
    "Nausea and vomiting matter practically — they decide whether oral therapy is even possible"
  ],
  dx: [
    "Urinalysis and urine culture BEFORE the first dose; a culture drawn afterwards frequently answers nothing",
    "Blood cultures in severe illness or where the source is uncertain; they are positive in roughly a quarter of pyelonephritis",
    "Image with CT when there is no improvement by 48-72 hours, or when obstruction, stone, abscess or emphysematous change is plausible",
    "In men, consider prostatic involvement — it changes both the agent, which must penetrate prostate, and the duration"
  ],
  tx: [
    "Outpatient pyelonephritis: a fluoroquinolone where local E. coli resistance is under 10%, otherwise a single parenteral dose of ceftriaxone followed by oral therapy on susceptibility",
    "Inpatient: ceftriaxone for community-acquired disease, escalating to an antipseudomonal agent or a carbapenem for healthcare exposure or known resistant organisms",
    "Seven days is enough with a fluoroquinolone; 10-14 days for beta-lactams; de-escalate the moment susceptibilities return",
    "An obstructed, infected collecting system needs decompression the same day — nephrostomy or stent. Antibiotics alone will not save it"
  ],
  pearls: [
    "Nitrofurantoin and fosfomycin do not achieve renal tissue concentrations and must never be used for pyelonephritis, only for cystitis",
    "Persistent fever beyond 72 hours means abscess, obstruction or a resistant organism — re-image rather than broaden blindly",
    "Emphysematous pyelonephritis in a poorly controlled diabetic is a surgical and urologic emergency, not a medical one",
    "In pregnancy, pyelonephritis warrants admission and parenteral therapy, and fluoroquinolones are avoided"
  ],
  refs: [
    { t: "IDSA Practice Guidelines", u: "https://www.idsociety.org/practice-guideline/practice-guidelines/" },
    { t: "CDC: Urinary Tract Infection", u: "https://www.cdc.gov/uti/about/" },
    { t: "StatPearls: Acute Pyelonephritis", u: "https://www.ncbi.nlm.nih.gov/books/NBK519537/" }
  ]
},
{
  id: "id-asymptomatic-bacteriuria-cauti",
  name: "Asymptomatic Bacteriuria & Catheter-Associated UTI",
  sec: "id",
  present: [
    "Asymptomatic bacteriuria is a positive urine culture in a patient with no urinary symptoms — it is a laboratory finding, not a disease",
    "It is extremely common: rising with age, near-universal with a long-term indwelling catheter, and the default state in many nursing home residents",
    "Catheter-associated UTI requires symptoms — fever, suprapubic or flank pain, new delirium with no other explanation — plus a catheter and a positive culture"
  ],
  dx: [
    "The single most useful intervention is not sending the culture. Do not send urine from a patient with no urinary symptoms",
    "Pyuria does not distinguish bacteriuria from infection; almost every catheterized patient has it",
    "Cloudy or malodorous urine is not an indication to culture or to treat",
    "If a catheterized patient does need a culture, replace the catheter first and sample from the new one, not from the drainage bag"
  ],
  tx: [
    "Screen and treat asymptomatic bacteriuria in only two groups: pregnancy, and before a urologic procedure expected to breach the mucosa",
    "Do not treat it in the elderly, in diabetes, in spinal cord injury, in the catheterized, or in renal transplant recipients beyond the early post-transplant period",
    "For genuine CAUTI, remove the catheter if at all possible, or replace it if it has been in place more than two weeks, and treat 7 days if the response is prompt",
    "Reassess the indication for every catheter every day; duration of catheterization is the dominant risk factor"
  ],
  pearls: [
    "Treating asymptomatic bacteriuria is among the commonest antibiotic misuses in hospital medicine and is a leading driver of C. difficile in the elderly",
    "Delirium alone in an older patient with bacteriuria is not a urinary tract infection — look for the real cause; the bacteriuria was there before and will be there after",
    "Antibiotics do not sterilize a catheterized bladder; they select a resistant organism to replace the current one",
    "Screening pregnant patients IS worthwhile, because untreated bacteriuria there causes pyelonephritis and preterm birth"
  ],
  refs: [
    { t: "IDSA: Asymptomatic Bacteriuria Guidelines (2019)", u: "https://www.idsociety.org/practice-guideline/asymptomatic-bacteriuria/" },
    { t: "CDC: Catheter-Associated Urinary Tract Infection", u: "https://www.cdc.gov/infection-control/hcp/cauti/" },
    { t: "StatPearls: Asymptomatic Bacteriuria", u: "https://www.ncbi.nlm.nih.gov/books/NBK441848/" }
  ]
},
{
  id: "id-acute-hiv-infection",
  name: "Acute HIV Infection & Diagnostic Testing",
  sec: "id",
  present: [
    "A mononucleosis-like illness two to four weeks after exposure: fever, pharyngitis, generalized lymphadenopathy, myalgia and a maculopapular rash",
    "Painful mucocutaneous ulcers are the feature that best separates it from mononucleosis and are easily missed unless the mouth is examined",
    "Many patients have no illness at all, which is why testing has to be driven by risk and by policy rather than by symptoms"
  ],
  dx: [
    "Start with a fourth-generation HIV-1/2 antigen-antibody combination immunoassay, which detects p24 antigen and shortens the window",
    "A reactive screen goes to an HIV-1/HIV-2 antibody differentiation assay, not straight to a diagnosis",
    "Where the differentiation assay is negative or indeterminate and acute infection is suspected, HIV-1 RNA is the test that settles it",
    "Antibody may be entirely negative in acute infection — a negative antibody test does not exclude it, and RNA must be sent"
  ],
  tx: [
    "Start antiretroviral therapy immediately, ideally the same day, without waiting for the genotype or the CD4 count",
    "Send a baseline resistance genotype before or at initiation; transmitted resistance is why the sample is taken now, even though the result comes later",
    "Screen at the same visit for hepatitis B and C, syphilis, gonorrhea and chlamydia, and tuberculosis",
    "Partner notification and public health reporting are part of treatment here — viral loads in acute infection are extremely high and transmission risk is at its peak"
  ],
  pearls: [
    "Consider acute HIV in any adult with an unexplained febrile mononucleosis-like illness, and order the RNA rather than relying on the antibody",
    "The very high viral load of acute infection makes this the period when onward transmission is most likely, so speed matters epidemiologically as well as clinically",
    "A patient taking pre-exposure prophylaxis who seroconverts may have a blunted, atypical picture and a low viral load; test with RNA",
    "Do not diagnose HIV on a screening assay alone — false positives occur, and the confirmatory algorithm exists for a reason"
  ],
  refs: [
    { t: "CDC: HIV Testing Laboratory Algorithm", u: "https://www.cdc.gov/hiv/testing/laboratory-tests.html" },
    { t: "HHS: Adult and Adolescent ARV Guidelines", u: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/whats-new" },
    { t: "StatPearls: Acute HIV Infection", u: "https://www.ncbi.nlm.nih.gov/books/NBK533218/" }
  ]
},
{
  id: "id-antiretroviral-initiation",
  name: "Antiretroviral Therapy - Initiation & Regimen Selection",
  sec: "id",
  present: [
    "Everyone with HIV should be offered treatment, at any CD4 count — START and TEMPRANO settled that immediate therapy beats deferral",
    "Rapid or same-day initiation improves linkage and time to suppression and is now the standard approach",
    "The clinical questions at the first visit are pregnancy, hepatitis B status, renal function, opportunistic infection and what else the patient takes"
  ],
  dx: [
    "Baseline: HIV RNA, CD4 count, resistance genotype, hepatitis B and C serology, renal and hepatic panels, lipids and glucose",
    "HLA-B*5701 before any abacavir-containing regimen — a positive result absolutely contraindicates it",
    "Screen for latent tuberculosis, and for cryptococcal antigen where the CD4 count is below 100",
    "Pregnancy test in anyone of childbearing potential, because it influences the regimen"
  ],
  tx: [
    "First-line is an integrase inhibitor based regimen: bictegravir with tenofovir alafenamide and emtricitabine, or dolutegravir with two nucleosides",
    "Two-drug dolutegravir plus lamivudine is appropriate for selected treatment-naive patients, but not with hepatitis B coinfection, a viral load above 500,000, or an unavailable genotype",
    "Where an opportunistic infection is present, start antiretrovirals within two weeks in most cases — but delay in cryptococcal meningitis and tuberculous meningitis, where early initiation increases mortality from immune reconstitution",
    "Monitor viral load at 4-8 weeks then every 3-6 months; the goal is undetectable by 24 weeks"
  ],
  pearls: [
    "Undetectable equals untransmittable — HPTN 052 and the PARTNER studies established there is effectively no sexual transmission with sustained suppression, and telling patients so changes lives",
    "Tenofovir and emtricitabine treat hepatitis B as well; stopping the regimen in a coinfected patient can trigger a severe hepatitis flare",
    "Integrase inhibitors chelate with polyvalent cations — separate them from calcium, magnesium, iron and antacids or absorption fails",
    "Weight gain is real with integrase inhibitors, particularly with tenofovir alafenamide, and is worth raising before it is discovered"
  ],
  refs: [
    { t: "HHS: Adult and Adolescent Antiretroviral Guidelines", u: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/whats-new" },
    { t: "CDC: HIV Treatment", u: "https://www.cdc.gov/hiv/treatment/" },
    { t: "StatPearls: Antiretroviral Therapy", u: "https://www.ncbi.nlm.nih.gov/books/NBK513308/" }
  ]
},
{
  id: "id-hiv-virologic-failure",
  name: "HIV Virologic Failure & Resistance Testing",
  sec: "id",
  present: [
    "Virologic failure is a confirmed viral load above 200 copies/mL after 24 weeks on therapy, or rebound after documented suppression",
    "A single detectable value between 50 and 200 is usually a blip — repeat it before doing anything else",
    "The commonest cause by a wide margin is not resistance; it is adherence, cost, interactions or a supply interruption"
  ],
  dx: [
    "Ask about adherence without judgment, and specifically about missed refills, cost, side effects and substance use, before ordering anything",
    "Review every co-medication and supplement — polyvalent cations, rifamycins, anticonvulsants and proton pump inhibitors all cause failure by interaction",
    "Send the genotype WHILE the patient is still taking the failing regimen, or within four weeks of stopping: off drug, resistant virus is outgrown by wild type and the mutations disappear from the assay",
    "Integrase resistance is not included in a standard genotype and has to be requested explicitly"
  ],
  tx: [
    "Do not change the regimen until you know whether the problem is adherence or resistance; switching for nonadherence just burns a class",
    "A new regimen should contain at least two, preferably three, fully active agents chosen on the cumulative resistance history, not on the latest genotype alone",
    "Never add a single active drug to a failing regimen — that is functional monotherapy and it generates the next mutation",
    "Where resistance is extensive, newer classes such as the capsid inhibitor lenacapavir and the attachment inhibitor fostemsavir provide options; involve an experienced clinician"
  ],
  pearls: [
    "Resistance is archived: a mutation documented once is present for life even if a later genotype does not show it, so the cumulative history matters more than the current result",
    "A patient with a rising viral load who insists on perfect adherence is often taking the drug with an antacid or an iron supplement",
    "Persistent low-level viremia below 200 does not usually equal failure or resistance and is not by itself a reason to switch",
    "Rifampin and most integrase and protease inhibitors collide badly — rifabutin exists for exactly this problem"
  ],
  refs: [
    { t: "HHS: Management of Virologic Failure", u: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/virologic-failure" },
    { t: "IAS-USA: HIV Drug Resistance Mutations", u: "https://www.iasusa.org/resources/hiv-drug-resistance-mutations/" },
    { t: "StatPearls: HIV Drug Resistance", u: "https://www.ncbi.nlm.nih.gov/books/NBK560718/" }
  ]
}
];
