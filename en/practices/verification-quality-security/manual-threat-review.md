---
id: manual-threat-review
entity: practice
decision: use
evidence: result-accepted
primary_direction: verification-quality-security
tools: [application-security-review]
review_state: current
---

# Perform manual threat review for agent changes

## Desired outcome

Review threats that automated scanners miss against actual system contracts.

## When to apply

Before accepting a change on a sensitive boundary where automated analyzers
cannot understand the domain contract. Select review depth from the reachable
behavior of the diff: full for authorization, privacy, trust boundaries,
recovery, and rules that route security checks; targeted for a bounded
data-lifecycle change; semantic only after proving that inputs, controls,
persistence, logging, and recovery did not change.

## How to apply

1. Freeze the revision, diff, reachable behavior, and affected assets, actors,
   trust boundaries, public inputs, persisted data, and side effects. Select
   full, targeted, or semantic mode and retain evidence that the narrower mode
   is sufficient; select full when uncertain.
2. Build a bounded baseline of concrete abuse scenarios: authorization bypass,
   ownership substitution, leakage, replay, race, incorrect retry, and failed
   recovery, only where applicable. Trace each scenario from untrusted input
   through validation, persistence, and external effect.
3. After the baseline, run a differential pass: inspect the history of removed
   or weakened controls, determine blast radius through producers, consumers,
   and persisted data, then search neighboring entry points, workers,
   serializers, and clients for variants of the same defect.
4. Independently try to refute every candidate finding through reachability,
   an existing control, a test, or runtime evidence. Separate new confirmed
   findings, duplicates, rejected hypotheses, residual risks, and `BLOCKED`.
5. For a confirmed risk, choose the smallest regression guard: a test, design
   change, or explicit residual-risk acceptance by the owner. Remediation, an
   external scan, and new permissions require separate authorization.
6. Replay the negative scenario through a safe boundary and retain a
   `candidate → path → control → disposition → evidence → guard` matrix.
   Compare the incremental signal from the differential pass with the
   baseline; publish time and counts only under a predefined measurement
   contract.

## Success criterion

The risk is tied to a verifiable scenario and addressed by a test, design, or
explicit decision. The differential pass is justified when it produces a
reproducible non-duplicate signal or demonstrably prevents a false finding
without new permissions or disproportionate ceremony.

## Alternatives and limitations

Alternatives are a baseline threat review without history and variant search, a
full review for every change, or scanners as hypothesis sources. Always using
full mode creates ritual, while history and broad variant search can overload
context and increase false candidates. Manual review is subjective and must
end in a verifiable control or explicit residual-risk acceptance. Attacking
production, other people's data, or an external service without separate
authorization is prohibited.

## Revisit

Re-evaluate when the security model or review routing changes, reproducibility
is lost, incremental signal over the baseline disappears, or a cheaper
alternative appears.
