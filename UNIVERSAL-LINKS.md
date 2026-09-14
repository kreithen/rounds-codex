# Universal Links — what is measured, what is not, and the change to check

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

## What I do NOT know, and said too confidently before

I first wrote here that the fault is the app's `applinks:` entitlement naming `roundscodex.com`.
**That was taken from `HANDOFF-app-code-edits.md`, not measured**, and there is evidence in this
repo against it: `native/ios-project/App.entitlements` — the reference copy — already claims all
three hosts, `rounds-codex.netlify.app` included, and its comment gives the same reasoning I
rederived independently.

So either the Mac's real `App.entitlements` matches that reference, in which case Universal Links
may already be configured correctly and something else is wrong, or it does not, in which case the
handoff is right. **A session cannot tell**: the file is in `~/rounds-codex-ios`, in neither repo,
and the reference copy has never been compiled.

What is measured, and holds either way:

- `roundscodex.com` is served by the Netlify project `roundscodexwebsite`
  (`bf814a35-8afd-4f7c-8bde-4b23566409ea`); the app is served by `rounds-codex`
  (`15778795-d2c2-4196-a2d5-fdaa5657a573`). **Two different sites.**
- `RC_SHARE_ORIGIN` is `rounds-codex.netlify.app`, so every `/c/<id>` link the app has ever produced
  points there and the entitlement must name that host.
- That host's AASA is correct and correctly served, verified against the live site.

**Two defects found in the reference files, both corrected 2026-09-14** — worth knowing because
these are the files someone drops into Xcode:

- `capacitor.config.json` said `"contentInset": "always"`. That is the exact value
  `scripts/add_safe_area.js` documents as causing headers to render under the Dynamic Island on
  every cold load, found on an iPhone 16 Pro Max and fixed with `"never"`. Dropping the old file in
  would have reintroduced a device bug that cost a debugging session.
- `App.entitlements` claimed both hosts serve the same Netlify site, so one AASA answers for both.
  Measured false, as above.

## The fix — one line, on the Mac
## The fix — one line, on the Mac

**First read what is actually there** — that is the step this document was missing. In
`~/rounds-codex-ios`, open **App.entitlements** (Xcode: target App → Signing & Capabilities →
Associated Domains). If it already lists `applinks:rounds-codex.netlify.app`, the entitlement is
not the fault and the next thing to check is whether the installed build is old enough to predate
it. If it does not, add it:

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
