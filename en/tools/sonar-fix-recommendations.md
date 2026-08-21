---
id: sonar-fix-recommendations
entity: tool
decision: limited-use
evidence: tried
stages: [installed, configured, invoked, completed]
primary_direction: verification-quality-security
related_directions: [implementation-refactoring]
practices: [separate-security-evidence-remediation, deterministic-agent-output-validation]
measurement: qualitative
availability: internal
source_access: source-available
origin: custom
custom_scope: project
official_urls: []
review_state: current
---

# sonar-fix-recommendations skill

## Verdict

Adopted as a separate Sonar fix contract, but effectiveness has not yet been
measured separately from the shared runner.

## Decision

Keep project-local isolation and the same principle: the model proposes a
change, while deterministic commands and validators accept the result. A
separate Sonar outcome counter is needed.
