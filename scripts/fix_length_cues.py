#!/usr/bin/env python3
"""
Close the answer-length cue on the questions where it is actually exploitable.

Background, because the count matters. A bank-wide scan found 91 questions whose correct answer
exceeds 2.0x the mean distractor length -- the threshold scripts/qa_quizzes.js uses. That number
over-states the problem: the ratio is measured in CHARACTERS and assumes prose options, so it also
flags term-list questions where every option is a recognisable short noun phrase. cirrhosis Q3 keys
"Ultrasound" against ERCP / MRI / CT / PET and scores 3.33x, but nobody picks it on length -- you
have to know it is the best initial imaging. Same for pud Q3 (CT / MRI / EGD / Ultrasound / X-ray)
and osa Q3.

The cue is only exploitable when the correct answer is a reasoned CLAUSE and the distractors are
dismissible FRAGMENTS: "Resuscitation with IV fluids, bowel rest, and decompression" against
"Laxatives". Splitting the 91 on that basis -- answer >= 6 words, distractors averaging <= 3 --
gives 20 genuine items, listed below. The other 71 are left alone deliberately; editing them would
be churn against a live medical app for no gain.

The fix is to LENGTHEN the distractors, never to truncate the answer, which is the rule the rest of
this pipeline follows. That is not a mechanical operation: it means writing clinical text, and the
hazard is that a padded distractor becomes DEFENSIBLE. So every replacement below adds specificity
to what the fragment already said -- naming the drug class it implied, the route, the timeframe --
and none introduces a new clinical claim that could be argued correct. A few stems that were bare
fragments ("Before stopping IV insulin:") are also spelled out, since an unreadable stem is the
same defect in a different place.

why[] is rebuilt keyed by option TEXT, and `correct` is re-derived with ch.index(answer_text), so
neither can drift out of alignment with a rewritten list.

Usage: python3 scripts/fix_length_cues.py <content-dir> [--dry-run]
"""
import argparse, json, os, sys

L = 'ABCDE'

