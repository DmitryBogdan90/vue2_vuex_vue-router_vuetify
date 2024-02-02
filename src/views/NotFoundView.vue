<template>
  <v-container>
    <v-col class="d-flex flex-column align-center">
      <v-row>
        <h1>404 Not Found</h1>
      </v-row>
      <v-row>
        <p>The requested page does not exist.</p>
      </v-row>
      <v-row>
        <router-link to="/">
          <v-btn color="primary">Return</v-btn>
        </router-link>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'NotFoundView',
};
</script>