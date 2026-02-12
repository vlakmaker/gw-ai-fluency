AI Fluency Playbook — Project Plan
Project overview
An interactive, Obsidian-powered learning platform that turns AI Fluency Quiz results into personalized development pathways. Built for the Generalist World community as a free resource, architected to scale into a paid product/service for organizations.
Client: Generalist World (unpaid — compensation covered by quiz project)
Hosting: CX32 server (self-hosted, Quartz static site behind Traefik)
Content format: Obsidian vault → Quartz-generated site
Status: Quiz is live at aiskillsquiz.com. Playbook content exists as draft outlines. Infrastructure not yet set up.

Quiz data insights (informing all content decisions)
Based on community-wide ScoreApp analytics:
Pillar scores (average)
PillarScoreImplicationEthical Prompting & Judgment75%Highest — people feel confident. Exercises should challenge this with practice, not just awareness.Cross-Domain Reframing67%Solid middle — most users are past basic, approaching intermediate.Workflow Automation65%Solid middle — same growth zone as CDR.Insight Synthesis64%Solid middle — same growth zone.Agent Collaboration51%Clear weak spot. 14-point gap to next lowest. Biggest learning opportunity.
Key takeaway: Agent Collaboration is the flagship pillar — most need, most value, best showcase for the playbook.
Learning style distribution
Style%Content implicationTinkerer42%Lead with hands-on. Challenge first, context second.Planner25%Provide structure preview before action.Strategist23%Connect exercises to bigger picture and career value.Social Learner6%Lightweight discussion prompts, not dedicated content.
Key takeaway: Nearly half the audience learns by doing. The playbook must not open with walls of definitions and frameworks. Exercises lead, theory supports.
Notable question-level patterns

Q1 (new AI tool): 37% dive in immediately, 33% take the docs then test for a specific use case — community skews toward experimentation
Q3 (bad output): 62% cross-check manually or rephrase — strong correction instinct, supports the high Ethics score
Q5 (why AI): Split between simplifying complexity (40%) and accelerating ideas (32%) — the playbook should serve both motivations
Agent Collaboration Q1 (brainstorming): Majority chat with GPT alone — multi-agent thinking is genuinely unfamiliar territory
✅ Live quiz on ScoreApp (19 questions, 5 pillars, archetype mapping)
✅ Five fluency pillars defined (Insight Synthesis, Workflow Automation, Cross-Domain Reframing, Agent Collaboration, Ethical Prompting & Judgment)
✅ Three-level progression model (🟢 Basic → 🟡 Intermediate → 🔴 Advanced)
✅ Modular toolkit with concrete examples per pillar × level
✅ Archetype system (source + operating archetypes, shadow archetypes)
✅ Project summary and vision document
✅ CX32 server available for hosting
🔲 Playbook content (drafted but incomplete)
🔲 Infrastructure (Quartz, deployment pipeline)
🔲 Quiz-to-playbook routing
🔲 Interactive exercises and practice challenges


Phase 1: Vault architecture & content structure
Goal: Design the Obsidian vault so the information architecture works before writing content.
1.1 Define vault folder structure
/playbook
├── index.md                          # Landing page / how to use
├── /pillars
│   ├── insight-synthesis.md
│   ├── workflow-automation.md
│   ├── cross-domain-reframing.md
│   ├── agent-collaboration.md
│   └── ethical-prompting.md
├── /levels
│   ├── basic.md                      # Overview of 🟢 level across all pillars
│   ├── intermediate.md               # Overview of 🟡 level
│   └── advanced.md                   # Overview of 🔴 level
├── /exercises
│   ├── /insight-synthesis
│   │   ├── is-basic-01.md
│   │   ├── is-basic-02.md
│   │   ├── is-intermediate-01.md
│   │   └── ...
│   ├── /workflow-automation
│   │   └── ...
│   ├── /cross-domain-reframing
│   │   └── ...
│   ├── /agent-collaboration
│   │   └── ...
│   └── /ethical-prompting
│       └── ...
├── /archetypes
│   ├── connector.md
│   ├── innovator.md
│   ├── systems-thinker.md
│   ├── translator.md
│   ├── integrator.md
│   └── /shadows                      # Shadow archetypes (misuse patterns)
│       ├── the-automator.md
│       ├── the-parrot.md
│       └── ...
├── /pathways                         # Personalized routes based on quiz results
│   ├── high-synthesis-low-agent.md
│   ├── high-automation-low-ethics.md
│   └── ...                           # Common profile combinations
├── /resources
│   ├── tools-and-platforms.md
│   ├── further-reading.md
│   └── glossary.md
└── /templates
    ├── exercise-template.md
    └── pathway-template.md
