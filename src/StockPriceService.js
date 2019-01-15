import axios from "axios";

export default class StockPriceService {
  static async getStockPriceBySymbol(symbol) {
    const response = await axios.get(
      `https://api.iextrading.com/1.0/stock/${symbol}/price`
    );
    return response.data;
  }
}
