---
id: prevent-secret-leaks
entity: practice
decision: use
evidence: result-accepted
primary_direction: verification-quality-security
tools: [gitleaks]
review_state: current
---

# Prevent secret leakage from agent changes

## Desired outcome

Check staged files and history before publication without retaining discovered values.

## When to apply

Before committing and publishing changes, especially after working with configuration, logs, and external services.

## How to apply

1. Freeze the verification boundary: the prepared diff, new files,
   configuration, and reachable refs intended for publication; record the
   detector rules and allowed exceptions.
2. Scan the working tree and selected history before commit or push. Retain
   only safe coordinates and the finding type in the output, never the secret
   value, a fragment, or a reversible fingerprint.
3. Check each finding against its owning source and mark it `CONFIRMED`,
   `FALSE POSITIVE`, or `BLOCKED`; keep any exception narrow and give it a
   verifiable reason.
4. Stop publication when a finding is confirmed. Removing the value from
   files, revoking or rotating credentials, and rewriting history are separate
   actions within their own authorization boundaries.
5. Repeat the same scan for every ref intended for publication and retain the
   rule version, coverage, and result without sensitive data. An inaccessible
   part of history remains `BLOCKED`, not `PASS`.

## Success criterion

The check blocks the forbidden artifact without exposing the secret.

## Limitations

A scanner does not prove the absence of secrets and never authorizes exposing a discovered value in a report.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
