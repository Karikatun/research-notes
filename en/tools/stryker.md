---
id: stryker
entity: tool
decision: limited-use
evidence: measured
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: verification-quality-security
practices: [deterministic-agent-output-validation]
measurement: quantitative
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/stryker-mutator/stryker-js]
review_state: current
---

# Stryker

## Verdict

Adopted as a blocking mutation-testing tool for critical public policies.

## Actual use and measured data

One application: contracts 80,13%, runtime 100%, reader auth 100%, progress 83,33%,
catalog 98,61%, editor draft/preview 93,36%, materials 86,91%. A separate pilot:
100% across eight mutants.

## Demonstrated value

Surviving mutants revealed missing checks for required fields and boundary
branches that ordinary coverage does not show.

## Failures and limitations

It is time-consuming and requires narrow scopes and stable deterministic tests.
It is unnecessary for CSS and declarative markup. A percentage cannot be
transferred between different mutant sets.

## Decision

Keep it for contracts/domain/application policies with a threshold and an
explicit survivor inventory. Do not run it mechanically across the entire
repository.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Testing critical-policy tests | Mutation testing | Regular tests and coverage | Surviving mutants reveal a missing assertion | accepted | Missing required-field and boundary-branch checks were found | High runtime cost; results depend on the mutant set | high |

## Measurement contract

The unit is a mutant in a fixed scope and configuration. Mutation score is comparable only within the same mutant set; it measures test strength, not agent success. Agent-practice effect requires before/after comparison on an unchanged set and inspection of surviving mutants.

## Official materials

- [github.com](https://github.com/stryker-mutator/stryker-js)
