<template>
  <v-app>
    <a-header></a-header>
    <v-main>
      <Nuxt />
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