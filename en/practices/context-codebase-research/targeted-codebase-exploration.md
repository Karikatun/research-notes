---
id: targeted-codebase-exploration
entity: practice
decision: use
evidence: result-accepted
primary_direction: context-codebase-research
related_directions: [efficiency-cost-observability]
tools: [graphify]
review_state: current
---

# Explore a codebase with targeted tools

## Desired outcome

Start with inexpensive search and add a graph or index only for a demonstrated gap.

## When to apply

For a concrete ownership, data-flow, or module-boundary question in an unfamiliar or large codebase.

## How to apply

1. Record one concrete question and the kind of evidence that can answer it: an
   owner, definition, call chain, data flow, or module boundary.
2. Read the repository instructions, record the revision under investigation,
   and start with exact-symbol search, inspection of the files responsible for
   the behavior, and only the tests and configuration relevant to the question.
3. Trace the minimum chain of definitions, imports, callers, and states; retain
   search commands and file-and-line references while separating observed facts
   from hypotheses.
4. Name the remaining gap explicitly. Build a bounded index or graph at the
   recorded revision only for that gap, and retain its build and query
   parameters; installation, hooks, and persistent artifacts require separate
   authorization.
5. Check the index or graph answer against source code, tests, and reverse
   search. Record stale data, false relationships, and areas the tool does not
   cover separately.
6. Stop exploring when the collected evidence answers the original question.
   Retain a concise evidence map, replay method, and uncertainties without
   turning graph refreshes into a mandatory ritual.

## Success criterion

The answer is accurate, reproducible, and obtained with lower maintenance cost.

## Limitations

A persistent graph is unnecessary when targeted search, owning-path inspection, and tests already answer the question.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
