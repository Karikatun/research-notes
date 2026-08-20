---
id: pen-dev
entity: tool
decision: pilot
evidence: verified
stages: [documented]
primary_direction: planning-design
related_directions: [ui-browser-validation, implementation-refactoring]
practices: [design-options-before-implementation, design-context-without-system-replacement]
measurement: qualitative
review_state: current
---

# pen.dev

## Verdict

A promising candidate for an isolated design pilot with Codex, but not a
verified Figma replacement or a proven source of production code. Do not
install it in the primary profile or repository yet.

## Role in agent-assisted development

A local MCP server gives a coding agent read and full write access to a vector
canvas. JSON-like `.pen` files live beside code and can be versioned through
Git. The documentation covers option generation, importing structure from code,
generating code from designs, variables, components, screenshots, and layout
problem inspection.

## Verified properties

- Codex CLI, Claude Code, Cursor, OpenCode, and other MCP clients are supported.
- Design operations run through a local MCP server while the application or IDE
  extension is running.
- Design→code and code→design are performed by an agent from prompts, not by a
  deterministic compiler; the pixel-perfect production-code promise is not
  independently established.
- The `.pen` format is documented, but the vendor reserves the right to make
  breaking changes; the application source code is private.
- The tool is currently free, while future paid plans are explicitly possible.
- The documentation acknowledges that integration may modify or duplicate the
  Codex `config.toml` and recommends a backup before first use.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Demo and official-documentation review without installation | agent-driven design canvas | Figma MCP, design service, HTML prototype | Codex integration and a controllable design artifact are verified | partial | a new repo-local design workflow was identified | project outcome and generated-code quality remain untested | high for capabilities, low for value |

## Limitations

- Full MCP write access can modify the design artifact broadly; require a diff
  and explicit human acceptance.
- `.pen` adds another versioned artifact that can drift from code and the owning
  design system.
- A canvas does not replace accessibility, responsive-state, interaction, and
  real-browser validation.
- Account authentication is mandatory. Product analytics uses PostHog and error
  monitoring uses Sentry.
- Text AI requests with a user-owned provider go directly to that provider, but
  image and SVG requests pass through vendor infrastructure and third parties.
  Private data requires a separate privacy review.
- Figma import is described as copy/paste rather than persistent bidirectional
  synchronization.

## Decision

Pilot only after explicit approval in a separate temporary profile and a
repository without sensitive data. Back up `config.toml`, pin the version, and
disable optional external image and AI features first.

Compare one existing component and one new screen against the current workflow
for option quality, design-system fidelity, time, manual rework, and generated
code accuracy. Accept the result only after code review, rendered browser
inspection, and an accessibility check. Revisit after a real pilot or changes
to the format, license, privacy flow, or pricing.

## Official materials

- [Official website](https://pen.dev/)
- [Coding-agent integration](https://docs.pen.dev/getting-started/ai-integration)
- [Design ↔ Code](https://docs.pen.dev/design-and-code/design-to-code)
- [`.pen` format](https://docs.pen.dev/for-developers/the-pen-format)
- [Privacy Policy](https://pen.dev/privacy-policy)
- [Pricing](https://pen.dev/pricing)
