---
title: "Multimodal AI"
description: "AI isn't just text anymore. Understanding how AI works with images, audio, documents, and code changes what's possible in your daily work."
type: concept
related-pillars: [workflow-automation, cross-domain-reframing, insight-synthesis]
last-updated: 2026-03
tags: [concept, multimodal, fundamentals]
---

> **Plain English:** Modern AI can read images, generate pictures, transcribe audio, understand PDFs, write and run code, and more — often in the same conversation. "Multimodal" just means it works with more than text. This opens up capabilities that most generalists haven't explored yet.

## What "multimodal" means

Early AI chat tools were text-in, text-out. You typed a question, you got a written answer. That's no longer the full picture.

Current models can handle multiple types of input and output — called modalities. The main ones you'll encounter:

| Modality | Input (AI can read/understand) | Output (AI can generate) |
|----------|-------------------------------|--------------------------|
| Text | Yes | Yes |
| Images | Yes (describe, analyse, extract text) | Yes (generate, edit) |
| Documents | Yes (PDFs, spreadsheets, slides) | Limited (text-based summaries) |
| Audio | Yes (transcription, analysis) | Yes (text-to-speech) |
| Video | Emerging (frame analysis) | Emerging |
| Code | Yes (read, debug, explain) | Yes (write, run, test) |

Not every model supports every modality. But the major tools — Claude, GPT-5, Gemini — can all handle text, images, and documents in the same conversation. This is the default now, not a special feature.

## Why this matters for generalists

Multimodal capabilities change what AI is useful for in practical ways:

**Document understanding.** You can upload a contract, a research paper, a financial report, or a slide deck and ask AI to summarise it, extract specific information, or compare it with another document. This is fundamentally different from pasting text — the AI can read tables, charts, headers, and layout.

**Image analysis.** Take a photo of a whiteboard from a meeting and ask AI to transcribe and organise the notes. Screenshot an error message and ask for help. Upload a chart and ask for an interpretation. Upload a design mockup and ask for feedback.

**Working with data.** Upload a spreadsheet or CSV and ask AI to analyse trends, create visualisations, find anomalies, or explain what the data shows. Models with code execution can actually run analysis — not just describe what they'd do.

**Audio and transcription.** Record a meeting, upload the audio, and get a transcript with speaker labels, a summary, and action items. This workflow used to require multiple specialised tools.

**Code as a tool, not just output.** Modern AI can write code, run it, see the results, and iterate — all within a conversation. You don't need to be a programmer to benefit. Ask AI to process a dataset, generate a chart, convert a file format, or automate a calculation, and it can write and execute the code to do it.

## The same rules still apply

Multimodal AI is impressive, but every limitation described in this playbook still applies:

**Hallucinations happen with images too.** AI can misread text in images, misinterpret charts, or describe things in photos that aren't there. The same [verification habits](/exercises/ethical-prompting/ep-basic-01/) you build for text apply to every modality.

**Privacy concerns are amplified.** When you upload a document or image, you're potentially sharing more data than you realise. A photo might contain metadata. A document might contain tracked changes or hidden content. The same [data privacy](/concepts/data-privacy-and-security/) principles apply — and arguably matter more, because it's easier to accidentally upload something sensitive as a file than to type it out.

**Quality varies by modality.** Most models are strongest at text. Image understanding is good but not perfect. Audio transcription is solid for clear speech but struggles with accents, overlapping speakers, or poor recordings. Generated images may look impressive but often have subtle errors. Know the strengths and limitations of each modality.

## Practical ways to start

If you've only used AI for text conversations, here are ways to explore multimodal capabilities:

**Upload, don't describe.** Instead of describing a chart, table, or document in your prompt, upload it directly. The AI will extract more accurate information from the source than from your description.

**Combine modalities.** Upload an image and ask for text analysis. Upload a document and ask for a visual summary. The most useful workflows often cross modalities — using AI to move between formats that would take you significant time to convert manually.

**Use code execution for data tasks.** If your AI tool supports it, ask it to write and run code for data analysis. You don't need to understand the code — you need to understand the output and whether it makes sense. This connects to the [Workflow Automation](/pillars/workflow-automation/) pillar.

**Experiment with what's possible.** The capabilities of multimodal AI are expanding faster than documentation can keep up. Try uploading different file types. Try asking for different output formats. The best way to learn the boundaries is to test them.

## Where to go next

- [Choosing the Right AI Tool](/concepts/choosing-the-right-ai-tool/) — which tools support which modalities
- [Prompt Engineering Basics](/concepts/prompt-engineering-basics/) — techniques that work across all modalities
- [Workflow Automation](/pillars/workflow-automation/) — putting multimodal capabilities to work in real processes
