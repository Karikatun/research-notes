---
id: non-mutating-design-skill-pilots
entity: practice
decision: pilot
evidence: verified
primary_direction: ui-browser-validation
related_directions: [planning-design]
tools: [impeccable, motion-skill, taste-skill]
review_state: current
---

# Pilot design skills without mutation

## Desired outcome

Start by critiquing one state without writing to the project and compare with the existing process.

## When to apply

When a new design skill promises improvement to one screen but its advantage and compatibility remain unproven.

## How to apply

1. Select one screen and one state, and retain the baseline of the current
   process, acceptance criteria, skill version, and pilot boundary.
2. Run the skill only for critique or a proposal, without writing to the project,
   installing additional tools, connecting accounts, or executing its
   suggestions.
3. Verify every recommendation against the rendered interface, design system,
   and product constraints; mark it `CONFIRMED`, `REJECTED`, `DUPLICATE`, or
   `BLOCKED`.
4. Compare the result with an ordinary review: which new confirmed signal was
   found, how many conflicts arose, and what rework was required. Do not count
   transport success as value.
5. Stop before changing the interface. Only a separately approved recommendation
   enters the normal design and verification process.
6. Retain the pilot verdict and residual risks; do not load a second overlapping
   skill until the first one's incremental value is understood.

## Success criterion

The skill finds a confirmed issue or option that the current process missed.

## Limitations

Do not load overlapping skills or allow automatic mutation before the critique result is accepted.

## Revisit

Re-evaluate when the agent workflow changes, reproducibility is lost, or a cheaper alternative appears.
