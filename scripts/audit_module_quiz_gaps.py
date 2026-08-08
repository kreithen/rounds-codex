#!/usr/bin/env python3
"""Find places where a condition's quiz tests something its module never teaches, or where a module
contradicts itself.

Both checks come from real defects found on 2026-08-08 while reviewing incoming artwork, not from
imagination:

  - The Hip Fracture quiz marked "Keeping her NPO from arrival until surgery" incorrect, but the
    module never mentioned fasting at all. A reader who studied the module had no basis for
    rejecting that option. Found only because a gallery page happened to give bad fasting advice.
  - The Low Back Pain module said acute episodes "improve substantially within about 6 weeks" in one
    field and "resolve in about 6 weeks" in another. Same duration, materially different claim, and
    the stronger one was the unsupported one.

Design note, learned the hard way today: a noisy checker is worse than no checker. An earlier attempt
to bucket 511 audit findings by fault class put 433 of them in "other", and a PDF comparison gave
three confident wrong answers before it gave a right one. So these checks are deliberately NARROW and
high-signal rather than a general-purpose similarity score:

  C1  An ABBREVIATION the correct answer or its explanation turns on that appears nowhere in the
      module. Abbreviations are the high-signal case: specific, unambiguous, and if the rationale
      for the right answer rests on one the module never introduces, a reader who studied the
      module could not have reasoned to it.

  C2  Two module statements sharing the same number+unit but using DIFFERENT outcome verbs -- the
      improves-versus-resolves shape. Narrow on purpose; it is the exact defect found.

  C3  Two different numbers attached to overlapping subjects inside one module -- the shape that
      would catch a mortality range stated as 15-30% in one field and 20-30% in another.

CALIBRATION (2026-08-08, run against both the pre-fix content at 25bf3d9 and the shipped content).
Recorded here because the numbers, not the intent, are what say whether a check is worth running:

  C2  IS a gate. Pre-fix: 2 hits, one of them the real back-pain defect. Shipped: 1 hit, the same
      known false positive (pericarditis, see KNOWN_FP). Fails on the broken file, passes on the
      fixed one -- so it is a guard rather than decoration. Use --gate.

  C3  is a REVIEW AID, not a gate. 12 hits over 183 modules, 8 distinct, and reading all 8 by hand
      found exactly one worth changing (febrile-neutropenia states "~5 days" in pearls where four
      other fields in the same module say "4-7 days" -- consistent, just less precise). The other
      seven are legitimately two different numbers about two different things: sepsis gives
      antibiotics within 1 hour and 30 mL/kg within 3 hours; preeclampsia starts aspirin 12-28
      weeks, ideally before 16. No --gate.

  C1  DOES NOT WORK as a gate, in either form, and the honest result is a negative one.
      Scoped to the whole question it gives 225 hits at roughly 0.4% precision, because a
      distractor referencing something the module does not teach is how a distractor WORKS.
      Scoped to stem + correct option + explanation it gives 0 hits -- on the shipped content AND
      on the pre-fix content, so it would never have caught anything. That 0 is a real (if modest)
      invariant worth stating: across all 1,840 questions, no correct answer's rationale turns on
      an abbreviation its own module never introduces. But the defect this checker was BUILT from
      -- the hip fracture quiz marking prolonged NPO wrong while the module never mentioned
      fasting -- lived in a distractor, and is not reliably detectable this way. Finding that
      class needs a judgement about whether each distractor is *eliminable* from the module, which
      is a reading task, not a string task.

Usage:
  python3 scripts/audit_module_quiz_gaps.py <content-dir> [--check C1,C2,C3] [--id <condition-id>]
                                            [--gate]        # exit 1 on any C2 hit not in KNOWN_FP
"""
import json, os, re, sys
from collections import defaultdict

