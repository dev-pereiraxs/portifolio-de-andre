import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' permite publicar na Vercel e no GitHub Pages sem ajustes.
export default defineConfig({
  base: './',
  plugins: [react()],
})
