---
id: rendered-ui-validation
entity: practice
decision: use
evidence: result-accepted
primary_direction: ui-browser-validation
related_directions: [verification-quality-security]
tools: [axe-core, codex-in-app-browser, playwright-mcp, playwright, chrome-devtools-mcp]
review_state: current
---

# Validate the rendered UI in a browser

## Desired outcome

Inspect real states, network behavior, accessibility, and user flows, not source code alone.

## When to apply

For user flows, responsiveness, accessibility, signed-in state, network behavior, and visual acceptance.

## Success criterion

The scenario reproduces in the required state and viewport. A primary action
requires its full bounding box to be reachable and unclipped by parent
containers, not merely partial viewport intersection.

## Limitations

Interactive exploration does not replace a durable E2E test, and a mock
scenario does not prove a live contract. Green E2E, axe, and screenshots are
not an automatic UX PASS: clarity, hierarchy, and full visibility require
separate rendered and human acceptance.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
