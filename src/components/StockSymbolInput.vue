<template>
  <div>
    <el-input
      class="w-1/3"
      placeholder="STOCK SYMBOL (e.g AAPL)"
      v-model="input"
      @keyup.enter.native="addStock(input)"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import store from "@/store";

export default {
  store,
  name: "StockSymbolInput",
  data() {
    return {
      input: ""
    };
  },
  methods: {
    ...mapActions(["addStock"])
  }
};
</script>

<style lang="scss" scoped>
</style>
