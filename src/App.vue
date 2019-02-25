<template>
  <div class="app container flex mx-auto">
    <div v-loading.fullscreen.lock="isAppLoading"></div>
    <router-view />
  </div>
</template>

<script>
import { FETCH_ALL_STOCK_SYMBOLS } from './store/action-types';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'app',
  computed: mapState(['isAppLoading']),
  methods: {
    ...mapActions({ fetchAllStocks: FETCH_ALL_STOCK_SYMBOLS })
  },
  mounted() {
    this.fetchAllStocks();
  }
};
</script>

<style>
html {
  background-color: #eaeaf5;
}
.app {
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
