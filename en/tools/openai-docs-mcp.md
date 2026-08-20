---
id: openai-docs-mcp
entity: tool
decision: use
evidence: result-accepted
stages: [configured, invoked, completed, result-accepted]
primary_direction: external-knowledge-docs
practices: [version-aware-documentation]
measurement: telemetry
review_state: current
---

# OpenAI Docs MCP

## Verdict

Adopted as the primary source for Codex and the OpenAI API.

## Measured data

40 completed calls across seven sessions, all technically successful.

## Demonstrated value and limitations

Avoids dependence on stale model memory for Codex questions. It applies only to
OpenAI products and does not replace Context7 or other vendors' official docs.

## Decision

Keep as the mandatory primary channel for OpenAI-specific questions.

## Telemetry contract

The unit is a completed event for the exact tool or command in available local task logs. The count separates invocation, technical completion, and accepted result; raw logs are not published. Recalculate with the same filter after a new meaningful event set accumulates or the log schema changes.