1.2 Define linking strategy
The power of Obsidian/Quartz is the interconnection. Plan the link graph intentionally:

Each pillar page links to its exercises (by level) and relevant archetypes
Each exercise links back to its pillar, tags its level, and cross-links to related exercises in other pillars where relevant
Each archetype links to the pillars and exercises most aligned with it
Each pathway links to a curated sequence of exercises based on a quiz result profile
Tags to use: #pillar/insight-synthesis, #level/basic, #archetype/connector, #type/exercise, #type/reflection

1.3 Define exercise format (learning-style-aware template)
Quiz data shows 42% Tinkerers, 25% Planners, 23% Strategists, 6% Social Learners. The template is designed so each learning style has a natural entry point without creating variant exercises.
Every exercise should follow this structure:
markdown---
pillar: insight-synthesis
level: basic
archetype-fit: [systems-thinker, translator]
time-estimate: 15min
tags: [exercise, insight-synthesis, basic]
---

# Exercise title

> **One-liner:** What you'll walk away being able to do after this exercise.

---

## 🔧 Jump in (Tinkerers start here)
The challenge itself. Minimal preamble. Clear action:
what to do, with what tool, on what input.
Include a concrete starter prompt or example so nobody
stares at a blank screen.

---

## 📋 Plan first (Planners start here)
A short breakdown of what you're about to do and why,
in 3–5 steps. What you'll need, what to expect,
and what "done" looks like before you start.

---

## 🧭 Why this matters (Strategists start here)
The strategic context: what capability this builds,
where it fits in the bigger picture, and what it
unlocks at the next level. 2–3 sentences max.

---

## Reflection
- What surprised you about the output?
- What did you have to fix or override?
- How would you explain what you just did to a colleague?
- 💬 *Discuss: Try explaining your result to someone
  who hasn't used AI for this task. What questions do
  they ask?* (Social Learners)

## ⬆️ Level up
Pointer to the next exercise or the intermediate version
of this skill.
Key design decisions:

Tinkerers (42%) hit the action immediately — "Jump in" is placed first
Planners (25%) get a structured preview before doing
Strategists (23%) get context and purpose
Social Learners (6%) get a lightweight discussion prompt in Reflection rather than a dedicated section
All sections are on the same page — nobody needs to navigate to a "variant." They just scroll to their natural starting point
The entry point labels (🔧 📋 🧭) double as navigation anchors on the Quartz site

1.4 Deliverables

 Vault initialized with folder structure
 Templates created for exercises, pathways, and pillar pages
 Linking strategy documented
 Tagging taxonomy finalized

Estimated effort: 1–2 focused sessions

Phase 2: Core content creation
Goal: Write the playbook content, prioritizing breadth over depth — one solid exercise per pillar × level before going deep on any single pillar.
2.1 Pillar pages (5 pages)
Each pillar page needs:

Definition and why it matters for generalists
The three levels explained with progression logic (what changes between levels)
Archetype alignment (which archetypes naturally excel here, which struggle)
Links to all exercises for this pillar

