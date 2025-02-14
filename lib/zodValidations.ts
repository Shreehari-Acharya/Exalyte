import {z} from 'zod';

export const signUpSchema = z.object({
    username: z.string().min(4, "Username must be at least 4 characters").max(20),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
