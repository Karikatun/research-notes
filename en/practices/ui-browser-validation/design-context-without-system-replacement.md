---
id: design-context-without-system-replacement
entity: practice
decision: use
evidence: result-accepted
primary_direction: ui-browser-validation
related_directions: [planning-design]
tools: [figma-mcp]
review_state: current
---

# Use design context without replacing the design system

## Desired outcome

Extract variables, assets, and screenshots as inputs while preserving the owning design system.

## When to apply

When implementing an existing design and the agent needs variables, assets, dimensions, and a concrete node state.

## Success criterion

Implementation matches supplied context and existing constraints.

## Limitations

Design access does not authorize replacing the design system, ignoring asset licenses, or treating a screenshot as the whole contract.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
