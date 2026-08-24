---
id: independent-subtask-delegation
entity: practice
decision: limited-use
evidence: result-accepted
primary_direction: agent-coordination-automation
related_directions: [efficiency-cost-observability]
tools: [codex-subagents]
review_state: current
---

# Delegate only independent subtasks

## Desired outcome

Provide narrow context and a verifiable result when synthesis costs less than local work.

## When to apply

When a subtask is independent, has narrow context, makes no product decisions, and returns a verifiable artifact.

## How to apply

1. State the parent task's question, isolate a part that requires neither shared
   synthesis nor a product decision, and define its concrete result.
2. Provide the smallest sufficient context: required inputs, constraints,
   established facts, and the exact scope of permitted files and actions.
3. Fix the return contract: the resulting artifact, references to inspected
   artifacts, checks performed, assumptions, and unresolved questions.
4. Instruct the delegate to work only within that scope and stop if it discovers
   a dependency on adjacent work, needs an owner decision, or requires new
   authority.
5. Have the parent agent compare decision-bearing claims with the source
   artifacts, repeat the minimum check, and only then include the result in the
   shared synthesis.

## Success criterion

The delegate returns an acceptable result without full repeated research by the parent.

## Limitations

Delegation hurts when briefing and revalidation cost as much as local work or shared synthesis is required.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
