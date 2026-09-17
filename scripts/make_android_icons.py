#!/usr/bin/env python3
"""make_android_icons.py — the Android launcher icon set, from the icon the site already ships.

    python3 scripts/make_android_icons.py <web-clone> <out-dir>

SOURCE. `icons/icon-maskable-512.png`, not `icon-512.png`. The latter carries rounded-corner
transparency (3.5% of its pixels are not opaque, measured) and every Android launcher applies its
own mask, so a pre-rounded source gets rounded twice. The maskable variant is full-bleed and fully
opaque -- alpha 255 at every pixel -- which is exactly what an adaptive icon layer wants.

IT ALREADY FITS ANDROID'S SAFE ZONE, measured rather than assumed. The ECG mark's bounding box is
312x307 in a 512 canvas -- 60.9% x 60.0%, centred at (254,254) against a canvas centre of 256.
Android guarantees only the inner 72dp circle of the 108dp canvas is visible, which is 66.7%; a
circular mark at 60.9% sits inside it with room. So the art is used 1:1 and nothing is rescaled,
recomposed or repainted.

THE BACKGROUND IS FLAT. Ten samples around the border all read exactly (11,17,32) = #0B1120, so the
background layer is that colour as a resource rather than a PNG, and the monochrome layer can be
derived by subtracting it.

WHAT IT WRITES, in the Android resource layout, ready to drop into
`android/app/src/main/res/`:

    mipmap-{m,h,xh,xxh,xxxh}dpi/ic_launcher.png            legacy, 48dp
    mipmap-{...}/ic_launcher_round.png                     legacy round, 48dp, circle-masked
    mipmap-{...}/ic_launcher_foreground.png                adaptive foreground, 108dp
    mipmap-{...}/ic_launcher_monochrome.png                Android 13 themed icon, 108dp
    mipmap-anydpi-v26/ic_launcher.xml                      the adaptive icon
    mipmap-anydpi-v26/ic_launcher_round.xml                same layers; launchers pick by mask
    values/ic_launcher_background.xml                      the flat colour

DENSITY BUCKETS. Legacy icons are 48dp: 48/72/96/144/192 px at mdpi..xxxhdpi. Adaptive layers are
108dp: 108/162/216/324/432. Those multipliers (1, 1.5, 2, 3, 4) are the platform's, not a choice.

RESAMPLING IS LANCZOS AND ONLY EVER DOWN -- the source is 512 and the largest output is 432, so no
output is upscaled. A launcher icon that has been enlarged looks soft next to every other icon in
the drawer.
"""
import sys, os
from PIL import Image, ImageDraw

SRC_REL = os.path.join('icons', 'icon-maskable-512.png')
BG = (11, 17, 32)
BG_HEX = '#0B1120'
BUCKETS = [('mdpi', 1.0), ('hdpi', 1.5), ('xhdpi', 2.0), ('xxhdpi', 3.0), ('xxxhdpi', 4.0)]
LEGACY_DP, ADAPTIVE_DP = 48, 108


