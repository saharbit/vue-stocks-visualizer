<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <StockSymbolInput/>
  </div>
</template>

<script>
import StockSymbolInput from "@/components/StockSymbolInput";

export default {
  name: "home",
  components: {
    StockSymbolInput
  }
};
</script>
