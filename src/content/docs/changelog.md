---
title: Changelog
description: A record of major updates and milestones for the AI Fluency Playbook.
---

A reverse-chronological record of what's changed. This playbook is a living resource — it evolves alongside the tools and ideas it covers.

---

## March 2026 (Part 2)

### 6 new Core Concept pages
Core Concepts grows from 6 to 12 pages, covering the full landscape a generalist needs to understand:
- **AI Ethics & Bias** — where bias comes from in training data and how to spot it in your work
- **Data Privacy & Security** — what happens to your data when you use AI, what to keep out, and the "newspaper test"
- **Multimodal AI** — AI isn't just text anymore: images, documents, audio, code execution
- **RAG & Knowledge Grounding** — how tools like Perplexity and enterprise search use your documents to give better answers
- **Choosing the Right AI Tool** — a practical framework instead of "which one is best?"
- **Open vs. Closed Models** — the difference between running Llama locally and using Claude/ChatGPT, and why it matters for privacy and cost

### Expanded Tools & Platforms page
- Every tool now has a direct link (ChatGPT, Claude, Gemini, Zapier, Make, n8n — all of them)
- Added Perplexity to the AI chat tools list
- New open-source section with models (Llama 3, Mistral, DeepSeek, Qwen, Gemma, Phi), tools to run them locally (Ollama, LM Studio, Jan, Open WebUI), and cloud APIs (Together AI, Groq, Fireworks, Hugging Face)

### Brand & design refresh
- Cheltenham Pro Bold for all headings, Work Sans for body text — now fully in Generalist World style
- Header restyled with yellow site title and lavender accents on the purple background
- New Generalist World favicon

### Header quiz link and About pages
- Added "Take the Free Quiz" button in the site header linking to the [AI Skills Quiz](https://www.aiskillsquiz.com/)
- Added About page with project philosophy and author background
- Added this Changelog page

---

## March 2026 (Part 1)

### Infrastructure improvements
- Consolidated to single Docker container behind Caddy
- Removed Traefik in favor of Caddy reverse proxy
- Fixed generalist.world links

### Content restructuring
- Streamlined playbook: removed bloat, enriched pillar pages, reduced repetition
- Reordered sidebar: concepts first, merged Archetypes & Pathways into one group
- Integrated updated Further Reading section with verified, curated links

---

## Early March 2026

### Core Concepts launch
- Added first 3 Core Concepts: How AI Actually Works, Why AI Gets Things Wrong, Prompt Engineering Basics
- Extended content schema with custom frontmatter fields for exercises and concepts
- Expanded test coverage for concept page validation

### Brand styling overhaul
- Purple header (`#5c0098`) with Generalist World brand palette
- Proper light/dark mode with corrected Starlight color token semantics
- Work Sans body font loaded from Google Fonts
- Styled blockquotes, tables, inline code, and sidebar active states

---

## Late February 2026

### Migration to Astro + Starlight
- Migrated entire site from Quartz v4 to Astro + Starlight for better design control and richer components
- Converted 249 wiki-links to standard markdown links
- Built custom CSS theme matching the Generalist World brand
- Set up Pagefind search index and automatic sitemap generation

### Initial content
- 15 exercises across 5 pillars (Ethical Prompting, Insight Synthesis, Workflow Automation, Cross-Domain Reframing, Agent Collaboration) at 3 levels each
- 4 learner archetypes based on quiz data: Tinkerer (42%), Planner (25%), Strategist (23%), Social Learner (6%)
- 4 learning pathways tailored to different skill profiles
- Resource pages: Glossary, Tools & Platforms, Further Reading
- Getting Started and How to Use guides

### Infrastructure
- Docker multi-stage build (Node.js 22 + nginx)
- GitHub Actions CI/CD pipeline with SSH deploy to Hetzner CX32
