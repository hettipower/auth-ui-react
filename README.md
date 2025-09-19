# @hettipower/auth-ui-react

Reusable, animated auth UI for React apps. Plug into your NestJS backend.

## Install

```bash
npm i @hettipower/auth-ui-react framer-motion react-hook-form zod
# Tailwind setup in host app is required
````

Add Tailwind to your app (if you haven't already). Ensure your app processes the library CSS:

```js
// tailwind.config.js in host app
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './node_modules/@hettipower/auth-ui-react/dist/**/*.{js,ts,tsx}',
  ],
}
```

## Quick Start

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  AuthUIProvider,
  ThemeProvider,
  ToastProvider,
  AuthShell,
} from '@hettipower/auth-ui-react'

const config = {
  apiBaseUrl: 'http://localhost:3000',
  routes: {
    login: '/auth/login',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthUIProvider config={config}>
        <ToastProvider>
          <AuthShell />
        </ToastProvider>
      </AuthUIProvider>
    </ThemeProvider>
  </React.StrictMode>
)
```

### Listen for Login Event (optional)

```ts
window.addEventListener('auth:login', (e: any) => {
  const { access_token } = e.detail
  // Store in memory or hand off to your app
  console.log('Logged in! token:', access_token)
})
```

## Theming

* Dark/light toggle included (class-based). Host app can also control `document.documentElement.classList`.

## Security Notes

* Prefer httpOnly cookies on the backend for JWTs. The UI does not persist tokens.

## Build & Publish

```bash
npm run build
# Publish to npm (with your org scope)
npm publish --access public
```

```

---

## ✅ Notes

- Forms use **React Hook Form + Zod** with instant validation.
- **Framer Motion** handles transitions and micro‑interactions.
- API client is minimal and configurable; works perfectly with the NestJS backend I built earlier.
- You can export individual forms or the all‑in‑one `<AuthShell/>`.

```