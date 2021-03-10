// import colors from 'vuetify/lib/util/colors'
// console.log(colors);

// import { VBtn, VChip } from 'vuetify/lib'

export default {
  breakpoint: {},
  icons: {},
  lang: {},
  // rtl: true,
  theme: {
    // light: {
    //   primary: colors.red.darken1, // #E53935
    //   secondary: colors.red.lighten4, // #FFCDD2
    //   accent: colors.indigo.base, // #3F51B5
    // },
  },
  customVariables: ['~/assets/css/variables.sass'],
  treeShake: {
    components: ['VBtn', 'v-btn'],
  },
}