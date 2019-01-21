<template>
  <div>
    <el-autocomplete
            class="inline-input ml-1 w-1/3"
            v-model="input"
            :fetch-suggestions="querySearch"
            placeholder="STOCK SYMBOL (e.g AAPL)"
            :trigger-on-focus="false"
            @keyup.enter.native="addStock(input)"
    />
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";
  import { FETCH_ALL_STOCK_SYMBOLS, FETCH_PRICE_AND_ADD_STOCK } from "../store/action-types";

  export default {
    name: "StockSymbolInput",
    data () {
      return {
        input: "",
      };
    },
    computed: mapState(['allStockSymbols']),
    methods: {
      ...mapActions({addStock: FETCH_PRICE_AND_ADD_STOCK, fetchAllStocks: FETCH_ALL_STOCK_SYMBOLS}),

      querySearch (queryString, cb) {
        const results = queryString ? this.allStockSymbols.filter(this.filterStocks(queryString)) : this.allStockSymbols;

        cb(results);
      },

      filterStocks (queryString) {
        return stock => stock.symbol.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      }
    },
    mounted () {
      this.fetchAllStocks();
    }
  };
</script>

<style lang="scss" scoped>

</style>
