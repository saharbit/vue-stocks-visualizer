import Vue from "vue";
import Vuex from "vuex";
import MarketDataService from "./services/MarketDataService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stocks: []
  },
  mutations: {
    addStock(state, stock) {
      state.stocks = [...state.stocks, stock];
    }
  },
  actions: {
    async addStock({ commit }, stockSymbol) {
      console.log(stockSymbol);
      const stockPrice = await MarketDataService.getStockPriceBySymbol(
        stockSymbol
      );
      commit("addStock", { stockSymbol, stockPrice });
    }
  }
});
