---
id: client-bundle-topology-validation
entity: practice
decision: use
evidence: measured
primary_direction: ui-browser-validation
related_directions: [implementation-refactoring, verification-quality-security]
tools: [chrome-devtools-mcp, playwright]
review_state: current
---

# Validate client chunk loading topology

## Desired outcome

Understand independently when code loads — initially, with a route, or on an
action — and where it executes — on the main thread or in a worker. Improve the
selected loading or execution property without falsely claiming a lower total
data volume.

## When to apply

For a large-chunk warning, heavy dependency, slow code parsing or execution, new
route boundary, or a move to a Web Worker. Before editing, record production
build mode, the lockfile, bundler version, configuration and entry point, emitted
files with uncompressed and gzip sizes, their inclusion in the initial load, the
dynamic-loading condition, and execution location. After change authorization, a
minimal probe build can first test one hypothesis without editing tracked
production files.

## How to apply

1. Run a clean production build and retain the command, lockfile, bundler version
   and configuration, entry point, warning threshold, complete emitted-file
   list, manifest or equivalent, and uncompressed and gzip sizes. Do not start
   from only the file named in a warning.
2. For every unique file of the selected entry point, record two independent
   labels: load timing — initial, route, or action — and execution location — main
   thread, worker, or `N/A` for a non-executable asset. Draw the graph from import
   to loading condition and execution location; calculate totals across mutually
   exclusive load timings without double-counting, and do not call those totals
   network transfer.
3. Verify the graph in a browser: open the page in a clean context, record
   initial requests, perform the target action, and record later requests,
   worker creation, and the actual computation result.
4. State one topology-change hypothesis. Do not treat a higher warning threshold
   as a fix; evaluate `manualChunks`, a lazy import, and a worker against different
   expected effects. If only an audit is authorized, stop at the baseline table,
   graph, and solution options. Run a probe build only in a disposable copy that
   does not change tracked production files or production state.
5. After separate authorization, test the hypothesis with a minimal probe build
   first, then make the smallest change and repeat the clean build with the same
   toolchain and two-axis classifier. Record files that disappeared, appeared,
   moved, or grew separately; do not count moved bytes as a reduction.
6. Record the worker lifecycle contract before testing: a task-scoped worker must
   terminate after a result or error, while a long-lived worker must be reused and
   cleaned up at its defined owner event. Replay the browser scenario and
   applicable E2E, prove a real computation and the expected lifecycle or mark it
   `NOT MEASURED`; either exercise error and cancellation or mark them
   `NOT RUN`/`N/A` explicitly.
7. When claiming a speedup or lower network volume, separately capture comparable
   before/after values for one or more applicable metrics selected in advance:
   latency, INP/TBT, CPU, memory, or a network trace. Without them, leave the
   effect `NOT MEASURED`, retain rework and collateral harm, and do not turn a
   one-off warning into a permanent budget without a recurring risk.

## Success criterion

Comparable before and after builds show the intended topology without raising
the warning threshold: every unique file has separate load-timing and
execution-location labels or `N/A` plus uncompressed and gzip sizes, and
load-timing totals contain no double-counting. Actual network transfer volume is
added only when a browser network trace exists; otherwise it receives
`NOT MEASURED`, and build file sizes do not stand in for it. A browser scenario
proves execution; conformance to the worker lifecycle contract is also confirmed
or receives `NOT MEASURED`. E2E protects user behavior. Error and applicable
cancellation are tested or explicitly marked `NOT RUN`/`N/A`. A vanished warning
is not called a speedup without latency, INP/TBT, CPU, or memory measurements.

## Measured observation

In one anonymous accepted attempt, the baseline build contained a 298.11 KB /
86.60 KB gzip route chunk and a separate 1,432.36 KB / 441.79 KB gzip engine
chunk loaded lazily by an action under a 500 KB warning threshold. After the
probe and final builds, the thin API chunk was 4.44 KB / 1.77 KB gzip, the route
chunk was 298.19 KB / 86.66 KB gzip, and the engine became a separate 1,595.33 KB
worker file. The warning disappeared without changing the threshold; a browser
check ran a real computation through the worker, while static analysis confirmed
the termination call in `finally`. Actual worker disappearance was not observed
separately (`NOT MEASURED`); two E2E scenario suites passed 6/6 and 10/10. Actual
total network transfer was not measured (`NOT MEASURED`), and duration, INP/TBT,
CPU, and memory were not compared before and after. Worker error and cancellation
paths were not exercised separately and remained `NOT RUN`.

## Measurement contract

An attempt is one hypothesis for one entry point; the denominator is every unique
related file in two clean production builds with separate load-timing and
execution-location labels or `N/A`. Acceptance requires a recorded lockfile,
bundler version and configuration,
entry point, bounded intentional diff, retained uncompressed and gzip sizes,
loading graph, browser scenario, and applicable regression gates; other inputs
stay unchanged. Topology and size changes are recalculated from build output
with the same two-axis classifier of unique files; actual network transfer only
comes from a comparable browser trace. Moving bytes between load timings or
execution locations does not count as reducing them. The described attempt
required one full E2E rerun after a timeout before the target worker action; the
final run passed, and growth of the separate worker file remains recorded as a
side effect rather than hidden.

## Alternatives and limitations

Raising `chunkSizeWarningLimit` hides the signal. Mechanical `manualChunks` can
improve cache reuse, but it cannot split a monolithic dependency and may worsen
execution order. A lazy import defers bytes but does not reduce them; a worker
moves computation off the main thread but adds startup, lifecycle, and
error-handling cost. A build comparison without a full browser profile is enough
for a small local dependency.

## Revisit

Re-evaluate when the bundler or runtime, entry graph, warning policy, or target
browsers change, or when field performance diverges from the laboratory result.
