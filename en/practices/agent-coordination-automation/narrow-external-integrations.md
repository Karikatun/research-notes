---
id: narrow-external-integrations
entity: practice
decision: limited-use
evidence: result-accepted
primary_direction: agent-coordination-automation
tools: [bitbucket-mcp]
review_state: current
---

# Prefer a narrow integration over a full server

## Desired outcome

Connect the smallest interface and permission set that covers the operation.

## When to apply

When an agent needs one external operation and a full server adds permissions, runtime, and maintenance.

## How to apply

1. Describe one external operation: target resource, data direction, required
   fields, read or write mode, and the expected response or state change.
2. Compare the native CLI or API, a narrow adapter, and a full server by the
   required capability, permissions, runtime, and maintenance; retain the
   resulting decision matrix.
3. Choose the least-privileged interface and record the request,
   authentication, error, and retry contract in use.
4. Obtain the corresponding explicit authorization before installation, account
   connection, or external-state mutation; start with an isolated read-only
   check where possible.
5. Run one bounded scenario and retain the sanitized request shape, final status,
   granted-permission list, and replay method without secrets or raw logs.
6. For a write, read the authoritative external state again; for a read, verify
   the completeness of required fields. If the operation set grows or custom
   protocol logic accumulates, stop and compare the options again.

## Success criterion

The integration solves the task with less maintenance and permission surface.

## Limitations

A narrow adapter must not become an unsupported custom client; reconsider when operation count grows.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
