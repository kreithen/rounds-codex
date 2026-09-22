# Official store badges

**Neither badge may be redrawn, recoloured, rotated, or set in a different typeface.**
Both stores supply the artwork and require it unmodified. The landing page's current
"Download on the App Store" button is a *hand-traced* SVG (Apple's mark redrawn, "App Store"
set in SF Pro) — it is being replaced with the file below.

| file | source | status |
|---|---|---|
| `apple-download-on-the-app-store.svg` | `https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg` — internal title `Download_on_the_App_Store_Badge_US-UK_RGB_blk_4SVG_092917` | fetched 2026-09-22 |
| `google-play-badge.png` | Google Play badge generator | **missing — must be downloaded on the Mac** |

## Why the Play badge is not here

Every Google host that serves it refuses CONNECT through the agent proxy: `play.google.com`,
`play.google`, and `partnermarketinghub.withgoogle.com` all return nothing. `developer.apple.com`
is reachable, which is why only one of the two could be fetched from a session. Do not substitute
a copy from Wikimedia or a third-party mirror — it may be a superseded revision, and the badge is
one of the few assets where "close enough" is a brand-guidelines violation.

## Layout rules that govern how the two sit together

- **Clear space** around each badge is at least 1/4 of the badge's height, on all four sides.
- **The Google Play badge is never smaller than another store's badge** in the same lockup.
  Match their heights, not their widths — the two badges have different aspect ratios.
- Nothing may be placed inside the badge, and the badge may not be used as a text element in a
  sentence.

Check both brand pages before a final export; they are reachable from any normal browser:
Apple's marketing guidelines at `developer.apple.com/app-store/marketing/guidelines/` (200 from
here) and Google's at `play.google/brand-guidelines/`.
