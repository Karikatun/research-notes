---
id: design-context-without-system-replacement
entity: practice
decision: use
evidence: result-accepted
primary_direction: ui-browser-validation
related_directions: [planning-design]
tools: [figma-mcp, pen-dev]
review_state: current
---

# Use design context without replacing the design system

## Desired outcome

Extract variables, assets, and screenshots as inputs while preserving the owning design system.

## When to apply

When implementing an existing design and the agent needs variables, assets, dimensions, and a concrete node state.

## How to apply

1. Freeze the concrete node or screen, variant, state, viewport, owning
   design-system version, and required asset formats.
2. Retrieve only the required variables, dimensions, screenshots, and assets;
   retain the design-artifact identifier and verify access and usage rights.
3. Map every element to existing tokens, primitives, and interaction rules.
   Record discrepancies and unresolved decisions separately instead of deriving
   a new system from a screenshot.
4. Prepare a `context → owning rule → implementation point → unknown` brief;
   keep any visual detail without a contract as a hypothesis.
5. If only context gathering is authorized, stop at the brief and evidence.
   Changing the design system, importing a licensed asset, or making a product
   choice requires separate approval.
6. After authorized implementation, compare the rendered result with the same
   node and states, check responsive behavior and accessibility, and record drift
   on both sides.

## Success criterion

Implementation matches supplied context and existing constraints.

## Limitations

Design access does not authorize replacing the design system, ignoring asset licenses, or treating a screenshot as the whole contract.
A repository-local design artifact also requires drift control against code.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
