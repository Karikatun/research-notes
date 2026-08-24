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

## How to apply

1. State the decision the analysis must support, describe the source-data schema,
   required fields, and permitted transformations, and keep the source set local
   under its existing access restrictions.
2. Inspect the schema and a representative fragment, then define a deterministic
   query or script, missing-value and duplicate handling, and control counts and
   totals in advance.
3. Run filtering, grouping, and calculations inside the local runtime. Retain the
   exact query or script and input-set identifier, but do not send raw records,
   secrets, or personal data to the model.
4. Return only the decision-changing aggregate, including units, denominator,
   exclusions, and a way to locate supporting records locally.
5. Reconcile control counts and totals with the source and spot-check records
   from every material group; do not treat technical completion of the
   calculation as proof of correctness.
6. If results disagree or meaning is ambiguous, inspect the source data and fix
   the transformation. If the decision depends on individual records or the
   logic becomes persistent, stop aggregating and use the source directly;
   propose moving the logic into tested code owned by the responsible component,
   and implement that move only after separate authorization.

## Success criterion

Accuracy is preserved with less model context.

## Limitations

Local aggregation must not hide source data, change its meaning, or become persistent untested logic.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
