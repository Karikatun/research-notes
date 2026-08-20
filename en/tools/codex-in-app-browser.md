---
id: codex-in-app-browser
entity: tool
decision: use
evidence: result-accepted
stages: [configured, invoked, completed, result-accepted]
primary_direction: ui-browser-validation
practices: [rendered-ui-validation]
measurement: qualitative
review_state: current
---

# Codex in-app browser

## Verdict

Adopted for interactive page checks and authenticated sessions.

## Demonstrated value

Used for production and local UI, screenshots, and checking actual URL
availability. It corrects the common mistake “the server process exists, so the
page must work.”

## Limitations and decision

Network restrictions and a login wall can block a resource; visual inspection
does not replace a repeatable Playwright test. Keep it for investigation and
manual verification, and automate critical journeys separately.
