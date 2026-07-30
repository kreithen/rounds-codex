import { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "./supabase.js";
import { SUPABASE_URL } from "./config.js";

const FN_BASE = SUPABASE_URL.replace(/\/$/, "") + "/functions/v1";

async function callFn(name, body) {
  const { data } = await supabase.auth.getSession();
  const token = data?.session?.access_token;
  const res = await fetch(`${FN_BASE}/${name}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token ?? ""}` },
    body: JSON.stringify(body || {}),
  });
  let payload = null;
  try { payload = await res.json(); } catch { /* noop */ }
  if (!res.ok) throw new Error(payload?.error || `Request failed (${res.status})`);
  return payload;
}

// Group flat messages into per-person threads, newest activity first.
function buildThreads(rows) {
  const map = new Map();
  for (const m of rows) {
    const key = (m.party_email || "unknown").toLowerCase();
    if (!map.has(key)) map.set(key, { key, email: key, name: "", msgs: [] });
    const t = map.get(key);
    t.msgs.push(m);
    if (!t.name && m.party_name) t.name = m.party_name;
  }
  const threads = [...map.values()].map((t) => {
    t.msgs.sort((a, b) => new Date(a.sent_at) - new Date(b.sent_at));
    const last = t.msgs[t.msgs.length - 1];
    t.lastAt = last?.sent_at;
    t.subject = [...t.msgs].reverse().find((m) => m.subject)?.subject || "(no subject)";
    t.unanswered = last?.direction === "in";
    t.unread = t.msgs.some((m) => m.direction === "in" && !m.is_read);
    return t;
  });
  threads.sort((a, b) => new Date(b.lastAt) - new Date(a.lastAt));
  return threads;
}

