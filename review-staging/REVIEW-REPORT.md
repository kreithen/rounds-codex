# Blinded medical review — full report

**181 quizzes · 1,820 questions · 23 independent reviewers · every question answered.**

## How to read this

Each reviewer received stems and options only — `correct`, `exp` and `why` were stripped by
`scripts/blind_quizzes.js`, which asserts none of those keys survived the copy before writing
anything. They derived every answer from the condition's own module text. The comparison against
the real key happened afterwards, in `scripts/compare_review.js`.

### The headline number, and why it is weaker than it looks

**1,820 of 1,820 reviewer answers matched the bank (100%).** Two reasons not to celebrate that:

1. **Convergence is partly structural.** The authors wrote each question from a condition's module
   text; the reviewers answered from the same text. Agreement therefore confirms *"consistent with
   the module"* far more strongly than it confirms *"medically correct"*. Where the module itself is
   imprecise, both sides inherit the imprecision — and that is exactly what happened at `htn` Q1.
2. **Blinding is instructed, not enforced.** A reviewer could have read `content/quizzes.json`
   despite being told not to. That would show up as spurious agreement, not disagreement, so
   `compare_review.js` deliberately flags zero-disagreement files as a signal rather than a pass.
   All 23 files came back with zero disagreements.

**The real yield of this pass is the 94 concerns below**, which reviewers raised without seeing the
key — judging whether a stem or an option was itself defensible. That work is not affected by
either caveat above.

## Already fixed

- **`cardiac-arrest` Q8 — corrupted stem token.** Read `ETCOI` instead of `ETCO2`, in both the stem
  and the explanation. Confirmed in the raw JSON rather than assumed to be a rendering artifact.
  The medicine was never wrong (the answer is ROSC) but students were reading a nonsense
  abbreviation. Repaired and verified end-to-end; committed to the app clone but **not pushed**,
  since pushing auto-deploys the live site.

## Your decisions

Nothing else has been changed. These are the items where a reviewer identified something
substantive; the rest of the 94 are recorded verbatim afterwards.

### htn Q1 — A real answer-key defect

*Hypertension* · reviewer group `blind-01.json`

> Which blood pressure reading meets the current US definition of stage 1 hypertension?

- A. 116/74 mm Hg
- B. 124/76 mm Hg
- **C. 132/84 mm Hg** ← keyed
- D. 142/92 mm Hg
- E. 118/82 mm Hg

Two options satisfy stage 1 hypertension. Reviewer proposes changing option E to a diastolic below 80 (e.g. 118/76).

### aortic-dissection Q5 — Teaches the wrong emphasis

*Aortic Aneurysm & Dissection* · reviewer group `blind-03.json`

> What is the major goal of initial medical management for acute aortic dissection?

- **A. Lower blood pressure and reduce shear stress** ← keyed
- B. Administer antibiotics
- C. Begin thrombolysis
- D. Correct anemia
- E. Increase heart rate

The keyed option says "lower blood pressure and reduce shear stress", but the module's own pearl is beta-blocker BEFORE vasodilator — rate control first, because a vasodilator alone causes reflex tachycardia and can extend the tear.

### aortic-stenosis Q6 — Unreadable value

*Aortic Stenosis (Valvular Disease)* · reviewer group `blind-01.json`

> Severe AS typically has peak velocity:

- A. <2
- B. 2-2.9
- C. 3-3.9
- **D. ≥4.0** ← keyed
- E. Unknown

No units anywhere. ">=4.0" is ambiguous between m/s, mmHg and cm2.

### aortic-stenosis Q9 — Contradicts its own module

*Aortic Stenosis (Valvular Disease)* · reviewer group `blind-01.json`

> Ideal TAVR candidate:

- A. Athlete
- B. Child
- C. Young low-risk
- D. Needs CABG
- **E. Older higher-risk** ← keyed

The TAVR framing is dated; the module states twice that TAVR is used across all surgical-risk tiers.

### metabolic-syndrome Q8 — Two defensible answers

*Metabolic Syndrome* · reviewer group `blind-02.json`

> Approximate increase in type 2 diabetes risk?

- A. 1.5x
- B. 2x
- C. 3x
- **D. 5x** ← keyed
- E. 10x

Module says ~5x; literature says ~3-5x, making 3x defensible. And the CVD figure (2x) sits in the same option list.

### pad Q10 — Answerable without knowledge

*Peripheral Arterial Disease* · reviewer group `blind-03.json`

> Which statement best reflects the prognosis of symptomatic PAD and the lipid goal that follows from it?

- A. PAD risk is confined to the limb, so the lipid target is the same as for the general population
- B. Amputation is the leading cause of death in PAD, so a statin adds little beyond exercise therapy
- C. Statins should be avoided in PAD because myalgias limit walking distance in claudication
- D. Lipid lowering is indicated only after revascularization has failed to relieve the symptoms
- **E. PAD is a coronary heart disease risk equivalent — most patients die of MI or stroke — so a high-intensity statin targeting LDL below 70 mg/dL is recommended** ← keyed

The correct option runs ~35 words against distractors of 12-18 that are each self-evidently absurd.

### endocarditis Q10 — One clause is load-bearing

*Infective Endocarditis* · reviewer group `blind-02.json`

> Which regimen is now favored for Enterococcus faecalis endocarditis in order to avoid aminoglycoside toxicity?

- A. Ampicillin plus gentamicin for a synergistic bactericidal effect
- B. Penicillin G alone, dosed once daily as outpatient parenteral therapy
- **C. Ampicillin plus ceftriaxone as a double beta-lactam regimen** ← keyed
- D. Rifampin plus nafcillin to penetrate biofilm on the infected valve
- E. Vancomycin monotherapy given for a four to six week intravenous course

Option A is still a guideline-endorsed regimen. Only the stem's "to avoid aminoglycoside toxicity" makes C uniquely correct.

### hypothyroid Q1 — Two options are primary patterns

*Hypothyroidism* · reviewer group `blind-02.json`

> Which laboratory pattern indicates primary hypothyroidism?

- A. Low TSH with a low free T4
- B. Raised TSH with a normal free T4
- C. Low TSH with a raised free T4
- D. Normal TSH with a raised free T4
- **E. Raised TSH with a low free T4** ← keyed

Option B is subclinical primary hypothyroidism. Stem should say "overt".

### copd Q4 — Overgeneralised stem

