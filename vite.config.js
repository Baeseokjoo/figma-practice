import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 주소: https://baeseokjoo.github.io/figma-practice/
  base: '/figma-practice/',
  plugins: [react()],
})
