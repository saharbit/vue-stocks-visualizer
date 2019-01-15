import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stocks: []
  },
  mutations: {
    addStock (state, stock) {
      state.stocks = [...state.stocks, stock]
    }
  },
  actions: {

  }
})
