# Deploying roundscodex.com

The landing site is the static `landing/` folder in this repo. It deploys to **Netlify**;
the **roundscodex.com** domain (registered at GoDaddy) is pointed at Netlify by changing DNS.
GoDaddy only *registers* the name — it does not have to *host* the site.

Canonical URL: **https://roundscodex.com** (apex). `www.roundscodex.com` 301-redirects to it.

---

## 1. Create the Netlify site (once)

This is a **new, separate** Netlify site from the app (the app deploys from the private
`rounds-codex-app` repo; this landing page deploys from the public `rounds-codex` repo).

1. Netlify → **Add new site → Import an existing project → GitHub** → pick
   **`kreithen/rounds-codex`** (the public repo).
2. **Branch to deploy: `main`.**
3. Netlify reads the repo-root **`netlify.toml`**, which sets `publish = "landing"` and no
   build command. Leave every build field at its default and deploy.
4. It goes live at a temporary `random-name.netlify.app` URL. Confirm the page renders there
   before touching DNS.

> Optional: rename the Netlify subdomain (Site settings → Domain management) to something like
> `roundscodex.netlify.app` so the fallback URL is tidy.

## 2. Add the custom domain in Netlify

1. Site → **Domain management → Add a domain** → enter `roundscodex.com`.
2. Add `www.roundscodex.com` too when prompted.
3. Set **`roundscodex.com` as the primary domain**. Netlify then auto-301s `www` → apex.
4. Netlify provisions a free Let's Encrypt certificate automatically once DNS resolves
   (step 3). Leave **Force HTTPS** on.

## 3. Point GoDaddy DNS at Netlify

Two ways. **Option A (Netlify DNS)** is the most reliable for apex + auto-SSL.

### Option A — delegate DNS to Netlify (recommended)
1. In Netlify → Domain management, choose **Set up Netlify DNS** for `roundscodex.com`.
   It shows 4 nameservers like `dns1.p0X.nsone.net … dns4.p0X.nsone.net`.
2. In **GoDaddy → Domain → DNS → Nameservers → Change → Enter my own nameservers**, replace
   GoDaddy's with the 4 Netlify ones. Save.
3. Propagation is usually minutes, up to 24–48 h. Netlify handles the apex A record, `www`,
   and the certificate for you.

### Option B — keep DNS at GoDaddy (add records manually)
In **GoDaddy → Domain → DNS**, set:

| Type  | Name | Value                         | TTL  |
|-------|------|-------------------------------|------|
| A     | `@`  | `75.2.60.5`                   | 600  |
| CNAME | `www`| `<your-site>.netlify.app`     | 600  |

- `75.2.60.5` is Netlify's apex load balancer. (If Netlify shows a different apex IP in your
  dashboard, use that one.)
- Delete any pre-existing GoDaddy "parked" A record for `@` and the default `www` CNAME first,
  or they'll conflict.
- GoDaddy has no ANAME/ALIAS support, which is why the apex uses an A record.

## 4. Verify after DNS resolves
- `https://roundscodex.com` loads with a padlock (valid cert).
- `https://www.roundscodex.com` redirects to the apex.
- `http://…` redirects to `https://…`.
- `https://roundscodex.com/robots.txt` and `/sitemap.xml` resolve.
- Paste the URL into the tools in `landing/SEO.md` (rich-results test, social-preview
  debuggers) and confirm the card + structured data.

## 5. Tell Google it exists
1. Add `roundscodex.com` as a property in **Google Search Console** (Domain property → verify
   via a GoDaddy DNS TXT record, or URL-prefix via Netlify).
2. Submit `https://roundscodex.com/sitemap.xml`.
3. Optionally add it to **Bing Webmaster Tools** the same way.

---

## Updating the site later
Edit files in `landing/`, commit, push → Netlify auto-deploys in ~1 minute. If you change the
hero image or headline, regenerate the share card (`assets/og-cover.jpg`) so link previews stay
in sync — see `landing/SEO.md`.
