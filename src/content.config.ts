import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				// Exercise frontmatter fields
				pillar: z.enum([
					'agent-collaboration',
					'cross-domain-reframing',
					'ethical-prompting',
					'insight-synthesis',
					'workflow-automation',
				]).optional(),
				level: z.enum(['basic', 'intermediate', 'advanced']).optional(),
				'archetype-fit': z.array(z.string()).optional(),
				'time-estimate': z.string().optional(),

				// Concept page frontmatter fields
				type: z.string().optional(),
				'related-pillars': z.array(z.string()).optional(),
				'last-updated': z.string().optional(),
			}),
		}),
	}),
};