*COPD* · reviewer group `blind-01.json`

> What is the appropriate oxygen saturation target in a patient with COPD?

- A. Above 98%
- B. 94-98%
- **C. 88-92%** ← keyed
- D. 80-85%
- E. Whatever is needed to abolish all dyspnea

The 88-92% target applies to titrating supplemental oxygen, not as a ceiling for a stable patient at 95% on room air.

### hyperlipidemia Q4 — Wording

*Hyperlipidemia* · reviewer group `blind-03.json`

> Which of the following is one of the four AHA/ACC statin benefit groups?

- A. Isolated triglycerides of 200 mg/dL on a fasting panel
- B. Any adult over the age of 40 regardless of risk factors
- C. A total cholesterol above 180 mg/dL in a nonsmoking adult
- **D. Untreated LDL-C of 190 mg/dL or higher at any age** ← keyed
- E. An HDL-C below 40 mg/dL in an otherwise healthy adult

"at any age" — the AHA/ACC statin benefit groups are defined for adults; suggest "in an adult".

## All 94 concerns, verbatim

Grouped by condition. Every one of these was written without sight of the answer key.

### acute-glaucoma — Acute Angle-Closure Glaucoma

**Q4.** A patient with a shallow anterior chamber develops an acute attack shortly after taking an over-the-counter cold remedy. Which drug property precipitated it?

Mechanism label is imprecise: many OTC cold remedies mid-dilate the pupil by alpha-1 SYMPATHOMIMETIC action (pseudoephedrine, phenylephrine), not anticholinergic block; the antihistamine component is the anticholinergic one. A is still the only mydriatic option offered so the item is answerable, but the stem would be cleaner as 'antihistamine-containing cold remedy' or the option as 'mydriatic effect (anticholinergic or sympathomimetic).'

**Q7.** A 68-year-old hyperopic woman has severe right eye pain, halos, vomiting, and a rock-hard globe with an intraocular pressure of 56 mmHg. Topical timolol, brimonidine, and dorzolamide have been given. What does the module describe next?

D (immediate LPI through a steamy cornea) is the trap and is correctly wrong — LPI needs a clear cornea. Confirm the key is E; if the key were D the item teaches a real clinical error.

### aki — Acute Kidney Injury

**Q1.** Which finding meets the definition of acute kidney injury given in the module?

Option D omits the duration qualifier on the oliguria criterion — KDIGO requires urine output <0.5 mL/kg/h for at least 6 hours. As written, 'urine output under 0.5 mL/kg/h' alone is an incomplete statement of the criterion, though it is still the only defensible choice.

### aortic-dissection — Aortic Aneurysm & Dissection

**Q5.** What is the major goal of initial medical management for acute aortic dissection?

A is the only defensible option, but as written it teaches the wrong emphasis: the module's own pearl and medStudent text insist the goal is reducing dP/dt by rate control with an IV beta-blocker FIRST, then afterload, because a vasodilator alone causes reflex tachycardia and can extend the tear. An option that says only 'lower blood pressure and reduce shear stress' lets a student ratify BP-first management. Recommend rewording to name heart-rate/dP/dt control.

### aortic-stenosis — Aortic Stenosis (Valvular Disease)

**Q6.** Severe AS typically has peak velocity:

No units anywhere in the stem or options. Peak aortic velocity for severe AS is >=4.0 m/s, but a bare '>=4.0' is uninterpretable and a student could read the numbers as mean gradient (where 4.0 mmHg is trivial) or valve area (where >=4.0 cm2 is normal). Add 'm/s' to the stem.

**Q9.** Ideal TAVR candidate:

The premise is dated. TAVR is now approved and guideline-endorsed across all surgical-risk tiers, including low-risk patients, and this module's own text says so twice ('TAVR increasingly used across surgical-risk categories', 'the shift toward TAVR across surgical-risk tiers'). So the question as framed contradicts its own module. E is still the least-wrong answer because age <65 favours SAVR for lifetime valve durability, and option D (needs CABG) clearly favours SAVR — but the discriminator is age, not surgical risk. Recommend rewriting as 'older patient with limited life expectancy' or dropping the item.

### appendicitis — Appendicitis

**Q7.** Definitive treatment?

Option D 'Open surgery' is also definitive treatment for appendicitis — the two operative options differ only by approach. Laparoscopic is the module's stated standard, so E is intended, but D is not strictly false. Better distractors would be non-definitive options.

**Q10.** Clinical pearl?

'Clinical pearl?' is not a question, and option B 'Normal appetite' is a bare fragment that brushes against the module's real pearl (a genuinely hungry patient makes appendicitis less likely). D is the only defensible answer as written, but the item needs a real stem.

### aub — Abnormal Uterine Bleeding

**Q7.** A patient with heavy menstrual bleeding who hopes to conceive soon asks about tranexamic acid. Which statement is accurate?

Stem asks 'which statement is accurate' and option E is also a true statement about tranexamic acid — IV TXA (10 mg/kg) is an ACOG-endorsed option for acute hemodynamically significant AUB. C is the single best answer for this patient, but E is not strictly false. Suggest rewording E to attribute acute IV therapy to high-dose conjugated estrogen, or rewording the stem to 'best describes tranexamic acid for this patient'.

### b12-anemia — B12 / Folate Deficiency Anemia

**Q4.** A patient has a borderline serum B12 level. Which pattern confirms B12 deficiency rather than folate deficiency?

Option C ('MMA elevated with homocysteine normal and a low LDH') is partially defensible — an isolated MMA rise IS the B12-specific marker and does occur in early/mild B12 deficiency. C is only excluded by the tacked-on 'low LDH' (megaloblastic anemia raises LDH). B remains the single best answer and matches the module, but a strong student could argue C; consider rewording C so the MMA/homocysteine pattern itself is wrong rather than relying on the LDH clause.

### bowel-obstruction — Bowel Obstruction

**Q6.** Perforation risk rises once cecal diameter exceeds approximately:

Option B '6 cm' is the threshold for the colon generally, and many texts cite ~9 cm for the cecum — the stem says 'cecal diameter' so C (9-12 cm) matches the module, but a student who knows the 6 cm colonic number may be trapped. Consider naming the site explicitly as 'the cecum specifically'.

### bppv — Benign Paroxysmal Positional Vertigo

**Q2.** Which semicircular canal is involved in the large majority of BPPV cases?

