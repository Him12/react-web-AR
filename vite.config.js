import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Works for both localhost & GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? './' : '/',
})
