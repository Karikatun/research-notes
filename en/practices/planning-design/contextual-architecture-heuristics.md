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

## How to apply

1. Record the behavior being changed, current boundaries, dependency direction,
   contract producers and consumers, and the actual forces behind future change.
2. Form at least a local option and alternatives with a new boundary or
   abstraction; evaluate change cost, coupling, testability, and operational
   consequences.
3. Apply architecture heuristics as questions for the options, not as a
   mandatory set of layers, services, or patterns.
4. Choose the smallest solution that keeps policy with the correct owner; retain
   the selected option, rejected alternatives, and the forces that justified it.
5. If the choice changes the product, persistence, operational cost, or requires
   a migration, stop before implementation and obtain the owner's decision, an
   agreed plan, and the required authorization.
6. After authorized implementation, verify dependency direction, public
   contracts, and affected scenarios with architecture and behavior tests; for
   design-only work, retain only testable expectations.

## Success criterion

The decision lowers change cost and preserves dependency direction.

## Limitations

A heuristic does not prove the need for a service, layer, or pattern; the decision must follow change forces.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
