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

Audio files land at `assets/audio/<condition-id>.mp3` in the app repo and must be added to `CORE`
in `sw.js` or they will be missing offline.
