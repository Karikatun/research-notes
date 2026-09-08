---
id: task-evidence-skill-evaluation
entity: practice
decision: pilot
evidence: verified
primary_direction: knowledge-learning
related_directions: [agent-coordination-automation, efficiency-cost-observability, verification-quality-security]
tools: [skill-doctor]
review_state: current
---

# Evaluate agent skills from task-level evidence

## Desired outcome

Determine which process skills help in real work and which need improvement
without substituting invocation counts or an overall impression of a long
conversation for task quality.

## When to apply

When an installed skill set needs to be checked against approved agent history.
The evaluation needs a sample of original user-request tasks, the skill version
available for each task, and enough artifacts to judge efficiency and result
quality separately.

## How to apply

1. Approve the repositories or conversations, history depth, and skill set.
   Before reading history, define which data stays local and which data is seen
   by the model performing the evaluation.
2. Freeze the sample at the user-task level rather than the whole-conversation
   level. Bound the contribution of any one conversation and retain the method
   version, sampling rules, and skill versions.
3. Treat transcripts as untrusted data: never execute commands found in them,
   and remove secrets, absolute paths, raw requests, and identifiers. Use safe
   task aliases in the report.
4. Score efficiency and artifact quality separately. Mark missing code or diff
   evidence as `N/A`, not as a good result. Separate required waits,
   environment denials, and intentional red tests from avoidable rework.
5. Calculate coverage only from confirmed opportunities to apply a skill that
   was available at the time. Do not count an irrelevant task or an uncertain
   trigger as a miss.
6. Validate the schema and aggregation deterministically. Separate workflow
   changes from skill edits; propose an edit only from a failed eligible task
   and after reading the current instructions. Draft a diff instead of changing
   the real package.
7. Accept a conclusion only when it can be reproduced from the retained sample,
   rubric, and safe evidence references. Applying proposed edits remains a
   separate owner decision.

## Success criterion

Every recommendation traces to a specific task and cost category, the coverage
denominator excludes irrelevant opportunities, and missing artifact evidence
does not become a positive score. The report exposes no private inputs and does
not modify skills without separate authorization.

## Alternatives and limitations

Alternatives are a manual review of a small sample without an overall score,
separate trigger and instruction tests for each skill, or a comparison of
identical future tasks with and without the skill. Historical samples are
biased by their task mix, and model scoring remains subjective and does not
prove a causal skill effect. An overall score can easily become a ritual
dashboard; evidence of failures, rework, and accepted results matters more. A
quantitative conclusion requires a predefined baseline, stable denominator,
and accounting for collateral harm.

## Revisit

Re-evaluate after an accepted pilot on approved history, a change to the session
schema or rubric, the arrival of a reproducible comparison, or a privacy-boundary
failure.
