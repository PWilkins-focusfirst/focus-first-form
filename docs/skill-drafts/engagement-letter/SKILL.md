---
name: engagement-letter
description: Draft FocusFirst engagement-proposal emails to plaintiff trial lawyers in Paul Wilkins's voice — fee proposal, scope, what's-being-delivered-now, what's-still-ahead, and the confident FocusFirst closer, followed by a formal terms block and matching Square invoice boilerplate. Use this skill any time Paul wants to draft an engagement letter, fee proposal, retention email, scope email, terms email, initial-services proposal, continuing-services proposal, or any FocusFirst client-facing message proposing commercial terms to a plaintiff lawyer or firm. Also triggers on phrases like "draft a proposal," "send terms," "engagement letter," "fee email," "retention email," "set up the retention," "price quote for a focus group," "draft something for [client]" when the context is engagement terms, or any time Paul mentions a new commercial conversation with a plaintiff trial lawyer where money and scope need to be set out plainly. Use it even when the client name or firm is implicit.
---

# Engagement Letter — FocusFirst Client Engagement Email Drafter

## What this skill does

Drafts client-facing engagement emails for FocusFirst — Paul Wilkins's litigation consulting firm serving plaintiff trial lawyers.

The output has **three parts**, always:

1. **The email** in Paul's voice — plain-spoken, confident, no buzzwords, 200–275 words.
2. **A formal terms block** below the signature — the part that gets cited later.
3. **Square invoice boilerplate** — line item, description, and the invoice message carrying the reference-and-acceptance clause.

The email is the governing document. The Square invoice references it by date and subject line, and payment confirms the terms. This two-layer structure is not optional — see "Why two layers" below.

---

## CURRENT PRICING — verify before every draft

Authoritative source: `references/rate-card.md` in this skill, and
`01_FOCUSFIRST_OPS/Templates/2026-07-28_focusfirst_rate_card.md` in the ops folder.

> **Why amounts are written "USD 5,000" in this file.** A dollar sign immediately followed by a digit and a comma gets corrupted when SKILL.md is saved — `$5,000` has come back as `at,000`, `$2,500` as `engagement,500`, `$7,500` as `the,500`. The pattern is read as a positional variable and substituted. Reference files under `references/` are not affected and keep normal dollar signs.
>
> **In client-facing output, always write amounts with a dollar sign.** "USD 5,000" here means write "$5,000" in the email. The USD form is a storage convention for this file only. If you ever see a price in this file that reads as a word followed by a comma and three digits, the file has been corrupted — stop and check `references/rate-card.md` instead of guessing.

### Live offerings

| Offering | Fee | Pass-throughs (billed at cost) |
|---|---|---|
| Supply Chain Research & Discovery Support | **USD 2,500** | none |
| Focus Group | **USD 5,000** | recruiting USD 1,500–USD 2,000 · participants USD 1,500–USD 2,000 |

- Extended Consultation Block: **USD 1,200** (three working calls + one written round)
- Hourly beyond included scope: **USD 450**
- Tier 1 includes three working calls + three written recommendation rounds within 90 days
- Focus group includes two planning calls + one post-report debrief call
- Tier 1 credit: the USD 2,500 applies in full against the focus group fee — **one time, this case, non-stacking, within twelve months**

### Survey work is PARKED — do not quote it

Survey engagements are not being sold pending a reliable research panel vendor. Live recruiting made the pass-throughs unworkable. **If a lawyer asks for a survey, propose the focus group instead.** Never improvise a survey price.

### RETIRED — never use these numbers

- ~~USD 6,000 focus group + participant costs~~ → now USD 5,000 + recruiting + participants
- ~~USD 7,500 standalone large pool survey~~ → product does not exist
- ~~USD 7,500 bundled initial retention (survey + first focus group)~~ → superseded, survey parked

If Paul asks for a number not on the live list, stop and ask rather than reaching for a retired figure.

---

## Broker Intelligence Research (BIR) is Tier 1

BIR is how Tier 1, Supply Chain Research & Discovery Support, is sold and delivered for commercial motor vehicle and delivery-network cases. The price is the Tier 1 price, **USD 2,500**, with no pass-throughs. It is no longer a USD 1,500 trial-basis product; never quote that number.

For a BIR engagement:

