---
id: appsec-cli
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: verification-quality-security
practices: [separate-security-evidence-remediation]
measurement: telemetry
availability: internal
source_access: closed-source
origin: custom
custom_scope: organization
official_urls: []
review_state: current
---

# appsec-cli

## Verdict

Adopted as the authoritative source of AppSec findings for an application workflow.

## Actual use

At least 70 direct shell calls across 11 sessions.
The command is available locally; one codebase also declares a package
dependency.

## Demonstrated value

Provides SAST/SCA/Docker findings and pagination metadata used for triage. The
project skill prohibits inventing findings from local code.

## Failures and limitations

Authentication/init, registry/network, and repository exact-match errors must
be distinguished from `needFix=false`. The backend owns initialization and
retry.

## Decision

Keep it as the data source; the model only interprets normalized output, while
the backend validates page completeness and dispositions.

## Telemetry contract

The unit is a completed event for the exact tool or command in available local task logs. The count separates invocation, technical completion, and accepted result; raw logs are not published. Recalculate with the same filter after a new meaningful event set accumulates or the log schema changes.
