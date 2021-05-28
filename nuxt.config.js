// import webpack from 'webpack'

// import colors from 'vuetify/lib/util/colors'

import axios from 'axios'

// import WriteJsonPlugin from 'write-json-webpack-plugin';

// import { VBtn } from 'vuetify/lib';
// import Vuetify, {
//   VApp,
//   VBtn,
// } from 'vuetify/lib'

export default {

      /*
  ** for nuxt grnrrate
  */
  target: 'static',

  router: {
    // base: '/zurhay/'
    base: '/'
  },
  generate: {
    fallback: true,
    crawler: false,
    cache: {
      ignore: [
        '.nuxt', // buildDir
        'static', // dir.static
        'dist', // generate.dir
        'node_modules',
        '.**/*',
        '.*',
        'README.md'
      ] // ignore changes applied on this files
    },
    routes(callback) {
      let months = ['2021-05', '2021-06'];
      let routesFinal = [];
      let counter = 0;
      // console.log('months', months);
      months.forEach(month => {
        // console.log('month', month);
        // console.log('url', 'http://localhost:3000/month/'+month+'.json');
        axios.get('http://localhost:3000/month/'+month+'.json')
          .then(res => {
            counter++;
            // console.log('res', res.data);
            routesFinal.push('/' + month );
            for (let date in res.data) {
              let day = date.split('-')[date.split('-').length - 1];
              routesFinal.push('/' + month + '/' + day);
              routesFinal.push('/' + month + '/' + day + '/edit');
            }
            if (counter == months.length) {
              console.log(routesFinal);
              callback(null, routesFinal)
            }
          })
          .catch(callback)
      })
      
    }
  },
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

  plugins: ['~/plugins/TiptapVuetify'],
  build: {
    transpile: ['vuetify/lib', "tiptap-vuetify"],
  },
  buildModules: [
    '@nuxtjs/vuetify', 
    // Simple usage
    // '@nuxtjs/vuetify',

    // With options
    // ['@nuxtjs/vuetify', 
    // { /* module options */
    //   customVariables: {
    //     customVariables: ['~/assets/css/variables.sass']
    //   },
      
    //   theme: {
    //     themes: {
    //       light: {
    //         primary: colors.indigo.darken1,
    //         secondary: colors.grey.darken1,
    //         accent: colors.shades.black,
    //         error: colors.red.accent3,
    //       },
    //     },
    //   },
    //   treeShake: {
    //     components: {
    //       VApp,
    //       VBtn, 
    //     },
    //   },
    // }
  // ]
  ],
  vuetify: {
    optionsPath: './vuetify.options.js',
  },
  /*
   ** Modules - https://nuxtjs.org/docs/2.x/directory-structure/modules
   */
  modules: ['@nuxtjs/axios', 
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '79784347',
        webvisor: true,
        // clickmap:true,
        // useCDN:false,
        // trackLinks:true,
        // accurateTrackBounce:true,
      }
    ],
  ],
}