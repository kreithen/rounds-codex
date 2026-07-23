// ============================================================================
// nclex-store.js — persistence layer for the Rounds Codex NCLEX module.
//
// Designed so the module works identically in a browser today and inside a native
// app shell later. The engine NEVER touches storage directly; it calls NCLEX_STORE,
// which delegates to a swappable ADAPTER.
//
//   Browser/dev      -> MemoryAdapter (default) or LocalStorageAdapter
//   Capacitor/Cordova-> LocalStorageAdapter works as-is inside the WebView container
//   React Native     -> BridgeAdapter (postMessage to native AsyncStorage/SQLite)
//   Native rewrite   -> implement the 5 adapter methods against SQLite
//
// Everything persisted is plain JSON (no functions, no DOM nodes), so it survives
// serialization across any of those boundaries.
//
// STORED SHAPES (schema v1)
//   nclex:meta            -> { schema, createdAt, updatedAt }
//   nclex:inprogress      -> InProgressAttempt | null   (only ever one)
//   nclex:attempts        -> [AttemptSummary, ...]      (newest first, capped)
//   nclex:attempt:<id>    -> AttemptDetail              (full per-item record)
//   nclex:mastery         -> { <itemId>: ItemMastery }  (drives spaced review later)
// ============================================================================
(function(){
  "use strict";

  var SCHEMA = 1;
  var K = {
    meta:       "nclex:meta",
    inProgress: "nclex:inprogress",
    attempts:   "nclex:attempts",
    attempt:    function(id){ return "nclex:attempt:" + id; },
    mastery:    "nclex:mastery"
  };
  var MAX_ATTEMPTS = 50;   // keep summaries bounded; details pruned alongside

  // ---- adapters ------------------------------------------------------------
  // Adapter contract (all synchronous for simplicity; async wrapper below):
  //   get(key) -> value | null      set(key, value)      remove(key)
  //   keys()   -> [key]             clear()
  function MemoryAdapter(){
    var m = {};
    return {
      name: "memory",
      get: function(k){ return k in m ? m[k] : null; },
      set: function(k,v){ m[k] = v; },
      remove: function(k){ delete m[k]; },
      keys: function(){ return Object.keys(m); },
      clear: function(){ m = {}; }
    };
  }

  function LocalStorageAdapter(ns){
    ns = ns || "";
    function full(k){ return ns + k; }
    return {
      name: "localStorage",
      get: function(k){
        try{ var raw = window.localStorage.getItem(full(k));
             return raw == null ? null : JSON.parse(raw); }
        catch(e){ return null; }
      },
      set: function(k,v){
        try{ window.localStorage.setItem(full(k), JSON.stringify(v)); }
        catch(e){ /* quota or private mode: fail soft, never break the test */ }
      },
      remove: function(k){ try{ window.localStorage.removeItem(full(k)); }catch(e){} },
      keys: function(){
        var out=[]; try{
          for(var i=0;i<window.localStorage.length;i++){
            var key=window.localStorage.key(i);
            if(!ns || key.indexOf(ns)===0) out.push(ns? key.slice(ns.length): key);
          }
        }catch(e){}
        return out;
      },
      clear: function(){ var self=this; self.keys().forEach(function(k){ self.remove(k); }); }
    };
  }

  // For a native shell that owns storage. The host injects a handler object with the
  // same five methods (it may back them with SQLite, AsyncStorage, Room, CoreData...).
  function BridgeAdapter(handler){
    if(!handler) throw new Error("BridgeAdapter requires a host handler");
    return {
      name: "bridge",
      get: function(k){ return handler.get(k); },
      set: function(k,v){ handler.set(k,v); },
      remove: function(k){ handler.remove(k); },
      keys: function(){ return handler.keys ? handler.keys() : []; },
      clear: function(){ handler.clear ? handler.clear() : null; }
    };
  }

  var adapter = MemoryAdapter();

  var STORE = {
    SCHEMA: SCHEMA,
    KEYS: K,
    MemoryAdapter: MemoryAdapter,
    LocalStorageAdapter: LocalStorageAdapter,
    BridgeAdapter: BridgeAdapter,

    /** Swap the backing store. Call once at boot, before any read/write. */
    use: function(a){
      adapter = a || MemoryAdapter();
      STORE.init();
      return adapter.name;
    },
    adapterName: function(){ return adapter.name; },

    init: function(){
      var meta = adapter.get(K.meta);
      if(!meta){
        adapter.set(K.meta, { schema: SCHEMA, createdAt: Date.now(), updatedAt: Date.now() });
      } else if(meta.schema !== SCHEMA){
        STORE.migrate(meta.schema, SCHEMA);
      }
    },

    /**
     * Forward-only migrations. Each step transforms stored data in place.
     * Kept explicit so a future v2 (e.g. adding per-item timings) is a small,
     * reviewable function rather than a guess at runtime.
     */
    migrate: function(from, to){
      // v0/unknown -> v1: nothing to transform yet; stamp the schema.
      var meta = adapter.get(K.meta) || {};
      meta.schema = to; meta.migratedFrom = from; meta.updatedAt = Date.now();
      adapter.set(K.meta, meta);
    },

    touch: function(){
      var meta = adapter.get(K.meta) || { schema: SCHEMA, createdAt: Date.now() };
      meta.updatedAt = Date.now();
      adapter.set(K.meta, meta);
    }
  };

  window.NCLEX_STORE = STORE;
  window.NCLEX_STORE._adapter = function(){ return adapter; };
})();

