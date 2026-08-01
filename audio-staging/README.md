# Condition audio player

`scripts/audio_player.js` is the component: `rcapHTML(a)` renders it, `rcapInit()` wires it,
`RCAP_CSS` is the stylesheet. Built 2026-08-01 from the mockup `IMG_1322.png`, with every
colour and proportion measured off that file — card `#E3E3E3`→`#DDDDDD`, bar `#131313`,
progress `#8D1D43`, track `#888888`.

`player-demo.html` is the standalone harness. It expects `chf.mp3` beside it; serve with
`node scripts/netlifysim.js <dir> <port>` rather than opening off disk, so the MIME type
matches production.

## Verified

At 390px and 820px: duration read from the file (6:06 / 366.63 s), play, pause, stop,
scrub to 50% → 3:03, speed menu, volume popover, tooltip clamped inside the track at both
ends, 0 horizontal overflow, 0 page errors.

## Two bugs worth remembering

**`[hidden]` lost to `display:grid`.** The popovers were marked hidden and stayed on
screen, because `[hidden]`'s `display:none` is user-agent specificity and
`.rcap-setpop{display:grid}` beats it. The test asserted `el.hidden` and passed the whole
time. It now asserts painted visibility, and that assertion was run against the pre-fix
build and confirmed to fail before being accepted.

**`netlifysim.js` served `.mp3` as `application/octet-stream`.** Netlify sends
`audio/mpeg`, so the harness was testing a content type production never emits. The MIME
map now covers mp3/m4a/ogg/wav.

## Not deployed — one decision outstanding

The recording is **5.9 MB**. It must NOT go into `sw.js` `CORE`: that list is precached on
install, and adding it would make every user download six megabytes before the app is
usable offline. `preload="metadata"` already keeps it to a range request until play is
pressed. If narrated audio is coming for more than one condition, the caching story wants
deciding once — cache-on-play, or leave it network-only — rather than per file.
