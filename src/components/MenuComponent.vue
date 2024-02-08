<template>
  <v-toolbar color="primary" dark>
    <v-toolbar-title>
      <span class="title">{{ statusMember }}</span>
      <v-btn @click="updateMemberList" icon class="rounded-circle">
        <v-icon>mdi-update</v-icon>
      </v-btn>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          Действия
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="handleAction('search')">
          <v-list-item-title>Поиск</v-list-item-title>
        </v-list-item>
        <v-list-item @click="handleAction('create')">
          <v-list-item-title>Добавить</v-list-item-title>
        </v-list-item>
        <v-list-item :disabled="!focusedUserId" @click="handleAction('patch')">
          <v-list-item-title>Изменить</v-list-item-title>
        </v-list-item>
        <v-list-item :disabled="!focusedUserId" @click="handleAction('delete')">
          <v-list-item-title>Удалить</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-dialog v-model="createModalOpen">
      <template v-slot:activator="{ on }"></template>
      <v-card>
        <v-card-title>Create User</v-card-title>
        <v-card-text>
          <v-text-field v-model="newUser.firstName" label="First Name"></v-text-field>
          <v-text-field v-model="newUser.lastName" label="Last Name"></v-text-field>
          <v-text-field v-model="newUser.company" label="Company"></v-text-field>
          <v-text-field v-model="newUser.job" label="Job"></v-text-field>
          <v-text-field v-model="newUser.phone" label="Phone"></v-text-field>
          <v-text-field v-model="newUser.email" label="Email"></v-text-field>
          <v-text-field v-model="newUser.hobby" label="Hobby"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="closeCreateModal">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="createUser">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="patchModalOpen">
      <template v-slot:activator="{ on }"></template>
      <v-card>
        <v-card-title>Edit User</v-card-title>
        <v-card-text>
          <v-text-field v-model="editedUser.firstName" label="First Name"></v-text-field>
          <v-text-field v-model="editedUser.lastName" label="Last Name"></v-text-field>
          <v-text-field v-model="editedUser.company" label="Company"></v-text-field>
          <v-text-field v-model="editedUser.job" label="Job"></v-text-field>
          <v-text-field v-model="editedUser.phone" label="Phone"></v-text-field>
          <v-text-field v-model="editedUser.email" label="Email"></v-text-field>
          <v-text-field v-model="editedUser.hobby" label="Hobby"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="closePatchModal">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="patchUser">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="searchModalOpen">
      <template v-slot:activator="{ on }"></template>
      <v-card>
        <v-card-title>Search User</v-card-title>
        <v-card-text>
          <v-text-field v-model="searchedUser.firstName" label="First Name"></v-text-field>
          <v-text-field v-model="searchedUser.lastName" label="Last Name"></v-text-field>
          <v-text-field v-model="searchedUser.company" label="Company"></v-text-field>
          <v-text-field v-model="searchedUser.job" label="Job"></v-text-field>
          <v-text-field v-model="searchedUser.phone" label="Phone"></v-text-field>
          <v-text-field v-model="searchedUser.email" label="Email"></v-text-field>
          <v-text-field v-model="searchedUser.hobby" label="Hobby"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="closeSearchModal">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="searchUser">Search</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-toolbar>
</template>

<script>
export default {
  name: 'MenuComponent',
  computed: {
    statusMember() {
      return this.$store.state.memberStatus;
    },
    focusedUserId() {
      return this.$store.state.focusedMember;
    },
    user() {
      return this.$store.state.memberList.find(user => user.id === this.focusedUserId);
    },
  },
  data() {
    return {
      createModalOpen: false,
      patchModalOpen: false,
      searchModalOpen: false,
      newUser: {
        firstName: '',
        lastName: '',
        company: '',
        job: '',
        phone: '',
        email: '',
        hobby: '',
      },
      editedUser: {
        firstName: '',
        lastName: '',
        company: '',
        job: '',
        phone: '',
        email: '',
        hobby: '',
      },
      searchedUser: {
        firstName: '',
        lastName: '',
        company: '',
        job: '',
        phone: '',
        email: '',
        hobby: '',
      },
    };
  },
  methods: {
    handleAction(action) {
      switch (action) {
        case 'create':
          this.openCreateModal();
          break;
        case 'patch':
          if (this.focusedUserId) {
            this.openPatchModal();
          }
          break;
        case 'delete':
          if (this.focusedUserId) {
            this.$store.dispatch('deleteData', this.focusedUserId);
          }
          break;
        case 'search':
          this.openSearchModal();
          break;
        default:
          break;
      }
    },
    openCreateModal() {
      this.createModalOpen = true;
    },
    closeCreateModal() {
      this.createModalOpen = false;
    },
    createUser() {
      this.createModalOpen = false;
      if (this.newUser) {
        this.$store.dispatch('postData', this.newUser);
        this.newUser = null;
      }
    },
    openPatchModal() {
      this.editedUser = { ...this.user };
      this.patchModalOpen = true;
    },
    closePatchModal() {
      this.patchModalOpen = false;
    },
    patchUser() {
      this.$store.dispatch('patchData', [this.focusedUserId, this.editedUser]);
      this.patchModalOpen = false;
    },
    openSearchModal() {
      this.searchedUser = {};
      this.searchModalOpen = true;
    },
    closeSearchModal() {
      this.searchModalOpen = false;
    },
    searchUser() {
      this.$store.dispatch('getDataByFilter', this.searchedUser);
      this.searchModalOpen = false;
    },
    updateMemberList() {
      this.$store.dispatch('getData');
    },
  },
};
</script>

<style>
.title {
  margin-right: 8px;
}
</style>
