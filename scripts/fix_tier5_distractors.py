#!/usr/bin/env python3
"""
Tier 5 group 2: distractors that were true, or named the actual standard of care.

A distractor should be wrong. Several here were not: they stated something correct and were
disqualified only by an appended clause, which turns the item into a reading-comprehension test and
punishes the student who knows the most medicine. Two also taught an outright misconception in the
course of being wrong.

Each fix keeps the keyed answer and makes the distractor wrong on its own merits.

Usage: python3 scripts/fix_tier5_distractors.py <content-dir> [--dry-run]
"""
import argparse, json, os, sys

L = 'ABCDE'

FIXES = {
    # FLOT is the guideline standard for resectable gastric cancer, so naming it in a distractor
    # baits the student who knows current practice; only the trailing clause made it wrong.
    ('gastric-cancer', 6): {'swap': {
        'Empiric perioperative FLOT chemotherapy with no further staging at all':
        'Proceed straight to gastrectomy with no further staging'}},

    # "the anterior canal, which is the rare form" is a TRUE statement offered as a wrong answer.
    ('bppv', 2): {'swap': {
        'The anterior canal, which is the rare form of the disease':
        'The anterior canal, involved in the majority of cases'}},

    # Open appendectomy is ALSO definitive treatment -- the two operative options differed only by
    # approach, so the item had two defensible answers. Replaced with a non-definitive option, and
    # the fragment distractors lengthened since this was also a length-cued item.
    ('appendicitis', 7): {
        'stem': 'What is the definitive treatment for uncomplicated acute appendicitis?',
        'swap': {'Observe': 'Observation with serial exams alone',
                 'Delay': 'Delayed elective surgery in six weeks',
                 'Antibiotics': 'Antibiotics alone without surgery',
                 'Open surgery': 'Interval imaging with a repeat CT in 72 hours'}},

    # Option D was not parallel to the others (an assertion rather than a category) AND factually
    # false -- neurogenic shock is distributive and warm. Replaced with a real category that is
    # unambiguously wrong for a warm-shock vignette.
    ('shock', 4): {'swap': {
        'Neurogenic shock is excluded by warm skin and requires cool mottled extremities':
        'Mixed cardiogenic and hypovolemic shock — cold shock from both mechanisms'}},

    # "Cushing syndrome from cortisol-secreting adrenal adenoma" teaches two errors while being
    # wrong: SCLC-associated Cushing is ectopic ACTH, and an adrenal adenoma is not paraneoplastic
    # at all. Ectopic ACTH is accurate and still wrong here, because it causes hypokalemia rather
    # than hyponatremia. The keyed answer was also a bare "SIADH" at 0.17x the mean distractor,
    # conspicuous by being far the shortest, so it is spelled out.
    ('lung-cancer', 6): {'swap': {
        'Cushing syndrome from cortisol-secreting adrenal adenoma':
        'Cushing syndrome from ectopic ACTH secretion',
        'SIADH': 'SIADH with euvolemic hyponatremia'}},

    # The wrongness sat in the drug class (anti-VEGF for endophthalmitis), so a student who
    # correctly suspected infection was penalised for a detail the stem never tested. Now the
    # diagnosis stays plausible and the error is the route, which is the teachable point.
    ('retinal-detachment', 10): {'swap': {
        'Endophthalmitis that mandates immediate intravitreal anti-VEGF therapy':
        'Bacterial endophthalmitis treated with topical antibiotic drops alone'}},
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

        new_answer = swap.get(answer_text, answer_text)   # lung-cancer Q6 rewords the ANSWER
        new_ch = [swap.get(c, c) for c in old_ch]
        whys = {swap.get(c, c): w for c, w in zip(old_ch, old_why)} if old_why else None

        q['ch'] = new_ch
        q['correct'] = new_ch.index(new_answer)
        if whys is not None:
            q['why'] = ['' if c == new_answer else whys[c] for c in new_ch]
        if spec.get('stem'):
            q['q'] = spec['stem']

        if len(set(c.lower().strip() for c in new_ch)) != len(new_ch):
            problems.append(f'{tag}: duplicate options')
        if len(new_ch) != len(old_ch):
            problems.append(f'{tag}: option count changed')
        if q.get('why'):
            w = q['why']
            if len(w) != len(new_ch) or (w[q['correct']] or '').strip() \
               or any(not (x or '').strip() for j, x in enumerate(w) if j != q['correct']):
                problems.append(f'{tag}: why[] misaligned')
        lens = [len(c) for c in new_ch]
        other = (sum(lens) - lens[q['correct']]) / (len(lens) - 1)
        ratio = lens[q['correct']] / other
        if ratio >= 2.0:
            problems.append(f'{tag}: {ratio:.2f}x the mean distractor')
        # a conspicuously SHORT answer cues just as reliably as a long one
        if ratio < 0.45:
            problems.append(f'{tag}: answer is only {ratio:.2f}x the mean distractor — conspicuously short')
        changed += 1
        moved = 'answer reworded' if new_answer != answer_text else 'answer unchanged'
        print(f'{tag:26s} key {L[q["correct"]]}  {ratio:.2f}x   {moved}')

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
