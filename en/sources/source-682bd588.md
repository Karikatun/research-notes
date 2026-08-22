---
id: source-682bd588
entity: source
decision: pilot
evidence: verified
primary_direction: task-human-collaboration
practices: [structured-human-feedback]
tools: [lavish-axi]
source_type: video
review_state: current
---

# Anonymous material: interactive HTML plans for agent collaboration

## Claims in the material

- A specialized skill helps an agent express a complex task as HTML.
- Such an artifact can combine constraints, prototypes, decision branches,
  architecture, API formats, risks, and a step-by-step plan.
- Asking the agent to use the skill in the initial prompt is sufficient.

## Verification

The official skill is intended for plans, comparisons, diagrams, tables, and
reports. The CLI opens agent-created HTML in a local editor, allows element and
text annotation, supports editable Mermaid diagrams, and returns a feedback
queue to the agent through polling.

There is no evidence that the tool itself improves architectural completeness or
correctness, or reliably solves a complex task from one prompt. It provides a
visualization format and feedback loop; the agent creates the content.

The local mode does not require a cloud service, but unpinned `npx -y`, a
persistent hook, untrusted HTML, and the separate public-by-default sharing
command require restrictions.

## Conclusion

Run a local pilot on one non-sensitive complex plan and compare it with plain
Markdown or a built-in visualization. Do not install it globally or publish the
artifact. Decide by time to agreement, review cycles, comment-target precision,
and rework.

## Official evidence

- [Repository and documentation](https://github.com/kunchenguid/lavish-axi)
- [Public skill](https://github.com/kunchenguid/lavish-axi/blob/main/skills/lavish/SKILL.md)
- [npm package manifest](https://github.com/kunchenguid/lavish-axi/blob/main/package.json)
