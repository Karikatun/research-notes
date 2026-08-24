---
id: credits-per-accepted-task
entity: practice
decision: limited-use
evidence: result-accepted
primary_direction: efficiency-cost-observability
tools: [token-economy]
review_state: current
---

# Optimize credits per accepted task

## Desired outcome

Compare only accepted tasks of the same class with identical quality checks.

## When to apply

When priced tasks of one class are available and identical checks can be preserved across model or delegation strategies.

## How to apply

1. Before comparison, define one task class, the unit of an accepted result,
   identical quality checks, first-pass acceptance, rework, and a critical
   regression; describe the strategies being compared in advance.
2. Fix the billing source for `estimated_credits` and the rule for attributing
   retries and delegate costs to a task. Do not substitute `effective_tokens`
   or cache hit rate for credits.
3. Accumulate two comparable cohorts under unchanged checks, with at least 12
   accepted priced tasks in each. Track every started but unaccepted or
   incomplete task separately with its exclusion reason.
4. Retain one anonymous row per unit: class, strategy, `estimated_credits`,
   first-pass acceptance, rework, critical regressions, and collateral harm; do
   not retain project identifiers or raw logs.
5. Once both cohorts are complete, calculate median `estimated_credits` and
   compare the acceptance, rework, and regression guards separately. Do not add
   technical invocations or completions to the accepted-task count.
6. If the class, checks, pricing rules, or strategy change, close the current
   cohort and start a new baseline. Until the sample is sufficient, report only
   observed telemetry and keep the economic effect unknown.

## Success criterion

Median credits fall without worse acceptance or more rework.

## Limitations

Do not compare different task classes, incomplete results, cache hit rate, or effective tokens as a substitute for credits.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
