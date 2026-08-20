---
id: playwright
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: verification-quality-security
related_directions: [ui-browser-validation]
practices: [deterministic-agent-output-validation, rendered-ui-validation]
measurement: telemetry
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

## Decision

Keep as the primary browser gate. Use isolated ports and databases, and record
what actually passed: mock, integration, or production-like flow.

## Telemetry contract

The unit is a completed event for the exact tool or command in available local task logs. The count separates invocation, technical completion, and accepted result; raw logs are not published. Recalculate with the same filter after a new meaningful event set accumulates or the log schema changes.

## Official materials

- [github.com](https://github.com/microsoft/playwright)
