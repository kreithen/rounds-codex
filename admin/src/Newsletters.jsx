import { useEffect, useMemo, useState } from "react";
import { supabase } from "./supabase.js";
import { SUPABASE_URL } from "./config.js";

const FN_BASE = SUPABASE_URL.replace(/\/$/, "") + "/functions/v1";

// Call a Supabase Edge Function with the current admin's access token.
async function callFn(name, body) {
  const { data } = await supabase.auth.getSession();
  const token = data?.session?.access_token;
  const res = await fetch(`${FN_BASE}/${name}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ?? ""}`,
    },
    body: JSON.stringify(body || {}),
  });
  let payload = null;
  try { payload = await res.json(); } catch { /* noop */ }
  if (!res.ok) throw new Error(payload?.error || `Request failed (${res.status})`);
  return payload;
}

const BLANK = { id: null, subject: "", preheader: "", body_html: "", body_text: "", status: "draft" };

export default function Newsletters({ session }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [draft, setDraft] = useState(BLANK);
  const [brief, setBrief] = useState("");
  const [busy, setBusy] = useState("");        // "draft" | "save" | "approve" | "test" | "send"
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  async function loadList() {
    setLoading(true);
    const { data, error } = await supabase
      .from("campaigns")
      .select("*")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) { setErr(error.message); return; }
    setList(data || []);
  }
  useEffect(() => { loadList(); /* eslint-disable-next-line */ }, []);

  const dirty = draft.id !== null;

  function edit(field, v) { setDraft((d) => ({ ...d, [field]: v })); setMsg(""); setErr(""); }
  function newDraft() { setDraft(BLANK); setBrief(""); setMsg(""); setErr(""); }
  function openCampaign(c) {
    setDraft({
      id: c.id, subject: c.subject || "", preheader: c.preheader || "",
      body_html: c.body_html || "", body_text: c.body_text || "", status: c.status,
    });
    setBrief(c.ai_brief || "");
    setMsg(""); setErr("");
  }

  async function draftWithAI() {
    if (!brief.trim()) { setErr("Write a short brief first."); return; }
    setBusy("draft"); setErr(""); setMsg("");
    try {
      const { draft: d, model } = await callFn("draft", { brief: brief.trim() });
      setDraft((cur) => ({
        ...cur,
        subject: d.subject || cur.subject,
        preheader: d.preheader || cur.preheader,
        body_html: d.body_html || cur.body_html,
        body_text: d.body_text || cur.body_text,
      }));
      setMsg(`Drafted with ${model}. Review and edit before sending.`);
    } catch (e) { setErr(e.message); }
    setBusy("");
  }

  async function save() {
    setBusy("save"); setErr(""); setMsg("");
    const patch = {
      subject: draft.subject, preheader: draft.preheader,
      body_html: draft.body_html, body_text: draft.body_text,
      ai_brief: brief || null, updated_at: new Date().toISOString(),
    };
    try {
      if (draft.id) {
        const { error } = await supabase.from("campaigns").update(patch).eq("id", draft.id);
        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from("campaigns")
          .insert({ ...patch, status: "draft", created_by: session.user.id })
          .select("*")
          .single();
        if (error) throw error;
        setDraft((d) => ({ ...d, id: data.id, status: data.status }));
      }
      setMsg("Saved.");
      loadList();
    } catch (e) { setErr(e.message); }
    setBusy("");
  }

  async function setStatus(status) {
    if (!draft.id) { setErr("Save the draft first."); return; }
    setBusy(status === "approved" ? "approve" : "status"); setErr(""); setMsg("");
    const patch = { status, updated_at: new Date().toISOString() };
    if (status === "approved") { patch.approved_by = session.user.id; patch.approved_at = new Date().toISOString(); }
    try {
      const { error } = await supabase.from("campaigns").update(patch).eq("id", draft.id);
      if (error) throw error;
      setDraft((d) => ({ ...d, status }));
      setMsg(status === "approved" ? "Approved — ready to send." : `Marked ${status}.`);
      loadList();
    } catch (e) { setErr(e.message); }
    setBusy("");
  }

  async function sendTest() {
    if (!draft.id) { setErr("Save the draft first."); return; }
    const to = window.prompt("Send a test copy to which address?", session.user.email);
    if (!to) return;
    setBusy("test"); setErr(""); setMsg("");
    try {
      await callFn("send-campaign", { campaign_id: draft.id, test_to: to.trim() });
      setMsg(`Test sent to ${to.trim()}.`);
    } catch (e) { setErr(e.message); }
    setBusy("");
  }

  async function sendReal() {
    if (!draft.id) return;
    if (draft.status !== "approved") { setErr("Approve the campaign before sending."); return; }
    if (!window.confirm("Send this newsletter to the entire subscribed list? This cannot be undone.")) return;
    setBusy("send"); setErr(""); setMsg("");
    try {
      const r = await callFn("send-campaign", { campaign_id: draft.id });
      setMsg(`Sent to ${r.sent} recipient(s)${r.failed ? `, ${r.failed} failed` : ""}.`);
      setDraft((d) => ({ ...d, status: "sent" }));
      loadList();
    } catch (e) { setErr(e.message); }
    setBusy("");
  }

  const previewHtml = useMemo(() => renderPreview(draft), [draft]);
  const locked = draft.status === "sent" || draft.status === "sending";

  return (
    <div className="nl">
      <aside className="nl-list">
        <button className="btn sm" onClick={newDraft}>+ New newsletter</button>
        {loading ? <p className="muted fine">Loading…</p> : list.length === 0 ? (
          <p className="muted fine">No campaigns yet.</p>
        ) : list.map((c) => (
          <button
            key={c.id}
            className={"nl-item" + (c.id === draft.id ? " active" : "")}
            onClick={() => openCampaign(c)}
          >
            <span className="nl-subj">{c.subject || "(untitled)"}</span>
            <span className={"pill " + c.status}>{c.status}</span>
          </button>
        ))}
      </aside>

      <div className="nl-editor">
        <div className="nl-brief">
          <label>Brief for AI <span className="muted fine">— what should this newsletter say?</span></label>
          <textarea
            rows={3}
            placeholder="e.g. Announce that the image galleries are done and invite the list to reply with the topics they most want covered at launch."
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
            disabled={locked}
          />
          <button className="btn sm" onClick={draftWithAI} disabled={!!busy || locked}>
            {busy === "draft" ? "Drafting…" : "✨ Draft with AI"}
          </button>
        </div>

        <label>Subject</label>
        <input value={draft.subject} onChange={(e) => edit("subject", e.target.value)} disabled={locked} />

        <label>Preheader <span className="muted fine">— preview text after the subject</span></label>
        <input value={draft.preheader} onChange={(e) => edit("preheader", e.target.value)} disabled={locked} />

        <label>Body (HTML)</label>
        <textarea className="mono" rows={10} value={draft.body_html} onChange={(e) => edit("body_html", e.target.value)} disabled={locked} />

        <label>Body (plain text)</label>
        <textarea className="mono" rows={5} value={draft.body_text} onChange={(e) => edit("body_text", e.target.value)} disabled={locked} />

        <div className="nl-actions">
          <span className={"pill " + draft.status}>{draft.status}</span>
          <button className="btn sm" onClick={save} disabled={!!busy || locked}>{busy === "save" ? "Saving…" : "Save draft"}</button>
          <button className="btn sm ghost" onClick={sendTest} disabled={!!busy || !draft.id}>{busy === "test" ? "Sending…" : "Send test"}</button>
          {draft.status !== "approved" && draft.status !== "sent" && (
            <button className="btn sm" onClick={() => setStatus("approved")} disabled={!!busy || !draft.id}>{busy === "approve" ? "…" : "Approve"}</button>
          )}
          {draft.status === "approved" && (
            <>
              <button className="btn sm ghost" onClick={() => setStatus("draft")} disabled={!!busy}>Unapprove</button>
              <button className="btn sm send" onClick={sendReal} disabled={!!busy}>{busy === "send" ? "Sending…" : "Send to list"}</button>
            </>
          )}
        </div>
        {msg && <p className="note-ok">{msg}</p>}
        {err && <p className="err">{err}</p>}
      </div>

      <div className="nl-preview">
        <div className="tlabel">Preview</div>
        <iframe title="preview" className="nl-frame" srcDoc={previewHtml} />
      </div>
    </div>
  );
}

