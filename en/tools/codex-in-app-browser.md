---
id: codex-in-app-browser
entity: tool
decision: use
evidence: result-accepted
stages: [configured, invoked, completed, result-accepted]
primary_direction: ui-browser-validation
practices: [controlled-interface-optimization-validation, critical-user-journey-evidence, design-options-before-implementation, rendered-ui-validation, usability-cognitive-walkthrough]
measurement: qualitative
availability: account-gated
source_access: closed-source
origin: platform
official_urls: [https://learn.chatgpt.com/docs/browser]
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

## Official materials

- [Built-in browser documentation](https://learn.chatgpt.com/docs/browser)
