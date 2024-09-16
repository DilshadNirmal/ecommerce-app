import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "tailwindcss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {port: 5174},
  css: {
    postcss: {
        plugins: [tailwindcss()],
      },
  },
})
