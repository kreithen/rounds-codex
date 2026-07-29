#!/usr/bin/env python3
"""
Add per-option rationales (why[]) to questions that have none.

160 questions across 16 quizzes -- all of them transcribed from the physician's PDFs -- currently
have no why[] at all, so a wrong pick shows the engine's generic "That choice is not correct -- try
again". The student learns nothing from being wrong, which is where most of the teaching value of a
quiz actually sits.

Rationales are supplied as JSON keyed by OPTION TEXT, never by position:

  { "<condition-id>": { "<question number>": { "<exact option text>": "why it is wrong", ... } } }

Keying by text is the whole point. Two earlier passes in this project reordered a ch[] array and
desynchronised an index; seven questions ended up marking a distractor as correct and every
structural check passed them. Text keys cannot drift, and this script asserts every key matches an
existing option exactly.

Engine contract, enforced here:
  * why[] has exactly the same length as ch[]
  * why[correct] is EMPTY -- the engine shows exp on a correct answer, not why
  * every other entry is non-empty, or that option silently falls back to generic text
  * select-all questions (correct is a list) are skipped: the engine shows why[0] as one generic
    message for those, so per-option text would never be seen

Usage:
  python3 scripts/add_rationales.py <content-dir> <rationales.json>... [--dry-run]
"""
import argparse, json, os, sys

L = 'ABCDE'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('content')
    ap.add_argument('files', nargs='+')
    ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()

    path = os.path.join(a.content, 'quizzes.json')
    Q = json.loads(open(path, encoding='utf-8').read())
    problems = []
    added = 0
    touched = []

    for f in a.files:
        batch = json.load(open(f, encoding='utf-8'))
        for cid, questions in batch.items():
            if cid.startswith('_'):
                continue
            if cid not in Q:
                problems.append(f'{cid}: not in the bank')
                continue
            for qn_s, mapping in questions.items():
                qn = int(qn_s)
                tag = f'{cid} Q{qn}'
                if qn < 1 or qn > len(Q[cid]['questions']):
                    problems.append(f'{tag}: no such question')
                    continue
                q = Q[cid]['questions'][qn - 1]
                if isinstance(q['correct'], list):
                    problems.append(f'{tag}: select-all item — the engine shows why[0] generically, skipping')
                    continue
                answer = q['ch'][q['correct']]

                # every supplied key must match an option exactly
                unknown = [k for k in mapping if k not in q['ch']]
                if unknown:
                    for k in unknown:
                        problems.append(f'{tag}: no option reads {k[:70]!r}')
                    continue
                if answer in mapping:
                    problems.append(f'{tag}: a rationale was supplied for the CORRECT answer')
                    continue
                wrong = [c for c in q['ch'] if c != answer]
                missing = [c for c in wrong if c not in mapping]
                if missing:
                    for c in missing:
                        problems.append(f'{tag}: no rationale for wrong option {c[:60]!r}')
                    continue

                q['why'] = ['' if c == answer else mapping[c] for c in q['ch']]
                added += 1
                touched.append(tag)

                # re-assert the engine contract on what we just wrote
                if len(q['why']) != len(q['ch']):
                    problems.append(f'{tag}: why length mismatch')
                if (q['why'][q['correct']] or '').strip():
                    problems.append(f'{tag}: why[correct] must be blank')
                if any(not (w or '').strip() for j, w in enumerate(q['why']) if j != q['correct']):
                    problems.append(f'{tag}: blank rationale on a wrong option')

    total = sum(len(v['questions']) for v in Q.values())
    if len(Q) != 181 or total != 1820:
        problems.append(f'bank shape changed: {len(Q)} quizzes, {total} questions')

    still = sum(1 for v in Q.values() for q in v['questions'] if not q.get('why'))
    print(f'{added} questions given rationales')
    print(f'{still} questions in the bank still without why[]')

    if problems:
        print(f'\nFAILED ({len(problems)}):')
        for p in problems[:40]:
            print('  ' + p)
        if len(problems) > 40:
            print(f'  ... and {len(problems) - 40} more')
        return 1
    if a.dry_run:
        print('\ndry run — nothing written')
        return 0
    open(path, 'w', encoding='utf-8').write(json.dumps(Q, ensure_ascii=False, separators=(',', ':')))
    print(f'\nwrote {path}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
