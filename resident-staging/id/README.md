# Infectious Disease — resident dataset build

Approved list: `../id-top60-for-approval.md` (60 topics). Specialty code **`id`**,
display "Infectious Disease", section-2 title "Top 60 Infectious Disease Topics".

Twelve batches of five. Each batch passes BOTH gates before the next one starts:

```
node /root/.claude/skills/medcodex-resident-buildout/scripts/validate.js \
  resident-staging/id/res-id-b<N>.js --sec id --expect 5 --against <live-dataset>.js

node scripts/qa_resident_batch.js \
  resident-staging/id/res-id-b<N>.js --sec id --list resident-staging/id-top60-for-approval.md
```

The skill's `validate.js` owns schema, ids, `sec`, https refs and collisions against all
1,308 live entries. `qa_resident_batch.js` covers what it does not: US spelling, smart
quotes, bullet density, paywalled references, and drift from the approved names.

## Progress

| batch | entries | topics | validate | QA |
|---|---|---|---|---|
| b1 | 1-5 | bacteremia & endovascular | PASS | PASS |
| b2 | 6-10 | CNS, respiratory | PASS | PASS |
| b3 | 11-15 | mycobacterial, bone & joint | PASS | PASS |
| b4 | 16-20 | bone & joint, skin & soft tissue | PASS | PASS |
| b5 | 21-25 | GI & hepatic | PASS | PASS |
| b6 | 26-30 | GU, HIV | PASS | PASS |
| b7 | 31-35 | HIV, STI | PASS | PASS |
| b8 | 36-40 | STI, immunocompromised host | PASS | PASS |
| b9 | 41-45 | immunocompromised, fungal | PASS | PASS |
| b10 | 46-50 | fungal, travel & tropical | PASS | PASS |
| b11 | 51-55 | vector-borne, respiratory viruses | PASS | PASS |
| b12 | 56-60 | stewardship & prevention | PASS | PASS |

**All 60 pass. Merged and deployed 2026-08-01** (app commit `e5931de`, sw cache v18)
by `scripts/merge_id_specialty.js`, which updates the five things that must change
together — data, specialties, active, titles and conditions — and refuses to run if
the entry count is wrong, an id collides, or a Relevant Condition does not exist in
`conditions.json`. RES_DATA is now 1368.

## What the gates have already caught

- An entry named "Prosthetic Valve & Cardiac Device Infection" when the approved list
  says "Prosthetic Valve Endocarditis & Cardiac Device Infection" — a silent paraphrase
  at authoring time, which is exactly the drift the `--list` check exists for.
- The first spelling regex ended in `\w*ise\b` and flagged "malaise", "otherwise" and
  "immunocompromise"; the second flagged "organism". Both are now enumerated with
  explicit suffixes, and the pattern is unit-tested against nine look-alikes and nine
  genuine British spellings.

## Citation discipline

CLAUDE.md's record across 340 submitted guideline entries is 25 reversals and 16
unfindable studies. Every named trial in this dataset is verified before it is written,
not after. So far:

- **CloCeBa** — real. Lancet 2025, n=315, cefazolin noninferior to cloxacillin at a 12%
  margin for MSSA bacteremia, fewer serious adverse events.
- **BALANCE** — real. NEJM, 3,608 patients, 74 hospitals, 7 countries; 90-day mortality
  14.5% (7 days) vs 16.1% (14 days), noninferior. **It excluded S. aureus,
  S. lugdunensis, Candida, severe immunocompromise and endocarditis** — so the 7-day
  result must never be carried into those, and the SAB entry says so explicitly.
- **CAPE-COD** — real. NEJM 2023, 31 French centers; hydrocortisone cut 28-day mortality
  in severe ICU community-acquired pneumonia, 6.2% vs 11.9%.
- **Study 31 / ACTG A5349** — real. NEJM 2021; the 4-month rifapentine-moxifloxacin
  regimen is noninferior for drug-susceptible pulmonary TB and is endorsed by WHO and CDC.
- **WHO BPaLM** — real. 2022 WHO consolidated guidelines recommend the 6-month
  bedaquiline/pretomanid/linezolid/moxifloxacin regimen over 9- and 18-month regimens.
- **OVIVA** and **STOP-IT** — both real and correctly described (oral noninferior for
  bone and joint infection; fixed 4-day course after adequate source control).

## Still outstanding

The 2025 and 2026 Clinical Guidelines for this specialty are NOT shipped. Twenty
submitted entries need citation checking first, and four appear under both years
(CloCeBa/SNAP, DoxyPEP, gepotidacin, dalbavancin/DOTS).
