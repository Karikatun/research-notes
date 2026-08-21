---
id: martin-clean-architecture
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: planning-design
practices: [contextual-architecture-heuristics]
measurement: qualitative
availability: local-only
source_access: source-available
origin: custom
custom_scope: personal
official_urls: []
review_state: current
---

# martin-clean-architecture

## Verdict

Accepted. Installed, security-checked, and verified with forward tests.

## Demonstrated Value

On a real template, it preserved a modular monolith and recognized
`transport → application port ← Prisma adapter` as a correct boundary instead
of automatically imposing microservices and layers.

## Limitations and Decision

Use it as a vocabulary for change cost and dependency direction, not as a
generator of folders, interfaces, or services.
