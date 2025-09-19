import React, { useState, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ToggleTheme } from './shared/ToggleTheme'

export type AuthView = 'login' | 'register' | 'forgot' | 'reset'

export const AuthShell: React.FC<React.PropsWithChildren<{ initial?: AuthView }>> = ({ initial = 'login' }) => {
    const [view, setView] = useState<AuthView>(initial)

    return (
        <div className="min-h-[80vh] grid place-items-center p-6 bg-[radial-gradient(ellipse_at_top,theme(colors.primary/20),transparent)]">
            <div className="absolute top-4 right-4"><ToggleTheme /></div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={view}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.25 }}
                    className="w-full"
                >
                    {view === 'login' && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <LoginLazy onNavigate={setView} />
                        </Suspense>
                    )}
                    {view === 'register' && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <RegisterLazy onNavigate={setView} />
                        </Suspense>
                    )}
                    {view === 'forgot' && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ForgotLazy onNavigate={setView} />
                        </Suspense>
                    )}
                    {view === 'reset' && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ResetLazy onNavigate={setView} />
                        </Suspense>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// Lazy wrappers keep bundle size small for host apps
const LoginLazy = React.lazy(() => import('./LoginForm').then(m => ({ default: m.LoginForm })))
const RegisterLazy = React.lazy(() => import('./RegisterForm').then(m => ({ default: m.RegisterForm })))
const ForgotLazy = React.lazy(() => import('./ForgotPasswordForm').then(m => ({ default: m.ForgotPasswordForm })))
const ResetLazy = React.lazy(() => import('./ResetPasswordForm').then(m => ({ default: m.ResetPasswordForm })))