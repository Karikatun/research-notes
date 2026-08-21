---
id: application-security-review
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: verification-quality-security
practices: [manual-threat-review, behavioral-security-validation]
measurement: qualitative
availability: local-only
source_access: source-available
origin: custom
custom_scope: project
official_urls: []
review_state: current
---

# Навык ручного security review

## Вердикт

Принят как навык ручного анализа угроз для приложения с многопользовательскими сценариями.

## Реальная польза

Закрывает слепые зоны сканеров: авторизацию, IDOR, повторное воспроизведение,
гонки, конфиденциальность, восстановление, границы эксплуатации и раскрытие
данных. Привязан к SECURITY.md и
реальным проектным контрактам.

## Ограничения и решение

Субъективная проверка не доказывает отсутствие угроз. Оставить обязательным для
изменений, чувствительных к безопасности, вместе с интеграционными тестами,
тестами конкурентности и сканерами.
