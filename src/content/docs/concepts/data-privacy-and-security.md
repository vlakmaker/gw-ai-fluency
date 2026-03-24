---
title: "Data Privacy & Security"
description: "What happens to the data you share with AI tools — and how to make smart decisions about what to put in and what to keep out."
type: concept
related-pillars: [ethical-prompting, workflow-automation]
last-updated: 2026-03
tags: [concept, privacy, security, fundamentals]
---

> **Plain English:** When you paste text into an AI tool, it doesn't just disappear after you get your response. Where that data goes, who can see it, and whether it gets used to train future models depends entirely on which tool you're using and how it's configured. Getting this wrong can have real consequences.

## What happens to your data

When you send a message to an AI tool, several things may happen to it:

1. **It's processed to generate your response.** This happens immediately and is the whole point. Your input goes to the model, the model generates output, and you see the result.

2. **It may be stored in conversation history.** Most tools save your conversations so you can return to them later. This data sits on the provider's servers.

3. **It may be used to improve the model.** This is the one that matters most. Some providers use your conversations as training data for future model versions — meaning your input could influence what the model says to other people in the future. Not word-for-word, but as patterns.

4. **It may be reviewed by humans.** Some providers have human reviewers who read conversations for safety, quality, or training purposes. This is more common than people realise.

The specifics vary by provider and plan:

| Scenario | Free/consumer tier | Paid/business tier |
|----------|-------------------|-------------------|
| Used for training | Often yes | Usually no |
| Human review possible | Yes | Sometimes |
| Data retention | Indefinite | Configurable |
| Data residency controls | No | Often yes |

## What you should never put into AI

Regardless of which tool or plan you're using, certain data should stay out of AI chat windows:

**Passwords, API keys, and credentials.** This seems obvious, but people do it — "Here's my database connection string, write me a query." Once it's in the chat, it's on someone else's server.

**Personal data about identifiable individuals.** Names paired with health information, financial details, performance reviews, or personal circumstances. Even if the tool doesn't train on it, you've sent someone's personal data to a third-party server — which may violate privacy regulations like GDPR or your organisation's data policies.

**Proprietary business information.** Trade secrets, unreleased product details, confidential strategy documents, financial data before public disclosure. If your company would be harmed by this information becoming public, don't paste it into a consumer AI tool.

**Legal or medical content where accuracy is critical.** Not because of privacy alone, but because AI [gets things wrong](/concepts/why-ai-gets-things-wrong/) and these domains have real consequences. If you do use AI for these topics, it must be a starting point reviewed by a qualified professional — never a final answer.

## The grey areas

Most decisions aren't clear-cut. These are the situations where judgment matters:

**Paraphrased or anonymised data.** Removing names and identifiers before pasting data into AI is better than not doing so — but re-identification is sometimes possible from context, especially with small datasets or unusual details.

**Internal documents with no sensitive data.** A meeting agenda or a project brief with no confidential information may be fine to process with AI. But ask yourself: would I be comfortable if this appeared in a training dataset? If the answer is no, don't send it.

**Using AI tools built into your existing software.** When AI is built into tools you already use (like Copilot in Microsoft 365 or AI features in Google Workspace), the data handling is usually governed by your existing enterprise agreement. This is generally safer than copying data into a separate AI chat tool — but read the terms.

## How to think about this practically

**Know your tool's data policy.** Before using any AI tool for work, spend five minutes finding out: Does it train on your data? Can you opt out? Where is the data stored? Most providers publish this clearly. If you can't find the answer, assume the worst.

**Distinguish between personal and enterprise tiers.** The free version of ChatGPT has different data handling than ChatGPT Enterprise. Claude.ai's free tier differs from Claude's API. The enterprise versions typically offer no-training guarantees, data residency controls, and audit logs. If your organisation uses AI, push for enterprise agreements.

**Use the "newspaper test."** Before pasting something into AI, ask: if this conversation appeared on the front page of a newspaper, would it be a problem? If yes, don't send it.

**Follow your organisation's AI policy.** If your workplace has an AI usage policy, follow it — even if it feels overly cautious. If it doesn't have one, that's worth raising. The [Workflow Automation](/pillars/workflow-automation/) pillar includes exercises that help you think about where AI fits safely into your work processes.

## The landscape is evolving

Data privacy in AI is a moving target. Regulations are catching up — the EU AI Act, evolving GDPR guidance, and sector-specific rules in healthcare, finance, and education are all shaping what's permissible. What's acceptable today may not be tomorrow.

The safest stance for a generalist: be more cautious than you think you need to be. The cost of being too careful with data is spending a few extra minutes anonymising or paraphrasing. The cost of being too careless can be a data breach, a regulatory violation, or a loss of trust that takes years to rebuild.

## Where to go next

- [Ethical Prompting & Judgment](/pillars/ethical-prompting/) — responsible AI use in practice
- [The Fact-Check Habit](/exercises/ethical-prompting/ep-basic-01/) — building verification into your AI workflow
- [Why AI Gets Things Wrong](/concepts/why-ai-gets-things-wrong/) — understanding the accuracy risks alongside privacy risks
