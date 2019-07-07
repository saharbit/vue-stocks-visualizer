import Vue from 'vue';
import { ADD_ALL_STOCKS, ADD_STOCK, CHANGE_APP_STATE, REMOVE_STOCK, UPDATE_STOCK } from './constants';

export default {
  [CHANGE_APP_STATE](state, isAppLoading) {
    state.isAppLoading = isAppLoading;
  },
  [ADD_STOCK](state, stockSymbol) {
    if (!state.userStocks.find(stock => stock.stockSymbol === stockSymbol)) {
      state.userStocks = [
        ...state.userStocks,
        {
          stockSymbol,
          stockPrice: null,
          amount: 0,
          color: '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
        }
      ];
    }
  },
  [REMOVE_STOCK](state, stockSymbol) {
    state.userStocks = state.userStocks.filter(stock => stock.stockSymbol !== stockSymbol);
  },
  [UPDATE_STOCK](state, { stockSymbol, ...rest }) {
    const { userStocks } = state;
    const index = state.userStocks.findIndex(stock => stock.stockSymbol === stockSymbol);
    Vue.set(userStocks, index, { ...userStocks[index], ...rest });
  },
  [ADD_ALL_STOCKS](state, stocks) {
    state.allStockSymbols = stocks;
    state.isAppLoading = false;
  }
};
