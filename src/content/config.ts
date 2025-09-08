import { defineCollection, z } from "astro:content";

export const tours = defineCollection({
  schema: z.object({
    title: z.string(),
    duration: z.string(),
    location: z.string(),
    departure: z.string(),
    category: z.string(),
    description: z.string(),
    image: z.string(),
    alt: z.string(), // 👈 obligatorio
  }),
});

export const collections = { tours };
