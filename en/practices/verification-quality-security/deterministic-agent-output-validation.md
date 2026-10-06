---
id: deterministic-agent-output-validation
entity: practice
decision: use
evidence: result-accepted
primary_direction: verification-quality-security
tools: [playwright, opencode, appsec-fix-recommendations, sonar-fix-recommendations, stryker]
review_state: current
---

# Accept agent output with deterministic checks

## Desired outcome

Do not treat the agent's self-report as evidence; run relevant tests, builds,
and analyzers. For structured output, leave semantic choices to the agent and
derive safe mechanical fields deterministically in product-owned code.

## When to apply

Before accepting an agent-produced fix, feature, refactor, or security
recommendation. Apply it specifically when the agent prepares structured input
while technical identifiers, layout, neutral defaults, or the integrity of real
files can be derived without a semantic guess.

Another case is removing privacy- or security-sensitive or hidden behavior.
Deleting an import or call from source does not yet prove that the related UI or
code is absent from the emitted build.

## How to apply

1. Before execution, define the primary observable result, critical
   invariants, expected artifacts, and negative cases; do not include the
   agent's self-report in the criteria.
2. Draw a boundary between semantics and mechanics. The agent supplies only
   substantiated semantic decisions; a product-owned normalizer derives safe
   technical IDs, layout, neutral defaults, and integrity metadata from the
   actual bytes.
3. Normalize only absent mechanical fields. Explicitly invalid, unknown, or
   ambiguous semantics must fail before any write rather than be repaired by a
   guess.
4. Pass prompt examples through the same normalizer and validator that process
   real output, alongside negative cases for invalid types, unknown fields, and
   ambiguous references.
5. Choose the smallest verification ladder from the nearest public boundary to
   broader tests, builds, analyzers, and E2E.
6. Run the checks from a reproducible baseline and retain commands, versions,
   inputs, exit codes, and safe artifact references.
7. For structured output, separately verify existence, allowed path, schema,
   completeness, and relevance to the task; transport success or exit code zero
   is insufficient.
8. When removing sensitive or hidden behavior, predeclare the applicable
   configuration profiles and forbidden UI markers, endpoints, and providers.
   For every profile, use the build manifest or an equivalent source to obtain
   the complete set of emitted HTML and JavaScript artifacts, verify that the
   whole set contains no forbidden match, and preserve a positive critical user
   path invariant at the same time. If the claim includes no runtime requests,
   confirm it separately through browser network observation.
9. Run applicable negative and regression cases. Any negative result overrides
   the agent's narrative and leaves the outcome `FAIL` or `INCONCLUSIVE`.
10. After an authorized fix, repeat the original check and adjacent invariants
   without weakening expectations. If the task was review-only, stop at the
   evidence bundle.

## Success criterion

Checks reproducibly confirm user-visible behavior and no regression. For
structured output, artifact existence, allowed path, schema, and completeness
are validated separately; agent narrative cannot override a negative result.
The same semantic input produces the same normalized artifact, integrity
matches the actual bytes, prompt examples pass through the same path, and
invalid, unknown, or ambiguous input is rejected before a write.

When sensitive or hidden behavior is removed, every applicable profile has zero
forbidden markers, endpoints, and providers across the complete emitted HTML and
JavaScript set, whose coverage is bound to the build manifest or its equivalent,
while the positive critical user path remains intact. No-runtime-request claims
are confirmed only with separate browser network observation.

## Alternatives and limitations

A broad green check is insufficient when it does not execute the changed user
behavior or critical invariant. Exit code zero is also insufficient when a tool
call was rejected, final JSON is missing, or the expected artifact was not
created.

Alternatives are to require the agent to emit the complete strict schema or to
construct it with a deterministic form. The first moves mechanical detail into
probabilistic output; the second is safer when the semantic options can already
be enumerated. A normalizer becomes dangerous when it starts inventing meaning:
defaults must remain neutral and ambiguity must block. The normalizer
specialization has only static verification from a committed normalizer and its
tests; it was not replayed independently and is not treated as a separate
accepted result.

String matching in HTML and JavaScript can miss minified, encoded, or
runtime-assembled behavior and can falsely match an innocuous string. Declare
profiles and markers before the check, and derive artifact-set completeness from
the manifest or an equivalent source; otherwise the scan can easily become a
ritual. The removal specialization is supported only by a statically inspectable
committed build-output test; it was not replayed independently and is not treated
as a separate accepted result. Measurement for both specializations remains
qualitative, with no claimed numerical effect.

## Revisit

Re-evaluate when the agent workflow, schema, normalizer, or prompt examples
change; when reproducibility is lost; when ambiguous input is accepted; or when
a cheaper alternative appears.
