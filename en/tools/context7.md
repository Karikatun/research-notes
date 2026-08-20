---
id: context7
entity: tool
decision: use
evidence: result-accepted
stages: [configured, invoked, completed, result-accepted]
primary_direction: external-knowledge-docs
practices: [version-aware-documentation]
measurement: telemetry
review_state: current
---

# Context7

## Verdict

Adopted as the primary source of current library and SDK documentation.

## Problem and potential value

Reduces the risk of answering from stale model memory: it first resolves the
exact library ID, then returns a relevant documentation excerpt.

## Measured data

- Total: 188 MCP calls across 37 sessions.
- `resolve-library-id`: 91; `query-docs`: 97.
- 187 of 188 completed technically—99.47%.

Transport success does not prove the chosen version or recommendation is right.

## Demonstrated value

Used when choosing a phone-input library and working with React, Next.js,
Prisma, and other APIs. It does not create a second local source of truth.

## Failures and limitations

- One recorded technical failure.
- It may select a community fork or documentation for the wrong version.
- Requests go to an external service; secrets and proprietary code are prohibited.

## Decision

Use by default for external APIs and libraries, matching the version to the
lockfile. Verify security-sensitive contracts against a primary source as well.

## Telemetry contract

The unit is a completed event for the exact tool or command in available local task logs. The count separates invocation, technical completion, and accepted result; raw logs are not published. Recalculate with the same filter after a new meaningful event set accumulates or the log schema changes.

## Official materials

- [github.com](https://github.com/upstash/context7)
