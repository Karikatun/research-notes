---
id: behavioral-security-validation
entity: practice
decision: use
evidence: result-accepted
primary_direction: verification-quality-security
tools: [application-security-review]
review_state: current
---

# Validate security behavior, not scanner presence

## Desired outcome

Complement SAST, SCA, and DAST with authorization, isolation, race, replay, and recovery tests.

## When to apply

For authorization, ownership, privacy, concurrency, replay, idempotency, and recovery changes.

## Success criterion

A concrete system invariant that scanners cannot prove is verified.

## Limitations

Scenarios are costly and must match the actual threat model; a random security-test set creates false confidence.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
