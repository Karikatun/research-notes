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

Before accepting a change on a sensitive boundary where automated analyzers cannot understand the domain contract.

## How to apply

1. Freeze the affected assets, actors, trust boundaries, public inputs,
   persisted data, and side effects of the change.
2. Build a bounded set of concrete abuse scenarios: authorization bypass,
   ownership substitution, leakage, replay, race, incorrect retry, and failed
   recovery, only where applicable.
3. Trace each scenario from untrusted input through validation, persistence,
   and external effect; identify the existing control and observable evidence
   that it works.
4. Assess reachability and impact, separate confirmed risk from inference, and
   record unknown conditions as `BLOCKED` or a hypothesis.
5. For a confirmed risk, choose a test, design change, or explicit acceptance
   of residual risk by the responsible owner. Implementation requires separate
   authorization.
6. Replay the negative scenario through a safe boundary and retain the result.
   Attacking production, other people's data, or an external service without
   separate authorization is prohibited.

## Success criterion

The risk is tied to a verifiable scenario and addressed by a test, design, or explicit decision.

## Limitations

Manual review is subjective and must end in a verifiable control or explicit residual-risk acceptance.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
