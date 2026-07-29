#!/usr/bin/env python3
"""
Tier 5, final pass: the rest of group 2, plus group 4 (items that test nothing).

Two items from the triage list are deliberately NOT here, because the reviewers' own conclusions
were that they are fine:
  * otitis-externa Q3 -- "acceptable, but D is the strongest distractor in the file". Option D is a
    real duration scheme, and C is still uniquely correct because only C carries the
    malignant/necrotizing axis the stem asks about.
  * myasthenia Q9 -- "the item stands". Eculizumab and efgartigimod are restricted to
    anti-AChR-positive disease and the stem says anti-AChR negative, so the discriminator is
    present and doing its job.

Everything else here is a distractor that was true, an item whose stem contained its own answer, or
a stem that was not a question.

Usage: python3 scripts/fix_tier5_final.py <content-dir> [--dry-run]
"""
import argparse, json, os, sys

L = 'ABCDE'

FIXES = {
    # "the elderly need less hormone overall" is TRUE -- weight-based levothyroxine requirement does
    # fall with age and lean mass. Inverted so it is false.
    ('hypothyroid', 6): {'swap': {
        'Because the elderly need less hormone overall':
        'Because the elderly need a higher dose to reach the same TSH'}},

    # The rule has three sufficient combinations (2 major; 1 major + 3 minor; 5 minor) but only one
    # is offered, so "which combination establishes" read as if it were the only one.
    ('endocarditis', 4): {
        'stem': 'By the Modified Duke (2023 ISCVID) criteria, which of these combinations is sufficient to establish definite infective endocarditis?'},

    # Ampicillin plus gentamicin is still guideline-endorsed for E. faecalis IE, so only the stem's
    # "to avoid aminoglycoside toxicity" made it wrong -- a load-bearing clause. The option now
    # contradicts itself, since gentamicin IS an aminoglycoside, so it is wrong on its own merits.
    ('endocarditis', 10): {'swap': {
        'Ampicillin plus gentamicin for a synergistic bactericidal effect':
        'Ampicillin plus gentamicin, which avoids aminoglycoside exposure entirely'}},

    # IV tranexamic acid for acute heavy bleeding is ACOG-endorsed, so option E was a true statement
    # offered as wrong. Reattributed to conjugated estrogen, making it false OF tranexamic acid.
    ('aub', 7): {'swap': {
        'It is given intravenously in hospital for acute stabilization of hemodynamically significant heavy bleeding':
        'It is a high-dose intravenous conjugated estrogen used for acute stabilization'}},

    # An isolated methylmalonic acid rise IS the B12-specific marker and does occur in early
    # deficiency, so option C was defensible and relied on its tacked-on LDH clause to be wrong.
    # Both analytes low is not a deficiency pattern at all.
    ('b12-anemia', 4): {'swap': {
        'Methylmalonic acid elevated with homocysteine normal and a low LDH':
        'Methylmalonic acid low with homocysteine also low'}},

    # Bare-fragment stem and options; option E was partly true and rescued only by the word "only".
    ('pud', 4): {
        'stem': 'Why should a gastric ulcer be biopsied?',
        'swap': {'Exclude malignancy': 'To exclude gastric malignancy',
                 'Stage gastritis': 'To stage chronic gastritis',
                 'Check bleeding': 'To check for active bleeding',
                 'Measure acid': 'To measure gastric acid output',
                 'Detect H. pylori only': 'To detect H. pylori, which is the only indication'}},

    # Second-hand smoke is the answer some texts give for never-smoker lung cancer, so it competed
    # with radon. Replaced. The keyed answer was also a bare "Radon" at 0.27x the mean distractor --
    # conspicuously the shortest -- so every option is spelled out.
    ('lung-cancer', 3): {'swap': {
        'Radon': 'Radon gas exposure in the home',
        'Air pollution': 'Ambient air pollution',
        'Second-hand smoke': 'Occupational silica exposure',
        'Asbestos': 'Asbestos exposure'}},

    # Options B and E both endorsed gradual correction and differed only in the mechanism named, so
    # a student answering on the "go slowly" cue alone had a coin flip. E no longer endorses it.
    ('respiratory-alkalosis', 9): {'swap': {
        'Correct it slowly to avoid post-hypercapnic metabolic alkalosis and seizures':
        'Correct it rapidly, since post-hypercapnic alkalosis is the only risk'}},

    # ------------------------------------------------------- group 4: items that tested nothing
    # The stem stated "develops new ascites" and then asked which event marks decompensation, with
    # Ascites as the answer. The stem contained its own answer.
    ('cirrhosis', 1): {
        'stem': 'Which of these events marks the transition to decompensated cirrhosis?',
        'swap': {'Ascites': 'New-onset ascites',
                 'Fatigue': 'Fatigue and malaise',
                 'Spider angiomas': 'Spider angiomas on the chest',
                 'Elevated AST': 'A mildly elevated AST'}},

    # "Clinical pearl?" is not a question, and the options were bare fragments.
    ('appendicitis', 10): {
        'stem': 'Which statement about appendicitis management is correct?',
        'swap': {'CT always required': 'CT is always required before surgery',
                 'Normal appetite': 'A normal appetite rules out appendicitis',
                 'Migratory pain unimportant': 'Migratory pain is unimportant to the diagnosis',
                 'Early treatment reduces complications': 'Early treatment reduces complications',
                 'WBC always elevated': 'The white cell count is always elevated'}},
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

        new_answer = swap.get(answer_text, answer_text)
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
        if ratio < 0.45:
            problems.append(f'{tag}: only {ratio:.2f}x — conspicuously short answer')
        # a stem must not contain its own answer verbatim
        if new_answer.lower().strip('.') in q['q'].lower():
            problems.append(f'{tag}: the stem still contains the answer text')
        changed += 1
        print(f'{tag:26s} key {L[q["correct"]]}  {ratio:.2f}x')

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
