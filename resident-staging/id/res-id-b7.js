/* Infectious Disease resident dataset — batch 7 of 12 (entries 31-35).
 * HIV opportunistic infection and prophylaxis; syphilis; gonorrhea and chlamydia.
 */
const RES_ID_B7 = [
{
  id: "id-hiv-opportunistic-infections",
  name: "Opportunistic Infections in Advanced HIV",
  sec: "id",
  present: [
    "The CD4 count predicts the differential: Pneumocystis and esophageal candidiasis below 200, toxoplasmosis and cryptococcus below 100, disseminated MAC and CMV below 50",
    "Pneumocystis pneumonia presents subacutely with exertional desaturation and a normal or near-normal chest examination",
    "Any new headache, confusion or focal deficit in advanced HIV is a central nervous system emergency until imaged"
  ],
  dx: [
    "Pneumocystis: diffuse bilateral interstitial infiltrates, raised LDH, and confirmation on induced sputum or bronchoalveolar lavage PCR",
    "Cryptococcus: serum cryptococcal antigen is highly sensitive; if positive, lumbar puncture WITH an opening pressure, which is a treatment measurement not just a diagnostic one",
    "Toxoplasmosis: multiple ring-enhancing lesions with a positive IgG; primary CNS lymphoma is the mimic, and EBV PCR on CSF plus thallium SPECT helps separate them",
    "CMV retinitis is diagnosed by a dilated ophthalmologic examination, not by a blood PCR"
  ],
  tx: [
    "Pneumocystis: trimethoprim-sulfamethoxazole for 21 days, with adjunctive corticosteroids when the room-air PaO2 is below 70 mmHg or the A-a gradient exceeds 35",
    "Cryptococcal meningitis: liposomal amphotericin plus flucytosine induction, then fluconazole, with serial therapeutic lumbar punctures for raised pressure",
    "Toxoplasmosis: pyrimethamine, sulfadiazine and leucovorin, with a clinical and radiographic response expected within two weeks",
    "Start prophylaxis by CD4 threshold: trimethoprim-sulfamethoxazole below 200 for Pneumocystis, and the same drug below 100 with positive Toxoplasma IgG"
  ],
  pearls: [
    "Timing of antiretroviral therapy is the judgment call: start within two weeks for most opportunistic infections, but DELAY in cryptococcal and tuberculous meningitis, where early initiation increases mortality through immune reconstitution",
    "Raised intracranial pressure, not the fungal burden, is what kills in cryptococcal meningitis — the repeated lumbar punctures are therapeutic",
    "Adjunctive steroids in Pneumocystis are given for HIV-associated disease; the benefit does not extend to non-HIV immunocompromised patients",
    "A negative serum cryptococcal antigen makes cryptococcal disease very unlikely and is a genuinely useful rule-out"
  ],
  refs: [
    { t: "HHS: Guidelines for Opportunistic Infections in Adults with HIV", u: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/whats-new" },
    { t: "CDC: HIV and Opportunistic Infections", u: "https://www.cdc.gov/hiv/hiv-basics/opportunistic-infections.html" },
    { t: "StatPearls: Pneumocystis jirovecii Pneumonia", u: "https://www.ncbi.nlm.nih.gov/books/NBK448171/" }
  ]
},
{
  id: "id-hiv-prep",
  name: "HIV Pre-Exposure Prophylaxis",
  sec: "id",
  present: [
    "Offered to anyone at substantial ongoing risk, and CDC advises informing all sexually active adults and adolescents that it exists",
    "Indications include a partner with HIV who is not virally suppressed, recent bacterial STI, inconsistent condom use with partners of unknown status, and sharing injection equipment",
    "Asking about risk without judgment is the clinical skill here; uptake fails on the conversation more often than on the pharmacology"
  ],
  dx: [
    "Confirm HIV-negative status immediately before starting — starting prophylaxis in undiagnosed infection is functional monotherapy and selects resistance",
    "Baseline renal function, hepatitis B surface antigen, and screening for syphilis, gonorrhea and chlamydia",
    "Repeat HIV testing every three months on oral prophylaxis, and screen for STIs at the same visits",
    "In anyone with symptoms suggesting acute HIV around initiation, use RNA rather than antibody testing"
  ],
  tx: [
    "Daily oral tenofovir disoproxil fumarate with emtricitabine is the standard, and is the only oral option with evidence for people who inject drugs and for receptive vaginal exposure",
    "Tenofovir alafenamide with emtricitabine is an alternative for men who have sex with men and transgender women, and is not indicated for receptive vaginal sex",
    "Long-acting injectable cabotegravir every two months is an option where adherence to a daily tablet is the barrier",
    "On-demand 2-1-1 dosing of tenofovir disoproxil with emtricitabine is an option for men who have sex with men, and is not validated for other groups"
  ],
  pearls: [
    "Hepatitis B matters twice: tenofovir treats it, and stopping prophylaxis in a patient with chronic HBV can precipitate a flare",
    "Breakthrough infection on prophylaxis is rare but presents atypically with a low viral load; test with RNA and get expert help before changing anything",
    "Prophylaxis does not protect against other sexually transmitted infections, and rates of those often rise, so the quarterly screening is not optional",
    "Injectable cabotegravir has a long pharmacologic tail; if it is stopped, oral cover is needed to avoid a period of subtherapeutic exposure"
  ],
  refs: [
    { t: "CDC: PrEP Clinical Practice Guideline", u: "https://www.cdc.gov/hivnexus/hcp/prep/" },
    { t: "HHS: HIV Prevention Guidelines", u: "https://clinicalinfo.hiv.gov/en/guidelines" },
    { t: "StatPearls: HIV Pre-Exposure Prophylaxis", u: "https://www.ncbi.nlm.nih.gov/books/NBK576387/" }
  ]
},
{
  id: "id-hiv-pep",
  name: "HIV Post-Exposure Prophylaxis - Occupational & Non-Occupational",
  sec: "id",
  present: [
    "A time-critical presentation: percutaneous injury, mucosal splash, sexual exposure or shared injection equipment",
    "Risk depends on the fluid, the route and the source's viral load; a source who is virally suppressed transmits at effectively zero",
    "The commonest failure is delay, because the patient did not know prophylaxis existed or the department did not have a pathway"
  ],
  dx: [
    "Baseline HIV test on the exposed person — but do NOT let the result delay the first dose",
    "Test the source where possible, including a rapid HIV test, hepatitis B surface antigen and hepatitis C antibody",
    "Baseline renal and hepatic function, pregnancy test, and screening for other sexually transmitted infections after a sexual exposure",
    "Repeat HIV testing at 4-6 weeks and 12 weeks after exposure, using a fourth-generation assay"
  ],
  tx: [
    "Start within hours. Prophylaxis is recommended up to 72 hours after exposure and the benefit falls steeply with every hour of delay",
    "Standard regimen is tenofovir with emtricitabine plus an integrase inhibitor, dolutegravir or raltegravir, for 28 days",
    "Address hepatitis B at the same visit: vaccine and immunoglobulin as indicated by the source and the exposed person's immunity",
    "After sexual assault, add empiric STI treatment and emergency contraception, and connect the patient to support services"
  ],
  pearls: [
    "Beyond 72 hours prophylaxis is not recommended — at that point the conversation becomes testing, and offering pre-exposure prophylaxis for the future",
    "Anyone presenting for post-exposure prophylaxis is by definition at risk; transition to pre-exposure prophylaxis at the end of the 28 days should be discussed at the first visit",
    "Do not wait for source testing to give the first dose; stopping later is easy, and hours lost are not recoverable",
    "Completion rates are poor without follow-up — arrange the next appointment before the patient leaves"
  ],
  refs: [
    { t: "CDC: Post-Exposure Prophylaxis (PEP)", u: "https://www.cdc.gov/hivnexus/hcp/pep/" },
    { t: "CDC: Occupational HIV Exposure Management", u: "https://www.cdc.gov/niosh/topics/bbp/" },
    { t: "StatPearls: HIV Post-Exposure Prophylaxis", u: "https://www.ncbi.nlm.nih.gov/books/NBK560990/" }
  ]
},
{
  id: "id-syphilis",
  name: "Syphilis - Staging, Serology & Treatment",
  sec: "id",
  present: [
    "Primary: a single painless indurated chancre with a clean base, which heals whether or not it is treated",
    "Secondary: a diffuse maculopapular rash involving palms and soles, mucous patches, condylomata lata and constitutional symptoms",
    "Tertiary and neurosyphilis: gummas, aortitis, tabes dorsalis, general paresis — but ocular and otic syphilis can occur at ANY stage"
  ],
  dx: [
    "Two-test serology is required. The traditional algorithm screens with a nontreponemal test (RPR or VDRL) and confirms with a treponemal test; the reverse-sequence algorithm does the opposite",
    "Nontreponemal titers track disease activity and are what you follow after treatment; treponemal tests stay positive for life",
    "Lumbar puncture for neurologic, ocular or otic symptoms, or for treatment failure — not routinely on titer alone",
    "Ocular symptoms demand a same-day ophthalmologic examination and are managed as neurosyphilis regardless of the CSF"
  ],
  tx: [
    "Early syphilis (primary, secondary, early latent): benzathine penicillin G 2.4 million units intramuscularly, one dose",
    "Late latent or unknown duration: benzathine penicillin G 2.4 million units weekly for three weeks",
    "Neurosyphilis, ocular or otic disease: aqueous crystalline penicillin G intravenously for 10-14 days — the intramuscular preparation does not reach the CSF",
    "In pregnancy, penicillin is the only acceptable treatment; desensitize a penicillin-allergic patient rather than substituting"
  ],
  pearls: [
    "Benzathine penicillin must never be given intravenously — it is a documented cause of cardiorespiratory arrest, and the syringe should be checked out loud",
    "Warn every patient about the Jarisch-Herxheimer reaction: fever, chills and myalgia within hours of treatment, which is not an allergy and does not contraindicate completion",
    "Follow nontreponemal titers at 6 and 12 months; a fourfold fall is the definition of response and a fourfold rise means reinfection or failure",
    "The prozone phenomenon can give a falsely negative RPR in secondary syphilis with very high titers — ask the laboratory to dilute"
  ],
  refs: [
    { t: "CDC: STI Treatment Guidelines - Syphilis", u: "https://www.cdc.gov/std/treatment-guidelines/syphilis.htm" },
    { t: "CDC: Syphilis Clinical Guidance", u: "https://www.cdc.gov/syphilis/hcp/clinical-guidance/" },
    { t: "StatPearls: Syphilis", u: "https://www.ncbi.nlm.nih.gov/books/NBK534780/" }
  ]
},
{
  id: "id-gonorrhea-chlamydia",
  name: "Gonorrhea & Chlamydia",
  sec: "id",
  present: [
    "Urethritis with discharge and dysuria in men; cervicitis with discharge, postcoital bleeding or pelvic pain in women",
    "Both are frequently asymptomatic, particularly chlamydia and particularly at rectal and pharyngeal sites — which is why screening rather than symptoms drives detection",
    "Complications declare late: pelvic inflammatory disease, epididymitis, and disseminated gonococcal infection with tenosynovitis and pustular lesions"
  ],
  dx: [
    "Nucleic acid amplification testing is the standard, on a first-catch urine or a vaginal swab, and it is more sensitive than culture",
    "Test all exposed sites. Urogenital testing alone misses the majority of rectal and pharyngeal infection in people who have receptive exposures",
    "Culture is still needed where treatment has failed, because susceptibility testing cannot be done on a NAAT",
    "Screen annually for chlamydia in sexually active women under 25 and in older women with risk factors, and test for HIV and syphilis at the same visit"
  ],
  tx: [
    "Uncomplicated gonorrhea: ceftriaxone 500 mg intramuscularly as a single dose, increased to 1 g if the patient weighs 150 kg or more",
    "Azithromycin is no longer routinely co-administered for gonorrhea; treat chlamydia only if it has not been excluded",
    "Chlamydia: doxycycline 100 mg twice daily for 7 days, which the 2021 CDC guideline prefers over single-dose azithromycin, particularly for rectal infection",
    "Treat partners from the preceding 60 days, and use expedited partner therapy where the law allows"
  ],
  pearls: [
    "Test of cure is not routine for urogenital infection, but IS recommended for pharyngeal gonorrhea and in pregnancy",
    "Rising cephalosporin resistance in Neisseria gonorrhoeae is the reason monotherapy dosing changed; treatment failure must be cultured and reported",
    "Doxycycline is contraindicated in pregnancy; azithromycin is the alternative for chlamydia there, with a test of cure",
    "Persistent urethritis after correct treatment suggests Mycoplasma genitalium or Trichomonas, not resistant gonorrhea"
  ],
  refs: [
    { t: "CDC: STI Treatment Guidelines - Gonococcal Infections", u: "https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm" },
    { t: "CDC: STI Treatment Guidelines - Chlamydial Infections", u: "https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm" },
    { t: "StatPearls: Gonorrhea", u: "https://www.ncbi.nlm.nih.gov/books/NBK558903/" }
  ]
}
];
