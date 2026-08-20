---
id: playwright-mcp
entity: tool
decision: retired
evidence: tried
stages: [installed, configured, invoked, completed, removed]
primary_direction: ui-browser-validation
related_directions: [verification-quality-security]
practices: [rendered-ui-validation]
measurement: qualitative
review_state: current
---

# Playwright MCP

## Вердикт

Удалён по прямому решению пользователя. Покрытие браузерных сценариев сохранено
через самостоятельный Playwright и другие инструменты времени выполнения.

## Потенциальная и реальная польза

Обещал удобное управление браузером из агента, но отдельная MCP-интеграция
дублировала существующие возможности и не показала уникальной пользы.

## Решение

Не возвращать без сценария, который не закрывают Playwright CLI, проектные тесты
или Chrome DevTools MCP. Установка сама по себе не является преимуществом.

## Значимая попытка

| Сценарий | Роль | Альтернатива | Критерий | Итог | Эффект | Переделка или ущерб | Уверенность |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Управление браузерным сценарием | Отдельный MCP | Прямой Playwright и встроенный браузер | Новый сценарий, не покрытый существующими средствами | не принят | Уникальная польза не подтверждена | MCP удалён, браузерное покрытие сохранено | средняя |

## Официальные материалы

- [github.com](https://github.com/microsoft/playwright-mcp)
