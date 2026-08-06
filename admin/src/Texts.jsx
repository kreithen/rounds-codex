import { useEffect, useMemo, useState } from "react";
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

function segInfo(text) {
  const unicode = /[^\x00-\x7f]/.test(text);
  const per = unicode ? 70 : 160;
  const segs = text.length ? Math.ceil(text.length / per) : 0;
  return { chars: text.length, per, segs, unicode };
}

export default function Texts({ session }) {
  const [body, setBody] = useState("");
  const [textable, setTextable] = useState(0);
  const [log, setLog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  async function load() {
    setLoading(true); setErr("");
    // Count textable signups: consented, not opted out, phone present.
    const { count } = await supabase
      .from("signups").select("id", { count: "exact", head: true })
      .eq("sms_consent", true).eq("sms_opted_out", false).not("phone", "is", null);
    setTextable(count || 0);
    const { data } = await supabase
      .from("sms_messages").select("*").order("created_at", { ascending: false }).limit(50);
    setLog(data || []);
    setLoading(false);
  }
  useEffect(() => { load(); /* eslint-disable-next-line */ }, []);

  const seg = useMemo(() => segInfo(body), [body]);

  async function sendBatch() {
    if (!body.trim()) { setErr("Write a message first."); return; }
    if (!textable) { setErr("No consented recipients yet."); return; }
    if (!window.confirm(`Send this text to ${textable} ${textable === 1 ? "person" : "people"}?`)) return;
    setBusy(true); setErr(""); setMsg("");
    try {
      const r = await callFn("send-sms", { scope: "consented", body });
      setMsg(`Sent ${r.sent} · ${r.failed ? r.failed + " failed" : "0 failed"}${r.errors?.length ? " — " + r.errors[0] : ""}`);
      setBody("");
      await load();
    } catch (e) {
      setErr(e.message.includes("not configured")
        ? "SMS isn't connected yet — add your provider number + key first."
        : e.message);
    }
    setBusy(false);
  }

  return (
    <div className="texts">
      <div className="tmpl-card">
        <div className="tmpl-head">
          <div>
            <div className="tmpl-title">Send a text to your launch list</div>
            <div className="muted fine">Goes to everyone who gave a phone number and agreed to texts.</div>
          </div>
          <div className="txt-count"><strong>{textable}</strong> textable</div>
        </div>
        <label className="tlabel">Message</label>
        <textarea rows={5} value={body} onChange={(e) => { setBody(e.target.value); setMsg(""); setErr(""); }}
          placeholder="e.g. Rounds Codex is LIVE 🎉 Your free-for-life access is ready: https://roundscodex.com" />
        <div className="txt-meta">
          <span>{seg.chars} chars · {seg.segs} segment{seg.segs === 1 ? "" : "s"}{seg.unicode ? " · unicode" : ""}</span>
          <button className="btn sm" onClick={sendBatch} disabled={busy || !body.trim()}>
            {busy ? "Sending…" : `Send to ${textable}`}
          </button>
        </div>
        {msg && <p className="note-ok">{msg}</p>}
        {err && <p className="err">{err}</p>}
        <p className="muted fine" style={{ margin: ".6rem 0 0" }}>
          Tip: keep it under 160 characters to send as one segment. Recipients can reply STOP to opt out.
        </p>
      </div>

      <div className="tlabel" style={{ margin: "1.6rem 0 .6rem" }}>Recent texts</div>
      <div className="tablewrap">
        <table>
          <thead><tr><th>When</th><th>To</th><th>Message</th><th>Status</th></tr></thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="4" className="empty">Loading…</td></tr>
            ) : log.length === 0 ? (
              <tr><td colSpan="4" className="empty">No texts sent yet.</td></tr>
            ) : log.map((m) => (
              <tr key={m.id}>
                <td>{fmtDate(m.created_at)}</td>
                <td className="mono">{m.name ? m.name + " · " : ""}{m.phone}</td>
                <td className="txt-body">{m.body}</td>
                <td><span className={"pill " + (m.status === "sent" ? "sent" : m.status === "failed" ? "canceled" : "draft")}>{m.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function fmtDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (isNaN(d)) return "—";
  return d.toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}
