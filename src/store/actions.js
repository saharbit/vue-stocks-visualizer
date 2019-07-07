import MarketDataService from '../services/MarketDataService';
import {
  ADD_ALL_STOCKS,
  ADD_STOCK,
  CHANGE_APP_STATE,
  FETCH_ALL_STOCK_SYMBOLS,
  FETCH_PRICE_AND_ADD_STOCK,
  UPDATE_STOCK
} from './constants';

export default {
  async [FETCH_PRICE_AND_ADD_STOCK]({ commit }, stockSymbol) {
    commit(ADD_STOCK, stockSymbol);
    const stockPrice = await MarketDataService.getStockPriceBySymbol(stockSymbol);
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
};
