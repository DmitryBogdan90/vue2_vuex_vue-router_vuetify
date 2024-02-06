<template>
  <v-data-table
    :headers="columnList"
    :items="memberList"
    item-key="id"
  >
    <template v-slot:member="props">
      <tr>
        <td>{{ props.member.status }}</td>
        <td>{{ props.member.firstName }}</td>
        <td>{{ props.member.lastName }}</td>
        <td>{{ props.member.company }}</td>
        <td>{{ props.member.job }}</td>
        <td>{{ props.member.phone }}</td>
        <td>{{ props.member.email }}</td>
        <td>{{ props.member.hobby }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import { COLUMN_LIST } from '@/utils/variables';

export default {
  name: 'MemberListComponent',
  computed: {
    memberList() {
      return this.$store.state.memberList;
    },
    columnList() {
      return COLUMN_LIST;
    },
  },
};
</script>