import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const tours = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/tours" }),
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