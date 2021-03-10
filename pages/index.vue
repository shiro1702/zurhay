<template>

  <div>
    <h1 class="title text-h1">Зурхай</h1>
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
              @click="setToday"
            >
              Today
            </v-btn>
            <v-btn
              fab
              text
              small
              color="grey darken-2"
              @click="prev"
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
              @click="next"
            >
              <v-icon small>
                mdi-chevron-right
              </v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="500">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            @click:date="viewDay"
          >
            <template v-slot:day="{ past, date }">
              <v-row
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
              </v-row>
            </template>
          </v-calendar>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import { VBtn, VChip } from 'vuetify/lib'
export default {
  // components: { VBtn }

  data: () => ({
    focus: '',
    tracked: {
      '2021-03-09': [23, 45, 10],
      '2021-03-08': [10],
      '2021-03-07': [0, 78, 5],
      '2021-03-06': [0, 0, 50],
      '2021-03-05': [0, 10, 23],
      '2021-03-04': [2, 90],
      '2021-03-03': [10, 32],
      '2021-03-02': [80, 10, 10],
      '2021-03-01': [20, 25, 10],
    },
    colors: ['#1867c0', '#fb8c00', '#000000'],
    category: ['Development', 'Meetings', 'Slacking'],
  }),
  methods: {
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    viewDay({date}){
      console.log(date);
      this.focus = date
    },
  },
  created(){
    this.focus = new Date();
  },
  mounted () {
    this.$refs.calendar.checkChange()
  },
}
</script>

<style lang="sass">
.title
  font-size: 24px
  font-weight: normal
</style>