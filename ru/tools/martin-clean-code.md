---
id: martin-clean-code
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: implementation-refactoring
practices: [contextual-code-quality-heuristics]
measurement: qualitative
availability: local-only
source_access: source-available
origin: custom
custom_scope: personal
official_urls: []
review_state: current
---

# martin-clean-code

## Вердикт

Принят. Установлен и прошёл проверку после преобразования книги.

## Реальная польза

Даёт навигацию по именованию, функциям, ошибкам, границам, тестам, параллельному
выполнению и запахам кода без загрузки всей книги. Подтверждены явный и неявный
вызов и подход с отрицательным контролем; общего счётчика активаций нет.

## Ограничения и решение

Эвристики не являются универсальными законами и не должны провоцировать
косметический рефакторинг. Использовать как основу для принятия решений, считая
локальный код источником истины.
