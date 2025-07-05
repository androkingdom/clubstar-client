import { z } from "zod";

export const createClubSchema = z.object({
  name: z.string().min(1),
  slug: z
    .string()
    .min(1, { message: "Slug is required" })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message:
        "Slug can only contain lowercase letters, numbers, and hyphens (no spaces, no special characters, and no consecutive hyphens)",
    }),
  description: z.string().min(1),
  clubIcon: z.any().refine((file: FileList) => file?.length === 1, {
    message: "Image is required",
  }),
  visibility: z.boolean().optional(),
});

export type CreateClubSchema = z.infer<typeof createClubSchema>;