// ============================================================================
// PART 2 — attempt records (in-progress, history, mastery)
//
// Two-tier design on purpose:
//   AttemptSummary  small, always loaded, powers the history list + trend charts
//   AttemptDetail   per-item responses, loaded only when reviewing one attempt
// This keeps the hot path cheap on a phone while still allowing full review.
// ============================================================================
(function(){
  "use strict";
  var STORE = window.NCLEX_STORE, K = STORE.KEYS;
  function A(){ return STORE._adapter(); }

  function uid(){
    return "att_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2,8);
  }

  // ---- in-progress attempt (resume) ---------------------------------------
  // Serialized as item IDs + responses so it round-trips through JSON and can be
  // rehydrated against the bank on any device/build.
  STORE.saveInProgress = function(session){
    if(!session || !session.items) return null;
    var rec = {
      schema: STORE.SCHEMA,
      id: session.attemptId || uid(),
      mode: session.mode,
      label: session.label || "",
      savedAt: Date.now(),
      startedAt: session.startTs || Date.now(),
      timed: !!session.timed,
      remaining: session.remaining == null ? null : session.remaining,
      pos: session.pos || 0,
      itemIds: session.items.map(function(it){ return it.id; }),
      responses: session.responses || []
    };
    A().set(K.inProgress, rec);
    STORE.touch();
    return rec.id;
  };

  STORE.loadInProgress = function(){ return A().get(K.inProgress); };
  STORE.clearInProgress = function(){ A().remove(K.inProgress); STORE.touch(); };
  STORE.hasInProgress = function(){ return !!A().get(K.inProgress); };

  /** Rehydrate a saved attempt into a live session using the current bank. */
  STORE.rehydrate = function(rec, bank){
    if(!rec) return null;
    var byId = {}; bank.forEach(function(it){ byId[it.id] = it; });
    var items = [], responses = [];
    rec.itemIds.forEach(function(id, i){
      var it = byId[id];
      if(!it) return;                       // item retired from the bank: skip it
      items.push(it);
      responses.push(rec.responses[i] || null);
    });
    return {
      attemptId: rec.id, mode: rec.mode, label: rec.label,
      items: items, responses: responses,
      locked: items.map(function(){ return false; }),
      pos: Math.min(rec.pos || 0, Math.max(0, items.length-1)),
      timed: rec.timed, remaining: rec.remaining,
      startTs: rec.startedAt, submitted: false,
      resumed: true
    };
  };

  // ---- completed attempts (history + trends) -------------------------------
  /**
   * Record a finished (or abandoned-with-report) attempt.
   * `model` is the report model from NCLEX_REPORT.build — we store the computed
   * rollups so history/trends never need to re-score, plus a detail record for review.
   */
  STORE.recordAttempt = function(session, model){
    if(!model) return null;
    var id = session.attemptId || uid();

    var summary = {
      schema: STORE.SCHEMA,
      id: id,
      mode: model.meta.mode,
      label: model.meta.label,
      finishedAt: Date.now(),
      startedAt: session.startTs || null,
      elapsedSec: model.meta.elapsedSec,
      partial: !!model.meta.partial,
      attempted: model.meta.attempted,
      total: model.meta.total,
      pct: model.overall.pct,
      credit: model.overall.credit,
      max: model.overall.max,
      itemsCorrect: model.overall.itemsCorrect,
      // compact rollups keyed by area -> pct, so trend math is trivial later
      byCat:  rollup(model.categories),
      bySubj: rollup(model.subjects),
      byType: rollup(model.types)
    };

    var detail = {
      schema: STORE.SCHEMA,
      id: id,
      itemIds: session.items.map(function(it){ return it.id; }),
      responses: session.responses,
      missIdx: model.misses
    };

    var list = A().get(K.attempts) || [];
    list.unshift(summary);
    // prune old attempts and their details together so storage stays bounded
    while(list.length > 50){
      var dropped = list.pop();
      A().remove(K.attempt(dropped.id));
    }
    A().set(K.attempts, list);
    A().set(K.attempt(id), detail);
    STORE.updateMastery(session, model);
    STORE.clearInProgress();
    STORE.touch();
    return id;
  };

  function rollup(rows){
    var o = {};
    (rows||[]).forEach(function(r){ o[r.key] = { pct:r.pct, n:r.n, correct:r.correct }; });
    return o;
  }

  STORE.listAttempts = function(){ return A().get(K.attempts) || []; };
  STORE.getAttempt = function(id){ return A().get(K.attempt(id)); };
  STORE.deleteAttempt = function(id){
    var list = (A().get(K.attempts) || []).filter(function(s){ return s.id !== id; });
    A().set(K.attempts, list);
    A().remove(K.attempt(id));
    STORE.touch();
  };

  // ---- per-item mastery (enables spaced review / "items you keep missing") --
  STORE.updateMastery = function(session, model){
    var m = A().get(K.mastery) || {};
    var missSet = {}; (model.misses||[]).forEach(function(i){ missSet[i] = 1; });
    session.items.forEach(function(it, i){
      var rec = m[it.id] || { seen:0, correct:0, missed:0, lastSeen:null, streak:0 };
      // only count items actually scored on this attempt
      var answered = window.NCLEX_REPORT && window.NCLEX_REPORT.isAnswered(it, session.responses[i]);
      if(model.meta.partial && !answered) return;
      rec.seen++;
      if(missSet[i]){ rec.missed++; rec.streak = 0; }
      else { rec.correct++; rec.streak++; }
      rec.lastSeen = Date.now();
      m[it.id] = rec;
    });
    A().set(K.mastery, m);
  };
  STORE.getMastery = function(){ return A().get(K.mastery) || {}; };
  /** Item ids missed more often than not — the natural "review these" queue. */
  STORE.weakItems = function(minSeen){
    minSeen = minSeen || 1;
    var m = STORE.getMastery(), out = [];
    Object.keys(m).forEach(function(id){
      var r = m[id];
      if(r.seen >= minSeen && r.missed > r.correct) out.push({ id:id, missed:r.missed, seen:r.seen });
    });
    return out.sort(function(a,b){ return (b.missed/b.seen) - (a.missed/a.seen); });
  };

  // ---- trends --------------------------------------------------------------
  /**
   * Trend series for charting progress over time. Returns oldest-first so it plots
   * left-to-right naturally.
   * @param {String} area  optional "cat:pharm" / "subj:cardiac" / "type:sata";
   *                       omit for the overall score.
   */
  STORE.trend = function(area){
    var list = STORE.listAttempts().slice().reverse();   // oldest first
    return list.map(function(s){
      var pct = s.pct;
      if(area){
        var parts = area.split(":"), kind = parts[0], key = parts[1];
        var src = kind === "cat" ? s.byCat : kind === "subj" ? s.bySubj : s.byType;
        var row = src && src[key];
        pct = row ? row.pct : null;                       // null = not covered that attempt
      }
      return { id:s.id, at:s.finishedAt, pct:pct, partial:s.partial, attempted:s.attempted };
    });
  };

  /** Simple improvement read: change from first to most recent scored attempt. */
  STORE.delta = function(area){
    var t = STORE.trend(area).filter(function(p){ return p.pct != null; });
    if(t.length < 2) return null;
    return { from:t[0].pct, to:t[t.length-1].pct, change:t[t.length-1].pct - t[0].pct, points:t.length };
  };

  /** Areas that are trending down across the last N attempts — study nudges. */
  STORE.slipping = function(lastN){
    lastN = lastN || 3;
    var list = STORE.listAttempts().slice(0, lastN);
    if(list.length < 2) return [];
    var newest = list[0], oldest = list[list.length-1], out = [];
    ["byCat","bySubj"].forEach(function(bucket){
      var kind = bucket === "byCat" ? "cat" : "subj";
      Object.keys(newest[bucket] || {}).forEach(function(key){
        var a = oldest[bucket] && oldest[bucket][key], b = newest[bucket][key];
        if(!a || !b) return;
        if(b.pct + 5 < a.pct) out.push({ area:kind+":"+key, from:a.pct, to:b.pct, drop:a.pct-b.pct });
      });
    });
    return out.sort(function(x,y){ return y.drop - x.drop; });
  };

  /** Everything the app needs for a progress dashboard, in one call. */
  STORE.dashboard = function(){
    var list = STORE.listAttempts();
    var scored = list.filter(function(s){ return !s.partial; });
    var best = scored.reduce(function(m,s){ return (!m || s.pct > m.pct) ? s : m; }, null);
    return {
      attempts: list.length,
      completed: scored.length,
      lastAttempt: list[0] || null,
      best: best,
      average: scored.length ? Math.round(scored.reduce(function(a,s){return a+s.pct;},0)/scored.length) : null,
      trend: STORE.trend(),
      delta: STORE.delta(),
      slipping: STORE.slipping(),
      weakItems: STORE.weakItems(2).slice(0, 20)
    };
  };

  /** Wipe everything (a "reset my progress" action in app settings). */
  STORE.resetAll = function(){
    var a = window.NCLEX_STORE._adapter();
    (a.keys() || []).forEach(function(k){ if(k.indexOf("nclex:") === 0) a.remove(k); });
    STORE.init();
  };
})();
