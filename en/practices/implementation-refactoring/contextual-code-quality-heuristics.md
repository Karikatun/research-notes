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

## Success criterion

The change becomes clearer without unnecessary abstraction or behavior change.

## Limitations

Do not turn taste heuristics into a broad refactor or change a public contract for stylistic form.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
