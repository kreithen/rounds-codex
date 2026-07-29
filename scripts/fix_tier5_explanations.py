#!/usr/bin/env python3
"""
Tier 5 group 5: explanations that dismissed the near-miss instead of teaching it.

On each of these, a well-read student picks a defensible option and the app tells them only that
they were wrong. The explanation is where that student should learn WHY the guideline goes the other
way -- otherwise the item punishes knowledge instead of building it.

Only `exp` changes here. No stem, option or answer is touched, so nothing about scoring moves.

sinusitis Q7 was on the triage list and is NOT here: its explanation already spells out the
stewardship reason (fluoroquinolones second-line for tendon rupture, QT, aortic aneurysm, CNS and
glucose effects), which is exactly what the reviewer asked for.

Usage: python3 scripts/fix_tier5_explanations.py <content-dir> [--dry-run]
"""
import argparse, json, os, sys

# (cid, qn): (must appear in the existing exp, replacement exp)
FIXES = {
    ('strep-pharyngitis', 6): ('gold standard',
        'Because the rapid antigen detection test has imperfect sensitivity, a negative result in a '
        'child should be backed up by throat culture, which is the gold standard. Empiric treatment '
        'on a high McIsaac score is defensible in practice but is not the guideline route in '
        'children: most sore throats are viral, so treating on score alone exposes those children to '
        'antibiotics they do not need. The backup culture exists precisely so treatment can wait a '
        'day.'),

    ('sjs-ten', 3): ('most common cause worldwide',
        'The module states that allopurinol is the single most common cause worldwide and warns to '
        'think twice before starting it for asymptomatic hyperuricemia. If you answered TMP-SMX, you '
        'are not wrong about the drug being a major culprit -- it is what most US teaching names '
        'first. The "worldwide" framing here follows the European EuroSCAR and RegiSCAR registry '
        'data, where allopurinol ranks above the sulfonamides.'),

    ('conjunctivitis', 10): ('notify the provider at once',
        'Neonatal conjunctivitis may be gonococcal, chlamydial, or chemical; the module says to treat '
        'any neonatal case as urgent, confirm erythromycin prophylaxis was given at birth, and notify '
        'the provider at once. Know the specific pathway too: purulent discharge on day 3-4 of life '
        'is gonococcal ophthalmia neonatorum until proven otherwise, needing Gram stain, culture and '
        'NAAT plus systemic ceftriaxone and saline irrigation -- gonococcus can perforate the cornea '
        'within days.'),

    ('pancreatic-cancer', 8): ('low-molecular-weight heparin is preferred over warfarin',
        'Migratory superficial thrombophlebitis is the Trousseau sign of malignancy, a classic '
        'paraneoplastic association with pancreatic adenocarcinoma and a marker of its strong '
        'hypercoagulability. For anticoagulation, current guidance places the direct oral agents '
        '(apixaban, rivaroxaban, edoxaban) alongside low-molecular-weight heparin as first-line for '
        'cancer-associated VTE -- DOACs are not contraindicated. LMWH is still favoured where there '
        'is an unresected luminal GI primary, which does apply here.'),

    ('endometriosis', 7): ('themselves contraceptive',
        'For infertility, surgical management improves fertility while medical suppression does not -- '
        'the ovulation-suppressing drugs are themselves contraceptive. Do not read that as '
        '"endometriosis plus infertility means operate": the surgical benefit is modest and mainly in '
        'minimal-to-mild disease, and excising an ovarian endometrioma can reduce ovarian reserve. For '
        'someone actively trying to conceive, ART or IVF is often the better path.'),
}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('content')
    ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()

    path = os.path.join(a.content, 'quizzes.json')
    Q = json.loads(open(path, encoding='utf-8').read())
    problems, changed = [], 0

    for (cid, n), (anchor, new_exp) in sorted(FIXES.items()):
        tag = f'{cid} Q{n}'
        q = Q[cid]['questions'][n - 1]
        # the anchor proves we are editing the explanation we think we are, not one that
        # already moved under a previous pass
        if anchor not in q['exp']:
            problems.append(f'{tag}: existing exp does not contain {anchor!r} — refusing to overwrite')
            continue
        before = dict(ch=list(q['ch']), correct=q['correct'], q=q['q'], why=list(q.get('why') or []))
        q['exp'] = new_exp
        # nothing that affects scoring may change in this pass
        if q['ch'] != before['ch'] or q['correct'] != before['correct'] or q['q'] != before['q'] \
           or list(q.get('why') or []) != before['why']:
            problems.append(f'{tag}: something other than exp changed')
        if not q['exp'].strip():
            problems.append(f'{tag}: empty exp')
        changed += 1
        print(f'{tag:26s} exp now {len(new_exp)} chars')

    total = sum(len(v['questions']) for v in Q.values())
    if len(Q) != 181 or total != 1820:
        problems.append(f'bank shape changed: {len(Q)} quizzes, {total} questions')

    if problems:
        print('\nFAILED:')
        for p in problems:
            print('  ' + p)
        return 1
    if a.dry_run:
        print(f'\ndry run — {changed} explanations would change')
        return 0
    open(path, 'w', encoding='utf-8').write(json.dumps(Q, ensure_ascii=False, separators=(',', ':')))
    print(f'\nwrote {path} — {changed} explanations rewritten')
    return 0


if __name__ == '__main__':
    sys.exit(main())
