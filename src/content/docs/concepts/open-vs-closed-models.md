---
title: "Open vs. Closed Models"
description: "The difference between open-source and closed-source AI models — and why it matters for privacy, cost, flexibility, and control."
type: concept
related-pillars: [workflow-automation, ethical-prompting, agent-collaboration]
last-updated: 2026-03
tags: [concept, open-source, models, fundamentals]
---

> **Plain English:** Some AI models are controlled by companies who run them for you (closed). Others are freely available for anyone to download and run themselves (open). This isn't just a technical distinction — it affects your privacy, your costs, your flexibility, and how much control you have over the AI you use.

## The core distinction

**Closed models** are owned and operated by a company. You access them through the company's app or API. You don't see the model's internals, you can't modify how it works, and your data passes through their servers.

Examples: GPT-5 (OpenAI), Claude (Anthropic), Gemini (Google).

**Open models** are publicly released — anyone can download the model weights, run them on their own hardware, modify them, and build on top of them. You don't need to send data anywhere.

Examples: Llama (Meta), Mistral, Qwen, Gemma (Google), DeepSeek.

The term "open source" is used loosely in AI. Some models are truly open (weights, training code, and data all public). Others release weights but not training data. The practical distinction that matters most: can you run this model yourself, without sending data to a third party?

## Why this matters for generalists

You don't need to run your own models to benefit from understanding this distinction. It shapes the tools available to you and the decisions your organisation makes about AI.

### Privacy and data control

This is the biggest practical difference. When you use a closed model, your data goes to the provider's servers. When you run an open model locally, your data never leaves your machine.

For sensitive work — legal documents, medical records, proprietary business data — this matters enormously. Running a local model means you can use AI on confidential material without any of the [data privacy concerns](/concepts/data-privacy-and-security/) that come with cloud-based tools. No training on your data, no human review, no data residency questions.

### Cost

Closed models charge per use — either through subscription fees or per-token API pricing. For occasional use, this is fine. For heavy use or large-scale processing, costs add up.

Open models are free to download. The cost is in the hardware to run them. For individuals, a modern laptop can run smaller open models. For organisations, running larger models requires dedicated servers or cloud GPU instances — which has its own costs, but can be cheaper at scale than API fees.

### Quality trade-offs

Closed models from major providers are generally the most capable — they're trained with the largest budgets, the most data, and the most human feedback. For complex reasoning, nuanced writing, and broad general knowledge, GPT-5, Claude, and Gemini remain ahead.

But the gap has narrowed significantly. Models like Llama 3, Mistral Large, and DeepSeek perform well for many practical tasks. For straightforward writing, summarisation, data extraction, and code generation, open models are often good enough — and sometimes indistinguishable from closed alternatives.

The honest assessment: if you need the best possible output quality and don't have privacy constraints, closed models are still the safer choice. If privacy, cost, or control matter more than marginal quality differences, open models are viable for most generalist tasks.

### Flexibility and customisation

Open models can be fine-tuned on your own data, modified to behave differently, or embedded into custom applications. This matters less for individual generalists and more for organisations building AI into their products and workflows.

But even as a generalist, you benefit from this flexibility indirectly. Open models power many of the specialised tools you encounter — local AI features in apps, privacy-focused AI products, and offline-capable tools all tend to run open models under the hood.

## How to run open models

You don't need to be a developer to run open models locally. The ecosystem has matured:

**Ollama** is the simplest option. It's a command-line tool that downloads and runs open models on your Mac, Windows, or Linux machine with a single command. Pair it with a chat interface like Open WebUI and you have a local ChatGPT-like experience.

**LM Studio** provides a graphical interface for downloading and running models. No command line needed — browse available models, click to download, and start chatting.

**Jan** is another desktop app that runs models locally with a clean interface and conversation management.

For all of these, the limiting factor is your hardware. Smaller models (7-8 billion parameters) run comfortably on most modern laptops. Larger models (70+ billion parameters) need significant RAM or a dedicated GPU. Start small — a 7B model running locally is more useful than a 70B model you can't run.

## The middle ground

The distinction between open and closed isn't always binary. Several approaches sit in between:

**Self-hosted closed models.** Some providers offer their models for deployment on your own infrastructure (Azure OpenAI, Amazon Bedrock). You get a closed model's quality with more data control — your data stays within your cloud environment.

**Open models via cloud APIs.** Services like Together AI, Groq, and Fireworks let you use open models through an API without running hardware yourself. Cheaper than closed model APIs, but your data still passes through a third party.

**Local-first tools with cloud fallback.** Some applications run a small local model for quick tasks and route complex queries to a cloud model. This balances privacy with capability.

## Making the choice

For most generalists, the practical decision comes down to:

| Situation | Recommendation |
|-----------|---------------|
| General daily use, no sensitive data | Closed models (best quality, easiest) |
| Working with confidential or personal data | Open models locally, or enterprise-tier closed models |
| Cost-sensitive, high-volume use | Open models or open-model APIs |
| Offline or air-gapped environment | Open models (only option) |
| Building AI into a product or workflow | Open models (most flexibility) |

You don't need to choose one approach exclusively. Many people use closed models for general work and switch to local open models when handling sensitive material. The key is knowing the option exists and when to reach for it.

## Where to go next

- [Data Privacy & Security](/concepts/data-privacy-and-security/) — understanding the privacy implications of different approaches
- [Choosing the Right AI Tool](/concepts/choosing-the-right-ai-tool/) — the broader framework for tool selection
- [Tools & Platforms](/resources/tools-and-platforms/) — a curated list including open model tools
