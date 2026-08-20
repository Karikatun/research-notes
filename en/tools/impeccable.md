---
id: impeccable
entity: tool
decision: pilot
evidence: verified
stages: [documented]
primary_direction: ui-browser-validation
related_directions: [verification-quality-security]
practices: [non-mutating-design-skill-pilots]
measurement: qualitative
review_state: current
---

# Impeccable

## Verdict

One read-only pilot is recommended; it has not yet been used.

## Potential value

Broad UI audit and critique with deterministic rules for typography, layout,
responsiveness, accessibility, and performance.

## Limitations and decision

`init` and `document` may create competing PRODUCT/DESIGN documents, while
automatic fixes may violate the approved style. The pilot succeeds only if it
finds a new verified medium- or high-impact issue without a stream of false
positives.
