import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-03-19',
  vite: {
    plugins: [tailwindcss()]
  },
  css: ['./app/assets/css/main.css'],
  modules: ['nuxt-icon']
})