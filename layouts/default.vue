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

  head: {
    title: `Зурхай - буддийский лунный календар`,
    meta: [
        { name: 'yandex-verification', content: '0993204c71aaf55b' },
        {
          hid: 'description',
          name: 'description',
          content: 'Зурхай - лунный календарь благоприятных дней для стрижки и путешествий'
        }
    ],
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