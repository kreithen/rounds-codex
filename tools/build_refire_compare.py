#!/usr/bin/env python3
"""Build a side-by-side BEFORE/AFTER page for the corrected-prompt re-fires.

    python3 tools/build_refire_compare.py [--out tools/refire-compare.html]

The question this page has to answer is not "is this a good image" -- build_review_page.py
already does that -- but "did the correction actually fix the thing the audit found". That
needs both renders on screen at once, with the finding written between them.

Self-contained HTML, opened from file:// on a machine with ordinary internet. The images are
referenced by their remote CloudFront URLs and fetched by the reviewer's own browser: this
container cannot reach the CDN (the agent proxy refuses CONNECT), and the Artifact CSP blocks
external hosts, so neither a local fetch nor an Artifact is an option.
"""
import argparse, json, os, io, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QUEUE = os.path.join(ROOT, 'tools', 'refire-queue.json')
NEW = os.path.join(ROOT, 'tools', 'generated-image-urls.json')
OLD = os.path.join(ROOT, 'tools', 'superseded-image-urls.json')

ap = argparse.ArgumentParser()
ap.add_argument('--out', default=os.path.join(ROOT, 'tools', 'refire-compare.html'))
a = ap.parse_args()

queue = json.load(open(QUEUE))
new = json.load(open(NEW))
old = json.load(open(OLD))

missing = [x['id'] for x in queue if x['id'] not in new or x['id'] not in old]
if missing:
    raise SystemExit(f'FAILED: no before/after pair for {", ".join(missing)}')
unchanged = [x['id'] for x in queue if new[x['id']] == old[x['id']]]
if unchanged:
    raise SystemExit(f'FAILED: URL did not change for {", ".join(unchanged)} -- was it really re-fired?')

E = html.escape
rows = []
for x in queue:
    i = x['id']
    note = f'<p class="note">{E(x["note"])}</p>' if x.get('note') else ''
    rows.append(f'''
<section>
  <h2><span class="id">{E(i)}</span> {E(x['title'])}</h2>
  <p class="meta">{E(x['exam'])} &middot; aspect {E(x['ar'])}</p>
  <div class="finding"><b>What the audit found</b><p>{E(x['finding'])}</p>{note}</div>
  <div class="pair">
    <figure class="before"><figcaption>BEFORE &mdash; shipped, from the wrong prompt</figcaption>
      <a href="{E(old[i])}" target="_blank" rel="noopener"><img loading="lazy" src="{E(old[i])}" alt="before"></a></figure>
    <figure class="after"><figcaption>AFTER &mdash; corrected prompt</figcaption>
      <a href="{E(new[i])}" target="_blank" rel="noopener"><img loading="lazy" src="{E(new[i])}" alt="after"></a></figure>
  </div>
  <details><summary>corrected prompt</summary><pre>{E(x['prompt'])}</pre></details>
</section>''')

doc = f'''<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Re-fired illustrations &mdash; before and after</title>
<style>
 :root{{color-scheme:light dark}}
 body{{font:15px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
   margin:0 auto;padding:24px 18px 80px;max-width:1100px}}
 h1{{font-size:22px;margin:0 0 6px}}
 .lede{{color:#666;margin:0 0 28px;max-width:70ch}}
 section{{border-top:1px solid #8884;padding:22px 0}}
 h2{{font-size:17px;margin:0 0 2px;font-weight:600}}
 .id{{font-family:ui-monospace,Menlo,monospace;font-size:14px;opacity:.6;margin-right:8px}}
 .meta{{color:#888;font-size:12.5px;margin:0 0 12px}}
 .finding{{background:#8881;border-radius:10px;padding:12px 14px;margin:0 0 16px;max-width:80ch}}
 .finding b{{font-size:12px;letter-spacing:.06em;text-transform:uppercase;opacity:.65}}
 .finding p{{margin:6px 0 0}}
 .note{{opacity:.75;font-size:13.5px}}
 .pair{{display:grid;grid-template-columns:1fr 1fr;gap:16px}}
 @media (max-width:720px){{.pair{{grid-template-columns:1fr}}}}
 figure{{margin:0}}
 figcaption{{font-size:11.5px;letter-spacing:.05em;text-transform:uppercase;
   font-weight:700;margin:0 0 6px}}
 .before figcaption{{color:#b4453c}} .after figcaption{{color:#2f7d4f}}
 img{{width:100%;height:auto;border-radius:10px;background:#8881;display:block}}
 details{{margin-top:14px}} summary{{cursor:pointer;font-size:13px;opacity:.7}}
 pre{{white-space:pre-wrap;font-size:12.5px;background:#8881;padding:12px;border-radius:8px}}
</style></head><body>
<h1>Re-fired illustrations &mdash; before and after</h1>
<p class="lede">{len(queue)} images whose prompt disagreed with the exam item it was written for.
The BEFORE image is what is recorded today: it rendered cleanly, which is why nothing caught it &mdash;
it is a faithful picture of the wrong thing. The question for each pair is whether the AFTER image
fixes the finding stated between them. Click either image for full size.</p>
{''.join(rows)}
</body></html>'''

io.open(a.out, 'w', encoding='utf-8').write(doc)
print(f'wrote {a.out} -- {len(queue)} before/after pairs')
