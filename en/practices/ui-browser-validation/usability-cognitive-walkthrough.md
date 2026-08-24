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

Assess whether the interface provides visible conditions for the intended user
to understand the goal, notice the next action, connect it to their task, and
interpret feedback and recovery, rather than only whether automation can
traverse the route.

## When to apply

After a flow is rendered and before drawing a conclusion about UX or usability,
especially for onboarding, unfamiliar information architecture, critical
decisions, errors, and recovery. For every step, record the role, context known
to the user, goal, expected action, and visible system response.

## How to apply

1. Record the role, starting state, goal, context known to the user, viewport,
   completion criterion, and the reviewer's prior knowledge. If the reviewer has
   already studied the source or interface, do not present them as a novice and
   use an independent reviewer when possible.
2. Divide the journey into stable steps at visible user decisions rather than
   internal components. Record the expected action and system response for every
   step in advance.
3. At each step, make an expert prediction by asking four questions in order:
   can the intended user understand the current goal; notice the required action;
   connect the action to the goal; and understand the outcome, error, and recovery
   path?
4. Perform the action in the rendered interface without hints from source code.
   Record visible cues, hidden prerequisites, ambiguous terminology, the point
   of hesitation or stoppage, and the actual system response; do not substitute
   subjective taste for observation.
5. Assign every step `PASS`, `FAIL`, `BLOCKED`, or hypothesis status; here `PASS`
   means only that the scoped expert walkthrough found no visible barrier, not
   that user comprehension is proven. For a finding, record the state, observed
   obstacle, impact, confidence, and retest method. In a read-only task, stop at
   the report and do not change copy, layout, or tests.
6. After an authorized fix, start with a clean session in the same initial state
   and replay the problematic step and full journey, using an independent
   reviewer when possible. Run automated E2E and accessibility checks separately:
   they protect behavior but do not turn an expert prediction into proven
   comprehension.

## Success criterion

For every step, record an expert prediction: whether the goal is sufficiently
visible, the expected action is noticeable, its connection to the goal is shown,
and the system response explains the outcome and recovery. `PASS` remains a
conclusion that no visible barrier was found in the scoped scenario, not a claim
about real-user behavior. Record a conclusion even when there are no findings;
an unavailable or unverified check remains `BLOCKED` or a hypothesis. Every
finding is tied to a scenario, exact step, and state, and
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
