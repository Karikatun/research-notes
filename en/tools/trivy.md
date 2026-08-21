---
id: trivy
entity: tool
decision: use
evidence: result-accepted
stages: [documented, configured, invoked, completed, result-accepted]
primary_direction: verification-quality-security
practices: [separate-security-evidence-remediation]
measurement: qualitative
availability: public
source_access: open-source
origin: upstream
official_urls: [https://trivy.dev/docs/latest/target/repository/]
review_state: current
---

# Trivy

## Verdict

Accepted for reproducible checks of the repository, configuration, and exact
image produced by the agent workflow.

## Role in agent-assisted development

Combines several technical signals into one pinned barrier. Image scanning
targets the exact built artifact rather than an abstract Dockerfile.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Check configuration and the executable image | Repository and image scanner | Separate manual checks | The exact artifact used by the rest of the gate is analyzed | accepted | Configuration and image checks became reproducible | Finding databases change and reports still need review | high |

## Limitations

A technical report does not prove runtime behavior or business authorization.
Database updates can change the result without a code change.

## Decision

Keep it in the static barrier and separate finding collection from remediation.

## Official materials

- [Repository scanning](https://trivy.dev/docs/latest/target/repository/)
