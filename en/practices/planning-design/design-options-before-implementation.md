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

## How to apply

1. Fix the same scenario, data, actions, constraints, and matrix of applicable
   desktop/mobile and system states for every option.
2. Create several materially different throwaway options outside the production
   UI without turning the first result or a canvas into a second source of truth.
3. Open each option's actual route, verify that its styles are loaded, and
   visually walk through states, keyboard and focus behavior, responsive layout,
   and long content.
4. Compare the options against predefined product, information architecture,
   interaction, accessibility, and usability criteria; retain the comparison,
   observations, and open questions without assigning a final status.
5. Obtain an explicit decision from the responsible human, then retain the
   accepted and rejected options; otherwise stop and do not transfer prototype
   code into the product.
6. After a separate implementation, validate the production UI against the same
   matrix and retain rendered evidence and a cognitive walkthrough; the prototype
   does not prove APIs, persistence, or security.

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
