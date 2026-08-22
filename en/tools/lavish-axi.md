---
id: lavish-axi
entity: tool
decision: pilot
evidence: verified
stages: [documented]
primary_direction: task-human-collaboration
related_directions: [planning-design, ui-browser-validation, efficiency-cost-observability]
practices: [structured-human-feedback]
measurement: qualitative
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/kunchenguid/lavish-axi]
review_state: current
---

# Lavish AXI

## Verdict

Run a limited pilot on one complex plan or comparison. Do not install it
globally, enable the SessionStart hook, or publish the artifact until usefulness
is demonstrated and data transmission has a separate approval.

## Role in agent development

Opens an agent-created HTML artifact in a local editor, binds human comments to
elements and text ranges, and returns them to the agent through a CLI. It
supports editable Mermaid diagrams, local attachments, and detection of severe
layout problems.

The tool improves the review loop but does not produce sound architecture by
itself. Constraints, prototypes, APIs, and risks appear because the agent
generated them; Lavish makes the result easier to inspect and refine.

## Access and origin

Public MIT project and npm CLI for Node.js 22+. The core local workflow does not
require a cloud service; state is stored in the user directory by default. A
separate `share` command publishes the artifact to a third-party service and is
not part of the local workflow.

## Observed use

The official repository, public skill, and package were verified without
installation or execution. There is no accepted result from a real task yet.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Result | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Review of the official implementation without installation | Interactive review of an HTML plan | Markdown, a built-in visualization, or plain HTML | More precisely localized feedback and fewer clarification cycles | partial | Annotations, feedback queue, layout inbox, and local mode were verified | Usefulness in a real task was not measured | high for properties, low for effect |

## Limitations

- Content quality remains a property of the model, context, and acceptance
  criteria.
- Unpinned `npx -y` executes a changing external package and weakens
  reproducibility.
- The SessionStart hook adds persistent context and state even though the tool is
  needed only for selected complex tasks.
- Long polling needs a guaranteed wake path back to the agent; otherwise the
  review loop may hang or fail to resume.
- An artifact may contain external scripts and links. The sandboxed iframe
  reduces but does not eliminate the risk of untrusted HTML.
- `share` transmits content to a third-party service and creates a public share
  by default. It is prohibited for private code, architecture, and data without
  separate approval.
- Agentation is cheaper and closer to the real application state for precise
  comments on an already running interface.

## Decision

Pilot only in local mode on one non-sensitive complex artifact. Use a pinned
version or revision, an isolated state directory, no hooks, and no `share`.
Compare it with plain Markdown or a built-in visualization by time to an
accepted plan, precisely localized comments, clarification cycles, rework, and
maintenance cost.

Adopt only if interactive annotation materially reduces ambiguity or review
cycles. Revisit after an accepted pilot, a change to the security model, or the
arrival of an equivalent platform-native review loop.

## Official materials

- [Repository and documentation](https://github.com/kunchenguid/lavish-axi)
- [Public skill](https://github.com/kunchenguid/lavish-axi/blob/main/skills/lavish/SKILL.md)
- [npm package manifest](https://github.com/kunchenguid/lavish-axi/blob/main/package.json)
