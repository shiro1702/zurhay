<template>
  <div class="day-page">
    <v-icon
      class="day-page__moonicon"
      >
      mdi-{{moon.name}}
    </v-icon>
    <h2>{{moon.moonDate}}-й лунный день</h2>
    <v-btn
      fab
      text
      small
      color="grey darken-2" 
      nuxt
      :to="prevLink"
    >
      <v-icon small>
        mdi-chevron-left
      </v-icon>
    </v-btn>
    <v-btn
      fab
      text
      small
      color="grey darken-2"
      nuxt
      :to="nextLink"
    >
      <v-icon small>
        mdi-chevron-right
      </v-icon>
    </v-btn>
    <v-row>
      <v-col>
        info
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getYYYYMMDD } from '@/assets/js/getDate.js'
import { getMoonPhase } from '@/assets/js/moon.js'

export default {
  middleware({ params, redirect }) {
    // if (!params.yyyymm) {
    //   return redirect('/'+getYYYYMM())
    // }
  },
  data: () => ({
  }),
  computed: {
    moon(){
      let date = new Date( `${this.$route.params.yyyymm}-${this.$route.params.dd}`)
      return getMoonPhase(date)
    },
    prevLink(){
      return '/'+getYYYYMMDD(-1, `${this.$route.params.yyyymm}-${this.$route.params.dd}`,'-', '/');
    },
    nextLink(){
      return '/'+getYYYYMMDD(1, `${this.$route.params.yyyymm}-${this.$route.params.dd}`,'-', '/');
    },
  },
  
}
</script>

<style lang="sass">
.day-page
  &__moonicon
    display: inline-block
</style>