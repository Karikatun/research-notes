---
id: separate-security-evidence-remediation
entity: practice
decision: use
evidence: result-accepted
primary_direction: verification-quality-security
tools: [appsec-cli, appsec-fix-recommendations, appsec-triage, owasp-zap, semgrep, sentry-mcp, sonar-cli, sonar-fix-recommendations, sonar-gather, trivy]
review_state: current
---

# Separate security evidence gathering from remediation

## Desired outcome

First obtain a complete normalized finding set, then reason about remediation separately.

## When to apply

When an agent receives scanner, observability, or external AppSec/Sonar
findings and then proposes changes. This matters especially for large finding
sets: collection remains complete, while remediation is split into bounded
semantic slices.

## Success criterion

An empty result, retrieval failure, and accepted remediation remain
distinguishable. Every finding has an explicit disposition, and the next retry
receives the observed blocker from the previous verification.

## Limitations

Do not collapse no findings, incomplete pagination, access failure, and
successful remediation into one status. A large indivisible batch overloads
context, encourages incompatible updates, and loses blockers already
discovered.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
