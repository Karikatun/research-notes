---
id: bitbucket-mcp
entity: tool
decision: reject
evidence: tried
stages: [documented, invoked, completed]
primary_direction: agent-coordination-automation
practices: [narrow-external-integrations]
measurement: qualitative
review_state: current
---

# Bitbucket MCP Server

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
