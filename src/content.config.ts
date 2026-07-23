import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const lessons = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/lessons" }),
  schema: z.object({
    lesson: z.number().int().min(0).max(11),
    title: z.string(),
    description: z.string(),
    goals: z.array(z.string()).min(1),
    draft: z.boolean()
  })
});

export const collections = { lessons };