Option E ('anterior canal, which is the rare form') is a factually TRUE statement about BPPV, just not an answer to 'which canal in the large majority.' Not defensible as the keyed answer, but a careless reader can be pulled to it; consider rewording E to something false.

### breast-cancer — Breast Cancer

**Q9.** A patient has just undergone axillary lymph node dissection. Which nursing measure protects the affected arm?

Minor: the blanket 'no BP cuffs/venipuncture on that arm' rule is traditional nursing teaching and is what the module states, but modern breast-surgery data (e.g. AMAROS/ASBrS-era studies) have not shown ipsilateral BP cuffs or venipuncture to raise lymphedema risk. Answer is still the intended and only defensible option.

### burns — Burns

**Q8.** Which patient should NOT receive topical silver sulfadiazine?

Option B bundles two independent contraindications (age <2 months AND sulfa allergy), so it is correct but over-determined; option C ('full-thickness burn needing a topical antimicrobial') is a legitimate SSD indication and is fine as a distractor. No error, just note that the key is only unambiguous because B stacks two reasons.

### cardiac-arrest — Cardiac Arrest (ACLS)

**Q8.** An abrupt sustained rise in ETCO2 during CPR most likely indicates:

STEM TEXT IS CORRUPTED IN LIVE CONTENT: it reads 'An abrupt sustained rise in ETCOI during CPR' — 'ETCOI' should be 'ETCO2' (end-tidal CO2). Verified in the raw JSON, not a rendering artifact. The medicine is unaffected (abrupt sustained rise = ROSC) but students are being shown a nonsense abbreviation.

### cdiff — C. difficile Colitis

**Q4.** Per the IDSA/ACG guidance cited in the module, which agent is preferred first-line for an initial episode of C. difficile infection?

MOST IMPORTANT ITEM IN MY SET. The stem asks for the agent 'preferred first-line per IDSA/ACG' — that is fidaxomicin (2021 IDSA/SHEA: fidaxomicin preferred over vancomycin), and the module's own med entry reads 'Fidaxomicin — Preferred first-line per IDSA/ACG'. But the module's vancomycin entry ALSO says 'First-line for initial non-severe and severe CDI (125 mg PO QID)', so option E is textually supported too. If the key is E, it is wrong as the stem is worded. Either way the module's two med entries contradict each other on the word 'first-line' and should be reconciled.

### cervical-cancer — Cervical Cancer

**Q7.** Which option reflects the currently preferred cervical cancer screening strategy?

The age in the keyed option is wrong for the modality it names. Primary HPV testing is NOT endorsed from age 21 — ACS starts primary HPV at 25, USPSTF (2018) permits hrHPV-alone only from 30 (cytology alone 21-29). 'Primary HPV testing every 5 years, generally starting at age 21-25' conflates the start age for cytology with the start age for HPV testing. The module has the same conflation, so the fix belongs in both. D is still the only correct option (all others are clearly wrong), but the stated age range should read 25 (or 25-30).

### cirrhosis — Cirrhosis

**Q1.** A patient with cirrhosis develops new ascites. Which event marks decompensated cirrhosis?

The stem states 'develops new ascites' and then asks which event marks decompensation — the stem gives away the key. Not a medical error, but the item tests nothing.

**Q8.** Transplant score:

Stem is a two-word fragment ('Transplant score:') and Child-Pugh sits in the option list. MELD-Na is the allocation score, but the module's own diagnosis line says 'Child-Pugh (A/B/C) and MELD-Na stratify prognosis and prioritize transplant listing' — so a student reading the module can defend E. Stem should say 'organ allocation/waitlist prioritization'.

### conjunctivitis — Conjunctivitis

**Q10.** A 4-day-old neonate has purulent conjunctival discharge. How does the module classify this?

Option A is the only defensible choice, but it is the nursing-level answer ('urgent, notify provider'). At day 3-4 of life with purulent discharge this is gonococcal ophthalmia neonatorum until proven otherwise, and the specific pathway (Gram stain/culture/NAAT plus systemic ceftriaxone, corneal-perforation risk) is never taught anywhere in this quiz. Worth adding to the explanation.

### contact-dermatitis — Contact Dermatitis

**Q10.** A machinist with chronic hand dermatitis gets only partial relief from topical steroids. Which intervention does the module identify as the definitive one?

Length cue only: keyed option is the longest and the sole non-absurd choice. Medicine (avoidance + barrier repair is definitive) is correct.

### copd — COPD

**Q4.** What is the appropriate oxygen saturation target in a patient with COPD?

Minor overgeneralisation in the stem. 88-92% is the target when titrating supplemental oxygen in a COPD patient at risk of hypercapnia (classically during an exacerbation); it is not a ceiling to be imposed on a stable COPD patient who sits at 95% on room air. The module states it flatly as the COPD target, so C is the intended and defensible answer, but the stem would be safer as 'receiving supplemental oxygen'.

### delirium — Delirium

**Q2.** Which delirium subtype is the most common and the most frequently missed?

Minor: the module explicitly teaches hypoactive as 'most common and most missed', so A is correct as written and against the module. Note only that several prospective hospital series report the MIXED subtype as most prevalent; 'most frequently missed' is uncontested for hypoactive. No change needed if the module stays the standard.

### digoxin-toxicity — Digoxin Toxicity

**Q7.** A patient with acute digoxin toxicity has a potassium of 6.1 mEq/L. Which standard hyperkalemia therapy is classically avoided?

D (IV calcium) is the intended and module-consistent answer, and remains the standard exam answer. Flagging only that the 'stone heart' prohibition is now contested by retrospective series (Levine 2011) showing no excess mortality; the module hedges this correctly as 'classic teaching' but the question stem does not, so a student reading current toxicology literature could object.

### diverticulitis — Diverticulitis

**Q7.** Management of a 4-cm pericolic abscess?

4 cm sits right at the module's own '>3-4 cm' drainage threshold, so the size chosen is borderline rather than clearly above it; 5-6 cm would make the intended answer unambiguous. A is still the only defensible choice.

### dka — Diabetic Ketoacidosis (DKA)

**Q4.** A patient in DKA has a serum potassium of 3.0 mmol/L. What must be done?

Stem gives K 3.0 mmol/L, which is below the 3.3 threshold the module cites, so B is right — but note the module's own rule is 'hold insulin if K <3.3 until repleted', and a stem written at 3.4-3.5 would flip the answer. As written it is unambiguous.

