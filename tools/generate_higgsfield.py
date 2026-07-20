#!/usr/bin/env python3
"""
SKELETON — generate images from the manifest prompts via the Higgsfield Cloud API,
saving each as tools/candidates/<id>.png for the QA review step.

STATUS: template. Before running, confirm two things against the live docs
(https://cloud.higgsfield.ai / https://apidog.com/blog/higgsfield-api/):
  1. The exact endpoint + request body for TEXT-TO-IMAGE (model id, param names).
  2. How the result image is returned (inline base64 vs a URL to download).
Then fill in ENDPOINT / build_payload() / extract_image() below. Nothing is guessed here
on purpose — a wrong request shape would silently burn credits.

Auth:   export HIGGSFIELD_API_KEY=...    (never commit the key)
Run:    python3 tools/generate_higgsfield.py [--limit 20] [--only s2ck-0178,s3-0404] [--skip-ecg]
Network: this sandbox may be firewalled from cloud.higgsfield.ai; if so, run this on the
         desktop where you're logged in, or generate via the Higgsfield UI/CLI instead.
"""
import argparse, json, os, sys, time

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MANIFEST = os.path.join(ROOT, "tools", "image-manifest.json")
OUT_DIR = os.path.join(ROOT, "tools", "candidates")

# TODO: confirm these against the Higgsfield API docs before enabling.
ENDPOINT = None          # e.g. "https://cloud.higgsfield.ai/v1/text2image"
MODEL = None             # e.g. "higgsfield-soul" or whichever image model
API_KEY = os.environ.get("HIGGSFIELD_API_KEY")

def build_payload(item):
    """Return the JSON body for one text-to-image request. CONFIRM param names."""
    return {
        "model": MODEL,
        "prompt": item["prompt"],
        "negative_prompt": item.get("avoid", ""),
        "width": 1024, "height": 1024,
        # ...any required params (steps, guidance, output format) per the docs
    }

def extract_image_bytes(resp_json):
    """Given the API response, return raw PNG/JPEG bytes. CONFIRM response shape.
    Common shapes: {'image': '<base64>'} or {'output':[{'url': '...'}]} (then download)."""
    raise NotImplementedError("Confirm the Higgsfield response shape, then implement.")

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0, help="0 = all")
    ap.add_argument("--only", default="", help="comma-separated ids")
    ap.add_argument("--skip-ecg", action="store_true", help="skip ECG items (recommended)")
    ap.add_argument("--overwrite", action="store_true")
    a = ap.parse_args()

    if not API_KEY:
        sys.exit("Set HIGGSFIELD_API_KEY first (and never commit it).")
    if not ENDPOINT or not MODEL:
        sys.exit("Fill in ENDPOINT + MODEL + build_payload/extract_image_bytes from the API docs first.")

    import requests  # pip install requests
    items = json.load(open(MANIFEST))["items"]
    only = set(s.strip() for s in a.only.split(",") if s.strip())
    if only: items = [it for it in items if it["id"] in only]
    if a.skip_ecg: items = [it for it in items if not it.get("isECG")]
    if a.limit: items = items[:a.limit]
    os.makedirs(OUT_DIR, exist_ok=True)

    done = 0
    for it in items:
        dst = os.path.join(OUT_DIR, it["id"] + ".png")
        if os.path.exists(dst) and not a.overwrite:
            continue
        try:
            r = requests.post(ENDPOINT, headers={"Authorization": "Bearer " + API_KEY},
                              json=build_payload(it), timeout=180)
            r.raise_for_status()
            open(dst, "wb").write(extract_image_bytes(r.json()))
            done += 1
            print(f"[{done}] {it['id']}  {it['title']}")
            time.sleep(1)  # be polite to the API
        except Exception as e:
            print(f"FAILED {it['id']}: {e}", file=sys.stderr)
    print(f"\nGenerated {done} images into {OUT_DIR}. Next: QA in image-qa.html, then incorporate_images.py.")

if __name__ == "__main__":
    main()
