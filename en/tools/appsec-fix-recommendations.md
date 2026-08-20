---
id: appsec-fix-recommendations
entity: tool
decision: limited-use
evidence: measured
stages: [installed, configured, invoked, completed]
primary_direction: verification-quality-security
related_directions: [implementation-refactoring]
practices: [separate-security-evidence-remediation, deterministic-agent-output-validation]
measurement: quantitative
review_state: current
---

# appsec-fix-recommendations skill

## Verdict

Adopted, but it is the main failure surface in the observed workflow and requires deterministic
post-validation.

## Demonstrated value

Defines install/typecheck/lint/build/test/integrationTest, safe dependency
resolutions, commit metadata, cleanup of the triage report, and structured
`success`.

## Failures and decision

12 of 19 recorded failed jobs ended at the fix stage. Causes included invalid
JSON, tool permissions, completion limits, and incompatible upgrades. Keep it,
split large SCA sets, and do not trust `success` without commands and a semantic
validator.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Remediating an AppSec finding set | Code-mutation skill | Manual executor | Commands and a semantic validator accept the result | partially accepted | 12 of 19 retained failed tasks stopped during remediation | Invalid JSON, permissions, completion limits, and incompatible upgrades | high |

## Measurement contract

The unit is one remediation task with a complete finding set and deterministic acceptance. The success denominator must include all eligible tasks; the retained 12 of 19 describes only the distribution of already failed tasks and is not an overall failure rate.
