import Vue from 'vue';
import Vuex from 'vuex';
import {
  deleteData,
  changeDrawerStatus,
  changeMemberStatus,
  getData,
  getDataByFilter,
  getDataById,
  getDataByPage,
  patchData,
  postData,
  putData,
} from '@/store/actions';
import { MEMBER_STATUS } from '@/utils/variables';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      memberList: [],
      postId: null,
      patchId: null,
      putId: null,
      deleteId: null,
      isDrawerOpen: false,
      memberStatus: MEMBER_STATUS.ALL,
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
      CHANGE_DRAWER_STATUS(state) {
        state.isDrawerOpen = !state.isDrawerOpen;
      },
      CHANGE_MEMBER_STATUS(state, status) {
        state.memberStatus = status;
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
      changeDrawerStatus,
      changeMemberStatus,
    },
  },
);
