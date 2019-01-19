<template>
  <el-card class="box-card text-left mx-2">
    <div slot="header" class="uppercase flex justify-between items-center ">
      <span>{{ stock.stockSymbol }}</span>
      <i class="el-icon-remove-outline cursor-pointer" @click="removeStock(stock.stockSymbol)"></i>
    </div>
    <div>
      <div class="mb-5"><span class="text-xl font-bold">{{ stock.stockPrice }}</span><span> USD</span></div>
      <el-input-number class="mx-auto" v-model="amount" :min="0"/>
    </div>
  </el-card>
</template>

<script>
  import { mapMutations } from 'vuex';
  import { REMOVE_STOCK } from "../store/mutation-types";

  export default {
    name: "StockCard",
    data () {
      return {
        amount: 0
      }
    },
    props: {
      stock: Object
    },
    methods: {
      ...mapMutations({removeStock: REMOVE_STOCK})
    }
  };
</script>

<style>
  .box-card {
    width: 225px;
  }
</style>