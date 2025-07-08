import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username can't be longer than 20 characters")
    .regex(
      /^[a-zA-Z0-9_.]+$/,
      "Only letters, numbers, underscores, and dots allowed"
    )
    .refine((val) => !val.includes("@"), {
      message: "Username cannot be an email address",
    }),
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Password too short" }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
