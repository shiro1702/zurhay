<template>
  <div class="day-page">
    <div class="d-flex flex-column flex-md-row align-start justify-space-between ">
      <v-date-picker
        :value="date"
        class="order-last order-sm-0"
        color="primary lighten-1"
        locale="ru"
        elevation="4"
        no-title
        :first-day-of-week="1"
        @click:date="goToDate"
      ></v-date-picker>
      <div class="ml-sm-8" :style="{width:'100%'}">
        <div class="d-flex align-center justify-center justify-sm-space-between mb-6">
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
              <v-icon
                class="day-page__moonicon mr-2"
                >
                mdi-{{moon.name}}
              </v-icon>
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
        <!-- <div v-if="dayInfo && dayInfo.info" v-html="dayInfo.info" >
        </div> -->

        <v-switch
          v-model="dayInfo.haircut.positive"
          label="haircut positive"
          inset
        ></v-switch>
        <v-text-field
          v-model="dayInfo.haircut.text"
          label="haircut"
        ></v-text-field>
        <v-switch
          v-model="dayInfo.travel.positive"
          label="travel positive"
          inset
        ></v-switch>
        <v-text-field
          v-model="dayInfo.travel.text"
          label="travel"
        ></v-text-field>
        <Editor v-model="dayInfo.info"/>
        <v-btn
          
          :loading="loading"
          :disabled="loading"
          color="primary"
          class="mt-6"
          @click="loadData"
        >
          скачать
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { getYYYYMMDD } from '@/assets/js/getDate.js'
import { getMoonPhase } from '@/assets/js/moon.js'

import { download } from '@/assets/js/download.js'

import Editor from "@/components/Editor";


let dayInfoDefault = {
  haircut: {
      positive: false,
      text: ''
  },
  travel: {
    positive: false,
    text: ''
  },
  info: ''
};

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

  components: {
    Editor,
  },

  async asyncData({ $axios, $config, params }) {
    try {
      const dayInfo = await $axios.$get(`/month/${params.yyyymm}/${params.yyyymm}-${params.dd}.json`)
      return { dayInfo: Object.assign({}, dayInfoDefault, dayInfo) }
    } catch (error) {
      return { 'dayInfo': Object.assign({}, dayInfoDefault) }
    }
  },
  data: () => ({
    loading: false,
  }),
  computed: {
    moon(){
      return getMoonPhase(new Date(this.date) );
    },
    date(){
        return `${this.$route.params.yyyymm}-${this.$route.params.dd}`;
    },
    prevLink(){
      return '/'+getYYYYMMDD(-1, `${this.$route.params.yyyymm}-${this.$route.params.dd}`,'-', '/') + '/edit';
    },
    nextLink(){
      return '/'+getYYYYMMDD(1, `${this.$route.params.yyyymm}-${this.$route.params.dd}`,'-', '/') + '/edit';
    },
  },
  methods: {
    goToDate(value){
      this.$router.push('/'+getYYYYMMDD(0, `${value }`,'-', '/')+'/edit');
    },
    loadData() {
      this.loading = true;
      download(JSON.stringify(this.dayInfo), `${getYYYYMMDD(0, `${this.$route.params.yyyymm}-${this.$route.params.dd}`)}.json`, 'text/json');
      this.loading = false;
    }
  }
  
}
</script>

<style lang="sass">
.day-page
  &__moonicon
    display: inline-block
</style>