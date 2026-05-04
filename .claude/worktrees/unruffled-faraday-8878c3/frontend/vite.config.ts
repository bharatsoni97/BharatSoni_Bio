import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'


export default defineConfig({
  plugins: [react(),
    ViteImageOptimizer({jpg: { quality: 75 }, png: { quality: 75 } }),
  ],
  base: process.env.NODE_ENV === 'production' ? '/BharatSoni_Bio/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})
