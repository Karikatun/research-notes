---
id: independent-subtask-delegation
entity: practice
decision: limited-use
evidence: result-accepted
primary_direction: agent-coordination-automation
related_directions: [efficiency-cost-observability]
tools: [codex-subagents]
review_state: current
---

# Delegate only independent subtasks

## Desired outcome

Provide narrow context and a verifiable result when synthesis costs less than local work.

## When to apply

When a subtask is independent, has narrow context, makes no product decisions, and returns a verifiable artifact.

## Success criterion

The delegate returns an acceptable result without full repeated research by the parent.

## Limitations

Delegation hurts when briefing and revalidation cost as much as local work or shared synthesis is required.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
