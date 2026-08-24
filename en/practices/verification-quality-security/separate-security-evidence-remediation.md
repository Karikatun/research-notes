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

## How to apply

1. Freeze the source, scope, access rights, pagination rules, and criterion for
   complete collection; assign stable identifiers to findings.
2. Retrieve every available page and normalize findings without changing the
   product. Preserve an empty set, partial response, access failure, and tool
   failure as distinct states.
3. Deduplicate findings, verify reachability and existing controls, then assign
   each finding a disposition: confirm, reject, accept risk, block, or
   investigate.
4. After separate authorization, split remediation into bounded slices along
   owning boundaries while preserving the baseline set and the link from each
   change to its finding identifier.
5. Repeat the same collection and targeted behavioral checks; record the new
   state and residual risk for each identifier. Do not treat an incomplete
   rerun as closure.
6. An active external scan, a security-system change, or remediation outside
   the agreed slice requires separate authorization.

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
