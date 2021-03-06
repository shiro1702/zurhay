import colors from 'vuetify/lib/util/colors'
// console.log(colors);

// import { VBtn } from 'vuetify/lib/components/index.js'

// import { VBtn } from 'vuetify/lib/components/'

// import { VBtn } from 'vuetify/lib'
// import {
//   VApp,
//   VBtn,
// } from 'vuetify/lib'

export default {
  breakpoint: {},
  icons: {},
  lang: {
    ru: true
  },
  // rtl: true,
  // theme: {
  //   themes: {
  //     // light: {
  //     //   primary: '#3f51b5',
  //     //   secondary: '#b0bec5',
  //     //   accent: '#8c9eff',
  //     //   error: '#b71c1c',
  //     // },
  //     light: {
  //       primary: '#E53935',
  //       secondary: '#FFCDD2',
  //       accent: '#3F51B5'
  //     },
  //   },
  // },
  theme: {
    themes: {
      light: {
        primary: colors.indigo.darken1,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
    },
  },
  // customVariables: ['~/assets/css/variables.sass'],
  // treeShake: {
  //   components: {
  //     VApp,
  //     VBtn,
  //   },
  // },
}