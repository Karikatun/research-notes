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
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/DietrichGebert/ponytail]
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

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Install an overengineering review globally | Optional review skill | Existing constraints and ordinary review | Confirmed removal of unnecessary code without regression | not accepted | Installation and availability were verified | No unique accepted result was found | high for installation, low for value |

## Decision

Keep `/ponytail-review` optional rather than making it a mandatory style. Fully
accept it only after several diff reviews demonstrate safe removals without
degrading readability, types, or tests.

## Official materials

- [Repository](https://github.com/DietrichGebert/ponytail)
