import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://gustavodemate.github.io/ToDo-List/",
  build: {
  outDir: 'build'
},
  plugins: [react()]
})
