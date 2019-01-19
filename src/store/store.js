import Vue from "vue";
import Vuex from "vuex";
import MarketDataService from "../services/MarketDataService";
import { ADD_STOCK, REMOVE_STOCK } from "./mutation-types";
import { FETCH_PRICE_AND_ADD_STOCK } from "./action-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stocks: []
  },
  mutations: {
    [ADD_STOCK] (state, stock) {
      state.stocks = [...state.stocks, stock];
    },
    [REMOVE_STOCK] (state, stockSymbol) {
      state.stocks = state.stocks.filter(stock => stock.stockSymbol !== stockSymbol)
    }
  },
  actions: {
    async [FETCH_PRICE_AND_ADD_STOCK] ({commit}, stockSymbol) {
      const stockPrice = await MarketDataService.getStockPriceBySymbol(
          stockSymbol
      );
      commit(ADD_STOCK, {stockSymbol, stockPrice});
    }
  }
});
