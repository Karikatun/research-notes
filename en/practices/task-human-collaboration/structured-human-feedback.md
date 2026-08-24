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

## How to apply

1. Record the route or artifact, state, viewport size, reproduction step, and
   expected outcome.
2. Attach the comment to a specific element, text fragment, or image region and
   describe the observed problem without assuming its cause.
3. Reproduce the stated condition and confirm that the reference points to the
   intended location; stop and request clarification if it does not.
4. If the task is limited to feedback review, or if the comment changes the
   product contract, design system, or task scope, stop at the reproduced finding
   and request a decision or authorization for the change.
5. After authorization, make the smallest localized change while retaining the
   original feedback record and evidence of the state before the change.
6. Repeat the same scenario and check directly related states; retain the result
   after the change and its correspondence to the reported issue.

## Success criterion

Feedback leads to a localized change without repeated context discovery or an
extra clarification about which part the comment targets.

## Limitations

It does not replace acceptance criteria, content verification, and a
reproducible scenario. A structured target does not make incorrect advice
correct.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
