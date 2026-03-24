---
title: "RAG & Knowledge Grounding"
description: "How AI tools use your documents and live data to give better answers — and why 'grounded' responses are different from regular AI output."
type: concept
related-pillars: [insight-synthesis, workflow-automation, agent-collaboration]
last-updated: 2026-03
tags: [concept, rag, grounding, fundamentals]
---

> **Plain English:** By default, AI can only work with what it learned during training. RAG (Retrieval-Augmented Generation) is a technique that lets AI look up information from your documents or the web before answering — like giving it a reference library instead of relying on memory alone.

## The problem RAG solves

As described in [How AI Actually Works](/concepts/how-ai-actually-works/), AI generates responses by predicting likely next words based on training data. This means:

- It doesn't know about events after its training cutoff.
- It doesn't have access to your company's internal documents.
- It can't check whether what it's saying is currently accurate.
- It fills gaps with plausible-sounding text — which is where [hallucinations](/concepts/why-ai-gets-things-wrong/) come from.

RAG addresses this by adding a retrieval step before generation. Instead of just generating an answer from its training, the AI first searches a collection of documents, finds relevant passages, and then generates a response based on what it found.

The difference is significant:

| Without RAG | With RAG |
|-------------|----------|
| "Based on what I learned during training..." | "Based on these specific documents..." |
| No source attribution | Can point to specific passages |
| Hallucination risk for specifics | Grounded in actual content |
| Knowledge frozen at training cutoff | Can access current information |

## How it works (simply)

RAG has three steps:

1. **Your question comes in.** You ask something — "What's our refund policy?" or "Summarise the latest quarterly report."

2. **The system searches for relevant content.** Before the AI generates anything, a search step finds the most relevant chunks of text from a document collection — your company wiki, a set of PDFs, a knowledge base, or the live web.

3. **The AI generates a response using what was found.** The retrieved text is included alongside your question when it goes to the model. The AI then generates a response informed by this specific, relevant content rather than relying on general training alone.

This is what's happening behind the scenes when you use tools like:

- **Perplexity** — searches the web, then generates a response with citations.
- **ChatGPT with browsing** — retrieves web content before answering.
- **Claude with uploaded documents** — uses your files as the knowledge source.
- **Enterprise search tools** — NotebookLM, Microsoft Copilot with your SharePoint data, or custom-built internal tools that search company documents.

## Why grounded responses are better (but not perfect)

RAG significantly reduces hallucinations for factual questions because the AI is working from source material rather than memory. But it doesn't eliminate problems entirely:

**Retrieval can miss relevant content.** The search step might not find the right document, especially if your question uses different terminology than the source material. If the retrieval fails, the AI falls back to its training — and you might not realise it's no longer grounded.

**The AI can still misinterpret what it finds.** Even with the right document in front of it, the model may draw incorrect conclusions, miss nuances, or combine information from different passages in misleading ways.

**Source quality matters.** RAG is only as good as the documents it searches. If your knowledge base contains outdated policies, incorrect information, or poorly written content, the AI will confidently generate responses based on bad sources.

**Citation doesn't mean accuracy.** When a tool like Perplexity cites a source, it means the AI found that source — not that it correctly understood or accurately summarised what the source says. Always check the actual source, not just the citation.

## Where you'll encounter RAG

As a generalist, you probably already use RAG-powered tools without knowing it:

**Web search integration.** When ChatGPT browses the web or Perplexity searches before answering, that's RAG. The "search" icon or "sources" section in these tools tells you retrieval is happening.

**Document upload features.** When you upload a PDF to Claude or ChatGPT and ask questions about it, the tool is using the document as a retrieval source. This is a simple form of RAG.

**Enterprise AI tools.** If your organisation uses AI tools connected to internal knowledge bases — Microsoft Copilot searching SharePoint, Glean searching your company's documents, or similar products — those are RAG systems. They search your organisation's content before generating answers.

**Custom AI assistants.** Tools like Claude Projects, Custom GPTs, and NotebookLM let you create AI assistants with specific document collections as their knowledge base. This is RAG that you configure yourself.

## How to work with RAG effectively

**Ask about sources.** When using a RAG-powered tool, ask "What sources did you use?" or look for citation indicators. This tells you whether the response is grounded or whether the AI fell back to general knowledge.

**Be specific in your questions.** Vague questions lead to vague retrieval. "Tell me about our leave policy" might retrieve the right document. "What's the maximum number of annual leave days for employees in their first year?" will retrieve the specific passage you need.

**Check what the tool has access to.** RAG only works with the documents in its collection. If you're asking about something that isn't in the knowledge base, the tool can't retrieve relevant content — but it might still generate an answer without telling you it wasn't grounded.

**Combine RAG with verification.** Grounded responses are more reliable than ungrounded ones, but they still need checking for important decisions. Use RAG as a faster way to find and synthesise information — then verify the specific claims that matter. This connects directly to the [Insight Synthesis](/pillars/insight-synthesis/) pillar.

## Where to go next

- [How AI Actually Works](/concepts/how-ai-actually-works/) — understanding the baseline before grounding
- [Why AI Gets Things Wrong](/concepts/why-ai-gets-things-wrong/) — the problem RAG helps solve
- [Agents vs. Assistants](/concepts/agents-vs-assistants/) — how RAG fits into more autonomous AI workflows