2.2 First exercise pass: MVP set (15 exercises)
One exercise per pillar × level = 5 pillars × 3 levels = 15 exercises minimum.
Priority order based on quiz data (n=community sample):
PriorityWhatWhy🥇 1Agent Collaboration — all 3 levelsLowest score at 51%. Biggest gap, most value. This is the pillar where generalists need the most help and where the playbook can have the most visible impact.🥈 2Basic exercises for remaining 4 pillarsEntry points for the 64–67% middle cluster. These must be excellent — they're the first thing most users touch.🥉 3Intermediate exercises for the middle cluster (Insight Synthesis 64%, Workflow Automation 65%, Cross-Domain Reframing 67%)This is where most users will spend their time leveling up. The scores suggest people are past basic but not yet intermediate.4Intermediate + Advanced for Ethical PromptingHighest score at 75% — users feel confident here. Exercises should challenge that confidence with practice, not just awareness. Design these to expose the gap between "I know I should check" and "I actually have a system for checking."5Advanced exercises for remaining pillarsAspirational content. Can be slightly less polished at MVP launch.
Quiz insight to bake into content:

42% Tinkerers → lead every exercise with the hands-on challenge, not definitions
The middle-cluster pillars (IS/WA/CDR) are close enough in score that users won't strongly self-sort — the pathway pages need to help them prioritize
Agent Collaboration at 51% likely has a bimodal distribution (some people at basic, some at intermediate) — the basic exercise needs to be genuinely accessible, not "use CrewAI"

2.3 Archetype pages (5 operating archetypes + shadows)
Each archetype page needs:

Description and behavioral patterns
Strengths and blind spots with AI
Which pillars this archetype tends to be strong/weak in
Shadow version: what overuse or misuse looks like
Recommended pathway

2.4 Pathway pages (top 5 common profiles)
Analyze quiz data to identify the most common pillar score combinations, then write 3–5 pathway pages that each provide:

"Your profile looks like this" description
Recommended exercise sequence (which pillar to start with, what order)
Common pitfalls for this profile
What "leveling up" looks like

2.5 Deliverables

 5 pillar pages written
 15 exercises (5 per level) written and interlinked
 5+ archetype pages with shadow variants
 3–5 pathway pages based on real quiz data patterns
 All internal links working
 Resource/glossary pages populated

Estimated effort: This is the big phase. Realistically 2–3 weeks of part-time work if writing ~2 exercises per session.

Phase 3: Infrastructure setup
Goal: Get the playbook live on CX32 with a deployment pipeline.
Can run in parallel with Phase 2 — content doesn't need to be complete to set up the pipeline.
3.1 CX32 server prep

Remove OpenClaw (when ready)
Fresh install or clean up existing OS
Install Docker + Traefik (mirror CX22 setup for consistency)
Set up DNS for playbook domain (subdomain of generalist.world or dedicated domain)

3.2 Quartz setup

Fork/clone Quartz repo
Configure for the vault structure (navigation, graph view settings, search)
Customize theme/branding to match GW visual identity
Dockerize the build process
Set up container behind Traefik with auto-HTTPS

3.3 Deployment pipeline

Git repo for the vault (private, on GitHub or self-hosted)
Webhook or cron-based rebuild: push to repo → server pulls → Quartz rebuilds → site updates
Optional: n8n workflow to trigger rebuild and notify on completion

3.4 Deliverables

 CX32 running clean with Traefik
 Quartz building and serving the vault
 Domain configured and HTTPS working
 Git-based deployment pipeline functional
 GW branding applied

Estimated effort: 1–2 days for someone comfortable with Docker/Traefik (you).

Phase 4: Quiz-to-playbook linking
Goal: Connect quiz results to playbook so users have a clear next step after taking the quiz.
4.1 Update ScoreApp results page
Since ScoreApp only supports manual export (no API), the integration is straightforward:

Add playbook link to each result category's output page
Write short guidance text per pillar score range (e.g., "Your Agent Collaboration score suggests starting with [[agent-collaboration#basic]]")
Link directly to relevant pathway pages where possible

