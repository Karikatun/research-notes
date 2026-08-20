---
id: graphify
entity: tool
decision: retired
evidence: tried
stages: [installed, configured, invoked, completed, removed]
primary_direction: context-codebase-research
related_directions: [efficiency-cost-observability]
practices: [targeted-codebase-exploration]
measurement: quantitative
review_state: current
---

# Graphify

## Verdict

Historically used in two codebases, then removed. `graphify` is no longer in
PATH, and `graphify-out` is absent from both checked codebases.

## Problem and potential value

Builds a codebase knowledge graph and offers `query`, `path`, and `explain`
instead of broad file reading. Potentially useful for initial exploration of a
large unfamiliar repository.

## Actual use

- At least 181 shell calls across 11 sessions.
- One graph contained 75 files, about 283,218 words, 547 nodes, 1,014 edges,
  5 hyperedges, and 31 communities.
- Agent instructions, an OpenCode plugin, and Git hooks were installed.

## Demonstrated value

The graph identified major subsystems, and `query` returned nodes and
edges. No comparison with `rg` or a code explorer measured accuracy, time, or
tokens.

## Failures and limitations

- The bare command was intermittently absent from PATH, requiring an absolute wrapper.
- A later mandatory instruction required a graph refresh after the executable
  was already absent from the expected environment.
- Generated graph, cache, hooks, and configuration created substantial maintenance surface.
- `cost.json` reported zero token cost and could not demonstrate return on investment.
- The graph could drift behind the source code.

## Decision

Do not restore it as mandatory infrastructure. A new pilot is acceptable only
as a read-only experiment across 10–20 identical architecture questions with a
control group that does not use Graphify. Measure accuracy, time, tokens, and
false relationships.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Unfamiliar-codebase exploration | Persistent graph and queries | Targeted search and code inspection | Higher accuracy or lower time and tokens | not accepted | The graph found subsystems, but no advantage was measured | Cache, hooks, and graph refresh added maintenance | high for cost, low for value |

## Measurement contract

Current calls prove use, not value. A new measurement requires 10–20 identical architecture questions with and without Graphify. Compare accuracy against verified code references, time, tokens, false relationships, and maintenance cost.
