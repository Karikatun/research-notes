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
official_urls: [https://www.zaproxy.org/, https://www.zaproxy.org/docs/nowaspzap/]
review_state: current
---

# ZAP

## Verdict

Allowed only as a bounded DAST pilot against an explicitly isolated test
environment. The safe report-publication contract is verified, but
configuration and unit checks of the orchestrator do not constitute a
completed DAST run or an accepted scan result.

## Role in agent-assisted development

It can provide dynamic findings from a running HTTP surface when a
machine-readable contract and a disposable safe target exist. A retained
result must also separate raw output from a complete sanitized set and must not
publish a partial artifact.

## Access and origin

A public open-source upstream tool. Its current official name is ZAP; the
former OWASP ZAP name is outdated. The catalog evaluates its bounded safe
integration into an agent workflow, not the mere availability of the scanner.

## Observed use

The orchestrator and workflow are configured for an isolated target. A
fail-closed pipeline was also implemented and verified: expected raw reports are
read as regular files without following symlinks, credentials are removed, the
complete set is published atomically with restricted permissions, raw data is
removed, and missing artifacts and cleanup failures remain explicit. No active
scan result was accepted.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Prepare dynamic security scanning | DAST scanner | Manual requests | A disposable target and explicit impact contract exist | partial | Configuration was retained while active scanning waited for a safe environment | Scanning the wrong target could mutate data or create load | high |
| Protect report publication for a configured authenticated scan | Raw security-artifact source | Retain no report or sanitize already published files in place | Only a complete sanitized set is visible; unsafe or incomplete input is not published; raw data is removed; stage failures remain distinct | partial | Targeted tests verified the publication and cleanup contract | The orchestrator became more complex; neither DAST finding quality nor sanitization of every sensitive-data class was proved | high |

## Limitations

Do not run it against production or an environment outside the task. Even a
green DAST result does not prove IDOR, isolation, races, replay handling, or
recovery. Removing a known credential from the report does not replace review
for other sensitive data.

## Decision

Keep it capability-gated. A pilot requires explicit approval, target
confirmation, and state recovery. Re-evaluate when the report format,
credential transport, cleanup, or artifact workflow changes, and raise the
evidence level only after the scan result itself is accepted.

## Official materials

- [Official site](https://www.zaproxy.org/)
- [Official naming clarification](https://www.zaproxy.org/docs/nowaspzap/)
