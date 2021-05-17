<template>
  <v-row>
    <v-col>
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
      <v-sheet height="500">
        <v-calendar-monthly
          ref="calendar"
          color="primary"
          :start="`${$route.params.yyyymm}-1`"
          :end="`${$route.params.yyyymm}-1`"
          locale="ru"
          :show-month-on-first="false"
          :weekdays="[ 1, 2, 3, 4, 5, 6, 0]"
        >
        
          <template v-slot:day="{ date }">
            <v-container>
              <v-row 
              align="center"
              justify="end"
              >
                <template v-if="tracked[date]"> 
                  <v-tooltip bottom v-if="tracked[date].travel && tracked[date].travel.positive">
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        small
                        v-bind="attrs"
                        v-on="on"
                        class="mr-2"
                      >
                        mdi-airplane
                      </v-icon>
                    </template>
                    <span>  </span>
                  </v-tooltip>
                  <v-tooltip bottom v-if="tracked[date].haircut && tracked[date].haircut.positive" >
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        small
                        v-bind="attrs"
                        v-on="on"
                        class="mr-2"
                      >
                        mdi-content-cut
                      </v-icon>
                    </template>
                    <span>{{tracked[date].haircut.text}}</span>
                  </v-tooltip>
                </template>
                <template v-else>
                  <v-tooltip bottom v-if="!tracked[date]">
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        small
                        v-bind="attrs"
                        v-on="on"
                        class="mr-2"
                      >
                        mdi-information-outline
                      </v-icon>
                    </template>
                    <span> нет информации </span>
                  </v-tooltip>
                </template>
              </v-row>
            </v-container>
            <!-- <span> {{getMoonPhase(date).phase}}</span>
            -->
            <!-- <v-icon
            small
            >
              mdi-{{getMoonPhase(date).name}}
            </v-icon>
            <span> {{getMoonPhase(date).moonDate}}</span> -->

            <!-- <v-row
              class="fill-height"
            >
              <template v-if="past && tracked[date]">
                <v-sheet
                  v-for="(percent, i) in tracked[date]"
                  :key="i"
                  :title="category[i]"
                  :color="colors[i]"
                  :width="`${percent}%`"
                  height="100%"
                  tile
                ></v-sheet>
              </template>
            </v-row> -->
          </template>
          
          <template v-slot:day-label="{ date, day, month, year,  present,}">
            <v-btn
              fab
              rounded
              small
              color="primary"
              :text="!present"
              nuxt
              :to="`/${year}-${month>9?month:'0'+month}/${day>9?day:'0'+day}`"
              > 
              <span class="date-text">
              {{day}} 
              </span>
            </v-btn>
            <span class="moon-date">
              <v-icon
              x-small
              >
                mdi-{{getMoonPhase(date).name}}
              </v-icon>
              <span class="moon-date__text"> {{getMoonPhase(date).moonDate}}</span>
            </span>
          </template>
        </v-calendar-monthly>
      </v-sheet>

    </v-col>
  </v-row>
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
        }
      ]
    }
  },

  async asyncData({ params, $axios }) {
    try {
      const tracked = await $axios.$get(`/month/${params.yyyymm}.json`)
      return { tracked }
    } catch (error) {
      return { }
    }
  },
  data: () => ({
    todayLink: '/'+getYYYYMM(),
    focus: '2021-03-14',
    colors: ['#1867c0', '#fb8c00', '#000000'],
    category: ['Development', 'Meetings', 'Slacking'],
  }),
  computed: {
    prevLink(){
      return '/'+getYYYYMM(-1, `${this.$route.params.yyyymm}-1`);
    },
    nextLink(){
      return '/'+getYYYYMM(1, `${this.$route.params.yyyymm}-1`);
    },
  },
  methods: {
    // viewDay({date}){
    //   console.log(date);
    //   this.focus = date
    // },
    getMoonPhase(date){
      return getMoonPhase(date)
    }
  },
  created(){
    this.focus = new Date();
    // this.focus = '2021-03-14';
    console.log(this.$route.params.yyyymm);
    console.log(`${this.$route.params.yyyymm}-1`);
  },
  mounted () {
    // this.$refs.calendar.checkChange();
    // console.log(this.$refs.calendar);
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