#!/usr/bin/env python3
"""
Apply the nine Tier 1 teaching errors from the blinded medical review.

Tier 1 means a student working the item correctly is currently taught something wrong -- a bad
mechanism, an impossible instruction, or a stem with two defensible answers. See
review-staging/TRIAGE.md for the full reasoning per item.

Every edit follows the same discipline the quiz pipeline learned the hard way:

  * When an option list is rewritten, capture the correct answer's TEXT first and then set
    correct = ch.index(text). Reordering options without re-deriving the index silently marks a
    DISTRACTOR as the answer, and it passes every structural check -- it happened on seven
    questions in this project already.
  * why[] is keyed by option text, not position, and must stay blank at the correct index and
    non-blank everywhere else, or a wrong pick falls back to generic text.
  * Lengthening the correct answer risks making it guessable on form. The ratio against the mean
    distractor is asserted below 2.0x, the threshold this repo's own QA uses, and the fix when it
    trips is to lengthen the DISTRACTORS, never to truncate the answer.

Usage: python3 scripts/fix_tier1_review.py <content-dir> [--dry-run]
"""
import argparse, json, os, sys

L = 'ABCDE'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('content')
    ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()

    path = os.path.join(a.content, 'quizzes.json')
    Q = json.loads(open(path, encoding='utf-8').read())
    before = {}

    def grab(cid, n):
        q = Q[cid]['questions'][n - 1]
        before[(cid, n)] = json.loads(json.dumps(q))
        return q

    def set_options(q, options, answer_text, whys=None):
        """Rewrite ch[] and re-derive the index from the answer TEXT, never from the old position."""
        assert answer_text in options, f'answer text missing from new options: {answer_text!r}'
        q['ch'] = list(options)
        q['correct'] = options.index(answer_text)
        if whys is not None:
            # whys maps option TEXT -> rationale, so a reordering cannot desynchronise it
            q['why'] = ['' if c == answer_text else whys[c] for c in options]

    # ---------------------------------------------------------------- 1. prostate-cancer Q5
    # An antiandrogen does not prevent the testosterone surge; it blocks the receptor so the
    # surge has no clinical effect. Only a GnRH ANTAGONIST prevents the surge itself.
    q = grab('prostate-cancer', 5)
    ans = 'To block the tumor flare caused by the initial testosterone surge, including cord compression'
    old = q['ch'][q['correct']]
    opts = [ans if c == old else c for c in q['ch']]
    whys = {c: w for c, w in zip(before[('prostate-cancer', 5)]['ch'], before[('prostate-cancer', 5)]['why'])}
    whys[ans] = ''
    set_options(q, opts, ans, whys)
    q['exp'] = ('GnRH agonists cause an initial surge in testosterone. The antiandrogen does not stop that '
                'surge -- it blocks the androgen receptor so the surge cannot drive a clinical tumor flare '
                'or worsen spinal cord compression. A GnRH antagonist such as degarelix or relugolix is '
                'what actually prevents the surge, and is preferred when rapid control is needed.')

    # ---------------------------------------------------------------- 2. stroke Q8
    # "Stop the thrombolytic" is impossible six hours out: alteplase is a bolus plus a 60-minute
    # infusion, so it finished five hours earlier. As written the item trains students to look for
    # an infusion that is not running.
    q = grab('stroke', 8)
    ans = 'Hemorrhagic conversion; hold antithrombotics and obtain an emergent noncontrast CT'
    old = q['ch'][q['correct']]
    opts = [ans if c == old else c for c in q['ch']]
    whys = {c: w for c, w in zip(before[('stroke', 8)]['ch'], before[('stroke', 8)]['why'])}
    whys[ans] = ''
    set_options(q, opts, ans, whys)
    q['exp'] = ('Sudden severe headache, vomiting, a falling level of consciousness or a new deficit after '
                'thrombolysis suggests hemorrhagic conversion. Stop any thrombolytic still infusing, hold '
                'antithrombotics, and get an emergent noncontrast CT. Note the timing here: alteplase is a '
                'bolus plus a 60-minute infusion, so at six hours it finished long ago -- the immediate '
                'actions are imaging and reversal, with cryoprecipitate or fibrinogen concentrate plus an '
                'antifibrinolytic if bleeding is confirmed.')

    # ---------------------------------------------------------------- 3. fracture Q8
    # The app's own compartment-syndrome module makes bivalving the cast the FIRST maneuver, and
    # compartment Q6 requires it. This item jumped from suspicion straight to fasciotomy, so two
    # modules contradicted each other.
    q = grab('fracture', 8)
    ans = 'Bivalve or remove the cast immediately, then treat as compartment syndrome with emergent fasciotomy'
    old = q['ch'][q['correct']]
    opts = [ans if c == old else c for c in q['ch']]
    whys = {c: w for c, w in zip(before[('fracture', 8)]['ch'], before[('fracture', 8)]['why'])}
    whys[ans] = ''
    set_options(q, opts, ans, whys)
    q['exp'] = ('Compartment syndrome is a clinical diagnosis and a surgical emergency. In a casted limb the '
                'first maneuver is to release the external constriction -- bivalve or remove the cast and cut '
                'the padding down to skin -- and then proceed to emergent fasciotomy. A delta pressure under '
                '30 mmHg supports the diagnosis, but you act on the clinical picture rather than waiting for '
                'numbers.')

    # ---------------------------------------------------------------- 4. withdrawal Q1
    # The stem asks for the neuroADAPTATION but option A gave ethanol's ACUTE action. The chronic
    # adaptation is the reverse: GABA-A downregulation plus NMDA upregulation. The bank contradicted
    # itself here -- why[E] already stated "chronic ethanol upregulates NMDA receptors".
    q = grab('withdrawal', 1)
    ans = ('Chronic alcohol downregulates GABA-A and upregulates NMDA/glutamate; withdrawal leaves '
           'unopposed glutamatergic excitation plus a noradrenergic surge')
    old = q['ch'][q['correct']]
    opts = [ans if c == old else c for c in q['ch']]
    whys = {c: w for c, w in zip(before[('withdrawal', 1)]['ch'], before[('withdrawal', 1)]['why'])}
    whys[ans] = ''
    set_options(q, opts, ans, whys)
    q['exp'] = ('Acutely, alcohol and the other sedative-hypnotics potentiate inhibitory GABA-A tone and '
                'inhibit excitatory NMDA/glutamate tone. The ADAPTATION to chronic exposure is the opposite: '
                'GABA-A receptors are downregulated and NMDA receptors are upregulated. Abrupt withdrawal '
                'therefore leaves unopposed glutamatergic excitation plus an autonomic noradrenergic surge, '
                'which is why a GABA agonist is the mechanistically correct treatment.')

    # ---------------------------------------------------------------- 5. hyperkalemia Q8
    # The stem specified a dialysis patient but gave the CKD/heart-failure rationale. In an
    # established hemodialysis patient chronic hyperkalemia is managed by dialysis prescription,
    # dietary potassium and interdialytic interval -- not by a binder to preserve RAAS blockade.
    q = grab('hyperkalemia', 8)
    q['q'] = ('A patient with CKD taking an ACE inhibitor has chronic hyperkalemia and needs an agent for '
              'ongoing outpatient control so that guideline-directed RAAS therapy can continue. Which '
              'option matches the module?')

    # ---------------------------------------------------------------- 6. cervical-cancer Q7
    # The keyed option conflated the cytology start age with the primary-HPV start age. ACS begins
    # primary HPV at 25; USPSTF permits hrHPV-alone from 30. Cytology alone is what starts at 21.
    q = grab('cervical-cancer', 7)
    ans = 'Primary HPV testing every 5 years, generally starting at age 25 and stopping around 65'
    old = q['ch'][q['correct']]
    opts = [ans if c == old else c for c in q['ch']]
    whys = {c: w for c, w in zip(before[('cervical-cancer', 7)]['ch'], before[('cervical-cancer', 7)]['why'])}
    whys[ans] = ''
    set_options(q, opts, ans, whys)
    q['exp'] = ('Primary HPV testing every 5 years is the preferred strategy and begins at age 25 (ACS); '
                'co-testing every 5 years and cytology alone every 3 years are the alternatives, and it is '
                'cytology alone that starts at 21. Screening stops around 65 given adequate prior negative '
                'results.')

    # ---------------------------------------------------------------- 7. osa Q4
    # "5-15" and "15-30" overlap, so an AHI of exactly 15 satisfied two options. The bands are also
    # bare numbers with no units -- the same defect already fixed in aortic-stenosis Q6.
    q = grab('osa', 4)
    ans = '5 to <15'
    set_options(q, ['<5', ans, '15 to <30', '>=30', '>50'], ans)
    q['q'] = 'Which apnea-hypopnea index (AHI, events per hour) range defines MILD obstructive sleep apnea?'
    q['exp'] = ('Mild OSA is an AHI of 5 to under 15 events per hour; moderate is 15 to under 30 and severe '
                'is 30 or more. Writing the bands as "5-15" and "15-30" makes an AHI of exactly 15 belong to '
                'both, so the boundaries are stated explicitly.')

    # ---------------------------------------------------------------- 8. hyperparathyroid Q1
    # Familial hypocalciuric hypercalcemia also presents with high calcium and an inappropriately
    # normal PTH -- which is exactly why Q3 of this same quiz asks how to exclude it. The stem
    # needed the discriminator that separates them.
    q = grab('hyperparathyroid', 1)
    q['q'] = ('Elevated calcium with an inappropriately normal PTH and a HIGH 24-hour urine calcium '
              'most likely suggests?')
    q['exp'] = ('An inappropriately normal (or high) PTH in the face of hypercalcemia indicates primary '
                'hyperparathyroidism. Familial hypocalciuric hypercalcemia produces the same calcium and '
                'PTH picture, so the 24-hour urine calcium is what separates them: it is HIGH in primary '
                'hyperparathyroidism and LOW in FHH.')

    # ---------------------------------------------------------------- 9. labor Q7
    # Misoprostol is the textbook safe uterotonic in asthma plus hypertension, and option A was
    # disqualified only by an appended "simultaneously with high-dose oxytocin" clause -- a
    # do-not-combine caveat that belongs to cervical ripening, not to PPH treatment, where
    # misoprostol plus oxytocin is routine. So the discriminator was a parenthetical rather than
    # the medicine. Tranexamic acid is also an antifibrinolytic, not a uterotonic, so it did not
    # really answer "which additional AGENT is safest". Asking for the mortality benefit makes
    # tranexamic acid uniquely correct and lets misoprostol be wrong for an honest reason.
    q = grab('labor', 7)
    ans = 'Tranexamic acid, given within 3 hours of the onset of bleeding'
    mis = 'Misoprostol, a prostaglandin E1 uterotonic'
    old_ch = before[('labor', 7)]['ch']
    whys = {c: w for c, w in zip(old_ch, before[('labor', 7)]['why'])}
    whys[mis] = ('Misoprostol is in fact the safe uterotonic choice for this patient, since carboprost is '
                 'contraindicated in asthma and methylergonovine in hypertension. But it is a uterotonic, '
                 'not an antifibrinolytic, and it has not been shown to reduce bleeding-related mortality.')
    whys[ans] = ''
    opts = [mis if c == old_ch[0] else c for c in old_ch]
    set_options(q, opts, ans, whys)
    q['q'] = ('A postpartum patient with asthma and chronic hypertension has continued hemorrhage despite '
              'oxytocin. Which additional agent has been shown to reduce bleeding-related mortality?')
    q['exp'] = ('Tranexamic acid reduces death from bleeding in postpartum hemorrhage (WOMAN trial) and is '
                'most effective given within 3 hours of onset. It is an antifibrinolytic adjunct rather than '
                'a uterotonic. Of the uterotonics, misoprostol is the safe one here -- carboprost is '
                'contraindicated in asthma and methylergonovine in hypertension -- but no uterotonic carries '
                'a demonstrated mortality benefit.')

    # ------------------------------------------------------------------------ assertions
    problems = []
    for (cid, n), old in sorted(before.items()):
        q = Q[cid]['questions'][n - 1]
        tag = f'{cid} Q{n}'
        if not (isinstance(q['correct'], int) and 0 <= q['correct'] < len(q['ch'])):
            problems.append(f'{tag}: correct index out of range')
            continue
        if len(set(c.lower().strip() for c in q['ch'])) != len(q['ch']):
            problems.append(f'{tag}: duplicate options')
        if not all(c.strip() for c in q['ch']):
            problems.append(f'{tag}: empty option')
        if not q['exp'].strip():
            problems.append(f'{tag}: empty exp')
        if len(q['ch']) != len(old['ch']):
            problems.append(f'{tag}: option count changed')
        w = q.get('why')
        if w:
            if len(w) != len(q['ch']):
                problems.append(f'{tag}: why length {len(w)} vs {len(q["ch"])} options')
            elif (w[q['correct']] or '').strip():
                problems.append(f'{tag}: why[correct] not blank')
            elif any(not (x or '').strip() for j, x in enumerate(w) if j != q['correct']):
                problems.append(f'{tag}: blank why on a wrong option')
        lens = [len(c) for c in q['ch']]
        other = (sum(lens) - lens[q['correct']]) / (len(lens) - 1)
        ratio = lens[q['correct']] / other
        if ratio >= 2.0:
            problems.append(f'{tag}: correct answer is {ratio:.2f}x the mean distractor')
        moved = 'same' if q['ch'][q['correct']] == old['ch'][old['correct']] else 'REWORDED'
        print(f'{tag:26s} key {L[old["correct"]]}->{L[q["correct"]]}  {ratio:.2f}x  answer {moved}')

    total = sum(len(v['questions']) for v in Q.values())
    if len(Q) != 181 or total != 1820:
        problems.append(f'bank shape changed: {len(Q)} quizzes, {total} questions')

    if problems:
        print('\nFAILED:')
        for p in problems:
            print('  ' + p)
        return 1

    if a.dry_run:
        print('\ndry run — nothing written')
        return 0
    open(path, 'w', encoding='utf-8').write(json.dumps(Q, ensure_ascii=False, separators=(',', ':')))
    json.dump({f'{k[0]}|{k[1]}': v for k, v in before.items()},
              open('/tmp/claude-0/-home-user-rounds-codex/12695854-44d2-559d-bb99-135cf9928bfb/scratchpad/tier1-before.json', 'w'),
              ensure_ascii=False, indent=1)
    print(f'\nwrote {path} — {len(before)} questions changed')
    return 0


if __name__ == '__main__':
    sys.exit(main())
