<template>
  <v-footer
    dark
    color="primary lighten-1"
  >
  <v-container class="py-0 fill-height max-container">
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <span class="body-1 font-weight-medium">Подписывайтесь на автора в социальных сетях!</span>

      <v-spacer></v-spacer>

      <v-btn
        v-for="link in socialLinks"
        :key="link.icon"
        class="mx-3"
        dark
        icon
        tag="a"
        :href="link.href"
        target="_blank"
      >
        <v-icon size="24px">
          {{ link.icon }}
        </v-icon>
      </v-btn>
    </v-row>
  </v-container>

  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      socialLinks: [
        {
          icon: 'mdi-vk',
          href: 'https://vk.com/ars.bar.developer'
        },
        {
          icon: 'mdi-instagram',
          href: 'https://www.instagram.com/ars.bar.dev/'
        },
        {
          icon: 'mdi-twitter',
          href: 'https://twitter.com/arssaybar'
        }
      ],
    }),
  }
</script>