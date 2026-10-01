# BIR intake receiver: setup

`bir-intake.gs` receives submissions from `bir-intake.html`, logs each to a Google Sheet, and emails a triage summary.

## One-time setup

1. Create a Google Sheet (for example "FocusFirst BIR Intake"). Copy its ID from the URL (the string between `/d/` and `/edit`).
2. Go to <https://script.google.com>, create a new project, and paste in `bir-intake.gs`.
3. In **Project Settings > Script properties**, add:
   - `SHEET_ID`: the Sheet ID from step 1
   - `NOTIFY_EMAIL`: where triage emails should go
4. **Deploy > New deployment > Web app.** Execute as: **Me**. Who has access: **Anyone**. Authorize when prompted (Sheets, Mail).
5. Copy the web app URL and set it as `ENDPOINT` in `bir-intake.html`.
6. Submit a test intake. Confirm that a row appears in the Sheet and the triage email arrives.

## Notes

- After any code change, use **Deploy > Manage deployments > Edit > New version**. Saving alone does not update the live web app.
- The page posts as `text/plain` so the browser skips a CORS preflight, which Apps Script web apps do not answer. The script parses the body as JSON regardless.
- "Anyone" access means anyone with the URL can post. The script validates required fields, caps field length, escapes the email, and prefixes values that start with `=`, `+`, `-`, or `@` so a Sheet cannot execute them. If spam becomes a problem, add a honeypot field or move to a reCAPTCHA check.
- Triage flags are advisory and mirror the fit check in `docs/bir-pipeline.md`. They never auto-decline anything.
- The Sheet holds attorney contact details and case captions. Keep it private to FocusFirst.
