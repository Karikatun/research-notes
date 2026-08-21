---
id: rtk
entity: tool
decision: use
evidence: measured
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: efficiency-cost-observability
related_directions: [context-codebase-research]
practices: [terminal-output-reduction]
measurement: quantitative
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/rtk-ai/rtk]
review_state: current
---

# RTK

## Verdict

Adopted as the agents' global shell wrapper. Its benefit is measurable, but raw
output must remain available through `rtk proxy` or a direct command.

## Problem and potential value

Compresses repetitive Git, test, process, and CI output into the signal needed
by the model. It can reduce context and the cost of repeated analysis.

## Actual use

The selected history contains at least 3,203 RTK-wrapped shell calls across six
work contexts. A global instruction requires the prefix for shell commands.

## Measured data

- Version: `0.42.4`.
- Global statistics: 5,875 commands.
- Input volume: about 5.1 million tokens; 2.8 million after filtering.
- Internal estimated savings: 2.3 million tokens, or 45.4%.
- 166 `git commit` calls: estimated savings of 960,200 tokens, averaging 94.9%.

These are RTK statistics, not an independent billing calculation or a measure
of task-outcome quality.

## Demonstrated value

Best demonstrated on long hook, test, and process logs. The tool requires no
generated project artifacts and wraps existing commands.

## Failures and limitations

- `rtk gain` could not open its tracking database in the sandbox without extra access.
- `rtk python` and some unusual subcommands were not always recognized.
- Filtering is unsuitable for forensic logs, exact JSON, and unknown formats.
- No counter tracks reruns caused by losing an important line.

## Decision

Keep as the global standard. Use `rtk proxy` for complete stdout. Reassess after
demonstrated diagnostic-signal loss or increased rework.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Long Git, test, and process logs | Output compression | Full stdout | Required diagnostic signal is preserved | accepted | Estimated token volume was reduced | Reruns caused by a hidden line are not yet counted | medium |

## Measurement contract

The unit is a command processed by RTK. The denominator is every command in the local RTK database; the effect is the estimated token difference before and after filtering. This is not billing. The quality guard is a rerun or full-output lookup caused by hidden signal. The method is the `rtk gain` aggregate; revisit when its calculation changes or diagnostic loss is demonstrated.

## Official materials

- [Repository](https://github.com/rtk-ai/rtk)
