// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/apollo','shadcn-nuxt'],

  tailwindcss:{
    config:{
      theme: {

      }
    }
  },

  apollo:{
    clients: {
      default: {
        httpEndpoint: 'https://prime-dog-60.hasura.app/v1/graphql'
      }
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})
