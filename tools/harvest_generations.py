#!/usr/bin/env python3
"""
Turn a raw `show_generations` dump into tools/generated-image-urls.json entries.

  python3 tools/harvest_generations.py dump.json [dump2.json ...] [--dry-run]
  cat dump.json | python3 tools/harvest_generations.py -

WHY THIS EXISTS
The 174 images fired on 2026-07-31 are generated and sitting in the Higgsfield gallery, but
their URLs are not recorded, so nothing downstream can use them. The only two MCP tools that
map a job id to its result URL -- `show_generations` and `job_display` -- are refused by the
cloud/headless surface this project is usually driven from. It is NOT a permission prompt going
unanswered: the refusal is instant, no Higgsfield tool has ever been allow-listed, and every
other Higgsfield tool (generate_image x175, balance, transactions, models_explore, show_medias)
runs there without one. The two that fail are the two that render a client UI widget, plus
sandbox_exec which executes code. A surface with a real client -- Claude Code desktop or CLI, or
claude.ai chat with the connector -- runs them normally.

So the handoff is: run `show_generations` on a surface that can, save the raw JSON, and feed it
to this. Everything after the dump is mechanical, and mechanical work belongs in a tested script
rather than in a chat transcript.

  1. show_generations(size=100, type="image"), following next_cursor until it is null
  2. save each page verbatim (or concatenate them into one JSON array)
  3. python3 tools/harvest_generations.py page1.json page2.json

WHAT IT IS CAREFUL ABOUT
  - It joins on JOB ID, never on order. The pages come back newest-first and interleave with
    other generations, so positional matching would silently mislabel medical images -- an
    illustration attached to the wrong question is worse than a missing one.
  - It walks the JSON structurally rather than assuming a shape, because the exact envelope
    differs between the tool result and a hand-saved copy, and a brittle path would produce
    "0 matched" that reads like "nothing is ready".
  - A job id that is present but carries no URL is reported as PENDING/FAILED, not skipped.
    Eight of the 174 are known to have failed (174 spends, 8 refunds within seconds of their
    own spend, i.e. moderation refusals), and they must show up as such.
  - It refuses to overwrite an existing different URL for a question without --force.
"""
import argparse, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JOBS = os.path.join(ROOT, 'tools', 'higgsfield-jobs-0731.json')
DONE = os.path.join(ROOT, 'tools', 'generated-image-urls.json')

UUID = re.compile(r'^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$', re.I)
URLISH = re.compile(r'^https?://\S+\.(png|jpe?g|webp)(\?\S*)?$', re.I)


def walk(node):
    """Yield every dict in the structure, at any depth."""
    if isinstance(node, dict):
        yield node
        for v in node.values():
            yield from walk(v)
    elif isinstance(node, list):
        for v in node:
            yield from walk(v)


def urls_in(node):
    """Every image URL anywhere under this node, in document order, de-duplicated."""
    out, seen = [], set()

    def rec(n):
        if isinstance(n, str):
            if URLISH.match(n.strip()) and n not in seen:
                seen.add(n)
                out.append(n.strip())
        elif isinstance(n, dict):
            for v in n.values():
                rec(v)
        elif isinstance(n, list):
            for v in n:
                rec(v)
    rec(node)
    return out


def load_dumps(paths):
    blobs = []
    for p in paths:
        raw = sys.stdin.read() if p == '-' else open(p, encoding='utf-8').read()
        raw = raw.strip()
        if not raw:
            continue
        try:
            blobs.append(json.loads(raw))
        except json.JSONDecodeError:
            # Several pages pasted back to back, or a tool result wrapped in text. Pull out
            # every balanced top-level JSON value rather than making the caller tidy it up.
            dec, i, found = json.JSONDecoder(), 0, 0
            while i < len(raw):
                ch = raw[i]
                if ch not in '[{':
                    i += 1
                    continue
                try:
                    val, end = dec.raw_decode(raw, i)
                except json.JSONDecodeError:
                    i += 1
                    continue
                blobs.append(val)
                found += 1
                i = end
            if not found:
                sys.exit(f'{p}: no JSON found')
    return blobs


