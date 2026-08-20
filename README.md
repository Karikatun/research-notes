# Agent Development Research Notes / Исследования агентной разработки

A bilingual, evidence-based catalog of practices and tools for developing
software with coding agents. The catalog starts from a problem or desired
outcome, links suitable practices to concrete tools, and preserves meaningful
successful and failed uses without publishing project identities or raw logs.

Двуязычный доказательный каталог практик и инструментов для разработки программ
с coding-агентами. База начинается с проблемы или желаемого результата,
связывает практики с конкретными инструментами и сохраняет значимые успешные и
неудачные применения без публикации названий проектов и сырых журналов.

## Choose a language / Выберите язык

- [English](en/README.md)
- [Русский](ru/README.md)

Both trees use the same stable identifiers, paths, decisions, evidence levels,
relations, numbers, and official verification links. Russian is canonical;
English is a complete translation.

```text
research-notes/
  ru/ and en/
    INDEX.md
    directions/   # generated navigation by desired outcome
    practices/    # canonical ideas and practices
    tools/        # one cumulative card per tool
    sources/      # anonymous analyses of submitted material
  scripts/catalog.mjs
```

Run the repository gate with:

```bash
bun run check
```
