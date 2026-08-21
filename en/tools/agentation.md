---
id: agentation
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: task-human-collaboration
related_directions: [ui-browser-validation]
practices: [structured-human-feedback]
measurement: qualitative
availability: public
source_access: source-available
origin: upstream
official_urls: [https://www.agentation.com/, https://github.com/benjitaylor/agentation]
review_state: current
---

# Agentation

## Verdict

Adopted for human-to-agent feedback in development interfaces.

## Actual use

Installed as a dependency in two application codebases. Recorded tasks contain
structured feedback with the route, viewport, React/component location, and a
user comment; the agent then fixed the specific UI problem.

## Demonstrated value

Reduces the ambiguity of “fix this area” and connects visual feedback to its
component. This is a demonstrated workflow, not merely an installation.

## Limitations and decision

The overlay can cover a walkthrough and change the UI being evaluated. Enable
it only in development and disable it for clean visual acceptance and E2E.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| UI defect handoff | Structured state-aware feedback | Free-form text description | The agent locates the state without repeated discovery | accepted | Route, viewport, and component were retained | Separate savings were not measured | medium |

## Official materials

- [Official site](https://www.agentation.com/)
- [Source repository](https://github.com/benjitaylor/agentation)
