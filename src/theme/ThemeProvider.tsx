import React, { useEffect, useState } from 'react'

type Props = React.PropsWithChildren<{}>

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.classList.toggle('dark', theme === 'dark')
        }
    }, [theme])

    return (
        <div data-theme={theme}>
            {children}
        </div>
    )
}