<template>
  <v-app>
    <a-header/>

    <v-main>
      <v-container class="max-container">
        <Nuxt />
      </v-container>
    </v-main>
    <a-footer/>
  </v-app>
</template>
<script>
import Header from '~/components/base/Header.vue'
import Footer from '~/components/base/Footer.vue'

export default {
  components: {
    'a-header': Header,
    'a-footer': Footer
  },
}
</script>

<style lang="sass">
.a-alert
  position: fixed
  top: 70px
  right: 0
  max-width: 450px

</style>