#!/usr/bin/env python3
"""
Tier 5 of the blinded medical review, groups 1 and 3: missing qualifiers and boundary numbers.

The keyed answer in all sixteen items is correct and stays correct. What reviewers flagged is that
the stem or an option is missing the word that makes it unambiguous, or that a number sits exactly
on a threshold so a well-read student can argue the neighbouring option.

Two kinds of edit:

  * QUALIFIER -- add the clause the item was relying on the reader to assume. "88-92%" is the target
    when titrating supplemental oxygen in a patient at risk of hypercapnia, not a ceiling for a
    stable COPD patient sitting at 95% on room air, so the stem now says which situation it means.

  * BOUNDARY -- move a value clear of the threshold. A 4 cm abscess sits right on the module's own
    ">3-4 cm" drainage line, so the intended answer is arguable; 6 cm is unambiguous. Nothing about
    the teaching changes, only the illustrative number.

Where an option's text changes, `correct` is re-derived with ch.index(answer_text) and why[] is
rebuilt keyed by option text, so neither can drift. Length ratios are asserted under 2.0x, since
adding a qualifier to the correct answer is exactly how a giveaway gets introduced.

Usage: python3 scripts/fix_tier5_wording.py <content-dir> [--dry-run]
"""
import argparse, json, os, sys

L = 'ABCDE'

