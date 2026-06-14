import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/iptv': {
        target: 'http://maventv.one:80',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/iptv/, '')
      },
      '/fdata': {
        target: 'https://api.football-data.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fdata/, ''),
        secure: true
      }
    }
  }
})
