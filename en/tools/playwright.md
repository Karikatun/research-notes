---
id: playwright
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: verification-quality-security
related_directions: [ui-browser-validation]
practices: [browser-runtime-performance-audit, client-bundle-topology-validation, controlled-interface-optimization-validation, critical-user-journey-evidence, deterministic-agent-output-validation, rendered-ui-validation]
measurement: telemetry
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/microsoft/playwright]
review_state: current
---

# Playwright

## Verdict

Adopted as the agents' primary browser/E2E tool. Standalone contexts are more
useful than a separate Playwright MCP for real multi-user scenarios.

## Actual use

- At least 136 direct shell calls across 25 sessions in the selected sample.
- Desktop/mobile, two independent users, authentication, gameplay, editor, and storage.
- Integrated into project checks and CI in several projects.

## Demonstrated value

Verifies the user-visible signal through real Chromium and independent browser
contexts. It found problems invisible to unit tests: responsive layout,
overlays, reconnect behavior, navigation, and multi-user state.

## Failures and limitations

Browser revision mismatches, sandbox permissions, occupied ports, an unstarted
server, and overlays can cause infrastructure failures. A screenshot does not
prove behavior, and mock E2E does not prove the production contract.

## Significant attempts

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Install a browser in CI | Versioned browser runner | Arbitrary version through an external wrapper | Browser revision matches the workspace package | accepted after repair | Switching to pinned Playwright removed the infrastructure failure | The initial wrapper downloaded an incompatible revision | high |
| Check primary-action visibility | Browser geometry assertion | Partial viewport intersection only | The full bounding box is reachable and not clipped by a container | partial | Human review found a problem missed by automation | The green assertion had to be strengthened | high |
| Verify computation after moving it to a worker | Browser execution check plus a user regression flow | Build output without a warning only | The emitted worker performs a real computation, terminates, and the persisted flow passes | accepted after rerun | Confirmed execution separately from bundle structure | An unrelated early-interaction timeout required isolation and a clean full rerun | high |

## Decision

Keep as the primary browser gate. Use isolated ports and databases, and record
what actually passed: mock, integration, or production-like flow.

## Telemetry contract

The unit is a completed event for the exact tool or command in available local task logs. The count separates invocation, technical completion, and accepted result; raw logs are not published. Recalculate with the same filter after a new meaningful event set accumulates or the log schema changes.

## Official materials

- [Repository](https://github.com/microsoft/playwright)
