import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../utils/zodSchemas'
import { z } from 'zod'
import { Card } from './shared/Card'
import { Input } from './shared/Input'
import { PasswordInput } from './shared/PasswordInput'
import { Button } from './shared/Button'
import { useToast } from '../hooks/useToast'
import { apiCall } from '../utils/apiClient'
import { useAuthUI } from '../context/AuthUIContext'

export const LoginForm: React.FC<{ onNavigate: (v: 'login' | 'register' | 'forgot' | 'reset') => void }> = ({ onNavigate }) => {
    type Form = z.infer<typeof loginSchema>
    const { push } = useToast()
    const cfg = useAuthUI()
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<Form>({
        resolver: zodResolver(loginSchema),
        defaultValues: { remember: true },
    })

    const onSubmit = handleSubmit(async (values) => {
        try {
            setLoading(true)
            const res = await apiCall<{ access_token: string }>(cfg, cfg.routes.login, { body: { email: values.email, password: values.password } })
            push({ type: 'success', message: 'Logged in successfully' })
            // consumer app can listen to token via event (optional)
            window.dispatchEvent(new CustomEvent('auth:login', { detail: res }))
        } catch (e: any) {
            push({ type: 'error', message: e.message || 'Login failed' })
        } finally { setLoading(false) }
    })

    return (
        <Card title="Welcome back" subtitle="Log in to continue">
            <form onSubmit={onSubmit} className="space-y-4">
                <Input label="Email" type="email" placeholder="you@example.com" {...register('email')} error={errors.email?.message} />
                <PasswordInput label="Password" placeholder="••••••••" {...register('password')} error={errors.password?.message} />
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-primary" {...register('remember')} /> Remember me
                    </label>
                    <button type="button" className="text-primary" onClick={() => onNavigate('forgot')}>Forgot password?</button>
                </div>
                <Button type="submit" loading={loading} className="w-full">Sign in</Button>
            </form>
            <p className="mt-4 text-sm">No account? <button className="text-primary" onClick={() => onNavigate('register')}>Create one</button></p>
        </Card>
    )
}