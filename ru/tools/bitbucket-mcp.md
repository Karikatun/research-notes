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

## Вердикт

Полный MCP-сервер отклонён; принята только проверенная REST-логика создания PR.

## Реальная польза

Переиспользование узкой логики уменьшило собственную реализацию без добавления
постоянной среды выполнения MCP и лишних разрешений.

## Ограничения и решение

PR и отправка изменений остаются отдельным этапом возможного сбоя. Оставить узкий REST-адаптер;
полный MCP возвращать только при появлении нескольких новых операций, которые
оправдают дополнительные подключения и разрешения.
