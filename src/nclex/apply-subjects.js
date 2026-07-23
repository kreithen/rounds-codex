// apply-subjects.js — write the hand-verified `subj` field into each batch file.
//
// FIX vs first attempt: anchor on the item's OWN top-level `cond:` line (the last field
// of each item object), not the first "cond:" after the id — nested objects like
// pair:{...} previously swallowed the insertion. Also appends the required comma.
const fs = require("fs");
const subs = require("./subjects-final.js");

let total = 0;

for (let b = 1; b <= 16; b++) {
  const path = `nclex-b${b}.js`;
  const src = fs.readFileSync(path, "utf8");
  const lines = src.split("\n");
  const out = [];
  let currentId = null;
  let added = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const idm = line.match(/id:\s*"(nclex-\d{4})"/);
    if (idm) currentId = idm[1];

    const isTopLevelCond = /^ {4}cond:\s*.+$/.test(line);
    const next = lines[i + 1] || "";
    const nextCloses = /^ {2}\}[,]?\s*$/.test(next);

    if (isTopLevelCond && nextCloses && currentId) {
      const subject = subs[currentId];
      if (!subject) { console.error("NO SUBJECT for " + currentId); process.exit(1); }
      if (/subj:/.test(line)) { out.push(line); continue; }
      const withComma = line.replace(/,\s*$/, "") + ",";
      out.push(withComma);
      out.push('    subj: "' + subject + '"');
      added++;
      currentId = null;
      continue;
    }
    out.push(line);
  }

  fs.writeFileSync(path, out.join("\n"));
  total += added;
  console.log(path + ": +" + added + " tagged");
}
console.log("\ntotal tagged: " + total);
