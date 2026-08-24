---
id: primary-source-verification
entity: practice
decision: use
evidence: result-accepted
primary_direction: external-knowledge-docs
tools: [web-search]
review_state: current
---

# Verify changing claims with primary sources

## Desired outcome

Separate the submitted material's claim from official verification and inference.

## When to apply

For technical, security, legal, financial, costly, and otherwise changing claims in submitted material.

## How to apply

1. Break the submitted material into individual claims and mark those that are
   changing, high-risk, or require exact confirmation.
2. For each such claim, find an official primary source for the relevant
   jurisdiction, product, or standard and record exactly what it supports.
3. Assign the claim a machine-readable status of `verified`, `refuted`,
   `unknown`, or `inference`; separate the agent's interpretation explicitly
   from the source content.
4. Match the version, scope, and exceptions; do not treat search transport
   success, a result snippet, or a third-party paraphrase as evidence.
5. Retain a compact table of claim, source, status, limitation, and revisit
   trigger, and verify that the links remain accessible.
6. Leave the claim at `unknown` when primary evidence is absent or conflicting;
   for a high-stakes decision, stop until expert review or additional
   authorization.

## Success criterion

Every changing claim has a status and verification evidence.

## Limitations

Popularity, paraphrase, and search transport success do not replace direct verification; unknowns must remain unknown.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
