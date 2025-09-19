import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetSchema } from '../utils/zodSchemas'
import { z } from 'zod'
import { Card } from './shared/Card'
import { PasswordInput } from './shared/PasswordInput'
import { Button } from './shared/Button'
import { useToast } from '../hooks/useToast'
import { apiCall } from '../utils/apiClient'
import { useAuthUI } from '../context/AuthUIContext'

export const ResetPasswordForm: React.FC<{ onNavigate: (v: 'login' | 'register' | 'forgot' | 'reset') => void; token?: string }> = ({ onNavigate, token }) => {
    type Form = z.infer<typeof resetSchema>
    const { push } = useToast()
    const cfg = useAuthUI()
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<Form>({
        resolver: zodResolver(resetSchema),
        defaultValues: { token: token || new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '').get('token') || '' },
    })

    const onSubmit = handleSubmit(async (values) => {
        try {
            setLoading(true)
            await apiCall<{ message: string }>(cfg, cfg.routes.resetPassword, { body: { token: values.token, newPassword: values.newPassword } })
            push({ type: 'success', message: 'Password reset successfully' })
            onNavigate('login')
        } catch (e: any) {
            push({ type: 'error', message: e.message || 'Reset failed' })
        } finally { setLoading(false) }
    })

    return (
        <Card title="Reset password" subtitle="Enter your new password">
            <form onSubmit={onSubmit} className="space-y-4">
                <input type="hidden" {...register('token')} />
                <PasswordInput label="New password" {...register('newPassword')} error={errors.newPassword?.message} />
                <PasswordInput label="Confirm password" {...register('confirmPassword')} error={errors.confirmPassword?.message} />
                <Button type="submit" loading={loading} className="w-full">Reset password</Button>
            </form>
            <p className="mt-4 text-sm"><button className="text-primary" onClick={() => onNavigate('login')}>Back to sign in</button></p>
        </Card>
    )
}