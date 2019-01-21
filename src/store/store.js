import Vue from "vue";
import Vuex from "vuex";
import MarketDataService from "../services/MarketDataService";
import { ADD_ALL_STOCKS, ADD_STOCK, CHANGE_STOCK_AMOUNT, REMOVE_STOCK } from "./mutation-types";
import { FETCH_ALL_STOCK_SYMBOLS, FETCH_PRICE_AND_ADD_STOCK } from "./action-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userStocks: [],
    allStockSymbols: []
  },
  mutations: {
    [ADD_STOCK] (state, stock) {
      state.userStocks = [...state.userStocks, {...stock, amount: 0}];
    },
    [REMOVE_STOCK] (state, stockSymbol) {
      state.userStocks = state.userStocks.filter(stock => stock.stockSymbol !== stockSymbol)
    },
    [CHANGE_STOCK_AMOUNT] (state, {stockSymbol, amount}) {
      let index = state.userStocks.findIndex(stock => stock.stockSymbol === stockSymbol);
      state.userStocks[index].amount = amount;
    },
    [ADD_ALL_STOCKS] (state, stocks) {
      state.allStockSymbols = stocks;
    }
  },
  actions: {
    async [FETCH_PRICE_AND_ADD_STOCK] ({commit}, stockSymbol) {
      const stockPrice = await MarketDataService.getStockPriceBySymbol(
          stockSymbol
      );
      commit(ADD_STOCK, {stockSymbol, stockPrice});
    },
    async [FETCH_ALL_STOCK_SYMBOLS] ({commit}) {
      const stocks = await MarketDataService.getAllStockSymbols();
      const mappedStocks = stocks.map(stock => ({...stock, value: stock.symbol}));
      commit(ADD_ALL_STOCKS, mappedStocks)
    }
  }
});
