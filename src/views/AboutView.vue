<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ this.getMainMessage() }}</h2>
    <button @click="updateMainMessage">update About page</button>
  </div>
</template>

<style>
button {
  width: 100px;
  height: 100px;
}
</style>

<script>
export default {

  methods: {
    getMainMessage() {
      // Access the value from the Vuex store
      return this.$store.state.message;
    },
    updateMainMessage() {
      // Dispatch an action to update the Vuex value
      this.$store.dispatch('updateMainMessage', 'I am updated message');
    }
  },
}
</script>