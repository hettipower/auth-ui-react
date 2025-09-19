import React, { createContext, useContext, useMemo } from 'react'

export type RoutesConfig = {
    login: string
    register: string
    forgotPassword: string
    resetPassword: string
}

export type AuthUIConfig = {
    apiBaseUrl: string
    routes: RoutesConfig
    headers?: () => Record<string, string> // e.g., add tenant headers
}

const AuthUIContext = createContext<AuthUIConfig | null>(null)

export const AuthUIProvider: React.FC<React.PropsWithChildren<{ config: AuthUIConfig }>> = ({ config, children }) => {
    const value = useMemo(() => config, [config])
    return <AuthUIContext.Provider value={value}>{children}</AuthUIContext.Provider>
}

export const useAuthUI = () => {
    const ctx = useContext(AuthUIContext)
    if (!ctx) throw new Error('useAuthUI must be used within AuthUIProvider')
    return ctx
}