---
id: book-to-skill
entity: tool
decision: pilot
evidence: verified
stages: [documented]
primary_direction: knowledge-learning
related_directions: [external-knowledge-docs]
practices: [long-form-knowledge-to-tested-skill]
measurement: qualitative
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/virgiliojr94/book-to-skill]
review_state: current
---

# book-to-skill

## Verdict

The public converter was verified as a candidate, but retained history does not
provide enough evidence of an accepted result from running this exact tool.

## Role in agent-assisted development

Turns a long technical source into navigation and an agent skill so the full
material is not loaded into every task.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Choose a process for converting a long source | Candidate converter | Manually structured skill | The result passes safety review plus positive and negative application tests | not accepted without a pilot | Capability and constraints were verified from the primary source | No retained evidence of an actual run result | high for availability, low for benefit |

## Limitations

The converter license does not grant permission to redistribute a transformed
copyrighted source. A skill should paraphrase and route rather than copy text.

## Decision

Run one isolated pilot on an authorized source and compare it with a manual
structure. Do not raise the evidence level before that.

## Official materials

- [Repository](https://github.com/virgiliojr94/book-to-skill)
