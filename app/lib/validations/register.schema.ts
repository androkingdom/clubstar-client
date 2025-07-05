import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(3, { message: "Name is required and must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Password too short" }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
