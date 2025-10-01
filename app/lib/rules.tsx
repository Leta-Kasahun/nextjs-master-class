import { z } from 'zod'
export const registrationFormSchema = z.object({
    name: z.string().trim().min(1, { message: "Name field is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string()
        .min(8, { message: "password at least 8 characters" })
        .regex(/[a-zA-Z]/, { message: "password must contain at least one letter" })
        .regex(/[0-9]/, { message: "password must contain one number" })
        .regex(/[^a-zA-Z0-9]/, { message: "password must contain one special character" }),
    confirm: z.string().trim(),
}).superRefine((val, ctx) => {
    if (val.password !== val.confirm) {
        ctx.addIssue({
            code: "custom",
            message: "password is not matched",
            path: ["confirm"]
        })
    }
})