# Shorthand a clinical reader brings with them; a module does not have to introduce these.
WHITELIST = {
    'IV', 'PO', 'IM', 'SC', 'ED', 'ICU', 'OR', 'CT', 'MRI', 'US', 'ECG', 'EKG', 'CXR', 'BP', 'HR',
    'RR', 'GI', 'GU', 'CNS', 'MSK', 'ENT', 'OB', 'PT', 'OT', 'SLP', 'RN', 'MD', 'DO', 'NP', 'PA',
    'ICD', 'CPR', 'IVF', 'NG',
    'AM', 'PM', 'OK', 'ABC', 'ADL', 'BMI', 'CBC', 'BMP', 'CMP', 'LFT', 'ABG', 'VBG', 'WBC', 'RBC',
    'HGB', 'HCT', 'PLT', 'INR', 'PTT', 'PT', 'BUN', 'CO2', 'O2', 'FIO2', 'SPO2', 'MAP', 'CVP',
    'DVT', 'PE', 'VTE', 'MI', 'CHF', 'COPD', 'CKD', 'AKI', 'UTI', 'DM', 'HTN', 'CAD', 'AF', 'VF',
    'VT', 'SVT', 'CVA', 'TIA', 'TB', 'HIV', 'STI', 'BMD', 'TSH', 'PTH', 'CRP', 'ESR', 'LDH',
    'AST', 'ALT', 'ALP', 'GFR', 'EGFR', 'HBA1C', 'A1C', 'LDL', 'HDL', 'BNP', 'PSA', 'HPI', 'ROS',
    'PMH', 'FH', 'SH', 'NKDA', 'PRN', 'BID', 'TID', 'QID', 'QD', 'HS', 'STAT',
}
# Deliberately NOT whitelisted, because they are the kind of specific instrument, score or standing
# order a module should introduce if a question turns on it: RCRI, DEXA, CURB, qSOFA, HAS-BLED,
# CHA2DS2-VASC ... and NPO. NPO was whitelisted in the first draft as "shorthand every reader knows",
# which made the checker blind to the exact defect it was written for: the Hip Fracture quiz marked
# prolonged NPO incorrect while the module never mentioned fasting. The abbreviation was the
# DETECTOR, not the problem. Whitelisting is for terms whose absence from a module tells you nothing.

# No trailing hyphen and no hyphen-terminated fragments: the first draft's
# [A-Z][A-Z0-9\-]{1,7} produced garbage tokens like "X-", "C-", "VEGF-" and truncated
# CHA2DS2-VASc to "CHA2DS2-", which was most of C1's noise.
ABBR = re.compile(r'\\b([A-Z][A-Z0-9]*(?:-[A-Z0-9]+)*)\\b')
NUMUNIT = re.compile(r'(\d+(?:[.,]\d+)?)\s*(%|percent|weeks?|days?|hours?|months?|years?|mg|mcg|g|mL|L)\b', re.I)
OUTCOME_VERB = re.compile(r'\b(resolve[sd]?|improve[sd]?|recover(?:s|ed|y)?|cure[sd]?|heal[sd]?|'
                          r'settle[sd]?|clear[sd]?)\b', re.I)
STOP = set('the a an and or of to in for with without on at by from as is are was were be been being '
           'this that these those it its their there than then which who whom whose what when where '
           'why how not no nor but if so because while during before after above below up down out '
           'off over under again further once here both each few more most other some such only own '
           'same too very can will just should now do does did done have has had having i you he she '
           'they we them him her his hers our ours your yours my mine'.split())

TEXT_FIELDS = ['tagline', 'whatItIs', 'diagnosis', 'nursing', 'medStudent', 'redFlags', 'pearls', 'impress']

# C2 hits reviewed by hand and judged compatible. Listed rather than silenced so --gate can fail on
# anything NEW, which is the whole value of a one-hit checker.
#   pericarditis "3 month": nursing restricts exertion until CRP resolves (~3 months in athletes),
#   the flow step continues colchicine ~3 months. Two treatments of the same length, not one
#   natural history stated two ways -- the verbs differ because one sentence is titled "Recovery".
KNOWN_FP = {('pericarditis', '3 month')}


