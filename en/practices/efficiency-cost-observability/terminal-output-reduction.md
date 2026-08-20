---
id: terminal-output-reduction
entity: practice
decision: use
evidence: measured
primary_direction: efficiency-cost-observability
related_directions: [context-codebase-research]
tools: [rtk]
review_state: current
---

# Reduce terminal output without losing signal

## Desired outcome

Filter noisy output while retaining access to the full result for diagnosis.

## When to apply

For long repetitive Git, test, CI, and process output when the next decision does not need the full text.

## Success criterion

Context shrinks without more reruns caused by hidden information.

## Limitations

Do not filter exact JSON, forensic logs, or unknown formats; full output must remain available.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
