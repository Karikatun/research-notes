---
id: structured-human-feedback
entity: practice
decision: use
evidence: result-accepted
primary_direction: task-human-collaboration
related_directions: [ui-browser-validation]
tools: [agentation, lavish-axi]
review_state: current
---

# Structure human feedback for the agent

## Desired outcome

Pass the route, state, viewport, artifact element or fragment, and concrete issue
instead of an unstructured retelling.

## When to apply

When a human sees a defect in a specific UI state or has a comment on a complex
plan, table, or diagram and the agent lacks the route, viewport, or precise
element and text reference.

## Success criterion

Feedback leads to a localized change without repeated context discovery or an
extra clarification about which part the comment targets.

## Limitations

It does not replace acceptance criteria, content verification, and a
reproducible scenario. A structured target does not make incorrect advice
correct.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
