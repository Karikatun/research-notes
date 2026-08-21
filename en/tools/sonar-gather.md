---
id: sonar-gather
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

# sonar-gather skill

## Verdict

Adopted for separate collection of Sonar findings in one application.

## Demonstrated value and limitations

Separates data retrieval from fix reasoning and does not combine Sonar with
AppSec. The skill is present, but there are no separate statistics for
completed Sonar jobs.

## Decision

Keep it. Add measurement of finding/page counts and the share of correctly
completed gather stages before drawing a stronger conclusion about
effectiveness.
