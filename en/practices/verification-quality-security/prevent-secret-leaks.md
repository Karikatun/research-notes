---
id: prevent-secret-leaks
entity: practice
decision: use
evidence: result-accepted
primary_direction: verification-quality-security
review_state: current
---

# Prevent secret leakage from agent changes

## Desired outcome

Check staged files and history before publication without retaining discovered values.

## When to apply

Before committing and publishing changes, especially after working with configuration, logs, and external services.

## Success criterion

The check blocks the forbidden artifact without exposing the secret.

## Limitations

A scanner does not prove the absence of secrets and never authorizes exposing a discovered value in a report.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
