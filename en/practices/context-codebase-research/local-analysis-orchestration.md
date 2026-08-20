---
id: local-analysis-orchestration
entity: practice
decision: use
evidence: result-accepted
primary_direction: context-codebase-research
related_directions: [efficiency-cost-observability]
tools: [node-repl-mcp]
review_state: current
---

# Aggregate local data outside model context

## Desired outcome

Run filtering and aggregation locally, returning only results that can change the decision.

## When to apply

When tool output is large and structured and needs filtering, grouping, or aggregation before reaching the model.

## Success criterion

Accuracy is preserved with less model context.

## Limitations

Local aggregation must not hide source data, change its meaning, or become persistent untested logic.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
