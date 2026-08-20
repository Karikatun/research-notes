---
id: web-search
entity: tool
decision: use
evidence: result-accepted
stages: [configured, invoked, completed, result-accepted]
primary_direction: external-knowledge-docs
practices: [primary-source-verification]
measurement: telemetry
review_state: current
---

# Web search

## Verdict

Adopted for changeable facts and primary external sources.

## Measured data and demonstrated value

The selected history contains 81 direct web-tool calls. It was used for
official documentation, release information, security facts, and verification
of external materials.

## Limitations and decision

A search result is not evidence. Prefer primary sources, and make every citation
support a specific claim. Do not use it instead of Context7 for library docs or
instead of local code for project facts.

## Telemetry contract

The unit is a completed event for the exact tool or command in available local task logs. The count separates invocation, technical completion, and accepted result; raw logs are not published. Recalculate with the same filter after a new meaningful event set accumulates or the log schema changes.
