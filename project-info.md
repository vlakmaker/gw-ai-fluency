# AI Fluency Playbook — Project Plan

## Project overview

A static site that turns AI Fluency Quiz results into personalized learning pathways. Built for the Generalist World community as a free resource, architected to scale into a paid product/service for organizations.

- **Client**: Generalist World (unpaid — compensation covered by quiz project)
- **Hosting**: Hetzner CX32 server, Docker + nginx behind Traefik, auto-HTTPS
- **Domain**: `playbook.informationgeek.org`
- **Site generator**: Astro + Starlight (migrated from Quartz v4)
- **Content format**: Markdown files in `src/content/docs/`, standard markdown links
- **Repo**: `github.com:vlakmaker/gw-ai-fluency.git`, branch `master`
- **Quiz**: Live at aiskillsquiz.com (ScoreApp, 19 questions, 5 pillars)

---

## Current status

### Completed (Phases 1-3)
- Site architecture designed and content written (48 pages, 15 exercises)
- Astro + Starlight site building successfully (49 pages, Pagefind search, sitemap)
- GW brand styling applied (Work Sans font, purple/lavender/navy palette, light + dark mode)
- Docker deployment pipeline configured (GitHub Actions -> SSH -> Docker rebuild on CX32)
- All content validated (frontmatter, links) via automated test scripts

### In progress
- CI/CD pipeline needs verification after GitHub Actions outage (2026-03-05)
- Site not yet publicly accessible (pending first successful deploy)

### Not started
- Quiz-to-playbook linking (Phase 4)
- Community launch (Phase 5)
- Product packaging (Phase 6)

---

## Technical stack

| Component | Technology |
|-----------|-----------|
| Site generator | Astro 5 + Starlight 0.37 |
| Build | `npm run build` -> static HTML in `dist/` |
| Search | Pagefind (built into Starlight) |
| Docker | Multi-stage: node:22-alpine (build) -> nginx:alpine (serve) |
| Reverse proxy | Traefik v3, auto-HTTPS via Let's Encrypt |
| CI/CD | GitHub Actions: test -> build -> SSH deploy to CX32 |
| Tests | `validate-content.mjs` (frontmatter), `validate-links.mjs` (249 internal links) |
| Font | Work Sans (Google Fonts) |
| Colors | `#5c0098` (purple), `#e0b1ff` (lavender), `#02061d` (navy), `#ffee32` (yellow accent) |

---

## Quiz data insights (informing all content decisions)

Based on community-wide ScoreApp analytics:

### Pillar scores (average)

| Pillar | Score | Implication |
|--------|-------|-------------|
| Ethical Prompting & Judgment | 75% | Highest — exercises should challenge confidence with practice |
| Cross-Domain Reframing | 67% | Solid middle — past basic, approaching intermediate |
| Workflow Automation | 65% | Solid middle — same growth zone |
| Insight Synthesis | 64% | Solid middle — same growth zone |
| Agent Collaboration | 51% | Clear weak spot. 14-point gap. Biggest learning opportunity |

**Key takeaway**: Agent Collaboration is the flagship pillar — most need, most value.

### Learning style distribution

| Style | % | Content implication |
|-------|---|-------------------|
| Tinkerer | 42% | Lead with hands-on. Challenge first, context second |
| Planner | 25% | Provide structure preview before action |
| Strategist | 23% | Connect exercises to bigger picture and career value |
| Social Learner | 6% | Lightweight discussion prompts, not dedicated content |

**Key takeaway**: Nearly half learn by doing. Exercises lead, theory supports.

### Notable patterns

- Q1 (new AI tool): 37% dive in immediately, 33% test for a specific use case — community skews experimentation
- Q3 (bad output): 62% cross-check manually or rephrase — strong correction instinct
- Q5 (why AI): Split between simplifying complexity (40%) and accelerating ideas (32%)
- Agent Collaboration Q1: Majority chat with GPT alone — multi-agent thinking is genuinely unfamiliar

---

## Content architecture

### Site structure
```
src/content/docs/
├── index.md                    # Landing page
├── getting-started.md          # What AI fluency means
├── how-to-use.md               # Three paths in, based on learning style
├── pillars/                    # 5 pillars + index
│   ├── agent-collaboration.md
│   ├── cross-domain-reframing.md
│   ├── ethical-prompting.md
│   ├── insight-synthesis.md
│   └── workflow-automation.md
├── exercises/                  # 15 exercises in 5 subdirs + indexes
│   ├── agent-collaboration/    # ac-basic-01, ac-intermediate-01, ac-advanced-01
│   ├── cross-domain-reframing/ # cdr-basic-01, cdr-intermediate-01, cdr-advanced-01
│   ├── ethical-prompting/      # ep-basic-01, ep-intermediate-01, ep-advanced-01
│   ├── insight-synthesis/      # is-basic-01, is-intermediate-01, is-advanced-01
│   └── workflow-automation/    # wa-basic-01, wa-intermediate-01, wa-advanced-01
├── archetypes/                 # 4 learning styles + index
│   ├── tinkerer.md
│   ├── planner.md
│   ├── strategist.md
│   └── social-learner.md
├── pathways/                   # 4 personalized routes + index
│   ├── new-to-ai.md
│   ├── strong-communicator-low-technical.md
│   ├── high-synthesis-low-agent.md
│   └── high-automation-low-ethics.md
├── levels/                     # 3 levels + index
│   ├── basic.md
│   ├── intermediate.md
│   └── advanced.md
└── resources/                  # Reference material + index
    ├── glossary.md
    ├── tools-and-platforms.md
    └── further-reading.md
```

