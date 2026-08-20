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

## Success criterion

The risk is tied to a verifiable scenario and addressed by a test, design, or explicit decision.

## Limitations

Manual review is subjective and must end in a verifiable control or explicit residual-risk acceptance.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
