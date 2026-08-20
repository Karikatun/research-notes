---
id: learn-from-task
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: knowledge-learning
practices: [reusable-task-learning]
measurement: qualitative
review_state: current
---

# learn-from-task

## Verdict

Accepted with a mandatory approval gate before any durable write.

## Demonstrated Value

Separates repository rules, reusable procedures, ADRs, executable invariants,
and temporary notes. Reduces the risk of putting everything into AGENTS or
memory.

## Limitations and Decision

There is no quantitative metric for avoided repeat research. The skill must not
write lessons by itself: first provide an evidence-backed proposal and diff,
then obtain explicit approval. Keep the current operating mode.
