# FocusFirst Rate Card — Internal Reference

**Effective 2026-07-28.** Supersedes all prior pricing. Internal document — not for client circulation.

---

## Live offerings

| # | Offering | Fee | Pass-throughs (billed at cost) |
|---|---|---|---|
| 1 | Supply Chain Research & Discovery Support *(delivered as Broker Intelligence Research for CMV and delivery-network cases)* | **$2,500** | None |
| 2 | Focus Group | **$5,000** | Recruiting $1,500–$2,000 (Nelson Recruiting) · Participants $1,500–$2,000 |

Extended Consultation Block: **$1,200** (three working calls + one written round). Hourly beyond that: **$450**.

### What the client actually pays

| Path | Fee | Expenses | All-in |
|---|---|---|---|
| Research only | $2,500 | — | **$2,500** |
| Focus group only | $5,000 | $3,000–$4,000 | **$8,000–$9,000** |
| Research → focus group *(credit applied)* | $2,500 then $2,500 | $3,000–$4,000 | **$8,000–$9,000** |

Say the all-in out loud on the call before the engagement email goes out. It costs nothing and it is the only thing standing between full written disclosure and a client who feels ambushed by it.

---

## Parked — Survey + Focus Group

**Not being sold.** Target structure was $6,500 covering a large pool jury survey plus a focus group, with recruiting and participant fees passing through on both phases.

**Why it is parked.** Recruiting a survey pool through live recruiting ran $4,000–$6,000 on the survey phase alone. That puts the client's all-in above $13,500 on a $6,500 fee, and leaves roughly $1,500 of fee against the entire survey phase — instrument design, fielding, analysis, and report, plus coordinating the third-party spend at no markup. The economics do not work for either side.

**Condition for reactivating.** A reliable research panel vendor that can field a venue-screened, jury-eligible pool at a per-completed-response rate. Blended per-complete pricing is a fundamentally different cost structure from live recruiting — it folds recruitment and incentive into one number and scales with pool size instead of with coordination effort. That is the unlock. Until it exists, do not quote survey work.

**What to do when a lawyer asks for a survey.** Sell the focus group. Do not improvise a survey price against live-recruiting costs.

**Still to build when it reactivates.** Engagement template, Square line item and message, and a real pass-through range. Do not reuse the retired $7,500 standalone number — that product no longer exists.

---

## Guardrails

**1. Tier 1 credit: one time, this case, non-stacking, twelve months.** All four limits load-bearing — the credit covers half the focus group fee. A firm buying three research work-ups and stacking $7,500 against one session is the failure mode these exist to prevent.

**2. Pass-throughs are never absorbed into a fee.** Not as a closing concession, not to win a case you want. Absorbed cost shows up as your time and your ad spend rather than as an invoice line, which is exactly why it goes unnoticed until the year is over. This is the mistake the $6,000 → $5,000 change corrected; do not walk it back.

**3. Recruiting passes through at cost, no markup.** The value is the analysis, not a coordination margin.

---

## Known thin spot — deliberate

**Tier 1 earns nothing incremental on conversion.** $2,500 research plus $5,000 focus group with a full credit means a converting client pays $5,000 — identical to a client who skipped the research. Land-and-expand, chosen deliberately: paid for by the firms that never convert, and by arriving at the focus group already knowing the case cold.

---

## Why the focus group went $6,000 → $5,000 — not a price cut

Under the old structure recruiting was handled in-house, advertising was absorbed, and roughly half of Paul's time went to herding participants — all inside the $6,000, with only participant fees passing through. Client paid about $7,500.

Recruiting now goes to Nelson Recruiting and passes through at cost. Client pays $8,000–$9,000; FocusFirst nets $5,000 clean, with no ad spend and the time back.

**The fee went down because the recruiting came out of it.** That is the sentence to use when a returning client asks why the number moved.

---

## Standing rules

- Engagement email goes out **before** work begins — and before recruiting starts. The Square invoice references it by date and subject; payment confirms the terms.
- Recruiting and participant costs show as **two separate lines**, never one blended number.
- The Tier 1 credit is invoiced as a **visible discount line**, never as a silent reduced invoice.
- Recruiting costs incurred before a cancellation or postponement **remain payable**. Reschedule inside fourteen days generally means re-recruiting at cost.

---

## Retired

- **Standalone large pool survey at $7,500 + participant costs.** No longer a product.
- **Bundled initial retention at $7,500 covering survey + first focus group.** Superseded; the survey pairing is parked pending a panel vendor.
- **Focus group at $6,000 + participant costs.** Replaced by $5,000 + recruiting + participants.

---

## Live quotes that predate this card

**Wilson** holds a quote at $2,500 research with a full credit against a **$6,000** focus group. Honor as quoted.

---

## Downstream cleanup

The `engagement-letter` skill has been rebuilt against this card (it now stores amounts as "USD 5,000" to avoid the price-corruption bug). Remaining cleanup: the `broker-intelligence-research` skill carried the retired $1,500 trial price, the $6,000 focus group, and the $7,500 bundle; its references are updated to $2,500 and the credit mechanics above. `benedict-example.md` is voice-only and intentionally keeps its retired numbers.
