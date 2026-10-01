# Broker Intelligence Research (BIR): Intake-to-Conversion Pipeline

Flat fee: **$2,500 per case.** Output: the Supply Chain Accountability Playbook, ending in a Strategic Roadmap that marks where a FocusFirst focus group changes the outcome.

Goal this serves: persistent relationships with 12 active litigators, with each engagement producing a verified deliverable and a reusable case study.

## Stages

| # | Stage | Trigger | Owner | Output |
|---|-------|---------|-------|--------|
| 1 | Intake | Lawyer completes `bir-intake.html` | Lawyer | Structured submission |
| 2 | Triage | Submission lands | Paul | Go / no-go, fit check |
| 3 | Conflict check | Triage = go | Paul | Cleared adverse-party list |
| 4 | Engagement | Conflicts clear | Paul | Signed engagement letter at $2,500 |
| 5 | Materials | Signed letter | Lawyer | Documents via secure link |
| 6 | Work-up | Materials in | FocusFirst | Module outputs (below) |
| 7 | Verification | Draft Playbook | FocusFirst | Discrepancy log, cleared |
| 8 | Delivery + call | Verification clean | Paul | Playbook delivered, walkthrough call |
| 9 | Conversion | Within 48 hours of call | Paul | Roadmap and focus group proposal |
| 10 | Case study | 30 days after delivery | FocusFirst | Anonymized proof point |

## Triage: fit check (stage 2)

Proceed when most of these hold. These keep BIR on the high-value end of the lawyer's docket.

- Commercial motor vehicle or delivery-network loss with serious injury or death.
- A carrier or driver is known, but the party that selected or controlled them is unknown or unnamed.
- A real decision turns on the answer: naming a co-defendant, a limitations deadline, a motion to compel, mediation leverage.
- The lawyer has, or can get, at least the crash report and some load documents.

Decline or defer when the case is low-value, the chain is already fully named and developed, or no decision depends on the work.

## Work-up modules (stage 6)

Run in this order; each feeds the next.

1. `freight-federal-record`: the federal record spine.
2. `broker-intelligence`: unmask the selector, build the pool-level record.
3. `double-broker-screen`
4. `carrier-fitness-record`: date-of-loss breach record.
5. `registration-vetting` and the vetting-vendor layer.
6. `case-intelligence-core`: pin-cited fact index the rest cites by fact ID.
7. Synthesis into the Playbook via `broker-intelligence-research`.

## Verification gate (stage 7)

Nothing reaches the client before `case-deliverable-verification` has run and every Critical and High item in the discrepancy log is resolved. Pay particular attention to unmasking claims (a broker named without a record cite) and any cost or price figure without a source.

## Conversion layer (stage 9)

The Playbook ends with a Strategic Roadmap, not a sales pitch. The Roadmap:

- Sequences the case from current posture through trial, station by station.
- Marks the stations where a focus group moves value (framing test before mediation, damages validation, defense pre-test).
- Quotes the focus group engagement as the next station.

Follow-up cadence after delivery: walkthrough call (day 0), Roadmap and proposal (within 48 hours), one check-in at day 7, one at day 21. Stop after the day-21 check-in unless the lawyer re-engages.

## Case-study template (stage 10)

Anonymize firm, client, and parties unless written permission is on file.

- **Situation:** posture and what the lawyer did not know.
- **Finding:** what the work-up established (the selector, the pool-level pattern, the fitness record).
- **Action:** what the lawyer did with it (named a party, moved to compel, changed the mediation position).
- **Result:** quantifiable outcome, with the source for each number. No figure without a record behind it.
- **Time and cost:** days from signed letter to Playbook; the $2,500 fee.

## Open items

- **Intake endpoint.** `ENDPOINT` in `bir-intake.html` is empty. The receiver is written (`apps-script/`); deploy it per `apps-script/README.md`, set the URL, and test a submission end to end before publishing. Until then the form says it is not configured rather than pretending to submit.
- **Price consistency.** The `broker-intelligence-research` skill still describes the service as $1,500 on a trial basis. Update it to $2,500 so the Playbook, engagement letter, and website agree.
- **Engagement letter.** Confirm the `engagement-letter` template carries the $2,500 flat fee and the scope of the module set.
- **Confidentiality.** The intake deliberately takes no client-identifying detail and no attachments. Decide the secure document-sharing channel for stage 5.
- **Existing juror form.** `index.html` has the same unset endpoint and sends only file names, not file contents. Separate from this project, but it should be fixed before real participants use it.
