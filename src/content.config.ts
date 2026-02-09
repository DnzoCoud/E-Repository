import { defineCollection, z } from "astro:content";

const sections = defineCollection({
  schema: z.object({
    navLabel: z.string(),
    navOrder: z.number(),
    anchorId: z.string()
  })
})

export const collections = { sections }