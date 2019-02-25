<template>
  <div class="flex flex-1 flex-col">
    <img alt="Vue logo" class="h-10 absolute mt-2 ml-2" src="../assets/logo.png" />
    <pie-chart class="pie-chart self-center" :chart-data="chartData" />
    <h3 class="self-center mt-3">Total net worth: {{ netWorth }}$</h3>
    <stock-symbol-input />
    <div class="flex flex-row flex-wrap justify-center">
      <stock-card v-for="stock in userStocks" :key="stock.stockSymbol" :stock="stock" />
    </div>
  </div>
</template>

<script>
import store from '../store/store';
import StockSymbolInput from '../components/StockSymbolInput.vue';
import StockCard from '../components/StockCard.vue';
import PieChart from '../components/PieChart.vue';
import { GET_CHART_DATA, GET_NET_WORTH } from '../store/getter-types';
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  components: {
    StockSymbolInput,
    StockCard,
    PieChart
  },
  computed: {
    ...mapGetters({ chartData: GET_CHART_DATA, netWorth: GET_NET_WORTH }),
    userStocks() {
      return store.state.userStocks;
    }
  }
};
</script>

<style>
.pie-chart {
  height: 250px;
  width: 250px;
}
</style>
