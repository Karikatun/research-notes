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

## How to apply

1. Express invariants through actor, resource, action, expected allow or deny,
   persisted effect, and recovery.
2. Choose the nearest public boundary and prepare isolated fixtures for the
   owner, another user, a repeated request, and a concurrent case.
3. Run the positive scenario and applicable negative scenarios: IDOR, replay,
   race, stale state, partial failure, and recovery.
4. Verify not only the response but also persisted state, side effects, audit
   trail, and absence of leakage; retain a safe
   `invariant → evidence → status` matrix.
5. After an authorized fix, repeat the complete affected matrix and ordinary
   scanners as a secondary signal. An unverified scenario receives `NOT RUN`,
   not `PASS`.
6. Do not apply a destructive or abuse scenario to production data or external
   systems without separate authorization and a verified impact boundary.

## Success criterion

A concrete system invariant that scanners cannot prove is verified.

## Limitations

Scenarios are costly and must match the actual threat model; a random security-test set creates false confidence.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