// A lightweight client-side approximation of the branded shell the
// send-campaign function produces (for editor preview only).
function renderPreview(d) {
  const body = d.body_html || "<p style='color:#6b7690'>Draft the body to preview it here.</p>";
  return `<!DOCTYPE html><html><body style="margin:0;background:#050813;font-family:-apple-system,Segoe UI,sans-serif;color:#e7eefb">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#050813"><tr><td align="center" style="padding:20px 12px">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:linear-gradient(160deg,#0f1e35,#070f1e);border:1px solid #6fa9ff33;border-radius:16px;overflow:hidden">
<tr><td style="padding:26px 30px 4px"><div style="font-size:19px;font-weight:800;color:#fff">Rounds&nbsp;Codex</div>
<div style="height:3px;width:48px;margin-top:10px;background:linear-gradient(90deg,#24d9ff,#46f2ad);border-radius:3px"></div></td></tr>
<tr><td style="padding:8px 30px 24px;font-size:15px;line-height:1.7;color:#c4cfe2">
<style>h2{color:#fff;font-size:18px;margin:20px 0 9px}p{margin:0 0 14px}a{color:#46f2ad}ul{padding-left:20px}li{margin:0 0 7px}strong{color:#dfe8f7}</style>
${body}</td></tr></table>
<p style="max-width:560px;margin:16px auto 0;font-size:11px;color:#5b6884;text-align:center">Rounds Codex, Inc. · [mailing address]<br><span style="color:#8296b5">Unsubscribe</span></p>
</td></tr></table></body></html>`;
}