- Use the BIR email template in `broker-intelligence-research/references/service-collateral.md` for the content beats, and this skill for voice, structure, terms block, and Square boilerplate.
- **Line item name:** `Broker Intelligence Research — [Case Name]`.
- **Included**, in the terms block: the Supply Chain Accountability Playbook (.docx) and its module artifacts as applicable (carrier fitness snapshot, broker intelligence memo, double-broker screen, OSI pattern report), plus three working calls and three written recommendation rounds within 90 days.
- **Credit**, in the terms block and in the email: the USD 2,500 credits in full against the focus group fee, one time, this case, non-stacking, within twelve months. It does not credit against recruiting or participant costs.
- **Disclose the focus group all-in in the email** whenever the credit is mentioned: USD 5,000 fee plus recruiting and participant costs at cost, USD 8,000–USD 9,000 all-in. Say it on the call first.
- When the focus group is later invoiced, show the credit as a visible discount line referencing the BIR invoice.

---

## Why two layers

An invoice is the one document that reliably gets opened, forwarded to a bookkeeper, and paid — so payment must confirm terms the client has actually seen. But the terms worth having (confidentiality, consulting-expert status, credit conditions, cancellation exposure) run longer than a billing document should carry.

So: the email carries the terms and goes out **before work begins**. The invoice references it by date and subject and says payment confirms it. Never invoice first.

The voice section sits **above** the signature. The formal terms block sits **below** it. Do not merge them — folding terms into the body makes the email read like a vendor contract and costs the peer-to-peer tone that does the actual selling.

---

## What to gather before drafting

Ask **once**, with a single AskUserQuestion call covering everything. Don't ask sequentially.

- **Recipient name** — first name only, the way Paul addresses the lawyer.
- **Recipient firm** — optional if context establishes it.
- **Case name** — short reference (e.g. "Benedict v. Johnson Bros.").
- **Which offering** — Tier 1 research (for a CMV or delivery-network case this is Broker Intelligence Research; see the BIR section below), focus group, or focus group with the Tier 1 credit applied.
- **Current scope** (optional) — default: *"the kind of work-up and support you're seeing so far in [case]"*.
- **Forward scope** (optional) — default: *"a level of focus group feedback that will serve as the heart of your case — brings it to life"*.

If Paul gives only a name and case, default to the focus group at USD 5,000 and present the draft. He will modify.

---

## Voice rules — these are what make the email Paul's

Non-negotiable.

- **Short and direct.** No preamble, no "I hope this finds you well." A casual sign-on is typical ("Last thing for now," "Quick one before I head into the day"). By the second sentence he has said why he's writing.
- **Plain pricing.** State the actual numbers. No hedging adjectives — not "competitive," not "reasonable."
- **Distinguish fee from retainer explicitly.** *"That's a full fee to cover completion of those phases, not a retainer."* This one sentence saves a future conversation.
- **Disclose the all-in shape.** Where pass-throughs are material, say what the total looks like in the email — not just in the terms block. A client who anchors on the fee and later sees expenses will feel misled even though everything was disclosed.
- **Name what's being delivered AND what's still ahead.** *"My objective is to [current scope]. What's still ahead is [forward scope]."* This is the through-line that separates a FocusFirst proposal from a vendor pitch. It appears in nearly every Paul engagement note.
- **Confident closing line.** *"Bold claims but that's the bar I set for FocusFirst"* or comparable. Confident without bragging.
- **Action close.** A specific next step: *"Let me know if this sounds like a good place for us to start and I'll get an invoice out to you."*
- **Sign-off.** *"Thanks [Name]."* on its own line, then:

```
Paul Wilkins | FocusFirst AI
Litigation Strategy + AI + Focus Groups
paul@focusfirst.ai | 225.270.6667
```

### What to AVOID

Refuse these even if asked:

