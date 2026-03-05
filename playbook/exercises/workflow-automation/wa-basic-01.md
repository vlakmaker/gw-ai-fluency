---
title: "The Reusable Prompt"
pillar: workflow-automation
level: basic
archetype-fit: [integrator, systems-thinker]
time-estimate: 15min
tags: [exercise, pillar/workflow-automation, level/basic, type/exercise]
---

# The Reusable Prompt

> **One-liner:** Turn a task you do repeatedly into a reusable AI prompt template that works every time — your first step toward automation.

---

## 🔧 Jump in (Tinkerers start here)

Think of something you do at least once a week that involves writing, analyzing, or summarizing. Examples: writing a status update, summarizing meeting notes, drafting an email to a client, reviewing a document.

**Step 1 — Do it once with AI.** Open any AI chat and do the task the way you normally would — just ask the AI to help. Don't overthink the prompt. Just get the job done.

**Step 2 — Reverse-engineer your prompt.** Now send this:

> Look at the prompt I just gave you and the output you produced. Help me turn this into a **reusable template** that I can use every time I need to do this task. The template should have:
> 1. **Clear placeholders** — marked with [BRACKETS] for the parts that change each time
> 2. **Fixed instructions** — the parts that stay the same every time
> 3. **Output format specification** — exactly what the result should look like (length, structure, tone)
>
> Write the template so someone else on my team could use it without any additional explanation.

**Step 3 — Test it.** Copy the template. Start a new chat. Paste the template and fill in the placeholders with a different example of the same task. Does the output match the quality of your original? If not, adjust the template.

**Here's a concrete example:**

*Original task:* "Summarize this meeting for my team"

*Reusable template:*
> Summarize the following meeting notes for a team update.
>
> **Meeting notes:** [PASTE NOTES HERE]
>
> **Output requirements:**
> - Start with a 1-sentence summary of the main decision or outcome
> - List action items with owner names in bold
> - Flag any unresolved questions
> - Keep the total summary under 150 words
> - Tone: professional but informal

---

## 📋 Plan first (Planners start here)

Here's what you're about to do:

1. **Identify a repeatable task** — Pick something you do weekly that involves text: writing, summarizing, analyzing, or formatting. The more repetitive, the better.
2. **Do it once with AI** — Complete the task normally. Don't try to be clever — just get a result you're happy with.
3. **Extract the template** — Ask the AI to help you identify what's fixed (instructions, format, tone) vs. what changes (the input data). Build a reusable template with clear placeholders.
4. **Test with a new example** — Use the template on a fresh instance of the same task. Compare quality to the original.
5. **Refine if needed** — If the template didn't produce equally good output, identify what was missing and add it.

**"Done" looks like:** You have a saved prompt template with clear placeholders that consistently produces good output for your repeatable task.

---

## 🧭 Why this matters (Strategists start here)

Most people use AI in one-off conversations that disappear. This exercise introduces the shift from **ad-hoc prompting to systematic workflows** — the foundation of all AI automation. A reusable template is the simplest form of an AI workflow: defined input, consistent process, predictable output. At the intermediate level, you'll chain multiple templates together into multi-step workflows. Every automated AI process in production started as someone's reusable prompt.

---

## Reflection

- What surprised you about the output?
- What did you have to add to the template that wasn't obvious from the original prompt?
- Did the template produce consistent quality, or did you need to tweak it? What was missing?
- How would you explain what you just did to a colleague?
- 💬 *Discuss: Try explaining your result to someone who hasn't used AI for this task. What questions do they ask?* (Social Learners)

## ⬆️ Level up

Ready for more? Try [[exercises/workflow-automation/wa-intermediate-01|WA-Intermediate-01]] — where you'll chain multiple prompt templates into a multi-step workflow.

Back to [[pillars/workflow-automation|Workflow Automation]] | [[levels/basic|🟢 Basic Level]]
