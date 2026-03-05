---
title: "The Prompt Chain"
pillar: workflow-automation
level: intermediate
archetype-fit: [tinkerer, planner]
time-estimate: 25min
tags: [exercise, pillar/workflow-automation, level/intermediate, type/exercise]
---

# The Prompt Chain

> **One-liner:** Build a multi-step AI workflow where each step's output feeds into the next — turning a complex task into a repeatable pipeline.

---

## 🔧 Jump in (Tinkerers start here)

Pick a task that has at least 3 distinct phases. Examples: writing a blog post (research, outline, draft, edit), analyzing a dataset (clean, analyze, summarize, recommend), or preparing a presentation (topic research, slide structure, talking points, Q&A prep).

**Build a 3-step chain.** Each step is a separate prompt. The output of each step becomes the input of the next.

**Step 1 — Research/Gather:**
> You are a research assistant. Your job is to gather the raw material for **[your task]**.
>
> Topic/context: **[describe what you're working on]**
>
> Produce a structured collection of: key facts, relevant examples, important considerations, and any constraints. Organize by theme. Do not draft anything — just collect the ingredients.

Copy the output. Start a new prompt (or clearly reset context).

**Step 2 — Structure/Draft:**
> You are a content architect. Your job is to turn raw research into a structured draft.
>
> Here is the research material: **[paste Step 1 output]**
>
> The final deliverable is: **[describe what you need — a blog post, a report, a strategy doc, etc.]**
>
> Create a structured draft. Include clear sections, key arguments in order, and placeholders for any examples or data points from the research. Focus on logical flow and completeness.

Copy the output. Start a new prompt.

**Step 3 — Polish/Critique:**
> You are a senior editor. Your job is to make this draft publication-ready.
>
> Here is the draft: **[paste Step 2 output]**
>
> The audience is: **[describe who will read this]**
>
> Do three things:
> 1. Improve clarity — simplify any convoluted sentences, cut unnecessary words
> 2. Strengthen weak points — flag any claim that needs better support and add it
> 3. Check consistency — ensure tone, terminology, and formatting are uniform throughout
>
> Produce the final version with an editor's note listing your key changes.

**Now document the chain.** Write down the 3 prompts as a reusable template (with [PLACEHOLDERS] for the parts that change). You've just built a prompt pipeline.

---

## 📋 Plan first (Planners start here)

Here's what you're about to do:

1. **Choose a multi-phase task** — Something that naturally has distinct stages (research → create → refine). The more phases, the more the chain helps.
2. **Design the chain** — Write 3 prompts, each with a clear role, input expectation, and output format. The key constraint: each step's output must contain everything the next step needs.
3. **Run the chain** — Execute each step sequentially, passing the output forward. Use fresh contexts between steps to prevent bleed-through.
4. **Evaluate information flow** — Notice where context was lost between steps. What did Step 3 need that Step 2 didn't preserve?
5. **Document as a template** — Save the chain with placeholders so you can reuse it for the same type of task.

**"Done" looks like:** A completed deliverable that went through a 3-step pipeline, plus a documented prompt chain template with placeholders for reuse.

---

## 🧭 Why this matters (Strategists start here)

In [WA-Basic-01](/exercises/workflow-automation/wa-basic-01/), you built a single reusable prompt. Here, you're learning to **chain prompts into a workflow** — the building block of all production AI automation. Every AI-powered pipeline (content generation, data analysis, document processing) is fundamentally a prompt chain with handoffs. The skill you're building — decomposing a task into stages, defining clear inputs and outputs, managing context between steps — is the same skill used in tools like n8n, Zapier AI, or custom LLM pipelines. Manual chaining teaches you what to automate and where the bottlenecks live.

---

## Reflection

- Where did context get lost between steps? What information did a later step need that an earlier step didn't pass along?
- Did the 3-step chain produce better output than a single "do everything" prompt? Where specifically?
- What surprised you about the output?
- What did you have to fix or override?
- How would you explain what you just did to a colleague?
- 💬 *Discuss: Try explaining your result to someone who hasn't used AI for this task. What questions do they ask?* (Social Learners)

## ⬆️ Level up

Ready for more? Try [WA-Advanced-01](/exercises/workflow-automation/wa-advanced-01/) — where you'll design and document a complete AI-automated workflow for a business process.

Back to [Workflow Automation](/pillars/workflow-automation/) | [🟡 Intermediate Level](/levels/intermediate/)
