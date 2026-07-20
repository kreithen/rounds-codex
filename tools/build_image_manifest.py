#!/usr/bin/env python3
"""
Parse higgsfield-image-prompts.md into a structured JSON manifest — the canonical
job list that drives both image generation and the QA review page.

Usage:  python tools/build_image_manifest.py
Output: tools/image-manifest.json  (one entry per illustrated question)
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "higgsfield-image-prompts.md")
OUT = os.path.join(ROOT, "tools", "image-manifest.json")

HEAD = re.compile(r'^###\s+(?P<id>[A-Za-z0-9-]+)\s*[-–]\s*(?P<title>.*?)\s*(?:\((?P<meta>[^)]*)\))?\s*(?P<ecg>\[ECG\])?\s*$')

def field(block, name):
    # grab "- **Name:** value" up to the next "- **" or end
    m = re.search(r'-\s+\*\*'+re.escape(name)+r':\*\*\s*(.*?)(?=\n-\s+\*\*|\Z)', block, re.S)
    return re.sub(r'\s*\n\s*', ' ', m.group(1)).strip() if m else ""

def must_show(block):
    m = re.search(r'-\s+\*\*Must show \(QA\):\*\*\s*(.*?)(?=\n-\s+\*\*|\Z)', block, re.S)
    if not m: return []
    return [re.sub(r'\s+', ' ', ln).strip(' -') for ln in m.group(1).strip().splitlines() if ln.strip().startswith('-')]

def main():
    text = open(SRC, encoding="utf-8").read()
    # split into sections at each "### "
    parts = re.split(r'(?m)^(?=###\s)', text)
    items, seen = [], set()
    for p in parts:
        first = p.splitlines()[0] if p.strip().startswith("###") else ""
        h = HEAD.match(first)
        if not h:
            continue
        qid = h.group("id").strip()
        if qid in seen:
            continue
        seen.add(qid)
        meta = (h.group("meta") or "").strip()
        exam, system = "", ""
        if "-" in meta or "–" in meta:
            bits = re.split(r'\s*[-–]\s*', meta, maxsplit=1)
            exam = bits[0].strip()
            system = bits[1].strip() if len(bits) > 1 else ""
        items.append({
            "id": qid,
            "title": h.group("title").strip(),
            "exam": exam,
            "system": system,
            "isECG": bool(h.group("ecg")) or "[ECG]" in first,
            "modality": field(p, "Modality"),
            "caseContext": field(p, "Case context"),
            "prompt": field(p, "Prompt"),
            "mustShow": must_show(p),
            "avoid": field(p, "Avoid (negative prompt)"),
            "fallback": field(p, "Real-image fallback"),
            "targetFile": qid + ".png",
        })
    json.dump({"count": len(items), "items": items}, open(OUT, "w"), indent=2)
    ecg = sum(1 for it in items if it["isECG"])
    missing_prompt = [it["id"] for it in items if not it["prompt"]]
    print(f"wrote {OUT}: {len(items)} items ({ecg} ECG)")
    if missing_prompt:
        print("WARNING: %d items missing a Prompt: %s" % (len(missing_prompt), missing_prompt[:10]))

if __name__ == "__main__":
    main()
