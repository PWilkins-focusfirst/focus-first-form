# The Commercial Data Layer — What the Free Stack Cannot Reach, and How to Get It

Read at Phase 0 whenever a module reports a capability gap, and always before the Playbook says anything about equipment, corporate ownership, or entity networks beyond the federal census.

**FocusFirst does not currently hold a commercial platform subscription.** This file exists so that a gap is handled the same way every time: named, costed, routed, and either closed or disclosed. It is not a purchase recommendation and it is not a vendor endorsement. When a subscription is acquired, this file is where the routing table goes.

---

## 1. The four things the free federal stack cannot do

`freight-federal-record` is deliberately built on keyless federal data, because every figure it produces is reproducible by opposing counsel from a government source. That is a real litigation advantage and it is not up for trade. But it has four hard limits, and each has to be stated rather than papered over.

| Gap | Why it exists | What it costs the case |
|---|---|---|
| **The equipment graph** | No public MCMIS table on `data.transportation.gov` carries a VIN or plate field — not `fx4q-ay7w`, not `aayw-vxb3`. Verified July 2026 against the full field lists | Cannot show the same tractor running under multiple authorities, plate swaps, or where equipment went after a shutdown. This is the single largest hole |
| **Corporate ownership resolution** | Officers appear in the census; ownership, registered agents, formation dates, and parent/subsidiary structure do not | Officer-name matches stay WEAK. Alter-ego and successor theories cannot be built from the census alone |
| **Financing and lien continuity** | UCC-1 filings live with state Secretaries of State, not FMCSA | The shared-factor signal — the strongest reincarnation indicator this stack names — is manual, per-state work |
| **Credential verification** | The census carries driver *counts*. It does not carry CDLs, medical certificates, or examiner registry status | Driver-qualification breach cannot be verified from the public federal record. See `driver-qualification.md` |

**None of these makes the free stack inadequate.** The federal record carries the breach case: rating provenance, the itemized roadside record, the five-point insurance read, BASIC percentiles as of the load date, the annotation index, and the pool profile. The gaps above are amplifiers, not foundations. A Playbook that closes none of them is still a complete Playbook — it simply says so in §10.

---

## 2. Three acquisition paths, in order of preference

### Path A — The retained expert (preferred when the case will be tried)

An expert who holds the licensed MCMIS subscription file runs the equipment analysis, and the opinion arrives in admissible form with a witness attached.

- **Best because** the output is testimony, not intelligence. It crosses the authentication boundary this service otherwise cannot cross
- **Costs** expert fees against a $2,500 work-up — so this is a recommendation *in* the Playbook, not a step *of* it
- **Route it** through §7 (Pressure Campaign) as a retention recommendation with the specific questions the expert should be asked, and through §9 as a case-value driver
- The Playbook's job is to make the retention obvious and specific: *here is the question, here is why the free record cannot answer it, here is what the answer is worth*

### Path B — A commercial platform subscription (preferred for volume)

A per-seat subscription used by FocusFirst as a research input across engagements.

- **Best because** the marginal cost per case approaches zero across a caseload, and results arrive in-session rather than on an expert's schedule
- **Worst because** the output is vendor analysis, not a government record — it inherits every limitation §3 describes
- **The economics are not close.** Platform subscriptions in this market run roughly $20–$300/month. Against a $2,500 flat fee, a top-tier seat is a fraction of one engagement. Rebuilding equivalent capability in-house is not a serious alternative and should not be proposed as one

### Path C — Licensed MCMIS subscription file, in-house

FMCSA sells the full MCMIS extract, which carries the vehicle identifiers the public API omits.

- **Best because** it is a government record, so findings keep the reproducibility advantage
- **Worst because** it is a data-engineering commitment — ingestion, storage, refresh, and query tooling — for one capability
- Revisit only if equipment analysis becomes routine across many engagements

---

## 3. Rules of use — these are absolute, and they apply to any vendor

