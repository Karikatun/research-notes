---
id: selective-response-compression
entity: practice
decision: limited-use
evidence: tried
primary_direction: efficiency-cost-observability
tools: [caveman]
review_state: current
---

# Compress agent responses selectively

## Desired outcome

Use terse mode for narrow stages where the format does not hide decisions or risks.

## When to apply

During a narrow fix or status handoff where the reader needs a compact fact set and next action.

## Success criterion

The response is shorter but still sufficient for verification and the next action.

## Limitations

Do not use for architecture, risks, hard diagnosis, or final reporting when brevity hides rationale.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
