import axios from "axios";

const ROOT_URL = "https://api.iextrading.com/1.0";

export default class MarketDataService {
  static async getStockPriceBySymbol (symbol) {
    const response = await axios.get(
        `${ROOT_URL}/stock/${symbol}/price`
    );
    return response.data;
  }

  static async getAllStockSymbols () {
    const response = await axios.get(`${ROOT_URL}/ref-data/symbols`)
    return response.data;
  }
}
