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

First obtain a complete, safely published, normalized finding set, then reason
about remediation separately.

## When to apply

When an agent receives scanner, observability, or external AppSec/Sonar
findings and then proposes changes. This matters especially for large finding
sets: collection remains complete, while remediation is split into bounded
semantic slices. When raw artifacts can contain credentials, private data, or
a partially written result, their publication is also part of the security
boundary.

## How to apply

1. Freeze the source, scope, access rights, pagination rules, and criterion for
   complete collection; assign stable identifiers to findings.
2. Collect the raw result in a run-unique, non-published directory. Preserve an
   empty set, partial response, access failure, tool failure, and a check that
   did not run as distinct states.
3. Build the sanitized set in a temporary staging directory: read only expected
   regular files without following symlinks, require the complete set, remove
   credentials and verify that they are absent, then restrict permissions. Do
   not upload raw files as artifacts.
4. Publish the staged set with one atomic operation. A missing file, unsafe
   type, sanitization failure, or incomplete set must leave the published path
   absent; the artifact consumer must treat absence as an error, not a warning.
5. Independently clean up raw and temporary resources even after failure, and
   retain operation, publication, and per-cleanup-step errors separately. One
   late failure must not prevent the remaining safe cleanup steps.
6. Deduplicate findings, verify reachability and existing controls, then assign
   each finding a disposition: confirm, reject, accept risk, block, or
   investigate. After separate authorization, perform bounded remediation and
   repeat the same collection and behavioral checks; do not treat an incomplete
   rerun as closure. An active external scan and a security-system change
   require separate authorization.

## Success criterion

An empty result, a check that did not run, retrieval failure, an incomplete or
unsafe set, and accepted remediation remain distinguishable. Only a complete
sanitized set is published; raw data is removed, and operation, publication,
and cleanup errors do not mask each other. Every finding has an explicit
disposition, and the next retry receives the observed blocker from the previous
verification.

## Alternatives and limitations

Alternatives are retaining no report, producing a safe structured format in the
tool itself, or delegating publication to a trusted artifact service. Replacing
a known secret string does not prove that all sensitive data was removed, and
atomic publication does not prove that the findings are correct. A large
indivisible batch overloads context; a complex pipeline without real leakage or
partial-artifact risk becomes ritual.

## Revisit

Re-evaluate when the report format, credential model, artifact store, or cleanup
contract changes, reproducibility is lost, or a cheaper alternative appears.
