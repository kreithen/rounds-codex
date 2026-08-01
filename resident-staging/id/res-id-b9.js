/* Infectious Disease resident dataset — batch 9 of 12 (entries 41-45).
 * CMV and biologic risk; invasive fungal disease.
 */
const RES_ID_B9 = [
{
  id: "id-cmv-immunocompromised",
  name: "Cytomegalovirus in the Immunocompromised Host",
  sec: "id",
  present: [
    "CMV syndrome is fever, malaise, leukopenia and thrombocytopenia with detectable viremia and no organ-specific findings",
    "Tissue-invasive disease targets the gut (colitis with diarrhea and bleeding), lung (pneumonitis), liver, and in advanced HIV the retina",
    "Highest risk is the donor-positive, recipient-negative solid organ transplant, and the seropositive allogeneic stem cell recipient"
  ],
  dx: [
    "Quantitative PCR on plasma or whole blood, reported in international units, and always trended in the same assay — absolute values are not comparable across laboratories",
    "Tissue-invasive gastrointestinal disease can occur with a NEGATIVE blood PCR; the diagnosis is endoscopic biopsy with histopathology showing inclusions",
    "Retinitis is diagnosed by dilated ophthalmoscopy, not by viral load",
    "Distinguish infection (replication) from disease (symptoms or end-organ damage) — the words drive different actions"
  ],
  tx: [
    "Intravenous ganciclovir or oral valganciclovir is first-line for treatment; treat until the viral load is undetectable and symptoms have resolved, with a minimum of two weeks",
    "Reduce immunosuppression where the transplant team agrees it is safe; the immune response does most of the work",
    "Foscarnet or cidofovir for ganciclovir resistance or intolerable myelosuppression, both at the cost of nephrotoxicity and electrolyte wasting",
    "Letermovir prevents clinically significant CMV in seropositive allogeneic stem cell recipients without suppressing the marrow; maribavir is licensed for refractory or resistant disease"
  ],
  pearls: [
    "A negative blood PCR does not exclude CMV colitis or retinitis; if the clinical picture fits, get tissue or get an ophthalmologist",
    "Ganciclovir myelosuppression in a fresh graft can be worse than the infection, which is why letermovir changed practice for prophylaxis",
    "Resistance testing (UL97 and UL54) is warranted when the viral load fails to fall after two weeks of adequate therapy with good adherence",
    "Do not treat low-level viremia in an otherwise well patient reflexively; each center's preemptive threshold exists because the decision is not obvious"
  ],
  refs: [
    { t: "AST: CMV in Solid Organ Transplantation Guidelines", u: "https://www.myast.org/clinical-practice-guidelines" },
    { t: "CDC: Cytomegalovirus (CMV) Clinical Overview", u: "https://www.cdc.gov/cytomegalovirus/hcp/clinical-overview/" },
    { t: "StatPearls: Cytomegalovirus Infection", u: "https://www.ncbi.nlm.nih.gov/books/NBK459185/" }
  ]
},
{
  id: "id-biologic-infection-risk",
  name: "Infection Risk of Biologics & Targeted Immunosuppressants",
  sec: "id",
  present: [
    "The mechanism predicts the infection: TNF inhibitors reactivate granulomatous disease, B-cell depletion causes hypogammaglobulinemia and viral reactivation, complement inhibitors invite Neisseria",
    "Presentation is blunted — a patient on tocilizumab can have a perforated viscus with a normal CRP, because the drug abolishes the acute phase response",
    "Take the exposure history before the drug starts, not after the infection: travel, birthplace, prior tuberculosis contact, endemic mycoses, hepatitis"
  ],
  dx: [
    "Screen for latent tuberculosis and viral hepatitis before any TNF inhibitor, JAK inhibitor or B-cell depleting agent",
    "TNF inhibitors: reactivation tuberculosis is often extrapulmonary and disseminated, and the chest radiograph can be normal",
    "Complement inhibitors (eculizumab, ravulizumab): meningococcal disease risk rises several hundredfold, and can occur despite vaccination",
    "JAK inhibitors carry a distinctive and substantial herpes zoster risk, higher than with TNF blockade"
  ],
  tx: [
    "Treat latent tuberculosis before starting, and where possible complete it — at minimum start it well ahead of the biologic",
    "Hepatitis B: anyone HBsAg-positive needs antiviral prophylaxis, and so does anyone anti-HBc-positive who is receiving rituximab or similar",
    "Vaccinate ahead of time: pneumococcal, influenza, COVID-19, recombinant zoster, and for complement inhibitors both meningococcal ACWY and B, ideally two weeks before the first dose",
    "Patients on a complement inhibitor should carry a card and standing antibiotics, and be told to seek care immediately with any fever"
  ],
  pearls: [
    "Vaccinating a complement-inhibited patient does not make them safe; the residual risk is high enough that many centers give continuous antibiotic prophylaxis as well",
    "Recombinant zoster vaccine is not live and can be used in immunosuppression; the older live attenuated vaccine cannot",
    "Interleukin-6 blockade masks fever and CRP — believe the examination and the imaging over the inflammatory markers",
    "Steroids remain the most underestimated immunosuppressant on the list: prednisone at 20 mg daily for four weeks or more is an indication for Pneumocystis prophylaxis"
  ],
  refs: [
    { t: "IDSA: Immunocompromised Host Practice Guidelines", u: "https://www.idsociety.org/practice-guideline/practice-guidelines/" },
    { t: "CDC: Meningococcal Vaccination for Complement Inhibitor Recipients", u: "https://www.cdc.gov/meningococcal/hcp/vaccine-recommendations/" },
    { t: "StatPearls: Immunosuppression", u: "https://www.ncbi.nlm.nih.gov/books/NBK534795/" }
  ]
},
{
  id: "id-candidemia",
  name: "Candidemia & Invasive Candidiasis",
  sec: "id",
  present: [
    "Fever unresponsive to antibacterials in a patient with a central line, recent abdominal surgery, total parenteral nutrition, broad-spectrum antibiotics or neutropenia",
    "There is no specific clinical syndrome — candidemia looks like bacterial sepsis and is found because someone sent the culture",
    "Endophthalmitis, hepatosplenic disease and endocarditis are the metastatic complications that change duration and outcome"
  ],
  dx: [
    "Blood cultures remain the reference standard but are only about 50% sensitive for invasive candidiasis; a negative set does not exclude it",
    "Speciate every isolate — Candida glabrata and Candida krusei have reduced azole susceptibility, and Candida auris is a transmissible, multidrug-resistant infection control problem",
    "Beta-D-glucan is an adjunct with a good negative predictive value but frequent false positives, particularly with hemodialysis and immunoglobulin",
    "A dilated ophthalmologic examination in every case of candidemia, ideally within the first week"
  ],
  tx: [
    "An echinocandin is first-line initial therapy for candidemia in essentially every adult, including the critically ill and the neutropenic",
    "Remove the central venous catheter — this is a strong recommendation and delay is consistently associated with worse outcomes",
    "Step down to fluconazole after clinical improvement, only if the isolate is susceptible and repeat cultures are negative",
    "Treat 14 days from the first negative blood culture in uncomplicated disease; longer with metastatic foci"
  ],
  pearls: [
    "Candida grown from any blood culture is never a contaminant, and never a reason to wait and repeat",
    "Candida in sputum or a respiratory sample is colonization; Candida pneumonia essentially does not occur in immunocompetent adults, and treating a respiratory isolate is a common error",
    "Candida auris requires contact precautions and notification of infection prevention — it persists on surfaces and spreads between patients",
    "Candiduria in an asymptomatic catheterized patient is usually colonization; change the catheter and re-examine rather than reaching for fluconazole"
  ],
  refs: [
    { t: "IDSA: Candidiasis Management Guidelines", u: "https://www.idsociety.org/practice-guideline/candidiasis/" },
    { t: "CDC: Candida auris", u: "https://www.cdc.gov/candida-auris/hcp/clinical-overview/" },
    { t: "StatPearls: Candidemia", u: "https://www.ncbi.nlm.nih.gov/books/NBK430775/" }
  ]
},
{
  id: "id-invasive-aspergillosis",
  name: "Invasive Aspergillosis",
  sec: "id",
  present: [
    "Prolonged neutropenia, allogeneic transplantation, high-dose corticosteroids and advanced lung disease are the host settings; the disease is essentially never seen in a normal host",
    "Pulmonary disease presents with fever unresponsive to antibacterials, pleuritic pain and hemoptysis reflecting angioinvasion and infarction",
    "Invasive fungal sinusitis with facial pain, epistaxis or a black turbinate is a rhinologic emergency and overlaps clinically with mucormycosis"
  ],
  dx: [
    "Chest CT is the pivotal test: nodules with a surrounding halo of ground glass early, and the air-crescent sign later during neutrophil recovery",
    "Serum galactomannan performs well in neutropenic and stem cell transplant patients, and poorly in solid organ recipients and the non-neutropenic",
    "Bronchoalveolar lavage galactomannan is more sensitive than serum for pulmonary disease and should be pursued when the CT is suggestive",
    "Distinguish from mucormycosis — reversed halo sign, sinus involvement and diabetic ketoacidosis favor mucor, which does not respond to voriconazole"
  ],
  tx: [
    "Voriconazole or isavuconazole is first-line; isavuconazole is better tolerated, needs no therapeutic drug monitoring, and does not prolong the QT interval",
    "Liposomal amphotericin B where an azole cannot be used, or where mucormycosis has not been excluded",
    "Treat a minimum of 6-12 weeks, guided by immune recovery and serial imaging rather than a fixed endpoint",
    "Reduce immunosuppression and reverse neutropenia where possible; recovery of the neutrophil count is what actually clears the infection"
  ],
  pearls: [
    "Voriconazole needs therapeutic drug monitoring — subtherapeutic levels fail, supratherapeutic levels cause visual disturbance, hallucinations and hepatotoxicity",
    "Radiographic worsening during neutrophil recovery is usually immune reconstitution, not treatment failure; do not switch agents on the film alone",
    "Voriconazole and isavuconazole both interact heavily with calcineurin inhibitors and with rifamycins — check every co-medication before the first dose",
    "Empiric antifungal therapy for persistent neutropenic fever should be mold-active; fluconazole does not cover Aspergillus at all"
  ],
  refs: [
    { t: "IDSA: Aspergillosis Guidelines", u: "https://www.idsociety.org/practice-guideline/aspergillosis/" },
    { t: "CDC: Aspergillosis Clinical Overview", u: "https://www.cdc.gov/aspergillosis/hcp/clinical-overview/" },
    { t: "StatPearls: Aspergillosis", u: "https://www.ncbi.nlm.nih.gov/books/NBK482241/" }
  ]
},
{
  id: "id-cryptococcal-disease",
  name: "Cryptococcal Disease",
  sec: "id",
  present: [
    "Subacute meningitis over one to two weeks: headache, fever, malaise, and later confusion and cranial nerve palsies",
    "Neck stiffness is often absent, and the presentation in advanced HIV can be little more than a persistent headache",
    "Cryptococcus gattii affects apparently immunocompetent people and produces mass lesions in lung and brain rather than diffuse meningitis"
  ],
  dx: [
    "Serum cryptococcal antigen is highly sensitive and is the screening test; a negative result makes disseminated disease very unlikely",
    "Lumbar puncture WITH a measured opening pressure in everyone with a positive serum antigen — the pressure is a treatment variable, not an incidental number",
    "CSF cryptococcal antigen, India ink and fungal culture; the CSF cell count can be almost normal in advanced HIV, which does not reassure",
    "Screen for cryptococcal antigen in people with HIV and a CD4 count below 100 before starting antiretroviral therapy"
  ],
  tx: [
    "Induction with liposomal amphotericin B plus flucytosine for at least two weeks, then consolidation with fluconazole, then long maintenance",
    "Manage raised intracranial pressure aggressively with repeated therapeutic lumbar punctures — this, more than the antifungal, determines early survival",
    "DELAY antiretroviral therapy by around four to six weeks in HIV-associated cryptococcal meningitis; starting early increases mortality through immune reconstitution",
    "Continue fluconazole maintenance until the CD4 count is sustained above 100 with viral suppression for at least a year"
  ],
  pearls: [
    "Raised intracranial pressure is the commonest cause of early death, and the repeated taps that treat it are frequently deferred out of reluctance",
    "Flucytosine is not optional where it is available — the combination clears the CSF faster and improves survival over amphotericin alone",
    "Do not follow the CSF antigen titer to judge response; it falls slowly and prompts unnecessary escalation. Follow culture and the clinical course",
    "A shunt may be needed for persistently raised pressure despite serial punctures, and neurosurgery should be involved early rather than as a last resort"
  ],
  refs: [
    { t: "IDSA: Cryptococcal Disease Guidelines", u: "https://www.idsociety.org/practice-guideline/cryptococcal-disease/" },
    { t: "WHO: Guidelines for Cryptococcal Disease in HIV", u: "https://www.who.int/publications/i/item/9789240052178" },
    { t: "StatPearls: Cryptococcosis", u: "https://www.ncbi.nlm.nih.gov/books/NBK431060/" }
  ]
}
];
