---
name: broker-intelligence-research
description: "Run FocusFirst's Broker Intelligence Research service end to end — the flat-fee (USD 2,500/case) supply-chain accountability work-up for plaintiff CMV and delivery-network cases: intake client materials, map the chain, run every applicable module (federal record spine, broker unmasking and pool profile, double-broker screen, date-of-loss carrier fitness, vetting-vendor layer, control/employer analysis, network accountability, OSI pattern pass, monitors, legal posture, SME board), and synthesize the Supply Chain Accountability Playbook. Trigger on: new BIR engagement, broker intelligence research, run the work-up, the 2,500 work-up (formerly the 1,500 trial work-up), build the playbook, supply chain accountability playbook, client sent materials for the broker work-up, [client] wants the broker intelligence service, what's the scheme in this chain — and whenever a client firm submits case materials under the flat-fee service. Orchestrates the module skills; for one module alone use that skill directly."
license: FocusFirst Proprietary — for use under FocusFirst engagements
---

# Broker Intelligence Research — The Supply Chain Accountability Work-Up

This skill owns exactly one question: **what is the theory of accountability across the whole chain, and what procedural campaign forces each party to produce its file?**

**It performs no primary analysis.** It orchestrates the modules, reads `chain.json`, and synthesizes. If synthesis exposes a conflict between modules, resolve it **in the module** — re-run the pull — never in the Playbook prose.

> **Dollar amounts in this file are written with a USD prefix, for example "USD 2,500".** A dollar sign directly before digits and a comma can be corrupted when SKILL.md is saved (see the engagement-letter skill). In client-facing output always use a dollar sign instead. Reference files under `references/` keep normal dollar signs.

## What this service is

BIR is FocusFirst's break-out service for plaintiff trial lawyers: a flat-fee, per-case deep work-up of the entire transportation chain behind a crash. The client firm sends case facts and materials; FocusFirst returns the **Supply Chain Accountability Playbook** — one consistent flagship deliverable naming every party in the chain, mapping what each knew or could have seen about the danger, and laying out the sequenced campaign that forces each of them to produce their file.

