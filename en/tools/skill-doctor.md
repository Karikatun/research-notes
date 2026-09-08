---
id: skill-doctor
entity: tool
decision: pilot
evidence: verified
stages: [documented, installed, configured]
primary_direction: knowledge-learning
related_directions: [agent-coordination-automation, efficiency-cost-observability, verification-quality-security]
practices: [task-evidence-skill-evaluation]
measurement: qualitative
availability: local-only
source_access: source-available
origin: custom
custom_scope: project
official_urls: []
review_state: current
---

# skill-doctor

## Verdict

Keep it in pilot status. Source inspection confirms task-level sampling,
deterministic aggregation, local-scope protection, and separation of workflow
recommendations from skill edits. No report from real history has been accepted
yet.

## Role in agent-assisted development

Collects approved agent history into a local temporary area, prepares
de-identified tasks for model scoring, validates the scoring schema, and builds
a report. Coverage uses eligible opportunities to apply a skill, while code
quality may remain `N/A`. Project-skill changes are proposed as a separate diff
and are not applied automatically.

## Access and origin

A local project-scoped tool with source available and no public official link.
Transcripts remain untrusted data. The minimal de-identified scoring inventory
may be seen by the model configured in the executing agent harness, so the
history scope requires explicit approval.

## Observed use

Inspection of the committed implementation confirmed the boundaries and method
before a run on real history. The evaluation itself was not run or accepted.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Prepare to evaluate a skill set from task history | Local collector, validator, and renderer with separate model scoring | Manual review of selected tasks | Read scope is bounded; `N/A`, coverage, workflow recommendations, and skill edits remain distinct; raw data does not enter the report | partial | Source inspection confirmed task-level sampling, an eligible-opportunity denominator, cost classification, fail-closed privacy guards, and draft-only skill edits | No accepted report exists; model scoring and the provider boundary still need a pilot | high for properties, low for effect |

## Limitations

The tool reads sensitive local history and depends on formats from different
agent harnesses. An automatic grade, an overall score, and transport completion
do not prove skill value. A small or homogeneous sample and missing artifacts
distort the conclusion; model scoring needs human review of its reasons.

## Decision

Allow only a bounded run on explicitly selected history, in a fresh temporary
directory, without writes to source repositories. Re-evaluate after an accepted
report, a privacy failure, a session-format change, or the arrival of a simpler
way to trace recommendations to tasks.

## Official materials

No public official link.
