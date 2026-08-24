---
id: design-options-before-implementation
entity: practice
decision: use
evidence: result-accepted
primary_direction: planning-design
related_directions: [ui-browser-validation]
tools: [codex-in-app-browser, open-design, taste-skill, pen-dev]
review_state: current
---

# Explore options before implementation

## Desired outcome

Use design tools for options and critique without creating a second source of truth.

## When to apply

When the interface direction is not yet accepted or a concrete composition, density, or hierarchy problem exists.

Compared variants use the same scenario, data, actions, and states so that the
decision concerns information architecture and interaction rather than
different fixtures. For a new flow, variants cover applicable desktop/mobile
and loading, empty, error, success, disabled, validation, retry, recovery, and
long-content states.

## Success criterion

The selected option is checked against product constraints and explicitly
accepted by the responsible human. The first generated result receives no
special status: rejection and another iteration are normal parts of the
criterion. The decision records accepted and rejected variants, while the
production UI is validated separately after implementation.

## Limitations

Do not reopen an accepted design system without a new product problem.
A versioned canvas is not a production contract without human acceptance and
validation of the implemented interface.
A running process or HTTP response does not prove that the correct route and
styles are loaded; the actual rendered result must be inspected before choosing.
A throwaway prototype proves composition and states, but not APIs,
persistence, security, or production quality; its code is not transferred
automatically.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
