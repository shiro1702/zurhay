<template>
  <div>
    <v-row>
      <v-col>
        info
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getYYYYMM } from '@/assets/js/getYYYYMM.js'

export default {
  middleware({ params, redirect }) {
    // if (!params.yyyymm) {
    //   return redirect('/'+getYYYYMM())
    // }
  },
  data: () => ({
  }),
  computed: {
    prevLink(){
      return '/'+getYYYYMM(-1, `${this.$route.params.yyyymm}-${this.$route.params.dd}`);
    },
    nextLink(){
      return '/'+getYYYYMM(1, `${this.$route.params.yyyymm}-${this.$route.params.dd}`);
    },
  },
  
}
</script>

<style lang="sass">
.title
  font-size: 24px
  font-weight: normal
</style>