# AI Fluency Playbook — Progress Log

This document tracks what has been built, what decisions were made, and what remains to be done. It serves as context for continuing work across sessions.

---

## Project Summary

An Astro + Starlight static site for the Generalist World community that turns AI Skills Quiz results into personalized learning pathways. Hosted on a Hetzner CX32 server behind Traefik with Docker, at `playbook.informationgeek.org`.

- **Repo**: `github.com:vlakmaker/gw-ai-fluency.git`, branch `master`
- **Site generator**: Astro + Starlight (migrated from Quartz v4)
- **Deployment**: Docker (node:22-alpine build -> nginx) on CX32 via GitHub Actions SSH
- **Domain**: `playbook.informationgeek.org`

---

## Key Decisions

| Decision | Choice | Why |
|----------|--------|-----|
| Site generator | Astro + Starlight (was Quartz v4) | Better design control, richer components, faster builds |
| Font | Work Sans throughout (headers + body) | Matches GW brand; Cheltenham Pro is commercial |
| Colors | Primary `#5c0098`, lavender `#e0b1ff`, navy `#02061d` | Generalist World brand palette |
| Archetypes | 4 learning styles: Tinkerer (42%), Planner (25%), Strategist (23%), Social Learner (6%) | Based on quiz data; old archetypes (Connector, Innovator, etc.) and shadow archetypes removed |
| Content links | Standard markdown `[text](url)` | Quartz used wiki-links `[[...]]`; Astro/Starlight uses standard markdown |
| Deploy target | CX32 Docker (not GitHub Pages) | Existing infrastructure, Traefik routing already configured |
| Content location | `src/content/docs/` is canonical | Old `playbook/` Obsidian vault removed |

---

## What Has Been Built

### Phase 1: Infrastructure (Sessions 1-2)
- Dockerfile with multi-stage build (node:22-alpine -> nginx)
- docker-compose.yml with Traefik labels for `playbook.informationgeek.org`
- nginx.conf with IPv4+IPv6 support, gzip, SPA fallback
- GitHub Actions workflow (`.github/workflows/deploy.yml`) — test, build, SSH deploy to CX32
- CX32 setup docs at `docs/cx32-setup.md`

### Phase 2: Content (Sessions 1-2)
- **15 exercises** across 5 pillars x 3 levels, all following the multi-entry-point template (Jump in / Plan first / Why this matters / Reflection / Level up)
- **5 pillar pages**: Agent Collaboration, Cross-Domain Reframing, Ethical Prompting, Insight Synthesis, Workflow Automation
- **4 archetype pages**: Tinkerer, Planner, Strategist, Social Learner
- **4 pathway pages**: New to AI, High Synthesis Low Agent, High Automation Low Ethics, Strong Communicator Low Technical
- **3 level pages**: Basic, Intermediate, Advanced
- **Resources**: Glossary, Tools & Platforms, Further Reading
- **Intro pages**: Getting Started, How to Use
- **Landing page** (index.md): warm, welcoming entry point for generalists
- Section index pages for all directories

### Phase 3: Astro Migration (Session 3)
- Astro + Starlight project scaffolded with full sidebar navigation config
- All 48 content files migrated from `playbook/` to `src/content/docs/`
- 249 wiki-links converted to standard markdown links (converter script at `scripts/convert-wikilinks.mjs`)
- Custom CSS at `src/styles/custom.css` with GW branding
- Build produces 49 pages with Pagefind search index and sitemap in ~4.5 seconds

### Phase 4: Cleanup (Session 3)
- Old Quartz files removed: `quartz.config.ts`, `quartz.layout.ts`, `custom.scss`
- Old `playbook/` directory removed (content now in `src/content/docs/`)
- Default `src/assets/houston.webp` removed
- `.opencode/` directory removed and added to `.gitignore`
- `.gitignore` updated for Astro (`dist/`, `.astro/`, `.opencode/`)
- Test scripts updated to validate `src/content/docs/` with standard markdown links
- Fixed broken link in `how-to-use.md` (`/index/` -> `/`)
- CI workflow updated: Astro build verification + CX32 SSH deploy + `workflow_dispatch` trigger
- All tests pass: 15 exercises validated, 249 internal links verified

