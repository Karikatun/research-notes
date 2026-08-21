---
id: axe-core
entity: tool
decision: use
evidence: result-accepted
stages: [documented, configured, invoked, completed, result-accepted]
primary_direction: ui-browser-validation
related_directions: [verification-quality-security]
practices: [rendered-ui-validation]
measurement: qualitative
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/dequelabs/axe-core]
review_state: current
---

# axe-core

## Verdict

Accepted for deterministic automated checks of supported accessibility rules,
but not as evidence of complete usability acceptance.

## Role in agent-assisted development

Adds a reproducible accessibility signal to a browser scenario and turns some
findings into an automated barrier.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Check key interface states | Automated accessibility rules | Visual review only | Supported violations reproducibly block the check | accepted within scope | Accessibility is checked on the rendered page | A green result missed a clipped primary action and did not prove usability | high |

## Limitations

It does not assess clarity, visual hierarchy, full element visibility, or
cognitive load. Geometry assertions and human acceptance remain necessary.

## Decision

Keep it in the browser gate and never describe its result as a complete UX PASS.

## Official materials

- [Repository](https://github.com/dequelabs/axe-core)
