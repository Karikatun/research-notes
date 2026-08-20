---
id: targeted-codebase-exploration
entity: practice
decision: use
evidence: result-accepted
primary_direction: context-codebase-research
related_directions: [efficiency-cost-observability]
tools: [graphify]
review_state: current
---

# Explore a codebase with targeted tools

## Desired outcome

Start with inexpensive search and add a graph or index only for a demonstrated gap.

## When to apply

For a concrete ownership, data-flow, or module-boundary question in an unfamiliar or large codebase.

## Success criterion

The answer is accurate, reproducible, and obtained with lower maintenance cost.

## Limitations

A persistent graph is unnecessary when targeted search, owning-path inspection, and tests already answer the question.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
