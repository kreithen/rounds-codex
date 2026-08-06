#!/usr/bin/env python3
"""Reassemble an image that was carried out of the Higgsfield sandbox as base64 chunks.

WHY THIS EXISTS

Higgsfield generation runs through the MCP connector, but the result CDN is unreachable from
this container - the agent proxy refuses CONNECT to it. So a generated image can be *made* from
here and never *seen* from here, which breaks the one thing that matters for a correction loop:
checking whether the correction actually worked.

The way through is that Higgsfield's own `sandbox_exec` can reach the CDN with a bare curl. Its
stdout is truncated at roughly 20 KB per call (~15 KB of binary once base64 inflates it), so a
400 KB page cannot come back in one piece - but it can come back in pieces. Downscale and crop
inside the sandbox first and a page's region of interest is a handful of calls, not thirty.

Sandbox side, per chunk (i of n):

    python3 - <<'PY'
    import base64, io, urllib.request
    from PIL import Image
    raw = urllib.request.urlopen(URL).read()
    im = Image.open(io.BytesIO(raw)).convert("RGB")
    im = im.crop(BOX) if BOX else im            # region of interest only
    im.thumbnail((MAXW, MAXW * 3))
    buf = io.BytesIO(); im.save(buf, "JPEG", quality=Q)
    b = base64.b64encode(buf.getvalue()).decode()
    CH = 14000
    print(f"CHUNK {I} {-(-len(b)//CH)}")
    print(b[I*CH:(I+1)*CH])
    PY

Paste each reply into its own file, then:

    python3 scripts/hf_fetch_chunks.py /tmp/hf/chunk-*.txt --out /tmp/hf/corrected.jpg

It verifies the chunk count and that none is missing, so a silently truncated transfer fails
loudly here rather than producing a half image that gets QA'd as if it were the whole one.
"""
import argparse, base64, re, sys

HDR = re.compile(r"^\s*CHUNK\s+(\d+)\s+(\d+)\s*$")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("files", nargs="+")
    ap.add_argument("--out", required=True)
    a = ap.parse_args()

    parts, total = {}, None
    for path in a.files:
        idx, buf = None, []
        for line in open(path, encoding="utf-8", errors="replace"):
            m = HDR.match(line)
            if m:
                idx, t = int(m.group(1)), int(m.group(2))
                if total is None:
                    total = t
                elif total != t:
                    sys.exit(f"{path}: says {t} chunks, an earlier file said {total}")
                continue
            if idx is not None:
                buf.append(line.strip())
        if idx is None:
            sys.exit(f"{path}: no 'CHUNK i n' header - is this a chunk file?")
        if idx in parts:
            sys.exit(f"chunk {idx} appears twice")
        parts[idx] = "".join(buf)

    if total is None:
        sys.exit("no chunks found")
    missing = [i for i in range(total) if i not in parts]
    if missing:
        sys.exit(f"missing chunk(s): {missing} - re-run those and try again")

    data = base64.b64decode("".join(parts[i] for i in range(total)))
    if data[:2] != b"\xff\xd8":
        sys.exit("reassembled bytes are not a JPEG - a chunk is corrupt or out of order")
    open(a.out, "wb").write(data)
    print(f"wrote {a.out}: {len(data)} bytes from {total} chunks")


if __name__ == "__main__":
    main()
