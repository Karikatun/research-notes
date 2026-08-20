---
id: separate-security-evidence-remediation
entity: practice
decision: use
evidence: result-accepted
primary_direction: verification-quality-security
tools: [appsec-cli, appsec-fix-recommendations, appsec-triage, sentry-mcp, sonar-cli, sonar-fix-recommendations, sonar-gather]
review_state: current
---

# Separate security evidence gathering from remediation

## Desired outcome

First obtain a complete normalized finding set, then reason about remediation separately.

## When to apply

When an agent receives scanner, observability, or external AppSec/Sonar findings and then proposes changes.

## Success criterion

An empty result, retrieval failure, and accepted remediation remain distinguishable.

## Limitations

Do not collapse no findings, incomplete pagination, access failure, and successful remediation into one status.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
