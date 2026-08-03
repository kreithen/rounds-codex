#!/usr/bin/env python3
"""
Rename a folder of generated images from their CDN filenames to question ids.

A bulk download out of the Higgsfield gallery names each file after the generation
(hf_20260729_190645_758d7a38-....png), not after the question it belongs to.
tools/generated-image-urls.json already records id -> URL, and the URL's basename is that
same stem, so the mapping is exact and does not need guessing.

WHAT IT REFUSES TO DO
  * It will not pair a leftover file with an unclaimed question id just because both are
    unaccounted for. A wrong image on a question is worse than a missing one, and "these are
    the only two left over" is not evidence they belong together.
  * It skips stems recorded in superseded-image-urls.json. Those are earlier takes of prompts
    that were re-fired after review; shipping one silently restores the version that was
    rejected.
  * It reports, rather than resolves, a stem that maps to more than one id.

Extensions are rewritten to the format PIL actually detects, because a bulk export can hand
back a PNG named .jpeg.

Usage:
  python3 tools/stage_by_cdn_name.py --images <downloaded-folder> --out <staging-folder>
"""
import argparse, json, os, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CURRENT = os.path.join(ROOT, "tools", "generated-image-urls.json")
SUPERSEDED = os.path.join(ROOT, "tools", "superseded-image-urls.json")
IMG_EXTS = (".png", ".jpg", ".jpeg", ".webp")
EXT_FOR = {"PNG": ".png", "JPEG": ".jpg", "WEBP": ".webp"}


def stems(path):
    """{cdn-stem: [question-id, ...]} from an id -> url (or id -> [urls]) map."""
    out = {}
    if not os.path.exists(path):
        return out
    for qid, val in json.load(open(path)).items():
        for url in (val if isinstance(val, list) else [val]):
            out.setdefault(os.path.splitext(os.path.basename(url))[0], []).append(qid)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--images", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--report", default=None, help="write the mapping to this JSON file")
    a = ap.parse_args()

    from PIL import Image

    cur, old = stems(CURRENT), stems(SUPERSEDED)
    all_ids = set(json.load(open(CURRENT)))

    files = sorted(f for f in os.listdir(a.images)
                   if os.path.splitext(f)[1].lower() in IMG_EXTS)
    os.makedirs(a.out, exist_ok=True)

    matched, ambiguous, superseded, unmatched, unreadable = {}, [], [], [], []
    for f in files:
        stem = os.path.splitext(f)[0]
        ids = cur.get(stem)
        if ids and len(ids) > 1:
            ambiguous.append((f, ids)); continue
        if not ids:
            (superseded if stem in old else unmatched).append(f); continue
        qid = ids[0]
        src = os.path.join(a.images, f)
        try:
            with Image.open(src) as im:
                ext = EXT_FOR.get(im.format, os.path.splitext(f)[1].lower())
                im.verify()
        except Exception as e:
            unreadable.append((f, str(e))); continue
        shutil.copyfile(src, os.path.join(a.out, qid + ext))
        matched[qid] = f

    missing = sorted(all_ids - set(matched))
    print(f"input files      : {len(files)}")
    print(f"staged by id     : {len(matched)} -> {a.out}")
    print(f"skipped, superseded by a re-fire: {len(superseded)}")
    for f in superseded:
        print(f"    {f}  (older take of {old[os.path.splitext(f)[0]][0]})")
    print(f"unmatched files  : {len(unmatched)}")
    for f in unmatched:
        print(f"    {f}  - not in generated-image-urls.json under that name")
    print(f"question ids with no file: {len(missing)}")
    for m in missing:
        print(f"    {m}  expected {os.path.basename(json.load(open(CURRENT))[m])}")
    if ambiguous:
        print(f"AMBIGUOUS (one file, several ids): {ambiguous}")
    if unreadable:
        print(f"UNREADABLE: {unreadable}")

    if len(unmatched) and len(missing):
        print("\nNOTE: there are both leftover files and unclaimed ids. They are NOT paired up "
              "automatically - check each by eye before adding it.")

    if a.report:
        json.dump({"matched": matched, "missing": missing, "unmatched": unmatched,
                   "superseded": superseded}, open(a.report, "w"), indent=1)
    return 1 if (ambiguous or unreadable) else 0


if __name__ == "__main__":
    sys.exit(main())
