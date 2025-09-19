import React from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'> & { loading?: boolean }

export const Button: React.FC<Props> = ({ className, loading, children, disabled, ...rest }) => (
    <motion.button
        whileTap={{ scale: 0.98 }}
        className={clsx(
            'inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium text-white bg-primary hover:bg-primary-700 transition shadow-lg disabled:opacity-60 disabled:cursor-not-allowed',
            className,
        )}
        disabled={disabled || loading}
        {...rest}
    >
        {loading && <span className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
        {children}
    </motion.button>
)