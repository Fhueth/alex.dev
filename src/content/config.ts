import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.string(),
        buttons: z.array(
            z.object({
                label: z.string(),
                url: z.string().url(),
                svg: z.string(),
                alt: z.string(),
            }),
        ),
    })
});

export const collections = { projects };