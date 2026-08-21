---
id: openai-docs-mcp
entity: tool
decision: use
evidence: result-accepted
stages: [configured, invoked, completed, result-accepted]
primary_direction: external-knowledge-docs
practices: [version-aware-documentation]
measurement: telemetry
availability: public
source_access: closed-source
origin: platform
official_urls: [https://developers.openai.com/learn/docs-mcp]
review_state: current
---

# OpenAI Docs MCP

## Вердикт

Принят как первичный источник для Codex и OpenAI API.

## Измеримые данные

40 завершённых вызовов в семи сессиях, все технически успешны.

## Реальная польза и ограничения

Устраняет зависимость от устаревшей памяти модели при вопросах о Codex. Полезен
только для OpenAI-продуктов; не заменяет Context7 или официальные документы
других поставщиков.

## Решение

Оставить обязательным первичным каналом для вопросов о продуктах OpenAI.

## Контракт телеметрии

Единица — завершённое событие точного инструмента или команды в доступных локальных журналах задач. Подсчёт отделяет вызов, техническое завершение и принятый результат; сырые журналы не публикуются. Агрегат пересчитывается тем же фильтром после накопления нового значимого набора событий или изменения схемы журнала.