### Phase 5: Styling & CI Debugging (Session 4)
- **GW brand styling overhaul** (`src/styles/custom.css`):
  - Purple header (`#5c0098`) with white text
  - Proper light mode: white bg `#ffffff`, navy text `#02061d`, pale lavender accents `#f9efff`
  - Proper dark mode: deep purple bg `#110e18`, light lavender text `#f8f5fc`
  - Work Sans font loaded from Google Fonts
  - Styled blockquotes, tables, inline code with accent-low backgrounds
  - Active sidebar item highlighting
- **Fixed inverted Starlight color tokens**: Discovered that Starlight's semantic color system (`--sl-color-white` = foreground, `--sl-color-black` = background) and gray scale (1-6) completely flip between light/dark modes. Initial attempt had inverted contrast. Corrected in commit `59eae56`
- **GitHub Actions outage debugging**: Actions went down ~22:53 UTC on 2026-03-05. Commits from `06f5f7a` onward not picked up. Tried deleting and re-creating workflow to force re-registration. Added `workflow_dispatch` trigger for manual runs
- **`project-info.md` rewritten**: Replaced outdated Quartz-era content with current Astro + Starlight state, including full technical stack, content architecture, brand styling notes, and phase plan
- **`progress.md` created**: New session log document for cross-session continuity (committed in `8c5e64a`)

---

## Current State

### Repo Structure
```
gw-ai-fluency/
├── .github/workflows/deploy.yml   # CI: test -> build -> SSH deploy to CX32
├── astro.config.mjs               # Starlight config, sidebar, branding
├── tsconfig.json
├── package.json                    # Astro deps, test/build scripts
├── Dockerfile                      # Multi-stage: node build -> nginx serve
├── docker-compose.yml              # Traefik labels for playbook.informationgeek.org
├── nginx.conf                      # Static serving, gzip, IPv4+IPv6
├── src/
│   ├── content.config.ts           # Starlight content collection
│   ├── content/docs/               # All 48 content files (canonical)
│   │   ├── index.md                # Landing page
│   │   ├── getting-started.md
│   │   ├── how-to-use.md
│   │   ├── archetypes/             # 4 learning styles + index
│   │   ├── exercises/              # 15 exercises in 5 subdirs + indexes
│   │   ├── levels/                 # 3 levels + index
│   │   ├── pathways/               # 4 pathways + index
│   │   ├── pillars/                # 5 pillars + index
│   │   └── resources/              # glossary, tools, further reading + index
│   └── styles/custom.css           # GW brand colors, Work Sans font
├── public/favicon.svg
├── scripts/convert-wikilinks.mjs   # Wiki-link to markdown converter utility
├── tests/
│   ├── validate-content.mjs        # Exercise frontmatter + template validation
│   └── validate-links.mjs          # Internal markdown link checker
├── docs/cx32-setup.md              # Server setup instructions
└── project-info.md                 # Original project plan (partially outdated)
```

### Commit History
```
2e72b9a Initial scaffold: Obsidian vault structure
8f6bda9 Add Phase 2 content: all 15 exercises, archetypes, pathways, resources
f7d824e Fix Node.js version: upgrade to v22 for Quartz v4.5.2
df860b2 Fix Alpine build: bypass BusyBox env -S incompatibility
e93c151 Set domain to playbook.informationgeek.org
faa9115 Fix healthcheck: add IPv6 listen and use 127.0.0.1
bab7e38 Restructure playbook: add intro pages, section indexes, pathways
541d7f9 Replace archetypes with learning styles and add GW brand styling
16ec52e Fix styling: add required base.scss import to custom.scss
2565a35 Fix fonts and colors: use Work Sans throughout
06f5f7a Migrate from Quartz to Astro + Starlight
e42365e Remove old playbook directory, houston.webp, .opencode
e1e388f Add workflow_dispatch trigger to CI workflow
2d8a859 Temporarily remove workflow for re-registration
51e00d4 Re-add CI workflow for Astro build and CX32 deploy
8c5e64a Add progress.md to track project state across sessions
085fa7f Fix styling: branded purple header, proper light/dark mode tokens, GW brand colors
59eae56 Fix inverted color tokens: align with Starlight's semantic color system
```

