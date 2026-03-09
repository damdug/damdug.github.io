import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['life', 'wellness', 'business', 'technology', 'creativity']),
    tags: z.array(z.string()).optional(),
    author: z.string().default('Douglas M. Galloway'),
    draft: z.boolean().default(false),
  }),
});

const hdk = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    section: z.string().optional(),
    order: z.number().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().default('Douglas M. Galloway'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, hdk };
