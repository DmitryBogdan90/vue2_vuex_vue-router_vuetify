<template>
  <v-container>
    <v-col>
      <v-row class="d-flex justify-center">{{ this.header }}</v-row>
      <v-col>
        <p v-if="data">{{ data }}</p>
      </v-col>
    </v-col>
  </v-container>
</template>

<script>

export default {
  name: 'MemberList',
  computed: {
    header() {
      return 'Member List';
    },
    data() {
      return this.$store.state.data;
    },
  },
  created() {
    this.$store.dispatch('getData')
      .then(() => {
        console.log('Data fetched successfully!');
      })
      .catch((error) => {
        console.error('Error fetching data in component:', error);
      });
  },
};
</script>
