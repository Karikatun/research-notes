---
id: impeccable
entity: tool
decision: pilot
evidence: verified
stages: [documented]
primary_direction: ui-browser-validation
related_directions: [verification-quality-security]
practices: [non-mutating-design-skill-pilots]
measurement: qualitative
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/pbakaus/impeccable]
review_state: current
---

# Impeccable

## Вердикт

Рекомендована одна пробная проверка без изменений; пока не применялся.

## Потенциальная польза

Широкий аудит и разбор интерфейса, а также детерминированные правила типографики,
компоновки, адаптивности, доступности и производительности.

## Ограничения и решение

`init`/`document` могут создать конкурирующие PRODUCT/DESIGN документы, а
автоправки — нарушить утверждённый стиль. Проба успешна только если найдёт новую
подтверждённую проблему средней или высокой важности без потока ложных
срабатываний.
