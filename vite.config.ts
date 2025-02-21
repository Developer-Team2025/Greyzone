import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/Frontend/', // Ensure Vite is correctly resolving assets within the /Frontend directory
  // base: '/dist/',
  build: {
    outDir: 'dist', // Optional: Define build output directory
    assetsDir: 'assets', // Optional: Directory for static assets
  },
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
