# deploy/

Files destined for the **live** repo (`rounds-codex-app`), staged here because this
workspace cannot push to it. See `../native-app-plan.md` for what they are for.

| File | Goes to | Purpose |
|---|---|---|
| `_redirects` | repo root, no extension | `/c/*  /index.html  200` — makes per-condition share URLs resolve. **Required** for `/c/<id>` links. |
| `apple-app-site-association.template.json` | `/.well-known/apple-app-site-association` | Universal Links. Fill in Team ID + bundle id, strip the `_comment` keys, drop the `.template.json` suffix. Not needed until the iOS app exists. |
| `_headers.snippet` | append to root `_headers` | Forces `application/json` on the association files. |
