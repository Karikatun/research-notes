---
id: caveman
entity: tool
decision: limited-use
evidence: tried
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: efficiency-cost-observability
practices: [selective-response-compression]
measurement: qualitative
review_state: current
---

# caveman

## Verdict

Accepted for narrowly scoped output-compression modes, especially a focused fix
phase.

## Demonstrated Value

Reduces prompt and output verbosity and helps stay within completion limits.
Both project-local and global skills are currently present.

## Limitations and Decision

There is no isolated before-and-after token metric. Excessive compression can
hide rationale and risks. Use it only on an explicit trigger or during a
limited phase, not for architecture, security verdicts, or completion reports.
