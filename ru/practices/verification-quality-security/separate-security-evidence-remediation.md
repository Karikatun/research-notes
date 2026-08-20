---
id: separate-security-evidence-remediation
entity: practice
decision: use
evidence: result-accepted
primary_direction: verification-quality-security
tools: [appsec-cli, appsec-fix-recommendations, appsec-triage, sentry-mcp, sonar-cli, sonar-fix-recommendations, sonar-gather]
review_state: current
---

# Разделять сбор security-доказательств и исправление

## Желаемый результат

Сначала получать полный нормализованный набор находок, затем отдельно рассуждать об исправлении.

## Когда применять

Когда агент получает находки сканера, наблюдаемости или внешнего AppSec/Sonar-контура и затем предлагает изменения.

## Критерий успеха

Пустой результат, ошибка получения и принятое исправление различимы.

## Ограничения

Нельзя смешивать отсутствие находок, неполную пагинацию, ошибку доступа и успешное исправление в один статус.

## Пересмотр

Повторно оценить при изменении агентного процесса, потере воспроизводимости или появлении более дешёвой альтернативы.
