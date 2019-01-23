<template>
  <div id="app" class="h-screen">
    <div v-loading.fullscreen.lock="isAppLoading"/>
    <router-view/>
  </div>
</template>

<script>
  import { FETCH_ALL_STOCK_SYMBOLS } from "./store/action-types";
  import { mapActions, mapState } from 'vuex'

  export default {
    name: "app",
    computed: mapState(['isAppLoading']),
    methods: {
      ...mapActions({fetchAllStocks: FETCH_ALL_STOCK_SYMBOLS})
    },
    mounted () {
      this.fetchAllStocks();
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
