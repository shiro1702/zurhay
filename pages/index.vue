<template>
  <div>
    <h1 class="title text-h5 text-sm-h4 text-md-h3 mb-4 mb-sm-8">Зурхай {{title}}</h1>
    <NuxtChild />
  </div>
</template>

<script>
// import { VBtn, VChip } from 'vuetify/lib'

import { getYYYYMM, getYYYYMMDD } from '@/assets/js/getDate.js'

export default {
  head(){
    return {
      title: `Зурхай ${this.pageTitle}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.pageDesc}`
        }
      ],
    }
  },
  // components: { VBtn }
  // async asyncData({ params, redirect }) {
  //   redirect('/2021-03')
  // },
  // middleware({ route, params, redirect }) {

  //   console.log('middleware', route.name);
  //   console.log('params', params);
  //   if (!params.yyyymm) {
  //     params.yyyymm = getYYYYMM()
  //     // return redirect('/'+getYYYYMM())
  //   }
  //   return;
  // },
  data: () => ({
    // focus: '',
    // todayLink: '/'+getYYYYMM(),
  }),
  computed: {
    pageTitle(){
      if ( this.$route.name === 'index') {
        let options = {year: 'numeric', month: 'long'};
        let d = new Date(`${getYYYYMM()}-1`).toLocaleString('ru', options)
        return 'на месяц ' + d;
      }
      if ( this.$route.name === 'index-yyyymm') {
        let options = {year: 'numeric', month: 'long'};
        let d = new Date(`${this.$route.params.yyyymm}-1`).toLocaleString('ru', options)
        return 'на месяц ' + d;
      }
      if ( this.$route.name === 'index-today' ) {
        return 'на сегодня';
      }
      if ( this.$route.name === 'index-yyyymm-dd' || this.$route.name === 'index-yyyymm-dd-edit' ) {
        let options = {year: 'numeric', month: 'long', day: 'numeric'};
        let d = new Date(`${this.$route.params.yyyymm}-${this.$route.params.dd}`).toLocaleString('ru', options)
        return 'на ' + d;
      }
      return ''
    },
    pageDesc(){
      if ( this.$route.name === 'index') {
        let options = {year: 'numeric', month: 'long'};
        let d = new Date(`${getYYYYMM()}-1`).toLocaleString('ru', options)
        return 'Зурхай на месяц ' + d + ' лунный календарь благоприятных дней для стрижки и путешествий';
      }
      if ( this.$route.name === 'index-yyyymm') {
        let options = {year: 'numeric', month: 'long'};
        let d = new Date(`${this.$route.params.yyyymm}-1`).toLocaleString('ru', options)
        return 'Зурхай на месяц ' + d + ' лунный календарь благоприятных дней для стрижки и путешествий';
      }
      if ( this.$route.name === 'index-today' ) {
        return 'Зурхай на сегодня - можно ли стичься';
      }
      if ( this.$route.name === 'index-yyyymm-dd' || this.$route.name === 'index-yyyymm-dd-edit' ) {
        let d = '';
        if (`${this.$route.params.yyyymm}-${this.$route.params.dd}` === getYYYYMMDD()) {
          d = 'сегодня'
        } else {
          let options = {year: 'numeric', month: 'long', day: 'numeric'};
          d = new Date(`${this.$route.params.yyyymm}-${this.$route.params.dd}`).toLocaleString('ru', options)
        }
        return 'Зурхай на ' + d + ' - лунный календарь благоприятных дней для стрижки и путешествий';
      }
      return 'Зурхай - лунный календарь благоприятных дней для стрижки и путешествий';
    },
    title(){
      if ( this.$route.name === 'index') {
        let options = {year: 'numeric', month: 'long'};
        let d = new Date(`${getYYYYMM()}-1`).toLocaleString('ru', options)
        return 'на ' + d
      }
      if ( this.$route.name === 'index-yyyymm') {
        let options = {year: 'numeric', month: 'long'};
        let d = new Date(`${this.$route.params.yyyymm}-1`).toLocaleString('ru', options)
        return 'на ' + d
      }
      if ( this.$route.name === 'index-today' ) {
        return 'на сегодня';
      }
      if ( this.$route.name === 'index-yyyymm-dd' || this.$route.name === 'index-yyyymm-dd-edit' ) {
        let options = {year: 'numeric', month: 'long', day: 'numeric'};
        let d = new Date(`${this.$route.params.yyyymm}-${this.$route.params.dd}`).toLocaleString('ru', options)
        return 'на ' + d
      }
      return ' - буддийский лунный календар'
    },
  },
  
}
</script>

<style lang="sass">
// .title
//   font-size: 24px
//   font-weight: normal
</style>