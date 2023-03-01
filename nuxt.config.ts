import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  components: {
      global: true,
      dirs: ['~/components']
  },
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:3000/graphql'
      }
    },
  },
  css:[
      '@/assets/sass/main.scss',
    ],

})
