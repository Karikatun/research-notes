---
id: martin-clean-architecture
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: planning-design
practices: [contextual-architecture-heuristics]
measurement: qualitative
availability: local-only
source_access: source-available
origin: custom
custom_scope: personal
official_urls: []
review_state: current
---

# martin-clean-architecture

## Вердикт

Принят. Установлен, проверен на безопасность и испытан тестами применения.

## Реальная польза

На настоящем шаблоне сохранил модульный монолит и признал
`transport → application port ← Prisma adapter` корректной границей вместо
автоматического навязывания микросервисов и слоёв.

## Ограничения и решение

Использовать как словарь стоимости изменений и направления зависимостей, а не
как генератор папок, интерфейсов или сервисов.
