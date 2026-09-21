# Play store screenshots — phone, 7" tablet and 10" tablet

**Re-shot 2026-09-17 by `scripts/shoot_play_screenshots.js` from the v147 payload**, and extended to
tablets. Real captures of the real app. Eight panels each; Play requires at least four phone
screenshots and allows eight per form factor.

| set | folder | size | CSS viewport |
|---|---|---|---|
| phone | this folder | 1080×1920 | 360×640 @3 |
| 7" tablet | `tablet7/` | 1920×1080 | 960×540 @2, landscape |
| 10" tablet | `tablet10/` | 2560×1440 | 1280×720 @2, landscape |

**BOTH TABLET SETS WERE RE-SHOT 2026-09-21 BECAUSE THE FIRST ONES WERE THE WRONG SHAPE.** They were
2048×1200 (1.707) and 2560×1600 (1.600), taken at genuine tablet logical sizes — which is exactly
why nobody questioned them. **Play's tablet slots accept 16:9 or 9:16 and nothing else**, and the
Console tags anything else "Needs cropping" in the asset picker; the upload is where it surfaces.
A real device size is not the spec.

The heights came down rather than the widths going up, because **1280 is what keeps the 10" preset
above the app's own 1180px breakpoint** and 960 is what keeps the 7" one below it — raising the
widths to reach 16:9 would have moved `tablet7` across the breakpoint and produced two copies of the
same layout.

The guard in `shoot_play_screenshots.js` asserted `aspect <= 2:1` and **passed both wrong sets**:
true, and insufficient. Each preset now carries its own exact ratio and side bounds and the check is
equality — run against 2048×1200 and 2560×1600 it fails both.

**Only `tablet10` shows the large-screen layout.** 1280 is above the app's own 1180px breakpoint, so
that set — and only that set — has the side rail and the two-pane list that v138–v147 built. `tablet7`
at 1024 is below it and renders the Level 1 layout. That is the reason to ship a 10" set at all.

**`tablet7/03-viewer.png` used to show a cropped illustration** — the viewer's image was pinned to
440×660 CSS px at every viewport above phone width, so a 600px-tall landscape viewport lost 30px off
the top and 30 off the bottom. Fixed in the app (`scripts/fix_viewer_scale.js`), and both tablet sets
were re-shot from a v149 payload. The 7" panel now shows the whole page; the 10" portrait case is 71%
wider than it was. See `native/ROAD-TO-PUBLISHED.md` for the four-viewport measurement.

⚠ **Shoot from an UNSTRIPPED payload.** Build it with `--platform ios` (the two trees are
byte-identical) or without `--asset-packs`. The Android asset-packs payload removes the full-size
artwork by design, and the first tablet run produced a 2560×1600 broken-image panel that passed every
dimension check. The tool now fails on any image with `naturalWidth === 0` and names it.

**Why these could be made here when the App Store's could not.** Android WebView *is* Chromium, so a
headless capture in this container is the same renderer that runs on the phone. The iOS panels had
to come off a simulator because WebKit is a different engine and nothing here can run it.

**The viewport is the trick.** Play wants 1080×1920 for a phone. Rendering at a 1080×1920 *CSS*
viewport would be wrong — `.app` is max-width 468px, so the app would sit as a narrow column in an
empty field. These are rendered at **360×640 CSS with deviceScaleFactor 3**, a real Android logical
phone size inside the 320–430 range this project measures at, which outputs exactly 1080×1920 device
pixels. The tablet presets work the same way; `isMobile` is false on them, because with it true
Chromium lays the page out as a phone at any width and all three sets come out identical.

**Shot 6 has a wide variant.** Above 1180px, `root('library')` alone leaves the right pane showing
"Choose a condition to read it here" — 45% of a store panel given to an empty state. The wide path
opens a condition to fill it, and uses Nursing mode with `dvt` rather than Medical with `chf`, because
the first attempt came out as a near-duplicate of shot 1 differing only by a bookmark star.

| # | file | caption |
|---|---|---|
| 1 | `01-conditions.png` | 183 conditions. Three modes. One library. |
| 2 | `02-gallery-grid.png` | 1,020 original clinical illustrations |
| 3 | `03-viewer.png` | Zoom in. Swipe through. Works offline. |
| 4 | `04-quiz.png` | 1,840 questions — every condition, explained |
| 5 | `05-usmle.png` | 1,010 USMLE-style items across Step 1–3 |
| 6 | `06-review.png` | Bookmark it, and it comes back when you need it |
| 7 | `07-calculator.png` | Ten clinical calculators, offline |
| 8 | `08-updates.png` | 470 guideline updates, 25 specialties |

Captions are in `captions.json`. **They are not burned into the images** — Play does not require
it, and Apple's guidance (caption above the frame, never over the UI) means compositing is a design
step, not a capture step. Ask if you want composed panels on the brand background.

## Three things worth knowing before you use them

**Shot 3 is full-bleed artwork with no app chrome.** The viewer auto-hides its controls, and the
capture waits 6 seconds for the `#zhint` coach mark ("Double-tap to zoom · swipe to browse") to fade
— which also outlasts the chrome. The hint is *not* hidden with CSS: a store screenshot has to be
the real app. If you would rather this panel showed the viewer's controls, shorten `settle` for that
shot to about 3 seconds. Shot 2 shows the gallery UI either way.

**Shot 6 is in Nursing mode**, because each shot uses a fresh context and nursing is the default.
That is genuine, and it varies the colour across the set; say if you want it in Medical.

**These are not a device pass.** Chromium here cannot show a particular phone's WebView version, its
system bars, or the edge-to-edge inset behaviour that `native/ANDROID-RUNBOOK.md` §3a warns is the
likely first real-device bug. Re-shoot on hardware if anything looks wrong there.

## Regenerating

```sh
node scripts/build_native_payload.js ../rounds-codex-app /tmp/rc-shotpay --platform android --allow-oversize
RC_PW=<dir with node_modules/playwright-core> node scripts/shoot_play_screenshots.js /tmp/rc-shotpay native/play-screenshots
```

`--allow-oversize` is deliberate: screenshots need the artwork, so this is the bundle-everything
payload rather than the `--asset-packs` one that ships.
