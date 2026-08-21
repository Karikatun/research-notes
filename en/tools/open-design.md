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
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/nexu-io/open-design]
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

The first generated option in one scenario was rejected by the human because it
did not match the visual direction. A second iteration with explicit references
was accepted, demonstrating value for option exploration but not automatic
output quality.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Find an interface direction before production implementation | Generate and refine a prototype | Implement the first option immediately | A human accepts the rendered option within product constraints | accepted after rework | The referenced second iteration became the basis for later work | The first option was rejected and required another generation | high |

## Decision

Keep for tasks with a concrete design brief. Do not generate without an active
project, and never treat the resulting mockup as automatically approved.

## Telemetry contract

The unit is a completed event for the exact tool or command in available local task logs. The count separates invocation, technical completion, and accepted result; raw logs are not published. Recalculate with the same filter after a new meaningful event set accumulates or the log schema changes.

## Official materials

- [Repository](https://github.com/nexu-io/open-design)
