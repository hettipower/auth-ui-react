import React, { createContext, useContext, useState, useCallback } from 'react'

type Toast = { id: number; message: string; type?: 'success' | 'error' }

const ToastCtx = createContext<{ push: (t: Omit<Toast, 'id'>) => void } | null>(null)

export const ToastProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([])
    const push = useCallback((t: Omit<Toast, 'id'>) => {
        const id = Date.now()
        setToasts((prev) => [...prev, { id, ...t }])
        setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), 3500)
    }, [])

    return (
        <ToastCtx.Provider value={{ push }}>
            {children}
            <div className="fixed top-4 right-4 space-y-2 z-[9999]">
                {toasts.map((t) => (
                    <div key={t.id} className={`glass px-4 py-2 rounded-lg text-sm ${t.type === 'error' ? 'border-red-500/40' : 'border-emerald-500/40'}`}>
                        {t.message}
                    </div>
                ))}
            </div>
        </ToastCtx.Provider>
    )
}

export const useToast = () => {
    const ctx = useContext(ToastCtx)
    if (!ctx) throw new Error('useToast must be used inside ToastProvider')
    return ctx
}