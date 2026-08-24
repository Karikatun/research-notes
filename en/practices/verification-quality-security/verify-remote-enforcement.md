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

## How to apply

1. State the claim to verify: which branch, permission, required check, or
   policy must block which action; freeze the exact remote and ref.
2. Read the platform's live configuration through a read-only API or interface
   and retain safe evidence of the effective rules. Treat YAML and local hooks
   only as configuration sources.
3. Match the actual status-check names, rule scope, exceptions, permission
   owners, and current result for the exact commit.
4. If it is safe and separately authorized, exercise a negative case in an
   isolated branch or test area. Do not attempt a forbidden push to a working
   branch merely to obtain evidence.
5. After a long local gate or publication, fetch again, compare local HEAD with
   the exact remote ref, and inspect CI for that SHA.
6. Stop with `BLOCKED` when permissions or plan limitations prevent
   observation. Changing remote rules, permissions, or branches requires
   separate authorization.

## Success criterion

The remote platform actually blocks the forbidden action. After a long local
gate or publication, fetch again and compare local HEAD with the exact remote
ref.

## Limitations

A read-only API may hide settings because of plan or permissions; lack of observation does not prove a control is disabled.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
