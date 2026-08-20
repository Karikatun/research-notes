---
id: safe-external-system-operations
entity: practice
decision: limited-use
evidence: result-accepted
primary_direction: agent-coordination-automation
related_directions: [task-human-collaboration]
tools: [github-cli, yandex-cloud-cli]
review_state: current
---

# Безопасно выполнять внешние действия

## Желаемый результат

Разделять read-only диагностику и изменения; для изменений требовать точную цель и явное разрешение.

## Когда применять

Для GitHub, облака и других внешних систем, где диагностическое чтение безопаснее изменения состояния.

## Критерий успеха

Изменена только подтверждённая цель, а итог проверен по внешнему состоянию.

## Ограничения

Даже явное разрешение не расширяет цель операции; destructive, production и публикационные действия требуют отдельной проверки.

## Пересмотр

Повторно оценить при изменении агентного процесса, потере воспроизводимости или появлении более дешёвой альтернативы.
