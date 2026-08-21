---
id: semgrep
entity: tool
decision: use
evidence: result-accepted
stages: [documented, configured, invoked, completed, result-accepted]
primary_direction: verification-quality-security
practices: [separate-security-evidence-remediation]
measurement: qualitative
availability: public
source_access: open-source
origin: upstream
official_urls: [https://docs.semgrep.dev/category/local-and-cli-scans]
review_state: current
---

# Semgrep

## Verdict

Accepted as one reproducible static-analysis layer, but not as proof of
behavioral security.

## Role in agent-assisted development

Gives the agent and CI the same rules for finding risky constructs before the
application runs. A finding remains input to a separate review and remediation
step.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Static security check of agent changes | Local and CI rules | Manual review only | The same configuration reproducibly detects a control defect | accepted | Static signal became part of the shared barrier | False-positive review and behavioral tests remain necessary | high |

## Limitations

It does not prove authorization, isolation, races, replay handling, or recovery.
Rules can age and need pinned versions plus control examples.

## Decision

Keep it as a SAST layer. Accept remediation only after focused tests and a
separate check of the affected invariant.

## Official materials

- [Local and CLI scan documentation](https://docs.semgrep.dev/category/local-and-cli-scans)
