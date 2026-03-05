---
title: "Shadow: The Automator"
tags: [archetype, shadow]
---

# The Automator

## Pattern Description

The Automator is what happens when the drive to build systems overtakes the judgment to know when automation is appropriate. You automate everything — emails, reports, analysis, communication — without stopping to ask whether the AI output is good enough to send without human review. Your workflows run smoothly, but they may be producing and distributing mediocre or incorrect content at scale. The Automator's defining trait: **speed without verification**.

This shadow typically emerges from the [[archetypes/integrator|Integrator]] or [[archetypes/systems-thinker|Systems Thinker]] archetype when efficiency becomes the only metric and quality checks feel like bottlenecks.

## Warning Signs

- You've built AI workflows that send output directly to clients, stakeholders, or public channels without human review
- You catch AI errors in production (after something was sent or published) rather than in review
- When someone suggests adding a verification step, your first reaction is "that defeats the purpose of automating it"
- You can't remember the last time you read the full output of one of your automated AI processes
- You've automated tasks that involve judgment calls (recommendations, prioritization, tone-sensitive communication) the same way you automate formatting tasks
- Other people have flagged quality issues in content you produced with AI but didn't notice yourself

## How to Course-Correct

1. **Audit your pipelines.** List every AI workflow you run. For each, ask: "If this produced a confidently wrong output, would I catch it before someone else sees it?" Mark the ones where the answer is no.
2. **Add a read-before-send rule.** For any AI output that goes to people outside your immediate team, commit to reading the full output at least once before it ships. Not scanning — reading.
3. **Build quality gates into your workflows.** Start with [[exercises/ethical-prompting/ep-intermediate-01|EP-Intermediate-01]] to build a verification checklist, then embed it into your automation as a mandatory step.
4. **Classify tasks by risk.** Use the framework from [[exercises/ethical-prompting/ep-advanced-01|EP-Advanced-01]] to separate low-risk automation (formatting, scheduling) from high-risk automation (recommendations, analysis, communication) and apply different review standards.
5. **Slow one thing down.** Pick your most critical automated process and manually review its output for one full week. Document what you find.
