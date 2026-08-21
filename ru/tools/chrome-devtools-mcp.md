---
id: chrome-devtools-mcp
entity: tool
decision: use
evidence: result-accepted
stages: [configured, invoked, completed, result-accepted]
primary_direction: ui-browser-validation
related_directions: [context-codebase-research]
practices: [rendered-ui-validation, runtime-observability-evidence]
measurement: telemetry
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/ChromeDevTools/chrome-devtools-mcp]
review_state: current
---

# Chrome DevTools MCP

## Вердикт

Принят для проверки состояния во время выполнения, сети, консоли и трассировки
производительности.

## Измеримые данные

258 завершённых вызовов в девяти сессиях: 258 технически успешных.

## Реальная польза

Даёт доказательства из DOM и среды выполнения, сетевые запросы и сведения о
производительности, которые нельзя получить из статического кода. Полезен для
диагностики, но не заменяет E2E.

## Ограничения и решение

100% технически успешных вызовов не означает правильный вывод о пользовательском
опыте. Оставить для исследования текущего состояния браузера; пользовательские
сценарии закреплять тестами Playwright.

## Контракт телеметрии

Единица — завершённое событие точного инструмента или команды в доступных локальных журналах задач. Подсчёт отделяет вызов, техническое завершение и принятый результат; сырые журналы не публикуются. Агрегат пересчитывается тем же фильтром после накопления нового значимого набора событий или изменения схемы журнала.

## Официальные материалы

- [github.com](https://github.com/ChromeDevTools/chrome-devtools-mcp)
