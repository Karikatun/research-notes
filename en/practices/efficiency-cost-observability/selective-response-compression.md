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

## How to apply

1. Before compression, name the stage, reader, and next decision, then make a
   required set: result and exact status, evidence, risk or blocker, and next
   action.
2. Define a short response schema and an exit condition for the mode; keep the
   complete source evidence available separately.
3. Enable compression only on an explicit request or for a pre-bounded narrow
   stage. Remove explanatory noise while retaining the safe identifiers,
   sanitized command signatures, and error summaries required for verification;
   keep secrets, raw logs, local paths, and project identity only in protected
   source artifacts.
4. Before sending, compare the response with the required set, privacy boundary,
   and source artifacts; retain the compact response and safe references to its
   supporting evidence.
5. Switch to the normal format immediately when ambiguity, an architecture or
   security decision, hard diagnosis, or a completion report requires rationale.
   End compression after the narrow stage.

## Success criterion

The response is shorter but still sufficient for verification and the next action.

## Limitations

Do not use for architecture, risks, hard diagnosis, or final reporting when brevity hides rationale.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
