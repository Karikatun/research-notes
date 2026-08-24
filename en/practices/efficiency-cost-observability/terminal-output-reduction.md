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

## How to apply

1. Before running the command, define its output format, expected exit code and
   signal for the next decision, the method for obtaining full output, and
   access restrictions on the data it may contain.
2. For a known format, inspect a complete example and define a deterministic
   filter that preserves the exit code, failed checks, final counts, and required
   context around errors. Use full output for exact JSON, forensic logs, and
   unknown formats.
3. Run the original command through the filter without changing its arguments,
   working state, or completion semantics.
4. Retain the command and filtering rule, compact output, exit code, and a
   reference to the protected full result. Put only a sanitized excerpt without
   secrets, personal data, or raw logs into a public artifact.
5. On failure, an unexpected summary, or a missing signal, open the full result
   and reconcile errors and counts. Count a full-output lookup or rerun caused by
   a hidden line as a quality guard.
6. If the filter changes the result's meaning or prevents replay of the
   decision, stop compressing, run the command in full-output mode, and revise
   the rule before its next use.

## Success criterion

Context shrinks without more reruns caused by hidden information.

## Limitations

Do not filter exact JSON, forensic logs, or unknown formats; full output must remain available.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
