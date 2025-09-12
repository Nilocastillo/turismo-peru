import { defineCollection, z } from "astro:content";

const tours = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      duration: z.string(),
      location: z.string(),
      departure: z.string(),
      category: z.string(),
      description: z.string(),
      image: image(),
      alt: z.string(),
    }),
});

export const collections = { tours };
