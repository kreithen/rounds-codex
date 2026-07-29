#!/usr/bin/env python3
"""
Tier 3 of the blinded medical review: fix the MODULE text, not the quiz.

These five are cases where reviewers confirmed the quiz item is correct and the defect is in the
condition content it was written from. Leaving them would keep teaching the error on the module
page even though the quiz now tests it correctly, and in two cases a student who reasons from the
module would talk themselves out of the right answer.

Each edit is an exact-string replacement inside content/conditions.json, asserted to match exactly
once. A regex or a loose substring here would be dangerous: this file holds 181 modules and phrases
like "first-line" appear hundreds of times.

Usage: python3 scripts/fix_tier3_modules.py <content-dir> [--dry-run]
"""
import argparse, json, os, sys

# (condition id, label, old exact substring, new substring)
EDITS = [
    # The NIF limb of the 20/30/40 rule is written INVERTED. "NIF < -30" read literally means more
    # negative than -30 -- a STRONGER inspiratory effort -- which is the opposite of respiratory
    # failure. A student applying the module's wording to a NIF of -25 concludes it is still fine,
    # when -25 is exactly the value that should prompt intubation.
    ('gbs', 'NIF threshold was written inverted',
     'NIF < -30 cm H2O',
     'NIF weaker than -30 cm H2O (magnitude under 30, e.g. -25)'),

    # whatItIs said the nadir is 5-10 days while the pearl in the same module said 7-10. The quiz
    # keys 7-10, so the module contradicted the item it teaches.
    ('febrile-neutropenia', 'nadir range contradicted the module pearl',
     'nadir typically 5-10 days post-treatment',
     'nadir typically 7-10 days post-treatment'),

    # This conflated two different start ages. Primary HPV testing begins at 25 (ACS); it is
    # cytology alone that starts at 21. Writing one range across all three strategies is what
    # produced the same error in the quiz option.
    ('cervical-cancer', 'HPV vs cytology start ages were conflated',
     'or cytology alone every 3 years, generally starting at <b>age 21-25</b> and stopping around <b>65</b> with adequate prior negatives.',
     'or cytology alone every 3 years. Primary HPV testing starts at <b>age 25</b>; cytology alone starts at <b>21</b>. All stop around <b>65</b> with adequate prior negatives.'),

    # Both the vancomycin and fidaxomicin entries claimed "first-line", so the module contradicted
    # itself on the exact word the quiz stem turns on. IDSA/SHEA 2021 prefers fidaxomicin;
    # vancomycin stays an acceptable alternative.
    ('cdiff', 'vancomycin and fidaxomicin both claimed first-line',
     'First-line for initial non-severe and severe CDI (125 mg PO QID); given orally for local colonic action.',
     'Acceptable first-line alternative when fidaxomicin is unavailable or cost-prohibitive (125 mg PO QID); given orally for local colonic action.'),

    # Not a contradiction on inspection, but it reads like one: whatItIs calls inadequate intake the
    # commonest bucket while medStudent says non-organic causes dominate. They are compatible --
    # non-organic FTT usually presents AS inadequate intake -- so the fix is to say so rather than
    # to change either claim.
    ('failure-to-thrive', 'intake bucket vs non-organic etiology read as contradictory',
     '<b>inadequate caloric intake</b> (most common)',
     '<b>inadequate caloric intake</b> (most common, and the usual mechanism by which non-organic/psychosocial causes act)'),
]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('content')
    ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()

    path = os.path.join(a.content, 'conditions.json')
    raw = open(path, encoding='utf-8').read()
    D = json.loads(raw)
    by_id = {d['id']: i for i, d in enumerate(D)}
    problems = []

    for cid, label, old, new in EDITS:
        if cid not in by_id:
            problems.append(f'{cid}: no such condition')
            continue
        d = D[by_id[cid]]
        blob = json.dumps(d, ensure_ascii=False)
        n = blob.count(old)
        if n != 1:
            problems.append(f'{cid}: expected 1 occurrence of the old text, found {n} — {label}')
            continue
        D[by_id[cid]] = json.loads(blob.replace(old, new))
        print(f'{cid:24s} {label}')
        print(f'{"":24s}   - {old[:96]}')
        print(f'{"":24s}   + {new[:96]}')

    # ---- structural checks: this file drives the whole app, so prove nothing else moved
    if len(D) != 181:
        problems.append(f'condition count changed: {len(D)}')
    ids = [d['id'] for d in D]
    if len(set(ids)) != len(ids):
        problems.append('duplicate condition ids')
    REQUIRED = ['id', 'name', 'category', 'tagline']
    for d in D:
        for k in REQUIRED:
            if not d.get(k):
                problems.append(f'{d.get("id")}: missing {k}')
    # the old inverted NIF string must be gone bank-wide, not just in gbs
    after = json.dumps(D, ensure_ascii=False)
    if 'NIF < -30' in after:
        problems.append('the inverted "NIF < -30" wording still appears somewhere')

    if problems:
        print('\nFAILED:')
        for p in problems:
            print('  ' + p)
        return 1
    if a.dry_run:
        print(f'\ndry run — {len(EDITS)} edits would apply')
        return 0
    open(path, 'w', encoding='utf-8').write(json.dumps(D, ensure_ascii=False, separators=(',', ':')))
    print(f'\nwrote {path} — {len(EDITS)} module edits')
    return 0


if __name__ == '__main__':
    sys.exit(main())
