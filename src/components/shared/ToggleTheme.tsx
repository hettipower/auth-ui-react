import React from 'react'
import { useTheme } from '../../hooks/useTheme'

export const ToggleTheme: React.FC = () => {
    const { isDark, setIsDark } = useTheme()
    return (
        <button className="text-sm px-3 py-1 rounded-full glass" onClick={() => setIsDark(!isDark)}>
            {isDark ? 'Light' : 'Dark'} mode
        </button>
    )
}