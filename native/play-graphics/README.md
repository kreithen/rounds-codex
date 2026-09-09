# Play feature graphic — 1024×500

`feature-graphic.png`, generated from `feature-graphic.html` by
`node scripts/make_feature_graphic.js`. The last listing asset that was missing.

## It is not the social template resized

`landing/social-*.html` carries the brand system and was the right starting point, but **four things
in it cannot appear in a Play feature graphic**, each checked against Google's guidance rather than
assumed:

| in the social template | why it is not here |
|---|---|
| "Download for **FREE**" | Play prohibits price and promotional wording in assets, naming *Free, Sale, Best, #1, Top, New, Discount* explicitly |
| the **App Store badge** | wrong store, and promoting another store inside a Play listing asset |
| the three **phone mockups** | Play says not to place screenshots in device frames, in the feature graphic or the screenshots |
| the near-black `#020509` base | Play says pure white, black and dark grey blend into the store's own background |

So the blue and teal radial gradients are kept and the base is lifted to a deep navy. That is why
this reads as blue where the social assets read as black.

Everything sits in the centre: Play crops this asset on some surfaces, so nothing that matters goes
near an edge.

## What the script checks, and what it cannot

`make_feature_graphic.js` renders and then verifies the things a person cannot eyeball — exact
1024×500, **no alpha channel** (PNG colour type 2, which Play requires and which also proves nothing
left the background see-through), the asset size ceiling, no forbidden wording, no App Store or iOS
reference, and that the background is neither near-black nor grey (sampled at the four corners,
where Play's own background meets it).

Run against a version with "Download for FREE" put back, it fails. That is the test that it is a
guard.

**Framing and taste still need eyes.** The first render carried a full-width ECG trace at 56%
height; most of an ECG baseline is flat, so it rendered as a hairline ruling straight through the
composition and read as an artifact. It was removed — the logo mark already carries that motif — and
no check would have caught it.

The two counts painted into the graphic are covered by `scripts/verify_listing_counts.js`, which now
reads this HTML too. A stale number in a picture is worse than one in a document, because nobody
re-reads a picture.

## Regenerating

```sh
RC_PW=<dir with node_modules/playwright-core> node scripts/make_feature_graphic.js
```
