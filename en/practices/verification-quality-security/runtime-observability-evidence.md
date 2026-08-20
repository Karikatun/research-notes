---
id: runtime-observability-evidence
entity: practice
decision: use
evidence: result-accepted
primary_direction: verification-quality-security
related_directions: [ui-browser-validation]
tools: [chrome-devtools-mcp, sentry-mcp]
review_state: current
---

# Use runtime observability as evidence

## Desired outcome

Collect console, network, trace, and runtime errors separately from model inference.

## When to apply

When a defect depends on runtime, network, browser, queue, or production error state that source inspection cannot reveal.

## Success criterion

The conclusion points to an observed event without presenting correlation as causation.

## Limitations

Observability shows events, but causal conclusions require correlation with code and a reproducible scenario.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
