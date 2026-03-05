# Content Creation Plan — AI Fluency Playbook

## Phase 2 Execution Plan

### Guiding Principles
- **Tinkerers first (42%):** Every exercise leads with the hands-on challenge, not theory
- **Accessible language:** No jargon without explanation; exercises use tools people already have (ChatGPT, Claude, etc.)
- **Agent Collaboration is flagship:** Biggest gap (51%), most value — gets the most care
- **Quality over quantity:** AC-Basic-01 sets the bar for all 14 remaining exercises

---

## Step 1: Write AC-Basic-01 — "Your First AI Team Meeting"

**File:** `playbook/exercises/agent-collaboration/ac-basic-01.md`

**Exercise concept: Role-Based Prompting**
Have the user prompt a single AI to adopt two different expert roles for the same problem (e.g., "act as a marketer, then as a skeptical customer"). Introduces multi-perspective thinking without any extra tools. Low barrier, high insight.

**Why this topic:**
- Quiz data shows most users "chat with GPT alone" — this is literally the next step
- No tools/frameworks required — works in any AI chat interface
- Introduces the *mental model* of agents (specialized roles) before introducing actual agent tools
- Directly addresses the 51% score by making multi-perspective AI use tangible

**Content outline for each section:**

### Frontmatter
- pillar: agent-collaboration
- level: basic
- archetype-fit: [integrator, innovator]
- time-estimate: 15min
- tags: [exercise, pillar/agent-collaboration, level/basic, type/exercise]

### Title: "Your First AI Team Meeting"
**One-liner:** Run a multi-perspective AI session where one prompt gets you two expert viewpoints on the same problem.

### Jump in (Tinkerers)
- Pick a real decision or problem you're currently facing (e.g., "Should I launch this feature now or wait?")
- Provide a concrete starter prompt template:
  - "I want you to act as two different experts giving me advice on [problem]. First, respond as a [Role A — e.g., growth-focused product manager]. Then, respond as a [Role B — e.g., risk-aware QA lead]. Keep each perspective clearly labeled."
- Include a worked example with sample output so users can see what "good" looks like
- Follow-up prompt: "Now, as a neutral facilitator, summarize where these two perspectives agree and disagree."

### Plan first (Planners)
1. Choose a real problem or decision you're working on
2. Pick two expert roles that would naturally have different views on it
3. Write the dual-role prompt (template provided)
4. Run it and read both perspectives
5. Run the facilitator follow-up to get a synthesis
- "Done" looks like: You have a summary of two contrasting expert views and their points of agreement/disagreement

### Why this matters (Strategists)
- This is the foundational skill behind all multi-agent workflows: defining specialized roles and comparing their outputs
- At the intermediate level, you'll do this across separate AI sessions with different contexts — this exercise builds the mental model first
- In professional settings, this technique replaces the "ask AI once and accept the answer" pattern that limits output quality

### Reflection
- Keep the standard reflection questions (already in template)
- The Social Learner prompt stays as-is

### Level up
- Link to AC-Intermediate-01

---

## Step 2: Write AC-Intermediate-01 — "The Handoff Protocol"

**File:** `playbook/exercises/agent-collaboration/ac-intermediate-01.md`

**Exercise concept:** Take the role-based approach from Basic and split it across two separate AI conversations. User gives each "agent" a different system prompt/context, runs them independently, then manually synthesizes the outputs. Introduces the concept of agent handoffs and context boundaries.

**Content outline (abbreviated):**
- Jump in: Open two AI chats. Give Chat A the role of [specialist 1] with specific context. Give Chat B the role of [specialist 2] with different context. Ask both the same question. Compare and synthesize.
- Plan first: Step-by-step for setting up parallel agent sessions
- Why this matters: Real agent systems work exactly this way — specialized contexts, independent execution, structured handoffs
- Level up: Link to AC-Advanced-01

---

## Step 3: Write AC-Advanced-01 — "Design Your Agent Workflow"

**File:** `playbook/exercises/agent-collaboration/ac-advanced-01.md`

**Exercise concept:** Design a complete multi-agent workflow on paper (or in a doc) for a real project. Define 3-4 agent roles, their inputs/outputs, handoff triggers, and a feedback loop. Optionally implement it using a framework or just chained prompts.

**Content outline (abbreviated):**
- Jump in: Pick a project. Map out 3-4 agent roles. Define what each receives and produces. Draw the flow. Optionally implement with chained prompts or an agent framework.
- Plan first: Workflow design checklist
- Why this matters: This is what agent collaboration looks like at professional scale — architecture before implementation
- Level up: "You've reached the advanced level" — link to resources and community

---

## Step 4: Basic exercises for remaining 4 pillars

After Agent Collaboration is complete, write one basic exercise per remaining pillar:

| Exercise | Pillar | Topic Direction |
|----------|--------|----------------|
| IS-Basic-01 | Insight Synthesis | Extract a structured insight from a messy AI brainstorm output |
| WA-Basic-01 | Workflow Automation | Turn a manual repetitive task into a reusable AI prompt template |
| CDR-Basic-01 | Cross-Domain Reframing | Take an AI technique from one field and apply it to a different domain |
| EP-Basic-01 | Ethical Prompting | Fact-check an AI output using a structured verification process |

---

## Step 5: Intermediate exercises for middle cluster

| Exercise | Pillar | Topic Direction |
|----------|--------|----------------|
| IS-Intermediate-01 | Insight Synthesis | Synthesize outputs from multiple AI queries into a coherent analysis |
| WA-Intermediate-01 | Workflow Automation | Build a multi-step AI workflow with conditional logic |
| CDR-Intermediate-01 | Cross-Domain Reframing | Adapt a prompt pattern from an unfamiliar domain to your own work |

---

## Step 6: Ethical Prompting intermediate + advanced

| Exercise | Topic Direction |
|----------|----------------|
| EP-Intermediate-01 | Build a personal AI verification checklist and test it on real outputs |
| EP-Advanced-01 | Design an AI governance framework for a team or project |

---

## Step 7: Advanced exercises for remaining pillars

| Exercise | Topic Direction |
|----------|----------------|
| IS-Advanced-01 | Build a research synthesis pipeline using AI |
| WA-Advanced-01 | Design and document a complete AI-automated workflow for a business process |
| CDR-Advanced-01 | Create a cross-domain prompt library with documented transfer patterns |

---

## Step 8: Supporting content

After exercises are complete:

1. **Archetype pages (5):** Fill in Description, Strengths, Blind Spots, Recommended Pathway
2. **Shadow archetypes (2+):** Fill in Pattern Description, Warning Signs, Course-Correct
3. **Pathway pages:** Complete Common Pitfalls and What Leveling Up Looks Like sections; add 1-3 more pathway pages for common quiz profiles
4. **Resource pages:** Populate glossary definitions, tools list, further reading links

---

## Validation

After each batch of exercises, run:
```bash
npm test
```
This executes `validate-content.mjs` and `validate-links.mjs` to verify:
- Frontmatter completeness and validity
- Required template sections present
- Pillar coverage (all 5 pillars x 3 levels)
- Placeholder content detection (warnings for empty exercises)
- Wiki-link resolution (all internal links point to real files)

Exercises with real content should no longer trigger the "placeholder content" warning.
