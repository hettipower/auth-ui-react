import { useEffect, useState } from 'react'

export function useTheme() {
    const [isDark, setIsDark] = useState<boolean>(() => document.documentElement.classList.contains('dark'))
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark)
    }, [isDark])
    return { isDark, setIsDark }
}