<template>
  <div>
    <div v-if="tracked && tracked.index && tracked.index.info" 
      class="mb-4"
      v-html="tracked.index.info"></div>
    <v-sheet height="64">
      <v-toolbar
        flat
      >
        <v-btn
          outlined
          class="mr-4"
          color="grey darken-2"
          nuxt
          :to="todayLink"
        >
          Сегодня
        </v-btn>
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
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-sheet>
    <v-calendar-monthly
      ref="calendar"
      color="primary"
      :start="`${$route.params.yyyymm}-1`"
      :end="`${$route.params.yyyymm}-1`"
      locale="ru"
      :show-month-on-first="false"
      :weekdays="[ 1, 2, 3, 4, 5, 6, 0]"
    >
    
      <template v-slot:day-label="{ date, day, month, year,  present,}">
        <NuxtLink class="d-flex flex-row justify-center align-center"
            :to="`/${year}-${month>9?month:'0'+month}/${day>9?day:'0'+day}`">
          <v-btn
            fab
            rounded
            small
            color="primary"
            :text="!present"
            > 
            <span class="date-text">
            {{day}} 
            </span>
          </v-btn>
          <v-tooltip top v-if="$vuetify.breakpoint.name != 'xs'" >
            <template v-slot:activator="{ on, attrs }">
              <span class="moon-date ml-auto" 
                  v-bind="attrs"
                  v-on="on">
                <v-icon
                  small
                >
                  mdi-{{getMoonPhase(date).name}}
                </v-icon>
                <span class="moon-date__text"> {{getMoonPhase(date).moonDate}}</span>
              </span>
            </template>
            <span> Фаза луны - {{getMoonPhase(date).percent}}%</span>
          </v-tooltip>
        </NuxtLink>
      </template>
      
      <template v-slot:day="{ date }">
        <div class="d-flex flex-row justify-end pb-2">
          <v-tooltip max-width="200" bottom v-if="tracked && tracked[date] && tracked[date].custom && tracked[date].custom.text">
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                :x-small="$vuetify.breakpoint.name == 'xs'"
                :small="$vuetify.breakpoint.name != 'xs'"
                v-bind="attrs"
                v-on="on"
                color="primary"
                class="mr-1 mr-sm-2"
              >
                mdi-calendar
              </v-icon>
            </template>
            <span>{{tracked[date].custom.text}}</span>
          </v-tooltip>
          <v-tooltip max-width="200" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                :x-small="$vuetify.breakpoint.name == 'xs'"
                :small="$vuetify.breakpoint.name != 'xs'"
                v-bind="attrs"
                v-on="on"
                :color="((tracked && tracked[date] && tracked[date].travel)? tracked[date].travel.positive: getMoonPhase(date).zurhay.travel.positive )?'green':'red'"
                class="mr-1 mr-sm-2"
              >
                mdi-airplane
              </v-icon>
              <span class="d-none">Путешествие - {{(tracked && tracked[date] && tracked[date].travel && tracked[date].travel.text) || getMoonPhase(date).zurhay.travel.text }}</span>
            </template>
            <span>{{(tracked && tracked[date] && tracked[date].travel && tracked[date].travel.text) || getMoonPhase(date).zurhay.travel.text }}</span>
          </v-tooltip>
          <v-tooltip max-width="200" bottom >
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                :x-small="$vuetify.breakpoint.name == 'xs'"
                :small="$vuetify.breakpoint.name != 'xs'"
                v-bind="attrs"
                v-on="on"
                :color="((tracked && tracked[date] && tracked[date].haircut)? tracked[date].haircut.positive: getMoonPhase(date).zurhay.haircut.positive )?'green':'red'"
                class="mr-1 mr-sm-2"
              >
                mdi-content-cut
              </v-icon>
              <span class="d-none">Стрижка волос - {{(tracked && tracked[date] && tracked[date].haircut && tracked[date].haircut.text) || getMoonPhase(date).zurhay.haircut.text }}</span>
            </template>
            <span>{{(tracked && tracked[date] && tracked[date].haircut && tracked[date].haircut.text) || getMoonPhase(date).zurhay.haircut.text }}</span>
          </v-tooltip>
          <template v-if="!(tracked && tracked[date])">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  :x-small="$vuetify.breakpoint.name == 'xs'"
                  :small="$vuetify.breakpoint.name != 'xs'"
                  v-bind="attrs"
                  v-on="on"
                  class="mr-1 mr-sm-2"
                >
                  mdi-information-outline
                </v-icon>
              </template>
              <span> нет информации </span>
            </v-tooltip>
          </template>
        </div>
      </template>
    </v-calendar-monthly>
  </div>
</template>

<script>

import { getMoonPhase } from '@/assets/js/moon.js'
import { getYYYYMM } from '@/assets/js/getDate.js'

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

  async asyncData({ $axios, $config, params }) {
    return $axios.$get(`/month/${params.yyyymm}.json`)
      .then(
        (data)=>({tracked: data, 'noInfo': false })
        , 
        (error)=>({ tracked: null, 'noInfo': false })
      );
  },
  data: () => ({
    // todayLink: '/'+getYYYYMM(),
    todayLink: '/today'
  }),
  computed: {
    date(){
      return `${this.$route.params.yyyymm}-1`;
    },
    prevLink(){
      return '/'+getYYYYMM(-1, `${this.$route.params.yyyymm}-1`);
    },
    nextLink(){
      return '/'+getYYYYMM(1, `${this.$route.params.yyyymm}-1`);
    },
    canonicalLink(){
      if (this.$route.params.yyyymm === getYYYYMM() || this.noInfo) {
        return [{
          rel: 'canonical',
          href: '/'
        }]
      }
      return [];
    }
  },
  methods: {
    getMoonPhase(date){
      return getMoonPhase(date)
    },
    functionEvents (date) {
      const [,, day] = date.split('-')
      if ([12, 17, 28].includes(parseInt(day, 10))) return true
      if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
      return false
    },
  },
}
</script>

<style lang="sass">
.date-text
  font-size: 16px
.moon-date
  position: absolute
  top: 15px
  right: 6px
  opacity: 0.5
  font-size: 12px
  font-weight: normal
  &__text
    vertical-align: middle
</style>