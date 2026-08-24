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

## How to apply

1. Create an attempt manifest: testable question, build and browser identifiers,
   role, data, route, viewport and DPR, cache mode, network/CPU throttling,
   scenario matrix, a fixed window duration or observable terminal event with a
   maximum wait and bounded recording tail, repetition counts, and metrics
   selected in advance.
2. For every scenario, choose a primary user-facing metric and causal signals:
   network requests, long tasks, heap size, React commits, DOM mutations, or
   state updates. Mark an unavailable scenario `NOT RUN` in advance and a missing
   measurement in an executed scenario `NOT MEASURED`.
3. Run every scenario in a reproducible context: cold load in a fresh one, and
   navigation and interaction from the recorded session state. Start recording
   before the action and stop by a rule recorded in advance: after a fixed window
   or an observable terminal event plus a fixed tail. If the event does not occur
   within the maximum wait, stop the attempt and assign `FAIL`, `BLOCKED`, or
   `NOT MEASURED` according to the scenario contract.
4. Without changing the product, retain raw artifacts and a summary row with
   units for every attempt: a network trace and headers, performance trace, heap
   snapshot, or React/DOM instrumentation. Do not select the best run or discard
   an outlier without a rule recorded in advance. Keep raw artifacts in the
   owning project with restricted access and do not attach them to a public card.
   Remove cookies, authorization headers, query values, and user data from any
   exported excerpt, and publish only an anonymous summary in the public catalog.
5. When unnecessary renders are suspected, record the affected component,
   duration, props/state change, and presence or absence of a visible DOM change
   for every commit. No visible change is a signal to investigate, not automatic
   proof of a defect. Treat `memo` and `useMemo` as hypotheses until a profile
   demonstrates their effect.
6. After the browser measurement, trace the confirmed signal to a request,
   timer, subscription, or code location. Mark findings from static analysis
   alone as inferred; leave an unavailable active scenario `NOT RUN`.
7. If the task is audit-only, stop at observations, conclusions, uncertainties,
   and priorities. After separate authorization for a causal fix, replay the
   matrix with the same run counts and stopping rule: the same fixed duration or
   the same terminal event, recording tail, and maximum wait. Compare only like
   samples and record effect, rework, collateral harm, and remaining `NOT RUN`
   items separately, then run functional, accessibility, and usability checks.
   Calculate a median or percentiles only with a stated denominator; publish a
   single run as a snapshot rather than a budget.

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
