/* Infectious Disease resident dataset — batch 11 of 12 (entries 51-55).
 * Rickettsial disease; respiratory and vaccine-preventable viruses; stewardship.
 */
const RES_ID_B11 = [
{
  id: "id-rickettsial-disease",
  name: "Rickettsial Disease",
  sec: "id",
  present: [
    "Rocky Mountain spotted fever: abrupt fever, severe headache and myalgia, with a rash appearing two to five days in",
    "The rash starts on the wrists and ankles as blanching macules, becomes petechial, and spreads centripetally to involve palms and soles",
    "Up to 10-15% never develop a rash at all, and those patients have the worst outcomes because the diagnosis is made late or not at all"
  ],
  dx: [
    "This is a clinical diagnosis made on epidemiology and syndrome. Serology is retrospective and confirms what you already treated",
    "Supportive laboratory findings: thrombocytopenia, hyponatremia, raised transaminases, and a normal or low white count with a left shift",
    "Acute and convalescent IgG titers three to four weeks apart, or PCR and immunohistochemistry on a skin biopsy of the rash",
    "A tick bite is recalled by only about half of patients — its absence is not evidence against"
  ],
  tx: [
    "Doxycycline, started on suspicion, for all ages including young children and in pregnancy where the alternative is worse than the risk",
    "Treat for at least three days after defervescence, usually five to seven days in total",
    "Do not wait for confirmatory serology; mortality rises steeply when treatment starts after day five of illness",
    "Chloramphenicol is the only alternative and is inferior, with higher mortality in Rocky Mountain spotted fever"
  ],
  pearls: [
    "The classic triad of fever, rash and tick bite is present in a minority at first presentation — treating only complete presentations is how people die of this",
    "Doxycycline in children with suspected rickettsial disease is endorsed by both CDC and AAP; withholding it over dental staining has caused preventable deaths",
    "A sulfa drug can worsen rickettsial disease, so a patient started on trimethoprim-sulfamethoxazole who deteriorates deserves a second thought",
    "Failure to defervesce within 48 hours of doxycycline should make you question the diagnosis rather than the drug"
  ],
  refs: [
    { t: "CDC: Rocky Mountain Spotted Fever Clinical Guidance", u: "https://www.cdc.gov/rocky-mountain-spotted-fever/hcp/clinical-care/" },
    { t: "CDC: Tickborne Diseases of the United States", u: "https://www.cdc.gov/ticks/hcp/clinical-care/" },
    { t: "StatPearls: Rocky Mountain Spotted Fever", u: "https://www.ncbi.nlm.nih.gov/books/NBK430881/" }
  ]
},
{
  id: "id-influenza",
  name: "Influenza",
  sec: "id",
  present: [
    "Abrupt onset of fever, myalgia, headache and dry cough during a period of local circulation — the abruptness is the useful feature",
    "Older adults, young children and the immunosuppressed present atypically, sometimes with decompensation of a chronic condition and no fever",
    "Secondary bacterial pneumonia, classically S. aureus or S. pneumoniae, presents as a biphasic illness with worsening after initial improvement"
  ],
  dx: [
    "Rapid molecular assays are preferred over antigen tests, which lack sensitivity and produce false reassurance in a symptomatic patient during a wave",
    "Test when the result will change management: hospitalized patients, those at high risk of complications, and where a diagnosis changes infection control",
    "During peak local activity a compatible illness in a high-risk patient warrants treatment whether or not testing is available",
    "A negative rapid antigen test does not exclude influenza; repeat with a molecular assay if the answer matters"
  ],
  tx: [
    "Oseltamivir for anyone hospitalized, anyone with severe or progressive illness, and anyone at high risk, regardless of how long symptoms have been present",
    "Antivirals work best started within 48 hours, but in hospitalized patients treatment beyond that window still reduces mortality and should not be withheld",
    "Baloxavir is a single-dose oral alternative for uncomplicated influenza in outpatients who are not severely ill",
    "Annual vaccination remains the primary intervention and is safe in egg allergy, in pregnancy, and in almost every immunosuppressed patient"
  ],
  pearls: [
    "Do not withhold oseltamivir from a hospitalized patient because the 48-hour window has passed — that rule comes from outpatient trials",
    "A patient who improves and then deteriorates has bacterial superinfection until proven otherwise; add antibacterial cover and image",
    "Vaccination during hospitalization is a missed opportunity at almost every discharge; it is the single most effective thing in this entry",
    "Antiviral prophylaxis has a defined role in outbreaks in long-term care facilities and should be coordinated with public health"
  ],
  refs: [
    { t: "IDSA: Seasonal Influenza Guidelines", u: "https://www.idsociety.org/practice-guideline/influenza/" },
    { t: "CDC: Influenza Antiviral Medications", u: "https://www.cdc.gov/flu/hcp/antivirals/" },
    { t: "StatPearls: Influenza", u: "https://www.ncbi.nlm.nih.gov/books/NBK459363/" }
  ]
},
{
  id: "id-covid-19",
  name: "COVID-19 - Treatment & Prevention",
  sec: "id",
  present: [
    "Fever, cough, dyspnea, fatigue and loss of smell or taste, with a severity range from asymptomatic to critical illness",
    "Deterioration classically occurs in the second week, after the viral phase has given way to the inflammatory one",
    "Risk of severe disease tracks age, immunosuppression and comorbidity far more than initial symptom severity"
  ],
  dx: [
    "Nucleic acid amplification testing is the standard; antigen tests are less sensitive and a single negative in a symptomatic person should be repeated",
    "Pulse oximetry is the measurement that determines disposition; silent hypoxemia is real and the examination underestimates it",
    "Imaging is not needed to diagnose, and a chest CT should be reserved for a specific question such as pulmonary embolism",
    "Consider thromboembolism readily — the risk is elevated and the presentation overlaps entirely with the disease"
  ],
  tx: [
    "Outpatient, high risk, within five days of onset: nirmatrelvir-ritonavir. Check every co-medication, because ritonavir is a potent CYP3A4 inhibitor and the interaction list is long",
    "Remdesivir is an alternative for outpatients unable to take nirmatrelvir-ritonavir, and is used in hospitalized patients requiring oxygen",
    "Dexamethasone for hospitalized patients requiring supplemental oxygen, from the RECOVERY trial; it does NOT help and may harm those not requiring oxygen",
    "Add an immunomodulator such as tocilizumab or baricitinib for rapidly escalating oxygen requirement or systemic inflammation"
  ],
  pearls: [
    "Steroids are for the inflammatory phase. Giving dexamethasone to a patient on room air in the first days treats the wrong phase and prolongs viral shedding",
    "Nirmatrelvir-ritonavir interacts with statins, calcineurin inhibitors, many antiarrhythmics and several anticoagulants — a pharmacist review before the first dose is worth the delay",
    "Vaccination status modifies risk substantially and is part of the history, not an afterthought",
    "Persistent symptoms beyond twelve weeks are a recognized syndrome with no antiviral answer; the value is in rehabilitation and in not repeating investigations"
  ],
  refs: [
    { t: "IDSA: COVID-19 Treatment Guidelines", u: "https://www.idsociety.org/practice-guideline/covid-19-guideline-treatment-and-management/" },
    { t: "CDC: COVID-19 Clinical Care", u: "https://www.cdc.gov/covid/hcp/clinical-care/" },
    { t: "NIH: COVID-19 Treatment Guidelines", u: "https://www.covid19treatmentguidelines.nih.gov/" }
  ]
},
{
  id: "id-vaccine-preventable-viral",
  name: "Measles, Mumps, Varicella & Other Vaccine-Preventable Viral Disease",
  sec: "id",
  present: [
    "Measles: three to four days of fever, cough, coryza and conjunctivitis, then Koplik spots, then a cephalocaudal maculopapular rash",
    "Mumps: parotitis, with orchitis, aseptic meningitis and pancreatitis as the complications that bring patients in",
    "Varicella: crops of lesions at different stages simultaneously — macule, papule, vesicle and crust together, which is the diagnostic feature"
  ],
  dx: [
    "Suspected measles is a public health emergency: notify immediately and place the patient in airborne isolation before confirming anything",
    "Measles is confirmed by RT-PCR from a throat or nasopharyngeal swab plus urine, with IgM serology; IgM can be falsely negative in the first 72 hours of rash",
    "Varicella and zoster are confirmed by PCR of vesicle fluid, which has largely replaced Tzanck and direct fluorescent antibody",
    "Take the immunization history in every rash illness, and remember that two documented doses of a measles-containing vaccine make measles very unlikely but not impossible"
  ],
  tx: [
    "Measles is supportive, with vitamin A for children, which reduces mortality; there is no antiviral",
    "Post-exposure prophylaxis for measles: vaccine within 72 hours, or immunoglobulin within six days for infants, pregnant people and the immunocompromised",
    "Varicella in adults, the immunocompromised or pregnancy: acyclovir, started within 24 hours of the rash where possible",
    "Recombinant zoster vaccine is not live and is given to immunocompromised adults, unlike the older live attenuated preparation"
  ],
  pearls: [
    "Measles is among the most transmissible infections known and remains airborne in a room for up to two hours after the patient leaves — the isolation decision is made at triage, not after the test",
    "A patient with measles is infectious from four days before the rash to four days after, which is why contact tracing reaches back further than people expect",
    "Disseminated zoster, or zoster in more than two dermatomes, means immunosuppression and warrants airborne plus contact precautions and a search for the cause",
    "Nonimmune healthcare workers exposed to measles or varicella are excluded from work for defined periods; occupational health needs telling on the same day"
  ],
  refs: [
    { t: "CDC: Measles Clinical Diagnosis and Treatment", u: "https://www.cdc.gov/measles/hcp/clinical-overview/" },
    { t: "CDC: Chickenpox (Varicella) for Healthcare Professionals", u: "https://www.cdc.gov/chickenpox/hcp/" },
    { t: "CDC: ACIP Vaccine Recommendations", u: "https://www.cdc.gov/vaccines/hcp/acip-recs/" }
  ]
},
{
  id: "id-antimicrobial-stewardship",
  name: "Antimicrobial Stewardship",
  sec: "id",
  present: [
    "Roughly a third of inpatient antibiotic use is unnecessary or inappropriate, and the commonest single error is treating asymptomatic bacteriuria",
    "The harms are concrete and land on the individual patient: C. difficile, acute kidney injury, allergy, and selection of resistant organisms",
    "Stewardship is a required element of hospital accreditation, not an optional service line"
  ],
  dx: [
    "Take good cultures before the first dose; the whole de-escalation pathway depends on having an organism",
    "Interpret every positive culture against the clinical picture — colonization, contamination and infection look identical on a report",
    "The unit antibiogram, not a textbook, should drive empiric choice, and it should be reviewed annually",
    "Ask whether a positive test represents disease before treating it, particularly for urine, sputum, wound swabs and C. difficile NAAT"
  ],
  tx: [
    "The four moments: does this patient need antibiotics, have I taken cultures, can I narrow or stop, and how long should the course be",
    "Prospective audit with feedback and formulary restriction with preauthorization are the two core interventions with the best evidence",
    "Build in an antibiotic time-out at 48-72 hours, when cultures are back and the diagnosis has firmed up",
    "Shorter is almost always as good: 5 days for community-acquired pneumonia, 7 for hospital-acquired pneumonia and for most gram-negative bacteremia, 5-7 for intra-abdominal infection after source control"
  ],
  pearls: [
    "Intravenous to oral conversion is the highest-yield and least contentious intervention available — it shortens stays and removes the line that causes the next bloodstream infection",
    "Penicillin allergy de-labeling is a stewardship intervention: the label pushes patients onto worse, broader and more expensive drugs",
    "Duration is where most excess lies. Almost every recent trial that shortened a course found noninferiority",
    "Do not escalate for a fever alone in a patient who is otherwise improving; fever lags and re-imaging usually answers the question better than a broader agent"
  ],
  refs: [
    { t: "IDSA/SHEA: Antimicrobial Stewardship Program Guidelines", u: "https://www.idsociety.org/practice-guideline/implementing-an-asp/" },
    { t: "CDC: Core Elements of Hospital Antibiotic Stewardship", u: "https://www.cdc.gov/antibiotic-use/hcp/core-elements/" },
    { t: "CDC: Antibiotic Prescribing and Use", u: "https://www.cdc.gov/antibiotic-use/hcp/" }
  ]
}
];
