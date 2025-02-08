import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      timers: 'timers-browserify', // Redirect Node.js timers to a browser-compatible polyfill
    },
  },
  define: {
    global: {}, // Polyfill global object for browser compatibility if needed
  },
})
