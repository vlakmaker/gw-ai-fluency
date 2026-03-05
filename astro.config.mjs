// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://playbook.informationgeek.org',
	integrations: [
		starlight({
			title: 'AI Fluency Playbook',
			description: 'A hands-on resource that helps generalists build practical AI skills through exercises, frameworks, and personalized learning paths.',
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
					label: 'Pillars',
					items: [
						{ slug: 'pillars' },
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
						{
							label: 'Ethical Prompting',
							items: [
								{ slug: 'exercises/ethical-prompting/ep-basic-01' },
								{ slug: 'exercises/ethical-prompting/ep-intermediate-01' },
								{ slug: 'exercises/ethical-prompting/ep-advanced-01' },
							],
						},
						{
							label: 'Insight Synthesis',
							items: [
								{ slug: 'exercises/insight-synthesis/is-basic-01' },
								{ slug: 'exercises/insight-synthesis/is-intermediate-01' },
								{ slug: 'exercises/insight-synthesis/is-advanced-01' },
							],
						},
						{
							label: 'Workflow Automation',
							items: [
								{ slug: 'exercises/workflow-automation/wa-basic-01' },
								{ slug: 'exercises/workflow-automation/wa-intermediate-01' },
								{ slug: 'exercises/workflow-automation/wa-advanced-01' },
							],
						},
						{
							label: 'Cross-Domain Reframing',
							items: [
								{ slug: 'exercises/cross-domain-reframing/cdr-basic-01' },
								{ slug: 'exercises/cross-domain-reframing/cdr-intermediate-01' },
								{ slug: 'exercises/cross-domain-reframing/cdr-advanced-01' },
							],
						},
						{
							label: 'Agent Collaboration',
							items: [
								{ slug: 'exercises/agent-collaboration/ac-basic-01' },
								{ slug: 'exercises/agent-collaboration/ac-intermediate-01' },
								{ slug: 'exercises/agent-collaboration/ac-advanced-01' },
							],
						},
					],
				},
				{
					label: 'Levels',
					items: [
						{ slug: 'levels' },
						{ slug: 'levels/basic' },
						{ slug: 'levels/intermediate' },
						{ slug: 'levels/advanced' },
					],
				},
				{
					label: 'Archetypes',
					items: [
						{ slug: 'archetypes' },
						{ slug: 'archetypes/tinkerer' },
						{ slug: 'archetypes/planner' },
						{ slug: 'archetypes/strategist' },
						{ slug: 'archetypes/social-learner' },
					],
				},
				{
					label: 'Pathways',
					items: [
						{ slug: 'pathways' },
						{ slug: 'pathways/new-to-ai' },
						{ slug: 'pathways/strong-communicator-low-technical' },
						{ slug: 'pathways/high-synthesis-low-agent' },
						{ slug: 'pathways/high-automation-low-ethics' },
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
