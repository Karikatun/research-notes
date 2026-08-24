---
id: codex-in-app-browser
entity: tool
decision: use
evidence: result-accepted
stages: [configured, invoked, completed, result-accepted]
primary_direction: ui-browser-validation
practices: [controlled-interface-optimization-validation, critical-user-journey-evidence, design-options-before-implementation, rendered-ui-validation, usability-cognitive-walkthrough]
measurement: qualitative
availability: account-gated
source_access: closed-source
origin: platform
official_urls: [https://learn.chatgpt.com/docs/browser]
review_state: current
---

# Встроенный браузер Codex

## Вердикт

Принят для интерактивной проверки страниц и сеансов с выполненным входом.

## Реальная польза

Использовался для Instagram, промышленного и локального интерфейса, снимков
экрана и проверки фактической доступности адресов. Исправляет типичную ошибку
«серверный процесс запущен — значит страница работает».

## Ограничения и решение

Сетевые ограничения и требование войти в систему могут блокировать источник;
визуальная проверка не заменяет повторяемый тест Playwright. Оставить для
исследования и ручной проверки, критичные пользовательские сценарии
автоматизировать отдельно.

## Официальные материалы

- [Документация встроенного браузера](https://learn.chatgpt.com/docs/browser)
