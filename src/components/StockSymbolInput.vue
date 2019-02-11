<template>
  <el-autocomplete
    class="inline-input w-full md:w-1/2 lg:w-1/3 mx-auto px-5 my-3"
    v-model="input"
    :fetch-suggestions="querySearch"
    placeholder="STOCK SYMBOL (e.g AAPL)"
    :trigger-on-focus="false"
    @select="
      addStock(input);
      clearInput();
    "
  />
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { FETCH_PRICE_AND_ADD_STOCK } from '../store/action-types';

export default {
  name: 'StockSymbolInput',
  data() {
    return {
      input: ''
    };
  },
  computed: mapState(['allStockSymbols']),
  methods: {
    clearInput() {
      this.input = '';
    },

    ...mapActions({ addStock: FETCH_PRICE_AND_ADD_STOCK }),

    querySearch(queryString, cb) {
      const results = queryString ? this.allStockSymbols.filter(this.filterStocks(queryString)) : this.allStockSymbols;

      cb(results);
    },

    filterStocks(queryString) {
      return stock => stock.symbol.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
    }
  }
};
</script>

<style lang="scss" scoped></style>
