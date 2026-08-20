---
id: rendered-ui-validation
entity: practice
decision: use
evidence: result-accepted
primary_direction: ui-browser-validation
related_directions: [verification-quality-security]
tools: [codex-in-app-browser, playwright-mcp, playwright, chrome-devtools-mcp]
review_state: current
---

# Validate the rendered UI in a browser

## Desired outcome

Inspect real states, network behavior, accessibility, and user flows, not source code alone.

## When to apply

For user flows, responsiveness, accessibility, signed-in state, network behavior, and visual acceptance.

## Success criterion

The scenario reproduces in the required state and viewport.

## Limitations

Interactive exploration does not replace a durable E2E test, and a mock scenario does not prove a live contract.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
