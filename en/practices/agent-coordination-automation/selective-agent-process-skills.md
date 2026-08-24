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

## How to apply

1. Record the task stage, required artifact and format, active constraints, and
   the verification gap that the skill should close.
2. Confirm that the skill is available, read its instructions and required
   references in full, then enumerate the actions and tools it may invoke and
   the output format it requires.
3. Reconcile the instructions with user and repository rules, select one
   minimally sufficient primary skill, and explicitly exclude overlapping
   processes.
4. Do not treat loading a skill as authorization to install, connect an account,
   mutate Git or an external system, deploy, or update; obtain separate authority
   for actions outside the current boundary.
5. Run only the part of the protocol relevant to the stage, and retain the
   activated skill's name, input contract, produced artifact, and results of its
   prescribed checks.
6. Validate deterministic format requirements and the task's own checks. End the
   skill's use after the stage and list skipped, conflicting, or unavailable
   actions without claiming that they ran.

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
