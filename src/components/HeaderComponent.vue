<template>
  <v-app-bar app color="primary" clipped-left>
    <v-app-bar-nav-icon @click="handleBurger" color="white"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderComponent',
  methods: {
    handleBurger() {
      this.$store.dispatch('changeDrawerStatus');
    },
  },
};
</script>