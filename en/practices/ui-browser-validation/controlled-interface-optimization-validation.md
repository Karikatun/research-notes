---
id: controlled-interface-optimization-validation
entity: practice
decision: use
evidence: result-accepted
primary_direction: ui-browser-validation
related_directions: [planning-design, verification-quality-security]
tools: [axe-core, codex-in-app-browser, playwright]
review_state: current
---

# Validate interface optimization with a comparable before and after

## Desired outcome

Prove that a bounded change improved the target user signal without breaking
behavior, responsiveness, accessibility, or neighboring states.

## When to apply

When changing hierarchy, density, duplication, the primary action, long
content, or responsive composition. Before editing, record the same route,
state, data, viewport, and specific problem. Then test one bounded hypothesis
and replay the same scenario. For UI foundation normalization, the baseline
may include repeated raw values, tokens, and component patterns, but it must be
supplemented with populated rendered states.

## Success criterion

The same criterion moves from a confirmed problem to `PASS`, and the replay
finds no new functional, accessibility, privacy, overflow, or recovery
regressions. A visual task is supported by rendered review and geometry;
behavior is supported by E2E. A test may change only after evidence shows that
the measurement, rather than the interface, was wrong. A lower raw-value count
shows that the chosen baseline changed, but does not by itself prove
normalization, quality, or usability.

## Alternatives and limitations

Without a reproducible baseline, improvement remains a hypothesis. A pixel
diff can reject a safe shift or accept an unclear screen, so a screenshot does
not replace a scenario and human review. Cosmetic details are automated only
when they are a durable contract. New information architecture or a product
choice requires separate option comparison and approval, not a hidden
“optimization.”

## Revisit

Re-evaluate when the scenario, design system, or target viewports change, or
when the baseline is no longer reproducible.
