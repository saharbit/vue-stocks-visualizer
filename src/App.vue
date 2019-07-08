<template>
  <div class="app container-fluid flex flex-col flex-1">
    <div v-loading.fullscreen.lock="isAppLoading"></div>
    <router-view />
    <VFooter class="mt-2" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { FETCH_ALL_STOCK_SYMBOLS } from './store/constants';
import VFooter from './components/VFooter';

export default {
  name: 'app',
  components: { VFooter },
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
  background-color: #f7f7f7;
}
.app {
  min-height: 100vh;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
