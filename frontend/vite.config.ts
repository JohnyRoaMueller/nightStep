import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // listen to all Interfaces -> needed to get access to data from db when starting on mobile
    port: 5173,       // standard Vite Port
  }
})