---
id: open-design
entity: tool
decision: limited-use
evidence: tried
stages: [configured, invoked, completed, result-accepted]
primary_direction: planning-design
related_directions: [ui-browser-validation]
practices: [design-options-before-implementation]
measurement: telemetry
review_state: current
---

# Open Design

## Verdict

Adopted for design exploration and application prototypes, but not as a permanent
source of truth for production UI.

## Measured data

60 completed MCP calls across two sessions: 57 succeeded and 3 failed—95%.

## Demonstrated value

Used for briefs, project creation, and runs while shaping prototypes. It keeps
throwaway design exploration separate from production code.

## Failures and limitations

Some checks had no active project. This is normal missing context, not a service
failure. Production UI still requires explicit design approval and rendered
verification.

## Decision

Keep for tasks with a concrete design brief. Do not generate without an active
project, and never treat the resulting mockup as automatically approved.

## Telemetry contract

The unit is a completed event for the exact tool or command in available local task logs. The count separates invocation, technical completion, and accepted result; raw logs are not published. Recalculate with the same filter after a new meaningful event set accumulates or the log schema changes.
