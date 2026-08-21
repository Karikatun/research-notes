---
id: playwright-mcp
entity: tool
decision: retired
evidence: tried
stages: [installed, configured, invoked, completed, removed]
primary_direction: ui-browser-validation
related_directions: [verification-quality-security]
practices: [rendered-ui-validation]
measurement: qualitative
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/microsoft/playwright-mcp]
review_state: current
---

# Playwright MCP

## Verdict

Removed by explicit user decision. Browser coverage remains available through
standalone Playwright and other runtime tools.

## Potential and demonstrated value

It promised convenient browser control from the agent, but the separate MCP
integration duplicated existing capabilities and demonstrated no unique value.

## Decision

Do not restore it without a scenario that Playwright CLI, project tests, or
Chrome DevTools MCP cannot cover. Installation alone is not a benefit.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Browser-scenario control | Separate MCP | Direct Playwright and the in-app browser | A new scenario not covered by existing tools | not accepted | No unique value was demonstrated | The MCP was removed while browser coverage remained | medium |

## Official materials

- [github.com](https://github.com/microsoft/playwright-mcp)
