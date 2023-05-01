import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import ssr from 'vite-plugin-ssr/plugin'

export default defineConfig({
  cacheDir: '.cache/.vite',
  plugins: [
    solid({ ssr: true }),
    ssr()
  ]
})