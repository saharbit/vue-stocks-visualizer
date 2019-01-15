<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <StockSymbolInput/>
    <ul>
      <div v-for="stock in stocks" :key="stock.name">{{stock.name}}</div>
    </ul>
  </div>
</template>

<script>
import store from "@/store";
import StockSymbolInput from "@/components/StockSymbolInput";
// import StockCard from "@/components/StockCard";

export default {
  store,
  name: "home",
  components: {
    StockSymbolInput
    // StockCard
  },
  computed: {
    stocks() {
      return store.state.stocks;
    }
  }
};
</script>
