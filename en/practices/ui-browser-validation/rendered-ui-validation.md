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

Inspect real states, network behavior, accessibility, and user flows, not
source code alone.

## When to apply

For user flows, responsiveness, accessibility, signed-in state, network
behavior, and visual acceptance. Before the walkthrough, record the role,
route, starting state, target viewports, and primary observable signal. A local
fix needs only the affected states; a new or substantially changed critical
flow needs a complete matrix of applicable states.

## Success criterion

The scenario reproduces with realistic data in the required state and
viewport, including desktop and mobile when their risks differ. A primary
action requires its full bounding box to be reachable and unclipped by parent
containers, not merely partial viewport intersection. Evidence is separated
by role: a screenshot and rendered review record composition in the observed
state, E2E checks behavior and transitions, axe checks supported accessibility
rules, and a cognitive walkthrough or human review assesses clarity and
recovery.

## Limitations

Interactive exploration does not replace a durable E2E test, and a mock
scenario does not prove a live contract. Green E2E, axe, and screenshots are
not an automatic UX PASS: clarity, hierarchy, and full visibility require
separate rendered and human acceptance. A complete matrix for every cosmetic
fix becomes ritual; evidence scope must match risk.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
