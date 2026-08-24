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

Understand whether code enters the initial load, a route- or action-lazy load,
or a worker, and improve the selected loading or main-thread property without
falsely claiming a lower total data volume.

## When to apply

For a large-chunk warning, heavy dependency, slow code parsing or execution, new
route boundary, or a move to a Web Worker. Before editing, record production
build mode, the lockfile, bundler version, configuration and entry point, emitted
files with uncompressed and gzip sizes, their inclusion in the initial load, the
dynamic-loading condition, and execution location. Before changing production
code, a minimal probe build can test one hypothesis.

## Success criterion

Comparable before and after builds show the intended topology without raising
the warning threshold: initial JavaScript, lazy application chunks, and worker
files are reported separately. Actual network transfer volume is added only
when a browser network trace exists; otherwise it receives `NOT MEASURED`, and
build file sizes do not stand in for it. A browser scenario proves execution,
while E2E protects user behavior. A worker also needs demonstrated termination;
its error path and applicable cancellation are tested or explicitly marked
`NOT RUN`/`N/A`. A vanished warning is not called a speedup without latency,
INP/TBT, CPU, or memory measurements.

## Measured observation

In one anonymous accepted attempt, the baseline build contained a 298.11 KB /
86.60 KB gzip route chunk and a separate 1,432.36 KB / 441.79 KB gzip engine
chunk loaded lazily by an action under a 500 KB warning threshold. After the
probe and final builds, the thin API chunk was 4.44 KB / 1.77 KB gzip, the route
chunk was 298.19 KB / 86.66 KB gzip, and the engine became a separate 1,595.33 KB
worker file. The warning disappeared without changing the threshold; a browser
check ran a real computation through the worker, while two E2E scenario suites
passed 6/6 and 10/10. Actual total network transfer was not measured
(`NOT MEASURED`), and duration, INP/TBT, CPU, and memory were not compared before
and after. Worker error and cancellation paths were not exercised separately and
remained `NOT RUN`.

## Measurement contract

An attempt is one hypothesis for one entry point; the denominator is every
related initial, lazy, and worker file in two clean production builds.
Acceptance requires a recorded lockfile, bundler version and configuration,
entry point, bounded intentional diff, retained uncompressed and gzip sizes,
loading graph, browser scenario, and applicable regression gates; other inputs
stay unchanged. Topology and size changes are recalculated from build output
with the same file classifier; actual network transfer only comes from a
comparable browser trace. Moving bytes between categories does not count as
reducing them. The described attempt required one full E2E rerun after a timeout
before the target worker action; the final run passed, and growth of the separate
worker file remains recorded as a side effect rather than hidden.

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
