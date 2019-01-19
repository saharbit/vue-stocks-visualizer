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
  import { FETCH_PRICE_AND_ADD_STOCK } from "../store/action-types";

  export default {
    name: "StockSymbolInput",
    data () {
      return {
        input: ""
      };
    },
    methods: {
      ...mapActions({ addStock: FETCH_PRICE_AND_ADD_STOCK })
    }
  };
</script>

<style lang="scss" scoped>

</style>
