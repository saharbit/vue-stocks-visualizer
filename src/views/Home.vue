<template>
  <div class="flex flex-1 flex-col">
    <img alt="Vue logo" class="h-10 absolute mt-2 ml-2" src="../assets/logo.png">
    <pie-chart class="pie-chart self-center"/>
    <stock-symbol-input/>
    <div class="flex flex-row flex-wrap justify-center">
      <stock-card v-for="stock in userStocks" :key="stock.stockSymbol" :stock="stock"/>
    </div>
  </div>
</template>

<script>
import store from "../store/store";
import StockSymbolInput from "../components/StockSymbolInput.vue";
import StockCard from "../components/StockCard.vue";
import PieChart from "../components/PieChart.vue";

export default {
  name: "home",
  components: {
    StockSymbolInput,
    StockCard,
    PieChart
  },
  computed: {
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
