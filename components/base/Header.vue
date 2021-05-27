<template>
  <v-app-bar
    app
    color="white"
  >
    <!-- flat -->
    <v-container class="pa-0 fill-height max-container ">
      <v-avatar
        class="mr-10"
        color="grey darken-1"
        size="32"
      ></v-avatar>

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