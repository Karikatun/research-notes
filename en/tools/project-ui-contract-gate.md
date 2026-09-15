---
id: project-ui-contract-gate
entity: tool
decision: limited-use
evidence: result-accepted
stages: [documented, configured, invoked, completed, result-accepted]
primary_direction: ui-browser-validation
related_directions: [task-human-collaboration, verification-quality-security]
practices: [versioned-visual-approval-gates]
measurement: qualitative
availability: local-only
source_access: source-available
origin: custom
custom_scope: project
official_urls: []
review_state: current
---

# Project UI-contract gate

## Verdict

Use selectively for stable UI contracts where hidden visual drift is costly.
The gate has been accepted in real work, but its complexity is not justified
for every cosmetic fix or for a design that has not yet been approved.

## Role in agent-assisted development

The local project gate separates human approval of a visual oracle from
verification of the exact staged source. It gives an agent a reproducible way
to compare approved states but does not let the agent update a baseline, expand
coverage, or declare a product `PASS` on its own.

## Access and origin

Custom project-local scripts, tests, registry, browser specifications, and a
policy skill. There is no public distribution or official URL.

## Observed use

The gate bound active scenarios to actor, route, state, viewport, a pinned Linux
renderer, specification, baseline, and append-only approval. An exact source
ownership map fails closed on unknown inputs, ambiguity, or shared-file impact
on blocked surfaces. A separate visual check materializes the staged tree and
has no snapshot-update mode.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Evolve several connected UI surfaces after human acceptance | Authority/ownership registry and isolated comparison of the exact staged tree | Manual screenshots, E2E, and ordinary updateable snapshots | An approved source-only diff reproduces the baseline; an oracle change or unknown impact is blocked and cannot accept itself | accepted | Accepted desktop/mobile scenarios gained a durable link between decision, specification, and pixels; unspecified states remained explicitly blocked | Separate ownership transitions, substantial policy machinery, and history maintenance were required; time savings were not measured | high |

## Limitations

The gate verifies only the listed visual oracle. It does not prove behavior,
accessibility, clarity, security, or production state. Completeness depends on a
correct source-ownership map and Git history; a shared file can block several
surfaces. The policy and isolated renderer create their own drift and false-stop
risks.

## Decision

Keep it only where visual baselines carry explicit product meaning and the
self-acceptance risk exceeds maintenance cost. Reconsider when the ownership
model changes, false blocks accumulate, history diverges, or a comparable
simpler check appears.
