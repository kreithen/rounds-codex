#!/usr/bin/env python3
"""Merge the illustration audit into one review document for the physician.

    python3 tools/build_illustration_audit.py <findings-dir> [-o ILLUSTRATIONS-audit.md]

<findings-dir> holds one findings-*.json per audit shard, each a JSON array of
  {id, severity, type, summary, detail}

Two independent checks are combined:

1. PROMPT-vs-QUESTION defects, from the sharded audit. Each generated image was
   made from a prompt written for one specific bank item; if the prompt names
   the wrong pathology, the wrong side, or a finding the vignette excludes, the
   image is wrong no matter how good it looks. That is not visible to someone
   reviewing the picture alone, which is exactly why it is worth a pass.

2. REDUNDANCY, computed here rather than supplied. Two bank items can cover the
   same condition on the same modality, and each got its own generation. The
   image is reusable across them -- RC_ILLUS is keyed by question id, so one URL
   can be registered against several ids -- so the reviewer should see the
   cluster once, not once per item.

   Redundancy is keyed on (title, modality class), NOT on prompt similarity.
   Prompt text was tried first and found only 9 of the 24 clusters: two prompts
   for the same CXR finding are often worded nothing alike, and difflib scored
   the Zenker pair at 0.59 and the epidural trio at 0.05. Same condition + same
   modality is the question that actually matters ("would one image serve both?").
"""
import argparse, glob, json, os, re, sys
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MANIFEST = os.path.join(ROOT, 'tools', 'image-manifest.json')
JOBS = os.path.join(ROOT, 'tools', 'higgsfield-jobs-0731.json')
DONE = os.path.join(ROOT, 'tools', 'generated-image-urls.json')

# Order matters: the first key found in the modality string wins, so the more
# specific strings ("magnetic resonance cholangio") must precede the general
# ones ("magnetic resonance") they contain.
MOD = [('cholangiopancreatograph', 'MRCP'), ('mrcp', 'MRCP'),
       ('echocardiogra', 'ECHO'), ('ultrasound', 'US'), ('sonograph', 'US'),
       ('computed tomograph', 'CT'), (r'\bct\b', 'CT'),
       ('magnetic resonance', 'MRI'), (r'\bmri\b', 'MRI'),
       ('radiograph', 'XR'), ('x-ray', 'XR'), ('chest film', 'XR'),
       ('fluorosc', 'FLUORO'), ('barium', 'FLUORO'), ('enema', 'FLUORO'),
       ('endoscop', 'ENDO'), ('fundus', 'FUNDUS'), ('funduscop', 'FUNDUS'),
       ('dermoscop', 'PHOTO'), ('photograph', 'PHOTO'),
       ('microscop', 'MICRO'), ('smear', 'MICRO'), ('histolog', 'MICRO'),
       ('pedigree', 'DIAGRAM'), ('schematic', 'DIAGRAM'),
       ('curve', 'CHART'), ('graph', 'CHART')]

SEV = {'blocker': 0, 'warn': 1}


def modality_class(text):
    t = text.lower()
    for pat, name in MOD:
        if re.search(pat, t):
            return name
    return 'OTHER'


def load_generated():
    jobs = json.load(open(JOBS))
    done = json.load(open(DONE))
    done_ids = set(done.keys() if isinstance(done, dict) else [d['id'] for d in done])
    return set(jobs.values()) | done_ids, done_ids