def main():
    if len(sys.argv) < 3:
        print('usage: make_android_icons.py <web-clone> <out-dir>', file=sys.stderr)
        sys.exit(2)
    web, out = sys.argv[1], sys.argv[2]
    src_path = os.path.join(web, SRC_REL)
    src = Image.open(src_path).convert('RGBA')

    if src.size != (512, 512):
        sys.exit(f'FAIL: {SRC_REL} is {src.size}, expected (512, 512)')
    if src.getchannel('A').getextrema() != (255, 255):
        sys.exit(f'FAIL: {SRC_REL} is not fully opaque -- it is not the maskable variant')
    if src.convert('RGB').getpixel((2, 2)) != BG:
        sys.exit(f'FAIL: corner is {src.convert("RGB").getpixel((2,2))}, expected {BG}. '
                 'The brand colour changed; update BG rather than shipping a mismatched layer.')

    # Monochrome (Android 13 themed icons): the SILHOUETTE in the alpha channel, white art, because
    # the system tints it. The shape is recovered as distance from the flat background -- but the
    # knee matters more than the idea. The source's departure-from-background histogram is bimodal:
    # 82.9% of pixels sit below 20 (the flat field), ~12% spread from 20 to 300 (the mark's GLOW),
    # and 4.8% sit at 400+ (the strokes). A gentle ramp turns the glow opaque and the themed icon
    # renders as a white blob with a ring faintly inside it -- which is what the first version did.
    # Ramping 300 -> 400 discards the glow and keeps the ring and the waveform.
    MONO_LO, MONO_HI = 300, 400
    rgb = src.convert('RGB')
    mono = Image.new('RGBA', (512, 512), (255, 255, 255, 0))
    mp, sp = mono.load(), rgb.load()
    for y in range(512):
        for x in range(512):
            r, g, b = sp[x, y]
            d = abs(r - BG[0]) + abs(g - BG[1]) + abs(b - BG[2])
            a = 0 if d <= MONO_LO else min(255, int((d - MONO_LO) * 255 / (MONO_HI - MONO_LO)))
            mp[x, y] = (255, 255, 255, a)

    n = 0
    for bucket, mult in BUCKETS:
        d = os.path.join(out, f'mipmap-{bucket}')
        os.makedirs(d, exist_ok=True)
        legacy, adaptive = int(LEGACY_DP * mult), int(ADAPTIVE_DP * mult)

        sq = src.resize((legacy, legacy), Image.LANCZOS)
        sq.convert('RGB').save(os.path.join(d, 'ic_launcher.png'), optimize=True); n += 1

        # The round legacy icon is for pre-26 launchers that ask for one; they apply no mask, so
        # the circle has to be in the file.
        mask = Image.new('L', (legacy * 4, legacy * 4), 0)
        ImageDraw.Draw(mask).ellipse((0, 0, legacy * 4 - 1, legacy * 4 - 1), fill=255)
        rnd = sq.copy(); rnd.putalpha(mask.resize((legacy, legacy), Image.LANCZOS))
        rnd.save(os.path.join(d, 'ic_launcher_round.png'), optimize=True); n += 1

        src.resize((adaptive, adaptive), Image.LANCZOS).save(
            os.path.join(d, 'ic_launcher_foreground.png'), optimize=True); n += 1
        mono.resize((adaptive, adaptive), Image.LANCZOS).save(
            os.path.join(d, 'ic_launcher_monochrome.png'), optimize=True); n += 1

    xml = os.path.join(out, 'mipmap-anydpi-v26'); os.makedirs(xml, exist_ok=True)
    body = ('<?xml version="1.0" encoding="utf-8"?>\n'
            '<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n'
            '    <background android:drawable="@color/ic_launcher_background" />\n'
            '    <foreground android:drawable="@mipmap/ic_launcher_foreground" />\n'
            '    <monochrome android:drawable="@mipmap/ic_launcher_monochrome" />\n'
            '</adaptive-icon>\n')
    for f in ('ic_launcher.xml', 'ic_launcher_round.xml'):
        open(os.path.join(xml, f), 'w').write(body); n += 1

    vals = os.path.join(out, 'values'); os.makedirs(vals, exist_ok=True)
    open(os.path.join(vals, 'ic_launcher_background.xml'), 'w').write(
        '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n'
        f'    <color name="ic_launcher_background">{BG_HEX}</color>\n</resources>\n'); n += 1

    print(f'  source   {SRC_REL}  512x512, fully opaque, background {BG_HEX}')
    print(f'  wrote    {n} files into {out}')
    print(f'  legacy   {"/".join(str(int(LEGACY_DP*m)) for _, m in BUCKETS)} px')
    print(f'  adaptive {"/".join(str(int(ADAPTIVE_DP*m)) for _, m in BUCKETS)} px')
    print('  drop the whole tree into android/app/src/main/res/ -- it merges by folder name')


if __name__ == '__main__':
    main()
