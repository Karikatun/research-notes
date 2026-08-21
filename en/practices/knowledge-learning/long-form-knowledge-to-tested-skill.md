---
id: long-form-knowledge-to-tested-skill
entity: practice
decision: use
evidence: result-accepted
primary_direction: knowledge-learning
related_directions: [external-knowledge-docs]
tools: [book-to-skill]
review_state: current
---

# Turn long-form knowledge into tested skills

## Desired outcome

Create navigation and paraphrase instead of copying the source, then run security and application tests.

## When to apply

For a foundational long source that the agent must query selectively across
recurring engineering decisions. Evaluate a converter as a separate tool first;
its license does not transfer to the source material.

## Success criterion

The skill retrieves the relevant fragment and improves decisions in positive
and negative tests without reproducing protected text or forcing a heuristic
where it does not apply.

## Limitations

Do not copy protected text or convert a book without application tests, a negative control, and security review.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