- Bullet-pointed value props inside the email body (the terms block below the signature is different — that's terms, not selling).
- Marketing adjectives ("comprehensive," "best-in-class," "tailored solutions," "premium").
- Compliance filler ("Please feel free to reach out at your convenience…").
- Reciting FocusFirst credentials inside the email.
- "Looking forward to hearing from you."
- Multi-paragraph descriptions of the FocusFirst process.
- Hedging around the price.

---

## Email structure — seven beats

Full annotated example in `references/benedict-example.md` (voice only — its numbers are retired).

1. **Casual sign-on** — one short sentence, optional but typical.
2. **Why I'm writing** — one sentence.
3. **Rate context** — one paragraph, actual numbers. Skip for continuing engagements where the client already knows the rates.
4. **The proposal** — the specific fee, what it covers, the fee-vs-retainer line, and how pass-throughs are handled.
5. **The arc** — *"My objective is to [current]. What's still ahead is [forward]."* The spine of the email.
6. **The bar** — one short confident line.
7. **Action close + sign-off.**

Body lands between **200 and 275 words**, signature excluded. Longer means it's overworking. Under ~175 usually means the arc paragraph got skipped.

---

## The terms block — what goes below the signature

Adapt to the offering. Always include:

- **Fee** — the number, and the full-fee-not-a-retainer line.
- **Included** — scope, stated concretely enough to settle an argument.
- **Included consultation** — call and written-round counts, and the window they're available in.
- **Beyond included** — Extended Consultation Block at USD 1,200, hourly at USD 450, and the promise to say so before anything goes on the clock.
- **Pass-throughs** — separate lines per cost type, never blended. Estimate range plus approval before exceeding.
- **Cancellation exposure** (focus group) — recruiting costs incurred before cancellation remain payable; reschedule inside fourteen days generally means re-recruiting at cost.
- **Credit** (where Tier 1 was paid) — one time, this case, non-stacking, twelve months.
- **Confidentiality and status** — at the direction of counsel, in anticipation of litigation; non-testifying consulting expert under Fed. R. Civ. P. 26(b)(4)(D) and the state equivalent; work product belongs to the client.
- **Acceptance** — payment of the invoice confirms these terms.

---

## Square boilerplate

**Line item name:** `[Offering] — [Case Name]`

**Description:** three to five lines naming deliverables, the included consultation, and the full-fee-not-a-retainer line. Save as a Square item so it's never paraphrased differently twice — inconsistent scope descriptions across invoices are what a fee dispute feeds on.

**Invoice message** — set as the Square default so the reference clause is automatic:

```
This invoice is issued under the FocusFirst engagement terms set out in my
email of [date], subject "[exact subject line]." Payment of this invoice
confirms those terms, including the scope of work, the consultation included,
and the handling of [pass-throughs / the credit].

Work is performed at the direction of counsel in anticipation of litigation.
FocusFirst is retained as a non-testifying consulting expert.

Paul Wilkins | FocusFirst AI
paul@focusfirst.ai | 225.270.6667
```

Where the Tier 1 credit applies, invoice the full fee and show the credit as a **visible discount line** — never a silent reduced invoice. Eighteen months later a bare USD 2,500 invoice reads like the focus group cost USD 2,500.

---

## Output

Produce the draft as **markdown in the chat response** so Paul can paste it straight into Outlook or Gmail. Then save:

- **Default:** outputs directory, named `[YYYY-MM-DD]_engagement_email_[recipient_first_name]_[case_short].md`.
- **If a case folder is identifiable:** a second copy into `[case folder]/intelligence/`, named `[YYYY-MM-DD]_correspondence_paul-[recipient_first_name]_[purpose].md` — purpose values like `initial-fee-proposal`, `scope-expansion-proposal`, `continued-engagement-proposal`.
- **If unsure:** save to outputs only and offer to file it.

Markdown only by default. Paul pastes into an email client; a docx is only needed if he asks.

**Remind Paul to archive the sent email into the case folder the day it goes out.** The invoice points at it by date and subject; if it can't be retrieved in eighteen months, the reference clause is decorative.

---

## Defaults that should rarely change

- Fee is always stated as a full fee for completion of a phase, **not a retainer**.
- Pass-throughs are always billed separately at cost, **at event time**, with **no markup**.
- Pass-throughs are **never** absorbed into a fee — not as a closing concession, not to win a case. Absorbed cost surfaces as Paul's time and ad spend rather than an invoice line, which is why it goes unnoticed.
- Discovery and deposition work-up support is part of the broader engagement, not separately priced.
- The engagement email goes out **before** work begins and before recruiting starts.

---

## What this skill does NOT do

- Litigation memos, briefs, motions, or strategy documents.
- Case-strategy emails to clients (this skill is only for commercial terms).
- Formal engagement-letter PDFs or contracts.
- First-touch outreach to prospects who have not engaged with Paul yet — assumes a working relationship is in motion.
- Internal FocusFirst communications.

## When in doubt

Default to the focus group at USD 5,000, the default scope phrasings, the seven-beat structure, terms block below the signature, Square boilerplate appended, saved to outputs. Show Paul the draft. He will tell you what to change.
