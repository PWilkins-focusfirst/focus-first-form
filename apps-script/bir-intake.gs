/**
 * FocusFirst BIR intake receiver (Google Apps Script web app).
 *
 * Receives the JSON posted by bir-intake.html, appends one row to a Sheet,
 * and emails a triage summary. Setup steps are in apps-script/README.md.
 *
 * Script Properties (Project Settings > Script properties):
 *   SHEET_ID      required. ID of the Google Sheet that stores submissions.
 *   NOTIFY_EMAIL  required. Where the triage summary is sent.
 */

const SHEET_NAME = 'BIR Intake';
const MAX_FIELD_LEN = 4000;

const COLUMNS = [
  'submissionTime', 'receivedAt', 'status', 'triageFlags',
  'firm', 'attorney', 'email', 'phone', 'staff',
  'caption', 'venue', 'dol', 'posture', 'keyDate', 'severity',
  'carrier', 'usdot', 'brokerKnown', 'chainNotes', 'adverse',
  'materials', 'link', 'goal', 'fee', 'feeAck', 'privAck'
];

const REQUIRED = [
  'firm', 'attorney', 'email', 'phone', 'caption', 'venue', 'dol',
  'posture', 'brokerKnown', 'adverse', 'goal'
];

function doPost(e) {
  try {
    const raw = e && e.postData && e.postData.contents;
    if (!raw) return json_({ ok: false, error: 'empty body' });

    const data = clean_(JSON.parse(raw));

    const missing = REQUIRED.filter(function (k) { return !data[k]; });
    if (missing.length) return json_({ ok: false, error: 'missing: ' + missing.join(', ') });
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) return json_({ ok: false, error: 'invalid email' });
    if (data.service !== 'broker_intelligence_research') return json_({ ok: false, error: 'unknown service' });

    data.receivedAt = new Date().toISOString();
    data.status = 'New';
    data.triageFlags = triageFlags_(data).join('; ');

    appendRow_(data);
    notify_(data);

    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'server error' });
  }
}

function doGet() {
  return json_({ ok: true, service: 'bir-intake' });
}

/** Trim, cap length, and neutralize spreadsheet formula injection. */
function clean_(input) {
  const out = {};
  Object.keys(input || {}).forEach(function (k) {
    let v = input[k];
    if (Array.isArray(v)) v = v.join(', ');
    if (v === null || v === undefined) v = '';
    v = String(v).trim().slice(0, MAX_FIELD_LEN);
    if (/^[=+\-@]/.test(v)) v = "'" + v;
    out[k] = v;
  });
  return out;
}

/** Mirrors the fit check in docs/bir-pipeline.md. Flags only; Paul decides. */
function triageFlags_(d) {
  const flags = [];
  if (d.brokerKnown === 'no' || d.brokerKnown === 'suspected' || d.brokerKnown === 'yes_not_named') {
    flags.push('Selector not yet named');
  }
  if (d.brokerKnown === 'yes_named') flags.push('Chain already named: confirm decision at stake');
  if (['mediation_set', 'trial_set', 'low_offer', 'discovery_stalled'].indexOf(d.posture) !== -1) {
    flags.push('Decision pending: ' + d.posture);
  }
  if (d.materials.indexOf('crash_report') === -1 && d.materials.indexOf('bol') === -1) {
    flags.push('No crash report or load documents offered');
  }
  if (d.keyDate) {
    const days = Math.round((new Date(d.keyDate) - new Date()) / 86400000);
    if (!isNaN(days) && days >= 0 && days <= 30) flags.push('Key date within ' + days + ' days');
  }
  if (d.dol) {
    const years = (new Date() - new Date(d.dol)) / (365.25 * 86400000);
    if (!isNaN(years) && years >= 1.5) flags.push('Date of loss ' + years.toFixed(1) + ' years ago: check limitations');
  }
  return flags;
}

function appendRow_(data) {
  const props = PropertiesService.getScriptProperties();
  const ss = SpreadsheetApp.openById(props.getProperty('SHEET_ID'));
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(COLUMNS);
    sheet.setFrozenRows(1);
  }
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    sheet.appendRow(COLUMNS.map(function (c) { return data[c] === undefined ? '' : data[c]; }));
  } finally {
    lock.releaseLock();
  }
}

function notify_(d) {
  const to = PropertiesService.getScriptProperties().getProperty('NOTIFY_EMAIL');
  if (!to) return;
  const row = function (label, value) {
    return '<tr><td style="padding:4px 12px 4px 0;color:#555"><b>' + esc_(label) + '</b></td><td>' + esc_(value || '-') + '</td></tr>';
  };
  const flags = d.triageFlags ? d.triageFlags.split('; ') : [];
  const html =
    '<h3>New BIR intake: ' + esc_(d.caption) + '</h3>' +
    '<p><b>Triage flags</b></p><ul>' +
    (flags.length ? flags.map(function (f) { return '<li>' + esc_(f) + '</li>'; }).join('') : '<li>None</li>') +
    '</ul><table>' +
    row('Firm', d.firm) + row('Attorney', d.attorney) + row('Email', d.email) + row('Phone', d.phone) +
    row('Venue', d.venue) + row('Date of loss', d.dol) + row('Posture', d.posture) + row('Next key date', d.keyDate) +
    row('Severity', d.severity) + row('Carrier', d.carrier + ' ' + d.usdot) + row('Broker known', d.brokerKnown) +
    row('Chain notes', d.chainNotes) + row('Adverse parties', d.adverse) + row('Materials', d.materials) +
    row('Materials link', d.link) + row('Desired outcome', d.goal) +
    '</table><p>Next step: triage, then conflict check, then engagement letter ($2,500).</p>';
  MailApp.sendEmail({
    to: to,
    replyTo: d.email,
    subject: 'BIR intake: ' + d.caption + ' (' + d.firm + ')',
    htmlBody: html
  });
}

function esc_(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
