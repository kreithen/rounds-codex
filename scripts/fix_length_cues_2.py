#!/usr/bin/env python3
"""
The second pass of length-cue fixes: the band my first filter missed.

fix_length_cues.py handled items where the correct answer was a clause of 6+ words against
1-3 word distractors. That cutoff was arbitrary and slightly too high. Re-measuring the 4-5 word
band with the same fragment-distractor shape found 18 more, including the two worst in the whole
bank -- siadh Q9 at 9.14x and hyperparathyroid Q3 at 7.78x, both of which the first pass wrongly
classified as term-list false positives.

Same rule as before: LENGTHEN the distractors, never truncate the answer. Each replacement adds
specificity to what the fragment already meant -- the route, the units, the anatomy -- so none of
them becomes defensible as a correct answer.

Two items get more than padding, and both are deliberate:

  * siadh Q9 -- the answer is a four-item list against four single words, so no amount of padding
    single conditions closes a 9.14x gap. Its distractors become parallel multi-item lists, each
    naming things that are NOT part of the SIADH exclusion set. The correct answer is untouched.

  * bowel-obstruction Q3 and diverticulitis Q5 both read "Preferred imaging study?" -- the exact
    duplicate stem audit_quiz_bank.js has been warning about since the bank was assembled. Both
    keyed the same answer (CT abdomen/pelvis with IV contrast), so the two items were literally
    interchangeable. Each stem now names what the scan is FOR, which fixes the length cue and the
    duplicate in one edit.

Also spells out four bare-fragment stems ("HCC surveillance?", "Typical carotid pulse:").

Usage: python3 scripts/fix_length_cues_2.py <content-dir> [--dry-run]
"""
import argparse, json, os, sys

L = 'ABCDE'