def module_text(c):
    """All reader-facing prose. refs is excluded: citations carry author initials and journal
       abbreviations that would flood C1 with false positives."""
    out = []
    for f in TEXT_FIELDS:
        v = c.get(f)
        if isinstance(v, str):
            out.append(v)
        elif isinstance(v, list):
            out += [x for x in v if isinstance(x, str)]
    for m in c.get('meds', []):
        out += [m.get('drug', ''), m.get('use', ''), m.get('note', '')]
    for f in c.get('flow', []):
        out += [f.get('stage', ''), f.get('title', ''), f.get('desc', '')]
    return re.sub(r'<[^>]+>', ' ', ' '.join(out))


def sentences(text):
    return [s.strip() for s in re.split(r'(?<=[.;:])\s+|\s+—\s+', text) if s.strip()]


def salient(s):
    return {w for w in re.findall(r'[a-z]{4,}', s.lower()) if w not in STOP}


def c1(cid, cond, quiz, mod):
    """Abbreviations the CORRECT answer or its explanation turns on that the module never introduces.

    Deliberately scoped to the correct option, the stem and the explanation -- NOT the distractors.
    Scoping it to the whole question was tried first and is unusable: 225 hits bank-wide at roughly
    0.4% precision, because a distractor referencing something the module does not teach is how a
    distractor WORKS. That also means the defect this checker was built from -- the hip fracture NPO
    option -- is not reliably detectable this way, since it lived in a distractor. See the report.

    What this narrower form does catch is a module that cannot support its own answer: if the
    explanation of the right answer turns on a term the module never introduces, a reader who studied
    the module could not have reasoned to it.
    """
    hits = []
    mod_abbrs = set(ABBR.findall(mod))
    mod_upper = mod.upper()
    for i, q in enumerate(quiz['questions']):
        # cardiomyopathy Q13-16 use an ARRAY for `correct` -- select-all-that-apply, the only four
        # in 1,840 questions. The engine supports it; this has to as well.
        cor = q['correct'] if isinstance(q['correct'], list) else [q['correct']]
        blob = ' '.join([q['q']] + [q['ch'][j] for j in cor] + [q.get('exp', '')])
        blob = re.sub(r'<[^>]+>', ' ', blob)
        for a in set(ABBR.findall(blob)):
            if a in WHITELIST or a in mod_abbrs or a in mod_upper:
                continue
            # where in the question does it appear -- an abbreviation only in a distractor is the
            # exact shape of the hip fracture NPO defect
            where = []
            if a in re.sub(r'<[^>]+>', ' ', q['q']):
                where.append('stem')
            if any(a in q['ch'][j] for j in cor):
                where.append('the correct option')
            if a in q.get('exp', ''):
                where.append('explanation')
            hits.append((cid, i + 1, a, ', '.join(where) or 'rationale'))
    return hits


def c2(cid, cond, mod):
    """Same number+unit, different outcome verb -- the improves/resolves shape."""
    hits = []
    by_num = defaultdict(list)
    for s in sentences(mod):
        for num, unit in NUMUNIT.findall(s):
            verbs = {v.lower().rstrip('sd') for v in OUTCOME_VERB.findall(s)}
            if verbs:
                by_num[(num, unit.lower().rstrip('s'))].append((s, verbs))
    for key, items in by_num.items():
        if len(items) < 2:
            continue
        allv = set().union(*[v for _, v in items])
        if len(allv) > 1:
            hits.append((cid, f'{key[0]} {key[1]}', sorted(allv), [s for s, _ in items]))
    return hits


