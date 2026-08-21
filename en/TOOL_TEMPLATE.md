---
id: tool-slug
entity: tool
decision: pilot
evidence: verified
stages: [documented]
primary_direction: direction-slug
related_directions: []
practices: [practice-slug]
measurement: qualitative
availability: public
source_access: open-source
origin: upstream
official_urls: [https://example.com/]
review_state: current
---

# <Tool>

## Verdict

Current decision and concise rationale.

## Role in agent-assisted development

How the tool changes the framing, execution, or verification of a coding-agent
task.

## Access and origin

Runtime availability, source access, origin, and, for a custom tool, its custom
scope. Do not conflate public access with an open-source license.

## Observed use

Record only a meaningful success, failure, pilot, or policy change. Ordinary
invocations belong only in aggregate telemetry.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | accepted / partial / not accepted |  |  | low / medium / high |

## Limitations

Risks, maintenance cost, signal loss, and conditions where the tool is not
useful.

## Decision

Current policy and event-based review trigger.

## Measurement contract

Include only for `measurement: quantitative`: attempt, denominator, acceptance
criterion, effect, rework, side effects, and recalculation method.

## Official materials

- [Official documentation](https://example.com/)
