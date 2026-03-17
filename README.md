# The Complete Guide to Building Skills for Claude

An interactive landing page based on Anthropic's official guide for building Skills for Claude — featuring a design inspired by Anthropic's visual identity, three-language support, and smooth animations.

🔗 **[View the live page](https://coldtatooine.github.io/claude-skill-guide/)**

---

## About

This project transforms the official PDF *"The Complete Guide to Building Skills for Claude"* into a structured, navigable, and visually polished web experience.

The content covers the full lifecycle of a Skill:

- **Fundamentals** — what a Skill is and how it works
- **Planning** — how to design an effective Skill
- **Testing** — validation and iteration
- **Distribution** — publishing and sharing
- **Advanced Patterns** — best practices and use cases
- **Troubleshooting** — common errors and how to fix them
- **Resources & Checklist** — final references

---

## Generation Pipeline

```
Official PDF (Anthropic)
        ↓
  Claude Code (doc-to-page skill)
        ↓
  React + Vite (structure and components)
        ↓
  Anthropic design system (colors, typography, CSS tokens)
        ↓
  i18n PT-BR / ES-MX / EN-US
        ↓
  GitHub Pages (automated deploy via gh-pages)
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 7 |
| Animations | Framer Motion |
| i18n | React Context API (no external dependencies) |
| Typography | Lora (serif) · Space Grotesk · JetBrains Mono |
| Deploy | `gh-pages` → GitHub Pages |

---

## Supported Languages

| Code | Language |
|------|----------|
| `en` | English 🇺🇸 |
| `pt-BR` | Brazilian Portuguese 🇧🇷 |
| `es-MX` | Spanish (Mexico) 🇲🇽 |

The language selector is in the top-right corner of the header — it persists during navigation and affects all page content.

---

## Design

Inspired by the [anthropic.com](https://www.anthropic.com/) design system:

- **Background:** warm ivory `#faf9f5` instead of plain white
- **Accent:** clay/terracotta `#d97757` — memorable and distinctive
- **Typography:** Lora serif for body text (humanity) + Space Grotesk sans-serif for headings (authority)
- **Animations:** slow and elegant, scroll reveal with `opacity` + `translateY`
- **Borders:** ultra-subtle `rgba(20,20,19,0.10)`

---

## Running Locally

```bash
git clone https://github.com/coldtatooine/claude-skill-guide.git
cd claude-skill-guide
npm install
npm run dev
```

To deploy:

```bash
npm run deploy
```

---

## Credits

- Built by **[Ale Lima](https://www.linkedin.com/in/alessandroflima/)** ([@coldtatooine](https://github.com/coldtatooine)) with **[Claude Code](https://claude.ai/code)**
- Content based on the **[official Anthropic guide](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf)**

---

*This project was built entirely with Claude Code — from PDF extraction to design system implementation, i18n, and deployment.*
