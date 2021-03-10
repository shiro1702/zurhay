<template>
  <v-app>
    <a-header></a-header>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <TheFooter /> -->
  </v-app>
</template>
<script>
import Header from '~/components/base/Header.vue'
export default {
  components: {
    'a-header': Header
  }
}
</script>