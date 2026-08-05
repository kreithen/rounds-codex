import { useEffect, useMemo, useState } from "react";
import { supabase } from "./supabase.js";

// The two automated emails, with the placeholders each one supports.
const META = {
  welcome: {
    title: "Welcome email",
    blurb: "Sent automatically to everyone who joins the launch list.",
    placeholders: [["{{role}}", "the person's role, e.g. “nursing student”"]],
    hasButtonUrl: true,
  },
  invite: {
    title: "Invite email",
    blurb: "Sent when you invite a user from the Users tab (from teacher@).",
    placeholders: [["{{school}}", "a sentence about their school (filled in automatically)"]],
    hasButtonUrl: false, // the button always uses the generated set-password link
  },
};
const ORDER = ["welcome", "invite"];

const FIELDS = ["subject", "heading", "body", "button_label", "button_url", "note"];

export default function Emails({ session }) {
  const [rows, setRows] = useState({});      // key -> template
  const [draft, setDraft] = useState({});    // key -> edited fields
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState("");      // key being saved
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  async function load() {
    setLoading(true); setErr("");
    const { data, error } = await supabase
      .from("email_templates")
      .select("key,subject,heading,body,button_label,button_url,note,updated_at");
    setLoading(false);
    if (error) { setErr(error.message); return; }
    const map = {};
    (data || []).forEach((t) => { map[t.key] = t; });
    setRows(map);
    setDraft(JSON.parse(JSON.stringify(map)));
  }
  useEffect(() => { load(); /* eslint-disable-next-line */ }, []);

  function setField(key, field, value) {
    setMsg(""); setErr("");
    setDraft((d) => ({ ...d, [key]: { ...d[key], [field]: value } }));
  }

  const dirty = useMemo(() => {
    const out = {};
    for (const key of ORDER) {
      const a = rows[key], b = draft[key];
      out[key] = !!a && !!b && FIELDS.some((f) => (a[f] ?? "") !== (b[f] ?? ""));
    }
    return out;
  }, [rows, draft]);

  async function save(key) {
    setBusy(key); setErr(""); setMsg("");
    const d = draft[key] || {};
    const patch = {
      subject: (d.subject ?? "").trim(),
      heading: (d.heading ?? "").trim(),
      body: d.body ?? "",
      button_label: (d.button_label ?? "").trim() || null,
      button_url: META[key].hasButtonUrl ? ((d.button_url ?? "").trim() || null) : (rows[key]?.button_url ?? null),
      note: (d.note ?? "").trim() || null,
      updated_by: session?.user?.id ?? null,
      updated_at: new Date().toISOString(),
    };
    if (!patch.subject || !patch.heading || !patch.body.trim()) {
      setErr("Subject, heading, and body can't be empty."); setBusy(""); return;
    }
    const { error } = await supabase.from("email_templates").update(patch).eq("key", key);
    setBusy("");
    if (error) { setErr(error.message); return; }
    setMsg(`${META[key].title} saved.`);
    await load();
  }

  function reset(key) {
    setMsg(""); setErr("");
    setDraft((d) => ({ ...d, [key]: JSON.parse(JSON.stringify(rows[key])) }));
  }

  if (loading) return <div className="center muted">Loading templates…</div>;

  return (
    <div className="emails">
      <p className="muted fine" style={{ margin: "0 0 1rem" }}>
        Edit the wording of the automated emails. They send in the branded Rounds Codex template;
        the header, logo, and the legal footer (unsubscribe / sender line) are fixed.
      </p>
      {msg && <p className="note-ok">{msg}</p>}
      {err && <p className="err">{err}</p>}

      {ORDER.filter((k) => draft[k]).map((key) => {
        const d = draft[key];
        const m = META[key];
        return (
          <div className="tmpl-card" key={key}>
            <div className="tmpl-head">
              <div>
                <div className="tmpl-title">{m.title}</div>
                <div className="muted fine">{m.blurb}</div>
              </div>
              <div className="tmpl-actions">
                {dirty[key] && <button className="btn sm ghost" onClick={() => reset(key)} disabled={busy === key}>Undo</button>}
                <button className="btn sm" onClick={() => save(key)} disabled={!dirty[key] || busy === key}>
                  {busy === key ? "Saving…" : "Save"}
                </button>
              </div>
            </div>

            <label className="tlabel">Subject line</label>
            <input value={d.subject ?? ""} onChange={(e) => setField(key, "subject", e.target.value)} />

            <label className="tlabel">Heading</label>
            <input value={d.heading ?? ""} onChange={(e) => setField(key, "heading", e.target.value)} />

            <label className="tlabel">Body <span className="muted fine">(leave a blank line between paragraphs)</span></label>
            <textarea rows={8} value={d.body ?? ""} onChange={(e) => setField(key, "body", e.target.value)} />

            <div className="tmpl-row">
              <div>
                <label className="tlabel">Button label</label>
                <input value={d.button_label ?? ""} onChange={(e) => setField(key, "button_label", e.target.value)} placeholder="(no button)" />
              </div>
              {m.hasButtonUrl ? (
                <div>
                  <label className="tlabel">Button link</label>
                  <input value={d.button_url ?? ""} onChange={(e) => setField(key, "button_url", e.target.value)} placeholder="https://…" />
                </div>
              ) : (
                <div>
                  <label className="tlabel">Button link</label>
                  <input value="the user's set-password link (automatic)" disabled />
                </div>
              )}
            </div>

            <label className="tlabel">Fine print under the button <span className="muted fine">(optional)</span></label>
            <input value={d.note ?? ""} onChange={(e) => setField(key, "note", e.target.value)} placeholder="(none)" />

            <div className="tmpl-ph">
              Placeholders you can use:&nbsp;
              {m.placeholders.map(([p, desc]) => (
                <span key={p} className="ph-chip" title={desc}><code>{p}</code></span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
