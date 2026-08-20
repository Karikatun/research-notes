---
id: source-b321d228
entity: source
decision: pilot
evidence: verified
primary_direction: agent-coordination-automation
practices: [selective-agent-process-skills]
tools: [gstack]
source_type: repository
review_state: current
---

# Anonymous material: integrated process suite for coding agents

## Material claims

- A set of specialist roles can take work from product research through review,
  browser QA, release, and retrospective.
- A shared sequence and artifact handoffs between skills should provide more
  value than separate unconnected prompts.
- One suite can support Claude Code, Codex, and other coding agents.
- The author's high personal productivity is presented as evidence for the
  process.

## Verification

The official code confirms multi-host skill generation, a dedicated Codex
configuration, a persistent browser daemon, tests, and opt-in telemetry. The
inspected tree contains 56 skill templates, 12 host configurations, and 703
test files. Local project value has not been tested, and the author's personal
statistics have no control group and do not transfer to another workflow.

Version 1.68.2 fixed a real pair-agent access-revocation flaw. Browser pairing,
cookies, tunnels, auto-update, hooks, deploy, and persistent memory therefore
cannot be accepted from documentation claims alone.

## Outcome

Do not adopt the whole suite at once. An isolated read-only workflow pilot with
a pinned revision and comparison against the active process is reasonable.
Exclude external mutations, cookies, pairing, telemetry, team mode, and deploy
from the first trial.

## Official evidence

- [Architecture](https://github.com/garrytan/gstack/blob/main/ARCHITECTURE.md)
- [Codex configuration](https://github.com/garrytan/gstack/blob/main/hosts/codex.ts)
- [Package metadata](https://github.com/garrytan/gstack/blob/main/package.json)
- [Changelog](https://github.com/garrytan/gstack/blob/main/CHANGELOG.md)
