---
id: application-security-review
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: verification-quality-security
practices: [manual-threat-review, behavioral-security-validation]
measurement: qualitative
review_state: current
---

# Manual security review skill

## Verdict

Adopted as a manual threat-review skill for an application with adversarial multi-user flows.

## Demonstrated value

Covers scanner blind spots: authorization, IDOR, replay, races, privacy,
recovery, production boundaries, and data exposure. It is tied to SECURITY.md
and actual project contracts.

## Limitations and decision

A subjective review does not prove that threats are absent. Keep it mandatory
for security-sensitive changes alongside integration/concurrency tests and
scanners.
