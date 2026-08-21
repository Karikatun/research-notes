---
id: caveman
entity: tool
decision: limited-use
evidence: tried
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: efficiency-cost-observability
practices: [selective-response-compression]
measurement: qualitative
availability: local-only
source_access: source-available
origin: custom
custom_scope: personal
official_urls: []
review_state: current
---

# caveman

## Вердикт

Принят для узких режимов сокращения вывода, особенно на этапе исправлений.

## Реальная польза

Снижает многословие запросов и ответов и помогает укладываться в ограничения
ответа. Сейчас присутствуют локальная для проекта и глобальная версии навыка.

## Ограничения и решение

Нет изолированной метрики токенов до/после. Слишком сильное сжатие может скрыть
обоснование и риски. Использовать по явному условию или на ограниченном этапе,
но не для архитектуры, заключений о безопасности и отчётов о завершении.
