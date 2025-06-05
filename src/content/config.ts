import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.string(),
    price: z.number(),
    pricePrefix: z.string().optional(),
    shortDescription: z.string(),
    features: z.array(z.string()),
    photos: z.array(z.string()),
  }),
});

const categories = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    sortOrder: z.number(),
  }),
});

export const collections = {
  products,
  categories,
};