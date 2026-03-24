// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Support deploying under a subpath (e.g. /ai/) via BASE_PATH env var.
// Default: '/' (root) for playbook.informationgeek.org
// Set BASE_PATH=/ai/ for the generalist.world/ai/ instance.
const basePath = process.env.BASE_PATH || '/';
const siteUrl = process.env.SITE_URL || 'https://playbook.informationgeek.org';

export default defineConfig({
	site: siteUrl,
	base: basePath,
	integrations: [
		starlight({
			title: 'AI Fluency Playbook',
			description: 'A hands-on resource that helps generalists build practical AI skills through exercises, frameworks, and personalized learning paths.',
			favicon: '/favicon.png',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/vlakmaker/gw-ai-fluency' },
			],
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ slug: 'getting-started' },
						{ slug: 'how-to-use' },
					],
				},
				{
					label: 'Core Concepts',
					items: [
						{ slug: 'concepts/what-we-mean-by-ai-fluency' },
						{ slug: 'concepts/how-ai-actually-works' },
						{ slug: 'concepts/tokenization-and-context-windows' },
						{ slug: 'concepts/why-ai-gets-things-wrong' },
						{ slug: 'concepts/prompt-engineering-basics' },
						{ slug: 'concepts/agents-vs-assistants' },
					],
				},
				{
					label: 'Archetypes & Pathways',
					items: [
						{ slug: 'archetypes' },
						{ slug: 'archetypes/tinkerer' },
						{ slug: 'archetypes/planner' },
						{ slug: 'archetypes/strategist' },
						{ slug: 'archetypes/social-learner' },
						{ slug: 'pathways' },
						{ slug: 'pathways/new-to-ai' },
						{ slug: 'pathways/strong-communicator-low-technical' },
						{ slug: 'pathways/high-synthesis-low-agent' },
						{ slug: 'pathways/high-automation-low-ethics' },
					],
				},
				{
					label: 'Pillars',
					items: [
						{ slug: 'pillars/ethical-prompting' },
						{ slug: 'pillars/insight-synthesis' },
						{ slug: 'pillars/workflow-automation' },
						{ slug: 'pillars/cross-domain-reframing' },
						{ slug: 'pillars/agent-collaboration' },
					],
				},
				{
					label: 'Exercises',
					items: [
						{ slug: 'exercises' },
						{ slug: 'exercises/ethical-prompting/ep-basic-01' },
						{ slug: 'exercises/ethical-prompting/ep-intermediate-01' },
						{ slug: 'exercises/ethical-prompting/ep-advanced-01' },
						{ slug: 'exercises/insight-synthesis/is-basic-01' },
						{ slug: 'exercises/insight-synthesis/is-intermediate-01' },
						{ slug: 'exercises/insight-synthesis/is-advanced-01' },
						{ slug: 'exercises/workflow-automation/wa-basic-01' },
						{ slug: 'exercises/workflow-automation/wa-intermediate-01' },
						{ slug: 'exercises/workflow-automation/wa-advanced-01' },
						{ slug: 'exercises/cross-domain-reframing/cdr-basic-01' },
						{ slug: 'exercises/cross-domain-reframing/cdr-intermediate-01' },
						{ slug: 'exercises/cross-domain-reframing/cdr-advanced-01' },
						{ slug: 'exercises/agent-collaboration/ac-basic-01' },
						{ slug: 'exercises/agent-collaboration/ac-intermediate-01' },
						{ slug: 'exercises/agent-collaboration/ac-advanced-01' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ slug: 'resources' },
						{ slug: 'resources/glossary' },
						{ slug: 'resources/tools-and-platforms' },
						{ slug: 'resources/further-reading' },
					],
				},
			],
		}),
	],
});
