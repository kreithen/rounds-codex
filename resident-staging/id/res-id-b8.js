/* Infectious Disease resident dataset — batch 8 of 12 (entries 36-40).
 * Genital ulcer disease and pelvic infection; the immunocompromised host.
 */
const RES_ID_B8 = [
{
  id: "id-genital-ulcer-herpes",
  name: "Genital Ulcer Disease & Genital Herpes",
  sec: "id",
  present: [
    "Herpes simplex: grouped vesicles breaking down into shallow, painful ulcers, recurring in the same distribution",
    "A primary herpetic episode is far worse than a recurrence — extensive bilateral ulceration, tender inguinal nodes, fever, and sometimes urinary retention",
    "The pain is the discriminator: a syphilitic chancre is painless, indurated and clean; chancroid is painful, ragged and purulent; lymphogranuloma venereum gives a trivial ulcer with dramatic adenopathy"
  ],
  dx: [
    "PCR from the lesion is the test for herpes simplex and is substantially more sensitive than viral culture",
    "Type the virus — HSV-2 recurs far more often than HSV-1, and that prognosis is what the patient actually wants to know",
    "Test every patient with a genital ulcer for syphilis and HIV, whatever the ulcer looks like; more than one infection is common",
    "Type-specific serology has a limited role and should not be used to screen asymptomatic people — the false-positive rate at low prevalence causes real harm"
  ],
  tx: [
    "First episode: acyclovir, valacyclovir or famciclovir for 7-10 days, started on clinical suspicion rather than waiting for the PCR",
    "Recurrences: episodic therapy started within 24 hours by the patient, using a supply given in advance",
    "Daily suppressive therapy for frequent recurrences, and it reduces transmission to a susceptible partner",
    "Counsel on asymptomatic shedding, disclosure, and the specific risk in pregnancy — this consultation is mostly counseling"
  ],
  pearls: [
    "A negative culture does not exclude herpes; if a culture was sent and came back negative, send a PCR",
    "Genital herpes near term is an obstetric emergency: neonatal herpes carries high mortality, and suppressive therapy from 36 weeks plus cesarean delivery for active lesions is the pathway",
    "Recurrent painful ulcers with negative HSV testing should prompt thought about Behcet disease and fixed drug eruption",
    "Lymphogranuloma venereum presents in men who have sex with men as proctocolitis, not as an ulcer, and needs 21 days of doxycycline"
  ],
  refs: [
    { t: "CDC: STI Treatment Guidelines - Genital Herpes", u: "https://www.cdc.gov/std/treatment-guidelines/herpes.htm" },
    { t: "CDC: STI Treatment Guidelines - Genital Ulcers", u: "https://www.cdc.gov/std/treatment-guidelines/genital-ulcers.htm" },
    { t: "StatPearls: Herpes Simplex Virus", u: "https://www.ncbi.nlm.nih.gov/books/NBK430780/" }
  ]
},
{
  id: "id-pid-vaginitis",
  name: "Pelvic Inflammatory Disease, Vaginitis & Bacterial Vaginosis",
  sec: "id",
  present: [
    "Pelvic inflammatory disease: lower abdominal pain with cervical motion, uterine or adnexal tenderness in a sexually active person",
    "Bacterial vaginosis: thin gray discharge with a fishy odor and no inflammation — itch and soreness point elsewhere",
    "Candidal vulvovaginitis: intense pruritus with thick white discharge and vulvar erythema; trichomoniasis gives frothy discharge and sometimes a strawberry cervix"
  ],
  dx: [
    "Treat pelvic inflammatory disease on minimum criteria alone. The threshold is deliberately low because the cost of missing it is infertility and ectopic pregnancy",
    "Bacterial vaginosis by Amsel criteria: thin homogeneous discharge, pH above 4.5, clue cells on saline microscopy, and a positive whiff test — three of four suffice",
    "Trichomonas by nucleic acid amplification, which is far more sensitive than the wet mount that still misses most cases",
    "Test for gonorrhea, chlamydia and HIV in anyone with pelvic inflammatory disease, and image for tubo-ovarian abscess if there is a mass or a poor response"
  ],
  tx: [
    "Outpatient pelvic inflammatory disease: ceftriaxone 500 mg intramuscularly once, plus doxycycline 100 mg twice daily and metronidazole 500 mg twice daily, both for 14 days",
    "The 2021 CDC guideline added metronidazole to the standard outpatient regimen to cover anaerobes",
    "Bacterial vaginosis: oral metronidazole 500 mg twice daily for 7 days, or intravaginal metronidazole or clindamycin",
    "Trichomoniasis in women: metronidazole 500 mg twice daily for 7 days, which the 2021 guideline prefers over a single 2 g dose"
  ],
  pearls: [
    "Admit for tubo-ovarian abscess, pregnancy, inability to tolerate oral therapy, severe illness, or failure of outpatient treatment at 72 hours",
    "Bacterial vaginosis is not a sexually transmitted infection in the classical sense, but it recurs in more than half within a year and increases the acquisition risk for others",
    "Treat sexual partners of trichomoniasis; not doing so is the main reason it comes back",
    "An intrauterine device does not have to be removed for pelvic inflammatory disease if the patient is improving on treatment"
  ],
  refs: [
    { t: "CDC: STI Treatment Guidelines - Pelvic Inflammatory Disease", u: "https://www.cdc.gov/std/treatment-guidelines/pid.htm" },
    { t: "CDC: STI Treatment Guidelines - Bacterial Vaginosis", u: "https://www.cdc.gov/std/treatment-guidelines/bv.htm" },
    { t: "StatPearls: Pelvic Inflammatory Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK499959/" }
  ]
},
{
  id: "id-febrile-neutropenia",
  name: "Febrile Neutropenia",
  sec: "id",
  present: [
    "A single oral temperature of 38.3 C, or 38.0 C sustained for an hour, with an absolute neutrophil count below 500 or expected to fall below it",
    "Neutropenia removes the findings you would normally look for — no infiltrate on the film, no pus in the wound, no peritonism over an abscess",
    "Fever may be the only sign, and in a profoundly neutropenic patient its absence does not exclude infection"
  ],
  dx: [
    "Two sets of blood cultures, including one from every lumen of any indwelling catheter as well as a peripheral draw",
    "Chest radiograph, urinalysis and culture, and a careful examination of skin, catheter exit sites, perineum and mouth",
    "Do not perform a digital rectal examination or place a rectal thermometer — the mucosal breach causes bacteremia",
    "Risk stratify with the MASCC score: 21 or above identifies a low-risk group who may be managed orally, sometimes as outpatients"
  ],
  tx: [
    "Empiric antipseudomonal beta-lactam monotherapy within one hour of presentation: cefepime, piperacillin-tazobactam or meropenem",
    "Add vancomycin only for specific indications — hemodynamic instability, suspected catheter infection, skin or soft tissue infection, known MRSA colonization, or severe mucositis",
    "Low-risk patients may take oral ciprofloxacin plus amoxicillin-clavulanate, provided follow-up and a route back are genuinely in place",
    "Continue until the neutrophil count recovers; add empiric mold-active antifungal therapy for fever persisting 4-7 days in prolonged neutropenia"
  ],
  pearls: [
    "Time to first antibiotic is the quality measure that tracks mortality — the dose goes before the imaging and before the consult",
    "Do not stop antibiotics simply because the fever settled if the patient is still neutropenic; the marrow, not the temperature chart, drives the decision",
    "Granulocyte colony-stimulating factor is not routine treatment for established febrile neutropenia; its role is prophylaxis",
    "Typhlitis (neutropenic enterocolitis) presents as right lower quadrant pain and is a CT diagnosis managed medically, not surgically, in most cases"
  ],
  refs: [
    { t: "IDSA: Fever and Neutropenia Guidelines", u: "https://www.idsociety.org/practice-guideline/fever-and-neutropenia/" },
    { t: "NCCN: Prevention and Treatment of Cancer-Related Infections", u: "https://www.nccn.org/guidelines/category_3" },
    { t: "StatPearls: Neutropenic Fever", u: "https://www.ncbi.nlm.nih.gov/books/NBK541102/" }
  ]
},
{
  id: "id-solid-organ-transplant-infection",
  name: "Solid Organ Transplant Infection - Timeline & Prophylaxis",
  sec: "id",
  present: [
    "The time since transplant is the single most useful piece of history and narrows the differential more than any test",
    "First month: donor-derived infection, and the surgical and nosocomial problems of any major operation — wound, line, aspiration, C. difficile",
    "One to six months: the opportunistic window — cytomegalovirus, Pneumocystis, Nocardia, Aspergillus, BK virus, reactivated tuberculosis"
  ],
  dx: [
    "Beyond six months, most recipients get community-acquired infections; the exception is the patient with chronic rejection on heavy immunosuppression, who stays in the opportunistic window",
    "Think in terms of the net state of immunosuppression, not the drug list alone — it includes rejection episodes, neutropenia, metabolic factors and viral coinfection",
    "Fever and inflammatory markers are blunted; a normal white count and a low CRP do not reassure",
    "Image early and biopsy readily; the differential includes rejection, drug toxicity and malignancy alongside infection"
  ],
  tx: [
    "Trimethoprim-sulfamethoxazole prophylaxis covers Pneumocystis and adds protection against Nocardia, Toxoplasma and Listeria",
    "Cytomegalovirus prophylaxis or preemptive monitoring is chosen by donor and recipient serostatus, with the donor-positive, recipient-negative pairing at highest risk",
    "Reducing immunosuppression is part of treating a serious infection, and needs the transplant team, not a unilateral decision",
    "Screen and treat latent tuberculosis before transplant wherever the timeline allows"
  ],
  pearls: [
    "Azoles inhibit CYP3A4 and will send tacrolimus and cyclosporine levels through the roof — reduce the calcineurin inhibitor and monitor before, not after, starting an azole",
    "Live vaccines are contraindicated after transplant, which is why the pre-transplant vaccination visit matters so much",
    "A pulmonary nodule in a transplant recipient is infection until proven otherwise, and warrants tissue rather than empiric cycling of antibiotics",
    "BK virus nephropathy in a kidney recipient is managed by reducing immunosuppression, not by an antiviral"
  ],
  refs: [
    { t: "AST Infectious Diseases Community of Practice Guidelines", u: "https://www.myast.org/clinical-practice-guidelines" },
    { t: "CDC: Transplant Safety", u: "https://www.cdc.gov/transplant-safety/about/" },
    { t: "StatPearls: Infections in Solid Organ Transplant Recipients", u: "https://www.ncbi.nlm.nih.gov/books/NBK553166/" }
  ]
},
{
  id: "id-hct-infection",
  name: "Hematopoietic Cell Transplant Infection",
  sec: "id",
  present: [
    "Pre-engraftment (roughly the first 30 days): profound neutropenia and mucositis, giving bacterial bloodstream infection, Candida and herpes simplex reactivation",
    "Early post-engraftment (day 30 to 100): impaired cellular immunity, so cytomegalovirus, invasive aspergillosis and Pneumocystis dominate, compounded by acute graft-versus-host disease",
    "Late (beyond day 100): encapsulated bacteria, varicella zoster and continuing mold risk, driven largely by chronic graft-versus-host disease and its treatment"
  ],
  dx: [
    "Autologous recipients recover immunity in months; allogeneic recipients on immunosuppression for graft-versus-host disease may never fully do so, and that distinction drives the whole risk assessment",
    "Cytomegalovirus is managed either by weekly quantitative PCR surveillance with preemptive treatment, or by prophylaxis",
    "Galactomannan and beta-D-glucan support a mold diagnosis but neither is sufficient alone; chest CT and bronchoalveolar lavage are the substantive tests",
    "Consider noninfectious mimics constantly: engraftment syndrome, drug fever, sinusoidal obstruction syndrome and graft-versus-host disease all present as fever"
  ],
  tx: [
    "Standard prophylaxis during neutropenia: a fluoroquinolone antibacterial, an antifungal (fluconazole, or mold-active where aspergillus risk is high), and acyclovir for herpes simplex and varicella zoster",
    "Letermovir prophylaxis prevents clinically significant cytomegalovirus infection in seropositive allogeneic recipients and has largely displaced preemptive therapy in that group",
    "Trimethoprim-sulfamethoxazole for Pneumocystis, started after engraftment and continued at least six months and for as long as immunosuppression continues",
    "Revaccinate from around 6-12 months — transplant erases prior immunity, and this is routinely forgotten at handover to primary care"
  ],
  pearls: [
    "The phase, the graft source and whether the patient has graft-versus-host disease tell you more about the likely organism than any individual symptom",
    "Chronic graft-versus-host disease produces functional asplenia; encapsulated organism sepsis can be fulminant and patients need standing advice about fever",
    "Ganciclovir and valganciclovir cause myelosuppression, which in a fresh graft is a serious problem — letermovir does not, which is much of its appeal",
    "Never give a live vaccine to a patient on immunosuppression, and check the timeline against the schedule before the yellow fever or MMR question arises"
  ],
  refs: [
    { t: "CDC/IDSA/ASTCT: Preventing Infections in HCT Recipients", u: "https://www.cdc.gov/infection-control/hcp/hematopoietic-cell-transplant/" },
    { t: "ASTCT Clinical Practice Guidelines", u: "https://www.astct.org/practice-resources/practice-guidelines" },
    { t: "StatPearls: Hematopoietic Stem Cell Transplantation", u: "https://www.ncbi.nlm.nih.gov/books/NBK536951/" }
  ]
}
];
