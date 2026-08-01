/* Infectious Disease resident dataset — batch 4 of 12 (entries 16-20).
 * Bone and joint; skin and soft tissue.
 */
const RES_ID_B4 = [
{
  id: "id-prosthetic-joint-infection",
  name: "Prosthetic Joint Infection",
  sec: "id",
  present: [
    "Early infection (within 3 months) is acute, with wound drainage, erythema and fever, usually staphylococcal",
    "Delayed infection (3-24 months) is indolent — persistent pain and radiographic loosening rather than sepsis, typically low-virulence organisms",
    "Late infection (beyond 24 months) is hematogenous seeding from a distant source, often heralded by a documented bacteremia"
  ],
  dx: [
    "ESR and CRP first: both normal has a high negative predictive value and reasonably excludes chronic infection",
    "Aspirate the joint. Thresholds are far lower than a native joint — in chronic knee PJI, a synovial white count around 3,000 with more than 80% neutrophils is suggestive",
    "Take 3-5 separate intraoperative tissue samples at revision; a single swab is inadequate and superficial swabs are actively misleading",
    "Hold cultures 14 days for Cutibacterium acnes, particularly in shoulder arthroplasty where it is the leading organism"
  ],
  tx: [
    "Debridement, antibiotics and implant retention (DAIR) is reasonable only for early or acute hematogenous infection with a stable, well-fixed implant, a short symptom duration and a susceptible organism",
    "Chronic infection needs implant exchange — two-stage with a spacer is standard in most centers, one-stage in selected cases",
    "Add rifampin to the regimen for staphylococcal infection on retained hardware, and only once bacteremia has cleared",
    "Typically 2-6 weeks of intravenous therapy then oral continuation; chronic suppression where the patient is not a surgical candidate"
  ],
  pearls: [
    "A sinus tract communicating with the prosthesis is definitional PJI — no threshold or score is required",
    "Do not give antibiotics before the aspirate or the operative cultures unless the patient is septic; pretreatment is the commonest reason cultures are sterile",
    "Rifampin is the drug that makes biofilm therapy work and the drug most likely to interact with everything else the patient takes",
    "S. aureus bacteremia in a patient with any arthroplasty should prompt evaluation of that joint, even if it is not painful"
  ],
  refs: [
    { t: "IDSA: Prosthetic Joint Infection Guidelines", u: "https://www.idsociety.org/practice-guideline/prosthetic-joint-infection/" },
    { t: "AAOS: Periprosthetic Joint Infection", u: "https://www.aaos.org/quality/quality-programs/lower-extremity-programs/" },
    { t: "StatPearls: Prosthetic Joint Infection", u: "https://www.ncbi.nlm.nih.gov/books/NBK448131/" }
  ]
},
{
  id: "id-vertebral-osteomyelitis",
  name: "Vertebral Osteomyelitis & Spinal Epidural Abscess",
  sec: "id",
  present: [
    "Back or neck pain in more than 90%, characteristically unrelenting, worse at night and not relieved by rest",
    "Fever is present in only about half, so an afebrile patient with new focal spinal pain still needs imaging",
    "Neurologic deficit is a late and ominous sign — radicular pain, weakness, then bladder or bowel dysfunction"
  ],
  dx: [
    "MRI with gadolinium is the diagnostic test and should not wait for the inflammatory markers to return",
    "ESR and CRP are elevated in almost all cases; a genuinely normal CRP makes the diagnosis unlikely and is useful as a screen",
    "Two sets of blood cultures — positive in roughly 60%, and a positive culture can spare a biopsy",
    "If blood cultures are negative, image-guided biopsy before antibiotics; do not start empiric therapy in a neurologically intact, stable patient"
  ],
  tx: [
    "Six weeks of pathogen-directed therapy is standard; OVIVA (NEJM 2019) found oral therapy noninferior to intravenous for bone and joint infection after an initial period",
    "S. aureus is the commonest organism; cover MRSA empirically only when the patient is unstable and cultures are already drawn",
    "Urgent surgical decompression for cord compression, progressive deficit, spinal instability or failure of medical therapy",
    "Follow CRP and the clinical course, not repeat MRI — imaging lags improvement by weeks and prompts unnecessary escalation"
  ],
  pearls: [
    "Any patient with S. aureus bacteremia and back pain needs a spine MRI; this is the most commonly missed metastatic focus",
    "An insidious course over months with thoracic involvement and a large paraspinal collection suggests tuberculous spondylitis",
    "Epidural abscess with any neurologic deficit is a surgical emergency measured in hours, not days",
    "Injection drug use, hemodialysis and diabetes are the three risk factors that should lower the threshold to image"
  ],
  refs: [
    { t: "IDSA: Native Vertebral Osteomyelitis Guidelines", u: "https://www.idsociety.org/practice-guideline/native-vertebral-osteomyelitis/" },
    { t: "OVIVA: Oral versus Intravenous Antibiotics for Bone and Joint Infection (NEJM 2019)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa1710926" },
    { t: "StatPearls: Vertebral Osteomyelitis", u: "https://www.ncbi.nlm.nih.gov/books/NBK532256/" }
  ]
},
{
  id: "id-diabetic-foot-infection",
  name: "Diabetic Foot Infection & Osteomyelitis",
  sec: "id",
  present: [
    "Infection is a clinical diagnosis: at least two of local swelling, erythema beyond 0.5 cm, tenderness, warmth or purulent discharge",
    "Neuropathy removes the pain that would normally bring the patient in, so presentation is often late and deep",
    "Grade severity first (IWGDF/IDSA mild, moderate, severe) — it sets the route, the spectrum and whether admission is needed"
  ],
  dx: [
    "Probe-to-bone: a positive test in an infected ulcer substantially raises the probability of osteomyelitis and is free",
    "Plain radiographs first; MRI where films are unrevealing and osteomyelitis would change management",
    "Bone biopsy for culture and histology is the reference standard — wound swabs grow colonizers and reliably mislead",
    "Assess perfusion in every patient: pedal pulses, ankle-brachial index, toe pressures. An ischemic foot will not heal whatever the antibiotic"
  ],
  tx: [
    "Mild infection: oral therapy aimed at streptococci and staphylococci, 1-2 weeks",
    "Moderate to severe: broader cover including gram-negatives and anaerobes, guided by prior cultures and local resistance",
    "Osteomyelitis: about 6 weeks of therapy, or 2-3 weeks where the infected bone has been resected",
    "Debridement, offloading and revascularization are as much treatment as the antibiotic, and the last is often the decisive one"
  ],
  pearls: [
    "A superficial swab tells you what is on the wound, not what is in it; if the answer matters, get tissue or bone",
    "Not every diabetic foot ulcer is infected — colonized ulcers do not need antibiotics, and treating them selects resistance",
    "Osteomyelitis of the toe treated by resection becomes a soft tissue problem, and the antibiotic course shortens accordingly",
    "Refer early to a multidisciplinary foot service; that single step is what changes amputation rates"
  ],
  refs: [
    { t: "IWGDF/IDSA: Diabetes-Related Foot Infections (2023)", u: "https://iwgdfguidelines.org/infection-guideline/" },
    { t: "IDSA: Diabetic Foot Infections Guidelines", u: "https://www.idsociety.org/practice-guideline/diabetic-foot-infections/" },
    { t: "StatPearls: Diabetic Foot Infections", u: "https://www.ncbi.nlm.nih.gov/books/NBK441914/" }
  ]
},
{
  id: "id-cellulitis-abscess",
  name: "Cellulitis & Cutaneous Abscess",
  sec: "id",
  present: [
    "Unilateral, spreading, poorly demarcated erythema with warmth, swelling and tenderness, usually of a lower limb",
    "Abscess is fluctuant and pointing; cellulitis alone is not, and the distinction determines whether a knife is needed",
    "Systemic features (fever, rigors) suggest more than simple cellulitis and warrant a look for a deeper process"
  ],
  dx: [
    "The diagnosis is clinical; blood cultures are positive in under 5% of uncomplicated cases and are not routine",
    "Point-of-care ultrasound reliably finds the occult abscess that examination misses and changes management",
    "Mark the border of the erythema and re-examine — spread despite therapy means resistance, abscess or a wrong diagnosis",
    "Culture pus from an abscess; do not culture intact skin or a superficial swab of cellulitis"
  ],
  tx: [
    "Nonpurulent cellulitis is streptococcal: cephalexin or cefazolin. Routine MRSA cover is not needed",
    "Purulent disease is staphylococcal: incision and drainage is the treatment, with trimethoprim-sulfamethoxazole or doxycycline added for larger abscesses and systemic features",
    "Five days is enough for uncomplicated cellulitis that is improving; extending a course does not rescue a poor response",
    "Elevate the limb — it is genuinely as effective as anything else prescribed and is routinely omitted"
  ],
  pearls: [
    "Bilateral lower limb cellulitis essentially does not exist; symmetrical erythema is stasis dermatitis until proven otherwise",
    "Pseudocellulitis is common and includes stasis dermatitis, deep vein thrombosis, gout, contact dermatitis and lipodermatosclerosis",
    "Treat interdigital tinea pedis: it is the portal of entry, and clearing it prevents recurrence better than prophylactic antibiotics",
    "A bite wound needs amoxicillin-clavulanate for Pasteurella and Eikenella, not a first-generation cephalosporin"
  ],
  refs: [
    { t: "IDSA: Skin and Soft Tissue Infection Guidelines", u: "https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/" },
    { t: "CDC: MRSA Clinical Guidance", u: "https://www.cdc.gov/mrsa/hcp/clinical-guidance/" },
    { t: "StatPearls: Cellulitis", u: "https://www.ncbi.nlm.nih.gov/books/NBK549770/" }
  ]
},
{
  id: "id-necrotizing-soft-tissue-infection",
  name: "Necrotizing Soft Tissue Infection",
  sec: "id",
  present: [
    "Pain out of proportion to the visible findings, in a patient who looks systemically unwell — this is the early presentation and the only one that saves the limb",
    "Skin changes are late: dusky discoloration, hemorrhagic bullae, crepitus and anesthesia over the affected area",
    "Progression is measured in hours; a margin that has visibly advanced since the last examination is diagnostic enough to operate"
  ],
  dx: [
    "This is a surgical diagnosis. Imaging and scores must never delay exploration in a patient who looks like this",
    "The LRINEC score has poor sensitivity and a low score does not exclude the diagnosis — it cannot be used to rule out",
    "CT may show fascial gas or fluid tracking and is useful only when the diagnosis is genuinely uncertain and the patient is stable",
    "At exploration, the finding is fascia that separates without resistance to a finger, with dishwater fluid and no bleeding"
  ],
  tx: [
    "Emergent wide surgical debridement to bleeding, viable tissue. Nothing else in this entry matters as much",
    "Broad empiric cover: vancomycin or linezolid plus piperacillin-tazobactam or a carbapenem",
    "Add clindamycin for its antitoxin effect in streptococcal and clostridial disease — it suppresses exotoxin production independent of the killing agent",
    "Plan a second look at 24 hours; a single debridement is almost never enough and staged returns are expected"
  ],
  pearls: [
    "Group A streptococcal and clostridial disease can go from a sore leg to shock inside a day; there is no observation period",
    "Linezolid or clindamycin suppresses toxin; a beta-lactam alone does not, and in high inoculum disease beta-lactam killing falls off (the Eagle effect)",
    "Immunoglobulin remains unproven and is not a substitute for going to theater",
    "A normal white count, normal lactate and a reassuring LRINEC in a patient with disproportionate pain should not change the plan"
  ],
  refs: [
    { t: "IDSA: Skin and Soft Tissue Infection Guidelines", u: "https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/" },
    { t: "CDC: Group A Streptococcal Disease", u: "https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/" },
    { t: "StatPearls: Necrotizing Fasciitis", u: "https://www.ncbi.nlm.nih.gov/books/NBK430756/" }
  ]
}
];
