<template>
  <v-col>
    <MenuComponent />
    <MemberListComponent />
  </v-col>
</template>

<script>
import MemberListComponent from '@/components/MemberListComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';

export default {
  name: 'MemberList',
  components: {
    MemberListComponent,
    MenuComponent,
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
  z-index: 1;
  background: white;
}
</style>