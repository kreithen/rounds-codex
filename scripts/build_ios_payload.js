#!/usr/bin/env node
/* build_ios_payload.js -- alias for build_native_payload.js --platform ios.
 *
 * The payload chain became two-platform on 2026-09-09 (Android). The tree it builds is identical
 * for both, so there is one script; this name survives because native/MAC-RUNBOOK.md, the iOS
 * submission record and the physician's own notes all name it, and a runbook step that has been
 * run four times should not stop working because a file was renamed.
 *
 * It forwards every argument through and adds --platform ios. Passing --platform yourself is an
 * error rather than an override: this file's whole purpose is that the platform is not in question.
 */
'use strict';
const path = require('path');
const { execFileSync } = require('child_process');

const args = process.argv.slice(2);
if (args.includes('--platform')) {
  console.error('FAIL: build_ios_payload.js is the iOS alias and always builds --platform ios.');
  console.error('      For another platform call scripts/build_native_payload.js directly.');
  process.exit(2);
}
console.log('note: build_ios_payload.js -> build_native_payload.js --platform ios\n');
try {
  execFileSync('node', [path.join(__dirname, 'build_native_payload.js'), ...args, '--platform', 'ios'],
               { stdio: 'inherit' });
} catch (e) {
  process.exit(typeof e.status === 'number' ? e.status : 1);
}
