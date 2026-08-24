---
id: deterministic-agent-output-validation
entity: practice
decision: use
evidence: result-accepted
primary_direction: verification-quality-security
tools: [playwright, opencode, appsec-fix-recommendations, sonar-fix-recommendations, stryker]
review_state: current
---

# Accept agent output with deterministic checks

## Desired outcome

Do not treat the agent's self-report as evidence; run relevant tests, builds, and analyzers.

## When to apply

Before accepting an agent-produced fix, feature, refactor, or security recommendation.

## How to apply

1. Before execution, define the primary observable result, critical
   invariants, expected artifacts, and negative cases; do not include the
   agent's self-report in the criteria.
2. Choose the smallest verification ladder from the nearest public boundary to
   broader tests, builds, analyzers, and E2E.
3. Run the checks from a reproducible baseline and retain commands, versions,
   inputs, exit codes, and safe artifact references.
4. For structured output, separately verify existence, allowed path, schema,
   completeness, and relevance to the task; transport success or exit code zero
   is insufficient.
5. Run applicable negative and regression cases. Any negative result overrides
   the agent's narrative and leaves the outcome `FAIL` or `INCONCLUSIVE`.
6. After an authorized fix, repeat the original check and adjacent invariants
   without weakening expectations. If the task was review-only, stop at the
   evidence bundle.

## Success criterion

Checks reproducibly confirm user-visible behavior and no regression. For
structured output, artifact existence, allowed path, schema, and completeness
are validated separately; agent narrative cannot override a negative result.

## Limitations

A broad green check is insufficient when it does not execute the changed user
behavior or critical invariant. Exit code zero is also insufficient when a tool
call was rejected, final JSON is missing, or the expected artifact was not
created.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
