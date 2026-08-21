---
id: compound-engineering
entity: tool
decision: reject
evidence: verified
stages: [documented]
primary_direction: knowledge-learning
related_directions: [agent-coordination-automation]
practices: [reusable-task-learning]
measurement: qualitative
availability: public
source_access: source-available
origin: upstream
official_urls: [https://github.com/EveryInc/compound-engineering-plugin]
review_state: current
---

# Compound Engineering

## Verdict

The full plugin was rejected; only the principle “every task makes the next one
easier” was adopted.

## Potential and demonstrated value

The brainstorm → plan → work → review → compound workflow could reduce repeated
research. No real pilot was run, so project benefit is unmeasured.

## Reason for rejection

It heavily overlaps with AGENTS, ADRs, issues, memory, code-review, and
`learn-from-task`; an additional `docs/solutions` creates a second corpus and
drift.

## Decision

Do not install until a recurring problem is demonstrated. A possible pilot is
3–5 comparable tasks in a separate profile, measuring rework, freshness, and
credits.

## Official materials

- [github.com](https://github.com/EveryInc/compound-engineering-plugin)
