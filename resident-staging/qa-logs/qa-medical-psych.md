# Psychiatry — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — high-yield/high-risk + currency-sensitive claims checked vs current guidelines/FDA approvals; prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: psych (BASE schema). 60 entries. **NEWER build (not yet live).**

---

## Batch 1 — 2026-07-18 (high-yield: pharmacology + emergencies + mood/psychosis)

### psych-antipsychotics  ✅ ENHANCEMENT APPLIED
- **Gap:** neither psych-antipsychotics nor psych-schizophrenia mentioned **xanomeline-trospium (Cobenfy)** — a notable omission for a 2026 resident resource.
- **Added** (tx + pearl): xanomeline-trospium (Cobenfy, FDA **Sept 26, 2024**; formerly KarXT) — first-in-class **non-dopaminergic** antipsychotic; xanomeline = CNS **M1/M4 muscarinic agonist**, trospium = peripheral antimuscarinic added to blunt cholinergic GI effects. **No D2 blockade** -> no EPS/prolactin/metabolic burden, but has cholinergic GI side effects (nausea, constipation, dyspepsia). EMERGENT-2/-3 phase III positive; studied in non-treatment-resistant patients.
- **Source (web-verified):** BMS/FDA approval Sept 2024; Drugs 2025;85:103-109 (first approval); EMERGENT trial program.
- **Action:** APPLIED to res-psych.js; master regenerated + re-verified **1308/0-errors**; Cobenfy present in tx + pearls.

### CONFIRMED current (verified vs guidelines/FDA; no change) — the build is otherwise up-to-date, incl. very recent agents:
- **psych-schizophrenia** — SGA first-line, clozapine for TRD (>=2 failures) + suicidality (ANC monitoring), LAIs for adherence, negative/cognitive symptoms drive disability, psychosocial (ACT/supported employment/CBTp). ✓
- **psych-treatment-resistant-depression** — optimize/switch/combine/augment (Li, SGA, thyroid); **ECT most effective** for severe/psychotic/catatonic/suicidal; **intranasal esketamine / IV ketamine** rapid + anti-suicidal; neurostimulation. ✓
- **psych-perinatal-pmdd** — EPDS screen, PPD SSRIs (sertraline) + **neuroactive steroids named: brexanolone IV, zuranolone oral** (current: Zurzuvae 2023); postpartum psychosis = emergency (bipolar-spectrum); PMDD luteal SSRIs; screen bipolar before antidepressant. ✓
- **psych-mdd** — DSM-5-TR, screen bipolar, PHQ-9, SSRIs/SNRIs + CBT/IPT first-line, treat to remission 6-12mo, ECT for severe. ✓
- **psych-mood-stabilizers** — Li (renal/thyroid, narrow index, anti-suicidal), valproate (teratogen/hepatotox), lamotrigine (SJS titration, bipolar depression), carbamazepine (SIADH/marrow, HLA-B*1502). ✓
- **psych-bipolar-i** — mania (Li/valproate +/- SGA), bipolar depression (quetiapine/lurasidone/lamotrigine/Li/**cariprazine**, avoid antidepressant monotherapy), maintenance, DIGFAST. ✓
- **psych-ptsd** — trauma-focused psychotherapy first-line (CPT/PE/EMDR), SSRIs/SNRIs, prazosin for nightmares, avoid benzodiazepines. ✓
- **psych-ocd** — ERP + higher-dose/longer SSRI trials, antipsychotic augmentation, clomipramine, OCD vs OCPD. ✓
- **psych-adhd** — stimulants first-line + CV/growth/sleep monitoring, non-stimulants (atomoxetine, guanfacine/clonidine), onset <12 + >=2 settings. ✓
- **psych-opioid-use-disorder** — naloxone (repeat for fentanyl) + take-home, buprenorphine/methadone reduce mortality (first-line), start bup in withdrawal, benzo/alcohol co-use risk. ✓
- **psych-alcohol-use-disorder** — naltrexone/acamprosate first-line, disulfiram supervised, thiamine-before-glucose, brief intervention. ✓
- **psych-nms** — stop dopamine antagonist, cooling/supportive, dantrolene + bromocriptine/amantadine, ECT refractory; slow onset + rigidity + bradyreflexia (vs serotonin syndrome). ✓
- **psych-serotonin-syndrome** — stop serotonergics, supportive/benzos, **cyproheptadine** antidote, MAOI washout (2wk; 5wk fluoxetine); clonus/hyperreflexia + fast onset. ✓
- **psych-catatonia** — **lorazepam first-line** (challenge dx+therapeutic), ECT definitive/malignant, avoid antipsychotics (worsen + NMS risk), mood disorders/autoimmune encephalitis. ✓
- **psych-antidepressants** — SSRI sexual dysfunction, **TCA overdose = wide QRS -> sodium bicarbonate**, MAOI tyramine diet, bupropion (avoid eating disorders/seizure), discontinuation taper, youth suicidality boxed warning. ✓
- **psych-anorexia** — multidisciplinary + nutritional rehab, **FBT (Maudsley) first-line adolescents** / CBT adults, refeeding syndrome (hypophosphatemia), highest psychiatric mortality, SSRIs ineffective for core. ✓
- **psych-borderline-pd** — **DBT** flagship (+ MBT/TFP), medications adjunctive (none FDA-approved), boundaries/splitting, vs bipolar (rapid reactive shifts), favorable long-term prognosis. ✓

## Running tally (psych)
- Checked: 18 high-yield claim-areas | CONFIRMED: 17 | ENHANCEMENT applied: 1 (xanomeline-trospium/Cobenfy) | CORRECTION: 0 | UNVERIFIED: 0
- **Content is current and accurate**, already incorporating recent agents (zuranolone for PPD, esketamine for TRD, cariprazine/lurasidone for bipolar depression, VMAT2 inhibitors for TD, DBT/FBT). The one enhancement adds the newest antipsychotic *mechanism* (muscarinic).

## Next (psych)
- Remaining ~42 are DSM-5-TR criteria/diagnostic entries (anxiety spectrum, trauma/stress, other psychotic disorders, substance subtypes, neurodevelopmental, personality clusters, sleep-wake, dissociative, somatic, sexual/gender, forensic, suicide/agitation) — mostly stable criteria + established treatments, lower change-risk; lighter or attending pass. No high-risk currency claims flagged on scan.
