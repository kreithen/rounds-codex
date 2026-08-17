# Drop-in files for the Xcode project

Written 2026-08-17 for runbook step 3. **None of this has been compiled** — there is no macOS, no
Xcode and no WebKit in a cloud session, so treat these as a starting point that needs your eye, not
as verified configuration.

| file | where it goes |
|---|---|
| `capacitor.config.json` | the Capacitor project root, replacing what `npx cap init` writes |
| `App.entitlements` | `ios/App/App/App.entitlements` — or let Xcode create it via the capability UI and check it matches |
| `Info.plist.additions.xml` | **merge** into `ios/App/App/Info.plist`; do not replace the file |

## The two settings that matter most

**`"iosScheme": "capacitor"`.** The app must be served over a real origin. `file://` does not work —
the content loader uses `fetch`, and off disk the app shows "Content didn't load" with no page
error. This is the single most likely cause of a blank app, and it is a one-word fix.

**`ITSAppUsesNonExemptEncryption = false`.** Answers export compliance once, in the binary, instead
of by hand at every upload. HTTPS only is the standard exemption.

## What is deliberately missing

**The Background Assets entitlement.** Add it through Xcode: target → Signing & Capabilities →
**+ Capability → Background Assets**. I did not hand-write the raw entitlement key because I could
not read it from Apple's documentation — those pages render client-side and the fetch returned only
the page title. Writing a plausible-looking key here and having you paste it into a project is the
exact failure this repo keeps recording; Xcode writes the correct one and knows what it needs.

While you are in that screen, settle the open question from the plan: **whether Apple-hosted asset
packs also need a separate downloader extension target.** Developer-forum threads describe an app
group shared between the app and such an extension; the managed path may not need one. It changes
the project layout, so decide before writing Swift.

## Associated Domains

`applinks:roundscodex.com` — no wildcard, one host. It must match the live file at
`https://roundscodex.com/.well-known/apple-app-site-association`, which carries
`744JSM2Z3H.com.roundscodex.app` as of v129.

If Universal Links open Safari instead of the app, the order to check is: the entitlement is present
in the *built* product (not just the project), the appID matches exactly, and Apple's CDN has picked
up the current file. iOS reports none of these — it just opens Safari.

## After changing anything here

```sh
npx cap sync ios
```

`cap sync` copies `www/` and re-applies configuration. Editing `capacitor.config.json` without
syncing changes nothing in the built app, which looks exactly like the setting not working.
