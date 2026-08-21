---
id: sonar-cli
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

# sonar-cli

## Вердикт

Принят вместе с `sonar-gather` и `sonar-fix-recommendations`.

## Реальная польза

Добавляет отдельный процесс Sonar и вкладки интерфейса поверх общего исполнителя задач.
Навыки, локальные для проекта, присутствуют и изолированы от глобальных навыков.

## Ограничения и решение

Отдельного счётчика вызовов CLI и показателя успеха от начала до конца в доступных снимках нет.
Не смешивать результаты Sonar и AppSec; сохранять раздельные контракты и аудит.
