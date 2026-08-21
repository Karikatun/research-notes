import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const root = process.cwd();
const mode = process.argv[2] ?? "--check";
if (!["--check", "--write"].includes(mode)) throw new Error("Usage: bun scripts/catalog.mjs --check|--write");

const directions = [
  ["task-human-collaboration", "Постановка задачи и взаимодействие с человеком", "Task framing and human collaboration", "Как человек задаёт границы, разрешения и проверяемую обратную связь."],
  ["context-codebase-research", "Контекст и исследование кодовой базы", "Context and codebase research", "Как агент получает достаточный контекст без лишнего индексирования и шума."],
  ["external-knowledge-docs", "Внешние знания и документация", "External knowledge and documentation", "Как проверять изменчивые утверждения и контракты по первичным источникам."],
  ["planning-design", "Планирование и проектирование", "Planning and design", "Как исследовать варианты и принимать соразмерные архитектурные решения."],
  ["implementation-refactoring", "Реализация и рефакторинг", "Implementation and refactoring", "Как ограничивать агентную реализацию и улучшать код без расширения области."],
  ["verification-quality-security", "Проверка результата, тестирование и безопасность", "Result verification, testing, and security", "Как принимать агентный результат по наблюдаемому поведению и детерминированным проверкам."],
  ["ui-browser-validation", "Интерфейс и браузерная проверка", "UI and browser validation", "Как проверять дизайн и настоящие состояния интерфейса, а не только исходный код."],
  ["agent-coordination-automation", "Координация агентов и автоматизация", "Agent coordination and automation", "Как делегировать и подключать внешние системы без лишней поверхности доступа."],
  ["efficiency-cost-observability", "Эффективность, стоимость и наблюдаемость", "Efficiency, cost, and observability", "Как измерять стоимость принятой задачи и сокращать контекст без потери качества."],
  ["knowledge-learning", "Накопление знаний и обучение на задачах", "Knowledge retention and task learning", "Как сохранять переиспользуемые выводы, не создавая мёртвую документацию."],
];

const allowed = {
  entity: new Set(["tool", "practice", "source"]),
  decision: new Set(["use", "limited-use", "pilot", "reject", "retired"]),
  evidence: new Set(["claim", "verified", "tried", "result-accepted", "measured"]),
  stage: new Set(["documented", "installed", "configured", "invoked", "completed", "result-accepted", "removed"]),
  measurement: new Set(["none", "qualitative", "telemetry", "quantitative"]),
  review: new Set(["current", "recheck"]),
  availability: new Set(["public", "account-gated", "internal", "local-only"]),
  sourceAccess: new Set(["open-source", "source-available", "closed-source", "unknown"]),
  origin: new Set(["upstream", "platform", "custom", "fork"]),
  customScope: new Set(["personal", "project", "organization"]),
};

const forbiddenIdentityDigests = new Set([
  "632249d0508ec3c960372a4fd4cad3fae2413619027a47b6bb5fe1c24f4a6ba4",
  "4c30024624d5dd46fc8f75c170f33ed262e42c8f1f9a33a84ac7fe37f3e1e0af",
  "4b9a5c4c42c7680f64510aba2c35c2b41a7e01f9b0ae1f93dcd7dfecfb72c13b",
  "3efdcbd79863381da9795dc8532e41f553a4b86de852a6407f90096b0ec3ff46",
  "f28edfa0f598b9a5a497b6225798f8ce61520f754f85f25a3f1dbd828b5fe58b",
  "260fa48c7948c240e6983c200ca6913329fd6bbe39a23e5c2591c67a4f305cd1",
]);

