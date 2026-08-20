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

## Success criterion

The version matches the actual contract and the conclusion is backed by a primary source.

## Limitations

The retrieved excerpt may target the wrong version or fork and must be matched to the actual configuration.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
