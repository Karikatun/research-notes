---
id: ponytail
entity: tool
decision: pilot
evidence: verified
stages: [installed, configured]
primary_direction: verification-quality-security
related_directions: [implementation-refactoring]
practices: [avoid-agent-overengineering]
measurement: qualitative
review_state: current
---

# Ponytail

## Verdict

The plugin is installed globally in OpenCode, but its actual value has not yet
been measured.

## Potential Value

Reviews for overengineering, unnecessary abstractions, and unjustified code.

## Actual Use

The checkout and plugin path exist; the history contains seven setup and
verification shell calls. There are no independently confirmed tasks improved
specifically by Ponytail.

## Decision

Keep `/ponytail-review` optional rather than making it a mandatory style. Fully
accept it only after several diff reviews demonstrate safe removals without
degrading readability, types, or tests.
