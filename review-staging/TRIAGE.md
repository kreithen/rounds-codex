# Triage of the 94 blinded-review concerns

> **STATUS 2026-07-29.** Tier 0 (4 items) is **live**. Tier 1 (9 teaching errors), the 20 genuine
> length-cue items and the `dka-peds` rename are all **applied and verified but NOT pushed** —
> three commits sitting on the app clone, awaiting a look before deploy. Tier 3 (module text) and
> Tier 5 (stem wording) are untouched.
>
> Two corrections to this document's own first draft, both from measuring rather than reading:
> - The length-cue sweep is **not mechanical**. These distractors are clinical fragments, not
>   abbreviations, so lengthening one means writing medical text — and a padded distractor can
>   become defensible.
> - **"91 items" over-counts.** The ratio is measured in characters and assumes prose options, so
>   it also flags term-list questions where every option is a short recognisable noun phrase.
>   `cirrhosis` Q3 keys "Ultrasound" against ERCP/MRI/CT/PET at 3.33x, but nobody picks that on
>   length. Only **20** have the exploitable clause-vs-fragment shape; those are fixed, the other
>   71 deliberately left alone.
>
> Also resolved: all three "if the key is X this teaches a real error" flags were checked and
> **none of the feared errors exists** (see below).

Companion to `REVIEW-REPORT.md`, which records every concern verbatim. This is the decision
document: what each one actually needs, ordered by whether a student is currently being taught
something wrong.

**Nothing in this file has been applied.** Four items are already fixed and are listed at the top
for completeness; everything below Tier 0 is awaiting your call.

---

## Tier 0 — already fixed and shipped or staged

| item | defect | state |
|---|---|---|
| `cardiac-arrest` Q8 | stem and explanation read `ETCOI` for `ETCO2` | **pushed live** |
| `htn` Q1 | option E (118/82) also satisfied stage 1 on the diastolic limb; `why[E]` conceded it | staged, not pushed |
| `aortic-stenosis` Q6 | no units anywhere on a numeric velocity question | staged, not pushed |
| `aortic-dissection` Q5 | keyed option taught BP-first; module's pearl is rate control first | staged, not pushed |

---

## Verified clean — three conditional flags that do not hold

Three reviewers wrote "if the key is X, this item teaches a real clinical error." I checked all
three keys. **None of the feared errors is present**, so these need nothing:

- **`cdiff` Q4** — key is **A, fidaxomicin**, which is correct per IDSA/SHEA 2021. The reviewer
  worried it might be E (oral vancomycin). It is not.
- **`otitis-media` Q5** — key is **A**, raising middle-ear levels above the MIC of
  penicillin-intermediate pneumococcus (altered PBPs). The reviewer worried it might be E
  (beta-lactamase), which would have been a hard mechanistic error. It is not.
- **`acute-glaucoma` Q7** — key is **E**. The reviewer worried it might be D, immediate laser
  iridotomy through a steamy cornea. It is not.

The `cdiff` reviewer raised a second, separate point that *does* stand: the module's **vancomycin**
entry also says "first-line", contradicting the fidaxomicin entry. The quiz is right; the module
text should be reconciled.

---

## Tier 1 — a student is currently taught something wrong

These are the ones I would fix. Each is a teaching error, not a style problem.

**`prostate-cancer` Q5 — wrong mechanism.** The keyed option says an antiandrogen is given "to
prevent the initial testosterone flare." It does not prevent the surge; it blocks the receptor so
the surge has no clinical effect. Only a GnRH *antagonist* (degarelix, relugolix) prevents the
surge itself. Reword to "to block the clinical tumor flare caused by the initial testosterone
surge."

**`stroke` Q8 — an instruction that is impossible at the stated time.** The action clause says
"stop the thrombolytic" at six hours post-alteplase. Alteplase is a bolus plus a 60-minute
infusion, so it finished five hours earlier. As written it trains students to hunt for an infusion
that is not running. Either move the stem to "during the alteplase infusion" or change the action
to hold antithrombotics, emergent non-contrast CT, fibrinogen and type-and-screen, cryoprecipitate
plus an antifibrinolytic.

**`fracture` Q8 — skips the first maneuver.** The keyed option goes from clinical suspicion
straight to fasciotomy in a casted limb. The app's own compartment-syndrome module teaches that
bivalving the cast and cutting the padding to skin is the first step, and `compartment` Q6 requires
it. Two modules currently disagree. Reword to release the external constriction first.

**`withdrawal` Q1 — states the acute action where the chronic adaptation was asked.** Option A
gives ethanol's acute pharmacology (potentiates GABA-A, suppresses NMDA) while the stem asks for
the neuroadaptation, which is the reverse: GABA-A downregulation plus NMDA upregulation. The
module's own medStudent bullet says the reverse of the option. Reword A.