Whatever path closes the gap, the following govern. They exist because the entire force of a Playbook is that a defense lawyer reading it concludes every number is real and every source is stated.

**1. The authentication boundary does not move.** Commercial platform output is a **lead and an expert-equipping layer, never pleading-ready**. It is intelligence. It is labeled as intelligence in §5 and §10, exactly as OSI findings and monitor intelligence are labeled. Nothing sourced from a vendor is represented as an admissible fact.

**2. Never present vendor output as a federal record.** If a finding came from a platform, the Playbook says so, names the platform, and states the pull date. If a finding came from `data.transportation.gov`, it says that and gives the Socrata ID. The two are never blended into one sentence. `freight-federal-record` already carries this instruction — *never imply the free stack produced it* — and it is not softened by having bought a subscription.

**3. No vendor composite score ever enters a Playbook as a finding.** Not a risk score, not a screening determination, not a letter grade. Every such score in this market has undisclosed weightings, and this service removed its own statistical ranking layer for exactly that reason — *it was guessing dressed as analysis*. Using one would forfeit the objection FocusFirst raises when a **defendant** cites a score as its diligence record (`broker-intelligence/references/vetting-vendor-layer.md` §3). **The inputs are usable; the composite is not.**

**4. Prefer the government source for anything reachable in both places.** A vendor's rendering of a federal record is a copy. Cite the original. Use the platform for what only it can reach — equipment linkage, corporate resolution, network expansion.

**5. Run a conflict check before any engagement where a vendor relationship could matter.** Several people who operate platforms in this market also testify as experts in broker litigation, consult for brokers and insurers, and sell to the defense side of the same cases FocusFirst works. A subscription is a commercial relationship. Before an engagement, confirm the vendor's principals are not retained adverse — or, if retained aligned, that the client firm knows. Record the check in the engagement log.

**6. Re-verify vendor claims against the primary source.** Marketing figures in this market are unstable — source counts, record counts, and tier limits routinely differ between a vendor's own pages. Anything cited in a deliverable is screenshotted with a date stamp and traced to a first-party page or the Terms of Service.

---

## 4. What to write in the Playbook when the gap stays open

Gaps are product, not failure. A documented, costed, routed gap is a stronger deliverable than a silent one, and it is often the sentence that sells the next stage of work.

**In §3 (Blind-Eye Findings)** — grade the equipment-overlap theory **UNRESOLVED**, never NOT INDICATED. An unrun analysis is not a negative finding, and the distinction matters when the same defense lawyer reads §10.

**In §5 (Pattern, Pool, Monitors)** — state what the census cross-reference reached (address, phone, email, cell, fax, mailing address, officers, coordinated filing dates, same-name authority sweep) and what it did not (VIN and plate across authorities). Name the datasets checked so the negative is documented.

**In §7 (Pressure Campaign)** — the equipment question does not stay unanswered just because OSINT cannot reach it. It converts to discovery: the carrier's equipment list and registrations, Part 376 lease agreements, the tractor and trailer VINs from the crash report and the post-accident inspection, title and lien records, and the lessor's file. **Discovery reaches the equipment graph even when the free stack cannot.**

**In §10 (Methodology)** — the standing sentence:

> The VIN-to-plate-to-authority equipment graph is not reproducible from public FMCSA data; no public MCMIS table carries vehicle identifiers. Closing it requires the licensed MCMIS subscription file, a commercial platform, or a retained expert holding one. This work-up did not close it, and no finding in this Playbook depends on it.

That last clause is the one that matters. **Never let a Playbook finding rest on an analysis that was not run.**

---

## 5. When a subscription is acquired

Replace §2's Path B discussion with a routing table mapping each platform capability to the module that consumes it, and add the tier and account details to the engagement log. Keep §3 exactly as written — the rules of use do not relax on acquisition, they become load-bearing.

Register the vendor in `broker-intelligence/references/vetting-vendor-layer.md` if it is not already there, because a platform FocusFirst uses is also a platform a **defendant** may have used, and it has to be cross-examinable in both directions.
