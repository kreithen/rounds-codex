/* Infectious Disease resident dataset — batch 5 of 12 (entries 21-25).
 * Gastrointestinal and hepatic.
 */
const RES_ID_B5 = [
{
  id: "id-c-difficile",
  name: "Clostridioides difficile Infection",
  sec: "id",
  present: [
    "Three or more unformed stools in 24 hours, with recent antibiotics, healthcare exposure, advanced age or proton pump inhibitor use",
    "Fulminant disease means hypotension, shock, ileus or megacolon — and paradoxically the diarrhea may stop as the colon becomes atonic",
    "Leukocytosis can be striking; an unexplained white count above 15,000 in an inpatient should prompt the question"
  ],
  dx: [
    "Test only patients with unexplained, new-onset, clinically significant diarrhea. Do not send formed stool",
    "Use a two-step algorithm: glutamate dehydrogenase plus toxin enzyme immunoassay, or NAAT followed by toxin",
    "NAAT alone cannot separate infection from colonization — roughly 1 in 20 adults carries the organism and far more after hospitalization",
    "Never repeat the test as a test of cure; the assay stays positive for weeks after clinical resolution"
  ],
  tx: [
    "Fidaxomicin is preferred over vancomycin for an initial episode in the 2021 IDSA/SHEA focused update; oral vancomycin 125 mg four times daily for 10 days remains an acceptable alternative",
    "Metronidazole is no longer first-line and should be reserved for when neither preferred agent is available",
    "Fulminant disease: oral vancomycin 500 mg four times daily plus intravenous metronidazole, with vancomycin per rectum if ileus, and an early surgical opinion",
    "Recurrence: fidaxomicin, or a vancomycin taper and pulse; bezlotoxumab to reduce further recurrence; fecal microbiota transplantation after multiple recurrences"
  ],
  pearls: [
    "Stop the inciting antibiotic if there is any way to do so — that single act does more than the choice between fidaxomicin and vancomycin",
    "Intravenous vancomycin does not treat this; the drug has to be in the lumen",
    "A patient whose diarrhea stops while they get sicker is developing toxic megacolon, not improving",
    "Do not treat a positive NAAT in a patient without diarrhea — that is colonization, and treating it does harm"
  ],
  refs: [
    { t: "IDSA/SHEA: C. difficile Guidelines (2021 Focused Update)", u: "https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/" },
    { t: "CDC: C. difficile Infection", u: "https://www.cdc.gov/c-diff/hcp/clinical-overview/" },
    { t: "StatPearls: Clostridioides difficile Infection", u: "https://www.ncbi.nlm.nih.gov/books/NBK431054/" }
  ]
},
{
  id: "id-intra-abdominal-infection",
  name: "Complicated Intra-Abdominal Infection & Peritonitis",
  sec: "id",
  present: [
    "Localized or generalized peritonism with fever and leukocytosis, from perforation, appendicitis, diverticulitis, cholecystitis or an anastomotic leak",
    "Secondary peritonitis follows a breach of the gut and is polymicrobial; primary (spontaneous bacterial) peritonitis occurs in ascites and is usually a single organism",
    "In the elderly and immunosuppressed the abdomen can be deceptively soft with advanced intra-abdominal sepsis"
  ],
  dx: [
    "Contrast-enhanced CT of the abdomen and pelvis is the study that both diagnoses and plans the drainage",
    "Blood cultures before antibiotics, and culture whatever is obtained at operation or drainage",
    "Spontaneous bacterial peritonitis is diagnosed on ascitic fluid with a neutrophil count of 250 cells/mm3 or more; inoculate culture bottles at the bedside",
    "Do not culture drains that have been in place for days — they grow the ward flora"
  ],
  tx: [
    "Source control is the treatment: drain the collection, divert or resect the perforation, remove the infected foreign body",
    "Community-acquired: ceftriaxone plus metronidazole, or ertapenem. Healthcare-associated: piperacillin-tazobactam or a carbapenem, guided by prior isolates",
    "STOP-IT (NEJM 2015) showed a fixed 4-day course after adequate source control was noninferior to treating until clinical resolution",
    "Spontaneous bacterial peritonitis takes cefotaxime plus albumin, then secondary prophylaxis for life or until transplant"
  ],
  pearls: [
    "Antibiotics do not drain abscesses; a patient not improving at 72 hours needs re-imaging, not a broader spectrum",
    "The short-course result depends entirely on the words 'adequate source control' — without it, no duration is correct",
    "Empiric antifungal cover is not routine; reserve it for upper gastrointestinal perforation, recurrent leaks and the severely immunocompromised",
    "Enterococcal cover is not needed in community-acquired disease, but does matter in healthcare-associated and post-operative infection"
  ],
  refs: [
    { t: "IDSA: Complicated Intra-abdominal Infection Guidelines", u: "https://www.idsociety.org/practice-guideline/intra-abdominal-infection/" },
    { t: "STOP-IT: Trial of Short-Course Antimicrobial Therapy (NEJM 2015)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa1411162" },
    { t: "StatPearls: Peritonitis", u: "https://www.ncbi.nlm.nih.gov/books/NBK430743/" }
  ]
},
{
  id: "id-infectious-diarrhea",
  name: "Infectious Diarrhea & Foodborne Illness",
  sec: "id",
  present: [
    "Separate watery from inflammatory: watery is small bowel, voluminous and afebrile; inflammatory is colonic, with fever, blood, mucus and tenesmus",
    "The incubation period narrows the differential — hours points at preformed toxin (S. aureus, Bacillus cereus), days at an invasive organism",
    "Ask about the exposure: undercooked meat, unpasteurized dairy, shellfish, poultry, travel, a common meal, animal contact"
  ],
  dx: [
    "Most acute watery diarrhea in an immunocompetent adult is self-limited and needs no testing at all",
    "Test for severe illness, bloody stool, fever, immunocompromise, or where public health reporting matters",
    "Always test bloody diarrhea specifically for Shiga toxin and O157 — the management hinges on it",
    "Multiplex PCR panels are sensitive and will detect organisms that are colonizing rather than causing; interpret against the clinical picture"
  ],
  tx: [
    "Rehydration is the treatment for almost everyone; oral rehydration solution beats water and beats most interventions",
    "Avoid empiric antibiotics in community-acquired diarrhea — they shorten little, prolong Salmonella shedding, and select resistance",
    "Azithromycin is the agent of choice for severe travelers' diarrhea and for Campylobacter, where fluoroquinolone resistance is now common",
    "Loperamide is reasonable in watery diarrhea without fever, and is contraindicated in inflammatory disease and suspected STEC"
  ],
  pearls: [
    "Never give antibiotics for suspected Shiga toxin-producing E. coli — they increase the risk of hemolytic uremic syndrome",
    "New-onset diarrhea after 3 days in hospital is C. difficile or a medication, not community-acquired gastroenteritis; stool pathogen panels are near-useless there",
    "Reactive arthritis, Guillain-Barre after Campylobacter, and HUS after STEC are the sequelae worth warning about",
    "Persistent diarrhea beyond 14 days moves the differential to parasites, post-infectious irritable bowel and inflammatory bowel disease"
  ],
  refs: [
    { t: "IDSA: Infectious Diarrhea Guidelines", u: "https://www.idsociety.org/practice-guideline/infectious-diarrhea/" },
    { t: "CDC: Foodborne Illness", u: "https://www.cdc.gov/foodborne-germs/about/" },
    { t: "StatPearls: Acute Diarrhea", u: "https://www.ncbi.nlm.nih.gov/books/NBK448082/" }
  ]
},
{
  id: "id-chronic-hepatitis-b",
  name: "Chronic Hepatitis B",
  sec: "id",
  present: [
    "Almost always asymptomatic; found on screening, on abnormal transaminases, or when immunosuppression is planned",
    "Risk of chronicity is age-dependent — over 90% in perinatal infection, under 5% in immunocompetent adults",
    "Cirrhosis and hepatocellular carcinoma are the outcomes that matter, and HCC can occur without cirrhosis"
  ],
  dx: [
    "Interpret the panel together: HBsAg, anti-HBs, anti-HBc (total and IgM), HBeAg and anti-HBe, HBV DNA and ALT",
    "Phase is defined by the combination of HBeAg status, DNA level and ALT, and it determines whether to treat or monitor",
    "Stage fibrosis noninvasively with elastography or serum panels before deciding",
    "Test every HBsAg-positive patient for hepatitis D, and for HIV and hepatitis C"
  ],
  tx: [
    "Entecavir, tenofovir disoproxil fumarate or tenofovir alafenamide are first-line; all have high barriers to resistance",
    "Treat for cirrhosis at any detectable DNA, and in noncirrhotic patients on the combination of DNA level, ALT and fibrosis stage",
    "Hepatocellular carcinoma surveillance with six-monthly ultrasound in cirrhosis, and in defined noncirrhotic groups by age and ethnicity",
    "Prophylax before immunosuppression: anyone HBsAg-positive, and anyone anti-HBc-positive who is receiving rituximab or comparable B-cell depletion"
  ],
  pearls: [
    "Isolated anti-HBc positivity is not 'past infection, no action' when rituximab is planned — reactivation there can be fulminant and it is entirely preventable",
    "Entecavir is a poor choice in a patient with prior lamivudine exposure because of cross-resistance",
    "Tenofovir alafenamide is preferred over the disoproxil salt where renal function or bone density is a concern",
    "Treatment suppresses rather than cures; stopping without a defined endpoint risks a severe flare"
  ],
  refs: [
    { t: "AASLD: Hepatitis B Guidance", u: "https://www.aasld.org/practice-guidelines/chronic-hepatitis-b" },
    { t: "CDC: Hepatitis B Clinical Care", u: "https://www.cdc.gov/hepatitis-b/hcp/" },
    { t: "StatPearls: Hepatitis B", u: "https://www.ncbi.nlm.nih.gov/books/NBK555945/" }
  ]
},
{
  id: "id-hepatitis-c",
  name: "Hepatitis C - Diagnosis & Direct-Acting Antiviral Therapy",
  sec: "id",
  present: [
    "Acute infection is usually silent; the majority of untreated adults progress to chronic infection",
    "Most patients are identified by screening — CDC recommends one-time testing for all adults 18 and over, and repeat testing with ongoing risk",
    "Extrahepatic disease is easy to miss: mixed cryoglobulinemia, membranoproliferative glomerulonephritis, porphyria cutanea tarda"
  ],
  dx: [
    "Anti-HCV antibody first; a positive result must be followed by HCV RNA, because antibody persists after clearance",
    "Quantitative RNA establishes active infection and gives the baseline against which cure is judged",
    "Genotyping is no longer needed for most patients now that pangenotypic regimens are standard",
    "Stage fibrosis before treatment — cirrhosis changes the regimen, the duration and the need for lifelong HCC surveillance"
  ],
  tx: [
    "Pangenotypic direct-acting antivirals: sofosbuvir-velpatasvir for 12 weeks, or glecaprevir-pibrentasvir for 8 weeks in treatment-naive patients without cirrhosis",
    "Sustained virologic response exceeds 95% across genotypes, and is confirmed by an undetectable RNA 12 weeks after treatment ends",
    "Screen for hepatitis B surface antigen and core antibody BEFORE starting — there is an FDA boxed warning for HBV reactivation during DAA therapy",
    "Review every co-medication for interactions, particularly amiodarone with sofosbuvir, statins, and acid-suppressing drugs with velpatasvir"
  ],
  pearls: [
    "Cure does not confer immunity; reinfection is possible and continued risk means continued testing",
    "Cirrhosis at the time of cure means lifelong hepatocellular carcinoma surveillance — SVR reduces but does not remove the risk",
    "Active injection drug use is not a contraindication to treatment; treating it is how transmission falls",
    "A positive antibody with undetectable RNA is resolved infection, not chronic disease, and needs no antiviral"
  ],
  refs: [
    { t: "AASLD/IDSA: HCV Guidance", u: "https://www.hcvguidelines.org/" },
    { t: "CDC: Hepatitis C Clinical Screening and Testing", u: "https://www.cdc.gov/hepatitis-c/hcp/" },
    { t: "StatPearls: Hepatitis C", u: "https://www.ncbi.nlm.nih.gov/books/NBK430897/" }
  ]
}
];
