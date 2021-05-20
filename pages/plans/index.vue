<template>
  <div class="day-page">
    <h1 class="title text-h2 mb-8">
      Планы по развитию
    </h1>
  <v-container style="max-width: 600px;">

  <v-timeline
      dense
      clipped
      align-top
    >

      <v-timeline-item
        v-for="(event, index) in timeline"
        :key="index"
        class="mb-4"
        small
      >
      
        <v-row justify="space-between">
          <v-col
            cols="3"
            v-text="event.date"
          ></v-col>
          <v-col
            cols="9"
            
          >
          <div v-text="event.text"></div>
          <div 
              v-if="event.feedback"
              class="d-flex flex-row justify-start align-center mt-4">
            <span class="mr-2">Написать мне в </span>
            <v-btn
              tag="a"
              href="tg://resolve?domain=arsalanbar"
              color="primary"
            >
              телеграмм
              <v-icon
                class="mr-2"
                right
                dark
              >
                mdi-message-arrow-right-outline
              </v-icon>
            </v-btn>
          </div>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
    </v-container>
  </div>
</template>
<script>
export default {
  data:() => ({
    timeline: [
      {
        text: 'test1',
        date: '20-09-2021',
      },
      {
        text: 'test1',
        date: '20-09-2021',
        feedback: true
      }
    ],
  }),
}
</script>