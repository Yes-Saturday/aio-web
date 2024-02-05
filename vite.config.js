import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { 
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: "0.0.0.0",
    proxy: {
      '/prod-api': {
        target: 'http://127.0.0.1:8888',
        rewrite: v => v.replace(/^\/prod-api/, '')
      }
    }
  }
})
