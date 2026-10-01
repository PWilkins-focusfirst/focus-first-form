# Skill edit drafts: BIR at $2,500

Drafts only. Nothing here has been applied to the live skills.

- `broker-intelligence-research/` and `engagement-letter/` hold the full edited versions of the seven files that change.
- `skill-edits.patch` is the same change as a diff (`a/` = current live skill, `b/` = edited).

## What changed and why

The rate card (effective 2026-07-28) already lists Supply Chain Research & Discovery Support at $2,500 with a credit against the $5,000 focus group. The BIR skill still carried the older $1,500 trial price and the retired $6,000 focus group and $7,500 bundle. These drafts treat BIR as the delivery of Tier 1, which brings the two skills into line with the card.

| File | Change |
|---|---|
| `broker-intelligence-research/SKILL.md` | Price $1,500 trial to $2,500 standing; trigger phrase; credit mechanics point to the rate card limits; adds the USD-prefix note |
| `.../references/service-collateral.md` | Price, included consultation, four-limit credit, all-in disclosure, retired-rate note, email template, talking points |
| `.../references/intake-checklist.md`, `commercial-data-layer.md`, `playbook-template.md` | $1,500 to $2,500; credit line in the Playbook bridge matches the new limits |
| `engagement-letter/SKILL.md` | New "BIR is Tier 1" section: line item name, what's included, credit terms, all-in disclosure, visible discount line |
| `engagement-letter/references/rate-card.md` | Row 1 names BIR; the stale "downstream cleanup" note is updated (the skill was already rebuilt) |

## Decisions for Paul before applying

1. **Is BIR the same product as Tier 1?** These drafts assume yes. That means BIR now includes three working calls and three written recommendation rounds within 90 days, which the old BIR terms did not.
2. **Credit shrinks in dollar terms.** The old text credited the full fee against the focus group and sold the work-up as free for clients who proceed. The new credit is $2,500 against a $5,000 fee. A converting client pays $5,000 in fees either way. The rate card calls this a deliberate thin spot.
3. **Invitation-only.** The old copy said "select clients, trial basis". The trial framing is removed. The drafts keep invitation-only and flag it for confirmation.
4. **Email length.** The BIR email template gains one sentence disclosing the focus group all-in. Re-check it stays within 200-275 words.
5. **Rate card is yours.** The two edits to `rate-card.md` are small (row label, cleanup note). Skip them if you want the card untouched.
