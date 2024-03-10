import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  srcDir: './src',
  alias: {
    '@': resolve(__dirname, './src')
  },
  css: [
    '~/assets/main.scss'
  ]
})
