---
id: bounded-agent-implementation
entity: practice
decision: use
evidence: result-accepted
primary_direction: implementation-refactoring
related_directions: [agent-coordination-automation]
tools: [opencode]
review_state: current
---

# Delegate bounded implementation to an agent

## Desired outcome

Provide narrow ownership, acceptance criteria, and deterministic checks.

## When to apply

For a local feature, fix, or vertical slice with clear ownership and executable acceptance criteria.

## Success criterion

The change is accepted without scope creep or unverified side work.

## Limitations

Do not delegate a coupled architecture migration or unbounded cleanup without separate design and synthesis.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
