# Module narration scripts

Audio narration of each condition module, read in Dr. Kreithen's cloned ElevenLabs voice.

## Why the text is rewritten rather than read as-is

Screen prose and spoken prose are different, and the gap is where a cloned voice fails audibly:

- **Markup.** `<b>` tags are authoring markup; some engines read them aloud.
- **Symbols.** The arrow appears 585 times across this content and is either skipped or read as
  "arrow". `EF <=40%` has to become "an ejection fraction of 40 percent or less". `K+` is
  "potassium", not "K plus".
- **Abbreviations, which split three ways** and the distinction matters:
  - *spell out as letters* — BNP, JVD, ECG. A listener parses these fine.
  - *expand on first use, then abbreviate* — HFrEF, ARNI, GDMT. Unintelligible spoken cold.
  - *never as letters* — PND, MRA, S3. "P-N-D" means nothing; "paroxysmal nocturnal dyspnea"
    does. "S3" must be "a third heart sound".

`scripts/narration_normalize.py` handles all of that mechanically and audits a drafted script:

    python3 scripts/narration_normalize.py --check narration-staging/chf.txt
    python3 scripts/narration_normalize.py --text "<raw module text>"

It is a **normaliser, not a writer** — turning a dense clinical bullet into something speakable is
an authoring judgement, so it reports oversized sentences and unexpanded tokens for a human to
close rather than guessing.

## Two lengths, pending a decision

| file | words | runtime | x181 modules |
|---|---:|---:|---:|
| `chf.txt` | 751 | ~5.0 min | ~15 hours |
| `chf-short.txt` | 284 | ~1.9 min | ~5.7 hours |

The full read covers what-it-is, diagnosis, all four GDMT pillars, the FAILURE and L-M-N-O-P
mnemonics, and the red flags. The short read keeps the framing, the single most useful exam
finding, the four pillars and the red flags, and drops the enumerated detail.

**Listen to both in the cloned voice before committing to 181 of either.** Whichever is chosen,
the thing to listen for is clinical vocabulary — drug names, "HFrEF", "NT-proBNP" — which is where
cloned voices stumble.

## Delivery constraint

This container cannot reach ElevenLabs (egress is allowlist-only) and the ElevenLabs connector
needs an OAuth Client ID that must be registered in the ElevenLabs dashboard. So generation happens
in the ElevenLabs web app: paste a script, pick the cloned voice, download the MP3.

Audio files land at `assets/audio/<condition-id>.mp3` in the app repo.

**They must NOT be added to `CORE` in `sw.js`.** That was my first instinct and it is wrong: `CORE`
is precached with `addAll()` at install, so listing the narration library would try to download
every file before the app opens — hundreds of megabytes on a first visit. The existing fetch handler
is already network-first with a cache write for assets, so each track is cached the first time it is
played and is available offline after that. Nothing in the service worker needs to change.

## App wiring

`scripts/add_audio_player.js <index.html> --ids chf,acs,...` adds the Listen button and player.
Re-run it with the full id list whenever a batch of narration ships; `RC_AUDIO` is generated, not
hand-edited.

It is **not applied to the live app yet**, on purpose — a Listen button with no audio behind it just
toasts "Narration unavailable". Wire it when the first real MP3 exists.

Verified behaviour (headless, zero pageerrors):

| check | result |
|---|---|
| button appears only for ids in `RC_AUDIO` | present on `chf`, absent on `asthma` |
| play / pause from the same button | label flips Listen ↔ Pause, `aria-pressed` tracks it |
| **navigating to another condition** | **playback stops** — no narration bleeding across pages |
| switching mode on the same condition | playback continues |
| missing or unplayable file | toasts "Narration unavailable" |

The bleed case is the one worth guarding: without it, Heart Failure keeps narrating while the user
reads Asthma. `paint()` is the single choke point every navigation funnels through, and it already
calls `closeViewer()` for the same reason, so the stop hook sits alongside that.
