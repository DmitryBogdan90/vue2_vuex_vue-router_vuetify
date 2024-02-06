<template>
  <v-app>
    <HeaderComponent />
    <v-layout>
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
};
</script>
