---
id: critical-user-journey-evidence
entity: practice
decision: limited-use
evidence: result-accepted
primary_direction: ui-browser-validation
related_directions: [verification-quality-security]
tools: [axe-core, codex-in-app-browser, playwright]
review_state: current
---

# Validate a critical user journey with an evidence matrix

## Desired outcome

Make validation of a new or substantially changed critical flow complete and
reproducible by linking the role, goal, steps, states, and criteria to
observable evidence.

## When to apply

For access and recovery, privacy and consent, irreversible changes, and other
journeys where a mistake materially changes user access, data, or outcome.
Before implementation or an independent rendered review, record the role and
goal, preconditions, starting route, ordered steps, observable successful
outcome, and applicable loading, empty, error, success, disabled, validation,
retry, recovery, and long-content states.

## Success criterion

Every stable criterion receives `PASS`, `FAIL`, `N/A`, or `BLOCKED` plus
reproducible evidence. There are no missing applicable states, duplicates, or
`PASS` results without evidence. The same identifier persists across the
baseline, the change, and retesting. Required desktop and mobile viewports,
keyboard, focus, and recovery are checked for the affected surface. Every
discovered problem is linked to its step and state, evidence, disposition, and
stable identifier, and remains `FAIL` until a confirmed retest.

## Alternatives and limitations

A local regression, copy, accessibility, or exact-conformance fix usually
needs selected states and rendered evidence without a complete ID matrix. The
matrix does not replace product acceptance, a cognitive walkthrough, or
research with real users. A green E2E or accessibility scan does not declare a
usability PASS.

## Revisit

Re-evaluate when critical journeys, the state model, or evidence tools change,
or when the ceremony stops producing new useful signal.
