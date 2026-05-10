import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const log = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/log' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    author: z.string().default('The Commodore'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { log };
