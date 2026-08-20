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

Checks reproducibly confirm user-visible behavior and no regression.

## Limitations

A broad green check is insufficient when it does not execute the changed user behavior or critical invariant.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
