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

## Success criterion

The integration solves the task with less maintenance and permission surface.

## Limitations

A narrow adapter must not become an unsupported custom client; reconsider when operation count grows.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
