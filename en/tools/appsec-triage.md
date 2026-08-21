---
id: appsec-triage
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: verification-quality-security
practices: [separate-security-evidence-remediation]
measurement: qualitative
availability: internal
source_access: source-available
origin: custom
custom_scope: project
official_urls: []
review_state: current
---

# appsec-triage skill

## Verdict

Adopted as a codebase-local first-stage contract.

## Demonstrated value

Retrieves findings only from AppSec, requires an exact repository match, walks
all pages, explains `needFix`, and can finish a job before clone when there are
no changes. This reduces the cost of safe no-op cases.

## Failures and decision

It previously analyzed the current checkout by mistake and lost the
reason when `needFix=false`. The contract was fixed. Keep it with backend-owned
authentication init and JSON schema validation.