### dka-peds — Pediatric Fever & Sepsis Workup

**Q1.** How is fever defined in the pediatric workup taught in this module?

Not a quiz error, but the condition id is 'dka-peds' while the module and quiz are 'Pediatric Fever & Sepsis Workup'. A student searching for pediatric DKA will land on febrile-infant content, and there appears to be no pediatric DKA module.

### ectopic-pregnancy — Ectopic Pregnancy

**Q5.** Which clinical picture makes a patient a candidate for methotrexate rather than surgery?

Answer-length cue: D is 19 words vs ~11 for the distractors, and it is the only option that is not self-evidently disqualifying. Pickable without knowledge; consider trimming D or lengthening A/C.

### eczema — Atopic Dermatitis (Eczema)

**Q6.** What role do topical calcineurin inhibitors such as tacrolimus and pimecrolimus play?

Option A asserts TCIs 'cause no skin atrophy', which matches the module. Note the real-world caveat the option omits: tacrolimus/pimecrolimus carry a (theoretical) boxed malignancy warning — the module states this but the question never tests it. Not an error, just an incomplete picture if this is the only TCI item.

### endocarditis — Infective Endocarditis

**Q4.** By the Modified Duke (2023 ISCVID) criteria, which combination establishes definite infective endocarditis?

Stem asks 'which combination establishes definite IE' (singular) but the Duke-ISCVID clinical rule has three sufficient combinations: 2 major, 1 major + 3 minor, or 5 minor. Only 2 major appears among the options, so B is the answer and the other four are all genuinely insufficient — but option C (1 major + 1 minor) is a near-miss of the real 1 major + 3 minor rule and will read as a trap rather than a discriminator.

**Q10.** Which regimen is now favored for Enterococcus faecalis endocarditis in order to avoid aminoglycoside toxicity?

Option A (ampicillin + gentamicin) is still a guideline-endorsed regimen for E. faecalis IE, not a false statement — the stem's 'in order to avoid aminoglycoside toxicity' is what makes C the single best answer. That qualifier is load-bearing; if it were ever edited out, A and C would both be correct.

### endometriosis — Endometriosis

**Q7.** A 31-year-old with biopsy-proven endometriosis is actively trying to conceive. Which management improves her fertility?

D is the only defensible option as written and matches the module ('surgical management, not medical suppression, improves fertility'). But the option's blanket framing is a real-world oversimplification: laparoscopic excision has a modest fertility benefit mainly in minimal/mild disease, and excision of an ovarian endometrioma can reduce ovarian reserve — ART/IVF is often the preferred path for a 31-year-old actively trying to conceive. Worth softening the option or the explanation so students do not learn 'endometriosis + infertility = operate'.

### failure-to-thrive — Failure to Thrive

**Q3.** Which statement about the causes of failure to thrive is correct?

Minor internal tension in the module, not necessarily the item: whatItIs calls 'inadequate caloric intake' the most common bucket while medStudent says 'non-organic causes dominate.' Both point to D, so the item still works, but a student who reads 'inadequate intake' as an organic-neutral category could hesitate.

### febrile-neutropenia — Febrile Neutropenia

**Q7.** When after cytotoxic chemotherapy is the neutrophil nadir, and therefore the febrile-neutropenic call, typically expected?

Only a documentation inconsistency, not an answer error: the module's whatItIs says the nadir is 'typically 5-10 days post-treatment' while its pearl says 'days 7-10'. Option C (7-10 days) is the only defensible choice among those offered, so the item still works, but the module should be made internally consistent.

### fluid-overload — Fluid Volume Overload

**Q2.** Which combination is the classic triad of decompensated left-sided congestion?

Minor conceptual point inherited from the module: JVD is a sign of raised RIGHT atrial/central venous pressure, so 'S3 + JVD + crackles' is really the triad of biventricular/decompensated heart failure rather than of isolated LEFT-sided congestion. A is unambiguously the intended and only workable answer; the label 'left-sided' is what is loose.

### fracture — Fractures

**Q2.** Among the 6 P's of compartment syndrome, which is the earliest sign?

Answer is right for this module (fracture module: 'pain is the earliest sign'), but the compartment-syndrome module in the same app teaches that the 6 P's 'are a trap'. A student meeting both items may read them as contradictory; consider adding 'and pain with passive stretch' framing rather than validating the 6 P's as an ordered sequence.

**Q8.** A patient in a cast reports escalating pain that worsens with passive stretch, and the compartment feels tense. What is the correct action?

D is the only defensible option, but as written it teaches the wrong first move: in a casted limb the immediate bedside maneuver is to bivalve/split the cast and cut the padding to skin (the compartment module calls this the first maneuver, and compartment Q6 in this same review file requires it). D jumps straight from clinical suspicion to fasciotomy with no mention of releasing the external constriction. Recommend rewording D to 'remove/bivalve the cast and take the patient emergently for fasciotomy — it is a clinical diagnosis'.

### gastric-cancer — Gastric Cancer

**Q6.** A patient with apparently resectable gastric cancer has a CT that shows no metastatic disease. Which additional step is recommended before curative resection?

Distractor D ('Empiric perioperative FLOT chemotherapy with no further staging at all') names the actual guideline-standard treatment for resectable gastric cancer and is only made wrong by its trailing clause. A student who knows FLOT may pick D. Reword D to remove the correct-therapy bait (e.g. 'Proceed straight to gastrectomy with no further staging').

### gbs — Guillain-Barré Syndrome

**Q4.** A patient with ascending weakness has a forced vital capacity of 18 mL/kg and a negative inspiratory force of -25 cm H2O. Applying the 20/30/40 rule, what does this mean?

The question is clinically right (FVC 18 <20 mL/kg and NIF -25 is weaker than -30, so both thresholds are breached), but the MODULE states the rule as 'NIF < -30 cm H2O', which read literally means more negative than -30 — the inverse of the real threshold. A student applying the module's wording to -25 would conclude the NIF is still acceptable and pick E. The module pearl should read 'NIF weaker than -30 (i.e. above -30)'.

### hhs — Hyperosmolar Hyperglycemic State (HHS)

**Q8.** Typical fluid deficit:

