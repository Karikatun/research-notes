---
id: yandex-cloud-cli
entity: tool
decision: limited-use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: agent-coordination-automation
related_directions: [task-human-collaboration]
practices: [safe-external-system-operations]
measurement: telemetry
availability: account-gated
source_access: unknown
origin: upstream
official_urls: [https://yandex.cloud/en/docs/cli/]
review_state: recheck
---

# Yandex Cloud CLI

## Verdict

Adopted for read-only diagnosis and controlled cloud operations through a
runbook.

## Actual use

Version `1.20.0`; at least 45 direct calls across four cloud-diagnostics sessions.

## Demonstrated value

It verified VM state, scheduler behavior, and cloud resources without guessing.
`RUNNING` is correctly kept separate from container and public readiness.

## Failures and limitations

Inside the sandbox, the CLI could not write or rotate its own trace logs,
although `yc version` succeeded. Any production change requires a runbook, an
exact target, and separate authorization.

## Telemetry contract

The unit is a completed event for the exact tool or command in available local task logs. The count separates invocation, technical completion, and accepted result; raw logs are not published. Recalculate with the same filter after a new meaningful event set accumulates or the log schema changes.
