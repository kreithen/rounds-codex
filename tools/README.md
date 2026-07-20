# Real / AI image pipeline (Higgsfield → physician QA → module)

Turns the 231 case-specific prompts in `../higgsfield-image-prompts.md` into real/AI images
and wires the **physician-approved** ones into the USMLE module, replacing the schematic SVGs.

```
prompts (231)  →  generate  →  candidates/<id>.png  →  QA review (approve)  →  incorporate  →  live module
                  (Higgsfield)                          image-qa.html          incorporate_images.py
```

The registry (`RC_ILLUS[id]`) makes each swap a one-line override — no engine change. A generated
`preview/illus-real.js` is loaded LAST, so an approved real image wins over its schematic; anything
without an approved image keeps its schematic. Real images render with an **IMAGE** badge (green);
schematics keep the **SCHEMATIC** badge.

## The hard rule (medical safety)
AI images are photoreal but **not reliably accurate**. Every image must pass a physician QA gate
(`image-qa.html`) against the "Must show (QA)" checklist before it goes live. **ECGs are skipped by
default** (`isECG` in the manifest) — AI cannot render correct ECGs; keep those vector, or use a real
de-identified tracing. This mirrors the Factory v2.0 QA gates.

## Files
| File | What it does |
|---|---|
| `build_image_manifest.py` | Parses `../higgsfield-image-prompts.md` → `image-manifest.json` (231 jobs: id, prompt, modality, mustShow, avoid, fallback, isECG). |
| `image-manifest.json` | Canonical job list (regenerate whenever the prompts file changes). |
| `generate_higgsfield.py` | **Skeleton** — calls the Higgsfield API per prompt → `candidates/<id>.png`. Needs `HIGGSFIELD_API_KEY` + endpoint/shape confirmed against cloud.higgsfield.ai docs. |
| `image-qa.html` | Physician review page — image beside its QA checklist; Approve / Reject / Regenerate; exports `decisions.json`. |
| `incorporate_images.py` | Optimizes approved `candidates/<id>.*` → `preview/img/<id>.jpg` + writes `preview/illus-real.js`. |
| `candidates/` | Drop generated images here, named by question id. |

## Workflow
1. **Manifest** (only if prompts changed): `python3 tools/build_image_manifest.py`
2. **Generate** → put images in `tools/candidates/<id>.png`:
   - via the API skeleton once confirmed: `HIGGSFIELD_API_KEY=… python3 tools/generate_higgsfield.py`
   - or on your desktop (Higgsfield UI/CLI), downloading each as `<id>.png`.
   - Tip: the manifest's `prompt` field is exactly what to paste; `targetFile` is the filename to save.
3. **QA review**: serve the folder over http and open the page —
   `cd tools && python3 -m http.server 8080` → visit `http://localhost:8080/image-qa.html`.
   Approve only images that satisfy every "Must show" bullet. Click **Export decisions.json**.
4. **Incorporate** the approved set:
   `python3 tools/incorporate_images.py --images tools/candidates --decisions decisions.json`
   (add `--include-ecg` only if you have a verified-correct ECG image; omitted = ECGs stay vector.)
5. **Rebuild** the preview zip and re-verify coverage.

Start with a **20-image pilot** on the highest-yield questions to confirm Higgsfield's medical
output quality before spending credits/QA time on all 231.
