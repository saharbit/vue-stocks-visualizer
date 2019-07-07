<template>
  <div class="flex flex-1 flex-col">
    <img alt="Vue logo" class="absolute logo" src="../assets/logo.png" />
    <h2 class="self-center mt-3">Portfolio worth: {{ netWorth }}$</h2>
    <stock-symbol-input />
    <pie-chart class="pie-chart self-center mb-2" :chart-data="chartData" />
    <div class="flex flex-row flex-wrap">
      <stock-card v-for="stock in userStocks" :key="stock.stockSymbol" :stock="stock" />
    </div>
  </div>
</template>

<script>
import store from '../store/store';
import StockSymbolInput from '../components/StockSymbolInput.vue';
import StockCard from '../components/StockCard.vue';
import PieChart from '../components/PieChart.vue';
import { mapGetters } from 'vuex';
import { GET_CHART_DATA, GET_NET_WORTH } from '../store/constants';

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

.logo {
  height: 200px;
  width: 200px;
}
</style>
