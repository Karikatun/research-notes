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

## How to apply

1. Freeze the original task, required behavior, allowed scope, and existing
   boundaries; use them as the pilot baseline.
2. Review the diff for new layers, factories, generic interfaces, wrappers,
   dependencies, and unrequested capabilities.
3. For each candidate, find actual callers, independent reasons to change, and
   confirmed variability. Without them, keep the finding as a hypothesis, not
   a demand to remove code.
4. Compare the current shape with the smallest cohesive alternative and record
   the expected reduction in comprehension cost and the behavior that must not
   be lost.
5. In a read-only pilot, stop at ranked proposals. After authorization,
   simplify only confirmed candidates and repeat the same tests and public
   scenarios.
6. Accept the pilot only when it provides a confirmed signal beyond ordinary
   review; record no additional value or increased ceremony as reasons to
   limit or reject the approach.

## Success criterion

Simplification preserves behavior and lowers comprehension cost.

## Limitations

Do not remove an abstraction merely because it is small; verify the actual change boundary and behavior preservation first.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
