import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  base: '/PORTFOLIO/',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000, // Increase the limit to avoid warnings
  },
})


