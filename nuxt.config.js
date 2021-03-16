export default {
      /*
  ** Global CSS
  */
  css: [
    { src: '~assets/css/main.sass', lang: 'scss' }
  ],

  styleResources: {
    sass: [
      '~assets/css/_vars.sass',
      // '~assets/css/main.sass'
    ]
  },
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'Зурхай',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
    // With options
    // ['@nuxtjs/vuetify', 
    // { /* module options */
    //   customVariables: {
    //     customVariables: ['~/assets/css/variables.sass']
    //   }
    // }]
  ],
  vuetify: {
    optionsPath: './vuetify.options.js'
  },
}