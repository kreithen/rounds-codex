/* Infectious Disease resident dataset — batch 10 of 12 (entries 46-50).
 * Endemic mycoses; travel, tropical and vector-borne disease.
 */
const RES_ID_B10 = [
{
  id: "id-endemic-mycoses",
  name: "Endemic Mycoses - Histoplasmosis, Blastomycosis, Coccidioidomycosis",
  sec: "id",
  present: [
    "Geography is the diagnosis: histoplasmosis in the Ohio and Mississippi river valleys, blastomycosis in those regions and around the Great Lakes, coccidioidomycosis in the southwestern United States",
    "All three cause a subacute pneumonia that looks like community-acquired pneumonia that failed to respond to antibiotics, or like malignancy",
    "Coccidioidomycosis (Valley fever) often adds erythema nodosum and arthralgia; blastomycosis adds verrucous skin lesions and bone disease"
  ],
  dx: [
    "Ask about exposure: caves and bird or bat droppings for histoplasmosis, soil disruption and dust storms for coccidioidomycosis, waterways and wooded soil for blastomycosis",
    "Urine and serum antigen testing is the most useful test for disseminated histoplasmosis and cross-reacts with blastomycosis, which is a feature rather than a flaw if interpreted knowingly",
    "Coccidioidomycosis is diagnosed serologically; complement fixation titers track disease activity and a rising titer signals dissemination",
    "Histology and culture remain definitive — narrow-based budding yeast in histoplasmosis, broad-based budding in blastomycosis, spherules in coccidioidomycosis"
  ],
  tx: [
    "Mild to moderate pulmonary disease in an immunocompetent host often needs observation only, particularly coccidioidomycosis",
    "Itraconazole is the azole of choice for histoplasmosis and blastomycosis; fluconazole for coccidioidomycosis",
    "Severe or disseminated disease starts with liposomal amphotericin B, stepping down to an azole once improving",
    "Coccidioidal meningitis requires lifelong fluconazole — relapse after stopping is the rule, not the exception"
  ],
  pearls: [
    "Check itraconazole levels: absorption is erratic, it needs acid, and proton pump inhibitors abolish it",
    "Screen for disseminated disease in advanced HIV with a CD4 count below 150 living in an endemic area — histoplasmosis there presents as fever, cytopenias and hepatosplenomegaly, not as pneumonia",
    "Pregnancy in the third trimester and African or Filipino ancestry both markedly increase the risk of disseminated coccidioidomycosis",
    "A solitary pulmonary nodule in an endemic region is as likely to be a healed granuloma as a cancer; the exposure history is worth taking before the biopsy"
  ],
  refs: [
    { t: "IDSA: Histoplasmosis Guidelines", u: "https://www.idsociety.org/practice-guideline/histoplasmosis/" },
    { t: "IDSA: Coccidioidomycosis Guidelines", u: "https://www.idsociety.org/practice-guideline/coccidioidomycosis/" },
    { t: "CDC: Fungal Diseases Clinical Guidance", u: "https://www.cdc.gov/fungal/hcp/clinical-care/" }
  ]
},
{
  id: "id-fever-returning-traveler",
  name: "Fever in the Returning Traveler",
  sec: "id",
  present: [
    "The history does most of the work: exact countries and rural versus urban, dates of travel, activities, exposures, and what prophylaxis was actually taken",
    "The incubation period is the strongest discriminator — under 10 days suggests dengue, rickettsia or an arbovirus; over 21 days effectively excludes those and leaves malaria, typhoid, tuberculosis and hepatitis",
    "Malaria is the diagnosis that kills within days and must be excluded first in anyone returning from an endemic area"
  ],
  dx: [
    "Thick and thin blood films, repeated every 12-24 hours up to three times before malaria is excluded; a rapid diagnostic test alongside but not instead",
    "Full blood count with differential, transaminases, urinalysis and blood cultures for everyone",
    "Eosinophilia points at helminths and is not a feature of malaria, dengue or typhoid; thrombocytopenia is common to malaria, dengue and rickettsial disease",
    "Take a hemorrhagic fever exposure history early — travel to an outbreak area with a compatible illness changes the isolation requirement immediately"
  ],
  tx: [
    "Treat malaria as an emergency the moment it is confirmed; do not wait for species identification to start therapy in the severely ill",
    "Empiric therapy is otherwise avoided; the diagnosis is usually reachable within 24 hours and empiric antibiotics blur it",
    "Notify public health for typhoid, malaria, viral hemorrhagic fever and any suspected outbreak-associated illness",
    "Give the returning traveler with dengue clear return advice about the warning signs, because deterioration happens after the fever settles"
  ],
  pearls: [
    "A negative single blood film does not exclude malaria — parasitemia is cyclical and three negatives over 48 hours are needed",
    "Prophylaxis taken correctly reduces but does not eliminate the risk, and most travelers who develop malaria were not fully adherent",
    "Do not anchor on the tropical diagnoses; returning travelers also get pneumonia, pyelonephritis and influenza, which are commoner than any of the above",
    "Ask about layovers and about visiting friends and relatives — that group travels to higher-risk settings and takes prophylaxis least often"
  ],
  refs: [
    { t: "CDC Yellow Book: Travel-Related Infectious Diseases", u: "https://wwwnc.cdc.gov/travel/page/yellowbook-home" },
    { t: "CDC: Fever in Returned Travelers", u: "https://wwwnc.cdc.gov/travel/yellowbook/2024/posttravel-evaluation/fever-in-the-returned-traveler" },
    { t: "StatPearls: Fever in the Returning Traveler", u: "https://www.ncbi.nlm.nih.gov/books/NBK560594/" }
  ]
},
{
  id: "id-malaria",
  name: "Malaria",
  sec: "id",
  present: [
    "Fever, rigors, headache and myalgia in anyone who has been in an endemic area within the last year",
    "The textbook cyclical fever is late and unreliable; the presentation is usually just an undifferentiated febrile illness",
    "Severe falciparum malaria means impaired consciousness, seizures, respiratory distress, acidosis, acute kidney injury, hypoglycemia, severe anemia or parasitemia above about 5%"
  ],
  dx: [
    "Thick and thin films are the standard: thick for detection, thin for speciation and parasite density",
    "Report the parasitemia as a percentage; it drives the severity classification and is followed during treatment",
    "Rapid diagnostic tests are useful for speed and where microscopy is unavailable, but they do not quantify and can miss low parasitemia",
    "Three negative films over 48 hours are required to exclude the diagnosis, not one"
  ],
  tx: [
    "Severe malaria: intravenous artesunate, which is superior to quinine and reduced mortality in the SEAQUAMAT and AQUAMAT trials",
    "Uncomplicated falciparum: artemether-lumefantrine, or atovaquone-proguanil, as a complete oral course",
    "Plasmodium vivax and ovale need radical cure of liver hypnozoites with primaquine or tafenoquine after treating the blood stage, or they relapse",
    "Test G6PD activity before primaquine or tafenoquine — both cause severe hemolysis in deficiency"
  ],
  pearls: [
    "Falciparum malaria can kill a healthy adult within 24-48 hours; this is an admit-and-treat-now diagnosis, not an outpatient one",
    "Post-artesunate delayed hemolysis occurs one to three weeks after treatment and needs a planned check of the hemoglobin, or the patient returns anemic and unexplained",
    "Parasitemia can rise in the first hours of effective treatment; do not switch drugs on that alone",
    "Species matters for relapse: only vivax and ovale form hypnozoites, and only they need the second drug"
  ],
  refs: [
    { t: "CDC: Malaria Diagnosis and Treatment", u: "https://www.cdc.gov/malaria/hcp/clinical-guidance/" },
    { t: "WHO: Guidelines for Malaria", u: "https://www.who.int/publications/i/item/guidelines-for-malaria" },
    { t: "StatPearls: Malaria", u: "https://www.ncbi.nlm.nih.gov/books/NBK551711/" }
  ]
},
{
  id: "id-dengue-chikungunya-zika",
  name: "Dengue, Chikungunya & Zika",
  sec: "id",
  present: [
    "All three are transmitted by Aedes mosquitoes, share a geography and frequently circulate together, so the clinical separation is imperfect",
    "Dengue: abrupt high fever, severe myalgia, retro-orbital pain and rash, with leukopenia and thrombocytopenia",
    "Chikungunya is dominated by severe and often persistent polyarthralgia; Zika is typically mild, with rash and conjunctivitis, and matters most in pregnancy"
  ],
  dx: [
    "Dengue in the first week: NS1 antigen and RT-PCR. After about five days: IgM serology",
    "Zika: RT-PCR on blood and urine early; serology cross-reacts extensively with dengue and needs confirmatory testing",
    "Follow the hematocrit and platelet count in dengue serially — a rising hematocrit with a falling platelet count signals plasma leakage",
    "Learn the dengue warning signs: abdominal pain or tenderness, persistent vomiting, clinical fluid accumulation, mucosal bleeding, lethargy and liver enlargement"
  ],
  tx: [
    "All three are managed supportively; there is no specific antiviral in routine use",
    "Use acetaminophen, and AVOID nonsteroidal anti-inflammatory drugs and aspirin in suspected dengue because of the bleeding risk",
    "The critical phase of dengue needs careful, titrated crystalloid — both under-resuscitation and fluid overload kill",
    "In pregnancy with possible Zika exposure, arrange serial fetal ultrasound and counsel on sexual transmission and conception timing"
  ],
  pearls: [
    "Dengue deteriorates as the fever falls, around days three to seven — a patient who feels better and then worsens is entering the critical phase, not recovering",
    "Second infection with a different dengue serotype carries the higher risk of severe disease, which is why prior dengue history matters",
    "Chikungunya arthralgia can persist for months and is a rheumatologic referral, not a treatment failure",
    "Zika is sexually transmissible and persists in semen far longer than in blood; the counseling is about conception, not only mosquitoes"
  ],
  refs: [
    { t: "CDC: Dengue Clinical Guidance", u: "https://www.cdc.gov/dengue/hcp/clinical-signs/" },
    { t: "CDC: Zika Virus for Healthcare Providers", u: "https://www.cdc.gov/zika/hcp/" },
    { t: "WHO: Dengue Guidelines for Diagnosis and Treatment", u: "https://www.who.int/publications/i/item/9789241547871" }
  ]
},
{
  id: "id-lyme-tickborne",
  name: "Lyme Disease & Other Tick-Borne Illness",
  sec: "id",
  present: [
    "Early localized Lyme disease: erythema migrans, an expanding erythematous patch appearing days to a month after a bite, often without central clearing",
    "Early disseminated disease: multiple secondary lesions, facial nerve palsy (sometimes bilateral), lymphocytic meningitis, or carditis with atrioventricular block",
    "Anaplasmosis and babesiosis share the same tick and the same season — think of them together with fever, cytopenias and transaminitis after exposure"
  ],
  dx: [
    "Erythema migrans is a CLINICAL diagnosis. Do not send serology — it is often negative this early and a negative result wrongly reassures",
    "For later manifestations use two-tier serology: an enzyme immunoassay followed by an immunoblot, or the modified two-EIA algorithm",
    "Anaplasmosis: look for morulae in neutrophils, with leukopenia, thrombocytopenia and raised transaminases; confirm by PCR",
    "Babesiosis: intraerythrocytic parasites on the thin film with hemolysis; parasitemia is quantified and guides severity, and it is severe in the asplenic"
  ],
  tx: [
    "Early Lyme disease: doxycycline for 10 days, or amoxicillin or cefuroxime where doxycycline is unsuitable",
    "Lyme meningitis or carditis with high-grade block: intravenous ceftriaxone, then oral to complete the course",
    "Lyme arthritis: 28 days of oral doxycycline or amoxicillin, with a second course or a rheumatologic opinion if it persists",
    "Anaplasmosis and ehrlichiosis: doxycycline, with a response expected within 48 hours. Babesiosis: atovaquone plus azithromycin, or clindamycin plus quinine for severe disease"
  ],
  pearls: [
    "Doxycycline is the correct drug for tick-borne disease in children of any age — CDC and AAP support it, and the old tooth-staining concern does not apply to short courses",
    "A prompt response to doxycycline is itself diagnostic in rickettsial and anaplasmal disease; failure to improve in 48 hours should make you doubt the diagnosis",
    "Coinfection is common because one tick carries several organisms; a patient not responding as expected may have babesiosis alongside Lyme disease",
    "Persistent nonspecific symptoms after treated Lyme disease do not represent ongoing infection, and prolonged antibiotics have been shown not to help and to cause harm"
  ],
  refs: [
    { t: "IDSA/AAN/ACR: Lyme Disease Guidelines (2020)", u: "https://www.idsociety.org/practice-guideline/lyme-disease/" },
    { t: "CDC: Tickborne Diseases Clinical Guidance", u: "https://www.cdc.gov/ticks/hcp/clinical-care/" },
    { t: "StatPearls: Lyme Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK431066/" }
  ]
}
];
