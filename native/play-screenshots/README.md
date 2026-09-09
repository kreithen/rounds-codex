# Play store screenshots — 1080×1920

**Generated 2026-09-09 by `scripts/shoot_play_screenshots.js` from the v133 payload.** Real captures
of the real app, at exactly Play's phone spec. Eight panels; Play requires at least four and allows
eight.

**Why these could be made here when the App Store's could not.** Android WebView *is* Chromium, so a
headless capture in this container is the same renderer that runs on the phone. The iOS panels had
to come off a simulator because WebKit is a different engine and nothing here can run it.

**The viewport is the trick.** Play wants 1080×1920. Rendering at a 1080×1920 *CSS* viewport would
be wrong — `.app` is max-width 468px, so the app would sit as a narrow column in an empty field.
These are rendered at **360×640 CSS with deviceScaleFactor 3**, a real Android logical phone size
inside the 320–430 range this project measures at, which outputs exactly 1080×1920 device pixels.

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
