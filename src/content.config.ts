import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts. `slug` preserves each post's URL from the old Jekyll site.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

// Personal projects. The Markdown body is the write-up shown on the Projects page.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    years: z.string(),
    stack: z.array(z.string()),
    // 'current' projects are shown first; 'earlier' are the 2019–2020 bootcamp-era work.
    era: z.enum(['current', 'earlier']),
    featured: z.boolean().default(false),
    order: z.number(),
    link: z.url().optional(),
  }),
});

export const collections = { posts, projects };
