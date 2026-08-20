---
id: source-32bd967a
entity: source
decision: pilot
evidence: verified
primary_direction: planning-design
practices: [design-options-before-implementation, design-context-without-system-replacement]
tools: [pen-dev]
source_type: video
review_state: current
---

# Anonymous material: agent-driven canvas for UX/UI

## Material claims

- A coding agent can help create and modify UX/UI directly inside an IDE.
- The demo shows a canvas with multiple screens, an agent prompt, and visual
  editing of a design artifact.
- The tool is presented as a possible replacement for a separate Figma
  workflow.

## Verification

Official documentation confirms a local MCP canvas, Codex support, full write
access to `.pen`, a Git-versioned design artifact, and an agent-driven
design↔code workflow. It does not establish that generated code is automatically
production-ready or that the product fully replaces Figma collaboration,
prototyping, and handoff.

Material limitations include a closed-source application, possible breaking
format changes, mandatory accounts, possible changes to the Codex `config.toml`,
and image or SVG requests routed through external providers.

## Outcome

Run a limited pilot rather than adopt it. Test one existing component and one
new screen in an isolated profile, measuring design-system fidelity, code
quality, and manual rework. Do not install it or transmit private data without a
separate decision.

## Official evidence

- [Coding-agent integration](https://docs.pen.dev/getting-started/ai-integration)
- [Design ↔ Code](https://docs.pen.dev/design-and-code/design-to-code)
- [`.pen` format](https://docs.pen.dev/for-developers/the-pen-format)
- [Privacy Policy](https://pen.dev/privacy-policy)
- [Pricing](https://pen.dev/pricing)
