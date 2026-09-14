# Universal Links — what is broken, and the one change that fixes it

Measured 2026-09-14. Guarded by `scripts/verify_universal_links.js`, wired into `preflight.sh`.

## The web side is correct. All of it.

`preflight.sh web` runs nine checks and they all pass against the live site:

| | |
|---|---|
| AASA served at `rounds-codex.netlify.app` | HTTP 200, `application/json`, **0 redirects** |
| the served file vs the repo | byte-identical |
| app ID | `744JSM2Z3H.com.roundscodex.app` — the shipped team and bundle |
| routes | `c g r s u x`, matching the `RC_ROOT` regex **and** `RC_OPEN_ROUTES` exactly |
| `RC_SHARE_ORIGIN` | `https://rounds-codex.netlify.app` — the same host that serves the AASA |
| `_headers` | sends JSON for the extension-less path |

Nothing on the website needs changing.

## What is broken

**The app's `applinks:` entitlement names `roundscodex.com`.** Confirmed through the Netlify API:
that domain is served by a **different site** — `roundscodexwebsite`, id `bf814a35-8afd-4f7c-8bde-4b23566409ea`
— from the one serving the app, `rounds-codex`, id `15778795-d2c2-4196-a2d5-fdaa5657a573`.

**The decisive point does not depend on what `roundscodex.com` serves.** `RC_SHARE_ORIGIN` is
`rounds-codex.netlify.app`, so every `/c/<id>` link the app has ever produced points at that host.
For iOS to open one in the app, the entitlement must name **that** host. Putting an AASA on
`roundscodex.com` would not rescue a single link the app has shared.

`roundscodex.com` cannot be fetched from a session — the agent proxy refuses CONNECT with a 403,
which says nothing about the host — so whether it serves an AASA today is unknown and does not
matter to this fix.

## The fix — one line, on the Mac

In `~/rounds-codex-ios`, open **App.entitlements** (Xcode: target App → Signing & Capabilities →
Associated Domains) and change the entry to:

```
applinks:rounds-codex.netlify.app
```

Then rebuild, archive and upload. That is the whole change.

Keep `applinks:roundscodex.com` **as a second entry** only if the plan is to move to the brand
domain later; it is inert until that domain serves this app's AASA, and a second entry costs
nothing.

### Verify it on the device, not in the build
Apple caches the AASA. After installing, long-press a `https://rounds-codex.netlify.app/c/dvt`
link in Messages or Notes: if it offers **Open in Rounds Codex**, it works. A tap that goes
straight to Safari means the association did not take — delete and reinstall the app, which
forces a fresh AASA fetch.

## Why this went unnoticed, and the thing to fix underneath

**The Capacitor project is in neither repository.** It exists only on the physician's Mac, so no
session can read `App.entitlements`, `capacitor.config.json` or `Info.plist` — which is why five
things have to agree and only four of them can be checked here. `verify_universal_links.js` says so
in its own output rather than implying a pass.

Putting `~/rounds-codex-ios` under version control is §4.0 of the Android handoff and it is the
prerequisite for a session ever verifying this end to end.
