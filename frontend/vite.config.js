import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: true, // чтобы Vite слушал на 0.0.0.0
  },
  plugins: [react()],
});
