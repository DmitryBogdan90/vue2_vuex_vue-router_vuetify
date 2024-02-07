<template>
  <v-app>
    <HeaderComponent />
    <v-layout>
      <DrawerComponent />
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import DrawerComponent from '@/components/DrawerComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    DrawerComponent,
    HeaderComponent,
  },
};
</script>
