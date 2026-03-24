# AI Fluency Playbook

A hands-on resource that helps generalists build practical AI skills through exercises, frameworks, and personalized learning paths.

**Live site:** [playbook.informationgeek.org](https://playbook.informationgeek.org)

## What is this?

Most AI resources assume you're a developer or data scientist. This playbook is built for **generalists** — people who work across domains, wear multiple hats, and want to use AI thoughtfully and effectively without needing a technical background.

It includes:

- **15 hands-on exercises** across three difficulty levels (15-40 minutes each)
- **5 skill pillars** — Ethical Prompting, Insight Synthesis, Workflow Automation, Cross-Domain Reframing, Agent Collaboration
- **6 concept pages** covering how AI works, why it fails, tokenization, prompt engineering, and the agent spectrum
- **4 learning archetypes** (Tinkerer, Planner, Strategist, Social Learner) with tailored entry points in every exercise
- **4 guided pathways** based on AI Skills Quiz results
- **Curated resources** — glossary, tool recommendations, and vetted further reading

Paired with the [AI Skills Quiz](https://aiskillsquiz.com) for personalized starting points.

## Tech stack

- [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) for the documentation site
- Docker + nginx for deployment
- Content validation tests (frontmatter, required sections, internal link checking)

## Getting started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run content validation tests
npm test
```

## Project structure

```
src/content/docs/
  getting-started.md          # Entry point
  how-to-use.md               # Navigation guide
  concepts/                   # 6 foundational concept pages
  pillars/                    # 5 skill area overviews
  exercises/                  # 15 exercises (5 pillars x 3 levels)
    ethical-prompting/
    insight-synthesis/
    workflow-automation/
    cross-domain-reframing/
    agent-collaboration/
  archetypes/                 # 4 learning style profiles
  pathways/                   # 4 guided learning routes
  resources/                  # Glossary, tools, further reading
tests/
  validate-content.mjs        # Frontmatter & template validation
  validate-links.mjs          # Internal link checker
```

## Content validation

Running `npm test` checks:

- **Exercise frontmatter** — required fields (pillar, level, archetype-fit, time-estimate, tags) with valid values
- **Exercise template** — required sections (Jump in, Plan first, Why this matters, Reflection, Level up)
- **Concept frontmatter** — required fields (type, related-pillars, last-updated, tags)
- **Pillar coverage** — every pillar has at least one exercise per level
- **Internal links** — all 271 markdown links resolve to existing pages

## Part of Generalist World

This playbook is part of the [Generalist World](https://generalist.world) community. It's open, evolving, and built on the belief that AI fluency is a skill anyone can develop.

## License

Content is intended for educational use within the Generalist World community.
