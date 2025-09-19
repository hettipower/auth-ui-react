import React from 'react'

export const Card: React.FC<React.PropsWithChildren<{ title?: string; subtitle?: string }>> = ({ title, subtitle, children }) => (
    <div className="glass rounded-3xl p-6 w-full max-w-md mx-auto">
        {title && <h2 className="text-xl font-semibold mb-1">{title}</h2>}
        {subtitle && <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">{subtitle}</p>}
        {children}
    </div>
)