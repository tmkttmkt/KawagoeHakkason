import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  publicDir: 'static-build',
  server:{
    host:"0.0.0.0",
    post:3000
  }
})
