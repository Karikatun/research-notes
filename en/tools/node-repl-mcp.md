---
id: node-repl-mcp
entity: tool
decision: use
evidence: result-accepted
stages: [configured, invoked, completed, result-accepted]
primary_direction: context-codebase-research
related_directions: [efficiency-cost-observability]
practices: [local-analysis-orchestration]
measurement: telemetry
review_state: current
---

# Node REPL MCP

## Verdict

Adopted and, in practice, the most frequently called MCP tool in the sample.

## Problem and potential value

Lets the agent execute compact JavaScript, aggregate data, and orchestrate
tools without many separate shell round trips.

## Measured data

- 5,823 completed calls across 68 sessions and five contexts.
- 5,822 technically successful and one failure: 99.98%.

## Demonstrated value

Demonstrated by usage volume: aggregating large results inside the runtime
reduces intermediate output and the number of separate calls.

## Failures and limitations

Technical success does not assess JavaScript correctness. It must not replace
repository tests or be used for hidden file writes.

## Decision

Keep as the primary orchestration and aggregation tool. Prefer native commands
for shell tasks and project code for persistent logic.

## Telemetry contract

The unit is a completed event for the exact tool or command in available local task logs. The count separates invocation, technical completion, and accepted result; raw logs are not published. Recalculate with the same filter after a new meaningful event set accumulates or the log schema changes.
