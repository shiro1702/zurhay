<template>
  <v-app>
    <a-header/>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <div class="a-alert">
      <v-alert
        border="left"
        dismissible
        colored-border
        color="primary accent-4"
        elevation="4"
      >
      <p>Сейчас сайт наполнен частично со стороних ресурсов.
      Ведеться поиск буддисткого астролога. </p>
      </v-alert>
    </div>

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
  }
}
</script>

<style lang="sass">
.a-alert
  position: fixed
  top: 70px
  right: 0
  max-width: 450px

</style>