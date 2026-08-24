---
id: safe-external-system-operations
entity: practice
decision: limited-use
evidence: result-accepted
primary_direction: agent-coordination-automation
related_directions: [task-human-collaboration]
tools: [github-cli, yandex-cloud-cli]
review_state: current
---

# Operate external systems safely

## Desired outcome

Separate read-only diagnosis from mutation; require an exact target and explicit approval for changes.

## When to apply

For GitHub, cloud, and other external systems where diagnostic reads are safer than state mutation.

## How to apply

1. Before contacting the system, record the exact account, environment, resource,
   operation, expected baseline, and permitted state change.
2. Run a read-only preflight: read the authoritative state, verify the active
   identity, permissions, and preconditions, and retain a sanitized snapshot
   without secrets.
3. Determine whether the action is reversible or destructive and whether it
   affects production or publication; obtain explicit authorization for that
   exact mutation. Do not extend the authorization to adjacent resources or
   actions.
4. Where supported, use a dry run, a baseline precondition, an idempotency key,
   and a prevalidated rollback method. Stop before mutation if the target or
   preconditions do not match.
5. Perform one minimal operation. Do not automatically retry after a timeout or
   another response with an unknown outcome.
6. Read the authoritative state again and compare it with the permitted change;
   retain sanitized operation parameters, identifier, status, and result. Stop
   and report any mismatch or uncertainty.

## Success criterion

Only the confirmed target changes and the result is verified against external state.

## Limitations

Even explicit approval does not broaden the target; destructive, production, and publication actions require separate verification.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
