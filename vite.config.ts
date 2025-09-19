import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'AuthUI',
            fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'framer-motion', 'clsx', 'react-hook-form', 'zod', '@hookform/resolvers/zod'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'framer-motion': 'FramerMotion',
                    'clsx': 'clsx',
                    'react-hook-form': 'ReactHookForm',
                    'zod': 'zod'
                },
            },
        },
        sourcemap: true,
    },
})