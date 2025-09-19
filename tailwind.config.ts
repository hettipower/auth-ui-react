import type { Config } from 'tailwindcss'

export default {
    darkMode: ['class'],
    content: [
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4f46e5',
                    600: '#4f46e5',
                    700: '#4338ca',
                },
            },
            boxShadow: {
                glass: '0 10px 30px rgba(0,0,0,0.15)'
            },
            backdropBlur: {
                xs: '2px'
            }
        }
    },
    plugins: [],
} satisfies Config