FIXES = {
    ('siadh', 9): {
        'stem': 'Which group of conditions must be excluded before diagnosing SIADH?',
        'swap': {
            'COPD': 'Asthma, pneumonia, tuberculosis, small-cell lung cancer',
            'Liver disease': 'Iron deficiency, folate deficiency, B12 deficiency, anemia',
            'Diabetes': 'Type 1 diabetes, type 2 diabetes, prediabetes, obesity',
            'CKD': 'Nephrolithiasis, urinary infection, prostatic hyperplasia',
        }},
    ('hyperparathyroid', 3): {
        'stem': 'Which test best excludes familial hypocalciuric hypercalcemia (FHH)?',
        'swap': {'ACTH': 'Serum adrenocorticotropic hormone level',
                 'Troponin': 'Serum high-sensitivity troponin',
                 'TSH': 'Serum thyroid-stimulating hormone',
                 'MRI': 'MRI of the neck and mediastinum'}},
    ('appendicitis', 6): {
        'stem': 'Which feature suggests appendiceal perforation?',
        'swap': {'Mild WBC': 'A mildly elevated white cell count',
                 'Constipation': 'Constipation for the past two days',
                 'Hunger': 'A normal appetite and hunger',
                 'Nausea': 'Nausea without vomiting'}},
    ('bowel-obstruction', 3): {
        'stem': 'Which imaging study is preferred to confirm bowel obstruction and locate the transition point?',
        'swap': {'Colonoscopy': 'Colonoscopy as the initial study',
                 'Barium enema': 'Barium enema under fluoroscopy',
                 'MRI': 'MRI of the abdomen and pelvis',
                 'Ultrasound': 'Transabdominal ultrasound'}},
    ('dvt', 8): {
        'swap': {'Corticosteroids': 'Systemic corticosteroids',
                 'Aspirin': 'Low-dose aspirin alone',
                 'Beta-blockers': 'Beta-blockers such as metoprolol',
                 'Statins': 'High-intensity statin therapy'}},
    ('aortic-dissection', 7): {
        'swap': {'Carpal tunnel syndrome': 'Bilateral carpal tunnel syndrome',
                 'Splenomegaly': 'Splenomegaly on abdominal exam',
                 'Clubbing': 'Digital clubbing of the fingers',
                 'Wheezing': 'Diffuse expiratory wheezing'}},
    ('pancreatitis', 7): {
        'stem': 'Severe acute pancreatitis is defined by:',
        'swap': {'Hypocalcemia': 'Hypocalcemia on admission labs',
                 'Fever': 'Fever above 38.5 degrees C',
                 'Lipase >1000': 'A serum lipase above 1000 U/L',
                 'Necrosis on CT': 'Pancreatic necrosis seen on CT'}},
    ('appendicitis', 4): {
        'stem': 'Which imaging study is preferred for suspected appendicitis in an adult?',
        'swap': {'X-ray': 'Plain abdominal radiograph',
                 'MRI': 'MRI of the abdomen',
                 'Barium': 'Barium contrast study',
                 'Colonoscopy': 'Urgent colonoscopy'}},
    ('cardiac-arrest', 4): {
        'swap': {'Terminate VF': 'Terminate ventricular fibrillation',
                 'Treat acidosis': 'Correct the metabolic acidosis',
                 'Reverse MI': 'Reverse the myocardial infarction',
                 'Restore normal BP': 'Restore a normal blood pressure'}},
    ('metabolic-syndrome', 3): {
        'swap': {'Elevated Lp(a)': 'An elevated lipoprotein(a) level',
                 'Low triglycerides': 'Low triglycerides with high HDL',
                 'Elevated HDL': 'An isolated elevated HDL',
                 'Low LDL': 'A low LDL cholesterol'}},
    ('bowel-obstruction', 7): {
        'swap': {'Septic shock': 'Septic shock on presentation',
                 'Peritonitis': 'Generalized peritonitis',
                 'Closed-loop obstruction': 'A closed-loop obstruction',
                 'Free air': 'Free intraperitoneal air'}},
    ('hhs', 2): {
        'stem': 'In HHS, what is the first treatment priority?',
        'swap': {'Dialysis': 'Urgent hemodialysis',
                 'Dextrose': 'An IV dextrose bolus',
                 'IV insulin': 'An IV insulin infusion first',
                 'Sodium bicarbonate': 'IV sodium bicarbonate'}},
    ('hhs', 6): {
        'stem': 'In HHS, insulin should be delayed until:',
        'swap': {'HbA1c returns': 'The HbA1c result returns',
                 'Fever resolves': 'Any fever has resolved',
                 'Troponin normal': 'The troponin is normal',
                 'CT complete': 'A head CT is completed'}},
    ('aortic-stenosis', 8): {
        'stem': 'In severe aortic stenosis, the typical carotid pulse is:',
        'swap': {'Water hammer': 'A water-hammer pulse',
                 'Alternans': 'Pulsus alternans',
                 'Bisferiens': 'Pulsus bisferiens',
                 'Bounding': 'A bounding pulse'}},
    ('appendicitis', 2): {
        'stem': 'What is the most common initiating event in appendicitis?',
        'swap': {'Embolism': 'Arterial embolism',
                 'Viral gastroenteritis': 'Preceding viral gastroenteritis',
                 'Cecal volvulus': 'Volvulus of the cecum',
                 'Thrombosis': 'Mesenteric venous thrombosis'}},
    ('cirrhosis', 10): {
        'stem': 'What is the recommended hepatocellular carcinoma surveillance strategy in cirrhosis?',
        'swap': {'MRI yearly': 'MRI once a year',
                 'PET': 'PET-CT annually',
                 'None': 'No surveillance',
                 'CT yearly': 'CT once a year'}},
    ('diverticulitis', 5): {
        'stem': 'Which imaging study is preferred to confirm acute diverticulitis and grade its complications?',
        'swap': {'Colonoscopy': 'Colonoscopy during the acute phase',
                 'Barium enema': 'Barium enema under fluoroscopy',
                 'MRI abdomen': 'MRI of the abdomen and pelvis'}},
    ('siadh', 10): {
        'stem': 'What is the definitive management of SIADH?',
        'swap': {'Permanent restriction': 'Permanent fluid restriction',
                 'Dialysis': 'Long-term hemodialysis',
                 'IV fluids': 'Continuous IV normal saline'}},
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
                problems.append(f'{tag}: no option reads {k!r}')
        if answer_text in swap:
            problems.append(f'{tag}: refusing to rewrite the CORRECT answer')
        if problems and problems[-1].startswith(tag):
            continue

        new_ch = [swap.get(c, c) for c in old_ch]
        whys = {swap.get(c, c): w for c, w in zip(old_ch, old_why)} if old_why else None
        q['ch'] = new_ch
        q['correct'] = new_ch.index(answer_text)
        if whys is not None:
            q['why'] = ['' if c == answer_text else whys[c] for c in new_ch]
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
                problems.append(f'{tag}: why[] misaligned after rewrite')
        lens = [len(c) for c in new_ch]
        other = (sum(lens) - lens[q['correct']]) / (len(lens) - 1)
        ratio = lens[q['correct']] / other
        oldl = [len(c) for c in old_ch]
        oi = old_ch.index(answer_text)
        oldratio = oldl[oi] / ((sum(oldl) - oldl[oi]) / (len(oldl) - 1))
        if ratio >= 2.0:
            problems.append(f'{tag}: still {ratio:.2f}x after rewrite')
        changed += 1
        print(f'{tag:26s} {oldratio:5.2f}x -> {ratio:.2f}x   key {L[q["correct"]]}')

    # the duplicate stem this bank has warned about since assembly must now be gone
    stems = {}
    dups = []
    for cid, v in Q.items():
        for i, q in enumerate(v['questions']):
            k = ''.join(ch for ch in q['q'].lower() if ch.isalnum() or ch == ' ').strip()
            if k in stems and stems[k] != cid:
                dups.append(f'"{q["q"][:50]}" in {stems[k]} and {cid}')
            else:
                stems[k] = cid
    if dups:
        print('\nremaining duplicate stems:')
        for d in dups:
            print('  ' + d)

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
