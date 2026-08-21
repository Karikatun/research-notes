---
id: appsec-triage
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: verification-quality-security
practices: [separate-security-evidence-remediation]
measurement: qualitative
availability: internal
source_access: source-available
origin: custom
custom_scope: project
official_urls: []
review_state: current
---

# Навык appsec-triage

## Вердикт

Принят как локальный контракт первого этапа.

## Реальная польза

Получает результаты только из AppSec, требует точного совпадения репозитория,
обходит все страницы, объясняет `needFix` и позволяет завершить задачу до
клонирования при отсутствии изменений. Уменьшает стоимость безопасных пустых случаев.

## Сбои и решение

Ранее ошибочно анализировал текущую рабочую копию и терял причину при
`needFix=false`. Контракт был исправлен. Оставить с аутентификацией и
инициализацией, принадлежащими бэкенду, и проверкой схемы JSON.
