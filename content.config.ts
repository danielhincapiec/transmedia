import { defineCollection, z } from "astro:content";
import { glob, file } from 'astro/loaders';

// const blogCollection = defineCollection({
// 	schema: z.object({
// 		title: z.string().optional(),
// 		tags: z.array(z.string()).optional(),
// 	}),
// });

// export const collections = {
// 	blog: blogCollection,
// };