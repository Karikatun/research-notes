---
id: gitleaks
entity: tool
decision: use
evidence: result-accepted
stages: [documented, configured, invoked, completed, result-accepted]
primary_direction: verification-quality-security
practices: [prevent-secret-leaks]
measurement: qualitative
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/gitleaks/gitleaks]
review_state: current
---

# Gitleaks

## Verdict

Accepted as a reproducible barrier against publishing secrets from agent
changes and reachable Git history.

## Role in agent-assisted development

Scans prepared files and history before a commit or publication. It can run
locally and in CI through a pinned executable artifact.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Check changes and history before publication | Detect known secret formats | Manual string search | A test secret is blocked without appearing in the report | accepted | The same barrier runs locally and remotely | False positives and unknown-format misses remain possible | high |

## Limitations

A green result does not prove that no secret exists. Scan the applicable history
range and every published ref, do not retain detected values, and review
exceptions separately.

## Decision

Keep it mandatory before publication. Revisit when the configuration format,
Git range, or published ref set changes.

## Official materials

- [Repository](https://github.com/gitleaks/gitleaks)