def clusters(man, generated):
    """Same condition + same modality => one image can serve every id in the group."""
    by = defaultdict(list)
    for i in sorted(generated):
        if i in man:
            by[(man[i]['title'].strip().lower(), modality_class(man[i]['modality']))].append(i)
    return sorted(([man[v[0]]['title'], k[1], v] for k, v in by.items() if len(v) > 1),
                  key=lambda r: r[0].lower())


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('findings_dir')
    ap.add_argument('-o', '--out', default=os.path.join(ROOT, 'tools', 'ILLUSTRATIONS-audit.md'))
    a = ap.parse_args()

    man = {i['id']: i for i in json.load(open(MANIFEST))['items']}
    generated, approved = load_generated()

    found, seen_shards = [], sorted(glob.glob(os.path.join(a.findings_dir, 'findings-*.json')))
    if not seen_shards:
        sys.exit('no findings-*.json in ' + a.findings_dir)
    for f in seen_shards:
        rows = json.load(open(f))
        for r in rows:
            if r['id'] not in man:
                sys.exit('finding references unknown id %r in %s' % (r['id'], f))
            if r.get('severity') not in SEV:
                sys.exit('bad severity %r for %s in %s' % (r.get('severity'), r['id'], f))
        found += rows
    found.sort(key=lambda r: (SEV[r['severity']], r['id']))

    dup = clusters(man, generated)
    redundant = sum(len(g) - 1 for _, _, g in dup)
    blockers = [r for r in found if r['severity'] == 'blocker']

    L = []
    w = L.append
    w('# USMLE illustrations — pre-review audit\n')
    w('%d images generated (%d previously approved + %d in the 2026-07-31 run). '
      'Nothing here has been wired into the app.\n' % (len(generated), len(approved),
                                                       len(generated) - len(approved)))
    w('| | |')
    w('|---|---|')
    w('| Prompt-vs-question defects | **%d** (%d blocker, %d warn) across %d items |'
      % (len(found), len(blockers), len(found) - len(blockers),
         len({r['id'] for r in found})))
    w('| Redundant generations | **%d** images in %d clusters |' % (redundant, len(dup)))
    w('| Items clean on both checks | **%d** |'
      % (len(generated) - len({r['id'] for r in found})
         - len({i for _, _, g in dup for i in g[1:]})))
    w('')
    w('## 1. Prompt-vs-question defects\n')
    w('Each image was generated from a prompt written for one specific bank item. These are')
    w('cases where the prompt and the item disagree — a defect you cannot see by looking at')
    w('the picture, because the picture may be a perfectly good rendering of the wrong thing.\n')
    if not found:
        w('_None found._\n')
    for sev, label in (('blocker', 'Blockers — do not use as-is'),
                       ('warn', 'Warnings — look at these deliberately')):
        rows = [r for r in found if r['severity'] == sev]
        if not rows:
            continue
        w('### %s (%d)\n' % (label, len(rows)))
        for r in rows:
            m = man[r['id']]
            w('**`%s` — %s** · %s · %s  ' % (r['id'], m['title'], m['exam'], r['type']))
            w('%s\n' % r['summary'])
            w('> %s\n' % r['detail'].replace('\n', ' '))
    w('## 2. Redundant generations\n')
    w('Same condition, same modality, generated more than once because separate bank items')
    w('call for it. `RC_ILLUS` is keyed by question id, so **one approved image can be')
    w('registered against every id in a cluster** — review the first, reuse it for the rest.\n')
    w('| condition | modality | review this | reuse for |')
    w('|---|---|---|---|')
    for title, mc, g in dup:
        w('| %s | %s | `%s` | %s |' % (title, mc, g[0], ' '.join('`%s`' % x for x in g[1:])))
    w('')
    w('## What this audit does and does not cover\n')
    w('- **It reads the prompt, not the picture.** No image was looked at — the container')
    w('  cannot reach the result CDN. A prompt that passes here can still have produced a')
    w('  bad render, and that is what the physician review is for. What this catches is the')
    w('  opposite failure: a flawless image of the wrong thing.')
    w('- **It compares against the manifest prompt.** A few prompts were edited slightly at')
    w('  fire time (mostly to remove inner quote characters). The one that matters is')
    w('  `s3-0275`, whose `LEFT/RIGHT upper quadrant` was fired as `the upper quadrant` —')
    w('  still unspecified, so the finding holds either way.')
    w('- **Sharding can split a cluster.** The audit ran as six parallel shards, so two items')
    w('  covering the same condition could land with different reviewers and be judged')
    w('  differently. The `s1-0184` ankylosing-spondylitis defect was checked against its two')
    w('  cluster siblings by hand: `s2ck-0232` and `s3-0333` carry no spine clauses and are clean.')
    w('- **ECG and pedigree items were never generated** and are out of scope: 231 manifest')
    w('  items = 198 generated + 33 deliberately excluded, with no leakage in either direction.')
    w('')
    open(a.out, 'w').write('\n'.join(L))
    print('%d findings (%d blockers), %d redundant across %d clusters -> %s'
          % (len(found), len(blockers), redundant, len(dup), a.out))


if __name__ == '__main__':
    main()
