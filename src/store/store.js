import Vue from "vue";
import Vuex from "vuex";
import MarketDataService from "../services/MarketDataService";
import {
  ADD_ALL_STOCKS,
  ADD_STOCK,
  CHANGE_APP_STATE,
  UPDATE_STOCK,
  REMOVE_STOCK
} from "./mutation-types";
import {
  FETCH_ALL_STOCK_SYMBOLS,
  FETCH_PRICE_AND_ADD_STOCK
} from "./action-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAppLoading: false,
    userStocks: [],
    allStockSymbols: []
  },
  mutations: {
    [CHANGE_APP_STATE](state, isAppLoading) {
      state.isAppLoading = isAppLoading;
    },
    [ADD_STOCK](state, stockSymbol) {
      if (!state.userStocks.find(stock => stock.stockSymbol === stockSymbol)) {
        state.userStocks = [
          ...state.userStocks,
          { stockSymbol, stockPrice: null, amount: 0 }
        ];
      }
    },
    [REMOVE_STOCK](state, stockSymbol) {
      state.userStocks = state.userStocks.filter(
        stock => stock.stockSymbol !== stockSymbol
      );
    },
    [UPDATE_STOCK](state, { stockSymbol, ...rest }) {
      const { userStocks } = state;
      const index = state.userStocks.findIndex(
        stock => stock.stockSymbol === stockSymbol
      );
      Vue.set(userStocks, index, { ...userStocks[index], ...rest });
    },
    [ADD_ALL_STOCKS](state, stocks) {
      state.allStockSymbols = stocks;
      state.isAppLoading = false;
    }
  },
  actions: {
    async [FETCH_PRICE_AND_ADD_STOCK]({ commit }, stockSymbol) {
      commit(ADD_STOCK, stockSymbol);
      const stockPrice = await MarketDataService.getStockPriceBySymbol(
        stockSymbol
      );
      commit(UPDATE_STOCK, { stockSymbol, stockPrice });
    },
    async [FETCH_ALL_STOCK_SYMBOLS]({ commit }) {
      commit(CHANGE_APP_STATE, true);
      const stocks = await MarketDataService.getAllStockSymbols();
      const mappedStocks = stocks.map(stock => ({
        ...stock,
        value: stock.symbol
      }));
      commit(ADD_ALL_STOCKS, mappedStocks);
    }
  }
});
