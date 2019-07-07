import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const INITIAL_STATE = {
  isAppLoading: false,
  userStocks: [],
  allStockSymbols: []
};

export default new Vuex.Store({
  state: INITIAL_STATE,
  mutations,
  actions,
  getters
});