**`hyperkalemia` Q8 — clinically incoherent stem.** It specifies a dialysis patient but gives the
CKD/heart-failure rationale ("so guideline-directed RAAS therapy can continue"). In an established
hemodialysis patient chronic hyperkalemia is managed by dialysis prescription, dietary potassium
and interdialytic interval. Change the stem to a CKD patient on an ACE inhibitor.

**`cervical-cancer` Q7 — wrong start age for the modality named.** "Primary HPV testing every 5
years, generally starting at age 21-25" conflates the cytology start age with the HPV start age.
ACS starts primary HPV at 25; USPSTF permits hrHPV-alone from 30. The module carries the same
conflation, so both need the fix.

**`osa` Q4 — overlapping ranges make two options literally correct.** Options read "5-15" and
"15-30", so an AHI of exactly 15 satisfies both. Should be "5 to <15" and "15 to 30".

**`hyperparathyroid` Q1 — genuinely ambiguous.** Familial hypocalciuric hypercalcemia (option D)
also presents with high calcium and an inappropriately normal PTH — which is exactly why Q3 of the
same quiz asks how to exclude it. Needs a discriminator in the stem (24-hour urine calcium, or
"MOST consistent with").

**`labor` Q7 — the discriminator is a parenthetical.** Misoprostol is the textbook safe uterotonic
in asthma plus hypertension. Option A is disqualified only by an appended "given simultaneously
with a high-dose oxytocin infusion" clause — and in PPH treatment miso plus oxytocin is routine.
Separately, TXA is an antifibrinolytic, not a uterotonic, so it does not answer "which additional
*agent*". Needs a rewrite of A or the stem.

---

## Tier 2 — the answer is guessable from form, and the reviewers under-called it

Nine items were flagged for length cues. **Seven of the nine are actually under the repo's own
2.0x threshold** — reviewers were judging by impression. Measured:

| flagged item | actual ratio | over 2.0x? |
|---|---:|---|
| `ibd` Q7 | 2.57x | yes |
| `ibd` Q10 | 2.11x | yes |
| `menieres` Q10 | 1.71x | no |
| `pad` Q10 | 1.69x | no |
| `ectopic-pregnancy` Q5 | 1.56x | no |
| `contact-dermatitis` Q10 | 1.51x | no |
| `skin-cancer` Q7 | 1.40x | no |
| `sjs-ten` Q10 | 1.32x | no |
| `skin-cancer` Q2 | 1.28x | no |

The real finding is the one nobody flagged: **91 of 1,820 questions (5%) exceed 2.0x**, and the
worst are far worse than anything named above.

| ratio | item |
|---:|---|
| 9.14x | `siadh` Q9 |
| 7.78x | `hyperparathyroid` Q3 |
| 4.20x | `pud` Q3 |
| 4.15x | `osa` Q1 |
| 4.12x | `appendicitis` Q6 |
| 3.87x | `bowel-obstruction` Q1 |
| 3.78x | `bowel-obstruction` Q3 |
| 3.71x | `hhs` Q3 |
| 3.52x | `osa` Q3, `osa` Q9 |

The pattern is diagnostic: `osa`, `hhs`, `di`, `pud`, `cirrhosis`, `bowel-obstruction`,
`diverticulitis` and `appendicitis` are all **transcribed from your PDFs**, where distractors are
terse fragments and the correct answer is a full sentence. This is a mechanical fix — lengthen the
distractors, never truncate the answer — and it can be done as one sweep without touching any
medicine. **This is the highest-value bulk item in the whole review.**

---

## Tier 3 — module text should change, not the quiz

The quiz is right and the module is what needs editing.

- **`gbs` Q4** — the module states the rule as "NIF < -30 cm H2O", which read literally means *more*
  negative than -30, inverting the real threshold. A student applying the module's wording to a NIF
  of -25 would call it acceptable. Should read "weaker than -30 (i.e. above -30)".
- **`cdiff`** — vancomycin and fidaxomicin entries both claim "first-line".
- **`febrile-neutropenia` Q7** — `whatItIs` says the nadir is 5-10 days, the pearl says 7-10.
- **`failure-to-thrive` Q3** — `whatItIs` calls inadequate intake the commonest bucket while
  `medStudent` says non-organic causes dominate.
- **`cervical-cancer` Q7** — same HPV start-age conflation as the quiz.

---

## Tier 4 — a separate structural bug, not a quiz concern

