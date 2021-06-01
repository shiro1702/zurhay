<template>
  <v-app-bar
    app
    color="white"
  >
    <!-- flat -->
    <v-container class="pa-0 fill-height max-container ">
      <v-btn
        to="/"
        elevation="2"
        nuxt
        fab
        small
      >
        <svg width="32" height="32" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="20" stroke="#3A4CA5" stroke-width="10"/>
          <circle cx="100" cy="100" r="70" stroke="#3A4CA5" stroke-width="10"/>
          <line x1="100" y1="26" x2="100" y2="77" stroke="#3A4CA5" stroke-width="10" stroke-linejoin="round"/>
          <line x1="153.536" y1="47.5355" x2="117.536" y2="83.5355" stroke="#3A4CA5" stroke-width="10" stroke-linejoin="round"/>
          <line x1="173" y1="99" x2="123" y2="99" stroke="#3A4CA5" stroke-width="10" stroke-linejoin="round"/>
          <line x1="153.464" y1="151.536" x2="117.464" y2="115.536" stroke="#3A4CA5" stroke-width="10" stroke-linejoin="round"/>
          <line x1="100" y1="173" x2="100" y2="123" stroke="#3A4CA5" stroke-width="10" stroke-linejoin="round"/>
          <line x1="49.4645" y1="149.464" x2="85.4645" y2="113.464" stroke="#3A4CA5" stroke-width="10" stroke-linejoin="round"/>
          <line x1="28" y1="99" x2="78" y2="99" stroke="#3A4CA5" stroke-width="10" stroke-linejoin="round"/>
          <line x1="50.5355" y1="49.4645" x2="85.5355" y2="84.4645" stroke="#3A4CA5" stroke-width="10" stroke-linejoin="round"/>
          <circle cx="100" cy="25" r="7.5" stroke="#3A4CA5" stroke-width="5"/>
          <circle cx="153" cy="47" r="2.5" stroke="#3A4CA5" stroke-width="5"/>
          <circle cx="153" cy="153" r="2.5" stroke="#3A4CA5" stroke-width="5"/>
          <circle cx="47" cy="47" r="2.5" stroke="#3A4CA5" stroke-width="5"/>
          <circle cx="47" cy="153" r="2.5" stroke="#3A4CA5" stroke-width="5"/>
          <circle cx="175" cy="100" r="7.5" stroke="#3A4CA5" stroke-width="5"/>
          <circle cx="100" cy="175" r="7.5" stroke="#3A4CA5" stroke-width="5"/>
          <circle cx="25" cy="100" r="7.5" stroke="#3A4CA5" stroke-width="5"/>
        </svg>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="link.name"
        text
        nuxt
        :to="{name: link.name, params: link.params}"
        class="mr-2 d-none d-sm-flex"
        :class="{'v-btn--active': $route.name === link.name }"
      >
        {{ link.title }}
      </v-btn>


      <!-- <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive> -->
      
          <v-menu
            bottom
            right
            offset-y
            transition="slide-x-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="d-flex d-sm-none"
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="item in links"
                :key="item.name"
                nuxt
                :to="{name: item.name}"
              >
                <v-list-item-title 
                >{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
    </v-container>
  </v-app-bar>
</template>
<script>
import { getYYYYMM } from '@/assets/js/getDate.js'
export default {
  data: () => ({
    links: [
      {
        title: 'Календарь',
        name: 'index-yyyymm',
        params: {yyyymm: getYYYYMM()}
      },
      {
        title: 'На сегодня',
        name: 'index-today'
      },
      {
        title: 'О проекте',
        name: 'about'
      },
      // {
      //   title: 'Планы по развитию проекта',
      //   name: 'plans'
      // }
    ],
  }),
}
</script>