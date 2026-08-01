# Vascular Surgery — resident dataset build

Approved list: `../vasc-top60-for-approval.md` (60 topics). Specialty code **`vasc`**,
display "Vascular Surgery", section-2 title "Top 60 Vascular Surgery Topics".

`vasc` was the last of the 24 specialties with no content — the single empty card on the
Resident Mode grid since the grid shipped. Merging it takes `active` from 24 to 25 and
leaves **no inactive specialties**.

Twelve batches of five. Each batch passes BOTH gates before the next one starts:

```
node /root/.claude/skills/medcodex-resident-buildout/scripts/validate.js \
  resident-staging/vasc/res-vasc-b<N>.js --sec vasc --expect 5 --against <live-dataset>.js

node scripts/qa_resident_batch.js \
  resident-staging/vasc/res-vasc-b<N>.js --sec vasc --list resident-staging/vasc-top60-for-approval.md
```

The skill's `validate.js` owns schema, ids, `sec`, https refs and collisions against all
1,368 live entries. `qa_resident_batch.js` covers what it does not: US spelling, smart
quotes, bullet density, paywalled references, and drift from the approved names.

The `--against` file is a shim generated from the deployed `content/resident.json`, because
the live dataset is no longer a `res-*.js` file. Regenerate it with:

```
node -e "const R=require('/workspace/rounds-codex-app/content/resident.json');
require('fs').writeFileSync('/tmp/live-res.js','const RES_LIVE='+JSON.stringify(R.data)+';')"
```

## Progress

| batch | entries | topics | validate | QA |
|---|---|---|---|---|
| b1 | 1-5 | aortic | PASS | PASS |
| b2 | 6-10 | aortic infection, PAD | PASS | PASS |
| b3 | 11-15 | segmental occlusive, popliteal | PASS | PASS |
| b4 | 16-20 | cerebrovascular | PASS | PASS |
| b5 | 21-25 | dissection/FMD, visceral, renal | PASS | PASS |
| b6 | 26-30 | visceral aneurysm, deep venous | PASS | PASS |
| b7 | 31-35 | chronic venous, PE, upper extremity | PASS | PASS |
| b8 | 36-40 | dialysis access | PASS | PASS |
| b9 | 41-45 | trauma, compression syndromes | PASS | PASS |
| b10 | 46-50 | limb salvage, wound, amputation | PASS | PASS |
| b11 | 51-55 | perioperative and medical | PASS | PASS |
| b12 | 56-60 | graft infection, compartment, technical | PASS | PASS |

**All 60 pass.** Merged by `scripts/merge_vasc_specialty.js`, which updates the five things
that must change together — data, specialties, active, titles and conditions — and refuses
to run if the entry count is wrong, an id collides, `vasc` is already active, or a Relevant
Condition does not exist in `conditions.json`. RES_DATA goes 1368 -> 1428.

## One difference from the Infectious Disease merge

`merge_id_specialty.js` refuses if the specialty is already in `specialties`, because for ID
its presence would have meant a previous merge. `vasc` is the opposite case: it has always
been in `specialties` as the one inactive card, so the vasc merge updates the existing row
and guards on `active` instead. Copying the ID script unchanged would have refused to run.

## Relevant Conditions

21 ids, all verified present in `conditions.json` by the merge script:

`pad`, `aortic-dissection`, `dvt`, `pe`, `stroke`, `tia`, `afib`, `acs`, `htn`,
`hyperlipidemia`, `compartment`, `wound-care`, `cellulitis`, `osteomyelitis`, `t2dm`,
`ckd`, `aki`, `sepsis`, `thrombocytopenia`, `dic`, `svc-syndrome`

## Not included

**Clinical guidelines.** `vasc` is still the one specialty with no entry under the
`guidelines` key, so it does not appear on the Clinical Updates index at `/u/` and the
specialty page shows no year buttons. That needs the physician's submitted 2025 and 2026
entries and goes through `scripts/merge_guidelines.js`, separately from this build.
Candidates were staged earlier in `guidelines-staging/vasc-CANDIDATES.md`.

## Medical gate

**No independent medical re-read has been done.** These 60 entries were authored and
self-checked in one pass. The structural gates prove the schema, the ids, the reference
URLs and the house style — they prove nothing about whether the clinical content is right.
The guideline QA work on the other specialties found that roughly one submitted entry in
twelve stated the opposite of the published result, so a second read here is not a
formality.

Things worth a physician's eye specifically:

- The **BEST-CLI versus BASIL-2** framing in `vasc-clti`. The two trials enrolled different
  patients and both results stand; the entry reads them as vein-available favors bypass,
  infrapopliteal-only favors endovascular first. That is a defensible reading and not the
  only one.
- **REBOA** (`vasc-reboa`) is written as contested rather than standard, on UK-REBOA. Some
  trauma services would put it more positively.
- **Asymptomatic carotid stenosis** (`vasc-asymptomatic-carotid`) is written as a weakening
  indication pending CREST-2. That is the direction of the evidence but it is a position.
- Every **drug dose** in the set, particularly the anticoagulant regimens in `vasc-dvt-anticoagulation`
  and the rivaroxaban 2.5 mg twice daily in `vasc-antithrombotic-after-revasc`.
