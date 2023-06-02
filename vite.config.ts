import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [ vue() ],
  test: {
    globals: true,
    setupFiles: './src/components/__tests__/setupTests.ts'
  },
  resolve: {
    alias: {
      '@': fileURLToPath( new URL( './src', import.meta.url ) )
    }
  }
} )
