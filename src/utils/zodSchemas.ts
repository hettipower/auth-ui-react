import { z } from 'zod'

export const emailSchema = z.string().email('Enter a valid email')
export const passwordSchema = z.string().min(8, 'At least 8 characters')

export const loginSchema = z.object({
    email: emailSchema,
    password: z.string().min(1, 'Password is required'),
    remember: z.boolean().optional(),
})

export const registerSchema = z.object({
    firstName: z.string().min(1, 'Required'),
    lastName: z.string().min(1, 'Required'),
    email: emailSchema,
    contactNumber: z.string().optional(),
    password: passwordSchema,
})

export const forgotSchema = z.object({
    email: emailSchema,
})

export const resetSchema = z.object({
    token: z.string().min(1, 'Invalid token'),
    newPassword: passwordSchema,
    confirmPassword: passwordSchema,
}).refine((d) => d.newPassword === d.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
})