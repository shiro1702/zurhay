<template>
  <v-footer
    dark
    padless
  >

      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title >
          <v-container class="py-0 fill-height">
            <span class="body-1 font-weight-medium">Подписывайтесь на автора в социальных сетях!</span>

            <v-spacer></v-spacer>

            <v-btn
              v-for="link in socialLinks"
              :key="link.icon"
              class="mx-4"
              dark
              icon
            >
              <v-icon size="24px">
                {{ link.icon }}
              </v-icon>
            </v-btn>

          </v-container>
        </v-card-title>

      </v-card>

  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      socialLinks: [
        {
          icon: 'mdi-vk',
          linl: '/'
        },
        {
          icon: 'mdi-instagram',
          linl: '/'
        },
        {
          icon: 'mdi-twitter',
          linl: '/'
        }
      ],
    }),
  }
</script>