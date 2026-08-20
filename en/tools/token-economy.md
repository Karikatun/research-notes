---
id: token-economy
entity: tool
decision: limited-use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: efficiency-cost-observability
practices: [credits-per-accepted-task]
measurement: quantitative
review_state: current
---

# token-economy

## Verdict

Accepted as a mandatory workflow for non-trivial tasks, but its economic effect
cannot yet be demonstrated without comparable cohorts.

## Demonstrated Value

Established selection of the minimum sufficient model, bounded delegation,
context control, and a consistent usage report. Helped distinguish
`estimated_credits` from non-billing `effective_tokens`.

## Limitations

The current long thread and different task classes cannot be compared directly.
Evidence of savings requires at least 12 accepted priced tasks before and after
within the same class, without a quality regression.

## Decision

Keep it. Do not claim savings based only on cache rate or effective tokens.

## Measurement contract

The unit is an accepted priced task in one class. Cohorts use identical checks and require at least 12 tasks each. The primary metric is median estimated credits; guards are first-pass acceptance, rework, and critical regressions. Economic effect remains unknown until cohorts are sufficient.
