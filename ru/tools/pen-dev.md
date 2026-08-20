---
id: pen-dev
entity: tool
decision: pilot
evidence: verified
stages: [documented]
primary_direction: planning-design
related_directions: [ui-browser-validation, implementation-refactoring]
practices: [design-options-before-implementation, design-context-without-system-replacement]
measurement: qualitative
review_state: current
---

# pen.dev

## Вердикт

Перспективный кандидат для изолированного дизайн-пилота с Codex, но не
подтверждённая замена Figma и не готовый источник промышленного кода. В основной
профиль и репозиторий пока не устанавливать.

## Роль в агентной разработке

Локальный MCP-сервер даёт coding-агенту чтение и полную запись в векторный
canvas. JSON-подобные `.pen`-файлы хранятся рядом с кодом и могут версионироваться
через Git. Документация описывает создание вариантов, импорт структуры из кода,
генерацию кода из дизайна, variables, components, screenshots и проверку
проблем layout.

## Подтверждённые свойства

- Поддерживаются Codex CLI, Claude Code, Cursor, OpenCode и другие MCP-клиенты.
- Design operations выполняются локальным MCP-сервером, когда приложение или
  IDE extension запущены.
- Design→code и code→design выполняются агентом по prompt, а не детерминированным
  compiler-ом; обещание pixel-perfect production code официально не доказано.
- Формат `.pen` документирован, но поставщик оставляет право вводить breaking
  changes; исходный код приложения закрыт.
- Инструмент сейчас бесплатен, но будущие платные планы прямо допускаются.
- Документация признаёт, что интеграция может изменить или продублировать Codex
  `config.toml`, и рекомендует backup перед первым использованием.

## Значимая попытка

| Сценарий | Роль | Альтернатива | Критерий | Итог | Эффект | Переделка или ущерб | Уверенность |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Разбор демонстрации и официальной документации без установки | agent-driven design canvas | Figma MCP, design service, HTML-прототип | подтверждены Codex integration и контролируемый design artifact | частично | найден новый repo-local design workflow | проектный результат и качество generated code не проверены | высокая для возможностей, низкая для пользы |

## Ограничения

- Полный write-доступ MCP способен массово менять design artifact; нужен diff и
  явное принятие человеком.
- `.pen` создаёт дополнительный versioned artifact и может разойтись с кодом и
  действующей дизайн-системой.
- Наличие canvas не заменяет проверку accessibility, responsive states,
  интерактивности и реального браузера.
- Account authentication обязательна. Product analytics использует PostHog, а
  ошибки — Sentry.
- Текстовые AI-запросы с собственным provider идут напрямую к provider, но
  image/SVG requests проходят через инфраструктуру поставщика и сторонние
  сервисы. Для закрытых данных нужен отдельный privacy review.
- Импорт Figma описан как copy/paste, а не постоянная двусторонняя синхронизация.

## Решение

Пилотировать только после явного согласия в отдельном временном профиле и
репозитории без чувствительных данных. Сначала сохранить `config.toml`,
зафиксировать версию и отключить необязательные внешние image/AI функции.

Сравнить один существующий компонент и один новый экран с текущим процессом по
качеству вариантов, соответствию дизайн-системе, времени, объёму ручной
переделки и точности generated code. Принимать результат только после code
review, rendered browser inspection и accessibility check. Пересмотреть вывод
после реального пилота, изменения формата, лицензии, privacy flow или pricing.

## Официальные материалы

- [Официальный сайт](https://pen.dev/)
- [Интеграция с coding-агентами](https://docs.pen.dev/getting-started/ai-integration)
- [Design ↔ Code](https://docs.pen.dev/design-and-code/design-to-code)
- [Формат `.pen`](https://docs.pen.dev/for-developers/the-pen-format)
- [Privacy Policy](https://pen.dev/privacy-policy)
- [Pricing](https://pen.dev/pricing)
