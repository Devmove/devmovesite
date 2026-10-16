import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['pt', 'en']),
    tags: z.array(z.string()).default([]),
    project: z.string().optional(),
    repo: z.string().url().optional(),
  }),
});

export const collections = { blog };
