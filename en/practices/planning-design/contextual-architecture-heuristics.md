---
id: contextual-architecture-heuristics
entity: practice
decision: use
evidence: result-accepted
primary_direction: planning-design
tools: [martin-clean-architecture]
review_state: current
---

# Apply architecture heuristics contextually

## Desired outcome

Use architectural knowledge as decision vocabulary, not as an automatic demand for a pattern or service.

## When to apply

When a change introduces a boundary, dependency, persistence mechanism, or substantial future change cost.

## Success criterion

The decision lowers change cost and preserves dependency direction.

## Limitations

A heuristic does not prove the need for a service, layer, or pattern; the decision must follow change forces.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
