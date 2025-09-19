import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../utils/zodSchemas'
import { z } from 'zod'
import { Card } from './shared/Card'
import { Input } from './shared/Input'
import { PasswordInput } from './shared/PasswordInput'
import { Button } from './shared/Button'
import { apiCall } from '../utils/apiClient'
import { useToast } from '../hooks/useToast'
import { useAuthUI } from '../context/AuthUIContext'
import { scorePassword } from '../utils/passwordStrength'

export const RegisterForm: React.FC<{ onNavigate: (v: 'login' | 'register' | 'forgot' | 'reset') => void }> = ({ onNavigate }) => {
    type Form = z.infer<typeof registerSchema>
    const { push } = useToast()
    const cfg = useAuthUI()
    const [loading, setLoading] = useState(false)
    const [score, setScore] = useState(0)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Form>({
        resolver: zodResolver(registerSchema),
    })

    const passwordValue = watch('password')

    React.useEffect(() => {
        setScore(scorePassword(passwordValue || ''))
    }, [passwordValue])

    const onSubmit = handleSubmit(async (values) => {
        try {
            setLoading(true)
            const res = await apiCall<{ access_token: string }>(cfg, cfg.routes.register, { body: values })
            push({ type: 'success', message: 'Account created' })
            window.dispatchEvent(new CustomEvent('auth:login', { detail: res }))
        } catch (e: any) {
            push({ type: 'error', message: e.message || 'Registration failed' })
        } finally { setLoading(false) }
    })

    return (
        <Card title="Create your account" subtitle="Join us in a minute">
            <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <Input label="First name" {...register('firstName')} error={errors.firstName?.message} />
                    <Input label="Last name" {...register('lastName')} error={errors.lastName?.message} />
                </div>
                <Input label="Email" type="email" {...register('email')} error={errors.email?.message} />
                <Input label="Contact number" placeholder="(+94) 771 234 567" {...register('contactNumber')} error={errors.contactNumber?.message} />
                <div>
                    <PasswordInput label="Password" {...register('password')} error={errors.password?.message} />
                    <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded mt-2 overflow-hidden">
                        <div className="h-full bg-emerald-500 transition-all" style={{ width: `${score}%` }} />
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">Password strength</p>
                </div>
                <Button type="submit" loading={loading} className="w-full">Create account</Button>
            </form>
            <p className="mt-4 text-sm">Have an account? <button className="text-primary" onClick={() => onNavigate('login')}>Sign in</button></p>
        </Card>
    )
}