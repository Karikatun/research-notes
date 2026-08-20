---
id: sentry-mcp
entity: tool
decision: limited-use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: verification-quality-security
practices: [runtime-observability-evidence, separate-security-evidence-remediation]
measurement: qualitative
review_state: current
---

# Sentry MCP

## Verdict

Adopted in an agent application instead of expanding the set of manual Sentry tools.

## Demonstrated value

Implemented through `@langchain/mcp-adapters`, loaded into the LangGraph agent,
and covered by config tests. The same project implements a Seer-compatible
backend to display analysis in the native Sentry UI.

## Limitations and decision

MCP availability does not prove the quality of causal analysis. Keep it, but
separate retrieval of Sentry evidence from reasoning and from the Seer response
contract.

## Official materials

- [github.com](https://github.com/getsentry/sentry-mcp)
