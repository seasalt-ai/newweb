import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('SeaSalt.ai Team'),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'es', 'zh-tw', 'ja', 'ko', 'fr', 'de', 'ar', 'fa', 'fil', 'hi', 'id', 'ms']).default('en'),
    slug: z.string().optional(),
    draft: z.boolean().default(false),
    category: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