---

## Known Issues

1. **GitHub Actions outage**: As of 2026-03-05 ~22:53 UTC, GitHub Actions was in a major outage. The Astro migration commits (`06f5f7a` onward) have not been picked up by CI yet. Actions should process them automatically once the outage resolves, or trigger manually with `gh workflow run deploy.yml --ref master`.

2. **Starlight duplicate ID warning**: Build produces a harmless warning: `Duplicate id "how-to-use" found`. Only one `how-to-use.md` file exists — this is an internal Starlight content loader quirk, not a real issue.

3. **CX32 deploy secrets**: The workflow requires three GitHub secrets to be configured:
   - `CX32_HOST` — server IP or hostname
   - `CX32_USER` — should be `vlakmaker` (not root)
   - `CX32_SSH_KEY` — SSH private key for `vlakmaker` user
   - The `vlakmaker` user needs docker group membership and ownership of `/opt/apps/gw-ai-fluency`

4. **`project-info.md` updated**: Rewritten to reflect Astro + Starlight state. Uncommitted — pending next push.

---

## Discoveries & Workarounds

These are things we learned the hard way — preserved for future reference.

- **Quartz CLI uses `#!/usr/bin/env -S`** which doesn't work on Alpine/BusyBox — worked around with direct `node` invocation (no longer relevant after Astro migration)
- **Alpine healthcheck IPv4/IPv6 mismatch** — nginx only listened on IPv4, wget tried IPv6 `::1` first. Fixed by adding `listen [::]:80;` and using `127.0.0.1` in healthcheck
- **Quartz `custom.scss` must start with `@use "./base.scss";`** — omitting it strips all base styles (no longer relevant)
- **Wiki-links in markdown tables** use `\|` escaping which produces `\/` artifacts — the converter script handles this
- **Astro Starlight** requires `index.md` (not `_index.md` like Quartz/Hugo) for section index pages
- **Starlight color tokens use semantic naming, NOT literal colors**: `--sl-color-white` = highest contrast foreground (headings/bold), `--sl-color-black` = page background. In light mode, "white" token renders dark and "black" token renders white. The gray scale (1-6) completely flips between modes. `:root` scope = dark mode defaults, `:root[data-theme='light']` = light mode overrides. Getting this wrong causes inverted contrast.

---

## What's Next

### Immediate (once GitHub Actions is back)
- [ ] Verify CI pipeline runs successfully with Astro build
- [ ] Verify site deploys and is live at `playbook.informationgeek.org`
- [ ] Confirm all 49 pages render correctly in browser

### Short-term
- [ ] Update `project-info.md` to reflect current state (or remove in favor of this file)
- [ ] Update `docs/cx32-setup.md` — step 4 still references `quartz.config.ts`
- [ ] Add a proper favicon (current one is a default SVG placeholder)
- [ ] Review and improve landing page content and styling
- [ ] Test responsive/mobile layout

### Medium-term (Phase 4 from project plan)
- [ ] Quiz-to-playbook linking: update ScoreApp results page with playbook links
- [ ] Design landing/routing page for self-navigation based on quiz results
- [ ] Add more exercises (currently 1 per pillar x level = 15 total; plan allows for more)

### Future
- [ ] Community soft launch and feedback collection
- [ ] Custom Starlight components (archetype cards, exercise navigation, progress tracking)
- [ ] Consider adding interactive elements (quiz result input -> personalized pathway display)
