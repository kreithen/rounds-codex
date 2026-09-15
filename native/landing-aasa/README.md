# An AASA for `landing/` — prepared, deliberately NOT pushed

Written 2026-09-15. **These files belong on `main`, in the `landing/` site that deploys
roundscodex.com. That tree is owned by the `claude/rounds-codex-continued-qoh9b1` conversation and
is actively being worked in, so nothing here has been pushed to it.** Hand it over rather than
having two sessions edit one area.

## What this is for

The app's `applinks:` entitlement claims `roundscodex.com` (recorded in `app-store-checklist.md` §4
as the configuration set when build 1 was archived). That domain now serves the App Store download
page from `landing/`, and `landing/` has no `/.well-known/apple-app-site-association`, so the claim
resolves to nothing.

`deploy/apple-app-site-association.template.json` on `main` is the placeholder for this. It still
says `TEAMID.com.example.roundscodex` and covers only `/c/*`. The file here is the real one.

## What it does and does not buy

**Does:** a `https://roundscodex.com/c/dvt` link opens the app instead of Safari, for anyone who has
it installed.

**Does not:** rescue any link the app itself has ever produced. `RC_SHARE_ORIGIN` is
`https://rounds-codex.netlify.app`, so every share button in the app emits a netlify.app URL, and
those need `applinks:rounds-codex.netlify.app` in the entitlement — a separate, and more important,
change on the Mac. See `UNIVERSAL-LINKS.md`.

So this is worth doing and is not the main fix. Doing only this would leave Universal Links looking
broken to every real user, because the links in circulation all point at the other host.

## Two files

**1. `landing/.well-known/apple-app-site-association`** — the file in this directory, copied verbatim.
No extension. The six routes match the app's own `RC_ROOT` and `RC_OPEN_ROUTES` regexes exactly, and
`scripts/verify_universal_links.js` asserts that correspondence.

**2. A content-type rule in `main`'s `netlify.toml`.** Apple fetches the file over HTTPS and requires
`application/json`. It has no extension, so Netlify will guess wrong and iOS will fail **silently** —
the link just opens in Safari and nothing is logged anywhere:

```toml
[[headers]]
  for = "/.well-known/apple-app-site-association"
  [headers.values]
    Content-Type = "application/json"
```

The app repo solves the same problem in `_headers`; `landing/` uses `netlify.toml`, so it needs its
own rule rather than a copied file.

## Check it after deploying

```
curl -sS -D- -o /dev/null https://roundscodex.com/.well-known/apple-app-site-association
```

Wanted: `HTTP/2 200`, `content-type: application/json`, **no redirect**. A 301 to `www.` fails the
whole feature — Apple does not follow redirects for this file.

From a session that check may be impossible: the agent proxy 403s `roundscodex.com` at CONNECT,
which says nothing about the host. Run it from a normal browser or terminal.

## Also worth telling that conversation

`landing/`'s CSP in `netlify.toml` is strict (`default-src 'self'`, `object-src 'none'`,
`frame-ancestors 'none'`). This file is static JSON fetched by Apple's CDN, not by a page, so no CSP
change is needed. Mentioned because it looks like it might.
