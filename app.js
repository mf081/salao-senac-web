// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: './pages',  // Caminho para o diretório que contém o arquivo HTML
  build: {
    outDir: './dist',  // Diretório de saída
  },
})
