# Infectious Disease — top 60 resident topics

**Specialty code: `id`.** Displays as "Infectious Disease". The Resident Mode grid and
the Clinical Updates index both sort by display NAME, not code, so it lands between
Family Medicine and Internal Medicine.

Section-2 title: **"Top 60 Infectious Disease Topics"**, matching the other 60-entry sets.

## How this list was built

Grounded in the ABIM Infectious Disease certification blueprint domains and the IDSA
Training Program Directors' fellowship curriculum (*Clin Infect Dis* 2026,
`10.1093/cid/ciag064`), then cut to the granularity the other specialties use —
Neurology's 60 was the calibration file. One entry per *decision the consultant makes*,
not one per organism.

ABIM publishes the blueprint percentages only as a PDF behind bot protection, which 403s
from here, so the domain weighting below comes from the IDSA curriculum and the
blueprint's published category names rather than from the percentage table. The shape is
right; exact weights are not claimed.

- [IDSA Fellowship Curriculum (CREW), Clin Infect Dis](https://doi.org/10.1093/cid/ciag064)
- [ABIM Infectious Disease exam content](https://www.abim.org/certification/exam-information/infectious-disease/exam-content)

## The 60

**Bacteremia & endovascular infection**
1. Staphylococcus aureus Bacteremia
2. Infective Endocarditis — Native Valve
3. Prosthetic Valve Endocarditis & Cardiac Device Infection
4. Gram-Negative Bacteremia & Source Control
5. Catheter-Related Bloodstream Infection

**Central nervous system**
6. Acute Bacterial Meningitis
7. Viral Meningitis & Encephalitis
8. Brain Abscess & Subdural Empyema

**Respiratory & mycobacterial**
9. Community-Acquired Pneumonia
10. Hospital-Acquired & Ventilator-Associated Pneumonia
11. Pulmonary Tuberculosis — Diagnosis & Treatment
12. Latent Tuberculosis Infection
13. Drug-Resistant Tuberculosis
14. Nontuberculous Mycobacterial Disease

**Bone & joint**
15. Native Joint Septic Arthritis
16. Prosthetic Joint Infection
17. Vertebral Osteomyelitis & Spinal Epidural Abscess
18. Diabetic Foot Infection & Osteomyelitis

**Skin & soft tissue**
19. Cellulitis & Cutaneous Abscess
20. Necrotizing Soft Tissue Infection

**Gastrointestinal & hepatic**
21. Clostridioides difficile Infection
22. Complicated Intra-Abdominal Infection & Peritonitis
23. Infectious Diarrhea & Foodborne Illness
24. Chronic Hepatitis B
25. Hepatitis C — Diagnosis & Direct-Acting Antiviral Therapy

**Genitourinary**
26. Complicated UTI & Pyelonephritis
27. Asymptomatic Bacteriuria & Catheter-Associated UTI

**HIV**
28. Acute HIV Infection & Diagnostic Testing
29. Antiretroviral Therapy — Initiation & Regimen Selection
30. HIV Virologic Failure & Resistance Testing
31. Opportunistic Infections in Advanced HIV
32. HIV Pre-Exposure Prophylaxis
33. HIV Post-Exposure Prophylaxis — Occupational & Non-Occupational

**Sexually transmitted infection**
34. Syphilis — Staging, Serology & Treatment
35. Gonorrhea & Chlamydia
36. Genital Ulcer Disease & Genital Herpes
37. Pelvic Inflammatory Disease, Vaginitis & Bacterial Vaginosis

**The immunocompromised host**
38. Febrile Neutropenia
39. Solid Organ Transplant Infection — Timeline & Prophylaxis
40. Hematopoietic Cell Transplant Infection
41. Cytomegalovirus in the Immunocompromised Host
42. Infection Risk of Biologics & Targeted Immunosuppressants

**Invasive fungal disease**
43. Candidemia & Invasive Candidiasis
44. Invasive Aspergillosis
45. Cryptococcal Disease
46. Endemic Mycoses — Histoplasmosis, Blastomycosis, Coccidioidomycosis

**Travel, tropical, vector-borne & zoonotic**
47. Fever in the Returning Traveler
48. Malaria
49. Dengue, Chikungunya & Zika
50. Lyme Disease & Other Tick-Borne Illness
51. Rickettsial Disease

**Respiratory & vaccine-preventable viruses**
52. Influenza
53. COVID-19 — Treatment & Prevention
54. Measles, Mumps, Varicella & Other Vaccine-Preventable Viral Disease

**Systems, stewardship & prevention**
55. Antimicrobial Stewardship
56. Multidrug-Resistant Gram-Negative Organisms — ESBL, AmpC, CRE, Pseudomonas
57. Healthcare-Associated Infection Prevention & Outbreak Investigation
58. Outpatient Parenteral Antimicrobial Therapy (OPAT)
59. Penicillin Allergy De-labeling & Antimicrobial Allergy
60. Fever of Unknown Origin

## What was cut, and why

The draft ran to 67.

| cut | why |
|---|---|
| CNS Shunt & Neurosurgical Device Infection | device infection is already carried by prosthetic valve, PJI and CRBSI; the neurosurgical case is the rarest of the four |
| Prostatitis & Epididymo-orchitis | mostly a urology consult, and the antibiotic logic duplicates complicated UTI |
| Bite Wounds & Animal-Associated Infection | high-yield but narrow; folded into Cellulitis & Cutaneous Abscess as a pearl |
| Pyogenic & Amebic Liver Abscess | the diagnostic split is the teaching point and it fits inside intra-abdominal infection |
| Enteric Fever & Traveler's Diarrhea | enteric fever belongs to Fever in the Returning Traveler; the diarrhea half duplicates Infectious Diarrhea |
| Adult Immunization & the Asplenic Patient | the asplenia pearls sit naturally in Gram-Negative Bacteremia and in Vaccine-Preventable Disease |
| Sepsis & Septic Shock — the ID Lens | sepsis is already an EM and IM entry; ID's actual contribution is source control and antibiotic choice, which lives in each syndrome entry rather than in a generic one |

**Kept despite being tempting cuts.** Latent TB stands apart from active TB because the
decision, the drug and the cost of getting it wrong are all different. Asymptomatic
bacteriuria stands apart from complicated UTI because *not* treating it is the single
commonest stewardship intervention on a consult service. Penicillin allergy de-labeling
stays because it changes the antibiotic for roughly one inpatient in ten.

## Status

**List complete; content not yet built.** Each entry gets `present[] / dx[] / tx[] /
pearls[] / refs[]` at the density of the Neurology and Cardiology sets, built in batches
of five and validated against every existing `sec` for id collisions before merge.