# (condition, question number) -> {'stem': optional new stem,
#                                  'swap': {old option text: new option text}}
FIXES = {
    ('osa', 1): {'swap': {
        'Bradycardia': 'Sinus bradycardia during the apneic episode',
        'Hyperventilation': 'Sustained hyperventilation throughout the night',
        'Hemoptysis': 'Hemoptysis on waking in the morning',
        'Absence of snoring': 'Complete absence of snoring in all patients',
    }},
    ('bowel-obstruction', 1): {'swap': {
        'Laxatives': 'Oral laxatives to move the obstruction along',
        'Routine antibiotics': 'Routine broad-spectrum antibiotics for every case',
        'Colonoscopy': 'Immediate colonoscopy to locate the transition point',
        'Immediate oral feeding': 'Immediate oral feeding to test bowel function',
    }},
    ('osa', 6): {'stem': 'Home sleep apnea testing (HSAT) is appropriate for:', 'swap': {
        'COPD overlap': 'Adults with COPD-OSA overlap syndrome',
        'Heart failure': 'Patients with decompensated heart failure',
        'Neuromuscular disease': 'Patients with significant neuromuscular disease',
        'All patients': 'All patients regardless of comorbidity',
    }},
    ('di', 6): {'swap': {
        'Empty sella': 'An empty sella with a flattened pituitary gland',
        'Pineal calcification': 'Physiologic calcification of the pineal gland',
        'Temporal-lobe edema': 'Bilateral temporal-lobe edema on FLAIR',
        'Enlarged lateral ventricles': 'Symmetrically enlarged lateral ventricles',
    }},
    ('acs', 5): {'swap': {
        'Coronary calcium score': 'Coronary artery calcium score on noncontrast CT',
        'Exercise treadmill test': 'Exercise treadmill stress testing before discharge',
        'Outpatient echocardiography': 'Outpatient transthoracic echocardiography in one week',
        'Cardiac MRI': 'Cardiac magnetic resonance imaging with gadolinium',
    }},
    ('diverticulitis', 3): {'swap': {
        'Viral infection': 'Primary viral infection of the colonic mucosa',
        'Autoimmune vasculitis': 'Autoimmune vasculitis of the mesenteric vessels',
        'Mesenteric ischemia': 'Acute mesenteric ischemia from arterial occlusion',
        'Colon cancer invasion': 'Direct invasion by an underlying colon cancer',
    }},
    ('aortic-dissection', 10): {'swap': {
        'High-intensity exercise': 'High-intensity resistance exercise training',
        'Routine antibiotics': 'Routine long-term prophylactic antibiotics',
        'Daily aspirin alone': 'Daily low-dose aspirin as sole therapy',
        'Bed rest': 'Prolonged bed rest to limit aortic wall stress',
    }},
    ('pancreatitis', 1): {'swap': {
        'Fever plus leukocytosis': 'Fever plus leukocytosis on presentation',
        'Positive blood cultures': 'Positive blood cultures for enteric organisms',
        'Elevated lipase alone': 'An elevated serum lipase alone, at any level',
        'Characteristic imaging alone': 'Characteristic cross-sectional imaging alone',
    }},
    ('metabolic-syndrome', 6): {'swap': {
        'TZDs': 'Thiazolidinediones such as pioglitazone',
        'Alpha-glucosidase inhibitors': 'Alpha-glucosidase inhibitors such as acarbose',
        'Sulfonylureas': 'Sulfonylureas such as glipizide',
        'DPP-4 inhibitors': 'DPP-4 inhibitors such as sitagliptin',
    }},
    ('cardiac-arrest', 10): {'swap': {
        'Medications save most lives': 'Medications save more lives than compressions',
        'Troponin guides CPR': 'Serial troponin levels guide the CPR strategy',
        'CT first': 'Obtain a head CT before starting compressions',
        'Shock all rhythms': 'Defibrillate every rhythm including asystole',
    }},
    ('dvt', 9): {'swap': {
        'Healthy teenager': 'A healthy teenager playing school sports',
        'Marathon runner': 'A marathon runner training six days a week',
        'Mild seasonal allergies': 'An adult with mild seasonal allergic rhinitis',
        'Controlled hypothyroidism': 'An adult with well-controlled hypothyroidism',
    }},
    ('aortic-dissection', 3): {'swap': {
        'Fever': 'Low-grade fever developing over days',
        'Abdominal bloating': 'Progressive abdominal bloating after meals',
        'Gradual calf pain': 'Gradually worsening unilateral calf pain',
        'Chronic cough': 'A chronic dry cough for several weeks',
    }},
    ('pud', 1): {'swap': {
        'Alcohol': 'Alcohol use and cigarette smoking',
        'Gallstones': 'Gallstones and biliary sludge',
        'Viral infection': 'Viral infection and food allergy',
        'Crohn disease': 'Crohn disease and celiac disease',
    }},
    ('siadh', 1): {'swap': {
        'Hypernatremia, dilute urine': 'Hypernatremia with dilute urine and low urine sodium',
        'Hypervolemic hyponatremia': 'Hypervolemic hyponatremia with peripheral edema',
        'Hypovolemic dilute urine': 'Hypovolemic hyponatremia with dilute urine',
        'Hypernatremia with high osmolality': 'Hypernatremia with a high serum osmolality',
    }},
    ('hhs', 4): {'swap': {
        'Children': 'Children under ten years old',
        'Athletes': 'Endurance athletes after exertion',
        'Young type 1 DM': 'Young adults with type 1 diabetes',
        'Pregnancy': 'Pregnancy with gestational diabetes',
    }},
    ('siadh', 7): {'stem': 'Which laboratory pattern is a supportive clue for SIADH?', 'swap': {
        'High uric acid': 'High uric acid with a high BUN',
        'High BUN': 'High BUN with a normal uric acid',
        'High calcium': 'High serum calcium and phosphate',
        'High creatinine': 'High creatinine with a low eGFR',
    }},
    ('hhs', 10): {'stem': 'Before stopping an IV insulin infusion in HHS, you should:', 'swap': {
        'Wait 24 h': 'Wait a full 24 hours after resolution',
        'Stop abruptly': 'Stop the infusion abruptly',
        'Give bicarbonate': 'Give a bicarbonate infusion first',
        'Normalize HbA1c': 'Wait until the HbA1c normalizes',
    }},
    ('acs', 8): {'swap': {
        'Mature granulation tissue': 'Mature granulation tissue with new capillaries',
        'Complete myocardial regeneration': 'Complete regeneration of the myocardium',
        'Caseating granulomas': 'Caseating granulomas with giant cells',
        'Dense collagen scar': 'A dense acellular collagen scar',
    }},
    ('metabolic-syndrome', 5): {
        'stem': 'Which lifestyle intervention gives the greatest benefit in metabolic syndrome?',
        'swap': {
            'Bed rest': 'Strict bed rest and calorie counting',
            'High-protein diet only': 'A high-protein diet with no exercise',
            'Vitamins': 'Daily multivitamin supplementation',
            'Eliminate carbohydrates': 'Complete elimination of all carbohydrates',
        }},
    ('cardiomyopathy', 7): {'swap': {
        'Squatting': 'Squatting from a standing position',
        'Passive leg elevation': 'Passive elevation of both legs',
    }},
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

        # every key must actually be present, or a silent no-op would look like success
        for k in spec['swap']:
            if k not in old_ch:
                problems.append(f'{tag}: no option reads {k!r}')
        if any(k == answer_text for k in spec['swap']):
            problems.append(f'{tag}: refusing to rewrite the CORRECT answer')
        if problems and problems[-1].startswith(tag):
            continue

        whys = {c: w for c, w in zip(old_ch, old_why)} if old_why else None
        new_ch = [spec['swap'].get(c, c) for c in old_ch]
        if whys is not None:
            whys = {spec['swap'].get(c, c): w for c, w in whys.items()}

        q['ch'] = new_ch
        q['correct'] = new_ch.index(answer_text)      # re-derive from TEXT, never reuse the index
        if whys is not None:
            q['why'] = ['' if c == answer_text else whys[c] for c in new_ch]
        if spec.get('stem'):
            q['q'] = spec['stem']

        # ---- checks
        if len(set(c.lower().strip() for c in new_ch)) != len(new_ch):
            problems.append(f'{tag}: duplicate options after rewrite')
        if len(new_ch) != len(old_ch):
            problems.append(f'{tag}: option count changed')
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
        oldlens = [len(c) for c in old_ch]
        oldratio = oldlens[old_ch.index(answer_text)] / (
            (sum(oldlens) - oldlens[old_ch.index(answer_text)]) / (len(oldlens) - 1))
        if ratio >= 2.0:
            problems.append(f'{tag}: still {ratio:.2f}x after rewrite')
        changed += 1
        print(f'{tag:28s} {oldratio:.2f}x -> {ratio:.2f}x   key {L[q["correct"]]}')

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
