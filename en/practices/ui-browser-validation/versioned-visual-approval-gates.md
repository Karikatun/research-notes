---
id: versioned-visual-approval-gates
entity: practice
decision: limited-use
evidence: result-accepted
primary_direction: ui-browser-validation
related_directions: [task-human-collaboration, verification-quality-security]
tools: [playwright, project-ui-contract-gate]
review_state: current
---

# Protect visual baselines with versioned approval

## Desired outcome

Prevent a coding agent from silently changing the visual oracle or extending
acceptance beyond an explicitly approved surface, scenario, and state.

## When to apply

For a mature multi-surface interface with stable approved states, shared
source/build inputs, and multiple change authors. The practice is justified
when ordinary snapshot updates create a self-acceptance risk and blocking
unknown impact is cheaper than a hidden visual regression.

## How to apply

1. Separate the product oracle from the machine impact map. Explicitly list
   active scenarios and states for each surface; treat everything unspecified
   as blocked rather than implicitly accepted.
2. Bind an approved scenario to an actor, route, fixture/state, viewport,
   platform, pinned renderer, specification, and baseline hash. Keep the
   responsible human's decision separate from generated evidence.
3. For degraded success, declare the exact request and failure that must occur,
   together with the permitted side-effect budget. Verify preserved fallback
   semantics and accessibility, the expected failure, no undeclared writes,
   requests, or errors, no horizontal overflow, and a match against the
   approved screenshots.
4. Assign every production source a single owning surface and fail closed on an
   unknown input, ambiguous ownership, or a shared source that reaches a blocked
   surface.
5. Verify the exact staged tree, not an arbitrary working directory. Run the
   renderer with pinned configuration, no snapshot-update mode, and no authority
   to declare its own output a product `PASS`.
6. Accept an oracle, specification, or baseline change only after a separate
   explicit decision and a new append-only record. A source change under the
   same oracle requires a new render; zero pixel diff does not require renewed
   approval.
7. Verify behavior, accessibility, and clarity separately with E2E,
   accessibility checks, rendered review, and human acceptance. Pixel match
   confirms only the listed visual contract.
8. Report the checked revision, affected active and blocked states, comparison
   result, and residual boundaries; do not turn blocked surfaces into a general
   `PASS`.

## Success criterion

An authorized source-only change passes only for the exact staged tree and a
match against the approved oracle. Any attempt to change the baseline,
specification, approval, or an unknown shared input at the same time is blocked
until a separate decision. The accepted UI result remains linked to a
reproducible scenario, while unspecified states remain explicitly outside the
evidence.

For degraded success, the declared failure is additionally reproduced, the
fallback preserves its stated meaning and accessible name, and the budget for
undeclared writes, requests, errors, and overflow remains zero.

## Alternatives and limitations

For a local cosmetic fix, comparable before-and-after screenshots, rendered
review, and E2E are usually cheaper. An ownership registry, transition history,
and isolated renderer add substantial maintenance and can block safe changes to
shared files. The gate does not choose good design, prove usability, or replace
human approval; without a stable oracle it becomes ritual process. If the
fixture does not pin the exact expected failure and side-effect budget, a green
screenshot can normalize the wrong degradation or hide excess requests.

## Revisit

Re-evaluate when source ownership, the renderer, or the approval format changes;
when false blocks accumulate; when reproducibility is lost; or when a cheaper
way to prevent snapshot self-acceptance appears.
