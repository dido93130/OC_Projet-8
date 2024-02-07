import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [ react()],
  base: "/OC_Projet-8/",
  server: {
    port: 3001,
  }, 
});
