---
id: reusable-task-learning
entity: practice
decision: use
evidence: result-accepted
primary_direction: knowledge-learning
tools: [compound-engineering, learn-from-task]
review_state: current
---

# Retain only reusable task lessons

## Desired outcome

After completion, propose the right durable artifact and write it only after confirmation.

## When to apply

After a non-trivial completed task when an evidenced lesson is likely to change future similar work.

## How to apply

1. Start only from a completed task with an accepted result, completed checks,
   and known rework or limitations.
2. Extract conclusions supported by the task evidence and exclude recaps,
   one-off circumstances, and unproven guesses.
3. For each candidate, define its future trigger, scope, owner, and suitable
   artifact: a test, rule, ADR, skill, documentation, or automated check.
4. Propose exact wording to the human and explain which future work it would
   change; write nothing without confirmation.
5. Before any durable write, test the draft by replaying retrieval or application
   on a similar scenario and retain the test result. If reuse cannot be
   demonstrated, do not codify the conclusion as a rule.
6. After a successful test and separate authorization, retain the smallest
   artifact without secrets, temporary identifiers, or excess context, including
   its rationale and revisit event.

## Success criterion

A later similar task reuses the lesson without repeated research or stale noise.

## Limitations

Do not retain a task recap, one-off fact, or ownerless rule; writing requires human confirmation.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
