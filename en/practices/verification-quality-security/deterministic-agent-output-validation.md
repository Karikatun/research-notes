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
