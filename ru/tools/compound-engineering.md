---
id: compound-engineering
entity: tool
decision: reject
evidence: verified
stages: [documented]
primary_direction: knowledge-learning
related_directions: [agent-coordination-automation]
practices: [reusable-task-learning]
measurement: qualitative
availability: public
source_access: source-available
origin: upstream
official_urls: [https://github.com/EveryInc/compound-engineering-plugin]
review_state: current
---

# Compound Engineering

## Вердикт

Полный плагин отклонён; принят только принцип «каждая задача облегчает следующую».

## Потенциальная и реальная польза

Процесс «обсуждение идей → план → работа → проверка → накопление знаний» мог бы
снижать объём повторного исследования. Настоящей пробы не было, поэтому польза
для проектов не измерена.

## Причина отказа

Сильное пересечение с AGENTS, ADR, задачами, памятью, проверкой кода и
`learn-from-task`; дополнительный `docs/solutions` создаёт второй корпус знаний
и риск расхождения.

## Решение

Не устанавливать до появления доказанной повторяющейся проблемы. Возможная
проба — 3–5 сопоставимых задач в отдельном профиле с измерением повторной работы,
актуальности и расхода кредитов.

## Официальные материалы

- [github.com](https://github.com/EveryInc/compound-engineering-plugin)
