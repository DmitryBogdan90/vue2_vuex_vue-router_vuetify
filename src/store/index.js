import Vue from 'vue';
import Vuex from 'vuex';
import {
  deleteData,
  drawerStatusChange,
  getData,
  getDataByFilter,
  getDataById,
  getDataByPage,
  patchData,
  postData,
  putData,
} from '@/store/actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      memberList: [],
      postId: null,
      patchId: null,
      putId: null,
      deleteId: null,
      isDrawerOpen: false,
    },
    mutations: {
      SET_DATA(state, data) {
        state.memberList = data;
      },
      POST_SUCCESS(state, data) {
        state.postId = data;
      },
      PATCH_SUCCESS(state, data) {
        state.patchId = data;
      },
      PUT_SUCCESS(state, data) {
        state.putId = data;
      },
      DELETE_SUCCESS(state, data) {
        state.deleteId = data;
      },
      DRAWER_STATUS_CHANGED(state) {
        state.isDrawerOpen = !state.isDrawerOpen;
      },
    },
    actions: {
      getData,
      getDataById,
      getDataByFilter,
      getDataByPage,
      postData,
      patchData,
      putData,
      deleteData,
      drawerStatusChange,
    },
  },
);
