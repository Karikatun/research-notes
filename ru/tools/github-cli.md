---
id: github-cli
entity: tool
decision: use
evidence: result-accepted
stages: [installed, configured, invoked, completed, result-accepted]
primary_direction: agent-coordination-automation
related_directions: [task-human-collaboration]
practices: [safe-external-system-operations, verify-remote-enforcement]
measurement: telemetry
availability: public
source_access: open-source
origin: upstream
official_urls: [https://github.com/cli/cli]
review_state: current
---

# GitHub CLI

## Вердикт

Принят как основной агентский интерфейс к GitHub.

## Реальное применение

Версия `2.96.0`; не менее 25 прямых вызовов оболочки в шести сеансах.
Использовался для журналов CI, настроек и видимости репозитория, PR, проверок и
проверки текущего состояния.

## Реальная польза

Даёт структурированное текущее состояние и точные сведения о неудачных этапах;
для диагностики автоматизации он надёжнее браузерного интерфейса.

## Ограничения и решение

YAML процесса не доказывает, что ограничения действительно применяются:
отдельно проверять наборы правил и обязательные проверки. Изменяющие команды,
отправка изменений и PR по-прежнему требуют отдельного разрешения.

## Контракт телеметрии

Единица — завершённое событие точного инструмента или команды в доступных локальных журналах задач. Подсчёт отделяет вызов, техническое завершение и принятый результат; сырые журналы не публикуются. Агрегат пересчитывается тем же фильтром после накопления нового значимого набора событий или изменения схемы журнала.

## Официальные материалы

- [github.com](https://github.com/cli/cli)
