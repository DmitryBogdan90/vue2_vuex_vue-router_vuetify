<template>
  <v-navigation-drawer v-model="drawerStatus"
                       @input="handleDrawerInput"
                       app
                       temporary
                       left
                       temporary-full-height>
    <v-list>
      <v-list-item v-for="(item, index) in memberStatusMenu"
                   :key="index"
                   ref="listItems"
                   @click="handleMemberStatus(item.value, index)"
                   :tabindex="getMemberStatus === item.value ? 0 : -1">
        <v-list-item-icon>
          <v-icon color="primary"> {{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          {{ item.text }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { MEMBER_STATUS_MENU } from '@/global/variables';

export default {
  name: 'DrawerComponent',
  data() {
    return {
      memberStatusMenu: MEMBER_STATUS_MENU,
    };
  },
  computed: {
    drawerStatus() {
      return this.$store.state.isDrawerOpen;
    },
    getMemberStatus() {
      return this.$store.state.memberStatus;
    },
  },
  methods: {
    handleDrawerInput(value) {
      if (value !== this.$store.state.isDrawerOpen) {
        this.$store.dispatch('changeDrawerStatus');
      }
    },
    handleMemberStatus(status) {
      this.$store.dispatch('changeDrawerStatus');
      this.$store.dispatch('changeMemberStatus', status);
    },
  },
};
</script>
