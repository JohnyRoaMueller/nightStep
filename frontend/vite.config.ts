import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0',  // Lauscht auf allen Interfaces
    port: 5173,       // Standard-Port für Vite (kannst du auch anpassen)
  }
})