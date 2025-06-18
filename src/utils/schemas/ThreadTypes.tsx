import { z } from "zod";

export const CreateThread = z.object({
    content: z.string(),
    imageUrl: z.union([z.string(), z.instanceof(File)]).optional(),
})

export type CreateThreadDTO = z.infer<typeof CreateThread>