---
id: browser-runtime-performance-audit
entity: practice
decision: use
evidence: result-accepted
primary_direction: ui-browser-validation
related_directions: [implementation-refactoring, verification-quality-security]
tools: [chrome-devtools-mcp, playwright]
review_state: current
---

# Run a reproducible browser UI performance audit

## Desired outcome

Separate measured network, main-thread, and rendering metrics from source-code
inference, and find user-relevant causes of load before optimizing.

## When to apply

When an interface is suspected of heavy initial loading, background CPU use,
unnecessary renders, long tasks, memory growth, or slow navigation. Before
measuring, fix the exact build, role and signed-in state, data, cache mode,
route, viewport and DPR, network/CPU throttling, action, and observation window.
A risk-oriented profile usually covers cold load, idle, navigation, a key
interaction, and one throttled mobile scenario; a local problem can use a
smaller matrix.

## Success criterion

Every selected scenario records at least one primary user-facing metric and
enough causal evidence: a network waterfall and byte volume, LCP/CLS/INP, long
tasks, heap size, or counts of React commits, DOM mutations, and state updates.
Browser observations remain separate from static-analysis findings. A fix is
accepted only after a comparable replay or is explicitly left functionally
guarded but quantitatively unproven. `memo`, a green build, and an error-free
console do not by themselves prove the absence of unnecessary renders.

## Measured observation

One anonymous accepted attempt covered five measured scenarios and a 10-second
idle window on one unchanged production build. Cold load produced LCP 385 ms
and CLS 0; the signed-in screen produced LCP 175 ms and CLS 0.03; two
navigations produced INP 34 ms and 56 ms. Mobile under Fast 4G and CPU ×4
produced LCP 306 ms and CLS 0.07. Startup transferred about 599 KB, while the
total uncompressed resource size was about 1.23 MB; the largest JavaScript file
was 84.7 KB. Idle recorded 0 React commits, 0 DOM mutations, and 0 long tasks,
while heap size after explicit GC changed approximately from 16.4 to 8.1 MB.
Fingerprint-named assets had a cache TTL of 0 and returned status 200 when
requested again. Separate code analysis found a 250 ms timer with the potential
for up to 4 state updates per second; the active high-risk flow was not profiled,
so this finding was not presented as a browser measurement.

## Measurement contract

An attempt is one exactly identified build and a predefined matrix. The
denominator is every selected scenario plus one continuous idle window; an
omitted scenario receives `NOT RUN`. Acceptance requires baseline metrics with
units, a trace or aggregate, a code link for each finding, and an explicit split
between observation and inference. Audit effect is the accepted or rejected
findings; fix effect becomes measured only after replaying the same scenario.
Rework and harm are recorded beside the result. The described non-mutating
attempt produced 2 actionable findings: 1 observed cache defect and 1 statically
inferred render-frequency risk. Both were then fixed and protected by functional
gates; the header contract was confirmed, but 0/2 fixes received a comparable
post-change performance profile. Rework volume and collateral harm were not
counted separately and have `NOT MEASURED` status. A baseline replay uses the
retained exact build. Before/after records both build identifiers and holds role,
data, cache mode, viewport, resource throttling, action, and window duration
constant rather than carrying numbers across incomparable environments.

## Alternatives and limitations

A local trace does not replace field RUM, a long observation period, or a load
test. Zero activity in one state does not prove the whole product, explicit GC
does not describe the ordinary memory lifecycle, and laboratory LCP/INP values
are not universal budgets. If a defect is fully visible in a narrow component
profile, production access is unnecessary. UX clarity remains separate from a
performance acceptance decision.

## Revisit

Re-evaluate when browser or runtime instrumentation, the rendering model,
target devices, or performance budgets change, or when the scenario loses
reproducibility.
