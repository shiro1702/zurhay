// import webpack from 'webpack'

import colors from 'vuetify/lib/util/colors'

import GenerateJsonPlugin from 'generate-json-webpack-plugin';

import WriteJsonPlugin from 'write-json-webpack-plugin';

// import { VBtn } from 'vuetify/lib';

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
  build: {
    plugins: [
      // new GenerateJsonPlugin(
      //   'my-file.json',
      //   { foo: 'bar', one: 'two' },
      // )
      new WriteJsonPlugin({
        object: { foo: 'bar', one: 'two' },
        // path: './static',
        // default output is timestamp.json
        filename: 'my-file.json',
      })
    ],
    // extend(config, ctx) {
    //   config.module.rules.push({
    //     test: /\.(ogg|mp3|wav|mpe?g)$/i,
    //     loader: 'file-loader',
    //     options: {
    //       name: '[path][name].[ext]'
    //     }
    //   })
    // }
  },
  buildModules: [
    
    // Simple usage
    // '@nuxtjs/vuetify',

    // With options
    ['@nuxtjs/vuetify', 
    { /* module options */
      customVariables: {
        customVariables: ['~/assets/css/variables.sass']
      },
      
      theme: {
        themes: {
          light: {
            primary: colors.red.darken1,
            secondary: colors.grey.darken1,
            accent: colors.shades.black,
            error: colors.red.accent3,
          },
        },
      },
      // treeShake: {
      //   components: {
      //     VBtn, 
      //   },
      // },
    }]
  ],

  /*
   ** Modules - https://nuxtjs.org/docs/2.x/directory-structure/modules
   */
  modules: ['@nuxtjs/axios']
  // vuetify: {
  //   optionsPath: './vuetify.options.js',
  //   theme: {
  //     themes: {
  //       // light: {
  //       //   primary: '#3f51b5',
  //       //   secondary: '#b0bec5',
  //       //   accent: '#8c9eff',
  //       //   error: '#b71c1c',
  //       // },
  //       light: {
  //         primary: colors.green.darken1,
  //         secondary: colors.grey.darken1,
  //         accent: colors.shades.black,
  //         error: colors.red.accent3,
  //       },
  //     },
  //   },
  //   treeShake: {
  //     // components: {
  //     //   VBtn, 
  //     // },
  //   },
  // },
}