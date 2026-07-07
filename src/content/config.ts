import { defineCollection, z } from 'astro:content';

const pillarsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    label: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const useCasesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    description: z.string(),
    tagline: z.string(),
    order: z.number(),
  }),
});

const marketStatsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    label: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  pillars: pillarsCollection,
  useCases: useCasesCollection,
  marketStats: marketStatsCollection,
};
