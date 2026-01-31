import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    meta_description: z.string().optional(),
    publishDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    modified_date: z.coerce.date().optional(),
    author: z.string().default('SeaSalt.ai Team'),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'es', 'zh-tw', 'zh-cn', 'zh-TW', 'zh-CN', 'ja', 'ko', 'fr', 'de', 'ar', 'fa', 'fil', 'hi', 'id', 'ms', 'pl', 'pt', 'ro', 'ru', 'ta', 'th', 'vi']).default('en'),
    slug: z.string().optional(),
    draft: z.boolean().default(false),
    category: z.string().optional(),
  }).passthrough().transform((data) => {
    // Transform aliases to the expected field names
    return {
      ...data,
      // Use meta_description if description is not provided
      description: data.description || data.meta_description || '',
      // Use date if publishDate is not provided
      publishDate: data.publishDate || (data.date ? new Date(data.date) : new Date()),
      // Use modified_date if updatedDate is not provided
      updatedDate: data.updatedDate || (data.modified_date ? new Date(data.modified_date) : undefined),
    };
  }), // Allow additional fields without strict validation
});

export const collections = {
  blog: blogCollection,
};