export default function Inbox({ session }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeKey, setActiveKey] = useState(null);
  const [reply, setReply] = useState("");
  const [busy, setBusy] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [filter, setFilter] = useState("all"); // all | unanswered
  const endRef = useRef(null);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("sent_at", { ascending: false })
      .limit(1000);
    setLoading(false);
    if (error) { setErr(error.message); return; }
    setRows(data || []);
  }
  useEffect(() => { load(); /* eslint-disable-next-line */ }, []);

  const threads = useMemo(() => buildThreads(rows), [rows]);
  const shown = useMemo(
    () => (filter === "unanswered" ? threads.filter((t) => t.unanswered) : threads),
    [threads, filter]
  );
  const active = useMemo(() => threads.find((t) => t.key === activeKey) || null, [threads, activeKey]);

  useEffect(() => { endRef.current?.scrollIntoView({ block: "end" }); }, [active]);

  async function openThread(t) {
    setActiveKey(t.key); setReply(""); setMsg(""); setErr("");
    const unread = t.msgs.filter((m) => m.direction === "in" && !m.is_read).map((m) => m.id);
    if (unread.length) {
      await supabase.from("messages").update({ is_read: true }).in("id", unread);
      setRows((rs) => rs.map((r) => (unread.includes(r.id) ? { ...r, is_read: true } : r)));
    }
  }

  async function draftReply() {
    if (!active) return;
    setBusy("draft"); setErr(""); setMsg("");
    try {
      const { reply_text } = await callFn("inbox-draft", { party_email: active.email });
      setReply(reply_text || "");
      setMsg("Drafted — edit before sending.");
    } catch (e) { setErr(e.message); }
    setBusy("");
  }

  async function sendReply() {
    if (!active || !reply.trim()) return;
    setBusy("send"); setErr(""); setMsg("");
    try {
      await callFn("inbox-reply", {
        to: active.email,
        subject: active.subject,
        body_text: reply,
        mailbox: active.msgs[active.msgs.length - 1]?.to_email || undefined,
      });
      setReply("");
      setMsg("Reply sent.");
      await load();
    } catch (e) { setErr(e.message); }
    setBusy("");
  }

  async function syncNow() {
    setBusy("sync"); setErr(""); setMsg("");
    try {
      const r = await callFn("sync-inbox", {});
      setMsg(r?.total_new ? `Pulled ${r.total_new} new message(s).` : "No new mail.");
      await load();
    } catch (e) {
      setErr("Sync couldn't run from here (that's expected if it only runs on the schedule). " + e.message);
    }
    setBusy("");
  }

  return (
    <div className="ibx">
      <aside className="ibx-list">
        <div className="ibx-tools">
          <div className="seg">
            <button className={filter === "all" ? "on" : ""} onClick={() => setFilter("all")}>All</button>
            <button className={filter === "unanswered" ? "on" : ""} onClick={() => setFilter("unanswered")}>Needs reply</button>
          </div>
          <button className="btn sm ghost" onClick={load} disabled={!!busy}>Refresh</button>
        </div>
        {loading ? <p className="muted fine">Loading…</p> : shown.length === 0 ? (
          <p className="muted fine">{filter === "unanswered" ? "Nothing needs a reply. 🎉" : "No messages yet. New mail appears here after a sync."}</p>
        ) : shown.map((t) => (
          <button key={t.key} className={"ibx-item" + (t.key === activeKey ? " active" : "") + (t.unread ? " unread" : "")} onClick={() => openThread(t)}>
            <div className="ibx-row1">
              <span className="ibx-name">{t.name || t.email}</span>
              <span className="ibx-when">{fmtShort(t.lastAt)}</span>
            </div>
            <div className="ibx-row2">
              <span className="ibx-subj">{t.subject}</span>
              {t.unanswered && <span className="dot-need" title="Needs a reply" />}
            </div>
          </button>
        ))}
      </aside>

      <div className="ibx-thread">
        {!active ? (
          <div className="ibx-empty">
            <p className="muted">Select a conversation on the left.</p>
            <button className="btn sm" onClick={syncNow} disabled={!!busy}>{busy === "sync" ? "Syncing…" : "Sync now"}</button>
          </div>
        ) : (
          <>
            <div className="ibx-head">
              <div>
                <div className="ibx-who">{active.name || active.email}</div>
                <div className="muted fine" style={{ margin: 0 }}>{active.email}</div>
              </div>
              <button className="btn sm ghost" onClick={syncNow} disabled={!!busy}>{busy === "sync" ? "Syncing…" : "Sync now"}</button>
            </div>

            <div className="ibx-msgs">
              {active.msgs.map((m) => (
                <div key={m.id} className={"bubble " + (m.direction === "out" ? "out" : "in")}>
                  <div className="bhead">
                    <span>{m.direction === "out" ? "You" : (active.name || active.email)}</span>
                    <span className="muted">{fmtLong(m.sent_at)}</span>
                  </div>
                  {m.subject && <div className="bsubj">{m.subject}</div>}
                  <div className="btext">{m.body_text || m.snippet || "(no text)"}</div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="ibx-reply">
              <textarea
                rows={4}
                placeholder="Write a reply…"
                value={reply}
                onChange={(e) => { setReply(e.target.value); setMsg(""); setErr(""); }}
              />
              <div className="ibx-actions">
                <button className="btn sm ghost" onClick={draftReply} disabled={!!busy}>{busy === "draft" ? "Drafting…" : "✨ Draft reply with AI"}</button>
                <button className="btn sm" onClick={sendReply} disabled={!!busy || !reply.trim()}>{busy === "send" ? "Sending…" : "Send reply"}</button>
              </div>
              {msg && <p className="note-ok">{msg}</p>}
              {err && <p className="err">{err}</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function fmtShort(iso) {
  if (!iso) return "";
  const d = new Date(iso); if (isNaN(d)) return "";
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  return sameDay
    ? d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })
    : d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}
function fmtLong(iso) {
  if (!iso) return "";
  const d = new Date(iso); if (isNaN(d)) return "";
  return d.toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}
