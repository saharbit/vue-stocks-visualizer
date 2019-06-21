import axios from 'axios';

const token = 'pk_3a33818a6b044742ab7aed6c2ab10df0';
const ROOT_URL = 'https://cloud.iexapis.com/v1';

export default class MarketDataService {
  static async getStockPriceBySymbol(symbol) {
    const response = await axios.get(`${ROOT_URL}/stock/${symbol}/price`, { params: { token } });
    return response.data;
  }

  static async getAllStockSymbols() {
    const response = await axios.get(`${ROOT_URL}/ref-data/symbols`, { params: { token } });
    return response.data;
  }
}
