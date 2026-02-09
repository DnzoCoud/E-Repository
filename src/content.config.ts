import { defineCollection, z } from "astro:content";

const sections = defineCollection({
  schema: z.object({
    navLabel: z.string(),
    navOrder: z.number(),
    anchorId: z.string()
  })
})

const heroChips = defineCollection({
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    id: z.string(),
    order: z.number()
  })
})

export const collections = { sections, heroChips }