const decisionLabels = {
  ru: { use: "применять", "limited-use": "ограниченно", pilot: "пилот", reject: "отклонить", retired: "не применять" },
  en: { use: "use", "limited-use": "limited", pilot: "pilot", reject: "reject", retired: "do not use" },
};
const evidenceLabels = {
  ru: { claim: "утверждение", verified: "проверено", tried: "опробовано", "result-accepted": "результат принят", measured: "эффект измерен" },
  en: { claim: "claim", verified: "verified", tried: "tried", "result-accepted": "result accepted", measured: "effect measured" },
};
const availabilityLabels = {
  ru: { public: "публичный", "account-gated": "по аккаунту", internal: "внутренний", "local-only": "локальный" },
  en: { public: "public", "account-gated": "account-gated", internal: "internal", "local-only": "local-only" },
};
const sourceAccessLabels = {
  ru: { "open-source": "открытый", "source-available": "исходники доступны", "closed-source": "закрытый", unknown: "неизвестно" },
  en: { "open-source": "open source", "source-available": "source available", "closed-source": "closed source", unknown: "unknown" },
};
const originLabels = {
  ru: { upstream: "внешний", platform: "платформенный", custom: "кастомный", fork: "форк" },
  en: { upstream: "upstream", platform: "platform", custom: "custom", fork: "fork" },
};
const customScopeLabels = {
  ru: { personal: "личный", project: "проектный", organization: "организационный" },
  en: { personal: "personal", project: "project", organization: "organization" },
};

async function markdownFiles(dir) {
  const out = [];
  async function visit(current) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) await visit(full);
      else if (entry.name.endsWith(".md") && entry.name !== "INDEX.md") out.push(full);
    }
  }
  await visit(dir);
  return out.sort();
}

async function allMarkdownFiles(dir) {
  const out = [];
  async function visit(current) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) await visit(full);
      else if (entry.name.endsWith(".md")) out.push(full);
    }
  }
  await visit(dir);
  return out.sort();
}

function parseValue(raw) {
  const value = raw.trim();
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    return inner ? inner.split(",").map((item) => item.trim()) : [];
  }
  return value;
}

function parseDocument(text, file) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) throw new Error(`${file}: missing frontmatter`);
  const meta = {};
  for (const line of match[1].split("\n")) {
    const pair = line.match(/^([a-z_]+):\s*(.*)$/);
    if (!pair) throw new Error(`${file}: invalid frontmatter line: ${line}`);
    meta[pair[1]] = parseValue(pair[2]);
  }
  const title = text.slice(match[0].length).match(/^# (.+)$/m)?.[1];
  if (!title) throw new Error(`${file}: missing H1`);
  return { meta, title, text, file };
}

async function loadLanguage(lang) {
  const docs = [];
  for (const folder of ["tools", "practices", "sources"]) {
    for (const file of await markdownFiles(path.join(root, lang, folder))) {
      docs.push(parseDocument(await readFile(file, "utf8"), file));
    }
  }
  return docs;
}

function stableMeta(meta) {
  return JSON.stringify(Object.fromEntries(Object.entries(meta).sort(([a], [b]) => a.localeCompare(b))));
}

function numericTokens(text) {
  return [...text.matchAll(/\b(?:\d{1,3}(?:[ \u00a0,]\d{3})+(?:[.,]\d+)?|\d+(?:[.,]\d+)?)%?/g)]
    .map((match) => {
      let value = match[0].replace(/[ \u00a0]/g, "");
      if (/^\d{1,3}(?:,\d{3})+(?:\.\d+)?%?$/.test(value)) value = value.replace(/,/g, "");
      else value = value.replace(",", ".");
      return value;
    })
    .sort();
}

function urls(text) {
  return [...new Set([...text.matchAll(/https:\/\/[^)\s]+/g)].map((m) => m[0]))].sort();
}

function containsForbiddenIdentity(text) {
  const tokens = text.toLowerCase().match(/[a-z0-9][a-z0-9-]*/g) ?? [];
  const candidates = [...tokens, ...tokens.slice(0, -1).map((token, index) => `${token} ${tokens[index + 1]}`)];
  return candidates.some((candidate) => forbiddenIdentityDigests.has(createHash("sha256").update(candidate).digest("hex")));
}

