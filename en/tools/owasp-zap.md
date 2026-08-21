---
id: owasp-zap
entity: tool
decision: limited-use
evidence: verified
stages: [documented, configured]
primary_direction: verification-quality-security
practices: [separate-security-evidence-remediation]
measurement: qualitative
availability: public
source_access: open-source
origin: upstream
official_urls: [https://www.zaproxy.org/]
review_state: current
---

# OWASP ZAP

## Verdict

Allowed only as a bounded DAST pilot against an explicitly isolated test
environment; configuration alone is not a completed scan.

## Role in agent-assisted development

It can provide dynamic findings from a running HTTP surface when a
machine-readable contract and a disposable safe target exist.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Prepare dynamic security scanning | DAST scanner | Manual requests | A disposable target and explicit impact contract exist | partial | Configuration was retained while active scanning waited for a safe environment | Scanning the wrong target could mutate data or create load | high |

## Limitations

Do not run it against production or an environment outside the task. Even a
green DAST result does not prove IDOR, isolation, races, replay handling, or
recovery.

## Decision

Keep it capability-gated. A pilot requires explicit approval, target
confirmation, and state recovery.

## Official materials

- [Official site](https://www.zaproxy.org/)
