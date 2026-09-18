#!/usr/bin/env python3
"""make_android_splash.py — replace Capacitor's launch screen with the brand's.

    python3 scripts/make_android_splash.py <web-clone> <android-res-dir>

WHY. `npx cap add android` ships Capacitor's OWN logo on a WHITE field, at eleven sizes. Left
alone, Rounds Codex launches showing another project's mark and then flips to a dark navy app. It
is the first thing anyone sees and it is wrong twice over -- wrong logo, wrong colour.

GEOMETRY IS READ FROM THE FILES BEING REPLACED, not assumed. Capacitor's set is eleven sizes across
`drawable/`, `drawable-port-*` and `drawable-land-*`, and they are not a tidy density ladder
(480x320, 800x480, 1280x1920 ...). Each output matches its predecessor's exact dimensions, so the
theme, the manifest and the density buckets keep working untouched.

THE MARK IS SIZED OFF THE SHORT EDGE -- 38% of it -- so the same logo reads at the same relative
size in portrait and landscape. Sizing off the width would make the landscape splash's logo
enormous and the portrait one small.

SOURCE is `icons/icon-maskable-512.png`, the same fully-opaque brand mark the launcher icons and
the Play store icon come from, on the same flat #0B1120. One source, three destinations, no
repainting -- and the launch screen then matches the app it launches into, which is the actual
point.

NEVER UPSCALED: the source is 512 and the largest mark drawn is 38% of 1280 = 486.
"""
import sys, os, glob, struct
from PIL import Image

SRC_REL = os.path.join('icons', 'icon-maskable-512.png')
BG = (11, 17, 32)
MARK_FRACTION_OF_SHORT_EDGE = 0.38


def main():
    if len(sys.argv) < 3:
        print('usage: make_android_splash.py <web-clone> <android-res-dir>', file=sys.stderr)
        sys.exit(2)
    web, res = sys.argv[1], sys.argv[2]

    src = Image.open(os.path.join(web, SRC_REL)).convert('RGBA')
    if src.size != (512, 512):
        sys.exit(f'FAIL: {SRC_REL} is {src.size}, expected (512, 512)')
    if src.convert('RGB').getpixel((2, 2)) != BG:
        sys.exit(f'FAIL: source corner is not {BG}; the brand colour changed')

    targets = sorted(glob.glob(os.path.join(res, 'drawable*', 'splash.png')))
    if not targets:
        sys.exit(f'FAIL: no drawable*/splash.png under {res} -- has `cap add android` been run?')

    biggest = 0
    for path in targets:
        with open(path, 'rb') as fh:
            head = fh.read(24)
        w, h = struct.unpack('>II', head[16:24])

        side = int(min(w, h) * MARK_FRACTION_OF_SHORT_EDGE)
        if side > 512:
            sys.exit(f'FAIL: {path} would need a {side}px mark from a 512px source -- refusing to upscale')
        biggest = max(biggest, side)

        canvas = Image.new('RGB', (w, h), BG)
        mark = src.resize((side, side), Image.LANCZOS)
        canvas.paste(mark.convert('RGB'), ((w - side) // 2, (h - side) // 2))
        canvas.save(path, optimize=True)
        print(f'  ok  {os.path.relpath(path, res):42s} {w}x{h}  mark {side}px')

    print(f'\n{len(targets)} splash image(s) rewritten on {"#%02X%02X%02X" % BG}, largest mark {biggest}px')
    print('The launch screen now matches the app it launches into.')


if __name__ == '__main__':
    main()
