---
id: usability-cognitive-walkthrough
entity: practice
decision: use
evidence: result-accepted
primary_direction: ui-browser-validation
related_directions: [planning-design]
tools: [codex-in-app-browser]
review_state: current
---

# Run a cognitive walkthrough separately from automated UI checks

## Desired outcome

Assess whether the intended user understands the goal, notices the next action,
connects it to their task, and interprets feedback and recovery, rather than
only whether automation can traverse the route.

## When to apply

After a flow is rendered and before drawing a conclusion about UX or usability,
especially for onboarding, unfamiliar information architecture, critical
decisions, errors, and recovery. For every step, record the role, context known
to the user, goal, expected action, and visible system response.

## Success criterion

For every step, record whether the goal is clear, the expected action is
noticeable, the user can connect that action to the goal, and the system
response explains the outcome and recovery. Record a conclusion even when
there are no findings; an unavailable or unverified check remains `BLOCKED` or
a hypothesis. Every finding is tied to a scenario, exact step, and state, and
states the observed behavior, impact, and retest method. A confirmed defect
remains `FAIL`; when remediation is in scope, it is fixed in the responsible
layer and the same step is repeated.

## Alternatives and limitations

An expert or agent walkthrough is not research with real users and does not by
itself grant a usability PASS. Browser automation can reproduce states but
does not prove comprehension, trust, or learning effectiveness. Subjective
taste without a scenario and user consequence must not become a blocking CI
rule.

## Revisit

Re-evaluate when new user research appears, the audience changes, or the
scenario and information architecture change substantially.
