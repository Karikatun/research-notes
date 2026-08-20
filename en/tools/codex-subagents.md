---
id: codex-subagents
entity: tool
decision: limited-use
evidence: result-accepted
stages: [configured, invoked, completed, result-accepted]
primary_direction: agent-coordination-automation
related_directions: [efficiency-cost-observability]
practices: [independent-subtask-delegation]
measurement: telemetry
review_state: current
---

# Codex subagents

## Verdict

Adopted for independent narrow subtasks, but not as an automatic way to speed
up every task.

## Measured data and demonstrated value

The selected history records 40 `spawn_agent` calls, 68 follow-ups, and hundreds
of coordination messages and waits. Parallelism helped independent audits and
exploration, but there is no shared acceptance/credit denominator.

## Limitations and decision

Context transfer and synthesis may cost more than local work. Use only a bounded
brief with an independent acceptance check; the primary agent always owns the
conclusion and quality gates.

## Telemetry contract

The unit is a completed event for the exact tool or command in available local task logs. The count separates invocation, technical completion, and accepted result; raw logs are not published. Recalculate with the same filter after a new meaningful event set accumulates or the log schema changes.
