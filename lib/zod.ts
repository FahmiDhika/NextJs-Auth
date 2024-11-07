import { object, string } from "zod";

export const SignInSchema = object({
  email: string().email("invalid Email"),
  password: string()
    .min(8, "Password must be more than 8 Character")
    .max(32, "Password must be less than 32 Character"),
});

export const RegisterSchema = object({
  name: string().min(1, "Name must be more than 1 Character"),
  email: string().email("invalid Email"),
  password: string()
    .min(8, "Password must be more than 8 Character")
    .max(32, "Password must be less than 32 Character"),
  ConfirmPassword: string()
    .min(8, "Password must be more than 8 Character")
    .max(32, "Password must be less than 32 Character"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: "Password does not match",
  path: ["'ConfirmPassword"],
});
