---
title: Tools and Platforms
description: "Recommended AI tools and platforms for generalists, with honest assessments of strengths and limitations."
tags: [resource]
---

All exercises in this playbook work with any AI chat tool. You don't need a specific platform — use whatever you're comfortable with. This page lists options by category for reference.

## AI Chat Tools

These are the tools you'll use for most exercises. Any one of them is sufficient.

| Tool | Best For | Notes |
|------|---------|-------|
| **ChatGPT** (OpenAI) | General-purpose exercises, wide model selection | Free tier available. GPT-4o recommended for more complex exercises. |
| **Claude** (Anthropic) | Long-form analysis, nuanced reasoning | Strong at synthesis and following complex instructions. |
| **Gemini** (Google) | Integration with Google Workspace, multimodal tasks | Good for exercises involving documents or data in Google ecosystem. |
| **Copilot** (Microsoft) | Integration with Microsoft 365 | Useful if your workflow lives in Outlook, Word, and Teams. |

## Agent Frameworks

Referenced in the advanced [Agent Collaboration](/pillars/agent-collaboration/) exercises. **Not required for any exercise** — the playbook teaches agent thinking through manual prompting first.

| Framework | What It Does | When to Explore |
|-----------|-------------|----------------|
| **CrewAI** | Python framework for orchestrating multiple AI agents with defined roles | After completing [AC-Advanced-01](/exercises/agent-collaboration/ac-advanced-01/) — when you want to automate the handoffs you did manually |
| **AutoGen** (Microsoft) | Framework for building multi-agent conversations | When you want agents that can talk to each other without manual copy-pasting |
| **LangGraph** (LangChain) | Framework for building stateful agent workflows with graph-based logic | When you need complex conditional logic in your agent pipelines |

## Automation Tools

Relevant to the [Workflow Automation](/pillars/workflow-automation/) pillar, especially at the advanced level.

| Tool | What It Does | When to Explore |
|------|-------------|----------------|
| **n8n** | Open-source workflow automation with AI integration nodes | After completing [WA-Advanced-01](/exercises/workflow-automation/wa-advanced-01/) — when you want to automate your prompt chains |
| **Make** (formerly Integromat) | Visual workflow builder with AI steps | Good for non-technical users who want to automate without code |
| **Zapier** | Simple automation connectors between apps, with AI actions | Best for straightforward automations: trigger → AI step → action |

## Productivity Integrations

Tools that embed AI into existing workflows.

| Tool | What It Does |
|------|-------------|
| **Notion AI** | AI writing and analysis built into Notion workspace |
| **Obsidian + Smart Connections** | AI-powered linking and search within an Obsidian vault |
| **Raycast AI** | Quick AI access from any application on macOS |
| **Google Workspace AI** | AI features embedded in Docs, Sheets, Gmail |
