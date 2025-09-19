import React from 'react'
import { clsx } from 'clsx'

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }

export const Input: React.FC<Props> = ({ label, error, className, ...rest }) => (
    <label className="block">
        {label && <span className="block mb-1 text-sm font-medium">{label}</span>}
        <input
            className={clsx(
                'w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 px-3 py-2 outline-none focus:ring-2 focus:ring-primary',
                error && 'border-red-500 focus:ring-red-500',
                className,
            )}
            {...rest}
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </label>
)