# (cid, qn): {'stem': new stem, 'swap': {old option text: new option text}, 'why': reason}
FIXES = {
    # ---------------------------------------------------------------- qualifiers
    ('aki', 1): {
        'why': 'KDIGO oliguria criterion needs its duration',
        'swap': {'A rise in serum creatinine of at least 0.3 mg/dL in 48 hours, or urine output under 0.5 mL/kg/h':
                 'A rise in serum creatinine of at least 0.3 mg/dL in 48 hours, or urine output under 0.5 mL/kg/h for 6 hours'},
    },
    ('copd', 4): {
        'why': '88-92% is a titration target, not a ceiling for a stable patient',
        'stem': 'What is the appropriate oxygen saturation target for a COPD patient receiving supplemental oxygen who is at risk of hypercapnia?',
    },
    ('hypothyroid', 1): {
        'why': 'option B is subclinical primary hypothyroidism, also a primary pattern',
        'stem': 'Which laboratory pattern indicates OVERT primary hypothyroidism?',
    },
    ('t2dm', 2): {
        'why': 'ADA needs confirmation on a repeat test, so "establishes" was too strong',
        'stem': 'Which result meets an ADA diagnostic threshold for diabetes?',
    },
    ('ra', 9): {
        'why': 'escalation assumes the methotrexate dose was already optimized',
        'stem': 'A patient on methotrexate at an optimized dose for three months still has moderate disease activity by DAS28. What does a treat-to-target approach direct?',
    },
    ('cirrhosis', 8): {
        'why': 'bare fragment, and Child-Pugh is also a prognostic score in the list',
        'stem': 'Which score is used for organ allocation and waitlist prioritization in cirrhosis?',
    },
    ('thrombocytopenia', 9): {
        'why': 'options B and D are accurate ITP patterns and equally "distinguish" the two',
        'stem': 'Which laboratory pattern indicates DIC rather than immune thrombocytopenia?',
    },
    ('bowel-obstruction', 6): {
        'why': '6 cm is the general colonic threshold; the cecal number is higher',
        'stem': 'In large-bowel obstruction, perforation risk rises once the cecum specifically exceeds a diameter of approximately:',
    },
    ('menieres', 4): {
        'why': 'the keyed option gave two of three criteria, omitting fluctuating aural symptoms',
        'swap': {'Two or more spontaneous vertigo episodes of 20 minutes to 12 hours plus documented low/mid-frequency sensorineural loss':
                 'Two or more spontaneous vertigo episodes of 20 minutes to 12 hours, documented low/mid-frequency sensorineural loss, and fluctuating aural symptoms'},
    },
    ('otitis-externa', 10): {
        'why': 'the module warns against acidifying drops in a still-inflamed canal',
        'stem': 'Which prevention counseling is appropriate at discharge for a swimmer once otitis externa has fully resolved?',
    },
    ('hypokalemia', 9): {
        'why': 'a previously hyperkalemic patient has normal-to-HIGH total body potassium, not normal',
        'swap': {'Total-body potassium is normal, because the low level reflects a shift of potassium into cells':
                 'Total-body potassium is not depleted, because the low level reflects a shift of potassium into cells'},
    },
    ('melanoma', 10): {
        'why': 'the keyed option bundles sentinel node sampling, which is staging rather than local treatment',
        'stem': 'A 1.2 mm non-ulcerated melanoma has been diagnosed on excisional biopsy. What is the definitive surgical management?',
    },

    # ---------------------------------------------------------------- boundary numbers
    ('diverticulitis', 7): {
        # Two defects in one item. The boundary number is what the reviewer flagged, but the length
        # assertion below caught a second: the answer was already 2.76x the mean distractor. My
        # earlier length sweep missed it because that filter required a 6-word answer and this one
        # is 4 words against one-word fragments -- the cutoff was arbitrary and slightly too high.
        'why': '4 cm sat on the ">3-4 cm" threshold, and the answer was already 2.76x on length',
        'stem': 'Management of a 6-cm pericolic abscess?',
        'swap': {
            'Colonoscopy': 'Colonoscopy during the acute episode',
            'High-fiber diet': 'A high-fiber diet and outpatient follow-up',
            'Observation': 'Observation with serial abdominal exams',
            'Emergent colectomy': 'Emergent colectomy with end colostomy',
        },
    },
    ('hypernatremia', 4): {
        'why': '750 mOsm/kg is inside the module\'s borderline 600-800 band',
        'stem': 'A hypernatremic patient has a urine osmolality of 880 mOsm/kg. What does this indicate?',
    },
    ('respiratory-acidosis', 4): {
        'why': 'PaCO2 80 with HCO3 34 gives pH ~7.25 — moderate, not the "mildly reduced" the stem claims',
        'stem': 'An arterial blood gas shows a PaCO2 of 80 mmHg with an HCO3- of 38 mEq/L and only a mildly reduced pH. How is this best classified?',
    },
    ('hhs', 8): {
        'why': 'module states 8-10 L; the option set did not mirror its own number',
        'stem': 'In HHS, the typical total body water deficit is approximately:',
        'swap': {'5-10 L': '8-10 L'},
    },
}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('content')
    ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()

    path = os.path.join(a.content, 'quizzes.json')
    Q = json.loads(open(path, encoding='utf-8').read())
    problems, changed = [], 0

    for (cid, n), spec in sorted(FIXES.items()):
        tag = f'{cid} Q{n}'
        if cid not in Q or n > len(Q[cid]['questions']):
            problems.append(f'{tag}: not in the bank')
            continue
        q = Q[cid]['questions'][n - 1]
        old_ch = list(q['ch'])
        old_why = list(q.get('why') or [])
        answer_text = old_ch[q['correct']]
        swap = spec.get('swap', {})

        for k in swap:
            if k not in old_ch:
                problems.append(f'{tag}: no option reads {k[:60]!r}')
        if problems and problems[-1].startswith(tag):
            continue

        new_answer = swap.get(answer_text, answer_text)
        new_ch = [swap.get(c, c) for c in old_ch]
        whys = None
        if old_why:
            whys = {swap.get(c, c): w for c, w in zip(old_ch, old_why)}

        q['ch'] = new_ch
        q['correct'] = new_ch.index(new_answer)          # re-derive from TEXT
        if whys is not None:
            q['why'] = ['' if c == new_answer else whys[c] for c in new_ch]
        if spec.get('stem'):
            q['q'] = spec['stem']

        # ---- checks
        if len(set(c.lower().strip() for c in new_ch)) != len(new_ch):
            problems.append(f'{tag}: duplicate options')
        if len(new_ch) != len(old_ch):
            problems.append(f'{tag}: option count changed')
        if not all(c.strip() for c in new_ch):
            problems.append(f'{tag}: empty option')
        if not q['exp'].strip():
            problems.append(f'{tag}: empty exp')
        if q.get('why'):
            w = q['why']
            if len(w) != len(new_ch):
                problems.append(f'{tag}: why length {len(w)} vs {len(new_ch)}')
            elif (w[q['correct']] or '').strip():
                problems.append(f'{tag}: why[correct] not blank')
            elif any(not (x or '').strip() for j, x in enumerate(w) if j != q['correct']):
                problems.append(f'{tag}: blank why on a wrong option')
        lens = [len(c) for c in new_ch]
        other = (sum(lens) - lens[q['correct']]) / (len(lens) - 1)
        ratio = lens[q['correct']] / other
        if ratio >= 2.0:
            problems.append(f'{tag}: correct answer now {ratio:.2f}x the mean distractor')
        changed += 1
        kind = 'stem+option' if (spec.get('stem') and swap) else ('option' if swap else 'stem')
        print(f'{tag:26s} {kind:11s} key {L[q["correct"]]}  {ratio:.2f}x   {spec["why"]}')

    total = sum(len(v['questions']) for v in Q.values())
    if len(Q) != 181 or total != 1820:
        problems.append(f'bank shape changed: {len(Q)} quizzes, {total} questions')

    if problems:
        print('\nFAILED:')
        for p in problems:
            print('  ' + p)
        return 1
    if a.dry_run:
        print(f'\ndry run — {changed} questions would change')
        return 0
    open(path, 'w', encoding='utf-8').write(json.dumps(Q, ensure_ascii=False, separators=(',', ':')))
    print(f'\nwrote {path} — {changed} questions changed')
    return 0


if __name__ == '__main__':
    sys.exit(main())