def flat_pairs(blob):
    """A bare {job-id: url} map, which is what the handoff prompt asks for.

    The walker below looks for objects carrying an `id`, so a flat mapping would sail
    past it and report "0 matched" -- indistinguishable from a dump of the wrong account.
    Recognised only when EVERY key is a UUID and every value is an image URL, so a real
    show_generations page (whose top-level keys are "generations", "next_cursor", ...) can
    never be mistaken for one.
    """
    if not isinstance(blob, dict) or not blob:
        return None
    for k, v in blob.items():
        if not (isinstance(k, str) and UUID.match(k)):
            return None
        if not (isinstance(v, str) and URLISH.match(v.strip())):
            return None
    return {k: v.strip() for k, v in blob.items()}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('dumps', nargs='+', help='show_generations output, or - for stdin')
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--force', action='store_true', help='overwrite an existing different URL')
    ap.add_argument('--jobs', default=JOBS)
    ap.add_argument('--done', default=DONE)
    a = ap.parse_args()

    jobs = json.load(open(a.jobs, encoding='utf-8'))          # job id -> question id
    done = json.load(open(a.done, encoding='utf-8')) if os.path.exists(a.done) else {}
    before = len(done)

    seen_jobs, new, already, conflict, empty = {}, {}, [], [], []
    for blob in load_dumps(a.dumps):
        flat = flat_pairs(blob)
        if flat is not None:
            for jid, url in flat.items():
                if jid not in jobs or jid in seen_jobs:
                    continue
                qid = jobs[jid]
                seen_jobs[jid] = (qid, 'flat', [url])
                if qid in done and done[qid] != url:
                    conflict.append((qid, done[qid], url))
                    if not a.force:
                        continue
                elif qid in done:
                    already.append(qid)
                    continue
                new[qid] = url
            continue
        for node in walk(blob):
            jid = node.get('id')
            if not isinstance(jid, str) or not UUID.match(jid) or jid not in jobs:
                continue
            if jid in seen_jobs:
                continue
            qid = jobs[jid]
            found = urls_in(node)
            seen_jobs[jid] = (qid, node.get('status'), found)
            if not found:
                empty.append((qid, jid, node.get('status')))
                continue
            url = found[0]
            if qid in done and done[qid] != url:
                conflict.append((qid, done[qid], url))
                if not a.force:
                    continue
            elif qid in done:
                already.append(qid)
                continue
            new[qid] = url

    total = len(jobs)
    print(f'job map: {total} fired')
    print(f'  matched in the dump : {len(seen_jobs)}')
    print(f'  new URLs            : {len(new)}')
    print(f'  already recorded    : {len(already)}')
    print(f'  present, NO url     : {len(empty)}   (pending or failed)')
    print(f'  not in the dump     : {total - len(seen_jobs)}')
    if conflict:
        print(f'  CONFLICT            : {len(conflict)}  ' +
              ('(overwritten, --force)' if a.force else '(left alone; pass --force to overwrite)'))
        for qid, old, newu in conflict[:10]:
            print(f'      {qid}\n        was {old}\n        now {newu}')
    if empty:
        print('\n  no URL yet:')
        for qid, jid, st in sorted(empty)[:30]:
            print(f'      {qid:<12} {jid}  status={st}')
        if len(empty) > 30:
            print(f'      ... and {len(empty) - 30} more')
    missing = [j for j in jobs if j not in seen_jobs]
    if missing:
        print(f'\n  {len(missing)} job(s) absent from this dump — page further with next_cursor:')
        for j in missing[:10]:
            print(f'      {jobs[j]:<12} {j}')
        if len(missing) > 10:
            print(f'      ... and {len(missing) - 10} more')

    if a.dry_run:
        print('\n--dry-run: nothing written')
        return 0
    if not new:
        print('\nnothing new to write')
        return 0
    done.update(new)
    with open(a.done, 'w', encoding='utf-8') as f:
        json.dump(done, f, indent=1, sort_keys=True)
        f.write('\n')
    print(f'\nwrote {os.path.relpath(a.done, os.getcwd())}: {before} -> {len(done)} recorded')
    return 0


if __name__ == '__main__':
    sys.exit(main())
