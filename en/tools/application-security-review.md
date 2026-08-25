---
id: application-security-review
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: verification-quality-security
practices: [manual-threat-review, behavioral-security-validation]
measurement: qualitative
availability: local-only
source_access: source-available
origin: custom
custom_scope: project
official_urls: []
review_state: current
---

# Manual security review skill

## Verdict

Adopted as a local manual threat-review skill with automatic review-depth
selection and a mandatory differential pass for a material security-sensitive
diff.

## Role in agent-assisted development

Covers scanner blind spots: authorization, IDOR, replay, races, privacy,
recovery, production boundaries, and data exposure. It routes a task into full,
targeted, or semantic mode according to reachable behavior rather than agent
convenience, and ties findings to project contracts and regression guards.

## Access and origin

A local project-scoped skill with source available and no public official link.
Its rules belong to the owning repository and do not expand the agent's
network, Git, or scanner permissions.

## Observed use

Independent bounded pilots compared a baseline review with control-history,
blast-radius, neighboring-variant, and independent-refutation passes. The
addition produced accepted non-duplicate signals and regression guards;
incremental cost was not measured separately.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Review independent sensitive changes | Risk-based routing and differential analysis | Baseline threat review without history and variant search | A reproducible non-duplicate signal or supported refutation exists without new permissions | accepted | Additional defect variants were found and targeted regression guards were added | An extra history and blast-radius pass was required; comparable time was not measured | high |

## Limitations

A subjective review does not prove that threats are absent. Broad history and
variant search can create extra hypotheses; each needs reachability validation
and deduplication. A small, demonstrably semantic change does not need full
review.

## Decision

Keep it mandatory for security-sensitive changes alongside integration and
concurrency tests and applicable scanners. Re-evaluate when project contracts
or routing change, incremental signal over the baseline disappears, or
ceremony starts to outweigh useful findings.

## Official materials

No public official link.
