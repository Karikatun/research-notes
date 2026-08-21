---
id: verify-remote-enforcement
entity: practice
decision: use
evidence: result-accepted
primary_direction: verification-quality-security
related_directions: [agent-coordination-automation]
tools: [github-cli]
review_state: current
---

# Verify actual remote enforcement

## Desired outcome

Do not infer branch protection or required CI from YAML alone; inspect effective settings.

## When to apply

When an agent claims CI, branch protection, permissions, or a remote-platform policy is enforced.

## Success criterion

The remote platform actually blocks the forbidden action. After a long local
gate or publication, fetch again and compare local HEAD with the exact remote
ref.

## Limitations

A read-only API may hide settings because of plan or permissions; lack of observation does not prove a control is disabled.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