### Linking strategy

- Each pillar page links to its exercises (by level) and relevant archetypes
- Each exercise links back to its pillar and cross-links to related exercises
- Each archetype links to the pillars and exercises most aligned with it
- Each pathway links to a curated sequence of exercises based on a quiz result profile
- All links are standard markdown `[text](/path/)` — validated by `tests/validate-links.mjs`

### Exercise template (learning-style-aware)

Every exercise follows this structure:

```markdown
---
title: "Exercise Title"
pillar: agent-collaboration
level: basic
archetype-fit: [tinkerer, social-learner]
time-estimate: 15min
tags: [exercise, pillar/agent-collaboration, level/basic, type/exercise]
---

# Exercise Title

> **One-liner:** What you'll walk away being able to do.

---

## Jump in (Tinkerers start here)
The challenge itself. Minimal preamble. Clear action.

## Plan first (Planners start here)
A short breakdown of what you're about to do and why, in 3-5 steps.

## Why this matters (Strategists start here)
Strategic context: what capability this builds, where it fits.

## Reflection
- What surprised you about the output?
- What did you have to fix or override?
- How would you explain what you just did to a colleague?
- Discuss: [Social Learner discussion prompt]

## Level up
Pointer to the next exercise or intermediate version.
```

**Design decisions**:
- Tinkerers (42%) hit action immediately — "Jump in" is first
- Planners (25%) get structured preview before doing
- Strategists (23%) get context and purpose
- Social Learners (6%) get discussion prompts in Reflection
- All entry points on one page — no variant navigation needed

---

## Deployment

### Infrastructure
- **Server**: Hetzner CX32, SSH user `vlakmaker`
- **Docker**: Multi-stage build (node:22-alpine -> nginx:alpine)
- **Traefik**: Reverse proxy with auto-HTTPS, labels in `docker-compose.yml`
- **Domain**: `playbook.informationgeek.org`

### CI/CD pipeline (`.github/workflows/deploy.yml`)
1. On push to `master`: checkout, `npm ci`, `npm test`, `npm run build`
2. SSH into CX32, `git pull`, `docker compose up -d --build`
3. Health check: verify container is running

### Required GitHub secrets
- `CX32_HOST` — server IP or hostname
- `CX32_USER` — `vlakmaker`
- `CX32_SSH_KEY` — SSH private key for vlakmaker user

### Local development
```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
npm test         # Run content + link validation
```

---

## Brand styling

### Generalist World palette
| Token | Value | Usage |
|-------|-------|-------|
| Primary purple | `#5c0098` | Header bg, accents, links, h1 |
| Lavender | `#e0b1ff` | Hover states, decorative |
| Pale lavender | `#f9efff` | Light mode: blockquote bg, table header bg, active sidebar |
| Dark navy | `#02061d` | Light mode: text color |
| Yellow | `#ffee32` | CTA accent (reserved, not yet used) |
| White | `#ffffff` | Light mode: page background |

### Starlight theming notes
Starlight's color tokens use **semantic naming**, not literal colors:
- `--sl-color-white` = highest contrast foreground (headings) — dark in light mode, light in dark mode
- `--sl-color-black` = page background — white in light mode, dark in dark mode
- Gray scale (1-6) flips between modes: gray-1 is lightest in dark, darkest in light
- `:root` = dark mode defaults; `:root[data-theme='light']` = light mode overrides
- Custom styles in `src/styles/custom.css`

---

## Phase plan

### Phase 1: Architecture & Structure -- COMPLETE
- Vault/site folder structure designed
- Exercise template with learning-style entry points
- Linking strategy and tagging taxonomy

### Phase 2: Core Content -- COMPLETE
- 15 exercises (5 pillars x 3 levels)
- 5 pillar pages, 4 archetype pages, 4 pathway pages
- 3 level pages, resource pages (glossary, tools, further reading)
- Landing page, getting started, how to use

### Phase 3: Infrastructure -- COMPLETE
- Astro + Starlight site (migrated from Quartz)
- Docker + Traefik deployment on CX32
- GitHub Actions CI/CD pipeline
- GW brand styling (Work Sans, purple palette, light/dark modes)
- Automated content + link validation tests

### Phase 4: Quiz-to-Playbook Linking -- NOT STARTED
- Update ScoreApp results page with playbook links
- Write guidance text per pillar score range
- Design self-routing landing page ("What was your lowest pillar?")

### Phase 5: Community Launch -- NOT STARTED
- Soft launch with 10-20 quiz-takers
- Collect feedback on clarity, difficulty, navigation
- Iterate based on feedback
- Full community announcement

### Phase 6: Product Seed -- FUTURE
- Track: quiz completion rates, exercise completion, pathway visits
- Team Fluency Maps (org-level quiz aggregation)
- Custom playbooks for specific industries
- Facilitated cohorts (4-week guided programs)
- One-pager pitch for organizations

---

## Open questions — resolved

- **Domain**: Using `playbook.informationgeek.org` for now. Final domain TBD.
- **Quiz data access**: Manual export only. Playbook linked from ScoreApp results — no API routing.
- **Content gating**: MVP is fully open. Gating deferred to post-launch.
- **Learning style differentiation**: Solved via multi-entry-point exercise template.
- **FluencyLab integration**: Separate tool, optional link from playbook.
- **GW collaboration**: Vera building MVP first, then presenting to GW for feedback.
- **Site generator**: Migrated from Quartz to Astro + Starlight for better design control.
- **Font**: Work Sans throughout (Cheltenham Pro is commercial, not available for web).
