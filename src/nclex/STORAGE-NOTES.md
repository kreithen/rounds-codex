# NCLEX Module — Persistence Design (app-ready)

Built so the module behaves identically in a browser today and inside a native app
shell later. **The engine never touches storage directly** — it calls `NCLEX_STORE`,
which delegates to a swappable adapter. Changing where data lives is one line at boot.

## Choosing a backing store

```js
// Browser / dev (default) — nothing persists across reloads
NCLEX_STORE.use(NCLEX_STORE.MemoryAdapter());

// Website or Capacitor/Cordova WebView — persists inside the app container
NCLEX_STORE.use(NCLEX_STORE.LocalStorageAdapter());

// Native shell (React Native, or any host that owns storage)
NCLEX_STORE.use(NCLEX_STORE.BridgeAdapter({
  get(key){ /* return parsed JSON or null */ },
  set(key, value){ /* persist; value is plain JSON */ },
  remove(key){}, keys(){ return []; }, clear(){}
}));
```

Everything written is **plain JSON** — no functions, no DOM nodes — so it round-trips
through a JS bridge, SQLite, AsyncStorage, Room, or CoreData without special handling.

## What's stored (schema v1)

| Key | Shape | Purpose |
|---|---|---|
| `nclex:meta` | `{schema, createdAt, updatedAt}` | version stamp; drives migrations |
| `nclex:inprogress` | InProgressAttempt \| null | resume where you left off (only ever one) |
| `nclex:attempts` | `[AttemptSummary]` newest-first, capped 50 | history list + trend charts |
| `nclex:attempt:<id>` | AttemptDetail | per-item responses for reviewing one attempt |
| `nclex:mastery` | `{itemId: {seen, correct, missed, streak, lastSeen}}` | per-item mastery / spaced review |

**Two-tier on purpose.** Summaries are small and always loaded (history + trends stay
cheap on a phone). Details are loaded only when reviewing a specific attempt.

**Attempts store item IDs, not item objects.** A saved attempt rehydrates against the
current bank via `NCLEX_STORE.rehydrate(rec, bank)`, which silently skips any item
retired from the bank — so a content update never corrupts a saved attempt.

## API surface

```
// resume
saveInProgress(session) -> id     loadInProgress()    clearInProgress()   hasInProgress()
rehydrate(rec, bank) -> session

// history
recordAttempt(session, reportModel) -> id
listAttempts() -> [summary]       getAttempt(id) -> detail     deleteAttempt(id)

// analytics
trend(area?) -> [{at, pct}]       // area: "cat:pharm" | "subj:cardiac" | "type:sata"
delta(area?) -> {from,to,change}  // first vs latest
slipping(lastN?) -> [{area,from,to,drop}]
dashboard() -> {attempts, completed, best, average, trend, delta, slipping, weakItems}

// mastery
getMastery()   weakItems(minSeen) -> [{id, missed, seen}]

// admin
resetAll()     use(adapter)     SCHEMA
```

## Why this shape avoids a migration later

The things an app dashboard will want are already captured at write time:
- **Per-area rollups** (`byCat`, `bySubj`, `byType`) are stored on each attempt summary,
  so trend charts never need to re-score old attempts.
- **Per-item mastery** accumulates from the first attempt, so a "items you keep missing"
  review queue works immediately once storage is real.
- **`schema` is stamped** on every record, and `migrate(from,to)` is an explicit
  forward-only hook — a future v2 (e.g. adding per-item timing) is a small reviewable
  function, not a runtime guess.

## Migration notes
`NCLEX_STORE.init()` runs on `use()` and stamps/checks the schema. If a stored
`meta.schema` differs from the current `SCHEMA`, `migrate()` runs. v1 is the baseline;
add a step per version bump and keep them forward-only.

## Current limitation (browser preview)
The default MemoryAdapter loses everything on page reload — this is intentional for the
web preview. Switch to `LocalStorageAdapter()` for real persistence on the website, or
`BridgeAdapter` in the app shell.