Module states the deficit is 'often 8-10 L', which falls inside option C (5-10 L) — so C is right — but a student who memorized '8-10 L' from the module may hunt for a closer option. Not an error; flagging only because the option set does not mirror the module's own number.

### hiv — HIV / AIDS

**Q4.** Twelve days after a high-risk exposure, a patient has fever, pharyngitis, rash, and lymphadenopathy, and the antibody differentiation assay is negative. What does the module direct?

Stem sequencing is slightly off the module's own algorithm — it reports a negative HIV-1/2 antibody DIFFERENTIATION assay, which is only run after a reactive Ag/Ab screen; at 12 days a 4th-gen screen would more plausibly be the first test. The intended teaching point (acute HIV can be antibody-negative, so order HIV RNA) is correct and A is unambiguous.

### htn — Hypertension

**Q1.** Which blood pressure reading meets the current US definition of stage 1 hypertension?

TWO options meet the ACC/AHA 2017 definition of stage 1 hypertension. Stage 1 is SBP 130-139 OR DBP 80-89 — the criteria are disjunctive. Option C (132/84) qualifies on systolic, but option E (118/82) qualifies on DIASTOLIC (82 is within 80-89) and is therefore also stage 1 hypertension, not 'normal' or 'elevated'. The module's own text writes the range as '130-139/80-89', which reads as conjunctive and probably misled the author. Either replace option E with a diastolic below 80 (e.g. 118/76) or reword the stem.

### hyperkalemia — Hyperkalemia

**Q8.** A dialysis patient with chronic hyperkalemia needs an agent for ongoing outpatient control so that guideline-directed RAAS therapy can continue. Which option matches the module?

The stem is clinically incoherent: it specifies a DIALYSIS patient, but the rationale it gives ('so that guideline-directed RAAS therapy can continue') is the CKD/heart-failure indication for patiromer/SZC. In an established hemodialysis patient, chronic hyperkalemia is managed by dialysis prescription, dietary potassium and interdialytic interval, not by a binder to preserve RAAS blockade. The keyed answer is still A; the stem should say 'a CKD patient on an ACE inhibitor' or 'a heart failure patient'.

### hyperlipidemia — Hyperlipidemia

**Q4.** Which of the following is one of the four AHA/ACC statin benefit groups?

D is clearly the intended and only correct option, but 'at any age' is imprecise — the four AHA/ACC statin benefit groups are defined for adults (age >=20); pediatric familial hypercholesterolemia is managed under separate guidance. Suggest 'in an adult' instead of 'at any age'.

### hypernatremia — Hypernatremia

**Q4.** A hypernatremic patient has a urine osmolality of 750 mOsm/kg. What does this indicate?

C is clearly the best option, but 750 mOsm/kg sits inside the module's own borderline band — the diagnosis bullet says '>600-800 = appropriate' while the medStudent bullet says '>700-800 = appropriate' and calls intermediate values partial DI/osmotic diuresis. A value of 850-900 would make the intended answer unambiguous.

### hyperparathyroid — Hyperparathyroidism

**Q1.** Elevated calcium with inappropriately normal PTH suggests?

Stem is genuinely ambiguous as written: familial hypocalciuric hypercalcemia (option D) ALSO presents with elevated calcium and an inappropriately normal PTH — that is precisely why question 3 of this same quiz asks how to exclude it. Both D and E are defensible on the stem alone. Fix by adding a discriminator (e.g. 'with elevated 24-hour urine calcium' or 'is MOST consistent with').

**Q8.** Classic mnemonic excludes?

Item quality, not medicine: 'Classic mnemonic excludes?' is a negatively-framed stem with no clue which mnemonic is meant. Hematuria is the only option outside 'stones, bones, groans, psychiatric moans', so the key is derivable, but hematuria is a real feature of the nephrolithiasis the mnemonic's 'stones' refers to, which makes the exclusion feel arbitrary to a student.

### hypokalemia — Hypokalemia

**Q9.** A patient treated for hyperkalemia with insulin now has a potassium of 3.1 mEq/L. What does this mechanism imply about total-body potassium?

E is the intended and best answer (transcellular shift, so the deficit is not real), but the stem is imprecise: a patient who was HYPERkalemic before insulin most likely has a normal-to-HIGH total body potassium, not a normal one. Saying total-body K is 'normal' is only strictly true if the pre-treatment hyperkalemia was itself purely a shift. Reword as 'total-body potassium is not depleted' or change the stem to a beta-agonist-treated asthmatic.

### hypothyroid — Hypothyroidism

**Q1.** Which laboratory pattern indicates primary hypothyroidism?

Option B (raised TSH with normal free T4) is subclinical primary hypothyroidism, i.e. also a primary pattern. The module explicitly labels it 'subclinical', so E (overt primary) is the intended answer, but the stem would be airtight if it said 'overt primary hypothyroidism'.

**Q6.** Why should levothyroxine be started at a low dose in an elderly patient with cardiac disease?

Minor distractor flaw: option A ('the elderly need less hormone overall') is factually true — weight-based levothyroxine requirement does fall with age and lean body mass — so it is a true statement offered as a wrong answer. It does not answer the question asked (why go slow in cardiac disease), so E remains correct, but a true distractor is worth tightening.

### ibd — Inflammatory Bowel Disease

**Q7.** A patient with moderate-to-severe IBD is being evaluated for immunomodulator and biologic therapy. Which assessment set is most appropriate?

The correct option is far longer and more detailed than all four distractors — pickable on length alone without any IBD knowledge.

**Q10.** A patient has had extensive ulcerative colitis for nine years and also has primary sclerosing cholangitis. Which management principle is most appropriate?

Same length cue as Q7 — the keyed option is a full sentence with rationale while every distractor is a short clause.

### kawasaki — Kawasaki Disease

**Q6.** How is IVIG resistance defined, and what is the standard next step?

Medicine is right; precision nit: the AHA definition is persistent/recrudescent fever beginning at least 36 hours after COMPLETION of the IVIG infusion. Option B says 'after the first dose', which is how the module words it, so it is internally consistent — no change needed unless the module is updated.

### labor — Labor & Delivery Stages

**Q7.** A postpartum patient with asthma and chronic hypertension has continued hemorrhage despite oxytocin. Which additional agent is safest?

