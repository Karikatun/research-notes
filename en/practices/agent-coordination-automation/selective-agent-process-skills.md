---
id: selective-agent-process-skills
entity: practice
decision: limited-use
evidence: result-accepted
primary_direction: agent-coordination-automation
related_directions: [planning-design, implementation-refactoring, verification-quality-security]
tools: [matt-pocock-engineering-skills, superpowers-opencode, gstack]
review_state: current
---

# Load process skills selectively

## Desired outcome

Activate a specialized process only for a matching task and avoid overlapping instruction sets.

## When to apply

When the task clearly matches a specialized skill such as TDD, diagnosis,
review, design, or issue work. Before use, verify that the skill is actually
available in the current runtime and that its output format matches the
required contract.

## Success criterion

The skill adds a verifiable signal without unnecessary ceremony or conflicting
rules. When the user requires an exact slug, commit message, or other structure,
the result receives a deterministic format check.

## Limitations

Always loading large overlapping suites increases context and can create process conflicts.
Integrated suites additionally require review for implicit Git, browser,
network, deploy, and update authority before installation in the primary profile.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
