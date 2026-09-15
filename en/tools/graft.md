---
id: graft
entity: tool
decision: reject
evidence: tried
stages: [installed, configured, invoked, completed, removed]
primary_direction: context-codebase-research
related_directions: [efficiency-cost-observability]
practices: [targeted-codebase-exploration]
measurement: qualitative
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/trailhq/Graft, https://www.npmjs.com/package/@nanonets/graft]
review_state: current
---

# Graft

## Verdict

Do not connect it in the evaluated environment. The bounded pilot stopped
before graph construction, so it demonstrated an incompatibility with the
selected runtime, not Graft's quality or general unsuitability.

## Role in agent-assisted development

Graft is intended to build a local structural graph of a repository and provide
connected context to a coding agent instead of repeating broad searches. Its
potential value concerns codebase-research accuracy and cost, but it requires a
comparison with targeted search over the same questions.

## Access and origin

A public open-source package from an upstream developer. It was evaluated once
in an isolated local directory without network access, access to the working
checkout, or secrets; lifecycle scripts were disabled.

## Observed use

Cold and incremental builds stopped while loading a native Kotlin parser even
for an entirely TypeScript corpus. No compatible prebuilt binary was available
for the selected host and runtime. The pilot boundary was not expanded after
the start by enabling install scripts or manually building the native module.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Structural exploration of a frozen TypeScript codebase | Local graph and structural queries | `rg` and inspection of owning files | The runtime loads in the agreed safe environment, the graph builds, and the producer and validator preserve early-failure evidence before A/B | not accepted | No graph was created and the comparative run did not start | A separate producer/validator mismatch invalidated raw accuracy and timing values; the temporary runtime had to be removed | high for the evaluated environment, low for general utility |

## Limitations

The rejection applies to a specific version, host/runtime, and safe
configuration. It does not establish behavior on another platform or after a
native dependency is built. Subprocess completion and erroneous zero values in
a report are not quality measurements.

## Decision

Use targeted search without Graft. Reconsider a pilot if upstream provides a
compatible native runtime or stops loading unused parsers, and a separate
preflight verifies loadability and producer/validator agreement in advance.

## Official materials

- [Repository](https://github.com/trailhq/Graft)
- [Package](https://www.npmjs.com/package/@nanonets/graft)
