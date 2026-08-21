---
id: sonar-gather
entity: tool
decision: limited-use
evidence: tried
stages: [installed, configured, invoked, completed]
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

# Навык sonar-gather

## Вердикт

Принят для отдельного сбора результатов Sonar.

## Реальная польза и ограничения

Изолирует получение данных от рассуждений об исправлении и не смешивает Sonar с AppSec.
Навык присутствует, но отдельной статистики завершённых задач Sonar нет.

## Решение

Сохранить. Добавить измерение количества результатов/страниц и доли корректно
завершённых этапов сбора перед более сильным выводом об эффективности.
