---
id: token-economy
entity: tool
decision: limited-use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: efficiency-cost-observability
practices: [credits-per-accepted-task]
measurement: quantitative
availability: local-only
source_access: source-available
origin: custom
custom_scope: personal
official_urls: []
review_state: current
---

# token-economy

## Вердикт

Принят как обязательный процесс для нетривиальных задач, но экономический эффект
пока нельзя доказать без сопоставимых групп.

## Реальная польза

Закрепил выбор минимально достаточной модели, ограничение делегирования,
контроль контекста и единый отчёт об использовании. Помог отделить `estimated_credits` от
небиллингового `effective_tokens`.

## Ограничения

Текущий длинный диалог и разные классы задач нельзя сравнивать напрямую. Для
вывода об экономии нужны не менее 12 принятых тарифицируемых задач до и после в
одном классе без ухудшения качества.

## Решение

Оставить. Не заявлять экономию только по доле попаданий в кеш или эффективным
токенам.

## Контракт измерения

Единица — принятая тарифицируемая задача одного класса. Сравниваются группы с одинаковыми проверками; требуется не менее 12 задач в каждой. Основная метрика — медиана estimated credits, защитные — приёмка с первой попытки, повторная работа и критические регрессии. До достаточных групп экономический эффект считается неизвестным.