Misoprostol (option A) is the classic SAFE uterotonic in asthma plus hypertension — it is the textbook answer to 'which uterotonic can I still give this patient.' Option A is disqualified only by the appended clause 'given simultaneously with a high-dose oxytocin infusion' (a do-not-combine caveat that in the module belongs to cervical ripening in an UNDELIVERED patient, not to PPH treatment, where miso + oxytocin is routine). Two options are therefore defensible and the discriminator is a parenthetical, not the drug. Also note TXA is an antifibrinolytic adjunct, not a uterotonic, so it does not really answer 'continued hemorrhage despite oxytocin — which additional agent.' Suggest rewriting option A as plain 'Misoprostol' and making the correct answer that, or restating the stem as 'which adjunct reduces bleeding-related mortality.'

### leukemia — Leukemia

**Q5.** A patient with a markedly elevated white count is found to carry the Philadelphia chromosome, t(9;22). Which therapy is first-line?

Minor: the stem gives only t(9;22) plus a high WBC, which fits CML (TKI monotherapy first-line) but also Ph-positive ALL, where first-line is a TKI PLUS multiagent chemotherapy rather than a TKI alone. B is still the best answer as written; adding a lineage cue ('mature myeloid cells/basophilia' or 'chronic phase') would remove the residual ambiguity.

### lung-cancer — Lung Cancer

**Q3.** Which is the leading cause of lung cancer in people who have never smoked?

D (second-hand smoke) is a competing answer some texts give for never-smoker lung cancer. Radon is correct per EPA/ACS and the module states it explicitly ('leading cause in non-smokers, #2 overall'), so A stands — but the item would be tighter if it said 'environmental exposure' or excluded second-hand smoke as a distractor.

**Q5.** What is required to establish a definitive diagnosis of lung cancer?

B (sputum cytology showing malignant cells) is not strictly false — positive cytology can establish malignancy for a central lesion. A remains best because molecular/PD-L1 typing requires tissue, which the module states. Weak ambiguity only.

**Q6.** A patient with small cell lung cancer develops hyponatremia. Which paraneoplastic syndrome is most likely?

Distractor C ('Cushing syndrome from cortisol-secreting adrenal adenoma') risks reinforcing a misconception: SCLC-associated Cushing is ectopic ACTH, not an adrenal adenoma, and an adrenal adenoma is not a paraneoplastic syndrome at all. It is unambiguously wrong so the key is safe, but the wording teaches badly.

### lymphoma — Lymphoma

**Q3.** Why is excisional lymph node biopsy required rather than fine-needle aspiration?

Wording is factually loose (inherited from the module): FNA does not 'destroy' nodal architecture, it fails to sample/preserve it — the node is left intact. Option E is also partly true in practice (FNA cellularity is often inadequate for a full IHC panel), though flow cytometry can be run on aspirates. B is clearly the intended and best answer; suggest 'does not preserve the nodal architecture needed for classification'.

### melanoma — Melanoma

**Q10.** A 1.2 mm non-ulcerated melanoma has been diagnosed on excisional biopsy. What is the definitive local treatment?

Minor: the stem asks for the 'definitive local treatment' but the only defensible option bundles sentinel node sampling, which is a staging procedure rather than local treatment, with the wide local excision. Not wrong medically (SLNB is indicated at 1.2 mm and is done at the same setting), but the stem and option are not describing the same category of intervention.

### menieres — Meniere's Disease

**Q4.** Which combination satisfies the clinical diagnostic criteria for Meniere's disease?

Option B states only two of the three Barany/AAO-HNS criteria for DEFINITE Meniere disease — it omits fluctuating aural symptoms (tinnitus/fullness) in the affected ear, which the module itself lists. Still clearly the best option; consider adding the aural-symptom clause so the keyed answer is a complete criteria set.

**Q10.** During an acute Meniere's vertigo attack, which nursing action is the priority?

Option D is much longer and more itemized than every distractor (it lists five separate safety measures). Length cue makes it pickable without knowledge; worth trimming toward the ~1.2x threshold used elsewhere in the bank.

### meningitis — Bacterial Meningitis

**Q4.** A 74-year-old man presents with fever, neck stiffness, and confusion. Which empiric antibiotic regimen is appropriate?

Answer hinges entirely on age 74 (>50) triggering ampicillin for Listeria. Option C (ceftriaxone + vancomycin) is the correct regimen for a younger adult, so a student who misses the age will pick C. Not an error, but the age is the whole question — worth keeping the '74-year-old' prominent.

### metabolic-syndrome — Metabolic Syndrome

**Q8.** Approximate increase in type 2 diabetes risk?

Pure-number recall with two defensible options. The module states ~5x for type 2 diabetes (and ~2x for CVD), so D (5x) is the module's answer, but the published range is roughly 3-5x depending on cohort and definition, making C (3x) defensible from the literature. Option B (2x) is the CVD figure sitting in the same option list, which invites a student who half-remembers the module to pick it. Consider rewording to 'about 5-fold' in the stem or dropping this item.

### myasthenia — Myasthenia Gravis

**Q9.** A patient with prominent bulbar, neck and respiratory weakness is anti-AChR negative, anti-MuSK positive, and has responded poorly to pyridostigmine. Which agent is highlighted for this subtype?

Rituximab is right for anti-MuSK disease, but option B (efgartigimod) and A (eculizumab) are real MG drugs whose labelled indication is anti-AChR-POSITIVE generalized MG — a student who does not know that antibody restriction could defend B. The stem's 'anti-AChR negative' is what excludes them; that is the discriminator and it is present, so the item stands.

### osa — Obstructive Sleep Apnea

**Q4.** Mild OSA AHI range?

The option ranges overlap at their boundaries ('5-15' and '15-30'), so an AHI of exactly 15 literally satisfies both B and C. Mild is 5 to <15 and moderate 15 to 30; B is clearly the intended and correct answer but the ranges should be written 5 to <15 / 15 to 30.

### otitis-externa — Otitis Externa

**Q3.** How is otitis externa classified by duration and invasiveness?

Option D (acute <4wk / subacute 4-12wk / chronic >=12wk) is a real duration scheme used for other otologic disease and reads plausibly; C is nonetheless uniquely correct because the stem asks for duration AND invasiveness and only C carries the necessarating/malignant axis. Acceptable, but D is the strongest distractor in the file.

**Q10.** Which prevention counseling is appropriate at discharge for a swimmer with resolving otitis externa?

