import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'hello I am default message from state'
  },
  getters: {
  },
  mutations: {
    UPDATE_MESSAGE(state, payload) {
      state.message = payload;
    },
  },
  actions: {
    updateMainMessage(context, payload) {
      context.commit('UPDATE_MESSAGE', payload)
    },
  },
  modules: {
  }
})