def c3(cid, cond, mod):
    """Two different numbers on overlapping subjects inside one module."""
    hits = []
    claims = []
    for s in sentences(mod):
        nums = NUMUNIT.findall(s)
        if nums:
            claims.append((s, {(n, u.lower().rstrip('s')) for n, u in nums}, salient(s)))
    for i in range(len(claims)):
        for j in range(i + 1, len(claims)):
            s1, n1, w1 = claims[i]
            s2, n2, w2 = claims[j]
            shared = w1 & w2
            if len(shared) < 4:
                continue
            units1 = {u for _, u in n1}
            units2 = {u for _, u in n2}
            if not (units1 & units2):
                continue
            # same unit, different value, and talking about the same thing
            same_unit = units1 & units2
            v1 = {n for n, u in n1 if u in same_unit}
            v2 = {n for n, u in n2 if u in same_unit}
            if v1 and v2 and v1 != v2:
                hits.append((cid, sorted(same_unit)[0], sorted(v1), sorted(v2), sorted(shared)[:6], s1, s2))
    return hits


def main():
    args = sys.argv[1:]
    if not args:
        raise SystemExit(__doc__)
    content = args[0]
    checks = {'C1', 'C2', 'C3'}
    only_id = None
    gate = '--gate' in args
    for i, a in enumerate(args):
        if a == '--check':
            checks = set(args[i + 1].split(','))
        if a == '--id':
            only_id = args[i + 1]

    D = json.load(open(os.path.join(content, 'conditions.json')))
    Q = json.load(open(os.path.join(content, 'quizzes.json')))
    conds = {c['id']: c for c in D}
    ids = [only_id] if only_id else sorted(conds)

    r1, r2, r3 = [], [], []
    for cid in ids:
        c = conds[cid]
        mod = module_text(c)
        if 'C1' in checks and cid in Q:
            r1 += c1(cid, c, Q[cid], mod)
        if 'C2' in checks:
            r2 += c2(cid, c, mod)
        if 'C3' in checks:
            r3 += c3(cid, c, mod)

    print(f'{len(ids)} conditions, {sum(len(Q[i]["questions"]) for i in ids if i in Q)} questions\n')

    if 'C1' in checks:
        print(f'== C1: abbreviation used in a quiz but never in the module — {len(r1)} ==')
        per = defaultdict(list)
        for cid, qn, a, where in r1:
            per[a].append((cid, qn, where))
        for a in sorted(per, key=lambda x: -len(per[x])):
            locs = per[a]
            print(f'  {a:10s} x{len(locs):<3} ' + '; '.join(f'{c} Q{q} ({w})' for c, q, w in locs[:4])
                  + (' ...' if len(locs) > 4 else ''))
        print()

    new2 = [h for h in r2 if (h[0], h[1]) not in KNOWN_FP]
    if 'C2' in checks:
        print(f'== C2: same duration, different outcome verb inside one module — {len(r2)}'
              f' ({len(new2)} not already reviewed) ==')
        for cid, num, verbs, sents in r2:
            known = ' [known false positive]' if (cid, num) in KNOWN_FP else ''
            print(f'  {cid}  "{num}"  verbs={verbs}{known}')
            for s in sents:
                print(f'      - {s[:130]}')
        print()

    if 'C3' in checks:
        print(f'== C3: two different numbers on the same subject inside one module — {len(r3)} ==')
        for cid, unit, v1, v2, shared, s1, s2 in r3:
            print(f'  {cid}  unit={unit}  {v1} vs {v2}  shared={shared}')
            print(f'      - {s1[:130]}')
            print(f'      - {s2[:130]}')
        print()

    if gate:
        if 'C2' not in checks:
            raise SystemExit('--gate only applies to C2; C3 is a review aid (1 of 12 actionable) '
                             'and C1 has never had a hit. See the calibration note.')
        if new2:
            print(f'GATE FAILED: {len(new2)} unreviewed C2 hit(s) — a module states one duration '
                  f'two different ways. Fix the module, or add to KNOWN_FP with the reason.')
            sys.exit(1)
        print('GATE OK: no module states a duration with two different outcome verbs.')


if __name__ == '__main__':
    main()
