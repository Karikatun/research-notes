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

## How to apply

1. Record the permitted source, access rights, skill objective, and recurring
   application scenarios; stop before conversion if the rights are unclear.
2. Build topic navigation and concise paraphrases that retain the provenance of
   conclusions without copying long passages of protected text.
3. Define triggers, limitations, counterexamples, and selection rules so the
   heuristic is not applied automatically to every task.
4. Test the converter and the resulting skill separately for untrusted
   instructions, content leakage, and unauthorized actions; access to the source
   does not authorize installation or project changes.
5. Run positive retrieval and application tests, negative applicability tests,
   and a comparison with a solution produced without the skill.
6. Retain the skill structure, test scenarios, results, limitations, and revisit
   events; accept it only if it improves the decision without reproducing the
   source.

## Success criterion

The skill retrieves the relevant fragment and improves decisions in positive
and negative tests without reproducing protected text or forcing a heuristic
where it does not apply.

## Limitations

Do not copy protected text or convert a book without application tests, a negative control, and security review.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
