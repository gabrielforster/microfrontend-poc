import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    federation({
      name: 'host',
      remotes: {
        'customers': 'http://localhost:4173/assets/remoteEntry.js',
        'invoices': 'http://localhost:4174/assets/remoteEntry.js',
      },
      shared: ['vue'],
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  }
})
