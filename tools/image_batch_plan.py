#!/usr/bin/env python3
"""
Work out which USMLE illustration prompts still need generating, and print the next batch ready
to paste into Higgsfield's generate_image.

This exists so the image run can be picked up in a fresh session without re-deriving anything.
It holds the three decisions that were worked out interactively and are easy to get wrong:

 1. WHAT TO SKIP. ECG items are excluded -- the prompt sheet's own header says AI renders them
    unreliably and the app's vector tracings should stay. The manifest's `isECG` flag is NOT
    sufficient on its own: s1-0012 and s1-0061 are ECGs that the flag misses, so modality text is
    matched as well. The genetics pedigree (s1-0002) is excluded for the same reason the header
    gives -- pedigrees should be authored as SVG, not generated.

 2. ASPECT RATIO PER MODALITY. Radiographs and barium studies are portrait; CT, MRI, ultrasound,
    echo, fundus and blood smears are square; everything else is landscape. Getting this wrong
    wastes a credit and produces a letterboxed image.

 3. WHAT IS ALREADY DONE. tools/generated-image-urls.json maps question id -> CloudFront URL for
    everything generated so far. Add to it as batches complete; this script subtracts it.

Note for whoever runs this: the container cannot reach the image CDN (egress is allowlist-only and
the proxy 403s it), so generated images cannot be fetched or inspected here. Review happens in the
Higgsfield gallery, or via tools/build_review_page.py which builds a standalone page the reviewer
opens in their own browser.

Usage:
  python3 tools/image_batch_plan.py --status
  python3 tools/image_batch_plan.py --next 24          # prints prompts + aspect ratios
  python3 tools/image_batch_plan.py --record <id> <url>  # after a batch completes
"""
import argparse, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MANIFEST = os.path.join(ROOT, 'tools', 'image-manifest.json')
DONE = os.path.join(ROOT, 'tools', 'generated-image-urls.json')

PORTRAIT = ('chest radiograph', 'chest x', 'esophagram', 'barium', 'plain radiograph',
            'frontal', 'upright', 'anteroposterior', 'portable')
SQUARE = (' ct', 'ct ', 'mri', 'fundus', 'ultrasound', 'echocardiog', 'smear', 'pelvic',
          'electron micrograph', 'immunofluorescence')


def aspect(modality):
    m = modality.lower()
    if any(k in m for k in PORTRAIT):
        return '2:3'
    if any(k in m for k in SQUARE):
        return '1:1'
    return '4:3'


def skip_reason(item):
    """Why this item should NOT be generated, or None."""
    m = (item['modality'] + ' ' + item['title']).lower()
    if item.get('isECG'):
        return 'ECG (manifest flag)'
    # the flag misses s1-0012 and s1-0061, so match the modality text too
    if re.search(r'\becg\b|electrocardiogram|rhythm strip|telemetry', m):
        return 'ECG (modality text; manifest flag missed it)'
    if 'pedigree' in m:
        return 'pedigree — author as SVG instead'
    return None


def load():
    items = json.load(open(MANIFEST))['items']
    done = json.load(open(DONE)) if os.path.exists(DONE) else {}
    return items, done


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--status', action='store_true')
    ap.add_argument('--next', type=int, metavar='N')
    ap.add_argument('--record', nargs=2, metavar=('ID', 'URL'))
    a = ap.parse_args()

    items, done = load()
    skipped = {x['id']: skip_reason(x) for x in items if skip_reason(x)}
    eligible = [x for x in items if x['id'] not in skipped]
    todo = [x for x in eligible if x['id'] not in done]

    if a.record:
        qid, url = a.record
        if qid not in {x['id'] for x in items}:
            print(f'not a manifest id: {qid}', file=sys.stderr)
            return 1
        done[qid] = url
        json.dump(done, open(DONE, 'w'), indent=1)
        print(f'recorded {qid} ({len(done)} total)')
        return 0

    if a.status or not a.next:
        print(f'{len(items)} prompts in the manifest')
        print(f'  {len(skipped)} skipped ({sum(1 for v in skipped.values() if "ECG" in v)} ECG, '
              f'{sum(1 for v in skipped.values() if "pedigree" in v)} pedigree)')
        print(f'  {len(eligible)} eligible')
        print(f'  {len(done)} generated')
        print(f'  {len(todo)} REMAINING  (~{len(todo) * 2} credits at 2k)')
        flagmiss = [k for k, v in skipped.items() if 'missed it' in v]
        if flagmiss:
            print(f'\n  note: isECG is unset on {", ".join(flagmiss)} — caught by modality text.'
                  f'\n  Worth fixing in build_image_manifest.py.')
        if not a.next:
            return 0

    print(f'\n{"=" * 70}\nNEXT {min(a.next, len(todo))} TO GENERATE\n{"=" * 70}')
    for x in todo[:a.next]:
        neg = (' Do NOT show: ' + x['avoid']) if x.get('avoid') else ''
        print(f'\n### {x["id"]} | {aspect(x["modality"])} | {x["title"]}')
        print(x['prompt'] + neg)
    return 0


if __name__ == '__main__':
    sys.exit(main())