Minor internal tension with the module, which warns that acidifying/drying drops (acetic acid, isopropyl alcohol) should NOT be instilled into an inflamed canal. The stem says 'resolving' OE, so post-swim acidifying prophylaxis is still the right teaching, but the stem would be cleaner as 'after full resolution' or 'once treatment is complete.'

### otitis-media — Acute Otitis Media

**Q5.** A 2-year-old with no drug allergies is started on high-dose amoxicillin, roughly 80-90 mg/kg/day divided twice daily, for acute otitis media. Why is the dose high?

Good discriminator, but note the reasoning must hold: high-dose amoxicillin beats altered-PBP penicillin-intermediate pneumococcus, NOT beta-lactamase (option E) — dose escalation does nothing against beta-lactamase. If the key is E this is a hard mechanistic error.

### ovarian-torsion — Ovarian Torsion

**Q9.** A 19-year-old has sudden severe right pelvic pain, vomiting, and a 6 cm adnexal mass; Doppler shows preserved arterial flow. What is the next step?

Wording nit only, not a keying error: 'Proceed to diagnostic laparoscopy' is right, but real-world phrasing is urgent gynecology consult for operative evaluation. A student who reads E as 'the ED orders laparoscopy' is still choosing correctly, so no change strictly required.

### pad — Peripheral Arterial Disease

**Q10.** Which statement best reflects the prognosis of symptomatic PAD and the lipid goal that follows from it?

Medicine is right (PAD is a CAD risk equivalent; high-intensity statin, LDL <70) but the item is answerable without knowledge: E is ~35 words while A-D are 12-18, and it is the only option that is not self-evidently absurd. Same cueing pattern the repo's own length heuristic flags. Also worth noting the 2024 ACC/AHA PAD guideline and the module both add 'many favor <55', so <70 is a floor not a ceiling.

### pancreatic-cancer — Pancreatic Cancer

**Q8.** A man with pancreatic adenocarcinoma develops migratory superficial thrombophlebitis. What does this represent, and how is cancer-associated VTE treated?

The clause 'LMWH is preferred over warfarin' is true but now dated as a stand-alone statement — ASCO/ITAC/CHEST currently place apixaban/rivaroxaban/edoxaban alongside LMWH as first-line for cancer-associated VTE (LMWH still favored in luminal GI/unresected GI primaries, which does apply to pancreatic cancer). Consider adding 'or a DOAC' to the explanation so students are not taught DOACs are contraindicated.

### peritonsillar-abscess — Peritonsillar Abscess

**Q8.** When performing needle aspiration of a peritonsillar abscess, how is the needle directed and why?

Anatomically the internal carotid is posterolateral (not purely lateral) to the tonsil; 'just lateral' matches the module and standard exam teaching, so the keyed answer is fine, but a student who has learned 'posterolateral' should not be penalized.

### pressure-injury — Pressure Injuries

**Q10.** A hospitalized patient develops a new Stage 3 pressure injury. Which statement best captures its significance?

Minor terminology: 'never event' is NQF language; CMS lists Stage III/IV pressure ulcers as a Hospital-Acquired Condition (non-payment). Answer is correct and module-consistent, but a purist would want 'CMS hospital-acquired condition.'

### prostate-cancer — Prostate Cancer

**Q5.** Why is a GnRH agonist such as leuprolide paired with an antiandrogen when androgen-deprivation therapy is started?

Mechanistic error in the keyed option as written: an antiandrogen does NOT prevent the initial testosterone surge — the surge still occurs; the antiandrogen blocks the androgen receptor so the surge has no clinical (tumor-flare) effect. Option A says 'to prevent the initial testosterone flare', which teaches the wrong mechanism. Only a GnRH ANTAGONIST (degarelix/relugolix) prevents the surge. Recommend rewording to 'to block the clinical tumor flare caused by the initial testosterone surge'. A is still the only defensible choice.

### pud — Peptic Ulcer Disease

**Q4.** Why biopsy gastric ulcers?

Option E ('Detect H. pylori only') is partially true — biopsy at EGD does include a rapid urease test — but the word 'only' makes it wrong and A is unambiguously the primary reason. Acceptable as written.

### ra — Rheumatoid Arthritis

**Q9.** A patient started on methotrexate three months ago still has moderate disease activity by DAS28. What does a treat-to-target approach direct?

Minor: the stem does not state that methotrexate was titrated to an adequate dose. Escalation is correct per ACR 2021 treat-to-target, but optimizing/maximizing the MTX dose (or adding csDMARDs as triple therapy) is a legitimate alternative step; adding 'despite an optimized methotrexate dose' to the stem would remove the ambiguity.

### respiratory-acidosis — Respiratory Acidosis

**Q4.** An arterial blood gas shows a PaCO2 of 80 mmHg with an HCO3- of 34 mEq/L and only a mildly reduced pH. How is this best classified?

Numbers are internally inconsistent with the stem's own wording. PaCO2 80 (40 above normal) with a fully chronic 3-4 mEq/L per 10 mmHg rule predicts HCO3 36-40; the given HCO3 of 34 sits just below that, and the resulting pH is ~7.25, which is moderate rather than the 'only mildly reduced' the stem claims. B is still the best answer, but a strong student could argue acute-on-chronic. Cleaner fix: HCO3 38 with pH ~7.30.

### respiratory-alkalosis — Respiratory Alkalosis

**Q9.** A ventilated patient with chronic hypocapnia is being weaned toward a normal PaCO2. What caution applies?

Two options (B and E) both endorse gradual correction and differ only in the stated mechanism. B is correct — rebound cerebral vasodilation and raised ICP is the hazard of correcting chronic HYPOcapnia. E's 'post-hypercapnic metabolic alkalosis and seizures' belongs to chronic HYPERcapnia and is wrong here. Defensible as written, but the discriminator is subtle and E will draw students who answer on the 'go slowly' cue alone.

### retinal-detachment — Retinal Detachment

**Q10.** Two days after vitrectomy with gas tamponade a patient reports severe eye pain, nausea, and halos. What does this suggest?

Distractor B reads 'Endophthalmitis that mandates immediate intravitreal anti-VEGF therapy' — anti-VEGF is the wrong drug class entirely (endophthalmitis needs intravitreal antibiotics plus tap). It works as a wrong option, but the wrongness is in the treatment clause rather than the diagnosis, so a student who correctly suspects infection could be misled unless the feedback text explicitly corrects the drug class.

