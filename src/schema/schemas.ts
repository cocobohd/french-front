import { z } from 'zod'
import validator from 'validator'

export const LoginFormSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'This field has to be filled.' })
        .refine(validator.isEmail, { message: 'Invalid email' }),
    password: z.string().min(2).max(50),
})

export const SignupFormSchema = z.object({
    name: z.string().min(1),
    email: z
        .string()
        .min(1, { message: 'This field has to be filled.' })
        .refine(validator.isEmail, { message: 'Invalid Email' }),
    phone: z
        .string()
        .refine(validator.isMobilePhone, { message: 'Invalid phone number' }),
    password: z.string().min(2).max(50),
})
