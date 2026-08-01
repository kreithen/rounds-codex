#!/usr/bin/env python3
"""
Regenerate the sandbox_exec command that downloads all 190 illustrations and zips them.

    python3 tools/sandbox/build_zip_command.py [--slice A B] > cmd.sh

Print it, then paste the whole thing as the `command` argument to sandbox_exec. The
Higgsfield sandbox is the only environment that can fetch these images -- see README.md.

GENERATE, NEVER RETYPE. The first pilot failed with `zlib.error: invalid literal/lengths
set` because the base64 payload was reproduced by hand instead of read from the file.

--slice is for when the sandbox cannot finish inside its 120s call limit: 190 images at
roughly 8 MB each is about 1.5 GB. Slices of ~40 keep each call inside the limit, and the
script skips anything already on disk, so consecutive calls resume if the sandbox happens
to persist between them.
"""
import argparse, base64, gzip, json, os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
P = 'https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_'

SCRIPT = '''import base64,gzip,subprocess,os,zipfile
from PIL import Image
P="https://d8j0ntlcm91z4.cloudfront.net/user_3FrDA30hCddPXDrT7OjkBImfcd4/hf_"
rows=[l.split("|") for l in gzip.decompress(base64.b64decode(open("z.b64").read())).decode().split("\\n") if l]
os.makedirs("img",exist_ok=True)
ok=[];bad=[]
for q,t in rows:
    d="img/%s.jpg"%q
    if os.path.exists(d): ok.append(q); continue
    subprocess.run(["curl","-sS","-m","120","-o","o.png",P+t+".png"],capture_output=True)
    try:
        im=Image.open("o.png").convert("RGB")
        if im.width>720: im=im.resize((720,round(im.height*720/im.width)),Image.LANCZOS)
        im.save(d,"JPEG",quality=85,optimize=True); ok.append(q)
    except Exception: bad.append(q)
with zipfile.ZipFile("images.zip","w",zipfile.ZIP_STORED) as z:
    for q in ok: z.write("img/%s.jpg"%q,"%s.jpg"%q)
print("OK",len(ok),"FAILED",len(bad),bad)
print("ZIP",os.path.getsize("images.zip"))
'''


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--slice', nargs=2, type=int, metavar=('START', 'END'))
    ap.add_argument('--wait', type=int, default=100, help='seconds to wait before tailing the log')
    a = ap.parse_args()

    urls = json.load(open(os.path.join(ROOT, 'tools', 'generated-image-urls.json')))
    ids = sorted(urls)
    if a.slice:
        ids = ids[a.slice[0]:a.slice[1]]
    lines = '\n'.join(f'{q}|{urls[q][len(P):-4]}' for q in ids)
    blob = base64.b64encode(gzip.compress(lines.encode(), 9)).decode()

    cmd = ("set -e\ncd /home/user && mkdir -p rcz && cd rcz\n"
           f"cat > z.b64 <<'B64EOF'\n{blob}\nB64EOF\n"
           f"cat > mk.py <<'PYEOF'\n{SCRIPT}PYEOF\n"
           "nohup python3 mk.py > log.txt 2>&1 &\n"
           f"sleep {a.wait}; tail -3 log.txt; ls -la images.zip 2>/dev/null || echo 'still running'\n")
    print(cmd)
    import sys
    print(f'\n# {len(ids)} ids | command {len(cmd)} chars (sandbox_exec limit 16000)',
          file=sys.stderr)


if __name__ == '__main__':
    main()
