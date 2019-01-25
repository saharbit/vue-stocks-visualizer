<template>
  <el-card class="text-left mx-2 my-3 w-2/3 md:w-1/3 lg:w-1/5" v-loading="!stock.stockPrice">
    <div slot="header" class="uppercase flex justify-between items-center">
      <span>{{ stock.stockSymbol }}</span>
      <i class="el-icon-remove-outline cursor-pointer" @click="removeStock(stock.stockSymbol)"></i>
    </div>
    <div class="card-body flex justify-between flex-col">
      <div v-if="stock.stockPrice">
        <span class="text-xl font-bold mr-1">{{ stock.stockPrice }}</span>
        <span>USD</span>
      </div>
      <el-input-number
        class="mx-auto"
        v-model="amount"
        @change="updateStock({stockSymbol: stock.stockSymbol, amount})"
        :min="0"
      />
    </div>
  </el-card>
</template>

<script>
import { mapMutations } from "vuex";
import { UPDATE_STOCK, REMOVE_STOCK } from "../store/mutation-types";

export default {
  name: "StockCard",
  data() {
    return {
      amount: 0
    };
  },
  props: {
    stock: { stockPrice: String, stockSymbol: String, amount: Number }
  },
  methods: {
    ...mapMutations({
      removeStock: REMOVE_STOCK,
      updateStock: UPDATE_STOCK
    })
  }
};
</script>

<style>
.el-icon-remove-outline:hover {
  opacity: 0.6;
}

.card-body {
  height: 80px;
}
</style>