4.2 Design landing/routing page
A simple landing page on the playbook site that helps users self-navigate based on their quiz results:

"What was your lowest pillar?" → links to that pillar's exercises
"What's your learning style?" → explains the 🔧 📋 🧭 entry points
This replaces programmatic routing with guided self-selection

4.3 Deliverables

 ScoreApp result pages updated with playbook links
 Playbook landing page includes self-routing guidance
 Pathway pages written for the most common score combinations

Estimated effort: Half a day.

Phase 5: Community launch & feedback
Goal: Get the playbook in front of GW community members and collect signal on what works.
5.1 Soft launch

Share with a small group of GW community members (10–20 people who've taken the quiz)
Ask them to follow their pathway and complete at least 2 exercises
Collect feedback on: clarity, difficulty calibration, usefulness, navigation experience

5.2 Iterate based on feedback

Fix navigation issues
Recalibrate exercise difficulty if the basic/intermediate gap is too large
Add or revise exercises based on what people actually struggle with
Update pathway recommendations if quiz-to-pathway mapping feels off

5.3 Full community launch

Announce to full GW community
Update quiz result page/emails to prominently feature playbook
Post about it on LinkedIn (GW account + your account)

5.4 Deliverables

 Soft launch completed with feedback collected
 At least one iteration pass done
 Full launch announced

Estimated effort: 1–2 weeks including feedback collection time.

Phase 6: Product seed (future)
Goal: Package the framework for organizational use.
Not immediate, but architecture decisions now should keep this path open.
What to track from day one

Quiz completion rates and pillar score distributions (aggregate, anonymized)
Which exercises get completed vs. abandoned
Which pathways are most/least visited
Qualitative feedback on confidence and clarity

What the product version looks like

Team Fluency Maps: Organization runs quiz across a team → aggregate heatmap of strengths and gaps → targeted workshop or self-paced program
Custom playbooks: Same five-pillar framework, but exercises tailored to a specific industry or company's tools
Facilitated cohorts: 4-week program where a group works through exercises together with guided reflection (this is where the AI ethics workshop experience is relevant)

What to build toward

A "team admin" view mockup (even just a designed screenshot)
A case study from GW community usage (numbers + quotes)
A one-pager pitch for organizations


Timeline estimate (realistic, part-time)
PhaseDurationDependenciesPhase 1: Vault architecture1 weekNonePhase 2: Core content2–3 weeksPhase 1Phase 3: Infrastructure2–3 daysCan run parallel with Phase 2Phase 4: Quiz integration1–2 daysPhases 2 + 3Phase 5: Community launch1–2 weeksPhase 4Phase 6: Product seedOngoingPhase 5 data
MVP live estimate: 4–6 weeks from starting Phase 1

Open questions — resolved

Domain: No dedicated domain yet. Using test domain for MVP. Final domain TBD (likely subdomain of generalist.world or standalone).
Quiz data access: Manual export only. Playbook will be linked from the ScoreApp results page — no programmatic routing for MVP. Phase 4 simplified accordingly.
Content gating: MVP is fully open. Gating decisions deferred to post-launch based on GW preference.
Learning style differentiation: Still a goal. Solved via the multi-entry-point exercise template (🔧 Jump in / 📋 Plan first / 🧭 Why this matters) rather than variant exercises. See Phase 1.3.
FluencyLab integration: Separate tool, not yet feature-complete. Keep as an optional link from the playbook, not a dependency. Can be folded in later if it matures.
GW collaboration: Not yet discussed. Vera building MVP first with full autonomy, then presenting to GW for feedback.

Technical decisions

Hosting: CX32 server, fresh install, Docker + Traefik
Site generator: Quartz (Obsidian vault → static site)
Deployment: Git-based — edit locally in Obsidian, push, auto-rebuild
Build tool: Claude Code for initial setup and scaffolding
