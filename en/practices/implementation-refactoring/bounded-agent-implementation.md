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

## How to apply

1. Give the agent the input context, exact ownership boundary, allowed surfaces,
   excluded scope, and a rule to preserve concurrent changes.
2. Define a small set of observable acceptance criteria, the primary result
   signal, and deterministic commands or scenarios for verification.
3. Have the agent inspect nearby producers, consumers, and existing test seams,
   then implement only the coherent slice it owns.
4. Require early reporting of ownership conflicts, missing decisions, or scope
   expansion; the agent must not turn a local task into a migration or cleanup.
5. Retain a focused diff, a concise mapping from criteria to evidence, results of
   targeted and mandatory checks, and explicitly unverified boundaries.
6. Stop before destructive, external, security-sensitive, or architecture-
   expanding action without the required authorization; accept the work only
   when it contains no hidden side scope.

## Success criterion

The change is accepted without scope creep or unverified side work.

## Limitations

Do not delegate a coupled architecture migration or unbounded cleanup without separate design and synthesis.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
