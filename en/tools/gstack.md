---
id: gstack
entity: tool
decision: pilot
evidence: verified
stages: [documented]
primary_direction: agent-coordination-automation
related_directions: [planning-design, ui-browser-validation, verification-quality-security, knowledge-learning]
practices: [selective-agent-process-skills]
measurement: qualitative
review_state: current
---

# gstack

## Verdict

Do not install the complete package in the primary profile. An isolated pilot
of read-only workflows is reasonable: the package has substantial technical
content and supports Codex, but it heavily overlaps with existing planning,
review, browser validation, security, release, and learning skills.

## Role in agent-assisted development

It combines process skills and executable tools into a “research → plan →
implement → verify → ship → learn” chain. The generator produces skill variants
for multiple coding agents; Codex receives a dedicated host configuration,
metadata, and rewritten paths.

## Verified properties

- The official tree contains 56 skill templates, 12 host configurations, and
  703 test files.
- The Codex variant excludes the skill that would invoke Codex from Codex and
  suppresses incompatible cross-model resolvers.
- The browser uses a persistent local Chromium daemon and project state; the
  claimed 100–200 ms latency was not measured locally.
- Telemetry is described as opt-in, but the local installation also manages
  hooks, state, the browser, cookies, and updates.
- The 1.68.2 changelog describes a fixed pair-agent access-revocation flaw.
  This is a positive testing signal and also evidence that the surface is
  security-sensitive and fast-changing.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Official repository analysis without installation | integrated process suite | selective existing skills and tools | unique value exceeds overlap and the authority surface is acceptable | partial | mature implementation and Codex support were verified | no real project attempt exists | high for properties, low for effect |

## Limitations

- Installing the whole suite increases routing, context, and the chance of
  conflicting instructions.
- `ship`, `land-and-deploy`, fixing QA, and team mode can perform Git and
  external mutations; they must not bypass project approval gates.
- Cookie import, browser pairing, tunnels, and persistent memory require a
  separate privacy and security review.
- Auto-update reduces version drift but weakens reproducibility unless a
  revision is pinned.
- The author's self-reported productivity is not transferable evidence of
  benefit for another workflow.

## Decision

If a pilot becomes useful, use an isolated profile and a pinned revision.
Compare only the read-only `office-hours/autoplan`, `review`, and `qa-only`
chains with the current process across 3 comparable tasks. Accept the tool only
for unique validated findings, time, credits, rework, and conflicts with active
rules. Do not enable team mode, deploy, cookies, pairing, telemetry, or
persistent memory.

Revisit after overlap shrinks, a reproducible Codex pilot exists, or the
security/update model changes materially.

## Official materials

- [Repository](https://github.com/garrytan/gstack)
- [Architecture](https://github.com/garrytan/gstack/blob/main/ARCHITECTURE.md)
- [Codex configuration](https://github.com/garrytan/gstack/blob/main/hosts/codex.ts)
- [Changelog](https://github.com/garrytan/gstack/blob/main/CHANGELOG.md)
