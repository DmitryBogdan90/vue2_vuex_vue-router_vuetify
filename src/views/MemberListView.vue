<template>
  <MemberListComponent />
</template>

<script>
import MemberListComponent from '@/components/MemberListComponent.vue';

export default {
  name: 'MemberList',
  components: {
    MemberListComponent,
  },
  created() {
    this.$store.dispatch('getData');
  },
};
</script>

<style>
.v-data-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1; /* Ensure pagination controls appear above other content */
  background: white;
}
</style>