<template>
  <div class="flex flex-1 flex-col">
    <img alt="Vue logo" class="self-center" src="../assets/logo.png">
    <StockSymbolInput/>
    <div class="flex flex-row flex-wrap justify-center">
      <StockCard v-for="stock in userStocks" :key="stock.stockSymbol" :stock="stock"/>
    </div>
  </div>
</template>

<script>
import store from "../store/store";
import StockSymbolInput from "../components/StockSymbolInput";
import StockCard from "../components/StockCard";

export default {
  name: "home",
  components: {
    StockSymbolInput,
    StockCard
  },
  computed: {
    userStocks() {
      return store.state.userStocks;
    }
  }
};
</script>

<style>
</style>
