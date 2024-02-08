<template>
  <v-data-table
    :headers="columnList"
    :items="memberList"
    item-key="id"
  >
    <template v-slot:body="{ items }">
      <tbody>
      <tr v-for="item in items"
          :key="item.id"
          @click="handleRowClick(item)"
          :class="{ 'highlighted-row': isFocusedMember(item.id) }">
        <td>
          <v-icon>
            {{ item.status ? 'mdi-cloud-check' : 'mdi-cloud-alert' }}
          </v-icon>
        </td>
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>{{ item.company }}</td>
        <td>{{ item.job }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.hobby }}</td>
      </tr>
      </tbody>
    </template>
  </v-data-table>
</template>

<script>
import { COLUMN_LIST, MEMBER_STATUS } from '@/global/variables';

export default {
  name: 'MemberListComponent',
  computed: {
    memberList() {
      switch (this.$store.state.memberStatus) {
        case MEMBER_STATUS.CHECKED:
          return  this.$store.state.memberList.filter(member => member.status);
        case MEMBER_STATUS.UNCHECKED:
          return this.$store.state.memberList.filter(member => !member.status);
        default:
          return this.$store.state.memberList
      }
    },
    columnList() {
      return COLUMN_LIST;
    },
  },
  methods: {
    handleRowClick(item) {
      this.$store.dispatch('focusMember', item.id)
    },
    isFocusedMember(id) {
      return this.$store.state.focusedMember === id;
    }
  }
};
</script>

<style>
.highlighted-row {
  background-color: lightgray;
}
</style>