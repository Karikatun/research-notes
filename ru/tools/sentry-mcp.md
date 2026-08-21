---
id: sentry-mcp
entity: tool
decision: limited-use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: verification-quality-security
practices: [runtime-observability-evidence, separate-security-evidence-remediation]
measurement: qualitative
availability: account-gated
source_access: open-source
origin: upstream
official_urls: [https://github.com/getsentry/sentry-mcp]
review_state: current
---

# Sentry MCP

## Вердикт

Принят как интерфейс к Sentry вместо расширения набора ручных инструментов.

## Реальная польза

Реализован через `@langchain/mcp-adapters`, загружается в агент LangGraph и
покрыт проверками конфигурации. Тот же проект реализует совместимый с Seer бэкенд для
показа анализа в нативном интерфейсе Sentry.

## Ограничения и решение

Доступность MCP не доказывает качество причинного анализа. Оставить, но отделять
получение доказательств Sentry от рассуждения и от контракта ответа Seer.

## Официальные материалы

- [github.com](https://github.com/getsentry/sentry-mcp)