function validateDocs(ruDocs, enDocs) {
  const errors = [];
  const byLang = { ru: new Map(ruDocs.map((doc) => [doc.meta.id, doc])), en: new Map(enDocs.map((doc) => [doc.meta.id, doc])) };
  const directionIds = new Set(directions.map(([id]) => id));
  for (const lang of ["ru", "en"]) {
    const seen = new Set();
    for (const doc of byLang[lang].values()) {
      const m = doc.meta;
      if (seen.has(m.id)) errors.push(`${lang}: duplicate id ${m.id}`);
      seen.add(m.id);
      for (const key of ["id", "entity", "decision", "evidence", "primary_direction", "review_state"]) if (!m[key]) errors.push(`${doc.file}: missing ${key}`);
      if (!allowed.entity.has(m.entity)) errors.push(`${doc.file}: invalid entity ${m.entity}`);
      if (!allowed.decision.has(m.decision)) errors.push(`${doc.file}: invalid decision ${m.decision}`);
      if (!allowed.evidence.has(m.evidence)) errors.push(`${doc.file}: invalid evidence ${m.evidence}`);
      if (!allowed.review.has(m.review_state)) errors.push(`${doc.file}: invalid review_state ${m.review_state}`);
      if (!directionIds.has(m.primary_direction)) errors.push(`${doc.file}: unknown direction ${m.primary_direction}`);
      for (const dir of m.related_directions ?? []) if (!directionIds.has(dir)) errors.push(`${doc.file}: unknown related direction ${dir}`);
      for (const stage of m.stages ?? []) if (!allowed.stage.has(stage)) errors.push(`${doc.file}: invalid stage ${stage}`);
      if (m.entity === "tool" && !allowed.measurement.has(m.measurement)) errors.push(`${doc.file}: invalid measurement ${m.measurement}`);
      if (m.entity === "tool") {
        for (const key of ["availability", "source_access", "origin", "official_urls"]) if (m[key] === undefined || m[key] === "") errors.push(`${doc.file}: missing ${key}`);
        if (!allowed.availability.has(m.availability)) errors.push(`${doc.file}: invalid availability ${m.availability}`);
        if (!allowed.sourceAccess.has(m.source_access)) errors.push(`${doc.file}: invalid source_access ${m.source_access}`);
        if (!allowed.origin.has(m.origin)) errors.push(`${doc.file}: invalid origin ${m.origin}`);
        if (!Array.isArray(m.official_urls)) errors.push(`${doc.file}: official_urls must be an array`);
        else {
          for (const url of m.official_urls) if (!/^https:\/\//.test(url)) errors.push(`${doc.file}: official URL must use https: ${url}`);
          if (["public", "account-gated"].includes(m.availability) && !m.official_urls.length) errors.push(`${doc.file}: public or account-gated tool lacks official URL`);
        }
        if (m.origin === "custom") {
          if (!allowed.customScope.has(m.custom_scope)) errors.push(`${doc.file}: custom tool lacks valid custom_scope`);
        } else if (m.custom_scope !== undefined) errors.push(`${doc.file}: non-custom tool must not define custom_scope`);
        if (m.source_access === "unknown" && m.review_state !== "recheck") errors.push(`${doc.file}: unknown source access requires review_state recheck`);
      }
      if (m.measurement === "quantitative" && !doc.text.includes(lang === "ru" ? "## Контракт измерения" : "## Measurement contract")) errors.push(`${doc.file}: quantitative metric without contract`);
      if (m.measurement === "telemetry" && !doc.text.includes(lang === "ru" ? "## Контракт телеметрии" : "## Telemetry contract")) errors.push(`${doc.file}: telemetry without contract`);
      if (m.entity === "source" && !String(m.id).match(/^source-[0-9a-f]{8}$/)) errors.push(`${doc.file}: source id is not opaque`);
      if (containsForbiddenIdentity(doc.text) || /\/Users\//i.test(doc.text)) errors.push(`${doc.file}: forbidden project identifier or local path`);
      if (/^(original_source|source_url|projects|date|period|reviewed_at):/m.test(doc.text)) errors.push(`${doc.file}: forbidden metadata field`);
    }
  }
  const allIds = new Set([...byLang.ru.keys(), ...byLang.en.keys()]);
  for (const id of allIds) {
    const ru = byLang.ru.get(id);
    const en = byLang.en.get(id);
    if (!ru || !en) { errors.push(`${id}: missing ${ru ? "English" : "Russian"} mirror`); continue; }
    if (stableMeta(ru.meta) !== stableMeta(en.meta)) errors.push(`${id}: RU/EN metadata differ`);
    if (JSON.stringify(numericTokens(ru.text)) !== JSON.stringify(numericTokens(en.text))) errors.push(`${id}: RU/EN numeric facts differ (${numericTokens(ru.text).join("|")} != ${numericTokens(en.text).join("|")})`);
    if (JSON.stringify(urls(ru.text)) !== JSON.stringify(urls(en.text))) errors.push(`${id}: RU/EN URLs differ`);
  }
  const ids = new Set(ruDocs.map((doc) => doc.meta.id));
  const ruById = new Map(ruDocs.map((doc) => [doc.meta.id, doc]));
  for (const doc of ruDocs) {
    for (const practice of doc.meta.practices ?? []) {
      if (!ids.has(practice)) errors.push(`${doc.file}: broken relation ${practice}`);
      else if (ruById.get(practice).meta.entity !== "practice") errors.push(`${doc.file}: ${practice} is not a practice`);
    }
    for (const tool of doc.meta.tools ?? []) {
      if (!ids.has(tool)) errors.push(`${doc.file}: broken relation ${tool}`);
      else if (ruById.get(tool).meta.entity !== "tool") errors.push(`${doc.file}: ${tool} is not a tool`);
    }
    if (doc.meta.entity === "tool" && !(doc.meta.practices ?? []).length) errors.push(`${doc.file}: tool has no linked practice`);
    if (doc.meta.entity === "tool" && doc.meta.evidence === "measured" && doc.meta.measurement !== "quantitative") errors.push(`${doc.file}: measured evidence requires quantitative measurement`);
    if (doc.meta.entity === "tool" && doc.meta.decision === "retired" && !(doc.meta.stages ?? []).includes("removed")) errors.push(`${doc.file}: retired tool lacks removed stage`);
  }
  for (const tool of ruDocs.filter((doc) => doc.meta.entity === "tool")) {
    for (const practiceId of tool.meta.practices ?? []) {
      if (!(ruById.get(practiceId).meta.tools ?? []).includes(tool.meta.id)) errors.push(`${tool.file}: relation to ${practiceId} is not bidirectional`);
    }
  }
  return errors;
}

async function validateRepository() {
  const errors = [];
  const files = { ru: await allMarkdownFiles(path.join(root, "ru")), en: await allMarkdownFiles(path.join(root, "en")) };
  const relative = (lang, file) => path.relative(path.join(root, lang), file).split(path.sep).join("/");
  const ruPaths = files.ru.map((file) => relative("ru", file));
  const enPaths = files.en.map((file) => relative("en", file));
  if (JSON.stringify(ruPaths) !== JSON.stringify(enPaths)) {
    const ruSet = new Set(ruPaths);
    const enSet = new Set(enPaths);
    for (const file of ruPaths.filter((item) => !enSet.has(item))) errors.push(`missing English mirror: ${file}`);
    for (const file of enPaths.filter((item) => !ruSet.has(item))) errors.push(`missing Russian mirror: ${file}`);
  }
  for (const file of [...files.ru, ...files.en, path.join(root, "README.md"), path.join(root, "AGENTS.md")]) {
    const text = await readFile(file, "utf8");
    for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      const target = match[1];
      if (/^(?:https?:|mailto:|#)/.test(target)) continue;
      const clean = decodeURIComponent(target.split("#")[0]);
      if (!clean) continue;
      const resolved = path.resolve(path.dirname(file), clean);
      await access(resolved).catch(() => errors.push(`${file}: broken local link ${target}`));
    }
  }
  return errors;
}

function markdownLink(from, to) {
  return path.relative(path.dirname(from), to).split(path.sep).join("/");
}

function makeIndex(lang, docs) {
  const ru = lang === "ru";
  const byEntity = (entity) => docs.filter((doc) => doc.meta.entity === entity);
  const practices = byEntity("practice");
  const tools = byEntity("tool");
  const lines = [
    ru ? "# Указатель практик агентной разработки" : "# Agent-assisted development practice index",
    "",
    ru ? "База организована от проблемы и желаемого результата. Быстрый вход по найденному инструменту доступен ниже." : "The catalog is organized around problems and desired outcomes. A quick tool-first entry is available below.",
    "",
    ru ? "## Направления" : "## Directions",
    "",
  ];
  for (const [id, ruTitle, enTitle] of directions) {
    const count = practices.filter((doc) => doc.meta.primary_direction === id || (doc.meta.related_directions ?? []).includes(id)).length;
    lines.push(`- [${ru ? ruTitle : enTitle}](directions/${id}.md) — ${count}`);
  }
  lines.push("", ru ? "## Инструменты" : "## Tools", "", ru ? "Полный [алфавитный указатель инструментов](tools/INDEX.md) показывает решение и уровень доказательств без копирования метрик." : "The full [alphabetical tool index](tools/INDEX.md) shows the decision and evidence level without copying metrics.", "", ru ? "## Требуют повторной проверки" : "## Require re-evaluation", "");
  const stale = docs.filter((doc) => doc.meta.review_state === "recheck");
  if (!stale.length) lines.push(ru ? "Сейчас таких карточек нет." : "No cards currently require re-evaluation.");
  else for (const doc of stale) lines.push(`- ${doc.title}`);
  lines.push("", ru ? "## Дополнительные входы" : "## Additional entry points", "", `- [${ru ? "Практики" : "Practices"}](practices/INDEX.md)`, `- [${ru ? "Анонимные разборы источников" : "Anonymous source analyses"}](sources/INDEX.md)`, "");
  return lines.join("\n");
}

function entityIndex(lang, entity, docs) {
  const ru = lang === "ru";
  const title = entity === "tool" ? (ru ? "Инструменты" : "Tools") : entity === "practice" ? (ru ? "Практики" : "Practices") : (ru ? "Анонимные разборы источников" : "Anonymous source analyses");
  const rootFile = path.join(root, lang, entity === "practice" ? "practices" : `${entity}s`, "INDEX.md");
  const filtered = docs.filter((doc) => doc.meta.entity === entity).sort((a, b) => a.title.localeCompare(b.title, lang));
  const lines = [`# ${title}`, ""];
  if (entity === "tool") {
    lines.push(`| ${ru ? "Инструмент" : "Tool"} | ${ru ? "Доступ" : "Access"} | ${ru ? "Код" : "Source"} | ${ru ? "Происхождение" : "Origin"} | ${ru ? "Материалы" : "Materials"} | ${ru ? "Решение" : "Decision"} | ${ru ? "Доказательства" : "Evidence"} |`, "| --- | --- | --- | --- | --- | --- | --- |");
    for (const doc of filtered) {
      const m = doc.meta;
      const origin = `${originLabels[lang][m.origin]}${m.origin === "custom" ? ` (${customScopeLabels[lang][m.custom_scope]})` : ""}`;
      const material = m.official_urls.length ? `[${ru ? "официальные" : "official"}](${m.official_urls[0]})` : (ru ? "нет публичной ссылки" : "no public link");
      lines.push(`| [${doc.title}](${markdownLink(rootFile, doc.file)}) | ${availabilityLabels[lang][m.availability]} | ${sourceAccessLabels[lang][m.source_access]} | ${origin} | ${material} | ${decisionLabels[lang][m.decision]} | ${evidenceLabels[lang][m.evidence]} |`);
    }
  } else {
    for (const doc of filtered) lines.push(`- [${doc.title}](${markdownLink(rootFile, doc.file)}) — ${decisionLabels[lang][doc.meta.decision]}`);
  }
  lines.push("");
  return lines.join("\n");
}

function directionPage(lang, direction, docs) {
  const [id, ruTitle, enTitle, ruDescription] = direction;
  const ru = lang === "ru";
  const title = ru ? ruTitle : enTitle;
  const description = ru ? ruDescription : {
    "task-human-collaboration": "How humans set boundaries, permissions, and verifiable feedback.",
    "context-codebase-research": "How agents obtain sufficient context without unnecessary indexing and noise.",
    "external-knowledge-docs": "How changing claims and contracts are verified against primary sources.",
    "planning-design": "How options are explored and proportionate design decisions are made.",
    "implementation-refactoring": "How agent implementation is bounded and code is improved without scope growth.",
    "verification-quality-security": "How agent output is accepted through observed behavior and deterministic checks.",
    "ui-browser-validation": "How design and real interface states are verified beyond source inspection.",
    "agent-coordination-automation": "How delegation and external systems are used without excess permission surface.",
    "efficiency-cost-observability": "How accepted-task cost and context reduction are measured without quality loss.",
    "knowledge-learning": "How reusable lessons are retained without creating dead documentation.",
  }[id];
  const relevant = docs.filter((doc) => doc.meta.primary_direction === id || (doc.meta.related_directions ?? []).includes(id));
  const lines = [`# ${title}`, "", description, ""];
  for (const [entity, heading] of [["practice", ru ? "Практики" : "Practices"], ["tool", ru ? "Инструменты" : "Tools"]]) {
    lines.push(`## ${heading}`, "");
    const items = relevant.filter((doc) => doc.meta.entity === entity).sort((a, b) => a.title.localeCompare(b.title, lang));
    for (const doc of items) lines.push(`- [${doc.title}](${markdownLink(path.join(root, lang, "directions", `${id}.md`), doc.file)}) — ${decisionLabels[lang][doc.meta.decision]}`);
    if (!items.length) lines.push(ru ? "Пока нет карточек." : "No cards yet.");
    lines.push("");
  }
  return lines.join("\n");
}

async function generatedFiles(lang, docs) {
  const files = new Map();
  files.set(path.join(root, lang, "INDEX.md"), makeIndex(lang, docs));
  files.set(path.join(root, lang, "tools", "INDEX.md"), entityIndex(lang, "tool", docs));
  files.set(path.join(root, lang, "practices", "INDEX.md"), entityIndex(lang, "practice", docs));
  files.set(path.join(root, lang, "sources", "INDEX.md"), entityIndex(lang, "source", docs));
  for (const direction of directions) files.set(path.join(root, lang, "directions", `${direction[0]}.md`), directionPage(lang, direction, docs));
  return files;
}

async function main() {
  const ruDocs = await loadLanguage("ru");
  const enDocs = await loadLanguage("en");
  const errors = validateDocs(ruDocs, enDocs);
  const generated = new Map([...(await generatedFiles("ru", ruDocs)), ...(await generatedFiles("en", enDocs))]);
  if (mode === "--write") {
    for (const [file, content] of generated) {
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, `${content.trim()}\n`);
    }
  } else {
    for (const [file, content] of generated) {
      const current = await readFile(file, "utf8").catch(() => "");
      if (current !== `${content.trim()}\n`) errors.push(`${file}: generated file is stale`);
    }
  }
  errors.push(...await validateRepository());
  if (errors.length) {
    for (const error of errors) console.error(`ERROR ${error}`);
    process.exitCode = 1;
    return;
  }
  console.log(`Catalog ${mode === "--write" ? "generated" : "validated"}: ${ruDocs.filter((d) => d.meta.entity === "practice").length} practices, ${ruDocs.filter((d) => d.meta.entity === "tool").length} tools, ${ruDocs.filter((d) => d.meta.entity === "source").length} sources.`);
}

await main();
