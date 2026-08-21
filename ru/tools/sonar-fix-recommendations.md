---
id: sonar-fix-recommendations
entity: tool
decision: limited-use
evidence: tried
stages: [installed, configured, invoked, completed]
primary_direction: verification-quality-security
related_directions: [implementation-refactoring]
practices: [separate-security-evidence-remediation, deterministic-agent-output-validation]
measurement: qualitative
availability: internal
source_access: source-available
origin: custom
custom_scope: project
official_urls: []
review_state: current
---

# Навык sonar-fix-recommendations

## Вердикт

Принят как отдельный контракт исправления Sonar, но эффективность пока не измерена
отдельно от общего исполнителя.

## Решение

Сохранить изоляцию, локальную для проекта, и тот же принцип: модель предлагает
изменение, а детерминированные команды и валидаторы принимают результат. Нужен отдельный
счётчик результатов Sonar.
