import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeOrder: {},
    companyToRegister: {}
  },
  mutations: {
    setActiveOrder(state, payload) {
      state.activeOrder = payload;
    },
    setCompanyToRegister(state, payload) {
      state.companyToRegister = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
