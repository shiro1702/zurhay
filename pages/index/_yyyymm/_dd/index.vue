<template>
  <div class="day-page">
    <div class="d-flex flex-column flex-md-row align-start justify-space-between">
      <v-date-picker
        :value="date"
        class="order-last order-md-0"
        color="primary lighten-1"
        locale="ru"
        elevation="4"
        no-title
        :first-day-of-week="1"
        @click:date="goToDate"
      ></v-date-picker>
      <div 
        class="ml-md-8" 
        :style="{width:'100%'}"
        v-touch="{
          left: () =>  {$router.push(prevLink)},
          right: () => {$router.push(nextLink)}
        }"
      >
        <div class="d-flex align-center justify-center justify-md-space-between mb-3 mb-md-6">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                fab
                text
                small
                class="mr-0 mr-sm-4"
                color="grey darken-2"
                nuxt
                :to="`/${$route.params.yyyymm}`"
              >
                <v-icon small>
                  mdi-calendar
                </v-icon>
                
              </v-btn>
            </template>
            <span>в календарь</span>
          </v-tooltip>
          <div class="d-flex align-center">
            <v-btn
              fab
              text
              small
              color="grey darken-2" 
              nuxt
              :to="prevLink"
              replace
            >
              <v-icon small>
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <div class="d-flex mx-0 mx-md-2">
              <v-tooltip top >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    class="day-page__moonicon mr-2"
                    v-bind="attrs"
                    v-on="on">
                    mdi-{{moon.name}}
                  </v-icon>
                </template>
                <span> Фаза луны - {{moon.percent}}%</span>
              </v-tooltip>
              <h2 class="text-subtitle-1 text-sm-subtitle-1 text-md-h6 text-no-wrap">{{moon.moonDate}}-й лунный день</h2>
            </div>
            <v-btn
              fab
              text
              small
              color="grey darken-2"
              nuxt
              :to="nextLink"
              replace
            >
              <v-icon small>
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </div>
          <v-btn
            class="ml-auto d-none d-sm-flex"
            color="grey darken-2" 
            :to="$route.path + '/edit'"
            replace
            nuxt
            fab
            text
            small
          >
            <v-icon small>
              mdi-pencil
            </v-icon>
          </v-btn>
        </div>
        <template v-if="dayInfo && dayInfo.info" >
          <div 
              v-if="dayInfo.custom && dayInfo.custom.text"
              class="mb-3 mb-sm-4" >
            <v-icon
              small
              color="primary"
              class="mr-2"
            >
              mdi-calendar
            </v-icon>
            <span>{{dayInfo.custom.text}}</span>
          </div>
          <div 
              v-if="dayInfo.travel && dayInfo.travel.text"
              class="mb-3 mb-sm-4" >
            <v-icon
              small
              :color="dayInfo.travel.positive?'green':'red'"
              class="mr-2"
            >
              mdi-airplane
            </v-icon>
            <span>{{dayInfo.travel.text}}</span>
          </div>
          <div 
              v-if="dayInfo.haircut && dayInfo.haircut.text" 
              class="mb-3 mb-sm-4" >
            <v-icon
              small
              :color="dayInfo.haircut.positive?'green':'red'"
              class="mr-2"
            >
              mdi-content-cut
            </v-icon>
            <span>{{dayInfo.haircut.text}}</span>
          </div>
          <div v-if="dayInfo.info" v-html="dayInfo.info" >
          </div>
        </template>
        <div v-else 
            class="mb-3 mb-sm-6" >
          пока нет информации
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getYYYYMMDD } from '@/assets/js/getDate.js'
import { getMoonPhase } from '@/assets/js/moon.js'

export default {
  head(){
    return {
      link: [
        {
          rel: 'prev',
          href: this.prevLink
        },
        {
          rel: 'next',
          href: this.nextLink
        },
        ...this.canonicalLink
      ]
    }
  },
  middleware({ params, redirect }) {
    // if (!params.yyyymm) {
    //   return redirect('/'+getYYYYMM())
    // }
  },

  async asyncData({ $axios, $config, params }) {
    try {
      const dayInfo = await $axios.$get(`/month/${params.yyyymm}/${params.yyyymm}-${params.dd}.json`)
      return { dayInfo, 'noInfo': false }
    } catch (error) {
      return { 'dayInfo': {}, 'noInfo': true }
    }
  },
  data: () => ({
    // date: null,
  }),
  // created(){
  //   this.date =`${this.$route.params.yyyymm}-${this.$route.params.dd}`;
  // },
  // beforeRouteUpdate(to, from, next){
  //   this.date =`${this.$route.params.yyyymm}-${this.$route.params.dd}`;
  //   next();
  // },
  computed: {
    moon(){
      return getMoonPhase(new Date(this.date) );
    },
    date(){
        return `${this.$route.params.yyyymm}-${this.$route.params.dd}`;
    },
    prevLink(){
      return '/'+getYYYYMMDD(-1, `${this.$route.params.yyyymm}-${this.$route.params.dd}`,'-', '/');
    },
    nextLink(){
      return '/'+getYYYYMMDD(1, `${this.$route.params.yyyymm}-${this.$route.params.dd}`,'-', '/');
    },
    canonicalLink(){
      if (this.noInfo) {
        return [{
          rel: 'canonical',
          href: '/'
        }]
      }
      return [];
    },
  },
  methods: {
    goToDate(value){
      this.$router.push('/'+getYYYYMMDD(0, `${value }`,'-', '/'));
    }
  }
  
}
</script>

<style lang="sass">
.day-page
  &__moonicon
    display: inline-block
</style>