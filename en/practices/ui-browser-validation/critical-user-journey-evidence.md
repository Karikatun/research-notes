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

## How to apply

1. Create the matrix before running checks: stable identifier, reviewed-artifact
   identifier or `N/A` before implementation, role, step, state, viewport, input
   method, criterion, expected observation, evidence, status, and linked issue.
2. Fix the test data, starting URL, session state, and reset method. Reproduce
   every state through a safe fixture or test API in an isolated environment. Do
   not perform an irreversible production action merely for verification: without
   a safe isolated fixture, the row remains `BLOCKED`. A separate production
   operation requires its own authorization and is not part of this matrix. Mark
   inapplicable rows `N/A` rather than removing them from the denominator.
3. Traverse the primary path from the recorded starting state first, then
   reproduce applicable loading, empty, validation, error, retry, recovery,
   disabled-action, and long-content states separately.
4. Obtain evidence for every executed `PASS` or `FAIL` row: browser inspection
   for rendering, geometry, keyboard, and focus; E2E for behavior; and an
   accessibility scan for its automatable part. Retain a reproducible rationale
   for every `N/A`, `BLOCKED`, or `NOT RUN` status. One artifact may support
   multiple rows only when it links explicitly to each row's observation.
5. Assign every `FAIL` an owning layer and a retest method. After an authorized
   fix, replay the affected row, neighboring states, and then the full critical
   journey with the same identifiers.
6. Prepare and return the completed matrix, totals for every status, and the
   `NOT RUN` list in the report. External publication requires separate
   authorization and sanitized identifiers. If the task was review-only, stop
   at the report and do not modify the product, tests, or expected screenshots
   without separate authorization.

## Success criterion

Every stable criterion receives `PASS`, `FAIL`, `N/A`, `BLOCKED`, or `NOT RUN`.
`PASS` and `FAIL` retain reproducible evidence of the observed result; `N/A`,
`BLOCKED`, and `NOT RUN` retain a reproducible rationale and support for the
status itself. There are no missing applicable states, duplicates, or `PASS`
results without evidence. The same identifier persists across the baseline, the
change, and retesting. Required desktop and mobile viewports,
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
