---
id: structured-human-feedback
entity: practice
decision: use
evidence: result-accepted
primary_direction: task-human-collaboration
tools: [agentation]
review_state: current
---

# Structure human feedback for the agent

## Desired outcome

Pass the route, state, viewport, and concrete issue instead of an unstructured retelling.

## When to apply

When a human sees a defect in a specific UI state and the agent lacks the route, viewport, or element reference.

## Success criterion

Feedback leads to a localized change without repeated context discovery.

## Limitations

It does not replace acceptance criteria and a reproducible scenario; free-form feedback without state remains ambiguous.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
