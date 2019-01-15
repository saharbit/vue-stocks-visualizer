import Vue from "vue";
import Vuex from "vuex";
import StockPriceService from "./StockPriceService";

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
      const stockPrice = await StockPriceService.getStockPriceBySymbol(
        stockSymbol
      );
      commit("addStock", { stockSymbol, stockPrice });
    }
  }
});
