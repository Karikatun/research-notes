---
id: sonar-cli
entity: tool
decision: limited-use
evidence: tried
stages: [installed, configured, invoked, completed]
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

# sonar-cli

## Verdict

Adopted in one application together with `sonar-gather` and `sonar-fix-recommendations`.

## Demonstrated value

Adds a separate Sonar workflow and UI tabs on top of the shared job runner.
Project-local skills are present and isolated from global skills.

## Limitations and decision

No separate CLI call counter or end-to-end success rate is available in the
available snapshots. Do not combine Sonar and AppSec findings; keep separate
contracts and audit trails.
