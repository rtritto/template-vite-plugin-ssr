import { join } from 'node:path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import ssr from 'vite-plugin-ssr/plugin'

export default defineConfig({
  cacheDir: join(process.cwd(), '.cache/.vite'),
  plugins: [
    solid({ ssr: true }),
    ssr()
  ],
  build: {
    // @ts-ignore
    polyfillDynamicImport: false
  }
})
