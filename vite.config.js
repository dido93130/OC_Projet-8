import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./OC_Projet-8",
  plugins: [ react()],
  server: {
    port: 3001,
  },
});
