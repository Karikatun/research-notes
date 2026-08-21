---
id: opencode
entity: tool
decision: limited-use
evidence: tried
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: implementation-refactoring
related_directions: [agent-coordination-automation]
practices: [bounded-agent-implementation, deterministic-agent-output-validation]
measurement: telemetry
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/anomalyco/opencode]
review_state: current
---

# OpenCode

## Verdict

Adopted as an application execution agent, but its reliability is not determined by
the model alone: project-local skills, retry context, and validators are
mandatory.

## Actual use

- Installed version: `1.17.15`.
- At least 110 direct shell calls across ten sessions.
- The retained execution history contains 24 final job snapshots: 5 done and 19 failed.

## Measured data

End-to-end completion is 20.8%. This is not a model success rate: errors
included permissions, registry/TLS, Node setup, invalid JSON, verification, and
push/PR failures.

## Demonstrated value

Automates triage, fixes, checks, commit metadata, and the PR workflow. After
hardening, 28/28 focused and 79/79 full application tests passed.

## Failures and limitations

Tool rejection despite exit code zero, schema errors, completion limits,
truncation cleanup, incompatible dependency upgrades, and lost context between
retries.

Public OpenCode and an internal model provider connected to it are separate
entities. Provider success or failure must not be attributed to the upstream
tool without separate classification.

## Decision

Keep it, but treat the model as an untrusted component. Deterministic validators
and actual checks are the final barrier.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Autonomous remediation | External execution agent | Primary-agent implementation | End-to-end completion with deterministic checks | partially accepted | 5 of 24 retained tasks completed; a separate hardening contour passed 79 of 79 tests | Most tasks required rework or stopped outside model reasoning | medium |

## Telemetry contract

The unit is a completed event for the exact tool or command in available local task logs. The count separates invocation, technical completion, and accepted result; raw logs are not published. Recalculate with the same filter after a new meaningful event set accumulates or the log schema changes.

## Official materials

- [github.com](https://github.com/anomalyco/opencode)
