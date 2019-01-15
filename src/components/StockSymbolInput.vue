<template>
  <div>
    <el-input
      class="w-1/3"
      placeholder="STOCK SYMBOL (e.g AAPL)"
      v-model="input"
      @keyup.enter.native="fetchStockPrice"
    />
    <div class="mt-2">{{ price }}</div>
  </div>
</template>

<script>
import StockPriceService from "@/views/StockPriceService";
import { mapMutations } from "vuex";

export default {
  name: "StockSymbolInput",
  data() {
    return {
      input: ""
    };
  },
  methods: {
    ...mapMutations(["addStock"])
  }
};
</script>

<style lang="scss" scoped>
</style>
