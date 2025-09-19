import { AuthUIConfig } from '../context/AuthUIContext'

type Options = {
    method?: 'GET' | 'POST' | 'PATCH'
    body?: unknown
}

export async function apiCall<T>(cfg: AuthUIConfig, path: string, opts: Options = {}): Promise<T> {
    const url = cfg.apiBaseUrl + path
    const res = await fetch(url, {
        method: opts.method || 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(cfg.headers?.() || {}),
        },
        body: opts.body ? JSON.stringify(opts.body) : undefined,
        credentials: 'include',
    })

    if (!res.ok) {
        const text = await res.text().catch(() => '')
        throw new Error(text || `Request failed (${res.status})`)
    }
    return res.json() as Promise<T>
}