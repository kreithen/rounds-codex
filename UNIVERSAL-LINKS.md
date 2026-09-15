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

## Corrected twice. Here is the settled picture.

I first wrote that the fault is the entitlement naming `roundscodex.com`, taken from the handoff
rather than measured. Then I found `native/ios-project/App.entitlements` claiming all three hosts and
softened it. Then `app-store-checklist.md` §4 settled it — the configuration recorded when build 1
was archived reads **"Associated Domains `applinks:roundscodex.com`"**, one host, and the three-host
reference file is dated the same day with a README saying it was never compiled.

And on 2026-09-15 the last piece arrived: **`roundscodex.com` is not a stray site.** It is
`landing/` on this repo's `main` — the App Store download page, live since the commit "Go live:
promote App Store download homepage to roundscodex.com". So claiming it was a reasonable intention,
not a blunder. What is missing is that `landing/` serves no AASA, so the claim resolves to nothing.

**The domain split is now a decision, not an accident** (2026-09-15): roundscodex.com is marketing,
rounds-codex.netlify.app is the app, and the app is not moving. See CLAUDE.md.

That makes the fix unambiguous:

- **The entitlement must claim `rounds-codex.netlify.app`.** `RC_SHARE_ORIGIN` points there, so every
  link the app has ever produced points there. This is the change that makes the feature work.
- **Claiming `roundscodex.com` as well is optional and harmless**, and needs an AASA on `landing/` to
  do anything. One is prepared at `native/landing-aasa/` with the netlify.toml rule it needs, and
  deliberately not pushed — `main` is another conversation's tree.

Still not readable from a session: what build 4 actually shipped. The entitlement is in
`~/rounds-codex-ios`, in neither repo. `native/PUT-XCODE-PROJECT-IN-GIT.md` fixes that permanently.

**Two defects found in the reference files, both corrected 2026-09-14** — these are the files someone
drops into Xcode:

- `capacitor.config.json` said `"contentInset": "always"`, the exact value `add_safe_area.js`
  documents as putting headers under the Dynamic Island on every cold load.
- `App.entitlements` claimed both hosts serve the same Netlify site. They are two different projects.

## The fix — one line, on the Mac
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
