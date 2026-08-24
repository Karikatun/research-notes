---
id: chrome-devtools-mcp
entity: tool
decision: use
evidence: result-accepted
stages: [configured, invoked, completed, result-accepted]
primary_direction: ui-browser-validation
related_directions: [context-codebase-research]
practices: [browser-runtime-performance-audit, client-bundle-topology-validation, rendered-ui-validation, runtime-observability-evidence]
measurement: telemetry
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/ChromeDevTools/chrome-devtools-mcp]
review_state: current
---

# Chrome DevTools MCP

## Verdict

Adopted for runtime inspection, network activity, console output, and
performance traces.

## Measured data

258 completed calls across nine sessions; all 258 completed technically.

## Demonstrated value

Provides DOM/runtime evidence, network requests, and performance insights that
static code cannot provide. Useful for diagnosis, but not a replacement for
E2E.

In an accepted production-interface audit, controlled cold, idle, navigation,
and throttled scenarios separated observed loading and render activity from a
hot timer found in source. The audit identified a cache-policy defect and
excessive state-update frequency without presenting an untested active flow as
measured.

## Limitations and decision

100% transport success does not imply a correct UX conclusion. Keep it for
investigating current browser state; encode user journeys in Playwright tests.

## Telemetry contract

The unit is a completed event for the exact tool or command in available local task logs. The count separates invocation, technical completion, and accepted result; raw logs are not published. Recalculate with the same filter after a new meaningful event set accumulates or the log schema changes.

## Official materials

- [github.com](https://github.com/ChromeDevTools/chrome-devtools-mcp)
