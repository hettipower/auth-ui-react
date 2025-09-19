import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgotSchema } from '../utils/zodSchemas'
import { z } from 'zod'
import { Card } from './shared/Card'
import { Input } from './shared/Input'
import { Button } from './shared/Button'
import { useToast } from '../hooks/useToast'
import { apiCall } from '../utils/apiClient'
import { useAuthUI } from '../context/AuthUIContext'

export const ForgotPasswordForm: React.FC<{ onNavigate: (v: 'login' | 'register' | 'forgot' | 'reset') => void }> = ({ onNavigate }) => {
    type Form = z.infer<typeof forgotSchema>
    const { push } = useToast()
    const cfg = useAuthUI()
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<Form>({ resolver: zodResolver(forgotSchema) })

    const onSubmit = handleSubmit(async (values) => {
        try {
            setLoading(true)
            await apiCall<{ message: string }>(cfg, cfg.routes.forgotPassword, { body: values })
            push({ type: 'success', message: 'If the email exists, a reset link has been sent.' })
            onNavigate('login')
        } catch (e: any) {
            push({ type: 'error', message: e.message || 'Request failed' })
        } finally { setLoading(false) }
    })

    return (
        <Card title="Forgot password" subtitle="We will email you a reset link">
            <form onSubmit={onSubmit} className="space-y-4">
                <Input label="Email" type="email" {...register('email')} error={errors.email?.message} />
                <Button type="submit" loading={loading} className="w-full">Send reset link</Button>
            </form>
            <p className="mt-4 text-sm"><button className="text-primary" onClick={() => onNavigate('login')}>Back to sign in</button></p>
        </Card>
    )
}