<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <StockSymbolInput/>
    <div class="flex flex-row justify-center mt-5">
      <StockCard v-for="stock in userStocks" :key="stock.stockSymbol" :stock="stock"/>
    </div>
  </div>
</template>

<script>
import store from '../store/store'
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
