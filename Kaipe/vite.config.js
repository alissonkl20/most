import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Define o diretório de saída como 'dist'
    emptyOutDir: true, // Limpa o diretório antes de build
    assetsDir: 'assets', // Subdiretório para assets
    rollupOptions: {
      output: {
        manualChunks: void 0,
      }
    }
  },
  base: '/', // Base path corrigido para aplicações SPA
  server: {
    historyApiFallback: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  }
})
