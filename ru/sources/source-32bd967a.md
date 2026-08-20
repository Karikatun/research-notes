---
id: source-32bd967a
entity: source
decision: pilot
evidence: verified
primary_direction: planning-design
practices: [design-options-before-implementation, design-context-without-system-replacement]
tools: [pen-dev]
source_type: video
review_state: current
---

# Анонимный материал: agent-driven canvas для UX/UI

## Утверждения материала

- Coding-агент может помогать создавать и изменять UX/UI прямо в IDE.
- В демонстрации показаны canvas с несколькими экранами, agent prompt и
  визуальное редактирование design artifact.
- Инструмент предлагается как возможная замена отдельному Figma workflow.

## Проверка

Официальная документация подтверждает локальный MCP canvas, поддержку Codex,
полный write-доступ к `.pen`, хранение design artifact в Git и agent-driven
design↔code workflow. Она не доказывает, что generated code автоматически
production-ready или что продукт полностью заменяет совместную работу,
прототипирование и handoff в Figma.

Существенные ограничения: приложение закрыто, формат может получать breaking
changes, account обязателен, интеграция может менять Codex `config.toml`, а
часть image/SVG запросов проходит через внешних providers.

## Итог

Ограниченный пилот, а не внедрение. Проверить один существующий компонент и один
новый экран в изолированном профиле; оценивать соответствие дизайн-системе,
качество кода и ручную переделку. Не устанавливать и не передавать закрытые
данные без отдельного решения.

## Официальные доказательства

- [Интеграция с coding-агентами](https://docs.pen.dev/getting-started/ai-integration)
- [Design ↔ Code](https://docs.pen.dev/design-and-code/design-to-code)
- [Формат `.pen`](https://docs.pen.dev/for-developers/the-pen-format)
- [Privacy Policy](https://pen.dev/privacy-policy)
- [Pricing](https://pen.dev/pricing)
