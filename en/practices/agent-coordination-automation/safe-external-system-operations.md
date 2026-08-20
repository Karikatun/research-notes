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

## Success criterion

Only the confirmed target changes and the result is verified against external state.

## Limitations

Even explicit approval does not broaden the target; destructive, production, and publication actions require separate verification.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
