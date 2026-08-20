---
id: avoid-agent-overengineering
entity: practice
decision: pilot
evidence: verified
primary_direction: verification-quality-security
related_directions: [implementation-refactoring]
tools: [ponytail]
review_state: current
---

# Review agent changes for overengineering

## Desired outcome

Look for unnecessary layers, abstractions, and scope growth after behavior is already correct.

## When to apply

After a small task when the agent added layers, factories, generic interfaces, or unrequested capabilities.

## Success criterion

Simplification preserves behavior and lowers comprehension cost.

## Limitations

Do not remove an abstraction merely because it is small; verify the actual change boundary and behavior preservation first.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
