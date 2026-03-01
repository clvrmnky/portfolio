import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// appType defaults to 'spa' — Vite handles history API fallback automatically
export default defineConfig({
  plugins: [react()],
})
