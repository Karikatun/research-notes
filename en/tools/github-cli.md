---
id: github-cli
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: agent-coordination-automation
related_directions: [task-human-collaboration]
practices: [safe-external-system-operations, verify-remote-enforcement]
measurement: telemetry
review_state: current
---

# GitHub CLI

## Verdict

Adopted as the primary agent interface to GitHub.

## Actual use

Version `2.96.0`; at least 25 direct shell calls across six sessions. Used for
CI logs, repository settings, visibility, PRs and checks, and live verification.

## Demonstrated value

Provides structured current state and exact failed steps, making it more
reliable than browser UI for automation diagnosis.

## Limitations and decision

Workflow YAML does not prove active enforcement: check rulesets and required
checks separately. Mutating commands, pushes, and PRs remain authorization
gated.

## Telemetry contract

The unit is a completed event for the exact tool or command in available local task logs. The count separates invocation, technical completion, and accepted result; raw logs are not published. Recalculate with the same filter after a new meaningful event set accumulates or the log schema changes.

## Official materials

- [github.com](https://github.com/cli/cli)