### shock — Shock (Types & Management)

**Q4.** A hypotensive patient has bounding pulses, flushed warm skin, and flash capillary refill. Which category does this suggest?

Option D is not parallel to the other choices (it is an assertion about neurogenic shock, not a category) and is factually false as written — neurogenic shock is a distributive/warm shock. Harmless as a distractor but stylistically off.

### siadh — SIADH

**Q8.** Major risk of rapid correction?

Minor: option E (cerebral edema) is the consequence of the hyponatremia itself, not of rapid correction — it reads as a plausible trap but is clearly wrong, so the item is sound. No change needed.

### sinusitis — Sinusitis (Rhinosinusitis)

**Q7.** Which antibiotic is the preferred alternative for acute bacterial rhinosinusitis in a penicillin-allergic adult?

Two defensible options. IDSA lists doxycycline OR a respiratory fluoroquinolone (levofloxacin/moxifloxacin) for the penicillin-allergic adult, so D (moxifloxacin) is not clinically wrong — it is only second-line because of the boxed warnings. The item survives on the word 'preferred'; a student who picks D is reasoning correctly and should get feedback explaining the stewardship reason rather than being told moxifloxacin does not work.

### sjs-ten — Stevens-Johnson Syndrome / TEN

**Q3.** Which drug does the module name as the single most common cause of SJS/TEN worldwide?

Allopurinol is right per EuroSCAR/RegiSCAR and per the module pearl, but TMP-SMX (option E) is what First Aid and most US-based teaching name as the classic/most common culprit. A well-read student can defensibly pick E; the stem is rescued only by the explicit 'does the module name' and 'worldwide' framing. Worth making the explanation cite the European registry data so the student who picks E learns why.

**Q10.** A patient recovering from carbamazepine-induced SJS is being prepared for discharge. Which two measures does the module emphasize?

Minor: HLA-B*15:02 screening does not benefit this patient, who has already reacted and will avoid carbamazepine for life — its value is in screening relatives/future prescribing. The option's wording ('to prevent future cases') is defensible but a student may read it as screening this patient. Length cue also present (keyed option is much the longest).

### skin-cancer — Non-Melanoma Skin Cancer (BCC/SCC)

**Q2.** Which statement correctly contrasts the metastatic behavior of BCC and cutaneous SCC?

Correct option is by far the longest and the only internally consistent one; the four distractors are all self-evidently absurd (both identical, fully reversed, neither metastasizes), so the item is answerable without knowing BCC/SCC biology. Medicine is correct.

**Q7.** Which set of features identifies a cutaneous squamous cell carcinoma as high-risk and drives workup or adjuvant therapy?

Length/format cue: the keyed option is a long feature list while all four distractors describe entirely different entities (BCC dermoscopy, Gorlin, AK field, xeroderma pigmentosum). Content is accurate.

### strep-pharyngitis — Streptococcal Pharyngitis

**Q6.** A 7-year-old with tonsillar exudates, fever, tender anterior nodes, and no cough has a negative rapid antigen detection test. What is the next step?

Guideline answer is B (IDSA requires backup culture after a negative RADT in children), but this child has a McIsaac score of 4-5 and some clinicians would treat empirically, making C partly defensible in practice. Answer B stands; the explanation should say why empiric treatment is not the guideline-preferred route rather than calling it simply wrong.

### stroke — Ischemic Stroke

**Q8.** Six hours after alteplase, a patient develops a sudden severe headache, vomiting, and a falling level of consciousness. What is the concern and the immediate action?

The diagnosis (hemorrhagic conversion) and the action (emergent non-contrast CT) are right, but the action clause 'stop the thrombolytic' is impossible at the stated timepoint — alteplase is a bolus plus a 60-minute infusion, so at SIX hours the drug finished five hours ago. Either move the stem to 'during the alteplase infusion' or change the action to 'hold antithrombotics, emergent CT, check fibrinogen/type and screen, and give cryoprecipitate plus an antifibrinolytic.' As written it teaches students to look for an infusion that is not running.

### t2dm — Type 2 Diabetes Mellitus

**Q2.** Which result establishes a diagnosis of diabetes?

Minor: ADA requires confirmation on a second test (repeat A1c or a second criterion) unless there is unequivocal hyperglycemia, so a single A1c >=6.5% strictly speaking establishes the diagnosis only on repeat. E is still clearly the intended and only defensible option.

### tb — Tuberculosis

**Q4.** Which test is the gold standard for confirming active pulmonary tuberculosis?

Minor precision issue: culture (not smear) is the gold standard; the option bundles 'AFB smear and culture' together, which is the only defensible choice here but blurs the point that a negative smear does not exclude active TB. No wrong answer, just imprecise.

### tca-od — Tricyclic Antidepressant Overdose

**Q8.** Which agent is explicitly contraindicated in tricyclic antidepressant overdose because it can precipitate asystole?

Answer B (physostigmine) is the correct and module-consistent answer, but note the asystole association rests on two 1980 case reports and modern toxicology views it as overstated; the option's absolute phrasing ('explicitly contraindicated because it can precipitate asystole') is fine for exam purposes but is classic rather than current-evidence teaching.

### thrombocytopenia — Thrombocytopenia

**Q9.** Which laboratory pattern does the module use to distinguish DIC from immune thrombocytopenia?

Mild stem ambiguity: the question asks for the pattern that 'distinguishes DIC from ITP', and options B and D are accurate ITP patterns that equally serve that distinction. C is the only DIC-specific signature so it is the intended and defensible key, but the stem would be tighter as 'which pattern indicates DIC rather than ITP'.

### withdrawal — Alcohol & Substance Withdrawal

**Q1.** What neuroadaptation does the module give as the basis for alcohol and sedative-hypnotic withdrawal?

Option A states the ACUTE pharmacologic action of ethanol (potentiates GABA-A, suppresses NMDA) while the stem asks for the NEUROADAPTATION. The actual chronic adaptation is the reverse at the receptor level — GABA-A downregulation plus NMDA upregulation — which is what the module's own medStudent bullet says ('chronic ethanol upregulates NMDA and downregulates GABA-A'). A is still the only defensible option (its second clause is correct and D/E are frankly wrong), but the two module sections conflict and a strong student could balk at the first clause. Suggest rewording A to 'chronic alcohol downregulates GABA-A and upregulates NMDA'.

