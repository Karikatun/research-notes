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

## How to apply

1. Freeze the exact build, role, route, starting state, data, action, and bounded
   observation window; define the privacy boundary in advance.
2. Reproduce the scenario and separately collect applicable console events,
   network requests, errors, traces, and queue state without changing
   production state.
3. Retain a normalized sequence summary and references to protected artifacts;
   do not move secrets, personal data, or raw logs into the report.
4. Link the event to the executing path and formulate testable causal
   hypotheses. Do not present correlation, a stack trace, or a single error as
   the cause.
5. Change one variable at a time and repeat the same scenario; a confirmed cause
   must reproducibly change the observable signal.
6. If only an audit is authorized, stop at events, hypotheses, and verification
   methods. Production-observability access and any remediation require the
   corresponding authority.

## Success criterion

The conclusion points to an observed event without presenting correlation as causation.

## Limitations

Observability shows events, but causal conclusions require correlation with code and a reproducible scenario.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
