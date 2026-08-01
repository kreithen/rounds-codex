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
| b2 | 6-10 | CNS, respiratory | — | — |
| b3 | 11-15 | mycobacterial, bone & joint | — | — |
| b4 | 16-20 | bone & joint, skin & soft tissue | — | — |
| b5 | 21-25 | GI & hepatic | — | — |
| b6 | 26-30 | GU, HIV | — | — |
| b7 | 31-35 | HIV, STI | — | — |
| b8 | 36-40 | STI, immunocompromised host | — | — |
| b9 | 41-45 | immunocompromised, fungal | — | — |
| b10 | 46-50 | fungal, travel & tropical | — | — |
| b11 | 51-55 | vector-borne, respiratory viruses | — | — |
| b12 | 56-60 | stewardship & prevention | — | — |

**Nothing ships until all 60 pass.** A "Top 60" page holding 20 entries is worse than
no page.

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
