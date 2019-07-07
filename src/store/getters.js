import { GET_CHART_DATA, GET_NET_WORTH } from './constants';

export default {
  [GET_CHART_DATA](state) {
    const { userStocks } = state;
    let labels = [];
    let backgroundColor = [];
    let data = [];

    userStocks.map(stock => {
      labels.push(stock.stockSymbol);
      data.push((stock.amount * stock.stockPrice).toFixed(2));
      backgroundColor.push(stock.color);
    });

    const datasets = [{ data, backgroundColor }];
    return { labels, datasets };
  },
  [GET_NET_WORTH](state) {
    const { userStocks } = state;
    if (userStocks.length > 0) {
      return userStocks.reduce((x, y) => x + y.stockPrice * y.amount, 0).toFixed(2);
    } else {
      return 0;
    }
  }
};
