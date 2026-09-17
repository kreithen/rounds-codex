# §4.0 on the Mac — put the Capacitor project under version control

**One job, about 20 minutes, and it unblocks every remaining Android task.** A session cannot add a
platform to a project it cannot read. Until `~/rounds-codex-ios` is in a repo, everything
Android-side is a guess about a project nobody but you can see.

**One command per line, in order.** Do not paste a block: `cap init`'s interactive prompt swallowed
one on 2026-08-17, and that is why this file is shaped the way it is. Everything below runs in
Terminal on the Mac.

---

## Step 0 — look before you commit

```sh
cd ~/rounds-codex-ios
```
```sh
ls -la
```
```sh
du -sh www node_modules ios 2>/dev/null
```

`www/` should be hundreds of megabytes — that is the built payload, and it is rebuilt from the web
repo every time, never committed. If `du` says `www` is small or missing, that is fine too; it just
means the last build was cleaned.

```sh
git status 2>/dev/null || echo "NOT A GIT REPO YET"
```

If it says **NOT A GIT REPO YET**, do Step 1. If it is already a repo, skip to Step 2.

---

## Step 1 — only if it is not a repo yet

```sh
git init
```
```sh
git branch -M main
```

---

## Step 2 — the ignore file

This is the step that matters most, and it goes in **before** the first `git add`. Paste the whole
block below in one go — it is a heredoc, not a sequence of commands, so it is the one exception to
the one-line rule.

```sh
cat > .gitignore <<'EOF'
# The built web payload. Hundreds of MB, rebuilt by scripts/build_native_payload.js, never committed.
www/
ios/App/App/public/
android/app/src/main/assets/public/

# Dependencies — restored by `npm ci` and `pod install`.
node_modules/
ios/App/Pods/

# Signing material. NEVER commit any of this.
*.keystore
*.jks
*.p12
*.mobileprovision
*.cer
keystore.properties
local.properties

# Build output.
build/
android/build/
android/app/build/
.gradle/
DerivedData/
*.xcuserstate
xcuserdata/

.DS_Store
EOF
```

**Why the signing block is not optional.** A keystore committed to a repo is a credential you cannot
un-publish: the fix is not `git rm`, it is generating a new key, and with Play App Signing an upload
key can at least be reset — but only by asking Google. The repo will be private, which is protection
and not a guarantee.

---

## Step 3 — check what is actually about to go in

```sh
git add -A
```
```sh
git status --short | wc -l
```

Expect a few hundred files, not tens of thousands. Tens of thousands means `node_modules/` is still
being tracked — go back to Step 2.

```sh
git diff --cached --stat | tail -1
```
```sh
git diff --cached --name-only | grep -iE "keystore|\.jks|\.p12|password|secret|\.env" || echo "CLEAN - no signing or secret files staged"
```

**Do not continue until that last line prints `CLEAN`.** If it lists anything, tell me what it
listed before you push.

---

## Step 4 — commit

```sh
git commit -m "The Capacitor project as it stands after iOS 1.0 (4)"
```

If git asks who you are, set it once and re-run the commit:

```sh
git config user.email "drjkreithen@sarasota-med.com"
```
```sh
git config user.name "Joshua Kreithen"
```

---

## Step 5 — create the private repo and push

**If you have the GitHub CLI** (`gh --version` prints a version):

```sh
gh repo create kreithen/rounds-codex-native --private --source=. --remote=origin --push
```

That one command creates it, wires the remote and pushes. Skip to Step 6.

**If you do not**, create it in the browser first:

1. Go to <https://github.com/new>
2. Owner **kreithen**, repository name **`rounds-codex-native`**
3. **Private** — this is not optional, see the note at the end
4. Do **not** tick "Add a README", "Add .gitignore" or "Choose a license". An initialised repo gives
   you a merge conflict on your first push.
5. Create repository

Then:

```sh
git remote add origin https://github.com/kreithen/rounds-codex-native.git
```
```sh
git push -u origin main
```

---

## Step 6 — tell me it is done

```sh
git remote -v
```
```sh
git log --oneline -1
```

Send me those two lines. I will `add_repo` it with push access — one approval prompt — read the real
`package.json` and `capacitor.config.json` instead of guessing at them, and commit the Android
platform files as source for you to build.

---

## Three things worth knowing

**It must be private, and it must be its own repo.** Not `rounds-codex-app`: Netlify publishes that
repo's root, so a `native/` folder there would ship to the website. Not `rounds-codex` either — that
one is public, and this project will eventually carry signing configuration.

**`www/` being ignored is the point, not a compromise.** The payload is a build artifact of the web
repo: `scripts/build_native_payload.js --platform android` regenerates it byte-for-byte. Committing
826 MB of it would make every clone unusable and would still go stale the next time the app ships.

**This does not change anything on the Mac.** No file is moved, nothing is rebuilt, the iOS project
keeps working exactly as it does now. It only adds a `.git` directory and a `.gitignore`.
