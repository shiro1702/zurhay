<template>
  <div>
    <h1 class="title text-h2">Зурхай {{title}}</h1>
      <NuxtChild  />
  </div>
</template>

<script>
// import { VBtn, VChip } from 'vuetify/lib'

import { getYYYYMM } from '@/assets/js/getDate.js'

export default {
  head(){
    return {
      title: `Зурхай ${this.title}`,
    }
  },
  // components: { VBtn }
  // async asyncData({ params, redirect }) {
  //   redirect('/2021-03')
  // },
  middleware({ params, redirect }) {
    if (!params.yyyymm) {
      return redirect('/'+getYYYYMM())
    }
  },
  data: () => ({
    focus: '',
    todayLink: '/'+getYYYYMM(),
  }),
  computed: {
    title(){
      if ( this.$route.name === 'index-yyyymm') {
        let options = {year: 'numeric', month: 'long'};
        let d = new Date(`${this.$route.params.yyyymm}-1`).toLocaleString('ru', options)
        return 'на ' + d
      }
      if ( this.$route.name === 'index-yyyymm-dd') {
        let options = {year: 'numeric', month: 'long', day: 'numeric'};
        let d = new Date(`${this.$route.params.yyyymm}-${this.$route.params.dd}`).toLocaleString('ru', options)
        return 'на ' + d
      }
      return ''
    },
  },
  
}
</script>

<style lang="sass">
.title
  font-size: 24px
  font-weight: normal
</style>