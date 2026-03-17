# The Complete Guide to Building Skills for Claude

Uma landing page interativa do guia oficial da Anthropic para criação de Skills para o Claude — com design inspirado na identidade visual da Anthropic, suporte a três idiomas e animações fluidas.

🔗 **[Ver a página ao vivo](https://coldtatooine.github.io/claude-skill-guide/)**

---

## Sobre

Este projeto transforma o PDF oficial *"The Complete Guide to Building Skills for Claude"* em uma experiência web estruturada, navegável e visualmente sofisticada.

O conteúdo cobre todo o ciclo de vida de uma Skill:

- **Fundamentos** — o que é uma Skill e como ela funciona
- **Planejamento** — como desenhar uma Skill eficaz
- **Testes** — validação e iteração
- **Distribuição** — publicação e compartilhamento
- **Padrões avançados** — boas práticas e casos de uso
- **Troubleshooting** — erros comuns e como resolvê-los
- **Recursos e Checklist** — referências finais

---

## Pipeline de geração

```
PDF oficial (Anthropic)
        ↓
  Claude Code (skill doc-to-page)
        ↓
  React + Vite (estrutura e componentes)
        ↓
  Anthropic design system (cores, tipografia, tokens CSS)
        ↓
  i18n PT-BR / ES-MX / EN-US
        ↓
  GitHub Pages (deploy automático via gh-pages)
```

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 19 + Vite 7 |
| Animações | Framer Motion |
| i18n | React Context API (sem dependências externas) |
| Tipografia | Lora (serif) · Space Grotesk · JetBrains Mono |
| Deploy | `gh-pages` → GitHub Pages |

---

## Idiomas suportados

| Código | Idioma |
|--------|--------|
| `en` | English (EN) 🇺🇸 |
| `pt-BR` | Português Brasileiro 🇧🇷 |
| `es-MX` | Español (México) 🇲🇽 |

A seleção de idioma fica no canto direito do header — persiste durante a navegação e afeta todo o conteúdo da página.

---

## Design

Inspirado no design system de [anthropic.com](https://www.anthropic.com/):

- **Fundo:** ivory quente `#faf9f5` em vez de branco puro
- **Acento:** clay/terracota `#d97757` — memorável e único
- **Tipografia:** Lora serif no corpo (humanidade) + Space Grotesk sans-serif nos títulos (autoridade)
- **Animações:** lentas e elegantes, scroll reveal com `opacity` + `translateY`
- **Borders:** ultra-sutis `rgba(20,20,19,0.10)`

---

## Como rodar localmente

```bash
git clone https://github.com/coldtatooine/claude-skill-guide.git
cd claude-skill-guide
npm install
npm run dev
```

Para fazer deploy:

```bash
npm run deploy
```

---

## Créditos

- Gerado por **[Ale Lima](https://www.linkedin.com/in/alessandroflima/)** ([@coldtatooine](https://github.com/coldtatooine)) com **[Claude Code](https://claude.ai/code)**
- Conteúdo baseado no **[guia oficial da Anthropic](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf)**

---

*Este projeto foi construído inteiramente com Claude Code — da extração do PDF à implementação do design system, i18n e deploy.*
