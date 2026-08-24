---
id: contextual-code-quality-heuristics
entity: practice
decision: use
evidence: result-accepted
primary_direction: implementation-refactoring
tools: [martin-clean-code]
review_state: current
---

# Apply code-quality heuristics contextually

## Desired outcome

Use naming, function, and boundary rules as questions for the code, not as mechanical style.

## When to apply

After behavior is correct, when a concrete smell makes code harder to understand, test, or change.

## How to apply

1. Record the correct baseline behavior, public contract, and passing checks
   before starting the refactor.
2. Name the concrete smell and its observed cost to understanding, testing, or
   change; do not begin a broad cleanup from an abstract rule.
3. Choose the smallest coherent seam and state the invariants to preserve; add a
   characterization test first when behavior is fragile.
4. Refactor locally without changing behavior, the public contract, or unrelated
   areas; do not introduce an abstraction without current variability.
5. Repeat targeted and applicable broader checks, inspect the diff, and confirm
   the improvement in clarity or testability.
6. Stop and redesign separately if the work requires a migration, a new public
   contract, a broad change, or a product decision.

## Success criterion

The change becomes clearer without unnecessary abstraction or behavior change.

## Limitations

Do not turn taste heuristics into a broad refactor or change a public contract for stylistic form.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
