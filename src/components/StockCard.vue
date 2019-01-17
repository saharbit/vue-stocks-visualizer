<template>
  <el-card class="box-card text-left mx-2">
    <div slot="header" class="font-bold uppercase">
      <span>{{ stock.stockSymbol }}</span>
    </div>
    <div class="text">{{'Price ' + stock.stockPrice}}</div>
    <div class="text">{{'Price ' + stock.stockPrice}}</div>
    <div class="text">{{'Price ' + stock.stockPrice}}</div>
  </el-card>
</template>

<script>
export default {
  name: "StockCard",
  props: {
    stock: Object
  }
};
</script>

<style>
.text {
  font-size: 14px;
  @apply my-2;
}

.box-card {
  width: 200px;
}
</style>