**Commercial terms:** USD 2,500 flat per case (rate card, effective 2026-07-28; BIR is the delivery of the rate card's Tier 1, Supply Chain Research & Discovery Support). A full fee for a completed work-up, not a retainer. No pass-throughs. Includes three working calls and three written recommendation rounds within 90 days. If the client takes the case forward with FocusFirst, the full USD 2,500 credits against the focus group **fee** (never against recruiting or participant pass-throughs) — one time, this case, non-stacking, within twelve months, shown as a visible discount line on the invoice. Exact mechanics live in `references/service-collateral.md`; the rate card governs if they ever disagree. BIR is the front door to the core engagement — **the work-up must be good enough that the focus group feels inevitable.**

**The operating thesis.** The modern freight economy rewards looking away. Shippers tender to brokers so they never see the carrier. Brokers run volume so thin that vetting is a checkbox. Carriers re-sell loads to operators nobody vetted at all. And the network giants have built corporate architectures whose function is to exercise control over drivers while disclaiming responsibility for them. Scope: **any scheme, by any party to the supply chain, that turns a blind eye to evidence of unsafe habits, conduct, or practices.**

**The bar.** A defense lawyer reading this Playbook should conclude that every document it names exists, that FocusFirst knows exactly who holds it and why, and that the only question is whether it gets produced before or after a motion. A client lawyer should see case value they did not know they had. Anything less is not the product.

**Post-*Montgomery* framing.** Two sentences to carry into every engagement. Carpenter's: *compliant is a status; safe is a pattern; defensible is a record of your own diligence.* And the structural one: *if you broker freight, your carrier file became your court file — the data you will be examined against is public, cheap, and timestamped, which means the only fact in dispute at trial is whether you looked.*

## When to use this skill vs. the modules

- **This skill** when an engagement is in motion: materials arrived, Paul says "run the work-up," or the deliverable is the Playbook.
- **The module skills directly** when Paul wants one analysis in isolation, outside the service wrapper.
- Never produce a Playbook by synthesizing stale or unverified module output. **Modules run fresh, in the current session, per their own research standards.**

---

## Phase 0 — Engagement Intake

1. **Log the engagement** in `[case-folder]/08_OSI_Research/bir-engagement-log.md`: client firm and lawyer, case name/caption, date materials received, fee status, materials inventory, gap list, target delivery. Create the case folder if needed.
2. **Inventory materials** against `references/intake-checklist.md` — Tier 1 (required), Tier 2 (high-value), Tier 3 (helpful). The work-up runs on partial data; **gaps never stall the engagement**, they become documented targets in the Truth Ledger and Pressure Campaign.
3. **Fill what can be filled without the client.** No crash report? Invoke **crash-report-retrieval**. Large productions? Serialize with **litigation-document-serializer**. Carrier known by name only? Resolve USDOT/MC first.
4. **Initialize `chain.json`** per `references/chain-object.md`. Every module reads and writes it.
5. **Confirm the four anchors:** defendant carrier identity (or best hypothesis), **date of loss**, crash geography (location + direction of travel), and venue/jurisdiction. If any is genuinely unavailable, ask Paul once — these four drive everything downstream.

---

## Phase 1 — The Spine Pass, Then the Chain Hypothesis

### 1.1 Run the federal record first — unconditionally

**Invoke `freight-federal-record` the moment a USDOT exists, before archetype classification.** Its output frequently determines the archetype. It costs one script invocation and it is the cheapest high-value pass in the work-up.

```bash
python3 scripts/fmcsa_pool.py annotations <USDOT> --save data/annotations-<USDOT>.json
python3 scripts/fmcsa_pool.py chameleon   <USDOT> --save data/chameleon-<USDOT>.json
python3 scripts/fmcsa_pool.py namesweep   <USDOT> --save data/namesweep-<USDOT>.json
python3 scripts/fmcsa_pool.py cohort      <USDOT> --window 45 --save data/cohort-<USDOT>.json
```

The annotation index names the shippers and brokers on this carrier's bills of lading. That is frequently the answer to "who is above the carrier," and it is a federal record.

**Run `namesweep` before the complaint, not after.** A same-name carrier-plus-broker pair is the structure that hides a tender to the broker arm re-brokered to the carrier arm, and a second authority under a near-identical name is a public fact. Discovering it in an interrogatory response a year into the case is a year too late — it changes who gets named. `cohort` then tests whether the linked entities filed their paperwork in the same window, which is what separates an ambiguous shared address from a coordinated one.

### 1.2 Build two artifacts

1. **The Case Snapshot** — half a page: parties and posture; date of loss; venue, controlling circuit, **and the forum's apportionment statute and joint-and-several threshold**; carrier legal name, USDOT/MC, every DBA; driver; load description; insurance disclosed; procedural posture; limitations and amendment deadlines the campaign must respect.
2. **The chain map as documented** — `double-broker-screen` Phase 1, written to `chain.json`. Flag every UNKNOWN cell. **The unknowns are the work.**

### 1.3 Classify the archetype

| Archetype | Signature | Primary modules |
|---|---|---|
| **A — Classic brokered freight** | Shipper's product, third-party carrier, broker known or suspected | broker-intelligence (incl. pool + vendor layer), carrier-fitness-record, double-broker-screen, control/employer |
| **B — Network-giant chain** | Amazon (Relay/AFP/DSP/Flex), FedEx Ground (ISP/linehaul), Walmart (dedicated/Spark), UPS purchased transportation, regional parcel | Network Accountability Module (`references/network-giants.md`) + carrier-fitness-record; double-broker screen on any re-tendered segment |
| **C — Private/dedicated fleet** | Shipper's own trucks, or a dedicated carrier hauling one customer | carrier-fitness-record; **shipper-direct selection and oversight analysis** (§ below); osi-research on the fleet's safety management |
| **D — Lease/owner-op maze** | Part 376 questions, placard/paper mismatches, chameleon suspicion | double-broker-screen, carrier-fitness-record (chameleon), broker-intelligence if a broker fed the chain |
| **E — Unknown** | Cannot yet be classified | Annotation index + crash geography, then reclassify |

Archetypes combine — an Amazon Relay load re-brokered by the contracted carrier is B + D, and both module sets run.

**Archetype C is not a lesser case.** The ordinary-care logic does not stop at the broker's desk: a shipper running a carrier-qualification program owes the same duty, and its routing guide, qualification standards, and approved-carrier list are the same discovery. The shipper is often the deepest pocket in the chain with no broker to hide behind. Run the fitness record and the vetting-layer analysis against the **shipper** as selector.

---

## Phase 2 — Module Execution Matrix

**Full work-up on every engagement.** Every applicable module runs end to end; a module that does not apply is screened out with a one-line reason recorded for the Methodology section. Nothing is silently skipped — screened-out modules are part of the consistency promise.

| # | Module | How it runs | When | Feeds § |
|---|---|---|---|---|
| 0 | **Federal Record Spine** | **`freight-federal-record`** | **ALWAYS — first, before archetype classification** | §2, §4, §5 |
| 1 | Carrier Fitness & Breach Record | `carrier-fitness-record` | ALWAYS — per carrier-entity in the chain | §4, §6 |
| 2 | Broker Unmasking **+ Pool Profile** | `broker-intelligence` | Selector unknown, suspected, or known-but-denying. **The pool profile runs whenever a broker is identified, including when identity was never in doubt** | §2, §3, §5, §6, §7 |
| 3 | Double-Broker Screen | `double-broker-screen` | Load documents exist, or any chain-integrity tell is visible | §3, §6, §7 |
| 4 | **Vetting-Vendor Layer** | `broker-intelligence/references/vetting-vendor-layer.md` | **Whenever a selector — broker or shipper — is identified** | §3, §6, §7 |
| 5 | **Control / Employer Analysis** | This skill — `references/control-and-employer.md` | **ALWAYS in archetypes A, B, C.** This is the theory that converts a several share into the whole judgment | §3, §6, §7, §8, §9 |
| 6 | Network Accountability | `references/network-giants.md` | Archetype B | §2, §3, §6, §7 |
| 7 | Pattern & OSI Pass | `osi-research`, scoped to chain entities | ALWAYS — scaled to materials and entity count | §5 |
| 8 | Monitor Intelligence | `references/monitor-feed.md`; catch-up sweep if stale | ALWAYS | §5 |
| 9 | Legal Posture | `ffai-legal-research` / `motion-practice-manager:legal-research` | ALWAYS — **never write §8 from memory** | §8 |
| 10 | SME Board Read | `litigation-sme-board` — Capt. Roy Boudreaux (FMCSA) lead | ALWAYS — after 0–9, before synthesis | Quality gate + §9 |
| 11 | **Equipment & Asset Disposition** | This skill — `references/equipment-and-assets.md` | Chameleon/reincarnation INDICATED or CONFIRMED; authority revoked, dissolved or dormant after the loss; small fleet at minimum limits; `namesweep`/`cohort` hit; or the case will be tried | §3, §5, §6, §7, §8, §9 |
| 12 | **Driver Qualification & Licensing Integrity** | This skill — `references/driver-qualification.md` | Any driver-side fitness question — credential irregularity, Part 391 violations in the roadside record, ELP or medical OOS, contested employment relationship | §3, §4, §6, §7, §8, §9 |

**Sequencing.** Module 0 runs immediately (needs only a USDOT). Module 1 follows (needs DOT + date of loss). Modules 2–6 run as materials allow, in parallel where independent. Modules 7–8 run alongside. **Module 11 follows module 1** — it consumes the chameleon/cohort/namesweep output and should not be run before them. **Module 12 runs once the driver is identified**, independently of the rest. Module 9 runs once the chain and theories are visible. **Module 10 is the gate:** present the assembled record to the SME board and ask two questions — *what does this record prove that we haven't claimed?* and *what claim won't survive contact with a defense expert?* Fold the answers into synthesis.

**Module 12 carries a scoping rule that is not optional.** It runs against the **carrier** — negligent hiring, retention, entrustment, supervision — and never as a broker theory. Arguing that a selector should have audited driver qualification files forfeits this service's best cross-examination of the broker defense, which is that negligent selection has never required omniscience about driver-level records. Read `references/driver-qualification.md` §0 before writing a word of §3 on driver facts.

**Module outputs are artifacts, not drafts.** Each writes its own deliverable and its section of `chain.json`. The Playbook **cites and generates from** them; it never re-derives or contradicts.

**Legal-posture baseline** (verify every element in session): *Montgomery v. Caribe Transport II*, No. 24-1238 (U.S. May 14, 2026) held negligent-selection claims against brokers survive FAAAA preemption via the safety exception. The post-*Montgomery* standard-of-care law, the § 14916 Landstar line, network-agency doctrine, control/employer doctrine, and the H.R. 5337 safe-harbor bill are all moving. See `references/legal-baseline.md`.

---

## Phase 3 — Synthesize the Playbook

Read `references/playbook-template.md` and follow it exactly — section order, verdict-box language, table schemas, and grading vocabulary are the product's consistency promise. Build the `.docx` in FocusFirst professional format (navy #1F3864 headers, gold #C8A951 accents, CONFIDENTIAL — ATTORNEY WORK PRODUCT header on every page, FocusFirst footer with page numbers, Calibri 11pt body).

**Generate §2, §4, §5, and §6 from `chain.json`, do not retype them.** If a figure is not in the chain object, it should not be in the Playbook.

The ten sections, fixed:

1. **Accountability Verdict** (page 1) — the scheme in three sentences; the blind-eye table (party | what they could have seen | what they did instead | evidence grade); the leverage headline; the three priority actions.
2. **The Chain: How This Load Actually Moved** — chain map, archetype, route geography, **the annotation index and what it named**.
3. **The Blind-Eye Findings** — each scheme graded CONFIRMED / INDICATED / NOT INDICATED / UNRESOLVED: negligent selection; **broker-as-employer / control**; double-brokering; chameleon/reincarnation; **vetting-layer failure**; network insulation; lease/misclassification theater; safety-data suppression. Use the grades strictly — the Playbook's force is precision, never inflation.
4. **The Carrier Fitness Record** — the date-of-loss breach exhibit, **led by rating provenance**.
5. **Pattern, Pool, Monitors & Ongoing Danger** — **the selector's documented carrier pool** (unrated percentage, rating staleness, OOS breadth, small-fleet fatality cut, per-unit normalization); OSI findings; standing-monitor intelligence labeled as intelligence; the "this is still happening" thread.
6. **The Truth Ledger** — the centerpiece: every material record category | who holds it | why it exists (the business reality that guarantees it) | what it will show | the procedural vehicle | timing trigger. **This is why a defendant reading the Playbook understands concealment is untenable.**
7. **The Pressure Campaign** — sequenced 30/60/90: preservation letters (day 0, including **third-party tracking vendors, whose retention is short**), first-wave discovery (including **broker-to-driver communications and tracking logs**), Rule 45 subpoenas (shipper, TMS vendor, factor, ELD, **vetting vendors — Carrier411 access logs first**, candidate brokers), vetting-file demands, deficiency triggers wired to motion-to-compel drafts, 30(b)(6) topics, deposition order. Every ask states which Truth Ledger row it collects and which finding it converts from intelligence to evidence.
8. **Legal Posture** — jurisdiction-specific, session-verified: FAAAA preemption state after *Montgomery*; **the forum's apportionment statute and joint-and-several threshold**; control/employer doctrine in the controlling circuit; § 14916 readiness against the Landstar line; network-liability theories; anticipated defenses and the counters this record supports.
9. **What This Record Sets Up** — case-value drivers (**including what the control theory is worth: the difference between a several share and the whole judgment**), focus-group-ready themes, settlement-leverage narrative, and the credit line: the USD 2,500 BIR fee credits in full against the focus group fee, on the terms in `references/service-collateral.md`.
10. **Methodology, Sources & Limitations** — modules run and screened out with reasons; source log; the caveat block from `freight-federal-record/references/caveats.md`; the authentication boundary; the verification statement.

---

## Phase 4 — Verify, File, Deliver

1. **Verification pass.** Run **case-deliverable-verification** before anything goes to the client — every number to a raw file on disk from this session, every attribution to its module artifact, every citation to the module 9 memo. Fix in the module, re-synthesize, re-verify.
2. **File.** `[case-folder]/08_OSI_Research/Supply-Chain-Accountability-Playbook-[case-slug]-[YYYY-MM-DD].docx`. Raw pulls stay in `broker-research/data/` and `osi-research/data/`. Update `chain.json` and the engagement log.
3. **Downstream.** Fold the chain map, blind-eye findings, and Truth Ledger targets into the Case Intelligence Core if one exists. Offer the `defense-war-room` pass. Register every chain entity (every USDOT/MC) with the standing monitors per `references/monitor-feed.md`.
4. **Deliver** to Paul with a one-line summary and the top three actions. Client-facing collateral regenerates from `references/service-collateral.md` — **never improvise the commercial terms.**

---

## Research Standards (service-level)

Module standards apply in full — retrieve → save → write; current-session verification; date-of-loss separated from current state; government source preferred; intelligence never presented as evidence; negative results documented; ephemeral sources screenshotted. On top of those:

- **One vocabulary.** CONFIRMED / INDICATED / NOT INDICATED / UNRESOLVED across every module and section. A client who buys three work-ups must never relearn the grading.
- **One chain object.** Modules read and write `chain.json`. Conflicts are resolved in the module, never in prose.
- **Gaps are product, not failure.** A thin-materials engagement produces a Playbook whose Truth Ledger and Pressure Campaign are the star sections. Say plainly what could not be determined and exactly how the campaign determines it.
- **Pool figures carry their guardrails** — name-variant breakdown, per-power-unit normalization, small-fleet cut, sample-not-census. Never a bare total.
- **Verdicts are described accurately.** A verdict is not a final adjudication. Where a reported verdict is subject to post-trial motions or appeal, say so. Where a reconstruction of apportionment arithmetic is ours rather than a source's, label it.
- **The law is verified, never remembered.** §8 is written only from module 9 output produced in the current session.
- **Flat fee, full work-up.** Never scale effort to the fee. The USD 2,500 is the standing price of a premium product; the product is what earns the focus group.
- **The authentication boundary is absolute.** Nothing OSINT-sourced is represented as pleading-ready. The Playbook's power is that it routes every finding to an admissible-evidence pathway.

### Industry-source handling — the Carpenter rule

A small number of people in the freight-safety world occupy several roles at once, and the most-cited of them, **Rob Carpenter**, occupies four: he supplies framing this service quotes to juries (*compliant is a status; safe is a pattern; defensible is a record of your own diligence*); he publishes investigative reporting on chameleon networks that is frequently ahead of the trade press; he is **identified in the public materials of a commercial vetting platform** (theteaintel.com / CarrierVerifi, entity named in its Terms of Service as Tea Technologies, Inc.) as its founder — a platform marketed to brokers and insurers, the defense side of these cases; and he is **reported to testify as a retained expert in broker and C.H. Robinson litigation.** *The corporate-ownership and expert-retention facts are **UNCONFIRMED** against first-party sources — see `broker-intelligence/references/vetting-vendor-layer.md` §3 and §6. That is precisely why the rule below exists.*

Those roles are not compatible with treating him as a single kind of source. The rule, which generalizes to anyone similarly situated:

1. **Use the framing. It is good, and it is the version a jury understands.**
2. **Verify every figure against the government source before it enters a deliverable.** His FMCSA numbers have checked out; his *attributions* have not always — this service has already recorded one single-source vendor attribution and one uncorroborated broadcast reference. **Use the data; independently confirm the attributions.**
3. **Never cite the newsletter, the platform blog, or a social account in a client deliverable.** Re-derive the finding from the federal record, the docket, or the rulemaking and cite that. A Playbook footnote pointing at a Substack is a credibility event waiting to happen — and a meaningful share of that feed is political commentary sharing a byline with the investigative work.
4. **Run the conflict check before engagement** where a vendor or expert relationship could matter, and record it in the engagement log. If FocusFirst ever subscribes to a platform whose principal testifies in these cases, that is a commercial relationship with an adverse-retention risk, and the client firm is entitled to know.
5. **A platform FocusFirst uses is also a platform a defendant may have used.** Any vendor in the research stack is registered in `broker-intelligence/references/vetting-vendor-layer.md` and kept cross-examinable in both directions. See `references/commercial-data-layer.md` §3 for the full rules of use.

---

## Integration map

**crash-report-retrieval** → Phase 0 gap-fill, **and the cheapest VIN in the case for module 11** • **litigation-document-serializer** → Phase 0 intake • **freight-federal-record** → module 0, and the data layer under modules 1–3 and 11 • **carrier-fitness-record / broker-intelligence / double-broker-screen / osi-research** → Phase 2 modules • **ffai-legal-research / motion-practice-manager:legal-research** → module 9, **plus successor-liability and fraudulent-transfer law for module 11 and the direct-negligence-after-admission question for module 12 — both jurisdiction-specific, both session-verified** • **litigation-sme-board** → module 10 gate • **case-deliverable-verification** → Phase 4 gate • **discovery-manager / motion-practice-manager** → Pressure Campaign execution • **case-intelligence-core / defense-war-room / case-story / virtual-focus-group** → downstream, where the BIR record becomes trial strategy • **engagement-letter** → commercial correspondence.

## Reference files

- `references/chain-object.md` — **the `chain.json` schema and module contract. Read at Phase 0.**
- `references/control-and-employer.md` — **module 5.** The *Lipe* arithmetic, control doctrine, the *Ciotola* fact cluster, the *Cornejo* expert-framing lesson, and the discovery set. Read whenever a selector exercised any control over the driver.
- `references/equipment-and-assets.md` — **module 11.** The equipment graph before the loss, asset disposition and successor tracing after it, and the collectability/punitive framing. Read whenever a chameleon signal lands or the carrier went dark after the crash.
- `references/driver-qualification.md` — **module 12.** CDL validity and the one-license rule, non-domiciled credentials, ELP, medical certification **and examiner registry status on the date signed**, ELDT, and the PSP/Clearinghouse/MVR discovery set. **Read §0 first — the scoping rule protects the broker argument.**
- `references/commercial-data-layer.md` — what the free federal stack cannot reach, the three acquisition paths, and the absolute rules of use for any vendor data. **Read whenever a module reports a capability gap.**
- `references/playbook-template.md` — the full Playbook template. Read before every synthesis.
- `references/network-giants.md` — Network Accountability Module (archetype B). Re-verify its case law at run time.
- `references/legal-baseline.md` — the dated state of play plus module 9's run-time verification checklist. Verify before citing; update when the landscape moves.
- `references/intake-checklist.md` — tiered client materials checklist and intake protocol.
- `references/monitor-feed.md` — standing monitor specification and hand-off contract.
- `references/service-collateral.md` — canonical commercial copy: pricing, one-pager, engagement email in Paul's voice.
