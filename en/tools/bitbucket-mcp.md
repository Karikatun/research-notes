---
id: bitbucket-mcp
entity: tool
decision: reject
evidence: tried
stages: [documented, invoked, completed]
primary_direction: agent-coordination-automation
practices: [narrow-external-integrations]
measurement: qualitative
availability: internal
source_access: source-available
origin: custom
custom_scope: project
official_urls: []
review_state: current
---

# Bitbucket MCP Server

## Access and origin

This is a custom project integration with source available to its owner. No
public link exists. The full MCP and the narrow REST adapter extracted from it
are evaluated separately.

## Verdict

The full MCP server was rejected; only the verified REST logic for creating a
pull request was adopted.

## Demonstrated value

Reusing narrow logic reduced custom implementation without adding a permanent
MCP runtime or unnecessary permissions.

## Limitations and decision

PR and push remain a separate failure stage. Keep the narrow REST adapter; restore the full
MCP only when several new operations justify its connection and permission
surface.

## Significant attempt

| Scenario | Role | Alternative | Criterion | Outcome | Effect | Rework or harm | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Create a pull request | Full custom MCP | Narrow REST adapter | The smallest permission surface covers the one required operation | not accepted for MCP | Verified REST logic was retained | Persistent MCP runtime and excess operations were avoided | high |
