---
id: martin-clean-code
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: implementation-refactoring
practices: [contextual-code-quality-heuristics]
measurement: qualitative
review_state: current
---

# martin-clean-code

## Verdict

Accepted. Installed and validated after the book conversion.

## Demonstrated Value

Provides navigation across naming, functions, errors, boundaries, tests,
concurrency, and code smells without loading the whole book. Explicit and
implicit invocation and the negative-control approach were confirmed; there is
no aggregate activation counter.

## Limitations and Decision

The heuristics are not universal laws and should not trigger cosmetic
refactoring. Use them as a decision framework, with the local code as the source
of truth.
