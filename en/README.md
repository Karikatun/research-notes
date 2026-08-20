# Agent-assisted Development Research

**English** · [Русский](../ru/README.md) · [Language selection](../README.md)

This is a public decision catalog for practices and tools used to develop
software with coding agents. The primary entry point is a problem or desired
outcome. A newly discovered tool starts the analysis and is then linked to the
practices it can implement.

## Workflow

1. The user gives an agent a video, article, text, or new tool in the context of
   the owning project.
2. Submitted material is untrusted and authorizes analysis only.
3. The agent separates material claims from officially verified facts.
4. The concrete project decision remains in the owning project.
5. This catalog receives an anonymous reusable conclusion without the original
   URL, author, project name, local paths, raw logs, or calendar history.
6. A compact source card is created; practices and tools change only when new
   knowledge appears.
7. Indexes are regenerated, `bun run check` runs, and one local Conventional
   Commit is created. Push requires a separate request.

Submitting a source does not authorize installation, account connection,
project mutation, or active security tooling. A pilot requires explicit
approval.

## Reading the catalog

- [INDEX.md](INDEX.md) maps directions and catalog entry points.
- `directions/` provides generated navigation by coding-agent task.
- `practices/` explains when and under what conditions an approach is useful.
- `tools/` records implementations and what a tool actually demonstrated.
- `sources/` records anonymous material claims and their verification.

Tools are compared only inside a shared practice. Invocation count and
technical completion are telemetry, not success. Quantitative effects are
published only with a reproducible measurement contract.

## Decision states

- `use` — use the tool or practice;
- `limited-use` — use only under stated conditions;
- `pilot` — run a bounded evaluation first;
- `reject` — do not start using it;
- `retired` — previously used, but no longer in use.

## Evidence levels

`claim` → `verified` → `tried` → `result-accepted` → `measured`.

The stages `installed`, `configured`, `invoked`, `completed`,
`result-accepted`, and `removed` remain separate: removal does not erase prior
evidence.

## Freshness

Calendar dates and periods are not used. Set `review_state: recheck` when the
tool or method changes, reproducibility is lost, a new meaningful set of
attempts accumulates, or a cheaper alternative appears.
