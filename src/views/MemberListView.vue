<template>
  <v-container>
    <v-col>
      <v-row class="d-flex justify-center">{{ this.header }}</v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    header() {
      return 'Member List';
    },
  },
};
</script>