**`dka-peds` is misnamed.** The condition id is `dka-peds` but the content is
*"Pediatric Fever & Sepsis Workup"* — and there is no pediatric DKA module anywhere in the app. A
student searching for pediatric DKA lands on febrile-infant content, and the share link
`/c/dka-peds` promises one thing and delivers another. Either rename the id to match its content or
author the pediatric DKA module the id implies. **Renaming an id is not free** — it changes a
public share URL and any bookmark pointing at it.

---

## Tier 5 — stem wording, answer stands

Worth doing, none urgent. Grouped so they can be swept in one pass.

*Add a missing qualifier:* `aki` Q1 (KDIGO oliguria needs "for at least 6 hours"), `copd` Q4
("receiving supplemental oxygen"), `hypothyroid` Q1 ("overt"), `t2dm` Q2 (confirmation on a second
test), `ra` Q9 ("despite an optimized methotrexate dose"), `cirrhosis` Q8 ("organ allocation"),
`thrombocytopenia` Q9 ("indicates DIC rather than ITP"), `bowel-obstruction` Q6 ("the cecum
specifically"), `menieres` Q4 (add the aural-symptom criterion), `otitis-externa` Q10 ("after full
resolution"), `hypokalemia` Q9 ("not depleted" rather than "normal"), `melanoma` Q10 (stem and
option describe different categories of intervention).

*Retune a distractor that is true or names the real standard of care:* `hypothyroid` Q6,
`endocarditis` Q10 (the "avoid aminoglycoside toxicity" clause is load-bearing), `endocarditis` Q4,
`gastric-cancer` Q6 (distractor D names FLOT, the actual guideline standard), `bppv` Q2,
`appendicitis` Q7, `aub` Q7, `b12-anemia` Q4, `pud` Q4, `shock` Q4, `retinal-detachment` Q10
(wrongness sits in the drug clause), `otitis-externa` Q3, `lung-cancer` Q3 and Q6,
`respiratory-alkalosis` Q9, `sinusitis` Q7, `myasthenia` Q9.

*Numbers sitting on a boundary — move them clear:* `diverticulitis` Q7 (4 cm is at the threshold),
`hypernatremia` Q4 (750 mOsm/kg is in the module's own borderline band), `respiratory-acidosis` Q4
(the given HCO3 of 34 makes the stem's "only mildly reduced" false; HCO3 38 fixes it), `hhs` Q8.

*Items that test nothing:* `cirrhosis` Q1 (the stem states the answer), `appendicitis` Q10
("Clinical pearl?" is not a question), `hyperparathyroid` Q8 (negatively framed, unnamed mnemonic),
`metabolic-syndrome` Q8 (pure numeric recall, 3x and 5x both defensible), `aortic-stenosis` Q9
(contradicts its own module on TAVR).

*Explanation should teach the near-miss rather than dismiss it:* `strep-pharyngitis` Q6, `sjs-ten`
Q3 (TMP-SMX is what US teaching names), `conjunctivitis` Q10 (gonococcal ophthalmia pathway never
taught), `pancreatic-cancer` Q8 (add "or a DOAC"), `endometriosis` Q7 (soften so students do not
learn "endometriosis + infertility = operate").

---

## Tier 6 — recorded, no change recommended

Reviewers flagging currency-of-evidence or terminology where the module's position is defensible
and internally consistent: `delirium` Q2 (mixed subtype may be commoner, but hypoactive is
uncontested as most-missed), `digoxin-toxicity` Q7 ("stone heart" is contested but the module hedges
it correctly), `tca-od` Q8 (physostigmine asystole rests on 1980 case reports), `breast-cancer` Q9
(the BP-cuff rule is traditional teaching), `kawasaki` Q6 (36 h after completion vs after first
dose), `peritonsillar-abscess` Q8 (posterolateral vs lateral carotid), `pressure-injury` Q10 (NQF
"never event" vs CMS "hospital-acquired condition"), `eczema` Q6, `siadh` Q8, `burns` Q8,
`ovarian-torsion` Q9, `lymphoma` Q3, `tb` Q4, `fluid-overload` Q2, `acute-glaucoma` Q4,
`leukemia` Q5, `hiv` Q4, `meningitis` Q4, `dka` Q4, `fracture` Q2, `lung-cancer` Q5.

---

## Recommended order

1. **Tier 1** — nine teaching errors. Medical wording, so you should see each proposed edit.
2. **Tier 2's 91 length-cue items** — mechanical, no medicine involved, biggest quality gain per
   unit of risk. Can be scripted and verified the same way the answer-position balancer was.
3. **Tier 3** — five module text edits.
4. **Tier 4** — decide whether `dka-peds` gets renamed or the missing module gets written.
5. **Tier 5** — one sweep, low risk.
