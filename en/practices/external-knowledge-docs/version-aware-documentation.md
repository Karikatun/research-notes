---
id: version-aware-documentation
entity: practice
decision: use
evidence: result-accepted
primary_direction: external-knowledge-docs
tools: [context7, openai-docs-mcp]
review_state: current
---

# Retrieve version-aware documentation

## Desired outcome

Verify a library, SDK, or product against current official documentation instead of model memory.

## When to apply

When using an external API, SDK, model, or tool whose contract may have changed or is version-dependent.

## How to apply

1. Determine the actual installed version, release channel, lockfile, local
   types, and configuration of the library, SDK, or product under review.
2. Find official documentation for that exact version, or explicitly identify
   the nearest available version and the possible gap.
3. Compare the documented contract with local types, existing usage, and
   observed behavior; do not smooth over discrepancies with a guess.
4. Form a decision only from the verified intersection and, when needed, test it
   with an existing test or a local minimal reproduction that does not mutate an
   external system. An account-bound, billable, or state-changing external call
   requires separate authorization.
5. Retain the version, official source, verified contract, assumptions, and the
   event that should trigger another check.
6. Stop if the version or compatibility cannot be established; dependency
   updates, tool installation, project changes, and active external calls require
   separate authorization.

## Success criterion

The version matches the actual contract and the conclusion is backed by a primary source.

## Limitations

The retrieved excerpt may target the wrong version or fork and must be matched to the actual configuration.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
