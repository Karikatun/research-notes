---
id: project-skill-bundle-verifier
entity: tool
decision: pilot
evidence: verified
stages: [documented, installed, configured]
primary_direction: verification-quality-security
related_directions: [agent-coordination-automation]
practices: [verify-agent-skill-bundle-integrity]
measurement: qualitative
availability: local-only
source_access: source-available
origin: custom
custom_scope: project
official_urls: []
review_state: current
---

# Project skill bundle integrity verifier

## Verdict

A bounded pilot for repositories with versioned project skills. The committed
source confirms a full-bundle digest, fail-closed manifest, and negative test
scenarios. The check was not run in this research task, so no runtime result has
been accepted.

## Role in agent-assisted development

Before a local skill is applied, compares the entire bundle with a reviewed
manifest. A changed, added, removed, or unpinned resource stops the preflight
and requires review of the complete diff instead of automatically trusting the
current state.

## Access and origin

A local project-scoped validator with source available and no public official
link. It is wired into the owning repository's versioned quality gates but does
not intercept skill loading at the agent-harness level.

## Observed use

The committed validator and test design were inspected for unchanged bundles,
modified resources, symlinks, path escapes, unpinned directories, and limits.
Execution of those tests and actual blocking of skill use were not verified in
this research task.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Check a project-skill boundary before use | Deterministic full-bundle preflight against a reviewed manifest | Manual diff review or an installer lockfile alone | Any change in resource contents, inventory, or type is blocked without automatic digest refresh | partial | Source inspection confirmed a complete manifest, canonical digest, resource limits, and positive and negative tests | This run did not verify execution; a shared trust root, permissions, and the check-to-use race remain | high for design, low for runtime effect |

## Limitations

A matching digest does not prove instruction safety, provenance, signature, or
acceptable permissions. A writer can change the bundle, manifest, and gate
together. The validator does not cover global skills, plugins, external MCP
servers, or transitive dependencies, and it does not remove the race after the
preflight.

## Decision

Pilot it only as an additional preflight before project skills and as a gate on
the prepared change. Do not treat it as a sandbox or security review.
Re-evaluate after confirmed blocking of a real mismatch, a trust-boundary
change, or the arrival of a signed upstream manifest.

## Official materials

No public official link.
